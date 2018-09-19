
const app = getApp();
//var num = app.globalData.num;

Page({
  data:{
    label: ['生活', '工作', '学习', '其他',''],
    index: 0,
    //date: '2016-09-01',
    //time: '12:01',
    name:'',
    content:'',
    num:0
  },
  
  nameIn: function (e) {
    this.setData({ name: e.detail.value })
  },

  contentIn: function (e) {
    this.setData({ content: e.detail.value })
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  onLoad:function(options){
    this.data.num=options.num2;
  },
  addsure:function(){

    //this.data.num = app.globalData.num;
    //console.log(this.data);
    var num=this.data.num;
    num++;
    console.log(app.globalData);
    
    var namea='task'+ num;
    if(this.data.name==""){
      wx.showModal({
        title: '创建失败',
        content: '任务名不能为空！',
        confirmText: "我知道了",
        cancelText: "取消",
      });
    }else{
      app.globalData.datalist[namea] = {
        
        'name': this.data.name,
        'content': this.data.content,
        'label': this.data.label[this.data.index],
        'keyname':namea,
        'ifDone':1,
      };
      wx.showToast({
        title: '创建成功',
        icon: 'success',
        duration: 1000
      });
      wx.removeStorageSync('num');
      wx.setStorageSync('num', num);
      console.log(typeof num);
      if(num==0){
        app.globalData.datalist['num']=num;
      }else{
        delete app.globalData.datalist['num'];
        app.globalData.datalist['num'] = num;
      }
      setTimeout(function () {
        wx.navigateTo({
          url: '../index/index?num=' + num,
        })
      }, 1000)
    }
    
    
  }
})
