const appName = 'demo';

module.exports = {
  apps: [
    /**
     * @ENV 测试环境
     * pm2 reload pm2.config.js --only demo-test
     */
    ...['test'].map((env, index) => ({
      name: appName + '-' + env,
      script: './dist/main.js',
      watch: false,
      env: {
        NODE_ENV: 'development',
        NO_COLOR: 1,
        APP_ENV: env,
        APP_PORT: 4300 + index,
      },
      wait_ready: true,
      listen_timeout: 10000,
      instances: 2,
      exec_mode: 'cluster',
      source_map_support: true,
      max_memory_restart: '500M',
      ignore_watch: ['[/\\]./', 'node_modules'],
      error_file: '.log/error.log',
      out_file: '.log/out.log',
    })),
    /**
     * @ENV 线上生产环境
     * pm2 reload pm2.config.js --only ticket
     */
    {
      name: appName,
      script: './dist/main.js',
      watch: false,
      env: {
        NODE_ENV: 'production',
        NO_COLOR: 1,
        APP_ENV: 'production',
        APP_PORT: 4300,
      },
      wait_ready: true,
      listen_timeout: 10000,
      instances: 'max',
      exec_mode: 'cluster',
      source_map_support: true,
      max_memory_restart: '2G',
      // cwd: '/data0/project/portal',
      ignore_watch: ['[/\\]./', 'node_modules'],
      error_file: '.log/demo.error.log',
      out_file: '.log/demo.out.log',
    },
  ],
};
