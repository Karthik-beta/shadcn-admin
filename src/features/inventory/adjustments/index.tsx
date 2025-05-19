import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { columns } from './components/adjustments-columns'
import { ItemsDialogs } from './components/adjustments-dialogs'
import { ItemsPrimaryButtons } from './components/adjustments-primary-buttons'
import { ItemsTable } from './components/adjustments-table'
import ItemsProvider from './context/adjustments-context'
import { adjustmentListSchema } from './data/schema'
import { adjustments } from './data/adjustments'
import { TopBreadcrumb } from '@/components/layout/breadcrumb'

export default function Items() {
  // Parse user list
  const adjustmentList = adjustmentListSchema.parse(adjustments)

  const breadcrumbItems = [
    { label: 'Dashboard', path: '/' },
    { label: 'Inventory', isDisabled: true },
    { label: 'Adjustments', isCurrentPage: true }
  ];

  return (
    <ItemsProvider>
      <Header fixed>
        <TopBreadcrumb items={breadcrumbItems} />
        <div className='ml-auto flex items-center space-x-4'>
        <Search />
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        <div className='mb-2 flex flex-wrap items-center justify-between space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>Inventory Adjustments</h2>
            <p className='text-muted-foreground'>
              Manage your Adjustments here.
            </p>
          </div>
          <ItemsPrimaryButtons />
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <ItemsTable data={adjustmentList} columns={columns} />
        </div>
      </Main>

      <ItemsDialogs />
    </ItemsProvider>
  )
}
