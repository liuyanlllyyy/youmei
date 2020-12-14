"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getUserInfo(e){return new _request2.default({options:{url:"/get_config",url_prefix:"/lite_ocr/v1",method:"GET",data:{biz_token:e}}}).request()}function cancel(e,r,t){return new _request2.default({options:{url:"/cancel",url_prefix:"/lite_ocr/v1",data:{biz_token:e}},beforeSend:r,afterResponse:t}).post()}function PromisesExec(e,r,t,n){return new _es6Promise2.default(function(o,i){uploadIdCard({data:{biz_token:e,side:2===n?2:1},filePath:2===n?t:r}).then(function(n){r&&t?uploadIdCard({data:{biz_token:e,side:2},filePath:t}).then(function(e){o([n,e])}).catch(function(e){return i(e)}):o([n])}).catch(function(e){return i(e)})})}function uploadIdCardAndVerify(e,r){var t=e.biz_token,n=e.image_frontside_local,o=e.image_backside_local;return r&&r.showLoading("LOADING"),new _es6Promise2.default(function(e,i){PromisesExec(t,n,o,n&&o?0:n?1:2).then(function(u){var a=_slicedToArray(u,2),d=a[0],s=a[1];ocridcard({data:{biz_token:t,image_frontside:n?d.image_id:null,image_backside:n&&o?s.image_id:d.image_id}}).then(function(t){e(t),r&&r.hideModal()}).catch(function(e){i(e),r&&r.hideModal()})}).catch(function(t){"FINISHED"===t.result_code?e(t):i(t),r&&r.hideModal()})})}function uploadIdCard(e,r){return e=Object.assign(e,{url:"/get_image_id",url_prefix:"/lite_ocr/v1",sourceType:["camera"],name:"image"}),new _es6Promise2.default(function(t,n){new _request2.default({options:e,beforeSend:function(){return r&&r.showLoading("UPLOADING")},afterResponse:function(){return r&&r.hideModal()}}).upload().then(function(e){var r=e.result_code,o=e.result_message;3100===r?n({result_code:o,code:-1}):t(e)}).catch(function(e){n("PROCESS_ERROR"===e.result_code&&0===e.code?{result_code:"FINISHED"}:{code:-1,result_code:e.result_code})})})}function ocridcard(e,r){return new _es6Promise2.default(function(t,n){new _request2.default({options:Object.assign(e,{url:"/ocridcard",url_prefix:"/lite_ocr/v1"}),beforeSend:function(){return r&&r.showLoading("LOADING")},afterResponse:function(){return r&&r.hideModal()}}).post().then(function(e){if([2001,2002].indexOf(e.result_code)>-1){var r=null,o=null;["NO_IDCARD_BOTHSIDE","RESULT_NOT_ADEQUATE"].indexOf(e.result_message)>-1?(r=e.result_message+"_FRONT",o=e.result_message+"_BACK"):e.result_message.indexOf("FRONT")>-1?r=e.result_message:e.result_message.indexOf("BACK")>-1&&(o=e.result_message),n({code:0,frontErrorCode:r,backErrorCode:o})}else t({result_code:"FINISHED"})}).catch(function(e){"PROCESS_ERROR"===e.result_code&&-1===e.code?t({result_code:"FINISHED"}):n({code:-1,result_code:e.result_code})})})}var _slicedToArray=function(){function e(e,r){var t=[],n=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(n=(u=a.next()).done)&&(t.push(u.value),!r||t.length!==r);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw i}}return t}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_es6Promise=require("../../vendors/es6-promise.min"),_es6Promise2=_interopRequireDefault(_es6Promise),_request=require("../../tools/_request"),_request2=_interopRequireDefault(_request);module.exports={getUserInfo:getUserInfo,cancel:cancel,uploadIdCard:uploadIdCard,ocridcard:ocridcard,uploadIdCardAndVerify:uploadIdCardAndVerify};