const app = getApp();

Page({
  data: {
    faqs: [],
    modalOpened: false,
    currentQuestion: "",
    currentAnswer: ""
  },
  onLoad() {
    this.setData({ faqs: app.data.faqs });
  },
  tapQuestion(e) {
    this.setData({
      currentAnswer: app.data.faqs[e.currentTarget.dataset.index].answer,
      currentQuestion: app.data.faqs[e.currentTarget.dataset.index].question,
      modalOpened: true
    });
  },
  onModalClose() {
    this.setData({
      modalOpened: false
    });
  }
});
