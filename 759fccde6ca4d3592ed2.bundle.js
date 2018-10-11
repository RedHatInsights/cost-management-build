(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{168:function(e,t,r){"use strict";r.d(t,"b",function(){return a}),r.d(t,"a",function(){return i});const a=(e,t,r={})=>{const a=t&&t.split("-")[0].toLowerCase(),l=e||0;switch(a){case"usd":return i(l,a,r);case"gb":return n(l,a,r);default:return o(l,a,r)}},o=(e,t,{fractionDigits:r}={})=>e.toFixed(r),i=(e,t,{fractionDigits:r=2}={})=>{let a=e;return e||(a=0),a.toLocaleString("en",{style:"currency",currency:"USD",minimumFractionDigits:r,maximumFractionDigits:r})},n=(e,t,{fractionDigits:r=2}={})=>e.toFixed(r)},172:function(e,t,r){"use strict";r.d(t,"a",function(){return i}),r.d(t,"c",function(){return n}),r.d(t,"b",function(){return l});var a=r(205);const o=["services","accounts","instance_types","regions"];function i({report:e,idKey:t,labelKey:r=t,sortKey:o="total",sortDirection:i=0}){return Object(a.a)(n({report:e,idKey:t,labelKey:r,sortDirection:i,sortKey:o}),{key:o,direction:i})}function n({report:e,idKey:t,labelKey:r=t}){if(!e)return[];const a={},i=e=>{e.values&&e.values.forEach(e=>{const o=e.total,i=e[t];let n=e[r];"account"===r&&e.account_alias&&(n=e.account_alias),a[i]?a[i]=Object.assign({},a[i],{total:a[i].total+o}):a[i]={id:i,total:o,label:n,units:e.units}}),o.forEach(t=>{if(e[t])return e[t].forEach(i)})};return e.data.forEach(i),Object.values(a)}function l(e={}){return e.account?"account":e.instance_type?"instance_type":e.region?"region":e.service?"service":"date"}},184:function(e,t,r){"use strict";r.d(t,"c",function(){return u}),r.d(t,"a",function(){return p}),r.d(t,"b",function(){return h});var a=r(258),o=r.n(a),i=r(256),n=r.n(i),l=r(255),s=r.n(l),c=r(172);function u(e,t=1,r="date"){if(!e)return[];const a=Object(c.a)({report:e,idKey:r,sortKey:"id",sortDirection:1});return 1===t?a.map(e=>d(e.total,e,r)):2===t?a.map(e=>d(e.total,e,r)):a.reduce((e,t)=>{const a=e.length?e[e.length-1].y:0;return[...e,d(a+t.total,t,r)]},[])}function d(e,t,r="date"){return{x:"date"===r?n()(t.id):t.label,y:parseFloat(e.toFixed(2)),key:t.id,name:t.id,units:t.units}}function p(e){const[t,r]=function(e){if(!e.length){const e=new Date;return[s()(e),e]}return[new Date(e[0].key+"T00:00:00"),new Date(e[e.length-1].key+"T00:00:00")]}(e),a=o()(t,"MMM"),i=n()(t),l=n()(r);return`${a} ${n()(t)}${i!==l?` - ${l}`:""}`}function h(e,t,r,a="date"){if(!e.key)return"";if("date"===a){return`${o()(e.key,"MMM D YYYY")}: ${t(e.y,e.units,r)}`}return e.key.toString()}},185:function(e,t,r){"use strict";r.d(t,"a",function(){return a}),r.d(t,"b",function(){return o});const a=e=>({"data-testid":e}),o={export:{cancel_btn:"cancel-btn",submit_btn:"submit-btn"},login:{alert:"alert",form:"login-form",username_input:"username-input",password_input:"password-input",submit:"submit"},masthead:{masthead:"masthead",username:"username",sidebarToggle:"sidebar-toggle",logout:"logout"},providers:{add_btn:"add-btn",bucket_input:"bucket-input",cancel_btn:"cancel-btn",name_input:"provider-name-input",resource_name_input:"provider-resource-name-input",submit_btn:"submit-btn",type_input:"provider-type-input"},sidebar:{nav:"vertical-nav",link:"vertical-nav-link",backdrop:"sidebar-backdrop"}}},205:function(e,t,r){"use strict";function a(e,t){if("string"==typeof e)return e;return e[t.key]}function o(e,t){const{direction:r=0}=t||{};return[...e].sort((e,o)=>{const i=a(0===r?e:o,t),n=a(0===r?o:e,t);return i>n?-1:i<n?1:0})}r.d(t,"a",function(){return o})},208:function(e,t,r){"use strict";var a=r(560),o=r(0),i=r.n(o),n=r(127);const l=a.a.create({textInput:{width:"100%",fontSize:n.q.value,paddingTop:n.I.value,paddingRight:n.H.value,paddingBottom:n.I.value,paddingLeft:n.G.value,lineHeight:"24px",outline:0,border:`${n.h.value} solid ${n.d.value}`,":focus":{borderColor:n.e.value}},flat:{border:"none",borderBottom:[n.h.value,"solid",n.d.value].join(" "),":focus":{borderBottom:[n.g.value,"solid",n.e.value].join(" ")}},error:{borderColor:n.x.value,":focus":{borderColor:n.y.value}}});var s=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&(r[a[o]]=e[a[o]])}return r};class c extends i.a.Component{constructor(){super(...arguments),this.handleChange=(e=>{this.props.onChange(e.currentTarget.value,e)}),this.handleKeyPressed=(e=>{this.props.onKeyPress&&"Enter"===e.key&&(e.preventDefault(),this.props.onKeyPress(e))})}render(){const e=this.props,{className:t,isFlat:r,isError:o}=e,n=s(e,["className","isFlat","isError"]);return i.a.createElement("input",Object.assign({},n,{className:Object(a.b)(t,l.textInput,r&&l.flat,o&&l.error),onChange:this.handleChange,onKeyPress:this.handleKeyPressed}))}}r.d(t,"a",function(){return c})},209:function(e,t,r){"use strict";var a=r(560),o=r(0),i=r.n(o);let n=0;class l extends i.a.Component{constructor(){super(...arguments),this.id=`${this.props.prefix}${n++}`}render(){return this.props.children({id:this.id})}}l.defaultProps={prefix:"random-id-"};var s=r(127);const c=a.a.create({formGroup:{marginBottom:s.A.value},label:{display:"block",fontWeight:s.u.value,paddingBottom:s.G.value}}),u=({label:e,children:t})=>i.a.createElement(l,{prefix:e},({id:r})=>i.a.createElement("div",{className:Object(a.b)(c.formGroup)},i.a.createElement("label",{className:Object(a.b)(c.label),htmlFor:r},e),i.a.createElement("div",null,i.a.cloneElement(i.a.Children.only(t),{id:r}))));r.d(t,"a",function(){return u})},210:function(e,t,r){"use strict";var a=r(560),o=r(0),i=r.n(o);const n=a.a.create({legend:{display:"flex",alignItems:"center"}}),l=({children:e,style:t})=>{const r=Boolean(t)&&Boolean(t.legend)?t.legend:n.legend;return i.a.createElement("div",{className:Object(a.b)(r)},e)};var s=r(127);const c={padding:8,group:{data:{strokeWidth:2,fillOpacity:.4}},tooltipText:{fontSize:"14px",fill:s.m.value},tooltipFlyout:{fill:s.l.value},previousMonth:{data:{fill:s.K.value,stroke:s.J.value}},currentMonth:{data:{fill:s.B.value,stroke:s.C.value}}},u=(a.a.create({reportSummaryTrend:{":not(foo) svg":{overflow:"visible"},":not(foo) text":{fontSize:"12px",length:"12px"}}}),a.a.create({legendItem:{display:"flex",alignItems:"center",fontSize:s.s.value,color:s.k.var,marginRight:s.F.value},color:{height:10,width:10,marginRight:s.G.value,borderWidth:s.h.value,borderStyle:"solid"},currentColor:{backgroundColor:c.currentMonth.data.fill,borderColor:c.currentMonth.data.stroke},previousColor:{backgroundColor:c.previousMonth.data.fill,borderColor:c.previousMonth.data.stroke}}));var d=r(184);const p=({data:e,isCurrent:t,idKey:r="date",index:o,style:n})=>{if(!e||0===e.length)return i.a.createElement("div",null);const l=Boolean(n)&&Boolean(n.legendItem)?n.legendItem:u.legendItem;if("date"===r){const r=Object(d.a)(e);return i.a.createElement("div",{className:Object(a.b)(l)},i.a.createElement("div",{className:Object(a.b)(u.color,t?u.currentColor:u.previousColor)}),r)}return i.a.createElement("div",{key:e[o].key,className:Object(a.b)(l)},i.a.createElement("div",{className:Object(a.b)(u.color,t?u.currentColor:u.previousColor)}),e[o].key)},h=a.a.create({chartTitle:{fontSize:s.s.value,marginBottom:s.G.value}}),g=({children:e})=>i.a.createElement("div",{className:Object(a.b)(h.chartTitle)},e);r.d(t,"a",function(){return l}),r.d(t,"b",function(){return p}),r.d(t,"c",function(){return g})},342:function(e,t,r){"use strict";var a=r(562),o=r(560),i=r(39),n=r(580),l=r(0),s=r.n(l),c=r(31),u=r(26),d=r(37),p=r(9),h=r(25),g=r(168),m=r(172),b=r(127),f=r(186);const y=o.a.create({content:{backgroundColor:b.c.var,paddingTop:b.H.value,height:"100%"},costDetailsPage:{backgroundColor:b.c.var,minHeight:"100%"},header:{display:"flex",justifyContent:"space-between",padding:b.H.var,backgroundColor:b.b.var},headerLeft:{flex:1},headerRight:{display:"flex",justifyContent:"flex-end"},total:{display:"flex",alignItems:"center"},totalLabel:{},totalValue:{marginTop:0,marginBottom:0,marginRight:b.F.var},totalLabelUnit:{fontSize:b.r.value,color:b.j.var},totalLabelDate:{fontSize:b.r.value,color:b.k.var},groupBySelector:{display:"flex",alignItems:"center"},groupBySelectorLabel:{marginBottom:0,marginRight:b.F.var},innerGroupBySelector:{display:"flex",alignItems:"center",fontSize:b.r.value},innerGroupBySelectorLabel:{marginBottom:0,marginRight:b.F.var},toolbarContainer:{backgroundColor:b.c.value}}),v=f["b"]`
  min-height: 100%;
  padding: 0 ${b.H.value};
  background-color: ${b.n.value};
  ${b.j.name}: ${b.m.value};
  ${b.k.name}: ${b.n.value};

  .list-view-pf {
    margin-top: 0;
  }
  .list-group-item:hover {
    background-color: #fff;
    box-shadow: ${b.i.value};
    z-index: 1;
  }

  & * {
    // outline: 1px solid blue;
  }

  .list-group-item-heading,
  strong {
    font-weight: ${b.u.value};
    word-break: break-word;
  }

  .list-group-item-heading {
    font-size: ${b.q.value};
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
    margin-bottom: ${b.I.value};
    font-size: ${b.q.value};
  }

  .list-view-pf-additional-info-item span {
    font-size: ${b.s.value};
    color: ${b.z.value};
  }

  .list-group-item {
    padding: ${b.E.value} ${b.H.value};
    border-bottom: 2px solid #f2f2f2;
  }

  .list-group-item:first-child {
    border-top: 0;
    padding: 0.55rem ${b.E.value} ${b.I.value} 3.5rem;

    &,
    .list-group-item-heading,
    .list-view-pf-additional-info-item strong {
      font-size: ${b.r.value};
      font-weight: ${b.t.value};
    }

    .list-view-pf-additional-info {
      transform: translateX(-0.55rem);
    }

    .list-view-pf-actions .list-view-pf-additional-info-item {
      float: right;
    }
  }

  .list-group-item-container {
    padding: ${b.E.value} ${b.D.value}
      ${b.E.value} ${b.D.value};
    margin: ${b.E.value} -${b.H.value} -${b.E.value} -${b.H.value};
    background-image: linear-gradient(
      to right,
      ${b.B.value},
      ${b.B.value} 3px,
      transparent 3px
    );
  }

  .list-group-item.list-view-pf-expand-active {
    background-color: #fff;
  }

  .list-view-pf-expand-active {
    box-shadow: ${b.i.value};
    z-index: 1;
    background-image: linear-gradient(
      to right,
      ${b.B.value},
      ${b.B.value} 3px,
      transparent 3px
    );
  }
`,x=f["b"]`
  margin-left: ${b.H.value};
  margin-right: ${b.H.value};
  background-color: ${b.m.value};
  font-size: ${b.s.value};

  .pf-c-button {
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;
    display: inline-flex;
    align-items: center;
  }

  .fa-download {
    color: ${b.j.value};
    margin-right: ${b.G.value};
    font-size: 1.125rem;
  }

  .toolbar-pf-actions {
    display: flex;
    padding-top: ${b.G.value};
    padding-bottom: ${b.G.value};
  }

  .form-group {
    border: none;
  }

  .btn {
    line-height: 28px;
  }

  .btn-link {
    color: ${b.k.value};
    margin-left: ${b.G.value};
  }

  .btn-link .fa {
    font-size: ${b.p.value};
    color: ${b.j.value};
  }

  .pf-m-plain {
    padding: 0;
    display: flex;
    align-items: center;
  }

  .dropdown .btn {
    border-radius: ${b.f.value};
    background: transparent;
    box-shadow: none;
    border-color: #c7c7c7;
    font-size: ${b.q.value};
    font-weight: 500;
    padding-left: ${b.G.value};
    padding-right: ${b.G.value};
  }

  input[type='text'] {
    border-color: #c7c7c7;
    border-left: none;
    border-radius: 0 ${b.f.value}
      ${b.f.value} 0;
  }

  /* filter results */

  .toolbar-pf-results {
    font-size: ${b.r.value};
    padding: ${b.G.value} 0;
    line-heght: ${b.v.value};
    font-weight: ${b.u.value};

    .col-sm-12 {
      display: flex;
      align-items: center;
    }

    h5 {
      font-size: ${b.r.value};
      font-weight: ${b.u.value};
      line-height: ${b.v.value};
    }

    .filter-pf-active-label {
      line-height: ${b.v.value};
    }

    .list-inline {
      line-height: ${b.v.value};
    }

    .label {
      font-size: ${b.s.value};
      border-radius: ${b.f.value};
      display: inline-flex;
      align-items: center;
    }

    .pf-remove-button {
      display: inline-flex;
      font-weight: ${b.u.value};
    }
  }
`;var E=r(51),S=r(52),_=r(210),k=r(184),C=r(559),F=r(572),O=r(567);const j={padding:{top:8,bottom:8},pie:{data:{strokeWidth:0,fillOpacity:.7,stroke:b.C.value}},tooltipText:{fontSize:b.s.value,fill:b.m.value},tooltipFlyout:{stroke:b.l.value}},$=o.a.create({pieGroup:{display:"flex",float:"left",position:"relative",paddingTop:"2rem",marginLeft:"2rem",left:"-40px"}});o.a.create({legend:{display:"block",alignItems:"center"},legendItem:{display:"flex",alignItems:"center",fontSize:b.s.value,color:b.l.var,marginRight:b.F.value}});class w extends s.a.Component{constructor(){super(...arguments),this.containerRef=s.a.createRef(),this.state={width:0},this.getTooltipLabel=(e=>{const{formatDatumValue:t,formatDatumOptions:r,groupBy:a}=this.props;return Object(k.b)(e,t,r,a)}),this.handleResize=(()=>{this.setState({width:this.containerRef.current.clientWidth})})}shouldComponentUpdate(e){return!!e.data}componentDidMount(){setTimeout(()=>{this.setState({width:this.containerRef.current.clientWidth}),window.addEventListener("resize",this.handleResize)})}componentWillUnmount(){window.removeEventListener("resize",this.handleResize)}render(){const{title:e,height:t,width:r,data:a,groupBy:i}=this.props,n=Object(k.c)(a,2,i),l=n.map(e=>({name:e.name.toString()+" ("+Object(g.a)(e.y)+")",symbol:{type:"square"}}));return s.a.createElement("div",{className:Object(o.b)($.pieGroup),ref:this.containerRef},Boolean(n.length)&&s.a.createElement(O.a,{padding:j.padding,height:t,width:r,colorScale:"cool",style:j.pie,data:n,labels:this.getTooltipLabel,labelComponent:s.a.createElement(C.a,{cornerRadius:0,flyoutStyle:j.tooltipFlyout})}),s.a.createElement("svg",{width:300,height:250},Boolean(n.length)&&s.a.createElement(F.a,{key:e,standalone:!1,colorScale:"cool",x:0,y:0,gutter:20,data:l})),s.a.createElement(_.c,null,e))}}const B="cost";const T=Object(d.a)((e,{queryString:t})=>{return{report:p.c.selectReport(e,"cost",t),reportFetchStatus:p.c.selectReportFetchStatus(e,"cost",t)}}),R={fetchReport:p.a.fetchReport},D=Object(c.c)()(Object(u.b)(T,R)(class extends s.a.Component{componentDidMount(){const{report:e,queryString:t}=this.props;e||this.props.fetchReport(B,t)}componentDidUpdate(e){e.queryString!==this.props.queryString&&this.props.fetchReport(B,this.props.queryString)}render(){const{currentGroupBy:e,report:t}=this.props;return s.a.createElement(w,{height:150,width:400,data:t,formatDatumValue:g.b,groupBy:e})}})),I=[{label:"account",value:"account"},{label:"service",value:"service"},{label:"region",value:"region"}];const N=Object(c.c)()(Object(u.b)()(class extends s.a.Component{constructor(){super(...arguments),this.state={expanded:!1},this.handleExpand=(()=>{const{currentGroupBy:e}=this.state,t=this.getQueryString(e);this.setState({expanded:!0,queryString:t})}),this.handleExpandClose=(()=>{this.setState({expanded:!1})}),this.handleCheckboxChange=(e=>{const{item:t,onCheckboxChange:r}=this.props;r(e.currentTarget.checked,t)}),this.handleSelectChange=(e=>{const t=e.currentTarget.value,r=this.getQueryString(t);this.setState({currentGroupBy:t,queryString:r})})}getQueryString(e){const{parentQuery:t,item:r}=this.props,a={filter:{time_scope_units:"month",time_scope_value:-1,resolution:"monthly",limit:5},group_by:{[Object(m.b)(t.group_by)]:r.id,[e]:"*"}};return Object(i.a)(a)}getDefaultGroupBy(){const{parentGroupBy:e}=this.props;let t="";switch(e){case"account":t="service";break;case"service":case"region":t="account"}return t}componentDidMount(){const e=this.getDefaultGroupBy(),t=this.getQueryString(e);this.setState({currentGroupBy:e,queryString:t})}componentDidUpdate(e){if(this.props.parentGroupBy!==e.parentGroupBy){const e=this.getDefaultGroupBy();this.setState({currentGroupBy:e})}}render(){const{t:e,item:t,parentGroupBy:r,selected:a,total:i}=this.props,{currentGroupBy:l,queryString:c}=this.state;return s.a.createElement(n.a.Item,{key:t.label,heading:t.label,checkboxInput:s.a.createElement("input",{type:"checkbox",checked:a,onChange:this.handleCheckboxChange}),actions:[s.a.createElement(n.a.InfoItem,{key:"1",stacked:!0},s.a.createElement("strong",null,Object(g.a)(t.total)),s.a.createElement("span",null,(t.total/i*100).toFixed(2),e("percent_of_cost")))],onExpand:this.handleExpand,onExpandClose:this.handleExpandClose},s.a.createElement(E.a,null,s.a.createElement(S.a,null,s.a.createElement("div",null,s.a.createElement("div",{className:Object(o.b)(y.innerGroupBySelector)},s.a.createElement("label",{className:Object(o.b)(y.innerGroupBySelectorLabel)},e("group_by.label"),":"),s.a.createElement("select",{id:t.label?t.label.toString():"",onChange:this.handleSelectChange},I.map(t=>{if(t.value!==r)return s.a.createElement("option",{key:t.value,value:t.value},e(`group_by.values.${t.label}`))}))),Boolean(l)&&Boolean(c)&&s.a.createElement(D,{queryString:c,currentGroupBy:l})))))}}));var A=r(566),G=r(208),q=r(577),z=r(570),M=r(576),L=r(561),K=r(3);function V(e,t){let r=JSON.stringify(e),a=JSON.stringify(t);return r||(r=""),a||(a=""),r.split("").sort().join("")===a.split("").sort().join("")}const P=f["b"]`
  &.pf-c-button {
    --pf-c-button--m-disabled--BackgroundColor: none;
  }
`;class Q extends s.a.Component{constructor(){super(...arguments),this.state={activeFilters:[],currentFilterType:this.props.filterFields[0],currentValue:"",currentSortType:this.props.sortField,isSortNumeric:this.props.sortField.isNumeric,isSortAscending:!(this.props.query&&"desc"===this.props.query.order_by[this.props.sortField.id]),currentViewType:"list",filterCategory:void 0,report:void 0},this.addQuery=(e=>{const t=[];Object.keys(e.group_by).forEach(r=>{if("*"!==e.group_by[r])if(Array.isArray(e.group_by[r]))e.group_by[r].forEach(e=>{const a=r.id||r,o=this.getFilter(a,e);t.push(o)});else{const a=r.id||r,o=this.getFilter(a,e.group_by[r]);t.push(o)}}),this.setState({activeFilters:t})}),this.clearFilters=(e=>{const{currentFilterType:t}=this.state;this.setState({activeFilters:[]}),this.props.onFilterRemoved(t.id,""),e.preventDefault()}),this.filterAdded=((e,t)=>{const{currentFilterType:r}=this.state,a=this.getAccountId(e.id,t);this.props.onFilterAdded(r.id,a)}),this.getAccountAlias=((e,t)=>{const{report:r}=this.state;let a=t;return r&&r.data&&"account"===e&&r.data.forEach(e=>{e.accounts.forEach(e=>{e.values.forEach(e=>{if(e.account===t&&e.account_alias)return a=e.account_alias,!1})})}),a}),this.getAccountId=((e,t)=>{const{report:r}=this.state;let a=t;return r&&r.data&&"account"===e&&r.data.forEach(e=>{e.accounts.forEach(e=>{e.values.forEach(e=>{if(e.account_alias===t&&e.account)return a=e.account,!1})})}),a}),this.getFilter=((e,t)=>{const{currentFilterType:r}=this.state,a=this.getAccountAlias(e,t),o=this.getFilterLabel(e,a);return{field:r.id,label:o,value:t}}),this.getFilterLabel=((e,t)=>{let r="";return r=(r=e.title?e.title:e).charAt(0).toUpperCase()+r.slice(1)+": ",t.filterCategory?r+=`${t.filterCategory.title||t.filterCategory}-${t.filterValue.title||t.filterValue}`:t.title?r+=t.title:r+=t,r}),this.handleExportClicked=(()=>{this.props.onExportClicked()}),this.onValueKeyPress=(e=>{const{currentValue:t,currentFilterType:r}=this.state;"Enter"===e.key&&t&&t.length>0&&(this.setState({currentValue:""}),this.filterAdded(r,t),e.stopPropagation(),e.preventDefault())}),this.removeFilter=(e=>{const{activeFilters:t}=this.state,r=t.indexOf(e);if(r>-1){const a=[...t.slice(0,r),...t.slice(r+1)];this.setState({activeFilters:a}),this.props.onFilterRemoved(e.field,e.value)}}),this.selectFilterType=(e=>{const{currentFilterType:t}=this.state;t!==e&&this.setState({currentValue:"",currentFilterType:e})}),this.toggleCurrentSortDirection=(()=>{const{currentSortType:e,isSortAscending:t}=this.state;this.setState({isSortAscending:!t}),this.props.onSortChanged(e.id,!t)}),this.updateCurrentSortType=(e=>{this.setState({currentSortType:e,isSortNumeric:e.isNumeric,isSortAscending:!0}),this.props.onSortChanged(e.id,!0)}),this.updateCurrentValue=(e=>{this.setState({currentValue:e})})}componentDidUpdate(e,t){const{filterFields:r,query:a,report:o,sortField:i}=this.props,n=null===this.state.report&&a.group_by.account;!o||V(o,e.report)&&!n||(n?this.setState({report:o},()=>{this.addQuery(a)}):this.addQuery(a),V(r,e.filterFields)||this.setState({currentFilterType:this.props.filterFields[0]}),V(i,e.sortField)||this.setState({currentSortType:i,isSortAscending:!(a&&"desc"===a.order_by[i.id])}))}renderInput(){const{currentFilterType:e,currentValue:t}=this.state;return e?s.a.createElement(G.a,{onChange:this.updateCurrentValue,onKeyPress:this.onValueKeyPress,placeholder:e.placeholder,type:"text",value:t}):null}render(){const{isExportDisabled:e}=this.props,{activeFilters:t,currentFilterType:r,currentSortType:a,isSortNumeric:o,isSortAscending:i}=this.state;return s.a.createElement(q.a,null,s.a.createElement(M.a,null,s.a.createElement(M.a.TypeSelector,{filterTypes:this.props.filterFields,currentFilterType:r,onFilterTypeSelected:this.selectFilterType}),this.renderInput()),s.a.createElement(z.a,null,s.a.createElement(z.a.TypeSelector,{sortTypes:this.props.sortFields,currentSortType:a,onSortTypeSelected:this.updateCurrentSortType}),s.a.createElement(z.a.DirectionSelector,{isNumeric:o,isAscending:i,onClick:this.toggleCurrentSortDirection})),s.a.createElement("div",{className:"form-group"},s.a.createElement(A.c,{className:P,isDisabled:e,onClick:this.handleExportClicked,variant:A.b.link},s.a.createElement(L.a,{name:"download"}),"Export")),!t||0===t.length&&s.a.createElement(q.a.Results,null,s.a.createElement("h5",null,this.props.resultsTotal," Results")),t&&t.length>0&&s.a.createElement(q.a.Results,null,s.a.createElement("h5",null,this.props.resultsTotal," Results"),s.a.createElement(M.a.ActiveLabel,null,"Active Filters:"),s.a.createElement(M.a.List,null,t.map((e,t)=>s.a.createElement(M.a.Item,{key:t,onRemove:this.removeFilter,filterData:e},e.label))),s.a.createElement("a",{href:"#",onClick:this.clearFilters},"Clear All Filters")))}}Q.defaultProps={onActionPerformed:K.c};var H=r(54),U=r(557),W=r(344),J=r.n(W),Y=r(36),X=r(185),Z=r(209),ee=r(205);const te=o.a.create({modal:{h2:{marginBottom:b.H.value},input:{marginRight:b.I.var},ul:{marginLeft:b.G.var}}}),re=[{label:"Daily",value:"daily"},{label:"Monthly",value:"monthly"}];var ae=Object(u.b)(Object(d.a)(e=>({error:Y.c.selectExportError(e),export:Y.c.selectExport(e),fetchStatus:Y.c.selectExportFetchStatus(e),isExportModalOpen:h.c.selectIsExportModalOpen(e)})),{exportReport:Y.a.exportReport,closeExportModal:h.a.closeExportModal})(Object(c.c)()(class extends s.a.Component{constructor(){super(...arguments),this.defaultState={resolution:"daily"},this.state=Object.assign({},this.defaultState),this.getQueryString=(()=>{const{groupById:e,isAllItems:t,items:r,query:a}=this.props,{resolution:o}=this.state,n=Object.assign({},a,{group_by:void 0,order_by:void 0});n.filter.resolution=o;let l=Object(i.a)(n);if(t)l+=`&group_by[${e}]=*`;else for(const t of r)l+=`&group_by[${e}]=`+t.label;return l}),this.handleCancel=(()=>{this.props.closeExportModal()}),this.handleFetchReport=(()=>{const{exportReport:e}=this.props;e("cost",this.getQueryString())}),this.handleResolutionChange=((e,t)=>{this.setState({resolution:t.currentTarget.value})})}componentDidUpdate(e){const{closeExportModal:t,fetchStatus:r,isExportModalOpen:a}=this.props;a&&!e.isExportModalOpen&&this.setState(Object.assign({},this.defaultState)),this.props.export!==e.export&&2===r&&(J()(this.props.export,"report.csv","text/csv"),t())}render(){const{fetchStatus:e,groupById:t,items:r,t:a}=this.props,{resolution:i}=this.state;return this.props.isExportModalOpen&&Object(ee.a)(r,{key:"id",direction:0}),s.a.createElement(H.a,{className:Object(o.b)(te.modal),isLarge:!0,isOpen:this.props.isExportModalOpen,onClose:this.handleCancel,title:a("export.title"),actions:[s.a.createElement(A.c,Object.assign({},Object(X.a)(X.b.export.cancel_btn),{key:"cancel",onClick:this.handleCancel,variant:A.b.secondary}),a("export.cancel")),s.a.createElement(A.c,Object.assign({},Object(X.a)(X.b.export.submit_btn),{isDisabled:1===e,key:"confirm",onClick:this.handleFetchReport,variant:A.b.primary}),a("export.confirm"))]},s.a.createElement("h2",null,a("export.heading",{groupBy:t})),s.a.createElement(Z.a,{label:a("export.aggregate_type")},s.a.createElement(s.a.Fragment,null,re.map((e,t)=>s.a.createElement("div",null,s.a.createElement(U.a,{isDisabled:!1,isValid:void 0!==e.value,key:t,value:e.value,checked:i===e.value,name:"resolution",onChange:this.handleResolutionChange,"aria-label":a(e.label)}),s.a.createElement("span",null,a(e.label)))))),s.a.createElement(Z.a,{label:a("export.selected",{groupBy:t})},s.a.createElement("ul",null,r.map((e,t)=>s.a.createElement("li",{key:t},e.label)))))}}));const oe="cost",ie={filter:{time_scope_units:"month",time_scope_value:-1,resolution:"monthly"},group_by:{account:"*"},order_by:{total:"desc"}},ne=[{label:"account",value:"account"},{label:"service",value:"service"},{label:"region",value:"region"}];const le=Object(d.a)((e,t)=>{const r=Object(i.b)(t.location.search),a={filter:Object.assign({},ie.filter,r.filter),group_by:r.group_by||ie.group_by,order_by:r.order_by||ie.order_by},o=Object(i.a)(a);return{report:p.c.selectReport(e,"cost",o),reportFetchStatus:p.c.selectReportFetchStatus(e,"cost",o),queryString:o,query:a}}),se={fetchReport:p.a.fetchReport,openExportModal:h.a.openExportModal};t.a=Object(c.c)()(Object(u.b)(le,se)(class extends s.a.Component{constructor(e,t){super(e,t),this.defaultState={selectedItems:[]},this.state=Object.assign({},this.defaultState),this.handleSelectChange=(e=>{const{history:t}=this.props,r={group_by:{[e.currentTarget.value]:"*"},order_by:{total:"desc"}};t.replace(this.getRouteForQuery(r)),this.setState({selectedItems:[]})}),this.onCheckboxChange=((e,t)=>{const{selectedItems:r}=this.state;let a=[...r,t];if(!e){let e=-1;for(let a=0;a<r.length;a++)if(r[a].label===t.label){e=a;break}e>-1&&(a=[...r.slice(0,e),...r.slice(e+1)])}this.setState({selectedItems:a})}),this.onCheckboxAllChange=(e=>{const{query:t,report:r}=this.props;let a=[];if(e.currentTarget.checked){const e=Object(m.b)(t.group_by);a=Object(m.c)({report:r,idKey:e})}this.setState({selectedItems:a})}),this.updateReport=(()=>{const{query:e,location:t,fetchReport:r,history:a,queryString:o}=this.props;t.search?r(oe,o):a.replace(this.getRouteForQuery({group_by:e.group_by,order_by:{total:"desc"}}))}),this.getFilterFields=(e=>{const{t:t}=this.props;return"account"===e?[{id:"account",title:t("cost_details.filter.account_select"),placeholder:t("cost_details.filter.account_placeholder"),filterType:"text"}]:"service"===e?[{id:"service",title:t("cost_details.filter.service_select"),placeholder:t("cost_details.filter.service_placeholder"),filterType:"text"}]:"region"===e?[{id:"region",title:t("cost_details.filter.region_select"),placeholder:t("cost_details.filter.region_placeholder"),filterType:"text"}]:[]}),this.getSortTypes=(e=>{const{t:t}=this.props;return"account"===e?[{id:"account_alias",isNumeric:!1,title:t("cost_details.order.name")},{id:"total",isNumeric:!0,title:t("cost_details.order.cost")}]:"service"===e?[{id:"service",isNumeric:!1,title:t("cost_details.order.name")},{id:"total",isNumeric:!0,title:t("cost_details.order.cost")}]:"region"===e?[{id:"region",isNumeric:!1,title:t("cost_details.order.name")},{id:"total",isNumeric:!0,title:t("cost_details.order.cost")}]:[]}),this.isSelected=(e=>{const{selectedItems:t}=this.state;let r=!1;for(const a of t)if(a.label===e.label){r=!0;break}return r}),this.onCheckboxChange=this.onCheckboxChange.bind(this),this.onExportClicked=this.onExportClicked.bind(this),this.onFilterAdded=this.onFilterAdded.bind(this),this.onFilterRemoved=this.onFilterRemoved.bind(this),this.onSortChanged=this.onSortChanged.bind(this)}componentDidMount(){this.updateReport(),this.setState({})}componentDidUpdate(e){const{location:t,report:r,queryString:a}=this.props;e.queryString===a&&r&&t.search||this.updateReport()}getRouteForQuery(e){return`/cost?${Object(i.a)(e)}`}onExportClicked(){this.props.openExportModal()}onFilterAdded(e,t){const{history:r,query:a}=this.props;a.group_by[e]?"*"===a.group_by[e]?a.group_by[e]=t:a.group_by[e].includes(t)||(a.group_by[e]=[a.group_by[e],t]):a.group_by[e]=[t];const o=this.getRouteForQuery(a);r.replace(o)}onFilterRemoved(e,t){const{history:r,query:a}=this.props;if(""!==t&&Array.isArray(a.group_by[e])){const r=a.group_by[e].indexOf(t);if(r>-1){const t=[...a.group_by[e].slice(0,r),...a.group_by[e].slice(r+1)];a.group_by[e]=t}}else a.group_by[e]="*";const o=this.getRouteForQuery(a);r.replace(o)}onSortChanged(e,t){const{history:r,query:a}=this.props;a.order_by={},a.order_by[e]=t?"asc":"desc";const o=this.getRouteForQuery(a);r.replace(o)}render(){const{selectedItems:e}=this.state,{query:t,report:r,t:i}=this.props,l=Object(m.b)(t.group_by),c=this.getFilterFields(l),u=this.getSortTypes(l),d=new Date,p=Object(m.c)({report:r,idKey:l});let h=u[0];for(const e of u)if(t.order_by&&t.order_by[e.id]){h=e;break}return s.a.createElement("div",{className:Object(o.b)(y.costDetailsPage)},s.a.createElement("header",{className:Object(o.b)(y.header)},s.a.createElement("div",null,s.a.createElement(a.b,{size:"2xl"},i("cost_details.title")),s.a.createElement("div",{className:Object(o.b)(y.groupBySelector)},s.a.createElement("label",{className:Object(o.b)(y.groupBySelectorLabel)},i("group_by.label"),":"),s.a.createElement("select",{value:l,onChange:this.handleSelectChange},ne.map(e=>s.a.createElement("option",{key:e.value,value:e.value},i(`group_by.values.${e.label}`)))))),Boolean(r)&&s.a.createElement("div",{className:Object(o.b)(y.total)},s.a.createElement(a.b,{className:Object(o.b)(y.totalValue),size:"4xl"},Object(g.a)(r.total.value)),s.a.createElement("div",{className:Object(o.b)(y.totalLabel)},s.a.createElement("div",{className:Object(o.b)(y.totalLabelUnit)},i("total_cost")),s.a.createElement("div",{className:Object(o.b)(y.totalLabelDate)},i("since_date",{month:d.getMonth(),date:1}))))),s.a.createElement("div",{className:Object(o.b)(y.content)},s.a.createElement("div",{className:Object(o.b)(y.toolbarContainer)},s.a.createElement("div",{className:x},s.a.createElement(Q,{exportText:i("cost_details.export_link"),filterFields:c,isExportDisabled:0===e.length,onExportClicked:this.onExportClicked,onFilterAdded:this.onFilterAdded,onFilterRemoved:this.onFilterRemoved,onSortChanged:this.onSortChanged,sortField:h,sortFields:u,report:r,resultsTotal:p.length,query:t}),s.a.createElement(ae,{isAllItems:e.length===p.length,groupById:l,items:e,query:t}))),s.a.createElement("div",{className:v},s.a.createElement(n.a,null,s.a.createElement(n.a.Item,{key:"header_item",heading:i("cost_details.name_column_title",{groupBy:l}),checkboxInput:s.a.createElement("input",{type:"checkbox",checked:e.length===p.length,onChange:this.onCheckboxAllChange}),actions:[s.a.createElement(n.a.InfoItem,{key:"1"},s.a.createElement("strong",null,i("cost_details.cost_column_title"),Boolean(r)&&s.a.createElement(s.a.Fragment,null,i("cost_details.cost_column_subtitle",{total:Object(g.a)(r.total.value)}))))]}),p.map((e,a)=>s.a.createElement(N,{key:a,parentQuery:t,parentGroupBy:l,item:e,onCheckboxChange:this.onCheckboxChange,selected:this.isSelected(e),total:r.total.value}))))))}}))},584:function(e,t,r){"use strict";r.r(t),function(e){var a=r(40),o=r(342);t.default=Object(a.hot)(e)(o.a)}.call(this,r(38)(e))}}]);
//# sourceMappingURL=759fccde6ca4d3592ed2.bundle.js.map