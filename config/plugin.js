'use strict';

/** @type Egg.EggPlugin */
/* module.exports = {
  /!* enable: true,
  package: 'egg-cors',*!/
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
};*/


exports.cors = {
  enable: true,
  package: 'egg-cors',
};

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
