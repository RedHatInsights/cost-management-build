"use strict";(self.webpackChunkcostManagement=self.webpackChunkcostManagement||[]).push([[9565],{15265:(e,t,r)=>{r.d(t,{LA:()=>s,ZP:()=>l,mq:()=>o});var a=r(40400);const o={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},s=(0,a.IU)(o),l=s},80965:(e,t,r)=>{r.d(t,{V_:()=>s,ZP:()=>l,jm:()=>o});var a=r(40400);const o={name:"MinusIcon",height:512,width:448,svgPath:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0},s=(0,a.IU)(o),l=s},40794:(e,t)=>{t.zf={name:"--pf-global--FontSize--xs",value:"0.75rem",var:"var(--pf-global--FontSize--xs)"},t.ZP=t.zf},12289:(e,t)=>{t.Jd={name:"--pf-global--disabled-color--100",value:"#6a6e73",var:"var(--pf-global--disabled-color--100)"},t.ZP=t.Jd},11331:(e,t)=>{t.po={name:"--pf-global--spacer--3xl",value:"4rem",var:"var(--pf-global--spacer--3xl)"},t.ZP=t.po},43789:(e,t)=>{t.Q8={name:"--pf-global--spacer--xs",value:"0.25rem",var:"var(--pf-global--spacer--xs)"},t.ZP=t.Q8},15984:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(85893),o=r(90154),s=r(15138),l=function(){return l=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)};const n=function(){return(0,a.jsxs)(o.EmptyState,l({variant:o.EmptyStateVariant.large,className:"ins-c-empty-state__unavailable pf-m-redhat-font"},{children:[(0,a.jsx)(o.EmptyStateIcon,{icon:s.ExclamationCircleIcon}),(0,a.jsx)(o.Title,l({headingLevel:"h5",size:"lg"},{children:"This page is temporarily unavailable"})),(0,a.jsxs)(o.EmptyStateBody,{children:["Try refreshing the page. If the problem persists, contact your organization administrator or visit our",(0,a.jsxs)("a",l({href:"https://status.redhat.com/",target:"_blank",rel:"noopener noreferrer"},{children:[" ","status page"]}))," ","for known outages."]})]}))}},91882:(e,t,r)=>{r.d(t,{W:()=>c});var a=r(49382),o=r(12289),s=r(40794),l=r(11331),n=r(48196),i=r(43789);const c={costColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end",paddingRight:0},defaultLabel:{minWidth:"50px"},emptyState:{backgroundColor:a.ZP.value,display:"flex",justifyContent:"center",paddingTop:l.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:i.ZP.value},infoDescription:{color:o.ZP.value,fontSize:s.ZP.value},lastItem:{textAlign:"right",paddingRight:"3.8rem"},lastItemColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end"},managedColumn:{textAlign:"right"},nameColumn:{width:"1%"},warningIcon:{paddingLeft:n.ZP.var}}},70637:(e,t,r)=>{r.d(t,{w:()=>h,V:()=>y});var a=r(90154),o=r(52636),s=r(40227),l=r(97027),n=r(92950),i=r.n(n),c=r(74806),d=r(42901),p=r(5842),m=r(91882);class u extends i().Component{constructor(e){super(e),this.getEmptyState=()=>{const{filterBy:e,intl:t}=this.props;if(e)for(const t of Object.values(e))if("*"!==t)return i().createElement(d.c,{filter:t,showMargin:!1});return i().createElement(a.EmptyState,null,i().createElement(a.EmptyStateIcon,{icon:o.Xk}),i().createElement(a.EmptyStateBody,null,t.formatMessage(l.Z.detailsEmptyState)))},this.getSortBy=e=>{const{columns:t,orderBy:r}=this.props,a=r&&r[t[e].orderBy];return a?{index:e,direction:a}:{}},this.getSortParams=e=>({sortBy:this.getSortBy(e),onSort:this.handleOnSort,columnIndex:e}),this.handleOnSelect=(e,t,r)=>{const{onSelected:a,rows:o}=this.props;let s,l=[];-1===r?s=o.map((e=>(e.selected=t,e))):(s=[...o],s[r].selected=t,l=[s[r].item]),this.setState({rows:o},(()=>{a&&a(l,t)}))},this.handleOnSort=(e,t,r)=>{const{columns:a,onSort:o}=this.props;o&&o(a[t].orderBy,r===s.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}render(){const{columns:e,intl:t,isActionsCell:r=!1,isLoading:o,rows:n}=this.props;return i().createElement(i().Fragment,null,i().createElement(s.TableComposable,{"aria-label":t.formatMessage(l.Z.dataTableAriaLabel),className:"tableOverride",gridBreakPoint:"grid-2xl",variant:s.TableVariant.compact},i().createElement(s.Thead,null,i().createElement(s.Tr,null,e.map(((e,t)=>i().createElement(s.Th,{key:`col-${t}-${e.value}`,modifier:"nowrap",sort:e.isSortable?this.getSortParams(t):void 0,style:e.style},e.name))))),i().createElement(s.Tbody,null,o?i().createElement(s.Tr,null,i().createElement(s.Td,{colSpan:100},i().createElement(a.Bullseye,null,i().createElement("div",{style:{textAlign:"center"}},i().createElement(a.Spinner,{size:"xl"}))))):n.map(((t,a)=>i().createElement(s.Tr,{key:`row-${a}`},t.cells.map(((o,l)=>0===l?i().createElement(s.Td,{dataLabel:e[l].name,key:`cell-${l}-${a}`,modifier:"nowrap",select:{disable:t.selectionDisabled,isSelected:t.selected,onSelect:(e,t)=>this.handleOnSelect(e,t,a),rowIndex:a},style:o.style}):i().createElement(s.Td,{dataLabel:e[l].name,key:`cell-${a}-${l}`,modifier:"nowrap",isActionCell:r&&l===t.cells.length-1,style:o.style},o.value)))))))),0===n.length&&i().createElement("div",{style:m.W.emptyState},this.getEmptyState()))}}const h=(0,c.ZP)((0,p.E)(u));class g extends i().Component{constructor(e){super(e),this.getEmptyState=()=>{const{emptyState:e,filterBy:t,intl:r}=this.props;if(t)for(const e of Object.values(t))if("*"!==e)return i().createElement(d.c,{filter:e,showMargin:!1});return e||i().createElement(a.EmptyState,null,i().createElement(a.EmptyStateIcon,{icon:o.Xk}),i().createElement(a.EmptyStateBody,null,r.formatMessage(l.Z.detailsEmptyState)))},this.getSortBy=e=>{const{columns:t,orderBy:r}=this.props,a=r&&r[t[e].orderBy];return a?{index:e,direction:a}:{}},this.getSortParams=e=>({sortBy:this.getSortBy(e),onSort:this.handleOnSort,columnIndex:e}),this.handleOnSort=(e,t,r)=>{const{columns:a,onSort:o}=this.props;o&&o(a[t].orderBy,r===s.SortByDirection.asc)},this.handleOnRowClick=(e,t)=>{const{onRowClick:r,rows:a}=this.props;a.map((e=>e.selected=!1)),a[t].selected=!0,this.setState({rows:a},(()=>{r&&r(e,t)}))},this.handleOnSort=this.handleOnSort.bind(this)}render(){const{columns:e,intl:t,isLoading:r,rows:o}=this.props;return i().createElement(i().Fragment,null,i().createElement(s.TableComposable,{"aria-label":t.formatMessage(l.Z.selectableTableAriaLabel),gridBreakPoint:"grid-2xl",hasSelectableRowCaption:!0,variant:s.TableVariant.compact},i().createElement(s.Thead,null,i().createElement(s.Tr,null,e.map(((e,t)=>i().createElement(s.Th,{key:`col-${t}-${e.value}`,modifier:"nowrap",sort:e.isSortable?this.getSortParams(t):void 0,style:e.style},e.name))))),i().createElement(s.Tbody,null,r?i().createElement(s.Tr,null,i().createElement(s.Td,{colSpan:100},i().createElement(a.Bullseye,null,i().createElement("div",{style:{textAlign:"center"}},i().createElement(a.Spinner,{size:"xl"}))))):o.map(((r,a)=>i().createElement(s.Tr,{"aria-label":t.formatMessage(l.Z.selectableTableRowAriaLabel),isSelectable:!0,isHoverable:!0,isRowSelected:r.selected,onRowClick:e=>this.handleOnRowClick(e,a),key:`row-${a}`},r.cells.map(((r,o)=>0===o?i().createElement(s.Th,{"aria-label":t.formatMessage(l.Z.selectableTableHeaderAriaLabel),dataLabel:e[o].name,key:`cell-${a}-${o}`,modifier:"nowrap",style:r.style},r.value):i().createElement(s.Td,{dataLabel:e[o].name,key:`cell-${a}-${o}`,modifier:"nowrap",style:r.style},r.value)))))))),0===o.length&&i().createElement("div",{style:m.W.emptyState},this.getEmptyState()))}}const y=(0,c.ZP)((0,p.E)(g))},98485:(e,t,r)=>{r.d(t,{L:()=>l});var a=r(80965),o=r(92950),s=r.n(o);const l=()=>s().createElement("span",{className:"emptyValueContainer"},s().createElement(a.V_,null))},4385:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Ce});var a=r(90154),o=r(1326),s=r(17779),l=r(84717),n=r(6456),i=r(97027),c=r(92950),d=r.n(c),p=r(74806),m=r(36613),u=r(96703),h=r(38274),g=r(41255),y=r(86882),S=r(46955);function f(e={}){return e.subscription_guid?"subscription_guid":e.resource_location?"resource_location":e.service_name?"service_name":"date"}var v=r(34328),E=r(45402),b=r(1032),x=r(32924),O=r(50859),C=r(1156),P=r(62331),T=r(15920),M=r(15829),B=r(14483),Z=r(5842),_=r(49382),w=r(98499),k=r(32412);const A={azureDetails:{minHeight:"100%"},content:{paddingBottom:w.ZP.value,paddingTop:w.ZP.value},paginationContainer:{marginLeft:w.ZP.value,marginRight:w.ZP.value},pagination:{backgroundColor:_.ZP.value,paddingBottom:k.ZP.value,paddingTop:k.ZP.value},tableContainer:{marginLeft:w.ZP.value,marginRight:w.ZP.value},toolbarContainer:{marginLeft:w.ZP.value,marginRight:w.ZP.value}};var I=r(50081),D=r(37764),F=r(6450),L=r(63391),R=r(22369),$=r(45087),z=r(91778),V=r(33605),j=r(54881),q=r(48196);const X={costValue:{marginTop:w.ZP.var,marginBottom:0},costLabelUnit:{fontSize:j.ZP.value,color:V.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:_.ZP.var,padding:w.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},title:{paddingBottom:q.ZP.var}},Q=[{label:"subscription_guid",value:"subscription_guid"},{label:"service_name",value:"service_name"},{label:"resource_location",value:"resource_location"}],N=I.L.azure;class W extends d().Component{render(){const{currency:e,groupBy:t,isExportsFeatureEnabled:r,onCurrencySelected:o,onGroupBySelected:s,providers:l,providersError:n,report:c,intl:p}=this.props,m=c&&!n&&l&&l.meta&&l.meta.count>0,u=c&&c.meta&&c.meta.total&&c.meta.total.cost&&c.meta.total.cost.total;return d().createElement("header",{style:X.header},d().createElement("div",{style:X.headerContent},d().createElement(a.Title,{headingLevel:"h1",style:X.title,size:a.TitleSizes["2xl"]},p.formatMessage(i.Z.azureDetailsTitle)),d().createElement("div",{style:X.headerContentRight},d().createElement(F.F,{currency:e,onSelect:o}),r&&d().createElement(D.bj,null))),d().createElement("div",{style:X.headerContent},d().createElement("div",{style:X.headerContentLeft},d().createElement(L.X,{getIdKeyForGroupBy:f,groupBy:t,isDisabled:!m,onSelected:s,options:Q,showTags:!0,tagPathsType:N})),m&&d().createElement("div",null,d().createElement(a.Title,{headingLevel:"h2",style:X.costValue,size:a.TitleSizes["4xl"]},(0,z.xG)(u?c.meta.total.cost.total.value:0,u?c.meta.total.cost.total.units:"USD")),d().createElement("div",{style:X.dateTitle},(0,$.J4)()))))}}const H=(0,C.X1)(((e,t)=>{const r=(0,l.H)(P.NT),a=P.aX.selectProviders(e,o.l.all,r),s=P.aX.selectProvidersError(e,o.l.all,r),n=P.aX.selectProvidersFetchStatus(e,o.l.all,r);return{isExportsFeatureEnabled:R.iJ.selectIsExportsFeatureEnabled(e),providers:(0,b.BV)(a,o.l.azure),providersError:s,providersFetchStatus:n,providersQueryString:r}})),J=(0,p.ZP)((0,m.connect)(H,{})(W));var K=r(39836),G=r(91919),U=r(70637),Y=r(91882),ee=r(98485),te=r(86182),re=r(21857),ae=r(68025);const oe=n.K.azure;class se extends d().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{groupBy:e,groupByTagKey:t,intl:r,isAllSelected:a,report:o,selectedItems:s,router:l}=this.props;if(!o)return;const n=[],c=(0,v.c)({report:o,idKey:t||e}),p=t?[{name:""},{name:r.formatMessage(i.Z.tagNames)},{name:r.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:r.formatMessage(i.Z.cost),style:Y.W.costColumn},c.length&&{isSortable:!0}),{name:""}]:[{name:""},Object.assign({orderBy:"subscription_guid"===e?"subscription_name":e,name:r.formatMessage(i.Z.detailsResourceNames,{value:e})},c.length&&{isSortable:!0}),{name:r.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:r.formatMessage(i.Z.cost),style:Y.W.costColumn},c.length&&{isSortable:!0}),{name:""}];c.map(((r,o)=>{const i=this.getTotalCost(r,o),c=r&&r.label&&null!==r.label?r.label:"",p=this.getMonthOverMonthCost(r,o),m=c===`${B.Xq}${e}`||c===`${B.Xq}${t}`,u=r.id&&r.id!==r.label?d().createElement("div",{style:Y.W.infoDescription},r.id):null,h=this.getActions(r,m),g=m?c:d().createElement(K.Link,{to:(0,re.T)({basePath:(0,ae.dI)(G._.azureDetailsBreakdown.path),description:r.id,groupBy:e,id:r.id,router:l,title:c.toString()})},c);n.push({cells:[{},{value:d().createElement("div",null,g,u)},{value:p},{value:i,style:Y.W.managedColumn},{value:h}],isOpen:!1,item:r,selected:a||s&&void 0!==s.find((e=>e.id===r.id)),selectionDisabled:m})})),this.setState({columns:p,rows:n})},this.getActions=(e,t)=>{const{groupBy:r,reportQueryString:a}=this.props;return d().createElement(te.e,{groupBy:r,isDisabled:t,item:e,reportPathsType:oe,reportQueryString:a})},this.getMonthOverMonthCost=(e,t)=>{const{intl:r}=this.props,a=(0,z.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),o=null!==e.delta_percent?(0,z.rl)(Math.abs(e.delta_percent)):0,s=!(0===o||"0.00"===o),l=null!==e.delta_percent;let n;return s&&(n="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(n+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(n+=" increase")),l?d().createElement("div",{className:"monthOverMonthOverride"},d().createElement("div",{className:n,key:`month-over-month-cost-${t}`},s?r.formatMessage(i.Z.percent,{value:o}):d().createElement(ee.L,null),s&&null!==e.delta_percent&&e.delta_value>0&&d().createElement("span",{className:"fa fa-sort-up",style:Y.W.infoArrow,key:`month-over-month-icon-${t}`}),s&&null!==e.delta_percent&&e.delta_value<0&&d().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},Y.W.infoArrow),Y.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),d().createElement("div",{style:Y.W.infoDescription,key:`month-over-month-info-${t}`},(0,$.Y)(a))):(0,$.Tf)()},this.getTotalCost=(e,t)=>{const{report:r,intl:a}=this.props,o=r&&r.meta&&r.meta.total&&r.meta.total.cost&&r.meta.total.cost.total?r.meta.total.cost.total.value:0,s=0===o?o.toFixed(2):(e.cost.total.value/o*100).toFixed(2);return d().createElement(d().Fragment,null,(0,z.xG)(e.cost.total.value,e.cost.total.units),d().createElement("div",{style:Y.W.infoDescription,key:`total-cost-${t}`},a.formatMessage(i.Z.percentOfCost,{value:s})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{report:t,selectedItems:r}=this.props,a=t&&t.data?JSON.stringify(t.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")===a&&e.selectedItems===r||this.initDatum()}render(){const{filterBy:e,isLoading:t,onSelected:r,onSort:a,orderBy:o,selectedItems:s}=this.props,{columns:l,rows:n}=this.state;return d().createElement(U.w,{columns:l,filterBy:e,isActionsCell:!0,isLoading:t,onSelected:r,onSort:a,orderBy:o,rows:n,selectedItems:s})}}const le=(0,p.ZP)((0,Z.E)(se));var ne=r(36116),ie=r(70200),ce=r(84999),de=r(48949);const pe=I.Q.tag,me=I.L.azure;class ue extends d().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,r=[{name:e.formatMessage(i.Z.filterByValues,{value:"subscription_guid"}),key:"subscription_guid"},{name:e.formatMessage(i.Z.filterByValues,{value:"service_name"}),key:"service_name"},{name:e.formatMessage(i.Z.filterByValues,{value:"resource_location"}),key:"resource_location"}];return t&&t.data&&t.data.length&&r.push({name:e.formatMessage(i.Z.filterByValues,{value:B.up}),key:B.up}),r},this.updateReport=()=>{const{fetchTag:e,tagQueryString:t}=this.props;e(me,pe,t)}}componentDidMount(){this.setState({categoryOptions:this.getCategoryOptions()},(()=>{this.updateReport()}))}componentDidUpdate(e){const{query:t,tagReport:r}=this.props;(0,ce.X)(r,e.tagReport)?t&&!(0,ce.X)(t,e.query)&&this.updateReport():this.setState({categoryOptions:this.getCategoryOptions()},(()=>{this.updateReport()}))}render(){const{groupBy:e,isAllSelected:t,isDisabled:r,isExportDisabled:a,itemsPerPage:o,itemsTotal:s,onBulkSelected:l,onExportClicked:n,onFilterAdded:i,onFilterRemoved:c,pagination:p,query:m,selectedItems:u,tagReport:h}=this.props,{categoryOptions:g}=this.state;return d().createElement(ie.k,{categoryOptions:g,groupBy:e,isAllSelected:t,isDisabled:r,isExportDisabled:a,itemsPerPage:o,itemsTotal:s,onBulkSelected:l,onExportClicked:n,onFilterAdded:i,onFilterRemoved:c,pagination:p,query:m,resourcePathsType:ne.C.azure,selectedItems:u,showBulkSelect:!0,showExcludes:!0,showExport:!0,showFilter:!0,tagReport:h,tagPathsType:me})}}const he=(0,C.X1)(((e,t)=>{const r=(0,s.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3}),a=de.ux.selectTag(e,me,pe,r);return{tagReportFetchStatus:de.ux.selectTagFetchStatus(e,me,pe,r),tagReport:a,tagQueryString:r}})),ge={fetchTag:de.xr.Xt},ye=(0,m.connect)(he,ge)(ue),Se=(0,p.ZP)(ye),fe={filter:{limit:10,offset:0},exclude:{},filter_by:{},group_by:{subscription_guid:"*"},order_by:{cost:"desc"}},ve=n.C.cost,Ee=n.K.azure;class be extends d().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,r=f(e.group_by),a=(0,E.qV)(e);return(0,v.c)({report:t,idKey:a||r})},this.getExportModal=e=>{const{query:t,report:r,reportQueryString:a}=this.props,{isAllSelected:o,isExportModalOpen:s,selectedItems:l}=this.state,n=f(t.group_by),i=(0,E.qV)(t),c=r&&r.meta?r.meta.count:0,p=[];return l.map((e=>{e.label!==`${B.Xq}${n}`&&e.label!==`${B.Xq}${i}`&&p.push(e)})),d().createElement(u.X,{count:o?c:p.length,isAllItems:(o||l.length===c)&&e.length>0,groupBy:i?`${B.P}${i}`:n,isOpen:s,items:p,onClose:this.handleExportModalClose,reportPathsType:Ee,reportQueryString:a})},this.getPagination=(e=!1,t=!1)=>{const{intl:r,query:o,router:s,report:l}=this.props,n=l&&l.meta?l.meta.count:0,c=l&&l.meta&&l.meta.filter&&l.meta.filter.limit?l.meta.filter.limit:fe.filter.limit,p=l&&l.meta&&l.meta.filter&&l.meta.filter.offset?l.meta.filter.offset:fe.filter.offset,m=Math.trunc(p/c+1);return d().createElement(a.Pagination,{isCompact:!t,isDisabled:e,itemCount:n,onPerPageSelect:(e,t)=>(0,O.Lk)(o,s,t),onSetPage:(e,t)=>(0,O.F4)(o,s,l,t),page:m,perPage:c,titles:{paginationTitle:r.formatMessage(i.Z.paginationTitle,{title:r.formatMessage(i.Z.azure),placement:t?"bottom":"top"})},variant:t?a.PaginationVariant.bottom:a.PaginationVariant.top,widgetId:"exports-pagination"+(t?"-bottom":"")})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:r,reportQueryString:a,router:o}=this.props,{isAllSelected:s,selectedItems:l}=this.state,n=f(e.group_by),i=(0,E.qV)(e);return d().createElement(le,{filterBy:e.filter_by,groupBy:i?`${B.P}${i}`:n,groupByTagKey:i,isAllSelected:s,isLoading:r===C.iF.inProgress,onSelected:this.handleSelected,onSort:(t,r)=>(0,O.K8)(e,o,t,r),orderBy:e.order_by,report:t,reportQueryString:a,selectedItems:l})},this.getToolbar=e=>{const{query:t,router:r,report:a}=this.props,{isAllSelected:o,selectedItems:s}=this.state,l=f(t.group_by),n=(0,E.qV)(t),i=0===e.length,c=a&&a.meta?a.meta.count:0;return d().createElement(Se,{groupBy:n?`${B.P}${n}`:l,isAllSelected:o,isDisabled:i,isExportDisabled:i||!o&&0===s.length,itemsPerPage:e.length,itemsTotal:c,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,O.JA)(t,r,e),onFilterRemoved:e=>(0,O.vI)(t,r,e),pagination:this.getPagination(i),query:t,selectedItems:s})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{query:t,router:r}=this.props,a=e,o=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{group_by:{[a]:"*"},order_by:void 0});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{r.navigate((0,x.ZE)(o,r.location,!0),{replace:!0})}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:r,selectedItems:a}=this.state;let o=[...r?this.getComputedItems():a];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.updateReport=()=>{const{fetchReport:e,reportQueryString:t}=this.props;e(Ee,ve,t)},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{report:r,reportError:a,reportQueryString:o,router:s}=this.props,{selectedItems:l}=this.state,n=e.reportQueryString!==o,i=!r&&!a,c=!s.location.search,d=t.selectedItems!==l;(n||i||c||d)&&this.updateReport()}render(){const{currency:e,intl:t,providers:r,providersFetchStatus:a,query:s,report:l,reportError:n,reportFetchStatus:c,router:p}=this.props,m=this.getComputedItems(),u=f(s.group_by),v=0===m.length,E=t.formatMessage(i.Z.azureDetailsTitle);if(n)return d().createElement(S.W,{title:E});if(a===C.iF.inProgress)return d().createElement(h.g,{title:E});if(a===C.iF.complete){if(r&&r.meta&&0===r.meta.count)return d().createElement(y.L,{providerType:o.l.azure,title:E});if(!(0,b.g8)(r))return d().createElement(g.J,{title:E})}return d().createElement("div",{style:A.azureDetails},d().createElement(J,{currency:e,groupBy:u,onCurrencySelected:()=>(0,O.LB)(s,p),onGroupBySelected:this.handleGroupBySelected,report:l}),d().createElement("div",{style:A.content},d().createElement("div",{style:A.toolbarContainer},this.getToolbar(m)),this.getExportModal(m),c===C.iF.inProgress?d().createElement(h.g,null):d().createElement(d().Fragment,null,d().createElement("div",{style:A.tableContainer},this.getTable()),d().createElement("div",{style:A.paginationContainer},d().createElement("div",{style:A.pagination},this.getPagination(v,!0))))))}}const xe=(0,C.X1)(((e,{router:t})=>{const r=(0,s.mB)(t.location.search),a=(0,M.zC)(),n=Object.assign(Object.assign({},fe),r),i={currency:a,delta:"cost",exclude:n.exclude,filter:Object.assign(Object.assign({},n.filter),{resolution:"monthly",time_scope_units:"month",time_scope_value:-1}),filter_by:n.filter_by,group_by:n.group_by,order_by:n.order_by},c=(0,s.pm)(i),d=T.ZV.selectReport(e,Ee,ve,c),p=T.ZV.selectReportError(e,Ee,ve,c),m=T.ZV.selectReportFetchStatus(e,Ee,ve,c),u=(0,l.H)(P.NT),h=P.aX.selectProviders(e,o.l.all,u),g=P.aX.selectProvidersError(e,o.l.all,u),y=P.aX.selectProvidersFetchStatus(e,o.l.all,u);return{currency:a,providers:(0,b.BV)(h,o.l.azure),providersError:g,providersFetchStatus:y,query:n,report:d,reportError:p,reportFetchStatus:m,reportQueryString:c}})),Oe={fetchReport:T.nx.fetchReport},Ce=(0,p.ZP)((0,Z.E)((0,m.connect)(xe,Oe)(be)))},86182:(e,t,r)=>{r.d(t,{e:()=>f});var a=r(90154),o=r(97027),s=r(92950),l=r.n(s),n=r(74806),i=r(36613),c=r(96703),d=r(1156),p=r(58613),m=r(14483),u=r(5842);class h extends l().Component{constructor(e,t){super(e,t),this.defaultState={isDropdownOpen:!1,isExportModalOpen:!1},this.state=Object.assign({},this.defaultState),this.getExportModal=()=>{const{groupBy:e,item:t,reportPathsType:r,reportQueryString:a}=this.props,{isExportModalOpen:o}=this.state;return l().createElement(c.X,{count:1,groupBy:e,isOpen:o,items:[t],onClose:this.handleExportModalClose,reportPathsType:r,reportQueryString:a})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleOnSelect=()=>{const{isDropdownOpen:e}=this.state;this.setState({isDropdownOpen:!e})},this.handleOnToggle=e=>{this.setState({isDropdownOpen:e})},this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleOnToggle=this.handleOnToggle.bind(this),this.handleOnSelect=this.handleOnSelect.bind(this)}render(){const{groupBy:e,isDisabled:t,showPriceListOption:r,intl:s,item:{source_uuid:n},redirectToCostModel:i,router:c}=this.props,d=[l().createElement(a.DropdownItem,{component:"button",isDisabled:t,key:"export-action",onClick:this.handleExportModalOpen},s.formatMessage(o.Z.detailsActionsExport))];return r&&d.unshift(l().createElement(a.DropdownItem,{component:"button",key:"price-list-action",isDisabled:t||e.includes(m.P)||0===n.length,onClick:()=>i(n[0],c)},s.formatMessage(o.Z.detailsActionsPriceList))),l().createElement(l().Fragment,null,l().createElement(a.Dropdown,{onSelect:this.handleOnSelect,toggle:l().createElement(a.KebabToggle,{onToggle:this.handleOnToggle}),isOpen:this.state.isDropdownOpen,isPlain:!0,position:"right",dropdownItems:d}),this.getExportModal())}}const g=(0,d.X1)(((e,t)=>({}))),y={redirectToCostModel:p.F0.redirectToCostModelFromSourceUuid},S=(0,i.connect)(g,y)(h),f=(0,n.ZP)((0,u.E)(S))}}]);