import { integer, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const usersInfo = pgTable("user_info", {
  name: varchar({ length: 255 }).notNull(),
  movies: varchar({ length: 4000 }).notNull(),
  shows: varchar({ length: 4000 }).notNull(),
  description: text(),
});

export const list = pgTable("list", {
  name:varchar({ length: 255 }).notNull(),
  listNumber: integer().notNull(),
  description: text()
})