const app = getApp();

Page({
  data: {
    dataBundles: []
  },
  onLoad() {
    this.setData({ dataBundles: app.data.selectedUser.dataBundles });
  },
  onBundleSelect(e) {
    app.data.selectedBundle = this.data.dataBundles[
      e.currentTarget.dataset.index
    ];

    my.navigateTo({ url: "/pages/purchaseSummary/purchaseSummary" });
  }
});
