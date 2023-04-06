"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[8141],{93562:(t,e,r)=>{r.r(e),r.d(e,{default:()=>lt});var o=r(1326),s=r(79112),i=r(84717),a=r(6456),n=r(50081),c=r(97027),p=r(92950),l=r.n(p),u=r(74806),m=r(77760),g=r(91919),d=r(55246),h=r(37269),y=r(54583),f=r(86482),b=r(1156),R=r(78898),S=r(62331),E=r(15920),P=r(20997),v=r(15829),F=r(68025),O=r(14483),_=r(5842),C=r(67709),T=r(73903);const j=(0,b.X1)(((t,{title:e})=>({selectWidgets:T.cm.selectWidgets(t),widgets:T.cm.selectCurrentWidgets(t),title:e}))),Z=(0,m.connect)(j,{})(C.X);var B=r(87935),D=r(70982);const V=(0,b.X1)(((t,e)=>({selectWidgets:D.P2.selectWidgets(t),widgets:D.P2.selectCurrentWidgets(t)}))),W=(0,m.connect)(V,{})(B.f);var w=r(90154),x=r(39333),z=r(52016),Q=r(89256),k=r(2136);const q=Q.v.recommendations,X=Q.N.ros;class M extends l().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.updateReport=()=>{const{fetchReport:t,reportFetchStatus:e,reportQueryString:r}=this.props;e!==b.iF.inProgress&&t(q,X,r)}}componentDidMount(){this.updateReport()}render(){const{intl:t,report:e}=this.props,r=e&&e.meta?e.meta.count:0;return l().createElement(w.Badge,{screenReaderText:t.formatMessage(c.Z.optimizationsDetails,{count:r})},r)}}const L=(0,b.X1)(((t,{router:e})=>{const r=(0,z.mB)(e.location.search),o=(0,h.VL)(r),s=(0,h.pe)(r),i=Object.assign(Object.assign({},o&&{[o]:s}),{limit:r.limit||10,offset:r.offset||0}),a=(0,x.pm)(i);return{query:i,report:k.R0.selectRos(t,q,X,a),reportError:k.R0.selectRosError(t,q,X,a),reportFetchStatus:k.R0.selectRosFetchStatus(t,q,X,a),reportQueryString:a}})),I={fetchReport:k.Ze.fetchRosReport},G=(0,u.ZP)((0,_.E)((0,m.connect)(L,I)(M)));var H=r(52471),N=r(28688),A=r(47947),U=r(59454),$=r(38679),J=r(19727);const K={limit:10,offset:0,order_by:{cost:"desc"}},Y=Q.N.ros,tt=Q.v.recommendations;class et extends l().Component{constructor(){super(...arguments),this.defaultState={columns:[],rows:[]},this.state=Object.assign({},this.defaultState),this.getPagination=(t=!1,e=!1)=>{const{intl:r,query:o,report:s,router:i}=this.props,a=s&&s.meta?s.meta.count:0,n=s&&s.meta?s.meta.limit:K.limit,p=(s&&s.meta?s.meta.offset:K.offset)/n+1;return l().createElement(w.Pagination,{isCompact:!e,isDisabled:t,itemCount:a,onPerPageSelect:(t,e)=>(0,J.xh)(o,i,e),onSetPage:(t,e)=>(0,J.$9)(o,i,s,e),page:p,perPage:n,titles:{paginationTitle:r.formatMessage(c.Z.paginationTitle,{title:r.formatMessage(c.Z.openShift),placement:e?"bottom":"top"})},variant:e?w.PaginationVariant.bottom:w.PaginationVariant.top,widgetId:"exports-pagination"+(e?"-bottom":"")})},this.getTable=()=>{const{query:t,report:e,reportFetchStatus:r,reportQueryString:o,router:s}=this.props;return l().createElement(U.Hy,{isLoading:r===b.iF.inProgress,onSort:(e,r)=>(0,J.yB)(t,s,e,r),report:e,reportQueryString:o})},this.getToolbar=()=>{const{query:t,report:e,router:r}=this.props,o=e&&e.meta?e.meta.limit:0,s=e&&e.meta?e.meta.count:0,i=0===s;return l().createElement(U.IH,{isDisabled:i,itemsPerPage:o,itemsTotal:s,onFilterAdded:e=>(0,J.$3)(t,r,e),onFilterRemoved:e=>(0,J.q7)(t,r,e),pagination:this.getPagination(i),query:t})},this.updateReport=()=>{const{fetchRosReport:t,reportFetchStatus:e,reportQueryString:r}=this.props;e!==b.iF.inProgress&&t(tt,Y,r)}}componentDidMount(){this.updateReport()}componentDidUpdate(t){const{report:e,reportError:r,reportQueryString:o,router:s}=this.props,i=t.reportQueryString!==o,a=!e&&!r,n=!s.location.search;(i||a||n)&&this.updateReport()}render(){const{intl:t,report:e,reportError:r,reportFetchStatus:o}=this.props,s=0===(e&&e.meta?e.meta.count:0),i=t.formatMessage(c.Z.optimizations),a=e&&e.meta&&e.meta.count>0;return r?l().createElement(A.W,{title:i}):a||o!==b.iF.complete?l().createElement("div",{style:$.W.optimizationsContainer},this.getToolbar(),o===b.iF.inProgress?l().createElement(H.g,null):l().createElement(l().Fragment,null,this.getTable(),l().createElement("div",{style:$.W.pagination},this.getPagination(s,!0)))):l().createElement(N.Y,null)}}const rt=(0,b.X1)(((t,{router:e})=>{const r=(0,z.mB)(e.location.search),o=(0,h.VL)(r),s=(0,h.pe)(r),i=Object.assign(Object.assign({},o&&{[o]:s}),{filter_by:r.filter_by||K.filter_by,limit:r.limit||K.limit,offset:r.offset||K.offset}),a=(0,z.pm)(Object.assign({},i)),n=k.R0.selectRos(t,tt,Y,a),c=k.R0.selectRosError(t,tt,Y,a),p=k.R0.selectRosFetchStatus(t,tt,Y,a);return{groupBy:r.group_by,query:i,report:n,reportError:c,reportFetchStatus:p,reportQueryString:a}})),ot={fetchRosReport:k.Ze.fetchRosReport},st=(0,u.ZP)((0,_.E)((0,m.connect)(rt,ot)(et))),it=(0,F.dI)(g._.ocpDetails.path),at=a.C.cost,nt=a.K.ocp,ct=(0,b.X1)(((t,{intl:e,router:r})=>{const a=(0,s.mB)(r.location.search),p=(0,h.VL)(a),u=(0,h.pe)(a),m=(0,v.zC)(),g={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign({},a&&a.filter_by&&a.filter_by),a&&a.filter&&a.filter.category&&{category:a.filter.category}),exclude:Object.assign({},a&&a.exclude&&a.exclude),group_by:Object.assign({},p&&{[p]:u}),category:a.category},d=(0,s.pm)(Object.assign(Object.assign({},g),{category:void 0,currency:m,filter_by:Object.assign(Object.assign({},g.filter_by),p&&"*"!==u&&{[p]:void 0})})),b=E.ZV.selectReport(t,nt,at,d),P=E.ZV.selectReportError(t,nt,at,d),F=E.ZV.selectReportFetchStatus(t,nt,at,d),_=(0,i.H)(S.NT),C=S.aX.selectProviders(t,o.l.all,_),T=S.aX.selectProvidersFetchStatus(t,o.l.all,_),j=a[O.yG]?a[O.yG]:u;return{costOverviewComponent:l().createElement(Z,{currency:m,groupBy:p,isPlatformCosts:(0,y.yW)(a),report:b,title:j}),currency:m,description:a[O.eG],detailsURL:it,emptyStateTitle:e.formatMessage(c.Z.ocpDetailsTitle),groupBy:p,groupByValue:u,historicalDataComponent:l().createElement(W,{currency:m}),isOptimizationsTab:void 0!==a.optimizationsTab,isRosFeatureEnabled:R.iJ.selectIsRosFeatureEnabled(t),optimizationsBadgeComponent:l().createElement(G,null),optimizationsComponent:"project"===p&&"*"!==u?l().createElement(st,null):void 0,providers:(0,f.BV)(C,o.l.ocp),providersFetchStatus:T,providerType:o.l.ocp,query:a,report:b,reportError:P,reportFetchStatus:F,reportType:at,reportPathsType:nt,reportQueryString:d,tagReportPathsType:n.L.ocp,title:j}})),pt={closeOptimizationsDrawer:P.Aw.Zv,fetchReport:E.nx.fetchReport},lt=(0,u.ZP)((0,_.E)((0,m.connect)(ct,pt)(d.C)))}}]);
//# sourceMappingURL=../sourcemaps/ocpBreakdown.8614fd71c0311542fef19f8143f84569.js.map