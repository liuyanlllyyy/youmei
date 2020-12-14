"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function ExitLite(e){var o=e,r=o.status;return r=r||"complete",e=Object.assign(e,{status:r}),new _es6Promise2.default(function(o){_interface2.default.getCompleteHandler()(e),wx.removeStorageSync("result"),wx.removeStorageSync("valid_date"),wx.removeStorageSync("issued_by"),wx.removeStorageSync("name"),wx.removeStorageSync("idcard_number"),wx.removeStorageSync("image_ref_ocridcardback"),wx.removeStorageSync("image_ref_ocridcardfront"),o()})}function chooseImage(e){return e=Object.assign({count:1,sizeType:["original","compressed"],sourceType:["camera"]},e),new _es6Promise2.default(function(o,r){wx.chooseImage({count:e.count,sizeType:e.sizeType,sourceType:e.sourceType,success:function(e){var r=e.tempFilePaths,t=r&&r[0];o(t)},fail:function(){r()}})})}function chooseVideo(e){function o(o){var r=e&&e.checkSize||!1,t=e&&e.checkDuration||!1;return r&&(o.duration<_const.MIN_VIDEO_DURATION||o.duration>_const.MAX_VIDEO_DURATION)?[{codeText:"INVALID_VIDEO_DURATION"}]:t&&o.size>_const.MAX_UPLOAD_VIDEO_FILE_SIZE?[{codeText:"VIDEO_FILE_TOO_LARGE"}]:[]}return new _es6Promise2.default(function(r,t){wx.chooseVideo({sourceType:e&&e.sourceType||["camera"],maxDuration:e&&e.maxDuration||_const.MAX_VIDEO_DURATION,camera:"front",compressed:!0,success:function(e){var n=o(e);n.length<=0?r(e.tempFilePath):t(n[0])},fail:function(){}})})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ExitLite=ExitLite,exports.chooseImage=chooseImage,exports.chooseVideo=chooseVideo;var _es6Promise=require("../vendors/es6-promise.min"),_es6Promise2=_interopRequireDefault(_es6Promise),_interface=require("./interface"),_interface2=_interopRequireDefault(_interface),_const=require("./const");