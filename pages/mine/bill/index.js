// pages/mine/bill/index.js
import { postRequest } from '../../../utils/http.js'
import { api } from '../../../service/index.js'
import { navigateTo,formatTime } from '../../../utils/util.js'
import { checkNull } from '../../../utils/rule.js'
Page({
  data: {
    replayStatus:false, //还款弹框状态
    bankStatus:false, //选择银行弹框状态
    topObj:{},//顶部信息
    list:[],//账单列表
    rows:{},//账单选中行内容
    bankList:[],//银行啦列表
    bankRows:{userBankCardUuid:''},//银行卡选中行内容
    billDate:null,//账单日期
    page:1,//页码
    pageSize:10 //每页数
  },
  onLoad: function (options) {
    if(options.billDate){
      this.data.billDate=options.billDate;
    }
    this.getMyBill();
    this.getBankCardInfo();
   //  this.getBillPage();
  },
  //获取账单信息
  getMyBill(){
    postRequest(this, api.getMyBill, {billDate:this.data.billDate}, (data) => {
      let res = data;
      data[0].lastPayDate=formatTime(new Date(data[0].lastPayDate));
      res.forEach(item=>{
        item.created=formatTime(new Date(item.created),'ymd');
        item.lastPayDate=formatTime(new Date(item.lastPayDate),'ymd');
      })
      this.setData({
        topObj:data[0],
        list:res
      })
    })
  },
  //获取银行卡列表
  getBankCardInfo(){
    postRequest(this, api.getBankCardInfo, {}, (data) => {
      data.forEach(item=>{
        item.tips=item.bankCardNo.substring(item.bankCardNo.length-4,item.bankCardNo.length);
      })
      this.setData({
        bankList:data
      })
   })
  },
  //获取账单列表
  getBillPage(){
    let params={
      pageCurrent:this.data.page,
      pageSize:this.data.pageSize
    }
    postRequest(this, api.getBillPage, params, (data) => {
      this.setData({
        list:data.dataList
      })
    })
  },
  //立即还款提交
  bindRepaySubmit(){
    if (!checkNull(this.data.bankRows.userBankCardUuid, '请选择银行卡')) {
      return false;
    }
    wx.getSystemInfo({
      success :(res)=> {
        let params={
          billUuid:this.data.rows.userBillUuid,
          money:this.data.rows.remainPayAmount,
          type:'LIANLIAN',
          userBankCardUuid:this.data.bankRows.userBankCardUuid,
          platform:res.system,
          iMeiId:res.model
        }
        postRequest(this, api.repayBillOnline, params, (data) => {
          
        })    
      }
    })
    
  },
  //添加银行卡提交
  bindBankSubmit(){
    navigateTo("/pages/mine/card/cardForm");
  },
  //选择全部账单月份
  bindMonthChange(e){
    this.setData({
      index: e.detail.value
    })
  },
  //跳转全部账单
  bindAllBill(){
    navigateTo("/pages/mine/bill/allBill");
  },
  //跳转详情
  bindDetail(e){
    let id=e.currentTarget.dataset.id;
    navigateTo(`/pages/mine/bill/detail?id=${id}`);
  },
  //开启立即还款弹框
  openReplay(e){
    this.setData({
      replayStatus: true,
      rows:e.currentTarget.dataset.rows
    })
  },
  //关闭弹框
  onClose(){
    this.setData({
      replayStatus: false,
      bankStatus: false
    })
  },
  //开启银行卡选择
  openBank(){
    this.setData({
      replayStatus: false,
      bankStatus: true
    })
  },
  //选择银行卡
  bindSelBank(e){
    this.setData({
      bankRows:e.currentTarget.dataset.bankrows,
      bankStatus: false,
      replayStatus: true
    })
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