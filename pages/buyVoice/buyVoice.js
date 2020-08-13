const app = getApp();

Page({
  data: {
    voiceBundles: []
  },
  onLoad() {
    this.setData({ voiceBundles: app.data.selectedUser.voiceBundles });
  },
  onBundleSelect(e) {
    app.data.selectedBundle = this.data.voiceBundles[
      e.currentTarget.dataset.index
    ];

    my.navigateTo({ url: "/pages/purchaseSummary/purchaseSummary" });
  }
});
