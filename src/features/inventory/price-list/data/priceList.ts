import { faker } from '@faker-js/faker';

export const priceLists = Array.from({ length: 40 }, () => {
  return {
    // id: faker.string.uuid(),
    nameDescription: faker.commerce.productName(),
    currency: faker.finance.currencyCode(),
    details: faker.commerce.productDescription(),
    pricingScheme: faker.helpers.arrayElement([
      'Flat Rate',
      'Tiered Pricing',
      'Volume Pricing',
      'Dynamic Pricing',
    ]),
    roundOffPreference: faker.helpers.arrayElement([
      'Never mind',
      'Nearest whole number',
      'Nearest 0.05',
      'Nearest 0.10',
      'Nearest 0.50',
      'Nearest 1.00',
    ]),
    createdTime: faker.date.past(),
    lastModifiedTime: faker.date.recent(),
  }
})