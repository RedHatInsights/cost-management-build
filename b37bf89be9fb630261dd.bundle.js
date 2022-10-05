"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[449],{99699:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(92950),n=a.n(r),l=a(94184),s=a.n(l),c=a(53754),o=function(){return o=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)};const i=function(e){var t=e.className,a=e.children,r=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["className","children"]),l=s()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return n().createElement(c.Z.Consumer,null,(function(e){var t,c;void 0===e&&(e="light");var i=s()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((c={})["pf-m-light"]="light"===e,c));return n().createElement("section",o({},r,{className:"".concat(l," ").concat(i),"widget-type":"InsightsPageHeader"}),a)}))}},39173:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(92950),n=a.n(r),l=a(94184),s=a.n(l),c=a(65834);const o=function(e){var t=e.className,a=e.title,r=s()(t);return n().createElement(c.Title,{headingLevel:"h1",size:"2xl",className:r,"widget-type":"InsightsPageHeaderTitle"},a)}},23683:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(92950),n=a.n(r),l=a(65834),s=a(82197);const c=function(){return n().createElement(l.EmptyState,{variant:l.EmptyStateVariant.large,className:"ins-c-empty-state__unavailable pf-m-redhat-font"},n().createElement(l.EmptyStateIcon,{icon:s.ExclamationCircleIcon}),n().createElement(l.Title,{headingLevel:"h5",size:"lg"},"This page is temporarily unavailable"),n().createElement(l.EmptyStateBody,null,"Try refreshing the page. If the problem persists, contact your organization administrator or visit our",n().createElement("a",{href:"https://status.redhat.com/",target:"_blank",rel:"noopener noreferrer"}," ","status page")," ","for known outages."))}},86208:(e,t,a)=>{a.d(t,{H:()=>n});var r=a(80129);function n(e){return(0,r.stringify)(e,{encode:!1,indices:!1})}},66785:(e,t,a)=>{a.d(t,{T:()=>n});var r=a(80129);function n(e){return(0,r.stringify)(e,{encode:!1,indices:!1})}},87018:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var r=a(65834),n=a(86208),l=a(93952),s=a(92950),c=a.n(s),o=a(74806),i=a(65048),m=a(94377),d=a(45235),u=a(37530),p=a(64797);class h extends c().Component{constructor(){super(...arguments),this.getInactiveSourceNames=()=>{const{providers:e}=this.props,t=[];return e&&e.data&&e.data.map((e=>{!0!==e.active&&t.push(e.name)})),t},this.getInactiveSources=e=>e.length<2?null:c().createElement("p",null,e.map(((t,a)=>a===e.length-1?t:`${t}, `))),this.handleOnClose=()=>{(0,u.kT)("true"),this.forceUpdate()},this.isAlertClosed=()=>(0,u.c3)()}render(){const{providers:e,providersError:t,providersFetchStatus:a,intl:n}=this.props,s=(0,p.I)(),o=this.getInactiveSourceNames(),i=1===o.length?n.formatMessage(l.Z.inactiveSourcesTitle,{value:o[0]}):n.formatMessage(l.Z.inactiveSourcesTitleMultiplier);return 0===o.length?(e&&2===a&&!t&&(0,u.oH)(),null):this.isAlertClosed()?null:((0,u.FP)(),c().createElement("div",{className:"alert"},c().createElement(r.Alert,{isInline:!0,variant:"danger",title:i,actionClose:c().createElement(r.AlertActionCloseButton,{onClose:this.handleOnClose}),actionLinks:c().createElement(c().Fragment,null,c().createElement("a",{href:`${s}/settings/sources`},n.formatMessage(l.Z.inactiveSourcesGoTo)))},this.getInactiveSources(o))))}}const E=(0,m.X1)(((e,t)=>{const a=(0,n.H)(d.NT);return{providers:d.aX.selectProviders(e,"all",a),providersError:d.aX.selectProvidersError(e,"all",a),providersFetchStatus:d.aX.selectProvidersFetchStatus(e,"all",a)}})),v=(0,o.ZP)((0,i.connect)(E,void 0)(h))},94971:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var r=a(66785),n=a(92950),l=a.n(n),s=a(65048),c=a(5977),o=a(98503),i=a(96464),m=a(55189),d=a(99699),u=a(39173),p=a(65834),h=a(82197),E=function(){return E=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},E.apply(this,arguments)},v=function(){return l().createElement(l().Fragment,null,"Contact your organization administrator(s) for more information or visit ",l().createElement("a",{href:"./settings/my-user-access"},"My User Access"),"  to learn more about your permissions.")};const f=function(e){var t=e.prevPageButtonText,a=void 0===t?"Return to previous page":t,r=e.toLandingPageText,n=void 0===r?"Go to landing page":r,s=e.title,c=e.actions,o=void 0===c?null:c,i=e.serviceName,m=e.icon,d=void 0===m?h.LockIcon:m,u=e.description,f=void 0===u?l().createElement(v,null):u,g=e.showReturnButton,b=void 0===g||g,y=e.className,H=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["prevPageButtonText","toLandingPageText","title","actions","serviceName","icon","description","showReturnButton","className"]),N=s||"You do not have access to ".concat(i);return l().createElement(p.EmptyState,E({variant:p.EmptyStateVariant.full,className:"ins-c-not-authorized ".concat(y||"")},H),l().createElement(p.EmptyStateIcon,{icon:d}),l().createElement(p.Title,{headingLevel:"h5",size:"lg"},N),l().createElement(p.EmptyStateBody,null,f),o,b&&(document.referrer?l().createElement(p.Button,{variant:"primary",onClick:function(){return history.back()}},a):l().createElement(p.Button,{variant:"primary",component:"a",href:"."},n)))};var g=a(93952),b=a(74806);class y extends l().Component{render(){const{intl:e,pathname:t}=this.props;let a;switch(t){case o.Hb.awsDetails:case o.Hb.awsDetailsBreakdown:a=g.Z.notAuthorizedStateAws;break;case o.Hb.azureDetails:case o.Hb.azureDetailsBreakdown:a=g.Z.notAuthorizedStateAzure;break;case o.Hb.costModels:a=g.Z.notAuthorizedStateCostModels;break;case o.Hb.gcpDetails:case o.Hb.gcpDetailsBreakdown:a=g.Z.notAuthorizedStateGcp;break;case o.Hb.ibmDetails:case o.Hb.ibmDetailsBreakdown:a=g.Z.notAuthorizedStateIbm;break;case o.Hb.ociDetails:case o.Hb.ociDetailsBreakdown:a=g.Z.notAuthorizedStateOci;break;case o.Hb.ocpDetails:case o.Hb.ocpDetailsBreakdown:a=g.Z.notAuthorizedStateOcp;break;case o.Hb.explorer:default:a=g.Z.costManagement}return l().createElement(f,{serviceName:e.formatMessage(a)})}}const H=(0,b.ZP)((0,c.EN)(y)),N=(0,c.EN)((({pathname:e,title:t})=>l().createElement(l().Fragment,null,t&&l().createElement(d.Z,null,l().createElement(u.Z,{title:t})),l().createElement(m.Z,null,l().createElement(H,{pathname:e})))));var w=a(20963),F=a(94377),A=a(21084),O=a(1723),S=a(45785);const M=(0,F.X1)(((e,t)=>{const a=(0,r.T)(O.QR),n=O.JO.selectUserAccess(e,"all",a),l=O.JO.selectUserAccessError(e,"all",a),s=O.JO.selectUserAccessFetchStatus(e,"all",a);return{isIbmFeatureEnabled:A.iJ.selectIsIbmFeatureEnabled(e),isOciFeatureEnabled:A.iJ.selectIsOciFeatureEnabled(e),userAccess:n,userAccessError:l,userAccessFetchStatus:s,userAccessQueryString:a}})),k=(0,c.EN)((0,s.connect)(M,void 0)((({children:e=null,isIbmFeatureEnabled:t,isOciFeatureEnabled:a,location:r,userAccess:n,userAccessError:s,userAccessFetchStatus:c})=>{let m=l().createElement(N,{pathname:r.pathname});return 1===c?m=l().createElement(i.Z,null):s?m=l().createElement(w.Z,null):(()=>{if(!n||2!==c)return!1;const e=(0,S.KT)(n),l=(0,S.FW)(n),s=(0,S.Xd)(n)&&a,i=(0,S.ot)(n),m=(0,S.Sv)(n),d=(0,S.tt)(n)&&t,u=(0,S.Rt)(n);switch((()=>{const e=r.pathname&&r.pathname.startsWith(o.Hb.costModels)?o.Hb.costModels:r.pathname,t=o._j.find((({path:t})=>t===e));return t?t.path:void 0})()){case o.Hb.explorer:case o.Hb.overview:return e||l||i||m||d||u||s;case o.Hb.awsDetails:case o.Hb.awsDetailsBreakdown:return e;case o.Hb.azureDetails:case o.Hb.azureDetailsBreakdown:return l;case o.Hb.costModels:return i;case o.Hb.gcpDetails:case o.Hb.gcpDetailsBreakdown:return m;case o.Hb.ociDetails:case o.Hb.ociDetailsBreakdown:return s;case o.Hb.ibmDetails:case o.Hb.ibmDetailsBreakdown:return d;case o.Hb.ocpDetails:case o.Hb.ocpDetailsBreakdown:return u;default:return!1}})()&&(m=l().createElement(l().Fragment,null,e)),m})))},87339:(e,t,a)=>{a.d(t,{G:()=>o});var r=a(65834),n=a(32004),l=a(93952),s=a(92950),c=a.n(s);const o=(0,a(74806).ZP)((({intl:e=n.N})=>{const t=e.formatMessage(l.Z.loadingStateTitle),a=e.formatMessage(l.Z.loadingStateDesc);return c().createElement(r.EmptyState,{variant:r.EmptyStateVariant.large,className:"pf-m-redhat-font"},c().createElement(r.Spinner,{size:"lg"}),c().createElement(r.Title,{headingLevel:"h5",size:"lg"},t),c().createElement(r.EmptyStateBody,null,a))}))},96464:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(55189),n=a(99699),l=a(39173),s=a(92950),c=a.n(s),o=a(5977),i=a(87339);const m=(0,o.EN)((({title:e})=>c().createElement(c().Fragment,null,e&&c().createElement(n.Z,null,c().createElement(l.Z,{title:e})),c().createElement(r.Z,null,c().createElement(i.G,null)))))},20963:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(55189),n=a(99699),l=a(39173),s=a(23683),c=a(92950),o=a.n(c);const i=(0,a(5977).EN)((({title:e})=>o().createElement(o().Fragment,null,e&&o().createElement(n.Z,null,o().createElement(l.Z,{title:e})),o().createElement(r.Z,null,o().createElement(s.Z,null)))))},46429:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var r=a(92950),n=a.n(r);const l=function(){return n().createElement("svg",{className:"Icon404",id:"Icon404","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 131 131"},n().createElement("defs",null,n().createElement("mask",{id:"mask",x:"0",y:"0",width:"131",height:"131",maskUnits:"userSpaceOnUse"},n().createElement("g",{transform:"translate(-2.89 -3.07)"},n().createElement("g",{id:"mask-2"},n().createElement("polygon",{id:"path-1",className:"cls-1",points:"2.89 134.07 133.89 134.07 133.89 3.07 2.89 3.07 2.89 134.07"}))))),n().createElement("title",null,"404path-not-found"),n().createElement("g",{className:"cls-2"},n().createElement("g",{id:"Group"},n().createElement("g",{id:"Page-1"},n().createElement("path",{id:"Fill-1",className:"cls-3",d:"M8,95.56a1.83,1.83,0,0,0-2,1.68c-.21,1.86-.23,3.05-.23,3.1a1.88,1.88,0,0,0,1.79,2h0a1.89,1.89,0,0,0,1.82-1.91s0-1,.2-2.67A1.91,1.91,0,0,0,8,95.56",transform:"translate(-2.89 -3.07)"}),n().createElement("path",{id:"Fill-3",className:"cls-3",d:"M104.29,104.42a26.42,26.42,0,0,1-4.72,1.89,1.89,1.89,0,0,0-1.25,2.32,1.82,1.82,0,0,0,1.74,1.36,1.73,1.73,0,0,0,.5-.07,29.3,29.3,0,0,0,5.36-2.16,1.89,1.89,0,0,0,.8-2.52,1.78,1.78,0,0,0-2.43-.82",transform:"translate(-2.89 -3.07)"}),n().createElement("path",{id:"Fill-5",className:"cls-3",d:"M74.84,57.4A1.88,1.88,0,0,0,76.2,58a1.9,1.9,0,0,0,1.21-.44,1.68,1.68,0,0,0,.15-2.45,19.81,19.81,0,0,1-2.85-3.9,1.88,1.88,0,0,0-2.47-.71,1.7,1.7,0,0,0-.75,2.34,23.82,23.82,0,0,0,3.35,4.58",transform:"translate(-2.89 -3.07)"}),n().createElement("path",{id:"Fill-7",className:"cls-3",d:"M75.44,105.24a1.76,1.76,0,0,0-2.17,1.29,1.84,1.84,0,0,0,1.23,2.26A45.56,45.56,0,0,0,79.84,110a1.23,1.23,0,0,0,.27,0,1.78,1.78,0,0,0,1.74-1.56,1.82,1.82,0,0,0-1.47-2.1,40.81,40.81,0,0,1-4.94-1.09",transform:"translate(-2.89 -3.07)"}),n().createElement("path",{id:"Fill-9",className:"cls-3",d:"M92.56,107.11a49.67,49.67,0,0,1-5,0h-.07a1.8,1.8,0,0,0-1.73,1.82,1.82,1.82,0,0,0,1.67,2c1,0,2,.07,3.07.07.78,0,1.54,0,2.29-.08a1.83,1.83,0,0,0,1.63-2,1.77,1.77,0,0,0-1.83-1.77",transform:"translate(-2.89 -3.07)"}),n().createElement("path",{id:"Fill-11",className:"cls-3",d:"M65.38,100.76a1.62,1.62,0,0,0-2.41.32,2,2,0,0,0,.3,2.62,28.62,28.62,0,0,0,4.55,3.19,1.6,1.6,0,0,0,.78.21,1.69,1.69,0,0,0,1.52-1,2,2,0,0,0-.73-2.52,26,26,0,0,1-4-2.81",transform:"translate(-2.89 -3.07)"}),n().createElement("path",{id:"Fill-13",className:"cls-3",d:"M109.71,70.18a2,2,0,0,0,1.1.32,2,2,0,0,0,1.53-.69,1.57,1.57,0,0,0-.42-2.35,26.14,26.14,0,0,0-5.3-2.61,2,2,0,0,0-2.45.91,1.63,1.63,0,0,0,1,2.19,23.39,23.39,0,0,1,4.51,2.23",transform:"translate(-2.89 -3.07)"}),n().createElement("path",{id:"Fill-15",className:"cls-3",d:"M70.28,38.72a1.74,1.74,0,0,0-1.85,1.63c0,.46,0,.93,0,1.39A23,23,0,0,0,68.78,46a1.74,1.74,0,1,0,3.43-.63,18.84,18.84,0,0,1-.32-3.58c0-.39,0-.79,0-1.18a1.73,1.73,0,0,0-1.64-1.84",transform:"translate(-2.89 -3.07)"}),n().createElement("path",{id:"Fill-17",className:"cls-3",d:"M76.35,27.53a2.08,2.08,0,0,0-2.68.25,20.42,20.42,0,0,0-3.2,4.71,1.64,1.64,0,0,0,1,2.23,2,2,0,0,0,.75.14,1.93,1.93,0,0,0,1.75-1,16.54,16.54,0,0,1,2.67-3.93,1.57,1.57,0,0,0-.29-2.38",transform:"translate(-2.89 -3.07)"}),n().createElement("path",{id:"Fill-19",className:"cls-3",d:"M98.18,66.63l.26,0a1.74,1.74,0,0,0,.24-3.47,40.77,40.77,0,0,0-5.42-.39h0a1.74,1.74,0,0,0,0,3.48,37,37,0,0,1,4.94.36",transform:"translate(-2.89 -3.07)"}),n().createElement("path",{id:"Fill-21",className:"cls-3",d:"M79.88,26.19a1.92,1.92,0,0,0,1-.26,25.06,25.06,0,0,1,4.62-2.13,1.71,1.71,0,0,0,1.09-2.24,1.87,1.87,0,0,0-2.37-1A30.71,30.71,0,0,0,78.89,23a1.7,1.7,0,0,0-.59,2.41,1.9,1.9,0,0,0,1.58.82",transform:"translate(-2.89 -3.07)"}),n().createElement("path",{id:"Fill-23",className:"cls-3",d:"M86.28,65.61a1.79,1.79,0,0,0,.51.07,1.84,1.84,0,0,0,1.76-1.32,1.83,1.83,0,0,0-1.26-2.26,21.06,21.06,0,0,1-4.6-2,1.83,1.83,0,1,0-1.82,3.17,24.64,24.64,0,0,0,5.41,2.29",transform:"translate(-2.89 -3.07)"}),n().createElement("path",{id:"Fill-25",className:"cls-3",d:"M47.85,80.53A1.7,1.7,0,0,0,47.61,83a41.72,41.72,0,0,1,3,4.06,1.84,1.84,0,0,0,2.49.52,1.71,1.71,0,0,0,.55-2.4,44.19,44.19,0,0,0-3.27-4.4,1.85,1.85,0,0,0-2.54-.23",transform:"translate(-2.89 -3.07)"}),n().createElement("path",{id:"Fill-27",className:"cls-3",d:"M12.51,84.2A1.84,1.84,0,0,0,10,85a33.19,33.19,0,0,0-2.24,5.32A1.83,1.83,0,0,0,9,92.57a1.77,1.77,0,0,0,.56.08,1.83,1.83,0,0,0,1.74-1.26,29.21,29.21,0,0,1,2-4.72,1.81,1.81,0,0,0-.76-2.47",transform:"translate(-2.89 -3.07)"}),n().createElement("path",{id:"Fill-29",className:"cls-3",d:"M54.77,91a1.7,1.7,0,0,0-.54,2.4,50.54,50.54,0,0,0,3.24,4.38,1.85,1.85,0,0,0,1.41.64A1.81,1.81,0,0,0,60,98.05a1.69,1.69,0,0,0,.27-2.45,47.21,47.21,0,0,1-3-4.08A1.84,1.84,0,0,0,54.77,91",transform:"translate(-2.89 -3.07)"}),n().createElement("path",{id:"Fill-31",className:"cls-3",d:"M112.48,97.29a22.47,22.47,0,0,1-3.09,3.78,1.89,1.89,0,0,0-.09,2.56,1.64,1.64,0,0,0,1.25.58,1.67,1.67,0,0,0,1.16-.48,25.42,25.42,0,0,0,3.57-4.38,1.87,1.87,0,0,0-.43-2.52,1.64,1.64,0,0,0-2.37.46",transform:"translate(-2.89 -3.07)"}),n().createElement("path",{id:"Fill-33",className:"cls-3",d:"M118.61,84a1.84,1.84,0,0,0-2,1.65,18.6,18.6,0,0,1-.93,4.74,1.74,1.74,0,0,0,1.26,2.2,2.15,2.15,0,0,0,.56.07,1.88,1.88,0,0,0,1.82-1.24,21.56,21.56,0,0,0,1.09-5.57A1.81,1.81,0,0,0,118.61,84",transform:"translate(-2.89 -3.07)"}),n().createElement("path",{id:"Fill-35",className:"cls-3",d:"M117.66,81.1a1.88,1.88,0,0,0,.52-.08,1.85,1.85,0,0,0,1.18-2.3,21.55,21.55,0,0,0-2.43-5.45,1.73,1.73,0,0,0-2.46-.54,1.88,1.88,0,0,0-.52,2.55,17.79,17.79,0,0,1,2,4.51,1.8,1.8,0,0,0,1.7,1.31",transform:"translate(-2.89 -3.07)"}),n().createElement("path",{id:"Fill-37",className:"cls-3",d:"M39,73.46a1.84,1.84,0,0,0-2.27,1.24A1.81,1.81,0,0,0,37.93,77a18,18,0,0,1,4.54,2,1.89,1.89,0,0,0,1,.27A1.85,1.85,0,0,0,45,78.3a1.8,1.8,0,0,0-.61-2.5A22.68,22.68,0,0,0,39,73.46",transform:"translate(-2.89 -3.07)"}),n().createElement("path",{id:"Fill-39",className:"cls-3",d:"M18.61,75.53A20.68,20.68,0,0,0,14,79a1.81,1.81,0,0,0,0,2.53,1.7,1.7,0,0,0,1.26.55,1.72,1.72,0,0,0,1.22-.51,17,17,0,0,1,3.81-2.86A1.82,1.82,0,0,0,21,76.26a1.73,1.73,0,0,0-2.37-.73",transform:"translate(-2.89 -3.07)"}),n().createElement("path",{id:"Fill-41",className:"cls-3",d:"M26.51,72.76a1.77,1.77,0,0,0,.27,3.52l.28,0A26,26,0,0,1,31.92,76a1.84,1.84,0,0,0,1.79-1.72A1.76,1.76,0,0,0,32,72.44a30.51,30.51,0,0,0-5.51.32",transform:"translate(-2.89 -3.07)"}),n().createElement("path",{id:"Fill-43",className:"cls-3",d:"M92.47,22.34l.27,0q1.33-.16,2.76-.27a1.83,1.83,0,0,0,1.78-1.92,1.87,1.87,0,0,0-2.07-1.64c-1,.07-2,.17-3,.29a1.83,1.83,0,0,0-1.65,2,1.89,1.89,0,0,0,1.91,1.54",transform:"translate(-2.89 -3.07)"}),n().createElement("path",{id:"Fill-45",className:"cls-3",d:"M133,66.72H118.94V44.44h9.27a.89.89,0,1,0,0-1.78h-9.27V36.71a.9.9,0,0,0-1.8,0v5.95H94.41V37.38a.9.9,0,0,0-1.79,0v5.28H77a.89.89,0,0,0,0,1.78H92.62v13a.9.9,0,1,0,1.79,0v-13h22.73V67.68a.89.89,0,0,0,.9.89.86.86,0,0,0,.36-.07H133a.89.89,0,1,0,0-1.78",transform:"translate(-2.89 -3.07)"}),n().createElement("path",{id:"Fill-47",className:"cls-3",d:"M128.16,92.65h-4.92a1,1,0,0,0,0,1.93h4.92a1,1,0,0,0,0-1.93",transform:"translate(-2.89 -3.07)"}),n().createElement("path",{id:"Fill-49",className:"cls-3",d:"M109.87,116.68H93.2v-1.27a.9.9,0,1,0-1.8,0v1.27H69.05v-5.55a.9.9,0,1,0-1.8,0v5.55H44.82V93.89h4.27a.9.9,0,0,0,0-1.8H44.82V83.92a.9.9,0,1,0-1.79,0v8.17H20.3V84.37a.9.9,0,1,0-1.8,0v7.72H13.42a.9.9,0,1,0,0,1.8H18.5v17.39a.9.9,0,0,0,1.8,0V93.89H43v22.79H26.28a.9.9,0,1,0,0,1.8H43v9.9a.9.9,0,1,0,1.79,0v-9.9H67.25v14.69a.9.9,0,1,0,1.8,0V118.48H91.4v10.2a.9.9,0,1,0,1.8,0v-10.2h16.67a.9.9,0,0,0,0-1.8",transform:"translate(-2.89 -3.07)"}),n().createElement("g",{className:"cls-4"},n().createElement("path",{id:"Fill-51",className:"cls-3",d:"M20.55,67.5H43.31V45H20.55Zm-1.79,3a.9.9,0,1,0,1.79,0V69.3H43.31v2.1a.9.9,0,0,0,1.8,0V69.3H67.56V92.38H63.3a.9.9,0,1,0,0,1.79h4.26v3.3a.9.9,0,1,0,1.8,0v-3.3h23v9.14a.9.9,0,0,0,1.8,0V94.17H111.8a.9.9,0,1,0,0-1.79H94.21V71a.9.9,0,0,0-1.8,0V92.38h-23V69.3h12.8a.9.9,0,0,0,0-1.8H69.36v-10a.9.9,0,0,0-1.8,0v10H45.11V45h18a.9.9,0,1,0,0-1.8h-18V20.46H67.56V26a.9.9,0,1,0,1.8,0V20.46h6.06a.9.9,0,1,0,0-1.8H69.36V4a.9.9,0,0,0-1.8,0V18.66H45.11v-10a.9.9,0,1,0-1.8,0v10H26.24a.9.9,0,0,0,0,1.8H43.31V43.23H20.55V26.6a.9.9,0,1,0-1.79,0V43.23H8.88a.9.9,0,0,0,0,1.8h9.88V67.5h-15a.9.9,0,1,0,0,1.8h15Z",transform:"translate(-2.89 -3.07)"})),n().createElement("g",{className:"cls-4"},n().createElement("path",{id:"Fill-53",className:"cls-3",d:"M117.51,104.21a.94.94,0,0,0-1,.92V111a1,1,0,0,0,1.93,0v-5.87a1,1,0,0,0-1-.92",transform:"translate(-2.89 -3.07)"})),n().createElement("g",{className:"cls-4"},n().createElement("path",{id:"Fill-54",className:"cls-3",d:"M106.16,7.75a13.31,13.31,0,0,1,3.35-.41,6.07,6.07,0,0,1,4.09,1.23A4.42,4.42,0,0,1,115,12.09a5.92,5.92,0,0,1-.77,3.12,20.1,20.1,0,0,1-3.72,3.86,11.51,11.51,0,0,0-2.92,3.55,10.22,10.22,0,0,0-.78,4.29v1.21h2.8v-.74a7,7,0,0,1,.71-3.39,13.86,13.86,0,0,1,2.9-3.19,30,30,0,0,0,3.56-3.55,8.29,8.29,0,0,0,1.25-2.34,8.66,8.66,0,0,0,.43-2.87,7.61,7.61,0,0,0-2.3-5.91A9.3,9.3,0,0,0,109.72,4a17.8,17.8,0,0,0-8.58,2.21l1.28,3a17.6,17.6,0,0,1,3.74-1.51",transform:"translate(-2.89 -3.07)"})),n().createElement("g",{className:"cls-4"},n().createElement("path",{id:"Fill-55",className:"cls-3",d:"M108.35,31c-1.59,0-2.39,1-2.39,2.9a3,3,0,0,0,.67,2.2,2.36,2.36,0,0,0,1.72.68,2.21,2.21,0,0,0,1.78-.76,3.16,3.16,0,0,0,.64-2.12,3.27,3.27,0,0,0-.63-2.16,2.22,2.22,0,0,0-1.79-.74",transform:"translate(-2.89 -3.07)"}))))))};var s=a(65834),c=function(){return c=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},c.apply(this,arguments)};const o=function(e){var t=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,[]);return n().createElement("section",c({},t,{className:"pf-l-page__main-section pf-c-page__main-section ins-c-component_invalid-component"}),n().createElement(s.Title,{headingLevel:"h1",size:"3xl"},"We lost that page"),n().createElement(l,null),n().createElement(s.Title,{headingLevel:"h1",size:"xl",className:"ins-c-text__sorry"},"Let's find you a new one. Try a new search or return home."),n().createElement(s.Button,{variant:"link",component:"a",href:"".concat(window.location.origin).concat("beta"===window.location.pathname.split("/")[1]?"/beta":"")},"Return to homepage"))};var i=a(55189);const m=(0,a(5977).EN)((()=>n().createElement(i.Z,null,n().createElement(o,null))))},45785:(e,t,a)=>{a.d(t,{Es:()=>E,FE:()=>p,FW:()=>c,HC:()=>m,KT:()=>l,Rt:()=>v,Sv:()=>u,Xd:()=>i,hn:()=>o,mn:()=>f,n9:()=>s,ot:()=>d,tt:()=>h});const r=(e,t)=>{let a=!1;if(e&&Array.isArray(e.data)){const r=e.data.find((e=>e.type===t));a=r&&r.access}else a=e&&!0===e.data;return a},n=e=>{let t=!1;return e&&e.meta&&(t=e.meta.count>0),t},l=e=>r(e,"aws"),s=(e,t)=>l(e)&&n(t),c=e=>r(e,"azure"),o=(e,t)=>c(e)&&n(t),i=e=>r(e,"oci"),m=(e,t)=>i(e)&&n(t),d=e=>r(e,"cost_model"),u=e=>r(e,"gcp"),p=(e,t)=>r(e,"gcp")&&n(t),h=e=>u(e),E=(e,t)=>h(e)&&n(t),v=e=>r(e,"ocp"),f=(e,t)=>v(e)&&n(t)}}]);
//# sourceMappingURL=b37bf89be9fb630261dd.bundle.js.map