(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{156:function(e,t,a){"use strict";a.r(t),function(e){var r=a(51),s=a(510);t.default=Object(r.hot)(e)(s.a)}.call(this,a(50)(e))},193:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return s});const r=e=>({"data-testid":e}),s={details:{historical_data_btn:"historical-data-btn",tag_lnk:"tag-lnk",show_more_btn:"show-more-btn"},export:{cancel_btn:"cancel-btn",submit_btn:"submit-btn"},login:{alert:"alert",form:"login-form",username_input:"username-input",password_input:"password-input",submit:"submit"},masthead:{masthead:"masthead",username:"username",sidebarToggle:"sidebar-toggle",logout:"logout"},providers:{add_btn:"add-btn",bucket_input:"bucket-input",cancel_btn:"cancel-btn",empty_state_add_btn:"empty_state_add-btn",name_input:"provider-name-input",resource_name_input:"provider-resource-name-input",cluster_id_input:"provider-cluster-id-input",submit_btn:"submit-btn",type_input:"provider-type-input"},sidebar:{nav:"vertical-nav",link:"vertical-nav-link",backdrop:"sidebar-backdrop"}}},256:function(e,t,a){"use strict";var r=a(694),s=a(1),n=a.n(s);let o=0;class i extends n.a.Component{constructor(){super(...arguments),this.id=`${this.props.prefix}${o++}`}render(){return this.props.children({id:this.id})}}i.defaultProps={prefix:"random-id-"};var l=a(159);const c=r.a.create({formGroup:{marginBottom:l.C.value},label:{display:"block",fontWeight:l.s.value,paddingBottom:l.I.value}}),d=({label:e,children:t})=>n.a.createElement(i,{prefix:e},({id:a})=>n.a.createElement("div",{className:Object(r.b)(c.formGroup)},n.a.createElement("label",{className:Object(r.b)(c.label),htmlFor:a},e),n.a.createElement("div",null,n.a.cloneElement(n.a.Children.only(t),{id:a}))));a.d(t,"a",function(){return d})},510:function(e,t,a){"use strict";var r=a(660),s=a(687),n=a(688),o=a(671),i=a(673),l=a(694),c=a(256),d=a(23),u=a(1),p=a.n(u),b=a(22),h=a(20),m=a(47),v=a(35),_=a(12),g=a(193),O=a(686);var k=e=>p.a.createElement(c.a,{label:e.label},p.a.createElement(O.a,Object.assign({"aria-label":`input-${e.label}`},e.testProps,{autoFocus:Boolean(e.autoFocus),isValid:!Boolean(e.error),onChange:e.onChange,placeholder:e.placeholder,value:e.value}))),P=a(159);const f=l.a.create({alert:{marginBottom:P.H.value},docs:{marginBottom:P.H.value},modal:{width:"700px"}}),j={name:(e,t)=>new RegExp("^.?").test(e)?null:t("providers.name_error"),bucket:(e,t)=>new RegExp("^[a-zA-Z0-9.\\-_]{0,255}$").test(e)?null:t("providers.bucket_error"),resourceName:(e,t)=>new RegExp("^arn:aws:").test(e)?null:t("providers.resource_name_error"),clusterID:(e,t)=>new RegExp("^.?").test(e)?null:t("providers.name_error")};t.a=Object(h.b)(Object(m.a)(e=>({isProviderModalOpen:v.c.selectOnboardingModal(e),error:_.c.selectAddProviderError(e),fetchStatus:_.c.selectAddProviderFetchStatus(e)})),{addProvider:_.a.addProvider,clearProviderFailure:_.a.clearProviderFailure,closeProvidersModal:v.a.closeModal,cancelProvidersModal:v.a.cancelOnboarding})(Object(b.c)()(class extends p.a.Component{constructor(){super(...arguments),this.defaultState={name:{id:"name",label:"providers.name_label",placeholder:"HCCM",testProps:Object(g.a)(g.b.providers.name_input),value:"",error:null,autoFocus:!0},bucket:{id:"bucket",label:"providers.bucket_label",placeholder:"cost-usage-bucket",testProps:Object(g.a)(g.b.providers.bucket_input),value:"",error:null},resourceName:{id:"resourceName",label:"providers.resource_name_label",testProps:Object(g.a)(g.b.providers.resource_name_input),placeholder:"arn:aws:iam::589173575009:role/CostManagement",value:"",error:null},clusterID:{id:"clusterID",label:"providers.cluster_id_label",testProps:Object(g.a)(g.b.providers.cluster_id_input),placeholder:"OCP-CostManagement",value:"",error:null},type:"AWS"},this.state=Object.assign({},this.defaultState),this.handleAddProvider=(()=>{switch(this.state.type){case"AWS":return this.props.addProvider({name:this.state.name.value,type:this.state.type,authentication:{provider_resource_name:this.state.resourceName.value},billing_source:{bucket:this.state.bucket.value}});case"OCP":return this.props.addProvider({name:this.state.name.value,type:this.state.type,authentication:{provider_resource_name:this.state.clusterID.value}})}}),this.handleCancel=(()=>{this.props.closeProvidersModal()}),this.handleChange=((e,t)=>a=>{const{t:r}=this.props;this.setState(()=>Object.assign({},this.state,{[t.id]:Object.assign({},t,{value:a,error:e(a,r)})})),this.props.clearProviderFailure()}),this.handleSelect=(e=>{this.setState(Object.assign({},this.defaultState,{type:e})),this.props.clearProviderFailure()}),this.attributes=(()=>{switch(this.state.type){case"AWS":return[this.state.name,this.state.bucket,this.state.resourceName];case"OCP":return[this.state.name,this.state.clusterID];default:return[]}})}componentDidUpdate(e){const{isProviderModalOpen:t}=this.props;t&&!e.isProviderModalOpen&&this.setState(Object.assign({},this.defaultState))}render(){const{t:e,error:t}=this.props,a=this.attributes().some(e=>0===e.value.trim().length),u=this.attributes().find(e=>null!==e.error),b=t&&t.response&&(t.response.data.bucket||t.response.data.billing_source),h=t&&t.response&&t.response.data.name,m=t&&t.response&&(t.response.data.provider_resource_name||t.response.data.authentication);let v=e("providers.default_error");return b?v=t.response.data.bucket||t.response.data.billing_source.bucket:h?v=t.response.data.name:m&&(v=t.response.data.provider_resource_name||t.response.data.authentication.provider_resource_name),p.a.createElement(i.a,{className:Object(l.b)(f.modal),isLarge:!0,isOpen:this.props.isProviderModalOpen,onClose:this.props.cancelProvidersModal,title:e("providers.add_source"),actions:[p.a.createElement(r.c,Object.assign({},Object(g.a)(g.b.providers.cancel_btn),{key:"cancel",onClick:this.handleCancel,variant:r.b.secondary}),e("providers.cancel")),p.a.createElement(r.c,Object.assign({},Object(g.a)(g.b.providers.submit_btn),{key:"confirm",isDisabled:a||Boolean(u)||1===this.props.fetchStatus,onClick:this.handleAddProvider,variant:r.b.primary}),e("providers.confirm"))]},Boolean(t||u)&&p.a.createElement("div",{className:Object(l.b)(f.alert)},p.a.createElement(o.b,Object.assign({},Object(g.a)(g.b.login.alert),{variant:o.a.danger,title:u&&u.error||v}))),p.a.createElement("p",{className:Object(l.b)(f.docs)},"View the"," ",p.a.createElement("a",{href:"https://koku.readthedocs.io/en/latest/providers.html#adding-an-aws-account",target:"_blank"},"Koku documentation")," ","and learn how to configure your AWS account to allow Koku access."),p.a.createElement(c.a,{label:e("providers.type_label")},p.a.createElement(n.a,{value:this.state.type,"aria-label":"provider type selector",onBlur:d.d,onFocus:d.d,onChange:this.handleSelect},p.a.createElement(s.a,{label:"AWS",value:"AWS"}),p.a.createElement(s.a,{label:"OCP",value:"OCP"}))),this.attributes().map(t=>p.a.createElement(k,{key:`attribute-field-${t.id}`,value:t.value,label:e(t.label),testProps:t.testProps,placeholder:t.placeholder,error:t.error,onChange:this.handleChange(j[t.id],t)})))}}))}}]);
//# sourceMappingURL=25198bc0965040f72a6b.bundle.js.map