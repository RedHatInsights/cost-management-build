"use strict";(self.webpackChunkcostManagement=self.webpackChunkcostManagement||[]).push([[3594],{52029:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var s=r(1326),c=r(84717),o=r(39333),l=r(6456),a=r(50081),i=r(97027),n=r(92950),p=r.n(n),u=r(74806),d=r(82537),g=r(91919),y=r(7110),h=r(45402),m=r(1032),v=r(1156),f=r(62331),b=r(15920),C=r(15829),_=r(68025),V=r(14483),z=r(5842),E=r(69735),T=r(62228);const X=(0,v.X1)(((e,t)=>({selectWidgets:T.kl.selectWidgets(e),widgets:T.kl.selectCurrentWidgets(e)}))),k=(0,d.connect)(X,{})(E.X);var O=r(16577),P=r(73861);const R=(0,v.X1)(((e,t)=>({selectWidgets:P.VK.selectWidgets(e),widgets:P.VK.selectCurrentWidgets(e)}))),S=(0,d.connect)(R,{})(O.f),W=(0,_.dI)(g._.azureDetails.path),j=l.C.cost,w=l.K.azure,B=(0,v.X1)(((e,{intl:t,router:r})=>{const l=(0,o.mB)(r.location.search),n=(0,o.fU)(l),u=(0,h.VL)(l),d=(0,h.pe)(l),g=(0,C.zC)(),y=Object.assign({},l),v={currency:g,filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign({},n&&n.filter_by&&n.filter_by),u&&"*"!==d&&{[u]:void 0}),exclude:Object.assign({},n&&n.exclude&&n.exclude),group_by:Object.assign({},u&&{[u]:d})},_=(0,o.pm)(v),z=b.ZV.selectReport(e,w,j,_),E=b.ZV.selectReportError(e,w,j,_),T=b.ZV.selectReportFetchStatus(e,w,j,_),X=(0,c.H)(f.NT),O=f.aX.selectProviders(e,s.l.all,X),P=f.aX.selectProvidersError(e,s.l.all,X),R=f.aX.selectProvidersFetchStatus(e,s.l.all,X);return{costOverviewComponent:p().createElement(k,{currency:g,groupBy:u,report:z}),currency:g,description:l[V.eG],detailsURL:W,emptyStateTitle:t.formatMessage(i.Z.azureDetailsTitle),groupBy:u,groupByValue:d,historicalDataComponent:p().createElement(S,{currency:g}),providers:(0,m.BV)(O,s.l.azure),providersError:P,providersFetchStatus:R,providerType:s.l.azure,query:y,report:z,reportError:E,reportFetchStatus:T,reportType:j,reportPathsType:w,reportQueryString:_,tagPathsType:a.L.azure,title:d}})),Z={fetchReport:b.nx.fetchReport},x=(0,u.ZP)((0,z.E)((0,d.connect)(B,Z)(y.C)))}}]);