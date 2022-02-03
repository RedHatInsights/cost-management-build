"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[318],{8124:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var s=r(90179),o=r(86208),l=r(45997),i=r(93952),a=r(36928),n=r(23246),c=r(94329),d=r(97522),p=r.n(d),h=r(74806),u=r(43476),m=r(28259),g=r(94377),y=r(45235),f=r(42581),S=r(6827),v=r(48336);const b=(0,g.X1)(((e,t)=>({selectWidgets:v.Gl.selectWidgets(e),widgets:v.Gl.selectCurrentWidgets(e)}))),E=(0,h.ZP)((0,u.connect)(b,{})(S.X));var P=r(45572),O=r(75036);const B=(0,g.X1)(((e,t)=>({selectWidgets:O.D.selectWidgets(e),widgets:O.D.selectCurrentWidgets(e)}))),_=(0,h.ZP)((0,u.connect)(B,{})(P.f)),Z=m.Hb.ibmDetails,F="cost",M="gcp",C=(0,g.X1)(((e,t)=>{const r=(0,s.mB)(location.search),a=(0,n.VL)(r),d=(0,n.pe)(r),h={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign({},r&&r.filter_by&&r.filter_by),a&&{[a]:void 0}),group_by:Object.assign({},a&&{[a]:d})},u=(0,s.pm)(h),m=f.ZV.selectReport(e,M,F,u),g=f.ZV.selectReportError(e,M,F,u),S=f.ZV.selectReportFetchStatus(e,M,F,u),v=(0,o.H)(y.NT),b=y.aX.selectProviders(e,"all",v),P=y.aX.selectProvidersError(e,"all",v),O=y.aX.selectProvidersFetchStatus(e,"all",v);return{costOverviewComponent:p().createElement(E,{groupBy:a,query:r,report:m}),description:r[l.eG],detailsURL:Z,emptyStateTitle:t.intl.formatMessage(i.Z.IBMDetailsTitle),groupBy:a,groupByValue:d,historicalDataComponent:p().createElement(_,null),providers:(0,c.BV)(b,"ibm"),providersError:P,providersFetchStatus:O,providerType:"ibm",query:r,queryString:u,report:m,reportError:g,reportFetchStatus:S,reportType:F,reportPathsType:M,tagReportPathsType:"gcp",title:r[l.yG]?r[l.yG]:d}})),T={fetchReport:f.nx.fetchReport},x=(0,h.ZP)((0,u.connect)(C,T)(a.Z))},36711:(e,t,r)=>{r.r(t),r.d(t,{default:()=>be});var s=r(79552),o=r(90179),l=r(86208),i=r(45997),a=r(93952),n=r(73466),c=r(16679),d=r(13883),p=r(81787),h=r(46774),u=r(23246),m=r(94329),g=r(8091),y=r(97522),f=r.n(y),S=r(74806),v=r(43476),b=r(94377),E=r(45235),P=r(42581);function O(e={}){return e.account?"account":e.instance_type?"instance_type":e.project?"project":e.region?"region":e.service?"service":"date"}var B=r(31447),_=r(16791),Z=r(2088),F=r(33307),M=r(41251),C=r(99291),T=r(49382),x=r(33605),R=r(54881),q=r(98499),k=r(48196);const D={costValue:{marginTop:q.ZP.var,marginBottom:0},costLabelUnit:{fontSize:R.ZP.value,color:x.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:T.ZP.var,padding:q.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},title:{paddingBottom:k.ZP.var}},A={delta:"cost",filter:{time_scope_units:"month",time_scope_value:-1,resolution:"monthly"}},j=[{label:"account",value:"account"},{label:"project",value:"project"},{label:"service",value:"service"},{label:"region",value:"region"}];class I extends f().Component{render(){const{groupBy:e,onGroupBySelected:t,providers:r,providersError:o,report:l,intl:i}=this.props,n=l&&!o&&r&&r.meta&&r.meta.count>0,c=l&&l.meta&&l.meta.total&&l.meta.total.cost&&l.meta.total.cost.total;return f().createElement("header",{style:D.header},f().createElement("div",{style:D.headerContent},f().createElement(s.Title,{headingLevel:"h1",style:D.title,size:s.TitleSizes["2xl"]},i.formatMessage(a.Z.IBMDetailsTitle)),(0,M.S)()&&f().createElement(_.F,null)),f().createElement("div",{style:D.headerContent},f().createElement("div",{style:D.headerContentLeft},f().createElement(Z.X,{getIdKeyForGroupBy:O,groupBy:e,isDisabled:!n,onSelected:t,options:j,showTags:!0,tagReportPathsType:"gcp"})),Boolean(n)&&f().createElement("div",null,f().createElement(s.Title,{headingLevel:"h2",style:D.costValue,size:s.TitleSizes["4xl"]},(0,C.xG)(c?l.meta.total.cost.total.value:0,c?l.meta.total.cost.total.units:"USD")),f().createElement("div",{style:D.dateTitle},(0,F.J4)()))))}}const w=(0,b.X1)(((e,t)=>{const r=(0,o.pm)(A),s=(0,l.H)(E.NT),i=E.aX.selectProviders(e,"all",s),a=E.aX.selectProvidersError(e,"all",s),n=E.aX.selectProvidersFetchStatus(e,"all",s);return{providers:(0,m.BV)(i,"ibm"),providersError:a,providersFetchStatus:n,queryString:r}})),V=(0,S.ZP)((0,v.connect)(w,{})(I));var X=r(52636),N=r(86425),$=r(55483),G=r(99163),L=r(80878),J=r(88268),H=r(73727),Q=r(28259),U=r(12289),z=r(40794),W=r(11331),K=r(73861);const Y={emptyState:{backgroundColor:T.ZP.value,display:"flex",justifyContent:"center",paddingTop:W.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:K.ZP.value},infoDescription:{color:U.ZP.value,fontSize:z.ZP.value}};class ee extends f().Component{constructor(e){super(e),this.state={columns:[],rows:[]},this.initDatum=()=>{const{isAllSelected:e,query:t,report:r,selectedItems:o,intl:l}=this.props;if(!t||!r)return;const n=O(t.group_by),c=this.getGroupByTagKey(),d=[],p=(0,B.c)({report:r,idKey:c||n}),h=c?[{title:l.formatMessage(a.Z.TagNames)},{title:l.formatMessage(a.Z.MonthOverMonthChange)},Object.assign({orderBy:"cost",title:l.formatMessage(a.Z.Cost)},p.length&&{transforms:[N.sortable]}),{title:""}]:[Object.assign({orderBy:n,title:l.formatMessage(a.Z.DetailsResourceNames,{value:n})},p.length&&{transforms:[N.sortable]}),{title:l.formatMessage(a.Z.MonthOverMonthChange)},Object.assign({orderBy:"cost",title:l.formatMessage(a.Z.Cost)},p.length&&{transforms:[N.sortable]}),{title:""}];p.map(((r,s)=>{const l=r&&null!==r.label?r.label:"",a=this.getMonthOverMonthCost(r,s),p=this.getTotalCost(r,s),h=this.getActions(r);let u=f().createElement(H.rU,{to:(0,J.T)({basePath:Q.Hb.ibmDetailsBreakdown,label:l.toString(),description:r.id,groupBy:c?`${i.P}${c}`:n,query:t})},l);const m=!(l===`no-${n}`||l===`no-${c}`);m||(u=l);const g=r.id&&r.id!==r.label?f().createElement("div",{style:Y.infoDescription},r.id):null;d.push({cells:[{title:f().createElement("div",null,u,g)},{title:f().createElement("div",null,a)},{title:f().createElement("div",null,p)},{title:f().createElement("div",null,h)}],disableSelection:!m,isOpen:!1,item:r,selected:e||o&&void 0!==o.find((e=>e.id===r.id))})}));const u=[{heightAuto:!0,cells:[{props:{colSpan:5},title:f().createElement(s.Bullseye,null,f().createElement("div",{style:{textAlign:"center"}},f().createElement(s.Spinner,{size:"xl"})))}]}];this.setState({columns:h,loadingRows:u,rows:d,sortBy:{}})},this.getActions=e=>{const{groupBy:t,query:r}=this.props;return f().createElement(L.e,{groupBy:t,item:e,query:r,reportPathsType:"gcp"})},this.getEmptyState=()=>{const{query:e,intl:t}=this.props;for(const t of Object.values(e.filter_by))if("*"!==t)return f().createElement($.c,{filter:t,showMargin:!1});return f().createElement(s.EmptyState,null,f().createElement(s.EmptyStateIcon,{icon:X.Xk}),f().createElement(s.EmptyStateBody,null,t.formatMessage(a.Z.DetailsEmptyState)))},this.getGroupByTagKey=()=>{const{query:e}=this.props;let t;for(const r of Object.keys(e.group_by)){const e=r.indexOf(i.P);if(-1!==e){t=r.substring(e+i.P.length);break}}return t},this.getMonthOverMonthCost=(e,t)=>{const{intl:r}=this.props,s=(0,C.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),o=null!==e.delta_percent?(0,C.rl)(Math.abs(e.delta_percent)):0,l=!(0===o||"0.00"===o),i=null!==e.delta_percent;let n;return l&&(n="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(n+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(n+=" increase")),i?f().createElement("div",{className:"monthOverMonthOverride"},f().createElement("div",{className:n,key:`month-over-month-cost-${t}`},l?r.formatMessage(a.Z.Percent,{value:o}):f().createElement(G.L,null),Boolean(l&&null!==e.delta_percent&&e.delta_value>0)&&f().createElement("span",{className:"fa fa-sort-up",style:Y.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(l&&null!==e.delta_percent&&e.delta_value<0)&&f().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},Y.infoArrow),Y.infoArrowDesc),key:`month-over-month-icon-${t}`})),f().createElement("div",{style:Y.infoDescription,key:`month-over-month-info-${t}`},(0,F.Y)(s))):(0,F.Tf)()},this.getSortBy=()=>{const{query:e}=this.props,{columns:t}=this.state;let r=-1,s=N.SortByDirection.asc;for(const o of Object.keys(e.order_by)){let l=0;for(const i of t){if(i.orderBy===o){s="asc"===e.order_by[o]?N.SortByDirection.asc:N.SortByDirection.desc,r=l+1;break}l++}}return r>-1?{index:r,direction:s}:{}},this.getTotalCost=(e,t)=>{const{report:r,intl:s}=this.props,o=r&&r.meta&&r.meta.total&&r.meta.total.cost&&r.meta.total.cost.total?r.meta.total.cost.total.value:0,l=0===o?o.toFixed(2):(e.cost.total.value/o*100).toFixed(2);return f().createElement(f().Fragment,null,(0,C.xG)(e.cost.total.value,e.cost.total.units),f().createElement("div",{style:Y.infoDescription,key:`total-cost-${t}`},s.formatMessage(a.Z.PercentOfCost,{value:l})))},this.handleOnSelect=(e,t,r)=>{const{onSelected:s}=this.props;let o,l=[];-1===r?o=this.state.rows.map((e=>(e.selected=t,e))):(o=[...this.state.rows],o[r].selected=t,l=[o[r].item]),this.setState({rows:o},(()=>{s&&s(l,t)}))},this.handleOnSort=(e,t,r)=>{const{onSort:s}=this.props,{columns:o}=this.state;s&&s(o[t-1].orderBy,r===N.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{query:t,report:r,selectedItems:s}=this.props,l=r&&r.data?JSON.stringify(r.data):"",i=e.report&&e.report.data?JSON.stringify(e.report.data):"";(0,o.pm)(e.query)===(0,o.pm)(t)&&i===l&&e.selectedItems===s||this.initDatum()}render(){const{intl:e,isLoading:t}=this.props,{columns:r,loadingRows:s,rows:o}=this.state;return f().createElement(f().Fragment,null,f().createElement(N.Table,{"aria-label":e.formatMessage(a.Z.IBMDetailsTableAriaLabel),canSelectAll:!1,cells:r,className:"tableOverride",rows:t?s:o,sortBy:this.getSortBy(),onSelect:t?void 0:this.handleOnSelect,onSort:this.handleOnSort,gridBreakPoint:"grid-2xl"},f().createElement(N.TableHeader,null),f().createElement(N.TableBody,null)),Boolean(0===o.length)&&f().createElement("div",{style:Y.emptyState},this.getEmptyState()))}}const te=(0,S.ZP)(ee);var re=r(36935),se=r(28631),oe=r(19853);const le="tag",ie="gcp";class ae extends f().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,r=[{name:e.formatMessage(a.Z.FilterByValues,{value:"account"}),key:"account"},{name:e.formatMessage(a.Z.FilterByValues,{value:"project"}),key:"project"},{name:e.formatMessage(a.Z.FilterByValues,{value:"service"}),key:"service"},{name:e.formatMessage(a.Z.FilterByValues,{value:"region"}),key:"region"}];return t&&t.data&&t.data.length&&r.push({name:e.formatMessage(a.Z.FilterByValues,{value:i.up}),key:i.up}),r}}componentDidMount(){const{fetchTag:e,queryString:t,tagReportFetchStatus:r}=this.props;this.setState({categoryOptions:this.getCategoryOptions()},(()=>{1!==r&&e(ie,le,t)}))}componentDidUpdate(e){const{fetchTag:t,query:r,queryString:s,tagReport:o,tagReportFetchStatus:l}=this.props;(0,oe.X)(o,e.tagReport)?r&&!(0,oe.X)(r,e.query)&&1!==l&&t(ie,le,s):this.setState({categoryOptions:this.getCategoryOptions()},(()=>{1!==l&&t(ie,le,s)}))}render(){const{groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isExportDisabled:s,itemsPerPage:o,itemsTotal:l,onBulkSelected:i,onExportClicked:a,onFilterAdded:n,onFilterRemoved:c,pagination:d,query:p,selectedItems:h,tagReport:u}=this.props,{categoryOptions:m}=this.state;return f().createElement(re.k,{categoryOptions:m,groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isExportDisabled:s,itemsPerPage:o,itemsTotal:l,onBulkSelected:i,onExportClicked:a,onFilterAdded:n,onFilterRemoved:c,pagination:d,query:p,resourcePathsType:"ibm",selectedItems:h,showBulkSelect:!0,showExport:!0,showFilter:!0,tagReport:u,tagReportPathsType:ie})}}const ne=(0,b.X1)(((e,t)=>{const r=(0,o.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0});return{queryString:r,tagReport:se.ux.selectTag(e,ie,le,r),tagReportFetchStatus:se.ux.selectTagFetchStatus(e,ie,le,r)}})),ce={fetchTag:se.xr.Xt},de=(0,v.connect)(ne,ce)(ae),pe=(0,S.ZP)(de);var he=r(32412);const ue={gcpDetails:{minHeight:"100%"},content:{paddingBottom:q.ZP.value,paddingTop:q.ZP.value},paginationContainer:{marginLeft:q.ZP.value,marginRight:q.ZP.value},pagination:{backgroundColor:T.ZP.value,padding:he.ZP.value},tableContainer:{marginLeft:q.ZP.value,marginRight:q.ZP.value}},me={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:{},group_by:{account:"*"},order_by:{cost:"desc"}},ge="cost",ye="gcp";class fe extends f().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,r=O(e.group_by),s=(0,u.qV)(e);return(0,B.c)({report:t,idKey:s||r})},this.getExportModal=e=>{const{isAllSelected:t,isExportModalOpen:r,selectedItems:s}=this.state,{query:o,report:l}=this.props,a=O(o.group_by),n=(0,u.qV)(o),c=l&&l.meta?l.meta.count:0,d=[];return s.map((e=>{e.label!==`no-${a}`&&e.label!==`no-${n}`&&d.push(e)})),f().createElement(h.X,{isAllItems:(t||s.length===c)&&e.length>0,groupBy:n?`${i.P}${n}`:a,isOpen:r,items:d,onClose:this.handleExportModalClose,query:o,reportPathsType:ye})},this.getPagination=(e=!1)=>{const{report:t}=this.props,r=t&&t.meta?t.meta.count:0,o=t&&t.meta&&t.meta.filter&&t.meta.filter.limit?t.meta.filter.limit:me.filter.limit,l=(t&&t.meta&&t.meta.filter&&t.meta.filter.offset?t.meta.filter.offset:me.filter.offset)/o+1;return f().createElement(s.Pagination,{isCompact:!e,itemCount:r,onPerPageSelect:this.handlePerPageSelect,onSetPage:this.handleSetPage,page:l,perPage:o,variant:e?s.PaginationVariant.bottom:s.PaginationVariant.top,widgetId:"`pagination${isBottom ? '-bottom' : ''}`"})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:r}=this.props,{isAllSelected:s,selectedItems:o}=this.state,l=O(e.group_by),a=(0,u.qV)(e);return f().createElement(te,{groupBy:a?`${i.P}${a}`:l,isAllSelected:s,isLoading:1===r,onSelected:this.handleSelected,onSort:this.handleSort,query:e,report:t,selectedItems:o})},this.getToolbar=e=>{const{query:t,report:r}=this.props,{isAllSelected:s,selectedItems:o}=this.state,l=O(t.group_by),a=(0,u.qV)(t),n=r&&r.meta?r.meta.count:0;return f().createElement(pe,{groupBy:a?`${i.P}${a}`:l,isAllSelected:s,isExportDisabled:0===e.length||!s&&0===o.length,itemsPerPage:e.length,itemsTotal:n,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:this.handleFilterAdded,onFilterRemoved:this.handleFilterRemoved,pagination:this.getPagination(),query:t,selectedItems:o})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleFilterAdded=(e,t)=>{const{history:r,query:s}=this.props,o=(0,g.W)(s,e,t);r.replace(this.getRouteForQuery(o,!0))},this.handleFilterRemoved=(e,t)=>{const{history:r,query:s}=this.props,o=(0,g.U)(s,e,t);r.replace(this.getRouteForQuery(o,!0))},this.handleGroupBySelected=e=>{const{history:t,query:r}=this.props,s=e,o=Object.assign(Object.assign({},JSON.parse(JSON.stringify(r))),{group_by:{[s]:"*"},order_by:{cost:"desc"}});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{t.replace(this.getRouteForQuery(o,!0))}))},this.handlePerPageSelect=(e,t)=>{const{history:r,query:s}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(s)));o.filter=Object.assign(Object.assign({},s.filter),{limit:t});const l=this.getRouteForQuery(o,!0);r.replace(l)},this.handleSelected=(e,t=!1)=>{const{isAllSelected:r,selectedItems:s}=this.state;let o=[...r?this.getComputedItems():s];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.handleSetPage=(e,t)=>{const{history:r,query:s,report:o}=this.props,l=o&&o.meta&&o.meta.filter&&o.meta.filter.limit?o.meta.filter.limit:me.filter.limit,i=t*l-l,a=Object.assign({},JSON.parse(JSON.stringify(s)));a.filter=Object.assign(Object.assign({},s.filter),{offset:i});const n=this.getRouteForQuery(a);r.replace(n)},this.handleSort=(e,t)=>{const{history:r,query:s}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(s)));o.order_by={},o.order_by[e]=t?"asc":"desc";const l=this.getRouteForQuery(o);r.replace(l)},this.updateReport=()=>{const{query:e,location:t,fetchReport:r,history:s,queryString:o}=this.props;t.search?r(ye,ge,o):s.replace(this.getRouteForQuery({filter_by:e?e.filter_by:void 0,group_by:e?e.group_by:void 0,order_by:{cost:"desc"}}))},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleFilterAdded=this.handleFilterAdded.bind(this),this.handleFilterRemoved=this.handleFilterRemoved.bind(this),this.handlePerPageSelect=this.handlePerPageSelect.bind(this),this.handleSelected=this.handleSelected.bind(this),this.handleSetPage=this.handleSetPage.bind(this),this.handleSort=this.handleSort.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{location:r,report:s,reportError:o,queryString:l}=this.props,{selectedItems:i}=this.state,a=e.queryString!==l,n=!s&&!o,c=!r.search,d=t.selectedItems!==i;(a||n||c||d)&&this.updateReport()}getRouteForQuery(e,t=!1){const{history:r}=this.props;return t&&(e.filter=Object.assign(Object.assign({},e.filter),{offset:me.filter.offset})),`${r.location.pathname}?${(0,o.IV)(e)}`}render(){const{providers:e,providersFetchStatus:t,query:r,report:s,reportError:o,reportFetchStatus:l,intl:i}=this.props,h=O(r.group_by),u=this.getComputedItems(),g=i.formatMessage(a.Z.IBMDetailsTitle);if(o)return f().createElement(p.Z,{title:g});if(1===t)return f().createElement(n.Z,{title:g});if(2===t){if(e&&e.meta&&0===e.meta.count)return f().createElement(d.Z,{providerType:"ibm",title:g});if(!(0,m.g8)(e))return f().createElement(c.Z,{title:g})}return f().createElement("div",{style:ue.ibmDetails},f().createElement(V,{groupBy:h,onGroupBySelected:this.handleGroupBySelected,report:s}),f().createElement("div",{style:ue.content},this.getToolbar(u),this.getExportModal(u),1===l?f().createElement(n.Z,null):f().createElement(f().Fragment,null,f().createElement("div",{style:ue.tableContainer},this.getTable()),f().createElement("div",{style:ue.paginationContainer},f().createElement("div",{style:ue.pagination},this.getPagination(!0))))))}}const Se=(0,b.X1)(((e,t)=>{const r=(0,o.mB)(location.search),s={delta:"cost",filter:Object.assign(Object.assign({},me.filter),r.filter),filter_by:r.filter_by||me.filter_by,group_by:r.group_by||me.group_by,order_by:r.order_by||me.order_by},i=(0,o.pm)(s),a=P.ZV.selectReport(e,ye,ge,i),n=P.ZV.selectReportError(e,ye,ge,i),c=P.ZV.selectReportFetchStatus(e,ye,ge,i),d=(0,l.H)(E.NT),p=E.aX.selectProviders(e,"all",d),h=E.aX.selectProvidersError(e,"all",d),u=E.aX.selectProvidersFetchStatus(e,"all",d);return{providers:(0,m.BV)(p,"ibm"),providersError:h,providersFetchStatus:u,query:s,queryString:i,report:a,reportError:n,reportFetchStatus:c}})),ve={fetchReport:P.nx.fetchReport},be=(0,S.ZP)((0,v.connect)(Se,ve)(fe))}}]);
//# sourceMappingURL=ea290c69bdd42e30b214.bundle.js.map