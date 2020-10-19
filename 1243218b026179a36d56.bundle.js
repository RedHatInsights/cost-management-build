(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1032:function(e,t,a){"use strict";var n=a(1),r=a.n(n),s=a(7),o=a.n(s),l=a(94),i=a.n(l),c=a(374),m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},h=function(e){function t(){var a,n;d(this,t);for(var r=arguments.length,s=Array(r),o=0;o<r;o++)s[o]=arguments[o];return a=n=u(this,e.call.apply(e,[this].concat(s))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!p(e)){e.preventDefault();var t=n.context.router.history,a=n.props,r=a.replace,s=a.to;r?t.replace(s):t.push(s)}},u(n,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,n=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["replace","to","innerRef"]);i()(this.context.router,"You should not use <Link> outside a <Router>"),i()(void 0!==t,'You must specify the "to" property');var s=this.context.router.history,o="string"==typeof t?Object(c.b)(t,null,null,s.location):t,l=s.createHref(o);return r.a.createElement("a",m({},n,{onClick:this.handleClick,href:l,ref:a}))},t}(r.a.Component);h.propTypes={onClick:o.a.func,target:o.a.string,replace:o.a.bool,to:o.a.oneOfType([o.a.string,o.a.object]).isRequired,innerRef:o.a.oneOfType([o.a.string,o.a.func])},h.defaultProps={replace:!1},h.contextTypes={router:o.a.shape({history:o.a.shape({push:o.a.func.isRequired,replace:o.a.func.isRequired,createHref:o.a.func.isRequired}).isRequired}).isRequired},t.a=h},1187:function(e,t,a){var n;!function(){var a={months:["January","February","March","April","May","June","July","August","September","October","November","December"],toUTC:function(e){var t=e?new Date(e):new Date;return t=new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds())},monthName:function(e){var t;return t="number"==typeof e?e:new Date(e).getMonth()+1,a.months[t-1]},relativeTime:function(e,t){var a,n,r,s,o,l,i=[];if("number"==typeof e?a=e:(s=new Date(e).getTime(),a=((new Date).getTime()-s)/1e3*-1),t||(t={}),t.futureSuffix||(t.futureSuffix="from now"),t.pastSuffix||(t.pastSuffix="ago"),t.presentText||(t.presentText="now"),t.returnObject||(t.returnObject=!1),o=a<0,a=Math.abs(a),n={seconds:Math.floor(a%31536e3%86400%3600%60),minutes:Math.floor(a%31536e3%86400%3600/60),hours:Math.floor(a%31536e3%86400/3600),days:Math.floor(a%31536e3/86400),years:Math.floor(a/31536e3),past:o},t.returnObject)return n;if(0===a)return t.presentText;function c(e,a){l&&(l=t.allUnits,i.push(e+" "+a+(e>1?"s":"")))}return r=n.past?t.pastSuffix:t.futureSuffix,l=!0,n.years&&c(n.years,"year"),n.days&&c(n.days,"day"),n.hours&&c(n.hours,"hour"),n.minutes&&c(n.minutes,"minute"),n.seconds&&c(n.seconds,"second"),i.join(", ")+" "+r},prettyPrint:function(e,t){var a,n,r,s,o,l,i,c,m;return e?"number"==typeof e&&(e=(new Date).setSeconds(e)):e=new Date,t||(t={}),t.showTime||(t.showTime=!1),s=(r=(a=new Date(e)).getDate())>3&&r<21?r+"th":r%10==1?r+"st":r%10==2?r+"nd":r%10==3?r+"rd":r+"th",o=a.getFullYear(),n=this.monthName(a.getMonth()+1)+" "+s+", "+o,m=(i=a.getHours())>=12?"pm":"am",l=(i=i%12?i%12:12)+":"+(c=(c=a.getMinutes())<10?"0"+c:c)+" "+m,t.showTime?n+" at "+l:n}};if(!e.exports)return!(void 0!==(n=function(){return a}.apply(t,[]))&&(e.exports=n));e.exports=a}()},1205:function(e,t,a){"use strict";a.r(t);var n=a(115),r=a(141),s=a(175),o=a(323),l=a(325),i=a(324),c=a(781),m=a(893),d=a(773),u=a(466),p=a(347),h=a(138),g=a(415),_=a(719),b=a(241),E=a(1),y=a.n(E),f=a(744),C=a(759),v=a(275);const P=y.a.createContext({metricsHash:{},step:1,type:"",name:"",markup:"",description:"",error:null,apiError:null,sources:[],onTypeChange:e=>null,onNameChange:e=>null,onDescChange:e=>null,onMarkupChange:e=>null,onSourceSelect:(...e)=>null,setSources:e=>null,dataFetched:!1,loading:!1,filterName:"",onFilterChange:e=>null,query:{},clearQuery:()=>null,total:0,page:1,perPage:10,onPageChange:(e,t)=>null,onPerPageChange:(e,t)=>null,tiers:[],goToAddPL:e=>null,submitTiers:e=>null,priceListPagination:{page:1,perPage:4,onPerPageSet:(e,t)=>null,onPageSet:(e,t)=>null},fetchSources:(e,t,a,n)=>null,createError:null,createSuccess:!1,onClose:()=>null,createProcess:!1});var S=a(230),O=a(434),w=a(435),j=a(410),z=a(349),k=a(351),x=a(350),M=a(411),F=a(933);const D={form:{width:"350px"},textArea:{maxWidth:"450px",minWidth:"350px",minHeight:"75px",maxHeight:"150px"}};var T=Object(f.a)()(({t:e})=>y.a.createElement(P.Consumer,null,({name:t,description:a,type:n,onNameChange:r,onDescChange:s,onTypeChange:o})=>y.a.createElement(O.a,{hasGutter:!0},y.a.createElement(w.a,null,y.a.createElement(p.a,{headingLevel:"h2",size:"xl"},e("cost_models_wizard.general_info.title"))),y.a.createElement(w.a,null,y.a.createElement("a",{href:"https://access.redhat.com/documentation/en-us/openshift_container_platform/4.5/html/using_cost_models/configuring-cost-models",target:"blank"},e("cost_models_wizard.general_info.learn_more"))),y.a.createElement(w.a,null,y.a.createElement(F.a,{style:D.form},y.a.createElement(j.a,{label:e("cost_models_wizard.general_info.name_label"),isRequired:!0,fieldId:"name"},y.a.createElement(z.a,{isRequired:!0,type:"text",id:"name",name:"name",value:t,onChange:r})),y.a.createElement(j.a,{label:e("cost_models_wizard.general_info.description_label"),fieldId:"description"},y.a.createElement(k.b,{style:D.textArea,type:"text",id:"description",name:"description",value:a,onChange:s})),y.a.createElement(j.a,{label:e("cost_models_wizard.general_info.source_type_label"),isRequired:!0,fieldId:"source-type"},y.a.createElement(x.a,{id:"source-type",value:n,onChange:o},y.a.createElement(M.a,{value:"",label:e("cost_models_wizard.general_info.source_type_empty_value_label")}),y.a.createElement(M.a,{value:"AWS",label:e("onboarding.type_options.aws")}),y.a.createElement(M.a,{value:"AZURE",label:e("onboarding.type_options.azure")}),y.a.createElement(M.a,{value:"OCP",label:e("onboarding.type_options.ocp")})))))))),R=a(424),q=a(418),N=a(396),A=a(412);class L extends y.a.Component{constructor(){super(...arguments),this.state={isValid:!0}}render(){const{t:e}=this.props,{isValid:t}=this.state;return y.a.createElement(P.Consumer,null,({onMarkupChange:a,markup:n})=>y.a.createElement(O.a,{hasGutter:!0},y.a.createElement(w.a,null,y.a.createElement(p.a,{headingLevel:"h2",size:"xl"},e("cost_models_wizard.markup.title"))),y.a.createElement(w.a,null,y.a.createElement(R.a,null,y.a.createElement(q.a,{component:q.b.h6},e("cost_models_wizard.markup.sub_title")))),y.a.createElement(w.a,null,y.a.createElement(F.a,null,y.a.createElement(j.a,{label:e("cost_models_wizard.markup.markup_label"),fieldId:"markup",helperTextInvalid:e("cost_models_wizard.markup.invalid_markup_text"),validated:t?"default":"error"},y.a.createElement(N.a,{style:{width:"150px"}},y.a.createElement(z.a,{type:"text",id:"markup",name:"markup",value:n,onBlur:()=>{this.setState({isValid:!isNaN(Number(n))})},onChange:e=>{a(e),"-"!==e&&this.setState({isValid:!isNaN(Number(e))})},validated:t?"default":"error"}),y.a.createElement(A.a,{style:{borderLeft:"0"}},"%")))))))}}var W=Object(f.a)()(L),I=a(409),H=a(408),U=a(902),V=a(456);var $=({submitRate:e,cancel:t,metricsHash:a})=>{const{t:n}=Object(V.a)(),r=Object(U.g)(a),s=y.a.useMemo(()=>Object(U.b)(r),[r.errors,r.rateKind]);return y.a.createElement(O.a,{hasGutter:!0},y.a.createElement(w.a,null,y.a.createElement(p.a,{headingLevel:"h2",size:"xl"},n("cost_models_wizard.price_list.title"))),y.a.createElement(w.a,null,y.a.createElement(R.a,null,y.a.createElement(q.a,{component:q.b.h6},n("cost_models_wizard.price_list.sub_title_add")))),y.a.createElement(w.a,null,y.a.createElement(I.a,null,y.a.createElement(U.a,{metricsHash:a,rateFormData:r}))),y.a.createElement(w.a,null,y.a.createElement(H.a,null,y.a.createElement(h.a,{variant:h.c.primary,isDisabled:!s,onClick:()=>e(r)},n("cost_models_wizard.price_list.create_rate")),y.a.createElement(h.a,{variant:h.c.link,onClick:t},n("cost_models_wizard.price_list.cancel")))))},K=a(429),B=a(404),G=a(406),J=a(405),Z=a(461),Y=a(718),Q=a(1013),X=a(894),ee=a(1014),te=a(939),ae=a(1004),ne=a(1010),re=a(1203);const se=({t:e})=>y.a.createElement(K.a,null,y.a.createElement(B.a,null,y.a.createElement(G.a,{icon:Y.PlusCircleIcon}),y.a.createElement(p.a,{headingLevel:"h2",size:"lg"},e("cost_models_wizard.empty_state.title")),y.a.createElement(J.a,null,y.a.createElement(re.a,{i18nKey:"cost_models_wizard.empty_state.desc_create"},y.a.createElement("strong",null,e("cost_models_wizard.empty_state.add_rate"))),y.a.createElement("br",null),y.a.createElement(re.a,{i18nKey:"cost_models_wizard.empty_state.desc_skip"},y.a.createElement("strong",null,e("cost_models_wizard.empty_state.next"))),y.a.createElement("br",null),y.a.createElement(re.a,{i18nKey:"cost_models_wizard.empty_state.desc_other_time"}))));class oe extends y.a.Component{constructor(){super(...arguments),this.state={metrics:[],measurements:[]}}render(){const{metricsHash:e,t:t,addRateAction:a,deleteRateAction:n,items:r}=this.props,s=Object.keys(e).map(e=>({label:t("cost_models."+e),value:e})),o=s.reduce((a,n)=>{const r=Object.keys(e[n.value]).filter(e=>!a.map(e=>e.value).includes(e)).map(e=>({label:t("toolbar.pricelist.options."+e),value:e}));return[...a,...r]},[]);return y.a.createElement(P.Consumer,null,({priceListPagination:e})=>y.a.createElement(O.a,{hasGutter:!0},y.a.createElement(w.a,null,y.a.createElement(p.a,{headingLevel:"h2",size:"xl"},t("cost_models_wizard.price_list.title"))),y.a.createElement(w.a,null,y.a.createElement(R.a,null,y.a.createElement(q.a,{component:q.b.h6},t("cost_models_wizard.price_list.sub_title_table")))),y.a.createElement(w.a,null,y.a.createElement(Q.a,{initialFilters:{primary:"metrics",metrics:[],measurements:[]}},({search:l,setSearch:i,onRemove:m,onSelect:d,onClearAll:u})=>{const p=(e.page-1)*e.perPage,g=e.page*e.perPage,_=r.filter(e=>0===l.metrics.length||l.metrics.includes(e.metric)).filter(e=>0===l.measurements.length||l.measurements.includes(e.measurement)),b=_.slice(p,g);return y.a.createElement(y.a.Fragment,null,y.a.createElement(ee.a,{primary:y.a.createElement(ne.a,{isDisabled:0===r.length,primary:l.primary,setPrimary:e=>i({primary:e}),options:[{label:t("toolbar.pricelist.metric"),value:"metrics"},{label:t("toolbar.pricelist.measurement"),value:"measurements"}]}),selected:l.primary,secondaries:[{component:y.a.createElement(ae.a,{isDisabled:0===r.length,placeholderText:t("toolbar.pricelist.measurement_placeholder"),selections:l.measurements,setSelections:e=>d("measurements",e),options:o}),name:"measurements",onRemove:m,filters:l.measurements},{component:y.a.createElement(ae.a,{isDisabled:0===r.length,placeholderText:t("toolbar.pricelist.metric_placeholder"),selections:l.metrics,setSelections:e=>d("metrics",e),options:s}),name:"metrics",onRemove:m,filters:l.metrics}],button:y.a.createElement(h.a,{onClick:a},t("cost_models_wizard.price_list.create_rate")),onClear:u,pagination:y.a.createElement(Z.a,{isCompact:!0,itemCount:_.length,perPage:e.perPage,page:e.page,onSetPage:e.onPageSet,onPerPageSelect:e.onPerPageSet})}),0===b.length&&(0!==this.state.metrics.length||0!==this.state.measurements.length)&&y.a.createElement(K.a,null,y.a.createElement(c.a,{filter:t("cost_models_wizard.price_list.toolbar_top_results_aria_label")})),0===b.length&&0===this.state.metrics.length&&0===this.state.measurements.length&&y.a.createElement(se,{t:t}),b.length>0&&y.a.createElement(te.a,{isCompact:!0,t:t,tiers:b,actions:[{title:"Remove",onClick:(e,t,a)=>{n(a.data.index+p)}}]}),y.a.createElement(X.b,{isCompact:!0,itemCount:_.length,perPage:e.perPage,page:e.page,onSetPage:e.onPageSet,onPerPageSelect:e.onPerPageSet}))}))))}}var le=Object(r.connect)(Object(s.a)(e=>({metricsHash:l.c.metrics(e)})))(Object(f.a)()(oe));var ie=()=>{const{metricsHash:e,tiers:t,submitTiers:a,goToAddPL:n}=y.a.useContext(P),[r,s]=y.a.useState("table");return"table"===r?y.a.createElement(le,{items:t,deleteRateAction:e=>{const r=[...t.slice(0,e),...t.slice(e+1)];a(r),0===r.length&&(s("form"),n(!1))},addRateAction:()=>{s("form"),n(!1)}}):"form"===r?y.a.createElement($,{metricsHash:e,submitRate:r=>{(e=>{a([...t,e]),s("table"),n(!0)})(Object(U.f)(r,e))},cancel:()=>{s("table"),n(!0)}}):null},ce=a(407),me=a(462),de=a(425),ue=a(426),pe=a(725),he=a(936);const ge=Object(f.a)()(({t:e})=>y.a.createElement(P.Consumer,null,({onClose:t,name:a})=>y.a.createElement(B.a,null,y.a.createElement(G.a,{icon:pe.OkIcon,color:"green"}),y.a.createElement(p.a,{headingLevel:"h2",size:"lg"},e("cost_models_wizard.review.title_success")),y.a.createElement(J.a,null,e("cost_models_wizard.review.sub_title_success",{cost_model:a})),y.a.createElement(ce.a,null,y.a.createElement(h.a,{variant:"link",onClick:t},e("cost_models_wizard.review.close_button")))))),_e=Object(f.a)()(({t:e})=>y.a.createElement(P.Consumer,null,({name:t,description:a,type:n,markup:r,sources:s,tiers:o,createError:l})=>y.a.createElement(y.a.Fragment,null,l&&y.a.createElement(me.a,{variant:"danger",title:""+l}),y.a.createElement(O.a,{hasGutter:!0},y.a.createElement(w.a,null,y.a.createElement(p.a,{headingLevel:"h2",size:"xl"},e("cost_models_wizard.review.title_details"))),y.a.createElement(w.a,null,y.a.createElement(R.a,null,y.a.createElement(q.a,{component:q.b.h6},y.a.createElement(re.a,{i18nKey:"cost_models_wizard.review.sub_title_details"},y.a.createElement("b",null,e("cost_models_wizard.review.create_button")),y.a.createElement("b",null,e("cost_models_wizard.review.back_button")))))),y.a.createElement(w.a,null,y.a.createElement(R.a,null,y.a.createElement(de.a,{component:de.b.dl},y.a.createElement(ue.a,{component:ue.b.dt},e("cost_models_wizard.general_info.name_label")),y.a.createElement(ue.a,{component:ue.b.dd},t),y.a.createElement(ue.a,{component:ue.b.dt},e("cost_models_wizard.general_info.description_label")),y.a.createElement(ue.a,{component:ue.b.dd},a),"OCP"===n&&y.a.createElement(y.a.Fragment,null,y.a.createElement(ue.a,{component:ue.b.dt},e("cost_models_wizard.steps.price_list")),y.a.createElement(ue.a,{component:ue.b.dd},o.length>0?y.a.createElement(te.a,{t:e,tiers:o}):e("cost_models_wizard.no_rates"))),y.a.createElement(ue.a,{component:ue.b.dt},e("cost_models_wizard.review.markup")),y.a.createElement(ue.a,{component:ue.b.dd},r,"%"),y.a.createElement(ue.a,{component:ue.b.dt},e("cost_models_wizard.review.sources")," ",s.find(e=>e.selected&&Boolean(e.costmodel))&&y.a.createElement(he.a,{text:e("cost_models_wizard.warning_override_sources")})),y.a.createElement(ue.a,{component:ue.b.dd},s.filter(e=>e.selected).map(e=>e.name).join(", ")))))))));var be=()=>y.a.createElement(P.Consumer,null,({createSuccess:e})=>e?y.a.createElement(ge,null):y.a.createElement(_e,null)),Ee=a(395),ye=a(108),fe=a(754),Ce=a(756),ve=a(898),Pe=a(464),Se=a(465),Oe=a(107),we=a(427),je=a(692);const ze=({id:e,placeholder:t="",value:a,onChange:n,onSearch:r})=>y.a.createElement(N.a,null,y.a.createElement(z.a,{value:a,placeholder:t,id:e,onChange:n,onKeyPress:e=>{"Enter"===e.key&&""!==a&&r(e)}}),y.a.createElement(A.a,{style:{borderLeft:"0"}},y.a.createElement(je.SearchIcon,null))),ke=Object(f.a)()(({t:e,searchInputProps:t,paginationProps:a,filter:n})=>y.a.createElement(Pe.a,{id:"assign-sources-toolbar",clearAllFilters:n.onClearAll},y.a.createElement(Se.a,null,y.a.createElement(Oe.a,{variant:"search-filter"},y.a.createElement(we.a,{deleteChip:n.onRemove,chips:n.query.name,categoryName:"name"},y.a.createElement(ze,Object.assign({placeholder:e("cost_models_wizard.source_table.filter_placeholder")},t)))),y.a.createElement(Oe.a,{variant:"pagination"},y.a.createElement(Z.a,{isCompact:a.isCompact,itemCount:a.itemCount,page:a.page,perPage:a.perPage,onSetPage:a.onSetPage,onPerPageSelect:a.onPerPageSelect})))));var xe=Object(f.a)()(({t:e})=>y.a.createElement(P.Consumer,null,({loading:t,onSourceSelect:a,sources:n,perPage:r,page:s,type:o,query:l,fetchSources:i,filterName:c,onFilterChange:m})=>{const u="AZURE"===o?"Azure":o;return y.a.createElement(O.a,{hasGutter:!0},y.a.createElement(w.a,null,y.a.createElement(p.a,{headingLevel:"h2",size:"xl"},e("cost_models_wizard.source.title_"+o))),y.a.createElement(w.a,null,y.a.createElement(R.a,null,y.a.createElement(q.a,{component:q.b.h6},e("cost_models_wizard.source.sub_title")))),y.a.createElement(w.a,null,y.a.createElement(R.a,null,y.a.createElement(q.a,{component:q.b.h3},e("cost_models_wizard.source.caption",{type:e("source_details.type."+o)})))),y.a.createElement(w.a,null,y.a.createElement(ke,{filter:{onRemove:(e,t)=>i(u,Object(ve.c)(l)(e,t),1,r),onClearAll:()=>i(u,{},1,r),query:l},searchInputProps:{id:"assign-source-search-input",value:c,onChange:m,onSearch:()=>{i(u,Object(ve.a)(l)("name",c),1,r)}},paginationProps:{isCompact:!0,itemCount:n.length,perPage:r,page:s,onSetPage:(e,t)=>{i(u,l,t,r)},onPerPageSelect:(e,t)=>i(u,l,1,t)}}),t?y.a.createElement(d.a,null):y.a.createElement(ye.c,{"aria-label":e("cost_models_wizard.source_table.table_aria_label"),cells:["",e("cost_models_wizard.source_table.column_name"),e("cost_models_wizard.source_table.column_cost_model")],rows:n.map((t,n)=>({cells:[y.a.createElement(y.a.Fragment,null,y.a.createElement(Ee.a,{onChange:e=>{a(n,e)},id:t.name,key:t.name,isChecked:t.selected,isDisabled:Boolean(t.costmodel)})),y.a.createElement(y.a.Fragment,null,t.name," ",Boolean(t.costmodel)&&y.a.createElement(he.a,{key:"wrng-"+t.name,text:e("cost_models_wizard.warning_source",{cost_model:t.costmodel})})),t.costmodel?t.costmodel:""],selected:t.selected}))},y.a.createElement(fe.a,null),y.a.createElement(Ce.a,null)),y.a.createElement(X.a,{"aria-label":"cost_models_wizard.source_table.pagination_section_aria_label",itemCount:n.length,perPage:r,page:s,onSetPage:(e,t)=>{i(u,l,t,r)},onPerPageSelect:(e,t)=>i(u,l,1,t)})))}));class Me extends y.a.Component{componentDidMount(){const{dataFetched:e,type:t,query:a,page:n,perPage:r,fetchSources:s}=this.context;if(e)return;s("AZURE"===t?"Azure":t,a,n,r)}renderContent(){return this.context.dataFetched?y.a.createElement(xe,null):y.a.createElement(d.a,null)}render(){return this.renderContent()}}Me.contextType=P;var Fe=Me;const De=e=>({"":[{id:1,name:e("cost_models_wizard.steps.general_info"),component:y.a.createElement(T,null)}],AZURE:[{id:1,name:e("cost_models_wizard.steps.general_info"),component:y.a.createElement(T,null)},{id:2,name:e("cost_models_wizard.steps.markup"),component:y.a.createElement(W,null)},{id:3,name:e("cost_models_wizard.steps.sources"),component:y.a.createElement(Fe,null)},{id:4,name:e("cost_models_wizard.steps.review"),component:y.a.createElement(be,null)}],AWS:[{id:1,name:e("cost_models_wizard.steps.general_info"),component:y.a.createElement(T,null)},{id:2,name:e("cost_models_wizard.steps.markup"),component:y.a.createElement(W,null)},{id:3,name:e("cost_models_wizard.steps.sources"),component:y.a.createElement(Fe,null)},{id:4,name:e("cost_models_wizard.steps.review"),component:y.a.createElement(be,null)}],OCP:[{id:1,name:e("cost_models_wizard.steps.general_info"),component:y.a.createElement(T,null)},{id:2,name:e("cost_models_wizard.steps.price_list"),component:y.a.createElement(ie,null)},{id:3,name:e("cost_models_wizard.steps.markup"),component:y.a.createElement(W,null)},{id:4,name:e("cost_models_wizard.steps.sources"),component:y.a.createElement(Fe,null)},{id:5,name:e("cost_models_wizard.steps.review"),component:y.a.createElement(be,null)}]}),Te={"":[()=>!1],AWS:[e=>""!==e.name&&""!==e.type,e=>""!==e.markup&&!isNaN(Number(e.markup)),()=>!0,()=>!0],AZURE:[e=>""!==e.name&&""!==e.type,e=>""!==e.markup&&!isNaN(Number(e.markup)),()=>!0,()=>!0],OCP:[e=>""!==e.name&&""!==e.type,e=>e.priceListCurrent.justSaved,e=>""!==e.markup&&!isNaN(Number(e.markup)),()=>!0,()=>!0]},Re=Object(f.a)()(({t:e,isProcess:t,isSuccess:a,closeFnc:n,isOpen:r,onMove:s,validators:o,steps:l,current:i=1,context:c,setError:m,setSuccess:d,updateCostModel:p})=>{const h=l.map((e,t)=>Object.assign(Object.assign({},e),{canJumpTo:i>t}));h[i-1].enableNext=o[i-1](c);const g="OCP"===c.type&&2===i&&!o[i-1](c);return i===l.length&&""!==c.type&&(h[i-1].nextButtonText=e("cost_models_wizard.review.create_button")),r?y.a.createElement(u.a,{isOpen:!0,title:e("cost_models_wizard.title"),description:e("cost_models_wizard.description"),steps:h,startAtStep:i,onNext:s,onBack:s,onClose:n,footer:a||t||g?y.a.createElement("div",null):null,onSave:()=>{const{name:e,type:t,tiers:a,markup:n,description:r,sources:s}=c;Object(b.a)({name:e,source_type:t,description:r,rates:a,markup:{value:n,unit:"percent"},source_uuids:s.map(e=>e.uuid)}).then(()=>{d(),p()}).catch(e=>m(Object(S.a)(e)))}}):null}),qe={step:1,type:"",name:"",description:"",markup:"0.00",filterName:"",sources:[],error:null,apiError:null,dataFetched:!1,query:{},page:1,perPage:10,total:0,loading:!1,tiers:[],priceListCurrent:{metric:"",measurement:"",rate:"",justSaved:!0},priceListPagination:{page:1,perPage:10},createError:null,createSuccess:!1,createProcess:!1,isDialogOpen:!1};class Ne extends y.a.Component{constructor(){super(...arguments),this.state=qe}render(){const{metricsHash:e,t:t}=this.props,a=()=>{this.setState({isDialogOpen:!1},this.props.openWizard)},n=y.a.createElement(h.a,{key:"cancel",variant:"link",onClick:a},t("cost_models_wizard.confirm.cancel")),r=y.a.createElement(h.a,{key:"ok",variant:"primary",onClick:()=>this.setState(Object.assign({},qe))},t("cost_models_wizard.confirm.ok"));return y.a.createElement(P.Provider,{value:{metricsHash:e,step:this.state.step,type:this.state.type,onTypeChange:e=>this.setState({type:e,dataFetched:!1,loading:!1}),name:this.state.name,onNameChange:e=>this.setState({name:e}),description:this.state.description,onDescChange:e=>this.setState({description:e}),markup:this.state.markup,onMarkupChange:e=>{const t=Number(e),a=e.split("").findIndex(e=>"."===e);!isNaN(t)&&a>-1&&e.length-a-1>2?this.setState({markup:Object(C.b)(t,"markup",{fractionDigits:2})}):this.setState({markup:e})},error:this.state.error,apiError:this.state.apiError,sources:this.state.sources,dataFetched:this.state.dataFetched,setSources:e=>this.setState({sources:e,dataFetched:!0,loading:!1}),onSourceSelect:(e,t)=>{if(-1===e)return this.setState({sources:this.state.sources.map(e=>Object.assign(Object.assign({},e),{selected:t}))});const a=[...this.state.sources];return a[e].selected=t,this.setState({sources:a})},total:this.state.total,page:this.state.page,onPageChange:(e,t)=>this.setState({page:t}),onPerPageChange:(e,t)=>this.setState({page:1,perPage:t}),perPage:this.state.perPage,filterName:this.state.filterName,onFilterChange:e=>this.setState({filterName:e}),query:this.state.query,clearQuery:()=>this.setState({query:{}}),loading:this.state.loading,tiers:this.state.tiers,submitTiers:e=>{this.setState({tiers:e})},priceListPagination:{page:this.state.priceListPagination.page,perPage:this.state.priceListPagination.perPage,onPageSet:(e,t)=>this.setState({priceListPagination:Object.assign(Object.assign({},this.state.priceListPagination),{page:t})}),onPerPageSet:(e,t)=>this.setState({priceListPagination:{page:1,perPage:t}})},goToAddPL:e=>this.setState({priceListCurrent:Object.assign(Object.assign({},this.state.priceListCurrent),{justSaved:e||!1})}),fetchSources:(e,t,a,n)=>{this.setState({loading:!0,apiError:null,filterName:""},()=>(({type:e,page:t,perPage:a,query:n})=>{const r=(t-1)*a,s=a,o=Object.keys(n).reduce((e,t)=>e?`${e}&${t}=${n[t]}`:`${t}=${n[t]}`,"");return Object(v.a)(`type=${e}&limit=${s}&offset=${r}&${o}`).then(e=>e.data.data).then(e=>e.map(e=>({name:e.name,uuid:e.uuid,costmodel:e.cost_models.map(e=>e.name).join(","),selected:!1})))})({type:e,query:t,page:a,perPage:n}).then(e=>this.setState({sources:e,query:t,page:a,perPage:n,loading:!1,dataFetched:!0,filterName:""})).catch(e=>this.setState({apiError:e,loading:!1,dataFetched:!0,filterName:""})))},createSuccess:this.state.createSuccess,createError:this.state.createError,createProcess:this.state.createProcess,onClose:()=>this.setState(Object.assign({},qe),this.props.closeWizard)}},y.a.createElement(Re,{metricsHash:e,isProcess:this.state.createProcess,isSuccess:this.state.createSuccess,closeFnc:()=>{"OCP"===this.state.type&&this.state.step>1&&this.state.tiers.length>0||"OCP"!==this.state.type&&this.state.step>2?this.setState({isDialogOpen:!0},this.props.closeWizard):this.setState(Object.assign({},qe),this.props.closeWizard)},isOpen:this.props.isOpen,onMove:e=>this.setState({step:Number(e.id)}),steps:De(t)[this.state.type],current:this.state.step,validators:Te[this.state.type],setError:e=>this.setState({createError:e}),setSuccess:()=>this.setState({createError:null,createSuccess:!0}),updateCostModel:()=>this.props.fetch(),context:{name:this.state.name,type:this.state.type,description:this.state.description,markup:this.state.markup,tiers:this.state.tiers,priceListCurrent:this.state.priceListCurrent,sources:this.state.sources.filter(e=>e.selected)}}),y.a.createElement(g.a,{isOpen:this.state.isDialogOpen,header:y.a.createElement(p.a,{headingLevel:"h1",size:p.b["2xl"]},y.a.createElement(_.ExclamationTriangleIcon,{color:"orange"})," ",t("cost_models_wizard.confirm.title")),onClose:a,actions:[r,n],variant:"small"},t("cost_models_wizard.confirm.message")))}}const Ae=Object(r.connect)(Object(s.a)(e=>({metricsHash:l.c.metrics(e)})),{fetch:o.a.fetchCostModels})(Object(f.a)()(Ne));var Le=a(463),We=a(12),Ie=a(133),He=a(134),Ue=a(707),Ve=a(858);const $e=({id:e,placeholder:t="",value:a,onChange:n,onSearch:r})=>y.a.createElement(N.a,null,y.a.createElement(z.a,{value:a,placeholder:t,id:e,onChange:n,onKeyPress:e=>{"Enter"===e.key&&""!==a&&r(e)}}),y.a.createElement(A.a,{style:{borderLeft:"0"}},y.a.createElement(je.SearchIcon,null))),Ke=({options:e,onSelect:t,onToggle:a,selected:n,isExpanded:r})=>y.a.createElement(Le.a,{isOpen:r,toggleIcon:y.a.createElement(Ue.FilterIcon,null),variant:We.f.single,onSelect:t,onToggle:a,selections:n},e.map(e=>y.a.createElement(Ie.a,Object.assign({key:""+e.value},e)))),Be=({t:e,chips:t,buttonProps:a,primaryProps:n,paginationProps:r,secondaries:s,onClearAll:o,onRemove:l})=>y.a.createElement(Pe.a,{id:"costmodels-details-datatoolbar",clearAllFilters:o},y.a.createElement(Se.a,null,y.a.createElement(He.a,{variant:"filter-group"},y.a.createElement(Oe.a,null,y.a.createElement(Ke,{onSelect:n.onSelect,onToggle:n.onToggle,selected:n.selected,isExpanded:n.isExpanded,options:[{value:"name",children:e("toolbar.sources.primary.name"),key:"name"},{value:"source_type",children:e("toolbar.sources.primary.source_type"),key:"source_type"},{value:"description",children:e("toolbar.sources.primary.description"),key:"description"}]})),s.map(a=>y.a.createElement(Oe.a,{key:a.name},y.a.createElement(we.a,{deleteChip:l,chips:t[a.name],categoryName:e("toolbar.sources.primary."+a.name)},n.selected===a.name&&a.render())))),y.a.createElement(Oe.a,null,y.a.createElement(Ve.a,{isDisabled:a.isDisabled},y.a.createElement(h.a,Object.assign({},a)))),y.a.createElement(Oe.a,{alignment:{default:"alignRight"},variant:"pagination"},y.a.createElement(Z.a,{isCompact:r.isCompact,itemCount:r.itemCount,perPage:r.perPage,page:r.page,onSetPage:r.onSetPage,onPerPageSelect:r.onPerPageSelect}))));class Ge extends y.a.Component{constructor(){super(...arguments),this.state={primaryExpanded:!1,primarySelected:"name",secondaryExpanded:!1,secondaryValue:""}}render(){const{t:e,paginationProps:t,buttonProps:a,onSearch:n,query:r}=this.props,{primaryExpanded:s,primarySelected:o,secondaryValue:l,secondaryExpanded:i}=this.state;return y.a.createElement(Be,{onRemove:(t,a)=>{let s;return t===e("toolbar.sources.primary.name")&&(s=Object(ve.c)(r)("name",a)),t===e("toolbar.sources.primary.description")&&(s=Object(ve.c)(r)("description",a)),t===e("toolbar.sources.primary.source_type")&&(s=Object(ve.d)(r)("source_type")),n(s)},onClearAll:()=>n({name:null,description:null,source_type:null}),chips:{name:r.name||[],source_type:r.source_type?[r.source_type]:[],description:r.description||[]},buttonProps:a,paginationProps:t,primaryProps:{isExpanded:s,onSelect:(e,t)=>{this.setState({primaryExpanded:!1,primarySelected:t,secondaryValue:""})},onToggle:e=>this.setState({primaryExpanded:e}),selected:o},secondaries:[{name:"name",render:()=>y.a.createElement($e,{id:"cost-model-details-toolbar-name-search",value:l,onChange:e=>{this.setState({secondaryValue:e})},onSearch:()=>{const e=Object(ve.a)(r)(o,l);this.setState({secondaryValue:""},()=>n(e))},placeholder:e("toolbar.filterby",{name:e("toolbar.sources.lower.name")})})},{name:"description",render:()=>y.a.createElement($e,{id:"cost-model-details-toolbar-description-search",value:l,onChange:e=>{this.setState({secondaryValue:e})},onSearch:()=>{const e=Object(ve.a)(r)(o,l);this.setState({secondaryValue:""},()=>n(e))},placeholder:e("toolbar.filterby",{name:e("toolbar.sources.lower.description")})})},{name:"source_type",render:()=>y.a.createElement(Ke,{onSelect:(e,t)=>{const a=Object(ve.b)(r)(o,t);this.setState({secondaryValue:t,secondaryExpanded:!1},()=>n(a))},onToggle:e=>{this.setState({secondaryExpanded:e})},selected:l,isExpanded:i,options:[{value:"none",children:e("toolbar.sources.secondary.none"),key:"none",isPlaceholder:!0,isDisabled:!0},{value:"AWS",children:e("toolbar.sources.secondary.aws"),key:"aws"},{value:"OCP",children:e("toolbar.sources.secondary.ocp"),key:"ocp"},{value:"AZURE",children:e("toolbar.sources.secondary.azure"),key:"azure"}]})}],t:e})}}const Je=Object(f.a)()(Ge);var Ze=a(899),Ye=a(413),Qe=a(414),Xe=a(900),et=a(467),tt=a(1187),at=a(1011),nt=a(166),rt=a(1032);const st=(e,t)=>t===ye.b.asc?e:"-"+e,ot=(e,t)=>{const a=e.ordering;if(!a)return{};const n="-"===a[0]?ye.b.desc:ye.b.asc,r=n===ye.b.desc?a.slice(1):a;return{direction:n,index:t.findIndex(e=>!("string"==typeof e||!e.data)&&e.data.key===r)}};var lt=Object(r.connect)(e=>({query:o.c.query(e),costModels:o.c.costModels(e),canWrite:i.c.isCostModelWritePermission(e)}),e=>({fetch:t=>o.a.fetchCostModels(t)(e)}),(e,t,a)=>{const n=[{title:"cost_models_details.table.columns.name",transforms:[et.a],data:{key:"name"}},{title:"cost_models_details.table.columns.desc"},{title:"cost_models_details.table.columns.source_type",transforms:[et.a],data:{key:"source_type"}},{title:"cost_models_details.table.columns.sources"},{title:"cost_models_details.table.columns.last_modified",transforms:[et.a],data:{key:"updated_timestamp"}}],r=(s=e.canWrite,o=a.deleteAction,s?[{title:"cost_models_details.action_delete",onClick:(e,t)=>o(t)}]:[{style:{pointerEvents:"auto"},tooltip:"cost_models.read_only_tooltip",isDisabled:!0,title:"cost_models_details.action_delete"}]);var s,o,l;return{"aria-label":"cost-models-table",sortBy:ot(e.query,n),onSort:(a,n,r,s)=>{const{key:o}=s.column.data,l=Object(nt.stringify)(Object.assign(Object.assign({},e.query),{ordering:st(o,r)}));t.fetch(l)},rows:(l=e.costModels,l.map(e=>({cells:[{title:y.a.createElement(rt.a,{to:"/cost-models/"+e.uuid},e.name)},e.description,e.source_type,e.sources.length.toString(),Object(tt.relativeTime)(e.updated_timestamp)]}))),cells:n,actions:r}})(at.a);class it extends y.a.Component{constructor(){super(...arguments),this.state={rowId:0}}render(){const{deleteCostModel:e,deleteError:t,isDeleteProcessing:a,showDeleteDialog:n,isDialogOpen:r,setDialogOpen:s,rows:o,t:l}=this.props,i=o[this.state.rowId];return y.a.createElement(y.a.Fragment,null,y.a.createElement(Xe.a,{isSmall:!0,isOpen:r.deleteCostModel,title:l("dialog.delete_cost_model_title"),onClose:()=>s({name:"deleteCostModel",isOpen:!1}),error:t,isProcessing:a,onProceed:()=>{e(i.uuid,"deleteCostModel")},body:y.a.createElement(y.a.Fragment,null,0===i.sources.length&&l("dialog.delete_cost_model_body_green",{cost_model:i.name}),i.sources.length>0&&y.a.createElement(y.a.Fragment,null,l("dialog.delete_cost_model_body_red",{cost_model:i.name}),y.a.createElement("br",null),y.a.createElement("br",null),l("dialog.delete_cost_model_body_red_costmodel_delete"),y.a.createElement("br",null),y.a.createElement(Ye.a,null,i.sources.map(e=>y.a.createElement(Qe.a,{key:""+e.uuid},e.name))))),actionText:0===o[this.state.rowId].sources.length?l("dialog.deleteCostModel"):""}),y.a.createElement("div",{style:Ze.a.tableContainer},y.a.createElement(lt,{deleteAction:e=>{this.setState({rowId:e},()=>n())}})))}}var ct=Object(r.connect)(Object(s.a)(e=>({isDialogOpen:o.c.isDialogOpen(e)("costmodel"),isDeleteProcessing:o.c.deleteProcessing(e),deleteError:o.c.deleteError(e)})),{setDialogOpen:o.a.setCostModelDialog,deleteCostModel:o.a.deleteCostModel})(Object(f.a)()(it));var mt=Object(r.connect)(e=>({pagination:o.c.pagination(e),status:o.c.status(e),query:o.c.query(e)}),e=>({fetch:t=>o.a.fetchCostModels(t)(e)}),(e,t,a)=>({itemCount:e.pagination.count,perPage:e.pagination.perPage,page:e.pagination.page,variant:a.variant,onSetPage:(a,n)=>{const r=(n-1)*e.pagination.perPage,s=Object.assign(Object.assign({},e.query),{offset:r.toString(),limit:e.pagination.perPage.toString()});t.fetch(Object(nt.stringify)(s))},onPerPageSelect:(a,n,r)=>{const s=Object.assign(Object.assign({},e.query),{offset:"0",limit:n.toString()});t.fetch(Object(nt.stringify)(s))}}))(X.a),dt=a(720),ut=a(177),pt=a(373);class ht extends y.a.Component{render(){const{t:e,openModal:t,isWritePermission:a}=this.props;return y.a.createElement(ut.Main,null,y.a.createElement(B.a,{variant:B.b.large,className:"pf-m-redhat-font"},y.a.createElement(G.a,{icon:dt.FileInvoiceDollarIcon}),y.a.createElement(p.a,{headingLevel:"h2",size:"lg"},e("cost_models_details.empty_state.title")),y.a.createElement(J.a,null,y.a.createElement("p",null,e("cost_models_details.empty_state.desc"))),a&&y.a.createElement(h.a,{variant:"primary",onClick:t},e("cost_models_details.empty_state.primary_action")),!a&&y.a.createElement(ce.a,null,y.a.createElement(Ve.a,{isDisabled:!0},y.a.createElement(h.a,{isDisabled:!0},e("cost_models_details.empty_state.primary_action"))))))}}var gt=Object(r.connect)(Object(s.a)(e=>({isWritePermission:Object(pt.isCostModelWritePermission)(e)})))(Object(f.a)()(ht)),_t=a(460),bt=a(716),Et=a(1201);var yt=e=>y.a.createElement(Et.a,null,t=>{const a=((e,t)=>({title:e(t.title),popover:e(t.popover)}))(t,e),{title:n,popover:r}=a;return y.a.createElement("header",{style:Ze.a.header},y.a.createElement(p.a,{headingLevel:"h2",style:Ze.a.title,size:"2xl"},n,y.a.createElement(_t.a,{"aria-label":"cost-models-popover",bodyContent:r,enableFlip:!0},y.a.createElement(h.a,{variant:h.c.plain},y.a.createElement(bt.OutlinedQuestionCircleIcon,null)))))});class ft extends y.a.Component{constructor(e){super(e),this.state={isWizardOpen:!1,uuid:""},this.onPaginationChange=this.onPaginationChange.bind(this),this.onOrdering=this.onOrdering.bind(this),this.onFilterChange=this.onFilterChange.bind(this),this.onUpdateFilter=this.onUpdateFilter.bind(this),this.onRemove=this.onRemove.bind(this),this.resetFilter=this.resetFilter.bind(this)}componentDidMount(){this.props.fetch(),this.props.fetchMetrics("OCP"),this.props.fetchRbac()}onRemove(e,t){const a=this.props.query[e];if(!a)return;const n=a.split(","),r=n.indexOf(t);if(r<-1)return;const s=[...n.slice(0,r),...n.slice(r+1)].join(",");this.updateResults(Object.assign(Object.assign({},this.props.query),{[e]:s}))}onUpdateFilter(e){let t=null;return"type"===e&&(t="currentFilterType"),"value"===e&&(t="currentFilterValue"),e=>{null!==t&&this.props.updateFilter({[t]:e})}}updateResults(e){const t=Object.keys(e).filter(t=>e[t]).reduce((t,a)=>{const n=`${a}=${e[a]}`;return null===t?n:`${t}&${n}`},null);this.props.fetch(t)}onPaginationChange(e){const t=Object.assign(Object.assign({},this.props.query),e);this.updateResults(t)}onOrdering(e){this.updateResults(Object.assign(Object.assign({},this.props.query),e))}onFilterChange(e){const{limit:t,offset:a,ordering:n}=this.props.query;this.updateResults(Object.assign({limit:t,offset:a,ordering:n},e))}resetFilter(){this.updateResults({})}render(){const{isWritePermission:e,setDialogOpen:t,costModels:a,pagination:n,status:r,error:s,t:o,query:l}=this.props,i=Object.keys(l).filter(e=>["name","type","description"].includes(e)).find(e=>this.props.query[e]);return y.a.createElement(y.a.Fragment,null,y.a.createElement(Ae,{isOpen:this.state.isWizardOpen,closeWizard:()=>this.setState({isWizardOpen:!1}),openWizard:()=>this.setState({isWizardOpen:!0})}),y.a.createElement("div",null,y.a.createElement(yt,{title:"cost_models_details.header.title",popover:"cost_models_details.header.sub"}),y.a.createElement("div",{style:Ze.a.content},0!==r&&null===s&&(a.length>0||i)&&y.a.createElement("div",{style:Ze.a.toolbarContainer},y.a.createElement(Je,{buttonProps:{isDisabled:!e,onClick:()=>this.setState({isWizardOpen:!0}),children:o("cost_models_details.filter.create_button")},query:Object.keys(l).reduce((e,t)=>["source_type","name","description"].includes(t)&&l[t]?["name","description"].includes(t)?Object.assign(Object.assign({},e),{[t]:l[t].split(",")}):Object.assign(Object.assign({},e),{[t]:l[t]}):e,{}),onSearch:e=>this.onFilterChange(e),paginationProps:{isCompact:!0,itemCount:n.count,onPerPageSelect:(e,t)=>{this.onPaginationChange({offset:"0",limit:t.toString()})},onSetPage:(e,t)=>{const a=(t-1)*n.perPage;this.onPaginationChange({offset:a.toString(),limit:n.perPage.toString()})},page:n.page,perPage:n.perPage}})),2!==r&&y.a.createElement(d.a,null),2===r&&Boolean(s)&&y.a.createElement(m.a,{error:s}),2===r&&!s&&a.length>0&&y.a.createElement(y.a.Fragment,null,y.a.createElement(ct,{rows:a,showDeleteDialog:()=>{t({isOpen:!0,name:"deleteCostModel"})}}),y.a.createElement("div",{style:Ze.a.paginationContainer},y.a.createElement(mt,{variant:"bottom"}))),2===r&&!s&&void 0===i&&0===a.length&&y.a.createElement(gt,{openModal:()=>this.setState({isWizardOpen:!0})}),2===r&&i&&0===a.length&&y.a.createElement(c.a,{filter:this.props.query.name,subTitle:o("no_match_found_state.desc")}))))}}var Ct=Object(f.a)()(ft);t.default=Object(r.connect)(Object(s.a)(e=>({costModels:o.c.costModels(e),error:o.c.error(e),status:o.c.status(e),pagination:o.c.pagination(e),query:o.c.query(e),currentFilterValue:o.c.currentFilterValue(e),currentFilterType:o.c.currentFilterType(e),currentCostModel:o.c.selected(e),isWritePermission:i.c.isCostModelWritePermission(e)})),{updateFilter:o.a.updateFilterToolbar,fetch:o.a.fetchCostModels,notify:n.addNotification,resetCurrentCostModel:o.a.resetCostModel,setCurrentCostModel:o.a.selectCostModel,setDialogOpen:o.a.setCostModelDialog,fetchMetrics:l.a.fetchMetrics,fetchRbac:i.a.fetchRbac})(Ct)}}]);
//# sourceMappingURL=1243218b026179a36d56.bundle.js.map