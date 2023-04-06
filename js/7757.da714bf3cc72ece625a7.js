"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[7757],{52636:(e,t,a)=>{a.d(t,{Xk:()=>r,rU:()=>o});var n=a(40400);const o={name:"CalculatorIcon",height:512,width:448,svgPath:"M400 0H48C22.4 0 0 22.4 0 48v416c0 25.6 22.4 48 48 48h352c25.6 0 48-22.4 48-48V48c0-25.6-22.4-48-48-48zM128 435.2c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8V268.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v166.4zm0-256c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8V76.8C64 70.4 70.4 64 76.8 64h294.4c6.4 0 12.8 6.4 12.8 12.8v102.4z",yOffset:0,xOffset:0},r=(0,n.IU)(o)},33183:(e,t,a)=>{a.d(t,{g:()=>l});var n=a(97027),o=a(92950),r=a.n(o),i=a(74806);const s=a(80794),l=(0,i.ZP)((({className:e,intl:t})=>r().createElement("img",{className:`optimization-icon ${e}`,src:s,alt:t.formatMessage(n.Z.optimizations),"aria-hidden":"true"})))},28688:(e,t,a)=>{a.d(t,{Y:()=>u});var n=a(90154),o=a(89376),r=a(39173),i=a(92950),s=a.n(i),l=a(97027),c=a(74806),m=a(33183);class d extends s().Component{render(){const{intl:e}=this.props;return s().createElement(n.EmptyState,{variant:n.EmptyStateVariant.large,className:"pf-m-redhat-font"},s().createElement(n.EmptyStateIcon,{icon:m.g}),s().createElement(n.Title,{headingLevel:"h1",size:"lg"},e.formatMessage(l.Z.noOptimizationsTitle)),s().createElement(n.EmptyStateBody,null,e.formatMessage(l.Z.noOptimizationsDesc)))}}const p=(0,c.ZP)(d),u=({title:e})=>s().createElement(s().Fragment,null,e&&s().createElement(o.Z,null,s().createElement(r.Z,{title:e})),s().createElement(n.PageSection,null,s().createElement(p,null)))},59454:(e,t,a)=>{a.d(t,{Hy:()=>w,IH:()=>k});var n=a(39333),o=a(97027),r=a(92950),i=a.n(r),s=a(74806),l=a(77760),c=a(90569),m=a(90302),d=a(37269),p=a(1156),u=a(20997),h=a(45087),g=a(5842);class y extends i().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{groupBy:e,intl:t,report:a}=this.props;if(!a)return;const n=a&&a.data&&a.data.length>0,r=[],s=[Object.assign({name:t.formatMessage(o.Z.optimizationsNames,{value:"container"}),orderBy:"container"},n&&{isSortable:!0}),Object.assign({hidden:"project"===e,name:t.formatMessage(o.Z.optimizationsNames,{value:"project"}),orderBy:"project"},n&&{isSortable:!0}),Object.assign({name:t.formatMessage(o.Z.optimizationsNames,{value:"workload"}),orderBy:"workload"},n&&{isSortable:!0}),Object.assign({name:t.formatMessage(o.Z.optimizationsNames,{value:"workload_type"}),orderBy:"workload_type"},n&&{isSortable:!0}),Object.assign({hidden:"cluster"===e,name:t.formatMessage(o.Z.optimizationsNames,{value:"cluster"}),orderBy:"cluster"},n&&{isSortable:!0}),Object.assign({name:t.formatMessage(o.Z.optimizationsNames,{value:"last_reported"}),orderBy:"last_reported",style:m.W.lastReportedColumn},n&&{isSortable:!0})];n&&a.data.map((t=>{const a=t.cluster_alias?t.cluster_alias:t.cluster_uuid?t.cluster_uuid:"",n=t.container?t.container:"",o=(0,h.i0)(t.last_reported),s=t.project?t.project:"",l=t.workload?t.workload:"",c=t.workload_type?t.workload_type:"";r.push({cells:[{value:i().createElement("div",null,n)},{value:i().createElement("div",null,s),hidden:"project"===e},{value:i().createElement("div",null,l)},{value:i().createElement("div",null,c)},{value:i().createElement("div",null,a),hidden:"cluster"===e},{value:i().createElement("div",null,o),style:m.W.lastReported}],optimization:{container:t.container,id:t.id}})}));const l=s.filter((e=>!e.hidden)),c=r.map((e=>{var t=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]])}return a}(e,[]);return t.cells=t.cells.filter((e=>!e.hidden)),t}));this.setState({columns:l,rows:c})},this.handleOnRowClick=(e,t)=>{const{openOptimizationsDrawer:a}=this.props,{rows:n}=this.state;a(n[t].optimization)}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{report:t}=this.props,a=t&&t.data?JSON.stringify(t.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")!==a&&this.initDatum()}render(){const{isLoading:e,onSort:t}=this.props,{columns:a,rows:n}=this.state;return i().createElement(c.w,{columns:a,isLoading:e,isOptimizations:!0,onSort:t,rows:n,onRowClick:this.handleOnRowClick})}}const v=(0,p.X1)(((e,{router:t})=>{const a=(0,n.mB)(t.location.search);return{groupBy:(0,d.VL)(a),isOpen:u.lU.selectIsOptimizationsDrawerOpen(e)}})),f={closeOptimizationsDrawer:u.Aw.Zv,openOptimizationsDrawer:u.Aw.Kk},w=(0,s.ZP)((0,g.E)((0,l.connect)(v,f)(y)));var S=a(70539);class b extends i().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e}=this.props;return[{name:e.formatMessage(o.Z.filterByValues,{value:"cluster"}),key:"cluster"},{name:e.formatMessage(o.Z.filterByValues,{value:"project"}),key:"project"},{name:e.formatMessage(o.Z.filterByValues,{value:"workload_type"}),key:"workload_type"},{name:e.formatMessage(o.Z.filterByValues,{value:"workload"}),key:"workload"},{name:e.formatMessage(o.Z.filterByValues,{value:"container"}),key:"container"}]}}componentDidMount(){this.setState({categoryOptions:this.getCategoryOptions()})}render(){const{isDisabled:e,itemsPerPage:t,itemsTotal:a,onFilterAdded:n,onFilterRemoved:o,pagination:r,query:s}=this.props,{categoryOptions:l}=this.state;return i().createElement(S.k,{categoryOptions:l,isDisabled:e,itemsPerPage:t,itemsTotal:a,onFilterAdded:n,onFilterRemoved:o,pagination:r,query:s,showFilter:!0})}}const E=(0,p.X1)((()=>({}))),O=(0,l.connect)(E,{})(b),k=(0,s.ZP)(O)},90302:(e,t,a)=>{a.d(t,{W:()=>l});var n=a(49382),o=a(12289),r=a(40794),i=a(11331),s=a(43789);const l={costColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end",paddingRight:0},defaultLabel:{minWidth:"63px"},emptyState:{backgroundColor:n.ZP.value,display:"flex",justifyContent:"center",paddingTop:i.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:s.ZP.value},infoDescription:{color:o.ZP.value,fontSize:r.ZP.value},lastReported:{textAlign:"right",paddingRight:"40px"},lastReportedColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end"},managedColumn:{textAlign:"right"},nameColumn:{width:"1%"}}},90569:(e,t,a)=>{a.d(t,{w:()=>y});var n=a(90154),o=a(52636),r=a(40227),i=a(79112),s=a(97027),l=a(92950),c=a.n(l),m=a(74806),d=a(33183),p=a(42901),u=a(5842),h=a(90302);class g extends c().Component{constructor(e){super(e),this.getEmptyState=()=>{const{intl:e,isOptimizations:t,router:a}=this.props,r=(0,i.mB)(a.location.search);if(r.filter_by)for(const e of Object.values(r.filter_by))if("*"!==e)return c().createElement(p.c,{filter:e,showMargin:!1});return c().createElement(n.EmptyState,null,c().createElement(n.EmptyStateIcon,{icon:t?d.g:o.Xk}),c().createElement(n.EmptyStateBody,null,e.formatMessage(t?s.Z.optimizationsEmptyState:s.Z.detailsEmptyState)))},this.getSortBy=e=>{const{columns:t,router:a}=this.props,n=t[e].orderBy,o=(0,i.mB)(a.location.search),r=o&&o.order_by&&o.order_by[n];return r?{index:e,direction:r}:{}},this.getSortParams=e=>({sortBy:this.getSortBy(e),onSort:this.handleOnSort,columnIndex:e}),this.handleOnSelect=(e,t,a)=>{const{onSelected:n,rows:o}=this.props;let r,i=[];-1===a?r=o.map((e=>(e.selected=t,e))):(r=[...o],r[a].selected=t,i=[r[a].item]),this.setState({rows:o},(()=>{n&&n(i,t)}))},this.handleOnSort=(e,t,a)=>{const{columns:n,onSort:o}=this.props;o&&o(n[t].orderBy,a===r.SortByDirection.asc)},this.handleOnRowClick=(e,t)=>{const{onRowClick:a,rows:n}=this.props;n.map((e=>e.selected=!1)),n[t].selected=!0,this.setState({rows:n},(()=>{a&&a(e,t)}))},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}render(){const{columns:e,intl:t,isLoading:a,isOptimizations:o,rows:i}=this.props;return c().createElement(c().Fragment,null,c().createElement(r.TableComposable,{"aria-label":t.formatMessage(s.Z.dataTableAriaLabel),className:"tableOverride",gridBreakPoint:"grid-2xl",hasSelectableRowCaption:o},c().createElement(r.Thead,null,c().createElement(r.Tr,null,e.map(((e,t)=>c().createElement(r.Th,{key:`col-${t}-${e.value}`,modifier:"nowrap",sort:e.isSortable?this.getSortParams(t):void 0,style:e.style},e.name))))),c().createElement(r.Tbody,null,a?c().createElement(r.Tr,null,c().createElement(r.Td,{colSpan:100},c().createElement(n.Bullseye,null,c().createElement("div",{style:{textAlign:"center"}},c().createElement(n.Spinner,{size:"xl"}))))):i.map(((t,a)=>c().createElement(r.Tr,{isSelectable:o,isHoverable:o,isRowSelected:o&&t.selected,onRowClick:o?e=>this.handleOnRowClick(e,a):void 0,key:`row-${a}`},t.cells.map(((n,i)=>0!==i||o?c().createElement(r.Td,{dataLabel:e[i].name,key:`cell-${a}-${i}`,modifier:"nowrap",isActionCell:!o&&i===t.cells.length-1,style:n.style},n.value):c().createElement(r.Td,{dataLabel:e[i].name,key:`cell-${i}-${a}`,modifier:"nowrap",select:{disable:t.selectionDisabled,isSelected:t.selected,onSelect:(e,t)=>this.handleOnSelect(e,t,a),rowIndex:a},style:n.style})))))))),Boolean(0===i.length)&&c().createElement("div",{style:h.W.emptyState},this.getEmptyState()))}}const y=(0,m.ZP)((0,u.E)(g))},38679:(e,t,a)=>{a.d(t,{W:()=>i});var n=a(49382),o=a(98499),r=a(32412);const i={content:{paddingBottom:o.ZP.value,paddingTop:o.ZP.value},header:{backgroundColor:n.ZP.var,padding:o.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},optimizationsContainer:{minHeight:"100vh"},paginationContainer:{marginLeft:o.ZP.value,marginRight:o.ZP.value},pagination:{backgroundColor:n.ZP.value,paddingBottom:r.ZP.value,paddingTop:r.ZP.value},tableContainer:{marginLeft:o.ZP.value,marginRight:o.ZP.value},toolbarContainer:{marginLeft:o.ZP.value,marginRight:o.ZP.value}}},80794:(e,t,a)=>{e.exports=a.p+"fonts/Red_Hat-IT_Optimization-Gray.svg"}}]);
//# sourceMappingURL=../sourcemaps/7757.c6cd74d6292f2fbedb1932fb287f9c38.js.map