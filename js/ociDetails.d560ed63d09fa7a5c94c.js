"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[4123],{15265:(e,t,r)=>{r.d(t,{LA:()=>s,ZP:()=>n,mq:()=>a});var o=r(40400);const a={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},s=(0,o.IU)(a),n=s},80965:(e,t,r)=>{r.d(t,{V_:()=>s,ZP:()=>n,jm:()=>a});var o=r(40400);const a={name:"MinusIcon",height:512,width:448,svgPath:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0},s=(0,o.IU)(a),n=s},33605:(e,t)=>{t.o3={name:"--pf-global--Color--100",value:"#151515",var:"var(--pf-global--Color--100)"},t.ZP=t.o3},40794:(e,t)=>{t.zf={name:"--pf-global--FontSize--xs",value:"0.75rem",var:"var(--pf-global--FontSize--xs)"},t.ZP=t.zf},12289:(e,t)=>{t.Jd={name:"--pf-global--disabled-color--100",value:"#6a6e73",var:"var(--pf-global--disabled-color--100)"},t.ZP=t.Jd},11331:(e,t)=>{t.po={name:"--pf-global--spacer--3xl",value:"4rem",var:"var(--pf-global--spacer--3xl)"},t.ZP=t.po},43789:(e,t)=>{t.Q8={name:"--pf-global--spacer--xs",value:"0.25rem",var:"var(--pf-global--spacer--xs)"},t.ZP=t.Q8},15984:(e,t,r)=>{r.d(t,{Z:()=>l});var o=r(85893),a=r(76481),s=r(15138),n=function(){return n=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},n.apply(this,arguments)};const l=function(){return(0,o.jsxs)(a.EmptyState,n({variant:a.EmptyStateVariant.large,className:"ins-c-empty-state__unavailable pf-m-redhat-font"},{children:[(0,o.jsx)(a.EmptyStateIcon,{icon:s.ExclamationCircleIcon}),(0,o.jsx)(a.Title,n({headingLevel:"h5",size:"lg"},{children:"This page is temporarily unavailable"})),(0,o.jsxs)(a.EmptyStateBody,{children:["Try refreshing the page. If the problem persists, contact your organization administrator or visit our",(0,o.jsxs)("a",n({href:"https://status.redhat.com/",target:"_blank",rel:"noopener noreferrer"},{children:[" ","status page"]}))," ","for known outages."]})]}))}},98485:(e,t,r)=>{r.d(t,{L:()=>n});var o=r(80965),a=r(92950),s=r.n(a);const n=()=>s().createElement("span",{className:"emptyValueContainer"},s().createElement(o.V_,null))},62423:(e,t,r)=>{r.d(t,{e:()=>v});var o=r(76481),a=r(97027),s=r(92950),n=r.n(s),l=r(74806),i=r(77760),c=r(40493),d=r(1156),p=r(58613),u=r(14483),h=r(5842);class m extends n().Component{constructor(e,t){super(e,t),this.defaultState={isDropdownOpen:!1,isExportModalOpen:!1},this.state=Object.assign({},this.defaultState),this.getExportModal=()=>{const{groupBy:e,item:t,reportPathsType:r,reportQueryString:o}=this.props,{isExportModalOpen:a}=this.state;return n().createElement(c.X,{count:1,groupBy:e,isOpen:a,items:[t],onClose:this.handleExportModalClose,reportPathsType:r,reportQueryString:o})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleOnSelect=()=>{const{isDropdownOpen:e}=this.state;this.setState({isDropdownOpen:!e})},this.handleOnToggle=e=>{this.setState({isDropdownOpen:e})},this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleOnToggle=this.handleOnToggle.bind(this),this.handleOnSelect=this.handleOnSelect.bind(this)}render(){const{groupBy:e,isDisabled:t,showPriceListOption:r,intl:s,item:{source_uuid:l},redirectToCostModel:i,router:c}=this.props,d=[n().createElement(o.DropdownItem,{component:"button",isDisabled:t,key:"export-action",onClick:this.handleExportModalOpen},s.formatMessage(a.Z.detailsActionsExport))];return r&&d.unshift(n().createElement(o.DropdownItem,{component:"button",key:"price-list-action",isDisabled:t||e.includes(u.P)||0===l.length,onClick:()=>i(l[0],c)},s.formatMessage(a.Z.detailsActionsPriceList))),n().createElement(n().Fragment,null,n().createElement(o.Dropdown,{onSelect:this.handleOnSelect,toggle:n().createElement(o.KebabToggle,{onToggle:this.handleOnToggle}),isOpen:this.state.isDropdownOpen,isPlain:!0,position:"right",dropdownItems:d}),this.getExportModal())}}const g=(0,d.X1)(((e,t)=>({}))),y={redirectToCostModel:p.F0.redirectToCostModelFromSourceUuid},f=(0,i.connect)(g,y)(m),v=(0,l.ZP)((0,h.E)(f))},90302:(e,t,r)=>{r.d(t,{W:()=>i});var o=r(49382),a=r(12289),s=r(40794),n=r(11331),l=r(43789);const i={costColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end",paddingRight:0},defaultLabel:{minWidth:"63px"},emptyState:{backgroundColor:o.ZP.value,display:"flex",justifyContent:"center",paddingTop:n.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:l.ZP.value},infoDescription:{color:a.ZP.value,fontSize:s.ZP.value},lastReportedColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end"},lastReportedCell:{textAlign:"right",paddingRight:"40px"},managedColumn:{textAlign:"right"},nameColumn:{width:"1%"}}},90569:(e,t,r)=>{r.d(t,{w:()=>g});var o=r(76481),a=r(52636),s=r(25441),n=r(79112),l=r(97027),i=r(92950),c=r.n(i),d=r(74806),p=r(42901),u=r(5842),h=r(90302);class m extends c().Component{constructor(e){super(e),this.getEmptyState=()=>{const{intl:e,router:t}=this.props,r=(0,n.mB)(t.location.search);if(r.filter_by)for(const e of Object.values(r.filter_by))if("*"!==e)return c().createElement(p.c,{filter:e,showMargin:!1});return c().createElement(o.EmptyState,null,c().createElement(o.EmptyStateIcon,{icon:a.Xk}),c().createElement(o.EmptyStateBody,null,e.formatMessage(l.Z.detailsEmptyState)))},this.getSortBy=e=>{const{columns:t,router:r}=this.props,o=t[e].orderBy,a=(0,n.mB)(r.location.search),s=a&&a.order_by&&a.order_by[o];return s?{index:e,direction:s}:{}},this.getSortParams=e=>({sortBy:this.getSortBy(e),onSort:this.handleOnSort,columnIndex:e}),this.handleOnSelect=(e,t,r)=>{const{onSelected:o,rows:a}=this.props;let s,n=[];-1===r?s=a.map((e=>(e.selected=t,e))):(s=[...a],s[r].selected=t,n=[s[r].item]),this.setState({rows:a},(()=>{o&&o(n,t)}))},this.handleOnSort=(e,t,r)=>{const{columns:o,onSort:a}=this.props;a&&a(o[t].orderBy,r===s.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}render(){const{columns:e,intl:t,isLoading:r,isRos:a,rows:n}=this.props;return c().createElement(c().Fragment,null,c().createElement(s.TableComposable,{"aria-label":t.formatMessage(l.Z.dataTableAriaLabel),gridBreakPoint:"grid-2xl"},c().createElement(s.Thead,null,c().createElement(s.Tr,null,e.map(((e,t)=>c().createElement(s.Th,{key:`col-${t}-${e.value}`,modifier:"nowrap",sort:e.isSortable?this.getSortParams(t):void 0,style:e.style},e.name))))),c().createElement(s.Tbody,null,r?c().createElement(s.Tr,null,c().createElement(s.Td,{colSpan:100},c().createElement(o.Bullseye,null,c().createElement("div",{style:{textAlign:"center"}},c().createElement(o.Spinner,{size:"xl"}))))):n.map(((t,r)=>c().createElement(s.Tr,{key:`row-${r}`},t.cells.map(((o,n)=>a||0!==n?c().createElement(s.Td,{dataLabel:e[n].name,key:`cell-${r}-${n}`,modifier:"nowrap",isActionCell:!a&&n===t.cells.length-1,style:o.style},o.value):c().createElement(s.Td,{dataLabel:e[n].name,key:`cell-${n}-${r}`,modifier:"nowrap",select:{disable:t.selectionDisabled,isSelected:t.selected,onSelect:(e,t)=>this.handleOnSelect(e,t,r),rowIndex:r},style:o.style})))))))),Boolean(0===n.length)&&c().createElement("div",{style:h.W.emptyState},this.getEmptyState()))}}const g=(0,d.ZP)((0,u.E)(m))},85922:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Pe});var o=r(76481),a=r(1326),s=r(83963),n=r(84717),l=r(6456),i=r(97027),c=r(92950),d=r.n(c),p=r(74806),u=r(77760),h=r(52471),m=r(55672),g=r(2985),y=r(47947),f=r(40493),v=r(37269),b=r(19727),S=r(86482),E=r(10066),x=r(1156),O=r(78898),P=r(62331),C=r(15920);function _(e={}){return e.payer_tenant_id?"payer_tenant_id":e.region?"region":e.product_service?"product_service":"date"}var M=r(69511),B=r(15829),T=r(14483),Z=r(5842),k=r(50081),w=r(60021),I=r(6450),F=r(87560),D=r(45087),A=r(91778),j=r(49382),R=r(33605),V=r(54881),$=r(98499),L=r(48196);const q={costValue:{marginTop:$.ZP.var,marginBottom:0},costLabelUnit:{fontSize:V.ZP.value,color:R.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:j.ZP.var,padding:$.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},title:{paddingBottom:L.ZP.var}},X=[{label:"payer_tenant_id",value:"payer_tenant_id"},{label:"product_service",value:"product_service"},{label:"region",value:"region"}],Q=k.L.oci;class z extends d().Component{render(){const{currency:e,groupBy:t,isCurrencyFeatureEnabled:r,isExportsFeatureEnabled:a,onCurrencySelected:s,onGroupBySelected:n,providers:l,providersError:c,report:p,intl:u}=this.props,h=p&&!c&&l&&l.meta&&l.meta.count>0,m=p&&p.meta&&p.meta.total&&p.meta.total.cost&&p.meta.total.cost.total;return d().createElement("header",{style:q.header},d().createElement("div",{style:q.headerContent},d().createElement(o.Title,{headingLevel:"h1",style:q.title,size:o.TitleSizes["2xl"]},u.formatMessage(i.Z.ociDetailsTitle)),d().createElement("div",{style:q.headerContentRight},r&&d().createElement(I.F,{currency:e,onSelect:s}),a&&d().createElement(w.b,null))),d().createElement("div",{style:q.headerContent},d().createElement("div",{style:q.headerContentLeft},d().createElement(F.X,{getIdKeyForGroupBy:_,groupBy:t,isDisabled:!h,onSelected:n,options:X,showTags:!0,tagReportPathsType:Q})),Boolean(h)&&d().createElement("div",null,d().createElement(o.Title,{headingLevel:"h2",style:q.costValue,size:o.TitleSizes["4xl"]},(0,A.xG)(m?p.meta.total.cost.total.value:0,m?p.meta.total.cost.total.units:"USD")),d().createElement("div",{style:q.dateTitle},(0,D.J4)()))))}}const N=(0,x.X1)(((e,t)=>{const r=(0,n.H)(P.NT),o=P.aX.selectProviders(e,a.l.all,r),s=P.aX.selectProvidersError(e,a.l.all,r),l=P.aX.selectProvidersFetchStatus(e,a.l.all,r);return{isCurrencyFeatureEnabled:O.iJ.selectIsCurrencyFeatureEnabled(e),isExportsFeatureEnabled:O.iJ.selectIsExportsFeatureEnabled(e),providers:(0,S.BV)(o,a.l.oci),providersError:s,providersFetchStatus:l,providersQueryString:r}})),W=(0,p.ZP)((0,u.connect)(N,{})(z));var G=r(39836),J=r(91919),H=r(98485),K=r(62423),U=r(90569),Y=r(90302),ee=r(54583),te=r(68025);const re=l.K.oci;class oe extends d().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{groupBy:e,groupByTagKey:t,intl:r,isAllSelected:o,report:a,router:s,selectedItems:n}=this.props;if(!a)return;const l=[],c=(0,M.c)({report:a,idKey:t||e}),p=t?[{name:""},{name:r.formatMessage(i.Z.tagNames)},{name:r.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:r.formatMessage(i.Z.cost),style:Y.W.costColumn},c.length&&{isSortable:!0}),{name:""}]:[{name:""},Object.assign({orderBy:e,name:r.formatMessage(i.Z.detailsResourceNames,{value:e})},c.length&&{isSortable:!0}),{name:r.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:r.formatMessage(i.Z.cost),style:Y.W.costColumn},c.length&&{isSortable:!0}),{name:""}];c.map(((r,a)=>{const i=this.getTotalCost(r,a),c=r&&null!==r.label?r.label:"",p=this.getMonthOverMonthCost(r,a),u=c===`${T.Xq}${e}`||c===`${T.Xq}${t}`,h=r.id&&r.id!==r.label?d().createElement("div",{style:Y.W.infoDescription},r.id):null,m=this.getActions(r,u),g=u?c:d().createElement(G.Link,{to:(0,ee.Tm)({basePath:(0,te.dI)(J._.ociDetailsBreakdown.path),description:r.id,groupBy:e,id:r.id,router:s,title:c.toString()})},c);l.push({cells:[{},{value:d().createElement("div",null,g,h)},{value:d().createElement("div",null,p)},{value:d().createElement("div",null,i),style:Y.W.managedColumn},{value:d().createElement("div",null,m)}],isOpen:!1,item:r,selected:o||n&&void 0!==n.find((e=>e.id===r.id)),selectionDisabled:u})})),this.setState({columns:p,rows:l})},this.getActions=(e,t)=>{const{groupBy:r,reportQueryString:o}=this.props;return d().createElement(K.e,{groupBy:r,isDisabled:t,item:e,reportPathsType:re,reportQueryString:o})},this.getMonthOverMonthCost=(e,t)=>{const{intl:r}=this.props,o=(0,A.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),a=null!==e.delta_percent?(0,A.rl)(Math.abs(e.delta_percent)):0,s=!(0===a||"0.00"===a),n=null!==e.delta_percent;let l;return s&&(l="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(l+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(l+=" increase")),n?d().createElement("div",{className:"monthOverMonthOverride"},d().createElement("div",{className:l,key:`month-over-month-cost-${t}`},s?r.formatMessage(i.Z.percent,{value:a}):d().createElement(H.L,null),Boolean(s&&null!==e.delta_percent&&e.delta_value>0)&&d().createElement("span",{className:"fa fa-sort-up",style:Y.W.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(s&&null!==e.delta_percent&&e.delta_value<0)&&d().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},Y.W.infoArrow),Y.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),d().createElement("div",{style:Y.W.infoDescription,key:`month-over-month-info-${t}`},(0,D.Y)(o))):(0,D.Tf)()},this.getTotalCost=(e,t)=>{const{report:r,intl:o}=this.props,a=r&&r.meta&&r.meta.total&&r.meta.total.cost&&r.meta.total.cost.total?r.meta.total.cost.total.value:0,s=0===a?a.toFixed(2):(e.cost.total.value/a*100).toFixed(2);return d().createElement(d().Fragment,null,(0,A.xG)(e.cost.total.value,e.cost.total.units),d().createElement("div",{style:Y.W.infoDescription,key:`total-cost-${t}`},o.formatMessage(i.Z.percentOfCost,{value:s})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{report:t,selectedItems:r}=this.props,o=t&&t.data?JSON.stringify(t.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")===o&&e.selectedItems===r||this.initDatum()}render(){const{isLoading:e,onSelected:t,onSort:r,selectedItems:o}=this.props,{columns:a,rows:s}=this.state;return d().createElement(U.w,{columns:a,isLoading:e,onSelected:t,onSort:r,rows:s,selectedItems:o})}}const ae=(0,p.ZP)((0,Z.E)(oe));var se=r(36116),ne=r(70539),le=r(48949),ie=r(94282);const ce=k.Q.tag,de=k.L.oci;class pe extends d().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,r=[{name:e.formatMessage(i.Z.filterByValues,{value:"payer_tenant_id"}),key:"payer_tenant_id"},{name:e.formatMessage(i.Z.filterByValues,{value:"product_service"}),key:"product_service"},{name:e.formatMessage(i.Z.filterByValues,{value:"region"}),key:"region"}];return t&&t.data&&t.data.length&&r.push({name:e.formatMessage(i.Z.filterByValues,{value:T.up}),key:T.up}),r}}componentDidMount(){const{fetchTag:e,tagReportFetchStatus:t,tagQueryString:r}=this.props;this.setState({categoryOptions:this.getCategoryOptions()},(()=>{t!==x.iF.inProgress&&e(de,ce,r)}))}componentDidUpdate(e){const{fetchTag:t,query:r,tagReport:o,tagReportFetchStatus:a,tagQueryString:s}=this.props;(0,ie.X)(o,e.tagReport)?r&&!(0,ie.X)(r,e.query)&&a!==x.iF.inProgress&&t(de,ce,s):this.setState({categoryOptions:this.getCategoryOptions()},(()=>{a!==x.iF.inProgress&&t(de,ce,s)}))}render(){const{groupBy:e,isAllSelected:t,isDisabled:r,isExportDisabled:o,itemsPerPage:a,itemsTotal:s,onBulkSelected:n,onExportClicked:l,onFilterAdded:i,onFilterRemoved:c,pagination:p,query:u,selectedItems:h,tagReport:m}=this.props,{categoryOptions:g}=this.state;return d().createElement(ne.k,{categoryOptions:g,groupBy:e,isAllSelected:t,isDisabled:r,isExportDisabled:o,itemsPerPage:a,itemsTotal:s,onBulkSelected:n,onExportClicked:l,onFilterAdded:i,onFilterRemoved:c,pagination:p,query:u,resourcePathsType:se.C.oci,selectedItems:h,showBulkSelect:!0,showExport:!0,showFilter:!0,tagReport:m,tagReportPathsType:de})}}const ue=(0,x.X1)(((e,t)=>{const r=(0,s.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3}),o=le.ux.selectTag(e,de,ce,r);return{tagReportFetchStatus:le.ux.selectTagFetchStatus(e,de,ce,r),tagReport:o,tagQueryString:r}})),he={fetchTag:le.xr.Xt},me=(0,u.connect)(ue,he)(pe),ge=(0,p.ZP)(me);var ye=r(32412);const fe={ociDetails:{minHeight:"100%"},content:{paddingBottom:$.ZP.value,paddingTop:$.ZP.value},paginationContainer:{marginLeft:$.ZP.value,marginRight:$.ZP.value},pagination:{backgroundColor:j.ZP.value,paddingBottom:ye.ZP.value,paddingTop:ye.ZP.value},tableContainer:{marginLeft:$.ZP.value,marginRight:$.ZP.value}},ve={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},exclude:{},filter_by:{},group_by:{payer_tenant_id:"*"},order_by:{cost:"desc"}},be=l.C.cost,Se=l.K.oci;class Ee extends d().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,r=_(e.group_by),o=(0,v.qV)(e);return(0,M.c)({report:t,idKey:o||r})},this.getExportModal=e=>{const{query:t,report:r,reportQueryString:o}=this.props,{isAllSelected:a,isExportModalOpen:s,selectedItems:n}=this.state,l=_(t.group_by),i=(0,v.qV)(t),c=r&&r.meta?r.meta.count:0,p=[];return n.map((e=>{e.label!==`${T.Xq}${l}`&&e.label!==`${T.Xq}${i}`&&p.push(e)})),d().createElement(f.X,{count:a?c:p.length,isAllItems:(a||n.length===c)&&e.length>0,groupBy:i?`${T.P}${i}`:l,isOpen:s,items:p,onClose:this.handleExportModalClose,reportPathsType:Se,reportQueryString:o})},this.getPagination=(e=!1,t=!1)=>{const{intl:r,query:a,report:s,router:n}=this.props,l=s&&s.meta?s.meta.count:0,c=s&&s.meta&&s.meta.filter&&s.meta.filter.limit?s.meta.filter.limit:ve.filter.limit,p=(s&&s.meta&&s.meta.filter&&s.meta.filter.offset?s.meta.filter.offset:ve.filter.offset)/c+1;return d().createElement(o.Pagination,{isCompact:!t,isDisabled:e,itemCount:l,onPerPageSelect:(e,t)=>(0,b.xh)(a,n,t),onSetPage:(e,t)=>(0,b.$9)(a,n,s,t),page:p,perPage:c,titles:{paginationTitle:r.formatMessage(i.Z.paginationTitle,{title:r.formatMessage(i.Z.oci),placement:t?"bottom":"top"})},variant:t?o.PaginationVariant.bottom:o.PaginationVariant.top,widgetId:"exports-pagination"+(t?"-bottom":"")})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:r,reportQueryString:o,router:a}=this.props,{isAllSelected:s,selectedItems:n}=this.state,l=_(e.group_by),i=(0,v.qV)(e);return d().createElement(ae,{groupBy:i?`${T.P}${i}`:l,groupByTagKey:i,isAllSelected:s,isLoading:r===x.iF.inProgress,onSelected:this.handleSelected,onSort:(t,r)=>(0,b.yB)(e,a,t,r),report:t,reportQueryString:o,selectedItems:n})},this.getToolbar=e=>{const{query:t,router:r,report:o}=this.props,{isAllSelected:a,selectedItems:s}=this.state,n=_(t.group_by),l=(0,v.qV)(t),i=0===e.length,c=o&&o.meta?o.meta.count:0;return d().createElement(ge,{groupBy:l?`${T.P}${l}`:n,isAllSelected:a,isDisabled:i,isExportDisabled:0===e.length||!a&&0===s.length,itemsPerPage:e.length,itemsTotal:c,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,b.$3)(t,r,e),onFilterRemoved:e=>(0,b.q7)(t,r,e),pagination:this.getPagination(i),query:t,selectedItems:s})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{query:t,router:r}=this.props,o=e,a=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{group_by:{[o]:"*"},order_by:{cost:"desc"}});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{r.navigate((0,E.Z)(a,r.location,!0),{replace:!0})}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:r,selectedItems:o}=this.state;let a=[...r?this.getComputedItems():o];e&&e.length>0&&(t?e.map((e=>a.push(e))):e.map((e=>{a=a.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:a})},this.updateReport=()=>{const{fetchReport:e,reportQueryString:t}=this.props;e(Se,be,t)},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{report:r,reportError:o,reportQueryString:a,router:s}=this.props,{selectedItems:n}=this.state,l=e.reportQueryString!==a,i=!r&&!o,c=!s.location.search,d=t.selectedItems!==n;(l||i||c||d)&&this.updateReport()}render(){const{currency:e,intl:t,providers:r,providersFetchStatus:o,query:s,report:n,reportError:l,reportFetchStatus:c,router:p}=this.props,u=this.getComputedItems(),f=_(s.group_by),v=0===u.length,E=t.formatMessage(i.Z.ociDetailsTitle);if(l)return d().createElement(y.W,{title:E});if(o===x.iF.inProgress)return d().createElement(h.g,{title:E});if(o===x.iF.complete){if(r&&r.meta&&0===r.meta.count)return d().createElement(g.L,{providerType:a.l.oci,title:E});if(!(0,S.g8)(r))return d().createElement(m.J,{title:E})}return d().createElement("div",{style:fe.ociDetails},d().createElement(W,{currency:e,groupBy:f,onCurrencySelected:e=>(0,b._s)(s,p,e),onGroupBySelected:this.handleGroupBySelected,report:n}),d().createElement("div",{style:fe.content},this.getToolbar(u),this.getExportModal(u),c===x.iF.inProgress?d().createElement(h.g,null):d().createElement(d().Fragment,null,d().createElement("div",{style:fe.tableContainer},this.getTable()),d().createElement("div",{style:fe.paginationContainer},d().createElement("div",{style:fe.pagination},this.getPagination(v,!0))))))}}const xe=(0,x.X1)(((e,{router:t})=>{const r=(0,s.mB)(t.location.search),o=O.iJ.selectIsCurrencyFeatureEnabled(e)?(0,B.zC)():void 0,l={delta:"cost",filter:Object.assign(Object.assign({},ve.filter),r.filter),filter_by:r.filter_by||ve.filter_by,exclude:r.exclude||ve.exclude,group_by:r.group_by||ve.group_by,order_by:r.order_by||ve.order_by},i=(0,s.pm)(Object.assign(Object.assign({},l),{currency:o})),c=C.ZV.selectReport(e,Se,be,i),d=C.ZV.selectReportError(e,Se,be,i),p=C.ZV.selectReportFetchStatus(e,Se,be,i),u=(0,n.H)(P.NT),h=P.aX.selectProviders(e,a.l.all,u),m=P.aX.selectProvidersError(e,a.l.all,u),g=P.aX.selectProvidersFetchStatus(e,a.l.all,u);return{currency:o,providers:(0,S.BV)(h,a.l.oci),providersError:m,providersFetchStatus:g,query:l,report:c,reportError:d,reportFetchStatus:p,reportQueryString:i}})),Oe={fetchReport:C.nx.fetchReport},Pe=(0,p.ZP)((0,Z.E)((0,u.connect)(xe,Oe)(Ee)))},54583:(e,t,r)=>{r.d(t,{Tm:()=>s,Zc:()=>n,yW:()=>l});var o=r(39333),a=r(14483);const s=({basePath:e,description:t,groupBy:r,id:s,isPlatformCosts:n,router:l,title:i})=>{const c=(0,o.mB)(l.location.search),d=Object.assign(Object.assign(Object.assign(Object.assign({},c),t&&t!==i&&{[a.eG]:t}),i&&{[a.yG]:i}),{group_by:{[r]:n?"*":s}});return n&&(d.filter||(d.filter={}),d.filter.category=a.rx),`${e}?${(0,o.IV)(d)}`},n=({basePath:e,description:t,groupBy:r,groupByOrg:s,id:n,router:l,title:i,type:c})=>{const d=(0,o.mB)(l.location.search),p=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),t&&t!==i&&{[a.eG]:t}),i&&{[a.yG]:i}),s&&{[a.dV]:s}),{group_by:{[r]:n}});return"account"===c?(p.filter||(p.filter={}),p.filter.account=n,p.group_by={[a.dV]:s}):"organizational_unit"===c&&(p.group_by={[a.dV]:n}),`${e}?${(0,o.IV)(p)}`},l=e=>e&&e.filter&&e.filter.category===a.rx}}]);
//# sourceMappingURL=../sourcemaps/ociDetails.0e8a66b9757e8181e726d0ec08307840.js.map