import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ItemsPrimaryButtons } from './components/item-groups-primary-buttons'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IconFolders, IconBox, IconLayersIntersect, IconTags } from "@tabler/icons-react";
import { ThemeSwitch } from '@/components/theme-switch'
import ItemGroupsProvider from "./context/item-groups-context";
import { TopBreadcrumb } from '@/components/layout/breadcrumb'

export default function itemGroups() {
    const breadcrumbItems = [
        { label: 'Dashboard', path: '/' },
        { label: 'Inventory', isDisabled: true },
        { label: 'Item Groups', isCurrentPage: true }
    ];

  return (    
    <ItemGroupsProvider>
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
                    <h2 className='text-2xl font-bold tracking-tight'>Item Groups</h2>
                    <p className='text-muted-foreground'>
                        Manage your Groups here.
                    </p>
                </div>
                <ItemsPrimaryButtons />
            </div>
            <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
                <div className="flex items-center justify-center p-24">        
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Item Groups */}
                        <Card className="h-full shadow-md border">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold flex flex-col items-center gap-2">
                            Item Groups
                            <IconFolders size={48} className="text-primary" />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                            Create multiple variants of the same item using Item Groups.
                            </p>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <Button>New Item Group</Button>
                        </CardFooter>
                        </Card>

                        {/* Items */}
                        <Card className="h-full shadow-md border">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold flex flex-col items-center gap-2">
                            Items
                            <IconBox size={48} className="text-primary" />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                            Create standalone items and services that you buy and sell.
                            </p>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <Button>New Item</Button>
                        </CardFooter>
                        </Card>

                        {/* Composite Items */}
                        <Card className="h-full shadow-md border">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold flex flex-col items-center gap-2">
                            Composite Items
                            <IconLayersIntersect size={48} className="text-primary" />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                            Group different items together and sell them as a single item.
                            </p>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <Button>Enable Now</Button>
                        </CardFooter>
                        </Card>

                        {/* Price Lists */}
                        <Card className="h-full shadow-md border">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold flex flex-col items-center gap-2">
                            Price Lists
                            <IconTags size={48} className="text-primary" />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                            Tweak your item prices for specific contacts or transactions.
                            </p>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <Button>New Price List</Button>
                        </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </Main>

    
    </ItemGroupsProvider>
  );
}