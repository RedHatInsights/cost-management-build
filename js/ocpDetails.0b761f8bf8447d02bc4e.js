"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[7369],{15265:(e,t,a)=>{a.d(t,{LA:()=>s,ZP:()=>l,mq:()=>o});var n=a(40400);const o={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},s=(0,n.IU)(o),l=s},17918:(e,t)=>{t.VH={name:"--pf-global--FontSize--md",value:"1rem",var:"var(--pf-global--FontSize--md)"},t.ZP=t.VH},62423:(e,t,a)=>{a.d(t,{e:()=>C});var n=a(76481),o=a(97027),s=a(92950),l=a.n(s),r=a(74806),i=a(77760),c=a(40493),d=a(1156),m=a(58613),p=a(14483),u=a(5842);class h extends l().Component{constructor(e,t){super(e,t),this.defaultState={isDropdownOpen:!1,isExportModalOpen:!1},this.state=Object.assign({},this.defaultState),this.getExportModal=()=>{const{groupBy:e,item:t,reportPathsType:a,reportQueryString:n}=this.props,{isExportModalOpen:o}=this.state;return l().createElement(c.X,{count:1,groupBy:e,isOpen:o,items:[t],onClose:this.handleExportModalClose,reportPathsType:a,reportQueryString:n})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleOnSelect=()=>{const{isDropdownOpen:e}=this.state;this.setState({isDropdownOpen:!e})},this.handleOnToggle=e=>{this.setState({isDropdownOpen:e})},this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleOnToggle=this.handleOnToggle.bind(this),this.handleOnSelect=this.handleOnSelect.bind(this)}render(){const{groupBy:e,isDisabled:t,showPriceListOption:a,intl:s,item:{source_uuid:r},redirectToCostModel:i,router:c}=this.props,d=[l().createElement(n.DropdownItem,{component:"button",isDisabled:t,key:"export-action",onClick:this.handleExportModalOpen},s.formatMessage(o.Z.detailsActionsExport))];return a&&d.unshift(l().createElement(n.DropdownItem,{component:"button",key:"price-list-action",isDisabled:t||e.includes(p.P)||0===r.length,onClick:()=>i(r[0],c)},s.formatMessage(o.Z.detailsActionsPriceList))),l().createElement(l().Fragment,null,l().createElement(n.Dropdown,{onSelect:this.handleOnSelect,toggle:l().createElement(n.KebabToggle,{onToggle:this.handleOnToggle}),isOpen:this.state.isDropdownOpen,isPlain:!0,position:"right",dropdownItems:d}),this.getExportModal())}}const g=(0,d.X1)(((e,t)=>({}))),y={redirectToCostModel:m.F0.redirectToCostModelFromSourceUuid},f=(0,i.connect)(g,y)(h),C=(0,r.ZP)((0,u.E)(f))},44348:(e,t,a)=>{a.d(t,{$:()=>h,Y:()=>d});var n=a(76481),o=a(97027),s=a(92950),l=a.n(s),r=a(74806),i=a(77760),c=a(1156);const d=e=>{const t=new Set;return e.map((e=>{e.hidden&&t.add(e.value)})),t};class m extends l().Component{constructor(e,t){super(e,t),this.defaultState={hiddenColumns:d(this.props.options)},this.state=Object.assign({},this.defaultState),this.getHidden=e=>{const{hiddenColumns:t}=this.state,a=new Set(t);return a.delete(e)||a.add(e),a},this.isHidden=e=>{const{hiddenColumns:t}=this.state;return t.has(e)},this.handleChange=(e,t)=>{const a=this.getHidden(t.target.id);this.setState({hiddenColumns:a})},this.handleClose=()=>{this.setState(Object.assign({},this.defaultState),(()=>{this.props.onClose(!1)}))},this.handleSave=()=>{const{hiddenColumns:e}=this.state;this.props.onSave(e),this.handleClose()},this.selectAll=()=>{this.setState({hiddenColumns:new Set})}}componentDidUpdate(e){const{options:t}=this.props;if(e.options!==t){const e=d(t);this.setState({hiddenColumns:e})}}render(){const{options:e,intl:t}=this.props;return l().createElement(n.Modal,{description:l().createElement(n.TextContent,null,l().createElement(n.Text,{component:n.TextVariants.p},t.formatMessage(o.Z.manageColumnsDesc)),l().createElement(n.Button,{isInline:!0,onClick:this.selectAll,variant:"link"},t.formatMessage(o.Z.selectAll))),isOpen:this.props.isOpen,onClose:this.handleClose,title:t.formatMessage(o.Z.manageColumnsTitle),variant:n.ModalVariant.medium,actions:[l().createElement(n.Button,{key:"save",onClick:this.handleSave,variant:n.ButtonVariant.link},t.formatMessage(o.Z.save)),l().createElement(n.Button,{key:"cancel",onClick:this.handleClose,variant:n.ButtonVariant.link},t.formatMessage(o.Z.cancel))]},l().createElement(n.DataList,{"aria-label":t.formatMessage(o.Z.manageColumnsAriaLabel),id:"table-column-management",isCompact:!0},e.map((e=>l().createElement(n.DataListItem,{"aria-labelledby":e.value,key:e.value},l().createElement(n.DataListItemRow,null,l().createElement(n.DataListCheck,{"aria-labelledby":`${e.value}Label`,isChecked:!this.isHidden(e.value),name:e.value,id:e.value,onChange:this.handleChange}),l().createElement(n.DataListItemCells,{dataListCells:[l().createElement(n.DataListCell,{id:`${e.value}Label`,key:"table-column-management-item1"},l().createElement("span",null,t.formatMessage(e.label))),l().createElement(n.DataListCell,{key:"table-column-management-item2"},e.description&&l().createElement("span",null,t.formatMessage(e.description)))]})))))))}}const p=(0,c.X1)((()=>({}))),u=(0,i.connect)(p,{})(m),h=(0,r.ZP)(u)},90302:(e,t,a)=>{a.d(t,{W:()=>i});var n=a(49382),o=a(12289),s=a(40794),l=a(11331),r=a(43789);const i={costColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end",paddingRight:0},defaultLabel:{minWidth:"63px"},emptyState:{backgroundColor:n.ZP.value,display:"flex",justifyContent:"center",paddingTop:l.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:r.ZP.value},infoDescription:{color:o.ZP.value,fontSize:s.ZP.value},lastReported:{textAlign:"right",paddingRight:"40px"},lastReportedColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end"},managedColumn:{textAlign:"right"},nameColumn:{width:"1%"}}},90569:(e,t,a)=>{a.d(t,{w:()=>g});var n=a(76481),o=a(52636),s=a(25441),l=a(79112),r=a(97027),i=a(92950),c=a.n(i),d=a(74806),m=a(42901),p=a(5842),u=a(90302);class h extends c().Component{constructor(e){super(e),this.getEmptyState=()=>{const{intl:e,router:t}=this.props,a=(0,l.mB)(t.location.search);if(a.filter_by)for(const e of Object.values(a.filter_by))if("*"!==e)return c().createElement(m.c,{filter:e,showMargin:!1});return c().createElement(n.EmptyState,null,c().createElement(n.EmptyStateIcon,{icon:o.Xk}),c().createElement(n.EmptyStateBody,null,e.formatMessage(r.Z.detailsEmptyState)))},this.getSortBy=e=>{const{columns:t,router:a}=this.props,n=t[e].orderBy,o=(0,l.mB)(a.location.search),s=o&&o.order_by&&o.order_by[n];return s?{index:e,direction:s}:{}},this.getSortParams=e=>({sortBy:this.getSortBy(e),onSort:this.handleOnSort,columnIndex:e}),this.handleOnSelect=(e,t,a)=>{const{onSelected:n,rows:o}=this.props;let s,l=[];-1===a?s=o.map((e=>(e.selected=t,e))):(s=[...o],s[a].selected=t,l=[s[a].item]),this.setState({rows:o},(()=>{n&&n(l,t)}))},this.handleOnSort=(e,t,a)=>{const{columns:n,onSort:o}=this.props;o&&o(n[t].orderBy,a===s.SortByDirection.asc)},this.handleOnRowClick=(e,t)=>{const{onRowClick:a,rows:n}=this.props;n.map((e=>e.selected=!1)),n[t].selected=!0,this.setState({rows:n},(()=>{a&&a(e,t)}))},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}render(){const{columns:e,intl:t,isLoading:a,isRecommendations:o,rows:l}=this.props;return c().createElement(c().Fragment,null,c().createElement(s.TableComposable,{"aria-label":t.formatMessage(r.Z.dataTableAriaLabel),gridBreakPoint:"grid-2xl",hasSelectableRowCaption:o},c().createElement(s.Thead,null,c().createElement(s.Tr,null,e.map(((e,t)=>c().createElement(s.Th,{key:`col-${t}-${e.value}`,modifier:"nowrap",sort:e.isSortable?this.getSortParams(t):void 0,style:e.style},e.name))))),c().createElement(s.Tbody,null,a?c().createElement(s.Tr,null,c().createElement(s.Td,{colSpan:100},c().createElement(n.Bullseye,null,c().createElement("div",{style:{textAlign:"center"}},c().createElement(n.Spinner,{size:"xl"}))))):l.map(((t,a)=>c().createElement(s.Tr,{isSelectable:o,isHoverable:o,isRowSelected:o&&t.selected,onRowClick:e=>this.handleOnRowClick(e,a),key:`row-${a}`},t.cells.map(((n,l)=>0!==l||o?c().createElement(s.Td,{dataLabel:e[l].name,key:`cell-${a}-${l}`,modifier:"nowrap",isActionCell:!o&&l===t.cells.length-1,style:n.style},n.value):c().createElement(s.Td,{dataLabel:e[l].name,key:`cell-${l}-${a}`,modifier:"nowrap",select:{disable:t.selectionDisabled,isSelected:t.selected,onSelect:(e,t)=>this.handleOnSelect(e,t,a),rowIndex:a},style:n.style})))))))),Boolean(0===l.length)&&c().createElement("div",{style:u.W.emptyState},this.getEmptyState()))}}const g=(0,d.ZP)((0,p.E)(h))},33748:(e,t,a)=>{a.d(t,{W:()=>c});var n=a(49382),o=a(33605),s=a(17918),l=a(54881),r=a(98499),i=a(48196);const c={costValue:{marginTop:r.ZP.var,marginBottom:0},costLabelUnit:{fontSize:l.ZP.value,color:o.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:n.ZP.var,padding:r.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},info:{verticalAlign:"middle"},infoIcon:{fontSize:s.ZP.value},infoTitle:{fontWeight:"bold"},title:{paddingBottom:i.ZP.var}}},97383:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ze});var n=a(76481),o=a(1326),s=a(79112),l=a(84717),r=a(6456),i=a(97027),c=a(44439),d=a(92950),m=a.n(d),p=a(74806),u=a(77760),h=a(52471),g=a(55672),y=a(2985),f=a(47947),C=a(40493),v=a(44348),S=a(37269),E=a(19727),b=a(86482),M=a(10066),O=a(1156),x=a(78898),P=a(62331),Z=a(15920);function T(e={}){return e.project?"project":e.cluster?"cluster":e.node?"node":"date"}var D=a(69511),k=a(15829),B=a(14483),w=a(5842),F=a(50081),I=a(19152),_=a(6450),A=a(98485),R=a(87560),L=a(45087),j=a(91778),W=a(33748);const $=[{label:"cluster",value:"cluster"},{label:"node",value:"node"},{label:"project",value:"project"}],V=F.L.ocp;class q extends m().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState)}render(){const{currency:e,groupBy:t,isCurrencyFeatureEnabled:a,isExportsFeatureEnabled:o,onCurrencySelected:s,onGroupBySelected:l,providers:r,providersError:c,report:d,intl:p}=this.props,u=d&&!c&&r&&r.meta&&r.meta.count>0;let h=m().createElement(A.L,null),g=m().createElement(A.L,null),y=m().createElement(A.L,null);if(d&&d.meta&&d.meta.total){const e=d.meta.total.cost&&d.meta.total.cost.total,t=d.meta.total.supplementary&&d.meta.total.supplementary.total,a=d.meta.total.infrastructure&&d.meta.total.infrastructure.total;h=(0,j.xG)(e?d.meta.total.cost.total.value:0,e?d.meta.total.cost.total.units:"USD"),g=(0,j.xG)(t?d.meta.total.supplementary.total.value:0,t?d.meta.total.supplementary.total.units:"USD"),y=(0,j.xG)(a?d.meta.total.infrastructure.total.value:0,a?d.meta.total.infrastructure.total.units:"USD")}return m().createElement("header",{style:W.W.header},m().createElement("div",{style:W.W.headerContent},m().createElement(n.Title,{headingLevel:"h1",style:W.W.title,size:n.TitleSizes["2xl"]},p.formatMessage(i.Z.ocpDetailsTitle)),m().createElement("div",{style:W.W.headerContentRight},a&&m().createElement(_.F,{currency:e,onSelect:s}),o&&m().createElement(I.bj,null))),m().createElement("div",{style:W.W.headerContent},m().createElement("div",{style:W.W.headerContentLeft},m().createElement(R.X,{getIdKeyForGroupBy:T,groupBy:t,isDisabled:!u,onSelected:l,options:$,showTags:!0,tagReportPathsType:V})),Boolean(u)&&m().createElement("div",null,m().createElement(n.Tooltip,{content:p.formatMessage(i.Z.dashboardTotalCostTooltip,{infrastructureCost:y,supplementaryCost:g}),enableFlip:!0},m().createElement(n.Title,{headingLevel:"h2",style:W.W.costValue,size:n.TitleSizes["4xl"]},h)),m().createElement("div",{style:W.W.dateTitle},(0,L.J4)()))))}}const X=(0,O.X1)(((e,t)=>{const a=(0,l.H)(P.NT),n=P.aX.selectProviders(e,o.l.all,a),s=P.aX.selectProvidersError(e,o.l.all,a),r=P.aX.selectProvidersFetchStatus(e,o.l.all,a);return{isCurrencyFeatureEnabled:x.iJ.selectIsCurrencyFeatureEnabled(e),isExportsFeatureEnabled:x.iJ.selectIsExportsFeatureEnabled(e),providers:(0,b.BV)(n,o.l.ocp),providersError:s,providersFetchStatus:r,providersQueryString:a}})),Q=(0,p.ZP)((0,u.connect)(X,{})(q));var H=a(39836),N=a(91919),G=a(62423),J=a(90569),z=a(90302),U=a(54583),K=a(68025);const Y="infrastructure",ee="monthOverMonth",te="supplementary",ae=r.K.ocp;class ne extends m().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{groupBy:e,groupByTagKey:t,hiddenColumns:a,intl:o,isAllSelected:s,isRosFeatureEnabled:l,report:r,router:c,selectedItems:d}=this.props;if(!r)return;const p="project"===e,u=[],h=(0,D.c)({report:r,idKey:t||e}),g=t?[{name:""},{name:o.formatMessage(i.Z.tagNames),style:"project"===e?z.W.nameColumn:void 0},{hidden:!p,name:""},{hidden:!(p&&l),name:o.formatMessage(i.Z.recommendations)},{name:o.formatMessage(i.Z.monthOverMonthChange)},{id:Y,name:o.formatMessage(i.Z.ocpDetailsInfrastructureCost),style:z.W.managedColumn},{id:te,name:o.formatMessage(i.Z.ocpDetailsSupplementaryCost),style:z.W.managedColumn},Object.assign({orderBy:"cost",name:o.formatMessage(i.Z.cost),style:z.W.costColumn},h.length&&{isSortable:!1}),{name:""}]:[{name:""},Object.assign(Object.assign({orderBy:e,name:o.formatMessage(i.Z.detailsResourceNames,{value:e})},h.length&&{isSortable:!0}),{style:"project"===e?z.W.nameColumn:void 0}),{hidden:!p,name:""},{hidden:!(p&&l),name:o.formatMessage(i.Z.recommendations)},{id:ee,name:o.formatMessage(i.Z.monthOverMonthChange)},{id:Y,orderBy:"infrastructure_cost",name:o.formatMessage(i.Z.ocpDetailsInfrastructureCost),style:z.W.managedColumn},{id:te,orderBy:"supplementary_cost",name:o.formatMessage(i.Z.ocpDetailsSupplementaryCost),style:z.W.managedColumn},Object.assign({orderBy:"cost",name:o.formatMessage(i.Z.cost),style:z.W.costColumn},h.length&&{isSortable:!0}),{name:""}];h.map(((a,r)=>{const h=this.getTotalCost(a,r),g=a&&null!==a.label?a.label:"",y=this.getMonthOverMonthCost(a,r),f=this.getSupplementaryCost(a,r),C=this.getInfrastructureCost(a,r),v=a.classification===B.A8,S=a.classification===B.ND,E=a.id&&a.id!==a.label?m().createElement("div",{style:z.W.infoDescription},a.id):null,b=g===`${B.Xq}${e}`||g===`${B.Xq}${t}`||S,M=this.getActions(a,b),O=b?g:m().createElement(H.Link,{to:(0,U.Tm)({basePath:(0,K.dI)(N._.ocpDetailsBreakdown.path),description:a.id,id:a.id,isPlatformCosts:v,groupBy:e,router:c,title:g.toString()})},g);u.push({cells:[{},{value:m().createElement(m().Fragment,null,m().createElement("div",null,O),m().createElement("div",{style:z.W.infoDescription},E))},{hidden:!p,value:a.classification===B.e4?m().createElement("div",null,m().createElement(n.Label,{variant:"outline",color:"green"},o.formatMessage(i.Z.default))):m().createElement("div",{style:z.W.defaultLabel})},{hidden:!(p&&l),value:m().createElement("div",null,"N/A")},{value:m().createElement("div",null,y),id:ee},{value:m().createElement("div",null,C),id:Y,style:z.W.managedColumn},{value:m().createElement("div",null,f),id:te,style:z.W.managedColumn},{value:m().createElement("div",null,h),style:z.W.managedColumn},{value:m().createElement("div",null,M)}],item:a,selected:s||d&&void 0!==d.find((e=>e.id===a.id)),selectionDisabled:b})}));const y=g.filter((e=>!a.has(e.id)&&!e.hidden)),f=u.map((e=>{var t=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]])}return a}(e,[]);return t.cells=t.cells.filter((e=>!a.has(e.id)&&!e.hidden)),t}));this.setState({columns:y,rows:f})},this.getActions=(e,t)=>{const{groupBy:a,reportQueryString:n}=this.props;return m().createElement(G.e,{groupBy:a,isDisabled:t,item:e,providerType:o.l.ocp,reportPathsType:ae,reportQueryString:n,showPriceListOption:"cluster"===a})},this.getSupplementaryCost=(e,t)=>{const{report:a,intl:n}=this.props,o=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total?a.meta.total.cost.total.value:0,s=0===o?o.toFixed(2):(e.supplementary.total.value/o*100).toFixed(2);return m().createElement(m().Fragment,null,(0,j.xG)(e.supplementary.total.value,e.supplementary.total.units),m().createElement("div",{style:z.W.infoDescription,key:`total-cost-${t}`},n.formatMessage(i.Z.percentOfCost,{value:s})))},this.getInfrastructureCost=(e,t)=>{const{report:a,intl:n}=this.props,o=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total?a.meta.total.cost.total.value:0,s=0===o?o.toFixed(2):(e.infrastructure.total.value/o*100).toFixed(2);return m().createElement(m().Fragment,null,(0,j.xG)(e.infrastructure.total.value,e.infrastructure.total.units),m().createElement("div",{style:z.W.infoDescription,key:`total-cost-${t}`},n.formatMessage(i.Z.percentOfCost,{value:s})))},this.getMonthOverMonthCost=(e,t)=>{const{intl:a}=this.props,n=(0,j.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),o=null!==e.delta_percent?(0,j.rl)(Math.abs(e.delta_percent)):0,s=!(0===o||"0.00"===o),l=null!==e.delta_percent;let r;return s&&(r="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(r+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(r+=" increase")),l?m().createElement("div",{className:"monthOverMonthOverride"},m().createElement("div",{className:r,key:`month-over-month-cost-${t}`},s?a.formatMessage(i.Z.percent,{value:o}):m().createElement(A.L,null),Boolean(s&&null!==e.delta_percent&&e.delta_value>0)&&m().createElement("span",{className:"fa fa-sort-up",style:z.W.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(s&&null!==e.delta_percent&&e.delta_value<0)&&m().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},z.W.ininfoArrow),z.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),m().createElement("div",{style:z.W.infoDescription,key:`month-over-month-info-${t}`},(0,L.Y)(n))):(0,L.Tf)()},this.getTotalCost=(e,t)=>{const{report:a,intl:n}=this.props,o=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total?a.meta.total.cost.total.value:0,s=0===o?o.toFixed(2):(e.cost.total.value/o*100).toFixed(2);return m().createElement(m().Fragment,null,(0,j.xG)(e.cost.total.value,e.cost.total.units),m().createElement("div",{style:z.W.infoDescription,key:`total-cost-${t}`},n.formatMessage(i.Z.percentOfCost,{value:s})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{hiddenColumns:t,report:a,selectedItems:n}=this.props,o=a&&a.data?JSON.stringify(a.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")===o&&e.selectedItems===n&&e.hiddenColumns===t||this.initDatum()}render(){const{isLoading:e,onSelected:t,onSort:a,selectedItems:n}=this.props,{columns:o,rows:s}=this.state;return m().createElement(J.w,{columns:o,isLoading:e,onSelected:t,onSort:a,rows:s,selectedItems:n})}}const oe=(0,p.ZP)((0,w.E)(ne));var se=a(36116),le=a(70539),re=a(48949),ie=a(94282);const ce=F.Q.tag,de=F.L.ocp;class me extends m().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,a=[{name:e.formatMessage(i.Z.filterByValues,{value:"cluster"}),key:"cluster"},{name:e.formatMessage(i.Z.filterByValues,{value:"node"}),key:"node"},{name:e.formatMessage(i.Z.filterByValues,{value:"project"}),key:"project"}];return t&&t.data&&t.data.length&&a.push({name:e.formatMessage(i.Z.filterByValues,{value:B.up}),key:B.up}),a}}componentDidMount(){const{fetchTag:e,tagReportFetchStatus:t,tagQueryString:a}=this.props;this.setState({categoryOptions:this.getCategoryOptions()},(()=>{t!==O.iF.inProgress&&e(de,ce,a)}))}componentDidUpdate(e){const{fetchTag:t,query:a,tagReport:n,tagReportFetchStatus:o,tagQueryString:s}=this.props;(0,ie.X)(n,e.tagReport)?a&&!(0,ie.X)(a,e.query)&&o!==O.iF.inProgress&&t(de,ce,s):this.setState({categoryOptions:this.getCategoryOptions()},(()=>{o!==O.iF.inProgress&&t(de,ce,s)}))}render(){const{groupBy:e,isAllSelected:t,isDisabled:a,isExportDisabled:n,itemsPerPage:o,itemsTotal:s,onBulkSelected:l,onColumnManagementClicked:r,onExportClicked:i,onFilterAdded:c,onFilterRemoved:d,onPlatformCostsChanged:p,pagination:u,query:h,selectedItems:g,tagReport:y}=this.props,{categoryOptions:f}=this.state;return m().createElement(le.k,{categoryOptions:f,groupBy:e,isAllSelected:t,isDisabled:a,isExportDisabled:n,itemsPerPage:o,itemsTotal:s,onBulkSelected:l,onColumnManagementClicked:r,onExportClicked:i,onFilterAdded:c,onFilterRemoved:d,onPlatformCostsChanged:p,pagination:u,query:h,resourcePathsType:se.C.ocp,selectedItems:g,showBulkSelect:!0,showColumnManagement:!0,showExport:!0,showFilter:!0,showPlatformCosts:"project"===e,tagReport:y,tagReportPathsType:de})}}const pe=(0,O.X1)(((e,t)=>{const a=(0,s.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3});return{tagReport:re.ux.selectTag(e,de,ce,a),tagReportFetchStatus:re.ux.selectTagFetchStatus(e,de,ce,a),tagQueryString:a}})),ue={fetchTag:re.xr.Xt},he=(0,u.connect)(pe,ue)(me),ge=(0,p.ZP)(he);var ye=a(49382),fe=a(98499),Ce=a(32412);const ve={content:{paddingBottom:fe.ZP.value,paddingTop:fe.ZP.value},ocpDetails:{minHeight:"100vh"},paginationContainer:{marginLeft:fe.ZP.value,marginRight:fe.ZP.value},pagination:{backgroundColor:ye.ZP.value,paddingBottom:Ce.ZP.value,paddingTop:Ce.ZP.value},tableContainer:{marginLeft:fe.ZP.value,marginRight:fe.ZP.value},toolbarContainer:{marginLeft:fe.ZP.value,marginRight:fe.ZP.value}},Se={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},exclude:{},filter_by:{},group_by:{project:"*"},order_by:{cost:"desc"}},Ee=[{label:i.Z.monthOverMonthChange,value:ee},{description:i.Z.ocpDetailsInfrastructureCostDesc,label:i.Z.ocpDetailsInfrastructureCost,value:Y,hidden:!0},{description:i.Z.ocpDetailsSupplementaryCostDesc,label:i.Z.ocpDetailsSupplementaryCost,value:te,hidden:!0}],be=r.C.cost,Me=r.K.ocp;class Oe extends m().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],hiddenColumns:(0,v.Y)(Ee),isAllSelected:!1,isColumnManagementModalOpen:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getColumnManagementModal=()=>{const{hiddenColumns:e,isColumnManagementModalOpen:t}=this.state,a=(0,c.cloneDeep)(Ee);return a.map((t=>{t.hidden=e.has(t.value)})),m().createElement(v.$,{isOpen:t,options:a,onClose:this.handleColumnManagementModalClose,onSave:this.handleColumnManagementModalSave})},this.getComputedItems=()=>{const{query:e,report:t}=this.props,a=T(e.group_by),n=(0,S.qV)(e);return(0,D.c)({report:t,idKey:n||a})},this.getExportModal=e=>{const{query:t,report:a,reportQueryString:n}=this.props,{isAllSelected:o,isExportModalOpen:s,selectedItems:l}=this.state,r=T(t.group_by),i=(0,S.qV)(t),c=a&&a.meta?a.meta.count:0,d=[];return l.map((e=>{e.label!==`${B.Xq}${r}`&&e.label!==`${B.Xq}${i}`&&d.push(e)})),m().createElement(C.X,{count:o?c:d.length,isAllItems:(o||l.length===c)&&e.length>0,groupBy:i?`${B.P}${i}`:r,isOpen:s,items:d,onClose:this.handleExportModalClose,reportPathsType:Me,reportQueryString:n})},this.getPagination=(e=!1,t=!1)=>{const{intl:a,query:o,report:s,router:l}=this.props,r=s&&s.meta?s.meta.count:0,c=s&&s.meta&&s.meta.filter&&s.meta.filter.limit?s.meta.filter.limit:Se.filter.limit,d=(s&&s.meta&&s.meta.filter&&s.meta.filter.offset?s.meta.filter.offset:Se.filter.offset)/c+1;return m().createElement(n.Pagination,{isCompact:!t,isDisabled:e,itemCount:r,onPerPageSelect:(e,t)=>(0,E.xh)(o,l,t),onSetPage:(e,t)=>(0,E.$9)(o,l,s,t),page:d,perPage:c,titles:{paginationTitle:a.formatMessage(i.Z.paginationTitle,{title:a.formatMessage(i.Z.openShift),placement:t?"bottom":"top"})},variant:t?n.PaginationVariant.bottom:n.PaginationVariant.top,widgetId:"exports-pagination"+(t?"-bottom":"")})},this.getTable=()=>{const{isRosFeatureEnabled:e,query:t,report:a,reportFetchStatus:n,reportQueryString:o,router:s}=this.props,{hiddenColumns:l,isAllSelected:r,selectedItems:i}=this.state,c=T(t.group_by),d=(0,S.qV)(t);return m().createElement(oe,{groupBy:d?`${B.P}${d}`:c,groupByTagKey:d,hiddenColumns:l,isAllSelected:r,isLoading:n===O.iF.inProgress,isRosFeatureEnabled:e,onSelected:this.handleSelected,onSort:(e,a)=>(0,E.yB)(t,s,e,a),report:a,reportQueryString:o,selectedItems:i})},this.getToolbar=e=>{const{query:t,report:a,router:n}=this.props,{isAllSelected:o,selectedItems:s}=this.state,l=T(t.group_by),r=(0,S.qV)(t),i=0===e.length,c=a&&a.meta?a.meta.count:0;return m().createElement(ge,{groupBy:r?`${B.P}${r}`:l,isAllSelected:o,isDisabled:i,isExportDisabled:i||!o&&0===s.length,itemsPerPage:e.length,itemsTotal:c,onBulkSelected:this.handleBulkSelected,onColumnManagementClicked:this.handleColumnManagementModalOpen,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,E.$3)(t,n,e),onFilterRemoved:e=>(0,E.q7)(t,n,e),onPlatformCostsChanged:this.handlePlatformCostsChanged,pagination:this.getPagination(i),query:t,selectedItems:s})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleColumnManagementModalClose=e=>{this.setState({isColumnManagementModalOpen:e})},this.handleColumnManagementModalOpen=()=>{this.setState({isColumnManagementModalOpen:!0})},this.handleColumnManagementModalSave=e=>{this.setState({hiddenColumns:e})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{query:t,router:a}=this.props,n=e,o=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{group_by:{[n]:"*"},order_by:{cost:"desc"},category:void 0});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{a.navigate((0,M.Z)(o,a.location,!0),{replace:!0})}))},this.handlePlatformCostsChanged=e=>{const{query:t,router:a}=this.props,n=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{category:e?B.rx:void 0});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{a.navigate((0,M.Z)(n,a.location,!0),{replace:!0})}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:a,selectedItems:n}=this.state;let o=[...a?this.getComputedItems():n];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.updateReport=()=>{const{fetchReport:e,reportQueryString:t}=this.props;e(Me,be,t)},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleColumnManagementModalClose=this.handleColumnManagementModalClose.bind(this),this.handleColumnManagementModalOpen=this.handleColumnManagementModalOpen.bind(this),this.handleColumnManagementModalSave=this.handleColumnManagementModalSave.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handlePlatformCostsChanged=this.handlePlatformCostsChanged.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{report:a,reportError:n,reportQueryString:o,router:s}=this.props,{selectedItems:l}=this.state,r=e.reportQueryString!==o,i=!a&&!n,c=!s.location.search,d=t.selectedItems!==l;(r||i||c||d)&&this.updateReport()}render(){const{currency:e,intl:t,providers:a,providersFetchStatus:n,query:s,report:l,reportError:r,reportFetchStatus:c,router:d}=this.props,p=this.getComputedItems(),u=T(s.group_by),C=0===p.length,v=t.formatMessage(i.Z.ocpDetailsTitle);if(r)return m().createElement(f.W,{title:v});if(n===O.iF.inProgress)return m().createElement(h.g,{title:v});if(n===O.iF.complete){if(a&&a.meta&&0===a.meta.count)return m().createElement(y.L,{providerType:o.l.ocp,title:v});if(!(0,b.g8)(a))return m().createElement(g.J,{title:v})}return m().createElement("div",{style:ve.ocpDetails},m().createElement(Q,{currency:e,groupBy:u,onCurrencySelected:e=>(0,E._s)(s,d,e),onGroupBySelected:this.handleGroupBySelected,report:l}),m().createElement("div",{style:ve.content},m().createElement("div",{style:ve.toolbarContainer},this.getToolbar(p)),this.getExportModal(p),this.getColumnManagementModal(),c===O.iF.inProgress?m().createElement(h.g,null):m().createElement(m().Fragment,null,m().createElement("div",{style:ve.tableContainer},this.getTable()),m().createElement("div",{style:ve.paginationContainer},m().createElement("div",{style:ve.pagination},this.getPagination(C,!0))))))}}const xe=(0,O.X1)(((e,{router:t})=>{const a=(0,s.mB)(t.location.search),n=x.iJ.selectIsCurrencyFeatureEnabled(e)?(0,k.zC)():void 0,r={delta:"cost",filter:Object.assign(Object.assign({},Se.filter),a.filter),filter_by:a.filter_by||Se.filter_by,exclude:a.exclude||Se.exclude,group_by:a.group_by||Se.group_by,order_by:a.order_by||Se.order_by,category:a.category},i=(0,s.pm)(Object.assign(Object.assign({},r),{currency:n})),c=Z.ZV.selectReport(e,Me,be,i),d=Z.ZV.selectReportError(e,Me,be,i),m=Z.ZV.selectReportFetchStatus(e,Me,be,i),p=(0,l.H)(P.NT),u=P.aX.selectProviders(e,o.l.all,p),h=P.aX.selectProvidersFetchStatus(e,o.l.all,p);return{currency:n,isRosFeatureEnabled:x.iJ.selectIsRosFeatureEnabled(e),providers:(0,b.BV)(u,o.l.ocp),providersFetchStatus:h,query:r,report:c,reportError:d,reportFetchStatus:m,reportQueryString:i}})),Pe={fetchReport:Z.nx.fetchReport},Ze=(0,p.ZP)((0,w.E)((0,u.connect)(xe,Pe)(Oe)))}}]);
//# sourceMappingURL=../sourcemaps/ocpDetails.06b6c6da791282cf053bf254ad762da5.js.map