import type { Config } from "drizzle-kit";

const DB_URL = process.env.POSTGRES_URL;

if (!DB_URL) {
  throw new Error("Missing POSTGRES_URL");
}

export default {
  schema: "./src/schema/index.ts",
  dialect: "postgresql",
  dbCredentials: { url: DB_URL },
} satisfies Config;
