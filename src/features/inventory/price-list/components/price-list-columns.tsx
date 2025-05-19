import { ColumnDef } from '@tanstack/react-table'
import { cn } from '@/lib/utils'
import { Checkbox } from '@/components/ui/checkbox'
import LongText from '@/components/long-text'
import { PriceList } from '../data/schema'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'

export const columns: ColumnDef<PriceList>[] = [
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
    accessorKey: 'nameDescription',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Name and Description' />
    ),
    cell: ({ row }) => (
      <LongText>{row.getValue('nameDescription')}</LongText>
    ),
    enableHiding: true,
    enableSorting: true,
    meta: {
      title: 'Name and Description', // Add title here
      className: cn(
        'drop-shadow-[0_1px_2px_rgb(0_0_0_/_0.1)] dark:drop-shadow-[0_1px_2px_rgb(255_255_255_/_0.1)] lg:drop-shadow-none',
        'bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted',
        'sticky left-6 md:table-cell'
      ),
    }
  },
  {
    accessorKey: 'currency',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Currency' />
    ),
    cell: ({ row }) => {
      return <LongText>{row.getValue('currency')}</LongText>
    },
    // meta: { className: 'w-36' },
    enableHiding: true,
    enableSorting: true,
    meta: {
      title: 'Currency', // Add title here
      className: '', // Add the required className property
    }
  },
  {
    accessorKey: 'details',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Details' />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex space-x-2'>{row.getValue('details')}</div>
      )
    },
    enableHiding: true,
    enableSorting: true,
    meta: {
      title: 'Details', // Add title here
      className: '', // Add the required className property
    }
  },
  {
    accessorKey: 'pricingScheme',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Pricing Scheme' />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex space-x-2'>{row.getValue('pricingScheme')}</div>
      )
    },
    enableHiding: true,
    enableSorting: true,
    meta: {
      title: 'Pricing Scheme', // Add title here
      className: '', // Add the required className property
    }
  },
  {
    accessorKey: 'roundOffPreference',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Round Off Preference' />
    ),
    cell: ({ row }) => (
      <LongText>{row.getValue('roundOffPreference')}</LongText>
    ),
    enableHiding: true,
    enableSorting: true,
    meta: {
      title: 'Round Off Preference', // Add title here
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
    id: 'actions',
    cell: DataTableRowActions,
  },
]
