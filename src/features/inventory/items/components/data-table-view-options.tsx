import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { MixerHorizontalIcon, DragHandleDots2Icon } from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

interface ColumnItem {
  id: string
  title: string
}

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>
}

interface SortableItemProps {
  id: string
  title: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

function SortableItem({ id, title, checked, onCheckedChange }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} className="flex items-center px-2 py-1.5 gap-2">
      <div {...attributes} {...listeners} className="cursor-grab p-1">
        <DragHandleDots2Icon className="h-4 w-4 text-muted-foreground" />
      </div>
      <Checkbox 
        id={`checkbox-${id}`} 
        checked={checked} 
        onCheckedChange={(value) => onCheckedChange(!!value)} 
      />
      <label 
        htmlFor={`checkbox-${id}`} 
        className="flex-1 text-sm capitalize cursor-pointer"
      >
        {title}
      </label>
    </div>
  )
}

export function DataTableViewOptions<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {
  // Get all eligible columns
  const columns = table
    .getAllColumns()
    .filter((column) => 
      typeof column.accessorFn !== 'undefined' && 
      column.getCanHide() && 
      column.id !== 'select' && 
      column.id !== 'actions'
    );

  // Create a state to track the order of columns
  const [columnItems, setColumnItems] = useState<ColumnItem[]>(
    columns.map((column) => ({
      id: column.id,
      title: column.columnDef.meta?.title ?? column.id,
    }))
  );

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (over && active.id !== over.id) {
      setColumnItems((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id)
        const newIndex = items.findIndex((i) => i.id === over.id)
        const newItems = arrayMove(items, oldIndex, newIndex)

        // keep 'select' first and 'actions' last
        table.setColumnOrder([
          'select',
          ...newItems.map((i) => i.id),
          'actions',
        ])

        return newItems
      })
    }
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
        >
          <MixerHorizontalIcon className="mr-2 h-4 w-4" />
          View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuLabel>Customize Columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="max-h-[400px] overflow-y-auto">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext items={columnItems} strategy={verticalListSortingStrategy}>
              {columnItems.map((columnItem) => {
                const column = table.getColumn(columnItem.id);
                
                if (!column) return null;
                
                return (
                  <SortableItem
                    key={column.id}
                    id={column.id}
                    title={columnItem.title}
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(value)}
                  />
                );
              })}
            </SortableContext>
          </DndContext>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}