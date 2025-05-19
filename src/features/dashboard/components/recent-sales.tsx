import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { faker } from '@faker-js/faker'

const transactions = Array.from({ length: 5 }, () => {
  const userName = faker.name.fullName({ firstName: faker.name.firstName('male'), lastName: faker.name.lastName() });
  return {
    itemName: faker.commerce.productName(),
    transactionType: faker.helpers.arrayElement(['Stock In', 'Stock Out']),
    quantity: faker.number.int({ min: 1, max: 100 }),
    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=random&rounded=true`,
    userName,
    userEmail: faker.internet.email(),
  }
})

export function RecentSales() {
  return (
    <div className='space-y-2'>
      {transactions.map((transaction, index) => (
        <div key={index} className='flex items-center gap-3 p-3 rounded-lg border shadow-sm'>
          <Avatar className='h-10 w-10 flex-shrink-0'>
            <AvatarImage src={transaction.avatar} alt={transaction.userName} />
            <AvatarFallback>
              {transaction.userName
                .split(' ')
                .map((name) => name[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <div className='flex-1 flex justify-between min-w-0'>
            {/* User information column */}
            <div className='min-w-0 max-w-[45%]'>
              <p className='text-sm font-medium leading-none truncate'>{transaction.userName}</p>
              <p className='text-xs text-muted-foreground truncate'>{transaction.userEmail}</p>
            </div>
            
            {/* Transaction information column */}
            <div className='text-right min-w-0 max-w-[45%]'>
              <p className='text-sm font-medium truncate'>{transaction.itemName}</p>
              <div className={`inline-flex items-center mt-0.5 px-1.5 py-0.5 rounded-md text-xs font-medium ${
                transaction.transactionType === 'Stock In' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {transaction.transactionType} - {transaction.quantity} units
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
