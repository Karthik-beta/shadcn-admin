import { createLazyFileRoute } from '@tanstack/react-router'
import Adjustments from '@/features/inventory/adjustments'

export const Route = createLazyFileRoute('/_authenticated/inventory/adjustments' as const)({
  component: Adjustments,
})
