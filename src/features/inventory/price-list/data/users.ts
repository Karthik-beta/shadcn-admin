import { faker } from '@faker-js/faker'

export const priceList = Array.from({ length: 40 }, () => {
  return {
    id: faker.string.uuid(),
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
      'Round Up',
      'Round Down',
      'No Rounding',
    ]),
    createdTime: faker.date.past(),
    lastModifiedTime: faker.date.recent(),
  }
})