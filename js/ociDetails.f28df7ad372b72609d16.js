"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[4123],{15265:(e,t,a)=>{a.d(t,{LA:()=>n,ZP:()=>o,mq:()=>s});var r=a(40400);const s={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},n=(0,r.IU)(s),o=n},43789:(e,t)=>{t.Q8={name:"--pf-global--spacer--xs",value:"0.25rem",var:"var(--pf-global--spacer--xs)"},t.ZP=t.Q8},15984:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(85893),s=a(90154),n=a(15138),o=function(){return o=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var s in t=arguments[a])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},o.apply(this,arguments)};const l=function(){return(0,r.jsxs)(s.EmptyState,o({variant:s.EmptyStateVariant.large,className:"ins-c-empty-state__unavailable pf-m-redhat-font"},{children:[(0,r.jsx)(s.EmptyStateIcon,{icon:n.ExclamationCircleIcon}),(0,r.jsx)(s.Title,o({headingLevel:"h5",size:"lg"},{children:"This page is temporarily unavailable"})),(0,r.jsxs)(s.EmptyStateBody,{children:["Try refreshing the page. If the problem persists, contact your organization administrator or visit our",(0,r.jsxs)("a",o({href:"https://status.redhat.com/",target:"_blank",rel:"noopener noreferrer"},{children:[" ","status page"]}))," ","for known outages."]})]}))}},84717:(e,t,a)=>{a.d(t,{H:()=>s});var r=a(80129);function s(e){return(0,r.stringify)(e,{encode:!1,indices:!1})}},6450:(e,t,a)=>{a.d(t,{F:()=>y,m:()=>u});var r=a(90154),s=a(97027),n=a(92950),o=a.n(n),l=a(74806),i=a(77760),c=a(1156),d=a(15829);const p={currencySelector:{display:"flex",alignItems:"center"},currencyLabel:{marginBottom:0,marginRight:a(32412).ZP.var,whiteSpace:"nowrap"}},u=[{label:s.Z.currencyOptions,value:"AUD"},{label:s.Z.currencyOptions,value:"CAD"},{label:s.Z.currencyOptions,value:"CHF"},{label:s.Z.currencyOptions,value:"CNY"},{label:s.Z.currencyOptions,value:"DKK"},{label:s.Z.currencyOptions,value:"EUR"},{label:s.Z.currencyOptions,value:"GBP"},{label:s.Z.currencyOptions,value:"HKD"},{label:s.Z.currencyOptions,value:"JPY"},{label:s.Z.currencyOptions,value:"NOK"},{label:s.Z.currencyOptions,value:"NZD"},{label:s.Z.currencyOptions,value:"SEK"},{label:s.Z.currencyOptions,value:"SGD"},{label:s.Z.currencyOptions,value:"USD"},{label:s.Z.currencyOptions,value:"ZAR"}];class m extends o().Component{constructor(){super(...arguments),this.defaultState={isSelectOpen:!1},this.state=Object.assign({},this.defaultState),this.getSelect=()=>{const{currency:e,isDisabled:t}=this.props,{isSelectOpen:a}=this.state,s=this.getSelectOptions(),n=s.find((t=>t.value===e));return o().createElement(r.Select,{className:"currencyOverride",id:"currencySelect",isDisabled:t,isOpen:a,onSelect:this.handleSelect,onToggle:this.handleToggle,selections:n,variant:r.SelectVariant.single},s.map((e=>o().createElement(r.SelectOption,{key:e.value,value:e}))))},this.getSelectOptions=()=>{const{intl:e}=this.props,t=[];return u.map((a=>{t.push({toString:()=>e.formatMessage(a.label,{units:a.value}),value:a.value})})),t},this.handleSelect=(e,t)=>{const{onSelect:a}=this.props;(0,d.NW)(t.value),this.setState({isSelectOpen:!1},(()=>{a&&a(t.value)}))},this.handleToggle=e=>{this.setState({isSelectOpen:e})}}render(){const{intl:e}=this.props;return(0,d.eu)(),o().createElement("div",{style:p.currencySelector},o().createElement(r.Title,{headingLevel:"h2",size:"md",style:p.currencyLabel},e.formatMessage(s.Z.currency)),this.getSelect())}}const h=(0,c.X1)((()=>({}))),g=(0,i.connect)(h,{})(m),y=(0,l.ZP)(g)},55672:(e,t,a)=>{a.d(t,{J:()=>r.Z});var r=a(83819)},83819:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(90154),s=a(89376),n=a(39173),o=a(92950),l=a.n(o),i=a(7081),c=a(97027),d=a(74806);class p extends l().Component{render(){const{intl:e,showReload:t=!0}=this.props;return l().createElement(r.EmptyState,{variant:r.EmptyStateVariant.large,className:"pf-m-redhat-font"},l().createElement(r.EmptyStateIcon,{icon:i.wl}),l().createElement(r.Title,{headingLevel:"h5",size:"lg"},e.formatMessage(c.Z.noDataStateTitle)),l().createElement(r.EmptyStateBody,null,e.formatMessage(c.Z.noDataStateDesc)),t&&l().createElement(r.Button,{variant:"primary",onClick:()=>window.location.reload()},e.formatMessage(c.Z.noDataStateRefresh)))}}const u=(0,d.ZP)(p),m=({showReload:e,title:t})=>l().createElement(l().Fragment,null,t&&l().createElement(s.Z,null,l().createElement(n.Z,{title:t})),l().createElement(r.PageSection,null,l().createElement(u,{showReload:e})))},72483:(e,t,a)=>{a.d(t,{Y:()=>p});var r=a(90154),s=a(97027),n=a(92950),o=a.n(n),l=a(74806);const i=a(80794),c=(0,l.ZP)((({className:e,intl:t})=>o().createElement("img",{className:`optimization-icon ${e}`,src:i,alt:t.formatMessage(s.Z.optimizations),"aria-hidden":"true"})));class d extends o().Component{render(){const{intl:e}=this.props;return o().createElement(r.EmptyState,{variant:r.EmptyStateVariant.large,className:"pf-m-redhat-font"},o().createElement(r.EmptyStateIcon,{icon:c}),o().createElement(r.Title,{headingLevel:"h1",size:"lg"},e.formatMessage(s.Z.noOptimizationsTitle)),o().createElement(r.EmptyStateBody,null,e.formatMessage(s.Z.noOptimizationsDesc)))}}const p=(0,l.ZP)(d)},2985:(e,t,a)=>{a.d(t,{L:()=>E});var r=a(90154),s=a(89376),n=a(39173),o=a(92950),l=a.n(o),i=a(15265),c=a(7081),d=a(1326),p=a(97027),u=a(74806);const m=a(84735),h=(0,u.ZP)((({className:e,intl:t})=>l().createElement("img",{className:`cost-icon ${e}`,src:m,alt:t.formatMessage(p.Z.costManagement),"aria-hidden":"true"})));var g=a(68025),y=a(98499);const v={iconSpacer:{marginLeft:a(43789).ZP.value},viewSources:{marginTop:y.ZP.value}};class S extends l().Component{constructor(){super(...arguments),this.getDocLink=(e,t)=>{const{intl:a}=this.props;return l().createElement("a",{href:a.formatMessage(t),rel:"noreferrer",target:"_blank"},a.formatMessage(e),l().createElement("span",{style:v.iconSpacer},l().createElement(i.LA,null)))},this.getRouteToSources=()=>`${(0,g.IG)()}/settings/sources`}render(){const{intl:e,providerType:t}=this.props;let a,s,n,o=p.Z.noProvidersStateOverviewDesc,i=p.Z.noProvidersStateOverviewTitle;switch(t){case d.l.aws:o=p.Z.noProvidersStateAwsDesc,i=p.Z.noProvidersStateAwsTitle;break;case d.l.azure:o=p.Z.noProvidersStateAzureDesc,i=p.Z.noProvidersStateAzureTitle;break;case d.l.gcp:o=p.Z.noProvidersStateGcpDesc,i=p.Z.noProvidersStateGcpTitle;break;case d.l.ibm:o=p.Z.noProvidersStateIbmDesc,i=p.Z.noProvidersStateIbmTitle;break;case d.l.ocp:o=p.Z.noProvidersStateOcpDesc,a=p.Z.docsAddOcpSources,n=p.Z.noProvidersStateOcpAddSources,i=p.Z.noProvidersStateOcpTitle;break;default:s=h}return l().createElement(r.EmptyState,{variant:r.EmptyStateVariant.large,className:"pf-m-redhat-font"},l().createElement(r.EmptyStateIcon,{icon:s||c.wl}),l().createElement(r.Title,{headingLevel:"h1",size:"lg"},e.formatMessage(i)),l().createElement(r.EmptyStateBody,null,e.formatMessage(o)),a&&n?l().createElement("div",{style:v.viewSources},this.getDocLink(n,a)):l().createElement(r.Button,{variant:"primary",component:"a",href:this.getRouteToSources()},e.formatMessage(p.Z.noProvidersStateGetStarted)))}}const f=(0,u.ZP)(S),E=({providerType:e,title:t})=>l().createElement(l().Fragment,null,t&&l().createElement(s.Z,null,l().createElement(n.Z,{title:t})),l().createElement(r.PageSection,null,l().createElement(f,{providerType:e})))},47947:(e,t,a)=>{a.d(t,{W:()=>c});var r=a(90154),s=a(89376),n=a(39173),o=a(15984),l=a(92950),i=a.n(l);const c=({title:e})=>i().createElement(i().Fragment,null,e&&i().createElement(s.Z,null,i().createElement(n.Z,{title:e})),i().createElement(r.PageSection,null,i().createElement(o.Z,null)))},62423:(e,t,a)=>{a.d(t,{e:()=>S});var r=a(90154),s=a(97027),n=a(92950),o=a.n(n),l=a(74806),i=a(77760),c=a(40493),d=a(1156),p=a(58613),u=a(14483),m=a(5842);class h extends o().Component{constructor(e,t){super(e,t),this.defaultState={isDropdownOpen:!1,isExportModalOpen:!1},this.state=Object.assign({},this.defaultState),this.getExportModal=()=>{const{groupBy:e,item:t,reportPathsType:a,reportQueryString:r}=this.props,{isExportModalOpen:s}=this.state;return o().createElement(c.X,{count:1,groupBy:e,isOpen:s,items:[t],onClose:this.handleExportModalClose,reportPathsType:a,reportQueryString:r})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleOnSelect=()=>{const{isDropdownOpen:e}=this.state;this.setState({isDropdownOpen:!e})},this.handleOnToggle=e=>{this.setState({isDropdownOpen:e})},this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleOnToggle=this.handleOnToggle.bind(this),this.handleOnSelect=this.handleOnSelect.bind(this)}render(){const{groupBy:e,isDisabled:t,showPriceListOption:a,intl:n,item:{source_uuid:l},redirectToCostModel:i,router:c}=this.props,d=[o().createElement(r.DropdownItem,{component:"button",isDisabled:t,key:"export-action",onClick:this.handleExportModalOpen},n.formatMessage(s.Z.detailsActionsExport))];return a&&d.unshift(o().createElement(r.DropdownItem,{component:"button",key:"price-list-action",isDisabled:t||e.includes(u.P)||0===l.length,onClick:()=>i(l[0],c)},n.formatMessage(s.Z.detailsActionsPriceList))),o().createElement(o().Fragment,null,o().createElement(r.Dropdown,{onSelect:this.handleOnSelect,toggle:o().createElement(r.KebabToggle,{onToggle:this.handleOnToggle}),isOpen:this.state.isDropdownOpen,isPlain:!0,position:"right",dropdownItems:d}),this.getExportModal())}}const g=(0,d.X1)(((e,t)=>({}))),y={redirectToCostModel:p.F0.redirectToCostModelFromSourceUuid},v=(0,i.connect)(g,y)(h),S=(0,l.ZP)((0,m.E)(v))},90302:(e,t,a)=>{a.d(t,{W:()=>i});var r=a(49382),s=a(12289),n=a(40794),o=a(11331),l=a(43789);const i={costColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end",paddingRight:0},defaultLabel:{minWidth:"50px"},emptyState:{backgroundColor:r.ZP.value,display:"flex",justifyContent:"center",paddingTop:o.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:l.ZP.value},infoDescription:{color:s.ZP.value,fontSize:n.ZP.value},lastReported:{textAlign:"right",paddingRight:"40px"},lastReportedColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end"},managedColumn:{textAlign:"right"},nameColumn:{width:"1%"}}},90569:(e,t,a)=>{a.d(t,{w:()=>y});var r=a(90154),s=a(52636),n=a(40227),o=a(79112),l=a(97027),i=a(92950),c=a.n(i),d=a(74806),p=a(42901),u=a(72483),m=a(5842),h=a(90302);class g extends c().Component{constructor(e){super(e),this.getEmptyState=()=>{const{intl:e,isOptimizations:t,router:a}=this.props,n=(0,o.mB)(a.location.search);if(n.filter_by)for(const e of Object.values(n.filter_by))if("*"!==e)return c().createElement(p.c,{filter:e,showMargin:!1});return t?c().createElement(u.Y,null):c().createElement(r.EmptyState,null,c().createElement(r.EmptyStateIcon,{icon:s.Xk}),c().createElement(r.EmptyStateBody,null,e.formatMessage(l.Z.detailsEmptyState)))},this.getSortBy=e=>{const{columns:t,router:a}=this.props,r=t[e].orderBy,s=(0,o.mB)(a.location.search),n=s&&s.order_by&&s.order_by[r];return n?{index:e,direction:n}:{}},this.getSortParams=e=>({sortBy:this.getSortBy(e),onSort:this.handleOnSort,columnIndex:e}),this.handleOnSelect=(e,t,a)=>{const{onSelected:r,rows:s}=this.props;let n,o=[];-1===a?n=s.map((e=>(e.selected=t,e))):(n=[...s],n[a].selected=t,o=[n[a].item]),this.setState({rows:s},(()=>{r&&r(o,t)}))},this.handleOnSort=(e,t,a)=>{const{columns:r,onSort:s}=this.props;s&&s(r[t].orderBy,a===n.SortByDirection.asc)},this.handleOnRowClick=(e,t)=>{const{onRowClick:a,rows:r}=this.props;r.map((e=>e.selected=!1)),r[t].selected=!0,this.setState({rows:r},(()=>{a&&a(e,t)}))},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}render(){const{columns:e,intl:t,isLoading:a,isOptimizations:s,rows:o}=this.props;return c().createElement(c().Fragment,null,c().createElement(n.TableComposable,{"aria-label":t.formatMessage(l.Z.dataTableAriaLabel),className:"tableOverride",gridBreakPoint:"grid-2xl",hasSelectableRowCaption:s,variant:n.TableVariant.compact},c().createElement(n.Thead,null,c().createElement(n.Tr,null,e.map(((e,t)=>c().createElement(n.Th,{key:`col-${t}-${e.value}`,modifier:"nowrap",sort:e.isSortable?this.getSortParams(t):void 0,style:e.style},e.name))))),c().createElement(n.Tbody,null,a?c().createElement(n.Tr,null,c().createElement(n.Td,{colSpan:100},c().createElement(r.Bullseye,null,c().createElement("div",{style:{textAlign:"center"}},c().createElement(r.Spinner,{size:"xl"}))))):o.map(((t,a)=>c().createElement(n.Tr,{isSelectable:s,isHoverable:s,isRowSelected:s&&t.selected,onRowClick:s?e=>this.handleOnRowClick(e,a):void 0,key:`row-${a}`},t.cells.map(((r,o)=>0!==o||s?c().createElement(n.Td,{dataLabel:e[o].name,key:`cell-${a}-${o}`,modifier:"nowrap",isActionCell:!s&&o===t.cells.length-1,style:r.style},r.value):c().createElement(n.Td,{dataLabel:e[o].name,key:`cell-${o}-${a}`,modifier:"nowrap",select:{disable:t.selectionDisabled,isSelected:t.selected,onSelect:(e,t)=>this.handleOnSelect(e,t,a),rowIndex:a},style:r.style})))))))),0===o.length&&c().createElement("div",{style:h.W.emptyState},this.getEmptyState()))}}const y=(0,d.ZP)((0,m.E)(g))},85922:(e,t,a)=>{a.r(t),a.d(t,{default:()=>xe});var r=a(90154),s=a(1326),n=a(83963),o=a(84717),l=a(6456),i=a(97027),c=a(92950),d=a.n(c),p=a(74806),u=a(77760),m=a(52471),h=a(55672),g=a(2985),y=a(47947),v=a(40493),S=a(37269),f=a(19727),E=a(86482),b=a(10066),O=a(1156),Z=a(62331),x=a(15920);function P(e={}){return e.payer_tenant_id?"payer_tenant_id":e.region?"region":e.product_service?"product_service":"date"}var C=a(69511),M=a(15829),T=a(14483),_=a(5842),D=a(50081),w=a(26744),B=a(6450),k=a(36465),A=a(22369),I=a(45087),R=a(91778),j=a(49382),L=a(33605),F=a(54881),N=a(98499),$=a(48196);const V={costValue:{marginTop:N.ZP.var,marginBottom:0},costLabelUnit:{fontSize:F.ZP.value,color:L.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:j.ZP.var,padding:N.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},title:{paddingBottom:$.ZP.var}},q=[{label:"payer_tenant_id",value:"payer_tenant_id"},{label:"product_service",value:"product_service"},{label:"region",value:"region"}],z=D.L.oci;class X extends d().Component{render(){const{currency:e,groupBy:t,isExportsFeatureEnabled:a,onCurrencySelected:s,onGroupBySelected:n,providers:o,providersError:l,report:c,intl:p}=this.props,u=c&&!l&&o&&o.meta&&o.meta.count>0,m=c&&c.meta&&c.meta.total&&c.meta.total.cost&&c.meta.total.cost.total;return d().createElement("header",{style:V.header},d().createElement("div",{style:V.headerContent},d().createElement(r.Title,{headingLevel:"h1",style:V.title,size:r.TitleSizes["2xl"]},p.formatMessage(i.Z.ociDetailsTitle)),d().createElement("div",{style:V.headerContentRight},d().createElement(B.F,{currency:e,onSelect:s}),a&&d().createElement(w.bj,null))),d().createElement("div",{style:V.headerContent},d().createElement("div",{style:V.headerContentLeft},d().createElement(k.X,{getIdKeyForGroupBy:P,groupBy:t,isDisabled:!u,onSelected:n,options:q,showTags:!0,tagPathsType:z})),u&&d().createElement("div",null,d().createElement(r.Title,{headingLevel:"h2",style:V.costValue,size:r.TitleSizes["4xl"]},(0,R.xG)(m?c.meta.total.cost.total.value:0,m?c.meta.total.cost.total.units:"USD")),d().createElement("div",{style:V.dateTitle},(0,I.J4)()))))}}const J=(0,O.X1)(((e,t)=>{const a=(0,o.H)(Z.NT),r=Z.aX.selectProviders(e,s.l.all,a),n=Z.aX.selectProvidersError(e,s.l.all,a),l=Z.aX.selectProvidersFetchStatus(e,s.l.all,a);return{isExportsFeatureEnabled:A.iJ.selectIsExportsFeatureEnabled(e),providers:(0,E.BV)(r,s.l.oci),providersError:n,providersFetchStatus:l,providersQueryString:a}})),Q=(0,p.ZP)((0,u.connect)(J,{})(X));var G=a(39836),W=a(91919),H=a(98485),K=a(62423),U=a(90569),Y=a(90302),ee=a(54583),te=a(68025);const ae=l.K.oci;class re extends d().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{groupBy:e,groupByTagKey:t,intl:a,isAllSelected:r,report:s,router:n,selectedItems:o}=this.props;if(!s)return;const l=[],c=(0,C.c)({report:s,idKey:t||e}),p=t?[{name:""},{name:a.formatMessage(i.Z.tagNames)},{name:a.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:a.formatMessage(i.Z.cost),style:Y.W.costColumn},c.length&&{isSortable:!0}),{name:""}]:[{name:""},Object.assign({orderBy:e,name:a.formatMessage(i.Z.detailsResourceNames,{value:e})},c.length&&{isSortable:!0}),{name:a.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:a.formatMessage(i.Z.cost),style:Y.W.costColumn},c.length&&{isSortable:!0}),{name:""}];c.map(((a,s)=>{const i=this.getTotalCost(a,s),c=a&&null!==a.label?a.label:"",p=this.getMonthOverMonthCost(a,s),u=c===`${T.Xq}${e}`||c===`${T.Xq}${t}`,m=a.id&&a.id!==a.label?d().createElement("div",{style:Y.W.infoDescription},a.id):null,h=this.getActions(a,u),g=u?c:d().createElement(G.Link,{to:(0,ee.T)({basePath:(0,te.dI)(W._.ociDetailsBreakdown.path),description:a.id,groupBy:e,id:a.id,router:n,title:c.toString()})},c);l.push({cells:[{},{value:d().createElement("div",null,g,m)},{value:p},{value:i,style:Y.W.managedColumn},{value:h}],isOpen:!1,item:a,selected:r||o&&void 0!==o.find((e=>e.id===a.id)),selectionDisabled:u})})),this.setState({columns:p,rows:l})},this.getActions=(e,t)=>{const{groupBy:a,reportQueryString:r}=this.props;return d().createElement(K.e,{groupBy:a,isDisabled:t,item:e,reportPathsType:ae,reportQueryString:r})},this.getMonthOverMonthCost=(e,t)=>{const{intl:a}=this.props,r=(0,R.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),s=null!==e.delta_percent?(0,R.rl)(Math.abs(e.delta_percent)):0,n=!(0===s||"0.00"===s),o=null!==e.delta_percent;let l;return n&&(l="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(l+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(l+=" increase")),o?d().createElement("div",{className:"monthOverMonthOverride"},d().createElement("div",{className:l,key:`month-over-month-cost-${t}`},n?a.formatMessage(i.Z.percent,{value:s}):d().createElement(H.L,null),n&&null!==e.delta_percent&&e.delta_value>0&&d().createElement("span",{className:"fa fa-sort-up",style:Y.W.infoArrow,key:`month-over-month-icon-${t}`}),n&&null!==e.delta_percent&&e.delta_value<0&&d().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},Y.W.infoArrow),Y.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),d().createElement("div",{style:Y.W.infoDescription,key:`month-over-month-info-${t}`},(0,I.Y)(r))):(0,I.Tf)()},this.getTotalCost=(e,t)=>{const{report:a,intl:r}=this.props,s=a&&a.meta&&a.meta.total&&a.meta.total.cost&&a.meta.total.cost.total?a.meta.total.cost.total.value:0,n=0===s?s.toFixed(2):(e.cost.total.value/s*100).toFixed(2);return d().createElement(d().Fragment,null,(0,R.xG)(e.cost.total.value,e.cost.total.units),d().createElement("div",{style:Y.W.infoDescription,key:`total-cost-${t}`},r.formatMessage(i.Z.percentOfCost,{value:n})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{report:t,selectedItems:a}=this.props,r=t&&t.data?JSON.stringify(t.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")===r&&e.selectedItems===a||this.initDatum()}render(){const{isLoading:e,onSelected:t,onSort:a,selectedItems:r}=this.props,{columns:s,rows:n}=this.state;return d().createElement(U.w,{columns:s,isLoading:e,onSelected:t,onSort:a,rows:n,selectedItems:r})}}const se=(0,p.ZP)((0,_.E)(re));var ne=a(36116),oe=a(7893),le=a(48949),ie=a(94282);const ce=D.Q.tag,de=D.L.oci;class pe extends d().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,tagReport:t}=this.props,a=[{name:e.formatMessage(i.Z.filterByValues,{value:"payer_tenant_id"}),key:"payer_tenant_id"},{name:e.formatMessage(i.Z.filterByValues,{value:"product_service"}),key:"product_service"},{name:e.formatMessage(i.Z.filterByValues,{value:"region"}),key:"region"}];return t&&t.data&&t.data.length&&a.push({name:e.formatMessage(i.Z.filterByValues,{value:T.up}),key:T.up}),a},this.updateReport=()=>{const{fetchTag:e,tagQueryString:t}=this.props;e(de,ce,t)}}componentDidMount(){this.setState({categoryOptions:this.getCategoryOptions()},(()=>{this.updateReport()}))}componentDidUpdate(e){const{query:t,tagReport:a}=this.props;(0,ie.X)(a,e.tagReport)?t&&!(0,ie.X)(t,e.query)&&this.updateReport():this.setState({categoryOptions:this.getCategoryOptions()},(()=>{this.updateReport()}))}render(){const{groupBy:e,isAllSelected:t,isDisabled:a,isExportDisabled:r,itemsPerPage:s,itemsTotal:n,onBulkSelected:o,onExportClicked:l,onFilterAdded:i,onFilterRemoved:c,pagination:p,query:u,selectedItems:m,tagReport:h}=this.props,{categoryOptions:g}=this.state;return d().createElement(oe.k,{categoryOptions:g,groupBy:e,isAllSelected:t,isDisabled:a,isExportDisabled:r,itemsPerPage:s,itemsTotal:n,onBulkSelected:o,onExportClicked:l,onFilterAdded:i,onFilterRemoved:c,pagination:p,query:u,resourcePathsType:ne.C.oci,selectedItems:m,showBulkSelect:!0,showExcludes:!0,showExport:!0,showFilter:!0,tagReport:h,tagPathsType:de})}}const ue=(0,O.X1)(((e,t)=>{const a=(0,n.pm)({filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3}),r=le.ux.selectTag(e,de,ce,a);return{tagReportFetchStatus:le.ux.selectTagFetchStatus(e,de,ce,a),tagReport:r,tagQueryString:a}})),me={fetchTag:le.xr.Xt},he=(0,u.connect)(ue,me)(pe),ge=(0,p.ZP)(he);var ye=a(32412);const ve={ociDetails:{minHeight:"100%"},content:{paddingBottom:N.ZP.value,paddingTop:N.ZP.value},paginationContainer:{marginLeft:N.ZP.value,marginRight:N.ZP.value},pagination:{backgroundColor:j.ZP.value,paddingBottom:ye.ZP.value,paddingTop:ye.ZP.value},tableContainer:{marginLeft:N.ZP.value,marginRight:N.ZP.value},toolbarContainer:{marginLeft:N.ZP.value,marginRight:N.ZP.value}},Se={filter:{limit:10,offset:0},exclude:{},filter_by:{},group_by:{payer_tenant_id:"*"},order_by:{cost:"desc"}},fe=l.C.cost,Ee=l.K.oci;class be extends d().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,a=P(e.group_by),r=(0,S.qV)(e);return(0,C.c)({report:t,idKey:r||a})},this.getExportModal=e=>{const{query:t,report:a,reportQueryString:r}=this.props,{isAllSelected:s,isExportModalOpen:n,selectedItems:o}=this.state,l=P(t.group_by),i=(0,S.qV)(t),c=a&&a.meta?a.meta.count:0,p=[];return o.map((e=>{e.label!==`${T.Xq}${l}`&&e.label!==`${T.Xq}${i}`&&p.push(e)})),d().createElement(v.X,{count:s?c:p.length,isAllItems:(s||o.length===c)&&e.length>0,groupBy:i?`${T.P}${i}`:l,isOpen:n,items:p,onClose:this.handleExportModalClose,reportPathsType:Ee,reportQueryString:r})},this.getPagination=(e=!1,t=!1)=>{const{intl:a,query:s,report:n,router:o}=this.props,l=n&&n.meta?n.meta.count:0,c=n&&n.meta&&n.meta.filter&&n.meta.filter.limit?n.meta.filter.limit:Se.filter.limit,p=n&&n.meta&&n.meta.filter&&n.meta.filter.offset?n.meta.filter.offset:Se.filter.offset,u=Math.trunc(p/c+1);return d().createElement(r.Pagination,{isCompact:!t,isDisabled:e,itemCount:l,onPerPageSelect:(e,t)=>(0,f.xh)(s,o,t),onSetPage:(e,t)=>(0,f.$9)(s,o,n,t),page:u,perPage:c,titles:{paginationTitle:a.formatMessage(i.Z.paginationTitle,{title:a.formatMessage(i.Z.oci),placement:t?"bottom":"top"})},variant:t?r.PaginationVariant.bottom:r.PaginationVariant.top,widgetId:"exports-pagination"+(t?"-bottom":"")})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:a,reportQueryString:r,router:s}=this.props,{isAllSelected:n,selectedItems:o}=this.state,l=P(e.group_by),i=(0,S.qV)(e);return d().createElement(se,{groupBy:i?`${T.P}${i}`:l,groupByTagKey:i,isAllSelected:n,isLoading:a===O.iF.inProgress,onSelected:this.handleSelected,onSort:(t,a)=>(0,f.yB)(e,s,t,a),report:t,reportQueryString:r,selectedItems:o})},this.getToolbar=e=>{const{query:t,router:a,report:r}=this.props,{isAllSelected:s,selectedItems:n}=this.state,o=P(t.group_by),l=(0,S.qV)(t),i=0===e.length,c=r&&r.meta?r.meta.count:0;return d().createElement(ge,{groupBy:l?`${T.P}${l}`:o,isAllSelected:s,isDisabled:i,isExportDisabled:0===e.length||!s&&0===n.length,itemsPerPage:e.length,itemsTotal:c,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,f.$3)(t,a,e),onFilterRemoved:e=>(0,f.q7)(t,a,e),pagination:this.getPagination(i),query:t,selectedItems:n})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{query:t,router:a}=this.props,r=e,s=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{group_by:{[r]:"*"},order_by:void 0});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{a.navigate((0,b.Z)(s,a.location,!0),{replace:!0})}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:a,selectedItems:r}=this.state;let s=[...a?this.getComputedItems():r];e&&e.length>0&&(t?e.map((e=>s.push(e))):e.map((e=>{s=s.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:s})},this.updateReport=()=>{const{fetchReport:e,reportQueryString:t}=this.props;e(Ee,fe,t)},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{report:a,reportError:r,reportQueryString:s,router:n}=this.props,{selectedItems:o}=this.state,l=e.reportQueryString!==s,i=!a&&!r,c=!n.location.search,d=t.selectedItems!==o;(l||i||c||d)&&this.updateReport()}render(){const{currency:e,intl:t,providers:a,providersFetchStatus:r,query:n,report:o,reportError:l,reportFetchStatus:c,router:p}=this.props,u=this.getComputedItems(),v=P(n.group_by),S=0===u.length,b=t.formatMessage(i.Z.ociDetailsTitle);if(l)return d().createElement(y.W,{title:b});if(r===O.iF.inProgress)return d().createElement(m.g,{title:b});if(r===O.iF.complete){if(a&&a.meta&&0===a.meta.count)return d().createElement(g.L,{providerType:s.l.oci,title:b});if(!(0,E.g8)(a))return d().createElement(h.J,{title:b})}return d().createElement("div",{style:ve.ociDetails},d().createElement(Q,{currency:e,groupBy:v,onCurrencySelected:e=>(0,f._s)(n,p,e),onGroupBySelected:this.handleGroupBySelected,report:o}),d().createElement("div",{style:ve.content},d().createElement("div",{style:ve.toolbarContainer},this.getToolbar(u)),this.getExportModal(u),c===O.iF.inProgress?d().createElement(m.g,null):d().createElement(d().Fragment,null,d().createElement("div",{style:ve.tableContainer},this.getTable()),d().createElement("div",{style:ve.paginationContainer},d().createElement("div",{style:ve.pagination},this.getPagination(S,!0))))))}}const Oe=(0,O.X1)(((e,{router:t})=>{const a=(0,n.mB)(t.location.search),r=(0,M.zC)(),l=Object.assign(Object.assign({},Se),a),i={currency:r,delta:"cost",exclude:l.exclude,filter:Object.assign(Object.assign({},l.filter),{resolution:"monthly",time_scope_units:"month",time_scope_value:-1}),filter_by:l.filter_by,group_by:l.group_by,order_by:l.order_by},c=(0,n.pm)(i),d=x.ZV.selectReport(e,Ee,fe,c),p=x.ZV.selectReportError(e,Ee,fe,c),u=x.ZV.selectReportFetchStatus(e,Ee,fe,c),m=(0,o.H)(Z.NT),h=Z.aX.selectProviders(e,s.l.all,m),g=Z.aX.selectProvidersError(e,s.l.all,m),y=Z.aX.selectProvidersFetchStatus(e,s.l.all,m);return{currency:r,providers:(0,E.BV)(h,s.l.oci),providersError:g,providersFetchStatus:y,query:l,report:d,reportError:p,reportFetchStatus:u,reportQueryString:c}})),Ze={fetchReport:x.nx.fetchReport},xe=(0,p.ZP)((0,_.E)((0,u.connect)(Oe,Ze)(be)))},19727:(e,t,a)=>{a.d(t,{$3:()=>c,$9:()=>u,_s:()=>o,cZ:()=>i,jl:()=>l,q7:()=>d,xh:()=>p,yB:()=>m});var r=a(9256),s=a(10066);const n=(e,t,a,r=!1)=>{const n=Object.assign({},JSON.parse(JSON.stringify(e)));t.navigate((0,s.Z)(n,t.location,r),{replace:!0})},o=(e,t,a,r=!1)=>{n(e,t,0,r)},l=(e,t,a,r=!1)=>{n(e,t,0,r)},i=(e,t,a,r=!1)=>{const s=Object.assign(Object.assign({},JSON.parse(JSON.stringify(e))),{order_by:void 0});n(s,t,0,r)},c=(e,t,a)=>{const n=(0,r.oQ)(e,a);t.navigate((0,s.Z)(n,t.location,!0),{replace:!0})},d=(e,t,a)=>{const n=(0,r.cJ)(e,a);t.navigate((0,s.Z)(n,t.location,!0),{replace:!0})},p=(e,t,a)=>{const r=Object.assign({},JSON.parse(JSON.stringify(e)));r.filter=Object.assign(Object.assign({},e.filter),{limit:a});const n=(0,s.Z)(r,t.location,!0);t.navigate(n,{replace:!0})},u=(e,t,a,r)=>{const n=a&&a.meta&&a.meta.filter&&a.meta.filter.limit?a.meta.filter.limit:10,o=r*n-n,l=Object.assign({},JSON.parse(JSON.stringify(e)));l.filter=Object.assign(Object.assign({},e.filter),{offset:o});const i=(0,s.Z)(l,t.location);t.navigate(i,{replace:!0})},m=(e,t,a,r,n=undefined)=>{const o=Object.assign({},JSON.parse(JSON.stringify(e)));o.order_by={},o.order_by[a]=r?"asc":"desc",n&&(o.order_by.date=n);const l=(0,s.Z)(o,t.location);t.navigate(l,{replace:!0})}},86482:(e,t,a)=>{var r;a.d(t,{BV:()=>n,Bj:()=>c,D2:()=>d,JY:()=>p,Mg:()=>m,at:()=>i,g8:()=>u,rL:()=>h}),function(e){e.currentMonthData="current_month_data",e.hasData="has_data",e.previousMonthData="previous_month_data"}(r||(r={}));const s=(e,t)=>{let a;if(e&&e.data)for(const r of e.data)if(r.infrastructure&&r.infrastructure.uuid===t){a=r;break}return a},n=(e,t)=>{if(!e)return e;const a=e.data.filter((e=>e.source_type.toLowerCase()===t)),r=Object.assign(Object.assign({},e.meta),{count:a.length});return Object.assign(Object.assign({},e),{meta:r,data:a})},o=(e,t)=>{let a=!1;if(e&&e.data)for(const r of e.data)if(r[t]){a=!0;break}return a},l=(e,t,a)=>{let r=!1;if(e&&e.data)for(const n of e.data){const e=s(t,n.uuid);if(e&&e[a]){r=!0;break}}return r},i=(e,t)=>l(e,t,r.currentMonthData),c=(e,t)=>l(e,t,r.hasData),d=(e,t)=>l(e,t,r.previousMonthData),p=(e,t)=>((e,t)=>{let a=!1;if(e&&e.data)for(const r of e.data)if(s(t,r.uuid)){a=!0;break}return a})(e,t),u=e=>o(e,r.currentMonthData),m=e=>o(e,r.hasData),h=e=>o(e,r.previousMonthData)},10066:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(39333);const s=(e,t,a=!1)=>(a&&(e.filter&&void 0!==e.filter.offset&&(e.filter=Object.assign(Object.assign({},e.filter),{offset:0})),void 0!==e.offset&&(e.offset=0)),`${t.pathname}?${(0,r.IV)(e)}`)},84735:(e,t,a)=>{e.exports=a.p+"fonts/Cost-icon.svg"},80794:(e,t,a)=>{e.exports=a.p+"fonts/Red_Hat-IT_Optimization-Gray.svg"}}]);
//# sourceMappingURL=../sourcemaps/ociDetails.75672eceaaf750aab0388ae6e2744879.js.map