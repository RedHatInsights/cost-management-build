"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[9565],{15265:(e,t,r)=>{r.d(t,{LA:()=>s,ZP:()=>n,mq:()=>a});var o=r(40400);const a={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},s=(0,o.IU)(a),n=s},80965:(e,t,r)=>{r.d(t,{V_:()=>s,ZP:()=>n,jm:()=>a});var o=r(40400);const a={name:"MinusIcon",height:512,width:448,svgPath:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0},s=(0,o.IU)(a),n=s},33605:(e,t)=>{t.o3={name:"--pf-global--Color--100",value:"#151515",var:"var(--pf-global--Color--100)"},t.ZP=t.o3},40794:(e,t)=>{t.zf={name:"--pf-global--FontSize--xs",value:"0.75rem",var:"var(--pf-global--FontSize--xs)"},t.ZP=t.zf},12289:(e,t)=>{t.Jd={name:"--pf-global--disabled-color--100",value:"#6a6e73",var:"var(--pf-global--disabled-color--100)"},t.ZP=t.Jd},11331:(e,t)=>{t.po={name:"--pf-global--spacer--3xl",value:"4rem",var:"var(--pf-global--spacer--3xl)"},t.ZP=t.po},43789:(e,t)=>{t.Q8={name:"--pf-global--spacer--xs",value:"0.25rem",var:"var(--pf-global--spacer--xs)"},t.ZP=t.Q8},15984:(e,t,r)=>{r.d(t,{Z:()=>l});var o=r(85893),a=r(54785),s=r(42633),n=function(){return n=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},n.apply(this,arguments)};const l=function(){return(0,o.jsxs)(a.EmptyState,n({variant:a.EmptyStateVariant.large,className:"ins-c-empty-state__unavailable pf-m-redhat-font"},{children:[(0,o.jsx)(a.EmptyStateIcon,{icon:s.ExclamationCircleIcon}),(0,o.jsx)(a.Title,n({headingLevel:"h5",size:"lg"},{children:"This page is temporarily unavailable"})),(0,o.jsxs)(a.EmptyStateBody,{children:["Try refreshing the page. If the problem persists, contact your organization administrator or visit our",(0,o.jsxs)("a",n({href:"https://status.redhat.com/",target:"_blank",rel:"noopener noreferrer"},{children:[" ","status page"]}))," ","for known outages."]})]}))}},98485:(e,t,r)=>{r.d(t,{L:()=>n});var o=r(80965),a=r(92950),s=r.n(a);const n=()=>s().createElement("span",{className:"emptyValueContainer"},s().createElement(o.V_,null))},76138:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Oe});var o=r(54785),a=r(1326),s=r(17779),n=r(84717),l=r(6456),i=r(97027),c=r(92950),d=r.n(c),p=r(74806),u=r(77760),h=r(52471),m=r(55672),g=r(2985),y=r(47947),v=r(40493),b=r(37269),f=r(19727),S=r(86482),E=r(10066),x=r(1156),O=r(78898),P=r(62331),_=r(15920);function C(e={}){return e.subscription_guid?"subscription_guid":e.resource_location?"resource_location":e.service_name?"service_name":"date"}var M=r(69511),B=r(64703),T=r(14483),Z=r(5842),k=r(49382),w=r(98499),F=r(32412);const I={azureDetails:{minHeight:"100%"},content:{paddingBottom:w.ZP.value,paddingTop:w.ZP.value},paginationContainer:{marginLeft:w.ZP.value,marginRight:w.ZP.value},pagination:{backgroundColor:k.ZP.value,paddingBottom:F.ZP.value,paddingTop:F.ZP.value},tableContainer:{marginLeft:w.ZP.value,marginRight:w.ZP.value}};var D=r(50081),A=r(60021),j=r(6450),V=r(87560),$=r(45087),z=r(91778),L=r(33605),R=r(54881),q=r(48196);const X={costValue:{marginTop:w.ZP.var,marginBottom:0},costLabelUnit:{fontSize:R.ZP.value,color:L.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:k.ZP.var,padding:w.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},title:{paddingBottom:q.ZP.var}},Q=[{label:"subscription_guid",value:"subscription_guid"},{label:"service_name",value:"service_name"},{label:"resource_location",value:"resource_location"}],N=D.L.azure;class W extends d().Component{render(){const{currency:e,groupBy:t,isCurrencyFeatureEnabled:r,isExportsFeatureEnabled:a,onCurrencySelected:s,onGroupBySelected:n,providers:l,providersError:c,report:p,intl:u}=this.props,h=p&&!c&&l&&l.meta&&l.meta.count>0,m=p&&p.meta&&p.meta.total&&p.meta.total.cost&&p.meta.total.cost.total;return d().createElement("header",{style:X.header},d().createElement("div",{style:X.headerContent},d().createElement(o.Title,{headingLevel:"h1",style:X.title,size:o.TitleSizes["2xl"]},u.formatMessage(i.Z.azureDetailsTitle)),d().createElement("div",{style:X.headerContentRight},r&&d().createElement(j.F,{currency:e,onSelect:s}),a&&d().createElement(A.b,null))),d().createElement("div",{style:X.headerContent},d().createElement("div",{style:X.headerContentLeft},d().createElement(V.X,{getIdKeyForGroupBy:C,groupBy:t,isDisabled:!h,onSelected:n,options:Q,showTags:!0,tagReportPathsType:N})),Boolean(h)&&d().createElement("div",null,d().createElement(o.Title,{headingLevel:"h2",style:X.costValue,size:o.TitleSizes["4xl"]},(0,z.xG)(m?p.meta.total.cost.total.value:0,m?p.meta.total.cost.total.units:"USD")),d().createElement("div",{style:X.dateTitle},(0,$.J4)()))))}}const G=(0,x.X1)(((e,t)=>{const r=(0,n.H)(P.NT),o=P.aX.selectProviders(e,a.l.all,r),s=P.aX.selectProvidersError(e,a.l.all,r),l=P.aX.selectProvidersFetchStatus(e,a.l.all,r);return{isCurrencyFeatureEnabled:O.iJ.selectIsCurrencyFeatureEnabled(e),isExportsFeatureEnabled:O.iJ.selectIsExportsFeatureEnabled(e),providers:(0,S.BV)(o,a.l.azure),providersError:s,providersFetchStatus:l,providersQueryString:r}})),H=(0,p.ZP)((0,u.connect)(G,{})(W));var J=r(79655),U=r(91919),K=r(98485),Y=r(62423),ee=r(90569),te=r(90302),re=r(54583);const oe=l.K.azure;class ae extends d().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{groupBy:e,groupByTagKey:t,intl:r,isAllSelected:o,report:a,selectedItems:s,router:n}=this.props;if(!a)return;const l=[],c=(0,M.c)({report:a,idKey:t||e}),p=t?[{name:""},{name:r.formatMessage(i.Z.tagNames)},{name:r.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:r.formatMessage(i.Z.cost),style:te.W.costColumn},c.length&&{isSortable:!0}),{name:""}]:[{name:""},Object.assign({orderBy:e,name:r.formatMessage(i.Z.detailsResourceNames,{value:e})},c.length&&{isSortable:!0}),{name:r.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:r.formatMessage(i.Z.cost),style:te.W.costColumn},c.length&&{isSortable:!0}),{name:""}];c.map(((r,a)=>{const i=this.getTotalCost(r,a),c=r&&null!==r.label?r.label:"",p=this.getMonthOverMonthCost(r,a),u=c===`${T.Xq}${e}`||c===`${T.Xq}${t}`,h=r.id&&r.id!==r.label?d().createElement("div",{style:te.W.infoDescription},r.id):null,m=this.getActions(r,u),g=u?c:d().createElement(J.rU,{to:(0,re.Tm)({basePath:U.Hb.azureDetailsBreakdown,label:c.toString(),description:r.id,groupBy:e,id:r.id,router:n})},c);l.push({cells:[{},{value:d().createElement("div",null,g,h)},{value:d().createElement("div",null,p)},{value:d().createElement("div",null,i)},{value:d().createElement("div",null,m)}],isOpen:!1,item:r,selected:o||s&&void 0!==s.find((e=>e.id===r.id)),selectionDisabled:u})})),this.setState({columns:p,rows:l})},this.getActions=(e,t)=>{const{groupBy:r,reportQueryString:o}=this.props;return d().createElement(Y.e,{groupBy:r,isDisabled:t,item:e,reportPathsType:oe,reportQueryString:o})},this.getMonthOverMonthCost=(e,t)=>{const{intl:r}=this.props,o=(0,z.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),a=null!==e.delta_percent?(0,z.rl)(Math.abs(e.delta_percent)):0,s=!(0===a||"0.00"===a),n=null!==e.delta_percent;let l;return s&&(l="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(l+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(l+=" increase")),n?d().createElement("div",{className:"monthOverMonthOverride"},d().createElement("div",{className:l,key:`month-over-month-cost-${t}`},s?r.formatMessage(i.Z.percent,{value:a}):d().createElement(K.L,null),Boolean(s&&null!==e.delta_percent&&e.delta_value>0)&&d().createElement("span",{className:"fa fa-sort-up",style:te.W.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(s&&null!==e.delta_percent&&e.delta_value<0)&&d().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},te.W.infoArrow),te.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),d().createElement("div",{style:te.W.infoDescription,key:`month-over-month-info-${t}`},(0,$.Y)(o))):(0,$.Tf)()},this.getTotalCost=(e,t)=>{const{report:r,intl:o}=this.props,a=r&&r.meta&&r.meta.total&&r.meta.total.cost&&r.meta.total.cost.total?r.meta.total.cost.total.value:0,s=0===a?a.toFixed(2):(e.cost.total.value/a*100).toFixed(2);return d().createElement(d().Fragment,null,(0,z.xG)(e.cost.total.value,e.cost.total.units),d().createElement("div",{style:te.W.infoDescription,key:`total-cost-${t}`},o.formatMessage(i.Z.percentOfCost,{value:s})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{report:t,selectedItems:r}=this.props,o=t&&t.data?JSON.stringify(t.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")===o&&e.selectedItems===r||this.initDatum()}render(){const{isLoading:e,onSelected:t,onSort:r,selectedItems:o}=this.props,{columns:a,rows:s}=this.state;return d().createElement(ee.w,{columns:a,isLoading:e,onSelected:t,onSort:r,rows:s,selectedItems:o})}}const se=(0,p.ZP)((0,Z.E)(ae));var ne=r(36116),le=r(70539),ie=r(48949),ce=r(94282);const de=D.Q.tag,pe=D.L.azure;class ue extends d().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,r=[{name:e.formatMessage(i.Z.filterByValues,{value:"subscription_guid"}),key:"subscription_guid"},{name:e.formatMessage(i.Z.filterByValues,{value:"service_name"}),key:"service_name"},{name:e.formatMessage(i.Z.filterByValues,{value:"resource_location"}),key:"resource_location"}];return t&&t.data&&t.data.length&&r.push({name:e.formatMessage(i.Z.filterByValues,{value:T.up}),key:T.up}),r}}componentDidMount(){const{fetchTag:e,tagReportFetchStatus:t,tagQueryString:r}=this.props;this.setState({categoryOptions:this.getCategoryOptions()},(()=>{t!==x.iF.inProgress&&e(pe,de,r)}))}componentDidUpdate(e){const{fetchTag:t,query:r,tagReport:o,tagReportFetchStatus:a,tagQueryString:s}=this.props;(0,ce.X)(o,e.tagReport)?r&&!(0,ce.X)(r,e.query)&&a!==x.iF.inProgress&&t(pe,de,s):this.setState({categoryOptions:this.getCategoryOptions()},(()=>{a!==x.iF.inProgress&&t(pe,de,s)}))}render(){const{groupBy:e,isAllSelected:t,isExportDisabled:r,itemsPerPage:o,itemsTotal:a,onBulkSelected:s,onExportClicked:n,onFilterAdded:l,onFilterRemoved:i,pagination:c,query:p,selectedItems:u,tagReport:h}=this.props,{categoryOptions:m}=this.state;return d().createElement(le.k,{categoryOptions:m,groupBy:e,isAllSelected:t,isExportDisabled:r,itemsPerPage:o,itemsTotal:a,onBulkSelected:s,onExportClicked:n,onFilterAdded:l,onFilterRemoved:i,pagination:c,query:p,resourcePathsType:ne.C.azure,selectedItems:u,showBulkSelect:!0,showExport:!0,showFilter:!0,tagReport:h,tagReportPathsType:pe})}}const he=(0,x.X1)(((e,t)=>{const r=(0,s.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3}),o=ie.ux.selectTag(e,pe,de,r);return{tagReportFetchStatus:ie.ux.selectTagFetchStatus(e,pe,de,r),tagReport:o,tagQueryString:r}})),me={fetchTag:ie.xr.Xt},ge=(0,u.connect)(he,me)(ue),ye=(0,p.ZP)(ge),ve={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},exclude:{},filter_by:{},group_by:{subscription_guid:"*"},order_by:{cost:"desc"}},be=l.C.cost,fe=l.K.azure;class Se extends d().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,r=C(e.group_by),o=(0,b.qV)(e);return(0,M.c)({report:t,idKey:o||r})},this.getExportModal=e=>{const{query:t,report:r,reportQueryString:o}=this.props,{isAllSelected:a,isExportModalOpen:s,selectedItems:n}=this.state,l=C(t.group_by),i=(0,b.qV)(t),c=r&&r.meta?r.meta.count:0,p=[];return n.map((e=>{e.label!==`${T.Xq}${l}`&&e.label!==`${T.Xq}${i}`&&p.push(e)})),d().createElement(v.X,{count:a?c:p.length,isAllItems:(a||n.length===c)&&e.length>0,groupBy:i?`${T.P}${i}`:l,isOpen:s,items:p,onClose:this.handleExportModalClose,reportPathsType:fe,reportQueryString:o})},this.getPagination=(e=!1)=>{const{intl:t,query:r,router:a,report:s}=this.props,n=s&&s.meta?s.meta.count:0,l=s&&s.meta&&s.meta.filter&&s.meta.filter.limit?s.meta.filter.limit:ve.filter.limit,c=(s&&s.meta&&s.meta.filter&&s.meta.filter.offset?s.meta.filter.offset:ve.filter.offset)/l+1;return d().createElement(o.Pagination,{isCompact:!e,itemCount:n,onPerPageSelect:(e,t)=>(0,f.xh)(r,a,t),onSetPage:(e,t)=>(0,f.$9)(r,a,s,t),page:c,perPage:l,titles:{paginationTitle:t.formatMessage(i.Z.paginationTitle,{title:t.formatMessage(i.Z.azure),placement:e?"bottom":"top"})},variant:e?o.PaginationVariant.bottom:o.PaginationVariant.top,widgetId:"exports-pagination"+(e?"-bottom":"")})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:r,reportQueryString:o,router:a}=this.props,{isAllSelected:s,selectedItems:n}=this.state,l=C(e.group_by),i=(0,b.qV)(e);return d().createElement(se,{groupBy:i?`${T.P}${i}`:l,groupByTagKey:i,isAllSelected:s,isLoading:r===x.iF.inProgress,onSelected:this.handleSelected,onSort:(t,r)=>(0,f.yB)(e,a,t,r),report:t,reportQueryString:o,selectedItems:n})},this.getToolbar=e=>{const{query:t,router:r,report:o}=this.props,{isAllSelected:a,selectedItems:s}=this.state,n=C(t.group_by),l=(0,b.qV)(t),i=o&&o.meta?o.meta.count:0;return d().createElement(ye,{groupBy:l?`${T.P}${l}`:n,isAllSelected:a,isExportDisabled:0===e.length||!a&&0===s.length,itemsPerPage:e.length,itemsTotal:i,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,f.$3)(t,r,e),onFilterRemoved:e=>(0,f.q7)(t,r,e),pagination:this.getPagination(),query:t,selectedItems:s})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{query:t,router:r}=this.props,o=e,a=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{group_by:{[o]:"*"},order_by:{cost:"desc"}});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{r.navigate((0,E.Z)(a,r.location,!0),{replace:!0})}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:r,selectedItems:o}=this.state;let a=[...r?this.getComputedItems():o];e&&e.length>0&&(t?e.map((e=>a.push(e))):e.map((e=>{a=a.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:a})},this.updateReport=()=>{const{fetchReport:e,query:t,reportQueryString:r,router:o}=this.props;o.location.search?e(fe,be,r):o.navigate((0,E.Z)({exclude:t?t.exclude:void 0,filter_by:t?t.filter_by:void 0,group_by:t?t.group_by:void 0,order_by:{cost:"desc"}},o.location),{replace:!0})},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{report:r,reportError:o,reportQueryString:a,router:s}=this.props,{selectedItems:n}=this.state,l=e.reportQueryString!==a,i=!r&&!o,c=!s.location.search,d=t.selectedItems!==n;(l||i||c||d)&&this.updateReport()}render(){const{currency:e,intl:t,providers:r,providersFetchStatus:o,query:s,report:n,reportError:l,reportFetchStatus:c,router:p}=this.props,u=C(s.group_by),v=this.getComputedItems(),b=t.formatMessage(i.Z.azureDetailsTitle);if(l)return d().createElement(y.W,{title:b});if(o===x.iF.inProgress)return d().createElement(h.g,{title:b});if(o===x.iF.complete){if(r&&r.meta&&0===r.meta.count)return d().createElement(g.L,{providerType:a.l.azure,title:b});if(!(0,S.g8)(r))return d().createElement(m.J,{title:b})}return d().createElement("div",{style:I.azureDetails},d().createElement(H,{currency:e,groupBy:u,onCurrencySelected:e=>(0,f._s)(s,p,e),onGroupBySelected:this.handleGroupBySelected,report:n}),d().createElement("div",{style:I.content},this.getToolbar(v),this.getExportModal(v),c===x.iF.inProgress?d().createElement(h.g,null):d().createElement(d().Fragment,null,d().createElement("div",{style:I.tableContainer},this.getTable()),d().createElement("div",{style:I.paginationContainer},d().createElement("div",{style:I.pagination},this.getPagination(!0))))))}}const Ee=(0,x.X1)(((e,{router:t})=>{const r=(0,s.mB)(t.location.search),o=O.iJ.selectIsCurrencyFeatureEnabled(e)?(0,B.zC)():void 0,l={delta:"cost",filter:Object.assign(Object.assign({},ve.filter),r.filter),filter_by:r.filter_by||ve.filter_by,exclude:r.exclude||ve.exclude,group_by:r.group_by||ve.group_by,order_by:r.order_by||ve.order_by},i=(0,s.pm)(Object.assign(Object.assign({},l),{currency:o})),c=_.ZV.selectReport(e,fe,be,i),d=_.ZV.selectReportError(e,fe,be,i),p=_.ZV.selectReportFetchStatus(e,fe,be,i),u=(0,n.H)(P.NT),h=P.aX.selectProviders(e,a.l.all,u),m=P.aX.selectProvidersError(e,a.l.all,u),g=P.aX.selectProvidersFetchStatus(e,a.l.all,u);return{currency:o,providers:(0,S.BV)(h,a.l.azure),providersError:m,providersFetchStatus:g,query:l,report:c,reportError:d,reportFetchStatus:p,reportQueryString:i}})),xe={fetchReport:_.nx.fetchReport},Oe=(0,p.ZP)((0,Z.E)((0,u.connect)(Ee,xe)(Se)))},62423:(e,t,r)=>{r.d(t,{e:()=>b});var o=r(54785),a=r(97027),s=r(92950),n=r.n(s),l=r(74806),i=r(77760),c=r(40493),d=r(1156),p=r(58613),u=r(14483),h=r(5842);class m extends n().Component{constructor(e,t){super(e,t),this.defaultState={isDropdownOpen:!1,isExportModalOpen:!1},this.state=Object.assign({},this.defaultState),this.getExportModal=()=>{const{groupBy:e,item:t,reportPathsType:r,reportQueryString:o}=this.props,{isExportModalOpen:a}=this.state;return n().createElement(c.X,{count:1,groupBy:e,isOpen:a,items:[t],onClose:this.handleExportModalClose,reportPathsType:r,reportQueryString:o})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleOnSelect=()=>{const{isDropdownOpen:e}=this.state;this.setState({isDropdownOpen:!e})},this.handleOnToggle=e=>{this.setState({isDropdownOpen:e})},this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleOnToggle=this.handleOnToggle.bind(this),this.handleOnSelect=this.handleOnSelect.bind(this)}render(){const{groupBy:e,isDisabled:t,showPriceListOption:r,intl:s,item:{source_uuid:l},redirectToCostModel:i,router:c}=this.props,d=[n().createElement(o.DropdownItem,{component:"button",isDisabled:t,key:"export-action",onClick:this.handleExportModalOpen},s.formatMessage(a.Z.detailsActionsExport))];return r&&d.unshift(n().createElement(o.DropdownItem,{component:"button",key:"price-list-action",isDisabled:t||e.includes(u.P)||0===l.length,onClick:()=>i(l[0],c)},s.formatMessage(a.Z.detailsActionsPriceList))),n().createElement(n().Fragment,null,n().createElement(o.Dropdown,{onSelect:this.handleOnSelect,toggle:n().createElement(o.KebabToggle,{onToggle:this.handleOnToggle}),isOpen:this.state.isDropdownOpen,isPlain:!0,position:"right",dropdownItems:d}),this.getExportModal())}}const g=(0,d.X1)(((e,t)=>({}))),y={redirectToCostModel:p.F0.redirectToCostModelFromSourceUuid},v=(0,i.connect)(g,y)(m),b=(0,l.ZP)((0,h.E)(v))},90302:(e,t,r)=>{r.d(t,{W:()=>i});var o=r(49382),a=r(12289),s=r(40794),n=r(11331),l=r(43789);const i={costColumn:{textAlign:"right"},defaultLabel:{minWidth:"63px"},emptyState:{backgroundColor:o.ZP.value,display:"flex",justifyContent:"center",paddingTop:n.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:l.ZP.value},infoDescription:{color:a.ZP.value,fontSize:s.ZP.value},nameColumn:{width:"1%"}}},90569:(e,t,r)=>{r.d(t,{w:()=>g});var o=r(54785),a=r(52636),s=r(63133),n=r(79112),l=r(97027),i=r(92950),c=r.n(i),d=r(74806),p=r(42901),u=r(5842),h=r(90302);class m extends c().Component{constructor(e){super(e),this.getEmptyState=()=>{const{intl:e,router:t}=this.props,r=(0,n.mB)(t.location.search);if(r.filter_by)for(const e of Object.values(r.filter_by))if("*"!==e)return c().createElement(p.c,{filter:e,showMargin:!1});return c().createElement(o.EmptyState,null,c().createElement(o.EmptyStateIcon,{icon:a.Xk}),c().createElement(o.EmptyStateBody,null,e.formatMessage(l.Z.detailsEmptyState)))},this.getSortBy=e=>{const{columns:t,router:r}=this.props,o=t[e].orderBy,a=(0,n.mB)(r.location.search),s=a&&a.order_by&&a.order_by[o];return s?{index:e,direction:s}:{}},this.getSortParams=e=>({sortBy:this.getSortBy(e),onSort:this.handleOnSort,columnIndex:e}),this.handleOnSelect=(e,t,r)=>{const{onSelected:o,rows:a}=this.props;let s,n=[];-1===r?s=a.map((e=>(e.selected=t,e))):(s=[...a],s[r].selected=t,n=[s[r].item]),this.setState({rows:a},(()=>{o&&o(n,t)}))},this.handleOnSort=(e,t,r)=>{const{columns:o,onSort:a}=this.props;a&&a(o[t].orderBy,r===s.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}render(){const{columns:e,intl:t,isLoading:r,rows:a}=this.props;return c().createElement(c().Fragment,null,c().createElement(s.TableComposable,{"aria-label":t.formatMessage(l.Z.dataTableAriaLabel),gridBreakPoint:"grid-2xl"},c().createElement(s.Thead,null,c().createElement(s.Tr,null,e.map(((e,t)=>c().createElement(s.Th,{key:`col-${t}-${e.value}`,modifier:"nowrap",sort:e.isSortable?this.getSortParams(t):void 0,style:e.style},e.name))))),c().createElement(s.Tbody,null,r?c().createElement(s.Tr,null,c().createElement(s.Td,{colSpan:100},c().createElement(o.Bullseye,null,c().createElement("div",{style:{textAlign:"center"}},c().createElement(o.Spinner,{size:"xl"}))))):a.map(((t,r)=>c().createElement(s.Tr,{key:`row-${r}`},t.cells.map(((o,a)=>0===a?c().createElement(s.Td,{dataLabel:e[a].name,key:`cell-${a}-${r}`,modifier:"nowrap",select:{disable:t.selectionDisabled,isSelected:t.selected,onSelect:(e,t)=>this.handleOnSelect(e,t,r),rowIndex:r}}):c().createElement(s.Td,{dataLabel:e[a].name,key:`cell-${r}-${a}`,modifier:"nowrap",isActionCell:a===t.cells.length-1},o.value)))))))),Boolean(0===a.length)&&c().createElement("div",{style:h.W.emptyState},this.getEmptyState()))}}const g=(0,d.ZP)((0,u.E)(m))},54583:(e,t,r)=>{r.d(t,{Tm:()=>s,Zc:()=>n,yW:()=>l});var o=r(39333),a=r(14483);const s=({basePath:e,description:t,groupBy:r,id:s,isPlatformCosts:n,label:l,router:i})=>{const c=(0,o.mB)(i.location.search),d=Object.assign(Object.assign(Object.assign(Object.assign({},c),t&&t!==l&&{[a.eG]:t}),n&&{[a.yG]:l}),{group_by:{[r]:n?"*":s}});return n&&(d.filter||(d.filter={}),d.filter.category=a.rx),`${e}?${(0,o.IV)(d)}`},n=({basePath:e,description:t,groupBy:r,groupByOrg:s,id:n,router:l,title:i,type:c})=>{const d=(0,o.mB)(l.location.search),p=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),t&&t!==i&&{[a.eG]:t}),i&&{[a.yG]:i}),s&&{[a.dV]:s}),{group_by:{[r]:n}});return"account"===c?(p.filter||(p.filter={}),p.filter.account=n,p.group_by={[a.dV]:s}):"organizational_unit"===c&&(p.group_by={[a.dV]:n}),`${e}?${(0,o.IV)(p)}`},l=e=>e&&e.filter&&e.filter.category===a.rx}}]);