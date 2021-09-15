(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[2340],{66785:(e,t,r)=>{"use strict";r.d(t,{T:()=>a});var s=r(80129);function a(e){return(0,s.stringify)(e,{encode:!1,indices:!1})}},52413:(e,t,r)=>{"use strict";r.d(t,{G:()=>n});var s=r(80708),a=r(32004),o=r(93952),i=r(97522),c=r.n(i);const n=(0,r(74806).ZP)((({intl:e=a.N})=>{const t=e.formatMessage(o.Z.LoadingStateTitle),r=e.formatMessage(o.Z.LoadingStateDesc);return c().createElement(s.EmptyState,{variant:s.EmptyStateVariant.large,className:"pf-m-redhat-font"},c().createElement(s.Spinner,{size:"lg"}),c().createElement(s.Title,{headingLevel:"h5",size:"lg"},t),c().createElement(s.EmptyStateBody,null,r))}))},96924:(e,t,r)=>{"use strict";r.d(t,{X:()=>u});var s=r(80708),a=r(93952),o=r(97522),i=r.n(o),c=r(74806);const n={perspectiveSelector:{display:"flex",alignItems:"center"},perspectiveLabel:{marginBottom:0,marginRight:r(32412).ZP.var},perspectiveOptionLabel:{marginBottom:6,marginLeft:8,marginTop:6}};class l extends i().Component{constructor(){super(...arguments),this.defaultState={isPerspectiveOpen:!1},this.state=Object.assign({},this.defaultState),this.getDropDownItems=()=>{const{intl:e,options:t}=this.props;return t.map((t=>i().createElement(s.DropdownItem,{component:"button",key:t.value,onClick:()=>this.handleClick(t.value)},e.formatMessage(t.label,{value:t.value}))))},this.getCurrentLabel=()=>{const{currentItem:e,intl:t,options:r}=this.props;let s="";for(const a of r)if(e===a.value){s=t.formatMessage(a.label,{value:a.value});break}return s},this.getDropDown=()=>{const{intl:e,isDisabled:t,options:r}=this.props,{isPerspectiveOpen:a}=this.state,o=this.getDropDownItems();return 1===r.length?i().createElement("div",{style:n.perspectiveOptionLabel},e.formatMessage(r[0].label,{value:r[0].value})):i().createElement(s.Dropdown,{onSelect:this.handleSelect,toggle:i().createElement(s.DropdownToggle,{isDisabled:t,onToggle:this.handleToggle},this.getCurrentLabel()),isOpen:a,dropdownItems:o})},this.handleClick=e=>{const{onItemClicked:t}=this.props;t&&t(e)},this.handleSelect=()=>{this.setState({isPerspectiveOpen:!this.state.isPerspectiveOpen})},this.handleToggle=e=>{this.setState({isPerspectiveOpen:e})}}render(){const{intl:e}=this.props;return i().createElement("div",{style:n.perspectiveSelector},i().createElement(s.Title,{headingLevel:"h3",size:"md",style:n.perspectiveLabel},e.formatMessage(a.Z.Perspective)),this.getDropDown())}}const u=(0,c.ZP)(l)},64506:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>pt});var s=r(80708),a=r(91290),o=r(86208),i=r(66785),c=r(43819),n=r(93952),l=r(73466),u=r(64146),p=r(13883),h=r(96924),d=r(97522),g=r.n(d);const m=({DashboardWidget:e,selectWidgets:t,widgets:r})=>g().createElement("div",null,g().createElement(s.Grid,{hasGutter:!0},r.map((r=>t[r].details.showHorizontal?g().createElement(s.GridItem,{sm:12,key:r},g().createElement(e,{widgetId:r})):g().createElement(s.GridItem,{lg:12,xl:6,xl2:4,key:r},g().createElement(e,{widgetId:r}))))));var v=r(43476),b=r(94377),y=r(67119),f=r(95078),T=r(60232),P=r(35956),F=r(7064),R=r(16530),S=r(25800);class C extends g().Component{constructor(){super(...arguments),this.defaultState={isChartComparisonOpen:!1},this.state=Object.assign({},this.defaultState),this.getDropDownItems=()=>{const{options:e}=this.props;return e.map((e=>g().createElement(s.DropdownItem,{component:"button",key:e.value,onClick:()=>this.handleClick(e.value)},e.label)))},this.getCurrentLabel=()=>{const{currentItem:e,options:t}=this.props;let r="";for(const s of t)if(e===s.value){r=s.label;break}return r},this.handleClick=e=>{const{onItemClicked:t}=this.props;t&&t(e)},this.handleSelect=()=>{this.setState({isChartComparisonOpen:!this.state.isChartComparisonOpen})},this.handleToggle=e=>{this.setState({isChartComparisonOpen:e})}}render(){const{isChartComparisonOpen:e}=this.state,t=this.getDropDownItems();return g().createElement(s.Dropdown,{onSelect:this.handleSelect,toggle:g().createElement(s.DropdownToggle,{onToggle:this.handleToggle},this.getCurrentLabel()),isOpen:e,dropdownItems:t})}}const D=C;var w=r(91707),I=r(32412),Z=r(57640);const E={chartAltHeight:250,chartHeight:180,containerAltHeight:250,containerTrendHeight:180,containerUsageHeight:180},A={comparison:{marginBottom:I.ZP.value},tabs:{marginTop:w.ZP.value},tabItems:{marginTop:Z.ZP.value}};class O extends g().Component{constructor(){super(...arguments),this.state={activeTabKey:0,currentComparison:"cumulative"},this.buildDetailsLink=e=>{const{details:t,getIdKeyForTab:r}=this.props,s=r(e);return`${t.viewAllPath}?${(0,f.pm)({group_by:{[s]:"*"},order_by:{cost:"desc"}})}`},this.getChart=(e,t,r=!1)=>{const{chartType:s,trend:a}=this.props;return"dailyTrend"===s?this.getDailyTrendChart(e,t,r,a.showInfrastructureLabel,a.showSupplementaryLabel):"dailyCost"===s?this.getDailyCostChart(e,t,r):"trend"===s?this.getTrendChart(e,t,r,a.showInfrastructureLabel,a.showSupplementaryLabel):"usage"===s?this.getUsageChart(t,r):null},this.getChartComparison=()=>{const{intl:e,trend:t}=this.props,{currentComparison:r}=this.state,s=e.formatMessage(n.Z.CurrencyUnits,{units:this.getUnits()}),a=e.formatMessage(t.titleKey,{units:s}),o=[{label:e.formatMessage(t.dailyTitleKey,{units:s}),value:"daily"},{label:a,value:"cumulative"}];return g().createElement(D,{currentItem:r||o[0].value,onItemClicked:this.handleComparisonClick,options:o})},this.getDailyCostChart=(e,t,r=!1)=>{const{currentReport:s,previousReport:a,trend:o}=this.props,{currentComparison:i}=this.state,c=o.computedReportItem,n=o.computedReportItemValue,l="daily"===i,u=l?1:o.type,p=(0,T.zJ)(s,u,"date","infrastructure",n),h=(0,T.zJ)(a,u,"date","infrastructure",n),d=(0,T.zJ)(s,u,"date",c,n),m=(0,T.zJ)(a,u,"date",c,n),v=this.getForecastData(s,o.computedForecastItem),b=this.getForecastData(s,o.computedForecastInfrastructureItem),y=l?P.V3:P.me;return g().createElement(g().Fragment,null,g().createElement("div",{style:A.comparison},this.getChartComparison()),g().createElement(y,{adjustContainerHeight:r,containerHeight:e,currentCostData:d,currentInfrastructureCostData:p,forecastConeData:v.forecastConeData,forecastData:v.forecastData,forecastInfrastructureConeData:b.forecastConeData,forecastInfrastructureData:b.forecastData,height:t,previousCostData:m,previousInfrastructureCostData:h,showForecast:void 0!==o.computedForecastItem,valueFormatter:S.xG,valueFormatterOptions:o.valueFormatterOptions}))},this.getDailyTrendChart=(e,t,r=!1,s=!1,a=!1)=>{const{currentReport:o,details:i,previousReport:c,trend:n}=this.props,{currentComparison:l}=this.state,u=this.getUnits(),p=n.computedReportItem,h=n.computedReportItemValue,d="daily"===l,m=d?1:n.type,v=(0,T.zJ)(o,m,"date",p,h),b=(0,T.zJ)(c,m,"date",p,h),{forecastData:y,forecastConeData:f}=this.getForecastData(o,n.computedForecastItem),F=d?P.Y0:P.Nd;return g().createElement(g().Fragment,null,g().createElement("div",{style:A.comparison},this.getChartComparison()),g().createElement(F,{adjustContainerHeight:r,containerHeight:e,currentData:v,forecastData:y,forecastConeData:f,height:t,previousData:b,showForecast:void 0!==n.computedForecastItem,showInfrastructureLabel:s,showSupplementaryLabel:a,showUsageLegendLabel:i.showUsageLegendLabel,valueFormatter:S.xG,valueFormatterOptions:n.valueFormatterOptions,units:u}))},this.getForecastData=(e,t="cost")=>{const{forecast:r,trend:s}=this.props,{currentComparison:a}=this.state,o="daily"===a?1:s.type;let i,c;if(t){const s=(0,F.cloneDeep)(r);if(s&&(s.data=[]),r&&e&&e.data){const a=e.meta&&e.meta.total&&e.meta.total[t]?e.meta.total[t].total.value:0,i=e.meta&&e.meta.total&&e.meta.total[t]?e.meta.total[t].total.units:"USD",c=e.data.filter((e=>e.values.length)),n=c[c.length-1]?c[c.length-1].date:void 0;if(r&&r.data&&r.data.length>0){const e=new Date(n),t=e.getMonth()+1;for(const a of r.data){const r=new Date(a.date),o=r.getMonth()+1;r>e&&t===o&&s.data.push(a)}if(0===o){const e=r.data[0].values&&r.data[0].values.length>0?r.data[0].values[0].date:void 0,t=1===this.getNumberOfDays(n,e)?n:e;s.data.unshift({date:t,values:[{date:t,cost:{confidence_max:{value:0},confidence_min:{value:0},total:{value:a,units:i}},infrastructure:{confidence_max:{value:0},confidence_min:{value:0},total:{value:a,units:i}},supplementary:{confidence_max:{value:0},confidence_min:{value:0},total:{value:a,units:i}}}]})}}}i=(0,T.nB)(s,o,t),c=(0,T.Qw)(s,o,t)}return{forecastData:i,forecastConeData:c}},this.getNumberOfDays=(e,t)=>{const r=new Date(e),s=new Date(t).getTime()-r.getTime();return Math.round(s/864e5)},this.getTrendChart=(e,t,r=!1,s=!1,a=!1)=>{const{currentReport:o,details:i,intl:c,previousReport:l,trend:u}=this.props,p=this.getUnits(),h=c.formatMessage(u.titleKey,{units:c.formatMessage(n.Z.CurrencyUnits,{units:p})}),d=u.computedReportItem,m=u.computedReportItemValue,v=(0,T.zJ)(o,u.type,"date",d,m),b=(0,T.zJ)(l,u.type,"date",d,m),{forecastData:y,forecastConeData:f}=this.getForecastData(o,u.computedForecastItem);return g().createElement(P.Nd,{adjustContainerHeight:r,containerHeight:e,currentData:v,forecastData:y,forecastConeData:f,height:t,previousData:b,showForecast:void 0!==u.computedForecastItem,showInfrastructureLabel:s,showSupplementaryLabel:a,showUsageLegendLabel:i.showUsageLegendLabel,title:h,units:p,valueFormatter:S.xG,valueFormatterOptions:u.valueFormatterOptions})},this.getUsageChart=(e,t=!1)=>{const{currentReport:r,intl:s,previousReport:a,trend:o}=this.props,i=s.formatMessage(o.titleKey,{units:s.formatMessage(n.Z.Units,{units:this.getUnits()})}),c=(0,T.zJ)(r,o.type,"date","request"),l=(0,T.zJ)(a,o.type,"date","request"),u=(0,T.zJ)(r,o.type,"date","usage"),p=(0,T.zJ)(a,o.type,"date","usage");return g().createElement(P.I0,{adjustContainerHeight:t,containerHeight:E.containerUsageHeight,currentRequestData:c,currentUsageData:u,height:e,previousRequestData:l,previousUsageData:p,title:i,valueFormatter:S.Bw,valueFormatterOptions:o.valueFormatterOptions})},this.getDetails=()=>{const{chartType:e,currentReport:t,details:r,reportType:s,trend:a}=this.props,o=a.computedReportItem||"cost",i=a.computedReportItemValue||"total",c=this.getUnits();return g().createElement(P.rN,{chartType:e,computedReportItem:o,computedReportItemValue:i,costLabel:this.getDetailsLabel(r.costKey),report:t,reportType:s,requestLabel:this.getDetailsLabel(r.requestKey),showTooltip:r.showTooltip,showUnits:r.showUnits,showUsageFirst:r.showUsageFirst,units:c,usageValueFormatterOptions:r.usageValueFormatterOptions,usageLabel:this.getDetailsLabel(r.usageKey),valueFormatter:this.getValueFormatter(),valueFormatterOptions:r.valueFormatterOptions})},this.getDetailsLabel=e=>{const{intl:t}=this.props;return e?t.formatMessage(e):void 0},this.getDetailsLink=()=>{const{currentTab:e,details:t}=this.props;return t.viewAllPath?g().createElement(R.Link,{to:this.buildDetailsLink(e)},this.getDetailsLinkTitle(e)):null},this.getDetailsLinkTitle=e=>{const{getIdKeyForTab:t,intl:r}=this.props,s=t(e)||"";return r.formatMessage(n.Z.GroupByAll,{value:s,count:2})},this.getHorizontalLayout=()=>{const{containerAltHeight:e=E.containerAltHeight,chartAltHeight:t=E.chartAltHeight,currentReportFetchStatus:r,details:s}=this.props;return g().createElement(P.j0,{detailsLink:this.getDetailsLink(),status:r,tabs:this.getTabs(),title:this.getTitle()},this.getDetails(),this.getChart(e,t,s.adjustContainerHeight))},this.getTab=(e,t)=>{const{getIdKeyForTab:r,tabsReport:a,tabsReportFetchStatus:o}=this.props,i=r(e);return g().createElement(s.Tab,{eventKey:t,key:`${r(e)}-tab`,title:g().createElement(s.TabTitleText,null,this.getTabTitle(e))},g().createElement("div",{style:A.tabItems},g().createElement(P.mZ,{idKey:i,key:`${i}-items`,report:a,status:o},(({items:t})=>t.map((t=>this.getTabItem(e,t)))))))},this.getTabItem=(e,t)=>{const{availableTabs:r,getIdKeyForTab:s,tabsReport:a,topItems:o,trend:i}=this.props,{activeTabKey:c}=this.state,n=s(e),l=s(r[c]),u=i.computedReportItem||"cost",p=i.computedReportItemValue||"total";let h;const d=a&&a.meta&&a.meta.total;return"usage"===u?d&&a.meta.total.usage&&(h=a.meta.total.usage.value):d&&a.meta.total[u]&&a.meta.total[u][p]&&(h=a.meta.total[u][p].value),l===n?g().createElement(P.EH,{key:`${t.id}-item`,label:t.label?t.label.toString():"",totalValue:h,units:this.getUnits(),value:t[u][p].value,valueFormatterOptions:o.valueFormatterOptions,valueFormatter:this.getValueFormatter()}):null},this.getTabs=()=>{const{availableTabs:e}=this.props;return g().createElement(s.Tabs,{isFilled:!0,activeKey:this.state.activeTabKey,onSelect:this.handleTabClick},e.map(((e,t)=>this.getTab(e,t))))},this.getTabTitle=e=>{const{getIdKeyForTab:t,intl:r}=this.props,s=t(e)||"";return r.formatMessage(n.Z.GroupByTop,{value:s,count:2})},this.getTitle=()=>{const{intl:e,titleKey:t}=this.props;return e.formatMessage(t)},this.getUnits=()=>{const{currentReport:e,details:t,trend:r}=this.props,s=r.computedReportItem||"cost",a=r.computedReportItemValue||"total";if(t.units)return t.units;if(!e)return"";const o=e&&e.meta&&e.meta.total;return"usage"===s?o&&e.meta.total.usage?e.meta.total.usage.units:void 0:o&&e.meta.total[s]&&e.meta.total[s][a]?e.meta.total[s][a].units:"USD"},this.getValueFormatter=()=>{const e=this.getUnits();return(0,S.dM)(e)?S.Bw:S.xG},this.getVerticalLayout=()=>{const{availableTabs:e,currentReportFetchStatus:t,details:r}=this.props;return g().createElement(P.iu,{detailsLink:this.getDetailsLink(),status:t,title:this.getTitle()},this.getDetails(),this.getChart(E.containerTrendHeight,E.chartHeight,r.adjustContainerHeight),Boolean(e)&&g().createElement("div",{style:A.tabs},this.getTabs()))},this.handleComparisonClick=e=>{this.setState({currentComparison:e})},this.handleTabClick=(e,t)=>{const{availableTabs:r,id:s,updateTab:a}=this.props;a(s,r[t]),this.setState({activeTabKey:t})}}componentDidMount(){const{availableTabs:e,fetchForecasts:t,fetchReports:r,id:s,trend:a,updateTab:o,widgetId:i}=this.props;e&&o(s,e[0]),r&&r(i),void 0!==a.computedForecastItem&&t(i)}render(){const{details:e}=this.props;return e.showHorizontal?this.getHorizontalLayout():this.getVerticalLayout()}}var V=r(74806),W=r(83127),L=r(42581);const _=e=>{switch(e){case"services":return"service";case"accounts":return"account";case"regions":return"region";case"instance_type":return"instance_type"}},j=(0,b.X1)(((e,{widgetId:t})=>{const r=y.Cv.selectWidget(e,t),s=y.Cv.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:_,currentQuery:s.current,forecastQuery:s.forecast,previousQuery:s.previous,tabsQuery:s.tabs,currentReport:L.ZV.selectReport(e,r.reportPathsType,r.reportType,s.current),currentReportFetchStatus:L.ZV.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.current),forecast:W.mj.selectForecast(e,r.forecastPathsType,r.forecastType,s.forecast),previousReport:L.ZV.selectReport(e,r.reportPathsType,r.reportType,s.previous),tabsReport:L.ZV.selectReport(e,r.reportPathsType,r.reportType,s.tabs),tabsReportFetchStatus:L.ZV.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.tabs)})})),M={fetchForecasts:y.Kf.v4,fetchReports:y.Kf.a4,updateTab:y.Kf.as},Q=(0,V.ZP)((0,v.connect)(j,M)(O)),k=(0,b.X1)(((e,t)=>({DashboardWidget:Q,selectWidgets:y.Cv.selectWidgets(e),widgets:y.Cv.selectCurrentWidgets(e)}))),z=(0,v.connect)(k,{})(m);var U=r(99317);const K=e=>{switch(e){case"services":return"service";case"accounts":return"account";case"regions":return"region";case"instance_type":return"instance_type"}},H=(0,b.X1)(((e,{widgetId:t})=>{const r=U.Hc.selectWidget(e,t),s=U.Hc.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:K,currentQuery:s.current,forecastQuery:s.forecast,previousQuery:s.previous,tabsQuery:s.tabs,currentReport:L.ZV.selectReport(e,r.reportPathsType,r.reportType,s.current),currentReportFetchStatus:L.ZV.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.current),forecast:W.mj.selectForecast(e,r.forecastPathsType,r.forecastType,s.forecast),previousReport:L.ZV.selectReport(e,r.reportPathsType,r.reportType,s.previous),tabsReport:L.ZV.selectReport(e,r.reportPathsType,r.reportType,s.tabs),tabsReportFetchStatus:L.ZV.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.tabs)})})),X={fetchForecasts:U.NA.v4,fetchReports:U.NA.a4,updateTab:U.NA.as},x=(0,V.ZP)((0,v.connect)(H,X)(O)),G=(0,b.X1)(((e,t)=>({DashboardWidget:x,selectWidgets:U.Hc.selectWidgets(e),widgets:U.Hc.selectCurrentWidgets(e)}))),B=(0,v.connect)(G,{})(m);var J=r(31554);const N=e=>{switch(e){case"service_names":return"service_name";case"subscription_guids":return"subscription_guid";case"resource_locations":return"resource_location";case"instance_type":return"instance_type"}},q=(0,b.X1)(((e,{widgetId:t})=>{const r=J.rj.selectWidget(e,t),s=J.rj.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:N,currentQuery:s.current,forecastQuery:s.forecast,previousQuery:s.previous,tabsQuery:s.tabs,currentReport:L.ZV.selectReport(e,r.reportPathsType,r.reportType,s.current),currentReportFetchStatus:L.ZV.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.current),forecast:W.mj.selectForecast(e,r.forecastPathsType,r.forecastType,s.forecast),previousReport:L.ZV.selectReport(e,r.reportPathsType,r.reportType,s.previous),tabsReport:L.ZV.selectReport(e,r.reportPathsType,r.reportType,s.tabs),tabsReportFetchStatus:L.ZV.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.tabs)})})),$={fetchForecasts:J.oc.v4,fetchReports:J.oc.a4,updateTab:J.oc.as},Y=(0,V.ZP)((0,v.connect)(q,$)(O)),ee=(0,b.X1)(((e,t)=>({DashboardWidget:Y,selectWidgets:J.rj.selectWidgets(e),widgets:J.rj.selectCurrentWidgets(e)}))),te=(0,v.connect)(ee,{})(m);var re=r(44986);const se=e=>{switch(e){case"service_names":return"service_name";case"subscription_guids":return"subscription_guid";case"resource_locations":return"resource_location";case"instance_type":return"instance_type"}},ae=(0,b.X1)(((e,{widgetId:t})=>{const r=re.MW.selectWidget(e,t),s=re.MW.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:se,currentQuery:s.current,forecastQuery:s.forecast,previousQuery:s.previous,tabsQuery:s.tabs,currentReport:L.ZV.selectReport(e,r.reportPathsType,r.reportType,s.current),currentReportFetchStatus:L.ZV.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.current),forecast:W.mj.selectForecast(e,r.forecastPathsType,r.forecastType,s.forecast),previousReport:L.ZV.selectReport(e,r.reportPathsType,r.reportType,s.previous),tabsReport:L.ZV.selectReport(e,r.reportPathsType,r.reportType,s.tabs),tabsReportFetchStatus:L.ZV.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.tabs)})})),oe={fetchForecasts:re._V.v4,fetchReports:re._V.a4,updateTab:re._V.as},ie=(0,V.ZP)((0,v.connect)(ae,oe)(O)),ce=(0,b.X1)(((e,t)=>({DashboardWidget:ie,selectWidgets:re.MW.selectWidgets(e),widgets:re.MW.selectCurrentWidgets(e)}))),ne=(0,v.connect)(ce,{})(m);var le=r(79522);const ue=e=>{switch(e){case"services":return"service";case"projects":return"project";case"regions":return"region";case"instance_type":return"instance_type"}},pe=(0,b.X1)(((e,{widgetId:t})=>{const r=le.oS.selectWidget(e,t),s=le.oS.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:ue,currentQuery:s.current,previousQuery:s.previous,tabsQuery:s.tabs,currentReport:L.ZV.selectReport(e,r.reportPathsType,r.reportType,s.current),currentReportFetchStatus:L.ZV.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.current),forecast:W.mj.selectForecast(e,r.forecastPathsType,r.forecastType,s.forecast),previousReport:L.ZV.selectReport(e,r.reportPathsType,r.reportType,s.previous),tabsReport:L.ZV.selectReport(e,r.reportPathsType,r.reportType,s.tabs),tabsReportFetchStatus:L.ZV.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.tabs)})})),he={fetchForecasts:le.n5.v4,fetchReports:le.n5.a4,updateTab:le.n5.as},de=(0,V.ZP)((0,v.connect)(pe,he)(O)),ge=(0,b.X1)(((e,t)=>({DashboardWidget:de,selectWidgets:le.oS.selectWidgets(e),widgets:le.oS.selectCurrentWidgets(e)}))),me=(0,v.connect)(ge,{})(m);var ve=r(85394);const be=e=>{switch(e){case"services":return"service";case"projects":return"project";case"regions":return"region";case"instance_type":return"instance_type"}},ye=(0,b.X1)(((e,{widgetId:t})=>{const r=ve.FF.selectWidget(e,t),s=ve.FF.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:be,currentQuery:s.current,previousQuery:s.previous,tabsQuery:s.tabs,currentReport:L.ZV.selectReport(e,r.reportPathsType,r.reportType,s.current),currentReportFetchStatus:L.ZV.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.current),forecast:W.mj.selectForecast(e,r.forecastPathsType,r.forecastType,s.forecast),previousReport:L.ZV.selectReport(e,r.reportPathsType,r.reportType,s.previous),tabsReport:L.ZV.selectReport(e,r.reportPathsType,r.reportType,s.tabs),tabsReportFetchStatus:L.ZV.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.tabs)})})),fe={fetchForecasts:ve.uM.v4,fetchReports:ve.uM.a4,updateTab:ve.uM.as},Te=(0,V.ZP)((0,v.connect)(ye,fe)(O)),Pe=(0,b.X1)(((e,t)=>({DashboardWidget:Te,selectWidgets:ve.FF.selectWidgets(e),widgets:ve.FF.selectCurrentWidgets(e)}))),Fe=(0,v.connect)(Pe,{})(m);var Re=r(75836);const Se=e=>{switch(e){case"services":return"service";case"projects":return"project";case"regions":return"region";case"instance_type":return"instance_type"}},Ce=(0,b.X1)(((e,{widgetId:t})=>{const r=Re.Pi.selectWidget(e,t),s=Re.Pi.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:Se,currentQuery:s.current,previousQuery:s.previous,tabsQuery:s.tabs,currentReport:L.ZV.selectReport(e,r.reportPathsType,r.reportType,s.current),currentReportFetchStatus:L.ZV.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.current),forecast:W.mj.selectForecast(e,r.forecastPathsType,r.forecastType,s.forecast),previousReport:L.ZV.selectReport(e,r.reportPathsType,r.reportType,s.previous),tabsReport:L.ZV.selectReport(e,r.reportPathsType,r.reportType,s.tabs),tabsReportFetchStatus:L.ZV.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.tabs)})})),De={fetchForecasts:Re.lj.v4,fetchReports:Re.lj.a4,updateTab:Re.lj.as},we=(0,V.ZP)((0,v.connect)(Ce,De)(O)),Ie=(0,b.X1)(((e,t)=>({DashboardWidget:we,selectWidgets:Re.Pi.selectWidgets(e),widgets:Re.Pi.selectCurrentWidgets(e)}))),Ze=(0,v.connect)(Ie,{})(m);var Ee=r(83123);const Ae=e=>{switch(e){case"accounts":return"account";case"regions":return"region";case"services":return"service"}},Oe=(0,b.X1)(((e,{widgetId:t})=>{const r=Ee.qN.selectWidget(e,t),s=Ee.qN.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:Ae,currentQuery:s.current,forecastQuery:s.forecast,previousQuery:s.previous,tabsQuery:s.tabs,currentReport:L.ZV.selectReport(e,r.reportPathsType,r.reportType,s.current),currentReportFetchStatus:L.ZV.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.current),forecast:W.mj.selectForecast(e,r.forecastPathsType,r.forecastType,s.forecast),previousReport:L.ZV.selectReport(e,r.reportPathsType,r.reportType,s.previous),tabsReport:L.ZV.selectReport(e,r.reportPathsType,r.reportType,s.tabs),tabsReportFetchStatus:L.ZV.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.tabs)})})),Ve={fetchForecasts:Ee.BV.v4,fetchReports:Ee.BV.a4,updateTab:Ee.BV.as},We=(0,V.ZP)((0,v.connect)(Oe,Ve)(O)),Le=(0,b.X1)(((e,t)=>({DashboardWidget:We,selectWidgets:Ee.qN.selectWidgets(e),widgets:Ee.qN.selectCurrentWidgets(e)}))),_e=(0,v.connect)(Le,{})(m);var je=r(17563);const Me=e=>{switch(e){case"clusters":return"cluster";case"nodes":return"node";case"projects":return"project"}},Qe=(0,b.X1)(((e,{widgetId:t})=>{const r=je.nH.selectWidget(e,t),s=je.nH.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:Me,chartAltHeight:250,containerAltHeight:250,currentQuery:s.current,forecastQuery:s.forecast,previousQuery:s.previous,tabsQuery:s.tabs,currentReport:L.ZV.selectReport(e,r.reportPathsType,r.reportType,s.current),currentReportFetchStatus:L.ZV.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.current),forecast:W.mj.selectForecast(e,r.forecastPathsType,r.forecastType,s.forecast),previousReport:L.ZV.selectReport(e,r.reportPathsType,r.reportType,s.previous),tabsReport:L.ZV.selectReport(e,r.reportPathsType,r.reportType,s.tabs),tabsReportFetchStatus:L.ZV.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.tabs)})})),ke={fetchForecasts:je.U6.v4,fetchReports:je.U6.a4,updateTab:je.U6.as},ze=(0,V.ZP)((0,v.connect)(Qe,ke)(O)),Ue=(0,b.X1)(((e,t)=>({DashboardWidget:ze,selectWidgets:je.nH.selectWidgets(e),widgets:je.nH.selectCurrentWidgets(e)}))),Ke=(0,v.connect)(Ue,{})(m);var He=r(94329),Xe=r(45235),xe=r(26018),Ge=r(1723),Be=r(33307),Je=r(45785),Ne=r(49382),qe=r(17918),$e=r(98499);const Ye={date:{alignSelf:"center",flexGrow:1,textAlign:"end"},header:{backgroundColor:Ne.ZP.var,padding:$e.ZP.var},headerContent:{display:"flex",justifyContent:"space-between"},infoIcon:{fontSize:qe.ZP.value},infoTitle:{fontWeight:"bold"},main:{padding:$e.ZP.value},tabs:{backgroundColor:Ne.ZP.var,paddingBottom:$e.ZP.var,paddingTop:$e.ZP.var}},et=e=>{switch(e){case"infrastructure":return"infrastructure";case"ocp":return"ocp"}},tt=[{label:n.Z.PerspectiveValues,value:"ocp"}],rt=[{label:n.Z.PerspectiveValues,value:"aws"}],st=[{label:n.Z.PerspectiveValues,value:"aws_ocp"}],at=[{label:n.Z.PerspectiveValues,value:"azure"}],ot=[{label:n.Z.PerspectiveValues,value:"azure_ocp"}],it=[{label:n.Z.PerspectiveValues,value:"gcp"}],ct=[{label:n.Z.PerspectiveValues,value:"ibm"}];class nt extends g().Component{constructor(){super(...arguments),this.defaultState={activeTabKey:0},this.state=Object.assign({},this.defaultState),this.getAvailableTabs=()=>{const e=[];return this.isOcpAvailable()&&e.push({contentRef:g().createRef(),tab:"ocp"}),(this.isAwsAvailable()||this.isAzureAvailable()||this.isGcpAvailable()||this.isIbmAvailable()||this.isOcpCloudAvailable())&&e.push({contentRef:g().createRef(),tab:"infrastructure"}),e},this.getCurrentTab=()=>{const{activeTabKey:e}=this.state,t=this.isAwsAvailable(),r=this.isAzureAvailable(),s=this.isGcpAvailable(),a=this.isIbmAvailable(),o=this.isOcpAvailable(),i=this.isOcpCloudAvailable();return o&&!(t||r||s||a||i)?"ocp":!o&&(t||r||s||a||i)?"infrastructure":0===e?"ocp":"infrastructure"},this.getDefaultInfrastructurePerspective=()=>this.isAwsAvailable()?"aws":this.isAzureAvailable()?"azure":this.isGcpAvailable()?"gcp":this.isIbmAvailable()?"ibm":void 0,this.getDefaultOcpPerspective=()=>{const{ocpProviders:e,ocpProvidersFetchStatus:t,userAccess:r}=this.props;if((0,Je.mn)(r,e,t))return"ocp"},this.getPerspective=()=>{const{currentInfrastructurePerspective:e,currentOcpPerspective:t}=this.state,r=this.isAwsAvailable(),s=this.isAzureAvailable(),a=this.isGcpAvailable(),o=this.isIbmAvailable(),i=this.isOcpAvailable();if(!(r||s||a||o||i))return null;const c=[];"infrastructure"===this.getCurrentTab()?(r&&c.push(...rt),r&&i&&c.push(...st),a&&c.push(...it),o&&c.push(...ct),s&&c.push(...at),s&&i&&c.push(...ot)):c.push(...tt);const n="infrastructure"===this.getCurrentTab()?e:t;return g().createElement(h.X,{currentItem:n||c[0].value,onItemClicked:this.handlePerspectiveClick,options:c})},this.getTab=(e,t,r)=>g().createElement(s.Tab,{eventKey:r,key:`${et(e)}-tab`,tabContentId:`tab-${r}`,tabContentRef:t,title:g().createElement(s.TabTitleText,null,this.getTabTitle(e))}),this.getTabContent=e=>e.map(((e,t)=>g().createElement(s.TabContent,{eventKey:t,key:`${et(e.tab)}-tabContent`,id:`tab-${t}`,ref:e.contentRef},this.getTabItem(e.tab,t)))),this.getTabItem=(e,t)=>{const{awsProviders:r,azureProviders:s,gcpProviders:a,ibmProviders:o,ocpProviders:i}=this.props,{activeTabKey:c,currentInfrastructurePerspective:n,currentOcpPerspective:l}=this.state,p=g().createElement(g().Fragment,null),h=g().createElement(u.Z,{showReload:!1});if(c!==t)return p;const d=et(e);if("infrastructure"===d)return"ocp_cloud"===n?(0,He.g8)(i)||(0,He.rL)(i)?g().createElement(_e,null):h:"aws"===n?(0,He.g8)(r)||(0,He.rL)(r)?g().createElement(z,null):h:"aws_ocp"===n?(0,He.at)(r,i)||(0,He.D2)(r,i)?g().createElement(B,null):h:"gcp"===n?(0,He.g8)(a)||(0,He.rL)(a)?g().createElement(me,null):h:"gcp_ocp"===n?(0,He.at)(a,i)||(0,He.D2)(a,i)?g().createElement(Fe,null):h:"ibm"===n?(0,He.g8)(o)||(0,He.rL)(o)?g().createElement(Ze,null):h:"azure"===n?(0,He.g8)(s)||(0,He.rL)(s)?g().createElement(te,null):h:"azure_ocp"===n&&((0,He.at)(s,i)||(0,He.D2)(s,i))?g().createElement(ne,null):h;if("ocp"===d){const e=(0,He.g8)(i)||(0,He.rL)(i);return"ocp"===l&&e?g().createElement(Ke,null):h}return p},this.getTabs=e=>{const{activeTabKey:t}=this.state;return g().createElement(s.Tabs,{activeKey:t,onSelect:this.handleTabClick},e.map(((e,t)=>this.getTab(e.tab,e.contentRef,t))))},this.getTabTitle=e=>{const{intl:t}=this.props;return"infrastructure"===e?t.formatMessage(n.Z.Infrastructure):"ocp"===e?t.formatMessage(n.Z.OpenShift):void 0},this.handlePerspectiveClick=e=>{const t=this.getCurrentTab();this.setState(Object.assign(Object.assign({},"infrastructure"===t&&{currentInfrastructurePerspective:e}),"ocp"===t&&{currentOcpPerspective:e}))},this.handleTabClick=(e,t)=>{const{activeTabKey:r}=this.state;r!==t&&this.setState({activeTabKey:t})},this.isAwsAvailable=()=>{const{awsProviders:e,awsProvidersFetchStatus:t,userAccess:r}=this.props;return(0,Je.n9)(r,e,t)},this.isAzureAvailable=()=>{const{azureProviders:e,azureProvidersFetchStatus:t,userAccess:r}=this.props;return(0,Je.hn)(r,e,t)},this.isGcpAvailable=()=>{const{gcpProviders:e,gcpProvidersFetchStatus:t,userAccess:r}=this.props;return(0,Je.FE)(r,e,t)},this.isIbmAvailable=()=>{const{ibmProviders:e,ibmProvidersFetchStatus:t,ibmUserAccess:r}=this.props;return(0,Je.Es)(r,e,t)},this.isOcpAvailable=()=>{const{ocpProviders:e,ocpProvidersFetchStatus:t,userAccess:r}=this.props;return(0,Je.mn)(r,e,t)},this.isOcpCloudAvailable=()=>this.isAwsAvailable()&&this.isOcpAvailable()}componentDidMount(){const{resetState:e}=this.props;e(),this.setState({currentInfrastructurePerspective:this.getDefaultInfrastructurePerspective(),currentOcpPerspective:this.getDefaultOcpPerspective()})}componentDidUpdate(e){const{awsProviders:t,azureProviders:r,gcpProviders:s,ibmProviders:a,ocpProviders:o,userAccess:i}=this.props;e.userAccess===i&&e.awsProviders===t&&e.azureProviders===r&&e.gcpProviders===s&&e.ibmProviders===a&&e.ocpProviders===o||this.setState({currentInfrastructurePerspective:this.getDefaultInfrastructurePerspective(),currentOcpPerspective:this.getDefaultOcpPerspective()})}render(){const{awsProvidersFetchStatus:e,azureProvidersFetchStatus:t,gcpProvidersFetchStatus:r,ibmProvidersFetchStatus:o,intl:i,ocpProvidersFetchStatus:u,userAccessFetchStatus:h}=this.props,d=this.getAvailableTabs(),m=1===e||1===t||1===r||1===o||1===u||1===h,v=!this.isAwsAvailable()&&2===e,b=!this.isAzureAvailable()&&2===t,y=!this.isGcpAvailable()&&2===r,f=!this.isIbmAvailable()&&2===o,T=!this.isOcpAvailable()&&2===u,P=v&&b&&y&&f&&T,F=i.formatMessage(n.Z.OverviewTitle);return P?g().createElement(p.Z,{title:F}):m?g().createElement(l.Z,{title:F}):g().createElement(g().Fragment,null,g().createElement("header",{style:Ye.header},g().createElement("div",{style:Ye.headerContent},g().createElement(s.Title,{headingLevel:"h1",size:s.TitleSizes["2xl"]},F,g().createElement("span",{style:Ye.infoIcon},g().createElement(s.Popover,{"aria-label":i.formatMessage(n.Z.OverviewInfoArialLabel),enableFlip:!0,bodyContent:g().createElement(g().Fragment,null,g().createElement("p",{style:Ye.infoTitle},i.formatMessage(n.Z.OpenShiftCloudInfrastructure)),g().createElement("p",null,i.formatMessage(n.Z.OpenShiftCloudInfrastructureDesc)),g().createElement("br",null),g().createElement("p",{style:Ye.infoTitle},i.formatMessage(n.Z.OpenShift)),g().createElement("p",null,i.formatMessage(n.Z.OpenShiftDesc)),g().createElement("br",null),g().createElement("p",{style:Ye.infoTitle},i.formatMessage(n.Z.GCP)),g().createElement("p",null,i.formatMessage(n.Z.GCPDesc)),g().createElement("br",null),g().createElement("p",{style:Ye.infoTitle},i.formatMessage(n.Z.IBM)),g().createElement("p",null,i.formatMessage(n.Z.IBMDesc)),g().createElement("br",null),g().createElement("p",{style:Ye.infoTitle},i.formatMessage(n.Z.AWS)),g().createElement("p",null,i.formatMessage(n.Z.AWSDesc)),g().createElement("br",null),g().createElement("p",{style:Ye.infoTitle},i.formatMessage(n.Z.Azure)),g().createElement("p",null,i.formatMessage(n.Z.AzureDesc)))},g().createElement(s.Button,{variant:s.ButtonVariant.plain},g().createElement(a.iC,null))))),g().createElement(c.F,null)),g().createElement("div",{style:Ye.tabs},this.getTabs(d)),g().createElement("div",{style:Ye.headerContent},this.getPerspective(),g().createElement("div",{style:Ye.date},(0,Be.J4)()))),g().createElement("div",{style:Ye.main},this.getTabContent(d)))}}const lt=(0,b.X1)(((e,t)=>{const r=(0,o.H)(Xe.JL),s=Xe.aX.selectProviders(e,"aws",r),a=Xe.aX.selectProvidersFetchStatus(e,"aws",r),c=(0,o.H)(Xe.u5),n=Xe.aX.selectProviders(e,"azure",c),l=Xe.aX.selectProvidersFetchStatus(e,"azure",c),u=(0,o.H)(Xe.U6),p=Xe.aX.selectProviders(e,"gcp",u),h=Xe.aX.selectProvidersFetchStatus(e,"gcp",u),d=(0,o.H)(Xe.t8),g=Xe.aX.selectProviders(e,"ibm",d),m=Xe.aX.selectProvidersFetchStatus(e,"ibm",d),v=(0,o.H)(Xe.Vp),b=Xe.aX.selectProviders(e,"ocp",v),y=Xe.aX.selectProvidersFetchStatus(e,"ocp",v),f=(0,i.T)(Ge.BD),T=Ge.JO.selectUserAccess(e,"",f),P=Ge.JO.selectUserAccessError(e,"",f),F=Ge.JO.selectUserAccessFetchStatus(e,"",f),R=(0,i.T)(Ge.HC);return{awsProviders:s,awsProvidersFetchStatus:a,awsProvidersQueryString:r,azureProviders:n,azureProvidersFetchStatus:l,azureProvidersQueryString:c,gcpProviders:p,gcpProvidersFetchStatus:h,gcpProvidersQueryString:u,ibmProviders:g,ibmProvidersFetchStatus:m,ibmProvidersQueryString:d,ibmUserAccess:Ge.JO.selectUserAccess(e,"ibm",R),ibmUserAccessError:Ge.JO.selectUserAccessError(e,"ibm",R),ibmUserAccessFetchStatus:Ge.JO.selectUserAccessFetchStatus(e,"ibm",R),ibmUserAccessQueryString:R,ocpProviders:b,ocpProvidersFetchStatus:y,ocpProvidersQueryString:v,userAccess:T,userAccessError:P,userAccessFetchStatus:F,userAccessQueryString:f}})),ut={resetState:xe.Aw.oA},pt=(0,V.ZP)((0,v.connect)(lt,ut)(nt))},45785:(e,t,r)=>{"use strict";r.d(t,{KT:()=>o,n9:()=>i,FW:()=>c,hn:()=>n,ot:()=>l,Sv:()=>u,FE:()=>p,tt:()=>h,Es:()=>d,Rt:()=>g,mn:()=>m});const s=(e,t)=>{let r=!1;if(e&&Array.isArray(e.data)){const s=e.data.find((e=>e.type===t));r=s&&s.access}else r=e&&!0===e.data;return r},a=(e,t)=>{let r=!1;return 2===t&&(r=void 0!==e&&void 0!==e.meta&&e.meta.count>0),r},o=e=>s(e,"aws"),i=(e,t,r)=>o(e)&&a(t,r),c=e=>s(e,"azure"),n=(e,t,r)=>c(e)&&a(t,r),l=e=>s(e,"cost_model"),u=e=>s(e,"gcp"),p=(e,t,r)=>s(e,"gcp")&&a(t,r),h=e=>u(e),d=(e,t,r)=>h(e)&&a(t,r),g=e=>s(e,"ocp"),m=(e,t,r)=>g(e)&&a(t,r)},25800:(e,t,r)=>{"use strict";r.d(t,{dM:()=>o,Bw:()=>i,xG:()=>c,$l:()=>n});var s=r(32004),a=r(93952);const o=e=>{const t=e?e.replace(/[- ]/g,"_").toLowerCase():"";switch(t){case"core_hours":case"gb":case"gb_hours":case"gb_mo":case"gibibyte_month":case"hour":case"hrs":case"tag_mo":case"vm_hours":return t;default:return}},i=(e,t,r={})=>{const s=e||0;switch(o(t)){case"core_hours":case"hour":case"hrs":return u(s,r);case"gb":case"gb_hours":case"gb_mo":case"gibibyte_month":case"tag_mo":case"vm_hours":return l(s,r)}return p(s)},c=(e,t,{fractionDigits:r}={})=>{let a=e;e||(a=0);const o={minimumFractionDigits:r,maximumFractionDigits:r};return s.N.formatNumber(a,Object.assign({style:"currency",currency:t?t.toUpperCase():"USD"},void 0!==r&&o))},n=(e,t="USD")=>{let r=e;e||(r=0);const o=[{val:1e15,symbol:"quadrillion"},{val:1e12,symbol:"trillion"},{val:1e9,symbol:"billion"},{val:1e6,symbol:"million"},{val:1e3,symbol:"thousand"}];let i;if(null!=o&&(i=o.find((e=>r>=e.val))),null!=i){const{val:e,symbol:o}=i;return s.N.formatMessage(a.Z.CurrencyAbbreviations,{symbol:o,value:c(r/e,t,{fractionDigits:0})})}return c(e,t,{fractionDigits:0})},l=(e,{fractionDigits:t=0}={})=>e.toLocaleString((0,s.K)(),{minimumFractionDigits:t,maximumFractionDigits:t}),u=(e,{fractionDigits:t=0}={})=>e.toLocaleString((0,s.K)(),{minimumFractionDigits:t,maximumFractionDigits:t}),p=(e,{fractionDigits:t=0}={})=>e.toLocaleString((0,s.K)(),{minimumFractionDigits:t,maximumFractionDigits:t})}}]);
//# sourceMappingURL=cffa28760f6e218281ab.bundle.js.map