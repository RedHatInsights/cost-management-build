(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[333],{51508:(e,t,a)=>{"use strict";a.d(t,{l:()=>n});var r=a(23212),s=a(97522),l=a.n(s);const n=e=>{var{children:t}=e,a=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]])}return a}(e,["children"]);return l().createElement(r.Form,Object.assign({onSubmit:e=>e.preventDefault()},a),t)}},27916:(e,t,a)=>{"use strict";a.d(t,{Bu:()=>m,fv:()=>p});var r=a(23212),s=a(84564),l=a(7193),n=a(97522),i=a.n(n),o=a(26793),c=a(89116),u=a(43476),g=a(62226);const d=({variant:e,actionButton:t,title:a,description:n})=>i().createElement(r.EmptyState,{variant:e},i().createElement(r.EmptyStateIcon,{icon:s.$O,color:l.ZP.value}),i().createElement(r.Title,{headingLevel:"h4",size:"lg"},a),i().createElement(r.EmptyStateBody,null,i().createElement(r.Stack,null,i().createElement(r.StackItem,null,n))),t),m=({onRefresh:e})=>{const{t}=(0,o.$)(),a=t("cost_models_wizard.source.error.title"),s=i().createElement(c.c,{i18nKey:"cost_models_wizard.source.error.desc"},i().createElement("a",{href:t("status_url"),rel:"noreferrer",target:"_blank"})),l=i().createElement(r.Button,{onClick:e},t("cost_models_details.assign_sources_error_action_button"));return i().createElement(r.Stack,{hasGutter:!0},i().createElement(r.StackItem,null,i().createElement(r.Title,{headingLevel:"h2",size:r.TitleSizes.xl},t("cost_models_wizard.source.title"))),i().createElement(r.StackItem,null,i().createElement(d,{variant:r.EmptyStateVariant.large,actionButton:l,description:s,title:a})))},p=(0,u.connect)((e=>({query:g.vc.query(e)})),(e=>({fetch:t=>g.lk.fetchSources(t)(e)})),((e,t)=>{const{query:a}=e,{fetch:r}=t,s=Object.keys(a).reduce(((e,t)=>null===a[t]?e:""===e?`${t}=${a[t]}`:`${e}&${t}=${a[t]}`),"");return{onRefresh:()=>r(s)}}))((({onRefresh:e})=>{const{t}=(0,o.$)(),a=t("cost_models_details.assign_sources_error_title"),s=i().createElement(c.c,{i18nKey:"cost_models_details.assign_sources_error_desc"},i().createElement("a",{href:t("status_url"),rel:"noreferrer",target:"_blank"})),l=i().createElement(r.Button,{onClick:e},t("cost_models_details.assign_sources_error_action_button"));return i().createElement(d,{variant:r.EmptyStateVariant.large,actionButton:l,description:s,title:a})}))},10209:(e,t,a)=>{"use strict";a.d(t,{xZ:()=>r,fg:()=>s});const r=e=>(t,a)=>Object.assign(Object.assign({},e),{[t]:e[t]?[...e[t],a]:[a]}),s=e=>(t,a)=>{if(void 0===e[t])return e;const r=e[t].filter((e=>e!==a));return 0===r.length?Object.keys(e).reduce(((a,r)=>r===t?a:Object.assign(Object.assign({},a),{[r]:e[r]})),{}):Object.assign(Object.assign({},e),{[t]:r})}},77656:(e,t,a)=>{"use strict";a.d(t,{j:()=>n});const r=(e,t)=>e.filter((e=>e!==t));var s=a(97522),l=a.n(s);class n extends l().Component{constructor(e){super(e),this.state={filters:this.props.initialFilters},this.handleChange=this.handleChange.bind(this),this.onRemove=this.onRemove.bind(this),this.onSelect=this.onSelect.bind(this),this.onClearAll=this.onClearAll.bind(this)}handleChange(e){this.setState({filters:Object.assign(Object.assign({},this.state.filters),e)})}onClearAll(){this.setState({filters:Object.assign(Object.assign({},this.state.filters),{metrics:[],measurements:[]})})}onRemove(e,t){this.setState({filters:Object.assign(Object.assign({},this.state.filters),{[e]:r(this.state.filters[e],t)})})}onSelect(e,t){var a,s;this.setState({filters:Object.assign(Object.assign({},this.state.filters),{[e]:(a=this.state.filters[e],s=t,a.includes(s)?r(a,s):[...a,s])})})}render(){return this.props.children({onClearAll:this.onClearAll,onRemove:this.onRemove,onSelect:this.onSelect,setSearch:this.handleChange,search:this.state.filters})}}},95507:(e,t,a)=>{"use strict";a.d(t,{j:()=>n});var r=a(97522),s=a.n(r),l=a(59805);class n extends s().Component{constructor(e){super(e),this.service=null,this.service=(0,l.kJ)(e.machine).onTransition((e=>this.setState({current:e}))),this.state={current:e.machine.initialState}}componentDidMount(){this.service.start()}componentWillUnmount(){this.service.stop()}render(){const{current:e}=this.state,{send:t}=this.service;return this.props.children({current:e,send:t})}}},18728:(e,t,a)=>{"use strict";a.d(t,{q:()=>r});const r=(0,a(29122).J)({context:{selection:[]},initial:"collapsed",states:{collapsed:{on:{TOGGLE:"expanded"}},expanded:{on:{TOGGLE:"collapsed",SELECT:{target:"collapsed",actions:["assignSelection"]}}}}})},80963:(e,t,a)=>{"use strict";a.d(t,{N:()=>i,Z:()=>o});var r=a(23212),s=a(97522),l=a.n(s),n=a(69222);const i=e=>l().createElement(n.W,null,(t=>{const a=((e,t)=>Object.assign(Object.assign({},t),{"aria-label":e(t["aria-label"])}))(t,e),{id:s,"aria-label":n,itemCount:i,perPage:o,page:c,variant:u,onPerPageSelect:g,onSetPage:d}=a;return l().createElement(r.Toolbar,{id:s},l().createElement(r.ToolbarContent,{"aria-label":n},l().createElement(r.ToolbarItem,{variant:"pagination"},l().createElement(r.Pagination,{variant:u,itemCount:i,perPage:o,page:c,onSetPage:d,onPerPageSelect:g}))))})),o=i},66555:(e,t,a)=>{"use strict";a.d(t,{Q:()=>i});var r=a(23212),s=a(97522),l=a.n(s);const n={toolbar:{gridGap:a(32412).ZP.value}},i=({primary:e,secondaries:t,pagination:a,button:s,onClear:i,selected:o})=>l().createElement(r.Toolbar,{style:n.toolbar,clearAllFilters:i,id:"price-list-toolbar"},l().createElement(r.ToolbarContent,null,l().createElement(r.ToolbarGroup,{variant:"filter-group"},l().createElement(r.ToolbarItem,null,e),t.map((e=>l().createElement(r.ToolbarItem,{key:e.name},l().createElement(r.ToolbarFilter,{deleteChip:e.onRemove,chips:e.filters,categoryName:e.name},o===e.name?e.component:""))))),l().createElement(r.ToolbarItem,null,s),l().createElement(r.ToolbarItem,{variant:r.ToolbarItemVariant.pagination},a)),l().createElement("hr",{className:"pf-c-divider"}))},76427:(e,t,a)=>{"use strict";a.d(t,{u:()=>r});const r={duplicate:"cost_models.add_rate_form.duplicate",required:"cost_models.required_field",not_number:"cost_models.add_rate_form.not_number",not_positive:"cost_models.add_rate_form.not_positive",description_too_long:"cost_models.description_too_long",tag_too_long:"cost_models.add_rate_form.tag_too_long"}},52591:(e,t,a)=>{"use strict";a.d(t,{HJ:()=>y,Cw:()=>f,Pz:()=>r.Pz,uD:()=>h,L3:()=>r.L3,Nl:()=>r.Nl,bF:()=>o});var r=a(96085),s=a(97522),l=a.n(s),n=a(76427);function i(e=r.Pv,t){switch(t.type){case"UPDATE_DESCRIPTION":return Object.assign(Object.assign({},e),{description:t.value,errors:Object.assign(Object.assign({},e.errors),{description:(0,r.zp)(t.value)})});case"UPDATE_METRIC":{const a=e.errors,s=e.measurement;s.isDirty&&(s.value="",a.measurement=n.u.required);let l=e.step;"initial"===l&&(l="set_metric");const i=Object.assign(Object.assign({},e),{metric:t.value,measurement:s,errors:a,step:l,calculation:t.defaultCalculation,rateKind:"Cluster"===t.value?"regular":e.rateKind}),o=(0,r.cQ)(i),c=i.otherTiers.find((e=>(0,r.lI)((0,r.Um)(e),o)));return Object.assign(Object.assign({},i),{errors:Object.assign(Object.assign({},i.errors),{tagKey:c?n.u.duplicate:null})})}case"UPDATE_MEASUREMENT":{if("initial"===e.step)return e;let a=e.step;"set_metric"===a&&(a="set_rate");const s=Object.assign(Object.assign({},e),{measurement:{value:t.value,isDirty:!0},errors:Object.assign(Object.assign({},e.errors),{measurement:null}),step:a}),l=(0,r.cQ)(s),i=s.otherTiers.find((e=>(0,r.lI)((0,r.Um)(e),l)));return Object.assign(Object.assign({},s),{errors:Object.assign(Object.assign({},s.errors),{tagKey:i?n.u.duplicate:null})})}case"UPDATE_CALCULATION":{if("set_rate"!==e.step)return e;const a=Object.assign(Object.assign({},e),{calculation:t.value}),s=(0,r.cQ)(a),l=a.otherTiers.find((e=>(0,r.lI)((0,r.Um)(e),s)));return Object.assign(Object.assign({},a),{errors:Object.assign(Object.assign({},a.errors),{tagKey:l?n.u.duplicate:null})})}case"TOGGLE_RATE_KIND":return"set_rate"!==e.step?e:Object.assign(Object.assign({},e),{rateKind:"regular"===e.rateKind?"tagging":"regular"});case"UPDATE_REGULAR":return Object.assign(Object.assign({},e),{tieredRates:[{value:t.value,isDirty:!0}],errors:Object.assign(Object.assign({},e.errors),{tieredRates:(0,r.MD)(t.value)})});case"UPDATE_TAG_KEY":{if("set_rate"!==e.step||"tagging"!==e.rateKind)return e;const a=Object.assign(Object.assign({},e),{taggingRates:Object.assign(Object.assign({},e.taggingRates),{tagKey:{value:t.value,isDirty:!0}}),errors:Object.assign(Object.assign({},e.errors),{tagKey:(0,r.eU)(t.value)})}),s=(0,r.cQ)(a),l=a.otherTiers.find((e=>(0,r.lI)((0,r.Um)(e),s)));return Object.assign(Object.assign({},a),{errors:Object.assign(Object.assign({},a.errors),{tagKey:l?n.u.duplicate:a.errors.tagKey})})}case"UPDATE_TAG_DEFAULT":return"set_rate"!==e.step&&"tagging"!==e.rateKind?e:Object.assign(Object.assign({},e),{taggingRates:Object.assign(Object.assign({},e.taggingRates),{defaultTag:e.taggingRates.defaultTag===t.index?null:t.index})});case"UPDATE_TAG":{if("set_rate"!==e.step||"tagging"!==e.rateKind)return e;let a=e.errors.tagValues[t.index],s=e.errors.tagValueValues[t.index],l=e.errors.tagDescription[t.index],n=e.taggingRates.tagValues[t.index].isDirty,i=e.taggingRates.tagValues[t.index].isTagValueDirty;if(void 0!==t.payload.value){const{value:e}=t.payload;a=(0,r.MD)(e),n=!0}return void 0!==t.payload.tagValue&&(s=(0,r.eU)(t.payload.tagValue),i=!0),void 0!==t.payload.description&&(l=(0,r.zp)(t.payload.description)),Object.assign(Object.assign({},e),{taggingRates:Object.assign(Object.assign({},e.taggingRates),{tagValues:[...e.taggingRates.tagValues.slice(0,t.index),Object.assign(Object.assign(Object.assign({},e.taggingRates.tagValues[t.index]),t.payload),{isDirty:n,isTagValueDirty:i}),...e.taggingRates.tagValues.slice(t.index+1)]}),errors:Object.assign(Object.assign({},e.errors),{tagDescription:[...e.errors.tagDescription.slice(0,t.index),l,...e.errors.tagDescription.slice(t.index+1)],tagValueValues:[...e.errors.tagValueValues.slice(0,t.index),s,...e.errors.tagValueValues.slice(t.index+1)],tagValues:[...e.errors.tagValues.slice(0,t.index),a,...e.errors.tagValues.slice(t.index+1)]})})}case"REMOVE_TAG":return"set_rate"!==e.step||"tagging"!==e.rateKind?e:Object.assign(Object.assign({},e),{errors:Object.assign(Object.assign({},e.errors),{tagValues:[...e.errors.tagValues.slice(0,t.index),...e.errors.tagValues.slice(t.index+1)],tagValueValues:[...e.errors.tagValueValues.slice(0,t.index),...e.errors.tagValueValues.slice(t.index+1)]}),taggingRates:Object.assign(Object.assign({},e.taggingRates),{defaultTag:e.taggingRates.defaultTag===t.index?null:e.taggingRates.defaultTag>t.index?e.taggingRates.defaultTag-1:e.taggingRates.defaultTag,tagValues:[...e.taggingRates.tagValues.slice(0,t.index),...e.taggingRates.tagValues.slice(t.index+1)]})});case"ADD_TAG":return"set_rate"!==e.step||"tagging"!==e.rateKind?e:Object.assign(Object.assign({},e),{errors:Object.assign(Object.assign({},e.errors),{tagValues:[...e.errors.tagValues,n.u.required],tagDescription:[...e.errors.tagDescription,null]}),taggingRates:Object.assign(Object.assign({},e.taggingRates),{tagValues:[...e.taggingRates.tagValues,Object.assign({},r.fP.tagValues[0])]})});case"RESET_FORM":return t.payload;default:return e}}function o(e,t,a=[]){const s=(0,r.Pz)(t,void 0,a),[n,o]=l().useReducer(i,s);return Object.assign(Object.assign({},n),{reset:e=>o({type:"RESET_FORM",payload:e}),setDescription:e=>o({type:"UPDATE_DESCRIPTION",value:e}),setMetric:t=>o({type:"UPDATE_METRIC",value:t,defaultCalculation:(0,r.Bk)(e,t)}),setMeasurement:e=>o({type:"UPDATE_MEASUREMENT",value:e}),setCalculation:e=>o({type:"UPDATE_CALCULATION",value:e}),setRegular:e=>o({type:"UPDATE_REGULAR",value:e}),toggleTaggingRate:()=>o({type:"TOGGLE_RATE_KIND"}),setTagKey:e=>o({type:"UPDATE_TAG_KEY",value:e}),removeTag:e=>o({type:"REMOVE_TAG",index:e}),addTag:()=>o({type:"ADD_TAG"}),updateTag:(e,t)=>o({type:"UPDATE_TAG",index:t,payload:e}),updateDefaultTag:e=>o({type:"UPDATE_TAG_DEFAULT",index:e})})}var c=a(23212),u=a(20777),g=a(85111),d=a(26793);const m=({fieldId:e,label:t="cost_models.rate",helperTextInvalid:a="cost_models.add_rate_form.error_message",style:r,validated:s,value:n,onChange:i,onBlur:o})=>{const{t:u}=(0,d.$)(),m=u(a),p=u(t);return l().createElement(c.FormGroup,{isRequired:!0,style:r,label:p,fieldId:e,helperTextInvalid:m,validated:s},l().createElement(c.InputGroup,null,l().createElement(c.InputGroupText,null,l().createElement(g.bk,null)),l().createElement(c.TextInput,{onBlur:o,isRequired:!0,type:"text","aria-label":`rate input ${e}`,id:e,placeholder:"0.00",value:n,onChange:i,validated:s})))},p=e=>{const{t}=(0,d.$)(),{"aria-label":a,label:r,id:s,value:n,onChange:i,options:o,helperTextInvalid:u,isDisabled:g=!1,isInvalid:m=!1,isRequired:p=!1,style:b}=((e,t)=>Object.assign(Object.assign({},t),{label:"string"==typeof t.label?e(t.label):t.label,helperTextInvalid:"string"==typeof t.helperTextInvalid?e(t.helperTextInvalid):t.helperTextInvalid,options:t.options.map((t=>Object.assign(Object.assign({},t),{label:e(t.label)})))}))(t,e);return l().createElement(c.FormGroup,{isRequired:p,style:b,label:r,fieldId:s,helperTextInvalid:u,validated:m?"error":"default"},l().createElement(c.FormSelect,{isRequired:p,isDisabled:g,value:n,onChange:i,"aria-label":a,id:s,validated:m?"error":"default"},o.map((e=>l().createElement(c.FormSelectOption,{key:`${e.value}`,value:e.value,label:e.label,isDisabled:e.isDisabled})))))},b=e=>{const{t}=(0,d.$)(),{onChange:a,value:r,id:s,label:n,style:i,helperTextInvalid:o,validated:u,onBlur:g,isRequired:m,placeholder:p}=((e,t)=>{let a=t.label;"string"==typeof t.label&&(a=e(t.label));let r=t.helperTextInvalid;return"string"==typeof t.helperTextInvalid&&(r=e(t.helperTextInvalid)),Object.assign(Object.assign({},t),{label:a,helperTextInvalid:r})})(t,e);return l().createElement(c.FormGroup,{isRequired:m,style:i,fieldId:s,label:n,helperTextInvalid:o,validated:u},l().createElement(c.TextInput,{validated:u,value:r,onChange:a,id:s,onBlur:g,isRequired:m,placeholder:p}))};var _=a(70710);const v=({tagValues:e,updateDefaultTag:t,defaultTag:a,updateTag:r,removeTag:s,errors:n})=>{const{t:i}=(0,d.$)(),o={width:"200px"},u={height:"100%",position:"relative",top:"50%"};return l().createElement(l().Fragment,null,e.map(((g,d)=>l().createElement(c.Split,{hasGutter:!0,key:d},l().createElement(c.SplitItem,{style:u},"="),l().createElement(c.SplitItem,null,l().createElement(b,{isRequired:!0,style:o,id:`tagValue_${d}`,label:"cost_models.tag_value",placeholder:i("cost_models.add_rate_form.enter_a_tag_value"),value:g.tagValue,onChange:e=>r({tagValue:e},d),validated:e[d].isTagValueDirty&&n.tagValueValues[d]?"error":"default",helperTextInvalid:n.tagValueValues[d]})),l().createElement(c.SplitItem,null,l().createElement(m,{style:o,fieldId:`rate_${d}`,validated:e[d].isDirty&&n.tagValues[d]?"error":"default",value:g.value,onChange:e=>r({value:e},d),helperTextInvalid:n.tagValues[d]})),l().createElement(c.SplitItem,null,l().createElement(b,{style:o,id:`desc_${d}`,label:"description",validated:n.tagDescription[d]?"error":"default",value:g.description,onChange:e=>r({description:e},d),helperTextInvalid:n.tagDescription[d]})),l().createElement(c.SplitItem,null,l().createElement(c.FormGroup,{fieldId:`isDefault_${d}`,label:i("cost_models.default")},l().createElement(c.Checkbox,{id:`isDefault_${d}`,isChecked:a===d,onChange:()=>t(d)}))),l().createElement(c.SplitItem,null,l().createElement(c.FormGroup,{fieldId:"__irrelevant",label:l().createElement("div",null," ")},l().createElement(c.Button,{"data-testid":`remove_tag_${d}`,variant:c.ButtonVariant.plain,isDisabled:1===e.length,onClick:()=>s(d)},l().createElement(_.$_,null))))))))},y=({metricsHash:e,rateFormData:t})=>{const{t:a}=(0,d.$)(),{step:r,description:s,metric:n,measurement:{value:i,isDirty:o},calculation:g,rateKind:_,taggingRates:{tagKey:{value:y,isDirty:f},defaultTag:h,tagValues:E},tieredRates:{0:{value:T,isDirty:O}},setDescription:j,setMetric:R,setMeasurement:D,setCalculation:V,setRegular:x,toggleTaggingRate:S,setTagKey:I,updateTag:C,updateDefaultTag:k,removeTag:A,addTag:P,errors:K}=t,G=l().useMemo((()=>Object.keys(e)),[e]),U=l().useMemo((()=>G.includes(n)?Object.keys(e[n]):[]),[G,n]),q={width:"360px"};return l().createElement(l().Fragment,null,l().createElement(b,{style:q,id:"description",label:"description",value:s,validated:K.description?"error":"default",helperTextInvalid:K.description,onChange:j}),l().createElement(c.Grid,{hasGutter:!0},l().createElement(c.GridItem,{span:6},l().createElement(p,{isRequired:!0,style:q,id:"metric",label:"cost_models.add_rate_form.metric_select",value:n,onChange:R,options:[{label:"cost_models.add_rate_form.default_option",value:"",isDisabled:!0},...G.map((e=>({label:e,value:e,isDisabled:!1})))]})),"initial"===r?null:l().createElement(c.GridItem,{span:6},l().createElement(p,{isRequired:!0,helperTextInvalid:K.measurement,isInvalid:K.measurement&&o,style:q,id:"measurement",label:"cost_models.add_rate_form.measurement_select",value:i,onChange:D,options:[{label:"cost_models.add_rate_form.default_option",value:"",isDisabled:!0},...U.map((t=>({label:`${t} (${e[n][t].label_measurement_unit})`,value:t,isDisabled:!1})))]}))),"set_rate"===r?l().createElement(l().Fragment,null,l().createElement(l().Fragment,null,l().createElement(c.FormGroup,{isInline:!0,style:q,fieldId:"calculation",label:a("cost_models.calculation_type")},l().createElement(c.Radio,{name:"calculation",id:"calculation_infra",label:a("cost_models.add_rate_form.infrastructure"),isChecked:"Infrastructure"===g,onChange:()=>V("Infrastructure")}),l().createElement(c.Radio,{name:"calculation",id:"calculation_suppl",label:a("cost_models.add_rate_form.supplementary"),isChecked:"Supplementary"===g,onChange:()=>V("Supplementary")})),"Cluster"!==n?l().createElement(c.Switch,{"aria-label":"Enter rate by tag",label:a("cost_models.add_rate_form.rate_switch"),isChecked:"tagging"===_,onChange:S}):null),"regular"===_?l().createElement(m,{style:q,helperTextInvalid:K.tieredRates,validated:K.tieredRates&&O?"error":"default",value:T,onChange:x,fieldId:"regular-rate"}):l().createElement(l().Fragment,null,l().createElement(b,{isRequired:!0,style:q,value:y,onChange:I,id:"tag-key",label:a("cost_models.add_rate_form.tag_key"),placeholder:a("cost_models.add_rate_form.enter_a_tag_key"),validated:K.tagKey&&f?"error":"default",helperTextInvalid:K.tagKey}),l().createElement(v,{errors:{tagValues:K.tagValues,tagValueValues:K.tagValueValues,tagDescription:K.tagDescription},updateDefaultTag:k,defaultTag:h,tagValues:E,updateTag:C,removeTag:A}),l().createElement(c.Button,{"data-testid":"add_more",style:{paddingLeft:"0",textAlign:"left"},variant:c.ButtonVariant.link,onClick:P},l().createElement(u.wl,null)," ",a("cost_models.add_rate_form.add_more_tag_values")))):null)};function f(e){return"tagging"===e.rateKind?null===e.errors.description&&null===e.errors.measurement&&e.errors.tagValues.every((e=>null===e))&&e.errors.tagValueValues.every((e=>null===e))&&e.errors.tagDescription.every((e=>null===e))&&null===e.errors.tagKey:null===e.errors.description&&null===e.errors.measurement&&null===e.errors.tieredRates}function h(e,t){if(!e)return!0;if(e.description!==t.description)return!0;if(e.metric.label_metric!==t.metric)return!0;if(e.metric.label_measurement!==t.measurement.value)return!0;if(e.cost_type!==t.calculation)return!0;const a=e.tiered_rates?"regular":"tagging";if(a!==t.rateKind)return!0;if("regular"===a&&e.tiered_rates[0].value!==Number(t.tieredRates[0].value))return!0;if("tagging"===a){const a=e.tag_rates;if(a.tag_key!==t.taggingRates.tagKey.value)return!0;if(a.tag_values.length!==t.taggingRates.tagValues.length)return!0;if(a.tag_values.some(((e,a)=>{const r=t.taggingRates.tagValues[a],s=t.taggingRates.defaultTag===a;return e.tag_value!==r.tagValue||e.value!==Number(r.value)||e.description!==r.description||e.default!==s})))return!0}return!1}},96085:(e,t,a)=>{"use strict";a.d(t,{fP:()=>l,Pv:()=>n,MD:()=>i,Bk:()=>o,Pz:()=>c,L3:()=>u,Nl:()=>g,Um:()=>d,cQ:()=>m,lI:()=>p,tT:()=>b,zp:()=>_,eU:()=>v});var r=a(22160),s=a(76427);const l={tagKey:{value:"",isDirty:!1},defaultTag:null,tagValues:[{tagValue:"",value:"",description:"",isDirty:!1,isTagValueDirty:!1}]},n={otherTiers:[],step:"initial",description:"",metric:"",measurement:{value:"",isDirty:!1},calculation:"",rateKind:"regular",tieredRates:[{value:"",isDirty:!1}],taggingRates:Object.assign({},l),errors:{description:null,measurement:s.u.required,tieredRates:s.u.required,tagValues:[s.u.required],tagDescription:[null],tagKey:s.u.required,tagValueValues:[s.u.required]}},i=e=>0===e.length?s.u.required:isNaN(Number(e))?s.u.not_number:Number(e)<0?s.u.not_positive:null;function o(e,t){let a=Object.keys(e);return a.includes(t)?(a=Object.keys(e[t]),0===a.length?"":e[t][a[0]].default_cost_type):""}function c(e,t=n,a){const r=a||t.otherTiers;if(!e)return Object.assign(Object.assign({},t),{otherTiers:r});const i=e.tiered_rates?"regular":"tagging";let o=[{value:"",isDirty:!0}];const c=Object.assign({},l),u={description:null,measurement:null,tieredRates:null,tagValues:[null],tagKey:null,tagValueValues:[null],tagDescription:[null]};if("tagging"===i){const t=e.tag_rates;c.tagKey={value:t.tag_key,isDirty:!0};const a=t.tag_values.findIndex((e=>e.default));c.defaultTag=-1===a?null:a,c.tagValues=t.tag_values.map((e=>({tagValue:e.tag_value,value:e.value.toString(),description:e.description,isDirty:!1,isTagValueDirty:!1}))),u.tieredRates=s.u.required,u.tagValueValues=new Array(t.tag_values.length).fill(null),u.tagValues=new Array(t.tag_values.length).fill(null),u.tagDescription=new Array(t.tag_values.length).fill(null)}return"regular"===i&&(o=e.tiered_rates.map((e=>({value:e.value.toString(),isDirty:!0}))),u.tagValues=[s.u.required],u.tagValueValues=[s.u.required]),{otherTiers:r,step:"set_rate",description:e.description,metric:e.metric.label_metric,measurement:{value:e.metric.label_measurement,isDirty:!0},calculation:e.cost_type,rateKind:i,tieredRates:o,taggingRates:c,errors:u}}const u=(e,t,a,r=-1)=>{r<0&&(r=t.rates.length);const s=g(a,e);return{name:t.name,source_type:"OCP",description:t.description,distribution:t.distribution,source_uuids:t.sources.map((e=>e.uuid)),markup:{value:t.markup.value,unit:"percent"},rates:[...t.rates.slice(0,r),s,...t.rates.slice(r+1)]}},g=(e,t)=>{const a="tagging"===e.rateKind?"tag_rates":"tiered_rates",r="tagging"===e.rateKind?{tag_key:e.taggingRates.tagKey.value,tag_values:e.taggingRates.tagValues.map(((t,a)=>({tag_value:t.tagValue,unit:"USD",value:Number(t.value),description:t.description,default:a===e.taggingRates.defaultTag})))}:e.tieredRates.map((e=>({value:Number(e.value),unit:"USD",usage:{unit:"USD"}}))),s=t[e.metric][e.measurement.value];return{description:e.description,metric:{metric:s.metric,name:s.metric,label_metric:s.label_metric,label_measurement:s.label_measurement,label_measurement_unit:s.label_measurement_unit,source_type:"OpenShift Cluster Platform",default_cost_type:s.default_cost_type},cost_type:e.calculation,[a]:r}},d=e=>{const t=e.tag_rates&&e.tag_rates.tag_key?e.tag_rates.tag_key:null;return{metric:e.metric.label_metric,measurement:e.metric.label_measurement,tagKey:t,costType:e.cost_type}},m=e=>{const t=e.taggingRates&&e.taggingRates.tagKey?e.taggingRates.tagKey.value:null;return{metric:e.metric,measurement:e.measurement?e.measurement.value:null,tagKey:t,costType:e.calculation}},p=(e,t)=>e.metric===t.metric&&e.measurement===t.measurement&&e.costType===t.costType&&e.tagKey===t.tagKey;function b(e,t,a,s){const l=s(e),n=s(t);return a===r.SortByDirection.asc?l>n?1:l<n?-1:0:l>n?-1:l<n?1:0}const _=e=>e.length>500?s.u.description_too_long:null,v=e=>0===e.length?s.u.required:e.length>100?s.u.tag_too_long:null},39574:(e,t,a)=>{"use strict";a.d(t,{y:()=>d});var r=a(22160),s=a(97522),l=a.n(s),n=a(901),i=a(96085),o=a(84273),c=a(26793);const u=["cost_models.table.tag_key","cost_models.tag_value","cost_models.rate","description","cost_models.default"],g=({tagRates:e})=>{const{t}=(0,c.$)(),a=((e,t)=>t.map((t=>{const a=t.cells.map((t=>"string"==typeof t?e(t):t));return Object.assign(Object.assign({},t),{cells:a})})))(t,e.tag_values.map(((t,a)=>({cells:[0===a?e.tag_key:"",t.tag_value,(0,n.xG)(t.value),t.description,t.default?"cost_models.yes":"cost_models.no"]}))));return l().createElement(o.T,{"aria-label":`tag-table-rate-${e.tag_key}`,borders:!1,variant:r.TableVariant.compact,cells:u,rows:a})},d=({t:e,tiers:t,actions:a,isCompact:s})=>{const[o,c]=l().useState({}),[u,d]=l().useState({}),m=[{title:e("description")},{title:e("cost_models.table.metric"),transforms:[r.sortable]},{title:e("cost_models.table.measurement"),transforms:[r.sortable]},{title:e("cost_models.calculation_type")},{title:e("cost_models.rate"),cellTransforms:[r.compoundExpand]}];let p=0;const b=t.sort(((e,t)=>{const a=1===u.index?e=>e.metric.label_metric:2===u.index?e=>e.metric.label_measurement:()=>"";return(0,i.tT)(e,t,u.direction,a)})).reduce(((t,a,r)=>{const s=a.tiered_rates?"regular":"tagging";let i=[];"tagging"===s&&(i=[{compoundParent:4,parent:r+p,cells:[{title:l().createElement(g,{tagRates:a.tag_rates}),props:{colSpan:6,className:"pf-m-no-padding"}}]}],p+=1);const c="tagging"===s?o[r+p-1]||!1:void 0;return[...t,{data:{index:r,hasChildren:"tagging"===s},cells:[a.description||"",a.metric.label_metric,`${a.metric.label_measurement} (${a.metric.label_measurement_unit})`,a.cost_type,{title:"regular"===s?`${(0,n.xG)(Number(a.tiered_rates[0].value),"USD")}`:e("cost_models.table.tagged_rates"),props:{isOpen:c,style:{padding:"tagging"===s?"":"1.5rem 1rem"}}}]},...i]}),[]);return l().createElement(r.Table,{onSort:(e,t,a)=>{d({index:t,direction:a})},sortBy:u,"aria-label":"price list",variant:s?r.TableVariant.compact:void 0,rows:b,cells:m,actionResolver:e=>e.compoundParent?[]:a,onExpand:(e,t,a,r)=>{c(Object.assign(Object.assign({},o),{[t]:!r}))}},l().createElement(r.TableHeader,null),l().createElement(r.TableBody,null))}},20546:(e,t,a)=>{"use strict";a.d(t,{j:()=>n});var r=a(23212),s=a(97522),l=a.n(s);const n=({children:e,tooltip:t="You have read only permissions",isDisabled:a})=>a?l().createElement(r.Tooltip,{isContentLeftAligned:!0,content:l().createElement("div",null,t)},l().createElement("div",null,e)):e},84273:(e,t,a)=>{"use strict";a.d(t,{T:()=>i});var r=a(22160),s=a(97522),l=a.n(s),n=a(26793);const i=e=>{const{t}=(0,n.$)();return l().createElement(r.Table,Object.assign({gridBreakPoint:r.TableGridBreakpoint.grid2xl},((e,t)=>{const a=t.cells.map((t=>"string"==typeof t?e(t):"string"==typeof t.title?Object.assign(Object.assign({},t),{title:e(t.title)}):t)),r=t.actions?t.actions.map((t=>{let a=Object.assign({},t);return"string"==typeof t.title&&(a=Object.assign(Object.assign({},a),{title:e(t.title)})),t.tooltip&&"string"==typeof t.tooltip&&(a=Object.assign(Object.assign({},a),{tooltip:e(t.tooltip)})),a})):null;return Object.assign(Object.assign({},t),{cells:a,actions:r})})(t,e)),l().createElement(r.TableHeader,null),l().createElement(r.TableBody,null))}},85218:(e,t,a)=>{"use strict";a.d(t,{n:()=>o});var r=a(23212),s=a(95507),l=a(18728),n=a(97522),i=a.n(n);const o=({options:e,placeholderText:t,setSelections:a,selections:n,isDisabled:o})=>i().createElement(s.j,{machine:l.q.withConfig({actions:{assignSelection:(e,t)=>{a(t.selection)}}})},(({send:a,current:s})=>i().createElement(r.Select,{isDisabled:o,variant:r.SelectVariant.checkbox,placeholderText:t,selections:n,isOpen:s.matches("expanded"),onSelect:(e,t)=>a({type:"SELECT",selection:t}),onToggle:()=>a({type:"TOGGLE"})},e.map((e=>i().createElement(r.SelectOption,{key:e.value,value:e.value},e.label))))))},60477:(e,t,a)=>{"use strict";a.d(t,{J:()=>c});var r=a(23212),s=a(8755),l=a(95507),n=a(18728),i=a(97522),o=a.n(i);const c=({setPrimary:e,primary:t,options:a,isDisabled:i})=>o().createElement(l.j,{machine:n.q.withConfig({actions:{assignSelection:(t,a)=>{e(a.selection)}}})},(({current:e,send:l})=>o().createElement(r.Select,{isDisabled:i,toggleIcon:o().createElement(s.k1,null),isOpen:e.matches("expanded"),selections:t,onSelect:(e,t)=>l({type:"SELECT",selection:t}),onToggle:()=>l({type:"TOGGLE"})},a.map((e=>o().createElement(r.SelectOption,{key:e.value,value:e.value},e.label))))))},39887:(e,t,a)=>{"use strict";a.d(t,{a:()=>i});var r=a(23212),s=a(50506),l=a(97522),n=a.n(l);const i=({text:e})=>n().createElement(r.Tooltip,{content:e,enableFlip:!0},n().createElement(s.T6,{color:"orange"}))},4705:(e,t,a)=>{"use strict";a.d(t,{W:()=>l});var r=a(17918),s=a(80939);const l={card:{minHeight:250},cardDescription:{fontSize:r.ZP.value},cardBody:{fontSize:s.ZP.value,textAlign:"center"},exampleMargin:{marginLeft:30},inputField:{borderLeft:0,width:150},markupRadio:{marginBottom:6},markupRadioContainer:{marginTop:6},rateContainer:{marginLeft:20},percent:{borderLeft:0},sign:{borderRight:0}}}}]);
//# sourceMappingURL=ed9afd02c539366944a7.bundle.js.map