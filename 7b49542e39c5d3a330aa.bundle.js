"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[403],{32185:(e,t,s)=>{s.r(t),s.d(t,{default:()=>M});var r=s(37762),o=s(86208),l=s(45997),i=s(93952),a=s(19078),n=s(23246),c=s(97522),p=s.n(c),d=s(74806),h=s(43476),u=s(57954),g=s(94377),m=s(45235),y=s(42581),f=s(44696),S=s(30315);const v=(0,g.X1)(((e,t)=>({selectWidgets:S.eo.selectWidgets(e),widgets:S.eo.selectCurrentWidgets(e)}))),b=(0,d.ZP)((0,h.connect)(v,{})(f.X));var E=s(45572),P=s(82086);const _=(0,g.X1)(((e,t)=>({selectWidgets:P.hH.selectWidgets(e),widgets:P.hH.selectCurrentWidgets(e)}))),O=(0,d.ZP)((0,h.connect)(_,{})(E.f)),B=u.Hb.gcpDetails,Z="cost",C="gcp",F=(0,g.X1)(((e,t)=>{const s=(0,r.mB)(location.search),a=(0,n.VL)(s),c=(0,n.pe)(s),d={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign({},s&&s.filter_by&&s.filter_by),a&&{[a]:void 0}),group_by:Object.assign({},a&&{[a]:c})},h=(0,r.pm)(d),u=y.ZV.selectReport(e,C,Z,h),g=y.ZV.selectReportError(e,C,Z,h),f=y.ZV.selectReportFetchStatus(e,C,Z,h),S=(0,o.H)(m.U6),v=m.aX.selectProviders(e,"gcp",S),E=m.aX.selectProvidersFetchStatus(e,"gcp",S);return{costOverviewComponent:p().createElement(b,{groupBy:a,query:s,report:u}),description:s[l.eG],detailsURL:B,emptyStateTitle:t.intl.formatMessage(i.Z.GCPDetailsTitle),groupBy:a,groupByValue:c,historicalDataComponent:p().createElement(O,null),providers:v,providersFetchStatus:E,providerType:"gcp",query:s,queryString:h,report:u,reportError:g,reportFetchStatus:f,reportType:Z,reportPathsType:C,tagReportPathsType:"gcp",title:s[l.yG]?s[l.yG]:c}})),x={fetchReport:y.nx.fetchReport},M=(0,d.ZP)((0,h.connect)(F,x)(a.Z))},27957:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Ee});var r=s(78927),o=s(37762),l=s(86208),i=s(45997),a=s(93952),n=s(73466),c=s(16679),p=s(13883),d=s(81787),h=s(46774),u=s(23246),g=s(94329),m=s(8091),y=s(97522),f=s.n(y),S=s(74806),v=s(43476),b=s(94377),E=s(45235),P=s(42581),_=s(26018);function O(e={}){return e.account?"account":e.gcp_project?"gcp_project":e.instance_type?"instance_type":e.project?"project":e.region?"region":e.service?"service":"date"}var B=s(31447),Z=s(51381),C=s(2088),F=s(33307),x=s(41251),M=s(99291),T=s(49382),q=s(33605),R=s(54881),k=s(98499),A=s(48196);const D={costValue:{marginTop:k.ZP.var,marginBottom:0},costLabelUnit:{fontSize:R.ZP.value,color:q.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:T.ZP.var,padding:k.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},title:{paddingBottom:A.ZP.var}},j={delta:"cost",filter:{time_scope_units:"month",time_scope_value:-1,resolution:"monthly"}},w=[{label:"account",value:"account"},{label:"gcp_project",value:"gcp_project"},{label:"service",value:"service"},{label:"region",value:"region"}];class I extends f().Component{render(){const{groupBy:e,onGroupBySelected:t,providers:s,providersError:o,report:l,intl:i}=this.props,n=l&&!o&&s&&s.meta&&s.meta.count>0,c=l&&l.meta&&l.meta.total&&l.meta.total.cost&&l.meta.total.cost.total;return f().createElement("header",{style:D.header},f().createElement("div",{style:D.headerContent},f().createElement(r.Title,{headingLevel:"h1",style:D.title,size:r.TitleSizes["2xl"]},i.formatMessage(a.Z.GCPDetailsTitle)),(0,x.S)()&&f().createElement(Z.F,null)),f().createElement("div",{style:D.headerContent},f().createElement("div",{style:D.headerContentLeft},f().createElement(C.X,{getIdKeyForGroupBy:O,groupBy:e,isDisabled:!n,onSelected:t,options:w,showTags:!0,tagReportPathsType:"gcp"})),Boolean(n)&&f().createElement("div",null,f().createElement(r.Title,{headingLevel:"h2",style:D.costValue,size:r.TitleSizes["4xl"]},(0,M.xG)(c?l.meta.total.cost.total.value:0,c?l.meta.total.cost.total.units:"USD")),f().createElement("div",{style:D.dateTitle},(0,F.J4)()))))}}const V=(0,b.X1)(((e,t)=>{const s=(0,o.pm)(j),r=(0,l.H)(E.U6);return{providers:E.aX.selectProviders(e,"gcp",r),providersError:E.aX.selectProvidersError(e,"gcp",r),providersFetchStatus:E.aX.selectProvidersFetchStatus(e,"gcp",r),queryString:s}})),X=(0,S.ZP)((0,v.connect)(V,{})(I));var $=s(52636),G=s(97838),N=s(55483),L=s(99163),J=s(80878),U=s(88268),H=s(73727),Q=s(57954),z=s(12289),W=s(40794),K=s(11331),Y=s(73861);const ee={emptyState:{backgroundColor:T.ZP.value,display:"flex",justifyContent:"center",paddingTop:K.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:Y.ZP.value},infoDescription:{color:z.ZP.value,fontSize:W.ZP.value}};class te extends f().Component{constructor(e){super(e),this.state={columns:[],rows:[]},this.initDatum=()=>{const{isAllSelected:e,query:t,report:s,selectedItems:o,intl:l}=this.props;if(!t||!s)return;const n=O(t.group_by),c=this.getGroupByTagKey(),p=[],d=(0,B.c)({report:s,idKey:c||n}),h=c?[{title:l.formatMessage(a.Z.TagNames)},{title:l.formatMessage(a.Z.MonthOverMonthChange)},Object.assign({orderBy:"cost",title:l.formatMessage(a.Z.Cost)},d.length&&{transforms:[G.sortable]}),{title:""}]:[Object.assign({orderBy:n,title:l.formatMessage(a.Z.DetailsResourceNames,{value:n})},d.length&&{transforms:[G.sortable]}),{title:l.formatMessage(a.Z.MonthOverMonthChange)},Object.assign({orderBy:"cost",title:l.formatMessage(a.Z.Cost)},d.length&&{transforms:[G.sortable]}),{title:""}];d.map(((s,r)=>{const l=s&&null!==s.label?s.label:"",a=this.getMonthOverMonthCost(s,r),d=this.getTotalCost(s,r),h=this.getActions(s);let u=f().createElement(H.rU,{to:(0,U.T)({basePath:Q.Hb.gcpDetailsBreakdown,label:l.toString(),description:s.id,groupBy:c?`${i.P}${c}`:n,query:t})},l);const g=!(l===`no-${n}`||l===`no-${c}`);g||(u=l);const m=s.id&&s.id!==s.label?f().createElement("div",{style:ee.infoDescription},s.id):null;p.push({cells:[{title:f().createElement("div",null,u,m)},{title:f().createElement("div",null,a)},{title:f().createElement("div",null,d)},{title:f().createElement("div",null,h)}],disableSelection:!g,isOpen:!1,item:s,selected:e||o&&void 0!==o.find((e=>e.id===s.id))})}));const u=[{heightAuto:!0,cells:[{props:{colSpan:5},title:f().createElement(r.Bullseye,null,f().createElement("div",{style:{textAlign:"center"}},f().createElement(r.Spinner,{size:"xl"})))}]}];this.setState({columns:h,loadingRows:u,rows:p,sortBy:{}})},this.getActions=e=>{const{groupBy:t,query:s}=this.props;return f().createElement(J.e,{groupBy:t,item:e,query:s,reportPathsType:"gcp"})},this.getEmptyState=()=>{const{query:e,intl:t}=this.props;for(const t of Object.values(e.filter_by))if("*"!==t)return f().createElement(N.c,{filter:t,showMargin:!1});return f().createElement(r.EmptyState,null,f().createElement(r.EmptyStateIcon,{icon:$.Xk}),f().createElement(r.EmptyStateBody,null,t.formatMessage(a.Z.DetailsEmptyState)))},this.getGroupByTagKey=()=>{const{query:e}=this.props;let t;for(const s of Object.keys(e.group_by)){const e=s.indexOf(i.P);if(-1!==e){t=s.substring(e+i.P.length);break}}return t},this.getMonthOverMonthCost=(e,t)=>{const{intl:s}=this.props,r=(0,M.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),o=null!==e.delta_percent?(0,M.rl)(Math.abs(e.delta_percent)):0,l=!(0===o||"0.00"===o),i=null!==e.delta_percent;let n;return l&&(n="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(n+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(n+=" increase")),i?f().createElement("div",{className:"monthOverMonthOverride"},f().createElement("div",{className:n,key:`month-over-month-cost-${t}`},l?s.formatMessage(a.Z.Percent,{value:o}):f().createElement(L.L,null),Boolean(l&&null!==e.delta_percent&&e.delta_value>0)&&f().createElement("span",{className:"fa fa-sort-up",style:ee.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(l&&null!==e.delta_percent&&e.delta_value<0)&&f().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},ee.infoArrow),ee.infoArrowDesc),key:`month-over-month-icon-${t}`})),f().createElement("div",{style:ee.infoDescription,key:`month-over-month-info-${t}`},(0,F.Y)(r))):(0,F.Tf)()},this.getSortBy=()=>{const{query:e}=this.props,{columns:t}=this.state;let s=-1,r=G.SortByDirection.asc;for(const o of Object.keys(e.order_by)){let l=0;for(const i of t){if(i.orderBy===o){r="asc"===e.order_by[o]?G.SortByDirection.asc:G.SortByDirection.desc,s=l+1;break}l++}}return s>-1?{index:s,direction:r}:{}},this.getTotalCost=(e,t)=>{const{report:s,intl:r}=this.props,o=s&&s.meta&&s.meta.total&&s.meta.total.cost&&s.meta.total.cost.total?s.meta.total.cost.total.value:0,l=0===o?o.toFixed(2):(e.cost.total.value/o*100).toFixed(2);return f().createElement(f().Fragment,null,(0,M.xG)(e.cost.total.value,e.cost.total.units),f().createElement("div",{style:ee.infoDescription,key:`total-cost-${t}`},r.formatMessage(a.Z.PercentOfCost,{value:l})))},this.handleOnSelect=(e,t,s)=>{const{onSelected:r}=this.props;let o,l=[];-1===s?o=this.state.rows.map((e=>(e.selected=t,e))):(o=[...this.state.rows],o[s].selected=t,l=[o[s].item]),this.setState({rows:o},(()=>{r&&r(l,t)}))},this.handleOnSort=(e,t,s)=>{const{onSort:r}=this.props,{columns:o}=this.state;r&&r(o[t-1].orderBy,s===G.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{query:t,report:s,selectedItems:r}=this.props,l=s&&s.data?JSON.stringify(s.data):"",i=e.report&&e.report.data?JSON.stringify(e.report.data):"";(0,o.pm)(e.query)===(0,o.pm)(t)&&i===l&&e.selectedItems===r||this.initDatum()}render(){const{intl:e,isLoading:t}=this.props,{columns:s,loadingRows:r,rows:o}=this.state;return f().createElement(f().Fragment,null,f().createElement(G.Table,{"aria-label":e.formatMessage(a.Z.GCPDetailsTableAriaLabel),canSelectAll:!1,cells:s,className:"tableOverride",rows:t?r:o,sortBy:this.getSortBy(),onSelect:t?void 0:this.handleOnSelect,onSort:this.handleOnSort,gridBreakPoint:"grid-2xl"},f().createElement(G.TableHeader,null),f().createElement(G.TableBody,null)),Boolean(0===o.length)&&f().createElement("div",{style:ee.emptyState},this.getEmptyState()))}}const se=(0,S.ZP)(te);var re=s(8650),oe=s(28631),le=s(19853);const ie="tag",ae="gcp";class ne extends f().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,s=[{name:e.formatMessage(a.Z.FilterByValues,{value:"account"}),key:"account"},{name:e.formatMessage(a.Z.FilterByValues,{value:"gcp_project"}),key:"gcp_project"},{name:e.formatMessage(a.Z.FilterByValues,{value:"service"}),key:"service"},{name:e.formatMessage(a.Z.FilterByValues,{value:"region"}),key:"region"}];return t&&t.data&&t.data.length>0&&s.push({name:e.formatMessage(a.Z.FilterByValues,{value:"tag"}),key:i.up}),s}}componentDidMount(){const{fetchTag:e,queryString:t}=this.props;e(ae,ie,t),this.setState({categoryOptions:this.getCategoryOptions()})}componentDidUpdate(e){const{fetchTag:t,query:s,queryString:r,tagReport:o}=this.props;s&&!(0,le.X)(s,e.query)&&t(ae,ie,r),(0,le.X)(o,e.tagReport)||this.setState({categoryOptions:this.getCategoryOptions()})}render(){const{groupBy:e,isAllSelected:t,isBulkSelectDisabled:s,isExportDisabled:r,itemsPerPage:o,itemsTotal:l,onBulkSelected:i,onExportClicked:a,onFilterAdded:n,onFilterRemoved:c,pagination:p,query:d,selectedItems:h,tagReport:u}=this.props,{categoryOptions:g}=this.state;return f().createElement(re.k,{categoryOptions:g,groupBy:e,isAllSelected:t,isBulkSelectDisabled:s,isExportDisabled:r,itemsPerPage:o,itemsTotal:l,onBulkSelected:i,onExportClicked:a,onFilterAdded:n,onFilterRemoved:c,pagination:p,query:d,resourcePathsType:"gcp",selectedItems:h,showBulkSelect:!0,showExport:!0,showFilter:!0,tagReport:u})}}const ce=(0,b.X1)(((e,t)=>{const s=(0,o.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1}});return{queryString:s,tagReport:oe.ux.selectTag(e,ae,ie,s),tagReportFetchStatus:oe.ux.selectTagFetchStatus(e,ae,ie,s)}})),pe={fetchTag:oe.xr.Xt},de=(0,v.connect)(ce,pe)(ne),he=(0,S.ZP)(de);var ue=s(32412);const ge={gcpDetails:{minHeight:"100%"},content:{paddingBottom:k.ZP.value,paddingTop:k.ZP.value},paginationContainer:{marginLeft:k.ZP.value,marginRight:k.ZP.value},pagination:{backgroundColor:T.ZP.value,padding:ue.ZP.value},tableContainer:{marginLeft:k.ZP.value,marginRight:k.ZP.value}},me={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:{},group_by:{account:"*"},order_by:{cost:"desc"}},ye="cost",fe="gcp";class Se extends f().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,s=O(e.group_by),r=(0,u.qV)(e);return(0,B.c)({report:t,idKey:r||s})},this.getExportModal=e=>{const{isAllSelected:t,isExportModalOpen:s,selectedItems:r}=this.state,{query:o,report:l}=this.props,a=O(o.group_by),n=(0,u.qV)(o),c=l&&l.meta?l.meta.count:0,p=[];return r.map((e=>{e.label!==`no-${a}`&&e.label!==`no-${n}`&&p.push(e)})),f().createElement(h.X,{isAllItems:(t||r.length===c)&&e.length>0,groupBy:n?`${i.P}${n}`:a,isOpen:s,items:p,onClose:this.handleExportModalClose,query:o,reportPathsType:fe})},this.getPagination=(e=!1)=>{const{report:t}=this.props,s=t&&t.meta?t.meta.count:0,o=t&&t.meta&&t.meta.filter&&t.meta.filter.limit?t.meta.filter.limit:me.filter.limit,l=(t&&t.meta&&t.meta.filter&&t.meta.filter.offset?t.meta.filter.offset:me.filter.offset)/o+1;return f().createElement(r.Pagination,{isCompact:!e,itemCount:s,onPerPageSelect:this.handlePerPageSelect,onSetPage:this.handleSetPage,page:l,perPage:o,variant:e?r.PaginationVariant.bottom:r.PaginationVariant.top,widgetId:"`pagination${isBottom ? '-bottom' : ''}`"})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:s}=this.props,{isAllSelected:r,selectedItems:o}=this.state,l=O(e.group_by),a=(0,u.qV)(e);return f().createElement(se,{groupBy:a?`${i.P}${a}`:l,isAllSelected:r,isLoading:1===s,onSelected:this.handleSelected,onSort:this.handleSort,query:e,report:t,selectedItems:o})},this.getToolbar=e=>{const{query:t,report:s}=this.props,{isAllSelected:r,selectedItems:o}=this.state,l=O(t.group_by),a=(0,u.qV)(t),n=s&&s.meta?s.meta.count:0;return f().createElement(he,{groupBy:a?`${i.P}${a}`:l,isAllSelected:r,isExportDisabled:0===e.length||!r&&0===o.length,itemsPerPage:e.length,itemsTotal:n,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:this.handleFilterAdded,onFilterRemoved:this.handleFilterRemoved,pagination:this.getPagination(),query:t,selectedItems:o})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleFilterAdded=(e,t)=>{const{history:s,query:r}=this.props,o=(0,m.W)(r,e,t);s.replace(this.getRouteForQuery(o,!0))},this.handleFilterRemoved=(e,t)=>{const{history:s,query:r}=this.props,o=(0,m.U)(r,e,t);s.replace(this.getRouteForQuery(o,!0))},this.handleGroupBySelected=e=>{const{history:t,query:s}=this.props,r=e,o=Object.assign(Object.assign({},JSON.parse(JSON.stringify(s))),{group_by:{[r]:"*"},order_by:{cost:"desc"}});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{t.replace(this.getRouteForQuery(o,!0))}))},this.handlePerPageSelect=(e,t)=>{const{history:s,query:r}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(r)));o.filter=Object.assign(Object.assign({},r.filter),{limit:t});const l=this.getRouteForQuery(o,!0);s.replace(l)},this.handleSelected=(e,t=!1)=>{const{isAllSelected:s,selectedItems:r}=this.state;let o=[...s?this.getComputedItems():r];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.handleSetPage=(e,t)=>{const{history:s,query:r,report:o}=this.props,l=o&&o.meta&&o.meta.filter&&o.meta.filter.limit?o.meta.filter.limit:me.filter.limit,i=t*l-l,a=Object.assign({},JSON.parse(JSON.stringify(r)));a.filter=Object.assign(Object.assign({},r.filter),{offset:i});const n=this.getRouteForQuery(a);s.replace(n)},this.handleSort=(e,t)=>{const{history:s,query:r}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(r)));o.order_by={},o.order_by[e]=t?"asc":"desc";const l=this.getRouteForQuery(o);s.replace(l)},this.updateReport=()=>{const{query:e,location:t,fetchReport:s,history:r,queryString:o}=this.props;t.search?s(fe,ye,o):r.replace(this.getRouteForQuery({filter_by:e?e.filter_by:void 0,group_by:e?e.group_by:void 0,order_by:{cost:"desc"}}))},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleFilterAdded=this.handleFilterAdded.bind(this),this.handleFilterRemoved=this.handleFilterRemoved.bind(this),this.handlePerPageSelect=this.handlePerPageSelect.bind(this),this.handleSelected=this.handleSelected.bind(this),this.handleSetPage=this.handleSetPage.bind(this),this.handleSort=this.handleSort.bind(this)}componentDidMount(){const{resetState:e}=this.props;e(),this.updateReport()}componentDidUpdate(e,t){const{location:s,report:r,reportError:o,queryString:l}=this.props,{selectedItems:i}=this.state,a=e.queryString!==l,n=!r&&!o,c=!s.search,p=t.selectedItems!==i;(a||n||c||p)&&this.updateReport()}getRouteForQuery(e,t=!1){const{history:s}=this.props;return t&&(e.filter=Object.assign(Object.assign({},e.filter),{offset:me.filter.offset})),`${s.location.pathname}?${(0,o.IV)(e)}`}render(){const{providers:e,providersFetchStatus:t,query:s,report:r,reportError:o,reportFetchStatus:l,intl:i}=this.props,h=O(s.group_by),u=this.getComputedItems(),m=i.formatMessage(a.Z.GCPDetailsTitle);if(o)return f().createElement(d.Z,{title:m});if(1===t&&1===l)return f().createElement(n.Z,{title:m});if(2===t&&2===l){if(e&&e.meta&&0===e.meta.count&&2===t)return f().createElement(p.Z,{providerType:"gcp",title:m});if(!(0,g.g8)(e))return f().createElement(c.Z,{title:m})}return f().createElement("div",{style:ge.gcpDetails},f().createElement(X,{groupBy:h,onGroupBySelected:this.handleGroupBySelected,report:r}),f().createElement("div",{style:ge.content},this.getToolbar(u),this.getExportModal(u),1===l?f().createElement(n.Z,null):f().createElement(f().Fragment,null,f().createElement("div",{style:ge.tableContainer},this.getTable()),f().createElement("div",{style:ge.paginationContainer},f().createElement("div",{style:ge.pagination},this.getPagination(!0))))))}}const ve=(0,b.X1)(((e,t)=>{const s=(0,o.mB)(location.search),r={delta:"cost",filter:Object.assign(Object.assign({},me.filter),s.filter),filter_by:s.filter_by||me.filter_by,group_by:s.group_by||me.group_by,order_by:s.order_by||me.order_by},i=(0,o.pm)(r),a=P.ZV.selectReport(e,fe,ye,i),n=P.ZV.selectReportError(e,fe,ye,i),c=P.ZV.selectReportFetchStatus(e,fe,ye,i),p=(0,l.H)(E.U6);return{providers:E.aX.selectProviders(e,"gcp",p),providersFetchStatus:E.aX.selectProvidersFetchStatus(e,"gcp",p),query:r,queryString:i,report:a,reportError:n,reportFetchStatus:c}})),be={fetchReport:P.nx.fetchReport,resetState:_.Aw.oA},Ee=(0,S.ZP)((0,v.connect)(ve,be)(Se))}}]);
//# sourceMappingURL=7b49542e39c5d3a330aa.bundle.js.map