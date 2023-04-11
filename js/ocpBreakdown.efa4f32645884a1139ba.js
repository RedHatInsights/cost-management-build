"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[8141],{93562:(t,e,r)=>{r.r(e),r.d(e,{default:()=>lt});var o=r(1326),s=r(84717),i=r(39333),a=r(6456),n=r(50081),c=r(97027),p=r(92950),l=r.n(p),u=r(74806),m=r(77760),g=r(91919),h=r(55246),d=r(37269),f=r(86482),y=r(1156),b=r(78898),R=r(62331),S=r(15920),P=r(20997),E=r(15829),O=r(68025),v=r(14483),j=r(5842),F=r(67709),C=r(73903);const T=(0,y.X1)(((t,{title:e})=>({selectWidgets:C.cm.selectWidgets(t),widgets:C.cm.selectCurrentWidgets(t),title:e}))),_=(0,m.connect)(T,{})(F.X);var Z=r(87935),B=r(70982);const w=(0,y.X1)(((t,e)=>({selectWidgets:B.P2.selectWidgets(t),widgets:B.P2.selectCurrentWidgets(t)}))),D=(0,m.connect)(w,{})(Z.f);var V=r(90154),x=r(52016),z=r(89256),Q=r(2136);const W=z.v.recommendations,k=z.N.ros;class q extends l().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.updateReport=()=>{const{fetchReport:t,reportFetchStatus:e,reportQueryString:r}=this.props;e!==y.iF.inProgress&&t(W,k,r)}}componentDidMount(){this.updateReport()}render(){const{intl:t,report:e}=this.props,r=e&&e.meta?e.meta.count:0;return l().createElement(V.Badge,{screenReaderText:t.formatMessage(c.Z.optimizationsDetails,{count:r})},r)}}const M=(0,y.X1)(((t,{router:e})=>{const r=(0,x.mB)(e.location.search),o=(0,d.VL)(r),s=(0,d.pe)(r),a=Object.assign(Object.assign({},o&&{[o]:s}),{limit:r.limit||10,offset:r.offset||0}),n=(0,i.pm)(a);return{report:Q.R0.selectRos(t,W,k,n),reportError:Q.R0.selectRosError(t,W,k,n),reportFetchStatus:Q.R0.selectRosFetchStatus(t,W,k,n),reportQueryString:n}})),X={fetchReport:Q.Ze.fetchRosReport},N=(0,u.ZP)((0,j.E)((0,m.connect)(M,X)(q)));var L=r(52471),H=r(14411),J=r(47947),I=r(59454),G=r(38679),U=r(19727),A=r(14222),K=r(10066);const Y={limit:10,offset:0,order_by:{last_reported:"desc"}},$=z.N.ros,tt=z.v.recommendations;class et extends l().Component{constructor(){super(...arguments),this.defaultState={columns:[],rows:[]},this.state=Object.assign({},this.defaultState),this.getPagination=(t=!1,e=!1)=>{const{intl:r,report:o}=this.props,s=o&&o.meta?o.meta.count:0,i=o&&o.meta?o.meta.limit:Y.limit,a=o&&o.meta?o.meta.offset:Y.offset,n=Math.trunc(a/i+1);return l().createElement(V.Pagination,{isCompact:!e,isDisabled:t,itemCount:s,onPerPageSelect:(t,e)=>this.handlePerPageSelect(e),onSetPage:(t,e)=>this.handleSetPage(e),page:n,perPage:i,titles:{paginationTitle:r.formatMessage(c.Z.paginationTitle,{title:r.formatMessage(c.Z.openShift),placement:e?"bottom":"top"})},variant:e?V.PaginationVariant.bottom:V.PaginationVariant.top,widgetId:"exports-pagination"+(e?"-bottom":"")})},this.getTable=()=>{const{query:t,report:e,reportFetchStatus:r,reportQueryString:o,router:s}=this.props;return l().createElement(I.Hy,{isLoading:r===y.iF.inProgress,onSort:(e,r)=>(0,U.yB)(t,s,e,r),report:e,reportQueryString:o})},this.getToolbar=()=>{const{query:t,report:e,router:r}=this.props,o=e&&e.meta?e.meta.limit:0,s=e&&e.meta?e.meta.count:0,i=0===s;return l().createElement(I.IH,{isDisabled:i,itemsPerPage:o,itemsTotal:s,onFilterAdded:e=>(0,U.$3)(t,r,e),onFilterRemoved:e=>(0,U.q7)(t,r,e),pagination:this.getPagination(i),query:t})},this.handlePerPageSelect=t=>{const{query:e,router:r}=this.props,o=Object.assign(Object.assign({},JSON.parse(JSON.stringify(e))),{limit:t}),s=(0,K.Z)(o,r.location,!0);r.navigate(s,{replace:!0})},this.handleSetPage=t=>{const{query:e,report:r,router:o}=this.props,s=r&&r.meta&&r.meta.limit?r.meta.limit:Y.limit,i=t*s-1,a=Object.assign(Object.assign({},JSON.parse(JSON.stringify(e))),{limit:s,offset:i}),n=(0,K.Z)(a,o.location);o.navigate(n,{replace:!0})},this.updateReport=()=>{const{fetchRosReport:t,reportFetchStatus:e,reportQueryString:r}=this.props;e!==y.iF.inProgress&&t(tt,$,r)}}componentDidMount(){this.updateReport()}componentDidUpdate(t){const{report:e,reportError:r,reportQueryString:o,router:s}=this.props,i=t.reportQueryString!==o,a=!e&&!r,n=!s.location.search;(i||a||n)&&this.updateReport()}render(){const{intl:t,report:e,reportError:r,reportFetchStatus:o}=this.props,s=0===(e&&e.meta?e.meta.count:0),i=t.formatMessage(c.Z.optimizations),a=e&&e.meta&&e.meta.count>0;return r?l().createElement(J.W,{title:i}):a||o!==y.iF.complete?l().createElement("div",{style:G.W.optimizationsContainer},this.getToolbar(),o===y.iF.inProgress?l().createElement(L.g,null):l().createElement(l().Fragment,null,this.getTable(),l().createElement("div",{style:G.W.pagination},this.getPagination(s,!0)))):l().createElement(H.Y,null)}}const rt=(0,y.X1)(((t,{router:e})=>{const r=(0,i.mB)(e.location.search),o=(0,d.VL)(r),s=(0,d.pe)(r),a=(0,A.H)(r)||(0,A.H)(Y),n=(0,A.j)(r)||(0,A.j)(Y),c=Object.assign(Object.assign({},Y),r),p=Object.assign(Object.assign(Object.assign({},o&&{[o]:s}),c.filter_by),{limit:c.limit,offset:c.offset,order_by:a,order_how:n}),l=(0,i.pm)(p),u=Q.R0.selectRos(t,tt,$,l),m=Q.R0.selectRosError(t,tt,$,l),g=Q.R0.selectRosFetchStatus(t,tt,$,l);return{groupBy:r.group_by,query:c,report:u,reportError:m,reportFetchStatus:g,reportQueryString:l}})),ot={fetchRosReport:Q.Ze.fetchRosReport},st=(0,u.ZP)((0,j.E)((0,m.connect)(rt,ot)(et))),it=(0,O.dI)(g._.ocpDetails.path),at=a.C.cost,nt=a.K.ocp,ct=(0,y.X1)(((t,{intl:e,router:r})=>{const a=(0,i.mB)(r.location.search),p=(0,i.fU)(a),u=(0,d.VL)(a),m=(0,d.pe)(a),g=(0,E.zC)(),h=Object.assign({},a),y={currency:g,filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign(Object.assign({},p&&p.filter_by&&p.filter_by),a&&a.isPlatformCosts&&{category:v.rx}),u&&"*"!==m&&{[u]:void 0}),exclude:Object.assign({},p&&p.exclude&&p.exclude),group_by:Object.assign({},u&&{[u]:m})},P=(0,i.pm)(y),O=S.ZV.selectReport(t,nt,at,P),j=S.ZV.selectReportError(t,nt,at,P),F=S.ZV.selectReportFetchStatus(t,nt,at,P),C=(0,s.H)(R.NT),T=R.aX.selectProviders(t,o.l.all,C),Z=R.aX.selectProvidersFetchStatus(t,o.l.all,C),B=a[v.yG]?a[v.yG]:m;return{costOverviewComponent:l().createElement(_,{currency:g,groupBy:u,isPlatformCosts:a&&a.isPlatformCosts,report:O,title:B}),currency:g,description:a[v.eG],detailsURL:it,emptyStateTitle:e.formatMessage(c.Z.ocpDetailsTitle),groupBy:u,groupByValue:m,historicalDataComponent:l().createElement(D,{currency:g}),isOptimizationsTab:void 0!==a.optimizationsTab,isRosFeatureEnabled:b.iJ.selectIsRosFeatureEnabled(t),optimizationsBadgeComponent:l().createElement(N,null),optimizationsComponent:"project"===u&&"*"!==m?l().createElement(st,null):void 0,providers:(0,f.BV)(T,o.l.ocp),providersFetchStatus:Z,providerType:o.l.ocp,query:h,report:O,reportError:j,reportFetchStatus:F,reportType:at,reportPathsType:nt,reportQueryString:P,tagReportPathsType:n.L.ocp,title:B}})),pt={closeOptimizationsDrawer:P.Aw.Zv,fetchReport:S.nx.fetchReport},lt=(0,u.ZP)((0,j.E)((0,m.connect)(ct,pt)(h.C)))}}]);
//# sourceMappingURL=../sourcemaps/ocpBreakdown.f0c54c0bebe4e9d040617bca694c3f16.js.map