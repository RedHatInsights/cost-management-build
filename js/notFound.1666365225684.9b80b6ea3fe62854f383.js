"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[449],{15984:(e,a,t)=>{t.d(a,{Z:()=>c});var s=t(85893),r=t(13157),n=t(43551),l=function(){return l=Object.assign||function(e){for(var a,t=1,s=arguments.length;t<s;t++)for(var r in a=arguments[t])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e},l.apply(this,arguments)};const c=function(){return(0,s.jsxs)(r.EmptyState,l({variant:r.EmptyStateVariant.large,className:"ins-c-empty-state__unavailable pf-m-redhat-font"},{children:[(0,s.jsx)(r.EmptyStateIcon,{icon:n.ExclamationCircleIcon}),(0,s.jsx)(r.Title,l({headingLevel:"h5",size:"lg"},{children:"This page is temporarily unavailable"})),(0,s.jsxs)(r.EmptyStateBody,{children:["Try refreshing the page. If the problem persists, contact your organization administrator or visit our",(0,s.jsxs)("a",l({href:"https://status.redhat.com/",target:"_blank",rel:"noopener noreferrer"},{children:[" ","status page"]}))," ","for known outages."]})]}))}},86208:(e,a,t)=>{t.d(a,{H:()=>r});var s=t(80129);function r(e){return(0,s.stringify)(e,{encode:!1,indices:!1})}},66785:(e,a,t)=>{t.d(a,{T:()=>r});var s=t(80129);function r(e){return(0,s.stringify)(e,{encode:!1,indices:!1})}},68261:(e,a,t)=>{t.r(a),t.d(a,{default:()=>f});var s=t(13157),r=t(86208),n=t(93952),l=t(92950),c=t.n(l),i=t(74806),o=t(78741),d=t(94377),m=t(45235),h=t(37530),u=t(64797);class p extends c().Component{constructor(){super(...arguments),this.getInactiveSourceNames=()=>{const{providers:e}=this.props,a=[];return e&&e.data&&e.data.map((e=>{!0!==e.active&&a.push(e.name)})),a},this.getInactiveSources=e=>e.length<2?null:c().createElement("p",null,e.map(((a,t)=>t===e.length-1?a:`${a}, `))),this.handleOnClose=()=>{(0,h.kT)("true"),this.forceUpdate()},this.isAlertClosed=()=>(0,h.c3)()}render(){const{providers:e,providersError:a,providersFetchStatus:t,intl:r}=this.props,l=(0,u.I)(),i=this.getInactiveSourceNames(),o=1===i.length?r.formatMessage(n.Z.inactiveSourcesTitle,{value:i[0]}):r.formatMessage(n.Z.inactiveSourcesTitleMultiplier);return 0===i.length?(e&&2===t&&!a&&(0,h.oH)(),null):this.isAlertClosed()?null:((0,h.FP)(),c().createElement("div",{className:"alert"},c().createElement(s.Alert,{isInline:!0,variant:"danger",title:o,actionClose:c().createElement(s.AlertActionCloseButton,{onClose:this.handleOnClose}),actionLinks:c().createElement(c().Fragment,null,c().createElement("a",{href:`${l}/settings/sources`},r.formatMessage(n.Z.inactiveSourcesGoTo)))},this.getInactiveSources(i))))}}const v=(0,d.X1)(((e,a)=>{const t=(0,r.H)(m.NT);return{providers:m.aX.selectProviders(e,"all",t),providersError:m.aX.selectProvidersError(e,"all",t),providersFetchStatus:m.aX.selectProvidersFetchStatus(e,"all",t)}})),f=(0,i.ZP)((0,o.connect)(v,void 0)(p))},52239:(e,a,t)=>{t.r(a),t.d(a,{default:()=>O});var s=t(66785),r=t(92950),n=t.n(r),l=t(78741),c=t(16550),i=t(98503),o=t(96464),d=t(14748),m=t(80123),h=t(39173),u=t(85893),p=t(13157),v=t(43551),f=function(){return f=Object.assign||function(e){for(var a,t=1,s=arguments.length;t<s;t++)for(var r in a=arguments[t])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e},f.apply(this,arguments)},g=function(){return(0,u.jsxs)(n().Fragment,{children:["Contact your organization administrator(s) for more information or visit ",(0,u.jsx)("a",f({href:"./settings/my-user-access"},{children:"My User Access"})),"  to learn more about your permissions."]})};const b=function(e){var a=e.prevPageButtonText,t=void 0===a?"Return to previous page":a,s=e.toLandingPageText,r=void 0===s?"Go to landing page":s,n=e.title,l=e.actions,c=void 0===l?null:l,i=e.serviceName,o=e.icon,d=void 0===o?v.LockIcon:o,m=e.description,h=void 0===m?(0,u.jsx)(g,{}):m,b=e.showReturnButton,x=void 0===b||b,j=e.className,H=function(e,a){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&a.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)a.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(t[s[r]]=e[s[r]])}return t}(e,["prevPageButtonText","toLandingPageText","title","actions","serviceName","icon","description","showReturnButton","className"]),y=n||"You do not have access to ".concat(i);return(0,u.jsxs)(p.EmptyState,f({variant:p.EmptyStateVariant.full,className:"ins-c-not-authorized ".concat(j||"")},H,{children:[(0,u.jsx)(p.EmptyStateIcon,{icon:d}),(0,u.jsx)(p.Title,f({headingLevel:"h5",size:"lg"},{children:y})),(0,u.jsx)(p.EmptyStateBody,{children:h}),c,x&&(document.referrer?(0,u.jsx)(p.Button,f({variant:"primary",onClick:function(){return history.back()}},{children:t})):(0,u.jsx)(p.Button,f({variant:"primary",component:"a",href:"."},{children:r})))]}))};var x=t(93952),j=t(74806);class H extends n().Component{render(){const{intl:e,pathname:a}=this.props;let t;switch(a){case i.Hb.awsDetails:case i.Hb.awsDetailsBreakdown:t=x.Z.notAuthorizedStateAws;break;case i.Hb.azureDetails:case i.Hb.azureDetailsBreakdown:t=x.Z.notAuthorizedStateAzure;break;case i.Hb.costModels:t=x.Z.notAuthorizedStateCostModels;break;case i.Hb.gcpDetails:case i.Hb.gcpDetailsBreakdown:t=x.Z.notAuthorizedStateGcp;break;case i.Hb.ibmDetails:case i.Hb.ibmDetailsBreakdown:t=x.Z.notAuthorizedStateIbm;break;case i.Hb.ociDetails:case i.Hb.ociDetailsBreakdown:t=x.Z.notAuthorizedStateOci;break;case i.Hb.ocpDetails:case i.Hb.ocpDetailsBreakdown:t=x.Z.notAuthorizedStateOcp;break;case i.Hb.explorer:default:t=x.Z.costManagement}return n().createElement(b,{serviceName:e.formatMessage(t)})}}const y=(0,j.ZP)((0,c.EN)(H)),N=(0,c.EN)((({pathname:e,title:a})=>n().createElement(n().Fragment,null,a&&n().createElement(m.Z,null,n().createElement(h.Z,{title:a})),n().createElement(d.Z,null,n().createElement(y,{pathname:e})))));var E=t(20963),w=t(94377),F=t(21084),A=t(1723),k=t(45785);const M=(0,w.X1)(((e,a)=>{const t=(0,s.T)(A.QR),r=A.JO.selectUserAccess(e,"all",t),n=A.JO.selectUserAccessError(e,"all",t),l=A.JO.selectUserAccessFetchStatus(e,"all",t);return{isIbmFeatureEnabled:F.iJ.selectIsIbmFeatureEnabled(e),isOciFeatureEnabled:F.iJ.selectIsOciFeatureEnabled(e),userAccess:r,userAccessError:n,userAccessFetchStatus:l,userAccessQueryString:t}})),O=(0,c.EN)((0,l.connect)(M,void 0)((({children:e=null,isIbmFeatureEnabled:a,isOciFeatureEnabled:t,location:s,userAccess:r,userAccessError:l,userAccessFetchStatus:c})=>{let d=n().createElement(N,{pathname:s.pathname});return 1===c?d=n().createElement(o.g,null):l?d=n().createElement(E.W,null):(()=>{if(!r||2!==c)return!1;const e=(0,k.KT)(r),n=(0,k.FW)(r),l=(0,k.Xd)(r)&&t,o=(0,k.ot)(r),d=(0,k.Sv)(r),m=(0,k.tt)(r)&&a,h=(0,k.Rt)(r);switch((()=>{const e=s.pathname&&s.pathname.startsWith(i.Hb.costModels)?i.Hb.costModels:s.pathname,a=i._j.find((({path:a})=>a===e));return a?a.path:void 0})()){case i.Hb.explorer:case i.Hb.overview:return e||n||o||d||m||h||l;case i.Hb.awsDetails:case i.Hb.awsDetailsBreakdown:return e;case i.Hb.azureDetails:case i.Hb.azureDetailsBreakdown:return n;case i.Hb.costModels:return o;case i.Hb.gcpDetails:case i.Hb.gcpDetailsBreakdown:return d;case i.Hb.ociDetails:case i.Hb.ociDetailsBreakdown:return l;case i.Hb.ibmDetails:case i.Hb.ibmDetailsBreakdown:return m;case i.Hb.ocpDetails:case i.Hb.ocpDetailsBreakdown:return h;default:return!1}})()&&(d=n().createElement(n().Fragment,null,e)),d})))},20963:(e,a,t)=>{t.d(a,{W:()=>o});var s=t(14748),r=t(80123),n=t(39173),l=t(15984),c=t(92950),i=t.n(c);const o=(0,t(16550).EN)((({title:e})=>i().createElement(i().Fragment,null,e&&i().createElement(r.Z,null,i().createElement(n.Z,{title:e})),i().createElement(s.Z,null,i().createElement(l.Z,null)))))},65971:(e,a,t)=>{t.r(a),t.d(a,{default:()=>h});var s=t(85893),r=function(){return r=Object.assign||function(e){for(var a,t=1,s=arguments.length;t<s;t++)for(var r in a=arguments[t])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e},r.apply(this,arguments)};const n=function(){return(0,s.jsxs)("svg",r({className:"Icon404",id:"Icon404","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 131 131"},{children:[(0,s.jsx)("defs",{children:(0,s.jsx)("mask",r({id:"mask",x:"0",y:"0",width:"131",height:"131",maskUnits:"userSpaceOnUse"},{children:(0,s.jsx)("g",r({transform:"translate(-2.89 -3.07)"},{children:(0,s.jsx)("g",r({id:"mask-2"},{children:(0,s.jsx)("polygon",{id:"path-1",className:"cls-1",points:"2.89 134.07 133.89 134.07 133.89 3.07 2.89 3.07 2.89 134.07"})}))}))}))}),(0,s.jsx)("title",{children:"404path-not-found"}),(0,s.jsx)("g",r({className:"cls-2"},{children:(0,s.jsx)("g",r({id:"Group"},{children:(0,s.jsxs)("g",r({id:"Page-1"},{children:[(0,s.jsx)("path",{id:"Fill-1",className:"cls-3",d:"M8,95.56a1.83,1.83,0,0,0-2,1.68c-.21,1.86-.23,3.05-.23,3.1a1.88,1.88,0,0,0,1.79,2h0a1.89,1.89,0,0,0,1.82-1.91s0-1,.2-2.67A1.91,1.91,0,0,0,8,95.56",transform:"translate(-2.89 -3.07)"}),(0,s.jsx)("path",{id:"Fill-3",className:"cls-3",d:"M104.29,104.42a26.42,26.42,0,0,1-4.72,1.89,1.89,1.89,0,0,0-1.25,2.32,1.82,1.82,0,0,0,1.74,1.36,1.73,1.73,0,0,0,.5-.07,29.3,29.3,0,0,0,5.36-2.16,1.89,1.89,0,0,0,.8-2.52,1.78,1.78,0,0,0-2.43-.82",transform:"translate(-2.89 -3.07)"}),(0,s.jsx)("path",{id:"Fill-5",className:"cls-3",d:"M74.84,57.4A1.88,1.88,0,0,0,76.2,58a1.9,1.9,0,0,0,1.21-.44,1.68,1.68,0,0,0,.15-2.45,19.81,19.81,0,0,1-2.85-3.9,1.88,1.88,0,0,0-2.47-.71,1.7,1.7,0,0,0-.75,2.34,23.82,23.82,0,0,0,3.35,4.58",transform:"translate(-2.89 -3.07)"}),(0,s.jsx)("path",{id:"Fill-7",className:"cls-3",d:"M75.44,105.24a1.76,1.76,0,0,0-2.17,1.29,1.84,1.84,0,0,0,1.23,2.26A45.56,45.56,0,0,0,79.84,110a1.23,1.23,0,0,0,.27,0,1.78,1.78,0,0,0,1.74-1.56,1.82,1.82,0,0,0-1.47-2.1,40.81,40.81,0,0,1-4.94-1.09",transform:"translate(-2.89 -3.07)"}),(0,s.jsx)("path",{id:"Fill-9",className:"cls-3",d:"M92.56,107.11a49.67,49.67,0,0,1-5,0h-.07a1.8,1.8,0,0,0-1.73,1.82,1.82,1.82,0,0,0,1.67,2c1,0,2,.07,3.07.07.78,0,1.54,0,2.29-.08a1.83,1.83,0,0,0,1.63-2,1.77,1.77,0,0,0-1.83-1.77",transform:"translate(-2.89 -3.07)"}),(0,s.jsx)("path",{id:"Fill-11",className:"cls-3",d:"M65.38,100.76a1.62,1.62,0,0,0-2.41.32,2,2,0,0,0,.3,2.62,28.62,28.62,0,0,0,4.55,3.19,1.6,1.6,0,0,0,.78.21,1.69,1.69,0,0,0,1.52-1,2,2,0,0,0-.73-2.52,26,26,0,0,1-4-2.81",transform:"translate(-2.89 -3.07)"}),(0,s.jsx)("path",{id:"Fill-13",className:"cls-3",d:"M109.71,70.18a2,2,0,0,0,1.1.32,2,2,0,0,0,1.53-.69,1.57,1.57,0,0,0-.42-2.35,26.14,26.14,0,0,0-5.3-2.61,2,2,0,0,0-2.45.91,1.63,1.63,0,0,0,1,2.19,23.39,23.39,0,0,1,4.51,2.23",transform:"translate(-2.89 -3.07)"}),(0,s.jsx)("path",{id:"Fill-15",className:"cls-3",d:"M70.28,38.72a1.74,1.74,0,0,0-1.85,1.63c0,.46,0,.93,0,1.39A23,23,0,0,0,68.78,46a1.74,1.74,0,1,0,3.43-.63,18.84,18.84,0,0,1-.32-3.58c0-.39,0-.79,0-1.18a1.73,1.73,0,0,0-1.64-1.84",transform:"translate(-2.89 -3.07)"}),(0,s.jsx)("path",{id:"Fill-17",className:"cls-3",d:"M76.35,27.53a2.08,2.08,0,0,0-2.68.25,20.42,20.42,0,0,0-3.2,4.71,1.64,1.64,0,0,0,1,2.23,2,2,0,0,0,.75.14,1.93,1.93,0,0,0,1.75-1,16.54,16.54,0,0,1,2.67-3.93,1.57,1.57,0,0,0-.29-2.38",transform:"translate(-2.89 -3.07)"}),(0,s.jsx)("path",{id:"Fill-19",className:"cls-3",d:"M98.18,66.63l.26,0a1.74,1.74,0,0,0,.24-3.47,40.77,40.77,0,0,0-5.42-.39h0a1.74,1.74,0,0,0,0,3.48,37,37,0,0,1,4.94.36",transform:"translate(-2.89 -3.07)"}),(0,s.jsx)("path",{id:"Fill-21",className:"cls-3",d:"M79.88,26.19a1.92,1.92,0,0,0,1-.26,25.06,25.06,0,0,1,4.62-2.13,1.71,1.71,0,0,0,1.09-2.24,1.87,1.87,0,0,0-2.37-1A30.71,30.71,0,0,0,78.89,23a1.7,1.7,0,0,0-.59,2.41,1.9,1.9,0,0,0,1.58.82",transform:"translate(-2.89 -3.07)"}),(0,s.jsx)("path",{id:"Fill-23",className:"cls-3",d:"M86.28,65.61a1.79,1.79,0,0,0,.51.07,1.84,1.84,0,0,0,1.76-1.32,1.83,1.83,0,0,0-1.26-2.26,21.06,21.06,0,0,1-4.6-2,1.83,1.83,0,1,0-1.82,3.17,24.64,24.64,0,0,0,5.41,2.29",transform:"translate(-2.89 -3.07)"}),(0,s.jsx)("path",{id:"Fill-25",className:"cls-3",d:"M47.85,80.53A1.7,1.7,0,0,0,47.61,83a41.72,41.72,0,0,1,3,4.06,1.84,1.84,0,0,0,2.49.52,1.71,1.71,0,0,0,.55-2.4,44.19,44.19,0,0,0-3.27-4.4,1.85,1.85,0,0,0-2.54-.23",transform:"translate(-2.89 -3.07)"}),(0,s.jsx)("path",{id:"Fill-27",className:"cls-3",d:"M12.51,84.2A1.84,1.84,0,0,0,10,85a33.19,33.19,0,0,0-2.24,5.32A1.83,1.83,0,0,0,9,92.57a1.77,1.77,0,0,0,.56.08,1.83,1.83,0,0,0,1.74-1.26,29.21,29.21,0,0,1,2-4.72,1.81,1.81,0,0,0-.76-2.47",transform:"translate(-2.89 -3.07)"}),(0,s.jsx)("path",{id:"Fill-29",className:"cls-3",d:"M54.77,91a1.7,1.7,0,0,0-.54,2.4,50.54,50.54,0,0,0,3.24,4.38,1.85,1.85,0,0,0,1.41.64A1.81,1.81,0,0,0,60,98.05a1.69,1.69,0,0,0,.27-2.45,47.21,47.21,0,0,1-3-4.08A1.84,1.84,0,0,0,54.77,91",transform:"translate(-2.89 -3.07)"}),(0,s.jsx)("path",{id:"Fill-31",className:"cls-3",d:"M112.48,97.29a22.47,22.47,0,0,1-3.09,3.78,1.89,1.89,0,0,0-.09,2.56,1.64,1.64,0,0,0,1.25.58,1.67,1.67,0,0,0,1.16-.48,25.42,25.42,0,0,0,3.57-4.38,1.87,1.87,0,0,0-.43-2.52,1.64,1.64,0,0,0-2.37.46",transform:"translate(-2.89 -3.07)"}),(0,s.jsx)("path",{id:"Fill-33",className:"cls-3",d:"M118.61,84a1.84,1.84,0,0,0-2,1.65,18.6,18.6,0,0,1-.93,4.74,1.74,1.74,0,0,0,1.26,2.2,2.15,2.15,0,0,0,.56.07,1.88,1.88,0,0,0,1.82-1.24,21.56,21.56,0,0,0,1.09-5.57A1.81,1.81,0,0,0,118.61,84",transform:"translate(-2.89 -3.07)"}),(0,s.jsx)("path",{id:"Fill-35",className:"cls-3",d:"M117.66,81.1a1.88,1.88,0,0,0,.52-.08,1.85,1.85,0,0,0,1.18-2.3,21.55,21.55,0,0,0-2.43-5.45,1.73,1.73,0,0,0-2.46-.54,1.88,1.88,0,0,0-.52,2.55,17.79,17.79,0,0,1,2,4.51,1.8,1.8,0,0,0,1.7,1.31",transform:"translate(-2.89 -3.07)"}),(0,s.jsx)("path",{id:"Fill-37",className:"cls-3",d:"M39,73.46a1.84,1.84,0,0,0-2.27,1.24A1.81,1.81,0,0,0,37.93,77a18,18,0,0,1,4.54,2,1.89,1.89,0,0,0,1,.27A1.85,1.85,0,0,0,45,78.3a1.8,1.8,0,0,0-.61-2.5A22.68,22.68,0,0,0,39,73.46",transform:"translate(-2.89 -3.07)"}),(0,s.jsx)("path",{id:"Fill-39",className:"cls-3",d:"M18.61,75.53A20.68,20.68,0,0,0,14,79a1.81,1.81,0,0,0,0,2.53,1.7,1.7,0,0,0,1.26.55,1.72,1.72,0,0,0,1.22-.51,17,17,0,0,1,3.81-2.86A1.82,1.82,0,0,0,21,76.26a1.73,1.73,0,0,0-2.37-.73",transform:"translate(-2.89 -3.07)"}),(0,s.jsx)("path",{id:"Fill-41",className:"cls-3",d:"M26.51,72.76a1.77,1.77,0,0,0,.27,3.52l.28,0A26,26,0,0,1,31.92,76a1.84,1.84,0,0,0,1.79-1.72A1.76,1.76,0,0,0,32,72.44a30.51,30.51,0,0,0-5.51.32",transform:"translate(-2.89 -3.07)"}),(0,s.jsx)("path",{id:"Fill-43",className:"cls-3",d:"M92.47,22.34l.27,0q1.33-.16,2.76-.27a1.83,1.83,0,0,0,1.78-1.92,1.87,1.87,0,0,0-2.07-1.64c-1,.07-2,.17-3,.29a1.83,1.83,0,0,0-1.65,2,1.89,1.89,0,0,0,1.91,1.54",transform:"translate(-2.89 -3.07)"}),(0,s.jsx)("path",{id:"Fill-45",className:"cls-3",d:"M133,66.72H118.94V44.44h9.27a.89.89,0,1,0,0-1.78h-9.27V36.71a.9.9,0,0,0-1.8,0v5.95H94.41V37.38a.9.9,0,0,0-1.79,0v5.28H77a.89.89,0,0,0,0,1.78H92.62v13a.9.9,0,1,0,1.79,0v-13h22.73V67.68a.89.89,0,0,0,.9.89.86.86,0,0,0,.36-.07H133a.89.89,0,1,0,0-1.78",transform:"translate(-2.89 -3.07)"}),(0,s.jsx)("path",{id:"Fill-47",className:"cls-3",d:"M128.16,92.65h-4.92a1,1,0,0,0,0,1.93h4.92a1,1,0,0,0,0-1.93",transform:"translate(-2.89 -3.07)"}),(0,s.jsx)("path",{id:"Fill-49",className:"cls-3",d:"M109.87,116.68H93.2v-1.27a.9.9,0,1,0-1.8,0v1.27H69.05v-5.55a.9.9,0,1,0-1.8,0v5.55H44.82V93.89h4.27a.9.9,0,0,0,0-1.8H44.82V83.92a.9.9,0,1,0-1.79,0v8.17H20.3V84.37a.9.9,0,1,0-1.8,0v7.72H13.42a.9.9,0,1,0,0,1.8H18.5v17.39a.9.9,0,0,0,1.8,0V93.89H43v22.79H26.28a.9.9,0,1,0,0,1.8H43v9.9a.9.9,0,1,0,1.79,0v-9.9H67.25v14.69a.9.9,0,1,0,1.8,0V118.48H91.4v10.2a.9.9,0,1,0,1.8,0v-10.2h16.67a.9.9,0,0,0,0-1.8",transform:"translate(-2.89 -3.07)"}),(0,s.jsx)("g",r({className:"cls-4"},{children:(0,s.jsx)("path",{id:"Fill-51",className:"cls-3",d:"M20.55,67.5H43.31V45H20.55Zm-1.79,3a.9.9,0,1,0,1.79,0V69.3H43.31v2.1a.9.9,0,0,0,1.8,0V69.3H67.56V92.38H63.3a.9.9,0,1,0,0,1.79h4.26v3.3a.9.9,0,1,0,1.8,0v-3.3h23v9.14a.9.9,0,0,0,1.8,0V94.17H111.8a.9.9,0,1,0,0-1.79H94.21V71a.9.9,0,0,0-1.8,0V92.38h-23V69.3h12.8a.9.9,0,0,0,0-1.8H69.36v-10a.9.9,0,0,0-1.8,0v10H45.11V45h18a.9.9,0,1,0,0-1.8h-18V20.46H67.56V26a.9.9,0,1,0,1.8,0V20.46h6.06a.9.9,0,1,0,0-1.8H69.36V4a.9.9,0,0,0-1.8,0V18.66H45.11v-10a.9.9,0,1,0-1.8,0v10H26.24a.9.9,0,0,0,0,1.8H43.31V43.23H20.55V26.6a.9.9,0,1,0-1.79,0V43.23H8.88a.9.9,0,0,0,0,1.8h9.88V67.5h-15a.9.9,0,1,0,0,1.8h15Z",transform:"translate(-2.89 -3.07)"})})),(0,s.jsx)("g",r({className:"cls-4"},{children:(0,s.jsx)("path",{id:"Fill-53",className:"cls-3",d:"M117.51,104.21a.94.94,0,0,0-1,.92V111a1,1,0,0,0,1.93,0v-5.87a1,1,0,0,0-1-.92",transform:"translate(-2.89 -3.07)"})})),(0,s.jsx)("g",r({className:"cls-4"},{children:(0,s.jsx)("path",{id:"Fill-54",className:"cls-3",d:"M106.16,7.75a13.31,13.31,0,0,1,3.35-.41,6.07,6.07,0,0,1,4.09,1.23A4.42,4.42,0,0,1,115,12.09a5.92,5.92,0,0,1-.77,3.12,20.1,20.1,0,0,1-3.72,3.86,11.51,11.51,0,0,0-2.92,3.55,10.22,10.22,0,0,0-.78,4.29v1.21h2.8v-.74a7,7,0,0,1,.71-3.39,13.86,13.86,0,0,1,2.9-3.19,30,30,0,0,0,3.56-3.55,8.29,8.29,0,0,0,1.25-2.34,8.66,8.66,0,0,0,.43-2.87,7.61,7.61,0,0,0-2.3-5.91A9.3,9.3,0,0,0,109.72,4a17.8,17.8,0,0,0-8.58,2.21l1.28,3a17.6,17.6,0,0,1,3.74-1.51",transform:"translate(-2.89 -3.07)"})})),(0,s.jsx)("g",r({className:"cls-4"},{children:(0,s.jsx)("path",{id:"Fill-55",className:"cls-3",d:"M108.35,31c-1.59,0-2.39,1-2.39,2.9a3,3,0,0,0,.67,2.2,2.36,2.36,0,0,0,1.72.68,2.21,2.21,0,0,0,1.78-.76,3.16,3.16,0,0,0,.64-2.12,3.27,3.27,0,0,0-.63-2.16,2.22,2.22,0,0,0-1.79-.74",transform:"translate(-2.89 -3.07)"})}))]}))}))}))]}))};var l=t(13157),c=function(){return c=Object.assign||function(e){for(var a,t=1,s=arguments.length;t<s;t++)for(var r in a=arguments[t])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e},c.apply(this,arguments)};const i=function(e){var a=function(e,a){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&a.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)a.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(t[s[r]]=e[s[r]])}return t}(e,[]);return(0,s.jsxs)("section",c({},a,{className:"pf-l-page__main-section pf-c-page__main-section ins-c-component_invalid-component"},{children:[(0,s.jsx)(l.Title,c({headingLevel:"h1",size:"3xl"},{children:"We lost that page"})),(0,s.jsx)(n,{}),(0,s.jsx)(l.Title,c({headingLevel:"h1",size:"xl",className:"ins-c-text__sorry"},{children:"Let's find you a new one. Try a new search or return home."})),(0,s.jsx)(l.Button,c({variant:"link",component:"a",href:"".concat(window.location.origin).concat("beta"===window.location.pathname.split("/")[1]?"/beta":"")},{children:"Return to homepage"}))]}))};var o=t(14748),d=t(92950),m=t.n(d);const h=(0,t(16550).EN)((()=>m().createElement(o.Z,null,m().createElement(i,null))))},45785:(e,a,t)=>{t.d(a,{Es:()=>v,FE:()=>u,FW:()=>c,HC:()=>d,KT:()=>n,Rt:()=>f,Sv:()=>h,Xd:()=>o,hn:()=>i,mn:()=>g,n9:()=>l,ot:()=>m,tt:()=>p});const s=(e,a)=>{let t=!1;if(e&&Array.isArray(e.data)){const s=e.data.find((e=>e.type===a));t=s&&s.access}else t=e&&!0===e.data;return t},r=e=>{let a=!1;return e&&e.meta&&(a=e.meta.count>0),a},n=e=>s(e,"aws"),l=(e,a)=>n(e)&&r(a),c=e=>s(e,"azure"),i=(e,a)=>c(e)&&r(a),o=e=>s(e,"oci"),d=(e,a)=>o(e)&&r(a),m=e=>s(e,"cost_model"),h=e=>s(e,"gcp"),u=(e,a)=>s(e,"gcp")&&r(a),p=e=>h(e),v=(e,a)=>p(e)&&r(a),f=e=>s(e,"ocp"),g=(e,a)=>f(e)&&r(a)}}]);
//# sourceMappingURL=../sourcemaps/notFound.9f386b4bdbe9500156d1d4c4350924bc.js.map