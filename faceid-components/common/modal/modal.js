"use strict";Component({options:{multipleSlots:!0},properties:{message:{type:String,value:"some tips"}},data:{type:null,types:["normal","loading","success"],title:"",action_btn_text:""},methods:{hideModal:function(){this.setData({type:null})},showLoading:function(){var t=arguments.length>0?arguments[0]:null,e=t&&t.title||"loading";this.setData({type:"loading",title:e})},showModal:function(t){if(!t)throw new Error("BAD_PARAMETERS:params! ");var e=t.message,s=t.action_btn_text;if(!e)throw new Error("BAD_PARAMETERS:message! ");s=s||"\u786e\u5b9a",this.setData({type:"normal",message:e,action_btn_text:s})}}});