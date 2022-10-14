'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/getUserList', controller.user.list);
  router.get('/testA', controller.user.testA);
  router.get('/testB', controller.user.testB);
  router.get('/testC', controller.user.testC);
  router.get('/getValById', controller.user.getValById);
  // share
  router.post('/judgePsw', controller.share.judgePsw);
  router.post('/addLink', controller.share.addLink);
  router.get('/getLinks', controller.share.getLinks);
};
