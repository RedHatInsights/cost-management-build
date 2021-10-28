"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[403],{32185:(e,t,r)=>{r.r(t),r.d(t,{default:()=>M});var s=r(37762),o=r(86208),l=r(45997),i=r(93952),a=r(19078),n=r(23246),c=r(97522),p=r.n(c),d=r(74806),h=r(43476),u=r(57954),m=r(94377),g=r(45235),y=r(42581),f=r(44696),S=r(30315);const v=(0,m.X1)(((e,t)=>({selectWidgets:S.eo.selectWidgets(e),widgets:S.eo.selectCurrentWidgets(e)}))),b=(0,d.ZP)((0,h.connect)(v,{})(f.X));var E=r(45572),P=r(82086);const O=(0,m.X1)(((e,t)=>({selectWidgets:P.hH.selectWidgets(e),widgets:P.hH.selectCurrentWidgets(e)}))),_=(0,d.ZP)((0,h.connect)(O,{})(E.f)),B=u.Hb.gcpDetails,Z="cost",C="gcp",F=(0,m.X1)(((e,t)=>{const r=(0,s.mB)(location.search),a=(0,n.VL)(r),c=(0,n.pe)(r),d={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign({},r&&r.filter_by&&r.filter_by),a&&{[a]:void 0}),group_by:Object.assign({},a&&{[a]:c})},h=(0,s.pm)(d),u=y.ZV.selectReport(e,C,Z,h),m=y.ZV.selectReportError(e,C,Z,h),f=y.ZV.selectReportFetchStatus(e,C,Z,h),S=(0,o.H)(g.U6),v=g.aX.selectProviders(e,"gcp",S),E=g.aX.selectProvidersFetchStatus(e,"gcp",S);return{costOverviewComponent:p().createElement(b,{groupBy:a,query:r,report:u}),description:r[l.eG],detailsURL:B,emptyStateTitle:t.intl.formatMessage(i.Z.GCPDetailsTitle),groupBy:a,groupByValue:c,historicalDataComponent:p().createElement(_,null),providers:v,providersFetchStatus:E,providerType:"gcp",query:r,queryString:h,report:u,reportError:m,reportFetchStatus:f,reportType:Z,reportPathsType:C,tagReportPathsType:"gcp",title:r[l.yG]?r[l.yG]:c}})),x={fetchReport:y.nx.fetchReport},M=(0,d.ZP)((0,h.connect)(F,x)(a.Z))},27957:(e,t,r)=>{r.r(t),r.d(t,{default:()=>be});var s=r(81371),o=r(37762),l=r(86208),i=r(45997),a=r(93952),n=r(73466),c=r(16679),p=r(13883),d=r(81787),h=r(46774),u=r(23246),m=r(94329),g=r(8091),y=r(97522),f=r.n(y),S=r(74806),v=r(43476),b=r(94377),E=r(45235),P=r(42581),O=r(26018);function _(e={}){return e.account?"account":e.instance_type?"instance_type":e.project?"project":e.region?"region":e.service?"service":"date"}var B=r(31447),Z=r(51381),C=r(2088),F=r(33307),x=r(99291),M=r(49382),T=r(33605),q=r(54881),R=r(98499),k=r(48196);const A={costValue:{marginTop:R.ZP.var,marginBottom:0},costLabelUnit:{fontSize:q.ZP.value,color:T.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:M.ZP.var,padding:R.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},title:{paddingBottom:k.ZP.var}},D={delta:"cost",filter:{time_scope_units:"month",time_scope_value:-1,resolution:"monthly"}},j=[{label:"account",value:"account"},{label:"project",value:"project"},{label:"service",value:"service"},{label:"region",value:"region"}];class w extends f().Component{render(){const{groupBy:e,onGroupBySelected:t,providers:r,providersError:o,report:l,intl:i}=this.props,n=l&&!o&&r&&r.meta&&r.meta.count>0,c=l&&l.meta&&l.meta.total&&l.meta.total.cost&&l.meta.total.cost.total;return f().createElement("header",{style:A.header},f().createElement("div",{style:A.headerContent},f().createElement(s.Title,{headingLevel:"h1",style:A.title,size:s.TitleSizes["2xl"]},i.formatMessage(a.Z.GCPDetailsTitle)),f().createElement(Z.F,null)),f().createElement("div",{style:A.headerContent},f().createElement("div",{style:A.headerContentLeft},f().createElement(C.X,{getIdKeyForGroupBy:_,groupBy:e,isDisabled:!n,onSelected:t,options:j,showTags:!0,tagReportPathsType:"gcp"})),Boolean(n)&&f().createElement("div",null,f().createElement(s.Title,{headingLevel:"h2",style:A.costValue,size:s.TitleSizes["4xl"]},(0,x.xG)(c?l.meta.total.cost.total.value:0,c?l.meta.total.cost.total.units:"USD")),f().createElement("div",{style:A.dateTitle},(0,F.J4)()))))}}const I=(0,b.X1)(((e,t)=>{const r=(0,o.pm)(D),s=(0,l.H)(E.U6);return{providers:E.aX.selectProviders(e,"gcp",s),providersError:E.aX.selectProvidersError(e,"gcp",s),providersFetchStatus:E.aX.selectProvidersFetchStatus(e,"gcp",s),queryString:r}})),V=(0,S.ZP)((0,v.connect)(I,{})(w));var X=r(52636),$=r(34941),G=r(55483),N=r(99163),L=r(80878),J=r(88268),U=r(73727),H=r(57954),Q=r(12289),z=r(40794),W=r(11331),K=r(73861);const Y={emptyState:{backgroundColor:M.ZP.value,display:"flex",justifyContent:"center",paddingTop:W.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:K.ZP.value},infoDescription:{color:Q.ZP.value,fontSize:z.ZP.value}};class ee extends f().Component{constructor(e){super(e),this.state={columns:[],rows:[]},this.initDatum=()=>{const{isAllSelected:e,query:t,report:r,selectedItems:o,intl:l}=this.props;if(!t||!r)return;const n=_(t.group_by),c=this.getGroupByTagKey(),p=c?[{title:l.formatMessage(a.Z.TagNames)},{title:l.formatMessage(a.Z.MonthOverMonthChange)},{orderBy:"cost",title:l.formatMessage(a.Z.Cost),transforms:[$.sortable]},{title:""}]:[{orderBy:n,title:l.formatMessage(a.Z.DetailsResourceNames,{value:n}),transforms:[$.sortable]},{title:l.formatMessage(a.Z.MonthOverMonthChange)},{orderBy:"cost",title:l.formatMessage(a.Z.Cost),transforms:[$.sortable]},{title:""}],d=[];(0,B.c)({report:r,idKey:c||n}).map(((r,s)=>{const l=r&&null!==r.label?r.label:"",a=this.getMonthOverMonthCost(r,s),p=this.getTotalCost(r,s),h=this.getActions(r);let u=f().createElement(U.rU,{to:(0,J.T)({basePath:H.Hb.gcpDetailsBreakdown,label:l.toString(),description:r.id,groupBy:c?`${i.P}${c}`:n,query:t})},l);const m=!(l===`no-${n}`||l===`no-${c}`);m||(u=l);const g=r.id&&r.id!==r.label?f().createElement("div",{style:Y.infoDescription},r.id):null;d.push({cells:[{title:f().createElement("div",null,u,g)},{title:f().createElement("div",null,a)},{title:f().createElement("div",null,p)},{title:f().createElement("div",null,h)}],disableSelection:!m,isOpen:!1,item:r,selected:e||o&&void 0!==o.find((e=>e.id===r.id))})}));const h=[{heightAuto:!0,cells:[{props:{colSpan:5},title:f().createElement(s.Bullseye,null,f().createElement("div",{style:{textAlign:"center"}},f().createElement(s.Spinner,{size:"xl"})))}]}];this.setState({columns:p,loadingRows:h,rows:d,sortBy:{}})},this.getActions=e=>{const{groupBy:t,query:r}=this.props;return f().createElement(L.e,{groupBy:t,item:e,query:r,reportPathsType:"gcp"})},this.getEmptyState=()=>{const{query:e,intl:t}=this.props;for(const t of Object.values(e.filter_by))if("*"!==t)return f().createElement(G.c,{filter:t,showMargin:!1});return f().createElement(s.EmptyState,null,f().createElement(s.EmptyStateIcon,{icon:X.Xk}),f().createElement(s.EmptyStateBody,null,t.formatMessage(a.Z.DetailsEmptyState)))},this.getGroupByTagKey=()=>{const{query:e}=this.props;let t;for(const r of Object.keys(e.group_by)){const e=r.indexOf(i.P);if(-1!==e){t=r.substring(e+i.P.length);break}}return t},this.getMonthOverMonthCost=(e,t)=>{const{intl:r}=this.props,s=(0,x.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),o=null!==e.delta_percent?(0,x.rl)(Math.abs(e.delta_percent)):0,l=!(0===o||"0.00"===o),i=null!==e.delta_percent;let n;return l&&(n="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(n+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(n+=" increase")),i?f().createElement("div",{className:"monthOverMonthOverride"},f().createElement("div",{className:n,key:`month-over-month-cost-${t}`},l?r.formatMessage(a.Z.Percent,{value:o}):f().createElement(N.L,null),Boolean(l&&null!==e.delta_percent&&e.delta_value>0)&&f().createElement("span",{className:"fa fa-sort-up",style:Y.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(l&&null!==e.delta_percent&&e.delta_value<0)&&f().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},Y.infoArrow),Y.infoArrowDesc),key:`month-over-month-icon-${t}`})),f().createElement("div",{style:Y.infoDescription,key:`month-over-month-info-${t}`},(0,F.Y)(s))):(0,F.Tf)()},this.getSortBy=()=>{const{query:e}=this.props,{columns:t}=this.state;let r=-1,s=$.SortByDirection.asc;for(const o of Object.keys(e.order_by)){let l=0;for(const i of t){if(i.orderBy===o){s="asc"===e.order_by[o]?$.SortByDirection.asc:$.SortByDirection.desc,r=l+1;break}l++}}return r>-1?{index:r,direction:s}:{}},this.getTotalCost=(e,t)=>{const{report:r,intl:s}=this.props,o=r&&r.meta&&r.meta.total&&r.meta.total.cost&&r.meta.total.cost.total?r.meta.total.cost.total.value:0,l=0===o?o.toFixed(2):(e.cost.total.value/o*100).toFixed(2);return f().createElement(f().Fragment,null,(0,x.xG)(e.cost.total.value,e.cost.total.units),f().createElement("div",{style:Y.infoDescription,key:`total-cost-${t}`},s.formatMessage(a.Z.PercentOfCost,{value:l})))},this.handleOnSelect=(e,t,r)=>{const{onSelected:s}=this.props;let o,l=[];-1===r?o=this.state.rows.map((e=>(e.selected=t,e))):(o=[...this.state.rows],o[r].selected=t,l=[o[r].item]),this.setState({rows:o},(()=>{s&&s(l,t)}))},this.handleOnSort=(e,t,r)=>{const{onSort:s}=this.props,{columns:o}=this.state;s&&s(o[t-1].orderBy,r===$.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{query:t,report:r,selectedItems:s}=this.props,l=r&&r.data?JSON.stringify(r.data):"",i=e.report&&e.report.data?JSON.stringify(e.report.data):"";(0,o.pm)(e.query)===(0,o.pm)(t)&&i===l&&e.selectedItems===s||this.initDatum()}render(){const{intl:e,isLoading:t}=this.props,{columns:r,loadingRows:s,rows:o}=this.state;return f().createElement(f().Fragment,null,f().createElement($.Table,{"aria-label":e.formatMessage(a.Z.GCPDetailsTableAriaLabel),canSelectAll:!1,cells:r,className:"tableOverride",rows:t?s:o,sortBy:this.getSortBy(),onSelect:t?void 0:this.handleOnSelect,onSort:this.handleOnSort,gridBreakPoint:"grid-2xl"},f().createElement($.TableHeader,null),f().createElement($.TableBody,null)),Boolean(0===o.length)&&f().createElement("div",{style:Y.emptyState},this.getEmptyState()))}}const te=(0,S.ZP)(ee);var re=r(8650),se=r(28631),oe=r(19853);const le="tag",ie="gcp";class ae extends f().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,r=[{name:e.formatMessage(a.Z.FilterByValues,{value:"account"}),key:"account"},{name:e.formatMessage(a.Z.FilterByValues,{value:"project"}),key:"project"},{name:e.formatMessage(a.Z.FilterByValues,{value:"service"}),key:"service"},{name:e.formatMessage(a.Z.FilterByValues,{value:"region"}),key:"region"}];return t&&t.data&&t.data.length>0&&r.push({name:e.formatMessage(a.Z.FilterByValues,{value:"tag"}),key:i.up}),r}}componentDidMount(){const{fetchTag:e,queryString:t}=this.props;e(ie,le,t),this.setState({categoryOptions:this.getCategoryOptions()})}componentDidUpdate(e){const{fetchTag:t,query:r,queryString:s,tagReport:o}=this.props;r&&!(0,oe.X)(r,e.query)&&t(ie,le,s),(0,oe.X)(o,e.tagReport)||this.setState({categoryOptions:this.getCategoryOptions()})}render(){const{groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isExportDisabled:s,itemsPerPage:o,itemsTotal:l,onBulkSelected:i,onExportClicked:a,onFilterAdded:n,onFilterRemoved:c,pagination:p,query:d,selectedItems:h,tagReport:u}=this.props,{categoryOptions:m}=this.state;return f().createElement(re.k,{categoryOptions:m,groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isExportDisabled:s,itemsPerPage:o,itemsTotal:l,onBulkSelected:i,onExportClicked:a,onFilterAdded:n,onFilterRemoved:c,pagination:p,query:d,resourcePathsType:"gcp",selectedItems:h,showBulkSelect:!0,showExport:!0,showFilter:!0,tagReport:u})}}const ne=(0,b.X1)(((e,t)=>{const r=(0,o.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1}});return{queryString:r,tagReport:se.ux.selectTag(e,ie,le,r),tagReportFetchStatus:se.ux.selectTagFetchStatus(e,ie,le,r)}})),ce={fetchTag:se.xr.Xt},pe=(0,v.connect)(ne,ce)(ae),de=(0,S.ZP)(pe);var he=r(32412);const ue={gcpDetails:{minHeight:"100%"},content:{paddingBottom:R.ZP.value,paddingTop:R.ZP.value},paginationContainer:{marginLeft:R.ZP.value,marginRight:R.ZP.value},pagination:{backgroundColor:M.ZP.value,padding:he.ZP.value},tableContainer:{marginLeft:R.ZP.value,marginRight:R.ZP.value}},me={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:{},group_by:{account:"*"},order_by:{cost:"desc"}},ge="cost",ye="gcp";class fe extends f().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,r=_(e.group_by),s=(0,u.qV)(e);return(0,B.c)({report:t,idKey:s||r})},this.getExportModal=e=>{const{isAllSelected:t,isExportModalOpen:r,selectedItems:s}=this.state,{query:o,report:l}=this.props,a=_(o.group_by),n=(0,u.qV)(o),c=l&&l.meta?l.meta.count:0,p=[];return s.map((e=>{e.label!==`no-${a}`&&e.label!==`no-${n}`&&p.push(e)})),f().createElement(h.X,{isAllItems:(t||s.length===c)&&e.length>0,groupBy:n?`${i.P}${n}`:a,isOpen:r,items:p,onClose:this.handleExportModalClose,query:o,reportPathsType:ye})},this.getPagination=(e=!1)=>{const{report:t}=this.props,r=t&&t.meta?t.meta.count:0,o=t&&t.meta&&t.meta.filter&&t.meta.filter.limit?t.meta.filter.limit:me.filter.limit,l=(t&&t.meta&&t.meta.filter&&t.meta.filter.offset?t.meta.filter.offset:me.filter.offset)/o+1;return f().createElement(s.Pagination,{isCompact:!e,itemCount:r,onPerPageSelect:this.handlePerPageSelect,onSetPage:this.handleSetPage,page:l,perPage:o,variant:e?s.PaginationVariant.bottom:s.PaginationVariant.top,widgetId:"`pagination${isBottom ? '-bottom' : ''}`"})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:r}=this.props,{isAllSelected:s,selectedItems:o}=this.state,l=_(e.group_by),a=(0,u.qV)(e);return f().createElement(te,{groupBy:a?`${i.P}${a}`:l,isAllSelected:s,isLoading:1===r,onSelected:this.handleSelected,onSort:this.handleSort,query:e,report:t,selectedItems:o})},this.getToolbar=e=>{const{query:t,report:r}=this.props,{isAllSelected:s,selectedItems:o}=this.state,l=_(t.group_by),a=(0,u.qV)(t),n=r&&r.meta?r.meta.count:0;return f().createElement(de,{groupBy:a?`${i.P}${a}`:l,isAllSelected:s,isExportDisabled:0===e.length||!s&&0===o.length,itemsPerPage:e.length,itemsTotal:n,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:this.handleFilterAdded,onFilterRemoved:this.handleFilterRemoved,pagination:this.getPagination(),query:t,selectedItems:o})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleFilterAdded=(e,t)=>{const{history:r,query:s}=this.props,o=(0,g.W)(s,e,t);r.replace(this.getRouteForQuery(o,!0))},this.handleFilterRemoved=(e,t)=>{const{history:r,query:s}=this.props,o=(0,g.U)(s,e,t);r.replace(this.getRouteForQuery(o,!0))},this.handleGroupBySelected=e=>{const{history:t,query:r}=this.props,s=e,o=Object.assign(Object.assign({},JSON.parse(JSON.stringify(r))),{group_by:{[s]:"*"},order_by:{cost:"desc"}});t.replace(this.getRouteForQuery(o,!0)),this.setState({isAllSelected:!1,selectedItems:[]})},this.handlePerPageSelect=(e,t)=>{const{history:r,query:s}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(s)));o.filter=Object.assign(Object.assign({},s.filter),{limit:t});const l=this.getRouteForQuery(o,!0);r.replace(l)},this.handleSelected=(e,t=!1)=>{const{isAllSelected:r,selectedItems:s}=this.state;let o=[...r?this.getComputedItems():s];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.handleSetPage=(e,t)=>{const{history:r,query:s,report:o}=this.props,l=o&&o.meta&&o.meta.filter&&o.meta.filter.limit?o.meta.filter.limit:me.filter.limit,i=t*l-l,a=Object.assign({},JSON.parse(JSON.stringify(s)));a.filter=Object.assign(Object.assign({},s.filter),{offset:i});const n=this.getRouteForQuery(a);r.replace(n)},this.handleSort=(e,t)=>{const{history:r,query:s}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(s)));o.order_by={},o.order_by[e]=t?"asc":"desc";const l=this.getRouteForQuery(o);r.replace(l)},this.updateReport=()=>{const{query:e,location:t,fetchReport:r,history:s,queryString:o}=this.props;t.search?r(ye,ge,o):s.replace(this.getRouteForQuery({filter_by:e?e.filter_by:void 0,group_by:e?e.group_by:void 0,order_by:{cost:"desc"}}))},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleFilterAdded=this.handleFilterAdded.bind(this),this.handleFilterRemoved=this.handleFilterRemoved.bind(this),this.handlePerPageSelect=this.handlePerPageSelect.bind(this),this.handleSelected=this.handleSelected.bind(this),this.handleSetPage=this.handleSetPage.bind(this),this.handleSort=this.handleSort.bind(this)}componentDidMount(){const{resetState:e}=this.props;e(),this.updateReport()}componentDidUpdate(e,t){const{location:r,report:s,reportError:o,queryString:l}=this.props,{selectedItems:i}=this.state,a=e.queryString!==l,n=!s&&!o,c=!r.search,p=t.selectedItems!==i;(a||n||c||p)&&this.updateReport()}getRouteForQuery(e,t=!1){const{history:r}=this.props;return t&&(e.filter=Object.assign(Object.assign({},e.filter),{offset:me.filter.offset})),`${r.location.pathname}?${(0,o.IV)(e)}`}render(){const{providers:e,providersFetchStatus:t,query:r,report:s,reportError:o,reportFetchStatus:l,intl:i}=this.props,h=_(r.group_by),u=this.getComputedItems(),g=i.formatMessage(a.Z.GCPDetailsTitle);if(o)return f().createElement(d.Z,{title:g});if(1===t&&1===l)return f().createElement(n.Z,{title:g});if(2===t&&2===l){if(e&&e.meta&&0===e.meta.count&&2===t)return f().createElement(p.Z,{providerType:"gcp",title:g});if(!(0,m.g8)(e))return f().createElement(c.Z,{title:g})}return f().createElement("div",{style:ue.gcpDetails},f().createElement(V,{groupBy:h,onGroupBySelected:this.handleGroupBySelected,report:s}),f().createElement("div",{style:ue.content},this.getToolbar(u),this.getExportModal(u),1===l?f().createElement(n.Z,null):f().createElement(f().Fragment,null,f().createElement("div",{style:ue.tableContainer},this.getTable()),f().createElement("div",{style:ue.paginationContainer},f().createElement("div",{style:ue.pagination},this.getPagination(!0))))))}}const Se=(0,b.X1)(((e,t)=>{const r=(0,o.mB)(location.search),s={delta:"cost",filter:Object.assign(Object.assign({},me.filter),r.filter),filter_by:r.filter_by||me.filter_by,group_by:r.group_by||me.group_by,order_by:r.order_by||me.order_by},i=(0,o.pm)(s),a=P.ZV.selectReport(e,ye,ge,i),n=P.ZV.selectReportError(e,ye,ge,i),c=P.ZV.selectReportFetchStatus(e,ye,ge,i),p=(0,l.H)(E.U6);return{providers:E.aX.selectProviders(e,"gcp",p),providersFetchStatus:E.aX.selectProvidersFetchStatus(e,"gcp",p),query:s,queryString:i,report:a,reportError:n,reportFetchStatus:c}})),ve={fetchReport:P.nx.fetchReport,resetState:O.Aw.oA},be=(0,S.ZP)((0,v.connect)(Se,ve)(fe))}}]);
//# sourceMappingURL=ade02fe17bc611255b57.bundle.js.map