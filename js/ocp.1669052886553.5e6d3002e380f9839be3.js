"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[855],{79467:(e,t,a)=>{a.d(t,{C:()=>s.Z});var s=a(64727)},52951:(e,t,a)=>{a.r(t),a.d(t,{default:()=>R});var s=a(1326),o=a(79112),l=a(84717),n=a(39333),r=a(6456),i=a(50081),c=a(97027),d=a(92950),p=a.n(d),u=a(74806),m=a(78741),h=a(91919),g=a(79467),y=a(37269),v=a(86482),f=a(1156),C=a(78898),S=a(62331),b=a(68091),E=a(64703),M=a(67709),O=a(73903);const P=(0,f.X1)(((e,t)=>({selectWidgets:O.cm.selectWidgets(e),widgets:O.cm.selectCurrentWidgets(e)}))),x=(0,u.ZP)((0,m.connect)(P,{})(M.X));var Z=a(87935),_=a(70982);const B=(0,f.X1)(((e,t)=>({selectWidgets:_.P2.selectWidgets(e),widgets:_.P2.selectCurrentWidgets(e)}))),D=(0,u.ZP)((0,m.connect)(B,{})(Z.f)),F=h.Hb.ocpDetails,T=r.C.cost,k=r.K.ocp,I=(0,f.X1)(((e,t)=>{const a=(0,o.mB)(location.search),r=(0,y.VL)(a),d=(0,y.pe)(a),u=C.iJ.selectIsCurrencyFeatureEnabled(e)?(0,E.zC)():void 0,m={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign({},a&&a.filter_by&&a.filter_by),r&&{[r]:void 0}),exclude:Object.assign({},a&&a.exclude&&a.exclude),group_by:Object.assign({},r&&{[r]:d}),category:a.category},h=(0,o.pm)(Object.assign(Object.assign(Object.assign({},m),"platform"===a.category&&{group_by:{project:["kube-","openshift-"]}}),{currency:u})),g=b.ZV.selectReport(e,k,T,h),f=b.ZV.selectReportError(e,k,T,h),M=b.ZV.selectReportFetchStatus(e,k,T,h),O=(0,l.H)(S.NT),P=S.aX.selectProviders(e,s.l.all,O),Z=S.aX.selectProvidersFetchStatus(e,s.l.all,O);return{costOverviewComponent:p().createElement(x,{category:a.category,currency:u,groupBy:r,report:g}),currency:u,description:a[n.eG],detailsURL:F,emptyStateTitle:t.intl.formatMessage(c.Z.ocpDetailsTitle),groupBy:r,groupByValue:d,historicalDataComponent:p().createElement(D,{currency:u}),providers:(0,v.BV)(P,s.l.ocp),providersFetchStatus:Z,providerType:s.l.ocp,query:m,report:g,reportError:f,reportFetchStatus:M,reportType:T,reportPathsType:k,reportQueryString:h,tagReportPathsType:i.L.ocp,title:d}})),j={fetchReport:b.nx.fetchReport},R=(0,u.ZP)((0,m.connect)(I,j)(g.C))},23302:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_e});var s=a(54653),o=a(1326),l=a(79112),n=a(84717),r=a(39333),i=a(6456),c=a(97027),d=a(44439),p=a(92950),u=a.n(p),m=a(74806),h=a(78741),g=a(52471),y=a(55672),v=a(2985),f=a(47947),C=a(40493),S=a(1156);const b=e=>{const t=new Set;return e.map((e=>{e.hidden&&t.add(e.value)})),t};class E extends u().Component{constructor(e,t){super(e,t),this.defaultState={hiddenColumns:b(this.props.options)},this.state=Object.assign({},this.defaultState),this.getHidden=e=>{const{hiddenColumns:t}=this.state,a=new Set(t);return a.delete(e)||a.add(e),a},this.isHidden=e=>{const{hiddenColumns:t}=this.state;return t.has(e)},this.handleChange=(e,t)=>{const a=this.getHidden(t.target.id);this.setState({hiddenColumns:a})},this.handleClose=()=>{this.setState(Object.assign({},this.defaultState),(()=>{this.props.onClose(!1)}))},this.handleSave=()=>{const{hiddenColumns:e}=this.state;this.props.onSave(e),this.handleClose()},this.selectAll=()=>{this.setState({hiddenColumns:new Set})}}componentDidUpdate(e){const{options:t}=this.props;if(e.options!==t){const e=b(t);this.setState({hiddenColumns:e})}}render(){const{options:e,intl:t}=this.props;return u().createElement(s.Modal,{description:u().createElement(s.TextContent,null,u().createElement(s.Text,{component:s.TextVariants.p},t.formatMessage(c.Z.manageColumnsDesc)),u().createElement(s.Button,{isInline:!0,onClick:this.selectAll,variant:"link"},t.formatMessage(c.Z.selectAll))),isOpen:this.props.isOpen,onClose:this.handleClose,title:t.formatMessage(c.Z.manageColumnsTitle),variant:s.ModalVariant.medium,actions:[u().createElement(s.Button,{key:"save",onClick:this.handleSave,variant:s.ButtonVariant.link},t.formatMessage(c.Z.save)),u().createElement(s.Button,{key:"cancel",onClick:this.handleClose,variant:s.ButtonVariant.link},t.formatMessage(c.Z.cancel))]},u().createElement(s.DataList,{"aria-label":t.formatMessage(c.Z.manageColumnsAriaLabel),id:"table-column-management",isCompact:!0},e.map((e=>u().createElement(s.DataListItem,{"aria-labelledby":e.value,key:e.value},u().createElement(s.DataListItemRow,null,u().createElement(s.DataListCheck,{"aria-labelledby":`${e.value}Label`,isChecked:!this.isHidden(e.value),name:e.value,id:e.value,onChange:this.handleChange}),u().createElement(s.DataListItemCells,{dataListCells:[u().createElement(s.DataListCell,{id:`${e.value}Label`,key:"table-column-management-item1"},u().createElement("span",null,t.formatMessage(e.label))),u().createElement(s.DataListCell,{key:"table-column-management-item2"},e.description&&u().createElement("span",null,t.formatMessage(e.description)))]})))))))}}const M=(0,S.X1)((()=>({}))),O=(0,h.connect)(M,{})(E),P=(0,m.ZP)(O);var x=a(37269),Z=a(89662),_=a(86482),B=a(78898),D=a(62331),F=a(68091);function T(e={}){return e.project?"project":e.cluster?"cluster":e.node?"node":"date"}var k=a(69511),I=a(64703),j=a(50081),R=a(60021),W=a(6450),L=a(98485),w=a(87560),A=a(45087),V=a(91778),q=a(33748);const $=[{label:"cluster",value:"cluster"},{label:"node",value:"node"},{label:"project",value:"project"}],X=j.L.ocp;class Q extends u().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState)}render(){const{currency:e,groupBy:t,isCurrencyFeatureEnabled:a,isExportsFeatureEnabled:o,onCurrencySelected:l,onGroupBySelected:n,providers:r,providersError:i,report:d,intl:p}=this.props,m=d&&!i&&r&&r.meta&&r.meta.count>0;let h=u().createElement(L.L,null),g=u().createElement(L.L,null),y=u().createElement(L.L,null);if(d&&d.meta&&d.meta.total){const e=d.meta.total.cost&&d.meta.total.cost.total,t=d.meta.total.supplementary&&d.meta.total.supplementary.total,a=d.meta.total.infrastructure&&d.meta.total.infrastructure.total;h=(0,V.xG)(e?d.meta.total.cost.total.value:0,e?d.meta.total.cost.total.units:"USD"),g=(0,V.xG)(t?d.meta.total.supplementary.total.value:0,t?d.meta.total.supplementary.total.units:"USD"),y=(0,V.xG)(a?d.meta.total.infrastructure.total.value:0,a?d.meta.total.infrastructure.total.units:"USD")}return u().createElement("header",{style:q.W.header},u().createElement("div",{style:q.W.headerContent},u().createElement(s.Title,{headingLevel:"h1",style:q.W.title,size:s.TitleSizes["2xl"]},p.formatMessage(c.Z.ocpDetailsTitle)),u().createElement("div",{style:q.W.headerContentRight},a&&u().createElement(W.F,{currency:e,onSelect:l}),o&&u().createElement(R.b,null))),u().createElement("div",{style:q.W.headerContent},u().createElement("div",{style:q.W.headerContentLeft},u().createElement(w.X,{getIdKeyForGroupBy:T,groupBy:t,isDisabled:!m,onSelected:n,options:$,showTags:!0,tagReportPathsType:X})),Boolean(m)&&u().createElement("div",null,u().createElement(s.Tooltip,{content:p.formatMessage(c.Z.dashboardTotalCostTooltip,{infrastructureCost:y,supplementaryCost:g}),enableFlip:!0},u().createElement(s.Title,{headingLevel:"h2",style:q.W.costValue,size:s.TitleSizes["4xl"]},h)),u().createElement("div",{style:q.W.dateTitle},(0,A.J4)()))))}}const N=(0,S.X1)(((e,t)=>{const a=(0,n.H)(D.NT),s=D.aX.selectProviders(e,o.l.all,a),l=D.aX.selectProvidersError(e,o.l.all,a),r=D.aX.selectProvidersFetchStatus(e,o.l.all,a);return{isCurrencyFeatureEnabled:B.iJ.selectIsCurrencyFeatureEnabled(e),isExportsFeatureEnabled:B.iJ.selectIsExportsFeatureEnabled(e),providers:(0,_.BV)(s,o.l.ocp),providersError:l,providersFetchStatus:r,providersQueryString:a}})),G=(0,m.ZP)((0,h.connect)(N,{})(Q));var J=a(73727),H=a(91919),U=a(62423),K=a(90569),z=a(90302),Y=a(54583);const ee="infrastructure",te="monthOverMonth",ae="supplementary",se=i.K.ocp;class oe extends u().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{groupBy:e,groupByTagKey:t,hiddenColumns:a,isAllSelected:o,report:l,selectedItems:n,intl:r}=this.props;if(!l)return;const i="project"===e,d=[],p=(0,k.c)({report:l,idKey:t||e}),m=t?[{name:""},{name:r.formatMessage(c.Z.tagNames),style:"project"===e?z.W.nameColumn:void 0},{hidden:!i,name:""},{name:r.formatMessage(c.Z.monthOverMonthChange)},{id:ee,name:r.formatMessage(c.Z.ocpDetailsInfrastructureCost),style:z.W.costColumn},{id:ae,name:r.formatMessage(c.Z.ocpDetailsSupplementaryCost),style:z.W.costColumn},Object.assign({orderBy:"cost",name:r.formatMessage(c.Z.cost),style:z.W.costColumn},p.length&&{isSortable:!0}),{name:""}]:[{name:""},Object.assign(Object.assign({orderBy:e,name:r.formatMessage(c.Z.detailsResourceNames,{value:e})},p.length&&{isSortable:!0}),{style:"project"===e?z.W.nameColumn:void 0}),{hidden:!i,name:""},{id:te,name:r.formatMessage(c.Z.monthOverMonthChange)},{id:ee,orderBy:"infrastructure_cost",name:r.formatMessage(c.Z.ocpDetailsInfrastructureCost),style:z.W.costColumn},{id:ae,orderBy:"supplementary_cost",name:r.formatMessage(c.Z.ocpDetailsSupplementaryCost),style:z.W.costColumn},Object.assign({orderBy:"cost",name:r.formatMessage(c.Z.cost),style:z.W.costColumn},p.length&&{isSortable:!0}),{name:""}];p.map(((a,l)=>{const p=this.getTotalCost(a,l),m=a&&null!==a.label?a.label:"",h=this.getMonthOverMonthCost(a,l),g=this.getSupplementaryCost(a,l),y=this.getInfrastructureCost(a,l),v=m===`no-${e}`||m===`no-${t}`,f="category"===a.classification,C=a.id&&a.id!==a.label?u().createElement("div",{style:z.W.infoDescription},a.id):null,S=this.getActions(a,v||f),b=v?m:u().createElement(J.rU,{to:(0,Y.T)({basePath:H.Hb.ocpDetailsBreakdown,label:m.toString(),description:a.id,groupBy:e})},m);d.push({cells:[{},{value:u().createElement(u().Fragment,null,u().createElement("div",null,b),u().createElement("div",{style:z.W.infoDescription},C))},{hidden:!i,value:a.default_project?u().createElement("div",null,u().createElement(s.Label,{variant:"outline",color:"green"},r.formatMessage(c.Z.default))):u().createElement("div",{style:z.W.defaultLabel})},{value:u().createElement("div",null,h),id:te},{value:u().createElement("div",null,y),id:ee},{value:u().createElement("div",null,g),id:ae},{value:u().createElement("div",null,p)},{value:u().createElement("div",null,S)}],item:a,selected:o||n&&void 0!==n.find((e=>e.id===a.id)),selectionDisabled:v||f})}));const h=m.filter((e=>!a.has(e.id)&&!e.hidden)),g=d.map((e=>{var t=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(a[s[o]]=e[s[o]])}return a}(e,[]);return t.cells=t.cells.filter((e=>!a.has(e.id)&&!e.hidden)),t}));this.setState({columns:h,rows:g})},this.getActions=(e,t)=>{const{groupBy:a,reportQueryString:s}=this.props;return u().createElement(U.e,{groupBy:a,isDisabled:t,item:e,providerType:o.l.ocp,reportPathsType:se,reportQueryString:s,showPriceListOption:"cluster"===a})},this.getSupplementaryCost=(e,t)=>{const{report:a,intl:s}=this.props,o=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total?a.meta.total.cost.total.value:0,l=0===o?o.toFixed(2):(e.supplementary.total.value/o*100).toFixed(2);return u().createElement(u().Fragment,null,(0,V.xG)(e.supplementary.total.value,e.supplementary.total.units),u().createElement("div",{style:z.W.infoDescription,key:`total-cost-${t}`},s.formatMessage(c.Z.percentOfCost,{value:l})))},this.getInfrastructureCost=(e,t)=>{const{report:a,intl:s}=this.props,o=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total?a.meta.total.cost.total.value:0,l=0===o?o.toFixed(2):(e.infrastructure.total.value/o*100).toFixed(2);return u().createElement(u().Fragment,null,(0,V.xG)(e.infrastructure.total.value,e.infrastructure.total.units),u().createElement("div",{style:z.W.infoDescription,key:`total-cost-${t}`},s.formatMessage(c.Z.percentOfCost,{value:l})))},this.getMonthOverMonthCost=(e,t)=>{const{intl:a}=this.props,s=(0,V.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),o=null!==e.delta_percent?(0,V.rl)(Math.abs(e.delta_percent)):0,l=!(0===o||"0.00"===o),n=null!==e.delta_percent;let r;return l&&(r="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(r+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(r+=" increase")),n?u().createElement("div",{className:"monthOverMonthOverride"},u().createElement("div",{className:r,key:`month-over-month-cost-${t}`},l?a.formatMessage(c.Z.percent,{value:o}):u().createElement(L.L,null),Boolean(l&&null!==e.delta_percent&&e.delta_value>0)&&u().createElement("span",{className:"fa fa-sort-up",style:z.W.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(l&&null!==e.delta_percent&&e.delta_value<0)&&u().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},z.W.ininfoArrow),z.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),u().createElement("div",{style:z.W.infoDescription,key:`month-over-month-info-${t}`},(0,A.Y)(s))):(0,A.Tf)()},this.getTotalCost=(e,t)=>{const{report:a,intl:s}=this.props,o=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total?a.meta.total.cost.total.value:0,l=0===o?o.toFixed(2):(e.cost.total.value/o*100).toFixed(2);return u().createElement(u().Fragment,null,(0,V.xG)(e.cost.total.value,e.cost.total.units),u().createElement("div",{style:z.W.infoDescription,key:`total-cost-${t}`},s.formatMessage(c.Z.percentOfCost,{value:l})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{hiddenColumns:t,report:a,selectedItems:s}=this.props,o=a&&a.data?JSON.stringify(a.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")===o&&e.selectedItems===s&&e.hiddenColumns===t||this.initDatum()}render(){const{isLoading:e,onSelected:t,onSort:a,selectedItems:s}=this.props,{columns:o,rows:l}=this.state;return u().createElement(K.w,{columns:o,isLoading:e,onSelected:t,onSort:a,rows:l,selectedItems:s})}}const le=(0,m.ZP)(oe);var ne=a(36116),re=a(70539),ie=a(81278),ce=a(94282);const de=j.Q.tag,pe=j.L.ocp;class ue extends u().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,a=[{name:e.formatMessage(c.Z.filterByValues,{value:"cluster"}),key:"cluster"},{name:e.formatMessage(c.Z.filterByValues,{value:"node"}),key:"node"},{name:e.formatMessage(c.Z.filterByValues,{value:"project"}),key:"project"}];return t&&t.data&&t.data.length&&a.push({name:e.formatMessage(c.Z.filterByValues,{value:r.up}),key:r.up}),a}}componentDidMount(){const{fetchTag:e,tagReportFetchStatus:t,tagQueryString:a}=this.props;this.setState({categoryOptions:this.getCategoryOptions()},(()=>{t!==S.iF.inProgress&&e(pe,de,a)}))}componentDidUpdate(e){const{fetchTag:t,query:a,tagReport:s,tagReportFetchStatus:o,tagQueryString:l}=this.props;(0,ce.X)(s,e.tagReport)?a&&!(0,ce.X)(a,e.query)&&o!==S.iF.inProgress&&t(pe,de,l):this.setState({categoryOptions:this.getCategoryOptions()},(()=>{o!==S.iF.inProgress&&t(pe,de,l)}))}render(){const{groupBy:e,isAllSelected:t,isExportDisabled:a,itemsPerPage:s,itemsTotal:o,onBulkSelected:l,onColumnManagementClicked:n,onExportClicked:r,onFilterAdded:i,onFilterRemoved:c,onPlatformCostsChanged:d,pagination:p,query:m,selectedItems:h,tagReport:g}=this.props,{categoryOptions:y}=this.state;return u().createElement(re.k,{categoryOptions:y,groupBy:e,isAllSelected:t,isExportDisabled:a,itemsPerPage:s,itemsTotal:o,onBulkSelected:l,onColumnManagementClicked:n,onExportClicked:r,onFilterAdded:i,onFilterRemoved:c,onPlatformCostsChanged:d,pagination:p,query:m,resourcePathsType:ne.C.ocp,selectedItems:h,showBulkSelect:!0,showColumnManagement:!0,showExport:!0,showFilter:!0,showPlatformCosts:"project"===e,tagReport:g,tagReportPathsType:pe})}}const me=(0,S.X1)(((e,t)=>{const a=(0,l.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3});return{tagReport:ie.ux.selectTag(e,pe,de,a),tagReportFetchStatus:ie.ux.selectTagFetchStatus(e,pe,de,a),tagQueryString:a}})),he={fetchTag:ie.xr.Xt},ge=(0,h.connect)(me,he)(ue),ye=(0,m.ZP)(ge);var ve=a(49382),fe=a(98499),Ce=a(32412);const Se={content:{paddingBottom:fe.ZP.value,paddingTop:fe.ZP.value},ocpDetails:{minHeight:"100%"},paginationContainer:{marginLeft:fe.ZP.value,marginRight:fe.ZP.value},pagination:{backgroundColor:ve.ZP.value,paddingBottom:Ce.ZP.value,paddingTop:Ce.ZP.value},tableContainer:{marginLeft:fe.ZP.value,marginRight:fe.ZP.value}},be={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},exclude:{},filter_by:{},group_by:{project:"*"},order_by:{cost:"desc"}},Ee=[{label:c.Z.monthOverMonthChange,value:te},{description:c.Z.ocpDetailsInfrastructureCostDesc,label:c.Z.ocpDetailsInfrastructureCost,value:ee,hidden:!0},{description:c.Z.ocpDetailsSupplementaryCostDesc,label:c.Z.ocpDetailsSupplementaryCost,value:ae,hidden:!0}],Me=i.C.cost,Oe=i.K.ocp;class Pe extends u().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],hiddenColumns:b(Ee),isAllSelected:!1,isColumnManagementModalOpen:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getColumnManagementModal=()=>{const{hiddenColumns:e,isColumnManagementModalOpen:t}=this.state,a=(0,d.cloneDeep)(Ee);return a.map((t=>{t.hidden=e.has(t.value)})),u().createElement(P,{isOpen:t,options:a,onClose:this.handleColumnManagementModalClose,onSave:this.handleColumnManagementModalSave})},this.getComputedItems=()=>{const{query:e,report:t}=this.props,a=T(e.group_by),s=(0,x.qV)(e);return(0,k.c)({report:t,idKey:s||a})},this.getExportModal=e=>{const{query:t,report:a,reportQueryString:s}=this.props,{isAllSelected:o,isExportModalOpen:l,selectedItems:n}=this.state,i=T(t.group_by),c=(0,x.qV)(t),d=a&&a.meta?a.meta.count:0,p=[];return n.map((e=>{e.label!==`no-${i}`&&e.label!==`no-${c}`&&p.push(e)})),u().createElement(C.X,{count:o?d:p.length,isAllItems:(o||n.length===d)&&e.length>0,groupBy:c?`${r.P}${c}`:i,isOpen:l,items:p,onClose:this.handleExportModalClose,reportPathsType:Oe,reportQueryString:s})},this.getPagination=(e=!1)=>{const{history:t,intl:a,query:o,report:l}=this.props,n=l&&l.meta?l.meta.count:0,r=l&&l.meta&&l.meta.filter&&l.meta.filter.limit?l.meta.filter.limit:be.filter.limit,i=(l&&l.meta&&l.meta.filter&&l.meta.filter.offset?l.meta.filter.offset:be.filter.offset)/r+1;return u().createElement(s.Pagination,{isCompact:!e,itemCount:n,onPerPageSelect:(e,a)=>(0,Z.xh)(t,o,a),onSetPage:(e,a)=>(0,Z.$9)(t,o,l,a),page:i,perPage:r,titles:{paginationTitle:a.formatMessage(c.Z.paginationTitle,{title:a.formatMessage(c.Z.openShift),placement:e?"bottom":"top"})},variant:e?s.PaginationVariant.bottom:s.PaginationVariant.top,widgetId:"exports-pagination"+(e?"-bottom":"")})},this.getTable=()=>{const{history:e,query:t,report:a,reportFetchStatus:s,reportQueryString:o}=this.props,{hiddenColumns:l,isAllSelected:n,selectedItems:i}=this.state,c=T(t.group_by),d=(0,x.qV)(t);return u().createElement(le,{groupBy:d?`${r.P}${d}`:c,groupByTagKey:d,hiddenColumns:l,isAllSelected:n,isLoading:s===S.iF.inProgress,onSelected:this.handleSelected,onSort:(a,s)=>(0,Z.yB)(e,t,a,s),report:a,reportQueryString:o,selectedItems:i})},this.getToolbar=e=>{const{history:t,query:a,report:s}=this.props,{isAllSelected:o,selectedItems:l}=this.state,n=T(a.group_by),i=(0,x.qV)(a),c=s&&s.meta?s.meta.count:0;return u().createElement(ye,{groupBy:i?`${r.P}${i}`:n,isAllSelected:o,isExportDisabled:0===e.length||!o&&0===l.length,itemsPerPage:e.length,itemsTotal:c,onBulkSelected:this.handleBulkSelected,onColumnManagementClicked:this.handleColumnManagementModalOpen,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,Z.$3)(t,a,e),onFilterRemoved:e=>(0,Z.q7)(t,a,e),onPlatformCostsChanged:this.handlePlatformCostsChanged,pagination:this.getPagination(),query:a,selectedItems:l})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleColumnManagementModalClose=e=>{this.setState({isColumnManagementModalOpen:e})},this.handleColumnManagementModalOpen=()=>{this.setState({isColumnManagementModalOpen:!0})},this.handleColumnManagementModalSave=e=>{this.setState({hiddenColumns:e})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{history:t,query:a}=this.props,s=e,o=Object.assign(Object.assign({},JSON.parse(JSON.stringify(a))),{group_by:{[s]:"*"},order_by:{cost:"desc"},category:void 0});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{t.replace((0,Z.ZE)(t,o,!0))}))},this.handlePlatformCostsChanged=e=>{const{history:t,query:a}=this.props,s=Object.assign(Object.assign({},JSON.parse(JSON.stringify(a))),{category:e?"platform":void 0});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{t.replace((0,Z.ZE)(t,s,!0))}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:a,selectedItems:s}=this.state;let o=[...a?this.getComputedItems():s];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.updateReport=()=>{const{fetchReport:e,history:t,location:a,query:s,reportQueryString:o}=this.props;a.search?e(Oe,Me,o):t.replace((0,Z.ZE)(t,{exclude:s?s.exclude:void 0,filter_by:s?s.filter_by:void 0,group_by:s?s.group_by:void 0,order_by:{cost:"desc"}}))},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleColumnManagementModalClose=this.handleColumnManagementModalClose.bind(this),this.handleColumnManagementModalOpen=this.handleColumnManagementModalOpen.bind(this),this.handleColumnManagementModalSave=this.handleColumnManagementModalSave.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handlePlatformCostsChanged=this.handlePlatformCostsChanged.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{location:a,report:s,reportError:o,reportQueryString:l}=this.props,{selectedItems:n}=this.state,r=e.reportQueryString!==l,i=!s&&!o,c=!a.search,d=t.selectedItems!==n;(r||i||c||d)&&this.updateReport()}render(){const{currency:e,history:t,providers:a,providersFetchStatus:s,query:l,report:n,reportError:r,reportFetchStatus:i,intl:d}=this.props,p=T(l.group_by),m=this.getComputedItems(),h=d.formatMessage(c.Z.ocpDetailsTitle);if(r)return u().createElement(f.W,{title:h});if(s===S.iF.inProgress)return u().createElement(g.g,{title:h});if(s===S.iF.complete){if(a&&a.meta&&0===a.meta.count)return u().createElement(v.L,{providerType:o.l.ocp,title:h});if(!(0,_.g8)(a))return u().createElement(y.J,{title:h})}return u().createElement("div",{style:Se.ocpDetails},u().createElement(G,{currency:e,groupBy:p,onCurrencySelected:e=>(0,Z._s)(t,l,e),onGroupBySelected:this.handleGroupBySelected,report:n}),u().createElement("div",{style:Se.content},this.getToolbar(m),this.getExportModal(m),this.getColumnManagementModal(),i===S.iF.inProgress?u().createElement(g.g,null):u().createElement(u().Fragment,null,u().createElement("div",{style:Se.tableContainer},this.getTable()),u().createElement("div",{style:Se.paginationContainer},u().createElement("div",{style:Se.pagination},this.getPagination(!0))))))}}const xe=(0,S.X1)(((e,t)=>{const a=(0,l.mB)(location.search),s=B.iJ.selectIsCurrencyFeatureEnabled(e)?(0,I.zC)():void 0,r={delta:"cost",filter:Object.assign(Object.assign({},be.filter),a.filter),filter_by:a.filter_by||be.filter_by,exclude:a.exclude||be.exclude,group_by:a.group_by||be.group_by,order_by:a.order_by||be.order_by,category:a.category},i=(0,l.pm)(Object.assign(Object.assign({},r),{currency:s})),c=F.ZV.selectReport(e,Oe,Me,i),d=F.ZV.selectReportError(e,Oe,Me,i),p=F.ZV.selectReportFetchStatus(e,Oe,Me,i),u=(0,n.H)(D.NT),m=D.aX.selectProviders(e,o.l.all,u),h=D.aX.selectProvidersFetchStatus(e,o.l.all,u);return{currency:s,providers:(0,_.BV)(m,o.l.ocp),providersFetchStatus:h,query:r,report:c,reportError:d,reportFetchStatus:p,reportQueryString:i}})),Ze={fetchReport:F.nx.fetchReport},_e=(0,m.ZP)((0,h.connect)(xe,Ze)(Pe))}}]);
//# sourceMappingURL=../sourcemaps/ocp.f176d82786db94d79b61363c8a3e5591.js.map