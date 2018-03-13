// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    buttonArray: [{ "role": "我是乘客", "icon": "/images/man.png", "tap":"passengerTap"},
                  { "role": "我要开车", "icon": "/images/car.png", "tap": "driverTap"},
                  { "role": "进行中/已完成", "icon": "/images/car.png", "tap": "historyTap" }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  passengerTap: function(e){
    console.log('passengerTap');
    wx.navigateTo({
      url: '../search/search',
    })
  },

  driverTap: function(e){
    wx.navigateTo({
      url: '../newRide/newRide',
    })
  },

  historyTap: function(e){
    wx.navigateTo({
      url: '../history/history',
    })
  }
})