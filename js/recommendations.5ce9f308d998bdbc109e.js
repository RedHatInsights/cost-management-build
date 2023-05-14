"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[5544],{91290:(e,t,a)=>{a.d(t,{iC:()=>i,sN:()=>n});var r=a(40400);const n={name:"OutlinedQuestionCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z",yOffset:0,xOffset:0},i=(0,r.IU)(n)},17918:(e,t)=>{t.VH={name:"--pf-global--FontSize--md",value:"1rem",var:"var(--pf-global--FontSize--md)"},t.ZP=t.VH},40794:(e,t)=>{t.zf={name:"--pf-global--FontSize--xs",value:"0.75rem",var:"var(--pf-global--FontSize--xs)"},t.ZP=t.zf},12289:(e,t)=>{t.Jd={name:"--pf-global--disabled-color--100",value:"#6a6e73",var:"var(--pf-global--disabled-color--100)"},t.ZP=t.Jd},11331:(e,t)=>{t.po={name:"--pf-global--spacer--3xl",value:"4rem",var:"var(--pf-global--spacer--3xl)"},t.ZP=t.po},43789:(e,t)=>{t.Q8={name:"--pf-global--spacer--xs",value:"0.25rem",var:"var(--pf-global--spacer--xs)"},t.ZP=t.Q8},15984:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(85893),n=a(90154),i=a(15138),o=function(){return o=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)};const s=function(){return(0,r.jsxs)(n.EmptyState,o({variant:n.EmptyStateVariant.large,className:"ins-c-empty-state__unavailable pf-m-redhat-font"},{children:[(0,r.jsx)(n.EmptyStateIcon,{icon:i.ExclamationCircleIcon}),(0,r.jsx)(n.Title,o({headingLevel:"h5",size:"lg"},{children:"This page is temporarily unavailable"})),(0,r.jsxs)(n.EmptyStateBody,{children:["Try refreshing the page. If the problem persists, contact your organization administrator or visit our",(0,r.jsxs)("a",o({href:"https://status.redhat.com/",target:"_blank",rel:"noopener noreferrer"},{children:[" ","status page"]}))," ","for known outages."]})]}))}},46955:(e,t,a)=>{a.d(t,{W:()=>c});var r=a(90154),n=a(89376),i=a(39173),o=a(15984),s=a(92950),l=a.n(s);const c=({title:e})=>l().createElement(l().Fragment,null,e&&l().createElement(n.Z,null,l().createElement(i.Z,{title:e})),l().createElement(r.PageSection,null,l().createElement(o.Z,null)))},57810:(e,t,a)=>{a.r(t),a.d(t,{default:()=>T});var r=a(90154),n=a(39333),i=a(89256),o=a(97027),s=a(92950),l=a.n(s),c=a(86896),m=a(77760),f=a(39836),p=a(41882),u=a(38274),g=a(479),d=a(46955),b=a(45402),v=a(25391),h=a(32924),y=a(1156),E=a(2136),S=a(20997),P=a(54467),j=a(91290),O=a(74806),Z=a(49382),z=a(17918),F=a(98499),x=a(48196);const C={header:{backgroundColor:Z.ZP.var,padding:F.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},infoIcon:{fontSize:z.ZP.value},infoTitle:{fontWeight:"bold"},title:{paddingBottom:x.ZP.var}};class I extends l().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState)}render(){const{intl:e}=this.props;return l().createElement("header",{style:C.header},l().createElement("div",{style:C.headerContent},l().createElement(r.Title,{headingLevel:"h1",style:C.title,size:r.TitleSizes["2xl"]},e.formatMessage(o.Z.optimizations),l().createElement("span",{style:C.infoIcon},l().createElement(r.Popover,{"aria-label":e.formatMessage(o.Z.optimizationsInfoArialLabel),enableFlip:!0,bodyContent:l().createElement("p",{style:C.infoTitle},e.formatMessage(o.Z.optimizationsInfo))},l().createElement(r.Button,{"aria-label":e.formatMessage(o.Z.optimizationsInfoButtonArialLabel),variant:r.ButtonVariant.plain},l().createElement(j.iC,null)))))))}}const _=(0,y.X1)((()=>({}))),k=(0,O.ZP)((0,m.connect)(_,{})(I)),w={limit:10,offset:0,order_by:{last_reported:"desc"}},L=i.N.ros,M=i.v.recommendations,T=()=>{const[e,t]=(0,s.useState)(Object.assign({},w)),a=(0,c.Z)(),{closeOptimizationsDrawer:i,report:j,reportError:O,reportFetchStatus:Z,reportQueryString:z}=(({query:e})=>{const t=(0,m.useDispatch)(),a=(()=>{const e=(0,f.useLocation)();return(0,n.mB)(e.search)})(),r=(0,b.VL)(a),i=(0,b.pe)(a),o=(0,v.H)(e)||(0,v.H)(w),l=(0,v.j)(e)||(0,v.j)(w),c=Object.assign(Object.assign(Object.assign({},r&&{[r]:i}),e.filter_by),{limit:e.limit,offset:e.offset,order_by:o,order_how:l}),p=(0,n.pm)(c),u=(0,m.useSelector)((e=>E.R0.selectRos(e,M,L,p))),g=(0,m.useSelector)((e=>E.R0.selectRosFetchStatus(e,M,L,p))),d=(0,m.useSelector)((e=>E.R0.selectRosError(e,M,L,p)));return(0,s.useEffect)((()=>{d||g===y.iF.inProgress||t(E.Ze.fetchRosReport(M,L,p))}),[e]),{closeOptimizationsDrawer:S.Aw.Zv,report:u,reportError:d,reportFetchStatus:g,reportQueryString:p}})({query:e}),F=(e=!1,t=!1)=>{const n=j&&j.meta?j.meta.count:0,i=j&&j.meta?j.meta.limit:w.limit,s=j&&j.meta?j.meta.offset:w.offset,c=Math.trunc(s/i+1);return l().createElement(r.Pagination,{isCompact:!t,isDisabled:e,itemCount:n,onPerPageSelect:(e,t)=>x(t),onSetPage:(e,t)=>C(t),page:c,perPage:i,titles:{paginationTitle:a.formatMessage(o.Z.paginationTitle,{title:a.formatMessage(o.Z.openShift),placement:t?"bottom":"top"})},variant:t?r.PaginationVariant.bottom:r.PaginationVariant.top,widgetId:"exports-pagination"+(t?"-bottom":"")})},x=a=>{const r=h.Lk(e,a,!0);t(r),i()},C=a=>{const r=h.F4(e,j,a,!0);t(r),i()},I=0===(j&&j.meta?j.meta.count:0),_=a.formatMessage(o.Z.optimizations),T=j&&j.meta&&j.meta.count>0;return O?l().createElement(d.W,{title:_}):e.filter_by||T||Z!==y.iF.complete?l().createElement("div",{style:P.W.container},l().createElement(k,null),l().createElement(r.PageSection,null,(()=>{const a=j&&j.meta?j.meta.limit:0,r=j&&j.meta?j.meta.count:0,n=0===r;return l().createElement(p.IH,{isDisabled:n,isProject:!0,itemsPerPage:a,itemsTotal:r,onFilterAdded:a=>(a=>{const r=h.JA(e,a);t(r),i()})(a),onFilterRemoved:a=>(a=>{const r=h.vI(e,a);t(r),i()})(a),pagination:F(n),query:e})})(),Z===y.iF.inProgress?l().createElement(u.g,null):l().createElement(l().Fragment,null,l().createElement(p.Hy,{filterBy:e.filter_by,isLoading:Z===y.iF.inProgress,onSort:(a,r)=>((a,r)=>{const n=h.K8(e,a,r);t(n),i()})(a,r),orderBy:e.order_by,report:j,reportQueryString:z}),F(I,!0)))):l().createElement(g.Y,null)}},32924:(e,t,a)=>{a.d(t,{F4:()=>u,JA:()=>m,K8:()=>g,LB:()=>s,Lk:()=>p,ZE:()=>o,bU:()=>c,ft:()=>l,vI:()=>f});var r=a(39333),n=a(39552);const i=(e,t=!1,a={})=>{const r=Object.assign(Object.assign({},JSON.parse(JSON.stringify(e))),a);return t&&(r.filter&&void 0!==r.filter.offset&&(r.filter=Object.assign(Object.assign({},e.filter),{offset:0})),void 0!==r.offset&&(r.offset=0)),r},o=(e,t,a=!1)=>{const n=i(e,a);return`${t.pathname}?${(0,r.IV)(n)}`},s=e=>i(e),l=e=>i(e),c=e=>i(e,!1,{order_by:void 0}),m=(e,t)=>{const a=i(e,!0);return(0,n.oQ)(a,t)},f=(e,t)=>{const a=i(e,!0);return(0,n.cJ)(a,t)},p=(e,t,a=!1)=>i(e,!1,Object.assign({},a?{limit:t}:{filter:Object.assign(Object.assign({},e.filter),{limit:t})})),u=(e,t,a,r=!1)=>{let n=10;t&&t.meta&&(r&&void 0!==t.meta.limit?n=t.meta.limit:t.meta.filter&&void 0!==t.meta.filter.limit&&(n=t.meta.filter.limit));const o=a*n-n;return i(e,!1,Object.assign({},r?{limit:n,offset:o}:{filter:Object.assign(Object.assign({},e.filter),{limit:n,offset:o})}))},g=(e,t,a,r=undefined)=>i(e,!1,{order_by:Object.assign({[t]:a?"asc":"desc"},r&&{date:r})})}}]);
//# sourceMappingURL=../sourcemaps/recommendations.4228b1ec29f9122ee3cd4cc5f151f580.js.map