(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1133:function(e,r,t){var s=t(1134);"string"==typeof s&&(s=[[e.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(693)(s,a);s.locals&&(e.exports=s.locals)},1134:function(e,r,t){var s=t(618),a=t(619);(r=s(!1)).i(a),r.push([e.i,".alert{background-color:var(--pf-global--BackgroundColor--light-100);padding-left:var(--pf-global--spacer--lg);padding-right:var(--pf-global--spacer--lg);padding-top:var(--pf-global--spacer--lg)}",""]),e.exports=r},1165:function(e,r,t){"use strict";t.r(r);t(1133);var s=t(423),a=t(347),o=t(713),c=t(1),i=t.n(c),n=t(677),d=t(153),u=t(211),v=t(287);function l(e){const r=document.cookie.match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)");return r?r.pop():""}var p=t(721);class h extends i.a.Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.fetchAwsProviders=()=>{const{awsProvidersQueryString:e,fetchProviders:r}=this.props;r("aws",e)},this.fetchAzureProviders=()=>{const{azureProvidersQueryString:e,fetchProviders:r}=this.props;r("azure",e)},this.fetchGcpProviders=()=>{const{gcpProvidersQueryString:e,fetchProviders:r}=this.props;r("gcp",e)},this.fetchOcpProviders=()=>{const{fetchProviders:e,ocpProvidersQueryString:r}=this.props;e("ocp",r)},this.getInactiveSourceNames=()=>{const{awsProviders:e,azureProviders:r,ocpProviders:t}=this.props,s=[];return e&&e.data&&e.data.map(e=>{!0!==e.active&&s.push(e.name)}),r&&r.data&&r.data.map(e=>{!0!==e.active&&s.push(e.name)}),t&&t.data&&t.data.map(e=>{!0!==e.active&&s.push(e.name)}),s},this.getInactiveSources=e=>e.length<2?null:i.a.createElement("p",null,e.map((r,t)=>t===e.length-1?r:r+", ")),this.handleOnClose=()=>{var e,r;e="cost_inactiveSources",r=l("cs_jwt"),document.cookie=`${e}=${r}; path=/`,this.forceUpdate()},this.isAlertClosed=()=>l("cs_jwt")===l("cost_inactiveSources"),this.resetAlert=()=>{l("cost_inactiveSources")&&function(e){const r=new Date;r.setTime(r.getTime()-3600),document.cookie=`${e}=; expires=${r.toUTCString()}; path=/`}("cost_inactiveSources")}}componentDidMount(){const{awsProviders:e,awsProvidersFetchStatus:r,azureProviders:t,azureProvidersFetchStatus:s,gcpProviders:a,gcpProvidersFetchStatus:o,ocpProviders:c,ocpProvidersFetchStatus:i}=this.props;e||1===r||this.fetchAwsProviders(),t||1===s||this.fetchAzureProviders(),a||1===o||this.fetchGcpProviders(),c||1===i||this.fetchOcpProviders()}componentDidUpdate(){const{awsProviders:e,awsProvidersError:r,awsProvidersFetchStatus:t,azureProviders:s,azureProvidersError:a,azureProvidersFetchStatus:o,ocpProviders:c,ocpProvidersError:i,ocpProvidersFetchStatus:n}=this.props;e||1===t||r||this.fetchAwsProviders(),s||1===o||a||this.fetchAzureProviders(),c||1===n||i||this.fetchOcpProviders()}render(){const{awsProviders:e,awsProvidersError:r,awsProvidersFetchStatus:t,azureProviders:o,azureProvidersError:c,azureProvidersFetchStatus:n,ocpProviders:d,ocpProvidersError:u,ocpProvidersFetchStatus:v,t:l}=this.props,h=Object(p.a)(),P=this.getInactiveSourceNames(),g=1===P.length?l("inactive_sources.title",{value:P[0]}):l("inactive_sources.title_multiple");return 0===P.length?(e&&2===t&&!r&&o&&2===n&&!c&&d&&2===v&&!u&&this.resetAlert(),null):this.isAlertClosed()?null:(this.resetAlert(),i.a.createElement("div",{className:"alert"},i.a.createElement(s.a,{isInline:!0,variant:"danger",title:g,actionClose:i.a.createElement(a.a,{onClose:this.handleOnClose}),actionLinks:i.a.createElement(i.a.Fragment,null,i.a.createElement("a",{href:h+"/settings/sources"},l("inactive_sources.go_to_sources")))},this.getInactiveSources(P))))}}const P=Object(u.a)((e,r)=>{const t=Object(o.a)(v.a),s=v.g.selectProviders(e,"aws",t),a=v.g.selectProvidersError(e,"aws",t),c=v.g.selectProvidersFetchStatus(e,"aws",t),i=Object(o.a)(v.b),n=v.g.selectProviders(e,"azure",i),d=v.g.selectProvidersError(e,"azure",i),u=v.g.selectProvidersFetchStatus(e,"azure",i),l=Object(o.a)(v.c),p=v.g.selectProviders(e,"gcp",l),h=v.g.selectProvidersError(e,"gcp",l),P=v.g.selectProvidersFetchStatus(e,"gcp",l),g=Object(o.a)(v.d);return{awsProviders:s,awsProvidersError:a,awsProvidersFetchStatus:c,awsProvidersQueryString:t,azureProviders:n,azureProvidersError:d,azureProvidersFetchStatus:u,azureProvidersQueryString:i,gcpProviders:p,gcpProvidersError:h,gcpProvidersFetchStatus:P,gcpProvidersQueryString:l,ocpProviders:v.g.selectProviders(e,"ocp",g),ocpProvidersError:v.g.selectProvidersError(e,"ocp",g),ocpProvidersFetchStatus:v.g.selectProvidersFetchStatus(e,"ocp",g),ocpProvidersQueryString:g}}),g={fetchProviders:v.e.fetchProviders},m=Object(n.a)()(Object(d.connect)(P,g)(h));r.default=m},1166:function(e,r,t){"use strict";t.r(r);var s=t(333),a=t(711),o=t(1),c=t.n(o),i=t(452),n=t(1135),d=t(677),u=t(36);class v extends c.a.Component{render(){const{pathname:e,t:r}=this.props;let t="cost_management";switch(e){case u.b.awsDetails:case u.b.awsDetailsBreakdown:t="no_auth_state.aws_service_name";break;case u.b.azureDetails:case u.b.azureDetailsBreakdown:t="no_auth_state.azure_service_name";break;case u.b.gcpDetails:case u.b.gcpDetailsBreakdown:t="no_auth_state.gcp_service_name";break;case u.b.costModels:t="no_auth_state.cost_models_service_name";break;case u.b.ocpDetails:case u.b.ocpDetailsBreakdown:t="no_auth_state.ocp_service_name"}return c.a.createElement(n.NotAuthorized,{serviceName:r(t)})}}const l=Object(i.a)(Object(d.a)()(v));var p=Object(i.a)(({pathname:e,title:r})=>c.a.createElement(c.a.Fragment,null,r&&c.a.createElement(a.PageHeader,null,c.a.createElement(a.PageHeaderTitle,{title:r})),c.a.createElement(s.Main,null,c.a.createElement(l,{pathname:e}))));r.default=p},1169:function(e,r,t){"use strict";t.r(r);var s=t(960),a=t(333),o=t(1),c=t.n(o),i=t(678);var n=Object(i.a)(()=>c.a.createElement(a.Main,null,c.a.createElement(s.InvalidObject,null)));r.default=n},713:function(e,r,t){"use strict";t.d(r,"a",(function(){return a}));var s=t(213);function a(e){return Object(s.stringify)(e,{encode:!1,indices:!1})}},721:function(e,r,t){"use strict";t.d(r,"a",(function(){return s}));const s=()=>{const e=window.location.pathname.split("/");e.shift();let r="";return"beta"===e[0]&&(r="/beta"),r}}}]);
//# sourceMappingURL=737af9cf1a47d28de3a4.bundle.js.map