"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[4123],{15265:(e,t,r)=>{r.d(t,{LA:()=>s,ZP:()=>n,mq:()=>a});var o=r(40400);const a={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},s=(0,o.IU)(a),n=s},80965:(e,t,r)=>{r.d(t,{V_:()=>s,ZP:()=>n,jm:()=>a});var o=r(40400);const a={name:"MinusIcon",height:512,width:448,svgPath:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0},s=(0,o.IU)(a),n=s},33605:(e,t)=>{t.o3={name:"--pf-global--Color--100",value:"#151515",var:"var(--pf-global--Color--100)"},t.ZP=t.o3},40794:(e,t)=>{t.zf={name:"--pf-global--FontSize--xs",value:"0.75rem",var:"var(--pf-global--FontSize--xs)"},t.ZP=t.zf},12289:(e,t)=>{t.Jd={name:"--pf-global--disabled-color--100",value:"#6a6e73",var:"var(--pf-global--disabled-color--100)"},t.ZP=t.Jd},11331:(e,t)=>{t.po={name:"--pf-global--spacer--3xl",value:"4rem",var:"var(--pf-global--spacer--3xl)"},t.ZP=t.po},43789:(e,t)=>{t.Q8={name:"--pf-global--spacer--xs",value:"0.25rem",var:"var(--pf-global--spacer--xs)"},t.ZP=t.Q8},15984:(e,t,r)=>{r.d(t,{Z:()=>l});var o=r(85893),a=r(54653),s=r(1915),n=function(){return n=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},n.apply(this,arguments)};const l=function(){return(0,o.jsxs)(a.EmptyState,n({variant:a.EmptyStateVariant.large,className:"ins-c-empty-state__unavailable pf-m-redhat-font"},{children:[(0,o.jsx)(a.EmptyStateIcon,{icon:s.ExclamationCircleIcon}),(0,o.jsx)(a.Title,n({headingLevel:"h5",size:"lg"},{children:"This page is temporarily unavailable"})),(0,o.jsxs)(a.EmptyStateBody,{children:["Try refreshing the page. If the problem persists, contact your organization administrator or visit our",(0,o.jsxs)("a",n({href:"https://status.redhat.com/",target:"_blank",rel:"noopener noreferrer"},{children:[" ","status page"]}))," ","for known outages."]})]}))}},98485:(e,t,r)=>{r.d(t,{L:()=>n});var o=r(80965),a=r(92950),s=r.n(a);const n=()=>s().createElement("span",{className:"emptyValueContainer"},s().createElement(o.V_,null))},62423:(e,t,r)=>{r.d(t,{e:()=>f});var o=r(54653),a=r(39333),s=r(97027),n=r(92950),l=r.n(n),i=r(74806),c=r(77760),d=r(40493),p=r(1156),u=r(58613),h=r(5842);class m extends l().Component{constructor(e,t){super(e,t),this.defaultState={isDropdownOpen:!1,isExportModalOpen:!1},this.state=Object.assign({},this.defaultState),this.getExportModal=()=>{const{groupBy:e,item:t,reportPathsType:r,reportQueryString:o}=this.props,{isExportModalOpen:a}=this.state;return l().createElement(d.X,{count:1,groupBy:e,isOpen:a,items:[t],onClose:this.handleExportModalClose,reportPathsType:r,reportQueryString:o})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleOnSelect=()=>{const{isDropdownOpen:e}=this.state;this.setState({isDropdownOpen:!e})},this.handleOnToggle=e=>{this.setState({isDropdownOpen:e})},this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleOnToggle=this.handleOnToggle.bind(this),this.handleOnSelect=this.handleOnSelect.bind(this)}render(){const{groupBy:e,isDisabled:t,showPriceListOption:r,intl:n,item:{source_uuid:i},redirectToCostModel:c,router:d}=this.props,p=[l().createElement(o.DropdownItem,{component:"button",isDisabled:t,key:"export-action",onClick:this.handleExportModalOpen},n.formatMessage(s.Z.detailsActionsExport))];return r&&p.unshift(l().createElement(o.DropdownItem,{component:"button",key:"price-list-action",isDisabled:t||e.includes(a.P)||0===i.length,onClick:()=>c(i[0],d)},n.formatMessage(s.Z.detailsActionsPriceList))),l().createElement(l().Fragment,null,l().createElement(o.Dropdown,{onSelect:this.handleOnSelect,toggle:l().createElement(o.KebabToggle,{onToggle:this.handleOnToggle}),isOpen:this.state.isDropdownOpen,isPlain:!0,position:"right",dropdownItems:p}),this.getExportModal())}}const g=(0,p.X1)(((e,t)=>({}))),y={redirectToCostModel:u.F0.redirectToCostModelFromSourceUuid},v=(0,c.connect)(g,y)(m),f=(0,i.ZP)((0,h.E)(v))},90302:(e,t,r)=>{r.d(t,{W:()=>i});var o=r(49382),a=r(12289),s=r(40794),n=r(11331),l=r(43789);const i={costColumn:{textAlign:"right"},defaultLabel:{minWidth:"63px"},emptyState:{backgroundColor:o.ZP.value,display:"flex",justifyContent:"center",paddingTop:n.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:l.ZP.value},infoDescription:{color:a.ZP.value,fontSize:s.ZP.value},nameColumn:{width:"1%"}}},90569:(e,t,r)=>{r.d(t,{w:()=>g});var o=r(54653),a=r(52636),s=r(14844),n=r(79112),l=r(97027),i=r(92950),c=r.n(i),d=r(74806),p=r(42901),u=r(5842),h=r(90302);class m extends c().Component{constructor(e){super(e),this.getEmptyState=()=>{const{intl:e,router:t}=this.props,r=(0,n.mB)(t.location.search);if(r.filter_by)for(const e of Object.values(r.filter_by))if("*"!==e)return c().createElement(p.c,{filter:e,showMargin:!1});return c().createElement(o.EmptyState,null,c().createElement(o.EmptyStateIcon,{icon:a.Xk}),c().createElement(o.EmptyStateBody,null,e.formatMessage(l.Z.detailsEmptyState)))},this.getSortBy=e=>{const{columns:t,router:r}=this.props,o=t[e].orderBy,a=(0,n.mB)(r.location.search),s=a&&a.order_by&&a.order_by[o];return s?{index:e,direction:s}:{}},this.getSortParams=e=>({sortBy:this.getSortBy(e),onSort:this.handleOnSort,columnIndex:e}),this.handleOnSelect=(e,t,r)=>{const{onSelected:o,rows:a}=this.props;let s,n=[];-1===r?s=a.map((e=>(e.selected=t,e))):(s=[...a],s[r].selected=t,n=[s[r].item]),this.setState({rows:a},(()=>{o&&o(n,t)}))},this.handleOnSort=(e,t,r)=>{const{columns:o,onSort:a}=this.props;a&&a(o[t].orderBy,r===s.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}render(){const{columns:e,intl:t,isLoading:r,rows:a}=this.props;return c().createElement(c().Fragment,null,c().createElement(s.TableComposable,{"aria-label":t.formatMessage(l.Z.dataTableAriaLabel),gridBreakPoint:"grid-2xl"},c().createElement(s.Thead,null,c().createElement(s.Tr,null,e.map(((e,t)=>c().createElement(s.Th,{key:`col-${t}-${e.value}`,modifier:"nowrap",sort:e.isSortable?this.getSortParams(t):void 0,style:e.style},e.name))))),c().createElement(s.Tbody,null,r?c().createElement(s.Tr,null,c().createElement(s.Td,{colSpan:100},c().createElement(o.Bullseye,null,c().createElement("div",{style:{textAlign:"center"}},c().createElement(o.Spinner,{size:"xl"}))))):a.map(((t,r)=>c().createElement(s.Tr,{key:`row-${r}`},t.cells.map(((o,a)=>0===a?c().createElement(s.Td,{dataLabel:e[a].name,key:`cell-${a}-${r}`,modifier:"nowrap",select:{disable:t.selectionDisabled,isSelected:t.selected,onSelect:(e,t)=>this.handleOnSelect(e,t,r),rowIndex:r}}):c().createElement(s.Td,{dataLabel:e[a].name,key:`cell-${r}-${a}`,modifier:"nowrap",isActionCell:a===t.cells.length-1},o.value)))))))),Boolean(0===a.length)&&c().createElement("div",{style:h.W.emptyState},this.getEmptyState()))}}const g=(0,d.ZP)((0,u.E)(m))},85922:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Oe});var o=r(54653),a=r(1326),s=r(83963),n=r(84717),l=r(39333),i=r(6456),c=r(97027),d=r(92950),p=r.n(d),u=r(74806),h=r(77760),m=r(52471),g=r(55672),y=r(2985),v=r(47947),f=r(40493),b=r(37269),S=r(19727),E=r(86482),x=r(10066),O=r(1156),P=r(78898),_=r(62331),C=r(15920);function M(e={}){return e.payer_tenant_id?"payer_tenant_id":e.region?"region":e.product_service?"product_service":"date"}var B=r(69511),T=r(64703),Z=r(5842),k=r(50081),w=r(60021),F=r(6450),I=r(87560),D=r(45087),A=r(91778),j=r(49382),V=r(33605),$=r(54881),L=r(98499),R=r(48196);const q={costValue:{marginTop:L.ZP.var,marginBottom:0},costLabelUnit:{fontSize:$.ZP.value,color:V.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:j.ZP.var,padding:L.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},title:{paddingBottom:R.ZP.var}},X=[{label:"payer_tenant_id",value:"payer_tenant_id"},{label:"product_service",value:"product_service"},{label:"region",value:"region"}],Q=k.L.oci;class z extends p().Component{render(){const{currency:e,groupBy:t,isCurrencyFeatureEnabled:r,isExportsFeatureEnabled:a,onCurrencySelected:s,onGroupBySelected:n,providers:l,providersError:i,report:d,intl:u}=this.props,h=d&&!i&&l&&l.meta&&l.meta.count>0,m=d&&d.meta&&d.meta.total&&d.meta.total.cost&&d.meta.total.cost.total;return p().createElement("header",{style:q.header},p().createElement("div",{style:q.headerContent},p().createElement(o.Title,{headingLevel:"h1",style:q.title,size:o.TitleSizes["2xl"]},u.formatMessage(c.Z.ociDetailsTitle)),p().createElement("div",{style:q.headerContentRight},r&&p().createElement(F.F,{currency:e,onSelect:s}),a&&p().createElement(w.b,null))),p().createElement("div",{style:q.headerContent},p().createElement("div",{style:q.headerContentLeft},p().createElement(I.X,{getIdKeyForGroupBy:M,groupBy:t,isDisabled:!h,onSelected:n,options:X,showTags:!0,tagReportPathsType:Q})),Boolean(h)&&p().createElement("div",null,p().createElement(o.Title,{headingLevel:"h2",style:q.costValue,size:o.TitleSizes["4xl"]},(0,A.xG)(m?d.meta.total.cost.total.value:0,m?d.meta.total.cost.total.units:"USD")),p().createElement("div",{style:q.dateTitle},(0,D.J4)()))))}}const N=(0,O.X1)(((e,t)=>{const r=(0,n.H)(_.NT),o=_.aX.selectProviders(e,a.l.all,r),s=_.aX.selectProvidersError(e,a.l.all,r),l=_.aX.selectProvidersFetchStatus(e,a.l.all,r);return{isCurrencyFeatureEnabled:P.iJ.selectIsCurrencyFeatureEnabled(e),isExportsFeatureEnabled:P.iJ.selectIsExportsFeatureEnabled(e),providers:(0,E.BV)(o,a.l.oci),providersError:s,providersFetchStatus:l,providersQueryString:r}})),W=(0,u.ZP)((0,h.connect)(N,{})(z));var G=r(79655),H=r(91919),J=r(98485),U=r(62423),K=r(90569),Y=r(90302),ee=r(54583);const te=i.K.oci;class re extends p().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{groupBy:e,groupByTagKey:t,intl:r,isAllSelected:o,report:a,router:s,selectedItems:n}=this.props;if(!a)return;const i=[],d=(0,B.c)({report:a,idKey:t||e}),u=t?[{name:""},{name:r.formatMessage(c.Z.tagNames)},{name:r.formatMessage(c.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:r.formatMessage(c.Z.cost),style:Y.W.costColumn},d.length&&{isSortable:!0}),{name:""}]:[{name:""},Object.assign({orderBy:e,name:r.formatMessage(c.Z.detailsResourceNames,{value:e})},d.length&&{isSortable:!0}),{name:r.formatMessage(c.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:r.formatMessage(c.Z.cost),style:Y.W.costColumn},d.length&&{isSortable:!0}),{name:""}];d.map(((r,a)=>{const c=this.getTotalCost(r,a),d=r&&null!==r.label?r.label:"",u=this.getMonthOverMonthCost(r,a),h=d===`${l.Xq}${e}`||d===`${l.Xq}${t}`,m=r.id&&r.id!==r.label?p().createElement("div",{style:Y.W.infoDescription},r.id):null,g=this.getActions(r,h),y=h?d:p().createElement(G.rU,{to:(0,ee.Tm)({basePath:H.Hb.ociDetailsBreakdown,label:d.toString(),description:r.id,groupBy:e,router:s})},d);i.push({cells:[{},{value:p().createElement("div",null,y,m)},{value:p().createElement("div",null,u)},{value:p().createElement("div",null,c)},{value:p().createElement("div",null,g)}],isOpen:!1,item:r,selected:o||n&&void 0!==n.find((e=>e.id===r.id)),selectionDisabled:h})})),this.setState({columns:u,rows:i})},this.getActions=(e,t)=>{const{groupBy:r,reportQueryString:o}=this.props;return p().createElement(U.e,{groupBy:r,isDisabled:t,item:e,reportPathsType:te,reportQueryString:o})},this.getMonthOverMonthCost=(e,t)=>{const{intl:r}=this.props,o=(0,A.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),a=null!==e.delta_percent?(0,A.rl)(Math.abs(e.delta_percent)):0,s=!(0===a||"0.00"===a),n=null!==e.delta_percent;let l;return s&&(l="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(l+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(l+=" increase")),n?p().createElement("div",{className:"monthOverMonthOverride"},p().createElement("div",{className:l,key:`month-over-month-cost-${t}`},s?r.formatMessage(c.Z.percent,{value:a}):p().createElement(J.L,null),Boolean(s&&null!==e.delta_percent&&e.delta_value>0)&&p().createElement("span",{className:"fa fa-sort-up",style:Y.W.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(s&&null!==e.delta_percent&&e.delta_value<0)&&p().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},Y.W.infoArrow),Y.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),p().createElement("div",{style:Y.W.infoDescription,key:`month-over-month-info-${t}`},(0,D.Y)(o))):(0,D.Tf)()},this.getTotalCost=(e,t)=>{const{report:r,intl:o}=this.props,a=r&&r.meta&&r.meta.total&&r.meta.total.cost&&r.meta.total.cost.total?r.meta.total.cost.total.value:0,s=0===a?a.toFixed(2):(e.cost.total.value/a*100).toFixed(2);return p().createElement(p().Fragment,null,(0,A.xG)(e.cost.total.value,e.cost.total.units),p().createElement("div",{style:Y.W.infoDescription,key:`total-cost-${t}`},o.formatMessage(c.Z.percentOfCost,{value:s})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{report:t,selectedItems:r}=this.props,o=t&&t.data?JSON.stringify(t.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")===o&&e.selectedItems===r||this.initDatum()}render(){const{isLoading:e,onSelected:t,onSort:r,selectedItems:o}=this.props,{columns:a,rows:s}=this.state;return p().createElement(K.w,{columns:a,isLoading:e,onSelected:t,onSort:r,rows:s,selectedItems:o})}}const oe=(0,u.ZP)((0,Z.E)(re));var ae=r(36116),se=r(70539),ne=r(48949),le=r(94282);const ie=k.Q.tag,ce=k.L.oci;class de extends p().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,r=[{name:e.formatMessage(c.Z.filterByValues,{value:"payer_tenant_id"}),key:"payer_tenant_id"},{name:e.formatMessage(c.Z.filterByValues,{value:"product_service"}),key:"product_service"},{name:e.formatMessage(c.Z.filterByValues,{value:"region"}),key:"region"}];return t&&t.data&&t.data.length&&r.push({name:e.formatMessage(c.Z.filterByValues,{value:l.up}),key:l.up}),r}}componentDidMount(){const{fetchTag:e,tagReportFetchStatus:t,tagQueryString:r}=this.props;this.setState({categoryOptions:this.getCategoryOptions()},(()=>{t!==O.iF.inProgress&&e(ce,ie,r)}))}componentDidUpdate(e){const{fetchTag:t,query:r,tagReport:o,tagReportFetchStatus:a,tagQueryString:s}=this.props;(0,le.X)(o,e.tagReport)?r&&!(0,le.X)(r,e.query)&&a!==O.iF.inProgress&&t(ce,ie,s):this.setState({categoryOptions:this.getCategoryOptions()},(()=>{a!==O.iF.inProgress&&t(ce,ie,s)}))}render(){const{groupBy:e,isAllSelected:t,isExportDisabled:r,itemsPerPage:o,itemsTotal:a,onBulkSelected:s,onExportClicked:n,onFilterAdded:l,onFilterRemoved:i,pagination:c,query:d,selectedItems:u,tagReport:h}=this.props,{categoryOptions:m}=this.state;return p().createElement(se.k,{categoryOptions:m,groupBy:e,isAllSelected:t,isExportDisabled:r,itemsPerPage:o,itemsTotal:a,onBulkSelected:s,onExportClicked:n,onFilterAdded:l,onFilterRemoved:i,pagination:c,query:d,resourcePathsType:ae.C.oci,selectedItems:u,showBulkSelect:!0,showExport:!0,showFilter:!0,tagReport:h,tagReportPathsType:ce})}}const pe=(0,O.X1)(((e,t)=>{const r=(0,s.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3}),o=ne.ux.selectTag(e,ce,ie,r);return{tagReportFetchStatus:ne.ux.selectTagFetchStatus(e,ce,ie,r),tagReport:o,tagQueryString:r}})),ue={fetchTag:ne.xr.Xt},he=(0,h.connect)(pe,ue)(de),me=(0,u.ZP)(he);var ge=r(32412);const ye={ociDetails:{minHeight:"100%"},content:{paddingBottom:L.ZP.value,paddingTop:L.ZP.value},paginationContainer:{marginLeft:L.ZP.value,marginRight:L.ZP.value},pagination:{backgroundColor:j.ZP.value,paddingBottom:ge.ZP.value,paddingTop:ge.ZP.value},tableContainer:{marginLeft:L.ZP.value,marginRight:L.ZP.value}},ve={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},exclude:{},filter_by:{},group_by:{payer_tenant_id:"*"},order_by:{cost:"desc"}},fe=i.C.cost,be=i.K.oci;class Se extends p().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,r=M(e.group_by),o=(0,b.qV)(e);return(0,B.c)({report:t,idKey:o||r})},this.getExportModal=e=>{const{query:t,report:r,reportQueryString:o}=this.props,{isAllSelected:a,isExportModalOpen:s,selectedItems:n}=this.state,i=M(t.group_by),c=(0,b.qV)(t),d=r&&r.meta?r.meta.count:0,u=[];return n.map((e=>{e.label!==`${l.Xq}${i}`&&e.label!==`${l.Xq}${c}`&&u.push(e)})),p().createElement(f.X,{count:a?d:u.length,isAllItems:(a||n.length===d)&&e.length>0,groupBy:c?`${l.P}${c}`:i,isOpen:s,items:u,onClose:this.handleExportModalClose,reportPathsType:be,reportQueryString:o})},this.getPagination=(e=!1)=>{const{intl:t,query:r,report:a,router:s}=this.props,n=a&&a.meta?a.meta.count:0,l=a&&a.meta&&a.meta.filter&&a.meta.filter.limit?a.meta.filter.limit:ve.filter.limit,i=(a&&a.meta&&a.meta.filter&&a.meta.filter.offset?a.meta.filter.offset:ve.filter.offset)/l+1;return p().createElement(o.Pagination,{isCompact:!e,itemCount:n,onPerPageSelect:(e,t)=>(0,S.xh)(r,s,t),onSetPage:(e,t)=>(0,S.$9)(r,s,a,t),page:i,perPage:l,titles:{paginationTitle:t.formatMessage(c.Z.paginationTitle,{title:t.formatMessage(c.Z.oci),placement:e?"bottom":"top"})},variant:e?o.PaginationVariant.bottom:o.PaginationVariant.top,widgetId:"exports-pagination"+(e?"-bottom":"")})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:r,reportQueryString:o,router:a}=this.props,{isAllSelected:s,selectedItems:n}=this.state,i=M(e.group_by),c=(0,b.qV)(e);return p().createElement(oe,{groupBy:c?`${l.P}${c}`:i,groupByTagKey:c,isAllSelected:s,isLoading:r===O.iF.inProgress,onSelected:this.handleSelected,onSort:(t,r)=>(0,S.yB)(e,a,t,r),report:t,reportQueryString:o,selectedItems:n})},this.getToolbar=e=>{const{query:t,router:r,report:o}=this.props,{isAllSelected:a,selectedItems:s}=this.state,n=M(t.group_by),i=(0,b.qV)(t),c=o&&o.meta?o.meta.count:0;return p().createElement(me,{groupBy:i?`${l.P}${i}`:n,isAllSelected:a,isExportDisabled:0===e.length||!a&&0===s.length,itemsPerPage:e.length,itemsTotal:c,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,S.$3)(t,r,e),onFilterRemoved:e=>(0,S.q7)(t,r,e),pagination:this.getPagination(),query:t,selectedItems:s})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{query:t,router:r}=this.props,o=e,a=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{group_by:{[o]:"*"},order_by:{cost:"desc"}});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{r.navigate((0,x.Z)(a,r.location,!0),{replace:!0})}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:r,selectedItems:o}=this.state;let a=[...r?this.getComputedItems():o];e&&e.length>0&&(t?e.map((e=>a.push(e))):e.map((e=>{a=a.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:a})},this.updateReport=()=>{const{fetchReport:e,query:t,reportQueryString:r,router:o}=this.props;o.location.search?e(be,fe,r):o.navigate((0,x.Z)({exclude:t?t.exclude:void 0,filter_by:t?t.filter_by:void 0,group_by:t?t.group_by:void 0,order_by:{cost:"desc"}},o.location),{replace:!0})},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{report:r,reportError:o,reportQueryString:a,router:s}=this.props,{selectedItems:n}=this.state,l=e.reportQueryString!==a,i=!r&&!o,c=!s.location.search,d=t.selectedItems!==n;(l||i||c||d)&&this.updateReport()}render(){const{currency:e,intl:t,providers:r,providersFetchStatus:o,query:s,report:n,reportError:l,reportFetchStatus:i,router:d}=this.props,u=M(s.group_by),h=this.getComputedItems(),f=t.formatMessage(c.Z.ociDetailsTitle);if(l)return p().createElement(v.W,{title:f});if(o===O.iF.inProgress)return p().createElement(m.g,{title:f});if(o===O.iF.complete){if(r&&r.meta&&0===r.meta.count)return p().createElement(y.L,{providerType:a.l.oci,title:f});if(!(0,E.g8)(r))return p().createElement(g.J,{title:f})}return p().createElement("div",{style:ye.ociDetails},p().createElement(W,{currency:e,groupBy:u,onCurrencySelected:e=>(0,S._s)(s,d,e),onGroupBySelected:this.handleGroupBySelected,report:n}),p().createElement("div",{style:ye.content},this.getToolbar(h),this.getExportModal(h),i===O.iF.inProgress?p().createElement(m.g,null):p().createElement(p().Fragment,null,p().createElement("div",{style:ye.tableContainer},this.getTable()),p().createElement("div",{style:ye.paginationContainer},p().createElement("div",{style:ye.pagination},this.getPagination(!0))))))}}const Ee=(0,O.X1)(((e,{router:t})=>{const r=(0,s.mB)(t.location.search),o=P.iJ.selectIsCurrencyFeatureEnabled(e)?(0,T.zC)():void 0,l={delta:"cost",filter:Object.assign(Object.assign({},ve.filter),r.filter),filter_by:r.filter_by||ve.filter_by,exclude:r.exclude||ve.exclude,group_by:r.group_by||ve.group_by,order_by:r.order_by||ve.order_by},i=(0,s.pm)(Object.assign(Object.assign({},l),{currency:o})),c=C.ZV.selectReport(e,be,fe,i),d=C.ZV.selectReportError(e,be,fe,i),p=C.ZV.selectReportFetchStatus(e,be,fe,i),u=(0,n.H)(_.NT),h=_.aX.selectProviders(e,a.l.all,u),m=_.aX.selectProvidersError(e,a.l.all,u),g=_.aX.selectProvidersFetchStatus(e,a.l.all,u);return{currency:o,providers:(0,E.BV)(h,a.l.oci),providersError:m,providersFetchStatus:g,query:l,report:c,reportError:d,reportFetchStatus:p,reportQueryString:i}})),xe={fetchReport:C.nx.fetchReport},Oe=(0,u.ZP)((0,Z.E)((0,h.connect)(Ee,xe)(Se)))},54583:(e,t,r)=>{r.d(t,{Tm:()=>a,Zc:()=>s,yW:()=>n});var o=r(39333);const a=({basePath:e,description:t,groupBy:r,isPlatformCosts:a,label:s,router:n})=>{const l=(0,o.mB)(n.location.search),i=Object.assign(Object.assign(Object.assign(Object.assign({},l),t&&t!==s&&{[o.eG]:t}),a&&{[o.yG]:s}),{group_by:{[r]:a?"*":s}});return a&&(i.filter||(i.filter={}),i.filter.category=o.rx),`${e}?${(0,o.IV)(i)}`},s=({basePath:e,description:t,groupBy:r,groupByOrg:a,id:s,router:n,title:l,type:i})=>{const c=(0,o.mB)(n.location.search),d=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},c),t&&t!==l&&{[o.eG]:t}),l&&{[o.yG]:l}),a&&{[o.dV]:a}),{group_by:{[r]:s}});return"account"===i?(d.filter||(d.filter={}),d.filter.account=s,d.group_by={[o.dV]:a}):"organizational_unit"===i&&(d.group_by={[o.dV]:s}),`${e}?${(0,o.IV)(d)}`},n=e=>e&&e.filter&&e.filter.category===o.rx}}]);
//# sourceMappingURL=../sourcemaps/ociDetails.8b9b4ede3b93a82d0fd1b38a004ff44e.js.map