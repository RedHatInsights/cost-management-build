"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[1941],{15265:(e,t,r)=>{r.d(t,{LA:()=>s,ZP:()=>l,mq:()=>a});var o=r(40400);const a={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},s=(0,o.IU)(a),l=s},80965:(e,t,r)=>{r.d(t,{V_:()=>s,ZP:()=>l,jm:()=>a});var o=r(40400);const a={name:"MinusIcon",height:512,width:448,svgPath:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0},s=(0,o.IU)(a),l=s},33605:(e,t)=>{t.o3={name:"--pf-global--Color--100",value:"#151515",var:"var(--pf-global--Color--100)"},t.ZP=t.o3},40794:(e,t)=>{t.zf={name:"--pf-global--FontSize--xs",value:"0.75rem",var:"var(--pf-global--FontSize--xs)"},t.ZP=t.zf},12289:(e,t)=>{t.Jd={name:"--pf-global--disabled-color--100",value:"#6a6e73",var:"var(--pf-global--disabled-color--100)"},t.ZP=t.Jd},11331:(e,t)=>{t.po={name:"--pf-global--spacer--3xl",value:"4rem",var:"var(--pf-global--spacer--3xl)"},t.ZP=t.po},43789:(e,t)=>{t.Q8={name:"--pf-global--spacer--xs",value:"0.25rem",var:"var(--pf-global--spacer--xs)"},t.ZP=t.Q8},15984:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(85893),a=r(54653),s=r(1915),l=function(){return l=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)};const n=function(){return(0,o.jsxs)(a.EmptyState,l({variant:a.EmptyStateVariant.large,className:"ins-c-empty-state__unavailable pf-m-redhat-font"},{children:[(0,o.jsx)(a.EmptyStateIcon,{icon:s.ExclamationCircleIcon}),(0,o.jsx)(a.Title,l({headingLevel:"h5",size:"lg"},{children:"This page is temporarily unavailable"})),(0,o.jsxs)(a.EmptyStateBody,{children:["Try refreshing the page. If the problem persists, contact your organization administrator or visit our",(0,o.jsxs)("a",l({href:"https://status.redhat.com/",target:"_blank",rel:"noopener noreferrer"},{children:[" ","status page"]}))," ","for known outages."]})]}))}},98485:(e,t,r)=>{r.d(t,{L:()=>l});var o=r(80965),a=r(92950),s=r.n(a);const l=()=>s().createElement("span",{className:"emptyValueContainer"},s().createElement(o.V_,null))},62423:(e,t,r)=>{r.d(t,{e:()=>f});var o=r(54653),a=r(39333),s=r(97027),l=r(92950),n=r.n(l),i=r(74806),c=r(77760),p=r(40493),d=r(1156),u=r(58613),h=r(5842);class m extends n().Component{constructor(e,t){super(e,t),this.defaultState={isDropdownOpen:!1,isExportModalOpen:!1},this.state=Object.assign({},this.defaultState),this.getExportModal=()=>{const{groupBy:e,item:t,reportPathsType:r,reportQueryString:o}=this.props,{isExportModalOpen:a}=this.state;return n().createElement(p.X,{count:1,groupBy:e,isOpen:a,items:[t],onClose:this.handleExportModalClose,reportPathsType:r,reportQueryString:o})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleOnSelect=()=>{const{isDropdownOpen:e}=this.state;this.setState({isDropdownOpen:!e})},this.handleOnToggle=e=>{this.setState({isDropdownOpen:e})},this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleOnToggle=this.handleOnToggle.bind(this),this.handleOnSelect=this.handleOnSelect.bind(this)}render(){const{groupBy:e,isDisabled:t,showPriceListOption:r,intl:l,item:{source_uuid:i},redirectToCostModel:c,router:p}=this.props,d=[n().createElement(o.DropdownItem,{component:"button",isDisabled:t,key:"export-action",onClick:this.handleExportModalOpen},l.formatMessage(s.Z.detailsActionsExport))];return r&&d.unshift(n().createElement(o.DropdownItem,{component:"button",key:"price-list-action",isDisabled:t||e.includes(a.P)||0===i.length,onClick:()=>c(i[0],p)},l.formatMessage(s.Z.detailsActionsPriceList))),n().createElement(n().Fragment,null,n().createElement(o.Dropdown,{onSelect:this.handleOnSelect,toggle:n().createElement(o.KebabToggle,{onToggle:this.handleOnToggle}),isOpen:this.state.isDropdownOpen,isPlain:!0,position:"right",dropdownItems:d}),this.getExportModal())}}const g=(0,d.X1)(((e,t)=>({}))),y={redirectToCostModel:u.F0.redirectToCostModelFromSourceUuid},v=(0,c.connect)(g,y)(m),f=(0,i.ZP)((0,h.E)(v))},90302:(e,t,r)=>{r.d(t,{W:()=>i});var o=r(49382),a=r(12289),s=r(40794),l=r(11331),n=r(43789);const i={costColumn:{textAlign:"right"},defaultLabel:{minWidth:"63px"},emptyState:{backgroundColor:o.ZP.value,display:"flex",justifyContent:"center",paddingTop:l.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:n.ZP.value},infoDescription:{color:a.ZP.value,fontSize:s.ZP.value},nameColumn:{width:"1%"}}},90569:(e,t,r)=>{r.d(t,{w:()=>g});var o=r(54653),a=r(52636),s=r(14844),l=r(79112),n=r(97027),i=r(92950),c=r.n(i),p=r(74806),d=r(42901),u=r(5842),h=r(90302);class m extends c().Component{constructor(e){super(e),this.getEmptyState=()=>{const{intl:e,router:t}=this.props,r=(0,l.mB)(t.location.search);if(r.filter_by)for(const e of Object.values(r.filter_by))if("*"!==e)return c().createElement(d.c,{filter:e,showMargin:!1});return c().createElement(o.EmptyState,null,c().createElement(o.EmptyStateIcon,{icon:a.Xk}),c().createElement(o.EmptyStateBody,null,e.formatMessage(n.Z.detailsEmptyState)))},this.getSortBy=e=>{const{columns:t,router:r}=this.props,o=t[e].orderBy,a=(0,l.mB)(r.location.search),s=a&&a.order_by&&a.order_by[o];return s?{index:e,direction:s}:{}},this.getSortParams=e=>({sortBy:this.getSortBy(e),onSort:this.handleOnSort,columnIndex:e}),this.handleOnSelect=(e,t,r)=>{const{onSelected:o,rows:a}=this.props;let s,l=[];-1===r?s=a.map((e=>(e.selected=t,e))):(s=[...a],s[r].selected=t,l=[s[r].item]),this.setState({rows:a},(()=>{o&&o(l,t)}))},this.handleOnSort=(e,t,r)=>{const{columns:o,onSort:a}=this.props;a&&a(o[t].orderBy,r===s.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}render(){const{columns:e,intl:t,isLoading:r,rows:a}=this.props;return c().createElement(c().Fragment,null,c().createElement(s.TableComposable,{"aria-label":t.formatMessage(n.Z.dataTableAriaLabel),gridBreakPoint:"grid-2xl"},c().createElement(s.Thead,null,c().createElement(s.Tr,null,e.map(((e,t)=>c().createElement(s.Th,{key:`col-${t}-${e.value}`,modifier:"nowrap",sort:e.isSortable?this.getSortParams(t):void 0,style:e.style},e.name))))),c().createElement(s.Tbody,null,r?c().createElement(s.Tr,null,c().createElement(s.Td,{colSpan:100},c().createElement(o.Bullseye,null,c().createElement("div",{style:{textAlign:"center"}},c().createElement(o.Spinner,{size:"xl"}))))):a.map(((t,r)=>c().createElement(s.Tr,{key:`row-${r}`},t.cells.map(((o,a)=>0===a?c().createElement(s.Td,{dataLabel:e[a].name,key:`cell-${a}-${r}`,modifier:"nowrap",select:{disable:t.selectionDisabled,isSelected:t.selected,onSelect:(e,t)=>this.handleOnSelect(e,t,r),rowIndex:r}}):c().createElement(s.Td,{dataLabel:e[a].name,key:`cell-${r}-${a}`,modifier:"nowrap",isActionCell:a===t.cells.length-1},o.value)))))))),Boolean(0===a.length)&&c().createElement("div",{style:h.W.emptyState},this.getEmptyState()))}}const g=(0,p.ZP)((0,u.E)(m))},31554:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Oe});var o=r(54653),a=r(1326),s=r(72504),l=r(84717),n=r(39333),i=r(6456),c=r(97027),p=r(92950),d=r.n(p),u=r(74806),h=r(77760),m=r(52471),g=r(55672),y=r(2985),v=r(47947),f=r(40493),b=r(37269),S=r(19727),E=r(86482),x=r(10066),O=r(1156),P=r(78898),C=r(62331),B=r(15920);function M(e={}){return e.account?"account":e.gcp_project?"gcp_project":e.project?"project":e.region?"region":e.service?"service":"date"}var _=r(69511),T=r(64703),Z=r(5842),k=r(50081),w=r(60021),F=r(6450),I=r(87560),j=r(45087),D=r(91778),A=r(49382),V=r(33605),$=r(54881),L=r(98499),R=r(48196);const q={costValue:{marginTop:L.ZP.var,marginBottom:0},costLabelUnit:{fontSize:$.ZP.value,color:V.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:A.ZP.var,padding:L.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},title:{paddingBottom:R.ZP.var}},X=[{label:"account",value:"account"},{label:"gcp_project",value:"gcp_project"},{label:"service",value:"service"},{label:"region",value:"region"}],Q=k.L.gcp;class z extends d().Component{render(){const{currency:e,groupBy:t,isCurrencyFeatureEnabled:r,isExportsFeatureEnabled:a,onCurrencySelected:s,onGroupBySelected:l,providers:n,providersError:i,report:p,intl:u}=this.props,h=p&&!i&&n&&n.meta&&n.meta.count>0,m=p&&p.meta&&p.meta.total&&p.meta.total.cost&&p.meta.total.cost.total;return d().createElement("header",{style:q.header},d().createElement("div",{style:q.headerContent},d().createElement(o.Title,{headingLevel:"h1",style:q.title,size:o.TitleSizes["2xl"]},u.formatMessage(c.Z.gcpDetailsTitle)),d().createElement("div",{style:q.headerContentRight},r&&d().createElement(F.F,{currency:e,onSelect:s}),a&&d().createElement(w.b,null))),d().createElement("div",{style:q.headerContent},d().createElement("div",{style:q.headerContentLeft},d().createElement(I.X,{getIdKeyForGroupBy:M,groupBy:t,isDisabled:!h,onSelected:l,options:X,showTags:!0,tagReportPathsType:Q})),Boolean(h)&&d().createElement("div",null,d().createElement(o.Title,{headingLevel:"h2",style:q.costValue,size:o.TitleSizes["4xl"]},(0,D.xG)(m?p.meta.total.cost.total.value:0,m?p.meta.total.cost.total.units:"USD")),d().createElement("div",{style:q.dateTitle},(0,j.J4)()))))}}const N=(0,O.X1)(((e,t)=>{const r=(0,l.H)(C.NT),o=C.aX.selectProviders(e,a.l.all,r),s=C.aX.selectProvidersError(e,a.l.all,r),n=C.aX.selectProvidersFetchStatus(e,a.l.all,r);return{isCurrencyFeatureEnabled:P.iJ.selectIsCurrencyFeatureEnabled(e),isExportsFeatureEnabled:P.iJ.selectIsExportsFeatureEnabled(e),providers:(0,E.BV)(o,a.l.gcp),providersError:s,providersFetchStatus:n,providersQueryString:r}})),W=(0,u.ZP)((0,h.connect)(N,{})(z));var G=r(79655),H=r(91919),J=r(98485),U=r(62423),K=r(90569),Y=r(90302),ee=r(54583);const te=i.K.gcp;class re extends d().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{groupBy:e,groupByTagKey:t,intl:r,isAllSelected:o,report:a,router:s,selectedItems:l}=this.props;if(!a)return;const i=[],p=(0,_.c)({report:a,idKey:t||e}),u=t?[{name:""},{name:r.formatMessage(c.Z.tagNames)},{name:r.formatMessage(c.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:r.formatMessage(c.Z.cost),style:Y.W.costColumn},p.length&&{isSortable:!0}),{name:""}]:[{name:""},Object.assign({orderBy:e,name:r.formatMessage(c.Z.detailsResourceNames,{value:e})},p.length&&{isSortable:!0}),{name:r.formatMessage(c.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:r.formatMessage(c.Z.cost),style:Y.W.costColumn},p.length&&{isSortable:!0}),{name:""}];p.map(((r,a)=>{const c=this.getTotalCost(r,a),p=r&&null!==r.label?r.label:"",u=this.getMonthOverMonthCost(r,a),h=p===`${n.Xq}${e}`||p===`${n.Xq}${t}`,m=r.id&&r.id!==r.label?d().createElement("div",{style:Y.W.infoDescription},r.id):null,g=this.getActions(r,h),y=h?p:d().createElement(G.rU,{to:(0,ee.Tm)({basePath:H.Hb.gcpDetailsBreakdown,label:p.toString(),description:r.id,groupBy:e,router:s})},p);i.push({cells:[{},{value:d().createElement("div",null,y,m)},{value:d().createElement("div",null,u)},{value:d().createElement("div",null,c)},{value:d().createElement("div",null,g)}],isOpen:!1,item:r,selected:o||l&&void 0!==l.find((e=>e.id===r.id)),selectionDisabled:h})})),this.setState({columns:u,rows:i})},this.getActions=(e,t)=>{const{groupBy:r,reportQueryString:o}=this.props;return d().createElement(U.e,{groupBy:r,isDisabled:t,item:e,reportPathsType:te,reportQueryString:o})},this.getMonthOverMonthCost=(e,t)=>{const{intl:r}=this.props,o=(0,D.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),a=null!==e.delta_percent?(0,D.rl)(Math.abs(e.delta_percent)):0,s=!(0===a||"0.00"===a),l=null!==e.delta_percent;let n;return s&&(n="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(n+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(n+=" increase")),l?d().createElement("div",{className:"monthOverMonthOverride"},d().createElement("div",{className:n,key:`month-over-month-cost-${t}`},s?r.formatMessage(c.Z.percent,{value:a}):d().createElement(J.L,null),Boolean(s&&null!==e.delta_percent&&e.delta_value>0)&&d().createElement("span",{className:"fa fa-sort-up",style:Y.W.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(s&&null!==e.delta_percent&&e.delta_value<0)&&d().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},Y.W.infoArrow),Y.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),d().createElement("div",{style:Y.W.infoDescription,key:`month-over-month-info-${t}`},(0,j.Y)(o))):(0,j.Tf)()},this.getTotalCost=(e,t)=>{const{report:r,intl:o}=this.props,a=r&&r.meta&&r.meta.total&&r.meta.total.cost&&r.meta.total.cost.total?r.meta.total.cost.total.value:0,s=0===a?a.toFixed(2):(e.cost.total.value/a*100).toFixed(2);return d().createElement(d().Fragment,null,(0,D.xG)(e.cost.total.value,e.cost.total.units),d().createElement("div",{style:Y.W.infoDescription,key:`total-cost-${t}`},o.formatMessage(c.Z.percentOfCost,{value:s})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{report:t,selectedItems:r}=this.props,o=t&&t.data?JSON.stringify(t.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")===o&&e.selectedItems===r||this.initDatum()}render(){const{isLoading:e,onSelected:t,onSort:r,selectedItems:o}=this.props,{columns:a,rows:s}=this.state;return d().createElement(K.w,{columns:a,isLoading:e,onSelected:t,onSort:r,rows:s,selectedItems:o})}}const oe=(0,u.ZP)((0,Z.E)(re));var ae=r(36116),se=r(70539),le=r(48949),ne=r(94282);const ie=k.Q.tag,ce=k.L.gcp;class pe extends d().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,r=[{name:e.formatMessage(c.Z.filterByValues,{value:"account"}),key:"account"},{name:e.formatMessage(c.Z.filterByValues,{value:"gcp_project"}),key:"gcp_project"},{name:e.formatMessage(c.Z.filterByValues,{value:"service"}),key:"service"},{name:e.formatMessage(c.Z.filterByValues,{value:"region"}),key:"region"}];return t&&t.data&&t.data.length&&r.push({name:e.formatMessage(c.Z.filterByValues,{value:n.up}),key:n.up}),r}}componentDidMount(){const{fetchTag:e,tagReportFetchStatus:t,tagQueryString:r}=this.props;this.setState({categoryOptions:this.getCategoryOptions()},(()=>{t!==O.iF.inProgress&&e(ce,ie,r)}))}componentDidUpdate(e){const{fetchTag:t,query:r,tagReport:o,tagReportFetchStatus:a,tagQueryString:s}=this.props;(0,ne.X)(o,e.tagReport)?r&&!(0,ne.X)(r,e.query)&&a!==O.iF.inProgress&&t(ce,ie,s):this.setState({categoryOptions:this.getCategoryOptions()},(()=>{a!==O.iF.inProgress&&t(ce,ie,s)}))}render(){const{groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isExportDisabled:o,itemsPerPage:a,itemsTotal:s,onBulkSelected:l,onExportClicked:n,onFilterAdded:i,onFilterRemoved:c,pagination:p,query:u,selectedItems:h,tagReport:m}=this.props,{categoryOptions:g}=this.state;return d().createElement(se.k,{categoryOptions:g,groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isExportDisabled:o,itemsPerPage:a,itemsTotal:s,onBulkSelected:l,onExportClicked:n,onFilterAdded:i,onFilterRemoved:c,pagination:p,query:u,resourcePathsType:ae.C.gcp,selectedItems:h,showBulkSelect:!0,showExport:!0,showFilter:!0,tagReport:m,tagReportPathsType:ce})}}const de=(0,O.X1)(((e,t)=>{const r=(0,s.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3});return{tagReport:le.ux.selectTag(e,ce,ie,r),tagReportFetchStatus:le.ux.selectTagFetchStatus(e,ce,ie,r),tagQueryString:r}})),ue={fetchTag:le.xr.Xt},he=(0,h.connect)(de,ue)(pe),me=(0,u.ZP)(he);var ge=r(32412);const ye={gcpDetails:{minHeight:"100%"},content:{paddingBottom:L.ZP.value,paddingTop:L.ZP.value},paginationContainer:{marginLeft:L.ZP.value,marginRight:L.ZP.value},pagination:{backgroundColor:A.ZP.value,padding:ge.ZP.value},tableContainer:{marginLeft:L.ZP.value,marginRight:L.ZP.value}},ve={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},exclude:{},filter_by:{},group_by:{account:"*"},order_by:{cost:"desc"}},fe=i.C.cost,be=i.K.gcp;class Se extends d().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,r=M(e.group_by),o=(0,b.qV)(e);return(0,_.c)({report:t,idKey:o||r})},this.getExportModal=e=>{const{query:t,report:r,reportQueryString:o}=this.props,{isAllSelected:a,isExportModalOpen:s,selectedItems:l}=this.state,i=M(t.group_by),c=(0,b.qV)(t),p=r&&r.meta?r.meta.count:0,u=[];return l.map((e=>{e.label!==`${n.Xq}${i}`&&e.label!==`${n.Xq}${c}`&&u.push(e)})),d().createElement(f.X,{count:a?p:u.length,isAllItems:(a||l.length===p)&&e.length>0,groupBy:c?`${n.P}${c}`:i,isOpen:s,items:u,onClose:this.handleExportModalClose,reportPathsType:be,reportQueryString:o})},this.getPagination=(e=!1)=>{const{intl:t,query:r,router:a,report:s}=this.props,l=s&&s.meta?s.meta.count:0,n=s&&s.meta&&s.meta.filter&&s.meta.filter.limit?s.meta.filter.limit:ve.filter.limit,i=(s&&s.meta&&s.meta.filter&&s.meta.filter.offset?s.meta.filter.offset:ve.filter.offset)/n+1;return d().createElement(o.Pagination,{isCompact:!e,itemCount:l,onPerPageSelect:(e,t)=>(0,S.xh)(r,a,t),onSetPage:(e,t)=>(0,S.$9)(r,a,s,t),page:i,perPage:n,titles:{paginationTitle:t.formatMessage(c.Z.paginationTitle,{title:t.formatMessage(c.Z.gcp),placement:e?"bottom":"top"})},variant:e?o.PaginationVariant.bottom:o.PaginationVariant.top,widgetId:"exports-pagination"+(e?"-bottom":"")})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:r,reportQueryString:o,router:a}=this.props,{isAllSelected:s,selectedItems:l}=this.state,i=M(e.group_by),c=(0,b.qV)(e);return d().createElement(oe,{groupBy:c?`${n.P}${c}`:i,groupByTagKey:c,isAllSelected:s,isLoading:r===O.iF.inProgress,onSelected:this.handleSelected,onSort:(t,r)=>(0,S.yB)(e,a,t,r),report:t,reportQueryString:o,selectedItems:l})},this.getToolbar=e=>{const{query:t,router:r,report:o}=this.props,{isAllSelected:a,selectedItems:s}=this.state,l=M(t.group_by),i=(0,b.qV)(t),c=o&&o.meta?o.meta.count:0;return d().createElement(me,{groupBy:i?`${n.P}${i}`:l,isAllSelected:a,isExportDisabled:0===e.length||!a&&0===s.length,itemsPerPage:e.length,itemsTotal:c,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,S.$3)(t,r,e),onFilterRemoved:e=>(0,S.q7)(t,r,e),pagination:this.getPagination(),query:t,selectedItems:s})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{query:t,router:r}=this.props,o=e,a=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{group_by:{[o]:"*"},order_by:{cost:"desc"}});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{r.navigate((0,x.Z)(a,r.location,!0),{replace:!0})}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:r,selectedItems:o}=this.state;let a=[...r?this.getComputedItems():o];e&&e.length>0&&(t?e.map((e=>a.push(e))):e.map((e=>{a=a.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:a})},this.updateReport=()=>{const{fetchReport:e,query:t,reportQueryString:r,router:o}=this.props;o.location.search?e(be,fe,r):o.navigate((0,x.Z)({exclude:t?t.exclude:void 0,filter_by:t?t.filter_by:void 0,group_by:t?t.group_by:void 0,order_by:{cost:"desc"}},o.location),{replace:!0})},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{report:r,reportError:o,reportQueryString:a,router:s}=this.props,{selectedItems:l}=this.state,n=e.reportQueryString!==a,i=!r&&!o,c=!s.location.search,p=t.selectedItems!==l;(n||i||c||p)&&this.updateReport()}render(){const{currency:e,intl:t,providers:r,providersFetchStatus:o,query:s,report:l,reportError:n,reportFetchStatus:i,router:p}=this.props,u=M(s.group_by),h=this.getComputedItems(),f=t.formatMessage(c.Z.gcpDetailsTitle);if(n)return d().createElement(v.W,{title:f});if(o===O.iF.inProgress)return d().createElement(m.g,{title:f});if(o===O.iF.complete){if(r&&r.meta&&0===r.meta.count)return d().createElement(y.L,{providerType:a.l.gcp,title:f});if(!(0,E.g8)(r))return d().createElement(g.J,{title:f})}return d().createElement("div",{style:ye.gcpDetails},d().createElement(W,{currency:e,groupBy:u,onCurrencySelected:e=>(0,S._s)(s,p,e),onGroupBySelected:this.handleGroupBySelected,report:l}),d().createElement("div",{style:ye.content},this.getToolbar(h),this.getExportModal(h),i===O.iF.inProgress?d().createElement(m.g,null):d().createElement(d().Fragment,null,d().createElement("div",{style:ye.tableContainer},this.getTable()),d().createElement("div",{style:ye.paginationContainer},d().createElement("div",{style:ye.pagination},this.getPagination(!0))))))}}const Ee=(0,O.X1)(((e,{router:t})=>{const r=(0,s.mB)(t.location.search),o=P.iJ.selectIsCurrencyFeatureEnabled(e)?(0,T.zC)():void 0,n={delta:"cost",filter:Object.assign(Object.assign({},ve.filter),r.filter),filter_by:r.filter_by||ve.filter_by,exclude:r.exclude||ve.exclude,group_by:r.group_by||ve.group_by,order_by:r.order_by||ve.order_by},i=(0,s.pm)(Object.assign(Object.assign({},n),{currency:o})),c=B.ZV.selectReport(e,be,fe,i),p=B.ZV.selectReportError(e,be,fe,i),d=B.ZV.selectReportFetchStatus(e,be,fe,i),u=(0,l.H)(C.NT),h=C.aX.selectProviders(e,a.l.all,u),m=C.aX.selectProvidersError(e,a.l.all,u),g=C.aX.selectProvidersFetchStatus(e,a.l.all,u);return{currency:o,providers:(0,E.BV)(h,a.l.gcp),providersError:m,providersFetchStatus:g,query:n,report:c,reportError:p,reportFetchStatus:d,reportQueryString:i}})),xe={fetchReport:B.nx.fetchReport},Oe=(0,u.ZP)((0,Z.E)((0,h.connect)(Ee,xe)(Se)))},54583:(e,t,r)=>{r.d(t,{Tm:()=>a,Zc:()=>s,yW:()=>l});var o=r(39333);const a=({basePath:e,description:t,groupBy:r,isPlatformCosts:a,label:s,router:l})=>{const n=(0,o.mB)(l.location.search),i=Object.assign(Object.assign(Object.assign(Object.assign({},n),t&&t!==s&&{[o.eG]:t}),a&&{[o.yG]:s}),{group_by:{[r]:a?"*":s}});return a&&(i.filter||(i.filter={}),i.filter.category=o.rx),`${e}?${(0,o.IV)(i)}`},s=({basePath:e,description:t,groupBy:r,groupByOrg:a,id:s,router:l,title:n,type:i})=>{const c=(0,o.mB)(l.location.search),p=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},c),t&&t!==n&&{[o.eG]:t}),n&&{[o.yG]:n}),a&&{[o.dV]:a}),{group_by:{[r]:s}});return"account"===i?(p.filter||(p.filter={}),p.filter.account=s,p.group_by={[o.dV]:a}):"organizational_unit"===i&&(p.group_by={[o.dV]:s}),`${e}?${(0,o.IV)(p)}`},l=e=>e&&e.filter&&e.filter.category===o.rx}}]);
//# sourceMappingURL=../sourcemaps/gcpDetails.1f7b17c727de3c9233f2eca852c2c6ec.js.map