"use strict";(self.webpackChunkcostManagement=self.webpackChunkcostManagement||[]).push([[3609],{15265:(e,t,r)=>{r.d(t,{LA:()=>l,ZP:()=>s,mq:()=>o});var a=r(40400);const o={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},l=(0,a.IU)(o),s=l},80965:(e,t,r)=>{r.d(t,{V_:()=>l,ZP:()=>s,jm:()=>o});var a=r(40400);const o={name:"MinusIcon",height:512,width:448,svgPath:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0},l=(0,a.IU)(o),s=l},40794:(e,t)=>{t.zf={name:"--pf-global--FontSize--xs",value:"0.75rem",var:"var(--pf-global--FontSize--xs)"},t.ZP=t.zf},12289:(e,t)=>{t.Jd={name:"--pf-global--disabled-color--100",value:"#6a6e73",var:"var(--pf-global--disabled-color--100)"},t.ZP=t.Jd},11331:(e,t)=>{t.po={name:"--pf-global--spacer--3xl",value:"4rem",var:"var(--pf-global--spacer--3xl)"},t.ZP=t.po},43789:(e,t)=>{t.Q8={name:"--pf-global--spacer--xs",value:"0.25rem",var:"var(--pf-global--spacer--xs)"},t.ZP=t.Q8},15984:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(85893),o=r(90154),l=r(15138),s=function(){return s=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)};const n=function(){return(0,a.jsxs)(o.EmptyState,s({variant:o.EmptyStateVariant.large,className:"ins-c-empty-state__unavailable pf-m-redhat-font"},{children:[(0,a.jsx)(o.EmptyStateIcon,{icon:l.ExclamationCircleIcon}),(0,a.jsx)(o.Title,s({headingLevel:"h5",size:"lg"},{children:"This page is temporarily unavailable"})),(0,a.jsxs)(o.EmptyStateBody,{children:["Try refreshing the page. If the problem persists, contact your organization administrator or visit our",(0,a.jsxs)("a",s({href:"https://status.redhat.com/",target:"_blank",rel:"noopener noreferrer"},{children:[" ","status page"]}))," ","for known outages."]})]}))}},91882:(e,t,r)=>{r.d(t,{W:()=>c});var a=r(49382),o=r(12289),l=r(40794),s=r(11331),n=r(48196),i=r(43789);const c={costColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end",paddingRight:0},defaultLabel:{minWidth:"50px"},emptyState:{backgroundColor:a.ZP.value,display:"flex",justifyContent:"center",paddingTop:s.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:i.ZP.value},infoDescription:{color:o.ZP.value,fontSize:l.ZP.value},lastItem:{textAlign:"right",paddingRight:"3.8rem"},lastItemColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end"},managedColumn:{textAlign:"right"},nameColumn:{width:"1%"},warningIcon:{paddingLeft:n.ZP.var}}},70637:(e,t,r)=>{r.d(t,{w:()=>u,V:()=>y});var a=r(90154),o=r(52636),l=r(40227),s=r(97027),n=r(92950),i=r.n(n),c=r(74806),d=r(42901),p=r(5842),m=r(91882);class h extends i().Component{constructor(e){super(e),this.getEmptyState=()=>{const{filterBy:e,intl:t}=this.props;if(e)for(const t of Object.values(e))if("*"!==t)return i().createElement(d.c,{filter:t,showMargin:!1});return i().createElement(a.EmptyState,null,i().createElement(a.EmptyStateIcon,{icon:o.Xk}),i().createElement(a.EmptyStateBody,null,t.formatMessage(s.Z.detailsEmptyState)))},this.getSortBy=e=>{const{columns:t,orderBy:r}=this.props,a=r&&r[t[e].orderBy];return a?{index:e,direction:a}:{}},this.getSortParams=e=>({sortBy:this.getSortBy(e),onSort:this.handleOnSort,columnIndex:e}),this.handleOnSelect=(e,t,r)=>{const{onSelected:a,rows:o}=this.props;let l,s=[];-1===r?l=o.map((e=>(e.selected=t,e))):(l=[...o],l[r].selected=t,s=[l[r].item]),this.setState({rows:o},(()=>{a&&a(s,t)}))},this.handleOnSort=(e,t,r)=>{const{columns:a,onSort:o}=this.props;o&&o(a[t].orderBy,r===l.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}render(){const{columns:e,intl:t,isActionsCell:r=!1,isLoading:o,rows:n}=this.props;return i().createElement(i().Fragment,null,i().createElement(l.TableComposable,{"aria-label":t.formatMessage(s.Z.dataTableAriaLabel),className:"tableOverride",gridBreakPoint:"grid-2xl",variant:l.TableVariant.compact},i().createElement(l.Thead,null,i().createElement(l.Tr,null,e.map(((e,t)=>i().createElement(l.Th,{key:`col-${t}-${e.value}`,modifier:"nowrap",sort:e.isSortable?this.getSortParams(t):void 0,style:e.style},e.name))))),i().createElement(l.Tbody,null,o?i().createElement(l.Tr,null,i().createElement(l.Td,{colSpan:100},i().createElement(a.Bullseye,null,i().createElement("div",{style:{textAlign:"center"}},i().createElement(a.Spinner,{size:"xl"}))))):n.map(((t,a)=>i().createElement(l.Tr,{key:`row-${a}`},t.cells.map(((o,s)=>0===s?i().createElement(l.Td,{dataLabel:e[s].name,key:`cell-${s}-${a}`,modifier:"nowrap",select:{disable:t.selectionDisabled,isSelected:t.selected,onSelect:(e,t)=>this.handleOnSelect(e,t,a),rowIndex:a},style:o.style}):i().createElement(l.Td,{dataLabel:e[s].name,key:`cell-${a}-${s}`,modifier:"nowrap",isActionCell:r&&s===t.cells.length-1,style:o.style},o.value)))))))),0===n.length&&i().createElement("div",{style:m.W.emptyState},this.getEmptyState()))}}const u=(0,c.ZP)((0,p.E)(h));class g extends i().Component{constructor(e){super(e),this.getEmptyState=()=>{const{emptyState:e,filterBy:t,intl:r}=this.props;if(t)for(const e of Object.values(t))if("*"!==e)return i().createElement(d.c,{filter:e,showMargin:!1});return e||i().createElement(a.EmptyState,null,i().createElement(a.EmptyStateIcon,{icon:o.Xk}),i().createElement(a.EmptyStateBody,null,r.formatMessage(s.Z.detailsEmptyState)))},this.getSortBy=e=>{const{columns:t,orderBy:r}=this.props,a=r&&r[t[e].orderBy];return a?{index:e,direction:a}:{}},this.getSortParams=e=>({sortBy:this.getSortBy(e),onSort:this.handleOnSort,columnIndex:e}),this.handleOnSort=(e,t,r)=>{const{columns:a,onSort:o}=this.props;o&&o(a[t].orderBy,r===l.SortByDirection.asc)},this.handleOnRowClick=(e,t)=>{const{onRowClick:r,rows:a}=this.props;a.map((e=>e.selected=!1)),a[t].selected=!0,this.setState({rows:a},(()=>{r&&r(e,t)}))},this.handleOnSort=this.handleOnSort.bind(this)}render(){const{columns:e,intl:t,isLoading:r,rows:o}=this.props;return i().createElement(i().Fragment,null,i().createElement(l.TableComposable,{"aria-label":t.formatMessage(s.Z.selectableTableAriaLabel),gridBreakPoint:"grid-2xl",hasSelectableRowCaption:!0,variant:l.TableVariant.compact},i().createElement(l.Thead,null,i().createElement(l.Tr,null,e.map(((e,t)=>i().createElement(l.Th,{key:`col-${t}-${e.value}`,modifier:"nowrap",sort:e.isSortable?this.getSortParams(t):void 0,style:e.style},e.name))))),i().createElement(l.Tbody,null,r?i().createElement(l.Tr,null,i().createElement(l.Td,{colSpan:100},i().createElement(a.Bullseye,null,i().createElement("div",{style:{textAlign:"center"}},i().createElement(a.Spinner,{size:"xl"}))))):o.map(((r,a)=>i().createElement(l.Tr,{"aria-label":t.formatMessage(s.Z.selectableTableRowAriaLabel),isSelectable:!0,isHoverable:!0,isRowSelected:r.selected,onRowClick:e=>this.handleOnRowClick(e,a),key:`row-${a}`},r.cells.map(((r,o)=>0===o?i().createElement(l.Th,{"aria-label":t.formatMessage(s.Z.selectableTableHeaderAriaLabel),dataLabel:e[o].name,key:`cell-${a}-${o}`,modifier:"nowrap",style:r.style},r.value):i().createElement(l.Td,{dataLabel:e[o].name,key:`cell-${a}-${o}`,modifier:"nowrap",style:r.style},r.value)))))))),0===o.length&&i().createElement("div",{style:m.W.emptyState},this.getEmptyState()))}}const y=(0,c.ZP)((0,p.E)(g))},98485:(e,t,r)=>{r.d(t,{L:()=>s});var a=r(80965),o=r(92950),l=r.n(o);const s=()=>l().createElement("span",{className:"emptyValueContainer"},l().createElement(a.V_,null))},86182:(e,t,r)=>{r.d(t,{e:()=>f});var a=r(90154),o=r(97027),l=r(92950),s=r.n(l),n=r(74806),i=r(36613),c=r(96703),d=r(1156),p=r(58613),m=r(14483),h=r(5842);class u extends s().Component{constructor(e,t){super(e,t),this.defaultState={isDropdownOpen:!1,isExportModalOpen:!1},this.state=Object.assign({},this.defaultState),this.getExportModal=()=>{const{groupBy:e,item:t,reportPathsType:r,reportQueryString:a}=this.props,{isExportModalOpen:o}=this.state;return s().createElement(c.X,{count:1,groupBy:e,isOpen:o,items:[t],onClose:this.handleExportModalClose,reportPathsType:r,reportQueryString:a})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleOnSelect=()=>{const{isDropdownOpen:e}=this.state;this.setState({isDropdownOpen:!e})},this.handleOnToggle=e=>{this.setState({isDropdownOpen:e})},this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleOnToggle=this.handleOnToggle.bind(this),this.handleOnSelect=this.handleOnSelect.bind(this)}render(){const{groupBy:e,isDisabled:t,showPriceListOption:r,intl:l,item:{source_uuid:n},redirectToCostModel:i,router:c}=this.props,d=[s().createElement(a.DropdownItem,{component:"button",isDisabled:t,key:"export-action",onClick:this.handleExportModalOpen},l.formatMessage(o.Z.detailsActionsExport))];return r&&d.unshift(s().createElement(a.DropdownItem,{component:"button",key:"price-list-action",isDisabled:t||e.includes(m.P)||0===n.length,onClick:()=>i(n[0],c)},l.formatMessage(o.Z.detailsActionsPriceList))),s().createElement(s().Fragment,null,s().createElement(a.Dropdown,{onSelect:this.handleOnSelect,toggle:s().createElement(a.KebabToggle,{onToggle:this.handleOnToggle}),isOpen:this.state.isDropdownOpen,isPlain:!0,position:"right",dropdownItems:d}),this.getExportModal())}}const g=(0,d.X1)(((e,t)=>({}))),y={redirectToCostModel:p.F0.redirectToCostModelFromSourceUuid},S=(0,i.connect)(g,y)(u),f=(0,n.ZP)((0,h.E)(S))},55720:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Ce});var a=r(90154),o=r(1326),l=r(46672),s=r(84717),n=r(6456),i=r(97027),c=r(92950),d=r.n(c),p=r(74806),m=r(36613),h=r(96703),u=r(38274),g=r(41255),y=r(86882),S=r(46955);function f(e={}){return e.account?"account":e.project?"project":e.region?"region":e.service?"service":"date"}var v=r(34328),b=r(45402),E=r(1032),x=r(32924),O=r(50859),C=r(1156),P=r(62331),T=r(15920),B=r(15829),M=r(14483),Z=r(5842),w=r(50081),k=r(37764),A=r(6450),I=r(63391),D=r(22369),_=r(45087),F=r(91778),L=r(49382),R=r(33605),j=r(54881),$=r(98499),V=r(48196);const q={costValue:{marginTop:$.ZP.var,marginBottom:0},costLabelUnit:{fontSize:j.ZP.value,color:R.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:L.ZP.var,padding:$.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},title:{paddingBottom:V.ZP.var}},X=[{label:"account",value:"account"},{label:"project",value:"project"},{label:"service",value:"service"},{label:"region",value:"region"}],Q=w.L.ibm;class z extends d().Component{render(){const{currency:e,groupBy:t,isExportsFeatureEnabled:r,onCurrencySelected:o,onGroupBySelected:l,providers:s,providersError:n,report:c,intl:p}=this.props,m=c&&!n&&s&&s.meta&&s.meta.count>0,h=c&&c.meta&&c.meta.total&&c.meta.total.cost&&c.meta.total.cost.total;return d().createElement("header",{style:q.header},d().createElement("div",{style:q.headerContent},d().createElement(a.Title,{headingLevel:"h1",style:q.title,size:a.TitleSizes["2xl"]},p.formatMessage(i.Z.ibmDetailsTitle)),d().createElement("div",{style:q.headerContentRight},d().createElement(A.F,{currency:e,onSelect:o}),r&&d().createElement(k.bj,null))),d().createElement("div",{style:q.headerContent},d().createElement("div",{style:q.headerContentLeft},d().createElement(I.X,{getIdKeyForGroupBy:f,groupBy:t,isDisabled:!m,onSelected:l,options:X,showTags:!0,tagPathsType:Q})),m&&d().createElement("div",null,d().createElement(a.Title,{headingLevel:"h2",style:q.costValue,size:a.TitleSizes["4xl"]},(0,F.xG)(h?c.meta.total.cost.total.value:0,h?c.meta.total.cost.total.units:"USD")),d().createElement("div",{style:q.dateTitle},(0,_.J4)()))))}}const N=(0,C.X1)(((e,t)=>{const r=(0,s.H)(P.NT),a=P.aX.selectProviders(e,o.l.all,r),l=P.aX.selectProvidersError(e,o.l.all,r),n=P.aX.selectProvidersFetchStatus(e,o.l.all,r);return{isExportsFeatureEnabled:D.iJ.selectIsExportsFeatureEnabled(e),providers:(0,E.BV)(a,o.l.ibm),providersError:l,providersFetchStatus:n,providersQueryString:r}})),W=(0,p.ZP)((0,m.connect)(N,{})(z));var H=r(39836),J=r(91919),K=r(70637),G=r(91882),U=r(98485),Y=r(86182),ee=r(21857),te=r(68025);const re=n.K.ibm;class ae extends d().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{groupBy:e,groupByTagKey:t,intl:r,isAllSelected:a,report:o,selectedItems:l,router:s}=this.props;if(!o)return;const n=[],c=(0,v.c)({report:o,idKey:t||e}),p=t?[{name:""},{name:r.formatMessage(i.Z.tagNames)},{name:r.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:r.formatMessage(i.Z.cost),style:G.W.costColumn},c.length&&{isSortable:!0}),{name:""}]:[{name:""},Object.assign({orderBy:e,name:r.formatMessage(i.Z.detailsResourceNames,{value:e})},c.length&&{isSortable:!0}),{name:r.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:r.formatMessage(i.Z.cost),style:G.W.costColumn},c.length&&{isSortable:!0}),{name:""}];c.map(((r,o)=>{const i=this.getTotalCost(r,o),c=r&&null!==r.label?r.label:"",p=this.getMonthOverMonthCost(r,o),m=c===`${M.Xq}${e}`||c===`${M.Xq}${t}`,h=r.id&&r.id!==r.label?d().createElement("div",{style:G.W.infoDescription},r.id):null,u=this.getActions(r,m),g=m?c:d().createElement(H.Link,{to:(0,ee.T)({basePath:(0,te.dI)(J._.ibmDetailsBreakdown.path),description:r.id,groupBy:e,id:r.id,router:s,title:c.toString()})},c);n.push({cells:[{},{value:d().createElement("div",null,g,h)},{value:p},{value:i,style:G.W.managedColumn},{value:u}],isOpen:!1,item:r,selected:a||l&&void 0!==l.find((e=>e.id===r.id)),selectionDisabled:m})})),this.setState({columns:p,rows:n})},this.getActions=(e,t)=>{const{groupBy:r,reportQueryString:a}=this.props;return d().createElement(Y.e,{groupBy:r,isDisabled:t,item:e,reportPathsType:re,reportQueryString:a})},this.getMonthOverMonthCost=(e,t)=>{const{intl:r}=this.props,a=(0,F.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),o=null!==e.delta_percent?(0,F.rl)(Math.abs(e.delta_percent)):0,l=!(0===o||"0.00"===o),s=null!==e.delta_percent;let n;return l&&(n="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(n+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(n+=" increase")),s?d().createElement("div",{className:"monthOverMonthOverride"},d().createElement("div",{className:n,key:`month-over-month-cost-${t}`},l?r.formatMessage(i.Z.percent,{value:o}):d().createElement(U.L,null),l&&null!==e.delta_percent&&e.delta_value>0&&d().createElement("span",{className:"fa fa-sort-up",style:G.W.infoArrow,key:`month-over-month-icon-${t}`}),l&&null!==e.delta_percent&&e.delta_value<0&&d().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},G.W.infoArrow),G.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),d().createElement("div",{style:G.W.infoDescription,key:`month-over-month-info-${t}`},(0,_.Y)(a))):(0,_.Tf)()},this.getTotalCost=(e,t)=>{const{report:r,intl:a}=this.props,o=r&&r.meta&&r.meta.total&&r.meta.total.cost&&r.meta.total.cost.total?r.meta.total.cost.total.value:0,l=0===o?o.toFixed(2):(e.cost.total.value/o*100).toFixed(2);return d().createElement(d().Fragment,null,(0,F.xG)(e.cost.total.value,e.cost.total.units),d().createElement("div",{style:G.W.infoDescription,key:`total-cost-${t}`},a.formatMessage(i.Z.percentOfCost,{value:l})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{report:t,selectedItems:r}=this.props,a=t&&t.data?JSON.stringify(t.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")===a&&e.selectedItems===r||this.initDatum()}render(){const{filterBy:e,isLoading:t,onSelected:r,onSort:a,orderBy:o,selectedItems:l}=this.props,{columns:s,rows:n}=this.state;return d().createElement(K.w,{columns:s,filterBy:e,isActionsCell:!0,isLoading:t,onSelected:r,onSort:a,orderBy:o,rows:n,selectedItems:l})}}const oe=(0,p.ZP)((0,Z.E)(ae));var le=r(36116),se=r(70200),ne=r(84999),ie=r(48949);const ce=w.Q.tag,de=w.L.ibm;class pe extends d().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,r=[{name:e.formatMessage(i.Z.filterByValues,{value:"account"}),key:"account"},{name:e.formatMessage(i.Z.filterByValues,{value:"project"}),key:"project"},{name:e.formatMessage(i.Z.filterByValues,{value:"service"}),key:"service"},{name:e.formatMessage(i.Z.filterByValues,{value:"region"}),key:"region"}];return t&&t.data&&t.data.length&&r.push({name:e.formatMessage(i.Z.filterByValues,{value:M.up}),key:M.up}),r},this.updateReport=()=>{const{fetchTag:e,tagQueryString:t}=this.props;e(de,ce,t)}}componentDidMount(){this.setState({categoryOptions:this.getCategoryOptions()},(()=>{this.updateReport()}))}componentDidUpdate(e){const{query:t,tagReport:r}=this.props;(0,ne.X)(r,e.tagReport)?t&&!(0,ne.X)(t,e.query)&&this.updateReport():this.setState({categoryOptions:this.getCategoryOptions()},(()=>{this.updateReport()}))}render(){const{groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isDisabled:a,isExportDisabled:o,itemsPerPage:l,itemsTotal:s,onBulkSelected:n,onExportClicked:i,onFilterAdded:c,onFilterRemoved:p,pagination:m,query:h,selectedItems:u,tagReport:g}=this.props,{categoryOptions:y}=this.state;return d().createElement(se.k,{categoryOptions:y,groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isDisabled:a,isExportDisabled:o,itemsPerPage:l,itemsTotal:s,onBulkSelected:n,onExportClicked:i,onFilterAdded:c,onFilterRemoved:p,pagination:m,query:h,resourcePathsType:le.C.ibm,selectedItems:u,showBulkSelect:!0,showExcludes:!0,showExport:!0,showFilter:!0,tagReport:g,tagPathsType:de})}}const me=(0,C.X1)(((e,t)=>{const r=(0,l.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3});return{tagReport:ie.ux.selectTag(e,de,ce,r),tagReportFetchStatus:ie.ux.selectTagFetchStatus(e,de,ce,r),tagQueryString:r}})),he={fetchTag:ie.xr.Xt},ue=(0,m.connect)(me,he)(pe),ge=(0,p.ZP)(ue);var ye=r(32412);const Se={gcpDetails:{minHeight:"100%"},content:{paddingBottom:$.ZP.value,paddingTop:$.ZP.value},paginationContainer:{marginLeft:$.ZP.value,marginRight:$.ZP.value},pagination:{backgroundColor:L.ZP.value,paddingBottom:ye.ZP.value,paddingTop:ye.ZP.value},tableContainer:{marginLeft:$.ZP.value,marginRight:$.ZP.value},toolbarContainer:{marginLeft:$.ZP.value,marginRight:$.ZP.value}},fe={filter:{limit:10,offset:0},exclude:{},filter_by:{},group_by:{account:"*"},order_by:{cost:"desc"}},ve=n.C.cost,be=n.K.ibm;class Ee extends d().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,r=f(e.group_by),a=(0,b.qV)(e);return(0,v.c)({report:t,idKey:a||r})},this.getExportModal=e=>{const{query:t,report:r,reportQueryString:a}=this.props,{isAllSelected:o,isExportModalOpen:l,selectedItems:s}=this.state,n=f(t.group_by),i=(0,b.qV)(t),c=r&&r.meta?r.meta.count:0,p=[];return s.map((e=>{e.label!==`${M.Xq}${n}`&&e.label!==`${M.Xq}${i}`&&p.push(e)})),d().createElement(h.X,{count:o?c:p.length,isAllItems:(o||s.length===c)&&e.length>0,groupBy:i?`${M.P}${i}`:n,isOpen:l,items:p,onClose:this.handleExportModalClose,reportPathsType:be,reportQueryString:a})},this.getPagination=(e=!1,t=!1)=>{const{intl:r,query:o,router:l,report:s}=this.props,n=s&&s.meta?s.meta.count:0,c=s&&s.meta&&s.meta.filter&&s.meta.filter.limit?s.meta.filter.limit:fe.filter.limit,p=s&&s.meta&&s.meta.filter&&s.meta.filter.offset?s.meta.filter.offset:fe.filter.offset,m=Math.trunc(p/c+1);return d().createElement(a.Pagination,{isCompact:!t,isDisabled:e,itemCount:n,onPerPageSelect:(e,t)=>(0,O.Lk)(o,l,t),onSetPage:(e,t)=>(0,O.F4)(o,l,s,t),page:m,perPage:c,titles:{paginationTitle:r.formatMessage(i.Z.paginationTitle,{title:r.formatMessage(i.Z.ibm),placement:t?"bottom":"top"})},variant:t?a.PaginationVariant.bottom:a.PaginationVariant.top,widgetId:"exports-pagination"+(t?"-bottom":"")})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:r,reportQueryString:a,router:o}=this.props,{isAllSelected:l,selectedItems:s}=this.state,n=f(e.group_by),i=(0,b.qV)(e);return d().createElement(oe,{filterBy:e.filter_by,groupBy:i?`${M.P}${i}`:n,groupByTagKey:i,isAllSelected:l,isLoading:r===C.iF.inProgress,onSelected:this.handleSelected,onSort:(t,r)=>(0,O.K8)(e,o,t,r),orderBy:e.order_by,report:t,reportQueryString:a,selectedItems:s})},this.getToolbar=e=>{const{query:t,router:r,report:a}=this.props,{isAllSelected:o,selectedItems:l}=this.state,s=f(t.group_by),n=(0,b.qV)(t),i=0===e.length,c=a&&a.meta?a.meta.count:0;return d().createElement(ge,{groupBy:n?`${M.P}${n}`:s,isAllSelected:o,isDisabled:i,isExportDisabled:i||!o&&0===l.length,itemsPerPage:e.length,itemsTotal:c,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,O.JA)(t,r,e),onFilterRemoved:e=>(0,O.vI)(t,r,e),pagination:this.getPagination(i),query:t,selectedItems:l})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{query:t,router:r}=this.props,a=e,o=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{group_by:{[a]:"*"},order_by:void 0});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{r.navigate((0,x.ZE)(o,r.location,!0),{replace:!0})}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:r,selectedItems:a}=this.state;let o=[...r?this.getComputedItems():a];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.updateReport=()=>{const{fetchReport:e,reportQueryString:t}=this.props;e(be,ve,t)},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{report:r,reportError:a,reportQueryString:o,router:l}=this.props,{selectedItems:s}=this.state,n=e.reportQueryString!==o,i=!r&&!a,c=!l.location.search,d=t.selectedItems!==s;(n||i||c||d)&&this.updateReport()}render(){const{currency:e,intl:t,providers:r,providersFetchStatus:a,query:l,report:s,reportError:n,reportFetchStatus:c,router:p}=this.props,m=this.getComputedItems(),h=f(l.group_by),v=0===m.length,b=t.formatMessage(i.Z.ibmDetailsTitle);if(n)return d().createElement(S.W,{title:b});if(a===C.iF.inProgress)return d().createElement(u.g,{title:b});if(a===C.iF.complete){if(r&&r.meta&&0===r.meta.count)return d().createElement(y.L,{providerType:o.l.ibm,title:b});if(!(0,E.g8)(r))return d().createElement(g.J,{title:b})}return d().createElement("div",{style:Se.ibmDetails},d().createElement(W,{currency:e,groupBy:h,onCurrencySelected:()=>(0,O.LB)(l,p),onGroupBySelected:this.handleGroupBySelected,report:s}),d().createElement("div",{style:Se.content},d().createElement("div",{style:Se.toolbarContainer},this.getToolbar(m)),this.getExportModal(m),c===C.iF.inProgress?d().createElement(u.g,null):d().createElement(d().Fragment,null,d().createElement("div",{style:Se.tableContainer},this.getTable()),d().createElement("div",{style:Se.paginationContainer},d().createElement("div",{style:Se.pagination},this.getPagination(v,!0))))))}}const xe=(0,C.X1)(((e,{router:t})=>{const r=(0,l.mB)(t.location.search),a=(0,B.zC)(),n=Object.assign(Object.assign({},fe),r),i={currency:a,delta:"cost",exclude:n.exclude,filter:Object.assign(Object.assign({},n.filter),{resolution:"monthly",time_scope_units:"month",time_scope_value:-1}),filter_by:n.filter_by,group_by:n.group_by,order_by:n.order_by},c=(0,l.pm)(i),d=T.ZV.selectReport(e,be,ve,c),p=T.ZV.selectReportError(e,be,ve,c),m=T.ZV.selectReportFetchStatus(e,be,ve,c),h=(0,s.H)(P.NT),u=P.aX.selectProviders(e,o.l.all,h),g=P.aX.selectProvidersError(e,o.l.all,h),y=P.aX.selectProvidersFetchStatus(e,o.l.all,h);return{currency:a,providers:(0,E.BV)(u,o.l.ibm),providersError:g,providersFetchStatus:y,query:n,report:d,reportError:p,reportFetchStatus:m,reportQueryString:c}})),Oe={fetchReport:T.nx.fetchReport},Ce=(0,p.ZP)((0,Z.E)((0,m.connect)(xe,Oe)(Ee)))}}]);