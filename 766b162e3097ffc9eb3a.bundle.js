(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{954:function(e,t,r){"use strict";r.r(t);var a=r(1010),s=r(940),c=r(765),o=r(1039),n=r(922),i=r(905),l=r(986),p=r(137),u=r(579),d=r(582),h=r(612),b=r(1003),g=r(1002),v=r(1),m=r.n(v);const y=({DashboardWidget:e,selectWidgets:t,widgets:r})=>m.a.createElement("div",null,m.a.createElement(b.a,{gutter:"md"},r.map(r=>{const a=t[r];return Boolean(a.details.showHorizontal)?m.a.createElement(g.a,{sm:12,key:r},m.a.createElement(e,{widgetId:r})):m.a.createElement(g.a,{lg:12,xl:6,xl2:4,key:r},m.a.createElement(e,{widgetId:r}))})));var f=r(167),T=r(123),R=r(136),O=r(181),w=r(109),j=r(569),_=r(591),E=r(593),S=r.n(E),C=r(571),F=r.n(C),W=r(637),P=r.n(W),I=r(607),D=r.n(I),k=r(0),K=r.n(k),Q=r(34),L=r.n(Q),z=r(114),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};function U(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var x=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},A=function(e){function t(){var r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,c=Array(s),o=0;o<s;o++)c[o]=arguments[o];return r=a=U(this,e.call.apply(e,[this].concat(c))),a.handleClick=function(e){if(a.props.onClick&&a.props.onClick(e),!e.defaultPrevented&&0===e.button&&!a.props.target&&!x(e)){e.preventDefault();var t=a.context.router.history,r=a.props,s=r.replace,c=r.to;s?t.replace(c):t.push(c)}},U(a,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),r=e.innerRef,a=function(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}(e,["replace","to","innerRef"]);L()(this.context.router,"You should not use <Link> outside a <Router>"),L()(void 0!==t,'You must specify the "to" property');var s=this.context.router.history,c="string"==typeof t?Object(z.b)(t,null,null,s.location):t,o=s.createHref(c);return m.a.createElement("a",H({},a,{onClick:this.handleClick,href:o,ref:r}))},t}(m.a.Component);A.propTypes={onClick:K.a.func,target:K.a.string,replace:K.a.bool,to:K.a.oneOfType([K.a.string,K.a.object]).isRequired,innerRef:K.a.oneOfType([K.a.string,K.a.func])},A.defaultProps={replace:!1},A.contextTypes={router:K.a.shape({history:K.a.shape({push:K.a.func.isRequired,replace:K.a.func.isRequired,createHref:K.a.func.isRequired}).isRequired}).isRequired};var $=A,q=r(566),B=r(135);const N={chartAltHeight:180,chartHeight:80,containerAltHeight:200,containerTrendHeight:150,containerUsageHeight:180},V={tabs:{marginTop:B.global_spacer_2xl.value},tabItems:{marginTop:B.global_spacer_xl.value}};class J extends m.a.Component{constructor(){super(...arguments),this.state={activeTabKey:0},this.buildDetailsLink=(e=>{const{details:t,getIdKeyForTab:r}=this.props,a=r(e);return`${t.viewAllPath}?${Object(w.a)({group_by:{[a]:"*"},order_by:{cost:"desc"}})}`}),this.getChart=((e,t,r=!1)=>{const{chartType:a}=this.props;return"cost"===a?this.getCostChart(e,t,r):"trend"===a?this.getTrendChart(e,t,r):"usage"===a?this.getUsageChart(t):null}),this.getCostChart=((e,t,r=!1)=>{const{currentReport:a,previousReport:s,t:c,trend:o}=this.props,n=this.getUnits(),i=c(o.titleKey,{units:c(`units.${n}`)}),l=o.computedReportItem||"cost",p=Object(j.g)(a,o.type,"date","infrastructureCost"),u=Object(j.g)(s,o.type,"date","infrastructureCost"),d=Object(j.g)(a,o.type,"date",l),h=Object(j.g)(s,o.type,"date",l);return m.a.createElement(_.c,{adjustContainerHeight:r,containerHeight:e,currentCostData:d,currentInfrastructureCostData:p,formatDatumValue:q.b,formatDatumOptions:o.formatOptions,height:t,previousCostData:h,previousInfrastructureCostData:u,title:i})}),this.getTrendChart=((e,t,r=!1)=>{const{currentReport:a,details:s,previousReport:c,t:o,trend:n}=this.props,i=this.getUnits(),l=o(n.titleKey,{units:o(`units.${i}`)}),p=n.computedReportItem||"cost",u=Object(j.g)(a,n.type,"date",p),d=Object(j.g)(c,n.type,"date",p);return m.a.createElement(_.g,{adjustContainerHeight:r,containerHeight:e,currentData:u,formatDatumValue:q.b,formatDatumOptions:n.formatOptions,height:t,previousData:d,showUsageLegendLabel:s.showUsageLegendLabel,title:l,units:i})}),this.getUsageChart=(e=>{const{currentReport:t,previousReport:r,t:a,trend:s}=this.props,c=this.getUnits(),o=a(s.titleKey,{units:a(`units.${c}`)}),n=Object(j.g)(t,s.type,"date","request"),i=Object(j.g)(r,s.type,"date","request"),l=Object(j.g)(t,s.type,"date","usage"),p=Object(j.g)(r,s.type,"date","usage");return m.a.createElement(_.h,{containerHeight:N.containerUsageHeight,currentRequestData:n,currentUsageData:l,formatDatumValue:q.b,formatDatumOptions:s.formatOptions,height:e,previousRequestData:i,previousUsageData:p,title:o})}),this.getDetails=(()=>{const{chartType:e,currentReport:t,details:r}=this.props,a=this.getUnits();return m.a.createElement(_.d,{chartType:e,costLabel:this.getDetailsLabel(r.costKey,a),formatOptions:r.formatOptions,formatValue:q.b,report:t,requestLabel:this.getDetailsLabel(r.requestKey,a),showTooltip:r.showTooltip,showUnits:r.showUnits,showUsageFirst:r.showUsageFirst,usageFormatOptions:r.usageFormatOptions,usageLabel:this.getDetailsLabel(r.usageKey,a)})}),this.getDetailsLabel=((e,t)=>{const{t:r}=this.props;return e?r(e,{units:r(`units.${t}`)}):void 0}),this.getDetailsLink=(()=>{const{currentTab:e,details:t}=this.props;return t.viewAllPath?m.a.createElement($,{to:this.buildDetailsLink(e),onClick:this.handleInsightsNavClick},this.getDetailsLinkTitle(e)):null}),this.getDetailsLinkTitle=(e=>{const{getIdKeyForTab:t,t:r}=this.props;return r("group_by.all",{groupBy:t(e)||""})}),this.getHorizontalLayout=(()=>{const{containerAltHeight:e=N.containerAltHeight,chartAltHeight:t=N.chartAltHeight,currentReportFetchStatus:r}=this.props;return m.a.createElement(_.b,{detailsLink:this.getDetailsLink(),status:r,subTitle:this.getSubTitle(),tabs:this.getTabs(),title:this.getTitle()},this.getDetails(),this.getChart(e,t,!0))}),this.getSubTitle=(()=>{const{t:e}=this.props,t=new Date,r=P()(t),a=S()(t,"D"),s=S()(D()(t),"D");return e("aws_dashboard.widget_subtitle",{count:F()(t),endDate:a,month:r,startDate:s})}),this.getTab=((e,t)=>{const{getIdKeyForTab:r,tabsReport:s,tabsReportFetchStatus:c}=this.props,o=r(e);return m.a.createElement(a.a,{eventKey:t,key:`${r(e)}-tab`,title:this.getTabTitle(e)},m.a.createElement("div",{style:V.tabItems},m.a.createElement(_.f,{idKey:o,key:`${o}-items`,report:s,status:c},({items:t})=>t.map(t=>this.getTabItem(e,t)))))}),this.getTabItem=((e,t)=>{const{availableTabs:r,details:a,getIdKeyForTab:s,tabsReport:c,topItems:o,trend:n}=this.props,{activeTabKey:i}=this.state,l=s(e),p=s(r[i]),u=n.computedReportItem||"cost";let d;const h=c&&c.meta&&c.meta.total;return"usage"===u?h&&c.meta.total.usage&&(d=c.meta.total.usage.value):h&&c.meta.total[u]&&c.meta.total[u].total&&(d=c.meta.total[u].total.value),p===l?m.a.createElement(_.e,{key:`${t.id}-item`,formatOptions:o.formatOptions,formatValue:q.b,label:t.label?t.label.toString():"",totalValue:d,units:a.units?a.units:this.getUnits(),value:t[u]}):null}),this.getTabs=(()=>{const{availableTabs:e}=this.props;return m.a.createElement(n.a,{isFilled:!0,activeKey:this.state.activeTabKey,onSelect:this.handleTabClick},e.map((e,t)=>this.getTab(e,t)))}),this.getTabTitle=(e=>{const{getIdKeyForTab:t,t:r}=this.props;return r("group_by.top",{groupBy:t(e)||""})}),this.getTitle=(()=>{const{t:e,titleKey:t}=this.props,r=new Date,a=P()(r);return e(t,{endDate:S()(r,"Do"),month:a,startDate:S()(D()(r),"Do")})}),this.getUnits=(()=>{const{currentReport:e,details:t,trend:r}=this.props,a=r.computedReportItem||"cost";if(t.units)return t.units;let s;const c=e&&e.meta&&e.meta.total;if("usage"===a){s=c&&e.meta.total.usage?Object(q.c)(e.meta.total.usage.units):""}else{s=c&&e.meta.total[a]&&e.meta.total[a].total?Object(q.c)(e.meta.total[a].total.units):""}return s}),this.getVerticalLayout=(()=>{const{availableTabs:e,currentReportFetchStatus:t}=this.props;return m.a.createElement(_.a,{detailsLink:this.getDetailsLink(),status:t,subTitle:this.getSubTitle(),title:this.getTitle()},this.getDetails(),this.getChart(N.containerTrendHeight,N.chartHeight),Boolean(e)&&m.a.createElement("div",{style:V.tabs},this.getTabs()))}),this.handleInsightsNavClick=(()=>{const{details:e}=this.props;e.appNavId&&insights.chrome.appNavClick({id:e.appNavId,secondaryNav:!0})}),this.handleTabClick=((e,t)=>{const{availableTabs:r,id:a,updateTab:s}=this.props;s(a,r[t]),this.setState({activeTabKey:t})})}componentDidMount(){const{availableTabs:e,fetchReports:t,id:r,updateTab:a,widgetId:s}=this.props;e&&a(r,e[0]),t(s)}render(){const{details:e}=this.props;return e.showHorizontal?this.getHorizontalLayout():this.getVerticalLayout()}}var Y=r(9);const M=e=>{switch(e){case"services":return"service";case"accounts":return"account";case"regions":return"region";case"instance_type":return"instance_type"}},G=Object(R.a)((e,{widgetId:t})=>{const r=O.c.selectWidget(e,t),a=O.c.selectWidgetQueries(e,t);return Object.assign({},r,{getIdKeyForTab:M,currentQuery:a.current,previousQuery:a.previous,tabsQuery:a.tabs,currentReport:Y.c.selectReport(e,r.reportType,a.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportType,a.current),previousReport:Y.c.selectReport(e,r.reportType,a.previous),tabsReport:Y.c.selectReport(e,r.reportType,a.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportType,a.tabs)})}),X={fetchReports:O.a.fetchWidgetReports,updateTab:O.a.changeWidgetTab},Z=Object(f.d)()(Object(T.connect)(G,X)(J)),ee=Object(R.a)(e=>({DashboardWidget:Z,selectWidgets:O.c.selectWidgets(e),widgets:O.c.selectCurrentWidgets(e)}));var te=Object(f.d)()(Object(T.connect)(ee,{})(y)),re=r(176);const ae=e=>{switch(e){case"services":return"service";case"accounts":return"account";case"regions":return"region";case"instance_type":return"instance_type"}},se=Object(R.a)((e,{widgetId:t})=>{const r=re.c.selectWidget(e,t),a=re.c.selectWidgetQueries(e,t);return Object.assign({},r,{getIdKeyForTab:ae,currentQuery:a.current,previousQuery:a.previous,tabsQuery:a.tabs,currentReport:Y.c.selectReport(e,r.reportType,a.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportType,a.current),previousReport:Y.c.selectReport(e,r.reportType,a.previous),tabsReport:Y.c.selectReport(e,r.reportType,a.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportType,a.tabs)})}),ce={fetchReports:re.a.fetchWidgetReports,updateTab:re.a.changeWidgetTab},oe=Object(f.d)()(Object(T.connect)(se,ce)(J)),ne=Object(R.a)(e=>({DashboardWidget:oe,selectWidgets:re.c.selectWidgets(e),widgets:re.c.selectCurrentWidgets(e)}));var ie=Object(f.d)()(Object(T.connect)(ne,{})(y)),le=r(175);const pe=e=>{switch(e){case"service_names":return"service_name";case"subscription_guids":return"subscription_guid";case"resource_locations":return"resource_location";case"instance_type":return"instance_type"}},ue=Object(R.a)((e,{widgetId:t})=>{const r=le.c.selectWidget(e,t),a=le.c.selectWidgetQueries(e,t);return Object.assign({},r,{getIdKeyForTab:pe,currentQuery:a.current,previousQuery:a.previous,tabsQuery:a.tabs,currentReport:Y.c.selectReport(e,r.reportType,a.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportType,a.current),previousReport:Y.c.selectReport(e,r.reportType,a.previous),tabsReport:Y.c.selectReport(e,r.reportType,a.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportType,a.tabs)})}),de={fetchReports:le.a.fetchWidgetReports,updateTab:le.a.changeWidgetTab},he=Object(f.d)()(Object(T.connect)(ue,de)(J)),be=Object(R.a)(e=>({DashboardWidget:he,selectWidgets:le.c.selectWidgets(e),widgets:le.c.selectCurrentWidgets(e)}));var ge=Object(f.d)()(Object(T.connect)(be,{})(y)),ve=r(178);const me=e=>{switch(e){case"service_names":return"service_name";case"subscription_guids":return"subscription_guid";case"resource_locations":return"resource_location";case"instance_type":return"instance_type"}},ye=Object(R.a)((e,{widgetId:t})=>{const r=ve.c.selectWidget(e,t),a=ve.c.selectWidgetQueries(e,t);return Object.assign({},r,{getIdKeyForTab:me,currentQuery:a.current,previousQuery:a.previous,tabsQuery:a.tabs,currentReport:Y.c.selectReport(e,r.reportType,a.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportType,a.current),previousReport:Y.c.selectReport(e,r.reportType,a.previous),tabsReport:Y.c.selectReport(e,r.reportType,a.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportType,a.tabs)})}),fe={fetchReports:ve.a.fetchWidgetReports,updateTab:ve.a.changeWidgetTab},Te=Object(f.d)()(Object(T.connect)(ye,fe)(J)),Re=Object(R.a)(e=>({DashboardWidget:Te,selectWidgets:ve.c.selectWidgets(e),widgets:ve.c.selectCurrentWidgets(e)}));var Oe=Object(f.d)()(Object(T.connect)(Re,{})(y)),we=r(127);const je=e=>{switch(e){case"accounts":return"account";case"regions":return"region";case"services":return"service"}},_e=Object(R.a)((e,{widgetId:t})=>{const r=we.c.selectWidget(e,t),a=we.c.selectWidgetQueries(e,t);return Object.assign({},r,{getIdKeyForTab:je,currentQuery:a.current,previousQuery:a.previous,tabsQuery:a.tabs,currentReport:Y.c.selectReport(e,r.reportType,a.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportType,a.current),previousReport:Y.c.selectReport(e,r.reportType,a.previous),tabsReport:Y.c.selectReport(e,r.reportType,a.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportType,a.tabs)})}),Ee={fetchReports:we.a.fetchWidgetReports,updateTab:we.a.changeWidgetTab},Se=Object(f.d)()(Object(T.connect)(_e,Ee)(J)),Ce=Object(R.a)(e=>({DashboardWidget:Se,selectWidgets:we.c.selectWidgets(e),widgets:we.c.selectCurrentWidgets(e)}));var Fe=Object(f.d)()(Object(T.connect)(Ce,{})(y)),We=r(180);const Pe=180,Ie=275,De=e=>{switch(e){case"clusters":return"cluster";case"nodes":return"node";case"projects":return"project"}},ke=Object(R.a)((e,{widgetId:t})=>{const r=We.c.selectWidget(e,t),a=We.c.selectWidgetQueries(e,t);return Object.assign({},r,{getIdKeyForTab:De,chartAltHeight:Pe,containerAltHeight:Ie,currentQuery:a.current,previousQuery:a.previous,tabsQuery:a.tabs,currentReport:Y.c.selectReport(e,r.reportType,a.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportType,a.current),previousReport:Y.c.selectReport(e,r.reportType,a.previous),tabsReport:Y.c.selectReport(e,r.reportType,a.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportType,a.tabs)})}),Ke={fetchReports:We.a.fetchWidgetReports,updateTab:We.a.changeWidgetTab},Qe=Object(f.d)()(Object(T.connect)(ke,Ke)(J)),Le=Object(R.a)(e=>({DashboardWidget:Qe,selectWidgets:We.c.selectWidgets(e),widgets:We.c.selectCurrentWidgets(e)}));var ze=Object(f.d)()(Object(T.connect)(Le,{})(y)),He=r(179);const Ue=180,xe=275,Ae=e=>{switch(e){case"clusters":return"cluster";case"nodes":return"node";case"projects":return"project"}},$e=Object(R.a)((e,{widgetId:t})=>{const r=He.c.selectWidget(e,t),a=He.c.selectWidgetQueries(e,t);return Object.assign({},r,{getIdKeyForTab:Ae,chartAltHeight:Ue,containerAltHeight:xe,currentQuery:a.current,previousQuery:a.previous,tabsQuery:a.tabs,currentReport:Y.c.selectReport(e,r.reportType,a.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportType,a.current),previousReport:Y.c.selectReport(e,r.reportType,a.previous),tabsReport:Y.c.selectReport(e,r.reportType,a.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportType,a.tabs)})}),qe={fetchReports:He.a.fetchWidgetReports,updateTab:He.a.changeWidgetTab},Be=Object(f.d)()(Object(T.connect)($e,qe)(J)),Ne=Object(R.a)(e=>({DashboardWidget:Be,selectWidgets:He.c.selectWidgets(e),widgets:He.c.selectCurrentWidgets(e)}));var Ve=Object(f.d)()(Object(T.connect)(Ne,{})(y)),Je=r(177);const Ye=e=>{switch(e){case"clusters":return"cluster";case"nodes":return"node";case"projects":return"project"}},Me=Object(R.a)((e,{widgetId:t})=>{const r=Je.c.selectWidget(e,t),a=Je.c.selectWidgetQueries(e,t);return Object.assign({},r,{getIdKeyForTab:Ye,currentQuery:a.current,previousQuery:a.previous,tabsQuery:a.tabs,currentReport:Y.c.selectReport(e,r.reportType,a.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportType,a.current),previousReport:Y.c.selectReport(e,r.reportType,a.previous),tabsReport:Y.c.selectReport(e,r.reportType,a.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportType,a.tabs)})}),Ge={fetchReports:Je.a.fetchWidgetReports,updateTab:Je.a.changeWidgetTab},Xe=Object(f.d)()(Object(T.connect)(Me,Ge)(J)),Ze=Object(R.a)(e=>({DashboardWidget:Xe,selectWidgets:Je.c.selectWidgets(e),widgets:Je.c.selectCurrentWidgets(e)}));var et=Object(f.d)()(Object(T.connect)(Ze,{})(y)),tt=r(25),rt=r(568);const at={info:{marginLeft:B.global_spacer_sm.value,verticalAlign:"middle"},infoIcon:{fontSize:B.global_FontSize_md.value},infoTitle:{fontWeight:"bold"},perspective:{marginBottom:B.global_spacer_lg.value,marginTop:B.global_spacer_lg.value},tabs:{marginTop:B.global_spacer_lg.value}},st=rt["a"]`
  &.pf-c-page__main-section {
    --pf-c-page__main-section--PaddingBottom: 0;
  }
`;var ct=r(1037),ot=r(1035),nt=r(915);const it={perspectiveSelector:{display:"flex",alignItems:"center"},perspectiveLabel:{marginBottom:0,marginRight:B.global_spacer_md.var}};const lt=Object(f.d)()(class extends m.a.Component{constructor(){super(...arguments),this.defaultState={isPerspectiveOpen:!1},this.state=Object.assign({},this.defaultState),this.getDropDownItems=(()=>{const{options:e,t:t}=this.props;return e.map(e=>m.a.createElement(nt.a,{component:"button",key:e.value,onClick:()=>this.handleClick(e.value)},t(e.label)))}),this.getCurrentLabel=(()=>{const{currentItem:e,options:t,t:r}=this.props;let a="";for(const s of t)if(e===s.value){a=r(s.label);break}return a}),this.handleClick=(e=>{const{onItemClicked:t}=this.props;t&&t(e)}),this.handleSelect=(e=>{this.setState({isPerspectiveOpen:!this.state.isPerspectiveOpen})}),this.handleToggle=(e=>{this.setState({isPerspectiveOpen:e})})}render(){const{t:e}=this.props,{isPerspectiveOpen:t}=this.state,r=this.getDropDownItems();return m.a.createElement("div",{style:it.perspectiveSelector},m.a.createElement("label",{style:it.perspectiveLabel},e("overview.perspective.label")),m.a.createElement(ct.a,{onSelect:this.handleSelect,toggle:m.a.createElement(ot.a,{onToggle:this.handleToggle},this.getCurrentLabel()),isOpen:t,dropdownItems:r}))}}),pt=e=>{switch(e){case"infrastructure":return"infrastructure";case"ocp":return"ocp"}},ut=[{label:"overview.perspective.all",value:"all"},{label:"overview.perspective.supplementary",value:"supplementary"}],dt=[{label:"overview.perspective.all_cloud",value:"all_cloud"}],ht=[{label:"overview.perspective.aws",value:"aws"},{label:"overview.perspective.aws_cloud",value:"aws_cloud"}],bt=[{label:"overview.perspective.azure",value:"azure"},{label:"overview.perspective.azure_cloud",value:"azure_cloud"}],gt=[{label:"overview.perspective.ocp_usage",value:"ocp_usage"}];const vt=Object(R.a)(e=>{const t=Object(p.a)(tt.a),r=tt.f.selectProviders(e,"aws",t),a=tt.f.selectProvidersError(e,"aws",t),s=tt.f.selectProvidersFetchStatus(e,"aws",t),c=Object(p.a)(tt.b),o=tt.f.selectProviders(e,"azure",c),n=tt.f.selectProvidersError(e,"azure",c),i=tt.f.selectProvidersFetchStatus(e,"azure",c),l=Object(p.a)(tt.c);return{awsProviders:r,awsProvidersError:a,awsProvidersFetchStatus:s,awsProvidersQueryString:t,azureProviders:o,azureProvidersError:n,azureProvidersFetchStatus:i,azureProvidersQueryString:c,ocpProviders:tt.f.selectProviders(e,"ocp",l),ocpProvidersError:tt.f.selectProvidersError(e,"ocp",l),ocpProvidersFetchStatus:tt.f.selectProvidersFetchStatus(e,"ocp",l),ocpProvidersQueryString:l}});var mt=Object(f.d)()(Object(T.connect)(vt)(class extends m.a.Component{constructor(){super(...arguments),this.defaultState={activeTabKey:0,currentInfrastructurePerspective:dt[0].value,currentOcpPerspective:ut[0].value,showPopover:!1},this.state=Object.assign({},this.defaultState),this.getAvailableTabs=(()=>{const{awsProviders:e,azureProviders:t,ocpProviders:r}=this.props,a=[],s=e&&e.meta&&e.meta.count,c=t&&t.meta&&t.meta.count,o=r&&r.meta&&r.meta.count,n=o&&s;return o&&a.push({contentRef:m.a.createRef(),tab:"ocp"}),(s||c||n)&&a.push({contentRef:m.a.createRef(),tab:"infrastructure"}),a}),this.getCurrentTab=(()=>{const{activeTabKey:e}=this.state;return 0===e?"ocp":"infrastructure"}),this.getPerspective=(()=>{const{awsProviders:e,azureProviders:t,ocpProviders:r}=this.props,{currentInfrastructurePerspective:a,currentOcpPerspective:s}=this.state;let c=s,o=[...ut];if("infrastructure"===this.getCurrentTab()){const s=e&&e.meta&&e.meta.count,n=t&&t.meta&&t.meta.count,i=r&&r.meta&&r.meta.count;c=a,o=[...dt,...s&&ht,...n&&bt,...i&&gt]}return m.a.createElement(lt,{currentItem:c,onItemClicked:this.handlePerspectiveClick,options:o})}),this.getTab=((e,t,r)=>m.a.createElement(a.a,{eventKey:r,key:`${pt(e)}-tab`,tabContentId:`tab-${r}`,tabContentRef:t,title:this.getTabTitle(e)})),this.getTabContent=(e=>e.map((e,t)=>m.a.createElement(i.a,{eventKey:t,key:`${pt(e.tab)}-tabContent`,id:`tab-${t}`,ref:e.contentRef},this.getTabItem(e.tab,t)))),this.getTabItem=((e,t)=>{const{activeTabKey:r,currentInfrastructurePerspective:a,currentOcpPerspective:s}=this.state;if(r!==t)return null;const c=pt(e);return"infrastructure"===c?"all_cloud"===a?m.a.createElement(Fe,null):"aws"===a?m.a.createElement(ie,null):"aws_cloud"===a?m.a.createElement(te,null):"azure"===a?m.a.createElement(Oe,null):"azure_cloud"===a?m.a.createElement(ge,null):"ocp_usage"===a?m.a.createElement(et,null):m.a.createElement(Fe,null):"ocp"===c?"all"===s?m.a.createElement(ze,null):"supplementary"===s?m.a.createElement(Ve,null):m.a.createElement(ze,null):null}),this.getTabs=(e=>{const{activeTabKey:t}=this.state;return m.a.createElement(n.a,{activeKey:t,onSelect:this.handleTabClick},e.map((e,t)=>this.getTab(e.tab,e.contentRef,t)))}),this.getTabTitle=(e=>{const{t:t}=this.props;return"infrastructure"===e?t("overview.infrastructure"):"ocp"===e?t("overview.ocp"):void 0}),this.handlePerspectiveClick=(e=>{const t=this.getCurrentTab();this.setState(Object.assign({},"infrastructure"===t&&{currentInfrastructurePerspective:e},"ocp"===t&&{currentOcpPerspective:e}))}),this.handlePopoverClick=(()=>{this.setState({show:!this.state.showPopover})}),this.handleTabClick=((e,t)=>{this.setState({activeTabKey:t})})}render(){const{awsProviders:e,awsProvidersError:t,awsProvidersFetchStatus:r,azureProviders:a,azureProvidersError:n,azureProvidersFetchStatus:i,ocpProviders:p,ocpProvidersError:b,ocpProvidersFetchStatus:g,t:v}=this.props,y=this.getAvailableTabs(),f=t||n||b,T=1===r||1===i||1===g,R=void 0!==e&&void 0!==e.meta&&0===e.meta.count&&2===r,O=void 0!==a&&void 0!==a.meta&&0===a.meta.count&&2===i,w=void 0!==p&&void 0!==p.meta&&0===p.meta.count&&2===g,j=R&&O&&w,_=!(f||j||T);return m.a.createElement(m.a.Fragment,null,m.a.createElement("section",{className:`pf-l-page-header pf-c-page-header pf-l-page__main-section pf-c-page__main-section pf-m-light ${_?st:""}`},m.a.createElement("header",{className:"pf-u-display-flex pf-u-justify-content-space-between pf-u-align-items-center"},m.a.createElement(o.a,{size:c.a["2xl"]},v("overview.title"),Boolean(_)&&m.a.createElement("span",{style:at.infoIcon},m.a.createElement(s.a,{"aria-label":"t('ocp_details.supplementary_aria_label')",enableFlip:!0,bodyContent:m.a.createElement(m.a.Fragment,null,m.a.createElement("p",{style:at.infoTitle},v("overview.ocp_cloud")),m.a.createElement("p",null,v("overview.ocp_cloud_desc")),m.a.createElement("br",null),m.a.createElement("p",{style:at.infoTitle},v("overview.ocp")),m.a.createElement("p",null,v("overview.ocp_desc")),m.a.createElement("br",null),m.a.createElement("p",{style:at.infoTitle},v("overview.aws")),m.a.createElement("p",null,v("overview.aws_desc")),m.a.createElement("br",null),m.a.createElement("p",{style:at.infoTitle},v("overview.azure")),m.a.createElement("p",null,v("overview.azure_desc")))},m.a.createElement(l.a,{style:at.info,onClick:this.handlePopoverClick}))))),Boolean(_)&&m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{style:at.tabs},this.getTabs(y)),m.a.createElement("div",{style:at.perspective},this.getPerspective()))),m.a.createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section","page-type":"cost-management-overview"},Boolean(f)?m.a.createElement(u.a,{error:f}):Boolean(j)?m.a.createElement(h.a,null):Boolean(T)?m.a.createElement(d.a,null):this.getTabContent(y)))}}));t.default=mt}}]);
//# sourceMappingURL=766b162e3097ffc9eb3a.bundle.js.map