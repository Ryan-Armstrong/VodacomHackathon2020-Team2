const app = getApp();

Page({
  data: {
    selectedBundle: {},
    selectedExtraBundle: {},
    showMessage: false
  },

  onLoad() {
    this.setData({
      selectedBundle: app.data.selectedBundle,
      selectedExtraBundle: app.data.selectedExtraBundle,
      showMessage: !(JSON.stringify(app.data.selectedExtraBundle) === "{}")
    });
  },

  goJ4U() {
    my.reLaunch({ url: "/pages/userSelect/userSelect" });
  }
});
