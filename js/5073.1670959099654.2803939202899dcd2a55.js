(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[5073],{52636:(e,t,r)=>{"use strict";r.d(t,{Xk:()=>s,rU:()=>o});var a=r(40400);const o={name:"CalculatorIcon",height:512,width:448,svgPath:"M400 0H48C22.4 0 0 22.4 0 48v416c0 25.6 22.4 48 48 48h352c25.6 0 48-22.4 48-48V48c0-25.6-22.4-48-48-48zM128 435.2c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8V268.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v166.4zm0-256c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8V76.8C64 70.4 70.4 64 76.8 64h294.4c6.4 0 12.8 6.4 12.8 12.8v102.4z",yOffset:0,xOffset:0},s=(0,a.IU)(o)},35823:e=>{e.exports=function(e,t,r,a){var o=new Blob(void 0!==a?[a,e]:[e],{type:r||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(o,t);else{var s=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(o):window.webkitURL.createObjectURL(o),i=document.createElement("a");i.style.display="none",i.href=s,i.setAttribute("download",t),void 0===i.download&&i.setAttribute("target","_blank"),document.body.appendChild(i),i.click(),setTimeout((function(){document.body.removeChild(i),window.URL.revokeObjectURL(s)}),200)}}},40493:(e,t,r)=>{"use strict";r.d(t,{X:()=>j});var a=r(54653),o=r(39333),s=r(95147),i=r(97027),n=r(44439),l=r(92950),p=r.n(l),u=r(74806),h=r(77760),c=r(1156),d=r(78898),g=r(32412),y=r(48196),m=r(43789);const f={alert:{marginBottom:g.ZP.var},form:{marginLeft:y.ZP.var},modal:{input:{marginRight:m.ZP.var},ul:{marginLeft:y.ZP.var}},title:{marginBottom:g.ZP.var}};var b=r(6456),v=r(4135),B=r(43703),S=r(35823),G=r.n(S),T=r(77789),x=r(93931),E=r(45087),O=r(5842);const C=b.C.cost;class M extends p().Component{constructor(e,t){super(e,t),this.defaultState={fetchExportClicked:!1},this.state=Object.assign({},this.defaultState),this.getExport=()=>{const{exportFetchStatus:e,exportReport:t}=this.props;t&&e===c.iF.complete&&(G()(t.data,this.getFileName(),"text/csv"),this.handleClose())},this.getFileName=()=>{const{endDate:e,groupBy:t,intl:r,reportPathsType:a,resolution:s,startDate:n}=this.props;return`${r.formatMessage(i.Z.exportFileName,{endDate:e,provider:a,groupBy:-1!==t.indexOf(o.P)?"tag":t,resolution:s,startDate:n})}.csv`},this.handleClose=()=>{const{exportError:e}=this.props;this.setState(Object.assign({},this.defaultState),(()=>{e||this.props.onClose(!1)}))},this.handleFetchExport=()=>{const{exportQueryString:e,fetchExport:t,isExportsFeatureEnabled:r,reportPathsType:a}=this.props;t(a,C,e,r),this.setState({fetchExportClicked:!0},(()=>{this.getExport()}))}}componentDidUpdate(e){const{exportError:t,exportReport:r}=this.props,{fetchExportClicked:a}=this.state;e.exportReport!==r&&a&&this.getExport(),t&&this.props.onError(t)}render(){const{disabled:e,exportFetchStatus:t,intl:r}=this.props;return p().createElement(a.Button,{ouiaId:"submit-btn",isDisabled:e||t===c.iF.inProgress,key:"confirm",onClick:this.handleFetchExport,variant:a.ButtonVariant.primary},r.formatMessage(i.Z.exportGenerate))}}const _=(0,c.X1)(((e,t)=>{const{groupBy:r,isAllItems:a,items:i,reportPathsType:n,reportQueryString:l,resolution:p,router:u,timeScope:h}=t,c=(0,o.mB)(u.location.search),{end_date:g,start_date:y}=(()=>{if(c.dateRangeType)return(0,T.H7)(c);{const e="previous"===h,t=(0,E.x2)();return e&&t.setMonth(t.getMonth()-1),{end_date:(0,s.Z)(e?(0,v.Z)(t):t,"yyyy-MM-dd"),start_date:(0,s.Z)((0,B.Z)(t),"yyyy-MM-dd")}}})(),m=(()=>{const e=(0,o.mB)(l),t=Object.assign(Object.assign({},e),{delta:void 0,filter:{limit:void 0,offset:void 0,resolution:p||void 0},filter_by:{},limit:0,order_by:void 0,start_date:y,end_date:g});if(c.filter_by)for(const e of Object.keys(c.filter_by))void 0===t.filter_by[e]&&(t.filter_by[e]=[]),t.filter_by[e].push(c.filter_by[e]);if(a)r===o.dV&&(void 0===t.filter_by[o.dV]&&(t.filter_by[o.dV]=[]),t.filter_by[o.dV].push(c.group_by[o.dV]));else if(r===o.dV)for(const e of i){const r="organizational_unit"===e.type?o.dV:e.type;void 0===t.filter_by[r]&&(t.filter_by[r]=[]),t.filter_by[r].push(e.id)}else for(const e of i)void 0===t.filter_by[r]&&(t.filter_by[r]=[]),t.filter_by[r].push(e.id);return(0,o.pm)(t)})(),f=x.$S.selectExport(e,n,C,m),b=x.$S.selectExportError(e,n,C,m),S=x.$S.selectExportFetchStatus(e,n,C,m);return{endDate:g,exportError:b,exportFetchStatus:S,exportQueryString:m,exportReport:f,isExportsFeatureEnabled:d.iJ.selectIsExportsFeatureEnabled(e),startDate:y}})),R={fetchExport:x.HY.xC},k=(0,h.connect)(_,R)(M),I=(0,u.ZP)((0,O.E)(k)),Z=[{label:i.Z.exportFormatType,value:"csv"},{label:i.Z.exportFormatType,value:"json"}],F=[{label:i.Z.exportResolution,value:"daily"},{label:i.Z.exportResolution,value:"monthly"}],P=[{label:i.Z.exportTimeScope,value:"current"},{label:i.Z.exportTimeScope,value:"previous"}];class V extends p().Component{constructor(e,t){super(e,t),this.defaultState={error:void 0,formatType:"csv",timeScope:"current",resolution:this.props.resolution||"monthly"},this.state=Object.assign({},this.defaultState),this.handleClose=()=>{this.setState(Object.assign({},this.defaultState),(()=>{this.props.onClose(!1)}))},this.handleError=e=>{this.setState({error:e})},this.handleMonthChange=(e,t)=>{this.setState({timeScope:t.currentTarget.value})},this.handleNameChange=(e,t)=>{this.setState({name:t.currentTarget.value})},this.handleResolutionChange=(e,t)=>{this.setState({resolution:t.currentTarget.value})},this.handleTypeChange=(e,t)=>{this.setState({formatType:t.currentTarget.value})},this.nameValidator=e=>0===e.trim().length?i.Z.exportNameRequired:e.length>50?i.Z.exportNameTooLong:void 0,this.handleMonthChange=this.handleMonthChange.bind(this),this.handleResolutionChange=this.handleResolutionChange.bind(this),this.handleTypeChange=this.handleTypeChange.bind(this)}render(){const{count:e=0,groupBy:t,intl:r,isAllItems:l,isExportsFeatureEnabled:u,items:h,reportPathsType:c,reportQueryString:d,showAggregateType:g=!0,showFormatType:y=!0,showTimeScope:m=!0}=this.props,{error:b,formatType:v,name:B,resolution:S,timeScope:G}=this.state;let T=[...h];this.props.isOpen&&(T=h&&0===h.length&&l?[{label:r.formatMessage(i.Z.exportAll)}]:(0,n.orderBy)(T,["label"],["asc"]));let x=r.formatMessage(i.Z.exportSelected,{groupBy:t,count:e});-1!==t.indexOf(o.P)&&(x=r.formatMessage(i.Z.exportSelected,{groupBy:"tag",count:e}));const E=new Date,O=(new Date).setMonth(E.getMonth()-1),C=(0,s.Z)(E,"MMMM yyyy"),M=(0,s.Z)(O-1,"MMMM yyyy"),_=void 0!==B?B:r.formatMessage(i.Z.exportName,{provider:c,groupBy:-1!==t.indexOf(o.P)?"tag":t}),R=u?this.nameValidator(_):void 0,k=R?"error":"default";return p().createElement(a.Modal,{style:f.modal,isOpen:this.props.isOpen,onClose:this.handleClose,title:r.formatMessage(i.Z.exportTitle),variant:"small",actions:[p().createElement(I,{disabled:"error"===k,formatType:v,groupBy:t,isAllItems:l,items:h,key:"confirm",timeScope:m?G:void 0,onClose:this.handleClose,onError:this.handleError,name:_,reportPathsType:c,reportQueryString:d,resolution:S}),p().createElement(a.Button,{ouiaId:"cancel-btn",key:"cancel",onClick:this.handleClose,variant:a.ButtonVariant.link},r.formatMessage(i.Z.cancel))]},b&&p().createElement(a.Alert,{variant:"danger",style:f.alert,title:r.formatMessage(i.Z.exportError)}),p().createElement("div",{style:f.title},u?p().createElement("span",null,r.formatMessage(i.Z.exportDesc,{value:p().createElement("b",null,r.formatMessage(i.Z.exportsTitle))})):p().createElement("span",null,r.formatMessage(i.Z.exportHeading,{groupBy:t}))),p().createElement(a.Form,{style:f.form},p().createElement(a.Grid,{hasGutter:!0,md:6},u&&p().createElement(a.GridItem,{span:12},p().createElement(a.FormGroup,{fieldId:"exportName",helperTextInvalid:R?r.formatMessage(R):void 0,label:r.formatMessage(i.Z.names,{count:1}),isRequired:!0,validated:k},p().createElement(a.TextInput,{isRequired:!0,type:"text",id:"exportName",name:"exportName",value:_,onChange:this.handleNameChange}))),g&&p().createElement(a.FormGroup,{fieldId:"aggregate-type",label:r.formatMessage(i.Z.exportAggregateType),isRequired:!0},p().createElement(p().Fragment,null,F.map(((e,t)=>p().createElement(a.Radio,{key:t,id:`resolution-${t}`,isValid:void 0!==e.value,label:r.formatMessage(e.label,{value:e.value}),value:e.value,isChecked:S===e.value,name:"resolution",onChange:this.handleResolutionChange,"aria-label":r.formatMessage(e.label,{value:e.value})}))))),m&&p().createElement(a.FormGroup,{fieldId:"timeScope",label:r.formatMessage(i.Z.exportTimeScopeTitle),isRequired:!0},p().createElement(p().Fragment,null,P.map(((e,t)=>p().createElement(a.Radio,{key:t,id:`timeScope-${t}`,isValid:void 0!==e.value,label:r.formatMessage(e.label,{date:"previous"===e.value?M:C,value:e.value}),value:e.value,isChecked:G===e.value,name:"timeScope",onChange:this.handleMonthChange,"aria-label":r.formatMessage(e.label,{date:"previous"===e.value?M:C,value:e.value})}))))),y&&u&&p().createElement(a.GridItem,{span:12},p().createElement(a.FormGroup,{fieldId:"formatType",label:r.formatMessage(i.Z.exportFormatTypeTitle),isRequired:!0},Z.map(((e,t)=>p().createElement(a.Radio,{key:t,id:`formatType-${t}`,isValid:void 0!==e.value,label:r.formatMessage(e.label,{value:e.value}),value:e.value,isChecked:v===e.value,name:"formatType",onChange:this.handleTypeChange,"aria-label":r.formatMessage(e.label,{value:e.value})}))))),p().createElement(a.GridItem,{span:12},p().createElement(a.FormGroup,{label:x,fieldId:"selectedLabels"},p().createElement("ul",null,T.map(((e,t)=>p().createElement("li",{key:t},e.label)))))))))}}const D=(0,c.X1)((e=>({isExportsFeatureEnabled:d.iJ.selectIsExportsFeatureEnabled(e)}))),w=(0,h.connect)(D,void 0)(V),j=(0,u.ZP)(w)},87560:(e,t,r)=>{"use strict";r.d(t,{X:()=>k});var a=r(54653),o=r(96740),s=r(39333),i=r(50081),n=r(97027),l=r(92950),p=r.n(l),u=r(74806),h=r(77760),c=r(77789),d=r(1156),g=r(98449),y=r(48949),m=r(5842);const f={groupBySelector:{display:"flex",alignItems:"center"},groupBySelectorLabel:{marginBottom:0,marginRight:r(32412).ZP.var,whiteSpace:"nowrap"}};class b extends p().Component{constructor(e){super(e),this.defaultState={defaultItem:this.props.groupBy||this.props.options[0].value,isGroupByOpen:!1},this.state=Object.assign({},this.defaultState),this.getCurrentGroupBy=()=>{const{getIdKeyForGroupBy:e,router:t}=this.props,r=(0,s.mB)(t.location.search),a=r&&r.group_by?Object.keys(r.group_by):[];let o=e(r.group_by);for(const e of a)if(-1!==e.indexOf(s.dV)){o=r.group_by[s.dV];break}return o},this.getGroupByItems=()=>{const{orgReport:e}=this.props;if(!e||!e.data)return[];const t=e.data.sort(((e,t)=>e[s.iP]<t[s.iP]?-1:e[s.iP]>t[s.iP]?1:0)),r=t.filter((e=>0===e.level)),a=t.filter((e=>0!==e.level));return r.map((e=>{const r=t.find((t=>t[s.dV]===e[s.dV]));a.unshift(r)})),a.map((e=>({id:e[s.dV],toString:()=>e[s.iP]})))},this.handleGroupByClear=()=>{this.setState({currentItem:void 0})},this.handleGroupBySelected=(e,t)=>{const{onSelected:r}=this.props;this.setState({currentItem:t.id,isGroupByOpen:!1}),r&&r(`${s.dV}${t.id}`)},this.handleGroupByToggle=e=>{this.setState({isGroupByOpen:e})},this.handleGroupByClear=this.handleGroupByClear.bind(this),this.handleGroupBySelected=this.handleGroupBySelected.bind(this),this.handleGroupByToggle=this.handleGroupByToggle.bind(this)}componentDidMount(){this.setState({currentItem:this.getCurrentGroupBy()})}componentDidUpdate(e){const{groupBy:t}=this.props;e.groupBy!==t&&this.setState({currentItem:this.getCurrentGroupBy()})}render(){const{isDisabled:e=!1,intl:t}=this.props,{currentItem:r,isGroupByOpen:o}=this.state,s=this.getGroupByItems(),i=s.find((e=>e.id===r));return p().createElement("div",{style:f.groupBySelector},p().createElement(a.Select,{"aria-label":t.formatMessage(n.Z.filterByOrgUnitAriaLabel),isDisabled:e,onClear:this.handleGroupByClear,onToggle:this.handleGroupByToggle,onSelect:this.handleGroupBySelected,isOpen:o,placeholderText:t.formatMessage(n.Z.filterByOrgUnitPlaceholder),selections:i,variant:a.SelectVariant.typeahead},s.map((e=>p().createElement(a.SelectOption,{description:e.id,key:e.id,value:e})))))}}const v=(0,u.ZP)((0,m.E)(b));var B=r(44439);class S extends p().Component{constructor(e){super(e),this.defaultState={isGroupByOpen:!1},this.state=Object.assign({},this.defaultState),this.getGroupByItems=()=>{const{tagReport:e}=this.props;if(!e||!e.data)return[];let t=!1;for(const r of e.data)if(r.hasOwnProperty("key")){t=!0;break}let r=[];if(t){const t=e.data.map((e=>{var{type:t}=e;return function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]])}return r}(e,["type"])}));r=(0,B.uniqBy)(t,"key")}else r=(0,B.uniq)(e.data);return r.map(((e,r)=>{const o=t?e.key:e;return p().createElement(a.SelectOption,{key:`${o}:${r}`,value:o})}))},this.getCurrentGroupBy=()=>{const{router:e}=this.props,t=(0,s.mB)(e.location.search),r=t&&t.group_by?Object.keys(t.group_by):[];let a;for(const e of r)if(-1!==e.indexOf(s.P)){a=e.slice(s.P.length);break}return a},this.handleGroupByClear=()=>{this.setState({currentItem:void 0})},this.handleGroupBySelected=(e,t)=>{const{onSelected:r}=this.props;this.setState({currentItem:t,isGroupByOpen:!1}),r&&r(`${s.P}${t}`)},this.handleGroupByToggle=e=>{this.setState({isGroupByOpen:e})},this.handleGroupByClear=this.handleGroupByClear.bind(this),this.handleGroupBySelected=this.handleGroupBySelected.bind(this),this.handleGroupByToggle=this.handleGroupByToggle.bind(this)}componentDidMount(){this.setState({currentItem:this.getCurrentGroupBy()})}componentDidUpdate(e){const{groupBy:t}=this.props;e.groupBy!==t&&this.setState({currentItem:this.getCurrentGroupBy()})}render(){const{isDisabled:e,intl:t}=this.props,{currentItem:r,isGroupByOpen:o}=this.state;return p().createElement("div",{style:f.groupBySelector},p().createElement(a.Select,{"aria-label":t.formatMessage(n.Z.filterByTagKeyAriaLabel),isDisabled:e,onClear:this.handleGroupByClear,onToggle:this.handleGroupByToggle,onSelect:this.handleGroupBySelected,isOpen:o,placeholderText:t.formatMessage(n.Z.filterByTagKeyPlaceholder),selections:r,variant:a.SelectVariant.typeahead},this.getGroupByItems()))}}const G=(0,u.ZP)((0,m.E)(S)),T=[{label:s.dV,value:s.dV}],x=[{label:s.up,value:s.up}],E=o.J.org,O=i.Q.tag;class C extends p().Component{constructor(e,t){super(e,t),this.defaultState={defaultItem:this.props.groupBy||this.props.options[0].value,isGroupByOpen:!1,isGroupByOrgVisible:!1,isGroupByTagVisible:!1},this.state=Object.assign({},this.defaultState),this.getCurrentGroupBy=()=>{const{getIdKeyForGroupBy:e,router:t}=this.props,{defaultItem:r}=this.state,a=(0,s.mB)(t.location.search);if(!a||!a.group_by)return r;let o=e(a.group_by);const i=a&&a.group_by?Object.keys(a.group_by):[];for(const e of i){let t=e.indexOf(s.P);if(-1!==t){o=s.up,this.setState({isGroupByTagVisible:!0});break}if(t=e.indexOf(s.dV),-1!==t){o=s.dV,this.setState({isGroupByOrgVisible:!0});break}}return"date"!==o?o:r},this.getGroupBy=()=>{const{isDisabled:e}=this.props,{currentItem:t,isGroupByOpen:r}=this.state,o=this.getGroupByOptions(),s=o.find((e=>e.value===t));return p().createElement(a.Select,{id:"groupBySelect",isDisabled:e,isOpen:r,onSelect:this.handleGroupBySelected,onToggle:this.handleGroupByToggle,selections:s,variant:a.SelectVariant.single},o.map((e=>p().createElement(a.SelectOption,{key:e.value,value:e}))))},this.getGroupByOptions=()=>{const{options:e,orgReport:t,tagReport:r,intl:a}=this.props,o=[...e];return t&&t.data&&t.data.length>0&&o.push(...T),r&&r.data&&r.data.length>0&&o.push(...x),o.map((e=>({toString:()=>a.formatMessage(n.Z.groupByValuesTitleCase,{value:e.label,count:1}),value:e.value})))},this.handleGroupBySelected=(e,t)=>{const{onSelected:r}=this.props;t.value===s.dV||t.value===s.up?this.setState({currentItem:t.value,isGroupByOpen:!1,isGroupByOrgVisible:t.value===s.dV,isGroupByTagVisible:t.value===s.up}):this.setState({currentItem:t.value,isGroupByOpen:!1,isGroupByOrgVisible:!1,isGroupByTagVisible:!1},(()=>{r&&r(t.value)}))},this.handleGroupByToggle=e=>{this.setState({isGroupByOpen:e})},this.handleGroupBySelected=this.handleGroupBySelected.bind(this),this.handleGroupByToggle=this.handleGroupByToggle.bind(this)}componentDidMount(){const{fetchOrg:e,fetchTag:t,orgReportFetchStatus:r,orgReportPathsType:a,orgQueryString:o,showOrgs:s,showTags:i,tagReportFetchStatus:n,tagReportPathsType:l,tagQueryString:p}=this.props;this.setState({currentItem:this.getCurrentGroupBy()},(()=>{s&&r!==d.iF.inProgress&&e(a,E,o),i&&n!==d.iF.inProgress&&t(l,O,p)}))}componentDidUpdate(e){const{fetchOrg:t,fetchTag:r,groupBy:a,orgReportFetchStatus:o,orgReportPathsType:s,orgQueryString:i,perspective:n,showOrgs:l,showTags:p,tagReportFetchStatus:u,tagReportPathsType:h,tagQueryString:c}=this.props;if(e.groupBy!==a||e.perspective!==n){let a;e.perspective!==n&&(a={isGroupByOrgVisible:!1,isGroupByTagVisible:!1}),this.setState(Object.assign({currentItem:this.getCurrentGroupBy()},a||{}),(()=>{l&&o!==d.iF.inProgress&&t(s,E,i),p&&u!==d.iF.inProgress&&r(h,O,c)}))}}render(){const{getIdKeyForGroupBy:e,groupBy:t,isDisabled:r=!1,onSelected:o,orgReport:s,intl:i,tagReport:l}=this.props,{isGroupByOrgVisible:u,isGroupByTagVisible:h}=this.state;return p().createElement("div",{style:f.groupBySelector},p().createElement(a.Title,{headingLevel:"h3",size:"md",style:f.groupBySelectorLabel},i.formatMessage(n.Z.groupByLabel)),this.getGroupBy(),Boolean(u)&&p().createElement(v,{getIdKeyForGroupBy:e,groupBy:t,isDisabled:r,onSelected:o,options:T,orgReport:s}),Boolean(h)&&p().createElement(G,{groupBy:t,isDisabled:r,onSelected:o,options:x,tagReport:l}))}}const M=(0,d.X1)(((e,{orgReportPathsType:t,router:r,tagReportPathsType:a})=>{const o=(0,s.mB)(r.location.search);let i={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1}};if(o.dateRangeType){const{end_date:e,start_date:t}=(0,c.H7)(o);i={end_date:e,start_date:t}}const n=Object.assign(Object.assign({},i),{key_only:!0,limit:1e3}),l=(0,s.pm)(Object.assign({},n)),p=y.ux.selectTag(e,a,O,l),u=y.ux.selectTagFetchStatus(e,a,O,l),h=(0,s.pm)(Object.assign({},n));return{orgReport:g.zE.selectOrg(e,t,E,h),orgReportFetchStatus:g.zE.selectOrgFetchStatus(e,t,E,h),orgQueryString:h,tagReport:p,tagReportFetchStatus:u,tagQueryString:l}})),_={fetchOrg:g.Lp.T7,fetchTag:y.xr.Xt},R=(0,h.connect)(M,_)(C),k=(0,u.ZP)((0,m.E)(R))},77789:(e,t,r)=>{"use strict";r.d(t,{H7:()=>n,NU:()=>a,jv:()=>i});var a,o=r(4135),s=r(45087);!function(e){e.currentMonthToDate="current_month_to_date",e.custom="custom",e.previousMonth="previous_month",e.previousMonthToDate="previous_month_to_date",e.lastNinetyDays="last_ninety_days",e.lastSixtyDays="last_sixty_days",e.lastSixtyFiveDays="last_sixty_days",e.lastThirtyDays="last_thirty_days"}(a||(a={}));const i=e=>e.dateRangeType||a.currentMonthToDate,n=e=>{let t,r;return e.dateRangeType===a.custom&&(t=e.end_date,r=e.start_date),t&&r?{end_date:t,start_date:r}:((e,t=!0)=>{const r=new Date,i=new Date;let n;switch(e){case a.previousMonth:r.setDate(1),i.setDate(1),r.setMonth(r.getMonth()-1),i.setMonth(i.getMonth()-1),n=(0,s.$M)(i,(0,o.Z)(r),t);break;case a.previousMonthToDate:i.setDate(1),i.setMonth(i.getMonth()-1),n=(0,s.$M)(i,r,t);break;case a.lastNinetyDays:n=(0,s.mI)(t);break;case a.lastSixtyDays:n=(0,s.vI)(t);break;case a.lastThirtyDays:n=(0,s.Gg)(t);break;case a.currentMonthToDate:default:n=(0,s.tw)(t)}return n})(i(e))}}}]);
//# sourceMappingURL=../sourcemaps/5073.d14ac36d90af7f23e29d6b945f4d0c61.js.map