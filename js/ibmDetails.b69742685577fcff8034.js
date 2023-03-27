"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[3609],{15265:(e,t,r)=>{r.d(t,{LA:()=>l,ZP:()=>a,mq:()=>s});var o=r(40400);const s={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},l=(0,o.IU)(s),a=l},62423:(e,t,r)=>{r.d(t,{e:()=>b});var o=r(90154),s=r(97027),l=r(92950),a=r.n(l),n=r(74806),i=r(77760),c=r(40493),d=r(1156),p=r(58613),u=r(14483),h=r(5842);class m extends a().Component{constructor(e,t){super(e,t),this.defaultState={isDropdownOpen:!1,isExportModalOpen:!1},this.state=Object.assign({},this.defaultState),this.getExportModal=()=>{const{groupBy:e,item:t,reportPathsType:r,reportQueryString:o}=this.props,{isExportModalOpen:s}=this.state;return a().createElement(c.X,{count:1,groupBy:e,isOpen:s,items:[t],onClose:this.handleExportModalClose,reportPathsType:r,reportQueryString:o})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleOnSelect=()=>{const{isDropdownOpen:e}=this.state;this.setState({isDropdownOpen:!e})},this.handleOnToggle=e=>{this.setState({isDropdownOpen:e})},this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleOnToggle=this.handleOnToggle.bind(this),this.handleOnSelect=this.handleOnSelect.bind(this)}render(){const{groupBy:e,isDisabled:t,showPriceListOption:r,intl:l,item:{source_uuid:n},redirectToCostModel:i,router:c}=this.props,d=[a().createElement(o.DropdownItem,{component:"button",isDisabled:t,key:"export-action",onClick:this.handleExportModalOpen},l.formatMessage(s.Z.detailsActionsExport))];return r&&d.unshift(a().createElement(o.DropdownItem,{component:"button",key:"price-list-action",isDisabled:t||e.includes(u.P)||0===n.length,onClick:()=>i(n[0],c)},l.formatMessage(s.Z.detailsActionsPriceList))),a().createElement(a().Fragment,null,a().createElement(o.Dropdown,{onSelect:this.handleOnSelect,toggle:a().createElement(o.KebabToggle,{onToggle:this.handleOnToggle}),isOpen:this.state.isDropdownOpen,isPlain:!0,position:"right",dropdownItems:d}),this.getExportModal())}}const g=(0,d.X1)(((e,t)=>({}))),y={redirectToCostModel:p.F0.redirectToCostModelFromSourceUuid},S=(0,i.connect)(g,y)(m),b=(0,n.ZP)((0,h.E)(S))},90302:(e,t,r)=>{r.d(t,{W:()=>i});var o=r(49382),s=r(12289),l=r(40794),a=r(11331),n=r(43789);const i={costColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end",paddingRight:0},defaultLabel:{minWidth:"63px"},emptyState:{backgroundColor:o.ZP.value,display:"flex",justifyContent:"center",paddingTop:a.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:n.ZP.value},infoDescription:{color:s.ZP.value,fontSize:l.ZP.value},lastReported:{textAlign:"right",paddingRight:"40px"},lastReportedColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end"},managedColumn:{textAlign:"right"},nameColumn:{width:"1%"}}},90569:(e,t,r)=>{r.d(t,{w:()=>g});var o=r(90154),s=r(52636),l=r(40227),a=r(79112),n=r(97027),i=r(92950),c=r.n(i),d=r(74806),p=r(42901),u=r(5842),h=r(90302);class m extends c().Component{constructor(e){super(e),this.getEmptyState=()=>{const{intl:e,router:t}=this.props,r=(0,a.mB)(t.location.search);if(r.filter_by)for(const e of Object.values(r.filter_by))if("*"!==e)return c().createElement(p.c,{filter:e,showMargin:!1});return c().createElement(o.EmptyState,null,c().createElement(o.EmptyStateIcon,{icon:s.Xk}),c().createElement(o.EmptyStateBody,null,e.formatMessage(n.Z.detailsEmptyState)))},this.getSortBy=e=>{const{columns:t,router:r}=this.props,o=t[e].orderBy,s=(0,a.mB)(r.location.search),l=s&&s.order_by&&s.order_by[o];return l?{index:e,direction:l}:{}},this.getSortParams=e=>({sortBy:this.getSortBy(e),onSort:this.handleOnSort,columnIndex:e}),this.handleOnSelect=(e,t,r)=>{const{onSelected:o,rows:s}=this.props;let l,a=[];-1===r?l=s.map((e=>(e.selected=t,e))):(l=[...s],l[r].selected=t,a=[l[r].item]),this.setState({rows:s},(()=>{o&&o(a,t)}))},this.handleOnSort=(e,t,r)=>{const{columns:o,onSort:s}=this.props;s&&s(o[t].orderBy,r===l.SortByDirection.asc)},this.handleOnRowClick=(e,t)=>{const{onRowClick:r,rows:o}=this.props;o.map((e=>e.selected=!1)),o[t].selected=!0,this.setState({rows:o},(()=>{r&&r(e,t)}))},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}render(){const{columns:e,intl:t,isLoading:r,isRecommendations:s,rows:a}=this.props;return c().createElement(c().Fragment,null,c().createElement(l.TableComposable,{"aria-label":t.formatMessage(n.Z.dataTableAriaLabel),className:"tableOverride",gridBreakPoint:"grid-2xl",hasSelectableRowCaption:s},c().createElement(l.Thead,null,c().createElement(l.Tr,null,e.map(((e,t)=>c().createElement(l.Th,{key:`col-${t}-${e.value}`,modifier:"nowrap",sort:e.isSortable?this.getSortParams(t):void 0,style:e.style},e.name))))),c().createElement(l.Tbody,null,r?c().createElement(l.Tr,null,c().createElement(l.Td,{colSpan:100},c().createElement(o.Bullseye,null,c().createElement("div",{style:{textAlign:"center"}},c().createElement(o.Spinner,{size:"xl"}))))):a.map(((t,r)=>c().createElement(l.Tr,{isSelectable:s,isHoverable:s,isRowSelected:s&&t.selected,onRowClick:e=>this.handleOnRowClick(e,r),key:`row-${r}`},t.cells.map(((o,a)=>0!==a||s?c().createElement(l.Td,{dataLabel:e[a].name,key:`cell-${r}-${a}`,modifier:"nowrap",isActionCell:!s&&a===t.cells.length-1,style:o.style},o.value):c().createElement(l.Td,{dataLabel:e[a].name,key:`cell-${a}-${r}`,modifier:"nowrap",select:{disable:t.selectionDisabled,isSelected:t.selected,onSelect:(e,t)=>this.handleOnSelect(e,t,r),rowIndex:r},style:o.style})))))))),Boolean(0===a.length)&&c().createElement("div",{style:h.W.emptyState},this.getEmptyState()))}}const g=(0,d.ZP)((0,u.E)(m))},22157:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Oe});var o=r(90154),s=r(1326),l=r(46672),a=r(84717),n=r(6456),i=r(97027),c=r(92950),d=r.n(c),p=r(74806),u=r(77760),h=r(52471),m=r(55672),g=r(2985),y=r(47947),S=r(40493),b=r(37269),E=r(19727),v=r(86482),f=r(10066),x=r(1156),C=r(78898),O=r(62331),P=r(15920);function M(e={}){return e.account?"account":e.project?"project":e.region?"region":e.service?"service":"date"}var B=r(69511),T=r(15829),Z=r(14483),k=r(5842),w=r(50081),_=r(19152),D=r(6450),F=r(87560),A=r(45087),I=r(91778),R=r(49382),L=r(33605),$=r(54881),j=r(98499),V=r(48196);const q={costValue:{marginTop:j.ZP.var,marginBottom:0},costLabelUnit:{fontSize:$.ZP.value,color:L.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:R.ZP.var,padding:j.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},title:{paddingBottom:V.ZP.var}},X=[{label:"account",value:"account"},{label:"project",value:"project"},{label:"service",value:"service"},{label:"region",value:"region"}],Q=w.L.ibm;class N extends d().Component{render(){const{currency:e,groupBy:t,isCurrencyFeatureEnabled:r,isExportsFeatureEnabled:s,onCurrencySelected:l,onGroupBySelected:a,providers:n,providersError:c,report:p,intl:u}=this.props,h=p&&!c&&n&&n.meta&&n.meta.count>0,m=p&&p.meta&&p.meta.total&&p.meta.total.cost&&p.meta.total.cost.total;return d().createElement("header",{style:q.header},d().createElement("div",{style:q.headerContent},d().createElement(o.Title,{headingLevel:"h1",style:q.title,size:o.TitleSizes["2xl"]},u.formatMessage(i.Z.ibmDetailsTitle)),d().createElement("div",{style:q.headerContentRight},r&&d().createElement(D.F,{currency:e,onSelect:l}),s&&d().createElement(_.bj,null))),d().createElement("div",{style:q.headerContent},d().createElement("div",{style:q.headerContentLeft},d().createElement(F.X,{getIdKeyForGroupBy:M,groupBy:t,isDisabled:!h,onSelected:a,options:X,showTags:!0,tagReportPathsType:Q})),Boolean(h)&&d().createElement("div",null,d().createElement(o.Title,{headingLevel:"h2",style:q.costValue,size:o.TitleSizes["4xl"]},(0,I.xG)(m?p.meta.total.cost.total.value:0,m?p.meta.total.cost.total.units:"USD")),d().createElement("div",{style:q.dateTitle},(0,A.J4)()))))}}const W=(0,x.X1)(((e,t)=>{const r=(0,a.H)(O.NT),o=O.aX.selectProviders(e,s.l.all,r),l=O.aX.selectProvidersError(e,s.l.all,r),n=O.aX.selectProvidersFetchStatus(e,s.l.all,r);return{isCurrencyFeatureEnabled:C.iJ.selectIsCurrencyFeatureEnabled(e),isExportsFeatureEnabled:C.iJ.selectIsExportsFeatureEnabled(e),providers:(0,v.BV)(o,s.l.ibm),providersError:l,providersFetchStatus:n,providersQueryString:r}})),H=(0,p.ZP)((0,u.connect)(W,{})(N));var J=r(39836),z=r(91919),G=r(98485),K=r(62423),U=r(90569),Y=r(90302),ee=r(54583),te=r(68025);const re=n.K.ibm;class oe extends d().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{groupBy:e,groupByTagKey:t,intl:r,isAllSelected:o,report:s,selectedItems:l,router:a}=this.props;if(!s)return;const n=[],c=(0,B.c)({report:s,idKey:t||e}),p=t?[{name:""},{name:r.formatMessage(i.Z.tagNames)},{name:r.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:r.formatMessage(i.Z.cost),style:Y.W.costColumn},c.length&&{isSortable:!0}),{name:""}]:[{name:""},Object.assign({orderBy:e,name:r.formatMessage(i.Z.detailsResourceNames,{value:e})},c.length&&{isSortable:!0}),{name:r.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:r.formatMessage(i.Z.cost),style:Y.W.costColumn},c.length&&{isSortable:!0}),{name:""}];c.map(((r,s)=>{const i=this.getTotalCost(r,s),c=r&&null!==r.label?r.label:"",p=this.getMonthOverMonthCost(r,s),u=c===`${Z.Xq}${e}`||c===`${Z.Xq}${t}`,h=r.id&&r.id!==r.label?d().createElement("div",{style:Y.W.infoDescription},r.id):null,m=this.getActions(r,u),g=u?c:d().createElement(J.Link,{to:(0,ee.Tm)({basePath:(0,te.dI)(z._.ibmDetailsBreakdown.path),description:r.id,groupBy:e,id:r.id,router:a,title:c.toString()})},c);n.push({cells:[{},{value:d().createElement("div",null,g,h)},{value:d().createElement("div",null,p)},{value:d().createElement("div",null,i),style:Y.W.managedColumn},{value:d().createElement("div",null,m)}],isOpen:!1,item:r,selected:o||l&&void 0!==l.find((e=>e.id===r.id)),selectionDisabled:u})})),this.setState({columns:p,rows:n})},this.getActions=(e,t)=>{const{groupBy:r,reportQueryString:o}=this.props;return d().createElement(K.e,{groupBy:r,isDisabled:t,item:e,reportPathsType:re,reportQueryString:o})},this.getMonthOverMonthCost=(e,t)=>{const{intl:r}=this.props,o=(0,I.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),s=null!==e.delta_percent?(0,I.rl)(Math.abs(e.delta_percent)):0,l=!(0===s||"0.00"===s),a=null!==e.delta_percent;let n;return l&&(n="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(n+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(n+=" increase")),a?d().createElement("div",{className:"monthOverMonthOverride"},d().createElement("div",{className:n,key:`month-over-month-cost-${t}`},l?r.formatMessage(i.Z.percent,{value:s}):d().createElement(G.L,null),Boolean(l&&null!==e.delta_percent&&e.delta_value>0)&&d().createElement("span",{className:"fa fa-sort-up",style:Y.W.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(l&&null!==e.delta_percent&&e.delta_value<0)&&d().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},Y.W.infoArrow),Y.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),d().createElement("div",{style:Y.W.infoDescription,key:`month-over-month-info-${t}`},(0,A.Y)(o))):(0,A.Tf)()},this.getTotalCost=(e,t)=>{const{report:r,intl:o}=this.props,s=r&&r.meta&&r.meta.total&&r.meta.total.cost&&r.meta.total.cost.total?r.meta.total.cost.total.value:0,l=0===s?s.toFixed(2):(e.cost.total.value/s*100).toFixed(2);return d().createElement(d().Fragment,null,(0,I.xG)(e.cost.total.value,e.cost.total.units),d().createElement("div",{style:Y.W.infoDescription,key:`total-cost-${t}`},o.formatMessage(i.Z.percentOfCost,{value:l})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{report:t,selectedItems:r}=this.props,o=t&&t.data?JSON.stringify(t.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")===o&&e.selectedItems===r||this.initDatum()}render(){const{isLoading:e,onSelected:t,onSort:r,selectedItems:o}=this.props,{columns:s,rows:l}=this.state;return d().createElement(U.w,{columns:s,isLoading:e,onSelected:t,onSort:r,rows:l,selectedItems:o})}}const se=(0,p.ZP)((0,k.E)(oe));var le=r(36116),ae=r(70539),ne=r(48949),ie=r(94282);const ce=w.Q.tag,de=w.L.ibm;class pe extends d().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,r=[{name:e.formatMessage(i.Z.filterByValues,{value:"account"}),key:"account"},{name:e.formatMessage(i.Z.filterByValues,{value:"project"}),key:"project"},{name:e.formatMessage(i.Z.filterByValues,{value:"service"}),key:"service"},{name:e.formatMessage(i.Z.filterByValues,{value:"region"}),key:"region"}];return t&&t.data&&t.data.length&&r.push({name:e.formatMessage(i.Z.filterByValues,{value:Z.up}),key:Z.up}),r}}componentDidMount(){const{fetchTag:e,tagReportFetchStatus:t,tagQueryString:r}=this.props;this.setState({categoryOptions:this.getCategoryOptions()},(()=>{t!==x.iF.inProgress&&e(de,ce,r)}))}componentDidUpdate(e){const{fetchTag:t,query:r,tagReport:o,tagReportFetchStatus:s,tagQueryString:l}=this.props;(0,ie.X)(o,e.tagReport)?r&&!(0,ie.X)(r,e.query)&&s!==x.iF.inProgress&&t(de,ce,l):this.setState({categoryOptions:this.getCategoryOptions()},(()=>{s!==x.iF.inProgress&&t(de,ce,l)}))}render(){const{groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isDisabled:o,isExportDisabled:s,itemsPerPage:l,itemsTotal:a,onBulkSelected:n,onExportClicked:i,onFilterAdded:c,onFilterRemoved:p,pagination:u,query:h,selectedItems:m,tagReport:g}=this.props,{categoryOptions:y}=this.state;return d().createElement(ae.k,{categoryOptions:y,groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isDisabled:o,isExportDisabled:s,itemsPerPage:l,itemsTotal:a,onBulkSelected:n,onExportClicked:i,onFilterAdded:c,onFilterRemoved:p,pagination:u,query:h,resourcePathsType:le.C.ibm,selectedItems:m,showBulkSelect:!0,showExport:!0,showFilter:!0,tagReport:g,tagReportPathsType:de})}}const ue=(0,x.X1)(((e,t)=>{const r=(0,l.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3});return{tagReport:ne.ux.selectTag(e,de,ce,r),tagReportFetchStatus:ne.ux.selectTagFetchStatus(e,de,ce,r),tagQueryString:r}})),he={fetchTag:ne.xr.Xt},me=(0,u.connect)(ue,he)(pe),ge=(0,p.ZP)(me);var ye=r(32412);const Se={gcpDetails:{minHeight:"100%"},content:{paddingBottom:j.ZP.value,paddingTop:j.ZP.value},paginationContainer:{marginLeft:j.ZP.value,marginRight:j.ZP.value},pagination:{backgroundColor:R.ZP.value,paddingBottom:ye.ZP.value,paddingTop:ye.ZP.value},tableContainer:{marginLeft:j.ZP.value,marginRight:j.ZP.value},toolbarContainer:{marginLeft:j.ZP.value,marginRight:j.ZP.value}},be={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},exclude:{},filter_by:{},group_by:{account:"*"},order_by:{cost:"desc"}},Ee=n.C.cost,ve=n.K.ibm;class fe extends d().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,r=M(e.group_by),o=(0,b.qV)(e);return(0,B.c)({report:t,idKey:o||r})},this.getExportModal=e=>{const{query:t,report:r,reportQueryString:o}=this.props,{isAllSelected:s,isExportModalOpen:l,selectedItems:a}=this.state,n=M(t.group_by),i=(0,b.qV)(t),c=r&&r.meta?r.meta.count:0,p=[];return a.map((e=>{e.label!==`${Z.Xq}${n}`&&e.label!==`${Z.Xq}${i}`&&p.push(e)})),d().createElement(S.X,{count:s?c:p.length,isAllItems:(s||a.length===c)&&e.length>0,groupBy:i?`${Z.P}${i}`:n,isOpen:l,items:p,onClose:this.handleExportModalClose,reportPathsType:ve,reportQueryString:o})},this.getPagination=(e=!1,t=!1)=>{const{intl:r,query:s,router:l,report:a}=this.props,n=a&&a.meta?a.meta.count:0,c=a&&a.meta&&a.meta.filter&&a.meta.filter.limit?a.meta.filter.limit:be.filter.limit,p=(a&&a.meta&&a.meta.filter&&a.meta.filter.offset?a.meta.filter.offset:be.filter.offset)/c+1;return d().createElement(o.Pagination,{isCompact:!t,isDisabled:e,itemCount:n,onPerPageSelect:(e,t)=>(0,E.xh)(s,l,t),onSetPage:(e,t)=>(0,E.$9)(s,l,a,t),page:p,perPage:c,titles:{paginationTitle:r.formatMessage(i.Z.paginationTitle,{title:r.formatMessage(i.Z.ibm),placement:t?"bottom":"top"})},variant:t?o.PaginationVariant.bottom:o.PaginationVariant.top,widgetId:"exports-pagination"+(t?"-bottom":"")})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:r,reportQueryString:o,router:s}=this.props,{isAllSelected:l,selectedItems:a}=this.state,n=M(e.group_by),i=(0,b.qV)(e);return d().createElement(se,{groupBy:i?`${Z.P}${i}`:n,groupByTagKey:i,isAllSelected:l,isLoading:r===x.iF.inProgress,onSelected:this.handleSelected,onSort:(t,r)=>(0,E.yB)(e,s,t,r),report:t,reportQueryString:o,selectedItems:a})},this.getToolbar=e=>{const{query:t,router:r,report:o}=this.props,{isAllSelected:s,selectedItems:l}=this.state,a=M(t.group_by),n=(0,b.qV)(t),i=0===e.length,c=o&&o.meta?o.meta.count:0;return d().createElement(ge,{groupBy:n?`${Z.P}${n}`:a,isAllSelected:s,isDisabled:i,isExportDisabled:i||!s&&0===l.length,itemsPerPage:e.length,itemsTotal:c,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,E.$3)(t,r,e),onFilterRemoved:e=>(0,E.q7)(t,r,e),pagination:this.getPagination(i),query:t,selectedItems:l})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{query:t,router:r}=this.props,o=e,s=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{group_by:{[o]:"*"},order_by:{cost:"desc"}});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{r.navigate((0,f.Z)(s,r.location,!0),{replace:!0})}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:r,selectedItems:o}=this.state;let s=[...r?this.getComputedItems():o];e&&e.length>0&&(t?e.map((e=>s.push(e))):e.map((e=>{s=s.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:s})},this.updateReport=()=>{const{fetchReport:e,reportQueryString:t}=this.props;e(ve,Ee,t)},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{report:r,reportError:o,reportQueryString:s,router:l}=this.props,{selectedItems:a}=this.state,n=e.reportQueryString!==s,i=!r&&!o,c=!l.location.search,d=t.selectedItems!==a;(n||i||c||d)&&this.updateReport()}render(){const{currency:e,intl:t,providers:r,providersFetchStatus:o,query:l,report:a,reportError:n,reportFetchStatus:c,router:p}=this.props,u=this.getComputedItems(),S=M(l.group_by),b=0===u.length,f=t.formatMessage(i.Z.ibmDetailsTitle);if(n)return d().createElement(y.W,{title:f});if(o===x.iF.inProgress)return d().createElement(h.g,{title:f});if(o===x.iF.complete){if(r&&r.meta&&0===r.meta.count)return d().createElement(g.L,{providerType:s.l.ibm,title:f});if(!(0,v.g8)(r))return d().createElement(m.J,{title:f})}return d().createElement("div",{style:Se.ibmDetails},d().createElement(H,{currency:e,groupBy:S,onCurrencySelected:e=>(0,E._s)(l,p,e),onGroupBySelected:this.handleGroupBySelected,report:a}),d().createElement("div",{style:Se.content},d().createElement("div",{style:Se.toolbarContainer},this.getToolbar(u)),this.getExportModal(u),c===x.iF.inProgress?d().createElement(h.g,null):d().createElement(d().Fragment,null,d().createElement("div",{style:Se.tableContainer},this.getTable()),d().createElement("div",{style:Se.paginationContainer},d().createElement("div",{style:Se.pagination},this.getPagination(b,!0))))))}}const xe=(0,x.X1)(((e,{router:t})=>{const r=(0,l.mB)(t.location.search),o=C.iJ.selectIsCurrencyFeatureEnabled(e)?(0,T.zC)():void 0,n={delta:"cost",filter:Object.assign(Object.assign({},be.filter),r.filter),filter_by:r.filter_by||be.filter_by,exclude:r.exclude||be.exclude,group_by:r.group_by||be.group_by,order_by:r.order_by||be.order_by},i=(0,l.pm)(Object.assign(Object.assign({},n),{currency:o})),c=P.ZV.selectReport(e,ve,Ee,i),d=P.ZV.selectReportError(e,ve,Ee,i),p=P.ZV.selectReportFetchStatus(e,ve,Ee,i),u=(0,a.H)(O.NT),h=O.aX.selectProviders(e,s.l.all,u),m=O.aX.selectProvidersError(e,s.l.all,u),g=O.aX.selectProvidersFetchStatus(e,s.l.all,u);return{currency:o,providers:(0,v.BV)(h,s.l.ibm),providersError:m,providersFetchStatus:g,query:n,report:c,reportError:d,reportFetchStatus:p,reportQueryString:i}})),Ce={fetchReport:P.nx.fetchReport},Oe=(0,p.ZP)((0,k.E)((0,u.connect)(xe,Ce)(fe)))}}]);
//# sourceMappingURL=../sourcemaps/ibmDetails.80c2d925ca943fbc3b961bb5d8ed1f74.js.map