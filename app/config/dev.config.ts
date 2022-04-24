import { ConfigScheme } from './default.config';

const config: ConfigScheme = {
  APP_NAME: 'NEST_DEMO',
  ENV: 'development',

  REDIS: {
    host: '172.30.73.118',
    port: 6379,
    password: 'tiger135qwe',
    db: 5,
  },
  ORM_CACHE_REDIS: {
    host: '172.30.73.118',
    port: 6379,
    password: 'tiger135qwe',
    db: 6,
  },
  // mysql开发环境配置
  MYSQL_SETTING: {
    host: '172.30.73.118',
    port: 3306,
    username: 'root',
    password: 'tiger135qwe',
    database: 'yanqi_dev',
  },
};

export default config;
