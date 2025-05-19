import { faker } from '@faker-js/faker'

export const adjustments = Array.from({ length: 40 }, () => {
    return {
        id: faker.string.uuid(),
        date: faker.date.past(),
        reason: faker.helpers.arrayElement([
            'Damaged',
            'Expired',
            'Lost',
            'Theft',
            'Misplaced',
            'Other',
        ]),
        description: faker.commerce.productDescription(),
        status: faker.helpers.arrayElement([
            'Pending',
            'Approved',
            'Rejected',
            'Completed',
        ]),
        referenceNo: faker.string.uuid().slice(0, 8),
        type: faker.helpers.arrayElement([
            'Increase',
            'Decrease',
        ]),
        createdBy: faker.person.fullName(),
        createdTime: faker.date.past(),
        lastModifiedBy: faker.person.fullName(),
        lastModifiedTime: faker.date.recent(),
    }
})   
