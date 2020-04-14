(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{951:function(e,t,r){"use strict";r.r(t);var s=r(1007),a=r(937),c=r(766),o=r(1036),i=r(921),n=r(906),p=r(983),l=r(136),u=r(580),h=r(582),b=r(613),d=r(1e3),g=r(999),v=r(1),y=r.n(v);const m=({DashboardWidget:e,selectWidgets:t,widgets:r})=>y.a.createElement("div",null,y.a.createElement(d.a,{gutter:"md"},r.map(r=>{const s=t[r];return Boolean(s.details.showHorizontal)?y.a.createElement(g.a,{sm:12,key:r},y.a.createElement(e,{widgetId:r})):y.a.createElement(g.a,{lg:12,xl:6,xl2:4,key:r},y.a.createElement(e,{widgetId:r}))})));var T=r(165),f=r(121),R=r(135),O=r(178),w=r(109),j=r(570),P=r(592),_=r(594),E=r.n(_),S=r(572),C=r.n(S),F=r(638),W=r.n(F),I=r(608),D=r.n(I),k=r(0),A=r.n(k),K=r(65),Q=r.n(K),L=r(207),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e};function H(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var U=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},x=function(e){function t(){var r,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,c=Array(a),o=0;o<a;o++)c[o]=arguments[o];return r=s=H(this,e.call.apply(e,[this].concat(c))),s.handleClick=function(e){if(s.props.onClick&&s.props.onClick(e),!e.defaultPrevented&&0===e.button&&!s.props.target&&!U(e)){e.preventDefault();var t=s.context.router.history,r=s.props,a=r.replace,c=r.to;a?t.replace(c):t.push(c)}},H(s,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),r=e.innerRef,s=function(e,t){var r={};for(var s in e)t.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(e,s)&&(r[s]=e[s]);return r}(e,["replace","to","innerRef"]);Q()(this.context.router,"You should not use <Link> outside a <Router>"),Q()(void 0!==t,'You must specify the "to" property');var a=this.context.router.history,c="string"==typeof t?Object(L.b)(t,null,null,a.location):t,o=a.createHref(c);return y.a.createElement("a",z({},s,{onClick:this.handleClick,href:o,ref:r}))},t}(y.a.Component);x.propTypes={onClick:A.a.func,target:A.a.string,replace:A.a.bool,to:A.a.oneOfType([A.a.string,A.a.object]).isRequired,innerRef:A.a.oneOfType([A.a.string,A.a.func])},x.defaultProps={replace:!1},x.contextTypes={router:A.a.shape({history:A.a.shape({push:A.a.func.isRequired,replace:A.a.func.isRequired,createHref:A.a.func.isRequired}).isRequired}).isRequired};var V=x,$=r(567),q=r(134);const B={chartAltHeight:180,chartHeight:80,containerAltHeight:200,containerTrendHeight:150,containerUsageHeight:180},N={tabs:{marginTop:q.global_spacer_2xl.value},tabItems:{marginTop:q.global_spacer_xl.value}};class J extends y.a.Component{constructor(){super(...arguments),this.state={activeTabKey:0},this.buildDetailsLink=(e=>{const{details:t,getIdKeyForTab:r}=this.props,s=r(e);return`${t.viewAllPath}?${Object(w.a)({group_by:{[s]:"*"},order_by:{cost:"desc"}})}`}),this.getChart=((e,t,r=!1)=>{const{chartType:s}=this.props;return"cost"===s?this.getCostChart(e,t,r):"supplementary"===s?this.getTrendChart(e,t,r,!0):"trend"===s?this.getTrendChart(e,t,r):"usage"===s?this.getUsageChart(t):null}),this.getCostChart=((e,t,r=!1)=>{const{currentReport:s,previousReport:a,t:c,trend:o}=this.props,i=this.getUnits(),n=c(o.titleKey,{units:c(`units.${i}`)}),p=o.computedReportItem||"cost",l=o.computedReportItemValue||"total",u=Object(j.g)(s,o.type,"date","infrastructure",l),h=Object(j.g)(a,o.type,"date","infrastructure",l),b=Object(j.g)(s,o.type,"date",p,l),d=Object(j.g)(a,o.type,"date",p,l);return y.a.createElement(P.c,{adjustContainerHeight:r,containerHeight:e,currentCostData:b,currentInfrastructureCostData:u,formatDatumValue:$.b,formatDatumOptions:o.formatOptions,height:t,previousCostData:d,previousInfrastructureCostData:h,title:n})}),this.getTrendChart=((e,t,r=!1,s=!1)=>{const{currentReport:a,details:c,previousReport:o,t:i,trend:n}=this.props,p=this.getUnits(),l=i(n.titleKey,{units:i(`units.${p}`)}),u=n.computedReportItem||"cost",h=n.computedReportItemValue||"total",b=Object(j.g)(a,n.type,"date",u,h),d=Object(j.g)(o,n.type,"date",u,h);return y.a.createElement(P.g,{adjustContainerHeight:r,containerHeight:e,currentData:b,formatDatumValue:$.b,formatDatumOptions:n.formatOptions,height:t,previousData:d,showSupplementaryLabel:s,showUsageLegendLabel:c.showUsageLegendLabel,title:l,units:p})}),this.getUsageChart=(e=>{const{currentReport:t,previousReport:r,t:s,trend:a}=this.props,c=this.getUnits(),o=s(a.titleKey,{units:s(`units.${c}`)}),i=Object(j.g)(t,a.type,"date","request"),n=Object(j.g)(r,a.type,"date","request"),p=Object(j.g)(t,a.type,"date","usage"),l=Object(j.g)(r,a.type,"date","usage");return y.a.createElement(P.h,{containerHeight:B.containerUsageHeight,currentRequestData:i,currentUsageData:p,formatDatumValue:$.b,formatDatumOptions:a.formatOptions,height:e,previousRequestData:n,previousUsageData:l,title:o})}),this.getDetails=(()=>{const{chartType:e,currentReport:t,details:r,trend:s}=this.props,a=s.computedReportItem||"cost",c=s.computedReportItemValue||"total",o=this.getUnits();return y.a.createElement(P.d,{chartType:e,computedReportItem:a,computedReportItemValue:c,costLabel:this.getDetailsLabel(r.costKey,o),formatOptions:r.formatOptions,formatValue:$.b,report:t,requestLabel:this.getDetailsLabel(r.requestKey,o),showTooltip:r.showTooltip,showUnits:r.showUnits,showUsageFirst:r.showUsageFirst,units:r.units,usageFormatOptions:r.usageFormatOptions,usageLabel:this.getDetailsLabel(r.usageKey,o)})}),this.getDetailsLabel=((e,t)=>{const{t:r}=this.props;return e?r(e,{units:r(`units.${t}`)}):void 0}),this.getDetailsLink=(()=>{const{currentTab:e,details:t}=this.props;return t.viewAllPath?y.a.createElement(V,{to:this.buildDetailsLink(e),onClick:this.handleInsightsNavClick},this.getDetailsLinkTitle(e)):null}),this.getDetailsLinkTitle=(e=>{const{getIdKeyForTab:t,t:r}=this.props;return r("group_by.all",{groupBy:t(e)||""})}),this.getHorizontalLayout=(()=>{const{containerAltHeight:e=B.containerAltHeight,chartAltHeight:t=B.chartAltHeight,currentReportFetchStatus:r}=this.props;return y.a.createElement(P.b,{detailsLink:this.getDetailsLink(),status:r,subTitle:this.getSubTitle(),tabs:this.getTabs(),title:this.getTitle()},this.getDetails(),this.getChart(e,t,!0))}),this.getSubTitle=(()=>{const{t:e}=this.props,t=new Date,r=W()(t),s=E()(t,"D"),a=E()(D()(t),"D");return e("aws_dashboard.widget_subtitle",{count:C()(t),endDate:s,month:r,startDate:a})}),this.getTab=((e,t)=>{const{getIdKeyForTab:r,tabsReport:a,tabsReportFetchStatus:c,trend:o}=this.props,i=r(e),n=o.computedReportItemValue||"total";return y.a.createElement(s.a,{eventKey:t,key:`${r(e)}-tab`,title:this.getTabTitle(e)},y.a.createElement("div",{style:N.tabItems},y.a.createElement(P.f,{computedReportItemValue:n,idKey:i,key:`${i}-items`,report:a,status:c},({items:t})=>t.map(t=>this.getTabItem(e,t)))))}),this.getTabItem=((e,t)=>{const{availableTabs:r,details:s,getIdKeyForTab:a,tabsReport:c,topItems:o,trend:i}=this.props,{activeTabKey:n}=this.state,p=a(e),l=a(r[n]),u=i.computedReportItem||"cost",h=i.computedReportItemValue||"total";let b;const d=c&&c.meta&&c.meta.total;return"usage"===u?d&&c.meta.total.usage&&(b=c.meta.total.usage.value):d&&c.meta.total[u]&&c.meta.total[u][h]&&(b=c.meta.total[u][h].value),l===p?y.a.createElement(P.e,{key:`${t.id}-item`,formatOptions:o.formatOptions,formatValue:$.b,label:t.label?t.label.toString():"",totalValue:b,units:s.units?s.units:this.getUnits(),value:t[u]}):null}),this.getTabs=(()=>{const{availableTabs:e}=this.props;return y.a.createElement(i.a,{isFilled:!0,activeKey:this.state.activeTabKey,onSelect:this.handleTabClick},e.map((e,t)=>this.getTab(e,t)))}),this.getTabTitle=(e=>{const{getIdKeyForTab:t,t:r}=this.props;return r("group_by.top",{groupBy:t(e)||""})}),this.getTitle=(()=>{const{t:e,titleKey:t}=this.props,r=new Date,s=W()(r);return e(t,{endDate:E()(r,"Do"),month:s,startDate:E()(D()(r),"Do")})}),this.getUnits=(()=>{const{currentReport:e,details:t,trend:r}=this.props,s=r.computedReportItem||"cost",a=r.computedReportItemValue||"total";if(t.units)return t.units;let c;const o=e&&e.meta&&e.meta.total;if("usage"===s){c=o&&e.meta.total.usage?Object($.c)(e.meta.total.usage.units):""}else{c=o&&e.meta.total[s]&&e.meta.total[s][a]?Object($.c)(e.meta.total[s][a].units):""}return c}),this.getVerticalLayout=(()=>{const{availableTabs:e,currentReportFetchStatus:t}=this.props;return y.a.createElement(P.a,{detailsLink:this.getDetailsLink(),status:t,subTitle:this.getSubTitle(),title:this.getTitle()},this.getDetails(),this.getChart(B.containerTrendHeight,B.chartHeight),Boolean(e)&&y.a.createElement("div",{style:N.tabs},this.getTabs()))}),this.handleInsightsNavClick=(()=>{const{details:e}=this.props;e.appNavId&&insights.chrome.appNavClick({id:e.appNavId,secondaryNav:!0})}),this.handleTabClick=((e,t)=>{const{availableTabs:r,id:s,updateTab:a}=this.props;a(s,r[t]),this.setState({activeTabKey:t})})}componentDidMount(){const{availableTabs:e,fetchReports:t,id:r,updateTab:s,widgetId:a}=this.props;e&&s(r,e[0]),t(a)}render(){const{details:e}=this.props;return e.showHorizontal?this.getHorizontalLayout():this.getVerticalLayout()}}var Y=r(10);const M=e=>{switch(e){case"services":return"service";case"accounts":return"account";case"regions":return"region";case"instance_type":return"instance_type"}},G=Object(R.a)((e,{widgetId:t})=>{const r=O.c.selectWidget(e,t),s=O.c.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:M,currentQuery:s.current,previousQuery:s.previous,tabsQuery:s.tabs,currentReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.current),previousReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.previous),tabsReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.tabs)})}),X={fetchReports:O.a.fetchWidgetReports,updateTab:O.a.changeWidgetTab},Z=Object(T.d)()(Object(f.connect)(G,X)(J)),ee=Object(R.a)(e=>({DashboardWidget:Z,selectWidgets:O.c.selectWidgets(e),widgets:O.c.selectCurrentWidgets(e)}));var te=Object(T.d)()(Object(f.connect)(ee,{})(m)),re=r(173);const se=e=>{switch(e){case"services":return"service";case"accounts":return"account";case"regions":return"region";case"instance_type":return"instance_type"}},ae=Object(R.a)((e,{widgetId:t})=>{const r=re.c.selectWidget(e,t),s=re.c.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:se,currentQuery:s.current,previousQuery:s.previous,tabsQuery:s.tabs,currentReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.current),previousReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.previous),tabsReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.tabs)})}),ce={fetchReports:re.a.fetchWidgetReports,updateTab:re.a.changeWidgetTab},oe=Object(T.d)()(Object(f.connect)(ae,ce)(J)),ie=Object(R.a)(e=>({DashboardWidget:oe,selectWidgets:re.c.selectWidgets(e),widgets:re.c.selectCurrentWidgets(e)}));var ne=Object(T.d)()(Object(f.connect)(ie,{})(m)),pe=r(172);const le=e=>{switch(e){case"service_names":return"service_name";case"subscription_guids":return"subscription_guid";case"resource_locations":return"resource_location";case"instance_type":return"instance_type"}},ue=Object(R.a)((e,{widgetId:t})=>{const r=pe.c.selectWidget(e,t),s=pe.c.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:le,currentQuery:s.current,previousQuery:s.previous,tabsQuery:s.tabs,currentReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.current),previousReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.previous),tabsReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.tabs)})}),he={fetchReports:pe.a.fetchWidgetReports,updateTab:pe.a.changeWidgetTab},be=Object(T.d)()(Object(f.connect)(ue,he)(J)),de=Object(R.a)(e=>({DashboardWidget:be,selectWidgets:pe.c.selectWidgets(e),widgets:pe.c.selectCurrentWidgets(e)}));var ge=Object(T.d)()(Object(f.connect)(de,{})(m)),ve=r(175);const ye=e=>{switch(e){case"service_names":return"service_name";case"subscription_guids":return"subscription_guid";case"resource_locations":return"resource_location";case"instance_type":return"instance_type"}},me=Object(R.a)((e,{widgetId:t})=>{const r=ve.c.selectWidget(e,t),s=ve.c.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:ye,currentQuery:s.current,previousQuery:s.previous,tabsQuery:s.tabs,currentReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.current),previousReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.previous),tabsReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.tabs)})}),Te={fetchReports:ve.a.fetchWidgetReports,updateTab:ve.a.changeWidgetTab},fe=Object(T.d)()(Object(f.connect)(me,Te)(J)),Re=Object(R.a)(e=>({DashboardWidget:fe,selectWidgets:ve.c.selectWidgets(e),widgets:ve.c.selectCurrentWidgets(e)}));var Oe=Object(T.d)()(Object(f.connect)(Re,{})(m)),we=r(125);const je=e=>{switch(e){case"accounts":return"account";case"regions":return"region";case"services":return"service"}},Pe=Object(R.a)((e,{widgetId:t})=>{const r=we.c.selectWidget(e,t),s=we.c.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:je,currentQuery:s.current,previousQuery:s.previous,tabsQuery:s.tabs,currentReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.current),previousReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.previous),tabsReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.tabs)})}),_e={fetchReports:we.a.fetchWidgetReports,updateTab:we.a.changeWidgetTab},Ee=Object(T.d)()(Object(f.connect)(Pe,_e)(J)),Se=Object(R.a)(e=>({DashboardWidget:Ee,selectWidgets:we.c.selectWidgets(e),widgets:we.c.selectCurrentWidgets(e)}));var Ce=Object(T.d)()(Object(f.connect)(Se,{})(m)),Fe=r(177);const We=180,Ie=275,De=e=>{switch(e){case"clusters":return"cluster";case"nodes":return"node";case"projects":return"project"}},ke=Object(R.a)((e,{widgetId:t})=>{const r=Fe.c.selectWidget(e,t),s=Fe.c.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:De,chartAltHeight:We,containerAltHeight:Ie,currentQuery:s.current,previousQuery:s.previous,tabsQuery:s.tabs,currentReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.current),previousReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.previous),tabsReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.tabs)})}),Ae={fetchReports:Fe.a.fetchWidgetReports,updateTab:Fe.a.changeWidgetTab},Ke=Object(T.d)()(Object(f.connect)(ke,Ae)(J)),Qe=Object(R.a)(e=>({DashboardWidget:Ke,selectWidgets:Fe.c.selectWidgets(e),widgets:Fe.c.selectCurrentWidgets(e)}));var Le=Object(T.d)()(Object(f.connect)(Qe,{})(m)),ze=r(176);const He=e=>{switch(e){case"clusters":return"cluster";case"nodes":return"node";case"projects":return"project"}},Ue=Object(R.a)((e,{widgetId:t})=>{const r=ze.c.selectWidget(e,t),s=ze.c.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:He,currentQuery:s.current,previousQuery:s.previous,tabsQuery:s.tabs,currentReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.current),previousReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.previous),tabsReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.tabs)})}),xe={fetchReports:ze.a.fetchWidgetReports,updateTab:ze.a.changeWidgetTab},Ve=Object(T.d)()(Object(f.connect)(Ue,xe)(J)),$e=Object(R.a)(e=>({DashboardWidget:Ve,selectWidgets:ze.c.selectWidgets(e),widgets:ze.c.selectCurrentWidgets(e)}));var qe=Object(T.d)()(Object(f.connect)($e,{})(m)),Be=r(174);const Ne=e=>{switch(e){case"clusters":return"cluster";case"nodes":return"node";case"projects":return"project"}},Je=Object(R.a)((e,{widgetId:t})=>{const r=Be.c.selectWidget(e,t),s=Be.c.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:Ne,currentQuery:s.current,previousQuery:s.previous,tabsQuery:s.tabs,currentReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.current),previousReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.previous),tabsReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.tabs)})}),Ye={fetchReports:Be.a.fetchWidgetReports,updateTab:Be.a.changeWidgetTab},Me=Object(T.d)()(Object(f.connect)(Je,Ye)(J)),Ge=Object(R.a)(e=>({DashboardWidget:Me,selectWidgets:Be.c.selectWidgets(e),widgets:Be.c.selectCurrentWidgets(e)}));var Xe=Object(T.d)()(Object(f.connect)(Ge,{})(m)),Ze=r(25),et=r(569);const tt={info:{marginLeft:q.global_spacer_sm.value,verticalAlign:"middle"},infoIcon:{fontSize:q.global_FontSize_md.value},infoTitle:{fontWeight:"bold"},perspective:{marginBottom:q.global_spacer_lg.value,marginTop:q.global_spacer_lg.value},tabs:{marginTop:q.global_spacer_lg.value}},rt=et["a"]`
  &.pf-c-page__main-section {
    --pf-c-page__main-section--PaddingBottom: 0;
  }
`;var st=r(1034),at=r(1032),ct=r(916);const ot={perspectiveSelector:{display:"flex",alignItems:"center"},perspectiveLabel:{marginBottom:0,marginRight:q.global_spacer_md.var}};const it=Object(T.d)()(class extends y.a.Component{constructor(){super(...arguments),this.defaultState={isPerspectiveOpen:!1},this.state=Object.assign({},this.defaultState),this.getDropDownItems=(()=>{const{options:e,t:t}=this.props;return e.map(e=>y.a.createElement(ct.a,{component:"button",key:e.value,onClick:()=>this.handleClick(e.value)},t(e.label)))}),this.getCurrentLabel=(()=>{const{currentItem:e,options:t,t:r}=this.props;let s="";for(const a of t)if(e===a.value){s=r(a.label);break}return s}),this.handleClick=(e=>{const{onItemClicked:t}=this.props;t&&t(e)}),this.handleSelect=(e=>{this.setState({isPerspectiveOpen:!this.state.isPerspectiveOpen})}),this.handleToggle=(e=>{this.setState({isPerspectiveOpen:e})})}render(){const{t:e}=this.props,{isPerspectiveOpen:t}=this.state,r=this.getDropDownItems();return y.a.createElement("div",{style:ot.perspectiveSelector},y.a.createElement("label",{style:ot.perspectiveLabel},e("overview.perspective.label")),y.a.createElement(st.a,{onSelect:this.handleSelect,toggle:y.a.createElement(at.a,{onToggle:this.handleToggle},this.getCurrentLabel()),isOpen:t,dropdownItems:r}))}}),nt=e=>{switch(e){case"infrastructure":return"infrastructure";case"ocp":return"ocp"}},pt=[{label:"overview.perspective.all",value:"all"},{label:"overview.perspective.supplementary",value:"supplementary"}],lt=[{label:"overview.perspective.all_cloud",value:"all_cloud"}],ut=[{label:"overview.perspective.aws",value:"aws"},{label:"overview.perspective.aws_cloud",value:"aws_cloud"}],ht=[{label:"overview.perspective.azure",value:"azure"},{label:"overview.perspective.azure_cloud",value:"azure_cloud"}],bt=[{label:"overview.perspective.ocp_usage",value:"ocp_usage"}];const dt=Object(R.a)(e=>{const t=Object(l.a)(Ze.a),r=Ze.f.selectProviders(e,"aws",t),s=Ze.f.selectProvidersError(e,"aws",t),a=Ze.f.selectProvidersFetchStatus(e,"aws",t),c=Object(l.a)(Ze.b),o=Ze.f.selectProviders(e,"azure",c),i=Ze.f.selectProvidersError(e,"azure",c),n=Ze.f.selectProvidersFetchStatus(e,"azure",c),p=Object(l.a)(Ze.c);return{awsProviders:r,awsProvidersError:s,awsProvidersFetchStatus:a,awsProvidersQueryString:t,azureProviders:o,azureProvidersError:i,azureProvidersFetchStatus:n,azureProvidersQueryString:c,ocpProviders:Ze.f.selectProviders(e,"ocp",p),ocpProvidersError:Ze.f.selectProvidersError(e,"ocp",p),ocpProvidersFetchStatus:Ze.f.selectProvidersFetchStatus(e,"ocp",p),ocpProvidersQueryString:p}});var gt=Object(T.d)()(Object(f.connect)(dt)(class extends y.a.Component{constructor(){super(...arguments),this.defaultState={activeTabKey:0,currentInfrastructurePerspective:lt[0].value,currentOcpPerspective:pt[0].value,showPopover:!1},this.state=Object.assign({},this.defaultState),this.getAvailableTabs=(()=>{const e=[],t=this.isAwsAvailable(),r=this.isAzureAvailable(),s=this.isOcpAvailable(),a=this.isOcpCloudAvailable();return s&&e.push({contentRef:y.a.createRef(),tab:"ocp"}),(t||r||a)&&e.push({contentRef:y.a.createRef(),tab:"infrastructure"}),e}),this.getCurrentTab=(()=>{const{activeTabKey:e}=this.state,t=this.isAwsAvailable(),r=this.isAzureAvailable(),s=this.isOcpAvailable(),a=this.isOcpCloudAvailable();return s&&!(t||r||a)?"ocp":!s&&(t||r||a)?"infrastructure":0===e?"ocp":"infrastructure"}),this.getPerspective=(()=>{const{currentInfrastructurePerspective:e,currentOcpPerspective:t}=this.state,r=this.isAwsAvailable(),s=this.isAzureAvailable(),a=this.isOcpAvailable();if(!(a||r||s))return null;let c=t,o=[...pt];return"infrastructure"===this.getCurrentTab()&&(c=e,o=[...lt],r&&o.push(...ut),s&&o.push(...ht),a&&o.push(...bt)),y.a.createElement(it,{currentItem:c,onItemClicked:this.handlePerspectiveClick,options:o})}),this.getTab=((e,t,r)=>y.a.createElement(s.a,{eventKey:r,key:`${nt(e)}-tab`,tabContentId:`tab-${r}`,tabContentRef:t,title:this.getTabTitle(e)})),this.getTabContent=(e=>e.map((e,t)=>y.a.createElement(n.a,{eventKey:t,key:`${nt(e.tab)}-tabContent`,id:`tab-${t}`,ref:e.contentRef},this.getTabItem(e.tab,t)))),this.getTabItem=((e,t)=>{const{activeTabKey:r,currentInfrastructurePerspective:s,currentOcpPerspective:a}=this.state,c=y.a.createElement(y.a.Fragment,null);if(r!==t)return c;const o=nt(e);return"infrastructure"===o?"all_cloud"===s?y.a.createElement(Ce,null):"aws"===s?y.a.createElement(ne,null):"aws_cloud"===s?y.a.createElement(te,null):"azure"===s?y.a.createElement(Oe,null):"azure_cloud"===s?y.a.createElement(ge,null):"ocp_usage"===s?y.a.createElement(Xe,null):y.a.createElement(Ce,null):"ocp"===o?"all"===a?y.a.createElement(Le,null):"supplementary"===a?y.a.createElement(qe,null):y.a.createElement(Le,null):c}),this.getTabs=(e=>{const{activeTabKey:t}=this.state;return y.a.createElement(i.a,{activeKey:t,onSelect:this.handleTabClick},e.map((e,t)=>this.getTab(e.tab,e.contentRef,t)))}),this.getTabTitle=(e=>{const{t:t}=this.props;return"infrastructure"===e?t("overview.infrastructure"):"ocp"===e?t("overview.ocp"):void 0}),this.handlePerspectiveClick=(e=>{const t=this.getCurrentTab();this.setState(Object.assign(Object.assign({},"infrastructure"===t&&{currentInfrastructurePerspective:e}),"ocp"===t&&{currentOcpPerspective:e}))}),this.handlePopoverClick=(()=>{this.setState({show:!this.state.showPopover})}),this.handleTabClick=((e,t)=>{const{activeTabKey:r}=this.state;r!==t&&this.setState({activeTabKey:t})}),this.isAwsAvailable=(()=>{const{awsProviders:e}=this.props;return void 0!==e&&void 0!==e.meta&&e.meta.count>0}),this.isAzureAvailable=(()=>{const{azureProviders:e}=this.props;return void 0!==e&&void 0!==e.meta&&e.meta.count>0}),this.isOcpAvailable=(()=>{const{ocpProviders:e}=this.props;return void 0!==e&&void 0!==e.meta&&e.meta.count>0}),this.isOcpCloudAvailable=(()=>this.isAwsAvailable()&&this.isOcpAvailable())}render(){const{awsProvidersError:e,awsProvidersFetchStatus:t,azureProvidersError:r,azureProvidersFetchStatus:s,ocpProvidersError:i,ocpProvidersFetchStatus:n,t:l}=this.props,d=this.getAvailableTabs(),g=e||r||i,v=1===t||1===s||1===n,m=!this.isAwsAvailable()&&2===t,T=!this.isAzureAvailable()&&2===s,f=!this.isOcpAvailable()&&2===n,R=m&&T&&f,O=!(g||R||v);return y.a.createElement(y.a.Fragment,null,y.a.createElement("section",{className:`pf-l-page-header pf-c-page-header pf-l-page__main-section pf-c-page__main-section pf-m-light ${O?rt:""}`},y.a.createElement("header",{className:"pf-u-display-flex pf-u-justify-content-space-between pf-u-align-items-center"},y.a.createElement(o.a,{size:c.a["2xl"]},l("overview.title"),Boolean(O)&&y.a.createElement("span",{style:tt.infoIcon},y.a.createElement(a.a,{"aria-label":"t('ocp_details.supplementary_aria_label')",enableFlip:!0,bodyContent:y.a.createElement(y.a.Fragment,null,y.a.createElement("p",{style:tt.infoTitle},l("overview.ocp_cloud")),y.a.createElement("p",null,l("overview.ocp_cloud_desc")),y.a.createElement("br",null),y.a.createElement("p",{style:tt.infoTitle},l("overview.ocp")),y.a.createElement("p",null,l("overview.ocp_desc")),y.a.createElement("br",null),y.a.createElement("p",{style:tt.infoTitle},l("overview.aws")),y.a.createElement("p",null,l("overview.aws_desc")),y.a.createElement("br",null),y.a.createElement("p",{style:tt.infoTitle},l("overview.azure")),y.a.createElement("p",null,l("overview.azure_desc")))},y.a.createElement(p.a,{style:tt.info,onClick:this.handlePopoverClick}))))),Boolean(O)&&y.a.createElement(y.a.Fragment,null,y.a.createElement("div",{style:tt.tabs},this.getTabs(d)),y.a.createElement("div",{style:tt.perspective},this.getPerspective()))),y.a.createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section","page-type":"cost-management-overview"},Boolean(g)?y.a.createElement(u.a,{error:g}):Boolean(R)?y.a.createElement(b.a,null):Boolean(v)?y.a.createElement(h.a,null):this.getTabContent(d)))}}));t.default=gt}}]);
//# sourceMappingURL=96430d1cc6e3fa770a9a.bundle.js.map