"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[3609],{15265:(e,t,o)=>{o.d(t,{LA:()=>a,ZP:()=>l,mq:()=>s});var r=o(40400);const s={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},a=(0,r.IU)(s),l=a},43789:(e,t)=>{t.Q8={name:"--pf-global--spacer--xs",value:"0.25rem",var:"var(--pf-global--spacer--xs)"},t.ZP=t.Q8},72483:(e,t,o)=>{o.d(t,{Y:()=>p});var r=o(90154),s=o(97027),a=o(92950),l=o.n(a),n=o(74806);const i=o(80794),c=(0,n.ZP)((({className:e,intl:t})=>l().createElement("img",{className:`optimization-icon ${e}`,src:i,alt:t.formatMessage(s.Z.optimizations),"aria-hidden":"true"})));class d extends l().Component{render(){const{intl:e}=this.props;return l().createElement(r.EmptyState,{variant:r.EmptyStateVariant.large,className:"pf-m-redhat-font"},l().createElement(r.EmptyStateIcon,{icon:c}),l().createElement(r.Title,{headingLevel:"h1",size:"lg"},e.formatMessage(s.Z.noOptimizationsTitle)),l().createElement(r.EmptyStateBody,null,e.formatMessage(s.Z.noOptimizationsDesc)))}}const p=(0,n.ZP)(d)},62423:(e,t,o)=>{o.d(t,{e:()=>E});var r=o(90154),s=o(97027),a=o(92950),l=o.n(a),n=o(74806),i=o(77760),c=o(40493),d=o(1156),p=o(58613),m=o(14483),h=o(5842);class u extends l().Component{constructor(e,t){super(e,t),this.defaultState={isDropdownOpen:!1,isExportModalOpen:!1},this.state=Object.assign({},this.defaultState),this.getExportModal=()=>{const{groupBy:e,item:t,reportPathsType:o,reportQueryString:r}=this.props,{isExportModalOpen:s}=this.state;return l().createElement(c.X,{count:1,groupBy:e,isOpen:s,items:[t],onClose:this.handleExportModalClose,reportPathsType:o,reportQueryString:r})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleOnSelect=()=>{const{isDropdownOpen:e}=this.state;this.setState({isDropdownOpen:!e})},this.handleOnToggle=e=>{this.setState({isDropdownOpen:e})},this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleOnToggle=this.handleOnToggle.bind(this),this.handleOnSelect=this.handleOnSelect.bind(this)}render(){const{groupBy:e,isDisabled:t,showPriceListOption:o,intl:a,item:{source_uuid:n},redirectToCostModel:i,router:c}=this.props,d=[l().createElement(r.DropdownItem,{component:"button",isDisabled:t,key:"export-action",onClick:this.handleExportModalOpen},a.formatMessage(s.Z.detailsActionsExport))];return o&&d.unshift(l().createElement(r.DropdownItem,{component:"button",key:"price-list-action",isDisabled:t||e.includes(m.P)||0===n.length,onClick:()=>i(n[0],c)},a.formatMessage(s.Z.detailsActionsPriceList))),l().createElement(l().Fragment,null,l().createElement(r.Dropdown,{onSelect:this.handleOnSelect,toggle:l().createElement(r.KebabToggle,{onToggle:this.handleOnToggle}),isOpen:this.state.isDropdownOpen,isPlain:!0,position:"right",dropdownItems:d}),this.getExportModal())}}const g=(0,d.X1)(((e,t)=>({}))),y={redirectToCostModel:p.F0.redirectToCostModelFromSourceUuid},S=(0,i.connect)(g,y)(u),E=(0,n.ZP)((0,h.E)(S))},90302:(e,t,o)=>{o.d(t,{W:()=>i});var r=o(49382),s=o(12289),a=o(40794),l=o(11331),n=o(43789);const i={costColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end",paddingRight:0},defaultLabel:{minWidth:"63px"},emptyState:{backgroundColor:r.ZP.value,display:"flex",justifyContent:"center",paddingTop:l.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:n.ZP.value},infoDescription:{color:s.ZP.value,fontSize:a.ZP.value},lastReported:{textAlign:"right",paddingRight:"40px"},lastReportedColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end"},managedColumn:{textAlign:"right"},nameColumn:{width:"1%"}}},90569:(e,t,o)=>{o.d(t,{w:()=>y});var r=o(90154),s=o(52636),a=o(40227),l=o(79112),n=o(97027),i=o(92950),c=o.n(i),d=o(74806),p=o(42901),m=o(72483),h=o(5842),u=o(90302);class g extends c().Component{constructor(e){super(e),this.getEmptyState=()=>{const{intl:e,isOptimizations:t,router:o}=this.props,a=(0,l.mB)(o.location.search);if(a.filter_by)for(const e of Object.values(a.filter_by))if("*"!==e)return c().createElement(p.c,{filter:e,showMargin:!1});return t?c().createElement(m.Y,null):c().createElement(r.EmptyState,null,c().createElement(r.EmptyStateIcon,{icon:s.Xk}),c().createElement(r.EmptyStateBody,null,e.formatMessage(n.Z.detailsEmptyState)))},this.getSortBy=e=>{const{columns:t,router:o}=this.props,r=t[e].orderBy,s=(0,l.mB)(o.location.search),a=s&&s.order_by&&s.order_by[r];return a?{index:e,direction:a}:{}},this.getSortParams=e=>({sortBy:this.getSortBy(e),onSort:this.handleOnSort,columnIndex:e}),this.handleOnSelect=(e,t,o)=>{const{onSelected:r,rows:s}=this.props;let a,l=[];-1===o?a=s.map((e=>(e.selected=t,e))):(a=[...s],a[o].selected=t,l=[a[o].item]),this.setState({rows:s},(()=>{r&&r(l,t)}))},this.handleOnSort=(e,t,o)=>{const{columns:r,onSort:s}=this.props;s&&s(r[t].orderBy,o===a.SortByDirection.asc)},this.handleOnRowClick=(e,t)=>{const{onRowClick:o,rows:r}=this.props;r.map((e=>e.selected=!1)),r[t].selected=!0,this.setState({rows:r},(()=>{o&&o(e,t)}))},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}render(){const{columns:e,intl:t,isLoading:o,isOptimizations:s,rows:l}=this.props;return c().createElement(c().Fragment,null,c().createElement(a.TableComposable,{"aria-label":t.formatMessage(n.Z.dataTableAriaLabel),className:"tableOverride",gridBreakPoint:"grid-2xl",hasSelectableRowCaption:s},c().createElement(a.Thead,null,c().createElement(a.Tr,null,e.map(((e,t)=>c().createElement(a.Th,{key:`col-${t}-${e.value}`,modifier:"nowrap",sort:e.isSortable?this.getSortParams(t):void 0,style:e.style},e.name))))),c().createElement(a.Tbody,null,o?c().createElement(a.Tr,null,c().createElement(a.Td,{colSpan:100},c().createElement(r.Bullseye,null,c().createElement("div",{style:{textAlign:"center"}},c().createElement(r.Spinner,{size:"xl"}))))):l.map(((t,o)=>c().createElement(a.Tr,{isSelectable:s,isHoverable:s,isRowSelected:s&&t.selected,onRowClick:s?e=>this.handleOnRowClick(e,o):void 0,key:`row-${o}`},t.cells.map(((r,l)=>0!==l||s?c().createElement(a.Td,{dataLabel:e[l].name,key:`cell-${o}-${l}`,modifier:"nowrap",isActionCell:!s&&l===t.cells.length-1,style:r.style},r.value):c().createElement(a.Td,{dataLabel:e[l].name,key:`cell-${l}-${o}`,modifier:"nowrap",select:{disable:t.selectionDisabled,isSelected:t.selected,onSelect:(e,t)=>this.handleOnSelect(e,t,o),rowIndex:o},style:r.style})))))))),0===l.length&&c().createElement("div",{style:u.W.emptyState},this.getEmptyState()))}}const y=(0,d.ZP)((0,h.E)(g))},22157:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Ce});var r=o(90154),s=o(1326),a=o(46672),l=o(84717),n=o(6456),i=o(97027),c=o(92950),d=o.n(c),p=o(74806),m=o(77760),h=o(52471),u=o(55672),g=o(2985),y=o(47947),S=o(40493),E=o(37269),v=o(19727),f=o(86482),b=o(10066),x=o(1156),O=o(62331),C=o(15920);function P(e={}){return e.account?"account":e.project?"project":e.region?"region":e.service?"service":"date"}var M=o(69511),T=o(15829),Z=o(14483),B=o(5842),k=o(50081),w=o(26744),_=o(6450),D=o(36465),A=o(78898),I=o(45087),R=o(91778),F=o(49382),L=o(33605),$=o(54881),j=o(98499),V=o(48196);const q={costValue:{marginTop:j.ZP.var,marginBottom:0},costLabelUnit:{fontSize:$.ZP.value,color:L.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:F.ZP.var,padding:j.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},title:{paddingBottom:V.ZP.var}},X=[{label:"account",value:"account"},{label:"project",value:"project"},{label:"service",value:"service"},{label:"region",value:"region"}],Q=k.L.ibm;class z extends d().Component{render(){const{currency:e,groupBy:t,isExportsFeatureEnabled:o,onCurrencySelected:s,onGroupBySelected:a,providers:l,providersError:n,report:c,intl:p}=this.props,m=c&&!n&&l&&l.meta&&l.meta.count>0,h=c&&c.meta&&c.meta.total&&c.meta.total.cost&&c.meta.total.cost.total;return d().createElement("header",{style:q.header},d().createElement("div",{style:q.headerContent},d().createElement(r.Title,{headingLevel:"h1",style:q.title,size:r.TitleSizes["2xl"]},p.formatMessage(i.Z.ibmDetailsTitle)),d().createElement("div",{style:q.headerContentRight},d().createElement(_.F,{currency:e,onSelect:s}),o&&d().createElement(w.bj,null))),d().createElement("div",{style:q.headerContent},d().createElement("div",{style:q.headerContentLeft},d().createElement(D.X,{getIdKeyForGroupBy:P,groupBy:t,isDisabled:!m,onSelected:a,options:X,showTags:!0,tagPathsType:Q})),m&&d().createElement("div",null,d().createElement(r.Title,{headingLevel:"h2",style:q.costValue,size:r.TitleSizes["4xl"]},(0,R.xG)(h?c.meta.total.cost.total.value:0,h?c.meta.total.cost.total.units:"USD")),d().createElement("div",{style:q.dateTitle},(0,I.J4)()))))}}const N=(0,x.X1)(((e,t)=>{const o=(0,l.H)(O.NT),r=O.aX.selectProviders(e,s.l.all,o),a=O.aX.selectProvidersError(e,s.l.all,o),n=O.aX.selectProvidersFetchStatus(e,s.l.all,o);return{isExportsFeatureEnabled:A.iJ.selectIsExportsFeatureEnabled(e),providers:(0,f.BV)(r,s.l.ibm),providersError:a,providersFetchStatus:n,providersQueryString:o}})),W=(0,p.ZP)((0,m.connect)(N,{})(z));var H=o(39836),G=o(91919),K=o(98485),J=o(62423),U=o(90569),Y=o(90302),ee=o(54583),te=o(68025);const oe=n.K.ibm;class re extends d().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{groupBy:e,groupByTagKey:t,intl:o,isAllSelected:r,report:s,selectedItems:a,router:l}=this.props;if(!s)return;const n=[],c=(0,M.c)({report:s,idKey:t||e}),p=t?[{name:""},{name:o.formatMessage(i.Z.tagNames)},{name:o.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:o.formatMessage(i.Z.cost),style:Y.W.costColumn},c.length&&{isSortable:!0}),{name:""}]:[{name:""},Object.assign({orderBy:e,name:o.formatMessage(i.Z.detailsResourceNames,{value:e})},c.length&&{isSortable:!0}),{name:o.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:o.formatMessage(i.Z.cost),style:Y.W.costColumn},c.length&&{isSortable:!0}),{name:""}];c.map(((o,s)=>{const i=this.getTotalCost(o,s),c=o&&null!==o.label?o.label:"",p=this.getMonthOverMonthCost(o,s),m=c===`${Z.Xq}${e}`||c===`${Z.Xq}${t}`,h=o.id&&o.id!==o.label?d().createElement("div",{style:Y.W.infoDescription},o.id):null,u=this.getActions(o,m),g=m?c:d().createElement(H.Link,{to:(0,ee.T)({basePath:(0,te.dI)(G._.ibmDetailsBreakdown.path),description:o.id,groupBy:e,id:o.id,router:l,title:c.toString()})},c);n.push({cells:[{},{value:d().createElement("div",null,g,h)},{value:d().createElement("div",null,p)},{value:d().createElement("div",null,i),style:Y.W.managedColumn},{value:d().createElement("div",null,u)}],isOpen:!1,item:o,selected:r||a&&void 0!==a.find((e=>e.id===o.id)),selectionDisabled:m})})),this.setState({columns:p,rows:n})},this.getActions=(e,t)=>{const{groupBy:o,reportQueryString:r}=this.props;return d().createElement(J.e,{groupBy:o,isDisabled:t,item:e,reportPathsType:oe,reportQueryString:r})},this.getMonthOverMonthCost=(e,t)=>{const{intl:o}=this.props,r=(0,R.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),s=null!==e.delta_percent?(0,R.rl)(Math.abs(e.delta_percent)):0,a=!(0===s||"0.00"===s),l=null!==e.delta_percent;let n;return a&&(n="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(n+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(n+=" increase")),l?d().createElement("div",{className:"monthOverMonthOverride"},d().createElement("div",{className:n,key:`month-over-month-cost-${t}`},a?o.formatMessage(i.Z.percent,{value:s}):d().createElement(K.L,null),a&&null!==e.delta_percent&&e.delta_value>0&&d().createElement("span",{className:"fa fa-sort-up",style:Y.W.infoArrow,key:`month-over-month-icon-${t}`}),a&&null!==e.delta_percent&&e.delta_value<0&&d().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},Y.W.infoArrow),Y.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),d().createElement("div",{style:Y.W.infoDescription,key:`month-over-month-info-${t}`},(0,I.Y)(r))):(0,I.Tf)()},this.getTotalCost=(e,t)=>{const{report:o,intl:r}=this.props,s=o&&o.meta&&o.meta.total&&o.meta.total.cost&&o.meta.total.cost.total?o.meta.total.cost.total.value:0,a=0===s?s.toFixed(2):(e.cost.total.value/s*100).toFixed(2);return d().createElement(d().Fragment,null,(0,R.xG)(e.cost.total.value,e.cost.total.units),d().createElement("div",{style:Y.W.infoDescription,key:`total-cost-${t}`},r.formatMessage(i.Z.percentOfCost,{value:a})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{report:t,selectedItems:o}=this.props,r=t&&t.data?JSON.stringify(t.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")===r&&e.selectedItems===o||this.initDatum()}render(){const{isLoading:e,onSelected:t,onSort:o,selectedItems:r}=this.props,{columns:s,rows:a}=this.state;return d().createElement(U.w,{columns:s,isLoading:e,onSelected:t,onSort:o,rows:a,selectedItems:r})}}const se=(0,p.ZP)((0,B.E)(re));var ae=o(36116),le=o(7893),ne=o(48949),ie=o(94282);const ce=k.Q.tag,de=k.L.ibm;class pe extends d().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,o=[{name:e.formatMessage(i.Z.filterByValues,{value:"account"}),key:"account"},{name:e.formatMessage(i.Z.filterByValues,{value:"project"}),key:"project"},{name:e.formatMessage(i.Z.filterByValues,{value:"service"}),key:"service"},{name:e.formatMessage(i.Z.filterByValues,{value:"region"}),key:"region"}];return t&&t.data&&t.data.length&&o.push({name:e.formatMessage(i.Z.filterByValues,{value:Z.up}),key:Z.up}),o},this.updateReport=()=>{const{fetchTag:e,tagQueryString:t}=this.props;e(de,ce,t)}}componentDidMount(){this.setState({categoryOptions:this.getCategoryOptions()},(()=>{this.updateReport()}))}componentDidUpdate(e){const{query:t,tagReport:o}=this.props;(0,ie.X)(o,e.tagReport)?t&&!(0,ie.X)(t,e.query)&&this.updateReport():this.setState({categoryOptions:this.getCategoryOptions()},(()=>{this.updateReport()}))}render(){const{groupBy:e,isAllSelected:t,isBulkSelectDisabled:o,isDisabled:r,isExportDisabled:s,itemsPerPage:a,itemsTotal:l,onBulkSelected:n,onExportClicked:i,onFilterAdded:c,onFilterRemoved:p,pagination:m,query:h,selectedItems:u,tagReport:g}=this.props,{categoryOptions:y}=this.state;return d().createElement(le.k,{categoryOptions:y,groupBy:e,isAllSelected:t,isBulkSelectDisabled:o,isDisabled:r,isExportDisabled:s,itemsPerPage:a,itemsTotal:l,onBulkSelected:n,onExportClicked:i,onFilterAdded:c,onFilterRemoved:p,pagination:m,query:h,resourcePathsType:ae.C.ibm,selectedItems:u,showBulkSelect:!0,showExcludes:!0,showExport:!0,showFilter:!0,tagReport:g,tagPathsType:de})}}const me=(0,x.X1)(((e,t)=>{const o=(0,a.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3});return{tagReport:ne.ux.selectTag(e,de,ce,o),tagReportFetchStatus:ne.ux.selectTagFetchStatus(e,de,ce,o),tagQueryString:o}})),he={fetchTag:ne.xr.Xt},ue=(0,m.connect)(me,he)(pe),ge=(0,p.ZP)(ue);var ye=o(32412);const Se={gcpDetails:{minHeight:"100%"},content:{paddingBottom:j.ZP.value,paddingTop:j.ZP.value},paginationContainer:{marginLeft:j.ZP.value,marginRight:j.ZP.value},pagination:{backgroundColor:F.ZP.value,paddingBottom:ye.ZP.value,paddingTop:ye.ZP.value},tableContainer:{marginLeft:j.ZP.value,marginRight:j.ZP.value},toolbarContainer:{marginLeft:j.ZP.value,marginRight:j.ZP.value}},Ee={filter:{limit:10,offset:0},exclude:{},filter_by:{},group_by:{account:"*"},order_by:{cost:"desc"}},ve=n.C.cost,fe=n.K.ibm;class be extends d().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,o=P(e.group_by),r=(0,E.qV)(e);return(0,M.c)({report:t,idKey:r||o})},this.getExportModal=e=>{const{query:t,report:o,reportQueryString:r}=this.props,{isAllSelected:s,isExportModalOpen:a,selectedItems:l}=this.state,n=P(t.group_by),i=(0,E.qV)(t),c=o&&o.meta?o.meta.count:0,p=[];return l.map((e=>{e.label!==`${Z.Xq}${n}`&&e.label!==`${Z.Xq}${i}`&&p.push(e)})),d().createElement(S.X,{count:s?c:p.length,isAllItems:(s||l.length===c)&&e.length>0,groupBy:i?`${Z.P}${i}`:n,isOpen:a,items:p,onClose:this.handleExportModalClose,reportPathsType:fe,reportQueryString:r})},this.getPagination=(e=!1,t=!1)=>{const{intl:o,query:s,router:a,report:l}=this.props,n=l&&l.meta?l.meta.count:0,c=l&&l.meta&&l.meta.filter&&l.meta.filter.limit?l.meta.filter.limit:Ee.filter.limit,p=l&&l.meta&&l.meta.filter&&l.meta.filter.offset?l.meta.filter.offset:Ee.filter.offset,m=Math.trunc(p/c+1);return d().createElement(r.Pagination,{isCompact:!t,isDisabled:e,itemCount:n,onPerPageSelect:(e,t)=>(0,v.xh)(s,a,t),onSetPage:(e,t)=>(0,v.$9)(s,a,l,t),page:m,perPage:c,titles:{paginationTitle:o.formatMessage(i.Z.paginationTitle,{title:o.formatMessage(i.Z.ibm),placement:t?"bottom":"top"})},variant:t?r.PaginationVariant.bottom:r.PaginationVariant.top,widgetId:"exports-pagination"+(t?"-bottom":"")})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:o,reportQueryString:r,router:s}=this.props,{isAllSelected:a,selectedItems:l}=this.state,n=P(e.group_by),i=(0,E.qV)(e);return d().createElement(se,{groupBy:i?`${Z.P}${i}`:n,groupByTagKey:i,isAllSelected:a,isLoading:o===x.iF.inProgress,onSelected:this.handleSelected,onSort:(t,o)=>(0,v.yB)(e,s,t,o),report:t,reportQueryString:r,selectedItems:l})},this.getToolbar=e=>{const{query:t,router:o,report:r}=this.props,{isAllSelected:s,selectedItems:a}=this.state,l=P(t.group_by),n=(0,E.qV)(t),i=0===e.length,c=r&&r.meta?r.meta.count:0;return d().createElement(ge,{groupBy:n?`${Z.P}${n}`:l,isAllSelected:s,isDisabled:i,isExportDisabled:i||!s&&0===a.length,itemsPerPage:e.length,itemsTotal:c,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,v.$3)(t,o,e),onFilterRemoved:e=>(0,v.q7)(t,o,e),pagination:this.getPagination(i),query:t,selectedItems:a})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{query:t,router:o}=this.props,r=e,s=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{group_by:{[r]:"*"},order_by:{cost:"desc"}});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{o.navigate((0,b.Z)(s,o.location,!0),{replace:!0})}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:o,selectedItems:r}=this.state;let s=[...o?this.getComputedItems():r];e&&e.length>0&&(t?e.map((e=>s.push(e))):e.map((e=>{s=s.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:s})},this.updateReport=()=>{const{fetchReport:e,reportQueryString:t}=this.props;e(fe,ve,t)},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{report:o,reportError:r,reportQueryString:s,router:a}=this.props,{selectedItems:l}=this.state,n=e.reportQueryString!==s,i=!o&&!r,c=!a.location.search,d=t.selectedItems!==l;(n||i||c||d)&&this.updateReport()}render(){const{currency:e,intl:t,providers:o,providersFetchStatus:r,query:a,report:l,reportError:n,reportFetchStatus:c,router:p}=this.props,m=this.getComputedItems(),S=P(a.group_by),E=0===m.length,b=t.formatMessage(i.Z.ibmDetailsTitle);if(n)return d().createElement(y.W,{title:b});if(r===x.iF.inProgress)return d().createElement(h.g,{title:b});if(r===x.iF.complete){if(o&&o.meta&&0===o.meta.count)return d().createElement(g.L,{providerType:s.l.ibm,title:b});if(!(0,f.g8)(o))return d().createElement(u.J,{title:b})}return d().createElement("div",{style:Se.ibmDetails},d().createElement(W,{currency:e,groupBy:S,onCurrencySelected:e=>(0,v._s)(a,p,e),onGroupBySelected:this.handleGroupBySelected,report:l}),d().createElement("div",{style:Se.content},d().createElement("div",{style:Se.toolbarContainer},this.getToolbar(m)),this.getExportModal(m),c===x.iF.inProgress?d().createElement(h.g,null):d().createElement(d().Fragment,null,d().createElement("div",{style:Se.tableContainer},this.getTable()),d().createElement("div",{style:Se.paginationContainer},d().createElement("div",{style:Se.pagination},this.getPagination(E,!0))))))}}const xe=(0,x.X1)(((e,{router:t})=>{const o=(0,a.mB)(t.location.search),r=(0,T.zC)(),n=Object.assign(Object.assign({},Ee),o),i={currency:r,delta:"cost",exclude:n.exclude,filter:Object.assign(Object.assign({},n.filter),{resolution:"monthly",time_scope_units:"month",time_scope_value:-1}),filter_by:n.filter_by,group_by:n.group_by,order_by:n.order_by},c=(0,a.pm)(i),d=C.ZV.selectReport(e,fe,ve,c),p=C.ZV.selectReportError(e,fe,ve,c),m=C.ZV.selectReportFetchStatus(e,fe,ve,c),h=(0,l.H)(O.NT),u=O.aX.selectProviders(e,s.l.all,h),g=O.aX.selectProvidersError(e,s.l.all,h),y=O.aX.selectProvidersFetchStatus(e,s.l.all,h);return{currency:r,providers:(0,f.BV)(u,s.l.ibm),providersError:g,providersFetchStatus:y,query:n,report:d,reportError:p,reportFetchStatus:m,reportQueryString:c}})),Oe={fetchReport:C.nx.fetchReport},Ce=(0,p.ZP)((0,B.E)((0,m.connect)(xe,Oe)(be)))},80794:(e,t,o)=>{e.exports=o.p+"fonts/Red_Hat-IT_Optimization-Gray.svg"}}]);
//# sourceMappingURL=../sourcemaps/ibmDetails.d617caad5b58406887e67d6936a28f87.js.map