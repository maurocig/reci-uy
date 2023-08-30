import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  title: text('title'),
  brand: varchar('brand', { length: 256 }),
  createdAt: timestamp('created_at').defaultNow(),
});
