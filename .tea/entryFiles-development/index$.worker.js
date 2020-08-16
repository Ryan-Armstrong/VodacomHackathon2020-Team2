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
require('../../components/tile-phone/tile-phone?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/tile-contract/tile-contract?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/tile-insurance-large/tile-insurance-large?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/userSelect/userSelect?hash=a3af946dd54bfb7237124ca231e85e52743c3ad9');
require('../../pages/just4you/just4you?hash=184eaf3498b80280dd59a61b474010c925c27f32');
require('../../pages/buyData/buyData?hash=8ad62148dc6231314cad916b0a61c2533f90d895');
require('../../pages/purchaseSummary/purchaseSummary?hash=fa74acd9b4b6bf272fdf208e24180bd97a49082e');
require('../../pages/result/result?hash=a3af946dd54bfb7237124ca231e85e52743c3ad9');
require('../../pages/buyTicket/buyTicket?hash=74a8efa6e5036748602592584c15f9e671075d8d');
require('../../pages/buyVoice/buyVoice?hash=8ad62148dc6231314cad916b0a61c2533f90d895');
require('../../pages/j4Town/j4Town?hash=a3af946dd54bfb7237124ca231e85e52743c3ad9');
require('../../pages/smartOffers/smartOffers?hash=a3af946dd54bfb7237124ca231e85e52743c3ad9');
require('../../pages/upgrades/upgrades?hash=85f3ab87028270acb3d52261f05468f69bf885a6');
require('../../pages/phoneDetails/phoneDetails?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/contractDetails/contractDetails?hash=63ae5007001463e4d2adab8de64a5ff1869af699');
require('../../pages/upgradeEnd/upgradeEnd?hash=a3af946dd54bfb7237124ca231e85e52743c3ad9');
require('../../pages/insurance/insurance?hash=f200358a1ac29eae844fa07d7be6238cfc437047');
require('../../pages/deviceInsurance/deviceInsurance?hash=a3af946dd54bfb7237124ca231e85e52743c3ad9');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}