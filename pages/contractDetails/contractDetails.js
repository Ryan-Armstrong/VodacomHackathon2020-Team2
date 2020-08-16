const app = getApp();

Page({
  data: {
    selectedPhone: [],
    selectedContract: {}
  },
  onLoad() {
    this.setData({
      selectedPhone: app.data.selectedPhone,
      selectedContract: app.data.selectedContract
    });
  },
  onContractSelect(e) {
    console.log(e);
    my.navigateTo({ url: "/pages/upgradeEnd/upgradeEnd" });
  }
});
