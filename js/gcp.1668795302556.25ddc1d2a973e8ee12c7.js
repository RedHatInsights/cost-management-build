"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[403],{79467:(e,t,r)=>{r.d(t,{C:()=>s.Z});var s=r(64727)},22601:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j});var s=r(1326),o=r(72504),a=r(84717),l=r(39333),n=r(6456),i=r(50081),c=r(97027),p=r(92950),d=r.n(p),u=r(74806),g=r(78741),m=r(91919),h=r(79467),y=r(37269),v=r(86482),f=r(1156),S=r(78898),b=r(62331),E=r(68091),C=r(64703),P=r(67709),_=r(79666);const x=(0,f.X1)(((e,t)=>({selectWidgets:_.eo.selectWidgets(e),widgets:_.eo.selectCurrentWidgets(e)}))),B=(0,u.ZP)((0,g.connect)(x,{})(P.X));var O=r(87935),Z=r(94584);const T=(0,f.X1)(((e,t)=>({selectWidgets:Z.hH.selectWidgets(e),widgets:Z.hH.selectCurrentWidgets(e)}))),F=(0,u.ZP)((0,g.connect)(T,{})(O.f)),M=m.Hb.gcpDetails,k=n.C.cost,R=n.K.gcp,I=(0,f.X1)(((e,t)=>{const r=(0,o.mB)(location.search),n=(0,y.VL)(r),p=(0,y.pe)(r),u=S.iJ.selectIsCurrencyFeatureEnabled(e)?(0,C.zC)():void 0,g={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign({},r&&r.filter_by&&r.filter_by),n&&{[n]:void 0}),exclude:Object.assign({},r&&r.exclude&&r.exclude),group_by:Object.assign({},n&&{[n]:p})},m=(0,o.pm)(Object.assign(Object.assign({},g),{currency:u})),h=E.ZV.selectReport(e,R,k,m),f=E.ZV.selectReportError(e,R,k,m),P=E.ZV.selectReportFetchStatus(e,R,k,m),_=(0,a.H)(b.NT),x=b.aX.selectProviders(e,s.l.all,_),O=b.aX.selectProvidersError(e,s.l.all,_),Z=b.aX.selectProvidersFetchStatus(e,s.l.all,_);return{costOverviewComponent:d().createElement(B,{currency:u,groupBy:n,query:r,report:h}),currency:u,description:r[l.eG],detailsURL:M,emptyStateTitle:t.intl.formatMessage(c.Z.gcpDetailsTitle),groupBy:n,groupByValue:p,historicalDataComponent:d().createElement(F,{currency:u}),providers:(0,v.BV)(x,s.l.gcp),providersError:O,providersFetchStatus:Z,providerType:s.l.gcp,query:r,report:h,reportError:f,reportFetchStatus:P,reportType:k,reportPathsType:R,reportQueryString:m,tagReportPathsType:i.L.gcp,title:r[l.yG]?r[l.yG]:p}})),D={fetchReport:E.nx.fetchReport},j=(0,u.ZP)((0,g.connect)(I,D)(h.C))},31554:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Ee});var s=r(69726),o=r(1326),a=r(72504),l=r(84717),n=r(39333),i=r(6456),c=r(97027),p=r(92950),d=r.n(p),u=r(74806),g=r(78741),m=r(52471),h=r(55672),y=r(2985),v=r(47947),f=r(40493),S=r(37269),b=r(89662),E=r(86482),C=r(1156),P=r(78898),_=r(62331),x=r(68091);function B(e={}){return e.account?"account":e.gcp_project?"gcp_project":e.project?"project":e.region?"region":e.service?"service":"date"}var O=r(69511),Z=r(64703),T=r(50081),F=r(60021),M=r(6450),k=r(87560),R=r(45087),I=r(91778),D=r(49382),j=r(33605),A=r(54881),V=r(98499),w=r(48196);const q={costValue:{marginTop:V.ZP.var,marginBottom:0},costLabelUnit:{fontSize:A.ZP.value,color:j.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:D.ZP.var,padding:V.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},title:{paddingBottom:w.ZP.var}},X=[{label:"account",value:"account"},{label:"gcp_project",value:"gcp_project"},{label:"service",value:"service"},{label:"region",value:"region"}],L=T.L.gcp;class $ extends d().Component{render(){const{currency:e,groupBy:t,isCurrencyFeatureEnabled:r,isExportsFeatureEnabled:o,onCurrencySelected:a,onGroupBySelected:l,providers:n,providersError:i,report:p,intl:u}=this.props,g=p&&!i&&n&&n.meta&&n.meta.count>0,m=p&&p.meta&&p.meta.total&&p.meta.total.cost&&p.meta.total.cost.total;return d().createElement("header",{style:q.header},d().createElement("div",{style:q.headerContent},d().createElement(s.Title,{headingLevel:"h1",style:q.title,size:s.TitleSizes["2xl"]},u.formatMessage(c.Z.gcpDetailsTitle)),d().createElement("div",{style:q.headerContentRight},r&&d().createElement(M.F,{currency:e,onSelect:a}),o&&d().createElement(F.b,null))),d().createElement("div",{style:q.headerContent},d().createElement("div",{style:q.headerContentLeft},d().createElement(k.X,{getIdKeyForGroupBy:B,groupBy:t,isDisabled:!g,onSelected:l,options:X,showTags:!0,tagReportPathsType:L})),Boolean(g)&&d().createElement("div",null,d().createElement(s.Title,{headingLevel:"h2",style:q.costValue,size:s.TitleSizes["4xl"]},(0,I.xG)(m?p.meta.total.cost.total.value:0,m?p.meta.total.cost.total.units:"USD")),d().createElement("div",{style:q.dateTitle},(0,R.J4)()))))}}const Q=(0,C.X1)(((e,t)=>{const r=(0,l.H)(_.NT),s=_.aX.selectProviders(e,o.l.all,r),a=_.aX.selectProvidersError(e,o.l.all,r),n=_.aX.selectProvidersFetchStatus(e,o.l.all,r);return{isCurrencyFeatureEnabled:P.iJ.selectIsCurrencyFeatureEnabled(e),isExportsFeatureEnabled:P.iJ.selectIsExportsFeatureEnabled(e),providers:(0,E.BV)(s,o.l.gcp),providersError:a,providersFetchStatus:n,providersQueryString:r}})),W=(0,u.ZP)((0,g.connect)(Q,{})($));var N=r(73727),G=r(91919),J=r(98485),H=r(62423),K=r(90569),z=r(90302),U=r(54583);const Y=i.K.gcp;class ee extends d().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{groupBy:e,groupByTagKey:t,isAllSelected:r,report:s,selectedItems:o,intl:a}=this.props;if(!s)return;const l=[],n=(0,O.c)({report:s,idKey:t||e}),i=t?[{name:""},{name:a.formatMessage(c.Z.tagNames)},{name:a.formatMessage(c.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:a.formatMessage(c.Z.cost),style:z.W.costColumn},n.length&&{isSortable:!0}),{name:""}]:[{name:""},Object.assign({orderBy:e,name:a.formatMessage(c.Z.detailsResourceNames,{value:e})},n.length&&{isSortable:!0}),{name:a.formatMessage(c.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:a.formatMessage(c.Z.cost),style:z.W.costColumn},n.length&&{isSortable:!0}),{name:""}];n.map(((s,a)=>{const n=s&&null!==s.label?s.label:"",i=this.getMonthOverMonthCost(s,a),c=this.getTotalCost(s,a),p=this.getActions(s);let u=d().createElement(N.rU,{to:(0,U.T)({basePath:G.Hb.gcpDetailsBreakdown,label:n.toString(),description:s.id,groupBy:e})},n);const g=!(n===`no-${e}`||n===`no-${t}`);g||(u=n);const m=s.id&&s.id!==s.label?d().createElement("div",{style:z.W.infoDescription},s.id):null;l.push({cells:[{},{value:d().createElement("div",null,u,m)},{value:d().createElement("div",null,i)},{value:d().createElement("div",null,c)},{value:d().createElement("div",null,p)}],isOpen:!1,item:s,selected:r||o&&void 0!==o.find((e=>e.id===s.id)),selectionDisabled:!g})})),this.setState({columns:i,rows:l})},this.getActions=e=>{const{groupBy:t,reportQueryString:r}=this.props;return d().createElement(H.e,{groupBy:t,item:e,reportPathsType:Y,reportQueryString:r})},this.getMonthOverMonthCost=(e,t)=>{const{intl:r}=this.props,s=(0,I.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),o=null!==e.delta_percent?(0,I.rl)(Math.abs(e.delta_percent)):0,a=!(0===o||"0.00"===o),l=null!==e.delta_percent;let n;return a&&(n="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(n+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(n+=" increase")),l?d().createElement("div",{className:"monthOverMonthOverride"},d().createElement("div",{className:n,key:`month-over-month-cost-${t}`},a?r.formatMessage(c.Z.percent,{value:o}):d().createElement(J.L,null),Boolean(a&&null!==e.delta_percent&&e.delta_value>0)&&d().createElement("span",{className:"fa fa-sort-up",style:z.W.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(a&&null!==e.delta_percent&&e.delta_value<0)&&d().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},z.W.infoArrow),z.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),d().createElement("div",{style:z.W.infoDescription,key:`month-over-month-info-${t}`},(0,R.Y)(s))):(0,R.Tf)()},this.getTotalCost=(e,t)=>{const{report:r,intl:s}=this.props,o=r&&r.meta&&r.meta.total&&r.meta.total.cost&&r.meta.total.cost.total?r.meta.total.cost.total.value:0,a=0===o?o.toFixed(2):(e.cost.total.value/o*100).toFixed(2);return d().createElement(d().Fragment,null,(0,I.xG)(e.cost.total.value,e.cost.total.units),d().createElement("div",{style:z.W.infoDescription,key:`total-cost-${t}`},s.formatMessage(c.Z.percentOfCost,{value:a})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{report:t,selectedItems:r}=this.props,s=t&&t.data?JSON.stringify(t.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")===s&&e.selectedItems===r||this.initDatum()}render(){const{isLoading:e,onSelected:t,onSort:r,selectedItems:s}=this.props,{columns:o,rows:a}=this.state;return d().createElement(K.w,{columns:o,isLoading:e,onSelected:t,onSort:r,rows:a,selectedItems:s})}}const te=(0,u.ZP)(ee);var re=r(36116),se=r(70539),oe=r(81278),ae=r(94282);const le=T.Q.tag,ne=T.L.gcp;class ie extends d().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,r=[{name:e.formatMessage(c.Z.filterByValues,{value:"account"}),key:"account"},{name:e.formatMessage(c.Z.filterByValues,{value:"gcp_project"}),key:"gcp_project"},{name:e.formatMessage(c.Z.filterByValues,{value:"service"}),key:"service"},{name:e.formatMessage(c.Z.filterByValues,{value:"region"}),key:"region"}];return t&&t.data&&t.data.length&&r.push({name:e.formatMessage(c.Z.filterByValues,{value:n.up}),key:n.up}),r}}componentDidMount(){const{fetchTag:e,tagReportFetchStatus:t,tagQueryString:r}=this.props;this.setState({categoryOptions:this.getCategoryOptions()},(()=>{t!==C.iF.inProgress&&e(ne,le,r)}))}componentDidUpdate(e){const{fetchTag:t,query:r,tagReport:s,tagReportFetchStatus:o,tagQueryString:a}=this.props;(0,ae.X)(s,e.tagReport)?r&&!(0,ae.X)(r,e.query)&&o!==C.iF.inProgress&&t(ne,le,a):this.setState({categoryOptions:this.getCategoryOptions()},(()=>{o!==C.iF.inProgress&&t(ne,le,a)}))}render(){const{groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isExportDisabled:s,itemsPerPage:o,itemsTotal:a,onBulkSelected:l,onExportClicked:n,onFilterAdded:i,onFilterRemoved:c,pagination:p,query:u,selectedItems:g,tagReport:m}=this.props,{categoryOptions:h}=this.state;return d().createElement(se.k,{categoryOptions:h,groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isExportDisabled:s,itemsPerPage:o,itemsTotal:a,onBulkSelected:l,onExportClicked:n,onFilterAdded:i,onFilterRemoved:c,pagination:p,query:u,resourcePathsType:re.C.gcp,selectedItems:g,showBulkSelect:!0,showExport:!0,showFilter:!0,tagReport:m,tagReportPathsType:ne})}}const ce=(0,C.X1)(((e,t)=>{const r=(0,a.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3});return{tagReport:oe.ux.selectTag(e,ne,le,r),tagReportFetchStatus:oe.ux.selectTagFetchStatus(e,ne,le,r),tagQueryString:r}})),pe={fetchTag:oe.xr.Xt},de=(0,g.connect)(ce,pe)(ie),ue=(0,u.ZP)(de);var ge=r(32412);const me={gcpDetails:{minHeight:"100%"},content:{paddingBottom:V.ZP.value,paddingTop:V.ZP.value},paginationContainer:{marginLeft:V.ZP.value,marginRight:V.ZP.value},pagination:{backgroundColor:D.ZP.value,padding:ge.ZP.value},tableContainer:{marginLeft:V.ZP.value,marginRight:V.ZP.value}},he={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},exclude:{},filter_by:{},group_by:{account:"*"},order_by:{cost:"desc"}},ye=i.C.cost,ve=i.K.gcp;class fe extends d().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,r=B(e.group_by),s=(0,S.qV)(e);return(0,O.c)({report:t,idKey:s||r})},this.getExportModal=e=>{const{query:t,report:r,reportQueryString:s}=this.props,{isAllSelected:o,isExportModalOpen:a,selectedItems:l}=this.state,i=B(t.group_by),c=(0,S.qV)(t),p=r&&r.meta?r.meta.count:0,u=[];return l.map((e=>{e.label!==`no-${i}`&&e.label!==`no-${c}`&&u.push(e)})),d().createElement(f.X,{count:o?p:u.length,isAllItems:(o||l.length===p)&&e.length>0,groupBy:c?`${n.P}${c}`:i,isOpen:a,items:u,onClose:this.handleExportModalClose,reportPathsType:ve,reportQueryString:s})},this.getPagination=(e=!1)=>{const{history:t,intl:r,query:o,report:a}=this.props,l=a&&a.meta?a.meta.count:0,n=a&&a.meta&&a.meta.filter&&a.meta.filter.limit?a.meta.filter.limit:he.filter.limit,i=(a&&a.meta&&a.meta.filter&&a.meta.filter.offset?a.meta.filter.offset:he.filter.offset)/n+1;return d().createElement(s.Pagination,{isCompact:!e,itemCount:l,onPerPageSelect:(e,r)=>(0,b.xh)(t,o,r),onSetPage:(e,r)=>(0,b.$9)(t,o,a,r),page:i,perPage:n,titles:{paginationTitle:r.formatMessage(c.Z.paginationTitle,{title:r.formatMessage(c.Z.gcp),placement:e?"bottom":"top"})},variant:e?s.PaginationVariant.bottom:s.PaginationVariant.top,widgetId:"exports-pagination"+(e?"-bottom":"")})},this.getTable=()=>{const{history:e,query:t,report:r,reportFetchStatus:s,reportQueryString:o}=this.props,{isAllSelected:a,selectedItems:l}=this.state,i=B(t.group_by),c=(0,S.qV)(t);return d().createElement(te,{groupBy:c?`${n.P}${c}`:i,groupByTagKey:c,isAllSelected:a,isLoading:s===C.iF.inProgress,onSelected:this.handleSelected,onSort:(r,s)=>(0,b.yB)(e,t,r,s),report:r,reportQueryString:o,selectedItems:l})},this.getToolbar=e=>{const{history:t,query:r,report:s}=this.props,{isAllSelected:o,selectedItems:a}=this.state,l=B(r.group_by),i=(0,S.qV)(r),c=s&&s.meta?s.meta.count:0;return d().createElement(ue,{groupBy:i?`${n.P}${i}`:l,isAllSelected:o,isExportDisabled:0===e.length||!o&&0===a.length,itemsPerPage:e.length,itemsTotal:c,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,b.$3)(t,r,e),onFilterRemoved:e=>(0,b.q7)(t,r,e),pagination:this.getPagination(),query:r,selectedItems:a})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{history:t,query:r}=this.props,s=e,o=Object.assign(Object.assign({},JSON.parse(JSON.stringify(r))),{group_by:{[s]:"*"},order_by:{cost:"desc"}});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{t.replace((0,b.ZE)(t,o,!0))}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:r,selectedItems:s}=this.state;let o=[...r?this.getComputedItems():s];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.updateReport=()=>{const{fetchReport:e,history:t,location:r,query:s,reportQueryString:o}=this.props;r.search?e(ve,ye,o):t.replace((0,b.ZE)(t,{exclude:s?s.exclude:void 0,filter_by:s?s.filter_by:void 0,group_by:s?s.group_by:void 0,order_by:{cost:"desc"}}))},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{location:r,report:s,reportError:o,reportQueryString:a}=this.props,{selectedItems:l}=this.state,n=e.reportQueryString!==a,i=!s&&!o,c=!r.search,p=t.selectedItems!==l;(n||i||c||p)&&this.updateReport()}render(){const{currency:e,history:t,providers:r,providersFetchStatus:s,query:a,report:l,reportError:n,reportFetchStatus:i,intl:p}=this.props,u=B(a.group_by),g=this.getComputedItems(),f=p.formatMessage(c.Z.gcpDetailsTitle);if(n)return d().createElement(v.W,{title:f});if(s===C.iF.inProgress)return d().createElement(m.g,{title:f});if(s===C.iF.complete){if(r&&r.meta&&0===r.meta.count)return d().createElement(y.L,{providerType:o.l.gcp,title:f});if(!(0,E.g8)(r))return d().createElement(h.J,{title:f})}return d().createElement("div",{style:me.gcpDetails},d().createElement(W,{currency:e,groupBy:u,onCurrencySelected:e=>(0,b._s)(t,a,e),onGroupBySelected:this.handleGroupBySelected,report:l}),d().createElement("div",{style:me.content},this.getToolbar(g),this.getExportModal(g),i===C.iF.inProgress?d().createElement(m.g,null):d().createElement(d().Fragment,null,d().createElement("div",{style:me.tableContainer},this.getTable()),d().createElement("div",{style:me.paginationContainer},d().createElement("div",{style:me.pagination},this.getPagination(!0))))))}}const Se=(0,C.X1)(((e,t)=>{const r=(0,a.mB)(location.search),s=P.iJ.selectIsCurrencyFeatureEnabled(e)?(0,Z.zC)():void 0,n={delta:"cost",filter:Object.assign(Object.assign({},he.filter),r.filter),filter_by:r.filter_by||he.filter_by,exclude:r.exclude||he.exclude,group_by:r.group_by||he.group_by,order_by:r.order_by||he.order_by},i=(0,a.pm)(Object.assign(Object.assign({},n),{currency:s})),c=x.ZV.selectReport(e,ve,ye,i),p=x.ZV.selectReportError(e,ve,ye,i),d=x.ZV.selectReportFetchStatus(e,ve,ye,i),u=(0,l.H)(_.NT),g=_.aX.selectProviders(e,o.l.all,u),m=_.aX.selectProvidersError(e,o.l.all,u),h=_.aX.selectProvidersFetchStatus(e,o.l.all,u);return{currency:s,providers:(0,E.BV)(g,o.l.gcp),providersError:m,providersFetchStatus:h,query:n,report:c,reportError:p,reportFetchStatus:d,reportQueryString:i}})),be={fetchReport:x.nx.fetchReport},Ee=(0,u.ZP)((0,g.connect)(Se,be)(fe))}}]);
//# sourceMappingURL=../sourcemaps/gcp.25fa2bce59aea0e6dedb4d2414254eb5.js.map