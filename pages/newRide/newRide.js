Page({

  /**
   * 页面的初始数据
   */
  data: {
    start: [{ name: 'ORD', selected: false }, { name: '芝加哥市区', selected: false }, { name: '香槟', selected: false }, { name: '其他', selected: false }],
    destination: [{ name: 'ORD', selected: false }, { name: '芝加哥市区', selected: false }, { name: '香槟', selected: false }, { name: '其他', selected: false }],
    numberOfSeat: [1,2,3,4,5],
    selectDate:"",
    selectTime:"",
    selectSeatNumber:0,
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


  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      
      date: e.detail.value,
      selectDate: e.detail.value
    })
  },

  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value,
      selectTime: e.detail.value
    })
  },

  bindSeatChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
      selectSeatNumber: e.detail.value
    })
  },

  addLoc: function (e) {
    console.log(e);
    let id = e.currentTarget.id;
    let isStart = id.substring(0, 3) === 'des' ? false : true;

    let locs = [];
    if (isStart) {
      locs = this.data.start;
    }
    else {
      locs = this.data.destination;
    }
    let idx = id[id.length - 1];
    // if the seat clicked is empty
    if (locs[idx].selected === false) {
      // parse the locs to remove the old loc selected
      locs.forEach((val, idx, arr_whole) => {
        if (val.selected) {
          val.selected = false;
        }
      });
      // add user info
      locs[idx].selected = true;
    }
    if (isStart) {
      this.setData({
        start: locs
      });
    }
    else {
      this.setData({
        destination: locs
      });
    }

  },

  create:function(e){
    console.log('创建房间' + this.data.selectSeatNumber + this.data.selectDate + this.data.selectTime);
    wx.navigateTo({
      url: '../detail/detail',
    })
  }
})
