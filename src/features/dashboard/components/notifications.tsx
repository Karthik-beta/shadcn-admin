import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Bell, Check, XCircle, BellOff } from 'lucide-react'

interface Notification {
  id: number
  title: string
  message: string
  timestamp: string
  isRead: boolean
}

export function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>(() =>
    Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      title: `Notification ${i + 1}`,
      message: `This is a demo message for notification ${i + 1}.`,
      timestamp: new Date().toLocaleString(),
      isRead: false,
    }))
  )

  const addNotification = () => {
    const newNotification: Notification = {
      id: notifications.length + 1,
      title: `Notification ${notifications.length + 1}`,
      message: `This is a demo message for notification ${
        notifications.length + 1
      }.`,
      timestamp: new Date().toLocaleString(),
      isRead: false,
    }
    setNotifications((prev) => [newNotification, ...prev])
  }

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    )
  }

  const dismissNotification = (id: number) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id))
  }

  // Sort notifications with unread first, then read
  const sortedNotifications = [...notifications].sort((a, b) => {
    if (a.isRead === b.isRead) return 0
    return a.isRead ? 1 : -1 // Unread (false) comes first, read (true) goes to the bottom
  })

  const unreadCount = notifications.filter((n) => !n.isRead).length

  return (
    <div className='space-y-6'>
      <div className='flex flex-col sm:flex-row justify-between items-center gap-4 mb-6'>
        <div className='flex items-center gap-2'>
          <h2 className='text-xl font-semibold'>Notifications</h2>
          {unreadCount > 0 && (
            <Badge variant='destructive' className='ml-2'>
              {unreadCount} unread
            </Badge>
          )}
        </div>
        <div className='flex items-center gap-3'>
          <Button
            onClick={addNotification}
            size='sm'
            className='flex items-center gap-2'
          >
            <Bell className='h-4 w-4' />
            Add Notification
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })))}
            className='flex items-center gap-2'
            disabled={unreadCount === 0}
          >
            <Check className='h-4 w-4' />
            Mark All as Read
          </Button>
        </div>
      </div>

      {notifications.length === 0 ? (
        <Card className='border-dashed border-gray-300 bg-gray-50 dark:bg-gray-800/50'>
          <CardContent className='py-10'>
            <div className='flex flex-col items-center justify-center text-center space-y-3'>
              <BellOff className='h-12 w-12 text-gray-400' />
              <h3 className='text-lg font-medium text-gray-500 dark:text-gray-400'>
                No notifications
              </h3>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                You don't have any notifications at the moment.
              </p>
              <Button
                onClick={addNotification}
                variant='outline'
                size='sm'
                className='mt-2'
              >
                <Bell className='mr-2 h-4 w-4' />
                Create Test Notification
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {sortedNotifications.map((notification) => (
            <Card
              key={notification.id}
              className={`${
                notification.isRead
                  ? 'bg-gray-50 border-gray-200 dark:bg-gray-800/40 dark:border-gray-700'
                  : 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800/50'
              } transition-all duration-200 hover:shadow-md`}
            >
              <CardHeader className='pb-2'>
                <div className='flex justify-between items-start'>
                  <CardTitle
                    className={`text-base font-medium ${
                      notification.isRead
                        ? 'text-gray-700 dark:text-gray-300'
                        : 'text-blue-700 dark:text-blue-200'
                    }`}
                  >
                    {notification.title}
                    {!notification.isRead && (
                      <span className='ml-2 inline-flex h-2 w-2 rounded-full bg-blue-500' />
                    )}
                  </CardTitle>
                </div>
                <p className='text-xs text-muted-foreground mt-1 dark:text-gray-400'>
                  {notification.timestamp}
                </p>
              </CardHeader>
              <CardContent>
                <p
                  className={`text-sm mb-4 ${
                    notification.isRead
                      ? 'text-gray-600 dark:text-gray-400'
                      : 'text-gray-700 dark:text-gray-200'
                  }`}
                >
                  {notification.message}
                </p>
                <div className='flex justify-end space-x-2 pt-2 border-t border-gray-100 dark:border-gray-700'>
                  {!notification.isRead && (
                    <Button
                      size='sm'
                      variant='ghost'
                      className='text-green-600 hover:text-green-700 hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-900/30'
                      onClick={() => markAsRead(notification.id)}
                    >
                      <Check className='h-4 w-4 mr-1' /> Mark Read
                    </Button>
                  )}
                  <Button
                    size='sm'
                    variant='ghost'
                    className='text-gray-500 hover:text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800'
                    onClick={() => dismissNotification(notification.id)}
                  >
                    <XCircle className='h-4 w-4 mr-1' /> Dismiss
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}