(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[403],{32185:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>F});var s=r(37762),o=r(86208),i=r(45997),l=r(19078),a=r(23246),n=r(97522),c=r.n(n),p=r(91768),d=r(43476),h=r(57954),u=r(94377),m=r(45235),g=r(62784),y=r(44696),v=r(30315);const S=(0,u.X1)(((e,t)=>({selectWidgets:v.eo.selectWidgets(e),widgets:v.eo.selectCurrentWidgets(e)}))),f=(0,p.Z)()((0,d.connect)(S,{})(y.X));var b=r(45572),E=r(82086);const _=(0,u.X1)(((e,t)=>({selectWidgets:E.hH.selectWidgets(e),widgets:E.hH.selectCurrentWidgets(e)}))),P=(0,p.Z)()((0,d.connect)(_,{})(b.f)),O=h.Hb.gcpDetails,B="cost",k="gcp",x=(0,u.X1)(((e,t)=>{const r=(0,s.mB)(location.search),l=(0,a.VL)(r),n=(0,a.pe)(r),p={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign({},r&&r.filter_by&&r.filter_by),l&&{[l]:void 0}),group_by:Object.assign({},l&&{[l]:n})},d=(0,s.pm)(p),h=g.ZV.selectReport(e,k,B,d),u=g.ZV.selectReportError(e,k,B,d),y=g.ZV.selectReportFetchStatus(e,k,B,d),v=(0,o.H)(m.U6),S=m.aX.selectProviders(e,"gcp",v),b=m.aX.selectProvidersFetchStatus(e,"gcp",v);return{costOverviewComponent:c().createElement(f,{groupBy:l,query:r,report:h}),description:r[i.eG],detailsURL:O,emptyStateTitle:t.t("navigation.gcp_details"),groupBy:l,groupByValue:n,historicalDataComponent:c().createElement(P,null),providers:S,providersFetchStatus:b,providerType:"gcp",query:r,queryString:d,report:h,reportError:u,reportFetchStatus:y,reportType:B,reportPathsType:k,tagReportPathsType:"gcp",title:r[i.yG]?r[i.yG]:n}})),C={fetchReport:g.nx.fetchReport},F=(0,p.Z)()((0,d.connect)(x,C)(l.Z))},27957:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ve});var s=r(97066),o=r(37762),i=r(86208),l=r(45997),a=r(73466),n=r(16679),c=r(13883),p=r(81787),d=r(46774),h=r(23246),u=r(94329),m=r(8091),g=r(97522),y=r.n(g),v=r(91768),S=r(43476),f=r(94377),b=r(45235),E=r(62784);function _(e={}){return e.account?"account":e.instance_type?"instance_type":e.project?"project":e.region?"region":e.service?"service":"date"}var P=r(31447),O=r(2088),B=r(33307),k=r(901),x=r(49382),C=r(33605),F=r(54881),q=r(98499),R=r(48196);const T={costValue:{marginTop:0,marginBottom:0},costLabelUnit:{fontSize:F.ZP.value,color:C.ZP.var},dateTitle:{textAlign:"end"},header:{display:"flex",justifyContent:"space-between",padding:q.ZP.var,backgroundColor:x.ZP.var},title:{paddingBottom:R.ZP.var}},Z={delta:"cost",filter:{time_scope_units:"month",time_scope_value:-1,resolution:"monthly"}},A=[{label:"account",value:"account"},{label:"project",value:"project"},{label:"service",value:"service"},{label:"region",value:"region"}];class j extends y().Component{render(){const{groupBy:e,onGroupByClicked:t,providers:r,providersError:o,report:i,t:l}=this.props,a=i&&!o&&r&&r.meta&&r.meta.count>0,n=i&&i.meta&&i.meta.total&&i.meta.total.cost&&i.meta.total.cost.total;return y().createElement("header",{style:T.header},y().createElement("div",null,y().createElement(s.Title,{headingLevel:"h2",style:T.title,size:"2xl"},l("navigation.gcp_details")),y().createElement(O.X,{getIdKeyForGroupBy:_,groupBy:e,isDisabled:!a,onItemClicked:t,options:A,showTags:!0,tagReportPathsType:"gcp"})),Boolean(a)&&y().createElement("div",null,y().createElement(s.Title,{headingLevel:"h2",style:T.costValue,size:"4xl"},(0,k.xG)(n?i.meta.total.cost.total.value:0)),y().createElement("div",{style:T.dateTitle},(0,B.J4)())))}}const w=(0,f.X1)(((e,t)=>{const r=(0,o.pm)(Z),s=(0,i.H)(b.U6);return{providers:b.aX.selectProviders(e,"gcp",s),providersError:b.aX.selectProvidersError(e,"gcp",s),providersFetchStatus:b.aX.selectProvidersFetchStatus(e,"gcp",s),queryString:r}})),D=(0,v.Z)()((0,S.connect)(w,{})(j));var I=r(54390),M=r(6877),X=r(55483),$=r(99163),V=r(80878),N=r(88268),G=r(16530),J=r(57954),L=r(12289),H=r(40794),U=r(11331),Q=r(73861);const W={emptyState:{backgroundColor:x.ZP.value,display:"flex",justifyContent:"center",paddingTop:U.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:Q.ZP.value},infoDescription:{color:L.ZP.value,fontSize:H.ZP.value}};class z extends y().Component{constructor(e){super(e),this.state={columns:[],rows:[]},this.initDatum=()=>{const{isAllSelected:e,query:t,report:r,selectedItems:o,t:i}=this.props;if(!t||!r)return;const a=_(t.group_by),n=this.getGroupByTagKey(),c=(0,k.xG)(r&&r.meta&&r.meta.total&&r.meta.total.cost&&r.meta.total.cost.total?r.meta.total.cost.total.value:0),p=n?[{title:i("details.tag_names")},{title:i("details.month_over_month_change")},{orderBy:"cost",title:i("cost",{total:c}),transforms:[M.sortable]},{title:""}]:[{orderBy:a,title:i("details.resource_names",{groupBy:a}),transforms:[M.sortable]},{title:i("details.month_over_month_change")},{orderBy:"cost",title:i("cost"),transforms:[M.sortable]},{title:""}],d=[];(0,P.c)({report:r,idKey:n||a}).map(((r,s)=>{const i=r&&null!==r.label?r.label:"",c=this.getMonthOverMonthCost(r,s),p=this.getTotalCost(r,s),h=this.getActions(r);let u=y().createElement(G.Link,{to:(0,N.T)({basePath:J.Hb.gcpDetailsBreakdown,label:i.toString(),description:r.id,groupBy:n?`${l.P}${n}`:a,query:t})},i);const m=!(i===`no-${a}`||i===`no-${n}`);m||(u=i);const g=r.id&&r.id!==r.label?y().createElement("div",{style:W.infoDescription},r.id):null;d.push({cells:[{title:y().createElement("div",null,u,g)},{title:y().createElement("div",null,c)},{title:y().createElement("div",null,p)},{title:y().createElement("div",null,h)}],disableSelection:!m,isOpen:!1,item:r,selected:e||o&&void 0!==o.find((e=>e.id===r.id))})}));const h=[{heightAuto:!0,cells:[{props:{colSpan:5},title:y().createElement(s.Bullseye,null,y().createElement("div",{style:{textAlign:"center"}},y().createElement(s.Spinner,{size:"xl"})))}]}];this.setState({columns:p,loadingRows:h,rows:d,sortBy:{}})},this.getActions=e=>{const{groupBy:t,query:r}=this.props;return y().createElement(V.e,{groupBy:t,item:e,query:r,reportPathsType:"gcp"})},this.getEmptyState=()=>{const{query:e,t}=this.props;for(const t of Object.values(e.filter_by))if("*"!==t)return y().createElement(X.c,{filter:t,showMargin:!1});return y().createElement(s.EmptyState,null,y().createElement(s.EmptyStateIcon,{icon:I.Xk}),y().createElement(s.EmptyStateBody,null,t("details.empty_state")))},this.getGroupByTagKey=()=>{const{query:e}=this.props;let t;for(const r of Object.keys(e.group_by)){const e=r.indexOf(l.P);if(-1!==e){t=r.substring(e+l.P.length);break}}return t},this.getMonthOverMonthCost=(e,t)=>{const{t:r}=this.props,s=(0,k.xG)(Math.abs(e.cost.total.value-e.delta_value)),o=null!==e.delta_percent?Math.abs(e.delta_percent).toFixed(2):0,i=!(0===o||"0.00"===o),l=null!==e.delta_percent;let a;return i&&(a="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(a+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(a+=" increase")),l?y().createElement("div",{className:"monthOverMonthOverride"},y().createElement("div",{className:a,key:`month-over-month-cost-${t}`},i?r("percent",{value:o}):y().createElement($.L,null),Boolean(i&&null!==e.delta_percent&&e.delta_value>0)&&y().createElement("span",{className:"fa fa-sort-up",style:W.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(i&&null!==e.delta_percent&&e.delta_value<0)&&y().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},W.infoArrow),W.infoArrowDesc),key:`month-over-month-icon-${t}`})),y().createElement("div",{style:W.infoDescription,key:`month-over-month-info-${t}`},(0,B.Y)(s))):(0,B.Tf)()},this.getSortBy=()=>{const{query:e}=this.props,{columns:t}=this.state;let r=-1,s=M.SortByDirection.asc;for(const o of Object.keys(e.order_by)){let i=0;for(const l of t){if(l.orderBy===o){s="asc"===e.order_by[o]?M.SortByDirection.asc:M.SortByDirection.desc,r=i+1;break}i++}}return r>-1?{index:r,direction:s}:{}},this.getTotalCost=(e,t)=>{const{report:r,t:s}=this.props,o=r&&r.meta&&r.meta.total&&r.meta.total.cost&&r.meta.total.cost.total?r.meta.total.cost.total.value:0,i=0===o?o.toFixed(2):(e.cost.total.value/o*100).toFixed(2);return y().createElement(y().Fragment,null,(0,k.xG)(e.cost.total.value),y().createElement("div",{style:W.infoDescription,key:`total-cost-${t}`},s("percent_of_cost",{value:i})))},this.handleOnSelect=(e,t,r)=>{const{onSelected:s}=this.props;let o,i=[];-1===r?o=this.state.rows.map((e=>(e.selected=t,e))):(o=[...this.state.rows],o[r].selected=t,i=[o[r].item]),this.setState({rows:o},(()=>{s&&s(i,t)}))},this.handleOnSort=(e,t,r)=>{const{onSort:s}=this.props,{columns:o}=this.state;s&&s(o[t-1].orderBy,r===M.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{query:t,report:r,selectedItems:s}=this.props,i=r&&r.data?JSON.stringify(r.data):"",l=e.report&&e.report.data?JSON.stringify(e.report.data):"";(0,o.pm)(e.query)===(0,o.pm)(t)&&l===i&&e.selectedItems===s||this.initDatum()}render(){const{isLoading:e}=this.props,{columns:t,loadingRows:r,rows:s}=this.state;return y().createElement(y().Fragment,null,y().createElement(M.Table,{"aria-label":"details-table",canSelectAll:!1,cells:t,className:"tableOverride",rows:e?r:s,sortBy:this.getSortBy(),onSelect:e?void 0:this.handleOnSelect,onSort:this.handleOnSort,gridBreakPoint:"grid-2xl"},y().createElement(M.TableHeader,null),y().createElement(M.TableBody,null)),Boolean(0===s.length)&&y().createElement("div",{style:W.emptyState},this.getEmptyState()))}}const K=(0,v.Z)()(z);var Y=r(8650),ee=r(28631),te=r(19853);const re="tag",se="gcp";class oe extends y().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{t:e,tagReport:t}=this.props,r=[{name:e("filter_by.values.account"),key:"account"},{name:e("filter_by.values.project"),key:"project"},{name:e("filter_by.values.service"),key:"service"},{name:e("filter_by.values.region"),key:"region"}];return t&&t.data&&t.data.length>0&&r.push({name:e("filter_by.values.tag"),key:l.up}),r}}componentDidMount(){const{fetchTag:e,queryString:t}=this.props;e(se,re,t),this.setState({categoryOptions:this.getCategoryOptions()})}componentDidUpdate(e){const{fetchTag:t,query:r,queryString:s,tagReport:o}=this.props;r&&!(0,te.X)(r,e.query)&&t(se,re,s),(0,te.X)(o,e.tagReport)||this.setState({categoryOptions:this.getCategoryOptions()})}render(){const{groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isExportDisabled:s,itemsPerPage:o,itemsTotal:i,onBulkSelected:l,onExportClicked:a,onFilterAdded:n,onFilterRemoved:c,pagination:p,query:d,selectedItems:h,tagReport:u}=this.props,{categoryOptions:m}=this.state;return y().createElement(Y.k,{categoryOptions:m,groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isExportDisabled:s,itemsPerPage:o,itemsTotal:i,onBulkSelected:l,onExportClicked:a,onFilterAdded:n,onFilterRemoved:c,pagination:p,query:d,resourcePathsType:"gcp",selectedItems:h,showBulkSelect:!0,showExport:!0,showFilter:!0,tagReport:u})}}const ie=(0,f.X1)(((e,t)=>{const r=(0,o.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1}});return{queryString:r,tagReport:ee.ux.selectTag(e,se,re,r),tagReportFetchStatus:ee.ux.selectTagFetchStatus(e,se,re,r)}})),le={fetchTag:ee.xr.Xt},ae=(0,S.connect)(ie,le)(oe),ne=(0,v.Z)()(ae);var ce=r(32412);const pe={gcpDetails:{minHeight:"100%"},content:{paddingBottom:q.ZP.value,paddingTop:q.ZP.value},paginationContainer:{marginLeft:q.ZP.value,marginRight:q.ZP.value},pagination:{backgroundColor:x.ZP.value,padding:ce.ZP.value},tableContainer:{marginLeft:q.ZP.value,marginRight:q.ZP.value}},de={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:{},group_by:{account:"*"},order_by:{cost:"desc"}},he="cost",ue="gcp";class me extends y().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,r=_(e.group_by),s=(0,h.qV)(e);return(0,P.c)({report:t,idKey:s||r})},this.getExportModal=e=>{const{isAllSelected:t,isExportModalOpen:r,selectedItems:s}=this.state,{query:o,report:i}=this.props,a=_(o.group_by),n=(0,h.qV)(o),c=i&&i.meta?i.meta.count:0,p=[];return s.map((e=>{e.label!==`no-${a}`&&e.label!==`no-${n}`&&p.push(e)})),y().createElement(d.X,{isAllItems:(t||s.length===c)&&e.length>0,groupBy:n?`${l.P}${n}`:a,isOpen:r,items:p,onClose:this.handleExportModalClose,query:o,reportPathsType:ue})},this.getPagination=(e=!1)=>{const{report:t}=this.props,r=t&&t.meta?t.meta.count:0,o=t&&t.meta&&t.meta.filter&&t.meta.filter.limit?t.meta.filter.limit:de.filter.limit,i=(t&&t.meta&&t.meta.filter&&t.meta.filter.offset?t.meta.filter.offset:de.filter.offset)/o+1;return y().createElement(s.Pagination,{isCompact:!e,itemCount:r,onPerPageSelect:this.handlePerPageSelect,onSetPage:this.handleSetPage,page:i,perPage:o,variant:e?s.PaginationVariant.bottom:s.PaginationVariant.top,widgetId:"`pagination${isBottom ? '-bottom' : ''}`"})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:r}=this.props,{isAllSelected:s,selectedItems:o}=this.state,i=_(e.group_by),a=(0,h.qV)(e);return y().createElement(K,{groupBy:a?`${l.P}${a}`:i,isAllSelected:s,isLoading:1===r,onSelected:this.handleSelected,onSort:this.handleSort,query:e,report:t,selectedItems:o})},this.getToolbar=e=>{const{query:t,report:r}=this.props,{isAllSelected:s,selectedItems:o}=this.state,i=_(t.group_by),a=(0,h.qV)(t),n=r&&r.meta?r.meta.count:0;return y().createElement(ne,{groupBy:a?`${l.P}${a}`:i,isAllSelected:s,isExportDisabled:0===e.length||!s&&0===o.length,itemsPerPage:e.length,itemsTotal:n,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:this.handleFilterAdded,onFilterRemoved:this.handleFilterRemoved,pagination:this.getPagination(),query:t,selectedItems:o})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleFilterAdded=(e,t)=>{const{history:r,query:s}=this.props,o=(0,m.W)(s,e,t);r.replace(this.getRouteForQuery(o,!0))},this.handleFilterRemoved=(e,t)=>{const{history:r,query:s}=this.props,o=(0,m.U)(s,e,t);r.replace(this.getRouteForQuery(o,!0))},this.handleGroupByClick=e=>{const{history:t,query:r}=this.props,s=e,o=Object.assign(Object.assign({},JSON.parse(JSON.stringify(r))),{group_by:{[s]:"*"},order_by:{cost:"desc"}});t.replace(this.getRouteForQuery(o,!0)),this.setState({isAllSelected:!1,selectedItems:[]})},this.handlePerPageSelect=(e,t)=>{const{history:r,query:s}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(s)));o.filter=Object.assign(Object.assign({},s.filter),{limit:t});const i=this.getRouteForQuery(o,!0);r.replace(i)},this.handleSelected=(e,t=!1)=>{const{isAllSelected:r,selectedItems:s}=this.state;let o=[...r?this.getComputedItems():s];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.handleSetPage=(e,t)=>{const{history:r,query:s,report:o}=this.props,i=o&&o.meta&&o.meta.filter&&o.meta.filter.limit?o.meta.filter.limit:de.filter.limit,l=t*i-i,a=Object.assign({},JSON.parse(JSON.stringify(s)));a.filter=Object.assign(Object.assign({},s.filter),{offset:l});const n=this.getRouteForQuery(a);r.replace(n)},this.handleSort=(e,t)=>{const{history:r,query:s}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(s)));o.order_by={},o.order_by[e]=t?"asc":"desc";const i=this.getRouteForQuery(o);r.replace(i)},this.updateReport=()=>{const{query:e,location:t,fetchReport:r,history:s,queryString:o}=this.props;t.search?r(ue,he,o):s.replace(this.getRouteForQuery({filter_by:e?e.filter_by:void 0,group_by:e?e.group_by:void 0,order_by:{cost:"desc"}}))},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleFilterAdded=this.handleFilterAdded.bind(this),this.handleFilterRemoved=this.handleFilterRemoved.bind(this),this.handlePerPageSelect=this.handlePerPageSelect.bind(this),this.handleSelected=this.handleSelected.bind(this),this.handleSetPage=this.handleSetPage.bind(this),this.handleSort=this.handleSort.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{location:r,report:s,reportError:o,queryString:i}=this.props,{selectedItems:l}=this.state,a=e.queryString!==i,n=!s&&!o,c=!r.search,p=t.selectedItems!==l;(a||n||c||p)&&this.updateReport()}getRouteForQuery(e,t=!1){const{history:r}=this.props;return t&&(e.filter=Object.assign(Object.assign({},e.filter),{offset:de.filter.offset})),`${r.location.pathname}?${(0,o.IV)(e)}`}render(){const{providers:e,providersFetchStatus:t,query:r,report:s,reportError:o,reportFetchStatus:i,t:l}=this.props,d=_(r.group_by),h=this.getComputedItems(),m=l("navigation.gcp_details");if(o)return y().createElement(p.Z,{title:m});if(1===t&&1===i)return y().createElement(a.Z,{title:m});if(2===t&&2===i){if(e&&e.meta&&0===e.meta.count&&2===t)return y().createElement(c.Z,{providerType:"gcp",title:m});if(!(0,u.g8)(e))return y().createElement(n.Z,{title:m})}return y().createElement("div",{style:pe.gcpDetails},y().createElement(D,{groupBy:d,onGroupByClicked:this.handleGroupByClick,report:s}),y().createElement("div",{style:pe.content},this.getToolbar(h),this.getExportModal(h),1===i?y().createElement(a.Z,null):y().createElement(y().Fragment,null,y().createElement("div",{style:pe.tableContainer},this.getTable()),y().createElement("div",{style:pe.paginationContainer},y().createElement("div",{style:pe.pagination},this.getPagination(!0))))))}}const ge=(0,f.X1)(((e,t)=>{const r=(0,o.mB)(location.search),s={delta:"cost",filter:Object.assign(Object.assign({},de.filter),r.filter),filter_by:r.filter_by||de.filter_by,group_by:r.group_by||de.group_by,order_by:r.order_by||de.order_by},l=(0,o.pm)(s),a=E.ZV.selectReport(e,ue,he,l),n=E.ZV.selectReportError(e,ue,he,l),c=E.ZV.selectReportFetchStatus(e,ue,he,l),p=(0,i.H)(b.U6);return{providers:b.aX.selectProviders(e,"gcp",p),providersFetchStatus:b.aX.selectProvidersFetchStatus(e,"gcp",p),query:s,queryString:l,report:a,reportError:n,reportFetchStatus:c}})),ye={fetchReport:E.nx.fetchReport},ve=(0,v.Z)()((0,S.connect)(ge,ye)(me))}}]);
//# sourceMappingURL=faba8aa38ff2f65f4f1d.bundle.js.map