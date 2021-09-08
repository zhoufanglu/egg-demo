/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '110.40.136.102',
      // 端口号
      port: '3306',
      // 用户名
      user: 'lufangzhou',
      // 密码
      password: 'Ll568767199',
      // 数据库名
      database: 'share',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1626072426665_7617';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ '*' ],
  };
  config.cors = {
    origin: '*', // 允许所有域进行访问接口
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  /*  config.cluster = {
    listen: {
      path: '',
      port: 8883,
      hostname: '0.0.0.0',
    },
  };*/

  return {
    ...config,
    ...userConfig,
  };
};
