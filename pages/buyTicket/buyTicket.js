const app = getApp();

Page({
  data: {
    ticketBundles: []
  },
  onLoad() {
    this.setData({ ticketBundles: app.data.selectedUser.ticketBundles });
  },
  onBundleSelect(e) {
    app.data.selectedBundle = this.data.ticketBundles[
      e.currentTarget.dataset.index
    ];

    my.navigateTo({ url: "/pages/purchaseSummary/purchaseSummary" });
  }
});
