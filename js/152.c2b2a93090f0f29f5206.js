"use strict";(self.webpackChunkcostManagement=self.webpackChunkcostManagement||[]).push([[152],{52636:(e,t,a)=>{a.d(t,{Xk:()=>o,rU:()=>n});var r=a(40400);const n={name:"CalculatorIcon",height:512,width:448,svgPath:"M400 0H48C22.4 0 0 22.4 0 48v416c0 25.6 22.4 48 48 48h352c25.6 0 48-22.4 48-48V48c0-25.6-22.4-48-48-48zM128 435.2c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8V268.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v166.4zm0-256c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8V76.8C64 70.4 70.4 64 76.8 64h294.4c6.4 0 12.8 6.4 12.8 12.8v102.4z",yOffset:0,xOffset:0},o=(0,r.IU)(n)},91882:(e,t,a)=>{a.d(t,{W:()=>i});var r=a(49382),n=a(12289),o=a(40794),s=a(11331),l=a(43789);const i={costColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end",paddingRight:0},defaultLabel:{minWidth:"50px"},emptyState:{backgroundColor:r.ZP.value,display:"flex",justifyContent:"center",paddingTop:s.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:l.ZP.value},infoDescription:{color:n.ZP.value,fontSize:o.ZP.value},lastItem:{textAlign:"right",paddingRight:"3.8rem"},lastItemColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end"},managedColumn:{textAlign:"right"},nameColumn:{width:"1%"}}},70637:(e,t,a)=>{a.d(t,{w:()=>u,V:()=>g});var r=a(90154),n=a(52636),o=a(40227),s=a(97027),l=a(92950),i=a.n(l),c=a(74806),m=a(42901),d=a(5842),p=a(91882);class h extends i().Component{constructor(e){super(e),this.getEmptyState=()=>{const{filterBy:e,intl:t}=this.props;if(e)for(const t of Object.values(e))if("*"!==t)return i().createElement(m.c,{filter:t,showMargin:!1});return i().createElement(r.EmptyState,null,i().createElement(r.EmptyStateIcon,{icon:n.Xk}),i().createElement(r.EmptyStateBody,null,t.formatMessage(s.Z.detailsEmptyState)))},this.getSortBy=e=>{const{columns:t,orderBy:a}=this.props,r=a&&a[t[e].orderBy];return r?{index:e,direction:r}:{}},this.getSortParams=e=>({sortBy:this.getSortBy(e),onSort:this.handleOnSort,columnIndex:e}),this.handleOnSelect=(e,t,a)=>{const{onSelected:r,rows:n}=this.props;let o,s=[];-1===a?o=n.map((e=>(e.selected=t,e))):(o=[...n],o[a].selected=t,s=[o[a].item]),this.setState({rows:n},(()=>{r&&r(s,t)}))},this.handleOnSort=(e,t,a)=>{const{columns:r,onSort:n}=this.props;n&&n(r[t].orderBy,a===o.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}render(){const{columns:e,intl:t,isActionsCell:a=!1,isLoading:n,rows:l}=this.props;return i().createElement(i().Fragment,null,i().createElement(o.TableComposable,{"aria-label":t.formatMessage(s.Z.dataTableAriaLabel),className:"tableOverride",gridBreakPoint:"grid-2xl",variant:o.TableVariant.compact},i().createElement(o.Thead,null,i().createElement(o.Tr,null,e.map(((e,t)=>i().createElement(o.Th,{key:`col-${t}-${e.value}`,modifier:"nowrap",sort:e.isSortable?this.getSortParams(t):void 0,style:e.style},e.name))))),i().createElement(o.Tbody,null,n?i().createElement(o.Tr,null,i().createElement(o.Td,{colSpan:100},i().createElement(r.Bullseye,null,i().createElement("div",{style:{textAlign:"center"}},i().createElement(r.Spinner,{size:"xl"}))))):l.map(((t,r)=>i().createElement(o.Tr,{key:`row-${r}`},t.cells.map(((n,s)=>0===s?i().createElement(o.Td,{dataLabel:e[s].name,key:`cell-${s}-${r}`,modifier:"nowrap",select:{disable:t.selectionDisabled,isSelected:t.selected,onSelect:(e,t)=>this.handleOnSelect(e,t,r),rowIndex:r},style:n.style}):i().createElement(o.Td,{dataLabel:e[s].name,key:`cell-${r}-${s}`,modifier:"nowrap",isActionCell:a&&s===t.cells.length-1,style:n.style},n.value)))))))),0===l.length&&i().createElement("div",{style:p.W.emptyState},this.getEmptyState()))}}const u=(0,c.ZP)((0,d.E)(h));class y extends i().Component{constructor(e){super(e),this.getEmptyState=()=>{const{emptyState:e,filterBy:t,intl:a}=this.props;if(t)for(const e of Object.values(t))if("*"!==e)return i().createElement(m.c,{filter:e,showMargin:!1});return e||i().createElement(r.EmptyState,null,i().createElement(r.EmptyStateIcon,{icon:n.Xk}),i().createElement(r.EmptyStateBody,null,a.formatMessage(s.Z.detailsEmptyState)))},this.getSortBy=e=>{const{columns:t,orderBy:a}=this.props,r=a&&a[t[e].orderBy];return r?{index:e,direction:r}:{}},this.getSortParams=e=>({sortBy:this.getSortBy(e),onSort:this.handleOnSort,columnIndex:e}),this.handleOnSort=(e,t,a)=>{const{columns:r,onSort:n}=this.props;n&&n(r[t].orderBy,a===o.SortByDirection.asc)},this.handleOnRowClick=(e,t)=>{const{onRowClick:a,rows:r}=this.props;r.map((e=>e.selected=!1)),r[t].selected=!0,this.setState({rows:r},(()=>{a&&a(e,t)}))},this.handleOnSort=this.handleOnSort.bind(this)}render(){const{columns:e,intl:t,isLoading:a,rows:n}=this.props;return i().createElement(i().Fragment,null,i().createElement(o.TableComposable,{"aria-label":t.formatMessage(s.Z.selectableTableAriaLabel),gridBreakPoint:"grid-2xl",hasSelectableRowCaption:!0,variant:o.TableVariant.compact},i().createElement(o.Thead,null,i().createElement(o.Tr,null,e.map(((e,t)=>i().createElement(o.Th,{key:`col-${t}-${e.value}`,modifier:"nowrap",sort:e.isSortable?this.getSortParams(t):void 0,style:e.style},e.name))))),i().createElement(o.Tbody,null,a?i().createElement(o.Tr,null,i().createElement(o.Td,{colSpan:100},i().createElement(r.Bullseye,null,i().createElement("div",{style:{textAlign:"center"}},i().createElement(r.Spinner,{size:"xl"}))))):n.map(((a,r)=>i().createElement(o.Tr,{"aria-label":t.formatMessage(s.Z.selectableTableRowAriaLabel),isSelectable:!0,isHoverable:!0,isRowSelected:a.selected,onRowClick:e=>this.handleOnRowClick(e,r),key:`row-${r}`},a.cells.map(((a,n)=>0===n?i().createElement(o.Th,{"aria-label":t.formatMessage(s.Z.selectableTableHeaderAriaLabel),dataLabel:e[n].name,key:`cell-${r}-${n}`,modifier:"nowrap",style:a.style},a.value):i().createElement(o.Td,{dataLabel:e[n].name,key:`cell-${r}-${n}`,modifier:"nowrap",style:a.style},a.value)))))))),0===n.length&&i().createElement("div",{style:p.W.emptyState},this.getEmptyState()))}}const g=(0,c.ZP)((0,d.E)(y))},41882:(e,t,a)=>{a.d(t,{Hy:()=>b,IH:()=>B});var r=a(39333),n=a(97027),o=a(92950),s=a.n(o),l=a(74806),i=a(82537),c=a(70637),m=a(91882),d=a(62357),p=a(45402),h=a(1156),u=a(20997),y=a(45087),g=a(5842);class f extends s().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{groupBy:e,intl:t,report:a}=this.props;if(!a)return;const r=a&&a.data&&a.data.length>0,o=[],s=[Object.assign({name:t.formatMessage(n.Z.optimizationsNames,{value:"container"}),orderBy:"container"},r&&{isSortable:!0}),Object.assign({hidden:"project"===e,name:t.formatMessage(n.Z.optimizationsNames,{value:"project"}),orderBy:"project"},r&&{isSortable:!0}),Object.assign({name:t.formatMessage(n.Z.optimizationsNames,{value:"workload"}),orderBy:"workload"},r&&{isSortable:!0}),Object.assign({name:t.formatMessage(n.Z.optimizationsNames,{value:"workload_type"}),orderBy:"workload_type"},r&&{isSortable:!0}),Object.assign({hidden:"cluster"===e,name:t.formatMessage(n.Z.optimizationsNames,{value:"cluster"}),orderBy:"cluster"},r&&{isSortable:!0}),Object.assign({name:t.formatMessage(n.Z.optimizationsNames,{value:"last_reported"}),orderBy:"last_reported",style:m.W.lastItemColumn},r&&{isSortable:!0})];r&&a.data.map((t=>{const a=t.cluster_alias?t.cluster_alias:t.cluster_uuid?t.cluster_uuid:"",r=t.container?t.container:"",n=(0,y.i0)(t.last_reported),s=t.project?t.project:"",l=t.workload?t.workload:"",i=t.workload_type?t.workload_type:"";o.push({cells:[{value:r},{value:s,hidden:"project"===e},{value:l},{value:i},{value:a,hidden:"cluster"===e},{value:n,style:m.W.lastItem}],optimization:{container:t.container,id:t.id,project:s}})}));const l=s.filter((e=>!e.hidden)),i=o.map((e=>{var t=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,[]);return t.cells=t.cells.filter((e=>!e.hidden)),t}));this.setState({columns:l,rows:i})},this.handleOnRowClick=(e,t)=>{const{closeOptimizationsDrawer:a,isOpen:r,openOptimizationsDrawer:n}=this.props,{currentRow:o,rows:s}=this.state;this.setState({currentRow:t},(()=>{o===t&&r?a():n(s[t].optimization)}))},this.handleOnSort=(e,t)=>{const{closeOptimizationsDrawer:a,onSort:r}=this.props;a(),r&&r(e,t)}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{report:t}=this.props,a=t&&t.data?JSON.stringify(t.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")!==a&&this.initDatum()}render(){const{filterBy:e,isLoading:t,orderBy:a}=this.props,{columns:r,rows:n}=this.state;return s().createElement(c.V,{columns:r,emptyState:s().createElement(d.Y,null),filterBy:e,isLoading:t,isOptimizations:!0,onSort:this.handleOnSort,orderBy:a,rows:n,onRowClick:this.handleOnRowClick})}}const S=(0,h.X1)(((e,{router:t})=>{const a=(0,r.mB)(t.location.search);return{groupBy:(0,p.VL)(a),isOpen:u.lU.selectIsOptimizationsDrawerOpen(e)}})),v={closeOptimizationsDrawer:u.Aw.Zv,openOptimizationsDrawer:u.Aw.Kk},b=(0,l.ZP)((0,g.E)((0,i.connect)(S,v)(f)));var E=a(70200);class w extends s().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,isProject:t}=this.props,a=[{name:e.formatMessage(n.Z.filterByValues,{value:"container"}),key:"container"},{name:e.formatMessage(n.Z.filterByValues,{value:"cluster"}),key:"cluster"},{name:e.formatMessage(n.Z.filterByValues,{value:"project"}),key:"project"},{name:e.formatMessage(n.Z.filterByValues,{value:"workload"}),key:"workload"},{name:e.formatMessage(n.Z.filterByValues,{value:"workload_type"}),key:"workload_type"}];return t?a:a.filter((e=>"project"!==e.key))}}componentDidMount(){this.setState({categoryOptions:this.getCategoryOptions()})}render(){const{isDisabled:e,itemsPerPage:t,itemsTotal:a,onFilterAdded:r,onFilterRemoved:n,pagination:o,query:l}=this.props,{categoryOptions:i}=this.state;return s().createElement(E.p,{categoryOptions:i,isDisabled:e,itemsPerPage:t,itemsTotal:a,onFilterAdded:r,onFilterRemoved:n,pagination:o,query:l,showFilter:!0})}}const O=(0,h.X1)((()=>({}))),k=(0,i.connect)(O,{})(w),B=(0,l.ZP)(k)},479:(e,t,a)=>{a.d(t,{Y:()=>c});var r=a(90154),n=a(89376),o=a(39173),s=a(92950),l=a.n(s),i=a(62357);const c=({title:e})=>l().createElement(l().Fragment,null,e&&l().createElement(n.Z,null,l().createElement(o.Z,{title:e})),l().createElement(r.PageSection,null,l().createElement(i.Y,null)))},62357:(e,t,a)=>{a.d(t,{Y:()=>d});var r=a(90154),n=a(97027),o=a(92950),s=a.n(o),l=a(74806);const i=a(80794),c=(0,l.ZP)((({className:e,intl:t})=>s().createElement("img",{className:`optimization-icon ${e}`,src:i,alt:t.formatMessage(n.Z.optimizations),"aria-hidden":"true"})));class m extends s().Component{render(){const{intl:e}=this.props;return s().createElement(r.EmptyState,{variant:r.EmptyStateVariant.large,className:"pf-m-redhat-font"},s().createElement(r.EmptyStateIcon,{icon:c}),s().createElement(r.Title,{headingLevel:"h1",size:r.TitleSizes.lg},e.formatMessage(n.Z.noOptimizationsTitle)),s().createElement(r.EmptyStateBody,null,e.formatMessage(n.Z.noOptimizationsDesc)))}}const d=(0,l.ZP)(m)},54467:(e,t,a)=>{a.d(t,{W:()=>r});const r={container:{minHeight:"100vh"}}},25391:(e,t,a)=>{a.d(t,{H:()=>r,j:()=>n});const r=e=>(e&&e.order_by?Object.keys(e.order_by):[]).find((e=>void 0!==e)),n=e=>{const t=r(e);return t?e.order_by[t]:void 0}},80794:(e,t,a)=>{e.exports=a.p+"fonts/Red_Hat-IT_Optimization-Gray.svg"}}]);
//# sourceMappingURL=../sourcemaps/152.4f5e265302fb0bfa6532f265946f2f63.js.map