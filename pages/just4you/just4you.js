const app = getApp();

Page({
  data: {
    user: {}
  },
  onLoad() {
    this.setData({ user: app.data.selectedUser });
  },
  onVoiceTap(e) {
    my.navigateTo({ url: "/pages/buyVoice/buyVoice" });
  },
  onInsuranceTap(e) {
    alert("Insurance");
  },
  onTicketTap(e) {
    my.navigateTo({ url: "/pages/buyTicket/buyTicket" });
  },
  onSmartOffersTap(e) {
    alert("Smart Offers");
  },
  onJ4UTown(e) {
    my.navigateTo({ url: "/pages/j4Town/j4Town" });
  },
  onShakeTap(e) {
    alert("Shake everyday");
  },
  onJ4UDataTap(e) {
    my.navigateTo({ url: "/pages/buyData/buyData" });
  },
  onFAQTap(e) {
    alert("FAQ");
  }
});
