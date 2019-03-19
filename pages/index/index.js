// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '绝对乐控',
    userInfo: {},
    isShow: true,
  },

  handleClick(){
    wx.switchTab({
      url: "/pages/list/list"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.getUserInfo();
  },

  getUserInfo(){
    //判断用户是否授权
    wx.getSetting({
      success: (data) => {
        if (data.authSetting['scope.userInfo']) {
          //已获取授权
          this.setData({
            isShow: false
          });
        } else {
          //未获取授权
          this.setData({
            isShow: true

          });
        }
      }
    })
    //获取用户登陆信息
    wx.getUserInfo({
      success: (data) => {
        this.setData({
          userInfo: data.userInfo
        });
      },

    })
  },

  handleGetUserInfo(data){
    //判断用户是否点击了允许
    console.log(data)
    if(data.detail.rawData){
      this.getUserInfo();
    }else{

    }
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