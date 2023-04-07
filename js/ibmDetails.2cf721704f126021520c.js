"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[3609],{22157:(e,t,r)=>{r.r(t),r.d(t,{default:()=>xe});var o=r(90154),s=r(1326),a=r(46672),l=r(84717),n=r(6456),i=r(97027),c=r(92950),d=r.n(c),p=r(74806),u=r(77760),m=r(52471),g=r(55672),h=r(2985),y=r(47947),v=r(40493),b=r(37269),S=r(19727),f=r(86482),E=r(10066),P=r(1156),C=r(62331),x=r(15920);function B(e={}){return e.account?"account":e.project?"project":e.region?"region":e.service?"service":"date"}var M=r(69511),O=r(15829),_=r(14483),Z=r(5842),T=r(50081),k=r(26744),F=r(6450),D=r(87560),I=r(78898),R=r(45087),A=r(91778),j=r(49382),q=r(33605),$=r(54881),w=r(98499),V=r(48196);const X={costValue:{marginTop:w.ZP.var,marginBottom:0},costLabelUnit:{fontSize:$.ZP.value,color:q.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:j.ZP.var,padding:w.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},title:{paddingBottom:V.ZP.var}},L=[{label:"account",value:"account"},{label:"project",value:"project"},{label:"service",value:"service"},{label:"region",value:"region"}],Q=T.L.ibm;class N extends d().Component{render(){const{currency:e,groupBy:t,isExportsFeatureEnabled:r,onCurrencySelected:s,onGroupBySelected:a,providers:l,providersError:n,report:c,intl:p}=this.props,u=c&&!n&&l&&l.meta&&l.meta.count>0,m=c&&c.meta&&c.meta.total&&c.meta.total.cost&&c.meta.total.cost.total;return d().createElement("header",{style:X.header},d().createElement("div",{style:X.headerContent},d().createElement(o.Title,{headingLevel:"h1",style:X.title,size:o.TitleSizes["2xl"]},p.formatMessage(i.Z.ibmDetailsTitle)),d().createElement("div",{style:X.headerContentRight},d().createElement(F.F,{currency:e,onSelect:s}),r&&d().createElement(k.bj,null))),d().createElement("div",{style:X.headerContent},d().createElement("div",{style:X.headerContentLeft},d().createElement(D.X,{getIdKeyForGroupBy:B,groupBy:t,isDisabled:!u,onSelected:a,options:L,showTags:!0,tagReportPathsType:Q})),Boolean(u)&&d().createElement("div",null,d().createElement(o.Title,{headingLevel:"h2",style:X.costValue,size:o.TitleSizes["4xl"]},(0,A.xG)(m?c.meta.total.cost.total.value:0,m?c.meta.total.cost.total.units:"USD")),d().createElement("div",{style:X.dateTitle},(0,R.J4)()))))}}const W=(0,P.X1)(((e,t)=>{const r=(0,l.H)(C.NT),o=C.aX.selectProviders(e,s.l.all,r),a=C.aX.selectProvidersError(e,s.l.all,r),n=C.aX.selectProvidersFetchStatus(e,s.l.all,r);return{isExportsFeatureEnabled:I.iJ.selectIsExportsFeatureEnabled(e),providers:(0,f.BV)(o,s.l.ibm),providersError:a,providersFetchStatus:n,providersQueryString:r}})),G=(0,p.ZP)((0,u.connect)(W,{})(N));var J=r(39836),K=r(91919),z=r(98485),U=r(62423),H=r(90569),Y=r(90302),ee=r(54583),te=r(68025);const re=n.K.ibm;class oe extends d().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{groupBy:e,groupByTagKey:t,intl:r,isAllSelected:o,report:s,selectedItems:a,router:l}=this.props;if(!s)return;const n=[],c=(0,M.c)({report:s,idKey:t||e}),p=t?[{name:""},{name:r.formatMessage(i.Z.tagNames)},{name:r.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:r.formatMessage(i.Z.cost),style:Y.W.costColumn},c.length&&{isSortable:!0}),{name:""}]:[{name:""},Object.assign({orderBy:e,name:r.formatMessage(i.Z.detailsResourceNames,{value:e})},c.length&&{isSortable:!0}),{name:r.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:r.formatMessage(i.Z.cost),style:Y.W.costColumn},c.length&&{isSortable:!0}),{name:""}];c.map(((r,s)=>{const i=this.getTotalCost(r,s),c=r&&null!==r.label?r.label:"",p=this.getMonthOverMonthCost(r,s),u=c===`${_.Xq}${e}`||c===`${_.Xq}${t}`,m=r.id&&r.id!==r.label?d().createElement("div",{style:Y.W.infoDescription},r.id):null,g=this.getActions(r,u),h=u?c:d().createElement(J.Link,{to:(0,ee.T)({basePath:(0,te.dI)(K._.ibmDetailsBreakdown.path),description:r.id,groupBy:e,id:r.id,router:l,title:c.toString()})},c);n.push({cells:[{},{value:d().createElement("div",null,h,m)},{value:d().createElement("div",null,p)},{value:d().createElement("div",null,i),style:Y.W.managedColumn},{value:d().createElement("div",null,g)}],isOpen:!1,item:r,selected:o||a&&void 0!==a.find((e=>e.id===r.id)),selectionDisabled:u})})),this.setState({columns:p,rows:n})},this.getActions=(e,t)=>{const{groupBy:r,reportQueryString:o}=this.props;return d().createElement(U.e,{groupBy:r,isDisabled:t,item:e,reportPathsType:re,reportQueryString:o})},this.getMonthOverMonthCost=(e,t)=>{const{intl:r}=this.props,o=(0,A.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),s=null!==e.delta_percent?(0,A.rl)(Math.abs(e.delta_percent)):0,a=!(0===s||"0.00"===s),l=null!==e.delta_percent;let n;return a&&(n="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(n+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(n+=" increase")),l?d().createElement("div",{className:"monthOverMonthOverride"},d().createElement("div",{className:n,key:`month-over-month-cost-${t}`},a?r.formatMessage(i.Z.percent,{value:s}):d().createElement(z.L,null),Boolean(a&&null!==e.delta_percent&&e.delta_value>0)&&d().createElement("span",{className:"fa fa-sort-up",style:Y.W.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(a&&null!==e.delta_percent&&e.delta_value<0)&&d().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},Y.W.infoArrow),Y.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),d().createElement("div",{style:Y.W.infoDescription,key:`month-over-month-info-${t}`},(0,R.Y)(o))):(0,R.Tf)()},this.getTotalCost=(e,t)=>{const{report:r,intl:o}=this.props,s=r&&r.meta&&r.meta.total&&r.meta.total.cost&&r.meta.total.cost.total?r.meta.total.cost.total.value:0,a=0===s?s.toFixed(2):(e.cost.total.value/s*100).toFixed(2);return d().createElement(d().Fragment,null,(0,A.xG)(e.cost.total.value,e.cost.total.units),d().createElement("div",{style:Y.W.infoDescription,key:`total-cost-${t}`},o.formatMessage(i.Z.percentOfCost,{value:a})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{report:t,selectedItems:r}=this.props,o=t&&t.data?JSON.stringify(t.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")===o&&e.selectedItems===r||this.initDatum()}render(){const{isLoading:e,onSelected:t,onSort:r,selectedItems:o}=this.props,{columns:s,rows:a}=this.state;return d().createElement(H.w,{columns:s,isLoading:e,onSelected:t,onSort:r,rows:a,selectedItems:o})}}const se=(0,p.ZP)((0,Z.E)(oe));var ae=r(36116),le=r(70539),ne=r(48949),ie=r(94282);const ce=T.Q.tag,de=T.L.ibm;class pe extends d().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,r=[{name:e.formatMessage(i.Z.filterByValues,{value:"account"}),key:"account"},{name:e.formatMessage(i.Z.filterByValues,{value:"project"}),key:"project"},{name:e.formatMessage(i.Z.filterByValues,{value:"service"}),key:"service"},{name:e.formatMessage(i.Z.filterByValues,{value:"region"}),key:"region"}];return t&&t.data&&t.data.length&&r.push({name:e.formatMessage(i.Z.filterByValues,{value:_.up}),key:_.up}),r}}componentDidMount(){const{fetchTag:e,tagReportFetchStatus:t,tagQueryString:r}=this.props;this.setState({categoryOptions:this.getCategoryOptions()},(()=>{t!==P.iF.inProgress&&e(de,ce,r)}))}componentDidUpdate(e){const{fetchTag:t,query:r,tagReport:o,tagReportFetchStatus:s,tagQueryString:a}=this.props;(0,ie.X)(o,e.tagReport)?r&&!(0,ie.X)(r,e.query)&&s!==P.iF.inProgress&&t(de,ce,a):this.setState({categoryOptions:this.getCategoryOptions()},(()=>{s!==P.iF.inProgress&&t(de,ce,a)}))}render(){const{groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isDisabled:o,isExportDisabled:s,itemsPerPage:a,itemsTotal:l,onBulkSelected:n,onExportClicked:i,onFilterAdded:c,onFilterRemoved:p,pagination:u,query:m,selectedItems:g,tagReport:h}=this.props,{categoryOptions:y}=this.state;return d().createElement(le.k,{categoryOptions:y,groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isDisabled:o,isExportDisabled:s,itemsPerPage:a,itemsTotal:l,onBulkSelected:n,onExportClicked:i,onFilterAdded:c,onFilterRemoved:p,pagination:u,query:m,resourcePathsType:ae.C.ibm,selectedItems:g,showBulkSelect:!0,showExcludes:!0,showExport:!0,showFilter:!0,tagReport:h,tagReportPathsType:de})}}const ue=(0,P.X1)(((e,t)=>{const r=(0,a.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3});return{tagReport:ne.ux.selectTag(e,de,ce,r),tagReportFetchStatus:ne.ux.selectTagFetchStatus(e,de,ce,r),tagQueryString:r}})),me={fetchTag:ne.xr.Xt},ge=(0,u.connect)(ue,me)(pe),he=(0,p.ZP)(ge);var ye=r(32412);const ve={gcpDetails:{minHeight:"100%"},content:{paddingBottom:w.ZP.value,paddingTop:w.ZP.value},paginationContainer:{marginLeft:w.ZP.value,marginRight:w.ZP.value},pagination:{backgroundColor:j.ZP.value,paddingBottom:ye.ZP.value,paddingTop:ye.ZP.value},tableContainer:{marginLeft:w.ZP.value,marginRight:w.ZP.value},toolbarContainer:{marginLeft:w.ZP.value,marginRight:w.ZP.value}},be={filter:{limit:10,offset:0},exclude:{},filter_by:{},group_by:{account:"*"},order_by:{cost:"desc"}},Se=n.C.cost,fe=n.K.ibm;class Ee extends d().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,r=B(e.group_by),o=(0,b.qV)(e);return(0,M.c)({report:t,idKey:o||r})},this.getExportModal=e=>{const{query:t,report:r,reportQueryString:o}=this.props,{isAllSelected:s,isExportModalOpen:a,selectedItems:l}=this.state,n=B(t.group_by),i=(0,b.qV)(t),c=r&&r.meta?r.meta.count:0,p=[];return l.map((e=>{e.label!==`${_.Xq}${n}`&&e.label!==`${_.Xq}${i}`&&p.push(e)})),d().createElement(v.X,{count:s?c:p.length,isAllItems:(s||l.length===c)&&e.length>0,groupBy:i?`${_.P}${i}`:n,isOpen:a,items:p,onClose:this.handleExportModalClose,reportPathsType:fe,reportQueryString:o})},this.getPagination=(e=!1,t=!1)=>{const{intl:r,query:s,router:a,report:l}=this.props,n=l&&l.meta?l.meta.count:0,c=l&&l.meta&&l.meta.filter&&l.meta.filter.limit?l.meta.filter.limit:be.filter.limit,p=l&&l.meta&&l.meta.filter&&l.meta.filter.offset?l.meta.filter.offset:be.filter.offset,u=Math.trunc(p/c+1);return d().createElement(o.Pagination,{isCompact:!t,isDisabled:e,itemCount:n,onPerPageSelect:(e,t)=>(0,S.xh)(s,a,t),onSetPage:(e,t)=>(0,S.$9)(s,a,l,t),page:u,perPage:c,titles:{paginationTitle:r.formatMessage(i.Z.paginationTitle,{title:r.formatMessage(i.Z.ibm),placement:t?"bottom":"top"})},variant:t?o.PaginationVariant.bottom:o.PaginationVariant.top,widgetId:"exports-pagination"+(t?"-bottom":"")})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:r,reportQueryString:o,router:s}=this.props,{isAllSelected:a,selectedItems:l}=this.state,n=B(e.group_by),i=(0,b.qV)(e);return d().createElement(se,{groupBy:i?`${_.P}${i}`:n,groupByTagKey:i,isAllSelected:a,isLoading:r===P.iF.inProgress,onSelected:this.handleSelected,onSort:(t,r)=>(0,S.yB)(e,s,t,r),report:t,reportQueryString:o,selectedItems:l})},this.getToolbar=e=>{const{query:t,router:r,report:o}=this.props,{isAllSelected:s,selectedItems:a}=this.state,l=B(t.group_by),n=(0,b.qV)(t),i=0===e.length,c=o&&o.meta?o.meta.count:0;return d().createElement(he,{groupBy:n?`${_.P}${n}`:l,isAllSelected:s,isDisabled:i,isExportDisabled:i||!s&&0===a.length,itemsPerPage:e.length,itemsTotal:c,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,S.$3)(t,r,e),onFilterRemoved:e=>(0,S.q7)(t,r,e),pagination:this.getPagination(i),query:t,selectedItems:a})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{query:t,router:r}=this.props,o=e,s=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{group_by:{[o]:"*"},order_by:{cost:"desc"}});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{r.navigate((0,E.Z)(s,r.location,!0),{replace:!0})}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:r,selectedItems:o}=this.state;let s=[...r?this.getComputedItems():o];e&&e.length>0&&(t?e.map((e=>s.push(e))):e.map((e=>{s=s.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:s})},this.updateReport=()=>{const{fetchReport:e,reportQueryString:t}=this.props;e(fe,Se,t)},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{report:r,reportError:o,reportQueryString:s,router:a}=this.props,{selectedItems:l}=this.state,n=e.reportQueryString!==s,i=!r&&!o,c=!a.location.search,d=t.selectedItems!==l;(n||i||c||d)&&this.updateReport()}render(){const{currency:e,intl:t,providers:r,providersFetchStatus:o,query:a,report:l,reportError:n,reportFetchStatus:c,router:p}=this.props,u=this.getComputedItems(),v=B(a.group_by),b=0===u.length,E=t.formatMessage(i.Z.ibmDetailsTitle);if(n)return d().createElement(y.W,{title:E});if(o===P.iF.inProgress)return d().createElement(m.g,{title:E});if(o===P.iF.complete){if(r&&r.meta&&0===r.meta.count)return d().createElement(h.L,{providerType:s.l.ibm,title:E});if(!(0,f.g8)(r))return d().createElement(g.J,{title:E})}return d().createElement("div",{style:ve.ibmDetails},d().createElement(G,{currency:e,groupBy:v,onCurrencySelected:e=>(0,S._s)(a,p,e),onGroupBySelected:this.handleGroupBySelected,report:l}),d().createElement("div",{style:ve.content},d().createElement("div",{style:ve.toolbarContainer},this.getToolbar(u)),this.getExportModal(u),c===P.iF.inProgress?d().createElement(m.g,null):d().createElement(d().Fragment,null,d().createElement("div",{style:ve.tableContainer},this.getTable()),d().createElement("div",{style:ve.paginationContainer},d().createElement("div",{style:ve.pagination},this.getPagination(b,!0))))))}}const Pe=(0,P.X1)(((e,{router:t})=>{const r=(0,a.mB)(t.location.search),o=(0,O.zC)(),n={filter:Object.assign(Object.assign({},be.filter),r.filter),filter_by:r.filter_by||be.filter_by,exclude:r.exclude||be.exclude,group_by:r.group_by||be.group_by,order_by:r.order_by||be.order_by},i=(0,a.pm)(Object.assign(Object.assign({},n),{filter:Object.assign(Object.assign({},n.filter),{resolution:"monthly",time_scope_units:"month",time_scope_value:-1}),currency:o})),c=x.ZV.selectReport(e,fe,Se,i),d=x.ZV.selectReportError(e,fe,Se,i),p=x.ZV.selectReportFetchStatus(e,fe,Se,i),u=(0,l.H)(C.NT),m=C.aX.selectProviders(e,s.l.all,u),g=C.aX.selectProvidersError(e,s.l.all,u),h=C.aX.selectProvidersFetchStatus(e,s.l.all,u);return{currency:o,providers:(0,f.BV)(m,s.l.ibm),providersError:g,providersFetchStatus:h,query:n,report:c,reportError:d,reportFetchStatus:p,reportQueryString:i}})),Ce={fetchReport:x.nx.fetchReport},xe=(0,p.ZP)((0,Z.E)((0,u.connect)(Pe,Ce)(Ee)))}}]);
//# sourceMappingURL=../sourcemaps/ibmDetails.14f60c57e3ff70bbbd76b82065ba6f61.js.map