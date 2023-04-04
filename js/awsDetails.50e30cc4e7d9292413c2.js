"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[3043],{11058:(e,t,s)=>{s.d(t,{T:()=>S});var r=s(90154),o=s(97027),a=s(92950),l=s.n(a),n=s(74806),i=s(77760),c=s(1156),d=s(22928),p=s(15829);const u={costSelector:{display:"flex",alignItems:"center"},costLabel:{marginBottom:0,marginRight:s(32412).ZP.var,whiteSpace:"nowrap"}},g=[{desc:o.Z.costTypeAmortizedDesc,label:o.Z.costTypeAmortized,value:d.M.amortized},{desc:o.Z.costTypeBlendedDesc,label:o.Z.costTypeBlended,value:d.M.blended},{desc:o.Z.costTypeUnblendedDesc,label:o.Z.costTypeUnblended,value:d.M.unblended}];class h extends l().Component{constructor(){super(...arguments),this.defaultState={isSelectOpen:!1},this.state=Object.assign({},this.defaultState),this.getSelect=()=>{const{costType:e,isDisabled:t}=this.props,{isSelectOpen:s}=this.state,o=this.getSelectOptions(),a=o.find((t=>t.value===e));return l().createElement(r.Select,{className:"selectOverride",id:"costTypeSelect",isDisabled:t,isOpen:s,onSelect:this.handleSelect,onToggle:this.handleToggle,selections:a,variant:r.SelectVariant.single},o.map((e=>l().createElement(r.SelectOption,{description:e.desc,key:e.value,value:e}))))},this.getSelectOptions=()=>{const{intl:e}=this.props,t=[];return g.map((s=>{t.push({desc:e.formatMessage(s.desc),toString:()=>e.formatMessage(s.label),value:s.value})})),t},this.handleSelect=(e,t)=>{const{onSelect:s}=this.props;(0,p.M1)(t.value),this.setState({isSelectOpen:!1},(()=>{s&&s(t.value)}))},this.handleToggle=e=>{this.setState({isSelectOpen:e})}}render(){const{intl:e}=this.props;return(0,p.eu)(),l().createElement("div",{style:u.costSelector},l().createElement(r.Title,{headingLevel:"h3",size:"md",style:u.costLabel},e.formatMessage(o.Z.costTypeLabel)),this.getSelect())}}const m=(0,c.X1)((()=>({}))),y=(0,i.connect)(m,{})(h),S=(0,n.ZP)(y)},76386:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Re});var r=s(90154),o=s(1326),a=s(76966),l=s(84717),n=s(6456),i=s(97027),c=s(92950),d=s.n(c),p=s(74806),u=s(77760),g=s(52471),h=s(55672),m=s(2985),y=s(47947),S=s(40493),v=s(37269),f=s(19727),b=s(86482),E=s(10066),T=s(1156),P=s(62331),O=s(15920);function C(e={}){return e.account?"account":e.org_unit_id?"org_unit_id":e.region?"region":e.service?"service":"date"}var B=s(69511),x=s(22928),Z=s(15829),_=s(14483),M=s(5842),F=s(49382),R=s(98499),k=s(32412);const w={awsDetails:{minHeight:"100%"},content:{paddingBottom:R.ZP.value,paddingTop:R.ZP.value},paginationContainer:{marginLeft:R.ZP.value,marginRight:R.ZP.value},pagination:{backgroundColor:F.ZP.value,paddingBottom:k.ZP.value,paddingTop:k.ZP.value},tableContainer:{marginLeft:R.ZP.value,marginRight:R.ZP.value},toolbarContainer:{marginLeft:R.ZP.value,marginRight:R.ZP.value}};var D=s(96740),I=s(50081),A=s(26744),V=s(6450),q=s(11058),L=s(87560),$=s(78898),X=s(45087),j=s(91778),Q=s(33605),N=s(54881),z=s(48196);const W={costValue:{marginTop:R.ZP.var,marginBottom:0},costLabelUnit:{fontSize:N.ZP.value,color:Q.ZP.var},costType:{display:"flex",marginLeft:k.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:F.ZP.var,padding:R.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},title:{paddingBottom:z.ZP.var}},G=[{label:"account",value:"account"},{label:"service",value:"service"},{label:"region",value:"region"}],J=D.t.aws,K=I.L.aws;class U extends d().Component{constructor(){super(...arguments),this.handleCostTypeSelected=e=>{const{onCostTypeSelected:t}=this.props;t&&t(e)}}render(){const{costType:e,currency:t,groupBy:s,isExportsFeatureEnabled:o,onCurrencySelected:a,onGroupBySelected:l,providers:n,providersError:c,report:p,intl:u}=this.props,g=p&&!c&&n&&n.meta&&n.meta.count>0,h=p&&p.meta&&p.meta.total&&p.meta.total.cost&&p.meta.total.cost.total;return d().createElement("header",{style:W.header},d().createElement("div",{style:W.headerContent},d().createElement(r.Title,{headingLevel:"h1",style:W.title,size:r.TitleSizes["2xl"]},u.formatMessage(i.Z.awsDetailsTitle)),d().createElement("div",{style:W.headerContentRight},d().createElement(V.F,{currency:t,onSelect:a}),o&&d().createElement(A.bj,null))),d().createElement("div",{style:W.headerContent},d().createElement("div",{style:W.headerContentLeft},d().createElement(L.X,{getIdKeyForGroupBy:C,groupBy:s,isDisabled:!g,onSelected:l,options:G,orgReportPathsType:J,showOrgs:!0,showTags:!0,tagReportPathsType:K}),d().createElement("div",{style:W.costType},d().createElement(q.T,{costType:e,onSelect:this.handleCostTypeSelected}))),Boolean(g)&&d().createElement("div",null,d().createElement(r.Title,{headingLevel:"h2",style:W.costValue,size:r.TitleSizes["4xl"]},(0,j.xG)(h?p.meta.total.cost.total.value:0,h?p.meta.total.cost.total.units:"USD")),d().createElement("div",{style:W.dateTitle},(0,X.J4)()))))}}const H=(0,T.X1)(((e,t)=>{const s=(0,l.H)(P.NT),r=P.aX.selectProviders(e,o.l.all,s),a=P.aX.selectProvidersError(e,o.l.all,s),n=P.aX.selectProvidersFetchStatus(e,o.l.all,s);return{isExportsFeatureEnabled:$.iJ.selectIsExportsFeatureEnabled(e),providers:(0,b.BV)(r,o.l.aws),providersError:a,providersFetchStatus:n,providersQueryString:s}})),Y=(0,p.ZP)((0,u.connect)(H,{})(U));var ee=s(39836),te=s(91919),se=s(98485),re=s(62423),oe=s(90569),ae=s(90302),le=s(54583),ne=s(68025);const ie=n.K.aws;class ce extends d().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{groupBy:e,groupByOrg:t,groupByTagKey:s,intl:r,isAllSelected:o,report:a,router:l,selectedItems:n}=this.props;if(!a)return;const c=[],p=(0,B.c)({report:a,idKey:s||(t?"org_entities":e)}),u=s||t?[{name:""},{name:t?r.formatMessage(i.Z.names,{count:2}):r.formatMessage(i.Z.tagNames)},{name:r.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:r.formatMessage(i.Z.cost),style:ae.W.costColumn},p.length&&{isSortable:!0}),{name:""}]:[{name:""},Object.assign({orderBy:"account"===e?"account_alias":e,name:r.formatMessage(i.Z.detailsResourceNames,{value:e})},p.length&&{isSortable:!0}),{name:r.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:r.formatMessage(i.Z.cost),style:ae.W.costColumn},p.length&&{isSortable:!0}),{name:""}];p.map(((r,a)=>{const i=this.getTotalCost(r,a),p=this.getMonthOverMonthCost(r,a),u=r&&r.label&&null!==r.label?r.label:"",g=u===`${_.Xq}${e}`||u===`${_.Xq}${s}`,h=r.id&&r.id!==r.label?d().createElement("div",{style:ae.W.infoDescription},r.id):null,m=this.getActions(r,g),y=g?u:d().createElement(ee.Link,{to:(0,le.Zc)({basePath:(0,ne.dI)(te._.awsDetailsBreakdown.path),description:r.id,groupBy:e,groupByOrg:t,id:r.id,router:l,title:r.label,type:r.type})},u);c.push({cells:[{},{value:d().createElement("div",null,y,h)},{value:d().createElement("div",null,p)},{value:d().createElement("div",null,i),style:ae.W.managedColumn},{value:d().createElement("div",null,m)}],item:r,selected:o||n&&void 0!==n.find((e=>e.id===r.id)),selectionDisabled:g})})),this.setState({columns:u,rows:c})},this.getActions=(e,t=!1)=>{const{groupBy:s,reportQueryString:r}=this.props;return d().createElement(re.e,{groupBy:s,isDisabled:t,item:e,reportPathsType:ie,reportQueryString:r})},this.getMonthOverMonthCost=(e,t)=>{const{intl:s}=this.props,r=(0,j.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),o=null!==e.delta_percent?(0,j.rl)(Math.abs(e.delta_percent)):0,a=!(0===o||"0.00"===o),l=null!==e.delta_percent;let n;return a&&(n="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(n+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(n+=" increase")),l?d().createElement("div",{className:"monthOverMonthOverride"},d().createElement("div",{className:n,key:`month-over-month-cost-${t}`},a?s.formatMessage(i.Z.percent,{value:o}):d().createElement(se.L,null),Boolean(a&&null!==e.delta_percent&&e.delta_value>0)&&d().createElement("span",{className:"fa fa-sort-up",style:ae.W.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(a&&null!==e.delta_percent&&e.delta_value<0)&&d().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},ae.W.infoArrow),ae.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),d().createElement("div",{style:ae.W.infoDescription,key:`month-over-month-info-${t}`},(0,X.Y)(r))):(0,X.Tf)()},this.getTotalCost=(e,t)=>{const{report:s,intl:r}=this.props,o=s&&s.meta&&s.meta.total&&s.meta.total.cost&&s.meta.total.cost.total?s.meta.total.cost.total.value:0,a=0===o?o.toFixed(2):(e.cost.total.value/o*100).toFixed(2);return d().createElement(d().Fragment,null,(0,j.xG)(e.cost.total.value,e.cost.total.units),d().createElement("div",{style:ae.W.infoDescription,key:`total-cost-${t}`},r.formatMessage(i.Z.percentOfCost,{value:a})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{report:t,selectedItems:s}=this.props,r=t&&t.data?JSON.stringify(t.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")===r&&e.selectedItems===s||this.initDatum()}render(){const{isLoading:e,onSelected:t,onSort:s,selectedItems:r}=this.props,{columns:o,rows:a}=this.state;return d().createElement(oe.w,{columns:o,isLoading:e,onSelected:t,onSort:s,rows:a,selectedItems:r})}}const de=(0,p.ZP)((0,M.E)(ce));var pe=s(39333),ue=s(36116),ge=s(70539),he=s(98449),me=s(48949),ye=s(94282);const Se=D.t.aws,ve=D.J.org,fe=I.L.aws,be=I.Q.tag;class Ee extends d().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,orgReport:t,tagReport:s}=this.props,r=[{name:e.formatMessage(i.Z.filterByValues,{value:"account"}),key:"account"},{name:e.formatMessage(i.Z.filterByValues,{value:"service"}),key:"service"},{name:e.formatMessage(i.Z.filterByValues,{value:"region"}),key:"region"}];return t&&t.data&&t.data.length&&r.push({name:e.formatMessage(i.Z.filterByValues,{value:"org_unit_id"}),key:_.dV}),s&&s.data&&s.data.length&&r.push({name:e.formatMessage(i.Z.filterByValues,{value:"tag"}),key:_.up}),r}}componentDidMount(){const{fetchOrg:e,fetchTag:t,orgReportFetchStatus:s,orgQueryString:r,tagReportFetchStatus:o,tagQueryString:a}=this.props;this.setState({categoryOptions:this.getCategoryOptions()},(()=>{s!==T.iF.inProgress&&e(Se,ve,r),o!==T.iF.inProgress&&t(fe,be,a)}))}componentDidUpdate(e){const{fetchOrg:t,fetchTag:s,orgReport:r,orgReportFetchStatus:o,query:a,orgQueryString:l,tagReport:n,tagReportFetchStatus:i,tagQueryString:c}=this.props;(0,ye.X)(r,e.orgReport)&&(0,ye.X)(n,e.tagReport)?a&&!(0,ye.X)(a,e.query)&&(o!==T.iF.inProgress&&t(Se,ve,l),i!==T.iF.inProgress&&s(fe,be,c)):this.setState({categoryOptions:this.getCategoryOptions()},(()=>{o!==T.iF.inProgress&&t(Se,ve,l),i!==T.iF.inProgress&&s(fe,be,c)}))}render(){const{groupBy:e,isAllSelected:t,isBulkSelectDisabled:s,isDisabled:r,isExportDisabled:o,itemsPerPage:a,itemsTotal:l,onBulkSelected:n,onExportClicked:i,onFilterAdded:c,onFilterRemoved:p,orgReport:u,pagination:g,query:h,selectedItems:m,tagReport:y}=this.props,{categoryOptions:S}=this.state;return d().createElement(ge.k,{categoryOptions:S,groupBy:e,isAllSelected:t,isDisabled:r,isBulkSelectDisabled:s,isExportDisabled:o,itemsPerPage:a,itemsTotal:l,onBulkSelected:n,onExportClicked:i,onFilterAdded:c,onFilterRemoved:p,orgReport:u,pagination:g,query:h,resourcePathsType:ue.C.aws,selectedItems:m,showBulkSelect:!0,showExport:!0,showFilter:!0,tagReport:y,tagReportPathsType:fe})}}const Te=(0,T.X1)(((e,t)=>{const s={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3},r=(0,pe.pm)(Object.assign({},s)),o=me.ux.selectTag(e,fe,be,r),a=me.ux.selectTagFetchStatus(e,fe,be,r),l=(0,pe.pm)(Object.assign({},s));return{orgReport:he.zE.selectOrg(e,Se,ve,l),orgReportFetchStatus:he.zE.selectOrgFetchStatus(e,Se,ve,l),orgQueryString:l,tagReport:o,tagReportFetchStatus:a,tagQueryString:r}})),Pe={fetchOrg:he.Lp.T7,fetchTag:me.xr.Xt},Oe=(0,u.connect)(Te,Pe)(Ee),Ce=(0,p.ZP)(Oe),Be={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},exclude:{},filter_by:{},group_by:{account:"*"},order_by:{cost:"desc"}},xe=n.C.cost,Ze=n.K.aws;class _e extends d().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,s=C(e.group_by),r=(0,v.qV)(e)||s;return(0,B.c)({report:t,idKey:r===_.dV?"org_entities":r})},this.getExportModal=e=>{const{query:t,report:s,reportQueryString:r}=this.props,{isAllSelected:o,isExportModalOpen:a,selectedItems:l}=this.state,n=C(t.group_by),i=(0,v.qV)(t),c=s&&s.meta?s.meta.count:0,p=[];return l.map((e=>{e.label!==`${_.Xq}${n}`&&e.label!==`${_.Xq}${i}`&&p.push(e)})),d().createElement(S.X,{count:o?c:p.length,isAllItems:(o||l.length===c)&&e.length>0,groupBy:i?`${_.P}${i}`:n,isOpen:a,items:p,onClose:this.handleExportModalClose,reportPathsType:Ze,reportQueryString:r})},this.getPagination=(e=!1,t=!1)=>{const{intl:s,query:o,router:a,report:l}=this.props,n=l&&l.meta?l.meta.count:0,c=l&&l.meta&&l.meta.filter&&l.meta.filter.limit?l.meta.filter.limit:Be.filter.limit,p=(l&&l.meta&&l.meta.filter&&l.meta.filter.offset?l.meta.filter.offset:Be.filter.offset)/c+1;return d().createElement(r.Pagination,{isCompact:!t,isDisabled:e,itemCount:n,onPerPageSelect:(e,t)=>(0,f.xh)(o,a,t),onSetPage:(e,t)=>(0,f.$9)(o,a,l,t),page:p,perPage:c,titles:{paginationTitle:s.formatMessage(i.Z.paginationTitle,{title:s.formatMessage(i.Z.aws),placement:t?"bottom":"top"})},variant:t?r.PaginationVariant.bottom:r.PaginationVariant.top,widgetId:"exports-pagination"+(t?"-bottom":"")})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:s,reportQueryString:r,router:o}=this.props,{isAllSelected:a,selectedItems:l}=this.state,n=C(e.group_by),i=(0,v.qV)(e),c=(0,v.OA)(e);return d().createElement(de,{groupBy:i?`${_.P}${i}`:n,groupByTagKey:i,groupByOrg:c,isAllSelected:a,isLoading:s===T.iF.inProgress,onSelected:this.handleSelected,onSort:(t,s)=>(0,f.yB)(e,o,t,s),report:t,reportQueryString:r,selectedItems:l})},this.getToolbar=e=>{const{query:t,router:s,report:r}=this.props,{isAllSelected:o,selectedItems:a}=this.state,l=C(t.group_by),n=(0,v.qV)(t),i=0===e.length,c=r&&r.meta?r.meta.count:0;return d().createElement(Ce,{groupBy:n?`${_.P}${n}`:l,isAllSelected:o,isDisabled:i,isExportDisabled:i||!o&&0===a.length,itemsPerPage:e.length,itemsTotal:c,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,f.$3)(t,s,e),onFilterRemoved:e=>(0,f.q7)(t,s,e),pagination:this.getPagination(i),query:t,selectedItems:a})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{query:t,router:s}=this.props;let r=e,o="*";-1!==e.indexOf(_.dV)&&(r=_.dV.substring(0,_.dV.length),o=e.slice(_.dV.length));const a=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{group_by:{[r]:o},order_by:{cost:"desc"}});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{s.navigate((0,E.Z)(a,s.location,!0),{replace:!0})}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:s,selectedItems:r}=this.state;let o=[...s?this.getComputedItems():r];e&&e.length>0&&(t?e.map((e=>o.push(e))):e.map((e=>{o=o.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:o})},this.updateReport=()=>{const{fetchReport:e,reportQueryString:t}=this.props;e(Ze,xe,t)},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{report:s,reportError:r,reportQueryString:o,router:a}=this.props,{selectedItems:l}=this.state,n=e.reportQueryString!==o,i=!s&&!r,c=!a.location.search,d=t.selectedItems!==l;(n||i||c||d)&&this.updateReport()}render(){const{costType:e,currency:t,intl:s,providers:r,providersFetchStatus:a,query:l,report:n,reportError:c,reportFetchStatus:p,router:u}=this.props,S=this.getComputedItems(),v=C(l.group_by),E=0===S.length,P=s.formatMessage(i.Z.awsDetailsTitle);if(c)return d().createElement(y.W,{title:P});if(a===T.iF.inProgress)return d().createElement(g.g,{title:P});if(a===T.iF.complete){if(r&&r.meta&&0===r.meta.count)return d().createElement(m.L,{providerType:o.l.aws,title:P});if(!(0,b.g8)(r))return d().createElement(h.J,{title:P})}return d().createElement("div",{style:w.awsDetails},d().createElement(Y,{costType:e,currency:t,groupBy:v,onCostTypeSelected:e=>(0,f.jl)(l,u,e),onCurrencySelected:e=>(0,f._s)(l,u,e),onGroupBySelected:this.handleGroupBySelected,report:n}),d().createElement("div",{style:w.content},d().createElement("div",{style:w.toolbarContainer},this.getToolbar(S)),this.getExportModal(S),p===T.iF.inProgress?d().createElement(g.g,null):d().createElement(d().Fragment,null,d().createElement("div",{style:w.tableContainer},this.getTable()),d().createElement("div",{style:w.paginationContainer},d().createElement("div",{style:w.pagination},this.getPagination(E,!0))))))}}const Me=(0,T.X1)(((e,{router:t})=>{const s=(0,a.mB)(t.location.search),r=(0,x.u)(),n=(0,Z.zC)(),i={delta:"cost",filter:Object.assign(Object.assign({},Be.filter),s.filter),filter_by:s.filter_by||Be.filter_by,exclude:s.exclude||Be.exclude,group_by:s.group_by||Be.group_by,order_by:s.order_by||Be.order_by},c=(0,a.pm)(Object.assign(Object.assign({},i),{cost_type:r,currency:n})),d=O.ZV.selectReport(e,Ze,xe,c),p=O.ZV.selectReportError(e,Ze,xe,c),u=O.ZV.selectReportFetchStatus(e,Ze,xe,c),g=(0,l.H)(P.NT),h=P.aX.selectProviders(e,o.l.all,g),m=P.aX.selectProvidersError(e,o.l.all,g),y=P.aX.selectProvidersFetchStatus(e,o.l.all,g);return{costType:r,currency:n,providers:(0,b.BV)(h,o.l.aws),providersError:m,providersFetchStatus:y,query:i,report:d,reportError:p,reportFetchStatus:u,reportQueryString:c}})),Fe={fetchReport:O.nx.fetchReport},Re=(0,p.ZP)((0,M.E)((0,u.connect)(Me,Fe)(_e)))}}]);
//# sourceMappingURL=../sourcemaps/awsDetails.7efd515e3d753590eae663a345cb687f.js.map