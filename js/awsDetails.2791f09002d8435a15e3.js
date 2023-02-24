"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[3043],{15265:(e,t,r)=>{r.d(t,{LA:()=>a,ZP:()=>l,mq:()=>o});var s=r(40400);const o={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},a=(0,s.IU)(o),l=a},80965:(e,t,r)=>{r.d(t,{V_:()=>a,ZP:()=>l,jm:()=>o});var s=r(40400);const o={name:"MinusIcon",height:512,width:448,svgPath:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0},a=(0,s.IU)(o),l=a},33605:(e,t)=>{t.o3={name:"--pf-global--Color--100",value:"#151515",var:"var(--pf-global--Color--100)"},t.ZP=t.o3},40794:(e,t)=>{t.zf={name:"--pf-global--FontSize--xs",value:"0.75rem",var:"var(--pf-global--FontSize--xs)"},t.ZP=t.zf},12289:(e,t)=>{t.Jd={name:"--pf-global--disabled-color--100",value:"#6a6e73",var:"var(--pf-global--disabled-color--100)"},t.ZP=t.Jd},11331:(e,t)=>{t.po={name:"--pf-global--spacer--3xl",value:"4rem",var:"var(--pf-global--spacer--3xl)"},t.ZP=t.po},43789:(e,t)=>{t.Q8={name:"--pf-global--spacer--xs",value:"0.25rem",var:"var(--pf-global--spacer--xs)"},t.ZP=t.Q8},15984:(e,t,r)=>{r.d(t,{Z:()=>n});var s=r(85893),o=r(76481),a=r(15138),l=function(){return l=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)};const n=function(){return(0,s.jsxs)(o.EmptyState,l({variant:o.EmptyStateVariant.large,className:"ins-c-empty-state__unavailable pf-m-redhat-font"},{children:[(0,s.jsx)(o.EmptyStateIcon,{icon:a.ExclamationCircleIcon}),(0,s.jsx)(o.Title,l({headingLevel:"h5",size:"lg"},{children:"This page is temporarily unavailable"})),(0,s.jsxs)(o.EmptyStateBody,{children:["Try refreshing the page. If the problem persists, contact your organization administrator or visit our",(0,s.jsxs)("a",l({href:"https://status.redhat.com/",target:"_blank",rel:"noopener noreferrer"},{children:[" ","status page"]}))," ","for known outages."]})]}))}},98485:(e,t,r)=>{r.d(t,{L:()=>l});var s=r(80965),o=r(92950),a=r.n(o);const l=()=>a().createElement("span",{className:"emptyValueContainer"},a().createElement(s.V_,null))},11058:(e,t,r)=>{r.d(t,{T:()=>S});var s=r(76481),o=r(97027),a=r(92950),l=r.n(a),n=r(74806),i=r(77760),c=r(1156),d=r(22928),p=r(15829);const u={costSelector:{display:"flex",alignItems:"center"},costLabel:{marginBottom:0,marginRight:r(32412).ZP.var,whiteSpace:"nowrap"}},h=[{desc:o.Z.costTypeAmortizedDesc,label:o.Z.costTypeAmortized,value:d.M.amortized},{desc:o.Z.costTypeBlendedDesc,label:o.Z.costTypeBlended,value:d.M.blended},{desc:o.Z.costTypeUnblendedDesc,label:o.Z.costTypeUnblended,value:d.M.unblended}];class g extends l().Component{constructor(){super(...arguments),this.defaultState={isSelectOpen:!1},this.state=Object.assign({},this.defaultState),this.getSelect=()=>{const{costType:e,isDisabled:t}=this.props,{isSelectOpen:r}=this.state,o=this.getSelectOptions(),a=o.find((t=>t.value===e));return l().createElement(s.Select,{className:"selectOverride",id:"costTypeSelect",isDisabled:t,isOpen:r,onSelect:this.handleSelect,onToggle:this.handleToggle,selections:a,variant:s.SelectVariant.single},o.map((e=>l().createElement(s.SelectOption,{description:e.desc,key:e.value,value:e}))))},this.getSelectOptions=()=>{const{intl:e}=this.props,t=[];return h.map((r=>{t.push({desc:e.formatMessage(r.desc),toString:()=>e.formatMessage(r.label),value:r.value})})),t},this.handleSelect=(e,t)=>{const{onSelect:r}=this.props;(0,p.M1)(t.value),this.setState({isSelectOpen:!1},(()=>{r&&r(t.value)}))},this.handleToggle=e=>{this.setState({isSelectOpen:e})}}render(){const{intl:e}=this.props;return(0,p.eu)(),l().createElement("div",{style:u.costSelector},l().createElement(s.Title,{headingLevel:"h3",size:"md",style:u.costLabel},e.formatMessage(o.Z.costTypeLabel)),this.getSelect())}}const m=(0,c.X1)((()=>({}))),y=(0,i.connect)(m,{})(g),S=(0,n.ZP)(y)},76386:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Fe});var s=r(76481),o=r(1326),a=r(76966),l=r(84717),n=r(6456),i=r(97027),c=r(92950),d=r.n(c),p=r(74806),u=r(77760),h=r(52471),g=r(55672),m=r(2985),y=r(47947),S=r(40493),v=r(37269),f=r(19727),b=r(86482),E=r(10066),O=r(1156),x=r(78898),T=r(62331),P=r(15920);function C(e={}){return e.account?"account":e.org_unit_id?"org_unit_id":e.region?"region":e.service?"service":"date"}var M=r(69511),B=r(22928),Z=r(15829),_=r(14483),w=r(5842),F=r(49382),k=r(98499),D=r(32412);const I={awsDetails:{minHeight:"100%"},content:{paddingBottom:k.ZP.value,paddingTop:k.ZP.value},paginationContainer:{marginLeft:k.ZP.value,marginRight:k.ZP.value},pagination:{backgroundColor:F.ZP.value,paddingBottom:D.ZP.value,paddingTop:D.ZP.value},tableContainer:{marginLeft:k.ZP.value,marginRight:k.ZP.value}};var A=r(96740),V=r(50081),R=r(60021),j=r(6450),L=r(11058),$=r(87560),q=r(45087),X=r(91778),z=r(33605),Q=r(54881),N=r(48196);const W={costValue:{marginTop:k.ZP.var,marginBottom:0},costLabelUnit:{fontSize:Q.ZP.value,color:z.ZP.var},costType:{display:"flex",marginLeft:D.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:F.ZP.var,padding:k.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},title:{paddingBottom:N.ZP.var}},G=[{label:"account",value:"account"},{label:"service",value:"service"},{label:"region",value:"region"}],J=A.t.aws,H=V.L.aws;class U extends d().Component{constructor(){super(...arguments),this.handleCostTypeSelected=e=>{const{onCostTypeSelected:t}=this.props;t&&t(e)}}render(){const{costType:e,currency:t,groupBy:r,isCurrencyFeatureEnabled:o,isExportsFeatureEnabled:a,onCurrencySelected:l,onGroupBySelected:n,providers:c,providersError:p,report:u,intl:h}=this.props,g=u&&!p&&c&&c.meta&&c.meta.count>0,m=u&&u.meta&&u.meta.total&&u.meta.total.cost&&u.meta.total.cost.total;return d().createElement("header",{style:W.header},d().createElement("div",{style:W.headerContent},d().createElement(s.Title,{headingLevel:"h1",style:W.title,size:s.TitleSizes["2xl"]},h.formatMessage(i.Z.awsDetailsTitle)),d().createElement("div",{style:W.headerContentRight},o&&d().createElement(j.F,{currency:t,onSelect:l}),a&&d().createElement(R.b,null))),d().createElement("div",{style:W.headerContent},d().createElement("div",{style:W.headerContentLeft},d().createElement($.X,{getIdKeyForGroupBy:C,groupBy:r,isDisabled:!g,onSelected:n,options:G,orgReportPathsType:J,showOrgs:!0,showTags:!0,tagReportPathsType:H}),d().createElement("div",{style:W.costType},d().createElement(L.T,{costType:e,onSelect:this.handleCostTypeSelected}))),Boolean(g)&&d().createElement("div",null,d().createElement(s.Title,{headingLevel:"h2",style:W.costValue,size:s.TitleSizes["4xl"]},(0,X.xG)(m?u.meta.total.cost.total.value:0,m?u.meta.total.cost.total.units:"USD")),d().createElement("div",{style:W.dateTitle},(0,q.J4)()))))}}const K=(0,O.X1)(((e,t)=>{const r=(0,l.H)(T.NT),s=T.aX.selectProviders(e,o.l.all,r),a=T.aX.selectProvidersError(e,o.l.all,r),n=T.aX.selectProvidersFetchStatus(e,o.l.all,r);return{isCurrencyFeatureEnabled:x.iJ.selectIsCurrencyFeatureEnabled(e),isExportsFeatureEnabled:x.iJ.selectIsExportsFeatureEnabled(e),providers:(0,b.BV)(s,o.l.aws),providersError:a,providersFetchStatus:n,providersQueryString:r}})),Y=(0,p.ZP)((0,u.connect)(K,{})(U));var ee=r(39836),te=r(91919),re=r(98485),se=r(62423),oe=r(90569),ae=r(90302),le=r(54583),ne=r(68025);const ie=n.K.aws;class ce extends d().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{groupBy:e,groupByOrg:t,groupByTagKey:r,intl:s,isAllSelected:o,report:a,router:l,selectedItems:n}=this.props;if(!a)return;const c=[],p=(0,M.c)({report:a,idKey:r||(t?"org_entities":e)}),u=r||t?[{name:""},{name:t?s.formatMessage(i.Z.names,{count:2}):s.formatMessage(i.Z.tagNames)},{name:s.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:s.formatMessage(i.Z.cost),style:ae.W.costColumn},p.length&&{isSortable:!0}),{name:""}]:[{name:""},Object.assign({orderBy:"account"===e?"account_alias":e,name:s.formatMessage(i.Z.detailsResourceNames,{value:e})},p.length&&{isSortable:!0}),{name:s.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:s.formatMessage(i.Z.cost),style:ae.W.costColumn},p.length&&{isSortable:!0}),{name:""}];p.map(((s,a)=>{const i=this.getTotalCost(s,a),p=this.getMonthOverMonthCost(s,a),u=s&&s.label&&null!==s.label?s.label:"",h=u===`${_.Xq}${e}`||u===`${_.Xq}${r}`,g=s.id&&s.id!==s.label?d().createElement("div",{style:ae.W.infoDescription},s.id):null,m=this.getActions(s,h),y=h?u:d().createElement(ee.Link,{to:(0,le.Zc)({basePath:(0,ne.dI)(te._.awsDetailsBreakdown.path),description:s.id,groupBy:e,groupByOrg:t,id:s.id,router:l,title:s.label,type:s.type})},u);c.push({cells:[{},{value:d().createElement("div",null,y,g)},{value:d().createElement("div",null,p)},{value:d().createElement("div",null,i)},{value:d().createElement("div",null,m)}],item:s,selected:o||n&&void 0!==n.find((e=>e.id===s.id)),selectionDisabled:h})})),this.setState({columns:u,rows:c})},this.getActions=(e,t=!1)=>{const{groupBy:r,reportQueryString:s}=this.props;return d().createElement(se.e,{groupBy:r,isDisabled:t,item:e,reportPathsType:ie,reportQueryString:s})},this.getMonthOverMonthCost=(e,t)=>{const{intl:r}=this.props,s=(0,X.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),o=null!==e.delta_percent?(0,X.rl)(Math.abs(e.delta_percent)):0,a=!(0===o||"0.00"===o),l=null!==e.delta_percent;let n;return a&&(n="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(n+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(n+=" increase")),l?d().createElement("div",{className:"monthOverMonthOverride"},d().createElement("div",{className:n,key:`month-over-month-cost-${t}`},a?r.formatMessage(i.Z.percent,{value:o}):d().createElement(re.L,null),Boolean(a&&null!==e.delta_percent&&e.delta_value>0)&&d().createElement("span",{className:"fa fa-sort-up",style:ae.W.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(a&&null!==e.delta_percent&&e.delta_value<0)&&d().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},ae.W.infoArrow),ae.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),d().createElement("div",{style:ae.W.infoDescription,key:`month-over-month-info-${t}`},(0,q.Y)(s))):(0,q.Tf)()},this.getTotalCost=(e,t)=>{const{report:r,intl:s}=this.props,o=r&&r.meta&&r.meta.total&&r.meta.total.cost&&r.meta.total.cost.total?r.meta.total.cost.total.value:0,a=0===o?o.toFixed(2):(e.cost.total.value/o*100).toFixed(2);return d().createElement(d().Fragment,null,(0,X.xG)(e.cost.total.value,e.cost.total.units),d().createElement("div",{style:ae.W.infoDescription,key:`total-cost-${t}`},s.formatMessage(i.Z.percentOfCost,{value:a})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{report:t,selectedItems:r}=this.props,s=t&&t.data?JSON.stringify(t.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")===s&&e.selectedItems===r||this.initDatum()}render(){const{isLoading:e,onSelected:t,onSort:r,selectedItems:s}=this.props,{columns:o,rows:a}=this.state;return d().createElement(oe.w,{columns:o,isLoading:e,onSelected:t,onSort:r,rows:a,selectedItems:s})}}const de=(0,p.ZP)((0,w.E)(ce));var pe=r(39333),ue=r(36116),he=r(70539),ge=r(98449),me=r(48949),ye=r(94282);const Se=A.t.aws,ve=A.J.org,fe=V.L.aws,be=V.Q.tag;class Ee extends d().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,orgReport:t,tagReport:r}=this.props,s=[{name:e.formatMessage(i.Z.filterByValues,{value:"account"}),key:"account"},{name:e.formatMessage(i.Z.filterByValues,{value:"service"}),key:"service"},{name:e.formatMessage(i.Z.filterByValues,{value:"region"}),key:"region"}];return t&&t.data&&t.data.length&&s.push({name:e.formatMessage(i.Z.filterByValues,{value:"org_unit_id"}),key:_.dV}),r&&r.data&&r.data.length&&s.push({name:e.formatMessage(i.Z.filterByValues,{value:"tag"}),key:_.up}),s}}componentDidMount(){const{fetchOrg:e,fetchTag:t,orgReportFetchStatus:r,orgQueryString:s,tagReportFetchStatus:o,tagQueryString:a}=this.props;this.setState({categoryOptions:this.getCategoryOptions()},(()=>{r!==O.iF.inProgress&&e(Se,ve,s),o!==O.iF.inProgress&&t(fe,be,a)}))}componentDidUpdate(e){const{fetchOrg:t,fetchTag:r,orgReport:s,orgReportFetchStatus:o,query:a,orgQueryString:l,tagReport:n,tagReportFetchStatus:i,tagQueryString:c}=this.props;(0,ye.X)(s,e.orgReport)&&(0,ye.X)(n,e.tagReport)?a&&!(0,ye.X)(a,e.query)&&(o!==O.iF.inProgress&&t(Se,ve,l),i!==O.iF.inProgress&&r(fe,be,c)):this.setState({categoryOptions:this.getCategoryOptions()},(()=>{o!==O.iF.inProgress&&t(Se,ve,l),i!==O.iF.inProgress&&r(fe,be,c)}))}render(){const{groupBy:e,isAllSelected:t,isBulkSelectDisabled:r,isDisabled:s,isExportDisabled:o,itemsPerPage:a,itemsTotal:l,onBulkSelected:n,onExportClicked:i,onFilterAdded:c,onFilterRemoved:p,orgReport:u,pagination:h,query:g,selectedItems:m,tagReport:y}=this.props,{categoryOptions:S}=this.state;return d().createElement(he.k,{categoryOptions:S,groupBy:e,isAllSelected:t,isDisabled:s,isBulkSelectDisabled:r,isExportDisabled:o,itemsPerPage:a,itemsTotal:l,onBulkSelected:n,onExportClicked:i,onFilterAdded:c,onFilterRemoved:p,orgReport:u,pagination:h,query:g,resourcePathsType:ue.C.aws,selectedItems:m,showBulkSelect:!0,showExport:!0,showFilter:!0,tagReport:y,tagReportPathsType:fe})}}const Oe=(0,O.X1)(((e,t)=>{const r={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3},s=(0,pe.pm)(Object.assign({},r)),o=me.ux.selectTag(e,fe,be,s),a=me.ux.selectTagFetchStatus(e,fe,be,s),l=(0,pe.pm)(Object.assign({},r));return{orgReport:ge.zE.selectOrg(e,Se,ve,l),orgReportFetchStatus:ge.zE.selectOrgFetchStatus(e,Se,ve,l),orgQueryString:l,tagReport:o,tagReportFetchStatus:a,tagQueryString:s}})),xe={fetchOrg:ge.Lp.T7,fetchTag:me.xr.Xt},Te=(0,u.connect)(Oe,xe)(Ee),Pe=(0,p.ZP)(Te),Ce={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},exclude:{},filter_by:{},group_by:{account:"*"},order_by:{cost:"desc"}},Me=n.C.cost,Be=n.K.aws;class Ze extends d().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,r=C(e.group_by),s=(0,v.qV)(e)||r;return(0,M.c)({report:t,idKey:s===_.dV?"org_entities":s})},this.getExportModal=e=>{const{query:t,report:r,reportQueryString:s}=this.props,{isAllSelected:o,isExportModalOpen:a,selectedItems:l}=this.state,n=C(t.group_by),i=(0,v.qV)(t),c=r&&r.meta?r.meta.count:0,p=[];return l.map((e=>{e.label!==`${_.Xq}${n}`&&e.label!==`${_.Xq}${i}`&&p.push(e)})),d().createElement(S.X,{count:o?c:p.length,isAllItems:(o||l.length===c)&&e.length>0,groupBy:i?`${_.P}${i}`:n,isOpen:a,items:p,onClose:this.handleExportModalClose,reportPathsType:Be,reportQueryString:s})},this.getPagination=(e=!1,t=!1)=>{const{intl:r,query:o,router:a,report:l}=this.props,n=l&&l.meta?l.meta.count:0,c=l&&l.meta&&l.meta.filter&&l.meta.filter.limit?l.meta.filter.limit:Ce.filter.limit,p=(l&&l.meta&&l.meta.filter&&l.meta.filter.offset?l.meta.filter.offset:Ce.filter.offset)/c+1;return d().createElement(s.Pagination,{isCompact:!t,isDisabled:e,itemCount:n,onPerPageSelect:(e,t)=>(0,f.xh)(o,a,t),onSetPage:(e,t)=>(0,f.$9)(o,a,l,t),page:p,perPage:c,titles:{paginationTitle:r.formatMessage(i.Z.paginationTitle,{title:r.formatMessage(i.Z.aws),placement:t?"bottom":"top"})},variant:t?s.PaginationVariant.bottom:s.PaginationVariant.top,widgetId:"exports-pagination"+(t?"-bottom":"")})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:r,reportQueryString:s,router:o}=this.props,{isAllSelected:a,selectedItems:l}=this.state,n=C(e.group_by),i=(0,v.qV)(e),c=(0,v.OA)(e);return d().createElement(de,{groupBy:i?`${_.P}${i}`:n,groupByTagKey:i,groupByOrg:c,isAllSelected:a,isLoading:r===O.iF.inProgress,onSelected:this.handleSelected,onSort:(t,r)=>(0,f.yB)(e,o,t,r),report:t,reportQueryString:s,selectedItems:l})},this.getToolbar=e=>{const{query:t,router:r,report:s}=this.props,{isAllSelected:o,selectedItems:a}=this.state,l=C(t.group_by),n=(0,v.qV)(t),i=0===e.length,c=s&&s.meta?s.meta.count:0;return d().createElement(Pe,{groupBy:n?`${_.P}${n}`:l,isAllSelected:o,isDisabled:i,isExportDisabled:i||!o&&0===a.length,itemsPerPage:e.length,itemsTotal:c,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,f.$3)(t,r,e),onFilterRemoved:e=>(0,f.q7)(t,r,e),pagination:this.getPagination(i),query:t,selectedItems:a})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{query:t,router:r}=this.props;let s=e,o="*";-1!==e.indexOf(_.dV)&&(s=_.dV.substring(0,_.dV.length),o=e.slice(_.dV.length));const a=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{group_by:{[s]:o},order_by:{cost:"desc"}});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{r.navigate((0,E.Z)(a,r.location,!0),{replace:!0})}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:r,selectedItems:s}=this.state;let o=[...r?this.getComputedItems():s];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.updateReport=()=>{const{fetchReport:e,reportQueryString:t}=this.props;e(Be,Me,t)},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{report:r,reportError:s,reportQueryString:o,router:a}=this.props,{selectedItems:l}=this.state,n=e.reportQueryString!==o,i=!r&&!s,c=!a.location.search,d=t.selectedItems!==l;(n||i||c||d)&&this.updateReport()}render(){const{costType:e,currency:t,intl:r,providers:s,providersFetchStatus:a,query:l,report:n,reportError:c,reportFetchStatus:p,router:u}=this.props,S=this.getComputedItems(),v=C(l.group_by),E=0===S.length,x=r.formatMessage(i.Z.awsDetailsTitle);if(c)return d().createElement(y.W,{title:x});if(a===O.iF.inProgress)return d().createElement(h.g,{title:x});if(a===O.iF.complete){if(s&&s.meta&&0===s.meta.count)return d().createElement(m.L,{providerType:o.l.aws,title:x});if(!(0,b.g8)(s))return d().createElement(g.J,{title:x})}return d().createElement("div",{style:I.awsDetails},d().createElement(Y,{costType:e,currency:t,groupBy:v,onCostTypeSelected:e=>(0,f.jl)(l,u,e),onCurrencySelected:e=>(0,f._s)(l,u,e),onGroupBySelected:this.handleGroupBySelected,report:n}),d().createElement("div",{style:I.content},this.getToolbar(S),this.getExportModal(S),p===O.iF.inProgress?d().createElement(h.g,null):d().createElement(d().Fragment,null,d().createElement("div",{style:I.tableContainer},this.getTable()),d().createElement("div",{style:I.paginationContainer},d().createElement("div",{style:I.pagination},this.getPagination(E,!0))))))}}const _e=(0,O.X1)(((e,{router:t})=>{const r=(0,a.mB)(t.location.search),s=(0,B.u)(),n=x.iJ.selectIsCurrencyFeatureEnabled(e)?(0,Z.zC)():void 0,i={delta:"cost",filter:Object.assign(Object.assign({},Ce.filter),r.filter),filter_by:r.filter_by||Ce.filter_by,exclude:r.exclude||Ce.exclude,group_by:r.group_by||Ce.group_by,order_by:r.order_by||Ce.order_by},c=(0,a.pm)(Object.assign(Object.assign({},i),{cost_type:s,currency:n})),d=P.ZV.selectReport(e,Be,Me,c),p=P.ZV.selectReportError(e,Be,Me,c),u=P.ZV.selectReportFetchStatus(e,Be,Me,c),h=(0,l.H)(T.NT),g=T.aX.selectProviders(e,o.l.all,h),m=T.aX.selectProvidersError(e,o.l.all,h),y=T.aX.selectProvidersFetchStatus(e,o.l.all,h);return{costType:s,currency:n,providers:(0,b.BV)(g,o.l.aws),providersError:m,providersFetchStatus:y,query:i,report:d,reportError:p,reportFetchStatus:u,reportQueryString:c}})),we={fetchReport:P.nx.fetchReport},Fe=(0,p.ZP)((0,w.E)((0,u.connect)(_e,we)(Ze)))},62423:(e,t,r)=>{r.d(t,{e:()=>v});var s=r(76481),o=r(97027),a=r(92950),l=r.n(a),n=r(74806),i=r(77760),c=r(40493),d=r(1156),p=r(58613),u=r(14483),h=r(5842);class g extends l().Component{constructor(e,t){super(e,t),this.defaultState={isDropdownOpen:!1,isExportModalOpen:!1},this.state=Object.assign({},this.defaultState),this.getExportModal=()=>{const{groupBy:e,item:t,reportPathsType:r,reportQueryString:s}=this.props,{isExportModalOpen:o}=this.state;return l().createElement(c.X,{count:1,groupBy:e,isOpen:o,items:[t],onClose:this.handleExportModalClose,reportPathsType:r,reportQueryString:s})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleOnSelect=()=>{const{isDropdownOpen:e}=this.state;this.setState({isDropdownOpen:!e})},this.handleOnToggle=e=>{this.setState({isDropdownOpen:e})},this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleOnToggle=this.handleOnToggle.bind(this),this.handleOnSelect=this.handleOnSelect.bind(this)}render(){const{groupBy:e,isDisabled:t,showPriceListOption:r,intl:a,item:{source_uuid:n},redirectToCostModel:i,router:c}=this.props,d=[l().createElement(s.DropdownItem,{component:"button",isDisabled:t,key:"export-action",onClick:this.handleExportModalOpen},a.formatMessage(o.Z.detailsActionsExport))];return r&&d.unshift(l().createElement(s.DropdownItem,{component:"button",key:"price-list-action",isDisabled:t||e.includes(u.P)||0===n.length,onClick:()=>i(n[0],c)},a.formatMessage(o.Z.detailsActionsPriceList))),l().createElement(l().Fragment,null,l().createElement(s.Dropdown,{onSelect:this.handleOnSelect,toggle:l().createElement(s.KebabToggle,{onToggle:this.handleOnToggle}),isOpen:this.state.isDropdownOpen,isPlain:!0,position:"right",dropdownItems:d}),this.getExportModal())}}const m=(0,d.X1)(((e,t)=>({}))),y={redirectToCostModel:p.F0.redirectToCostModelFromSourceUuid},S=(0,i.connect)(m,y)(g),v=(0,n.ZP)((0,h.E)(S))},90302:(e,t,r)=>{r.d(t,{W:()=>i});var s=r(49382),o=r(12289),a=r(40794),l=r(11331),n=r(43789);const i={costColumn:{textAlign:"right"},defaultLabel:{minWidth:"63px"},emptyState:{backgroundColor:s.ZP.value,display:"flex",justifyContent:"center",paddingTop:l.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:n.ZP.value},infoDescription:{color:o.ZP.value,fontSize:a.ZP.value},nameColumn:{width:"1%"}}},90569:(e,t,r)=>{r.d(t,{w:()=>m});var s=r(76481),o=r(52636),a=r(25441),l=r(79112),n=r(97027),i=r(92950),c=r.n(i),d=r(74806),p=r(42901),u=r(5842),h=r(90302);class g extends c().Component{constructor(e){super(e),this.getEmptyState=()=>{const{intl:e,router:t}=this.props,r=(0,l.mB)(t.location.search);if(r.filter_by)for(const e of Object.values(r.filter_by))if("*"!==e)return c().createElement(p.c,{filter:e,showMargin:!1});return c().createElement(s.EmptyState,null,c().createElement(s.EmptyStateIcon,{icon:o.Xk}),c().createElement(s.EmptyStateBody,null,e.formatMessage(n.Z.detailsEmptyState)))},this.getSortBy=e=>{const{columns:t,router:r}=this.props,s=t[e].orderBy,o=(0,l.mB)(r.location.search),a=o&&o.order_by&&o.order_by[s];return a?{index:e,direction:a}:{}},this.getSortParams=e=>({sortBy:this.getSortBy(e),onSort:this.handleOnSort,columnIndex:e}),this.handleOnSelect=(e,t,r)=>{const{onSelected:s,rows:o}=this.props;let a,l=[];-1===r?a=o.map((e=>(e.selected=t,e))):(a=[...o],a[r].selected=t,l=[a[r].item]),this.setState({rows:o},(()=>{s&&s(l,t)}))},this.handleOnSort=(e,t,r)=>{const{columns:s,onSort:o}=this.props;o&&o(s[t].orderBy,r===a.SortByDirection.asc)},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}render(){const{columns:e,intl:t,isLoading:r,rows:o}=this.props;return c().createElement(c().Fragment,null,c().createElement(a.TableComposable,{"aria-label":t.formatMessage(n.Z.dataTableAriaLabel),gridBreakPoint:"grid-2xl"},c().createElement(a.Thead,null,c().createElement(a.Tr,null,e.map(((e,t)=>c().createElement(a.Th,{key:`col-${t}-${e.value}`,modifier:"nowrap",sort:e.isSortable?this.getSortParams(t):void 0,style:e.style},e.name))))),c().createElement(a.Tbody,null,r?c().createElement(a.Tr,null,c().createElement(a.Td,{colSpan:100},c().createElement(s.Bullseye,null,c().createElement("div",{style:{textAlign:"center"}},c().createElement(s.Spinner,{size:"xl"}))))):o.map(((t,r)=>c().createElement(a.Tr,{key:`row-${r}`},t.cells.map(((s,o)=>0===o?c().createElement(a.Td,{dataLabel:e[o].name,key:`cell-${o}-${r}`,modifier:"nowrap",select:{disable:t.selectionDisabled,isSelected:t.selected,onSelect:(e,t)=>this.handleOnSelect(e,t,r),rowIndex:r}}):c().createElement(a.Td,{dataLabel:e[o].name,key:`cell-${r}-${o}`,modifier:"nowrap",isActionCell:o===t.cells.length-1},s.value)))))))),Boolean(0===o.length)&&c().createElement("div",{style:h.W.emptyState},this.getEmptyState()))}}const m=(0,d.ZP)((0,u.E)(g))},54583:(e,t,r)=>{r.d(t,{Tm:()=>a,Zc:()=>l,yW:()=>n});var s=r(39333),o=r(14483);const a=({basePath:e,description:t,groupBy:r,id:a,isPlatformCosts:l,router:n,title:i})=>{const c=(0,s.mB)(n.location.search),d=Object.assign(Object.assign(Object.assign(Object.assign({},c),t&&t!==i&&{[o.eG]:t}),i&&{[o.yG]:i}),{group_by:{[r]:l?"*":a}});return l&&(d.filter||(d.filter={}),d.filter.category=o.rx),`${e}?${(0,s.IV)(d)}`},l=({basePath:e,description:t,groupBy:r,groupByOrg:a,id:l,router:n,title:i,type:c})=>{const d=(0,s.mB)(n.location.search),p=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),t&&t!==i&&{[o.eG]:t}),i&&{[o.yG]:i}),a&&{[o.dV]:a}),{group_by:{[r]:l}});return"account"===c?(p.filter||(p.filter={}),p.filter.account=l,p.group_by={[o.dV]:a}):"organizational_unit"===c&&(p.group_by={[o.dV]:l}),`${e}?${(0,s.IV)(p)}`},n=e=>e&&e.filter&&e.filter.category===o.rx}}]);
//# sourceMappingURL=../sourcemaps/awsDetails.9d901d52e7a72cc7ef01b67774de13c4.js.map