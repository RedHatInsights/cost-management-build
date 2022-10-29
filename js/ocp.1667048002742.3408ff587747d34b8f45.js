"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[855],{79467:(e,t,s)=>{s.d(t,{C:()=>a.Z});var a=s(64727)},52951:(e,t,s)=>{s.r(t),s.d(t,{default:()=>w});var a=s(1326),o=s(79112),l=s(84717),n=s(39333),r=s(6456),i=s(50081),c=s(97027),d=s(92950),p=s.n(d),u=s(74806),m=s(78741),h=s(91919),g=s(79467),y=s(37269),f=s(86482),v=s(1156),S=s(78898),b=s(62331),C=s(68091),E=s(64703),M=s(67709),O=s(73903);const P=(0,v.X1)(((e,t)=>({selectWidgets:O.cm.selectWidgets(e),widgets:O.cm.selectCurrentWidgets(e)}))),x=(0,u.ZP)((0,m.connect)(P,{})(M.X));var B=s(87935),Z=s(70982);const _=(0,v.X1)(((e,t)=>({selectWidgets:Z.P2.selectWidgets(e),widgets:Z.P2.selectCurrentWidgets(e)}))),T=(0,u.ZP)((0,m.connect)(_,{})(B.f)),k=h.Hb.ocpDetails,D=r.C.cost,F=r.K.ocp,I=(0,v.X1)(((e,t)=>{const s=(0,o.mB)(location.search),r=(0,y.VL)(s),d=(0,y.pe)(s),u=S.iJ.selectIsCurrencyFeatureEnabled(e)?(0,E.zC)():void 0,m={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign({},s&&s.filter_by&&s.filter_by),r&&{[r]:void 0}),exclude:Object.assign({},s&&s.exclude&&s.exclude),group_by:Object.assign({},r&&{[r]:d})},h=(0,o.pm)(Object.assign(Object.assign({},m),{currency:u})),g=C.ZV.selectReport(e,F,D,h),v=C.ZV.selectReportError(e,F,D,h),M=C.ZV.selectReportFetchStatus(e,F,D,h),O=(0,l.H)(b.NT),P=b.aX.selectProviders(e,a.l.all,O),B=b.aX.selectProvidersFetchStatus(e,a.l.all,O);return{costOverviewComponent:p().createElement(x,{currency:u,groupBy:r,report:g}),currency:u,description:s[n.eG],detailsURL:k,emptyStateTitle:t.intl.formatMessage(c.Z.ocpDetailsTitle),groupBy:r,groupByValue:d,historicalDataComponent:p().createElement(T,{currency:u}),providers:(0,f.BV)(P,a.l.ocp),providersFetchStatus:B,providerType:a.l.ocp,query:s,queryString:h,report:g,reportError:v,reportFetchStatus:M,reportType:D,reportPathsType:F,tagReportPathsType:i.L.ocp,title:d}})),q={fetchReport:C.nx.fetchReport},w=(0,u.ZP)((0,m.connect)(I,q)(g.C))},7817:(e,t,s)=>{s.r(t),s.d(t,{default:()=>qe});var a=s(13157),o=s(1326),l=s(79112),n=s(84717),r=s(39333),i=s(6456),c=s(97027),d=s(44439),p=s(92950),u=s.n(p),m=s(74806),h=s(78741),g=s(52471),y=s(55672),f=s(2985),v=s(47947),S=s(40493),b=s(1156);const C=e=>{const t=new Set;return e.map((e=>{e.hidden&&t.add(e.value)})),t};class E extends u().Component{constructor(e,t){super(e,t),this.defaultState={hiddenColumns:C(this.props.options)},this.state=Object.assign({},this.defaultState),this.getHidden=e=>{const{hiddenColumns:t}=this.state,s=new Set(t);return s.delete(e)||s.add(e),s},this.isHidden=e=>{const{hiddenColumns:t}=this.state;return t.has(e)},this.handleChange=(e,t)=>{const s=this.getHidden(t.target.id);this.setState({hiddenColumns:s})},this.handleClose=()=>{this.setState(Object.assign({},this.defaultState),(()=>{this.props.onClose(!1)}))},this.handleSave=()=>{const{hiddenColumns:e}=this.state;this.props.onSave(e),this.handleClose()},this.selectAll=()=>{this.setState({hiddenColumns:new Set})}}componentDidUpdate(e){const{options:t}=this.props;if(e.options!==t){const e=C(t);this.setState({hiddenColumns:e})}}render(){const{options:e,intl:t}=this.props;return u().createElement(a.Modal,{description:u().createElement(a.TextContent,null,u().createElement(a.Text,{component:a.TextVariants.p},t.formatMessage(c.Z.manageColumnsDesc)),u().createElement(a.Button,{isInline:!0,onClick:this.selectAll,variant:"link"},t.formatMessage(c.Z.selectAll))),isOpen:this.props.isOpen,onClose:this.handleClose,title:t.formatMessage(c.Z.manageColumnsTitle),variant:a.ModalVariant.medium,actions:[u().createElement(a.Button,{key:"save",onClick:this.handleSave,variant:a.ButtonVariant.link},t.formatMessage(c.Z.save)),u().createElement(a.Button,{key:"cancel",onClick:this.handleClose,variant:a.ButtonVariant.link},t.formatMessage(c.Z.cancel))]},u().createElement(a.DataList,{"aria-label":t.formatMessage(c.Z.manageColumnsAriaLabel),id:"table-column-management",isCompact:!0},e.map((e=>u().createElement(a.DataListItem,{"aria-labelledby":e.value,key:e.value},u().createElement(a.DataListItemRow,null,u().createElement(a.DataListCheck,{"aria-labelledby":`${e.value}Label`,isChecked:!this.isHidden(e.value),name:e.value,id:e.value,onChange:this.handleChange}),u().createElement(a.DataListItemCells,{dataListCells:[u().createElement(a.DataListCell,{id:`${e.value}Label`,key:"table-column-management-item1"},u().createElement("span",null,t.formatMessage(e.label))),u().createElement(a.DataListCell,{key:"table-column-management-item2"},e.description&&u().createElement("span",null,t.formatMessage(e.description)))]})))))))}}const M=(0,b.X1)((()=>({}))),O=(0,h.connect)(M,{})(E),P=(0,m.ZP)(O);var x=s(37269),B=s(89662),Z=s(86482),_=s(78898),T=s(62331),k=s(68091);function D(e={}){return e.project?"project":e.cluster?"cluster":e.node?"node":"date"}var F=s(69511),I=s(64703),q=s(50081),w=s(60021),j=s(6450),R=s(98485),A=s(87560),L=s(45087),V=s(91778),$=s(33748);const X={delta:"cost",filter:{time_scope_units:"month",time_scope_value:-1,resolution:"monthly"}},G=[{label:"cluster",value:"cluster"},{label:"node",value:"node"},{label:"project",value:"project"}],W=q.L.ocp;class N extends u().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState)}render(){const{currency:e,groupBy:t,isCurrencyFeatureEnabled:s,isExportsFeatureEnabled:o,onCurrencySelected:l,onGroupBySelected:n,providers:r,providersError:i,report:d,intl:p}=this.props,m=d&&!i&&r&&r.meta&&r.meta.count>0;let h=u().createElement(R.L,null),g=u().createElement(R.L,null),y=u().createElement(R.L,null);if(d&&d.meta&&d.meta.total){const e=d.meta.total.cost&&d.meta.total.cost.total,t=d.meta.total.supplementary&&d.meta.total.supplementary.total,s=d.meta.total.infrastructure&&d.meta.total.infrastructure.total;h=(0,V.xG)(e?d.meta.total.cost.total.value:0,e?d.meta.total.cost.total.units:"USD"),g=(0,V.xG)(t?d.meta.total.supplementary.total.value:0,t?d.meta.total.supplementary.total.units:"USD"),y=(0,V.xG)(s?d.meta.total.infrastructure.total.value:0,s?d.meta.total.infrastructure.total.units:"USD")}return u().createElement("header",{style:$.W.header},u().createElement("div",{style:$.W.headerContent},u().createElement(a.Title,{headingLevel:"h1",style:$.W.title,size:a.TitleSizes["2xl"]},p.formatMessage(c.Z.ocpDetailsTitle)),u().createElement("div",{style:$.W.headerContentRight},s&&u().createElement(j.F,{currency:e,onSelect:l}),o&&u().createElement(w.b,null))),u().createElement("div",{style:$.W.headerContent},u().createElement("div",{style:$.W.headerContentLeft},u().createElement(A.X,{getIdKeyForGroupBy:D,groupBy:t,isDisabled:!m,onSelected:n,options:G,showTags:!0,tagReportPathsType:W})),Boolean(m)&&u().createElement("div",null,u().createElement(a.Tooltip,{content:p.formatMessage(c.Z.dashboardTotalCostTooltip,{infrastructureCost:y,supplementaryCost:g}),enableFlip:!0},u().createElement(a.Title,{headingLevel:"h2",style:$.W.costValue,size:a.TitleSizes["4xl"]},h)),u().createElement("div",{style:$.W.dateTitle},(0,L.J4)()))))}}const H=(0,b.X1)(((e,t)=>{const s=(0,l.pm)(X),a=(0,n.H)(T.NT),r=T.aX.selectProviders(e,o.l.all,a),i=T.aX.selectProvidersError(e,o.l.all,a),c=T.aX.selectProvidersFetchStatus(e,o.l.all,a);return{isCurrencyFeatureEnabled:_.iJ.selectIsCurrencyFeatureEnabled(e),isExportsFeatureEnabled:_.iJ.selectIsExportsFeatureEnabled(e),providers:(0,Z.BV)(r,o.l.ocp),providersError:i,providersFetchStatus:c,queryString:s}})),J=(0,m.ZP)((0,h.connect)(H,{})(N));var U=s(52636),z=s(4272),K=s(73727),Q=s(91919),Y=s(92165),ee=s(62423),te=s(54583),se=s(49382),ae=s(12289),oe=s(40794),le=s(11331),ne=s(43789);const re={emptyState:{backgroundColor:se.ZP.value,display:"flex",justifyContent:"center",paddingTop:le.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:ne.ZP.value},infoDescription:{color:ae.ZP.value,fontSize:oe.ZP.value}};const ie="infrastructure",ce="monthOverMonth",de="supplementary",pe=i.K.ocp;class ue extends u().Component{constructor(e){super(e),this.state={columns:[],rows:[]},this.initDatum=()=>{const{hiddenColumns:e,isAllSelected:t,query:s,report:o,selectedItems:l,intl:n}=this.props;if(!s||!o)return;const i=D(s.group_by),d=this.getGroupByTagKey(),p=[],m=(0,F.c)({report:o,idKey:d||i}),h=d?[{title:n.formatMessage(c.Z.tagNames)},{title:n.formatMessage(c.Z.monthOverMonthChange)},{id:ie,title:n.formatMessage(c.Z.ocpDetailsInfrastructureCost)},{id:de,title:n.formatMessage(c.Z.ocpDetailsSupplementaryCost)},Object.assign({orderBy:"cost",title:n.formatMessage(c.Z.cost)},m.length&&{transforms:[z.sortable]}),{title:""}]:[Object.assign({orderBy:i,title:n.formatMessage(c.Z.detailsResourceNames,{value:i})},m.length&&{transforms:[z.sortable]}),{id:ce,title:n.formatMessage(c.Z.monthOverMonthChange)},{id:ie,orderBy:"infrastructure_cost",title:n.formatMessage(c.Z.ocpDetailsInfrastructureCost)},{id:de,orderBy:"supplementary_cost",title:n.formatMessage(c.Z.ocpDetailsSupplementaryCost)},Object.assign({orderBy:"cost",title:n.formatMessage(c.Z.cost)},m.length&&{transforms:[z.sortable]}),{title:""}];m.map(((e,a)=>{const o=e&&null!==e.label?e.label:"",n=this.getMonthOverMonthCost(e,a),c=this.getInfrastructureCost(e,a),m=this.getSupplementaryCost(e,a),h=this.getTotalCost(e,a),g=this.getActions(e);let y=u().createElement(K.rU,{to:(0,te.T)({basePath:Q.Hb.ocpDetailsBreakdown,label:o.toString(),description:e.id,groupBy:d?`${r.P}${d}`:i,query:s})},o);const f=!(o===`no-${i}`||o===`no-${d}`);f||(y=o);const v=e.id&&e.id!==e.label?u().createElement("div",{style:re.infoDescription},e.id):null;p.push({cells:[{title:u().createElement("div",null,y,v)},{title:u().createElement("div",null,n),id:ce},{title:u().createElement("div",null,c),id:ie},{title:u().createElement("div",null,m),id:de},{title:u().createElement("div",null,h)},{title:u().createElement("div",null,g)}],disableSelection:!f,isOpen:!1,item:e,selected:t||l&&void 0!==l.find((t=>t.id===e.id))})}));const g=[{heightAuto:!0,cells:[{props:{colSpan:7},title:u().createElement(a.Bullseye,null,u().createElement("div",{style:{textAlign:"center"}},u().createElement(a.Spinner,{size:"xl"})))}]}],y=h.filter((t=>!e.has(t.id))),f=p.map((t=>{var s=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(s[a[o]]=e[a[o]])}return s}(t,[]);return s.cells=s.cells.filter((t=>!e.has(t.id))),s}));this.setState({columns:y,loadingRows:g,rows:f})},this.getActions=e=>{const{groupBy:t,query:s}=this.props;return u().createElement(ee.e,{groupBy:t,item:e,providerType:o.l.ocp,query:s,reportPathsType:pe,showPriceListOption:"cluster"===t})},this.getEmptyState=()=>{const{query:e,intl:t}=this.props;for(const t of Object.values(e.filter_by))if("*"!==t)return u().createElement(Y.c,{filter:t,showMargin:!1});return u().createElement(a.EmptyState,null,u().createElement(a.EmptyStateIcon,{icon:U.Xk}),u().createElement(a.EmptyStateBody,null,t.formatMessage(c.Z.detailsEmptyState)))},this.getSupplementaryCost=(e,t)=>{const{report:s,intl:a}=this.props,o=s&&s.meta&&s.meta.total&&s.meta.total.cost&&s.meta.total.cost.total?s.meta.total.cost.total.value:0,l=0===o?o.toFixed(2):(e.supplementary.total.value/o*100).toFixed(2);return u().createElement(u().Fragment,null,(0,V.xG)(e.supplementary.total.value,e.supplementary.total.units),u().createElement("div",{style:re.infoDescription,key:`total-cost-${t}`},a.formatMessage(c.Z.percentOfCost,{value:l})))},this.getGroupByTagKey=()=>{const{query:e}=this.props;let t;for(const s of Object.keys(e.group_by)){const e=s.indexOf(r.P);if(-1!==e){t=s.substring(e+r.P.length);break}}return t},this.getInfrastructureCost=(e,t)=>{const{report:s,intl:a}=this.props,o=s&&s.meta&&s.meta.total&&s.meta.total.cost&&s.meta.total.cost.total?s.meta.total.cost.total.value:0,l=0===o?o.toFixed(2):(e.infrastructure.total.value/o*100).toFixed(2);return u().createElement(u().Fragment,null,(0,V.xG)(e.infrastructure.total.value,e.infrastructure.total.units),u().createElement("div",{style:re.infoDescription,key:`total-cost-${t}`},a.formatMessage(c.Z.percentOfCost,{value:l})))},this.getMonthOverMonthCost=(e,t)=>{const{intl:s}=this.props,a=(0,V.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),o=null!==e.delta_percent?(0,V.rl)(Math.abs(e.delta_percent)):0,l=!(0===o||"0.00"===o),n=null!==e.delta_percent;let r;return l&&(r="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(r+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(r+=" increase")),n?u().createElement("div",{className:"monthOverMonthOverride"},u().createElement("div",{className:r,key:`month-over-month-cost-${t}`},l?s.formatMessage(c.Z.percent,{value:o}):u().createElement(R.L,null),Boolean(l&&null!==e.delta_percent&&e.delta_value>0)&&u().createElement("span",{className:"fa fa-sort-up",style:re.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(l&&null!==e.delta_percent&&e.delta_value<0)&&u().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},re.ininfoArrow),re.infoArrowDesc),key:`month-over-month-icon-${t}`})),u().createElement("div",{style:re.infoDescription,key:`month-over-month-info-${t}`},(0,L.Y)(a))):(0,L.Tf)()},this.getSortBy=()=>{const{query:e}=this.props,{columns:t}=this.state;let s=-1,a=z.SortByDirection.asc;for(const o of Object.keys(e.order_by)){let l=0;for(const n of t){if(n.orderBy===o){a="asc"===e.order_by[o]?z.SortByDirection.asc:z.SortByDirection.desc,s=l+1;break}l++}}return s>-1?{index:s,direction:a}:{}},this.getTotalCost=(e,t)=>{const{report:s,intl:a}=this.props,o=s&&s.meta&&s.meta.total&&s.meta.total.cost&&s.meta.total.cost.total?s.meta.total.cost.total.value:0,l=0===o?o.toFixed(2):(e.cost.total.value/o*100).toFixed(2);return u().createElement(u().Fragment,null,(0,V.xG)(e.cost.total.value,e.cost.total.units),u().createElement("div",{style:re.infoDescription,key:`total-cost-${t}`},a.formatMessage(c.Z.percentOfCost,{value:l})))},this.handleOnSelect=(e,t,s)=>{const{onSelected:a}=this.props;let o,l=[];-1===s?o=this.state.rows.map((e=>(e.selected=t,e))):(o=[...this.state.rows],o[s].selected=t,l=[o[s].item]),this.setState({rows:o},(()=>{a&&a(l,t)}))},this.handleOnSort=(e,t,s)=>{const{onSort:a}=this.props,{columns:o}=this.state;a&&a(o[t-1].orderBy,s===z.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{hiddenColumns:t,query:s,report:a,selectedItems:o}=this.props,n=a&&a.data?JSON.stringify(a.data):"",r=e.report&&e.report.data?JSON.stringify(e.report.data):"";(0,l.pm)(e.query)===(0,l.pm)(s)&&r===n&&e.selectedItems===o&&e.hiddenColumns===t||this.initDatum()}render(){const{intl:e,isLoading:t}=this.props,{columns:s,loadingRows:a,rows:o}=this.state;return u().createElement(u().Fragment,null,u().createElement(z.Table,{"aria-label":e.formatMessage(c.Z.gcpDetailsTableAriaLabel),canSelectAll:!1,cells:s,className:"tableOverride",rows:t?a:o,sortBy:this.getSortBy(),onSelect:t?void 0:this.handleOnSelect,onSort:this.handleOnSort,gridBreakPoint:"grid-2xl"},u().createElement(z.TableHeader,null),u().createElement(z.TableBody,null)),Boolean(0===o.length)&&u().createElement("div",{style:re.emptyState},this.getEmptyState()))}}const me=(0,m.ZP)(ue);var he=s(36116),ge=s(24318),ye=s(81278),fe=s(94282);const ve=q.Q.tag,Se=q.L.ocp;class be extends u().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,s=[{name:e.formatMessage(c.Z.filterByValues,{value:"cluster"}),key:"cluster"},{name:e.formatMessage(c.Z.filterByValues,{value:"node"}),key:"node"},{name:e.formatMessage(c.Z.filterByValues,{value:"project"}),key:"project"}];return t&&t.data&&t.data.length&&s.push({name:e.formatMessage(c.Z.filterByValues,{value:r.up}),key:r.up}),s}}componentDidMount(){const{fetchTag:e,queryString:t,tagReportFetchStatus:s}=this.props;this.setState({categoryOptions:this.getCategoryOptions()},(()=>{s!==b.iF.inProgress&&e(Se,ve,t)}))}componentDidUpdate(e){const{fetchTag:t,query:s,queryString:a,tagReport:o,tagReportFetchStatus:l}=this.props;(0,fe.X)(o,e.tagReport)?s&&!(0,fe.X)(s,e.query)&&l!==b.iF.inProgress&&t(Se,ve,a):this.setState({categoryOptions:this.getCategoryOptions()},(()=>{l!==b.iF.inProgress&&t(Se,ve,a)}))}render(){const{groupBy:e,isAllSelected:t,isExportDisabled:s,itemsPerPage:a,itemsTotal:o,onBulkSelected:l,onColumnManagementClicked:n,onExportClicked:r,onFilterAdded:i,onFilterRemoved:c,pagination:d,query:p,selectedItems:m,tagReport:h}=this.props,{categoryOptions:g}=this.state;return u().createElement(ge.k,{categoryOptions:g,groupBy:e,isAllSelected:t,isExportDisabled:s,itemsPerPage:a,itemsTotal:o,onBulkSelected:l,onColumnManagementClicked:n,onExportClicked:r,onFilterAdded:i,onFilterRemoved:c,pagination:d,query:p,resourcePathsType:he.C.ocp,selectedItems:m,showBulkSelect:!0,showColumnManagement:!0,showExport:!0,showFilter:!0,tagReport:h,tagReportPathsType:Se})}}const Ce=(0,b.X1)(((e,t)=>{const s=(0,l.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3});return{queryString:s,tagReport:ye.ux.selectTag(e,Se,ve,s),tagReportFetchStatus:ye.ux.selectTagFetchStatus(e,Se,ve,s)}})),Ee={fetchTag:ye.xr.Xt},Me=(0,h.connect)(Ce,Ee)(be),Oe=(0,m.ZP)(Me);var Pe=s(98499),xe=s(32412);const Be={content:{paddingBottom:Pe.ZP.value,paddingTop:Pe.ZP.value},ocpDetails:{minHeight:"100%"},paginationContainer:{marginLeft:Pe.ZP.value,marginRight:Pe.ZP.value},pagination:{backgroundColor:se.ZP.value,paddingBottom:xe.ZP.value,paddingTop:xe.ZP.value},tableContainer:{marginLeft:Pe.ZP.value,marginRight:Pe.ZP.value}},Ze={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},exclude:{},filter_by:{},group_by:{project:"*"},order_by:{cost:"desc"}},_e=[{label:c.Z.monthOverMonthChange,value:ce},{description:c.Z.ocpDetailsInfrastructureCostDesc,label:c.Z.ocpDetailsInfrastructureCost,value:ie,hidden:!0},{description:c.Z.ocpDetailsSupplementaryCostDesc,label:c.Z.ocpDetailsSupplementaryCost,value:de,hidden:!0}],Te=i.C.cost,ke=i.K.ocp;class De extends u().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],hiddenColumns:C(_e),isAllSelected:!1,isColumnManagementModalOpen:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getColumnManagementModal=()=>{const{hiddenColumns:e,isColumnManagementModalOpen:t}=this.state,s=(0,d.cloneDeep)(_e);return s.map((t=>{t.hidden=e.has(t.value)})),u().createElement(P,{isOpen:t,options:s,onClose:this.handleColumnManagementModalClose,onSave:this.handleColumnManagementModalSave})},this.getComputedItems=()=>{const{query:e,report:t}=this.props,s=D(e.group_by),a=(0,x.qV)(e);return(0,F.c)({report:t,idKey:a||s})},this.getExportModal=e=>{const{isAllSelected:t,isExportModalOpen:s,selectedItems:a}=this.state,{query:o,report:l}=this.props,n=D(o.group_by),i=(0,x.qV)(o),c=l&&l.meta?l.meta.count:0,d=[];return a.map((e=>{e.label!==`no-${n}`&&e.label!==`no-${i}`&&d.push(e)})),u().createElement(S.X,{count:t?c:d.length,isAllItems:(t||a.length===c)&&e.length>0,groupBy:i?`${r.P}${i}`:n,isOpen:s,items:d,onClose:this.handleExportModalClose,query:o,reportPathsType:ke})},this.getPagination=(e=!1)=>{const{history:t,intl:s,query:o,report:l}=this.props,n=l&&l.meta?l.meta.count:0,r=l&&l.meta&&l.meta.filter&&l.meta.filter.limit?l.meta.filter.limit:Ze.filter.limit,i=(l&&l.meta&&l.meta.filter&&l.meta.filter.offset?l.meta.filter.offset:Ze.filter.offset)/r+1;return u().createElement(a.Pagination,{isCompact:!e,itemCount:n,onPerPageSelect:(e,s)=>(0,B.xh)(t,o,s),onSetPage:(e,s)=>(0,B.$9)(t,o,l,s),page:i,perPage:r,titles:{paginationTitle:s.formatMessage(c.Z.paginationTitle,{title:s.formatMessage(c.Z.openShift),placement:e?"bottom":"top"})},variant:e?a.PaginationVariant.bottom:a.PaginationVariant.top,widgetId:"exports-pagination"+(e?"-bottom":"")})},this.getTable=()=>{const{history:e,query:t,report:s,reportFetchStatus:a}=this.props,{hiddenColumns:o,isAllSelected:l,selectedItems:n}=this.state,i=D(t.group_by),c=(0,x.qV)(t);return u().createElement(me,{groupBy:c?`${r.P}${c}`:i,hiddenColumns:o,isAllSelected:l,isLoading:a===b.iF.inProgress,onSelected:this.handleSelected,onSort:(s,a)=>(0,B.yB)(e,t,s,a),query:t,report:s,selectedItems:n})},this.getToolbar=e=>{const{history:t,query:s,report:a}=this.props,{isAllSelected:o,selectedItems:l}=this.state,n=D(s.group_by),i=(0,x.qV)(s),c=a&&a.meta?a.meta.count:0;return u().createElement(Oe,{groupBy:i?`${r.P}${i}`:n,isAllSelected:o,isExportDisabled:0===e.length||!o&&0===l.length,itemsPerPage:e.length,itemsTotal:c,onBulkSelected:this.handleBulkSelected,onColumnManagementClicked:this.handleColumnManagementModalOpen,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,B.$3)(t,s,e),onFilterRemoved:e=>(0,B.q7)(t,s,e),pagination:this.getPagination(),query:s,selectedItems:l})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleColumnManagementModalClose=e=>{this.setState({isColumnManagementModalOpen:e})},this.handleColumnManagementModalOpen=()=>{this.setState({isColumnManagementModalOpen:!0})},this.handleColumnManagementModalSave=e=>{this.setState({hiddenColumns:e})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{history:t,query:s}=this.props,a=e,o=Object.assign(Object.assign({},JSON.parse(JSON.stringify(s))),{group_by:{[a]:"*"},order_by:{cost:"desc"}});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{t.replace((0,B.ZE)(t,o,!0))}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:s,selectedItems:a}=this.state;let o=[...s?this.getComputedItems():a];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.updateReport=()=>{const{fetchReport:e,history:t,location:s,query:a,queryString:o}=this.props;s.search?e(ke,Te,o):t.replace((0,B.ZE)(t,{exclude:a?a.exclude:void 0,filter_by:a?a.filter_by:void 0,group_by:a?a.group_by:void 0,order_by:{cost:"desc"}}))},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleColumnManagementModalClose=this.handleColumnManagementModalClose.bind(this),this.handleColumnManagementModalOpen=this.handleColumnManagementModalOpen.bind(this),this.handleColumnManagementModalSave=this.handleColumnManagementModalSave.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{location:s,report:a,reportError:o,queryString:l}=this.props,{selectedItems:n}=this.state,r=e.queryString!==l,i=!a&&!o,c=!s.search,d=t.selectedItems!==n;(r||i||c||d)&&this.updateReport()}render(){const{currency:e,history:t,providers:s,providersFetchStatus:a,query:l,report:n,reportError:r,reportFetchStatus:i,intl:d}=this.props,p=D(l.group_by),m=this.getComputedItems(),h=d.formatMessage(c.Z.ocpDetailsTitle);if(r)return u().createElement(v.W,{title:h});if(a===b.iF.inProgress)return u().createElement(g.g,{title:h});if(a===b.iF.complete){if(s&&s.meta&&0===s.meta.count)return u().createElement(f.L,{providerType:o.l.ocp,title:h});if(!(0,Z.g8)(s))return u().createElement(y.J,{title:h})}return u().createElement("div",{style:Be.ocpDetails},u().createElement(J,{currency:e,groupBy:p,onCurrencySelected:e=>(0,B._s)(t,l,e),onGroupBySelected:this.handleGroupBySelected,report:n}),u().createElement("div",{style:Be.content},this.getToolbar(m),this.getExportModal(m),this.getColumnManagementModal(),i===b.iF.inProgress?u().createElement(g.g,null):u().createElement(u().Fragment,null,u().createElement("div",{style:Be.tableContainer},this.getTable()),u().createElement("div",{style:Be.paginationContainer},u().createElement("div",{style:Be.pagination},this.getPagination(!0))))))}}const Fe=(0,b.X1)(((e,t)=>{const s=(0,l.mB)(location.search),a=_.iJ.selectIsCurrencyFeatureEnabled(e)?(0,I.zC)():void 0,r={delta:"cost",filter:Object.assign(Object.assign({},Ze.filter),s.filter),filter_by:s.filter_by||Ze.filter_by,exclude:s.exclude||Ze.exclude,group_by:s.group_by||Ze.group_by,order_by:s.order_by||Ze.order_by},i=(0,l.pm)(Object.assign(Object.assign({},r),{currency:a})),c=k.ZV.selectReport(e,ke,Te,i),d=k.ZV.selectReportError(e,ke,Te,i),p=k.ZV.selectReportFetchStatus(e,ke,Te,i),u=(0,n.H)(T.NT),m=T.aX.selectProviders(e,o.l.all,u),h=T.aX.selectProvidersFetchStatus(e,o.l.all,u);return{currency:a,providers:(0,Z.BV)(m,o.l.ocp),providersFetchStatus:h,query:r,queryString:i,report:c,reportError:d,reportFetchStatus:p}})),Ie={fetchReport:k.nx.fetchReport},qe=(0,m.ZP)((0,h.connect)(Fe,Ie)(De))}}]);
//# sourceMappingURL=../sourcemaps/ocp.js.map