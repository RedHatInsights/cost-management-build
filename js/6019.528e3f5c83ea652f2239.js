"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[6019],{84717:(e,t,a)=>{a.d(t,{H:()=>n});var s=a(80129);function n(e){return(0,s.stringify)(e,{encode:!1,indices:!1})}},6450:(e,t,a)=>{a.d(t,{F:()=>S,m:()=>d});var s=a(90154),n=a(97027),r=a(92950),l=a.n(r),i=a(74806),c=a(77760),o=a(1156),u=a(15829);const p={currencySelector:{display:"flex",alignItems:"center"},currencyLabel:{marginBottom:0,marginRight:a(32412).ZP.var,whiteSpace:"nowrap"}},d=[{label:n.Z.currencyOptions,value:"AUD"},{label:n.Z.currencyOptions,value:"CAD"},{label:n.Z.currencyOptions,value:"CHF"},{label:n.Z.currencyOptions,value:"CNY"},{label:n.Z.currencyOptions,value:"DKK"},{label:n.Z.currencyOptions,value:"EUR"},{label:n.Z.currencyOptions,value:"GBP"},{label:n.Z.currencyOptions,value:"HKD"},{label:n.Z.currencyOptions,value:"JPY"},{label:n.Z.currencyOptions,value:"NOK"},{label:n.Z.currencyOptions,value:"NZD"},{label:n.Z.currencyOptions,value:"SEK"},{label:n.Z.currencyOptions,value:"SGD"},{label:n.Z.currencyOptions,value:"USD"},{label:n.Z.currencyOptions,value:"ZAR"}];class m extends l().Component{constructor(){super(...arguments),this.defaultState={isSelectOpen:!1},this.state=Object.assign({},this.defaultState),this.getSelect=()=>{const{currency:e,isDisabled:t,showLabel:a=!0}=this.props,{isSelectOpen:n}=this.state,r=this.getSelectOptions(),i=r.find((t=>t.value===e));return l().createElement(s.Select,{className:a?"currencyOverride":void 0,id:"currencySelect",isDisabled:t,isOpen:n,onSelect:this.handleSelect,onToggle:this.handleToggle,selections:i,variant:s.SelectVariant.single},r.map((e=>l().createElement(s.SelectOption,{key:e.value,value:e}))))},this.getSelectOptions=()=>{const{intl:e}=this.props,t=[];return d.map((a=>{t.push({toString:()=>e.formatMessage(a.label,{units:a.value}),value:a.value})})),t},this.handleSelect=(e,t)=>{const{isLocalStorage:a=!0,onSelect:s}=this.props;a&&(0,u.NW)(t.value),this.setState({isSelectOpen:!1},(()=>{s&&s(t.value)}))},this.handleToggle=e=>{this.setState({isSelectOpen:e})}}render(){const{intl:e,showLabel:t=!0}=this.props;return l().createElement("div",{style:p.currencySelector},t&&l().createElement(s.Title,{headingLevel:"h2",size:s.TitleSizes.md,style:p.currencyLabel},e.formatMessage(n.Z.currency)),this.getSelect())}}const g=(0,o.X1)((()=>({}))),v=(0,c.connect)(g,{})(m),S=(0,i.ZP)(v)},55672:(e,t,a)=>{a.d(t,{J:()=>s.Z});var s=a(83819)},83819:(e,t,a)=>{a.d(t,{Z:()=>m});var s=a(90154),n=a(89376),r=a(39173),l=a(92950),i=a.n(l),c=a(7081),o=a(97027),u=a(74806);class p extends i().Component{render(){const{intl:e,showReload:t=!0}=this.props;return i().createElement(s.EmptyState,{variant:s.EmptyStateVariant.large,className:"pf-m-redhat-font"},i().createElement(s.EmptyStateIcon,{icon:c.wl}),i().createElement(s.Title,{headingLevel:"h5",size:s.TitleSizes.lg},e.formatMessage(o.Z.noDataStateTitle)),i().createElement(s.EmptyStateBody,null,e.formatMessage(o.Z.noDataStateDesc)),t&&i().createElement(s.Button,{variant:"primary",onClick:()=>window.location.reload()},e.formatMessage(o.Z.noDataStateRefresh)))}}const d=(0,u.ZP)(p),m=({showReload:e,title:t})=>i().createElement(i().Fragment,null,t&&i().createElement(n.Z,null,i().createElement(r.Z,{title:t})),i().createElement(s.PageSection,null,i().createElement(d,{showReload:e})))},2985:(e,t,a)=>{a.d(t,{L:()=>O});var s=a(90154),n=a(89376),r=a(39173),l=a(92950),i=a.n(l),c=a(15265),o=a(7081),u=a(1326),p=a(97027),d=a(74806);const m=a(84735),g=(0,d.ZP)((({className:e,intl:t})=>i().createElement("img",{className:`cost-icon ${e}`,src:m,alt:t.formatMessage(p.Z.costManagement),"aria-hidden":"true"})));var v=a(68025),S=a(98499);const h={iconSpacer:{marginLeft:a(43789).ZP.value},viewSources:{marginTop:S.ZP.value}};class f extends i().Component{constructor(){super(...arguments),this.getDocLink=(e,t)=>{const{intl:a}=this.props;return i().createElement("a",{href:a.formatMessage(t),rel:"noreferrer",target:"_blank"},a.formatMessage(e),i().createElement("span",{style:h.iconSpacer},i().createElement(c.LA,null)))},this.getRouteToSources=()=>`${(0,v.IG)()}/settings/sources`}render(){const{intl:e,providerType:t}=this.props;let a,n,r,l=p.Z.noProvidersStateOverviewDesc,c=p.Z.noProvidersStateOverviewTitle;switch(t){case u.l.aws:l=p.Z.noProvidersStateAwsDesc,c=p.Z.noProvidersStateAwsTitle;break;case u.l.azure:l=p.Z.noProvidersStateAzureDesc,c=p.Z.noProvidersStateAzureTitle;break;case u.l.gcp:l=p.Z.noProvidersStateGcpDesc,c=p.Z.noProvidersStateGcpTitle;break;case u.l.ibm:l=p.Z.noProvidersStateIbmDesc,c=p.Z.noProvidersStateIbmTitle;break;case u.l.ocp:l=p.Z.noProvidersStateOcpDesc,a=p.Z.docsAddOcpSources,r=p.Z.noProvidersStateOcpAddSources,c=p.Z.noProvidersStateOcpTitle;break;default:n=g}return i().createElement(s.EmptyState,{variant:s.EmptyStateVariant.large,className:"pf-m-redhat-font"},i().createElement(s.EmptyStateIcon,{icon:n||o.wl}),i().createElement(s.Title,{headingLevel:"h1",size:s.TitleSizes.lg},e.formatMessage(c)),i().createElement(s.EmptyStateBody,null,e.formatMessage(l)),a&&r?i().createElement("div",{style:h.viewSources},this.getDocLink(r,a)):i().createElement(s.Button,{variant:"primary",component:"a",href:this.getRouteToSources()},e.formatMessage(p.Z.noProvidersStateGetStarted)))}}const b=(0,d.ZP)(f),O=({providerType:e,title:t})=>i().createElement(i().Fragment,null,t&&i().createElement(n.Z,null,i().createElement(r.Z,{title:t})),i().createElement(s.PageSection,null,i().createElement(b,{providerType:e})))},47947:(e,t,a)=>{a.d(t,{W:()=>o});var s=a(90154),n=a(89376),r=a(39173),l=a(15984),i=a(92950),c=a.n(i);const o=({title:e})=>c().createElement(c().Fragment,null,e&&c().createElement(n.Z,null,c().createElement(r.Z,{title:e})),c().createElement(s.PageSection,null,c().createElement(l.Z,null)))},97698:(e,t,a)=>{a.d(t,{N:()=>h});var s=a(90154),n=a(97027),r=a(92950),l=a.n(r),i=a(74806),c=a(77760),o=a(38935),u=a(1156),p=a(15829);const d={selector:{display:"flex",alignItems:"center"},label:{marginBottom:0,marginRight:a(32412).ZP.var,whiteSpace:"nowrap"}},m=[{label:n.Z.costDistributionType,value:o.Qf.distributed},{label:n.Z.costDistributionType,value:o.Qf.total}];class g extends l().Component{constructor(){super(...arguments),this.defaultState={isSelectOpen:!1},this.state=Object.assign({},this.defaultState),this.getSelect=()=>{const{costDistribution:e,isDisabled:t}=this.props,{isSelectOpen:a}=this.state,n=this.getSelectOptions(),r=n.find((t=>t.value===e));return l().createElement(s.Select,{className:"selectOverride",id:"costDistributionSelect",isDisabled:t,isOpen:a,onSelect:this.handleSelect,onToggle:this.handleToggle,selections:r,variant:s.SelectVariant.single},n.map((e=>l().createElement(s.SelectOption,{description:e.desc,key:e.value,value:e}))))},this.getSelectOptions=()=>{const{intl:e}=this.props,t=[];return m.map((a=>{t.push({toString:()=>e.formatMessage(a.label,{value:a.value}),value:a.value})})),t},this.handleSelect=(e,t)=>{const{onSelect:a}=this.props;(0,p.mu)(t.value),this.setState({isSelectOpen:!1},(()=>{a&&a(t.value)}))},this.handleToggle=e=>{this.setState({isSelectOpen:e})}}render(){const{intl:e}=this.props;return l().createElement("div",{style:d.selector},l().createElement(s.Title,{headingLevel:"h2",size:s.TitleSizes.md,style:d.label},e.formatMessage(n.Z.costDistributionLabel)),this.getSelect())}}const v=(0,u.X1)((()=>({}))),S=(0,c.connect)(v,{})(g),h=(0,i.ZP)(S)},19727:(e,t,a)=>{a.d(t,{F4:()=>d,JA:()=>o,K8:()=>m,LB:()=>l,Lk:()=>p,bU:()=>c,ft:()=>i,vI:()=>u});var s=a(9256),n=a(10066);const r=(e,t,a,s=!1)=>{const r=Object.assign({},JSON.parse(JSON.stringify(e)));t.navigate((0,n.Z)(r,t.location,s),{replace:!0})},l=(e,t,a,s=!1)=>{r(e,t,0,s)},i=(e,t,a,s=!1)=>{r(e,t,0,s)},c=(e,t,a,s=!1)=>{const n=Object.assign(Object.assign({},JSON.parse(JSON.stringify(e))),{order_by:void 0});r(n,t,0,s)},o=(e,t,a)=>{const r=(0,s.oQ)(e,a);t.navigate((0,n.Z)(r,t.location,!0),{replace:!0})},u=(e,t,a)=>{const r=(0,s.cJ)(e,a);t.navigate((0,n.Z)(r,t.location,!0),{replace:!0})},p=(e,t,a)=>{const s=Object.assign({},JSON.parse(JSON.stringify(e)));s.filter=Object.assign(Object.assign({},e.filter),{limit:a});const r=(0,n.Z)(s,t.location,!0);t.navigate(r,{replace:!0})},d=(e,t,a,s)=>{const r=a&&a.meta&&a.meta.filter&&a.meta.filter.limit?a.meta.filter.limit:10,l=s*r-r,i=Object.assign({},JSON.parse(JSON.stringify(e)));i.filter=Object.assign(Object.assign({},e.filter),{offset:l});const c=(0,n.Z)(i,t.location);t.navigate(c,{replace:!0})},m=(e,t,a,s,r=undefined)=>{const l=Object.assign({},JSON.parse(JSON.stringify(e)));l.order_by={},l.order_by[a]=s?"asc":"desc",r&&(l.order_by.date=r);const i=(0,n.Z)(l,t.location);t.navigate(i,{replace:!0})}},86482:(e,t,a)=>{var s;a.d(t,{BV:()=>r,Bj:()=>o,D2:()=>u,JY:()=>p,Mg:()=>m,at:()=>c,g8:()=>d,rL:()=>g}),function(e){e.currentMonthData="current_month_data",e.hasData="has_data",e.previousMonthData="previous_month_data"}(s||(s={}));const n=(e,t)=>{let a;if(e&&e.data)for(const s of e.data)if(s.infrastructure&&s.infrastructure.uuid===t){a=s;break}return a},r=(e,t)=>{if(!e)return e;const a=e.data.filter((e=>e.source_type.toLowerCase()===t)),s=Object.assign(Object.assign({},e.meta),{count:a.length});return Object.assign(Object.assign({},e),{meta:s,data:a})},l=(e,t)=>{let a=!1;if(e&&e.data)for(const s of e.data)if(s[t]){a=!0;break}return a},i=(e,t,a)=>{let s=!1;if(e&&e.data)for(const r of e.data){const e=n(t,r.uuid);if(e&&e[a]){s=!0;break}}return s},c=(e,t)=>i(e,t,s.currentMonthData),o=(e,t)=>i(e,t,s.hasData),u=(e,t)=>i(e,t,s.previousMonthData),p=(e,t)=>((e,t)=>{let a=!1;if(e&&e.data)for(const s of e.data)if(n(t,s.uuid)){a=!0;break}return a})(e,t),d=e=>l(e,s.currentMonthData),m=e=>l(e,s.hasData),g=e=>l(e,s.previousMonthData)},10066:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(39333);const n=(e,t,a=!1)=>(a&&(e.filter&&void 0!==e.filter.offset&&(e.filter=Object.assign(Object.assign({},e.filter),{offset:0})),void 0!==e.offset&&(e.offset=0)),`${t.pathname}?${(0,s.IV)(e)}`)},84735:(e,t,a)=>{e.exports=a.p+"fonts/Cost-icon.svg"}}]);