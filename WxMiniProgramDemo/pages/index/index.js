var app = getApp()  
Page({
  data: {
    selected: true,
    selected1: false,
    lineLeft:140,
    animationData: {},
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    demos: [
      '../../images/case.png',
      '../../images/case.png',
      '../../images/case.png'
    ],
  }, 
  onLoad: function (opt) {
    var that = this//不要漏了这句，很重要
    app.func.req('/channel/listjson?pn=0&rn=30&tag1=明星&tag2=全部&ftags=女明星&ie=utf8', {}, function (res) {
      console.log(res.data);

        that.setData({
          pt: res.data,
        })
      });
    // wx.request({
    //   url: 'http://image.baidu.com/channel/listjson?pn=0&rn=30&tag1=明星&tag2=全部&ftags=女明星&ie=utf8',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   success: function (res) {
    //     console.log(that)
    //     //将获取到的json数据，存在名字叫zhihu的这个数组中
    //     that.setData({
    //       pt: res.data.data,

    //     })
    //   }
    // })
  },
  onItemClick: function (event) {
    // wx.showToast({
    //   title: event.target.id + "",
    // })
    wx.navigateTo({
      url: '../../pages/jiaohu/jiaohu?id=' + event.target.id
    })
  },
  goTo: function () {
    wx.navigateTo({
      url: '../../pages/anli/anli'
    })
  },
  // goSwiper:function(){
  //   wx.navigateTo({
  //     url: '../request/request?id=1&page=4',  //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径，不需要.wxml后缀
  //     success: function () { }      //成功后的回调；
  //   })
  // },
  // goToTest: function () {
  //   wx.navigateTo({
  //     url: '../../pages/request/request?id=1'
  //   })
  // },
  gocity: function () {
    wx.navigateTo({
      url: '../../pages/switchcity/switchcity'
    })
  },
  gojiaohu: function () {
    wx.navigateTo({
      url: '../../pages/jiaohu/jiaohu?id=10'
    })
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        console.log(res);
      }
    })
  },
  selected: function (e) {
    this.setData({
      selected1: false,
      selected: true
    });
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    this.animation = animation
    this.animation.translate(0, 0).step({ duration: 1000 })

    this.setData({
      animationData: animation.export()
    })

  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true
    })
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    this.animation = animation
    this.animation.translate(180, 0).step({ duration: 1000 })

    this.setData({
      animationData: animation.export()
    })
  }
})