const app = getApp()
Page({
  onLoad: function (options) {
    this.setData({
      title: options.title,
      date: options.date,
      time: options.time,
      car: options.car
    });
  },

  toIndexView: function () {
    console.log("hi");
    wx.switchTab({
      url: '../index/index',
    });
  }
})