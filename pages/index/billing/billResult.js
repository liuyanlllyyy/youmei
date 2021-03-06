// pages/index/billing/billResult.js
import { navigateTo } from '../../../utils/util.js'
import { postRequest } from '../../../utils/http.js'
import { api } from '../../../service/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showListService:false,
    showListDate:false,
    loanAmount: 100000,
    productDetailUuid:'a0f7ff136b5348daa57816721795d71d',
    storeUuid:"5565faa3039c400e98c1dea560e88df9",
    productDetailConfigUuid:'e7d24f23ec934874a3e15f5c8a8f9661'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { storeUuid, productDetailUuid, productDetailConfigUuid, projectName, loanAmount } = this.options;
    // this.setData({
    //   storeUuid, productDetailUuid, productDetailConfigUuid, projectName, loanAmount
    // }, () => {

    //   this.getStoreAndProduct(storeUuid)
    //   this.loanCalculator()
    // })
    this.getStoreAndProduct(storeUuid)
    this.loanFQItem()
    let dateList=[]
    for (let i = 1; i <= 28; i++) {
        dateList.push({
          date:i
        })
    }
    this.setData({
      dateList
    })
  },
  getStoreAndProduct: function (storeUuid) {
    let params = {
      isDiscount: false,
      storeUuid: '5565faa3039c400e98c1dea560e88df9'//options.uuid
    }
    postRequest(this, api.getStoreAndProduct, params, (data) => {
      const product = data.productList.find(item => {
        return item.productDetailUuid === this.data.productDetailUuid
      })
      this.setData({
        product: data.productList[0],
        store: data.store
      })
    })
  },
  loanFQItem: function () {
    let params = {
      isDiscount: false,
      loanAmount: this.data.loanAmount,
      productDetailUuid: this.data.productDetailUuid,
      storeUuid: this.data.storeUuid
    }
    postRequest(this, api.loanCalculator, params, (data) => {
      const selectedFQItem = data.find(item => {
        return item.productDetailConfigUuid === this.data.productDetailConfigUuid
    })
      this.setData({
        selectedFQItem
      })
      this.repayPlanCalculator(selectedFQItem.productDetailConfigUuid)
    })
  },
  loanCalculator: function () {
    let params = {
      isDiscount: false,
      loanAmount: this.data.loanAmount,
      productDetailUuid: this.data.productDetailUuid,
      storeUuid: this.data.storeUuid
    }
    postRequest(this, api.loanCalculator, params, (data) => {
     
      this.setData({
        loanList:data,
        showListService:true
      })
    })
  },
  serviceClick: function () {
    this.loanCalculator()
  },
  servicePickerChange:function(event){
    let { value } = event.detail
    this.setData({
      showListService: false,
      selectedFQItem:value
    })
    console.log(value)
    this.repayPlanCalculator(value.productDetailConfigUuid)
  },
  pickerHide:function(){
    this.setData({
      showListService:false
    })
  },
  dateClick: function () {
    this.setData({
      showListDate:true
    })
  },
  datePickerChange:function(event){
    let { value } = event.detail
    this.setData({
      selectDate:value
    })
  },
  datepickerHide:function(){
    this.setData({
      showListDate:false
    })
  },
  //费率
  repayPlanCalculator: function (productDetailConfigUuid) {
    let params = {
      isDiscount:false,
      loanAmount:this.data.loanAmount,
      productDetailUuid:this.data.productDetailUuid,
      storeUuid:this.data.storeUuid,
      productDetailConfigUuid:productDetailConfigUuid,
    }
    postRequest(this, api.repayPlanCalculator, params, (data) => {
     
      this.setData({
        repayPlan:data
      })
    })
  },
    //提交
    submitApply: function () {
      let {loanAmount,productDetailUuid,selectDate} = this.data

      let params = {
        loanAmount:loanAmount,
        productDetailUuid:productDetailUuid,
        repaymentDate:selectDate.date,
      }
      postRequest(this, api.submitApply, params, (data) => {
       
        this.setData({
          repayPlan:data
        })
      })
    },

})