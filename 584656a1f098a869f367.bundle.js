(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[373],{37692:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>R});var r=s(95078),o=s(86208),a=s(45997),i=s(93952),l=s(19078),n=s(23246),c=s(97522),d=s.n(c),p=s(74806),h=s(43476),u=s(57954),m=s(94377),g=s(45235),y=s(42581),f=s(44696),S=s(17287);const v=(0,m.X1)(((e,t)=>({selectWidgets:S.XL.selectWidgets(e),widgets:S.XL.selectCurrentWidgets(e)}))),b=(0,p.ZP)((0,h.connect)(v,{})(f.X));var E=s(45572),O=s(17303);const P=(0,m.X1)(((e,t)=>({selectWidgets:O.Vf.selectWidgets(e),widgets:O.Vf.selectCurrentWidgets(e)}))),_=(0,p.ZP)((0,h.connect)(P,{})(E.f)),B=u.Hb.awsDetails,Z="cost",C="aws",w=(0,m.X1)(((e,t)=>{const s=(0,r.mB)(location.search),l=(0,n.OA)(s),c=l?a.dV:(0,n.VL)(s),p=l||(0,n.pe)(s),h={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign(Object.assign({},s&&s.filter_by&&s.filter_by),c&&{[c]:void 0}),s&&s.filter&&s.filter.account&&{[`${a.Sq}account`]:s.filter.account}),group_by:Object.assign({},c&&{[c]:p})},u=(0,r.pm)(h),m=y.ZV.selectReport(e,C,Z,u),f=y.ZV.selectReportError(e,C,Z,u),S=y.ZV.selectReportFetchStatus(e,C,Z,u),v=(0,o.H)(g.JL),E=g.aX.selectProviders(e,"aws",v),O=g.aX.selectProvidersFetchStatus(e,"aws",v);return{costOverviewComponent:d().createElement(b,{groupBy:c,query:s,report:m}),description:s[a.eG],detailsURL:B,emptyStateTitle:t.intl.formatMessage(i.Z.AWSDetailsTitle),groupBy:c,groupByValue:p,historicalDataComponent:d().createElement(_,null),providers:E,providersFetchStatus:O,providerType:"aws",query:s,queryString:u,report:m,reportError:f,reportFetchStatus:S,reportType:Z,reportPathsType:C,showCostType:!0,tagReportPathsType:"aws",title:s[a.yG]?s[a.yG]:p}})),F={fetchReport:y.nx.fetchReport},R=(0,p.ZP)((0,h.connect)(w,F)(l.Z))},22452:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>_e});var r=s(95995),o=s(95078),a=s(86208),i=s(45997),l=s(93952),n=s(73466),c=s(16679),d=s(13883),p=s(81787),h=s(46774),u=s(23246),m=s(94329),g=s(8091),y=s(97522),f=s.n(y),S=s(74806),v=s(43476),b=s(94377),E=s(45235),O=s(42581),P=s(26018);function _(e={}){return e.account?"account":e.instance_type?"instance_type":e.org_unit_id?"org_unit_id":e.region?"region":e.service?"service":"date"}var B=s(31447),Z=s(49382),C=s(98499),w=s(32412);const F={awsDetails:{minHeight:"100%"},content:{paddingBottom:C.ZP.value,paddingTop:C.ZP.value},paginationContainer:{marginLeft:C.ZP.value,marginRight:C.ZP.value},pagination:{backgroundColor:Z.ZP.value,padding:w.ZP.value},tableContainer:{marginLeft:C.ZP.value,marginRight:C.ZP.value}};var R=s(41560),T=s(43819),M=s(2088),x=s(33307),k=s(99291),q=s(33605),A=s(54881),D=s(48196);const V={costValue:{marginTop:C.ZP.var,marginBottom:0},costLabelUnit:{fontSize:A.ZP.value,color:q.ZP.var},costType:{display:"flex",marginLeft:w.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:Z.ZP.var,padding:C.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex"},title:{paddingBottom:D.ZP.var}},I={delta:"cost",filter:{time_scope_units:"month",time_scope_value:-1,resolution:"monthly"}},j=[{label:"account",value:"account"},{label:"service",value:"service"},{label:"region",value:"region"}];class X extends f().Component{render(){const{groupBy:e,onGroupByClicked:t,providers:s,providersError:o,report:a,intl:i}=this.props,n=a&&!o&&s&&s.meta&&s.meta.count>0,c=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total;return f().createElement("header",{style:V.header},f().createElement("div",{style:V.headerContent},f().createElement(r.Title,{headingLevel:"h1",style:V.title,size:r.TitleSizes["2xl"]},i.formatMessage(l.Z.AWSDetailsTitle)),f().createElement(T.F,null)),f().createElement("div",{style:V.headerContent},f().createElement("div",{style:V.headerContentLeft},f().createElement(M.X,{getIdKeyForGroupBy:_,groupBy:e,isDisabled:!n,onItemClicked:t,options:j,orgReportPathsType:"aws",showOrgs:!0,showTags:!0,tagReportPathsType:"aws"}),f().createElement("div",{style:V.costType},f().createElement(R.T,null))),Boolean(n)&&f().createElement("div",null,f().createElement(r.Title,{headingLevel:"h2",style:V.costValue,size:r.TitleSizes["4xl"]},(0,k.xG)(c?a.meta.total.cost.total.value:0,c?a.meta.total.cost.total.units:"USD")),f().createElement("div",{style:V.dateTitle},(0,x.J4)()))))}}const L=(0,b.X1)(((e,t)=>{const s=(0,o.pm)(I),r=(0,a.H)(E.JL);return{providers:E.aX.selectProviders(e,"aws",r),providersError:E.aX.selectProvidersError(e,"aws",r),providersFetchStatus:E.aX.selectProvidersFetchStatus(e,"aws",r),queryString:s}})),$=(0,S.ZP)((0,v.connect)(L,{})(X));var N=s(52636),J=s(34168),G=s(55483),W=s(99163),z=s(80878),Q=s(88268),U=s(16530),H=s(57954),K=s(12289),Y=s(40794),ee=s(11331),te=s(73861);const se={emptyState:{backgroundColor:Z.ZP.value,display:"flex",justifyContent:"center",paddingTop:ee.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:te.ZP.value},infoDescription:{color:K.ZP.value,fontSize:Y.ZP.value}};class re extends f().Component{constructor(e){super(e),this.state={columns:[],rows:[]},this.initDatum=()=>{const{isAllSelected:e,query:t,report:s,selectedItems:o,intl:a}=this.props;if(!t||!s)return;const n=_(t.group_by),c=(0,u.OA)(t),d=(0,u.qV)(t),p=d||c?[{title:c?a.formatMessage(l.Z.Names,{count:2}):a.formatMessage(l.Z.TagNames)},{title:a.formatMessage(l.Z.MonthOverMonthChange)},{orderBy:"cost",title:a.formatMessage(l.Z.Cost),transforms:[J.sortable]},{title:""}]:[{orderBy:"account"===n?"account_alias":n,title:a.formatMessage(l.Z.DetailsResourceNames,{value:n}),transforms:[J.sortable]},{title:a.formatMessage(l.Z.MonthOverMonthChange)},{orderBy:"cost",title:a.formatMessage(l.Z.Cost),transforms:[J.sortable]},{title:""}],h=[];(0,B.c)({report:s,idKey:d||(c?"org_entities":n)}).map(((s,r)=>{const a=s&&s.label&&null!==s.label?s.label:"",l=this.getMonthOverMonthCost(s,r),p=this.getTotalCost(s,r),m=this.getActions(s,r);let g=f().createElement(U.Link,{to:(0,Q.Z)({basePath:H.Hb.awsDetailsBreakdown,description:s.id,groupBy:d?`${i.P}${d}`:n,groupByOrg:c,id:s.id,orgUnitId:(0,u.OA)(t),query:t,title:s.label,type:s.type})},a);const y=!(a===`no-${n}`||a===`no-${d}`);y||(g=a);const S=s.id&&s.id!==s.label?f().createElement("div",{style:se.infoDescription},s.id):null;h.push({cells:[{title:f().createElement("div",null,g,S)},{title:f().createElement("div",null,l)},{title:f().createElement("div",null,p)},{title:f().createElement("div",null,m)}],disableSelection:!y,item:s,selected:e||o&&void 0!==o.find((e=>e.id===s.id))})}));const m=[{heightAuto:!0,cells:[{props:{colSpan:5},title:f().createElement(r.Bullseye,null,f().createElement("div",{style:{textAlign:"center"}},f().createElement(r.Spinner,{size:"xl"})))}]}];this.setState({columns:p,loadingRows:m,rows:h,sortBy:{}})},this.getActions=(e,t,s=!1)=>{const{groupBy:r,query:o}=this.props;return f().createElement(z.e,{groupBy:r,isDisabled:s,item:e,query:o,reportPathsType:"aws"})},this.getEmptyState=()=>{const{query:e,intl:t}=this.props;for(const t of Object.values(e.filter_by))if("*"!==t)return f().createElement(G.c,{filter:t,showMargin:!1});return f().createElement(r.EmptyState,null,f().createElement(r.EmptyStateIcon,{icon:N.Xk}),f().createElement(r.EmptyStateBody,null,t.formatMessage(l.Z.DetailsEmptyState)))},this.getMonthOverMonthCost=(e,t)=>{const{intl:s}=this.props,r=(0,k.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),o=null!==e.delta_percent?(0,k.rl)(Math.abs(e.delta_percent)):0,a=!(0===o||"0.00"===o),i=null!==e.delta_percent;let n;return a&&(n="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(n+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(n+=" increase")),i?f().createElement("div",{className:"monthOverMonthOverride"},f().createElement("div",{className:n,key:`month-over-month-cost-${t}`},a?s.formatMessage(l.Z.Percent,{value:o}):f().createElement(W.L,null),Boolean(a&&null!==e.delta_percent&&e.delta_value>0)&&f().createElement("span",{className:"fa fa-sort-up",style:se.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(a&&null!==e.delta_percent&&e.delta_value<0)&&f().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},se.infoArrow),se.infoArrowDesc),key:`month-over-month-icon-${t}`})),f().createElement("div",{style:se.infoDescription,key:`month-over-month-info-${t}`},(0,x.Y)(r))):(0,x.Tf)()},this.getSortBy=()=>{const{query:e}=this.props,{columns:t}=this.state;let s=-1,r=J.SortByDirection.asc;for(const o of Object.keys(e.order_by)){let a=0;for(const i of t){if(i.orderBy===o){r="asc"===e.order_by[o]?J.SortByDirection.asc:J.SortByDirection.desc,s=a+1;break}a++}}return s>-1?{index:s,direction:r}:{}},this.getTotalCost=(e,t)=>{const{report:s,intl:r}=this.props,o=s&&s.meta&&s.meta.total&&s.meta.total.cost&&s.meta.total.cost.total?s.meta.total.cost.total.value:0,a=0===o?o.toFixed(2):(e.cost.total.value/o*100).toFixed(2);return f().createElement(f().Fragment,null,(0,k.xG)(e.cost.total.value,e.cost.total.units),f().createElement("div",{style:se.infoDescription,key:`total-cost-${t}`},r.formatMessage(l.Z.PercentOfCost,{value:a})))},this.handleOnSelect=(e,t,s)=>{const{onSelected:r}=this.props;let o,a=[];-1===s?o=this.state.rows.map((e=>(e.selected=t,e))):(o=[...this.state.rows],o[s].selected=t,a=[o[s].item]),this.setState({rows:o},(()=>{r&&r(a,t)}))},this.handleOnSort=(e,t,s)=>{const{onSort:r}=this.props,{columns:o}=this.state;r&&r(o[t-1].orderBy,s===J.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{query:t,report:s,selectedItems:r}=this.props,a=s&&s.data?JSON.stringify(s.data):"",i=e.report&&e.report.data?JSON.stringify(e.report.data):"";(0,o.pm)(e.query)===(0,o.pm)(t)&&i===a&&e.selectedItems===r||this.initDatum()}render(){const{intl:e,isLoading:t}=this.props,{columns:s,loadingRows:r,rows:o}=this.state;return f().createElement(f().Fragment,null,f().createElement(J.Table,{"aria-label":e.formatMessage(l.Z.AWSDetailsTableAriaLabel),canSelectAll:!1,cells:s,className:"tableOverride",rows:t?r:o,sortBy:this.getSortBy(),onSelect:t?void 0:this.handleOnSelect,onSort:this.handleOnSort,gridBreakPoint:"grid-2xl"},f().createElement(J.TableHeader,null),f().createElement(J.TableBody,null)),Boolean(0===o.length)&&f().createElement("div",{style:se.emptyState},this.getEmptyState()))}}const oe=(0,S.ZP)(re);var ae=s(8650),ie=s(38434),le=s(28631),ne=s(19853);const ce="aws",de="org",pe="aws",he="tag";class ue extends f().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,orgReport:t,tagReport:s}=this.props,r=[{name:e.formatMessage(l.Z.FilterByValues,{value:"account"}),key:"account"},{name:e.formatMessage(l.Z.FilterByValues,{value:"service"}),key:"service"},{name:e.formatMessage(l.Z.FilterByValues,{value:"region"}),key:"region"}];return t&&t.data&&t.data.length>0&&r.push({name:e.formatMessage(l.Z.FilterByValues,{value:"org_unit_id"}),key:i.dV}),s&&s.data&&s.data.length>0&&r.push({name:e.formatMessage(l.Z.FilterByValues,{value:"tag"}),key:i.up}),r}}componentDidMount(){const{fetchOrg:e,fetchTag:t,queryString:s}=this.props;e(ce,de,s),t(pe,he,s),this.setState({categoryOptions:this.getCategoryOptions()})}componentDidUpdate(e){const{fetchOrg:t,fetchTag:s,orgReport:r,query:o,queryString:a,tagReport:i}=this.props;o&&!(0,ne.X)(o,e.query)&&(t(ce,de,a),s(pe,he,a)),(0,ne.X)(r,e.orgReport)&&(0,ne.X)(i,e.tagReport)||this.setState({categoryOptions:this.getCategoryOptions()})}render(){const{groupBy:e,isAllSelected:t,isBulkSelectDisabled:s,isExportDisabled:r,itemsPerPage:o,itemsTotal:a,onBulkSelected:i,onExportClicked:l,onFilterAdded:n,onFilterRemoved:c,orgReport:d,pagination:p,query:h,selectedItems:u,tagReport:m}=this.props,{categoryOptions:g}=this.state;return f().createElement(ae.k,{categoryOptions:g,groupBy:e,isAllSelected:t,isBulkSelectDisabled:s,isExportDisabled:r,itemsPerPage:o,itemsTotal:a,onBulkSelected:i,onExportClicked:l,onFilterAdded:n,onFilterRemoved:c,orgReport:d,pagination:p,query:h,resourcePathsType:"aws",selectedItems:u,showBulkSelect:!0,showExport:!0,showFilter:!0,tagReport:m})}}const me=(0,b.X1)(((e,t)=>{const s=(0,o.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1}});return{queryString:s,orgReport:ie.zE.selectOrg(e,ce,de,s),orgReportFetchStatus:ie.zE.selectOrgFetchStatus(e,ce,de,s),tagReport:le.ux.selectTag(e,pe,he,s),tagReportFetchStatus:le.ux.selectTagFetchStatus(e,pe,he,s)}})),ge={fetchOrg:ie.Lp.T7,fetchTag:le.xr.Xt},ye=(0,v.connect)(me,ge)(ue),fe=(0,S.ZP)(ye),Se={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:{},group_by:{account:"*"},order_by:{cost:"desc"}},ve="cost",be="aws";class Ee extends f().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,s=_(e.group_by),r=(0,u.qV)(e)||s;return(0,B.c)({report:t,idKey:r===i.dV?"org_entities":r})},this.getExportModal=e=>{const{isAllSelected:t,isExportModalOpen:s,selectedItems:r}=this.state,{query:o,report:a}=this.props,l=_(o.group_by),n=(0,u.qV)(o),c=a&&a.meta?a.meta.count:0,d=[];return r.map((e=>{e.label!==`no-${l}`&&e.label!==`no-${n}`&&d.push(e)})),f().createElement(h.X,{isAllItems:(t||r.length===c)&&e.length>0,groupBy:n?`${i.P}${n}`:l,isOpen:s,items:d,onClose:this.handleExportModalClose,query:o,reportPathsType:be})},this.getPagination=(e=!1)=>{const{report:t}=this.props,s=t&&t.meta?t.meta.count:0,o=t&&t.meta&&t.meta.filter&&t.meta.filter.limit?t.meta.filter.limit:Se.filter.limit,a=(t&&t.meta&&t.meta.filter&&t.meta.filter.offset?t.meta.filter.offset:Se.filter.offset)/o+1;return f().createElement(r.Pagination,{isCompact:!e,itemCount:s,onPerPageSelect:this.handlePerPageSelect,onSetPage:this.handleSetPage,page:a,perPage:o,variant:e?r.PaginationVariant.bottom:r.PaginationVariant.top,widgetId:"`pagination${isBottom ? '-bottom' : ''}`"})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:s}=this.props,{isAllSelected:r,selectedItems:o}=this.state,a=_(e.group_by),l=(0,u.qV)(e);return f().createElement(oe,{groupBy:l?`${i.P}${l}`:a,isAllSelected:r,isLoading:1===s,onSelected:this.handleSelected,onSort:this.handleSort,query:e,report:t,selectedItems:o})},this.getToolbar=e=>{const{query:t,report:s}=this.props,{isAllSelected:r,selectedItems:o}=this.state,a=_(t.group_by),l=(0,u.qV)(t),n=s&&s.meta?s.meta.count:0;return f().createElement(fe,{groupBy:l?`${i.P}${l}`:a,isAllSelected:r,isExportDisabled:0===e.length||!r&&0===o.length,itemsPerPage:e.length,itemsTotal:n,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:this.handleFilterAdded,onFilterRemoved:this.handleFilterRemoved,pagination:this.getPagination(),query:t,selectedItems:o})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleFilterAdded=(e,t)=>{const{history:s,query:r}=this.props,o=(0,g.W)(r,e,t);s.replace(this.getRouteForQuery(o,!0))},this.handleFilterRemoved=(e,t)=>{const{history:s,query:r}=this.props,o=(0,g.U)(r,e,t);s.replace(this.getRouteForQuery(o,!0))},this.handleGroupByClick=e=>{const{history:t,query:s}=this.props;let r=e,o="*";-1!==e.indexOf(i.dV)&&(r=i.dV.substring(0,i.dV.length),o=e.slice(i.dV.length));const a=Object.assign(Object.assign({},JSON.parse(JSON.stringify(s))),{group_by:{[r]:o},order_by:{cost:"desc"}});t.replace(this.getRouteForQuery(a,!0)),this.setState({isAllSelected:!1,selectedItems:[]})},this.handlePerPageSelect=(e,t)=>{const{history:s,query:r}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(r)));o.filter=Object.assign(Object.assign({},r.filter),{limit:t});const a=this.getRouteForQuery(o,!0);s.replace(a)},this.handleSelected=(e,t=!1)=>{const{isAllSelected:s,selectedItems:r}=this.state;let o=[...s?this.getComputedItems():r];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.handleSetPage=(e,t)=>{const{history:s,query:r,report:o}=this.props,a=o&&o.meta&&o.meta.filter&&o.meta.filter.limit?o.meta.filter.limit:Se.filter.limit,i=t*a-a,l=Object.assign({},JSON.parse(JSON.stringify(r)));l.filter=Object.assign(Object.assign({},r.filter),{offset:i});const n=this.getRouteForQuery(l);s.replace(n)},this.handleSort=(e,t)=>{const{history:s,query:r}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(r)));o.order_by={},o.order_by[e]=t?"asc":"desc";const a=this.getRouteForQuery(o);s.replace(a)},this.updateReport=()=>{const{query:e,location:t,fetchReport:s,history:r,queryString:o}=this.props;t.search?s(be,ve,o):r.replace(this.getRouteForQuery({filter_by:e?e.filter_by:void 0,group_by:e?e.group_by:void 0,order_by:{cost:"desc"}}))},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleFilterAdded=this.handleFilterAdded.bind(this),this.handleFilterRemoved=this.handleFilterRemoved.bind(this),this.handlePerPageSelect=this.handlePerPageSelect.bind(this),this.handleSelected=this.handleSelected.bind(this),this.handleSetPage=this.handleSetPage.bind(this),this.handleSort=this.handleSort.bind(this)}componentDidMount(){const{resetState:e}=this.props;e(),this.updateReport()}componentDidUpdate(e,t){const{location:s,report:r,reportError:o,queryString:a}=this.props,{selectedItems:i}=this.state,l=e.queryString!==a,n=!r&&!o,c=!s.search,d=t.selectedItems!==i;(l||n||c||d)&&this.updateReport()}getRouteForQuery(e,t=!1){const{history:s}=this.props;return t&&(e.filter=Object.assign(Object.assign({},e.filter),{offset:Se.filter.offset})),`${s.location.pathname}?${(0,o.IV)(e)}`}render(){const{providers:e,providersFetchStatus:t,query:s,report:r,reportError:o,reportFetchStatus:a,intl:i}=this.props,h=_(s.group_by),u=this.getComputedItems(),g=i.formatMessage(l.Z.AWSDetailsTitle);if(o)return f().createElement(p.Z,{title:g});if(1===t&&1===a)return f().createElement(n.Z,{title:g});if(2===t&&2===a){if(e&&e.meta&&0===e.meta.count&&2===t)return f().createElement(d.Z,{providerType:"aws",title:g});if(!(0,m.g8)(e))return f().createElement(c.Z,{title:g})}return f().createElement("div",{style:F.awsDetails},f().createElement($,{groupBy:h,onGroupByClicked:this.handleGroupByClick,report:r}),f().createElement("div",{style:F.content},this.getToolbar(u),this.getExportModal(u),1===a?f().createElement(n.Z,null):f().createElement(f().Fragment,null,f().createElement("div",{style:F.tableContainer},this.getTable()),f().createElement("div",{style:F.paginationContainer},f().createElement("div",{style:F.pagination},this.getPagination(!0))))))}}const Oe=(0,b.X1)(((e,t)=>{const s=(0,o.mB)(location.search),r={delta:"cost",filter:Object.assign(Object.assign({},Se.filter),s.filter),filter_by:s.filter_by||Se.filter_by,group_by:s.group_by||Se.group_by,order_by:s.order_by||Se.order_by},i=(0,o.pm)(r),l=O.ZV.selectReport(e,be,ve,i),n=O.ZV.selectReportError(e,be,ve,i),c=O.ZV.selectReportFetchStatus(e,be,ve,i),d=(0,a.H)(E.JL);return{providers:E.aX.selectProviders(e,"aws",d),providersFetchStatus:E.aX.selectProvidersFetchStatus(e,"aws",d),query:r,queryString:i,report:l,reportError:n,reportFetchStatus:c}})),Pe={fetchReport:O.nx.fetchReport,resetState:P.Aw.oA},_e=(0,S.ZP)((0,v.connect)(Oe,Pe)(Ee))}}]);
//# sourceMappingURL=584656a1f098a869f367.bundle.js.map