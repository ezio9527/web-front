webpackJsonp([14],{G741:function(t,i,s){t.exports=s.p+"assets/img/activity-bg.e474f1d.jpg"},IPga:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s("PJh5"),e={data:()=>({currentCate:"all",activityList:{all:{loaded:!1,pageSize:10,pageNo:1,total:0,items:[]},step0:{loaded:!1,pageSize:10,pageNo:1,total:0,items:[]},step1:{loaded:!1,pageSize:10,pageNo:1,total:0,items:[]},step2:{loaded:!1,pageSize:10,pageNo:1,total:0,items:[]},step3:{loaded:!1,pageSize:10,pageNo:1,total:0,items:[]}}}),created:function(){this.init(),this.getData()},filters:{dateFormat:function(t){return a(t).format("YYYY-MM-DD HH:mm:ss")},fixedScale:function(t,i){return t.toFixed(i)}},computed:{lang(){return this.$store.state.lang},langPram(){return"简体中文"==this.$store.state.lang?"CN":"English"==this.$store.state.lang?"EN":"CN"}},methods:{init(){this.$store.commit("navigate","nav-lab")},detail(t){this.$router.push("#/lab/detail/"+t)},pageChange(t){"all"==this.currentCate&&(this.activityList.all.pageNo=t,this.getData(-1)),"step0"==this.currentCate&&(this.activityList.step0.pageNo=t,this.getData(0)),"step1"==this.currentCate&&(this.activityList.step1.pageNo=t,this.getData(1)),"step2"==this.currentCate&&(this.activityList.step2.pageNo=t,this.getData(2)),"step3"==this.currentCate&&(this.activityList.step3.pageNo=t,this.getData(3))},tabChange(t){this.currentCate=t,"all"!=t||this.activityList.all.loaded||this.getData(-1),"step0"!=t||this.activityList.step0.loaded||this.getData(0),"step1"!=t||this.activityList.step1.loaded||this.getData(1),"step2"!=t||this.activityList.step2.loaded||this.getData(2),"step3"!=t||this.activityList.step3.loaded||this.getData(3)},getData(t=-1){let i={};i.step=t,-1==t&&(i.pageNo=this.activityList.all.pageNo),0==t&&(i.pageNo=this.activityList.step0.pageNo),1==t&&(i.pageNo=this.activityList.step1.pageNo),2==t&&(i.pageNo=this.activityList.step2.pageNo),3==t&&(i.pageNo=this.activityList.step3.pageNo),i.pageSize=10,this.$http.post(this.host+"/uc/activity/page-query",i).then(i=>{if(200==i.status&&0==i.body.code){let a=i.body.data.content;for(var s=0;s<a.length;s++)3==a[s].type&&(1==a[s].step?a[s].progress=50:2==a[s].step?a[s].progress=75:3==a[s].step?a[s].progress=100:a[s].progress=0);-1==t?(this.activityList.all.loaded=!0,this.activityList.all.items=a,this.activityList.all.total=i.body.data.totalElements):0==t?(this.activityList.step0.loaded=!0,this.activityList.step0.items=a,this.activityList.step0.total=i.body.data.totalElements):1==t?(this.activityList.step1.loaded=!0,this.activityList.step1.items=a,this.activityList.step1.total=i.body.data.totalElements):2==t?(this.activityList.step2.loaded=!0,this.activityList.step2.items=a,this.activityList.step2.total=i.body.data.totalElements):3==t&&(this.activityList.step3.loaded=!0,this.activityList.step3.items=a,this.activityList.step3.total=i.body.data.totalElements)}else this.$Message.error(i.body.message)})}}},v={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"activity"},[a("img",{staticClass:"bannerimg banner-pc",attrs:{src:s("G741")}}),t._v(" "),a("img",{staticClass:"bannerimg banner-mobile",attrs:{src:s("MOGu")}}),t._v(" "),a("div",{staticClass:"activity_container"},[a("h1",[t._v(t._s(t.$t("header.labdetail")))]),t._v(" "),a("p",{staticStyle:{"letter-spacing":"1px"}},[t._v(t._s(t.$t("activity.headertitledesc")))]),t._v(" "),a("div",{staticClass:"main"},[a("Tabs",{staticStyle:{width:"100%"},attrs:{animated:!1},on:{"on-click":t.tabChange}},[a("TabPane",{attrs:{label:t.$t("activity.all"),name:"all"}},[a("div",{staticClass:"activity-container"},[t.activityList.all.loaded&&0==t.activityList.all.total?a("div",{staticClass:"tips-line"},[a("img",{attrs:{src:s("ipim")}})]):t._e(),t._v(" "),t.activityList.all.loaded?t._e():a("div",{staticClass:"tips-line"},[a("Spin",{attrs:{size:"large"}})],1),t._v(" "),t._l(t.activityList.all.items,function(i,s){return a("div",{key:s,staticClass:"activity-item"},[1==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype1")))]):t._e(),t._v(" "),2==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype2")))]):t._e(),t._v(" "),3==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype3")))]):t._e(),t._v(" "),4==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype4")))]):t._e(),t._v(" "),5==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype5")))]):t._e(),t._v(" "),6==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype6")))]):t._e(),t._v(" "),a("Row",[a("Col",{attrs:{xs:24,sm:24,md:4,lg:4}},[a("img",{attrs:{src:i.smallImageUrl}})]),t._v(" "),a("Col",{attrs:{xs:24,sm:24,md:20,lg:20}},[a("div",{staticClass:"title"},[a("span",[t._v(t._s(i.title))]),t._v(" "),0==i.step?a("div",{staticClass:"step0"},[t._v(t._s(t.$t("activity.prepare")))]):t._e(),t._v(" "),1==i.step?a("div",{staticClass:"step1"},[t._v(t._s(t.$t("activity.ongoing")))]):t._e(),t._v(" "),2==i.step?a("div",{staticClass:"step2"},[t._v(t._s(t.$t("activity.tokendistribute")))]):t._e(),t._v(" "),3==i.step?a("div",{staticClass:"step3"},[t._v(t._s(t.$t("activity.completed")))]):t._e()]),t._v(" "),a("div",{staticStyle:{width:"100%","padding-top":"10px"}},[a("Row",[a("Col",{attrs:{xs:24,sm:24,md:10,lg:10}},[a("div",{staticClass:"progress-text",staticStyle:{"margin-bottom":"-3px"}},[a("span",{staticClass:"gray"},[t._v(t._s(t.$t("activity.progress")))]),t._v(" "),a("span",{staticClass:"gray"},[t._v(t._s(t.$t("activity.totalsupply")))])]),t._v(" "),a("Progress",{staticStyle:{width:"100%"},attrs:{percent:i.progress,status:"active","hide-info":"","stroke-width":5}}),t._v(" "),a("div",{staticClass:"progress-text"},[a("span",[t._v(t._s(t._f("fixedScale")(i.progress,2))+"%")]),t._v(" "),a("span",[t._v(t._s(t._f("fixedScale")(i.totalSupply,i.amountScale))+" "+t._s(i.unit))])])],1),t._v(" "),a("Col",{attrs:{xs:24,sm:24,md:14,lg:14}},[a("p",{staticClass:"progress-time"},[t._v(t._s(t.$t("activity.starttime"))+"："+t._s(t._f("dateFormat")(i.startTime)))]),t._v(" "),a("p",{staticClass:"progress-time"},[t._v(t._s(t.$t("activity.endtime"))+"："+t._s(t._f("dateFormat")(i.endTime)))])])],1),t._v(" "),a("Row",{staticClass:"bottom-panel"},[a("Col",{attrs:{span:"24"}},[a("div",{staticClass:"bottom"},[a("span",[a("Icon",{attrs:{type:"md-information-circle"}}),t._v(" "+t._s(i.detail))],1),t._v(" "),a("router-link",{attrs:{to:"/lab/detail/"+i.id}},[1==i.step?a("Button",{attrs:{type:"warning",target:"_blank"},on:{click:function(t){}}},[t._v(t._s(t.$t("activity.viewdetail")))]):a("Button",{attrs:{type:"primary",target:"_blank"}},[t._v(t._s(t.$t("activity.viewdetail")))])],1)],1),t._v(" "),a("div",{staticClass:"bottom-mobile"},[a("p",[a("span",[a("Icon",{attrs:{type:"md-information-circle"}}),t._v(" "+t._s(i.detail))],1)]),t._v(" "),a("router-link",{attrs:{to:"/lab/detail/"+i.id}},[1==i.step?a("Button",{attrs:{long:"",type:"warning"}},[t._v(t._s(t.$t("activity.viewdetail")))]):a("Button",{attrs:{type:"primary",long:""}},[t._v(t._s(t.$t("activity.viewdetail")))])],1)],1)])],1)],1)])],1)],1)})],2),t._v(" "),t.activityList.all.total>0?a("div",{staticClass:"page"},[a("Page",{attrs:{total:t.activityList.all.total,pageSize:t.activityList.all.pageSize,current:t.activityList.all.pageNo},on:{"on-change":t.pageChange}})],1):t._e()]),t._v(" "),a("TabPane",{attrs:{label:t.$t("activity.prepare"),name:"step0"}},[a("div",{staticClass:"activity-container"},[t.activityList.step0.loaded&&0==t.activityList.step0.total?a("div",{staticClass:"tips-line"},[a("img",{attrs:{src:s("ipim")}})]):t._e(),t._v(" "),t.activityList.step0.loaded?t._e():a("div",{staticClass:"tips-line"},[a("Spin",{attrs:{size:"large"}})],1),t._v(" "),t._l(t.activityList.step0.items,function(i,s){return a("div",{key:s,staticClass:"activity-item"},[1==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype1")))]):t._e(),t._v(" "),2==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype2")))]):t._e(),t._v(" "),3==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype3")))]):t._e(),t._v(" "),4==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype4")))]):t._e(),t._v(" "),5==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype5")))]):t._e(),t._v(" "),6==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype6")))]):t._e(),t._v(" "),a("Row",[a("Col",{attrs:{xs:24,sm:24,md:4,lg:4}},[a("img",{attrs:{src:i.smallImageUrl}})]),t._v(" "),a("Col",{attrs:{xs:24,sm:24,md:20,lg:20}},[a("div",{staticClass:"title"},[a("span",[t._v(t._s(i.title))]),t._v(" "),0==i.step?a("div",{staticClass:"step0"},[t._v(t._s(t.$t("activity.prepare")))]):t._e(),t._v(" "),1==i.step?a("div",{staticClass:"step1"},[t._v(t._s(t.$t("activity.ongoing")))]):t._e(),t._v(" "),2==i.step?a("div",{staticClass:"step2"},[t._v(t._s(t.$t("activity.tokendistribute")))]):t._e(),t._v(" "),3==i.step?a("div",{staticClass:"step3"},[t._v(t._s(t.$t("activity.completed")))]):t._e()]),t._v(" "),a("div",{staticStyle:{width:"100%","padding-top":"10px"}},[a("Row",[a("Col",{attrs:{xs:24,sm:24,md:10,lg:10}},[a("div",{staticClass:"progress-text",staticStyle:{"margin-bottom":"-3px"}},[a("span",{staticClass:"gray"},[t._v(t._s(t.$t("activity.progress")))]),t._v(" "),a("span",{staticClass:"gray"},[t._v(t._s(t.$t("activity.totalsupply")))])]),t._v(" "),a("Progress",{staticStyle:{width:"100%"},attrs:{percent:i.progress,status:"active","hide-info":"","stroke-width":5}}),t._v(" "),a("div",{staticClass:"progress-text"},[a("span",[t._v(t._s(t._f("fixedScale")(i.progress,2))+"%")]),t._v(" "),a("span",[t._v(t._s(t._f("fixedScale")(i.totalSupply,i.amountScale))+" "+t._s(i.unit))])])],1),t._v(" "),a("Col",{attrs:{xs:24,sm:24,md:14,lg:14}},[a("p",{staticClass:"progress-time"},[t._v(t._s(t.$t("activity.starttime"))+"："+t._s(t._f("dateFormat")(i.startTime)))]),t._v(" "),a("p",{staticClass:"progress-time"},[t._v(t._s(t.$t("activity.endtime"))+"："+t._s(t._f("dateFormat")(i.endTime)))])])],1),t._v(" "),a("Row",{staticClass:"bottom-panel"},[a("Col",{attrs:{span:"24"}},[a("div",{staticClass:"bottom"},[a("span",[a("Icon",{attrs:{type:"md-information-circle"}}),t._v(" "+t._s(i.detail))],1),t._v(" "),1==i.step?a("Button",{attrs:{type:"warning",to:"/lab/detail/"+i.id,target:"_blank"}},[t._v(t._s(t.$t("activity.viewdetail")))]):a("Button",{attrs:{type:"primary",to:"/lab/detail/"+i.id,target:"_blank"}},[t._v(t._s(t.$t("activity.viewdetail")))])],1),t._v(" "),a("div",{staticClass:"bottom-mobile"},[a("p",[a("span",[a("Icon",{attrs:{type:"md-information-circle"}}),t._v(" "+t._s(i.detail))],1)]),t._v(" "),1==i.step?a("Button",{attrs:{long:"",type:"warning",to:"/lab/detail/"+i.id}},[t._v(t._s(t.$t("activity.viewdetail")))]):a("Button",{attrs:{type:"primary",long:"",to:"/lab/detail/"+i.id}},[t._v(t._s(t.$t("activity.viewdetail")))])],1)])],1)],1)])],1)],1)})],2),t._v(" "),t.activityList.step0.total>0?a("div",{staticClass:"page"},[a("Page",{attrs:{total:t.activityList.step0.total,pageSize:t.activityList.step0.pageSize,current:t.activityList.step0.pageNo},on:{"on-change":t.pageChange}})],1):t._e()]),t._v(" "),a("TabPane",{attrs:{label:t.$t("activity.ongoing"),name:"step1"}},[a("div",{staticClass:"activity-container"},[t.activityList.step1.loaded&&0==t.activityList.step1.total?a("div",{staticClass:"tips-line"},[a("img",{attrs:{src:s("ipim")}})]):t._e(),t._v(" "),t.activityList.step1.loaded?t._e():a("div",{staticClass:"tips-line"},[a("Spin",{attrs:{size:"large"}})],1),t._v(" "),t._l(t.activityList.step1.items,function(i,s){return a("div",{key:s,staticClass:"activity-item"},[1==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype1")))]):t._e(),t._v(" "),2==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype2")))]):t._e(),t._v(" "),3==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype3")))]):t._e(),t._v(" "),4==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype4")))]):t._e(),t._v(" "),5==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype5")))]):t._e(),t._v(" "),6==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype6")))]):t._e(),t._v(" "),a("Row",[a("Col",{attrs:{xs:24,sm:24,md:4,lg:4}},[a("img",{attrs:{src:i.smallImageUrl}})]),t._v(" "),a("Col",{attrs:{xs:24,sm:24,md:20,lg:20}},[a("div",{staticClass:"title"},[a("span",[t._v(t._s(i.title))]),t._v(" "),0==i.step?a("div",{staticClass:"step0"},[t._v(t._s(t.$t("activity.prepare")))]):t._e(),t._v(" "),1==i.step?a("div",{staticClass:"step1"},[t._v(t._s(t.$t("activity.ongoing")))]):t._e(),t._v(" "),2==i.step?a("div",{staticClass:"step2"},[t._v(t._s(t.$t("activity.tokendistribute")))]):t._e(),t._v(" "),3==i.step?a("div",{staticClass:"step3"},[t._v(t._s(t.$t("activity.completed")))]):t._e()]),t._v(" "),a("div",{staticStyle:{width:"100%","padding-top":"10px"}},[a("Row",[a("Col",{attrs:{xs:24,sm:24,md:10,lg:10}},[a("div",{staticClass:"progress-text",staticStyle:{"margin-bottom":"-3px"}},[a("span",{staticClass:"gray"},[t._v(t._s(t.$t("activity.progress")))]),t._v(" "),a("span",{staticClass:"gray"},[t._v(t._s(t.$t("activity.totalsupply")))])]),t._v(" "),a("Progress",{staticStyle:{width:"100%"},attrs:{percent:i.progress,status:"active","hide-info":"","stroke-width":5}}),t._v(" "),a("div",{staticClass:"progress-text"},[a("span",[t._v(t._s(t._f("fixedScale")(i.progress,2))+"%")]),t._v(" "),a("span",[t._v(t._s(t._f("fixedScale")(i.totalSupply,i.amountScale))+" "+t._s(i.unit))])])],1),t._v(" "),a("Col",{attrs:{xs:24,sm:24,md:14,lg:14}},[a("p",{staticClass:"progress-time"},[t._v(t._s(t.$t("activity.starttime"))+"："+t._s(t._f("dateFormat")(i.startTime)))]),t._v(" "),a("p",{staticClass:"progress-time"},[t._v(t._s(t.$t("activity.endtime"))+"："+t._s(t._f("dateFormat")(i.endTime)))])])],1),t._v(" "),a("Row",{staticClass:"bottom-panel"},[a("Col",{attrs:{span:"24"}},[a("div",{staticClass:"bottom"},[a("span",[a("Icon",{attrs:{type:"md-information-circle"}}),t._v(" "+t._s(i.detail))],1),t._v(" "),1==i.step?a("Button",{attrs:{type:"warning",to:"/lab/detail/"+i.id,target:"_blank"}},[t._v(t._s(t.$t("activity.viewdetail")))]):a("Button",{attrs:{type:"primary",to:"/lab/detail/"+i.id,target:"_blank"}},[t._v(t._s(t.$t("activity.viewdetail")))])],1),t._v(" "),a("div",{staticClass:"bottom-mobile"},[a("p",[a("span",[a("Icon",{attrs:{type:"md-information-circle"}}),t._v(" "+t._s(i.detail))],1)]),t._v(" "),1==i.step?a("Button",{attrs:{long:"",type:"warning",to:"/lab/detail/"+i.id}},[t._v(t._s(t.$t("activity.viewdetail")))]):a("Button",{attrs:{type:"primary",long:"",to:"/lab/detail/"+i.id}},[t._v(t._s(t.$t("activity.viewdetail")))])],1)])],1)],1)])],1)],1)})],2),t._v(" "),t.activityList.step1.total>0?a("div",{staticClass:"page"},[a("Page",{attrs:{total:t.activityList.step1.total,pageSize:t.activityList.step1.pageSize,current:t.activityList.step1.pageNo},on:{"on-change":t.pageChange}})],1):t._e()]),t._v(" "),a("TabPane",{attrs:{label:t.$t("activity.distributing"),name:"step2"}},[a("div",{staticClass:"activity-container"},[t.activityList.step2.loaded&&0==t.activityList.step2.total?a("div",{staticClass:"tips-line"},[a("img",{attrs:{src:s("ipim")}})]):t._e(),t._v(" "),t.activityList.step2.loaded?t._e():a("div",{staticClass:"tips-line"},[a("Spin",{attrs:{size:"large"}})],1),t._v(" "),t._l(t.activityList.step2.items,function(i,s){return a("div",{key:s,staticClass:"activity-item"},[1==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype1")))]):t._e(),t._v(" "),2==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype2")))]):t._e(),t._v(" "),3==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype3")))]):t._e(),t._v(" "),4==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype4")))]):t._e(),t._v(" "),5==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype5")))]):t._e(),t._v(" "),6==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype6")))]):t._e(),t._v(" "),a("Row",[a("Col",{attrs:{xs:24,sm:24,md:4,lg:4}},[a("img",{attrs:{src:i.smallImageUrl}})]),t._v(" "),a("Col",{attrs:{xs:24,sm:24,md:20,lg:20}},[a("div",{staticClass:"title"},[a("span",[t._v(t._s(i.title))]),t._v(" "),0==i.step?a("div",{staticClass:"step0"},[t._v(t._s(t.$t("activity.prepare")))]):t._e(),t._v(" "),1==i.step?a("div",{staticClass:"step1"},[t._v(t._s(t.$t("activity.ongoing")))]):t._e(),t._v(" "),2==i.step?a("div",{staticClass:"step2"},[t._v(t._s(t.$t("activity.tokendistribute")))]):t._e(),t._v(" "),3==i.step?a("div",{staticClass:"step3"},[t._v(t._s(t.$t("activity.completed")))]):t._e()]),t._v(" "),a("div",{staticStyle:{width:"100%","padding-top":"10px"}},[a("Row",[a("Col",{attrs:{xs:24,sm:24,md:10,lg:10}},[a("div",{staticClass:"progress-text",staticStyle:{"margin-bottom":"-3px"}},[a("span",{staticClass:"gray"},[t._v(t._s(t.$t("activity.progress")))]),t._v(" "),a("span",{staticClass:"gray"},[t._v(t._s(t.$t("activity.totalsupply")))])]),t._v(" "),a("Progress",{staticStyle:{width:"100%"},attrs:{percent:i.progress,status:"active","hide-info":"","stroke-width":5}}),t._v(" "),a("div",{staticClass:"progress-text"},[a("span",[t._v(t._s(t._f("fixedScale")(i.progress,2))+"%")]),t._v(" "),a("span",[t._v(t._s(t._f("fixedScale")(i.totalSupply,i.amountScale))+" "+t._s(i.unit))])])],1),t._v(" "),a("Col",{attrs:{xs:24,sm:24,md:14,lg:14}},[a("p",{staticClass:"progress-time"},[t._v(t._s(t.$t("activity.starttime"))+"："+t._s(t._f("dateFormat")(i.startTime)))]),t._v(" "),a("p",{staticClass:"progress-time"},[t._v(t._s(t.$t("activity.endtime"))+"："+t._s(t._f("dateFormat")(i.endTime)))])])],1),t._v(" "),a("Row",{staticClass:"bottom-panel"},[a("Col",{attrs:{span:"24"}},[a("div",{staticClass:"bottom"},[a("span",[a("Icon",{attrs:{type:"md-information-circle"}}),t._v(" "+t._s(i.detail))],1),t._v(" "),1==i.step?a("Button",{attrs:{type:"warning",to:"/lab/detail/"+i.id,target:"_blank"}},[t._v(t._s(t.$t("activity.viewdetail")))]):a("Button",{attrs:{type:"primary",to:"/lab/detail/"+i.id,target:"_blank"}},[t._v(t._s(t.$t("activity.viewdetail")))])],1),t._v(" "),a("div",{staticClass:"bottom-mobile"},[a("p",[a("span",[a("Icon",{attrs:{type:"md-information-circle"}}),t._v(" "+t._s(i.detail))],1)]),t._v(" "),1==i.step?a("Button",{attrs:{long:"",type:"warning",to:"/lab/detail/"+i.id}},[t._v(t._s(t.$t("activity.viewdetail")))]):a("Button",{attrs:{type:"primary",long:"",to:"/lab/detail/"+i.id}},[t._v(t._s(t.$t("activity.viewdetail")))])],1)])],1)],1)])],1)],1)})],2),t._v(" "),t.activityList.step2.total>0?a("div",{staticClass:"page"},[a("Page",{attrs:{total:t.activityList.step2.total,pageSize:t.activityList.step2.pageSize,current:t.activityList.step2.pageNo},on:{"on-change":t.pageChange}})],1):t._e()]),t._v(" "),a("TabPane",{attrs:{label:t.$t("activity.completed"),name:"step3"}},[a("div",{staticClass:"activity-container"},[t.activityList.step3.loaded&&0==t.activityList.step3.total?a("div",{staticClass:"tips-line"},[a("img",{attrs:{src:s("ipim")}})]):t._e(),t._v(" "),t.activityList.step3.loaded?t._e():a("div",{staticClass:"tips-line"},[a("Spin",{attrs:{size:"large"}})],1),t._v(" "),t._l(t.activityList.step3.items,function(i,s){return a("div",{key:s,staticClass:"activity-item"},[1==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype1")))]):t._e(),t._v(" "),2==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype2")))]):t._e(),t._v(" "),3==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype3")))]):t._e(),t._v(" "),4==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype4")))]):t._e(),t._v(" "),5==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype5")))]):t._e(),t._v(" "),6==i.type?a("div",{staticClass:"activity-type"},[t._v(t._s(t.$t("activity.activitytype6")))]):t._e(),t._v(" "),a("Row",[a("Col",{attrs:{xs:24,sm:24,md:4,lg:4}},[a("img",{attrs:{src:i.smallImageUrl}})]),t._v(" "),a("Col",{attrs:{xs:24,sm:24,md:20,lg:20}},[a("div",{staticClass:"title"},[a("span",[t._v(t._s(i.title))]),t._v(" "),0==i.step?a("div",{staticClass:"step0"},[t._v(t._s(t.$t("activity.prepare")))]):t._e(),t._v(" "),1==i.step?a("div",{staticClass:"step1"},[t._v(t._s(t.$t("activity.ongoing")))]):t._e(),t._v(" "),2==i.step?a("div",{staticClass:"step2"},[t._v(t._s(t.$t("activity.tokendistribute")))]):t._e(),t._v(" "),3==i.step?a("div",{staticClass:"step3"},[t._v(t._s(t.$t("activity.completed")))]):t._e()]),t._v(" "),a("div",{staticStyle:{width:"100%","padding-top":"10px"}},[a("Row",[a("Col",{attrs:{xs:24,sm:24,md:10,lg:10}},[a("div",{staticClass:"progress-text",staticStyle:{"margin-bottom":"-3px"}},[a("span",{staticClass:"gray"},[t._v(t._s(t.$t("activity.progress")))]),t._v(" "),a("span",{staticClass:"gray"},[t._v(t._s(t.$t("activity.totalsupply")))])]),t._v(" "),a("Progress",{staticStyle:{width:"100%"},attrs:{percent:i.progress,status:"active","hide-info":"","stroke-width":5}}),t._v(" "),a("div",{staticClass:"progress-text"},[a("span",[t._v(t._s(t._f("fixedScale")(i.progress,2))+"%")]),t._v(" "),a("span",[t._v(t._s(t._f("fixedScale")(i.totalSupply,i.amountScale))+" "+t._s(i.unit))])])],1),t._v(" "),a("Col",{attrs:{xs:24,sm:24,md:14,lg:14}},[a("p",{staticClass:"progress-time"},[t._v(t._s(t.$t("activity.starttime"))+"："+t._s(t._f("dateFormat")(i.startTime)))]),t._v(" "),a("p",{staticClass:"progress-time"},[t._v(t._s(t.$t("activity.endtime"))+"："+t._s(t._f("dateFormat")(i.endTime)))])])],1),t._v(" "),a("Row",{staticClass:"bottom-panel"},[a("Col",{attrs:{span:"24"}},[a("div",{staticClass:"bottom"},[a("span",[a("Icon",{attrs:{type:"md-information-circle"}}),t._v(" "+t._s(i.detail))],1),t._v(" "),1==i.step?a("Button",{attrs:{type:"warning",to:"/lab/detail/"+i.id,target:"_blank"}},[t._v(t._s(t.$t("activity.viewdetail")))]):a("Button",{attrs:{type:"primary",to:"/lab/detail/"+i.id,target:"_blank"}},[t._v(t._s(t.$t("activity.viewdetail")))])],1),t._v(" "),a("div",{staticClass:"bottom-mobile"},[a("p",[a("span",[a("Icon",{attrs:{type:"md-information-circle"}}),t._v(" "+t._s(i.detail))],1)]),t._v(" "),1==i.step?a("Button",{attrs:{long:"",type:"warning",to:"#/lab/detail/"+i.id}},[t._v(t._s(t.$t("activity.viewdetail")))]):a("Button",{attrs:{type:"primary",long:"",to:"/lab/detail/"+i.id}},[t._v(t._s(t.$t("activity.viewdetail")))])],1)])],1)],1)])],1)],1)})],2),t._v(" "),t.activityList.step3.total>0?a("div",{staticClass:"page"},[a("Page",{attrs:{total:t.activityList.step3.total,pageSize:t.activityList.step3.pageSize,current:t.activityList.step3.pageNo},on:{"on-change":t.pageChange}})],1):t._e()])],1)],1)])])},staticRenderFns:[]};var l=s("VU/8")(e,v,!1,function(t){s("bPZT"),s("f4wn")},"data-v-4c6452ae",null);i.default=l.exports},MOGu:function(t,i,s){t.exports=s.p+"assets/img/activity_mobile.ff1219e.jpg"},bPZT:function(t,i){},f4wn:function(t,i){},ipim:function(t,i){t.exports="data:image/png;base64,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"}});