webpackJsonp([45],{"R+vl":function(t,e){},eTyP:function(t,e){},wV79:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={components:{},data(){return{loginmsg:this.$t("common.logintip"),total:0,pageSize:10,loading:!0,pageNo:1,miningList:[]}},methods:{getMyMiningList(){let t={};t.pageNo=this.pageNo,t.pageSize=this.pageSize,this.$http.post(this.host+this.api.uc.myInnovationLocked,t).then(t=>{var e=t.body;0==e.code?this.miningList=e.data.content:this.$Message.error(this.loginmsg),this.loading=!1})},loadDataPage(t){this.pageNo=t,this.getMyMiningList()}},created(){this.getMyMiningList()},filters:{percentFun:function(t){return(100*t).toFixed(0)}},computed:{tableColumns(){let t=[];return t.push({title:this.$t("uc.activity.lColumn1"),key:"image",align:"center"}),t.push({title:this.$t("uc.activity.lColumn2"),key:"title",align:"center"}),t.push({title:this.$t("uc.activity.lColumn3"),key:"miningUnit",align:"center"}),t.push({title:this.$t("uc.activity.lColumn4"),key:"period",align:"center",render(t,e){let i="日";return 1==e.row.period&&(i="周"),2==e.row.period&&(i="月"),3==e.row.period&&(i="年"),t("span",{},i)}}),t.push({title:this.$t("uc.activity.lColumn5"),key:"lockedDays",align:"center"}),t.push({title:this.$t("uc.activity.lColumn6"),key:"releasedDays",align:"center"}),t.push({title:this.$t("uc.activity.lColumn7"),key:"lockedStatus",align:"center",render(t,e){let i="待释放";return 1==e.row.lockedStatus&&(i="释放中"),2==e.row.lockedStatus&&(i="已结束"),t("span",{},i)}}),t.push({title:this.$t("uc.activity.lColumn8"),key:"originReleaseamount",align:"center",width:100,render:(t,e)=>t("span",{},e.row.originReleaseamount+" "+e.row.releaseUnit)}),t.push({title:this.$t("uc.activity.lColumn9"),key:"currentReleaseamount",align:"center",width:100,render:(t,e)=>t("span",{},e.row.currentReleaseamount+" "+e.row.releaseUnit)}),t.push({title:this.$t("uc.activity.lColumn10"),key:"totalRelease",align:"center",width:100}),t.push({title:this.$t("uc.activity.lColumn11"),key:"endTime",align:"center",width:140}),t.push({title:this.$t("uc.activity.lColumn12"),key:"createTime",align:"center",width:140}),t}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-rights"},[i("div",{staticClass:"nav-right col-xs-12 col-md-10 padding-right-clear"},[i("div",{staticClass:"bill_box rightarea padding-right-clear"},[i("section",{staticClass:"trade-group merchant-top"},[i("i",{staticClass:"merchant-icon tips"}),t._v(" "),i("span",{staticClass:"tips-word"},[t._v(t._s(t.$t("uc.locked.title")))])]),t._v(" "),i("div",{staticClass:"shaow"},[i("div",{staticClass:"money_table mining-list"},[i("Row",[0==t.miningList.length?i("Col",{staticStyle:{"text-align":"center","margin-top":"30px"},attrs:{span:"24"}},[t._v("\n                "+t._s(t.$t("uc.locked.empty"))+"\n              ")]):t._e(),t._v(" "),t._l(t.miningList,function(e){return i("Col",{attrs:{xs:24,sm:24,md:8,lg:8}},[i("Card",{staticStyle:{width:"100%",position:"relative"}},[i("div",{staticStyle:{width:"100%","min-height":"58px"}},[i("div",{staticStyle:{float:"left"}},[i("img",{staticStyle:{width:"50px",height:"50px","border-radius":"50px"},attrs:{src:e.image}})]),t._v(" "),i("div",{staticStyle:{float:"left","text-align":"left","margin-left":"15px"}},[i("h2",[t._v(t._s(e.title))]),t._v(" "),i("p",[0==e.lockedStatus?i("span",{staticStyle:{"font-size":"12px",padding:"2px 8px","border-radius":"10px",background:"#FF0000"}},[t._v(t._s(t.$t("uc.locked.status0")))]):t._e()]),t._v(" "),i("p",[1==e.lockedStatus?i("span",{staticStyle:{"font-size":"12px",padding:"2px 8px","border-radius":"10px",background:"#00b275"}},[t._v(t._s(t.$t("uc.locked.status1")))]):t._e()]),t._v(" "),i("p",[2==e.lockedStatus?i("span",{staticStyle:{"font-size":"12px",padding:"2px 8px","border-radius":"10px",background:"#888"}},[t._v(t._s(t.$t("uc.locked.status2")))]):t._e()])])]),t._v(" "),i("div",{staticStyle:{width:"100%",padding:"5px 10px",background:"#000","border-radius":"5px"}},[i("table",{staticClass:"config-table"},[i("tr",[i("td",[t._v(t._s(t.$t("uc.locked.miningUnit")))]),i("td",[t._v(t._s(e.releaseUnit))]),t._v(" "),i("td",[t._v(t._s(t.$t("uc.locked.totallocked")))]),i("td",[t._v(t._s(e.totalLocked))])]),t._v(" "),i("tr",[i("td",[t._v(t._s(t.$t("uc.locked.miningDays")))]),t._v(" "),i("td",[t._v(t._s(e.lockedDays)+"\n                              "),0==e.period?i("span",[t._v(t._s(t.$t("uc.locked.day")))]):t._e(),t._v(" "),1==e.period?i("span",[t._v(t._s(t.$t("uc.locked.week")))]):t._e(),t._v(" "),2==e.period?i("span",[t._v(t._s(t.$t("uc.locked.month")))]):t._e(),t._v(" "),3==e.period?i("span",[t._v(t._s(t.$t("uc.locked.year")))]):t._e()]),t._v(" "),i("td",[t._v(t._s(t.$t("uc.locked.miningedDays")))]),t._v(" "),i("td",[t._v(t._s(e.releasedDays)+"\n                              "),0==e.period?i("span",[t._v(t._s(t.$t("uc.locked.day")))]):t._e(),t._v(" "),1==e.period?i("span",[t._v(t._s(t.$t("uc.locked.week")))]):t._e(),t._v(" "),2==e.period?i("span",[t._v(t._s(t.$t("uc.locked.month")))]):t._e(),t._v(" "),3==e.period?i("span",[t._v(t._s(t.$t("uc.locked.year")))]):t._e()])]),t._v(" "),i("tr",[i("td",[t._v(t._s(t.$t("uc.locked.miningDaysProfit")))]),t._v(" "),i("td",[0==e.releaseType?i("span",[t._v(t._s(e.originReleaseamount)+" "+t._s(e.releaseUnit)+"/")]):t._e(),t._v(" "),1==e.releaseType?i("span",[t._v(t._s(100*e.releasePercent)+" % /")]):t._e(),t._v(" "),0==e.period?i("span",[t._v(t._s(t.$t("uc.locked.day")))]):t._e(),t._v(" "),1==e.period?i("span",[t._v(t._s(t.$t("uc.locked.week")))]):t._e(),t._v(" "),2==e.period?i("span",[t._v(t._s(t.$t("uc.locked.month")))]):t._e(),t._v(" "),3==e.period?i("span",[t._v(t._s(t.$t("uc.locked.year")))]):t._e()]),t._v(" "),i("td",[t._v(t._s(t.$t("uc.locked.miningCurrentDaysProfit")))]),t._v(" "),i("td",[0==e.releaseType?i("span",[t._v(t._s(e.currentReleaseamount)+" "+t._s(e.releaseUnit)+"/")]):t._e(),t._v(" "),1==e.releaseType?i("span",[t._v(t._s(100*e.releaseCurrentpercent)+" % /")]):t._e(),t._v(" "),0==e.period?i("span",[t._v(t._s(t.$t("uc.locked.day")))]):t._e(),t._v(" "),1==e.period?i("span",[t._v(t._s(t.$t("uc.locked.week")))]):t._e(),t._v(" "),2==e.period?i("span",[t._v(t._s(t.$t("uc.locked.month")))]):t._e(),t._v(" "),3==e.period?i("span",[t._v(t._s(t.$t("uc.locked.year")))]):t._e()])])])]),t._v(" "),e.lockedInvite>0?i("div",{staticStyle:{"font-size":"12px","margin-top":"10px","text-align":"left",color:"#828ea1"}},[i("Icon",{attrs:{type:"ios-information-circle"}}),t._v(" "+t._s(t.$t("uc.locked.invitetip1"))+t._s(t._f("percentFun")(e.lockedInvite))+t._s(t.$t("uc.locked.invitetip2"))+t._s(t._f("percentFun")(e.lockedInvitelimit))+"%")],1):t._e()])],1)})],2)],1)])])])])},staticRenderFns:[]};var a=i("VU/8")(s,n,!1,function(t){i("R+vl"),i("eTyP")},"data-v-3852cbe0",null);e.default=a.exports}});