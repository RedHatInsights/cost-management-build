(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[7855],{65734:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>D});var a=s(90392),o=s(86208),l=s(45997),r=s(93952),n=s(19078),i=s(23246),c=s(97522),d=s.n(c),p=s(74806),u=s(43476),h=s(57954),m=s(94377),g=s(45235),y=s(42581),f=s(44696),S=s(64764);const v=(0,m.X1)(((e,t)=>({selectWidgets:S.cm.selectWidgets(e),widgets:S.cm.selectCurrentWidgets(e)}))),C=(0,p.ZP)((0,u.connect)(v,{})(f.X));var b=s(45572),E=s(82462);const M=(0,m.X1)(((e,t)=>({selectWidgets:E.P2.selectWidgets(e),widgets:E.P2.selectCurrentWidgets(e)}))),O=(0,p.ZP)((0,u.connect)(M,{})(b.f)),P=h.Hb.ocpDetails,Z="cost",_="ocp",B=(0,m.X1)(((e,t)=>{const s=(0,a.mB)(location.search),n=(0,i.VL)(s),c=(0,i.pe)(s),p={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign({},s&&s.filter_by&&s.filter_by),n&&{[n]:void 0}),group_by:Object.assign({},n&&{[n]:c})},u=(0,a.pm)(p),h=y.ZV.selectReport(e,_,Z,u),m=y.ZV.selectReportError(e,_,Z,u),f=y.ZV.selectReportFetchStatus(e,_,Z,u),S=(0,o.H)(g.Vp),v=g.aX.selectProviders(e,"ocp",S),b=g.aX.selectProvidersFetchStatus(e,"ocp",S);return{costOverviewComponent:d().createElement(C,{groupBy:n,report:h}),description:s[l.eG],detailsURL:P,emptyStateTitle:t.intl.formatMessage(r.Z.OCPDetailsTitle),groupBy:n,groupByValue:c,historicalDataComponent:d().createElement(O,null),providers:v,providersFetchStatus:b,providerType:"ocp",query:s,queryString:u,report:h,reportError:m,reportFetchStatus:f,reportType:Z,reportPathsType:_,tagReportPathsType:"ocp",title:c}})),k={fetchReport:y.nx.fetchReport},D=(0,p.ZP)((0,u.connect)(B,k)(n.Z))},98430:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>Ze});var a=s(80708),o=s(90392),l=s(86208),r=s(45997),n=s(93952),i=s(7064),c=s(73466),d=s(16679),p=s(13883),u=s(81787),h=s(46774),m=s(97522),g=s.n(m),y=s(74806),f=s(43476),S=s(94377);const v=e=>{const t=new Set;return e.map((e=>{e.hidden&&t.add(e.value)})),t};class C extends g().Component{constructor(e,t){super(e,t),this.defaultState={hiddenColumns:v(this.props.options)},this.state=Object.assign({},this.defaultState),this.getHidden=e=>{const{hiddenColumns:t}=this.state,s=new Set(t);return s.delete(e)||s.add(e),s},this.isHidden=e=>{const{hiddenColumns:t}=this.state;return t.has(e)},this.handleChange=(e,t)=>{const s=this.getHidden(t.target.id);this.setState({hiddenColumns:s})},this.handleClose=()=>{this.setState(Object.assign({},this.defaultState),(()=>{this.props.onClose(!1)}))},this.handleSave=()=>{const{hiddenColumns:e}=this.state;this.props.onSave(e),this.handleClose()},this.selectAll=()=>{this.setState({hiddenColumns:new Set})}}componentDidUpdate(e){const{options:t}=this.props;if(e.options!==t){const e=v(t);this.setState({hiddenColumns:e})}}render(){const{options:e,intl:t}=this.props;return g().createElement(a.Modal,{description:g().createElement(a.TextContent,null,g().createElement(a.Text,{component:a.TextVariants.p},t.formatMessage(n.Z.ManageColumnsDesc)),g().createElement(a.Button,{isInline:!0,onClick:this.selectAll,variant:"link"},t.formatMessage(n.Z.SelectAll))),isOpen:this.props.isOpen,onClose:this.handleClose,title:t.formatMessage(n.Z.ManageColumnsTitle),variant:a.ModalVariant.medium,actions:[g().createElement(a.Button,{key:"save",onClick:this.handleSave,variant:a.ButtonVariant.link},t.formatMessage(n.Z.Save)),g().createElement(a.Button,{key:"cancel",onClick:this.handleClose,variant:a.ButtonVariant.link},t.formatMessage(n.Z.Cancel))]},g().createElement(a.DataList,{"aria-label":t.formatMessage(n.Z.ManageColumnsAriaLabel),id:"table-column-management",isCompact:!0},e.map((e=>g().createElement(a.DataListItem,{"aria-labelledby":e.value,key:e.value},g().createElement(a.DataListItemRow,null,g().createElement(a.DataListCheck,{"aria-labelledby":e.value,checked:!this.isHidden(e.value),name:e.value,id:e.value,onChange:this.handleChange}),g().createElement(a.DataListItemCells,{dataListCells:[g().createElement(a.DataListCell,{id:"table-column-management-item1",key:"table-column-management-item1"},g().createElement("label",{htmlFor:"check1"},t.formatMessage(e.label))),g().createElement(a.DataListCell,{id:"table-column-management-item2",key:"table-column-management-item2"},e.description&&g().createElement("span",null,t.formatMessage(e.description)))]})))))))}}const b=(0,S.X1)((()=>({}))),E=(0,f.connect)(b,{})(C),M=(0,y.ZP)(E);var O=s(23246),P=s(94329),Z=s(8091),_=s(45235),B=s(42581),k=s(26018);function D(e={}){return e.project?"project":e.cluster?"cluster":e.node?"node":"date"}var x=s(31447),F=s(99163),T=s(2088),R=s(33307),q=s(25800),A=s(57116);const I={delta:"cost",filter:{time_scope_units:"month",time_scope_value:-1,resolution:"monthly"}},w=[{label:"cluster",value:"cluster"},{label:"node",value:"node"},{label:"project",value:"project"}];class j extends g().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState)}render(){const{groupBy:e,onGroupByClicked:t,providers:s,providersError:o,report:l,intl:r}=this.props,i=l&&!o&&s&&s.meta&&s.meta.count>0;let c=g().createElement(F.L,null),d=g().createElement(F.L,null),p=g().createElement(F.L,null);if(l&&l.meta&&l.meta.total){const e=l.meta.total.cost&&l.meta.total.cost.total,t=l.meta.total.supplementary&&l.meta.total.supplementary.total,s=l.meta.total.infrastructure&&l.meta.total.infrastructure.total;c=(0,q.xG)(e?l.meta.total.cost.total.value:0,e?l.meta.total.cost.total.units:"USD"),d=(0,q.xG)(t?l.meta.total.supplementary.total.value:0,t?l.meta.total.supplementary.total.units:"USD"),p=(0,q.xG)(s?l.meta.total.infrastructure.total.value:0,s?l.meta.total.infrastructure.total.units:"USD")}return g().createElement("header",{style:A.W.header},g().createElement("div",null,g().createElement(a.Title,{headingLevel:"h1",style:A.W.title,size:a.TitleSizes["2xl"]},r.formatMessage(n.Z.OCPDetailsTitle)),g().createElement(T.X,{getIdKeyForGroupBy:D,groupBy:e,isDisabled:!i,onItemClicked:t,options:w,showTags:!0,tagReportPathsType:"ocp"})),Boolean(i)&&g().createElement("div",null,g().createElement(a.Title,{headingLevel:"h2",style:A.W.costValue,size:a.TitleSizes["4xl"]},g().createElement(a.Tooltip,{content:r.formatMessage(n.Z.DashboardTotalCostTooltip,{infrastructureCost:p,supplementaryCost:d}),enableFlip:!0},g().createElement("span",null,c))),g().createElement("div",{style:A.W.dateTitle},(0,R.J4)())))}}const V=(0,S.X1)(((e,t)=>{const s=(0,o.pm)(I),a=(0,l.H)(_.Vp);return{providers:_.aX.selectProviders(e,"ocp",a),providersError:_.aX.selectProvidersError(e,"ocp",a),providersFetchStatus:_.aX.selectProvidersFetchStatus(e,"ocp",a),queryString:s}})),L=(0,y.ZP)((0,f.connect)(V,{})(j));var $=s(52636),X=s(75795),N=s(55483),G=s(80878),H=s(88268),J=s(16530),W=s(57954),U=s(49382),Q=s(12289),z=s(40794),K=s(11331),Y=s(73861);const ee={emptyState:{backgroundColor:U.ZP.value,display:"flex",justifyContent:"center",paddingTop:K.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:Y.ZP.value},infoDescription:{color:Q.ZP.value,fontSize:z.ZP.value}};const te="infrastructure",se="monthOverMonth",ae="supplementary";class oe extends g().Component{constructor(e){super(e),this.state={columns:[],rows:[]},this.initDatum=()=>{const{hiddenColumns:e,isAllSelected:t,query:s,report:o,selectedItems:l,intl:i}=this.props;if(!s||!o)return;const c=D(s.group_by),d=this.getGroupByTagKey(),p=d?[{title:i.formatMessage(n.Z.TagNames)},{title:i.formatMessage(n.Z.MonthOverMonthChange)},{id:te,title:i.formatMessage(n.Z.OCPDetailsInfrastructureCost)},{id:ae,title:i.formatMessage(n.Z.OCPDetailsSupplementaryCost)},{orderBy:"cost",title:i.formatMessage(n.Z.Cost),transforms:[X.sortable]},{title:""}]:[{orderBy:c,title:i.formatMessage(n.Z.DetailsResourceNames,{value:c}),transforms:[X.sortable]},{id:se,title:i.formatMessage(n.Z.MonthOverMonthChange)},{id:te,orderBy:"infrastructure_cost",title:i.formatMessage(n.Z.OCPDetailsInfrastructureCost)},{id:ae,orderBy:"supplementary_cost",title:i.formatMessage(n.Z.OCPDetailsSupplementaryCost)},{orderBy:"cost",title:i.formatMessage(n.Z.Cost),transforms:[X.sortable]},{title:""}],u=[];(0,x.c)({report:o,idKey:d||c}).map(((e,a)=>{const o=e&&null!==e.label?e.label:"",n=this.getMonthOverMonthCost(e,a),i=this.getInfrastructureCost(e,a),p=this.getSupplementaryCost(e,a),h=this.getTotalCost(e,a),m=this.getActions(e);let y=g().createElement(J.Link,{to:(0,H.T)({basePath:W.Hb.ocpDetailsBreakdown,label:o.toString(),description:e.id,groupBy:d?`${r.P}${d}`:c,query:s})},o);const f=!(o===`no-${c}`||o===`no-${d}`);f||(y=o);const S=e.id&&e.id!==e.label?g().createElement("div",{style:ee.infoDescription},e.id):null;u.push({cells:[{title:g().createElement("div",null,y,S)},{title:g().createElement("div",null,n),id:se},{title:g().createElement("div",null,i),id:te},{title:g().createElement("div",null,p),id:ae},{title:g().createElement("div",null,h)},{title:g().createElement("div",null,m)}],disableSelection:!f,isOpen:!1,item:e,selected:t||l&&void 0!==l.find((t=>t.id===e.id))})}));const h=[{heightAuto:!0,cells:[{props:{colSpan:7},title:g().createElement(a.Bullseye,null,g().createElement("div",{style:{textAlign:"center"}},g().createElement(a.Spinner,{size:"xl"})))}]}],m=p.filter((t=>!e.has(t.id))),y=u.map((t=>{var s=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(s[a[o]]=e[a[o]])}return s}(t,[]);return s.cells=s.cells.filter((t=>!e.has(t.id))),s}));this.setState({columns:m,loadingRows:h,rows:y,sortBy:{}})},this.getActions=e=>{const{groupBy:t,query:s}=this.props;return g().createElement(G.e,{groupBy:t,item:e,providerType:"ocp",query:s,reportPathsType:"ocp",showPriceListOption:"cluster"===t})},this.getEmptyState=()=>{const{query:e,intl:t}=this.props;for(const t of Object.values(e.filter_by))if("*"!==t)return g().createElement(N.c,{filter:t,showMargin:!1});return g().createElement(a.EmptyState,null,g().createElement(a.EmptyStateIcon,{icon:$.Xk}),g().createElement(a.EmptyStateBody,null,t.formatMessage(n.Z.DetailsEmptyState)))},this.getSupplementaryCost=(e,t)=>{const{report:s,intl:a}=this.props,o=s&&s.meta&&s.meta.total&&s.meta.total.cost&&s.meta.total.cost.total?s.meta.total.cost.total.value:0,l=0===o?o.toFixed(2):(e.supplementary.total.value/o*100).toFixed(2);return g().createElement(g().Fragment,null,(0,q.xG)(e.supplementary.total.value,e.supplementary.total.units),g().createElement("div",{style:ee.infoDescription,key:`total-cost-${t}`},a.formatMessage(n.Z.PercentOfCost,{value:l})))},this.getGroupByTagKey=()=>{const{query:e}=this.props;let t;for(const s of Object.keys(e.group_by)){const e=s.indexOf(r.P);if(-1!==e){t=s.substring(e+r.P.length);break}}return t},this.getInfrastructureCost=(e,t)=>{const{report:s,intl:a}=this.props,o=s&&s.meta&&s.meta.total&&s.meta.total.cost&&s.meta.total.cost.total?s.meta.total.cost.total.value:0,l=0===o?o.toFixed(2):(e.infrastructure.total.value/o*100).toFixed(2);return g().createElement(g().Fragment,null,(0,q.xG)(e.infrastructure.total.value,e.infrastructure.total.units),g().createElement("div",{style:ee.infoDescription,key:`total-cost-${t}`},a.formatMessage(n.Z.PercentOfCost,{value:l})))},this.getMonthOverMonthCost=(e,t)=>{const{intl:s}=this.props,a=(0,q.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),o=null!==e.delta_percent?Math.abs(e.delta_percent).toFixed(2):0,l=!(0===o||"0.00"===o),r=null!==e.delta_percent;let i;return l&&(i="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(i+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(i+=" increase")),r?g().createElement("div",{className:"monthOverMonthOverride"},g().createElement("div",{className:i,key:`month-over-month-cost-${t}`},l?s.formatMessage(n.Z.Percent,{value:o}):g().createElement(F.L,null),Boolean(l&&null!==e.delta_percent&&e.delta_value>0)&&g().createElement("span",{className:"fa fa-sort-up",style:ee.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(l&&null!==e.delta_percent&&e.delta_value<0)&&g().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},ee.ininfoArrow),ee.infoArrowDesc),key:`month-over-month-icon-${t}`})),g().createElement("div",{style:ee.infoDescription,key:`month-over-month-info-${t}`},(0,R.Y)(a))):(0,R.Tf)()},this.getSortBy=()=>{const{query:e}=this.props,{columns:t}=this.state;let s=-1,a=X.SortByDirection.asc;for(const o of Object.keys(e.order_by)){let l=0;for(const r of t){if(r.orderBy===o){a="asc"===e.order_by[o]?X.SortByDirection.asc:X.SortByDirection.desc,s=l+1;break}l++}}return s>-1?{index:s,direction:a}:{}},this.getTotalCost=(e,t)=>{const{report:s,intl:a}=this.props,o=s&&s.meta&&s.meta.total&&s.meta.total.cost&&s.meta.total.cost.total?s.meta.total.cost.total.value:0,l=0===o?o.toFixed(2):(e.cost.total.value/o*100).toFixed(2);return g().createElement(g().Fragment,null,(0,q.xG)(e.cost.total.value,e.cost.total.units),g().createElement("div",{style:ee.infoDescription,key:`total-cost-${t}`},a.formatMessage(n.Z.PercentOfCost,{value:l})))},this.handleOnSelect=(e,t,s)=>{const{onSelected:a}=this.props;let o,l=[];-1===s?o=this.state.rows.map((e=>(e.selected=t,e))):(o=[...this.state.rows],o[s].selected=t,l=[o[s].item]),this.setState({rows:o},(()=>{a&&a(l,t)}))},this.handleOnSort=(e,t,s)=>{const{onSort:a}=this.props,{columns:o}=this.state;a&&a(o[t-1].orderBy,s===X.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{hiddenColumns:t,query:s,report:a,selectedItems:l}=this.props,r=a&&a.data?JSON.stringify(a.data):"",n=e.report&&e.report.data?JSON.stringify(e.report.data):"";(0,o.pm)(e.query)===(0,o.pm)(s)&&n===r&&e.selectedItems===l&&e.hiddenColumns===t||this.initDatum()}render(){const{intl:e,isLoading:t}=this.props,{columns:s,loadingRows:a,rows:o}=this.state;return g().createElement(g().Fragment,null,g().createElement(X.Table,{"aria-label":e.formatMessage(n.Z.GCPDetailsTableAriaLabel),canSelectAll:!1,cells:s,className:"tableOverride",rows:t?a:o,sortBy:this.getSortBy(),onSelect:t?void 0:this.handleOnSelect,onSort:this.handleOnSort,gridBreakPoint:"grid-2xl"},g().createElement(X.TableHeader,null),g().createElement(X.TableBody,null)),Boolean(0===o.length)&&g().createElement("div",{style:ee.emptyState},this.getEmptyState()))}}const le=(0,y.ZP)(oe);var re=s(8650),ne=s(28631),ie=s(19853);const ce="tag",de="ocp";class pe extends g().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,s=[{name:e.formatMessage(n.Z.FilterByValues,{value:"cluster"}),key:"cluster"},{name:e.formatMessage(n.Z.FilterByValues,{value:"node"}),key:"node"},{name:e.formatMessage(n.Z.FilterByValues,{value:"project"}),key:"project"},{name:e.formatMessage(n.Z.FilterByValues,{value:"tag"}),key:r.up}];return t&&t.data&&t.data.length?s:s.filter((e=>e.key!==r.up))}}componentDidMount(){const{fetchTag:e,queryString:t}=this.props;e(de,ce,t),this.setState({categoryOptions:this.getCategoryOptions()})}componentDidUpdate(e){const{fetchTag:t,query:s,queryString:a,tagReport:o}=this.props;s&&!(0,ie.X)(s,e.query)&&t(de,ce,a),(0,ie.X)(o,e.tagReport)||this.setState({categoryOptions:this.getCategoryOptions()})}render(){const{groupBy:e,isAllSelected:t,isExportDisabled:s,itemsPerPage:a,itemsTotal:o,onBulkSelected:l,onColumnManagementClicked:r,onExportClicked:n,onFilterAdded:i,onFilterRemoved:c,pagination:d,query:p,selectedItems:u,tagReport:h}=this.props,{categoryOptions:m}=this.state;return g().createElement(re.k,{categoryOptions:m,groupBy:e,isAllSelected:t,isExportDisabled:s,itemsPerPage:a,itemsTotal:o,onBulkSelected:l,onColumnManagementClicked:r,onExportClicked:n,onFilterAdded:i,onFilterRemoved:c,pagination:d,query:p,resourcePathsType:"ocp",selectedItems:u,showBulkSelect:!0,showColumnManagement:!0,showExport:!0,showFilter:!0,tagReport:h})}}const ue=(0,S.X1)(((e,t)=>{const s=(0,o.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1}});return{queryString:s,tagReport:ne.ux.selectTag(e,de,ce,s),tagReportFetchStatus:ne.ux.selectTagFetchStatus(e,de,ce,s)}})),he={fetchTag:ne.xr.Xt},me=(0,f.connect)(ue,he)(pe),ge=(0,y.ZP)(me);var ye=s(98499),fe=s(32412);const Se={content:{paddingBottom:ye.ZP.value,paddingTop:ye.ZP.value},ocpDetails:{minHeight:"100%"},paginationContainer:{marginLeft:ye.ZP.value,marginRight:ye.ZP.value},pagination:{backgroundColor:U.ZP.value,padding:fe.ZP.value},tableContainer:{marginLeft:ye.ZP.value,marginRight:ye.ZP.value}},ve={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:{},group_by:{project:"*"},order_by:{cost:"desc"}},Ce=[{label:n.Z.MonthOverMonthChange,value:se},{description:n.Z.OCPDetailsInfrastructureCostDesc,label:n.Z.OCPDetailsInfrastructureCost,value:te,hidden:!0},{description:n.Z.OCPDetailsInfrastructureCostDesc,label:n.Z.OCPDetailsSupplementaryCost,value:ae,hidden:!0}],be="cost",Ee="ocp";class Me extends g().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],hiddenColumns:v(Ce),isAllSelected:!1,isColumnManagementModalOpen:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getColumnManagementModal=()=>{const{hiddenColumns:e,isColumnManagementModalOpen:t}=this.state,s=(0,i.cloneDeep)(Ce);return s.map((t=>{t.hidden=e.has(t.value)})),g().createElement(M,{isOpen:t,options:s,onClose:this.handleColumnManagementModalClose,onSave:this.handleColumnManagementModalSave})},this.getComputedItems=()=>{const{query:e,report:t}=this.props,s=D(e.group_by),a=(0,O.qV)(e);return(0,x.c)({report:t,idKey:a||s})},this.getExportModal=e=>{const{isAllSelected:t,isExportModalOpen:s,selectedItems:a}=this.state,{query:o,report:l}=this.props,n=D(o.group_by),i=(0,O.qV)(o),c=l&&l.meta?l.meta.count:0,d=[];return a.map((e=>{e.label!==`no-${n}`&&e.label!==`no-${i}`&&d.push(e)})),g().createElement(h.X,{isAllItems:(t||a.length===c)&&e.length>0,groupBy:i?`${r.P}${i}`:n,isOpen:s,items:d,onClose:this.handleExportModalClose,query:o,reportPathsType:Ee})},this.getPagination=(e=!1)=>{const{report:t}=this.props,s=t&&t.meta?t.meta.count:0,o=t&&t.meta&&t.meta.filter&&t.meta.filter.limit?t.meta.filter.limit:ve.filter.limit,l=(t&&t.meta&&t.meta.filter&&t.meta.filter.offset?t.meta.filter.offset:ve.filter.offset)/o+1;return g().createElement(a.Pagination,{isCompact:!e,itemCount:s,onPerPageSelect:this.handlePerPageSelect,onSetPage:this.handleSetPage,page:l,perPage:o,variant:e?a.PaginationVariant.bottom:a.PaginationVariant.top,widgetId:"`pagination${isBottom ? '-bottom' : ''}`"})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:s}=this.props,{hiddenColumns:a,isAllSelected:o,selectedItems:l}=this.state,n=D(e.group_by),i=(0,O.qV)(e);return g().createElement(le,{groupBy:i?`${r.P}${i}`:n,hiddenColumns:a,isAllSelected:o,isLoading:1===s,onSelected:this.handleSelected,onSort:this.handleSort,query:e,report:t,selectedItems:l})},this.getToolbar=e=>{const{query:t,report:s}=this.props,{isAllSelected:a,selectedItems:o}=this.state,l=D(t.group_by),n=(0,O.qV)(t),i=s&&s.meta?s.meta.count:0;return g().createElement(ge,{groupBy:n?`${r.P}${n}`:l,isAllSelected:a,isExportDisabled:0===e.length||!a&&0===o.length,itemsPerPage:e.length,itemsTotal:i,onBulkSelected:this.handleBulkSelected,onColumnManagementClicked:this.handleColumnManagementModalOpen,onExportClicked:this.handleExportModalOpen,onFilterAdded:this.handleFilterAdded,onFilterRemoved:this.handleFilterRemoved,pagination:this.getPagination(),query:t,selectedItems:o})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleColumnManagementModalClose=e=>{this.setState({isColumnManagementModalOpen:e})},this.handleColumnManagementModalOpen=()=>{this.setState({isColumnManagementModalOpen:!0})},this.handleColumnManagementModalSave=e=>{this.setState({hiddenColumns:e})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleFilterAdded=(e,t)=>{const{history:s,query:a}=this.props,o=(0,Z.W)(a,e,t);s.replace(this.getRouteForQuery(o,!0))},this.handleFilterRemoved=(e,t)=>{const{history:s,query:a}=this.props,o=(0,Z.U)(a,e,t);s.replace(this.getRouteForQuery(o,!0))},this.handleGroupByClick=e=>{const{history:t,query:s}=this.props,a=e,o=Object.assign(Object.assign({},JSON.parse(JSON.stringify(s))),{group_by:{[a]:"*"},order_by:{cost:"desc"}});t.replace(this.getRouteForQuery(o,!0)),this.setState({isAllSelected:!1,selectedItems:[]})},this.handlePerPageSelect=(e,t)=>{const{history:s,query:a}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(a)));o.filter=Object.assign(Object.assign({},a.filter),{limit:t});const l=this.getRouteForQuery(o,!0);s.replace(l)},this.handleSelected=(e,t=!1)=>{const{isAllSelected:s,selectedItems:a}=this.state;let o=[...s?this.getComputedItems():a];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.handleSetPage=(e,t)=>{const{history:s,query:a,report:o}=this.props,l=o&&o.meta&&o.meta.filter&&o.meta.filter.limit?o.meta.filter.limit:ve.filter.limit,r=t*l-l,n=Object.assign({},JSON.parse(JSON.stringify(a)));n.filter=Object.assign(Object.assign({},a.filter),{offset:r});const i=this.getRouteForQuery(n);s.replace(i)},this.handleSort=(e,t)=>{const{history:s,query:a}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(a)));o.order_by={},o.order_by[e]=t?"asc":"desc";const l=this.getRouteForQuery(o);s.replace(l)},this.updateReport=()=>{const{query:e,location:t,fetchReport:s,history:a,queryString:o}=this.props;t.search?s(Ee,be,o):a.replace(this.getRouteForQuery({filter_by:e?e.filter_by:void 0,group_by:e?e.group_by:void 0,order_by:{cost:"desc"}}))},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleColumnManagementModalClose=this.handleColumnManagementModalClose.bind(this),this.handleColumnManagementModalOpen=this.handleColumnManagementModalOpen.bind(this),this.handleColumnManagementModalSave=this.handleColumnManagementModalSave.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleFilterAdded=this.handleFilterAdded.bind(this),this.handleFilterRemoved=this.handleFilterRemoved.bind(this),this.handlePerPageSelect=this.handlePerPageSelect.bind(this),this.handleSelected=this.handleSelected.bind(this),this.handleSetPage=this.handleSetPage.bind(this),this.handleSort=this.handleSort.bind(this)}componentDidMount(){const{resetState:e}=this.props;e(),this.updateReport()}componentDidUpdate(e,t){const{location:s,report:a,reportError:o,queryString:l}=this.props,{selectedItems:r}=this.state,n=e.queryString!==l,i=!a&&!o,c=!s.search,d=t.selectedItems!==r;(n||i||c||d)&&this.updateReport()}getRouteForQuery(e,t=!1){const{history:s}=this.props;return t&&(e.filter=Object.assign(Object.assign({},e.filter),{offset:ve.filter.offset})),`${s.location.pathname}?${(0,o.IV)(e)}`}render(){const{providers:e,providersFetchStatus:t,query:s,report:a,reportError:o,reportFetchStatus:l,intl:r}=this.props,i=D(s.group_by),h=this.getComputedItems(),m=r.formatMessage(n.Z.OCPDetailsTitle);if(o)return g().createElement(u.Z,{title:m});if(1===t&&1===l)return g().createElement(c.Z,{title:m});if(2===t&&2===l){if(e&&e.meta&&0===e.meta.count&&2===t)return g().createElement(p.Z,{providerType:"ocp",title:m});if(!(0,P.g8)(e))return g().createElement(d.Z,{title:m})}return g().createElement("div",{style:Se.ocpDetails},g().createElement(L,{groupBy:i,onGroupByClicked:this.handleGroupByClick,report:a}),g().createElement("div",{style:Se.content},this.getToolbar(h),this.getExportModal(h),this.getColumnManagementModal(),1===l?g().createElement(c.Z,null):g().createElement(g().Fragment,null,g().createElement("div",{style:Se.tableContainer},this.getTable()),g().createElement("div",{style:Se.paginationContainer},g().createElement("div",{style:Se.pagination},this.getPagination(!0))))))}}const Oe=(0,S.X1)(((e,t)=>{const s=(0,o.mB)(location.search),a={delta:"cost",filter:Object.assign(Object.assign({},ve.filter),s.filter),filter_by:s.filter_by||ve.filter_by,group_by:s.group_by||ve.group_by,order_by:s.order_by||ve.order_by},r=(0,o.pm)(a),n=B.ZV.selectReport(e,Ee,be,r),i=B.ZV.selectReportError(e,Ee,be,r),c=B.ZV.selectReportFetchStatus(e,Ee,be,r),d=(0,l.H)(_.Vp);return{providers:_.aX.selectProviders(e,"ocp",d),providersFetchStatus:_.aX.selectProvidersFetchStatus(e,"ocp",d),query:a,queryString:r,report:n,reportError:i,reportFetchStatus:c}})),Pe={fetchReport:B.nx.fetchReport,resetState:k.Aw.oA},Ze=(0,y.ZP)((0,f.connect)(Oe,Pe)(Me))}}]);
//# sourceMappingURL=ea30da14a2b0db016b72.bundle.js.map