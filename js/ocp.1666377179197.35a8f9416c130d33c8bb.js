"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[855],{49572:(e,t,a)=>{a.d(t,{C:()=>s.Z});var s=a(40961)},38792:(e,t,a)=>{a.r(t),a.d(t,{default:()=>F});var s=a(90392),o=a(86208),l=a(45997),n=a(93952),r=a(92950),i=a.n(r),c=a(74806),d=a(78741),p=a(98503),u=a(49572),m=a(84072),h=a(94676),g=a(94377),y=a(21084),f=a(45235),v=a(42581),S=a(21652),b=a(22379),C=a(64764);const E=(0,g.X1)(((e,t)=>({selectWidgets:C.cm.selectWidgets(e),widgets:C.cm.selectCurrentWidgets(e)}))),M=(0,c.ZP)((0,d.connect)(E,{})(b.X));var O=a(81370),B=a(82462);const x=(0,g.X1)(((e,t)=>({selectWidgets:B.P2.selectWidgets(e),widgets:B.P2.selectCurrentWidgets(e)}))),Z=(0,c.ZP)((0,d.connect)(x,{})(O.f)),_=p.Hb.ocpDetails,P="cost",T="ocp",k=(0,g.X1)(((e,t)=>{const a=(0,s.mB)(location.search),r=(0,m.VL)(a),c=(0,m.pe)(a),d=y.iJ.selectIsCurrencyFeatureEnabled(e)?(0,S.z)():void 0,p={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign({},a&&a.filter_by&&a.filter_by),r&&{[r]:void 0}),group_by:Object.assign({},r&&{[r]:c}),currency:d},u=(0,s.pm)(p),g=v.ZV.selectReport(e,T,P,u),b=v.ZV.selectReportError(e,T,P,u),C=v.ZV.selectReportFetchStatus(e,T,P,u),E=(0,o.H)(f.NT),O=f.aX.selectProviders(e,"all",E),B=f.aX.selectProvidersFetchStatus(e,"all",E);return{costOverviewComponent:i().createElement(M,{currency:d,groupBy:r,report:g}),currency:d,description:a[l.eG],detailsURL:_,emptyStateTitle:t.intl.formatMessage(n.Z.ocpDetailsTitle),groupBy:r,groupByValue:c,historicalDataComponent:i().createElement(Z,{currency:d}),providers:(0,h.BV)(O,"ocp"),providersFetchStatus:B,providerType:"ocp",query:a,queryString:u,report:g,reportError:b,reportFetchStatus:C,reportType:P,reportPathsType:T,tagReportPathsType:"ocp",title:c}})),D={fetchReport:v.nx.fetchReport},F=(0,c.ZP)((0,d.connect)(k,D)(u.C))},68419:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Pe});var s=a(13157),o=a(90392),l=a(86208),n=a(45997),r=a(93952),i=a(44439),c=a(92950),d=a.n(c),p=a(74806),u=a(78741),m=a(96464),h=a(27681),g=a(8022),y=a(20963),f=a(44149),v=a(94377);const S=e=>{const t=new Set;return e.map((e=>{e.hidden&&t.add(e.value)})),t};class b extends d().Component{constructor(e,t){super(e,t),this.defaultState={hiddenColumns:S(this.props.options)},this.state=Object.assign({},this.defaultState),this.getHidden=e=>{const{hiddenColumns:t}=this.state,a=new Set(t);return a.delete(e)||a.add(e),a},this.isHidden=e=>{const{hiddenColumns:t}=this.state;return t.has(e)},this.handleChange=(e,t)=>{const a=this.getHidden(t.target.id);this.setState({hiddenColumns:a})},this.handleClose=()=>{this.setState(Object.assign({},this.defaultState),(()=>{this.props.onClose(!1)}))},this.handleSave=()=>{const{hiddenColumns:e}=this.state;this.props.onSave(e),this.handleClose()},this.selectAll=()=>{this.setState({hiddenColumns:new Set})}}componentDidUpdate(e){const{options:t}=this.props;if(e.options!==t){const e=S(t);this.setState({hiddenColumns:e})}}render(){const{options:e,intl:t}=this.props;return d().createElement(s.Modal,{description:d().createElement(s.TextContent,null,d().createElement(s.Text,{component:s.TextVariants.p},t.formatMessage(r.Z.manageColumnsDesc)),d().createElement(s.Button,{isInline:!0,onClick:this.selectAll,variant:"link"},t.formatMessage(r.Z.selectAll))),isOpen:this.props.isOpen,onClose:this.handleClose,title:t.formatMessage(r.Z.manageColumnsTitle),variant:s.ModalVariant.medium,actions:[d().createElement(s.Button,{key:"save",onClick:this.handleSave,variant:s.ButtonVariant.link},t.formatMessage(r.Z.save)),d().createElement(s.Button,{key:"cancel",onClick:this.handleClose,variant:s.ButtonVariant.link},t.formatMessage(r.Z.cancel))]},d().createElement(s.DataList,{"aria-label":t.formatMessage(r.Z.manageColumnsAriaLabel),id:"table-column-management",isCompact:!0},e.map((e=>d().createElement(s.DataListItem,{"aria-labelledby":e.value,key:e.value},d().createElement(s.DataListItemRow,null,d().createElement(s.DataListCheck,{"aria-labelledby":`${e.value}Label`,isChecked:!this.isHidden(e.value),name:e.value,id:e.value,onChange:this.handleChange}),d().createElement(s.DataListItemCells,{dataListCells:[d().createElement(s.DataListCell,{id:`${e.value}Label`,key:"table-column-management-item1"},d().createElement("span",null,t.formatMessage(e.label))),d().createElement(s.DataListCell,{key:"table-column-management-item2"},e.description&&d().createElement("span",null,t.formatMessage(e.description)))]})))))))}}const C=(0,v.X1)((()=>({}))),E=(0,u.connect)(C,{})(b),M=(0,p.ZP)(E);var O=a(84072),B=a(25958),x=a(94676),Z=a(21084),_=a(45235),P=a(42581);function T(e={}){return e.project?"project":e.cluster?"cluster":e.node?"node":"date"}var k=a(31447),D=a(21652),F=a(85086),I=a(25343),q=a(50277),w=a(29106),R=a(16732),A=a(99291),j=a(88297);const L={delta:"cost",filter:{time_scope_units:"month",time_scope_value:-1,resolution:"monthly"}},V=[{label:"cluster",value:"cluster"},{label:"node",value:"node"},{label:"project",value:"project"}];class $ extends d().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState)}render(){const{currency:e,groupBy:t,isCurrencyFeatureEnabled:a,isExportsFeatureEnabled:o,onCurrencySelected:l,onGroupBySelected:n,providers:i,providersError:c,report:p,intl:u}=this.props,m=p&&!c&&i&&i.meta&&i.meta.count>0;let h=d().createElement(q.L,null),g=d().createElement(q.L,null),y=d().createElement(q.L,null);if(p&&p.meta&&p.meta.total){const e=p.meta.total.cost&&p.meta.total.cost.total,t=p.meta.total.supplementary&&p.meta.total.supplementary.total,a=p.meta.total.infrastructure&&p.meta.total.infrastructure.total;h=(0,A.xG)(e?p.meta.total.cost.total.value:0,e?p.meta.total.cost.total.units:"USD"),g=(0,A.xG)(t?p.meta.total.supplementary.total.value:0,t?p.meta.total.supplementary.total.units:"USD"),y=(0,A.xG)(a?p.meta.total.infrastructure.total.value:0,a?p.meta.total.infrastructure.total.units:"USD")}return d().createElement("header",{style:j.W.header},d().createElement("div",{style:j.W.headerContent},d().createElement(s.Title,{headingLevel:"h1",style:j.W.title,size:s.TitleSizes["2xl"]},u.formatMessage(r.Z.ocpDetailsTitle)),d().createElement("div",{style:j.W.headerContentRight},a&&d().createElement(I.F,{currency:e,onSelect:l}),o&&d().createElement(F.b,null))),d().createElement("div",{style:j.W.headerContent},d().createElement("div",{style:j.W.headerContentLeft},d().createElement(w.X,{getIdKeyForGroupBy:T,groupBy:t,isDisabled:!m,onSelected:n,options:V,showTags:!0,tagReportPathsType:"ocp"})),Boolean(m)&&d().createElement("div",null,d().createElement(s.Tooltip,{content:u.formatMessage(r.Z.dashboardTotalCostTooltip,{infrastructureCost:y,supplementaryCost:g}),enableFlip:!0},d().createElement(s.Title,{headingLevel:"h2",style:j.W.costValue,size:s.TitleSizes["4xl"]},h)),d().createElement("div",{style:j.W.dateTitle},(0,R.J4)()))))}}const X=(0,v.X1)(((e,t)=>{const a=(0,o.pm)(L),s=(0,l.H)(_.NT),n=_.aX.selectProviders(e,"all",s),r=_.aX.selectProvidersError(e,"all",s),i=_.aX.selectProvidersFetchStatus(e,"all",s);return{isCurrencyFeatureEnabled:Z.iJ.selectIsCurrencyFeatureEnabled(e),isExportsFeatureEnabled:Z.iJ.selectIsExportsFeatureEnabled(e),providers:(0,x.BV)(n,"ocp"),providersError:r,providersFetchStatus:i,queryString:a}})),G=(0,p.ZP)((0,u.connect)(X,{})($));var W=a(52636),N=a(4272),H=a(73727),J=a(98503),U=a(54106),z=a(8748),K=a(20635),Y=a(49382),Q=a(12289),ee=a(40794),te=a(11331),ae=a(73861);const se={emptyState:{backgroundColor:Y.ZP.value,display:"flex",justifyContent:"center",paddingTop:te.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:ae.ZP.value},infoDescription:{color:Q.ZP.value,fontSize:ee.ZP.value}};const oe="infrastructure",le="monthOverMonth",ne="supplementary";class re extends d().Component{constructor(e){super(e),this.state={columns:[],rows:[]},this.initDatum=()=>{const{hiddenColumns:e,isAllSelected:t,query:a,report:o,selectedItems:l,intl:i}=this.props;if(!a||!o)return;const c=T(a.group_by),p=this.getGroupByTagKey(),u=[],m=(0,k.c)({report:o,idKey:p||c}),h=p?[{title:i.formatMessage(r.Z.tagNames)},{title:i.formatMessage(r.Z.monthOverMonthChange)},{id:oe,title:i.formatMessage(r.Z.ocpDetailsInfrastructureCost)},{id:ne,title:i.formatMessage(r.Z.ocpDetailsSupplementaryCost)},Object.assign({orderBy:"cost",title:i.formatMessage(r.Z.cost)},m.length&&{transforms:[N.sortable]}),{title:""}]:[Object.assign({orderBy:c,title:i.formatMessage(r.Z.detailsResourceNames,{value:c})},m.length&&{transforms:[N.sortable]}),{id:le,title:i.formatMessage(r.Z.monthOverMonthChange)},{id:oe,orderBy:"infrastructure_cost",title:i.formatMessage(r.Z.ocpDetailsInfrastructureCost)},{id:ne,orderBy:"supplementary_cost",title:i.formatMessage(r.Z.ocpDetailsSupplementaryCost)},Object.assign({orderBy:"cost",title:i.formatMessage(r.Z.cost)},m.length&&{transforms:[N.sortable]}),{title:""}];m.map(((e,s)=>{const o=e&&null!==e.label?e.label:"",r=this.getMonthOverMonthCost(e,s),i=this.getInfrastructureCost(e,s),m=this.getSupplementaryCost(e,s),h=this.getTotalCost(e,s),g=this.getActions(e);let y=d().createElement(H.rU,{to:(0,K.T)({basePath:J.Hb.ocpDetailsBreakdown,label:o.toString(),description:e.id,groupBy:p?`${n.P}${p}`:c,query:a})},o);const f=!(o===`no-${c}`||o===`no-${p}`);f||(y=o);const v=e.id&&e.id!==e.label?d().createElement("div",{style:se.infoDescription},e.id):null;u.push({cells:[{title:d().createElement("div",null,y,v)},{title:d().createElement("div",null,r),id:le},{title:d().createElement("div",null,i),id:oe},{title:d().createElement("div",null,m),id:ne},{title:d().createElement("div",null,h)},{title:d().createElement("div",null,g)}],disableSelection:!f,isOpen:!1,item:e,selected:t||l&&void 0!==l.find((t=>t.id===e.id))})}));const g=[{heightAuto:!0,cells:[{props:{colSpan:7},title:d().createElement(s.Bullseye,null,d().createElement("div",{style:{textAlign:"center"}},d().createElement(s.Spinner,{size:"xl"})))}]}],y=h.filter((t=>!e.has(t.id))),f=u.map((t=>{var a=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(a[s[o]]=e[s[o]])}return a}(t,[]);return a.cells=a.cells.filter((t=>!e.has(t.id))),a}));this.setState({columns:y,loadingRows:g,rows:f})},this.getActions=e=>{const{groupBy:t,query:a}=this.props;return d().createElement(z.e,{groupBy:t,item:e,providerType:"ocp",query:a,reportPathsType:"ocp",showPriceListOption:"cluster"===t})},this.getEmptyState=()=>{const{query:e,intl:t}=this.props;for(const t of Object.values(e.filter_by))if("*"!==t)return d().createElement(U.c,{filter:t,showMargin:!1});return d().createElement(s.EmptyState,null,d().createElement(s.EmptyStateIcon,{icon:W.Xk}),d().createElement(s.EmptyStateBody,null,t.formatMessage(r.Z.detailsEmptyState)))},this.getSupplementaryCost=(e,t)=>{const{report:a,intl:s}=this.props,o=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total?a.meta.total.cost.total.value:0,l=0===o?o.toFixed(2):(e.supplementary.total.value/o*100).toFixed(2);return d().createElement(d().Fragment,null,(0,A.xG)(e.supplementary.total.value,e.supplementary.total.units),d().createElement("div",{style:se.infoDescription,key:`total-cost-${t}`},s.formatMessage(r.Z.percentOfCost,{value:l})))},this.getGroupByTagKey=()=>{const{query:e}=this.props;let t;for(const a of Object.keys(e.group_by)){const e=a.indexOf(n.P);if(-1!==e){t=a.substring(e+n.P.length);break}}return t},this.getInfrastructureCost=(e,t)=>{const{report:a,intl:s}=this.props,o=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total?a.meta.total.cost.total.value:0,l=0===o?o.toFixed(2):(e.infrastructure.total.value/o*100).toFixed(2);return d().createElement(d().Fragment,null,(0,A.xG)(e.infrastructure.total.value,e.infrastructure.total.units),d().createElement("div",{style:se.infoDescription,key:`total-cost-${t}`},s.formatMessage(r.Z.percentOfCost,{value:l})))},this.getMonthOverMonthCost=(e,t)=>{const{intl:a}=this.props,s=(0,A.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),o=null!==e.delta_percent?(0,A.rl)(Math.abs(e.delta_percent)):0,l=!(0===o||"0.00"===o),n=null!==e.delta_percent;let i;return l&&(i="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(i+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(i+=" increase")),n?d().createElement("div",{className:"monthOverMonthOverride"},d().createElement("div",{className:i,key:`month-over-month-cost-${t}`},l?a.formatMessage(r.Z.percent,{value:o}):d().createElement(q.L,null),Boolean(l&&null!==e.delta_percent&&e.delta_value>0)&&d().createElement("span",{className:"fa fa-sort-up",style:se.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(l&&null!==e.delta_percent&&e.delta_value<0)&&d().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},se.ininfoArrow),se.infoArrowDesc),key:`month-over-month-icon-${t}`})),d().createElement("div",{style:se.infoDescription,key:`month-over-month-info-${t}`},(0,R.Y)(s))):(0,R.Tf)()},this.getSortBy=()=>{const{query:e}=this.props,{columns:t}=this.state;let a=-1,s=N.SortByDirection.asc;for(const o of Object.keys(e.order_by)){let l=0;for(const n of t){if(n.orderBy===o){s="asc"===e.order_by[o]?N.SortByDirection.asc:N.SortByDirection.desc,a=l+1;break}l++}}return a>-1?{index:a,direction:s}:{}},this.getTotalCost=(e,t)=>{const{report:a,intl:s}=this.props,o=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total?a.meta.total.cost.total.value:0,l=0===o?o.toFixed(2):(e.cost.total.value/o*100).toFixed(2);return d().createElement(d().Fragment,null,(0,A.xG)(e.cost.total.value,e.cost.total.units),d().createElement("div",{style:se.infoDescription,key:`total-cost-${t}`},s.formatMessage(r.Z.percentOfCost,{value:l})))},this.handleOnSelect=(e,t,a)=>{const{onSelected:s}=this.props;let o,l=[];-1===a?o=this.state.rows.map((e=>(e.selected=t,e))):(o=[...this.state.rows],o[a].selected=t,l=[o[a].item]),this.setState({rows:o},(()=>{s&&s(l,t)}))},this.handleOnSort=(e,t,a)=>{const{onSort:s}=this.props,{columns:o}=this.state;s&&s(o[t-1].orderBy,a===N.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{hiddenColumns:t,query:a,report:s,selectedItems:l}=this.props,n=s&&s.data?JSON.stringify(s.data):"",r=e.report&&e.report.data?JSON.stringify(e.report.data):"";(0,o.pm)(e.query)===(0,o.pm)(a)&&r===n&&e.selectedItems===l&&e.hiddenColumns===t||this.initDatum()}render(){const{intl:e,isLoading:t}=this.props,{columns:a,loadingRows:s,rows:o}=this.state;return d().createElement(d().Fragment,null,d().createElement(N.Table,{"aria-label":e.formatMessage(r.Z.gcpDetailsTableAriaLabel),canSelectAll:!1,cells:a,className:"tableOverride",rows:t?s:o,sortBy:this.getSortBy(),onSelect:t?void 0:this.handleOnSelect,onSort:this.handleOnSort,gridBreakPoint:"grid-2xl"},d().createElement(N.TableHeader,null),d().createElement(N.TableBody,null)),Boolean(0===o.length)&&d().createElement("div",{style:se.emptyState},this.getEmptyState()))}}const ie=(0,p.ZP)(re);var ce=a(55353),de=a(7917),pe=a(19853);const ue="tag",me="ocp";class he extends d().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,a=[{name:e.formatMessage(r.Z.filterByValues,{value:"cluster"}),key:"cluster"},{name:e.formatMessage(r.Z.filterByValues,{value:"node"}),key:"node"},{name:e.formatMessage(r.Z.filterByValues,{value:"project"}),key:"project"}];return t&&t.data&&t.data.length&&a.push({name:e.formatMessage(r.Z.filterByValues,{value:n.up}),key:n.up}),a}}componentDidMount(){const{fetchTag:e,queryString:t,tagReportFetchStatus:a}=this.props;this.setState({categoryOptions:this.getCategoryOptions()},(()=>{1!==a&&e(me,ue,t)}))}componentDidUpdate(e){const{fetchTag:t,query:a,queryString:s,tagReport:o,tagReportFetchStatus:l}=this.props;(0,pe.X)(o,e.tagReport)?a&&!(0,pe.X)(a,e.query)&&1!==l&&t(me,ue,s):this.setState({categoryOptions:this.getCategoryOptions()},(()=>{1!==l&&t(me,ue,s)}))}render(){const{groupBy:e,isAllSelected:t,isExportDisabled:a,itemsPerPage:s,itemsTotal:o,onBulkSelected:l,onColumnManagementClicked:n,onExportClicked:r,onFilterAdded:i,onFilterRemoved:c,pagination:p,query:u,selectedItems:m,tagReport:h}=this.props,{categoryOptions:g}=this.state;return d().createElement(ce.k,{categoryOptions:g,groupBy:e,isAllSelected:t,isExportDisabled:a,itemsPerPage:s,itemsTotal:o,onBulkSelected:l,onColumnManagementClicked:n,onExportClicked:r,onFilterAdded:i,onFilterRemoved:c,pagination:p,query:u,resourcePathsType:"ocp",selectedItems:m,showBulkSelect:!0,showColumnManagement:!0,showExport:!0,showFilter:!0,tagReport:h,tagReportPathsType:me})}}const ge=(0,v.X1)(((e,t)=>{const a=(0,o.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3});return{queryString:a,tagReport:de.ux.selectTag(e,me,ue,a),tagReportFetchStatus:de.ux.selectTagFetchStatus(e,me,ue,a)}})),ye={fetchTag:de.xr.Xt},fe=(0,u.connect)(ge,ye)(he),ve=(0,p.ZP)(fe);var Se=a(98499),be=a(32412);const Ce={content:{paddingBottom:Se.ZP.value,paddingTop:Se.ZP.value},ocpDetails:{minHeight:"100%"},paginationContainer:{marginLeft:Se.ZP.value,marginRight:Se.ZP.value},pagination:{backgroundColor:Y.ZP.value,paddingBottom:be.ZP.value,paddingTop:be.ZP.value},tableContainer:{marginLeft:Se.ZP.value,marginRight:Se.ZP.value}},Ee={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},exclude:{},filter_by:{},group_by:{project:"*"},order_by:{cost:"desc"}},Me=[{label:r.Z.monthOverMonthChange,value:le},{description:r.Z.ocpDetailsInfrastructureCostDesc,label:r.Z.ocpDetailsInfrastructureCost,value:oe,hidden:!0},{description:r.Z.ocpDetailsSupplementaryCostDesc,label:r.Z.ocpDetailsSupplementaryCost,value:ne,hidden:!0}],Oe="cost",Be="ocp";class xe extends d().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],hiddenColumns:S(Me),isAllSelected:!1,isColumnManagementModalOpen:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getColumnManagementModal=()=>{const{hiddenColumns:e,isColumnManagementModalOpen:t}=this.state,a=(0,i.cloneDeep)(Me);return a.map((t=>{t.hidden=e.has(t.value)})),d().createElement(M,{isOpen:t,options:a,onClose:this.handleColumnManagementModalClose,onSave:this.handleColumnManagementModalSave})},this.getComputedItems=()=>{const{query:e,report:t}=this.props,a=T(e.group_by),s=(0,O.qV)(e);return(0,k.c)({report:t,idKey:s||a})},this.getExportModal=e=>{const{isAllSelected:t,isExportModalOpen:a,selectedItems:s}=this.state,{query:o,report:l}=this.props,r=T(o.group_by),i=(0,O.qV)(o),c=l&&l.meta?l.meta.count:0,p=[];return s.map((e=>{e.label!==`no-${r}`&&e.label!==`no-${i}`&&p.push(e)})),d().createElement(f.X,{count:t?c:p.length,isAllItems:(t||s.length===c)&&e.length>0,groupBy:i?`${n.P}${i}`:r,isOpen:a,items:p,onClose:this.handleExportModalClose,query:o,reportPathsType:Be})},this.getPagination=(e=!1)=>{const{history:t,intl:a,query:o,report:l}=this.props,n=l&&l.meta?l.meta.count:0,i=l&&l.meta&&l.meta.filter&&l.meta.filter.limit?l.meta.filter.limit:Ee.filter.limit,c=(l&&l.meta&&l.meta.filter&&l.meta.filter.offset?l.meta.filter.offset:Ee.filter.offset)/i+1;return d().createElement(s.Pagination,{isCompact:!e,itemCount:n,onPerPageSelect:(e,a)=>(0,B.xh)(t,o,a),onSetPage:(e,a)=>(0,B.$9)(t,o,l,a),page:c,perPage:i,titles:{paginationTitle:a.formatMessage(r.Z.paginationTitle,{title:a.formatMessage(r.Z.openShift),placement:e?"bottom":"top"})},variant:e?s.PaginationVariant.bottom:s.PaginationVariant.top,widgetId:"exports-pagination"+(e?"-bottom":"")})},this.getTable=()=>{const{history:e,query:t,report:a,reportFetchStatus:s}=this.props,{hiddenColumns:o,isAllSelected:l,selectedItems:r}=this.state,i=T(t.group_by),c=(0,O.qV)(t);return d().createElement(ie,{groupBy:c?`${n.P}${c}`:i,hiddenColumns:o,isAllSelected:l,isLoading:1===s,onSelected:this.handleSelected,onSort:(a,s)=>(0,B.yB)(e,t,a,s),query:t,report:a,selectedItems:r})},this.getToolbar=e=>{const{history:t,query:a,report:s}=this.props,{isAllSelected:o,selectedItems:l}=this.state,r=T(a.group_by),i=(0,O.qV)(a),c=s&&s.meta?s.meta.count:0;return d().createElement(ve,{groupBy:i?`${n.P}${i}`:r,isAllSelected:o,isExportDisabled:0===e.length||!o&&0===l.length,itemsPerPage:e.length,itemsTotal:c,onBulkSelected:this.handleBulkSelected,onColumnManagementClicked:this.handleColumnManagementModalOpen,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,B.$3)(t,a,e),onFilterRemoved:e=>(0,B.q7)(t,a,e),pagination:this.getPagination(),query:a,selectedItems:l})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleColumnManagementModalClose=e=>{this.setState({isColumnManagementModalOpen:e})},this.handleColumnManagementModalOpen=()=>{this.setState({isColumnManagementModalOpen:!0})},this.handleColumnManagementModalSave=e=>{this.setState({hiddenColumns:e})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{history:t,query:a}=this.props,s=e,o=Object.assign(Object.assign({},JSON.parse(JSON.stringify(a))),{group_by:{[s]:"*"},order_by:{cost:"desc"}});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{t.replace((0,B.ZE)(t,o,!0))}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:a,selectedItems:s}=this.state;let o=[...a?this.getComputedItems():s];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.updateReport=()=>{const{fetchReport:e,history:t,location:a,query:s,queryString:o}=this.props;a.search?e(Be,Oe,o):t.replace((0,B.ZE)(t,{exclude:s?s.exclude:void 0,filter_by:s?s.filter_by:void 0,group_by:s?s.group_by:void 0,order_by:{cost:"desc"}}))},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleColumnManagementModalClose=this.handleColumnManagementModalClose.bind(this),this.handleColumnManagementModalOpen=this.handleColumnManagementModalOpen.bind(this),this.handleColumnManagementModalSave=this.handleColumnManagementModalSave.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{location:a,report:s,reportError:o,queryString:l}=this.props,{selectedItems:n}=this.state,r=e.queryString!==l,i=!s&&!o,c=!a.search,d=t.selectedItems!==n;(r||i||c||d)&&this.updateReport()}render(){const{currency:e,history:t,providers:a,providersFetchStatus:s,query:o,report:l,reportError:n,reportFetchStatus:i,intl:c}=this.props,p=T(o.group_by),u=this.getComputedItems(),f=c.formatMessage(r.Z.ocpDetailsTitle);if(n)return d().createElement(y.W,{title:f});if(1===s)return d().createElement(m.g,{title:f});if(2===s){if(a&&a.meta&&0===a.meta.count)return d().createElement(g.L,{providerType:"ocp",title:f});if(!(0,x.g8)(a))return d().createElement(h.J,{title:f})}return d().createElement("div",{style:Ce.ocpDetails},d().createElement(G,{currency:e,groupBy:p,onCurrencySelected:e=>(0,B._s)(t,o,e),onGroupBySelected:this.handleGroupBySelected,report:l}),d().createElement("div",{style:Ce.content},this.getToolbar(u),this.getExportModal(u),this.getColumnManagementModal(),1===i?d().createElement(m.g,null):d().createElement(d().Fragment,null,d().createElement("div",{style:Ce.tableContainer},this.getTable()),d().createElement("div",{style:Ce.paginationContainer},d().createElement("div",{style:Ce.pagination},this.getPagination(!0))))))}}const Ze=(0,v.X1)(((e,t)=>{const a=(0,o.mB)(location.search),s=Z.iJ.selectIsCurrencyFeatureEnabled(e)?(0,D.z)():void 0,n={delta:"cost",filter:Object.assign(Object.assign({},Ee.filter),a.filter),filter_by:a.filter_by||Ee.filter_by,exclude:a.exclude||Ee.exclude,group_by:a.group_by||Ee.group_by,order_by:a.order_by||Ee.order_by,currency:s},r=(0,o.pm)(n),i=P.ZV.selectReport(e,Be,Oe,r),c=P.ZV.selectReportError(e,Be,Oe,r),d=P.ZV.selectReportFetchStatus(e,Be,Oe,r),p=(0,l.H)(_.NT),u=_.aX.selectProviders(e,"all",p),m=_.aX.selectProvidersFetchStatus(e,"all",p);return{currency:s,providers:(0,x.BV)(u,"ocp"),providersFetchStatus:m,query:n,queryString:r,report:i,reportError:c,reportFetchStatus:d}})),_e={fetchReport:P.nx.fetchReport},Pe=(0,p.ZP)((0,u.connect)(Ze,_e)(xe))}}]);
//# sourceMappingURL=../sourcemaps/ocp.ef72dbbc369614f19831302fe12dd9c4.js.map