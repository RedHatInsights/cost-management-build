"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[2340],{86208:(e,t,s)=>{s.d(t,{H:()=>a});var r=s(80129);function a(e){return(0,r.stringify)(e,{encode:!1,indices:!1})}},96924:(e,t,s)=>{s.d(t,{X:()=>l});var r=s(22938),a=s(93952),c=s(92950),o=s.n(c),i=s(74806);const n={perspectiveSelector:{display:"flex",alignItems:"center"},perspectiveLabel:{marginBottom:0,marginRight:s(32412).ZP.var,whiteSpace:"nowrap"},perspectiveOptionLabel:{marginBottom:6,marginLeft:8,marginTop:6}};class p extends o().Component{constructor(){super(...arguments),this.defaultState={isSelectOpen:!1},this.state=Object.assign({},this.defaultState),this.getSelectOptions=()=>{const{intl:e,options:t}=this.props,s=[];return t.map((t=>{s.push({toString:()=>e.formatMessage(t.label,{value:t.value}),value:t.value})})),s},this.getSelect=()=>{const{currentItem:e,intl:t,isDisabled:s,options:a}=this.props,{isSelectOpen:c}=this.state;if(1===a.length)return o().createElement("div",{style:n.perspectiveOptionLabel},t.formatMessage(a[0].label,{value:a[0].value}));const i=this.getSelectOptions(),p=i.find((t=>t.value===e));return o().createElement(r.Select,{id:"perspectiveSelect",isDisabled:s,isOpen:c,onSelect:this.handleSelect,onToggle:this.handleToggle,selections:p,variant:r.SelectVariant.single},i.map((e=>o().createElement(r.SelectOption,{key:e.value,value:e}))))},this.handleSelect=(e,t)=>{const{onSelected:s}=this.props;s&&s(t.value),this.setState({isSelectOpen:!1})},this.handleToggle=e=>{this.setState({isSelectOpen:e})}}render(){const{intl:e}=this.props;return o().createElement("div",{style:n.perspectiveSelector},o().createElement(r.Title,{headingLevel:"h3",size:"md",style:n.perspectiveLabel},e.formatMessage(a.Z.perspective)),this.getSelect())}}const l=(0,i.ZP)(p)},92835:(e,t,s)=>{s.r(t),s.d(t,{default:()=>St});var r=s(22938),a=s(91290),c=s(45997),o=s(86208),i=s(66785),n=s(93952),p=s(91616),l=s(73466),u=s(64146),h=s(32605),d=s(96908),g=s(96924),b=s(92950),v=s.n(b);const m=({costType:e,DashboardWidget:t,selectWidgets:s,widgets:a})=>v().createElement("div",null,v().createElement(r.Grid,{hasGutter:!0},a.map((a=>s[a].details.showHorizontal?v().createElement(r.GridItem,{sm:12,key:a},v().createElement(t,Object.assign({widgetId:a},e&&{costType:e}))):v().createElement(r.GridItem,{lg:12,xl:6,xl2:4,key:a},v().createElement(t,Object.assign({widgetId:a},e&&{costType:e})))))));var y=s(98147),T=s(94377),f=s(67119),R=s(95078),P=s(44439),F=s(89116),S=s(98896),O=s(73727),Z=s(99291);class C extends v().Component{constructor(){super(...arguments),this.defaultState={currentItem:this.props.options?this.props.options.find((e=>e.default)).value:void 0,isSelectOpen:!1},this.state=Object.assign({},this.defaultState),this.getSelect=()=>{const{isDisabled:e}=this.props,{currentItem:t,isSelectOpen:s}=this.state,a=this.getSelectOptions(),c=a.find((e=>e.value===t));return v().createElement(r.Select,{id:"comparisonSelect",isDisabled:e,isOpen:s,onSelect:this.handleSelect,onToggle:this.handleToggle,selections:c,variant:r.SelectVariant.single},a.map((e=>v().createElement(r.SelectOption,{key:e.value,value:e}))))},this.getSelectOptions=()=>{const{options:e}=this.props,t=[];return e.map((e=>{t.push({toString:()=>e.label,value:e.value})})),t},this.handleSelect=(e,t)=>{const{onItemClicked:s}=this.props;s&&s(t.value),this.setState({currentItem:t.value,isSelectOpen:!1})},this.handleToggle=e=>{this.setState({isSelectOpen:e})}}render(){return this.getSelect()}}const A=C;var I=s(91707),w=s(32412),E=s(57640);const D={chartAltHeight:250,chartHeight:180,containerAltHeight:250,containerTrendHeight:180,containerUsageHeight:180},V={comparison:{marginBottom:w.ZP.value},comparisonContainer:{display:"flex"},tabs:{marginTop:I.ZP.value},tabItems:{marginTop:E.ZP.value}};class j extends v().Component{constructor(){super(...arguments),this.state={activeTabKey:0,currentComparison:"cumulative"},this.buildDetailsLink=e=>{const{details:t,getIdKeyForTab:s}=this.props,r=s(e);return`${t.viewAllPath}?${(0,R.pm)({group_by:{[r]:"*"},order_by:{cost:"desc"}})}`},this.getChart=(e,t,s=!1)=>{const{chartType:r,trend:a}=this.props;return"dailyTrend"===r?this.getDailyTrendChart(e,t,s,a.showInfrastructureLabel,a.showSupplementaryLabel):"dailyCost"===r?this.getDailyCostChart(e,t,s):"trend"===r?this.getTrendChart(e,t,s,a.showInfrastructureLabel,a.showSupplementaryLabel):"usage"===r?this.getUsageChart(t,s):null},this.getChartComparison=()=>{const{intl:e,trend:t}=this.props,{currentComparison:s}=this.state,r=this.getFormattedUnits(),a=e.formatMessage(t.titleKey,{units:r}),c=[{label:e.formatMessage(t.dailyTitleKey,{units:r}),value:"daily"},{label:a,value:"cumulative",default:!0}];return v().createElement(A,{currentItem:s||c[0].value,onItemClicked:this.handleComparisonClick,options:c})},this.getDailyCostChart=(e,t,s=!1)=>{const{chartFormatter:r,currentReport:a,previousReport:c,trend:o}=this.props,{currentComparison:i}=this.state,n=o.computedReportItem,p=o.computedReportItemValue,l="daily"===i,u=l?1:o.type,h=(0,F.zJ)(a,u,"date","infrastructure",p),d=(0,F.zJ)(c,u,"date","infrastructure",p),g=(0,F.zJ)(a,u,"date",n,p),b=(0,F.zJ)(c,u,"date",n,p),m=this.getForecastData(a,o.computedForecastItem),y=this.getForecastData(a,o.computedForecastInfrastructureItem),T=l?S.V3:S.me;return v().createElement(v().Fragment,null,v().createElement("div",{style:V.comparisonContainer},v().createElement("div",{style:V.comparison},this.getChartComparison())),v().createElement(T,{adjustContainerHeight:s,containerHeight:e,currentCostData:g,currentInfrastructureCostData:h,forecastConeData:m.forecastConeData,forecastData:m.forecastData,forecastInfrastructureConeData:y.forecastConeData,forecastInfrastructureData:y.forecastData,formatOptions:o.formatOptions,formatter:r||Z.xG,height:t,previousCostData:b,previousInfrastructureCostData:d,showForecast:void 0!==o.computedForecastItem}))},this.getDailyTrendChart=(e,t,s=!1,r=!1,a=!1)=>{const{chartFormatter:c,currentReport:o,details:i,previousReport:n,trend:p}=this.props,{currentComparison:l}=this.state,u=p.computedReportItem,h=p.computedReportItemValue,d="daily"===l,g=d?1:p.type,b=(0,F.zJ)(o,g,"date",u,h),m=(0,F.zJ)(n,g,"date",u,h),{forecastData:y,forecastConeData:T}=this.getForecastData(o,p.computedForecastItem),f=d?S.Y0:S.Nd;return v().createElement(v().Fragment,null,v().createElement("div",{style:V.comparisonContainer},v().createElement("div",{style:V.comparison},this.getChartComparison())),v().createElement(f,{adjustContainerHeight:s,containerHeight:e,currentData:b,forecastData:y,forecastConeData:T,formatOptions:p.formatOptions,formatter:c||Z.bM,height:t,previousData:m,showForecast:void 0!==p.computedForecastItem,showInfrastructureLabel:r,showSupplementaryLabel:a,showUsageLegendLabel:i.showUsageLegendLabel,units:this.getUnits()}))},this.getForecastData=(e,t="cost")=>{const{forecast:s,trend:r}=this.props,{currentComparison:a}=this.state,c="daily"===a?1:r.type;let o,i;if(t){const r=(0,P.cloneDeep)(s);if(r&&(r.data=[]),s&&e&&e.data){const a=e.meta&&e.meta.total&&e.meta.total[t]?e.meta.total[t].total.value:0,o=e.meta&&e.meta.total&&e.meta.total[t]?e.meta.total[t].total.units:"USD",i=e.data.filter((e=>e.values.length)),n=i[i.length-1]?i[i.length-1].date:void 0;if(s&&s.data&&s.data.length>0){const e=new Date(n),t=e.getMonth()+1;for(const a of s.data){const s=new Date(a.date),c=s.getMonth()+1;s>e&&t===c&&r.data.push(a)}if(0===c){const e=s.data[0].values&&s.data[0].values.length>0?s.data[0].values[0].date:void 0,t=1===this.getNumberOfDays(n,e)?n:e;r.data.unshift({date:t,values:[{date:t,cost:{confidence_max:{value:0},confidence_min:{value:0},total:{value:a,units:o}},infrastructure:{confidence_max:{value:0},confidence_min:{value:0},total:{value:a,units:o}},supplementary:{confidence_max:{value:0},confidence_min:{value:0},total:{value:a,units:o}}}]})}}}o=(0,F.nB)(r,c,t),i=(0,F.Qw)(r,c,t)}return{forecastData:o,forecastConeData:i}},this.getNumberOfDays=(e,t)=>{const s=new Date(e),r=new Date(t).getTime()-s.getTime();return Math.round(r/864e5)},this.getTrendChart=(e,t,s=!1,r=!1,a=!1)=>{const{chartFormatter:c,currentReport:o,details:i,intl:n,previousReport:p,trend:l}=this.props,u=l.computedReportItem||"cost",h=l.computedReportItemValue,d=n.formatMessage(l.titleKey,{units:this.getFormattedUnits()}),g=(0,F.zJ)(o,l.type,"date",u,h),b=(0,F.zJ)(p,l.type,"date",u,h),{forecastData:m,forecastConeData:y}=this.getForecastData(o,l.computedForecastItem);return v().createElement(S.Nd,{adjustContainerHeight:s,containerHeight:e,currentData:g,forecastData:m,forecastConeData:y,formatOptions:l.formatOptions,formatter:c||Z.bM,height:t,previousData:b,showForecast:void 0!==l.computedForecastItem,showInfrastructureLabel:r,showSupplementaryLabel:a,showUsageLegendLabel:i.showUsageLegendLabel,title:d,units:this.getUnits()})},this.getUsageChart=(e,t=!1)=>{const{chartFormatter:s,currentReport:r,intl:a,previousReport:c,trend:o}=this.props,i=a.formatMessage(o.titleKey,{units:this.getFormattedUnits()}),n=(0,F.zJ)(r,o.type,"date","request"),p=(0,F.zJ)(c,o.type,"date","request"),l=(0,F.zJ)(r,o.type,"date","usage"),u=(0,F.zJ)(c,o.type,"date","usage");return v().createElement(S.I0,{adjustContainerHeight:t,containerHeight:D.containerUsageHeight,currentRequestData:n,currentUsageData:l,formatOptions:o.formatOptions,formatter:s||Z.bM,height:e,previousRequestData:p,previousUsageData:u,title:i})},this.getDetails=()=>{const{chartType:e,currentReport:t,details:s,reportType:r,trend:a}=this.props,c=a.computedReportItem||"cost",o=a.computedReportItemValue||"total";return v().createElement(S.rN,{chartType:e,computedReportItem:c,computedReportItemValue:o,costLabel:this.getDetailsLabel(s.costKey),formatOptions:s.formatOptions,report:t,reportType:r,requestLabel:this.getDetailsLabel(s.requestKey),showTooltip:s.showTooltip,showUnits:s.showUnits,showUsageFirst:s.showUsageFirst,units:this.getUnits(),usageFormatOptions:s.usageFormatOptions,usageLabel:this.getDetailsLabel(s.usageKey)})},this.getDetailsLabel=e=>{const{intl:t}=this.props;return e?t.formatMessage(e):void 0},this.getDetailsLink=()=>{const{currentTab:e,details:t}=this.props;return t.viewAllPath?v().createElement(O.rU,{to:this.buildDetailsLink(e)},this.getDetailsLinkTitle(e)):null},this.getDetailsLinkTitle=e=>{const{getIdKeyForTab:t,intl:s}=this.props,r=t(e)||"";return s.formatMessage(n.Z.groupByAll,{value:r,count:2})},this.getFormattedUnits=()=>{const{intl:e,trend:t}=this.props,s=t.computedReportItem||"cost",r=this.getUnits();return"usage"===s?e.formatMessage(n.Z.units,{units:(0,Z.ZV)(r)}):e.formatMessage(n.Z.currencyUnits,{units:r})},this.getHorizontalLayout=()=>{const{containerAltHeight:e=D.containerAltHeight,chartAltHeight:t=D.chartAltHeight,currentReportFetchStatus:s,details:r}=this.props;return v().createElement(S.j0,{detailsLink:this.getDetailsLink(),status:s,tabs:this.getTabs(),title:this.getTitle()},this.getDetails(),this.getChart(e,t,r.adjustContainerHeight))},this.getTab=(e,t)=>{const{getIdKeyForTab:s,tabsReport:a,tabsReportFetchStatus:c}=this.props,o=s(e);return v().createElement(r.Tab,{eventKey:t,key:`${s(e)}-tab`,title:v().createElement(r.TabTitleText,null,this.getTabTitle(e))},v().createElement("div",{style:V.tabItems},v().createElement(S.mZ,{idKey:o,key:`${o}-items`,report:a,status:c},(({items:t})=>t.map((t=>this.getTabItem(e,t)))))))},this.getTabItem=(e,t)=>{const{availableTabs:s,getIdKeyForTab:r,tabsReport:a,topItems:c,trend:o}=this.props,{activeTabKey:i}=this.state,n=r(e),p=r(s[i]),l=o.computedReportItem||"cost",u=o.computedReportItemValue||"total";let h;const d=a&&a.meta&&a.meta.total;return"usage"===l?d&&a.meta.total.usage&&(h=a.meta.total.usage.value):d&&a.meta.total[l]&&a.meta.total[l][u]&&(h=a.meta.total[l][u].value),p===n?v().createElement(S.EH,{formatOptions:c?c.formatOptions:void 0,key:`${t.id}-item`,label:t.label?t.label.toString():"",totalValue:h,units:this.getUnits(),value:t[l][u].value}):null},this.getTabs=()=>{const{availableTabs:e}=this.props;return v().createElement(r.Tabs,{isFilled:!0,activeKey:this.state.activeTabKey,onSelect:this.handleTabClick},e.map(((e,t)=>this.getTab(e,t))))},this.getTabTitle=e=>{const{getIdKeyForTab:t,intl:s}=this.props,r=t(e)||"";return s.formatMessage(n.Z.groupByTop,{value:r,count:2})},this.getTitle=()=>{const{intl:e,titleKey:t}=this.props;return e.formatMessage(t)},this.getUnits=()=>{const{currentReport:e,details:t,trend:s}=this.props,r=s.computedReportItem||"cost",a=s.computedReportItemValue||"total";if(t.units)return t.units;if(!e)return"";const c=e&&e.meta&&e.meta.total;return"usage"===r?c&&e.meta.total.usage?e.meta.total.usage.units:void 0:c&&e.meta.total[r]&&e.meta.total[r][a]?e.meta.total[r][a].units:"USD"},this.getVerticalLayout=()=>{const{availableTabs:e,currentReportFetchStatus:t,details:s}=this.props;return v().createElement(S.iu,{detailsLink:this.getDetailsLink(),status:t,title:this.getTitle()},this.getDetails(),this.getChart(D.containerTrendHeight,D.chartHeight,s.adjustContainerHeight),Boolean(e)&&v().createElement("div",{style:V.tabs},this.getTabs()))},this.handleComparisonClick=e=>{this.setState({currentComparison:e})},this.handleTabClick=(e,t)=>{const{availableTabs:s,id:r,updateTab:a}=this.props;a(r,s[t]),this.setState({activeTabKey:t})}}componentDidMount(){const{availableTabs:e,fetchForecasts:t,fetchReports:s,id:r,trend:a,updateTab:c,widgetId:o}=this.props;e&&c(r,e[0]),s&&s(o),void 0!==a.computedForecastItem&&t(o)}componentDidUpdate(e){const{costType:t,fetchReports:s,fetchForecasts:r,trend:a,widgetId:c}=this.props;e.costType!==t&&(s(c),void 0!==a.computedForecastItem&&r(c))}render(){const{details:e}=this.props;return e.showHorizontal?this.getHorizontalLayout():this.getVerticalLayout()}}var W=s(74806),K=s(83127),Q=s(42581),L=s(36116);const _=e=>{switch(e){case"services":return"service";case"accounts":return"account";case"regions":return"region"}},M=(0,T.X1)(((e,{widgetId:t})=>{const s=f.Cv.selectWidget(e,t),r=f.Cv.selectWidgetQueries(e,t);return Object.assign(Object.assign({},s),{costType:(0,L.u)(),getIdKeyForTab:_,currentQuery:r.current,forecastQuery:r.forecast,previousQuery:r.previous,tabsQuery:r.tabs,currentReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.current),currentReportFetchStatus:Q.ZV.selectReportFetchStatus(e,s.reportPathsType,s.reportType,r.current),forecast:K.mj.selectForecast(e,s.forecastPathsType,s.forecastType,r.forecast),previousReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.previous),tabsReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.tabs),tabsReportFetchStatus:Q.ZV.selectReportFetchStatus(e,s.reportPathsType,s.reportType,r.tabs)})})),z={fetchForecasts:f.Kf.v4,fetchReports:f.Kf.a4,updateTab:f.Kf.as},H=(0,W.ZP)((0,y.connect)(M,z)(j)),k=(0,T.X1)(((e,t)=>({DashboardWidget:H,selectWidgets:f.Cv.selectWidgets(e),widgets:f.Cv.selectCurrentWidgets(e)}))),U=(0,y.connect)(k,{})(m);var J=s(99317);const X=e=>{switch(e){case"services":return"service";case"accounts":return"account";case"regions":return"region"}},B=(0,T.X1)(((e,{widgetId:t})=>{const s=J.Hc.selectWidget(e,t),r=J.Hc.selectWidgetQueries(e,t);return Object.assign(Object.assign({},s),{getIdKeyForTab:X,currentQuery:r.current,forecastQuery:r.forecast,previousQuery:r.previous,tabsQuery:r.tabs,currentReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.current),currentReportFetchStatus:Q.ZV.selectReportFetchStatus(e,s.reportPathsType,s.reportType,r.current),forecast:K.mj.selectForecast(e,s.forecastPathsType,s.forecastType,r.forecast),previousReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.previous),tabsReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.tabs),tabsReportFetchStatus:Q.ZV.selectReportFetchStatus(e,s.reportPathsType,s.reportType,r.tabs)})})),N={fetchForecasts:J.NA.v4,fetchReports:J.NA.a4,updateTab:J.NA.as},x=(0,W.ZP)((0,y.connect)(B,N)(j)),q=(0,T.X1)(((e,t)=>({DashboardWidget:x,selectWidgets:J.Hc.selectWidgets(e),widgets:J.Hc.selectCurrentWidgets(e)}))),G=(0,y.connect)(q,{})(m);var $=s(31554);const Y=e=>{switch(e){case"service_names":return"service_name";case"subscription_guids":return"subscription_guid";case"resource_locations":return"resource_location"}},ee=(0,T.X1)(((e,{widgetId:t})=>{const s=$.rj.selectWidget(e,t),r=$.rj.selectWidgetQueries(e,t);return Object.assign(Object.assign({},s),{getIdKeyForTab:Y,currentQuery:r.current,forecastQuery:r.forecast,previousQuery:r.previous,tabsQuery:r.tabs,currentReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.current),currentReportFetchStatus:Q.ZV.selectReportFetchStatus(e,s.reportPathsType,s.reportType,r.current),forecast:K.mj.selectForecast(e,s.forecastPathsType,s.forecastType,r.forecast),previousReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.previous),tabsReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.tabs),tabsReportFetchStatus:Q.ZV.selectReportFetchStatus(e,s.reportPathsType,s.reportType,r.tabs)})})),te={fetchForecasts:$.oc.v4,fetchReports:$.oc.a4,updateTab:$.oc.as},se=(0,W.ZP)((0,y.connect)(ee,te)(j)),re=(0,T.X1)(((e,t)=>({DashboardWidget:se,selectWidgets:$.rj.selectWidgets(e),widgets:$.rj.selectCurrentWidgets(e)}))),ae=(0,y.connect)(re,{})(m);var ce=s(44986);const oe=e=>{switch(e){case"service_names":return"service_name";case"subscription_guids":return"subscription_guid";case"resource_locations":return"resource_location"}},ie=(0,T.X1)(((e,{widgetId:t})=>{const s=ce.MW.selectWidget(e,t),r=ce.MW.selectWidgetQueries(e,t);return Object.assign(Object.assign({},s),{getIdKeyForTab:oe,currentQuery:r.current,forecastQuery:r.forecast,previousQuery:r.previous,tabsQuery:r.tabs,currentReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.current),currentReportFetchStatus:Q.ZV.selectReportFetchStatus(e,s.reportPathsType,s.reportType,r.current),forecast:K.mj.selectForecast(e,s.forecastPathsType,s.forecastType,r.forecast),previousReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.previous),tabsReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.tabs),tabsReportFetchStatus:Q.ZV.selectReportFetchStatus(e,s.reportPathsType,s.reportType,r.tabs)})})),ne={fetchForecasts:ce._V.v4,fetchReports:ce._V.a4,updateTab:ce._V.as},pe=(0,W.ZP)((0,y.connect)(ie,ne)(j)),le=(0,T.X1)(((e,t)=>({DashboardWidget:pe,selectWidgets:ce.MW.selectWidgets(e),widgets:ce.MW.selectCurrentWidgets(e)}))),ue=(0,y.connect)(le,{})(m);var he=s(79522);const de=e=>{switch(e){case"gcp_projects":return"gcp_project";case"regions":return"region";case"services":return"service"}},ge=(0,T.X1)(((e,{widgetId:t})=>{const s=he.oS.selectWidget(e,t),r=he.oS.selectWidgetQueries(e,t);return Object.assign(Object.assign({},s),{getIdKeyForTab:de,currentQuery:r.current,previousQuery:r.previous,tabsQuery:r.tabs,currentReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.current),currentReportFetchStatus:Q.ZV.selectReportFetchStatus(e,s.reportPathsType,s.reportType,r.current),forecast:K.mj.selectForecast(e,s.forecastPathsType,s.forecastType,r.forecast),previousReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.previous),tabsReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.tabs),tabsReportFetchStatus:Q.ZV.selectReportFetchStatus(e,s.reportPathsType,s.reportType,r.tabs)})})),be={fetchForecasts:he.n5.v4,fetchReports:he.n5.a4,updateTab:he.n5.as},ve=(0,W.ZP)((0,y.connect)(ge,be)(j)),me=(0,T.X1)(((e,t)=>({DashboardWidget:ve,selectWidgets:he.oS.selectWidgets(e),widgets:he.oS.selectCurrentWidgets(e)}))),ye=(0,y.connect)(me,{})(m);var Te=s(85394);const fe=e=>{switch(e){case"gcp_projects":return"gcp_project";case"regions":return"region";case"services":return"service"}},Re=(0,T.X1)(((e,{widgetId:t})=>{const s=Te.FF.selectWidget(e,t),r=Te.FF.selectWidgetQueries(e,t);return Object.assign(Object.assign({},s),{getIdKeyForTab:fe,currentQuery:r.current,previousQuery:r.previous,tabsQuery:r.tabs,currentReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.current),currentReportFetchStatus:Q.ZV.selectReportFetchStatus(e,s.reportPathsType,s.reportType,r.current),forecast:K.mj.selectForecast(e,s.forecastPathsType,s.forecastType,r.forecast),previousReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.previous),tabsReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.tabs),tabsReportFetchStatus:Q.ZV.selectReportFetchStatus(e,s.reportPathsType,s.reportType,r.tabs)})})),Pe={fetchForecasts:Te.uM.v4,fetchReports:Te.uM.a4,updateTab:Te.uM.as},Fe=(0,W.ZP)((0,y.connect)(Re,Pe)(j)),Se=(0,T.X1)(((e,t)=>({DashboardWidget:Fe,selectWidgets:Te.FF.selectWidgets(e),widgets:Te.FF.selectCurrentWidgets(e)}))),Oe=(0,y.connect)(Se,{})(m);var Ze=s(75836);const Ce=e=>{switch(e){case"services":return"service";case"projects":return"project";case"regions":return"region"}},Ae=(0,T.X1)(((e,{widgetId:t})=>{const s=Ze.Pi.selectWidget(e,t),r=Ze.Pi.selectWidgetQueries(e,t);return Object.assign(Object.assign({},s),{getIdKeyForTab:Ce,currentQuery:r.current,previousQuery:r.previous,tabsQuery:r.tabs,currentReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.current),currentReportFetchStatus:Q.ZV.selectReportFetchStatus(e,s.reportPathsType,s.reportType,r.current),forecast:K.mj.selectForecast(e,s.forecastPathsType,s.forecastType,r.forecast),previousReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.previous),tabsReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.tabs),tabsReportFetchStatus:Q.ZV.selectReportFetchStatus(e,s.reportPathsType,s.reportType,r.tabs)})})),Ie={fetchForecasts:Ze.lj.v4,fetchReports:Ze.lj.a4,updateTab:Ze.lj.as},we=(0,W.ZP)((0,y.connect)(Ae,Ie)(j)),Ee=(0,T.X1)(((e,t)=>({DashboardWidget:we,selectWidgets:Ze.Pi.selectWidgets(e),widgets:Ze.Pi.selectCurrentWidgets(e)}))),De=(0,y.connect)(Ee,{})(m);var Ve=s(83123);const je=e=>{switch(e){case"accounts":return"account";case"regions":return"region";case"services":return"service"}},We=(0,T.X1)(((e,{widgetId:t})=>{const s=Ve.qN.selectWidget(e,t),r=Ve.qN.selectWidgetQueries(e,t);return Object.assign(Object.assign({},s),{getIdKeyForTab:je,currentQuery:r.current,forecastQuery:r.forecast,previousQuery:r.previous,tabsQuery:r.tabs,currentReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.current),currentReportFetchStatus:Q.ZV.selectReportFetchStatus(e,s.reportPathsType,s.reportType,r.current),forecast:K.mj.selectForecast(e,s.forecastPathsType,s.forecastType,r.forecast),previousReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.previous),tabsReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.tabs),tabsReportFetchStatus:Q.ZV.selectReportFetchStatus(e,s.reportPathsType,s.reportType,r.tabs)})})),Ke={fetchForecasts:Ve.BV.v4,fetchReports:Ve.BV.a4,updateTab:Ve.BV.as},Qe=(0,W.ZP)((0,y.connect)(We,Ke)(j)),Le=(0,T.X1)(((e,t)=>({DashboardWidget:Qe,selectWidgets:Ve.qN.selectWidgets(e),widgets:Ve.qN.selectCurrentWidgets(e)}))),_e=(0,y.connect)(Le,{})(m);var Me=s(17563);const ze=e=>{switch(e){case"clusters":return"cluster";case"nodes":return"node";case"projects":return"project"}},He=(0,T.X1)(((e,{widgetId:t})=>{const s=Me.nH.selectWidget(e,t),r=Me.nH.selectWidgetQueries(e,t);return Object.assign(Object.assign({},s),{getIdKeyForTab:ze,chartAltHeight:250,containerAltHeight:250,currentQuery:r.current,forecastQuery:r.forecast,previousQuery:r.previous,tabsQuery:r.tabs,currentReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.current),currentReportFetchStatus:Q.ZV.selectReportFetchStatus(e,s.reportPathsType,s.reportType,r.current),forecast:K.mj.selectForecast(e,s.forecastPathsType,s.forecastType,r.forecast),previousReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.previous),tabsReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.tabs),tabsReportFetchStatus:Q.ZV.selectReportFetchStatus(e,s.reportPathsType,s.reportType,r.tabs)})})),ke={fetchForecasts:Me.U6.v4,fetchReports:Me.U6.a4,updateTab:Me.U6.as},Ue=(0,W.ZP)((0,y.connect)(He,ke)(j)),Je=(0,T.X1)(((e,t)=>({DashboardWidget:Ue,selectWidgets:Me.nH.selectWidgets(e),widgets:Me.nH.selectCurrentWidgets(e)}))),Xe=(0,y.connect)(Je,{})(m);var Be=s(94329),Ne=s(45235),xe=s(1723),qe=s(33307),Ge=s(41251),$e=s(45785),Ye=s(16503);const et=e=>{switch(e){case"product_services":return"product_service";case"payer_tenant_ids":return"payer_tenant_id";case"regions":return"region"}},tt=(0,T.X1)(((e,{widgetId:t})=>{const s=Ye.$h.selectWidget(e,t),r=Ye.$h.selectWidgetQueries(e,t);return Object.assign(Object.assign({},s),{getIdKeyForTab:et,currentQuery:r.current,forecastQuery:r.forecast,previousQuery:r.previous,tabsQuery:r.tabs,currentReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.current),currentReportFetchStatus:Q.ZV.selectReportFetchStatus(e,s.reportPathsType,s.reportType,r.current),forecast:K.mj.selectForecast(e,s.forecastPathsType,s.forecastType,r.forecast),previousReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.previous),tabsReport:Q.ZV.selectReport(e,s.reportPathsType,s.reportType,r.tabs),tabsReportFetchStatus:Q.ZV.selectReportFetchStatus(e,s.reportPathsType,s.reportType,r.tabs)})})),st={fetchForecasts:Ye.eb.v4,fetchReports:Ye.eb.a4,updateTab:Ye.eb.as},rt=(0,W.ZP)((0,y.connect)(tt,st)(j)),at=(0,T.X1)(((e,t)=>({DashboardWidget:rt,selectWidgets:Ye.$h.selectWidgets(e),widgets:Ye.$h.selectCurrentWidgets(e)}))),ct=(0,y.connect)(at,{})(m);var ot=s(49382),it=s(17918),nt=s(98499);const pt={date:{alignSelf:"center",flexGrow:1,textAlign:"end"},costType:{marginLeft:w.ZP.var},header:{backgroundColor:ot.ZP.var,padding:nt.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},headerContentLeft:{display:"flex"},headerContentRight:{display:"flex"},infoIcon:{fontSize:it.ZP.value},infoTitle:{fontWeight:"bold"},main:{padding:nt.ZP.value},tabs:{backgroundColor:ot.ZP.var,paddingBottom:nt.ZP.var,paddingTop:nt.ZP.var}},lt=e=>{switch(e){case"infrastructure":return"infrastructure";case"ocp":return"ocp"}},ut=[{label:n.Z.perspectiveValues,value:"ocp"}],ht=[{label:n.Z.perspectiveValues,value:"aws"}],dt=[{label:n.Z.perspectiveValues,value:"aws_ocp"}],gt=[{label:n.Z.perspectiveValues,value:"azure"}],bt=[{label:n.Z.perspectiveValues,value:"oci"}],vt=[{label:n.Z.perspectiveValues,value:"azure_ocp"}],mt=[{label:n.Z.perspectiveValues,value:"gcp"}],yt=[{label:n.Z.perspectiveValues,value:"gcp_ocp"}],Tt=[{label:n.Z.perspectiveValues,value:"ibm"}],ft=[{label:n.Z.perspectiveValues,value:"ibm_ocp"}],Rt=[{label:n.Z.perspectiveValues,value:"ocp_cloud"}];class Pt extends v().Component{constructor(){super(...arguments),this.defaultState={activeTabKey:0},this.state=Object.assign({},this.defaultState),this.getAvailableTabs=()=>{const e=[];return this.isOcpAvailable()&&e.push({contentRef:v().createRef(),tab:"ocp"}),(this.isAwsAvailable()||this.isAzureAvailable()||this.isGcpAvailable()||this.isIbmAvailable()||this.isOciAvailable()||this.isOcpCloudAvailable())&&e.push({contentRef:v().createRef(),tab:"infrastructure"}),e},this.getCostType=()=>{const{costType:e}=this.props,{currentInfrastructurePerspective:t,currentOcpPerspective:s}=this.state;return"aws"===("infrastructure"===this.getCurrentTab()?t:s)?v().createElement("div",{style:pt.costType},v().createElement(d.T,{onSelect:this.handleCostTypeSelected,costType:e})):null},this.getCurrentTab=()=>{const{activeTabKey:e}=this.state,t=this.isAwsAvailable(),s=this.isAzureAvailable(),r=this.isOciAvailable(),a=this.isGcpAvailable(),c=this.isIbmAvailable(),o=this.isOcpAvailable(),i=this.isOcpCloudAvailable();return o&&!(t||s||r||a||c||i)?"ocp":!o&&(t||s||r||a||c||i)?"infrastructure":0===e?"ocp":"infrastructure"},this.getDefaultInfrastructurePerspective=()=>{const{perspective:e}=this.props;switch(e){case"aws":case"aws_ocp":case"azure":case"oci":case"azure_ocp":case"gcp":case"gcp_ocp":case"ibm":case"ibm_ocp":case"ocp_cloud":return e}return this.isOcpCloudAvailable()?"ocp_cloud":this.isAwsAvailable()?"aws":this.isAzureAvailable()?"azure":this.isOciAvailable()?"oci":this.isGcpAvailable()?"gcp":this.isIbmAvailable()?"ibm":void 0},this.getDefaultOcpPerspective=()=>{const{ocpProviders:e,perspective:t,userAccess:s}=this.props;return"ocp"===t?t:(0,$e.mn)(s,e)?"ocp":void 0},this.getPerspective=()=>{const{currentInfrastructurePerspective:e,currentOcpPerspective:t}=this.state,s=this.isAwsAvailable(),r=this.isAzureAvailable(),a=this.isGcpAvailable(),c=this.isIbmAvailable(),o=this.isOciAvailable(),i=this.isOcpAvailable();if(!(s||r||a||c||o||i))return null;const n=[];"infrastructure"===this.getCurrentTab()?(this.isOcpCloudAvailable()&&n.push(...Rt),s&&n.push(...ht),this.isAwsOcpAvailable()&&n.push(...dt),a&&n.push(...mt),(0,Ge.K)("gcp_ocp")&&this.isGcpOcpAvailable()&&n.push(...yt),c&&n.push(...Tt),(0,Ge.K)("ibm")&&this.isIbmOcpAvailable()&&n.push(...ft),r&&n.push(...gt),this.isAzureOcpAvailable()&&n.push(...vt),(0,Ge.K)("oci")&&o&&n.push(...bt)):n.push(...ut);const p="infrastructure"===this.getCurrentTab()?e:t;return v().createElement(g.X,{currentItem:p||n[0].value,onSelected:this.handlePerspectiveSelected,options:n})},this.getRouteForQuery=e=>{const{history:t}=this.props;return`${t.location.pathname}?${function(e){return c.IV(e)}(e)}`},this.getTab=(e,t,s)=>v().createElement(r.Tab,{eventKey:s,key:`${lt(e)}-tab`,tabContentId:`tab-${s}`,tabContentRef:t,title:v().createElement(r.TabTitleText,null,this.getTabTitle(e))}),this.getTabContent=e=>e.map(((e,t)=>v().createElement(r.TabContent,{eventKey:t,key:`${lt(e.tab)}-tabContent`,id:`tab-${t}`,ref:e.contentRef},this.getTabItem(e.tab,t)))),this.getTabItem=(e,t)=>{const{awsProviders:s,azureProviders:r,ociProviders:a,costType:c,gcpProviders:o,ibmProviders:i,ocpProviders:n}=this.props,{activeTabKey:p,currentInfrastructurePerspective:l,currentOcpPerspective:h}=this.state,d=v().createElement(v().Fragment,null),g=v().createElement(u.Z,{showReload:!1});if(p!==t)return d;const b=lt(e);if("infrastructure"===b)return"ocp_cloud"===l?(0,Be.Bj)(s,n)||(0,Be.Bj)(r,n)||(0,Be.Bj)(o,n)||(0,Be.Bj)(i,n)?v().createElement(_e,null):g:"aws"===l?(0,Be.g8)(s)||(0,Be.rL)(s)?v().createElement(U,{costType:c}):g:"aws_ocp"===l?(0,Be.at)(s,n)||(0,Be.D2)(s,n)?v().createElement(G,null):g:"azure"===l?(0,Be.g8)(r)||(0,Be.rL)(r)?v().createElement(ae,null):g:"azure_ocp"===l?(0,Be.at)(r,n)||(0,Be.D2)(r,n)?v().createElement(ue,null):g:"gcp"===l?(0,Be.g8)(o)||(0,Be.rL)(o)?v().createElement(ye,null):g:"gcp_ocp"===l?(0,Be.at)(o,n)||(0,Be.D2)(o,n)?v().createElement(Oe,null):g:"ibm"===l?(0,Be.g8)(i)||(0,Be.rL)(i)?v().createElement(De,null):g:"oci"===l&&((0,Be.g8)(a)||(0,Be.rL)(a))?v().createElement(ct,null):g;if("ocp"===b){const e=(0,Be.g8)(n)||(0,Be.rL)(n);return"ocp"===h&&e?v().createElement(Xe,null):g}return d},this.getTabs=e=>{const{activeTabKey:t}=this.state;return v().createElement(r.Tabs,{activeKey:t,onSelect:this.handleTabClick},e.map(((e,t)=>this.getTab(e.tab,e.contentRef,t))))},this.getTabTitle=e=>{const{intl:t}=this.props;return"infrastructure"===e?t.formatMessage(n.Z.infrastructure):"ocp"===e?t.formatMessage(n.Z.openShift):void 0},this.handleCostTypeSelected=e=>{const{history:t,query:s}=this.props,r=Object.assign(Object.assign({},JSON.parse(JSON.stringify(s))),{cost_type:e});t.replace(this.getRouteForQuery(r))},this.handlePerspectiveSelected=e=>{const{history:t,query:s}=this.props,r=this.getCurrentTab();this.setState(Object.assign(Object.assign({},"infrastructure"===r&&{currentInfrastructurePerspective:e}),"ocp"===r&&{currentOcpPerspective:e}),(()=>{const r=Object.assign(Object.assign({},JSON.parse(JSON.stringify(s))),{perspective:e});t.replace(this.getRouteForQuery(r))}))},this.handleTabClick=(e,t)=>{const{history:s,query:r}=this.props,{activeTabKey:a}=this.state;a!==t&&this.setState({activeTabKey:t},(()=>{const e=Object.assign(Object.assign({},JSON.parse(JSON.stringify(r))),{tabKey:t});s.replace(this.getRouteForQuery(e))}))},this.isAwsAvailable=()=>{const{awsProviders:e,userAccess:t}=this.props;return(0,$e.n9)(t,e)},this.isAwsOcpAvailable=()=>{const{awsProviders:e,ocpProviders:t,userAccess:s}=this.props;return(0,$e.KT)(s)&&(0,Be.JY)(e,t)},this.isAzureAvailable=()=>{const{azureProviders:e,userAccess:t}=this.props;return(0,$e.hn)(t,e)},this.isAzureOcpAvailable=()=>{const{azureProviders:e,ocpProviders:t,userAccess:s}=this.props;return(0,$e.FW)(s)&&(0,Be.JY)(e,t)},this.isGcpAvailable=()=>{const{gcpProviders:e,userAccess:t}=this.props;return(0,$e.FE)(t,e)},this.isGcpOcpAvailable=()=>{const{gcpProviders:e,ocpProviders:t,userAccess:s}=this.props;return(0,$e.Sv)(s)&&(0,Be.JY)(e,t)},this.isIbmAvailable=()=>{const{ibmProviders:e,userAccess:t}=this.props;return(0,$e.Es)(t,e)},this.isIbmOcpAvailable=()=>{const{ibmProviders:e,ocpProviders:t,userAccess:s}=this.props;return(0,$e.tt)(s)&&(0,Be.JY)(e,t)},this.isOciAvailable=()=>{const{ociProviders:e,userAccess:t}=this.props;return(0,$e.HC)(t,e)},this.isOcpAvailable=()=>{const{ocpProviders:e,userAccess:t}=this.props;return(0,$e.mn)(t,e)},this.isOcpCloudAvailable=()=>{const e=this.isAwsOcpAvailable(),t=this.isAzureOcpAvailable(),s=this.isGcpOcpAvailable(),r=this.isIbmOcpAvailable();return e||t||s||r}}componentDidMount(){const{tabKey:e}=this.props;this.setState({activeTabKey:e,currentInfrastructurePerspective:this.getDefaultInfrastructurePerspective(),currentOcpPerspective:this.getDefaultOcpPerspective()})}componentDidUpdate(e){const{providers:t,tabKey:s,userAccess:r}=this.props;e.userAccess===r&&e.providers===t||this.setState({activeTabKey:s,currentInfrastructurePerspective:this.getDefaultInfrastructurePerspective(),currentOcpPerspective:this.getDefaultOcpPerspective()})}render(){const{providersFetchStatus:e,intl:t,userAccessFetchStatus:s}=this.props,c=!(2!==e||this.isAwsAvailable()||this.isAzureAvailable()||this.isGcpAvailable()||this.isIbmAvailable()||this.isOciAvailable()||this.isOcpAvailable()),o=1===e||1===s,i=this.getAvailableTabs(),u=t.formatMessage(n.Z.overviewTitle);return o?v().createElement(l.Z,{title:u}):c?v().createElement(h.Z,{title:u}):v().createElement(v().Fragment,null,v().createElement("header",{style:pt.header},v().createElement("div",{style:pt.headerContent},v().createElement(r.Title,{headingLevel:"h1",size:r.TitleSizes["2xl"]},u,v().createElement("span",{style:pt.infoIcon},v().createElement(r.Popover,{"aria-label":t.formatMessage(n.Z.overviewInfoArialLabel),enableFlip:!0,bodyContent:v().createElement(v().Fragment,null,v().createElement("p",{style:pt.infoTitle},t.formatMessage(n.Z.openShiftCloudInfrastructure)),v().createElement("p",null,t.formatMessage(n.Z.openShiftCloudInfrastructureDesc)),v().createElement("br",null),v().createElement("p",{style:pt.infoTitle},t.formatMessage(n.Z.openShift)),v().createElement("p",null,t.formatMessage(n.Z.openShiftDesc)),v().createElement("br",null),v().createElement("p",{style:pt.infoTitle},t.formatMessage(n.Z.aws)),v().createElement("p",null,t.formatMessage(n.Z.awsDesc)),v().createElement("br",null),v().createElement("p",{style:pt.infoTitle},t.formatMessage(n.Z.gcp)),v().createElement("p",null,t.formatMessage(n.Z.gcpDesc)),(0,Ge.K)("ibm")&&v().createElement(v().Fragment,null,v().createElement("br",null),v().createElement("p",{style:pt.infoTitle},t.formatMessage(n.Z.ibm)),v().createElement("p",null,t.formatMessage(n.Z.ibmDesc))),v().createElement("br",null),v().createElement("p",{style:pt.infoTitle},t.formatMessage(n.Z.azure)),v().createElement("p",null,t.formatMessage(n.Z.azureDesc)),(0,Ge.K)("oci")&&v().createElement(v().Fragment,null,v().createElement("br",null),v().createElement("p",{style:pt.infoTitle},t.formatMessage(n.Z.oci)),v().createElement("p",null,t.formatMessage(n.Z.ociDesc))))},v().createElement(r.Button,{variant:r.ButtonVariant.plain},v().createElement(a.iC,null))))),v().createElement("div",{style:pt.headerContentRight},(0,Ge.K)("currency")&&v().createElement(p.F,null))),v().createElement("div",{style:pt.tabs},this.getTabs(i)),v().createElement("div",{style:pt.headerContent},v().createElement("div",{style:pt.headerContentLeft},this.getPerspective(),this.getCostType()),v().createElement("div",{style:pt.date},(0,qe.J4)()))),v().createElement("div",{style:pt.main},this.getTabContent(i)))}}const Ft=(0,T.X1)(((e,t)=>{const s=function(e){return c.mB(e)}(location.search),r=(0,L.u)(),a=s.perspective,n=s.tabKey&&!Number.isNaN(s.tabKey)?Number(s.tabKey):0,p=Object.assign(Object.assign(Object.assign({},a&&{perspective:a}),{tabKey:n}),"aws"===a&&{cost_type:r}),l=function(e){return c.pm(e)}(p),u=(0,o.H)(Ne.NT),h=Ne.aX.selectProviders(e,"all",u),d=Ne.aX.selectProvidersError(e,"all",u),g=Ne.aX.selectProvidersFetchStatus(e,"all",u),b=(0,i.T)(xe.QR),v=xe.JO.selectUserAccess(e,"all",b),m=xe.JO.selectUserAccessError(e,"all",b),y=xe.JO.selectUserAccessFetchStatus(e,"all",b);return{awsProviders:(0,Be.BV)(h,"aws"),azureProviders:(0,Be.BV)(h,"azure"),gcpProviders:(0,Be.BV)(h,"gcp"),ibmProviders:(0,Be.BV)(h,"ibm"),ociProviders:(0,Be.BV)(h,"oci"),ocpProviders:(0,Be.BV)(h,"ocp"),costType:r,providers:h,providersError:d,providersFetchStatus:g,perspective:a,query:p,queryString:l,tabKey:n,userAccess:v,userAccessError:m,userAccessFetchStatus:y,userAccessQueryString:b}})),St=(0,W.ZP)((0,y.connect)(Ft,{})(Pt))},63211:(e,t,s)=>{s.d(t,{Z:()=>r});const r=()=>{}}}]);
//# sourceMappingURL=bfbff4ac1ea7e84ed4a3.bundle.js.map