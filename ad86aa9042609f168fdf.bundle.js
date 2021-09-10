(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[4449],{48716:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var r=a(22122),s=a(96156),c=a(81253),n=a(97522),i=a.n(n),o=a(45697),l=a.n(o),d=a(94184),m=a.n(d),u=a(72466),h=function(e){var t=e.className,a=e.children,n=(0,c.Z)(e,["className","children"]),o=m()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return i().createElement(u.Z.Consumer,null,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",t=m()((0,s.Z)({},"pf-m-".concat(e,"-200"),"dark"===e),(0,s.Z)({},"pf-m-light","light"===e));return i().createElement("section",(0,r.Z)({},n,{className:"".concat(o," ").concat(t),"widget-type":"InsightsPageHeader"}),a)}))};const p=h;h.propTypes={children:l().any.isRequired,className:l().string}},39173:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var r=a(97522),s=a.n(r),c=a(45697),n=a.n(c),i=a(94184),o=a.n(i),l=a(60485),d=function(e){var t=e.className,a=e.title,r=o()(t);return s().createElement(l.D,{headingLevel:"h1",size:"2xl",className:r,"widget-type":"InsightsPageHeaderTitle"}," ",a," ")};const m=d;d.propTypes={title:n().node.isRequired,className:n().string}},20167:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var r=a(97522),s=a.n(r),c=a(9947),n=a(38424),i=a(75106),o=a(60485),l=a(43047);const d=function(){return s().createElement(c.u,{variant:c.I.large,className:"ins-c-empty-state__unavailable pf-m-redhat-font"},s().createElement(n.k,{icon:l.ZP}),s().createElement(o.D,{headingLevel:"h5",size:"lg"},"This page is temporarily unavailable"),s().createElement(i.B,null,"Try refreshing the page. If the problem persists, contact your organization administrator or visit our",s().createElement("a",{href:"https://status.redhat.com/",target:"_blank",rel:"noopener noreferrer"}," status page")," for known outages."))}},86208:(e,t,a)=>{"use strict";a.d(t,{H:()=>s});var r=a(80129);function s(e){return(0,r.stringify)(e,{encode:!1,indices:!1})}},66785:(e,t,a)=>{"use strict";a.d(t,{T:()=>s});var r=a(80129);function s(e){return(0,r.stringify)(e,{encode:!1,indices:!1})}},69360:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>_});var r=a(66785),s=a(73466),c=a(38291),n=a(48716),i=a(39173),o=a(97522),l=a.n(o),d=a(16530),m=a(22122),u=a(81253),h=a(45697),p=a.n(h),v=a(60485),g=a(47173),f=a(9947),P=a(38424),E=a(75106),b=a(99332),w=function(){return l().createElement(l().Fragment,null,"Contact your organization administrator(s) for more information or visit ",l().createElement("a",{href:"./settings/my-user-access"},"My User Access"),"  to learn more about your permissions.")},S=function(e){var t=e.prevPageButtonText,a=e.toLandingPageText,r=e.title,s=e.actions,c=e.serviceName,n=e.icon,i=e.description,o=e.showReturnButton,d=e.className,h=(0,u.Z)(e,["prevPageButtonText","toLandingPageText","title","actions","serviceName","icon","description","showReturnButton","className"]),p=r||"You do not have access to ".concat(c);return l().createElement(f.u,(0,m.Z)({variant:f.I.full,className:"ins-c-not-authorized ".concat(d||"")},h),l().createElement(P.k,{icon:n}),l().createElement(v.D,{headingLevel:"h5",size:"lg"},p),l().createElement(E.B,null,i),s,o&&(document.referrer?l().createElement(g.zx,{variant:"primary",onClick:function(){return history.back()}},t):l().createElement(g.zx,{variant:"primary",component:"a",href:"."},a)))};S.propTypes={serviceName:function(e,t,a){if(void 0===e.title){for(var r,s=arguments.length,c=new Array(s>3?s-3:0),n=3;n<s;n++)c[n-3]=arguments[n];return(r=p().node).isRequired.apply(r,[e,t,a].concat(c))}},icon:p().func,description:p().node,showReturnButton:p().bool,className:p().string,title:p().node,actions:p().oneOfType([p().node,p().arrayOf(p().node)]),prevPageButtonText:p().node,toLandingPageText:p().node},S.defaultProps={icon:b.ZP,showReturnButton:!0,description:l().createElement(w,null),actions:null,prevPageButtonText:"Return to previous page",toLandingPageText:"Go to landing page"};const A=S;var H=a(93952),F=a(74806),N=a(57954);class y extends l().Component{render(){const{intl:e,pathname:t}=this.props;let a;switch(t){case N.Hb.awsDetails:case N.Hb.awsDetailsBreakdown:a=H.Z.NotAuthorizedStateAws;break;case N.Hb.azureDetails:case N.Hb.azureDetailsBreakdown:a=H.Z.NotAuthorizedStateAzure;break;case N.Hb.costModels:a=H.Z.NotAuthorizedStateCostModels;break;case N.Hb.gcpDetails:case N.Hb.gcpDetailsBreakdown:a=H.Z.NotAuthorizedStateGcp;break;case N.Hb.ibmDetails:case N.Hb.ibmDetailsBreakdown:a=H.Z.NotAuthorizedStateIbm;break;case N.Hb.ocpDetails:case N.Hb.ocpDetailsBreakdown:a=H.Z.NotAuthorizedStateOcp;break;case N.Hb.explorer:default:a=H.Z.CostManagement}return l().createElement(A,{serviceName:e.formatMessage(a)})}}const z=(0,F.ZP)((0,d.withRouter)(y)),Z=(0,d.withRouter)((({pathname:e,title:t})=>l().createElement(l().Fragment,null,t&&l().createElement(n.Z,null,l().createElement(i.Z,{title:t})),l().createElement(c.Z,null,l().createElement(z,{pathname:e})))));var M=a(81787),k=a(43476),D=a(94377),V=a(1723),T=a(45785);class x extends l().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState)}componentDidMount(){const{ibmUserAccessQueryString:e,userAccessQueryString:t,fetchUserAccess:a}=this.props;a("",t),a("ibm",e)}getPath(){const{location:e}=this.props,t=e.pathname.startsWith(N.Hb.costModels)?N.Hb.costModels:e.pathname,a=N._j.find((({path:e})=>e===t));return a?a.path:void 0}hasPermissions(){const{ibmUserAccess:e,userAccess:t}=this.props;if(!t)return!1;const a=(0,T.KT)(t),r=(0,T.FW)(t),s=(0,T.ot)(t),c=(0,T.Sv)(t),n=(0,T.tt)(e),i=(0,T.Rt)(t);switch(this.getPath()){case N.Hb.explorer:case N.Hb.overview:return a||r||s||c||n||i;case N.Hb.awsDetails:case N.Hb.awsDetailsBreakdown:return a;case N.Hb.azureDetails:case N.Hb.azureDetailsBreakdown:return r;case N.Hb.costModels:return s;case N.Hb.gcpDetails:case N.Hb.gcpDetailsBreakdown:return c;case N.Hb.ibmDetails:case N.Hb.ibmDetailsBreakdown:return n;case N.Hb.ocpDetails:case N.Hb.ocpDetailsBreakdown:return i;default:return!1}}render(){const{children:e=null,location:t,userAccess:a,userAccessFetchStatus:r,userAccessError:c}=this.props;return 1===r?l().createElement(s.Z,null):c?l().createElement(M.Z,null):a&&2===r&&this.hasPermissions()?e:l().createElement(Z,{pathname:t.pathname})}}const B=(0,D.X1)(((e,t)=>{const a=(0,r.T)(V.BD),s=V.JO.selectUserAccess(e,"",a),c=V.JO.selectUserAccessError(e,"",a),n=V.JO.selectUserAccessFetchStatus(e,"",a),i=(0,r.T)(V.HC);return{ibmUserAccess:V.JO.selectUserAccess(e,"ibm",i),ibmUserAccessError:V.JO.selectUserAccessError(e,"ibm",i),ibmUserAccessFetchStatus:V.JO.selectUserAccessFetchStatus(e,"ibm",i),ibmUserAccessQueryString:i,userAccess:s,userAccessError:c,userAccessFetchStatus:n,userAccessQueryString:a}})),U={fetchUserAccess:V.On.yM},_=(0,d.withRouter)((0,k.connect)(B,U)(x))},51441:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>P});var r=a(80708),s=a(86208),c=a(93952),n=a(97522),i=a.n(n),o=a(74806),l=a(43476),d=a(94377),m=a(45235),u=a(71603),h=a(17386);const p="cost_inactiveSources";class v extends i().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.fetchAwsProviders=()=>{const{awsProvidersQueryString:e,fetchProviders:t}=this.props;t("aws",e)},this.fetchAzureProviders=()=>{const{azureProvidersQueryString:e,fetchProviders:t}=this.props;t("azure",e)},this.fetchGcpProviders=()=>{const{gcpProvidersQueryString:e,fetchProviders:t}=this.props;t("gcp",e)},this.fetchIbmProviders=()=>{const{ibmProvidersQueryString:e,fetchProviders:t}=this.props;t("ibm",e)},this.fetchOcpProviders=()=>{const{fetchProviders:e,ocpProvidersQueryString:t}=this.props;e("ocp",t)},this.getInactiveSourceNames=()=>{const{awsProviders:e,azureProviders:t,gcpProviders:a,ibmProviders:r,ocpProviders:s}=this.props,c=[];return e&&e.data&&e.data.map((e=>{!0!==e.active&&c.push(e.name)})),t&&t.data&&t.data.map((e=>{!0!==e.active&&c.push(e.name)})),a&&a.data&&a.data.map((e=>{!0!==e.active&&c.push(e.name)})),r&&r.data&&r.data.map((e=>{!0!==e.active&&c.push(e.name)})),s&&s.data&&s.data.map((e=>{!0!==e.active&&c.push(e.name)})),c},this.getInactiveSources=e=>e.length<2?null:i().createElement("p",null,e.map(((t,a)=>a===e.length-1?t:`${t}, `))),this.handleOnClose=()=>{(0,u.Uj)(p,(0,u.r_)()),this.forceUpdate()},this.isAlertClosed=()=>(0,u.ej)(p)===(0,u.r_)(),this.resetAlert=()=>{(0,u.Qz)(p)}}componentDidMount(){const{awsProviders:e,awsProvidersFetchStatus:t,azureProviders:a,azureProvidersFetchStatus:r,gcpProviders:s,gcpProvidersFetchStatus:c,ibmProviders:n,ibmProvidersFetchStatus:i,ocpProviders:o,ocpProvidersFetchStatus:l}=this.props;e||1===t||this.fetchAwsProviders(),a||1===r||this.fetchAzureProviders(),s||1===c||this.fetchGcpProviders(),n||1===i||this.fetchIbmProviders(),o||1===l||this.fetchOcpProviders()}componentDidUpdate(){const{awsProviders:e,awsProvidersError:t,awsProvidersFetchStatus:a,azureProviders:r,azureProvidersError:s,azureProvidersFetchStatus:c,gcpProviders:n,gcpProvidersFetchStatus:i,ibmProviders:o,ibmProvidersFetchStatus:l,ocpProviders:d,ocpProvidersError:m,ocpProvidersFetchStatus:u}=this.props;e||1===a||t||this.fetchAwsProviders(),r||1===c||s||this.fetchAzureProviders(),n||1===i||this.fetchGcpProviders(),o||1===l||this.fetchIbmProviders(),d||1===u||m||this.fetchOcpProviders()}render(){const{awsProviders:e,awsProvidersError:t,awsProvidersFetchStatus:a,azureProviders:s,azureProvidersError:n,azureProvidersFetchStatus:o,gcpProviders:l,gcpProvidersError:d,gcpProvidersFetchStatus:m,ibmProviders:u,ibmProvidersError:p,ibmProvidersFetchStatus:v,ocpProviders:g,ocpProvidersError:f,ocpProvidersFetchStatus:P,intl:E}=this.props,b=(0,h.I)(),w=this.getInactiveSourceNames(),S=1===w.length?E.formatMessage(c.Z.InactiveSourcesTitle,{value:w[0]}):E.formatMessage(c.Z.InactiveSourcesTitleMultiplier);return 0===w.length?(e&&2===a&&!t&&s&&2===o&&!n&&l&&2===m&&!d&&u&&2===v&&!p&&g&&2===P&&!f&&this.resetAlert(),null):this.isAlertClosed()?null:(this.resetAlert(),i().createElement("div",{className:"alert"},i().createElement(r.Alert,{isInline:!0,variant:"danger",title:S,actionClose:i().createElement(r.AlertActionCloseButton,{onClose:this.handleOnClose}),actionLinks:i().createElement(i().Fragment,null,i().createElement("a",{href:`${b}/settings/sources`},E.formatMessage(c.Z.InactiveSourcesGoTo)))},this.getInactiveSources(w))))}}const g=(0,d.X1)(((e,t)=>{const a=(0,s.H)(m.JL),r=m.aX.selectProviders(e,"aws",a),c=m.aX.selectProvidersError(e,"aws",a),n=m.aX.selectProvidersFetchStatus(e,"aws",a),i=(0,s.H)(m.u5),o=m.aX.selectProviders(e,"azure",i),l=m.aX.selectProvidersError(e,"azure",i),d=m.aX.selectProvidersFetchStatus(e,"azure",i),u=(0,s.H)(m.U6),h=m.aX.selectProviders(e,"gcp",u),p=m.aX.selectProvidersError(e,"gcp",u),v=m.aX.selectProvidersFetchStatus(e,"gcp",u),g=(0,s.H)(m.t8),f=m.aX.selectProviders(e,"ibm",g),P=m.aX.selectProvidersError(e,"ibm",g),E=m.aX.selectProvidersFetchStatus(e,"ibm",g),b=(0,s.H)(m.Vp);return{awsProviders:r,awsProvidersError:c,awsProvidersFetchStatus:n,awsProvidersQueryString:a,azureProviders:o,azureProvidersError:l,azureProvidersFetchStatus:d,azureProvidersQueryString:i,gcpProviders:h,gcpProvidersError:p,gcpProvidersFetchStatus:v,gcpProvidersQueryString:u,ibmProviders:f,ibmProvidersError:P,ibmProvidersFetchStatus:E,ibmProvidersQueryString:g,ocpProviders:m.aX.selectProviders(e,"ocp",b),ocpProvidersError:m.aX.selectProvidersError(e,"ocp",b),ocpProvidersFetchStatus:m.aX.selectProvidersFetchStatus(e,"ocp",b),ocpProvidersQueryString:b}})),f={fetchProviders:m.JZ.lm},P=(0,o.ZP)((0,l.connect)(g,f)(v))},52413:(e,t,a)=>{"use strict";a.d(t,{G:()=>o});var r=a(80708),s=a(32004),c=a(93952),n=a(97522),i=a.n(n);const o=(0,a(74806).ZP)((({intl:e=s.N})=>{const t=e.formatMessage(c.Z.LoadingStateTitle),a=e.formatMessage(c.Z.LoadingStateDesc);return i().createElement(r.EmptyState,{variant:r.EmptyStateVariant.large,className:"pf-m-redhat-font"},i().createElement(r.Spinner,{size:"lg"}),i().createElement(r.Title,{headingLevel:"h5",size:"lg"},t),i().createElement(r.EmptyStateBody,null,a))}))},73466:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var r=a(38291),s=a(48716),c=a(39173),n=a(52413),i=a(97522),o=a.n(i);const l=(0,a(16530).withRouter)((({title:e})=>o().createElement(o().Fragment,null,e&&o().createElement(s.Z,null,o().createElement(c.Z,{title:e})),o().createElement(r.Z,null,o().createElement(n.G,null)))))},81787:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var r=a(38291),s=a(48716),c=a(39173),n=a(20167),i=a(97522),o=a.n(i);const l=(0,a(16530).withRouter)((({title:e})=>o().createElement(o().Fragment,null,e&&o().createElement(s.Z,null,o().createElement(c.Z,{title:e})),o().createElement(r.Z,null,o().createElement(n.Z,null)))))},76668:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m});var r=a(22122),s=a(97522),c=a.n(s);const n=function(){return c().createElement("svg",{className:"Icon404",id:"Icon404","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 131 131"},c().createElement("defs",null,c().createElement("mask",{id:"mask",x:"0",y:"0",width:"131",height:"131",maskUnits:"userSpaceOnUse"},c().createElement("g",{transform:"translate(-2.89 -3.07)"},c().createElement("g",{id:"mask-2"},c().createElement("polygon",{id:"path-1",className:"cls-1",points:"2.89 134.07 133.89 134.07 133.89 3.07 2.89 3.07 2.89 134.07"}))))),c().createElement("title",null,"404path-not-found"),c().createElement("g",{className:"cls-2"},c().createElement("g",{id:"Group"},c().createElement("g",{id:"Page-1"},c().createElement("path",{id:"Fill-1",className:"cls-3",d:"M8,95.56a1.83,1.83,0,0,0-2,1.68c-.21,1.86-.23,3.05-.23,3.1a1.88,1.88,0,0,0,1.79,2h0a1.89,1.89,0,0,0,1.82-1.91s0-1,.2-2.67A1.91,1.91,0,0,0,8,95.56",transform:"translate(-2.89 -3.07)"}),c().createElement("path",{id:"Fill-3",className:"cls-3",d:"M104.29,104.42a26.42,26.42,0,0,1-4.72,1.89,1.89,1.89,0,0,0-1.25,2.32,1.82,1.82,0,0,0,1.74,1.36,1.73,1.73,0,0,0,.5-.07,29.3,29.3,0,0,0,5.36-2.16,1.89,1.89,0,0,0,.8-2.52,1.78,1.78,0,0,0-2.43-.82",transform:"translate(-2.89 -3.07)"}),c().createElement("path",{id:"Fill-5",className:"cls-3",d:"M74.84,57.4A1.88,1.88,0,0,0,76.2,58a1.9,1.9,0,0,0,1.21-.44,1.68,1.68,0,0,0,.15-2.45,19.81,19.81,0,0,1-2.85-3.9,1.88,1.88,0,0,0-2.47-.71,1.7,1.7,0,0,0-.75,2.34,23.82,23.82,0,0,0,3.35,4.58",transform:"translate(-2.89 -3.07)"}),c().createElement("path",{id:"Fill-7",className:"cls-3",d:"M75.44,105.24a1.76,1.76,0,0,0-2.17,1.29,1.84,1.84,0,0,0,1.23,2.26A45.56,45.56,0,0,0,79.84,110a1.23,1.23,0,0,0,.27,0,1.78,1.78,0,0,0,1.74-1.56,1.82,1.82,0,0,0-1.47-2.1,40.81,40.81,0,0,1-4.94-1.09",transform:"translate(-2.89 -3.07)"}),c().createElement("path",{id:"Fill-9",className:"cls-3",d:"M92.56,107.11a49.67,49.67,0,0,1-5,0h-.07a1.8,1.8,0,0,0-1.73,1.82,1.82,1.82,0,0,0,1.67,2c1,0,2,.07,3.07.07.78,0,1.54,0,2.29-.08a1.83,1.83,0,0,0,1.63-2,1.77,1.77,0,0,0-1.83-1.77",transform:"translate(-2.89 -3.07)"}),c().createElement("path",{id:"Fill-11",className:"cls-3",d:"M65.38,100.76a1.62,1.62,0,0,0-2.41.32,2,2,0,0,0,.3,2.62,28.62,28.62,0,0,0,4.55,3.19,1.6,1.6,0,0,0,.78.21,1.69,1.69,0,0,0,1.52-1,2,2,0,0,0-.73-2.52,26,26,0,0,1-4-2.81",transform:"translate(-2.89 -3.07)"}),c().createElement("path",{id:"Fill-13",className:"cls-3",d:"M109.71,70.18a2,2,0,0,0,1.1.32,2,2,0,0,0,1.53-.69,1.57,1.57,0,0,0-.42-2.35,26.14,26.14,0,0,0-5.3-2.61,2,2,0,0,0-2.45.91,1.63,1.63,0,0,0,1,2.19,23.39,23.39,0,0,1,4.51,2.23",transform:"translate(-2.89 -3.07)"}),c().createElement("path",{id:"Fill-15",className:"cls-3",d:"M70.28,38.72a1.74,1.74,0,0,0-1.85,1.63c0,.46,0,.93,0,1.39A23,23,0,0,0,68.78,46a1.74,1.74,0,1,0,3.43-.63,18.84,18.84,0,0,1-.32-3.58c0-.39,0-.79,0-1.18a1.73,1.73,0,0,0-1.64-1.84",transform:"translate(-2.89 -3.07)"}),c().createElement("path",{id:"Fill-17",className:"cls-3",d:"M76.35,27.53a2.08,2.08,0,0,0-2.68.25,20.42,20.42,0,0,0-3.2,4.71,1.64,1.64,0,0,0,1,2.23,2,2,0,0,0,.75.14,1.93,1.93,0,0,0,1.75-1,16.54,16.54,0,0,1,2.67-3.93,1.57,1.57,0,0,0-.29-2.38",transform:"translate(-2.89 -3.07)"}),c().createElement("path",{id:"Fill-19",className:"cls-3",d:"M98.18,66.63l.26,0a1.74,1.74,0,0,0,.24-3.47,40.77,40.77,0,0,0-5.42-.39h0a1.74,1.74,0,0,0,0,3.48,37,37,0,0,1,4.94.36",transform:"translate(-2.89 -3.07)"}),c().createElement("path",{id:"Fill-21",className:"cls-3",d:"M79.88,26.19a1.92,1.92,0,0,0,1-.26,25.06,25.06,0,0,1,4.62-2.13,1.71,1.71,0,0,0,1.09-2.24,1.87,1.87,0,0,0-2.37-1A30.71,30.71,0,0,0,78.89,23a1.7,1.7,0,0,0-.59,2.41,1.9,1.9,0,0,0,1.58.82",transform:"translate(-2.89 -3.07)"}),c().createElement("path",{id:"Fill-23",className:"cls-3",d:"M86.28,65.61a1.79,1.79,0,0,0,.51.07,1.84,1.84,0,0,0,1.76-1.32,1.83,1.83,0,0,0-1.26-2.26,21.06,21.06,0,0,1-4.6-2,1.83,1.83,0,1,0-1.82,3.17,24.64,24.64,0,0,0,5.41,2.29",transform:"translate(-2.89 -3.07)"}),c().createElement("path",{id:"Fill-25",className:"cls-3",d:"M47.85,80.53A1.7,1.7,0,0,0,47.61,83a41.72,41.72,0,0,1,3,4.06,1.84,1.84,0,0,0,2.49.52,1.71,1.71,0,0,0,.55-2.4,44.19,44.19,0,0,0-3.27-4.4,1.85,1.85,0,0,0-2.54-.23",transform:"translate(-2.89 -3.07)"}),c().createElement("path",{id:"Fill-27",className:"cls-3",d:"M12.51,84.2A1.84,1.84,0,0,0,10,85a33.19,33.19,0,0,0-2.24,5.32A1.83,1.83,0,0,0,9,92.57a1.77,1.77,0,0,0,.56.08,1.83,1.83,0,0,0,1.74-1.26,29.21,29.21,0,0,1,2-4.72,1.81,1.81,0,0,0-.76-2.47",transform:"translate(-2.89 -3.07)"}),c().createElement("path",{id:"Fill-29",className:"cls-3",d:"M54.77,91a1.7,1.7,0,0,0-.54,2.4,50.54,50.54,0,0,0,3.24,4.38,1.85,1.85,0,0,0,1.41.64A1.81,1.81,0,0,0,60,98.05a1.69,1.69,0,0,0,.27-2.45,47.21,47.21,0,0,1-3-4.08A1.84,1.84,0,0,0,54.77,91",transform:"translate(-2.89 -3.07)"}),c().createElement("path",{id:"Fill-31",className:"cls-3",d:"M112.48,97.29a22.47,22.47,0,0,1-3.09,3.78,1.89,1.89,0,0,0-.09,2.56,1.64,1.64,0,0,0,1.25.58,1.67,1.67,0,0,0,1.16-.48,25.42,25.42,0,0,0,3.57-4.38,1.87,1.87,0,0,0-.43-2.52,1.64,1.64,0,0,0-2.37.46",transform:"translate(-2.89 -3.07)"}),c().createElement("path",{id:"Fill-33",className:"cls-3",d:"M118.61,84a1.84,1.84,0,0,0-2,1.65,18.6,18.6,0,0,1-.93,4.74,1.74,1.74,0,0,0,1.26,2.2,2.15,2.15,0,0,0,.56.07,1.88,1.88,0,0,0,1.82-1.24,21.56,21.56,0,0,0,1.09-5.57A1.81,1.81,0,0,0,118.61,84",transform:"translate(-2.89 -3.07)"}),c().createElement("path",{id:"Fill-35",className:"cls-3",d:"M117.66,81.1a1.88,1.88,0,0,0,.52-.08,1.85,1.85,0,0,0,1.18-2.3,21.55,21.55,0,0,0-2.43-5.45,1.73,1.73,0,0,0-2.46-.54,1.88,1.88,0,0,0-.52,2.55,17.79,17.79,0,0,1,2,4.51,1.8,1.8,0,0,0,1.7,1.31",transform:"translate(-2.89 -3.07)"}),c().createElement("path",{id:"Fill-37",className:"cls-3",d:"M39,73.46a1.84,1.84,0,0,0-2.27,1.24A1.81,1.81,0,0,0,37.93,77a18,18,0,0,1,4.54,2,1.89,1.89,0,0,0,1,.27A1.85,1.85,0,0,0,45,78.3a1.8,1.8,0,0,0-.61-2.5A22.68,22.68,0,0,0,39,73.46",transform:"translate(-2.89 -3.07)"}),c().createElement("path",{id:"Fill-39",className:"cls-3",d:"M18.61,75.53A20.68,20.68,0,0,0,14,79a1.81,1.81,0,0,0,0,2.53,1.7,1.7,0,0,0,1.26.55,1.72,1.72,0,0,0,1.22-.51,17,17,0,0,1,3.81-2.86A1.82,1.82,0,0,0,21,76.26a1.73,1.73,0,0,0-2.37-.73",transform:"translate(-2.89 -3.07)"}),c().createElement("path",{id:"Fill-41",className:"cls-3",d:"M26.51,72.76a1.77,1.77,0,0,0,.27,3.52l.28,0A26,26,0,0,1,31.92,76a1.84,1.84,0,0,0,1.79-1.72A1.76,1.76,0,0,0,32,72.44a30.51,30.51,0,0,0-5.51.32",transform:"translate(-2.89 -3.07)"}),c().createElement("path",{id:"Fill-43",className:"cls-3",d:"M92.47,22.34l.27,0q1.33-.16,2.76-.27a1.83,1.83,0,0,0,1.78-1.92,1.87,1.87,0,0,0-2.07-1.64c-1,.07-2,.17-3,.29a1.83,1.83,0,0,0-1.65,2,1.89,1.89,0,0,0,1.91,1.54",transform:"translate(-2.89 -3.07)"}),c().createElement("path",{id:"Fill-45",className:"cls-3",d:"M133,66.72H118.94V44.44h9.27a.89.89,0,1,0,0-1.78h-9.27V36.71a.9.9,0,0,0-1.8,0v5.95H94.41V37.38a.9.9,0,0,0-1.79,0v5.28H77a.89.89,0,0,0,0,1.78H92.62v13a.9.9,0,1,0,1.79,0v-13h22.73V67.68a.89.89,0,0,0,.9.89.86.86,0,0,0,.36-.07H133a.89.89,0,1,0,0-1.78",transform:"translate(-2.89 -3.07)"}),c().createElement("path",{id:"Fill-47",className:"cls-3",d:"M128.16,92.65h-4.92a1,1,0,0,0,0,1.93h4.92a1,1,0,0,0,0-1.93",transform:"translate(-2.89 -3.07)"}),c().createElement("path",{id:"Fill-49",className:"cls-3",d:"M109.87,116.68H93.2v-1.27a.9.9,0,1,0-1.8,0v1.27H69.05v-5.55a.9.9,0,1,0-1.8,0v5.55H44.82V93.89h4.27a.9.9,0,0,0,0-1.8H44.82V83.92a.9.9,0,1,0-1.79,0v8.17H20.3V84.37a.9.9,0,1,0-1.8,0v7.72H13.42a.9.9,0,1,0,0,1.8H18.5v17.39a.9.9,0,0,0,1.8,0V93.89H43v22.79H26.28a.9.9,0,1,0,0,1.8H43v9.9a.9.9,0,1,0,1.79,0v-9.9H67.25v14.69a.9.9,0,1,0,1.8,0V118.48H91.4v10.2a.9.9,0,1,0,1.8,0v-10.2h16.67a.9.9,0,0,0,0-1.8",transform:"translate(-2.89 -3.07)"}),c().createElement("g",{className:"cls-4"},c().createElement("path",{id:"Fill-51",className:"cls-3",d:"M20.55,67.5H43.31V45H20.55Zm-1.79,3a.9.9,0,1,0,1.79,0V69.3H43.31v2.1a.9.9,0,0,0,1.8,0V69.3H67.56V92.38H63.3a.9.9,0,1,0,0,1.79h4.26v3.3a.9.9,0,1,0,1.8,0v-3.3h23v9.14a.9.9,0,0,0,1.8,0V94.17H111.8a.9.9,0,1,0,0-1.79H94.21V71a.9.9,0,0,0-1.8,0V92.38h-23V69.3h12.8a.9.9,0,0,0,0-1.8H69.36v-10a.9.9,0,0,0-1.8,0v10H45.11V45h18a.9.9,0,1,0,0-1.8h-18V20.46H67.56V26a.9.9,0,1,0,1.8,0V20.46h6.06a.9.9,0,1,0,0-1.8H69.36V4a.9.9,0,0,0-1.8,0V18.66H45.11v-10a.9.9,0,1,0-1.8,0v10H26.24a.9.9,0,0,0,0,1.8H43.31V43.23H20.55V26.6a.9.9,0,1,0-1.79,0V43.23H8.88a.9.9,0,0,0,0,1.8h9.88V67.5h-15a.9.9,0,1,0,0,1.8h15Z",transform:"translate(-2.89 -3.07)"})),c().createElement("g",{className:"cls-4"},c().createElement("path",{id:"Fill-53",className:"cls-3",d:"M117.51,104.21a.94.94,0,0,0-1,.92V111a1,1,0,0,0,1.93,0v-5.87a1,1,0,0,0-1-.92",transform:"translate(-2.89 -3.07)"})),c().createElement("g",{className:"cls-4"},c().createElement("path",{id:"Fill-54",className:"cls-3",d:"M106.16,7.75a13.31,13.31,0,0,1,3.35-.41,6.07,6.07,0,0,1,4.09,1.23A4.42,4.42,0,0,1,115,12.09a5.92,5.92,0,0,1-.77,3.12,20.1,20.1,0,0,1-3.72,3.86,11.51,11.51,0,0,0-2.92,3.55,10.22,10.22,0,0,0-.78,4.29v1.21h2.8v-.74a7,7,0,0,1,.71-3.39,13.86,13.86,0,0,1,2.9-3.19,30,30,0,0,0,3.56-3.55,8.29,8.29,0,0,0,1.25-2.34,8.66,8.66,0,0,0,.43-2.87,7.61,7.61,0,0,0-2.3-5.91A9.3,9.3,0,0,0,109.72,4a17.8,17.8,0,0,0-8.58,2.21l1.28,3a17.6,17.6,0,0,1,3.74-1.51",transform:"translate(-2.89 -3.07)"})),c().createElement("g",{className:"cls-4"},c().createElement("path",{id:"Fill-55",className:"cls-3",d:"M108.35,31c-1.59,0-2.39,1-2.39,2.9a3,3,0,0,0,.67,2.2,2.36,2.36,0,0,0,1.72.68,2.21,2.21,0,0,0,1.78-.76,3.16,3.16,0,0,0,.64-2.12,3.27,3.27,0,0,0-.63-2.16,2.22,2.22,0,0,0-1.79-.74",transform:"translate(-2.89 -3.07)"}))))))};var i=a(60485),o=a(47173);const l=function(e){var t=(0,r.Z)({},e);return c().createElement("section",(0,r.Z)({},t,{className:"pf-l-page__main-section pf-c-page__main-section ins-c-component_invalid-componet"}),c().createElement(i.D,{headingLevel:"h1",size:"3xl"},"We lost that page"),c().createElement(n,null),c().createElement(i.D,{headingLevel:"h1",size:"xl",className:"ins-c-text__sorry"},"Let's find you a new one. Try a new search or return home."),c().createElement(o.zx,{variant:"link",component:"a",href:"".concat(window.location.origin).concat("beta"===window.location.pathname.split("/")[1]?"/beta":"")},"Return to homepage"))};var d=a(38291);const m=(0,a(16530).withRouter)((()=>c().createElement(d.Z,null,c().createElement(l,null))))},71603:(e,t,a)=>{"use strict";function r(e){if(s(e)){const t=new Date;t.setTime(t.getTime()-3600),document.cookie=`${e}=; expires=${t.toUTCString()}; path=/`}}function s(e){const t=document.cookie.match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)");return t?t.pop():""}function c(){const e=s("cs_jwt");return e.substring(e.length-20,e.length)}function n(e,t){document.cookie=`${e}=${t}; path=/`}a.d(t,{Qz:()=>r,ej:()=>s,r_:()=>c,Uj:()=>n})},17386:(e,t,a)=>{"use strict";a.d(t,{I:()=>r});const r=()=>{const e=window.location.pathname.split("/");e.shift();let t="";return"beta"===e[0]&&(t="/beta"),t}},45785:(e,t,a)=>{"use strict";a.d(t,{KT:()=>c,n9:()=>n,FW:()=>i,hn:()=>o,ot:()=>l,Sv:()=>d,FE:()=>m,tt:()=>u,Es:()=>h,Rt:()=>p,mn:()=>v});const r=(e,t)=>{let a=!1;if(e&&Array.isArray(e.data)){const r=e.data.find((e=>e.type===t));a=r&&r.access}else a=e&&!0===e.data;return a},s=(e,t)=>{let a=!1;return 2===t&&(a=void 0!==e&&void 0!==e.meta&&e.meta.count>0),a},c=e=>r(e,"aws"),n=(e,t,a)=>c(e)&&s(t,a),i=e=>r(e,"azure"),o=(e,t,a)=>i(e)&&s(t,a),l=e=>r(e,"cost_model"),d=e=>r(e,"gcp"),m=(e,t,a)=>r(e,"gcp")&&s(t,a),u=e=>d(e),h=(e,t,a)=>u(e)&&s(t,a),p=e=>r(e,"ocp"),v=(e,t,a)=>p(e)&&s(t,a)}}]);
//# sourceMappingURL=ad86aa9042609f168fdf.bundle.js.map