(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[403],{32185:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>M});var r=s(37762),o=s(86208),i=s(45997),l=s(93952),a=s(19078),n=s(23246),c=s(97522),p=s.n(c),d=s(74806),h=s(43476),u=s(57954),m=s(94377),g=s(45235),y=s(42581),f=s(44696),S=s(30315);const v=(0,m.X1)(((e,t)=>({selectWidgets:S.eo.selectWidgets(e),widgets:S.eo.selectCurrentWidgets(e)}))),b=(0,d.ZP)((0,h.connect)(v,{})(f.X));var E=s(45572),P=s(82086);const O=(0,m.X1)(((e,t)=>({selectWidgets:P.hH.selectWidgets(e),widgets:P.hH.selectCurrentWidgets(e)}))),_=(0,d.ZP)((0,h.connect)(O,{})(E.f)),B=u.Hb.gcpDetails,C="cost",Z="gcp",F=(0,m.X1)(((e,t)=>{const s=(0,r.mB)(location.search),a=(0,n.VL)(s),c=(0,n.pe)(s),d={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign({},s&&s.filter_by&&s.filter_by),a&&{[a]:void 0}),group_by:Object.assign({},a&&{[a]:c})},h=(0,r.pm)(d),u=y.ZV.selectReport(e,Z,C,h),m=y.ZV.selectReportError(e,Z,C,h),f=y.ZV.selectReportFetchStatus(e,Z,C,h),S=(0,o.H)(g.U6),v=g.aX.selectProviders(e,"gcp",S),E=g.aX.selectProvidersFetchStatus(e,"gcp",S);return{costOverviewComponent:p().createElement(b,{groupBy:a,query:s,report:u}),description:s[i.eG],detailsURL:B,emptyStateTitle:t.intl.formatMessage(l.Z.GCPDetailsTitle),groupBy:a,groupByValue:c,historicalDataComponent:p().createElement(_,null),providers:v,providersFetchStatus:E,providerType:"gcp",query:s,queryString:h,report:u,reportError:m,reportFetchStatus:f,reportType:C,reportPathsType:Z,tagReportPathsType:"gcp",title:s[i.yG]?s[i.yG]:c}})),k={fetchReport:y.nx.fetchReport},M=(0,d.ZP)((0,h.connect)(F,k)(a.Z))},27957:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>be});var r=s(80708),o=s(37762),i=s(86208),l=s(45997),a=s(93952),n=s(73466),c=s(16679),p=s(13883),d=s(81787),h=s(46774),u=s(23246),m=s(94329),g=s(8091),y=s(97522),f=s.n(y),S=s(74806),v=s(43476),b=s(94377),E=s(45235),P=s(42581),O=s(26018);function _(e={}){return e.account?"account":e.instance_type?"instance_type":e.project?"project":e.region?"region":e.service?"service":"date"}var B=s(31447),C=s(43819),Z=s(2088),F=s(33307),k=s(25800),M=s(49382),x=s(33605),T=s(54881),q=s(98499),R=s(48196);const A={costValue:{marginTop:q.ZP.var,marginBottom:0},costLabelUnit:{fontSize:T.ZP.value,color:x.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:M.ZP.var,padding:q.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},title:{paddingBottom:R.ZP.var}},D={delta:"cost",filter:{time_scope_units:"month",time_scope_value:-1,resolution:"monthly"}},j=[{label:"account",value:"account"},{label:"project",value:"project"},{label:"service",value:"service"},{label:"region",value:"region"}];class w extends f().Component{render(){const{groupBy:e,onGroupByClicked:t,providers:s,providersError:o,report:i,intl:l}=this.props,n=i&&!o&&s&&s.meta&&s.meta.count>0,c=i&&i.meta&&i.meta.total&&i.meta.total.cost&&i.meta.total.cost.total;return f().createElement("header",{style:A.header},f().createElement("div",{style:A.headerContent},f().createElement(r.Title,{headingLevel:"h1",style:A.title,size:r.TitleSizes["2xl"]},l.formatMessage(a.Z.GCPDetailsTitle)),f().createElement(C.F,null)),f().createElement("div",{style:A.headerContent},f().createElement(Z.X,{getIdKeyForGroupBy:_,groupBy:e,isDisabled:!n,onItemClicked:t,options:j,showTags:!0,tagReportPathsType:"gcp"}),Boolean(n)&&f().createElement("div",null,f().createElement(r.Title,{headingLevel:"h2",style:A.costValue,size:r.TitleSizes["4xl"]},(0,k.xG)(c?i.meta.total.cost.total.value:0,c?i.meta.total.cost.total.units:"USD")),f().createElement("div",{style:A.dateTitle},(0,F.J4)()))))}}const I=(0,b.X1)(((e,t)=>{const s=(0,o.pm)(D),r=(0,i.H)(E.U6);return{providers:E.aX.selectProviders(e,"gcp",r),providersError:E.aX.selectProvidersError(e,"gcp",r),providersFetchStatus:E.aX.selectProvidersFetchStatus(e,"gcp",r),queryString:s}})),V=(0,S.ZP)((0,v.connect)(I,{})(w));var X=s(52636),$=s(75795),G=s(55483),N=s(99163),L=s(80878),J=s(88268),U=s(16530),H=s(57954),Q=s(12289),z=s(40794),W=s(11331),K=s(73861);const Y={emptyState:{backgroundColor:M.ZP.value,display:"flex",justifyContent:"center",paddingTop:W.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:K.ZP.value},infoDescription:{color:Q.ZP.value,fontSize:z.ZP.value}};class ee extends f().Component{constructor(e){super(e),this.state={columns:[],rows:[]},this.initDatum=()=>{const{isAllSelected:e,query:t,report:s,selectedItems:o,intl:i}=this.props;if(!t||!s)return;const n=_(t.group_by),c=this.getGroupByTagKey(),p=c?[{title:i.formatMessage(a.Z.TagNames)},{title:i.formatMessage(a.Z.MonthOverMonthChange)},{orderBy:"cost",title:i.formatMessage(a.Z.Cost),transforms:[$.sortable]},{title:""}]:[{orderBy:n,title:i.formatMessage(a.Z.DetailsResourceNames,{value:n}),transforms:[$.sortable]},{title:i.formatMessage(a.Z.MonthOverMonthChange)},{orderBy:"cost",title:i.formatMessage(a.Z.Cost),transforms:[$.sortable]},{title:""}],d=[];(0,B.c)({report:s,idKey:c||n}).map(((s,r)=>{const i=s&&null!==s.label?s.label:"",a=this.getMonthOverMonthCost(s,r),p=this.getTotalCost(s,r),h=this.getActions(s);let u=f().createElement(U.Link,{to:(0,J.T)({basePath:H.Hb.gcpDetailsBreakdown,label:i.toString(),description:s.id,groupBy:c?`${l.P}${c}`:n,query:t})},i);const m=!(i===`no-${n}`||i===`no-${c}`);m||(u=i);const g=s.id&&s.id!==s.label?f().createElement("div",{style:Y.infoDescription},s.id):null;d.push({cells:[{title:f().createElement("div",null,u,g)},{title:f().createElement("div",null,a)},{title:f().createElement("div",null,p)},{title:f().createElement("div",null,h)}],disableSelection:!m,isOpen:!1,item:s,selected:e||o&&void 0!==o.find((e=>e.id===s.id))})}));const h=[{heightAuto:!0,cells:[{props:{colSpan:5},title:f().createElement(r.Bullseye,null,f().createElement("div",{style:{textAlign:"center"}},f().createElement(r.Spinner,{size:"xl"})))}]}];this.setState({columns:p,loadingRows:h,rows:d,sortBy:{}})},this.getActions=e=>{const{groupBy:t,query:s}=this.props;return f().createElement(L.e,{groupBy:t,item:e,query:s,reportPathsType:"gcp"})},this.getEmptyState=()=>{const{query:e,intl:t}=this.props;for(const t of Object.values(e.filter_by))if("*"!==t)return f().createElement(G.c,{filter:t,showMargin:!1});return f().createElement(r.EmptyState,null,f().createElement(r.EmptyStateIcon,{icon:X.Xk}),f().createElement(r.EmptyStateBody,null,t.formatMessage(a.Z.DetailsEmptyState)))},this.getGroupByTagKey=()=>{const{query:e}=this.props;let t;for(const s of Object.keys(e.group_by)){const e=s.indexOf(l.P);if(-1!==e){t=s.substring(e+l.P.length);break}}return t},this.getMonthOverMonthCost=(e,t)=>{const{intl:s}=this.props,r=(0,k.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),o=null!==e.delta_percent?Math.abs(e.delta_percent).toFixed(2):0,i=!(0===o||"0.00"===o),l=null!==e.delta_percent;let n;return i&&(n="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(n+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(n+=" increase")),l?f().createElement("div",{className:"monthOverMonthOverride"},f().createElement("div",{className:n,key:`month-over-month-cost-${t}`},i?s.formatMessage(a.Z.Percent,{value:o}):f().createElement(N.L,null),Boolean(i&&null!==e.delta_percent&&e.delta_value>0)&&f().createElement("span",{className:"fa fa-sort-up",style:Y.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(i&&null!==e.delta_percent&&e.delta_value<0)&&f().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},Y.infoArrow),Y.infoArrowDesc),key:`month-over-month-icon-${t}`})),f().createElement("div",{style:Y.infoDescription,key:`month-over-month-info-${t}`},(0,F.Y)(r))):(0,F.Tf)()},this.getSortBy=()=>{const{query:e}=this.props,{columns:t}=this.state;let s=-1,r=$.SortByDirection.asc;for(const o of Object.keys(e.order_by)){let i=0;for(const l of t){if(l.orderBy===o){r="asc"===e.order_by[o]?$.SortByDirection.asc:$.SortByDirection.desc,s=i+1;break}i++}}return s>-1?{index:s,direction:r}:{}},this.getTotalCost=(e,t)=>{const{report:s,intl:r}=this.props,o=s&&s.meta&&s.meta.total&&s.meta.total.cost&&s.meta.total.cost.total?s.meta.total.cost.total.value:0,i=0===o?o.toFixed(2):(e.cost.total.value/o*100).toFixed(2);return f().createElement(f().Fragment,null,(0,k.xG)(e.cost.total.value,e.cost.total.units),f().createElement("div",{style:Y.infoDescription,key:`total-cost-${t}`},r.formatMessage(a.Z.PercentOfCost,{value:i})))},this.handleOnSelect=(e,t,s)=>{const{onSelected:r}=this.props;let o,i=[];-1===s?o=this.state.rows.map((e=>(e.selected=t,e))):(o=[...this.state.rows],o[s].selected=t,i=[o[s].item]),this.setState({rows:o},(()=>{r&&r(i,t)}))},this.handleOnSort=(e,t,s)=>{const{onSort:r}=this.props,{columns:o}=this.state;r&&r(o[t-1].orderBy,s===$.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{query:t,report:s,selectedItems:r}=this.props,i=s&&s.data?JSON.stringify(s.data):"",l=e.report&&e.report.data?JSON.stringify(e.report.data):"";(0,o.pm)(e.query)===(0,o.pm)(t)&&l===i&&e.selectedItems===r||this.initDatum()}render(){const{intl:e,isLoading:t}=this.props,{columns:s,loadingRows:r,rows:o}=this.state;return f().createElement(f().Fragment,null,f().createElement($.Table,{"aria-label":e.formatMessage(a.Z.GCPDetailsTableAriaLabel),canSelectAll:!1,cells:s,className:"tableOverride",rows:t?r:o,sortBy:this.getSortBy(),onSelect:t?void 0:this.handleOnSelect,onSort:this.handleOnSort,gridBreakPoint:"grid-2xl"},f().createElement($.TableHeader,null),f().createElement($.TableBody,null)),Boolean(0===o.length)&&f().createElement("div",{style:Y.emptyState},this.getEmptyState()))}}const te=(0,S.ZP)(ee);var se=s(8650),re=s(28631),oe=s(19853);const ie="tag",le="gcp";class ae extends f().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,s=[{name:e.formatMessage(a.Z.FilterByValues,{value:"account"}),key:"account"},{name:e.formatMessage(a.Z.FilterByValues,{value:"project"}),key:"project"},{name:e.formatMessage(a.Z.FilterByValues,{value:"service"}),key:"service"},{name:e.formatMessage(a.Z.FilterByValues,{value:"region"}),key:"region"}];return t&&t.data&&t.data.length>0&&s.push({name:e.formatMessage(a.Z.FilterByValues,{value:"tag"}),key:l.up}),s}}componentDidMount(){const{fetchTag:e,queryString:t}=this.props;e(le,ie,t),this.setState({categoryOptions:this.getCategoryOptions()})}componentDidUpdate(e){const{fetchTag:t,query:s,queryString:r,tagReport:o}=this.props;s&&!(0,oe.X)(s,e.query)&&t(le,ie,r),(0,oe.X)(o,e.tagReport)||this.setState({categoryOptions:this.getCategoryOptions()})}render(){const{groupBy:e,isAllSelected:t,isBulkSelectDisabled:s,isExportDisabled:r,itemsPerPage:o,itemsTotal:i,onBulkSelected:l,onExportClicked:a,onFilterAdded:n,onFilterRemoved:c,pagination:p,query:d,selectedItems:h,tagReport:u}=this.props,{categoryOptions:m}=this.state;return f().createElement(se.k,{categoryOptions:m,groupBy:e,isAllSelected:t,isBulkSelectDisabled:s,isExportDisabled:r,itemsPerPage:o,itemsTotal:i,onBulkSelected:l,onExportClicked:a,onFilterAdded:n,onFilterRemoved:c,pagination:p,query:d,resourcePathsType:"gcp",selectedItems:h,showBulkSelect:!0,showExport:!0,showFilter:!0,tagReport:u})}}const ne=(0,b.X1)(((e,t)=>{const s=(0,o.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1}});return{queryString:s,tagReport:re.ux.selectTag(e,le,ie,s),tagReportFetchStatus:re.ux.selectTagFetchStatus(e,le,ie,s)}})),ce={fetchTag:re.xr.Xt},pe=(0,v.connect)(ne,ce)(ae),de=(0,S.ZP)(pe);var he=s(32412);const ue={gcpDetails:{minHeight:"100%"},content:{paddingBottom:q.ZP.value,paddingTop:q.ZP.value},paginationContainer:{marginLeft:q.ZP.value,marginRight:q.ZP.value},pagination:{backgroundColor:M.ZP.value,padding:he.ZP.value},tableContainer:{marginLeft:q.ZP.value,marginRight:q.ZP.value}},me={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:{},group_by:{account:"*"},order_by:{cost:"desc"}},ge="cost",ye="gcp";class fe extends f().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,s=_(e.group_by),r=(0,u.qV)(e);return(0,B.c)({report:t,idKey:r||s})},this.getExportModal=e=>{const{isAllSelected:t,isExportModalOpen:s,selectedItems:r}=this.state,{query:o,report:i}=this.props,a=_(o.group_by),n=(0,u.qV)(o),c=i&&i.meta?i.meta.count:0,p=[];return r.map((e=>{e.label!==`no-${a}`&&e.label!==`no-${n}`&&p.push(e)})),f().createElement(h.X,{isAllItems:(t||r.length===c)&&e.length>0,groupBy:n?`${l.P}${n}`:a,isOpen:s,items:p,onClose:this.handleExportModalClose,query:o,reportPathsType:ye})},this.getPagination=(e=!1)=>{const{report:t}=this.props,s=t&&t.meta?t.meta.count:0,o=t&&t.meta&&t.meta.filter&&t.meta.filter.limit?t.meta.filter.limit:me.filter.limit,i=(t&&t.meta&&t.meta.filter&&t.meta.filter.offset?t.meta.filter.offset:me.filter.offset)/o+1;return f().createElement(r.Pagination,{isCompact:!e,itemCount:s,onPerPageSelect:this.handlePerPageSelect,onSetPage:this.handleSetPage,page:i,perPage:o,variant:e?r.PaginationVariant.bottom:r.PaginationVariant.top,widgetId:"`pagination${isBottom ? '-bottom' : ''}`"})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:s}=this.props,{isAllSelected:r,selectedItems:o}=this.state,i=_(e.group_by),a=(0,u.qV)(e);return f().createElement(te,{groupBy:a?`${l.P}${a}`:i,isAllSelected:r,isLoading:1===s,onSelected:this.handleSelected,onSort:this.handleSort,query:e,report:t,selectedItems:o})},this.getToolbar=e=>{const{query:t,report:s}=this.props,{isAllSelected:r,selectedItems:o}=this.state,i=_(t.group_by),a=(0,u.qV)(t),n=s&&s.meta?s.meta.count:0;return f().createElement(de,{groupBy:a?`${l.P}${a}`:i,isAllSelected:r,isExportDisabled:0===e.length||!r&&0===o.length,itemsPerPage:e.length,itemsTotal:n,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:this.handleFilterAdded,onFilterRemoved:this.handleFilterRemoved,pagination:this.getPagination(),query:t,selectedItems:o})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleFilterAdded=(e,t)=>{const{history:s,query:r}=this.props,o=(0,g.W)(r,e,t);s.replace(this.getRouteForQuery(o,!0))},this.handleFilterRemoved=(e,t)=>{const{history:s,query:r}=this.props,o=(0,g.U)(r,e,t);s.replace(this.getRouteForQuery(o,!0))},this.handleGroupByClick=e=>{const{history:t,query:s}=this.props,r=e,o=Object.assign(Object.assign({},JSON.parse(JSON.stringify(s))),{group_by:{[r]:"*"},order_by:{cost:"desc"}});t.replace(this.getRouteForQuery(o,!0)),this.setState({isAllSelected:!1,selectedItems:[]})},this.handlePerPageSelect=(e,t)=>{const{history:s,query:r}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(r)));o.filter=Object.assign(Object.assign({},r.filter),{limit:t});const i=this.getRouteForQuery(o,!0);s.replace(i)},this.handleSelected=(e,t=!1)=>{const{isAllSelected:s,selectedItems:r}=this.state;let o=[...s?this.getComputedItems():r];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.handleSetPage=(e,t)=>{const{history:s,query:r,report:o}=this.props,i=o&&o.meta&&o.meta.filter&&o.meta.filter.limit?o.meta.filter.limit:me.filter.limit,l=t*i-i,a=Object.assign({},JSON.parse(JSON.stringify(r)));a.filter=Object.assign(Object.assign({},r.filter),{offset:l});const n=this.getRouteForQuery(a);s.replace(n)},this.handleSort=(e,t)=>{const{history:s,query:r}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(r)));o.order_by={},o.order_by[e]=t?"asc":"desc";const i=this.getRouteForQuery(o);s.replace(i)},this.updateReport=()=>{const{query:e,location:t,fetchReport:s,history:r,queryString:o}=this.props;t.search?s(ye,ge,o):r.replace(this.getRouteForQuery({filter_by:e?e.filter_by:void 0,group_by:e?e.group_by:void 0,order_by:{cost:"desc"}}))},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleFilterAdded=this.handleFilterAdded.bind(this),this.handleFilterRemoved=this.handleFilterRemoved.bind(this),this.handlePerPageSelect=this.handlePerPageSelect.bind(this),this.handleSelected=this.handleSelected.bind(this),this.handleSetPage=this.handleSetPage.bind(this),this.handleSort=this.handleSort.bind(this)}componentDidMount(){const{resetState:e}=this.props;e(),this.updateReport()}componentDidUpdate(e,t){const{location:s,report:r,reportError:o,queryString:i}=this.props,{selectedItems:l}=this.state,a=e.queryString!==i,n=!r&&!o,c=!s.search,p=t.selectedItems!==l;(a||n||c||p)&&this.updateReport()}getRouteForQuery(e,t=!1){const{history:s}=this.props;return t&&(e.filter=Object.assign(Object.assign({},e.filter),{offset:me.filter.offset})),`${s.location.pathname}?${(0,o.IV)(e)}`}render(){const{providers:e,providersFetchStatus:t,query:s,report:r,reportError:o,reportFetchStatus:i,intl:l}=this.props,h=_(s.group_by),u=this.getComputedItems(),g=l.formatMessage(a.Z.GCPDetailsTitle);if(o)return f().createElement(d.Z,{title:g});if(1===t&&1===i)return f().createElement(n.Z,{title:g});if(2===t&&2===i){if(e&&e.meta&&0===e.meta.count&&2===t)return f().createElement(p.Z,{providerType:"gcp",title:g});if(!(0,m.g8)(e))return f().createElement(c.Z,{title:g})}return f().createElement("div",{style:ue.gcpDetails},f().createElement(V,{groupBy:h,onGroupByClicked:this.handleGroupByClick,report:r}),f().createElement("div",{style:ue.content},this.getToolbar(u),this.getExportModal(u),1===i?f().createElement(n.Z,null):f().createElement(f().Fragment,null,f().createElement("div",{style:ue.tableContainer},this.getTable()),f().createElement("div",{style:ue.paginationContainer},f().createElement("div",{style:ue.pagination},this.getPagination(!0))))))}}const Se=(0,b.X1)(((e,t)=>{const s=(0,o.mB)(location.search),r={delta:"cost",filter:Object.assign(Object.assign({},me.filter),s.filter),filter_by:s.filter_by||me.filter_by,group_by:s.group_by||me.group_by,order_by:s.order_by||me.order_by},l=(0,o.pm)(r),a=P.ZV.selectReport(e,ye,ge,l),n=P.ZV.selectReportError(e,ye,ge,l),c=P.ZV.selectReportFetchStatus(e,ye,ge,l),p=(0,i.H)(E.U6);return{providers:E.aX.selectProviders(e,"gcp",p),providersFetchStatus:E.aX.selectProvidersFetchStatus(e,"gcp",p),query:r,queryString:l,report:a,reportError:n,reportFetchStatus:c}})),ve={fetchReport:P.nx.fetchReport,resetState:O.Aw.oA},be=(0,S.ZP)((0,v.connect)(Se,ve)(fe))}}]);
//# sourceMappingURL=76bf7f0d3cc03396032b.bundle.js.map