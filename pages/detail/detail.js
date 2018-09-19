//index.js
//获取应用实例
const app = getApp();
//var task = app.globalData.num;
var list = app.globalData.datalist;

Page({
  data: {
    taskName:'',
    keyName:'',
    name:'',
    content:'',
    label:'',
    task: 0,
    index:0,
    ifDone:1,
    ifCut:false
  },
  
  //事件处理函数
  onShow:function(){
    var taskName = app.globalData.taskName;
    var num = wx.getStorageSync('num');
    this.setData({
      taskName:taskName
    })
  },
  onLoad: function (options) {
    var keyName = options.keyName;
    var index = options.index;
    this.data.taskName = app.globalData.taskName;
    var task = options.taskName;
    this.setData({
      name: list[keyName].name,
      content: list[keyName].content,
      label: list[keyName].label,
      ifDone: list[keyName].ifDone,
      task:task,
      keyName:keyName,
      index:index

    })
  },
  
  //删除事件函数
  cut: function(){
    console.log(this.data.task);
    var that= this;
    this.data.task--;
    if (this.data.task==0){
      delete list[this.data.keyName];
      delete list['num'];
    }else{
      delete list['num'];
      for (var i=this.data.index;i<=this.data.task;i++){
        var y=i;
        var k = ++y;
        var key1='task'+i;
        var key2='task'+k;
        list[key1] = list[key2];
      }
      list['num'] = this.data.task;
      var q=that.data.task+1;
      delete list['task'+q];
    }
    console.log(list);
    this.data.ifCut = true;
    app.globalData.num = this.data.task;
    wx.navigateTo({
      url: '../index/index?num1=' + this.data.task + '&ifCut=' + this.data.ifCut,
    })
  } ,
  
  //标记任务完成
  done:function(){
    list[this.data.keyName].ifDone=2;
    this.data.ifCut = true;
    wx.setStorageSync('num1', this.data.task);
    this.setData({ifDone:2});
    wx.navigateTo({
      url: '../index/index?ifCut=' + this.data.ifCut + '&num1=' + this.data.task,
    })
  }

})
