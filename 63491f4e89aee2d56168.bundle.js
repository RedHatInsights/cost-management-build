(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[5333],{51508:(e,t,a)=>{"use strict";a.d(t,{l:()=>n});var r=a(95995),s=a(97522),l=a.n(s);const n=e=>{var{children:t}=e,a=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]])}return a}(e,["children"]);return l().createElement(r.Form,Object.assign({onSubmit:e=>e.preventDefault()},a),t)}},27916:(e,t,a)=>{"use strict";a.d(t,{Bu:()=>m,fv:()=>p});var r=a(95995),s=a(43047),l=a(7193),n=a(93952),i=a(97522),o=a.n(i),u=a(74806),c=a(43476),g=a(62226);const d=({variant:e,actionButton:t,title:a,description:n})=>o().createElement(r.EmptyState,{variant:e},o().createElement(r.EmptyStateIcon,{icon:s.$O,color:l.ZP.value}),o().createElement(r.Title,{headingLevel:"h4",size:"lg"},a),o().createElement(r.EmptyStateBody,null,o().createElement(r.Stack,null,o().createElement(r.StackItem,null,n))),t),m=(0,u.ZP)((({intl:e,onRefresh:t})=>{const a=e.formatMessage(n.Z.CostModelsWizardSourceErrorTitle),s=e.formatMessage(n.Z.CostModelsWizardSourceErrorDescription,{url:o().createElement("a",{href:e.formatMessage(n.Z.RedHatStatusUrl),rel:"noreferrer",target:"_blank"},'"Status Page"')}),l=o().createElement(r.Button,{onClick:t},e.formatMessage(n.Z.CostModelsRefreshDialog));return o().createElement(r.Stack,{hasGutter:!0},o().createElement(r.StackItem,null,o().createElement(r.Title,{headingLevel:"h2",size:r.TitleSizes.xl},e.formatMessage(n.Z.CostModelsWizardSourceTitle))),o().createElement(r.StackItem,null,o().createElement(d,{variant:r.EmptyStateVariant.large,actionButton:l,description:s,title:a})))})),p=(0,u.ZP)((0,c.connect)((e=>({query:g.vc.query(e)})),(e=>({fetch:t=>g.lk.fetchSources(t)(e)})),((e,t)=>{const{query:a}=e,{fetch:r}=t,s=Object.keys(a).reduce(((e,t)=>null===a[t]?e:""===e?`${t}=${a[t]}`:`${e}&${t}=${a[t]}`),"");return{onRefresh:()=>r(s)}}))((({intl:e,onRefresh:t})=>{const a=e.formatMessage(n.Z.CostModelsAssignSourcesErrorTitle),s=e.formatMessage(n.Z.CostModelsAssignSourcesErrorDescription,{url:o().createElement("a",{href:e.formatMessage(n.Z.RedHatStatusUrl),rel:"noreferrer",target:"_blank"},'"Status Page"')}),l=o().createElement(r.Button,{onClick:t},e.formatMessage(n.Z.CostModelsRefreshDialog));return o().createElement(d,{variant:r.EmptyStateVariant.large,actionButton:l,description:s,title:a})})))},10209:(e,t,a)=>{"use strict";a.d(t,{xZ:()=>r,fg:()=>s});const r=e=>(t,a)=>Object.assign(Object.assign({},e),{[t]:e[t]?[...e[t],a]:[a]}),s=e=>(t,a)=>{if(void 0===e[t])return e;const r=e[t].filter((e=>e!==a));return 0===r.length?Object.keys(e).reduce(((a,r)=>r===t?a:Object.assign(Object.assign({},a),{[r]:e[r]})),{}):Object.assign(Object.assign({},e),{[t]:r})}},77656:(e,t,a)=>{"use strict";a.d(t,{j:()=>n});const r=(e,t)=>e.filter((e=>e!==t));var s=a(97522),l=a.n(s);class n extends l().Component{constructor(e){super(e),this.state={filters:this.props.initialFilters},this.handleChange=this.handleChange.bind(this),this.onRemove=this.onRemove.bind(this),this.onSelect=this.onSelect.bind(this),this.onClearAll=this.onClearAll.bind(this)}handleChange(e){this.setState({filters:Object.assign(Object.assign({},this.state.filters),e)})}onClearAll(){this.setState({filters:Object.assign(Object.assign({},this.state.filters),{metrics:[],measurements:[]})})}onRemove(e,t){this.setState({filters:Object.assign(Object.assign({},this.state.filters),{[e]:r(this.state.filters[e],t)})})}onSelect(e,t){var a,s;this.setState({filters:Object.assign(Object.assign({},this.state.filters),{[e]:(a=this.state.filters[e],s=t,a.includes(s)?r(a,s):[...a,s])})})}render(){return this.props.children({onClearAll:this.onClearAll,onRemove:this.onRemove,onSelect:this.onSelect,setSearch:this.handleChange,search:this.state.filters})}}},95507:(e,t,a)=>{"use strict";a.d(t,{j:()=>n});var r=a(97522),s=a.n(r),l=a(59805);class n extends s().Component{constructor(e){super(e),this.service=null,this.service=(0,l.kJ)(e.machine).onTransition((e=>this.setState({current:e}))),this.state={current:e.machine.initialState}}componentDidMount(){this.service.start()}componentWillUnmount(){this.service.stop()}render(){const{current:e}=this.state,{send:t}=this.service;return this.props.children({current:e,send:t})}}},18728:(e,t,a)=>{"use strict";a.d(t,{q:()=>r});const r=(0,a(29122).J)({context:{selection:[]},initial:"collapsed",states:{collapsed:{on:{TOGGLE:"expanded"}},expanded:{on:{TOGGLE:"collapsed",SELECT:{target:"collapsed",actions:["assignSelection"]}}}}})},80963:(e,t,a)=>{"use strict";a.d(t,{N:()=>n,Z:()=>i});var r=a(95995),s=a(97522),l=a.n(s);const n=({id:e,itemCount:t,perPage:a,page:s,variant:n,onPerPageSelect:i,onSetPage:o})=>l().createElement(r.Toolbar,{id:e},l().createElement(r.ToolbarContent,null,l().createElement(r.ToolbarItem,{variant:"pagination"},l().createElement(r.Pagination,{variant:n,itemCount:t,perPage:a,page:s,onSetPage:o,onPerPageSelect:i})))),i=n},66555:(e,t,a)=>{"use strict";a.d(t,{Q:()=>i});var r=a(95995),s=a(97522),l=a.n(s);const n={toolbar:{gridGap:a(32412).ZP.value}},i=({primary:e,secondaries:t,pagination:a,button:s,onClear:i,selected:o})=>l().createElement(r.Toolbar,{style:n.toolbar,clearAllFilters:i,id:"price-list-toolbar"},l().createElement(r.ToolbarContent,null,l().createElement(r.ToolbarGroup,{variant:"filter-group"},l().createElement(r.ToolbarItem,null,e),t.map((e=>l().createElement(r.ToolbarItem,{key:e.name},l().createElement(r.ToolbarFilter,{deleteChip:e.onRemove,chips:e.filters,categoryName:e.name},o===e.name?e.component:""))))),l().createElement(r.ToolbarItem,null,s),l().createElement(r.ToolbarItem,{variant:r.ToolbarItemVariant.pagination},a)),l().createElement("hr",{className:"pf-c-divider"}))},76427:(e,t,a)=>{"use strict";a.d(t,{u:()=>s});var r=a(93952);const s={description_too_long:r.Z.CostModelsDescTooLong,duplicate:r.Z.PriceListDuplicate,not_number:r.Z.PriceListNumberRate,not_positive:r.Z.PriceListPosNumberRate,rate_too_long:r.Z.CostModelsRateTooLong,required:r.Z.CostModelsRequiredField,tag_too_long:r.Z.CostModelsInfoTooLong}},52591:(e,t,a)=>{"use strict";a.d(t,{HJ:()=>E,Cw:()=>_,Pz:()=>r.Pz,uD:()=>O,L3:()=>r.L3,Nl:()=>r.Nl,bF:()=>o});var r=a(96085),s=a(97522),l=a.n(s),n=a(76427);function i(e=r.Pv,t){switch(t.type){case"UPDATE_DESCRIPTION":return Object.assign(Object.assign({},e),{description:t.value,errors:Object.assign(Object.assign({},e.errors),{description:(0,r.zp)(t.value)})});case"UPDATE_METRIC":{const a=e.errors,s=e.measurement;s.isDirty&&(s.value="",a.measurement=n.u.required);let l=e.step;"initial"===l&&(l="set_metric");const i=Object.assign(Object.assign({},e),{metric:t.value,measurement:s,errors:a,step:l,calculation:t.defaultCalculation,rateKind:"Cluster"===t.value?"regular":e.rateKind}),o=(0,r.cQ)(i),u=i.otherTiers.find((e=>(0,r.lI)((0,r.Um)(e),o)));return Object.assign(Object.assign({},i),{errors:Object.assign(Object.assign({},i.errors),{tagKey:u?n.u.duplicate:null})})}case"UPDATE_MEASUREMENT":{if("initial"===e.step)return e;let a=e.step;"set_metric"===a&&(a="set_rate");const s=Object.assign(Object.assign({},e),{measurement:{value:t.value,isDirty:!0},errors:Object.assign(Object.assign({},e.errors),{measurement:null}),step:a}),l=(0,r.cQ)(s),i=s.otherTiers.find((e=>(0,r.lI)((0,r.Um)(e),l)));return Object.assign(Object.assign({},s),{errors:Object.assign(Object.assign({},s.errors),{tagKey:i?n.u.duplicate:null})})}case"UPDATE_CALCULATION":{if("set_rate"!==e.step)return e;const a=Object.assign(Object.assign({},e),{calculation:t.value}),s=(0,r.cQ)(a),l=a.otherTiers.find((e=>(0,r.lI)((0,r.Um)(e),s)));return Object.assign(Object.assign({},a),{errors:Object.assign(Object.assign({},a.errors),{tagKey:l?n.u.duplicate:null})})}case"TOGGLE_RATE_KIND":return"set_rate"!==e.step?e:Object.assign(Object.assign({},e),{rateKind:"regular"===e.rateKind?"tagging":"regular"});case"UPDATE_REGULAR":return Object.assign(Object.assign({},e),{tieredRates:[{value:t.value,isDirty:!0}],errors:Object.assign(Object.assign({},e.errors),{tieredRates:(0,r.MD)(t.value)})});case"UPDATE_TAG_KEY":{if("set_rate"!==e.step||"tagging"!==e.rateKind)return e;const a=Object.assign(Object.assign({},e),{taggingRates:Object.assign(Object.assign({},e.taggingRates),{tagKey:{value:t.value,isDirty:!0}}),errors:Object.assign(Object.assign({},e.errors),{tagKey:(0,r.eU)(t.value)})}),s=(0,r.cQ)(a),l=a.otherTiers.find((e=>(0,r.lI)((0,r.Um)(e),s)));return Object.assign(Object.assign({},a),{errors:Object.assign(Object.assign({},a.errors),{tagKey:l?n.u.duplicate:a.errors.tagKey})})}case"UPDATE_TAG_DEFAULT":return"set_rate"!==e.step&&"tagging"!==e.rateKind?e:Object.assign(Object.assign({},e),{taggingRates:Object.assign(Object.assign({},e.taggingRates),{defaultTag:e.taggingRates.defaultTag===t.index?null:t.index})});case"UPDATE_TAG":{if("set_rate"!==e.step||"tagging"!==e.rateKind)return e;let a=e.errors.tagValues[t.index],s=e.errors.tagValueValues[t.index],l=e.errors.tagDescription[t.index],n=e.taggingRates.tagValues[t.index].isDirty,i=e.taggingRates.tagValues[t.index].isTagValueDirty;if(void 0!==t.payload.value){const{value:e}=t.payload;a=(0,r.MD)(e),n=!0}return void 0!==t.payload.tagValue&&(s=(0,r.eU)(t.payload.tagValue),i=!0),void 0!==t.payload.description&&(l=(0,r.zp)(t.payload.description)),Object.assign(Object.assign({},e),{taggingRates:Object.assign(Object.assign({},e.taggingRates),{tagValues:[...e.taggingRates.tagValues.slice(0,t.index),Object.assign(Object.assign(Object.assign({},e.taggingRates.tagValues[t.index]),t.payload),{isDirty:n,isTagValueDirty:i}),...e.taggingRates.tagValues.slice(t.index+1)]}),errors:Object.assign(Object.assign({},e.errors),{tagDescription:[...e.errors.tagDescription.slice(0,t.index),l,...e.errors.tagDescription.slice(t.index+1)],tagValueValues:[...e.errors.tagValueValues.slice(0,t.index),s,...e.errors.tagValueValues.slice(t.index+1)],tagValues:[...e.errors.tagValues.slice(0,t.index),a,...e.errors.tagValues.slice(t.index+1)]})})}case"REMOVE_TAG":return"set_rate"!==e.step||"tagging"!==e.rateKind?e:Object.assign(Object.assign({},e),{errors:Object.assign(Object.assign({},e.errors),{tagValues:[...e.errors.tagValues.slice(0,t.index),...e.errors.tagValues.slice(t.index+1)],tagValueValues:[...e.errors.tagValueValues.slice(0,t.index),...e.errors.tagValueValues.slice(t.index+1)]}),taggingRates:Object.assign(Object.assign({},e.taggingRates),{defaultTag:e.taggingRates.defaultTag===t.index?null:e.taggingRates.defaultTag>t.index?e.taggingRates.defaultTag-1:e.taggingRates.defaultTag,tagValues:[...e.taggingRates.tagValues.slice(0,t.index),...e.taggingRates.tagValues.slice(t.index+1)]})});case"ADD_TAG":return"set_rate"!==e.step||"tagging"!==e.rateKind?e:Object.assign(Object.assign({},e),{errors:Object.assign(Object.assign({},e.errors),{tagValues:[...e.errors.tagValues,n.u.required],tagDescription:[...e.errors.tagDescription,null]}),taggingRates:Object.assign(Object.assign({},e.taggingRates),{tagValues:[...e.taggingRates.tagValues,Object.assign({},r.fP.tagValues[0])]})});case"RESET_FORM":return t.payload;default:return e}}function o(e,t,a=[]){const s=(0,r.Pz)(t,void 0,a),[n,o]=l().useReducer(i,s);return Object.assign(Object.assign({},n),{reset:e=>o({type:"RESET_FORM",payload:e}),setDescription:e=>o({type:"UPDATE_DESCRIPTION",value:e}),setMetric:t=>o({type:"UPDATE_METRIC",value:t,defaultCalculation:(0,r.Bk)(e,t)}),setMeasurement:e=>o({type:"UPDATE_MEASUREMENT",value:e}),setCalculation:e=>o({type:"UPDATE_CALCULATION",value:e}),setRegular:e=>o({type:"UPDATE_REGULAR",value:e}),toggleTaggingRate:()=>o({type:"TOGGLE_RATE_KIND"}),setTagKey:e=>o({type:"UPDATE_TAG_KEY",value:e}),removeTag:e=>o({type:"REMOVE_TAG",index:e}),addTag:()=>o({type:"ADD_TAG"}),updateTag:(e,t)=>o({type:"UPDATE_TAG",index:t,payload:e}),updateDefaultTag:e=>o({type:"UPDATE_TAG_DEFAULT",index:e})})}var u=a(95995),c=a(7081),g=a(32004),d=a(93952),m=a(97960),p=a(74806);const b=(0,p.ZP)((({fieldId:e,helperTextInvalid:t=d.Z.PriceListPosNumberRate,intl:a=g.N,label:r=d.Z.Rate,onBlur:s,onChange:n,style:i,validated:o,value:c})=>l().createElement(u.FormGroup,{isRequired:!0,style:i,fieldId:e,label:null!==r&&"object"==typeof r?a.formatMessage(r):r,helperTextInvalid:null!==t&&"object"==typeof t?a.formatMessage(t):t,validated:o},l().createElement(u.InputGroup,null,l().createElement(u.InputGroupText,null,l().createElement(m.bk,null)),l().createElement(u.TextInput,{onBlur:s,isRequired:!0,type:"text","aria-label":`rate input ${e}`,id:e,placeholder:"0.00",value:c,onChange:n,validated:o}))))),v=(0,p.ZP)((({"aria-label":e,helperTextInvalid:t,id:a,intl:r=g.N,isDisabled:s=!1,isInvalid:n=!1,isRequired:i=!1,label:o,onChange:c,options:d,style:m,value:p})=>l().createElement(u.FormGroup,{isRequired:i,style:m,fieldId:a,label:null!==o&&"object"==typeof o?r.formatMessage(o):o,helperTextInvalid:null!==t&&"object"==typeof t?r.formatMessage(t):t,validated:n?"error":"default"},l().createElement(u.FormSelect,{isRequired:i,isDisabled:s,value:p,onChange:c,"aria-label":e,id:a,validated:n?"error":"default"},d.map((e=>l().createElement(u.FormSelectOption,{key:`${e.value}`,value:e.value,label:"object"==typeof e.label?r.formatMessage(e.label):e.label,isDisabled:e.isDisabled}))))))),f=(0,p.ZP)((({id:e,intl:t=g.N,label:a,isRequired:r,helperTextInvalid:s,onChange:n,onBlur:i,placeholder:o,style:c,validated:d,value:m})=>l().createElement(u.FormGroup,{isRequired:r,style:c,fieldId:e,label:null!==a&&"object"==typeof a?t.formatMessage(a):a,helperTextInvalid:null!==s&&"object"==typeof s?t.formatMessage(s):s,validated:d},l().createElement(u.TextInput,{validated:d,value:m,onChange:n,id:e,onBlur:i,isRequired:r,placeholder:o}))));var y=a(99291),T=a(71415);const h=(0,p.ZP)((({intl:e=g.N,tagValues:t,updateDefaultTag:a,defaultTag:r,updateTag:s,removeTag:n,errors:i})=>{const o={width:"200px"},c={height:"100%",position:"relative",top:"50%"};return l().createElement(l().Fragment,null,t.map(((g,m)=>l().createElement(u.Split,{hasGutter:!0,key:m},l().createElement(u.SplitItem,{style:c},"="),l().createElement(u.SplitItem,null,l().createElement(f,{isRequired:!0,style:o,id:`tagValue_${m}`,label:d.Z.CostModelsTagRateTableValue,placeholder:e.formatMessage(d.Z.CostModelsEnterTagValue),value:g.tagValue,onChange:e=>s({tagValue:e},m),validated:t[m].isTagValueDirty&&i.tagValueValues[m]?"error":"default",helperTextInvalid:i.tagValueValues[m]})),l().createElement(u.SplitItem,null,l().createElement(b,{style:o,fieldId:`rate_${m}`,validated:t[m].isDirty&&i.tagValues[m]?"error":"default",value:g.value,onChange:e=>s({value:e},m),helperTextInvalid:i.tagValues[m]})),l().createElement(u.SplitItem,null,l().createElement(f,{style:o,id:`desc_${m}`,label:d.Z.Description,validated:i.tagDescription[m]?"error":"default",value:g.description,onChange:e=>s({description:e},m),helperTextInvalid:i.tagDescription[m]})),l().createElement(u.SplitItem,null,l().createElement(u.FormGroup,{fieldId:`isDefault_${m}`,label:e.formatMessage(d.Z.CostModelsTagRateTableDefault)},l().createElement(u.Checkbox,{id:`isDefault_${m}`,isChecked:r===m,onChange:()=>a(m)}))),l().createElement(u.SplitItem,null,l().createElement(u.FormGroup,{fieldId:"__irrelevant",label:l().createElement("div",null," ")},l().createElement(u.Button,{"data-testid":`remove_tag_${m}`,variant:u.ButtonVariant.plain,isDisabled:1===t.length,onClick:()=>n(m)},l().createElement(T.$_,null))))))))})),E=(0,p.ZP)((({intl:e=g.N,metricsHash:t,rateFormData:a})=>{const{step:r,description:s,metric:n,measurement:{value:i,isDirty:o},calculation:m,rateKind:p,taggingRates:{tagKey:{value:T,isDirty:E},defaultTag:_,tagValues:O},tieredRates:{0:{value:R,isDirty:j}},setDescription:D,setMetric:C,setMeasurement:V,setCalculation:M,setRegular:S,toggleTaggingRate:x,setTagKey:I,updateTag:Z,updateDefaultTag:P,removeTag:k,addTag:A,errors:K}=a,G=t=>{const a=t.replace(/ /g,"_").toLowerCase();return e.formatMessage(d.Z.MetricValues,{value:a})||t},L=(t,a)=>{const r=a.replace(/-/g,"_").toLowerCase(),s=e.formatMessage(d.Z.Units,{units:(0,y.ZV)(r)});return e.formatMessage(d.Z.MeasurementValues,{value:t.toLowerCase(),units:s||a,count:2})||t},U=l().useMemo((()=>Object.keys(t)),[t]),N=l().useMemo((()=>U.includes(n)?Object.keys(t[n]):[]),[U,n]),q={width:"360px"};return l().createElement(l().Fragment,null,l().createElement(f,{style:q,id:"description",label:d.Z.Description,value:s,validated:K.description?"error":"default",helperTextInvalid:K.description,onChange:D}),l().createElement(u.Grid,{hasGutter:!0},l().createElement(u.GridItem,{span:6},l().createElement(v,{isRequired:!0,style:q,id:"metric",label:d.Z.Metric,value:n,onChange:C,options:[{label:d.Z.Select,value:"",isDisabled:!0},...U.map((e=>({label:G(e),value:e,isDisabled:!1})))]})),"initial"===r?null:l().createElement(u.GridItem,{span:6},l().createElement(v,{isRequired:!0,helperTextInvalid:K.measurement,isInvalid:K.measurement&&o,style:q,id:"measurement",label:d.Z.Measurement,value:i,onChange:V,options:[{label:d.Z.Select,value:"",isDisabled:!0},...N.map((e=>({label:L(e,t[n][e].label_measurement_unit),value:e,isDisabled:!1})))]}))),"set_rate"===r?l().createElement(l().Fragment,null,l().createElement(l().Fragment,null,l().createElement(u.FormGroup,{isInline:!0,style:q,fieldId:"calculation",label:e.formatMessage(d.Z.CalculationType)},l().createElement(u.Radio,{name:"calculation",id:"calculation_infra",label:e.formatMessage(d.Z.Infrastructure),isChecked:"Infrastructure"===m,onChange:()=>M("Infrastructure")}),l().createElement(u.Radio,{name:"calculation",id:"calculation_suppl",label:e.formatMessage(d.Z.Supplementary),isChecked:"Supplementary"===m,onChange:()=>M("Supplementary")})),"Cluster"!==n?l().createElement(u.Switch,{"aria-label":e.formatMessage(d.Z.CostModelsEnterTagRate),label:e.formatMessage(d.Z.CostModelsEnterTagRate),isChecked:"tagging"===p,onChange:x}):null),"regular"===p?l().createElement(b,{style:q,helperTextInvalid:K.tieredRates,validated:K.tieredRates&&j?"error":"default",value:R,onChange:S,fieldId:"regular-rate"}):l().createElement(l().Fragment,null,l().createElement(f,{isRequired:!0,style:q,value:T,onChange:I,id:"tag-key",label:d.Z.CostModelsFilterTagKey,placeholder:e.formatMessage(d.Z.CostModelsEnterTagKey),validated:K.tagKey&&E?"error":"default",helperTextInvalid:K.tagKey}),l().createElement(h,{errors:{tagValues:K.tagValues,tagValueValues:K.tagValueValues,tagDescription:K.tagDescription},updateDefaultTag:P,defaultTag:_,tagValues:O,updateTag:Z,removeTag:k}),l().createElement(u.Button,{"data-testid":"add_more",style:{paddingLeft:"0",textAlign:"left"},variant:u.ButtonVariant.link,onClick:A},l().createElement(c.wl,null)," ",e.formatMessage(d.Z.CostModelsAddTagValues)))):null)}));function _(e){return"tagging"===e.rateKind?null===e.errors.description&&null===e.errors.measurement&&e.errors.tagValues.every((e=>null===e))&&e.errors.tagValueValues.every((e=>null===e))&&e.errors.tagDescription.every((e=>null===e))&&null===e.errors.tagKey:null===e.errors.description&&null===e.errors.measurement&&null===e.errors.tieredRates}function O(e,t){if(!e)return!0;if(e.description!==t.description)return!0;if(e.metric.label_metric!==t.metric)return!0;if(e.metric.label_measurement!==t.measurement.value)return!0;if(e.cost_type!==t.calculation)return!0;const a=e.tiered_rates?"regular":"tagging";if(a!==t.rateKind)return!0;if("regular"===a&&e.tiered_rates[0].value!==Number(t.tieredRates[0].value))return!0;if("tagging"===a){const a=e.tag_rates;if(a.tag_key!==t.taggingRates.tagKey.value)return!0;if(a.tag_values.length!==t.taggingRates.tagValues.length)return!0;if(a.tag_values.some(((e,a)=>{const r=t.taggingRates.tagValues[a],s=t.taggingRates.defaultTag===a;return e.tag_value!==r.tagValue||e.value!==Number(r.value)||e.description!==r.description||e.default!==s})))return!0}return!1}},96085:(e,t,a)=>{"use strict";a.d(t,{fP:()=>n,Pv:()=>i,MD:()=>u,Bk:()=>c,Pz:()=>g,L3:()=>d,Nl:()=>m,Um:()=>p,cQ:()=>b,lI:()=>v,tT:()=>f,zp:()=>y,eU:()=>T});var r=a(34168),s=a(32004),l=a(76427);const n={tagKey:{value:"",isDirty:!1},defaultTag:null,tagValues:[{tagValue:"",value:"",description:"",isDirty:!1,isTagValueDirty:!1}]},i={otherTiers:[],step:"initial",description:"",metric:"",measurement:{value:"",isDirty:!1},calculation:"",rateKind:"regular",tieredRates:[{value:"",isDirty:!1}],taggingRates:Object.assign({},n),errors:{description:null,measurement:l.u.required,tieredRates:l.u.required,tagValues:[l.u.required],tagDescription:[null],tagKey:l.u.required,tagValueValues:[l.u.required]}},o=e=>{const t=Number("1.1").toLocaleString((0,s.K)(),{}).substring(1,2),a=","===t?/\./g:/,/g;return e.replace(a,"").replace(t,".")},u=e=>{const t=o(e);if(0===t.length)return l.u.required;if(isNaN(Number(t)))return l.u.not_number;if(Number(t)<0)return l.u.not_positive;const a=t.split(".");return a[1]&&a[1].length>10?l.u.rate_too_long:null};function c(e,t){let a=Object.keys(e);return a.includes(t)?(a=Object.keys(e[t]),0===a.length?"":e[t][a[0]].default_cost_type):""}function g(e,t=i,a){const r=a||t.otherTiers;if(!e)return Object.assign(Object.assign({},t),{otherTiers:r});const s=e.tiered_rates?"regular":"tagging";let o=[{value:"",isDirty:!0}];const u=Object.assign({},n),c={description:null,measurement:null,tieredRates:null,tagValues:[null],tagKey:null,tagValueValues:[null],tagDescription:[null]};if("tagging"===s){const t=e.tag_rates;u.tagKey={value:t.tag_key,isDirty:!0};const a=t.tag_values.findIndex((e=>e.default));u.defaultTag=-1===a?null:a,u.tagValues=t.tag_values.map((e=>({tagValue:e.tag_value,value:e.value.toString(),description:e.description,isDirty:!1,isTagValueDirty:!1}))),c.tieredRates=l.u.required,c.tagValueValues=new Array(t.tag_values.length).fill(null),c.tagValues=new Array(t.tag_values.length).fill(null),c.tagDescription=new Array(t.tag_values.length).fill(null)}return"regular"===s&&(o=e.tiered_rates.map((e=>({value:e.value.toString(),isDirty:!0}))),c.tagValues=[l.u.required],c.tagValueValues=[l.u.required]),{otherTiers:r,step:"set_rate",description:e.description,metric:e.metric.label_metric,measurement:{value:e.metric.label_measurement,isDirty:!0},calculation:e.cost_type,rateKind:s,tieredRates:o,taggingRates:u,errors:c}}const d=(e,t,a,r=-1)=>{r<0&&(r=t.rates.length);const s=m(a,e);return{name:t.name,source_type:"OCP",description:t.description,distribution:t.distribution,source_uuids:t.sources.map((e=>e.uuid)),markup:{value:t.markup.value,unit:"percent"},rates:[...t.rates.slice(0,r),s,...t.rates.slice(r+1)]}},m=(e,t)=>{const a="tagging"===e.rateKind?"tag_rates":"tiered_rates",r="tagging"===e.rateKind?{tag_key:e.taggingRates.tagKey.value,tag_values:e.taggingRates.tagValues.map(((t,a)=>({tag_value:t.tagValue,unit:"USD",value:Number(o(t.value)),description:t.description,default:a===e.taggingRates.defaultTag})))}:e.tieredRates.map((e=>({value:Number(o(e.value)),unit:"USD",usage:{unit:"USD"}}))),s=t[e.metric][e.measurement.value];return{description:e.description,metric:{metric:s.metric,name:s.metric,label_metric:s.label_metric,label_measurement:s.label_measurement,label_measurement_unit:s.label_measurement_unit,source_type:"OpenShift Cluster Platform",default_cost_type:s.default_cost_type},cost_type:e.calculation,[a]:r}},p=e=>{const t=e.tag_rates&&e.tag_rates.tag_key?e.tag_rates.tag_key:null;return{metric:e.metric.label_metric,measurement:e.metric.label_measurement,tagKey:t,costType:e.cost_type}},b=e=>{const t=e.taggingRates&&e.taggingRates.tagKey?e.taggingRates.tagKey.value:null;return{metric:e.metric,measurement:e.measurement?e.measurement.value:null,tagKey:t,costType:e.calculation}},v=(e,t)=>e.metric===t.metric&&e.measurement===t.measurement&&e.costType===t.costType&&e.tagKey===t.tagKey;function f(e,t,a,s){const l=s(e),n=s(t);return a===r.SortByDirection.asc?l>n?1:l<n?-1:0:l>n?-1:l<n?1:0}const y=e=>e.length>500?l.u.description_too_long:null,T=e=>0===e.length?l.u.required:e.length>100?l.u.tag_too_long:null},39574:(e,t,a)=>{"use strict";a.d(t,{y:()=>d});var r=a(34168),s=a(32004),l=a(93952),n=a(97522),i=a.n(n),o=a(74806),u=a(99291),c=a(96085);const g=(0,o.ZP)((({intl:e=s.N,tagRates:t})=>{const a=[e.formatMessage(l.Z.CostModelsTagRateTableKey),e.formatMessage(l.Z.CostModelsTagRateTableValue),e.formatMessage(l.Z.Rate),e.formatMessage(l.Z.Description),e.formatMessage(l.Z.CostModelsTagRateTableDefault)],n=t&&t.tag_values.map(((a,r)=>({cells:[0===r?t.tag_key:"",a.tag_value,(0,u.og)(a.value,a.unit),a.description,a.default?e.formatMessage(l.Z.Yes):e.formatMessage(l.Z.No)]})));return i().createElement(r.Table,{"aria-label":e.formatMessage(l.Z.CostModelsTagRateTableAriaLabel),borders:!1,cells:a,gridBreakPoint:r.TableGridBreakpoint.grid2xl,rows:n,variant:r.TableVariant.compact},i().createElement(r.TableHeader,null),i().createElement(r.TableBody,null))})),d=(0,o.ZP)((({intl:e=s.N,tiers:t,actions:a,isCompact:n})=>{const[o,d]=i().useState({}),[m,p]=i().useState({}),b=[{title:e.formatMessage(l.Z.Description)},{title:e.formatMessage(l.Z.Metric),transforms:[r.sortable]},{title:e.formatMessage(l.Z.Measurement),transforms:[r.sortable]},{title:e.formatMessage(l.Z.CalculationType)},{title:e.formatMessage(l.Z.Rate),cellTransforms:[r.compoundExpand]}];let v=0;const f=t.sort(((e,t)=>{const a=1===m.index?e=>e.metric.label_metric:2===m.index?e=>e.metric.label_measurement:()=>"";return(0,c.tT)(e,t,m.direction,a)})).reduce(((t,a,r)=>{const s=a.tiered_rates?"regular":"tagging";let n=[];"tagging"===s&&(n=[{compoundParent:4,parent:r+v,cells:[{title:i().createElement(g,{tagRates:a.tag_rates}),props:{colSpan:6,className:"pf-m-no-padding"}}]}],v+=1);const c="tagging"===s?o[r+v-1]||!1:void 0;return[...t,{data:{index:r,hasChildren:"tagging"===s},cells:[a.description||"",a.metric.label_metric,`${a.metric.label_measurement} (${a.metric.label_measurement_unit})`,a.cost_type,{title:"regular"===s?`${(0,u.og)(Number(a.tiered_rates[0].value),a.tiered_rates[0].unit)}`:e.formatMessage(l.Z.Various),props:{isOpen:c,style:{padding:"tagging"===s?"":"1.5rem 1rem"}}}]},...n]}),[]);return i().createElement(r.Table,{onSort:(e,t,a)=>{p({index:t,direction:a})},sortBy:m,"aria-label":e.formatMessage(l.Z.CostModelsWizardCreatePriceList),variant:n?r.TableVariant.compact:void 0,rows:f,cells:b,actionResolver:e=>e.compoundParent?[]:a,onExpand:(e,t,a,r)=>{d(Object.assign(Object.assign({},o),{[t]:!r}))}},i().createElement(r.TableHeader,null),i().createElement(r.TableBody,null))}))},20546:(e,t,a)=>{"use strict";a.d(t,{j:()=>n});var r=a(95995),s=a(97522),l=a.n(s);const n=({children:e,tooltip:t="You have read only permissions",isDisabled:a})=>a?l().createElement(r.Tooltip,{isContentLeftAligned:!0,content:l().createElement("div",null,t)},l().createElement("div",null,e)):e},85218:(e,t,a)=>{"use strict";a.d(t,{n:()=>o});var r=a(95995),s=a(95507),l=a(18728),n=a(97522),i=a.n(n);const o=({options:e,placeholderText:t,setSelections:a,selections:n,isDisabled:o})=>i().createElement(s.j,{machine:l.q.withConfig({actions:{assignSelection:(e,t)=>{a(t.selection)}}})},(({send:a,current:s})=>i().createElement(r.Select,{isDisabled:o,variant:r.SelectVariant.checkbox,placeholderText:t,selections:n,isOpen:s.matches("expanded"),onSelect:(e,t)=>a({type:"SELECT",selection:t}),onToggle:()=>a({type:"TOGGLE"})},e.map((e=>i().createElement(r.SelectOption,{key:e.value,value:e.value},e.label))))))},60477:(e,t,a)=>{"use strict";a.d(t,{J:()=>u});var r=a(95995),s=a(76889),l=a(95507),n=a(18728),i=a(97522),o=a.n(i);const u=({setPrimary:e,primary:t,options:a,isDisabled:i})=>o().createElement(l.j,{machine:n.q.withConfig({actions:{assignSelection:(t,a)=>{e(a.selection)}}})},(({current:e,send:l})=>o().createElement(r.Select,{isDisabled:i,toggleIcon:o().createElement(s.k1,null),isOpen:e.matches("expanded"),selections:t,onSelect:(e,t)=>l({type:"SELECT",selection:t}),onToggle:()=>l({type:"TOGGLE"})},a.map((e=>o().createElement(r.SelectOption,{key:e.value,value:e.value},e.label))))))},39887:(e,t,a)=>{"use strict";a.d(t,{a:()=>i});var r=a(95995),s=a(98048),l=a(97522),n=a.n(l);const i=({text:e})=>n().createElement(r.Tooltip,{content:e,enableFlip:!0},n().createElement(s.T6,{color:"orange"}))},4705:(e,t,a)=>{"use strict";a.d(t,{W:()=>l});var r=a(17918),s=a(80939);const l={card:{minHeight:250},cardDescription:{fontSize:r.ZP.value},cardBody:{fontSize:s.ZP.value,textAlign:"center"},exampleMargin:{marginLeft:30},inputField:{borderLeft:0,width:150},markupRadio:{marginBottom:6},markupRadioContainer:{marginTop:6},rateContainer:{marginLeft:20},percent:{borderLeft:0},sign:{borderRight:0}}}}]);
//# sourceMappingURL=63491f4e89aee2d56168.bundle.js.map