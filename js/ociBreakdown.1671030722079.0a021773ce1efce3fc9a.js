"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[1302],{79467:(e,t,r)=>{r.d(t,{C:()=>s.Z});var s=r(64727)},93255:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var s=r(1326),c=r(79112),o=r(84717),i=r(39333),l=r(6456),a=r(50081),n=r(97027),p=r(92950),u=r.n(p),d=r(74806),g=r(77760),y=r(91919),v=r(79467),h=r(37269),b=r(86482),m=r(1156),f=r(78898),C=r(62331),_=r(15920),k=r(64703),E=r(5842),P=r(67709),Z=r(47320);const O=(0,m.X1)(((e,t)=>({selectWidgets:Z.Qg.selectWidgets(e),widgets:Z.Qg.selectCurrentWidgets(e)}))),R=(0,d.ZP)((0,g.connect)(O,{})(P.X));var T=r(87935),X=r(81723);const j=(0,m.X1)(((e,t)=>({selectWidgets:X.vq.selectWidgets(e),widgets:X.vq.selectCurrentWidgets(e)}))),S=(0,d.ZP)((0,g.connect)(j,{})(T.f)),V=y.Hb.ociDetails,W=l.C.cost,w=l.K.oci,B=(0,m.X1)(((e,{intl:t,router:r})=>{const l=(0,c.mB)(r.location.search),p=(0,h.VL)(l),d=(0,h.pe)(l),g=f.iJ.selectIsCurrencyFeatureEnabled(e)?(0,k.zC)():void 0,y={filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign({},l&&l.filter_by&&l.filter_by),p&&{[p]:void 0}),exclude:Object.assign({},l&&l.exclude&&l.exclude),group_by:Object.assign({},p&&{[p]:d})},v=(0,c.pm)(Object.assign(Object.assign({},y),{currency:g})),m=_.ZV.selectReport(e,w,W,v),E=_.ZV.selectReportError(e,w,W,v),P=_.ZV.selectReportFetchStatus(e,w,W,v),Z=(0,o.H)(C.NT),O=C.aX.selectProviders(e,s.l.all,Z),T=C.aX.selectProvidersError(e,s.l.all,Z),X=C.aX.selectProvidersFetchStatus(e,s.l.all,Z);return{costOverviewComponent:u().createElement(R,{currency:g,groupBy:p,report:m}),currency:g,description:l[i.eG],detailsURL:V,emptyStateTitle:t.formatMessage(n.Z.ociDetailsTitle),groupBy:p,groupByValue:d,historicalDataComponent:u().createElement(S,{currency:g}),providers:(0,b.BV)(O,s.l.oci),providersError:T,providersFetchStatus:X,providerType:s.l.oci,query:l,report:m,reportError:E,reportFetchStatus:P,reportType:W,reportPathsType:w,reportQueryString:v,tagReportPathsType:a.L.oci,title:d}})),F={fetchReport:_.nx.fetchReport},x=(0,d.ZP)((0,E.E)((0,g.connect)(B,F)(v.C)))}}]);