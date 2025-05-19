import { IconPlus } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { useItems } from '../context/price-list-context'

export function ItemsPrimaryButtons() {
  const { setOpen } = useItems()
  return (
    <div className='flex gap-2'>
      <Button className='space-x-1' onClick={() => setOpen('add')}>
        <span>New</span> <IconPlus size={18} />
      </Button>
    </div>
  )
}
