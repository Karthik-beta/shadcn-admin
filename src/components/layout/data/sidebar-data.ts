import {
  IconBrowserCheck,
  IconHelp,
  IconLayoutDashboard,
  IconNotification,
  IconPackages,
  IconPalette,
  IconSettings,
  IconTool,
  IconUserCog,
  IconBuildingWarehouse,
  IconAdjustmentsHorizontal,
  IconShoppingCart,
  IconShoppingBag,
  // IconReceipt,
  IconWallet,
  IconFileText,
  IconReceipt,
  IconInbox,
  IconPackage,
  IconCreditCard,
  IconCash,
  IconReceiptRefund,
  IconNote,
  IconUserCircle,
  IconClipboardList,
  IconClipboardCheck,
  IconFileInvoice,
  IconArrowBack,
  IconTruck,
  IconBuildingStore,
} from '@tabler/icons-react'
import { UserCheck, Contact, Boxes } from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'Karthik',
    email: 'karthik@pivotr.in',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Inventory',
      // logo: Command,
      logo: Boxes,
      plan: 'by Pivotr',
    },
    {
      name: 'CRM',
      // logo: GalleryVerticalEnd,
      logo: Contact,
      plan: 'by Pivotr',
    },
    {
      name: 'HR',
      // logo: AudioWaveform,
      logo: UserCheck,
      plan: 'by Pivotr',
    },
  ],
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: IconLayoutDashboard,
        }
      ],
    },
    {
      title: 'Inventory',
      items: [
        {
          title: 'Inventory',
          icon: IconBuildingWarehouse,
          items: [
            {
              title: 'Items',
              url: '/inventory/items',
              icon: IconPackage,
            },
            {
              title: 'Items Groups',
              url: '/inventory/itemsGroups',
              icon: IconPackages,
            },
            {
              title: 'Price Lists',
              url: '/inventory/pricelists',
              icon: IconReceipt,
            },
            {
              title: 'Adjustments',
              url: '/inventory/adjustments',
              icon: IconAdjustmentsHorizontal,
            },
          ],
        }
      ]
    },
    {
      title: 'Sales',
      items: [
        {
          title: 'Sales',
          icon: IconShoppingCart,
          items: [
            {
              title: 'Customers',
              url: '/sales/customers',
              icon: IconUserCircle,
            },
            {
              title: 'Sales Orders',
              url: '/sales/salesOrders',
              icon: IconClipboardList,
            },
            {
              title: 'Packages',
              url: '/sales/packages',
              icon: IconPackage,
            },
            {
              title: 'Shipments',
              url: '/sales/shipments',
              icon: IconTruck,
            },
            {
              title: 'Delivery Challans',
              url: '/sales/deliveryChallans',
              icon: IconFileInvoice,
            },
            {
              title: 'Invoices',
              url: '/sales/invoices',
              icon: IconFileText,
            },
            {
              title: 'Payments Received',
              url: '/sales/paymentsReceived',
              icon: IconCash,
            },
            {
              title: 'Sales Returns',
              url: '/sales/salesReturns',
              icon: IconArrowBack,
            },
            {
              title: 'Credit Notes',
              url: '/sales/credit-notes',
              icon: IconNote,
            },
          ],
        }
      ]
    },
    {
      title: 'Purchases',
      items: [
        {
          title: 'Purchases',
          icon: IconShoppingBag,
          items: [
            {
              title: 'Vendors',
              url: '/500',
              icon: IconBuildingStore,
            },
            {
              title: 'Expenses',
              url: '/500',
              icon: IconWallet,
            },
            {
              title: 'Purchase Orders',
              url: '/500',
              icon: IconClipboardCheck,
            },
            {
              title: 'Purchase Receives',
              url: '/500',
              icon: IconInbox,
            },
            {
              title: 'Bills',
              url: '/500',
              icon: IconFileInvoice,
            },
            {
              title: 'Payments Made',
              url: '/500',
              icon: IconCreditCard,
            },
            {
              title: 'Vendor Credits',
              url: '/500',
              icon: IconReceiptRefund,
            },
          ],
        }
      ]
    },
    // {
    //   title: 'Pages',
    //   items: [
    //     {
    //       title: 'Auth',
    //       icon: IconLockAccess,
    //       items: [
    //         {
    //           title: 'Sign In',
    //           url: '/sign-in',
    //         },
    //         {
    //           title: 'Sign In (2 Col)',
    //           url: '/sign-in-2',
    //         },
    //         {
    //           title: 'Sign Up',
    //           url: '/sign-up',
    //         },
    //         {
    //           title: 'Forgot Password',
    //           url: '/forgot-password',
    //         },
    //         {
    //           title: 'OTP',
    //           url: '/otp',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Errors',
    //       icon: IconBug,
    //       items: [
    //         {
    //           title: 'Unauthorized',
    //           url: '/401',
    //           icon: IconLock,
    //         },
    //         {
    //           title: 'Forbidden',
    //           url: '/403',
    //           icon: IconUserOff,
    //         },
    //         {
    //           title: 'Not Found',
    //           url: '/404',
    //           icon: IconError404,
    //         },
    //         {
    //           title: 'Internal Server Error',
    //           url: '/500',
    //           icon: IconServerOff,
    //         },
    //         {
    //           title: 'Maintenance Error',
    //           url: '/503',
    //           icon: IconBarrierBlock,
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      title: 'Other',
      items: [
        {
          title: 'Settings',
          icon: IconSettings,
          items: [
            {
              title: 'Profile',
              url: '/settings',
              icon: IconUserCog,
            },
            {
              title: 'Account',
              url: '/settings/account',
              icon: IconTool,
            },
            {
              title: 'Appearance',
              url: '/settings/appearance',
              icon: IconPalette,
            },
            {
              title: 'Notifications',
              url: '/settings/notifications',
              icon: IconNotification,
            },
            {
              title: 'Display',
              url: '/settings/display',
              icon: IconBrowserCheck,
            },
          ],
        },
        {
          title: 'Help Center',
          url: '/help-center',
          icon: IconHelp,
        },
      ],
    },
  ],
}
