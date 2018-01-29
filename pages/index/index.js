//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    textArray: [{ route: 'ORD-香槟', date: '12/18/2017', time: '1 AM', car: 'BMW X5' }, { route: '香槟-ORD', date: '12/18/2017', time: '1 AM', car: 'BMW X5' }, { route: 'ORD-香槟', date: '12/18/2017', time: '1 AM', car: 'BMW X5' }, { route: '香槟-普渡', date: '12/18/2017', time: '1 AM', car: 'BMW X5' }, { route: '普渡-香槟', date: '12/18/2017', time: '1 AM', car: 'BMW X5'},{route:'香槟-ORD'},]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  toDetailView:function(e){
    console.log(e)
    let title = e.currentTarget.dataset.title
    let date = e.currentTarget.dataset.date
    let time = e.currentTarget.dataset.time
    let car = e.currentTarget.dataset.car
    wx.navigateTo({
      url: '../detail/detail?title=' + title + "&date="
      + date + "&time=" + time + "&car=" + car
    })
  },

  toNewRideView:function(e){
    wx.navigateTo({
      url: '../newRide/newRide'
    })
  },

  bindKeyInput:function(e){
    console.log(e.detail.value)
  }
  

})
