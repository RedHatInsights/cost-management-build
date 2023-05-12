"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[8141],{93562:(t,e,r)=>{r.r(e),r.d(e,{default:()=>lt});var o=r(1326),s=r(84717),i=r(39333),n=r(6456),a=r(50081),c=r(97027),p=r(92950),l=r.n(p),u=r(74806),m=r(77760),g=r(91919),d=r(55246),h=r(37269),b=r(86482),f=r(1156),y=r(22369),R=r(62331),S=r(15920),P=r(20997),E=r(15829),O=r(68025),v=r(14483),j=r(5842),C=r(27769),F=r(73903);const D=(0,f.X1)(((t,{title:e})=>({selectWidgets:F.cm.selectWidgets(t),widgets:F.cm.selectCurrentWidgets(t),title:e}))),T=(0,m.connect)(D,{})(C.X);var _=r(87935),Z=r(70982);const w=(0,f.X1)(((t,e)=>({selectWidgets:Z.P2.selectWidgets(t),widgets:Z.P2.selectCurrentWidgets(t)}))),V=(0,m.connect)(w,{})(_.f);var x=r(90154),z=r(52016),B=r(89256),Q=r(2136);const W=B.v.recommendations,k=B.N.ros;class q extends l().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.updateReport=()=>{const{fetchReport:t,reportQueryString:e}=this.props;t(W,k,e)}}componentDidMount(){this.updateReport()}render(){const{intl:t,report:e}=this.props,r=e&&e.meta?e.meta.count:0;return l().createElement(x.Badge,{screenReaderText:t.formatMessage(c.Z.optimizationsDetails,{count:r})},r)}}const J=(0,f.X1)(((t,{router:e})=>{const r=(0,z.mB)(e.location.search),o=(0,h.VL)(r),s=(0,h.pe)(r),n=Object.assign({},o&&{[o]:s}),a=(0,i.pm)(n);return{report:Q.R0.selectRos(t,W,k,a),reportError:Q.R0.selectRosError(t,W,k,a),reportFetchStatus:Q.R0.selectRosFetchStatus(t,W,k,a),reportQueryString:a}})),M={fetchReport:Q.Ze.fetchRosReport},X=(0,u.ZP)((0,j.E)((0,m.connect)(J,M)(q)));var I=r(52471),N=r(14411),L=r(47947),H=r(59454),A=r(38679),G=r(68883),U=r(14222),K=r(10066);const Y={limit:10,offset:0,order_by:{last_reported:"desc"}},$=B.N.ros,tt=B.v.recommendations;class et extends l().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.getPagination=(t=!1,e=!1)=>{const{intl:r,report:o}=this.props,s=o&&o.meta?o.meta.count:0,i=o&&o.meta?o.meta.limit:Y.limit,n=o&&o.meta?o.meta.offset:Y.offset,a=Math.trunc(n/i+1);return l().createElement(x.Pagination,{isCompact:!e,isDisabled:t,itemCount:s,onPerPageSelect:(t,e)=>this.handleOnPerPageSelect(e),onSetPage:(t,e)=>this.handleOnSetPage(e),page:a,perPage:i,titles:{paginationTitle:r.formatMessage(c.Z.paginationTitle,{title:r.formatMessage(c.Z.openShift),placement:e?"bottom":"top"})},variant:e?x.PaginationVariant.bottom:x.PaginationVariant.top,widgetId:"exports-pagination"+(e?"-bottom":"")})},this.getTable=()=>{const{query:t,report:e,reportFetchStatus:r,reportQueryString:o,router:s}=this.props;return l().createElement(H.Hy,{isLoading:r===f.iF.inProgress,onSort:(e,r)=>(0,G.K8)(t,s,e,r),report:e,reportQueryString:o})},this.getToolbar=()=>{const{query:t,report:e,router:r}=this.props,o=e&&e.meta?e.meta.limit:0,s=e&&e.meta?e.meta.count:0,i=0===s;return l().createElement(H.IH,{isDisabled:i,itemsPerPage:o,itemsTotal:s,onFilterAdded:e=>(0,G.JA)(t,r,e),onFilterRemoved:e=>(0,G.vI)(t,r,e),pagination:this.getPagination(i),query:t})},this.handleOnPerPageSelect=t=>{const{query:e,router:r}=this.props,o=Object.assign(Object.assign({},JSON.parse(JSON.stringify(e))),{limit:t}),s=(0,K.Z)(o,r.location,!0);r.navigate(s,{replace:!0})},this.handleOnSetPage=t=>{const{query:e,report:r,router:o}=this.props,s=r&&r.meta&&r.meta.limit?r.meta.limit:Y.limit,i=t*s-1,n=Object.assign(Object.assign({},JSON.parse(JSON.stringify(e))),{limit:s,offset:i}),a=(0,K.Z)(n,o.location);o.navigate(a,{replace:!0})},this.updateReport=()=>{const{fetchRosReport:t,reportQueryString:e}=this.props;t(tt,$,e)}}componentDidMount(){this.updateReport()}componentDidUpdate(t){const{report:e,reportError:r,reportQueryString:o,router:s}=this.props,i=t.reportQueryString!==o,n=!e&&!r,a=!s.location.search;(i||n||a)&&this.updateReport()}render(){const{intl:t,query:e,report:r,reportError:o,reportFetchStatus:s}=this.props,i=0===(r&&r.meta?r.meta.count:0),n=t.formatMessage(c.Z.optimizations),a=r&&r.meta&&r.meta.count>0;return o?l().createElement(L.W,{title:n}):e.filter_by||a||s!==f.iF.complete?l().createElement("div",{style:A.W.optimizationsContainer},this.getToolbar(),s===f.iF.inProgress?l().createElement(I.g,null):l().createElement(l().Fragment,null,this.getTable(),l().createElement("div",{style:A.W.pagination},this.getPagination(i,!0)))):l().createElement(N.Y,null)}}const rt=(0,f.X1)(((t,{router:e})=>{const r=(0,i.mB)(e.location.search),o=(0,h.VL)(r),s=(0,h.pe)(r),n=(0,U.H)(r)||(0,U.H)(Y),a=(0,U.j)(r)||(0,U.j)(Y),c=Object.assign(Object.assign({},Y),r),p=Object.assign(Object.assign(Object.assign({},o&&{[o]:s}),c.filter_by),{limit:c.limit,offset:c.offset,order_by:n,order_how:a}),l=(0,i.pm)(p);return{query:c,report:Q.R0.selectRos(t,tt,$,l),reportError:Q.R0.selectRosError(t,tt,$,l),reportFetchStatus:Q.R0.selectRosFetchStatus(t,tt,$,l),reportQueryString:l}})),ot={fetchRosReport:Q.Ze.fetchRosReport},st=(0,u.ZP)((0,j.E)((0,m.connect)(rt,ot)(et))),it=(0,O.dI)(g._.ocpDetails.path),nt=n.C.cost,at=n.K.ocp,ct=(0,f.X1)(((t,{intl:e,router:r})=>{const n=(0,i.mB)(r.location.search),p=(0,i.fU)(n),u=(0,h.VL)(n),m=(0,h.pe)(n),g=y.iJ.selectIsCostDistributionFeatureEnabled(t),d="project"===u&&g?(0,E.vn)():void 0,f=(0,E.zC)(),P=Object.assign({},n),O={currency:f,filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign(Object.assign({},p&&p.filter_by&&p.filter_by),n&&n.isPlatformCosts&&{category:v.rx}),u&&"*"!==m&&{[u]:void 0}),exclude:Object.assign({},p&&p.exclude&&p.exclude),group_by:Object.assign({},u&&{[u]:m})},j=(0,i.pm)(O),C=S.ZV.selectReport(t,at,nt,j),F=S.ZV.selectReportError(t,at,nt,j),D=S.ZV.selectReportFetchStatus(t,at,nt,j),_=(0,s.H)(R.NT),Z=R.aX.selectProviders(t,o.l.all,_),w=R.aX.selectProvidersFetchStatus(t,o.l.all,_),x=n[v.yG]?n[v.yG]:m;return{costDistribution:d,costOverviewComponent:l().createElement(T,{costDistribution:d,currency:f,groupBy:u,isCostDistributionFeatureEnabled:y.iJ.selectIsCostDistributionFeatureEnabled(t),isPlatformCosts:n&&n.isPlatformCosts,report:C,title:x}),currency:f,description:n[v.eG],detailsURL:it,emptyStateTitle:e.formatMessage(c.Z.ocpDetailsTitle),groupBy:u,groupByValue:m,historicalDataComponent:l().createElement(V,{costDistribution:d,currency:f}),isOptimizationsTab:void 0!==n.optimizationsTab,isRosFeatureEnabled:y.iJ.selectIsRosFeatureEnabled(t),optimizationsBadgeComponent:l().createElement(X,null),optimizationsComponent:"project"===u&&"*"!==m?l().createElement(st,null):void 0,providers:(0,b.BV)(Z,o.l.ocp),providersFetchStatus:w,providerType:o.l.ocp,query:P,report:C,reportError:F,reportFetchStatus:D,reportType:nt,reportPathsType:at,reportQueryString:j,showCostDistribution:"project"===u,tagPathsType:a.L.ocp,title:x}})),pt={closeOptimizationsDrawer:P.Aw.Zv,fetchReport:S.nx.fetchReport},lt=(0,u.ZP)((0,j.E)((0,m.connect)(ct,pt)(d.C)))}}]);
//# sourceMappingURL=../sourcemaps/ocpBreakdown.ac47ed8948e1fe72052722e8448dc9dc.js.map