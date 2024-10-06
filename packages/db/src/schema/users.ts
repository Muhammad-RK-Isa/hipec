import {
  pgEnum,
  pgTable,
  text,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";
import z from "zod";

import { generateId, lifecyleDates } from "~/lib/utils";

const userRoles = pgEnum("user_role", ["user", "admin"]);

const users = pgTable(
  "users",
  {
    id: varchar("id", { length: 255 })
      .notNull()
      .primaryKey()
      .$defaultFn(() => generateId()),
    name: text("name"),
    email: varchar("email", { length: 255 }).notNull(),
    hashedPassword: varchar("hashed_password", { length: 255 }),
    role: userRoles("role").notNull().default("user"),
    ...lifecyleDates,
  },
  (t) => ({
    nameIdx: uniqueIndex("name_idx").on(t.name),
    emailIdx: uniqueIndex("email_idx").on(t.email),
  }),
);

const userSchema = createSelectSchema(users);
const insertUserSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
const updateUserSchema = userSchema.omit({
  createdAt: true,
  updatedAt: true,
});

type UserEntity = typeof users.$inferSelect;
type InsertUserInput = z.infer<typeof insertUserSchema>;
type UpdateUserInput = z.infer<typeof updateUserSchema>;

export {
  users,
  userRoles,
  type UserEntity,
  type InsertUserInput,
  type UpdateUserInput,
};
