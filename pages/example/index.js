var base64 = require("images/base64");
Page({
   data: {
    showView: true
  },
   onLoad: function(){
    this.setData({
      icon: base64.icon20
    });
      
  },
  
   btn:function(){
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  }
  
});

