"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[1144],{15984:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(85893),n=a(90154),s=a(15138),o=function(){return o=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)};const c=function(){return(0,r.jsxs)(n.EmptyState,o({variant:n.EmptyStateVariant.large,className:"ins-c-empty-state__unavailable pf-m-redhat-font"},{children:[(0,r.jsx)(n.EmptyStateIcon,{icon:s.ExclamationCircleIcon}),(0,r.jsx)(n.Title,o({headingLevel:"h5",size:"lg"},{children:"This page is temporarily unavailable"})),(0,r.jsxs)(n.EmptyStateBody,{children:["Try refreshing the page. If the problem persists, contact your organization administrator or visit our",(0,r.jsxs)("a",o({href:"https://status.redhat.com/",target:"_blank",rel:"noopener noreferrer"},{children:[" ","status page"]}))," ","for known outages."]})]}))}},12719:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var r=a(37610),n=a(91577),s=a(92950),o=a.n(s),c=a(77760),i=a(91919),l=a(52471),d=a(90154),u=a(89376),p=a(39173),h=a(85893),m=a(15138),g=function(){return g=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},g.apply(this,arguments)},I=function(){return(0,h.jsxs)(o().Fragment,{children:["Contact your organization administrator(s) for more information or visit ",(0,h.jsx)("a",g({href:"./settings/my-user-access"},{children:"My User Access"})),"  to learn more about your permissions."]})};const b=function(e){var t=e.prevPageButtonText,a=void 0===t?"Return to previous page":t,r=e.toLandingPageText,n=void 0===r?"Go to landing page":r,s=e.title,o=e.actions,c=void 0===o?null:o,i=e.serviceName,l=e.icon,u=void 0===l?m.LockIcon:l,p=e.description,b=void 0===p?(0,h.jsx)(I,{}):p,f=e.showReturnButton,v=void 0===f||f,y=e.className,_=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["prevPageButtonText","toLandingPageText","title","actions","serviceName","icon","description","showReturnButton","className"]),E=s||"You do not have access to ".concat(i);return(0,h.jsxs)(d.EmptyState,g({variant:d.EmptyStateVariant.full,className:"ins-c-not-authorized ".concat(y||"")},_,{children:[(0,h.jsx)(d.EmptyStateIcon,{icon:u}),(0,h.jsx)(d.Title,g({headingLevel:"h5",size:"lg"},{children:E})),(0,h.jsx)(d.EmptyStateBody,{children:b}),c,v&&(document.referrer?(0,h.jsx)(d.Button,g({variant:"primary",onClick:function(){return history.back()}},{children:a})):(0,h.jsx)(d.Button,g({variant:"primary",component:"a",href:"."},{children:n})))]}))};var f=a(97027),v=a(74806),y=a(68025);class _ extends o().Component{render(){const{intl:e,pathname:t}=this.props;let a;switch(t){case(0,y.dI)(i._.awsDetails.path):case(0,y.dI)(i._.awsDetailsBreakdown.path):a=f.Z.notAuthorizedStateAws;break;case(0,y.dI)(i._.azureDetails.path):case(0,y.dI)(i._.azureDetailsBreakdown.path):a=f.Z.notAuthorizedStateAzure;break;case(0,y.dI)(i._.costModelsDetails.path):a=f.Z.notAuthorizedStateCostModels;break;case(0,y.dI)(i._.gcpDetails.path):case(0,y.dI)(i._.gcpDetailsBreakdown.path):a=f.Z.notAuthorizedStateGcp;break;case(0,y.dI)(i._.ibmDetails.path):case(0,y.dI)(i._.ibmDetailsBreakdown.path):a=f.Z.notAuthorizedStateIbm;break;case(0,y.dI)(i._.ociDetails.path):case(0,y.dI)(i._.ociDetailsBreakdown.path):a=f.Z.notAuthorizedStateOci;break;case(0,y.dI)(i._.ocpDetails.path):case(0,y.dI)(i._.ocpDetailsBreakdown.path):a=f.Z.notAuthorizedStateOcp;break;case(0,y.dI)(i._.rhelDetails.path):case(0,y.dI)(i._.rhelDetailsBreakdown.path):a=f.Z.notAuthorizedStateRhel;break;case(0,y.dI)(i._.optimizations.path):a=f.Z.notAuthorizedStateOptimizations;break;case(0,y.dI)(i._.explorer.path):default:a=f.Z.costManagement}return o().createElement(b,{serviceName:e.formatMessage(a)})}}const E=(0,v.ZP)(_),k=({pathname:e,title:t})=>o().createElement(o().Fragment,null,t&&o().createElement(u.Z,null,o().createElement(p.Z,{title:t})),o().createElement(d.PageSection,null,o().createElement(E,{pathname:e})));var w=a(47947),D=a(1156),S=a(78898),F=a(46919),x=a(96351);const A=(0,D.X1)(((e,t)=>{const a=(0,r.T)(F.QR),s=F.JO.selectUserAccess(e,n.n.all,a),o=F.JO.selectUserAccessError(e,n.n.all,a),c=F.JO.selectUserAccessFetchStatus(e,n.n.all,a);return{isFinsightsFeatureEnabled:S.iJ.selectIsFinsightsFeatureEnabled(e),isIbmFeatureEnabled:S.iJ.selectIsIbmFeatureEnabled(e),isRosFeatureEnabled:S.iJ.selectIsRosFeatureEnabled(e),userAccess:s,userAccessError:o,userAccessFetchStatus:c,userAccessQueryString:a}})),j=(0,c.connect)(A,void 0)((({children:e=null,isFinsightsFeatureEnabled:t,isIbmFeatureEnabled:a,isRosFeatureEnabled:r,userAccess:n,userAccessError:s,userAccessFetchStatus:c})=>{const d=(0,y.jD)();let u=o().createElement(k,{pathname:d});return c===D.iF.inProgress?u=o().createElement(l.g,null):s?u=o().createElement(w.W,null):(e=>{if(!n||c!==D.iF.complete)return!1;const s=(0,x.KT)(n),o=(0,x.FW)(n),l=(0,x.ot)(n),d=(0,x.Sv)(n),u=a&&(0,x.tt)(n),p=(0,x.Xd)(n),h=(0,x.Rt)(n),m=t&&(0,x.yY)(n),g=r&&(0,x.F4)(n);switch(e){case(0,y.dI)(i._.explorer.path):case(0,y.dI)(i._.overview.path):return s||o||l||d||u||h||p;case(0,y.dI)(i._.awsDetails.path):case(0,y.dI)(i._.awsDetailsBreakdown.path):return s;case(0,y.dI)(i._.azureDetails.path):case(0,y.dI)(i._.azureDetailsBreakdown.path):return o;case(0,y.dI)(i._.costModelsDetails.path):return l;case(0,y.dI)(i._.gcpDetails.path):case(0,y.dI)(i._.gcpDetailsBreakdown.path):return d;case(0,y.dI)(i._.ociDetails.path):case(0,y.dI)(i._.ociDetailsBreakdown.path):return p;case(0,y.dI)(i._.ibmDetails.path):case(0,y.dI)(i._.ibmDetailsBreakdown.path):return u;case(0,y.dI)(i._.ocpDetails.path):case(0,y.dI)(i._.ocpDetailsBreakdown.path):return h;case(0,y.dI)(i._.optimizations.path):return g;case(0,y.dI)(i._.rhelDetails.path):case(0,y.dI)(i._.rhelDetailsBreakdown.path):return m;default:return!1}})(d)&&(u=o().createElement(o().Fragment,null,e)),u}))},47947:(e,t,a)=>{a.d(t,{W:()=>l});var r=a(90154),n=a(89376),s=a(39173),o=a(15984),c=a(92950),i=a.n(c);const l=({title:e})=>i().createElement(i().Fragment,null,e&&i().createElement(n.Z,null,i().createElement(s.Z,{title:e})),i().createElement(r.PageSection,null,i().createElement(o.Z,null)))},96351:(e,t,a)=>{a.d(t,{Es:()=>I,F4:()=>_,FE:()=>m,FW:()=>i,HC:()=>u,KT:()=>o,Rt:()=>b,Sv:()=>h,Xd:()=>d,ZC:()=>y,hn:()=>l,mn:()=>f,n9:()=>c,ot:()=>p,tt:()=>g,yY:()=>v});var r=a(91577);const n=(e,t)=>{let a=!1;if(e&&Array.isArray(e.data)){const r=e.data.find((e=>e.type===t));a=r&&r.access}else a=e&&!0===e.data;return a},s=e=>{let t=!1;return e&&e.meta&&(t=e.meta.count>0),t},o=e=>n(e,r.n.aws),c=(e,t)=>o(e)&&s(t),i=e=>n(e,r.n.azure),l=(e,t)=>i(e)&&s(t),d=e=>n(e,r.n.oci),u=(e,t)=>d(e)&&s(t),p=e=>n(e,r.n.cost_model),h=e=>n(e,r.n.gcp),m=(e,t)=>n(e,r.n.gcp)&&s(t),g=e=>h(e),I=(e,t)=>g(e)&&s(t),b=e=>n(e,r.n.ocp),f=(e,t)=>b(e)&&s(t),v=e=>n(e,r.n.rhel),y=(e,t)=>v(e)&&s(t),_=e=>n(e,r.n.ros)}}]);
//# sourceMappingURL=../sourcemaps/permissions.d877f7dadbfa99d3794fb73787d3dd20.js.map