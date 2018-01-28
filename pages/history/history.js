Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    textArray: [{ route: 'ORD-香槟', date: '12/18/2017', time: '1 AM', car: 'BMW X5' }, { route: '香槟-ORD', date: '12/18/2017', time: '1 AM', car: 'BMW X5' }, { route: 'ORD-香槟', date: '12/18/2017', time: '1 AM', car: 'BMW X5' }, { route: '香槟-普渡', date: '12/18/2017', time: '1 AM', car: 'BMW X5' }, { route: '普渡-香槟', date: '12/18/2017', time: '1 AM', car: 'BMW X5' }, { route: '香槟-ORD' },]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  
  toDetailView: function (e) {
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

  toNewRideView: function (e) {
    wx.navigateTo({
      url: '../newRide/newRide'
    })
  },

  bindKeyInput: function (e) {
    console.log(e.detail.value)
  }


})