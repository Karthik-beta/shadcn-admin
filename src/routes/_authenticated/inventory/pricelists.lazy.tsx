import { createLazyFileRoute } from '@tanstack/react-router'
import PriceList from '@/features/inventory/price-list'

export const Route = createLazyFileRoute('/_authenticated/inventory/pricelists')({
  component: PriceList,
})
