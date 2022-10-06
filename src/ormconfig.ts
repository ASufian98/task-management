import { ConnectionOptions } from 'typeorm';
import 'dotenv/config';

export default {
  type: process.env.DB_DRIVER,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: ['database/migrations/**/*.*'],
  seeds: ['database/seeds/**/*{.ts,.js}'],
  factories: ['database/factories/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'database/migrations',
    
  },
} as ConnectionOptions;
