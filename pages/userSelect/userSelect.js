const app = getApp();

Page({
  data: {},
  onLoad() {
    app.data.selectedUser = app.data.users[0];
  },
  goJ4U() {
    my.navigateTo({ url: "/pages/just4you/just4you" });
  },

  onChange(e) {
    console.log(e.detail.value);
    app.data.selectedUser = app.data.users[e.detail.value];
  }
});
