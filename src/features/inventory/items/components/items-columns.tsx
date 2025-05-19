import { ColumnDef } from '@tanstack/react-table'
import { cn } from '@/lib/utils'
import { Checkbox } from '@/components/ui/checkbox'
import LongText from '@/components/long-text'
import { Item } from '../data/schema'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'

export const columns: ColumnDef<Item>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
        className='translate-y-[2px]'
      />
    ),
    meta: {
      className: cn(
        'sticky md:table-cell left-0 z-10 rounded-tl',
        'bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted'
      ),
    },
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Name' />
    ),
    cell: ({ row }) => (
      <LongText>{row.getValue('name')}</LongText>
    ),
    // meta: {
    //   className: cn(
    //     'drop-shadow-[0_1px_2px_rgb(0_0_0_/_0.1)] dark:drop-shadow-[0_1px_2px_rgb(255_255_255_/_0.1)] lg:drop-shadow-none',
    //     'bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted',
    //     'sticky left-6 md:table-cell'
    //   ),
    // },
    enableHiding: true,
    enableSorting: true,
    meta: {
      title: 'Name', // Add title here
      className: '', // Add the required className property
    }
  },
  {
    accessorKey: 'sku',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='SKU' />
    ),
    cell: ({ row }) => {
      return <LongText>{row.getValue('sku')}</LongText>
    },
    // meta: { className: 'w-36' },
    enableHiding: true,
    enableSorting: true,
    meta: {
      title: 'SKU', // Add title here
      className: '', // Add the required className property
    }
  },
  {
    accessorKey: 'stockOnHand',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Stock on Hand' />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex space-x-2'>{row.getValue('stockOnHand')}</div>
      )
    },
    enableHiding: true,
    enableSorting: true,
    meta: {
      title: 'Stock on Hand', // Add title here
      className: '', // Add the required className property
    }
  },
  {
    accessorKey: 'reOrderLevel',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Reorder Level' />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex space-x-2'>{row.getValue('reOrderLevel')}</div>
      )
    },
    enableHiding: true,
    enableSorting: true,
    meta: {
      title: 'Reorder Level', // Add title here
      className: '', // Add the required className property
    }
  },
  {
    accessorKey: 'itemId',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Item ID' />
    ),
    cell: ({ row }) => (
      <LongText>{row.getValue('itemId')}</LongText>
    ),
    enableHiding: true,
    enableSorting: true,
    meta: {
      title: 'Item ID', // Add title here
      className: '', // Add the required className property
    }
  },  
  {
    accessorKey: 'createdTime',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Created Time' />
    ),
    cell: ({ row }) => (
      <div className='w-fit text-nowrap'>
        {row.getValue<Date>('createdTime').toLocaleString()}
      </div>
    ),
    enableHiding: true,
    enableSorting: true,
    meta: {
      title: 'Created Time', // Add title here
      className: '', // Add the required className property
    }
  },
  {
    accessorKey: 'lastModifiedTime',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Last Modified Time' />
    ),
    cell: ({ row }) => <div>
      {row.getValue<Date>('lastModifiedTime').toLocaleString()}
      </div>,
    enableSorting: true,
    meta: {
      title: 'Last Modified Time', // Add title here
      className: '', // Add the required className property
    }
  },
  {
    accessorKey: 'itemName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Item Name' />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex space-x-2'>{row.getValue('itemName')}</div>
      )
    },
    enableHiding: true,
    enableSorting: true,
    meta: {
      title: 'Item Name', // Add title here
      className: '', // Add the required className property
    }
  },
  {
    accessorKey: 'salesDescription',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Sales Description' />
    ),
    cell: ({ row }) => {

      return (
        <div className='flex items-center gap-x-2'>
          <span className='text-sm capitalize'>{row.getValue('salesDescription')}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    enableSorting: true,
    enableHiding: true,
    meta: {
      title: 'Sales Description', // Add title here
      className: '', // Add the required className property
    }
  },
  {
    accessorKey: 'sellingPrice',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Selling Price' />
    ),
    cell: ({ row }) => {

      return (
        <div className='flex items-center gap-x-2'>
          <span className='text-sm'>{row.getValue('sellingPrice')}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    enableSorting: true,
    enableHiding: true,
    meta: {
      title: 'Selling Price', // Add title here
      className: '', // Add the required className property
    }
  },
  {
    accessorKey: 'salesAccount',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Sales Account' />
    ),
    cell: ({ row }) => {

      return (
        <div className='flex items-center gap-x-2'>
          <span className='text-sm'>{row.getValue('salesAccount')}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    enableSorting: true,
    enableHiding: true,
    meta: {
      title: 'Sales Account', // Add title here
      className: '', // Add the required className property
    }
  },
  {
    accessorKey: 'isReturnable',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Is Returnable' />
    ),
    cell: ({ row }) => {        
        return (
          <div className='flex items-center gap-x-2'>
            <span className='text-sm'>{row.getValue('isReturnable') ? 'Yes' : 'No'}</span>
          </div>
        )
    },
    enableSorting: false,
    enableHiding: true,
    meta: {
      title: 'Is Returnable', // Add title here
      className: '', // Add the required className property
    }
  },
  {
    id: 'actions',
    cell: DataTableRowActions,
  },
]
