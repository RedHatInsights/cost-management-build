"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[321],{49572:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r(22217).Z},26569:(e,t,r)=>{r.r(t),r.d(t,{default:()=>R});var s=r(90392),o=r(86208),i=r(45997),l=r(93952),a=r(92950),n=r.n(a),c=r(74806),d=r(65048),p=r(98503),h=r(49572),u=r(84072),m=r(94676),g=r(94377),y=r(45235),f=r(42581),v=r(12845),S=r(69345);const b=(0,g.X1)(((e,t)=>({selectWidgets:S.Qg.selectWidgets(e),widgets:S.Qg.selectCurrentWidgets(e)}))),E=(0,c.ZP)((0,d.connect)(b,{})(v.X));var _=r(52211),P=r(69599);const O=(0,g.X1)(((e,t)=>({selectWidgets:P.vq.selectWidgets(e),widgets:P.vq.selectCurrentWidgets(e)}))),B=(0,c.ZP)((0,d.connect)(O,{})(_.f)),Z=p.Hb.ociDetails,x="cost",C="oci",F=(0,g.X1)(((e,t)=>{const r=(0,s.mB)(location.search),a=(0,u.VL)(r),c=(0,u.pe)(r),d={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign({},r&&r.filter_by&&r.filter_by),a&&{[a]:void 0}),group_by:Object.assign({},a&&{[a]:c})},p=(0,s.pm)(d),h=f.ZV.selectReport(e,C,x,p),g=f.ZV.selectReportError(e,C,x,p),v=f.ZV.selectReportFetchStatus(e,C,x,p),S=(0,o.H)(y.NT),b=y.aX.selectProviders(e,"all",S),_=y.aX.selectProvidersError(e,"all",S),P=y.aX.selectProvidersFetchStatus(e,"all",S);return{costOverviewComponent:n().createElement(E,{groupBy:a,report:h}),description:r[i.eG],detailsURL:Z,emptyStateTitle:t.intl.formatMessage(l.Z.ociDetailsTitle),groupBy:a,groupByValue:c,historicalDataComponent:n().createElement(B,null),providers:(0,m.BV)(b,"oci"),providersError:_,providersFetchStatus:P,providerType:"oci",query:r,queryString:p,report:h,reportError:g,reportFetchStatus:v,reportType:x,reportPathsType:C,tagReportPathsType:"oci",title:c}})),T={fetchReport:f.nx.fetchReport},R=(0,c.ZP)((0,d.connect)(F,T)(h.Z))},16341:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Ee});var s=r(65834),o=r(36163),i=r(86208),l=r(45997),a=r(93952),n=r(92950),c=r.n(n),d=r(74806),p=r(65048),h=r(96464),u=r(27681),m=r(19569),g=r(20963),y=r(29719),f=r(84072),v=r(94676),S=r(47737),b=r(94377),E=r(45235),_=r(42581);function P(e={}){return e.payer_tenant_id?"payer_tenant_id":e.region?"region":e.product_service?"product_service":"date"}var O=r(31447),B=r(36613),Z=r(34310),x=r(73246),C=r(21084),F=r(33307),T=r(99291),R=r(49382),M=r(33605),q=r(54881),k=r(98499),A=r(48196);const D={costValue:{marginTop:k.ZP.var,marginBottom:0},costLabelUnit:{fontSize:q.ZP.value,color:M.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:R.ZP.var,padding:k.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},title:{paddingBottom:A.ZP.var}},w={delta:"cost",filter:{time_scope_units:"month",time_scope_value:-1,resolution:"monthly"}},I=[{label:"payer_tenant_id",value:"payer_tenant_id"},{label:"product_service",value:"product_service"},{label:"region",value:"region"}];class j extends c().Component{render(){const{groupBy:e,isCurrencyFeatureEnabled:t,isExportsFeatureEnabled:r,onGroupBySelected:o,providers:i,providersError:l,report:n,intl:d}=this.props,p=n&&!l&&i&&i.meta&&i.meta.count>0,h=n&&n.meta&&n.meta.total&&n.meta.total.cost&&n.meta.total.cost.total;return c().createElement("header",{style:D.header},c().createElement("div",{style:D.headerContent},c().createElement(s.Title,{headingLevel:"h1",style:D.title,size:s.TitleSizes["2xl"]},d.formatMessage(a.Z.ociDetailsTitle)),c().createElement("div",{style:D.headerContentRight},t&&c().createElement(Z.F,null),r&&c().createElement(B.b,null))),c().createElement("div",{style:D.headerContent},c().createElement("div",{style:D.headerContentLeft},c().createElement(x.X,{getIdKeyForGroupBy:P,groupBy:e,isDisabled:!p,onSelected:o,options:I,showTags:!0,tagReportPathsType:"oci"})),Boolean(p)&&c().createElement("div",null,c().createElement(s.Title,{headingLevel:"h2",style:D.costValue,size:s.TitleSizes["4xl"]},(0,T.xG)(h?n.meta.total.cost.total.value:0,h?n.meta.total.cost.total.units:"USD")),c().createElement("div",{style:D.dateTitle},(0,F.J4)()))))}}const V=(0,b.X1)(((e,t)=>{const r=(0,o.pm)(w),s=(0,i.H)(E.NT),l=E.aX.selectProviders(e,"all",s),a=E.aX.selectProvidersError(e,"all",s),n=E.aX.selectProvidersFetchStatus(e,"all",s);return{isCurrencyFeatureEnabled:C.iJ.selectIsCurrencyFeatureEnabled(e),isExportsFeatureEnabled:C.iJ.selectIsExportsFeatureEnabled(e),providers:(0,v.BV)(l,"oci"),providersError:a,providersFetchStatus:n,queryString:r}})),X=(0,d.ZP)((0,p.connect)(V,{})(j));var N=r(52636),$=r(57472),J=r(73727),L=r(98503),G=r(24741),Q=r(21679),H=r(15070),z=r(20635),U=r(12289),W=r(40794),K=r(11331),Y=r(73861);const ee={emptyState:{backgroundColor:R.ZP.value,display:"flex",justifyContent:"center",paddingTop:K.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:Y.ZP.value},infoDescription:{color:U.ZP.value,fontSize:W.ZP.value}};class te extends c().Component{constructor(e){super(e),this.state={columns:[],rows:[]},this.initDatum=()=>{const{isAllSelected:e,query:t,report:r,selectedItems:o,intl:i}=this.props;if(!t||!r)return;const n=P(t.group_by),d=this.getGroupByTagKey(),p=[],h=(0,O.c)({report:r,idKey:d||n}),u=d?[{title:i.formatMessage(a.Z.tagNames)},{title:i.formatMessage(a.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",title:i.formatMessage(a.Z.cost)},h.length&&{transforms:[$.sortable]}),{title:""}]:[Object.assign({orderBy:n,title:i.formatMessage(a.Z.detailsResourceNames,{value:n})},h.length&&{transforms:[$.sortable]}),{title:i.formatMessage(a.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",title:i.formatMessage(a.Z.cost)},h.length&&{transforms:[$.sortable]}),{title:""}];h.map(((r,s)=>{const i=r&&null!==r.label?r.label:"",a=this.getMonthOverMonthCost(r,s),h=this.getTotalCost(r,s),u=this.getActions(r);let m=c().createElement(J.rU,{to:(0,z.T)({basePath:L.Hb.ociDetailsBreakdown,label:i.toString(),description:r.id,groupBy:d?`${l.P}${d}`:n,query:t})},i);const g=!(i===`no-${n}`||i===`no-${d}`);g||(m=i);const y=r.id&&r.id!==r.label?c().createElement("div",{style:ee.infoDescription},r.id):null;p.push({cells:[{title:c().createElement("div",null,m,y)},{title:c().createElement("div",null,a)},{title:c().createElement("div",null,h)},{title:c().createElement("div",null,u)}],disableSelection:!g,isOpen:!1,item:r,selected:e||o&&void 0!==o.find((e=>e.id===r.id))})}));const m=[{heightAuto:!0,cells:[{props:{colSpan:5},title:c().createElement(s.Bullseye,null,c().createElement("div",{style:{textAlign:"center"}},c().createElement(s.Spinner,{size:"xl"})))}]}];this.setState({columns:u,loadingRows:m,rows:p,sortBy:{}})},this.getActions=e=>{const{groupBy:t,query:r}=this.props;return c().createElement(H.e,{groupBy:t,item:e,query:r,reportPathsType:"oci"})},this.getEmptyState=()=>{const{query:e,intl:t}=this.props;for(const t of Object.values(e.filter_by))if("*"!==t)return c().createElement(G.c,{filter:t,showMargin:!1});return c().createElement(s.EmptyState,null,c().createElement(s.EmptyStateIcon,{icon:N.Xk}),c().createElement(s.EmptyStateBody,null,t.formatMessage(a.Z.detailsEmptyState)))},this.getGroupByTagKey=()=>{const{query:e}=this.props;let t;for(const r of Object.keys(e.group_by)){const e=r.indexOf(l.P);if(-1!==e){t=r.substring(e+l.P.length);break}}return t},this.getMonthOverMonthCost=(e,t)=>{const{intl:r}=this.props,s=(0,T.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),o=null!==e.delta_percent?(0,T.rl)(Math.abs(e.delta_percent)):0,i=!(0===o||"0.00"===o),l=null!==e.delta_percent;let n;return i&&(n="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(n+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(n+=" increase")),l?c().createElement("div",{className:"monthOverMonthOverride"},c().createElement("div",{className:n,key:`month-over-month-cost-${t}`},i?r.formatMessage(a.Z.percent,{value:o}):c().createElement(Q.L,null),Boolean(i&&null!==e.delta_percent&&e.delta_value>0)&&c().createElement("span",{className:"fa fa-sort-up",style:ee.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(i&&null!==e.delta_percent&&e.delta_value<0)&&c().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},ee.infoArrow),ee.infoArrowDesc),key:`month-over-month-icon-${t}`})),c().createElement("div",{style:ee.infoDescription,key:`month-over-month-info-${t}`},(0,F.Y)(s))):(0,F.Tf)()},this.getSortBy=()=>{const{query:e}=this.props,{columns:t}=this.state;let r=-1,s=$.SortByDirection.asc;for(const o of Object.keys(e.order_by)){let i=0;for(const l of t){if(l.orderBy===o){s="asc"===e.order_by[o]?$.SortByDirection.asc:$.SortByDirection.desc,r=i+1;break}i++}}return r>-1?{index:r,direction:s}:{}},this.getTotalCost=(e,t)=>{const{report:r,intl:s}=this.props,o=r&&r.meta&&r.meta.total&&r.meta.total.cost&&r.meta.total.cost.total?r.meta.total.cost.total.value:0,i=0===o?o.toFixed(2):(e.cost.total.value/o*100).toFixed(2);return c().createElement(c().Fragment,null,(0,T.xG)(e.cost.total.value,e.cost.total.units),c().createElement("div",{style:ee.infoDescription,key:`total-cost-${t}`},s.formatMessage(a.Z.percentOfCost,{value:i})))},this.handleOnSelect=(e,t,r)=>{const{onSelected:s}=this.props;let o,i=[];-1===r?o=this.state.rows.map((e=>(e.selected=t,e))):(o=[...this.state.rows],o[r].selected=t,i=[o[r].item]),this.setState({rows:o},(()=>{s&&s(i,t)}))},this.handleOnSort=(e,t,r)=>{const{onSort:s}=this.props,{columns:o}=this.state;s&&s(o[t-1].orderBy,r===$.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{query:t,report:r,selectedItems:s}=this.props,i=r&&r.data?JSON.stringify(r.data):"",l=e.report&&e.report.data?JSON.stringify(e.report.data):"";(0,o.pm)(e.query)===(0,o.pm)(t)&&l===i&&e.selectedItems===s||this.initDatum()}render(){const{intl:e,isLoading:t}=this.props,{columns:r,loadingRows:s,rows:o}=this.state;return c().createElement(c().Fragment,null,c().createElement($.Table,{"aria-label":e.formatMessage(a.Z.ociDetailsTableAriaLabel),canSelectAll:!1,cells:r,className:"tableOverride",rows:t?s:o,sortBy:this.getSortBy(),onSelect:t?void 0:this.handleOnSelect,onSort:this.handleOnSort,gridBreakPoint:"grid-2xl"},c().createElement($.TableHeader,null),c().createElement($.TableBody,null)),Boolean(0===o.length)&&c().createElement("div",{style:ee.emptyState},this.getEmptyState()))}}const re=(0,d.ZP)(te);var se=r(78067),oe=r(7917),ie=r(19853);const le="tag",ae="oci";class ne extends c().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,r=[{name:e.formatMessage(a.Z.filterByValues,{value:"payer_tenant_id"}),key:"payer_tenant_id"},{name:e.formatMessage(a.Z.filterByValues,{value:"product_service"}),key:"product_service"},{name:e.formatMessage(a.Z.filterByValues,{value:"region"}),key:"region"}];return t&&t.data&&t.data.length&&r.push({name:e.formatMessage(a.Z.filterByValues,{value:l.up}),key:l.up}),r}}componentDidMount(){const{fetchTag:e,queryString:t,tagReportFetchStatus:r}=this.props;this.setState({categoryOptions:this.getCategoryOptions()},(()=>{1!==r&&e(ae,le,t)}))}componentDidUpdate(e){const{fetchTag:t,query:r,queryString:s,tagReport:o,tagReportFetchStatus:i}=this.props;(0,ie.X)(o,e.tagReport)?r&&!(0,ie.X)(r,e.query)&&1!==i&&t(ae,le,s):this.setState({categoryOptions:this.getCategoryOptions()},(()=>{1!==i&&t(ae,le,s)}))}render(){const{groupBy:e,isAllSelected:t,isExportDisabled:r,itemsPerPage:s,itemsTotal:o,onBulkSelected:i,onExportClicked:l,onFilterAdded:a,onFilterRemoved:n,pagination:d,query:p,selectedItems:h,tagReport:u}=this.props,{categoryOptions:m}=this.state;return c().createElement(se.k,{categoryOptions:m,groupBy:e,isAllSelected:t,isExportDisabled:r,itemsPerPage:s,itemsTotal:o,onBulkSelected:i,onExportClicked:l,onFilterAdded:a,onFilterRemoved:n,pagination:d,query:p,resourcePathsType:"oci",selectedItems:h,showBulkSelect:!0,showExport:!0,showFilter:!0,tagReport:u,tagReportPathsType:ae})}}const ce=(0,b.X1)(((e,t)=>{const r=(0,o.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3}),s=oe.ux.selectTag(e,ae,le,r);return{queryString:r,tagReportFetchStatus:oe.ux.selectTagFetchStatus(e,ae,le,r),tagReport:s}})),de={fetchTag:oe.xr.Xt},pe=(0,p.connect)(ce,de)(ne),he=(0,d.ZP)(pe);var ue=r(32412);const me={ociDetails:{minHeight:"100%"},content:{paddingBottom:k.ZP.value,paddingTop:k.ZP.value},paginationContainer:{marginLeft:k.ZP.value,marginRight:k.ZP.value},pagination:{backgroundColor:R.ZP.value,paddingBottom:ue.ZP.value,paddingTop:ue.ZP.value},tableContainer:{marginLeft:k.ZP.value,marginRight:k.ZP.value}},ge={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},exclude:{},filter_by:{},group_by:{payer_tenant_id:"*"},order_by:{cost:"desc"}},ye="cost",fe="oci";class ve extends c().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,r=P(e.group_by),s=(0,f.qV)(e);return(0,O.c)({report:t,idKey:s||r})},this.getExportModal=e=>{const{isAllSelected:t,isExportModalOpen:r,selectedItems:s}=this.state,{query:o,report:i}=this.props,a=P(o.group_by),n=(0,f.qV)(o),d=i&&i.meta?i.meta.count:0,p=[];return s.map((e=>{e.label!==`no-${a}`&&e.label!==`no-${n}`&&p.push(e)})),c().createElement(y.X,{count:t?d:p.length,isAllItems:(t||s.length===d)&&e.length>0,groupBy:n?`${l.P}${n}`:a,isOpen:r,items:p,onClose:this.handleExportModalClose,query:o,reportPathsType:fe})},this.getPagination=(e=!1)=>{const{intl:t,report:r}=this.props,o=r&&r.meta?r.meta.count:0,i=r&&r.meta&&r.meta.filter&&r.meta.filter.limit?r.meta.filter.limit:ge.filter.limit,l=(r&&r.meta&&r.meta.filter&&r.meta.filter.offset?r.meta.filter.offset:ge.filter.offset)/i+1;return c().createElement(s.Pagination,{isCompact:!e,itemCount:o,onPerPageSelect:this.handlePerPageSelect,onSetPage:this.handleSetPage,page:l,perPage:i,titles:{paginationTitle:t.formatMessage(a.Z.paginationTitle,{title:t.formatMessage(a.Z.oci),placement:e?"bottom":"top"})},variant:e?s.PaginationVariant.bottom:s.PaginationVariant.top,widgetId:"exports-pagination"+(e?"-bottom":"")})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:r}=this.props,{isAllSelected:s,selectedItems:o}=this.state,i=P(e.group_by),a=(0,f.qV)(e);return c().createElement(re,{groupBy:a?`${l.P}${a}`:i,isAllSelected:s,isLoading:1===r,onSelected:this.handleSelected,onSort:this.handleSort,query:e,report:t,selectedItems:o})},this.getToolbar=e=>{const{query:t,report:r}=this.props,{isAllSelected:s,selectedItems:o}=this.state,i=P(t.group_by),a=(0,f.qV)(t),n=r&&r.meta?r.meta.count:0;return c().createElement(he,{groupBy:a?`${l.P}${a}`:i,isAllSelected:s,isExportDisabled:0===e.length||!s&&0===o.length,itemsPerPage:e.length,itemsTotal:n,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:this.handleFilterAdded,onFilterRemoved:this.handleFilterRemoved,pagination:this.getPagination(),query:t,selectedItems:o})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleFilterAdded=e=>{const{history:t,query:r}=this.props,s=(0,S.oQ)(r,e);t.replace(this.getRouteForQuery(s,!0))},this.handleFilterRemoved=e=>{const{history:t,query:r}=this.props,s=(0,S.cJ)(r,e);t.replace(this.getRouteForQuery(s,!0))},this.handleGroupBySelected=e=>{const{history:t,query:r}=this.props,s=e,o=Object.assign(Object.assign({},JSON.parse(JSON.stringify(r))),{group_by:{[s]:"*"},order_by:{cost:"desc"}});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{t.replace(this.getRouteForQuery(o,!0))}))},this.handlePerPageSelect=(e,t)=>{const{history:r,query:s}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(s)));o.filter=Object.assign(Object.assign({},s.filter),{limit:t});const i=this.getRouteForQuery(o,!0);r.replace(i)},this.handleSelected=(e,t=!1)=>{const{isAllSelected:r,selectedItems:s}=this.state;let o=[...r?this.getComputedItems():s];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.handleSetPage=(e,t)=>{const{history:r,query:s,report:o}=this.props,i=o&&o.meta&&o.meta.filter&&o.meta.filter.limit?o.meta.filter.limit:ge.filter.limit,l=t*i-i,a=Object.assign({},JSON.parse(JSON.stringify(s)));a.filter=Object.assign(Object.assign({},s.filter),{offset:l});const n=this.getRouteForQuery(a);r.replace(n)},this.handleSort=(e,t)=>{const{history:r,query:s}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(s)));o.order_by={},o.order_by[e]=t?"asc":"desc";const i=this.getRouteForQuery(o);r.replace(i)},this.updateReport=()=>{const{query:e,location:t,fetchReport:r,history:s,queryString:o}=this.props;t.search?r(fe,ye,o):s.replace(this.getRouteForQuery({exclude:e?e.exclude:void 0,filter_by:e?e.filter_by:void 0,group_by:e?e.group_by:void 0,order_by:{cost:"desc"}}))},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleFilterAdded=this.handleFilterAdded.bind(this),this.handleFilterRemoved=this.handleFilterRemoved.bind(this),this.handlePerPageSelect=this.handlePerPageSelect.bind(this),this.handleSelected=this.handleSelected.bind(this),this.handleSetPage=this.handleSetPage.bind(this),this.handleSort=this.handleSort.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{location:r,report:s,reportError:o,queryString:i}=this.props,{selectedItems:l}=this.state,a=e.queryString!==i,n=!s&&!o,c=!r.search,d=t.selectedItems!==l;(a||n||c||d)&&this.updateReport()}getRouteForQuery(e,t=!1){const{history:r}=this.props;return t&&(e.filter=Object.assign(Object.assign({},e.filter),{offset:ge.filter.offset})),`${r.location.pathname}?${(0,o.IV)(e)}`}render(){const{providers:e,providersFetchStatus:t,query:r,report:s,reportError:o,reportFetchStatus:i,intl:l}=this.props,n=P(r.group_by),d=this.getComputedItems(),p=l.formatMessage(a.Z.ociDetailsTitle);if(o)return c().createElement(g.Z,{title:p});if(1===t)return c().createElement(h.Z,{title:p});if(2===t){if(e&&e.meta&&0===e.meta.count)return c().createElement(m.Z,{providerType:"oci",title:p});if(!(0,v.g8)(e))return c().createElement(u.Z,{title:p})}return c().createElement("div",{style:me.ociDetails},c().createElement(X,{groupBy:n,onGroupBySelected:this.handleGroupBySelected,report:s}),c().createElement("div",{style:me.content},this.getToolbar(d),this.getExportModal(d),1===i?c().createElement(h.Z,null):c().createElement(c().Fragment,null,c().createElement("div",{style:me.tableContainer},this.getTable()),c().createElement("div",{style:me.paginationContainer},c().createElement("div",{style:me.pagination},this.getPagination(!0))))))}}const Se=(0,b.X1)(((e,t)=>{const r=(0,o.mB)(location.search),s={delta:"cost",filter:Object.assign(Object.assign({},ge.filter),r.filter),exclude:r.exclude||ge.exclude,filter_by:r.filter_by||ge.filter_by,group_by:r.group_by||ge.group_by,order_by:r.order_by||ge.order_by},l=(0,o.pm)(s),a=_.ZV.selectReport(e,fe,ye,l),n=_.ZV.selectReportError(e,fe,ye,l),c=_.ZV.selectReportFetchStatus(e,fe,ye,l),d=(0,i.H)(E.NT),p=E.aX.selectProviders(e,"all",d),h=E.aX.selectProvidersError(e,"all",d),u=E.aX.selectProvidersFetchStatus(e,"all",d);return{providers:(0,v.BV)(p,"oci"),providersError:h,providersFetchStatus:u,query:s,queryString:l,report:a,reportError:n,reportFetchStatus:c}})),be={fetchReport:_.nx.fetchReport},Ee=(0,d.ZP)((0,p.connect)(Se,be)(ve))}}]);
//# sourceMappingURL=e84f5e505c249124d5cd.bundle.js.map