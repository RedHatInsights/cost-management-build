"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[7990],{15265:(e,t,a)=>{a.d(t,{LA:()=>o,ZP:()=>s,mq:()=>l});var n=a(40400);const l={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},o=(0,n.IU)(l),s=o},17918:(e,t)=>{t.VH={name:"--pf-global--FontSize--md",value:"1rem",var:"var(--pf-global--FontSize--md)"},t.ZP=t.VH},62423:(e,t,a)=>{a.d(t,{e:()=>C});var n=a(90154),l=a(97027),o=a(92950),s=a.n(o),r=a(74806),i=a(77760),c=a(40493),d=a(1156),m=a(58613),p=a(14483),u=a(5842);class h extends s().Component{constructor(e,t){super(e,t),this.defaultState={isDropdownOpen:!1,isExportModalOpen:!1},this.state=Object.assign({},this.defaultState),this.getExportModal=()=>{const{groupBy:e,item:t,reportPathsType:a,reportQueryString:n}=this.props,{isExportModalOpen:l}=this.state;return s().createElement(c.X,{count:1,groupBy:e,isOpen:l,items:[t],onClose:this.handleExportModalClose,reportPathsType:a,reportQueryString:n})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleOnSelect=()=>{const{isDropdownOpen:e}=this.state;this.setState({isDropdownOpen:!e})},this.handleOnToggle=e=>{this.setState({isDropdownOpen:e})},this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleOnToggle=this.handleOnToggle.bind(this),this.handleOnSelect=this.handleOnSelect.bind(this)}render(){const{groupBy:e,isDisabled:t,showPriceListOption:a,intl:o,item:{source_uuid:r},redirectToCostModel:i,router:c}=this.props,d=[s().createElement(n.DropdownItem,{component:"button",isDisabled:t,key:"export-action",onClick:this.handleExportModalOpen},o.formatMessage(l.Z.detailsActionsExport))];return a&&d.unshift(s().createElement(n.DropdownItem,{component:"button",key:"price-list-action",isDisabled:t||e.includes(p.P)||0===r.length,onClick:()=>i(r[0],c)},o.formatMessage(l.Z.detailsActionsPriceList))),s().createElement(s().Fragment,null,s().createElement(n.Dropdown,{onSelect:this.handleOnSelect,toggle:s().createElement(n.KebabToggle,{onToggle:this.handleOnToggle}),isOpen:this.state.isDropdownOpen,isPlain:!0,position:"right",dropdownItems:d}),this.getExportModal())}}const g=(0,d.X1)(((e,t)=>({}))),y={redirectToCostModel:m.F0.redirectToCostModelFromSourceUuid},f=(0,i.connect)(g,y)(h),C=(0,r.ZP)((0,u.E)(f))},44348:(e,t,a)=>{a.d(t,{$:()=>h,Y:()=>d});var n=a(90154),l=a(97027),o=a(92950),s=a.n(o),r=a(74806),i=a(77760),c=a(1156);const d=e=>{const t=new Set;return e.map((e=>{e.hidden&&t.add(e.value)})),t};class m extends s().Component{constructor(e,t){super(e,t),this.defaultState={hiddenColumns:d(this.props.options)},this.state=Object.assign({},this.defaultState),this.getHidden=e=>{const{hiddenColumns:t}=this.state,a=new Set(t);return a.delete(e)||a.add(e),a},this.isHidden=e=>{const{hiddenColumns:t}=this.state;return t.has(e)},this.handleChange=(e,t)=>{const a=this.getHidden(t.target.id);this.setState({hiddenColumns:a})},this.handleClose=()=>{this.setState(Object.assign({},this.defaultState),(()=>{this.props.onClose(!1)}))},this.handleSave=()=>{const{hiddenColumns:e}=this.state;this.props.onSave(e),this.handleClose()},this.selectAll=()=>{this.setState({hiddenColumns:new Set})}}componentDidUpdate(e){const{options:t}=this.props;if(e.options!==t){const e=d(t);this.setState({hiddenColumns:e})}}render(){const{options:e,intl:t}=this.props;return s().createElement(n.Modal,{description:s().createElement(n.TextContent,null,s().createElement(n.Text,{component:n.TextVariants.p},t.formatMessage(l.Z.manageColumnsDesc)),s().createElement(n.Button,{isInline:!0,onClick:this.selectAll,variant:"link"},t.formatMessage(l.Z.selectAll))),isOpen:this.props.isOpen,onClose:this.handleClose,title:t.formatMessage(l.Z.manageColumnsTitle),variant:n.ModalVariant.medium,actions:[s().createElement(n.Button,{key:"save",onClick:this.handleSave,variant:n.ButtonVariant.link},t.formatMessage(l.Z.save)),s().createElement(n.Button,{key:"cancel",onClick:this.handleClose,variant:n.ButtonVariant.link},t.formatMessage(l.Z.cancel))]},s().createElement(n.DataList,{"aria-label":t.formatMessage(l.Z.manageColumnsAriaLabel),id:"table-column-management",isCompact:!0},e.map((e=>s().createElement(n.DataListItem,{"aria-labelledby":e.value,key:e.value},s().createElement(n.DataListItemRow,null,s().createElement(n.DataListCheck,{"aria-labelledby":`${e.value}Label`,isChecked:!this.isHidden(e.value),name:e.value,id:e.value,onChange:this.handleChange}),s().createElement(n.DataListItemCells,{dataListCells:[s().createElement(n.DataListCell,{id:`${e.value}Label`,key:"table-column-management-item1"},s().createElement("span",null,t.formatMessage(e.label))),s().createElement(n.DataListCell,{key:"table-column-management-item2"},e.description&&s().createElement("span",null,t.formatMessage(e.description)))]})))))))}}const p=(0,c.X1)((()=>({}))),u=(0,i.connect)(p,{})(m),h=(0,r.ZP)(u)},90302:(e,t,a)=>{a.d(t,{W:()=>i});var n=a(49382),l=a(12289),o=a(40794),s=a(11331),r=a(43789);const i={costColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end",paddingRight:0},defaultLabel:{minWidth:"63px"},emptyState:{backgroundColor:n.ZP.value,display:"flex",justifyContent:"center",paddingTop:s.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:r.ZP.value},infoDescription:{color:l.ZP.value,fontSize:o.ZP.value},lastReported:{textAlign:"right",paddingRight:"40px"},lastReportedColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end"},managedColumn:{textAlign:"right"},nameColumn:{width:"1%"}}},90569:(e,t,a)=>{a.d(t,{w:()=>g});var n=a(90154),l=a(52636),o=a(40227),s=a(79112),r=a(97027),i=a(92950),c=a.n(i),d=a(74806),m=a(42901),p=a(5842),u=a(90302);class h extends c().Component{constructor(e){super(e),this.getEmptyState=()=>{const{intl:e,router:t}=this.props,a=(0,s.mB)(t.location.search);if(a.filter_by)for(const e of Object.values(a.filter_by))if("*"!==e)return c().createElement(m.c,{filter:e,showMargin:!1});return c().createElement(n.EmptyState,null,c().createElement(n.EmptyStateIcon,{icon:l.Xk}),c().createElement(n.EmptyStateBody,null,e.formatMessage(r.Z.detailsEmptyState)))},this.getSortBy=e=>{const{columns:t,router:a}=this.props,n=t[e].orderBy,l=(0,s.mB)(a.location.search),o=l&&l.order_by&&l.order_by[n];return o?{index:e,direction:o}:{}},this.getSortParams=e=>({sortBy:this.getSortBy(e),onSort:this.handleOnSort,columnIndex:e}),this.handleOnSelect=(e,t,a)=>{const{onSelected:n,rows:l}=this.props;let o,s=[];-1===a?o=l.map((e=>(e.selected=t,e))):(o=[...l],o[a].selected=t,s=[o[a].item]),this.setState({rows:l},(()=>{n&&n(s,t)}))},this.handleOnSort=(e,t,a)=>{const{columns:n,onSort:l}=this.props;l&&l(n[t].orderBy,a===o.SortByDirection.asc)},this.handleOnRowClick=(e,t)=>{const{onRowClick:a,rows:n}=this.props;n.map((e=>e.selected=!1)),n[t].selected=!0,this.setState({rows:n},(()=>{a&&a(e,t)}))},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}render(){const{columns:e,intl:t,isLoading:a,isRecommendations:l,rows:s}=this.props;return c().createElement(c().Fragment,null,c().createElement(o.TableComposable,{"aria-label":t.formatMessage(r.Z.dataTableAriaLabel),className:"tableOverride",gridBreakPoint:"grid-2xl",hasSelectableRowCaption:l},c().createElement(o.Thead,null,c().createElement(o.Tr,null,e.map(((e,t)=>c().createElement(o.Th,{key:`col-${t}-${e.value}`,modifier:"nowrap",sort:e.isSortable?this.getSortParams(t):void 0,style:e.style},e.name))))),c().createElement(o.Tbody,null,a?c().createElement(o.Tr,null,c().createElement(o.Td,{colSpan:100},c().createElement(n.Bullseye,null,c().createElement("div",{style:{textAlign:"center"}},c().createElement(n.Spinner,{size:"xl"}))))):s.map(((t,a)=>c().createElement(o.Tr,{isSelectable:l,isHoverable:l,isRowSelected:l&&t.selected,onRowClick:e=>this.handleOnRowClick(e,a),key:`row-${a}`},t.cells.map(((n,s)=>0!==s||l?c().createElement(o.Td,{dataLabel:e[s].name,key:`cell-${a}-${s}`,modifier:"nowrap",isActionCell:!l&&s===t.cells.length-1,style:n.style},n.value):c().createElement(o.Td,{dataLabel:e[s].name,key:`cell-${s}-${a}`,modifier:"nowrap",select:{disable:t.selectionDisabled,isSelected:t.selected,onSelect:(e,t)=>this.handleOnSelect(e,t,a),rowIndex:a},style:n.style})))))))),Boolean(0===s.length)&&c().createElement("div",{style:u.W.emptyState},this.getEmptyState()))}}const g=(0,d.ZP)((0,p.E)(h))},23806:(e,t,a)=>{a.r(t),a.d(t,{default:()=>we});var n=a(90154),l=a(1326),o=a(84717),s=a(75660),r=a(6456),i=a(97027),c=a(44439),d=a(92950),m=a.n(d),p=a(74806),u=a(77760),h=a(52471),g=a(55672),y=a(2985),f=a(47947),C=a(40493),v=a(44348),S=a(37269),E=a(19727),b=a(86482),M=a(10066),O=a(1156),x=a(78898),P=a(62331),Z=a(15920),T=a(69511);function D(e={}){return e.project?"project":e.cluster?"cluster":e.node?"node":"date"}var k=a(15829),B=a(14483),w=a(5842),F=a(50081),I=a(19152),_=a(6450),A=a(98485),L=a(87560),j=a(45087),R=a(91778),$=a(49382),V=a(33605),W=a(17918),q=a(54881),X=a(98499),Q=a(48196);const H={costValue:{marginTop:X.ZP.var,marginBottom:0},costLabelUnit:{fontSize:q.ZP.value,color:V.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:$.ZP.var,padding:X.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},info:{verticalAlign:"middle"},infoIcon:{fontSize:W.ZP.value},infoTitle:{fontWeight:"bold"},title:{paddingBottom:Q.ZP.var}},N=[{label:"cluster",value:"cluster"},{label:"node",value:"node"},{label:"project",value:"project"}],G=F.L.rhel;class z extends m().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState)}render(){const{currency:e,groupBy:t,isCurrencyFeatureEnabled:a,isExportsFeatureEnabled:l,onCurrencySelected:o,onGroupBySelected:s,providers:r,providersError:c,report:d,intl:p}=this.props,u=d&&!c&&r&&r.meta&&r.meta.count>0;let h=m().createElement(A.L,null),g=m().createElement(A.L,null),y=m().createElement(A.L,null);if(d&&d.meta&&d.meta.total){const e=d.meta.total.cost&&d.meta.total.cost.total,t=d.meta.total.supplementary&&d.meta.total.supplementary.total,a=d.meta.total.infrastructure&&d.meta.total.infrastructure.total;h=(0,R.xG)(e?d.meta.total.cost.total.value:0,e?d.meta.total.cost.total.units:"USD"),g=(0,R.xG)(t?d.meta.total.supplementary.total.value:0,t?d.meta.total.supplementary.total.units:"USD"),y=(0,R.xG)(a?d.meta.total.infrastructure.total.value:0,a?d.meta.total.infrastructure.total.units:"USD")}return m().createElement("header",{style:H.header},m().createElement("div",{style:H.headerContent},m().createElement(n.Title,{headingLevel:"h1",style:H.title,size:n.TitleSizes["2xl"]},p.formatMessage(i.Z.rhelDetailsTitle)),m().createElement("div",{style:H.headerContentRight},a&&m().createElement(_.F,{currency:e,onSelect:o}),l&&m().createElement(I.bj,null))),m().createElement("div",{style:H.headerContent},m().createElement("div",{style:H.headerContentLeft},m().createElement(L.X,{getIdKeyForGroupBy:D,groupBy:t,isDisabled:!u,onSelected:s,options:N,showTags:!0,tagReportPathsType:G})),Boolean(u)&&m().createElement("div",null,m().createElement(n.Tooltip,{content:p.formatMessage(i.Z.dashboardTotalCostTooltip,{infrastructureCost:y,supplementaryCost:g}),enableFlip:!0},m().createElement(n.Title,{headingLevel:"h2",style:H.costValue,size:n.TitleSizes["4xl"]},h)),m().createElement("div",{style:H.dateTitle},(0,j.J4)()))))}}const J=(0,O.X1)(((e,t)=>{const a=(0,o.H)(P.NT),n=P.aX.selectProviders(e,l.l.all,a),s=P.aX.selectProvidersError(e,l.l.all,a),r=P.aX.selectProvidersFetchStatus(e,l.l.all,a);return{isCurrencyFeatureEnabled:x.iJ.selectIsCurrencyFeatureEnabled(e),isExportsFeatureEnabled:x.iJ.selectIsExportsFeatureEnabled(e),providers:(0,b.BV)(n,l.l.rhel),providersError:s,providersFetchStatus:r,providersQueryString:a}})),U=(0,p.ZP)((0,u.connect)(J,{})(z));var K=a(39836),Y=a(91919),ee=a(62423),te=a(90569),ae=a(90302),ne=a(54583),le=a(68025);const oe="infrastructure",se="monthOverMonth",re="supplementary",ie=r.K.rhel;class ce extends m().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{groupBy:e,groupByTagKey:t,hiddenColumns:a,intl:l,isAllSelected:o,report:s,router:r,selectedItems:c}=this.props;if(!s)return;const d="project"===e,p=[],u=(0,T.c)({report:s,idKey:t||e}),h=t?[{name:""},{name:l.formatMessage(i.Z.tagNames),style:"project"===e?ae.W.nameColumn:void 0},{hidden:!d,name:""},{name:l.formatMessage(i.Z.monthOverMonthChange)},{id:oe,name:l.formatMessage(i.Z.rhelDetailsInfrastructureCost),style:ae.W.managedColumn},{id:re,name:l.formatMessage(i.Z.rhelDetailsSupplementaryCost),style:ae.W.managedColumn},Object.assign({orderBy:"cost",name:l.formatMessage(i.Z.cost),style:ae.W.costColumn},u.length&&{isSortable:!0}),{name:""}]:[{name:""},Object.assign(Object.assign({orderBy:e,name:l.formatMessage(i.Z.detailsResourceNames,{value:e})},u.length&&{isSortable:!0}),{style:"project"===e?ae.W.nameColumn:void 0}),{hidden:!d,name:""},{id:se,name:l.formatMessage(i.Z.monthOverMonthChange)},{id:oe,orderBy:"infrastructure_cost",name:l.formatMessage(i.Z.rhelDetailsInfrastructureCost),style:ae.W.managedColumn},{id:re,orderBy:"supplementary_cost",name:l.formatMessage(i.Z.rhelDetailsSupplementaryCost),style:ae.W.managedColumn},Object.assign({orderBy:"cost",name:l.formatMessage(i.Z.cost),style:ae.W.costColumn},u.length&&{isSortable:!0}),{name:""}];u.map(((a,s)=>{const u=this.getTotalCost(a,s),h=a&&null!==a.label?a.label:"",g=this.getMonthOverMonthCost(a,s),y=this.getSupplementaryCost(a,s),f=this.getInfrastructureCost(a,s),C=a.id&&a.id!==a.label?m().createElement("div",{style:ae.W.infoDescription},a.id):null,v=h===`${B.Xq}${e}`||h===`${B.Xq}${t}`,S=this.getActions(a,v),E=v?h:m().createElement(K.Link,{to:(0,ne.Tm)({basePath:(0,le.dI)(Y._.rhelDetailsBreakdown.path),description:a.id,groupBy:e,id:a.id,router:r,title:h.toString()})},h);p.push({cells:[{},{value:m().createElement(m().Fragment,null,m().createElement("div",null,E),m().createElement("div",{style:ae.W.infoDescription},C))},{hidden:!d,value:a.default_project?m().createElement("div",null,m().createElement(n.Label,{variant:"outline",color:"green"},l.formatMessage(i.Z.default))):m().createElement("div",{style:ae.W.defaultLabel})},{value:m().createElement("div",null,g),id:se},{value:m().createElement("div",null,f),id:oe,style:ae.W.managedColumn},{value:m().createElement("div",null,y),id:re,style:ae.W.managedColumn},{value:m().createElement("div",null,u),style:ae.W.managedColumn},{value:m().createElement("div",null,S)}],item:a,selected:o||c&&void 0!==c.find((e=>e.id===a.id)),selectionDisabled:v})}));const g=h.filter((e=>!a.has(e.id)&&!e.hidden)),y=p.map((e=>{var t=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a}(e,[]);return t.cells=t.cells.filter((e=>!a.has(e.id)&&!e.hidden)),t}));this.setState({columns:g,rows:y})},this.getActions=(e,t)=>{const{groupBy:a,reportQueryString:n}=this.props;return m().createElement(ee.e,{groupBy:a,isDisabled:t,item:e,providerType:l.l.rhel,reportPathsType:ie,reportQueryString:n,showPriceListOption:"cluster"===a})},this.getSupplementaryCost=(e,t)=>{const{report:a,intl:n}=this.props,l=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total?a.meta.total.cost.total.value:0,o=0===l?l.toFixed(2):(e.supplementary.total.value/l*100).toFixed(2);return m().createElement(m().Fragment,null,(0,R.xG)(e.supplementary.total.value,e.supplementary.total.units),m().createElement("div",{style:ae.W.infoDescription,key:`total-cost-${t}`},n.formatMessage(i.Z.percentOfCost,{value:o})))},this.getInfrastructureCost=(e,t)=>{const{report:a,intl:n}=this.props,l=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total?a.meta.total.cost.total.value:0,o=0===l?l.toFixed(2):(e.infrastructure.total.value/l*100).toFixed(2);return m().createElement(m().Fragment,null,(0,R.xG)(e.infrastructure.total.value,e.infrastructure.total.units),m().createElement("div",{style:ae.W.infoDescription,key:`total-cost-${t}`},n.formatMessage(i.Z.percentOfCost,{value:o})))},this.getMonthOverMonthCost=(e,t)=>{const{intl:a}=this.props,n=(0,R.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),l=null!==e.delta_percent?(0,R.rl)(Math.abs(e.delta_percent)):0,o=!(0===l||"0.00"===l),s=null!==e.delta_percent;let r;return o&&(r="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(r+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(r+=" increase")),s?m().createElement("div",{className:"monthOverMonthOverride"},m().createElement("div",{className:r,key:`month-over-month-cost-${t}`},o?a.formatMessage(i.Z.percent,{value:l}):m().createElement(A.L,null),Boolean(o&&null!==e.delta_percent&&e.delta_value>0)&&m().createElement("span",{className:"fa fa-sort-up",style:ae.W.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(o&&null!==e.delta_percent&&e.delta_value<0)&&m().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},ae.W.ininfoArrow),ae.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),m().createElement("div",{style:ae.W.infoDescription,key:`month-over-month-info-${t}`},(0,j.Y)(n))):(0,j.Tf)()},this.getTotalCost=(e,t)=>{const{report:a,intl:n}=this.props,l=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total?a.meta.total.cost.total.value:0,o=0===l?l.toFixed(2):(e.cost.total.value/l*100).toFixed(2);return m().createElement(m().Fragment,null,(0,R.xG)(e.cost.total.value,e.cost.total.units),m().createElement("div",{style:ae.W.infoDescription,key:`total-cost-${t}`},n.formatMessage(i.Z.percentOfCost,{value:o})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{hiddenColumns:t,report:a,selectedItems:n}=this.props,l=a&&a.data?JSON.stringify(a.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")===l&&e.selectedItems===n&&e.hiddenColumns===t||this.initDatum()}render(){const{isLoading:e,onSelected:t,onSort:a,selectedItems:n}=this.props,{columns:l,rows:o}=this.state;return m().createElement(te.w,{columns:l,isLoading:e,onSelected:t,onSort:a,rows:o,selectedItems:n})}}const de=(0,p.ZP)((0,w.E)(ce));var me=a(79112),pe=a(36116),ue=a(70539),he=a(48949),ge=a(94282);const ye=F.Q.tag,fe=F.L.ocp;class Ce extends m().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,a=[{name:e.formatMessage(i.Z.filterByValues,{value:"cluster"}),key:"cluster"},{name:e.formatMessage(i.Z.filterByValues,{value:"node"}),key:"node"},{name:e.formatMessage(i.Z.filterByValues,{value:"project"}),key:"project"}];return t&&t.data&&t.data.length&&a.push({name:e.formatMessage(i.Z.filterByValues,{value:B.up}),key:B.up}),a}}componentDidMount(){const{fetchTag:e,tagReportFetchStatus:t,tagQueryString:a}=this.props;this.setState({categoryOptions:this.getCategoryOptions()},(()=>{t!==O.iF.inProgress&&e(fe,ye,a)}))}componentDidUpdate(e){const{fetchTag:t,query:a,tagReport:n,tagReportFetchStatus:l,tagQueryString:o}=this.props;(0,ge.X)(n,e.tagReport)?a&&!(0,ge.X)(a,e.query)&&l!==O.iF.inProgress&&t(fe,ye,o):this.setState({categoryOptions:this.getCategoryOptions()},(()=>{l!==O.iF.inProgress&&t(fe,ye,o)}))}render(){const{groupBy:e,isAllSelected:t,isDisabled:a,isExportDisabled:n,itemsPerPage:l,itemsTotal:o,onBulkSelected:s,onColumnManagementClicked:r,onExportClicked:i,onFilterAdded:c,onFilterRemoved:d,onPlatformCostsChanged:p,pagination:u,query:h,selectedItems:g,tagReport:y}=this.props,{categoryOptions:f}=this.state;return m().createElement(ue.k,{categoryOptions:f,groupBy:e,isAllSelected:t,isDisabled:a,isExportDisabled:n,itemsPerPage:l,itemsTotal:o,onBulkSelected:s,onColumnManagementClicked:r,onExportClicked:i,onFilterAdded:c,onFilterRemoved:d,onPlatformCostsChanged:p,pagination:u,query:h,resourcePathsType:pe.C.ocp,selectedItems:g,showBulkSelect:!0,showColumnManagement:!0,showExport:!0,showFilter:!0,tagReport:y,tagReportPathsType:fe})}}const ve=(0,O.X1)(((e,t)=>{const a=(0,me.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3});return{tagReport:he.ux.selectTag(e,fe,ye,a),tagReportFetchStatus:he.ux.selectTagFetchStatus(e,fe,ye,a),tagQueryString:a}})),Se={fetchTag:he.xr.Xt},Ee=(0,u.connect)(ve,Se)(Ce),be=(0,p.ZP)(Ee);var Me=a(32412);const Oe={content:{paddingBottom:X.ZP.value,paddingTop:X.ZP.value},ocpDetails:{minHeight:"100%"},paginationContainer:{marginLeft:X.ZP.value,marginRight:X.ZP.value},pagination:{backgroundColor:$.ZP.value,paddingBottom:Me.ZP.value,paddingTop:Me.ZP.value},tableContainer:{marginLeft:X.ZP.value,marginRight:X.ZP.value},toolbarContainer:{marginLeft:X.ZP.value,marginRight:X.ZP.value}},xe={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},exclude:{},filter_by:{},group_by:{project:"*"},order_by:{cost:"desc"}},Pe=[{label:i.Z.monthOverMonthChange,value:se},{description:i.Z.ocpDetailsInfrastructureCostDesc,label:i.Z.ocpDetailsInfrastructureCost,value:oe,hidden:!0},{description:i.Z.ocpDetailsSupplementaryCostDesc,label:i.Z.ocpDetailsSupplementaryCost,value:re,hidden:!0}],Ze=r.C.cost,Te=r.K.ocp;class De extends m().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],hiddenColumns:(0,v.Y)(Pe),isAllSelected:!1,isColumnManagementModalOpen:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getColumnManagementModal=()=>{const{hiddenColumns:e,isColumnManagementModalOpen:t}=this.state,a=(0,c.cloneDeep)(Pe);return a.map((t=>{t.hidden=e.has(t.value)})),m().createElement(v.$,{isOpen:t,options:a,onClose:this.handleColumnManagementModalClose,onSave:this.handleColumnManagementModalSave})},this.getComputedItems=()=>{const{query:e,report:t}=this.props,a=D(e.group_by),n=(0,S.qV)(e);return(0,T.c)({report:t,idKey:n||a})},this.getExportModal=e=>{const{query:t,report:a,reportQueryString:n}=this.props,{isAllSelected:l,isExportModalOpen:o,selectedItems:s}=this.state,r=D(t.group_by),i=(0,S.qV)(t),c=a&&a.meta?a.meta.count:0,d=[];return s.map((e=>{e.label!==`${B.Xq}${r}`&&e.label!==`${B.Xq}${i}`&&d.push(e)})),m().createElement(C.X,{count:l?c:d.length,isAllItems:(l||s.length===c)&&e.length>0,groupBy:i?`${B.P}${i}`:r,isOpen:o,items:d,onClose:this.handleExportModalClose,reportPathsType:Te,reportQueryString:n})},this.getPagination=(e=!1,t=!1)=>{const{intl:a,query:l,report:o,router:s}=this.props,r=o&&o.meta?o.meta.count:0,c=o&&o.meta&&o.meta.filter&&o.meta.filter.limit?o.meta.filter.limit:xe.filter.limit,d=(o&&o.meta&&o.meta.filter&&o.meta.filter.offset?o.meta.filter.offset:xe.filter.offset)/c+1;return m().createElement(n.Pagination,{isCompact:!t,isDisabled:e,itemCount:r,onPerPageSelect:(e,t)=>(0,E.xh)(l,s,t),onSetPage:(e,t)=>(0,E.$9)(l,s,o,t),page:d,perPage:c,titles:{paginationTitle:a.formatMessage(i.Z.paginationTitle,{title:a.formatMessage(i.Z.openShift),placement:t?"bottom":"top"})},variant:t?n.PaginationVariant.bottom:n.PaginationVariant.top,widgetId:"exports-pagination"+(t?"-bottom":"")})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:a,reportQueryString:n,router:l}=this.props,{hiddenColumns:o,isAllSelected:s,selectedItems:r}=this.state,i=D(e.group_by),c=(0,S.qV)(e);return m().createElement(de,{groupBy:c?`${B.P}${c}`:i,groupByTagKey:c,hiddenColumns:o,isAllSelected:s,isLoading:a===O.iF.inProgress,onSelected:this.handleSelected,onSort:(t,a)=>(0,E.yB)(e,l,t,a),report:t,reportQueryString:n,selectedItems:r})},this.getToolbar=e=>{const{query:t,report:a,router:n}=this.props,{isAllSelected:l,selectedItems:o}=this.state,s=D(t.group_by),r=(0,S.qV)(t),i=0===e.length,c=a&&a.meta?a.meta.count:0;return m().createElement(be,{groupBy:r?`${B.P}${r}`:s,isAllSelected:l,isDisabled:i,isExportDisabled:i||!l&&0===o.length,itemsPerPage:e.length,itemsTotal:c,onBulkSelected:this.handleBulkSelected,onColumnManagementClicked:this.handleColumnManagementModalOpen,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,E.$3)(t,n,e),onFilterRemoved:e=>(0,E.q7)(t,n,e),onPlatformCostsChanged:this.handlePlatformCostsChanged,pagination:this.getPagination(),query:t,selectedItems:o})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleColumnManagementModalClose=e=>{this.setState({isColumnManagementModalOpen:e})},this.handleColumnManagementModalOpen=()=>{this.setState({isColumnManagementModalOpen:!0})},this.handleColumnManagementModalSave=e=>{this.setState({hiddenColumns:e})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{query:t,router:a}=this.props,n=e,l=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{group_by:{[n]:"*"},order_by:{cost:"desc"},category:void 0});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{a.navigate((0,M.Z)(l,a.location,!0),{replace:!0})}))},this.handlePlatformCostsChanged=e=>{const{query:t,router:a}=this.props,n=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{category:e?B.rx:void 0});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{a.navigate((0,M.Z)(n,a.location,!0),{replace:!0})}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:a,selectedItems:n}=this.state;let l=[...a?this.getComputedItems():n];e&&e.length>0&&(t?e.map((e=>l.push(e))):e.map((e=>{l=l.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:l})},this.updateReport=()=>{const{fetchReport:e,reportQueryString:t}=this.props;e(Te,Ze,t)},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleColumnManagementModalClose=this.handleColumnManagementModalClose.bind(this),this.handleColumnManagementModalOpen=this.handleColumnManagementModalOpen.bind(this),this.handleColumnManagementModalSave=this.handleColumnManagementModalSave.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handlePlatformCostsChanged=this.handlePlatformCostsChanged.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{report:a,reportError:n,reportQueryString:l,router:o}=this.props,{selectedItems:s}=this.state,r=e.reportQueryString!==l,i=!a&&!n,c=!o.location.search,d=t.selectedItems!==s;(r||i||c||d)&&this.updateReport()}render(){const{currency:e,intl:t,providers:a,providersFetchStatus:n,query:o,report:s,reportError:r,reportFetchStatus:c,router:d}=this.props,p=this.getComputedItems(),u=D(o.group_by),C=0===p.length,v=t.formatMessage(i.Z.ocpDetailsTitle);if(r)return m().createElement(f.W,{title:v});if(n===O.iF.inProgress)return m().createElement(h.g,{title:v});if(n===O.iF.complete){if(a&&a.meta&&0===a.meta.count)return m().createElement(y.L,{providerType:l.l.ocp,title:v});if(!(0,b.g8)(a))return m().createElement(g.J,{title:v})}return m().createElement("div",{style:Oe.ocpDetails},m().createElement(U,{currency:e,groupBy:u,onCurrencySelected:e=>(0,E._s)(o,d,e),onGroupBySelected:this.handleGroupBySelected,report:s}),m().createElement("div",{style:Oe.content},m().createElement("div",{style:Oe.toolbarContainer},this.getToolbar(p)),this.getExportModal(p),this.getColumnManagementModal(),c===O.iF.inProgress?m().createElement(h.g,null):m().createElement(m().Fragment,null,m().createElement("div",{style:Oe.tableContainer},this.getTable()),m().createElement("div",{style:Oe.paginationContainer},m().createElement("div",{style:Oe.pagination},this.getPagination(C,!0))))))}}const ke=(0,O.X1)(((e,{router:t})=>{const a=(0,s.mB)(t.location.search),n=x.iJ.selectIsCurrencyFeatureEnabled(e)?(0,k.zC)():void 0,r={delta:"cost",filter:Object.assign(Object.assign({},xe.filter),a.filter),filter_by:a.filter_by||xe.filter_by,exclude:a.exclude||xe.exclude,group_by:a.group_by||xe.group_by,order_by:a.order_by||xe.order_by,category:a.category},i=(0,s.pm)(Object.assign(Object.assign({},r),{currency:n})),c=Z.ZV.selectReport(e,Te,Ze,i),d=Z.ZV.selectReportError(e,Te,Ze,i),m=Z.ZV.selectReportFetchStatus(e,Te,Ze,i),p=(0,o.H)(P.NT),u=P.aX.selectProviders(e,l.l.all,p),h=P.aX.selectProvidersFetchStatus(e,l.l.all,p);return{currency:n,providers:(0,b.BV)(u,l.l.ocp),providersFetchStatus:h,query:r,report:c,reportError:d,reportFetchStatus:m,reportQueryString:i}})),Be={fetchReport:Z.nx.fetchReport},we=(0,p.ZP)((0,w.E)((0,u.connect)(ke,Be)(De)))}}]);
//# sourceMappingURL=../sourcemaps/rhelDetails.ef4ae22a6b749668edf54f935fdfd310.js.map