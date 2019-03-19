// pages/detail/detail.js
let datas = require('../../datas/list-data')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj:{},
    index:null,
    isCollected:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let index = options.index;
    this.setData({
      detailObj:datas.list_data[index],
      index
    })

    //判断用户是否收藏了
    let detailStorage = wx.getStorageSync('isCollected');

    if (!detailStorage){
      wx.setStorageSync('isCollected', {})
    }

    if (detailStorage[index]){
      this.setData({
        isCollected: true
      })
    }
  },

  //处理用户收藏行为
  handleCollection(){
    let isCollected = !this.data.isCollected;
    this.setData({
      isCollected
    })

    let title = isCollected?"已经收藏":"取消收藏";
    wx.showToast({
      title,
      icon:"success"
    })
    //缓存到本地
    let {index} = this.data;
    wx.getStorage({
      key: 'isCollected',
      success: (datas) => {
        let obj = datas.data;
        obj[index] = this.data.isCollected;
        wx.setStorage({
          key: 'isCollected',
          data: obj,
          success: () => {
            console.log("缓存成功")
          }
        })
      }
    })
    
  },

  //分享设置
  handleShare(){
    wx.showActionSheet({
      itemList: [
        '分享到朋友圈',
        '分享到QQ空间',
        '分享到微博'
      ]
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})