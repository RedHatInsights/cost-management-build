(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{609:function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"b",function(){return s}),a.d(t,"a",function(){return i});const n=e=>{const t=e?e.toLowerCase():"";switch(t){case"usd":case"gb":case"gb-hours":case"gb-mo":case"core-hours":case"hrs":case"tag-mo":case"vm-hours":return t;default:return""}},s=(e,t,a={})=>{const s=n(t),c=e||0;switch(s){case"usd":return i(c,s,a);case"gb":case"gb-hours":case"gb-mo":case"tag-mo":case"vm-hours":return o(c,s,a);case"core-hours":case"hrs":return l(c,s,a);default:return r(c,s,a)}},r=(e,t,{fractionDigits:a=0}={})=>e.toLocaleString("en",{minimumFractionDigits:a,maximumFractionDigits:a}),i=(e,t,{fractionDigits:a=2}={})=>{let n=e;return e||(n=0),n.toLocaleString("en",{style:"currency",currency:t||"USD",minimumFractionDigits:a,maximumFractionDigits:a})},o=(e,t,{fractionDigits:a=0}={})=>e.toLocaleString("en",{minimumFractionDigits:a,maximumFractionDigits:a}),l=(e,t,{fractionDigits:a=0}={})=>e.toLocaleString("en",{minimumFractionDigits:a,maximumFractionDigits:a})},611:function(e,t,a){"use strict";a.d(t,"g",function(){return b}),a.d(t,"b",function(){return _}),a.d(t,"c",function(){return f}),a.d(t,"d",function(){return y}),a.d(t,"e",function(){return D}),a.d(t,"a",function(){return S}),a.d(t,"f",function(){return E});var n=a(713),s=a.n(n),r=a(630),i=a.n(r),o=a(612),l=a.n(o),c=a(712),u=a.n(c),d=a(642),m=a.n(d),h=a(257),g=a(616),p=a(609);function b(e,t=1,a="date",n="cost"){if(!e)return[];const s={report:e,idKey:a,sortKey:"id",sortDirection:1},r=Object(g.a)(s);return 1===t?r.map(e=>v(e[n],e,a)):2===t?r.map(e=>v(e[n],e,a)):r.reduce((e,t)=>{const s=e.length?e[e.length-1].y:0;return[...e,v(s+t[n],t,a)]},[])}function v(e,t,a="date"){return{x:"date"===a?l()(t.id):t.label,y:function(e){return Number(e)===e&&e%1!=0}(e)?parseFloat(e.toFixed(2)):function(e){return Number(e)===e&&e%1==0}(e)?e:0,key:t.id,name:t.id,units:t.units}}function _(e,t=!0,a=!1,n=0){const[r,i]=function(e,t=0){if(!e||!e.length){const e=new Date;return t&&e.setMonth(e.getMonth()-t),[m()(e),e]}return[new Date(e[0].key+"T00:00:00"),new Date(e[e.length-1].key+"T00:00:00")]}(e,n);if(t&&r.setDate&&r.setDate(1),a&&r.setDate){const e=s()(r).getDate();i.setDate(e)}return[r,i]}function f(e){let t=0;return e&&e.length&&e.forEach(e=>{e.y>t&&(t=e.y)}),t}function y(e){return function(t,a=null,n={}){const s=Object(p.c)(a);switch(s){case"core-hours":case"hrs":case"gb":case"gb-hours":case"gb-mo":case"vm-hours":return h.a.t(`unit_tooltips.${s}`,{value:`${e(t,a,n)}`});default:return`${e(t,a,n)}`}}}function D(e,t,a,n="date",s){if(!e.key)return"";if("date"===n){return`${i()(e.key,"DD MMM YYYY")} ${t(e.y,s||e.units,a)}`}return e.key.toString()}function S(e,t="chart.cost_legend_label",a=!1,n=!1,s=0){const[r,o]=_(e,a,n,s);return h.a.t(t,{count:l()(o),endDate:i()(o,"D"),month:Number(i()(r,"M"))-1,startDate:i()(r,"D"),year:u()(o)})}function E(e,t="chart.usage_legend_label",a=!1,n=!1,s=0){return S(e,t,a,n,s)}},613:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return s});const n=e=>({"data-testid":e}),s={details:{cluster_lnk:"cluster-lnk",historical_data_btn:"historical-data-btn",show_more_btn:"show-more-btn",tag_lnk:"tag-lnk",view_all_btn:"view-all-btn"},export:{cancel_btn:"cancel-btn",submit_btn:"submit-btn"},login:{alert:"alert",form:"login-form",username_input:"username-input",password_input:"password-input",submit:"submit"},masthead:{masthead:"masthead",username:"username",sidebarToggle:"sidebar-toggle",logout:"logout"},onboarding:{btn_cancel:"btn-cancel",btn_back:"btn-back",btn_continue:"btn-continue",btn_close:"btn-close",type_selector:"type-selector",type_opt_aws:"type-option-aws",type_opt_ocp:"type-option-ocp",type_opt_non:"type-option-non",name_input:"name-input",check_box_1:"check-box-1",check_box_2:"check-box-2",s3_input:"s3-input",clusterid_input:"clusterid-input",arn_input:"arn-input"},providers:{add_btn:"add-btn",bucket_input:"bucket-input",cancel_btn:"cancel-btn",empty_state_add_btn:"empty_state_add-btn",name_input:"provider-name-input",resource_name_input:"provider-resource-name-input",cluster_id_input:"provider-cluster-id-input",submit_btn:"submit-btn",type_input:"provider-type-input",view_all_link:"view-all-lnk"},sidebar:{nav:"vertical-nav",link:"vertical-nav-link",backdrop:"sidebar-backdrop"}}},616:function(e,t,a){"use strict";var n=a(637),s=a(26);function r({report:e,idKey:t,labelKey:a=t,sortDirection:s=0,sortKey:r="cost"}){return Object(n.a)(i({report:e,idKey:t,labelKey:a,sortDirection:s,sortKey:r}),{key:r,direction:s})}function i({report:e,idKey:t,labelKey:a=t}){if(!e)return[];const n=new Map,r=i=>{i.values&&i.values.forEach(r=>{const i=r.clusters&&r.clusters.length>0?r.clusters[0]:void 0,o=i||r.cluster,l=r.capacity?r.capacity.value:0,c=r.cost&&r.cost.total?r.cost.total.value:0,u=r.supplementary&&r.supplementary.total?r.supplementary.total.value:0,d=r.infrastructure&&r.infrastructure.total?r.infrastructure.total.value:0,m="date"!==t&&"cluster"!==t&&r.cluster?`-${r.cluster}`:"",h=`${r[t]}${m}`;let g;const p=function({report:e,labelKey:t,value:a}){let n=String(t);if(e.meta&&e.meta.group_by){const r=e.meta.group_by;for(const e of Object.keys(r))if(e.indexOf(s.d)){const e=s.d+t;a.hasOwnProperty(e)&&(n=e)}}return n}({report:e,labelKey:a,value:r});g="cluster"===p&&i?i:r[p]instanceof Object?r[p].value:r[p],"account"===p&&r.account_alias&&(g=r.account_alias);const b=r.limit?r.limit.value:0,v=r.request?r.request.value:0,_=r.usage?r.usage.value:0,f=r.usage?r.usage.units:r.cost&&r.cost.total?r.cost.total.units:"USD";n.get(h)?n.set(h,Object.assign({},n.get(h),{capacity:n.get(h).capacity+l,cost:n.get(h).cost+c,supplementaryCost:n.get(h).supplementaryCost+u,infrastructureCost:n.get(h).infrastructureCost+d,limit:n.get(h).limit+b,request:n.get(h).request+v,usage:n.get(h).usage+_})):n.set(h,{capacity:l,cluster:o,clusters:r.clusters,cost:c,deltaPercent:r.delta_percent,deltaValue:r.delta_value,supplementaryCost:u,id:h,infrastructureCost:d,label:g,limit:b,request:v,units:f,usage:_})});for(const e in i)if(i[e]instanceof Array)return i[e].forEach(r)};return e&&e.data&&e.data.forEach(r),Array.from(n.values())}a.d(t,"a",function(){return r}),a.d(t,"b",function(){return i})},620:function(e,t,a){"use strict";var n=a(942),s=a(251);const r={padding:8};var i={area:Object.assign({},r),axis:Object.assign({},r),bar:Object.assign({},r),boxplot:Object.assign({},r),candlestick:Object.assign({},r),chart:Object.assign({},r),errorbar:Object.assign({},r),group:Object.assign({},r),legend:{},line:Object.assign({},r),pie:Object.assign({},r),scatter:Object.assign({},r),stack:Object.assign({},r),tooltip:{},voronoi:Object.assign({},r)};const o=(()=>Object(n.k)(s.q.default,s.r.default,i))();t.a=o},623:function(e,t,a){"use strict";var n=a(999),s=a(1034),r=a(1e3),i=a(996),o=a(1052),l=a(1),c=a.n(l),u=a(210);const d={container:{display:"flex",justifyContent:"center",height:"100vh",marginTop:"150px"}};a.d(t,"a",function(){return m});const m=Object(u.d)()(({icon:e=o.a,t:t})=>{const a=t("loading_state.sources_title"),l=t("loading_state.sources_desc");return c.a.createElement("div",{style:d.container},c.a.createElement(r.a,null,c.a.createElement(i.a,{size:"lg"}),c.a.createElement(s.a,{size:"lg"},a),c.a.createElement(n.a,null,l)))})},625:function(e,t,a){"use strict";var n=a(999),s=a(1034),r=a(1e3),i=a(998),o=a(1035),l=a(1044),c=a(1),u=a.n(c),d=a(210);const m={container:{display:"flex",justifyContent:"center",height:"100vh",marginTop:"150px"}};a.d(t,"a",function(){return h});const h=Object(d.d)()(({error:e,icon:t=o.a,t:a})=>{let c=a("error_state.unexpected_title"),d=a("error_state.unexpected_desc");return e&&e.response&&(401===e.response.status||403===e.response.status)&&(t=l.a,c=a("error_state.unauthorized_title"),d=a("error_state.unauthorized_desc")),u.a.createElement("div",{style:m.container},u.a.createElement(r.a,null,u.a.createElement(i.a,{icon:t}),u.a.createElement(s.a,{size:"lg"},c),u.a.createElement(n.a,null,d)))})},627:function(e,t,a){"use strict";var n=a(1043),s=a(1),r=a.n(s);const i={container:{fontSize:a(143).global_FontSize_sm.value}};a.d(t,"a",function(){return o});const o=()=>r.a.createElement("span",{style:i.container},r.a.createElement(n.a,null))},628:function(e,t,a){"use strict";var n=a(1024),s=a(1026),r=a(1023),i=a(1022),o=a(1034),l=a(615),c=a(1),u=a.n(c),d=a(210),m=a(143);const h={chartSkeleton:{height:"125px",marginBottom:m.global_spacer_md.value,marginTop:m.global_spacer_md.value},legendSkeleton:{marginTop:m.global_spacer_md.value},reportSummary:{height:"100%"},subtitle:{display:"inline-block",fontSize:m.global_FontSize_xs.value,color:m.global_Color_200.var,marginBottom:"0"}},g=Object(d.d)()(({children:e,detailsLink:t,title:a,subTitle:c,status:d,t:m})=>u.a.createElement(s.a,{style:h.reportSummary},u.a.createElement(i.a,null,u.a.createElement(o.a,{size:"lg"},a),Boolean(c)&&u.a.createElement("p",{style:h.subtitle},c)),u.a.createElement(n.a,null,1===d?u.a.createElement(u.a.Fragment,null,u.a.createElement(l.Skeleton,{size:l.SkeletonSize.xs}),u.a.createElement(l.Skeleton,{style:h.chartSkeleton,size:l.SkeletonSize.md}),u.a.createElement(l.Skeleton,{size:l.SkeletonSize.sm}),u.a.createElement(l.Skeleton,{style:h.legendSkeleton,size:l.SkeletonSize.xs})):e),Boolean(t)&&u.a.createElement(r.a,null,t)));var p=a(979),b=a(980);const v={chartSkeleton:{height:"175px",marginBottom:m.global_spacer_md.value,marginTop:m.global_spacer_md.value},container:{display:"flex"},cost:{flexGrow:1,minHeight:"470px",marginRight:m.global_spacer_md.value},legendSkeleton:{marginTop:m.global_spacer_md.value},reportSummary:{height:"100%"},subtitle:{display:"inline-block",fontSize:m.global_FontSize_xs.value,color:m.global_Color_200.var,marginBottom:"0"},tops:{flexGrow:1,marginTop:m.global_spacer_lg.value}},_=Object(d.d)()(({children:e,detailsLink:t,status:a,subTitle:c,t:d,tabs:m,title:h})=>u.a.createElement(s.a,{style:v.reportSummary},u.a.createElement(b.a,{gutter:"md"},u.a.createElement(p.a,{lg:5,xl:6},u.a.createElement("div",{style:v.cost},u.a.createElement(i.a,null,u.a.createElement(o.a,{size:"lg"},h),Boolean(c)&&u.a.createElement("p",{style:v.subtitle},c)),u.a.createElement(n.a,null,1===a?u.a.createElement(u.a.Fragment,null,u.a.createElement(l.Skeleton,{size:l.SkeletonSize.xs}),u.a.createElement(l.Skeleton,{style:v.chartSkeleton,size:l.SkeletonSize.md}),u.a.createElement(l.Skeleton,{size:l.SkeletonSize.sm}),u.a.createElement(l.Skeleton,{style:v.legendSkeleton,size:l.SkeletonSize.xs})):e))),u.a.createElement(p.a,{lg:7,xl:6},u.a.createElement("div",{style:v.container},u.a.createElement("div",{style:v.tops},1!==a&&u.a.createElement(u.a.Fragment,null,Boolean(m)&&u.a.createElement(n.a,null,m),Boolean(t)&&u.a.createElement(r.a,null,t))))))));var f=a(918),y=a(627),D=a(609);const S={reportSummaryDetails:{marginBottom:m.global_spacer_md.value,display:"flex",alignItems:"flex-end"},text:{paddingBottom:14,lineHeight:m.global_LineHeight_sm.value,fontSize:m.global_FontSize_xs.value},value:{color:m.global_Color_100.var,marginRight:m.global_spacer_sm.value,fontSize:m.global_FontSize_4xl.value},valueContainer:{display:"inline-block",marginBottom:m.global_spacer_md.value,width:"50%",wordWrap:"break-word"}},E=Object(d.d)()(({chartType:e,costLabel:t,formatValue:a,formatOptions:n,report:s,requestFormatOptions:r,requestLabel:i,showTooltip:o=!1,showUnits:l=!1,showUsageFirst:c=!1,t:d,units:m,usageFormatOptions:h,usageLabel:g})=>{let p=u.a.createElement(y.a,null),b=u.a.createElement(y.a,null),v=u.a.createElement(y.a,null),_=u.a.createElement(y.a,null),E=u.a.createElement(y.a,null);const k=s&&s.meta&&s.meta.total,C=k&&s.meta.total.cost&&s.meta.total.cost.total,x=k&&s.meta.total.count,O=k&&s.meta.total.supplementary&&s.meta.total.supplementary.total&&s.meta.total.supplementary.total.value,w=k&&s.meta.total.infrastructure&&s.meta.total.infrastructure.total&&s.meta.total.infrastructure.total.value,j=k&&s.meta.total.request,z=k&&s.meta.total.usage;k&&(p=a(C?s.meta.total.cost.total.value:0,C?s.meta.total.cost.total.units:"USD",n),b=a(O?s.meta.total.supplementary.total.value:0,O?s.meta.total.supplementary.total.units:"USD",n),v=a(w?s.meta.total.infrastructure.total.value:0,w?s.meta.total.infrastructure.total.units:"USD",n),_=a(j?s.meta.total.request.value:0,j?s.meta.total.request.units:"",r?h:n),E=z&&s.meta.total.usage.value>=0?a(z?s.meta.total.usage.value:0,z?s.meta.total.usage.units:"",h||n):a(z?s.meta.total.usage:0,x?s.meta.total.count.units:"",h||n));const L=()=>u.a.createElement("div",{style:S.valueContainer},Boolean(o)?u.a.createElement(f.a,{content:d("dashboard.total_cost_tooltip",{infrastructureCost:v,supplementaryCost:b}),enableFlip:!0},u.a.createElement("div",{style:S.value},p)):u.a.createElement("div",{style:S.value},p),u.a.createElement("div",{style:S.text},u.a.createElement("div",null,t))),R=()=>{if(!g)return null;const e=j?s.meta.total.request.units:"",t=Object(D.c)(e),a=d(`units.${t}`);return u.a.createElement("div",{style:S.valueContainer},u.a.createElement("div",{style:S.value},_,Boolean(l&&j&&s.meta.total.request.value>=0)&&u.a.createElement("span",{style:S.text},a)),u.a.createElement("div",{style:S.text},u.a.createElement("div",null,i)))},N=()=>{if(!g)return null;const e=z?s.meta.total.usage.units:"",t=Object(D.c)(m||e),a=d(`units.${t}`);return u.a.createElement("div",{style:S.valueContainer},u.a.createElement("div",{style:S.value},E,Boolean(l&&z&&s.meta.total.usage.value>=0)&&u.a.createElement("span",{style:S.text},a)),u.a.createElement("div",{style:S.text},u.a.createElement("div",null,g)))};return"cost"===e?u.a.createElement(u.a.Fragment,null,L()):"trend"===e?c?u.a.createElement(u.a.Fragment,null,N(),L()):u.a.createElement(u.a.Fragment,null,L(),N()):"usage"===e?c?u.a.createElement(u.a.Fragment,null,N(),R()):u.a.createElement(u.a.Fragment,null,R(),N()):null});var k=a(923);const C={reportSummaryItem:{":not(:last-child)":{marginBottom:m.global_spacer_md.value}},test:{":not(foo) svg":{overflow:"visible"}}},x=({label:e,formatOptions:t,formatValue:a,t:n,totalValue:s,units:r,value:i})=>{const o=Object(D.c)(r),l="usd"!==o?n(`units.${o}`):void 0,c=Number((s?i/s*100:0).toFixed(2)),d=n("percent_of_total",{percent:c,units:l,value:a(i,r,t)});return u.a.createElement("li",{style:C.reportSummaryItem},u.a.createElement(k.a,{label:d,value:c,title:e,size:k.b.sm}))};x.defaultProps={formatValue:e=>e};const O=Object(d.d)()(x);var w=a(616);const j={skeleton:{marginTop:m.global_spacer_md.value}};const z=Object(d.d)()(class extends u.a.Component{shouldComponentUpdate(e){return e.report!==this.props.report}getItems(){const{report:e,idKey:t,labelKey:a}=this.props,n=Object(w.a)({report:e,idKey:t,labelKey:a}),s=n.findIndex(e=>{const t=e.id;if(t&&null!==t)return t.toString().includes("Other")});return-1!==s?[...n.slice(0,s),...n.slice(s+1),n[s]]:n}render(){const{children:e,status:t}=this.props;if(1===t)return u.a.createElement(u.a.Fragment,null,u.a.createElement(l.Skeleton,{size:l.SkeletonSize.md}),u.a.createElement(l.Skeleton,{size:l.SkeletonSize.md,style:j.skeleton}),u.a.createElement(l.Skeleton,{size:l.SkeletonSize.md,style:j.skeleton}),u.a.createElement(l.Skeleton,{size:l.SkeletonSize.md,style:j.skeleton}));{const t=this.getItems();return u.a.createElement("ul",null,e({items:t}))}}});var L=a(958),R=a(953),N=a(969),I=a(950),F=a(929),q=a(954),T=a(620),U=a(611),A=a(612),M=a.n(A),H=a(257);const B={currentCostData:{data:{fill:"none",stroke:"#A2DA9C"}},currentInfrastructureCostData:{data:{fill:"none",stroke:"#88D080",strokeDasharray:"3,3"}},itemsPerRow:2,legend:{labels:{fontFamily:m.global_FontFamily_sans_serif.value,fontSize:14},minWidth:200},legendColorScale:[m.global_disabled_color_200.value,m.chart_color_green_100.value,m.global_disabled_color_200.value,m.chart_color_green_200.value],previousCostData:{data:{fill:"none",stroke:m.global_disabled_color_200.value}},previousInfrastructureCostData:{data:{fill:"none",stroke:m.global_disabled_color_200.value,strokeDasharray:"3,3"}},currentColorScale:[m.chart_color_green_100.value,m.chart_color_green_200.value,m.chart_color_green_300.value,m.chart_color_green_400.value,m.chart_color_green_500.value],previousColorScale:[m.global_disabled_color_200.value,m.global_disabled_color_200.value],yAxis:{axisLabel:{padding:15},grid:{stroke:"none"},ticks:{stroke:"none"},tickLabels:{fontSize:0}},xAxis:{axisLabel:{padding:40},grid:{stroke:"none"},ticks:{stroke:"none"}}},K={chartContainer:{":not(foo) svg":{overflow:"visible"}}};class V extends u.a.Component{constructor(){super(...arguments),this.containerRef=u.a.createRef(),this.state={hiddenSeries:new Set,width:0},this.initDatum=(()=>{const{currentInfrastructureCostData:e,currentCostData:t,previousInfrastructureCostData:a,previousCostData:n}=this.props,s="chart.cost_legend_label";this.setState({series:[{childName:"previousCost",data:n,legendItem:{name:Object(U.a)(n,s,!0,!0,1),symbol:{type:"minus"}},style:B.previousCostData},{childName:"currentCost",data:t,legendItem:{name:Object(U.a)(t,s,!0,!1),symbol:{type:"minus"}},style:B.currentCostData},{childName:"previousInfrastructureCost",data:a,legendItem:{name:Object(U.a)(a,"chart.cost_infrastructure_legend_label",!0,!0,1),symbol:{type:"dash"}},style:B.previousInfrastructureCostData},{childName:"currentInfrastructureCost",data:e,legendItem:{name:Object(U.a)(e,"chart.cost_infrastructure_legend_label",!0,!1),symbol:{type:"dash"}},style:B.currentInfrastructureCostData}]})}),this.handleResize=(()=>{this.containerRef.current&&this.setState({width:this.containerRef.current.clientWidth})}),this.getChart=((e,t)=>{const{hiddenSeries:a}=this.state;return u.a.createElement(q.a,{data:a.has(t)?[{y:null}]:e.data,interpolation:"monotoneX",key:e.childName,name:e.childName,style:e.style})}),this.getLegend=(()=>{const{legendItemsPerRow:e}=this.props,{width:t}=this.state,a=e||(t>400?B.itemsPerRow:1);return u.a.createElement(F.a,{colorScale:B.legendColorScale,data:this.getLegendData(),height:25,gutter:10,itemsPerRow:a,name:"legend",responsive:!1,style:B.legend})}),this.getTooltipLabel=(({datum:e})=>{const{formatDatumValue:t,formatDatumOptions:a}=this.props,n=Object(U.e)(e,Object(U.d)(t),a,"date");return"currentCost"===e.childName||"previousCost"===e.childName?H.a.t("chart.cost_tooltip",{value:n}):"currentInfrastructureCost"===e.childName||"previousInfrastructureCost"===e.childName?H.a.t("chart.cost_infrastructure_tooltip",{value:n}):n}),this.handleLegendClick=(e=>{this.state.hiddenSeries.delete(e.index)||this.state.hiddenSeries.add(e.index),this.setState({hiddenSeries:new Set(this.state.hiddenSeries)})}),this.isDataAvailable=(()=>{const{series:e}=this.state,t=[];return e&&e.forEach((e,a)=>{(this.isSeriesHidden(a)||e.data&&0===e.data.length)&&t.push(a)}),t.length===(e?e.length:0)}),this.isSeriesHidden=(e=>{const{hiddenSeries:t}=this.state;return t.has(e)}),this.getChartNames=(()=>{const{series:e}=this.state,t=[];return e&&e.map((e,a)=>{t.push(e.childName)}),t}),this.getEvents=(()=>{return Object(L.a)({chartNames:this.getChartNames(),isHidden:this.isSeriesHidden,legendName:"legend",onLegendClick:this.handleLegendClick})}),this.getLegendData=(()=>{const{hiddenSeries:e,series:t}=this.state;if(t){return t.map((t,a)=>Object.assign({},t.legendItem,Object(L.b)(e.has(a))))}})}componentDidMount(){setTimeout(()=>{this.containerRef.current&&this.setState({width:this.containerRef.current.clientWidth}),window.addEventListener("resize",this.handleResize)}),this.initDatum()}componentDidUpdate(e){e.currentInfrastructureCostData===this.props.currentInfrastructureCostData&&e.currentCostData===this.props.currentCostData&&e.previousInfrastructureCostData===this.props.previousInfrastructureCostData&&e.previousCostData===this.props.previousCostData||this.initDatum()}componentWillUnmount(){window.removeEventListener("resize",this.handleResize)}getDomain(){const{currentInfrastructureCostData:e,currentCostData:t,previousInfrastructureCostData:a,previousCostData:n}=this.props,s={x:[1,31]},r=e?Object(U.c)(e):0,i=t?Object(U.c)(t):0,o=a?Object(U.c)(a):0,l=n?Object(U.c)(n):0,c=Math.max(r,i,o,l),u=c>0?Math.ceil(c+.1*c):0;return u>0&&(s.y=[0,u]),s}getEndDate(){const{currentInfrastructureCostData:e,currentCostData:t,previousInfrastructureCostData:a,previousCostData:n}=this.props,s=e?M()(Object(U.b)(e,!0,!0)[1]):0,r=t?M()(Object(U.b)(t,!0,!0)[1]):0,i=a?M()(Object(U.b)(a,!0,!0)[1]):0,o=n?M()(Object(U.b)(n,!0,!0)[1]):0;return s>0||r>0||i>0||o>0?Math.max(s,r,i,o):31}render(){const{adjustContainerHeight:e,height:t,containerHeight:a=t,padding:n,title:s}=this.props,{series:r,width:i}=this.state,o=this.isDataAvailable(),l=u.a.createElement(I.a,{allowTooltip:!o,constrainToVisibleArea:!0,labels:o?void 0:this.getTooltipLabel,voronoiDimension:"x"}),c=this.getDomain(),d=this.getEndDate(),m=Math.floor(d/2),h=e?i>400?a:a+75:a;return u.a.createElement("div",{ref:this.containerRef,style:Object.assign({},K.chartContainer,{height:h})},u.a.createElement("div",null,s),u.a.createElement(N.a,{containerComponent:l,domain:c,events:this.getEvents(),height:t,legendComponent:this.getLegend(),legendData:this.getLegendData(),legendPosition:"bottom-left",padding:n,theme:T.a,width:i},r&&r.map((e,t)=>this.getChart(e,t)),u.a.createElement(R.a,{style:B.xAxis,tickValues:[1,m,d]}),u.a.createElement(R.a,{dependentAxis:!0,style:B.yAxis})))}}const P={chart:{marginBottom:m.global_spacer_sm.value}},W=e=>u.a.createElement("div",{style:P.chart},u.a.createElement(V,Object.assign({},e))),$={legend:{labels:{fontFamily:m.global_FontFamily_sans_serif.value,fontSize:14},minWidth:175},legendColorScale:[m.global_disabled_color_200.value,m.chart_color_green_100.value,m.chart_color_green_200.value,m.chart_color_green_300.value,m.chart_color_green_400.value,m.chart_color_green_500.value],previousMonth:{data:{fill:"none",stroke:m.global_disabled_color_200.value}},currentMonth:{data:{fill:"none",stroke:"#A2DA9C"}},yAxis:{axisLabel:{padding:15},grid:{stroke:"none"},ticks:{stroke:"none"},tickLabels:{fontSize:0}},xAxis:{axisLabel:{padding:40},grid:{stroke:"none"},ticks:{stroke:"none"}}},Y={chartContainer:{":not(foo) svg":{overflow:"visible"}}};class X extends u.a.Component{constructor(){super(...arguments),this.containerRef=u.a.createRef(),this.state={hiddenSeries:new Set,width:0},this.initDatum=(()=>{const{currentData:e,previousData:t,showUsageLegendLabel:a=!1}=this.props,n=a?"chart.usage_legend_label":"chart.cost_legend_label";this.setState({series:[{childName:"previousCost",data:t,legendItem:{name:Object(U.a)(t,n,!0,!0,1),symbol:{type:"minus"}},style:$.previousMonth},{childName:"currentCost",data:e,legendItem:{name:Object(U.a)(e,n,!0,!1),symbol:{type:"minus"}},style:$.currentMonth}]})}),this.handleResize=(()=>{this.containerRef.current&&this.setState({width:this.containerRef.current.clientWidth})}),this.getChart=((e,t)=>{const{hiddenSeries:a}=this.state;return u.a.createElement(q.a,{data:a.has(t)?[{y:null}]:e.data,interpolation:"monotoneX",key:e.childName,name:e.childName,style:e.style})}),this.getLegend=(()=>{const{width:e}=this.state;return u.a.createElement(F.a,{colorScale:$.legendColorScale,data:this.getLegendData(),gutter:10,height:25,name:"legend",orientation:e>150?"horizontal":"vertical",style:$.legend})}),this.getTooltipLabel=(({datum:e})=>{const{formatDatumValue:t,formatDatumOptions:a,units:n}=this.props;return Object(U.e)(e,Object(U.d)(t),a,"date",n)}),this.handleLegendClick=(e=>{this.state.hiddenSeries.delete(e.index)||this.state.hiddenSeries.add(e.index),this.setState({hiddenSeries:new Set(this.state.hiddenSeries)})}),this.isDataAvailable=(()=>{const{series:e}=this.state,t=[];return e&&e.forEach((e,a)=>{(this.isSeriesHidden(a)||e.data&&0===e.data.length)&&t.push(a)}),t.length===(e?e.length:0)}),this.isSeriesHidden=(e=>{const{hiddenSeries:t}=this.state;return t.has(e)}),this.getChartNames=(()=>{const{series:e}=this.state,t=[];return e&&e.map((e,a)=>{t.push(e.childName)}),t}),this.getEvents=(()=>{return Object(L.a)({chartNames:this.getChartNames(),isHidden:this.isSeriesHidden,legendName:"legend",onLegendClick:this.handleLegendClick})}),this.getLegendData=(()=>{const{hiddenSeries:e,series:t}=this.state;if(t){return t.map((t,a)=>Object.assign({},t.legendItem,Object(L.b)(e.has(a))))}})}componentDidMount(){setTimeout(()=>{this.containerRef.current&&this.setState({width:this.containerRef.current.clientWidth}),window.addEventListener("resize",this.handleResize)}),this.initDatum()}componentDidUpdate(e){e.currentData===this.props.currentData&&e.previousData===this.props.previousData||this.initDatum()}componentWillUnmount(){window.removeEventListener("resize",this.handleResize)}getDomain(){const{currentData:e,previousData:t}=this.props,a={x:[1,31]},n=e?Object(U.c)(e):0,s=t?Object(U.c)(t):0,r=Math.max(n,s),i=r>0?Math.ceil(r+.1*r):0;return i>0&&(a.y=[0,i]),a}getEndDate(){const{currentData:e,previousData:t}=this.props,a=t?M()(Object(U.b)(t,!0,!0)[1]):0,n=e?M()(Object(U.b)(e,!0,!0)[1]):0;return n>0||a>0?Math.max(n,a):31}render(){const{adjustContainerHeight:e,height:t,containerHeight:a=t,padding:n,title:s}=this.props,{series:r,width:i}=this.state,o=this.isDataAvailable(),l=u.a.createElement(I.a,{allowTooltip:!o,constrainToVisibleArea:!0,labels:o?void 0:this.getTooltipLabel,voronoiDimension:"x"}),c=this.getDomain(),d=this.getEndDate(),m=Math.floor(d/2),h=e?i>400?a:a+75:a;return u.a.createElement("div",{ref:this.containerRef,style:Object.assign({},Y.chartContainer,{height:h})},u.a.createElement("div",null,s),u.a.createElement(N.a,{containerComponent:l,domain:c,events:this.getEvents(),height:t,legendComponent:this.getLegend(),legendData:this.getLegendData(),legendPosition:"bottom-left",padding:n,theme:T.a,width:i},r&&r.map((e,t)=>this.getChart(e,t)),u.a.createElement(R.a,{style:$.xAxis,tickValues:[1,m,d]}),u.a.createElement(R.a,{dependentAxis:!0,style:$.yAxis})))}}const G=e=>u.a.createElement("div",{style:P.chart},u.a.createElement(X,Object.assign({},e))),J={currentRequestData:{data:{fill:"none",stroke:"#88D080",strokeDasharray:"3,3"}},currentUsageData:{data:{fill:"none",stroke:"#A2DA9C"}},itemsPerRow:2,legend:{labels:{fontFamily:m.global_FontFamily_sans_serif.value,fontSize:14},minWidth:380},legendColorScale:[m.global_disabled_color_200.value,m.chart_color_green_100.value,m.global_disabled_color_200.value,m.chart_color_green_200.value],previousRequestData:{data:{fill:"none",stroke:m.global_disabled_color_200.value,strokeDasharray:"3,3"}},previousUsageData:{data:{fill:"none",stroke:m.global_disabled_color_200.value}},currentColorScale:[m.chart_color_green_100.value,m.chart_color_green_200.value,m.chart_color_green_300.value,m.chart_color_green_400.value,m.chart_color_green_500.value],previousColorScale:[m.global_disabled_color_200.value,m.global_disabled_color_200.value],yAxis:{axisLabel:{padding:15},grid:{stroke:"none"},ticks:{stroke:"none"},tickLabels:{fontSize:0}},xAxis:{axisLabel:{padding:40},grid:{stroke:"none"},ticks:{stroke:"none"}}},Q={chartContainer:{":not(foo) svg":{overflow:"visible"},marginTop:m.global_spacer_lg.value}};class Z extends u.a.Component{constructor(){super(...arguments),this.containerRef=u.a.createRef(),this.state={hiddenSeries:new Set,width:0},this.initDatum=(()=>{const{currentRequestData:e,currentUsageData:t,previousRequestData:a,previousUsageData:n}=this.props;this.setState({series:[{childName:"previousUsage",data:n,legendItem:{name:Object(U.f)(n,"chart.usage_legend_label",!0,!0,1),symbol:{type:"minus"}},style:J.previousUsageData},{childName:"currentUsage",data:t,legendItem:{name:Object(U.f)(t,"chart.usage_legend_label",!0,!1),symbol:{type:"minus"}},style:J.currentUsageData},{childName:"previousRequest",data:a,legendItem:{name:Object(U.f)(a,"chart.requests_legend_label",!0,!0,1),symbol:{type:"dash"}},style:J.previousRequestData},{childName:"currentRequest",data:e,legendItem:{name:Object(U.f)(e,"chart.requests_legend_label",!0,!1),symbol:{type:"dash"}},style:J.currentRequestData}]})}),this.handleResize=(()=>{this.containerRef.current&&this.setState({width:this.containerRef.current.clientWidth})}),this.getChart=((e,t)=>{const{hiddenSeries:a}=this.state;return u.a.createElement(q.a,{data:a.has(t)?[{y:null}]:e.data,interpolation:"monotoneX",key:e.childName,name:e.childName,style:e.style})}),this.getLegend=(()=>{const{legendItemsPerRow:e}=this.props,{width:t}=this.state,a=e||(t>300?J.itemsPerRow:1);return u.a.createElement(F.a,{colorScale:J.legendColorScale,data:this.getLegendData(),height:25,gutter:10,itemsPerRow:a,name:"legend",style:J.legend})}),this.getTooltipLabel=(({datum:e})=>{const{formatDatumValue:t,formatDatumOptions:a}=this.props,n=Object(U.e)(e,Object(U.d)(t),a,"date");return"currentRequest"===e.childName||"previousRequest"===e.childName?H.a.t("chart.requests_tooltip",{value:n}):"currentUsage"===e.childName||"previousUsage"===e.childName?H.a.t("chart.usage_tooltip",{value:n}):n}),this.handleLegendClick=(e=>{this.state.hiddenSeries.delete(e.index)||this.state.hiddenSeries.add(e.index),this.setState({hiddenSeries:new Set(this.state.hiddenSeries)})}),this.isDataAvailable=(()=>{const{series:e}=this.state,t=[];return e&&e.forEach((e,a)=>{(this.isSeriesHidden(a)||e.data&&0===e.data.length)&&t.push(a)}),t.length===(e?e.length:0)}),this.isSeriesHidden=(e=>{const{hiddenSeries:t}=this.state;return t.has(e)}),this.getChartNames=(()=>{const{series:e}=this.state,t=[];return e&&e.map((e,a)=>{t.push(e.childName)}),t}),this.getEvents=(()=>{return Object(L.a)({chartNames:this.getChartNames(),isHidden:this.isSeriesHidden,legendName:"legend",onLegendClick:this.handleLegendClick})}),this.getLegendData=(()=>{const{hiddenSeries:e,series:t}=this.state;if(t){return t.map((t,a)=>Object.assign({},t.legendItem,Object(L.b)(e.has(a))))}})}componentDidMount(){setTimeout(()=>{this.containerRef.current&&this.setState({width:this.containerRef.current.clientWidth}),window.addEventListener("resize",this.handleResize)}),this.initDatum()}componentDidUpdate(e){e.currentRequestData===this.props.currentRequestData&&e.currentUsageData===this.props.currentUsageData&&e.previousRequestData===this.props.previousRequestData&&e.previousUsageData===this.props.previousUsageData||this.initDatum()}componentWillUnmount(){window.removeEventListener("resize",this.handleResize)}getDomain(){const{currentRequestData:e,currentUsageData:t,previousRequestData:a,previousUsageData:n}=this.props,s={x:[1,31]},r=e?Object(U.c)(e):0,i=t?Object(U.c)(t):0,o=a?Object(U.c)(a):0,l=n?Object(U.c)(n):0,c=Math.max(r,i,o,l),u=c>0?Math.ceil(c+.1*c):0;return u>0&&(s.y=[0,u]),s}getEndDate(){const{currentRequestData:e,currentUsageData:t,previousRequestData:a,previousUsageData:n}=this.props,s=e?M()(Object(U.b)(e,!0,!0)[1]):0,r=t?M()(Object(U.b)(t,!0,!0)[1]):0,i=a?M()(Object(U.b)(a,!0,!0)[1]):0,o=n?M()(Object(U.b)(n,!0,!0)[1]):0;return s>0||r>0||i>0||o>0?Math.max(s,r,i,o):31}render(){const{adjustContainerHeight:e,height:t,containerHeight:a=t,padding:n,title:s}=this.props,{series:r,width:i}=this.state,o=this.isDataAvailable(),l=u.a.createElement(I.a,{allowTooltip:!o,constrainToVisibleArea:!0,labels:o?void 0:this.getTooltipLabel,voronoiDimension:"x"}),c=this.getDomain(),d=this.getEndDate(),m=Math.floor(d/2),h=e?i>400?a:a+75:a;return u.a.createElement("div",{ref:this.containerRef,style:Object.assign({},Q.chartContainer,{height:h})},u.a.createElement("div",null,s),u.a.createElement(N.a,{containerComponent:l,domain:c,events:this.getEvents(),height:t,legendComponent:this.getLegend(),legendData:this.getLegendData(),legendPosition:"bottom-left",padding:n,theme:T.a,width:i},r&&r.map((e,t)=>this.getChart(e,t)),u.a.createElement(R.a,{style:J.xAxis,tickValues:[1,m,d]}),u.a.createElement(R.a,{dependentAxis:!0,style:J.yAxis})))}}const ee=e=>u.a.createElement("div",{style:P.chart},u.a.createElement(Z,Object.assign({},e)));a.d(t,"a",function(){return g}),a.d(t,"b",function(){return _}),a.d(t,"d",function(){return E}),a.d(t,"e",function(){return O}),a.d(t,"f",function(){return z}),a.d(t,"c",function(){return W}),a.d(t,"g",function(){return G}),a.d(t,"h",function(){return ee})},637:function(e,t,a){"use strict";function n(e,t){if("string"==typeof e)return e;return e[t.key]}function s(e,t){const{direction:a=0}=t||{};return[...e].sort((e,s)=>{const r=n(0===a?e:s,t),i=n(0===a?s:e,t);return r>i?-1:r<i?1:0})}a.d(t,"a",function(){return s})},644:function(e,t,a){"use strict";var n=a(999),s=a(1034),r=a(998),i=a(1e3),o=a(1050),l=a(1),c=a.n(l),u=a(210),d=a(135),m=a(613);const h={container:{display:"flex",justifyContent:"center",height:"100vh",marginTop:"150px"},viewSources:{marginTop:a(143).global_spacer_lg.value}};a.d(t,"a",function(){return g});const g=Object(u.d)()(Object(d.connect)()(class extends c.a.Component{constructor(){super(...arguments),this.getViewSources=(()=>{const{t:e}=this.props,t=window.location.pathname.split("/");t.shift();let a="";return"beta"===t[0]&&(a="/beta"),c.a.createElement("a",Object.assign({href:`${a}/settings/sources`},Object(m.a)(m.b.providers.view_all_link)),e("providers.view_sources"))})}render(){const{t:e}=this.props;return c.a.createElement("div",{style:h.container},c.a.createElement(i.a,null,c.a.createElement(r.a,{icon:o.a}),c.a.createElement(s.a,{size:"lg"},e("providers.empty_state_title")),c.a.createElement(n.a,null,e("providers.empty_state_desc")),c.a.createElement("div",{style:h.viewSources},this.getViewSources())))}}))}}]);
//# sourceMappingURL=dcf4f7b6385fe4e63a25.bundle.js.map