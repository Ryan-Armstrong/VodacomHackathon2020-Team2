if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
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
require('../../components/button-primary/button-primary?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/tile-offer-large/tile-offer-large?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/tile-offer-medium/tile-offer-medium?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/tile-offer-small/tile-offer-small?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/header-main/header-main?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/tile-bundle/tile-bundle?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/tile-extra-bundle/tile-extra-bundle?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/tile-payment/tile-payment?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/header-summary/header-summary?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/tile-ticket-bundle/tile-ticket-bundle?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/userSelect/userSelect?hash=a3af946dd54bfb7237124ca231e85e52743c3ad9');
require('../../pages/just4you/just4you?hash=184eaf3498b80280dd59a61b474010c925c27f32');
require('../../pages/buyData/buyData?hash=8ad62148dc6231314cad916b0a61c2533f90d895');
require('../../pages/purchaseSummary/purchaseSummary?hash=fa74acd9b4b6bf272fdf208e24180bd97a49082e');
require('../../pages/result/result?hash=a3af946dd54bfb7237124ca231e85e52743c3ad9');
require('../../pages/buyTicket/buyTicket?hash=74a8efa6e5036748602592584c15f9e671075d8d');
require('../../pages/buyVoice/buyVoice?hash=8ad62148dc6231314cad916b0a61c2533f90d895');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}