// pages/mine/card/bank.js
Page({
  data: {
     list:[
       {
         name:'工商银行',
         oneMoney:'5万',
         dayMoney:'5万',
         monthMoney:'150万'
       },
       {
        name:'农业银行',
        oneMoney:'1万',
        dayMoney:'1万',
        monthMoney:'30万'
      },
      {
        name:'中国银行',
        oneMoney:'1万',
        dayMoney:'1万',
        monthMoney:'30万'
      },
      {
        name:'建设银行',
        oneMoney:'1万',
        dayMoney:'1万',
        monthMoney:'5万'
      },
      {
        name:'招商银行',
        oneMoney:'2万',
        dayMoney:'2万',
        monthMoney:'60万'
      },
      {
        name:'交通银行',
        oneMoney:'20万',
        dayMoney:'20万',
        monthMoney:'600万'
      },
      {
        name:'浦发银行',
        oneMoney:'8万',
        dayMoney:'8万',
        monthMoney:'240万'
      },
      {
        name:'邮储银行',
        oneMoney:'5000',
        dayMoney:'5000',
        monthMoney:'15万'
      },
      {
        name:'广发银行',
        oneMoney:'1万',
        dayMoney:'1万',
        monthMoney:'30万'
      },
      {
        name:'平安银行',
        oneMoney:'5万',
        dayMoney:'5万',
        monthMoney:'150万'
      },
      {
        name:'民生银行',
        oneMoney:'5万',
        dayMoney:'5万',
        monthMoney:'150万'
      },
      {
        name:'光大银行',
        oneMoney:'3万',
        dayMoney:'3万',
        monthMoney:'90万'
      },
      {
        name:'华夏银行',
        oneMoney:'1万',
        dayMoney:'1万',
        monthMoney:'30万'
      },
      {
        name:'杭州银行',
        oneMoney:'5万',
        dayMoney:'5万',
        monthMoney:'150万'
      },
      {
        name:'上海银行',
        oneMoney:'5万',
        dayMoney:'5万',
        monthMoney:'150万'
      },
      {
        name:'北京银行',
        oneMoney:'2万',
        dayMoney:'2万',
        monthMoney:'60万'
      },
      {
        name:'兴业银行',
        oneMoney:'5万',
        dayMoney:'5万',
        monthMoney:'150万'
      },
      {
        name:'浙商银行',
        oneMoney:'5000',
        dayMoney:'5000',
        monthMoney:'15万'
      },
      {
        name:'中信银行',
        oneMoney:'2万',
        dayMoney:'5万',
        monthMoney:'150万'
      }
     ]
  },
  onLoad: function (options) {

  },
  //下拉复位
  onPullDownRefresh() {
    wx.stopPullDownRefresh();
  },
  //分享
  onShareAppMessage() {
    return {
    }
  }
})