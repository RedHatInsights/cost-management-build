"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[373],{4385:(e,t,r)=>{r.r(t),r.d(t,{default:()=>q});var s=r(95078),o=r(86208),a=r(45997),l=r(93952),n=r(92950),i=r.n(n),c=r(74806),d=r(78741),p=r(98503),u=r(49572),h=r(84072),m=r(94676),g=r(94377),y=r(21084),f=r(45235),v=r(42581),S=r(36116),b=r(21652),E=r(22379),_=r(17287);const T=(0,g.X1)(((e,t)=>({selectWidgets:_.XL.selectWidgets(e),widgets:_.XL.selectCurrentWidgets(e)}))),B=(0,c.ZP)((0,d.connect)(T,{})(E.X));var P=r(81370),O=r(17303);const C=(0,g.X1)(((e,t)=>({selectWidgets:O.Vf.selectWidgets(e),widgets:O.Vf.selectCurrentWidgets(e)}))),x=(0,c.ZP)((0,d.connect)(C,{})(P.f)),Z=p.Hb.awsDetails,w="cost",M="aws",R=(0,g.X1)(((e,t)=>{const r=(0,s.mB)(location.search),n=(0,h.OA)(r),c=n?a.dV:(0,h.VL)(r),d=n||(0,h.pe)(r),p=(0,S.u)(),u=y.iJ.selectIsCurrencyFeatureEnabled(e)?(0,b.z)():void 0,g={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign(Object.assign({},r&&r.filter_by&&r.filter_by),c&&{[c]:void 0}),r&&r.filter&&r.filter.account&&{[`${a.Sq}account`]:r.filter.account}),group_by:Object.assign({},c&&{[c]:d}),cost_type:p,currency:u},E=(0,s.pm)(g),_=v.ZV.selectReport(e,M,w,E),T=v.ZV.selectReportError(e,M,w,E),P=v.ZV.selectReportFetchStatus(e,M,w,E),O=(0,o.H)(f.NT),C=f.aX.selectProviders(e,"all",O),R=f.aX.selectProvidersError(e,"all",O),F=f.aX.selectProvidersFetchStatus(e,"all",O);return{costOverviewComponent:i().createElement(B,{costType:p,currency:u,groupBy:c,query:r,report:_}),costType:p,currency:u,description:r[a.eG],detailsURL:Z,emptyStateTitle:t.intl.formatMessage(l.Z.awsDetailsTitle),groupBy:c,groupByValue:d,historicalDataComponent:i().createElement(x,{costType:p,currency:u}),providers:(0,m.BV)(C,"aws"),providersError:R,providersFetchStatus:F,providerType:"aws",query:r,queryString:E,report:_,reportError:T,reportFetchStatus:P,reportType:w,reportPathsType:M,showCostType:!0,tagReportPathsType:"aws",title:r[a.yG]?r[a.yG]:d}})),F={fetchReport:v.nx.fetchReport},q=(0,c.ZP)((0,d.connect)(R,F)(u.C))},23896:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Ce});var s=r(13157),o=r(95078),a=r(86208),l=r(45997),n=r(93952),i=r(92950),c=r.n(i),d=r(74806),p=r(78741),u=r(96464),h=r(27681),m=r(8022),g=r(20963),y=r(44149),f=r(84072),v=r(25958),S=r(94676),b=r(94377),E=r(21084),_=r(45235),T=r(42581);function B(e={}){return e.account?"account":e.org_unit_id?"org_unit_id":e.region?"region":e.service?"service":"date"}var P=r(31447),O=r(36116),C=r(21652),x=r(49382),Z=r(98499),w=r(32412);const M={awsDetails:{minHeight:"100%"},content:{paddingBottom:Z.ZP.value,paddingTop:Z.ZP.value},paginationContainer:{marginLeft:Z.ZP.value,marginRight:Z.ZP.value},pagination:{backgroundColor:x.ZP.value,paddingBottom:w.ZP.value,paddingTop:w.ZP.value},tableContainer:{marginLeft:Z.ZP.value,marginRight:Z.ZP.value}};var R=r(85086),F=r(25343),q=r(51171),k=r(29106),D=r(16732),A=r(99291),V=r(33605),I=r(54881),X=r(48196);const j={costValue:{marginTop:Z.ZP.var,marginBottom:0},costLabelUnit:{fontSize:I.ZP.value,color:V.ZP.var},costType:{display:"flex",marginLeft:w.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:x.ZP.var,padding:Z.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},title:{paddingBottom:X.ZP.var}},$={delta:"cost",filter:{time_scope_units:"month",time_scope_value:-1,resolution:"monthly"}},L=[{label:"account",value:"account"},{label:"service",value:"service"},{label:"region",value:"region"}];class N extends c().Component{constructor(){super(...arguments),this.handleCostTypeSelected=e=>{const{onCostTypeSelected:t}=this.props;t&&t(e)}}render(){const{costType:e,currency:t,groupBy:r,isCurrencyFeatureEnabled:o,isExportsFeatureEnabled:a,onCurrencySelected:l,onGroupBySelected:i,providers:d,providersError:p,report:u,intl:h}=this.props,m=u&&!p&&d&&d.meta&&d.meta.count>0,g=u&&u.meta&&u.meta.total&&u.meta.total.cost&&u.meta.total.cost.total;return c().createElement("header",{style:j.header},c().createElement("div",{style:j.headerContent},c().createElement(s.Title,{headingLevel:"h1",style:j.title,size:s.TitleSizes["2xl"]},h.formatMessage(n.Z.awsDetailsTitle)),c().createElement("div",{style:j.headerContentRight},o&&c().createElement(F.F,{currency:t,onSelect:l}),a&&c().createElement(R.b,null))),c().createElement("div",{style:j.headerContent},c().createElement("div",{style:j.headerContentLeft},c().createElement(k.X,{getIdKeyForGroupBy:B,groupBy:r,isDisabled:!m,onSelected:i,options:L,orgReportPathsType:"aws",showOrgs:!0,showTags:!0,tagReportPathsType:"aws"}),c().createElement("div",{style:j.costType},c().createElement(q.T,{costType:e,onSelect:this.handleCostTypeSelected}))),Boolean(m)&&c().createElement("div",null,c().createElement(s.Title,{headingLevel:"h2",style:j.costValue,size:s.TitleSizes["4xl"]},(0,A.xG)(g?u.meta.total.cost.total.value:0,g?u.meta.total.cost.total.units:"USD")),c().createElement("div",{style:j.dateTitle},(0,D.J4)()))))}}const z=(0,b.X1)(((e,t)=>{const r=(0,o.pm)($),s=(0,a.H)(_.NT),l=_.aX.selectProviders(e,"all",s),n=_.aX.selectProvidersError(e,"all",s),i=_.aX.selectProvidersFetchStatus(e,"all",s);return{isCurrencyFeatureEnabled:E.iJ.selectIsCurrencyFeatureEnabled(e),isExportsFeatureEnabled:E.iJ.selectIsExportsFeatureEnabled(e),providers:(0,S.BV)(l,"aws"),providersError:n,providersFetchStatus:i,queryString:r}})),G=(0,d.ZP)((0,p.connect)(z,{})(N));var J=r(52636),H=r(4272),U=r(73727),W=r(98503),K=r(54106),Y=r(50277),Q=r(8748),ee=r(20635),te=r(12289),re=r(40794),se=r(11331),oe=r(73861);const ae={emptyState:{backgroundColor:x.ZP.value,display:"flex",justifyContent:"center",paddingTop:se.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:oe.ZP.value},infoDescription:{color:te.ZP.value,fontSize:re.ZP.value}};class le extends c().Component{constructor(e){super(e),this.state={columns:[],rows:[]},this.initDatum=()=>{const{isAllSelected:e,query:t,report:r,selectedItems:o,intl:a}=this.props;if(!t||!r)return;const i=B(t.group_by),d=(0,f.OA)(t),p=(0,f.qV)(t),u=[],h=(0,P.c)({report:r,idKey:p||(d?"org_entities":i)}),m=p||d?[{title:d?a.formatMessage(n.Z.names,{count:2}):a.formatMessage(n.Z.tagNames)},{title:a.formatMessage(n.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",title:a.formatMessage(n.Z.cost)},h.length&&{transforms:[H.sortable]}),{title:""}]:[Object.assign({orderBy:"account"===i?"account_alias":i,title:a.formatMessage(n.Z.detailsResourceNames,{value:i})},h.length&&{transforms:[H.sortable]}),{title:a.formatMessage(n.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",title:a.formatMessage(n.Z.cost)},h.length&&{transforms:[H.sortable]}),{title:""}];h.map(((r,s)=>{const a=r&&r.label&&null!==r.label?r.label:"",n=this.getMonthOverMonthCost(r,s),h=this.getTotalCost(r,s),m=this.getActions(r,s);let g=c().createElement(U.rU,{to:(0,ee.Z)({basePath:W.Hb.awsDetailsBreakdown,description:r.id,groupBy:p?`${l.P}${p}`:i,groupByOrg:d,id:r.id,orgUnitId:(0,f.OA)(t),query:t,title:r.label,type:r.type})},a);const y=!(a===`no-${i}`||a===`no-${p}`);y||(g=a);const v=r.id&&r.id!==r.label?c().createElement("div",{style:ae.infoDescription},r.id):null;u.push({cells:[{title:c().createElement("div",null,g,v)},{title:c().createElement("div",null,n)},{title:c().createElement("div",null,h)},{title:c().createElement("div",null,m)}],disableSelection:!y,item:r,selected:e||o&&void 0!==o.find((e=>e.id===r.id))})}));const g=[{heightAuto:!0,cells:[{props:{colSpan:5},title:c().createElement(s.Bullseye,null,c().createElement("div",{style:{textAlign:"center"}},c().createElement(s.Spinner,{size:"xl"})))}]}];this.setState({columns:m,loadingRows:g,rows:u,sortBy:{}})},this.getActions=(e,t,r=!1)=>{const{groupBy:s,query:o}=this.props;return c().createElement(Q.e,{groupBy:s,isDisabled:r,item:e,query:o,reportPathsType:"aws"})},this.getEmptyState=()=>{const{query:e,intl:t}=this.props;for(const t of Object.values(e.filter_by))if("*"!==t)return c().createElement(K.c,{filter:t,showMargin:!1});return c().createElement(s.EmptyState,null,c().createElement(s.EmptyStateIcon,{icon:J.Xk}),c().createElement(s.EmptyStateBody,null,t.formatMessage(n.Z.detailsEmptyState)))},this.getMonthOverMonthCost=(e,t)=>{const{intl:r}=this.props,s=(0,A.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),o=null!==e.delta_percent?(0,A.rl)(Math.abs(e.delta_percent)):0,a=!(0===o||"0.00"===o),l=null!==e.delta_percent;let i;return a&&(i="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(i+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(i+=" increase")),l?c().createElement("div",{className:"monthOverMonthOverride"},c().createElement("div",{className:i,key:`month-over-month-cost-${t}`},a?r.formatMessage(n.Z.percent,{value:o}):c().createElement(Y.L,null),Boolean(a&&null!==e.delta_percent&&e.delta_value>0)&&c().createElement("span",{className:"fa fa-sort-up",style:ae.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(a&&null!==e.delta_percent&&e.delta_value<0)&&c().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},ae.infoArrow),ae.infoArrowDesc),key:`month-over-month-icon-${t}`})),c().createElement("div",{style:ae.infoDescription,key:`month-over-month-info-${t}`},(0,D.Y)(s))):(0,D.Tf)()},this.getSortBy=()=>{const{query:e}=this.props,{columns:t}=this.state;let r=-1,s=H.SortByDirection.asc;for(const o of Object.keys(e.order_by)){let a=0;for(const l of t){if(l.orderBy===o){s="asc"===e.order_by[o]?H.SortByDirection.asc:H.SortByDirection.desc,r=a+1;break}a++}}return r>-1?{index:r,direction:s}:{}},this.getTotalCost=(e,t)=>{const{report:r,intl:s}=this.props,o=r&&r.meta&&r.meta.total&&r.meta.total.cost&&r.meta.total.cost.total?r.meta.total.cost.total.value:0,a=0===o?o.toFixed(2):(e.cost.total.value/o*100).toFixed(2);return c().createElement(c().Fragment,null,(0,A.xG)(e.cost.total.value,e.cost.total.units),c().createElement("div",{style:ae.infoDescription,key:`total-cost-${t}`},s.formatMessage(n.Z.percentOfCost,{value:a})))},this.handleOnSelect=(e,t,r)=>{const{onSelected:s}=this.props;let o,a=[];-1===r?o=this.state.rows.map((e=>(e.selected=t,e))):(o=[...this.state.rows],o[r].selected=t,a=[o[r].item]),this.setState({rows:o},(()=>{s&&s(a,t)}))},this.handleOnSort=(e,t,r)=>{const{onSort:s}=this.props,{columns:o}=this.state;s&&s(o[t-1].orderBy,r===H.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{query:t,report:r,selectedItems:s}=this.props,a=r&&r.data?JSON.stringify(r.data):"",l=e.report&&e.report.data?JSON.stringify(e.report.data):"";(0,o.pm)(e.query)===(0,o.pm)(t)&&l===a&&e.selectedItems===s||this.initDatum()}render(){const{intl:e,isLoading:t}=this.props,{columns:r,loadingRows:s,rows:o}=this.state;return c().createElement(c().Fragment,null,c().createElement(H.Table,{"aria-label":e.formatMessage(n.Z.awsDetailsTableAriaLabel),canSelectAll:!1,cells:r,className:"tableOverride",rows:t?s:o,sortBy:this.getSortBy(),onSelect:t?void 0:this.handleOnSelect,onSort:this.handleOnSort,gridBreakPoint:"grid-2xl"},c().createElement(H.TableHeader,null),c().createElement(H.TableBody,null)),Boolean(0===o.length)&&c().createElement("div",{style:ae.emptyState},this.getEmptyState()))}}const ne=(0,d.ZP)(le);var ie=r(55353),ce=r(38434),de=r(7917),pe=r(19853);const ue="aws",he="org",me="aws",ge="tag";class ye extends c().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,orgReport:t,tagReport:r}=this.props,s=[{name:e.formatMessage(n.Z.filterByValues,{value:"account"}),key:"account"},{name:e.formatMessage(n.Z.filterByValues,{value:"service"}),key:"service"},{name:e.formatMessage(n.Z.filterByValues,{value:"region"}),key:"region"}];return t&&t.data&&t.data.length&&s.push({name:e.formatMessage(n.Z.filterByValues,{value:"org_unit_id"}),key:l.dV}),r&&r.data&&r.data.length&&s.push({name:e.formatMessage(n.Z.filterByValues,{value:"tag"}),key:l.up}),s}}componentDidMount(){const{fetchOrg:e,fetchTag:t,orgReportFetchStatus:r,queryString:s,tagReportFetchStatus:o}=this.props;this.setState({categoryOptions:this.getCategoryOptions()},(()=>{1!==r&&e(ue,he,s),1!==o&&t(me,ge,s)}))}componentDidUpdate(e){const{fetchOrg:t,fetchTag:r,orgReport:s,orgReportFetchStatus:o,query:a,queryString:l,tagReport:n,tagReportFetchStatus:i}=this.props;(0,pe.X)(s,e.orgReport)&&(0,pe.X)(n,e.tagReport)?a&&!(0,pe.X)(a,e.query)&&(1!==o&&t(ue,he,l),1!==i&&r(me,ge,l)):this.setState({categoryOptions:this.getCategoryOptions()},(()=>{1!==o&&t(ue,he,l),1!==i&&r(me,ge,l)}))}render(){const{groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isExportDisabled:s,itemsPerPage:o,itemsTotal:a,onBulkSelected:l,onExportClicked:n,onFilterAdded:i,onFilterRemoved:d,orgReport:p,pagination:u,query:h,selectedItems:m,tagReport:g}=this.props,{categoryOptions:y}=this.state;return c().createElement(ie.k,{categoryOptions:y,groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isExportDisabled:s,itemsPerPage:o,itemsTotal:a,onBulkSelected:l,onExportClicked:n,onFilterAdded:i,onFilterRemoved:d,orgReport:p,pagination:u,query:h,resourcePathsType:"aws",selectedItems:m,showBulkSelect:!0,showExport:!0,showFilter:!0,tagReport:g,tagReportPathsType:me})}}const fe=(0,b.X1)(((e,t)=>{const r=(0,o.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3});return{queryString:r,orgReport:ce.zE.selectOrg(e,ue,he,r),orgReportFetchStatus:ce.zE.selectOrgFetchStatus(e,ue,he,r),tagReport:de.ux.selectTag(e,me,ge,r),tagReportFetchStatus:de.ux.selectTagFetchStatus(e,me,ge,r)}})),ve={fetchOrg:ce.Lp.T7,fetchTag:de.xr.Xt},Se=(0,p.connect)(fe,ve)(ye),be=(0,d.ZP)(Se),Ee={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},exclude:{},filter_by:{},group_by:{account:"*"},order_by:{cost:"desc"}},_e="cost",Te="aws";class Be extends c().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,r=B(e.group_by),s=(0,f.qV)(e)||r;return(0,P.c)({report:t,idKey:s===l.dV?"org_entities":s})},this.getExportModal=e=>{const{isAllSelected:t,isExportModalOpen:r,selectedItems:s}=this.state,{query:o,report:a}=this.props,n=B(o.group_by),i=(0,f.qV)(o),d=a&&a.meta?a.meta.count:0,p=[];return s.map((e=>{e.label!==`no-${n}`&&e.label!==`no-${i}`&&p.push(e)})),c().createElement(y.X,{count:t?d:p.length,isAllItems:(t||s.length===d)&&e.length>0,groupBy:i?`${l.P}${i}`:n,isOpen:r,items:p,onClose:this.handleExportModalClose,query:o,reportPathsType:Te})},this.getPagination=(e=!1)=>{const{history:t,intl:r,query:o,report:a}=this.props,l=a&&a.meta?a.meta.count:0,i=a&&a.meta&&a.meta.filter&&a.meta.filter.limit?a.meta.filter.limit:Ee.filter.limit,d=(a&&a.meta&&a.meta.filter&&a.meta.filter.offset?a.meta.filter.offset:Ee.filter.offset)/i+1;return c().createElement(s.Pagination,{isCompact:!e,itemCount:l,onPerPageSelect:(e,r)=>(0,v.xh)(t,o,r),onSetPage:(e,r)=>(0,v.$9)(t,o,a,r),page:d,perPage:i,titles:{paginationTitle:r.formatMessage(n.Z.paginationTitle,{title:r.formatMessage(n.Z.aws),placement:e?"bottom":"top"})},variant:e?s.PaginationVariant.bottom:s.PaginationVariant.top,widgetId:"exports-pagination"+(e?"-bottom":"")})},this.getTable=()=>{const{history:e,query:t,report:r,reportFetchStatus:s}=this.props,{isAllSelected:o,selectedItems:a}=this.state,n=B(t.group_by),i=(0,f.qV)(t);return c().createElement(ne,{groupBy:i?`${l.P}${i}`:n,isAllSelected:o,isLoading:1===s,onSelected:this.handleSelected,onSort:(r,s)=>(0,v.yB)(e,t,r,s),query:t,report:r,selectedItems:a})},this.getToolbar=e=>{const{history:t,query:r,report:s}=this.props,{isAllSelected:o,selectedItems:a}=this.state,n=B(r.group_by),i=(0,f.qV)(r),d=s&&s.meta?s.meta.count:0;return c().createElement(be,{groupBy:i?`${l.P}${i}`:n,isAllSelected:o,isExportDisabled:0===e.length||!o&&0===a.length,itemsPerPage:e.length,itemsTotal:d,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,v.$3)(t,r,e),onFilterRemoved:e=>(0,v.q7)(t,r,e),pagination:this.getPagination(),query:r,selectedItems:a})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{history:t,query:r}=this.props;let s=e,o="*";-1!==e.indexOf(l.dV)&&(s=l.dV.substring(0,l.dV.length),o=e.slice(l.dV.length));const a=Object.assign(Object.assign({},JSON.parse(JSON.stringify(r))),{group_by:{[s]:o},order_by:{cost:"desc"}});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{t.replace((0,v.ZE)(t,a,!0))}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:r,selectedItems:s}=this.state;let o=[...r?this.getComputedItems():s];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.updateReport=()=>{const{costType:e,query:t,location:r,fetchReport:s,history:o,queryString:a}=this.props;r.search?s(Te,_e,a):o.replace((0,v.ZE)(o,{exclude:t?t.exclude:void 0,filter_by:t?t.filter_by:void 0,group_by:t?t.group_by:void 0,order_by:{cost:"desc"},cost_type:e}))},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{location:r,report:s,reportError:o,queryString:a}=this.props,{selectedItems:l}=this.state,n=e.queryString!==a,i=!s&&!o,c=!r.search,d=t.selectedItems!==l;(n||i||c||d)&&this.updateReport()}render(){const{costType:e,currency:t,history:r,providers:s,providersFetchStatus:o,query:a,report:l,reportError:i,reportFetchStatus:d,intl:p}=this.props,y=B(a.group_by),f=this.getComputedItems(),b=p.formatMessage(n.Z.awsDetailsTitle);if(i)return c().createElement(g.W,{title:b});if(1===o)return c().createElement(u.g,{title:b});if(2===o){if(s&&s.meta&&0===s.meta.count)return c().createElement(m.L,{providerType:"aws",title:b});if(!(0,S.g8)(s))return c().createElement(h.J,{title:b})}return c().createElement("div",{style:M.awsDetails},c().createElement(G,{costType:e,currency:t,groupBy:y,onCostTypeSelected:e=>(0,v.jl)(r,a,e),onCurrencySelected:e=>(0,v._s)(r,a,e),onGroupBySelected:this.handleGroupBySelected,report:l}),c().createElement("div",{style:M.content},this.getToolbar(f),this.getExportModal(f),1===d?c().createElement(u.g,null):c().createElement(c().Fragment,null,c().createElement("div",{style:M.tableContainer},this.getTable()),c().createElement("div",{style:M.paginationContainer},c().createElement("div",{style:M.pagination},this.getPagination(!0))))))}}const Pe=(0,b.X1)(((e,t)=>{const r=(0,o.mB)(location.search),s=(0,O.u)(),l=E.iJ.selectIsCurrencyFeatureEnabled(e)?(0,C.z)():void 0,n={delta:"cost",filter:Object.assign(Object.assign({},Ee.filter),r.filter),filter_by:r.filter_by||Ee.filter_by,exclude:r.exclude||Ee.exclude,group_by:r.group_by||Ee.group_by,order_by:r.order_by||Ee.order_by,cost_type:s,currency:l},i=(0,o.pm)(n),c=T.ZV.selectReport(e,Te,_e,i),d=T.ZV.selectReportError(e,Te,_e,i),p=T.ZV.selectReportFetchStatus(e,Te,_e,i),u=(0,a.H)(_.NT),h=_.aX.selectProviders(e,"all",u),m=_.aX.selectProvidersError(e,"all",u),g=_.aX.selectProvidersFetchStatus(e,"all",u);return{costType:s,currency:l,providers:(0,S.BV)(h,"aws"),providersError:m,providersFetchStatus:g,query:n,queryString:i,report:c,reportError:d,reportFetchStatus:p}})),Oe={fetchReport:T.nx.fetchReport},Ce=(0,d.ZP)((0,p.connect)(Pe,Oe)(Be))},49572:(e,t,r)=>{r.d(t,{C:()=>s.Z});var s=r(40961)}}]);
//# sourceMappingURL=../sourcemaps/aws.528ea2ef3714de0cc1b58d79bf53f0c2.js.map