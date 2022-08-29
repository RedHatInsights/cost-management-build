"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[7855],{49572:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s(22217).Z},38792:(e,t,s)=>{s.r(t),s.d(t,{default:()=>k});var a=s(90392),o=s(86208),l=s(45997),n=s(93952),r=s(92950),i=s.n(r),c=s(74806),d=s(98147),p=s(28259),u=s(49572),h=s(84072),m=s(94676),g=s(94377),y=s(45235),f=s(42581),S=s(12845),v=s(64764);const b=(0,g.X1)(((e,t)=>({selectWidgets:v.cm.selectWidgets(e),widgets:v.cm.selectCurrentWidgets(e)}))),C=(0,c.ZP)((0,d.connect)(b,{})(S.X));var E=s(52211),M=s(82462);const O=(0,g.X1)(((e,t)=>({selectWidgets:M.P2.selectWidgets(e),widgets:M.P2.selectCurrentWidgets(e)}))),P=(0,c.ZP)((0,d.connect)(O,{})(E.f)),Z=p.Hb.ocpDetails,B="cost",_="ocp",x=(0,g.X1)(((e,t)=>{const s=(0,a.mB)(location.search),r=(0,h.VL)(s),c=(0,h.pe)(s),d={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign({},s&&s.filter_by&&s.filter_by),r&&{[r]:void 0}),group_by:Object.assign({},r&&{[r]:c})},p=(0,a.pm)(d),u=f.ZV.selectReport(e,_,B,p),g=f.ZV.selectReportError(e,_,B,p),S=f.ZV.selectReportFetchStatus(e,_,B,p),v=(0,o.H)(y.NT),b=y.aX.selectProviders(e,"all",v),E=y.aX.selectProvidersFetchStatus(e,"all",v);return{costOverviewComponent:i().createElement(C,{groupBy:r,report:u}),description:s[l.eG],detailsURL:Z,emptyStateTitle:t.intl.formatMessage(n.Z.ocpDetailsTitle),groupBy:r,groupByValue:c,historicalDataComponent:i().createElement(P,null),providers:(0,m.BV)(b,"ocp"),providersFetchStatus:E,providerType:"ocp",query:s,queryString:p,report:u,reportError:g,reportFetchStatus:S,reportType:B,reportPathsType:_,tagReportPathsType:"ocp",title:c}})),F={fetchReport:f.nx.fetchReport},k=(0,c.ZP)((0,d.connect)(x,F)(u.Z))},17792:(e,t,s)=>{s.r(t),s.d(t,{default:()=>_e});var a=s(11930),o=s(90392),l=s(86208),n=s(45997),r=s(93952),i=s(44439),c=s(92950),d=s.n(c),p=s(74806),u=s(98147),h=s(96464),m=s(27681),g=s(19569),y=s(20963),f=s(29719),S=s(94377);const v=e=>{const t=new Set;return e.map((e=>{e.hidden&&t.add(e.value)})),t};class b extends d().Component{constructor(e,t){super(e,t),this.defaultState={hiddenColumns:v(this.props.options)},this.state=Object.assign({},this.defaultState),this.getHidden=e=>{const{hiddenColumns:t}=this.state,s=new Set(t);return s.delete(e)||s.add(e),s},this.isHidden=e=>{const{hiddenColumns:t}=this.state;return t.has(e)},this.handleChange=(e,t)=>{const s=this.getHidden(t.target.id);this.setState({hiddenColumns:s})},this.handleClose=()=>{this.setState(Object.assign({},this.defaultState),(()=>{this.props.onClose(!1)}))},this.handleSave=()=>{const{hiddenColumns:e}=this.state;this.props.onSave(e),this.handleClose()},this.selectAll=()=>{this.setState({hiddenColumns:new Set})}}componentDidUpdate(e){const{options:t}=this.props;if(e.options!==t){const e=v(t);this.setState({hiddenColumns:e})}}render(){const{options:e,intl:t}=this.props;return d().createElement(a.Modal,{description:d().createElement(a.TextContent,null,d().createElement(a.Text,{component:a.TextVariants.p},t.formatMessage(r.Z.manageColumnsDesc)),d().createElement(a.Button,{isInline:!0,onClick:this.selectAll,variant:"link"},t.formatMessage(r.Z.selectAll))),isOpen:this.props.isOpen,onClose:this.handleClose,title:t.formatMessage(r.Z.manageColumnsTitle),variant:a.ModalVariant.medium,actions:[d().createElement(a.Button,{key:"save",onClick:this.handleSave,variant:a.ButtonVariant.link},t.formatMessage(r.Z.save)),d().createElement(a.Button,{key:"cancel",onClick:this.handleClose,variant:a.ButtonVariant.link},t.formatMessage(r.Z.cancel))]},d().createElement(a.DataList,{"aria-label":t.formatMessage(r.Z.manageColumnsAriaLabel),id:"table-column-management",isCompact:!0},e.map((e=>d().createElement(a.DataListItem,{"aria-labelledby":e.value,key:e.value},d().createElement(a.DataListItemRow,null,d().createElement(a.DataListCheck,{"aria-labelledby":e.value,isChecked:!this.isHidden(e.value),name:e.value,id:e.value,onChange:this.handleChange}),d().createElement(a.DataListItemCells,{dataListCells:[d().createElement(a.DataListCell,{id:"table-column-management-item1",key:"table-column-management-item1"},d().createElement("span",null,t.formatMessage(e.label))),d().createElement(a.DataListCell,{id:"table-column-management-item2",key:"table-column-management-item2"},e.description&&d().createElement("span",null,t.formatMessage(e.description)))]})))))))}}const C=(0,S.X1)((()=>({}))),E=(0,u.connect)(C,{})(b),M=(0,p.ZP)(E);var O=s(84072),P=s(94676),Z=s(47737),B=s(45235),_=s(42581);function x(e={}){return e.project?"project":e.cluster?"cluster":e.node?"node":"date"}var F=s(31447),k=s(36613),D=s(34310),T=s(21679),R=s(73246),q=s(21084),j=s(33307),I=s(99291),A=s(88297);const w={delta:"cost",filter:{time_scope_units:"month",time_scope_value:-1,resolution:"monthly"}},V=[{label:"cluster",value:"cluster"},{label:"node",value:"node"},{label:"project",value:"project"}];class L extends d().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState)}render(){const{groupBy:e,isCurrencyFeatureEnabled:t,isExportsFeatureEnabled:s,onGroupBySelected:o,providers:l,providersError:n,report:i,intl:c}=this.props,p=i&&!n&&l&&l.meta&&l.meta.count>0;let u=d().createElement(T.L,null),h=d().createElement(T.L,null),m=d().createElement(T.L,null);if(i&&i.meta&&i.meta.total){const e=i.meta.total.cost&&i.meta.total.cost.total,t=i.meta.total.supplementary&&i.meta.total.supplementary.total,s=i.meta.total.infrastructure&&i.meta.total.infrastructure.total;u=(0,I.xG)(e?i.meta.total.cost.total.value:0,e?i.meta.total.cost.total.units:"USD"),h=(0,I.xG)(t?i.meta.total.supplementary.total.value:0,t?i.meta.total.supplementary.total.units:"USD"),m=(0,I.xG)(s?i.meta.total.infrastructure.total.value:0,s?i.meta.total.infrastructure.total.units:"USD")}return d().createElement("header",{style:A.W.header},d().createElement("div",{style:A.W.headerContent},d().createElement(a.Title,{headingLevel:"h1",style:A.W.title,size:a.TitleSizes["2xl"]},c.formatMessage(r.Z.ocpDetailsTitle)),d().createElement("div",{style:A.W.headerContentRight},t&&d().createElement(D.F,null),s&&d().createElement(k.b,null))),d().createElement("div",{style:A.W.headerContent},d().createElement("div",{style:A.W.headerContentLeft},d().createElement(R.X,{getIdKeyForGroupBy:x,groupBy:e,isDisabled:!p,onSelected:o,options:V,showTags:!0,tagReportPathsType:"ocp"})),Boolean(p)&&d().createElement("div",null,d().createElement(a.Tooltip,{content:c.formatMessage(r.Z.dashboardTotalCostTooltip,{infrastructureCost:m,supplementaryCost:h}),enableFlip:!0},d().createElement(a.Title,{headingLevel:"h2",style:A.W.costValue,size:a.TitleSizes["4xl"]},u)),d().createElement("div",{style:A.W.dateTitle},(0,j.J4)()))))}}const $=(0,S.X1)(((e,t)=>{const s=(0,o.pm)(w),a=(0,l.H)(B.NT),n=B.aX.selectProviders(e,"all",a),r=B.aX.selectProvidersError(e,"all",a),i=B.aX.selectProvidersFetchStatus(e,"all",a);return{isCurrencyFeatureEnabled:q.iJ.selectIsCurrencyFeatureEnabled(e),isExportsFeatureEnabled:q.iJ.selectIsExportsFeatureEnabled(e),providers:(0,P.BV)(n,"ocp"),providersError:r,providersFetchStatus:i,queryString:s}})),X=(0,p.ZP)((0,u.connect)($,{})(L));var N=s(52636),G=s(74793),W=s(73727),J=s(28259),H=s(24741),U=s(15070),Q=s(20635),z=s(49382),K=s(12289),Y=s(40794),ee=s(11331),te=s(73861);const se={emptyState:{backgroundColor:z.ZP.value,display:"flex",justifyContent:"center",paddingTop:ee.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:te.ZP.value},infoDescription:{color:K.ZP.value,fontSize:Y.ZP.value}};const ae="infrastructure",oe="monthOverMonth",le="supplementary";class ne extends d().Component{constructor(e){super(e),this.state={columns:[],rows:[]},this.initDatum=()=>{const{hiddenColumns:e,isAllSelected:t,query:s,report:o,selectedItems:l,intl:i}=this.props;if(!s||!o)return;const c=x(s.group_by),p=this.getGroupByTagKey(),u=[],h=(0,F.c)({report:o,idKey:p||c}),m=p?[{title:i.formatMessage(r.Z.tagNames)},{title:i.formatMessage(r.Z.monthOverMonthChange)},{id:ae,title:i.formatMessage(r.Z.ocpDetailsInfrastructureCost)},{id:le,title:i.formatMessage(r.Z.ocpDetailsSupplementaryCost)},Object.assign({orderBy:"cost",title:i.formatMessage(r.Z.cost)},h.length&&{transforms:[G.sortable]}),{title:""}]:[Object.assign({orderBy:c,title:i.formatMessage(r.Z.detailsResourceNames,{value:c})},h.length&&{transforms:[G.sortable]}),{id:oe,title:i.formatMessage(r.Z.monthOverMonthChange)},{id:ae,orderBy:"infrastructure_cost",title:i.formatMessage(r.Z.ocpDetailsInfrastructureCost)},{id:le,orderBy:"supplementary_cost",title:i.formatMessage(r.Z.ocpDetailsSupplementaryCost)},Object.assign({orderBy:"cost",title:i.formatMessage(r.Z.cost)},h.length&&{transforms:[G.sortable]}),{title:""}];h.map(((e,a)=>{const o=e&&null!==e.label?e.label:"",r=this.getMonthOverMonthCost(e,a),i=this.getInfrastructureCost(e,a),h=this.getSupplementaryCost(e,a),m=this.getTotalCost(e,a),g=this.getActions(e);let y=d().createElement(W.rU,{to:(0,Q.T)({basePath:J.Hb.ocpDetailsBreakdown,label:o.toString(),description:e.id,groupBy:p?`${n.P}${p}`:c,query:s})},o);const f=!(o===`no-${c}`||o===`no-${p}`);f||(y=o);const S=e.id&&e.id!==e.label?d().createElement("div",{style:se.infoDescription},e.id):null;u.push({cells:[{title:d().createElement("div",null,y,S)},{title:d().createElement("div",null,r),id:oe},{title:d().createElement("div",null,i),id:ae},{title:d().createElement("div",null,h),id:le},{title:d().createElement("div",null,m)},{title:d().createElement("div",null,g)}],disableSelection:!f,isOpen:!1,item:e,selected:t||l&&void 0!==l.find((t=>t.id===e.id))})}));const g=[{heightAuto:!0,cells:[{props:{colSpan:7},title:d().createElement(a.Bullseye,null,d().createElement("div",{style:{textAlign:"center"}},d().createElement(a.Spinner,{size:"xl"})))}]}],y=m.filter((t=>!e.has(t.id))),f=u.map((t=>{var s=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(s[a[o]]=e[a[o]])}return s}(t,[]);return s.cells=s.cells.filter((t=>!e.has(t.id))),s}));this.setState({columns:y,loadingRows:g,rows:f,sortBy:{}})},this.getActions=e=>{const{groupBy:t,query:s}=this.props;return d().createElement(U.e,{groupBy:t,item:e,providerType:"ocp",query:s,reportPathsType:"ocp",showPriceListOption:"cluster"===t})},this.getEmptyState=()=>{const{query:e,intl:t}=this.props;for(const t of Object.values(e.filter_by))if("*"!==t)return d().createElement(H.c,{filter:t,showMargin:!1});return d().createElement(a.EmptyState,null,d().createElement(a.EmptyStateIcon,{icon:N.Xk}),d().createElement(a.EmptyStateBody,null,t.formatMessage(r.Z.detailsEmptyState)))},this.getSupplementaryCost=(e,t)=>{const{report:s,intl:a}=this.props,o=s&&s.meta&&s.meta.total&&s.meta.total.cost&&s.meta.total.cost.total?s.meta.total.cost.total.value:0,l=0===o?o.toFixed(2):(e.supplementary.total.value/o*100).toFixed(2);return d().createElement(d().Fragment,null,(0,I.xG)(e.supplementary.total.value,e.supplementary.total.units),d().createElement("div",{style:se.infoDescription,key:`total-cost-${t}`},a.formatMessage(r.Z.percentOfCost,{value:l})))},this.getGroupByTagKey=()=>{const{query:e}=this.props;let t;for(const s of Object.keys(e.group_by)){const e=s.indexOf(n.P);if(-1!==e){t=s.substring(e+n.P.length);break}}return t},this.getInfrastructureCost=(e,t)=>{const{report:s,intl:a}=this.props,o=s&&s.meta&&s.meta.total&&s.meta.total.cost&&s.meta.total.cost.total?s.meta.total.cost.total.value:0,l=0===o?o.toFixed(2):(e.infrastructure.total.value/o*100).toFixed(2);return d().createElement(d().Fragment,null,(0,I.xG)(e.infrastructure.total.value,e.infrastructure.total.units),d().createElement("div",{style:se.infoDescription,key:`total-cost-${t}`},a.formatMessage(r.Z.percentOfCost,{value:l})))},this.getMonthOverMonthCost=(e,t)=>{const{intl:s}=this.props,a=(0,I.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),o=null!==e.delta_percent?(0,I.rl)(Math.abs(e.delta_percent)):0,l=!(0===o||"0.00"===o),n=null!==e.delta_percent;let i;return l&&(i="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(i+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(i+=" increase")),n?d().createElement("div",{className:"monthOverMonthOverride"},d().createElement("div",{className:i,key:`month-over-month-cost-${t}`},l?s.formatMessage(r.Z.percent,{value:o}):d().createElement(T.L,null),Boolean(l&&null!==e.delta_percent&&e.delta_value>0)&&d().createElement("span",{className:"fa fa-sort-up",style:se.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(l&&null!==e.delta_percent&&e.delta_value<0)&&d().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},se.ininfoArrow),se.infoArrowDesc),key:`month-over-month-icon-${t}`})),d().createElement("div",{style:se.infoDescription,key:`month-over-month-info-${t}`},(0,j.Y)(a))):(0,j.Tf)()},this.getSortBy=()=>{const{query:e}=this.props,{columns:t}=this.state;let s=-1,a=G.SortByDirection.asc;for(const o of Object.keys(e.order_by)){let l=0;for(const n of t){if(n.orderBy===o){a="asc"===e.order_by[o]?G.SortByDirection.asc:G.SortByDirection.desc,s=l+1;break}l++}}return s>-1?{index:s,direction:a}:{}},this.getTotalCost=(e,t)=>{const{report:s,intl:a}=this.props,o=s&&s.meta&&s.meta.total&&s.meta.total.cost&&s.meta.total.cost.total?s.meta.total.cost.total.value:0,l=0===o?o.toFixed(2):(e.cost.total.value/o*100).toFixed(2);return d().createElement(d().Fragment,null,(0,I.xG)(e.cost.total.value,e.cost.total.units),d().createElement("div",{style:se.infoDescription,key:`total-cost-${t}`},a.formatMessage(r.Z.percentOfCost,{value:l})))},this.handleOnSelect=(e,t,s)=>{const{onSelected:a}=this.props;let o,l=[];-1===s?o=this.state.rows.map((e=>(e.selected=t,e))):(o=[...this.state.rows],o[s].selected=t,l=[o[s].item]),this.setState({rows:o},(()=>{a&&a(l,t)}))},this.handleOnSort=(e,t,s)=>{const{onSort:a}=this.props,{columns:o}=this.state;a&&a(o[t-1].orderBy,s===G.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{hiddenColumns:t,query:s,report:a,selectedItems:l}=this.props,n=a&&a.data?JSON.stringify(a.data):"",r=e.report&&e.report.data?JSON.stringify(e.report.data):"";(0,o.pm)(e.query)===(0,o.pm)(s)&&r===n&&e.selectedItems===l&&e.hiddenColumns===t||this.initDatum()}render(){const{intl:e,isLoading:t}=this.props,{columns:s,loadingRows:a,rows:o}=this.state;return d().createElement(d().Fragment,null,d().createElement(G.Table,{"aria-label":e.formatMessage(r.Z.gcpDetailsTableAriaLabel),canSelectAll:!1,cells:s,className:"tableOverride",rows:t?a:o,sortBy:this.getSortBy(),onSelect:t?void 0:this.handleOnSelect,onSort:this.handleOnSort,gridBreakPoint:"grid-2xl"},d().createElement(G.TableHeader,null),d().createElement(G.TableBody,null)),Boolean(0===o.length)&&d().createElement("div",{style:se.emptyState},this.getEmptyState()))}}const re=(0,p.ZP)(ne);var ie=s(78067),ce=s(7917),de=s(19853);const pe="tag",ue="ocp";class he extends d().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,s=[{name:e.formatMessage(r.Z.filterByValues,{value:"cluster"}),key:"cluster"},{name:e.formatMessage(r.Z.filterByValues,{value:"node"}),key:"node"},{name:e.formatMessage(r.Z.filterByValues,{value:"project"}),key:"project"}];return t&&t.data&&t.data.length&&s.push({name:e.formatMessage(r.Z.filterByValues,{value:n.up}),key:n.up}),s}}componentDidMount(){const{fetchTag:e,queryString:t,tagReportFetchStatus:s}=this.props;this.setState({categoryOptions:this.getCategoryOptions()},(()=>{1!==s&&e(ue,pe,t)}))}componentDidUpdate(e){const{fetchTag:t,query:s,queryString:a,tagReport:o,tagReportFetchStatus:l}=this.props;(0,de.X)(o,e.tagReport)?s&&!(0,de.X)(s,e.query)&&1!==l&&t(ue,pe,a):this.setState({categoryOptions:this.getCategoryOptions()},(()=>{1!==l&&t(ue,pe,a)}))}render(){const{groupBy:e,isAllSelected:t,isExportDisabled:s,itemsPerPage:a,itemsTotal:o,onBulkSelected:l,onColumnManagementClicked:n,onExportClicked:r,onFilterAdded:i,onFilterRemoved:c,pagination:p,query:u,selectedItems:h,tagReport:m}=this.props,{categoryOptions:g}=this.state;return d().createElement(ie.k,{categoryOptions:g,groupBy:e,isAllSelected:t,isExportDisabled:s,itemsPerPage:a,itemsTotal:o,onBulkSelected:l,onColumnManagementClicked:n,onExportClicked:r,onFilterAdded:i,onFilterRemoved:c,pagination:p,query:u,resourcePathsType:"ocp",selectedItems:h,showBulkSelect:!0,showColumnManagement:!0,showExport:!0,showFilter:!0,tagReport:m,tagReportPathsType:ue})}}const me=(0,S.X1)(((e,t)=>{const s=(0,o.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3});return{queryString:s,tagReport:ce.ux.selectTag(e,ue,pe,s),tagReportFetchStatus:ce.ux.selectTagFetchStatus(e,ue,pe,s)}})),ge={fetchTag:ce.xr.Xt},ye=(0,u.connect)(me,ge)(he),fe=(0,p.ZP)(ye);var Se=s(98499),ve=s(32412);const be={content:{paddingBottom:Se.ZP.value,paddingTop:Se.ZP.value},ocpDetails:{minHeight:"100%"},paginationContainer:{marginLeft:Se.ZP.value,marginRight:Se.ZP.value},pagination:{backgroundColor:z.ZP.value,paddingBottom:ve.ZP.value,paddingTop:ve.ZP.value},tableContainer:{marginLeft:Se.ZP.value,marginRight:Se.ZP.value}},Ce={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:{},group_by:{project:"*"},order_by:{cost:"desc"}},Ee=[{label:r.Z.monthOverMonthChange,value:oe},{description:r.Z.ocpDetailsInfrastructureCostDesc,label:r.Z.ocpDetailsInfrastructureCost,value:ae,hidden:!0},{description:r.Z.ocpDetailsSupplementaryCostDesc,label:r.Z.ocpDetailsSupplementaryCost,value:le,hidden:!0}],Me="cost",Oe="ocp";class Pe extends d().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],hiddenColumns:v(Ee),isAllSelected:!1,isColumnManagementModalOpen:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getColumnManagementModal=()=>{const{hiddenColumns:e,isColumnManagementModalOpen:t}=this.state,s=(0,i.cloneDeep)(Ee);return s.map((t=>{t.hidden=e.has(t.value)})),d().createElement(M,{isOpen:t,options:s,onClose:this.handleColumnManagementModalClose,onSave:this.handleColumnManagementModalSave})},this.getComputedItems=()=>{const{query:e,report:t}=this.props,s=x(e.group_by),a=(0,O.qV)(e);return(0,F.c)({report:t,idKey:a||s})},this.getExportModal=e=>{const{isAllSelected:t,isExportModalOpen:s,selectedItems:a}=this.state,{query:o,report:l}=this.props,r=x(o.group_by),i=(0,O.qV)(o),c=l&&l.meta?l.meta.count:0,p=[];return a.map((e=>{e.label!==`no-${r}`&&e.label!==`no-${i}`&&p.push(e)})),d().createElement(f.X,{count:t?c:p.length,isAllItems:(t||a.length===c)&&e.length>0,groupBy:i?`${n.P}${i}`:r,isOpen:s,items:p,onClose:this.handleExportModalClose,query:o,reportPathsType:Oe})},this.getPagination=(e=!1)=>{const{report:t}=this.props,s=t&&t.meta?t.meta.count:0,o=t&&t.meta&&t.meta.filter&&t.meta.filter.limit?t.meta.filter.limit:Ce.filter.limit,l=(t&&t.meta&&t.meta.filter&&t.meta.filter.offset?t.meta.filter.offset:Ce.filter.offset)/o+1;return d().createElement(a.Pagination,{isCompact:!e,itemCount:s,onPerPageSelect:this.handlePerPageSelect,onSetPage:this.handleSetPage,page:l,perPage:o,variant:e?a.PaginationVariant.bottom:a.PaginationVariant.top,widgetId:"`pagination${isBottom ? '-bottom' : ''}`"})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:s}=this.props,{hiddenColumns:a,isAllSelected:o,selectedItems:l}=this.state,r=x(e.group_by),i=(0,O.qV)(e);return d().createElement(re,{groupBy:i?`${n.P}${i}`:r,hiddenColumns:a,isAllSelected:o,isLoading:1===s,onSelected:this.handleSelected,onSort:this.handleSort,query:e,report:t,selectedItems:l})},this.getToolbar=e=>{const{query:t,report:s}=this.props,{isAllSelected:a,selectedItems:o}=this.state,l=x(t.group_by),r=(0,O.qV)(t),i=s&&s.meta?s.meta.count:0;return d().createElement(fe,{groupBy:r?`${n.P}${r}`:l,isAllSelected:a,isExportDisabled:0===e.length||!a&&0===o.length,itemsPerPage:e.length,itemsTotal:i,onBulkSelected:this.handleBulkSelected,onColumnManagementClicked:this.handleColumnManagementModalOpen,onExportClicked:this.handleExportModalOpen,onFilterAdded:this.handleFilterAdded,onFilterRemoved:this.handleFilterRemoved,pagination:this.getPagination(),query:t,selectedItems:o})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleColumnManagementModalClose=e=>{this.setState({isColumnManagementModalOpen:e})},this.handleColumnManagementModalOpen=()=>{this.setState({isColumnManagementModalOpen:!0})},this.handleColumnManagementModalSave=e=>{this.setState({hiddenColumns:e})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleFilterAdded=(e,t)=>{const{history:s,query:a}=this.props,o=(0,Z.W)(a,e,t);s.replace(this.getRouteForQuery(o,!0))},this.handleFilterRemoved=(e,t)=>{const{history:s,query:a}=this.props,o=(0,Z.U)(a,e,t);s.replace(this.getRouteForQuery(o,!0))},this.handleGroupBySelected=e=>{const{history:t,query:s}=this.props,a=e,o=Object.assign(Object.assign({},JSON.parse(JSON.stringify(s))),{group_by:{[a]:"*"},order_by:{cost:"desc"}});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{t.replace(this.getRouteForQuery(o,!0))}))},this.handlePerPageSelect=(e,t)=>{const{history:s,query:a}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(a)));o.filter=Object.assign(Object.assign({},a.filter),{limit:t});const l=this.getRouteForQuery(o,!0);s.replace(l)},this.handleSelected=(e,t=!1)=>{const{isAllSelected:s,selectedItems:a}=this.state;let o=[...s?this.getComputedItems():a];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.handleSetPage=(e,t)=>{const{history:s,query:a,report:o}=this.props,l=o&&o.meta&&o.meta.filter&&o.meta.filter.limit?o.meta.filter.limit:Ce.filter.limit,n=t*l-l,r=Object.assign({},JSON.parse(JSON.stringify(a)));r.filter=Object.assign(Object.assign({},a.filter),{offset:n});const i=this.getRouteForQuery(r);s.replace(i)},this.handleSort=(e,t)=>{const{history:s,query:a}=this.props,o=Object.assign({},JSON.parse(JSON.stringify(a)));o.order_by={},o.order_by[e]=t?"asc":"desc";const l=this.getRouteForQuery(o);s.replace(l)},this.updateReport=()=>{const{query:e,location:t,fetchReport:s,history:a,queryString:o}=this.props;t.search?s(Oe,Me,o):a.replace(this.getRouteForQuery({filter_by:e?e.filter_by:void 0,group_by:e?e.group_by:void 0,order_by:{cost:"desc"}}))},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleColumnManagementModalClose=this.handleColumnManagementModalClose.bind(this),this.handleColumnManagementModalOpen=this.handleColumnManagementModalOpen.bind(this),this.handleColumnManagementModalSave=this.handleColumnManagementModalSave.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleFilterAdded=this.handleFilterAdded.bind(this),this.handleFilterRemoved=this.handleFilterRemoved.bind(this),this.handlePerPageSelect=this.handlePerPageSelect.bind(this),this.handleSelected=this.handleSelected.bind(this),this.handleSetPage=this.handleSetPage.bind(this),this.handleSort=this.handleSort.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{location:s,report:a,reportError:o,queryString:l}=this.props,{selectedItems:n}=this.state,r=e.queryString!==l,i=!a&&!o,c=!s.search,d=t.selectedItems!==n;(r||i||c||d)&&this.updateReport()}getRouteForQuery(e,t=!1){const{history:s}=this.props;return t&&(e.filter=Object.assign(Object.assign({},e.filter),{offset:Ce.filter.offset})),`${s.location.pathname}?${(0,o.IV)(e)}`}render(){const{providers:e,providersFetchStatus:t,query:s,report:a,reportError:o,reportFetchStatus:l,intl:n}=this.props,i=x(s.group_by),c=this.getComputedItems(),p=n.formatMessage(r.Z.ocpDetailsTitle);if(o)return d().createElement(y.Z,{title:p});if(1===t)return d().createElement(h.Z,{title:p});if(2===t){if(e&&e.meta&&0===e.meta.count)return d().createElement(g.Z,{providerType:"ocp",title:p});if(!(0,P.g8)(e))return d().createElement(m.Z,{title:p})}return d().createElement("div",{style:be.ocpDetails},d().createElement(X,{groupBy:i,onGroupBySelected:this.handleGroupBySelected,report:a}),d().createElement("div",{style:be.content},this.getToolbar(c),this.getExportModal(c),this.getColumnManagementModal(),1===l?d().createElement(h.Z,null):d().createElement(d().Fragment,null,d().createElement("div",{style:be.tableContainer},this.getTable()),d().createElement("div",{style:be.paginationContainer},d().createElement("div",{style:be.pagination},this.getPagination(!0))))))}}const Ze=(0,S.X1)(((e,t)=>{const s=(0,o.mB)(location.search),a={delta:"cost",filter:Object.assign(Object.assign({},Ce.filter),s.filter),filter_by:s.filter_by||Ce.filter_by,group_by:s.group_by||Ce.group_by,order_by:s.order_by||Ce.order_by},n=(0,o.pm)(a),r=_.ZV.selectReport(e,Oe,Me,n),i=_.ZV.selectReportError(e,Oe,Me,n),c=_.ZV.selectReportFetchStatus(e,Oe,Me,n),d=(0,l.H)(B.NT),p=B.aX.selectProviders(e,"all",d),u=B.aX.selectProvidersFetchStatus(e,"all",d);return{providers:(0,P.BV)(p,"ocp"),providersFetchStatus:u,query:a,queryString:n,report:r,reportError:i,reportFetchStatus:c}})),Be={fetchReport:_.nx.fetchReport},_e=(0,p.ZP)((0,u.connect)(Ze,Be)(Pe))}}]);
//# sourceMappingURL=a84a83fbf4698fff9305.bundle.js.map