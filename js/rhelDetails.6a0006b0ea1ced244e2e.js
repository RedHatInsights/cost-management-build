"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[7990],{84717:(e,t,a)=>{a.d(t,{H:()=>n});var r=a(80129);function n(e){return(0,r.stringify)(e,{encode:!1,indices:!1})}},6450:(e,t,a)=>{a.d(t,{F:()=>y,m:()=>p});var r=a(90154),n=a(97027),l=a(92950),o=a.n(l),s=a(74806),i=a(77760),c=a(1156),u=a(15829);const d={currencySelector:{display:"flex",alignItems:"center"},currencyLabel:{marginBottom:0,marginRight:a(32412).ZP.var,whiteSpace:"nowrap"}},p=[{label:n.Z.currencyOptions,value:"AUD"},{label:n.Z.currencyOptions,value:"CAD"},{label:n.Z.currencyOptions,value:"CHF"},{label:n.Z.currencyOptions,value:"CNY"},{label:n.Z.currencyOptions,value:"DKK"},{label:n.Z.currencyOptions,value:"EUR"},{label:n.Z.currencyOptions,value:"GBP"},{label:n.Z.currencyOptions,value:"HKD"},{label:n.Z.currencyOptions,value:"JPY"},{label:n.Z.currencyOptions,value:"NOK"},{label:n.Z.currencyOptions,value:"NZD"},{label:n.Z.currencyOptions,value:"SEK"},{label:n.Z.currencyOptions,value:"SGD"},{label:n.Z.currencyOptions,value:"USD"},{label:n.Z.currencyOptions,value:"ZAR"}];class m extends o().Component{constructor(){super(...arguments),this.defaultState={isSelectOpen:!1},this.state=Object.assign({},this.defaultState),this.getSelect=()=>{const{currency:e,isDisabled:t}=this.props,{isSelectOpen:a}=this.state,n=this.getSelectOptions(),l=n.find((t=>t.value===e));return o().createElement(r.Select,{className:"currencyOverride",id:"currencySelect",isDisabled:t,isOpen:a,onSelect:this.handleSelect,onToggle:this.handleToggle,selections:l,variant:r.SelectVariant.single},n.map((e=>o().createElement(r.SelectOption,{key:e.value,value:e}))))},this.getSelectOptions=()=>{const{intl:e}=this.props,t=[];return p.map((a=>{t.push({toString:()=>e.formatMessage(a.label,{units:a.value}),value:a.value})})),t},this.handleSelect=(e,t)=>{const{onSelect:a}=this.props;(0,u.NW)(t.value),this.setState({isSelectOpen:!1},(()=>{a&&a(t.value)}))},this.handleToggle=e=>{this.setState({isSelectOpen:e})}}render(){const{intl:e}=this.props;return o().createElement("div",{style:d.currencySelector},o().createElement(r.Title,{headingLevel:"h2",size:"md",style:d.currencyLabel},e.formatMessage(n.Z.currency)),this.getSelect())}}const h=(0,c.X1)((()=>({}))),g=(0,i.connect)(h,{})(m),y=(0,s.ZP)(g)},55672:(e,t,a)=>{a.d(t,{J:()=>r.Z});var r=a(83819)},83819:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(90154),n=a(89376),l=a(39173),o=a(92950),s=a.n(o),i=a(7081),c=a(97027),u=a(74806);class d extends s().Component{render(){const{intl:e,showReload:t=!0}=this.props;return s().createElement(r.EmptyState,{variant:r.EmptyStateVariant.large,className:"pf-m-redhat-font"},s().createElement(r.EmptyStateIcon,{icon:i.wl}),s().createElement(r.Title,{headingLevel:"h5",size:"lg"},e.formatMessage(c.Z.noDataStateTitle)),s().createElement(r.EmptyStateBody,null,e.formatMessage(c.Z.noDataStateDesc)),t&&s().createElement(r.Button,{variant:"primary",onClick:()=>window.location.reload()},e.formatMessage(c.Z.noDataStateRefresh)))}}const p=(0,u.ZP)(d),m=({showReload:e,title:t})=>s().createElement(s().Fragment,null,t&&s().createElement(n.Z,null,s().createElement(l.Z,{title:t})),s().createElement(r.PageSection,null,s().createElement(p,{showReload:e})))},2985:(e,t,a)=>{a.d(t,{L:()=>b});var r=a(90154),n=a(89376),l=a(39173),o=a(92950),s=a.n(o),i=a(15265),c=a(7081),u=a(1326),d=a(97027),p=a(74806);const m=a(84735),h=(0,p.ZP)((({className:e,intl:t})=>s().createElement("img",{className:`cost-icon ${e}`,src:m,alt:t.formatMessage(d.Z.costManagement),"aria-hidden":"true"})));var g=a(68025),y=a(98499);const v={iconSpacer:{marginLeft:a(43789).ZP.value},viewSources:{marginTop:y.ZP.value}};class f extends s().Component{constructor(){super(...arguments),this.getDocLink=(e,t)=>{const{intl:a}=this.props;return s().createElement("a",{href:a.formatMessage(t),rel:"noreferrer",target:"_blank"},a.formatMessage(e),s().createElement("span",{style:v.iconSpacer},s().createElement(i.LA,null)))},this.getRouteToSources=()=>`${(0,g.IG)()}/settings/sources`}render(){const{intl:e,providerType:t}=this.props;let a,n,l,o=d.Z.noProvidersStateOverviewDesc,i=d.Z.noProvidersStateOverviewTitle;switch(t){case u.l.aws:o=d.Z.noProvidersStateAwsDesc,i=d.Z.noProvidersStateAwsTitle;break;case u.l.azure:o=d.Z.noProvidersStateAzureDesc,i=d.Z.noProvidersStateAzureTitle;break;case u.l.gcp:o=d.Z.noProvidersStateGcpDesc,i=d.Z.noProvidersStateGcpTitle;break;case u.l.ibm:o=d.Z.noProvidersStateIbmDesc,i=d.Z.noProvidersStateIbmTitle;break;case u.l.ocp:o=d.Z.noProvidersStateOcpDesc,a=d.Z.docsAddOcpSources,l=d.Z.noProvidersStateOcpAddSources,i=d.Z.noProvidersStateOcpTitle;break;default:n=h}return s().createElement(r.EmptyState,{variant:r.EmptyStateVariant.large,className:"pf-m-redhat-font"},s().createElement(r.EmptyStateIcon,{icon:n||c.wl}),s().createElement(r.Title,{headingLevel:"h1",size:"lg"},e.formatMessage(i)),s().createElement(r.EmptyStateBody,null,e.formatMessage(o)),a&&l?s().createElement("div",{style:v.viewSources},this.getDocLink(l,a)):s().createElement(r.Button,{variant:"primary",component:"a",href:this.getRouteToSources()},e.formatMessage(d.Z.noProvidersStateGetStarted)))}}const S=(0,p.ZP)(f),b=({providerType:e,title:t})=>s().createElement(s().Fragment,null,t&&s().createElement(n.Z,null,s().createElement(l.Z,{title:t})),s().createElement(r.PageSection,null,s().createElement(S,{providerType:e})))},47947:(e,t,a)=>{a.d(t,{W:()=>c});var r=a(90154),n=a(89376),l=a(39173),o=a(15984),s=a(92950),i=a.n(s);const c=({title:e})=>i().createElement(i().Fragment,null,e&&i().createElement(n.Z,null,i().createElement(l.Z,{title:e})),i().createElement(r.PageSection,null,i().createElement(o.Z,null)))},23806:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_e});var r=a(90154),n=a(1326),l=a(84717),o=a(75660),s=a(6456),i=a(97027),c=a(44439),u=a(92950),d=a.n(u),p=a(74806),m=a(77760),h=a(52471),g=a(55672),y=a(2985),v=a(47947),f=a(40493),S=a(44348),b=a(37269),E=a(19727),C=a(86482),O=a(10066),Z=a(1156),M=a(62331),P=a(15920),D=a(69511);function x(e={}){return e.project?"project":e.cluster?"cluster":e.node?"node":"date"}var T=a(15829),k=a(14483),B=a(5842),_=a(50081),j=a(26744),I=a(6450),F=a(98485),w=a(36465),A=a(22369),L=a(45087),R=a(91778),N=a(49382),$=a(33605),W=a(17918),J=a(54881),V=a(98499),q=a(48196);const G={costValue:{marginTop:V.ZP.var,marginBottom:0},costLabelUnit:{fontSize:J.ZP.value,color:$.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:N.ZP.var,padding:V.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},info:{verticalAlign:"middle"},infoIcon:{fontSize:W.ZP.value},infoTitle:{fontWeight:"bold"},title:{paddingBottom:q.ZP.var}},X=[{label:"cluster",value:"cluster"},{label:"node",value:"node"},{label:"project",value:"project"}],Q=_.L.rhel;class K extends d().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState)}render(){const{currency:e,groupBy:t,isExportsFeatureEnabled:a,onCurrencySelected:n,onGroupBySelected:l,providers:o,providersError:s,report:c,intl:u}=this.props,p=c&&!s&&o&&o.meta&&o.meta.count>0;let m=d().createElement(F.L,null),h=d().createElement(F.L,null),g=d().createElement(F.L,null);if(c&&c.meta&&c.meta.total){const e=c.meta.total.cost&&c.meta.total.cost.total,t=c.meta.total.supplementary&&c.meta.total.supplementary.total,a=c.meta.total.infrastructure&&c.meta.total.infrastructure.total;m=(0,R.xG)(e?c.meta.total.cost.total.value:0,e?c.meta.total.cost.total.units:"USD"),h=(0,R.xG)(t?c.meta.total.supplementary.total.value:0,t?c.meta.total.supplementary.total.units:"USD"),g=(0,R.xG)(a?c.meta.total.infrastructure.total.value:0,a?c.meta.total.infrastructure.total.units:"USD")}return d().createElement("header",{style:G.header},d().createElement("div",{style:G.headerContent},d().createElement(r.Title,{headingLevel:"h1",style:G.title,size:r.TitleSizes["2xl"]},u.formatMessage(i.Z.rhelDetailsTitle)),d().createElement("div",{style:G.headerContentRight},d().createElement(I.F,{currency:e,onSelect:n}),a&&d().createElement(j.bj,null))),d().createElement("div",{style:G.headerContent},d().createElement("div",{style:G.headerContentLeft},d().createElement(w.X,{getIdKeyForGroupBy:x,groupBy:t,isDisabled:!p,onSelected:l,options:X,showTags:!0,tagPathsType:Q})),p&&d().createElement("div",null,d().createElement(r.Tooltip,{content:u.formatMessage(i.Z.dashboardTotalCostTooltip,{infrastructureCost:g,supplementaryCost:h}),enableFlip:!0},d().createElement(r.Title,{headingLevel:"h2",style:G.costValue,size:r.TitleSizes["4xl"]},m)),d().createElement("div",{style:G.dateTitle},(0,L.J4)()))))}}const z=(0,Z.X1)(((e,t)=>{const a=(0,l.H)(M.NT),r=M.aX.selectProviders(e,n.l.all,a),o=M.aX.selectProvidersError(e,n.l.all,a),s=M.aX.selectProvidersFetchStatus(e,n.l.all,a);return{isExportsFeatureEnabled:A.iJ.selectIsExportsFeatureEnabled(e),providers:(0,C.BV)(r,n.l.rhel),providersError:o,providersFetchStatus:s,providersQueryString:a}})),U=(0,p.ZP)((0,m.connect)(z,{})(K));var H=a(39836),Y=a(91919),ee=a(62423),te=a(90569),ae=a(90302),re=a(54583),ne=a(68025);const le="infrastructure",oe="monthOverMonth",se="supplementary",ie=s.K.rhel;class ce extends d().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{groupBy:e,groupByTagKey:t,hiddenColumns:a,intl:n,isAllSelected:l,report:o,router:s,selectedItems:c}=this.props;if(!o)return;const u="project"===e,p=[],m=(0,D.c)({report:o,idKey:t||e}),h=t?[{name:""},{name:n.formatMessage(i.Z.tagNames),style:"project"===e?ae.W.nameColumn:void 0},{hidden:!u,name:""},{name:n.formatMessage(i.Z.monthOverMonthChange)},{id:le,name:n.formatMessage(i.Z.rhelDetailsInfrastructureCost),style:ae.W.managedColumn},{id:se,name:n.formatMessage(i.Z.rhelDetailsSupplementaryCost),style:ae.W.managedColumn},Object.assign({orderBy:"cost",name:n.formatMessage(i.Z.cost),style:ae.W.costColumn},m.length&&{isSortable:!0}),{name:""}]:[{name:""},Object.assign(Object.assign({orderBy:e,name:n.formatMessage(i.Z.detailsResourceNames,{value:e})},m.length&&{isSortable:!0}),{style:"project"===e?ae.W.nameColumn:void 0}),{hidden:!u,name:""},{id:oe,name:n.formatMessage(i.Z.monthOverMonthChange)},{id:le,orderBy:"infrastructure_cost",name:n.formatMessage(i.Z.rhelDetailsInfrastructureCost),style:ae.W.managedColumn},{id:se,orderBy:"supplementary_cost",name:n.formatMessage(i.Z.rhelDetailsSupplementaryCost),style:ae.W.managedColumn},Object.assign({orderBy:"cost",name:n.formatMessage(i.Z.cost),style:ae.W.costColumn},m.length&&{isSortable:!0}),{name:""}];m.map(((a,o)=>{const m=this.getTotalCost(a,o),h=a&&null!==a.label?a.label:"",g=this.getMonthOverMonthCost(a,o),y=this.getSupplementaryCost(a,o),v=this.getInfrastructureCost(a,o),f=a.id&&a.id!==a.label?d().createElement("div",{style:ae.W.infoDescription},a.id):null,S=h===`${k.Xq}${e}`||h===`${k.Xq}${t}`,b=this.getActions(a,S),E=S?h:d().createElement(H.Link,{to:(0,re.T)({basePath:(0,ne.dI)(Y._.rhelDetailsBreakdown.path),description:a.id,groupBy:e,id:a.id,router:s,title:h.toString()})},h);p.push({cells:[{},{value:d().createElement(d().Fragment,null,d().createElement("div",null,E),d().createElement("div",{style:ae.W.infoDescription},f))},{hidden:!u,value:a.default_project?d().createElement("div",null,d().createElement(r.Label,{variant:"outline",color:"green"},n.formatMessage(i.Z.default))):d().createElement("div",{style:ae.W.defaultLabel})},{value:d().createElement("div",null,g),id:oe},{value:d().createElement("div",null,v),id:le,style:ae.W.managedColumn},{value:d().createElement("div",null,y),id:se,style:ae.W.managedColumn},{value:d().createElement("div",null,m),style:ae.W.managedColumn},{value:d().createElement("div",null,b)}],item:a,selected:l||c&&void 0!==c.find((e=>e.id===a.id)),selectionDisabled:S})}));const g=h.filter((e=>!a.has(e.id)&&!e.hidden)),y=p.map((e=>{var t=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,[]);return t.cells=t.cells.filter((e=>!a.has(e.id)&&!e.hidden)),t}));this.setState({columns:g,rows:y})},this.getActions=(e,t)=>{const{groupBy:a,reportQueryString:r}=this.props;return d().createElement(ee.e,{groupBy:a,isDisabled:t,item:e,providerType:n.l.rhel,reportPathsType:ie,reportQueryString:r,showPriceListOption:"cluster"===a})},this.getSupplementaryCost=(e,t)=>{const{report:a,intl:r}=this.props,n=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total?a.meta.total.cost.total.value:0,l=0===n?n.toFixed(2):(e.supplementary.total.value/n*100).toFixed(2);return d().createElement(d().Fragment,null,(0,R.xG)(e.supplementary.total.value,e.supplementary.total.units),d().createElement("div",{style:ae.W.infoDescription,key:`total-cost-${t}`},r.formatMessage(i.Z.percentOfCost,{value:l})))},this.getInfrastructureCost=(e,t)=>{const{report:a,intl:r}=this.props,n=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total?a.meta.total.cost.total.value:0,l=0===n?n.toFixed(2):(e.infrastructure.total.value/n*100).toFixed(2);return d().createElement(d().Fragment,null,(0,R.xG)(e.infrastructure.total.value,e.infrastructure.total.units),d().createElement("div",{style:ae.W.infoDescription,key:`total-cost-${t}`},r.formatMessage(i.Z.percentOfCost,{value:l})))},this.getMonthOverMonthCost=(e,t)=>{const{intl:a}=this.props,r=(0,R.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),n=null!==e.delta_percent?(0,R.rl)(Math.abs(e.delta_percent)):0,l=!(0===n||"0.00"===n),o=null!==e.delta_percent;let s;return l&&(s="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(s+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(s+=" increase")),o?d().createElement("div",{className:"monthOverMonthOverride"},d().createElement("div",{className:s,key:`month-over-month-cost-${t}`},l?a.formatMessage(i.Z.percent,{value:n}):d().createElement(F.L,null),l&&null!==e.delta_percent&&e.delta_value>0&&d().createElement("span",{className:"fa fa-sort-up",style:ae.W.infoArrow,key:`month-over-month-icon-${t}`}),l&&null!==e.delta_percent&&e.delta_value<0&&d().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},ae.W.ininfoArrow),ae.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),d().createElement("div",{style:ae.W.infoDescription,key:`month-over-month-info-${t}`},(0,L.Y)(r))):(0,L.Tf)()},this.getTotalCost=(e,t)=>{const{report:a,intl:r}=this.props,n=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total?a.meta.total.cost.total.value:0,l=0===n?n.toFixed(2):(e.cost.total.value/n*100).toFixed(2);return d().createElement(d().Fragment,null,(0,R.xG)(e.cost.total.value,e.cost.total.units),d().createElement("div",{style:ae.W.infoDescription,key:`total-cost-${t}`},r.formatMessage(i.Z.percentOfCost,{value:l})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{hiddenColumns:t,report:a,selectedItems:r}=this.props,n=a&&a.data?JSON.stringify(a.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")===n&&e.selectedItems===r&&e.hiddenColumns===t||this.initDatum()}render(){const{isLoading:e,onSelected:t,onSort:a,selectedItems:r}=this.props,{columns:n,rows:l}=this.state;return d().createElement(te.w,{columns:n,isLoading:e,onSelected:t,onSort:a,rows:l,selectedItems:r})}}const ue=(0,p.ZP)((0,B.E)(ce));var de=a(79112),pe=a(36116),me=a(7893),he=a(48949),ge=a(94282);const ye=_.Q.tag,ve=_.L.ocp;class fe extends d().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,a=[{name:e.formatMessage(i.Z.filterByValues,{value:"cluster"}),key:"cluster"},{name:e.formatMessage(i.Z.filterByValues,{value:"node"}),key:"node"},{name:e.formatMessage(i.Z.filterByValues,{value:"project"}),key:"project"}];return t&&t.data&&t.data.length&&a.push({name:e.formatMessage(i.Z.filterByValues,{value:k.up}),key:k.up}),a},this.updateReport=()=>{const{fetchTag:e,tagQueryString:t}=this.props;e(ve,ye,t)}}componentDidMount(){this.setState({categoryOptions:this.getCategoryOptions()},(()=>{this.updateReport()}))}componentDidUpdate(e){const{query:t,tagReport:a}=this.props;(0,ge.X)(a,e.tagReport)?t&&!(0,ge.X)(t,e.query)&&this.updateReport():this.setState({categoryOptions:this.getCategoryOptions()},(()=>{this.updateReport()}))}render(){const{groupBy:e,isAllSelected:t,isDisabled:a,isExportDisabled:r,itemsPerPage:n,itemsTotal:l,onBulkSelected:o,onColumnManagementClicked:s,onExportClicked:i,onFilterAdded:c,onFilterRemoved:u,pagination:p,query:m,selectedItems:h,tagReport:g}=this.props,{categoryOptions:y}=this.state;return d().createElement(me.k,{categoryOptions:y,groupBy:e,isAllSelected:t,isDisabled:a,isExportDisabled:r,itemsPerPage:n,itemsTotal:l,onBulkSelected:o,onColumnManagementClicked:s,onExportClicked:i,onFilterAdded:c,onFilterRemoved:u,pagination:p,query:m,resourcePathsType:pe.C.ocp,selectedItems:h,showBulkSelect:!0,showColumnManagement:!0,showExcludes:!0,showExport:!0,showFilter:!0,tagReport:g,tagPathsType:ve})}}const Se=(0,Z.X1)(((e,t)=>{const a=(0,de.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3});return{tagReport:he.ux.selectTag(e,ve,ye,a),tagReportFetchStatus:he.ux.selectTagFetchStatus(e,ve,ye,a),tagQueryString:a}})),be={fetchTag:he.xr.Xt},Ee=(0,m.connect)(Se,be)(fe),Ce=(0,p.ZP)(Ee);var Oe=a(32412);const Ze={content:{paddingBottom:V.ZP.value,paddingTop:V.ZP.value},ocpDetails:{minHeight:"100%"},paginationContainer:{marginLeft:V.ZP.value,marginRight:V.ZP.value},pagination:{backgroundColor:N.ZP.value,paddingBottom:Oe.ZP.value,paddingTop:Oe.ZP.value},tableContainer:{marginLeft:V.ZP.value,marginRight:V.ZP.value},toolbarContainer:{marginLeft:V.ZP.value,marginRight:V.ZP.value}},Me={filter:{limit:10,offset:0},exclude:{},filter_by:{},group_by:{project:"*"},order_by:{cost:"desc"}},Pe=[{label:i.Z.monthOverMonthChange,value:oe},{description:i.Z.ocpDetailsInfrastructureCostDesc,label:i.Z.ocpDetailsInfrastructureCost,value:le,hidden:!0},{description:i.Z.ocpDetailsSupplementaryCostDesc,label:i.Z.ocpDetailsSupplementaryCost,value:se,hidden:!0}],De=s.C.cost,xe=s.K.ocp;class Te extends d().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],hiddenColumns:(0,S.Y)(Pe),isAllSelected:!1,isColumnManagementModalOpen:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getColumnManagementModal=()=>{const{hiddenColumns:e,isColumnManagementModalOpen:t}=this.state,a=(0,c.cloneDeep)(Pe);return a.map((t=>{t.hidden=e.has(t.value)})),d().createElement(S.$,{isOpen:t,options:a,onClose:this.handleColumnManagementModalClose,onSave:this.handleColumnManagementModalSave})},this.getComputedItems=()=>{const{query:e,report:t}=this.props,a=x(e.group_by),r=(0,b.qV)(e);return(0,D.c)({report:t,idKey:r||a})},this.getExportModal=e=>{const{query:t,report:a,reportQueryString:r}=this.props,{isAllSelected:n,isExportModalOpen:l,selectedItems:o}=this.state,s=x(t.group_by),i=(0,b.qV)(t),c=a&&a.meta?a.meta.count:0,u=[];return o.map((e=>{e.label!==`${k.Xq}${s}`&&e.label!==`${k.Xq}${i}`&&u.push(e)})),d().createElement(f.X,{count:n?c:u.length,isAllItems:(n||o.length===c)&&e.length>0,groupBy:i?`${k.P}${i}`:s,isOpen:l,items:u,onClose:this.handleExportModalClose,reportPathsType:xe,reportQueryString:r})},this.getPagination=(e=!1,t=!1)=>{const{intl:a,query:n,report:l,router:o}=this.props,s=l&&l.meta?l.meta.count:0,c=l&&l.meta&&l.meta.filter&&l.meta.filter.limit?l.meta.filter.limit:Me.filter.limit,u=l&&l.meta&&l.meta.filter&&l.meta.filter.offset?l.meta.filter.offset:Me.filter.offset,p=Math.trunc(u/c+1);return d().createElement(r.Pagination,{isCompact:!t,isDisabled:e,itemCount:s,onPerPageSelect:(e,t)=>(0,E.Lk)(n,o,t),onSetPage:(e,t)=>(0,E.F4)(n,o,l,t),page:p,perPage:c,titles:{paginationTitle:a.formatMessage(i.Z.paginationTitle,{title:a.formatMessage(i.Z.openShift),placement:t?"bottom":"top"})},variant:t?r.PaginationVariant.bottom:r.PaginationVariant.top,widgetId:"exports-pagination"+(t?"-bottom":"")})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:a,reportQueryString:r,router:n}=this.props,{hiddenColumns:l,isAllSelected:o,selectedItems:s}=this.state,i=x(e.group_by),c=(0,b.qV)(e);return d().createElement(ue,{groupBy:c?`${k.P}${c}`:i,groupByTagKey:c,hiddenColumns:l,isAllSelected:o,isLoading:a===Z.iF.inProgress,onSelected:this.handleSelected,onSort:(t,a)=>(0,E.K8)(e,n,t,a),report:t,reportQueryString:r,selectedItems:s})},this.getToolbar=e=>{const{query:t,report:a,router:r}=this.props,{isAllSelected:n,selectedItems:l}=this.state,o=x(t.group_by),s=(0,b.qV)(t),i=0===e.length,c=a&&a.meta?a.meta.count:0;return d().createElement(Ce,{groupBy:s?`${k.P}${s}`:o,isAllSelected:n,isDisabled:i,isExportDisabled:i||!n&&0===l.length,itemsPerPage:e.length,itemsTotal:c,onBulkSelected:this.handleBulkSelected,onColumnManagementClicked:this.handleColumnManagementModalOpen,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,E.JA)(t,r,e),onFilterRemoved:e=>(0,E.vI)(t,r,e),pagination:this.getPagination(),query:t,selectedItems:l})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleColumnManagementModalClose=e=>{this.setState({isColumnManagementModalOpen:e})},this.handleColumnManagementModalOpen=()=>{this.setState({isColumnManagementModalOpen:!0})},this.handleColumnManagementModalSave=e=>{this.setState({hiddenColumns:e})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{query:t,router:a}=this.props,r=e,n=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{group_by:{[r]:"*"},order_by:void 0,category:void 0});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{a.navigate((0,O.Z)(n,a.location,!0),{replace:!0})}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:a,selectedItems:r}=this.state;let n=[...a?this.getComputedItems():r];e&&e.length>0&&(t?e.map((e=>n.push(e))):e.map((e=>{n=n.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:n})},this.updateReport=()=>{const{fetchReport:e,reportQueryString:t}=this.props;e(xe,De,t)},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleColumnManagementModalClose=this.handleColumnManagementModalClose.bind(this),this.handleColumnManagementModalOpen=this.handleColumnManagementModalOpen.bind(this),this.handleColumnManagementModalSave=this.handleColumnManagementModalSave.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{report:a,reportError:r,reportQueryString:n,router:l}=this.props,{selectedItems:o}=this.state,s=e.reportQueryString!==n,i=!a&&!r,c=!l.location.search,u=t.selectedItems!==o;(s||i||c||u)&&this.updateReport()}render(){const{currency:e,intl:t,providers:a,providersFetchStatus:r,query:l,report:o,reportError:s,reportFetchStatus:c,router:u}=this.props,p=this.getComputedItems(),m=x(l.group_by),f=0===p.length,S=t.formatMessage(i.Z.ocpDetailsTitle);if(s)return d().createElement(v.W,{title:S});if(r===Z.iF.inProgress)return d().createElement(h.g,{title:S});if(r===Z.iF.complete){if(a&&a.meta&&0===a.meta.count)return d().createElement(y.L,{providerType:n.l.ocp,title:S});if(!(0,C.g8)(a))return d().createElement(g.J,{title:S})}return d().createElement("div",{style:Ze.ocpDetails},d().createElement(U,{currency:e,groupBy:m,onCurrencySelected:e=>(0,E.LB)(l,u,e),onGroupBySelected:this.handleGroupBySelected,report:o}),d().createElement("div",{style:Ze.content},d().createElement("div",{style:Ze.toolbarContainer},this.getToolbar(p)),this.getExportModal(p),this.getColumnManagementModal(),c===Z.iF.inProgress?d().createElement(h.g,null):d().createElement(d().Fragment,null,d().createElement("div",{style:Ze.tableContainer},this.getTable()),d().createElement("div",{style:Ze.paginationContainer},d().createElement("div",{style:Ze.pagination},this.getPagination(f,!0))))))}}const ke=(0,Z.X1)(((e,{router:t})=>{const a=(0,o.mB)(t.location.search),r=(0,T.zC)(),s=Object.assign(Object.assign({},Me),a),i={currency:r,delta:"cost",exclude:s.exclude,filter:Object.assign(Object.assign({},s.filter),{resolution:"monthly",time_scope_units:"month",time_scope_value:-1}),filter_by:s.filter_by,group_by:s.group_by,order_by:s.order_by},c=(0,o.pm)(i),u=P.ZV.selectReport(e,xe,De,c),d=P.ZV.selectReportError(e,xe,De,c),p=P.ZV.selectReportFetchStatus(e,xe,De,c),m=(0,l.H)(M.NT),h=M.aX.selectProviders(e,n.l.all,m),g=M.aX.selectProvidersFetchStatus(e,n.l.all,m);return{currency:r,providers:(0,C.BV)(h,n.l.ocp),providersFetchStatus:g,query:s,report:u,reportError:d,reportFetchStatus:p,reportQueryString:c}})),Be={fetchReport:P.nx.fetchReport},_e=(0,p.ZP)((0,B.E)((0,m.connect)(ke,Be)(Te)))},19727:(e,t,a)=>{a.d(t,{F4:()=>p,JA:()=>c,K8:()=>m,LB:()=>o,Lk:()=>d,bU:()=>i,ft:()=>s,vI:()=>u});var r=a(9256),n=a(10066);const l=(e,t,a,r=!1)=>{const l=Object.assign({},JSON.parse(JSON.stringify(e)));t.navigate((0,n.Z)(l,t.location,r),{replace:!0})},o=(e,t,a,r=!1)=>{l(e,t,0,r)},s=(e,t,a,r=!1)=>{l(e,t,0,r)},i=(e,t,a,r=!1)=>{const n=Object.assign(Object.assign({},JSON.parse(JSON.stringify(e))),{order_by:void 0});l(n,t,0,r)},c=(e,t,a)=>{const l=(0,r.oQ)(e,a);t.navigate((0,n.Z)(l,t.location,!0),{replace:!0})},u=(e,t,a)=>{const l=(0,r.cJ)(e,a);t.navigate((0,n.Z)(l,t.location,!0),{replace:!0})},d=(e,t,a)=>{const r=Object.assign({},JSON.parse(JSON.stringify(e)));r.filter=Object.assign(Object.assign({},e.filter),{limit:a});const l=(0,n.Z)(r,t.location,!0);t.navigate(l,{replace:!0})},p=(e,t,a,r)=>{const l=a&&a.meta&&a.meta.filter&&a.meta.filter.limit?a.meta.filter.limit:10,o=r*l-l,s=Object.assign({},JSON.parse(JSON.stringify(e)));s.filter=Object.assign(Object.assign({},e.filter),{offset:o});const i=(0,n.Z)(s,t.location);t.navigate(i,{replace:!0})},m=(e,t,a,r,l=undefined)=>{const o=Object.assign({},JSON.parse(JSON.stringify(e)));o.order_by={},o.order_by[a]=r?"asc":"desc",l&&(o.order_by.date=l);const s=(0,n.Z)(o,t.location);t.navigate(s,{replace:!0})}},86482:(e,t,a)=>{var r;a.d(t,{BV:()=>l,Bj:()=>c,D2:()=>u,JY:()=>d,Mg:()=>m,at:()=>i,g8:()=>p,rL:()=>h}),function(e){e.currentMonthData="current_month_data",e.hasData="has_data",e.previousMonthData="previous_month_data"}(r||(r={}));const n=(e,t)=>{let a;if(e&&e.data)for(const r of e.data)if(r.infrastructure&&r.infrastructure.uuid===t){a=r;break}return a},l=(e,t)=>{if(!e)return e;const a=e.data.filter((e=>e.source_type.toLowerCase()===t)),r=Object.assign(Object.assign({},e.meta),{count:a.length});return Object.assign(Object.assign({},e),{meta:r,data:a})},o=(e,t)=>{let a=!1;if(e&&e.data)for(const r of e.data)if(r[t]){a=!0;break}return a},s=(e,t,a)=>{let r=!1;if(e&&e.data)for(const l of e.data){const e=n(t,l.uuid);if(e&&e[a]){r=!0;break}}return r},i=(e,t)=>s(e,t,r.currentMonthData),c=(e,t)=>s(e,t,r.hasData),u=(e,t)=>s(e,t,r.previousMonthData),d=(e,t)=>((e,t)=>{let a=!1;if(e&&e.data)for(const r of e.data)if(n(t,r.uuid)){a=!0;break}return a})(e,t),p=e=>o(e,r.currentMonthData),m=e=>o(e,r.hasData),h=e=>o(e,r.previousMonthData)},10066:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(39333);const n=(e,t,a=!1)=>(a&&(e.filter&&void 0!==e.filter.offset&&(e.filter=Object.assign(Object.assign({},e.filter),{offset:0})),void 0!==e.offset&&(e.offset=0)),`${t.pathname}?${(0,r.IV)(e)}`)},84735:(e,t,a)=>{e.exports=a.p+"fonts/Cost-icon.svg"}}]);