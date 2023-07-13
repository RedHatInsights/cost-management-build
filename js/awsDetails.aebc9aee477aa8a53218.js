"use strict";(self.webpackChunkcostManagement=self.webpackChunkcostManagement||[]).push([[3043],{15265:(e,t,r)=>{r.d(t,{LA:()=>o,ZP:()=>l,mq:()=>s});var a=r(40400);const s={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},o=(0,a.IU)(s),l=o},80965:(e,t,r)=>{r.d(t,{V_:()=>o,ZP:()=>l,jm:()=>s});var a=r(40400);const s={name:"MinusIcon",height:512,width:448,svgPath:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0},o=(0,a.IU)(s),l=o},40794:(e,t)=>{t.zf={name:"--pf-global--FontSize--xs",value:"0.75rem",var:"var(--pf-global--FontSize--xs)"},t.ZP=t.zf},12289:(e,t)=>{t.Jd={name:"--pf-global--disabled-color--100",value:"#6a6e73",var:"var(--pf-global--disabled-color--100)"},t.ZP=t.Jd},11331:(e,t)=>{t.po={name:"--pf-global--spacer--3xl",value:"4rem",var:"var(--pf-global--spacer--3xl)"},t.ZP=t.po},43789:(e,t)=>{t.Q8={name:"--pf-global--spacer--xs",value:"0.25rem",var:"var(--pf-global--spacer--xs)"},t.ZP=t.Q8},15984:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(85893),s=r(90154),o=r(15138),l=function(){return l=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},l.apply(this,arguments)};const n=function(){return(0,a.jsxs)(s.EmptyState,l({variant:s.EmptyStateVariant.large,className:"ins-c-empty-state__unavailable pf-m-redhat-font"},{children:[(0,a.jsx)(s.EmptyStateIcon,{icon:o.ExclamationCircleIcon}),(0,a.jsx)(s.Title,l({headingLevel:"h5",size:"lg"},{children:"This page is temporarily unavailable"})),(0,a.jsxs)(s.EmptyStateBody,{children:["Try refreshing the page. If the problem persists, contact your organization administrator or visit our",(0,a.jsxs)("a",l({href:"https://status.redhat.com/",target:"_blank",rel:"noopener noreferrer"},{children:[" ","status page"]}))," ","for known outages."]})]}))}},6279:(e,t,r)=>{r.d(t,{T:()=>a.Z});var a=r(86309)},91882:(e,t,r)=>{r.d(t,{W:()=>c});var a=r(49382),s=r(12289),o=r(40794),l=r(11331),n=r(48196),i=r(43789);const c={costColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end",paddingRight:0},defaultLabel:{minWidth:"50px"},emptyState:{backgroundColor:a.ZP.value,display:"flex",justifyContent:"center",paddingTop:l.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:i.ZP.value},infoDescription:{color:s.ZP.value,fontSize:o.ZP.value},lastItem:{textAlign:"right",paddingRight:"3.8rem"},lastItemColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end"},managedColumn:{textAlign:"right"},nameColumn:{width:"1%"},warningIcon:{paddingLeft:n.ZP.var}}},70637:(e,t,r)=>{r.d(t,{w:()=>h,V:()=>y});var a=r(90154),s=r(52636),o=r(40227),l=r(97027),n=r(92950),i=r.n(n),c=r(74806),d=r(42901),p=r(5842),u=r(91882);class m extends i().Component{constructor(e){super(e),this.getEmptyState=()=>{const{filterBy:e,intl:t}=this.props;if(e)for(const t of Object.values(e))if("*"!==t)return i().createElement(d.c,{filter:t,showMargin:!1});return i().createElement(a.EmptyState,null,i().createElement(a.EmptyStateIcon,{icon:s.Xk}),i().createElement(a.EmptyStateBody,null,t.formatMessage(l.Z.detailsEmptyState)))},this.getSortBy=e=>{const{columns:t,orderBy:r}=this.props,a=r&&r[t[e].orderBy];return a?{index:e,direction:a}:{}},this.getSortParams=e=>({sortBy:this.getSortBy(e),onSort:this.handleOnSort,columnIndex:e}),this.handleOnSelect=(e,t,r)=>{const{onSelected:a,rows:s}=this.props;let o,l=[];-1===r?o=s.map((e=>(e.selected=t,e))):(o=[...s],o[r].selected=t,l=[o[r].item]),this.setState({rows:s},(()=>{a&&a(l,t)}))},this.handleOnSort=(e,t,r)=>{const{columns:a,onSort:s}=this.props;s&&s(a[t].orderBy,r===o.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}render(){const{columns:e,intl:t,isActionsCell:r=!1,isLoading:s,rows:n}=this.props;return i().createElement(i().Fragment,null,i().createElement(o.TableComposable,{"aria-label":t.formatMessage(l.Z.dataTableAriaLabel),className:"tableOverride",gridBreakPoint:"grid-2xl",variant:o.TableVariant.compact},i().createElement(o.Thead,null,i().createElement(o.Tr,null,e.map(((e,t)=>i().createElement(o.Th,{key:`col-${t}-${e.value}`,modifier:"nowrap",sort:e.isSortable?this.getSortParams(t):void 0,style:e.style},e.name))))),i().createElement(o.Tbody,null,s?i().createElement(o.Tr,null,i().createElement(o.Td,{colSpan:100},i().createElement(a.Bullseye,null,i().createElement("div",{style:{textAlign:"center"}},i().createElement(a.Spinner,{size:"xl"}))))):n.map(((t,a)=>i().createElement(o.Tr,{key:`row-${a}`},t.cells.map(((s,l)=>0===l?i().createElement(o.Td,{dataLabel:e[l].name,key:`cell-${l}-${a}`,modifier:"nowrap",select:{disable:t.selectionDisabled,isSelected:t.selected,onSelect:(e,t)=>this.handleOnSelect(e,t,a),rowIndex:a},style:s.style}):i().createElement(o.Td,{dataLabel:e[l].name,key:`cell-${a}-${l}`,modifier:"nowrap",isActionCell:r&&l===t.cells.length-1,style:s.style},s.value)))))))),0===n.length&&i().createElement("div",{style:u.W.emptyState},this.getEmptyState()))}}const h=(0,c.ZP)((0,p.E)(m));class g extends i().Component{constructor(e){super(e),this.getEmptyState=()=>{const{emptyState:e,filterBy:t,intl:r}=this.props;if(t)for(const e of Object.values(t))if("*"!==e)return i().createElement(d.c,{filter:e,showMargin:!1});return e||i().createElement(a.EmptyState,null,i().createElement(a.EmptyStateIcon,{icon:s.Xk}),i().createElement(a.EmptyStateBody,null,r.formatMessage(l.Z.detailsEmptyState)))},this.getSortBy=e=>{const{columns:t,orderBy:r}=this.props,a=r&&r[t[e].orderBy];return a?{index:e,direction:a}:{}},this.getSortParams=e=>({sortBy:this.getSortBy(e),onSort:this.handleOnSort,columnIndex:e}),this.handleOnSort=(e,t,r)=>{const{columns:a,onSort:s}=this.props;s&&s(a[t].orderBy,r===o.SortByDirection.asc)},this.handleOnRowClick=(e,t)=>{const{onRowClick:r,rows:a}=this.props;a.map((e=>e.selected=!1)),a[t].selected=!0,this.setState({rows:a},(()=>{r&&r(e,t)}))},this.handleOnSort=this.handleOnSort.bind(this)}render(){const{columns:e,intl:t,isLoading:r,rows:s}=this.props;return i().createElement(i().Fragment,null,i().createElement(o.TableComposable,{"aria-label":t.formatMessage(l.Z.selectableTableAriaLabel),gridBreakPoint:"grid-2xl",hasSelectableRowCaption:!0,variant:o.TableVariant.compact},i().createElement(o.Thead,null,i().createElement(o.Tr,null,e.map(((e,t)=>i().createElement(o.Th,{key:`col-${t}-${e.value}`,modifier:"nowrap",sort:e.isSortable?this.getSortParams(t):void 0,style:e.style},e.name))))),i().createElement(o.Tbody,null,r?i().createElement(o.Tr,null,i().createElement(o.Td,{colSpan:100},i().createElement(a.Bullseye,null,i().createElement("div",{style:{textAlign:"center"}},i().createElement(a.Spinner,{size:"xl"}))))):s.map(((r,a)=>i().createElement(o.Tr,{"aria-label":t.formatMessage(l.Z.selectableTableRowAriaLabel),isSelectable:!0,isHoverable:!0,isRowSelected:r.selected,onRowClick:e=>this.handleOnRowClick(e,a),key:`row-${a}`},r.cells.map(((r,s)=>0===s?i().createElement(o.Th,{"aria-label":t.formatMessage(l.Z.selectableTableHeaderAriaLabel),dataLabel:e[s].name,key:`cell-${a}-${s}`,modifier:"nowrap",style:r.style},r.value):i().createElement(o.Td,{dataLabel:e[s].name,key:`cell-${a}-${s}`,modifier:"nowrap",style:r.style},r.value)))))))),0===s.length&&i().createElement("div",{style:u.W.emptyState},this.getEmptyState()))}}const y=(0,c.ZP)((0,p.E)(g))},98485:(e,t,r)=>{r.d(t,{L:()=>l});var a=r(80965),s=r(92950),o=r.n(s);const l=()=>o().createElement("span",{className:"emptyValueContainer"},o().createElement(a.V_,null))},60365:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Ie});var a=r(90154),s=r(1326),o=r(76966),l=r(84717),n=r(6456),i=r(97027),c=r(92950),d=r.n(c),p=r(74806),u=r(36613),m=r(96703),h=r(38274),g=r(41255),y=r(86882),S=r(46955);function f(e={}){return e.account?"account":e.aws_category?"aws_category":e.org_unit_id?"org_unit_id":e.region?"region":e.service?"service":"date"}var E=r(34328),v=r(45402),b=r(1032),C=r(32924),x=r(50859),O=r(1156),T=r(62331),P=r(15920),w=r(15829),M=r(14483),B=r(5842),Z=r(49382),_=r(98499),k=r(32412);const R={awsDetails:{minHeight:"100%"},content:{paddingBottom:_.ZP.value,paddingTop:_.ZP.value},paginationContainer:{marginLeft:_.ZP.value,marginRight:_.ZP.value},pagination:{backgroundColor:Z.ZP.value,paddingBottom:k.ZP.value,paddingTop:k.ZP.value},tableContainer:{marginLeft:_.ZP.value,marginRight:_.ZP.value},toolbarContainer:{marginLeft:_.ZP.value,marginRight:_.ZP.value}};var A=r(96740),I=r(36116),D=r(50081),F=r(37764),L=r(6279),$=r(6450),V=r(63391),j=r(22369),X=r(45087),q=r(91778),Q=r(33605),z=r(54881),N=r(48196);const W={costLabelUnit:{fontSize:z.ZP.value,color:Q.ZP.var},costType:{display:"flex",marginLeft:k.ZP.var},costValue:{marginTop:_.ZP.var,marginBottom:0},dateTitle:{textAlign:"end"},header:{backgroundColor:Z.ZP.var,padding:_.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},title:{paddingBottom:N.ZP.var}},H=[{label:"account",value:"account"},{label:"service",value:"service"},{label:"region",value:"region"}],J=A.t.aws,G=I.C.aws,K=D.L.aws;class U extends d().Component{constructor(){super(...arguments),this.handleOnCostTypeSelected=e=>{const{onCostTypeSelected:t}=this.props;t&&t(e)}}render(){const{costType:e,currency:t,groupBy:r,isExportsFeatureEnabled:s,onCurrencySelected:o,onGroupBySelected:l,providers:n,providersError:c,report:p,intl:u}=this.props,m=p&&!c&&n&&n.meta&&n.meta.count>0,h=p&&p.meta&&p.meta.total&&p.meta.total.cost&&p.meta.total.cost.total;return d().createElement("header",{style:W.header},d().createElement("div",{style:W.headerContent},d().createElement(a.Title,{headingLevel:"h1",style:W.title,size:a.TitleSizes["2xl"]},u.formatMessage(i.Z.awsDetailsTitle)),d().createElement("div",{style:W.headerContentRight},d().createElement($.F,{currency:t,onSelect:o}),s&&d().createElement(F.bj,null))),d().createElement("div",{style:W.headerContent},d().createElement("div",{style:W.headerContentLeft},d().createElement(V.X,{getIdKeyForGroupBy:f,groupBy:r,isDisabled:!m,onSelected:l,options:H,orgPathsType:J,resourcePathsType:G,showCostCategories:!0,showOrgs:!0,showTags:!0,tagPathsType:K}),d().createElement("div",{style:W.costType},d().createElement(L.T,{costType:e,onSelect:this.handleOnCostTypeSelected}))),m&&d().createElement("div",null,d().createElement(a.Title,{headingLevel:"h2",style:W.costValue,size:a.TitleSizes["4xl"]},(0,q.xG)(h?p.meta.total.cost.total.value:0,h?p.meta.total.cost.total.units:"USD")),d().createElement("div",{style:W.dateTitle},(0,X.J4)()))))}}const Y=(0,O.X1)(((e,t)=>{const r=(0,l.H)(T.NT),a=T.aX.selectProviders(e,s.l.all,r),o=T.aX.selectProvidersError(e,s.l.all,r),n=T.aX.selectProvidersFetchStatus(e,s.l.all,r);return{isExportsFeatureEnabled:j.iJ.selectIsExportsFeatureEnabled(e),providers:(0,b.BV)(a,s.l.aws),providersError:o,providersFetchStatus:n,providersQueryString:r}})),ee=(0,p.ZP)((0,u.connect)(Y,{})(U));var te=r(39836),re=r(91919),ae=r(70637),se=r(91882),oe=r(98485),le=r(86182),ne=r(21857),ie=r(68025);const ce=n.K.aws;class de extends d().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{groupBy:e,groupByCostCategory:t,groupByOrg:r,groupByTagKey:a,intl:s,isAllSelected:o,report:l,router:n,selectedItems:c}=this.props;if(!l)return;const p=[],u=(0,E.c)({report:l,idKey:t||a||(r?"org_entities":e)}),m=t||a||r?[{name:""},{name:t?s.formatMessage(i.Z.costCategoryNames):r?s.formatMessage(i.Z.names,{count:2}):s.formatMessage(i.Z.tagNames)},{name:s.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:s.formatMessage(i.Z.cost),style:se.W.costColumn},u.length&&{isSortable:!0}),{name:""}]:[{name:""},Object.assign({orderBy:"account"===e?"account_alias":e,name:s.formatMessage(i.Z.detailsResourceNames,{value:e})},u.length&&{isSortable:!0}),{name:s.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:s.formatMessage(i.Z.cost),style:se.W.costColumn},u.length&&{isSortable:!0}),{name:""}];u.map(((s,l)=>{const i=this.getTotalCost(s,l),u=this.getMonthOverMonthCost(s,l),m=s&&s.label&&null!==s.label?s.label:"",h=m===`${M.Xq}${e}`||m===`${M.Xq}${t}`||m===`${M.Xq}${a}`,g=s.id&&s.id!==s.label?d().createElement("div",{style:se.W.infoDescription},s.id):null,y=this.getActions(s,h),S=h?m:d().createElement(te.Link,{to:(0,ne.Z)({basePath:(0,ie.dI)(re._.awsDetailsBreakdown.path),description:s.id,groupBy:e,groupByOrg:r,id:s.id,router:n,title:m.toString(),type:s.type})},m);p.push({cells:[{},{value:d().createElement("div",null,S,g)},{value:u},{value:i,style:se.W.managedColumn},{value:y}],item:s,selected:o||c&&void 0!==c.find((e=>e.id===s.id)),selectionDisabled:h})})),this.setState({columns:m,rows:p})},this.getActions=(e,t=!1)=>{const{groupBy:r,reportQueryString:a}=this.props;return d().createElement(le.e,{groupBy:r,isDisabled:t,item:e,reportPathsType:ce,reportQueryString:a})},this.getMonthOverMonthCost=(e,t)=>{const{intl:r}=this.props,a=(0,q.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),s=null!==e.delta_percent?(0,q.rl)(Math.abs(e.delta_percent)):0,o=!(0===s||"0.00"===s),l=null!==e.delta_percent;let n;return o&&(n="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(n+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(n+=" increase")),l?d().createElement("div",{className:"monthOverMonthOverride"},d().createElement("div",{className:n,key:`month-over-month-cost-${t}`},o?r.formatMessage(i.Z.percent,{value:s}):d().createElement(oe.L,null),o&&null!==e.delta_percent&&e.delta_value>0&&d().createElement("span",{className:"fa fa-sort-up",style:se.W.infoArrow,key:`month-over-month-icon-${t}`}),o&&null!==e.delta_percent&&e.delta_value<0&&d().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},se.W.infoArrow),se.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),d().createElement("div",{style:se.W.infoDescription,key:`month-over-month-info-${t}`},(0,X.Y)(a))):(0,X.Tf)()},this.getTotalCost=(e,t)=>{const{report:r,intl:a}=this.props,s=r&&r.meta&&r.meta.total&&r.meta.total.cost&&r.meta.total.cost.total?r.meta.total.cost.total.value:0,o=0===s?s.toFixed(2):(e.cost.total.value/s*100).toFixed(2);return d().createElement(d().Fragment,null,(0,q.xG)(e.cost.total.value,e.cost.total.units),d().createElement("div",{style:se.W.infoDescription,key:`total-cost-${t}`},a.formatMessage(i.Z.percentOfCost,{value:o})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{report:t,selectedItems:r}=this.props,a=t&&t.data?JSON.stringify(t.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")===a&&e.selectedItems===r||this.initDatum()}render(){const{filterBy:e,isLoading:t,onSelected:r,onSort:a,orderBy:s,selectedItems:o}=this.props,{columns:l,rows:n}=this.state;return d().createElement(ae.w,{columns:l,filterBy:e,isActionsCell:!0,isLoading:t,onSelected:r,onSort:a,orderBy:s,rows:n,selectedItems:o})}}const pe=(0,p.ZP)((0,B.E)(de));var ue=r(39333),me=r(70200),he=r(84999),ge=r(98449),ye=r(19878),Se=r(48949);const fe=A.t.aws,Ee=A.J.org,ve=I.C.aws,be=I._.aws_category,Ce=D.L.aws,xe=D.Q.tag;class Oe extends d().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,isCostCategoriesFeatureEnabled:t,orgReport:r,resourceReport:a,tagReport:s}=this.props,o=[{name:e.formatMessage(i.Z.filterByValues,{value:"account"}),key:"account"},{name:e.formatMessage(i.Z.filterByValues,{value:"service"}),key:"service"},{name:e.formatMessage(i.Z.filterByValues,{value:"region"}),key:"region"}];return r&&r.data&&r.data.length&&o.push({name:e.formatMessage(i.Z.filterByValues,{value:"org_unit_id"}),key:M.dV}),s&&s.data&&s.data.length&&o.push({name:e.formatMessage(i.Z.filterByValues,{value:M.up}),key:M.up}),a&&a.data&&a.data.length&&t&&o.push({name:e.formatMessage(i.Z.filterByValues,{value:M.tZ}),key:M.tZ}),o.sort(((e,t)=>e.name<t.name?-1:e.name>t.name?1:0))},this.updateReport=()=>{const{fetchOrg:e,fetchResource:t,fetchTag:r,isCostCategoriesFeatureEnabled:a,orgQueryString:s,resourceQueryString:o,tagQueryString:l}=this.props;e(fe,Ee,s),a&&t(ve,be,o),r(Ce,xe,l)}}componentDidMount(){this.setState({categoryOptions:this.getCategoryOptions()},(()=>{this.updateReport()}))}componentDidUpdate(e){const{orgReport:t,query:r,resourceReport:a,tagReport:s}=this.props;(0,he.X)(t,e.orgReport)&&(0,he.X)(a,e.resourceReport)&&(0,he.X)(s,e.tagReport)?r&&!(0,he.X)(r,e.query)&&this.updateReport():this.setState({categoryOptions:this.getCategoryOptions()},(()=>{this.updateReport()}))}render(){const{groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isDisabled:a,isExportDisabled:s,itemsPerPage:o,itemsTotal:l,onBulkSelected:n,onExportClicked:i,onFilterAdded:c,onFilterRemoved:p,orgReport:u,pagination:m,query:h,resourceReport:g,selectedItems:y,tagReport:S}=this.props,{categoryOptions:f}=this.state;return d().createElement(me.k,{categoryOptions:f,groupBy:e,isAllSelected:t,isDisabled:a,isBulkSelectDisabled:r,isExportDisabled:s,itemsPerPage:o,itemsTotal:l,onBulkSelected:n,onExportClicked:i,onFilterAdded:c,onFilterRemoved:p,orgReport:u,pagination:m,query:h,resourcePathsType:ve,resourceReport:g,selectedItems:y,showBulkSelect:!0,showExcludes:!0,showExport:!0,showFilter:!0,tagPathsType:Ce,tagReport:S})}}const Te=(0,O.X1)(((e,t)=>{const r={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3},a=(0,ue.pm)({key_only:!0}),s=ye.CM.selectResource(e,ve,be,a),o=ye.CM.selectResourceFetchStatus(e,ve,be,a),l=(0,ue.pm)(Object.assign({},r)),n=Se.ux.selectTag(e,Ce,xe,l),i=Se.ux.selectTagFetchStatus(e,Ce,xe,l),c=(0,ue.pm)(Object.assign({},r)),d=ge.zE.selectOrg(e,fe,Ee,c),p=ge.zE.selectOrgFetchStatus(e,fe,Ee,c);return{isCostCategoriesFeatureEnabled:j.iJ.selectIsCostCategoriesFeatureEnabled(e),orgReport:d,orgReportFetchStatus:p,orgQueryString:c,resourceReport:s,resourceReportFetchStatus:o,resourceQueryString:a,tagReport:n,tagReportFetchStatus:i,tagQueryString:l}})),Pe={fetchOrg:ge.Lp.T7,fetchResource:ye.Px.PG,fetchTag:Se.xr.Xt},we=(0,u.connect)(Te,Pe)(Oe),Me=(0,p.ZP)(we),Be={filter:{limit:10,offset:0},exclude:{},filter_by:{},group_by:{account:"*"},order_by:{cost:"desc"}},Ze=n.C.cost,_e=n.K.aws;class ke extends d().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,r=f(e.group_by),a=(0,v.qV)(e)||r;return(0,E.c)({report:t,idKey:a===M.dV?"org_entities":a})},this.getExportModal=e=>{const{query:t,report:r,reportQueryString:a}=this.props,{isAllSelected:s,isExportModalOpen:o,selectedItems:l}=this.state,n=f(t.group_by),i=(0,v.Sn)(t),c=(0,v.qV)(t),p=r&&r.meta?r.meta.count:0,u=[];return l.map((e=>{e.label!==`${M.Xq}${n}`&&e.label!==`${M.Xq}${c}`&&u.push(e)})),d().createElement(m.X,{count:s?p:u.length,isAllItems:(s||l.length===p)&&e.length>0,groupBy:i?`${M.LM}${i}`:c?`${M.P}${c}`:n,isOpen:o,items:u,onClose:this.handleExportModalClose,reportPathsType:_e,reportQueryString:a})},this.getPagination=(e=!1,t=!1)=>{const{intl:r,query:s,router:o,report:l}=this.props,n=l&&l.meta?l.meta.count:0,c=l&&l.meta&&l.meta.filter&&l.meta.filter.limit?l.meta.filter.limit:Be.filter.limit,p=l&&l.meta&&l.meta.filter&&l.meta.filter.offset?l.meta.filter.offset:Be.filter.offset,u=Math.trunc(p/c+1);return d().createElement(a.Pagination,{isCompact:!t,isDisabled:e,itemCount:n,onPerPageSelect:(e,t)=>(0,x.Lk)(s,o,t),onSetPage:(e,t)=>(0,x.F4)(s,o,l,t),page:u,perPage:c,titles:{paginationTitle:r.formatMessage(i.Z.paginationTitle,{title:r.formatMessage(i.Z.aws),placement:t?"bottom":"top"})},variant:t?a.PaginationVariant.bottom:a.PaginationVariant.top,widgetId:"exports-pagination"+(t?"-bottom":"")})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:r,reportQueryString:a,router:s}=this.props,{isAllSelected:o,selectedItems:l}=this.state,n=f(e.group_by),i=(0,v.Sn)(e),c=(0,v.qV)(e),p=(0,v.OA)(e);return d().createElement(pe,{filterBy:e.filter_by,groupBy:i?`${M.LM}${i}`:c?`${M.P}${c}`:n,groupByCostCategory:i,groupByTagKey:c,groupByOrg:p,isAllSelected:o,isLoading:r===O.iF.inProgress,onSelected:this.handleSelected,onSort:(t,r)=>(0,x.K8)(e,s,t,r),orderBy:e.order_by,report:t,reportQueryString:a,selectedItems:l})},this.getToolbar=e=>{const{query:t,router:r,report:a}=this.props,{isAllSelected:s,selectedItems:o}=this.state,l=f(t.group_by),n=(0,v.Sn)(t),i=(0,v.qV)(t),c=0===e.length,p=a&&a.meta?a.meta.count:0;return d().createElement(Me,{groupBy:n?`${M.LM}${n}`:i?`${M.P}${i}`:l,isAllSelected:s,isDisabled:c,isExportDisabled:c||!s&&0===o.length,itemsPerPage:e.length,itemsTotal:p,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,x.JA)(t,r,e),onFilterRemoved:e=>(0,x.vI)(t,r,e),pagination:this.getPagination(c),query:t,selectedItems:o})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{query:t,router:r}=this.props;let a=e,s="*";-1!==(e&&e.indexOf(M.dV))&&(a=M.dV.substring(0,M.dV.length),s=e.slice(M.dV.length));const o=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{group_by:{[a]:s},order_by:void 0});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{r.navigate((0,C.ZE)(o,r.location,!0),{replace:!0})}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:r,selectedItems:a}=this.state;let s=[...r?this.getComputedItems():a];e&&e.length>0&&(t?e.map((e=>s.push(e))):e.map((e=>{s=s.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:s})},this.updateReport=()=>{const{fetchReport:e,reportQueryString:t}=this.props;e(_e,Ze,t)},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{report:r,reportError:a,reportQueryString:s,router:o}=this.props,{selectedItems:l}=this.state,n=e.reportQueryString!==s,i=!r&&!a,c=!o.location.search,d=t.selectedItems!==l;(n||i||c||d)&&this.updateReport()}render(){const{costType:e,currency:t,intl:r,providers:a,providersFetchStatus:o,query:l,report:n,reportError:c,reportFetchStatus:p,router:u}=this.props,m=this.getComputedItems(),E=f(l.group_by),v=0===m.length,C=r.formatMessage(i.Z.awsDetailsTitle);if(c)return d().createElement(S.W,{title:C});if(o===O.iF.inProgress)return d().createElement(h.g,{title:C});if(o===O.iF.complete){if(a&&a.meta&&0===a.meta.count)return d().createElement(y.L,{providerType:s.l.aws,title:C});if(!(0,b.g8)(a))return d().createElement(g.J,{title:C})}return d().createElement("div",{style:R.awsDetails},d().createElement(ee,{costType:e,currency:t,groupBy:E,onCostTypeSelected:()=>(0,x.ft)(l,u),onCurrencySelected:()=>(0,x.LB)(l,u),onGroupBySelected:this.handleGroupBySelected,report:n}),d().createElement("div",{style:R.content},d().createElement("div",{style:R.toolbarContainer},this.getToolbar(m)),this.getExportModal(m),p===O.iF.inProgress?d().createElement(h.g,null):d().createElement(d().Fragment,null,d().createElement("div",{style:R.tableContainer},this.getTable()),d().createElement("div",{style:R.paginationContainer},d().createElement("div",{style:R.pagination},this.getPagination(v,!0))))))}}const Re=(0,O.X1)(((e,{router:t})=>{const r=(0,o.mB)(t.location.search),a=(0,w.uY)(),n=(0,w.zC)(),i=Object.assign(Object.assign({},Be),r),c={cost_type:a,currency:n,delta:"cost",exclude:i.exclude,filter:Object.assign(Object.assign({},i.filter),{resolution:"monthly",time_scope_units:"month",time_scope_value:-1}),filter_by:Object.assign(Object.assign({},i.filter_by),i.filter_by&&i.filter_by[M.dV]&&{[`${M.pi}${M.dV}`]:i.filter_by[M.dV],[M.dV]:void 0}),group_by:i.group_by,order_by:i.order_by},d=(0,o.pm)(c),p=P.ZV.selectReport(e,_e,Ze,d),u=P.ZV.selectReportError(e,_e,Ze,d),m=P.ZV.selectReportFetchStatus(e,_e,Ze,d),h=(0,l.H)(T.NT),g=T.aX.selectProviders(e,s.l.all,h),y=T.aX.selectProvidersError(e,s.l.all,h),S=T.aX.selectProvidersFetchStatus(e,s.l.all,h);return{costType:a,currency:n,providers:(0,b.BV)(g,s.l.aws),providersError:y,providersFetchStatus:S,query:i,report:p,reportError:u,reportFetchStatus:m,reportQueryString:d}})),Ae={fetchReport:P.nx.fetchReport},Ie=(0,p.ZP)((0,B.E)((0,u.connect)(Re,Ae)(ke)))},86182:(e,t,r)=>{r.d(t,{e:()=>f});var a=r(90154),s=r(97027),o=r(92950),l=r.n(o),n=r(74806),i=r(36613),c=r(96703),d=r(1156),p=r(58613),u=r(14483),m=r(5842);class h extends l().Component{constructor(e,t){super(e,t),this.defaultState={isDropdownOpen:!1,isExportModalOpen:!1},this.state=Object.assign({},this.defaultState),this.getExportModal=()=>{const{groupBy:e,item:t,reportPathsType:r,reportQueryString:a}=this.props,{isExportModalOpen:s}=this.state;return l().createElement(c.X,{count:1,groupBy:e,isOpen:s,items:[t],onClose:this.handleExportModalClose,reportPathsType:r,reportQueryString:a})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleOnSelect=()=>{const{isDropdownOpen:e}=this.state;this.setState({isDropdownOpen:!e})},this.handleOnToggle=e=>{this.setState({isDropdownOpen:e})},this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleOnToggle=this.handleOnToggle.bind(this),this.handleOnSelect=this.handleOnSelect.bind(this)}render(){const{groupBy:e,isDisabled:t,showPriceListOption:r,intl:o,item:{source_uuid:n},redirectToCostModel:i,router:c}=this.props,d=[l().createElement(a.DropdownItem,{component:"button",isDisabled:t,key:"export-action",onClick:this.handleExportModalOpen},o.formatMessage(s.Z.detailsActionsExport))];return r&&d.unshift(l().createElement(a.DropdownItem,{component:"button",key:"price-list-action",isDisabled:t||e.includes(u.P)||0===n.length,onClick:()=>i(n[0],c)},o.formatMessage(s.Z.detailsActionsPriceList))),l().createElement(l().Fragment,null,l().createElement(a.Dropdown,{onSelect:this.handleOnSelect,toggle:l().createElement(a.KebabToggle,{onToggle:this.handleOnToggle}),isOpen:this.state.isDropdownOpen,isPlain:!0,position:"right",dropdownItems:d}),this.getExportModal())}}const g=(0,d.X1)(((e,t)=>({}))),y={redirectToCostModel:p.F0.redirectToCostModelFromSourceUuid},S=(0,i.connect)(g,y)(h),f=(0,n.ZP)((0,m.E)(S))}}]);