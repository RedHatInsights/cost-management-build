"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[373],{37692:(e,t,s)=>{s.r(t),s.d(t,{default:()=>x});var r=s(95078),o=s(86208),a=s(45997),l=s(93952),i=s(91027),n=s(23246),c=s(94329),d=s(92950),p=s.n(d),h=s(74806),u=s(98147),g=s(28259),m=s(94377),y=s(45235),S=s(42581),f=s(37530),v=s(6827),b=s(17287);const E=(0,m.X1)(((e,t)=>({selectWidgets:b.XL.selectWidgets(e),widgets:b.XL.selectCurrentWidgets(e)}))),O=(0,h.ZP)((0,u.connect)(E,{})(v.X));var P=s(97518),_=s(17303);const B=(0,m.X1)(((e,t)=>({selectWidgets:_.Vf.selectWidgets(e),widgets:_.Vf.selectCurrentWidgets(e)}))),T=(0,h.ZP)((0,u.connect)(B,{})(P.f)),Z=g.Hb.awsDetails,R="cost",C="aws",F=(0,m.X1)(((e,t)=>{const s=(0,r.mB)(location.search),i=(0,n.OA)(s),d=i?a.dV:(0,n.VL)(s),h=i||(0,n.pe)(s),u={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign(Object.assign({},s&&s.filter_by&&s.filter_by),d&&{[d]:void 0}),s&&s.filter&&s.filter.account&&{[`${a.Sq}account`]:s.filter.account}),group_by:Object.assign({},d&&{[d]:h}),cost_type:s.cost_type||(0,f.uY)()},g=(0,r.pm)(u),m=S.ZV.selectReport(e,C,R,g),v=S.ZV.selectReportError(e,C,R,g),b=S.ZV.selectReportFetchStatus(e,C,R,g),E=(0,o.H)(y.NT),P=y.aX.selectProviders(e,"all",E),_=y.aX.selectProvidersError(e,"all",E),B=y.aX.selectProvidersFetchStatus(e,"all",E),F=(0,f.uY)();return{costOverviewComponent:p().createElement(O,{costType:F,groupBy:d,query:s,report:m}),description:s[a.eG],detailsURL:Z,emptyStateTitle:t.intl.formatMessage(l.Z.AWSDetailsTitle),groupBy:d,groupByValue:h,historicalDataComponent:p().createElement(T,{costType:F}),providers:(0,c.BV)(P,"aws"),providersError:_,providersFetchStatus:B,providerType:"aws",query:s,queryString:g,report:m,reportError:v,reportFetchStatus:b,reportType:R,reportPathsType:C,showCostType:!0,tagReportPathsType:"aws",title:s[a.yG]?s[a.yG]:h}})),w={fetchReport:S.nx.fetchReport},x=(0,h.ZP)((0,u.connect)(F,w)(i.Z))},22452:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Te});var r=s(35021),o=s(95078),a=s(86208),l=s(45997),i=s(93952),n=s(73466),c=s(16679),d=s(32605),p=s(81787),h=s(46774),u=s(23246),g=s(94329),m=s(8091),y=s(92950),S=s.n(y),f=s(74806),v=s(98147),b=s(94377),E=s(45235),O=s(42581);function P(e={}){return e.account?"account":e.org_unit_id?"org_unit_id":e.region?"region":e.service?"service":"date"}var _=s(31447),B=s(37530),T=s(49382),Z=s(98499),R=s(32412);const C={awsDetails:{minHeight:"100%"},content:{paddingBottom:Z.ZP.value,paddingTop:Z.ZP.value},paginationContainer:{marginLeft:Z.ZP.value,marginRight:Z.ZP.value},pagination:{backgroundColor:T.ZP.value,paddingBottom:R.ZP.value,paddingTop:R.ZP.value},tableContainer:{marginLeft:Z.ZP.value,marginRight:Z.ZP.value}};var F=s(36613),w=s(91616),x=s(96908),M=s(2088),q=s(33307),A=s(41251),k=s(99291),D=s(33605),V=s(54881),j=s(48196);const I={costValue:{marginTop:Z.ZP.var,marginBottom:0},costLabelUnit:{fontSize:V.ZP.value,color:D.ZP.var},costType:{display:"flex",marginLeft:R.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:T.ZP.var,padding:Z.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},title:{paddingBottom:j.ZP.var}},X={delta:"cost",filter:{time_scope_units:"month",time_scope_value:-1,resolution:"monthly"}},N=[{label:"account",value:"account"},{label:"service",value:"service"},{label:"region",value:"region"}];class $ extends S().Component{constructor(){super(...arguments),this.handleCostTypeSelected=e=>{const{onCostTypeSelected:t}=this.props;t&&t(e)}}render(){const{groupBy:e,onGroupBySelected:t,providers:s,providersError:o,report:a,intl:l}=this.props,n=a&&!o&&s&&s.meta&&s.meta.count>0,c=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total;return S().createElement("header",{style:I.header},S().createElement("div",{style:I.headerContent},S().createElement(r.Title,{headingLevel:"h1",style:I.title,size:r.TitleSizes["2xl"]},l.formatMessage(i.Z.AWSDetailsTitle)),S().createElement("div",{style:I.headerContentRight},(0,A.K)("currency")&&S().createElement(w.F,null),(0,A.K)("exports")&&S().createElement(F.b,null))),S().createElement("div",{style:I.headerContent},S().createElement("div",{style:I.headerContentLeft},S().createElement(M.X,{getIdKeyForGroupBy:P,groupBy:e,isDisabled:!n,onSelected:t,options:N,orgReportPathsType:"aws",showOrgs:!0,showTags:!0,tagReportPathsType:"aws"}),S().createElement("div",{style:I.costType},S().createElement(x.T,{onSelect:this.handleCostTypeSelected}))),Boolean(n)&&S().createElement("div",null,S().createElement(r.Title,{headingLevel:"h2",style:I.costValue,size:r.TitleSizes["4xl"]},(0,k.xG)(c?a.meta.total.cost.total.value:0,c?a.meta.total.cost.total.units:"USD")),S().createElement("div",{style:I.dateTitle},(0,q.J4)()))))}}const L=(0,b.X1)(((e,t)=>{const s=(0,o.pm)(X),r=(0,a.H)(E.NT),l=E.aX.selectProviders(e,"all",r),i=E.aX.selectProvidersError(e,"all",r),n=E.aX.selectProvidersFetchStatus(e,"all",r);return{providers:(0,g.BV)(l,"aws"),providersError:i,providersFetchStatus:n,queryString:s}})),J=(0,f.ZP)((0,v.connect)(L,{})($));var G=s(52636),W=s(99089),z=s(93529),Q=s(2664),U=s(80878),H=s(88268),K=s(73727),Y=s(28259),ee=s(12289),te=s(40794),se=s(11331),re=s(73861);const oe={emptyState:{backgroundColor:T.ZP.value,display:"flex",justifyContent:"center",paddingTop:se.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:re.ZP.value},infoDescription:{color:ee.ZP.value,fontSize:te.ZP.value}};class ae extends S().Component{constructor(e){super(e),this.state={columns:[],rows:[]},this.initDatum=()=>{const{isAllSelected:e,query:t,report:s,selectedItems:o,intl:a}=this.props;if(!t||!s)return;const n=P(t.group_by),c=(0,u.OA)(t),d=(0,u.qV)(t),p=[],h=(0,_.c)({report:s,idKey:d||(c?"org_entities":n)}),g=d||c?[{title:c?a.formatMessage(i.Z.Names,{count:2}):a.formatMessage(i.Z.TagNames)},{title:a.formatMessage(i.Z.MonthOverMonthChange)},Object.assign({orderBy:"cost",title:a.formatMessage(i.Z.Cost)},h.length&&{transforms:[W.sortable]}),{title:""}]:[Object.assign({orderBy:"account"===n?"account_alias":n,title:a.formatMessage(i.Z.DetailsResourceNames,{value:n})},h.length&&{transforms:[W.sortable]}),{title:a.formatMessage(i.Z.MonthOverMonthChange)},Object.assign({orderBy:"cost",title:a.formatMessage(i.Z.Cost)},h.length&&{transforms:[W.sortable]}),{title:""}];h.map(((s,r)=>{const a=s&&s.label&&null!==s.label?s.label:"",i=this.getMonthOverMonthCost(s,r),h=this.getTotalCost(s,r),g=this.getActions(s,r);let m=S().createElement(K.rU,{to:(0,H.Z)({basePath:Y.Hb.awsDetailsBreakdown,description:s.id,groupBy:d?`${l.P}${d}`:n,groupByOrg:c,id:s.id,orgUnitId:(0,u.OA)(t),query:t,title:s.label,type:s.type})},a);const y=!(a===`no-${n}`||a===`no-${d}`);y||(m=a);const f=s.id&&s.id!==s.label?S().createElement("div",{style:oe.infoDescription},s.id):null;p.push({cells:[{title:S().createElement("div",null,m,f)},{title:S().createElement("div",null,i)},{title:S().createElement("div",null,h)},{title:S().createElement("div",null,g)}],disableSelection:!y,item:s,selected:e||o&&void 0!==o.find((e=>e.id===s.id))})}));const m=[{heightAuto:!0,cells:[{props:{colSpan:5},title:S().createElement(r.Bullseye,null,S().createElement("div",{style:{textAlign:"center"}},S().createElement(r.Spinner,{size:"xl"})))}]}];this.setState({columns:g,loadingRows:m,rows:p,sortBy:{}})},this.getActions=(e,t,s=!1)=>{const{groupBy:r,query:o}=this.props;return S().createElement(U.e,{groupBy:r,isDisabled:s,item:e,query:o,reportPathsType:"aws"})},this.getEmptyState=()=>{const{query:e,intl:t}=this.props;for(const t of Object.values(e.filter_by))if("*"!==t)return S().createElement(z.c,{filter:t,showMargin:!1});return S().createElement(r.EmptyState,null,S().createElement(r.EmptyStateIcon,{icon:G.Xk}),S().createElement(r.EmptyStateBody,null,t.formatMessage(i.Z.DetailsEmptyState)))},this.getMonthOverMonthCost=(e,t)=>{const{intl:s}=this.props,r=(0,k.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),o=null!==e.delta_percent?(0,k.rl)(Math.abs(e.delta_percent)):0,a=!(0===o||"0.00"===o),l=null!==e.delta_percent;let n;return a&&(n="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(n+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(n+=" increase")),l?S().createElement("div",{className:"monthOverMonthOverride"},S().createElement("div",{className:n,key:`month-over-month-cost-${t}`},a?s.formatMessage(i.Z.Percent,{value:o}):S().createElement(Q.L,null),Boolean(a&&null!==e.delta_percent&&e.delta_value>0)&&S().createElement("span",{className:"fa fa-sort-up",style:oe.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(a&&null!==e.delta_percent&&e.delta_value<0)&&S().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},oe.infoArrow),oe.infoArrowDesc),key:`month-over-month-icon-${t}`})),S().createElement("div",{style:oe.infoDescription,key:`month-over-month-info-${t}`},(0,q.Y)(r))):(0,q.Tf)()},this.getSortBy=()=>{const{query:e}=this.props,{columns:t}=this.state;let s=-1,r=W.SortByDirection.asc;for(const o of Object.keys(e.order_by)){let a=0;for(const l of t){if(l.orderBy===o){r="asc"===e.order_by[o]?W.SortByDirection.asc:W.SortByDirection.desc,s=a+1;break}a++}}return s>-1?{index:s,direction:r}:{}},this.getTotalCost=(e,t)=>{const{report:s,intl:r}=this.props,o=s&&s.meta&&s.meta.total&&s.meta.total.cost&&s.meta.total.cost.total?s.meta.total.cost.total.value:0,a=0===o?o.toFixed(2):(e.cost.total.value/o*100).toFixed(2);return S().createElement(S().Fragment,null,(0,k.xG)(e.cost.total.value,e.cost.total.units),S().createElement("div",{style:oe.infoDescription,key:`total-cost-${t}`},r.formatMessage(i.Z.PercentOfCost,{value:a})))},this.handleOnSelect=(e,t,s)=>{const{onSelected:r}=this.props;let o,a=[];-1===s?o=this.state.rows.map((e=>(e.selected=t,e))):(o=[...this.state.rows],o[s].selected=t,a=[o[s].item]),this.setState({rows:o},(()=>{r&&r(a,t)}))},this.handleOnSort=(e,t,s)=>{const{onSort:r}=this.props,{columns:o}=this.state;r&&r(o[t-1].orderBy,s===W.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{query:t,report:s,selectedItems:r}=this.props,a=s&&s.data?JSON.stringify(s.data):"",l=e.report&&e.report.data?JSON.stringify(e.report.data):"";(0,o.pm)(e.query)===(0,o.pm)(t)&&l===a&&e.selectedItems===r||this.initDatum()}render(){const{intl:e,isLoading:t}=this.props,{columns:s,loadingRows:r,rows:o}=this.state;return S().createElement(S().Fragment,null,S().createElement(W.Table,{"aria-label":e.formatMessage(i.Z.AWSDetailsTableAriaLabel),canSelectAll:!1,cells:s,className:"tableOverride",rows:t?r:o,sortBy:this.getSortBy(),onSelect:t?void 0:this.handleOnSelect,onSort:this.handleOnSort,gridBreakPoint:"grid-2xl"},S().createElement(W.TableHeader,null),S().createElement(W.TableBody,null)),Boolean(0===o.length)&&S().createElement("div",{style:oe.emptyState},this.getEmptyState()))}}const le=(0,f.ZP)(ae);var ie=s(36935),ne=s(38434),ce=s(28631),de=s(19853);const pe="aws",he="org",ue="aws",ge="tag";class me extends S().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,orgReport:t,tagReport:s}=this.props,r=[{name:e.formatMessage(i.Z.FilterByValues,{value:"account"}),key:"account"},{name:e.formatMessage(i.Z.FilterByValues,{value:"service"}),key:"service"},{name:e.formatMessage(i.Z.FilterByValues,{value:"region"}),key:"region"}];return t&&t.data&&t.data.length&&r.push({name:e.formatMessage(i.Z.FilterByValues,{value:"org_unit_id"}),key:l.dV}),s&&s.data&&s.data.length&&r.push({name:e.formatMessage(i.Z.FilterByValues,{value:"tag"}),key:l.up}),r}}componentDidMount(){const{fetchOrg:e,fetchTag:t,orgReportFetchStatus:s,queryString:r,tagReportFetchStatus:o}=this.props;this.setState({categoryOptions:this.getCategoryOptions()},(()=>{1!==s&&e(pe,he,r),1!==o&&t(ue,ge,r)}))}componentDidUpdate(e){const{fetchOrg:t,fetchTag:s,orgReport:r,orgReportFetchStatus:o,query:a,queryString:l,tagReport:i,tagReportFetchStatus:n}=this.props;(0,de.X)(r,e.orgReport)&&(0,de.X)(i,e.tagReport)?a&&!(0,de.X)(a,e.query)&&(1!==o&&t(pe,he,l),1!==n&&s(ue,ge,l)):this.setState({categoryOptions:this.getCategoryOptions()},(()=>{1!==o&&t(pe,he,l),1!==n&&s(ue,ge,l)}))}render(){const{groupBy:e,isAllSelected:t,isBulkSelectDisabled:s,isExportDisabled:r,itemsPerPage:o,itemsTotal:a,onBulkSelected:l,onExportClicked:i,onFilterAdded:n,onFilterRemoved:c,orgReport:d,pagination:p,query:h,selectedItems:u,tagReport:g}=this.props,{categoryOptions:m}=this.state;return S().createElement(ie.k,{categoryOptions:m,groupBy:e,isAllSelected:t,isBulkSelectDisabled:s,isExportDisabled:r,itemsPerPage:o,itemsTotal:a,onBulkSelected:l,onExportClicked:i,onFilterAdded:n,onFilterRemoved:c,orgReport:d,pagination:p,query:h,resourcePathsType:"aws",selectedItems:u,showBulkSelect:!0,showExport:!0,showFilter:!0,tagReport:g,tagReportPathsType:ue})}}const ye=(0,b.X1)(((e,t)=>{const s=(0,o.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0});return{queryString:s,orgReport:ne.zE.selectOrg(e,pe,he,s),orgReportFetchStatus:ne.zE.selectOrgFetchStatus(e,pe,he,s),tagReport:ce.ux.selectTag(e,ue,ge,s),tagReportFetchStatus:ce.ux.selectTagFetchStatus(e,ue,ge,s)}})),Se={fetchOrg:ne.Lp.T7,fetchTag:ce.xr.Xt},fe=(0,v.connect)(ye,Se)(me),ve=(0,f.ZP)(fe),be={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:{},group_by:{account:"*"},order_by:{cost:"desc"}},Ee="cost",Oe="aws";class Pe extends S().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,s=P(e.group_by),r=(0,u.qV)(e)||s;return(0,_.c)({report:t,idKey:r===l.dV?"org_entities":r})},this.getExportModal=e=>{const{isAllSelected:t,isExportModalOpen:s,selectedItems:r}=this.state,{query:o,report:a}=this.props,i=P(o.group_by),n=(0,u.qV)(o),c=a&&a.meta?a.meta.count:0,d=[];return r.map((e=>{e.label!==`no-${i}`&&e.label!==`no-${n}`&&d.push(e)})),S().createElement(h.X,{count:t?c:d.length,isAllItems:(t||r.length===c)&&e.length>0,groupBy:n?`${l.P}${n}`:i,isOpen:s,items:d,onClose:this.handleExportModalClose,query:o,reportPathsType:Oe})},this.getPagination=(e=!1)=>{const{report:t}=this.props,s=t&&t.meta?t.meta.count:0,o=t&&t.meta&&t.meta.filter&&t.meta.filter.limit?t.meta.filter.limit:be.filter.limit,a=(t&&t.meta&&t.meta.filter&&t.meta.filter.offset?t.meta.filter.offset:be.filter.offset)/o+1;return S().createElement(r.Pagination,{isCompact:!e,itemCount:s,onPerPageSelect:this.handlePerPageSelect,onSetPage:this.handleSetPage,page:a,perPage:o,variant:e?r.PaginationVariant.bottom:r.PaginationVariant.top,widgetId:"`pagination${isBottom ? '-bottom' : ''}`"})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:s}=this.props,{isAllSelected:r,selectedItems:o}=this.state,a=P(e.group_by),i=(0,u.qV)(e);return S().createElement(le,{groupBy:i?`${l.P}${i}`:a,isAllSelected:r,isLoading:1===s,onSelected:this.handleSelected,onSort:this.handleSort,query:e,report:t,selectedItems:o})},this.getToolbar=e=>{const{query:t,report:s}=this.props,{isAllSelected:r,selectedItems:o}=this.state,a=P(t.group_by),i=(0,u.qV)(t),n=s&&s.meta?s.meta.count:0;return S().createElement(ve,{groupBy:i?`${l.P}${i}`:a,isAllSelected:r,isExportDisabled:0===e.length||!r&&0===o.length,itemsPerPage:e.length,itemsTotal:n,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:this.handleFilterAdded,onFilterRemoved:this.handleFilterRemoved,pagination:this.getPagination(),query:t,selectedItems:o})},this.handleCostTypeSelected=e=>{const{history:t,query:s}=this.props,r=Object.assign(Object.assign({},JSON.parse(JSON.stringify(s))),{cost_type:e});t.replace(this.getRouteForQuery(r,!1))},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleFilterAdded=(e,t)=>{const{history:s,query:r}=this.props,o=(0,m.W)(r,e,t);s.replace(this.getRouteForQuery(o,!0))},this.handleFilterRemoved=(e,t)=>{const{history:s,query:r}=this.props,o=(0,m.U)(r,e,t);s.replace(this.getRouteForQuery(o,!0))},this.handleGroupBySelected=e=>{const{history:t,query:s}=this.props;let r=e,o="*";-1!==e.indexOf(l.dV)&&(r=l.dV.substring(0,l.dV.length),o=e.slice(l.dV.length));const a=Object.assign(Object.assign({},JSON.parse(JSON.stringify(s))),{group_by:{[r]:o},order_by:{cost:"desc"}});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{t.replace(this.getRouteForQuery(a,!0))}))},this.handlePerPageSelect=(e,t)=>{const{history:s,query:r}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(r)));o.filter=Object.assign(Object.assign({},r.filter),{limit:t});const a=this.getRouteForQuery(o,!0);s.replace(a)},this.handleSelected=(e,t=!1)=>{const{isAllSelected:s,selectedItems:r}=this.state;let o=[...s?this.getComputedItems():r];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.handleSetPage=(e,t)=>{const{history:s,query:r,report:o}=this.props,a=o&&o.meta&&o.meta.filter&&o.meta.filter.limit?o.meta.filter.limit:be.filter.limit,l=t*a-a,i=Object.assign({},JSON.parse(JSON.stringify(r)));i.filter=Object.assign(Object.assign({},r.filter),{offset:l});const n=this.getRouteForQuery(i);s.replace(n)},this.handleSort=(e,t)=>{const{history:s,query:r}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(r)));o.order_by={},o.order_by[e]=t?"asc":"desc";const a=this.getRouteForQuery(o);s.replace(a)},this.updateReport=()=>{const{query:e,location:t,fetchReport:s,history:r,queryString:o}=this.props;t.search?s(Oe,Ee,o):r.replace(this.getRouteForQuery({filter_by:e?e.filter_by:void 0,group_by:e?e.group_by:void 0,order_by:{cost:"desc"},cost_type:e?e.cost_type:(0,B.uY)()}))},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleFilterAdded=this.handleFilterAdded.bind(this),this.handleFilterRemoved=this.handleFilterRemoved.bind(this),this.handlePerPageSelect=this.handlePerPageSelect.bind(this),this.handleSelected=this.handleSelected.bind(this),this.handleSetPage=this.handleSetPage.bind(this),this.handleSort=this.handleSort.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{location:s,report:r,reportError:o,queryString:a}=this.props,{selectedItems:l}=this.state,i=e.queryString!==a,n=!r&&!o,c=!s.search,d=t.selectedItems!==l;(i||n||c||d)&&this.updateReport()}getRouteForQuery(e,t=!1){const{history:s}=this.props;return t&&(e.filter=Object.assign(Object.assign({},e.filter),{offset:be.filter.offset})),`${s.location.pathname}?${(0,o.IV)(e)}`}render(){const{providers:e,providersFetchStatus:t,query:s,report:r,reportError:o,reportFetchStatus:a,intl:l}=this.props,h=P(s.group_by),u=this.getComputedItems(),m=l.formatMessage(i.Z.AWSDetailsTitle);if(o)return S().createElement(p.Z,{title:m});if(1===t)return S().createElement(n.Z,{title:m});if(2===t){if(e&&e.meta&&0===e.meta.count)return S().createElement(d.Z,{providerType:"aws",title:m});if(!(0,g.g8)(e))return S().createElement(c.Z,{title:m})}return S().createElement("div",{style:C.awsDetails},S().createElement(J,{groupBy:h,onCostTypeSelected:this.handleCostTypeSelected,onGroupBySelected:this.handleGroupBySelected,report:r}),S().createElement("div",{style:C.content},this.getToolbar(u),this.getExportModal(u),1===a?S().createElement(n.Z,null):S().createElement(S().Fragment,null,S().createElement("div",{style:C.tableContainer},this.getTable()),S().createElement("div",{style:C.paginationContainer},S().createElement("div",{style:C.pagination},this.getPagination(!0))))))}}const _e=(0,b.X1)(((e,t)=>{const s=(0,o.mB)(location.search),r={delta:"cost",filter:Object.assign(Object.assign({},be.filter),s.filter),filter_by:s.filter_by||be.filter_by,group_by:s.group_by||be.group_by,order_by:s.order_by||be.order_by,cost_type:s.cost_type||(0,B.uY)()},l=(0,o.pm)(r),i=O.ZV.selectReport(e,Oe,Ee,l),n=O.ZV.selectReportError(e,Oe,Ee,l),c=O.ZV.selectReportFetchStatus(e,Oe,Ee,l),d=(0,a.H)(E.NT),p=E.aX.selectProviders(e,"all",d),h=E.aX.selectProvidersError(e,"all",d),u=E.aX.selectProvidersFetchStatus(e,"all",d);return{providers:(0,g.BV)(p,"aws"),providersError:h,providersFetchStatus:u,query:r,queryString:l,report:i,reportError:n,reportFetchStatus:c}})),Be={fetchReport:O.nx.fetchReport},Te=(0,f.ZP)((0,v.connect)(_e,Be)(Pe))},91027:(e,t,s)=>{s.d(t,{Z:()=>r});const r=s(36928).Z}}]);
//# sourceMappingURL=0c0d6b87e7f14b36549e.bundle.js.map