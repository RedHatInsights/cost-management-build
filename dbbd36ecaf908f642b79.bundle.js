"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[2524],{21679:(e,t,a)=>{a.d(t,{L:()=>o});var s=a(80965),n=a(92950),r=a.n(n);const o=()=>r().createElement("span",{className:"emptyValueContainer"},r().createElement(s.V_,null))},2866:(e,t,a)=>{a.d(t,{iu:()=>l,j0:()=>c,me:()=>Y,V3:()=>J,Y0:()=>se,rN:()=>u,EH:()=>g,mZ:()=>v,Nd:()=>ie,I0:()=>de});var s=a(65834),n=a(92950),r=a.n(n),o=a(74806),i=a(57279);const l=(0,o.ZP)((({children:e,detailsLink:t,title:a,subTitle:n,status:o})=>r().createElement(s.Card,{className:"reportSummary"},r().createElement(s.CardTitle,null,r().createElement(s.Title,{headingLevel:"h2",size:s.TitleSizes.lg},a),Boolean(n)&&r().createElement("p",{className:"subtitle"},n)),r().createElement(s.CardBody,null,1===o?r().createElement(r().Fragment,null,r().createElement(s.Skeleton,{width:"16%"}),r().createElement(s.Skeleton,{className:"chartSkeleton",width:i.N.md}),r().createElement(s.Skeleton,{width:"33%"}),r().createElement(s.Skeleton,{className:"legendSkeleton",width:i.N.xs})):e),Boolean(t)&&r().createElement(s.CardFooter,null,t)))),c=(0,o.ZP)((({children:e,detailsLink:t,status:a,subTitle:n,tabs:o,title:l})=>r().createElement(s.Card,{className:"reportSummary"},r().createElement(s.Grid,{hasGutter:!0},r().createElement(s.GridItem,{xl:8},r().createElement("div",{className:"cost"},r().createElement(s.CardTitle,null,r().createElement(s.Title,{headingLevel:"h2",size:s.TitleSizes.lg},l),Boolean(n)&&r().createElement("p",{className:"subtitle"},n)),r().createElement(s.CardBody,null,1===a?r().createElement(r().Fragment,null,r().createElement(s.Skeleton,{width:"16%"}),r().createElement(s.Skeleton,{className:"chartSkeleton",width:i.N.md}),r().createElement(s.Skeleton,{width:"33%"}),r().createElement(s.Skeleton,{className:"legendSkeleton",width:i.N.xs})):e))),r().createElement(s.GridItem,{xl:4},r().createElement("div",{className:"tops"},1!==a&&r().createElement(r().Fragment,null,Boolean(o)&&r().createElement(s.CardBody,null,o),Boolean(t)&&r().createElement(s.CardFooter,null,t))))))));var h=a(93952),d=a(21679),m=a(99291);const u=(0,o.ZP)((({chartType:e,computedReportItem:t="cost",computedReportItemValue:a="total",costLabel:n,formatOptions:o,intl:i,report:l,requestFormatOptions:c,requestLabel:u,reportType:p,showTooltip:g=!1,showUnits:C=!1,showUsageFirst:f=!1,units:v,usageFormatOptions:D,usageLabel:y})=>{let b=r().createElement(d.L,null),L=r().createElement(d.L,null),S=r().createElement(d.L,null),E=r().createElement(d.L,null),N=r().createElement(d.L,null);const Z=l&&l.meta&&l.meta.total,k=Z&&l.meta.total.cost&&l.meta.total.cost.total,w=Z&&l.meta.total.count,x=Z&&l.meta.total.supplementary&&l.meta.total.supplementary.total&&l.meta.total.supplementary.total.value,O=Z&&l.meta.total.infrastructure&&l.meta.total.infrastructure[a]&&l.meta.total.infrastructure[a].value,F=Z&&l.meta.total.request,P=Z&&l.meta.total.usage;Z&&(b=(0,m.xG)(k?l.meta.total.cost.total.value:0,k?l.meta.total.cost.total.units:"USD",o),L=(0,m.xG)(x?l.meta.total.supplementary.total.value:0,x?l.meta.total.supplementary.total.units:"USD",o),S=(0,m.xG)(O?l.meta.total.infrastructure[a].value:0,O?l.meta.total.infrastructure[a].units:"USD",o),E=(0,m.bM)(F?l.meta.total.request.value:0,F?l.meta.total.request.units:void 0,c),N=P&&l.meta.total.usage.value>=0?(0,m.bM)(P?l.meta.total.usage.value:0,P?l.meta.total.usage.units:void 0,D):(0,m.bM)(P?l.meta.total.usage:0,w?l.meta.total.count.units:void 0,D));const R=(e=!1)=>{let a=b;"infrastructure"===t?a=S:"supplementary"===t&&(a=L);const o=e?"Alt":"";return r().createElement("div",{className:"valueContainer"},g?r().createElement(s.Tooltip,{content:i.formatMessage(h.Z.dashboardTotalCostTooltip,{infrastructureCost:S,supplementaryCost:L}),enableFlip:!0},r().createElement("div",{className:`value${o}`},a)):r().createElement("div",{className:`value${o}`},a),r().createElement("div",{className:"text"},r().createElement("div",null,n)))},j=()=>{if(!y)return null;const e=F?l.meta.total.request.units:void 0,t=i.formatMessage(h.Z.units,{units:(0,m.ZV)(e)});return r().createElement("div",{className:"valueContainer"},r().createElement("span",{className:"value"},E),Boolean(C&&(v||F&&l.meta.total.request.value>=0))&&r().createElement("span",{className:"units"},t),r().createElement("div",{className:"text"},r().createElement("div",null,u)))},T=()=>{if(!y)return null;const e=P?l.meta.total.usage.units:void 0,t=(0,m.ZV)(v||e),a=i.formatMessage(h.Z.units,{units:t});return r().createElement("div",{className:"valueContainer"},r().createElement("span",{className:"value"},N),Boolean(C&&(v||P&&l.meta.total.usage.value>=0))&&r().createElement("span",{className:"units"},a),r().createElement("div",{className:"text"},r().createElement("div",null,y)))};return"dailyCost"===e||"dailyTrend"===e||"cost"===e?r().createElement(r().Fragment,null,R("cost"===p)):"trend"===e?f?r().createElement(r().Fragment,null,T(),R("cost"===p)):r().createElement(r().Fragment,null,R("cost"===p),T()):"usage"===e?f?r().createElement(r().Fragment,null,T(),j()):r().createElement(r().Fragment,null,j(),T()):null}));var p=a(32004);const g=(0,o.ZP)((({intl:e=p.N,label:t,totalValue:a,units:n,value:o,formatOptions:i})=>{const l=e.formatMessage(h.Z.units,{units:(0,m.ZV)(n)}),c=a?o/a*100:0,d=(0,m.rl)(c),u=e.formatMessage(h.Z.percentTotalCost,{percent:d,units:l,value:(0,m.xG)(o,n,i)});return r().createElement("li",{className:"reportSummaryItem"},r().createElement(s.Progress,{label:u,value:Number(d),title:t,size:s.ProgressSize.sm}))}));var C=a(31447);class f extends r().Component{shouldComponentUpdate(e){return e.report!==this.props.report}getItems(){const{idKey:e,report:t}=this.props,a=(0,C.R)({report:t,idKey:e}),s=a.findIndex((e=>{const t=e.id;if(t&&null!==t)return"Other"===t||"Others"===t}));return-1!==s?[...a.slice(0,s),...a.slice(s+1),a[s]]:a}render(){const{children:e,status:t}=this.props;if(1===t)return r().createElement(r().Fragment,null,r().createElement(s.Skeleton,{width:i.N.md}),r().createElement(s.Skeleton,{className:"skeleton",width:i.N.md}),r().createElement(s.Skeleton,{className:"skeleton",width:i.N.md}),r().createElement(s.Skeleton,{className:"skeleton",width:i.N.md}));{const t=this.getItems();return r().createElement("ul",null,e({items:t}))}}}const v=(0,o.ZP)(f);a(56804);var D=a(21094),y=a(47280),b=a(80469),L=a(84154),S=a(48629),E=a(52109),N=a(2370),Z=a(55855),k=a(77039),w=a(11001),x=a(29516),O=a(63211),F=a(21535),P=a(27765),R=a(28734),j=a(84076),T=a(18131),M=a(24656),I=a(84615),A=a(70698),U=a(72021),V=a(21768),z=a(41534);const B={currentColorScale:[V.CH.value,U.R0.value,A.t6.value,I.S7.value,z.iM.value],currentCostData:{fill:"none"},currentInfrastructureColorScale:[T.cQ.value,j.iY.value,R.OS.value,P.O6.value,M.DD.value],currentInfrastructureCostData:{fill:"none",strokeDasharray:"3,3"},forecastConeData:{fill:I.S7.value,strokeWidth:0},forecastConeDataColorScale:[I.S7.value],forecastData:{fill:"none"},forecastDataColorScale:[A.t6.value],forecastInfrastructureConeData:{fill:P.O6.value,strokeWidth:0},forecastInfrastructureConeDataColorScale:[P.O6.value],forecastInfrastructureData:{fill:"none"},forecastInfrastructureDataColorScale:[R.OS.value],previousCostData:{fill:"none"},previousInfrastructureCostData:{fill:"none",strokeDasharray:"3,3"},previousColorScale:[F.tN.value,F.tN.value],yAxis:{axisLabel:{padding:15},grid:{stroke:"none"},ticks:{stroke:"none"},tickLabels:{fontSize:0}},xAxis:{axisLabel:{padding:40},grid:{stroke:"none"},ticks:{stroke:"none"}}};class H extends r().Component{constructor(){super(...arguments),this.containerRef=r().createRef(),this.observer=O.Z,this.state={hiddenSeries:new Set,width:0},this.initDatum=()=>{const{currentCostData:e,forecastConeData:t,forecastData:a,previousCostData:s,showForecast:n}=this.props,r=h.Z.chartCostLegendLabel,o=h.Z.chartCostLegendTooltip,i=[{childName:"previousCost",data:s,legendItem:{name:(0,w.uL)(s,r,!0,!0,1,h.Z.chartCostLegendNoDataLabel),symbol:{fill:B.previousColorScale[0],type:"minus"},tooltip:(0,w.uL)(s,o,!1,!1,1)},style:{data:Object.assign(Object.assign({},B.previousCostData),{stroke:B.previousColorScale[0]})}},{childName:"currentCost",data:e,legendItem:{name:(0,w.uL)(e,r,!0,!1,0,h.Z.chartCostLegendNoDataLabel),symbol:{fill:B.currentColorScale[0],type:"minus"},tooltip:(0,w.uL)(e,o,!1,!1)},style:{data:Object.assign(Object.assign({},B.currentCostData),{stroke:B.currentColorScale[0]})}}];n&&(i.push({childName:"forecast",data:a,legendItem:{name:(0,w.uL)(a,h.Z.chartCostForecastLegendLabel,!1,!1,0,h.Z.chartCostForecastLegendNoDataLabel),symbol:{fill:B.forecastDataColorScale[0],type:"minus"},tooltip:(0,w.uL)(a,h.Z.chartCostForecastLegendTooltip,!1,!1)},style:{data:Object.assign(Object.assign({},B.forecastData),{stroke:B.forecastDataColorScale[0]})}}),i.push({childName:"forecastCone",data:t,legendItem:{name:(0,w.uL)(t,h.Z.chartCostForecastConeLegendLabel,!1,!1,0,h.Z.chartCostForecastConeLegendNoDataLabel),symbol:{fill:B.forecastConeDataColorScale[0],type:"triangleLeft"},tooltip:(0,w.uL)(t,h.Z.chartCostForecastConeLegendTooltip,!1,!1)},style:{data:Object.assign(Object.assign({},B.forecastConeData),{stroke:B.forecastConeDataColorScale[0]})}}));const l=this.getCursorVoronoiContainer();this.setState({cursorVoronoiContainer:l,series:i})},this.getAdjustedContainerHeight=()=>{const{adjustContainerHeight:e,height:t,containerHeight:a=t,showForecast:s}=this.props,{width:n}=this.state;let r=a;return e&&(s?n>675&&n<1175?r+=25:n>450&&n<675?r+=50:n<=450&&(r+=75):n>450&&n<725?r+=25:n<=450&&(r+=50)),r},this.getChart=(e,t)=>{const{hiddenSeries:a}=this.state;return r().createElement(D.A,{data:a.has(t)?[{y:null}]:e.data,interpolation:"monotoneX",key:e.childName,name:e.childName,style:e.style})},this.getCursorVoronoiContainer=()=>{const{formatter:e,formatOptions:t}=this.props,a=(0,y.f)("voronoi","cursor");return r().createElement(a,{cursorDimension:"x",labels:({datum:a})=>(0,x.zj)(a,e,t),mouseFollowTooltips:!0,voronoiDimension:"x",voronoiPadding:{bottom:75,left:8,right:8,top:8}})},this.getLegend=()=>{const{name:e=""}=this.props,{hiddenSeries:t,series:a}=this.state;return r().createElement(b.Qk,{data:(0,x.oX)(a,t),height:25,gutter:20,name:`${e}-legend`,responsive:!1})},this.handleLegendClick=e=>{const t=(0,x.nV)(this.state.series,this.state.hiddenSeries,e);this.setState({hiddenSeries:t})},this.handleResize=()=>{const{width:e}=this.state,{clientWidth:t=0}=this.containerRef.current||{};t!==e&&this.setState({width:t})}}componentDidMount(){this.initDatum(),this.observer=(0,x.pP)(this.containerRef.current,this.handleResize)}componentDidUpdate(e){e.currentCostData===this.props.currentCostData&&e.forecastConeData===this.props.forecastConeData&&e.forecastData===this.props.forecastData&&e.previousCostData===this.props.previousCostData||this.initDatum()}componentWillUnmount(){this.observer&&this.observer()}getEvents(){const{name:e=""}=this.props,{hiddenSeries:t,series:a}=this.state;return(0,L.u)({chartNames:(0,x.bC)(a),isHidden:e=>(0,x.Yt)(t,e),legendName:`${e}-legend`,onLegendClick:e=>this.handleLegendClick(e.index)})}getEndDate(){const{currentCostData:e,forecastData:t,previousCostData:a}=this.props,s=e?(0,Z.Z)((0,w.Y_)(e,!0,!0)[1]):0,n=t?(0,Z.Z)((0,w.Y_)(t,!0,!0)[1]):0,r=a?(0,Z.Z)((0,w.Y_)(a,!0,!0)[1]):0;return s>0||r>0?Math.max(s,n,r):31}render(){const{height:e,intl:t,name:a,padding:n={bottom:50,left:8,right:8,top:8},title:o}=this.props,{cursorVoronoiContainer:i,hiddenSeries:l,series:c,width:d}=this.state,m=(0,x.ge)(c,l),u=this.getEndDate(),p=Math.floor(u/2),g=1+Math.floor(p/2),C=1+p,f=u-Math.floor(p/2),v=i?r().cloneElement(i,{disable:!(0,x.TW)(c,l),labelComponent:r().createElement(S.M,{legendData:(0,x.oX)(c,l,!0),title:e=>t.formatMessage(h.Z.chartDayOfTheMonth,{day:e.x})})}):void 0;return r().createElement(r().Fragment,null,o&&r().createElement(s.Title,{headingLevel:"h3",size:"md"},o),r().createElement("div",{className:"chartOverride",ref:this.containerRef,style:{height:this.getAdjustedContainerHeight()}},r().createElement("div",{style:{height:e,width:d}},r().createElement(E.k,{containerComponent:v,domain:m,events:this.getEvents(),height:e,legendAllowWrap:!0,legendComponent:this.getLegend(),legendData:(0,x.oX)(c,l),legendPosition:"bottom-left",name:a,padding:n,theme:k.Z,width:d},c&&c.map(((e,t)=>this.getChart(e,t))),r().createElement(N.C,{style:B.xAxis,tickValues:[1,g,C,f,u]}),r().createElement(N.C,{dependentAxis:!0,style:B.yAxis})))))}}const q=(0,o.ZP)(H);const Y=e=>{var{chartName:t}=e,a=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(a[s[n]]=e[s[n]])}return a}(e,["chartName"]);return r().createElement("div",{className:"chart"},r().createElement(q,Object.assign({name:t},a)))};var W=a(39727),_=a(74174),X=a(26383),G=a(82874);const $={currentColorScale:[V.CH.value,U.R0.value,A.t6.value,I.S7.value,z.iM.value],currentInfrastructureColorScale:[T.cQ.value,j.iY.value,R.OS.value,P.O6.value,M.DD.value],currentInfrastructureCostData:{strokeDasharray:"3,3"},forecastConeDataColorScale:[G.g9.value],forecastDataColorScale:[A.t6.value],forecastInfrastructureConeDataColorScale:[G.g9.value],forecastInfrastructureDataColorScale:[R.OS.value],previousInfrastructureCostData:{strokeDasharray:"3,3"},previousColorScale:[F.tN.value,F.tN.value],yAxis:{axisLabel:{padding:15},grid:{stroke:"none"},ticks:{stroke:"none"},tickLabels:{fontSize:0}},xAxis:{axisLabel:{padding:40},grid:{stroke:"none"},ticks:{stroke:"none"}}};class Q extends r().Component{constructor(){super(...arguments),this.containerRef=r().createRef(),this.observer=O.Z,this.state={hiddenSeries:new Set,width:0},this.initDatum=()=>{const{currentCostData:e,forecastConeData:t,forecastData:a,previousCostData:s,showForecast:n}=this.props,r=h.Z.chartCostLegendLabel,o=h.Z.chartCostLegendTooltip,i=[{childName:"previousCost",data:this.initDatumChildName(s,"previousCost"),legendItem:{name:(0,w.uL)(s,r,!0,!0,1,h.Z.chartCostLegendNoDataLabel),symbol:{fill:$.previousColorScale[0],type:"minus"},tooltip:(0,w.uL)(s,o,!1,!1,1)},isLine:!0,style:{data:{stroke:$.previousColorScale[0]}}},{childName:"currentCost",data:this.initDatumChildName(e,"currentCost"),legendItem:{name:(0,w.uL)(e,r,!0,!1,0,h.Z.chartCostLegendNoDataLabel),symbol:{fill:$.currentColorScale[0],type:"minus"},tooltip:(0,w.uL)(e,o,!1,!1)},isBar:!0,style:{data:{fill:$.currentColorScale[0]}}}];n&&(i.push({childName:"forecast",data:this.initDatumChildName(a,"forecast"),legendItem:{name:(0,w.uL)(a,h.Z.chartCostForecastLegendLabel,!1,!1,0,h.Z.chartCostForecastLegendNoDataLabel),symbol:{fill:$.forecastDataColorScale[0],type:"minus"},tooltip:(0,w.uL)(a,h.Z.chartCostForecastLegendTooltip,!1,!1)},isBar:!0,isForecast:!0,style:{data:{fill:$.forecastDataColorScale[0]}}}),i.push({childName:"forecastCone",data:this.initDatumChildName(t,"forecastCone"),legendItem:{name:(0,w.uL)(t,h.Z.chartCostForecastConeLegendLabel,!1,!1,0,h.Z.chartCostForecastConeLegendNoDataLabel),symbol:{fill:$.forecastConeDataColorScale[0],type:"triangleLeft"},tooltip:(0,w.uL)(t,h.Z.chartCostForecastConeLegendTooltip,!1,!1)},isForecast:!0,isLine:!0,style:{data:{fill:$.forecastConeDataColorScale[0]}}}));const l=this.getCursorVoronoiContainer();this.setState({cursorVoronoiContainer:l,series:i})},this.initDatumChildName=(e,t)=>(e.map((e=>e.childName=t)),e),this.getAdjustedContainerHeight=()=>{const{adjustContainerHeight:e,height:t,containerHeight:a=t,showForecast:s}=this.props,{width:n}=this.state;let r=a;return e&&(s?n>675&&n<1175?r+=25:n>450&&n<675?r+=50:n<=450&&(r+=75):n>450&&n<725?r+=25:n<=450&&(r+=50)),r},this.getChart=(e,t)=>{const{hiddenSeries:a}=this.state;if(!e.isForecast){const s=a.has(t)?[{y:null}]:e.data;if(e.isBar)return r().createElement(W.B,{alignment:"middle",data:s,key:e.childName,name:e.childName,style:e.style});if(e.isLine)return r().createElement(_.m,{data:s,key:e.childName,name:e.childName,style:e.style})}return null},this.getForecastBarChart=(e,t)=>{const{hiddenSeries:a}=this.state;if(e.isForecast&&e.isBar){const s=a.has(t)?[{y:null}]:e.data;return r().createElement(W.B,{alignment:"middle",data:s,key:e.childName,name:e.childName,style:e.style})}return null},this.getForecastLineChart=(e,t)=>{const{hiddenSeries:a}=this.state;if(e.isForecast&&e.isLine){const s=a.has(t)?[{y:null}]:e.data;return r().createElement(W.B,{alignment:"middle",barWidth:1,data:s,key:e.childName,name:e.childName,style:e.style})}return null},this.getCursorVoronoiContainer=()=>{const{formatter:e,formatOptions:t}=this.props,a=(0,y.f)("voronoi","cursor");return r().createElement(a,{cursorDimension:"x",labels:({datum:a})=>(0,x.zj)(a,e,t),mouseFollowTooltips:!0,voronoiDimension:"x",voronoiPadding:{bottom:75,left:8,right:8,top:8}})},this.getLegend=()=>{const{name:e=""}=this.props,{hiddenSeries:t,series:a}=this.state;return r().createElement(b.Qk,{data:(0,x.oX)(a,t),height:25,gutter:20,name:`${e}-legend`,responsive:!1})},this.handleLegendClick=e=>{const t=(0,x.nV)(this.state.series,this.state.hiddenSeries,e);this.setState({hiddenSeries:t})},this.handleResize=()=>{const{width:e}=this.state,{clientWidth:t=0}=this.containerRef.current||{};t!==e&&this.setState({width:t})}}componentDidMount(){this.initDatum(),this.observer=(0,x.pP)(this.containerRef.current,this.handleResize)}componentDidUpdate(e){e.currentCostData===this.props.currentCostData&&e.forecastConeData===this.props.forecastConeData&&e.forecastData===this.props.forecastData&&e.previousCostData===this.props.previousCostData||this.initDatum()}componentWillUnmount(){this.observer&&this.observer()}getEndDate(){const{currentCostData:e,forecastData:t,previousCostData:a}=this.props,s=e?(0,Z.Z)((0,w.Y_)(e,!0,!0)[1]):0,n=t?(0,Z.Z)((0,w.Y_)(t,!0,!0)[1]):0,r=a?(0,Z.Z)((0,w.Y_)(a,!0,!0)[1]):0;return s>0||r>0?Math.max(s,n,r):31}getEvents(){const{name:e=""}=this.props,{hiddenSeries:t,series:a}=this.state;return(0,L.u)({chartNames:(0,x.bC)(a),isDataHidden:e=>(0,x.E0)(a,t,e),isHidden:e=>(0,x.Yt)(t,e),legendName:`${e}-legend`,onLegendClick:e=>this.handleLegendClick(e.index)})}render(){const{height:e,intl:t,name:a,padding:n={bottom:50,left:8,right:8,top:8},title:o}=this.props,{cursorVoronoiContainer:i,hiddenSeries:l,series:c,width:d}=this.state,m=(0,x.ge)(c,l),u=this.getEndDate(),p=Math.floor(u/2),g=1+Math.floor(p/2),C=1+p,f=u-Math.floor(p/2),v=i?r().cloneElement(i,{disable:!(0,x.TW)(c,l),labelComponent:r().createElement(S.M,{legendData:(0,x.oX)(c,l,!0),title:e=>t.formatMessage(h.Z.chartDayOfTheMonth,{day:e.x})})}):void 0;return r().createElement(r().Fragment,null,o&&r().createElement(s.Title,{headingLevel:"h3",size:"md"},o),r().createElement("div",{className:"chartOverride",ref:this.containerRef,style:{height:this.getAdjustedContainerHeight()}},r().createElement("div",{style:{height:e,width:d}},r().createElement(E.k,{containerComponent:v,domain:m,events:this.getEvents(),height:e,legendAllowWrap:!0,legendComponent:this.getLegend(),legendData:(0,x.oX)(c,l),legendPosition:"bottom-left",name:a,padding:n,theme:k.Z,width:d},c&&c.length>0&&r().createElement(X.G,{offset:5.5},c.map(((e,t)=>this.getChart(e,t)))),c&&c.length>0&&r().createElement(X.G,{offset:5.5},c.map(((e,t)=>this.getForecastBarChart(e,t)))),c&&c.length>0&&r().createElement(X.G,{offset:5.5},c.map(((e,t)=>this.getForecastLineChart(e,t)))),r().createElement(N.C,{style:$.xAxis,tickValues:[1,g,C,f,u]}),r().createElement(N.C,{dependentAxis:!0,style:$.yAxis})))))}}const K=(0,o.ZP)(Q);const J=e=>{var{chartName:t}=e,a=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(a[s[n]]=e[s[n]])}return a}(e,["chartName"]);return r().createElement("div",{className:"chart"},r().createElement(K,Object.assign({name:t},a)))},ee={currentColorScale:[V.CH.value,U.R0.value,A.t6.value,I.S7.value,z.iM.value],forecastConeDataColorScale:[G.g9.value],forecastDataColorScale:[A.t6.value],itemsPerRow:4,previousColorScale:[F.tN.value,F.tN.value],yAxis:{axisLabel:{padding:15},grid:{stroke:"none"},ticks:{stroke:"none"},tickLabels:{fontSize:0}},xAxis:{axisLabel:{padding:40},grid:{stroke:"none"},ticks:{stroke:"none"}}};class te extends r().Component{constructor(){super(...arguments),this.containerRef=r().createRef(),this.observer=O.Z,this.state={hiddenSeries:new Set,width:0},this.initDatum=()=>{const{currentData:e,forecastData:t,forecastConeData:a,previousData:s,showForecast:n,showSupplementaryLabel:r=!1,showUsageLegendLabel:o=!1}=this.props,i=o?h.Z.chartUsageLegendLabel:r?h.Z.chartCostSupplementaryLegendLabel:h.Z.chartCostLegendLabel,l=o?h.Z.chartUsageLegendTooltip:r?h.Z.chartCostSupplementaryLegendTooltip:h.Z.chartCostLegendTooltip,c=o?h.Z.chartUsageLegendNoDataLabel:r?h.Z.chartCostSupplementaryLegendNoDataLabel:h.Z.chartCostLegendNoDataLabel,d=[{childName:"previousCost",data:this.initDatumChildName(s,"previousCost"),legendItem:{name:(0,w.uL)(s,i,!0,!0,1,c),symbol:{fill:ee.previousColorScale[0],type:"minus"},tooltip:(0,w.uL)(s,l,!1,!1,1)},isBar:!0,style:{data:{fill:ee.previousColorScale[0]}}},{childName:"currentCost",data:this.initDatumChildName(e,"currentCost"),legendItem:{name:(0,w.uL)(e,i,!0,!1,0,c),symbol:{fill:ee.currentColorScale[0],type:"minus"},tooltip:(0,w.uL)(e,l,!1,!1)},isBar:!0,style:{data:{fill:ee.currentColorScale[0]}}}];n&&(d.push({childName:"forecast",data:this.initDatumChildName(t,"forecast"),legendItem:{name:(0,w.uL)(t,h.Z.chartCostForecastLegendTooltip,!1,!1,0,h.Z.chartCostForecastLegendNoDataLabel),symbol:{fill:ee.forecastDataColorScale[0],type:"minus"},tooltip:(0,w.uL)(t,h.Z.chartCostForecastConeLegendTooltip,!1,!1)},isBar:!0,isForecast:!0,style:{data:{fill:ee.forecastDataColorScale[0]}}}),d.push({childName:"forecastCone",data:this.initDatumChildName(a,"forecastCone"),legendItem:{name:(0,w.uL)(a,h.Z.chartCostForecastConeLegendLabel,!1,!1,0,h.Z.chartCostForecastConeLegendNoDataLabel),symbol:{fill:ee.forecastConeDataColorScale[0],type:"minus"},tooltip:(0,w.uL)(a,h.Z.chartCostForecastConeLegendTooltip,!1,!1)},isForecast:!0,isLine:!0,style:{data:{fill:ee.forecastConeDataColorScale[0]}}}));const m=this.getCursorVoronoiContainer();this.setState({cursorVoronoiContainer:m,series:d})},this.initDatumChildName=(e,t)=>(e.map((e=>e.childName=t)),e),this.getAdjustedContainerHeight=()=>{const{adjustContainerHeight:e,height:t,containerHeight:a=t,showForecast:s,showSupplementaryLabel:n}=this.props,{width:r}=this.state;let o=a;return e&&s&&r<(n?850:700)&&(o+=25),o},this.getChart=(e,t)=>{const{hiddenSeries:a}=this.state;if(!e.isForecast){const s=a.has(t)?[{y:null}]:e.data;if(e.isBar)return r().createElement(W.B,{alignment:"middle",data:s,key:e.childName,name:e.childName,style:e.style});if(e.isLine)return r().createElement(_.m,{data:s,key:e.childName,name:e.childName,style:e.style})}return null},this.getForecastBarChart=(e,t)=>{const{hiddenSeries:a}=this.state;if(e.isForecast&&e.isBar){const s=a.has(t)?[{y:null}]:e.data;return r().createElement(W.B,{alignment:"middle",data:s,key:e.childName,name:e.childName,style:e.style})}return null},this.getForecastLineChart=(e,t)=>{const{hiddenSeries:a}=this.state;if(e.isForecast&&e.isLine){const s=a.has(t)?[{y:null}]:e.data;return r().createElement(W.B,{alignment:"middle",barWidth:1,data:s,key:e.childName,name:e.childName,style:e.style})}return null},this.getCursorVoronoiContainer=()=>{const{formatter:e,formatOptions:t}=this.props,a=(0,y.f)("voronoi","cursor");return r().createElement(a,{cursorDimension:"x",labels:({datum:a})=>(0,x.zj)(a,e,t),mouseFollowTooltips:!0,voronoiDimension:"x",voronoiPadding:{bottom:50,left:8,right:8,top:8}})},this.getLegend=()=>{const{legendItemsPerRow:e,name:t=""}=this.props,{hiddenSeries:a,series:s,width:n}=this.state;return r().createElement(b.Qk,{data:(0,x.oX)(s,a),gutter:20,height:25,itemsPerRow:e,name:`${t}-legend`,orientation:n>150?"horizontal":"vertical"})},this.handleLegendClick=e=>{const t=(0,x.nV)(this.state.series,this.state.hiddenSeries,e);this.setState({hiddenSeries:t})},this.handleResize=()=>{const{width:e}=this.state,{clientWidth:t=0}=this.containerRef.current||{};t!==e&&this.setState({width:t})}}componentDidMount(){this.initDatum(),this.observer=(0,x.pP)(this.containerRef.current,this.handleResize)}componentDidUpdate(e){e.currentData===this.props.currentData&&e.forecastData===this.props.forecastData&&e.forecastConeData===this.props.forecastConeData&&e.previousData===this.props.previousData||this.initDatum()}componentWillUnmount(){this.observer&&this.observer()}getEndDate(){const{currentData:e,forecastData:t,previousData:a}=this.props,s=a?(0,Z.Z)((0,w.Y_)(a,!0,!0)[1]):0,n=e?(0,Z.Z)((0,w.Y_)(e,!0,!0)[1]):0,r=t?(0,Z.Z)((0,w.Y_)(t,!0,!0)[1]):0;return n>0||s>0?Math.max(n,r,s):31}getEvents(){const{name:e=""}=this.props,{hiddenSeries:t,series:a}=this.state;return(0,L.u)({chartNames:(0,x.bC)(a),isDataHidden:e=>(0,x.E0)(a,t,e),isHidden:e=>(0,x.Yt)(t,e),legendName:`${e}-legend`,onLegendClick:e=>this.handleLegendClick(e.index)})}render(){const{height:e,intl:t,name:a,padding:n={bottom:50,left:8,right:8,top:8},title:o}=this.props,{cursorVoronoiContainer:i,hiddenSeries:l,series:c,width:d}=this.state,m=(0,x.ge)(c,l),u=this.getEndDate(),p=Math.floor(u/2),g=1+Math.floor(p/2),C=1+p,f=u-Math.floor(p/2),v=i?r().cloneElement(i,{disable:!(0,x.TW)(c,l),labelComponent:r().createElement(S.M,{legendData:(0,x.oX)(c,l,!0),title:e=>t.formatMessage(h.Z.chartDayOfTheMonth,{day:e.x})})}):void 0;return r().createElement(r().Fragment,null,o&&r().createElement(s.Title,{headingLevel:"h3",size:"md"},o),r().createElement("div",{className:"chartOverride",ref:this.containerRef,style:{height:this.getAdjustedContainerHeight()}},r().createElement("div",{style:{height:e,width:d}},r().createElement(E.k,{containerComponent:v,domain:m,events:this.getEvents(),height:e,legendAllowWrap:!0,legendComponent:this.getLegend(),legendData:(0,x.oX)(c,l),legendPosition:"bottom-left",name:a,padding:n,theme:k.Z,width:d},c&&c.length>0&&r().createElement(X.G,{offset:11},c.map(((e,t)=>this.getChart(e,t)))),c&&c.length>0&&r().createElement(X.G,{offset:11},r().createElement(W.B,{data:[{y:null}],name:"forcast_spacer"}),c.map(((e,t)=>this.getForecastBarChart(e,t)))),c&&c.length>0&&r().createElement(X.G,{offset:11},r().createElement(W.B,{data:[{y:null}],name:"forcast_cone_spacer"}),c.map(((e,t)=>this.getForecastLineChart(e,t)))),r().createElement(N.C,{style:ee.xAxis,tickValues:[1,g,C,f,u]}),r().createElement(N.C,{dependentAxis:!0,style:ee.yAxis})))))}}const ae=(0,o.ZP)(te);const se=e=>{var{chartName:t}=e,a=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(a[s[n]]=e[s[n]])}return a}(e,["chartName"]);return r().createElement("div",{className:"chart"},r().createElement(ae,Object.assign({name:t},a)))},ne={currentColorScale:[V.ZP.value,U.ZP.value,A.ZP.value,I.ZP.value,z.ZP.value],currentMonthData:{fill:"none"},forecastConeData:{fill:I.ZP.value,strokeWidth:0},forecastConeDataColorScale:[I.ZP.value],forecastData:{fill:"none"},forecastDataColorScale:[A.ZP.value],itemsPerRow:4,previousColorScale:[F.ZP.value,F.ZP.value],previousMonthData:{fill:"none"},yAxis:{axisLabel:{padding:15},grid:{stroke:"none"},ticks:{stroke:"none"},tickLabels:{fontSize:0}},xAxis:{axisLabel:{padding:40},grid:{stroke:"none"},ticks:{stroke:"none"}}};class re extends r().Component{constructor(){super(...arguments),this.containerRef=r().createRef(),this.observer=O.Z,this.state={hiddenSeries:new Set,width:0},this.initDatum=()=>{const{currentData:e,forecastData:t,forecastConeData:a,previousData:s,showForecast:n,showSupplementaryLabel:r=!1,showUsageLegendLabel:o=!1}=this.props,i=o?h.Z.chartUsageLegendLabel:r?h.Z.chartCostSupplementaryLegendLabel:h.Z.chartCostLegendLabel,l=o?h.Z.chartUsageLegendTooltip:r?h.Z.chartCostSupplementaryLegendTooltip:h.Z.chartCostLegendTooltip,c=o?h.Z.chartUsageLegendNoDataLabel:r?h.Z.chartCostSupplementaryLegendNoDataLabel:h.Z.chartCostLegendNoDataLabel,d=[{childName:"previousCost",data:s,legendItem:{name:(0,w.uL)(s,i,!0,!0,1,c),symbol:{fill:ne.previousColorScale[0],type:"minus"},tooltip:(0,w.uL)(s,l,!1,!1,1)},style:{data:Object.assign(Object.assign({},ne.previousMonthData),{stroke:ne.previousColorScale[0]})}},{childName:"currentCost",data:e,legendItem:{name:(0,w.uL)(e,i,!0,!1,0,c),symbol:{fill:ne.currentColorScale[0],type:"minus"},tooltip:(0,w.uL)(e,l,!1,!1)},style:{data:Object.assign(Object.assign({},ne.currentMonthData),{stroke:ne.currentColorScale[0]})}}];n&&(d.push({childName:"forecast",data:t,legendItem:{name:(0,w.uL)(t,h.Z.chartCostForecastLegendLabel,!1,!1,0,h.Z.chartCostForecastLegendNoDataLabel),symbol:{fill:ne.forecastDataColorScale[0],type:"minus"},tooltip:(0,w.uL)(t,h.Z.chartCostForecastLegendTooltip,!1,!1)},style:{data:Object.assign(Object.assign({},ne.forecastData),{stroke:ne.forecastDataColorScale[0]})}}),d.push({childName:"forecastCone",data:a,legendItem:{name:(0,w.uL)(a,h.Z.chartCostForecastConeLegendLabel,!1,!1,0,h.Z.chartCostForecastConeLegendNoDataLabel),symbol:{fill:ne.forecastConeDataColorScale[0],type:"triangleLeft"},tooltip:(0,w.uL)(a,h.Z.chartCostForecastConeLegendTooltip,!1,!1)},style:{data:Object.assign(Object.assign({},ne.forecastConeData),{stroke:ne.forecastConeDataColorScale[0]})}}));const m=this.getCursorVoronoiContainer();this.setState({cursorVoronoiContainer:m,series:d})},this.getAdjustedContainerHeight=()=>{const{adjustContainerHeight:e,height:t,containerHeight:a=t,showForecast:s,showSupplementaryLabel:n}=this.props,{width:r}=this.state;let o=a;return e&&s&&r<(n?900:700)&&(o+=25),o},this.getChart=(e,t)=>{const{hiddenSeries:a}=this.state;return r().createElement(D.A,{data:a.has(t)?[{y:null}]:e.data,interpolation:"monotoneX",key:e.childName,name:e.childName,style:e.style})},this.getCursorVoronoiContainer=()=>{const{formatter:e,formatOptions:t}=this.props,a=(0,y.f)("voronoi","cursor");return r().createElement(a,{cursorDimension:"x",labels:({datum:a})=>(0,x.zj)(a,e,t),mouseFollowTooltips:!0,voronoiDimension:"x",voronoiPadding:{bottom:50,left:8,right:8,top:8}})},this.getLegend=()=>{const{name:e="",legendItemsPerRow:t}=this.props,{hiddenSeries:a,series:s,width:n}=this.state;return r().createElement(b.Qk,{data:(0,x.oX)(s,a),gutter:20,height:25,itemsPerRow:t,name:`${e}-legend`,orientation:n>150?"horizontal":"vertical"})},this.handleLegendClick=e=>{const t=(0,x.nV)(this.state.series,this.state.hiddenSeries,e);this.setState({hiddenSeries:t})},this.handleResize=()=>{const{width:e}=this.state,{clientWidth:t=0}=this.containerRef.current||{};t!==e&&this.setState({width:t})}}componentDidMount(){this.initDatum(),this.observer=(0,x.pP)(this.containerRef.current,this.handleResize)}componentDidUpdate(e){e.currentData===this.props.currentData&&e.forecastData===this.props.forecastData&&e.forecastConeData===this.props.forecastConeData&&e.previousData===this.props.previousData||this.initDatum()}componentWillUnmount(){this.observer&&this.observer()}getEndDate(){const{currentData:e,forecastData:t,forecastConeData:a,previousData:s}=this.props,n=s?(0,Z.Z)((0,w.Y_)(s,!0,!0)[1]):0,r=e?(0,Z.Z)((0,w.Y_)(e,!0,!0)[1]):0,o=t?(0,Z.Z)((0,w.Y_)(t,!0,!0)[1]):0,i=a?(0,Z.Z)((0,w.Y_)(a,!0,!0)[1]):0;return r>0||n>0?Math.max(r,o,i,n):31}getEvents(){const{name:e=""}=this.props,{hiddenSeries:t,series:a}=this.state;return(0,L.u)({chartNames:(0,x.bC)(a),isHidden:e=>(0,x.Yt)(t,e),legendName:`${e}-legend`,onLegendClick:e=>this.handleLegendClick(e.index)})}render(){const{height:e,intl:t,name:a,padding:n={bottom:50,left:8,right:8,top:8},title:o}=this.props,{cursorVoronoiContainer:i,hiddenSeries:l,series:c,width:d}=this.state,m=(0,x.ge)(c,l),u=this.getEndDate(),p=Math.floor(u/2),g=i?r().cloneElement(i,{disable:!(0,x.TW)(c,l),labelComponent:r().createElement(S.M,{legendData:(0,x.oX)(c,l,!0),title:e=>t.formatMessage(h.Z.chartDayOfTheMonth,{day:e.x})})}):void 0;return r().createElement(r().Fragment,null,(null==o?void 0:o.length)&&r().createElement(s.Title,{headingLevel:"h3",size:"md"},o),r().createElement("div",{className:"chartOverride",ref:this.containerRef,style:{height:this.getAdjustedContainerHeight()}},r().createElement("div",{style:{height:e,width:d},"data-testid":"trend-chart-wrapper"},r().createElement(E.k,{containerComponent:g,domain:m,events:this.getEvents(),height:e,legendAllowWrap:!0,legendComponent:this.getLegend(),legendData:(0,x.oX)(c,l),legendPosition:"bottom-left",name:a,padding:n,theme:k.Z,title:o||"Trend Chart",width:d},c&&c.map(((e,t)=>this.getChart(e,t))),r().createElement(N.C,{style:ne.xAxis,tickValues:[1,p,u]}),r().createElement(N.C,{dependentAxis:!0,style:ne.yAxis})))))}}const oe=(0,o.ZP)(re);const ie=e=>{var{chartName:t}=e,a=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(a[s[n]]=e[s[n]])}return a}(e,["chartName"]);return r().createElement("div",{className:"chart"},r().createElement(oe,Object.assign({name:t},a)))},le={chartContainer:{marginTop:a(98499).ZP.value},currentRequestData:{data:{fill:"none",stroke:U.ZP.value,strokeDasharray:"3,3"}},currentUsageData:{data:{fill:"none",stroke:V.ZP.value}},itemsPerRow:2,legendColorScale:[F.ZP.value,V.ZP.value,F.ZP.value,U.ZP.value],previousRequestData:{data:{fill:"none",stroke:F.ZP.value,strokeDasharray:"3,3"}},previousUsageData:{data:{fill:"none",stroke:F.ZP.value}},currentColorScale:[V.ZP.value,U.ZP.value,A.ZP.value,I.ZP.value,z.ZP.value],previousColorScale:[F.ZP.value,F.ZP.value],yAxis:{axisLabel:{padding:15},grid:{stroke:"none"},ticks:{stroke:"none"},tickLabels:{fontSize:0}},xAxis:{axisLabel:{padding:40},grid:{stroke:"none"},ticks:{stroke:"none"}}};class ce extends r().Component{constructor(){super(...arguments),this.containerRef=r().createRef(),this.observer=O.Z,this.state={hiddenSeries:new Set,width:0},this.initDatum=()=>{const{currentRequestData:e,currentUsageData:t,previousRequestData:a,previousUsageData:s}=this.props,n=h.Z.chartUsageLegendLabel,r=h.Z.chartUsageLegendTooltip,o=h.Z.chartRequestsLegendLabel,i=h.Z.chartRequestsLegendTooltip,l=[{childName:"previousUsage",data:s,legendItem:{name:(0,w.Fs)(s,n,!0,!0,1,h.Z.chartUsageLegendNoDataLabel),symbol:{fill:le.legendColorScale[0],type:"minus"},tooltip:(0,w.Fs)(s,r,!1,!1,1)},style:le.previousUsageData},{childName:"currentUsage",data:t,legendItem:{name:(0,w.Fs)(t,n,!0,!1,0,h.Z.chartUsageLegendNoDataLabel),symbol:{fill:le.legendColorScale[1],type:"minus"},tooltip:(0,w.Fs)(t,r,!1,!1)},style:le.currentUsageData},{childName:"previousRequest",data:a,legendItem:{name:(0,w.Fs)(a,o,!0,!0,1,h.Z.chartRequestsLegendNoDataLabel),symbol:{fill:le.legendColorScale[2],type:"dash"},tooltip:(0,w.Fs)(a,i,!1,!1,1)},style:le.previousRequestData},{childName:"currentRequest",data:e,legendItem:{name:(0,w.Fs)(e,o,!0,!1,0,h.Z.chartRequestsLegendNoDataLabel),symbol:{fill:le.legendColorScale[3],type:"dash"},tooltip:(0,w.Fs)(e,i,!1,!1)},style:le.currentRequestData}],c=this.getCursorVoronoiContainer();this.setState({cursorVoronoiContainer:c,series:l})},this.getAdjustedContainerHeight=()=>{const{adjustContainerHeight:e,height:t,containerHeight:a=t}=this.props,{width:s}=this.state;let n=a;return e&&s<480&&(n+=20),n},this.getChart=(e,t)=>{const{hiddenSeries:a}=this.state;return r().createElement(D.A,{data:a.has(t)?[{y:null}]:e.data,interpolation:"monotoneX",key:e.childName,name:e.childName,style:e.style})},this.getCursorVoronoiContainer=()=>{const{formatter:e,formatOptions:t}=this.props,a=(0,y.f)("voronoi","cursor");return r().createElement(a,{cursorDimension:"x",labels:({datum:a})=>(0,x.zj)(a,e,t),mouseFollowTooltips:!0,voronoiDimension:"x",voronoiPadding:{bottom:75,left:8,right:8,top:8}})},this.getLegend=()=>{const{name:e="",legendItemsPerRow:t}=this.props,{hiddenSeries:a,series:s,width:n}=this.state,o=t||(n>300?le.itemsPerRow:1);return r().createElement(b.Qk,{data:(0,x.oX)(s,a),height:25,gutter:20,itemsPerRow:o,name:`${e}-legend`})},this.handleLegendClick=e=>{const t=(0,x.nV)(this.state.series,this.state.hiddenSeries,e);this.setState({hiddenSeries:t})},this.handleResize=()=>{const{width:e}=this.state,{clientWidth:t=0}=this.containerRef.current||{};t!==e&&this.setState({width:t})}}componentDidMount(){this.initDatum(),this.observer=(0,x.pP)(this.containerRef.current,this.handleResize)}componentDidUpdate(e){e.currentRequestData===this.props.currentRequestData&&e.currentUsageData===this.props.currentUsageData&&e.previousRequestData===this.props.previousRequestData&&e.previousUsageData===this.props.previousUsageData||this.initDatum()}componentWillUnmount(){this.observer&&this.observer()}getEndDate(){const{currentRequestData:e,currentUsageData:t,previousRequestData:a,previousUsageData:s}=this.props,n=e?(0,Z.Z)((0,w.Y_)(e,!0,!0)[1]):0,r=t?(0,Z.Z)((0,w.Y_)(t,!0,!0)[1]):0,o=a?(0,Z.Z)((0,w.Y_)(a,!0,!0)[1]):0,i=s?(0,Z.Z)((0,w.Y_)(s,!0,!0)[1]):0;return n>0||r>0||o>0||i>0?Math.max(n,r,o,i):31}getEvents(){const{name:e=""}=this.props,{hiddenSeries:t,series:a}=this.state;return(0,L.u)({chartNames:(0,x.bC)(a),isHidden:e=>(0,x.Yt)(t,e),legendName:`${e}-legend`,onLegendClick:e=>this.handleLegendClick(e.index)})}render(){const{height:e,intl:t,name:a,padding:n={bottom:75,left:8,right:8,top:8},title:o}=this.props,{cursorVoronoiContainer:i,hiddenSeries:l,series:c,width:d}=this.state,m=(0,x.ge)(c,l),u=this.getEndDate(),p=Math.floor(u/2),g=i?r().cloneElement(i,{disable:!(0,x.TW)(c,l),labelComponent:r().createElement(S.M,{legendData:(0,x.oX)(c,l,!0),title:e=>t.formatMessage(h.Z.chartDayOfTheMonth,{day:e.x})})}):void 0;return r().createElement(r().Fragment,null,(null==o?void 0:o.length)&&r().createElement(s.Title,{headingLevel:"h3",size:"md"},o),r().createElement("div",{className:"chartOverride",ref:this.containerRef,style:{height:this.getAdjustedContainerHeight()}},r().createElement("div",{style:{height:e,width:d},"data-testid":"usage-chart-wrapper"},r().createElement(E.k,{containerComponent:g,domain:m,events:this.getEvents(),height:e,legendComponent:this.getLegend(),legendData:(0,x.oX)(c,l),legendPosition:"bottom-left",name:a,padding:n,theme:k.Z,title:o||"Usage Chart",width:d},c&&c.map(((e,t)=>this.getChart(e,t))),r().createElement(N.C,{style:le.xAxis,tickValues:[1,p,u]}),r().createElement(N.C,{dependentAxis:!0,style:le.yAxis})))))}}const he=(0,o.ZP)(ce);const de=e=>{var{chartName:t}=e,a=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(a[s[n]]=e[s[n]])}return a}(e,["chartName"]);return r().createElement("div",{className:"chart"},r().createElement(he,Object.assign({name:t},a)))}}}]);
//# sourceMappingURL=dbbd36ecaf908f642b79.bundle.js.map