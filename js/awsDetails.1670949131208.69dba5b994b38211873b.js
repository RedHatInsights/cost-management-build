"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[3043],{15265:(e,t,r)=>{r.d(t,{LA:()=>a,ZP:()=>l,mq:()=>o});var s=r(40400);const o={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},a=(0,s.IU)(o),l=a},80965:(e,t,r)=>{r.d(t,{V_:()=>a,ZP:()=>l,jm:()=>o});var s=r(40400);const o={name:"MinusIcon",height:512,width:448,svgPath:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0},a=(0,s.IU)(o),l=a},33605:(e,t)=>{t.o3={name:"--pf-global--Color--100",value:"#151515",var:"var(--pf-global--Color--100)"},t.ZP=t.o3},40794:(e,t)=>{t.zf={name:"--pf-global--FontSize--xs",value:"0.75rem",var:"var(--pf-global--FontSize--xs)"},t.ZP=t.zf},12289:(e,t)=>{t.Jd={name:"--pf-global--disabled-color--100",value:"#6a6e73",var:"var(--pf-global--disabled-color--100)"},t.ZP=t.Jd},11331:(e,t)=>{t.po={name:"--pf-global--spacer--3xl",value:"4rem",var:"var(--pf-global--spacer--3xl)"},t.ZP=t.po},43789:(e,t)=>{t.Q8={name:"--pf-global--spacer--xs",value:"0.25rem",var:"var(--pf-global--spacer--xs)"},t.ZP=t.Q8},15984:(e,t,r)=>{r.d(t,{Z:()=>n});var s=r(85893),o=r(54653),a=r(1915),l=function(){return l=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)};const n=function(){return(0,s.jsxs)(o.EmptyState,l({variant:o.EmptyStateVariant.large,className:"ins-c-empty-state__unavailable pf-m-redhat-font"},{children:[(0,s.jsx)(o.EmptyStateIcon,{icon:a.ExclamationCircleIcon}),(0,s.jsx)(o.Title,l({headingLevel:"h5",size:"lg"},{children:"This page is temporarily unavailable"})),(0,s.jsxs)(o.EmptyStateBody,{children:["Try refreshing the page. If the problem persists, contact your organization administrator or visit our",(0,s.jsxs)("a",l({href:"https://status.redhat.com/",target:"_blank",rel:"noopener noreferrer"},{children:[" ","status page"]}))," ","for known outages."]})]}))}},98485:(e,t,r)=>{r.d(t,{L:()=>l});var s=r(80965),o=r(92950),a=r.n(o);const l=()=>a().createElement("span",{className:"emptyValueContainer"},a().createElement(s.V_,null))},11058:(e,t,r)=>{r.d(t,{T:()=>S});var s=r(54653),o=r(97027),a=r(92950),l=r.n(a),n=r(74806),i=r(77760),c=r(1156),d=r(22928),p=r(64703);const u={costSelector:{display:"flex",alignItems:"center"},costLabel:{marginBottom:0,marginRight:r(32412).ZP.var,whiteSpace:"nowrap"}},h=[{desc:o.Z.costTypeAmortizedDesc,label:o.Z.costTypeAmortized,value:d.M.amortized},{desc:o.Z.costTypeBlendedDesc,label:o.Z.costTypeBlended,value:d.M.blended},{desc:o.Z.costTypeUnblendedDesc,label:o.Z.costTypeUnblended,value:d.M.unblended}];class g extends l().Component{constructor(){super(...arguments),this.defaultState={isSelectOpen:!1},this.state=Object.assign({},this.defaultState),this.getSelect=()=>{const{costType:e,isDisabled:t}=this.props,{isSelectOpen:r}=this.state,o=this.getSelectOptions(),a=o.find((t=>t.value===e));return l().createElement(s.Select,{className:"selectOverride",id:"costTypeSelect",isDisabled:t,isOpen:r,onSelect:this.handleSelect,onToggle:this.handleToggle,selections:a,variant:s.SelectVariant.single},o.map((e=>l().createElement(s.SelectOption,{description:e.desc,key:e.value,value:e}))))},this.getSelectOptions=()=>{const{intl:e}=this.props,t=[];return h.map((r=>{t.push({desc:e.formatMessage(r.desc),toString:()=>e.formatMessage(r.label),value:r.value})})),t},this.handleSelect=(e,t)=>{const{onSelect:r}=this.props;(0,p.M1)(t.value),this.setState({isSelectOpen:!1},(()=>{r&&r(t.value)}))},this.handleToggle=e=>{this.setState({isSelectOpen:e})}}render(){const{intl:e}=this.props;return(0,p.eu)(),l().createElement("div",{style:u.costSelector},l().createElement(s.Title,{headingLevel:"h3",size:"md",style:u.costLabel},e.formatMessage(o.Z.costTypeLabel)),this.getSelect())}}const m=(0,c.X1)((()=>({}))),y=(0,i.connect)(m,{})(g),S=(0,n.ZP)(y)},76386:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_e});var s=r(54653),o=r(1326),a=r(76966),l=r(84717),n=r(39333),i=r(6456),c=r(97027),d=r(92950),p=r.n(d),u=r(74806),h=r(77760),g=r(52471),m=r(55672),y=r(2985),S=r(47947),v=r(40493),f=r(37269),b=r(19727),E=r(86482),O=r(10066),x=r(1156),T=r(78898),P=r(62331),C=r(15920);function M(e={}){return e.account?"account":e.org_unit_id?"org_unit_id":e.region?"region":e.service?"service":"date"}var B=r(69511),Z=r(22928),_=r(64703),w=r(5842),F=r(49382),k=r(98499),D=r(32412);const I={awsDetails:{minHeight:"100%"},content:{paddingBottom:k.ZP.value,paddingTop:k.ZP.value},paginationContainer:{marginLeft:k.ZP.value,marginRight:k.ZP.value},pagination:{backgroundColor:F.ZP.value,paddingBottom:D.ZP.value,paddingTop:D.ZP.value},tableContainer:{marginLeft:k.ZP.value,marginRight:k.ZP.value}};var A=r(96740),V=r(50081),R=r(60021),j=r(6450),L=r(11058),$=r(87560),q=r(45087),X=r(91778),z=r(33605),Q=r(54881),N=r(48196);const W={costValue:{marginTop:k.ZP.var,marginBottom:0},costLabelUnit:{fontSize:Q.ZP.value,color:z.ZP.var},costType:{display:"flex",marginLeft:D.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:F.ZP.var,padding:k.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},title:{paddingBottom:N.ZP.var}},G=[{label:"account",value:"account"},{label:"service",value:"service"},{label:"region",value:"region"}],J=A.t.aws,H=V.L.aws;class U extends p().Component{constructor(){super(...arguments),this.handleCostTypeSelected=e=>{const{onCostTypeSelected:t}=this.props;t&&t(e)}}render(){const{costType:e,currency:t,groupBy:r,isCurrencyFeatureEnabled:o,isExportsFeatureEnabled:a,onCurrencySelected:l,onGroupBySelected:n,providers:i,providersError:d,report:u,intl:h}=this.props,g=u&&!d&&i&&i.meta&&i.meta.count>0,m=u&&u.meta&&u.meta.total&&u.meta.total.cost&&u.meta.total.cost.total;return p().createElement("header",{style:W.header},p().createElement("div",{style:W.headerContent},p().createElement(s.Title,{headingLevel:"h1",style:W.title,size:s.TitleSizes["2xl"]},h.formatMessage(c.Z.awsDetailsTitle)),p().createElement("div",{style:W.headerContentRight},o&&p().createElement(j.F,{currency:t,onSelect:l}),a&&p().createElement(R.b,null))),p().createElement("div",{style:W.headerContent},p().createElement("div",{style:W.headerContentLeft},p().createElement($.X,{getIdKeyForGroupBy:M,groupBy:r,isDisabled:!g,onSelected:n,options:G,orgReportPathsType:J,showOrgs:!0,showTags:!0,tagReportPathsType:H}),p().createElement("div",{style:W.costType},p().createElement(L.T,{costType:e,onSelect:this.handleCostTypeSelected}))),Boolean(g)&&p().createElement("div",null,p().createElement(s.Title,{headingLevel:"h2",style:W.costValue,size:s.TitleSizes["4xl"]},(0,X.xG)(m?u.meta.total.cost.total.value:0,m?u.meta.total.cost.total.units:"USD")),p().createElement("div",{style:W.dateTitle},(0,q.J4)()))))}}const K=(0,x.X1)(((e,t)=>{const r=(0,l.H)(P.NT),s=P.aX.selectProviders(e,o.l.all,r),a=P.aX.selectProvidersError(e,o.l.all,r),n=P.aX.selectProvidersFetchStatus(e,o.l.all,r);return{isCurrencyFeatureEnabled:T.iJ.selectIsCurrencyFeatureEnabled(e),isExportsFeatureEnabled:T.iJ.selectIsExportsFeatureEnabled(e),providers:(0,E.BV)(s,o.l.aws),providersError:a,providersFetchStatus:n,providersQueryString:r}})),Y=(0,u.ZP)((0,h.connect)(K,{})(U));var ee=r(79655),te=r(91919),re=r(98485),se=r(62423),oe=r(90569),ae=r(90302),le=r(54583);const ne=i.K.aws;class ie extends p().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{groupBy:e,groupByOrg:t,groupByTagKey:r,intl:s,isAllSelected:o,report:a,router:l,selectedItems:i}=this.props;if(!a)return;const d=[],u=(0,B.c)({report:a,idKey:r||(t?"org_entities":e)}),h=r||t?[{name:""},{name:t?s.formatMessage(c.Z.names,{count:2}):s.formatMessage(c.Z.tagNames)},{name:s.formatMessage(c.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:s.formatMessage(c.Z.cost),style:ae.W.costColumn},u.length&&{isSortable:!0}),{name:""}]:[{name:""},Object.assign({orderBy:"account"===e?"account_alias":e,name:s.formatMessage(c.Z.detailsResourceNames,{value:e})},u.length&&{isSortable:!0}),{name:s.formatMessage(c.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:s.formatMessage(c.Z.cost),style:ae.W.costColumn},u.length&&{isSortable:!0}),{name:""}];u.map(((s,a)=>{const c=this.getTotalCost(s,a),u=this.getMonthOverMonthCost(s,a),h=s&&s.label&&null!==s.label?s.label:"",g=h===`${n.Xq}${e}`||h===`${n.Xq}${r}`,m=s.id&&s.id!==s.label?p().createElement("div",{style:ae.W.infoDescription},s.id):null,y=this.getActions(s,g),S=g?h:p().createElement(ee.rU,{to:(0,le.Zc)({basePath:te.Hb.awsDetailsBreakdown,description:s.id,groupBy:e,groupByOrg:t,id:s.id,router:l,title:s.label,type:s.type})},h);d.push({cells:[{},{value:p().createElement("div",null,S,m)},{value:p().createElement("div",null,u)},{value:p().createElement("div",null,c)},{value:p().createElement("div",null,y)}],item:s,selected:o||i&&void 0!==i.find((e=>e.id===s.id)),selectionDisabled:g})})),this.setState({columns:h,rows:d})},this.getActions=(e,t=!1)=>{const{groupBy:r,reportQueryString:s}=this.props;return p().createElement(se.e,{groupBy:r,isDisabled:t,item:e,reportPathsType:ne,reportQueryString:s})},this.getMonthOverMonthCost=(e,t)=>{const{intl:r}=this.props,s=(0,X.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),o=null!==e.delta_percent?(0,X.rl)(Math.abs(e.delta_percent)):0,a=!(0===o||"0.00"===o),l=null!==e.delta_percent;let n;return a&&(n="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(n+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(n+=" increase")),l?p().createElement("div",{className:"monthOverMonthOverride"},p().createElement("div",{className:n,key:`month-over-month-cost-${t}`},a?r.formatMessage(c.Z.percent,{value:o}):p().createElement(re.L,null),Boolean(a&&null!==e.delta_percent&&e.delta_value>0)&&p().createElement("span",{className:"fa fa-sort-up",style:ae.W.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(a&&null!==e.delta_percent&&e.delta_value<0)&&p().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},ae.W.infoArrow),ae.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),p().createElement("div",{style:ae.W.infoDescription,key:`month-over-month-info-${t}`},(0,q.Y)(s))):(0,q.Tf)()},this.getTotalCost=(e,t)=>{const{report:r,intl:s}=this.props,o=r&&r.meta&&r.meta.total&&r.meta.total.cost&&r.meta.total.cost.total?r.meta.total.cost.total.value:0,a=0===o?o.toFixed(2):(e.cost.total.value/o*100).toFixed(2);return p().createElement(p().Fragment,null,(0,X.xG)(e.cost.total.value,e.cost.total.units),p().createElement("div",{style:ae.W.infoDescription,key:`total-cost-${t}`},s.formatMessage(c.Z.percentOfCost,{value:a})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{report:t,selectedItems:r}=this.props,s=t&&t.data?JSON.stringify(t.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")===s&&e.selectedItems===r||this.initDatum()}render(){const{isLoading:e,onSelected:t,onSort:r,selectedItems:s}=this.props,{columns:o,rows:a}=this.state;return p().createElement(oe.w,{columns:o,isLoading:e,onSelected:t,onSort:r,rows:a,selectedItems:s})}}const ce=(0,u.ZP)((0,w.E)(ie));var de=r(36116),pe=r(70539),ue=r(98449),he=r(48949),ge=r(94282);const me=A.t.aws,ye=A.J.org,Se=V.L.aws,ve=V.Q.tag;class fe extends p().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,orgReport:t,tagReport:r}=this.props,s=[{name:e.formatMessage(c.Z.filterByValues,{value:"account"}),key:"account"},{name:e.formatMessage(c.Z.filterByValues,{value:"service"}),key:"service"},{name:e.formatMessage(c.Z.filterByValues,{value:"region"}),key:"region"}];return t&&t.data&&t.data.length&&s.push({name:e.formatMessage(c.Z.filterByValues,{value:"org_unit_id"}),key:n.dV}),r&&r.data&&r.data.length&&s.push({name:e.formatMessage(c.Z.filterByValues,{value:"tag"}),key:n.up}),s}}componentDidMount(){const{fetchOrg:e,fetchTag:t,orgReportFetchStatus:r,orgQueryString:s,tagReportFetchStatus:o,tagQueryString:a}=this.props;this.setState({categoryOptions:this.getCategoryOptions()},(()=>{r!==x.iF.inProgress&&e(me,ye,s),o!==x.iF.inProgress&&t(Se,ve,a)}))}componentDidUpdate(e){const{fetchOrg:t,fetchTag:r,orgReport:s,orgReportFetchStatus:o,query:a,orgQueryString:l,tagReport:n,tagReportFetchStatus:i,tagQueryString:c}=this.props;(0,ge.X)(s,e.orgReport)&&(0,ge.X)(n,e.tagReport)?a&&!(0,ge.X)(a,e.query)&&(o!==x.iF.inProgress&&t(me,ye,l),i!==x.iF.inProgress&&r(Se,ve,c)):this.setState({categoryOptions:this.getCategoryOptions()},(()=>{o!==x.iF.inProgress&&t(me,ye,l),i!==x.iF.inProgress&&r(Se,ve,c)}))}render(){const{groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isExportDisabled:s,itemsPerPage:o,itemsTotal:a,onBulkSelected:l,onExportClicked:n,onFilterAdded:i,onFilterRemoved:c,orgReport:d,pagination:u,query:h,selectedItems:g,tagReport:m}=this.props,{categoryOptions:y}=this.state;return p().createElement(pe.k,{categoryOptions:y,groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isExportDisabled:s,itemsPerPage:o,itemsTotal:a,onBulkSelected:l,onExportClicked:n,onFilterAdded:i,onFilterRemoved:c,orgReport:d,pagination:u,query:h,resourcePathsType:de.C.aws,selectedItems:g,showBulkSelect:!0,showExport:!0,showFilter:!0,tagReport:m,tagReportPathsType:Se})}}const be=(0,x.X1)(((e,t)=>{const r={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3},s=(0,n.pm)(Object.assign({},r)),o=he.ux.selectTag(e,Se,ve,s),a=he.ux.selectTagFetchStatus(e,Se,ve,s),l=(0,n.pm)(Object.assign({},r));return{orgReport:ue.zE.selectOrg(e,me,ye,l),orgReportFetchStatus:ue.zE.selectOrgFetchStatus(e,me,ye,l),orgQueryString:l,tagReport:o,tagReportFetchStatus:a,tagQueryString:s}})),Ee={fetchOrg:ue.Lp.T7,fetchTag:he.xr.Xt},Oe=(0,h.connect)(be,Ee)(fe),xe=(0,u.ZP)(Oe),Te={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},exclude:{},filter_by:{},group_by:{account:"*"},order_by:{cost:"desc"}},Pe=i.C.cost,Ce=i.K.aws;class Me extends p().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,r=M(e.group_by),s=(0,f.qV)(e)||r;return(0,B.c)({report:t,idKey:s===n.dV?"org_entities":s})},this.getExportModal=e=>{const{query:t,report:r,reportQueryString:s}=this.props,{isAllSelected:o,isExportModalOpen:a,selectedItems:l}=this.state,i=M(t.group_by),c=(0,f.qV)(t),d=r&&r.meta?r.meta.count:0,u=[];return l.map((e=>{e.label!==`${n.Xq}${i}`&&e.label!==`${n.Xq}${c}`&&u.push(e)})),p().createElement(v.X,{count:o?d:u.length,isAllItems:(o||l.length===d)&&e.length>0,groupBy:c?`${n.P}${c}`:i,isOpen:a,items:u,onClose:this.handleExportModalClose,reportPathsType:Ce,reportQueryString:s})},this.getPagination=(e=!1)=>{const{intl:t,query:r,router:o,report:a}=this.props,l=a&&a.meta?a.meta.count:0,n=a&&a.meta&&a.meta.filter&&a.meta.filter.limit?a.meta.filter.limit:Te.filter.limit,i=(a&&a.meta&&a.meta.filter&&a.meta.filter.offset?a.meta.filter.offset:Te.filter.offset)/n+1;return p().createElement(s.Pagination,{isCompact:!e,itemCount:l,onPerPageSelect:(e,t)=>(0,b.xh)(r,o,t),onSetPage:(e,t)=>(0,b.$9)(r,o,a,t),page:i,perPage:n,titles:{paginationTitle:t.formatMessage(c.Z.paginationTitle,{title:t.formatMessage(c.Z.aws),placement:e?"bottom":"top"})},variant:e?s.PaginationVariant.bottom:s.PaginationVariant.top,widgetId:"exports-pagination"+(e?"-bottom":"")})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:r,reportQueryString:s,router:o}=this.props,{isAllSelected:a,selectedItems:l}=this.state,i=M(e.group_by),c=(0,f.qV)(e),d=(0,f.OA)(e);return p().createElement(ce,{groupBy:c?`${n.P}${c}`:i,groupByTagKey:c,groupByOrg:d,isAllSelected:a,isLoading:r===x.iF.inProgress,onSelected:this.handleSelected,onSort:(t,r)=>(0,b.yB)(e,o,t,r),report:t,reportQueryString:s,selectedItems:l})},this.getToolbar=e=>{const{query:t,router:r,report:s}=this.props,{isAllSelected:o,selectedItems:a}=this.state,l=M(t.group_by),i=(0,f.qV)(t),c=s&&s.meta?s.meta.count:0;return p().createElement(xe,{groupBy:i?`${n.P}${i}`:l,isAllSelected:o,isExportDisabled:0===e.length||!o&&0===a.length,itemsPerPage:e.length,itemsTotal:c,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,b.$3)(t,r,e),onFilterRemoved:e=>(0,b.q7)(t,r,e),pagination:this.getPagination(),query:t,selectedItems:a})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{query:t,router:r}=this.props;let s=e,o="*";-1!==e.indexOf(n.dV)&&(s=n.dV.substring(0,n.dV.length),o=e.slice(n.dV.length));const a=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{group_by:{[s]:o},order_by:{cost:"desc"}});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{r.navigate((0,O.Z)(a,r.location,!0),{replace:!0})}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:r,selectedItems:s}=this.state;let o=[...r?this.getComputedItems():s];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.updateReport=()=>{const{fetchReport:e,query:t,reportQueryString:r,router:s}=this.props;s.location.search?e(Ce,Pe,r):s.navigate((0,O.Z)({exclude:t?t.exclude:void 0,filter_by:t?t.filter_by:void 0,group_by:t?t.group_by:void 0,order_by:{cost:"desc"}},s.location),{replace:!0})},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{report:r,reportError:s,reportQueryString:o,router:a}=this.props,{selectedItems:l}=this.state,n=e.reportQueryString!==o,i=!r&&!s,c=!a.location.search,d=t.selectedItems!==l;(n||i||c||d)&&this.updateReport()}render(){const{costType:e,currency:t,intl:r,providers:s,providersFetchStatus:a,query:l,report:n,reportError:i,reportFetchStatus:d,router:u}=this.props,h=M(l.group_by),v=this.getComputedItems(),f=r.formatMessage(c.Z.awsDetailsTitle);if(i)return p().createElement(S.W,{title:f});if(a===x.iF.inProgress)return p().createElement(g.g,{title:f});if(a===x.iF.complete){if(s&&s.meta&&0===s.meta.count)return p().createElement(y.L,{providerType:o.l.aws,title:f});if(!(0,E.g8)(s))return p().createElement(m.J,{title:f})}return p().createElement("div",{style:I.awsDetails},p().createElement(Y,{costType:e,currency:t,groupBy:h,onCostTypeSelected:e=>(0,b.jl)(l,u,e),onCurrencySelected:e=>(0,b._s)(l,u,e),onGroupBySelected:this.handleGroupBySelected,report:n}),p().createElement("div",{style:I.content},this.getToolbar(v),this.getExportModal(v),d===x.iF.inProgress?p().createElement(g.g,null):p().createElement(p().Fragment,null,p().createElement("div",{style:I.tableContainer},this.getTable()),p().createElement("div",{style:I.paginationContainer},p().createElement("div",{style:I.pagination},this.getPagination(!0))))))}}const Be=(0,x.X1)(((e,{router:t})=>{const r=(0,a.mB)(t.location.search),s=(0,Z.u)(),n=T.iJ.selectIsCurrencyFeatureEnabled(e)?(0,_.zC)():void 0,i={delta:"cost",filter:Object.assign(Object.assign({},Te.filter),r.filter),filter_by:r.filter_by||Te.filter_by,exclude:r.exclude||Te.exclude,group_by:r.group_by||Te.group_by,order_by:r.order_by||Te.order_by},c=(0,a.pm)(Object.assign(Object.assign({},i),{cost_type:s,currency:n})),d=C.ZV.selectReport(e,Ce,Pe,c),p=C.ZV.selectReportError(e,Ce,Pe,c),u=C.ZV.selectReportFetchStatus(e,Ce,Pe,c),h=(0,l.H)(P.NT),g=P.aX.selectProviders(e,o.l.all,h),m=P.aX.selectProvidersError(e,o.l.all,h),y=P.aX.selectProvidersFetchStatus(e,o.l.all,h);return{costType:s,currency:n,providers:(0,E.BV)(g,o.l.aws),providersError:m,providersFetchStatus:y,query:i,report:d,reportError:p,reportFetchStatus:u,reportQueryString:c}})),Ze={fetchReport:C.nx.fetchReport},_e=(0,u.ZP)((0,w.E)((0,h.connect)(Be,Ze)(Me)))},62423:(e,t,r)=>{r.d(t,{e:()=>v});var s=r(54653),o=r(39333),a=r(97027),l=r(92950),n=r.n(l),i=r(74806),c=r(77760),d=r(40493),p=r(1156),u=r(58613),h=r(5842);class g extends n().Component{constructor(e,t){super(e,t),this.defaultState={isDropdownOpen:!1,isExportModalOpen:!1},this.state=Object.assign({},this.defaultState),this.getExportModal=()=>{const{groupBy:e,item:t,reportPathsType:r,reportQueryString:s}=this.props,{isExportModalOpen:o}=this.state;return n().createElement(d.X,{count:1,groupBy:e,isOpen:o,items:[t],onClose:this.handleExportModalClose,reportPathsType:r,reportQueryString:s})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleOnSelect=()=>{const{isDropdownOpen:e}=this.state;this.setState({isDropdownOpen:!e})},this.handleOnToggle=e=>{this.setState({isDropdownOpen:e})},this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleOnToggle=this.handleOnToggle.bind(this),this.handleOnSelect=this.handleOnSelect.bind(this)}render(){const{groupBy:e,isDisabled:t,showPriceListOption:r,intl:l,item:{source_uuid:i},redirectToCostModel:c,router:d}=this.props,p=[n().createElement(s.DropdownItem,{component:"button",isDisabled:t,key:"export-action",onClick:this.handleExportModalOpen},l.formatMessage(a.Z.detailsActionsExport))];return r&&p.unshift(n().createElement(s.DropdownItem,{component:"button",key:"price-list-action",isDisabled:t||e.includes(o.P)||0===i.length,onClick:()=>c(i[0],d)},l.formatMessage(a.Z.detailsActionsPriceList))),n().createElement(n().Fragment,null,n().createElement(s.Dropdown,{onSelect:this.handleOnSelect,toggle:n().createElement(s.KebabToggle,{onToggle:this.handleOnToggle}),isOpen:this.state.isDropdownOpen,isPlain:!0,position:"right",dropdownItems:p}),this.getExportModal())}}const m=(0,p.X1)(((e,t)=>({}))),y={redirectToCostModel:u.F0.redirectToCostModelFromSourceUuid},S=(0,c.connect)(m,y)(g),v=(0,i.ZP)((0,h.E)(S))},90302:(e,t,r)=>{r.d(t,{W:()=>i});var s=r(49382),o=r(12289),a=r(40794),l=r(11331),n=r(43789);const i={costColumn:{textAlign:"right"},defaultLabel:{minWidth:"63px"},emptyState:{backgroundColor:s.ZP.value,display:"flex",justifyContent:"center",paddingTop:l.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:n.ZP.value},infoDescription:{color:o.ZP.value,fontSize:a.ZP.value},nameColumn:{width:"1%"}}},90569:(e,t,r)=>{r.d(t,{w:()=>m});var s=r(54653),o=r(52636),a=r(14844),l=r(79112),n=r(97027),i=r(92950),c=r.n(i),d=r(74806),p=r(42901),u=r(5842),h=r(90302);class g extends c().Component{constructor(e){super(e),this.getEmptyState=()=>{const{intl:e,router:t}=this.props,r=(0,l.mB)(t.location.search);if(r.filter_by)for(const e of Object.values(r.filter_by))if("*"!==e)return c().createElement(p.c,{filter:e,showMargin:!1});return c().createElement(s.EmptyState,null,c().createElement(s.EmptyStateIcon,{icon:o.Xk}),c().createElement(s.EmptyStateBody,null,e.formatMessage(n.Z.detailsEmptyState)))},this.getSortBy=e=>{const{columns:t,router:r}=this.props,s=t[e].orderBy,o=(0,l.mB)(r.location.search),a=o&&o.order_by&&o.order_by[s];return a?{index:e,direction:a}:{}},this.getSortParams=e=>({sortBy:this.getSortBy(e),onSort:this.handleOnSort,columnIndex:e}),this.handleOnSelect=(e,t,r)=>{const{onSelected:s,rows:o}=this.props;let a,l=[];-1===r?a=o.map((e=>(e.selected=t,e))):(a=[...o],a[r].selected=t,l=[a[r].item]),this.setState({rows:o},(()=>{s&&s(l,t)}))},this.handleOnSort=(e,t,r)=>{const{columns:s,onSort:o}=this.props;o&&o(s[t].orderBy,r===a.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}render(){const{columns:e,intl:t,isLoading:r,rows:o}=this.props;return c().createElement(c().Fragment,null,c().createElement(a.TableComposable,{"aria-label":t.formatMessage(n.Z.dataTableAriaLabel),gridBreakPoint:"grid-2xl"},c().createElement(a.Thead,null,c().createElement(a.Tr,null,e.map(((e,t)=>c().createElement(a.Th,{key:`col-${t}-${e.value}`,modifier:"nowrap",sort:e.isSortable?this.getSortParams(t):void 0,style:e.style},e.name))))),c().createElement(a.Tbody,null,r?c().createElement(a.Tr,null,c().createElement(a.Td,{colSpan:100},c().createElement(s.Bullseye,null,c().createElement("div",{style:{textAlign:"center"}},c().createElement(s.Spinner,{size:"xl"}))))):o.map(((t,r)=>c().createElement(a.Tr,{key:`row-${r}`},t.cells.map(((s,o)=>0===o?c().createElement(a.Td,{dataLabel:e[o].name,key:`cell-${o}-${r}`,modifier:"nowrap",select:{disable:t.selectionDisabled,isSelected:t.selected,onSelect:(e,t)=>this.handleOnSelect(e,t,r),rowIndex:r}}):c().createElement(a.Td,{dataLabel:e[o].name,key:`cell-${r}-${o}`,modifier:"nowrap",isActionCell:o===t.cells.length-1},s.value)))))))),Boolean(0===o.length)&&c().createElement("div",{style:h.W.emptyState},this.getEmptyState()))}}const m=(0,d.ZP)((0,u.E)(g))},54583:(e,t,r)=>{r.d(t,{Tm:()=>o,Zc:()=>a,yW:()=>l});var s=r(39333);const o=({basePath:e,description:t,groupBy:r,isPlatformCosts:o,label:a,router:l})=>{const n=(0,s.mB)(l.location.search),i=Object.assign(Object.assign(Object.assign(Object.assign({},n),t&&t!==a&&{[s.eG]:t}),o&&{[s.yG]:a}),{group_by:{[r]:o?"*":a}});return o&&(i.filter||(i.filter={}),i.filter.category=s.rx),`${e}?${(0,s.IV)(i)}`},a=({basePath:e,description:t,groupBy:r,groupByOrg:o,id:a,router:l,title:n,type:i})=>{const c=(0,s.mB)(l.location.search),d=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},c),t&&t!==n&&{[s.eG]:t}),n&&{[s.yG]:n}),o&&{[s.dV]:o}),{group_by:{[r]:a}});return"account"===i?(d.filter||(d.filter={}),d.filter.account=a,d.group_by={[s.dV]:o}):"organizational_unit"===i&&(d.group_by={[s.dV]:a}),`${e}?${(0,s.IV)(d)}`},l=e=>e&&e.filter&&e.filter.category===s.rx}}]);
//# sourceMappingURL=../sourcemaps/awsDetails.5015c2cd783cbd72678ba5f2a057fdc3.js.map