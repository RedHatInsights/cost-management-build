"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[373],{37692:(e,t,s)=>{s.r(t),s.d(t,{default:()=>w});var r=s(95078),o=s(86208),a=s(45997),i=s(93952),l=s(19078),n=s(23246),c=s(97522),d=s.n(c),p=s(74806),h=s(43476),u=s(57954),g=s(94377),m=s(45235),y=s(42581),S=s(37530),f=s(44696),v=s(17287);const b=(0,g.X1)(((e,t)=>({selectWidgets:v.XL.selectWidgets(e),widgets:v.XL.selectCurrentWidgets(e)}))),E=(0,p.ZP)((0,h.connect)(b,{})(f.X));var O=s(45572),P=s(17303);const _=(0,g.X1)(((e,t)=>({selectWidgets:P.Vf.selectWidgets(e),widgets:P.Vf.selectCurrentWidgets(e)}))),B=(0,p.ZP)((0,h.connect)(_,{})(O.f)),Z=u.Hb.awsDetails,R="cost",T="aws",C=(0,g.X1)(((e,t)=>{const s=(0,r.mB)(location.search),l=(0,n.OA)(s),c=l?a.dV:(0,n.VL)(s),p=l||(0,n.pe)(s),h={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign(Object.assign({},s&&s.filter_by&&s.filter_by),c&&{[c]:void 0}),s&&s.filter&&s.filter.account&&{[`${a.Sq}account`]:s.filter.account}),group_by:Object.assign({},c&&{[c]:p})},u=(0,r.pm)(h),g=y.ZV.selectReport(e,T,R,u),f=y.ZV.selectReportError(e,T,R,u),v=y.ZV.selectReportFetchStatus(e,T,R,u),b=(0,o.H)(m.JL),O=m.aX.selectProviders(e,"aws",b),P=m.aX.selectProvidersFetchStatus(e,"aws",b),_=(0,S.uY)();return{costOverviewComponent:d().createElement(E,{costType:_,groupBy:c,query:s,report:g}),description:s[a.eG],detailsURL:Z,emptyStateTitle:t.intl.formatMessage(i.Z.AWSDetailsTitle),groupBy:c,groupByValue:p,historicalDataComponent:d().createElement(B,{costType:_}),providers:O,providersFetchStatus:P,providerType:"aws",query:s,queryString:u,report:g,reportError:f,reportFetchStatus:v,reportType:R,reportPathsType:T,showCostType:!0,tagReportPathsType:"aws",title:s[a.yG]?s[a.yG]:p}})),F={fetchReport:y.nx.fetchReport},w=(0,p.ZP)((0,h.connect)(C,F)(l.Z))},22452:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Be});var r=s(56976),o=s(95078),a=s(86208),i=s(45997),l=s(93952),n=s(73466),c=s(16679),d=s(13883),p=s(81787),h=s(46774),u=s(23246),g=s(94329),m=s(8091),y=s(97522),S=s.n(y),f=s(74806),v=s(43476),b=s(94377),E=s(45235),O=s(42581),P=s(26018);function _(e={}){return e.account?"account":e.instance_type?"instance_type":e.org_unit_id?"org_unit_id":e.region?"region":e.service?"service":"date"}var B=s(31447),Z=s(49382),R=s(98499),T=s(32412);const C={awsDetails:{minHeight:"100%"},content:{paddingBottom:R.ZP.value,paddingTop:R.ZP.value},paginationContainer:{marginLeft:R.ZP.value,marginRight:R.ZP.value},pagination:{backgroundColor:Z.ZP.value,padding:T.ZP.value},tableContainer:{marginLeft:R.ZP.value,marginRight:R.ZP.value}};var F=s(97137),w=s(51381),x=s(2088),M=s(33307),q=s(41251),A=s(99291),k=s(33605),D=s(54881),V=s(48196);const j={costValue:{marginTop:R.ZP.var,marginBottom:0},costLabelUnit:{fontSize:D.ZP.value,color:k.ZP.var},costType:{display:"flex",marginLeft:T.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:Z.ZP.var,padding:R.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},title:{paddingBottom:V.ZP.var}},I={delta:"cost",filter:{time_scope_units:"month",time_scope_value:-1,resolution:"monthly"}},X=[{label:"account",value:"account"},{label:"service",value:"service"},{label:"region",value:"region"}];class $ extends S().Component{constructor(){super(...arguments),this.handleCostTypeSelected=e=>{const{onCostTypeSelected:t}=this.props;t&&t(e)}}render(){const{groupBy:e,onGroupBySelected:t,providers:s,providersError:o,report:a,intl:i}=this.props,n=a&&!o&&s&&s.meta&&s.meta.count>0,c=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total;return S().createElement("header",{style:j.header},S().createElement("div",{style:j.headerContent},S().createElement(r.Title,{headingLevel:"h1",style:j.title,size:r.TitleSizes["2xl"]},i.formatMessage(l.Z.AWSDetailsTitle)),(0,q.S)()&&S().createElement(w.F,null)),S().createElement("div",{style:j.headerContent},S().createElement("div",{style:j.headerContentLeft},S().createElement(x.X,{getIdKeyForGroupBy:_,groupBy:e,isDisabled:!n,onSelected:t,options:X,orgReportPathsType:"aws",showOrgs:!0,showTags:!0,tagReportPathsType:"aws"}),(0,q.S)()&&S().createElement("div",{style:j.costType},S().createElement(F.T,{onSelect:this.handleCostTypeSelected}))),Boolean(n)&&S().createElement("div",null,S().createElement(r.Title,{headingLevel:"h2",style:j.costValue,size:r.TitleSizes["4xl"]},(0,A.xG)(c?a.meta.total.cost.total.value:0,c?a.meta.total.cost.total.units:"USD")),S().createElement("div",{style:j.dateTitle},(0,M.J4)()))))}}const L=(0,b.X1)(((e,t)=>{const s=(0,o.pm)(I),r=(0,a.H)(E.JL);return{providers:E.aX.selectProviders(e,"aws",r),providersError:E.aX.selectProvidersError(e,"aws",r),providersFetchStatus:E.aX.selectProvidersFetchStatus(e,"aws",r),queryString:s}})),N=(0,f.ZP)((0,v.connect)(L,{})($));var J=s(52636),G=s(98975),W=s(55483),z=s(99163),Q=s(80878),U=s(88268),H=s(73727),K=s(57954),Y=s(12289),ee=s(40794),te=s(11331),se=s(73861);const re={emptyState:{backgroundColor:Z.ZP.value,display:"flex",justifyContent:"center",paddingTop:te.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:se.ZP.value},infoDescription:{color:Y.ZP.value,fontSize:ee.ZP.value}};class oe extends S().Component{constructor(e){super(e),this.state={columns:[],rows:[]},this.initDatum=()=>{const{isAllSelected:e,query:t,report:s,selectedItems:o,intl:a}=this.props;if(!t||!s)return;const n=_(t.group_by),c=(0,u.OA)(t),d=(0,u.qV)(t),p=[],h=(0,B.c)({report:s,idKey:d||(c?"org_entities":n)}),g=d||c?[{title:c?a.formatMessage(l.Z.Names,{count:2}):a.formatMessage(l.Z.TagNames)},{title:a.formatMessage(l.Z.MonthOverMonthChange)},Object.assign({orderBy:"cost",title:a.formatMessage(l.Z.Cost)},h.length&&{transforms:[G.sortable]}),{title:""}]:[Object.assign({orderBy:"account"===n?"account_alias":n,title:a.formatMessage(l.Z.DetailsResourceNames,{value:n})},h.length&&{transforms:[G.sortable]}),{title:a.formatMessage(l.Z.MonthOverMonthChange)},Object.assign({orderBy:"cost",title:a.formatMessage(l.Z.Cost)},h.length&&{transforms:[G.sortable]}),{title:""}];h.map(((s,r)=>{const a=s&&s.label&&null!==s.label?s.label:"",l=this.getMonthOverMonthCost(s,r),h=this.getTotalCost(s,r),g=this.getActions(s,r);let m=S().createElement(H.rU,{to:(0,U.Z)({basePath:K.Hb.awsDetailsBreakdown,description:s.id,groupBy:d?`${i.P}${d}`:n,groupByOrg:c,id:s.id,orgUnitId:(0,u.OA)(t),query:t,title:s.label,type:s.type})},a);const y=!(a===`no-${n}`||a===`no-${d}`);y||(m=a);const f=s.id&&s.id!==s.label?S().createElement("div",{style:re.infoDescription},s.id):null;p.push({cells:[{title:S().createElement("div",null,m,f)},{title:S().createElement("div",null,l)},{title:S().createElement("div",null,h)},{title:S().createElement("div",null,g)}],disableSelection:!y,item:s,selected:e||o&&void 0!==o.find((e=>e.id===s.id))})}));const m=[{heightAuto:!0,cells:[{props:{colSpan:5},title:S().createElement(r.Bullseye,null,S().createElement("div",{style:{textAlign:"center"}},S().createElement(r.Spinner,{size:"xl"})))}]}];this.setState({columns:g,loadingRows:m,rows:p,sortBy:{}})},this.getActions=(e,t,s=!1)=>{const{groupBy:r,query:o}=this.props;return S().createElement(Q.e,{groupBy:r,isDisabled:s,item:e,query:o,reportPathsType:"aws"})},this.getEmptyState=()=>{const{query:e,intl:t}=this.props;for(const t of Object.values(e.filter_by))if("*"!==t)return S().createElement(W.c,{filter:t,showMargin:!1});return S().createElement(r.EmptyState,null,S().createElement(r.EmptyStateIcon,{icon:J.Xk}),S().createElement(r.EmptyStateBody,null,t.formatMessage(l.Z.DetailsEmptyState)))},this.getMonthOverMonthCost=(e,t)=>{const{intl:s}=this.props,r=(0,A.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),o=null!==e.delta_percent?(0,A.rl)(Math.abs(e.delta_percent)):0,a=!(0===o||"0.00"===o),i=null!==e.delta_percent;let n;return a&&(n="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(n+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(n+=" increase")),i?S().createElement("div",{className:"monthOverMonthOverride"},S().createElement("div",{className:n,key:`month-over-month-cost-${t}`},a?s.formatMessage(l.Z.Percent,{value:o}):S().createElement(z.L,null),Boolean(a&&null!==e.delta_percent&&e.delta_value>0)&&S().createElement("span",{className:"fa fa-sort-up",style:re.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(a&&null!==e.delta_percent&&e.delta_value<0)&&S().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},re.infoArrow),re.infoArrowDesc),key:`month-over-month-icon-${t}`})),S().createElement("div",{style:re.infoDescription,key:`month-over-month-info-${t}`},(0,M.Y)(r))):(0,M.Tf)()},this.getSortBy=()=>{const{query:e}=this.props,{columns:t}=this.state;let s=-1,r=G.SortByDirection.asc;for(const o of Object.keys(e.order_by)){let a=0;for(const i of t){if(i.orderBy===o){r="asc"===e.order_by[o]?G.SortByDirection.asc:G.SortByDirection.desc,s=a+1;break}a++}}return s>-1?{index:s,direction:r}:{}},this.getTotalCost=(e,t)=>{const{report:s,intl:r}=this.props,o=s&&s.meta&&s.meta.total&&s.meta.total.cost&&s.meta.total.cost.total?s.meta.total.cost.total.value:0,a=0===o?o.toFixed(2):(e.cost.total.value/o*100).toFixed(2);return S().createElement(S().Fragment,null,(0,A.xG)(e.cost.total.value,e.cost.total.units),S().createElement("div",{style:re.infoDescription,key:`total-cost-${t}`},r.formatMessage(l.Z.PercentOfCost,{value:a})))},this.handleOnSelect=(e,t,s)=>{const{onSelected:r}=this.props;let o,a=[];-1===s?o=this.state.rows.map((e=>(e.selected=t,e))):(o=[...this.state.rows],o[s].selected=t,a=[o[s].item]),this.setState({rows:o},(()=>{r&&r(a,t)}))},this.handleOnSort=(e,t,s)=>{const{onSort:r}=this.props,{columns:o}=this.state;r&&r(o[t-1].orderBy,s===G.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{query:t,report:s,selectedItems:r}=this.props,a=s&&s.data?JSON.stringify(s.data):"",i=e.report&&e.report.data?JSON.stringify(e.report.data):"";(0,o.pm)(e.query)===(0,o.pm)(t)&&i===a&&e.selectedItems===r||this.initDatum()}render(){const{intl:e,isLoading:t}=this.props,{columns:s,loadingRows:r,rows:o}=this.state;return S().createElement(S().Fragment,null,S().createElement(G.Table,{"aria-label":e.formatMessage(l.Z.AWSDetailsTableAriaLabel),canSelectAll:!1,cells:s,className:"tableOverride",rows:t?r:o,sortBy:this.getSortBy(),onSelect:t?void 0:this.handleOnSelect,onSort:this.handleOnSort,gridBreakPoint:"grid-2xl"},S().createElement(G.TableHeader,null),S().createElement(G.TableBody,null)),Boolean(0===o.length)&&S().createElement("div",{style:re.emptyState},this.getEmptyState()))}}const ae=(0,f.ZP)(oe);var ie=s(20679),le=s(38434),ne=s(28631),ce=s(19853);const de="aws",pe="org",he="aws",ue="tag";class ge extends S().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,orgReport:t,tagReport:s}=this.props,r=[{name:e.formatMessage(l.Z.FilterByValues,{value:"account"}),key:"account"},{name:e.formatMessage(l.Z.FilterByValues,{value:"service"}),key:"service"},{name:e.formatMessage(l.Z.FilterByValues,{value:"region"}),key:"region"}];return t&&t.data&&t.data.length&&r.push({name:e.formatMessage(l.Z.FilterByValues,{value:"org_unit_id"}),key:i.dV}),s&&s.data&&s.data.length&&r.push({name:e.formatMessage(l.Z.FilterByValues,{value:"tag"}),key:i.up}),r}}componentDidMount(){const{fetchOrg:e,fetchTag:t,orgReportFetchStatus:s,queryString:r,tagReportFetchStatus:o}=this.props;this.setState({categoryOptions:this.getCategoryOptions()},(()=>{1!==s&&e(de,pe,r),1!==o&&t(he,ue,r)}))}componentDidUpdate(e){const{fetchOrg:t,fetchTag:s,orgReport:r,orgReportFetchStatus:o,query:a,queryString:i,tagReport:l,tagReportFetchStatus:n}=this.props;(0,ce.X)(r,e.orgReport)&&(0,ce.X)(l,e.tagReport)?a&&!(0,ce.X)(a,e.query)&&(1!==o&&t(de,pe,i),1!==n&&s(he,ue,i)):this.setState({categoryOptions:this.getCategoryOptions()},(()=>{1!==o&&t(de,pe,i),1!==n&&s(he,ue,i)}))}render(){const{groupBy:e,isAllSelected:t,isBulkSelectDisabled:s,isExportDisabled:r,itemsPerPage:o,itemsTotal:a,onBulkSelected:i,onExportClicked:l,onFilterAdded:n,onFilterRemoved:c,orgReport:d,pagination:p,query:h,selectedItems:u,tagReport:g}=this.props,{categoryOptions:m}=this.state;return S().createElement(ie.k,{categoryOptions:m,groupBy:e,isAllSelected:t,isBulkSelectDisabled:s,isExportDisabled:r,itemsPerPage:o,itemsTotal:a,onBulkSelected:i,onExportClicked:l,onFilterAdded:n,onFilterRemoved:c,orgReport:d,pagination:p,query:h,resourcePathsType:"aws",selectedItems:u,showBulkSelect:!0,showExport:!0,showFilter:!0,tagReport:g,tagReportPathsType:he})}}const me=(0,b.X1)(((e,t)=>{const s=(0,o.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0});return{queryString:s,orgReport:le.zE.selectOrg(e,de,pe,s),orgReportFetchStatus:le.zE.selectOrgFetchStatus(e,de,pe,s),tagReport:ne.ux.selectTag(e,he,ue,s),tagReportFetchStatus:ne.ux.selectTagFetchStatus(e,he,ue,s)}})),ye={fetchOrg:le.Lp.T7,fetchTag:ne.xr.Xt},Se=(0,v.connect)(me,ye)(ge),fe=(0,f.ZP)(Se),ve={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:{},group_by:{account:"*"},order_by:{cost:"desc"}},be="cost",Ee="aws";class Oe extends S().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,s=_(e.group_by),r=(0,u.qV)(e)||s;return(0,B.c)({report:t,idKey:r===i.dV?"org_entities":r})},this.getExportModal=e=>{const{isAllSelected:t,isExportModalOpen:s,selectedItems:r}=this.state,{query:o,report:a}=this.props,l=_(o.group_by),n=(0,u.qV)(o),c=a&&a.meta?a.meta.count:0,d=[];return r.map((e=>{e.label!==`no-${l}`&&e.label!==`no-${n}`&&d.push(e)})),S().createElement(h.X,{isAllItems:(t||r.length===c)&&e.length>0,groupBy:n?`${i.P}${n}`:l,isOpen:s,items:d,onClose:this.handleExportModalClose,query:o,reportPathsType:Ee})},this.getPagination=(e=!1)=>{const{report:t}=this.props,s=t&&t.meta?t.meta.count:0,o=t&&t.meta&&t.meta.filter&&t.meta.filter.limit?t.meta.filter.limit:ve.filter.limit,a=(t&&t.meta&&t.meta.filter&&t.meta.filter.offset?t.meta.filter.offset:ve.filter.offset)/o+1;return S().createElement(r.Pagination,{isCompact:!e,itemCount:s,onPerPageSelect:this.handlePerPageSelect,onSetPage:this.handleSetPage,page:a,perPage:o,variant:e?r.PaginationVariant.bottom:r.PaginationVariant.top,widgetId:"`pagination${isBottom ? '-bottom' : ''}`"})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:s}=this.props,{isAllSelected:r,selectedItems:o}=this.state,a=_(e.group_by),l=(0,u.qV)(e);return S().createElement(ae,{groupBy:l?`${i.P}${l}`:a,isAllSelected:r,isLoading:1===s,onSelected:this.handleSelected,onSort:this.handleSort,query:e,report:t,selectedItems:o})},this.getToolbar=e=>{const{query:t,report:s}=this.props,{isAllSelected:r,selectedItems:o}=this.state,a=_(t.group_by),l=(0,u.qV)(t),n=s&&s.meta?s.meta.count:0;return S().createElement(fe,{groupBy:l?`${i.P}${l}`:a,isAllSelected:r,isExportDisabled:0===e.length||!r&&0===o.length,itemsPerPage:e.length,itemsTotal:n,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:this.handleFilterAdded,onFilterRemoved:this.handleFilterRemoved,pagination:this.getPagination(),query:t,selectedItems:o})},this.handleCostTypeSelected=e=>{const{history:t,query:s}=this.props,r=Object.assign(Object.assign({},JSON.parse(JSON.stringify(s))),{cost_type:e});t.replace(this.getRouteForQuery(r,!1))},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleFilterAdded=(e,t)=>{const{history:s,query:r}=this.props,o=(0,m.W)(r,e,t);s.replace(this.getRouteForQuery(o,!0))},this.handleFilterRemoved=(e,t)=>{const{history:s,query:r}=this.props,o=(0,m.U)(r,e,t);s.replace(this.getRouteForQuery(o,!0))},this.handleGroupBySelected=e=>{const{history:t,query:s}=this.props;let r=e,o="*";-1!==e.indexOf(i.dV)&&(r=i.dV.substring(0,i.dV.length),o=e.slice(i.dV.length));const a=Object.assign(Object.assign({},JSON.parse(JSON.stringify(s))),{group_by:{[r]:o},order_by:{cost:"desc"}});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{t.replace(this.getRouteForQuery(a,!0))}))},this.handlePerPageSelect=(e,t)=>{const{history:s,query:r}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(r)));o.filter=Object.assign(Object.assign({},r.filter),{limit:t});const a=this.getRouteForQuery(o,!0);s.replace(a)},this.handleSelected=(e,t=!1)=>{const{isAllSelected:s,selectedItems:r}=this.state;let o=[...s?this.getComputedItems():r];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.handleSetPage=(e,t)=>{const{history:s,query:r,report:o}=this.props,a=o&&o.meta&&o.meta.filter&&o.meta.filter.limit?o.meta.filter.limit:ve.filter.limit,i=t*a-a,l=Object.assign({},JSON.parse(JSON.stringify(r)));l.filter=Object.assign(Object.assign({},r.filter),{offset:i});const n=this.getRouteForQuery(l);s.replace(n)},this.handleSort=(e,t)=>{const{history:s,query:r}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(r)));o.order_by={},o.order_by[e]=t?"asc":"desc";const a=this.getRouteForQuery(o);s.replace(a)},this.updateReport=()=>{const{query:e,location:t,fetchReport:s,history:r,queryString:o}=this.props;t.search?s(Ee,be,o):r.replace(this.getRouteForQuery({filter_by:e?e.filter_by:void 0,group_by:e?e.group_by:void 0,order_by:{cost:"desc"}}))},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleFilterAdded=this.handleFilterAdded.bind(this),this.handleFilterRemoved=this.handleFilterRemoved.bind(this),this.handlePerPageSelect=this.handlePerPageSelect.bind(this),this.handleSelected=this.handleSelected.bind(this),this.handleSetPage=this.handleSetPage.bind(this),this.handleSort=this.handleSort.bind(this)}componentDidMount(){const{resetState:e}=this.props;e(),this.updateReport()}componentDidUpdate(e,t){const{location:s,report:r,reportError:o,queryString:a}=this.props,{selectedItems:i}=this.state,l=e.queryString!==a,n=!r&&!o,c=!s.search,d=t.selectedItems!==i;(l||n||c||d)&&this.updateReport()}getRouteForQuery(e,t=!1){const{history:s}=this.props;return t&&(e.filter=Object.assign(Object.assign({},e.filter),{offset:ve.filter.offset})),`${s.location.pathname}?${(0,o.IV)(e)}`}render(){const{providers:e,providersFetchStatus:t,query:s,report:r,reportError:o,reportFetchStatus:a,intl:i}=this.props,h=_(s.group_by),u=this.getComputedItems(),m=i.formatMessage(l.Z.AWSDetailsTitle);if(o)return S().createElement(p.Z,{title:m});if(1===t&&1===a)return S().createElement(n.Z,{title:m});if(2===t&&2===a){if(e&&e.meta&&0===e.meta.count&&2===t)return S().createElement(d.Z,{providerType:"aws",title:m});if(!(0,g.g8)(e))return S().createElement(c.Z,{title:m})}return S().createElement("div",{style:C.awsDetails},S().createElement(N,{groupBy:h,onCostTypeSelected:this.handleCostTypeSelected,onGroupBySelected:this.handleGroupBySelected,report:r}),S().createElement("div",{style:C.content},this.getToolbar(u),this.getExportModal(u),1===a?S().createElement(n.Z,null):S().createElement(S().Fragment,null,S().createElement("div",{style:C.tableContainer},this.getTable()),S().createElement("div",{style:C.paginationContainer},S().createElement("div",{style:C.pagination},this.getPagination(!0))))))}}const Pe=(0,b.X1)(((e,t)=>{const s=(0,o.mB)(location.search),r={delta:"cost",filter:Object.assign(Object.assign({},ve.filter),s.filter),filter_by:s.filter_by||ve.filter_by,group_by:s.group_by||ve.group_by,order_by:s.order_by||ve.order_by},i=(0,o.pm)(r),l=O.ZV.selectReport(e,Ee,be,i),n=O.ZV.selectReportError(e,Ee,be,i),c=O.ZV.selectReportFetchStatus(e,Ee,be,i),d=(0,a.H)(E.JL);return{providers:E.aX.selectProviders(e,"aws",d),providersFetchStatus:E.aX.selectProvidersFetchStatus(e,"aws",d),query:r,queryString:i,report:l,reportError:n,reportFetchStatus:c}})),_e={fetchReport:O.nx.fetchReport,resetState:P.Aw.oA},Be=(0,f.ZP)((0,v.connect)(Pe,_e)(Oe))}}]);
//# sourceMappingURL=264f23e776ab0b07d4a5.bundle.js.map