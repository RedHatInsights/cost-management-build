"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[7654],{79467:(e,t,r)=>{r.d(t,{C:()=>s.Z});var s=r(64727)},22601:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var s=r(1326),c=r(72504),o=r(84717),l=r(39333),i=r(6456),a=r(50081),n=r(97027),p=r(92950),u=r.n(p),g=r(74806),d=r(77760),y=r(91919),h=r(79467),v=r(37269),b=r(86482),m=r(1156),f=r(78898),C=r(62331),_=r(15920),k=r(64703),E=r(5842),P=r(67709),Z=r(79666);const O=(0,m.X1)(((e,t)=>({selectWidgets:Z.eo.selectWidgets(e),widgets:Z.eo.selectCurrentWidgets(e)}))),R=(0,g.ZP)((0,d.connect)(O,{})(P.X));var T=r(87935),X=r(94584);const j=(0,m.X1)(((e,t)=>({selectWidgets:X.hH.selectWidgets(e),widgets:X.hH.selectCurrentWidgets(e)}))),S=(0,g.ZP)((0,d.connect)(j,{})(T.f)),V=y.Hb.gcpDetails,W=i.C.cost,w=i.K.gcp,B=(0,m.X1)(((e,{intl:t,router:r})=>{const i=(0,c.mB)(r.location.search),p=(0,v.VL)(i),g=(0,v.pe)(i),d=f.iJ.selectIsCurrencyFeatureEnabled(e)?(0,k.zC)():void 0,y={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign({},i&&i.filter_by&&i.filter_by),p&&{[p]:void 0}),exclude:Object.assign({},i&&i.exclude&&i.exclude),group_by:Object.assign({},p&&{[p]:g})},h=(0,c.pm)(Object.assign(Object.assign({},y),{currency:d})),m=_.ZV.selectReport(e,w,W,h),E=_.ZV.selectReportError(e,w,W,h),P=_.ZV.selectReportFetchStatus(e,w,W,h),Z=(0,o.H)(C.NT),O=C.aX.selectProviders(e,s.l.all,Z),T=C.aX.selectProvidersError(e,s.l.all,Z),X=C.aX.selectProvidersFetchStatus(e,s.l.all,Z);return{costOverviewComponent:u().createElement(R,{currency:d,groupBy:p,report:m}),currency:d,description:i[l.eG],detailsURL:V,emptyStateTitle:t.formatMessage(n.Z.gcpDetailsTitle),groupBy:p,groupByValue:g,historicalDataComponent:u().createElement(S,{currency:d}),providers:(0,b.BV)(O,s.l.gcp),providersError:T,providersFetchStatus:X,providerType:s.l.gcp,query:i,report:m,reportError:E,reportFetchStatus:P,reportType:W,reportPathsType:w,reportQueryString:h,tagReportPathsType:a.L.gcp,title:i[l.yG]?i[l.yG]:g}})),F={fetchReport:_.nx.fetchReport},x=(0,g.ZP)((0,E.E)((0,d.connect)(B,F)(h.C)))}}]);