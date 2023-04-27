"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[7369],{15265:(e,t,s)=>{s.d(t,{LA:()=>n,ZP:()=>l,mq:()=>o});var a=s(40400);const o={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},n=(0,a.IU)(o),l=n},17918:(e,t)=>{t.VH={name:"--pf-global--FontSize--md",value:"1rem",var:"var(--pf-global--FontSize--md)"},t.ZP=t.VH},43789:(e,t)=>{t.Q8={name:"--pf-global--spacer--xs",value:"0.25rem",var:"var(--pf-global--spacer--xs)"},t.ZP=t.Q8},72483:(e,t,s)=>{s.d(t,{Y:()=>p});var a=s(90154),o=s(97027),n=s(92950),l=s.n(n),r=s(74806);const i=s(80794),c=(0,r.ZP)((({className:e,intl:t})=>l().createElement("img",{className:`optimization-icon ${e}`,src:i,alt:t.formatMessage(o.Z.optimizations),"aria-hidden":"true"})));class d extends l().Component{render(){const{intl:e}=this.props;return l().createElement(a.EmptyState,{variant:a.EmptyStateVariant.large,className:"pf-m-redhat-font"},l().createElement(a.EmptyStateIcon,{icon:c}),l().createElement(a.Title,{headingLevel:"h1",size:"lg"},e.formatMessage(o.Z.noOptimizationsTitle)),l().createElement(a.EmptyStateBody,null,e.formatMessage(o.Z.noOptimizationsDesc)))}}const p=(0,r.ZP)(d)},97698:(e,t,s)=>{s.d(t,{N:()=>f});var a=s(90154),o=s(97027),n=s(92950),l=s.n(n),r=s(74806),i=s(77760),c=s(38935),d=s(1156),p=s(15829);const u={selector:{display:"flex",alignItems:"center"},label:{marginBottom:0,marginRight:s(32412).ZP.var,whiteSpace:"nowrap"}},m=[{label:o.Z.costDistributionType,value:c.Qf.distributed},{label:o.Z.costDistributionType,value:c.Qf.total}];class h extends l().Component{constructor(){super(...arguments),this.defaultState={isSelectOpen:!1},this.state=Object.assign({},this.defaultState),this.getSelect=()=>{const{costDistribution:e,isDisabled:t}=this.props,{isSelectOpen:s}=this.state,o=this.getSelectOptions(),n=o.find((t=>t.value===e));return l().createElement(a.Select,{className:"selectOverride",id:"costDistributionSelect",isDisabled:t,isOpen:s,onSelect:this.handleSelect,onToggle:this.handleToggle,selections:n,variant:a.SelectVariant.single},o.map((e=>l().createElement(a.SelectOption,{description:e.desc,key:e.value,value:e}))))},this.getSelectOptions=()=>{const{intl:e}=this.props,t=[];return m.map((s=>{t.push({toString:()=>e.formatMessage(s.label,{value:s.value}),value:s.value})})),t},this.handleSelect=(e,t)=>{const{onSelect:s}=this.props;(0,p.mu)(t.value),this.setState({isSelectOpen:!1},(()=>{s&&s(t.value)}))},this.handleToggle=e=>{this.setState({isSelectOpen:e})}}render(){const{intl:e}=this.props;return(0,p.eu)(),l().createElement("div",{style:u.selector},l().createElement(a.Title,{headingLevel:"h3",size:"md",style:u.label},e.formatMessage(o.Z.costDistributionLabel)),this.getSelect())}}const g=(0,d.X1)((()=>({}))),y=(0,i.connect)(g,{})(h),f=(0,r.ZP)(y)},62423:(e,t,s)=>{s.d(t,{e:()=>v});var a=s(90154),o=s(97027),n=s(92950),l=s.n(n),r=s(74806),i=s(77760),c=s(40493),d=s(1156),p=s(58613),u=s(14483),m=s(5842);class h extends l().Component{constructor(e,t){super(e,t),this.defaultState={isDropdownOpen:!1,isExportModalOpen:!1},this.state=Object.assign({},this.defaultState),this.getExportModal=()=>{const{groupBy:e,item:t,reportPathsType:s,reportQueryString:a}=this.props,{isExportModalOpen:o}=this.state;return l().createElement(c.X,{count:1,groupBy:e,isOpen:o,items:[t],onClose:this.handleExportModalClose,reportPathsType:s,reportQueryString:a})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleOnSelect=()=>{const{isDropdownOpen:e}=this.state;this.setState({isDropdownOpen:!e})},this.handleOnToggle=e=>{this.setState({isDropdownOpen:e})},this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleOnToggle=this.handleOnToggle.bind(this),this.handleOnSelect=this.handleOnSelect.bind(this)}render(){const{groupBy:e,isDisabled:t,showPriceListOption:s,intl:n,item:{source_uuid:r},redirectToCostModel:i,router:c}=this.props,d=[l().createElement(a.DropdownItem,{component:"button",isDisabled:t,key:"export-action",onClick:this.handleExportModalOpen},n.formatMessage(o.Z.detailsActionsExport))];return s&&d.unshift(l().createElement(a.DropdownItem,{component:"button",key:"price-list-action",isDisabled:t||e.includes(u.P)||0===r.length,onClick:()=>i(r[0],c)},n.formatMessage(o.Z.detailsActionsPriceList))),l().createElement(l().Fragment,null,l().createElement(a.Dropdown,{onSelect:this.handleOnSelect,toggle:l().createElement(a.KebabToggle,{onToggle:this.handleOnToggle}),isOpen:this.state.isDropdownOpen,isPlain:!0,position:"right",dropdownItems:d}),this.getExportModal())}}const g=(0,d.X1)(((e,t)=>({}))),y={redirectToCostModel:p.F0.redirectToCostModelFromSourceUuid},f=(0,i.connect)(g,y)(h),v=(0,r.ZP)((0,m.E)(f))},44348:(e,t,s)=>{s.d(t,{$:()=>h,Y:()=>d});var a=s(90154),o=s(97027),n=s(92950),l=s.n(n),r=s(74806),i=s(77760),c=s(1156);const d=e=>{const t=new Set;return e.map((e=>{e.hidden&&t.add(e.value)})),t};class p extends l().Component{constructor(e,t){super(e,t),this.defaultState={hiddenColumns:d(this.props.options)},this.state=Object.assign({},this.defaultState),this.getHidden=e=>{const{hiddenColumns:t}=this.state,s=new Set(t);return s.delete(e)||s.add(e),s},this.isHidden=e=>{const{hiddenColumns:t}=this.state;return t.has(e)},this.handleChange=(e,t)=>{const s=this.getHidden(t.target.id);this.setState({hiddenColumns:s})},this.handleClose=()=>{this.setState(Object.assign({},this.defaultState),(()=>{this.props.onClose(!1)}))},this.handleSave=()=>{const{hiddenColumns:e}=this.state;this.props.onSave(e),this.handleClose()},this.selectAll=()=>{this.setState({hiddenColumns:new Set})}}componentDidUpdate(e){const{options:t}=this.props;if(e.options!==t){const e=d(t);this.setState({hiddenColumns:e})}}render(){const{options:e,intl:t}=this.props;return l().createElement(a.Modal,{description:l().createElement(a.TextContent,null,l().createElement(a.Text,{component:a.TextVariants.p},t.formatMessage(o.Z.manageColumnsDesc)),l().createElement(a.Button,{isInline:!0,onClick:this.selectAll,variant:"link"},t.formatMessage(o.Z.selectAll))),isOpen:this.props.isOpen,onClose:this.handleClose,title:t.formatMessage(o.Z.manageColumnsTitle),variant:a.ModalVariant.medium,actions:[l().createElement(a.Button,{key:"save",onClick:this.handleSave,variant:a.ButtonVariant.link},t.formatMessage(o.Z.save)),l().createElement(a.Button,{key:"cancel",onClick:this.handleClose,variant:a.ButtonVariant.link},t.formatMessage(o.Z.cancel))]},l().createElement(a.DataList,{"aria-label":t.formatMessage(o.Z.manageColumnsAriaLabel),id:"table-column-management",isCompact:!0},e.map((e=>l().createElement(a.DataListItem,{"aria-labelledby":e.value,key:e.value},l().createElement(a.DataListItemRow,null,l().createElement(a.DataListCheck,{"aria-labelledby":`${e.value}Label`,isChecked:!this.isHidden(e.value),name:e.value,id:e.value,onChange:this.handleChange}),l().createElement(a.DataListItemCells,{dataListCells:[l().createElement(a.DataListCell,{id:`${e.value}Label`,key:"table-column-management-item1"},l().createElement("span",null,t.formatMessage(e.label))),l().createElement(a.DataListCell,{key:"table-column-management-item2"},e.description&&l().createElement("span",null,t.formatMessage(e.description)))]})))))))}}const u=(0,c.X1)((()=>({}))),m=(0,i.connect)(u,{})(p),h=(0,r.ZP)(m)},90302:(e,t,s)=>{s.d(t,{W:()=>i});var a=s(49382),o=s(12289),n=s(40794),l=s(11331),r=s(43789);const i={costColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end",paddingRight:0},defaultLabel:{minWidth:"63px"},emptyState:{backgroundColor:a.ZP.value,display:"flex",justifyContent:"center",paddingTop:l.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:r.ZP.value},infoDescription:{color:o.ZP.value,fontSize:n.ZP.value},lastReported:{textAlign:"right",paddingRight:"40px"},lastReportedColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end"},managedColumn:{textAlign:"right"},nameColumn:{width:"1%"}}},90569:(e,t,s)=>{s.d(t,{w:()=>y});var a=s(90154),o=s(52636),n=s(40227),l=s(79112),r=s(97027),i=s(92950),c=s.n(i),d=s(74806),p=s(42901),u=s(72483),m=s(5842),h=s(90302);class g extends c().Component{constructor(e){super(e),this.getEmptyState=()=>{const{intl:e,isOptimizations:t,router:s}=this.props,n=(0,l.mB)(s.location.search);if(n.filter_by)for(const e of Object.values(n.filter_by))if("*"!==e)return c().createElement(p.c,{filter:e,showMargin:!1});return t?c().createElement(u.Y,null):c().createElement(a.EmptyState,null,c().createElement(a.EmptyStateIcon,{icon:o.Xk}),c().createElement(a.EmptyStateBody,null,e.formatMessage(r.Z.detailsEmptyState)))},this.getSortBy=e=>{const{columns:t,router:s}=this.props,a=t[e].orderBy,o=(0,l.mB)(s.location.search),n=o&&o.order_by&&o.order_by[a];return n?{index:e,direction:n}:{}},this.getSortParams=e=>({sortBy:this.getSortBy(e),onSort:this.handleOnSort,columnIndex:e}),this.handleOnSelect=(e,t,s)=>{const{onSelected:a,rows:o}=this.props;let n,l=[];-1===s?n=o.map((e=>(e.selected=t,e))):(n=[...o],n[s].selected=t,l=[n[s].item]),this.setState({rows:o},(()=>{a&&a(l,t)}))},this.handleOnSort=(e,t,s)=>{const{columns:a,onSort:o}=this.props;o&&o(a[t].orderBy,s===n.SortByDirection.asc)},this.handleOnRowClick=(e,t)=>{const{onRowClick:s,rows:a}=this.props;a.map((e=>e.selected=!1)),a[t].selected=!0,this.setState({rows:a},(()=>{s&&s(e,t)}))},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}render(){const{columns:e,intl:t,isLoading:s,isOptimizations:o,rows:l}=this.props;return c().createElement(c().Fragment,null,c().createElement(n.TableComposable,{"aria-label":t.formatMessage(r.Z.dataTableAriaLabel),className:"tableOverride",gridBreakPoint:"grid-2xl",hasSelectableRowCaption:o},c().createElement(n.Thead,null,c().createElement(n.Tr,null,e.map(((e,t)=>c().createElement(n.Th,{key:`col-${t}-${e.value}`,modifier:"nowrap",sort:e.isSortable?this.getSortParams(t):void 0,style:e.style},e.name))))),c().createElement(n.Tbody,null,s?c().createElement(n.Tr,null,c().createElement(n.Td,{colSpan:100},c().createElement(a.Bullseye,null,c().createElement("div",{style:{textAlign:"center"}},c().createElement(a.Spinner,{size:"xl"}))))):l.map(((t,s)=>c().createElement(n.Tr,{isSelectable:o,isHoverable:o,isRowSelected:o&&t.selected,onRowClick:o?e=>this.handleOnRowClick(e,s):void 0,key:`row-${s}`},t.cells.map(((a,l)=>0!==l||o?c().createElement(n.Td,{dataLabel:e[l].name,key:`cell-${s}-${l}`,modifier:"nowrap",isActionCell:!o&&l===t.cells.length-1,style:a.style},a.value):c().createElement(n.Td,{dataLabel:e[l].name,key:`cell-${l}-${s}`,modifier:"nowrap",select:{disable:t.selectionDisabled,isSelected:t.selected,onSelect:(e,t)=>this.handleOnSelect(e,t,s),rowIndex:s},style:a.style})))))))),0===l.length&&c().createElement("div",{style:h.W.emptyState},this.getEmptyState()))}}const y=(0,d.ZP)((0,m.E)(g))},33748:(e,t,s)=>{s.d(t,{W:()=>c});var a=s(49382),o=s(33605),n=s(17918),l=s(54881),r=s(98499),i=s(48196);const c={costDistribution:{display:"flex",marginLeft:r.ZP.var},costValue:{marginTop:r.ZP.var,marginBottom:0},costLabelUnit:{fontSize:l.ZP.value,color:o.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:a.ZP.var,padding:r.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},info:{verticalAlign:"middle"},infoIcon:{fontSize:n.ZP.value},infoTitle:{fontWeight:"bold"},title:{paddingBottom:i.ZP.var}}},58990:(e,t,s)=>{s.r(t),s.d(t,{default:()=>je});var a=s(90154),o=s(1326),n=s(79112),l=s(84717),r=s(6456),i=s(97027),c=s(44439),d=s(92950),p=s.n(d),u=s(74806),m=s(77760),h=s(52471),g=s(55672),y=s(2985),f=s(47947),v=s(38935),b=s(40493),S=s(44348),C=s(37269),E=s(19727),M=s(86482),O=s(10066),x=s(1156),D=s(78898),Z=s(62331),P=s(15920);function T(e={}){return e.project?"project":e.cluster?"cluster":e.node?"node":"date"}var k=s(69511),w=s(15829),B=s(14483),R=s(5842),I=s(50081),_=s(26744),F=s(6450),L=s(98485),j=s(97698),A=s(36465),W=s(45087),$=s(91778),V=s(33748);const Q=[{label:"cluster",value:"cluster"},{label:"node",value:"node"},{label:"project",value:"project"}],q=I.L.ocp;class z extends p().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState)}render(){const{costDistribution:e,currency:t,groupBy:s,isCostDistributionFeatureEnabled:o,isExportsFeatureEnabled:n,onCostDistributionSelected:l,onCurrencySelected:r,onGroupBySelected:c,providers:d,providersError:u,report:m,intl:h}=this.props,g=m&&!u&&d&&d.meta&&d.meta.count>0,y="project"===s&&m&&m.meta&&!0===m.meta.distributed_overhead;let f=p().createElement(L.L,null),b=p().createElement(L.L,null),S=p().createElement(L.L,null);const C=e||v.Qf.total;if(m&&m.meta&&m.meta.total){const e=m.meta.total.cost&&m.meta.total.cost[C],t=m.meta.total.supplementary&&m.meta.total.supplementary.total,s=m.meta.total.infrastructure&&m.meta.total.infrastructure.total;f=(0,$.xG)(e?m.meta.total.cost[C].value:0,e?m.meta.total.cost[C].units:"USD"),b=(0,$.xG)(t?m.meta.total.supplementary.total.value:0,t?m.meta.total.supplementary.total.units:"USD"),S=(0,$.xG)(s?m.meta.total.infrastructure.total.value:0,s?m.meta.total.infrastructure.total.units:"USD")}return p().createElement("header",{style:V.W.header},p().createElement("div",{style:V.W.headerContent},p().createElement(a.Title,{headingLevel:"h1",style:V.W.title,size:a.TitleSizes["2xl"]},h.formatMessage(i.Z.ocpDetailsTitle)),p().createElement("div",{style:V.W.headerContentRight},p().createElement(F.F,{currency:t,onSelect:r}),n&&p().createElement(_.bj,null))),p().createElement("div",{style:V.W.headerContent},p().createElement("div",{style:V.W.headerContentLeft},p().createElement(A.X,{getIdKeyForGroupBy:T,groupBy:s,isDisabled:!g,onSelected:c,options:Q,showTags:!0,tagPathsType:q}),y&&o&&p().createElement("div",{style:V.W.costDistribution},p().createElement(j.N,{costDistribution:e,onSelect:l}))),g&&p().createElement("div",null,p().createElement(a.Tooltip,{content:h.formatMessage(i.Z.dashboardTotalCostTooltip,{infrastructureCost:S,supplementaryCost:b}),enableFlip:!0},p().createElement(a.Title,{headingLevel:"h2",style:V.W.costValue,size:a.TitleSizes["4xl"]},f)),p().createElement("div",{style:V.W.dateTitle},(0,W.J4)()))))}}const N=(0,x.X1)(((e,t)=>{const s=(0,l.H)(Z.NT),a=Z.aX.selectProviders(e,o.l.all,s),n=Z.aX.selectProvidersError(e,o.l.all,s),r=Z.aX.selectProvidersFetchStatus(e,o.l.all,s);return{isCostDistributionFeatureEnabled:D.iJ.selectIsCostDistributionFeatureEnabled(e),isExportsFeatureEnabled:D.iJ.selectIsExportsFeatureEnabled(e),providers:(0,M.BV)(a,o.l.ocp),providersError:n,providersFetchStatus:r,providersQueryString:s}})),X=(0,u.ZP)((0,m.connect)(N,{})(z));var H=s(39836),G=s(91919),J=s(62423),U=s(90569),K=s(90302),Y=s(54583),ee=s(68025),te=s(39333),se=s(89256),ae=s(2136);const oe=se.v.recommendations,ne=se.N.ros;class le extends p().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.updateReport=()=>{const{fetchReport:e,reportQueryString:t}=this.props;e(oe,ne,t)},this.getBreakdownLink=e=>{const{project:t,router:s}=this.props;return 0===e||void 0===t?e:p().createElement(H.Link,{to:(0,Y.T)({basePath:(0,ee.dI)(G._.ocpDetailsBreakdown.path),groupBy:"project",id:t,isOptimizationsTab:!0,router:s,title:t})},e)}}componentDidMount(){this.updateReport()}render(){const{report:e}=this.props,t=e&&e.meta?e.meta.count:0;return p().createElement("span",null,this.getBreakdownLink(t))}}const re=(0,x.X1)(((e,{project:t})=>{const s={project:t},a=(0,te.pm)(s);return{report:ae.R0.selectRos(e,oe,ne,a),reportError:ae.R0.selectRosError(e,oe,ne,a),reportFetchStatus:ae.R0.selectRosFetchStatus(e,oe,ne,a),reportQueryString:a}})),ie={fetchReport:ae.Ze.fetchRosReport},ce=(0,R.E)((0,m.connect)(re,ie)(le));const de="infrastructure",pe="monthOverMonth",ue="supplementary",me=r.K.ocp;class he extends p().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{costDistribution:e,groupBy:t,groupByTagKey:s,hiddenColumns:o,intl:n,isAllSelected:l,isRosFeatureEnabled:r,report:c,router:d,selectedItems:u}=this.props;if(!c)return;const m="project"===t,h=[],g=(0,k.c)({report:c,idKey:s||t}),y=s?[{name:""},{name:n.formatMessage(i.Z.tagNames),style:"project"===t?K.W.nameColumn:void 0},{hidden:!m,name:""},{hidden:!(m&&r),name:n.formatMessage(i.Z.optimizations)},{name:n.formatMessage(i.Z.monthOverMonthChange)},{id:de,name:n.formatMessage(i.Z.ocpDetailsInfrastructureCost),style:K.W.managedColumn},{id:ue,name:n.formatMessage(i.Z.ocpDetailsSupplementaryCost),style:K.W.managedColumn},Object.assign({orderBy:e===v.Qf.distributed?"distributed_cost":"cost",name:n.formatMessage(i.Z.cost),style:K.W.costColumn},g.length&&{isSortable:!1}),{name:""}]:[{name:""},Object.assign(Object.assign({orderBy:t,name:n.formatMessage(i.Z.detailsResourceNames,{value:t})},g.length&&{isSortable:!0}),{style:"project"===t?K.W.nameColumn:void 0}),{hidden:!m,name:""},{hidden:!(m&&r),name:n.formatMessage(i.Z.optimizations)},{id:pe,name:n.formatMessage(i.Z.monthOverMonthChange)},{id:de,orderBy:"infrastructure_cost",name:n.formatMessage(i.Z.ocpDetailsInfrastructureCost),style:K.W.managedColumn},{id:ue,orderBy:"supplementary_cost",name:n.formatMessage(i.Z.ocpDetailsSupplementaryCost),style:K.W.managedColumn},Object.assign({orderBy:e===v.Qf.distributed?"distributed_cost":"cost",name:n.formatMessage(i.Z.cost),style:K.W.costColumn},g.length&&{isSortable:!0}),{name:""}];g.map(((o,c)=>{const g=this.getTotalCost(o,c),y=o&&null!==o.label?o.label:"",f=this.getMonthOverMonthCost(o,c),b=this.getSupplementaryCost(o,c),S=this.getInfrastructureCost(o,c),C=e===v.Qf.distributed&&(o.cost.platformDistributed&&o.cost.platformDistributed.value>0||o.cost.workerUnallocatedDistributed&&o.cost.workerUnallocatedDistributed.value>0),E=o.classification===B.A8,M=o.classification===B.ND,O=o.id&&o.id!==o.label?p().createElement("div",{style:K.W.infoDescription},o.id):null,x=y===`${B.Xq}${t}`||y===`${B.Xq}${s}`||M,D=this.getActions(o,x),Z=x?y:p().createElement(H.Link,{to:(0,Y.T)({basePath:(0,ee.dI)(G._.ocpDetailsBreakdown.path),description:o.id,id:o.id,isPlatformCosts:E,groupBy:t,router:d,title:y.toString()})},y);h.push({cells:[{},{value:p().createElement(p().Fragment,null,p().createElement("div",null,Z),p().createElement("div",{style:K.W.infoDescription},O))},{hidden:!m,value:o.classification===B.e4?p().createElement("div",null,p().createElement(a.Label,{variant:"outline",color:"green"},n.formatMessage(i.Z.default))):C?p().createElement(a.Tooltip,{content:n.formatMessage(i.Z.overheadDesc),enableFlip:!0},p().createElement(a.Label,{variant:"outline",color:"orange"},n.formatMessage(i.Z.overhead))):p().createElement("div",{style:K.W.defaultLabel})},{hidden:!(m&&r),value:!E&&!x&&p().createElement("div",null,p().createElement(ce,{project:y}))},{value:p().createElement("div",null,f),id:pe},{value:p().createElement("div",null,S),id:de,style:K.W.managedColumn},{value:p().createElement("div",null,b),id:ue,style:K.W.managedColumn},{value:p().createElement("div",null,g),style:K.W.managedColumn},{value:p().createElement("div",null,D)}],item:o,selected:l||u&&void 0!==u.find((e=>e.id===o.id)),selectionDisabled:x})}));const f=y.filter((e=>!o.has(e.id)&&!e.hidden)),b=h.map((e=>{var t=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(s[a[o]]=e[a[o]])}return s}(e,[]);return t.cells=t.cells.filter((e=>!o.has(e.id)&&!e.hidden)),t}));this.setState({columns:f,rows:b})},this.getActions=(e,t)=>{const{groupBy:s,reportQueryString:a}=this.props;return p().createElement(J.e,{groupBy:s,isDisabled:t,item:e,providerType:o.l.ocp,reportPathsType:me,reportQueryString:a,showPriceListOption:"cluster"===s})},this.getSupplementaryCost=(e,t)=>{const{costDistribution:s,report:a,intl:o}=this.props,n=s||v.Qf.total,l=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost[n]?a.meta.total.cost[n].value:0,r=0===l?l.toFixed(2):(e.supplementary.total.value/l*100).toFixed(2);return p().createElement(p().Fragment,null,(0,$.xG)(e.supplementary.total.value,e.supplementary.total.units),p().createElement("div",{style:K.W.infoDescription,key:`total-cost-${t}`},o.formatMessage(i.Z.percentOfCost,{value:r})))},this.getInfrastructureCost=(e,t)=>{const{costDistribution:s,report:a,intl:o}=this.props,n=s||v.Qf.total,l=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost[n]?a.meta.total.cost[n].value:0,r=0===l?l.toFixed(2):(e.infrastructure.total.value/l*100).toFixed(2);return p().createElement(p().Fragment,null,(0,$.xG)(e.infrastructure.total.value,e.infrastructure.total.units),p().createElement("div",{style:K.W.infoDescription,key:`total-cost-${t}`},o.formatMessage(i.Z.percentOfCost,{value:r})))},this.getMonthOverMonthCost=(e,t)=>{const{costDistribution:s,intl:a}=this.props,o=s||v.Qf.total,n=(0,$.xG)(Math.abs(e.cost[o].value-e.delta_value),e.cost[o].units),l=null!==e.delta_percent?(0,$.rl)(Math.abs(e.delta_percent)):0,r=!(0===l||"0.00"===l),c=null!==e.delta_percent;let d;return r&&(d="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(d+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(d+=" increase")),c?p().createElement("div",{className:"monthOverMonthOverride"},p().createElement("div",{className:d,key:`month-over-month-cost-${t}`},r?a.formatMessage(i.Z.percent,{value:l}):p().createElement(L.L,null),r&&null!==e.delta_percent&&e.delta_value>0&&p().createElement("span",{className:"fa fa-sort-up",style:K.W.infoArrow,key:`month-over-month-icon-${t}`}),r&&null!==e.delta_percent&&e.delta_value<0&&p().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},K.W.ininfoArrow),K.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),p().createElement("div",{style:K.W.infoDescription,key:`month-over-month-info-${t}`},(0,W.Y)(n))):(0,W.Tf)()},this.getTotalCost=(e,t)=>{const{costDistribution:s,report:a,intl:o}=this.props,n=s||v.Qf.total,l=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost[n]?a.meta.total.cost[n].value:0,r=0===l?l.toFixed(2):(e.cost[n].value/l*100).toFixed(2);return p().createElement(p().Fragment,null,(0,$.xG)(e.cost[n].value,e.cost[n].units),p().createElement("div",{style:K.W.infoDescription,key:`total-cost-${t}`},o.formatMessage(i.Z.percentOfCost,{value:r})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{costDistribution:t,hiddenColumns:s,report:a,selectedItems:o}=this.props,n=a&&a.data?JSON.stringify(a.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")===n&&e.costDistribution===t&&e.selectedItems===o&&e.hiddenColumns===s||this.initDatum()}render(){const{isLoading:e,onSelected:t,onSort:s,selectedItems:a}=this.props,{columns:o,rows:n}=this.state;return p().createElement(U.w,{columns:o,isLoading:e,onSelected:t,onSort:s,rows:n,selectedItems:a})}}const ge=(0,u.ZP)((0,R.E)(he));var ye=s(36116),fe=s(7893),ve=s(48949),be=s(94282);const Se=I.Q.tag,Ce=I.L.ocp;class Ee extends p().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,s=[{name:e.formatMessage(i.Z.filterByValues,{value:"cluster"}),key:"cluster"},{name:e.formatMessage(i.Z.filterByValues,{value:"node"}),key:"node"},{name:e.formatMessage(i.Z.filterByValues,{value:"project"}),key:"project"}];return t&&t.data&&t.data.length&&s.push({name:e.formatMessage(i.Z.filterByValues,{value:B.up}),key:B.up}),s},this.updateReport=()=>{const{fetchTag:e,tagQueryString:t}=this.props;e(Ce,Se,t)}}componentDidMount(){this.setState({categoryOptions:this.getCategoryOptions()},(()=>{this.updateReport()}))}componentDidUpdate(e){const{query:t,tagReport:s}=this.props;(0,be.X)(s,e.tagReport)?t&&!(0,be.X)(t,e.query)&&this.updateReport():this.setState({categoryOptions:this.getCategoryOptions()},(()=>{this.updateReport()}))}render(){const{groupBy:e,isAllSelected:t,isDisabled:s,isExportDisabled:a,itemsPerPage:o,itemsTotal:n,onBulkSelected:l,onColumnManagementClicked:r,onExportClicked:i,onFilterAdded:c,onFilterRemoved:d,onPlatformCostsChanged:u,pagination:m,query:h,selectedItems:g,tagReport:y}=this.props,{categoryOptions:f}=this.state;return p().createElement(fe.k,{categoryOptions:f,groupBy:e,isAllSelected:t,isDisabled:s,isExportDisabled:a,itemsPerPage:o,itemsTotal:n,onBulkSelected:l,onColumnManagementClicked:r,onExportClicked:i,onFilterAdded:c,onFilterRemoved:d,onPlatformCostsChanged:u,pagination:m,query:h,resourcePathsType:ye.C.ocp,selectedItems:g,showBulkSelect:!0,showColumnManagement:!0,showExcludes:!0,showExport:!0,showFilter:!0,showPlatformCosts:"project"===e,tagReport:y,tagPathsType:Ce})}}const Me=(0,x.X1)(((e,t)=>{const s=(0,n.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3});return{tagReport:ve.ux.selectTag(e,Ce,Se,s),tagReportFetchStatus:ve.ux.selectTagFetchStatus(e,Ce,Se,s),tagQueryString:s}})),Oe={fetchTag:ve.xr.Xt},xe=(0,m.connect)(Me,Oe)(Ee),De=(0,u.ZP)(xe);var Ze=s(49382),Pe=s(98499),Te=s(32412);const ke={content:{paddingBottom:Pe.ZP.value,paddingTop:Pe.ZP.value},ocpDetails:{minHeight:"100vh"},paginationContainer:{marginLeft:Pe.ZP.value,marginRight:Pe.ZP.value},pagination:{backgroundColor:Ze.ZP.value,paddingBottom:Te.ZP.value,paddingTop:Te.ZP.value},tableContainer:{marginLeft:Pe.ZP.value,marginRight:Pe.ZP.value},toolbarContainer:{marginLeft:Pe.ZP.value,marginRight:Pe.ZP.value}},we={filter:{limit:10,offset:0},filter_by:{},exclude:{},group_by:{project:"*"},order_by:{cost:"desc"}},Be=[{label:i.Z.monthOverMonthChange,value:pe},{description:i.Z.ocpDetailsInfrastructureCostDesc,label:i.Z.ocpDetailsInfrastructureCost,value:de,hidden:!0},{description:i.Z.ocpDetailsSupplementaryCostDesc,label:i.Z.ocpDetailsSupplementaryCost,value:ue,hidden:!0}],Re=r.C.cost,Ie=r.K.ocp;class _e extends p().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],hiddenColumns:(0,S.Y)(Be),isAllSelected:!1,isColumnManagementModalOpen:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getColumnManagementModal=()=>{const{hiddenColumns:e,isColumnManagementModalOpen:t}=this.state,s=(0,c.cloneDeep)(Be);return s.map((t=>{t.hidden=e.has(t.value)})),p().createElement(S.$,{isOpen:t,options:s,onClose:this.handleColumnManagementModalClose,onSave:this.handleColumnManagementModalSave})},this.getComputedItems=()=>{const{query:e,report:t}=this.props,s=T(e.group_by),a=(0,C.qV)(e);return(0,k.c)({report:t,idKey:a||s})},this.getExportModal=e=>{const{query:t,report:s,reportQueryString:a}=this.props,{isAllSelected:o,isExportModalOpen:n,selectedItems:l}=this.state,r=T(t.group_by),i=(0,C.qV)(t),c=s&&s.meta?s.meta.count:0,d=[];return l.map((e=>{e.label!==`${B.Xq}${r}`&&e.label!==`${B.Xq}${i}`&&d.push(e)})),p().createElement(b.X,{count:o?c:d.length,isAllItems:(o||l.length===c)&&e.length>0,groupBy:i?`${B.P}${i}`:r,isOpen:n,items:d,onClose:this.handleExportModalClose,reportPathsType:Ie,reportQueryString:a})},this.getPagination=(e=!1,t=!1)=>{const{intl:s,query:o,report:n,router:l}=this.props,r=n&&n.meta?n.meta.count:0,c=n&&n.meta&&n.meta.filter&&n.meta.filter.limit?n.meta.filter.limit:we.filter.limit,d=n&&n.meta&&n.meta.filter&&n.meta.filter.offset?n.meta.filter.offset:we.filter.offset,u=Math.trunc(d/c+1);return p().createElement(a.Pagination,{isCompact:!t,isDisabled:e,itemCount:r,onPerPageSelect:(e,t)=>(0,E.xh)(o,l,t),onSetPage:(e,t)=>(0,E.$9)(o,l,n,t),page:u,perPage:c,titles:{paginationTitle:s.formatMessage(i.Z.paginationTitle,{title:s.formatMessage(i.Z.openShift),placement:t?"bottom":"top"})},variant:t?a.PaginationVariant.bottom:a.PaginationVariant.top,widgetId:"exports-pagination"+(t?"-bottom":"")})},this.getTable=()=>{const{costDistribution:e,isRosFeatureEnabled:t,query:s,report:a,reportFetchStatus:o,reportQueryString:n,router:l}=this.props,{hiddenColumns:r,isAllSelected:i,selectedItems:c}=this.state,d=T(s.group_by),u=(0,C.qV)(s);return p().createElement(ge,{costDistribution:e,groupBy:u?`${B.P}${u}`:d,groupByTagKey:u,hiddenColumns:r,isAllSelected:i,isLoading:o===x.iF.inProgress,isRosFeatureEnabled:t,onSelected:this.handleSelected,onSort:(e,t)=>(0,E.yB)(s,l,e,t),report:a,reportQueryString:n,selectedItems:c})},this.getToolbar=e=>{const{query:t,report:s,router:a}=this.props,{isAllSelected:o,selectedItems:n}=this.state,l=T(t.group_by),r=(0,C.qV)(t),i=0===e.length,c=s&&s.meta?s.meta.count:0;return p().createElement(De,{groupBy:r?`${B.P}${r}`:l,isAllSelected:o,isDisabled:i,isExportDisabled:i||!o&&0===n.length,itemsPerPage:e.length,itemsTotal:c,onBulkSelected:this.handleBulkSelected,onColumnManagementClicked:this.handleColumnManagementModalOpen,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,E.$3)(t,a,e),onFilterRemoved:e=>(0,E.q7)(t,a,e),onPlatformCostsChanged:this.handlePlatformCostsChanged,pagination:this.getPagination(i),query:t,selectedItems:n})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleColumnManagementModalClose=e=>{this.setState({isColumnManagementModalOpen:e})},this.handleColumnManagementModalOpen=()=>{this.setState({isColumnManagementModalOpen:!0})},this.handleColumnManagementModalSave=e=>{this.setState({hiddenColumns:e})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{query:t,router:s}=this.props,a=e,o=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{group_by:{[a]:"*"},order_by:{cost:"desc"},category:void 0,delta:void 0});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{s.navigate((0,O.Z)(o,s.location,!0),{replace:!0})}))},this.handlePlatformCostsChanged=e=>{const{query:t,router:s}=this.props,a=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{category:e?B.rx:void 0});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{s.navigate((0,O.Z)(a,s.location,!0),{replace:!0})}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:s,selectedItems:a}=this.state;let o=[...s?this.getComputedItems():a];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.updateReport=()=>{const{fetchReport:e,reportQueryString:t}=this.props;e(Ie,Re,t)},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleColumnManagementModalClose=this.handleColumnManagementModalClose.bind(this),this.handleColumnManagementModalOpen=this.handleColumnManagementModalOpen.bind(this),this.handleColumnManagementModalSave=this.handleColumnManagementModalSave.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handlePlatformCostsChanged=this.handlePlatformCostsChanged.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{report:s,reportError:a,reportQueryString:o,router:n}=this.props,{selectedItems:l}=this.state,r=e.reportQueryString!==o,i=!s&&!a,c=!n.location.search,d=t.selectedItems!==l;(r||i||c||d)&&this.updateReport()}render(){const{costDistribution:e,currency:t,intl:s,providers:a,providersFetchStatus:n,query:l,report:r,reportError:c,reportFetchStatus:d,router:u}=this.props,m=this.getComputedItems(),v=T(l.group_by),b=0===m.length,S=s.formatMessage(i.Z.ocpDetailsTitle);if(c)return p().createElement(f.W,{title:S});if(n===x.iF.inProgress)return p().createElement(h.g,{title:S});if(n===x.iF.complete){if(a&&a.meta&&0===a.meta.count)return p().createElement(y.L,{providerType:o.l.ocp,title:S});if(!(0,M.g8)(a))return p().createElement(g.J,{title:S})}return p().createElement("div",{style:ke.ocpDetails},p().createElement(X,{costDistribution:e,currency:t,groupBy:v,onCostDistributionSelected:e=>(0,E.cZ)(l,u,e),onCurrencySelected:e=>(0,E._s)(l,u,e),onGroupBySelected:this.handleGroupBySelected,report:r}),p().createElement("div",{style:ke.content},p().createElement("div",{style:ke.toolbarContainer},this.getToolbar(m)),this.getExportModal(m),this.getColumnManagementModal(),d===x.iF.inProgress?p().createElement(h.g,null):p().createElement(p().Fragment,null,p().createElement("div",{style:ke.tableContainer},this.getTable()),p().createElement("div",{style:ke.paginationContainer},p().createElement("div",{style:ke.pagination},this.getPagination(b,!0))))))}}const Fe=(0,x.X1)(((e,{router:t})=>{const s=(0,n.mB)(t.location.search),a=s.group_by?(0,C.VL)(s):(0,C.VL)(we),r=D.iJ.selectIsCostDistributionFeatureEnabled(e),i="project"===a&&r?(0,w.vn)():void 0,c=(0,w.zC)(),d=Object.assign(Object.assign(Object.assign({},we),i===v.Qf.distributed&&{order_by:{distributed_cost:"desc"}}),s),p={category:d.category,currency:c,delta:i===v.Qf.distributed?"distributed_cost":"cost",exclude:d.exclude,filter:Object.assign(Object.assign({},d.filter),{resolution:"monthly",time_scope_units:"month",time_scope_value:-1}),filter_by:d.filter_by,group_by:d.group_by,order_by:d.order_by},u=(0,n.pm)(p),m=P.ZV.selectReport(e,Ie,Re,u),h=P.ZV.selectReportError(e,Ie,Re,u),g=P.ZV.selectReportFetchStatus(e,Ie,Re,u),y=(0,l.H)(Z.NT),f=Z.aX.selectProviders(e,o.l.all,y),b=Z.aX.selectProvidersFetchStatus(e,o.l.all,y);return{costDistribution:i,currency:c,isRosFeatureEnabled:D.iJ.selectIsRosFeatureEnabled(e),providers:(0,M.BV)(f,o.l.ocp),providersFetchStatus:b,query:d,report:m,reportError:h,reportFetchStatus:g,reportQueryString:u}})),Le={fetchReport:P.nx.fetchReport},je=(0,u.ZP)((0,R.E)((0,m.connect)(Fe,Le)(_e)))},80794:(e,t,s)=>{e.exports=s.p+"fonts/Red_Hat-IT_Optimization-Gray.svg"}}]);
//# sourceMappingURL=../sourcemaps/ocpDetails.91a208b9006c6d039fa2e9bcad31fadd.js.map