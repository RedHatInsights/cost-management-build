"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[8141],{93562:(t,e,r)=>{r.r(e),r.d(e,{default:()=>lt});var o=r(1326),s=r(84717),i=r(39333),a=r(6456),n=r(50081),c=r(97027),p=r(92950),l=r.n(p),u=r(74806),m=r(77760),g=r(91919),d=r(55246),h=r(37269),b=r(86482),y=r(1156),f=r(78898),R=r(62331),S=r(15920),P=r(20997),E=r(15829),v=r(68025),O=r(14483),j=r(5842),C=r(27769),F=r(73903);const D=(0,y.X1)(((t,{title:e})=>({selectWidgets:F.cm.selectWidgets(t),widgets:F.cm.selectCurrentWidgets(t),title:e}))),T=(0,m.connect)(D,{})(C.X);var _=r(87935),Z=r(70982);const w=(0,y.X1)(((t,e)=>({selectWidgets:Z.P2.selectWidgets(t),widgets:Z.P2.selectCurrentWidgets(t)}))),B=(0,m.connect)(w,{})(_.f);var V=r(90154),q=r(52016),x=r(89256),z=r(2136);const Q=x.v.recommendations,W=x.N.ros;class k extends l().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.updateReport=()=>{const{fetchReport:t,reportQueryString:e}=this.props;t(Q,W,e)}}componentDidMount(){this.updateReport()}render(){const{intl:t,report:e}=this.props,r=e&&e.meta?e.meta.count:0;return l().createElement(V.Badge,{screenReaderText:t.formatMessage(c.Z.optimizationsDetails,{count:r})},r)}}const M=(0,y.X1)(((t,{router:e})=>{const r=(0,q.mB)(e.location.search),o=(0,h.VL)(r),s=(0,h.pe)(r),a=Object.assign({},o&&{[o]:s}),n=(0,i.pm)(a);return{report:z.R0.selectRos(t,Q,W,n),reportError:z.R0.selectRosError(t,Q,W,n),reportFetchStatus:z.R0.selectRosFetchStatus(t,Q,W,n),reportQueryString:n}})),X={fetchReport:z.Ze.fetchRosReport},J=(0,u.ZP)((0,j.E)((0,m.connect)(M,X)(k)));var N=r(52471),I=r(14411),L=r(47947),H=r(59454),G=r(38679),U=r(19727),A=r(14222),K=r(10066);const Y={limit:10,offset:0,order_by:{last_reported:"desc"}},$=x.N.ros,tt=x.v.recommendations;class et extends l().Component{constructor(){super(...arguments),this.defaultState={columns:[],rows:[]},this.state=Object.assign({},this.defaultState),this.getPagination=(t=!1,e=!1)=>{const{intl:r,report:o}=this.props,s=o&&o.meta?o.meta.count:0,i=o&&o.meta?o.meta.limit:Y.limit,a=o&&o.meta?o.meta.offset:Y.offset,n=Math.trunc(a/i+1);return l().createElement(V.Pagination,{isCompact:!e,isDisabled:t,itemCount:s,onPerPageSelect:(t,e)=>this.handlePerPageSelect(e),onSetPage:(t,e)=>this.handleSetPage(e),page:n,perPage:i,titles:{paginationTitle:r.formatMessage(c.Z.paginationTitle,{title:r.formatMessage(c.Z.openShift),placement:e?"bottom":"top"})},variant:e?V.PaginationVariant.bottom:V.PaginationVariant.top,widgetId:"exports-pagination"+(e?"-bottom":"")})},this.getTable=()=>{const{query:t,report:e,reportFetchStatus:r,reportQueryString:o,router:s}=this.props;return l().createElement(H.Hy,{isLoading:r===y.iF.inProgress,onSort:(e,r)=>(0,U.yB)(t,s,e,r),report:e,reportQueryString:o})},this.getToolbar=()=>{const{query:t,report:e,router:r}=this.props,o=e&&e.meta?e.meta.limit:0,s=e&&e.meta?e.meta.count:0,i=0===s;return l().createElement(H.IH,{isDisabled:i,itemsPerPage:o,itemsTotal:s,onFilterAdded:e=>(0,U.$3)(t,r,e),onFilterRemoved:e=>(0,U.q7)(t,r,e),pagination:this.getPagination(i),query:t})},this.handlePerPageSelect=t=>{const{query:e,router:r}=this.props,o=Object.assign(Object.assign({},JSON.parse(JSON.stringify(e))),{limit:t}),s=(0,K.Z)(o,r.location,!0);r.navigate(s,{replace:!0})},this.handleSetPage=t=>{const{query:e,report:r,router:o}=this.props,s=r&&r.meta&&r.meta.limit?r.meta.limit:Y.limit,i=t*s-1,a=Object.assign(Object.assign({},JSON.parse(JSON.stringify(e))),{limit:s,offset:i}),n=(0,K.Z)(a,o.location);o.navigate(n,{replace:!0})},this.updateReport=()=>{const{fetchRosReport:t,reportQueryString:e}=this.props;t(tt,$,e)}}componentDidMount(){this.updateReport()}componentDidUpdate(t){const{report:e,reportError:r,reportQueryString:o,router:s}=this.props,i=t.reportQueryString!==o,a=!e&&!r,n=!s.location.search;(i||a||n)&&this.updateReport()}render(){const{intl:t,query:e,report:r,reportError:o,reportFetchStatus:s}=this.props,i=0===(r&&r.meta?r.meta.count:0),a=t.formatMessage(c.Z.optimizations),n=r&&r.meta&&r.meta.count>0;return o?l().createElement(L.W,{title:a}):e.filter_by||n||s!==y.iF.complete?l().createElement("div",{style:G.W.optimizationsContainer},this.getToolbar(),s===y.iF.inProgress?l().createElement(N.g,null):l().createElement(l().Fragment,null,this.getTable(),l().createElement("div",{style:G.W.pagination},this.getPagination(i,!0)))):l().createElement(I.Y,null)}}const rt=(0,y.X1)(((t,{router:e})=>{const r=(0,i.mB)(e.location.search),o=(0,h.VL)(r),s=(0,h.pe)(r),a=(0,A.H)(r)||(0,A.H)(Y),n=(0,A.j)(r)||(0,A.j)(Y),c=Object.assign(Object.assign({},Y),r),p=Object.assign(Object.assign(Object.assign({},o&&{[o]:s}),c.filter_by),{limit:c.limit,offset:c.offset,order_by:a,order_how:n}),l=(0,i.pm)(p);return{query:c,report:z.R0.selectRos(t,tt,$,l),reportError:z.R0.selectRosError(t,tt,$,l),reportFetchStatus:z.R0.selectRosFetchStatus(t,tt,$,l),reportQueryString:l}})),ot={fetchRosReport:z.Ze.fetchRosReport},st=(0,u.ZP)((0,j.E)((0,m.connect)(rt,ot)(et))),it=(0,v.dI)(g._.ocpDetails.path),at=a.C.cost,nt=a.K.ocp,ct=(0,y.X1)(((t,{intl:e,router:r})=>{const a=(0,i.mB)(r.location.search),p=(0,i.fU)(a),u=(0,h.VL)(a),m=(0,h.pe)(a),g=f.iJ.selectIsCostDistributionFeatureEnabled(t),d="project"===u&&g?(0,E.vn)():void 0,y=(0,E.zC)(),P=Object.assign({},a),v={currency:y,filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign(Object.assign({},p&&p.filter_by&&p.filter_by),a&&a.isPlatformCosts&&{category:O.rx}),u&&"*"!==m&&{[u]:void 0}),exclude:Object.assign({},p&&p.exclude&&p.exclude),group_by:Object.assign({},u&&{[u]:m})},j=(0,i.pm)(v),C=S.ZV.selectReport(t,nt,at,j),F=S.ZV.selectReportError(t,nt,at,j),D=S.ZV.selectReportFetchStatus(t,nt,at,j),_=(0,s.H)(R.NT),Z=R.aX.selectProviders(t,o.l.all,_),w=R.aX.selectProvidersFetchStatus(t,o.l.all,_),V=a[O.yG]?a[O.yG]:m;return{costDistribution:d,costOverviewComponent:l().createElement(T,{costDistribution:d,currency:y,groupBy:u,isCostDistributionFeatureEnabled:f.iJ.selectIsCostDistributionFeatureEnabled(t),isPlatformCosts:a&&a.isPlatformCosts,report:C,title:V}),currency:y,description:a[O.eG],detailsURL:it,emptyStateTitle:e.formatMessage(c.Z.ocpDetailsTitle),groupBy:u,groupByValue:m,historicalDataComponent:l().createElement(B,{costDistribution:d,currency:y}),isOptimizationsTab:void 0!==a.optimizationsTab,isRosFeatureEnabled:f.iJ.selectIsRosFeatureEnabled(t),optimizationsBadgeComponent:l().createElement(J,null),optimizationsComponent:"project"===u&&"*"!==m?l().createElement(st,null):void 0,providers:(0,b.BV)(Z,o.l.ocp),providersFetchStatus:w,providerType:o.l.ocp,query:P,report:C,reportError:F,reportFetchStatus:D,reportType:at,reportPathsType:nt,reportQueryString:j,showCostDistribution:"project"===u,tagPathsType:n.L.ocp,title:V}})),pt={closeOptimizationsDrawer:P.Aw.Zv,fetchReport:S.nx.fetchReport},lt=(0,u.ZP)((0,j.E)((0,m.connect)(ct,pt)(d.C)))}}]);