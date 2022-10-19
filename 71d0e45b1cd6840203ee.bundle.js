"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[464],{27681:(e,t,r)=>{r.d(t,{J:()=>a.Z});var a=r(8837)},20963:(e,t,r)=>{r.d(t,{W:()=>p});var a=r(55189),s=r(99699),o=r(39173),i=r(23683),n=r(92950),l=r.n(n);const p=(0,r(16550).EN)((({title:e})=>l().createElement(l().Fragment,null,e&&l().createElement(s.Z,null,l().createElement(o.Z,{title:e})),l().createElement(a.Z,null,l().createElement(i.Z,null)))))},44149:(e,t,r)=>{r.d(t,{X:()=>D});var a=r(13157),s=r(45997),o=r(95147),i=r(93952),n=r(44439),l=r(92950),p=r.n(l),u=r(74806),c=r(78741),d=r(94377),h=r(77946),g=r(21084),y=r(76821),m=r(32412),b=r(48196),f=r(73861);const v={alert:{marginBottom:m.ZP.var},form:{marginLeft:b.ZP.var},modal:{input:{marginRight:f.ZP.var},ul:{marginLeft:b.ZP.var}},title:{marginBottom:m.ZP.var}};var B=r(4135),S=r(43703),_=r(35823),O=r.n(_),G=r(25332),T=r(16732);const E="cost";class x extends p().Component{constructor(e,t){super(e,t),this.defaultState={fetchReportClicked:!1},this.state=Object.assign({},this.defaultState),this.getExport=()=>{const{report:e,reportFetchStatus:t}=this.props;e&&2===t&&(O()(e.data,this.getFileName(),"text/csv"),this.handleClose())},this.getFileName=()=>{const{endDate:e,groupBy:t,intl:r,reportPathsType:a,resolution:o,startDate:n}=this.props;return`${r.formatMessage(i.Z.exportFileName,{endDate:e,provider:a,groupBy:-1!==t.indexOf(s.P)?"tag":t,resolution:o,startDate:n})}.csv`},this.handleClose=()=>{const{reportError:e}=this.props;this.setState(Object.assign({},this.defaultState),(()=>{e||this.props.onClose(!1)}))},this.handleFetchReport=()=>{const{exportReport:e,isExportsFeatureEnabled:t,queryString:r,reportPathsType:a}=this.props;e(a,E,r,t),this.setState({fetchReportClicked:!0},(()=>{this.getExport()}))}}componentDidUpdate(e){const{report:t,reportError:r}=this.props,{fetchReportClicked:a}=this.state;e.report!==t&&a&&this.getExport(),r&&this.props.onError(r)}render(){const{disabled:e,intl:t,reportFetchStatus:r}=this.props;return p().createElement(a.Button,Object.assign({},(0,y.g_)(y._q.export.submit_btn),{isDisabled:e||1===r,key:"confirm",onClick:this.handleFetchReport,variant:a.ButtonVariant.primary}),t.formatMessage(i.Z.exportGenerate))}}const k=(0,d.X1)(((e,t)=>{const{groupBy:r,isAllItems:a,items:i,query:n,reportPathsType:l,resolution:p,timeScope:u}=t;let{end_date:c,start_date:d}=(0,G.Y)(n.dateRange);if(!n.dateRange){const e="previous"===u,t=(0,T.x2)();e&&t.setMonth(t.getMonth()-1),c=(0,o.Z)(e?(0,B.Z)(t):t,"yyyy-MM-dd"),d=(0,o.Z)((0,S.Z)(t),"yyyy-MM-dd")}const y=(()=>{const e=Object.assign(Object.assign({},JSON.parse(JSON.stringify(n))),{filter:{limit:void 0,offset:void 0,resolution:p||void 0},filter_by:{},limit:0,order_by:void 0,perspective:void 0,dateRange:void 0,delta:void 0,start_date:d,end_date:c});if(n.filter_by)for(const t of Object.keys(n.filter_by))void 0===e.filter_by[t]&&(e.filter_by[t]=[]),e.filter_by[t].push(n.filter_by[t]);if(a)r===s.dV&&(void 0===e.filter_by[s.dV]&&(e.filter_by[s.dV]=[]),e.filter_by[s.dV].push(n.group_by[s.dV]));else if(r===s.dV)for(const t of i){const r="organizational_unit"===t.type?s.dV:t.type;void 0===e.filter_by[r]&&(e.filter_by[r]=[]),e.filter_by[r].push(t.id)}else for(const t of i)void 0===e.filter_by[r]&&(e.filter_by[r]=[]),e.filter_by[r].push(t.id);return(0,s.pm)(e)})(),m=h.$S.selectExport(e,l,E,y),b=h.$S.selectExportError(e,l,E,y),f=h.$S.selectExportFetchStatus(e,l,E,y);return{endDate:c,isExportsFeatureEnabled:g.iJ.selectIsExportsFeatureEnabled(e),queryString:y,report:m,reportError:b,reportFetchStatus:f,startDate:d}})),C={exportReport:h.HY.Hy},M=(0,c.connect)(k,C)(x),Z=(0,u.ZP)(M),R=[{label:i.Z.exportFormatType,value:"csv"},{label:i.Z.exportFormatType,value:"json"}],I=[{label:i.Z.exportResolution,value:"daily"},{label:i.Z.exportResolution,value:"monthly"}],V=[{label:i.Z.exportTimeScope,value:"current"},{label:i.Z.exportTimeScope,value:"previous"}];class F extends p().Component{constructor(e,t){super(e,t),this.defaultState={error:void 0,formatType:"csv",timeScope:"current",resolution:this.props.resolution||"monthly"},this.state=Object.assign({},this.defaultState),this.handleClose=()=>{this.setState(Object.assign({},this.defaultState),(()=>{this.props.onClose(!1)}))},this.handleError=e=>{this.setState({error:e})},this.handleMonthChange=(e,t)=>{this.setState({timeScope:t.currentTarget.value})},this.handleNameChange=(e,t)=>{this.setState({name:t.currentTarget.value})},this.handleResolutionChange=(e,t)=>{this.setState({resolution:t.currentTarget.value})},this.handleTypeChange=(e,t)=>{this.setState({formatType:t.currentTarget.value})},this.nameValidator=e=>0===e.trim().length?i.Z.exportNameRequired:e.length>50?i.Z.exportNameTooLong:void 0,this.handleMonthChange=this.handleMonthChange.bind(this),this.handleResolutionChange=this.handleResolutionChange.bind(this),this.handleTypeChange=this.handleTypeChange.bind(this)}render(){const{count:e=0,groupBy:t,intl:r,isAllItems:l,isExportsFeatureEnabled:u,items:c,query:d,reportPathsType:h,showAggregateType:g=!0,showFormatType:m=!0,showTimeScope:b=!0}=this.props,{error:f,formatType:B,name:S,resolution:_,timeScope:O}=this.state;let G=[...c];this.props.isOpen&&(G=c&&0===c.length&&l?[{label:r.formatMessage(i.Z.exportAll)}]:(0,n.orderBy)(G,["label"],["asc"]));let T=r.formatMessage(i.Z.exportSelected,{groupBy:t,count:e});-1!==t.indexOf(s.P)&&(T=r.formatMessage(i.Z.exportSelected,{groupBy:"tag",count:e}));const E=new Date,x=(new Date).setMonth(E.getMonth()-1),k=(0,o.Z)(E,"MMMM yyyy"),C=(0,o.Z)(x-1,"MMMM yyyy"),M=void 0!==S?S:r.formatMessage(i.Z.exportName,{provider:h,groupBy:-1!==t.indexOf(s.P)?"tag":t}),F=u?this.nameValidator(M):void 0,P=F?"error":"default";return p().createElement(a.Modal,{style:v.modal,isOpen:this.props.isOpen,onClose:this.handleClose,title:r.formatMessage(i.Z.exportTitle),variant:"small",actions:[p().createElement(Z,{disabled:"error"===P,formatType:B,groupBy:t,isAllItems:l,items:c,key:"confirm",timeScope:b?O:void 0,onClose:this.handleClose,onError:this.handleError,name:M,query:d,reportPathsType:h,resolution:_}),p().createElement(a.Button,Object.assign({},(0,y.g_)(y._q.export.cancel_btn),{key:"cancel",onClick:this.handleClose,variant:a.ButtonVariant.link}),r.formatMessage(i.Z.cancel))]},f&&p().createElement(a.Alert,{variant:"danger",style:v.alert,title:r.formatMessage(i.Z.exportError)}),p().createElement("div",{style:v.title},u?p().createElement("span",null,r.formatMessage(i.Z.exportDesc,{value:p().createElement("b",null,r.formatMessage(i.Z.exportsTitle))})):p().createElement("span",null,r.formatMessage(i.Z.exportHeading,{groupBy:t}))),p().createElement(a.Form,{style:v.form},p().createElement(a.Grid,{hasGutter:!0,md:6},u&&p().createElement(a.GridItem,{span:12},p().createElement(a.FormGroup,{fieldId:"exportName",helperTextInvalid:F?r.formatMessage(F):void 0,label:r.formatMessage(i.Z.names,{count:1}),isRequired:!0,validated:P},p().createElement(a.TextInput,{isRequired:!0,type:"text",id:"exportName",name:"exportName",value:M,onChange:this.handleNameChange}))),g&&p().createElement(a.FormGroup,{fieldId:"aggregate-type",label:r.formatMessage(i.Z.exportAggregateType),isRequired:!0},p().createElement(p().Fragment,null,I.map(((e,t)=>p().createElement(a.Radio,{key:t,id:`resolution-${t}`,isValid:void 0!==e.value,label:r.formatMessage(e.label,{value:e.value}),value:e.value,checked:_===e.value,name:"resolution",onChange:this.handleResolutionChange,"aria-label":r.formatMessage(e.label,{value:e.value})}))))),b&&p().createElement(a.FormGroup,{fieldId:"timeScope",label:r.formatMessage(i.Z.exportTimeScopeTitle),isRequired:!0},p().createElement(p().Fragment,null,V.map(((e,t)=>p().createElement(a.Radio,{key:t,id:`timeScope-${t}`,isValid:void 0!==e.value,label:r.formatMessage(e.label,{date:"previous"===e.value?C:k,value:e.value}),value:e.value,checked:O===e.value,name:"timeScope",onChange:this.handleMonthChange,"aria-label":r.formatMessage(e.label,{date:"previous"===e.value?C:k,value:e.value})}))))),m&&u&&p().createElement(a.GridItem,{span:12},p().createElement(a.FormGroup,{fieldId:"formatType",label:r.formatMessage(i.Z.exportFormatTypeTitle),isRequired:!0},R.map(((e,t)=>p().createElement(a.Radio,{key:t,id:`formatType-${t}`,isValid:void 0!==e.value,label:r.formatMessage(e.label,{value:e.value}),value:e.value,checked:B===e.value,name:"formatType",onChange:this.handleTypeChange,"aria-label":r.formatMessage(e.label,{value:e.value})}))))),p().createElement(a.GridItem,{span:12},p().createElement(a.FormGroup,{label:T,fieldId:"selectedLabels"},p().createElement("ul",null,G.map(((e,t)=>p().createElement("li",{key:t},e.label)))))))))}}const P=(0,d.X1)((e=>({isExportsFeatureEnabled:g.iJ.selectIsExportsFeatureEnabled(e)}))),j={exportReport:h.HY.Hy},w=(0,c.connect)(P,j)(F),D=(0,u.ZP)(w)},29106:(e,t,r)=>{r.d(t,{X:()=>k});var a=r(13157),s=r(45997),o=r(93952),i=r(92950),n=r.n(i),l=r(74806),p=r(78741),u=r(25332),c=r(94377),d=r(38434),h=r(7917);const g={groupBySelector:{display:"flex",alignItems:"center"},groupBySelectorLabel:{marginBottom:0,marginRight:r(32412).ZP.var,whiteSpace:"nowrap"}};class y extends n().Component{constructor(e){super(e),this.defaultState={defaultItem:this.props.groupBy||this.props.options[0].value,isGroupByOpen:!1},this.state=Object.assign({},this.defaultState),this.getCurrentGroupBy=()=>{const{getIdKeyForGroupBy:e}=this.props,t=(0,s.mB)(location.search),r=t&&t.group_by?Object.keys(t.group_by):[];let a=e(t.group_by);for(const e of r)if(-1!==e.indexOf(s.dV)){a=t.group_by[s.dV];break}return a},this.getGroupByItems=()=>{const{orgReport:e}=this.props;if(!e||!e.data)return[];const t=e.data.sort(((e,t)=>e[s.iP]<t[s.iP]?-1:e[s.iP]>t[s.iP]?1:0)),r=t.filter((e=>0===e.level)),a=t.filter((e=>0!==e.level));return r.map((e=>{const r=t.find((t=>t[s.dV]===e[s.dV]));a.unshift(r)})),a.map((e=>({id:e[s.dV],toString:()=>e[s.iP]})))},this.handleGroupByClear=()=>{this.setState({currentItem:void 0})},this.handleGroupBySelected=(e,t)=>{const{onSelected:r}=this.props;this.setState({currentItem:t.id,isGroupByOpen:!1}),r&&r(`${s.dV}${t.id}`)},this.handleGroupByToggle=e=>{this.setState({isGroupByOpen:e})},this.handleGroupByClear=this.handleGroupByClear.bind(this),this.handleGroupBySelected=this.handleGroupBySelected.bind(this),this.handleGroupByToggle=this.handleGroupByToggle.bind(this)}componentDidMount(){this.setState({currentItem:this.getCurrentGroupBy()})}componentDidUpdate(e){const{groupBy:t}=this.props;e.groupBy!==t&&this.setState({currentItem:this.getCurrentGroupBy()})}render(){const{isDisabled:e=!1,intl:t}=this.props,{currentItem:r,isGroupByOpen:s}=this.state,i=this.getGroupByItems(),l=i.find((e=>e.id===r));return n().createElement("div",{style:g.groupBySelector},n().createElement(a.Select,{"aria-label":t.formatMessage(o.Z.filterByOrgUnitAriaLabel),isDisabled:e,onClear:this.handleGroupByClear,onToggle:this.handleGroupByToggle,onSelect:this.handleGroupBySelected,isOpen:s,placeholderText:t.formatMessage(o.Z.filterByOrgUnitPlaceholder),selections:l,variant:a.SelectVariant.typeahead},i.map((e=>n().createElement(a.SelectOption,{description:e.id,key:e.id,value:e})))))}}const m=(0,l.ZP)(y);var b=r(44439);class f extends n().Component{constructor(e){super(e),this.defaultState={isGroupByOpen:!1},this.state=Object.assign({},this.defaultState),this.getGroupByItems=()=>{const{tagReport:e}=this.props;if(!e||!e.data)return[];let t=!1;for(const r of e.data)if(r.hasOwnProperty("key")){t=!0;break}let r=[];if(t){const t=e.data.map((e=>{var{type:t}=e;return function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]])}return r}(e,["type"])}));r=(0,b.uniqBy)(t,"key")}else r=(0,b.uniq)(e.data);return r.map(((e,r)=>{const s=t?e.key:e;return n().createElement(a.SelectOption,{key:`${s}:${r}`,value:s})}))},this.getCurrentGroupBy=()=>{const e=(0,s.mB)(location.search),t=e&&e.group_by?Object.keys(e.group_by):[];let r;for(const e of t)if(-1!==e.indexOf(s.P)){r=e.slice(s.P.length);break}return r},this.handleGroupByClear=()=>{this.setState({currentItem:void 0})},this.handleGroupBySelected=(e,t)=>{const{onSelected:r}=this.props;this.setState({currentItem:t,isGroupByOpen:!1}),r&&r(`${s.P}${t}`)},this.handleGroupByToggle=e=>{this.setState({isGroupByOpen:e})},this.handleGroupByClear=this.handleGroupByClear.bind(this),this.handleGroupBySelected=this.handleGroupBySelected.bind(this),this.handleGroupByToggle=this.handleGroupByToggle.bind(this)}componentDidMount(){this.setState({currentItem:this.getCurrentGroupBy()})}componentDidUpdate(e){const{groupBy:t}=this.props;e.groupBy!==t&&this.setState({currentItem:this.getCurrentGroupBy()})}render(){const{isDisabled:e,intl:t}=this.props,{currentItem:r,isGroupByOpen:s}=this.state;return n().createElement("div",{style:g.groupBySelector},n().createElement(a.Select,{"aria-label":t.formatMessage(o.Z.filterByTagKeyAriaLabel),isDisabled:e,onClear:this.handleGroupByClear,onToggle:this.handleGroupByToggle,onSelect:this.handleGroupBySelected,isOpen:s,placeholderText:t.formatMessage(o.Z.filterByTagKeyPlaceholder),selections:r,variant:a.SelectVariant.typeahead},this.getGroupByItems()))}}const v=(0,l.ZP)(f),B=[{label:s.dV,value:s.dV}],S=[{label:s.up,value:s.up}],_="org",O="tag";class G extends n().Component{constructor(e,t){super(e,t),this.defaultState={defaultItem:this.props.groupBy||this.props.options[0].value,isGroupByOpen:!1,isGroupByOrgVisible:!1,isGroupByTagVisible:!1},this.state=Object.assign({},this.defaultState),this.getCurrentGroupBy=()=>{const{getIdKeyForGroupBy:e}=this.props,{defaultItem:t}=this.state,r=(0,s.mB)(location.search);if(!r||!r.group_by)return t;let a=e(r.group_by);const o=r&&r.group_by?Object.keys(r.group_by):[];for(const e of o){let t=e.indexOf(s.P);if(-1!==t){a=s.up,this.setState({isGroupByTagVisible:!0});break}if(t=e.indexOf(s.dV),-1!==t){a=s.dV,this.setState({isGroupByOrgVisible:!0});break}}return"date"!==a?a:t},this.getGroupBy=()=>{const{isDisabled:e}=this.props,{currentItem:t,isGroupByOpen:r}=this.state,s=this.getGroupByOptions(),o=s.find((e=>e.value===t));return n().createElement(a.Select,{id:"groupBySelect",isDisabled:e,isOpen:r,onSelect:this.handleGroupBySelected,onToggle:this.handleGroupByToggle,selections:o,variant:a.SelectVariant.single},s.map((e=>n().createElement(a.SelectOption,{key:e.value,value:e}))))},this.getGroupByOptions=()=>{const{options:e,orgReport:t,tagReport:r,intl:a}=this.props,s=[...e];return t&&t.data&&t.data.length>0&&s.push(...B),r&&r.data&&r.data.length>0&&s.push(...S),s.map((e=>({toString:()=>a.formatMessage(o.Z.groupByValuesTitleCase,{value:e.label,count:1}),value:e.value})))},this.handleGroupBySelected=(e,t)=>{const{onSelected:r}=this.props;t.value===s.dV||t.value===s.up?this.setState({currentItem:t.value,isGroupByOpen:!1,isGroupByOrgVisible:t.value===s.dV,isGroupByTagVisible:t.value===s.up}):this.setState({currentItem:t.value,isGroupByOpen:!1,isGroupByOrgVisible:!1,isGroupByTagVisible:!1},(()=>{r&&r(t.value)}))},this.handleGroupByToggle=e=>{this.setState({isGroupByOpen:e})},this.handleGroupBySelected=this.handleGroupBySelected.bind(this),this.handleGroupByToggle=this.handleGroupByToggle.bind(this)}componentDidMount(){const{fetchOrg:e,fetchTag:t,orgReportFetchStatus:r,orgReportPathsType:a,queryString:s,showOrgs:o,showTags:i,tagReportFetchStatus:n,tagReportPathsType:l}=this.props;this.setState({currentItem:this.getCurrentGroupBy()},(()=>{o&&1!==r&&e(a,_,s),i&&1!==n&&t(l,O,s)}))}componentDidUpdate(e){const{fetchOrg:t,fetchTag:r,groupBy:a,orgReportFetchStatus:s,orgReportPathsType:o,perspective:i,queryString:n,showOrgs:l,showTags:p,tagReportFetchStatus:u,tagReportPathsType:c}=this.props;if(e.groupBy!==a||e.perspective!==i){let a;e.perspective!==i&&(a={isGroupByOrgVisible:!1,isGroupByTagVisible:!1}),this.setState(Object.assign({currentItem:this.getCurrentGroupBy()},a||{}),(()=>{l&&1!==s&&t(o,_,n),p&&1!==u&&r(c,O,n)}))}}render(){const{getIdKeyForGroupBy:e,groupBy:t,isDisabled:r=!1,onSelected:s,orgReport:i,intl:l,tagReport:p}=this.props,{isGroupByOrgVisible:u,isGroupByTagVisible:c}=this.state;return n().createElement("div",{style:g.groupBySelector},n().createElement(a.Title,{headingLevel:"h3",size:"md",style:g.groupBySelectorLabel},l.formatMessage(o.Z.groupByLabel)),this.getGroupBy(),Boolean(u)&&n().createElement(m,{getIdKeyForGroupBy:e,groupBy:t,isDisabled:r,onSelected:s,options:B,orgReport:i}),Boolean(c)&&n().createElement(v,{groupBy:t,isDisabled:r,onSelected:s,options:S,tagReport:p}))}}const T=(0,c.X1)(((e,{orgReportPathsType:t,tagReportPathsType:r})=>{const a=(0,s.mB)(location.search);let o={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1}};if(a.dateRange){const e=(0,u.E)(a),{end_date:t,start_date:r}=(0,u.Y)(e);o={end_date:t,start_date:r}}const i=(0,s.pm)(Object.assign(Object.assign({},o),{key_only:!0,limit:1e3})),n=h.ux.selectTag(e,r,O,i),l=h.ux.selectTagFetchStatus(e,r,O,i);return{orgReport:d.zE.selectOrg(e,t,_,i),orgReportFetchStatus:d.zE.selectOrgFetchStatus(e,t,_,i),queryString:i,tagReport:n,tagReportFetchStatus:l}})),E={fetchOrg:d.Lp.T7,fetchTag:h.xr.Xt},x=(0,p.connect)(T,E)(G),k=(0,l.ZP)(x)},25332:(e,t,r)=>{r.d(t,{E:()=>i,Y:()=>o});var a=r(95147),s=r(16732);const o=e=>{const t=new Date,r=new Date;let o;switch(e){case"previous_month_to_date":r.setDate(1),r.setMonth(r.getMonth()-1),o={end_date:(0,a.Z)(t,"yyyy-MM-dd"),start_date:(0,a.Z)(r,"yyyy-MM-dd")};break;case"last_ninety_days":o=(0,s.mI)();break;case"last_sixty_days":o=(0,s.vI)();break;case"last_thirty_days":o=(0,s.Gg)();break;default:o=(0,s.tw)()}return o},i=e=>e.dateRange||"current_month_to_date"},25958:(e,t,r)=>{r.d(t,{$3:()=>l,$9:()=>c,ZE:()=>o,_s:()=>i,jl:()=>n,q7:()=>p,xh:()=>u,yB:()=>d});var a=r(45997),s=r(26609);const o=(e,t,r=!1)=>(r&&(t.filter=Object.assign(Object.assign({},t.filter),{offset:0})),`${e.location.pathname}?${(0,a.IV)(t)}`),i=(e,t,r,a=!1)=>{const s=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{currency:r});e.replace(o(e,s,a))},n=(e,t,r,a=!1)=>{const s=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{cost_type:r});e.replace(o(e,s,a))},l=(e,t,r)=>{const a=(0,s.oQ)(t,r);e.replace(o(e,a,!0))},p=(e,t,r)=>{const a=(0,s.cJ)(t,r);e.replace(o(e,a,!0))},u=(e,t,r)=>{const a=Object.assign({},JSON.parse(JSON.stringify(t)));a.filter=Object.assign(Object.assign({},t.filter),{limit:r});const s=o(e,a,!0);e.replace(s)},c=(e,t,r,a)=>{const s=r&&r.meta&&r.meta.filter&&r.meta.filter.limit?r.meta.filter.limit:10,i=a*s-s,n=Object.assign({},JSON.parse(JSON.stringify(t)));n.filter=Object.assign(Object.assign({},t.filter),{offset:i});const l=o(e,n);e.replace(l)},d=(e,t,r,a,s)=>{const i=Object.assign({},JSON.parse(JSON.stringify(t)));i.order_by={},i.order_by[r]=a?"asc":"desc",s&&(i.order_by.date=s);const n=o(e,i);e.replace(n)}},76821:(e,t,r)=>{r.d(t,{_q:()=>s,g_:()=>a});const a=e=>({"data-testid":e}),s={details:{cluster_lnk:"cluster-lnk",historical_data_btn:"historical-data-btn",show_more_btn:"show-more-btn",tag_lnk:"tag-lnk",view_all_btn:"view-all-btn"},export:{cancel_btn:"cancel-btn",submit_btn:"submit-btn"},login:{alert:"alert",form:"login-form",username_input:"username-input",password_input:"password-input",submit:"submit"},masthead:{masthead:"masthead",username:"username",sidebarToggle:"sidebar-toggle",logout:"logout"},onboarding:{btn_cancel:"btn-cancel",btn_back:"btn-back",btn_continue:"btn-continue",btn_close:"btn-close",type_selector:"type-selector",type_opt_aws:"type-option-aws",type_opt_ocp:"type-option-ocp",type_opt_non:"type-option-non",name_input:"name-input",check_box_1:"check-box-1",check_box_2:"check-box-2",s3_input:"s3-input",clusterid_input:"clusterid-input",arn_input:"arn-input"},providers:{add_btn:"add-btn",bucket_input:"bucket-input",cancel_btn:"cancel-btn",empty_state_add_btn:"empty_state_add-btn",name_input:"provider-name-input",resource_name_input:"provider-resource-name-input",cluster_id_input:"provider-cluster-id-input",submit_btn:"submit-btn",type_input:"provider-type-input"},sidebar:{nav:"vertical-nav",link:"vertical-nav-link",backdrop:"sidebar-backdrop"}}}}]);
//# sourceMappingURL=71d0e45b1cd6840203ee.bundle.js.map