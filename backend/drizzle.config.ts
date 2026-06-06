import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/database/drizzle/schema.ts',
  out: './src/database/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString:
      process.env.DATABASE_URL ||
      'postgresql://user:password@localhost:5432/cinema_db',
  },
  verbose: true,
  strict: true,
});
