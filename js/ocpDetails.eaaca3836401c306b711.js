"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[7369],{33748:(e,t,o)=>{o.d(t,{W:()=>c});var a=o(49382),s=o(33605),r=o(17918),n=o(54881),l=o(98499),i=o(48196);const c={costDistribution:{display:"flex",marginLeft:l.ZP.var},costValue:{marginTop:l.ZP.var,marginBottom:0},costLabelUnit:{fontSize:n.ZP.value,color:s.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:a.ZP.var,padding:l.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},info:{verticalAlign:"middle"},infoIcon:{fontSize:r.ZP.value},infoTitle:{fontWeight:"bold"},title:{paddingBottom:i.ZP.var}}},58990:(e,t,o)=>{o.r(t),o.d(t,{default:()=>we});var a=o(90154),s=o(1326),r=o(79112),n=o(84717),l=o(6456),i=o(97027),c=o(44439),d=o(92950),u=o.n(d),p=o(74806),m=o(77760),h=o(52471),g=o(55672),y=o(2985),f=o(47947),v=o(38935),b=o(40493),C=o(44348),S=o(37269),E=o(19727),M=o(86482),D=o(10066),O=o(1156),P=o(22369),x=o(62331),Z=o(15920);function F(e={}){return e.project?"project":e.cluster?"cluster":e.node?"node":"date"}var _=o(69511),B=o(15829),k=o(14483),T=o(5842),R=o(50081),j=o(26744),I=o(6450),W=o(98485),w=o(97698),A=o(36465),L=o(45087),Q=o(91778),$=o(33748);const q=[{label:"cluster",value:"cluster"},{label:"node",value:"node"},{label:"project",value:"project"}],V=R.L.ocp;class X extends u().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState)}render(){const{costDistribution:e,currency:t,groupBy:o,isCostDistributionFeatureEnabled:s,isExportsFeatureEnabled:r,onCostDistributionSelected:n,onCurrencySelected:l,onGroupBySelected:c,providers:d,providersError:p,report:m,intl:h}=this.props,g=m&&!p&&d&&d.meta&&d.meta.count>0,y="project"===o&&m&&m.meta&&!0===m.meta.distributed_overhead;let f=u().createElement(W.L,null),b=u().createElement(W.L,null),C=u().createElement(W.L,null);const S=e||v.Qf.total;if(m&&m.meta&&m.meta.total){const e=m.meta.total.cost&&m.meta.total.cost[S],t=m.meta.total.supplementary&&m.meta.total.supplementary.total,o=m.meta.total.infrastructure&&m.meta.total.infrastructure.total;f=(0,Q.xG)(e?m.meta.total.cost[S].value:0,e?m.meta.total.cost[S].units:"USD"),b=(0,Q.xG)(t?m.meta.total.supplementary.total.value:0,t?m.meta.total.supplementary.total.units:"USD"),C=(0,Q.xG)(o?m.meta.total.infrastructure.total.value:0,o?m.meta.total.infrastructure.total.units:"USD")}return u().createElement("header",{style:$.W.header},u().createElement("div",{style:$.W.headerContent},u().createElement(a.Title,{headingLevel:"h1",style:$.W.title,size:a.TitleSizes["2xl"]},h.formatMessage(i.Z.ocpDetailsTitle)),u().createElement("div",{style:$.W.headerContentRight},u().createElement(I.F,{currency:t,onSelect:l}),r&&u().createElement(j.bj,null))),u().createElement("div",{style:$.W.headerContent},u().createElement("div",{style:$.W.headerContentLeft},u().createElement(A.X,{getIdKeyForGroupBy:F,groupBy:o,isDisabled:!g,onSelected:c,options:q,showTags:!0,tagPathsType:V}),y&&s&&u().createElement("div",{style:$.W.costDistribution},u().createElement(w.N,{costDistribution:e,onSelect:n}))),g&&u().createElement("div",null,u().createElement(a.Tooltip,{content:h.formatMessage(i.Z.dashboardTotalCostTooltip,{infrastructureCost:C,supplementaryCost:b}),enableFlip:!0},u().createElement(a.Title,{headingLevel:"h2",style:$.W.costValue,size:a.TitleSizes["4xl"]},f)),u().createElement("div",{style:$.W.dateTitle},(0,L.J4)()))))}}const N=(0,O.X1)(((e,t)=>{const o=(0,n.H)(x.NT),a=x.aX.selectProviders(e,s.l.all,o),r=x.aX.selectProvidersError(e,s.l.all,o),l=x.aX.selectProvidersFetchStatus(e,s.l.all,o);return{isCostDistributionFeatureEnabled:P.iJ.selectIsCostDistributionFeatureEnabled(e),isExportsFeatureEnabled:P.iJ.selectIsExportsFeatureEnabled(e),providers:(0,M.BV)(a,s.l.ocp),providersError:r,providersFetchStatus:l,providersQueryString:o}})),G=(0,p.ZP)((0,m.connect)(N,{})(X));var J=o(39836),z=o(91919),U=o(62423),K=o(90569),H=o(90302),Y=o(54583),ee=o(68025),te=o(39333),oe=o(89256),ae=o(2136);const se=oe.v.recommendations,re=oe.N.ros;class ne extends u().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.updateReport=()=>{const{fetchReport:e,reportQueryString:t}=this.props;e(se,re,t)},this.getBreakdownLink=e=>{const{project:t,router:o}=this.props;return 0===e||void 0===t?e:u().createElement(J.Link,{to:(0,Y.T)({basePath:(0,ee.dI)(z._.ocpDetailsBreakdown.path),groupBy:"project",id:t,isOptimizationsTab:!0,router:o,title:t})},e)}}componentDidMount(){this.updateReport()}render(){const{report:e}=this.props,t=e&&e.meta?e.meta.count:0;return u().createElement("span",null,this.getBreakdownLink(t))}}const le=(0,O.X1)(((e,{project:t})=>{const o={project:t},a=(0,te.pm)(o);return{report:ae.R0.selectRos(e,se,re,a),reportError:ae.R0.selectRosError(e,se,re,a),reportFetchStatus:ae.R0.selectRosFetchStatus(e,se,re,a),reportQueryString:a}})),ie={fetchReport:ae.Ze.fetchRosReport},ce=(0,T.E)((0,m.connect)(le,ie)(ne));const de="infrastructure",ue="monthOverMonth",pe="supplementary",me=l.K.ocp;class he extends u().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{costDistribution:e,groupBy:t,groupByTagKey:o,hiddenColumns:s,intl:r,isAllSelected:n,isRosFeatureEnabled:l,report:c,router:d,selectedItems:p}=this.props;if(!c)return;const m="project"===t,h=[],g=(0,_.c)({report:c,idKey:o||t}),y=o?[{name:""},{name:r.formatMessage(i.Z.tagNames),style:"project"===t?H.W.nameColumn:void 0},{hidden:!m,name:""},{hidden:!(m&&l),name:r.formatMessage(i.Z.optimizations)},{name:r.formatMessage(i.Z.monthOverMonthChange)},{id:de,name:r.formatMessage(i.Z.ocpDetailsInfrastructureCost),style:H.W.managedColumn},{id:pe,name:r.formatMessage(i.Z.ocpDetailsSupplementaryCost),style:H.W.managedColumn},Object.assign({orderBy:e===v.Qf.distributed?"distributed_cost":"cost",name:r.formatMessage(i.Z.cost),style:H.W.costColumn},g.length&&{isSortable:!1}),{name:""}]:[{name:""},Object.assign(Object.assign({orderBy:t,name:r.formatMessage(i.Z.detailsResourceNames,{value:t})},g.length&&{isSortable:!0}),{style:"project"===t?H.W.nameColumn:void 0}),{hidden:!m,name:""},{hidden:!(m&&l),name:r.formatMessage(i.Z.optimizations)},{id:ue,name:r.formatMessage(i.Z.monthOverMonthChange)},{id:de,orderBy:"infrastructure_cost",name:r.formatMessage(i.Z.ocpDetailsInfrastructureCost),style:H.W.managedColumn},{id:pe,orderBy:"supplementary_cost",name:r.formatMessage(i.Z.ocpDetailsSupplementaryCost),style:H.W.managedColumn},Object.assign({orderBy:e===v.Qf.distributed?"distributed_cost":"cost",name:r.formatMessage(i.Z.cost),style:H.W.costColumn},g.length&&{isSortable:!0}),{name:""}];g.map(((s,c)=>{const g=this.getTotalCost(s,c),y=s&&null!==s.label?s.label:"",f=this.getMonthOverMonthCost(s,c),b=this.getSupplementaryCost(s,c),C=this.getInfrastructureCost(s,c),S=e===v.Qf.distributed&&(s.cost.platformDistributed&&s.cost.platformDistributed.value>0||s.cost.workerUnallocatedDistributed&&s.cost.workerUnallocatedDistributed.value>0),E=s.classification===k.A8,M=s.classification===k.ND,D=s.id&&s.id!==s.label?u().createElement("div",{style:H.W.infoDescription},s.id):null,O=y===`${k.Xq}${t}`||y===`${k.Xq}${o}`||M,P=this.getActions(s,O),x=O?y:u().createElement(J.Link,{to:(0,Y.T)({basePath:(0,ee.dI)(z._.ocpDetailsBreakdown.path),description:s.id,id:s.id,isPlatformCosts:E,groupBy:t,router:d,title:y.toString()})},y);h.push({cells:[{},{value:u().createElement(u().Fragment,null,u().createElement("div",null,x),u().createElement("div",{style:H.W.infoDescription},D))},{hidden:!m,value:s.classification===k.e4?u().createElement("div",null,u().createElement(a.Label,{variant:"outline",color:"green"},r.formatMessage(i.Z.default))):S?u().createElement(a.Tooltip,{content:r.formatMessage(i.Z.overheadDesc),enableFlip:!0},u().createElement(a.Label,{variant:"outline",color:"orange"},r.formatMessage(i.Z.overhead))):u().createElement("div",{style:H.W.defaultLabel})},{hidden:!(m&&l),value:!E&&!O&&u().createElement("div",null,u().createElement(ce,{project:y}))},{value:u().createElement("div",null,f),id:ue},{value:u().createElement("div",null,C),id:de,style:H.W.managedColumn},{value:u().createElement("div",null,b),id:pe,style:H.W.managedColumn},{value:u().createElement("div",null,g),style:H.W.managedColumn},{value:u().createElement("div",null,P)}],item:s,selected:n||p&&void 0!==p.find((e=>e.id===s.id)),selectionDisabled:O})}));const f=y.filter((e=>!s.has(e.id)&&!e.hidden)),b=h.map((e=>{var t=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(o[a[s]]=e[a[s]])}return o}(e,[]);return t.cells=t.cells.filter((e=>!s.has(e.id)&&!e.hidden)),t}));this.setState({columns:f,rows:b})},this.getActions=(e,t)=>{const{groupBy:o,reportQueryString:a}=this.props;return u().createElement(U.e,{groupBy:o,isDisabled:t,item:e,providerType:s.l.ocp,reportPathsType:me,reportQueryString:a,showPriceListOption:"cluster"===o})},this.getSupplementaryCost=(e,t)=>{const{costDistribution:o,report:a,intl:s}=this.props,r=o||v.Qf.total,n=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost[r]?a.meta.total.cost[r].value:0,l=0===n?n.toFixed(2):(e.supplementary.total.value/n*100).toFixed(2);return u().createElement(u().Fragment,null,(0,Q.xG)(e.supplementary.total.value,e.supplementary.total.units),u().createElement("div",{style:H.W.infoDescription,key:`total-cost-${t}`},s.formatMessage(i.Z.percentOfCost,{value:l})))},this.getInfrastructureCost=(e,t)=>{const{costDistribution:o,report:a,intl:s}=this.props,r=o||v.Qf.total,n=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost[r]?a.meta.total.cost[r].value:0,l=0===n?n.toFixed(2):(e.infrastructure.total.value/n*100).toFixed(2);return u().createElement(u().Fragment,null,(0,Q.xG)(e.infrastructure.total.value,e.infrastructure.total.units),u().createElement("div",{style:H.W.infoDescription,key:`total-cost-${t}`},s.formatMessage(i.Z.percentOfCost,{value:l})))},this.getMonthOverMonthCost=(e,t)=>{const{costDistribution:o,intl:a}=this.props,s=o||v.Qf.total,r=(0,Q.xG)(Math.abs(e.cost[s].value-e.delta_value),e.cost[s].units),n=null!==e.delta_percent?(0,Q.rl)(Math.abs(e.delta_percent)):0,l=!(0===n||"0.00"===n),c=null!==e.delta_percent;let d;return l&&(d="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(d+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(d+=" increase")),c?u().createElement("div",{className:"monthOverMonthOverride"},u().createElement("div",{className:d,key:`month-over-month-cost-${t}`},l?a.formatMessage(i.Z.percent,{value:n}):u().createElement(W.L,null),l&&null!==e.delta_percent&&e.delta_value>0&&u().createElement("span",{className:"fa fa-sort-up",style:H.W.infoArrow,key:`month-over-month-icon-${t}`}),l&&null!==e.delta_percent&&e.delta_value<0&&u().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},H.W.ininfoArrow),H.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),u().createElement("div",{style:H.W.infoDescription,key:`month-over-month-info-${t}`},(0,L.Y)(r))):(0,L.Tf)()},this.getTotalCost=(e,t)=>{const{costDistribution:o,report:a,intl:s}=this.props,r=o||v.Qf.total,n=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost[r]?a.meta.total.cost[r].value:0,l=0===n?n.toFixed(2):(e.cost[r].value/n*100).toFixed(2);return u().createElement(u().Fragment,null,(0,Q.xG)(e.cost[r].value,e.cost[r].units),u().createElement("div",{style:H.W.infoDescription,key:`total-cost-${t}`},s.formatMessage(i.Z.percentOfCost,{value:l})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{costDistribution:t,hiddenColumns:o,report:a,selectedItems:s}=this.props,r=a&&a.data?JSON.stringify(a.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")===r&&e.costDistribution===t&&e.selectedItems===s&&e.hiddenColumns===o||this.initDatum()}render(){const{isLoading:e,onSelected:t,onSort:o,selectedItems:a}=this.props,{columns:s,rows:r}=this.state;return u().createElement(K.w,{columns:s,isLoading:e,onSelected:t,onSort:o,rows:r,selectedItems:a})}}const ge=(0,p.ZP)((0,T.E)(he));var ye=o(36116),fe=o(7893),ve=o(48949),be=o(94282);const Ce=R.Q.tag,Se=R.L.ocp;class Ee extends u().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,o=[{name:e.formatMessage(i.Z.filterByValues,{value:"cluster"}),key:"cluster"},{name:e.formatMessage(i.Z.filterByValues,{value:"node"}),key:"node"},{name:e.formatMessage(i.Z.filterByValues,{value:"project"}),key:"project"}];return t&&t.data&&t.data.length&&o.push({name:e.formatMessage(i.Z.filterByValues,{value:k.up}),key:k.up}),o},this.updateReport=()=>{const{fetchTag:e,tagQueryString:t}=this.props;e(Se,Ce,t)}}componentDidMount(){this.setState({categoryOptions:this.getCategoryOptions()},(()=>{this.updateReport()}))}componentDidUpdate(e){const{query:t,tagReport:o}=this.props;(0,be.X)(o,e.tagReport)?t&&!(0,be.X)(t,e.query)&&this.updateReport():this.setState({categoryOptions:this.getCategoryOptions()},(()=>{this.updateReport()}))}render(){const{groupBy:e,isAllSelected:t,isDisabled:o,isExportDisabled:a,itemsPerPage:s,itemsTotal:r,onBulkSelected:n,onColumnManagementClicked:l,onExportClicked:i,onFilterAdded:c,onFilterRemoved:d,onPlatformCostsChanged:p,pagination:m,query:h,selectedItems:g,tagReport:y}=this.props,{categoryOptions:f}=this.state;return u().createElement(fe.k,{categoryOptions:f,groupBy:e,isAllSelected:t,isDisabled:o,isExportDisabled:a,itemsPerPage:s,itemsTotal:r,onBulkSelected:n,onColumnManagementClicked:l,onExportClicked:i,onFilterAdded:c,onFilterRemoved:d,onPlatformCostsChanged:p,pagination:m,query:h,resourcePathsType:ye.C.ocp,selectedItems:g,showBulkSelect:!0,showColumnManagement:!0,showExcludes:!0,showExport:!0,showFilter:!0,showPlatformCosts:"project"===e,tagReport:y,tagPathsType:Se})}}const Me=(0,O.X1)(((e,t)=>{const o=(0,r.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3});return{tagReport:ve.ux.selectTag(e,Se,Ce,o),tagReportFetchStatus:ve.ux.selectTagFetchStatus(e,Se,Ce,o),tagQueryString:o}})),De={fetchTag:ve.xr.Xt},Oe=(0,m.connect)(Me,De)(Ee),Pe=(0,p.ZP)(Oe);var xe=o(49382),Ze=o(98499),Fe=o(32412);const _e={content:{paddingBottom:Ze.ZP.value,paddingTop:Ze.ZP.value},ocpDetails:{minHeight:"100vh"},paginationContainer:{marginLeft:Ze.ZP.value,marginRight:Ze.ZP.value},pagination:{backgroundColor:xe.ZP.value,paddingBottom:Fe.ZP.value,paddingTop:Fe.ZP.value},tableContainer:{marginLeft:Ze.ZP.value,marginRight:Ze.ZP.value},toolbarContainer:{marginLeft:Ze.ZP.value,marginRight:Ze.ZP.value}},Be={filter:{limit:10,offset:0},filter_by:{},exclude:{},group_by:{project:"*"},order_by:{cost:"desc"}},ke=[{label:i.Z.monthOverMonthChange,value:ue},{description:i.Z.ocpDetailsInfrastructureCostDesc,label:i.Z.ocpDetailsInfrastructureCost,value:de,hidden:!0},{description:i.Z.ocpDetailsSupplementaryCostDesc,label:i.Z.ocpDetailsSupplementaryCost,value:pe,hidden:!0}],Te=l.C.cost,Re=l.K.ocp;class je extends u().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],hiddenColumns:(0,C.Y)(ke),isAllSelected:!1,isColumnManagementModalOpen:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getColumnManagementModal=()=>{const{hiddenColumns:e,isColumnManagementModalOpen:t}=this.state,o=(0,c.cloneDeep)(ke);return o.map((t=>{t.hidden=e.has(t.value)})),u().createElement(C.$,{isOpen:t,options:o,onClose:this.handleColumnManagementModalClose,onSave:this.handleColumnManagementModalSave})},this.getComputedItems=()=>{const{query:e,report:t}=this.props,o=F(e.group_by),a=(0,S.qV)(e);return(0,_.c)({report:t,idKey:a||o})},this.getExportModal=e=>{const{query:t,report:o,reportQueryString:a}=this.props,{isAllSelected:s,isExportModalOpen:r,selectedItems:n}=this.state,l=F(t.group_by),i=(0,S.qV)(t),c=o&&o.meta?o.meta.count:0,d=[];return n.map((e=>{e.label!==`${k.Xq}${l}`&&e.label!==`${k.Xq}${i}`&&d.push(e)})),u().createElement(b.X,{count:s?c:d.length,isAllItems:(s||n.length===c)&&e.length>0,groupBy:i?`${k.P}${i}`:l,isOpen:r,items:d,onClose:this.handleExportModalClose,reportPathsType:Re,reportQueryString:a})},this.getPagination=(e=!1,t=!1)=>{const{intl:o,query:s,report:r,router:n}=this.props,l=r&&r.meta?r.meta.count:0,c=r&&r.meta&&r.meta.filter&&r.meta.filter.limit?r.meta.filter.limit:Be.filter.limit,d=r&&r.meta&&r.meta.filter&&r.meta.filter.offset?r.meta.filter.offset:Be.filter.offset,p=Math.trunc(d/c+1);return u().createElement(a.Pagination,{isCompact:!t,isDisabled:e,itemCount:l,onPerPageSelect:(e,t)=>(0,E.xh)(s,n,t),onSetPage:(e,t)=>(0,E.$9)(s,n,r,t),page:p,perPage:c,titles:{paginationTitle:o.formatMessage(i.Z.paginationTitle,{title:o.formatMessage(i.Z.openShift),placement:t?"bottom":"top"})},variant:t?a.PaginationVariant.bottom:a.PaginationVariant.top,widgetId:"exports-pagination"+(t?"-bottom":"")})},this.getTable=()=>{const{costDistribution:e,isRosFeatureEnabled:t,query:o,report:a,reportFetchStatus:s,reportQueryString:r,router:n}=this.props,{hiddenColumns:l,isAllSelected:i,selectedItems:c}=this.state,d=F(o.group_by),p=(0,S.qV)(o);return u().createElement(ge,{costDistribution:e,groupBy:p?`${k.P}${p}`:d,groupByTagKey:p,hiddenColumns:l,isAllSelected:i,isLoading:s===O.iF.inProgress,isRosFeatureEnabled:t,onSelected:this.handleSelected,onSort:(e,t)=>(0,E.yB)(o,n,e,t),report:a,reportQueryString:r,selectedItems:c})},this.getToolbar=e=>{const{query:t,report:o,router:a}=this.props,{isAllSelected:s,selectedItems:r}=this.state,n=F(t.group_by),l=(0,S.qV)(t),i=0===e.length,c=o&&o.meta?o.meta.count:0;return u().createElement(Pe,{groupBy:l?`${k.P}${l}`:n,isAllSelected:s,isDisabled:i,isExportDisabled:i||!s&&0===r.length,itemsPerPage:e.length,itemsTotal:c,onBulkSelected:this.handleBulkSelected,onColumnManagementClicked:this.handleColumnManagementModalOpen,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,E.$3)(t,a,e),onFilterRemoved:e=>(0,E.q7)(t,a,e),onPlatformCostsChanged:this.handlePlatformCostsChanged,pagination:this.getPagination(i),query:t,selectedItems:r})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleColumnManagementModalClose=e=>{this.setState({isColumnManagementModalOpen:e})},this.handleColumnManagementModalOpen=()=>{this.setState({isColumnManagementModalOpen:!0})},this.handleColumnManagementModalSave=e=>{this.setState({hiddenColumns:e})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{query:t,router:o}=this.props,a=e,s=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{group_by:{[a]:"*"},order_by:void 0,category:void 0,delta:void 0});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{o.navigate((0,D.Z)(s,o.location,!0),{replace:!0})}))},this.handlePlatformCostsChanged=e=>{const{query:t,router:o}=this.props,a=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{category:e?k.rx:void 0});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{o.navigate((0,D.Z)(a,o.location,!0),{replace:!0})}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:o,selectedItems:a}=this.state;let s=[...o?this.getComputedItems():a];e&&e.length>0&&(t?e.map((e=>s.push(e))):e.map((e=>{s=s.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:s})},this.updateReport=()=>{const{fetchReport:e,reportQueryString:t}=this.props;e(Re,Te,t)},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleColumnManagementModalClose=this.handleColumnManagementModalClose.bind(this),this.handleColumnManagementModalOpen=this.handleColumnManagementModalOpen.bind(this),this.handleColumnManagementModalSave=this.handleColumnManagementModalSave.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handlePlatformCostsChanged=this.handlePlatformCostsChanged.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{report:o,reportError:a,reportQueryString:s,router:r}=this.props,{selectedItems:n}=this.state,l=e.reportQueryString!==s,i=!o&&!a,c=!r.location.search,d=t.selectedItems!==n;(l||i||c||d)&&this.updateReport()}render(){const{costDistribution:e,currency:t,intl:o,providers:a,providersFetchStatus:r,query:n,report:l,reportError:c,reportFetchStatus:d,router:p}=this.props,m=this.getComputedItems(),v=F(n.group_by),b=0===m.length,C=o.formatMessage(i.Z.ocpDetailsTitle);if(c)return u().createElement(f.W,{title:C});if(r===O.iF.inProgress)return u().createElement(h.g,{title:C});if(r===O.iF.complete){if(a&&a.meta&&0===a.meta.count)return u().createElement(y.L,{providerType:s.l.ocp,title:C});if(!(0,M.g8)(a))return u().createElement(g.J,{title:C})}return u().createElement("div",{style:_e.ocpDetails},u().createElement(G,{costDistribution:e,currency:t,groupBy:v,onCostDistributionSelected:e=>(0,E.cZ)(n,p,e),onCurrencySelected:e=>(0,E._s)(n,p,e),onGroupBySelected:this.handleGroupBySelected,report:l}),u().createElement("div",{style:_e.content},u().createElement("div",{style:_e.toolbarContainer},this.getToolbar(m)),this.getExportModal(m),this.getColumnManagementModal(),d===O.iF.inProgress?u().createElement(h.g,null):u().createElement(u().Fragment,null,u().createElement("div",{style:_e.tableContainer},this.getTable()),u().createElement("div",{style:_e.paginationContainer},u().createElement("div",{style:_e.pagination},this.getPagination(b,!0))))))}}const Ie=(0,O.X1)(((e,{router:t})=>{const o=(0,r.mB)(t.location.search),a=o.group_by?(0,S.VL)(o):(0,S.VL)(Be),l=P.iJ.selectIsCostDistributionFeatureEnabled(e),i="project"===a&&l?(0,B.vn)():void 0,c=(0,B.zC)(),d=Object.assign(Object.assign(Object.assign({},Be),i===v.Qf.distributed&&{order_by:{distributed_cost:"desc"}}),o),u={category:d.category,currency:c,delta:i===v.Qf.distributed?"distributed_cost":"cost",exclude:d.exclude,filter:Object.assign(Object.assign({},d.filter),{resolution:"monthly",time_scope_units:"month",time_scope_value:-1}),filter_by:d.filter_by,group_by:d.group_by,order_by:d.order_by},p=(0,r.pm)(u),m=Z.ZV.selectReport(e,Re,Te,p),h=Z.ZV.selectReportError(e,Re,Te,p),g=Z.ZV.selectReportFetchStatus(e,Re,Te,p),y=(0,n.H)(x.NT),f=x.aX.selectProviders(e,s.l.all,y),b=x.aX.selectProvidersFetchStatus(e,s.l.all,y);return{costDistribution:i,currency:c,isRosFeatureEnabled:P.iJ.selectIsRosFeatureEnabled(e),providers:(0,M.BV)(f,s.l.ocp),providersFetchStatus:b,query:d,report:m,reportError:h,reportFetchStatus:g,reportQueryString:p}})),We={fetchReport:Z.nx.fetchReport},we=(0,p.ZP)((0,T.E)((0,m.connect)(Ie,We)(je)))}}]);
//# sourceMappingURL=../sourcemaps/ocpDetails.2d34f7cefe6a83c720612abd8328541c.js.map