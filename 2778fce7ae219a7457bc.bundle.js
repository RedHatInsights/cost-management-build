(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{189:function(e,t,a){"use strict";a.d(t,"f",function(){return b}),a.d(t,"g",function(){return g}),a.d(t,"a",function(){return f}),a.d(t,"b",function(){return y}),a.d(t,"c",function(){return E}),a.d(t,"d",function(){return D}),a.d(t,"e",function(){return O});var n=a(466),r=a.n(n),s=a(318),i=a.n(s),o=a(216),c=a.n(o),l=a(317),u=a.n(l),d=a(44),p=a(197),m=a(238),h=a(215);function b(e,t=1,a="date"){if(!e)return[];const n={report:e,idKey:a,sortKey:"id",sortDirection:1},r=Object(m.a)(n);return 1===t?r.map(e=>v(e.total,e,a)):2===t?r.map(e=>v(e.total,e,a)):r.reduce((e,t)=>{const n=e.length?e[e.length-1].y:0;return[...e,v(n+t.total,t,a)]},[])}function g(e,t=1,a="date",n="charge"){if(!e)return[];const r={report:e,idKey:a,sortKey:"id",sortDirection:1},s=Object(h.a)(r);return 1===t?s.map(e=>v(e[n],e,a)):2===t?s.map(e=>v(e[n],e,a)):s.reduce((e,t)=>{const r=e.length?e[e.length-1].y:0;return[...e,v(r+t[n],t,a)]},[])}function v(e,t,a="date"){var n;return{x:"date"===a?c()(t.id):t.label,y:(n=e,Number(n)===n&&n%1!=0?parseFloat(e.toFixed(2)):function(e){return Number(e)===e&&e%1==0}(e)?e:0),key:t.id,name:t.id,units:t.units}}function f(e,t=!0,a=!1){const[n,s]=function(e){if(!e||!e.length){const e=new Date;return[u()(e),e]}return[new Date(e[0].key+"T00:00:00"),new Date(e[e.length-1].key+"T00:00:00")]}(e);if(t&&n.setDate&&n.setDate(1),a&&n.setDate){const e=r()(n).getDate();s.setDate(e)}return[n,s]}function y(e,t=!1,a=!1,n=!1){const[r,s]=f(e,t,a),o=i()(r,"MMM"),l=c()(r),u=c()(s);return n?d.a.t("date.range_current",{date:j(l),month:l!==u?o:""}):d.a.t("date.range_full",{endDate:j(u),startDate:j(l),month:l!==u?o:""})}function E(e){let t=0;return e&&e.length&&e.forEach(e=>{e.y>t&&(t=e.y)}),t}function D(e){return function(t,a=null,n={}){const r=Object(p.c)(a);switch(r){case"hrs":case"gb":return d.a.t(`units.${r}`,{value:`${e(t,a,n)}`});default:return`${e(t,a,n)}`}}}function O(e,t,a,n="date"){if(!e.key)return"";if("date"===n){return`${i()(e.key,"MMM D YYYY")}: ${t(e.y,e.units,a)}`}return e.key.toString()}function j(e){const t=e%10;return 1===t?d.a.t("date.first",{date:e}):2===t?d.a.t("date.second",{date:e}):3===t?d.a.t("date.third",{date:e}):d.a.t("date.tenth",{date:e})}},197:function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"b",function(){return r}),a.d(t,"a",function(){return i});const n=e=>e?e.split("-")[0].toLowerCase():"",r=(e,t,a={})=>{const r=n(t),c=e||0;switch(r){case"usd":return i(c,r,a);case"gb":return o(c,r,a);default:return s(c,r,a)}},s=(e,t,{fractionDigits:a}={})=>e.toFixed(a),i=(e,t,{fractionDigits:a=2}={})=>{let n=e;return e||(n=0),n.toLocaleString("en",{style:"currency",currency:"USD",minimumFractionDigits:a,maximumFractionDigits:a})},o=(e,t,{fractionDigits:a=2}={})=>e.toFixed(a)},215:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"c",function(){return s}),a.d(t,"b",function(){return i});var n=a(224);function r({report:e,idKey:t,labelKey:a=t,sortKey:r="charge",sortDirection:i=0}){return Object(n.a)(s({report:e,idKey:t,labelKey:a,sortDirection:i,sortKey:r}),{key:r,direction:i})}function s({report:e,idKey:t,labelKey:a=t}){if(!e)return[];const n={},r=e=>{e.values&&e.values.forEach(e=>{const r=e.capacity,s=e.charge,i=e[t];let o=e[a];"cluster"===a&&e.cluster_alias&&(o=e.cluster_alias);const c=e.limit,l=e.request,u=e.usage;n[i]?n[i]=Object.assign({},n[i],{capacity:n[i].capacity+r,charge:n[i].charge+s,limit:n[i].limit+c,request:n[i].request+l,usage:n[i].usage+u}):n[i]={app:e.app,capacity:r,charge:s,deltaPercent:e.delta_percent,deltaValue:e.delta_value,id:i,label:o,limit:c,request:l,units:e.units||u?"GB":"USD",usage:u}});for(const t in e)if(e[t]instanceof Array)return e[t].forEach(r)};return e&&e.data&&e.data.forEach(r),Object.values(n)}function i(e={}){return e.project?"project":e.cluster?"cluster":e.node?"node":"date"}},218:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r});const n=e=>({"data-testid":e}),r={details:{historical_data_btn:"historical-data-btn",tag_lnk:"tag-lnk"},export:{cancel_btn:"cancel-btn",submit_btn:"submit-btn"},login:{alert:"alert",form:"login-form",username_input:"username-input",password_input:"password-input",submit:"submit"},masthead:{masthead:"masthead",username:"username",sidebarToggle:"sidebar-toggle",logout:"logout"},providers:{add_btn:"add-btn",bucket_input:"bucket-input",cancel_btn:"cancel-btn",empty_state_add_btn:"empty_state_add-btn",name_input:"provider-name-input",resource_name_input:"provider-resource-name-input",cluster_id_input:"provider-cluster-id-input",submit_btn:"submit-btn",type_input:"provider-type-input"},sidebar:{nav:"vertical-nav",link:"vertical-nav-link",backdrop:"sidebar-backdrop"}}},224:function(e,t,a){"use strict";function n(e,t){if("string"==typeof e)return e;return e[t.key]}function r(e,t){const{direction:a=0}=t||{};return[...e].sort((e,r)=>{const s=n(0===a?e:r,t),i=n(0===a?r:e,t);return s>i?-1:s<i?1:0})}a.d(t,"a",function(){return r})},238:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"c",function(){return s}),a.d(t,"b",function(){return i});var n=a(224);function r({report:e,idKey:t,labelKey:a=t,sortKey:r="total",sortDirection:i=0}){return Object(n.a)(s({report:e,idKey:t,labelKey:a,sortDirection:i,sortKey:r}),{key:r,direction:i})}function s({report:e,idKey:t,labelKey:a=t}){if(!e)return[];const n={},r=e=>{e.values&&e.values.forEach(e=>{const r=e.total,s=e[t];let i=e[a];"account"===a&&e.account_alias&&(i=e.account_alias),n[s]?n[s]=Object.assign({},n[s],{total:n[s].total+r}):n[s]={deltaPercent:e.delta_percent,deltaValue:e.delta_value,id:s,total:r,label:i,units:e.units}});for(const t in e)if(e[t]instanceof Array)return e[t].forEach(r)};return e&&e.data&&e.data.forEach(r),Object.values(n)}function i(e={}){return e.account?"account":e.instance_type?"instance_type":e.region?"region":e.service?"service":"date"}},337:function(e,t,a){"use strict";var n=a(1),r=a.n(n),s=a(684),i={dash(e,t,a){const n=1.1*a,r=n-.3*n,s=e-n,i=t+r/2,o=.3*(e+n-s),c=o/3;return`M ${s}, ${i}\n      h${o}\n      v-${r}\n      h-${o}\n      z\n      M ${s+o+c}, ${i}\n      h${o}\n      v-${r}\n      h-${o}\n      z\n      M ${s+2*o+2*c}, ${i}\n      h${o}\n      v-${r}\n      h-${o}\n      z`},minus(e,t,a){const n=1.1*a,r=n-.3*n,s=e-n,i=e+n-s;return`M ${s}, ${t+r/2}\n      h${i}\n      v-${r}\n      h-${i}\n      z`}};class o extends s.a{getPath(e){return i[`${e.symbol}`](e.x,e.y,e.size)}}o.propTypes=Object.assign({},s.a.propTypes,{symbol:r.a.oneOfType([r.a.oneOf(["minus","dash"]),r.a.func])});t.a=o},338:function(e,t,a){"use strict";var n=a(80),r=a(84),s=a(19),i=a(97),o=a(690),c=a(82),l=a(703),u=a(189),d=a(216),p=a.n(d),m=a(0),h=a.n(m),b=a(77),g=a(170);const v={colorScale:[g.H.value,"#A2DA9C","#88D080","#6EC664","#519149","#3C6C37"],legend:{labels:{fontFamily:g.n.value,fontSize:12}},previousMonth:{data:{fill:"none",stroke:g.H.value}},currentMonth:{data:{fill:"none",stroke:"#A2DA9C"}},yAxis:{axisLabel:{padding:15},grid:{stroke:"none"},ticks:{stroke:"none"},tickLabels:{fontSize:0}},xAxis:{axisLabel:{padding:15},grid:{stroke:"none"},ticks:{stroke:"none"}}},f=l.a.create({chartContainer:{":not(foo) svg":{overflow:"visible"}},legend:{display:"inline-block",fontSize:g.q.value,marginBottom:g.L.value,marginTop:g.L.value}});class y extends h.a.Component{constructor(){super(...arguments),this.containerRef=h.a.createRef(),this.state={width:0},this.initDatum=(()=>{const{currentData:e,previousData:t,title:a}=this.props,n=[];t&&t.length&&n.push({name:Object(u.b)(t,!0,!0),symbol:{type:"minus"}}),e&&e.length&&n.push({name:Object(u.b)(e,!0,!1,!0),symbol:{type:"minus"}});const r={charts:[{data:t,show:!0,style:v.previousMonth},{data:e,show:!0,style:v.currentMonth}],legend:{colorScale:v.colorScale,data:n,onClick:this.handleCostLegendClick,title:a}};this.setState({datum:{cost:r}})}),this.handleCostLegendClick=(e=>{const{datum:t}=this.state,a=Object.assign({},t);e.index>=0&&a.cost.charts.length&&(a.cost.charts[e.index].show=!a.cost.charts[e.index].show,this.setState({datum:a}))}),this.handleResize=(()=>{this.containerRef.current&&this.setState({width:this.containerRef.current.clientWidth})}),this.getChart=((e,t)=>e.data&&e.data.length&&e.show?h.a.createElement(c.a,{data:e.data,key:`trend-chart-${t}`,style:e.style}):null),this.getLegend=((e,t)=>e&&e.data&&e.data.length?h.a.createElement(o.a,{colorScale:e.colorScale,containerComponent:h.a.createElement(i.a,{responsive:!1}),data:e.data,events:[{target:"data",eventHandlers:{onClick:()=>[{target:"data",mutation:t=>(e.onClick(t),null)}]}}],gutter:5,height:50,orientation:t>150?"horizontal":"vertical",style:v.legend,theme:s.a.light.blue,width:t}):null),this.getTooltipLabel=(e=>{const{formatDatumValue:t,formatDatumOptions:a}=this.props;return Object(u.e)(e,Object(u.d)(t),a,"date")})}componentDidMount(){setTimeout(()=>{this.containerRef.current&&this.setState({width:this.containerRef.current.clientWidth}),window.addEventListener("resize",this.handleResize)}),this.initDatum()}componentDidUpdate(e){e.currentData===this.props.currentData&&e.previousData===this.props.previousData||this.initDatum()}componentWillUnmount(){window.removeEventListener("resize",this.handleResize)}getDomain(){const{currentData:e,previousData:t}=this.props,a={x:[1,31]},n=e?Object(u.c)(e):0,r=t?Object(u.c)(t):0,s=Math.max(n,r),i=s>0?Math.ceil(s+.1*s):0;return i>0&&(a.y=[0,i]),a}getEndDate(){const{currentData:e,previousData:t}=this.props,a=t?p()(Object(u.a)(t,!0,!0)[1]):0,n=e?p()(Object(u.a)(e,!0,!0)[1]):0;return n>0||a>0?Math.max(n,a):31}isLegendVisible(){const{datum:e}=this.state;let t=!1;return e&&e.cost.legend&&e.cost.legend.data&&e.cost.legend.data.forEach(e=>{e.name&&""!==e.name.trim()&&(t=!0)}),t}render(){const{height:e}=this.props,{datum:t,width:a}=this.state,s=h.a.createElement(r.a,{labels:this.getTooltipLabel}),i=f.legend.minWidth>a/2?f.legendContainer.minWidth:a/2,o=this.getDomain(),c=this.getEndDate(),u=Math.floor(c/2);return h.a.createElement("div",{className:Object(l.b)(f.chartContainer),ref:this.containerRef},h.a.createElement(n.a,{containerComponent:s,domain:o,height:e,width:a},Boolean(t&&t.cost)&&t.cost.charts.map((e,t)=>this.getChart(e,t)),h.a.createElement(b.a,{style:v.xAxis,tickValues:[1,u,c]}),h.a.createElement(b.a,{dependentAxis:!0,style:v.yAxis})),Boolean(this.isLegendVisible())&&h.a.createElement("div",{className:Object(l.b)(f.legend)},Boolean(t.cost.legend.title)&&h.a.createElement("div",null,t.cost.legend.title),this.getLegend(t.cost.legend,i)))}}a.d(t,"a",function(){return y})},355:function(e,t,a){"use strict";var n=a(0),r=a.n(n);const s=({data:e})=>{const t="function"==typeof e.content?e.content(e):e.content;return r.a.createElement("div",{role:"tabpanel"},t)};var i=a(703),o=a(170);const c=i.a.create({tabItem:{position:"relative",flexGrow:1,textAlign:"center",fontSize:o.q.value,padding:o.N.value,cursor:"pointer",marginBottom:o.M.value,marginTop:o.M.value},tabItemShrink:{flexGrow:"0",flexShrink:"2",marginRight:"20px"},selected:{backgroundImage:`linear-gradient(to top, ${o.J.value} 2px, transparent 2px)`}});class l extends r.a.Component{constructor(){super(...arguments),this.handleClick=(()=>{const{onSelect:e,data:t}=this.props;e(t.id)})}render(){const{data:e,isSelected:t,isShrink:a}=this.props;return r.a.createElement("div",{role:"tab",onClick:this.handleClick,"aria-selected":t,tabIndex:t?0:-1,className:Object(i.b)(c.tabItem,t&&c.selected,a&&c.tabItemShrink)},e.label)}}const u=i.a.create({tabNavigation:{display:"flex",alignItems:"flex-end",marginBottom:o.M.value}});class d extends r.a.Component{constructor(){super(...arguments),this.handleKeyDown=(e=>{if(!["ArrowRight","ArrowLeft"].includes(e.key))return;const{selected:t,tabs:a,onChange:n}=this.props,r="ArrowRight"===e.key?1:-1,s=a.findIndex(e=>e.id===t.id)+r;s<0||s>a.length-1||n(a[s].id)})}render(){const{isShrink:e,tabs:t,selected:a,onChange:n}=this.props;return r.a.createElement("div",{role:"tablist",className:Object(i.b)(u.tabNavigation),onKeyDown:this.handleKeyDown},t.map(t=>r.a.createElement(l,{isShrink:e,onSelect:n,key:t.id,data:t,isSelected:t.id===a.id})))}}const p=({isShrink:e,selected:t,tabs:a,onChange:n})=>{if(0===a.length)return r.a.createElement("div",null,"No data was found");const i=a.find(e=>e.id===t);return r.a.createElement("div",null,r.a.createElement(d,{isShrink:e,tabs:a,selected:i||a[0],onChange:n}),r.a.createElement(s,{data:i||a[0]}))};a.d(t,"a",function(){return p})},356:function(e,t,a){"use strict";var n=a(108),r=a(109),s=a(110),i=a(687),o=a(111),c=a(703),l=a(0),u=a.n(l),d=a(29),p=a(170);const m=c.a.create({reportSummary:{height:"100%"},subtitle:{fontSize:p.s.value,color:p.j.var,marginBottom:"0"}}),h=Object(d.c)()(({title:e,subTitle:t,detailsLink:a,children:l,status:d,t:p})=>u.a.createElement(o.a,{className:Object(c.b)(m.reportSummary)},u.a.createElement(n.a,null,u.a.createElement(i.b,{size:"lg"},e),Boolean(t)&&u.a.createElement("p",{className:Object(c.b)(m.subtitle)},t)),u.a.createElement(s.a,null,1===d?`${p("loading")}...`:l),Boolean(a)&&u.a.createElement(r.a,null,a))),b=c.a.create({requestedValue:{marginLeft:p.N.value},text:{display:"flex",alignItems:"flex-end",marginLeft:p.N.value,paddingBottom:14,lineHeight:p.v.value,fontSize:p.s.value},titleContainer:{display:"inline-block",marginBottom:p.M.value,minWidth:"175px",width:"50%"},usageText:{marginRight:p.N.value},value:{display:"flex",color:p.i.var,fontSize:p.o.value}}),g=({label:e,formatValue:t,formatOptions:a,report:n,reportType:r="charge",requestLabel:s})=>{let i="----",o="----";if(n&&n.total)if("charge"===r){const e=n.total.units?n.total.units:"USD";i=t(n.total.charge?n.total.charge:0,e,a)}else{const e=n.total.units?n.total.units:"GB";i=t(n.total.usage?n.total.usage:0,e,a),o=t(n.total.request?n.total.request:0,e,a)}return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:Object(c.b)(b.titleContainer)},u.a.createElement("div",{className:Object(c.b)(b.value)},i,u.a.createElement("div",{className:Object(c.b)(b.text)},u.a.createElement("div",null,e)))),u.a.createElement("div",{className:Object(c.b)(b.titleContainer)},Boolean("charge"!==r)&&u.a.createElement("div",{className:Object(c.b)(b.value,b.requestedValue)},o,u.a.createElement("div",{className:Object(c.b)(b.text)},s))))};var v=a(79);const f=c.a.create({reportSummaryItem:{":not(:last-child)":{marginBottom:p.M.value}},test:{":not(foo) svg":{overflow:"visible"}}}),y=({label:e,value:t,totalValue:a,formatValue:n,units:r,formatOptions:s})=>{const i=Number((a?t/a*100:0).toFixed(2)),o=`${n(t,r,s)} (${i}%)`;return u.a.createElement("li",{className:Object(c.b)(f.reportSummaryItem)},u.a.createElement(v.b,{label:o,value:i,title:e,size:v.a.sm}))};y.defaultProps={formatValue:e=>e};var E=a(215);class D extends u.a.Component{shouldComponentUpdate(e){return e.report!==this.props.report}getItems(){const{report:e,idKey:t,labelKey:a}=this.props,n=Object(E.a)({report:e,idKey:t,labelKey:a}),r=n.findIndex(e=>"Other"===e.id);return-1!==r?[...n.slice(0,r),...n.slice(r+1),n[r]]:n}render(){const{report:e,children:t}=this.props;if(!e)return null;const a=this.getItems();return u.a.createElement("ul",null,t({items:a}))}}var O=a(338);const j=e=>u.a.createElement("div",{style:{marginBottom:16}},u.a.createElement(O.a,Object.assign({height:75},e)));var w=a(84),x=a(690),k=a(80),T=a(97),C=a(19),S=a(82),_=a(189),L=a(337),R=a(216),B=a.n(R),N=a(44),z=a(77);const M={currentRequestData:{data:{fill:"none",stroke:"#88D080",strokeDasharray:"3,3"}},currentUsageData:{data:{fill:"none",stroke:"#A2DA9C"}},legend:{labels:{fontFamily:p.n.value,fontSize:12}},previousRequestData:{data:{fill:"none",stroke:p.H.value,strokeDasharray:"3,3"}},previousUsageData:{data:{fill:"none",stroke:p.H.value}},currentColorScale:["#A2DA9C","#88D080","#6EC664","#519149","#3C6C37"],previousColorScale:[p.H.value,p.G.value],yAxis:{axisLabel:{padding:15},grid:{stroke:"none"},ticks:{stroke:"none"},tickLabels:{fontSize:0}},xAxis:{axisLabel:{padding:15},grid:{stroke:"none"},ticks:{stroke:"none"}}},K=c.a.create({chartContainer:{":not(foo) svg":{overflow:"visible"}},legend:{display:"inline-block",fontSize:p.q.value,marginBottom:p.L.value,marginTop:p.L.value,minWidth:"175px",width:"50%"}});class $ extends u.a.Component{constructor(){super(...arguments),this.containerRef=u.a.createRef(),this.state={width:0},this.initDatum=(()=>{const{currentRequestData:e,currentUsageData:t,previousRequestData:a,previousUsageData:n}=this.props,r=[];n&&r.push({name:N.a.t("chart.used"),symbol:{type:"minus"}}),a&&r.push({name:N.a.t("chart.requested"),symbol:{type:"dash"}});const s={charts:[{data:n,show:!0,style:M.previousUsageData},{data:a,show:!0,style:M.previousRequestData}],legend:{colorScale:M.previousColorScale,data:r,onClick:this.handlePreviousLegendClick,title:Object(_.b)(n,!0,!0)}},i=[];t&&i.push({name:N.a.t("chart.used"),symbol:{type:"minus"}}),e&&i.push({name:N.a.t("chart.requested"),symbol:{type:"dash"}});const o={charts:[{data:t,show:!0,style:M.currentUsageData},{data:e,show:!0,style:M.currentRequestData}],legend:{colorScale:M.currentColorScale,data:i,gutter:55,onClick:this.handleCurrentLegendClick,title:Object(_.b)(t,!0,!1)}};this.setState({datum:{previous:s,current:o}})}),this.handleCurrentLegendClick=(e=>{const{datum:t}=this.state,a=Object.assign({},t);e.index>=0&&a.current.charts.length&&(a.current.charts[e.index].show=!a.current.charts[e.index].show,this.setState({datum:a}))}),this.handleResize=(()=>{this.containerRef.current&&this.setState({width:this.containerRef.current.clientWidth})}),this.handlePreviousLegendClick=(e=>{const{datum:t}=this.state,a=Object.assign({},t);e.index>=0&&a.previous.charts.length&&(a.previous.charts[e.index].show=!a.previous.charts[e.index].show,this.setState({datum:a}))}),this.getChart=((e,t)=>e.data&&e.data.length&&e.show?u.a.createElement(S.a,{data:e.data,key:`usage-chart-${t}`,style:e.style}):null),this.getLegend=((e,t)=>e&&e.data&&e.data.length?u.a.createElement(x.a,{colorScale:e.colorScale,containerComponent:u.a.createElement(T.a,{responsive:!1}),data:e.data,dataComponent:u.a.createElement(L.a,null),events:[{target:"data",eventHandlers:{onClick:()=>[{target:"data",mutation:t=>(e.onClick(t),null)}]}}],height:25,orientation:"horizontal",style:M.legend,theme:C.a.light.blue}):null),this.getTooltipLabel=(e=>{const{formatDatumValue:t,formatDatumOptions:a}=this.props;return Object(_.e)(e,Object(_.d)(t),a,"date")})}componentDidMount(){setTimeout(()=>{this.containerRef.current&&this.setState({width:this.containerRef.current.clientWidth}),window.addEventListener("resize",this.handleResize)}),this.initDatum()}componentDidUpdate(e){e.currentRequestData===this.props.currentRequestData&&e.currentUsageData===this.props.currentUsageData&&e.previousRequestData===this.props.previousRequestData&&e.previousUsageData===this.props.previousUsageData||this.initDatum()}componentWillUnmount(){window.removeEventListener("resize",this.handleResize)}getDomain(){const{currentRequestData:e,currentUsageData:t,previousRequestData:a,previousUsageData:n}=this.props,r={x:[1,31]},s=e?Object(_.c)(e):0,i=t?Object(_.c)(t):0,o=a?Object(_.c)(a):0,c=n?Object(_.c)(n):0,l=Math.max(s,i,o,c),u=l>0?Math.ceil(l+.1*l):0;return u>0&&(r.y=[0,u]),r}getEndDate(){const{currentRequestData:e,currentUsageData:t,previousRequestData:a,previousUsageData:n}=this.props,r=e?B()(Object(_.a)(e,!0,!0)[1]):0,s=t?B()(Object(_.a)(t,!0,!0)[1]):0,i=a?B()(Object(_.a)(a,!0,!0)[1]):0,o=n?B()(Object(_.a)(n,!0,!0)[1]):0;return r>0||s>0||i>0||o>0?Math.max(r,s,i,o):31}isCurrentLegendVisible(){const{datum:e}=this.state;let t=!1;return e&&e.current.legend&&e.current.legend.data&&e.current.legend.data.forEach(e=>{e.name&&""!==e.name.trim()&&(t=!0)}),t}isPreviousLegendVisible(){const{datum:e}=this.state;let t=!1;return e&&e.previous.legend&&e.previous.legend.data&&e.previous.legend.data.forEach(e=>{e.name&&""!==e.name.trim()&&(t=!0)}),t}render(){const{height:e}=this.props,{datum:t,width:a}=this.state,n=u.a.createElement(w.a,{labels:this.getTooltipLabel}),r=K.legend.minWidth>a/2?K.legendContainer.minWidth:a/2,s=this.getDomain(),i=this.getEndDate(),o=Math.floor(i/2);return u.a.createElement("div",{className:Object(c.b)(K.chartContainer),ref:this.containerRef},u.a.createElement(k.a,{containerComponent:n,domain:s,height:e,width:a},Boolean(t&&t.previous)&&t.previous.charts.map((e,t)=>this.getChart(e,t)),Boolean(t&&t.current)&&t.current.charts.map((e,t)=>this.getChart(e,t)),u.a.createElement(z.a,{style:M.xAxis,tickValues:[1,o,i]}),u.a.createElement(z.a,{dependentAxis:!0,style:M.yAxis})),Boolean(this.isPreviousLegendVisible())&&u.a.createElement("div",{className:Object(c.b)(K.legend)},Boolean(t.previous.legend.title)&&u.a.createElement("div",null,t.previous.legend.title),this.getLegend(t.previous.legend,r)),Boolean(this.isCurrentLegendVisible())&&u.a.createElement("div",{className:Object(c.b)(K.legend)},Boolean(t.current.legend.title)&&u.a.createElement("div",null,t.current.legend.title),this.getLegend(t.current.legend,r)))}}const q=e=>u.a.createElement("div",{style:{marginBottom:16}},u.a.createElement($,Object.assign({height:75},e)));a.d(t,"a",function(){return h}),a.d(t,"b",function(){return g}),a.d(t,"c",function(){return y}),a.d(t,"d",function(){return D}),a.d(t,"e",function(){return j}),a.d(t,"f",function(){return q})},509:function(e,t,a){"use strict";var n=a(681),r=a(0),s=a.n(r),i=a(711);const o=n.c,c=e=>s.a.createElement(o,Object.assign({component:i.a,variant:"link"},e));a.d(t,"a",function(){return c})},542:function(e,t,a){"use strict";var n=a(686),r=a(697),s=a(0),i=a.n(s),o=a(29),c=a(22),l=a(37),u=a(30),d=a(18),p=a(38),m=a(189),h=a(509),b=a(356),g=a(355),v=a(318),f=a.n(v),y=a(216),E=a.n(y),D=a(510),O=a.n(D),j=a(317),w=a.n(j),x=a(12),k=a(197);const T=e=>{switch(e){case"clusters":return"cluster";case"nodes":return"node";case"projects":return"project"}};const C=Object(l.a)((e,{widgetId:t})=>{const a=u.c.selectWidget(e,t),n=u.c.selectWidgetQueries(e,t);return Object.assign({},a,{currentQuery:n.current,previousQuery:n.previous,tabsQuery:n.tabs,current:x.c.selectReport(e,a.reportType,n.current),previous:x.c.selectReport(e,a.reportType,n.previous),tabs:x.c.selectReport(e,a.reportType,n.tabs),status:x.c.selectReportFetchStatus(e,a.reportType,n.current)})}),S={fetchReports:u.a.fetchWidgetReports,updateTab:u.a.changeWidgetTab},_=Object(o.c)()(Object(c.b)(C,S)(class extends i.a.Component{constructor(){super(...arguments),this.getTabTitle=(e=>{const{t:t}=this.props;return t("group_by.top",{groupBy:T(e)||""})}),this.getDetailsLinkTitle=(e=>{const{t:t}=this.props;return t("group_by.all",{groupBy:T(e)||""})}),this.buildDetailsLink=(()=>{const{currentQuery:e}=this.props,t=Object(p.b)(e).group_by;return`/ocp?${Object(p.a)({group_by:t,order_by:{charge:"desc"}})}`}),this.renderTab=(e=>{const{reportType:t,tabs:a,topItems:n}=this.props,r=e.id;return i.a.createElement(b.d,{idKey:T(r),report:a},({items:e})=>e.map(e=>i.a.createElement(b.c,{key:e.id,formatOptions:n.formatOptions,formatValue:k.b,label:e.label.toString(),totalValue:"charge"===t?a.total.charge:a.total.usage,units:e.units,value:"charge"===t?e.charge:e.usage})))}),this.handleTabChange=(e=>{this.props.updateTab(this.props.id,e)})}componentDidMount(){const{fetchReports:e,widgetId:t}=this.props;e(t)}render(){const{t:e,titleKey:t,trend:a,details:n,current:r,previous:s,availableTabs:o,currentTab:c,reportType:l,status:u}=this.props,d=new Date,p=O()(d),v=f()(d,"Do"),y=f()(w()(d),"Do"),D=e(t,{endDate:v,month:p,startDate:y}),j=e("ocp_dashboard.widget_subtitle",{endDate:v,month:p,startDate:y,count:E()(d)}),x=e(n.labelKey),T=e(n.requestLabelKey),C="charge"===l&&i.a.createElement(h.a,{to:this.buildDetailsLink()},this.getDetailsLinkTitle(c)),S="charge"===l?"charge":"usage",_=Object(m.g)(r,a.type,"date",S),L=Object(m.g)(s,a.type,"date",S),R="charge"!==l?Object(m.g)(r,a.type,"date","request"):void 0,B="charge"!==l?Object(m.g)(s,a.type,"date","request"):void 0;return i.a.createElement(b.a,{title:D,subTitle:j,detailsLink:C,status:u},i.a.createElement(b.b,{report:r,reportType:l,formatValue:k.b,label:x,formatOptions:n.formatOptions,requestLabel:T}),Boolean("charge"===l)?i.a.createElement(b.e,{title:e(a.titleKey),currentData:_,formatDatumValue:k.b,formatDatumOptions:a.formatOptions,previousData:L}):i.a.createElement(b.f,{currentRequestData:R,currentUsageData:_,formatDatumValue:k.b,formatDatumOptions:a.formatOptions,previousRequestData:B,previousUsageData:L}),i.a.createElement(g.a,{tabs:o.map(e=>({id:e,label:this.getTabTitle(e),content:this.renderTab})),selected:c,onChange:this.handleTabChange}))}})),L=Object(l.a)(e=>({widgets:u.c.selectCurrentWidgets(e)})),R=Object(o.c)()(Object(c.b)(L,{openProvidersModal:d.a.openProvidersModal})(({t:e,openProvidersModal:t,widgets:a})=>i.a.createElement("div",null,i.a.createElement(n.a,{gutter:"md"},a.map(e=>i.a.createElement(r.a,{xl:4,lg:6,key:e},i.a.createElement(_,{widgetId:e})))))));t.a=R},545:function(e,t,a){"use strict";var n=a(697),r=a(687),s=a(686),i=a(681),o=a(355),c=a(0),l=a.n(c),u=a(29),d=a(22),p=a(37),m=a(14),h=a(18),b=a(218),g=a(550),v=a(549),f=a(708),y=a(703),E=a(170);const D=y.a.create({card:{height:"100vh",marginTop:"150px"},cardBody:{textAlign:"center"},primaryAction:{marginTop:"60px"},subtitle:{color:E.j.var,marginTop:"30px"},title:{marginTop:"30px"}}),O=({primaryAction:e,subTitle:t,title:a})=>l.a.createElement("div",{className:Object(y.b)(D.card)},l.a.createElement("div",{className:Object(y.b)(D.cardBody)},l.a.createElement(s.a,{gutter:"lg"},l.a.createElement(n.a,{md:1,lg:2}),l.a.createElement(n.a,{md:10,lg:8},l.a.createElement(f.a,{size:"xl"}),l.a.createElement(r.b,{className:Object(y.b)(D.title),size:"lg"},a),Boolean(t)&&l.a.createElement("p",{className:Object(y.b)(D.subtitle)},t),Boolean(e)&&l.a.createElement("div",{className:Object(y.b)(D.primaryAction)},e)),l.a.createElement(n.a,{md:1,lg:2}))));var j=a(710),w=a(706);const x=y.a.create({card:{height:"75vh",paddingLeft:E.L.value,paddingRight:E.L.value,marginTop:"150px"},cardBody:{textAlign:"center"},subtitle:{color:E.j.var,marginTop:"30px"},title:{marginTop:"30px"}}),k=({isUnauthorized:e,subTitle:t,title:a})=>l.a.createElement("div",{className:Object(y.b)(x.card)},l.a.createElement("div",{className:Object(y.b)(x.cardBody)},Boolean(e)?l.a.createElement(j.a,{size:"xl"}):l.a.createElement(w.a,{size:"xl"}),l.a.createElement(r.b,{className:Object(y.b)(x.title),size:"lg"},a),Boolean(t)&&l.a.createElement("p",{className:Object(y.b)(x.subtitle)},t)));var T=a(709);const C=({subTitle:e,title:t})=>l.a.createElement("div",{className:Object(y.b)(x.card)},l.a.createElement("div",{className:Object(y.b)(x.cardBody)},l.a.createElement(T.a,{size:"xl"}),l.a.createElement(r.b,{className:Object(y.b)(x.title),size:"lg"},t),Boolean(e)&&l.a.createElement("p",{className:Object(y.b)(x.subtitle)},e)));const S=Object(p.a)(e=>{const t=[],a=m.c.selectProviders(e);if(a&&a.results){let e=!1,n=!1;for(const t of a.results)"AWS"===t.type?e=!0:"OCP"===t.type&&(n=!0);e&&t.push("aws"),n&&t.push("ocp")}return{availableTabs:t,providers:a,providersError:m.c.selectProvidersError(e),providersFetchStatus:m.c.selectProvidersFetchStatus(e)}}),_=Object(u.c)()(Object(d.b)(S,{openProvidersModal:h.a.openProvidersModal})(class extends l.a.Component{constructor(){super(...arguments),this.state={currentTab:"aws"},this.getAddSourceButton=(()=>{const{openProvidersModal:e,t:t}=this.props;return l.a.createElement(i.c,Object.assign({},Object(b.a)(b.b.providers.add_btn),{onClick:e,type:i.a.submit,variant:i.b.secondary}),t("providers.add_source"))}),this.getEmptyState=(()=>{const{t:e}=this.props;return l.a.createElement(s.a,{gutter:"lg"},l.a.createElement(n.a,null,l.a.createElement(O,{primaryAction:this.getAddSourceButton(),title:e("overview.empty_state_title"),subTitle:e("overview.empty_state_desc")})))}),this.getErrorState=(()=>{const{providersError:e,t:t}=this.props;let a=!1,r=t("overview.error_unexpected_title"),i=t("overview.error_unexpected_desc");return e&&e.response&&401===e.response.status&&(a=!0,r=t("overview.error_unauthorized_title"),i=t("overview.error_unauthorized_desc")),l.a.createElement(s.a,{gutter:"lg"},l.a.createElement(n.a,null,l.a.createElement(k,{isUnauthorized:a,title:r,subTitle:i})))}),this.getLoadingState=(()=>{const{t:e}=this.props;return l.a.createElement(s.a,{gutter:"lg"},l.a.createElement(n.a,null,l.a.createElement(C,{title:e("overview.loading_state_title"),subTitle:e("overview.loading_state_desc")})))}),this.getTabTitle=(e=>{const{t:t}=this.props;return"aws"===e?t("overview.aws"):"ocp"===e?t("overview.ocp"):void 0}),this.getTabs=(()=>{const{availableTabs:e}=this.props,{currentTab:t}=this.state;return l.a.createElement(o.a,{isShrink:Boolean(!0),tabs:e.map(e=>({id:e,label:this.getTabTitle(e),content:this.renderTab})),selected:t,onChange:this.handleTabChange})}),this.handleTabChange=(e=>{this.setState({currentTab:e})}),this.renderTab=(e=>"aws"===e.id?l.a.createElement(g.a,null):l.a.createElement(v.a,null))}render(){const{providers:e,providersError:t,providersFetchStatus:a,t:n}=this.props;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"pf-l-page-header pf-c-page-header pf-l-page__main-section pf-c-page__main-section pf-m-light"},l.a.createElement("header",{className:"pf-u-display-flex pf-u-justify-content-space-between pf-u-align-items-center"},l.a.createElement(r.b,{size:r.a.lg},n("overview.title")),this.getAddSourceButton())),l.a.createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section","page-type":"cost-management-overview"},Boolean(t)?this.getErrorState():Boolean(e&&e.count>0&&2===a)?this.getTabs():Boolean(e&&0===e.count&&2===a)?this.getEmptyState():this.getLoadingState()))}}));t.a=_},546:function(e,t,a){"use strict";var n=a(686),r=a(697),s=a(0),i=a.n(s),o=a(29),c=a(22),l=a(31),u=a(37),d=a(18),p=a(41),m=a(108),h=a(109),b=a(110),g=a(687),v=a(111),f=a(703),y=a(170);const E=f.a.create({reportSummary:{height:"100%"},subtitle:{fontSize:y.s.value,color:y.j.var,marginBottom:"0"}}),D=Object(o.c)()(({title:e,subTitle:t,detailsLink:a,children:n,status:r,t:s})=>i.a.createElement(v.a,{className:Object(f.b)(E.reportSummary)},i.a.createElement(m.a,null,i.a.createElement(g.b,{size:"lg"},e),Boolean(t)&&i.a.createElement("p",{className:Object(f.b)(E.subtitle)},t)),i.a.createElement(b.a,null,1===r?`${s("loading")}...`:n),Boolean(a)&&i.a.createElement(h.a,null,a))),O=f.a.create({reportSummaryDetails:{marginBottom:y.M.value,display:"flex",alignItems:"flex-end"},value:{color:y.i.var,marginRight:y.N.value,fontSize:y.o.value},text:{paddingBottom:14,lineHeight:y.v.value,fontSize:y.s.value}}),j=({label:e,formatValue:t,formatOptions:a,report:n})=>{let r="----";if(n&&n.total){const e=n.total.units?n.total.units:"USD";r=t(n.total.value?n.total.value:0,e,a)}return i.a.createElement("div",{className:Object(f.b)(O.reportSummaryDetails)},i.a.createElement("div",{className:Object(f.b)(O.value)},r),i.a.createElement("div",{className:Object(f.b)(O.text)},i.a.createElement("div",null,e)))};var w=a(79);const x=f.a.create({reportSummaryItem:{":not(:last-child)":{marginBottom:y.M.value}},test:{":not(foo) svg":{overflow:"visible"}}}),k=({label:e,value:t,totalValue:a,formatValue:n,units:r,formatOptions:s})=>{const o=Number((a?t/a*100:0).toFixed(2)),c=`${n(t,r,s)} (${o}%)`;return i.a.createElement("li",{className:Object(f.b)(x.reportSummaryItem)},i.a.createElement(w.b,{label:c,value:o,title:e,size:w.a.sm}))};k.defaultProps={formatValue:e=>e};var T=a(238);class C extends i.a.Component{shouldComponentUpdate(e){return e.report!==this.props.report}getItems(){const{report:e,idKey:t,labelKey:a}=this.props,n=Object(T.a)({report:e,idKey:t,labelKey:a}),r=n.findIndex(e=>"Other"===e.id);return-1!==r?[...n.slice(0,r),...n.slice(r+1),n[r]]:n}render(){const{report:e,children:t}=this.props;if(!e)return null;const a=this.getItems();return i.a.createElement("ul",null,t({items:a}))}}var S=a(338);const _=e=>i.a.createElement("div",{style:{marginBottom:16}},i.a.createElement(S.a,Object.assign({height:75},e)));var L=a(189),R=a(509),B=a(355),N=a(318),z=a.n(N),M=a(216),K=a.n(M),$=a(510),q=a.n($),A=a(317),V=a.n(A),I=a(13),U=a(197);const W=e=>{switch(e){case"services":return"service";case"accounts":return"account";case"regions":return"region";case"instance_type":return"instance_type"}};const P=Object(u.a)((e,{widgetId:t})=>{const a=l.c.selectWidget(e,t),n=l.c.selectWidgetQueries(e,t);return Object.assign({},a,{currentQuery:n.current,previousQuery:n.previous,tabsQuery:n.tabs,current:I.c.selectReport(e,a.reportType,n.current),previous:I.c.selectReport(e,a.reportType,n.previous),tabs:I.c.selectReport(e,a.reportType,n.tabs),status:I.c.selectReportFetchStatus(e,a.reportType,n.current)})}),F={fetchReports:l.a.fetchWidgetReports,updateTab:l.a.changeWidgetTab},Q=Object(o.c)()(Object(c.b)(P,F)(class extends i.a.Component{constructor(){super(...arguments),this.getTabTitle=(e=>{const{t:t}=this.props;return t("group_by.top",{groupBy:W(e)||""})}),this.getDetailsLinkTitle=(e=>{const{t:t}=this.props;return t("group_by.all",{groupBy:W(e)||""})}),this.buildDetailsLink=(()=>{const{currentQuery:e}=this.props,t=Object(p.b)(e).group_by;return`/aws?${Object(p.a)({group_by:t,order_by:{total:"desc"}})}`}),this.renderTab=(e=>{const{tabs:t,topItems:a}=this.props,n=e.id;return i.a.createElement(C,{idKey:W(n),report:t},({items:e})=>e.map(e=>i.a.createElement(k,{key:e.id,formatOptions:a.formatOptions,formatValue:U.b,label:e.label.toString(),totalValue:t.total.value,units:e.units,value:e.total})))}),this.handleTabChange=(e=>{this.props.updateTab(this.props.id,e)})}componentDidMount(){const{fetchReports:e,widgetId:t}=this.props;e(t)}render(){const{t:e,titleKey:t,trend:a,details:n,current:r,previous:s,availableTabs:o,currentTab:c,reportType:l,status:u}=this.props,d=new Date,p=q()(d),m=z()(d,"Do"),h=z()(V()(d),"Do"),b=e(t,{endDate:m,month:p,startDate:h}),g=e("aws_dashboard.widget_subtitle",{endDate:m,month:p,startDate:h,count:K()(d)}),v=e(n.labelKey,{context:n.labelKeyContext}),f="cost"===l&&i.a.createElement(R.a,{to:this.buildDetailsLink()},this.getDetailsLinkTitle(c)),y=e(a.titleKey),E=Object(L.f)(r,a.type),O=Object(L.f)(s,a.type);return i.a.createElement(D,{title:b,subTitle:g,detailsLink:f,status:u},i.a.createElement(j,{report:r,formatValue:U.b,label:v,formatOptions:n.formatOptions}),i.a.createElement(_,{title:y,currentData:E,formatDatumValue:U.b,formatDatumOptions:a.formatOptions,previousData:O}),i.a.createElement(B.a,{tabs:o.map(e=>({id:e,label:this.getTabTitle(e),content:this.renderTab})),selected:c,onChange:this.handleTabChange}))}})),H=Object(u.a)(e=>({widgets:l.c.selectCurrentWidgets(e)})),G=Object(o.c)()(Object(c.b)(H,{openProvidersModal:d.a.openProvidersModal})(({t:e,openProvidersModal:t,widgets:a})=>i.a.createElement("div",null,i.a.createElement(n.a,{gutter:"md"},a.map(e=>i.a.createElement(r.a,{xl:4,lg:6,key:e},i.a.createElement(Q,{widgetId:e})))))));t.a=G},549:function(e,t,a){"use strict";(function(e){var n=a(43),r=a(542);t.a=Object(n.hot)(e)(r.a)}).call(this,a(42)(e))},550:function(e,t,a){"use strict";(function(e){var n=a(43),r=a(546);t.a=Object(n.hot)(e)(r.a)}).call(this,a(42)(e))},694:function(e,t,a){"use strict";a.r(t),function(e){var n=a(43),r=a(545);t.default=Object(n.hot)(e)(r.a)}.call(this,a(42)(e))}}]);
//# sourceMappingURL=2778fce7ae219a7457bc.bundle.js.map