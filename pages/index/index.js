var base64 = require("images/base64");
var util = require('../util/util.js');  
const app = getApp();
var list = app.globalData.datalist;

Page({
   data: {
    showView: true,
    massage:'',
     taskName: [],
     done:1,
     num:0,
  },
  onShow:function(){

  },
  onLoad: function (options) {
    var time = util.formatTime(new Date()); 
    var that=this;
    var ifCut = options.ifCut;
    if (ifCut) {
      that.data.num = options.num1;
      app.globalData.num = that.data.num;
      var num = app.globalData.num;
      wx.removeStorageSync('num1');
    }else{
      num = options.num ;
      that.data.num = num ;
      app.globalData.num = that.data.num;
      console.log(app.globalData);
    }
    var taskName=app.globalData.taskName;
    that.data.taskName = taskName;
    var j=0;
    this.data.taskName.splice(0,that.data.taskName.length);
    for(var i=0;i<num;i++){
      j=i+1;
      if (list.hasOwnProperty("task"+j) ){
        that.data.massage = list['task' + j].name;
        that.data.done = list['task' + j].ifDone;
        taskName.push({ 
          massage: that.data.massage,
          done: that.data.done,
        });
       
      }
      
    }
    if(num==undefined){
      that.setData({
        icon: base64.icon20,
        time: time,
        taskName: taskName,
        num: 0
      });
    }else{
      that.setData({
        icon: base64.icon20,
        time: time,
        taskName: taskName,
        num: num
      });
    }
    
    console.log(that.data.taskName);
    console.log(list);
    app.globalData.taskName = that.data.taskName;
    
  },
  
   btn:function(){
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  },
  goto:function(e){
    var index = e.currentTarget.dataset.index;
    index++;
    var keyName = 'task'+index;
    wx.navigateTo({
      url: '../detail/detail?taskName='+this.data.num+'&keyName='+keyName+'&index='+index,
    })
  },
});

