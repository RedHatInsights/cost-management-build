(self.webpackChunkcostManagement=self.webpackChunkcostManagement||[]).push([[7252],{52636:(e,t,r)=>{"use strict";r.d(t,{Xk:()=>a,rU:()=>o});var s=r(40400);const o={name:"CalculatorIcon",height:512,width:448,svgPath:"M400 0H48C22.4 0 0 22.4 0 48v416c0 25.6 22.4 48 48 48h352c25.6 0 48-22.4 48-48V48c0-25.6-22.4-48-48-48zM128 435.2c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8V268.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v166.4zm0-256c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8V76.8C64 70.4 70.4 64 76.8 64h294.4c6.4 0 12.8 6.4 12.8 12.8v102.4z",yOffset:0,xOffset:0},a=(0,s.IU)(o)},33605:(e,t)=>{"use strict";t.o3={name:"--pf-global--Color--100",value:"#151515",var:"var(--pf-global--Color--100)"},t.ZP=t.o3},35823:e=>{e.exports=function(e,t,r,s){var o=new Blob(void 0!==s?[s,e]:[e],{type:r||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(o,t);else{var a=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(o):window.webkitURL.createObjectURL(o),i=document.createElement("a");i.style.display="none",i.href=a,i.setAttribute("download",t),void 0===i.download&&i.setAttribute("target","_blank"),document.body.appendChild(i),i.click(),setTimeout((function(){document.body.removeChild(i),window.URL.revokeObjectURL(a)}),200)}}},96703:(e,t,r)=>{"use strict";r.d(t,{X:()=>L});var s=r(90154),o=r(95147),a=r(97027),i=r(44439),n=r(92950),l=r.n(n),p=r(74806),u=r(82537),c=r(1156),h=r(22369),d=r(14483),y=r(32412),g=r(48196),m=r(43789);const b={alert:{marginBottom:y.ZP.var},form:{marginLeft:g.ZP.var},modal:{input:{marginRight:m.ZP.var},ul:{marginLeft:g.ZP.var}},title:{marginBottom:y.ZP.var}};var f=r(39333),v=r(6456),B=r(4135),S=r(43703),C=r(35823),G=r.n(C),x=r(90761),T=r(93931),E=r(45087),O=r(5842);const M=v.C.cost;class _ extends l().Component{constructor(e,t){super(e,t),this.defaultState={fetchExportClicked:!1},this.state=Object.assign({},this.defaultState),this.getExport=()=>{const{exportFetchStatus:e,exportReport:t}=this.props;t&&e===c.iF.complete&&(G()(t.data,this.getFileName(),"text/csv"),this.handleClose())},this.getFileName=()=>{const{endDate:e,groupBy:t,intl:r,reportPathsType:s,resolution:o,startDate:i}=this.props;return`${r.formatMessage(a.Z.exportFileName,{endDate:e,provider:s,groupBy:t&&-1!==t.indexOf(d.P)?"tag":t,resolution:o,startDate:i})}.csv`},this.handleClose=()=>{const{exportError:e}=this.props;this.setState(Object.assign({},this.defaultState),(()=>{e||this.props.onClose(!1)}))},this.handleFetchExport=()=>{const{exportQueryString:e,fetchExport:t,isExportsFeatureEnabled:r,reportPathsType:s}=this.props;t(s,M,e,r),this.setState({fetchExportClicked:!0},(()=>{this.getExport()}))}}componentDidUpdate(e){const{exportError:t,exportReport:r}=this.props,{fetchExportClicked:s}=this.state;e.exportReport!==r&&s&&this.getExport(),t&&this.props.onError(t)}render(){const{disabled:e,exportFetchStatus:t,intl:r}=this.props;return l().createElement(s.Button,{ouiaId:"submit-btn",isDisabled:e||t===c.iF.inProgress,key:"confirm",onClick:this.handleFetchExport,variant:s.ButtonVariant.primary},r.formatMessage(a.Z.exportGenerate))}}const R=(0,c.X1)(((e,t)=>{const{groupBy:r,isAllItems:s,items:a,reportPathsType:i,reportQueryString:n,resolution:l,router:p,timeScope:u}=t,c=(0,f.mB)(p.location.search),{end_date:y,start_date:g}=(()=>{if(c.dateRangeType)return(0,x.H7)(c);{const e="previous"===u,t=(0,E.x2)();return e&&(t.setDate(1),t.setMonth(t.getMonth()-1)),{end_date:(0,o.Z)(e?(0,B.Z)(t):t,"yyyy-MM-dd"),start_date:(0,o.Z)((0,S.Z)(t),"yyyy-MM-dd")}}})(),m=(()=>{const e=(0,f.mB)(n),t=Object.assign(Object.assign({},e),{delta:void 0,filter:{limit:void 0,offset:void 0,resolution:l||void 0},filter_by:{},limit:0,order_by:void 0,start_date:g,end_date:y});if(c.filter_by)for(const e of Object.keys(c.filter_by))void 0===t.filter_by[e]&&(t.filter_by[e]=[]),t.filter_by[e].push(c.filter_by[e]);if(s)r===d.dV&&(void 0===t.filter_by[d.dV]&&(t.filter_by[d.dV]=[]),t.filter_by[d.dV].push(c.group_by[d.dV]));else if(r===d.dV)for(const e of a){const r="organizational_unit"===e.type?d.dV:e.type;void 0===t.filter_by[r]&&(t.filter_by[r]=[]),t.filter_by[r].push(e.id)}else for(const e of a)void 0===t.filter_by[r]&&(t.filter_by[r]=[]),t.filter_by[r].push(e.id);return(0,f.pm)(t)})(),b=T.$S.selectExport(e,i,M,m),v=T.$S.selectExportError(e,i,M,m),C=T.$S.selectExportFetchStatus(e,i,M,m);return{endDate:y,exportError:v,exportFetchStatus:C,exportQueryString:m,exportReport:b,isExportsFeatureEnabled:h.iJ.selectIsExportsFeatureEnabled(e),startDate:g}})),Z={fetchExport:T.HY.xC},V=(0,u.connect)(R,Z)(_),I=(0,p.ZP)((0,O.E)(V)),k=[{label:a.Z.exportFormatType,value:"csv"},{label:a.Z.exportFormatType,value:"json"}],D=[{label:a.Z.exportResolution,value:"daily"},{label:a.Z.exportResolution,value:"monthly"}],F=[{label:a.Z.exportTimeScope,value:"current"},{label:a.Z.exportTimeScope,value:"previous"}];class P extends l().Component{constructor(e,t){super(e,t),this.defaultState={error:void 0,formatType:"csv",timeScope:"current",resolution:this.props.resolution||"monthly"},this.state=Object.assign({},this.defaultState),this.handleClose=()=>{this.setState(Object.assign({},this.defaultState),(()=>{this.props.onClose(!1)}))},this.handleError=e=>{this.setState({error:e})},this.handleMonthChange=(e,t)=>{this.setState({timeScope:t.currentTarget.value})},this.handleNameChange=(e,t)=>{this.setState({name:t.currentTarget.value})},this.handleResolutionChange=(e,t)=>{this.setState({resolution:t.currentTarget.value})},this.handleTypeChange=(e,t)=>{this.setState({formatType:t.currentTarget.value})},this.nameValidator=e=>0===e.trim().length?a.Z.exportNameRequired:e.length>50?a.Z.exportNameTooLong:void 0,this.handleMonthChange=this.handleMonthChange.bind(this),this.handleResolutionChange=this.handleResolutionChange.bind(this),this.handleTypeChange=this.handleTypeChange.bind(this)}render(){const{count:e=0,groupBy:t,intl:r,isAllItems:n,isExportsFeatureEnabled:p,items:u,reportPathsType:c,reportQueryString:h,showAggregateType:y=!0,showFormatType:g=!0,showTimeScope:m=!0}=this.props,{error:f,formatType:v,name:B,resolution:S,timeScope:C}=this.state;let G=[...u];this.props.isOpen&&(G=u&&0===u.length&&n?[{label:r.formatMessage(a.Z.exportAll)}]:(0,i.orderBy)(G,["label"],["asc"]));let x=r.formatMessage(a.Z.exportSelected,{groupBy:t,count:e});t&&-1!==t.indexOf(d.P)&&(x=r.formatMessage(a.Z.exportSelected,{groupBy:"tag",count:e}));const T=new Date,E=(new Date).setMonth(T.getMonth()-1),O=(0,o.Z)(T,"MMMM yyyy"),M=(0,o.Z)(E-1,"MMMM yyyy"),_=void 0!==B?B:r.formatMessage(a.Z.exportName,{provider:c,groupBy:t&&-1!==t.indexOf(d.P)?"tag":t}),R=p?this.nameValidator(_):void 0,Z=R?"error":"default";return l().createElement(s.Modal,{style:b.modal,isOpen:this.props.isOpen,onClose:this.handleClose,title:r.formatMessage(a.Z.exportTitle),variant:"small",actions:[l().createElement(I,{disabled:"error"===Z,formatType:v,groupBy:t,isAllItems:n,items:u,key:"confirm",timeScope:m?C:void 0,onClose:this.handleClose,onError:this.handleError,name:_,reportPathsType:c,reportQueryString:h,resolution:S}),l().createElement(s.Button,{ouiaId:"cancel-btn",key:"cancel",onClick:this.handleClose,variant:s.ButtonVariant.link},r.formatMessage(a.Z.cancel))]},f&&l().createElement(s.Alert,{variant:"danger",style:b.alert,title:r.formatMessage(a.Z.exportError)}),l().createElement("div",{style:b.title},p?l().createElement("span",null,r.formatMessage(a.Z.exportDesc,{value:l().createElement("b",null,r.formatMessage(a.Z.exportsTitle))})):l().createElement("span",null,r.formatMessage(a.Z.exportHeading,{groupBy:t}))),l().createElement(s.Form,{style:b.form},l().createElement(s.Grid,{hasGutter:!0,md:6},p&&l().createElement(s.GridItem,{span:12},l().createElement(s.FormGroup,{fieldId:"exportName",helperTextInvalid:R?r.formatMessage(R):void 0,label:r.formatMessage(a.Z.names,{count:1}),isRequired:!0,validated:Z},l().createElement(s.TextInput,{isRequired:!0,type:"text",id:"exportName",name:"exportName",value:_,onChange:this.handleNameChange}))),y&&l().createElement(s.FormGroup,{fieldId:"aggregate-type",label:r.formatMessage(a.Z.exportAggregateType),isRequired:!0},l().createElement(l().Fragment,null,D.map(((e,t)=>l().createElement(s.Radio,{key:t,id:`resolution-${t}`,isValid:void 0!==e.value,label:r.formatMessage(e.label,{value:e.value}),value:e.value,isChecked:S===e.value,name:"resolution",onChange:this.handleResolutionChange,"aria-label":r.formatMessage(e.label,{value:e.value})}))))),m&&l().createElement(s.FormGroup,{fieldId:"timeScope",label:r.formatMessage(a.Z.exportTimeScopeTitle),isRequired:!0},l().createElement(l().Fragment,null,F.map(((e,t)=>l().createElement(s.Radio,{key:t,id:`timeScope-${t}`,isValid:void 0!==e.value,label:r.formatMessage(e.label,{date:"previous"===e.value?M:O,value:e.value}),value:e.value,isChecked:C===e.value,name:"timeScope",onChange:this.handleMonthChange,"aria-label":r.formatMessage(e.label,{date:"previous"===e.value?M:O,value:e.value})}))))),g&&p&&l().createElement(s.GridItem,{span:12},l().createElement(s.FormGroup,{fieldId:"formatType",label:r.formatMessage(a.Z.exportFormatTypeTitle),isRequired:!0},k.map(((e,t)=>l().createElement(s.Radio,{key:t,id:`formatType-${t}`,isValid:void 0!==e.value,label:r.formatMessage(e.label,{value:e.value}),value:e.value,isChecked:v===e.value,name:"formatType",onChange:this.handleTypeChange,"aria-label":r.formatMessage(e.label,{value:e.value})}))))),l().createElement(s.GridItem,{span:12},l().createElement(s.FormGroup,{label:x,fieldId:"selectedLabels"},l().createElement("ul",null,G.map(((e,t)=>l().createElement("li",{key:t},e.label)))))))))}}const w=(0,c.X1)((e=>({isExportsFeatureEnabled:h.iJ.selectIsExportsFeatureEnabled(e)}))),j=(0,u.connect)(w,void 0)(P),L=(0,p.ZP)(j)},63391:(e,t,r)=>{"use strict";r.d(t,{X:()=>P});var s=r(90154),o=r(96740),a=r(39333),i=r(36116),n=r(50081),l=r(97027),p=r(92950),u=r.n(p),c=r(74806),h=r(82537),d=r(90761),y=r(1156),g=r(22369),m=r(98449),b=r(19878),f=r(48949),v=r(14483),B=r(5842);const S={groupBySelector:{display:"flex",alignItems:"center"},groupBySelectorLabel:{marginBottom:0,marginRight:r(32412).ZP.var,whiteSpace:"nowrap"}};class C extends u().Component{constructor(e){super(e),this.defaultState={defaultItem:this.props.groupBy||this.props.options[0].value,isGroupByOpen:!1},this.state=Object.assign({},this.defaultState),this.getCurrentGroupBy=()=>{const{getIdKeyForGroupBy:e,router:t}=this.props,r=(0,a.mB)(t.location.search),s=r&&r.group_by?Object.keys(r.group_by):[];let o=e(r.group_by);for(const e of s)if(-1!==e.indexOf(v.dV)){o=r.group_by[v.dV];break}return o},this.getGroupByItems=()=>{const{orgReport:e}=this.props;if(!e||!e.data)return[];const t=e.data.sort(((e,t)=>e[v.iP]<t[v.iP]?-1:e[v.iP]>t[v.iP]?1:0)),r=t.filter((e=>0===e.level)),s=t.filter((e=>0!==e.level));return r.map((e=>{const r=t.find((t=>t[v.dV]===e[v.dV]));s.unshift(r)})),s.map((e=>({id:e[v.dV],toString:()=>e[v.iP]})))},this.handleGroupByClear=()=>{this.setState({currentItem:void 0})},this.handleGroupBySelected=(e,t)=>{const{onSelected:r}=this.props;this.setState({currentItem:t.id,isGroupByOpen:!1}),r&&r(`${v.dV}${t.id}`)},this.handleGroupByToggle=e=>{this.setState({isGroupByOpen:e})},this.handleGroupByClear=this.handleGroupByClear.bind(this),this.handleGroupBySelected=this.handleGroupBySelected.bind(this),this.handleGroupByToggle=this.handleGroupByToggle.bind(this)}componentDidMount(){this.setState({currentItem:this.getCurrentGroupBy()})}componentDidUpdate(e){const{groupBy:t}=this.props;e.groupBy!==t&&this.setState({currentItem:this.getCurrentGroupBy()})}render(){const{isDisabled:e=!1,intl:t}=this.props,{currentItem:r,isGroupByOpen:o}=this.state,a=this.getGroupByItems(),i=a.find((e=>e.id===r));return u().createElement("div",{style:S.groupBySelector},u().createElement(s.Select,{"aria-label":t.formatMessage(l.Z.filterByOrgUnitAriaLabel),isDisabled:e,onClear:this.handleGroupByClear,onToggle:this.handleGroupByToggle,onSelect:this.handleGroupBySelected,isOpen:o,placeholderText:t.formatMessage(l.Z.filterByOrgUnitPlaceholder),selections:i,variant:s.SelectVariant.typeahead},a.map((e=>u().createElement(s.SelectOption,{description:e.id,key:e.id,value:e})))))}}const G=(0,c.ZP)((0,B.E)(C));var x=r(44439);class T extends u().Component{constructor(e){super(e),this.defaultState={isGroupByOpen:!1,prefix:this.props.isCostCategory?v.LM:v.P},this.state=Object.assign({},this.defaultState),this.getCurrentGroupBy=()=>{const{router:e}=this.props,{prefix:t}=this.state,r=(0,a.mB)(e.location.search),s=r&&r.group_by?Object.keys(r.group_by):[];let o;for(const e of s)if(-1!==e.indexOf(t)){o=e.slice(t.length);break}return o},this.getGroupByItems=()=>{const{report:e}=this.props;if(!e||!e.data)return[];let t=!1;for(const r of e.data)if(r.hasOwnProperty("key")){t=!0;break}let r=[];if(t){const t=e.data.map((e=>{var{type:t}=e;return function(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(r[s[o]]=e[s[o]])}return r}(e,["type"])}));r=(0,x.uniqBy)(t,"key")}else r=(0,x.uniq)(e.data);return r.map(((e,r)=>{const o=t?e.key:e;return u().createElement(s.SelectOption,{key:`${o}:${r}`,value:o})}))},this.handleGroupByClear=()=>{this.setState({currentItem:void 0})},this.handleGroupBySelected=(e,t)=>{const{onSelected:r}=this.props,{prefix:s}=this.state;this.setState({currentItem:t,isGroupByOpen:!1}),r&&r(`${s}${t}`)},this.handleGroupByToggle=e=>{this.setState({isGroupByOpen:e})},this.handleGroupByClear=this.handleGroupByClear.bind(this),this.handleGroupBySelected=this.handleGroupBySelected.bind(this),this.handleGroupByToggle=this.handleGroupByToggle.bind(this)}componentDidMount(){this.setState({currentItem:this.getCurrentGroupBy()})}componentDidUpdate(e){const{groupBy:t}=this.props;e.groupBy!==t&&this.setState({currentItem:this.getCurrentGroupBy()})}render(){const{isCostCategory:e,isDisabled:t,intl:r}=this.props,{currentItem:o,isGroupByOpen:a}=this.state;return u().createElement("div",{style:S.groupBySelector},u().createElement(s.Select,{"aria-label":r.formatMessage(e?l.Z.filterByCostCategoryKeyAriaLabel:l.Z.filterByTagKeyAriaLabel),isDisabled:t,onClear:this.handleGroupByClear,onToggle:this.handleGroupByToggle,onSelect:this.handleGroupBySelected,isOpen:a,placeholderText:r.formatMessage(l.Z.chooseKeyPlaceholder),selections:o,variant:s.SelectVariant.typeahead},this.getGroupByItems()))}}const E=(0,c.ZP)((0,B.E)(T)),O=[{label:v.dV,value:v.dV}],M=[{label:v.tZ,value:v.tZ}],_=[{label:v.up,value:v.up}],R=o.J.org,Z=i._.aws_category,V=n.Q.tag;class I extends u().Component{constructor(e,t){super(e,t),this.defaultState={defaultItem:this.props.groupBy||this.props.options[0].value,isGroupByCostCategoryVisible:!1,isGroupByOpen:!1,isGroupByOrgVisible:!1,isGroupByTagVisible:!1},this.state=Object.assign({},this.defaultState),this.getCurrentGroupBy=()=>{const{getIdKeyForGroupBy:e,router:t}=this.props,{defaultItem:r}=this.state,s=(0,a.mB)(t.location.search);if(!s||!s.group_by)return r;let o=e(s.group_by);const i=s&&s.group_by?Object.keys(s.group_by):[];for(const e of i){let t=e.indexOf(v.P);if(-1!==t){o=v.up,this.setState({isGroupByTagVisible:!0});break}if(t=e.indexOf(v.dV),-1!==t){o=v.dV,this.setState({isGroupByOrgVisible:!0});break}if(t=e.indexOf(v.LM),-1!==t){o=v.tZ,this.setState({isGroupByCostCategoryVisible:!0});break}}return"date"!==o?o:r},this.getGroupBy=()=>{const{isDisabled:e}=this.props,{currentItem:t,isGroupByOpen:r}=this.state,o=this.getGroupByOptions(),a=o.find((e=>e.value===t));return u().createElement(s.Select,{id:"groupBySelect",isDisabled:e,isOpen:r,onSelect:this.handleGroupBySelected,onToggle:this.handleGroupByToggle,selections:a,variant:s.SelectVariant.single},o.map((e=>u().createElement(s.SelectOption,{key:e.value,value:e}))))},this.getGroupByOptions=()=>{const{isCostCategoriesFeatureEnabled:e,options:t,orgReport:r,resourceReport:s,tagReport:o,intl:a}=this.props,i=[...t];return r&&r.data&&r.data.length>0&&i.push(...O),o&&o.data&&o.data.length>0&&i.push(..._),s&&s.data&&s.data.length>0&&e&&i.push(...M),i.map((e=>({toString:()=>a.formatMessage(l.Z.groupByValuesTitleCase,{value:e.label,count:1}),value:e.value}))).sort(((e,t)=>e.toString()<t.toString()?-1:e.toString()>t.toString()?1:0))},this.handleGroupBySelected=(e,t)=>{const{onSelected:r}=this.props;t.value===v.dV||t.value===v.tZ||t.value===v.up?this.setState({currentItem:t.value,isGroupByCostCategoryVisible:t.value===v.tZ,isGroupByOpen:!1,isGroupByOrgVisible:t.value===v.dV,isGroupByTagVisible:t.value===v.up}):this.setState({currentItem:t.value,isGroupByCostCategoryVisible:!1,isGroupByOpen:!1,isGroupByOrgVisible:!1,isGroupByTagVisible:!1},(()=>{r&&r(t.value)}))},this.handleGroupByToggle=e=>{this.setState({isGroupByOpen:e})},this.updateReport=()=>{const{fetchOrg:e,fetchResource:t,fetchTag:r,isCostCategoriesFeatureEnabled:s,orgPathsType:o,orgQueryString:a,showCostCategories:i,showOrgs:n,showTags:l,resourcePathsType:p,resourceQueryString:u,tagPathsType:c,tagQueryString:h}=this.props;i&&s&&t(p,Z,u),n&&e(o,R,a),l&&r(c,V,h)},this.handleGroupBySelected=this.handleGroupBySelected.bind(this),this.handleGroupByToggle=this.handleGroupByToggle.bind(this)}componentDidMount(){this.setState({currentItem:this.getCurrentGroupBy()},(()=>{this.updateReport()}))}componentDidUpdate(e){const{groupBy:t,perspective:r}=this.props;if(e.groupBy!==t||e.perspective!==r){let t;e.perspective!==r&&(t={isGroupByCostCategoryVisible:!1,isGroupByOrgVisible:!1,isGroupByTagVisible:!1}),this.setState(Object.assign({currentItem:this.getCurrentGroupBy()},t||{}),(()=>{this.updateReport()}))}}render(){const{getIdKeyForGroupBy:e,groupBy:t,intl:r,isDisabled:o=!1,onSelected:a,orgReport:i,resourceReport:n,tagReport:p}=this.props,{isGroupByOrgVisible:c,isGroupByCostCategoryVisible:h,isGroupByTagVisible:d}=this.state;return u().createElement("div",{style:S.groupBySelector},u().createElement(s.Title,{headingLevel:"h3",size:"md",style:S.groupBySelectorLabel},r.formatMessage(l.Z.groupByLabel)),this.getGroupBy(),c&&u().createElement(G,{getIdKeyForGroupBy:e,groupBy:t,isDisabled:o,onSelected:a,options:O,orgReport:i}),d&&u().createElement(E,{groupBy:t,isDisabled:o,onSelected:a,options:_,report:p}),h&&u().createElement(E,{groupBy:t,isCostCategory:!0,isDisabled:o,onSelected:a,options:M,report:n}))}}const k=(0,y.X1)(((e,{orgPathsType:t,router:r,resourcePathsType:s,tagPathsType:o})=>{const i=(0,a.mB)(r.location.search);let n={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1}};if(i.dateRangeType){const{end_date:e,start_date:t}=(0,d.H7)(i);n={end_date:e,start_date:t}}const l=Object.assign(Object.assign({},n),{key_only:!0,limit:1e3}),p=(0,a.pm)({key_only:!0}),u=b.CM.selectResource(e,s,Z,p),c=b.CM.selectResourceFetchStatus(e,s,Z,p),h=(0,a.pm)(Object.assign({},l)),y=f.ux.selectTag(e,o,V,h),v=f.ux.selectTagFetchStatus(e,o,V,h),B=(0,a.pm)(Object.assign({},l)),S=m.zE.selectOrg(e,t,R,B),C=m.zE.selectOrgFetchStatus(e,t,R,B);return{isCostCategoriesFeatureEnabled:g.iJ.selectIsCostCategoriesFeatureEnabled(e),orgReport:S,orgReportFetchStatus:C,orgQueryString:B,resourceReport:u,resourceReportFetchStatus:c,resourceQueryString:p,tagReport:y,tagReportFetchStatus:v,tagQueryString:h}})),D={fetchOrg:m.Lp.T7,fetchResource:b.Px.PG,fetchTag:f.xr.Xt},F=(0,h.connect)(k,D)(I),P=(0,c.ZP)((0,B.E)(F))},90761:(e,t,r)=>{"use strict";r.d(t,{H7:()=>n,NU:()=>s,jv:()=>i});var s,o=r(4135),a=r(45087);!function(e){e.currentMonthToDate="current_month_to_date",e.custom="custom",e.previousMonth="previous_month",e.previousMonthToDate="previous_month_to_date",e.lastNinetyDays="last_ninety_days",e.lastSixtyDays="last_sixty_days",e.lastSixtyFiveDays="last_sixty_days",e.lastThirtyDays="last_thirty_days"}(s||(s={}));const i=e=>e.dateRangeType||s.currentMonthToDate,n=e=>{let t,r;return e.dateRangeType===s.custom&&(t=e.end_date,r=e.start_date),t&&r?{end_date:t,start_date:r}:((e,t=!0)=>{const r=new Date,i=new Date;let n;switch(e){case s.previousMonth:r.setDate(1),i.setDate(1),r.setMonth(r.getMonth()-1),i.setMonth(i.getMonth()-1),n=(0,a.$M)(i,(0,o.Z)(r),t);break;case s.previousMonthToDate:i.setDate(1),i.setMonth(i.getMonth()-1),n=(0,a.$M)(i,r,t);break;case s.lastNinetyDays:n=(0,a.mI)(t);break;case s.lastSixtyDays:n=(0,a.vI)(t);break;case s.lastThirtyDays:n=(0,a.Gg)(t);break;case s.currentMonthToDate:default:n=(0,a.tw)(t)}return n})(i(e))}}}]);