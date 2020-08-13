const app = getApp();

Page({
  data: {
    selectedBundle: {},
    selectedUser: {},
    total: 0,
    selectedExtra: [false, false, false],
    extraBundles: [
      {
        bundleSize: "1GB",
        bundleType: "WhatsApp Data",
        bundleInfo: "use within 7 days",
        amount: 11
      },
      {
        bundleSize: "10GB",
        bundleType: "Netflix Data",
        bundleInfo: "use within 7 days",
        amount: 149
      },
      {
        bundleSize: "5GB",
        bundleType: "Showmax Data",
        bundleInfo: "use within 7 days",
        amount: 79
      }
    ]
  },

  onLoad() {
    this.setData({
      selectedBundle: app.data.selectedBundle,
      selectedUser: app.data.selectedUser,
      total: app.data.selectedBundle.amount
    });

    console.log(this.data.selectedBundle);
  },

  onSelectedBundleExtra(e) {
    let selectedArray = [false, false, false];
    switch (e.currentTarget.dataset.bundle) {
      case "WhatsApp Data":
        selectedArray[0] = !this.data.selectedExtra[0];
        if (selectedArray[0]) {
          this.setData({
            total:
              app.data.selectedBundle.amount + this.data.extraBundles[0].amount,
            selectedExtra: selectedArray
          });
          app.data.selectedExtraBundle = this.data.extraBundles[0];
        } else {
          this.setData({
            total: app.data.selectedBundle.amount,
            selectedExtra: selectedArray
          });
          app.data.selectedExtraBundle = {};
        }

        break;
      case "Netflix Data":
        selectedArray[1] = !this.data.selectedExtra[1];
        if (selectedArray[1]) {
          this.setData({
            total:
              app.data.selectedBundle.amount + this.data.extraBundles[1].amount,
            selectedExtra: selectedArray
          });
          app.data.selectedExtraBundle = this.data.extraBundles[1];
        } else {
          this.setData({
            total: app.data.selectedBundle.amount,
            selectedExtra: selectedArray
          });
          app.data.selectedExtraBundle = {};
        }
        break;
      case "Showmax Data":
        selectedArray[2] = !this.data.selectedExtra[2];
        if (selectedArray[2]) {
          this.setData({
            total:
              app.data.selectedBundle.amount + this.data.extraBundles[2].amount,
            selectedExtra: selectedArray
          });
          app.data.selectedExtraBundle = this.data.extraBundles[2];
        } else {
          this.setData({
            total: app.data.selectedBundle.amount,
            selectedExtra: selectedArray
          });
          app.data.selectedExtraBundle = {};
        }
        break;
    }
  },

  onBuyNow() {
    my.navigateTo({ url: "/pages/result/result" });
  }
});
