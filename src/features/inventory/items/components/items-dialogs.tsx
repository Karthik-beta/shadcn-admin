// import { useItems } from '../context/items-context'
// import { ItemsActionDialog } from './items-action-dialog'
// import { ItemsDeleteDialog } from './items-delete-dialog'
// import { ItemsInviteDialog } from './items-invite-dialog'

export function ItemsDialogs() {
  // const { open, setOpen, currentRow, setCurrentRow } = useItems()
  return (
    <>
      {/* <ItemsActionDialog
        key='user-add'
        open={open === 'add'}
        onOpenChange={() => setOpen('add')}
      />

      <ItemsInviteDialog
        key='user-invite'
        open={open === 'invite'}
        onOpenChange={() => setOpen('invite')}
      />

      {currentRow && (
        <>
          <ItemsActionDialog
            key={`user-edit-${currentRow.id}`}
            open={open === 'edit'}
            onOpenChange={() => {
              setOpen('edit')
              setTimeout(() => {
                setCurrentRow(null)
              }, 500)
            }}
            currentRow={currentRow}
          />

          <ItemsDeleteDialog
            key={`user-delete-${currentRow.id}`}
            open={open === 'delete'}
            onOpenChange={() => {
              setOpen('delete')
              setTimeout(() => {
                setCurrentRow(null)
              }, 500)
            }}
            currentRow={currentRow}
          />
        </>
      )} */}
    </>
  )
}
