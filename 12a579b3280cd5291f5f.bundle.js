(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{194:function(e,t,a){"use strict";a.d(t,"c",function(){return r}),a.d(t,"b",function(){return n}),a.d(t,"a",function(){return i});const r=e=>e?e.split("-")[0].toLowerCase():"",n=(e,t,a={})=>{const n=r(t),l=e||0;switch(n){case"usd":return i(l,n,a);case"gb":return o(l,n,a);default:return s(l,n,a)}},s=(e,t,{fractionDigits:a}={})=>e.toFixed(a),i=(e,t,{fractionDigits:a=2}={})=>{let r=e;return e||(r=0),r.toLocaleString("en",{style:"currency",currency:"USD",minimumFractionDigits:a,maximumFractionDigits:a})},o=(e,t,{fractionDigits:a=2}={})=>e.toFixed(a)},195:function(e,t,a){"use strict";a.d(t,"d",function(){return h}),a.d(t,"e",function(){return g}),a.d(t,"a",function(){return f}),a.d(t,"b",function(){return y}),a.d(t,"c",function(){return E});var r=a(348),n=a.n(r),s=a(275),i=a.n(s),o=a(274),l=a.n(o),c=a(273),u=a.n(c),d=a(35),p=a(194),m=a(234),b=a(220);function h(e,t=1,a="date"){if(!e)return[];const r={report:e,idKey:a,sortKey:"id",sortDirection:1},n=Object(m.a)(r);return 1===t?n.map(e=>v(e.total,e,a)):2===t?n.map(e=>v(e.total,e,a)):n.reduce((e,t)=>{const r=e.length?e[e.length-1].y:0;return[...e,v(r+t.total,t,a)]},[])}function g(e,t=1,a="date",r="charge"){if(!e)return[];const n={report:e,idKey:a,sortKey:"id",sortDirection:1},s=Object(b.a)(n);return 1===t?s.map(e=>v(e[r],e,a)):2===t?s.map(e=>v(e[r],e,a)):s.reduce((e,t)=>{const n=e.length?e[e.length-1].y:0;return[...e,v(n+t[r],t,a)]},[])}function v(e,t,a="date"){var r;return{x:"date"===a?l()(t.id):t.label,y:(r=e,Number(r)===r&&r%1!=0?parseFloat(e.toFixed(2)):function(e){return Number(e)===e&&e%1==0}(e)?e:0),key:t.id,name:t.id,units:t.units}}function f(e,t=!0,a=!1){const[r,s]=function(e){if(!e||!e.length){const e=new Date;return[u()(e),e]}return[new Date(e[0].key+"T00:00:00"),new Date(e[e.length-1].key+"T00:00:00")]}(e);if(t&&r.setDate&&r.setDate(1),a&&r.setDate){const e=n()(r).getDate();s.setDate(e)}const o=i()(r,"MMM"),c=l()(r),d=l()(s);return`${o} ${l()(r)}${c!==d?` - ${d}`:""}`}function y(e){return function(t,a=null,r={}){const n=Object(p.c)(a);switch(n){case"hrs":case"gb":return d.a.t(`units.${n}`,{value:`${e(t,a,r)}`});default:return`${e(t,a,r)}`}}}function E(e,t,a,r="date"){if(!e.key)return"";if("date"===r){return`${i()(e.key,"MMM D YYYY")}: ${t(e.y,e.units,a)}`}return e.key.toString()}},215:function(e,t,a){"use strict";function r(e,t){if("string"==typeof e)return e;return e[t.key]}function n(e,t){const{direction:a=0}=t||{};return[...e].sort((e,n)=>{const s=r(0===a?e:n,t),i=r(0===a?n:e,t);return s>i?-1:s<i?1:0})}a.d(t,"a",function(){return n})},219:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return n});const r=e=>({"data-testid":e}),n={details:{historical_data_btn:"historical-data-btn",tag_btn:"tag-btn"},export:{cancel_btn:"cancel-btn",submit_btn:"submit-btn"},login:{alert:"alert",form:"login-form",username_input:"username-input",password_input:"password-input",submit:"submit"},masthead:{masthead:"masthead",username:"username",sidebarToggle:"sidebar-toggle",logout:"logout"},providers:{add_btn:"add-btn",bucket_input:"bucket-input",cancel_btn:"cancel-btn",empty_state_add_btn:"empty_state_add-btn",name_input:"provider-name-input",resource_name_input:"provider-resource-name-input",cluster_id_input:"provider-cluster-id-input",submit_btn:"submit-btn",type_input:"provider-type-input"},sidebar:{nav:"vertical-nav",link:"vertical-nav-link",backdrop:"sidebar-backdrop"}}},220:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"c",function(){return i}),a.d(t,"b",function(){return o});var r=a(215);const n=["apps","clusters","nodes","projects"];function s({report:e,idKey:t,labelKey:a=t,sortKey:n="charge",sortDirection:s=0}){return Object(r.a)(i({report:e,idKey:t,labelKey:a,sortDirection:s,sortKey:n}),{key:n,direction:s})}function i({report:e,idKey:t,labelKey:a=t}){if(!e)return[];const r={},s=e=>{e.values&&e.values.forEach(e=>{const n=e.capacity,s=e.charge,i=e[t];let o=e[a];"cluster"===a&&e.cluster_alias&&(o=e.cluster_alias);const l=e.limit,c=e.request,u=e.usage;r[i]?r[i]=Object.assign({},r[i],{capacity:r[i].capacity+n,charge:r[i].charge+s,limit:r[i].limit+l,request:r[i].request+c,usage:r[i].usage+u}):r[i]={app:e.app,capacity:n,charge:s,deltaPercent:e.delta_percent,deltaValue:e.delta_value,id:i,label:o,limit:l,request:c,units:e.units||u?"GB":"USD",usage:u}}),n.forEach(t=>{if(e[t])return e[t].forEach(s)})};return e&&e.data&&e.data.forEach(s),Object.values(r)}function o(e={}){return e.project?"project":e.cluster?"cluster":e.node?"node":"date"}},234:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"c",function(){return i}),a.d(t,"b",function(){return o});var r=a(215);const n=["services","accounts","instance_types","regions"];function s({report:e,idKey:t,labelKey:a=t,sortKey:n="total",sortDirection:s=0}){return Object(r.a)(i({report:e,idKey:t,labelKey:a,sortDirection:s,sortKey:n}),{key:n,direction:s})}function i({report:e,idKey:t,labelKey:a=t}){if(!e)return[];const r={},s=e=>{e.values&&e.values.forEach(e=>{const n=e.total,s=e[t];let i=e[a];"account"===a&&e.account_alias&&(i=e.account_alias),r[s]?r[s]=Object.assign({},r[s],{total:r[s].total+n}):r[s]={deltaPercent:e.delta_percent,deltaValue:e.delta_value,id:s,total:n,label:i,units:e.units}}),n.forEach(t=>{if(e[t])return e[t].forEach(s)})};return e&&e.data&&e.data.forEach(s),Object.values(r)}function o(e={}){return e.account?"account":e.instance_type?"instance_type":e.region?"region":e.service?"service":"date"}},315:function(e,t,a){"use strict";var r=a(83),n=a(10),s=a(644),i=a(81),o=a(85),l=a(656),c=a(195),u=a(0),d=a.n(u),p=a(68),m=a(176);const b={axis:{axisLabel:{padding:15},grid:{stroke:"none"},ticks:{stroke:"none"},tickLabels:{fontSize:0}},colorScale:[m.V.value,m.L.value],previousMonth:{data:{fill:m.W.value,stroke:m.V.value}},currentMonth:{data:{fill:m.L.value,stroke:m.M.value}}},h=l.a.create({reportSummaryTrend:{":not(foo) svg":{overflow:"visible"}}});class g extends d.a.Component{constructor(){super(...arguments),this.containerRef=d.a.createRef(),this.state={width:0},this.getTooltipLabel=(e=>{const{formatDatumValue:t,formatDatumOptions:a}=this.props;return Object(c.c)(e,Object(c.b)(t),a,"date")}),this.handleResize=(()=>{this.setState({width:this.containerRef.current.clientWidth})})}shouldComponentUpdate(e){return!(!e.currentData||!e.previousData)}componentDidMount(){const e=this.containerRef.current;e&&this.setState({width:e.clientWidth}),window.addEventListener("resize",this.handleResize)}componentWillUnmount(){window.removeEventListener("resize",this.handleResize)}render(){const{title:e,currentData:t,previousData:a,height:u}=this.props,m=[];a&&a.length&&m.push({name:Object(c.a)(a,!0,!0)}),t&&t.length&&m.push({name:Object(c.a)(t)});const g=d.a.createElement(o.a,{labels:this.getTooltipLabel});return d.a.createElement("div",{className:Object(l.b)(h.reportSummaryTrend),ref:this.containerRef},d.a.createElement("div",null,d.a.createElement(i.a,{containerComponent:g,height:u,width:this.state.width},Boolean(a&&a.length)&&d.a.createElement(r.a,{style:b.previousMonth,data:a}),Boolean(t&&t.length)&&d.a.createElement(r.a,{style:b.currentMonth,data:t}),d.a.createElement(p.a,{style:b.axis}),d.a.createElement(p.a,{dependentAxis:!0,style:b.axis}))),Boolean(m&&m.length)&&d.a.createElement(s.a,{title:e,theme:n.a.light.blue,colorScale:b.colorScale,data:m,height:50,width:this.state.width}))}}a.d(t,"a",function(){return g})},330:function(e,t,a){"use strict";var r=a(0),n=a.n(r);const s=({data:e})=>{const t="function"==typeof e.content?e.content(e):e.content;return n.a.createElement("div",{role:"tabpanel"},t)};var i=a(656),o=a(176);const l=i.a.create({tabItem:{position:"relative",flexGrow:1,textAlign:"center",fontSize:o.r.value,padding:o.S.value,cursor:"pointer",marginBottom:o.R.value,marginTop:o.R.value},tabItemShrink:{flexGrow:"0",flexShrink:"2",marginRight:"20px"},selected:{backgroundImage:`linear-gradient(to top, ${o.L.value} 2px, transparent 2px)`}});class c extends n.a.Component{constructor(){super(...arguments),this.handleClick=(()=>{const{onSelect:e,data:t}=this.props;e(t.id)})}render(){const{data:e,isSelected:t,isShrink:a}=this.props;return n.a.createElement("div",{role:"tab",onClick:this.handleClick,"aria-selected":t,tabIndex:t?0:-1,className:Object(i.b)(l.tabItem,t&&l.selected,a&&l.tabItemShrink)},e.label)}}const u=i.a.create({tabNavigation:{display:"flex",alignItems:"flex-end",marginBottom:o.R.value}});class d extends n.a.Component{constructor(){super(...arguments),this.handleKeyDown=(e=>{if(!["ArrowRight","ArrowLeft"].includes(e.key))return;const{selected:t,tabs:a,onChange:r}=this.props,n="ArrowRight"===e.key?1:-1,s=a.findIndex(e=>e.id===t.id)+n;s<0||s>a.length-1||r(a[s].id)})}render(){const{isShrink:e,tabs:t,selected:a,onChange:r}=this.props;return n.a.createElement("div",{role:"tablist",className:Object(i.b)(u.tabNavigation),onKeyDown:this.handleKeyDown},t.map(t=>n.a.createElement(c,{isShrink:e,onSelect:r,key:t.id,data:t,isSelected:t.id===a.id})))}}const p=({isShrink:e,selected:t,tabs:a,onChange:r})=>{if(0===a.length)return n.a.createElement("div",null,"No data was found");const i=a.find(e=>e.id===t);return n.a.createElement("div",null,n.a.createElement(d,{isShrink:e,tabs:a,selected:i||a[0],onChange:r}),n.a.createElement(s,{data:i||a[0]}))};a.d(t,"a",function(){return p})},331:function(e,t,a){"use strict";var r=a(107),n=a(108),s=a(109),i=a(640),o=a(110),l=a(656),c=a(0),u=a.n(c),d=a(26),p=a(176);const m=l.a.create({reportSummary:{height:"100%"},subtitle:{fontSize:p.t.value,color:p.l.var,marginBottom:"0"}}),b=Object(d.c)()(({title:e,subTitle:t,detailsLink:a,children:c,status:d,t:p})=>u.a.createElement(o.a,{className:Object(l.b)(m.reportSummary)},u.a.createElement(r.a,null,u.a.createElement(i.b,{size:"lg"},e),Boolean(t)&&u.a.createElement("p",{className:Object(l.b)(m.subtitle)},t)),u.a.createElement(s.a,null,1===d?`${p("loading")}...`:c),Boolean(a)&&u.a.createElement(n.a,null,a))),h=l.a.create({reportSummaryDetails:{display:"flex",justifyContent:"space-between",marginBottom:p.R.value},value:{display:"flex",color:p.k.var,fontSize:p.p.value,marginRight:p.S.value},text:{display:"flex",alignItems:"flex-end",marginLeft:p.S.value,paddingBottom:14,lineHeight:p.x.value,fontSize:p.t.value}}),g=({label:e,formatValue:t,formatOptions:a,report:r,reportType:n="charge",requestLabel:s})=>{let i="----",o="----";if(r&&r.total)if("charge"===n){const e=r.total.units?r.total.units:"USD";i=t(r.total.charge,e,a)}else{const e=r.total.units?r.total.units:"GB";i=t(r.total.usage,e,a),o=t(r.total.request,e,a)}return u.a.createElement("div",{className:Object(l.b)(h.reportSummaryDetails)},u.a.createElement("div",{className:Object(l.b)(h.value)},i,u.a.createElement("div",{className:Object(l.b)(h.text)},u.a.createElement("div",null,e))),Boolean("charge"!==n)&&u.a.createElement("div",{className:Object(l.b)(h.value)},o,u.a.createElement("div",{className:Object(l.b)(h.text)},s)))};var v=a(79);const f=l.a.create({reportSummaryItem:{":not(:last-child)":{marginBottom:p.R.value}},test:{":not(foo) svg":{overflow:"visible"}}}),y=({label:e,value:t,totalValue:a,formatValue:r,units:n,formatOptions:s})=>{const i=Number((a?t/a*100:0).toFixed(2)),o=`${r(t,n,s)} (${i}%)`;return u.a.createElement("li",{className:Object(l.b)(f.reportSummaryItem)},u.a.createElement(v.b,{label:o,value:i,title:e,size:v.a.sm}))};y.defaultProps={formatValue:e=>e};var E=a(220);class O extends u.a.Component{shouldComponentUpdate(e){return e.report!==this.props.report}getItems(){const{report:e,idKey:t,labelKey:a}=this.props,r=Object(E.a)({report:e,idKey:t,labelKey:a}),n=r.findIndex(e=>"Other"===e.id);return-1!==n?[...r.slice(0,n),...r.slice(n+1),r[n]]:r}render(){const{report:e,children:t}=this.props;if(!e)return null;const a=this.getItems();return u.a.createElement("ul",null,t({items:a}))}}var D=a(315);const j=e=>u.a.createElement("div",{style:{marginBottom:16}},u.a.createElement(D.a,Object.assign({height:75},e)));var w=a(83),T=a(10),S=a(644),k=a(81),x=a(85),R=a(195),_=a(68);const L={axis:{axisLabel:{padding:15},grid:{stroke:"none"},ticks:{stroke:"none"},tickLabels:{fontSize:0}},currentColorScale:[p.V.value,p.L.value],currentRequestData:{data:{fill:"none",stroke:p.X.value}},currentUsageData:{data:{fill:"none",stroke:p.L.value}},previousColorScale:[p.Y.value,p.X.value],previousRequestData:{data:{fill:"none",stroke:p.Y.value}},previousUsageData:{data:{fill:"none",stroke:p.V.value}}},K=l.a.create({reportSummaryTrend:{":not(foo) svg":{overflow:"visible"}}});class C extends u.a.Component{constructor(){super(...arguments),this.containerRef=u.a.createRef(),this.state={width:0},this.getTooltipLabel=(e=>{const{formatDatumValue:t,formatDatumOptions:a}=this.props;return Object(R.c)(e,Object(R.b)(t),a,"date")}),this.handleResize=(()=>{this.setState({width:this.containerRef.current.clientWidth})})}shouldComponentUpdate(e){return!!(e.currentUsageData&&e.previousUsageData&&e.currentRequestData&&e.previousRequestData)}componentDidMount(){const e=this.containerRef.current;e&&this.setState({width:e.clientWidth}),window.addEventListener("resize",this.handleResize)}componentWillUnmount(){window.removeEventListener("resize",this.handleResize)}render(){const{currentRequestData:e,currentRequestLabel:t,currentUsageData:a,currentUsageLabel:r,height:n,previousRequestData:s,previousRequestLabel:i,previousUsageData:o,previousUsageLabel:c,title:d}=this.props,p=[],m=[];o&&o.length&&p.push({name:c}),s&&s.length&&m.push({name:i}),a&&a.length&&p.push({name:r}),e&&e.length&&m.push({name:t});const b=u.a.createElement(x.a,{labels:this.getTooltipLabel});return u.a.createElement("div",{className:Object(l.b)(K.reportSummaryTrend),ref:this.containerRef},u.a.createElement("div",null,u.a.createElement(k.a,{containerComponent:b,height:n,width:this.state.width},Boolean(a&&a.length)&&u.a.createElement(w.a,{style:L.currentUsageData,data:a}),Boolean(e&&e.length)&&u.a.createElement(w.a,{style:L.currentRequestData,data:e}),Boolean(o&&o.length)&&u.a.createElement(w.a,{style:L.previousUsageData,data:o}),Boolean(s&&s.length)&&u.a.createElement(w.a,{style:L.previousRequestData,data:s}),u.a.createElement(_.a,{style:L.axis}),u.a.createElement(_.a,{dependentAxis:!0,style:L.axis}))),Boolean(p&&p.length)&&u.a.createElement(S.a,{title:d,theme:T.a.light.blue,colorScale:L.currentColorScale,data:p,gutter:55,height:25,width:this.state.width}),Boolean(m&&m.length)&&u.a.createElement(S.a,{title:d,theme:T.a.light.blue,colorScale:L.previousColorScale,data:m,height:25,width:this.state.width,style:{data:{strokeDasharray:"5,5"}}}))}}const B=e=>u.a.createElement("div",{style:{marginBottom:16}},u.a.createElement(C,Object.assign({height:75},e)));a.d(t,"a",function(){return b}),a.d(t,"b",function(){return g}),a.d(t,"c",function(){return y}),a.d(t,"d",function(){return O}),a.d(t,"e",function(){return j}),a.d(t,"f",function(){return B})},458:function(e,t,a){"use strict";var r=a(641),n=a(0),s=a.n(n),i=a(660);const o=r.c,l=e=>s.a.createElement(o,Object.assign({component:i.a,variant:"link"},e));a.d(t,"a",function(){return l})},494:function(e,t,a){"use strict";var r=a(76),n=a(106),s=a(0),i=a.n(s),o=a(26),l=a(23),c=a(28),u=a(27),d=a(21),p=a(31),m=a(195),b=a(458),h=a(331),g=a(330),v=a(275),f=a.n(v),y=a(274),E=a.n(y),O=a(459),D=a.n(O),j=a(273),w=a.n(j),T=a(9),S=a(194);const k=e=>{switch(e){case"clusters":return"cluster";case"nodes":return"node";case"projects":return"project"}};const x=Object(c.a)((e,{widgetId:t})=>{const a=u.c.selectWidget(e,t),r=u.c.selectWidgetQueries(e,t);return Object.assign({},a,{currentQuery:r.current,previousQuery:r.previous,tabsQuery:r.tabs,current:T.c.selectReport(e,a.reportType,r.current),previous:T.c.selectReport(e,a.reportType,r.previous),tabs:T.c.selectReport(e,a.reportType,r.tabs),status:T.c.selectReportFetchStatus(e,a.reportType,r.current)})}),R={fetchReports:u.a.fetchWidgetReports,updateTab:u.a.changeWidgetTab},_=Object(o.c)()(Object(l.b)(x,R)(class extends i.a.Component{constructor(){super(...arguments),this.getTabTitle=(e=>{const{t:t}=this.props;return t("group_by.top",{groupBy:k(e)||""})}),this.getDetailsLinkTitle=(e=>{const{t:t}=this.props;return t("group_by.all",{groupBy:k(e)||""})}),this.buildDetailsLink=(()=>{const{currentQuery:e}=this.props,t=Object(p.b)(e).group_by;return`/ocp?${Object(p.a)({group_by:t,order_by:{charge:"desc"}})}`}),this.renderTab=(e=>{const{reportType:t,tabs:a,topItems:r}=this.props,n=e.id;return i.a.createElement(h.d,{idKey:k(n),report:a},({items:e})=>e.map(e=>i.a.createElement(h.c,{key:e.id,formatOptions:r.formatOptions,formatValue:S.b,label:e.label.toString(),totalValue:"charge"===t?a.total.charge:a.total.usage,units:e.units,value:"charge"===t?e.charge:e.usage})))}),this.handleTabChange=(e=>{this.props.updateTab(this.props.id,e)})}componentDidMount(){const{fetchReports:e,widgetId:t}=this.props;e(t)}render(){const{t:e,titleKey:t,trend:a,details:r,current:n,previous:s,availableTabs:o,currentTab:l,reportType:c,status:u}=this.props,d=new Date,p=D()(d),v=f()(d,"Do"),y=f()(w()(d),"Do"),O=e(t,{endDate:v,month:p,startDate:y}),j=e("ocp_dashboard.widget_subtitle",{endDate:v,month:p,startDate:y,count:E()(d)}),T=e(r.labelKey),k=e(r.requestLabelKey),x="charge"===c&&i.a.createElement(b.a,{to:this.buildDetailsLink()},this.getDetailsLinkTitle(l)),R="charge"===c?"charge":"usage",_=Object(m.e)(n,a.type,"date",R),L=Object(m.e)(s,a.type,"date",R),K="charge"!==c?Object(m.e)(n,a.type,"date","request"):void 0,C="charge"!==c?Object(m.e)(s,a.type,"date","request"):void 0,B=e(a.currentRequestLabelKey,{date:Object(m.a)(K)}),N=e(a.currentUsageLabelKey,{date:Object(m.a)(_)}),I=e(a.previousRequestLabelKey,{date:Object(m.a)(C,!0,!0)}),q=e(a.previousUsageLabel,{date:Object(m.a)(L,!0,!0)});return i.a.createElement(h.a,{title:O,subTitle:j,detailsLink:x,status:u},i.a.createElement(h.b,{report:n,reportType:c,formatValue:S.b,label:T,formatOptions:r.formatOptions,requestLabel:k}),Boolean("charge"===c)?i.a.createElement(h.e,{title:e(a.titleKey),currentData:_,formatDatumValue:S.b,formatDatumOptions:a.formatOptions,previousData:L}):i.a.createElement(h.f,{currentRequestData:K,currentRequestLabel:B,currentUsageData:_,currentUsageLabel:N,formatDatumValue:S.b,formatDatumOptions:a.formatOptions,previousRequestData:C,previousRequestLabel:I,previousUsageData:L,previousUsageLabel:q}),i.a.createElement(g.a,{tabs:o.map(e=>({id:e,label:this.getTabTitle(e),content:this.renderTab})),selected:l,onChange:this.handleTabChange}))}})),L=Object(c.a)(e=>({widgets:u.c.selectCurrentWidgets(e)})),K=Object(o.c)()(Object(l.b)(L,{openProvidersModal:d.a.openProvidersModal})(({t:e,openProvidersModal:t,widgets:a})=>i.a.createElement("div",null,i.a.createElement(r.a,{gutter:"md"},a.map(e=>i.a.createElement(n.a,{xl:4,lg:6,key:e},i.a.createElement(_,{widgetId:e})))))));t.a=K},495:function(e,t,a){"use strict";var r=a(641),n=a(106),s=a(76),i=a(640),o=a(330),l=a(0),c=a.n(l),u=a(26),d=a(23),p=a(28),m=a(19),b=a(21),h=a(219),g=a(502),v=a(501),f=a(110),y=a(659),E=a(656),O=a(176);const D=E.a.create({card:{display:"flex",alignItems:"center",justifyContent:"center",height:"75vh",marginTop:"30px"},cardBody:{textAlign:"center"},primaryAction:{marginTop:"60px"},subtitle:{color:O.l.var,marginTop:"30px"},title:{marginTop:"30px"}}),j=({primaryAction:e,subTitle:t,title:a})=>c.a.createElement("div",null,c.a.createElement(f.a,{className:Object(E.b)(D.card)},c.a.createElement("div",{className:Object(E.b)(D.cardBody)},c.a.createElement(s.a,{gutter:"lg"},c.a.createElement(n.a,{md:1,lg:2}),c.a.createElement(n.a,{md:10,lg:8},c.a.createElement(y.a,{size:"xl"}),c.a.createElement(i.b,{className:Object(E.b)(D.title),size:"lg"},a),Boolean(t)&&c.a.createElement("p",{className:Object(E.b)(D.subtitle)},t),Boolean(e)&&c.a.createElement("div",{className:Object(E.b)(D.primaryAction)},e)),c.a.createElement(n.a,{md:1,lg:2})))));const w=Object(p.a)(e=>{const t=[],a=m.c.selectProviders(e);if(a&&a.results){let e=!1,r=!1;for(const t of a.results)"AWS"===t.type?e=!0:"OCP"===t.type&&(r=!0);e&&t.push("aws"),r&&t.push("ocp")}return{availableTabs:t,providers:a,providersFetchStatus:m.c.selectProvidersFetchStatus(e)}}),T=Object(u.c)()(Object(d.b)(w,{openProvidersModal:b.a.openProvidersModal})(class extends c.a.Component{constructor(){super(...arguments),this.state={currentTab:"aws"},this.getTabTitle=(e=>{const{t:t}=this.props;return"aws"===e?t("overview.aws"):"ocp"===e?t("overview.ocp"):void 0}),this.renderTab=(e=>"aws"===e.id?c.a.createElement(g.a,null):c.a.createElement(v.a,null)),this.handleTabChange=(e=>{this.setState({currentTab:e})})}render(){const{availableTabs:e,openProvidersModal:t,providers:a,providersFetchStatus:l,t:u}=this.props,{currentTab:d}=this.state,p=c.a.createElement(r.c,Object.assign({},Object(h.a)(h.b.providers.add_btn),{onClick:t,type:r.a.submit,variant:r.b.secondary}),u("providers.add_source"));return c.a.createElement("div",{className:"pf-l-page__main-section pf-u-pb-xl pf-u-px-xl"},c.a.createElement("header",{className:"pf-u-display-flex pf-u-justify-content-space-between pf-u-align-items-center"},c.a.createElement(i.b,{size:i.a.lg},u("overview.title")),p),c.a.createElement("div",null,Boolean(a&&a.count>0&&2===l)?c.a.createElement(o.a,{isShrink:Boolean(!0),tabs:e.map(e=>({id:e,label:this.getTabTitle(e),content:this.renderTab})),selected:d,onChange:this.handleTabChange}):c.a.createElement(s.a,{gutter:"lg"},c.a.createElement(n.a,null,c.a.createElement(j,{primaryAction:p,title:u("overview.empty_state_title"),subTitle:u("overview.empty_state_desc")})))))}}));t.a=T},498:function(e,t,a){"use strict";var r=a(76),n=a(106),s=a(0),i=a.n(s),o=a(26),l=a(23),c=a(51),u=a(28),d=a(21),p=a(34),m=a(107),b=a(108),h=a(109),g=a(640),v=a(110),f=a(656),y=a(176);const E=f.a.create({reportSummary:{height:"100%"},subtitle:{fontSize:y.t.value,color:y.l.var,marginBottom:"0"}}),O=Object(o.c)()(({title:e,subTitle:t,detailsLink:a,children:r,status:n,t:s})=>i.a.createElement(v.a,{className:Object(f.b)(E.reportSummary)},i.a.createElement(m.a,null,i.a.createElement(g.b,{size:"lg"},e),Boolean(t)&&i.a.createElement("p",{className:Object(f.b)(E.subtitle)},t)),i.a.createElement(h.a,null,1===n?`${s("loading")}...`:r),Boolean(a)&&i.a.createElement(b.a,null,a))),D=f.a.create({reportSummaryDetails:{marginBottom:y.R.value,display:"flex",alignItems:"flex-end"},value:{color:y.k.var,marginRight:y.S.value,fontSize:y.p.value},text:{paddingBottom:14,lineHeight:y.x.value,fontSize:y.t.value}}),j=({label:e,formatValue:t,formatOptions:a,report:r})=>{let n="----";return r&&(n=r.total?t(r.total.value,r.total.units,a):0),i.a.createElement("div",{className:Object(f.b)(D.reportSummaryDetails)},i.a.createElement("div",{className:Object(f.b)(D.value)},n),i.a.createElement("div",{className:Object(f.b)(D.text)},i.a.createElement("div",null,e)))};var w=a(79);const T=f.a.create({reportSummaryItem:{":not(:last-child)":{marginBottom:y.R.value}},test:{":not(foo) svg":{overflow:"visible"}}}),S=({label:e,value:t,totalValue:a,formatValue:r,units:n,formatOptions:s})=>{const o=Number((a?t/a*100:0).toFixed(2)),l=`${r(t,n,s)} (${o}%)`;return i.a.createElement("li",{className:Object(f.b)(T.reportSummaryItem)},i.a.createElement(w.b,{label:l,value:o,title:e,size:w.a.sm}))};S.defaultProps={formatValue:e=>e};var k=a(234);class x extends i.a.Component{shouldComponentUpdate(e){return e.report!==this.props.report}getItems(){const{report:e,idKey:t,labelKey:a}=this.props,r=Object(k.a)({report:e,idKey:t,labelKey:a}),n=r.findIndex(e=>"Other"===e.id);return-1!==n?[...r.slice(0,n),...r.slice(n+1),r[n]]:r}render(){const{report:e,children:t}=this.props;if(!e)return null;const a=this.getItems();return i.a.createElement("ul",null,t({items:a}))}}var R=a(315);const _=e=>i.a.createElement("div",{style:{marginBottom:16}},i.a.createElement(R.a,Object.assign({height:75},e)));var L=a(195),K=a(458),C=a(330),B=a(275),N=a.n(B),I=a(274),q=a.n(I),z=a(459),U=a.n(z),V=a(273),M=a.n(V),W=a(15),$=a(194);const P=e=>{switch(e){case"services":return"service";case"accounts":return"account";case"regions":return"region";case"instance_type":return"instance_type"}};const F=Object(u.a)((e,{widgetId:t})=>{const a=c.c.selectWidget(e,t),r=c.c.selectWidgetQueries(e,t);return Object.assign({},a,{currentQuery:r.current,previousQuery:r.previous,tabsQuery:r.tabs,current:W.c.selectReport(e,a.reportType,r.current),previous:W.c.selectReport(e,a.reportType,r.previous),tabs:W.c.selectReport(e,a.reportType,r.tabs),status:W.c.selectReportFetchStatus(e,a.reportType,r.current)})}),A={fetchReports:c.a.fetchWidgetReports,updateTab:c.a.changeWidgetTab},Q=Object(o.c)()(Object(l.b)(F,A)(class extends i.a.Component{constructor(){super(...arguments),this.getTabTitle=(e=>{const{t:t}=this.props;return t("group_by.top",{groupBy:P(e)||""})}),this.getDetailsLinkTitle=(e=>{const{t:t}=this.props;return t("group_by.all",{groupBy:P(e)||""})}),this.buildDetailsLink=(()=>{const{currentQuery:e}=this.props,t=Object(p.b)(e).group_by;return`/aws?${Object(p.a)({group_by:t,order_by:{total:"desc"}})}`}),this.renderTab=(e=>{const{tabs:t,topItems:a}=this.props,r=e.id;return i.a.createElement(x,{idKey:P(r),report:t},({items:e})=>e.map(e=>i.a.createElement(S,{key:e.id,formatOptions:a.formatOptions,formatValue:$.b,label:e.label.toString(),totalValue:t.total.value,units:e.units,value:e.total})))}),this.handleTabChange=(e=>{this.props.updateTab(this.props.id,e)})}componentDidMount(){const{fetchReports:e,widgetId:t}=this.props;e(t)}render(){const{t:e,titleKey:t,trend:a,details:r,current:n,previous:s,availableTabs:o,currentTab:l,reportType:c,status:u}=this.props,d=new Date,p=U()(d),m=N()(d,"Do"),b=N()(M()(d),"Do"),h=e(t,{endDate:m,month:p,startDate:b}),g=e("aws_dashboard.widget_subtitle",{endDate:m,month:p,startDate:b,count:q()(d)}),v=e(r.labelKey,{context:r.labelKeyContext}),f="cost"===c&&i.a.createElement(K.a,{to:this.buildDetailsLink()},this.getDetailsLinkTitle(l)),y=e(a.titleKey),E=Object(L.d)(n,a.type),D=Object(L.d)(s,a.type);return i.a.createElement(O,{title:h,subTitle:g,detailsLink:f,status:u},i.a.createElement(j,{report:n,formatValue:$.b,label:v,formatOptions:r.formatOptions}),i.a.createElement(_,{title:y,currentData:E,formatDatumValue:$.b,formatDatumOptions:a.formatOptions,previousData:D}),i.a.createElement(C.a,{tabs:o.map(e=>({id:e,label:this.getTabTitle(e),content:this.renderTab})),selected:l,onChange:this.handleTabChange}))}})),Y=Object(u.a)(e=>({widgets:c.c.selectCurrentWidgets(e)})),G=Object(o.c)()(Object(l.b)(Y,{openProvidersModal:d.a.openProvidersModal})(({t:e,openProvidersModal:t,widgets:a})=>i.a.createElement("div",null,i.a.createElement(r.a,{gutter:"md"},a.map(e=>i.a.createElement(n.a,{xl:4,lg:6,key:e},i.a.createElement(Q,{widgetId:e})))))));t.a=G},501:function(e,t,a){"use strict";(function(e){var r=a(30),n=a(494);t.a=Object(r.hot)(e)(n.a)}).call(this,a(29)(e))},502:function(e,t,a){"use strict";(function(e){var r=a(30),n=a(498);t.a=Object(r.hot)(e)(n.a)}).call(this,a(29)(e))},648:function(e,t,a){"use strict";a.r(t),function(e){var r=a(30),n=a(495);t.default=Object(r.hot)(e)(n.a)}.call(this,a(29)(e))}}]);
//# sourceMappingURL=12a579b3280cd5291f5f.bundle.js.map