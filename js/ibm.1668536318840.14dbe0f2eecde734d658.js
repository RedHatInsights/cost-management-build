"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[318],{67677:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var s=r(1326),o=r(46672),l=r(84717),a=r(39333),i=r(6456),n=r(50081),c=r(97027),d=r(92950),p=r.n(d),u=r(74806),m=r(78741),h=r(91919),g=r(64727),y=r(37269),v=r(86482),b=r(1156),f=r(78898),S=r(62331),E=r(68091),P=r(64703),C=r(67709),_=r(6181);const x=(0,b.X1)(((e,t)=>({selectWidgets:_.Gl.selectWidgets(e),widgets:_.Gl.selectCurrentWidgets(e)}))),B=(0,u.ZP)((0,m.connect)(x,{})(C.X));var O=r(87935),Z=r(36403);const T=(0,b.X1)(((e,t)=>({selectWidgets:Z.D.selectWidgets(e),widgets:Z.D.selectCurrentWidgets(e)}))),F=(0,u.ZP)((0,m.connect)(T,{})(O.f)),M=h.Hb.ibmDetails,q=i.C.cost,k=i.K.ibm,R=(0,b.X1)(((e,t)=>{const r=(0,o.mB)(location.search),i=(0,y.VL)(r),d=(0,y.pe)(r),u=f.iJ.selectIsCurrencyFeatureEnabled(e)?(0,P.zC)():void 0,m={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign({},r&&r.filter_by&&r.filter_by),i&&{[i]:void 0}),exclude:Object.assign({},r&&r.exclude&&r.exclude),group_by:Object.assign({},i&&{[i]:d})},h=(0,o.pm)(Object.assign(Object.assign({},m),{currency:u})),g=E.ZV.selectReport(e,k,q,h),b=E.ZV.selectReportError(e,k,q,h),C=E.ZV.selectReportFetchStatus(e,k,q,h),_=(0,l.H)(S.NT),x=S.aX.selectProviders(e,s.l.all,_),O=S.aX.selectProvidersError(e,s.l.all,_),Z=S.aX.selectProvidersFetchStatus(e,s.l.all,_);return{costOverviewComponent:p().createElement(B,{currency:u,groupBy:i,query:r,report:g}),currency:u,description:r[a.eG],detailsURL:M,emptyStateTitle:t.intl.formatMessage(c.Z.ibmDetailsTitle),groupBy:i,groupByValue:d,historicalDataComponent:p().createElement(F,{currency:u}),providers:(0,v.BV)(x,s.l.ibm),providersError:O,providersFetchStatus:Z,providerType:s.l.ibm,query:r,queryString:h,report:g,reportError:b,reportFetchStatus:C,reportType:q,reportPathsType:k,tagReportPathsType:n.L.ibm,title:r[a.yG]?r[a.yG]:d}})),I={fetchReport:E.nx.fetchReport},D=(0,u.ZP)((0,m.connect)(R,I)(g.Z))},22157:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Pe});var s=r(69726),o=r(1326),l=r(46672),a=r(84717),i=r(39333),n=r(6456),c=r(97027),d=r(92950),p=r.n(d),u=r(74806),m=r(78741),h=r(52471),g=r(55672),y=r(2985),v=r(47947),b=r(40493),f=r(37269),S=r(89662),E=r(86482),P=r(1156),C=r(78898),_=r(62331),x=r(68091);function B(e={}){return e.account?"account":e.project?"project":e.region?"region":e.service?"service":"date"}var O=r(69511),Z=r(64703),T=r(50081),F=r(60021),M=r(6450),q=r(87560),k=r(45087),R=r(91778),I=r(49382),D=r(33605),j=r(54881),A=r(98499),V=r(48196);const w={costValue:{marginTop:A.ZP.var,marginBottom:0},costLabelUnit:{fontSize:j.ZP.value,color:D.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:I.ZP.var,padding:A.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},title:{paddingBottom:V.ZP.var}},X={delta:"cost",filter:{time_scope_units:"month",time_scope_value:-1,resolution:"monthly"}},$=[{label:"account",value:"account"},{label:"project",value:"project"},{label:"service",value:"service"},{label:"region",value:"region"}],L=T.L.ibm;class G extends p().Component{render(){const{currency:e,groupBy:t,isCurrencyFeatureEnabled:r,isExportsFeatureEnabled:o,onCurrencySelected:l,onGroupBySelected:a,providers:i,providersError:n,report:d,intl:u}=this.props,m=d&&!n&&i&&i.meta&&i.meta.count>0,h=d&&d.meta&&d.meta.total&&d.meta.total.cost&&d.meta.total.cost.total;return p().createElement("header",{style:w.header},p().createElement("div",{style:w.headerContent},p().createElement(s.Title,{headingLevel:"h1",style:w.title,size:s.TitleSizes["2xl"]},u.formatMessage(c.Z.ibmDetailsTitle)),p().createElement("div",{style:w.headerContentRight},r&&p().createElement(M.F,{currency:e,onSelect:l}),o&&p().createElement(F.b,null))),p().createElement("div",{style:w.headerContent},p().createElement("div",{style:w.headerContentLeft},p().createElement(q.X,{getIdKeyForGroupBy:B,groupBy:t,isDisabled:!m,onSelected:a,options:$,showTags:!0,tagReportPathsType:L})),Boolean(m)&&p().createElement("div",null,p().createElement(s.Title,{headingLevel:"h2",style:w.costValue,size:s.TitleSizes["4xl"]},(0,R.xG)(h?d.meta.total.cost.total.value:0,h?d.meta.total.cost.total.units:"USD")),p().createElement("div",{style:w.dateTitle},(0,k.J4)()))))}}const W=(0,P.X1)(((e,t)=>{const r=(0,l.pm)(X),s=(0,a.H)(_.NT),i=_.aX.selectProviders(e,o.l.all,s),n=_.aX.selectProvidersError(e,o.l.all,s),c=_.aX.selectProvidersFetchStatus(e,o.l.all,s);return{isCurrencyFeatureEnabled:C.iJ.selectIsCurrencyFeatureEnabled(e),isExportsFeatureEnabled:C.iJ.selectIsExportsFeatureEnabled(e),providers:(0,E.BV)(i,o.l.ibm),providersError:n,providersFetchStatus:c,queryString:r}})),N=(0,u.ZP)((0,m.connect)(W,{})(G));var J=r(73727),K=r(91919),z=r(98485),H=r(62423),U=r(90569),Q=r(90302),Y=r(54583);const ee=n.K.ibm;class te extends p().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{isAllSelected:e,query:t,report:r,selectedItems:s,intl:o}=this.props;if(!t||!r)return;const l=B(t.group_by),a=this.getGroupByTagKey(),n=[],d=(0,O.c)({report:r,idKey:a||l}),u=a?[{name:""},{name:o.formatMessage(c.Z.tagNames)},{name:o.formatMessage(c.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:o.formatMessage(c.Z.cost),style:Q.W.costColumn},d.length&&{isSortable:!0}),{name:""}]:[{name:""},Object.assign({orderBy:l,name:o.formatMessage(c.Z.detailsResourceNames,{value:l})},d.length&&{isSortable:!0}),{name:o.formatMessage(c.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:o.formatMessage(c.Z.cost),style:Q.W.costColumn},d.length&&{isSortable:!0}),{name:""}];d.map(((r,o)=>{const c=r&&null!==r.label?r.label:"",d=this.getMonthOverMonthCost(r,o),u=this.getTotalCost(r,o),m=this.getActions(r);let h=p().createElement(J.rU,{to:(0,Y.T)({basePath:K.Hb.ibmDetailsBreakdown,label:c.toString(),description:r.id,groupBy:a?`${i.P}${a}`:l,query:t})},c);const g=!(c===`no-${l}`||c===`no-${a}`);g||(h=c);const y=r.id&&r.id!==r.label?p().createElement("div",{style:Q.W.infoDescription},r.id):null;n.push({cells:[{},{value:p().createElement("div",null,h,y)},{value:p().createElement("div",null,d)},{value:p().createElement("div",null,u)},{value:p().createElement("div",null,m)}],isOpen:!1,item:r,selected:e||s&&void 0!==s.find((e=>e.id===r.id)),selectionDisabled:!g})})),this.setState({columns:u,rows:n})},this.getActions=e=>{const{groupBy:t,query:r}=this.props;return p().createElement(H.e,{groupBy:t,item:e,query:r,reportPathsType:ee})},this.getGroupByTagKey=()=>{const{query:e}=this.props;let t;for(const r of Object.keys(e.group_by)){const e=r.indexOf(i.P);if(-1!==e){t=r.substring(e+i.P.length);break}}return t},this.getMonthOverMonthCost=(e,t)=>{const{intl:r}=this.props,s=(0,R.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),o=null!==e.delta_percent?(0,R.rl)(Math.abs(e.delta_percent)):0,l=!(0===o||"0.00"===o),a=null!==e.delta_percent;let i;return l&&(i="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(i+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(i+=" increase")),a?p().createElement("div",{className:"monthOverMonthOverride"},p().createElement("div",{className:i,key:`month-over-month-cost-${t}`},l?r.formatMessage(c.Z.percent,{value:o}):p().createElement(z.L,null),Boolean(l&&null!==e.delta_percent&&e.delta_value>0)&&p().createElement("span",{className:"fa fa-sort-up",style:Q.W.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(l&&null!==e.delta_percent&&e.delta_value<0)&&p().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},Q.W.infoArrow),Q.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),p().createElement("div",{style:Q.W.infoDescription,key:`month-over-month-info-${t}`},(0,k.Y)(s))):(0,k.Tf)()},this.getTotalCost=(e,t)=>{const{report:r,intl:s}=this.props,o=r&&r.meta&&r.meta.total&&r.meta.total.cost&&r.meta.total.cost.total?r.meta.total.cost.total.value:0,l=0===o?o.toFixed(2):(e.cost.total.value/o*100).toFixed(2);return p().createElement(p().Fragment,null,(0,R.xG)(e.cost.total.value,e.cost.total.units),p().createElement("div",{style:Q.W.infoDescription,key:`total-cost-${t}`},s.formatMessage(c.Z.percentOfCost,{value:l})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{query:t,report:r,selectedItems:s}=this.props,o=r&&r.data?JSON.stringify(r.data):"",a=e.report&&e.report.data?JSON.stringify(e.report.data):"";(0,l.pm)(e.query)===(0,l.pm)(t)&&a===o&&e.selectedItems===s||this.initDatum()}render(){const{isLoading:e,onSelected:t,onSort:r,query:s,selectedItems:o}=this.props,{columns:l,rows:a}=this.state;return p().createElement(U.w,{columns:l,isLoading:e,onSelected:t,onSort:r,query:s,rows:a,selectedItems:o})}}const re=(0,u.ZP)(te);var se=r(36116),oe=r(24318),le=r(81278),ae=r(94282);const ie=T.Q.tag,ne=T.L.ibm;class ce extends p().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,r=[{name:e.formatMessage(c.Z.filterByValues,{value:"account"}),key:"account"},{name:e.formatMessage(c.Z.filterByValues,{value:"project"}),key:"project"},{name:e.formatMessage(c.Z.filterByValues,{value:"service"}),key:"service"},{name:e.formatMessage(c.Z.filterByValues,{value:"region"}),key:"region"}];return t&&t.data&&t.data.length&&r.push({name:e.formatMessage(c.Z.filterByValues,{value:i.up}),key:i.up}),r}}componentDidMount(){const{fetchTag:e,queryString:t,tagReportFetchStatus:r}=this.props;this.setState({categoryOptions:this.getCategoryOptions()},(()=>{r!==P.iF.inProgress&&e(ne,ie,t)}))}componentDidUpdate(e){const{fetchTag:t,query:r,queryString:s,tagReport:o,tagReportFetchStatus:l}=this.props;(0,ae.X)(o,e.tagReport)?r&&!(0,ae.X)(r,e.query)&&l!==P.iF.inProgress&&t(ne,ie,s):this.setState({categoryOptions:this.getCategoryOptions()},(()=>{l!==P.iF.inProgress&&t(ne,ie,s)}))}render(){const{groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isExportDisabled:s,itemsPerPage:o,itemsTotal:l,onBulkSelected:a,onExportClicked:i,onFilterAdded:n,onFilterRemoved:c,pagination:d,query:u,selectedItems:m,tagReport:h}=this.props,{categoryOptions:g}=this.state;return p().createElement(oe.k,{categoryOptions:g,groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isExportDisabled:s,itemsPerPage:o,itemsTotal:l,onBulkSelected:a,onExportClicked:i,onFilterAdded:n,onFilterRemoved:c,pagination:d,query:u,resourcePathsType:se.C.ibm,selectedItems:m,showBulkSelect:!0,showExport:!0,showFilter:!0,tagReport:h,tagReportPathsType:ne})}}const de=(0,P.X1)(((e,t)=>{const r=(0,l.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3});return{queryString:r,tagReport:le.ux.selectTag(e,ne,ie,r),tagReportFetchStatus:le.ux.selectTagFetchStatus(e,ne,ie,r)}})),pe={fetchTag:le.xr.Xt},ue=(0,m.connect)(de,pe)(ce),me=(0,u.ZP)(ue);var he=r(32412);const ge={gcpDetails:{minHeight:"100%"},content:{paddingBottom:A.ZP.value,paddingTop:A.ZP.value},paginationContainer:{marginLeft:A.ZP.value,marginRight:A.ZP.value},pagination:{backgroundColor:I.ZP.value,paddingBottom:he.ZP.value,paddingTop:he.ZP.value},tableContainer:{marginLeft:A.ZP.value,marginRight:A.ZP.value}},ye={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},exclude:{},filter_by:{},group_by:{account:"*"},order_by:{cost:"desc"}},ve=n.C.cost,be=n.K.ibm;class fe extends p().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,r=B(e.group_by),s=(0,f.qV)(e);return(0,O.c)({report:t,idKey:s||r})},this.getExportModal=e=>{const{isAllSelected:t,isExportModalOpen:r,selectedItems:s}=this.state,{query:o,report:l}=this.props,a=B(o.group_by),n=(0,f.qV)(o),c=l&&l.meta?l.meta.count:0,d=[];return s.map((e=>{e.label!==`no-${a}`&&e.label!==`no-${n}`&&d.push(e)})),p().createElement(b.X,{count:t?c:d.length,isAllItems:(t||s.length===c)&&e.length>0,groupBy:n?`${i.P}${n}`:a,isOpen:r,items:d,onClose:this.handleExportModalClose,query:o,reportPathsType:be})},this.getPagination=(e=!1)=>{const{history:t,intl:r,query:o,report:l}=this.props,a=l&&l.meta?l.meta.count:0,i=l&&l.meta&&l.meta.filter&&l.meta.filter.limit?l.meta.filter.limit:ye.filter.limit,n=(l&&l.meta&&l.meta.filter&&l.meta.filter.offset?l.meta.filter.offset:ye.filter.offset)/i+1;return p().createElement(s.Pagination,{isCompact:!e,itemCount:a,onPerPageSelect:(e,r)=>(0,S.xh)(t,o,r),onSetPage:(e,r)=>(0,S.$9)(t,o,l,r),page:n,perPage:i,titles:{paginationTitle:r.formatMessage(c.Z.paginationTitle,{title:r.formatMessage(c.Z.ibm),placement:e?"bottom":"top"})},variant:e?s.PaginationVariant.bottom:s.PaginationVariant.top,widgetId:"exports-pagination"+(e?"-bottom":"")})},this.getTable=()=>{const{history:e,query:t,report:r,reportFetchStatus:s}=this.props,{isAllSelected:o,selectedItems:l}=this.state,a=B(t.group_by),n=(0,f.qV)(t);return p().createElement(re,{groupBy:n?`${i.P}${n}`:a,isAllSelected:o,isLoading:s===P.iF.inProgress,onSelected:this.handleSelected,onSort:(r,s)=>(0,S.yB)(e,t,r,s),query:t,report:r,selectedItems:l})},this.getToolbar=e=>{const{history:t,query:r,report:s}=this.props,{isAllSelected:o,selectedItems:l}=this.state,a=B(r.group_by),n=(0,f.qV)(r),c=s&&s.meta?s.meta.count:0;return p().createElement(me,{groupBy:n?`${i.P}${n}`:a,isAllSelected:o,isExportDisabled:0===e.length||!o&&0===l.length,itemsPerPage:e.length,itemsTotal:c,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,S.$3)(t,r,e),onFilterRemoved:e=>(0,S.q7)(t,r,e),pagination:this.getPagination(),query:r,selectedItems:l})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{history:t,query:r}=this.props,s=e,o=Object.assign(Object.assign({},JSON.parse(JSON.stringify(r))),{group_by:{[s]:"*"},order_by:{cost:"desc"}});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{t.replace((0,S.ZE)(t,o,!0))}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:r,selectedItems:s}=this.state;let o=[...r?this.getComputedItems():s];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.updateReport=()=>{const{fetchReport:e,history:t,location:r,query:s,queryString:o}=this.props;r.search?e(be,ve,o):t.replace((0,S.ZE)(t,{exclude:s?s.exclude:void 0,filter_by:s?s.filter_by:void 0,group_by:s?s.group_by:void 0,order_by:{cost:"desc"}}))},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{location:r,report:s,reportError:o,queryString:l}=this.props,{selectedItems:a}=this.state,i=e.queryString!==l,n=!s&&!o,c=!r.search,d=t.selectedItems!==a;(i||n||c||d)&&this.updateReport()}render(){const{currency:e,history:t,providers:r,providersFetchStatus:s,query:l,report:a,reportError:i,reportFetchStatus:n,intl:d}=this.props,u=B(l.group_by),m=this.getComputedItems(),b=d.formatMessage(c.Z.ibmDetailsTitle);if(i)return p().createElement(v.W,{title:b});if(s===P.iF.inProgress)return p().createElement(h.g,{title:b});if(s===P.iF.complete){if(r&&r.meta&&0===r.meta.count)return p().createElement(y.L,{providerType:o.l.ibm,title:b});if(!(0,E.g8)(r))return p().createElement(g.J,{title:b})}return p().createElement("div",{style:ge.ibmDetails},p().createElement(N,{currency:e,groupBy:u,onCurrencySelected:e=>(0,S._s)(t,l,e),onGroupBySelected:this.handleGroupBySelected,report:a}),p().createElement("div",{style:ge.content},this.getToolbar(m),this.getExportModal(m),n===P.iF.inProgress?p().createElement(h.g,null):p().createElement(p().Fragment,null,p().createElement("div",{style:ge.tableContainer},this.getTable()),p().createElement("div",{style:ge.paginationContainer},p().createElement("div",{style:ge.pagination},this.getPagination(!0))))))}}const Se=(0,P.X1)(((e,t)=>{const r=(0,l.mB)(location.search),s=C.iJ.selectIsCurrencyFeatureEnabled(e)?(0,Z.zC)():void 0,i={delta:"cost",filter:Object.assign(Object.assign({},ye.filter),r.filter),filter_by:r.filter_by||ye.filter_by,exclude:r.exclude||ye.exclude,group_by:r.group_by||ye.group_by,order_by:r.order_by||ye.order_by},n=(0,l.pm)(Object.assign(Object.assign({},i),{currency:s})),c=x.ZV.selectReport(e,be,ve,n),d=x.ZV.selectReportError(e,be,ve,n),p=x.ZV.selectReportFetchStatus(e,be,ve,n),u=(0,a.H)(_.NT),m=_.aX.selectProviders(e,o.l.all,u),h=_.aX.selectProvidersError(e,o.l.all,u),g=_.aX.selectProvidersFetchStatus(e,o.l.all,u);return{currency:s,providers:(0,E.BV)(m,o.l.ibm),providersError:h,providersFetchStatus:g,query:i,queryString:n,report:c,reportError:d,reportFetchStatus:p}})),Ee={fetchReport:x.nx.fetchReport},Pe=(0,u.ZP)((0,m.connect)(Se,Ee)(fe))}}]);
//# sourceMappingURL=../sourcemaps/ibm.461eac75fe50742ad6fb99e00466b837.js.map