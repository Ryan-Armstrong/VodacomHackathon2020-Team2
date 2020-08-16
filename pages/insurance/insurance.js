const app = getApp();

Page({
  data: {},
  onLoad( 
  ) {
    this.setData({ user: app.data.selectedUser });
  },
  deviceInsurance(e) {
    my.navigateTo({ url: "/pages/deviceInsurance/deviceInsurance"});
  },
   funeralCover(e) {
    my.navigateTo({ url: "/pages/deviceInsurance/deviceInsurance"});
  }
});
