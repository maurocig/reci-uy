import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  title: text('title'),
  brand: varchar('brand', { length: 256 }),
});
