"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[9468],{56790:(e,t,a)=>{a.d(t,{Bu:()=>m,fv:()=>p});var r=a(54785),l=a(43047),s=a(7193),n=a(97027),i=a(92950),o=a.n(i),c=a(74806),u=a(77760),g=a(94550);const d=({variant:e,actionButton:t,title:a,description:n})=>o().createElement(r.EmptyState,{variant:e},o().createElement(r.EmptyStateIcon,{icon:l.$O,color:s.ZP.value}),o().createElement(r.Title,{headingLevel:"h4",size:"lg"},a),o().createElement(r.EmptyStateBody,null,o().createElement(r.Stack,null,o().createElement(r.StackItem,null,n))),t),m=(0,c.ZP)((({intl:e,onRefresh:t})=>{const a=e.formatMessage(n.Z.costModelsWizardSourceErrorTitle),l=e.formatMessage(n.Z.costModelsWizardSourceErrorDescription,{url:o().createElement("a",{href:e.formatMessage(n.Z.redHatStatusUrl),rel:"noreferrer",target:"_blank"},'"Status Page"')}),s=o().createElement(r.Button,{onClick:t},e.formatMessage(n.Z.costModelsRefreshDialog));return o().createElement(r.Stack,{hasGutter:!0},o().createElement(r.StackItem,null,o().createElement(r.Title,{headingLevel:"h2",size:r.TitleSizes.xl},e.formatMessage(n.Z.costModelsWizardSourceTitle))),o().createElement(r.StackItem,null,o().createElement(d,{variant:r.EmptyStateVariant.large,actionButton:s,description:l,title:a})))})),p=(0,c.ZP)((0,u.connect)((e=>({query:g.vc.query(e)})),(e=>({fetch:t=>g.lk.fetchSources(t)(e)})),((e,t)=>{const{query:a}=e,{fetch:r}=t,l=Object.keys(a).reduce(((e,t)=>null===a[t]?e:""===e?`${t}=${a[t]}`:`${e}&${t}=${a[t]}`),"");return{onRefresh:()=>r(l)}}))((({intl:e,onRefresh:t})=>{const a=e.formatMessage(n.Z.costModelsAssignSourcesErrorTitle),l=e.formatMessage(n.Z.costModelsAssignSourcesErrorDescription,{url:o().createElement("a",{href:e.formatMessage(n.Z.redHatStatusUrl),rel:"noreferrer",target:"_blank"},'"Status Page"')}),s=o().createElement(r.Button,{onClick:t},e.formatMessage(n.Z.costModelsRefreshDialog));return o().createElement(d,{variant:r.EmptyStateVariant.large,actionButton:s,description:l,title:a})})))},30537:(e,t,a)=>{a.d(t,{fg:()=>l,xZ:()=>r});const r=e=>(t,a)=>Object.assign(Object.assign({},e),{[t]:e[t]?[...e[t],a]:[a]}),l=e=>(t,a)=>{if(void 0===e[t])return e;const r=e[t].filter((e=>e!==a));return 0===r.length?Object.keys(e).reduce(((a,r)=>r===t?a:Object.assign(Object.assign({},a),{[r]:e[r]})),{}):Object.assign(Object.assign({},e),{[t]:r})}},68239:(e,t,a)=>{a.d(t,{l:()=>n});var r=a(54785),l=a(92950),s=a.n(l);const n=e=>{var{children:t}=e,a=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(a[r[l]]=e[r[l]])}return a}(e,["children"]);return s().createElement(r.Form,Object.assign({onSubmit:e=>e.preventDefault()},a),t)}},33735:(e,t,a)=>{a.d(t,{j:()=>n});var r=a(92950),l=a.n(r);const s=(e,t)=>e.filter((e=>e!==t));class n extends l().Component{constructor(e){super(e),this.state={filters:this.props.initialFilters},this.handleChange=this.handleChange.bind(this),this.onRemove=this.onRemove.bind(this),this.onSelect=this.onSelect.bind(this),this.onClearAll=this.onClearAll.bind(this)}handleChange(e){this.setState({filters:Object.assign(Object.assign({},this.state.filters),e)})}onClearAll(){this.setState({filters:Object.assign(Object.assign({},this.state.filters),{metrics:[],measurements:[]})})}onRemove(e,t){this.setState({filters:Object.assign(Object.assign({},this.state.filters),{[e]:s(this.state.filters[e],t)})})}onSelect(e,t){var a,r;this.setState({filters:Object.assign(Object.assign({},this.state.filters),{[e]:(a=this.state.filters[e],r=t,a.includes(r)?s(a,r):[...a,r])})})}render(){return this.props.children({onClearAll:this.onClearAll,onRemove:this.onRemove,onSelect:this.onSelect,setSearch:this.handleChange,search:this.state.filters})}}},20585:(e,t,a)=>{a.d(t,{j:()=>n});var r=a(92950),l=a.n(r),s=a(46029);class n extends l().Component{constructor(e){super(e),this.service=null,this.service=(0,s.kJ)(e.machine).onTransition((e=>this.setState({current:e}))),this.state={current:e.machine.initialState}}componentDidMount(){this.service.start()}componentWillUnmount(){this.service.stop()}render(){const{current:e}=this.state,{send:t}=this.service;return this.props.children({current:e,send:t})}}},86159:(e,t,a)=>{a.d(t,{Q:()=>i});var r=a(54785),l=a(45868),s=a(92950),n=a.n(s);const i=(0,a(74806).ZP)((({"aria-label":e,helperTextInvalid:t,id:a,intl:i=l.N,toggleAriaLabel:o,maxHeight:c,placeholderText:u,direction:g=r.SelectDirection.down,isInvalid:d=!1,isRequired:m=!1,appendMenuTo:p="parent",label:b,value:v,onChange:f,options:y,style:T})=>{const[h,E]=(0,s.useState)(!1),[_,O]=(0,s.useState)(null);return(0,s.useEffect)((()=>{O(v||null)}),[v]),n().createElement(r.FormGroup,{isRequired:m,style:T,fieldId:a,label:null!==b&&"object"==typeof b?i.formatMessage(b):b,helperTextInvalid:null!==t&&"object"==typeof t?i.formatMessage(t):t,validated:d?"error":"default"},n().createElement(r.Select,{id:a,ouiaId:a,maxHeight:c,toggleAriaLabel:o,variant:r.SelectVariant.single,placeholderText:u,"aria-label":e,direction:g,menuAppendTo:p,isOpen:h,onToggle:()=>E(!h),onSelect:(e,t)=>{O(t),f(t.value,null),E(!1)},selections:_},y.map((e=>({toString:()=>"object"==typeof e.label?i.formatMessage(e.label):e.label,value:e.value,description:e.description}))).map((e=>n().createElement(r.SelectOption,{key:`${e.value}`,value:e,description:e.description})))))}))},38497:(e,t,a)=>{a.d(t,{q:()=>r});const r=(0,a(29122).J)({context:{selection:[]},initial:"collapsed",states:{collapsed:{on:{TOGGLE:"expanded"}},expanded:{on:{TOGGLE:"collapsed",SELECT:{target:"collapsed",actions:["assignSelection"]}}}}})},69732:(e,t,a)=>{a.d(t,{Q:()=>o});var r=a(54785),l=a(76889),s=a(92950),n=a.n(s);const i={toolbar:{gridGap:a(32412).ZP.value}},o=({primary:e,secondaries:t,pagination:a,button:s,onClear:o,selected:c})=>n().createElement(r.Toolbar,{style:i.toolbar,clearAllFilters:o,id:"price-list-toolbar"},n().createElement(r.ToolbarContent,null,n().createElement(r.ToolbarToggleGroup,{breakpoint:"xl",toggleIcon:n().createElement(l.k1,null)},n().createElement(r.ToolbarGroup,{variant:"filter-group"},n().createElement(r.ToolbarItem,null,e),t.map((e=>n().createElement(r.ToolbarItem,{key:e.name},n().createElement(r.ToolbarFilter,{deleteChip:e.onRemove,chips:e.filters,categoryName:e.name},c===e.name?e.component:"")))))),n().createElement(r.ToolbarItem,null,s),n().createElement(r.ToolbarItem,{variant:r.ToolbarItemVariant.pagination},a)),n().createElement("hr",{className:"pf-c-divider"}))},78108:(e,t,a)=>{a.d(t,{u:()=>l});var r=a(97027);const l={description_too_long:r.Z.costModelsDescTooLong,duplicate:r.Z.priceListDuplicate,not_number:r.Z.priceListNumberRate,not_positive:r.Z.priceListPosNumberRate,rate_too_long:r.Z.costModelsRateTooLong,required:r.Z.costModelsRequiredField,tag_too_long:r.Z.costModelsInfoTooLong}},34660:(e,t,a)=>{a.d(t,{HJ:()=>E,Cw:()=>_,Pz:()=>r.Pz,uD:()=>O,L3:()=>r.L3,Nl:()=>r.Nl,bF:()=>c});var r=a(44808),l=a(92950),s=a.n(l),n=a(91778),i=a(78108);function o(e=r.Pv,t){switch(t.type){case"UPDATE_DESCRIPTION":return Object.assign(Object.assign({},e),{description:t.value,errors:Object.assign(Object.assign({},e.errors),{description:(0,r.zp)(t.value)})});case"UPDATE_METRIC":{const a=e.errors,l=e.measurement;l.isDirty&&(l.value="",a.measurement=i.u.required);let s=e.step;"initial"===s&&(s="set_metric");const n=Object.assign(Object.assign({},e),{metric:t.value,measurement:l,errors:a,step:s,calculation:t.defaultCalculation,rateKind:"Cluster"===t.value?"regular":e.rateKind}),o=(0,r.cQ)(n),c=n.otherTiers.find((e=>(0,r.lI)((0,r.Um)(e),o)));return Object.assign(Object.assign({},n),{errors:Object.assign(Object.assign({},n.errors),{tagKey:c?i.u.duplicate:null})})}case"UPDATE_MEASUREMENT":{if("initial"===e.step)return e;let a=e.step;"set_metric"===a&&(a="set_rate");const l=Object.assign(Object.assign({},e),{measurement:{value:t.value,isDirty:!0},errors:Object.assign(Object.assign({},e.errors),{measurement:null}),step:a}),s=(0,r.cQ)(l),n=l.otherTiers.find((e=>(0,r.lI)((0,r.Um)(e),s)));return Object.assign(Object.assign({},l),{errors:Object.assign(Object.assign({},l.errors),{tagKey:n?i.u.duplicate:null})})}case"UPDATE_CALCULATION":{if("set_rate"!==e.step)return e;const a=Object.assign(Object.assign({},e),{calculation:t.value}),l=(0,r.cQ)(a),s=a.otherTiers.find((e=>(0,r.lI)((0,r.Um)(e),l)));return Object.assign(Object.assign({},a),{errors:Object.assign(Object.assign({},a.errors),{tagKey:s?i.u.duplicate:null})})}case"TOGGLE_RATE_KIND":return"set_rate"!==e.step?e:Object.assign(Object.assign({},e),{rateKind:"regular"===e.rateKind?"tagging":"regular"});case"UPDATE_REGULAR":return Object.assign(Object.assign({},e),{tieredRates:[{isDirty:!0,inputValue:t.value,value:(0,n.E3)(t.value)}],errors:Object.assign(Object.assign({},e.errors),{tieredRates:(0,r.MD)(t.value)})});case"UPDATE_TAG_KEY":{if("set_rate"!==e.step||"tagging"!==e.rateKind)return e;const a=Object.assign(Object.assign({},e),{taggingRates:Object.assign(Object.assign({},e.taggingRates),{tagKey:{value:t.value,isDirty:!0}}),errors:Object.assign(Object.assign({},e.errors),{tagKey:(0,r.eU)(t.value)})}),l=(0,r.cQ)(a),s=a.otherTiers.find((e=>(0,r.lI)((0,r.Um)(e),l)));return Object.assign(Object.assign({},a),{errors:Object.assign(Object.assign({},a.errors),{tagKey:s?i.u.duplicate:a.errors.tagKey})})}case"UPDATE_TAG_DEFAULT":return"set_rate"!==e.step&&"tagging"!==e.rateKind?e:Object.assign(Object.assign({},e),{taggingRates:Object.assign(Object.assign({},e.taggingRates),{defaultTag:e.taggingRates.defaultTag===t.index?null:t.index})});case"UPDATE_TAG":{if("set_rate"!==e.step||"tagging"!==e.rateKind)return e;let a=e.errors.tagValues[t.index],l=e.errors.tagValueValues[t.index],s=e.errors.tagDescription[t.index],i=e.taggingRates.tagValues[t.index].isDirty,o=e.taggingRates.tagValues[t.index].isTagValueDirty;if(void 0!==t.payload.value){const{value:e}=t.payload;a=(0,r.MD)(e),i=!0}return void 0!==t.payload.tagValue&&(l=(0,r.eU)(t.payload.tagValue),o=!0),void 0!==t.payload.description&&(s=(0,r.zp)(t.payload.description)),Object.assign(Object.assign({},e),{taggingRates:Object.assign(Object.assign({},e.taggingRates),{tagValues:[...e.taggingRates.tagValues.slice(0,t.index),Object.assign(Object.assign(Object.assign(Object.assign({},e.taggingRates.tagValues[t.index]),t.payload),void 0!==t.payload.value&&{inputValue:t.payload.value,value:(0,n.E3)(t.payload.value)}),{isDirty:i,isTagValueDirty:o}),...e.taggingRates.tagValues.slice(t.index+1)]}),errors:Object.assign(Object.assign({},e.errors),{tagDescription:[...e.errors.tagDescription.slice(0,t.index),s,...e.errors.tagDescription.slice(t.index+1)],tagValueValues:[...e.errors.tagValueValues.slice(0,t.index),l,...e.errors.tagValueValues.slice(t.index+1)],tagValues:[...e.errors.tagValues.slice(0,t.index),a,...e.errors.tagValues.slice(t.index+1)]})})}case"REMOVE_TAG":return"set_rate"!==e.step||"tagging"!==e.rateKind?e:Object.assign(Object.assign({},e),{errors:Object.assign(Object.assign({},e.errors),{tagValues:[...e.errors.tagValues.slice(0,t.index),...e.errors.tagValues.slice(t.index+1)],tagValueValues:[...e.errors.tagValueValues.slice(0,t.index),...e.errors.tagValueValues.slice(t.index+1)]}),taggingRates:Object.assign(Object.assign({},e.taggingRates),{defaultTag:e.taggingRates.defaultTag===t.index?null:e.taggingRates.defaultTag>t.index?e.taggingRates.defaultTag-1:e.taggingRates.defaultTag,tagValues:[...e.taggingRates.tagValues.slice(0,t.index),...e.taggingRates.tagValues.slice(t.index+1)]})});case"ADD_TAG":return"set_rate"!==e.step||"tagging"!==e.rateKind?e:Object.assign(Object.assign({},e),{errors:Object.assign(Object.assign({},e.errors),{tagValues:[...e.errors.tagValues,i.u.required],tagDescription:[...e.errors.tagDescription,null]}),taggingRates:Object.assign(Object.assign({},e.taggingRates),{tagValues:[...e.taggingRates.tagValues,Object.assign({},r.fP.tagValues[0])]})});case"RESET_FORM":return t.payload;default:return e}}function c(e,t,a=[]){const l=(0,r.Pz)(t,void 0,a),[n,i]=s().useReducer(o,l);return Object.assign(Object.assign({},n),{reset:e=>i({type:"RESET_FORM",payload:e}),setDescription:e=>i({type:"UPDATE_DESCRIPTION",value:e}),setMetric:t=>i({type:"UPDATE_METRIC",value:t,defaultCalculation:(0,r.Bk)(e,t)}),setMeasurement:e=>i({type:"UPDATE_MEASUREMENT",value:e}),setCalculation:e=>i({type:"UPDATE_CALCULATION",value:e}),setRegular:e=>i({type:"UPDATE_REGULAR",value:e}),toggleTaggingRate:()=>i({type:"TOGGLE_RATE_KIND"}),setTagKey:e=>i({type:"UPDATE_TAG_KEY",value:e}),removeTag:e=>i({type:"REMOVE_TAG",index:e}),addTag:()=>i({type:"ADD_TAG"}),updateTag:(e,t)=>i({type:"UPDATE_TAG",index:t,payload:e}),updateDefaultTag:e=>i({type:"UPDATE_TAG_DEFAULT",index:e})})}var u=a(54785),g=a(7081),d=a(45868),m=a(97027),p=a(74806);const b={currency:{fontWeight:a(23992).ZP.value}},v=(0,p.ZP)((({currencyUnits:e="USD",fieldId:t,helperTextInvalid:a=m.Z.priceListPosNumberRate,intl:r=d.N,label:l=m.Z.rate,onBlur:i,onChange:o,style:c,validated:g,value:p})=>s().createElement(u.FormGroup,{isRequired:!0,style:c,fieldId:t,label:null!==l&&"object"==typeof l?r.formatMessage(l):l,helperTextInvalid:null!==a&&"object"==typeof a?r.formatMessage(a):a,validated:g},s().createElement(u.InputGroup,null,s().createElement(u.InputGroupText,{style:b.currency},r.formatMessage(m.Z.currencyUnits,{units:e})),s().createElement(u.TextInput,{onBlur:i,isRequired:!0,type:"text","aria-label":r.formatMessage(m.Z.costModelsWizardRateAriaLabel),id:t,placeholder:(0,n.MV)(0,e,{minimumFractionDigits:2,maximumFractionDigits:2}),value:p,onChange:o,onKeyDown:e=>{13!==e.keyCode&&187!==e.keyCode||e.preventDefault()},validated:g})))));var f=a(86159);const y=(0,p.ZP)((({id:e,intl:t=d.N,label:a,isRequired:r,helperTextInvalid:l,onChange:n,onBlur:i,placeholder:o,style:c,validated:g,value:m})=>s().createElement(u.FormGroup,{isRequired:r,style:c,fieldId:e,label:null!==a&&"object"==typeof a?t.formatMessage(a):a,helperTextInvalid:null!==l&&"object"==typeof l?t.formatMessage(l):l,validated:g},s().createElement(u.TextInput,{validated:g,value:m,onChange:n,id:e,onBlur:i,isRequired:r,placeholder:o}))));var T=a(71415);const h=(0,p.ZP)((({currencyUnits:e,defaultTag:t,errors:a,intl:r=d.N,tagValues:l,updateDefaultTag:n,removeTag:i,updateTag:o})=>{const c={width:"200px"},g={height:"100%",position:"relative",top:"50%"};return s().createElement(s().Fragment,null,l.map(((d,p)=>s().createElement(u.Split,{hasGutter:!0,key:p},s().createElement(u.SplitItem,{style:g},r.formatMessage(m.Z.equalsSymbol)),s().createElement(u.SplitItem,null,s().createElement(y,{isRequired:!0,style:c,id:`tagValue_${p}`,label:m.Z.costModelsTagRateTableValue,placeholder:r.formatMessage(m.Z.costModelsEnterTagValue),value:d.tagValue,onChange:e=>o({tagValue:e},p),validated:l[p].isTagValueDirty&&a.tagValueValues[p]?"error":"default",helperTextInvalid:a.tagValueValues[p]})),s().createElement(u.SplitItem,null,s().createElement(v,{currencyUnits:e,fieldId:`rate_${p}`,helperTextInvalid:a.tagValues[p],onChange:e=>o({value:e},p),style:c,validated:l[p].isDirty&&a.tagValues[p]?"error":"default",value:d.inputValue})),s().createElement(u.SplitItem,null,s().createElement(y,{style:c,id:`desc_${p}`,label:m.Z.description,validated:a.tagDescription[p]?"error":"default",placeholder:r.formatMessage(m.Z.costModelsEnterTagDescription),value:d.description,onChange:e=>o({description:e},p),helperTextInvalid:a.tagDescription[p]})),s().createElement(u.SplitItem,null,s().createElement(u.FormGroup,{fieldId:`isDefault_${p}`,label:r.formatMessage(m.Z.default)},s().createElement(u.Checkbox,{id:`isDefault_${p}`,isChecked:t===p,onChange:()=>n(p)}))),s().createElement(u.SplitItem,null,s().createElement(u.FormGroup,{fieldId:"__irrelevant",label:s().createElement("div",null," ")},s().createElement(u.Button,{"aria-label":r.formatMessage(m.Z.costModelsRemoveTagLabel),variant:u.ButtonVariant.plain,isDisabled:1===l.length,onClick:()=>i(p)},s().createElement(T.$_,null))))))))})),E=(0,p.ZP)((({currencyUnits:e,intl:t=d.N,metricsHash:a,rateFormData:r})=>{const{addTag:l,calculation:i,description:o,errors:c,measurement:{value:p,isDirty:b},metric:T,rateKind:E,removeTag:_,setCalculation:O,setDescription:V,setMeasurement:R,setMetric:j,setRegular:M,setTagKey:D,step:x,taggingRates:{tagKey:{value:C,isDirty:S},defaultTag:I,tagValues:Z},tieredRates:{0:{inputValue:k,isDirty:A}},toggleTaggingRate:P,updateDefaultTag:K,updateTag:U}=r,L=e=>{const a=e.replace(/ /g,"_").toLowerCase();return t.formatMessage(m.Z.metricValues,{value:a})||e},G=(e,a)=>{const r=t.formatMessage(m.Z.units,{units:(0,n.ZV)(a)})||a;return t.formatMessage(m.Z.measurementValues,{value:e.toLowerCase().replace("-","_"),units:r,count:2})||e},q=(e,a)=>{const r=a.toLowerCase().replace("-","_");return t.formatMessage(m.Z.measurementValuesDesc,{value:e.toLowerCase().replace("-","_"),units:r||a})||e},N=s().useMemo((()=>Object.keys(a)),[a]),F=s().useMemo((()=>N.includes(T)?Object.keys(a[T]):[]),[N,T]),w={width:"360px"};return s().createElement(s().Fragment,null,s().createElement(y,{style:w,id:"description",label:m.Z.description,value:o,validated:c.description?"error":"default",helperTextInvalid:c.description,onChange:V}),s().createElement(u.Grid,{hasGutter:!0},s().createElement(u.GridItem,{span:6},s().createElement(f.Q,{isRequired:!0,style:w,id:"metric-selector",toggleAriaLabel:t.formatMessage(m.Z.costModelsSelectMetric),label:t.formatMessage(m.Z.metric),placeholderText:t.formatMessage(m.Z.select),value:T,onChange:j,options:[...N.map((e=>({label:L(e),value:e,isDisabled:!1})))]})),"initial"===x?null:s().createElement(u.GridItem,{span:6},s().createElement(f.Q,{isRequired:!0,helperTextInvalid:c.measurement,isInvalid:c.measurement&&b,style:w,id:"measurement-selector",label:t.formatMessage(m.Z.measurement),toggleAriaLabel:t.formatMessage(m.Z.costModelsSelectMeasurement),value:a[T][p]?G(p,a[T][p].label_measurement_unit):p,onChange:R,placeholderText:"Select...",options:[...F.map((e=>{const t=a[T][e].label_measurement_unit;return{label:G(e,t),value:e,isDisabled:!1,description:q(e,t)}}))]}))),"set_rate"===x?s().createElement(s().Fragment,null,s().createElement(s().Fragment,null,s().createElement(u.FormGroup,{isInline:!0,style:w,fieldId:"calculation",label:t.formatMessage(m.Z.calculationType)},s().createElement(u.Radio,{name:"calculation",id:"calculation_infra",label:t.formatMessage(m.Z.infrastructure),isChecked:"Infrastructure"===i,onChange:()=>O("Infrastructure")}),s().createElement(u.Radio,{name:"calculation",id:"calculation_suppl",label:t.formatMessage(m.Z.supplementary),isChecked:"Supplementary"===i,onChange:()=>O("Supplementary")})),"Cluster"!==T?s().createElement(u.Switch,{"aria-label":t.formatMessage(m.Z.costModelsEnterTagRate),label:t.formatMessage(m.Z.costModelsEnterTagRate),isChecked:"tagging"===E,onChange:P}):null),"regular"===E?s().createElement(v,{currencyUnits:e,fieldId:"regular-rate",helperTextInvalid:c.tieredRates,onChange:M,style:w,validated:c.tieredRates&&A?"error":"default",value:k}):s().createElement(s().Fragment,null,s().createElement(y,{isRequired:!0,style:w,value:C,onChange:D,id:"tag-key",label:m.Z.costModelsFilterTagKey,placeholder:t.formatMessage(m.Z.costModelsEnterTagKey),validated:c.tagKey&&S?"error":"default",helperTextInvalid:c.tagKey}),s().createElement(h,{currencyUnits:e,defaultTag:I,errors:{tagValues:c.tagValues,tagValueValues:c.tagValueValues,tagDescription:c.tagDescription},removeTag:_,tagValues:Z,updateDefaultTag:K,updateTag:U}),s().createElement(u.Button,{style:{paddingLeft:"0",textAlign:"left"},variant:u.ButtonVariant.link,onClick:l},s().createElement(g.wl,null)," ",t.formatMessage(m.Z.costModelsAddTagValues)))):null)}));function _(e){return"tagging"===e.rateKind?null===e.errors.description&&null===e.errors.measurement&&e.errors.tagValues.every((e=>null===e))&&e.errors.tagValueValues.every((e=>null===e))&&e.errors.tagDescription.every((e=>null===e))&&null===e.errors.tagKey:null===e.errors.description&&null===e.errors.measurement&&null===e.errors.tieredRates}function O(e,t){if(!e)return!0;if(e.description!==t.description)return!0;if(e.metric.label_metric!==t.metric)return!0;if(e.metric.label_measurement!==t.measurement.value)return!0;if(e.cost_type!==t.calculation)return!0;const a=e.tiered_rates?"regular":"tagging";if(a!==t.rateKind)return!0;if("regular"===a&&Number(e.tiered_rates[0].value)!==Number(t.tieredRates[0].value))return!0;if("tagging"===a){const a=e.tag_rates;if(a.tag_key!==t.taggingRates.tagKey.value)return!0;if(a.tag_values.length!==t.taggingRates.tagValues.length)return!0;if(a.tag_values.some(((e,a)=>{const r=t.taggingRates.tagValues[a],l=t.taggingRates.defaultTag===a;return e.tag_value!==r.tagValue||Number(e.value)!==Number(r.inputValue)||e.description!==r.description||e.default!==l})))return!0}return!1}},44808:(e,t,a)=>{a.d(t,{Bk:()=>c,L3:()=>g,MD:()=>o,Nl:()=>d,Pv:()=>i,Pz:()=>u,Um:()=>m,cQ:()=>p,eU:()=>y,fP:()=>n,lI:()=>b,tT:()=>v,zp:()=>f});var r=a(63133),l=a(91778),s=a(78108);const n={tagKey:{value:"",isDirty:!1},defaultTag:null,tagValues:[{tagValue:"",description:"",isDirty:!1,isTagValueDirty:!1,inputValue:"",value:""}]},i={otherTiers:[],step:"initial",description:"",metric:"",measurement:{value:"",isDirty:!1},calculation:"",rateKind:"regular",tieredRates:[{isDirty:!1,inputValue:"",value:""}],taggingRates:Object.assign({},n),errors:{description:null,measurement:s.u.required,tieredRates:s.u.required,tagValues:[s.u.required],tagDescription:[null],tagKey:s.u.required,tagValueValues:[s.u.required]}},o=e=>0===e.length?s.u.required:(0,l.dI)(e)?Number((0,l.E3)(e))<0?s.u.not_positive:(0,l.cR)(e)>10?s.u.rate_too_long:null:s.u.not_number;function c(e,t){let a=Object.keys(e);return a.includes(t)?(a=Object.keys(e[t]),0===a.length?"":e[t][a[0]].default_cost_type):""}function u(e,t=i,a){const r=a||t.otherTiers;if(!e)return Object.assign(Object.assign({},t),{otherTiers:r});const o=e.tiered_rates?"regular":"tagging";let c=[{inputValue:"",value:"",isDirty:!0}];const u=Object.assign({},n),g={description:null,measurement:null,tieredRates:null,tagValues:[null],tagKey:null,tagValueValues:[null],tagDescription:[null]};if("tagging"===o){const t=e.tag_rates;u.tagKey={value:t.tag_key,isDirty:!0};const a=t.tag_values.findIndex((e=>e.default));u.defaultTag=-1===a?null:a,u.tagValues=t.tag_values.map((e=>{const t=(0,l.zs)(e.value,e.unit);return{description:e.description,inputValue:t,isDirty:!1,isTagValueDirty:!1,tagValue:e.tag_value,value:t}})),g.tieredRates=s.u.required,g.tagValueValues=new Array(t.tag_values.length).fill(null),g.tagValues=new Array(t.tag_values.length).fill(null),g.tagDescription=new Array(t.tag_values.length).fill(null)}return"regular"===o&&(c=e.tiered_rates.map((e=>{const t=(0,l.zs)(e.value,e.unit);return{inputValue:t,isDirty:!0,value:t}})),g.tagValues=[s.u.required],g.tagValueValues=[s.u.required]),{otherTiers:r,step:"set_rate",description:e.description,metric:e.metric.label_metric,measurement:{value:e.metric.label_measurement,isDirty:!0},calculation:e.cost_type,rateKind:o,tieredRates:c,taggingRates:u,errors:g}}const g=(e,t,a,r=-1)=>{r<0&&(r=t.rates.length);const l=d(a,e,t.currency);return{currency:t.currency,name:t.name,source_type:"OCP",description:t.description,distribution:t.distribution,distributePlatformUnallocated:t.distributePlatformUnallocated,distributeWorkersUnallocated:t.distributeWorkersUnallocated,source_uuids:t.sources.map((e=>e.uuid)),markup:{value:t.markup.value,unit:"percent"},rates:[...t.rates.slice(0,r),l,...t.rates.slice(r+1)]}},d=(e,t,a="USD")=>{const r="tagging"===e.rateKind?"tag_rates":"tiered_rates",l="tagging"===e.rateKind?{tag_key:e.taggingRates.tagKey.value,tag_values:e.taggingRates.tagValues.map(((t,r)=>({tag_value:t.tagValue,unit:a,value:t.value,description:t.description,default:r===e.taggingRates.defaultTag})))}:e.tieredRates.map((e=>({value:e.value,unit:a,usage:{unit:a}}))),s=t[e.metric][e.measurement.value];return{description:e.description,metric:{metric:s.metric,name:s.metric,label_metric:s.label_metric,label_measurement:s.label_measurement,label_measurement_unit:s.label_measurement_unit,source_type:"OpenShift Cluster Platform",default_cost_type:s.default_cost_type},cost_type:e.calculation,[r]:l}},m=e=>{const t=e.tag_rates&&e.tag_rates.tag_key?e.tag_rates.tag_key:null;return{metric:e.metric.label_metric,measurement:e.metric.label_measurement,tagKey:t,costType:e.cost_type}},p=e=>{const t=e.taggingRates&&e.taggingRates.tagKey?e.taggingRates.tagKey.value:null;return{metric:e.metric,measurement:e.measurement?e.measurement.value:null,tagKey:t,costType:e.calculation}},b=(e,t)=>e.metric===t.metric&&e.measurement===t.measurement&&e.costType===t.costType&&e.tagKey===t.tagKey;function v(e,t,a,l){const s=l(e),n=l(t);return a===r.SortByDirection.asc?s>n?1:s<n?-1:0:s>n?-1:s<n?1:0}const f=e=>e.length>500?s.u.description_too_long:null,y=e=>0===e.length?s.u.required:e.length>100?s.u.tag_too_long:null},67581:(e,t,a)=>{a.d(t,{y:()=>u});var r=a(63133),l=a(45868),s=a(97027),n=a(92950),i=a.n(n),o=a(74806),c=a(91778);const u=(0,o.ZP)((({actions:e=[],intl:t=l.N,isCompact:a,tiers:n,sortCallback:o=(()=>{})})=>{const[u,g]=i().useState(null),[d,m]=i().useState(null),[p,b]=i().useState([]),v=n.reduce(((e,a,r)=>{const l=!a.tiered_rates,n=a.tiered_rates?a.tiered_rates[0].value:0;return[...e,{data:{index:r,hasChildren:l,tag_rates:a.tag_rates,stateIndex:a.stateIndex},cells:[a.description||"",(u=a.metric.label_metric,t.formatMessage(s.Z.metricValues,{value:u})||u),(i=a.metric.label_measurement,o=a.metric.label_measurement_unit,o=t.formatMessage(s.Z.units,{units:(0,c.ZV)(o)})||o,t.formatMessage(s.Z.measurementValues,{value:i.toLowerCase().replace("-","_"),units:o,count:2})),a.cost_type,{title:l?t.formatMessage(s.Z.various):(0,c.NJ)(n,a.tiered_rates[0].unit),expandToggle:l}]}];var i,o,u}),[]),f=[{title:t.formatMessage(s.Z.description)},{title:t.formatMessage(s.Z.metric),sortable:!0,sortIndex:1},{title:t.formatMessage(s.Z.measurement),sortable:!0,sortIndex:2},{title:t.formatMessage(s.Z.calculationType)},{title:t.formatMessage(s.Z.rate)}],y=[t.formatMessage(s.Z.costModelsTagRateTableKey),t.formatMessage(s.Z.costModelsTagRateTableValue),t.formatMessage(s.Z.rate),t.formatMessage(s.Z.description),t.formatMessage(s.Z.default)],T=e=>({isExpanded:p.includes(e),onToggle:()=>(e=>{p.includes(e)?b(p.filter((t=>t!==e))):b(p.concat([e]))})(e),expandId:"expand-"+e,rowIndex:e,columnIndex:4}),h=null===u?v:v.sort(((e,t)=>{const a=e.cells[u],r=t.cells[u];return"asc"===d?a.localeCompare(r):r.localeCompare(a)}));return i().createElement(r.TableComposable,{"aria-label":t.formatMessage(s.Z.costModelsWizardCreatePriceList),variant:a?r.TableVariant.compact:void 0},i().createElement(r.Thead,null,i().createElement(r.Tr,null,f.map(((e,t)=>{return i().createElement(r.Th,{key:t,sort:e.sortable?(a=t,{sortBy:{index:u,direction:d,defaultDirection:"asc"},onSort:(e,t,a)=>{g(t),m(a),o({index:t,direction:a})},columnIndex:a}):void 0},e.title);var a})),!!e.length&&i().createElement(r.Th,null))),h.map(((a,l)=>{const n=a.data.hasChildren&&p.includes(l);return i().createElement(r.Tbody,{key:l,isExpanded:n},i().createElement(r.Tr,null,a.cells.map(((e,t)=>i().createElement(r.Td,{key:t,compoundExpand:e.expandToggle&&a.data.hasChildren?T(l):void 0},e.title?e.title:e))),!!e.length&&i().createElement(r.Td,{key:a.cells.length,isActionCell:!0},i().createElement(r.ActionsColumn,{items:e.map((e=>Object.assign(Object.assign({},e),{onClick:()=>{e.onClick(null,l,a,null)}})))}))),a.data.hasChildren&&n&&i().createElement(r.Tr,null,i().createElement(r.Td,{colSpan:6},i().createElement(r.ExpandableRowContent,null,i().createElement(r.TableComposable,{variant:r.TableVariant.compact,borders:!1},i().createElement(r.Thead,null,i().createElement(r.Tr,null,y.map(((e,t)=>i().createElement(r.Th,{key:t},e))))),i().createElement(r.Tbody,null,a.data.tag_rates.tag_values.map(((e,l)=>i().createElement(r.Tr,{key:l},i().createElement(r.Td,null,0===l?a.data.tag_rates.tag_key:""),i().createElement(r.Td,null,e.tag_value),i().createElement(r.Td,null,(0,c.NJ)(e.value,e.unit)),i().createElement(r.Td,null,e.description),i().createElement(r.Td,null,e.default?t.formatMessage(s.Z.yes):t.formatMessage(s.Z.no)))))))))))})))}))},88611:(e,t,a)=>{a.d(t,{j:()=>n});var r=a(54785),l=a(92950),s=a.n(l);const n=({children:e,tooltip:t="You have read only permissions",isDisabled:a})=>a?s().createElement(r.Tooltip,{isContentLeftAligned:!0,content:s().createElement("div",null,t)},s().createElement("div",{"aria-label":"Read only"},e)):e},54001:(e,t,a)=>{a.d(t,{n:()=>o});var r=a(54785),l=a(92950),s=a.n(l),n=a(20585),i=a(38497);const o=({options:e,placeholderText:t,setSelections:a,selections:l,isDisabled:o})=>s().createElement(n.j,{machine:i.q.withConfig({actions:{assignSelection:(e,t)=>{a(t.selection)}}})},(({send:a,current:n})=>s().createElement(r.Select,{isDisabled:o,variant:r.SelectVariant.checkbox,placeholderText:t,selections:l,isOpen:n.matches("expanded"),onSelect:(e,t)=>a({type:"SELECT",selection:t}),onToggle:()=>a({type:"TOGGLE"})},e.map((e=>s().createElement(r.SelectOption,{key:e.value,value:e.value},e.label))))))},41552:(e,t,a)=>{a.d(t,{J:()=>c});var r=a(54785),l=a(76889),s=a(92950),n=a.n(s),i=a(20585),o=a(38497);const c=({setPrimary:e,primary:t,options:a,isDisabled:s})=>n().createElement(i.j,{machine:o.q.withConfig({actions:{assignSelection:(t,a)=>{e(a.selection)}}})},(({current:e,send:i})=>n().createElement(r.Select,{isDisabled:s,toggleIcon:n().createElement(l.k1,null),isOpen:e.matches("expanded"),selections:t,onSelect:(e,t)=>i({type:"SELECT",selection:t}),onToggle:()=>i({type:"TOGGLE"})},a.map((e=>n().createElement(r.SelectOption,{key:e.value,value:e.value},e.label))))))},56728:(e,t,a)=>{a.d(t,{a:()=>i});var r=a(54785),l=a(7771),s=a(92950),n=a.n(s);const i=({text:e})=>n().createElement(r.Tooltip,{content:e,enableFlip:!0},n().createElement(l.T6,{color:"orange"}))},10848:(e,t,a)=>{a.d(t,{W:()=>s});var r=a(17918),l=a(80939);const s={card:{minHeight:250},cardDescription:{fontSize:r.ZP.value},cardBody:{fontSize:l.ZP.value,textAlign:"center"},exampleMargin:{marginLeft:30},inputField:{borderLeft:0,width:175},markupRadio:{marginBottom:6},markupRadioContainer:{marginTop:6},rateContainer:{marginLeft:20},percent:{borderLeft:0},sign:{borderRight:0}}}}]);
//# sourceMappingURL=../sourcemaps/9468.85cceb6fd40e587c7ec054caeb8a7797.js.map