//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    

    // 登录
    wx.login({
      
    })
    // 获取用户信息
    wx.getSetting({
      
    })
  },
  onHide:function(){
    
  },
  globalData: {
    datalist:{},
    allList:{},
    taskName:[],
    ifDone:[],
    num:0
  }
})