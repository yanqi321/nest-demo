import { ConfigScheme } from './default.config';

const config: ConfigScheme = {
    APP_NAME: 'production-us-driver',
    ENV: 'production',

    // redis生产环境相关配置
    REDIS: {
        host: '10.20.128.70',
        port: 6379,
        password: process.env.DRIVER_REDIS_PWD || '',
        db: 13
    },
    ORM_CACHE_REDIS: {
        host: '10.20.128.70',
        port: 6379,
        password: process.env.DRIVER_REDIS_PWD || '',
        db: 14
    },

    // mysql生产环境相关配置(activity库)
    MYSQL_SETTING: {
        host: '172.20.64.232',
        port: 3307,
        username: 'activity_driver',
        password: process.env.DRIVER_DB_PWD || '',
        database: 'activity'
    },
};

export default config;
