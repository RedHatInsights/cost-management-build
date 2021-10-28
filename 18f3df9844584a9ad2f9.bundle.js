"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[318],{8124:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var s=r(90179),o=r(86208),i=r(45997),l=r(93952),a=r(19078),n=r(23246),c=r(97522),d=r.n(c),p=r(74806),h=r(43476),u=r(57954),m=r(94377),g=r(45235),y=r(42581),f=r(44696),S=r(48336);const b=(0,m.X1)(((e,t)=>({selectWidgets:S.Gl.selectWidgets(e),widgets:S.Gl.selectCurrentWidgets(e)}))),v=(0,p.ZP)((0,h.connect)(b,{})(f.X));var E=r(45572),P=r(75036);const O=(0,m.X1)(((e,t)=>({selectWidgets:P.D.selectWidgets(e),widgets:P.D.selectCurrentWidgets(e)}))),B=(0,p.ZP)((0,h.connect)(O,{})(E.f)),_=u.Hb.ibmDetails,Z="cost",M="gcp",C=(0,m.X1)(((e,t)=>{const r=(0,s.mB)(location.search),a=(0,n.VL)(r),c=(0,n.pe)(r),p={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign({},r&&r.filter_by&&r.filter_by),a&&{[a]:void 0}),group_by:Object.assign({},a&&{[a]:c})},h=(0,s.pm)(p),u=y.ZV.selectReport(e,M,Z,h),m=y.ZV.selectReportError(e,M,Z,h),f=y.ZV.selectReportFetchStatus(e,M,Z,h),S=(0,o.H)(g.t8),b=g.aX.selectProviders(e,"ibm",S),E=g.aX.selectProvidersFetchStatus(e,"ibm",S);return{costOverviewComponent:d().createElement(v,{groupBy:a,query:r,report:u}),description:r[i.eG],detailsURL:_,emptyStateTitle:t.intl.formatMessage(l.Z.IBMDetailsTitle),groupBy:a,groupByValue:c,historicalDataComponent:d().createElement(B,null),providers:b,providersFetchStatus:E,providerType:"ibm",query:r,queryString:h,report:u,reportError:m,reportFetchStatus:f,reportType:Z,reportPathsType:M,tagReportPathsType:"gcp",title:r[i.yG]?r[i.yG]:c}})),F={fetchReport:y.nx.fetchReport},x=(0,p.ZP)((0,h.connect)(C,F)(a.Z))},36711:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ve});var s=r(81371),o=r(90179),i=r(86208),l=r(45997),a=r(93952),n=r(73466),c=r(16679),d=r(13883),p=r(81787),h=r(46774),u=r(23246),m=r(94329),g=r(8091),y=r(97522),f=r.n(y),S=r(74806),b=r(43476),v=r(94377),E=r(45235),P=r(42581),O=r(26018);function B(e={}){return e.account?"account":e.instance_type?"instance_type":e.project?"project":e.region?"region":e.service?"service":"date"}var _=r(31447),Z=r(51381),M=r(2088),C=r(33307),F=r(99291),x=r(49382),T=r(33605),q=r(54881),R=r(98499),k=r(48196);const D={costValue:{marginTop:R.ZP.var,marginBottom:0},costLabelUnit:{fontSize:q.ZP.value,color:T.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:x.ZP.var,padding:R.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},title:{paddingBottom:k.ZP.var}},A={delta:"cost",filter:{time_scope_units:"month",time_scope_value:-1,resolution:"monthly"}},I=[{label:"account",value:"account"},{label:"project",value:"project"},{label:"service",value:"service"},{label:"region",value:"region"}];class j extends f().Component{render(){const{groupBy:e,onGroupBySelected:t,providers:r,providersError:o,report:i,intl:l}=this.props,n=i&&!o&&r&&r.meta&&r.meta.count>0,c=i&&i.meta&&i.meta.total&&i.meta.total.cost&&i.meta.total.cost.total;return f().createElement("header",{style:D.header},f().createElement("div",{style:D.headerContent},f().createElement(s.Title,{headingLevel:"h1",style:D.title,size:s.TitleSizes["2xl"]},l.formatMessage(a.Z.IBMDetailsTitle)),f().createElement(Z.F,null)),f().createElement("div",{style:D.headerContent},f().createElement("div",{style:D.headerContentLeft},f().createElement(M.X,{getIdKeyForGroupBy:B,groupBy:e,isDisabled:!n,onSelected:t,options:I,showTags:!0,tagReportPathsType:"gcp"})),Boolean(n)&&f().createElement("div",null,f().createElement(s.Title,{headingLevel:"h2",style:D.costValue,size:s.TitleSizes["4xl"]},(0,F.xG)(c?i.meta.total.cost.total.value:0,c?i.meta.total.cost.total.units:"USD")),f().createElement("div",{style:D.dateTitle},(0,C.J4)()))))}}const w=(0,v.X1)(((e,t)=>{const r=(0,o.pm)(A),s=(0,i.H)(E.t8);return{providers:E.aX.selectProviders(e,"ibm",s),providersError:E.aX.selectProvidersError(e,"ibm",s),providersFetchStatus:E.aX.selectProvidersFetchStatus(e,"ibm",s),queryString:r}})),V=(0,S.ZP)((0,b.connect)(w,{})(j));var X=r(52636),$=r(34941),N=r(55483),G=r(99163),L=r(80878),J=r(88268),H=r(73727),Q=r(57954),U=r(12289),z=r(40794),W=r(11331),K=r(73861);const Y={emptyState:{backgroundColor:x.ZP.value,display:"flex",justifyContent:"center",paddingTop:W.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:K.ZP.value},infoDescription:{color:U.ZP.value,fontSize:z.ZP.value}};class ee extends f().Component{constructor(e){super(e),this.state={columns:[],rows:[]},this.initDatum=()=>{const{isAllSelected:e,query:t,report:r,selectedItems:o,intl:i}=this.props;if(!t||!r)return;const n=B(t.group_by),c=this.getGroupByTagKey(),d=c?[{title:i.formatMessage(a.Z.TagNames)},{title:i.formatMessage(a.Z.MonthOverMonthChange)},{orderBy:"cost",title:i.formatMessage(a.Z.Cost),transforms:[$.sortable]},{title:""}]:[{orderBy:n,title:i.formatMessage(a.Z.DetailsResourceNames,{value:n}),transforms:[$.sortable]},{title:i.formatMessage(a.Z.MonthOverMonthChange)},{orderBy:"cost",title:i.formatMessage(a.Z.Cost),transforms:[$.sortable]},{title:""}],p=[];(0,_.c)({report:r,idKey:c||n}).map(((r,s)=>{const i=r&&null!==r.label?r.label:"",a=this.getMonthOverMonthCost(r,s),d=this.getTotalCost(r,s),h=this.getActions(r);let u=f().createElement(H.rU,{to:(0,J.T)({basePath:Q.Hb.ibmDetailsBreakdown,label:i.toString(),description:r.id,groupBy:c?`${l.P}${c}`:n,query:t})},i);const m=!(i===`no-${n}`||i===`no-${c}`);m||(u=i);const g=r.id&&r.id!==r.label?f().createElement("div",{style:Y.infoDescription},r.id):null;p.push({cells:[{title:f().createElement("div",null,u,g)},{title:f().createElement("div",null,a)},{title:f().createElement("div",null,d)},{title:f().createElement("div",null,h)}],disableSelection:!m,isOpen:!1,item:r,selected:e||o&&void 0!==o.find((e=>e.id===r.id))})}));const h=[{heightAuto:!0,cells:[{props:{colSpan:5},title:f().createElement(s.Bullseye,null,f().createElement("div",{style:{textAlign:"center"}},f().createElement(s.Spinner,{size:"xl"})))}]}];this.setState({columns:d,loadingRows:h,rows:p,sortBy:{}})},this.getActions=e=>{const{groupBy:t,query:r}=this.props;return f().createElement(L.e,{groupBy:t,item:e,query:r,reportPathsType:"gcp"})},this.getEmptyState=()=>{const{query:e,intl:t}=this.props;for(const t of Object.values(e.filter_by))if("*"!==t)return f().createElement(N.c,{filter:t,showMargin:!1});return f().createElement(s.EmptyState,null,f().createElement(s.EmptyStateIcon,{icon:X.Xk}),f().createElement(s.EmptyStateBody,null,t.formatMessage(a.Z.DetailsEmptyState)))},this.getGroupByTagKey=()=>{const{query:e}=this.props;let t;for(const r of Object.keys(e.group_by)){const e=r.indexOf(l.P);if(-1!==e){t=r.substring(e+l.P.length);break}}return t},this.getMonthOverMonthCost=(e,t)=>{const{intl:r}=this.props,s=(0,F.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),o=null!==e.delta_percent?(0,F.rl)(Math.abs(e.delta_percent)):0,i=!(0===o||"0.00"===o),l=null!==e.delta_percent;let n;return i&&(n="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(n+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(n+=" increase")),l?f().createElement("div",{className:"monthOverMonthOverride"},f().createElement("div",{className:n,key:`month-over-month-cost-${t}`},i?r.formatMessage(a.Z.Percent,{value:o}):f().createElement(G.L,null),Boolean(i&&null!==e.delta_percent&&e.delta_value>0)&&f().createElement("span",{className:"fa fa-sort-up",style:Y.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(i&&null!==e.delta_percent&&e.delta_value<0)&&f().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},Y.infoArrow),Y.infoArrowDesc),key:`month-over-month-icon-${t}`})),f().createElement("div",{style:Y.infoDescription,key:`month-over-month-info-${t}`},(0,C.Y)(s))):(0,C.Tf)()},this.getSortBy=()=>{const{query:e}=this.props,{columns:t}=this.state;let r=-1,s=$.SortByDirection.asc;for(const o of Object.keys(e.order_by)){let i=0;for(const l of t){if(l.orderBy===o){s="asc"===e.order_by[o]?$.SortByDirection.asc:$.SortByDirection.desc,r=i+1;break}i++}}return r>-1?{index:r,direction:s}:{}},this.getTotalCost=(e,t)=>{const{report:r,intl:s}=this.props,o=r&&r.meta&&r.meta.total&&r.meta.total.cost&&r.meta.total.cost.total?r.meta.total.cost.total.value:0,i=0===o?o.toFixed(2):(e.cost.total.value/o*100).toFixed(2);return f().createElement(f().Fragment,null,(0,F.xG)(e.cost.total.value,e.cost.total.units),f().createElement("div",{style:Y.infoDescription,key:`total-cost-${t}`},s.formatMessage(a.Z.PercentOfCost,{value:i})))},this.handleOnSelect=(e,t,r)=>{const{onSelected:s}=this.props;let o,i=[];-1===r?o=this.state.rows.map((e=>(e.selected=t,e))):(o=[...this.state.rows],o[r].selected=t,i=[o[r].item]),this.setState({rows:o},(()=>{s&&s(i,t)}))},this.handleOnSort=(e,t,r)=>{const{onSort:s}=this.props,{columns:o}=this.state;s&&s(o[t-1].orderBy,r===$.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{query:t,report:r,selectedItems:s}=this.props,i=r&&r.data?JSON.stringify(r.data):"",l=e.report&&e.report.data?JSON.stringify(e.report.data):"";(0,o.pm)(e.query)===(0,o.pm)(t)&&l===i&&e.selectedItems===s||this.initDatum()}render(){const{intl:e,isLoading:t}=this.props,{columns:r,loadingRows:s,rows:o}=this.state;return f().createElement(f().Fragment,null,f().createElement($.Table,{"aria-label":e.formatMessage(a.Z.IBMDetailsTableAriaLabel),canSelectAll:!1,cells:r,className:"tableOverride",rows:t?s:o,sortBy:this.getSortBy(),onSelect:t?void 0:this.handleOnSelect,onSort:this.handleOnSort,gridBreakPoint:"grid-2xl"},f().createElement($.TableHeader,null),f().createElement($.TableBody,null)),Boolean(0===o.length)&&f().createElement("div",{style:Y.emptyState},this.getEmptyState()))}}const te=(0,S.ZP)(ee);var re=r(8650),se=r(28631),oe=r(19853);const ie="tag",le="gcp";class ae extends f().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,r=[{name:e.formatMessage(a.Z.FilterByValues,{value:"account"}),key:"account"},{name:e.formatMessage(a.Z.FilterByValues,{value:"project"}),key:"project"},{name:e.formatMessage(a.Z.FilterByValues,{value:"service"}),key:"service"},{name:e.formatMessage(a.Z.FilterByValues,{value:"region"}),key:"region"}];return t&&t.data&&t.data.length>0&&r.push({name:e.formatMessage(a.Z.FilterByValues,{value:"tag"}),key:l.up}),r}}componentDidMount(){const{fetchTag:e,queryString:t}=this.props;e(le,ie,t),this.setState({categoryOptions:this.getCategoryOptions()})}componentDidUpdate(e){const{fetchTag:t,query:r,queryString:s,tagReport:o}=this.props;r&&!(0,oe.X)(r,e.query)&&t(le,ie,s),(0,oe.X)(o,e.tagReport)||this.setState({categoryOptions:this.getCategoryOptions()})}render(){const{groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isExportDisabled:s,itemsPerPage:o,itemsTotal:i,onBulkSelected:l,onExportClicked:a,onFilterAdded:n,onFilterRemoved:c,pagination:d,query:p,selectedItems:h,tagReport:u}=this.props,{categoryOptions:m}=this.state;return f().createElement(re.k,{categoryOptions:m,groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isExportDisabled:s,itemsPerPage:o,itemsTotal:i,onBulkSelected:l,onExportClicked:a,onFilterAdded:n,onFilterRemoved:c,pagination:d,query:p,resourcePathsType:"ibm",selectedItems:h,showBulkSelect:!0,showExport:!0,showFilter:!0,tagReport:u})}}const ne=(0,v.X1)(((e,t)=>{const r=(0,o.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1}});return{queryString:r,tagReport:se.ux.selectTag(e,le,ie,r),tagReportFetchStatus:se.ux.selectTagFetchStatus(e,le,ie,r)}})),ce={fetchTag:se.xr.Xt},de=(0,b.connect)(ne,ce)(ae),pe=(0,S.ZP)(de);var he=r(32412);const ue={gcpDetails:{minHeight:"100%"},content:{paddingBottom:R.ZP.value,paddingTop:R.ZP.value},paginationContainer:{marginLeft:R.ZP.value,marginRight:R.ZP.value},pagination:{backgroundColor:x.ZP.value,padding:he.ZP.value},tableContainer:{marginLeft:R.ZP.value,marginRight:R.ZP.value}},me={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:{},group_by:{account:"*"},order_by:{cost:"desc"}},ge="cost",ye="gcp";class fe extends f().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,r=B(e.group_by),s=(0,u.qV)(e);return(0,_.c)({report:t,idKey:s||r})},this.getExportModal=e=>{const{isAllSelected:t,isExportModalOpen:r,selectedItems:s}=this.state,{query:o,report:i}=this.props,a=B(o.group_by),n=(0,u.qV)(o),c=i&&i.meta?i.meta.count:0,d=[];return s.map((e=>{e.label!==`no-${a}`&&e.label!==`no-${n}`&&d.push(e)})),f().createElement(h.X,{isAllItems:(t||s.length===c)&&e.length>0,groupBy:n?`${l.P}${n}`:a,isOpen:r,items:d,onClose:this.handleExportModalClose,query:o,reportPathsType:ye})},this.getPagination=(e=!1)=>{const{report:t}=this.props,r=t&&t.meta?t.meta.count:0,o=t&&t.meta&&t.meta.filter&&t.meta.filter.limit?t.meta.filter.limit:me.filter.limit,i=(t&&t.meta&&t.meta.filter&&t.meta.filter.offset?t.meta.filter.offset:me.filter.offset)/o+1;return f().createElement(s.Pagination,{isCompact:!e,itemCount:r,onPerPageSelect:this.handlePerPageSelect,onSetPage:this.handleSetPage,page:i,perPage:o,variant:e?s.PaginationVariant.bottom:s.PaginationVariant.top,widgetId:"`pagination${isBottom ? '-bottom' : ''}`"})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:r}=this.props,{isAllSelected:s,selectedItems:o}=this.state,i=B(e.group_by),a=(0,u.qV)(e);return f().createElement(te,{groupBy:a?`${l.P}${a}`:i,isAllSelected:s,isLoading:1===r,onSelected:this.handleSelected,onSort:this.handleSort,query:e,report:t,selectedItems:o})},this.getToolbar=e=>{const{query:t,report:r}=this.props,{isAllSelected:s,selectedItems:o}=this.state,i=B(t.group_by),a=(0,u.qV)(t),n=r&&r.meta?r.meta.count:0;return f().createElement(pe,{groupBy:a?`${l.P}${a}`:i,isAllSelected:s,isExportDisabled:0===e.length||!s&&0===o.length,itemsPerPage:e.length,itemsTotal:n,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:this.handleFilterAdded,onFilterRemoved:this.handleFilterRemoved,pagination:this.getPagination(),query:t,selectedItems:o})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleFilterAdded=(e,t)=>{const{history:r,query:s}=this.props,o=(0,g.W)(s,e,t);r.replace(this.getRouteForQuery(o,!0))},this.handleFilterRemoved=(e,t)=>{const{history:r,query:s}=this.props,o=(0,g.U)(s,e,t);r.replace(this.getRouteForQuery(o,!0))},this.handleGroupBySelected=e=>{const{history:t,query:r}=this.props,s=e,o=Object.assign(Object.assign({},JSON.parse(JSON.stringify(r))),{group_by:{[s]:"*"},order_by:{cost:"desc"}});t.replace(this.getRouteForQuery(o,!0)),this.setState({isAllSelected:!1,selectedItems:[]})},this.handlePerPageSelect=(e,t)=>{const{history:r,query:s}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(s)));o.filter=Object.assign(Object.assign({},s.filter),{limit:t});const i=this.getRouteForQuery(o,!0);r.replace(i)},this.handleSelected=(e,t=!1)=>{const{isAllSelected:r,selectedItems:s}=this.state;let o=[...r?this.getComputedItems():s];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.handleSetPage=(e,t)=>{const{history:r,query:s,report:o}=this.props,i=o&&o.meta&&o.meta.filter&&o.meta.filter.limit?o.meta.filter.limit:me.filter.limit,l=t*i-i,a=Object.assign({},JSON.parse(JSON.stringify(s)));a.filter=Object.assign(Object.assign({},s.filter),{offset:l});const n=this.getRouteForQuery(a);r.replace(n)},this.handleSort=(e,t)=>{const{history:r,query:s}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(s)));o.order_by={},o.order_by[e]=t?"asc":"desc";const i=this.getRouteForQuery(o);r.replace(i)},this.updateReport=()=>{const{query:e,location:t,fetchReport:r,history:s,queryString:o}=this.props;t.search?r(ye,ge,o):s.replace(this.getRouteForQuery({filter_by:e?e.filter_by:void 0,group_by:e?e.group_by:void 0,order_by:{cost:"desc"}}))},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleFilterAdded=this.handleFilterAdded.bind(this),this.handleFilterRemoved=this.handleFilterRemoved.bind(this),this.handlePerPageSelect=this.handlePerPageSelect.bind(this),this.handleSelected=this.handleSelected.bind(this),this.handleSetPage=this.handleSetPage.bind(this),this.handleSort=this.handleSort.bind(this)}componentDidMount(){const{resetState:e}=this.props;e(),this.updateReport()}componentDidUpdate(e,t){const{location:r,report:s,reportError:o,queryString:i}=this.props,{selectedItems:l}=this.state,a=e.queryString!==i,n=!s&&!o,c=!r.search,d=t.selectedItems!==l;(a||n||c||d)&&this.updateReport()}getRouteForQuery(e,t=!1){const{history:r}=this.props;return t&&(e.filter=Object.assign(Object.assign({},e.filter),{offset:me.filter.offset})),`${r.location.pathname}?${(0,o.IV)(e)}`}render(){const{providers:e,providersFetchStatus:t,query:r,report:s,reportError:o,reportFetchStatus:i,intl:l}=this.props,h=B(r.group_by),u=this.getComputedItems(),g=l.formatMessage(a.Z.IBMDetailsTitle);if(o)return f().createElement(p.Z,{title:g});if(1===t&&1===i)return f().createElement(n.Z,{title:g});if(2===t&&2===i){if(e&&e.meta&&0===e.meta.count&&2===t)return f().createElement(d.Z,{providerType:"ibm",title:g});if(!(0,m.g8)(e))return f().createElement(c.Z,{title:g})}return f().createElement("div",{style:ue.ibmDetails},f().createElement(V,{groupBy:h,onGroupBySelected:this.handleGroupBySelected,report:s}),f().createElement("div",{style:ue.content},this.getToolbar(u),this.getExportModal(u),1===i?f().createElement(n.Z,null):f().createElement(f().Fragment,null,f().createElement("div",{style:ue.tableContainer},this.getTable()),f().createElement("div",{style:ue.paginationContainer},f().createElement("div",{style:ue.pagination},this.getPagination(!0))))))}}const Se=(0,v.X1)(((e,t)=>{const r=(0,o.mB)(location.search),s={delta:"cost",filter:Object.assign(Object.assign({},me.filter),r.filter),filter_by:r.filter_by||me.filter_by,group_by:r.group_by||me.group_by,order_by:r.order_by||me.order_by},l=(0,o.pm)(s),a=P.ZV.selectReport(e,ye,ge,l),n=P.ZV.selectReportError(e,ye,ge,l),c=P.ZV.selectReportFetchStatus(e,ye,ge,l),d=(0,i.H)(E.t8);return{providers:E.aX.selectProviders(e,"ibm",d),providersFetchStatus:E.aX.selectProvidersFetchStatus(e,"ibm",d),query:s,queryString:l,report:a,reportError:n,reportFetchStatus:c}})),be={fetchReport:P.nx.fetchReport,resetState:O.Aw.oA},ve=(0,S.ZP)((0,b.connect)(Se,be)(fe))}}]);
//# sourceMappingURL=18f3df9844584a9ad2f9.bundle.js.map