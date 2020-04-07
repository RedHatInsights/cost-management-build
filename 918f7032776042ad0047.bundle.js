(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{939:function(e,t,r){"use strict";r.r(t);var a=r(1001),s=r(925),c=r(244),o=r(1038),n=r(910),i=r(433),p=r(976),l=r(163),u=r(606),h=r(608),d=r(637),b=r(993),g=r(992),v=r(1),y=r.n(v);const m=({DashboardWidget:e,selectWidgets:t,widgets:r})=>y.a.createElement("div",null,y.a.createElement(b.a,{gutter:"md"},r.map(r=>{const a=t[r];return Boolean(a.details.showHorizontal)?y.a.createElement(g.a,{sm:12,key:r},y.a.createElement(e,{widgetId:r})):y.a.createElement(g.a,{lg:12,xl:6,xl2:4,key:r},y.a.createElement(e,{widgetId:r}))})));var T=r(193),f=r(150),R=r(162),O=r(202),w=r(136),j=r(596),P=r(618),_=r(620),E=r.n(_),S=r(598),F=r.n(S),W=r(659),C=r.n(W),I=r(633),D=r.n(I),k=r(0),K=r.n(k),Q=r(32),L=r.n(Q),z=r(141),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};function U(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var x=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},A=function(e){function t(){var r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,c=Array(s),o=0;o<s;o++)c[o]=arguments[o];return r=a=U(this,e.call.apply(e,[this].concat(c))),a.handleClick=function(e){if(a.props.onClick&&a.props.onClick(e),!e.defaultPrevented&&0===e.button&&!a.props.target&&!x(e)){e.preventDefault();var t=a.context.router.history,r=a.props,s=r.replace,c=r.to;s?t.replace(c):t.push(c)}},U(a,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),r=e.innerRef,a=function(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}(e,["replace","to","innerRef"]);L()(this.context.router,"You should not use <Link> outside a <Router>"),L()(void 0!==t,'You must specify the "to" property');var s=this.context.router.history,c="string"==typeof t?Object(z.b)(t,null,null,s.location):t,o=s.createHref(c);return y.a.createElement("a",H({},a,{onClick:this.handleClick,href:o,ref:r}))},t}(y.a.Component);A.propTypes={onClick:K.a.func,target:K.a.string,replace:K.a.bool,to:K.a.oneOfType([K.a.string,K.a.object]).isRequired,innerRef:K.a.oneOfType([K.a.string,K.a.func])},A.defaultProps={replace:!1},A.contextTypes={router:K.a.shape({history:K.a.shape({push:K.a.func.isRequired,replace:K.a.func.isRequired,createHref:K.a.func.isRequired}).isRequired}).isRequired};var V=A,$=r(593),q=r(161);const B={chartAltHeight:180,chartHeight:80,containerAltHeight:200,containerTrendHeight:150,containerUsageHeight:180},N={tabs:{marginTop:q.global_spacer_2xl.value},tabItems:{marginTop:q.global_spacer_xl.value}};class J extends y.a.Component{constructor(){super(...arguments),this.state={activeTabKey:0},this.buildDetailsLink=(e=>{const{details:t,getIdKeyForTab:r}=this.props,a=r(e);return`${t.viewAllPath}?${Object(w.a)({group_by:{[a]:"*"},order_by:{cost:"desc"}})}`}),this.getChart=((e,t,r=!1)=>{const{chartType:a}=this.props;return"cost"===a?this.getCostChart(e,t,r):"trend"===a?this.getTrendChart(e,t,r):"usage"===a?this.getUsageChart(t):null}),this.getCostChart=((e,t,r=!1)=>{const{currentReport:a,previousReport:s,t:c,trend:o}=this.props,n=this.getUnits(),i=c(o.titleKey,{units:c(`units.${n}`)}),p=o.computedReportItem||"cost",l=o.computedReportItemValue||"total",u=Object(j.g)(a,o.type,"date","infrastructure",l),h=Object(j.g)(s,o.type,"date","infrastructure",l),d=Object(j.g)(a,o.type,"date",p,l),b=Object(j.g)(s,o.type,"date",p,l);return y.a.createElement(P.c,{adjustContainerHeight:r,containerHeight:e,currentCostData:d,currentInfrastructureCostData:u,formatDatumValue:$.b,formatDatumOptions:o.formatOptions,height:t,previousCostData:b,previousInfrastructureCostData:h,title:i})}),this.getTrendChart=((e,t,r=!1)=>{const{currentReport:a,details:s,previousReport:c,t:o,trend:n}=this.props,i=this.getUnits(),p=o(n.titleKey,{units:o(`units.${i}`)}),l=n.computedReportItem||"cost",u=n.computedReportItemValue||"total",h=Object(j.g)(a,n.type,"date",l,u),d=Object(j.g)(c,n.type,"date",l,u);return y.a.createElement(P.g,{adjustContainerHeight:r,containerHeight:e,currentData:h,formatDatumValue:$.b,formatDatumOptions:n.formatOptions,height:t,previousData:d,showUsageLegendLabel:s.showUsageLegendLabel,title:p,units:i})}),this.getUsageChart=(e=>{const{currentReport:t,previousReport:r,t:a,trend:s}=this.props,c=this.getUnits(),o=a(s.titleKey,{units:a(`units.${c}`)}),n=Object(j.g)(t,s.type,"date","request"),i=Object(j.g)(r,s.type,"date","request"),p=Object(j.g)(t,s.type,"date","usage"),l=Object(j.g)(r,s.type,"date","usage");return y.a.createElement(P.h,{containerHeight:B.containerUsageHeight,currentRequestData:n,currentUsageData:p,formatDatumValue:$.b,formatDatumOptions:s.formatOptions,height:e,previousRequestData:i,previousUsageData:l,title:o})}),this.getDetails=(()=>{const{chartType:e,currentReport:t,details:r,trend:a}=this.props,s=a.computedReportItem||"cost",c=a.computedReportItemValue||"total",o=this.getUnits();return y.a.createElement(P.d,{chartType:e,computedReportItem:s,computedReportItemValue:c,costLabel:this.getDetailsLabel(r.costKey,o),formatOptions:r.formatOptions,formatValue:$.b,report:t,requestLabel:this.getDetailsLabel(r.requestKey,o),showTooltip:r.showTooltip,showUnits:r.showUnits,showUsageFirst:r.showUsageFirst,usageFormatOptions:r.usageFormatOptions,usageLabel:this.getDetailsLabel(r.usageKey,o)})}),this.getDetailsLabel=((e,t)=>{const{t:r}=this.props;return e?r(e,{units:r(`units.${t}`)}):void 0}),this.getDetailsLink=(()=>{const{currentTab:e,details:t}=this.props;return t.viewAllPath?y.a.createElement(V,{to:this.buildDetailsLink(e),onClick:this.handleInsightsNavClick},this.getDetailsLinkTitle(e)):null}),this.getDetailsLinkTitle=(e=>{const{getIdKeyForTab:t,t:r}=this.props;return r("group_by.all",{groupBy:t(e)||""})}),this.getHorizontalLayout=(()=>{const{containerAltHeight:e=B.containerAltHeight,chartAltHeight:t=B.chartAltHeight,currentReportFetchStatus:r}=this.props;return y.a.createElement(P.b,{detailsLink:this.getDetailsLink(),status:r,subTitle:this.getSubTitle(),tabs:this.getTabs(),title:this.getTitle()},this.getDetails(),this.getChart(e,t,!0))}),this.getSubTitle=(()=>{const{t:e}=this.props,t=new Date,r=C()(t),a=E()(t,"D"),s=E()(D()(t),"D");return e("aws_dashboard.widget_subtitle",{count:F()(t),endDate:a,month:r,startDate:s})}),this.getTab=((e,t)=>{const{getIdKeyForTab:r,tabsReport:s,tabsReportFetchStatus:c}=this.props,o=r(e);return y.a.createElement(a.a,{eventKey:t,key:`${r(e)}-tab`,title:this.getTabTitle(e)},y.a.createElement("div",{style:N.tabItems},y.a.createElement(P.f,{idKey:o,key:`${o}-items`,report:s,status:c},({items:t})=>t.map(t=>this.getTabItem(e,t)))))}),this.getTabItem=((e,t)=>{const{availableTabs:r,details:a,getIdKeyForTab:s,tabsReport:c,topItems:o,trend:n}=this.props,{activeTabKey:i}=this.state,p=s(e),l=s(r[i]),u=n.computedReportItem||"cost",h=n.computedReportItemValue||"total";let d;const b=c&&c.meta&&c.meta.total;return"usage"===u?b&&c.meta.total.usage&&(d=c.meta.total.usage.value):b&&c.meta.total[u]&&c.meta.total[u][h]&&(d=c.meta.total[u][h].value),l===p?y.a.createElement(P.e,{key:`${t.id}-item`,formatOptions:o.formatOptions,formatValue:$.b,label:t.label?t.label.toString():"",totalValue:d,units:a.units?a.units:this.getUnits(),value:t[u]}):null}),this.getTabs=(()=>{const{availableTabs:e}=this.props;return y.a.createElement(n.a,{isFilled:!0,activeKey:this.state.activeTabKey,onSelect:this.handleTabClick},e.map((e,t)=>this.getTab(e,t)))}),this.getTabTitle=(e=>{const{getIdKeyForTab:t,t:r}=this.props;return r("group_by.top",{groupBy:t(e)||""})}),this.getTitle=(()=>{const{t:e,titleKey:t}=this.props,r=new Date,a=C()(r);return e(t,{endDate:E()(r,"Do"),month:a,startDate:E()(D()(r),"Do")})}),this.getUnits=(()=>{const{currentReport:e,details:t,trend:r}=this.props,a=r.computedReportItem||"cost",s=r.computedReportItemValue||"total";if(t.units)return t.units;let c;const o=e&&e.meta&&e.meta.total;if("usage"===a){c=o&&e.meta.total.usage?Object($.c)(e.meta.total.usage.units):""}else{c=o&&e.meta.total[a]&&e.meta.total[a][s]?Object($.c)(e.meta.total[a][s].units):""}return c}),this.getVerticalLayout=(()=>{const{availableTabs:e,currentReportFetchStatus:t}=this.props;return y.a.createElement(P.a,{detailsLink:this.getDetailsLink(),status:t,subTitle:this.getSubTitle(),title:this.getTitle()},this.getDetails(),this.getChart(B.containerTrendHeight,B.chartHeight),Boolean(e)&&y.a.createElement("div",{style:N.tabs},this.getTabs()))}),this.handleInsightsNavClick=(()=>{const{details:e}=this.props;e.appNavId&&insights.chrome.appNavClick({id:e.appNavId,secondaryNav:!0})}),this.handleTabClick=((e,t)=>{const{availableTabs:r,id:a,updateTab:s}=this.props;s(a,r[t]),this.setState({activeTabKey:t})})}componentDidMount(){const{availableTabs:e,fetchReports:t,id:r,updateTab:a,widgetId:s}=this.props;e&&a(r,e[0]),t(s)}render(){const{details:e}=this.props;return e.showHorizontal?this.getHorizontalLayout():this.getVerticalLayout()}}var Y=r(9);const M=e=>{switch(e){case"services":return"service";case"accounts":return"account";case"regions":return"region";case"instance_type":return"instance_type"}},G=Object(R.a)((e,{widgetId:t})=>{const r=O.c.selectWidget(e,t),a=O.c.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:M,currentQuery:a.current,previousQuery:a.previous,tabsQuery:a.tabs,currentReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,a.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,a.current),previousReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,a.previous),tabsReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,a.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,a.tabs)})}),X={fetchReports:O.a.fetchWidgetReports,updateTab:O.a.changeWidgetTab},Z=Object(T.d)()(Object(f.connect)(G,X)(J)),ee=Object(R.a)(e=>({DashboardWidget:Z,selectWidgets:O.c.selectWidgets(e),widgets:O.c.selectCurrentWidgets(e)}));var te=Object(T.d)()(Object(f.connect)(ee,{})(m)),re=r(201);const ae=e=>{switch(e){case"services":return"service";case"accounts":return"account";case"regions":return"region";case"instance_type":return"instance_type"}},se=Object(R.a)((e,{widgetId:t})=>{const r=re.c.selectWidget(e,t),a=re.c.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:ae,currentQuery:a.current,previousQuery:a.previous,tabsQuery:a.tabs,currentReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,a.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,a.current),previousReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,a.previous),tabsReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,a.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,a.tabs)})}),ce={fetchReports:re.a.fetchWidgetReports,updateTab:re.a.changeWidgetTab},oe=Object(T.d)()(Object(f.connect)(se,ce)(J)),ne=Object(R.a)(e=>({DashboardWidget:oe,selectWidgets:re.c.selectWidgets(e),widgets:re.c.selectCurrentWidgets(e)}));var ie=Object(T.d)()(Object(f.connect)(ne,{})(m)),pe=r(204);const le=e=>{switch(e){case"service_names":return"service_name";case"subscription_guids":return"subscription_guid";case"resource_locations":return"resource_location";case"instance_type":return"instance_type"}},ue=Object(R.a)((e,{widgetId:t})=>{const r=pe.c.selectWidget(e,t),a=pe.c.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:le,currentQuery:a.current,previousQuery:a.previous,tabsQuery:a.tabs,currentReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,a.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,a.current),previousReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,a.previous),tabsReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,a.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,a.tabs)})}),he={fetchReports:pe.a.fetchWidgetReports,updateTab:pe.a.changeWidgetTab},de=Object(T.d)()(Object(f.connect)(ue,he)(J)),be=Object(R.a)(e=>({DashboardWidget:de,selectWidgets:pe.c.selectWidgets(e),widgets:pe.c.selectCurrentWidgets(e)}));var ge=Object(T.d)()(Object(f.connect)(be,{})(m)),ve=r(206);const ye=e=>{switch(e){case"service_names":return"service_name";case"subscription_guids":return"subscription_guid";case"resource_locations":return"resource_location";case"instance_type":return"instance_type"}},me=Object(R.a)((e,{widgetId:t})=>{const r=ve.c.selectWidget(e,t),a=ve.c.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:ye,currentQuery:a.current,previousQuery:a.previous,tabsQuery:a.tabs,currentReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,a.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,a.current),previousReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,a.previous),tabsReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,a.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,a.tabs)})}),Te={fetchReports:ve.a.fetchWidgetReports,updateTab:ve.a.changeWidgetTab},fe=Object(T.d)()(Object(f.connect)(me,Te)(J)),Re=Object(R.a)(e=>({DashboardWidget:fe,selectWidgets:ve.c.selectWidgets(e),widgets:ve.c.selectCurrentWidgets(e)}));var Oe=Object(T.d)()(Object(f.connect)(Re,{})(m)),we=r(153);const je=e=>{switch(e){case"accounts":return"account";case"regions":return"region";case"services":return"service"}},Pe=Object(R.a)((e,{widgetId:t})=>{const r=we.c.selectWidget(e,t),a=we.c.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:je,currentQuery:a.current,previousQuery:a.previous,tabsQuery:a.tabs,currentReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,a.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,a.current),previousReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,a.previous),tabsReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,a.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,a.tabs)})}),_e={fetchReports:we.a.fetchWidgetReports,updateTab:we.a.changeWidgetTab},Ee=Object(T.d)()(Object(f.connect)(Pe,_e)(J)),Se=Object(R.a)(e=>({DashboardWidget:Ee,selectWidgets:we.c.selectWidgets(e),widgets:we.c.selectCurrentWidgets(e)}));var Fe=Object(T.d)()(Object(f.connect)(Se,{})(m)),We=r(200);const Ce=180,Ie=275,De=e=>{switch(e){case"clusters":return"cluster";case"nodes":return"node";case"projects":return"project"}},ke=Object(R.a)((e,{widgetId:t})=>{const r=We.c.selectWidget(e,t),a=We.c.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:De,chartAltHeight:Ce,containerAltHeight:Ie,currentQuery:a.current,previousQuery:a.previous,tabsQuery:a.tabs,currentReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,a.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,a.current),previousReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,a.previous),tabsReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,a.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,a.tabs)})}),Ke={fetchReports:We.a.fetchWidgetReports,updateTab:We.a.changeWidgetTab},Qe=Object(T.d)()(Object(f.connect)(ke,Ke)(J)),Le=Object(R.a)(e=>({DashboardWidget:Qe,selectWidgets:We.c.selectWidgets(e),widgets:We.c.selectCurrentWidgets(e)}));var ze=Object(T.d)()(Object(f.connect)(Le,{})(m)),He=r(205);const Ue=180,xe=275,Ae=e=>{switch(e){case"clusters":return"cluster";case"nodes":return"node";case"projects":return"project"}},Ve=Object(R.a)((e,{widgetId:t})=>{const r=He.c.selectWidget(e,t),a=He.c.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:Ae,chartAltHeight:Ue,containerAltHeight:xe,currentQuery:a.current,previousQuery:a.previous,tabsQuery:a.tabs,currentReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,a.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,a.current),previousReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,a.previous),tabsReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,a.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,a.tabs)})}),$e={fetchReports:He.a.fetchWidgetReports,updateTab:He.a.changeWidgetTab},qe=Object(T.d)()(Object(f.connect)(Ve,$e)(J)),Be=Object(R.a)(e=>({DashboardWidget:qe,selectWidgets:He.c.selectWidgets(e),widgets:He.c.selectCurrentWidgets(e)}));var Ne=Object(T.d)()(Object(f.connect)(Be,{})(m)),Je=r(203);const Ye=e=>{switch(e){case"clusters":return"cluster";case"nodes":return"node";case"projects":return"project"}},Me=Object(R.a)((e,{widgetId:t})=>{const r=Je.c.selectWidget(e,t),a=Je.c.selectWidgetQueries(e,t);return Object.assign(Object.assign({},r),{getIdKeyForTab:Ye,currentQuery:a.current,previousQuery:a.previous,tabsQuery:a.tabs,currentReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,a.current),currentReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,a.current),previousReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,a.previous),tabsReport:Y.c.selectReport(e,r.reportPathsType,r.reportType,a.tabs),tabsReportFetchStatus:Y.c.selectReportFetchStatus(e,r.reportPathsType,r.reportType,a.tabs)})}),Ge={fetchReports:Je.a.fetchWidgetReports,updateTab:Je.a.changeWidgetTab},Xe=Object(T.d)()(Object(f.connect)(Me,Ge)(J)),Ze=Object(R.a)(e=>({DashboardWidget:Xe,selectWidgets:Je.c.selectWidgets(e),widgets:Je.c.selectCurrentWidgets(e)}));var et=Object(T.d)()(Object(f.connect)(Ze,{})(m)),tt=r(19),rt=r(595);const at={info:{marginLeft:q.global_spacer_sm.value,verticalAlign:"middle"},infoIcon:{fontSize:q.global_FontSize_md.value},infoTitle:{fontWeight:"bold"},perspective:{marginBottom:q.global_spacer_lg.value,marginTop:q.global_spacer_lg.value},tabs:{marginTop:q.global_spacer_lg.value}},st=rt["a"]`
  &.pf-c-page__main-section {
    --pf-c-page__main-section--PaddingBottom: 0;
  }
`;var ct=r(1036),ot=r(1034),nt=r(907);const it={perspectiveSelector:{display:"flex",alignItems:"center"},perspectiveLabel:{marginBottom:0,marginRight:q.global_spacer_md.var}};const pt=Object(T.d)()(class extends y.a.Component{constructor(){super(...arguments),this.defaultState={isPerspectiveOpen:!1},this.state=Object.assign({},this.defaultState),this.getDropDownItems=(()=>{const{options:e,t:t}=this.props;return e.map(e=>y.a.createElement(nt.a,{component:"button",key:e.value,onClick:()=>this.handleClick(e.value)},t(e.label)))}),this.getCurrentLabel=(()=>{const{currentItem:e,options:t,t:r}=this.props;let a="";for(const s of t)if(e===s.value){a=r(s.label);break}return a}),this.handleClick=(e=>{const{onItemClicked:t}=this.props;t&&t(e)}),this.handleSelect=(e=>{this.setState({isPerspectiveOpen:!this.state.isPerspectiveOpen})}),this.handleToggle=(e=>{this.setState({isPerspectiveOpen:e})})}render(){const{t:e}=this.props,{isPerspectiveOpen:t}=this.state,r=this.getDropDownItems();return y.a.createElement("div",{style:it.perspectiveSelector},y.a.createElement("label",{style:it.perspectiveLabel},e("overview.perspective.label")),y.a.createElement(ct.a,{onSelect:this.handleSelect,toggle:y.a.createElement(ot.a,{onToggle:this.handleToggle},this.getCurrentLabel()),isOpen:t,dropdownItems:r}))}}),lt=e=>{switch(e){case"infrastructure":return"infrastructure";case"ocp":return"ocp"}},ut=[{label:"overview.perspective.all",value:"all"},{label:"overview.perspective.supplementary",value:"supplementary"}],ht=[{label:"overview.perspective.all_cloud",value:"all_cloud"}],dt=[{label:"overview.perspective.aws",value:"aws"},{label:"overview.perspective.aws_cloud",value:"aws_cloud"}],bt=[{label:"overview.perspective.azure",value:"azure"},{label:"overview.perspective.azure_cloud",value:"azure_cloud"}],gt=[{label:"overview.perspective.ocp_usage",value:"ocp_usage"}];const vt=Object(R.a)(e=>{const t=Object(l.a)(tt.a),r=tt.f.selectProviders(e,"aws",t),a=tt.f.selectProvidersError(e,"aws",t),s=tt.f.selectProvidersFetchStatus(e,"aws",t),c=Object(l.a)(tt.b),o=tt.f.selectProviders(e,"azure",c),n=tt.f.selectProvidersError(e,"azure",c),i=tt.f.selectProvidersFetchStatus(e,"azure",c),p=Object(l.a)(tt.c);return{awsProviders:r,awsProvidersError:a,awsProvidersFetchStatus:s,awsProvidersQueryString:t,azureProviders:o,azureProvidersError:n,azureProvidersFetchStatus:i,azureProvidersQueryString:c,ocpProviders:tt.f.selectProviders(e,"ocp",p),ocpProvidersError:tt.f.selectProvidersError(e,"ocp",p),ocpProvidersFetchStatus:tt.f.selectProvidersFetchStatus(e,"ocp",p),ocpProvidersQueryString:p}});var yt=Object(T.d)()(Object(f.connect)(vt)(class extends y.a.Component{constructor(){super(...arguments),this.defaultState={activeTabKey:0,currentInfrastructurePerspective:ht[0].value,currentOcpPerspective:ut[0].value,showPopover:!1},this.state=Object.assign({},this.defaultState),this.getAvailableTabs=(()=>{const{awsProviders:e,azureProviders:t,ocpProviders:r}=this.props,a=[],s=e&&e.meta&&e.meta.count,c=t&&t.meta&&t.meta.count,o=r&&r.meta&&r.meta.count,n=o&&s;return o&&a.push({contentRef:y.a.createRef(),tab:"ocp"}),(s||c||n)&&a.push({contentRef:y.a.createRef(),tab:"infrastructure"}),a}),this.getCurrentTab=(()=>{const{activeTabKey:e}=this.state;return 0===e?"ocp":"infrastructure"}),this.getPerspective=(()=>{const{awsProviders:e,azureProviders:t,ocpProviders:r}=this.props,{currentInfrastructurePerspective:a,currentOcpPerspective:s}=this.state;let c=s,o=[...ut];if("infrastructure"===this.getCurrentTab()){const s=e&&e.meta&&e.meta.count,n=t&&t.meta&&t.meta.count,i=r&&r.meta&&r.meta.count;c=a,o=[...ht,...s&&dt,...n&&bt,...i&&gt]}return y.a.createElement(pt,{currentItem:c,onItemClicked:this.handlePerspectiveClick,options:o})}),this.getTab=((e,t,r)=>y.a.createElement(a.a,{eventKey:r,key:`${lt(e)}-tab`,tabContentId:`tab-${r}`,tabContentRef:t,title:this.getTabTitle(e)})),this.getTabContent=(e=>e.map((e,t)=>y.a.createElement(i.a,{eventKey:t,key:`${lt(e.tab)}-tabContent`,id:`tab-${t}`,ref:e.contentRef},this.getTabItem(e.tab,t)))),this.getTabItem=((e,t)=>{const{activeTabKey:r,currentInfrastructurePerspective:a,currentOcpPerspective:s}=this.state;if(r!==t)return null;const c=lt(e);return"infrastructure"===c?"all_cloud"===a?y.a.createElement(Fe,null):"aws"===a?y.a.createElement(ie,null):"aws_cloud"===a?y.a.createElement(te,null):"azure"===a?y.a.createElement(Oe,null):"azure_cloud"===a?y.a.createElement(ge,null):"ocp_usage"===a?y.a.createElement(et,null):y.a.createElement(Fe,null):"ocp"===c?"all"===s?y.a.createElement(ze,null):"supplementary"===s?y.a.createElement(Ne,null):y.a.createElement(ze,null):null}),this.getTabs=(e=>{const{activeTabKey:t}=this.state;return y.a.createElement(n.a,{activeKey:t,onSelect:this.handleTabClick},e.map((e,t)=>this.getTab(e.tab,e.contentRef,t)))}),this.getTabTitle=(e=>{const{t:t}=this.props;return"infrastructure"===e?t("overview.infrastructure"):"ocp"===e?t("overview.ocp"):void 0}),this.handlePerspectiveClick=(e=>{const t=this.getCurrentTab();this.setState(Object.assign(Object.assign({},"infrastructure"===t&&{currentInfrastructurePerspective:e}),"ocp"===t&&{currentOcpPerspective:e}))}),this.handlePopoverClick=(()=>{this.setState({show:!this.state.showPopover})}),this.handleTabClick=((e,t)=>{this.setState({activeTabKey:t})})}render(){const{awsProviders:e,awsProvidersError:t,awsProvidersFetchStatus:r,azureProviders:a,azureProvidersError:n,azureProvidersFetchStatus:i,ocpProviders:l,ocpProvidersError:b,ocpProvidersFetchStatus:g,t:v}=this.props,m=this.getAvailableTabs(),T=t||n||b,f=1===r||1===i||1===g,R=void 0!==e&&void 0!==e.meta&&0===e.meta.count&&2===r,O=void 0!==a&&void 0!==a.meta&&0===a.meta.count&&2===i,w=void 0!==l&&void 0!==l.meta&&0===l.meta.count&&2===g,j=R&&O&&w,P=!(T||j||f);return y.a.createElement(y.a.Fragment,null,y.a.createElement("section",{className:`pf-l-page-header pf-c-page-header pf-l-page__main-section pf-c-page__main-section pf-m-light ${P?st:""}`},y.a.createElement("header",{className:"pf-u-display-flex pf-u-justify-content-space-between pf-u-align-items-center"},y.a.createElement(o.a,{size:c.a["2xl"]},v("overview.title"),Boolean(P)&&y.a.createElement("span",{style:at.infoIcon},y.a.createElement(s.a,{"aria-label":"t('ocp_details.supplementary_aria_label')",enableFlip:!0,bodyContent:y.a.createElement(y.a.Fragment,null,y.a.createElement("p",{style:at.infoTitle},v("overview.ocp_cloud")),y.a.createElement("p",null,v("overview.ocp_cloud_desc")),y.a.createElement("br",null),y.a.createElement("p",{style:at.infoTitle},v("overview.ocp")),y.a.createElement("p",null,v("overview.ocp_desc")),y.a.createElement("br",null),y.a.createElement("p",{style:at.infoTitle},v("overview.aws")),y.a.createElement("p",null,v("overview.aws_desc")),y.a.createElement("br",null),y.a.createElement("p",{style:at.infoTitle},v("overview.azure")),y.a.createElement("p",null,v("overview.azure_desc")))},y.a.createElement(p.a,{style:at.info,onClick:this.handlePopoverClick}))))),Boolean(P)&&y.a.createElement(y.a.Fragment,null,y.a.createElement("div",{style:at.tabs},this.getTabs(m)),y.a.createElement("div",{style:at.perspective},this.getPerspective()))),y.a.createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section","page-type":"cost-management-overview"},Boolean(T)?y.a.createElement(u.a,{error:T}):Boolean(j)?y.a.createElement(d.a,null):Boolean(f)?y.a.createElement(h.a,null):this.getTabContent(m)))}}));t.default=yt}}]);
//# sourceMappingURL=918f7032776042ad0047.bundle.js.map