"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[6019],{84717:(e,t,a)=>{a.d(t,{H:()=>s});var n=a(80129);function s(e){return(0,n.stringify)(e,{encode:!1,indices:!1})}},6450:(e,t,a)=>{a.d(t,{F:()=>S,m:()=>d});var n=a(90154),s=a(97027),r=a(92950),l=a.n(r),i=a(74806),c=a(77760),o=a(1156),u=a(15829);const p={currencySelector:{display:"flex",alignItems:"center"},currencyLabel:{marginBottom:0,marginRight:a(32412).ZP.var,whiteSpace:"nowrap"}},d=[{label:s.Z.currencyOptions,value:"AUD"},{label:s.Z.currencyOptions,value:"CAD"},{label:s.Z.currencyOptions,value:"CHF"},{label:s.Z.currencyOptions,value:"CNY"},{label:s.Z.currencyOptions,value:"DKK"},{label:s.Z.currencyOptions,value:"EUR"},{label:s.Z.currencyOptions,value:"GBP"},{label:s.Z.currencyOptions,value:"HKD"},{label:s.Z.currencyOptions,value:"JPY"},{label:s.Z.currencyOptions,value:"NOK"},{label:s.Z.currencyOptions,value:"NZD"},{label:s.Z.currencyOptions,value:"SEK"},{label:s.Z.currencyOptions,value:"SGD"},{label:s.Z.currencyOptions,value:"USD"},{label:s.Z.currencyOptions,value:"ZAR"}];class m extends l().Component{constructor(){super(...arguments),this.defaultState={isSelectOpen:!1},this.state=Object.assign({},this.defaultState),this.getSelect=()=>{const{currency:e,isDisabled:t}=this.props,{isSelectOpen:a}=this.state,s=this.getSelectOptions(),r=s.find((t=>t.value===e));return l().createElement(n.Select,{className:"currencyOverride",id:"currencySelect",isDisabled:t,isOpen:a,onSelect:this.handleSelect,onToggle:this.handleToggle,selections:r,variant:n.SelectVariant.single},s.map((e=>l().createElement(n.SelectOption,{key:e.value,value:e}))))},this.getSelectOptions=()=>{const{intl:e}=this.props,t=[];return d.map((a=>{t.push({toString:()=>e.formatMessage(a.label,{units:a.value}),value:a.value})})),t},this.handleSelect=(e,t)=>{const{onSelect:a}=this.props;(0,u.NW)(t.value),this.setState({isSelectOpen:!1},(()=>{a&&a(t.value)}))},this.handleToggle=e=>{this.setState({isSelectOpen:e})}}render(){const{intl:e}=this.props;return(0,u.eu)(),l().createElement("div",{style:p.currencySelector},l().createElement(n.Title,{headingLevel:"h2",size:"md",style:p.currencyLabel},e.formatMessage(s.Z.currency)),this.getSelect())}}const g=(0,o.X1)((()=>({}))),v=(0,c.connect)(g,{})(m),S=(0,i.ZP)(v)},55672:(e,t,a)=>{a.d(t,{J:()=>n.Z});var n=a(83819)},83819:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(90154),s=a(89376),r=a(39173),l=a(92950),i=a.n(l),c=a(7081),o=a(97027),u=a(74806);class p extends i().Component{render(){const{intl:e,showReload:t=!0}=this.props;return i().createElement(n.EmptyState,{variant:n.EmptyStateVariant.large,className:"pf-m-redhat-font"},i().createElement(n.EmptyStateIcon,{icon:c.wl}),i().createElement(n.Title,{headingLevel:"h5",size:"lg"},e.formatMessage(o.Z.noDataStateTitle)),i().createElement(n.EmptyStateBody,null,e.formatMessage(o.Z.noDataStateDesc)),t&&i().createElement(n.Button,{variant:"primary",onClick:()=>window.location.reload()},e.formatMessage(o.Z.noDataStateRefresh)))}}const d=(0,u.ZP)(p),m=({showReload:e,title:t})=>i().createElement(i().Fragment,null,t&&i().createElement(s.Z,null,i().createElement(r.Z,{title:t})),i().createElement(n.PageSection,null,i().createElement(d,{showReload:e})))},2985:(e,t,a)=>{a.d(t,{L:()=>O});var n=a(90154),s=a(89376),r=a(39173),l=a(92950),i=a.n(l),c=a(15265),o=a(7081),u=a(1326),p=a(97027),d=a(74806);const m=a(84735),g=(0,d.ZP)((({className:e,intl:t})=>i().createElement("img",{className:`cost-icon ${e}`,src:m,alt:t.formatMessage(p.Z.costManagement),"aria-hidden":"true"})));var v=a(68025),S=a(98499);const h={iconSpacer:{marginLeft:a(43789).ZP.value},viewSources:{marginTop:S.ZP.value}};class f extends i().Component{constructor(){super(...arguments),this.getDocLink=(e,t)=>{const{intl:a}=this.props;return i().createElement("a",{href:a.formatMessage(t),rel:"noreferrer",target:"_blank"},a.formatMessage(e),i().createElement("span",{style:h.iconSpacer},i().createElement(c.LA,null)))},this.getRouteToSources=()=>`${(0,v.IG)()}/settings/sources`}render(){const{intl:e,providerType:t}=this.props;let a,s,r,l=p.Z.noProvidersStateOverviewDesc,c=p.Z.noProvidersStateOverviewTitle;switch(t){case u.l.aws:l=p.Z.noProvidersStateAwsDesc,c=p.Z.noProvidersStateAwsTitle;break;case u.l.azure:l=p.Z.noProvidersStateAzureDesc,c=p.Z.noProvidersStateAzureTitle;break;case u.l.gcp:l=p.Z.noProvidersStateGcpDesc,c=p.Z.noProvidersStateGcpTitle;break;case u.l.ibm:l=p.Z.noProvidersStateIbmDesc,c=p.Z.noProvidersStateIbmTitle;break;case u.l.ocp:l=p.Z.noProvidersStateOcpDesc,a=p.Z.docsAddOcpSources,r=p.Z.noProvidersStateOcpAddSources,c=p.Z.noProvidersStateOcpTitle;break;default:s=g}return i().createElement(n.EmptyState,{variant:n.EmptyStateVariant.large,className:"pf-m-redhat-font"},i().createElement(n.EmptyStateIcon,{icon:s||o.wl}),i().createElement(n.Title,{headingLevel:"h1",size:"lg"},e.formatMessage(c)),i().createElement(n.EmptyStateBody,null,e.formatMessage(l)),a&&r?i().createElement("div",{style:h.viewSources},this.getDocLink(r,a)):i().createElement(n.Button,{variant:"primary",component:"a",href:this.getRouteToSources()},e.formatMessage(p.Z.noProvidersStateGetStarted)))}}const b=(0,d.ZP)(f),O=({providerType:e,title:t})=>i().createElement(i().Fragment,null,t&&i().createElement(s.Z,null,i().createElement(r.Z,{title:t})),i().createElement(n.PageSection,null,i().createElement(b,{providerType:e})))},47947:(e,t,a)=>{a.d(t,{W:()=>o});var n=a(90154),s=a(89376),r=a(39173),l=a(15984),i=a(92950),c=a.n(i);const o=({title:e})=>c().createElement(c().Fragment,null,e&&c().createElement(s.Z,null,c().createElement(r.Z,{title:e})),c().createElement(n.PageSection,null,c().createElement(l.Z,null)))},97698:(e,t,a)=>{a.d(t,{N:()=>h});var n=a(90154),s=a(97027),r=a(92950),l=a.n(r),i=a(74806),c=a(77760),o=a(38935),u=a(1156),p=a(15829);const d={selector:{display:"flex",alignItems:"center"},label:{marginBottom:0,marginRight:a(32412).ZP.var,whiteSpace:"nowrap"}},m=[{label:s.Z.costDistributionType,value:o.Qf.distributed},{label:s.Z.costDistributionType,value:o.Qf.total}];class g extends l().Component{constructor(){super(...arguments),this.defaultState={isSelectOpen:!1},this.state=Object.assign({},this.defaultState),this.getSelect=()=>{const{costDistribution:e,isDisabled:t}=this.props,{isSelectOpen:a}=this.state,s=this.getSelectOptions(),r=s.find((t=>t.value===e));return l().createElement(n.Select,{className:"selectOverride",id:"costDistributionSelect",isDisabled:t,isOpen:a,onSelect:this.handleSelect,onToggle:this.handleToggle,selections:r,variant:n.SelectVariant.single},s.map((e=>l().createElement(n.SelectOption,{description:e.desc,key:e.value,value:e}))))},this.getSelectOptions=()=>{const{intl:e}=this.props,t=[];return m.map((a=>{t.push({toString:()=>e.formatMessage(a.label,{value:a.value}),value:a.value})})),t},this.handleSelect=(e,t)=>{const{onSelect:a}=this.props;(0,p.mu)(t.value),this.setState({isSelectOpen:!1},(()=>{a&&a(t.value)}))},this.handleToggle=e=>{this.setState({isSelectOpen:e})}}render(){const{intl:e}=this.props;return(0,p.eu)(),l().createElement("div",{style:d.selector},l().createElement(n.Title,{headingLevel:"h3",size:"md",style:d.label},e.formatMessage(s.Z.costDistributionLabel)),this.getSelect())}}const v=(0,u.X1)((()=>({}))),S=(0,c.connect)(v,{})(g),h=(0,i.ZP)(S)},19727:(e,t,a)=>{a.d(t,{$3:()=>o,$9:()=>d,_s:()=>l,cZ:()=>c,jl:()=>i,q7:()=>u,xh:()=>p,yB:()=>m});var n=a(9256),s=a(10066);const r=(e,t,a,n=!1)=>{const r=Object.assign({},JSON.parse(JSON.stringify(e)));t.navigate((0,s.Z)(r,t.location,n),{replace:!0})},l=(e,t,a,n=!1)=>{r(e,t,0,n)},i=(e,t,a,n=!1)=>{r(e,t,0,n)},c=(e,t,a,n=!1)=>{const s=Object.assign(Object.assign({},JSON.parse(JSON.stringify(e))),{order_by:void 0});r(s,t,0,n)},o=(e,t,a)=>{const r=(0,n.oQ)(e,a);t.navigate((0,s.Z)(r,t.location,!0),{replace:!0})},u=(e,t,a)=>{const r=(0,n.cJ)(e,a);t.navigate((0,s.Z)(r,t.location,!0),{replace:!0})},p=(e,t,a)=>{const n=Object.assign({},JSON.parse(JSON.stringify(e)));n.filter=Object.assign(Object.assign({},e.filter),{limit:a});const r=(0,s.Z)(n,t.location,!0);t.navigate(r,{replace:!0})},d=(e,t,a,n)=>{const r=a&&a.meta&&a.meta.filter&&a.meta.filter.limit?a.meta.filter.limit:10,l=n*r-r,i=Object.assign({},JSON.parse(JSON.stringify(e)));i.filter=Object.assign(Object.assign({},e.filter),{offset:l});const c=(0,s.Z)(i,t.location);t.navigate(c,{replace:!0})},m=(e,t,a,n,r=undefined)=>{const l=Object.assign({},JSON.parse(JSON.stringify(e)));l.order_by={},l.order_by[a]=n?"asc":"desc",r&&(l.order_by.date=r);const i=(0,s.Z)(l,t.location);t.navigate(i,{replace:!0})}},86482:(e,t,a)=>{var n;a.d(t,{BV:()=>r,Bj:()=>o,D2:()=>u,JY:()=>p,Mg:()=>m,at:()=>c,g8:()=>d,rL:()=>g}),function(e){e.currentMonthData="current_month_data",e.hasData="has_data",e.previousMonthData="previous_month_data"}(n||(n={}));const s=(e,t)=>{let a;if(e&&e.data)for(const n of e.data)if(n.infrastructure&&n.infrastructure.uuid===t){a=n;break}return a},r=(e,t)=>{if(!e)return e;const a=e.data.filter((e=>e.source_type.toLowerCase()===t)),n=Object.assign(Object.assign({},e.meta),{count:a.length});return Object.assign(Object.assign({},e),{meta:n,data:a})},l=(e,t)=>{let a=!1;if(e&&e.data)for(const n of e.data)if(n[t]){a=!0;break}return a},i=(e,t,a)=>{let n=!1;if(e&&e.data)for(const r of e.data){const e=s(t,r.uuid);if(e&&e[a]){n=!0;break}}return n},c=(e,t)=>i(e,t,n.currentMonthData),o=(e,t)=>i(e,t,n.hasData),u=(e,t)=>i(e,t,n.previousMonthData),p=(e,t)=>((e,t)=>{let a=!1;if(e&&e.data)for(const n of e.data)if(s(t,n.uuid)){a=!0;break}return a})(e,t),d=e=>l(e,n.currentMonthData),m=e=>l(e,n.hasData),g=e=>l(e,n.previousMonthData)},10066:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(39333);const s=(e,t,a=!1)=>(a&&(e.filter&&void 0!==e.filter.offset&&(e.filter=Object.assign(Object.assign({},e.filter),{offset:0})),void 0!==e.offset&&(e.offset=0)),`${t.pathname}?${(0,n.IV)(e)}`)},84735:(e,t,a)=>{e.exports=a.p+"fonts/Cost-icon.svg"}}]);
//# sourceMappingURL=../sourcemaps/6019.6017d1a922c93465b4b9394e79176cfe.js.map