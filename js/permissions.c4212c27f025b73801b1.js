"use strict";(self.webpackChunkcostManagement=self.webpackChunkcostManagement||[]).push([[1144],{15984:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(85893),n=a(90154),s=a(15138),c=function(){return c=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},c.apply(this,arguments)};const o=function(){return(0,r.jsxs)(n.EmptyState,c({variant:n.EmptyStateVariant.large,className:"ins-c-empty-state__unavailable pf-m-redhat-font"},{children:[(0,r.jsx)(n.EmptyStateIcon,{icon:s.ExclamationCircleIcon}),(0,r.jsx)(n.Title,c({headingLevel:"h5",size:"lg"},{children:"This page is temporarily unavailable"})),(0,r.jsxs)(n.EmptyStateBody,{children:["Try refreshing the page. If the problem persists, contact your organization administrator or visit our",(0,r.jsxs)("a",c({href:"https://status.redhat.com/",target:"_blank",rel:"noopener noreferrer"},{children:[" ","status page"]}))," ","for known outages."]})]}))}},48837:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var r=a(37610),n=a(91577),s=a(92950),c=a.n(s),o=a(82537),i=a(91919),l=a(38274),d=a(71060),u=a(46955),p=a(1156),h=a(22369),m=a(46919),g=a(74926),b=a(68025),I=a(96351);const f=(0,p.X1)(((e,t)=>{const a=(0,r.T)(m.QR),s=m.JO.selectUserAccess(e,n.n.all,a),c=m.JO.selectUserAccessError(e,n.n.all,a),o=m.JO.selectUserAccessFetchStatus(e,n.n.all,a);return{isFinsightsFeatureEnabled:h.iJ.selectIsFinsightsFeatureEnabled(e),isIbmFeatureEnabled:h.iJ.selectIsIbmFeatureEnabled(e),isRosFeatureEnabled:h.iJ.selectIsRosFeatureEnabled(e),isSettingsFeatureEnabled:h.iJ.selectIsSettingsFeatureEnabled(e),userAccess:s,userAccessError:c,userAccessFetchStatus:o,userAccessQueryString:a}})),v=(0,g.z)((0,o.connect)(f,void 0)((({children:e=null,chrome:t,isFinsightsFeatureEnabled:a,isIbmFeatureEnabled:r,isRosFeatureEnabled:n,isSettingsFeatureEnabled:s,userAccess:o,userAccessError:h,userAccessFetchStatus:m})=>{const g=(0,b.jD)();let f=c().createElement(d.b,{pathname:g});return m===p.iF.inProgress?f=c().createElement(l.g,null):h?f=c().createElement(u.W,null):(e=>{if(!o||m!==p.iF.complete)return!1;const c=(0,I.KT)(o),l=(0,I.FW)(o),d=(0,I.ot)(o),u=(0,I.Sv)(o),h=r&&(0,I.tt)(o),g=(0,I.Xd)(o),f=(0,I.Rt)(o),v=a&&(0,I.yY)(o),y=n&&(0,I.F4)(o),E=s&&(t.isOrgAdmin||d);switch(e){case(0,b.dI)(i._.explorer.path):case(0,b.dI)(i._.overview.path):return c||l||d||u||h||f||g;case(0,b.dI)(i._.awsDetails.path):case(0,b.dI)(i._.awsDetailsBreakdown.path):return c;case(0,b.dI)(i._.azureDetails.path):case(0,b.dI)(i._.azureDetailsBreakdown.path):return l;case(0,b.dI)(i._.costModel.basePath):case(0,b.dI)(i._.costModelsDetails.path):return d;case(0,b.dI)(i._.gcpDetails.path):case(0,b.dI)(i._.gcpDetailsBreakdown.path):return u;case(0,b.dI)(i._.ociDetails.path):case(0,b.dI)(i._.ociDetailsBreakdown.path):return g;case(0,b.dI)(i._.ibmDetails.path):case(0,b.dI)(i._.ibmDetailsBreakdown.path):return h;case(0,b.dI)(i._.ocpDetails.path):case(0,b.dI)(i._.ocpDetailsBreakdown.path):return f;case(0,b.dI)(i._.optimizations.path):return y;case(0,b.dI)(i._.rhelDetails.path):case(0,b.dI)(i._.rhelDetailsBreakdown.path):return v;case(0,b.dI)(i._.settings.path):return E;default:return!1}})(g)&&(f=c().createElement(c().Fragment,null,e)),f})))},71060:(e,t,a)=>{a.d(t,{b:()=>v});var r=a(90154),n=a(89376),s=a(39173),c=a(92950),o=a.n(c),i=a(85893),l=a(15138),d=function(){return d=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},d.apply(this,arguments)},u=function(){return(0,i.jsxs)(o().Fragment,{children:["Contact your organization administrator(s) for more information or visit ",(0,i.jsx)("a",d({href:"./settings/my-user-access"},{children:"My User Access"})),"  to learn more about your permissions."]})};const p=function(e){var t=e.prevPageButtonText,a=void 0===t?"Return to previous page":t,n=e.toLandingPageText,s=void 0===n?"Go to landing page":n,c=e.title,o=e.actions,p=void 0===o?null:o,h=e.serviceName,m=e.icon,g=void 0===m?l.LockIcon:m,b=e.description,I=void 0===b?(0,i.jsx)(u,{}):b,f=e.showReturnButton,v=void 0===f||f,y=e.className,E=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["prevPageButtonText","toLandingPageText","title","actions","serviceName","icon","description","showReturnButton","className"]),_=c||"You do not have access to ".concat(h);return(0,i.jsxs)(r.EmptyState,d({variant:r.EmptyStateVariant.full,className:"ins-c-not-authorized ".concat(y||"")},E,{children:[(0,i.jsx)(r.EmptyStateIcon,{icon:g}),(0,i.jsx)(r.Title,d({headingLevel:"h5",size:"lg"},{children:_})),(0,i.jsx)(r.EmptyStateBody,{children:I}),p,v&&(document.referrer?(0,i.jsx)(r.Button,d({variant:"primary",onClick:function(){return history.back()}},{children:a})):(0,i.jsx)(r.Button,d({variant:"primary",component:"a",href:"."},{children:s})))]}))};var h=a(97027),m=a(74806),g=a(91919),b=a(68025);class I extends o().Component{render(){const{intl:e,pathname:t}=this.props;let a;switch(t){case(0,b.dI)(g._.awsDetails.path):case(0,b.dI)(g._.awsDetailsBreakdown.path):a=h.Z.notAuthorizedStateAws;break;case(0,b.dI)(g._.azureDetails.path):case(0,b.dI)(g._.azureDetailsBreakdown.path):a=h.Z.notAuthorizedStateAzure;break;case(0,b.dI)(g._.costModel.path):case(0,b.dI)(g._.costModelsDetails.path):a=h.Z.notAuthorizedStateCostModels;break;case(0,b.dI)(g._.gcpDetails.path):case(0,b.dI)(g._.gcpDetailsBreakdown.path):a=h.Z.notAuthorizedStateGcp;break;case(0,b.dI)(g._.ibmDetails.path):case(0,b.dI)(g._.ibmDetailsBreakdown.path):a=h.Z.notAuthorizedStateIbm;break;case(0,b.dI)(g._.ociDetails.path):case(0,b.dI)(g._.ociDetailsBreakdown.path):a=h.Z.notAuthorizedStateOci;break;case(0,b.dI)(g._.ocpDetails.path):case(0,b.dI)(g._.ocpDetailsBreakdown.path):a=h.Z.notAuthorizedStateOcp;break;case(0,b.dI)(g._.rhelDetails.path):case(0,b.dI)(g._.rhelDetailsBreakdown.path):a=h.Z.notAuthorizedStateRhel;break;case(0,b.dI)(g._.optimizations.path):a=h.Z.notAuthorizedStateOptimizations;break;case(0,b.dI)(g._.settings.path):a=h.Z.notAuthorizedStateSettings;break;case(0,b.dI)(g._.explorer.path):default:a=h.Z.costManagement}return o().createElement(p,{serviceName:e.formatMessage(a)})}}const f=(0,m.ZP)(I),v=({pathname:e,title:t})=>o().createElement(o().Fragment,null,t&&o().createElement(n.Z,null,o().createElement(s.Z,{title:t})),o().createElement(r.PageSection,null,o().createElement(f,{pathname:e})))},46955:(e,t,a)=>{a.d(t,{W:()=>l});var r=a(90154),n=a(89376),s=a(39173),c=a(15984),o=a(92950),i=a.n(o);const l=({title:e})=>i().createElement(i().Fragment,null,e&&i().createElement(n.Z,null,i().createElement(s.Z,{title:e})),i().createElement(r.PageSection,null,i().createElement(c.Z,null)))},74926:(e,t,a)=>{a.d(t,{z:()=>c});var r=a(55140),n=a(92950),s=a.n(n);const c=e=>t=>{const{auth:a}=(0,r.Z)(),[c,o]=(0,n.useState)(!1),[i,l]=(0,n.useState)(!1),d=(0,n.useRef)(!1);return(0,n.useLayoutEffect)((()=>(d.current=!0,()=>{d.current=!1})),[]),(0,n.useLayoutEffect)((()=>{(async e=>{var t;const a=await e.getUser();try{return!!(null===(t=null==a?void 0:a.identity.user)||void 0===t?void 0:t.is_org_admin)}catch(e){return!1}})(a).then((e=>{d.current&&(l(e),o(!0))}))})),c?s().createElement(e,Object.assign({},t,{chrome:{isOrgAdmin:i}})):null}},96351:(e,t,a)=>{a.d(t,{Es:()=>b,F4:()=>E,FE:()=>m,FW:()=>i,HC:()=>u,KT:()=>c,Rt:()=>I,Sv:()=>h,Xd:()=>d,ZC:()=>y,hn:()=>l,mn:()=>f,n9:()=>o,ot:()=>p,tt:()=>g,yY:()=>v});var r=a(91577);const n=(e,t)=>{let a=!1;if(e&&Array.isArray(e.data)){const r=e.data.find((e=>e.type===t));a=r&&r.access}else a=e&&!0===e.data;return a},s=e=>{let t=!1;return e&&e.meta&&(t=e.meta.count>0),t},c=e=>n(e,r.n.aws),o=(e,t)=>c(e)&&s(t),i=e=>n(e,r.n.azure),l=(e,t)=>i(e)&&s(t),d=e=>n(e,r.n.oci),u=(e,t)=>d(e)&&s(t),p=e=>n(e,r.n.cost_model),h=e=>n(e,r.n.gcp),m=(e,t)=>n(e,r.n.gcp)&&s(t),g=e=>h(e),b=(e,t)=>g(e)&&s(t),I=e=>n(e,r.n.ocp),f=(e,t)=>I(e)&&s(t),v=e=>n(e,r.n.rhel),y=(e,t)=>v(e)&&s(t),E=e=>n(e,r.n.ros)}}]);