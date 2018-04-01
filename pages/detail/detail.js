const app = getApp()
Page({
  onLoad: function (options) {
    this.setData({
      title: options.title,
      date: options.date,
      time: options.time,
      car: options.car,
      textArray: [[{ name: 'username', img: 'http://s3.amazonaws.com/nvest/Blank_Club_Website_Avatar_Gray.jpg', del_display: 'none' }, { name: '', img: '', del_display: 'none' }], [{ name: '', img: '', del_display: 'none' }, { name: '', img: '', del_display: 'none'}]]
    });
  },

  toIndexView: function() {
    console.log("hi");
    wx.switchTab({
      url: '../index/index',
    });
  },
  deleteSeat: function(e) {
    let id = e.currentTarget.id;
    console.log(id);
    let passengers = this.data.textArray;
    console.log(passengers[parseInt(id[3])][parseInt(id[4])]);
    if (passengers[parseInt(id[3])][parseInt(id[4])].img === '') {
      console.log('errrrorrrrr');
    }
    else {
      passengers[parseInt(id[3])][parseInt(id[4])].img = '';
      passengers[parseInt(id[3])][parseInt(id[4])].del_display='none';
    }
    this.setData({
      textArray: passengers
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
      console.log('adding image');
      // parse the passenger to remove the old seat cur user selected
      passengers.forEach((row_val, row_idx, arr_whole) => {
        row_val.forEach((col_val, col_idx, arr_row) => {
          if (col_val.name === user_name) {
            arr_row[col_idx].name = '';
            arr_row[col_idx].img = '';
            arr_row[col_idx].del_display = 'none';
          }
        })
      });
      // add user info
      passengers[parseInt(id[0])][parseInt(id[1])].img = user_img;
      passengers[parseInt(id[0])][parseInt(id[1])].name = user_name;
      passengers[parseInt(id[0])][parseInt(id[1])].del_display='true';
    }
    this.setData({
      textArray: passengers
    });
  },
  endRideAction: function(e){
    /*wx.navigateTo({
      url: 'rating page',
    })*/
    console.log("end ride");
  },

  toDriverView: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '../driver/driver'
    })
  }

  
})