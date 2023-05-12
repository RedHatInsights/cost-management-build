"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[7203],{84717:(e,t,a)=>{a.d(t,{H:()=>r});var n=a(80129);function r(e){return(0,n.stringify)(e,{encode:!1,indices:!1})}},6450:(e,t,a)=>{a.d(t,{F:()=>f,m:()=>d});var n=a(90154),r=a(97027),s=a(92950),l=a.n(s),c=a(74806),i=a(77760),o=a(1156),u=a(15829);const m={currencySelector:{display:"flex",alignItems:"center"},currencyLabel:{marginBottom:0,marginRight:a(32412).ZP.var,whiteSpace:"nowrap"}},d=[{label:r.Z.currencyOptions,value:"AUD"},{label:r.Z.currencyOptions,value:"CAD"},{label:r.Z.currencyOptions,value:"CHF"},{label:r.Z.currencyOptions,value:"CNY"},{label:r.Z.currencyOptions,value:"DKK"},{label:r.Z.currencyOptions,value:"EUR"},{label:r.Z.currencyOptions,value:"GBP"},{label:r.Z.currencyOptions,value:"HKD"},{label:r.Z.currencyOptions,value:"JPY"},{label:r.Z.currencyOptions,value:"NOK"},{label:r.Z.currencyOptions,value:"NZD"},{label:r.Z.currencyOptions,value:"SEK"},{label:r.Z.currencyOptions,value:"SGD"},{label:r.Z.currencyOptions,value:"USD"},{label:r.Z.currencyOptions,value:"ZAR"}];class p extends l().Component{constructor(){super(...arguments),this.defaultState={isSelectOpen:!1},this.state=Object.assign({},this.defaultState),this.getSelect=()=>{const{currency:e,isDisabled:t,showLabel:a=!0}=this.props,{isSelectOpen:r}=this.state,s=this.getSelectOptions(),c=s.find((t=>t.value===e));return l().createElement(n.Select,{className:a?"currencyOverride":void 0,id:"currencySelect",isDisabled:t,isOpen:r,onSelect:this.handleSelect,onToggle:this.handleToggle,selections:c,variant:n.SelectVariant.single},s.map((e=>l().createElement(n.SelectOption,{key:e.value,value:e}))))},this.getSelectOptions=()=>{const{intl:e}=this.props,t=[];return d.map((a=>{t.push({toString:()=>e.formatMessage(a.label,{units:a.value}),value:a.value})})),t},this.handleSelect=(e,t)=>{const{isLocalStorage:a=!0,onSelect:n}=this.props;a&&(0,u.NW)(t.value),this.setState({isSelectOpen:!1},(()=>{n&&n(t.value)}))},this.handleToggle=e=>{this.setState({isSelectOpen:e})}}render(){const{intl:e,showLabel:t=!0}=this.props;return l().createElement("div",{style:m.currencySelector},t&&l().createElement(n.Title,{headingLevel:"h2",size:n.TitleSizes.md,style:m.currencyLabel},e.formatMessage(r.Z.currency)),this.getSelect())}}const v=(0,o.X1)((()=>({}))),g=(0,i.connect)(v,{})(p),f=(0,c.ZP)(g)},41255:(e,t,a)=>{a.d(t,{J:()=>n.Z});var n=a(86374)},86374:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(90154),r=a(89376),s=a(39173),l=a(92950),c=a.n(l),i=a(7081),o=a(97027),u=a(74806);class m extends c().Component{render(){const{intl:e,showReload:t=!0}=this.props;return c().createElement(n.EmptyState,{variant:n.EmptyStateVariant.large,className:"pf-m-redhat-font"},c().createElement(n.EmptyStateIcon,{icon:i.wl}),c().createElement(n.Title,{headingLevel:"h5",size:n.TitleSizes.lg},e.formatMessage(o.Z.noDataStateTitle)),c().createElement(n.EmptyStateBody,null,e.formatMessage(o.Z.noDataStateDesc)),t&&c().createElement(n.Button,{variant:"primary",onClick:()=>window.location.reload()},e.formatMessage(o.Z.noDataStateRefresh)))}}const d=(0,u.ZP)(m),p=({showReload:e,title:t})=>c().createElement(c().Fragment,null,t&&c().createElement(r.Z,null,c().createElement(s.Z,{title:t})),c().createElement(n.PageSection,null,c().createElement(d,{showReload:e})))},86882:(e,t,a)=>{a.d(t,{L:()=>b});var n=a(90154),r=a(89376),s=a(39173),l=a(92950),c=a.n(l),i=a(15265),o=a(7081),u=a(1326),m=a(97027),d=a(74806);const p=a(84735),v=(0,d.ZP)((({className:e,intl:t})=>c().createElement("img",{className:`cost-icon ${e}`,src:p,alt:t.formatMessage(m.Z.costManagement),"aria-hidden":"true"})));var g=a(68025),f=a(98499);const S={iconSpacer:{marginLeft:a(43789).ZP.value},viewSources:{marginTop:f.ZP.value}};class h extends c().Component{constructor(){super(...arguments),this.getDocLink=(e,t)=>{const{intl:a}=this.props;return c().createElement("a",{href:a.formatMessage(t),rel:"noreferrer",target:"_blank"},a.formatMessage(e),c().createElement("span",{style:S.iconSpacer},c().createElement(i.LA,null)))},this.getRouteToSources=()=>`${(0,g.IG)()}/settings/sources`}render(){const{intl:e,providerType:t}=this.props;let a,r,s,l=m.Z.noProvidersStateOverviewDesc,i=m.Z.noProvidersStateOverviewTitle;switch(t){case u.l.aws:l=m.Z.noProvidersStateAwsDesc,i=m.Z.noProvidersStateAwsTitle;break;case u.l.azure:l=m.Z.noProvidersStateAzureDesc,i=m.Z.noProvidersStateAzureTitle;break;case u.l.gcp:l=m.Z.noProvidersStateGcpDesc,i=m.Z.noProvidersStateGcpTitle;break;case u.l.ibm:l=m.Z.noProvidersStateIbmDesc,i=m.Z.noProvidersStateIbmTitle;break;case u.l.ocp:l=m.Z.noProvidersStateOcpDesc,a=m.Z.docsAddOcpSources,s=m.Z.noProvidersStateOcpAddSources,i=m.Z.noProvidersStateOcpTitle;break;default:r=v}return c().createElement(n.EmptyState,{variant:n.EmptyStateVariant.large,className:"pf-m-redhat-font"},c().createElement(n.EmptyStateIcon,{icon:r||o.wl}),c().createElement(n.Title,{headingLevel:"h1",size:n.TitleSizes.lg},e.formatMessage(i)),c().createElement(n.EmptyStateBody,null,e.formatMessage(l)),a&&s?c().createElement("div",{style:S.viewSources},this.getDocLink(s,a)):c().createElement(n.Button,{variant:"primary",component:"a",href:this.getRouteToSources()},e.formatMessage(m.Z.noProvidersStateGetStarted)))}}const Z=(0,d.ZP)(h),b=({providerType:e,title:t})=>c().createElement(c().Fragment,null,t&&c().createElement(r.Z,null,c().createElement(s.Z,{title:t})),c().createElement(n.PageSection,null,c().createElement(Z,{providerType:e})))},46955:(e,t,a)=>{a.d(t,{W:()=>o});var n=a(90154),r=a(89376),s=a(39173),l=a(15984),c=a(92950),i=a.n(c);const o=({title:e})=>i().createElement(i().Fragment,null,e&&i().createElement(r.Z,null,i().createElement(s.Z,{title:e})),i().createElement(n.PageSection,null,i().createElement(l.Z,null)))},1032:(e,t,a)=>{var n;a.d(t,{BV:()=>s,Bj:()=>o,D2:()=>u,JY:()=>m,Mg:()=>p,at:()=>i,g8:()=>d,rL:()=>v}),function(e){e.currentMonthData="current_month_data",e.hasData="has_data",e.previousMonthData="previous_month_data"}(n||(n={}));const r=(e,t)=>{let a;if(e&&e.data)for(const n of e.data)if(n.infrastructure&&n.infrastructure.uuid===t){a=n;break}return a},s=(e,t)=>{if(!e)return e;const a=e.data.filter((e=>e.source_type.toLowerCase()===t)),n=Object.assign(Object.assign({},e.meta),{count:a.length});return Object.assign(Object.assign({},e),{meta:n,data:a})},l=(e,t)=>{let a=!1;if(e&&e.data)for(const n of e.data)if(n[t]){a=!0;break}return a},c=(e,t,a)=>{let n=!1;if(e&&e.data)for(const s of e.data){const e=r(t,s.uuid);if(e&&e[a]){n=!0;break}}return n},i=(e,t)=>c(e,t,n.currentMonthData),o=(e,t)=>c(e,t,n.hasData),u=(e,t)=>c(e,t,n.previousMonthData),m=(e,t)=>((e,t)=>{let a=!1;if(e&&e.data)for(const n of e.data)if(r(t,n.uuid)){a=!0;break}return a})(e,t),d=e=>l(e,n.currentMonthData),p=e=>l(e,n.hasData),v=e=>l(e,n.previousMonthData)},32924:(e,t,a)=>{a.d(t,{F4:()=>p,JA:()=>u,K8:()=>v,LB:()=>c,Lk:()=>d,ZE:()=>l,bU:()=>o,ft:()=>i,vI:()=>m});var n=a(39333),r=a(39552);const s=(e,t=!1,a={})=>{const n=Object.assign(Object.assign({},JSON.parse(JSON.stringify(e))),a);return t&&(n.filter&&void 0!==n.filter.offset&&(n.filter=Object.assign(Object.assign({},e.filter),{offset:0})),void 0!==n.offset&&(n.offset=0)),n},l=(e,t,a=!1)=>{const r=s(e,a);return`${t.pathname}?${(0,n.IV)(r)}`},c=e=>s(e),i=e=>s(e),o=e=>s(e,!1,{order_by:void 0}),u=(e,t)=>{const a=s(e,!0);return(0,r.oQ)(a,t)},m=(e,t)=>{const a=s(e,!0);return(0,r.cJ)(a,t)},d=(e,t,a=!1)=>s(e,!1,Object.assign({},a?{limit:t}:{filter:Object.assign(Object.assign({},e.filter),{limit:t})})),p=(e,t,a,n=!1)=>{let r=10;t&&t.meta&&(n&&void 0!==t.meta.limit?r=t.meta.limit:t.meta.filter&&void 0!==t.meta.filter.limit&&(r=t.meta.filter.limit));const l=a*r-r;return s(e,!1,Object.assign({},n?{limit:r,offset:l}:{filter:Object.assign(Object.assign({},e.filter),{limit:r,offset:l})}))},v=(e,t,a,n=undefined)=>s(e,!1,{order_by:Object.assign({[t]:a?"asc":"desc"},n&&{date:n})})},50859:(e,t,a)=>{a.d(t,{F4:()=>u,JA:()=>c,K8:()=>m,LB:()=>r,Lk:()=>o,bU:()=>l,ft:()=>s,vI:()=>i});var n=a(32924);const r=(e,t)=>{const a=n.LB(e);t.navigate((0,n.ZE)(a,t.location),{replace:!0})},s=(e,t)=>{const a=n.ft(e);t.navigate((0,n.ZE)(a,t.location),{replace:!0})},l=(e,t)=>{const a=n.bU(e);t.navigate((0,n.ZE)(a,t.location),{replace:!0})},c=(e,t,a)=>{const r=n.JA(e,a);t.navigate((0,n.ZE)(r,t.location),{replace:!0})},i=(e,t,a)=>{const r=n.vI(e,a);t.navigate((0,n.ZE)(r,t.location),{replace:!0})},o=(e,t,a)=>{const r=n.Lk(e,a);t.navigate((0,n.ZE)(r,t.location),{replace:!0})},u=(e,t,a,r)=>{const s=n.F4(e,a,r);t.navigate((0,n.ZE)(s,t.location),{replace:!0})},m=(e,t,a,r,s=undefined)=>{const l=n.K8(e,a,r,s);t.navigate((0,n.ZE)(l,t.location),{replace:!0})}},84735:(e,t,a)=>{e.exports=a.p+"fonts/Cost-icon.svg"}}]);
//# sourceMappingURL=../sourcemaps/7203.e9eb5ab18839bab186114482b374ccef.js.map