import { DATABASE_URL } from '@/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

async function main() {
  console.log('migration started...');
  await migrate(db, { migrationsFolder: 'db/migrations' });
  console.log('migration ended');
  process.exit(0);
}

main().catch((error) => {
  console.log(error);
  process.exit(0);
});
