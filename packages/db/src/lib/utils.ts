import { timestamp } from "drizzle-orm/pg-core";
import { v4 } from "uuid";

export const generateId = () => v4();

export const lifecyleDates = {
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "date" }).$onUpdateFn(
    () => new Date(),
  ),
};
