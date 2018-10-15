Page({
  data: {
    view1: true,
    view2: true,
    view3: true
  },
  opentype: function (e) {
    var url = e.currentTarget.dataset.type
    url = url + '/' + url
    wx.navigateTo({
      url: url
    })
  },

  tigger: function (e) {
    var num = e.currentTarget.dataset.num
    if (num == 1) {
      this.setData({
        view1: !this.data.view1
      })
    } else if (num == 2) {
      this.setData({
        view2: !this.data.view2
      })
    } else if (num == 3) {
      this.setData({
        view3: !this.data.view3
      })
    }
  }
})