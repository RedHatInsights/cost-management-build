"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[5544],{91290:(e,t,a)=>{a.d(t,{iC:()=>i,sN:()=>n});var r=a(40400);const n={name:"OutlinedQuestionCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z",yOffset:0,xOffset:0},i=(0,r.IU)(n)},17918:(e,t)=>{t.VH={name:"--pf-global--FontSize--md",value:"1rem",var:"var(--pf-global--FontSize--md)"},t.ZP=t.VH},40794:(e,t)=>{t.zf={name:"--pf-global--FontSize--xs",value:"0.75rem",var:"var(--pf-global--FontSize--xs)"},t.ZP=t.zf},12289:(e,t)=>{t.Jd={name:"--pf-global--disabled-color--100",value:"#6a6e73",var:"var(--pf-global--disabled-color--100)"},t.ZP=t.Jd},11331:(e,t)=>{t.po={name:"--pf-global--spacer--3xl",value:"4rem",var:"var(--pf-global--spacer--3xl)"},t.ZP=t.po},43789:(e,t)=>{t.Q8={name:"--pf-global--spacer--xs",value:"0.25rem",var:"var(--pf-global--spacer--xs)"},t.ZP=t.Q8},15984:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(85893),n=a(90154),i=a(15138),o=function(){return o=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)};const s=function(){return(0,r.jsxs)(n.EmptyState,o({variant:n.EmptyStateVariant.large,className:"ins-c-empty-state__unavailable pf-m-redhat-font"},{children:[(0,r.jsx)(n.EmptyStateIcon,{icon:i.ExclamationCircleIcon}),(0,r.jsx)(n.Title,o({headingLevel:"h5",size:"lg"},{children:"This page is temporarily unavailable"})),(0,r.jsxs)(n.EmptyStateBody,{children:["Try refreshing the page. If the problem persists, contact your organization administrator or visit our",(0,r.jsxs)("a",o({href:"https://status.redhat.com/",target:"_blank",rel:"noopener noreferrer"},{children:[" ","status page"]}))," ","for known outages."]})]}))}},47947:(e,t,a)=>{a.d(t,{W:()=>c});var r=a(90154),n=a(89376),i=a(39173),o=a(15984),s=a(92950),l=a.n(s);const c=({title:e})=>l().createElement(l().Fragment,null,e&&l().createElement(n.Z,null,l().createElement(i.Z,{title:e})),l().createElement(r.PageSection,null,l().createElement(o.Z,null)))},38467:(e,t,a)=>{a.r(t),a.d(t,{default:()=>R});var r=a(90154),n=a(52016),i=a(89256),o=a(97027),s=a(92950),l=a.n(s),c=a(74806),p=a(77760),m=a(52471),g=a(14411),u=a(47947),f=a(59454),d=a(19727),h=a(14222),b=a(10066),y=a(1156),v=a(2136),S=a(5842),O=a(38679),E=a(91290);class P extends l().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState)}render(){const{intl:e}=this.props;return l().createElement("header",{style:O.W.header},l().createElement("div",{style:O.W.headerContent},l().createElement(r.Title,{headingLevel:"h1",style:O.W.title,size:r.TitleSizes["2xl"]},e.formatMessage(o.Z.optimizations),l().createElement("span",{style:O.W.infoIcon},l().createElement(r.Popover,{"aria-label":e.formatMessage(o.Z.optimizationsInfoArialLabel),enableFlip:!0,bodyContent:l().createElement("p",{style:O.W.infoTitle},e.formatMessage(o.Z.optimizationsInfo))},l().createElement(r.Button,{"aria-label":e.formatMessage(o.Z.optimizationsInfoButtonArialLabel),variant:r.ButtonVariant.plain},l().createElement(E.iC,null)))))))}}const j=(0,y.X1)((()=>({}))),Z=(0,c.ZP)((0,p.connect)(j,{})(P)),z={limit:10,offset:0,order_by:{last_reported:"desc"}},C=i.N.ros,x=i.v.recommendations;class F extends l().Component{constructor(){super(...arguments),this.defaultState={columns:[],rows:[]},this.state=Object.assign({},this.defaultState),this.getPagination=(e=!1,t=!1)=>{const{intl:a,report:n}=this.props,i=n&&n.meta?n.meta.count:0,s=n&&n.meta?n.meta.limit:z.limit,c=n&&n.meta?n.meta.offset:z.offset,p=Math.trunc(c/s+1);return l().createElement(r.Pagination,{isCompact:!t,isDisabled:e,itemCount:i,onPerPageSelect:(e,t)=>this.handlePerPageSelect(t),onSetPage:(e,t)=>this.handleSetPage(t),page:p,perPage:s,titles:{paginationTitle:a.formatMessage(o.Z.paginationTitle,{title:a.formatMessage(o.Z.openShift),placement:t?"bottom":"top"})},variant:t?r.PaginationVariant.bottom:r.PaginationVariant.top,widgetId:"exports-pagination"+(t?"-bottom":"")})},this.getTable=()=>{const{query:e,report:t,reportFetchStatus:a,reportQueryString:r,router:n}=this.props;return l().createElement(f.Hy,{isLoading:a===y.iF.inProgress,onSort:(t,a)=>(0,d.yB)(e,n,t,a),report:t,reportQueryString:r})},this.getToolbar=()=>{const{query:e,report:t,router:a}=this.props,r=t&&t.meta?t.meta.limit:0,n=t&&t.meta?t.meta.count:0,i=0===n;return l().createElement(f.IH,{isDisabled:i,itemsPerPage:r,itemsTotal:n,onFilterAdded:t=>(0,d.$3)(e,a,t),onFilterRemoved:t=>(0,d.q7)(e,a,t),pagination:this.getPagination(i),query:e})},this.handlePerPageSelect=e=>{const{query:t,router:a}=this.props,r=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{limit:e}),n=(0,b.Z)(r,a.location,!0);a.navigate(n,{replace:!0})},this.handleSetPage=e=>{const{query:t,report:a,router:r}=this.props,n=a&&a.meta&&a.meta.limit?a.meta.limit:z.limit,i=e*n-1,o=Object.assign(Object.assign({},JSON.parse(JSON.stringify(t))),{limit:n,offset:i}),s=(0,b.Z)(o,r.location);r.navigate(s,{replace:!0})},this.updateReport=()=>{const{fetchRosReport:e,reportFetchStatus:t,reportQueryString:a}=this.props;t!==y.iF.inProgress&&e(x,C,a)}}componentDidMount(){this.updateReport()}componentDidUpdate(e){const{report:t,reportError:a,reportQueryString:r,router:n}=this.props,i=e.reportQueryString!==r,o=!t&&!a,s=!n.location.search;(i||o||s)&&this.updateReport()}render(){const{intl:e,query:t,report:a,reportError:r,reportFetchStatus:n}=this.props,i=0===(a&&a.meta?a.meta.count:0),s=e.formatMessage(o.Z.optimizations),c=a&&a.meta&&a.meta.count>0;return r?l().createElement(u.W,{title:s}):t.filter_by||c||n!==y.iF.complete?l().createElement("div",{style:O.W.optimizationsContainer},l().createElement(Z,null),l().createElement("div",{style:O.W.content},l().createElement("div",{style:O.W.toolbarContainer},this.getToolbar()),n===y.iF.inProgress?l().createElement(m.g,null):l().createElement(l().Fragment,null,l().createElement("div",{style:O.W.tableContainer},this.getTable()),l().createElement("div",{style:O.W.paginationContainer},l().createElement("div",{style:O.W.pagination},this.getPagination(i,!0)))))):l().createElement(g.Y,{title:s})}}const J=(0,y.X1)(((e,{router:t})=>{const a=(0,n.mB)(t.location.search),r=(0,h.H)(a)||(0,h.H)(z),i=(0,h.j)(a)||(0,h.j)(z),o=Object.assign(Object.assign({},z),a),s=Object.assign(Object.assign({},o.filter_by),{order_by:r,order_how:i}),l=(0,n.pm)(s);return{query:o,report:v.R0.selectRos(e,x,C,l),reportError:v.R0.selectRosError(e,x,C,l),reportFetchStatus:v.R0.selectRosFetchStatus(e,x,C,l),reportQueryString:l}})),N={fetchRosReport:v.Ze.fetchRosReport},R=(0,c.ZP)((0,S.E)((0,p.connect)(J,N)(F)))},19727:(e,t,a)=>{a.d(t,{$3:()=>s,$9:()=>p,_s:()=>i,jl:()=>o,q7:()=>l,xh:()=>c,yB:()=>m});var r=a(9256),n=a(10066);const i=(e,t,a,r=!1)=>{const i=Object.assign({},JSON.parse(JSON.stringify(e)));t.navigate((0,n.Z)(i,t.location,r),{replace:!0})},o=(e,t,a,r=!1)=>{const i=Object.assign({},JSON.parse(JSON.stringify(e)));t.navigate((0,n.Z)(i,t.location,r),{replace:!0})},s=(e,t,a)=>{const i=(0,r.oQ)(e,a);t.navigate((0,n.Z)(i,t.location,!0),{replace:!0})},l=(e,t,a)=>{const i=(0,r.cJ)(e,a);t.navigate((0,n.Z)(i,t.location,!0),{replace:!0})},c=(e,t,a)=>{const r=Object.assign({},JSON.parse(JSON.stringify(e)));r.filter=Object.assign(Object.assign({},e.filter),{limit:a});const i=(0,n.Z)(r,t.location,!0);t.navigate(i,{replace:!0})},p=(e,t,a,r)=>{const i=a&&a.meta&&a.meta.filter&&a.meta.filter.limit?a.meta.filter.limit:10,o=r*i-i,s=Object.assign({},JSON.parse(JSON.stringify(e)));s.filter=Object.assign(Object.assign({},e.filter),{offset:o});const l=(0,n.Z)(s,t.location);t.navigate(l,{replace:!0})},m=(e,t,a,r,i=undefined)=>{const o=Object.assign({},JSON.parse(JSON.stringify(e)));o.order_by={},o.order_by[a]=r?"asc":"desc",i&&(o.order_by.date=i);const s=(0,n.Z)(o,t.location);t.navigate(s,{replace:!0})}},10066:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(39333);const n=(e,t,a=!1)=>(a&&(e.filter=Object.assign(Object.assign({},e.filter),{offset:0})),`${t.pathname}?${(0,r.IV)(e)}`)}}]);
//# sourceMappingURL=../sourcemaps/recommendations.d571e6f999c3712045085fb311edcdee.js.map