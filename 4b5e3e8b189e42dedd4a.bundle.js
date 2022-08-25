"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[403],{91027:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r(36928).Z},32185:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T});var s=r(37762),o=r(86208),l=r(45997),a=r(93952),i=r(91027),n=r(23246),c=r(94329),p=r(92950),d=r.n(p),h=r(74806),u=r(98147),g=r(28259),m=r(94377),y=r(45235),f=r(42581),S=r(6827),v=r(30315);const b=(0,m.X1)(((e,t)=>({selectWidgets:v.eo.selectWidgets(e),widgets:v.eo.selectCurrentWidgets(e)}))),E=(0,h.ZP)((0,u.connect)(b,{})(S.X));var P=r(97518),O=r(82086);const _=(0,m.X1)(((e,t)=>({selectWidgets:O.hH.selectWidgets(e),widgets:O.hH.selectCurrentWidgets(e)}))),B=(0,h.ZP)((0,u.connect)(_,{})(P.f)),Z=g.Hb.gcpDetails,C="cost",F="gcp",x=(0,m.X1)(((e,t)=>{const r=(0,s.mB)(location.search),i=(0,n.VL)(r),p=(0,n.pe)(r),h={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign({},r&&r.filter_by&&r.filter_by),i&&{[i]:void 0}),group_by:Object.assign({},i&&{[i]:p})},u=(0,s.pm)(h),g=f.ZV.selectReport(e,F,C,u),m=f.ZV.selectReportError(e,F,C,u),S=f.ZV.selectReportFetchStatus(e,F,C,u),v=(0,o.H)(y.NT),b=y.aX.selectProviders(e,"all",v),P=y.aX.selectProvidersError(e,"all",v),O=y.aX.selectProvidersFetchStatus(e,"all",v);return{costOverviewComponent:d().createElement(E,{groupBy:i,query:r,report:g}),description:r[l.eG],detailsURL:Z,emptyStateTitle:t.intl.formatMessage(a.Z.gcpDetailsTitle),groupBy:i,groupByValue:p,historicalDataComponent:d().createElement(B,null),providers:(0,c.BV)(b,"gcp"),providersError:P,providersFetchStatus:O,providerType:"gcp",query:r,queryString:u,report:g,reportError:m,reportFetchStatus:S,reportType:C,reportPathsType:F,tagReportPathsType:"gcp",title:r[l.yG]?r[l.yG]:p}})),R={fetchReport:f.nx.fetchReport},T=(0,h.ZP)((0,u.connect)(x,R)(i.Z))},27957:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Ee});var s=r(11930),o=r(37762),l=r(86208),a=r(45997),i=r(93952),n=r(73466),c=r(16679),p=r(32605),d=r(81787),h=r(46774),u=r(23246),g=r(94329),m=r(8091),y=r(92950),f=r.n(y),S=r(74806),v=r(98147),b=r(94377),E=r(45235),P=r(42581);function O(e={}){return e.account?"account":e.gcp_project?"gcp_project":e.project?"project":e.region?"region":e.service?"service":"date"}var _=r(31447),B=r(36613),Z=r(91616),C=r(2088),F=r(21084),x=r(33307),R=r(99291),T=r(49382),M=r(33605),q=r(54881),k=r(98499),j=r(48196);const A={costValue:{marginTop:k.ZP.var,marginBottom:0},costLabelUnit:{fontSize:q.ZP.value,color:M.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:T.ZP.var,padding:k.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},title:{paddingBottom:j.ZP.var}},D={delta:"cost",filter:{time_scope_units:"month",time_scope_value:-1,resolution:"monthly"}},w=[{label:"account",value:"account"},{label:"gcp_project",value:"gcp_project"},{label:"service",value:"service"},{label:"region",value:"region"}];class I extends f().Component{render(){const{groupBy:e,isCurrencyFeatureEnabled:t,isExportsFeatureEnabled:r,onGroupBySelected:o,providers:l,providersError:a,report:n,intl:c}=this.props,p=n&&!a&&l&&l.meta&&l.meta.count>0,d=n&&n.meta&&n.meta.total&&n.meta.total.cost&&n.meta.total.cost.total;return f().createElement("header",{style:A.header},f().createElement("div",{style:A.headerContent},f().createElement(s.Title,{headingLevel:"h1",style:A.title,size:s.TitleSizes["2xl"]},c.formatMessage(i.Z.gcpDetailsTitle)),f().createElement("div",{style:A.headerContentRight},t&&f().createElement(Z.F,null),r&&f().createElement(B.b,null))),f().createElement("div",{style:A.headerContent},f().createElement("div",{style:A.headerContentLeft},f().createElement(C.X,{getIdKeyForGroupBy:O,groupBy:e,isDisabled:!p,onSelected:o,options:w,showTags:!0,tagReportPathsType:"gcp"})),Boolean(p)&&f().createElement("div",null,f().createElement(s.Title,{headingLevel:"h2",style:A.costValue,size:s.TitleSizes["4xl"]},(0,R.xG)(d?n.meta.total.cost.total.value:0,d?n.meta.total.cost.total.units:"USD")),f().createElement("div",{style:A.dateTitle},(0,x.J4)()))))}}const V=(0,b.X1)(((e,t)=>{const r=(0,o.pm)(D),s=(0,l.H)(E.NT),a=E.aX.selectProviders(e,"all",s),i=E.aX.selectProvidersError(e,"all",s),n=E.aX.selectProvidersFetchStatus(e,"all",s);return{isCurrencyFeatureEnabled:F.iJ.selectIsCurrencyFeatureEnabled(e),isExportsFeatureEnabled:F.iJ.selectIsExportsFeatureEnabled(e),providers:(0,g.BV)(a,"gcp"),providersError:i,providersFetchStatus:n,queryString:r}})),X=(0,S.ZP)((0,v.connect)(V,{})(I));var N=r(52636),$=r(74793),G=r(93529),J=r(2664),L=r(80878),H=r(88268),Q=r(73727),U=r(28259),z=r(12289),W=r(40794),K=r(11331),Y=r(73861);const ee={emptyState:{backgroundColor:T.ZP.value,display:"flex",justifyContent:"center",paddingTop:K.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:Y.ZP.value},infoDescription:{color:z.ZP.value,fontSize:W.ZP.value}};class te extends f().Component{constructor(e){super(e),this.state={columns:[],rows:[]},this.initDatum=()=>{const{isAllSelected:e,query:t,report:r,selectedItems:o,intl:l}=this.props;if(!t||!r)return;const n=O(t.group_by),c=this.getGroupByTagKey(),p=[],d=(0,_.c)({report:r,idKey:c||n}),h=c?[{title:l.formatMessage(i.Z.tagNames)},{title:l.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",title:l.formatMessage(i.Z.cost)},d.length&&{transforms:[$.sortable]}),{title:""}]:[Object.assign({orderBy:n,title:l.formatMessage(i.Z.detailsResourceNames,{value:n})},d.length&&{transforms:[$.sortable]}),{title:l.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",title:l.formatMessage(i.Z.cost)},d.length&&{transforms:[$.sortable]}),{title:""}];d.map(((r,s)=>{const l=r&&null!==r.label?r.label:"",i=this.getMonthOverMonthCost(r,s),d=this.getTotalCost(r,s),h=this.getActions(r);let u=f().createElement(Q.rU,{to:(0,H.T)({basePath:U.Hb.gcpDetailsBreakdown,label:l.toString(),description:r.id,groupBy:c?`${a.P}${c}`:n,query:t})},l);const g=!(l===`no-${n}`||l===`no-${c}`);g||(u=l);const m=r.id&&r.id!==r.label?f().createElement("div",{style:ee.infoDescription},r.id):null;p.push({cells:[{title:f().createElement("div",null,u,m)},{title:f().createElement("div",null,i)},{title:f().createElement("div",null,d)},{title:f().createElement("div",null,h)}],disableSelection:!g,isOpen:!1,item:r,selected:e||o&&void 0!==o.find((e=>e.id===r.id))})}));const u=[{heightAuto:!0,cells:[{props:{colSpan:5},title:f().createElement(s.Bullseye,null,f().createElement("div",{style:{textAlign:"center"}},f().createElement(s.Spinner,{size:"xl"})))}]}];this.setState({columns:h,loadingRows:u,rows:p,sortBy:{}})},this.getActions=e=>{const{groupBy:t,query:r}=this.props;return f().createElement(L.e,{groupBy:t,item:e,query:r,reportPathsType:"gcp"})},this.getEmptyState=()=>{const{query:e,intl:t}=this.props;for(const t of Object.values(e.filter_by))if("*"!==t)return f().createElement(G.c,{filter:t,showMargin:!1});return f().createElement(s.EmptyState,null,f().createElement(s.EmptyStateIcon,{icon:N.Xk}),f().createElement(s.EmptyStateBody,null,t.formatMessage(i.Z.detailsEmptyState)))},this.getGroupByTagKey=()=>{const{query:e}=this.props;let t;for(const r of Object.keys(e.group_by)){const e=r.indexOf(a.P);if(-1!==e){t=r.substring(e+a.P.length);break}}return t},this.getMonthOverMonthCost=(e,t)=>{const{intl:r}=this.props,s=(0,R.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),o=null!==e.delta_percent?(0,R.rl)(Math.abs(e.delta_percent)):0,l=!(0===o||"0.00"===o),a=null!==e.delta_percent;let n;return l&&(n="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(n+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(n+=" increase")),a?f().createElement("div",{className:"monthOverMonthOverride"},f().createElement("div",{className:n,key:`month-over-month-cost-${t}`},l?r.formatMessage(i.Z.percent,{value:o}):f().createElement(J.L,null),Boolean(l&&null!==e.delta_percent&&e.delta_value>0)&&f().createElement("span",{className:"fa fa-sort-up",style:ee.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(l&&null!==e.delta_percent&&e.delta_value<0)&&f().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},ee.infoArrow),ee.infoArrowDesc),key:`month-over-month-icon-${t}`})),f().createElement("div",{style:ee.infoDescription,key:`month-over-month-info-${t}`},(0,x.Y)(s))):(0,x.Tf)()},this.getSortBy=()=>{const{query:e}=this.props,{columns:t}=this.state;let r=-1,s=$.SortByDirection.asc;for(const o of Object.keys(e.order_by)){let l=0;for(const a of t){if(a.orderBy===o){s="asc"===e.order_by[o]?$.SortByDirection.asc:$.SortByDirection.desc,r=l+1;break}l++}}return r>-1?{index:r,direction:s}:{}},this.getTotalCost=(e,t)=>{const{report:r,intl:s}=this.props,o=r&&r.meta&&r.meta.total&&r.meta.total.cost&&r.meta.total.cost.total?r.meta.total.cost.total.value:0,l=0===o?o.toFixed(2):(e.cost.total.value/o*100).toFixed(2);return f().createElement(f().Fragment,null,(0,R.xG)(e.cost.total.value,e.cost.total.units),f().createElement("div",{style:ee.infoDescription,key:`total-cost-${t}`},s.formatMessage(i.Z.percentOfCost,{value:l})))},this.handleOnSelect=(e,t,r)=>{const{onSelected:s}=this.props;let o,l=[];-1===r?o=this.state.rows.map((e=>(e.selected=t,e))):(o=[...this.state.rows],o[r].selected=t,l=[o[r].item]),this.setState({rows:o},(()=>{s&&s(l,t)}))},this.handleOnSort=(e,t,r)=>{const{onSort:s}=this.props,{columns:o}=this.state;s&&s(o[t-1].orderBy,r===$.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{query:t,report:r,selectedItems:s}=this.props,l=r&&r.data?JSON.stringify(r.data):"",a=e.report&&e.report.data?JSON.stringify(e.report.data):"";(0,o.pm)(e.query)===(0,o.pm)(t)&&a===l&&e.selectedItems===s||this.initDatum()}render(){const{intl:e,isLoading:t}=this.props,{columns:r,loadingRows:s,rows:o}=this.state;return f().createElement(f().Fragment,null,f().createElement($.Table,{"aria-label":e.formatMessage(i.Z.gcpDetailsTableAriaLabel),canSelectAll:!1,cells:r,className:"tableOverride",rows:t?s:o,sortBy:this.getSortBy(),onSelect:t?void 0:this.handleOnSelect,onSort:this.handleOnSort,gridBreakPoint:"grid-2xl"},f().createElement($.TableHeader,null),f().createElement($.TableBody,null)),Boolean(0===o.length)&&f().createElement("div",{style:ee.emptyState},this.getEmptyState()))}}const re=(0,S.ZP)(te);var se=r(36935),oe=r(7917),le=r(19853);const ae="tag",ie="gcp";class ne extends f().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,r=[{name:e.formatMessage(i.Z.filterByValues,{value:"account"}),key:"account"},{name:e.formatMessage(i.Z.filterByValues,{value:"gcp_project"}),key:"gcp_project"},{name:e.formatMessage(i.Z.filterByValues,{value:"service"}),key:"service"},{name:e.formatMessage(i.Z.filterByValues,{value:"region"}),key:"region"}];return t&&t.data&&t.data.length&&r.push({name:e.formatMessage(i.Z.filterByValues,{value:a.up}),key:a.up}),r}}componentDidMount(){const{fetchTag:e,queryString:t,tagReportFetchStatus:r}=this.props;this.setState({categoryOptions:this.getCategoryOptions()},(()=>{1!==r&&e(ie,ae,t)}))}componentDidUpdate(e){const{fetchTag:t,query:r,queryString:s,tagReport:o,tagReportFetchStatus:l}=this.props;(0,le.X)(o,e.tagReport)?r&&!(0,le.X)(r,e.query)&&1!==l&&t(ie,ae,s):this.setState({categoryOptions:this.getCategoryOptions()},(()=>{1!==l&&t(ie,ae,s)}))}render(){const{groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isExportDisabled:s,itemsPerPage:o,itemsTotal:l,onBulkSelected:a,onExportClicked:i,onFilterAdded:n,onFilterRemoved:c,pagination:p,query:d,selectedItems:h,tagReport:u}=this.props,{categoryOptions:g}=this.state;return f().createElement(se.k,{categoryOptions:g,groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isExportDisabled:s,itemsPerPage:o,itemsTotal:l,onBulkSelected:a,onExportClicked:i,onFilterAdded:n,onFilterRemoved:c,pagination:p,query:d,resourcePathsType:"gcp",selectedItems:h,showBulkSelect:!0,showExport:!0,showFilter:!0,tagReport:u,tagReportPathsType:ie})}}const ce=(0,b.X1)(((e,t)=>{const r=(0,o.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3});return{queryString:r,tagReport:oe.ux.selectTag(e,ie,ae,r),tagReportFetchStatus:oe.ux.selectTagFetchStatus(e,ie,ae,r)}})),pe={fetchTag:oe.xr.Xt},de=(0,v.connect)(ce,pe)(ne),he=(0,S.ZP)(de);var ue=r(32412);const ge={gcpDetails:{minHeight:"100%"},content:{paddingBottom:k.ZP.value,paddingTop:k.ZP.value},paginationContainer:{marginLeft:k.ZP.value,marginRight:k.ZP.value},pagination:{backgroundColor:T.ZP.value,padding:ue.ZP.value},tableContainer:{marginLeft:k.ZP.value,marginRight:k.ZP.value}},me={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:{},group_by:{account:"*"},order_by:{cost:"desc"}},ye="cost",fe="gcp";class Se extends f().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,r=O(e.group_by),s=(0,u.qV)(e);return(0,_.c)({report:t,idKey:s||r})},this.getExportModal=e=>{const{isAllSelected:t,isExportModalOpen:r,selectedItems:s}=this.state,{query:o,report:l}=this.props,i=O(o.group_by),n=(0,u.qV)(o),c=l&&l.meta?l.meta.count:0,p=[];return s.map((e=>{e.label!==`no-${i}`&&e.label!==`no-${n}`&&p.push(e)})),f().createElement(h.X,{count:t?c:p.length,isAllItems:(t||s.length===c)&&e.length>0,groupBy:n?`${a.P}${n}`:i,isOpen:r,items:p,onClose:this.handleExportModalClose,query:o,reportPathsType:fe})},this.getPagination=(e=!1)=>{const{report:t}=this.props,r=t&&t.meta?t.meta.count:0,o=t&&t.meta&&t.meta.filter&&t.meta.filter.limit?t.meta.filter.limit:me.filter.limit,l=(t&&t.meta&&t.meta.filter&&t.meta.filter.offset?t.meta.filter.offset:me.filter.offset)/o+1;return f().createElement(s.Pagination,{isCompact:!e,itemCount:r,onPerPageSelect:this.handlePerPageSelect,onSetPage:this.handleSetPage,page:l,perPage:o,variant:e?s.PaginationVariant.bottom:s.PaginationVariant.top,widgetId:"`pagination${isBottom ? '-bottom' : ''}`"})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:r}=this.props,{isAllSelected:s,selectedItems:o}=this.state,l=O(e.group_by),i=(0,u.qV)(e);return f().createElement(re,{groupBy:i?`${a.P}${i}`:l,isAllSelected:s,isLoading:1===r,onSelected:this.handleSelected,onSort:this.handleSort,query:e,report:t,selectedItems:o})},this.getToolbar=e=>{const{query:t,report:r}=this.props,{isAllSelected:s,selectedItems:o}=this.state,l=O(t.group_by),i=(0,u.qV)(t),n=r&&r.meta?r.meta.count:0;return f().createElement(he,{groupBy:i?`${a.P}${i}`:l,isAllSelected:s,isExportDisabled:0===e.length||!s&&0===o.length,itemsPerPage:e.length,itemsTotal:n,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:this.handleFilterAdded,onFilterRemoved:this.handleFilterRemoved,pagination:this.getPagination(),query:t,selectedItems:o})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleFilterAdded=(e,t)=>{const{history:r,query:s}=this.props,o=(0,m.W)(s,e,t);r.replace(this.getRouteForQuery(o,!0))},this.handleFilterRemoved=(e,t)=>{const{history:r,query:s}=this.props,o=(0,m.U)(s,e,t);r.replace(this.getRouteForQuery(o,!0))},this.handleGroupBySelected=e=>{const{history:t,query:r}=this.props,s=e,o=Object.assign(Object.assign({},JSON.parse(JSON.stringify(r))),{group_by:{[s]:"*"},order_by:{cost:"desc"}});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{t.replace(this.getRouteForQuery(o,!0))}))},this.handlePerPageSelect=(e,t)=>{const{history:r,query:s}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(s)));o.filter=Object.assign(Object.assign({},s.filter),{limit:t});const l=this.getRouteForQuery(o,!0);r.replace(l)},this.handleSelected=(e,t=!1)=>{const{isAllSelected:r,selectedItems:s}=this.state;let o=[...r?this.getComputedItems():s];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.handleSetPage=(e,t)=>{const{history:r,query:s,report:o}=this.props,l=o&&o.meta&&o.meta.filter&&o.meta.filter.limit?o.meta.filter.limit:me.filter.limit,a=t*l-l,i=Object.assign({},JSON.parse(JSON.stringify(s)));i.filter=Object.assign(Object.assign({},s.filter),{offset:a});const n=this.getRouteForQuery(i);r.replace(n)},this.handleSort=(e,t)=>{const{history:r,query:s}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(s)));o.order_by={},o.order_by[e]=t?"asc":"desc";const l=this.getRouteForQuery(o);r.replace(l)},this.updateReport=()=>{const{query:e,location:t,fetchReport:r,history:s,queryString:o}=this.props;t.search?r(fe,ye,o):s.replace(this.getRouteForQuery({filter_by:e?e.filter_by:void 0,group_by:e?e.group_by:void 0,order_by:{cost:"desc"}}))},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleFilterAdded=this.handleFilterAdded.bind(this),this.handleFilterRemoved=this.handleFilterRemoved.bind(this),this.handlePerPageSelect=this.handlePerPageSelect.bind(this),this.handleSelected=this.handleSelected.bind(this),this.handleSetPage=this.handleSetPage.bind(this),this.handleSort=this.handleSort.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{location:r,report:s,reportError:o,queryString:l}=this.props,{selectedItems:a}=this.state,i=e.queryString!==l,n=!s&&!o,c=!r.search,p=t.selectedItems!==a;(i||n||c||p)&&this.updateReport()}getRouteForQuery(e,t=!1){const{history:r}=this.props;return t&&(e.filter=Object.assign(Object.assign({},e.filter),{offset:me.filter.offset})),`${r.location.pathname}?${(0,o.IV)(e)}`}render(){const{providers:e,providersFetchStatus:t,query:r,report:s,reportError:o,reportFetchStatus:l,intl:a}=this.props,h=O(r.group_by),u=this.getComputedItems(),m=a.formatMessage(i.Z.gcpDetailsTitle);if(o)return f().createElement(d.Z,{title:m});if(1===t)return f().createElement(n.Z,{title:m});if(2===t){if(e&&e.meta&&0===e.meta.count)return f().createElement(p.Z,{providerType:"gcp",title:m});if(!(0,g.g8)(e))return f().createElement(c.Z,{title:m})}return f().createElement("div",{style:ge.gcpDetails},f().createElement(X,{groupBy:h,onGroupBySelected:this.handleGroupBySelected,report:s}),f().createElement("div",{style:ge.content},this.getToolbar(u),this.getExportModal(u),1===l?f().createElement(n.Z,null):f().createElement(f().Fragment,null,f().createElement("div",{style:ge.tableContainer},this.getTable()),f().createElement("div",{style:ge.paginationContainer},f().createElement("div",{style:ge.pagination},this.getPagination(!0))))))}}const ve=(0,b.X1)(((e,t)=>{const r=(0,o.mB)(location.search),s={delta:"cost",filter:Object.assign(Object.assign({},me.filter),r.filter),filter_by:r.filter_by||me.filter_by,group_by:r.group_by||me.group_by,order_by:r.order_by||me.order_by},a=(0,o.pm)(s),i=P.ZV.selectReport(e,fe,ye,a),n=P.ZV.selectReportError(e,fe,ye,a),c=P.ZV.selectReportFetchStatus(e,fe,ye,a),p=(0,l.H)(E.NT),d=E.aX.selectProviders(e,"all",p),h=E.aX.selectProvidersError(e,"all",p),u=E.aX.selectProvidersFetchStatus(e,"all",p);return{providers:(0,g.BV)(d,"gcp"),providersError:h,providersFetchStatus:u,query:s,queryString:a,report:i,reportError:n,reportFetchStatus:c}})),be={fetchReport:P.nx.fetchReport},Ee=(0,S.ZP)((0,v.connect)(ve,be)(Se))}}]);
//# sourceMappingURL=4b5e3e8b189e42dedd4a.bundle.js.map