import { createLazyFileRoute } from '@tanstack/react-router'
import itemGroups from '@/features/inventory/item-groups'

export const Route = createLazyFileRoute('/_authenticated/inventory/itemsGroups')({
  component: itemGroups,
})
