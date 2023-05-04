"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[3043],{15265:(e,t,r)=>{r.d(t,{LA:()=>o,ZP:()=>n,mq:()=>s});var a=r(40400);const s={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},o=(0,a.IU)(s),n=o},43789:(e,t)=>{t.Q8={name:"--pf-global--spacer--xs",value:"0.25rem",var:"var(--pf-global--spacer--xs)"},t.ZP=t.Q8},15984:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(85893),s=r(90154),o=r(15138),n=function(){return n=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},n.apply(this,arguments)};const l=function(){return(0,a.jsxs)(s.EmptyState,n({variant:s.EmptyStateVariant.large,className:"ins-c-empty-state__unavailable pf-m-redhat-font"},{children:[(0,a.jsx)(s.EmptyStateIcon,{icon:o.ExclamationCircleIcon}),(0,a.jsx)(s.Title,n({headingLevel:"h5",size:"lg"},{children:"This page is temporarily unavailable"})),(0,a.jsxs)(s.EmptyStateBody,{children:["Try refreshing the page. If the problem persists, contact your organization administrator or visit our",(0,a.jsxs)("a",n({href:"https://status.redhat.com/",target:"_blank",rel:"noopener noreferrer"},{children:[" ","status page"]}))," ","for known outages."]})]}))}},84717:(e,t,r)=>{r.d(t,{H:()=>s});var a=r(80129);function s(e){return(0,a.stringify)(e,{encode:!1,indices:!1})}},6450:(e,t,r)=>{r.d(t,{F:()=>y,m:()=>u});var a=r(90154),s=r(97027),o=r(92950),n=r.n(o),l=r(74806),i=r(77760),c=r(1156),d=r(15829);const p={currencySelector:{display:"flex",alignItems:"center"},currencyLabel:{marginBottom:0,marginRight:r(32412).ZP.var,whiteSpace:"nowrap"}},u=[{label:s.Z.currencyOptions,value:"AUD"},{label:s.Z.currencyOptions,value:"CAD"},{label:s.Z.currencyOptions,value:"CHF"},{label:s.Z.currencyOptions,value:"CNY"},{label:s.Z.currencyOptions,value:"DKK"},{label:s.Z.currencyOptions,value:"EUR"},{label:s.Z.currencyOptions,value:"GBP"},{label:s.Z.currencyOptions,value:"HKD"},{label:s.Z.currencyOptions,value:"JPY"},{label:s.Z.currencyOptions,value:"NOK"},{label:s.Z.currencyOptions,value:"NZD"},{label:s.Z.currencyOptions,value:"SEK"},{label:s.Z.currencyOptions,value:"SGD"},{label:s.Z.currencyOptions,value:"USD"},{label:s.Z.currencyOptions,value:"ZAR"}];class m extends n().Component{constructor(){super(...arguments),this.defaultState={isSelectOpen:!1},this.state=Object.assign({},this.defaultState),this.getSelect=()=>{const{currency:e,isDisabled:t}=this.props,{isSelectOpen:r}=this.state,s=this.getSelectOptions(),o=s.find((t=>t.value===e));return n().createElement(a.Select,{className:"currencyOverride",id:"currencySelect",isDisabled:t,isOpen:r,onSelect:this.handleSelect,onToggle:this.handleToggle,selections:o,variant:a.SelectVariant.single},s.map((e=>n().createElement(a.SelectOption,{key:e.value,value:e}))))},this.getSelectOptions=()=>{const{intl:e}=this.props,t=[];return u.map((r=>{t.push({toString:()=>e.formatMessage(r.label,{units:r.value}),value:r.value})})),t},this.handleSelect=(e,t)=>{const{onSelect:r}=this.props;(0,d.NW)(t.value),this.setState({isSelectOpen:!1},(()=>{r&&r(t.value)}))},this.handleToggle=e=>{this.setState({isSelectOpen:e})}}render(){const{intl:e}=this.props;return(0,d.eu)(),n().createElement("div",{style:p.currencySelector},n().createElement(a.Title,{headingLevel:"h2",size:"md",style:p.currencyLabel},e.formatMessage(s.Z.currency)),this.getSelect())}}const h=(0,c.X1)((()=>({}))),g=(0,i.connect)(h,{})(m),y=(0,l.ZP)(g)},55672:(e,t,r)=>{r.d(t,{J:()=>a.Z});var a=r(83819)},83819:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(90154),s=r(89376),o=r(39173),n=r(92950),l=r.n(n),i=r(7081),c=r(97027),d=r(74806);class p extends l().Component{render(){const{intl:e,showReload:t=!0}=this.props;return l().createElement(a.EmptyState,{variant:a.EmptyStateVariant.large,className:"pf-m-redhat-font"},l().createElement(a.EmptyStateIcon,{icon:i.wl}),l().createElement(a.Title,{headingLevel:"h5",size:"lg"},e.formatMessage(c.Z.noDataStateTitle)),l().createElement(a.EmptyStateBody,null,e.formatMessage(c.Z.noDataStateDesc)),t&&l().createElement(a.Button,{variant:"primary",onClick:()=>window.location.reload()},e.formatMessage(c.Z.noDataStateRefresh)))}}const u=(0,d.ZP)(p),m=({showReload:e,title:t})=>l().createElement(l().Fragment,null,t&&l().createElement(s.Z,null,l().createElement(o.Z,{title:t})),l().createElement(a.PageSection,null,l().createElement(u,{showReload:e})))},72483:(e,t,r)=>{r.d(t,{Y:()=>p});var a=r(90154),s=r(97027),o=r(92950),n=r.n(o),l=r(74806);const i=r(80794),c=(0,l.ZP)((({className:e,intl:t})=>n().createElement("img",{className:`optimization-icon ${e}`,src:i,alt:t.formatMessage(s.Z.optimizations),"aria-hidden":"true"})));class d extends n().Component{render(){const{intl:e}=this.props;return n().createElement(a.EmptyState,{variant:a.EmptyStateVariant.large,className:"pf-m-redhat-font"},n().createElement(a.EmptyStateIcon,{icon:c}),n().createElement(a.Title,{headingLevel:"h1",size:"lg"},e.formatMessage(s.Z.noOptimizationsTitle)),n().createElement(a.EmptyStateBody,null,e.formatMessage(s.Z.noOptimizationsDesc)))}}const p=(0,l.ZP)(d)},2985:(e,t,r)=>{r.d(t,{L:()=>E});var a=r(90154),s=r(89376),o=r(39173),n=r(92950),l=r.n(n),i=r(15265),c=r(7081),d=r(1326),p=r(97027),u=r(74806);const m=r(84735),h=(0,u.ZP)((({className:e,intl:t})=>l().createElement("img",{className:`cost-icon ${e}`,src:m,alt:t.formatMessage(p.Z.costManagement),"aria-hidden":"true"})));var g=r(68025),y=r(98499);const S={iconSpacer:{marginLeft:r(43789).ZP.value},viewSources:{marginTop:y.ZP.value}};class v extends l().Component{constructor(){super(...arguments),this.getDocLink=(e,t)=>{const{intl:r}=this.props;return l().createElement("a",{href:r.formatMessage(t),rel:"noreferrer",target:"_blank"},r.formatMessage(e),l().createElement("span",{style:S.iconSpacer},l().createElement(i.LA,null)))},this.getRouteToSources=()=>`${(0,g.IG)()}/settings/sources`}render(){const{intl:e,providerType:t}=this.props;let r,s,o,n=p.Z.noProvidersStateOverviewDesc,i=p.Z.noProvidersStateOverviewTitle;switch(t){case d.l.aws:n=p.Z.noProvidersStateAwsDesc,i=p.Z.noProvidersStateAwsTitle;break;case d.l.azure:n=p.Z.noProvidersStateAzureDesc,i=p.Z.noProvidersStateAzureTitle;break;case d.l.gcp:n=p.Z.noProvidersStateGcpDesc,i=p.Z.noProvidersStateGcpTitle;break;case d.l.ibm:n=p.Z.noProvidersStateIbmDesc,i=p.Z.noProvidersStateIbmTitle;break;case d.l.ocp:n=p.Z.noProvidersStateOcpDesc,r=p.Z.docsAddOcpSources,o=p.Z.noProvidersStateOcpAddSources,i=p.Z.noProvidersStateOcpTitle;break;default:s=h}return l().createElement(a.EmptyState,{variant:a.EmptyStateVariant.large,className:"pf-m-redhat-font"},l().createElement(a.EmptyStateIcon,{icon:s||c.wl}),l().createElement(a.Title,{headingLevel:"h1",size:"lg"},e.formatMessage(i)),l().createElement(a.EmptyStateBody,null,e.formatMessage(n)),r&&o?l().createElement("div",{style:S.viewSources},this.getDocLink(o,r)):l().createElement(a.Button,{variant:"primary",component:"a",href:this.getRouteToSources()},e.formatMessage(p.Z.noProvidersStateGetStarted)))}}const f=(0,u.ZP)(v),E=({providerType:e,title:t})=>l().createElement(l().Fragment,null,t&&l().createElement(s.Z,null,l().createElement(o.Z,{title:t})),l().createElement(a.PageSection,null,l().createElement(f,{providerType:e})))},47947:(e,t,r)=>{r.d(t,{W:()=>c});var a=r(90154),s=r(89376),o=r(39173),n=r(15984),l=r(92950),i=r.n(l);const c=({title:e})=>i().createElement(i().Fragment,null,e&&i().createElement(s.Z,null,i().createElement(o.Z,{title:e})),i().createElement(a.PageSection,null,i().createElement(n.Z,null)))},13764:(e,t,r)=>{r.d(t,{T:()=>a.Z});var a=r(66806)},76386:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Ae});var a=r(90154),s=r(1326),o=r(76966),n=r(84717),l=r(6456),i=r(97027),c=r(92950),d=r.n(c),p=r(74806),u=r(77760),m=r(52471),h=r(55672),g=r(2985),y=r(47947),S=r(40493),v=r(37269),f=r(19727),E=r(86482),b=r(10066),O=r(1156),Z=r(62331),C=r(15920);function P(e={}){return e.account?"account":e.aws_category?"aws_category":e.org_unit_id?"org_unit_id":e.region?"region":e.service?"service":"date"}var x=r(69511),T=r(15829),M=r(14483),w=r(5842),_=r(49382),D=r(98499),B=r(32412);const k={awsDetails:{minHeight:"100%"},content:{paddingBottom:D.ZP.value,paddingTop:D.ZP.value},paginationContainer:{marginLeft:D.ZP.value,marginRight:D.ZP.value},pagination:{backgroundColor:_.ZP.value,paddingBottom:B.ZP.value,paddingTop:B.ZP.value},tableContainer:{marginLeft:D.ZP.value,marginRight:D.ZP.value},toolbarContainer:{marginLeft:D.ZP.value,marginRight:D.ZP.value}};var R=r(96740),A=r(36116),j=r(50081),I=r(26744),F=r(6450),L=r(13764),$=r(36465),V=r(22369),N=r(45087),z=r(91778),q=r(33605),X=r(54881),J=r(48196);const Q={costLabelUnit:{fontSize:X.ZP.value,color:q.ZP.var},costType:{display:"flex",marginLeft:B.ZP.var},costValue:{marginTop:D.ZP.var,marginBottom:0},dateTitle:{textAlign:"end"},header:{backgroundColor:_.ZP.var,padding:D.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},title:{paddingBottom:J.ZP.var}},G=[{label:"account",value:"account"},{label:"service",value:"service"},{label:"region",value:"region"}],W=R.t.aws,H=A.C.aws,K=j.L.aws;class U extends d().Component{constructor(){super(...arguments),this.handleCostTypeSelected=e=>{const{onCostTypeSelected:t}=this.props;t&&t(e)}}render(){const{costType:e,currency:t,groupBy:r,isExportsFeatureEnabled:s,onCurrencySelected:o,onGroupBySelected:n,providers:l,providersError:c,report:p,intl:u}=this.props,m=p&&!c&&l&&l.meta&&l.meta.count>0,h=p&&p.meta&&p.meta.total&&p.meta.total.cost&&p.meta.total.cost.total;return d().createElement("header",{style:Q.header},d().createElement("div",{style:Q.headerContent},d().createElement(a.Title,{headingLevel:"h1",style:Q.title,size:a.TitleSizes["2xl"]},u.formatMessage(i.Z.awsDetailsTitle)),d().createElement("div",{style:Q.headerContentRight},d().createElement(F.F,{currency:t,onSelect:o}),s&&d().createElement(I.bj,null))),d().createElement("div",{style:Q.headerContent},d().createElement("div",{style:Q.headerContentLeft},d().createElement($.X,{getIdKeyForGroupBy:P,groupBy:r,isDisabled:!m,onSelected:n,options:G,orgPathsType:W,resourcePathsType:H,showCostCategories:!0,showOrgs:!0,showTags:!0,tagPathsType:K}),d().createElement("div",{style:Q.costType},d().createElement(L.T,{costType:e,onSelect:this.handleCostTypeSelected}))),m&&d().createElement("div",null,d().createElement(a.Title,{headingLevel:"h2",style:Q.costValue,size:a.TitleSizes["4xl"]},(0,z.xG)(h?p.meta.total.cost.total.value:0,h?p.meta.total.cost.total.units:"USD")),d().createElement("div",{style:Q.dateTitle},(0,N.J4)()))))}}const Y=(0,O.X1)(((e,t)=>{const r=(0,n.H)(Z.NT),a=Z.aX.selectProviders(e,s.l.all,r),o=Z.aX.selectProvidersError(e,s.l.all,r),l=Z.aX.selectProvidersFetchStatus(e,s.l.all,r);return{isExportsFeatureEnabled:V.iJ.selectIsExportsFeatureEnabled(e),providers:(0,E.BV)(a,s.l.aws),providersError:o,providersFetchStatus:l,providersQueryString:r}})),ee=(0,p.ZP)((0,u.connect)(Y,{})(U));var te=r(39836),re=r(91919),ae=r(98485),se=r(62423),oe=r(90569),ne=r(90302),le=r(54583),ie=r(68025);const ce=l.K.aws;class de extends d().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{groupBy:e,groupByCostCategory:t,groupByOrg:r,groupByTagKey:a,intl:s,isAllSelected:o,report:n,router:l,selectedItems:c}=this.props;if(!n)return;const p=[],u=(0,x.c)({report:n,idKey:t||a||(r?"org_entities":e)}),m=t||a||r?[{name:""},{name:t?s.formatMessage(i.Z.costCategoryNames):r?s.formatMessage(i.Z.names,{count:2}):s.formatMessage(i.Z.tagNames)},{name:s.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:s.formatMessage(i.Z.cost),style:ne.W.costColumn},u.length&&{isSortable:!0}),{name:""}]:[{name:""},Object.assign({orderBy:"account"===e?"account_alias":e,name:s.formatMessage(i.Z.detailsResourceNames,{value:e})},u.length&&{isSortable:!0}),{name:s.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:s.formatMessage(i.Z.cost),style:ne.W.costColumn},u.length&&{isSortable:!0}),{name:""}];u.map(((s,n)=>{const i=this.getTotalCost(s,n),u=this.getMonthOverMonthCost(s,n),m=s&&s.label&&null!==s.label?s.label:"",h=m===`${M.Xq}${e}`||m===`${M.Xq}${t}`||m===`${M.Xq}${a}`,g=s.id&&s.id!==s.label?d().createElement("div",{style:ne.W.infoDescription},s.id):null,y=this.getActions(s,h),S=h?m:d().createElement(te.Link,{to:(0,le.Z)({basePath:(0,ie.dI)(re._.awsDetailsBreakdown.path),description:s.id,groupBy:e,groupByOrg:r,id:s.id,router:l,title:s.label,type:s.type})},m);p.push({cells:[{},{value:d().createElement("div",null,S,g)},{value:u},{value:i,style:ne.W.managedColumn},{value:y}],item:s,selected:o||c&&void 0!==c.find((e=>e.id===s.id)),selectionDisabled:h})})),this.setState({columns:m,rows:p})},this.getActions=(e,t=!1)=>{const{groupBy:r,reportQueryString:a}=this.props;return d().createElement(se.e,{groupBy:r,isDisabled:t,item:e,reportPathsType:ce,reportQueryString:a})},this.getMonthOverMonthCost=(e,t)=>{const{intl:r}=this.props,a=(0,z.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),s=null!==e.delta_percent?(0,z.rl)(Math.abs(e.delta_percent)):0,o=!(0===s||"0.00"===s),n=null!==e.delta_percent;let l;return o&&(l="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(l+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(l+=" increase")),n?d().createElement("div",{className:"monthOverMonthOverride"},d().createElement("div",{className:l,key:`month-over-month-cost-${t}`},o?r.formatMessage(i.Z.percent,{value:s}):d().createElement(ae.L,null),o&&null!==e.delta_percent&&e.delta_value>0&&d().createElement("span",{className:"fa fa-sort-up",style:ne.W.infoArrow,key:`month-over-month-icon-${t}`}),o&&null!==e.delta_percent&&e.delta_value<0&&d().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},ne.W.infoArrow),ne.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),d().createElement("div",{style:ne.W.infoDescription,key:`month-over-month-info-${t}`},(0,N.Y)(a))):(0,N.Tf)()},this.getTotalCost=(e,t)=>{const{report:r,intl:a}=this.props,s=r&&r.meta&&r.meta.total&&r.meta.total.cost&&r.meta.total.cost.total?r.meta.total.cost.total.value:0,o=0===s?s.toFixed(2):(e.cost.total.value/s*100).toFixed(2);return d().createElement(d().Fragment,null,(0,z.xG)(e.cost.total.value,e.cost.total.units),d().createElement("div",{style:ne.W.infoDescription,key:`total-cost-${t}`},a.formatMessage(i.Z.percentOfCost,{value:o})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{report:t,selectedItems:r}=this.props,a=t&&t.data?JSON.stringify(t.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")===a&&e.selectedItems===r||this.initDatum()}render(){const{isLoading:e,onSelected:t,onSort:r,selectedItems:a}=this.props,{columns:s,rows:o}=this.state;return d().createElement(oe.w,{columns:s,isLoading:e,onSelected:t,onSort:r,rows:o,selectedItems:a})}}const pe=(0,p.ZP)((0,w.E)(de));var ue=r(39333),me=r(7893),he=r(98449),ge=r(19878),ye=r(48949),Se=r(94282);const ve=R.t.aws,fe=R.J.org,Ee=A.C.aws,be=A._.aws_category,Oe=j.L.aws,Ze=j.Q.tag;class Ce extends d().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,isCostCategoriesFeatureEnabled:t,orgReport:r,resourceReport:a,tagReport:s}=this.props,o=[{name:e.formatMessage(i.Z.filterByValues,{value:"account"}),key:"account"},{name:e.formatMessage(i.Z.filterByValues,{value:"service"}),key:"service"},{name:e.formatMessage(i.Z.filterByValues,{value:"region"}),key:"region"}];return r&&r.data&&r.data.length&&o.push({name:e.formatMessage(i.Z.filterByValues,{value:"org_unit_id"}),key:M.dV}),s&&s.data&&s.data.length&&o.push({name:e.formatMessage(i.Z.filterByValues,{value:M.up}),key:M.up}),a&&a.data&&a.data.length&&t&&o.push({name:e.formatMessage(i.Z.filterByValues,{value:M.tZ}),key:M.tZ}),o.sort(((e,t)=>e.name<t.name?-1:e.name>t.name?1:0))},this.updateReport=()=>{const{fetchOrg:e,fetchResource:t,fetchTag:r,isCostCategoriesFeatureEnabled:a,orgQueryString:s,resourceQueryString:o,tagQueryString:n}=this.props;e(ve,fe,s),a&&t(Ee,be,o),r(Oe,Ze,n)}}componentDidMount(){this.setState({categoryOptions:this.getCategoryOptions()},(()=>{this.updateReport()}))}componentDidUpdate(e){const{orgReport:t,query:r,resourceReport:a,tagReport:s}=this.props;(0,Se.X)(t,e.orgReport)&&(0,Se.X)(a,e.resourceReport)&&(0,Se.X)(s,e.tagReport)?r&&!(0,Se.X)(r,e.query)&&this.updateReport():this.setState({categoryOptions:this.getCategoryOptions()},(()=>{this.updateReport()}))}render(){const{groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isDisabled:a,isExportDisabled:s,itemsPerPage:o,itemsTotal:n,onBulkSelected:l,onExportClicked:i,onFilterAdded:c,onFilterRemoved:p,orgReport:u,pagination:m,query:h,resourceReport:g,selectedItems:y,tagReport:S}=this.props,{categoryOptions:v}=this.state;return d().createElement(me.k,{categoryOptions:v,groupBy:e,isAllSelected:t,isDisabled:a,isBulkSelectDisabled:r,isExportDisabled:s,itemsPerPage:o,itemsTotal:n,onBulkSelected:l,onExportClicked:i,onFilterAdded:c,onFilterRemoved:p,orgReport:u,pagination:m,query:h,resourcePathsType:Ee,resourceReport:g,selectedItems:y,showBulkSelect:!0,showExcludes:!0,showExport:!0,showFilter:!0,tagPathsType:Oe,tagReport:S})}}const Pe=(0,O.X1)(((e,t)=>{const r={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3},a=(0,ue.pm)({key_only:!0}),s=ge.CM.selectResource(e,Ee,be,a),o=ge.CM.selectResourceFetchStatus(e,Ee,be,a),n=(0,ue.pm)(Object.assign({},r)),l=ye.ux.selectTag(e,Oe,Ze,n),i=ye.ux.selectTagFetchStatus(e,Oe,Ze,n),c=(0,ue.pm)(Object.assign({},r)),d=he.zE.selectOrg(e,ve,fe,c),p=he.zE.selectOrgFetchStatus(e,ve,fe,c);return{isCostCategoriesFeatureEnabled:V.iJ.selectIsCostCategoriesFeatureEnabled(e),orgReport:d,orgReportFetchStatus:p,orgQueryString:c,resourceReport:s,resourceReportFetchStatus:o,resourceQueryString:a,tagReport:l,tagReportFetchStatus:i,tagQueryString:n}})),xe={fetchOrg:he.Lp.T7,fetchResource:ge.Px.PG,fetchTag:ye.xr.Xt},Te=(0,u.connect)(Pe,xe)(Ce),Me=(0,p.ZP)(Te),we={filter:{limit:10,offset:0},exclude:{},filter_by:{},group_by:{account:"*"},order_by:{cost:"desc"}},_e=l.C.cost,De=l.K.aws;class Be extends d().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,r=P(e.group_by),a=(0,v.qV)(e)||r;return(0,x.c)({report:t,idKey:a===M.dV?"org_entities":a})},this.getExportModal=e=>{const{query:t,report:r,reportQueryString:a}=this.props,{isAllSelected:s,isExportModalOpen:o,selectedItems:n}=this.state,l=P(t.group_by),i=(0,v.Sn)(t),c=(0,v.qV)(t),p=r&&r.meta?r.meta.count:0,u=[];return n.map((e=>{e.label!==`${M.Xq}${l}`&&e.label!==`${M.Xq}${c}`&&u.push(e)})),d().createElement(S.X,{count:s?p:u.length,isAllItems:(s||n.length===p)&&e.length>0,groupBy:i?`${M.LM}${i}`:c?`${M.P}${c}`:l,isOpen:o,items:u,onClose:this.handleExportModalClose,reportPathsType:De,reportQueryString:a})},this.getPagination=(e=!1,t=!1)=>{const{intl:r,query:s,router:o,report:n}=this.props,l=n&&n.meta?n.meta.count:0,c=n&&n.meta&&n.meta.filter&&n.meta.filter.limit?n.meta.filter.limit:we.filter.limit,p=n&&n.meta&&n.meta.filter&&n.meta.filter.offset?n.meta.filter.offset:we.filter.offset,u=Math.trunc(p/c+1);return d().createElement(a.Pagination,{isCompact:!t,isDisabled:e,itemCount:l,onPerPageSelect:(e,t)=>(0,f.xh)(s,o,t),onSetPage:(e,t)=>(0,f.$9)(s,o,n,t),page:u,perPage:c,titles:{paginationTitle:r.formatMessage(i.Z.paginationTitle,{title:r.formatMessage(i.Z.aws),placement:t?"bottom":"top"})},variant:t?a.PaginationVariant.bottom:a.PaginationVariant.top,widgetId:"exports-pagination"+(t?"-bottom":"")})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:r,reportQueryString:a,router:s}=this.props,{isAllSelected:o,selectedItems:n}=this.state,l=P(e.group_by),i=(0,v.Sn)(e),c=(0,v.qV)(e),p=(0,v.OA)(e);return d().createElement(pe,{groupBy:i?`${M.LM}${i}`:c?`${M.P}${c}`:l,groupByCostCategory:i,groupByTagKey:c,groupByOrg:p,isAllSelected:o,isLoading:r===O.iF.inProgress,onSelected:this.handleSelected,onSort:(t,r)=>(0,f.yB)(e,s,t,r),report:t,reportQueryString:a,selectedItems:n})},this.getToolbar=e=>{const{query:t,router:r,report:a}=this.props,{isAllSelected:s,selectedItems:o}=this.state,n=P(t.group_by),l=(0,v.Sn)(t),i=(0,v.qV)(t),c=0===e.length,p=a&&a.meta?a.meta.count:0;return d().createElement(Me,{groupBy:l?`${M.LM}${l}`:i?`${M.P}${i}`:n,isAllSelected:s,isDisabled:c,isExportDisabled:c||!s&&0===o.length,itemsPerPage:e.length,itemsTotal:p,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,f.$3)(t,r,e),onFilterRemoved:e=>(0,f.q7)(t,r,e),pagination:this.getPagination(c),query:t,selectedItems:o})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{query:t,router:r}=this.props;let a=e,s="*";-1!==(e&&e.indexOf(M.dV))&&(a=M.dV.substring(0,M.dV.length),s=e.slice(M.dV.length));const o=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{group_by:{[a]:s},order_by:void 0});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{r.navigate((0,b.Z)(o,r.location,!0),{replace:!0})}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:r,selectedItems:a}=this.state;let s=[...r?this.getComputedItems():a];e&&e.length>0&&(t?e.map((e=>s.push(e))):e.map((e=>{s=s.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:s})},this.updateReport=()=>{const{fetchReport:e,reportQueryString:t}=this.props;e(De,_e,t)},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{report:r,reportError:a,reportQueryString:s,router:o}=this.props,{selectedItems:n}=this.state,l=e.reportQueryString!==s,i=!r&&!a,c=!o.location.search,d=t.selectedItems!==n;(l||i||c||d)&&this.updateReport()}render(){const{costType:e,currency:t,intl:r,providers:a,providersFetchStatus:o,query:n,report:l,reportError:c,reportFetchStatus:p,router:u}=this.props,S=this.getComputedItems(),v=P(n.group_by),b=0===S.length,Z=r.formatMessage(i.Z.awsDetailsTitle);if(c)return d().createElement(y.W,{title:Z});if(o===O.iF.inProgress)return d().createElement(m.g,{title:Z});if(o===O.iF.complete){if(a&&a.meta&&0===a.meta.count)return d().createElement(g.L,{providerType:s.l.aws,title:Z});if(!(0,E.g8)(a))return d().createElement(h.J,{title:Z})}return d().createElement("div",{style:k.awsDetails},d().createElement(ee,{costType:e,currency:t,groupBy:v,onCostTypeSelected:e=>(0,f.jl)(n,u,e),onCurrencySelected:e=>(0,f._s)(n,u,e),onGroupBySelected:this.handleGroupBySelected,report:l}),d().createElement("div",{style:k.content},d().createElement("div",{style:k.toolbarContainer},this.getToolbar(S)),this.getExportModal(S),p===O.iF.inProgress?d().createElement(m.g,null):d().createElement(d().Fragment,null,d().createElement("div",{style:k.tableContainer},this.getTable()),d().createElement("div",{style:k.paginationContainer},d().createElement("div",{style:k.pagination},this.getPagination(b,!0))))))}}const ke=(0,O.X1)(((e,{router:t})=>{const r=(0,o.mB)(t.location.search),a=(0,T.uY)(),l=(0,T.zC)(),i=Object.assign(Object.assign({},we),r),c={cost_type:a,currency:l,delta:"cost",exclude:i.exclude,filter:Object.assign(Object.assign({},i.filter),{resolution:"monthly",time_scope_units:"month",time_scope_value:-1}),filter_by:Object.assign(Object.assign({},i.filter_by),i.filter_by&&i.filter_by[M.dV]&&{[`${M.pi}${M.dV}`]:i.filter_by[M.dV],[M.dV]:void 0}),group_by:i.group_by,order_by:i.order_by},d=(0,o.pm)(c),p=C.ZV.selectReport(e,De,_e,d),u=C.ZV.selectReportError(e,De,_e,d),m=C.ZV.selectReportFetchStatus(e,De,_e,d),h=(0,n.H)(Z.NT),g=Z.aX.selectProviders(e,s.l.all,h),y=Z.aX.selectProvidersError(e,s.l.all,h),S=Z.aX.selectProvidersFetchStatus(e,s.l.all,h);return{costType:a,currency:l,providers:(0,E.BV)(g,s.l.aws),providersError:y,providersFetchStatus:S,query:i,report:p,reportError:u,reportFetchStatus:m,reportQueryString:d}})),Re={fetchReport:C.nx.fetchReport},Ae=(0,p.ZP)((0,w.E)((0,u.connect)(ke,Re)(Be)))},62423:(e,t,r)=>{r.d(t,{e:()=>v});var a=r(90154),s=r(97027),o=r(92950),n=r.n(o),l=r(74806),i=r(77760),c=r(40493),d=r(1156),p=r(58613),u=r(14483),m=r(5842);class h extends n().Component{constructor(e,t){super(e,t),this.defaultState={isDropdownOpen:!1,isExportModalOpen:!1},this.state=Object.assign({},this.defaultState),this.getExportModal=()=>{const{groupBy:e,item:t,reportPathsType:r,reportQueryString:a}=this.props,{isExportModalOpen:s}=this.state;return n().createElement(c.X,{count:1,groupBy:e,isOpen:s,items:[t],onClose:this.handleExportModalClose,reportPathsType:r,reportQueryString:a})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleOnSelect=()=>{const{isDropdownOpen:e}=this.state;this.setState({isDropdownOpen:!e})},this.handleOnToggle=e=>{this.setState({isDropdownOpen:e})},this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleOnToggle=this.handleOnToggle.bind(this),this.handleOnSelect=this.handleOnSelect.bind(this)}render(){const{groupBy:e,isDisabled:t,showPriceListOption:r,intl:o,item:{source_uuid:l},redirectToCostModel:i,router:c}=this.props,d=[n().createElement(a.DropdownItem,{component:"button",isDisabled:t,key:"export-action",onClick:this.handleExportModalOpen},o.formatMessage(s.Z.detailsActionsExport))];return r&&d.unshift(n().createElement(a.DropdownItem,{component:"button",key:"price-list-action",isDisabled:t||e.includes(u.P)||0===l.length,onClick:()=>i(l[0],c)},o.formatMessage(s.Z.detailsActionsPriceList))),n().createElement(n().Fragment,null,n().createElement(a.Dropdown,{onSelect:this.handleOnSelect,toggle:n().createElement(a.KebabToggle,{onToggle:this.handleOnToggle}),isOpen:this.state.isDropdownOpen,isPlain:!0,position:"right",dropdownItems:d}),this.getExportModal())}}const g=(0,d.X1)(((e,t)=>({}))),y={redirectToCostModel:p.F0.redirectToCostModelFromSourceUuid},S=(0,i.connect)(g,y)(h),v=(0,l.ZP)((0,m.E)(S))},90302:(e,t,r)=>{r.d(t,{W:()=>i});var a=r(49382),s=r(12289),o=r(40794),n=r(11331),l=r(43789);const i={costColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end",paddingRight:0},defaultLabel:{minWidth:"50px"},emptyState:{backgroundColor:a.ZP.value,display:"flex",justifyContent:"center",paddingTop:n.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:l.ZP.value},infoDescription:{color:s.ZP.value,fontSize:o.ZP.value},lastReported:{textAlign:"right",paddingRight:"40px"},lastReportedColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end"},managedColumn:{textAlign:"right"},nameColumn:{width:"1%"}}},90569:(e,t,r)=>{r.d(t,{w:()=>y});var a=r(90154),s=r(52636),o=r(40227),n=r(79112),l=r(97027),i=r(92950),c=r.n(i),d=r(74806),p=r(42901),u=r(72483),m=r(5842),h=r(90302);class g extends c().Component{constructor(e){super(e),this.getEmptyState=()=>{const{intl:e,isOptimizations:t,router:r}=this.props,o=(0,n.mB)(r.location.search);if(o.filter_by)for(const e of Object.values(o.filter_by))if("*"!==e)return c().createElement(p.c,{filter:e,showMargin:!1});return t?c().createElement(u.Y,null):c().createElement(a.EmptyState,null,c().createElement(a.EmptyStateIcon,{icon:s.Xk}),c().createElement(a.EmptyStateBody,null,e.formatMessage(l.Z.detailsEmptyState)))},this.getSortBy=e=>{const{columns:t,router:r}=this.props,a=t[e].orderBy,s=(0,n.mB)(r.location.search),o=s&&s.order_by&&s.order_by[a];return o?{index:e,direction:o}:{}},this.getSortParams=e=>({sortBy:this.getSortBy(e),onSort:this.handleOnSort,columnIndex:e}),this.handleOnSelect=(e,t,r)=>{const{onSelected:a,rows:s}=this.props;let o,n=[];-1===r?o=s.map((e=>(e.selected=t,e))):(o=[...s],o[r].selected=t,n=[o[r].item]),this.setState({rows:s},(()=>{a&&a(n,t)}))},this.handleOnSort=(e,t,r)=>{const{columns:a,onSort:s}=this.props;s&&s(a[t].orderBy,r===o.SortByDirection.asc)},this.handleOnRowClick=(e,t)=>{const{onRowClick:r,rows:a}=this.props;a.map((e=>e.selected=!1)),a[t].selected=!0,this.setState({rows:a},(()=>{r&&r(e,t)}))},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}render(){const{columns:e,intl:t,isLoading:r,isOptimizations:s,rows:n}=this.props;return c().createElement(c().Fragment,null,c().createElement(o.TableComposable,{"aria-label":t.formatMessage(l.Z.dataTableAriaLabel),className:"tableOverride",gridBreakPoint:"grid-2xl",hasSelectableRowCaption:s,variant:o.TableVariant.compact},c().createElement(o.Thead,null,c().createElement(o.Tr,null,e.map(((e,t)=>c().createElement(o.Th,{key:`col-${t}-${e.value}`,modifier:"nowrap",sort:e.isSortable?this.getSortParams(t):void 0,style:e.style},e.name))))),c().createElement(o.Tbody,null,r?c().createElement(o.Tr,null,c().createElement(o.Td,{colSpan:100},c().createElement(a.Bullseye,null,c().createElement("div",{style:{textAlign:"center"}},c().createElement(a.Spinner,{size:"xl"}))))):n.map(((t,r)=>c().createElement(o.Tr,{isSelectable:s,isHoverable:s,isRowSelected:s&&t.selected,onRowClick:s?e=>this.handleOnRowClick(e,r):void 0,key:`row-${r}`},t.cells.map(((a,n)=>0!==n||s?c().createElement(o.Td,{dataLabel:e[n].name,key:`cell-${r}-${n}`,modifier:"nowrap",isActionCell:!s&&n===t.cells.length-1,style:a.style},a.value):c().createElement(o.Td,{dataLabel:e[n].name,key:`cell-${n}-${r}`,modifier:"nowrap",select:{disable:t.selectionDisabled,isSelected:t.selected,onSelect:(e,t)=>this.handleOnSelect(e,t,r),rowIndex:r},style:a.style})))))))),0===n.length&&c().createElement("div",{style:h.W.emptyState},this.getEmptyState()))}}const y=(0,d.ZP)((0,m.E)(g))},19727:(e,t,r)=>{r.d(t,{$3:()=>c,$9:()=>u,_s:()=>n,cZ:()=>i,jl:()=>l,q7:()=>d,xh:()=>p,yB:()=>m});var a=r(9256),s=r(10066);const o=(e,t,r,a=!1)=>{const o=Object.assign({},JSON.parse(JSON.stringify(e)));t.navigate((0,s.Z)(o,t.location,a),{replace:!0})},n=(e,t,r,a=!1)=>{o(e,t,0,a)},l=(e,t,r,a=!1)=>{o(e,t,0,a)},i=(e,t,r,a=!1)=>{const s=Object.assign(Object.assign({},JSON.parse(JSON.stringify(e))),{order_by:void 0});o(s,t,0,a)},c=(e,t,r)=>{const o=(0,a.oQ)(e,r);t.navigate((0,s.Z)(o,t.location,!0),{replace:!0})},d=(e,t,r)=>{const o=(0,a.cJ)(e,r);t.navigate((0,s.Z)(o,t.location,!0),{replace:!0})},p=(e,t,r)=>{const a=Object.assign({},JSON.parse(JSON.stringify(e)));a.filter=Object.assign(Object.assign({},e.filter),{limit:r});const o=(0,s.Z)(a,t.location,!0);t.navigate(o,{replace:!0})},u=(e,t,r,a)=>{const o=r&&r.meta&&r.meta.filter&&r.meta.filter.limit?r.meta.filter.limit:10,n=a*o-o,l=Object.assign({},JSON.parse(JSON.stringify(e)));l.filter=Object.assign(Object.assign({},e.filter),{offset:n});const i=(0,s.Z)(l,t.location);t.navigate(i,{replace:!0})},m=(e,t,r,a,o=undefined)=>{const n=Object.assign({},JSON.parse(JSON.stringify(e)));n.order_by={},n.order_by[r]=a?"asc":"desc",o&&(n.order_by.date=o);const l=(0,s.Z)(n,t.location);t.navigate(l,{replace:!0})}},86482:(e,t,r)=>{var a;r.d(t,{BV:()=>o,Bj:()=>c,D2:()=>d,JY:()=>p,Mg:()=>m,at:()=>i,g8:()=>u,rL:()=>h}),function(e){e.currentMonthData="current_month_data",e.hasData="has_data",e.previousMonthData="previous_month_data"}(a||(a={}));const s=(e,t)=>{let r;if(e&&e.data)for(const a of e.data)if(a.infrastructure&&a.infrastructure.uuid===t){r=a;break}return r},o=(e,t)=>{if(!e)return e;const r=e.data.filter((e=>e.source_type.toLowerCase()===t)),a=Object.assign(Object.assign({},e.meta),{count:r.length});return Object.assign(Object.assign({},e),{meta:a,data:r})},n=(e,t)=>{let r=!1;if(e&&e.data)for(const a of e.data)if(a[t]){r=!0;break}return r},l=(e,t,r)=>{let a=!1;if(e&&e.data)for(const o of e.data){const e=s(t,o.uuid);if(e&&e[r]){a=!0;break}}return a},i=(e,t)=>l(e,t,a.currentMonthData),c=(e,t)=>l(e,t,a.hasData),d=(e,t)=>l(e,t,a.previousMonthData),p=(e,t)=>((e,t)=>{let r=!1;if(e&&e.data)for(const a of e.data)if(s(t,a.uuid)){r=!0;break}return r})(e,t),u=e=>n(e,a.currentMonthData),m=e=>n(e,a.hasData),h=e=>n(e,a.previousMonthData)},10066:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(39333);const s=(e,t,r=!1)=>(r&&(e.filter&&void 0!==e.filter.offset&&(e.filter=Object.assign(Object.assign({},e.filter),{offset:0})),void 0!==e.offset&&(e.offset=0)),`${t.pathname}?${(0,a.IV)(e)}`)},84735:(e,t,r)=>{e.exports=r.p+"fonts/Cost-icon.svg"},80794:(e,t,r)=>{e.exports=r.p+"fonts/Red_Hat-IT_Optimization-Gray.svg"}}]);
//# sourceMappingURL=../sourcemaps/awsDetails.06db45e76ea9f7784d676b20a638d117.js.map