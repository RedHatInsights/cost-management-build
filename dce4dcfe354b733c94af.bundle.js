"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[4950],{16679:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a(64146).Z},46774:(e,t,a)=>{a.d(t,{X:()=>j});var r=a(22938),s=a(45997),o=a(30232),l=a(93952),i=a(44439),n=a(92950),p=a.n(n),c=a(74806),u=a(98147),d=a(94377),h=a(77946),g=a(76821),y=a(41251),m=a(32412),b=a(48196),v=a(73861);const _={alert:{marginBottom:m.ZP.var},form:{marginLeft:b.ZP.var},modal:{input:{marginRight:v.ZP.var},ul:{marginLeft:b.ZP.var}},title:{marginBottom:m.ZP.var}};var f=a(17844),B=a(43703),S=a(35823),G=a.n(S),k=a(33307);const T="cost";class O extends p().Component{constructor(e,t){super(e,t),this.defaultState={fetchReportClicked:!1},this.state=Object.assign({},this.defaultState),this.getExport=()=>{const{report:e,reportFetchStatus:t}=this.props;e&&2===t&&(G()(e.data,this.getFileName(),"text/csv"),this.handleClose())},this.getFileName=()=>{const{endDate:e,groupBy:t,intl:a,reportPathsType:r,resolution:o,startDate:i}=this.props;return`${a.formatMessage(l.Z.exportFileName,{endDate:e,provider:r,groupBy:-1!==t.indexOf(s.P)?"tag":t,resolution:o,startDate:i})}.csv`},this.handleClose=()=>{const{reportError:e}=this.props;this.setState(Object.assign({},this.defaultState),(()=>{e||this.props.onClose(!1)}))},this.handleFetchReport=()=>{const{exportReport:e,queryString:t,reportPathsType:a}=this.props;e(a,T,t),this.setState({fetchReportClicked:!0},(()=>{this.getExport()}))}}componentDidUpdate(e){const{report:t,reportError:a}=this.props,{fetchReportClicked:r}=this.state;e.report!==t&&r&&this.getExport(),a&&this.props.onError(a)}render(){const{disabled:e,intl:t,reportFetchStatus:a}=this.props;return p().createElement(r.Button,Object.assign({},(0,g.g_)(g._q.export.submit_btn),{isDisabled:e||1===a,key:"confirm",onClick:this.handleFetchReport,variant:r.ButtonVariant.primary}),t.formatMessage(l.Z.exportGenerate))}}const x=(0,d.X1)(((e,t)=>{const{groupBy:a,isAllItems:r,items:l,query:i,reportPathsType:n,resolution:p,timeScope:c}=t;let u=i.end_date,d=i.start_date;const g=(()=>{const e=Object.assign(Object.assign({},JSON.parse(JSON.stringify(i))),{filter:Object.assign({limit:void 0,offset:void 0,resolution:p||void 0},!(d&&u)&&{time_scope_value:"previous"===c?-2:-1}),filter_by:{},limit:0,order_by:void 0,perspective:void 0,dateRange:void 0,delta:void 0});if(i.filter_by)for(const t of Object.keys(i.filter_by))void 0===e.filter_by[t]&&(e.filter_by[t]=[]),e.filter_by[t].push(i.filter_by[t]);if(r)a===s.dV&&(void 0===e.filter_by[s.dV]&&(e.filter_by[s.dV]=[]),e.filter_by[s.dV].push(i.group_by[s.dV]));else if(a===s.dV)for(const t of l){const a="organizational_unit"===t.type?s.dV:t.type;void 0===e.filter_by[a]&&(e.filter_by[a]=[]),e.filter_by[a].push(t.id)}else for(const t of l)void 0===e.filter_by[a]&&(e.filter_by[a]=[]),e.filter_by[a].push(t.id);return(0,s.pm)(e)})(),y=h.$S.selectExport(e,n,T,g),m=h.$S.selectExportError(e,n,T,g),b=h.$S.selectExportFetchStatus(e,n,T,g);if(!d||!u){const e="previous"===c,t=(0,k.x2)();e&&t.setMonth(t.getMonth()-1),u=(0,o.Z)(e?(0,f.Z)(t):t,"yyyy-MM-dd"),d=(0,o.Z)((0,B.Z)(t),"yyyy-MM-dd")}return{endDate:u,queryString:g,report:y,reportError:m,reportFetchStatus:b,startDate:d}})),Z={exportReport:h.HY.Hy},C=(0,u.connect)(x,Z)(O),E=(0,c.ZP)(C),w=[{label:l.Z.exportFormatType,value:"csv"},{label:l.Z.exportFormatType,value:"json"}],M=[{label:l.Z.exportResolution,value:"daily"},{label:l.Z.exportResolution,value:"monthly"}],R=[{label:l.Z.exportTimeScope,value:"current"},{label:l.Z.exportTimeScope,value:"previous"}];class V extends p().Component{constructor(e,t){super(e,t),this.defaultState={error:void 0,formatType:"csv",timeScope:"current",resolution:this.props.resolution||"monthly"},this.state=Object.assign({},this.defaultState),this.handleClose=()=>{this.setState(Object.assign({},this.defaultState),(()=>{this.props.onClose(!1)}))},this.handleError=e=>{this.setState({error:e})},this.handleMonthChange=(e,t)=>{this.setState({timeScope:t.currentTarget.value})},this.handleNameChange=(e,t)=>{this.setState({name:t.currentTarget.value})},this.handleResolutionChange=(e,t)=>{this.setState({resolution:t.currentTarget.value})},this.handleTypeChange=(e,t)=>{this.setState({formatType:t.currentTarget.value})},this.nameValidator=e=>0===e.trim().length?l.Z.exportNameRequired:e.length>50?l.Z.exportNameTooLong:void 0,this.handleMonthChange=this.handleMonthChange.bind(this),this.handleResolutionChange=this.handleResolutionChange.bind(this),this.handleTypeChange=this.handleTypeChange.bind(this)}render(){const{count:e=0,groupBy:t,intl:a,isAllItems:n,items:c,query:u,reportPathsType:d,showAggregateType:h=!0,showFormatType:m=!0,showTimeScope:b=!0}=this.props,{error:v,formatType:f,name:B,resolution:S,timeScope:G}=this.state;let k=[...c];this.props.isOpen&&(k=c&&0===c.length&&n?[{label:a.formatMessage(l.Z.exportAll)}]:(0,i.orderBy)(k,["label"],["asc"]));let T=a.formatMessage(l.Z.exportSelected,{groupBy:t,count:e});-1!==t.indexOf(s.P)&&(T=a.formatMessage(l.Z.exportSelected,{groupBy:"tag",count:e}));const O=new Date,x=(new Date).setMonth(O.getMonth()-1),Z=(0,o.Z)(O,"MMMM yyyy"),C=(0,o.Z)(x-1,"MMMM yyyy"),V=void 0!==B?B:a.formatMessage(l.Z.exportName,{provider:d,groupBy:-1!==t.indexOf(s.P)?"tag":t}),P=this.nameValidator(V),I=P?"error":"default";return p().createElement(r.Modal,{style:_.modal,isOpen:this.props.isOpen,onClose:this.handleClose,title:a.formatMessage(l.Z.exportTitle),variant:"small",actions:[p().createElement(E,{disabled:"error"===I,formatType:f,groupBy:t,isAllItems:n,items:c,key:"confirm",timeScope:b?G:void 0,onClose:this.handleClose,onError:this.handleError,name:V,query:u,reportPathsType:d,resolution:S}),p().createElement(r.Button,Object.assign({},(0,g.g_)(g._q.export.cancel_btn),{key:"cancel",onClick:this.handleClose,variant:r.ButtonVariant.link}),a.formatMessage(l.Z.cancel))]},v&&p().createElement(r.Alert,{variant:"danger",style:_.alert,title:a.formatMessage(l.Z.exportError)}),p().createElement("div",{style:_.title},(0,y.K)("exports")?p().createElement("span",null,a.formatMessage(l.Z.exportDesc,{value:p().createElement("b",null,a.formatMessage(l.Z.exportsTitle))})):p().createElement("span",null,a.formatMessage(l.Z.exportHeading,{groupBy:t}))),p().createElement(r.Form,{style:_.form},p().createElement(r.Grid,{hasGutter:!0,md:6},(0,y.K)("exports")&&p().createElement(r.GridItem,{span:12},p().createElement(r.FormGroup,{fieldId:"exportName",helperTextInvalid:P?a.formatMessage(P):void 0,label:a.formatMessage(l.Z.names,{count:1}),isRequired:!0,validated:I},p().createElement(r.TextInput,{isRequired:!0,type:"text",id:"exportName",name:"exportName",value:V,onChange:this.handleNameChange}))),h&&p().createElement(r.FormGroup,{fieldId:"aggregate-type",label:a.formatMessage(l.Z.exportAggregateType),isRequired:!0},p().createElement(p().Fragment,null,M.map(((e,t)=>p().createElement(r.Radio,{key:t,id:`resolution-${t}`,isValid:void 0!==e.value,label:a.formatMessage(e.label,{value:e.value}),value:e.value,checked:S===e.value,name:"resolution",onChange:this.handleResolutionChange,"aria-label":a.formatMessage(e.label,{value:e.value})}))))),b&&p().createElement(r.FormGroup,{fieldId:"timeScope",label:a.formatMessage(l.Z.exportTimeScopeTitle),isRequired:!0},p().createElement(p().Fragment,null,R.map(((e,t)=>p().createElement(r.Radio,{key:t,id:`timeScope-${t}`,isValid:void 0!==e.value,label:a.formatMessage(e.label,{date:"previous"===e.value?C:Z,value:e.value}),value:e.value,checked:G===e.value,name:"timeScope",onChange:this.handleMonthChange,"aria-label":a.formatMessage(e.label,{date:"previous"===e.value?C:Z,value:e.value})}))))),m&&(0,y.K)("exports")&&p().createElement(r.GridItem,{span:12},p().createElement(r.FormGroup,{fieldId:"formatType",label:a.formatMessage(l.Z.exportFormatTypeTitle),isRequired:!0},w.map(((e,t)=>p().createElement(r.Radio,{key:t,id:`formatType-${t}`,isValid:void 0!==e.value,label:a.formatMessage(e.label,{value:e.value}),value:e.value,checked:f===e.value,name:"formatType",onChange:this.handleTypeChange,"aria-label":a.formatMessage(e.label,{value:e.value})}))))),p().createElement(r.GridItem,{span:12},p().createElement(r.FormGroup,{label:T,fieldId:"selectedLabels"},p().createElement("ul",null,k.map(((e,t)=>p().createElement("li",{key:t},e.label)))))))))}}const P=(0,d.X1)((()=>({}))),I={exportReport:h.HY.Hy},F=(0,u.connect)(P,I)(V),j=(0,c.ZP)(F)},2088:(e,t,a)=>{a.d(t,{X:()=>Z});var r=a(22938),s=a(45997),o=a(93952),l=a(32340),i=a(92950),n=a.n(i),p=a(74806),c=a(98147),u=a(94377),d=a(38434),h=a(7917);const g={groupBySelector:{display:"flex",alignItems:"center"},groupBySelectorLabel:{marginBottom:0,marginRight:a(32412).ZP.var,whiteSpace:"nowrap"}};class y extends n().Component{constructor(e){super(e),this.defaultState={defaultItem:this.props.groupBy||this.props.options[0].value,isGroupByOpen:!1},this.state=Object.assign({},this.defaultState),this.getCurrentGroupBy=()=>{const{getIdKeyForGroupBy:e}=this.props,t=(0,s.mB)(location.search),a=t&&t.group_by?Object.keys(t.group_by):[];let r=e(t.group_by);for(const e of a)if(-1!==e.indexOf(s.dV)){r=t.group_by[s.dV];break}return r},this.getGroupByItems=()=>{const{orgReport:e}=this.props;if(!e||!e.data)return[];const t=e.data.sort(((e,t)=>e[s.iP]<t[s.iP]?-1:e[s.iP]>t[s.iP]?1:0)),a=t.filter((e=>0===e.level)),r=t.filter((e=>0!==e.level));return a.map((e=>{const a=t.find((t=>t[s.dV]===e[s.dV]));r.unshift(a)})),r.map((e=>({id:e[s.dV],toString:()=>e[s.iP]})))},this.handleGroupByClear=()=>{this.setState({currentItem:void 0})},this.handleGroupBySelected=(e,t)=>{const{onSelected:a}=this.props;this.setState({currentItem:t.id,isGroupByOpen:!1}),a&&a(`${s.dV}${t.id}`)},this.handleGroupByToggle=e=>{this.setState({isGroupByOpen:e})},this.handleGroupByClear=this.handleGroupByClear.bind(this),this.handleGroupBySelected=this.handleGroupBySelected.bind(this),this.handleGroupByToggle=this.handleGroupByToggle.bind(this)}componentDidMount(){this.setState({currentItem:this.getCurrentGroupBy()})}componentDidUpdate(e){const{groupBy:t}=this.props;e.groupBy!==t&&this.setState({currentItem:this.getCurrentGroupBy()})}render(){const{isDisabled:e=!1,intl:t}=this.props,{currentItem:a,isGroupByOpen:s}=this.state,l=this.getGroupByItems(),i=l.find((e=>e.id===a));return n().createElement("div",{style:g.groupBySelector},n().createElement(r.Select,{"aria-label":t.formatMessage(o.Z.filterByOrgUnitAriaLabel),isDisabled:e,onClear:this.handleGroupByClear,onToggle:this.handleGroupByToggle,onSelect:this.handleGroupBySelected,isOpen:s,placeholderText:t.formatMessage(o.Z.filterByOrgUnitPlaceholder),selections:i,variant:r.SelectVariant.typeahead},l.map((e=>n().createElement(r.SelectOption,{description:e.id,key:e.id,value:e})))))}}const m=(0,p.ZP)(y);var b=a(44439);class v extends n().Component{constructor(e){super(e),this.defaultState={isGroupByOpen:!1},this.state=Object.assign({},this.defaultState),this.getGroupByItems=()=>{const{tagReport:e}=this.props;if(!e||!e.data)return[];let t=!1;for(const a of e.data)if(a.hasOwnProperty("key")){t=!0;break}let a=[];if(t){const t=e.data.map((e=>{var{type:t}=e;return function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]])}return a}(e,["type"])}));a=(0,b.uniqBy)(t,"key")}else a=(0,b.uniq)(e.data);return a.map((e=>{const a=t?e.key:e;return n().createElement(r.SelectOption,{key:e.key,value:a})}))},this.getCurrentGroupBy=()=>{const e=(0,s.mB)(location.search),t=e&&e.group_by?Object.keys(e.group_by):[];let a;for(const e of t)if(-1!==e.indexOf(s.P)){a=e.slice(s.P.length);break}return a},this.handleGroupByClear=()=>{this.setState({currentItem:void 0})},this.handleGroupBySelected=(e,t)=>{const{onSelected:a}=this.props;this.setState({currentItem:t,isGroupByOpen:!1}),a&&a(`${s.P}${t}`)},this.handleGroupByToggle=e=>{this.setState({isGroupByOpen:e})},this.handleGroupByClear=this.handleGroupByClear.bind(this),this.handleGroupBySelected=this.handleGroupBySelected.bind(this),this.handleGroupByToggle=this.handleGroupByToggle.bind(this)}componentDidMount(){this.setState({currentItem:this.getCurrentGroupBy()})}componentDidUpdate(e){const{groupBy:t}=this.props;e.groupBy!==t&&this.setState({currentItem:this.getCurrentGroupBy()})}render(){const{isDisabled:e,intl:t}=this.props,{currentItem:a,isGroupByOpen:s}=this.state;return n().createElement("div",{style:g.groupBySelector},n().createElement(r.Select,{"aria-label":t.formatMessage(o.Z.filterByTagKeyAriaLabel),isDisabled:e,onClear:this.handleGroupByClear,onToggle:this.handleGroupByToggle,onSelect:this.handleGroupBySelected,isOpen:s,placeholderText:t.formatMessage(o.Z.filterByTagKeyPlaceholder),selections:a,variant:r.SelectVariant.typeahead},this.getGroupByItems()))}}const _=(0,p.ZP)(v),f=[{label:s.dV,value:s.dV}],B=[{label:s.up,value:s.up}],S="org",G="tag";class k extends n().Component{constructor(e,t){super(e,t),this.defaultState={defaultItem:this.props.groupBy||this.props.options[0].value,isGroupByOpen:!1,isGroupByOrgVisible:!1,isGroupByTagVisible:!1},this.state=Object.assign({},this.defaultState),this.getCurrentGroupBy=()=>{const{getIdKeyForGroupBy:e}=this.props,{defaultItem:t}=this.state,a=(0,s.mB)(location.search);if(!a||!a.group_by)return t;let r=e(a.group_by);const o=a&&a.group_by?Object.keys(a.group_by):[];for(const e of o){let t=e.indexOf(s.P);if(-1!==t){r=s.up,this.setState({isGroupByTagVisible:!0});break}if(t=e.indexOf(s.dV),-1!==t){r=s.dV,this.setState({isGroupByOrgVisible:!0});break}}return"date"!==r?r:t},this.getGroupBy=()=>{const{isDisabled:e}=this.props,{currentItem:t,isGroupByOpen:a}=this.state,s=this.getGroupByOptions(),o=s.find((e=>e.value===t));return n().createElement(r.Select,{id:"groupBySelect",isDisabled:e,isOpen:a,onSelect:this.handleGroupBySelected,onToggle:this.handleGroupByToggle,selections:o,variant:r.SelectVariant.single},s.map((e=>n().createElement(r.SelectOption,{key:e.value,value:e}))))},this.getGroupByOptions=()=>{const{options:e,orgReport:t,tagReport:a,intl:r}=this.props,s=[...e];return t&&t.data&&t.data.length>0&&s.push(...f),a&&a.data&&a.data.length>0&&s.push(...B),s.map((e=>({toString:()=>r.formatMessage(o.Z.groupByValuesTitleCase,{value:e.label,count:1}),value:e.value})))},this.handleGroupBySelected=(e,t)=>{const{onSelected:a}=this.props;t.value===s.dV||t.value===s.up?this.setState({currentItem:t.value,isGroupByOpen:!1,isGroupByOrgVisible:t.value===s.dV,isGroupByTagVisible:t.value===s.up}):this.setState({currentItem:t.value,isGroupByOpen:!1,isGroupByOrgVisible:!1,isGroupByTagVisible:!1},(()=>{a&&a(t.value)}))},this.handleGroupByToggle=e=>{this.setState({isGroupByOpen:e})},this.handleGroupBySelected=this.handleGroupBySelected.bind(this),this.handleGroupByToggle=this.handleGroupByToggle.bind(this)}componentDidMount(){const{fetchOrg:e,fetchTag:t,orgReportFetchStatus:a,orgReportPathsType:r,queryString:s,showOrgs:o,showTags:l,tagReportFetchStatus:i,tagReportPathsType:n}=this.props;this.setState({currentItem:this.getCurrentGroupBy()},(()=>{o&&1!==a&&e(r,S,s),l&&1!==i&&t(n,G,s)}))}componentDidUpdate(e){const{fetchOrg:t,fetchTag:a,groupBy:r,orgReportFetchStatus:s,orgReportPathsType:o,perspective:l,queryString:i,showOrgs:n,showTags:p,tagReportFetchStatus:c,tagReportPathsType:u}=this.props;if(e.groupBy!==r||e.perspective!==l){let r;e.perspective!==l&&(r={isGroupByOrgVisible:!1,isGroupByTagVisible:!1}),this.setState(Object.assign({currentItem:this.getCurrentGroupBy()},r||{}),(()=>{n&&1!==s&&t(o,S,i),p&&1!==c&&a(u,G,i)}))}}render(){const{getIdKeyForGroupBy:e,groupBy:t,isDisabled:a=!1,onSelected:s,orgReport:l,intl:i,tagReport:p}=this.props,{isGroupByOrgVisible:c,isGroupByTagVisible:u}=this.state;return n().createElement("div",{style:g.groupBySelector},n().createElement(r.Title,{headingLevel:"h3",size:"md",style:g.groupBySelectorLabel},i.formatMessage(o.Z.groupByLabel)),this.getGroupBy(),Boolean(c)&&n().createElement(m,{getIdKeyForGroupBy:e,groupBy:t,isDisabled:a,onSelected:s,options:f,orgReport:l}),Boolean(u)&&n().createElement(_,{groupBy:t,isDisabled:a,onSelected:s,options:B,tagReport:p}))}}const T=(0,u.X1)(((e,{orgReportPathsType:t,tagReportPathsType:a})=>{const r=(0,s.mB)(location.search);let o={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1}};if(r.dateRange){const e=(0,l.Ep)(r),{end_date:t,start_date:a}=(0,l.Y_)(e);o={end_date:t,start_date:a}}const i=(0,s.pm)(Object.assign(Object.assign({},o),{key_only:!0,limit:1e3})),n=h.ux.selectTag(e,a,G,i),p=h.ux.selectTagFetchStatus(e,a,G,i);return{orgReport:d.zE.selectOrg(e,t,S,i),orgReportFetchStatus:d.zE.selectOrgFetchStatus(e,t,S,i),queryString:i,tagReport:n,tagReportFetchStatus:p}})),O={fetchOrg:d.Lp.T7,fetchTag:h.xr.Xt},x=(0,c.connect)(T,O)(k),Z=(0,p.ZP)(x)},32340:(e,t,a)=>{a.d(t,{$w:()=>Z,BF:()=>M,Cj:()=>x,Cs:()=>c,Ds:()=>S,Ep:()=>w,Fg:()=>I,Ik:()=>O,J0:()=>V,KB:()=>j,KL:()=>F,NJ:()=>B,RQ:()=>D,T4:()=>P,TL:()=>R,YC:()=>T,Y_:()=>E,ZE:()=>z,f0:()=>k,fJ:()=>G,kk:()=>v,kx:()=>b,mS:()=>f,ps:()=>_,rn:()=>p,rs:()=>C});var r=a(45997),s=a(30232),o=a(93952),l=a(94329),i=a(33307),n=a(45785);const p={filter:{limit:10,offset:0},filter_by:{},order_by:{cost:"desc"}},c=[{label:o.Z.explorerDateRange,value:"current_month_to_date"},{label:o.Z.explorerDateRange,value:"previous_month_to_date"},{label:o.Z.explorerDateRange,value:"last_thirty_days"},{label:o.Z.explorerDateRange,value:"last_sixty_days"},{label:o.Z.explorerDateRange,value:"last_ninety_days"}],u=[{label:"account",value:"account"},{label:"service",value:"service"},{label:"region",value:"region"}],d=[{label:"subscription_guid",value:"subscription_guid"},{label:"service_name",value:"service_name"},{label:"resource_location",value:"resource_location"}],h=[{label:"account",value:"account"},{label:"gcp_project",value:"gcp_project"},{label:"service",value:"service"},{label:"region",value:"region"}],g=[{label:"account",value:"account"},{label:"gcp_project",value:"gcp_project"},{label:"service",value:"service"},{label:"region",value:"region"}],y=[{label:"account",value:"account"},{label:"project",value:"project"},{label:"service",value:"service"},{label:"region",value:"region"}],m=[{label:"cluster",value:"cluster"},{label:"node",value:"node"},{label:"project",value:"project"}],b=[{label:o.Z.perspectiveValues,value:"aws"}],v=[{label:o.Z.perspectiveValues,value:"aws_ocp"}],_=[{label:o.Z.perspectiveValues,value:"azure"}],f=[{label:o.Z.perspectiveValues,value:"oci"}],B=[{label:o.Z.perspectiveValues,value:"azure_ocp"}],S=[{label:o.Z.perspectiveValues,value:"gcp"}],G=[{label:o.Z.perspectiveValues,value:"gcp_ocp"}],k=[{label:o.Z.perspectiveValues,value:"ibm"}],T=[{label:o.Z.perspectiveValues,value:"ibm_ocp"}],O=[{label:o.Z.perspectiveValues,value:"ocp_cloud"}],x=[{label:o.Z.perspectiveValues,value:"ocp"}],Z=e=>{let t;return t="cost","cost"},C=e=>{let t;return t="total","total"},E=e=>{const t=new Date,a=new Date;let r;switch(e){case"previous_month_to_date":a.setDate(1),a.setMonth(a.getMonth()-1),r={end_date:(0,s.Z)(t,"yyyy-MM-dd"),start_date:(0,s.Z)(a,"yyyy-MM-dd")};break;case"last_ninety_days":r=(0,i.mI)();break;case"last_sixty_days":r=(0,i.vI)();break;case"last_thirty_days":r=(0,i.Gg)();break;default:r=(0,i.tw)()}return r},w=e=>e.dateRange||"current_month_to_date",M=({awsProviders:e,azureProviders:t,ociProviders:a,gcpProviders:r,ibmProviders:s,ocpProviders:o,queryFromRoute:i,userAccess:p})=>{const c=i.perspective;switch(c){case"aws":case"aws_ocp":case"azure":case"azure_ocp":case"gcp":case"gcp_ocp":case"ibm":case"ibm_ocp":case"ocp_cloud":return c}if((0,n.mn)(p,o))return"ocp";const u=(0,n.KT)(p)&&(0,l.JY)(e,o),d=(0,n.FW)(p)&&(0,l.JY)(t,o),h=(0,n.Sv)(p)&&(0,l.JY)(r,o),g=(0,n.tt)(p)&&(0,l.JY)(s,o);return u||d||h||g?"ocp_cloud":(0,n.n9)(p,e)?"aws":(0,n.hn)(p,t)?"azure":(0,n.HC)(p,a)?"oci":(0,n.FE)(p,r)?"gcp":(0,n.Es)(p,s)?"ibm":void 0},R=e=>{let t;switch(e){case"aws":case"aws_ocp":case"gcp":case"gcp_ocp":case"ibm":t="account";break;case"azure":case"azure_ocp":t="subscription_guid";break;case"ocp":case"ocp_cloud":t="project";break;default:t=void 0}return t},V=e=>{let t;switch(e){case"aws":case"aws_ocp":t=u;break;case"azure":case"azure_ocp":t=d;break;case"gcp":t=h;break;case"gcp_ocp":t=g;break;case"ibm":t=y;break;case"ocp":case"ocp_cloud":t=m;break;default:t=void 0}return t},P=e=>{let t;return t="aws"===e?"aws":void 0,t},I=e=>{let t;return t="cost","cost"},F=e=>{let t;switch(e){case"aws":t="aws";break;case"aws_ocp":t="aws_ocp";break;case"azure":t="azure";break;case"azure_ocp":t="azure_ocp";break;case"gcp":case"ibm":t="gcp";break;case"gcp_ocp":t="gcp_ocp";break;case"ocp":t="ocp";break;case"ocp_cloud":t="ocp_cloud";break;default:t=void 0}return t},j=e=>{let t;switch(e){case"aws":return"aws";case"aws_ocp":return"aws_ocp";case"azure":return"azure";case"azure_ocp":return"azure_ocp";case"gcp":return"gcp";case"gcp_ocp":return"gcp_ocp";case"ibm":return"ibm";case"ocp":return"ocp";case"ocp_cloud":return"ocp_cloud";default:t=void 0}return t},D=e=>{let t;switch(e){case"aws":return"aws";case"aws_ocp":return"aws_ocp";case"azure":return"azure";case"azure_ocp":return"azure_ocp";case"gcp":case"ibm":return"gcp";case"gcp_ocp":return"gcp_ocp";case"ocp":return"ocp";case"ocp_cloud":return"ocp_cloud";default:t=void 0}return t},z=(e,t,a=!1)=>(a&&(t.filter=Object.assign(Object.assign({},t.filter),{offset:p.filter.offset})),`${e.location.pathname}?${(0,r.IV)(t)}`)},76821:(e,t,a)=>{a.d(t,{_q:()=>s,g_:()=>r});const r=e=>({"data-testid":e}),s={details:{cluster_lnk:"cluster-lnk",historical_data_btn:"historical-data-btn",show_more_btn:"show-more-btn",tag_lnk:"tag-lnk",view_all_btn:"view-all-btn"},export:{cancel_btn:"cancel-btn",submit_btn:"submit-btn"},login:{alert:"alert",form:"login-form",username_input:"username-input",password_input:"password-input",submit:"submit"},masthead:{masthead:"masthead",username:"username",sidebarToggle:"sidebar-toggle",logout:"logout"},onboarding:{btn_cancel:"btn-cancel",btn_back:"btn-back",btn_continue:"btn-continue",btn_close:"btn-close",type_selector:"type-selector",type_opt_aws:"type-option-aws",type_opt_ocp:"type-option-ocp",type_opt_non:"type-option-non",name_input:"name-input",check_box_1:"check-box-1",check_box_2:"check-box-2",s3_input:"s3-input",clusterid_input:"clusterid-input",arn_input:"arn-input"},providers:{add_btn:"add-btn",bucket_input:"bucket-input",cancel_btn:"cancel-btn",empty_state_add_btn:"empty_state_add-btn",name_input:"provider-name-input",resource_name_input:"provider-resource-name-input",cluster_id_input:"provider-cluster-id-input",submit_btn:"submit-btn",type_input:"provider-type-input"},sidebar:{nav:"vertical-nav",link:"vertical-nav-link",backdrop:"sidebar-backdrop"}}}}]);
//# sourceMappingURL=dce4dcfe354b733c94af.bundle.js.map