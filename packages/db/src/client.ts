import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";

const DB_URL = process.env.POSTGRES_URL;

if (!DB_URL) {
  throw new Error("Missing POSTGRES_URL");
}

const conn = postgres(DB_URL);

export const db = drizzle(conn, { schema });
