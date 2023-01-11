"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[8490],{84717:(e,t,a)=>{a.d(t,{H:()=>r});var n=a(80129);function r(e){return(0,n.stringify)(e,{encode:!1,indices:!1})}},6450:(e,t,a)=>{a.d(t,{F:()=>h,m:()=>d});var n=a(54785),r=a(97027),s=a(92950),o=a.n(s),c=a(74806),l=a(77760),i=a(1156),u=a(64703);const m={currencySelector:{display:"flex",alignItems:"center"},currencyLabel:{marginBottom:0,marginRight:a(32412).ZP.var,whiteSpace:"nowrap"}},d=[{label:r.Z.currencyOptions,value:"AUD"},{label:r.Z.currencyOptions,value:"CAD"},{label:r.Z.currencyOptions,value:"CHF"},{label:r.Z.currencyOptions,value:"CNY"},{label:r.Z.currencyOptions,value:"DKK"},{label:r.Z.currencyOptions,value:"EUR"},{label:r.Z.currencyOptions,value:"GBP"},{label:r.Z.currencyOptions,value:"HKD"},{label:r.Z.currencyOptions,value:"JPY"},{label:r.Z.currencyOptions,value:"NOK"},{label:r.Z.currencyOptions,value:"NZD"},{label:r.Z.currencyOptions,value:"SEK"},{label:r.Z.currencyOptions,value:"SGD"},{label:r.Z.currencyOptions,value:"USD"},{label:r.Z.currencyOptions,value:"ZAR"}];class g extends o().Component{constructor(){super(...arguments),this.defaultState={isSelectOpen:!1},this.state=Object.assign({},this.defaultState),this.getSelect=()=>{const{currency:e,isDisabled:t}=this.props,{isSelectOpen:a}=this.state,r=this.getSelectOptions(),s=r.find((t=>t.value===e));return o().createElement(n.Select,{className:"currencyOverride",id:"currencySelect",isDisabled:t,isOpen:a,onSelect:this.handleSelect,onToggle:this.handleToggle,selections:s,variant:n.SelectVariant.single},r.map((e=>o().createElement(n.SelectOption,{key:e.value,value:e}))))},this.getSelectOptions=()=>{const{intl:e}=this.props,t=[];return d.map((a=>{t.push({toString:()=>e.formatMessage(a.label,{units:a.value}),value:a.value})})),t},this.handleSelect=(e,t)=>{const{onSelect:a}=this.props;(0,u.NW)(t.value),this.setState({isSelectOpen:!1},(()=>{a&&a(t.value)}))},this.handleToggle=e=>{this.setState({isSelectOpen:e})}}render(){const{intl:e}=this.props;return(0,u.eu)(),o().createElement("div",{style:m.currencySelector},o().createElement(n.Title,{headingLevel:"h2",size:"md",style:m.currencyLabel},e.formatMessage(r.Z.currency)),this.getSelect())}}const p=(0,i.X1)((()=>({}))),v=(0,l.connect)(p,{})(g),h=(0,c.ZP)(v)},55672:(e,t,a)=>{a.d(t,{J:()=>n.Z});var n=a(83819)},83819:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(14748),r=a(89376),s=a(39173),o=a(92950),c=a.n(o),l=a(54785),i=a(7081),u=a(97027),m=a(74806);class d extends c().Component{render(){const{intl:e,showReload:t=!0}=this.props;return c().createElement(l.EmptyState,{variant:l.EmptyStateVariant.large,className:"pf-m-redhat-font"},c().createElement(l.EmptyStateIcon,{icon:i.wl}),c().createElement(l.Title,{headingLevel:"h5",size:"lg"},e.formatMessage(u.Z.noDataStateTitle)),c().createElement(l.EmptyStateBody,null,e.formatMessage(u.Z.noDataStateDesc)),t&&c().createElement(l.Button,{variant:"primary",onClick:()=>window.location.reload()},e.formatMessage(u.Z.noDataStateRefresh)))}}const g=(0,m.ZP)(d),p=({showReload:e,title:t})=>c().createElement(c().Fragment,null,t&&c().createElement(r.Z,null,c().createElement(s.Z,{title:t})),c().createElement(n.ZP,null,c().createElement(g,{showReload:e})))},2985:(e,t,a)=>{a.d(t,{L:()=>O});var n=a(14748),r=a(89376),s=a(39173),o=a(92950),c=a.n(o),l=a(54785),i=a(15265),u=a(7081),m=a(1326),d=a(97027),g=a(74806);const p=a(84735),v=(0,g.ZP)((({className:e,intl:t})=>c().createElement("img",{className:`cost-icon ${e}`,src:p,alt:t.formatMessage(d.Z.costManagement),"aria-hidden":"true"})));var h=a(68025),f=a(98499);const S={iconSpacer:{marginLeft:a(43789).ZP.value},viewSources:{marginTop:f.ZP.value}};class Z extends c().Component{constructor(){super(...arguments),this.getDocLink=(e,t)=>{const{intl:a}=this.props;return c().createElement("a",{href:a.formatMessage(t),rel:"noreferrer",target:"_blank"},a.formatMessage(e),c().createElement("span",{style:S.iconSpacer},c().createElement(i.LA,null)))},this.getRouteToSources=()=>`${(0,h.I)()}/settings/sources`}render(){const{intl:e,providerType:t}=this.props;let a,n,r,s=d.Z.noProvidersStateOverviewDesc,o=d.Z.noProvidersStateOverviewTitle;switch(t){case m.l.aws:s=d.Z.noProvidersStateAwsDesc,o=d.Z.noProvidersStateAwsTitle;break;case m.l.azure:s=d.Z.noProvidersStateAzureDesc,o=d.Z.noProvidersStateAzureTitle;break;case m.l.gcp:s=d.Z.noProvidersStateGcpDesc,o=d.Z.noProvidersStateGcpTitle;break;case m.l.ibm:s=d.Z.noProvidersStateIbmDesc,o=d.Z.noProvidersStateIbmTitle;break;case m.l.ocp:s=d.Z.noProvidersStateOcpDesc,a=d.Z.docsAddOcpSources,r=d.Z.noProvidersStateOcpAddSources,o=d.Z.noProvidersStateOcpTitle;break;default:n=v}return c().createElement(l.EmptyState,{variant:l.EmptyStateVariant.large,className:"pf-m-redhat-font"},c().createElement(l.EmptyStateIcon,{icon:n||u.wl}),c().createElement(l.Title,{headingLevel:"h1",size:"lg"},e.formatMessage(o)),c().createElement(l.EmptyStateBody,null,e.formatMessage(s)),a&&r?c().createElement("div",{style:S.viewSources},this.getDocLink(r,a)):c().createElement(l.Button,{variant:"primary",component:"a",href:this.getRouteToSources()},e.formatMessage(d.Z.noProvidersStateGetStarted)))}}const y=(0,g.ZP)(Z),O=({providerType:e,title:t})=>c().createElement(c().Fragment,null,t&&c().createElement(r.Z,null,c().createElement(s.Z,{title:t})),c().createElement(n.ZP,null,c().createElement(y,{providerType:e})))},47947:(e,t,a)=>{a.d(t,{W:()=>i});var n=a(14748),r=a(89376),s=a(39173),o=a(15984),c=a(92950),l=a.n(c);const i=({title:e})=>l().createElement(l().Fragment,null,e&&l().createElement(r.Z,null,l().createElement(s.Z,{title:e})),l().createElement(n.ZP,null,l().createElement(o.Z,null)))},19727:(e,t,a)=>{a.d(t,{$3:()=>c,$9:()=>u,_s:()=>s,jl:()=>o,q7:()=>l,xh:()=>i,yB:()=>m});var n=a(9256),r=a(10066);const s=(e,t,a,n=!1)=>{const s=Object.assign({},JSON.parse(JSON.stringify(e)));t.navigate((0,r.Z)(s,t.location,n),{replace:!0})},o=(e,t,a,n=!1)=>{const s=Object.assign({},JSON.parse(JSON.stringify(e)));t.navigate((0,r.Z)(s,t.location,n),{replace:!0})},c=(e,t,a)=>{const s=(0,n.oQ)(e,a);t.navigate((0,r.Z)(s,t.location,!0),{replace:!0})},l=(e,t,a)=>{const s=(0,n.cJ)(e,a);t.navigate((0,r.Z)(s,t.location,!0),{replace:!0})},i=(e,t,a)=>{const n=Object.assign({},JSON.parse(JSON.stringify(e)));n.filter=Object.assign(Object.assign({},e.filter),{limit:a});const s=(0,r.Z)(n,t.location,!0);t.navigate(s,{replace:!0})},u=(e,t,a,n)=>{const s=a&&a.meta&&a.meta.filter&&a.meta.filter.limit?a.meta.filter.limit:10,o=n*s-s,c=Object.assign({},JSON.parse(JSON.stringify(e)));c.filter=Object.assign(Object.assign({},e.filter),{offset:o});const l=(0,r.Z)(c,t.location);t.navigate(l,{replace:!0})},m=(e,t,a,n,s)=>{const o=Object.assign({},JSON.parse(JSON.stringify(e)));o.order_by={},o.order_by[a]=n?"asc":"desc",s&&(o.order_by.date=s);const c=(0,r.Z)(o,t.location);t.navigate(c,{replace:!0})}},86482:(e,t,a)=>{var n;a.d(t,{BV:()=>s,Bj:()=>i,D2:()=>u,JY:()=>m,Mg:()=>g,at:()=>l,g8:()=>d,rL:()=>p}),function(e){e.currentMonthData="current_month_data",e.hasData="has_data",e.previousMonthData="previous_month_data"}(n||(n={}));const r=(e,t)=>{let a;if(e&&e.data)for(const n of e.data)if(n.infrastructure&&n.infrastructure.uuid===t){a=n;break}return a},s=(e,t)=>{if(!e)return e;const a=e.data.filter((e=>e.source_type.toLowerCase()===t)),n=Object.assign(Object.assign({},e.meta),{count:a.length});return Object.assign(Object.assign({},e),{meta:n,data:a})},o=(e,t)=>{let a=!1;if(e&&e.data)for(const n of e.data)if(n[t]){a=!0;break}return a},c=(e,t,a)=>{let n=!1;if(e&&e.data)for(const s of e.data){const e=r(t,s.uuid);if(e&&e[a]){n=!0;break}}return n},l=(e,t)=>c(e,t,n.currentMonthData),i=(e,t)=>c(e,t,n.hasData),u=(e,t)=>c(e,t,n.previousMonthData),m=(e,t)=>((e,t)=>{let a=!1;if(e&&e.data)for(const n of e.data)if(r(t,n.uuid)){a=!0;break}return a})(e,t),d=e=>o(e,n.currentMonthData),g=e=>o(e,n.hasData),p=e=>o(e,n.previousMonthData)},10066:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(39333);const r=(e,t,a=!1)=>(a&&(e.filter=Object.assign(Object.assign({},e.filter),{offset:0})),`${t.pathname}?${(0,n.IV)(e)}`)},45087:(e,t,a)=>{a.d(t,{$M:()=>i,Gg:()=>f,J4:()=>g,Tf:()=>m,Y:()=>d,Y$:()=>p,mI:()=>Z,p6:()=>l,tw:()=>v,vI:()=>S,x2:()=>u});var n=a(45868),r=a(95147),s=a(43703),o=a(4135),c=a(97027);const l=(e,t=!0)=>e&&t?(0,r.Z)(e,"yyyy-MM-dd"):e,i=(e,t,a=!0)=>({end_date:l(t,a),start_date:l(e,a)}),u=(e=0,t=0,a=0,n=0)=>{const r=new Date;return r.setHours(e),r.setMinutes(t),r.setSeconds(a),r.setMilliseconds(n),r},m=(e=c.Z.noDataForDate,t=1)=>{const a=u(),r=u();r.setDate(1),t&&(r.setMonth(r.getMonth()-t),a.setMonth(a.getMonth()-t));const s=n.N.formatDateTimeRange(r,a,{day:"numeric",month:"long"});return n.N.formatMessage(e,{dateRange:s})},d=(e,t=c.Z.forDate,a=1)=>{const r=u(),s=u();s.setDate(1),a&&(s.setMonth(s.getMonth()-a),r.setMonth(r.getMonth()-a));const o=n.N.formatDateTimeRange(s,r,{day:"numeric",month:"long"});return n.N.formatMessage(t,{dateRange:o,value:e})},g=(e=c.Z.sinceDate)=>{const t=u(),a=u();a.setDate(1);const r=n.N.formatDateTimeRange(a,t,{day:"numeric",month:"long"});return n.N.formatMessage(e,{dateRange:r})},p=(e,t=c.Z.breakdownTotalCostDate)=>{const a=u(),r=u();r.setDate(1);const s=n.N.formatDateTimeRange(r,a,{day:"numeric",month:"long"});return n.N.formatMessage(t,{dateRange:s,value:e})},v=(e=!0)=>((e,t=!0)=>{const a=u();return e&&(a.setDate(1),a.setMonth(a.getMonth()-e)),i((0,s.Z)(a),e?(0,o.Z)(a):a,t)})(0,e),h=(e,t=!0)=>{const a=u(),n=u();return n.setDate(n.getDate()-e),i(n,a,t)},f=(e=!0)=>h(30,e),S=(e=!0)=>h(60,e),Z=(e=!0)=>h(90,e)},84735:(e,t,a)=>{e.exports=a.p+"fonts/Cost-icon.svg"}}]);