(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[373],{37692:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>F});var r=s(95078),o=s(86208),i=s(45997),a=s(19078),l=s(23246),n=s(97522),c=s.n(n),d=s(91768),p=s(43476),h=s(57954),u=s(94377),m=s(45235),g=s(62784),y=s(44696),f=s(17287);const S=(0,u.X1)(((e,t)=>({selectWidgets:f.XL.selectWidgets(e),widgets:f.XL.selectCurrentWidgets(e)}))),v=(0,d.Z)()((0,p.connect)(S,{})(y.X));var b=s(45572),_=s(17303);const E=(0,u.X1)(((e,t)=>({selectWidgets:_.Vf.selectWidgets(e),widgets:_.Vf.selectCurrentWidgets(e)}))),O=(0,d.Z)()((0,p.connect)(E,{})(b.f)),P=h.Hb.awsDetails,B="cost",w="aws",R=(0,u.X1)(((e,t)=>{const s=(0,r.mB)(location.search),a=(0,l.OA)(s),n=a?i.dV:(0,l.VL)(s),d=a||(0,l.pe)(s),p={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign(Object.assign({},s&&s.filter_by&&s.filter_by),n&&{[n]:void 0}),s&&s.filter&&s.filter.account&&{[`${i.Sq}account`]:s.filter.account}),group_by:Object.assign({},n&&{[n]:d})},h=(0,r.pm)(p),u=g.ZV.selectReport(e,w,B,h),y=g.ZV.selectReportError(e,w,B,h),f=g.ZV.selectReportFetchStatus(e,w,B,h),S=(0,o.H)(m.JL),b=m.aX.selectProviders(e,"aws",S),_=m.aX.selectProvidersFetchStatus(e,"aws",S);return{costOverviewComponent:c().createElement(v,{groupBy:n,query:s,report:u}),description:s[i.eG],detailsURL:P,emptyStateTitle:t.t("navigation.aws_details"),groupBy:n,groupByValue:d,historicalDataComponent:c().createElement(O,null),providers:b,providersFetchStatus:_,providerType:"aws",query:s,queryString:h,report:u,reportError:y,reportFetchStatus:f,reportType:B,reportPathsType:w,tagReportPathsType:"aws",title:s[i.yG]?s[i.yG]:d}})),x={fetchReport:g.nx.fetchReport},F=(0,d.Z)()((0,p.connect)(R,x)(a.Z))},22452:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>be});var r=s(97066),o=s(95078),i=s(86208),a=s(45997),l=s(73466),n=s(16679),c=s(13883),d=s(81787),p=s(46774),h=s(23246),u=s(94329),m=s(8091),g=s(97522),y=s.n(g),f=s(91768),S=s(43476),v=s(94377),b=s(45235),_=s(62784);function E(e={}){return e.account?"account":e.instance_type?"instance_type":e.org_unit_id?"org_unit_id":e.region?"region":e.service?"service":"date"}var O=s(31447),P=s(49382),B=s(98499),w=s(32412);const R={awsDetails:{minHeight:"100%"},content:{paddingBottom:B.ZP.value,paddingTop:B.ZP.value},paginationContainer:{marginLeft:B.ZP.value,marginRight:B.ZP.value},pagination:{backgroundColor:P.ZP.value,padding:w.ZP.value},tableContainer:{marginLeft:B.ZP.value,marginRight:B.ZP.value}};var x=s(2088),F=s(33307),k=s(901),q=s(33605),C=s(54881),T=s(48196);const A={costValue:{marginTop:0,marginBottom:0},costLabelUnit:{fontSize:C.ZP.value,color:q.ZP.var},dateTitle:{textAlign:"end"},header:{display:"flex",justifyContent:"space-between",padding:B.ZP.var,backgroundColor:P.ZP.var},title:{paddingBottom:T.ZP.var}},Z={delta:"cost",filter:{time_scope_units:"month",time_scope_value:-1,resolution:"monthly"}},D=[{label:"account",value:"account"},{label:"service",value:"service"},{label:"region",value:"region"}];class I extends y().Component{render(){const{groupBy:e,onGroupByClicked:t,providers:s,providersError:o,report:i,t:a}=this.props,l=i&&!o&&s&&s.meta&&s.meta.count>0,n=i&&i.meta&&i.meta.total&&i.meta.total.cost&&i.meta.total.cost.total;return y().createElement("header",{style:A.header},y().createElement("div",null,y().createElement(r.Title,{headingLevel:"h1",style:A.title,size:r.TitleSizes["2xl"]},a("navigation.aws_details")),y().createElement(x.X,{getIdKeyForGroupBy:E,groupBy:e,isDisabled:!l,onItemClicked:t,options:D,orgReportPathsType:"aws",showOrgs:!0,showTags:!0,tagReportPathsType:"aws"})),Boolean(l)&&y().createElement("div",null,y().createElement(r.Title,{headingLevel:"h2",style:A.costValue,size:r.TitleSizes["4xl"]},(0,k.xG)(n?i.meta.total.cost.total.value:0)),y().createElement("div",{style:A.dateTitle},(0,F.J4)())))}}const V=(0,v.X1)(((e,t)=>{const s=(0,o.pm)(Z),r=(0,i.H)(b.JL);return{providers:b.aX.selectProviders(e,"aws",r),providersError:b.aX.selectProvidersError(e,"aws",r),providersFetchStatus:b.aX.selectProvidersFetchStatus(e,"aws",r),queryString:s}})),j=(0,f.Z)()((0,S.connect)(V,{})(I));var M=s(54390),X=s(6877),$=s(55483),L=s(99163),N=s(80878),J=s(88268),G=s(16530),z=s(57954),Q=s(12289),H=s(40794),U=s(11331),W=s(73861);const K={emptyState:{backgroundColor:P.ZP.value,display:"flex",justifyContent:"center",paddingTop:U.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:W.ZP.value},infoDescription:{color:Q.ZP.value,fontSize:H.ZP.value}};class Y extends y().Component{constructor(e){super(e),this.state={columns:[],rows:[]},this.initDatum=()=>{const{isAllSelected:e,query:t,report:s,selectedItems:o,t:i}=this.props;if(!t||!s)return;const l=E(t.group_by),n=(0,h.OA)(t),c=(0,h.qV)(t),d=(0,k.xG)(s&&s.meta&&s.meta.total&&s.meta.total.cost&&s.meta.total.cost.total?s.meta.total.cost.total.value:0),p=c||n?[{title:i(n?"aws_details.org_unit_column_title":"details.tag_names")},{title:i("details.month_over_month_change")},{orderBy:"cost",title:i("cost",{total:d}),transforms:[X.sortable]},{title:""}]:[{orderBy:"account"===l?"account_alias":l,title:i("details.resource_names",{groupBy:l}),transforms:[X.sortable]},{title:i("details.month_over_month_change")},{orderBy:"cost",title:i("cost"),transforms:[X.sortable]},{title:""}],u=[];(0,O.c)({report:s,idKey:c||(n?"org_entities":l)}).map(((s,r)=>{const i=s&&s.label&&null!==s.label?s.label:"",d=this.getMonthOverMonthCost(s,r),p=this.getTotalCost(s,r),m=this.getActions(s,r);let g=y().createElement(G.Link,{to:(0,J.Z)({basePath:z.Hb.awsDetailsBreakdown,description:s.id,groupBy:c?`${a.P}${c}`:l,groupByOrg:n,id:s.id,orgUnitId:(0,h.OA)(t),query:t,title:s.label,type:s.type})},i);const f=!(i===`no-${l}`||i===`no-${c}`);f||(g=i);const S=s.id&&s.id!==s.label?y().createElement("div",{style:K.infoDescription},s.id):null;u.push({cells:[{title:y().createElement("div",null,g,S)},{title:y().createElement("div",null,d)},{title:y().createElement("div",null,p)},{title:y().createElement("div",null,m)}],disableSelection:!f,item:s,selected:e||o&&void 0!==o.find((e=>e.id===s.id))})}));const m=[{heightAuto:!0,cells:[{props:{colSpan:5},title:y().createElement(r.Bullseye,null,y().createElement("div",{style:{textAlign:"center"}},y().createElement(r.Spinner,{size:"xl"})))}]}];this.setState({columns:p,loadingRows:m,rows:u,sortBy:{}})},this.getActions=(e,t,s=!1)=>{const{groupBy:r,query:o}=this.props;return y().createElement(N.e,{groupBy:r,isDisabled:s,item:e,query:o,reportPathsType:"aws"})},this.getEmptyState=()=>{const{query:e,t}=this.props;for(const t of Object.values(e.filter_by))if("*"!==t)return y().createElement($.c,{filter:t,showMargin:!1});return y().createElement(r.EmptyState,null,y().createElement(r.EmptyStateIcon,{icon:M.Xk}),y().createElement(r.EmptyStateBody,null,t("details.empty_state")))},this.getMonthOverMonthCost=(e,t)=>{const{t:s}=this.props,r=(0,k.xG)(Math.abs(e.cost.total.value-e.delta_value)),o=null!==e.delta_percent?Math.abs(e.delta_percent).toFixed(2):0,i=!(0===o||"0.00"===o),a=null!==e.delta_percent;let l;return i&&(l="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(l+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(l+=" increase")),a?y().createElement("div",{className:"monthOverMonthOverride"},y().createElement("div",{className:l,key:`month-over-month-cost-${t}`},i?s("percent",{value:o}):y().createElement(L.L,null),Boolean(i&&null!==e.delta_percent&&e.delta_value>0)&&y().createElement("span",{className:"fa fa-sort-up",style:K.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(i&&null!==e.delta_percent&&e.delta_value<0)&&y().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},K.infoArrow),K.infoArrowDesc),key:`month-over-month-icon-${t}`})),y().createElement("div",{style:K.infoDescription,key:`month-over-month-info-${t}`},(0,F.Y)(r))):(0,F.Tf)()},this.getSortBy=()=>{const{query:e}=this.props,{columns:t}=this.state;let s=-1,r=X.SortByDirection.asc;for(const o of Object.keys(e.order_by)){let i=0;for(const a of t){if(a.orderBy===o){r="asc"===e.order_by[o]?X.SortByDirection.asc:X.SortByDirection.desc,s=i+1;break}i++}}return s>-1?{index:s,direction:r}:{}},this.getTotalCost=(e,t)=>{const{report:s,t:r}=this.props,o=s&&s.meta&&s.meta.total&&s.meta.total.cost&&s.meta.total.cost.total?s.meta.total.cost.total.value:0,i=0===o?o.toFixed(2):(e.cost.total.value/o*100).toFixed(2);return y().createElement(y().Fragment,null,(0,k.xG)(e.cost.total.value),y().createElement("div",{style:K.infoDescription,key:`total-cost-${t}`},r("percent_of_cost",{value:i})))},this.handleOnSelect=(e,t,s)=>{const{onSelected:r}=this.props;let o,i=[];-1===s?o=this.state.rows.map((e=>(e.selected=t,e))):(o=[...this.state.rows],o[s].selected=t,i=[o[s].item]),this.setState({rows:o},(()=>{r&&r(i,t)}))},this.handleOnSort=(e,t,s)=>{const{onSort:r}=this.props,{columns:o}=this.state;r&&r(o[t-1].orderBy,s===X.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{query:t,report:s,selectedItems:r}=this.props,i=s&&s.data?JSON.stringify(s.data):"",a=e.report&&e.report.data?JSON.stringify(e.report.data):"";(0,o.pm)(e.query)===(0,o.pm)(t)&&a===i&&e.selectedItems===r||this.initDatum()}render(){const{isLoading:e}=this.props,{columns:t,loadingRows:s,rows:r}=this.state;return y().createElement(y().Fragment,null,y().createElement(X.Table,{"aria-label":"details-table",canSelectAll:!1,cells:t,className:"tableOverride",rows:e?s:r,sortBy:this.getSortBy(),onSelect:e?void 0:this.handleOnSelect,onSort:this.handleOnSort,gridBreakPoint:"grid-2xl"},y().createElement(X.TableHeader,null),y().createElement(X.TableBody,null)),Boolean(0===r.length)&&y().createElement("div",{style:K.emptyState},this.getEmptyState()))}}const ee=(0,f.Z)()(Y);var te=s(8650),se=s(38434),re=s(28631),oe=s(19853);const ie="aws",ae="org",le="aws",ne="tag";class ce extends y().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{orgReport:e,t,tagReport:s}=this.props,r=[{name:t("filter_by.values.account"),key:"account"},{name:t("filter_by.values.service"),key:"service"},{name:t("filter_by.values.region"),key:"region"}];return e&&e.data&&e.data.length>0&&r.push({name:t("filter_by.values.org_unit_id"),key:a.dV}),s&&s.data&&s.data.length>0&&r.push({name:t("filter_by.values.tag"),key:a.up}),r}}componentDidMount(){const{fetchOrg:e,fetchTag:t,queryString:s}=this.props;e(ie,ae,s),t(le,ne,s),this.setState({categoryOptions:this.getCategoryOptions()})}componentDidUpdate(e){const{fetchOrg:t,fetchTag:s,orgReport:r,query:o,queryString:i,tagReport:a}=this.props;o&&!(0,oe.X)(o,e.query)&&(t(ie,ae,i),s(le,ne,i)),(0,oe.X)(r,e.orgReport)&&(0,oe.X)(a,e.tagReport)||this.setState({categoryOptions:this.getCategoryOptions()})}render(){const{groupBy:e,isAllSelected:t,isBulkSelectDisabled:s,isExportDisabled:r,itemsPerPage:o,itemsTotal:i,onBulkSelected:a,onExportClicked:l,onFilterAdded:n,onFilterRemoved:c,orgReport:d,pagination:p,query:h,selectedItems:u,tagReport:m}=this.props,{categoryOptions:g}=this.state;return y().createElement(te.k,{categoryOptions:g,groupBy:e,isAllSelected:t,isBulkSelectDisabled:s,isExportDisabled:r,itemsPerPage:o,itemsTotal:i,onBulkSelected:a,onExportClicked:l,onFilterAdded:n,onFilterRemoved:c,orgReport:d,pagination:p,query:h,resourcePathsType:"aws",selectedItems:u,showBulkSelect:!0,showExport:!0,showFilter:!0,tagReport:m})}}const de=(0,v.X1)(((e,t)=>{const s=(0,o.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1}});return{queryString:s,orgReport:se.zE.selectOrg(e,ie,ae,s),orgReportFetchStatus:se.zE.selectOrgFetchStatus(e,ie,ae,s),tagReport:re.ux.selectTag(e,le,ne,s),tagReportFetchStatus:re.ux.selectTagFetchStatus(e,le,ne,s)}})),pe={fetchOrg:se.Lp.T7,fetchTag:re.xr.Xt},he=(0,S.connect)(de,pe)(ce),ue=(0,f.Z)()(he),me={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:{},group_by:{account:"*"},order_by:{cost:"desc"}},ge="cost",ye="aws";class fe extends y().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,s=E(e.group_by),r=(0,h.qV)(e)||s;return(0,O.c)({report:t,idKey:r===a.dV?"org_entities":r})},this.getExportModal=e=>{const{isAllSelected:t,isExportModalOpen:s,selectedItems:r}=this.state,{query:o,report:i}=this.props,l=E(o.group_by),n=(0,h.qV)(o),c=i&&i.meta?i.meta.count:0,d=[];return r.map((e=>{e.label!==`no-${l}`&&e.label!==`no-${n}`&&d.push(e)})),y().createElement(p.X,{isAllItems:(t||r.length===c)&&e.length>0,groupBy:n?`${a.P}${n}`:l,isOpen:s,items:d,onClose:this.handleExportModalClose,query:o,reportPathsType:ye})},this.getPagination=(e=!1)=>{const{report:t}=this.props,s=t&&t.meta?t.meta.count:0,o=t&&t.meta&&t.meta.filter&&t.meta.filter.limit?t.meta.filter.limit:me.filter.limit,i=(t&&t.meta&&t.meta.filter&&t.meta.filter.offset?t.meta.filter.offset:me.filter.offset)/o+1;return y().createElement(r.Pagination,{isCompact:!e,itemCount:s,onPerPageSelect:this.handlePerPageSelect,onSetPage:this.handleSetPage,page:i,perPage:o,variant:e?r.PaginationVariant.bottom:r.PaginationVariant.top,widgetId:"`pagination${isBottom ? '-bottom' : ''}`"})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:s}=this.props,{isAllSelected:r,selectedItems:o}=this.state,i=E(e.group_by),l=(0,h.qV)(e);return y().createElement(ee,{groupBy:l?`${a.P}${l}`:i,isAllSelected:r,isLoading:1===s,onSelected:this.handleSelected,onSort:this.handleSort,query:e,report:t,selectedItems:o})},this.getToolbar=e=>{const{query:t,report:s}=this.props,{isAllSelected:r,selectedItems:o}=this.state,i=E(t.group_by),l=(0,h.qV)(t),n=s&&s.meta?s.meta.count:0;return y().createElement(ue,{groupBy:l?`${a.P}${l}`:i,isAllSelected:r,isExportDisabled:0===e.length||!r&&0===o.length,itemsPerPage:e.length,itemsTotal:n,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:this.handleFilterAdded,onFilterRemoved:this.handleFilterRemoved,pagination:this.getPagination(),query:t,selectedItems:o})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleFilterAdded=(e,t)=>{const{history:s,query:r}=this.props,o=(0,m.W)(r,e,t);s.replace(this.getRouteForQuery(o,!0))},this.handleFilterRemoved=(e,t)=>{const{history:s,query:r}=this.props,o=(0,m.U)(r,e,t);s.replace(this.getRouteForQuery(o,!0))},this.handleGroupByClick=e=>{const{history:t,query:s}=this.props;let r=e,o="*";-1!==e.indexOf(a.dV)&&(r=a.dV.substring(0,a.dV.length),o=e.slice(a.dV.length));const i=Object.assign(Object.assign({},JSON.parse(JSON.stringify(s))),{group_by:{[r]:o},order_by:{cost:"desc"}});t.replace(this.getRouteForQuery(i,!0)),this.setState({isAllSelected:!1,selectedItems:[]})},this.handlePerPageSelect=(e,t)=>{const{history:s,query:r}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(r)));o.filter=Object.assign(Object.assign({},r.filter),{limit:t});const i=this.getRouteForQuery(o,!0);s.replace(i)},this.handleSelected=(e,t=!1)=>{const{isAllSelected:s,selectedItems:r}=this.state;let o=[...s?this.getComputedItems():r];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.handleSetPage=(e,t)=>{const{history:s,query:r,report:o}=this.props,i=o&&o.meta&&o.meta.filter&&o.meta.filter.limit?o.meta.filter.limit:me.filter.limit,a=t*i-i,l=Object.assign({},JSON.parse(JSON.stringify(r)));l.filter=Object.assign(Object.assign({},r.filter),{offset:a});const n=this.getRouteForQuery(l);s.replace(n)},this.handleSort=(e,t)=>{const{history:s,query:r}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(r)));o.order_by={},o.order_by[e]=t?"asc":"desc";const i=this.getRouteForQuery(o);s.replace(i)},this.updateReport=()=>{const{query:e,location:t,fetchReport:s,history:r,queryString:o}=this.props;t.search?s(ye,ge,o):r.replace(this.getRouteForQuery({filter_by:e?e.filter_by:void 0,group_by:e?e.group_by:void 0,order_by:{cost:"desc"}}))},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleFilterAdded=this.handleFilterAdded.bind(this),this.handleFilterRemoved=this.handleFilterRemoved.bind(this),this.handlePerPageSelect=this.handlePerPageSelect.bind(this),this.handleSelected=this.handleSelected.bind(this),this.handleSetPage=this.handleSetPage.bind(this),this.handleSort=this.handleSort.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{location:s,report:r,reportError:o,queryString:i}=this.props,{selectedItems:a}=this.state,l=e.queryString!==i,n=!r&&!o,c=!s.search,d=t.selectedItems!==a;(l||n||c||d)&&this.updateReport()}getRouteForQuery(e,t=!1){const{history:s}=this.props;return t&&(e.filter=Object.assign(Object.assign({},e.filter),{offset:me.filter.offset})),`${s.location.pathname}?${(0,o.IV)(e)}`}render(){const{providers:e,providersFetchStatus:t,query:s,report:r,reportError:o,reportFetchStatus:i,t:a}=this.props,p=E(s.group_by),h=this.getComputedItems(),m=a("navigation.aws_details");if(o)return y().createElement(d.Z,{title:m});if(1===t&&1===i)return y().createElement(l.Z,{title:m});if(2===t&&2===i){if(e&&e.meta&&0===e.meta.count&&2===t)return y().createElement(c.Z,{providerType:"aws",title:m});if(!(0,u.g8)(e))return y().createElement(n.Z,{title:m})}return y().createElement("div",{style:R.awsDetails},y().createElement(j,{groupBy:p,onGroupByClicked:this.handleGroupByClick,report:r}),y().createElement("div",{style:R.content},this.getToolbar(h),this.getExportModal(h),1===i?y().createElement(l.Z,null):y().createElement(y().Fragment,null,y().createElement("div",{style:R.tableContainer},this.getTable()),y().createElement("div",{style:R.paginationContainer},y().createElement("div",{style:R.pagination},this.getPagination(!0))))))}}const Se=(0,v.X1)(((e,t)=>{const s=(0,o.mB)(location.search),r={delta:"cost",filter:Object.assign(Object.assign({},me.filter),s.filter),filter_by:s.filter_by||me.filter_by,group_by:s.group_by||me.group_by,order_by:s.order_by||me.order_by},a=(0,o.pm)(r),l=_.ZV.selectReport(e,ye,ge,a),n=_.ZV.selectReportError(e,ye,ge,a),c=_.ZV.selectReportFetchStatus(e,ye,ge,a),d=(0,i.H)(b.JL);return{providers:b.aX.selectProviders(e,"aws",d),providersFetchStatus:b.aX.selectProvidersFetchStatus(e,"aws",d),query:r,queryString:a,report:l,reportError:n,reportFetchStatus:c}})),ve={fetchReport:_.nx.fetchReport},be=(0,f.Z)()((0,S.connect)(Se,ve)(fe))}}]);
//# sourceMappingURL=873f8335edf4ddf87c1c.bundle.js.map