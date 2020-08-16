const app = getApp();

Page({
  data: {
    phones: []
  },
  onLoad() {
    this.setData({ phones: app.data.phones });
  },
  onPhoneSelect(e) {
    app.data.selectedPhone = this.data.phones[e.currentTarget.dataset.index];

    my.navigateTo({ url: "/pages/phoneDetails/phoneDetails" });
  }
});
