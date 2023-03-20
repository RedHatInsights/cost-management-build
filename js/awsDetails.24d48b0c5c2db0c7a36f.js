"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[3043],{15265:(e,t,s)=>{s.d(t,{LA:()=>l,ZP:()=>a,mq:()=>r});var o=s(40400);const r={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},l=(0,o.IU)(r),a=l},11058:(e,t,s)=>{s.d(t,{T:()=>S});var o=s(76481),r=s(97027),l=s(92950),a=s.n(l),n=s(74806),i=s(77760),c=s(1156),d=s(22928),p=s(15829);const h={costSelector:{display:"flex",alignItems:"center"},costLabel:{marginBottom:0,marginRight:s(32412).ZP.var,whiteSpace:"nowrap"}},u=[{desc:r.Z.costTypeAmortizedDesc,label:r.Z.costTypeAmortized,value:d.M.amortized},{desc:r.Z.costTypeBlendedDesc,label:r.Z.costTypeBlended,value:d.M.blended},{desc:r.Z.costTypeUnblendedDesc,label:r.Z.costTypeUnblended,value:d.M.unblended}];class g extends a().Component{constructor(){super(...arguments),this.defaultState={isSelectOpen:!1},this.state=Object.assign({},this.defaultState),this.getSelect=()=>{const{costType:e,isDisabled:t}=this.props,{isSelectOpen:s}=this.state,r=this.getSelectOptions(),l=r.find((t=>t.value===e));return a().createElement(o.Select,{className:"selectOverride",id:"costTypeSelect",isDisabled:t,isOpen:s,onSelect:this.handleSelect,onToggle:this.handleToggle,selections:l,variant:o.SelectVariant.single},r.map((e=>a().createElement(o.SelectOption,{description:e.desc,key:e.value,value:e}))))},this.getSelectOptions=()=>{const{intl:e}=this.props,t=[];return u.map((s=>{t.push({desc:e.formatMessage(s.desc),toString:()=>e.formatMessage(s.label),value:s.value})})),t},this.handleSelect=(e,t)=>{const{onSelect:s}=this.props;(0,p.M1)(t.value),this.setState({isSelectOpen:!1},(()=>{s&&s(t.value)}))},this.handleToggle=e=>{this.setState({isSelectOpen:e})}}render(){const{intl:e}=this.props;return(0,p.eu)(),a().createElement("div",{style:h.costSelector},a().createElement(o.Title,{headingLevel:"h3",size:"md",style:h.costLabel},e.formatMessage(r.Z.costTypeLabel)),this.getSelect())}}const m=(0,c.X1)((()=>({}))),y=(0,i.connect)(m,{})(g),S=(0,n.ZP)(y)},76386:(e,t,s)=>{s.r(t),s.d(t,{default:()=>ke});var o=s(76481),r=s(1326),l=s(76966),a=s(84717),n=s(6456),i=s(97027),c=s(92950),d=s.n(c),p=s(74806),h=s(77760),u=s(52471),g=s(55672),m=s(2985),y=s(47947),S=s(40493),v=s(37269),E=s(19727),f=s(86482),b=s(10066),O=s(1156),x=s(78898),C=s(62331),T=s(15920);function P(e={}){return e.account?"account":e.org_unit_id?"org_unit_id":e.region?"region":e.service?"service":"date"}var M=s(69511),w=s(22928),B=s(15829),Z=s(14483),_=s(5842),k=s(49382),D=s(98499),F=s(32412);const R={awsDetails:{minHeight:"100%"},content:{paddingBottom:D.ZP.value,paddingTop:D.ZP.value},paginationContainer:{marginLeft:D.ZP.value,marginRight:D.ZP.value},pagination:{backgroundColor:k.ZP.value,paddingBottom:F.ZP.value,paddingTop:F.ZP.value},tableContainer:{marginLeft:D.ZP.value,marginRight:D.ZP.value},toolbarContainer:{marginLeft:D.ZP.value,marginRight:D.ZP.value}};var A=s(96740),I=s(50081),L=s(19152),V=s(6450),$=s(11058),j=s(87560),q=s(45087),X=s(91778),Q=s(33605),z=s(54881),N=s(48196);const W={costValue:{marginTop:D.ZP.var,marginBottom:0},costLabelUnit:{fontSize:z.ZP.value,color:Q.ZP.var},costType:{display:"flex",marginLeft:F.ZP.var},dateTitle:{textAlign:"end"},header:{backgroundColor:k.ZP.var,padding:D.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex",minHeight:"90px"},headerContentRight:{display:"flex"},title:{paddingBottom:N.ZP.var}},H=[{label:"account",value:"account"},{label:"service",value:"service"},{label:"region",value:"region"}],J=A.t.aws,U=I.L.aws;class G extends d().Component{constructor(){super(...arguments),this.handleCostTypeSelected=e=>{const{onCostTypeSelected:t}=this.props;t&&t(e)}}render(){const{costType:e,currency:t,groupBy:s,isCurrencyFeatureEnabled:r,isExportsFeatureEnabled:l,onCurrencySelected:a,onGroupBySelected:n,providers:c,providersError:p,report:h,intl:u}=this.props,g=h&&!p&&c&&c.meta&&c.meta.count>0,m=h&&h.meta&&h.meta.total&&h.meta.total.cost&&h.meta.total.cost.total;return d().createElement("header",{style:W.header},d().createElement("div",{style:W.headerContent},d().createElement(o.Title,{headingLevel:"h1",style:W.title,size:o.TitleSizes["2xl"]},u.formatMessage(i.Z.awsDetailsTitle)),d().createElement("div",{style:W.headerContentRight},r&&d().createElement(V.F,{currency:t,onSelect:a}),l&&d().createElement(L.bj,null))),d().createElement("div",{style:W.headerContent},d().createElement("div",{style:W.headerContentLeft},d().createElement(j.X,{getIdKeyForGroupBy:P,groupBy:s,isDisabled:!g,onSelected:n,options:H,orgReportPathsType:J,showOrgs:!0,showTags:!0,tagReportPathsType:U}),d().createElement("div",{style:W.costType},d().createElement($.T,{costType:e,onSelect:this.handleCostTypeSelected}))),Boolean(g)&&d().createElement("div",null,d().createElement(o.Title,{headingLevel:"h2",style:W.costValue,size:o.TitleSizes["4xl"]},(0,X.xG)(m?h.meta.total.cost.total.value:0,m?h.meta.total.cost.total.units:"USD")),d().createElement("div",{style:W.dateTitle},(0,q.J4)()))))}}const K=(0,O.X1)(((e,t)=>{const s=(0,a.H)(C.NT),o=C.aX.selectProviders(e,r.l.all,s),l=C.aX.selectProvidersError(e,r.l.all,s),n=C.aX.selectProvidersFetchStatus(e,r.l.all,s);return{isCurrencyFeatureEnabled:x.iJ.selectIsCurrencyFeatureEnabled(e),isExportsFeatureEnabled:x.iJ.selectIsExportsFeatureEnabled(e),providers:(0,f.BV)(o,r.l.aws),providersError:l,providersFetchStatus:n,providersQueryString:s}})),Y=(0,p.ZP)((0,h.connect)(K,{})(G));var ee=s(39836),te=s(91919),se=s(98485),oe=s(62423),re=s(90569),le=s(90302),ae=s(54583),ne=s(68025);const ie=n.K.aws;class ce extends d().Component{constructor(){super(...arguments),this.state={columns:[],rows:[]},this.initDatum=()=>{const{groupBy:e,groupByOrg:t,groupByTagKey:s,intl:o,isAllSelected:r,report:l,router:a,selectedItems:n}=this.props;if(!l)return;const c=[],p=(0,M.c)({report:l,idKey:s||(t?"org_entities":e)}),h=s||t?[{name:""},{name:t?o.formatMessage(i.Z.names,{count:2}):o.formatMessage(i.Z.tagNames)},{name:o.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:o.formatMessage(i.Z.cost),style:le.W.costColumn},p.length&&{isSortable:!0}),{name:""}]:[{name:""},Object.assign({orderBy:"account"===e?"account_alias":e,name:o.formatMessage(i.Z.detailsResourceNames,{value:e})},p.length&&{isSortable:!0}),{name:o.formatMessage(i.Z.monthOverMonthChange)},Object.assign({orderBy:"cost",name:o.formatMessage(i.Z.cost),style:le.W.costColumn},p.length&&{isSortable:!0}),{name:""}];p.map(((o,l)=>{const i=this.getTotalCost(o,l),p=this.getMonthOverMonthCost(o,l),h=o&&o.label&&null!==o.label?o.label:"",u=h===`${Z.Xq}${e}`||h===`${Z.Xq}${s}`,g=o.id&&o.id!==o.label?d().createElement("div",{style:le.W.infoDescription},o.id):null,m=this.getActions(o,u),y=u?h:d().createElement(ee.Link,{to:(0,ae.Zc)({basePath:(0,ne.dI)(te._.awsDetailsBreakdown.path),description:o.id,groupBy:e,groupByOrg:t,id:o.id,router:a,title:o.label,type:o.type})},h);c.push({cells:[{},{value:d().createElement("div",null,y,g)},{value:d().createElement("div",null,p)},{value:d().createElement("div",null,i),style:le.W.managedColumn},{value:d().createElement("div",null,m)}],item:o,selected:r||n&&void 0!==n.find((e=>e.id===o.id)),selectionDisabled:u})})),this.setState({columns:h,rows:c})},this.getActions=(e,t=!1)=>{const{groupBy:s,reportQueryString:o}=this.props;return d().createElement(oe.e,{groupBy:s,isDisabled:t,item:e,reportPathsType:ie,reportQueryString:o})},this.getMonthOverMonthCost=(e,t)=>{const{intl:s}=this.props,o=(0,X.xG)(Math.abs(e.cost.total.value-e.delta_value),e.cost.total.units),r=null!==e.delta_percent?(0,X.rl)(Math.abs(e.delta_percent)):0,l=!(0===r||"0.00"===r),a=null!==e.delta_percent;let n;return l&&(n="iconOverride",null!==e.delta_percent&&e.delta_value<0&&(n+=" decrease"),null!==e.delta_percent&&e.delta_value>0&&(n+=" increase")),a?d().createElement("div",{className:"monthOverMonthOverride"},d().createElement("div",{className:n,key:`month-over-month-cost-${t}`},l?s.formatMessage(i.Z.percent,{value:r}):d().createElement(se.L,null),Boolean(l&&null!==e.delta_percent&&e.delta_value>0)&&d().createElement("span",{className:"fa fa-sort-up",style:le.W.infoArrow,key:`month-over-month-icon-${t}`}),Boolean(l&&null!==e.delta_percent&&e.delta_value<0)&&d().createElement("span",{className:"fa fa-sort-down",style:Object.assign(Object.assign({},le.W.infoArrow),le.W.infoArrowDesc),key:`month-over-month-icon-${t}`})),d().createElement("div",{style:le.W.infoDescription,key:`month-over-month-info-${t}`},(0,q.Y)(o))):(0,q.Tf)()},this.getTotalCost=(e,t)=>{const{report:s,intl:o}=this.props,r=s&&s.meta&&s.meta.total&&s.meta.total.cost&&s.meta.total.cost.total?s.meta.total.cost.total.value:0,l=0===r?r.toFixed(2):(e.cost.total.value/r*100).toFixed(2);return d().createElement(d().Fragment,null,(0,X.xG)(e.cost.total.value,e.cost.total.units),d().createElement("div",{style:le.W.infoDescription,key:`total-cost-${t}`},o.formatMessage(i.Z.percentOfCost,{value:l})))}}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{report:t,selectedItems:s}=this.props,o=t&&t.data?JSON.stringify(t.data):"";(e.report&&e.report.data?JSON.stringify(e.report.data):"")===o&&e.selectedItems===s||this.initDatum()}render(){const{isLoading:e,onSelected:t,onSort:s,selectedItems:o}=this.props,{columns:r,rows:l}=this.state;return d().createElement(re.w,{columns:r,isLoading:e,onSelected:t,onSort:s,rows:l,selectedItems:o})}}const de=(0,p.ZP)((0,_.E)(ce));var pe=s(39333),he=s(36116),ue=s(70539),ge=s(98449),me=s(48949),ye=s(94282);const Se=A.t.aws,ve=A.J.org,Ee=I.L.aws,fe=I.Q.tag;class be extends d().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getCategoryOptions=()=>{const{intl:e,orgReport:t,tagReport:s}=this.props,o=[{name:e.formatMessage(i.Z.filterByValues,{value:"account"}),key:"account"},{name:e.formatMessage(i.Z.filterByValues,{value:"service"}),key:"service"},{name:e.formatMessage(i.Z.filterByValues,{value:"region"}),key:"region"}];return t&&t.data&&t.data.length&&o.push({name:e.formatMessage(i.Z.filterByValues,{value:"org_unit_id"}),key:Z.dV}),s&&s.data&&s.data.length&&o.push({name:e.formatMessage(i.Z.filterByValues,{value:"tag"}),key:Z.up}),o}}componentDidMount(){const{fetchOrg:e,fetchTag:t,orgReportFetchStatus:s,orgQueryString:o,tagReportFetchStatus:r,tagQueryString:l}=this.props;this.setState({categoryOptions:this.getCategoryOptions()},(()=>{s!==O.iF.inProgress&&e(Se,ve,o),r!==O.iF.inProgress&&t(Ee,fe,l)}))}componentDidUpdate(e){const{fetchOrg:t,fetchTag:s,orgReport:o,orgReportFetchStatus:r,query:l,orgQueryString:a,tagReport:n,tagReportFetchStatus:i,tagQueryString:c}=this.props;(0,ye.X)(o,e.orgReport)&&(0,ye.X)(n,e.tagReport)?l&&!(0,ye.X)(l,e.query)&&(r!==O.iF.inProgress&&t(Se,ve,a),i!==O.iF.inProgress&&s(Ee,fe,c)):this.setState({categoryOptions:this.getCategoryOptions()},(()=>{r!==O.iF.inProgress&&t(Se,ve,a),i!==O.iF.inProgress&&s(Ee,fe,c)}))}render(){const{groupBy:e,isAllSelected:t,isBulkSelectDisabled:s,isDisabled:o,isExportDisabled:r,itemsPerPage:l,itemsTotal:a,onBulkSelected:n,onExportClicked:i,onFilterAdded:c,onFilterRemoved:p,orgReport:h,pagination:u,query:g,selectedItems:m,tagReport:y}=this.props,{categoryOptions:S}=this.state;return d().createElement(ue.k,{categoryOptions:S,groupBy:e,isAllSelected:t,isDisabled:o,isBulkSelectDisabled:s,isExportDisabled:r,itemsPerPage:l,itemsTotal:a,onBulkSelected:n,onExportClicked:i,onFilterAdded:c,onFilterRemoved:p,orgReport:h,pagination:u,query:g,resourcePathsType:he.C.aws,selectedItems:m,showBulkSelect:!0,showExport:!0,showFilter:!0,tagReport:y,tagReportPathsType:Ee})}}const Oe=(0,O.X1)(((e,t)=>{const s={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},key_only:!0,limit:1e3},o=(0,pe.pm)(Object.assign({},s)),r=me.ux.selectTag(e,Ee,fe,o),l=me.ux.selectTagFetchStatus(e,Ee,fe,o),a=(0,pe.pm)(Object.assign({},s));return{orgReport:ge.zE.selectOrg(e,Se,ve,a),orgReportFetchStatus:ge.zE.selectOrgFetchStatus(e,Se,ve,a),orgQueryString:a,tagReport:r,tagReportFetchStatus:l,tagQueryString:o}})),xe={fetchOrg:ge.Lp.T7,fetchTag:me.xr.Xt},Ce=(0,h.connect)(Oe,xe)(be),Te=(0,p.ZP)(Ce),Pe={delta:"cost",filter:{limit:10,offset:0,resolution:"monthly",time_scope_units:"month",time_scope_value:-1},exclude:{},filter_by:{},group_by:{account:"*"},order_by:{cost:"desc"}},Me=n.C.cost,we=n.K.aws;class Be extends d().Component{constructor(e,t){super(e,t),this.defaultState={columns:[],isAllSelected:!1,isExportModalOpen:!1,rows:[],selectedItems:[]},this.state=Object.assign({},this.defaultState),this.getComputedItems=()=>{const{query:e,report:t}=this.props,s=P(e.group_by),o=(0,v.qV)(e)||s;return(0,M.c)({report:t,idKey:o===Z.dV?"org_entities":o})},this.getExportModal=e=>{const{query:t,report:s,reportQueryString:o}=this.props,{isAllSelected:r,isExportModalOpen:l,selectedItems:a}=this.state,n=P(t.group_by),i=(0,v.qV)(t),c=s&&s.meta?s.meta.count:0,p=[];return a.map((e=>{e.label!==`${Z.Xq}${n}`&&e.label!==`${Z.Xq}${i}`&&p.push(e)})),d().createElement(S.X,{count:r?c:p.length,isAllItems:(r||a.length===c)&&e.length>0,groupBy:i?`${Z.P}${i}`:n,isOpen:l,items:p,onClose:this.handleExportModalClose,reportPathsType:we,reportQueryString:o})},this.getPagination=(e=!1,t=!1)=>{const{intl:s,query:r,router:l,report:a}=this.props,n=a&&a.meta?a.meta.count:0,c=a&&a.meta&&a.meta.filter&&a.meta.filter.limit?a.meta.filter.limit:Pe.filter.limit,p=(a&&a.meta&&a.meta.filter&&a.meta.filter.offset?a.meta.filter.offset:Pe.filter.offset)/c+1;return d().createElement(o.Pagination,{isCompact:!t,isDisabled:e,itemCount:n,onPerPageSelect:(e,t)=>(0,E.xh)(r,l,t),onSetPage:(e,t)=>(0,E.$9)(r,l,a,t),page:p,perPage:c,titles:{paginationTitle:s.formatMessage(i.Z.paginationTitle,{title:s.formatMessage(i.Z.aws),placement:t?"bottom":"top"})},variant:t?o.PaginationVariant.bottom:o.PaginationVariant.top,widgetId:"exports-pagination"+(t?"-bottom":"")})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:s,reportQueryString:o,router:r}=this.props,{isAllSelected:l,selectedItems:a}=this.state,n=P(e.group_by),i=(0,v.qV)(e),c=(0,v.OA)(e);return d().createElement(de,{groupBy:i?`${Z.P}${i}`:n,groupByTagKey:i,groupByOrg:c,isAllSelected:l,isLoading:s===O.iF.inProgress,onSelected:this.handleSelected,onSort:(t,s)=>(0,E.yB)(e,r,t,s),report:t,reportQueryString:o,selectedItems:a})},this.getToolbar=e=>{const{query:t,router:s,report:o}=this.props,{isAllSelected:r,selectedItems:l}=this.state,a=P(t.group_by),n=(0,v.qV)(t),i=0===e.length,c=o&&o.meta?o.meta.count:0;return d().createElement(Te,{groupBy:n?`${Z.P}${n}`:a,isAllSelected:r,isDisabled:i,isExportDisabled:i||!r&&0===l.length,itemsPerPage:e.length,itemsTotal:c,onBulkSelected:this.handleBulkSelected,onExportClicked:this.handleExportModalOpen,onFilterAdded:e=>(0,E.$3)(t,s,e),onFilterRemoved:e=>(0,E.q7)(t,s,e),pagination:this.getPagination(i),query:t,selectedItems:l})},this.handleBulkSelected=e=>{const{isAllSelected:t}=this.state;"none"===e?this.setState({isAllSelected:!1,selectedItems:[]}):"page"===e?this.setState({isAllSelected:!1,selectedItems:this.getComputedItems()}):"all"===e&&this.setState({isAllSelected:!t,selectedItems:[]})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleGroupBySelected=e=>{const{query:t,router:s}=this.props;let o=e,r="*";-1!==e.indexOf(Z.dV)&&(o=Z.dV.substring(0,Z.dV.length),r=e.slice(Z.dV.length));const l=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{group_by:{[o]:r},order_by:{cost:"desc"}});this.setState({isAllSelected:!1,selectedItems:[]},(()=>{s.navigate((0,b.Z)(l,s.location,!0),{replace:!0})}))},this.handleSelected=(e,t=!1)=>{const{isAllSelected:s,selectedItems:o}=this.state;let r=[...s?this.getComputedItems():o];e&&e.length>0&&(t?e.map((e=>r.push(e))):e.map((e=>{r=r.filter((t=>t.id!==e.id))}))),this.setState({isAllSelected:!1,selectedItems:r})},this.updateReport=()=>{const{fetchReport:e,reportQueryString:t}=this.props;e(we,Me,t)},this.handleBulkSelected=this.handleBulkSelected.bind(this),this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleSelected=this.handleSelected.bind(this)}componentDidMount(){this.updateReport()}componentDidUpdate(e,t){const{report:s,reportError:o,reportQueryString:r,router:l}=this.props,{selectedItems:a}=this.state,n=e.reportQueryString!==r,i=!s&&!o,c=!l.location.search,d=t.selectedItems!==a;(n||i||c||d)&&this.updateReport()}render(){const{costType:e,currency:t,intl:s,providers:o,providersFetchStatus:l,query:a,report:n,reportError:c,reportFetchStatus:p,router:h}=this.props,S=this.getComputedItems(),v=P(a.group_by),b=0===S.length,x=s.formatMessage(i.Z.awsDetailsTitle);if(c)return d().createElement(y.W,{title:x});if(l===O.iF.inProgress)return d().createElement(u.g,{title:x});if(l===O.iF.complete){if(o&&o.meta&&0===o.meta.count)return d().createElement(m.L,{providerType:r.l.aws,title:x});if(!(0,f.g8)(o))return d().createElement(g.J,{title:x})}return d().createElement("div",{style:R.awsDetails},d().createElement(Y,{costType:e,currency:t,groupBy:v,onCostTypeSelected:e=>(0,E.jl)(a,h,e),onCurrencySelected:e=>(0,E._s)(a,h,e),onGroupBySelected:this.handleGroupBySelected,report:n}),d().createElement("div",{style:R.content},d().createElement("div",{style:R.toolbarContainer},this.getToolbar(S)),this.getExportModal(S),p===O.iF.inProgress?d().createElement(u.g,null):d().createElement(d().Fragment,null,d().createElement("div",{style:R.tableContainer},this.getTable()),d().createElement("div",{style:R.paginationContainer},d().createElement("div",{style:R.pagination},this.getPagination(b,!0))))))}}const Ze=(0,O.X1)(((e,{router:t})=>{const s=(0,l.mB)(t.location.search),o=(0,w.u)(),n=x.iJ.selectIsCurrencyFeatureEnabled(e)?(0,B.zC)():void 0,i={delta:"cost",filter:Object.assign(Object.assign({},Pe.filter),s.filter),filter_by:s.filter_by||Pe.filter_by,exclude:s.exclude||Pe.exclude,group_by:s.group_by||Pe.group_by,order_by:s.order_by||Pe.order_by},c=(0,l.pm)(Object.assign(Object.assign({},i),{cost_type:o,currency:n})),d=T.ZV.selectReport(e,we,Me,c),p=T.ZV.selectReportError(e,we,Me,c),h=T.ZV.selectReportFetchStatus(e,we,Me,c),u=(0,a.H)(C.NT),g=C.aX.selectProviders(e,r.l.all,u),m=C.aX.selectProvidersError(e,r.l.all,u),y=C.aX.selectProvidersFetchStatus(e,r.l.all,u);return{costType:o,currency:n,providers:(0,f.BV)(g,r.l.aws),providersError:m,providersFetchStatus:y,query:i,report:d,reportError:p,reportFetchStatus:h,reportQueryString:c}})),_e={fetchReport:T.nx.fetchReport},ke=(0,p.ZP)((0,_.E)((0,h.connect)(Ze,_e)(Be)))},62423:(e,t,s)=>{s.d(t,{e:()=>v});var o=s(76481),r=s(97027),l=s(92950),a=s.n(l),n=s(74806),i=s(77760),c=s(40493),d=s(1156),p=s(58613),h=s(14483),u=s(5842);class g extends a().Component{constructor(e,t){super(e,t),this.defaultState={isDropdownOpen:!1,isExportModalOpen:!1},this.state=Object.assign({},this.defaultState),this.getExportModal=()=>{const{groupBy:e,item:t,reportPathsType:s,reportQueryString:o}=this.props,{isExportModalOpen:r}=this.state;return a().createElement(c.X,{count:1,groupBy:e,isOpen:r,items:[t],onClose:this.handleExportModalClose,reportPathsType:s,reportQueryString:o})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleOnSelect=()=>{const{isDropdownOpen:e}=this.state;this.setState({isDropdownOpen:!e})},this.handleOnToggle=e=>{this.setState({isDropdownOpen:e})},this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleOnToggle=this.handleOnToggle.bind(this),this.handleOnSelect=this.handleOnSelect.bind(this)}render(){const{groupBy:e,isDisabled:t,showPriceListOption:s,intl:l,item:{source_uuid:n},redirectToCostModel:i,router:c}=this.props,d=[a().createElement(o.DropdownItem,{component:"button",isDisabled:t,key:"export-action",onClick:this.handleExportModalOpen},l.formatMessage(r.Z.detailsActionsExport))];return s&&d.unshift(a().createElement(o.DropdownItem,{component:"button",key:"price-list-action",isDisabled:t||e.includes(h.P)||0===n.length,onClick:()=>i(n[0],c)},l.formatMessage(r.Z.detailsActionsPriceList))),a().createElement(a().Fragment,null,a().createElement(o.Dropdown,{onSelect:this.handleOnSelect,toggle:a().createElement(o.KebabToggle,{onToggle:this.handleOnToggle}),isOpen:this.state.isDropdownOpen,isPlain:!0,position:"right",dropdownItems:d}),this.getExportModal())}}const m=(0,d.X1)(((e,t)=>({}))),y={redirectToCostModel:p.F0.redirectToCostModelFromSourceUuid},S=(0,i.connect)(m,y)(g),v=(0,n.ZP)((0,u.E)(S))},90302:(e,t,s)=>{s.d(t,{W:()=>i});var o=s(49382),r=s(12289),l=s(40794),a=s(11331),n=s(43789);const i={costColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end",paddingRight:0},defaultLabel:{minWidth:"63px"},emptyState:{backgroundColor:o.ZP.value,display:"flex",justifyContent:"center",paddingTop:a.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:n.ZP.value},infoDescription:{color:r.ZP.value,fontSize:l.ZP.value},lastReported:{textAlign:"right",paddingRight:"40px"},lastReportedColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end"},managedColumn:{textAlign:"right"},nameColumn:{width:"1%"}}},90569:(e,t,s)=>{s.d(t,{w:()=>m});var o=s(76481),r=s(52636),l=s(25441),a=s(79112),n=s(97027),i=s(92950),c=s.n(i),d=s(74806),p=s(42901),h=s(5842),u=s(90302);class g extends c().Component{constructor(e){super(e),this.getEmptyState=()=>{const{intl:e,router:t}=this.props,s=(0,a.mB)(t.location.search);if(s.filter_by)for(const e of Object.values(s.filter_by))if("*"!==e)return c().createElement(p.c,{filter:e,showMargin:!1});return c().createElement(o.EmptyState,null,c().createElement(o.EmptyStateIcon,{icon:r.Xk}),c().createElement(o.EmptyStateBody,null,e.formatMessage(n.Z.detailsEmptyState)))},this.getSortBy=e=>{const{columns:t,router:s}=this.props,o=t[e].orderBy,r=(0,a.mB)(s.location.search),l=r&&r.order_by&&r.order_by[o];return l?{index:e,direction:l}:{}},this.getSortParams=e=>({sortBy:this.getSortBy(e),onSort:this.handleOnSort,columnIndex:e}),this.handleOnSelect=(e,t,s)=>{const{onSelected:o,rows:r}=this.props;let l,a=[];-1===s?l=r.map((e=>(e.selected=t,e))):(l=[...r],l[s].selected=t,a=[l[s].item]),this.setState({rows:r},(()=>{o&&o(a,t)}))},this.handleOnSort=(e,t,s)=>{const{columns:o,onSort:r}=this.props;r&&r(o[t].orderBy,s===l.SortByDirection.asc)},this.handleOnRowClick=(e,t)=>{const{onRowClick:s,rows:o}=this.props;o.map((e=>e.selected=!1)),o[t].selected=!0,this.setState({rows:o},(()=>{s&&s(e,t)}))},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}render(){const{columns:e,intl:t,isLoading:s,isRecommendations:r,rows:a}=this.props;return c().createElement(c().Fragment,null,c().createElement(l.TableComposable,{"aria-label":t.formatMessage(n.Z.dataTableAriaLabel),gridBreakPoint:"grid-2xl",hasSelectableRowCaption:r},c().createElement(l.Thead,null,c().createElement(l.Tr,null,e.map(((e,t)=>c().createElement(l.Th,{key:`col-${t}-${e.value}`,modifier:"nowrap",sort:e.isSortable?this.getSortParams(t):void 0,style:e.style},e.name))))),c().createElement(l.Tbody,null,s?c().createElement(l.Tr,null,c().createElement(l.Td,{colSpan:100},c().createElement(o.Bullseye,null,c().createElement("div",{style:{textAlign:"center"}},c().createElement(o.Spinner,{size:"xl"}))))):a.map(((t,s)=>c().createElement(l.Tr,{isSelectable:r,isHoverable:r,isRowSelected:r&&t.selected,onRowClick:e=>this.handleOnRowClick(e,s),key:`row-${s}`},t.cells.map(((o,a)=>0!==a||r?c().createElement(l.Td,{dataLabel:e[a].name,key:`cell-${s}-${a}`,modifier:"nowrap",isActionCell:!r&&a===t.cells.length-1,style:o.style},o.value):c().createElement(l.Td,{dataLabel:e[a].name,key:`cell-${a}-${s}`,modifier:"nowrap",select:{disable:t.selectionDisabled,isSelected:t.selected,onSelect:(e,t)=>this.handleOnSelect(e,t,s),rowIndex:s},style:o.style})))))))),Boolean(0===a.length)&&c().createElement("div",{style:u.W.emptyState},this.getEmptyState()))}}const m=(0,d.ZP)((0,h.E)(g))}}]);
//# sourceMappingURL=../sourcemaps/awsDetails.e2802a5c7eefed880364f8611df1ebb6.js.map