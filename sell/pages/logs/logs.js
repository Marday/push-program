//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    selectFood: {
      name:"小屋里",
      image: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
      tips: "暂无公告"
    }
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    wx.request({
      url: 'https://app.bee-quick.cn/webapp/webapi?action=info',
      success(){

      }
    })
  }
})
