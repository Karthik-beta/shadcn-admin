import { faker } from '@faker-js/faker'

export const items = Array.from({ length: 40 }, () => {
    return {
        name: faker.commerce.productName(),
        sku: faker.string.uuid().substring(0, 8),
        stockOnHand: faker.number.int({ min: 0, max: 1000 }),
        reOrderLevel: faker.number.int({ min: 0, max: 1000 }),
        itemId: faker.string.uuid().substring(0, 12),
        createdTime: faker.date.past(),
        lastModifiedTime: faker.date.recent(),
        itemName: faker.commerce.productName(),
        salesDescription: faker.commerce.productDescription(),
        sellingPrice: `₹${faker.commerce.price()}`,
        salesAccount: faker.helpers.arrayElement([
            'Revenue - Product Sales',
            'Sales - Hardware',
            'Sales - Software Services',
            'Income - Consulting',
            'Domestic Sales',
            'International Sales',
            'Deferred Revenue',
            'Subscription Revenue',
            'Online Sales - E-commerce',
            'Channel Partner Sales',
        ]),
        isReturnable: faker.datatype.boolean(),
    }
    }
)
