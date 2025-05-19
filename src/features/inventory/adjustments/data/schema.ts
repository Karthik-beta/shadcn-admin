import { z } from 'zod'

const userStatusSchema = z.union([
  z.literal('active'),
  z.literal('inactive'),
  z.literal('invited'),
  z.literal('suspended'),
])
export type UserStatus = z.infer<typeof userStatusSchema>

const userRoleSchema = z.union([
  z.literal('superadmin'),
  z.literal('admin'),
  z.literal('cashier'),
  z.literal('manager'),
])

const userSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  username: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  status: userStatusSchema,
  role: userRoleSchema,
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})
export type User = z.infer<typeof userSchema>

export const userListSchema = z.array(userSchema)

export const itemSchema = z.object({
  name: z.string(),
  sku: z.string(),
  stockOnHand: z.number(),
  reOrderLevel: z.number(),
  itemId: z.string(),
  createdTime: z.date(),
  lastModifiedTime: z.date(),
  itemName: z.string(),
  salesDescription: z.string(),
  sellingPrice: z.string(),
  salesAccount: z.string(),
  isReturnable: z.boolean(),
});
export type Item = z.infer<typeof itemSchema>

export const itemListSchema = z.array(itemSchema)

export const adjustmentSchema = z.object({
  id: z.string(),
  date: z.coerce.date(),
  reason: z.string(),
  description: z.string(),
  status: z.string(),
  referenceNo: z.string(),
  type: z.string(),
  createdBy: z.string(),
  createdTime: z.coerce.date(),
  lastModifiedBy: z.string(),
  lastModifiedTime: z.coerce.date(),
});
export type Adjustment = z.infer<typeof adjustmentSchema>

export const adjustmentListSchema = z.array(adjustmentSchema)
