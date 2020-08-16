const app = getApp();

Page({
  data: {
    selectedPhone: {},
    accordionDisplay: [false, false, false],
    optionsDisplay: false
  },
  onLoad() {
    this.setData({ selectedPhone: app.data.selectedPhone });
  },
  clickAccordion(e) {
    switch (e.currentTarget.dataset.index) {
      case "1":
        this.setData({
          accordionDisplay: [!this.data.accordionDisplay[0], false, false]
        });
        break;
      case "2":
        this.setData({
          accordionDisplay: [false, !this.data.accordionDisplay[1], false]
        });
        break;
      case "3":
        this.setData({
          accordionDisplay: [false, false, !this.data.accordionDisplay[2]]
        });

        break;
    }
  },
  clickOption(e) {
    console.log(e);
    switch (e.currentTarget.dataset.index) {
      case "1":
        app.data.selectedContract = app.data.contracts;
        my.navigateTo({ url: "/pages/contractDetails/contractDetails" });
        break;
      case "2":
        app.data.selectedContract = app.data.topUp;
        my.navigateTo({ url: "/pages/contractDetails/contractDetails" });
        break;
      case "3":
        app.data.selectedContract = app.data.airtime;
        my.navigateTo({ url: "/pages/contractDetails/contractDetails" });
        break;
    }
  },
  showOptions(e) {
    this.setData({ optionsDisplay: !this.data.optionsDisplay });
  }
});
