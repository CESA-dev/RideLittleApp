// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    textArray: [{ route: 'ORD-香槟', date: '12/18/2017', time: '1 AM', car: 'BMW X5',               status:'进行中'} ],
    histryArray:[
      { route: '香槟-ORD', date: '12/18/2017', time: '1 AM', car: 'BMW X5', status: '已完成' },
      { route: 'ORD-香槟', date: '12/18/2017', time: '1 AM', car: 'BMW X5',status: '已完成' },
      { route: '香槟-普渡', date: '12/18/2017', time: '1 AM', car: 'BMW X5', status: '已完成' },
      { route: '普渡-香槟', date: '12/18/2017', time: '1 AM', car: 'BMW X5', status: '已完成' },
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
    else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
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
  
  }
})