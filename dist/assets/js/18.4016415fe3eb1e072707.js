webpackJsonp([18],{"1K/n":function(t,i){},ZyG7:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("LOkV"),s=e("1IM+"),o={data:()=>({user:{},modal:!1,currentCoin:{},transaction:{page:0,pageSize:10,total:0},balance:0,coinType:"",coinList:[],coinextList:[],coinextItem:{},oldMoney:0,withdrawLoading:!1,withdrawFrom:{protocol:"",money:0,address:"",payPwd:""},withdrawFromRules:{},withdrawFromVisible:!1,loading:!0,pageNo:1,pageSize:10,tableWithdraw:[],tableWithdrawTotal:0}),methods:{moneyChange(){var t=new RegExp("([0-9]+.[0-9]{6})[0-9]*","");this.withdrawFrom.money=this.withdrawFrom.money.replace(t,"$1")},changeCoin(){this.withdrawFrom.protocol="",this.balance=0,this.coinextItem={},this.getBalance()},changeCoinext(){this.coinextItem={};for(let t of this.coinextList)t.coinname===this.coinType&&t.protocol===this.withdrawFrom.protocol&&(this.coinextItem=t,this.withdrawFrom.money=t.minwithdraw,this.oldMoney=t.minwithdraw)},getCoinList(){this.$http.get(this.host+"/uc/coin/list").then(t=>{var i=t.body;0==i.code?(this.coinList=i.data.coinList,!this.coinType&&this.coinList.length>0&&(this.coinType=this.coinList[0].name,this.getBalance()),this.coinextList=i.data.coinextList):this.$Message.error(i.message)})},getBalance(){this.$http.get(this.host+"/uc/coin/balance?coinName="+this.coinType).then(t=>{var i=t.body;0==i.code?this.balance=i.data:this.$Message.error(i.message)})},changePage(t){this.pageNo=t,this.getList()},getList(){let t={};t.page=this.pageNo-1,t.pageSize=this.pageSize,this.$http.post(this.host+"/uc/withdraw/list",t).then(t=>{var i=t.body;0==i.code?(this.tableWithdraw=i.data.content||[],this.tableWithdrawTotal=i.data.totalElements):this.$Message.error(i.message),this.loading=!1})},applyShow(){return this.coinType&&this.withdrawFrom.protocol?this.withdrawFrom.address?this.withdrawFrom.money<=0?(this.$Message.error(this.$t("uc.finance.withdraw.amounttip")),!1):this.withdrawFrom.money>this.coinextItem.maxwithdraw?(this.$Message.error(this.$t("uc.finance.withdraw.moneymaxttip")+this.coinextItem.maxwithdraw),!1):this.withdrawFrom.money<this.coinextItem.minwithdraw?(this.$Message.error(this.$t("uc.finance.withdraw.moneyminttip")+this.coinextItem.minwithdraw),!1):this.comMoney<=0?(this.$Message.error(this.$t("uc.finance.withdraw.moneyttip")),!1):void(this.withdrawFromVisible=!0):(this.$Message.error(this.$t("uc.finance.withdraw.addresstip")),!1):(this.$Message.error(this.$t("uc.finance.withdraw.symboltip")),!1)},apply(){if(this.withdrawLoading)return!1;if(!this.coinType||!this.withdrawFrom.protocol)return this.$Message.error(this.$t("uc.finance.withdraw.symboltip")),!1;if(!this.withdrawFrom.address)return this.$Message.error(this.$t("uc.finance.withdraw.addresstip")),!1;if(this.withdrawFrom.money<=0)return this.$Message.error(this.$t("uc.finance.withdraw.amounttip")),!1;let t={coinName:this.coinType,coinprotocol:this.withdrawFrom.protocol,address:this.withdrawFrom.address,money:this.withdrawFrom.money,payPwd:this.withdrawFrom.payPwd};this.withdrawLoading=!0,this.$http.post(this.host+"/uc/withdraw/create",t).then(t=>{var i=t.body;this.withdrawLoading=!1,0==i.code?(this.$Message.success(this.$t("uc.finance.withdraw.shenqing")),this.withdrawFrom.money=this.oldMoney,this.withdrawFrom.address="",this.withdrawFrom.payPwd="",this.withdrawFromVisible=!1,this.getBalance(),this.getList()):this.$Message.error(i.message)})},getMember(){let t=this;this.$http.post(this.host+"/uc/approve/security/setting").then(i=>{var e=i.body;0==e.code?(this.user=e.data,null==e.data.realName||""==e.data.realName?(this.$Notice.error({title:this.$t("common.tip"),desc:this.$t("otc.publishad.submittip1")}),t.$router.push("/uc/safe")):0==e.data.fundsVerified&&(this.$Notice.error({title:this.$t("common.tip"),desc:this.$t("otc.publishad.submittip3")}),t.$router.push("/uc/safe"))):this.$Message.error(e.message)})},_accMul(t,i){if(0==t||!t)return"0";if(0==i||!i)return"0";var e=0,a=t.toString(),s=i.toString();try{e+=a.split(".")[1].length}catch(t){}try{e+=s.split(".")[1].length}catch(t){}return Number(a.replace(".",""))*Number(s.replace(".",""))/Math.pow(10,e)}},created(){this.getMember(),this.$http.options.emulateJSON=!1,this.coinType=this.$route.query.name||"",this.coinType&&this.getBalance(),this.getCoinList(),this.getList()},computed:{member:function(){return console.log(this.$store.getters.member),this.$store.getters.member},tableColumnsWithdraw(){let t=[],i=[];return this.coinList.length>0&&this.coinList.forEach(t=>{i.push({label:t.unit,value:t.unit})}),t.push({title:this.$t("uc.finance.withdraw.time"),width:180,key:"addtime",render:function(t,i){return t("span",Object(a.c)(i.row.addtime))}}),t.push({title:this.$t("uc.finance.withdraw.symbol"),key:"coinname"}),t.push({title:this.$t("uc.finance.withdraw.protocol"),key:"protocolname"}),t.push({title:this.$t("uc.finance.withdraw.address"),key:"address",render:(t,i)=>t("div",[t("Tooltip",{props:{placement:"top"}},[t("span",{style:{display:"inline-block",width:.9*i.column._width+"px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},i.row.address),t("span",{slot:"content",style:{whiteSpace:"normal",wordBreak:"break-all"}},i.row.address)])])}),t.push({title:this.$t("uc.finance.withdraw.num"),key:"money"}),t.push({title:this.$t("uc.finance.withdraw.fee"),key:"fee"}),t.push({title:this.$t("uc.finance.withdraw.txid"),key:"hash"}),t.push({title:this.$t("uc.finance.withdraw.status"),key:"status",render:(t,i)=>{let e="";return-1==i.row.status?e=this.$t("uc.finance.withdraw.status_0"):0==i.row.status?e=this.$t("uc.finance.withdraw.status_1"):1==i.row.status?e=this.$t("uc.finance.withdraw.status_2"):2==i.row.status?e=this.$t("uc.finance.withdraw.status_3"):3==i.row.status&&(e=this.$t("uc.finance.withdraw.status_4")),t("div",[t("p",e)])}}),t},comCoinextList(){return()=>{let t=[];for(let i of this.coinextList)i.coinname==this.coinType&&t.push(i);return t}},comFee(){let t=this.coinextItem,i=t.withdrawfee||0,e=t.minwithdrawfee||0,a=this._accMul(i,this.withdrawFrom.money);return a<e&&(a=e),a},comMoney(){let t=this.comFee;return Object(s.b)(this.withdrawFrom.money,t)}}},r={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"nav-rights withdraw"},[e("div",{staticClass:"nav-right"},[e("div",{staticClass:"rightarea"},[e("section",{staticClass:"trade-groups merchant-tops",staticStyle:{"margin-top":"10px"}},[e("router-link",{attrs:{to:"/uc/withdraw/code"}},[t._v("\n          "+t._s(t.$t("uc.finance.withdraw.withdrawbycode"))+"\n        ")])],1),t._v(" "),e("section",[e("div",{staticClass:"table-inner action-box"},[e("div",{staticClass:"action-inner"},[e("div",{staticClass:"inner-box"},[e("div",{staticClass:"form-group inner-left"},[e("p",{staticClass:"describe input-title"},[t._v(t._s(t.$t("uc.finance.withdraw.symbol")))]),t._v(" "),e("Select",{staticStyle:{"margin-top":"14px"},on:{"on-change":t.changeCoin},model:{value:t.coinType,callback:function(i){t.coinType=i},expression:"coinType"}},t._l(t.coinList,function(i){return e("Option",{key:i.name,attrs:{value:i.name}},[t._v(t._s(i.name))])}))],1),t._v(" "),e("div",{staticClass:"form-group form-network"},[e("label",{staticClass:"input-title"},[t._v(t._s(t.$t("uc.finance.withdraw.network")))]),t._v(" "),e("div",{staticClass:"control-input-group"},[e("Select",{ref:"network",attrs:{placeholder:t.$t("common.pleaseselect")},on:{"on-change":t.changeCoinext},model:{value:t.withdrawFrom.protocol,callback:function(i){t.$set(t.withdrawFrom,"protocol",i)},expression:"withdrawFrom.protocol"}},t._l(t.comCoinextList(),function(i){return e("Option",{key:i.protocol,attrs:{value:i.protocol}},[t._v(t._s(i.protocolname))])}))],1),t._v(" "),e("div",{staticClass:"balance-fee"},[e("p",{staticClass:"balance-tips bf-tips"},[e("span",{staticClass:"title"},[t._v(t._s(t.$t("uc.finance.withdraw.avabalance"))+"：")]),t._v("\n                    "+t._s(t._f("toFloor")(t.balance))+"\n                  ")])])]),t._v(" "),e("div",{staticClass:"form-group form-address"},[e("label",{staticClass:"controlAddress describe input-title",attrs:{for:"controlAddress"}},[t._v(t._s(t.$t("uc.finance.withdraw.address")))]),t._v(" "),e("div",{staticClass:"control-input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.withdrawFrom.address,expression:"withdrawFrom.address"}],staticClass:"input-address",attrs:{placeholder:t.$t("common.inputpleaseselect")},domProps:{value:t.withdrawFrom.address},on:{input:function(i){i.target.composing||t.$set(t.withdrawFrom,"address",i.target.value)}}})])])])]),t._v(" "),e("div",{staticClass:"form-group-container"},[e("div",{staticClass:"form-group form-amount"},[e("label",{staticClass:"label-amount input-title"},[t._v(" "+t._s(t.$t("uc.finance.withdraw.num")))]),t._v(" "),e("div",{staticClass:"input-group",staticStyle:{position:"relative"}},[e("Input",{attrs:{placeholder:t.$t("uc.finance.withdraw.numtip1"),size:"large"},on:{"on-keyup":t.moneyChange},model:{value:t.withdrawFrom.money,callback:function(i){t.$set(t.withdrawFrom,"money",i)},expression:"withdrawFrom.money"}}),t._v(" "),e("span",{staticClass:"input-group-addon addon-tag uppercase firstt"},[t._v(t._s(t.coinType))])],1),t._v(" "),e("div",{staticClass:"balance-fee"},[e("p",{staticClass:"balance-tips bf-tips"},[e("span",{staticClass:"title"},[t._v(t._s(t.$t("uc.finance.withdraw.arriamount"))+"：")]),t._v("\n                  "+t._s(t.comMoney<0?"--":t.comMoney+" "+t.coinType)+"\n                ")]),t._v(" "),e("p",{staticClass:"fee-tips bf-tips"},[e("span",{staticClass:"title"},[t._v(t._s(t.$t("uc.finance.withdraw.fee"))+"：")]),t._v("\n                  "+t._s(t.comFee<0?"--":t.comFee+" "+t.coinType)+"\n                ")])])])]),t._v(" "),e("div",{staticClass:"action-foot"},[0!==t.coinextItem.iswithdraw?e("Button",{staticStyle:{height:"40px"},attrs:{id:"withdrawSubmit",long:"",size:"large",type:"primary",loading:t.withdrawLoading},on:{click:t.applyShow}},[t._v("\n              "+t._s(t.$t("uc.finance.withdraw.pickup"))+"\n            ")]):e("Button",{staticClass:"withdraw-disable",staticStyle:{height:"40px"},attrs:{long:"",size:"large",loading:t.withdrawLoading,disabled:""}},[t._v("\n              "+t._s(t.$t("uc.finance.withdraw.withdrawDisable"))+"\n            ")])],1),t._v(" "),e("div",{staticClass:"action-content pt10"},[e("div",{staticClass:"action-body",staticStyle:{"text-align":"left"}},[e("p",{staticClass:"acb-p1"},[t._v(t._s(t.$t("common.tip")))]),t._v(" "),e("p",{staticClass:"acb-p2"},[t._v("• "+t._s(t.$t("uc.finance.withdraw.msg3"))+"："+t._s(t.coinextItem.minwithdraw?t.coinextItem.minwithdraw:"-- "+t.coinType)+"。"),e("br"),t._v("•\n                "+t._s(t.$t("uc.finance.withdraw.msg5"))),e("br"),t._v("• "+t._s(t.$t("uc.finance.withdraw.msg6"))+" ")])])]),t._v(" "),e("div",{staticClass:"action-content"},[e("div",{staticClass:"action-body"},[e("div",{staticClass:"acb-p1",staticStyle:{"text-align":"left"}},[t._v(t._s(t.$t("uc.finance.withdraw.record")))]),t._v(" "),e("div",{staticClass:"order-table"},[e("Table",{attrs:{"no-data-text":t.$t("common.nodata"),columns:t.tableColumnsWithdraw,data:t.tableWithdraw,loading:t.loading}}),t._v(" "),e("div",{attrs:{id:"pages"}},[e("div",{staticStyle:{float:"right"}},[e("Page",{staticClass:"pages_a",attrs:{total:t.tableWithdrawTotal,current:t.pageNo},on:{"on-change":t.changePage}})],1)])],1)])])])]),t._v(" "),e("Modal",{attrs:{title:t.$t("uc.safe.fundpwd"),"mask-closable":!1},model:{value:t.withdrawFromVisible,callback:function(i){t.withdrawFromVisible=i},expression:"withdrawFromVisible"}},[e("Input",{staticStyle:{display:"none"},attrs:{name:"a",type:"password"}}),t._v(" "),e("Input",{attrs:{name:"a",type:"password",placeholder:t.$t("common.inputpleaseselect")},model:{value:t.withdrawFrom.payPwd,callback:function(i){t.$set(t.withdrawFrom,"payPwd",i)},expression:"withdrawFrom.payPwd"}}),t._v(" "),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Button",{on:{click:function(i){t.withdrawFromVisible=!1}}},[t._v(t._s(t.$t("common.close")))]),t._v(" "),e("Button",{attrs:{type:"primary",loading:t.withdrawLoading},on:{click:t.apply}},[t._v(t._s(t.$t("common.ok")))])],1)],1)],1)])])},staticRenderFns:[]};var n=e("VU/8")(o,r,!1,function(t){e("ad84"),e("1K/n"),e("j5Pe")},"data-v-7644bb3e",null);i.default=n.exports},ad84:function(t,i){},j5Pe:function(t,i){}});