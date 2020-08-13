if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');
require('./importScripts$');

var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;


if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/tile-offer-large/tile-offer-large?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/tile-offer-medium/tile-offer-medium?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/tile-offer-small/tile-offer-small?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/tile-bundle/tile-bundle?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/tile-extra-bundle/tile-extra-bundle?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/tile-payment/tile-payment?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/header-summary/header-summary?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/just4you/just4you?hash=c1c1e8994fb12c9d2224c3c377fa65e5f01b5443');
require('../../pages/buyData/buyData?hash=8ad62148dc6231314cad916b0a61c2533f90d895');
require('../../pages/purchaseSummary/purchaseSummary?hash=d0e3ce9f6e5a13a10b323cfd0997314a9622211c');
require('../../pages/result/result?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../components/header-summary/header-summary?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}