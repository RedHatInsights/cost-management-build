(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{156:function(e,t,r){"use strict";function a(e,t){if("string"==typeof e)return e;return e[t.key]}r.d(t,"a",function(){return o}),r.d(t,"c",function(){return n}),r.d(t,"b",function(){return l});const i=["services","accounts","instance_types","regions"];function o({report:e,idKey:t,labelKey:r=t,sortKey:i="total",sortDirection:o=0}){return function(e,t){const{direction:r=0}=t||{};return[...e].sort((e,i)=>{const o=a(0===r?e:i,t),n=a(0===r?i:e,t);return o>n?-1:o<n?1:0})}(n({report:e,idKey:t,labelKey:r,sortDirection:o,sortKey:i}),{key:i,direction:o})}function n({report:e,idKey:t,labelKey:r=t}){if(!e)return[];const a={},o=e=>{e.values&&e.values.forEach(e=>{const i=e.total,o=e[t];let n=e[r];"account"===r&&e.account_alias&&(n=e.account_alias),a[o]?a[o]=Object.assign({},a[o],{total:a[o].total+i}):a[o]={id:o,total:i,label:n,units:e.units}}),i.forEach(t=>{if(e[t])return e[t].forEach(o)})};return e.data.forEach(o),Object.values(a)}function l(e={}){return e.account?"account":e.instance_type?"instance_type":e.region?"region":e.service?"service":"date"}},164:function(e,t,r){"use strict";r.d(t,"b",function(){return a}),r.d(t,"a",function(){return o});const a=(e,t,r={})=>{const a=t&&t.split("-")[0].toLowerCase(),l=e||0;switch(a){case"usd":return o(l,a,r);case"gb":return n(l,a,r);default:return i(l,a,r)}},i=(e,t,{fractionDigits:r}={})=>e.toFixed(r),o=(e,t,{fractionDigits:r=2}={})=>{let a=e;return e||(a=0),a.toLocaleString("en",{style:"currency",currency:"USD",minimumFractionDigits:r,maximumFractionDigits:r})},n=(e,t,{fractionDigits:r=2}={})=>e.toFixed(r)},181:function(e,t,r){"use strict";r.d(t,"c",function(){return u}),r.d(t,"a",function(){return p}),r.d(t,"b",function(){return h});var a=r(252),i=r.n(a),o=r(250),n=r.n(o),l=r(249),s=r.n(l),c=r(156);function u(e,t=1,r="date"){if(!e)return[];const a=Object(c.a)({report:e,idKey:r,sortKey:"id",sortDirection:1});return 1===t?a.map(e=>d(e.total,e,r)):2===t?a.map(e=>d(e.total,e,r)):a.reduce((e,t)=>{const a=e.length?e[e.length-1].y:0;return[...e,d(a+t.total,t,r)]},[])}function d(e,t,r="date"){return{x:"date"===r?n()(t.id):t.label,y:parseFloat(e.toFixed(2)),key:t.id,name:t.id,units:t.units}}function p(e){const[t,r]=function(e){if(!e.length){const e=new Date;return[s()(e),e]}return[new Date(e[0].key+"T00:00:00"),new Date(e[e.length-1].key+"T00:00:00")]}(e),a=i()(t,"MMM"),o=n()(t),l=n()(r);return`${a} ${n()(t)}${o!==l?` - ${l}`:""}`}function h(e,t,r,a="date"){if(!e.key)return"";if("date"===a){return`${i()(e.key,"MMM D YYYY")}: ${t(e.y,e.units,r)}`}return e.key.toString()}},203:function(e,t,r){"use strict";var a=r(557),i=r(0),o=r.n(i),n=r(125);const l=a.a.create({textInput:{width:"100%",fontSize:n.q.value,paddingTop:n.I.value,paddingRight:n.H.value,paddingBottom:n.I.value,paddingLeft:n.G.value,lineHeight:"24px",outline:0,border:`${n.h.value} solid ${n.d.value}`,":focus":{borderColor:n.e.value}},flat:{border:"none",borderBottom:[n.h.value,"solid",n.d.value].join(" "),":focus":{borderBottom:[n.g.value,"solid",n.e.value].join(" ")}},error:{borderColor:n.x.value,":focus":{borderColor:n.y.value}}});var s=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&(r[a[i]]=e[a[i]])}return r};class c extends o.a.Component{constructor(){super(...arguments),this.handleChange=(e=>{this.props.onChange(e.currentTarget.value,e)}),this.handleKeyPressed=(e=>{this.props.onKeyPress&&"Enter"===e.key&&(e.preventDefault(),this.props.onKeyPress(e))})}render(){const e=this.props,{className:t,isFlat:r,isError:i}=e,n=s(e,["className","isFlat","isError"]);return o.a.createElement("input",Object.assign({},n,{className:Object(a.b)(t,l.textInput,r&&l.flat,i&&l.error),onChange:this.handleChange,onKeyPress:this.handleKeyPressed}))}}r.d(t,"a",function(){return c})},204:function(e,t,r){"use strict";var a=r(557),i=r(0),o=r.n(i);const n=a.a.create({legend:{display:"flex",alignItems:"center"}}),l=({children:e,style:t})=>{const r=Boolean(t)&&Boolean(t.legend)?t.legend:n.legend;return o.a.createElement("div",{className:Object(a.b)(r)},e)};var s=r(125);const c={padding:8,group:{data:{strokeWidth:2,fillOpacity:.4}},tooltipText:{fontSize:"14px",fill:s.m.value},tooltipFlyout:{fill:s.l.value},previousMonth:{data:{fill:s.K.value,stroke:s.J.value}},currentMonth:{data:{fill:s.B.value,stroke:s.C.value}}},u=(a.a.create({reportSummaryTrend:{":not(foo) svg":{overflow:"visible"},":not(foo) text":{fontSize:"12px",length:"12px"}}}),a.a.create({legendItem:{display:"flex",alignItems:"center",fontSize:s.s.value,color:s.k.var,marginRight:s.F.value},color:{height:10,width:10,marginRight:s.G.value,borderWidth:s.h.value,borderStyle:"solid"},currentColor:{backgroundColor:c.currentMonth.data.fill,borderColor:c.currentMonth.data.stroke},previousColor:{backgroundColor:c.previousMonth.data.fill,borderColor:c.previousMonth.data.stroke}}));var d=r(181);const p=({data:e,isCurrent:t,idKey:r="date",index:i,style:n})=>{if(!e||0===e.length)return o.a.createElement("div",null);const l=Boolean(n)&&Boolean(n.legendItem)?n.legendItem:u.legendItem;if("date"===r){const r=Object(d.a)(e);return o.a.createElement("div",{className:Object(a.b)(l)},o.a.createElement("div",{className:Object(a.b)(u.color,t?u.currentColor:u.previousColor)}),r)}return o.a.createElement("div",{key:e[i].key,className:Object(a.b)(l)},o.a.createElement("div",{className:Object(a.b)(u.color,t?u.currentColor:u.previousColor)}),e[i].key)},h=a.a.create({chartTitle:{fontSize:s.s.value,marginBottom:s.G.value}}),g=({children:e})=>o.a.createElement("div",{className:Object(a.b)(h.chartTitle)},e);r.d(t,"a",function(){return l}),r.d(t,"b",function(){return p}),r.d(t,"c",function(){return g})},336:function(e,t,r){"use strict";var a=r(550),i=r(557),o=r(38),n=r(573),l=r(0),s=r.n(l),c=r(30),u=r(26),d=r(35),p=r(9),h=r(164),g=r(156),m=r(125),f=r(200);const y=i.a.create({content:{backgroundColor:m.c.var,paddingTop:m.H.value,height:"100%"},costDetailsPage:{backgroundColor:m.c.var,minHeight:"100%"},header:{display:"flex",justifyContent:"space-between",padding:m.H.var,backgroundColor:m.b.var},headerLeft:{flex:1},headerRight:{display:"flex",justifyContent:"flex-end"},total:{display:"flex",alignItems:"center"},totalLabel:{},totalValue:{marginTop:0,marginBottom:0,marginRight:m.F.var},totalLabelUnit:{fontSize:m.r.value,color:m.j.var},totalLabelDate:{fontSize:m.r.value,color:m.k.var},groupBySelector:{display:"flex",alignItems:"center"},groupBySelectorLabel:{marginBottom:0,marginRight:m.F.var},innerGroupBySelector:{display:"flex",alignItems:"center",fontSize:m.r.value},innerGroupBySelectorLabel:{marginBottom:0,marginRight:m.F.var},toolbarContainer:{backgroundColor:m.c.value}}),b=f["b"]`
  min-height: 100%;
  padding: 0 ${m.H.value};
  background-color: ${m.n.value};
  ${m.j.name}: ${m.m.value};
  ${m.k.name}: ${m.n.value};

  .list-view-pf {
    margin-top: 0;
  }
  .list-group-item:hover {
    background-color: #fff;
    box-shadow: ${m.i.value};
    z-index: 1;
  }

  & * {
    // outline: 1px solid blue;
  }

  .list-group-item-heading,
  strong {
    font-weight: ${m.u.value};
    word-break: break-word;
  }

  .list-group-item-heading {
    font-size: ${m.q.value};
  }

  .list-view-pf-main-info {
    padding: 0;
  }

  .list-view-pf-actions,
  .fa-angle-right {
    margin: 0;
  }

  input[type='checkbox'] {
    margin: 0;
  }

  .list-view-pf-description {
    display: inline-flex;
    margin-left: 0;
    float: none;
  }

  .list-view-pf-additional-info {
    flex: 0 0 40%;
    float: none;
    width: auto;
  }

  .list-view-pf-actions {
    flex: 0 0 25%;
  }

  .list-group-item-header {
    display: flex;
    align-items: center;
  }

  & .list-view-pf-main-info {
    flex: 1;
  }

  .list-view-pf-checkbox {
    border: none;
    margin-top: 0;
    margin-bottom: 0;
    display: inline-flex;
    align-items: center;
  }

  .list-view-pf-expand {
    min-width: 1.5rem;
    margin-top: 0;
    margin-bottom: 0;
    display: inline-flex;
    align-items: center;
  }

  .list-view-pf-additional-info-item {
    align-items: flex-start;
    text-align: left;
    word-break: break-word;
  }

  .list-view-pf-actions .list-view-pf-additional-info-item {
    align-items: flex-end;
  }

  .list-view-pf-additional-info-item strong {
    display: block;
    margin-right: 0;
    margin-bottom: ${m.I.value};
    font-size: ${m.q.value};
  }

  .list-view-pf-additional-info-item span {
    font-size: ${m.s.value};
    color: ${m.z.value};
  }

  .list-group-item {
    padding: ${m.E.value} ${m.H.value};
    border-bottom: 2px solid #f2f2f2;
  }

  .list-group-item:first-child {
    border-top: 0;
    padding: 0.55rem ${m.E.value} ${m.I.value} 3.5rem;

    &,
    .list-group-item-heading,
    .list-view-pf-additional-info-item strong {
      font-size: ${m.r.value};
      font-weight: ${m.t.value};
    }

    .list-view-pf-additional-info {
      transform: translateX(-0.55rem);
    }

    .list-view-pf-actions .list-view-pf-additional-info-item {
      float: right;
    }
  }

  .list-group-item-container {
    padding: ${m.E.value} ${m.D.value}
      ${m.E.value} ${m.D.value};
    margin: ${m.E.value} -${m.H.value} -${m.E.value} -${m.H.value};
    background-image: linear-gradient(
      to right,
      ${m.B.value},
      ${m.B.value} 3px,
      transparent 3px
    );
  }

  .list-group-item.list-view-pf-expand-active {
    background-color: #fff;
  }

  .list-view-pf-expand-active {
    box-shadow: ${m.i.value};
    z-index: 1;
    background-image: linear-gradient(
      to right,
      ${m.B.value},
      ${m.B.value} 3px,
      transparent 3px
    );
  }
`,v=f["b"]`
  margin-left: ${m.H.value};
  margin-right: ${m.H.value};
  background-color: ${m.m.value};
  font-size: ${m.s.value};

  .pf-c-button {
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;
    display: inline-flex;
    align-items: center;
  }

  .fa-download {
    color: ${m.j.value};
    margin-right: ${m.G.value};
    font-size: 1.125rem;
  }

  .toolbar-pf-actions {
    display: flex;
    padding-top: ${m.G.value};
    padding-bottom: ${m.G.value};
  }

  .form-group {
    border: none;
  }

  .btn {
    line-height: 28px;
  }

  .btn-link {
    color: ${m.k.value};
    margin-left: ${m.G.value};
  }

  .btn-link .fa {
    font-size: ${m.p.value};
    color: ${m.j.value};
  }

  .pf-m-plain {
    padding: 0;
    display: flex;
    align-items: center;
  }

  .dropdown .btn {
    border-radius: ${m.f.value};
    background: transparent;
    box-shadow: none;
    border-color: #c7c7c7;
    font-size: ${m.q.value};
    font-weight: 500;
    padding-left: ${m.G.value};
    padding-right: ${m.G.value};
  }

  input[type='text'] {
    border-color: #c7c7c7;
    border-left: none;
    border-radius: 0 ${m.f.value}
      ${m.f.value} 0;
  }

  /* filter results */

  .toolbar-pf-results {
    font-size: ${m.r.value};
    padding: ${m.G.value} 0;
    line-heght: ${m.v.value};
    font-weight: ${m.u.value};

    .col-sm-12 {
      display: flex;
      align-items: center;
    }

    h5 {
      font-size: ${m.r.value};
      font-weight: ${m.u.value};
      line-height: ${m.v.value};
    }

    .filter-pf-active-label {
      line-height: ${m.v.value};
    }

    .list-inline {
      line-height: ${m.v.value};
    }

    .label {
      font-size: ${m.s.value};
      border-radius: ${m.f.value};
      display: inline-flex;
      align-items: center;
    }

    .pf-remove-button {
      display: inline-flex;
      font-weight: ${m.u.value};
    }
  }
`;var S=r(50),E=r(49),x=r(204),_=r(181),F=r(553),$=r(565),k=r(561);const w={padding:{top:8,bottom:8},pie:{data:{strokeWidth:0,fillOpacity:.7,stroke:m.C.value}},tooltipText:{fontSize:m.s.value,fill:m.m.value},tooltipFlyout:{stroke:m.l.value}},C=i.a.create({pieGroup:{display:"flex",float:"left",position:"relative",paddingTop:"2rem",marginLeft:"2rem",left:"-40px"}});i.a.create({legend:{display:"block",alignItems:"center"},legendItem:{display:"flex",alignItems:"center",fontSize:m.s.value,color:m.l.var,marginRight:m.F.value}});class O extends s.a.Component{constructor(){super(...arguments),this.containerRef=s.a.createRef(),this.state={width:0},this.getTooltipLabel=(e=>{const{formatDatumValue:t,formatDatumOptions:r,groupBy:a}=this.props;return Object(_.b)(e,t,r,a)}),this.handleResize=(()=>{this.setState({width:this.containerRef.current.clientWidth})})}shouldComponentUpdate(e){return!!e.data}componentDidMount(){setTimeout(()=>{this.setState({width:this.containerRef.current.clientWidth}),window.addEventListener("resize",this.handleResize)})}componentWillUnmount(){window.removeEventListener("resize",this.handleResize)}render(){const{title:e,height:t,width:r,data:a,groupBy:o}=this.props,n=Object(_.c)(a,2,o),l=n.map(e=>({name:e.name.toString()+" ("+Object(h.a)(e.y)+")",symbol:{type:"square"}}));return s.a.createElement("div",{className:Object(i.b)(C.pieGroup),ref:this.containerRef},Boolean(n.length)&&s.a.createElement(k.a,{padding:w.padding,height:t,width:r,colorScale:"cool",style:w.pie,data:n,labels:this.getTooltipLabel,labelComponent:s.a.createElement(F.a,{cornerRadius:0,flyoutStyle:w.tooltipFlyout})}),s.a.createElement("svg",{width:300,height:250},Boolean(n.length)&&s.a.createElement($.a,{key:e,standalone:!1,colorScale:"cool",x:0,y:0,gutter:20,data:l})),s.a.createElement(x.c,null,e))}}const j="cost";const T=Object(d.a)((e,{queryString:t})=>{return{report:p.c.selectReport(e,"cost",t),reportFetchStatus:p.c.selectReportFetchStatus(e,"cost",t)}}),B={fetchReport:p.a.fetchReport},R=Object(c.c)()(Object(u.b)(T,B)(class extends s.a.Component{componentDidMount(){const{report:e,queryString:t}=this.props;e||this.props.fetchReport(j,t)}componentDidUpdate(e){e.queryString!==this.props.queryString&&this.props.fetchReport(j,this.props.queryString)}render(){const{currentGroupBy:e,report:t}=this.props;return s.a.createElement(O,{height:150,width:400,data:t,formatDatumValue:h.b,groupBy:e})}})),D=[{label:"account",value:"account"},{label:"service",value:"service"},{label:"region",value:"region"}];const N=Object(c.c)()(Object(u.b)()(class extends s.a.Component{constructor(){super(...arguments),this.state={expanded:!1},this.handleExpand=(()=>{const{currentGroupBy:e}=this.state,t=this.getQueryString(e);this.setState({expanded:!0,queryString:t})}),this.handleExpandClose=(()=>{this.setState({expanded:!1})}),this.handleSelectChange=(e=>{const t=e.currentTarget.value,r=this.getQueryString(t);this.setState({currentGroupBy:t,queryString:r})})}getQueryString(e){const{parentQuery:t,item:r}=this.props,a={filter:{time_scope_units:"month",time_scope_value:-1,resolution:"monthly",limit:5},group_by:{[Object(g.b)(t.group_by)]:r.id,[e]:"*"}};return Object(o.a)(a)}getDefaultGroupBy(){const{parentGroupBy:e}=this.props;let t="";switch(e){case"account":t="service";break;case"service":case"region":t="account"}return t}componentDidMount(){const e=this.getDefaultGroupBy(),t=this.getQueryString(e);this.setState({currentGroupBy:e,queryString:t})}componentDidUpdate(e){if(this.props.parentGroupBy!==e.parentGroupBy){const e=this.getDefaultGroupBy();this.setState({currentGroupBy:e})}}render(){const{t:e,item:t,parentGroupBy:r,total:a}=this.props,{currentGroupBy:o,queryString:l}=this.state;return s.a.createElement(n.a.Item,{key:t.label,heading:t.label,checkboxInput:s.a.createElement("input",{type:"checkbox"}),actions:[s.a.createElement(n.a.InfoItem,{key:"1",stacked:!0},s.a.createElement("strong",null,Object(h.a)(t.total)),s.a.createElement("span",null,(t.total/a*100).toFixed(2),e("percent_of_cost")))],onExpand:this.handleExpand,onExpandClose:this.handleExpandClose},s.a.createElement(S.a,null,s.a.createElement(E.a,null,s.a.createElement("div",null,s.a.createElement("div",{className:Object(i.b)(y.innerGroupBySelector)},s.a.createElement("label",{className:Object(i.b)(y.innerGroupBySelectorLabel)},e("group_by.label"),":"),s.a.createElement("select",{id:t.label?t.label.toString():"",onChange:this.handleSelectChange},D.map(t=>{if(t.value!==r)return s.a.createElement("option",{key:t.value,value:t.value},e(`group_by.values.${t.label}`))}))),Boolean(o)&&Boolean(l)&&s.a.createElement(R,{queryString:l,currentGroupBy:o})))))}}));var z=r(558),G=r(203),I=r(563),A=r(568),q=r(556),L=r(569),K=r(2);function M(e,t){let r=JSON.stringify(e),a=JSON.stringify(t);return r||(r=""),a||(a=""),r.split("").sort().join("")===a.split("").sort().join("")}class V extends s.a.Component{constructor(){super(...arguments),this.state={activeFilters:[],currentFilterType:this.props.filterFields[0],currentValue:"",currentSortType:this.props.sortField,isSortNumeric:this.props.sortField.isNumeric,isSortAscending:!(this.props.query&&"desc"===this.props.query.order_by[this.props.sortField.id]),currentViewType:"list",filterCategory:void 0,report:void 0},this.addQuery=(e=>{const t=[];Object.keys(e.group_by).forEach(r=>{if("*"!==e.group_by[r])if(Array.isArray(e.group_by[r]))e.group_by[r].forEach(e=>{const a=r.id||r,i=this.getFilter(a,e);t.push(i)});else{const a=r.id||r,i=this.getFilter(a,e.group_by[r]);t.push(i)}}),this.setState({activeFilters:t})}),this.clearFilters=(e=>{const{currentFilterType:t}=this.state;this.setState({activeFilters:[]}),this.props.onFilterRemoved(t.id,""),e.preventDefault()}),this.filterAdded=((e,t)=>{const{currentFilterType:r}=this.state,a=this.getAccountId(e.id,t);this.props.onFilterAdded(r.id,a)}),this.getAccountAlias=((e,t)=>{const{report:r}=this.state;let a=t;return r&&r.data&&"account"===e&&r.data.forEach(e=>{e.accounts.forEach(e=>{e.values.forEach(e=>{if(e.account===t&&e.account_alias)return a=e.account_alias,!1})})}),a}),this.getAccountId=((e,t)=>{const{report:r}=this.state;let a=t;return r&&r.data&&"account"===e&&r.data.forEach(e=>{e.accounts.forEach(e=>{e.values.forEach(e=>{if(e.account_alias===t&&e.account)return a=e.account,!1})})}),a}),this.getFilter=((e,t)=>{const{currentFilterType:r}=this.state,a=this.getAccountAlias(e,t),i=this.getFilterLabel(e,a);return{field:r.id,label:i,value:t}}),this.getFilterLabel=((e,t)=>{let r="";return r=(r=e.title?e.title:e).charAt(0).toUpperCase()+r.slice(1)+": ",t.filterCategory?r+=`${t.filterCategory.title||t.filterCategory}-${t.filterValue.title||t.filterValue}`:t.title?r+=t.title:r+=t,r}),this.onValueKeyPress=(e=>{const{currentValue:t,currentFilterType:r}=this.state;"Enter"===e.key&&t&&t.length>0&&(this.setState({currentValue:""}),this.filterAdded(r,t),e.stopPropagation(),e.preventDefault())}),this.removeFilter=(e=>{const{activeFilters:t}=this.state,r=t.indexOf(e);if(r>-1){const a=[...t.slice(0,r),...t.slice(r+1)];this.setState({activeFilters:a}),this.props.onFilterRemoved(e.field,e.value)}}),this.selectFilterType=(e=>{const{currentFilterType:t}=this.state;t!==e&&this.setState({currentValue:"",currentFilterType:e})}),this.toggleCurrentSortDirection=(()=>{const{currentSortType:e,isSortAscending:t}=this.state;this.setState({isSortAscending:!t}),this.props.onSortChanged(e.id,!t)}),this.updateCurrentSortType=(e=>{this.setState({currentSortType:e,isSortNumeric:e.isNumeric,isSortAscending:!0}),this.props.onSortChanged(e.id,!0)}),this.updateCurrentValue=(e=>{this.setState({currentValue:e})})}componentDidUpdate(e,t){const{filterFields:r,query:a,report:i,sortField:o}=this.props,n=null===this.state.report&&a.group_by.account;!i||M(i,e.report)&&!n||(n?this.setState({report:i},()=>{this.addQuery(a)}):this.addQuery(a),M(r,e.filterFields)||this.setState({currentFilterType:this.props.filterFields[0]}),M(o,e.sortField)||this.setState({currentSortType:o,isSortAscending:!(a&&"desc"===a.order_by[o.id])}))}renderInput(){const{currentFilterType:e,currentValue:t}=this.state;return e?s.a.createElement(G.a,{onChange:this.updateCurrentValue,onKeyPress:this.onValueKeyPress,placeholder:e.placeholder,type:"text",value:t}):null}render(){const{activeFilters:e,currentFilterType:t,currentSortType:r,isSortNumeric:a,isSortAscending:i}=this.state;return s.a.createElement(L.a,null,s.a.createElement(A.a,null,s.a.createElement(A.a.TypeSelector,{filterTypes:this.props.filterFields,currentFilterType:t,onFilterTypeSelected:this.selectFilterType}),this.renderInput()),s.a.createElement(I.a,null,s.a.createElement(I.a.TypeSelector,{sortTypes:this.props.sortFields,currentSortType:r,onSortTypeSelected:this.updateCurrentSortType}),s.a.createElement(I.a.DirectionSelector,{isNumeric:a,isAscending:i,onClick:this.toggleCurrentSortDirection})),s.a.createElement("div",{className:"form-group"},s.a.createElement(z.c,{variant:z.b.link},s.a.createElement(q.a,{name:"download"}),"Export")),!e||0===e.length&&s.a.createElement(L.a.Results,null,s.a.createElement("h5",null,this.props.resultsTotal," Results")),e&&e.length>0&&s.a.createElement(L.a.Results,null,s.a.createElement("h5",null,this.props.resultsTotal," Results"),s.a.createElement(A.a.ActiveLabel,null,"Active Filters:"),s.a.createElement(A.a.List,null,e.map((e,t)=>s.a.createElement(A.a.Item,{key:t,onRemove:this.removeFilter,filterData:e},e.label))),s.a.createElement("a",{href:"#",onClick:this.clearFilters},"Clear All Filters")))}}V.defaultProps={onActionPerformed:K.c};const P="cost",Q={filter:{time_scope_units:"month",time_scope_value:-1,resolution:"monthly"},group_by:{account:"*"},order_by:{total:"desc"}},H=[{label:"account",value:"account"},{label:"service",value:"service"},{label:"region",value:"region"}];const U=Object(d.a)((e,t)=>{const r=Object(o.b)(t.location.search),a={filter:Object.assign({},Q.filter,r.filter),group_by:r.group_by||Q.group_by,order_by:r.order_by||Q.order_by},i=Object(o.a)(a);return{report:p.c.selectReport(e,"cost",i),reportFetchStatus:p.c.selectReportFetchStatus(e,"cost",i),queryString:i,query:a}}),W={fetchReport:p.a.fetchReport};t.a=Object(c.c)()(Object(u.b)(U,W)(class extends s.a.Component{constructor(e,t){super(e,t),this.handleSelectChange=(e=>{const{history:t}=this.props,r={group_by:{[e.currentTarget.value]:"*"},order_by:{total:"desc"}};t.replace(this.getRouteForQuery(r))}),this.updateReport=(()=>{const{query:e,location:t,fetchReport:r,history:a,queryString:i}=this.props;t.search?r(P,i):a.replace(this.getRouteForQuery({group_by:e.group_by,order_by:{total:"desc"}}))}),this.getFilterFields=(e=>{const{t:t}=this.props;return"account"===e?[{id:"account",title:t("cost_details.filter.account_select"),placeholder:t("cost_details.filter.account_placeholder"),filterType:"text"}]:"service"===e?[{id:"service",title:t("cost_details.filter.service_select"),placeholder:t("cost_details.filter.service_placeholder"),filterType:"text"}]:"region"===e?[{id:"region",title:t("cost_details.filter.region_select"),placeholder:t("cost_details.filter.region_placeholder"),filterType:"text"}]:[]}),this.getSortTypes=(e=>{const{t:t}=this.props;return"account"===e?[{id:"account_alias",isNumeric:!1,title:t("cost_details.order.name")},{id:"total",isNumeric:!0,title:t("cost_details.order.cost")}]:"service"===e?[{id:"service",isNumeric:!1,title:t("cost_details.order.name")},{id:"total",isNumeric:!0,title:t("cost_details.order.cost")}]:"region"===e?[{id:"region",isNumeric:!1,title:t("cost_details.order.name")},{id:"total",isNumeric:!0,title:t("cost_details.order.cost")}]:[]}),this.onFilterAdded=this.onFilterAdded.bind(this),this.onFilterRemoved=this.onFilterRemoved.bind(this),this.onSortChanged=this.onSortChanged.bind(this)}componentDidMount(){this.updateReport(),this.setState({})}componentDidUpdate(e){const{location:t,report:r,queryString:a}=this.props;e.queryString===a&&r&&t.search||this.updateReport()}getRouteForQuery(e){return`/cost?${Object(o.a)(e)}`}onFilterAdded(e,t){const{history:r,query:a}=this.props;a.group_by[e]?"*"===a.group_by[e]?a.group_by[e]=t:a.group_by[e].includes(t)||(a.group_by[e]=[a.group_by[e],t]):a.group_by[e]=[t];const i=this.getRouteForQuery(a);r.replace(i)}onFilterRemoved(e,t){const{history:r,query:a}=this.props;if(""!==t&&Array.isArray(a.group_by[e])){const r=a.group_by[e].indexOf(t);if(r>-1){const t=[...a.group_by[e].slice(0,r),...a.group_by[e].slice(r+1)];a.group_by[e]=t}}else a.group_by[e]="*";const i=this.getRouteForQuery(a);r.replace(i)}onSortChanged(e,t){const{history:r,query:a}=this.props;a.order_by={},a.order_by[e]=t?"asc":"desc";const i=this.getRouteForQuery(a);r.replace(i)}render(){const{report:e,query:t,t:r}=this.props,o=Object(g.b)(t.group_by),l=this.getFilterFields(o),c=this.getSortTypes(o),u=new Date,d=Object(g.c)({report:e,idKey:o});let p=c[0];for(const e of c)if(t.order_by&&t.order_by[e.id]){p=e;break}const m=r("cost_details.export_link");return s.a.createElement("div",{className:Object(i.b)(y.costDetailsPage)},s.a.createElement("header",{className:Object(i.b)(y.header)},s.a.createElement("div",null,s.a.createElement(a.b,{size:"2xl"},r("cost_details.title")),s.a.createElement("div",{className:Object(i.b)(y.groupBySelector)},s.a.createElement("label",{className:Object(i.b)(y.groupBySelectorLabel)},r("group_by.label"),":"),s.a.createElement("select",{value:o,onChange:this.handleSelectChange},H.map(e=>s.a.createElement("option",{key:e.value,value:e.value},r(`group_by.values.${e.label}`)))))),Boolean(e)&&s.a.createElement("div",{className:Object(i.b)(y.total)},s.a.createElement(a.b,{className:Object(i.b)(y.totalValue),size:"4xl"},Object(h.a)(e.total.value)),s.a.createElement("div",{className:Object(i.b)(y.totalLabel)},s.a.createElement("div",{className:Object(i.b)(y.totalLabelUnit)},r("total_cost")),s.a.createElement("div",{className:Object(i.b)(y.totalLabelDate)},r("since_date",{month:u.getMonth(),date:1}))))),s.a.createElement("div",{className:Object(i.b)(y.content)},s.a.createElement("div",{className:Object(i.b)(y.toolbarContainer)},s.a.createElement("div",{className:v},s.a.createElement(V,{exportText:m,filterFields:l,onFilterAdded:this.onFilterAdded,onFilterRemoved:this.onFilterRemoved,onSortChanged:this.onSortChanged,sortField:p,sortFields:c,report:e,resultsTotal:d.length,query:t}))),s.a.createElement("div",{className:b},s.a.createElement(n.a,null,s.a.createElement(n.a.Item,{key:"header_item",heading:r("cost_details.name_column_title",{groupBy:o}),checkboxInput:s.a.createElement("input",{type:"checkbox"}),actions:[s.a.createElement(n.a.InfoItem,{key:"1"},s.a.createElement("strong",null,r("cost_details.cost_column_title"),Boolean(e)&&s.a.createElement(s.a.Fragment,null,r("cost_details.cost_column_subtitle",{total:Object(h.a)(e.total.value)}))))]}),d.map((r,a)=>s.a.createElement(N,{key:a,parentQuery:t,parentGroupBy:o,item:r,total:e.total.value}))))))}}))},577:function(e,t,r){"use strict";r.r(t),function(e){var a=r(37),i=r(336);t.default=Object(a.hot)(e)(i.a)}.call(this,r(36)(e))}}]);
//# sourceMappingURL=3285d0f0495ee54d0fa9.bundle.js.map