"use strict";var _const=require("../_utils/const");Component({properties:{token:{type:String,value:null},verifyType:{type:Number,value:null}},created:function(){this.base=this.selectComponent("#base")},ready:function(){var e="";switch(this.data.verifyType){case _const.VERIFY_TYPES.all:e="\u5373\u5c06\u8fdb\u884c\u8eab\u4efd\u8bc1\u4eba\u50cf\u9762\u548c\u56fd\u5fbd\u9762\u7684\u62cd\u6444";break;case _const.VERIFY_TYPES.ocrback:e="\u5373\u5c06\u8fdb\u884c\u8eab\u4efd\u8bc1\u56fd\u5fbd\u9762\u7684\u62cd\u6444";break;case _const.VERIFY_TYPES.ocrfront:e="\u5373\u5c06\u8fdb\u884c\u8eab\u4efd\u8bc1\u4eba\u50cf\u9762\u7684\u62cd\u6444"}this.setData({tips:e}),wx.occur("enter_ocr_inital")},data:{agreement_reviewed:!1,showAgreement:!1},methods:{onStart:function(){wx.occur("start_button"),this.triggerEvent("nextstep",{nextStep:_const.STEP_TO.verify})},onChangeAgreement:function(){var e=this.data.agreement_reviewed;wx.occur("agreement_"+(e?"cancel":"check")),this.setData({agreement_reviewed:!e})},onClickReviewAgreement:function(){this.setData({showAgreement:!0}),wx.occur("agreement_read")},back:function(){this.setData({showAgreement:!1})},initialQuit:function(){wx.occur("inital_quit")}}});