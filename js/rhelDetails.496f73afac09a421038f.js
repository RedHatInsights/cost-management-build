"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[7990],{15265:(e,t,a)=>{a.d(t,{LA:()=>l,ZP:()=>o,mq:()=>s});var n=a(40400);const s={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},l=(0,n.IU)(s),o=l},17918:(e,t)=>{t.VH={name:"--pf-global--FontSize--md",value:"1rem",var:"var(--pf-global--FontSize--md)"},t.ZP=t.VH},43789:(e,t)=>{t.Q8={name:"--pf-global--spacer--xs",value:"0.25rem",var:"var(--pf-global--spacer--xs)"},t.ZP=t.Q8},84717:(e,t,a)=>{a.d(t,{H:()=>s});var n=a(80129);function s(e){return(0,n.stringify)(e,{encode:!1,indices:!1})}},6450:(e,t,a)=>{a.d(t,{F:()=>y,m:()=>p});var n=a(90154),s=a(97027),l=a(92950),o=a.n(l),r=a(74806),i=a(77760),c=a(1156),d=a(15829);const m={currencySelector:{display:"flex",alignItems:"center"},currencyLabel:{marginBottom:0,marginRight:a(32412).ZP.var,whiteSpace:"nowrap"}},p=[{label:s.Z.currencyOptions,value:"AUD"},{label:s.Z.currencyOptions,value:"CAD"},{label:s.Z.currencyOptions,value:"CHF"},{label:s.Z.currencyOptions,value:"CNY"},{label:s.Z.currencyOptions,value:"DKK"},{label:s.Z.currencyOptions,value:"EUR"},{label:s.Z.currencyOptions,value:"GBP"},{label:s.Z.currencyOptions,value:"HKD"},{label:s.Z.currencyOptions,value:"JPY"},{label:s.Z.currencyOptions,value:"NOK"},{label:s.Z.currencyOptions,value:"NZD"},{label:s.Z.currencyOptions,value:"SEK"},{label:s.Z.currencyOptions,value:"SGD"},{label:s.Z.currencyOptions,value:"USD"},{label:s.Z.currencyOptions,value:"ZAR"}];class u extends o().Component{constructor(){super(...arguments),this.defaultState={isSelectOpen:!1},this.state=Object.assign({},this.defaultState),this.getSelect=()=>{const{currency:e,isDisabled:t}=this.props,{isSelectOpen:a}=this.state,s=this.getSelectOptions(),l=s.find((t=>t.value===e));return o().createElement(n.Select,{className:"currencyOverride",id:"currencySelect",isDisabled:t,isOpen:a,onSelect:this.handleSelect,onToggle:this.handleToggle,selections:l,variant:n.SelectVariant.single},s.map((e=>o().createElement(n.SelectOption,{key:e.value,value:e}))))},this.getSelectOptions=()=>{const{intl:e}=this.props,t=[];return p.map((a=>{t.push({toString:()=>e.formatMessage(a.label,{units:a.value}),value:a.value})})),t},this.handleSelect=(e,t)=>{const{onSelect:a}=this.props;(0,d.NW)(t.value),this.setState({isSelectOpen:!1},(()=>{a&&a(t.value)}))},this.handleToggle=e=>{this.setState({isSelectOpen:e})}}render(){const{intl:e}=this.props;return(0,d.eu)(),o().createElement("div",{style:m.currencySelector},o().createElement(n.Title,{headingLevel:"h2",size:"md",style:m.currencyLabel},e.formatMessage(s.Z.currency)),this.getSelect())}}const h=(0,c.X1)((()=>({}))),g=(0,i.connect)(h,{})(u),y=(0,r.ZP)(g)},55672:(e,t,a)=>{a.d(t,{J:()=>n.Z});var n=a(83819)},83819:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(90154),s=a(89376),l=a(39173),o=a(92950),r=a.n(o),i=a(7081),c=a(97027),d=a(74806);class m extends r().Component{render(){const{intl:e,showReload:t=!0}=this.props;return r().createElement(n.EmptyState,{variant:n.EmptyStateVariant.large,className:"pf-m-redhat-font"},r().createElement(n.EmptyStateIcon,{icon:i.wl}),r().createElement(n.Title,{headingLevel:"h5",size:"lg"},e.formatMessage(c.Z.noDataStateTitle)),r().createElement(n.EmptyStateBody,null,e.formatMessage(c.Z.noDataStateDesc)),t&&r().createElement(n.Button,{variant:"primary",onClick:()=>window.location.reload()},e.formatMessage(c.Z.noDataStateRefresh)))}}const p=(0,d.ZP)(m),u=({showReload:e,title:t})=>r().createElement(r().Fragment,null,t&&r().createElement(s.Z,null,r().createElement(l.Z,{title:t})),r().createElement(n.PageSection,null,r().createElement(p,{showReload:e})))},72483:(e,t,a)=>{a.d(t,{Y:()=>m});var n=a(90154),s=a(97027),l=a(92950),o=a.n(l),r=a(74806);const i=a(80794),c=(0,r.ZP)((({className:e,intl:t})=>o().createElement("img",{className:`optimization-icon ${e}`,src:i,alt:t.formatMessage(s.Z.optimizations),"aria-hidden":"true"})));class d extends o().Component{render(){const{intl:e}=this.props;return o().createElement(n.EmptyState,{variant:n.EmptyStateVariant.large,className:"pf-m-redhat-font"},o().createElement(n.EmptyStateIcon,{icon:c}),o().createElement(n.Title,{headingLevel:"h1",size:"lg"},e.formatMessage(s.Z.noOptimizationsTitle)),o().createElement(n.EmptyStateBody,null,e.formatMessage(s.Z.noOptimizationsDesc)))}}const m=(0,r.ZP)(d)},2985:(e,t,a)=>{a.d(t,{L:()=>E});var n=a(90154),s=a(89376),l=a(39173),o=a(92950),r=a.n(o),i=a(15265),c=a(7081),d=a(1326),m=a(97027),p=a(74806);const u=a(84735),h=(0,p.ZP)((({className:e,intl:t})=>r().createElement("img",{className:`cost-icon ${e}`,src:u,alt:t.formatMessage(m.Z.costManagement),"aria-hidden":"true"})));var g=a(68025),y=a(98499);const v={iconSpacer:{marginLeft:a(43789).ZP.value},viewSources:{marginTop:y.ZP.value}};class f extends r().Component{constructor(){super(...arguments),this.getDocLink=(e,t)=>{const{intl:a}=this.props;return r().createElement("a",{href:a.formatMessage(t),rel:"noreferrer",target:"_blank"},a.formatMessage(e),r().createElement("span",{style:v.iconSpacer},r().createElement(i.LA,null)))},this.getRouteToSources=()=>`${(0,g.IG)()}/settings/sources`}render(){const{intl:e,providerType:t}=this.props;let a,s,l,o=m.Z.noProvidersStateOverviewDesc,i=m.Z.noProvidersStateOverviewTitle;switch(t){case d.l.aws:o=m.Z.noProvidersStateAwsDesc,i=m.Z.noProvidersStateAwsTitle;break;case d.l.azure:o=m.Z.noProvidersStateAzureDesc,i=m.Z.noProvidersStateAzureTitle;break;case d.l.gcp:o=m.Z.noProvidersStateGcpDesc,i=m.Z.noProvidersStateGcpTitle;break;case d.l.ibm:o=m.Z.noProvidersStateIbmDesc,i=m.Z.noProvidersStateIbmTitle;break;case d.l.ocp:o=m.Z.noProvidersStateOcpDesc,a=m.Z.docsAddOcpSources,l=m.Z.noProvidersStateOcpAddSources,i=m.Z.noProvidersStateOcpTitle;break;default:s=h}return r().createElement(n.EmptyState,{variant:n.EmptyStateVariant.large,className:"pf-m-redhat-font"},r().createElement(n.EmptyStateIcon,{icon:s||c.wl}),r().createElement(n.Title,{headingLevel:"h1",size:"lg"},e.formatMessage(i)),r().createElement(n.EmptyStateBody,null,e.formatMessage(o)),a&&l?r().createElement("div",{style:v.viewSources},this.getDocLink(l,a)):r().createElement(n.Button,{variant:"primary",component:"a",href:this.getRouteToSources()},e.formatMessage(m.Z.noProvidersStateGetStarted)))}}const S=(0,p.ZP)(f),E=({providerType:e,title:t})=>r().createElement(r().Fragment,null,t&&r().createElement(s.Z,null,r().createElement(l.Z,{title:t})),r().createElement(n.PageSection,null,r().createElement(S,{providerType:e})))},47947:(e,t,a)=>{a.d(t,{W:()=>c});var n=a(90154),s=a(89376),l=a(39173),o=a(15984),r=a(92950),i=a.n(r);const c=({title:e})=>i().createElement(i().Fragment,null,e&&i().createElement(s.Z,null,i().createElement(l.Z,{title:e})),i().createElement(n.PageSection,null,i().createElement(o.Z,null)))},62423:(e,t,a)=>{a.d(t,{e:()=>f});var n=a(90154),s=a(97027),l=a(92950),o=a.n(l),r=a(74806),i=a(77760),c=a(40493),d=a(1156),m=a(58613),p=a(14483),u=a(5842);class h extends o().Component{constructor(e,t){super(e,t),this.defaultState={isDropdownOpen:!1,isExportModalOpen:!1},this.state=Object.assign({},this.defaultState),this.getExportModal=()=>{const{groupBy:e,item:t,reportPathsType:a,reportQueryString:n}=this.props,{isExportModalOpen:s}=this.state;return o().createElement(c.X,{count:1,groupBy:e,isOpen:s,items:[t],onClose:this.handleExportModalClose,reportPathsType:a,reportQueryString:n})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleOnSelect=()=>{const{isDropdownOpen:e}=this.state;this.setState({isDropdownOpen:!e})},this.handleOnToggle=e=>{this.setState({isDropdownOpen:e})},this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleOnToggle=this.handleOnToggle.bind(this),this.handleOnSelect=this.handleOnSelect.bind(this)}render(){const{groupBy:e,isDisabled:t,showPriceListOption:a,intl:l,item:{source_uuid:r},redirectToCostModel:i,router:c}=this.props,d=[o().createElement(n.DropdownItem,{component:"button",isDisabled:t,key:"export-action",onClick:this.handleExportModalOpen},l.formatMessage(s.Z.detailsActionsExport))];return a&&d.unshift(o().createElement(n.DropdownItem,{component:"button",key:"price-list-action",isDisabled:t||e.includes(p.P)||0===r.length,onClick:()=>i(r[0],c)},l.formatMessage(s.Z.detailsActionsPriceList))),o().createElement(o().Fragment,null,o().createElement(n.Dropdown,{onSelect:this.handleOnSelect,toggle:o().createElement(n.KebabToggle,{onToggle:this.handleOnToggle}),isOpen:this.state.isDropdownOpen,isPlain:!0,position:"right",dropdownItems:d}),this.getExportModal())}}const g=(0,d.X1)(((e,t)=>({}))),y={redirectToCostModel:m.F0.redirectToCostModelFromSourceUuid},v=(0,i.connect)(g,y)(h),f=(0,r.ZP)((0,u.E)(v))},44348:(e,t,a)=>{a.d(t,{$:()=>h,Y:()=>d});var n=a(90154),s=a(97027),l=a(92950),o=a.n(l),r=a(74806),i=a(77760),c=a(1156);const d=e=>{const t=new Set;return e.map((e=>{e.hidden&&t.add(e.value)})),t};class m extends o().Component{constructor(e,t){super(e,t),this.defaultState={hiddenColumns:d(this.props.options)},this.state=Object.assign({},this.defaultState),this.getHidden=e=>{const{hiddenColumns:t}=this.state,a=new Set(t);return a.delete(e)||a.add(e),a},this.isHidden=e=>{const{hiddenColumns:t}=this.state;return t.has(e)},this.handleChange=(e,t)=>{const a=this.getHidden(t.target.id);this.setState({hiddenColumns:a})},this.handleClose=()=>{this.setState(Object.assign({},this.defaultState),(()=>{this.props.onClose(!1)}))},this.handleSave=()=>{const{hiddenColumns:e}=this.state;this.props.onSave(e),this.handleClose()},this.selectAll=()=>{this.setState({hiddenColumns:new Set})}}componentDidUpdate(e){const{options:t}=this.props;if(e.options!==t){const e=d(t);this.setState({hiddenColumns:e})}}render(){const{options:e,intl:t}=this.props;return o().createElement(n.Modal,{description:o().createElement(n.TextContent,null,o().createElement(n.Text,{component:n.TextVariants.p},t.formatMessage(s.Z.manageColumnsDesc)),o().createElement(n.Button,{isInline:!0,onClick:this.selectAll,variant:"link"},t.formatMessage(s.Z.selectAll))),isOpen:this.props.isOpen,onClose:this.handleClose,title:t.formatMessage(s.Z.manageColumnsTitle),variant:n.ModalVariant.medium,actions:[o().createElement(n.Button,{key:"save",onClick:this.handleSave,variant:n.ButtonVariant.link},t.formatMessage(s.Z.save)),o().createElement(n.Button,{key:"cancel",onClick:this.handleClose,variant:n.ButtonVariant.link},t.formatMessage(s.Z.cancel))]},o().createElement(n.DataList,{"aria-label":t.formatMessage(s.Z.manageColumnsAriaLabel),id:"table-column-management",isCompact:!0},e.map((e=>o().createElement(n.DataListItem,{"aria-labelledby":e.value,key:e.value},o().createElement(n.DataListItemRow,null,o().createElement(n.DataListCheck,{"aria-labelledby":`${e.value}Label`,isChecked:!this.isHidden(e.value),name:e.value,id:e.value,onChange:this.handleChange}),o().createElement(n.DataListItemCells,{dataListCells:[o().createElement(n.DataListCell,{id:`${e.value}Label`,key:"table-column-management-item1"},o().createElement("span",null,t.formatMessage(e.label))),o().createElement(n.DataListCell,{key:"table-column-management-item2"},e.description&&o().createElement("span",null,t.formatMessage(e.description)))]})))))))}}const p=(0,c.X1)((()=>({}))),u=(0,i.connect)(p,{})(m),h=(0,r.ZP)(u)},90302:(e,t,a)=>{a.d(t,{W:()=>i});var n=a(49382),s=a(12289),l=a(40794),o=a(11331),r=a(43789);const i={costColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end",paddingRight:0},defaultLabel:{minWidth:"63px"},emptyState:{backgroundColor:n.ZP.value,display:"flex",justifyContent:"center",paddingTop:o.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:r.ZP.value},infoDescription:{color:s.ZP.value,fontSize:l.ZP.value},lastReported:{textAlign:"right",paddingRight:"40px"},lastReportedColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end"},managedColumn:{textAlign:"right"},nameColumn:{width:"1%"}}},90569:(e,t,a)=>{a.d(t,{w:()=>y});var n=a(90154),s=a(52636),l=a(40227),o=a(79112),r=a(97027),i=a(92950),c=a.n(i),d=a(74806),m=a(42901),p=a(72483),u=a(5842),h=a(90302);class g extends c().Component{constructor(e){super(e),this.getEmptyState=()=>{const{intl:e,isOptimizations:t,router:a}=this.props,l=(0,o.mB)(a.location.search);if(l.filter_by)for(const e of Object.values(l.filter_by))if("*"!==e)return c().createElement(m.c,{filter:e,showMargin:!1});return t?c().createElement(p.Y,null):c().createElement(n.EmptyState,null,c().createElement(n.EmptyStateIcon,{icon:s.Xk}),c().createElement(n.EmptyStateBody,null,e.formatMessage(r.Z.detailsEmptyState)))},this.getSortBy=e=>{const{columns:t,router:a}=this.props,n=t[e].orderBy,s=(0,o.mB)(a.location.search),l=s&&s.order_by&&s.order_by[n];return l?{index:e,direction:l}:{}},this.getSortParams=e=>({sortBy:this.getSortBy(e),onSort:this.handleOnSort,columnIndex:e}),this.handleOnSelect=(e,t,a)=>{const{onSelected:n,rows:s}=this.props;let l,o=[];-1===a?l=s.map((e=>(e.selected=t,e))):(l=[...s],l[a].selected=t,o=[l[a].item]),this.setState({rows:s},(()=>{n&&n(o,t)}))},this.handleOnSort=(e,t,a)=>{const{columns:n,onSort:s}=this.props;s&&s(n[t].orderBy,a===l.SortByDirection.asc)},this.handleOnRowClick=(e,t)=>{const{onRowClick:a,rows:n}=this.props;n.map((e=>e.selected=!1)),n[t].selected=!0,this.setState({rows:n},(()=>{a&&a(e,t)}))},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}render(){const{columns:e,intl:t,isLoading:a,isOptimizations:s,rows:o}=this.props;return c().createElement(c().Fragment,null,c().createElement(l.TableComposable,{"aria-label":t.formatMessage(r.Z.dataTableAriaLabel),className:"tableOverride",gridBreakPoint:"grid-2xl",hasSelectableRowCaption:s},c().createElement(l.Thead,null,c().createElement(l.Tr,null,e.map(((e,t)=>c().createElement(l.Th,{key:`col-${t}-${e.value}`,modifier:"nowrap",sort:e.isSortable?this.getSortParams(t):void 0,style:e.style},e.name))))),c().createElement(l.Tbody,null,a?c().createElement(l.Tr,null,c().createElement(l.Td,{colSpan:100},c().createElement(n.Bullseye,null,c().createElement("div",{style:{textAlign:"center"}},c().createElement(n.Spinner,{size:"xl"}))))):o.map(((t,a)=>c().createElement(l.Tr,{isSelectable:s,isHoverable:s,isRowSelected:s&&t.selected,onRowClick:s?e=>this.handleOnRowClick(e,a):void 0,key:`row-${a}`},t.cells.map(((n,o)=>0!==o||s?c().createElement(l.Td,{dataLabel:e[o].name,key:`cell-${a}-${o}`,modifier:"nowrap",isActionCell:!s&&o===t.cells.length-1,style:n.style},n.value):c().createElement(l.Td,{dataLabel:e[o].name,key:`cell-${o}-${a}`,modifier:"nowrap",select:{disable:t.selectionDisabled,isSelected:t.selected,onSelect:(e,t)=>this.handleOnSelect(e,t,a),rowIndex:a},style:n.style})))))))),0===o.length&&c().createElement("div",{style:h.W.emptyState},this.getEmptyState()))}}const y=(0,d.ZP)((0,u.E)(g))},23806:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Be});var n=a(90154),s=a(1326),l=a(84717),o=a(75660),r=a(6456),i=a(97027),c=a(44439),d=a(92950),m=a.n(d),p=a(74806),u=a(77760),h=a(52471),g=a(55672),y=a(2985),v=a(47947),f=a(40493),S=a(44348),E=a(37269),b=a(19727),C=a(86482),O=a(10066),M=a(1156),Z=a(62331),x=a(15920),P=a(69511);function D(e={}){return e.project?"project":e.cluster?"cluster":e.node?"node":"date"}var T=a(15829),k=a(14483),w=a(5842),B=a(50081),_=a(26744),I=a(6450),j=a(98485),L=a(36465),A=a(78898),F=a(45087),R=a(91778),$=a(49382),N=a(33605),V=a(17918),W=a(54881),z=a(98499),q=a(48196);const X={costValue:{marginTop:z.ZP.var,marginBottom:0},costLabelUnit:{fontSize:W.ZP.value,color:N.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:$.ZP.var,padding:z.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},info:{verticalAlign:"middle"},infoIcon:{fontSize:V.ZP.value},infoTitle:{fontWeight:"bold"},title:{paddingBottom:q.ZP.var}},J=[{label:"cluster",value:"cluster"},{label:"node",value:"node"},{label:"project",value:"project"}],H=B.L.rhel;class G extends m().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState)}render(){const{currency:e,groupBy:t,isExportsFeatureEnabled:a,onCurrencySelected:s,onGroupBySelected:l,providers:o,providersError:r,report:c,intl:d}=this.props,p=c&&!r&&o&&o.meta&&o.meta.count>0;let u=m().createElement(j.L,null),h=m().createElement(j.L,null),g=m().createElement(j.L,null);if(c&&c.meta&&c.meta.total){const e=c.meta.total.cost&&c.meta.total.cost.total,t=c.meta.total.supplementary&&c.meta.total.supplementary.total,a=c.meta.total.infrastructure&&c.meta.total.infrastructure.total;u=(0,R.xG)(e?c.meta.total.cost.total.value:0,e?c.meta.total.cost.total.units:"USD"),h=(0,R.xG)(t?c.meta.total.supplementary.total.value:0,t?c.meta.total.supplementary.total.units:"USD"),g=(0,R.xG)(a?c.meta.total.infrastructure.total.value:0,a?c.meta.total.infrastructure.total.units:"USD")}return m().createElement("header",{style:X.header},m().createElement("div",{style:X.headerContent},m().createElement(n.Title,{headingLevel:"h1",style:X.title,size:n.TitleSizes["2xl"]},d.formatMessage(i.Z.rhelDetailsTitle)),m().createElement("div",{style:X.headerContentRight},m().createElement(I.F,{currency:e,onSelect:s}),a&&m().createElement(_.bj,null))),m().createElement("div",{style:X.headerContent},m().createElement("div",{style:X.headerContentLeft},m().createElement(L.X,{getIdKeyForGroupBy:D,groupBy:t,isDisabled:!p,onSelected:l,options:J,showTags:!0,tagPathsType:H})),p&&m().createElement("div",null,m().createElement(n.Tooltip,{content:d.formatMessage(i.Z.dashboardTotalCostTooltip,{infrastructureCost:g,supplementaryCost:h}),enableFlip:!0},m().createElement(n.Title,{headingLevel:"h2",style:X.costValue,size:n.TitleSizes["4xl"]},u)),m().createElement("div",{style:X.dateTitle},(0,F.J4)()))))}}const Q=(0,M.X1)(((e,t)=>{const a=(0,l.H)(Z.NT),n=Z.aX.selectProviders(e,s.l.all,a),o=Z.aX.selectProvidersError(e,s.l.all,a),r=Z.aX.selectProvidersFetchStatus(e,s.l.all,a);return{isExportsFeatureEnabled:A.iJ.selectIsExportsFeatureEnabled(e),providers:(0,C.BV)(n,s.l.rhel),providersError:o,providersFetchStatus:r,providersQueryString:a}})),K=(0,p.ZP)((0,u.connect)(Q,{})(G));var U=a(39836),Y=a(91919),ee=a(62423),te=a(90569),ae=a(90302),ne=a(54583),se=a(68025);const le="infrastructure",oe="monthOverMonth",re="supplementary",ie=r.K.rhel;class ce extends m().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{groupBy:e,groupByTagKey:t,hiddenColumns:a,intl:s,isAllSelected:l,report:o,router:r,selectedItems:c}=this.props;if(!o)return;const d="project"===e,p=[],u=(0,P.c)({report:o,idKey:t||e}),h=t?[{name:""},{name:s.formatMessage(i.Z.tagNames),style:"project"===e?ae.W.nameColumn:void 0},{hidden:!d,name:""},{name:s.formatMessage(i.Z.monthOverMonthChange)},{id:le,name:s.formatMessage(i.Z.rhelDetailsInfrastructureCost),style:ae.W.managedColumn},{id:re,name:s.formatMessage(i.Z.rhelDetailsSupplementaryCost),style:ae.W.managedColumn},Object.assign({orderBy:"cost",name:s.formatMessage(i.Z.cost),style:ae.W.costColumn},u.length&&{isSortable:!0}),{name:""}]:[{name:""},Object.assign(Object.assign({orderBy:e,name:s.formatMessage(i.Z.detailsResourceNames,{value:e})},u.length&&{isSortable:!0}),{style:"project"===e?ae.W.nameColumn:void 0}),{hidden:!d,name:""},{id:oe,name:s.formatMessage(i.Z.monthOverMonthChange)},{id:le,orderBy:"infrastructure_cost",name:s.formatMessage(i.Z.rhelDetailsInfrastructureCost),style:ae.W.managedColumn},{id:re,orderBy:"supplementary_cost",name:s.formatMessage(i.Z.rhelDetailsSupplementaryCost),style:ae.W.managedColumn},Object.assign({orderBy:"cost",name:s.formatMessage(i.Z.cost),style:ae.W.costColumn},u.length&&{isSortable:!0}),{name:""}];u.map(((a,o)=>{const u=this.getTotalCost(a,o),h=a&&null!==a.label?a.label:"",g=this.getMonthOverMonthCost(a,o),y=this.getSupplementaryCost(a,o),v=this.getInfrastructureCost(a,o),f=a.id&&a.id!==a.label?m().createElement("div",{style:ae.W.infoDescription},a.id):null,S=h===`${k.Xq}${e}`||h===`${k.Xq}${t}`,E=this.getActions(a,S),b=S?h:m().createElement(U.Link,{to:(0,ne.T)({basePath:(0,se.dI)(Y._.rhelDetailsBreakdown.path),description:a.id,groupBy:e,id:a.id,router:r,title:h.toString()})},h);p.push({cells:[{},{value:m().createElement(m().Fragment,null,m().createElement("div",null,b),m().createElement("div",{style:ae.W.infoDescription},f))},{hidden:!d,value:a.default_project?m().createElement("div",null,m().createElement(n.Label,{variant:"outline",color:"green"},s.formatMessage(i.Z.default))):m().createElement("div",{style:ae.W.defaultLabel})},{value:m().createElement("div",null,g),id:oe},{value:m().createElement("div",null,v),id:le,style:ae.W.managedColumn},{value:m().createElement("div",null,y),id:re,style:ae.W.managedColumn},{value:m().createElement("div",null,u),style:ae.W.managedColumn},{value:m().createElement("div",null,E)}],item:a,selected:l||c&&void 0!==c.find((e=>e.id===a.id)),selectionDisabled:S})}));const g=h.filter((e=>!a.has(e.id)&&!e.hidden)),y=p.map((e=>{var t=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(a[n[s]]=e[n[s]])}return a}(e,[]);return t.cells=t.cells.filter((e=>!a.has(e.id)&&!e.hidden)),t}));this.setState({columns:g,rows:y})},this.getActions=(e,t)=>{const{groupBy:a,reportQueryString:n}=this.props;return m().createElement(ee.e,{groupBy:a,isDisabled:t,item:e,providerType:s.l.rhel,reportPathsType:ie,reportQueryString:n,showPriceListOption:"cluster"===a})},this.getSupplementaryCost=(e,t)=>{const{report:a,intl:n}=this.props,s=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total?a.meta.total.cost.total.value:0,l=0===s?s.toFixed(2):(e.supplementary.total.value/s*100).toFixed(2);return m().createElement(m().Fragment,null,(0,R.xG)(e.supplementary.total.value,e.supplementary.total.units),m().createElement("div",{style:ae.W.infoDescription,key:`total-cost-${t}`},n.formatMessage(i.Z.percentOfCost,{value:l})))},this.getInfrastructureCost=(e,t)=>{const{report:a,intl:n}=this.props,s=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total?a.meta.total.cost.total.value:0,l=0===s?s.toFixed(2):(e.infrastructure.total.value/s*100).toFixed(2);return m().createElement(m().Fragment,null,(0,R.xG)(e.infrastructure.total.value,e.infrastructure.total.units),m().createElement("div",{style:ae.W.infoDescription,key:`total-cost-${t}`},n.formatMessage(i.Z.percentOfCost,{value:l})))},this.getMonthOverMonthCost=(e,t)=>{const{intl:a}=this.props,n=(0,R.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),s=null!==e.delta_percent?(0,R.rl)(Math.abs(e.delta_percent)):0,l=!(0===s||"0.00"===s),o=null!==e.delta_percent;let r;return l&&(r="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(r+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(r+=" increase")),o?m().createElement("div",{className:"monthOverMonthOverride"},m().createElement("div",{className:r,key:`month-over-month-cost-${t}`},l?a.formatMessage(i.Z.percent,{value:s}):m().createElement(j.L,null),l&&null!==e.delta_percent&&e.delta_value>0&&m().createElement("span",{className:"fa fa-sort-up",style:ae.W.infoArrow,key:`month-over-month-icon-${t}`}),l&&null!==e.delta_percent&&e.delta_value<0&&m().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},ae.W.ininfoArrow),ae.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),m().createElement("div",{style:ae.W.infoDescription,key:`month-over-month-info-${t}`},(0,F.Y)(n))):(0,F.Tf)()},this.getTotalCost=(e,t)=>{const{report:a,intl:n}=this.props,s=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total?a.meta.total.cost.total.value:0,l=0===s?s.toFixed(2):(e.cost.total.value/s*100).toFixed(2);return m().createElement(m().Fragment,null,(0,R.xG)(e.cost.total.value,e.cost.total.units),m().createElement("div",{style:ae.W.infoDescription,key:`total-cost-${t}`},n.formatMessage(i.Z.percentOfCost,{value:l})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{hiddenColumns:t,report:a,selectedItems:n}=this.props,s=a&&a.data?JSON.stringify(a.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")===s&&e.selectedItems===n&&e.hiddenColumns===t||this.initDatum()}render(){const{isLoading:e,onSelected:t,onSort:a,selectedItems:n}=this.props,{columns:s,rows:l}=this.state;return m().createElement(te.w,{columns:s,isLoading:e,onSelected:t,onSort:a,rows:l,selectedItems:n})}}const de=(0,p.ZP)((0,w.E)(ce));var me=a(79112),pe=a(36116),ue=a(7893),he=a(48949),ge=a(94282);const ye=B.Q.tag,ve=B.L.ocp;class fe extends m().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,a=[{name:e.formatMessage(i.Z.filterByValues,{value:"cluster"}),key:"cluster"},{name:e.formatMessage(i.Z.filterByValues,{value:"node"}),key:"node"},{name:e.formatMessage(i.Z.filterByValues,{value:"project"}),key:"project"}];return t&&t.data&&t.data.length&&a.push({name:e.formatMessage(i.Z.filterByValues,{value:k.up}),key:k.up}),a},this.updateReport=()=>{const{fetchTag:e,tagQueryString:t}=this.props;e(ve,ye,t)}}componentDidMount(){this.setState({categoryOptions:this.getCategoryOptions()},(()=>{this.updateReport()}))}componentDidUpdate(e){const{query:t,tagReport:a}=this.props;(0,ge.X)(a,e.tagReport)?t&&!(0,ge.X)(t,e.query)&&this.updateReport():this.setState({categoryOptions:this.getCategoryOptions()},(()=>{this.updateReport()}))}render(){const{groupBy:e,isAllSelected:t,isDisabled:a,isExportDisabled:n,itemsPerPage:s,itemsTotal:l,onBulkSelected:o,onColumnManagementClicked:r,onExportClicked:i,onFilterAdded:c,onFilterRemoved:d,pagination:p,query:u,selectedItems:h,tagReport:g}=this.props,{categoryOptions:y}=this.state;return m().createElement(ue.k,{categoryOptions:y,groupBy:e,isAllSelected:t,isDisabled:a,isExportDisabled:n,itemsPerPage:s,itemsTotal:l,onBulkSelected:o,onColumnManagementClicked:r,onExportClicked:i,onFilterAdded:c,onFilterRemoved:d,pagination:p,query:u,resourcePathsType:pe.C.ocp,selectedItems:h,showBulkSelect:!0,showColumnManagement:!0,showExcludes:!0,showExport:!0,showFilter:!0,tagReport:g,tagPathsType:ve})}}const Se=(0,M.X1)(((e,t)=>{const a=(0,me.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3});return{tagReport:he.ux.selectTag(e,ve,ye,a),tagReportFetchStatus:he.ux.selectTagFetchStatus(e,ve,ye,a),tagQueryString:a}})),Ee={fetchTag:he.xr.Xt},be=(0,u.connect)(Se,Ee)(fe),Ce=(0,p.ZP)(be);var Oe=a(32412);const Me={content:{paddingBottom:z.ZP.value,paddingTop:z.ZP.value},ocpDetails:{minHeight:"100%"},paginationContainer:{marginLeft:z.ZP.value,marginRight:z.ZP.value},pagination:{backgroundColor:$.ZP.value,paddingBottom:Oe.ZP.value,paddingTop:Oe.ZP.value},tableContainer:{marginLeft:z.ZP.value,marginRight:z.ZP.value},toolbarContainer:{marginLeft:z.ZP.value,marginRight:z.ZP.value}},Ze={filter:{limit:10,offset:0},exclude:{},filter_by:{},group_by:{project:"*"},order_by:{cost:"desc"}},xe=[{label:i.Z.monthOverMonthChange,value:oe},{description:i.Z.ocpDetailsInfrastructureCostDesc,label:i.Z.ocpDetailsInfrastructureCost,value:le,hidden:!0},{description:i.Z.ocpDetailsSupplementaryCostDesc,label:i.Z.ocpDetailsSupplementaryCost,value:re,hidden:!0}],Pe=r.C.cost,De=r.K.ocp;class Te extends m().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],hiddenColumns:(0,S.Y)(xe),isAllSelected:!1,isColumnManagementModalOpen:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getColumnManagementModal=()=>{const{hiddenColumns:e,isColumnManagementModalOpen:t}=this.state,a=(0,c.cloneDeep)(xe);return a.map((t=>{t.hidden=e.has(t.value)})),m().createElement(S.$,{isOpen:t,options:a,onClose:this.handleColumnManagementModalClose,onSave:this.handleColumnManagementModalSave})},this.getComputedItems=()=>{const{query:e,report:t}=this.props,a=D(e.group_by),n=(0,E.qV)(e);return(0,P.c)({report:t,idKey:n||a})},this.getExportModal=e=>{const{query:t,report:a,reportQueryString:n}=this.props,{isAllSelected:s,isExportModalOpen:l,selectedItems:o}=this.state,r=D(t.group_by),i=(0,E.qV)(t),c=a&&a.meta?a.meta.count:0,d=[];return o.map((e=>{e.label!==`${k.Xq}${r}`&&e.label!==`${k.Xq}${i}`&&d.push(e)})),m().createElement(f.X,{count:s?c:d.length,isAllItems:(s||o.length===c)&&e.length>0,groupBy:i?`${k.P}${i}`:r,isOpen:l,items:d,onClose:this.handleExportModalClose,reportPathsType:De,reportQueryString:n})},this.getPagination=(e=!1,t=!1)=>{const{intl:a,query:s,report:l,router:o}=this.props,r=l&&l.meta?l.meta.count:0,c=l&&l.meta&&l.meta.filter&&l.meta.filter.limit?l.meta.filter.limit:Ze.filter.limit,d=l&&l.meta&&l.meta.filter&&l.meta.filter.offset?l.meta.filter.offset:Ze.filter.offset,p=Math.trunc(d/c+1);return m().createElement(n.Pagination,{isCompact:!t,isDisabled:e,itemCount:r,onPerPageSelect:(e,t)=>(0,b.xh)(s,o,t),onSetPage:(e,t)=>(0,b.$9)(s,o,l,t),page:p,perPage:c,titles:{paginationTitle:a.formatMessage(i.Z.paginationTitle,{title:a.formatMessage(i.Z.openShift),placement:t?"bottom":"top"})},variant:t?n.PaginationVariant.bottom:n.PaginationVariant.top,widgetId:"exports-pagination"+(t?"-bottom":"")})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:a,reportQueryString:n,router:s}=this.props,{hiddenColumns:l,isAllSelected:o,selectedItems:r}=this.state,i=D(e.group_by),c=(0,E.qV)(e);return m().createElement(de,{groupBy:c?`${k.P}${c}`:i,groupByTagKey:c,hiddenColumns:l,isAllSelected:o,isLoading:a===M.iF.inProgress,onSelected:this.handleSelected,onSort:(t,a)=>(0,b.yB)(e,s,t,a),report:t,reportQueryString:n,selectedItems:r})},this.getToolbar=e=>{const{query:t,report:a,router:n}=this.props,{isAllSelected:s,selectedItems:l}=this.state,o=D(t.group_by),r=(0,E.qV)(t),i=0===e.length,c=a&&a.meta?a.meta.count:0;return m().createElement(Ce,{groupBy:r?`${k.P}${r}`:o,isAllSelected:s,isDisabled:i,isExportDisabled:i||!s&&0===l.length,itemsPerPage:e.length,itemsTotal:c,onBulkSelected:this.handleBulkSelected,onColumnManagementClicked:this.handleColumnManagementModalOpen,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,b.$3)(t,n,e),onFilterRemoved:e=>(0,b.q7)(t,n,e),pagination:this.getPagination(),query:t,selectedItems:l})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleColumnManagementModalClose=e=>{this.setState({isColumnManagementModalOpen:e})},this.handleColumnManagementModalOpen=()=>{this.setState({isColumnManagementModalOpen:!0})},this.handleColumnManagementModalSave=e=>{this.setState({hiddenColumns:e})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{query:t,router:a}=this.props,n=e,s=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{group_by:{[n]:"*"},order_by:void 0,category:void 0});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{a.navigate((0,O.Z)(s,a.location,!0),{replace:!0})}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:a,selectedItems:n}=this.state;let s=[...a?this.getComputedItems():n];e&&e.length>0&&(t?e.map((e=>s.push(e))):e.map((e=>{s=s.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:s})},this.updateReport=()=>{const{fetchReport:e,reportQueryString:t}=this.props;e(De,Pe,t)},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleColumnManagementModalClose=this.handleColumnManagementModalClose.bind(this),this.handleColumnManagementModalOpen=this.handleColumnManagementModalOpen.bind(this),this.handleColumnManagementModalSave=this.handleColumnManagementModalSave.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{report:a,reportError:n,reportQueryString:s,router:l}=this.props,{selectedItems:o}=this.state,r=e.reportQueryString!==s,i=!a&&!n,c=!l.location.search,d=t.selectedItems!==o;(r||i||c||d)&&this.updateReport()}render(){const{currency:e,intl:t,providers:a,providersFetchStatus:n,query:l,report:o,reportError:r,reportFetchStatus:c,router:d}=this.props,p=this.getComputedItems(),u=D(l.group_by),f=0===p.length,S=t.formatMessage(i.Z.ocpDetailsTitle);if(r)return m().createElement(v.W,{title:S});if(n===M.iF.inProgress)return m().createElement(h.g,{title:S});if(n===M.iF.complete){if(a&&a.meta&&0===a.meta.count)return m().createElement(y.L,{providerType:s.l.ocp,title:S});if(!(0,C.g8)(a))return m().createElement(g.J,{title:S})}return m().createElement("div",{style:Me.ocpDetails},m().createElement(K,{currency:e,groupBy:u,onCurrencySelected:e=>(0,b._s)(l,d,e),onGroupBySelected:this.handleGroupBySelected,report:o}),m().createElement("div",{style:Me.content},m().createElement("div",{style:Me.toolbarContainer},this.getToolbar(p)),this.getExportModal(p),this.getColumnManagementModal(),c===M.iF.inProgress?m().createElement(h.g,null):m().createElement(m().Fragment,null,m().createElement("div",{style:Me.tableContainer},this.getTable()),m().createElement("div",{style:Me.paginationContainer},m().createElement("div",{style:Me.pagination},this.getPagination(f,!0))))))}}const ke=(0,M.X1)(((e,{router:t})=>{const a=(0,o.mB)(t.location.search),n=(0,T.zC)(),r=Object.assign(Object.assign({},Ze),a),i={currency:n,delta:"cost",exclude:r.exclude,filter:Object.assign(Object.assign({},r.filter),{resolution:"monthly",time_scope_units:"month",time_scope_value:-1}),filter_by:r.filter_by,group_by:r.group_by,order_by:r.order_by},c=(0,o.pm)(i),d=x.ZV.selectReport(e,De,Pe,c),m=x.ZV.selectReportError(e,De,Pe,c),p=x.ZV.selectReportFetchStatus(e,De,Pe,c),u=(0,l.H)(Z.NT),h=Z.aX.selectProviders(e,s.l.all,u),g=Z.aX.selectProvidersFetchStatus(e,s.l.all,u);return{currency:n,providers:(0,C.BV)(h,s.l.ocp),providersFetchStatus:g,query:r,report:d,reportError:m,reportFetchStatus:p,reportQueryString:c}})),we={fetchReport:x.nx.fetchReport},Be=(0,p.ZP)((0,w.E)((0,u.connect)(ke,we)(Te)))},19727:(e,t,a)=>{a.d(t,{$3:()=>c,$9:()=>p,_s:()=>o,cZ:()=>i,jl:()=>r,q7:()=>d,xh:()=>m,yB:()=>u});var n=a(9256),s=a(10066);const l=(e,t,a,n=!1)=>{const l=Object.assign({},JSON.parse(JSON.stringify(e)));t.navigate((0,s.Z)(l,t.location,n),{replace:!0})},o=(e,t,a,n=!1)=>{l(e,t,0,n)},r=(e,t,a,n=!1)=>{l(e,t,0,n)},i=(e,t,a,n=!1)=>{const s=Object.assign(Object.assign({},JSON.parse(JSON.stringify(e))),{order_by:void 0});l(s,t,0,n)},c=(e,t,a)=>{const l=(0,n.oQ)(e,a);t.navigate((0,s.Z)(l,t.location,!0),{replace:!0})},d=(e,t,a)=>{const l=(0,n.cJ)(e,a);t.navigate((0,s.Z)(l,t.location,!0),{replace:!0})},m=(e,t,a)=>{const n=Object.assign({},JSON.parse(JSON.stringify(e)));n.filter=Object.assign(Object.assign({},e.filter),{limit:a});const l=(0,s.Z)(n,t.location,!0);t.navigate(l,{replace:!0})},p=(e,t,a,n)=>{const l=a&&a.meta&&a.meta.filter&&a.meta.filter.limit?a.meta.filter.limit:10,o=n*l-l,r=Object.assign({},JSON.parse(JSON.stringify(e)));r.filter=Object.assign(Object.assign({},e.filter),{offset:o});const i=(0,s.Z)(r,t.location);t.navigate(i,{replace:!0})},u=(e,t,a,n,l=undefined)=>{const o=Object.assign({},JSON.parse(JSON.stringify(e)));o.order_by={},o.order_by[a]=n?"asc":"desc",l&&(o.order_by.date=l);const r=(0,s.Z)(o,t.location);t.navigate(r,{replace:!0})}},86482:(e,t,a)=>{var n;a.d(t,{BV:()=>l,Bj:()=>c,D2:()=>d,JY:()=>m,Mg:()=>u,at:()=>i,g8:()=>p,rL:()=>h}),function(e){e.currentMonthData="current_month_data",e.hasData="has_data",e.previousMonthData="previous_month_data"}(n||(n={}));const s=(e,t)=>{let a;if(e&&e.data)for(const n of e.data)if(n.infrastructure&&n.infrastructure.uuid===t){a=n;break}return a},l=(e,t)=>{if(!e)return e;const a=e.data.filter((e=>e.source_type.toLowerCase()===t)),n=Object.assign(Object.assign({},e.meta),{count:a.length});return Object.assign(Object.assign({},e),{meta:n,data:a})},o=(e,t)=>{let a=!1;if(e&&e.data)for(const n of e.data)if(n[t]){a=!0;break}return a},r=(e,t,a)=>{let n=!1;if(e&&e.data)for(const l of e.data){const e=s(t,l.uuid);if(e&&e[a]){n=!0;break}}return n},i=(e,t)=>r(e,t,n.currentMonthData),c=(e,t)=>r(e,t,n.hasData),d=(e,t)=>r(e,t,n.previousMonthData),m=(e,t)=>((e,t)=>{let a=!1;if(e&&e.data)for(const n of e.data)if(s(t,n.uuid)){a=!0;break}return a})(e,t),p=e=>o(e,n.currentMonthData),u=e=>o(e,n.hasData),h=e=>o(e,n.previousMonthData)},10066:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(39333);const s=(e,t,a=!1)=>(a&&(e.filter&&void 0!==e.filter.offset&&(e.filter=Object.assign(Object.assign({},e.filter),{offset:0})),void 0!==e.offset&&(e.offset=0)),`${t.pathname}?${(0,n.IV)(e)}`)},84735:(e,t,a)=>{e.exports=a.p+"fonts/Cost-icon.svg"},80794:(e,t,a)=>{e.exports=a.p+"fonts/Red_Hat-IT_Optimization-Gray.svg"}}]);
//# sourceMappingURL=../sourcemaps/rhelDetails.cd512e13638e8743d5d87830974eade5.js.map