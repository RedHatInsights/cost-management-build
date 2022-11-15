"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[196],{95816:(e,t,r)=>{r.r(t),r.d(t,{default:()=>z});var s=r(1326),o=r(79112),a=r(84717),l=r(39333),n=r(6456),i=r(50081),c=r(97027),u=r(92950),d=r.n(u),p=r(74806),m=r(78741),h=r(91919),g=r(79467),y=r(37269),v=r(86482),b=r(1156),f=r(78898),S=r(62331),E=r(68091),_=r(64703),P=r(67709),C=r(62228);const x=(0,b.X1)(((e,t)=>({selectWidgets:C.kl.selectWidgets(e),widgets:C.kl.selectCurrentWidgets(e)}))),O=(0,p.ZP)((0,m.connect)(x,{})(P.X));var B=r(87935),Z=r(73861);const T=(0,b.X1)(((e,t)=>({selectWidgets:Z.VK.selectWidgets(e),widgets:Z.VK.selectCurrentWidgets(e)}))),F=(0,p.ZP)((0,m.connect)(T,{})(B.f)),M=h.Hb.azureDetails,q=n.C.cost,k=n.K.azure,R=(0,b.X1)(((e,t)=>{const r=(0,o.mB)(location.search),n=(0,y.VL)(r),u=(0,y.pe)(r),p=f.iJ.selectIsCurrencyFeatureEnabled(e)?(0,_.zC)():void 0,m={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign({},r&&r.filter_by&&r.filter_by),n&&{[n]:void 0}),exclude:Object.assign({},r&&r.exclude&&r.exclude),group_by:Object.assign({},n&&{[n]:u})},h=(0,o.pm)(Object.assign(Object.assign({},m),{currency:p})),g=E.ZV.selectReport(e,k,q,h),b=E.ZV.selectReportError(e,k,q,h),P=E.ZV.selectReportFetchStatus(e,k,q,h),C=(0,a.H)(S.NT),x=S.aX.selectProviders(e,s.l.all,C),B=S.aX.selectProvidersError(e,s.l.all,C),Z=S.aX.selectProvidersFetchStatus(e,s.l.all,C);return{costOverviewComponent:d().createElement(O,{currency:p,groupBy:n,report:g}),currency:p,description:r[l.eG],detailsURL:M,emptyStateTitle:t.intl.formatMessage(c.Z.azureDetailsTitle),groupBy:n,groupByValue:u,historicalDataComponent:d().createElement(F,{currency:p}),providers:(0,v.BV)(x,s.l.azure),providersError:B,providersFetchStatus:Z,providerType:s.l.azure,query:r,queryString:h,report:g,reportError:b,reportFetchStatus:P,reportType:q,reportPathsType:k,tagReportPathsType:i.L.azure,title:u}})),I={fetchReport:E.nx.fetchReport},z=(0,p.ZP)((0,m.connect)(R,I)(g.C))},76138:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_e});var s=r(69726),o=r(1326),a=r(17779),l=r(84717),n=r(39333),i=r(6456),c=r(97027),u=r(92950),d=r.n(u),p=r(74806),m=r(78741),h=r(52471),g=r(55672),y=r(2985),v=r(47947),b=r(40493),f=r(37269),S=r(89662),E=r(86482),_=r(1156),P=r(78898),C=r(62331),x=r(68091);function O(e={}){return e.subscription_guid?"subscription_guid":e.resource_location?"resource_location":e.service_name?"service_name":"date"}var B=r(69511),Z=r(64703),T=r(49382),F=r(98499),M=r(32412);const q={azureDetails:{minHeight:"100%"},content:{paddingBottom:F.ZP.value,paddingTop:F.ZP.value},paginationContainer:{marginLeft:F.ZP.value,marginRight:F.ZP.value},pagination:{backgroundColor:T.ZP.value,paddingBottom:M.ZP.value,paddingTop:M.ZP.value},tableContainer:{marginLeft:F.ZP.value,marginRight:F.ZP.value}};var k=r(50081),R=r(60021),I=r(6450),z=r(87560),D=r(45087),A=r(91778),V=r(33605),w=r(54881),j=r(48196);const X={costValue:{marginTop:F.ZP.var,marginBottom:0},costLabelUnit:{fontSize:w.ZP.value,color:V.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:T.ZP.var,padding:F.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},title:{paddingBottom:j.ZP.var}},$={delta:"cost",filter:{time_scope_units:"month",time_scope_value:-1,resolution:"monthly"}},L=[{label:"subscription_guid",value:"subscription_guid"},{label:"service_name",value:"service_name"},{label:"resource_location",value:"resource_location"}],W=k.L.azure;class N extends d().Component{render(){const{currency:e,groupBy:t,isCurrencyFeatureEnabled:r,isExportsFeatureEnabled:o,onCurrencySelected:a,onGroupBySelected:l,providers:n,providersError:i,report:u,intl:p}=this.props,m=u&&!i&&n&&n.meta&&n.meta.count>0,h=u&&u.meta&&u.meta.total&&u.meta.total.cost&&u.meta.total.cost.total;return d().createElement("header",{style:X.header},d().createElement("div",{style:X.headerContent},d().createElement(s.Title,{headingLevel:"h1",style:X.title,size:s.TitleSizes["2xl"]},p.formatMessage(c.Z.azureDetailsTitle)),d().createElement("div",{style:X.headerContentRight},r&&d().createElement(I.F,{currency:e,onSelect:a}),o&&d().createElement(R.b,null))),d().createElement("div",{style:X.headerContent},d().createElement("div",{style:X.headerContentLeft},d().createElement(z.X,{getIdKeyForGroupBy:O,groupBy:t,isDisabled:!m,onSelected:l,options:L,showTags:!0,tagReportPathsType:W})),Boolean(m)&&d().createElement("div",null,d().createElement(s.Title,{headingLevel:"h2",style:X.costValue,size:s.TitleSizes["4xl"]},(0,A.xG)(h?u.meta.total.cost.total.value:0,h?u.meta.total.cost.total.units:"USD")),d().createElement("div",{style:X.dateTitle},(0,D.J4)()))))}}const G=(0,_.X1)(((e,t)=>{const r=(0,a.pm)($),s=(0,l.H)(C.NT),n=C.aX.selectProviders(e,o.l.all,s),i=C.aX.selectProvidersError(e,o.l.all,s),c=C.aX.selectProvidersFetchStatus(e,o.l.all,s);return{isCurrencyFeatureEnabled:P.iJ.selectIsCurrencyFeatureEnabled(e),isExportsFeatureEnabled:P.iJ.selectIsExportsFeatureEnabled(e),providers:(0,E.BV)(n,o.l.azure),providersError:i,providersFetchStatus:c,queryString:r}})),J=(0,p.ZP)((0,m.connect)(G,{})(N));var K=r(73727),H=r(91919),U=r(98485),Q=r(62423),Y=r(90569),ee=r(90302),te=r(54583);const re=i.K.azure;class se extends d().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{isAllSelected:e,query:t,report:r,selectedItems:s,intl:o}=this.props;if(!t||!r)return;const a=O(t.group_by),l=this.getGroupByTagKey(),i=[],u=(0,B.c)({report:r,idKey:l||a}),p=l?[{name:""},{name:o.formatMessage(c.Z.tagNames)},{name:o.formatMessage(c.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:o.formatMessage(c.Z.cost),style:ee.W.costColumn},u.length&&{isSortable:!0}),{name:""}]:[{name:""},Object.assign({orderBy:a,name:o.formatMessage(c.Z.detailsResourceNames,{value:a})},u.length&&{isSortable:!0}),{name:o.formatMessage(c.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:o.formatMessage(c.Z.cost),style:ee.W.costColumn},u.length&&{isSortable:!0}),{name:""}];u.map(((r,o)=>{const c=r&&null!==r.label?r.label:"",u=this.getMonthOverMonthCost(r,o),p=this.getTotalCost(r,o),m=this.getActions(r);let h=d().createElement(K.rU,{to:(0,te.T)({basePath:H.Hb.azureDetailsBreakdown,label:c.toString(),description:r.id,groupBy:l?`${n.P}${l}`:a,query:t})},c);const g=!(c===`no-${a}`||c===`no-${l}`);g||(h=c);const y=r.id&&r.id!==r.label?d().createElement("div",{style:ee.W.infoDescription},r.id):null;i.push({cells:[{},{value:d().createElement("div",null,h,y)},{value:d().createElement("div",null,u)},{value:d().createElement("div",null,p)},{value:d().createElement("div",null,m)}],isOpen:!1,item:r,selected:e||s&&void 0!==s.find((e=>e.id===r.id)),selectionDisabled:!g})})),this.setState({columns:p,rows:i})},this.getActions=e=>{const{groupBy:t,query:r}=this.props;return d().createElement(Q.e,{groupBy:t,item:e,query:r,reportPathsType:re})},this.getGroupByTagKey=()=>{const{query:e}=this.props;let t;for(const r of Object.keys(e.group_by)){const e=r.indexOf(n.P);if(-1!==e){t=r.substring(e+n.P.length);break}}return t},this.getMonthOverMonthCost=(e,t)=>{const{intl:r}=this.props,s=(0,A.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),o=null!==e.delta_percent?(0,A.rl)(Math.abs(e.delta_percent)):0,a=!(0===o||"0.00"===o),l=null!==e.delta_percent;let n;return a&&(n="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(n+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(n+=" increase")),l?d().createElement("div",{className:"monthOverMonthOverride"},d().createElement("div",{className:n,key:`month-over-month-cost-${t}`},a?r.formatMessage(c.Z.percent,{value:o}):d().createElement(U.L,null),Boolean(a&&null!==e.delta_percent&&e.delta_value>0)&&d().createElement("span",{className:"fa fa-sort-up",style:ee.W.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(a&&null!==e.delta_percent&&e.delta_value<0)&&d().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},ee.W.infoArrow),ee.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),d().createElement("div",{style:ee.W.infoDescription,key:`month-over-month-info-${t}`},(0,D.Y)(s))):(0,D.Tf)()},this.getTotalCost=(e,t)=>{const{report:r,intl:s}=this.props,o=r&&r.meta&&r.meta.total&&r.meta.total.cost&&r.meta.total.cost.total?r.meta.total.cost.total.value:0,a=0===o?o.toFixed(2):(e.cost.total.value/o*100).toFixed(2);return d().createElement(d().Fragment,null,(0,A.xG)(e.cost.total.value,e.cost.total.units),d().createElement("div",{style:ee.W.infoDescription,key:`total-cost-${t}`},s.formatMessage(c.Z.percentOfCost,{value:a})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{query:t,report:r,selectedItems:s}=this.props,o=r&&r.data?JSON.stringify(r.data):"",l=e.report&&e.report.data?JSON.stringify(e.report.data):"";(0,a.pm)(e.query)===(0,a.pm)(t)&&l===o&&e.selectedItems===s||this.initDatum()}render(){const{isLoading:e,onSelected:t,onSort:r,query:s,selectedItems:o}=this.props,{columns:a,rows:l}=this.state;return d().createElement(Y.w,{columns:a,isLoading:e,onSelected:t,onSort:r,query:s,rows:l,selectedItems:o})}}const oe=(0,p.ZP)(se);var ae=r(36116),le=r(24318),ne=r(81278),ie=r(94282);const ce=k.Q.tag,ue=k.L.azure;class de extends d().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,r=[{name:e.formatMessage(c.Z.filterByValues,{value:"subscription_guid"}),key:"subscription_guid"},{name:e.formatMessage(c.Z.filterByValues,{value:"service_name"}),key:"service_name"},{name:e.formatMessage(c.Z.filterByValues,{value:"resource_location"}),key:"resource_location"}];return t&&t.data&&t.data.length&&r.push({name:e.formatMessage(c.Z.filterByValues,{value:n.up}),key:n.up}),r}}componentDidMount(){const{fetchTag:e,queryString:t,tagReportFetchStatus:r}=this.props;this.setState({categoryOptions:this.getCategoryOptions()},(()=>{r!==_.iF.inProgress&&e(ue,ce,t)}))}componentDidUpdate(e){const{fetchTag:t,query:r,queryString:s,tagReport:o,tagReportFetchStatus:a}=this.props;(0,ie.X)(o,e.tagReport)?r&&!(0,ie.X)(r,e.query)&&a!==_.iF.inProgress&&t(ue,ce,s):this.setState({categoryOptions:this.getCategoryOptions()},(()=>{a!==_.iF.inProgress&&t(ue,ce,s)}))}render(){const{groupBy:e,isAllSelected:t,isExportDisabled:r,itemsPerPage:s,itemsTotal:o,onBulkSelected:a,onExportClicked:l,onFilterAdded:n,onFilterRemoved:i,pagination:c,query:u,selectedItems:p,tagReport:m}=this.props,{categoryOptions:h}=this.state;return d().createElement(le.k,{categoryOptions:h,groupBy:e,isAllSelected:t,isExportDisabled:r,itemsPerPage:s,itemsTotal:o,onBulkSelected:a,onExportClicked:l,onFilterAdded:n,onFilterRemoved:i,pagination:c,query:u,resourcePathsType:ae.C.azure,selectedItems:p,showBulkSelect:!0,showExport:!0,showFilter:!0,tagReport:m,tagReportPathsType:ue})}}const pe=(0,_.X1)(((e,t)=>{const r=(0,a.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3}),s=ne.ux.selectTag(e,ue,ce,r);return{queryString:r,tagReportFetchStatus:ne.ux.selectTagFetchStatus(e,ue,ce,r),tagReport:s}})),me={fetchTag:ne.xr.Xt},he=(0,m.connect)(pe,me)(de),ge=(0,p.ZP)(he),ye={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},exclude:{},filter_by:{},group_by:{subscription_guid:"*"},order_by:{cost:"desc"}},ve=i.C.cost,be=i.K.azure;class fe extends d().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,r=O(e.group_by),s=(0,f.qV)(e);return(0,B.c)({report:t,idKey:s||r})},this.getExportModal=e=>{const{isAllSelected:t,isExportModalOpen:r,selectedItems:s}=this.state,{query:o,report:a}=this.props,l=O(o.group_by),i=(0,f.qV)(o),c=a&&a.meta?a.meta.count:0,u=[];return s.map((e=>{e.label!==`no-${l}`&&e.label!==`no-${i}`&&u.push(e)})),d().createElement(b.X,{count:t?c:u.length,isAllItems:(t||s.length===c)&&e.length>0,groupBy:i?`${n.P}${i}`:l,isOpen:r,items:u,onClose:this.handleExportModalClose,query:o,reportPathsType:be})},this.getPagination=(e=!1)=>{const{history:t,intl:r,query:o,report:a}=this.props,l=a&&a.meta?a.meta.count:0,n=a&&a.meta&&a.meta.filter&&a.meta.filter.limit?a.meta.filter.limit:ye.filter.limit,i=(a&&a.meta&&a.meta.filter&&a.meta.filter.offset?a.meta.filter.offset:ye.filter.offset)/n+1;return d().createElement(s.Pagination,{isCompact:!e,itemCount:l,onPerPageSelect:(e,r)=>(0,S.xh)(t,o,r),onSetPage:(e,r)=>(0,S.$9)(t,o,a,r),page:i,perPage:n,titles:{paginationTitle:r.formatMessage(c.Z.paginationTitle,{title:r.formatMessage(c.Z.azure),placement:e?"bottom":"top"})},variant:e?s.PaginationVariant.bottom:s.PaginationVariant.top,widgetId:"exports-pagination"+(e?"-bottom":"")})},this.getTable=()=>{const{history:e,query:t,report:r,reportFetchStatus:s}=this.props,{isAllSelected:o,selectedItems:a}=this.state,l=O(t.group_by),i=(0,f.qV)(t);return d().createElement(oe,{groupBy:i?`${n.P}${i}`:l,isAllSelected:o,isLoading:s===_.iF.inProgress,onSelected:this.handleSelected,onSort:(r,s)=>(0,S.yB)(e,t,r,s),query:t,report:r,selectedItems:a})},this.getToolbar=e=>{const{history:t,query:r,report:s}=this.props,{isAllSelected:o,selectedItems:a}=this.state,l=O(r.group_by),i=(0,f.qV)(r),c=s&&s.meta?s.meta.count:0;return d().createElement(ge,{groupBy:i?`${n.P}${i}`:l,isAllSelected:o,isExportDisabled:0===e.length||!o&&0===a.length,itemsPerPage:e.length,itemsTotal:c,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,S.$3)(t,r,e),onFilterRemoved:e=>(0,S.q7)(t,r,e),pagination:this.getPagination(),query:r,selectedItems:a})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{history:t,query:r}=this.props,s=e,o=Object.assign(Object.assign({},JSON.parse(JSON.stringify(r))),{group_by:{[s]:"*"},order_by:{cost:"desc"}});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{t.replace((0,S.ZE)(t,o,!0))}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:r,selectedItems:s}=this.state;let o=[...r?this.getComputedItems():s];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.updateReport=()=>{const{fetchReport:e,history:t,location:r,query:s,queryString:o}=this.props;r.search?e(be,ve,o):t.replace((0,S.ZE)(t,{exclude:s?s.exclude:void 0,filter_by:s?s.filter_by:void 0,group_by:s?s.group_by:void 0,order_by:{cost:"desc"}}))},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{location:r,report:s,reportError:o,queryString:a}=this.props,{selectedItems:l}=this.state,n=e.queryString!==a,i=!s&&!o,c=!r.search,u=t.selectedItems!==l;(n||i||c||u)&&this.updateReport()}render(){const{currency:e,history:t,providers:r,providersFetchStatus:s,query:a,report:l,reportError:n,reportFetchStatus:i,intl:u}=this.props,p=O(a.group_by),m=this.getComputedItems(),b=u.formatMessage(c.Z.azureDetailsTitle);if(n)return d().createElement(v.W,{title:b});if(s===_.iF.inProgress)return d().createElement(h.g,{title:b});if(s===_.iF.complete){if(r&&r.meta&&0===r.meta.count)return d().createElement(y.L,{providerType:o.l.azure,title:b});if(!(0,E.g8)(r))return d().createElement(g.J,{title:b})}return d().createElement("div",{style:q.azureDetails},d().createElement(J,{currency:e,groupBy:p,onCurrencySelected:e=>(0,S._s)(t,a,e),onGroupBySelected:this.handleGroupBySelected,report:l}),d().createElement("div",{style:q.content},this.getToolbar(m),this.getExportModal(m),i===_.iF.inProgress?d().createElement(h.g,null):d().createElement(d().Fragment,null,d().createElement("div",{style:q.tableContainer},this.getTable()),d().createElement("div",{style:q.paginationContainer},d().createElement("div",{style:q.pagination},this.getPagination(!0))))))}}const Se=(0,_.X1)(((e,t)=>{const r=(0,a.mB)(location.search),s=P.iJ.selectIsCurrencyFeatureEnabled(e)?(0,Z.zC)():void 0,n={delta:"cost",filter:Object.assign(Object.assign({},ye.filter),r.filter),filter_by:r.filter_by||ye.filter_by,exclude:r.exclude||ye.exclude,group_by:r.group_by||ye.group_by,order_by:r.order_by||ye.order_by},i=(0,a.pm)(Object.assign(Object.assign({},n),{currency:s})),c=x.ZV.selectReport(e,be,ve,i),u=x.ZV.selectReportError(e,be,ve,i),d=x.ZV.selectReportFetchStatus(e,be,ve,i),p=(0,l.H)(C.NT),m=C.aX.selectProviders(e,o.l.all,p),h=C.aX.selectProvidersError(e,o.l.all,p),g=C.aX.selectProvidersFetchStatus(e,o.l.all,p);return{currency:s,providers:(0,E.BV)(m,o.l.azure),providersError:h,providersFetchStatus:g,query:n,queryString:i,report:c,reportError:u,reportFetchStatus:d}})),Ee={fetchReport:x.nx.fetchReport},_e=(0,p.ZP)((0,m.connect)(Se,Ee)(fe))},79467:(e,t,r)=>{r.d(t,{C:()=>s.Z});var s=r(64727)}}]);
//# sourceMappingURL=../sourcemaps/azure.ed77f897ff8a1555896e710e0549a7bd.js.map