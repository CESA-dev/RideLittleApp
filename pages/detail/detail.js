const app = getApp()
Page({
  onLoad: function (options) {
    this.setData({
      title: options.title,
      date: options.date,
      time: options.time,
      car: options.car,
      textArray: [[{ name: 'username', img: 'http://s3.amazonaws.com/nvest/Blank_Club_Website_Avatar_Gray.jpg' }, { name: '', img: '' }], [{ name: '', img: '' },{name: '', img: ''}]]
    });
  },

  toIndexView: function() {
    console.log("hi");
    wx.switchTab({
      url: '../index/index',
    });
  },

  addSeat: function(e) {
    console.log(e);
    let id = e.currentTarget.id;
    let passengers = this.data.textArray;
    let user_name = app.globalData.userInfo ? app.globalData.userInfo.name : "anonymous";
    let user_img = app.globalData.userInfo ? app.globalData.userInfo.avatarUrl : 'https://i.imgur.com/I8Ce8Ke.jpg';

    // if the seat clicked is empty
    if (passengers[parseInt(id[0])][parseInt(id[1])].img === '') {
      // parse the passenger to remove the old seat cur user selected
      passengers.forEach((row_val, row_idx, arr_whole) => {
        row_val.forEach((col_val, col_idx, arr_row) => {
          if (col_val.name === user_name) {
            arr_row[col_idx].name = '';
            arr_row[col_idx].img = '';
          }
        })
      });
      // add user info
      passengers[parseInt(id[0])][parseInt(id[1])].img = user_img;
      passengers[parseInt(id[0])][parseInt(id[1])].name = user_name;
    }
    this.setData({
      textArray: passengers
    });
  }
  
})