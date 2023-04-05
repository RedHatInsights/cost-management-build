"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[9692],{52636:(e,t,r)=>{r.d(t,{Xk:()=>n,rU:()=>a});var o=r(40400);const a={name:"CalculatorIcon",height:512,width:448,svgPath:"M400 0H48C22.4 0 0 22.4 0 48v416c0 25.6 22.4 48 48 48h352c25.6 0 48-22.4 48-48V48c0-25.6-22.4-48-48-48zM128 435.2c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8V268.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v166.4zm0-256c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8V76.8C64 70.4 70.4 64 76.8 64h294.4c6.4 0 12.8 6.4 12.8 12.8v102.4z",yOffset:0,xOffset:0},n=(0,o.IU)(a)},90302:(e,t,r)=>{r.d(t,{W:()=>l});var o=r(49382),a=r(12289),n=r(40794),i=r(11331),s=r(43789);const l={costColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end",paddingRight:0},defaultLabel:{minWidth:"63px"},emptyState:{backgroundColor:o.ZP.value,display:"flex",justifyContent:"center",paddingTop:i.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:s.ZP.value},infoDescription:{color:a.ZP.value,fontSize:n.ZP.value},lastReported:{textAlign:"right",paddingRight:"40px"},lastReportedColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end"},managedColumn:{textAlign:"right"},nameColumn:{width:"1%"}}},90569:(e,t,r)=>{r.d(t,{w:()=>g});var o=r(90154),a=r(52636),n=r(40227),i=r(79112),s=r(97027),l=r(92950),c=r.n(l),p=r(74806),m=r(42901),d=r(5842),u=r(90302);class h extends c().Component{constructor(e){super(e),this.getEmptyState=()=>{const{intl:e,router:t}=this.props,r=(0,i.mB)(t.location.search);if(r.filter_by)for(const e of Object.values(r.filter_by))if("*"!==e)return c().createElement(m.c,{filter:e,showMargin:!1});return c().createElement(o.EmptyState,null,c().createElement(o.EmptyStateIcon,{icon:a.Xk}),c().createElement(o.EmptyStateBody,null,e.formatMessage(s.Z.detailsEmptyState)))},this.getSortBy=e=>{const{columns:t,router:r}=this.props,o=t[e].orderBy,a=(0,i.mB)(r.location.search),n=a&&a.order_by&&a.order_by[o];return n?{index:e,direction:n}:{}},this.getSortParams=e=>({sortBy:this.getSortBy(e),onSort:this.handleOnSort,columnIndex:e}),this.handleOnSelect=(e,t,r)=>{const{onSelected:o,rows:a}=this.props;let n,i=[];-1===r?n=a.map((e=>(e.selected=t,e))):(n=[...a],n[r].selected=t,i=[n[r].item]),this.setState({rows:a},(()=>{o&&o(i,t)}))},this.handleOnSort=(e,t,r)=>{const{columns:o,onSort:a}=this.props;a&&a(o[t].orderBy,r===n.SortByDirection.asc)},this.handleOnRowClick=(e,t)=>{const{onRowClick:r,rows:o}=this.props;o.map((e=>e.selected=!1)),o[t].selected=!0,this.setState({rows:o},(()=>{r&&r(e,t)}))},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}render(){const{columns:e,intl:t,isLoading:r,isOptimizations:a,rows:i}=this.props;return c().createElement(c().Fragment,null,c().createElement(n.TableComposable,{"aria-label":t.formatMessage(s.Z.dataTableAriaLabel),className:"tableOverride",gridBreakPoint:"grid-2xl",hasSelectableRowCaption:a},c().createElement(n.Thead,null,c().createElement(n.Tr,null,e.map(((e,t)=>c().createElement(n.Th,{key:`col-${t}-${e.value}`,modifier:"nowrap",sort:e.isSortable?this.getSortParams(t):void 0,style:e.style},e.name))))),c().createElement(n.Tbody,null,r?c().createElement(n.Tr,null,c().createElement(n.Td,{colSpan:100},c().createElement(o.Bullseye,null,c().createElement("div",{style:{textAlign:"center"}},c().createElement(o.Spinner,{size:"xl"}))))):i.map(((t,r)=>c().createElement(n.Tr,{isSelectable:a,isHoverable:a,isRowSelected:a&&t.selected,onRowClick:a?e=>this.handleOnRowClick(e,r):void 0,key:`row-${r}`},t.cells.map(((o,i)=>0!==i||a?c().createElement(n.Td,{dataLabel:e[i].name,key:`cell-${r}-${i}`,modifier:"nowrap",isActionCell:!a&&i===t.cells.length-1,style:o.style},o.value):c().createElement(n.Td,{dataLabel:e[i].name,key:`cell-${i}-${r}`,modifier:"nowrap",select:{disable:t.selectionDisabled,isSelected:t.selected,onSelect:(e,t)=>this.handleOnSelect(e,t,r),rowIndex:r},style:o.style})))))))),Boolean(0===i.length)&&c().createElement("div",{style:u.W.emptyState},this.getEmptyState()))}}const g=(0,p.ZP)((0,d.E)(h))},49692:(e,t,r)=>{r.d(t,{Z:()=>Q});var o=r(90154),a=r(52016),n=r(89256),i=r(97027),s=r(92950),l=r.n(s),c=r(74806),p=r(77760),m=r(52471),d=r(47947),u=r(37269),h=r(19727),g=r(1156),y=r(2136),f=r(5842),v=r(49382),b=r(98499),S=r(32412);const E={content:{paddingBottom:b.ZP.value,paddingTop:b.ZP.value},header:{backgroundColor:v.ZP.var,padding:b.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},optimizationsContainer:{minHeight:"100vh"},paginationContainer:{marginLeft:b.ZP.value,marginRight:b.ZP.value},pagination:{backgroundColor:v.ZP.value,paddingBottom:S.ZP.value,paddingTop:S.ZP.value},tableContainer:{marginLeft:b.ZP.value,marginRight:b.ZP.value},toolbarContainer:{marginLeft:b.ZP.value,marginRight:b.ZP.value}};class w extends l().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState)}render(){const{intl:e}=this.props;return l().createElement("header",{style:E.header},l().createElement("div",{style:E.headerContent},l().createElement(o.Title,{headingLevel:"h1",style:E.title,size:o.TitleSizes["2xl"]},e.formatMessage(i.Z.optimizations))))}}const O=(0,g.X1)((()=>({}))),P=(0,c.ZP)((0,p.connect)(O,{})(w));var C=r(39333),k=r(90569),Z=r(90302),R=r(20997),B=r(45087);class j extends l().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{groupBy:e,intl:t,report:r}=this.props;if(!r)return;const o=r&&r.data&&r.data.length>0,a=[],n=[Object.assign({name:t.formatMessage(i.Z.optimizationsNames,{value:"container"}),orderBy:"container"},o&&{isSortable:!0}),Object.assign({hidden:"project"===e,name:t.formatMessage(i.Z.optimizationsNames,{value:"project"}),orderBy:"project"},o&&{isSortable:!0}),Object.assign({name:t.formatMessage(i.Z.optimizationsNames,{value:"workload"}),orderBy:"workload"},o&&{isSortable:!0}),Object.assign({name:t.formatMessage(i.Z.optimizationsNames,{value:"workload_type"}),orderBy:"workload_type"},o&&{isSortable:!0}),Object.assign({hidden:"cluster"===e,name:t.formatMessage(i.Z.optimizationsNames,{value:"cluster"}),orderBy:"cluster"},o&&{isSortable:!0}),Object.assign({name:t.formatMessage(i.Z.optimizationsNames,{value:"last_reported"}),orderBy:"last_reported",style:Z.W.lastReportedColumn},o&&{isSortable:!0})];o&&r.data.map((t=>{const r=t.cluster_alias?t.cluster_alias:t.cluster_uuid?t.cluster_uuid:"",o=t.container?t.container:"",n=(0,B.i0)(t.last_reported),i=t.project?t.project:"",s=t.workload?t.workload:"",c=t.workload_type?t.workload_type:"";a.push({cells:[{value:l().createElement("div",null,o)},{value:l().createElement("div",null,i),hidden:"project"===e},{value:l().createElement("div",null,s)},{value:l().createElement("div",null,c)},{value:l().createElement("div",null,r),hidden:"cluster"===e},{value:l().createElement("div",null,n),style:Z.W.lastReported}],optimization:{container:t.container,id:t.id}})}));const s=n.filter((e=>!e.hidden)),c=a.map((e=>{var t=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(r[o[a]]=e[o[a]])}return r}(e,[]);return t.cells=t.cells.filter((e=>!e.hidden)),t}));this.setState({columns:s,rows:c})},this.handleOnRowClick=(e,t)=>{const{openOptimizationsDrawer:r}=this.props,{rows:o}=this.state;r(o[t].optimization)}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{report:t}=this.props,r=t&&t.data?JSON.stringify(t.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")!==r&&this.initDatum()}render(){const{isLoading:e,onSort:t}=this.props,{columns:r,rows:o}=this.state;return l().createElement(k.w,{columns:r,isLoading:e,isOptimizations:!0,onSort:t,rows:o,onRowClick:this.handleOnRowClick})}}const x=(0,g.X1)(((e,{router:t})=>{const r=(0,C.mB)(t.location.search);return{groupBy:(0,u.VL)(r),isOpen:R.lU.selectIsOptimizationsDrawerOpen(e)}})),T={closeOptimizationsDrawer:R.Aw.Zv,openOptimizationsDrawer:R.Aw.Kk},z=(0,c.ZP)((0,f.E)((0,p.connect)(x,T)(j)));var _=r(36116),M=r(70539);class D extends l().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e}=this.props;return[{name:e.formatMessage(i.Z.filterByValues,{value:"cluster"}),key:"cluster"},{name:e.formatMessage(i.Z.filterByValues,{value:"project"}),key:"project"},{name:e.formatMessage(i.Z.filterByValues,{value:"workload_type"}),key:"workload_type"},{name:e.formatMessage(i.Z.filterByValues,{value:"workload"}),key:"workload"},{name:e.formatMessage(i.Z.filterByValues,{value:"container"}),key:"container"}]}}componentDidMount(){this.setState({categoryOptions:this.getCategoryOptions()})}render(){const{isDisabled:e,itemsPerPage:t,itemsTotal:r,onFilterAdded:o,onFilterRemoved:a,pagination:n,query:i}=this.props,{categoryOptions:s}=this.state;return l().createElement(M.k,{categoryOptions:s,isDisabled:e,itemsPerPage:t,itemsTotal:r,onFilterAdded:o,onFilterRemoved:a,pagination:n,query:i,resourcePathsType:_.C.ocp,showFilter:!0})}}const F=(0,g.X1)((()=>({}))),A=(0,p.connect)(F,{})(D),L=(0,c.ZP)(A),V={limit:10,offset:0,order_by:{cost:"desc"}},N=n.N.ros,$=n.v.recommendations;class q extends l().Component{constructor(){super(...arguments),this.defaultState={columns:[],rows:[]},this.state=Object.assign({},this.defaultState),this.getPagination=(e=!1,t=!1)=>{const{intl:r,query:a,report:n,router:s}=this.props,c=n&&n.meta?n.meta.count:0,p=n&&n.meta?n.meta.limit:V.limit,m=(n&&n.meta?n.meta.offset:V.offset)/p+1;return l().createElement(o.Pagination,{isCompact:!t,isDisabled:e,itemCount:c,onPerPageSelect:(e,t)=>(0,h.xh)(a,s,t),onSetPage:(e,t)=>(0,h.$9)(a,s,n,t),page:m,perPage:p,titles:{paginationTitle:r.formatMessage(i.Z.paginationTitle,{title:r.formatMessage(i.Z.openShift),placement:t?"bottom":"top"})},variant:t?o.PaginationVariant.bottom:o.PaginationVariant.top,widgetId:"exports-pagination"+(t?"-bottom":"")})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:r,reportQueryString:o,router:a}=this.props;return l().createElement(z,{isLoading:r===g.iF.inProgress,onSort:(t,r)=>(0,h.yB)(e,a,t,r),report:t,reportQueryString:o})},this.getToolbar=()=>{const{query:e,report:t,router:r}=this.props,o=t&&t.meta?t.meta.limit:0,a=t&&t.meta?t.meta.count:0,n=0===a;return l().createElement(L,{isDisabled:n,itemsPerPage:o,itemsTotal:a,onFilterAdded:t=>(0,h.$3)(e,r,t),onFilterRemoved:t=>(0,h.q7)(e,r,t),pagination:this.getPagination(n),query:e})},this.updateReport=()=>{const{fetchRosReport:e,reportFetchStatus:t,reportQueryString:r}=this.props;t!==g.iF.inProgress&&e($,N,r)}}componentDidMount(){this.updateReport()}componentDidUpdate(e){const{report:t,reportError:r,reportQueryString:o,router:a}=this.props,n=e.reportQueryString!==o,i=!t&&!r,s=!a.location.search;(n||i||s)&&this.updateReport()}render(){const{groupBy:e,intl:t,report:r,reportError:o,reportFetchStatus:a}=this.props,n=0===(r&&r.meta?r.meta.count:0),s=void 0===e,c=t.formatMessage(i.Z.ocpDetailsTitle);return o?l().createElement(d.W,{title:c}):l().createElement("div",{style:E.optimizationsContainer},s?l().createElement(l().Fragment,null,l().createElement(P,null),l().createElement("div",{style:E.content},l().createElement("div",{style:E.toolbarContainer},this.getToolbar()),a===g.iF.inProgress?l().createElement(m.g,null):l().createElement(l().Fragment,null,l().createElement("div",{style:E.tableContainer},this.getTable()),l().createElement("div",{style:E.paginationContainer},l().createElement("div",{style:E.pagination},this.getPagination(n,!0)))))):l().createElement(l().Fragment,null,this.getToolbar(),a===g.iF.inProgress?l().createElement(m.g,null):l().createElement(l().Fragment,null,this.getTable(),l().createElement("div",{style:E.pagination},this.getPagination(n,!0)))))}}const I=(0,g.X1)(((e,{router:t})=>{const r=(0,a.mB)(t.location.search),o=(0,u.VL)(r),n=(0,u.pe)(r),i=Object.assign(Object.assign({},o&&{[o]:n}),{filter_by:r.filter_by||V.filter_by,limit:r.limit||V.limit,offset:r.offset||V.offset}),s=(0,a.pm)(Object.assign({},i)),l=y.R0.selectRos(e,$,N,s),c=y.R0.selectRosError(e,$,N,s),p=y.R0.selectRosFetchStatus(e,$,N,s);return{groupBy:r.group_by,query:i,report:l,reportError:c,reportFetchStatus:p,reportQueryString:s}})),H={fetchRosReport:y.Ze.fetchRosReport},Q=(0,c.ZP)((0,f.E)((0,p.connect)(I,H)(q)))}}]);
//# sourceMappingURL=../sourcemaps/9692.f7e121a5fbbb5d6ef1b7260ba6fb64f0.js.map