"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[1614],{46887:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var s=r(1326),c=r(84717),o=r(39333),i=r(6456),l=r(50081),a=r(97027),n=r(92950),p=r.n(n),u=r(74806),d=r(77760),y=r(91919),g=r(7110),f=r(45402),h=r(1032),b=r(1156),_=r(62331),v=r(15920),V=r(15829),m=r(68025),w=r(14483),T=r(5842),C=r(69735),O=r(74981);const X=(0,b.X1)(((e,t)=>({selectWidgets:O.XL.selectWidgets(e),widgets:O.XL.selectCurrentWidgets(e)}))),k=(0,d.connect)(X,{})(C.X);var j=r(16577),E=r(86737);const S=(0,b.X1)(((e,t)=>({selectWidgets:E.Vf.selectWidgets(e),widgets:E.Vf.selectCurrentWidgets(e)}))),P=(0,d.connect)(S,{})(j.f),R=(0,m.dI)(y._.awsDetails.path),W=i.C.cost,B=i.K.aws,L=(0,b.X1)(((e,{intl:t,router:r})=>{const i=(0,o.mB)(r.location.search),n=(0,o.fU)(i),u=(0,f.OA)(i),d=u?w.dV:(0,f.VL)(i),y=u||(0,f.pe)(i),g=(0,V.uY)(),b=(0,V.zC)(),m=Object.assign({},i),T={cost_type:g,currency:b,filter:{resolution:"monthly",time_scope_units:"month",time_scope_value:-1},filter_by:Object.assign(Object.assign(Object.assign(Object.assign({},n&&n.filter_by&&n.filter_by),i&&i.filter&&i.filter.account&&{[`${w.Sq}account`]:i.filter.account}),d&&d!==w.dV&&"*"!==y&&{[d]:void 0}),n&&n.filter_by&&n.filter_by[w.dV]&&{[`${w.pi}${w.dV}`]:n.filter_by[w.dV],[w.dV]:void 0}),exclude:Object.assign({},n&&n.exclude&&n.exclude),group_by:Object.assign({},d&&{[d]:y})},C=(0,o.pm)(T),O=v.ZV.selectReport(e,B,W,C),X=v.ZV.selectReportError(e,B,W,C),j=v.ZV.selectReportFetchStatus(e,B,W,C),E=(0,c.H)(_.NT),S=_.aX.selectProviders(e,s.l.all,E),L=_.aX.selectProvidersError(e,s.l.all,E),Z=_.aX.selectProvidersFetchStatus(e,s.l.all,E),x=i[w.yG]?i[w.yG]:y;return{costOverviewComponent:p().createElement(k,{costType:g,currency:b,groupBy:d,query:i,report:O}),costType:g,currency:b,description:i[w.eG],detailsURL:R,emptyStateTitle:t.formatMessage(a.Z.awsDetailsTitle),groupBy:d,groupByValue:y,historicalDataComponent:p().createElement(P,{costType:g,currency:b}),providers:(0,h.BV)(S,s.l.aws),providersError:L,providersFetchStatus:Z,providerType:s.l.aws,query:m,report:O,reportError:X,reportFetchStatus:j,reportType:W,reportPathsType:B,reportQueryString:C,showCostType:!0,tagPathsType:l.L.aws,title:x}})),Z={fetchReport:v.nx.fetchReport},x=(0,u.ZP)((0,T.E)((0,d.connect)(L,Z)(g.C)))}}]);