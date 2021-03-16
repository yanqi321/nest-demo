const appName = 'drivers';
const APP_ENV = {
    DEV: 'development',
    TEST: 'test',
    PRO: 'production'
};

const TRADE_TYPE = {
    CHN: 'CHN',
    USA: 'USA'
};

module.exports = {
    apps: [
        /**
         * 开发环境配置
         * pm2 start pm2.config.js --only drivers-us-dev
         */
        {
            name: appName + '-us-dev',
            script: './dist/app/main.js',
            watch: false,
            env: {
                APP_PORT: 3000,
                APP_ENV: APP_ENV.DEV,
                TRADE_TYPE: TRADE_TYPE.USA // 国内：CHN  美国：USA
            },
            instances: 4,
            exec_mode: 'cluster',
            max_memory_restart: '1G'
        },

        /**
         * 测试环境配置
         * pm2 reload pm2.config.js --only drivers-us-test
         */
        {
            name: appName + '-us-test',
            script: './dist/app/main.js',
            watch: false,
            env: {
                APP_PORT: 3001,
                APP_ENV: APP_ENV.TEST,
                NO_COLOR: 1,
                TRADE_TYPE: TRADE_TYPE.USA // 国内：CHN  美国：USA
            },
            max_memory_restart: '1G',
            error_file: './logs/driver.error.log', //错误输出日志
            out_file: './logs/driver.out.log' //日志
        },

        /**
         * 生产环境配置
         * pm2 reload pm2.config.js --only drivers-us-production
         */
        {
            name: appName + '-us-production',
            script: './build/app/main.js',
            watch: false,
            env: {
                APP_PORT: 4001,
                APP_ENV: APP_ENV.PRO,
                NO_COLOR: 1,
                TRADE_TYPE: TRADE_TYPE.USA // 国内：CHN  美国：USA
            },
            max_memory_restart: '1G',
            instances: 'max',
            exec_mode: 'cluster',
            error_file: './logs/driver.error.log', //错误输出日志
            out_file: './logs/driver.out.log' //日志
        }
    ]
};
