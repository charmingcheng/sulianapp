webpackJsonp([543],{"/mYj":function(e,t,a){var n=a("Yts6");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("20c617fc",n,!0,{})},WzzA:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Pexp"),i=a("Tg7E"),s={data:function(){return{order_id:0,progressData:{},isTime:0,loan_info:[],insurance_info:[],shang_pai_info:[],jiao_che_info:[],isVoucher:!1,Voucherinfo:{},show:!1,imgIndex:1}},activated:function(){this.order_id=this.$route.params.id,this.loan_info=[],this.insurance_info=[],this.shang_pai_info=[],this.jiao_che_info=[],this.Voucherinfo={},this.show=!1,this.isVoucher=!1,this.getData()},methods:{showimg:function(e){this.imgIndex=e,this.show=!0},showVoucher:function(e,t){switch(this.isVoucher=!0,this.Voucherinfo=e,t){case 2:this.Voucherinfo.text="买保险";break;case 3:this.Voucherinfo.text="放款";break;case 5:this.Voucherinfo.text="上牌";break;case 6:this.Voucherinfo.text="交车";break;default:this.Voucherinfo.text=""}},getData:function(){var e=this;$http.get("plugin.staging-buy-car.frontend.order-operation.schedule",{order_id:this.order_id},"提交中").then(function(t){1===t.result?(e.progressData=t.data,e.progressData.pay_at&&(e.isTime=1),e.progressData.insurance_at&&(e.isTime=2),e.progressData.loan_at&&(e.isTime=3),e.progressData.take_car_at&&(e.isTime=4),e.progressData.receive_at&&(e.isTime=5),e.progressData.complete_at&&(e.isTime=6),console.log(e.isTime," this.isTime")):Object(i.Toast)(t.msg)},function(e){console.log(e)}).catch(function(e){console.error(e)})},gotoPage:function(){this.$router.push(this.fun.getUrl("InstallmentRecord",{},{sbc_order_id:this.progressData.sbc_order_id}))}},components:{cTitle:n.a}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("c-title",{attrs:{hide:!1,text:"购车进度"}}),e._v(" "),a("div",{staticStyle:{height:"40px"}}),e._v(" "),a("div",{staticClass:"main-content"},[a("div",{staticClass:"contract-operate_recodeMain"},[a("ul",{staticClass:"contract-operate_recode_date"},[a("li",{class:{red:6==e.isTime}},[a("span",{staticClass:"first"},[e._v(e._s(e.progressData.complete_at))]),e._v(" "),a("i",{staticClass:"second"}),e._v(" "),a("span",{staticClass:"third"},[a("em",[e._v("已交车")]),e._v(" "),e.fun.isTextEmpty(e.progressData.jiao_che_info)?e._e():[a("br"),e._v(" "),a("div",{staticClass:"info little"},[e._v("服务人员:"+e._s(e.progressData.jiao_che_info.name)+"["+e._s(e.progressData.jiao_che_info.phone)+"]"),a("br"),a("em",{staticClass:"info_btn ",on:{click:function(t){return e.showVoucher(e.progressData.jiao_che_info,6)}}},[e._v("查看详情")])])]],2)]),e._v(" "),a("li",{class:{over:e.isTime>5,red:5==e.isTime}},[a("span",{staticClass:"first"},[e._v(e._s(e.progressData.receive_at))]),e._v(" "),a("i",{staticClass:"second"}),e._v(" "),a("span",{staticClass:"third"},[a("em",[e._v("上牌")]),a("br"),e._v(" "),e.fun.isTextEmpty(e.progressData.shang_pai_info)?e._e():[a("div",{staticClass:"little"},[e._v("服务人员"+e._s(e.progressData.shang_pai_info.name)+"["+e._s(e.progressData.shang_pai_info.phone)+"]将为您上牌！"),a("br"),a("em",{staticClass:"info_btn ",on:{click:function(t){return e.showVoucher(e.progressData.shang_pai_info,5)}}},[e._v("查看详情")])])]],2)]),e._v(" "),a("li",{class:{over:e.isTime>4,red:4==e.isTime}},[a("span",{staticClass:"first"},[e._v(e._s(e.progressData.take_car_at))]),e._v(" "),a("i",{staticClass:"second"}),e._v(" "),a("span",{staticClass:"third"},[e._v("安排提车")])]),e._v(" "),a("li",{class:{over:e.isTime>3,red:3==e.isTime}},[a("span",{staticClass:"first"},[e._v(e._s(e.progressData.loan_at))]),e._v(" "),a("i",{staticClass:"second"}),e._v(" "),a("span",{staticClass:"third"},[a("em",[e._v("放款成功")]),a("em",{staticClass:"little",staticStyle:{color:"#f15353"},on:{click:e.gotoPage}},[e._v("   查看分期记录")]),a("br"),e._v(" "),e.fun.isTextEmpty(e.progressData.loan_info)?e._e():[a("div",{staticClass:"info little"},[e._v("服务人员:"+e._s(e.progressData.loan_info.name)+"["+e._s(e.progressData.loan_info.phone)+"]"),a("br"),a("em",{staticClass:"info_btn",on:{click:function(t){return e.showVoucher(e.progressData.loan_info,3)}}},[e._v("查看详情")])])]],2)]),e._v(" "),a("li",{class:{over:e.isTime>2,red:2==e.isTime}},[a("span",{staticClass:"first"},[e._v(e._s(e.progressData.insurance_at))]),e._v(" "),a("i",{staticClass:"second"}),e._v(" "),a("span",{staticClass:"third"},[a("em",[e._v("买保险")]),a("br"),e._v(" "),e.fun.isTextEmpty(e.progressData.insurance_info)?e._e():[a("div",{staticClass:"info little"},[e._v("服务人员:"+e._s(e.progressData.insurance_info.name)+"["+e._s(e.progressData.insurance_info.phone)+"]"),a("br"),a("em",{staticClass:"info_btn",on:{click:function(t){return e.showVoucher(e.progressData.insurance_info,2)}}},[e._v("查看详情")])])]],2)]),e._v(" "),a("li",{class:{over:e.isTime>1,red:1==e.isTime}},[a("span",{staticClass:"first"},[e._v(e._s(e.progressData.pay_at))]),e._v(" "),a("i",{staticClass:"second"}),e._v(" "),a("span",{staticClass:"third"},[e._v("已交首付")])])])])]),e._v(" "),a("van-popup",{model:{value:e.isVoucher,callback:function(t){e.isVoucher=t},expression:"isVoucher"}},[a("div",{staticClass:"voucherDiv"},[a("h2",[e._v(e._s(e.Voucherinfo.text)+"服务人员")]),e._v(" "),a("div",{staticClass:"voucherDetail"},[a("div",{staticClass:"left"},[e._v("姓名")]),e._v(" "),a("div",{staticClass:"right"},[e._v(e._s(e.Voucherinfo.name))]),e._v(" "),a("div",{staticClass:"left"},[e._v("电话")]),e._v(" "),a("div",{staticClass:"right"},[e._v(e._s(e.Voucherinfo.phone))]),e._v(" "),a("div",{staticClass:"left"},[e._v("凭证")]),e._v(" "),e.fun.isTextEmpty(e.Voucherinfo.images)?a("div",{staticClass:"right"},[e._v("\n          暂无凭证\n        ")]):a("div",{staticClass:"right"},e._l(e.Voucherinfo.images,function(t,n){return a("img",{key:n,staticStyle:{width:"3.75rem",height:"3.75rem","object-fit":"contain",margin:"0 0.25rem 0.25rem 0"},attrs:{src:t},on:{click:function(t){return e.showimg(n)}}})}),0)]),e._v(" "),a("i",{staticClass:"iconfont icon-close11",on:{click:function(t){e.isVoucher=!1}}})])]),e._v(" "),a("van-image-preview",{attrs:{images:e.Voucherinfo.images,"start-position":e.imgIndex},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}})],1)},staticRenderFns:[]};var r=a("VU/8")(s,o,!1,function(e){a("/mYj")},"data-v-1e210a2e",null);t.default=r.exports},Yts6:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,'\n.main-content[data-v-1e210a2e] {\n  background: #ffffff;\n  margin: 10px;\n  border-radius: 10px;\n}\n.head[data-v-1e210a2e] {\n  margin: 0.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 1rem;\n  border-bottom: 0.031rem solid #f6f6f6;\n}\n.head img[data-v-1e210a2e] {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 5rem;\n            flex: 0 0 5rem;\n    width: 4rem;\n    height: 4rem;\n}\n.head .titles[data-v-1e210a2e] {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    text-align: left;\n    margin-left: 1.5rem;\n}\n.head .title[data-v-1e210a2e] {\n    height: 2.5rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n}\n.head .gray-text[data-v-1e210a2e] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    color: #999999;\n}\n.head .gray-text span[data-v-1e210a2e] {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      font-size: 10px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      -webkit-box-orient: vertical;\n}\n.contract-operate_recodeMain[data-v-1e210a2e] {\n  padding-top: 2.5rem;\n}\n.contract-operate_recode_date[data-v-1e210a2e] {\n  margin: 10px;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.contract-operate_recode_date .little[data-v-1e210a2e] {\n    position: absolute;\n    font-size: 10px;\n    color: #333333;\n}\n.contract-operate_recode_date .info[data-v-1e210a2e] {\n    top: 1.2rem;\n}\n.contract-operate_recode_date .info_btn[data-v-1e210a2e] {\n    top: 2.25rem;\n    padding: 0.1rem 0.5rem;\n    color: #f15353;\n    font-size: 12px;\n    border: 0.00625rem solid #f15353;\n}\n.contract-operate_recode_date li[data-v-1e210a2e] {\n    width: 100%;\n    height: 5rem;\n    position: relative;\n}\n.contract-operate_recode_date li .first[data-v-1e210a2e] {\n      position: absolute;\n      left: 2rem;\n      top: 0;\n      width: 75px;\n      height: 4rem;\n      display: inline-block;\n      line-height: 1rem;\n      font-size: 14px;\n      color: #999999;\n      word-break: break-all;\n}\n.contract-operate_recode_date li .second[data-v-1e210a2e] {\n      display: inline-block;\n      width: 1rem;\n      height: 1rem;\n      background-color: #d8d8d8;\n      border-radius: 50%;\n      margin: 0 20px 0 50px;\n}\n.contract-operate_recode_date li .second[data-v-1e210a2e]:after {\n        content: "";\n        display: block;\n        clear: both;\n        width: 1px;\n        height: 4.5rem;\n        background-color: #d8d8d8;\n        margin: 13px auto;\n}\n.contract-operate_recode_date li .third[data-v-1e210a2e] {\n      font-size: 14px;\n      color: #999999;\n      display: inline-block;\n      width: 100px;\n      height: 16px;\n      text-align: left;\n}\n.contract-operate_recode_date li:last-child .second[data-v-1e210a2e]:after {\n    content: "";\n    display: none;\n}\n.contract-operate_recode_date .red .first[data-v-1e210a2e] {\n    color: #333333;\n}\n.contract-operate_recode_date .red .second[data-v-1e210a2e] {\n    background-color: #e31717;\n}\n.contract-operate_recode_date .red .second[data-v-1e210a2e]:after {\n      background-color: #e31717;\n}\n.contract-operate_recode_date .red .third[data-v-1e210a2e] {\n    color: #e31717;\n}\n.contract-operate_recode_date .over .second[data-v-1e210a2e] {\n    background-color: #e31717;\n}\n.contract-operate_recode_date .over .second[data-v-1e210a2e]:after {\n      background-color: #e31717;\n}\n.van-popup[data-v-1e210a2e] {\n  border-radius: 1rem;\n}\n.van-popup .voucherDiv[data-v-1e210a2e] {\n    padding: 1.25rem;\n    width: 18rem;\n    position: relative;\n}\n.van-popup .voucherDiv h2[data-v-1e210a2e] {\n      padding-bottom: 0.825rem;\n}\n.van-popup .voucherDiv .voucherDetail[data-v-1e210a2e] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      text-align: left;\n}\n.van-popup .voucherDiv .voucherDetail .left[data-v-1e210a2e] {\n        width: 30%;\n        padding-bottom: 0.625rem;\n}\n.van-popup .voucherDiv .voucherDetail .right[data-v-1e210a2e] {\n        width: 70%;\n        padding-bottom: 0.625rem;\n}\n.van-popup .voucherDiv i[data-v-1e210a2e] {\n      font-size: 1rem;\n      padding: 0.5rem;\n      position: absolute;\n      top: 0;\n      right: 0.25rem;\n}\n',""])}});