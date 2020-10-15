(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1206:function(e,t,a){"use strict";a.r(t);var s=a(429),r=a(404),n=a(406),o=a(347),i=a(405),l=a(266),c=a(717),d=a(895),p=a(775),m=a(388),u=a(393),g=a(394),h=a(389),b=a(27),E=a(383),_=a(390),O=a(860),y=a(1),C=a.n(y),f=a(746),v=a(141),P=a(175),S=a(323),M=a(324),k=a(761),j=a(401),D=a(402);class R extends C.a.Component{constructor(e){super(e),this.state={isOpen:!1},this.onToggle=this.onToggle.bind(this),this.onSelect=this.onSelect.bind(this)}onSelect(){this.setState(e=>({isOpen:!e.isOpen}))}onToggle(e){this.setState({isOpen:e})}render(){const{isPlain:e=!1,direction:t="down",position:a="left",dropdownItems:s}=this.props;return C.a.createElement(j.a,{isPlain:e,position:a,direction:t,isOpen:this.state.isOpen,onSelect:this.onSelect,toggle:C.a.createElement(D.a,{onToggle:this.onToggle}),dropdownItems:s})}}var x=R,w=a(728),F=a.n(w),I=a(681),q=a.n(I);const L={card:{minHeight:"130px",marginLeft:q.a.value,marginRight:q.a.value},cardBody:{fontSize:F.a.value,textAlign:"center"}};var z=a(415),T=a(138),A=a(434),W=a(435),$=a(462),N=a(424),H=a(418),K=a(409),B=a(410),U=a(396),G=a(349),J=a(412);class V extends C.a.Component{constructor(e){super(e),this.state={markup:Object(k.b)(Number(this.props.current.markup.value),"markup",{fractionDigits:2})||"0.00"}}render(){const{error:e,current:t,onClose:a,updateCostModel:s,isLoading:r,t:n}=this.props;return C.a.createElement(z.a,{title:n("cost_models_details.edit_markup"),isOpen:!0,onClose:()=>a({name:"updateMarkup",isOpen:!1}),variant:"small",actions:[C.a.createElement(T.a,{key:"proceed",variant:"primary",onClick:()=>{const e=Object.assign(Object.assign({},t),{source_uuids:t.sources.map(e=>e.uuid),source_type:"OpenShift Container Platform"===t.source_type?"OCP":"AWS",markup:{value:this.state.markup,unit:"percent"}});s(t.uuid,e,"updateMarkup")},isDisabled:isNaN(Number(this.state.markup))||Number(this.state.markup)===Number(t.markup.value||0)||r},n("cost_models_details.add_rate_modal.save")),C.a.createElement(T.a,{key:"cancel",variant:"link",onClick:()=>a({name:"updateMarkup",isOpen:!1}),isDisabled:r},n("cost_models_details.add_rate_modal.cancel"))]},C.a.createElement(A.a,{hasGutter:!0},C.a.createElement(W.a,null,e&&C.a.createElement($.a,{variant:"danger",title:""+e})),C.a.createElement(W.a,null,C.a.createElement(o.a,{headingLevel:"h2",size:"md"},n("cost_models_details.table.columns.name"))),C.a.createElement(W.a,null,C.a.createElement(N.a,null,C.a.createElement(H.a,{component:H.b.h6},t.name))),C.a.createElement(W.a,null,C.a.createElement(K.a,null,C.a.createElement(B.a,{label:n("cost_models_wizard.markup.markup_label"),fieldId:"markup-input-box",helperTextInvalid:n("cost_models_wizard.markup.invalid_markup_text"),validated:isNaN(Number(this.state.markup))?"error":"default"},C.a.createElement(U.a,{style:{width:"150px"}},C.a.createElement(G.a,{type:"text","aria-label":n("cost_models_wizard.markup.markup_label"),id:"markup-input-box",value:this.state.markup,onChange:e=>{const t=Number(e),a=e.split("").findIndex(e=>"."===e);!isNaN(t)&&a>-1&&e.length-a-1>2?this.setState({markup:Object(k.b)(t,"markup",{fractionDigits:2})}):this.setState({markup:e})},validated:isNaN(Number(this.state.markup))?"error":"default"}),C.a.createElement(J.a,{style:{borderLeft:"0"}},"%")))))))}}var Z=Object(v.connect)(Object(P.a)(e=>({isLoading:S.c.updateProcessing(e),error:S.c.updateError(e)})),{onClose:S.a.setCostModelDialog,updateCostModel:S.a.updateCostModel},(e,t,a)=>Object.assign(Object.assign(Object.assign({},e),t),a))(Object(f.a)()(V));var Q=Object(v.connect)(Object(P.a)(e=>{const{updateMarkup:t}=S.c.isDialogOpen(e)("markup");return{isUpdateDialogOpen:t,costModelDialog:S.c.isDialogOpen(e)("markup"),isWritePermission:M.c.isCostModelWritePermission(e)}}),{setCostModelDialog:S.a.setCostModelDialog})(Object(f.a)()(({isWritePermission:e,setCostModelDialog:t,current:a,isUpdateDialogOpen:s,t:r})=>{const n=a&&a.markup&&a.markup.value?Object(k.b)(Number(a.markup.value),"markup",{fractionDigits:2}):"0.0";return C.a.createElement(C.a.Fragment,null,s&&C.a.createElement(Z,{current:a}),C.a.createElement(m.a,{style:L.card},C.a.createElement(u.a,null,C.a.createElement(g.a,null,r("cost_models_details.description_markup")),C.a.createElement(h.a,null,C.a.createElement(x,{position:b.d.right,isPlain:!0,dropdownItems:[C.a.createElement(O.a,{key:"edit",isDisabled:!e},C.a.createElement(E.a,{isDisabled:!e,onClick:()=>t({isOpen:!0,name:"updateMarkup"}),component:"button"},r("cost_models_details.edit_markup_action")))]}))),C.a.createElement(_.a,{isFilled:!0}),C.a.createElement(_.a,{style:L.cardBody},n,"%"),C.a.createElement(_.a,{isFilled:!0})))})),X=a(413),Y=a(414),ee=a(461),te=a(464),ae=a(465),se=a(107),re=a(720),ne=a(783),oe=a(1016),ie=a(1017),le=a(942),ce=a(1007),de=a(1013),pe=a(1203),me=a(325),ue=a(904),ge=a(824),he=a(1201);var be=Object(v.connect)(e=>{const t=S.c.costModels(e);let a=null;return t.length>0&&(a=t[0]),{costModel:a,isOpen:S.c.isDialogOpen(e)("rate").addRate,updateError:S.c.updateError(e),isProcessing:S.c.updateProcessing(e),metricsHash:me.c.metrics(e)}},e=>({onClose:()=>{e(S.a.setCostModelDialog({name:"addRate",isOpen:!1}))},updateCostModel:(t,a)=>S.a.updateCostModel(t,a,"addRate")(e)}),(e,t)=>{const{uuid:a}=e.costModel;return{isOpen:e.isOpen,metricsHash:e.metricsHash,updateError:e.updateError,isProcessing:e.isProcessing,onClose:t.onClose,onProceed:s=>{const r=Object(ue.e)(e.metricsHash,e.costModel,s);t.updateCostModel(a,r)}}})(({isOpen:e,isProcessing:t,onProceed:a,onClose:s,updateError:r,metricsHash:n})=>{const o=Object(ue.g)(n),i=C.a.useMemo(()=>Object(ue.b)(o),[o.errors,o.rateKind]);return C.a.useEffect(()=>{o.reset(ge.e)},[e]),C.a.createElement(he.a,null,l=>C.a.createElement(z.a,{title:l("cost_models_details.add_rate_modal.title"),isOpen:e,onClose:s,variant:"large",actions:[C.a.createElement(T.a,{key:"add-rate",variant:T.c.primary,isDisabled:!i||t,onClick:()=>{a(o)}},l("cost_models_details.add_rate")),C.a.createElement(T.a,{key:"cancel",variant:T.c.link,isDisabled:t,onClick:s},l("cost_models_details.add_rate_modal.cancel"))]},C.a.createElement(K.a,null,r&&C.a.createElement($.a,{variant:"danger",title:""+r}),C.a.createElement(ue.a,{metricsHash:n,rateFormData:o}))))}),Ee=a(902),_e=a(935),Oe=a(456);var ye=Object(v.connect)(e=>{const t=S.c.costModels(e);let a=null;return t.length>0&&(a=t[0]),{costModel:a,isOpen:S.c.isDialogOpen(e)("rate").updateRate,updateError:S.c.updateError(e),isProcessing:S.c.updateProcessing(e),metricsHash:me.c.metrics(e)}},e=>({onClose:()=>{e(S.a.setCostModelDialog({name:"updateRate",isOpen:!1}))},updateCostModel:(t,a)=>{S.a.updateCostModel(t,a,"updateRate")(e)}}),(e,t,a)=>{const{uuid:s}=e.costModel;return{rate:e.costModel&&e.costModel.rates&&e.costModel.rates[a.index]?e.costModel.rates[a.index]:null,metricsHash:e.metricsHash,onClose:t.onClose,isOpen:e.isOpen,isProcessing:e.isProcessing,updateError:e.updateError,onProceed:r=>{const n=Object(ue.e)(e.metricsHash,e.costModel,r,a.index);t.updateCostModel(s,n)}}})(({rate:e,metricsHash:t,onClose:a,isOpen:s,isProcessing:r,updateError:n,onProceed:o})=>{const{t:i}=Object(Oe.a)(),l=Object(ue.g)(t,e),c=C.a.useMemo(()=>Object(ue.b)(l),[l]),d=C.a.useMemo(()=>Object(ue.d)(e,l),[l]);return C.a.useEffect(()=>{l.reset(Object(ue.c)(e))},[s]),C.a.createElement(z.a,{title:i("cost_models_details.edit_rate"),isOpen:s,onClose:a,variant:"large",actions:[C.a.createElement(T.a,{key:"proceed",variant:"primary",onClick:()=>{o(l)},isDisabled:!c||r||!d},i("cost_models_details.add_rate_modal.save")),C.a.createElement(T.a,{key:"cancel",variant:"link",onClick:a,isDisabled:r},i("cost_models_details.add_rate_modal.cancel"))]},C.a.createElement(A.a,{hasGutter:!0},n&&C.a.createElement(W.a,null,C.a.createElement($.a,{variant:"danger",title:""+n})),C.a.createElement(W.a,null,C.a.createElement(_e.a,null,C.a.createElement(ue.a,{metricsHash:t,rateFormData:l})))))});class Ce extends C.a.Component{constructor(){super(...arguments),this.state={deleteRate:null,index:-1,pagination:{perPage:10,page:1}}}render(){const{t:e,fetchStatus:t,fetchError:a,isDialogOpen:l,metricsHash:c,isWritePermission:m}=this.props,u=Object.keys(c).map(t=>({label:e("cost_models."+t),value:t})),g=u.reduce((t,a)=>{const s=Object.keys(c[a.value]).filter(e=>!t.map(e=>e.value).includes(e)).map(t=>({label:e("toolbar.pricelist.options."+t),value:t}));return[...t,...s]},[]),h=C.a.createElement("b",null,"dummyChild"),b=this.props.costModel,E=this.state.deleteRate?`${this.state.deleteRate.metric.label_metric}-${this.state.deleteRate.metric.label_measurement} (${this.state.deleteRate.metric.label_measurement_unit})`:"";return C.a.createElement(C.a.Fragment,null,C.a.createElement(be,null),C.a.createElement(ye,{index:this.state.index}),C.a.createElement(Ee.a,{isSmall:!0,isOpen:l.deleteRate,title:e("dialog.rate.title"),onClose:()=>{this.props.setDialogOpen({name:"deleteRate",isOpen:!1}),this.setState({deleteRate:null})},isProcessing:this.props.isLoading,onProceed:()=>{const{index:e}=this.state,{current:t}=this.props,a=Object.assign(Object.assign({},t),{source_uuids:t.sources.map(e=>e.uuid),source_type:"OCP",rates:[...t.rates.slice(0,e),...t.rates.slice(e+1)]});this.props.updateCostModel(t.uuid,a,"deleteRate")},body:C.a.createElement(C.a.Fragment,null,C.a.createElement(pe.a,{i18nKey:"dialog.rate.body",components:[h,h],values:{metric:E,cm:b}}),this.props.assignees&&this.props.assignees.length>0&&C.a.createElement(C.a.Fragment,null,e("dialog.rate.assigned"),C.a.createElement(X.a,null,this.props.assignees.map(e=>C.a.createElement(Y.a,{key:e},e))))),actionText:e("dialog.deleteRate")}),C.a.createElement(oe.a,{initialFilters:{primary:"metrics",metrics:[],measurements:[]}},({search:l,setSearch:c,onRemove:h,onSelect:b,onClearAll:E})=>{const _=(this.state.pagination.page-1)*this.state.pagination.perPage,O=this.state.pagination.page*this.state.pagination.perPage,y=this.props.current.rates.filter(e=>0===l.metrics.length||l.metrics.includes(e.metric.label_metric)).filter(e=>0===l.measurements.length||l.measurements.includes(e.metric.label_measurement)),f=y.slice(_,O);return C.a.createElement(C.a.Fragment,null,C.a.createElement(ie.a,{primary:C.a.createElement(de.a,{isDisabled:0===this.props.current.rates.length,primary:l.primary,setPrimary:e=>c({primary:e}),options:[{label:e("toolbar.pricelist.metric"),value:"metrics"},{label:e("toolbar.pricelist.measurement"),value:"measurements"}]}),selected:l.primary,secondaries:[{component:C.a.createElement(ce.a,{isDisabled:0===this.props.current.rates.length,placeholderText:e("toolbar.pricelist.measurement_placeholder"),selections:l.measurements,setSelections:e=>b("measurements",e),options:g}),name:"measurements",onRemove:h,filters:l.measurements},{component:C.a.createElement(ce.a,{isDisabled:0===this.props.current.rates.length,placeholderText:e("toolbar.pricelist.metric_placeholder"),selections:l.metrics,setSelections:e=>b("metrics",e),options:u}),name:"metrics",onRemove:h,filters:l.metrics}],button:C.a.createElement(T.a,{isDisabled:!m,onClick:()=>this.props.setDialogOpen({name:"addRate",isOpen:!0})},e("toolbar.pricelist.add_rate")),onClear:E,pagination:C.a.createElement(ee.a,{isCompact:!0,itemCount:y.length,perPage:this.state.pagination.perPage,page:this.state.pagination.page,onSetPage:(e,t)=>this.setState({pagination:Object.assign(Object.assign({},this.state.pagination),{page:t})}),onPerPageSelect:(e,t)=>this.setState({pagination:{page:1,perPage:t}})})}),2!==t&&C.a.createElement(p.a,null),2===t&&Boolean(a)&&C.a.createElement(d.a,{error:a}),2===t&&0===f.length&&(0!==l.metrics.length||0!==l.measurements.length)&&C.a.createElement(ne.a,{filter:e("cost_models_wizard.price_list.toolbar_top_results_aria_label")}),2===t&&0===f.length&&0===l.measurements.length&&0===l.metrics.length&&C.a.createElement(s.a,null,C.a.createElement(r.a,null,C.a.createElement(n.a,{icon:re.FileInvoiceDollarIcon}),C.a.createElement(o.a,{headingLevel:"h2",size:"lg"},e("cost_models_details.empty_state_rate.title")),C.a.createElement(i.a,null,e("cost_models_details.empty_state_rate.description")))),2===t&&f.length>0&&C.a.createElement(C.a.Fragment,null,C.a.createElement(le.a,{t:e,tiers:f,actions:[{title:e("cost_models_wizard.price_list.update_button"),isDisabled:!m,style:m?void 0:{pointerEvents:"auto"},tooltip:m?void 0:C.a.createElement("div",null,e("cost_models.read_only_tooltip")),onClick:(e,t,a)=>{this.setState({deleteRate:null,index:a.data.index+_}),this.props.setDialogOpen({name:"updateRate",isOpen:!0})}},{title:e("cost_models_wizard.price_list.delete_button"),isDisabled:!m,style:m?{}:{pointerEvents:"auto"},tooltip:m?void 0:C.a.createElement("div",null,e("cost_models.read_only_tooltip")),onClick:(e,t,a)=>{const s=a.data.index;this.setState({deleteRate:f[s],index:s+_}),this.props.setDialogOpen({name:"deleteRate",isOpen:!0})}}]}),C.a.createElement(te.a,{id:"price-list-toolbar-bottom"},C.a.createElement(ae.a,null,C.a.createElement(se.a,{variant:se.b.pagination},C.a.createElement(ee.a,{itemCount:y.length,perPage:this.state.pagination.perPage,page:this.state.pagination.page,onSetPage:(e,t)=>this.setState({pagination:Object.assign(Object.assign({},this.state.pagination),{page:t})}),onPerPageSelect:(e,t)=>this.setState({pagination:{page:1,perPage:t}}),variant:"bottom"}))))))}))}}var fe=Object(v.connect)(Object(P.a)(e=>({isLoading:S.c.updateProcessing(e),error:S.c.updateError(e),isDialogOpen:S.c.isDialogOpen(e)("rate"),fetchError:S.c.error(e),fetchStatus:S.c.status(e),metricsHash:me.c.metrics(e),costTypes:me.c.costTypes(e),isWritePermission:M.c.isCostModelWritePermission(e)})),{updateCostModel:S.a.updateCostModel,setDialogOpen:S.a.setCostModelDialog})(Object(f.a)()(Ce)),ve=a(430),Pe=a(431),Se=a(230),Me=a(343),ke=a(108),je=a(756),De=a(758),Re=a(900),xe=a(938),we=a(427),Fe=a(692);const Ie=({id:e,placeholder:t="",value:a,onChange:s,onSearch:r})=>C.a.createElement(U.a,null,C.a.createElement(G.a,{value:a,placeholder:t,id:e,onChange:s,onKeyPress:e=>{"Enter"===e.key&&""!==a&&r(e)}}),C.a.createElement(J.a,{style:{borderLeft:"0"}},C.a.createElement(Fe.SearchIcon,null))),qe=Object(f.a)()(({t:e,searchInputProps:t,paginationProps:a,filter:s})=>C.a.createElement(te.a,{id:"assign-sources-toolbar",clearAllFilters:s.onClearAll},C.a.createElement(ae.a,null,C.a.createElement(se.a,{variant:"search-filter"},C.a.createElement(we.a,{deleteChip:s.onRemove,chips:s.query.name,categoryName:"name"},C.a.createElement(Ie,Object.assign({placeholder:e("cost_models_wizard.source_table.filter_placeholder")},t)))),C.a.createElement(se.a,{variant:"pagination"},C.a.createElement(ee.a,{isCompact:a.isCompact,itemCount:a.itemCount,page:a.page,perPage:a.perPage,onSetPage:a.onSetPage,onPerPageSelect:a.onPerPageSelect})))));class Le extends C.a.Component{render(){const{costModel:e}=this.props;if(this.props.isLoadingSources)return C.a.createElement(p.a,null);if(this.props.fetchingSourcesError)return C.a.createElement(d.a,{error:null});const t=this.props.providers.map(t=>{const a=!!this.props.checked[t.uuid]&&this.props.checked[t.uuid].selected,s=void 0===t.cost_models?this.props.t("cost_models_wizard.source_table.default_cost_model"):t.cost_models.map(e=>e.name).join(","),r=t.cost_models.length&&void 0===t.cost_models.find(t=>t.name===e.name)?C.a.createElement(xe.a,{key:t.uuid,text:this.props.t("cost_models_wizard.warning_source",{cost_model:s})}):null;return{cells:[C.a.createElement("div",{key:t.uuid},t.name," ",r),s||""],selected:a,disableCheckbox:t.cost_models.length>0}}),a={"OpenShift Container Platform":"OCP","Microsoft Azure":"AZURE","Amazon Web Services":"AWS"}[e.source_type];return C.a.createElement(C.a.Fragment,null,C.a.createElement(qe,{filter:{onClearAll:()=>this.props.fetch(`source_type=${a}&limit=${this.props.pagination.perPage}`),onRemove:(e,t)=>{const s=Object(Re.c)({name:this.props.query.name?this.props.query.name.split(","):[]})(e,t);this.props.fetch(`source_type=${a}${s.name?"&name="+s.name.join(","):""}&offset=0&limit=${this.props.pagination.perPage}`)},query:{name:this.props.query.name?this.props.query.name.split(","):[]}},searchInputProps:{id:"assign-sources-modal-toolbar",onChange:e=>this.props.updateFilter({currentFilterType:"name",currentFilterValue:e}),value:this.props.currentFilter.value,onSearch:()=>{const e=this.props.query.name?this.props.query.name.split(","):[],t=Object(Re.a)({name:e})("name",this.props.currentFilter.value);this.props.fetch(`source_type=${a}&name=${t.name.join(",")}&limit=${this.props.pagination.perPage}&offset=0`)}},paginationProps:{isCompact:!0,itemCount:this.props.pagination.count,perPage:this.props.pagination.perPage,page:this.props.pagination.page,onPerPageSelect:(e,t)=>{this.props.fetch(`source_type=${a}&limit=${t}&offset=0&${this.props.query.name?"name="+this.props.query.name:""}`)},onSetPage:(e,t)=>{this.props.fetch(`source_type=${a}&limit=${this.props.pagination.perPage}&offset=${this.props.pagination.perPage*(t-1)}&${this.props.query.name?"name="+this.props.query.name:""}`)}}}),t.length>0&&C.a.createElement(ke.c,{"aria-label":this.props.t("cost_models_details.add_source"),cells:[this.props.t("filter.name"),this.props.t("cost_models_wizard.source_table.column_cost_model")],rows:t,onSelect:(e,t,a)=>{if(-1!==a)this.props.setState(Object.assign(Object.assign({},this.props.checked),{[this.props.providers[a].uuid]:{selected:t,meta:this.props.providers[a]}}));else{const e=this.props.providers.reduce((e,a)=>Object.assign(Object.assign({},e),{[a.uuid]:{selected:t,meta:a}}),{});this.props.setState(e)}}},C.a.createElement(je.a,null),C.a.createElement(De.a,null)),0===t.length&&C.a.createElement(ne.a,{subTitle:this.props.t("no_match_found_state.desc")}),C.a.createElement(te.a,{id:"costmodels_details.sources_pagination_datatoolbar"},C.a.createElement(ae.a,{style:{flexDirection:"row-reverse"},"aria-label":this.props.t("cost_models_details.sources_pagination_bottom")},C.a.createElement(se.a,{variant:"pagination"},C.a.createElement(ee.a,{itemCount:this.props.pagination.count,isDisabled:this.props.isLoadingSources,perPage:this.props.pagination.perPage,page:this.props.pagination.page,onPerPageSelect:(e,t)=>{this.props.fetch(`limit=${t}&offset=0&${this.props.query.name?"name="+this.props.query.name:""}`)},onSetPage:(e,t)=>{this.props.fetch(`limit=${this.props.pagination.perPage}&offset=${this.props.pagination.perPage*(t-1)}&${this.props.query.name?"name="+this.props.query.name:""}`)}})))))}}var ze=Object(v.connect)(Object(P.a)(e=>({currentFilter:{name:Me.c.currentFilterType(e),value:Me.c.currentFilterValue(e)}})),{updateFilter:Me.a.updateFilterToolbar})(Object(f.a)()(Le));const Te={"OpenShift Container Platform":"OCP","Microsoft Azure":"AZURE","Amazon Web Services":"AWS"};class Ae extends C.a.Component{constructor(){super(...arguments),this.state={checked:{}}}componentDidMount(){const{costModel:{source_type:e},fetch:t}=this.props;t(`type=${Te[e]}&limit=10&offset=0`)}componentDidUpdate(e){if(!0===e.isLoadingSources&&!1===this.props.isLoadingSources){const e=this.props.providers.reduce((e,t)=>Object.assign(Object.assign({},e),{[t.uuid]:{selected:this.props.costModel.sources.some(e=>e.uuid===t.uuid),meta:t}}),{});this.setState({checked:e})}}render(){const{isUpdateInProgress:e,onClose:t,isOpen:a,onSave:s,t:r,costModel:n,updateApiError:o}=this.props;return C.a.createElement(z.a,{isOpen:a,title:r("cost_models_details.assign_sources"),onClose:t,variant:"large",actions:[C.a.createElement(T.a,{key:"save",isDisabled:e||this.props.isLoadingSources,onClick:()=>{s(Object.keys(this.state.checked).filter(e=>this.state.checked[e].selected))}},r("cost_models_details.action_assign")),C.a.createElement(T.a,{key:"cancel",variant:"link",isDisabled:e,onClick:t},r("cost_models_wizard.cancel_button"))]},C.a.createElement(A.a,null,C.a.createElement(W.a,null,Boolean(o)&&C.a.createElement($.a,{variant:"danger",title:""+o})),C.a.createElement(W.a,null,C.a.createElement(ve.a,null,C.a.createElement(Pe.a,{span:2},C.a.createElement(N.a,null,C.a.createElement(H.a,{component:H.b.h6},r("cost_models_wizard.general_info.name_label")))),C.a.createElement(Pe.a,{span:10},C.a.createElement(N.a,null,C.a.createElement(H.a,{component:H.b.p},this.props.costModel.name))),C.a.createElement(Pe.a,{span:2},C.a.createElement(N.a,null,C.a.createElement(H.a,{component:H.b.h6},r("cost_models_wizard.general_info.source_type_label")))),C.a.createElement(Pe.a,{span:10},C.a.createElement(N.a,null,C.a.createElement(H.a,{component:H.b.p},this.props.costModel.source_type))))),C.a.createElement(W.a,null,C.a.createElement(ze,{fetch:this.props.fetch,fetchingSourcesError:this.props.fetchingSourcesError,isLoadingSources:this.props.isLoadingSources,providers:this.props.providers,pagination:this.props.pagination,query:this.props.query,costModel:n,checked:this.state.checked,setState:e=>{this.setState({checked:e})}}))))}}var We=Object(v.connect)(Object(P.a)(e=>({pagination:Me.c.pagination(e),query:Me.c.query(e),providers:Me.c.sources(e),isLoadingSources:1===Me.c.status(e),isUpdateInProgress:S.c.updateProcessing(e),updateApiError:S.c.updateError(e),fetchingSourcesError:Me.c.error(e)?Object(Se.a)(Me.c.error(e)):""})),{fetch:Me.a.fetchSources})(Object(f.a)()(Ae)),$e=a(705),Ne=a(896),He=a(1014);var Ke=Object(v.connect)(e=>({canWrite:M.c.isCostModelWritePermission(e),costModels:S.c.costModels(e)}),void 0,(e,t,a)=>{const s=(r=e.canWrite,n=a.showDeleteDialog,r?[{title:"cost_models_details.action_unassign",onClick:(e,t)=>n(t)}]:[{style:{pointerEvents:"auto"},tooltip:"cost_models.read_only_tooltip",isDisabled:!0,title:"cost_models_details.action_unassign"}]);var r,n;return{"aria-label":"sources-table",cells:["filter.name"],rows:e.costModels.length>0?e.costModels[0].sources.map(e=>[e.name]):[],actions:s}})(He.a);const Be=({id:e,placeholder:t="",value:a,onChange:s,onSearch:r})=>C.a.createElement(U.a,null,C.a.createElement(G.a,{value:a,placeholder:t,id:e,onChange:s,onKeyPress:e=>{"Enter"===e.key&&""!==a&&r(e)}}),C.a.createElement(J.a,{style:{borderLeft:"0"}},C.a.createElement(Fe.SearchIcon,null))),Ue=({searchInputProps:e,paginationProps:t,filter:a,actionButtonProps:s})=>C.a.createElement(te.a,{id:"assign-sources-toolbar",clearAllFilters:a.onClearAll},C.a.createElement(ae.a,null,C.a.createElement(se.a,{variant:"search-filter"},C.a.createElement(we.a,{deleteChip:a.onRemove,chips:a.query.name,categoryName:a.categoryNames.name},C.a.createElement(Be,Object.assign({},e)))),C.a.createElement(se.a,null,C.a.createElement(O.a,{isDisabled:s.isDisabled},C.a.createElement(T.a,Object.assign({},s)))),C.a.createElement(se.a,{variant:"pagination"},C.a.createElement(ee.a,{isCompact:t.isCompact,itemCount:t.itemCount,page:t.page,perPage:t.perPage,onSetPage:t.onSetPage,onPerPageSelect:t.onPerPageSelect})))),Ge={emptyState:{display:"flex",flexDirection:"row",justifyContent:"center"}};class Je extends C.a.Component{constructor(){super(...arguments),this.state={query:{name:[]},currentFilter:"",pagination:{page:1,perPage:10}}}render(){const{pagination:{page:e,perPage:t}}=this.state,{onAdd:a,t:s,rows:l,isWritePermission:c}=this.props,d=l.filter(e=>!this.state.query.name||this.state.query.name.every(t=>e.includes(t))).map(e=>[e]),p=d.slice((e-1)*t,e*t);return C.a.createElement(C.a.Fragment,null,C.a.createElement(Ue,{actionButtonProps:{isDisabled:!c,onClick:a,children:s("toolbar.sources.assign_sources")},filter:{onClearAll:()=>this.setState({pagination:Object.assign(Object.assign({},this.state.pagination),{page:1}),query:{name:[]}}),onRemove:(e,t)=>{this.setState({pagination:Object.assign(Object.assign({},this.state.pagination),{page:1}),query:Object(Re.c)(this.state.query)("name",t)})},query:this.state.query,categoryNames:{name:s("toolbar.sources.category.name")}},paginationProps:{isCompact:!0,itemCount:d.length,perPage:t,page:e,onSetPage:(e,t)=>this.setState({pagination:Object.assign(Object.assign({},this.state.pagination),{page:t})}),onPerPageSelect:(e,t)=>this.setState({pagination:{page:1,perPage:t}})},searchInputProps:{id:"sources-tab-toolbar",onChange:e=>this.setState({currentFilter:e}),onSearch:()=>{this.setState({query:Object(Re.a)(this.state.query)("name",this.state.currentFilter),currentFilter:"",pagination:Object.assign(Object.assign({},this.state.pagination),{page:1})})},value:this.state.currentFilter,placeholder:s("toolbar.sources.filter_placeholder")}}),p.length>0&&C.a.createElement(Ke,{showDeleteDialog:e=>{this.props.onDelete(p[e])}}),0===l.length&&C.a.createElement("div",{style:Ge.emptyState},C.a.createElement(r.a,null,C.a.createElement(n.a,{icon:$e.DollarSignIcon}),C.a.createElement(o.a,{headingLevel:"h2",size:"lg"},s("cost_models_details.empty_state_source.title")),C.a.createElement(i.a,null,s("cost_models_details.empty_state_source.description")))),0===d.length&&l.length>0&&C.a.createElement(ne.a,{filter:this.state.currentFilter,subTitle:s("no_match_found_state.desc")}),C.a.createElement(Ne.a,{id:"costmodels_details_filter_datatoolbar","aria-label":"cost_models_details.sources_filter_controller",variant:"bottom",itemCount:d.length,perPage:t,page:e,onSetPage:(e,t)=>this.setState({pagination:Object.assign(Object.assign({},this.state.pagination),{page:t})}),onPerPageSelect:(e,t)=>this.setState({pagination:{page:1,perPage:t}})}))}}var Ve=Object(v.connect)(Object(P.a)(e=>({isWritePermission:M.c.isCostModelWritePermission(e)})))(Object(f.a)()(Je));class Ze extends C.a.Component{constructor(){super(...arguments),this.state={dialogSource:null}}render(){const{setDialogOpen:e,isLoading:t,sources:a,costModel:s,t:r,isDialogOpen:n}=this.props;return C.a.createElement(C.a.Fragment,null,n.addSource&&C.a.createElement(We,{costModel:s,isOpen:!0,onClose:()=>e({name:"addSource",isOpen:!1}),onSave:e=>{this.props.updateCostModel(s.uuid,Object.assign(Object.assign({},s),{source_type:"OpenShift Container Platform"===s.source_type?"OCP":"AWS",source_uuids:e}),"addSource")}}),C.a.createElement(Ee.a,{isSmall:!0,isOpen:n.deleteSource,title:r("dialog.delete_source_from_cost_model_title",{source:this.state.dialogSource,cost_model:s.name}),onClose:()=>{e({name:"deleteSource",isOpen:!1}),this.setState({dialogSource:null})},isProcessing:t,onProceed:()=>{const e=Object.assign(Object.assign({},s),{source_type:"OpenShift Container Platform"===s.source_type?"OCP":"AWS",source_uuids:a.filter(e=>e.name!==this.state.dialogSource).map(e=>e.uuid)});this.props.updateCostModel(s.uuid,e,"deleteSource")},body:r("dialog.delete_source_from_cost_model_body",{source:this.state.dialogSource,cost_model:s.name}),actionText:r("dialog.deleteSource")}),C.a.createElement(Ve,{onDeleteText:r("cost_models_details.action_unassign"),onDelete:t=>{this.setState({dialogSource:t[0]}),e({name:"deleteSource",isOpen:!0})},onAdd:()=>e({name:"addSource",isOpen:!0}),rows:a.map(e=>e.name)}))}}var Qe=Object(v.connect)(Object(P.a)(e=>({isLoading:S.c.updateProcessing(e),isDialogOpen:S.c.isDialogOpen(e)("sources")})),{setDialogOpen:S.a.setCostModelDialog,updateCostModel:S.a.updateCostModel})(Object(f.a)()(Ze)),Xe=a(689),Ye=a.n(Xe),et=a(682),tt=a.n(et),at=a(683),st=a.n(at);const rt={headerDescription:{width:"97%",wordWrap:"break-word"},content:{paddingTop:q.a.value,height:"182vh"},costmodelsContainer:{marginLeft:q.a.value,marginRight:q.a.value,backgroundColor:Ye.a.value,paddingBottom:tt.a.value,paddingTop:tt.a.value},headerCostModel:{padding:q.a.var,paddingBottom:0,backgroundColor:Ye.a.value},title:{paddingBottom:st.a.var}};var nt=a(386),ot=a(387),it=a(432),lt=a(433),ct=a(279),dt=a(422),pt=a(423),mt=a(351),ut=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(a[s[r]]=e[s[r]])}return a};class gt extends C.a.Component{constructor(e){super(e);const t=this.props.costModel[0];this.state={name:t.name,description:t.description}}render(){const{updateCostModel:e,updateError:t,costModel:a,isProcessing:s,setDialogOpen:r,t:n}=this.props,o=a[0];return C.a.createElement(z.a,{title:n("cost_models_details.edit_cost_model"),isOpen:!0,onClose:()=>r({name:"updateCostModel",isOpen:!1}),variant:"small",actions:[C.a.createElement(T.a,{key:"proceed",variant:"primary",onClick:()=>{const{uuid:t,sources:a}=o,s=ut(o,["uuid","sources"]);e(t,Object.assign(Object.assign({},s),{source_uuids:a.map(e=>e.uuid),name:this.state.name,description:this.state.description,source_type:"OpenShift Container Platform"===o.source_type?"OCP":"AWS"}),"updateCostModel")},isDisabled:s||this.state.name===o.name&&this.state.description===o.description},n("cost_models_details.save_button")),C.a.createElement(T.a,{key:"cancel",variant:"secondary",onClick:()=>r({name:"updateCostModel",isOpen:!1}),isDisabled:s},n("dialog.cancel"))]},C.a.createElement(C.a.Fragment,null,t&&C.a.createElement($.a,{variant:"danger",title:""+t}),C.a.createElement(K.a,null,C.a.createElement(B.a,{label:n("cost_models_wizard.general_info.name_label"),isRequired:!0,fieldId:"name"},C.a.createElement(G.a,{isRequired:!0,type:"text",id:"name",name:"name",value:this.state.name,onChange:e=>this.setState({name:e})})),C.a.createElement(B.a,{label:n("cost_models_wizard.general_info.description_label"),fieldId:"description"},C.a.createElement(mt.b,{type:"text",id:"description",name:"description",value:this.state.description,onChange:e=>this.setState({description:e})})))))}}var ht=Object(f.a)()(Object(v.connect)(Object(P.a)(e=>({costModel:S.c.costModels(e),isProcessing:S.c.updateProcessing(e),updateError:S.c.updateError(e)})),{setDialogOpen:S.a.setCostModelDialog,updateCostModel:S.a.updateCostModel})(gt)),bt=a(901);var Et=Object(v.connect)(Object(P.a)(e=>({isDialogOpen:S.c.isDialogOpen(e)("costmodel"),isDeleteProcessing:S.c.deleteProcessing(e),deleteError:S.c.deleteError(e),isWritePermission:M.c.isCostModelWritePermission(e)})),{setDialogOpen:S.a.setCostModelDialog,deleteCostModel:S.a.deleteCostModel})(Object(f.a)()(({t:e,tabRefs:t,tabIndex:a,onSelectTab:s,setDialogOpen:r,isDialogOpen:n,deleteError:i,isDeleteProcessing:l,deleteCostModel:c,current:d,isWritePermission:p,historyObject:m})=>C.a.createElement(C.a.Fragment,null,n.updateCostModel&&C.a.createElement(ht,null),C.a.createElement(Ee.a,{isSmall:!0,isOpen:n.deleteCostModel,title:e("dialog.delete_cost_model_title"),onClose:()=>r({name:"deleteCostModel",isOpen:!1}),error:i,isProcessing:l,onProceed:()=>{c(d.uuid,"deleteCostModel",m)},body:C.a.createElement(C.a.Fragment,null,0===d.sources.length&&e("dialog.delete_cost_model_body_green",{cost_model:d.name}),d.sources.length>0&&C.a.createElement(C.a.Fragment,null,e("dialog.delete_cost_model_body_red",{cost_model:d.name}),C.a.createElement("br",null),C.a.createElement("br",null),e("dialog.delete_cost_model_body_red_costmodel_delete"),C.a.createElement("br",null),C.a.createElement(X.a,null,d.sources.map(e=>C.a.createElement(Y.a,{key:""+e.uuid},e.name))))),actionText:0===d.sources.length?e("dialog.deleteCostModel"):""}),C.a.createElement("header",{style:bt.a.headerCostModel},C.a.createElement(nt.a,{style:bt.a.breadcrumb},C.a.createElement(ot.a,{to:"cost-management/cost-models"},e("cost_models_details.cost_model.cost_models")),C.a.createElement(ot.a,{isActive:!0},d.name)),C.a.createElement(it.a,null,C.a.createElement(lt.a,{style:bt.a.headerDescription},C.a.createElement(o.a,{headingLevel:"h2",style:bt.a.title,size:"2xl"},d.name),d.description&&C.a.createElement(o.a,{headingLevel:"h2",style:bt.a.title,size:"md"},d.description),C.a.createElement(o.a,{headingLevel:"h2",style:bt.a.sourceTypeTitle,size:"md"},e("cost_models_details.cost_model.source_type"),": ",d.source_type),"OpenShift Container Platform"===d.source_type?C.a.createElement(ct.a,{activeKey:a,onSelect:(e,t)=>s(t)},C.a.createElement(dt.a,{eventKey:0,title:C.a.createElement(pt.a,null,"Price list"),tabContentId:"refPriceList",tabContentRef:t[0]}),C.a.createElement(dt.a,{eventKey:1,title:C.a.createElement(pt.a,null,"Markup"),tabContentId:"refMarkup",tabContentRef:t[1]}),C.a.createElement(dt.a,{eventKey:2,title:C.a.createElement(pt.a,null,"Sources"),tabContentId:"refSources",tabContentRef:t[2]})):C.a.createElement(ct.a,{activeKey:a,onSelect:(e,t)=>s(t)},C.a.createElement(dt.a,{eventKey:0,title:C.a.createElement(pt.a,null,"Markup"),tabContentId:"refMarkup",tabContentRef:t[0]}),C.a.createElement(dt.a,{eventKey:1,title:C.a.createElement(pt.a,null,"Sources"),tabContentId:"refSources",tabContentRef:t[1]}))),C.a.createElement(lt.a,null,C.a.createElement(x,{isPlain:!0,position:"right",dropdownItems:[C.a.createElement(O.a,{key:"edit",isDisabled:!p},C.a.createElement(E.a,{isDisabled:!p,onClick:()=>r({isOpen:!0,name:"updateCostModel"})},e("cost_models_details.action_edit"))),C.a.createElement(O.a,{key:"delete",isDisabled:!p},C.a.createElement(E.a,{isDisabled:!p,onClick:()=>r({isOpen:!0,name:"deleteCostModel"})},e("cost_models_details.action_delete")))]})))))));class _t extends C.a.Component{constructor(e){super(e),this.tabRefs=[C.a.createRef(),C.a.createRef(),C.a.createRef()],this.state={tabIndex:0}}componentDidMount(){this.props.fetchRbac(),this.props.fetchMetrics(),this.props.fetchCostModels("uuid="+this.props.match.params.uuid)}render(){const{costModels:e,metricsStatus:t,rbacStatus:a,costModelStatus:m,rbacError:u,costModelError:g,metricsError:h}=this.props;if(2!==t||2!==a||2!==m)return C.a.createElement(p.a,null);const b=h||u||g;if(b){if(null!==g){if("uuid: Enter a valid UUID."===Object(Se.a)(g))return C.a.createElement(he.a,null,e=>C.a.createElement(s.a,null,C.a.createElement(r.a,null,C.a.createElement(n.a,{icon:c.ErrorCircleOIcon}),C.a.createElement(o.a,{headingLevel:"h2",size:"lg"},e("cost_models_details.empty_state_bad_uuid.title")),C.a.createElement(i.a,null,e("cost_models_details.empty_state_bad_uuid.description",{uuid:this.props.match.params.uuid})))))}return C.a.createElement(d.a,{error:b})}const E=e[0],_=E.sources;return C.a.createElement("div",null,C.a.createElement(Et,{historyObject:this.props.history,current:E,tabRefs:this.tabRefs,tabIndex:this.state.tabIndex,onSelectTab:e=>this.setState({tabIndex:e})}),C.a.createElement("div",{style:rt.content},"OpenShift Container Platform"===E.source_type?C.a.createElement(C.a.Fragment,null,C.a.createElement(l.a,{eventKey:0,id:"refPriceList",ref:this.tabRefs[0],hidden:0!==this.state.tabIndex},C.a.createElement("div",{style:rt.costmodelsContainer},C.a.createElement(fe,{costModel:E.name,assignees:_.map(e=>e.name),current:E}))),C.a.createElement(l.a,{eventKey:1,id:"refMarkup",ref:this.tabRefs[1],hidden:1!==this.state.tabIndex},C.a.createElement(Q,{current:E})),C.a.createElement(l.a,{eventKey:2,id:"refSources",ref:this.tabRefs[2],hidden:2!==this.state.tabIndex},C.a.createElement("div",{style:rt.costmodelsContainer},C.a.createElement(Qe,{costModel:E,sources:_})))):C.a.createElement(C.a.Fragment,null,C.a.createElement(l.a,{eventKey:0,id:"refMarkup",ref:this.tabRefs[0],hidden:0!==this.state.tabIndex},C.a.createElement(Q,{current:E})),C.a.createElement(l.a,{eventKey:1,id:"refSources",ref:this.tabRefs[1],hidden:1!==this.state.tabIndex},C.a.createElement("div",{style:rt.costmodelsContainer},C.a.createElement(Qe,{costModel:E,sources:_}))))))}}t.default=Object(v.connect)(Object(P.a)(e=>({costModels:S.c.costModels(e),costModelError:S.c.error(e),costModelStatus:S.c.status(e),metricsHash:me.c.metrics(e),maxRate:me.c.maxRate(e),costTypes:me.c.costTypes(e),metricsError:me.c.metricsState(e).error,metricsStatus:me.c.status(e),rbacError:M.c.selectRbacState(e).error,rbacStatus:M.c.selectRbacState(e).status})),{fetchMetrics:me.a.fetchMetrics,fetchRbac:M.a.fetchRbac,fetchCostModels:S.a.fetchCostModels})(_t)}}]);
//# sourceMappingURL=1ea961ce19248a922749.bundle.js.map