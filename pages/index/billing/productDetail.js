// pages/billing/productDetail.js
import { navigateTo } from '../../../utils/util.js'
import { postRequest} from '../../../utils/http.js'
import {api} from '../../../service/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onMyEvent: function(e){
    e.detail // 自定义组件触发事件时提供的detail对象
    console.log("自定义组件触发事件时提供的detail对象")
  },
  nexttap:function(){
    navigateTo('billing')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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