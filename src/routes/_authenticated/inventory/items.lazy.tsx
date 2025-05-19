import { createLazyFileRoute } from '@tanstack/react-router'
// import ComingSoon from '@/components/coming-soon'
import InventoryItems from '@/features/inventory/items'

export const Route = createLazyFileRoute('/_authenticated/inventory/items')({
  component: InventoryItems,
})
