"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[4050],{80307:(e,t,a)=>{a.d(t,{Z:()=>i});var s=a(48891),n=a(30950);const r={padding:8},o={area:Object.assign({},r),axis:Object.assign({},r),bar:Object.assign({},r),boxplot:Object.assign({},r),candlestick:Object.assign({},r),chart:Object.assign({},r),errorbar:Object.assign({},r),group:Object.assign({},r),legend:{},line:Object.assign({},r),pie:Object.assign({},r),scatter:Object.assign({},r),stack:Object.assign({},r),tooltip:{},voronoi:Object.assign({},r)},i=(0,s.jp)(n.nz.default,null,o)},6279:(e,t,a)=>{a.d(t,{T:()=>s.Z});var s=a(86309)},86847:(e,t,a)=>{a.d(t,{iu:()=>c,j0:()=>h,me:()=>X,V3:()=>ae,Y0:()=>oe,rN:()=>f,EH:()=>D,mZ:()=>L,Nd:()=>he,I0:()=>pe});var s=a(90154),n=a(92950),r=a.n(n),o=a(74806),i=a(64273),l=a(1156);const c=(0,o.ZP)((({children:e,detailsLink:t,title:a,subTitle:n,status:o})=>r().createElement(s.Card,{className:"reportSummary"},r().createElement(s.CardTitle,null,r().createElement(s.Title,{headingLevel:"h2",size:s.TitleSizes.lg},a),n&&r().createElement("p",{className:"subtitle"},n)),r().createElement(s.CardBody,null,o===l.iF.inProgress?r().createElement(r().Fragment,null,r().createElement(s.Skeleton,{width:"16%"}),r().createElement(s.Skeleton,{className:"chartSkeleton",width:i.N.md}),r().createElement(s.Skeleton,{width:"33%"}),r().createElement(s.Skeleton,{className:"legendSkeleton",width:i.N.xs})):e),t&&r().createElement(s.CardFooter,null,t)))),h=(0,o.ZP)((({children:e,detailsLink:t,status:a,subTitle:n,tabs:o,title:c})=>r().createElement(s.Card,{className:"reportSummary"},r().createElement(s.Grid,{hasGutter:!0},r().createElement(s.GridItem,{xl:8},r().createElement("div",{className:"cost"},r().createElement(s.CardTitle,null,r().createElement(s.Title,{headingLevel:"h2",size:s.TitleSizes.lg},c),n&&r().createElement("p",{className:"subtitle"},n)),r().createElement(s.CardBody,null,a===l.iF.inProgress?r().createElement(r().Fragment,null,r().createElement(s.Skeleton,{width:"16%"}),r().createElement(s.Skeleton,{className:"chartSkeleton",width:i.N.md}),r().createElement(s.Skeleton,{width:"33%"}),r().createElement(s.Skeleton,{className:"legendSkeleton",width:i.N.xs})):e))),r().createElement(s.GridItem,{xl:4},r().createElement("div",{className:"tops"},a!==l.iF.inProgress&&r().createElement(r().Fragment,null,o&&r().createElement(s.CardBody,null,o),t&&r().createElement(s.CardFooter,null,t))))))));var d=a(6456),m=a(97027),u=a(69701),p=a(98485),g=a(30564),C=a(91778);const f=(0,o.ZP)((({chartType:e,computedReportItem:t="cost",computedReportItemValue:a="total",costLabel:n,formatOptions:o,intl:i,report:l,requestFormatOptions:c,requestLabel:h,reportType:f,showTooltip:v=!1,showUnits:D=!1,showUsageFirst:b=!1,units:y,usageFormatOptions:L,usageLabel:S})=>{let E=r().createElement(p.L,null),N=r().createElement(p.L,null),Z=r().createElement(p.L,null),k=r().createElement(p.L,null),w=r().createElement(p.L,null);const O=l&&l.meta&&l.meta.total,x=O&&l.meta.total.cost&&l.meta.total.cost.total,F=O&&l.meta.total.count,P=O&&l.meta.total.supplementary&&l.meta.total.supplementary.total&&l.meta.total.supplementary.total.value,j=O&&l.meta.total.infrastructure&&l.meta.total.infrastructure[a]&&l.meta.total.infrastructure[a].value,R=O&&l.meta.total.request,T=O&&l.meta.total.usage;O&&(E=(0,C.xG)(x?l.meta.total.cost.total.value:0,x?l.meta.total.cost.total.units:"USD",o),N=(0,C.xG)(P?l.meta.total.supplementary.total.value:0,P?l.meta.total.supplementary.total.units:"USD",o),Z=(0,C.xG)(j?l.meta.total.infrastructure[a].value:0,j?l.meta.total.infrastructure[a].units:"USD",o),k=(0,C.bM)(R?l.meta.total.request.value:0,R?l.meta.total.request.units:void 0,c),w=T&&l.meta.total.usage.value>=0?(0,C.bM)(T?l.meta.total.usage.value:0,T?l.meta.total.usage.units:void 0,L):(0,C.bM)(T?l.meta.total.usage:0,F?l.meta.total.count.units:void 0,L));const I=(e=!1)=>{let a=E;t===u.LI.infrastructure?a=Z:t===u.LI.supplementary&&(a=N);const o=e?"Alt":"";return r().createElement("div",{className:"valueContainer"},v?r().createElement(s.Tooltip,{content:i.formatMessage(m.Z.dashboardTotalCostTooltip,{infrastructureCost:Z,supplementaryCost:N}),enableFlip:!0},r().createElement("div",{className:`value${o}`},a)):r().createElement("div",{className:`value${o}`},a),r().createElement("div",{className:"text"},r().createElement("div",null,n)))},M=()=>{if(!S)return null;const e=R?l.meta.total.request.units:void 0,t=i.formatMessage(m.Z.units,{units:(0,C.ZV)(e)});return r().createElement("div",{className:"valueContainer"},r().createElement("span",{className:"value"},k),D&&(y||R&&l.meta.total.request.value>=0)&&r().createElement("span",{className:"units"},t),r().createElement("div",{className:"text"},r().createElement("div",null,h)))},A=()=>{if(!S)return null;const e=T?l.meta.total.usage.units:void 0,t=(0,C.ZV)(y||e),a=i.formatMessage(m.Z.units,{units:t});return r().createElement("div",{className:"valueContainer"},r().createElement("span",{className:"value"},w),D&&(y||T&&l.meta.total.usage.value>=0)&&r().createElement("span",{className:"units"},a),r().createElement("div",{className:"text"},r().createElement("div",null,S)))};return e===g.i.dailyCost||e===g.i.dailyTrend||e===g.i.cost?r().createElement(r().Fragment,null,I(f===d.C.cost)):e===g.i.trend?b?r().createElement(r().Fragment,null,A(),I(f===d.C.cost)):r().createElement(r().Fragment,null,I(f===d.C.cost),A()):e===g.i.usage?b?r().createElement(r().Fragment,null,A(),M()):r().createElement(r().Fragment,null,M(),A()):null}));var v=a(45868);const D=(0,o.ZP)((({intl:e=v.N,label:t,totalValue:a,units:n,value:o,formatOptions:i})=>{const l=e.formatMessage(m.Z.units,{units:(0,C.ZV)(n)}),c=a?o/a*100:0,h=(0,C.rl)(c),d=e.formatMessage(m.Z.percentTotalCost,{percent:h,units:l,value:(0,C.xG)(o,n,i)});return r().createElement("li",{className:"reportSummaryItem"},r().createElement(s.Progress,{label:d,value:Number(c),title:t,size:s.ProgressSize.sm}))}));var b=a(34328);class y extends r().Component{shouldComponentUpdate(e){return e.report!==this.props.report||e.costDistribution!==this.props.costDistribution}getItems(){const{idKey:e,report:t}=this.props,a=(0,b.R)({report:t,idKey:e}),s=a.findIndex((e=>{const t=e.id;if(t&&null!==t)return"Other"===t||"Others"===t}));return-1!==s?[...a.slice(0,s),...a.slice(s+1),a[s]]:a}render(){const{children:e,status:t}=this.props;if(t===l.iF.inProgress)return r().createElement(r().Fragment,null,r().createElement(s.Skeleton,{width:i.N.md}),r().createElement(s.Skeleton,{className:"skeleton",width:i.N.md}),r().createElement(s.Skeleton,{className:"skeleton",width:i.N.md}),r().createElement(s.Skeleton,{className:"skeleton",width:i.N.md}));{const t=this.getItems();return r().createElement("ul",null,e({items:t}))}}}const L=(0,o.ZP)(y);var S=a(21094),E=a(2311),N=a(80469),Z=a(84154),k=a(48629),w=a(52109),O=a(2370),x=a(55855),F=a(80307),P=a(42739),j=a(66852),R=a(21535),T=a(27765),I=a(19960),M=a(84076),A=a(18131),U=a(24656),z=a(84615),V=a(70698),H=a(72021),q=a(21768),Y=a(41534);const B={currentColorScale:[q.CH.value,H.R0.value,V.t6.value,z.S7.value,Y.iM.value],currentCostData:{fill:"none"},currentInfrastructureColorScale:[A.cQ.value,M.iY.value,I.OS.value,T.O6.value,U.DD.value],currentInfrastructureCostData:{fill:"none",strokeDasharray:"3,3"},forecastConeData:{fill:z.S7.value,strokeWidth:0},forecastConeDataColorScale:[z.S7.value],forecastData:{fill:"none"},forecastDataColorScale:[V.t6.value],forecastInfrastructureConeData:{fill:T.O6.value,strokeWidth:0},forecastInfrastructureConeDataColorScale:[T.O6.value],forecastInfrastructureData:{fill:"none"},forecastInfrastructureDataColorScale:[I.OS.value],previousCostData:{fill:"none"},previousInfrastructureCostData:{fill:"none",strokeDasharray:"3,3"},previousColorScale:[R.tN.value,R.tN.value],yAxis:{axisLabel:{padding:15},grid:{stroke:"none"},ticks:{stroke:"none"},tickLabels:{fontSize:0}},xAxis:{axisLabel:{padding:40},grid:{stroke:"none"},ticks:{stroke:"none"}}};class W extends r().Component{constructor(){super(...arguments),this.containerRef=r().createRef(),this.observer=j.Z,this.state={hiddenSeries:new Set,width:0},this.initDatum=()=>{const{currentCostData:e,forecastConeData:t,forecastData:a,previousCostData:s,showForecast:n}=this.props,r=m.Z.chartCostLegendLabel,o=m.Z.chartCostLegendTooltip,i=[{childName:"previousCost",data:s,legendItem:{name:(0,u.uL)(s,r,!0,!0,1,m.Z.chartCostLegendNoDataLabel),symbol:{fill:B.previousColorScale[0],type:"minus"},tooltip:(0,u.ml)(s,o,!1,!1,1)},style:{data:Object.assign(Object.assign({},B.previousCostData),{stroke:B.previousColorScale[0]})}},{childName:"currentCost",data:e,legendItem:{name:(0,u.uL)(e,r,!0,!1,0,m.Z.chartCostLegendNoDataLabel),symbol:{fill:B.currentColorScale[0],type:"minus"},tooltip:(0,u.ml)(e,o,!1,!1)},style:{data:Object.assign(Object.assign({},B.currentCostData),{stroke:B.currentColorScale[0]})}}];n&&(i.push({childName:"forecast",data:a,legendItem:{name:(0,u.uL)(a,m.Z.chartCostForecastLegendLabel,!1,!1,0,m.Z.chartCostForecastLegendNoDataLabel),symbol:{fill:B.forecastDataColorScale[0],type:"minus"},tooltip:(0,u.ml)(a,m.Z.chartCostForecastLegendTooltip,!1,!1)},style:{data:Object.assign(Object.assign({},B.forecastData),{stroke:B.forecastDataColorScale[0]})}}),i.push({childName:"forecastCone",data:t,legendItem:{name:(0,u.uL)(t,m.Z.chartCostForecastConeLegendLabel,!1,!1,0,m.Z.chartCostForecastConeLegendNoDataLabel),symbol:{fill:B.forecastConeDataColorScale[0],type:"triangleLeft"},tooltip:(0,u.ml)(t,m.Z.chartCostForecastConeLegendTooltip,!1,!1)},style:{data:Object.assign(Object.assign({},B.forecastConeData),{stroke:B.forecastConeDataColorScale[0]})}}));const l=this.getCursorVoronoiContainer();this.setState({cursorVoronoiContainer:l,series:i})},this.getAdjustedContainerHeight=()=>{const{adjustContainerHeight:e,height:t,containerHeight:a=t,showForecast:s}=this.props,{width:n}=this.state;let r=a;return e&&(s?n>675&&n<1175?r+=25:n>450&&n<675?r+=50:n<=450&&(r+=75):n>450&&n<725?r+=25:n<=450&&(r+=50)),r},this.getChart=(e,t)=>{const{hiddenSeries:a}=this.state;return r().createElement(S.A,{data:a.has(t)?[{y:null}]:e.data,interpolation:"monotoneX",key:e.childName,name:e.childName,style:e.style})},this.getCursorVoronoiContainer=()=>{const{formatter:e,formatOptions:t}=this.props,a=(0,E.f)("voronoi","cursor");return r().createElement(a,{cursorDimension:"x",labels:({datum:a})=>(0,P.zj)(a,e,t),mouseFollowTooltips:!0,voronoiDimension:"x",voronoiPadding:{bottom:75,left:8,right:8,top:8}})},this.getLegend=()=>{const{name:e=""}=this.props,{hiddenSeries:t,series:a}=this.state;return r().createElement(N.Qk,{data:(0,P.oX)(a,t),height:25,gutter:20,name:`${e}-legend`,responsive:!1})},this.handleLegendClick=e=>{const t=(0,P.nV)(this.state.series,this.state.hiddenSeries,e);this.setState({hiddenSeries:t})},this.handleResize=()=>{const{width:e}=this.state,{clientWidth:t=0}=this.containerRef.current||{};t!==e&&this.setState({width:t})}}componentDidMount(){this.initDatum(),this.observer=(0,P.pP)(this.containerRef.current,this.handleResize)}componentDidUpdate(e){e.currentCostData===this.props.currentCostData&&e.forecastConeData===this.props.forecastConeData&&e.forecastData===this.props.forecastData&&e.previousCostData===this.props.previousCostData||this.initDatum()}componentWillUnmount(){this.observer&&this.observer()}getEvents(){const{name:e=""}=this.props,{hiddenSeries:t,series:a}=this.state;return(0,Z.u)({chartNames:(0,P.bC)(a),isHidden:e=>(0,P.Yt)(t,e),legendName:`${e}-legend`,onLegendClick:e=>this.handleLegendClick(e.index)})}getEndDate(){const{currentCostData:e,forecastData:t,previousCostData:a}=this.props,s=e?(0,x.Z)((0,u.Y_)(e,!0,!0)[1]):0,n=t?(0,x.Z)((0,u.Y_)(t,!0,!0)[1]):0,r=a?(0,x.Z)((0,u.Y_)(a,!0,!0)[1]):0;return s>0||r>0?Math.max(s,n,r):31}render(){const{height:e,intl:t,name:a,padding:n={bottom:50,left:8,right:8,top:8},title:o}=this.props,{cursorVoronoiContainer:i,hiddenSeries:l,series:c,width:h}=this.state,d=(0,P.ge)(c,l),u=this.getEndDate(),p=Math.floor(u/2),g=1+Math.floor(p/2),C=1+p,f=u-Math.floor(p/2),v=i?r().cloneElement(i,{disable:!(0,P.TW)(c,l),labelComponent:r().createElement(k.M,{legendData:(0,P.oX)(c,l,!0),title:e=>t.formatMessage(m.Z.chartDayOfTheMonth,{day:e.x})})}):void 0;return r().createElement(r().Fragment,null,o&&r().createElement(s.Title,{headingLevel:"h3",size:s.TitleSizes.md},o),r().createElement("div",{className:"chartOverride",ref:this.containerRef,style:{height:this.getAdjustedContainerHeight()}},r().createElement("div",{style:{height:e,width:h}},r().createElement(w.k,{containerComponent:v,domain:d,events:this.getEvents(),height:e,legendAllowWrap:!0,legendComponent:this.getLegend(),legendData:(0,P.oX)(c,l),legendPosition:"bottom-left",name:a,padding:n,theme:F.Z,width:h},c&&c.map(((e,t)=>this.getChart(e,t))),r().createElement(O.C,{style:B.xAxis,tickValues:[1,g,C,f,u]}),r().createElement(O.C,{dependentAxis:!0,style:B.yAxis})))))}}const _=(0,o.ZP)(W);const X=e=>{var{chartName:t}=e,a=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(a[s[n]]=e[s[n]])}return a}(e,["chartName"]);return r().createElement("div",{className:"chart"},r().createElement(_,Object.assign({name:t},a)))};var G=a(39727),$=a(74174),Q=a(26383),K=a(82874);const J={currentColorScale:[q.CH.value,H.R0.value,V.t6.value,z.S7.value,Y.iM.value],currentInfrastructureColorScale:[A.cQ.value,M.iY.value,I.OS.value,T.O6.value,U.DD.value],currentInfrastructureCostData:{strokeDasharray:"3,3"},forecastConeDataColorScale:[K.g9.value],forecastDataColorScale:[V.t6.value],forecastInfrastructureConeDataColorScale:[K.g9.value],forecastInfrastructureDataColorScale:[I.OS.value],previousInfrastructureCostData:{strokeDasharray:"3,3"},previousColorScale:[R.tN.value,R.tN.value],yAxis:{axisLabel:{padding:15},grid:{stroke:"none"},ticks:{stroke:"none"},tickLabels:{fontSize:0}},xAxis:{axisLabel:{padding:40},grid:{stroke:"none"},ticks:{stroke:"none"}}};class ee extends r().Component{constructor(){super(...arguments),this.containerRef=r().createRef(),this.observer=j.Z,this.state={hiddenSeries:new Set,width:0},this.initDatum=()=>{const{currentCostData:e,forecastConeData:t,forecastData:a,previousCostData:s,showForecast:n}=this.props,r=m.Z.chartCostLegendLabel,o=m.Z.chartCostLegendTooltip,i=[{childName:"previousCost",data:this.initDatumChildName(s,"previousCost"),legendItem:{name:(0,u.uL)(s,r,!0,!0,1,m.Z.chartCostLegendNoDataLabel),symbol:{fill:J.previousColorScale[0],type:"minus"},tooltip:(0,u.ml)(s,o,!1,!1,1)},isLine:!0,style:{data:{stroke:J.previousColorScale[0]}}},{childName:"currentCost",data:this.initDatumChildName(e,"currentCost"),legendItem:{name:(0,u.uL)(e,r,!0,!1,0,m.Z.chartCostLegendNoDataLabel),symbol:{fill:J.currentColorScale[0],type:"minus"},tooltip:(0,u.ml)(e,o,!1,!1)},isBar:!0,style:{data:{fill:J.currentColorScale[0]}}}];n&&(i.push({childName:"forecast",data:this.initDatumChildName(a,"forecast"),legendItem:{name:(0,u.uL)(a,m.Z.chartCostForecastLegendLabel,!1,!1,0,m.Z.chartCostForecastLegendNoDataLabel),symbol:{fill:J.forecastDataColorScale[0],type:"minus"},tooltip:(0,u.ml)(a,m.Z.chartCostForecastLegendTooltip,!1,!1)},isBar:!0,isForecast:!0,style:{data:{fill:J.forecastDataColorScale[0]}}}),i.push({childName:"forecastCone",data:this.initDatumChildName(t,"forecastCone"),legendItem:{name:(0,u.uL)(t,m.Z.chartCostForecastConeLegendLabel,!1,!1,0,m.Z.chartCostForecastConeLegendNoDataLabel),symbol:{fill:J.forecastConeDataColorScale[0],type:"triangleLeft"},tooltip:(0,u.ml)(t,m.Z.chartCostForecastConeLegendTooltip,!1,!1)},isForecast:!0,isLine:!0,style:{data:{fill:J.forecastConeDataColorScale[0]}}}));const l=this.getCursorVoronoiContainer();this.setState({cursorVoronoiContainer:l,series:i})},this.initDatumChildName=(e,t)=>(e.map((e=>e.childName=t)),e),this.getAdjustedContainerHeight=()=>{const{adjustContainerHeight:e,height:t,containerHeight:a=t,showForecast:s}=this.props,{width:n}=this.state;let r=a;return e&&(s?n>675&&n<1175?r+=25:n>450&&n<675?r+=50:n<=450&&(r+=75):n>450&&n<725?r+=25:n<=450&&(r+=50)),r},this.getChart=(e,t)=>{const{hiddenSeries:a}=this.state;if(!e.isForecast){const s=a.has(t)?[{y:null}]:e.data;if(e.isBar)return r().createElement(G.B,{alignment:"middle",data:s,key:e.childName,name:e.childName,style:e.style});if(e.isLine)return r().createElement($.m,{data:s,key:e.childName,name:e.childName,style:e.style})}return null},this.getForecastBarChart=(e,t)=>{const{hiddenSeries:a}=this.state;if(e.isForecast&&e.isBar){const s=a.has(t)?[{y:null}]:e.data;return r().createElement(G.B,{alignment:"middle",data:s,key:e.childName,name:e.childName,style:e.style})}return null},this.getForecastLineChart=(e,t)=>{const{hiddenSeries:a}=this.state;if(e.isForecast&&e.isLine){const s=a.has(t)?[{y:null}]:e.data;return r().createElement(G.B,{alignment:"middle",barWidth:1,data:s,key:e.childName,name:e.childName,style:e.style})}return null},this.getCursorVoronoiContainer=()=>{const{formatter:e,formatOptions:t}=this.props,a=(0,E.f)("voronoi","cursor");return r().createElement(a,{cursorDimension:"x",labels:({datum:a})=>(0,P.zj)(a,e,t),mouseFollowTooltips:!0,voronoiDimension:"x",voronoiPadding:{bottom:75,left:8,right:8,top:8}})},this.getLegend=()=>{const{name:e=""}=this.props,{hiddenSeries:t,series:a}=this.state;return r().createElement(N.Qk,{data:(0,P.oX)(a,t),height:25,gutter:20,name:`${e}-legend`,responsive:!1})},this.handleLegendClick=e=>{const t=(0,P.nV)(this.state.series,this.state.hiddenSeries,e);this.setState({hiddenSeries:t})},this.handleResize=()=>{const{width:e}=this.state,{clientWidth:t=0}=this.containerRef.current||{};t!==e&&this.setState({width:t})}}componentDidMount(){this.initDatum(),this.observer=(0,P.pP)(this.containerRef.current,this.handleResize)}componentDidUpdate(e){e.currentCostData===this.props.currentCostData&&e.forecastConeData===this.props.forecastConeData&&e.forecastData===this.props.forecastData&&e.previousCostData===this.props.previousCostData||this.initDatum()}componentWillUnmount(){this.observer&&this.observer()}getEndDate(){const{currentCostData:e,forecastData:t,previousCostData:a}=this.props,s=e?(0,x.Z)((0,u.Y_)(e,!0,!0)[1]):0,n=t?(0,x.Z)((0,u.Y_)(t,!0,!0)[1]):0,r=a?(0,x.Z)((0,u.Y_)(a,!0,!0)[1]):0;return s>0||r>0?Math.max(s,n,r):31}getEvents(){const{name:e=""}=this.props,{hiddenSeries:t,series:a}=this.state;return(0,Z.u)({chartNames:(0,P.bC)(a),isDataHidden:e=>(0,P.E0)(a,t,e),isHidden:e=>(0,P.Yt)(t,e),legendName:`${e}-legend`,onLegendClick:e=>this.handleLegendClick(e.index)})}render(){const{height:e,intl:t,name:a,padding:n={bottom:50,left:8,right:8,top:8},title:o}=this.props,{cursorVoronoiContainer:i,hiddenSeries:l,series:c,width:h}=this.state,d=(0,P.ge)(c,l),u=this.getEndDate(),p=Math.floor(u/2),g=1+Math.floor(p/2),C=1+p,f=u-Math.floor(p/2),v=i?r().cloneElement(i,{disable:!(0,P.TW)(c,l),labelComponent:r().createElement(k.M,{legendData:(0,P.oX)(c,l,!0),title:e=>t.formatMessage(m.Z.chartDayOfTheMonth,{day:e.x})})}):void 0;return r().createElement(r().Fragment,null,o&&r().createElement(s.Title,{headingLevel:"h3",size:s.TitleSizes.md},o),r().createElement("div",{className:"chartOverride",ref:this.containerRef,style:{height:this.getAdjustedContainerHeight()}},r().createElement("div",{style:{height:e,width:h}},r().createElement(w.k,{containerComponent:v,domain:d,events:this.getEvents(),height:e,legendAllowWrap:!0,legendComponent:this.getLegend(),legendData:(0,P.oX)(c,l),legendPosition:"bottom-left",name:a,padding:n,theme:F.Z,width:h},c&&c.length>0&&r().createElement(Q.G,{offset:5.5},c.map(((e,t)=>this.getChart(e,t)))),c&&c.length>0&&r().createElement(Q.G,{offset:5.5},c.map(((e,t)=>this.getForecastBarChart(e,t)))),c&&c.length>0&&r().createElement(Q.G,{offset:5.5},c.map(((e,t)=>this.getForecastLineChart(e,t)))),r().createElement(O.C,{style:J.xAxis,tickValues:[1,g,C,f,u]}),r().createElement(O.C,{dependentAxis:!0,style:J.yAxis})))))}}const te=(0,o.ZP)(ee);const ae=e=>{var{chartName:t}=e,a=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(a[s[n]]=e[s[n]])}return a}(e,["chartName"]);return r().createElement("div",{className:"chart"},r().createElement(te,Object.assign({name:t},a)))},se={currentColorScale:[q.CH.value,H.R0.value,V.t6.value,z.S7.value,Y.iM.value],forecastConeDataColorScale:[K.g9.value],forecastDataColorScale:[V.t6.value],itemsPerRow:4,previousColorScale:[R.tN.value,R.tN.value],yAxis:{axisLabel:{padding:15},grid:{stroke:"none"},ticks:{stroke:"none"},tickLabels:{fontSize:0}},xAxis:{axisLabel:{padding:40},grid:{stroke:"none"},ticks:{stroke:"none"}}};class ne extends r().Component{constructor(){super(...arguments),this.containerRef=r().createRef(),this.observer=j.Z,this.state={hiddenSeries:new Set,width:0},this.initDatum=()=>{const{currentData:e,forecastData:t,forecastConeData:a,previousData:s,showForecast:n,showSupplementaryLabel:r=!1,showUsageLegendLabel:o=!1}=this.props,i=o?m.Z.chartUsageLegendLabel:r?m.Z.chartCostSupplementaryLegendLabel:m.Z.chartCostLegendLabel,l=o?m.Z.chartUsageLegendTooltip:r?m.Z.chartCostSupplementaryLegendTooltip:m.Z.chartCostLegendTooltip,c=o?m.Z.chartUsageLegendNoDataLabel:r?m.Z.chartCostSupplementaryLegendNoDataLabel:m.Z.chartCostLegendNoDataLabel,h=[{childName:"previousCost",data:this.initDatumChildName(s,"previousCost"),legendItem:{name:(0,u.uL)(s,i,!0,!0,1,c),symbol:{fill:se.previousColorScale[0],type:"minus"},tooltip:(0,u.ml)(s,l,!1,!1,1)},isBar:!0,style:{data:{fill:se.previousColorScale[0]}}},{childName:"currentCost",data:this.initDatumChildName(e,"currentCost"),legendItem:{name:(0,u.uL)(e,i,!0,!1,0,c),symbol:{fill:se.currentColorScale[0],type:"minus"},tooltip:(0,u.ml)(e,l,!1,!1)},isBar:!0,style:{data:{fill:se.currentColorScale[0]}}}];n&&(h.push({childName:"forecast",data:this.initDatumChildName(t,"forecast"),legendItem:{name:(0,u.uL)(t,m.Z.chartCostForecastLegendLabel,!1,!1,0,m.Z.chartCostForecastLegendNoDataLabel),symbol:{fill:se.forecastDataColorScale[0],type:"minus"},tooltip:(0,u.ml)(t,m.Z.chartCostForecastLegendTooltip,!1,!1)},isBar:!0,isForecast:!0,style:{data:{fill:se.forecastDataColorScale[0]}}}),h.push({childName:"forecastCone",data:this.initDatumChildName(a,"forecastCone"),legendItem:{name:(0,u.uL)(a,m.Z.chartCostForecastConeLegendLabel,!1,!1,0,m.Z.chartCostForecastConeLegendNoDataLabel),symbol:{fill:se.forecastConeDataColorScale[0],type:"minus"},tooltip:(0,u.ml)(a,m.Z.chartCostForecastConeLegendTooltip,!1,!1)},isForecast:!0,isLine:!0,style:{data:{fill:se.forecastConeDataColorScale[0]}}}));const d=this.getCursorVoronoiContainer();this.setState({cursorVoronoiContainer:d,series:h})},this.initDatumChildName=(e,t)=>(e.map((e=>e.childName=t)),e),this.getAdjustedContainerHeight=()=>{const{adjustContainerHeight:e,height:t,containerHeight:a=t,showForecast:s,showSupplementaryLabel:n}=this.props,{width:r}=this.state;let o=a;return e&&s&&r<(n?850:725)&&(o+=25),o},this.getChart=(e,t)=>{const{hiddenSeries:a}=this.state;if(!e.isForecast){const s=a.has(t)?[{y:null}]:e.data;if(e.isBar)return r().createElement(G.B,{alignment:"middle",data:s,key:e.childName,name:e.childName,style:e.style});if(e.isLine)return r().createElement($.m,{data:s,key:e.childName,name:e.childName,style:e.style})}return null},this.getForecastBarChart=(e,t)=>{const{hiddenSeries:a}=this.state;if(e.isForecast&&e.isBar){const s=a.has(t)?[{y:null}]:e.data;return r().createElement(G.B,{alignment:"middle",data:s,key:e.childName,name:e.childName,style:e.style})}return null},this.getForecastLineChart=(e,t)=>{const{hiddenSeries:a}=this.state;if(e.isForecast&&e.isLine){const s=a.has(t)?[{y:null}]:e.data;return r().createElement(G.B,{alignment:"middle",barWidth:1,data:s,key:e.childName,name:e.childName,style:e.style})}return null},this.getCursorVoronoiContainer=()=>{const{formatter:e,formatOptions:t}=this.props,a=(0,E.f)("voronoi","cursor");return r().createElement(a,{cursorDimension:"x",labels:({datum:a})=>(0,P.zj)(a,e,t),mouseFollowTooltips:!0,voronoiDimension:"x",voronoiPadding:{bottom:50,left:8,right:8,top:8}})},this.getLegend=()=>{const{legendItemsPerRow:e,name:t=""}=this.props,{hiddenSeries:a,series:s,width:n}=this.state;return r().createElement(N.Qk,{data:(0,P.oX)(s,a),gutter:20,height:25,itemsPerRow:e,name:`${t}-legend`,orientation:n>150?"horizontal":"vertical"})},this.handleLegendClick=e=>{const t=(0,P.nV)(this.state.series,this.state.hiddenSeries,e);this.setState({hiddenSeries:t})},this.handleResize=()=>{const{width:e}=this.state,{clientWidth:t=0}=this.containerRef.current||{};t!==e&&this.setState({width:t})}}componentDidMount(){this.initDatum(),this.observer=(0,P.pP)(this.containerRef.current,this.handleResize)}componentDidUpdate(e){e.currentData===this.props.currentData&&e.forecastData===this.props.forecastData&&e.forecastConeData===this.props.forecastConeData&&e.previousData===this.props.previousData||this.initDatum()}componentWillUnmount(){this.observer&&this.observer()}getEndDate(){const{currentData:e,forecastData:t,previousData:a}=this.props,s=a?(0,x.Z)((0,u.Y_)(a,!0,!0)[1]):0,n=e?(0,x.Z)((0,u.Y_)(e,!0,!0)[1]):0,r=t?(0,x.Z)((0,u.Y_)(t,!0,!0)[1]):0;return n>0||s>0?Math.max(n,r,s):31}getEvents(){const{name:e=""}=this.props,{hiddenSeries:t,series:a}=this.state;return(0,Z.u)({chartNames:(0,P.bC)(a),isDataHidden:e=>(0,P.E0)(a,t,e),isHidden:e=>(0,P.Yt)(t,e),legendName:`${e}-legend`,onLegendClick:e=>this.handleLegendClick(e.index)})}render(){const{height:e,intl:t,name:a,padding:n={bottom:50,left:8,right:8,top:8},title:o}=this.props,{cursorVoronoiContainer:i,hiddenSeries:l,series:c,width:h}=this.state,d=(0,P.ge)(c,l),u=this.getEndDate(),p=Math.floor(u/2),g=1+Math.floor(p/2),C=1+p,f=u-Math.floor(p/2),v=i?r().cloneElement(i,{disable:!(0,P.TW)(c,l),labelComponent:r().createElement(k.M,{legendData:(0,P.oX)(c,l,!0),title:e=>t.formatMessage(m.Z.chartDayOfTheMonth,{day:e.x})})}):void 0;return r().createElement(r().Fragment,null,o&&r().createElement(s.Title,{headingLevel:"h3",size:s.TitleSizes.md},o),r().createElement("div",{className:"chartOverride",ref:this.containerRef,style:{height:this.getAdjustedContainerHeight()}},r().createElement("div",{style:{height:e,width:h}},r().createElement(w.k,{containerComponent:v,domain:d,events:this.getEvents(),height:e,legendAllowWrap:!0,legendComponent:this.getLegend(),legendData:(0,P.oX)(c,l),legendPosition:"bottom-left",name:a,padding:n,theme:F.Z,width:h},c&&c.length>0&&r().createElement(Q.G,{offset:11},c.map(((e,t)=>this.getChart(e,t)))),c&&c.length>0&&r().createElement(Q.G,{offset:11},r().createElement(G.B,{data:[{y:null}],name:"forcast_spacer"}),c.map(((e,t)=>this.getForecastBarChart(e,t)))),c&&c.length>0&&r().createElement(Q.G,{offset:11},r().createElement(G.B,{data:[{y:null}],name:"forcast_cone_spacer"}),c.map(((e,t)=>this.getForecastLineChart(e,t)))),r().createElement(O.C,{style:se.xAxis,tickValues:[1,g,C,f,u]}),r().createElement(O.C,{dependentAxis:!0,style:se.yAxis})))))}}const re=(0,o.ZP)(ne);const oe=e=>{var{chartName:t}=e,a=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(a[s[n]]=e[s[n]])}return a}(e,["chartName"]);return r().createElement("div",{className:"chart"},r().createElement(re,Object.assign({name:t},a)))},ie={currentColorScale:[q.ZP.value,H.ZP.value,V.ZP.value,z.ZP.value,Y.ZP.value],currentMonthData:{fill:"none"},forecastConeData:{fill:z.ZP.value,strokeWidth:0},forecastConeDataColorScale:[z.ZP.value],forecastData:{fill:"none"},forecastDataColorScale:[V.ZP.value],itemsPerRow:4,previousColorScale:[R.ZP.value,R.ZP.value],previousMonthData:{fill:"none"},yAxis:{axisLabel:{padding:15},grid:{stroke:"none"},ticks:{stroke:"none"},tickLabels:{fontSize:0}},xAxis:{axisLabel:{padding:40},grid:{stroke:"none"},ticks:{stroke:"none"}}};class le extends r().Component{constructor(){super(...arguments),this.containerRef=r().createRef(),this.observer=j.Z,this.state={hiddenSeries:new Set,width:0},this.initDatum=()=>{const{currentData:e,forecastData:t,forecastConeData:a,previousData:s,showForecast:n,showSupplementaryLabel:r=!1,showUsageLegendLabel:o=!1}=this.props,i=o?m.Z.chartUsageLegendLabel:r?m.Z.chartCostSupplementaryLegendLabel:m.Z.chartCostLegendLabel,l=o?m.Z.chartUsageLegendTooltip:r?m.Z.chartCostSupplementaryLegendTooltip:m.Z.chartCostLegendTooltip,c=o?m.Z.chartUsageLegendNoDataLabel:r?m.Z.chartCostSupplementaryLegendNoDataLabel:m.Z.chartCostLegendNoDataLabel,h=[{childName:"previousCost",data:s,legendItem:{name:(0,u.uL)(s,i,!0,!0,1,c),symbol:{fill:ie.previousColorScale[0],type:"minus"},tooltip:(0,u.ml)(s,l,!1,!1,1)},style:{data:Object.assign(Object.assign({},ie.previousMonthData),{stroke:ie.previousColorScale[0]})}},{childName:"currentCost",data:e,legendItem:{name:(0,u.uL)(e,i,!0,!1,0,c),symbol:{fill:ie.currentColorScale[0],type:"minus"},tooltip:(0,u.ml)(e,l,!1,!1)},style:{data:Object.assign(Object.assign({},ie.currentMonthData),{stroke:ie.currentColorScale[0]})}}];n&&(h.push({childName:"forecast",data:t,legendItem:{name:(0,u.uL)(t,m.Z.chartCostForecastLegendLabel,!1,!1,0,m.Z.chartCostForecastLegendNoDataLabel),symbol:{fill:ie.forecastDataColorScale[0],type:"minus"},tooltip:(0,u.ml)(t,m.Z.chartCostForecastLegendTooltip,!1,!1)},style:{data:Object.assign(Object.assign({},ie.forecastData),{stroke:ie.forecastDataColorScale[0]})}}),h.push({childName:"forecastCone",data:a,legendItem:{name:(0,u.uL)(a,m.Z.chartCostForecastConeLegendLabel,!1,!1,0,m.Z.chartCostForecastConeLegendNoDataLabel),symbol:{fill:ie.forecastConeDataColorScale[0],type:"triangleLeft"},tooltip:(0,u.ml)(a,m.Z.chartCostForecastConeLegendTooltip,!1,!1)},style:{data:Object.assign(Object.assign({},ie.forecastConeData),{stroke:ie.forecastConeDataColorScale[0]})}}));const d=this.getCursorVoronoiContainer();this.setState({cursorVoronoiContainer:d,series:h})},this.getAdjustedContainerHeight=()=>{const{adjustContainerHeight:e,height:t,containerHeight:a=t,showForecast:s,showSupplementaryLabel:n}=this.props,{width:r}=this.state;let o=a;return e&&s&&r<(n?900:725)&&(o+=25),o},this.getChart=(e,t)=>{const{hiddenSeries:a}=this.state;return r().createElement(S.A,{data:a.has(t)?[{y:null}]:e.data,interpolation:"monotoneX",key:e.childName,name:e.childName,style:e.style})},this.getCursorVoronoiContainer=()=>{const{formatter:e,formatOptions:t}=this.props,a=(0,E.f)("voronoi","cursor");return r().createElement(a,{cursorDimension:"x",labels:({datum:a})=>(0,P.zj)(a,e,t),mouseFollowTooltips:!0,voronoiDimension:"x",voronoiPadding:{bottom:50,left:8,right:8,top:8}})},this.getLegend=()=>{const{name:e="",legendItemsPerRow:t}=this.props,{hiddenSeries:a,series:s,width:n}=this.state;return r().createElement(N.Qk,{data:(0,P.oX)(s,a),gutter:20,height:25,itemsPerRow:t,name:`${e}-legend`,orientation:n>150?"horizontal":"vertical"})},this.handleLegendClick=e=>{const t=(0,P.nV)(this.state.series,this.state.hiddenSeries,e);this.setState({hiddenSeries:t})},this.handleResize=()=>{const{width:e}=this.state,{clientWidth:t=0}=this.containerRef.current||{};t!==e&&this.setState({width:t})}}componentDidMount(){this.initDatum(),this.observer=(0,P.pP)(this.containerRef.current,this.handleResize)}componentDidUpdate(e){e.currentData===this.props.currentData&&e.forecastData===this.props.forecastData&&e.forecastConeData===this.props.forecastConeData&&e.previousData===this.props.previousData||this.initDatum()}componentWillUnmount(){this.observer&&this.observer()}getEndDate(){const{currentData:e,forecastData:t,forecastConeData:a,previousData:s}=this.props,n=s?(0,x.Z)((0,u.Y_)(s,!0,!0)[1]):0,r=e?(0,x.Z)((0,u.Y_)(e,!0,!0)[1]):0,o=t?(0,x.Z)((0,u.Y_)(t,!0,!0)[1]):0,i=a?(0,x.Z)((0,u.Y_)(a,!0,!0)[1]):0;return r>0||n>0?Math.max(r,o,i,n):31}getEvents(){const{name:e=""}=this.props,{hiddenSeries:t,series:a}=this.state;return(0,Z.u)({chartNames:(0,P.bC)(a),isHidden:e=>(0,P.Yt)(t,e),legendName:`${e}-legend`,onLegendClick:e=>this.handleLegendClick(e.index)})}render(){const{height:e,intl:t,name:a,padding:n={bottom:50,left:8,right:8,top:8},title:o}=this.props,{cursorVoronoiContainer:i,hiddenSeries:l,series:c,width:h}=this.state,d=(0,P.ge)(c,l),u=this.getEndDate(),p=Math.floor(u/2),g=i?r().cloneElement(i,{disable:!(0,P.TW)(c,l),labelComponent:r().createElement(k.M,{legendData:(0,P.oX)(c,l,!0),title:e=>t.formatMessage(m.Z.chartDayOfTheMonth,{day:e.x})})}):void 0;return r().createElement(r().Fragment,null,(null==o?void 0:o.length)&&r().createElement(s.Title,{headingLevel:"h3",size:s.TitleSizes.md},o),r().createElement("div",{className:"chartOverride",ref:this.containerRef,style:{height:this.getAdjustedContainerHeight()}},r().createElement("div",{style:{height:e,width:h},"data-testid":"trend-chart-wrapper"},r().createElement(w.k,{containerComponent:g,domain:d,events:this.getEvents(),height:e,legendAllowWrap:!0,legendComponent:this.getLegend(),legendData:(0,P.oX)(c,l),legendPosition:"bottom-left",name:a,padding:n,theme:F.Z,title:o||"Trend Chart",width:h},c&&c.map(((e,t)=>this.getChart(e,t))),r().createElement(O.C,{style:ie.xAxis,tickValues:[1,p,u]}),r().createElement(O.C,{dependentAxis:!0,style:ie.yAxis})))))}}const ce=(0,o.ZP)(le);const he=e=>{var{chartName:t}=e,a=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(a[s[n]]=e[s[n]])}return a}(e,["chartName"]);return r().createElement("div",{className:"chart"},r().createElement(ce,Object.assign({name:t},a)))},de={chartContainer:{marginTop:a(98499).ZP.value},currentRequestData:{data:{fill:"none",stroke:H.ZP.value,strokeDasharray:"3,3"}},currentUsageData:{data:{fill:"none",stroke:q.ZP.value}},itemsPerRow:2,legendColorScale:[R.ZP.value,q.ZP.value,R.ZP.value,H.ZP.value],previousRequestData:{data:{fill:"none",stroke:R.ZP.value,strokeDasharray:"3,3"}},previousUsageData:{data:{fill:"none",stroke:R.ZP.value}},currentColorScale:[q.ZP.value,H.ZP.value,V.ZP.value,z.ZP.value,Y.ZP.value],previousColorScale:[R.ZP.value,R.ZP.value],yAxis:{axisLabel:{padding:15},grid:{stroke:"none"},ticks:{stroke:"none"},tickLabels:{fontSize:0}},xAxis:{axisLabel:{padding:40},grid:{stroke:"none"},ticks:{stroke:"none"}}};class me extends r().Component{constructor(){super(...arguments),this.containerRef=r().createRef(),this.observer=j.Z,this.state={hiddenSeries:new Set,width:0},this.initDatum=()=>{const{currentRequestData:e,currentUsageData:t,previousRequestData:a,previousUsageData:s}=this.props,n=m.Z.chartUsageLegendLabel,r=m.Z.chartUsageLegendTooltip,o=m.Z.chartRequestsLegendLabel,i=m.Z.chartRequestsLegendTooltip,l=[{childName:"previousUsage",data:s,legendItem:{name:(0,u.Fs)(s,n,!0,!0,1,m.Z.chartUsageLegendNoDataLabel),symbol:{fill:de.legendColorScale[0],type:"minus"},tooltip:(0,u.I6)(s,r,!1,!1,1)},style:de.previousUsageData},{childName:"currentUsage",data:t,legendItem:{name:(0,u.Fs)(t,n,!0,!1,0,m.Z.chartUsageLegendNoDataLabel),symbol:{fill:de.legendColorScale[1],type:"minus"},tooltip:(0,u.I6)(t,r,!1,!1)},style:de.currentUsageData},{childName:"previousRequest",data:a,legendItem:{name:(0,u.Fs)(a,o,!0,!0,1,m.Z.chartRequestsLegendNoDataLabel),symbol:{fill:de.legendColorScale[2],type:"dash"},tooltip:(0,u.I6)(a,i,!1,!1,1)},style:de.previousRequestData},{childName:"currentRequest",data:e,legendItem:{name:(0,u.Fs)(e,o,!0,!1,0,m.Z.chartRequestsLegendNoDataLabel),symbol:{fill:de.legendColorScale[3],type:"dash"},tooltip:(0,u.I6)(e,i,!1,!1)},style:de.currentRequestData}],c=this.getCursorVoronoiContainer();this.setState({cursorVoronoiContainer:c,series:l})},this.getAdjustedContainerHeight=()=>{const{adjustContainerHeight:e,height:t,containerHeight:a=t}=this.props,{width:s}=this.state;let n=a;return e&&s<480&&(n+=20),n},this.getChart=(e,t)=>{const{hiddenSeries:a}=this.state;return r().createElement(S.A,{data:a.has(t)?[{y:null}]:e.data,interpolation:"monotoneX",key:e.childName,name:e.childName,style:e.style})},this.getCursorVoronoiContainer=()=>{const{formatter:e,formatOptions:t}=this.props,a=(0,E.f)("voronoi","cursor");return r().createElement(a,{cursorDimension:"x",labels:({datum:a})=>(0,P.zj)(a,e,t),mouseFollowTooltips:!0,voronoiDimension:"x",voronoiPadding:{bottom:75,left:8,right:8,top:8}})},this.getLegend=()=>{const{name:e="",legendItemsPerRow:t}=this.props,{hiddenSeries:a,series:s,width:n}=this.state,o=t||(n>300?de.itemsPerRow:1);return r().createElement(N.Qk,{data:(0,P.oX)(s,a),height:25,gutter:20,itemsPerRow:o,name:`${e}-legend`})},this.handleLegendClick=e=>{const t=(0,P.nV)(this.state.series,this.state.hiddenSeries,e);this.setState({hiddenSeries:t})},this.handleResize=()=>{const{width:e}=this.state,{clientWidth:t=0}=this.containerRef.current||{};t!==e&&this.setState({width:t})}}componentDidMount(){this.initDatum(),this.observer=(0,P.pP)(this.containerRef.current,this.handleResize)}componentDidUpdate(e){e.currentRequestData===this.props.currentRequestData&&e.currentUsageData===this.props.currentUsageData&&e.previousRequestData===this.props.previousRequestData&&e.previousUsageData===this.props.previousUsageData||this.initDatum()}componentWillUnmount(){this.observer&&this.observer()}getEndDate(){const{currentRequestData:e,currentUsageData:t,previousRequestData:a,previousUsageData:s}=this.props,n=e?(0,x.Z)((0,u.Y_)(e,!0,!0)[1]):0,r=t?(0,x.Z)((0,u.Y_)(t,!0,!0)[1]):0,o=a?(0,x.Z)((0,u.Y_)(a,!0,!0)[1]):0,i=s?(0,x.Z)((0,u.Y_)(s,!0,!0)[1]):0;return n>0||r>0||o>0||i>0?Math.max(n,r,o,i):31}getEvents(){const{name:e=""}=this.props,{hiddenSeries:t,series:a}=this.state;return(0,Z.u)({chartNames:(0,P.bC)(a),isHidden:e=>(0,P.Yt)(t,e),legendName:`${e}-legend`,onLegendClick:e=>this.handleLegendClick(e.index)})}render(){const{height:e,intl:t,name:a,padding:n={bottom:75,left:8,right:8,top:8},title:o}=this.props,{cursorVoronoiContainer:i,hiddenSeries:l,series:c,width:h}=this.state,d=(0,P.ge)(c,l),u=this.getEndDate(),p=Math.floor(u/2),g=i?r().cloneElement(i,{disable:!(0,P.TW)(c,l),labelComponent:r().createElement(k.M,{legendData:(0,P.oX)(c,l,!0),title:e=>t.formatMessage(m.Z.chartDayOfTheMonth,{day:e.x})})}):void 0;return r().createElement(r().Fragment,null,(null==o?void 0:o.length)&&r().createElement(s.Title,{headingLevel:"h3",size:s.TitleSizes.md},o),r().createElement("div",{className:"chartOverride",ref:this.containerRef,style:{height:this.getAdjustedContainerHeight()}},r().createElement("div",{style:{height:e,width:h},"data-testid":"usage-chart-wrapper"},r().createElement(w.k,{containerComponent:g,domain:d,events:this.getEvents(),height:e,legendComponent:this.getLegend(),legendData:(0,P.oX)(c,l),legendPosition:"bottom-left",name:a,padding:n,theme:F.Z,title:o||"Usage Chart",width:h},c&&c.map(((e,t)=>this.getChart(e,t))),r().createElement(O.C,{style:de.xAxis,tickValues:[1,p,u]}),r().createElement(O.C,{dependentAxis:!0,style:de.yAxis})))))}}const ue=(0,o.ZP)(me);const pe=e=>{var{chartName:t}=e,a=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(a[s[n]]=e[s[n]])}return a}(e,["chartName"]);return r().createElement("div",{className:"chart"},r().createElement(ue,Object.assign({name:t},a)))}},64273:(e,t,a)=>{a.d(t,{N:()=>s});const s={xs:"16%",sm:"33%",md:"66%",lg:"100%"}}}]);
//# sourceMappingURL=../sourcemaps/4050.1bb9a0e55ded7e980d86d43657f53e56.js.map