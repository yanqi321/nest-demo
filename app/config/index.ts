import { Logger } from '@nestjs/common';
import defaultConfig from './default.config';
export { ConfigScheme } from './default.config';

const config: typeof defaultConfig = { ...defaultConfig };

const appEnv = process.env.APP_ENV || 'dev';

if (appEnv) {
    try {
        console.log(`./${appEnv}.config`);

        // eslint-disable-next-line
        const envConfigs = require(`./${appEnv}.config`).default;

        Object.assign(config, envConfigs);
        console.log(JSON.stringify(config.MYSQL_SETTING));
    } catch (e) {
        Logger.error(e);
        process.exit();
    }
} else {
    Logger.error(`[APP_ENV] is required!`, '', 'Init Config');
    process.exit();
}

export default config;
