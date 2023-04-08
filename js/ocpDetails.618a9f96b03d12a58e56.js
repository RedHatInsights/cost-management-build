"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[7369],{17918:(e,t)=>{t.VH={name:"--pf-global--FontSize--md",value:"1rem",var:"var(--pf-global--FontSize--md)"},t.ZP=t.VH},44348:(e,t,a)=>{a.d(t,{$:()=>h,Y:()=>d});var o=a(90154),s=a(97027),n=a(92950),l=a.n(n),r=a(74806),i=a(77760),c=a(1156);const d=e=>{const t=new Set;return e.map((e=>{e.hidden&&t.add(e.value)})),t};class m extends l().Component{constructor(e,t){super(e,t),this.defaultState={hiddenColumns:d(this.props.options)},this.state=Object.assign({},this.defaultState),this.getHidden=e=>{const{hiddenColumns:t}=this.state,a=new Set(t);return a.delete(e)||a.add(e),a},this.isHidden=e=>{const{hiddenColumns:t}=this.state;return t.has(e)},this.handleChange=(e,t)=>{const a=this.getHidden(t.target.id);this.setState({hiddenColumns:a})},this.handleClose=()=>{this.setState(Object.assign({},this.defaultState),(()=>{this.props.onClose(!1)}))},this.handleSave=()=>{const{hiddenColumns:e}=this.state;this.props.onSave(e),this.handleClose()},this.selectAll=()=>{this.setState({hiddenColumns:new Set})}}componentDidUpdate(e){const{options:t}=this.props;if(e.options!==t){const e=d(t);this.setState({hiddenColumns:e})}}render(){const{options:e,intl:t}=this.props;return l().createElement(o.Modal,{description:l().createElement(o.TextContent,null,l().createElement(o.Text,{component:o.TextVariants.p},t.formatMessage(s.Z.manageColumnsDesc)),l().createElement(o.Button,{isInline:!0,onClick:this.selectAll,variant:"link"},t.formatMessage(s.Z.selectAll))),isOpen:this.props.isOpen,onClose:this.handleClose,title:t.formatMessage(s.Z.manageColumnsTitle),variant:o.ModalVariant.medium,actions:[l().createElement(o.Button,{key:"save",onClick:this.handleSave,variant:o.ButtonVariant.link},t.formatMessage(s.Z.save)),l().createElement(o.Button,{key:"cancel",onClick:this.handleClose,variant:o.ButtonVariant.link},t.formatMessage(s.Z.cancel))]},l().createElement(o.DataList,{"aria-label":t.formatMessage(s.Z.manageColumnsAriaLabel),id:"table-column-management",isCompact:!0},e.map((e=>l().createElement(o.DataListItem,{"aria-labelledby":e.value,key:e.value},l().createElement(o.DataListItemRow,null,l().createElement(o.DataListCheck,{"aria-labelledby":`${e.value}Label`,isChecked:!this.isHidden(e.value),name:e.value,id:e.value,onChange:this.handleChange}),l().createElement(o.DataListItemCells,{dataListCells:[l().createElement(o.DataListCell,{id:`${e.value}Label`,key:"table-column-management-item1"},l().createElement("span",null,t.formatMessage(e.label))),l().createElement(o.DataListCell,{key:"table-column-management-item2"},e.description&&l().createElement("span",null,t.formatMessage(e.description)))]})))))))}}const u=(0,c.X1)((()=>({}))),p=(0,i.connect)(u,{})(m),h=(0,r.ZP)(p)},33748:(e,t,a)=>{a.d(t,{W:()=>c});var o=a(49382),s=a(33605),n=a(17918),l=a(54881),r=a(98499),i=a(48196);const c={costValue:{marginTop:r.ZP.var,marginBottom:0},costLabelUnit:{fontSize:l.ZP.value,color:s.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:o.ZP.var,padding:r.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},info:{verticalAlign:"middle"},infoIcon:{fontSize:n.ZP.value},infoTitle:{fontWeight:"bold"},title:{paddingBottom:i.ZP.var}}},58990:(e,t,a)=>{a.r(t),a.d(t,{default:()=>je});var o=a(90154),s=a(1326),n=a(79112),l=a(84717),r=a(6456),i=a(97027),c=a(44439),d=a(92950),m=a.n(d),u=a(74806),p=a(77760),h=a(52471),g=a(55672),y=a(2985),f=a(47947),v=a(40493),C=a(44348),S=a(37269),E=a(19727),b=a(86482),M=a(10066),O=a(1156),P=a(78898),Z=a(62331),x=a(15920);function k(e={}){return e.project?"project":e.cluster?"cluster":e.node?"node":"date"}var B=a(69511),D=a(15829),F=a(14483),T=a(5842),R=a(50081),I=a(26744),_=a(6450),j=a(98485),L=a(87560),w=a(45087),A=a(91778),W=a(33748);const $=[{label:"cluster",value:"cluster"},{label:"node",value:"node"},{label:"project",value:"project"}],q=R.L.ocp;class V extends m().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState)}render(){const{currency:e,groupBy:t,isExportsFeatureEnabled:a,onCurrencySelected:s,onGroupBySelected:n,providers:l,providersError:r,report:c,intl:d}=this.props,u=c&&!r&&l&&l.meta&&l.meta.count>0;let p=m().createElement(j.L,null),h=m().createElement(j.L,null),g=m().createElement(j.L,null);if(c&&c.meta&&c.meta.total){const e=c.meta.total.cost&&c.meta.total.cost.total,t=c.meta.total.supplementary&&c.meta.total.supplementary.total,a=c.meta.total.infrastructure&&c.meta.total.infrastructure.total;p=(0,A.xG)(e?c.meta.total.cost.total.value:0,e?c.meta.total.cost.total.units:"USD"),h=(0,A.xG)(t?c.meta.total.supplementary.total.value:0,t?c.meta.total.supplementary.total.units:"USD"),g=(0,A.xG)(a?c.meta.total.infrastructure.total.value:0,a?c.meta.total.infrastructure.total.units:"USD")}return m().createElement("header",{style:W.W.header},m().createElement("div",{style:W.W.headerContent},m().createElement(o.Title,{headingLevel:"h1",style:W.W.title,size:o.TitleSizes["2xl"]},d.formatMessage(i.Z.ocpDetailsTitle)),m().createElement("div",{style:W.W.headerContentRight},m().createElement(_.F,{currency:e,onSelect:s}),a&&m().createElement(I.bj,null))),m().createElement("div",{style:W.W.headerContent},m().createElement("div",{style:W.W.headerContentLeft},m().createElement(L.X,{getIdKeyForGroupBy:k,groupBy:t,isDisabled:!u,onSelected:n,options:$,showTags:!0,tagReportPathsType:q})),Boolean(u)&&m().createElement("div",null,m().createElement(o.Tooltip,{content:d.formatMessage(i.Z.dashboardTotalCostTooltip,{infrastructureCost:g,supplementaryCost:h}),enableFlip:!0},m().createElement(o.Title,{headingLevel:"h2",style:W.W.costValue,size:o.TitleSizes["4xl"]},p)),m().createElement("div",{style:W.W.dateTitle},(0,w.J4)()))))}}const X=(0,O.X1)(((e,t)=>{const a=(0,l.H)(Z.NT),o=Z.aX.selectProviders(e,s.l.all,a),n=Z.aX.selectProvidersError(e,s.l.all,a),r=Z.aX.selectProvidersFetchStatus(e,s.l.all,a);return{isExportsFeatureEnabled:P.iJ.selectIsExportsFeatureEnabled(e),providers:(0,b.BV)(o,s.l.ocp),providersError:n,providersFetchStatus:r,providersQueryString:a}})),Q=(0,u.ZP)((0,p.connect)(X,{})(V));var N=a(39836),z=a(91919),G=a(62423),H=a(90569),J=a(90302),U=a(54583),K=a(68025),Y=a(39333),ee=a(89256),te=a(2136);const ae=ee.v.recommendations,oe=ee.N.ros;class se extends m().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.updateReport=()=>{const{fetchReport:e,reportQueryString:t}=this.props;e(ae,oe,t)},this.getBreakdownLink=e=>{const{project:t,router:a}=this.props;return 0===e||void 0===t?e:m().createElement(N.Link,{to:(0,U.T)({basePath:(0,K.dI)(z._.ocpDetailsBreakdown.path),groupBy:"project",id:t,isOptimizationsTab:!0,router:a,title:t})},e)}}componentDidMount(){this.updateReport()}render(){const{report:e}=this.props,t=e&&e.meta?e.meta.count:0;return m().createElement("span",null,this.getBreakdownLink(t))}}const ne=(0,O.X1)(((e,{project:t})=>{const a={project:t},o=(0,Y.pm)(a);return{report:te.R0.selectRos(e,ae,oe,o),reportError:te.R0.selectRosError(e,ae,oe,o),reportFetchStatus:te.R0.selectRosFetchStatus(e,ae,oe,o),reportQueryString:o}})),le={fetchReport:te.Ze.fetchRosReport},re=(0,T.E)((0,p.connect)(ne,le)(se));const ie="infrastructure",ce="monthOverMonth",de="supplementary",me=r.K.ocp;class ue extends m().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{groupBy:e,groupByTagKey:t,hiddenColumns:a,intl:s,isAllSelected:n,isRosFeatureEnabled:l,report:r,router:c,selectedItems:d}=this.props;if(!r)return;const u="project"===e,p=[],h=(0,B.c)({report:r,idKey:t||e}),g=t?[{name:""},{name:s.formatMessage(i.Z.tagNames),style:"project"===e?J.W.nameColumn:void 0},{hidden:!u,name:""},{hidden:!(u&&l),name:s.formatMessage(i.Z.optimizations)},{name:s.formatMessage(i.Z.monthOverMonthChange)},{id:ie,name:s.formatMessage(i.Z.ocpDetailsInfrastructureCost),style:J.W.managedColumn},{id:de,name:s.formatMessage(i.Z.ocpDetailsSupplementaryCost),style:J.W.managedColumn},Object.assign({orderBy:"cost",name:s.formatMessage(i.Z.cost),style:J.W.costColumn},h.length&&{isSortable:!1}),{name:""}]:[{name:""},Object.assign(Object.assign({orderBy:e,name:s.formatMessage(i.Z.detailsResourceNames,{value:e})},h.length&&{isSortable:!0}),{style:"project"===e?J.W.nameColumn:void 0}),{hidden:!u,name:""},{hidden:!(u&&l),name:s.formatMessage(i.Z.optimizations)},{id:ce,name:s.formatMessage(i.Z.monthOverMonthChange)},{id:ie,orderBy:"infrastructure_cost",name:s.formatMessage(i.Z.ocpDetailsInfrastructureCost),style:J.W.managedColumn},{id:de,orderBy:"supplementary_cost",name:s.formatMessage(i.Z.ocpDetailsSupplementaryCost),style:J.W.managedColumn},Object.assign({orderBy:"cost",name:s.formatMessage(i.Z.cost),style:J.W.costColumn},h.length&&{isSortable:!0}),{name:""}];h.map(((a,r)=>{const h=this.getTotalCost(a,r),g=a&&null!==a.label?a.label:"",y=this.getMonthOverMonthCost(a,r),f=this.getSupplementaryCost(a,r),v=this.getInfrastructureCost(a,r),C=a.classification===F.A8,S=a.classification===F.ND,E=a.id&&a.id!==a.label?m().createElement("div",{style:J.W.infoDescription},a.id):null,b=g===`${F.Xq}${e}`||g===`${F.Xq}${t}`||S,M=this.getActions(a,b),O=b?g:m().createElement(N.Link,{to:(0,U.T)({basePath:(0,K.dI)(z._.ocpDetailsBreakdown.path),description:a.id,id:a.id,isPlatformCosts:C,groupBy:e,router:c,title:g.toString()})},g);p.push({cells:[{},{value:m().createElement(m().Fragment,null,m().createElement("div",null,O),m().createElement("div",{style:J.W.infoDescription},E))},{hidden:!u,value:a.classification===F.e4?m().createElement("div",null,m().createElement(o.Label,{variant:"outline",color:"green"},s.formatMessage(i.Z.default))):m().createElement("div",{style:J.W.defaultLabel})},{hidden:!(u&&l),value:!C&&!b&&m().createElement("div",null,m().createElement(re,{project:g}))},{value:m().createElement("div",null,y),id:ce},{value:m().createElement("div",null,v),id:ie,style:J.W.managedColumn},{value:m().createElement("div",null,f),id:de,style:J.W.managedColumn},{value:m().createElement("div",null,h),style:J.W.managedColumn},{value:m().createElement("div",null,M)}],item:a,selected:n||d&&void 0!==d.find((e=>e.id===a.id)),selectionDisabled:b})}));const y=g.filter((e=>!a.has(e.id)&&!e.hidden)),f=p.map((e=>{var t=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(a[o[s]]=e[o[s]])}return a}(e,[]);return t.cells=t.cells.filter((e=>!a.has(e.id)&&!e.hidden)),t}));this.setState({columns:y,rows:f})},this.getActions=(e,t)=>{const{groupBy:a,reportQueryString:o}=this.props;return m().createElement(G.e,{groupBy:a,isDisabled:t,item:e,providerType:s.l.ocp,reportPathsType:me,reportQueryString:o,showPriceListOption:"cluster"===a})},this.getSupplementaryCost=(e,t)=>{const{report:a,intl:o}=this.props,s=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total?a.meta.total.cost.total.value:0,n=0===s?s.toFixed(2):(e.supplementary.total.value/s*100).toFixed(2);return m().createElement(m().Fragment,null,(0,A.xG)(e.supplementary.total.value,e.supplementary.total.units),m().createElement("div",{style:J.W.infoDescription,key:`total-cost-${t}`},o.formatMessage(i.Z.percentOfCost,{value:n})))},this.getInfrastructureCost=(e,t)=>{const{report:a,intl:o}=this.props,s=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total?a.meta.total.cost.total.value:0,n=0===s?s.toFixed(2):(e.infrastructure.total.value/s*100).toFixed(2);return m().createElement(m().Fragment,null,(0,A.xG)(e.infrastructure.total.value,e.infrastructure.total.units),m().createElement("div",{style:J.W.infoDescription,key:`total-cost-${t}`},o.formatMessage(i.Z.percentOfCost,{value:n})))},this.getMonthOverMonthCost=(e,t)=>{const{intl:a}=this.props,o=(0,A.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),s=null!==e.delta_percent?(0,A.rl)(Math.abs(e.delta_percent)):0,n=!(0===s||"0.00"===s),l=null!==e.delta_percent;let r;return n&&(r="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(r+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(r+=" increase")),l?m().createElement("div",{className:"monthOverMonthOverride"},m().createElement("div",{className:r,key:`month-over-month-cost-${t}`},n?a.formatMessage(i.Z.percent,{value:s}):m().createElement(j.L,null),Boolean(n&&null!==e.delta_percent&&e.delta_value>0)&&m().createElement("span",{className:"fa fa-sort-up",style:J.W.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(n&&null!==e.delta_percent&&e.delta_value<0)&&m().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},J.W.ininfoArrow),J.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),m().createElement("div",{style:J.W.infoDescription,key:`month-over-month-info-${t}`},(0,w.Y)(o))):(0,w.Tf)()},this.getTotalCost=(e,t)=>{const{report:a,intl:o}=this.props,s=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total?a.meta.total.cost.total.value:0,n=0===s?s.toFixed(2):(e.cost.total.value/s*100).toFixed(2);return m().createElement(m().Fragment,null,(0,A.xG)(e.cost.total.value,e.cost.total.units),m().createElement("div",{style:J.W.infoDescription,key:`total-cost-${t}`},o.formatMessage(i.Z.percentOfCost,{value:n})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{hiddenColumns:t,report:a,selectedItems:o}=this.props,s=a&&a.data?JSON.stringify(a.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")===s&&e.selectedItems===o&&e.hiddenColumns===t||this.initDatum()}render(){const{isLoading:e,onSelected:t,onSort:a,selectedItems:o}=this.props,{columns:s,rows:n}=this.state;return m().createElement(H.w,{columns:s,isLoading:e,onSelected:t,onSort:a,rows:n,selectedItems:o})}}const pe=(0,u.ZP)((0,T.E)(ue));var he=a(36116),ge=a(70539),ye=a(48949),fe=a(94282);const ve=R.Q.tag,Ce=R.L.ocp;class Se extends m().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,a=[{name:e.formatMessage(i.Z.filterByValues,{value:"cluster"}),key:"cluster"},{name:e.formatMessage(i.Z.filterByValues,{value:"node"}),key:"node"},{name:e.formatMessage(i.Z.filterByValues,{value:"project"}),key:"project"}];return t&&t.data&&t.data.length&&a.push({name:e.formatMessage(i.Z.filterByValues,{value:F.up}),key:F.up}),a}}componentDidMount(){const{fetchTag:e,tagReportFetchStatus:t,tagQueryString:a}=this.props;this.setState({categoryOptions:this.getCategoryOptions()},(()=>{t!==O.iF.inProgress&&e(Ce,ve,a)}))}componentDidUpdate(e){const{fetchTag:t,query:a,tagReport:o,tagReportFetchStatus:s,tagQueryString:n}=this.props;(0,fe.X)(o,e.tagReport)?a&&!(0,fe.X)(a,e.query)&&s!==O.iF.inProgress&&t(Ce,ve,n):this.setState({categoryOptions:this.getCategoryOptions()},(()=>{s!==O.iF.inProgress&&t(Ce,ve,n)}))}render(){const{groupBy:e,isAllSelected:t,isDisabled:a,isExportDisabled:o,itemsPerPage:s,itemsTotal:n,onBulkSelected:l,onColumnManagementClicked:r,onExportClicked:i,onFilterAdded:c,onFilterRemoved:d,onPlatformCostsChanged:u,pagination:p,query:h,selectedItems:g,tagReport:y}=this.props,{categoryOptions:f}=this.state;return m().createElement(ge.k,{categoryOptions:f,groupBy:e,isAllSelected:t,isDisabled:a,isExportDisabled:o,itemsPerPage:s,itemsTotal:n,onBulkSelected:l,onColumnManagementClicked:r,onExportClicked:i,onFilterAdded:c,onFilterRemoved:d,onPlatformCostsChanged:u,pagination:p,query:h,resourcePathsType:he.C.ocp,selectedItems:g,showBulkSelect:!0,showColumnManagement:!0,showExcludes:!0,showExport:!0,showFilter:!0,showPlatformCosts:"project"===e,tagReport:y,tagReportPathsType:Ce})}}const Ee=(0,O.X1)(((e,t)=>{const a=(0,n.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3});return{tagReport:ye.ux.selectTag(e,Ce,ve,a),tagReportFetchStatus:ye.ux.selectTagFetchStatus(e,Ce,ve,a),tagQueryString:a}})),be={fetchTag:ye.xr.Xt},Me=(0,p.connect)(Ee,be)(Se),Oe=(0,u.ZP)(Me);var Pe=a(49382),Ze=a(98499),xe=a(32412);const ke={content:{paddingBottom:Ze.ZP.value,paddingTop:Ze.ZP.value},ocpDetails:{minHeight:"100vh"},paginationContainer:{marginLeft:Ze.ZP.value,marginRight:Ze.ZP.value},pagination:{backgroundColor:Pe.ZP.value,paddingBottom:xe.ZP.value,paddingTop:xe.ZP.value},tableContainer:{marginLeft:Ze.ZP.value,marginRight:Ze.ZP.value},toolbarContainer:{marginLeft:Ze.ZP.value,marginRight:Ze.ZP.value}},Be={filter:{limit:10,offset:0},filter_by:{},exclude:{},group_by:{project:"*"},order_by:{cost:"desc"}},De=[{label:i.Z.monthOverMonthChange,value:ce},{description:i.Z.ocpDetailsInfrastructureCostDesc,label:i.Z.ocpDetailsInfrastructureCost,value:ie,hidden:!0},{description:i.Z.ocpDetailsSupplementaryCostDesc,label:i.Z.ocpDetailsSupplementaryCost,value:de,hidden:!0}],Fe=r.C.cost,Te=r.K.ocp;class Re extends m().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],hiddenColumns:(0,C.Y)(De),isAllSelected:!1,isColumnManagementModalOpen:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getColumnManagementModal=()=>{const{hiddenColumns:e,isColumnManagementModalOpen:t}=this.state,a=(0,c.cloneDeep)(De);return a.map((t=>{t.hidden=e.has(t.value)})),m().createElement(C.$,{isOpen:t,options:a,onClose:this.handleColumnManagementModalClose,onSave:this.handleColumnManagementModalSave})},this.getComputedItems=()=>{const{query:e,report:t}=this.props,a=k(e.group_by),o=(0,S.qV)(e);return(0,B.c)({report:t,idKey:o||a})},this.getExportModal=e=>{const{query:t,report:a,reportQueryString:o}=this.props,{isAllSelected:s,isExportModalOpen:n,selectedItems:l}=this.state,r=k(t.group_by),i=(0,S.qV)(t),c=a&&a.meta?a.meta.count:0,d=[];return l.map((e=>{e.label!==`${F.Xq}${r}`&&e.label!==`${F.Xq}${i}`&&d.push(e)})),m().createElement(v.X,{count:s?c:d.length,isAllItems:(s||l.length===c)&&e.length>0,groupBy:i?`${F.P}${i}`:r,isOpen:n,items:d,onClose:this.handleExportModalClose,reportPathsType:Te,reportQueryString:o})},this.getPagination=(e=!1,t=!1)=>{const{intl:a,query:s,report:n,router:l}=this.props,r=n&&n.meta?n.meta.count:0,c=n&&n.meta&&n.meta.filter&&n.meta.filter.limit?n.meta.filter.limit:Be.filter.limit,d=n&&n.meta&&n.meta.filter&&n.meta.filter.offset?n.meta.filter.offset:Be.filter.offset,u=Math.trunc(d/c+1);return m().createElement(o.Pagination,{isCompact:!t,isDisabled:e,itemCount:r,onPerPageSelect:(e,t)=>(0,E.xh)(s,l,t),onSetPage:(e,t)=>(0,E.$9)(s,l,n,t),page:u,perPage:c,titles:{paginationTitle:a.formatMessage(i.Z.paginationTitle,{title:a.formatMessage(i.Z.openShift),placement:t?"bottom":"top"})},variant:t?o.PaginationVariant.bottom:o.PaginationVariant.top,widgetId:"exports-pagination"+(t?"-bottom":"")})},this.getTable=()=>{const{isRosFeatureEnabled:e,query:t,report:a,reportFetchStatus:o,reportQueryString:s,router:n}=this.props,{hiddenColumns:l,isAllSelected:r,selectedItems:i}=this.state,c=k(t.group_by),d=(0,S.qV)(t);return m().createElement(pe,{groupBy:d?`${F.P}${d}`:c,groupByTagKey:d,hiddenColumns:l,isAllSelected:r,isLoading:o===O.iF.inProgress,isRosFeatureEnabled:e,onSelected:this.handleSelected,onSort:(e,a)=>(0,E.yB)(t,n,e,a),report:a,reportQueryString:s,selectedItems:i})},this.getToolbar=e=>{const{query:t,report:a,router:o}=this.props,{isAllSelected:s,selectedItems:n}=this.state,l=k(t.group_by),r=(0,S.qV)(t),i=0===e.length,c=a&&a.meta?a.meta.count:0;return m().createElement(Oe,{groupBy:r?`${F.P}${r}`:l,isAllSelected:s,isDisabled:i,isExportDisabled:i||!s&&0===n.length,itemsPerPage:e.length,itemsTotal:c,onBulkSelected:this.handleBulkSelected,onColumnManagementClicked:this.handleColumnManagementModalOpen,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,E.$3)(t,o,e),onFilterRemoved:e=>(0,E.q7)(t,o,e),onPlatformCostsChanged:this.handlePlatformCostsChanged,pagination:this.getPagination(i),query:t,selectedItems:n})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleColumnManagementModalClose=e=>{this.setState({isColumnManagementModalOpen:e})},this.handleColumnManagementModalOpen=()=>{this.setState({isColumnManagementModalOpen:!0})},this.handleColumnManagementModalSave=e=>{this.setState({hiddenColumns:e})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{query:t,router:a}=this.props,o=e,s=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{group_by:{[o]:"*"},order_by:{cost:"desc"},category:void 0});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{a.navigate((0,M.Z)(s,a.location,!0),{replace:!0})}))},this.handlePlatformCostsChanged=e=>{const{query:t,router:a}=this.props,o=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{category:e?F.rx:void 0});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{a.navigate((0,M.Z)(o,a.location,!0),{replace:!0})}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:a,selectedItems:o}=this.state;let s=[...a?this.getComputedItems():o];e&&e.length>0&&(t?e.map((e=>s.push(e))):e.map((e=>{s=s.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:s})},this.updateReport=()=>{const{fetchReport:e,reportQueryString:t}=this.props;e(Te,Fe,t)},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleColumnManagementModalClose=this.handleColumnManagementModalClose.bind(this),this.handleColumnManagementModalOpen=this.handleColumnManagementModalOpen.bind(this),this.handleColumnManagementModalSave=this.handleColumnManagementModalSave.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handlePlatformCostsChanged=this.handlePlatformCostsChanged.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{report:a,reportError:o,reportQueryString:s,router:n}=this.props,{selectedItems:l}=this.state,r=e.reportQueryString!==s,i=!a&&!o,c=!n.location.search,d=t.selectedItems!==l;(r||i||c||d)&&this.updateReport()}render(){const{currency:e,intl:t,providers:a,providersFetchStatus:o,query:n,report:l,reportError:r,reportFetchStatus:c,router:d}=this.props,u=this.getComputedItems(),p=k(n.group_by),v=0===u.length,C=t.formatMessage(i.Z.ocpDetailsTitle);if(r)return m().createElement(f.W,{title:C});if(o===O.iF.inProgress)return m().createElement(h.g,{title:C});if(o===O.iF.complete){if(a&&a.meta&&0===a.meta.count)return m().createElement(y.L,{providerType:s.l.ocp,title:C});if(!(0,b.g8)(a))return m().createElement(g.J,{title:C})}return m().createElement("div",{style:ke.ocpDetails},m().createElement(Q,{currency:e,groupBy:p,onCurrencySelected:e=>(0,E._s)(n,d,e),onGroupBySelected:this.handleGroupBySelected,report:l}),m().createElement("div",{style:ke.content},m().createElement("div",{style:ke.toolbarContainer},this.getToolbar(u)),this.getExportModal(u),this.getColumnManagementModal(),c===O.iF.inProgress?m().createElement(h.g,null):m().createElement(m().Fragment,null,m().createElement("div",{style:ke.tableContainer},this.getTable()),m().createElement("div",{style:ke.paginationContainer},m().createElement("div",{style:ke.pagination},this.getPagination(v,!0))))))}}const Ie=(0,O.X1)(((e,{router:t})=>{const a=(0,n.mB)(t.location.search),o=(0,D.zC)(),r=Object.assign(Object.assign({},Be),a),i={category:r.category,currency:o,delta:"cost",exclude:r.exclude,filter:Object.assign(Object.assign({},r.filter),{resolution:"monthly",time_scope_units:"month",time_scope_value:-1}),filter_by:r.filter_by,group_by:r.group_by,order_by:r.order_by},c=(0,n.pm)(i),d=x.ZV.selectReport(e,Te,Fe,c),m=x.ZV.selectReportError(e,Te,Fe,c),u=x.ZV.selectReportFetchStatus(e,Te,Fe,c),p=(0,l.H)(Z.NT),h=Z.aX.selectProviders(e,s.l.all,p),g=Z.aX.selectProvidersFetchStatus(e,s.l.all,p);return{currency:o,isRosFeatureEnabled:P.iJ.selectIsRosFeatureEnabled(e),providers:(0,b.BV)(h,s.l.ocp),providersFetchStatus:g,query:r,report:d,reportError:m,reportFetchStatus:u,reportQueryString:c}})),_e={fetchReport:x.nx.fetchReport},je=(0,u.ZP)((0,T.E)((0,p.connect)(Ie,_e)(Re)))}}]);
//# sourceMappingURL=../sourcemaps/ocpDetails.d6c8361fca4912f4ce8a6a16d19627f4.js.map