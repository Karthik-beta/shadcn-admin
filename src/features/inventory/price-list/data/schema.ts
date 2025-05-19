import { z } from 'zod'

export const priceSchema = z.object({
  // id: z.string(),
  nameDescription: z.string(),
  currency: z.string(),
  details: z.string(),
  pricingScheme: z.string(),
  roundOffPreference: z.string(),
  createdTime: z.coerce.date(),
  lastModifiedTime: z.coerce.date(),
});
export type PriceList = z.infer<typeof priceSchema>

export const priceListSchema = z.array(priceSchema)
