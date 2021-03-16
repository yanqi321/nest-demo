const config = {
  APP_NAME: 'NEST_DEMO',
  ENV: 'default',
  // 业务redis地址
  REDIS: {
    host: '127.0.0.1',
    port: 6379,
    password: '',
    db: 1
  },
  // ORM缓存地址
  ORM_CACHE_REDIS: {
    host: '127.0.0.1',
    port: 6379,
    password: '',
    db: 2
  },
  ORM_CACHE_TTL: 10 * 60 * 1000,

  // 旧活动mysql(python)
  MYSQL_SETTING: {
    host: 'database-test-ria.cmv7rlx5mnpe.us-east-1.rds.amazonaws.com',
    port: 3306,
    username: 'activity_driver',
    password: 'A3FDhFgFd4R51HZ0nDZ7H3E2',
    database: 'activity_staging'
  },
};

export type ConfigScheme = Readonly<Partial<typeof config>>;

export default config;
