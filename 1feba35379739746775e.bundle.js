(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{939:function(e,t,r){"use strict";r.r(t);var s=r(1001),a=r(925),c=r(244),o=r(1038),n=r(910),i=r(433),p=r(976),l=r(163),u=r(606),h=r(608),d=r(637),b=r(993),g=r(992),v=r(1),y=r.n(v);const m=({DashboardWidget:e,selectWidgets:t,widgets:r})=>y.a.createElement("div",null,y.a.createElement(b.a,{gutter:"md"},r.map(r=>{const s=t[r];return Boolean(s.details.showHorizontal)?y.a.createElement(g.a,{sm:12,key:r},y.a.createElement(e,{widgetId:r})):y.a.createElement(g.a,{lg:12,xl:6,xl2:4,key:r},y.a.createElement(e,{widgetId:r}))})));var T=r(193),f=r(150),R=r(162),O=r(202),w=r(136),j=r(596),P=r(618),_=r(620),E=r.n(_),S=r(598),C=r.n(S),F=r(659),W=r.n(F),I=r(633),D=r.n(I),k=r(0),K=r.n(k),Q=r(32),L=r.n(Q),z=r(141),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e};function U(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var x=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},A=function(e){function t(){var r,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,c=Array(a),o=0;o<a;o++)c[o]=arguments[o];return r=s=U(this,e.call.apply(e,[this].concat(c))),s.handleClick=function(e){if(s.props.onClick&&s.props.onClick(e),!e.defaultPrevented&&0===e.button&&!s.props.target&&!x(e)){e.preventDefault();var t=s.context.router.history,r=s.props,a=r.replace,c=r.to;a?t.replace(c):t.push(c)}},U(s,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),r=e.innerRef,s=function(e,t){var r={};for(var s in e)t.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(e,s)&&(r[s]=e[s]);return r}(e,["replace","to","innerRef"]);L()(this.context.router,"You should not use <Link> outside a <Router>"),L()(void 0!==t,'You must specify the "to" property');var a=this.context.router.history,c="string"==typeof t?Object(z.b)(t,null,null,a.location):t,o=a.createHref(c);return y.a.createElement("a",H({},s,{onClick:this.handleClick,href:o,ref:r}))},t}(y.a.Component);A.propTypes={onClick:K.a.func,target:K.a.string,replace:K.a.bool,to:K.a.oneOfType([K.a.string,K.a.object]).isRequired,innerRef:K.a.oneOfType([K.a.string,K.a.func])},A.defaultProps={replace:!1},A.contextTypes={router:K.a.shape({history:K.a.shape({push:K.a.func.isRequired,replace:K.a.func.isRequired,createHref:K.a.func.isRequired}).isRequired}).isRequired};var $=A,q=r(593),B=r(161);const N={chartAltHeight:180,chartHeight:80,containerAltHeight:200,containerTrendHeight:150,containerUsageHeight:180},V={tabs:{marginTop:B.global_spacer_2xl.value},tabItems:{marginTop:B.global_spacer_xl.value}};class J extends y.a.Component{constructor(){super(...arguments),this.state={activeTabKey:0},this.buildDetailsLink=(e=>{const{details:t,getIdKeyForTab:r}=this.props,s=r(e);return`${t.viewAllPath}?${Object(w.a)({group_by:{[s]:"*"},order_by:{cost:"desc"}})}`}),this.getChart=((e,t,r=!1)=>{const{chartType:s}=this.props;return"cost"===s?this.getCostChart(e,t,r):"trend"===s?this.getTrendChart(e,t,r):"usage"===s?this.getUsageChart(t):null}),this.getCostChart=((e,t,r=!1)=>{const{currentReport:s,previousReport:a,t:c,trend:o}=this.props,n=this.getUnits(),i=c(o.titleKey,{units:c(`units.${n}`)}),p=o.computedReportItem||"cost",l=Object(j.g)(s,o.type,"date","infrastructureCost"),u=Object(j.g)(a,o.type,"date","infrastructureCost"),h=Object(j.g)(s,o.type,"date",p),d=Object(j.g)(a,o.type,"date",p);return y.a.createElement(P.c,{adjustContainerHeight:r,containerHeight:e,currentCostData:h,currentInfrastructureCostData:l,formatDatumValue:q.b,formatDatumOptions:o.formatOptions,height:t,previousCostData:d,previousInfrastructureCostData:u,title:i})}),this.getTrendChart=((e,t,r=!1)=>{const{currentReport:s,details:a,previousReport:c,t:o,trend:n}=this.props,i=this.getUnits(),p=o(n.titleKey,{units:o(`units.${i}`)}),l=n.computedReportItem||"cost",u=Object(j.g)(s,n.type,"date",l),h=Object(j.g)(c,n.type,"date",l);return y.a.createElement(P.g,{adjustContainerHeight:r,containerHeight:e,currentData:u,formatDatumValue:q.b,formatDatumOptions:n.formatOptions,height:t,previousData:h,showUsageLegendLabel:a.showUsageLegendLabel,title:p,units:i})}),this.getUsageChart=(e=>{const{currentReport:t,previousReport:r,t:s,trend:a}=this.props,c=this.getUnits(),o=s(a.titleKey,{units:s(`units.${c}`)}),n=Object(j.g)(t,a.type,"date","request"),i=Object(j.g)(r,a.type,"date","request"),p=Object(j.g)(t,a.type,"date","usage"),l=Object(j.g)(r,a.type,"date","usage");return y.a.createElement(P.h,{containerHeight:N.containerUsageHeight,currentRequestData:n,currentUsageData:p,formatDatumValue:q.b,formatDatumOptions:a.formatOptions,height:e,previousRequestData:i,previousUsageData:l,title:o})}),this.getDetails=(()=>{const{chartType:e,currentReport:t,details:r}=this.props,s=this.getUnits();return y.a.createElement(P.d,{chartType:e,costLabel:this.getDetailsLabel(r.costKey,s),formatOptions:r.formatOptions,formatValue:q.b,report:t,requestLabel:this.getDetailsLabel(r.requestKey,s),showTooltip:r.showTooltip,showUnits:r.showUnits,showUsageFirst:r.showUsageFirst,usageFormatOptions:r.usageFormatOptions,usageLabel:this.getDetailsLabel(r.usageKey,s)})}),this.getDetailsLabel=((e,t)=>{const{t:r}=this.props;return e?r(e,{units:r(`units.${t}`)}):void 0}),this.getDetailsLink=(()=>{const{currentTab:e,details:t}=this.props;return t.viewAllPath?y.a.createElement($,{to:this.buildDetailsLink(e),onClick:this.handleInsightsNavClick},this.getDetailsLinkTitle(e)):null}),this.getDetailsLinkTitle=(e=>{const{getIdKeyForTab:t,t:r}=this.props;return r("group_by.all",{groupBy:t(e)||""})}),this.getHorizontalLayout=(()=>{const{containerAltHeight:e=N.containerAltHeight,chartAltHeight:t=N.chartAltHeight,currentReportFetchStatus:r}=this.props;return y.a.createElement(P.b,{detailsLink:this.getDetailsLink(),status:r,subTitle:this.getSubTitle(),tabs:this.getTabs(),title:this.getTitle()},this.getDetails(),this.getChart(e,t,!0))}),this.getSubTitle=(()=>{const{t:e}=this.props,t=new Date,r=W()(t),s=E()(t,"D"),a=E()(D()(t),"D");return e("aws_dashboard.widget_subtitle",{count:C()(t),endDate:s,month:r,startDate:a})}),this.getTab=((e,t)=>{const{getIdKeyForTab:r,tabsReport:a,tabsReportFetchStatus:c}=this.props,o=r(e);return y.a.createElement(s.a,{eventKey:t,key:`${r(e)}-tab`,title:this.getTabTitle(e)},y.a.createElement("div",{style:V.tabItems},y.a.createElement(P.f,{idKey:o,key:`${o}-items`,report:a,status:c},({items:t})=>t.map(t=>this.getTabItem(e,t)))))}),this.getTabItem=((e,t)=>{const{availableTabs:r,details:s,getIdKeyForTab:a,tabsReport:c,topItems:o,trend:n}=this.props,{activeTabKey:i}=this.state,p=a(e),l=a(r[i]),u=n.computedReportItem||"cost";let h;const d=c&&c.meta&&c.meta.total;return"usage"===u?d&&c.meta.total.usage&&(h=c.meta.total.usage.value):d&&c.meta.total[u]&&c.meta.total[u].total&&(h=c.meta.total[u].total.value),l===p?y.a.createElement(P.e,{key:`${t.id}-item`,formatOptions:o.formatOptions,formatValue:q.b,label:t.label?t.label.toString():"",totalValue:h,units:s.units?s.units:this.getUnits(),value:t[u]}):null}),this.getTabs=(()=>{const{availableTabs:e}=this.props;return y.a.createElement(n.a,{isFilled:!0,activeKey:this.state.activeTabKey,onSelect:this.handleTabClick},e.map((e,t)=>this.getTab(e,t)))}),this.getTabTitle=(e=>{const{getIdKeyForTab:t,t:r}=this.props;return r("group_by.top",{groupBy:t(e)||""})}),this.getTitle=(()=>{const{t:e,titleKey:t}=this.props,r=new Date,s=W()(r);return e(t,{endDate:E()(r,"Do"),month:s,startDate:E()(D()(r),"Do")})}),this.getUnits=(()=>{const{currentReport:e,details:t,trend:r}=this.props,s=r.computedReportItem||"cost";if(t.units)return t.units;let a;const c=e&&e.meta&&e.meta.total;if("usage"===s){a=c&&e.meta.total.usage?Object(q.c)(e.meta.total.usage.units):""}else{a=c&&e.meta.total[s]&&e.meta.total[s].total?Object(q.c)(e.meta.total[s].total.units):""}return a}),this.getVerticalLayout=(()=>{const{availableTabs:e,currentReportFetchStatus:t}=this.props;return y.a.createElement(P.a,{detailsLink:this.getDetailsLink(),status:t,subTitle:this.getSubTitle(),title:this.getTitle()},this.getDetails(),this.getChart(N.containerTrendHeight,N.chartHeight),Boolean(e)&&y.a.createElement("div",{style:V.tabs},this.getTabs()))}),this.handleInsightsNavClick=(()=>{const{details:e}=this.props;e.appNavId&&insights.chrome.appNavClick({id:e.appNavId,secondaryNav:!0})}),this.handleTabClick=((e,t)=>{const{availableTabs:r,id:s,updateTab:a}=this.props;a(s,r[t]),this.setState({activeTabKey:t})})}componentDidMount(){const{availableTabs:e,fetchReports:t,id:r,updateTab:s,widgetId:a}=this.props;e&&s(r,e[0]),t(a)}render(){const{details:e}=this.props;return e.showHorizontal?this.getHorizontalLayout():this.getVerticalLayout()}}var Y=r(9);const M=e=>{switch(e){case"services":return"service";case"accounts":return"account";case"regions":return"region";case"instance_type":return"instance_type"}},G=Object(R.a)((e,{widgetId:t})=>{const r=O.c.selectWidget(e,t),s=O.c.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:M,currentQuery:s.current,previousQuery:s.previous,tabsQuery:s.tabs,currentReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.current),previousReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.previous),tabsReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.tabs)})}),X={fetchReports:O.a.fetchWidgetReports,updateTab:O.a.changeWidgetTab},Z=Object(T.d)()(Object(f.connect)(G,X)(J)),ee=Object(R.a)(e=>({DashboardWidget:Z,selectWidgets:O.c.selectWidgets(e),widgets:O.c.selectCurrentWidgets(e)}));var te=Object(T.d)()(Object(f.connect)(ee,{})(m)),re=r(201);const se=e=>{switch(e){case"services":return"service";case"accounts":return"account";case"regions":return"region";case"instance_type":return"instance_type"}},ae=Object(R.a)((e,{widgetId:t})=>{const r=re.c.selectWidget(e,t),s=re.c.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:se,currentQuery:s.current,previousQuery:s.previous,tabsQuery:s.tabs,currentReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.current),previousReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.previous),tabsReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.tabs)})}),ce={fetchReports:re.a.fetchWidgetReports,updateTab:re.a.changeWidgetTab},oe=Object(T.d)()(Object(f.connect)(ae,ce)(J)),ne=Object(R.a)(e=>({DashboardWidget:oe,selectWidgets:re.c.selectWidgets(e),widgets:re.c.selectCurrentWidgets(e)}));var ie=Object(T.d)()(Object(f.connect)(ne,{})(m)),pe=r(204);const le=e=>{switch(e){case"service_names":return"service_name";case"subscription_guids":return"subscription_guid";case"resource_locations":return"resource_location";case"instance_type":return"instance_type"}},ue=Object(R.a)((e,{widgetId:t})=>{const r=pe.c.selectWidget(e,t),s=pe.c.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:le,currentQuery:s.current,previousQuery:s.previous,tabsQuery:s.tabs,currentReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.current),previousReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.previous),tabsReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.tabs)})}),he={fetchReports:pe.a.fetchWidgetReports,updateTab:pe.a.changeWidgetTab},de=Object(T.d)()(Object(f.connect)(ue,he)(J)),be=Object(R.a)(e=>({DashboardWidget:de,selectWidgets:pe.c.selectWidgets(e),widgets:pe.c.selectCurrentWidgets(e)}));var ge=Object(T.d)()(Object(f.connect)(be,{})(m)),ve=r(206);const ye=e=>{switch(e){case"service_names":return"service_name";case"subscription_guids":return"subscription_guid";case"resource_locations":return"resource_location";case"instance_type":return"instance_type"}},me=Object(R.a)((e,{widgetId:t})=>{const r=ve.c.selectWidget(e,t),s=ve.c.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:ye,currentQuery:s.current,previousQuery:s.previous,tabsQuery:s.tabs,currentReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.current),previousReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.previous),tabsReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.tabs)})}),Te={fetchReports:ve.a.fetchWidgetReports,updateTab:ve.a.changeWidgetTab},fe=Object(T.d)()(Object(f.connect)(me,Te)(J)),Re=Object(R.a)(e=>({DashboardWidget:fe,selectWidgets:ve.c.selectWidgets(e),widgets:ve.c.selectCurrentWidgets(e)}));var Oe=Object(T.d)()(Object(f.connect)(Re,{})(m)),we=r(153);const je=e=>{switch(e){case"accounts":return"account";case"regions":return"region";case"services":return"service"}},Pe=Object(R.a)((e,{widgetId:t})=>{const r=we.c.selectWidget(e,t),s=we.c.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:je,currentQuery:s.current,previousQuery:s.previous,tabsQuery:s.tabs,currentReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.current),previousReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.previous),tabsReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.tabs)})}),_e={fetchReports:we.a.fetchWidgetReports,updateTab:we.a.changeWidgetTab},Ee=Object(T.d)()(Object(f.connect)(Pe,_e)(J)),Se=Object(R.a)(e=>({DashboardWidget:Ee,selectWidgets:we.c.selectWidgets(e),widgets:we.c.selectCurrentWidgets(e)}));var Ce=Object(T.d)()(Object(f.connect)(Se,{})(m)),Fe=r(200);const We=180,Ie=275,De=e=>{switch(e){case"clusters":return"cluster";case"nodes":return"node";case"projects":return"project"}},ke=Object(R.a)((e,{widgetId:t})=>{const r=Fe.c.selectWidget(e,t),s=Fe.c.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:De,chartAltHeight:We,containerAltHeight:Ie,currentQuery:s.current,previousQuery:s.previous,tabsQuery:s.tabs,currentReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.current),previousReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.previous),tabsReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.tabs)})}),Ke={fetchReports:Fe.a.fetchWidgetReports,updateTab:Fe.a.changeWidgetTab},Qe=Object(T.d)()(Object(f.connect)(ke,Ke)(J)),Le=Object(R.a)(e=>({DashboardWidget:Qe,selectWidgets:Fe.c.selectWidgets(e),widgets:Fe.c.selectCurrentWidgets(e)}));var ze=Object(T.d)()(Object(f.connect)(Le,{})(m)),He=r(205);const Ue=180,xe=275,Ae=e=>{switch(e){case"clusters":return"cluster";case"nodes":return"node";case"projects":return"project"}},$e=Object(R.a)((e,{widgetId:t})=>{const r=He.c.selectWidget(e,t),s=He.c.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:Ae,chartAltHeight:Ue,containerAltHeight:xe,currentQuery:s.current,previousQuery:s.previous,tabsQuery:s.tabs,currentReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.current),previousReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.previous),tabsReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.tabs)})}),qe={fetchReports:He.a.fetchWidgetReports,updateTab:He.a.changeWidgetTab},Be=Object(T.d)()(Object(f.connect)($e,qe)(J)),Ne=Object(R.a)(e=>({DashboardWidget:Be,selectWidgets:He.c.selectWidgets(e),widgets:He.c.selectCurrentWidgets(e)}));var Ve=Object(T.d)()(Object(f.connect)(Ne,{})(m)),Je=r(203);const Ye=e=>{switch(e){case"clusters":return"cluster";case"nodes":return"node";case"projects":return"project"}},Me=Object(R.a)((e,{widgetId:t})=>{const r=Je.c.selectWidget(e,t),s=Je.c.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:Ye,currentQuery:s.current,previousQuery:s.previous,tabsQuery:s.tabs,currentReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.current),previousReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.previous),tabsReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,s.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,s.tabs)})}),Ge={fetchReports:Je.a.fetchWidgetReports,updateTab:Je.a.changeWidgetTab},Xe=Object(T.d)()(Object(f.connect)(Me,Ge)(J)),Ze=Object(R.a)(e=>({DashboardWidget:Xe,selectWidgets:Je.c.selectWidgets(e),widgets:Je.c.selectCurrentWidgets(e)}));var et=Object(T.d)()(Object(f.connect)(Ze,{})(m)),tt=r(19),rt=r(595);const st={info:{marginLeft:B.global_spacer_sm.value,verticalAlign:"middle"},infoIcon:{fontSize:B.global_FontSize_md.value},infoTitle:{fontWeight:"bold"},perspective:{marginBottom:B.global_spacer_lg.value,marginTop:B.global_spacer_lg.value},tabs:{marginTop:B.global_spacer_lg.value}},at=rt["a"]`
  &.pf-c-page__main-section {
    --pf-c-page__main-section--PaddingBottom: 0;
  }
`;var ct=r(1036),ot=r(1034),nt=r(907);const it={perspectiveSelector:{display:"flex",alignItems:"center"},perspectiveLabel:{marginBottom:0,marginRight:B.global_spacer_md.var}};const pt=Object(T.d)()(class extends y.a.Component{constructor(){super(...arguments),this.defaultState={isPerspectiveOpen:!1},this.state=Object.assign({},this.defaultState),this.getDropDownItems=(()=>{const{options:e,t:t}=this.props;return e.map(e=>y.a.createElement(nt.a,{component:"button",key:e.value,onClick:()=>this.handleClick(e.value)},t(e.label)))}),this.getCurrentLabel=(()=>{const{currentItem:e,options:t,t:r}=this.props;let s="";for(const a of t)if(e===a.value){s=r(a.label);break}return s}),this.handleClick=(e=>{const{onItemClicked:t}=this.props;t&&t(e)}),this.handleSelect=(e=>{this.setState({isPerspectiveOpen:!this.state.isPerspectiveOpen})}),this.handleToggle=(e=>{this.setState({isPerspectiveOpen:e})})}render(){const{t:e}=this.props,{isPerspectiveOpen:t}=this.state,r=this.getDropDownItems();return y.a.createElement("div",{style:it.perspectiveSelector},y.a.createElement("label",{style:it.perspectiveLabel},e("overview.perspective.label")),y.a.createElement(ct.a,{onSelect:this.handleSelect,toggle:y.a.createElement(ot.a,{onToggle:this.handleToggle},this.getCurrentLabel()),isOpen:t,dropdownItems:r}))}}),lt=e=>{switch(e){case"infrastructure":return"infrastructure";case"ocp":return"ocp"}},ut=[{label:"overview.perspective.all",value:"all"},{label:"overview.perspective.supplementary",value:"supplementary"}],ht=[{label:"overview.perspective.all_cloud",value:"all_cloud"}],dt=[{label:"overview.perspective.aws",value:"aws"},{label:"overview.perspective.aws_cloud",value:"aws_cloud"}],bt=[{label:"overview.perspective.azure",value:"azure"},{label:"overview.perspective.azure_cloud",value:"azure_cloud"}],gt=[{label:"overview.perspective.ocp_usage",value:"ocp_usage"}];const vt=Object(R.a)(e=>{const t=Object(l.a)(tt.a),r=tt.f.selectProviders(e,"aws",t),s=tt.f.selectProvidersError(e,"aws",t),a=tt.f.selectProvidersFetchStatus(e,"aws",t),c=Object(l.a)(tt.b),o=tt.f.selectProviders(e,"azure",c),n=tt.f.selectProvidersError(e,"azure",c),i=tt.f.selectProvidersFetchStatus(e,"azure",c),p=Object(l.a)(tt.c);return{awsProviders:r,awsProvidersError:s,awsProvidersFetchStatus:a,awsProvidersQueryString:t,azureProviders:o,azureProvidersError:n,azureProvidersFetchStatus:i,azureProvidersQueryString:c,ocpProviders:tt.f.selectProviders(e,"ocp",p),ocpProvidersError:tt.f.selectProvidersError(e,"ocp",p),ocpProvidersFetchStatus:tt.f.selectProvidersFetchStatus(e,"ocp",p),ocpProvidersQueryString:p}});var yt=Object(T.d)()(Object(f.connect)(vt)(class extends y.a.Component{constructor(){super(...arguments),this.defaultState={activeTabKey:0,currentInfrastructurePerspective:ht[0].value,currentOcpPerspective:ut[0].value,showPopover:!1},this.state=Object.assign({},this.defaultState),this.getAvailableTabs=(()=>{const{awsProviders:e,azureProviders:t,ocpProviders:r}=this.props,s=[],a=e&&e.meta&&e.meta.count,c=t&&t.meta&&t.meta.count,o=r&&r.meta&&r.meta.count,n=o&&a;return o&&s.push({contentRef:y.a.createRef(),tab:"ocp"}),(a||c||n)&&s.push({contentRef:y.a.createRef(),tab:"infrastructure"}),s}),this.getCurrentTab=(()=>{const{activeTabKey:e}=this.state;return 0===e?"ocp":"infrastructure"}),this.getPerspective=(()=>{const{awsProviders:e,azureProviders:t,ocpProviders:r}=this.props,{currentInfrastructurePerspective:s,currentOcpPerspective:a}=this.state;let c=a,o=[...ut];if("infrastructure"===this.getCurrentTab()){const a=e&&e.meta&&e.meta.count,n=t&&t.meta&&t.meta.count,i=r&&r.meta&&r.meta.count;c=s,o=[...ht,...a&&dt,...n&&bt,...i&&gt]}return y.a.createElement(pt,{currentItem:c,onItemClicked:this.handlePerspectiveClick,options:o})}),this.getTab=((e,t,r)=>y.a.createElement(s.a,{eventKey:r,key:`${lt(e)}-tab`,tabContentId:`tab-${r}`,tabContentRef:t,title:this.getTabTitle(e)})),this.getTabContent=(e=>e.map((e,t)=>y.a.createElement(i.a,{eventKey:t,key:`${lt(e.tab)}-tabContent`,id:`tab-${t}`,ref:e.contentRef},this.getTabItem(e.tab,t)))),this.getTabItem=((e,t)=>{const{activeTabKey:r,currentInfrastructurePerspective:s,currentOcpPerspective:a}=this.state;if(r!==t)return null;const c=lt(e);return"infrastructure"===c?"all_cloud"===s?y.a.createElement(Ce,null):"aws"===s?y.a.createElement(ie,null):"aws_cloud"===s?y.a.createElement(te,null):"azure"===s?y.a.createElement(Oe,null):"azure_cloud"===s?y.a.createElement(ge,null):"ocp_usage"===s?y.a.createElement(et,null):y.a.createElement(Ce,null):"ocp"===c?"all"===a?y.a.createElement(ze,null):"supplementary"===a?y.a.createElement(Ve,null):y.a.createElement(ze,null):null}),this.getTabs=(e=>{const{activeTabKey:t}=this.state;return y.a.createElement(n.a,{activeKey:t,onSelect:this.handleTabClick},e.map((e,t)=>this.getTab(e.tab,e.contentRef,t)))}),this.getTabTitle=(e=>{const{t:t}=this.props;return"infrastructure"===e?t("overview.infrastructure"):"ocp"===e?t("overview.ocp"):void 0}),this.handlePerspectiveClick=(e=>{const t=this.getCurrentTab();this.setState(Object.assign(Object.assign({},"infrastructure"===t&&{currentInfrastructurePerspective:e}),"ocp"===t&&{currentOcpPerspective:e}))}),this.handlePopoverClick=(()=>{this.setState({show:!this.state.showPopover})}),this.handleTabClick=((e,t)=>{this.setState({activeTabKey:t})})}render(){const{awsProviders:e,awsProvidersError:t,awsProvidersFetchStatus:r,azureProviders:s,azureProvidersError:n,azureProvidersFetchStatus:i,ocpProviders:l,ocpProvidersError:b,ocpProvidersFetchStatus:g,t:v}=this.props,m=this.getAvailableTabs(),T=t||n||b,f=1===r||1===i||1===g,R=void 0!==e&&void 0!==e.meta&&0===e.meta.count&&2===r,O=void 0!==s&&void 0!==s.meta&&0===s.meta.count&&2===i,w=void 0!==l&&void 0!==l.meta&&0===l.meta.count&&2===g,j=R&&O&&w,P=!(T||j||f);return y.a.createElement(y.a.Fragment,null,y.a.createElement("section",{className:`pf-l-page-header pf-c-page-header pf-l-page__main-section pf-c-page__main-section pf-m-light ${P?at:""}`},y.a.createElement("header",{className:"pf-u-display-flex pf-u-justify-content-space-between pf-u-align-items-center"},y.a.createElement(o.a,{size:c.a["2xl"]},v("overview.title"),Boolean(P)&&y.a.createElement("span",{style:st.infoIcon},y.a.createElement(a.a,{"aria-label":"t('ocp_details.supplementary_aria_label')",enableFlip:!0,bodyContent:y.a.createElement(y.a.Fragment,null,y.a.createElement("p",{style:st.infoTitle},v("overview.ocp_cloud")),y.a.createElement("p",null,v("overview.ocp_cloud_desc")),y.a.createElement("br",null),y.a.createElement("p",{style:st.infoTitle},v("overview.ocp")),y.a.createElement("p",null,v("overview.ocp_desc")),y.a.createElement("br",null),y.a.createElement("p",{style:st.infoTitle},v("overview.aws")),y.a.createElement("p",null,v("overview.aws_desc")),y.a.createElement("br",null),y.a.createElement("p",{style:st.infoTitle},v("overview.azure")),y.a.createElement("p",null,v("overview.azure_desc")))},y.a.createElement(p.a,{style:st.info,onClick:this.handlePopoverClick}))))),Boolean(P)&&y.a.createElement(y.a.Fragment,null,y.a.createElement("div",{style:st.tabs},this.getTabs(m)),y.a.createElement("div",{style:st.perspective},this.getPerspective()))),y.a.createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section","page-type":"cost-management-overview"},Boolean(T)?y.a.createElement(u.a,{error:T}):Boolean(j)?y.a.createElement(d.a,null):Boolean(f)?y.a.createElement(h.a,null):this.getTabContent(m)))}}));t.default=yt}}]);
//# sourceMappingURL=1feba35379739746775e.bundle.js.map