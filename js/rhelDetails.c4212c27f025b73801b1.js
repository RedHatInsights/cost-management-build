"use strict";(self.webpackChunkcostManagement=self.webpackChunkcostManagement||[]).push([[7990],{97040:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Fe});var o=a(90154),l=a(1326),r=a(84717),n=a(75660),s=a(6456),i=a(97027),c=a(44439),d=a(92950),u=a.n(d),p=a(74806),m=a(82537),h=a(96703),g=a(38274),y=a(41255),v=a(86882),f=a(46955),C=a(38596),S=a(34328);function E(e={}){return e.project?"project":e.cluster?"cluster":e.node?"node":"date"}var b=a(45402),M=a(1032),O=a(32924),x=a(50859),P=a(1156),Z=a(62331),B=a(15920),D=a(15829),T=a(14483),_=a(5842),F=a(50081),I=a(37764),k=a(6450),j=a(63391),A=a(98485),R=a(22369),w=a(45087),L=a(91778),W=a(49382),$=a(33605),q=a(17918),V=a(54881),X=a(98499),Q=a(48196);const G={costValue:{marginTop:X.ZP.var,marginBottom:0},costLabelUnit:{fontSize:V.ZP.value,color:$.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:W.ZP.var,padding:X.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},info:{verticalAlign:"middle"},infoIcon:{fontSize:q.ZP.value},infoTitle:{fontWeight:"bold"},title:{paddingBottom:Q.ZP.var}},N=[{label:"cluster",value:"cluster"},{label:"node",value:"node"},{label:"project",value:"project"}],J=F.L.rhel;class K extends u().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState)}render(){const{currency:e,groupBy:t,isExportsFeatureEnabled:a,onCurrencySelected:l,onGroupBySelected:r,providers:n,providersError:s,report:c,intl:d}=this.props,p=c&&!s&&n&&n.meta&&n.meta.count>0;let m=u().createElement(A.L,null),h=u().createElement(A.L,null),g=u().createElement(A.L,null);if(c&&c.meta&&c.meta.total){const e=c.meta.total.cost&&c.meta.total.cost.total,t=c.meta.total.supplementary&&c.meta.total.supplementary.total,a=c.meta.total.infrastructure&&c.meta.total.infrastructure.total;m=(0,L.xG)(e?c.meta.total.cost.total.value:0,e?c.meta.total.cost.total.units:"USD"),h=(0,L.xG)(t?c.meta.total.supplementary.total.value:0,t?c.meta.total.supplementary.total.units:"USD"),g=(0,L.xG)(a?c.meta.total.infrastructure.total.value:0,a?c.meta.total.infrastructure.total.units:"USD")}return u().createElement("header",{style:G.header},u().createElement("div",{style:G.headerContent},u().createElement(o.Title,{headingLevel:"h1",style:G.title,size:o.TitleSizes["2xl"]},d.formatMessage(i.Z.rhelDetailsTitle)),u().createElement("div",{style:G.headerContentRight},u().createElement(k.F,{currency:e,onSelect:l}),a&&u().createElement(I.bj,null))),u().createElement("div",{style:G.headerContent},u().createElement("div",{style:G.headerContentLeft},u().createElement(j.X,{getIdKeyForGroupBy:E,groupBy:t,isDisabled:!p,onSelected:r,options:N,showTags:!0,tagPathsType:J})),p&&u().createElement("div",null,u().createElement(o.Tooltip,{content:d.formatMessage(i.Z.dashboardTotalCostTooltip,{infrastructureCost:g,supplementaryCost:h}),enableFlip:!0},u().createElement(o.Title,{headingLevel:"h2",style:G.costValue,size:o.TitleSizes["4xl"]},m)),u().createElement("div",{style:G.dateTitle},(0,w.J4)()))))}}const z=(0,P.X1)(((e,t)=>{const a=(0,r.H)(Z.NT),o=Z.aX.selectProviders(e,l.l.all,a),n=Z.aX.selectProvidersError(e,l.l.all,a),s=Z.aX.selectProvidersFetchStatus(e,l.l.all,a);return{isExportsFeatureEnabled:R.iJ.selectIsExportsFeatureEnabled(e),providers:(0,M.BV)(o,l.l.rhel),providersError:n,providersFetchStatus:s,providersQueryString:a}})),U=(0,p.ZP)((0,m.connect)(z,{})(K));var H=a(39836),Y=a(91919),ee=a(70637),te=a(91882),ae=a(86182),oe=a(21857),le=a(68025);const re="infrastructure",ne="monthOverMonth",se="supplementary",ie=s.K.rhel;class ce extends u().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{groupBy:e,groupByTagKey:t,hiddenColumns:a,intl:l,isAllSelected:r,report:n,router:s,selectedItems:c}=this.props;if(!n)return;const d="project"===e,p=[],m=(0,S.c)({report:n,idKey:t||e}),h=t?[{name:""},{name:l.formatMessage(i.Z.tagNames),style:"project"===e?te.W.nameColumn:void 0},{hidden:!d,name:""},{name:l.formatMessage(i.Z.monthOverMonthChange)},{id:re,name:l.formatMessage(i.Z.rhelDetailsInfrastructureCost),style:te.W.managedColumn},{id:se,name:l.formatMessage(i.Z.rhelDetailsSupplementaryCost),style:te.W.managedColumn},Object.assign({orderBy:"cost",name:l.formatMessage(i.Z.cost),style:te.W.costColumn},m.length&&{isSortable:!0}),{name:""}]:[{name:""},Object.assign(Object.assign({orderBy:e,name:l.formatMessage(i.Z.detailsResourceNames,{value:e})},m.length&&{isSortable:!0}),{style:"project"===e?te.W.nameColumn:void 0}),{hidden:!d,name:""},{id:ne,name:l.formatMessage(i.Z.monthOverMonthChange)},{id:re,orderBy:"infrastructure_cost",name:l.formatMessage(i.Z.rhelDetailsInfrastructureCost),style:te.W.managedColumn},{id:se,orderBy:"supplementary_cost",name:l.formatMessage(i.Z.rhelDetailsSupplementaryCost),style:te.W.managedColumn},Object.assign({orderBy:"cost",name:l.formatMessage(i.Z.cost),style:te.W.costColumn},m.length&&{isSortable:!0}),{name:""}];m.map(((a,n)=>{const m=this.getTotalCost(a,n),h=a&&null!==a.label?a.label:"",g=this.getMonthOverMonthCost(a,n),y=this.getSupplementaryCost(a,n),v=this.getInfrastructureCost(a,n),f=a.id&&a.id!==a.label?u().createElement("div",{style:te.W.infoDescription},a.id):null,C=h===`${T.Xq}${e}`||h===`${T.Xq}${t}`,S=this.getActions(a,C),E=C?h:u().createElement(H.Link,{to:(0,oe.T)({basePath:(0,le.dI)(Y._.rhelDetailsBreakdown.path),description:a.id,groupBy:e,id:a.id,router:s,title:h.toString()})},h);p.push({cells:[{},{value:u().createElement(u().Fragment,null,u().createElement("div",null,E),u().createElement("div",{style:te.W.infoDescription},f))},{hidden:!d,value:a.default_project?u().createElement("div",null,u().createElement(o.Label,{variant:"outline",color:"green"},l.formatMessage(i.Z.default))):u().createElement("div",{style:te.W.defaultLabel})},{value:u().createElement("div",null,g),id:ne},{value:u().createElement("div",null,v),id:re,style:te.W.managedColumn},{value:u().createElement("div",null,y),id:se,style:te.W.managedColumn},{value:u().createElement("div",null,m),style:te.W.managedColumn},{value:u().createElement("div",null,S)}],item:a,selected:r||c&&void 0!==c.find((e=>e.id===a.id)),selectionDisabled:C})}));const g=h.filter((e=>!a.has(e.id)&&!e.hidden)),y=p.map((e=>{var t=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(a[o[l]]=e[o[l]])}return a}(e,[]);return t.cells=t.cells.filter((e=>!a.has(e.id)&&!e.hidden)),t}));this.setState({columns:g,rows:y})},this.getActions=(e,t)=>{const{groupBy:a,reportQueryString:o}=this.props;return u().createElement(ae.e,{groupBy:a,isDisabled:t,item:e,providerType:l.l.rhel,reportPathsType:ie,reportQueryString:o,showPriceListOption:"cluster"===a})},this.getSupplementaryCost=(e,t)=>{const{report:a,intl:o}=this.props,l=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total?a.meta.total.cost.total.value:0,r=0===l?l.toFixed(2):(e.supplementary.total.value/l*100).toFixed(2);return u().createElement(u().Fragment,null,(0,L.xG)(e.supplementary.total.value,e.supplementary.total.units),u().createElement("div",{style:te.W.infoDescription,key:`total-cost-${t}`},o.formatMessage(i.Z.percentOfCost,{value:r})))},this.getInfrastructureCost=(e,t)=>{const{report:a,intl:o}=this.props,l=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total?a.meta.total.cost.total.value:0,r=0===l?l.toFixed(2):(e.infrastructure.total.value/l*100).toFixed(2);return u().createElement(u().Fragment,null,(0,L.xG)(e.infrastructure.total.value,e.infrastructure.total.units),u().createElement("div",{style:te.W.infoDescription,key:`total-cost-${t}`},o.formatMessage(i.Z.percentOfCost,{value:r})))},this.getMonthOverMonthCost=(e,t)=>{const{intl:a}=this.props,o=(0,L.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),l=null!==e.delta_percent?(0,L.rl)(Math.abs(e.delta_percent)):0,r=!(0===l||"0.00"===l),n=null!==e.delta_percent;let s;return r&&(s="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(s+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(s+=" increase")),n?u().createElement("div",{className:"monthOverMonthOverride"},u().createElement("div",{className:s,key:`month-over-month-cost-${t}`},r?a.formatMessage(i.Z.percent,{value:l}):u().createElement(A.L,null),r&&null!==e.delta_percent&&e.delta_value>0&&u().createElement("span",{className:"fa fa-sort-up",style:te.W.infoArrow,key:`month-over-month-icon-${t}`}),r&&null!==e.delta_percent&&e.delta_value<0&&u().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},te.W.ininfoArrow),te.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),u().createElement("div",{style:te.W.infoDescription,key:`month-over-month-info-${t}`},(0,w.Y)(o))):(0,w.Tf)()},this.getTotalCost=(e,t)=>{const{report:a,intl:o}=this.props,l=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total?a.meta.total.cost.total.value:0,r=0===l?l.toFixed(2):(e.cost.total.value/l*100).toFixed(2);return u().createElement(u().Fragment,null,(0,L.xG)(e.cost.total.value,e.cost.total.units),u().createElement("div",{style:te.W.infoDescription,key:`total-cost-${t}`},o.formatMessage(i.Z.percentOfCost,{value:r})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{hiddenColumns:t,report:a,selectedItems:o}=this.props,l=a&&a.data?JSON.stringify(a.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")===l&&e.selectedItems===o&&e.hiddenColumns===t||this.initDatum()}render(){const{filterBy:e,isLoading:t,onSelected:a,onSort:o,orderBy:l,selectedItems:r}=this.props,{columns:n,rows:s}=this.state;return u().createElement(ee.w,{columns:n,filterBy:e,isActionsCell:!0,isLoading:t,onSelected:a,onSort:o,orderBy:l,rows:s,selectedItems:r})}}const de=(0,p.ZP)((0,_.E)(ce));var ue=a(79112),pe=a(36116),me=a(70200),he=a(84999),ge=a(48949);const ye=F.Q.tag,ve=F.L.ocp;class fe extends u().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,a=[{name:e.formatMessage(i.Z.filterByValues,{value:"cluster"}),key:"cluster"},{name:e.formatMessage(i.Z.filterByValues,{value:"node"}),key:"node"},{name:e.formatMessage(i.Z.filterByValues,{value:"project"}),key:"project"}];return t&&t.data&&t.data.length&&a.push({name:e.formatMessage(i.Z.filterByValues,{value:T.up}),key:T.up}),a},this.updateReport=()=>{const{fetchTag:e,tagQueryString:t}=this.props;e(ve,ye,t)}}componentDidMount(){this.setState({categoryOptions:this.getCategoryOptions()},(()=>{this.updateReport()}))}componentDidUpdate(e){const{query:t,tagReport:a}=this.props;(0,he.X)(a,e.tagReport)?t&&!(0,he.X)(t,e.query)&&this.updateReport():this.setState({categoryOptions:this.getCategoryOptions()},(()=>{this.updateReport()}))}render(){const{groupBy:e,isAllSelected:t,isDisabled:a,isExportDisabled:o,itemsPerPage:l,itemsTotal:r,onBulkSelected:n,onColumnManagementClicked:s,onExportClicked:i,onFilterAdded:c,onFilterRemoved:d,pagination:p,query:m,selectedItems:h,tagReport:g}=this.props,{categoryOptions:y}=this.state;return u().createElement(me.k,{categoryOptions:y,groupBy:e,isAllSelected:t,isDisabled:a,isExportDisabled:o,itemsPerPage:l,itemsTotal:r,onBulkSelected:n,onColumnManagementClicked:s,onExportClicked:i,onFilterAdded:c,onFilterRemoved:d,pagination:p,query:m,resourcePathsType:pe.C.ocp,selectedItems:h,showBulkSelect:!0,showColumnManagement:!0,showExcludes:!0,showExport:!0,showFilter:!0,tagReport:g,tagPathsType:ve})}}const Ce=(0,P.X1)(((e,t)=>{const a=(0,ue.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3});return{tagReport:ge.ux.selectTag(e,ve,ye,a),tagReportFetchStatus:ge.ux.selectTagFetchStatus(e,ve,ye,a),tagQueryString:a}})),Se={fetchTag:ge.xr.Xt},Ee=(0,m.connect)(Ce,Se)(fe),be=(0,p.ZP)(Ee);var Me=a(32412);const Oe={content:{paddingBottom:X.ZP.value,paddingTop:X.ZP.value},ocpDetails:{minHeight:"100%"},paginationContainer:{marginLeft:X.ZP.value,marginRight:X.ZP.value},pagination:{backgroundColor:W.ZP.value,paddingBottom:Me.ZP.value,paddingTop:Me.ZP.value},tableContainer:{marginLeft:X.ZP.value,marginRight:X.ZP.value},toolbarContainer:{marginLeft:X.ZP.value,marginRight:X.ZP.value}},xe={filter:{limit:10,offset:0},exclude:{},filter_by:{},group_by:{project:"*"},order_by:{cost:"desc"}},Pe=[{label:i.Z.monthOverMonthChange,value:ne},{description:i.Z.ocpDetailsInfrastructureCostDesc,label:i.Z.ocpDetailsInfrastructureCost,value:re,hidden:!0},{description:i.Z.ocpDetailsSupplementaryCostDesc,label:i.Z.ocpDetailsSupplementaryCost,value:se,hidden:!0}],Ze=s.C.cost,Be=s.K.ocp;class De extends u().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],hiddenColumns:(0,C.Y)(Pe),isAllSelected:!1,isColumnManagementModalOpen:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getColumnManagementModal=()=>{const{hiddenColumns:e,isColumnManagementModalOpen:t}=this.state,a=(0,c.cloneDeep)(Pe);return a.map((t=>{t.hidden=e.has(t.value)})),u().createElement(C.$,{isOpen:t,options:a,onClose:this.handleColumnManagementModalClose,onSave:this.handleColumnManagementModalSave})},this.getComputedItems=()=>{const{query:e,report:t}=this.props,a=E(e.group_by),o=(0,b.qV)(e);return(0,S.c)({report:t,idKey:o||a})},this.getExportModal=e=>{const{query:t,report:a,reportQueryString:o}=this.props,{isAllSelected:l,isExportModalOpen:r,selectedItems:n}=this.state,s=E(t.group_by),i=(0,b.qV)(t),c=a&&a.meta?a.meta.count:0,d=[];return n.map((e=>{e.label!==`${T.Xq}${s}`&&e.label!==`${T.Xq}${i}`&&d.push(e)})),u().createElement(h.X,{count:l?c:d.length,isAllItems:(l||n.length===c)&&e.length>0,groupBy:i?`${T.P}${i}`:s,isOpen:r,items:d,onClose:this.handleExportModalClose,reportPathsType:Be,reportQueryString:o})},this.getPagination=(e=!1,t=!1)=>{const{intl:a,query:l,report:r,router:n}=this.props,s=r&&r.meta?r.meta.count:0,c=r&&r.meta&&r.meta.filter&&r.meta.filter.limit?r.meta.filter.limit:xe.filter.limit,d=r&&r.meta&&r.meta.filter&&r.meta.filter.offset?r.meta.filter.offset:xe.filter.offset,p=Math.trunc(d/c+1);return u().createElement(o.Pagination,{isCompact:!t,isDisabled:e,itemCount:s,onPerPageSelect:(e,t)=>(0,x.Lk)(l,n,t),onSetPage:(e,t)=>(0,x.F4)(l,n,r,t),page:p,perPage:c,titles:{paginationTitle:a.formatMessage(i.Z.paginationTitle,{title:a.formatMessage(i.Z.openShift),placement:t?"bottom":"top"})},variant:t?o.PaginationVariant.bottom:o.PaginationVariant.top,widgetId:"exports-pagination"+(t?"-bottom":"")})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:a,reportQueryString:o,router:l}=this.props,{hiddenColumns:r,isAllSelected:n,selectedItems:s}=this.state,i=E(e.group_by),c=(0,b.qV)(e);return u().createElement(de,{groupBy:c?`${T.P}${c}`:i,groupByTagKey:c,hiddenColumns:r,isAllSelected:n,isLoading:a===P.iF.inProgress,onSelected:this.handleSelected,onSort:(t,a)=>(0,x.K8)(e,l,t,a),orderBy:e.order_by,report:t,reportQueryString:o,selectedItems:s})},this.getToolbar=e=>{const{query:t,report:a,router:o}=this.props,{isAllSelected:l,selectedItems:r}=this.state,n=E(t.group_by),s=(0,b.qV)(t),i=0===e.length,c=a&&a.meta?a.meta.count:0;return u().createElement(be,{groupBy:s?`${T.P}${s}`:n,isAllSelected:l,isDisabled:i,isExportDisabled:i||!l&&0===r.length,itemsPerPage:e.length,itemsTotal:c,onBulkSelected:this.handleBulkSelected,onColumnManagementClicked:this.handleColumnManagementModalOpen,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,x.JA)(t,o,e),onFilterRemoved:e=>(0,x.vI)(t,o,e),pagination:this.getPagination(),query:t,selectedItems:r})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleColumnManagementModalClose=e=>{this.setState({isColumnManagementModalOpen:e})},this.handleColumnManagementModalOpen=()=>{this.setState({isColumnManagementModalOpen:!0})},this.handleColumnManagementModalSave=e=>{this.setState({hiddenColumns:e})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{query:t,router:a}=this.props,o=e,l=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{group_by:{[o]:"*"},order_by:void 0,category:void 0});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{a.navigate((0,O.ZE)(l,a.location,!0),{replace:!0})}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:a,selectedItems:o}=this.state;let l=[...a?this.getComputedItems():o];e&&e.length>0&&(t?e.map((e=>l.push(e))):e.map((e=>{l=l.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:l})},this.updateReport=()=>{const{fetchReport:e,reportQueryString:t}=this.props;e(Be,Ze,t)},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleColumnManagementModalClose=this.handleColumnManagementModalClose.bind(this),this.handleColumnManagementModalOpen=this.handleColumnManagementModalOpen.bind(this),this.handleColumnManagementModalSave=this.handleColumnManagementModalSave.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{report:a,reportError:o,reportQueryString:l,router:r}=this.props,{selectedItems:n}=this.state,s=e.reportQueryString!==l,i=!a&&!o,c=!r.location.search,d=t.selectedItems!==n;(s||i||c||d)&&this.updateReport()}render(){const{currency:e,intl:t,providers:a,providersFetchStatus:o,query:r,report:n,reportError:s,reportFetchStatus:c,router:d}=this.props,p=this.getComputedItems(),m=E(r.group_by),h=0===p.length,C=t.formatMessage(i.Z.ocpDetailsTitle);if(s)return u().createElement(f.W,{title:C});if(o===P.iF.inProgress)return u().createElement(g.g,{title:C});if(o===P.iF.complete){if(a&&a.meta&&0===a.meta.count)return u().createElement(v.L,{providerType:l.l.ocp,title:C});if(!(0,M.g8)(a))return u().createElement(y.J,{title:C})}return u().createElement("div",{style:Oe.ocpDetails},u().createElement(U,{currency:e,groupBy:m,onCurrencySelected:()=>(0,x.LB)(r,d),onGroupBySelected:this.handleGroupBySelected,report:n}),u().createElement("div",{style:Oe.content},u().createElement("div",{style:Oe.toolbarContainer},this.getToolbar(p)),this.getExportModal(p),this.getColumnManagementModal(),c===P.iF.inProgress?u().createElement(g.g,null):u().createElement(u().Fragment,null,u().createElement("div",{style:Oe.tableContainer},this.getTable()),u().createElement("div",{style:Oe.paginationContainer},u().createElement("div",{style:Oe.pagination},this.getPagination(h,!0))))))}}const Te=(0,P.X1)(((e,{router:t})=>{const a=(0,n.mB)(t.location.search),o=(0,D.zC)(),s=Object.assign(Object.assign({},xe),a),i={currency:o,delta:"cost",exclude:s.exclude,filter:Object.assign(Object.assign({},s.filter),{resolution:"monthly",time_scope_units:"month",time_scope_value:-1}),filter_by:s.filter_by,group_by:s.group_by,order_by:s.order_by},c=(0,n.pm)(i),d=B.ZV.selectReport(e,Be,Ze,c),u=B.ZV.selectReportError(e,Be,Ze,c),p=B.ZV.selectReportFetchStatus(e,Be,Ze,c),m=(0,r.H)(Z.NT),h=Z.aX.selectProviders(e,l.l.all,m),g=Z.aX.selectProvidersFetchStatus(e,l.l.all,m);return{currency:o,providers:(0,M.BV)(h,l.l.ocp),providersFetchStatus:g,query:s,report:d,reportError:u,reportFetchStatus:p,reportQueryString:c}})),_e={fetchReport:B.nx.fetchReport},Fe=(0,p.ZP)((0,_.E)((0,m.connect)(Te,_e)(De)))}}]);