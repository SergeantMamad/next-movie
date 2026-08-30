import { integer, pgTable, text, varchar,uuid } from "drizzle-orm/pg-core";
import { customAlphabet } from "nanoid";
export const safeNanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 21)


export const usersInfo = pgTable("user_info", {
  name: varchar({ length: 255 }).notNull(),
  movies: varchar({ length: 4000 }).notNull(),
  shows: varchar({ length: 4000 }).notNull(),
  description: text(),
});

export const list = pgTable("list", {
  id:text("id").primaryKey().$defaultFn(() => safeNanoid(9)),
  name:varchar({ length: 255 }).notNull(),
  listNumber: integer().notNull(),
  description: text()
})