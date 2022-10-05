"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[975],{56804:()=>{},34310:(e,t,a)=>{a.d(t,{F:()=>v,m:()=>p});var n=a(65834),s=a(93952),r=a(92950),o=a.n(r),c=a(74806),l=a(65048),i=a(94377),u=a(37530);const d={currencySelector:{display:"flex",alignItems:"center"},currencyLabel:{marginBottom:0,marginRight:a(32412).ZP.var,whiteSpace:"nowrap"}},p=[{label:s.Z.currencyOptions,value:"AUD"},{label:s.Z.currencyOptions,value:"CAD"},{label:s.Z.currencyOptions,value:"CHF"},{label:s.Z.currencyOptions,value:"CNY"},{label:s.Z.currencyOptions,value:"DKK"},{label:s.Z.currencyOptions,value:"EUR"},{label:s.Z.currencyOptions,value:"GBP"},{label:s.Z.currencyOptions,value:"HKD"},{label:s.Z.currencyOptions,value:"JPY"},{label:s.Z.currencyOptions,value:"NOK"},{label:s.Z.currencyOptions,value:"NZD"},{label:s.Z.currencyOptions,value:"SEK"},{label:s.Z.currencyOptions,value:"SGD"},{label:s.Z.currencyOptions,value:"USD"},{label:s.Z.currencyOptions,value:"ZAR"}];class m extends o().Component{constructor(){super(...arguments),this.defaultState={isSelectOpen:!1},this.state=Object.assign({},this.defaultState),this.getSelect=()=>{const{isDisabled:e}=this.props,{isSelectOpen:t}=this.state;(0,u.t_)();const a=(0,u.zC)(),s=this.getSelectOptions(),r=s.find((e=>e.value===a));return o().createElement(n.Select,{className:"currencyOverride",id:"currencySelect",isDisabled:e,isOpen:t,onSelect:this.handleSelect,onToggle:this.handleToggle,selections:r,variant:n.SelectVariant.single},s.map((e=>o().createElement(n.SelectOption,{key:e.value,value:e}))))},this.getSelectOptions=()=>{const{intl:e}=this.props,t=[];return p.map((a=>{t.push({toString:()=>e.formatMessage(a.label,{units:a.value}),value:a.value})})),t},this.handleSelect=(e,t)=>{const{onSelect:a}=this.props;(0,u.NW)(t.value),this.setState({isSelectOpen:!1},(()=>{a&&a(t.value)}))},this.handleToggle=e=>{this.setState({isSelectOpen:e})}}render(){const{intl:e}=this.props;return(0,u.eu)(),o().createElement("div",{style:d.currencySelector},o().createElement(n.Title,{headingLevel:"h2",size:"md",style:d.currencyLabel},e.formatMessage(s.Z.currency)),this.getSelect())}}const f=(0,i.X1)((()=>({}))),g=(0,l.connect)(f,{})(m),v=(0,c.ZP)(g)},8837:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(55189),s=a(99699),r=a(39173),o=a(92950),c=a.n(o),l=a(5977),i=a(65834),u=a(66646),d=a(93952),p=a(74806);class m extends c().Component{render(){const{intl:e,showReload:t=!0}=this.props;return c().createElement(i.EmptyState,{variant:i.EmptyStateVariant.large,className:"pf-m-redhat-font"},c().createElement(i.EmptyStateIcon,{icon:u.Yw}),c().createElement(i.Title,{headingLevel:"h5",size:"lg"},e.formatMessage(d.Z.noDataStateTitle)),c().createElement(i.EmptyStateBody,null,e.formatMessage(d.Z.noDataStateDesc)),t&&c().createElement(i.Button,{variant:"primary",onClick:()=>window.location.reload()},e.formatMessage(d.Z.noDataStateRefresh)))}}const f=(0,p.ZP)((0,l.EN)(m)),g=(0,l.EN)((({showReload:e,title:t})=>c().createElement(c().Fragment,null,t&&c().createElement(s.Z,null,c().createElement(r.Z,{title:t})),c().createElement(n.Z,null,c().createElement(f,{showReload:e})))))},19569:(e,t,a)=>{a.d(t,{Z:()=>D});var n=a(55189),s=a(99699),r=a(39173),o=a(92950),c=a.n(o),l=a(5977),i=a(65834),u=a(15265),d=a(7081),p=a(93952),m=a(74806);const f=a(84735),g=(0,m.ZP)((({className:e,intl:t})=>c().createElement("img",{className:`cost-icon ${e}`,src:f,alt:t.formatMessage(p.Z.costManagement),"aria-hidden":"true"})));var v=a(64797),y=a(98499);const h={iconSpacer:{marginLeft:a(73861).ZP.value},viewSources:{marginTop:y.ZP.value}};class Z extends c().Component{constructor(){super(...arguments),this.getDocLink=(e,t)=>{const{intl:a}=this.props;return c().createElement("a",{href:a.formatMessage(t),rel:"noreferrer",target:"_blank"},a.formatMessage(e),c().createElement("span",{style:h.iconSpacer},c().createElement(u.LA,null)))},this.getRouteToSources=()=>`${(0,v.I)()}/settings/sources`}render(){const{intl:e,providerType:t}=this.props;let a,n,s,r=p.Z.noProvidersStateOverviewDesc,o=p.Z.noProvidersStateOverviewTitle;switch(t){case"aws":r=p.Z.noProvidersStateAwsDesc,o=p.Z.noProvidersStateAwsTitle;break;case"azure":r=p.Z.noProvidersStateAzureDesc,o=p.Z.noProvidersStateAzureTitle;break;case"gcp":r=p.Z.noProvidersStateGcpDesc,o=p.Z.noProvidersStateGcpTitle;break;case"ibm":r=p.Z.noProvidersStateIbmDesc,o=p.Z.noProvidersStateIbmTitle;break;case"ocp":r=p.Z.noProvidersStateOcpDesc,a=p.Z.docsAddOcpSources,s=p.Z.noProvidersStateOcpAddSources,o=p.Z.noProvidersStateOcpTitle;break;default:n=g}return c().createElement(i.EmptyState,{variant:i.EmptyStateVariant.large,className:"pf-m-redhat-font"},c().createElement(i.EmptyStateIcon,{icon:n||d.wl}),c().createElement(i.Title,{headingLevel:"h1",size:"lg"},e.formatMessage(o)),c().createElement(i.EmptyStateBody,null,e.formatMessage(r)),a&&s?c().createElement("div",{style:h.viewSources},this.getDocLink(s,a)):c().createElement(i.Button,{variant:"primary",component:"a",href:this.getRouteToSources()},e.formatMessage(p.Z.noProvidersStateGetStarted)))}}const b=(0,m.ZP)((0,l.EN)(Z)),D=(0,l.EN)((({providerType:e,title:t})=>c().createElement(c().Fragment,null,t&&c().createElement(s.Z,null,c().createElement(r.Z,{title:t})),c().createElement(n.Z,null,c().createElement(b,{providerType:e})))))},77039:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(78677),s=a(63722);const r={padding:8},o={area:Object.assign({},r),axis:Object.assign({},r),bar:Object.assign({},r),boxplot:Object.assign({},r),candlestick:Object.assign({},r),chart:Object.assign({},r),errorbar:Object.assign({},r),group:Object.assign({},r),legend:{},line:Object.assign({},r),pie:Object.assign({},r),scatter:Object.assign({},r),stack:Object.assign({},r),tooltip:{},voronoi:Object.assign({},r)},c=(0,n.hr)(s.nz.default,o)},11001:(e,t,a)=>{a.d(t,{uL:()=>w,Y_:()=>S,Dd:()=>M,MN:()=>O,pZ:()=>E,Fs:()=>_,Q7:()=>T,GN:()=>k,nB:()=>g,Qw:()=>v,zJ:()=>y});var n=a(32004),s=a(55855),r=a(43703),o=a(4135),c=a(95147),l=a(95570),i=a(93952),u=a(60114);function d({forecast:e,sortDirection:t=0,sortKey:a="date"}){return(0,u.D)(function({forecast:e}){if(!e)return[];const t=new Map,a=e=>{e&&e.values&&e.values.forEach((e=>{const a=e.date,n=t.get(a);n?t.set(a,Object.assign(Object.assign({},n),{date:a,cost:p(e,"cost",n),infrastructure:p(e,"infrastructure",n),supplementary:p(e,"supplementary",n)})):t.set(a,{date:a,cost:p(e,"cost"),infrastructure:p(e,"infrastructure"),supplementary:p(e,"supplementary")})}));for(const t in e)if(e[t]instanceof Array)return e[t].forEach(a)};return e&&e.data&&e.data.forEach(a),Array.from(t.values())}({forecast:e,sortDirection:t,sortKey:a}),{key:a,direction:t})}function p(e,t,a){return{confidence_max:{value:a?a[t].confidence_max.value:0+e[t]&&e[t].confidence_max?e[t].confidence_max.value:0,units:e[t]&&e[t].confidence_max?e[t].confidence_max.units:"USD"},confidence_min:{value:a?a[t].confidence_min.value:0+e[t]&&e[t].confidence_min?e[t].confidence_min.value:0,units:e[t]&&e[t].confidence_min?e[t].confidence_min.units:"USD"},pvalues:{value:e[t]&&e[t].pvalues?Number(e[t].pvalues.value):0,units:e[t]&&e[t].pvalues?e[t].pvalues.units:null},rsquared:{value:e[t]&&e[t].rsquared?Number(e[t].rsquared.value):0,units:e[t]&&e[t].rsquared?e[t].rsquared.units:null},total:{value:a?a[t].total.value:0+e[t]&&e[t].total?e[t].total.value:0,units:e[t]&&e[t].total?e[t].total.units:"USD"}}}var m=a(31447),f=a(99291);function g(e,t,a="cost",n="total"){if(!e)return[];const s=d({forecast:e,sortKey:"date",sortDirection:1});let r;return r=0===t?s.reduce(((e,t)=>{const s=e.length?e[e.length-1].y:0;return[...e,h(s+t[a][n].value,t)]}),[]):s.map((e=>h(e[a][n].value,e))),D(r,t)}function v(e,t,a="cost",n="total"){if(!e)return[];const s=d({forecast:e,sortKey:"date",sortDirection:1});let r;return r=0===t?s.reduce(((e,t)=>{const s=e.length?e[e.length-1].y:t[a][n].value,r=e.length?e[e.length-1].y0:t[a][n].value;return[...e,Z(s+t[a].confidence_max.value,r+t[a].confidence_min.value,t)]}),[]):s.map((e=>Z(e[a].confidence_max.value,e[a].confidence_min.value,e))),D(r,t)}function y(e,t,a="date",n="cost",s="total"){if(!e)return[];const r={idKey:a,report:e,sortKey:"id",sortDirection:1},o=(0,m.R)(r);let c;return c=0===t?o.reduce(((e,t)=>{const r=e.length?e[e.length-1].y:0,o=t[n][s]?t[n][s].value:t[n].value;return[...e,b(r+o,t,a,n,s)]}),[]):o.map((e=>b(e[n][s]?e[n][s].value:e[n].value,e,a,n,s))),"date"===a?D(c,t):c}function h(e,t,a="cost",n="total"){const r=(0,s.Z)(new Date(t.date+"T00:00:00")),o=T(e)?parseFloat(e.toFixed(2)):k(e)?e:0;return{x:r,y:null===e?null:o,key:t.date,units:t[a]&&t[a][n]?t[a][n].units:void 0}}function Z(e,t,a,n="cost",r="total"){const o=(0,s.Z)(new Date(a.date+"T00:00:00")),c=T(e)?parseFloat(e.toFixed(2)):k(e)?e:0,l=T(t)?parseFloat(t.toFixed(2)):k(t)?t:0;return{x:o,y:null===e?null:c,y0:null===t?null:l,key:a.date,units:a[n]&&a[n][r]?a[n][r].units:void 0}}function b(e,t,a="date",n="cost",r="total"){const o="date"===a?(0,s.Z)(new Date(t.id+"T00:00:00")):t.label,c=T(e)?parseFloat(e.toFixed(2)):k(e)?e:0;return{x:o,y:null===e?null:c,key:t.id,name:t.label?t.label:t.id,units:t[n]?t[n][r]?t[n][r].units:t[n].units:void 0}}function D(e,t){const a=[];if(!e||0===e.length)return a;const n=new Date(e[0].key+"T00:00:00"),l=new Date(e[e.length-1].key+"T00:00:00");let i=(0,r.Z)(n);for(let e=i.getDate();e<n.getDate();e++){i.setDate(e);const t=(0,c.Z)(i,"yyyy-MM-dd");a.push(b(null,{id:t},"date",null))}a.push(...e),i=new Date(l);for(let e=i.getDate()+1;e<=(0,o.Z)(l).getDate();e++){i.setDate(e);const t=(0,c.Z)(i,"yyyy-MM-dd");a.push(b(null,{id:t},"date",null))}return function(e,t){const a=[];if(!e||0===e.length)return a;const n=new Date(e[0].key+"T00:00:00"),l=new Date(e[e.length-1].key+"T00:00:00"),i=(0,r.Z)(n);let u;for(let n=i.getDate();n<=(0,o.Z)(l).getDate();n++){i.setDate(n);const r=(0,c.Z)(i,"yyyy-MM-dd"),o=e.find((e=>e.key===r));o?a.push(o):u&&a.push(Object.assign(Object.assign({},u),{key:r,x:(0,s.Z)(new Date(r+"T00:00:00"))})),o&&(u=0===t?o:{key:r,x:(0,s.Z)(new Date(r+"T00:00:00")),y:null})}return a}(a,t)}function S(e,t=!0,a=!1,n=0){const[s,c]=function(e,t=0){if(!e||!e.length){const e=new Date;return t&&(e.setDate(1),e.setMonth(e.getMonth()-t)),[(0,r.Z)(e),e]}let a=0;for(let t=a;t<e.length;t++)if(e[t].y&&null!==e[t].y){a=t;break}let n=e.length-1;for(let t=n;t>=0;t--)if(e[t].y&&null!==e[t].y){n=t;break}return[new Date(e[a].key+"T00:00:00"),new Date(e[n].key+"T00:00:00")]}(e,n);if(t&&s.setDate&&s.setDate(1),a&&s.setDate){const e=(0,o.Z)(s).getDate();c.setDate(e)}return[s,c]}function O(e){let t=0;return e&&e.length&&e.forEach((e=>{e.y>t&&(t=e.y)})),t}function M(e){let t=-1,a=-1;return e&&e.length&&e.forEach((e=>{const n=void 0!==e.y0?Math.max(e.y,e.y0):e.y,s=void 0!==e.y0?Math.min(e.y,e.y0):e.y;n>t&&(t=n),(-1===a||s<a)&&null!==s&&(a=s)})),{max:t,min:a}}function E(e){return function(t,a=null,s={}){const r=(0,f.ZV)(a);return r?n.N.formatMessage(i.Z.unitTooltips,{units:r,value:e(t,a,s)}):(0,f.xG)(t,a,s)}}function w(e,t=i.Z.chartCostLegendLabel,a=!1,r=!1,o=0,u=i.Z.chartNoData){if(!e||!e.length)return n.N.formatMessage(u);const[d,p]=S(e,a,r,o),m=Number((0,c.Z)(d,"M"))-1,f=(0,l.Z)(p);return n.N.formatMessage(t,{count:(0,s.Z)(p),startDate:(0,c.Z)(d,"d"),endDate:(0,c.Z)(p,"d"),month:m,year:f})}function _(e,t=i.Z.chartUsageLegendLabel,a=!1,n=!1,s=0,r=i.Z.chartNoData){return w(e,t,a,n,s,r)}function k(e){return Number(e)===e&&e%1==0&&e>=0}function T(e){return Number(e)===e&&e%1!=0&&e>=0}},29516:(e,t,a)=>{a.d(t,{E0:()=>f,TW:()=>m,Yt:()=>g,bC:()=>c,ge:()=>l,nV:()=>p,oX:()=>i,pP:()=>d,zj:()=>u});var n=a(84154),s=a(32004),r=a(93952),o=a(11001);const c=e=>{const t=[];return e&&e.map((e=>{t.push(e.childName)})),t},l=(e,t)=>{const a={x:[1,31]};let n=-1,s=-1;e&&e.forEach(((e,a)=>{if(!g(t,a)&&e.data&&0!==e.data.length){const{max:t,min:a}=(0,o.Dd)(e.data);n=Math.max(n,t),s=-1===s?a:Math.min(s,a)}}));const r=.1*n,c=n>0?Math.ceil(n+r):0,l=s>0?Math.max(0,Math.floor(s-r)):0,i=l>0?l:0;return c>0&&(a.y=[i,c]),a},i=(e,t,a=!1)=>{if(e)return e.map(((e,s)=>Object.assign(Object.assign(Object.assign({childName:e.childName},e.legendItem),a&&{name:e.legendItem.tooltip}),(0,n.X)(t.has(s)))))},u=(e,t,a)=>{const n=(0,o.pZ)(t),c=void 0!==e.y&&null!==e.y?n(e.y,e.units,a):void 0,l=void 0!==e.y0&&null!==e.y0?n(e.y0,e.units,a):void 0;return void 0!==c&&void 0!==l?s.N.formatMessage(r.Z.chartCostForecastConeTooltip,{value0:l,value1:c}):void 0!==c?c:s.N.formatMessage(r.Z.chartNoData)},d=(e,t)=>{const a=e,{ResizeObserver:n}=window;let s,r;if(a&&n){const e=new n((e=>{window.requestAnimationFrame((()=>{Array.isArray(e)&&e.length&&t()}))}));e.observe(a),r=()=>e.unobserve(a)}else t(),window.addEventListener("resize",t),r=()=>window.removeEventListener("resize",t),s=insights.chrome.on("NAVIGATION_TOGGLE",setTimeout(t,500));return()=>{r&&r(),s&&s()}},p=(e,t,a)=>{const n=new Set(t);return n.delete(a)||n.add(a),n},m=(e,t)=>{const a=[];return e&&e.forEach(((e,n)=>{(g(t,n)||e.data&&0===e.data.length)&&a.push(n)})),a.length!==(e?e.length:0)},f=(e,t,a)=>{if(a&&a.length)for(let n,s=t.keys();!(n=s.next()).done;){let t,s;for(const e of a)if(e.childName){t=e.childName;break}for(const t of e[n.value].data)if(t.childName){s=t.childName;break}if(s&&t&&s===t)return!0}return!1},g=(e,t)=>e.has(t)},29886:(e,t,a)=>{a.d(t,{T:()=>v});var n=a(65834),s=a(93952),r=a(92950),o=a.n(r),c=a(74806),l=a(65048),i=a(94377),u=a(37530);const d={costSelector:{display:"flex",alignItems:"center"},costLabel:{marginBottom:0,marginRight:a(32412).ZP.var,whiteSpace:"nowrap"}},p=[{desc:s.Z.costTypeAmortizedDesc,label:s.Z.costTypeAmortized,value:"savingsplan_effective_cost"},{desc:s.Z.costTypeBlendedDesc,label:s.Z.costTypeBlended,value:"blended_cost"},{desc:s.Z.costTypeUnblendedDesc,label:s.Z.costTypeUnblended,value:"unblended_cost"}];class m extends o().Component{constructor(){super(...arguments),this.defaultState={isSelectOpen:!1},this.state=Object.assign({},this.defaultState),this.getSelect=()=>{const{costType:e,isDisabled:t}=this.props,{isSelectOpen:a}=this.state;(0,u.tL)();const s=this.getSelectOptions(),r=s.find((t=>t.value===e));return o().createElement(n.Select,{className:"selectOverride",id:"costTypeSelect",isDisabled:t,isOpen:a,onSelect:this.handleSelect,onToggle:this.handleToggle,selections:r,variant:n.SelectVariant.single},s.map((e=>o().createElement(n.SelectOption,{description:e.desc,key:e.value,value:e}))))},this.getSelectOptions=()=>{const{intl:e}=this.props,t=[];return p.map((a=>{t.push({desc:e.formatMessage(a.desc),toString:()=>e.formatMessage(a.label),value:a.value})})),t},this.handleSelect=(e,t)=>{const{onSelect:a}=this.props;(0,u.M1)(t.value),this.setState({isSelectOpen:!1},(()=>{a&&a(t.value)}))},this.handleToggle=e=>{this.setState({isSelectOpen:e})}}render(){const{intl:e}=this.props;return(0,u.eu)(),o().createElement("div",{style:d.costSelector},o().createElement(n.Title,{headingLevel:"h3",size:"md",style:d.costLabel},e.formatMessage(s.Z.costTypeLabel)),this.getSelect())}}const f=(0,i.X1)((()=>({}))),g=(0,l.connect)(f,{})(m),v=(0,c.ZP)(g)},94676:(e,t,a)=>{a.d(t,{BV:()=>s,Bj:()=>l,D2:()=>i,JY:()=>u,Mg:()=>p,at:()=>c,g8:()=>d,rL:()=>m});const n=(e,t)=>{let a;if(e&&e.data)for(const n of e.data)if(n.infrastructure&&n.infrastructure.uuid===t){a=n;break}return a},s=(e,t)=>{if(!e)return e;const a=e.data.filter((e=>e.source_type.toLowerCase()===t)),n=Object.assign(Object.assign({},e.meta),{count:a.length});return Object.assign(Object.assign({},e),{meta:n,data:a})},r=(e,t)=>{let a=!1;if(e&&e.data)for(const n of e.data)if(n[t]){a=!0;break}return a},o=(e,t,a)=>{let s=!1;if(e&&e.data)for(const r of e.data){const e=n(t,r.uuid);if(e&&e[a]){s=!0;break}}return s},c=(e,t)=>o(e,t,"current_month_data"),l=(e,t)=>o(e,t,"has_data"),i=(e,t)=>o(e,t,"previous_month_data"),u=(e,t)=>((e,t)=>{let a=!1;if(e&&e.data)for(const s of e.data)if(n(t,s.uuid)){a=!0;break}return a})(e,t),d=e=>r(e,"current_month_data"),p=e=>r(e,"has_data"),m=e=>r(e,"previous_month_data")},31447:(e,t,a)=>{a.d(t,{R:()=>c,c:()=>u});var n=a(32004),s=a(93952),r=a(60114),o=a(45997);function c({idKey:e,isDateMap:t,report:a,sortDirection:n=0,sortKey:s="date"}){return(0,r.D)(u({idKey:e,isDateMap:t,report:a,sortDirection:n,sortKey:s}),{key:s,direction:n})}function l(e,t,a){return{markup:{value:(a&&a[t]&&a[t].markup?a[t].markup.value:0)+(e[t]&&e[t].markup?e[t].markup.value:0),units:e&&e[t]&&e[t].markup?e[t].markup.units:"USD"},raw:{value:(a&&a[t]&&a[t].raw?a[t].raw.value:0)+(e[t]&&e[t].raw?e[t].raw.value:0),units:e&&e[t]&&e[t].raw?e[t].raw.units:"USD"},total:{value:(a&&a[t]&&a[t].total?a[t].total.value:0)+(e[t]&&e[t].total?Number(e[t].total.value):0),units:e&&e[t]&&e[t].total?e[t].total.units:null},usage:{value:(a&&a[t]&&a[t].usage?a[t].usage.value:0)+(e[t]&&e[t].usage?Number(e[t].usage.value):0),units:e&&e[t]&&e[t].usage?e[t].usage.units:null}}}function i(e,t){return{capacity:{value:(t&&t.capacity?t.capacity.value:0)+(e.capacity?e.capacity.value:0),units:e&&e.capacity?e.capacity.units:"Core-Hours"},limit:{value:(t&&t.limit?t.limit.value:0)+(e.limit?e.limit.value:0),units:e&&e.limit?e.limit.units:"Core-Hours"},request:{value:(t&&t.request?t.request.value:0)+(e.request?e.request.value:0),units:e&&e.request?e.request.units:"Core-Hours"},usage:{value:(t&&t.usage?t.usage.value:0)+(e.usage?e.usage.value:0),units:e&&e.usage?e.usage.units:"Core-Hours"}}}function u({isDateMap:e=!1,report:t,idKey:a}){if(!t)return[];const r=new Map,c=u=>{const d=u.type;u&&u.values&&u.values.forEach((c=>{let u=c.id?c.id:c[a];u||(u=c.date);const p=`${u}${"date"!==a&&"cluster"!==a&&c.cluster?`-${c.cluster}`:""}`,m=c.clusters&&c.clusters.length>0?c.clusters[0]:void 0,f=m||c.cluster,g=c.clusters?c.clusters:[],v=c.date,y=c.delta_percent?c.delta_percent:0,h=c.delta_value?c.delta_value:0,Z=c.source_uuid?c.source_uuid:[];let b;if(t.meta&&t.meta.others&&("Other"===u||"Others"===u))b=n.N.formatMessage(s.Z.chartOthers,{count:t.meta.others});else{const e=function({idKey:e,report:t,value:a}){let n=String(e);if(t.meta&&t.meta.group_by){const s=t.meta.group_by;for(const t of Object.keys(s))if(t.indexOf(o.P)){const t=o.P+e;a.hasOwnProperty(t)&&(n=t)}}return n}({report:t,idKey:a,value:c});b="org_entities"===e&&c.alias?c.alias:"account"===e&&c.account_alias?c.account_alias:"cluster"===e&&m?m:c[e]instanceof Object?c[e].value:c[e],void 0!==b&&0!==b.trim().length||(b=c.alias&&c.alias.trim().length>0?c.alias:c[a])}if(e){const e=Object.assign(Object.assign({},i(c)),{cluster:f,clusters:g,cost:l(c,"cost"),date:v,delta_percent:y,delta_value:h,id:u,infrastructure:l(c,"infrastructure"),label:b,source_uuid:Z,supplementary:l(c,"supplementary"),type:d}),t=r.get(p);if(t)t.set(v,e);else{const t=new Map;t.set(v,e),r.set(p,t)}}else{const e=r.get(p);e?r.set(p,Object.assign(Object.assign(Object.assign({},e),i(c,e)),{cluster:f,clusters:g,date:v,delta_percent:y,delta_value:h,cost:l(c,"cost",e),id:u,infrastructure:l(c,"infrastructure",e),label:b,source_uuid:Z,supplementary:l(c,"supplementary",e),type:d})):r.set(p,Object.assign(Object.assign({},i(c)),{cluster:f,clusters:g,cost:l(c,"cost"),date:v,delta_percent:y,delta_value:h,id:u,infrastructure:l(c,"infrastructure"),label:b,source_uuid:Z,supplementary:l(c,"supplementary"),type:d}))}}));for(const e in u)if(u[e]instanceof Array)return u[e].forEach(c)};return t&&t.data&&t.data.forEach(c),Array.from(r.values())}},33307:(e,t,a)=>{a.d(t,{Gg:()=>v,J4:()=>m,Tf:()=>d,Y:()=>p,mI:()=>h,tw:()=>f,vI:()=>y,x2:()=>u});var n=a(32004),s=a(78966),r=a(95147),o=a(43703),c=a(55855),l=a(4135),i=a(93952);function u(e=0,t=0,a=0){const n=new Date;return n.setHours(e),n.setMinutes(t),n.setSeconds(a),n}function d(e=i.Z.noDataForDate,t=1){const a=u();t&&a.setMonth(a.getMonth()-t);const l=(0,s.Z)(a),d=(0,r.Z)(a,"d"),p=(0,r.Z)((0,o.Z)(a),"d");return n.N.formatMessage(e,{count:(0,c.Z)(a),startDate:p,endDate:d,month:l})}function p(e,t=i.Z.forDate,a=1){const l=u();a&&l.setMonth(l.getMonth()-a);const d=(0,s.Z)(l),p=(0,r.Z)(l,"d"),m=(0,r.Z)((0,o.Z)(l),"d");return n.N.formatMessage(t,{value:e,count:(0,c.Z)(l),startDate:m,endDate:p,month:d})}function m(e=i.Z.sinceDate){const t=u(),a=(0,s.Z)(t),l=(0,r.Z)(t,"d"),d=(0,r.Z)((0,o.Z)(t),"d");return n.N.formatMessage(e,{count:(0,c.Z)(t),startDate:d,endDate:l,month:a})}function f(){return function(e){const t=u();return e&&(t.setDate(1),t.setMonth(t.getMonth()-e)),{start_date:(0,r.Z)((0,o.Z)(t),"yyyy-MM-dd"),end_date:(0,r.Z)(e?(0,l.Z)(t):t,"yyyy-MM-dd")}}(0)}function g(e){const t=new Date,a=new Date;return a.setDate(a.getDate()-e),{end_date:(0,r.Z)(t,"yyyy-MM-dd"),start_date:(0,r.Z)(a,"yyyy-MM-dd")}}function v(){return g(30)}function y(){return g(60)}function h(){return g(90)}},57279:(e,t,a)=>{a.d(t,{N:()=>n});const n={xs:"16%",sm:"33%",md:"66%",lg:"100%"}},60114:(e,t,a)=>{function n(e,t){return"string"==typeof e?e:e[t.key]}function s(e,t){const{direction:a=0}=t||{};return[...e].sort(((e,s)=>{const r=n(0===a?e:s,t),o=n(0===a?s:e,t);return r>o?-1:r<o?1:0}))}a.d(t,{D:()=>s})},45785:(e,t,a)=>{a.d(t,{Es:()=>g,FE:()=>m,FW:()=>c,HC:()=>u,KT:()=>r,Rt:()=>v,Sv:()=>p,Xd:()=>i,hn:()=>l,mn:()=>y,n9:()=>o,ot:()=>d,tt:()=>f});const n=(e,t)=>{let a=!1;if(e&&Array.isArray(e.data)){const n=e.data.find((e=>e.type===t));a=n&&n.access}else a=e&&!0===e.data;return a},s=e=>{let t=!1;return e&&e.meta&&(t=e.meta.count>0),t},r=e=>n(e,"aws"),o=(e,t)=>r(e)&&s(t),c=e=>n(e,"azure"),l=(e,t)=>c(e)&&s(t),i=e=>n(e,"oci"),u=(e,t)=>i(e)&&s(t),d=e=>n(e,"cost_model"),p=e=>n(e,"gcp"),m=(e,t)=>n(e,"gcp")&&s(t),f=e=>p(e),g=(e,t)=>f(e)&&s(t),v=e=>n(e,"ocp"),y=(e,t)=>v(e)&&s(t)},84735:(e,t,a)=>{e.exports=a.p+"6c64594e3aaa32a18532.svg"}}]);
//# sourceMappingURL=e9edaae95b721a3384ef.bundle.js.map