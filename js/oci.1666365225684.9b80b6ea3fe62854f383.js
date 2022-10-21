"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[321],{49572:(e,t,r)=>{r.d(t,{C:()=>o.Z});var o=r(40961)},26569:(e,t,r)=>{r.r(t),r.d(t,{default:()=>F});var o=r(90392),s=r(86208),l=r(45997),a=r(93952),i=r(92950),n=r.n(i),c=r(74806),d=r(78741),p=r(98503),u=r(49572),h=r(84072),m=r(94676),g=r(94377),y=r(21084),v=r(45235),f=r(42581),S=r(21652),b=r(22379),E=r(69345);const _=(0,g.X1)(((e,t)=>({selectWidgets:E.Qg.selectWidgets(e),widgets:E.Qg.selectCurrentWidgets(e)}))),P=(0,c.ZP)((0,d.connect)(_,{})(b.X));var B=r(81370),x=r(69599);const C=(0,g.X1)(((e,t)=>({selectWidgets:x.vq.selectWidgets(e),widgets:x.vq.selectCurrentWidgets(e)}))),O=(0,c.ZP)((0,d.connect)(C,{})(B.f)),Z=p.Hb.ociDetails,T="cost",M="oci",q=(0,g.X1)(((e,t)=>{const r=(0,o.mB)(location.search),i=(0,h.VL)(r),c=(0,h.pe)(r),d=y.iJ.selectIsCurrencyFeatureEnabled(e)?(0,S.z)():void 0,p={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign({},r&&r.filter_by&&r.filter_by),i&&{[i]:void 0}),group_by:Object.assign({},i&&{[i]:c}),currency:d},u=(0,o.pm)(p),g=f.ZV.selectReport(e,M,T,u),b=f.ZV.selectReportError(e,M,T,u),E=f.ZV.selectReportFetchStatus(e,M,T,u),_=(0,s.H)(v.NT),B=v.aX.selectProviders(e,"all",_),x=v.aX.selectProvidersError(e,"all",_),C=v.aX.selectProvidersFetchStatus(e,"all",_);return{costOverviewComponent:n().createElement(P,{currency:d,groupBy:i,report:g}),currency:d,description:r[l.eG],detailsURL:Z,emptyStateTitle:t.intl.formatMessage(a.Z.ociDetailsTitle),groupBy:i,groupByValue:c,historicalDataComponent:n().createElement(O,{currency:d}),providers:(0,m.BV)(B,"oci"),providersError:x,providersFetchStatus:C,providerType:"oci",query:r,queryString:u,report:g,reportError:b,reportFetchStatus:E,reportType:T,reportPathsType:M,tagReportPathsType:"oci",title:c}})),k={fetchReport:f.nx.fetchReport},F=(0,c.ZP)((0,d.connect)(q,k)(u.C))},48825:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_e});var o=r(13157),s=r(36163),l=r(86208),a=r(45997),i=r(93952),n=r(92950),c=r.n(n),d=r(74806),p=r(78741),u=r(96464),h=r(27681),m=r(8022),g=r(20963),y=r(44149),v=r(84072),f=r(25958),S=r(94676),b=r(94377),E=r(21084),_=r(45235),P=r(42581);function B(e={}){return e.payer_tenant_id?"payer_tenant_id":e.region?"region":e.product_service?"product_service":"date"}var x=r(31447),C=r(21652),O=r(85086),Z=r(25343),T=r(29106),M=r(16732),q=r(99291),k=r(49382),F=r(33605),R=r(54881),D=r(98499),A=r(48196);const I={costValue:{marginTop:D.ZP.var,marginBottom:0},costLabelUnit:{fontSize:R.ZP.value,color:F.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:k.ZP.var,padding:D.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},title:{paddingBottom:A.ZP.var}},w={delta:"cost",filter:{time_scope_units:"month",time_scope_value:-1,resolution:"monthly"}},V=[{label:"payer_tenant_id",value:"payer_tenant_id"},{label:"product_service",value:"product_service"},{label:"region",value:"region"}];class X extends c().Component{render(){const{currency:e,groupBy:t,isCurrencyFeatureEnabled:r,isExportsFeatureEnabled:s,onCurrencySelected:l,onGroupBySelected:a,providers:n,providersError:d,report:p,intl:u}=this.props,h=p&&!d&&n&&n.meta&&n.meta.count>0,m=p&&p.meta&&p.meta.total&&p.meta.total.cost&&p.meta.total.cost.total;return c().createElement("header",{style:I.header},c().createElement("div",{style:I.headerContent},c().createElement(o.Title,{headingLevel:"h1",style:I.title,size:o.TitleSizes["2xl"]},u.formatMessage(i.Z.ociDetailsTitle)),c().createElement("div",{style:I.headerContentRight},r&&c().createElement(Z.F,{currency:e,onSelect:l}),s&&c().createElement(O.b,null))),c().createElement("div",{style:I.headerContent},c().createElement("div",{style:I.headerContentLeft},c().createElement(T.X,{getIdKeyForGroupBy:B,groupBy:t,isDisabled:!h,onSelected:a,options:V,showTags:!0,tagReportPathsType:"oci"})),Boolean(h)&&c().createElement("div",null,c().createElement(o.Title,{headingLevel:"h2",style:I.costValue,size:o.TitleSizes["4xl"]},(0,q.xG)(m?p.meta.total.cost.total.value:0,m?p.meta.total.cost.total.units:"USD")),c().createElement("div",{style:I.dateTitle},(0,M.J4)()))))}}const j=(0,b.X1)(((e,t)=>{const r=(0,s.pm)(w),o=(0,l.H)(_.NT),a=_.aX.selectProviders(e,"all",o),i=_.aX.selectProvidersError(e,"all",o),n=_.aX.selectProvidersFetchStatus(e,"all",o);return{isCurrencyFeatureEnabled:E.iJ.selectIsCurrencyFeatureEnabled(e),isExportsFeatureEnabled:E.iJ.selectIsExportsFeatureEnabled(e),providers:(0,S.BV)(a,"oci"),providersError:i,providersFetchStatus:n,queryString:r}})),$=(0,d.ZP)((0,p.connect)(j,{})(X));var L=r(52636),N=r(4272),G=r(73727),J=r(98503),z=r(54106),H=r(50277),U=r(8748),W=r(20635),K=r(12289),Q=r(40794),Y=r(11331),ee=r(73861);const te={emptyState:{backgroundColor:k.ZP.value,display:"flex",justifyContent:"center",paddingTop:Y.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:ee.ZP.value},infoDescription:{color:K.ZP.value,fontSize:Q.ZP.value}};class re extends c().Component{constructor(e){super(e),this.state={columns:[],rows:[]},this.initDatum=()=>{const{isAllSelected:e,query:t,report:r,selectedItems:s,intl:l}=this.props;if(!t||!r)return;const n=B(t.group_by),d=this.getGroupByTagKey(),p=[],u=(0,x.c)({report:r,idKey:d||n}),h=d?[{title:l.formatMessage(i.Z.tagNames)},{title:l.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",title:l.formatMessage(i.Z.cost)},u.length&&{transforms:[N.sortable]}),{title:""}]:[Object.assign({orderBy:n,title:l.formatMessage(i.Z.detailsResourceNames,{value:n})},u.length&&{transforms:[N.sortable]}),{title:l.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",title:l.formatMessage(i.Z.cost)},u.length&&{transforms:[N.sortable]}),{title:""}];u.map(((r,o)=>{const l=r&&null!==r.label?r.label:"",i=this.getMonthOverMonthCost(r,o),u=this.getTotalCost(r,o),h=this.getActions(r);let m=c().createElement(G.rU,{to:(0,W.T)({basePath:J.Hb.ociDetailsBreakdown,label:l.toString(),description:r.id,groupBy:d?`${a.P}${d}`:n,query:t})},l);const g=!(l===`no-${n}`||l===`no-${d}`);g||(m=l);const y=r.id&&r.id!==r.label?c().createElement("div",{style:te.infoDescription},r.id):null;p.push({cells:[{title:c().createElement("div",null,m,y)},{title:c().createElement("div",null,i)},{title:c().createElement("div",null,u)},{title:c().createElement("div",null,h)}],disableSelection:!g,isOpen:!1,item:r,selected:e||s&&void 0!==s.find((e=>e.id===r.id))})}));const m=[{heightAuto:!0,cells:[{props:{colSpan:5},title:c().createElement(o.Bullseye,null,c().createElement("div",{style:{textAlign:"center"}},c().createElement(o.Spinner,{size:"xl"})))}]}];this.setState({columns:h,loadingRows:m,rows:p,sortBy:{}})},this.getActions=e=>{const{groupBy:t,query:r}=this.props;return c().createElement(U.e,{groupBy:t,item:e,query:r,reportPathsType:"oci"})},this.getEmptyState=()=>{const{query:e,intl:t}=this.props;for(const t of Object.values(e.filter_by))if("*"!==t)return c().createElement(z.c,{filter:t,showMargin:!1});return c().createElement(o.EmptyState,null,c().createElement(o.EmptyStateIcon,{icon:L.Xk}),c().createElement(o.EmptyStateBody,null,t.formatMessage(i.Z.detailsEmptyState)))},this.getGroupByTagKey=()=>{const{query:e}=this.props;let t;for(const r of Object.keys(e.group_by)){const e=r.indexOf(a.P);if(-1!==e){t=r.substring(e+a.P.length);break}}return t},this.getMonthOverMonthCost=(e,t)=>{const{intl:r}=this.props,o=(0,q.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),s=null!==e.delta_percent?(0,q.rl)(Math.abs(e.delta_percent)):0,l=!(0===s||"0.00"===s),a=null!==e.delta_percent;let n;return l&&(n="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(n+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(n+=" increase")),a?c().createElement("div",{className:"monthOverMonthOverride"},c().createElement("div",{className:n,key:`month-over-month-cost-${t}`},l?r.formatMessage(i.Z.percent,{value:s}):c().createElement(H.L,null),Boolean(l&&null!==e.delta_percent&&e.delta_value>0)&&c().createElement("span",{className:"fa fa-sort-up",style:te.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(l&&null!==e.delta_percent&&e.delta_value<0)&&c().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},te.infoArrow),te.infoArrowDesc),key:`month-over-month-icon-${t}`})),c().createElement("div",{style:te.infoDescription,key:`month-over-month-info-${t}`},(0,M.Y)(o))):(0,M.Tf)()},this.getSortBy=()=>{const{query:e}=this.props,{columns:t}=this.state;let r=-1,o=N.SortByDirection.asc;for(const s of Object.keys(e.order_by)){let l=0;for(const a of t){if(a.orderBy===s){o="asc"===e.order_by[s]?N.SortByDirection.asc:N.SortByDirection.desc,r=l+1;break}l++}}return r>-1?{index:r,direction:o}:{}},this.getTotalCost=(e,t)=>{const{report:r,intl:o}=this.props,s=r&&r.meta&&r.meta.total&&r.meta.total.cost&&r.meta.total.cost.total?r.meta.total.cost.total.value:0,l=0===s?s.toFixed(2):(e.cost.total.value/s*100).toFixed(2);return c().createElement(c().Fragment,null,(0,q.xG)(e.cost.total.value,e.cost.total.units),c().createElement("div",{style:te.infoDescription,key:`total-cost-${t}`},o.formatMessage(i.Z.percentOfCost,{value:l})))},this.handleOnSelect=(e,t,r)=>{const{onSelected:o}=this.props;let s,l=[];-1===r?s=this.state.rows.map((e=>(e.selected=t,e))):(s=[...this.state.rows],s[r].selected=t,l=[s[r].item]),this.setState({rows:s},(()=>{o&&o(l,t)}))},this.handleOnSort=(e,t,r)=>{const{onSort:o}=this.props,{columns:s}=this.state;o&&o(s[t-1].orderBy,r===N.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{query:t,report:r,selectedItems:o}=this.props,l=r&&r.data?JSON.stringify(r.data):"",a=e.report&&e.report.data?JSON.stringify(e.report.data):"";(0,s.pm)(e.query)===(0,s.pm)(t)&&a===l&&e.selectedItems===o||this.initDatum()}render(){const{intl:e,isLoading:t}=this.props,{columns:r,loadingRows:o,rows:s}=this.state;return c().createElement(c().Fragment,null,c().createElement(N.Table,{"aria-label":e.formatMessage(i.Z.ociDetailsTableAriaLabel),canSelectAll:!1,cells:r,className:"tableOverride",rows:t?o:s,sortBy:this.getSortBy(),onSelect:t?void 0:this.handleOnSelect,onSort:this.handleOnSort,gridBreakPoint:"grid-2xl"},c().createElement(N.TableHeader,null),c().createElement(N.TableBody,null)),Boolean(0===s.length)&&c().createElement("div",{style:te.emptyState},this.getEmptyState()))}}const oe=(0,d.ZP)(re);var se=r(55353),le=r(7917),ae=r(19853);const ie="tag",ne="oci";class ce extends c().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,r=[{name:e.formatMessage(i.Z.filterByValues,{value:"payer_tenant_id"}),key:"payer_tenant_id"},{name:e.formatMessage(i.Z.filterByValues,{value:"product_service"}),key:"product_service"},{name:e.formatMessage(i.Z.filterByValues,{value:"region"}),key:"region"}];return t&&t.data&&t.data.length&&r.push({name:e.formatMessage(i.Z.filterByValues,{value:a.up}),key:a.up}),r}}componentDidMount(){const{fetchTag:e,queryString:t,tagReportFetchStatus:r}=this.props;this.setState({categoryOptions:this.getCategoryOptions()},(()=>{1!==r&&e(ne,ie,t)}))}componentDidUpdate(e){const{fetchTag:t,query:r,queryString:o,tagReport:s,tagReportFetchStatus:l}=this.props;(0,ae.X)(s,e.tagReport)?r&&!(0,ae.X)(r,e.query)&&1!==l&&t(ne,ie,o):this.setState({categoryOptions:this.getCategoryOptions()},(()=>{1!==l&&t(ne,ie,o)}))}render(){const{groupBy:e,isAllSelected:t,isExportDisabled:r,itemsPerPage:o,itemsTotal:s,onBulkSelected:l,onExportClicked:a,onFilterAdded:i,onFilterRemoved:n,pagination:d,query:p,selectedItems:u,tagReport:h}=this.props,{categoryOptions:m}=this.state;return c().createElement(se.k,{categoryOptions:m,groupBy:e,isAllSelected:t,isExportDisabled:r,itemsPerPage:o,itemsTotal:s,onBulkSelected:l,onExportClicked:a,onFilterAdded:i,onFilterRemoved:n,pagination:d,query:p,resourcePathsType:"oci",selectedItems:u,showBulkSelect:!0,showExport:!0,showFilter:!0,tagReport:h,tagReportPathsType:ne})}}const de=(0,b.X1)(((e,t)=>{const r=(0,s.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3}),o=le.ux.selectTag(e,ne,ie,r);return{queryString:r,tagReportFetchStatus:le.ux.selectTagFetchStatus(e,ne,ie,r),tagReport:o}})),pe={fetchTag:le.xr.Xt},ue=(0,p.connect)(de,pe)(ce),he=(0,d.ZP)(ue);var me=r(32412);const ge={ociDetails:{minHeight:"100%"},content:{paddingBottom:D.ZP.value,paddingTop:D.ZP.value},paginationContainer:{marginLeft:D.ZP.value,marginRight:D.ZP.value},pagination:{backgroundColor:k.ZP.value,paddingBottom:me.ZP.value,paddingTop:me.ZP.value},tableContainer:{marginLeft:D.ZP.value,marginRight:D.ZP.value}},ye={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},exclude:{},filter_by:{},group_by:{payer_tenant_id:"*"},order_by:{cost:"desc"}},ve="cost",fe="oci";class Se extends c().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,r=B(e.group_by),o=(0,v.qV)(e);return(0,x.c)({report:t,idKey:o||r})},this.getExportModal=e=>{const{isAllSelected:t,isExportModalOpen:r,selectedItems:o}=this.state,{query:s,report:l}=this.props,i=B(s.group_by),n=(0,v.qV)(s),d=l&&l.meta?l.meta.count:0,p=[];return o.map((e=>{e.label!==`no-${i}`&&e.label!==`no-${n}`&&p.push(e)})),c().createElement(y.X,{count:t?d:p.length,isAllItems:(t||o.length===d)&&e.length>0,groupBy:n?`${a.P}${n}`:i,isOpen:r,items:p,onClose:this.handleExportModalClose,query:s,reportPathsType:fe})},this.getPagination=(e=!1)=>{const{history:t,intl:r,query:s,report:l}=this.props,a=l&&l.meta?l.meta.count:0,n=l&&l.meta&&l.meta.filter&&l.meta.filter.limit?l.meta.filter.limit:ye.filter.limit,d=(l&&l.meta&&l.meta.filter&&l.meta.filter.offset?l.meta.filter.offset:ye.filter.offset)/n+1;return c().createElement(o.Pagination,{isCompact:!e,itemCount:a,onPerPageSelect:(e,r)=>(0,f.xh)(t,s,r),onSetPage:(e,r)=>(0,f.$9)(t,s,l,r),page:d,perPage:n,titles:{paginationTitle:r.formatMessage(i.Z.paginationTitle,{title:r.formatMessage(i.Z.oci),placement:e?"bottom":"top"})},variant:e?o.PaginationVariant.bottom:o.PaginationVariant.top,widgetId:"exports-pagination"+(e?"-bottom":"")})},this.getTable=()=>{const{history:e,query:t,report:r,reportFetchStatus:o}=this.props,{isAllSelected:s,selectedItems:l}=this.state,i=B(t.group_by),n=(0,v.qV)(t);return c().createElement(oe,{groupBy:n?`${a.P}${n}`:i,isAllSelected:s,isLoading:1===o,onSelected:this.handleSelected,onSort:(r,o)=>(0,f.yB)(e,t,r,o),query:t,report:r,selectedItems:l})},this.getToolbar=e=>{const{history:t,query:r,report:o}=this.props,{isAllSelected:s,selectedItems:l}=this.state,i=B(r.group_by),n=(0,v.qV)(r),d=o&&o.meta?o.meta.count:0;return c().createElement(he,{groupBy:n?`${a.P}${n}`:i,isAllSelected:s,isExportDisabled:0===e.length||!s&&0===l.length,itemsPerPage:e.length,itemsTotal:d,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,f.$3)(t,r,e),onFilterRemoved:e=>(0,f.q7)(t,r,e),pagination:this.getPagination(),query:r,selectedItems:l})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{history:t,query:r}=this.props,o=e,s=Object.assign(Object.assign({},JSON.parse(JSON.stringify(r))),{group_by:{[o]:"*"},order_by:{cost:"desc"}});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{t.replace((0,f.ZE)(t,s,!0))}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:r,selectedItems:o}=this.state;let s=[...r?this.getComputedItems():o];e&&e.length>0&&(t?e.map((e=>s.push(e))):e.map((e=>{s=s.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:s})},this.updateReport=()=>{const{fetchReport:e,history:t,location:r,query:o,queryString:s}=this.props;r.search?e(fe,ve,s):t.replace((0,f.ZE)(t,{exclude:o?o.exclude:void 0,filter_by:o?o.filter_by:void 0,group_by:o?o.group_by:void 0,order_by:{cost:"desc"}}))},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{location:r,report:o,reportError:s,queryString:l}=this.props,{selectedItems:a}=this.state,i=e.queryString!==l,n=!o&&!s,c=!r.search,d=t.selectedItems!==a;(i||n||c||d)&&this.updateReport()}render(){const{currency:e,history:t,providers:r,providersFetchStatus:o,query:s,report:l,reportError:a,reportFetchStatus:n,intl:d}=this.props,p=B(s.group_by),y=this.getComputedItems(),v=d.formatMessage(i.Z.ociDetailsTitle);if(a)return c().createElement(g.W,{title:v});if(1===o)return c().createElement(u.g,{title:v});if(2===o){if(r&&r.meta&&0===r.meta.count)return c().createElement(m.L,{providerType:"oci",title:v});if(!(0,S.g8)(r))return c().createElement(h.J,{title:v})}return c().createElement("div",{style:ge.ociDetails},c().createElement($,{currency:e,groupBy:p,onCurrencySelected:e=>(0,f._s)(t,s,e),onGroupBySelected:this.handleGroupBySelected,report:l}),c().createElement("div",{style:ge.content},this.getToolbar(y),this.getExportModal(y),1===n?c().createElement(u.g,null):c().createElement(c().Fragment,null,c().createElement("div",{style:ge.tableContainer},this.getTable()),c().createElement("div",{style:ge.paginationContainer},c().createElement("div",{style:ge.pagination},this.getPagination(!0))))))}}const be=(0,b.X1)(((e,t)=>{const r=(0,s.mB)(location.search),o=E.iJ.selectIsCurrencyFeatureEnabled(e)?(0,C.z)():void 0,a={delta:"cost",filter:Object.assign(Object.assign({},ye.filter),r.filter),filter_by:r.filter_by||ye.filter_by,exclude:r.exclude||ye.exclude,group_by:r.group_by||ye.group_by,order_by:r.order_by||ye.order_by,currency:o},i=(0,s.pm)(a),n=P.ZV.selectReport(e,fe,ve,i),c=P.ZV.selectReportError(e,fe,ve,i),d=P.ZV.selectReportFetchStatus(e,fe,ve,i),p=(0,l.H)(_.NT),u=_.aX.selectProviders(e,"all",p),h=_.aX.selectProvidersError(e,"all",p),m=_.aX.selectProvidersFetchStatus(e,"all",p);return{currency:o,providers:(0,S.BV)(u,"oci"),providersError:h,providersFetchStatus:m,query:a,queryString:i,report:n,reportError:c,reportFetchStatus:d}})),Ee={fetchReport:P.nx.fetchReport},_e=(0,d.ZP)((0,p.connect)(be,Ee)(Se))}}]);
//# sourceMappingURL=../sourcemaps/oci.345e3379ff06c640353661427f027dbc.js.map