import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
 
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_8kJDnMpWKx2Z@ep-gentle-surf-a4s7gw1f-pooler.us-east-1.aws.neon.tech/ai-room-redesign?sslmode=require',
  },
});
