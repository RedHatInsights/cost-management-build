"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[8141],{55512:(e,t,r)=>{r.r(t),r.d(t,{default:()=>U});var o=r(1326),s=r(79112),c=r(84717),n=r(6456),a=r(50081),i=r(97027),l=r(92950),p=r.n(l),u=r(74806),d=r(77760),m=r(91919),g=r(55246),y=r(25224),h=r(37269),R=r(54583),f=r(86482),b=r(1156),v=r(78898),C=r(62331),E=r(15920),j=r(20997),S=r(15829),_=r(68025),T=r(14483),F=r(5842),O=r(67709),P=r(73903);const Z=(0,b.X1)(((e,{title:t})=>({selectWidgets:P.cm.selectWidgets(e),widgets:P.cm.selectCurrentWidgets(e),title:t}))),k=(0,d.connect)(Z,{})(O.X);var w=r(87935),B=r(70982);const W=(0,b.X1)(((e,t)=>({selectWidgets:B.P2.selectWidgets(e),widgets:B.P2.selectCurrentWidgets(e)}))),X=(0,d.connect)(W,{})(w.f);var x=r(90154),D=r(39333),V=r(89256),G=r(2136);const I=V.v.recommendation,L=V.N.ros;class M extends p().Component{constructor(){super(...arguments),this.defaultState={},this.state=Object.assign({},this.defaultState),this.updateReport=()=>{const{fetchReport:e,reportQueryString:t}=this.props;e(I,L,t)}}componentDidMount(){this.updateReport()}render(){const{intl:e,report:t}=this.props,r=t&&t.meta?t.meta.count:0;return p().createElement(x.Badge,{screenReaderText:e.formatMessage(i.Z.recommendationsDetails,{count:r})},r)}}const Q=(0,b.X1)(((e,{project:t})=>{const r={project:t},o=(0,D.pm)(Object.assign({},r));return{query:r,report:G.R0.selectRos(e,I,L,o),reportError:G.R0.selectRosError(e,I,L,o),reportFetchStatus:G.R0.selectRosFetchStatus(e,I,L,o),reportQueryString:o}})),q={fetchReport:G.Ze.fetchRosReport},z=(0,u.ZP)((0,d.connect)(Q,q)(M)),J=(0,_.dI)(m._.ocpDetails.path),N=n.C.cost,A=n.K.ocp,H=(0,b.X1)(((e,{intl:t,router:r})=>{const n=(0,s.mB)(r.location.search),l=(0,h.VL)(n),u=(0,h.pe)(n),d=v.iJ.selectIsCurrencyFeatureEnabled(e)?(0,S.zC)():void 0,m={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign({},n&&n.filter_by&&n.filter_by),n&&n.filter&&n.filter.category&&{category:n.filter.category}),exclude:Object.assign({},n&&n.exclude&&n.exclude),group_by:Object.assign({},l&&{[l]:u}),category:n.category},g=(0,s.pm)(Object.assign(Object.assign({},m),{category:void 0,currency:d})),b=E.ZV.selectReport(e,A,N,g),j=E.ZV.selectReportError(e,A,N,g),_=E.ZV.selectReportFetchStatus(e,A,N,g),F=(0,c.H)(C.NT),O=C.aX.selectProviders(e,o.l.all,F),P=C.aX.selectProvidersFetchStatus(e,o.l.all,F),Z=n[T.yG]?n[T.yG]:u;return{costOverviewComponent:p().createElement(k,{currency:d,groupBy:l,isPlatformCosts:(0,R.yW)(n),report:b,title:Z}),currency:d,description:n[T.eG],detailsURL:J,emptyStateTitle:t.formatMessage(i.Z.ocpDetailsTitle),groupBy:l,groupByValue:u,historicalDataComponent:p().createElement(X,{currency:d}),isRecommendationsTab:void 0!==n.recommendationsTab,isRosFeatureEnabled:v.iJ.selectIsRosFeatureEnabled(e),optimizationsBadgeComponent:p().createElement(z,{project:u}),providers:(0,f.BV)(O,o.l.ocp),providersFetchStatus:P,providerType:o.l.ocp,query:n,recommendationsComponent:"project"===l&&"*"!==u?p().createElement(y.Z,null):void 0,report:b,reportError:j,reportFetchStatus:_,reportType:N,reportPathsType:A,reportQueryString:g,tagReportPathsType:a.L.ocp,title:Z}})),K={closeRecommendationsDrawer:j.Aw.R7,fetchReport:E.nx.fetchReport},U=(0,u.ZP)((0,F.E)((0,d.connect)(H,K)(g.C)))}}]);
//# sourceMappingURL=../sourcemaps/ocpBreakdown.0ae079dd0461b09b5946fd567f53e211.js.map