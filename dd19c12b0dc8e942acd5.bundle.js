(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{156:function(e,t,a){"use strict";a.d(t,"c",function(){return r}),a.d(t,"b",function(){return l}),a.d(t,"a",function(){return o});const r=e=>e?e.split("-")[0].toLowerCase():"",l=(e,t,a={})=>{const l=r(t),s=e||0;switch(l){case"usd":return o(s,l,a);case"gb":return n(s,l,a);default:return i(s,l,a)}},i=(e,t,{fractionDigits:a}={})=>e.toFixed(a),o=(e,t,{fractionDigits:a=2}={})=>{let r=e;return e||(r=0),r.toLocaleString("en",{style:"currency",currency:"USD",minimumFractionDigits:a,maximumFractionDigits:a})},n=(e,t,{fractionDigits:a=2}={})=>e.toFixed(a)},167:function(e,t,a){"use strict";function r(e,t){if("string"==typeof e)return e;return e[t.key]}function l(e,t){const{direction:a=0}=t||{};return[...e].sort((e,l)=>{const i=r(0===a?e:l,t),o=r(0===a?l:e,t);return i>o?-1:i<o?1:0})}a.d(t,"a",function(){return l})},181:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return l});const r=e=>({"data-testid":e}),l={export:{cancel_btn:"cancel-btn",submit_btn:"submit-btn"},login:{alert:"alert",form:"login-form",username_input:"username-input",password_input:"password-input",submit:"submit"},masthead:{masthead:"masthead",username:"username",sidebarToggle:"sidebar-toggle",logout:"logout"},providers:{add_btn:"add-btn",bucket_input:"bucket-input",cancel_btn:"cancel-btn",empty_state_add_btn:"empty_state_add-btn",name_input:"provider-name-input",resource_name_input:"provider-resource-name-input",cluster_id_input:"provider-cluster-id-input",submit_btn:"submit-btn",type_input:"provider-type-input"},sidebar:{nav:"vertical-nav",link:"vertical-nav-link",backdrop:"sidebar-backdrop"}}},212:function(e,t,a){"use strict";var r=a(646),l=a(0),i=a.n(l);let o=0;class n extends i.a.Component{constructor(){super(...arguments),this.id=`${this.props.prefix}${o++}`}render(){return this.props.children({id:this.id})}}n.defaultProps={prefix:"random-id-"};var s=a(132);const c=r.a.create({formGroup:{marginBottom:s.A.value},label:{display:"block",fontWeight:s.s.value,paddingBottom:s.I.value}}),u=({label:e,children:t})=>i.a.createElement(n,{prefix:e},({id:a})=>i.a.createElement("div",{className:Object(r.b)(c.formGroup)},i.a.createElement("label",{className:Object(r.b)(c.label),htmlFor:a},e),i.a.createElement("div",null,i.a.cloneElement(i.a.Children.only(t),{id:a}))));a.d(t,"a",function(){return u})},216:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"c",function(){return o}),a.d(t,"b",function(){return n});var r=a(167);const l=["clusters","nodes","projects"];function i({report:e,idKey:t,labelKey:a=t,sortKey:l="charge",sortDirection:i=0}){return Object(r.a)(o({report:e,idKey:t,labelKey:a,sortDirection:i,sortKey:l}),{key:l,direction:i})}function o({report:e,idKey:t,labelKey:a=t}){if(!e)return[];const r={},i=e=>{e.values&&e.values.forEach(e=>{const l=e.capacity,i=e.charge,o=e[t],n=e[a],s=e.limit,c=e.request,u=e.usage;r[o]?r[o]=Object.assign({},r[o],{capacity:r[o].capacity+l,charge:r[o].charge+i,limit:r[o].limit+s,request:r[o].request+c,usage:r[o].usage+u}):r[o]={capacity:l,charge:i,deltaPercent:e.delta_percent,deltaValue:e.delta_value,id:o,label:n,limit:s,request:c,units:e.units||u?"GB":"USD",usage:u}}),l.forEach(t=>{if(e[t])return e[t].forEach(i)})};return e.data.forEach(i),Object.values(r)}function n(e={}){return e.project?"project":e.cluster?"cluster":e.node?"node":"date"}},276:function(e,t,a){"use strict";var r=a(646),l=a(0),i=a.n(l),o=a(132);const n=r.a.create({textInput:{width:"100%",fontSize:o.o.value,paddingTop:o.K.value,paddingRight:o.J.value,paddingBottom:o.K.value,paddingLeft:o.I.value,lineHeight:"24px",outline:0,border:`${o.g.value} solid ${o.c.value}`,":focus":{borderColor:o.d.value}},flat:{border:"none",borderBottom:[o.g.value,"solid",o.c.value].join(" "),":focus":{borderBottom:[o.f.value,"solid",o.d.value].join(" ")}},error:{borderColor:o.w.value,":focus":{borderColor:o.x.value}}});var s=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&(a[r[l]]=e[r[l]])}return a};class c extends i.a.Component{constructor(){super(...arguments),this.handleChange=(e=>{this.props.onChange(e.currentTarget.value,e)}),this.handleKeyPressed=(e=>{this.props.onKeyPress&&"Enter"===e.key&&(e.preventDefault(),this.props.onKeyPress(e))})}render(){const e=this.props,{className:t,isFlat:a,isError:l}=e,o=s(e,["className","isFlat","isError"]);return i.a.createElement("input",Object.assign({},o,{className:Object(r.b)(t,n.textInput,a&&n.flat,l&&n.error),onChange:this.handleChange,onKeyPress:this.handleKeyPressed}))}}a.d(t,"a",function(){return c})},279:function(e,t,a){"use strict";function r(e,t){let a=JSON.stringify(e),r=JSON.stringify(t);return a||(a=""),r||(r=""),a.split("").sort().join("")===r.split("").sort().join("")}a.d(t,"a",function(){return r})},461:function(e,t,a){"use strict";var r=a(451),l=a(446),i=a(458),o=a(454),n=a(646),s=a(42),c=a(467),u=a(0),p=a.n(u),d=a(33),h=a(26),m=a(39),g=a(9),b=a(24),f=a(156),y=a(216),v=a(14),x=a(16),_=a(606),E=a(448),S=a(132),C=a(602),F=a(600),k=a(601),O=a(624),j=a(599),$=a(211);const w=$["b"]`
  & .bullet-chart-pf,
  & .bullet-chart-pf-legend-item {
    color: ${S.i.value};
  }
  & .bullet-chart-pf-legend-item-text {
    max-width: none;
    text-overflow: initial;
  }
  & .bullet-chart-pf-overflow {
    flex: none;
  }
`;class B extends p.a.Component{shouldComponentUpdate(e){return!!e.values}render(){const{id:e,label:t,legend:a,maxDomain:r,ranges:l,threshold:i,values:o}=this.props,n=r>0?r:100;return p.a.createElement(p.a.Fragment,null,Boolean(o.length)&&p.a.createElement("div",{className:w},p.a.createElement(O.a,{customAxis:p.a.createElement(C.a,null,p.a.createElement(k.a,{value:0,text:"0"}),p.a.createElement(k.a,{value:50,text:`${n/2}`}),p.a.createElement(k.a,{value:100,text:`${n}`})),id:e,label:t,ranges:l,showAxis:!0,thresholdError:i,thresholdWarning:i,values:o}),p.a.createElement(F.a,{id:"cpu-legend"},a.map((e,t)=>p.a.createElement(j.a,{key:`legend-${t}`,title:e.title,value:e.value,color:e.color,tooltipFunction:e.tooltipFunction})))))}}var R=a(452);const D=n.a.create({charge:{display:"flex",alignItems:"center"},chargeLabel:{},chargeValue:{marginTop:0,marginBottom:0,marginRight:S.H.var},chargeLabelUnit:{fontSize:S.p.value,color:S.i.var},chargeLabelDate:{fontSize:S.p.value,color:S.j.var},cpuContainer:{paddingLeft:S.E.value,paddingTop:S.J.value},content:{backgroundColor:S.b.var,paddingTop:S.J.value,height:"100%"},header:{display:"flex",justifyContent:"space-between",padding:S.J.var,backgroundColor:S.a.var},headerLeft:{flex:1},headerRight:{display:"flex",justifyContent:"flex-end"},memoryContainer:{paddingTop:S.J.value},title:{paddingBottom:S.I.var},ocpDetails:{backgroundColor:S.b.var,minHeight:"100%"},groupBySelector:{display:"flex",alignItems:"center"},groupBySelectorLabel:{marginBottom:0,marginRight:S.H.var},toolbarContainer:{backgroundColor:S.b.value},infoItemArrow:{position:"relative",bottom:S.K.value}}),I=$["b"]`
  min-height: 100%;
  padding: 0 ${S.J.value};
  background-color: ${S.l.value};
  ${S.i.name}: ${S.k.value};
  ${S.j.name}: ${S.l.value};

  .list-view-pf {
    margin-top: 0;
  }
  .list-group-item:hover {
    background-color: #fff;
    box-shadow: ${S.h.value};
    z-index: 1;
  }

  & * {
    // outline: 1px solid blue;
  }

  .list-group-item-heading,
  strong {
    font-weight: ${S.s.value};
    word-break: break-word;
  }

  .list-group-item-heading {
    font-size: ${S.o.value};
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
    align-items: flex-end;
    text-align: left;
    word-break: break-word;
    .fa {
      margin-right 0;
    }
  }

  .list-view-pf-actions .list-view-pf-additional-info-item {
    align-items: flex-end;
  }

  .list-view-pf-additional-info-item 
    strong {
      display: block;
      margin-right: 0;
      margin-bottom: ${S.K.value};
      font-size: ${S.o.value};
      &.iconOverride {
        &.decrease {
          color: ${S.L.value};
        }
        &.increase {
          color: ${S.w.value};
        }
        .fa-sort-asc, .fa-sort-desc {
          margin-left: 10px;
        }
        .fa-sort-asc::before {
          color: ${S.w.value};
        }
        .fa-sort-desc::before {
          color: ${S.L.value};
        }
        span {
          margin-right: -17px !important;
        }
      }
    }
  }

  .list-view-pf-additional-info-item span {
    font-size: ${S.q.value};
    color: ${S.y.value};
  }

  .list-group-item {
    padding: ${S.G.value} ${S.J.value};
    border-bottom: 2px solid #f2f2f2;
  }

  .list-group-item:first-child {
    border-top: 0;
    padding: 0.55rem ${S.G.value} ${S.K.value} 3.5rem;

    &,
    .list-group-item-heading,
    .list-view-pf-additional-info-item strong {
      font-size: ${S.p.value};
      font-weight: ${S.r.value};
    }

    .list-view-pf-additional-info {
      transform: translateX(-0.55rem);
    }

    .list-view-pf-actions .list-view-pf-additional-info-item {
      float: right;
    }
  }

  .list-group-item-container {
    padding: ${S.G.value} ${S.F.value}
      ${S.G.value} ${S.F.value};
    margin: ${S.G.value} -${S.J.value} -${S.G.value} -${S.J.value};
    background-image: linear-gradient(
      to right,
      ${S.B.value},
      ${S.B.value} 3px,
      transparent 3px
    );
  }

  .list-group-item.list-view-pf-expand-active {
    background-color: #fff;
  }

  .list-view-pf-expand-active {
    box-shadow: ${S.h.value};
    z-index: 1;
    background-image: linear-gradient(
      to right,
      ${S.B.value},
      ${S.B.value} 3px,
      transparent 3px
    );
  }
`,T=$["b"]`
  margin-left: ${S.J.value};
  margin-right: ${S.J.value};
  background-color: ${S.k.value};
  font-size: ${S.q.value};

  .pf-c-button {
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;
    display: inline-flex;
    align-items: center;
  }

  .fa-download {
    color: ${S.i.value};
    margin-right: ${S.I.value};
    font-size: 1.125rem;
  }

  .toolbar-pf-actions {
    display: flex;
    padding-top: ${S.I.value};
    padding-bottom: ${S.I.value};
  }

  .form-group {
    border: none;
  }

  .btn {
    line-height: 28px;
  }

  .btn-link {
    color: ${S.j.value};
    margin-left: ${S.I.value};
  }

  .btn-link .fa {
    font-size: ${S.n.value};
    color: ${S.i.value};
  }

  .pf-m-plain {
    padding: 0;
    display: flex;
    align-items: center;
  }

  .dropdown .btn {
    border-radius: ${S.e.value};
    background: transparent;
    box-shadow: none;
    border-color: #c7c7c7;
    font-size: ${S.o.value};
    font-weight: 500;
    padding-left: ${S.I.value};
    padding-right: ${S.I.value};
  }

  input[type='text'] {
    border-color: #c7c7c7;
    border-radius: ${S.e.value};
  }

  /* filter results */

  .toolbar-pf-results {
    font-size: ${S.p.value};
    padding: ${S.I.value} 0;
    line-heght: ${S.t.value};
    font-weight: ${S.s.value};

    .col-sm-12 {
      display: flex;
      align-items: center;
    }

    h5 {
      font-size: ${S.p.value};
      font-weight: ${S.s.value};
      line-height: ${S.t.value};
    }

    .filter-pf-active-label {
      line-height: ${S.t.value};
    }

    .list-inline {
      line-height: ${S.t.value};
    }

    .label {
      font-size: ${S.q.value};
      border-radius: ${S.e.value};
      display: inline-flex;
      align-items: center;
    }

    .pf-remove-button {
      display: inline-flex;
      font-weight: ${S.s.value};
    }
  }
`,N=e=>()=>p.a.createElement(R.a,{id:(()=>Date.now())()},`${e.title}`);const q=Object(m.a)((e,{queryString:t})=>{return{cpuReport:g.c.selectReport(e,"cpu",t),cpuReportFetchStatus:g.c.selectReportFetchStatus(e,"cpu",t),memoryReport:g.c.selectReport(e,"memory",t),memoryReportFetchStatus:g.c.selectReportFetchStatus(e,"memory",t)}}),A={fetchReport:g.a.fetchReport},M=Object(d.c)()(Object(h.b)(q,A)(class extends p.a.Component{componentDidMount(){const{cpuReport:e,memoryReport:t,queryString:a}=this.props;e||this.props.fetchReport("cpu",a),t||this.props.fetchReport("memory",a)}componentDidUpdate(e){e.queryString!==this.props.queryString&&(this.props.fetchReport("cpu",this.props.queryString),this.props.fetchReport("memory",this.props.queryString))}getChartDatum(e){const{t:t}=this.props,a={capacity:0,legend:[],limit:0,maxDomain:0,ranges:[],values:[]};if(e){a.limit=Math.trunc(e.total.limit),a.capacity=Math.trunc(e.total.capacity);const r=Math.trunc(e.total.request),l=Math.trunc(e.total.usage);a.maxDomain=Math.max(l,r,a.limit,a.capacity),a.ranges=[{color:S.z.value,title:t("ocp_details.bullet.capacity",{value:a.capacity}),value:Math.trunc(a.capacity/a.maxDomain*100)}],a.values=[{color:S.v.value,title:t("ocp_details.bullet.usage",{value:l}),value:Math.trunc(l/a.maxDomain*100)},{color:S.D.value,title:t("ocp_details.bullet.requests",{value:r}),value:Math.trunc(r/a.maxDomain*100)}];const i=[{className:"limit",color:S.w.value,title:t("ocp_details.bullet.limit",{value:a.limit})},{color:S.z.value,title:t("ocp_details.bullet.capacity",{value:a.capacity})}];a.ranges.map((e,t)=>{e.tooltipFunction=N(e)}),a.values.map((e,t)=>{e.tooltipFunction=N(e)}),i.map((e,t)=>{e.tooltipFunction=N(e)}),a.legend=[...a.values,...i],a.limit=Math.trunc(a.limit/a.maxDomain*100)}return a}render(){const{cpuReport:e,memoryReport:t,t:a}=this.props,r=this.getChartDatum(e),l=this.getChartDatum(t);return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:Object(n.b)(D.cpuContainer)},p.a.createElement(E.a,null,p.a.createElement(_.a,{md:12,lg:6},p.a.createElement(p.a.Fragment,null)),p.a.createElement(_.a,{md:12,lg:6},Boolean(r&&r.values.length)&&p.a.createElement(B,{id:"cpu-chart",label:a("ocp_details.bullet.cpu_label"),legend:r.legend,maxDomain:r.maxDomain,ranges:r.ranges,threshold:r.limit,values:r.values})))),p.a.createElement("div",{className:Object(n.b)(D.memoryContainer)},p.a.createElement(E.a,null,p.a.createElement(_.a,{md:12,lg:6},p.a.createElement(p.a.Fragment,null)),p.a.createElement(_.a,{md:12,lg:6},Boolean(l&&l.values.length)&&p.a.createElement(B,{id:"memory-chart",label:a("ocp_details.bullet.memory_label"),legend:l.legend,maxDomain:l.maxDomain,ranges:l.ranges,threshold:l.limit,values:l.values})))))}}));const G=Object(d.c)()(Object(h.b)()(class extends p.a.Component{constructor(){super(...arguments),this.state={expanded:!1},this.handleExpand=(()=>{this.setState({expanded:!0})}),this.handleExpandClose=(()=>{this.setState({expanded:!1})}),this.handleCheckboxChange=(e=>{const{item:t,onCheckboxChange:a}=this.props;a(e.currentTarget.checked,t)}),this.handleSelectChange=(e=>{const t=e.currentTarget.value;this.setState({currentGroupBy:t})})}getQueryString(){const{item:e,parentGroupBy:t,parentQuery:a}=this.props,r=Object.assign({},a,{delta:void 0,filter:{time_scope_units:"month",time_scope_value:-1,resolution:"monthly",limit:5},group_by:{[t]:e.id},order_by:void 0});return Object(s.a)(r)}render(){const{charge:e,t:t,item:a,parentGroupBy:r,selected:l}=this.props,i=new Date,o=i.getDate(),s=(i.getMonth()-1)%12,u=Object(f.a)(Math.abs(a.deltaValue)),d=null!==a.deltaPercent?Math.abs(a.deltaPercent).toFixed(2):0;let h="iconOverride";null!==a.deltaPercent&&a.deltaValue<0&&(h+=" decrease"),null!==a.deltaPercent&&a.deltaValue>0&&(h+=" increase");const m=this.getQueryString();return p.a.createElement(c.a.Item,{key:a.label,heading:a.label,checkboxInput:p.a.createElement("input",{type:"checkbox",checked:l,onChange:this.handleCheckboxChange}),additionalInfo:[p.a.createElement(c.a.InfoItem,{key:"1",stacked:!0},p.a.createElement("strong",{className:h},t("percent",{value:d}),Boolean(null!==a.deltaPercent&&a.deltaValue>0)&&p.a.createElement("span",{className:Object(n.b)("fa fa-sort-asc",D.infoItemArrow)}),Boolean(null!==a.deltaPercent&&a.deltaValue<0)&&p.a.createElement("span",{className:Object(n.b)("fa fa-sort-desc",D.infoItemArrow)})),p.a.createElement("span",null,Boolean(null!==a.deltaPercent&&a.deltaValue>0)&&(Boolean(o<31)&&t("ocp_details.increase_since_date",{date:o,month:s,value:u})||t("ocp_details.increase_since_last_month",{date:o,month:s,value:u}))||Boolean(null!==a.deltaPercent&&a.deltaValue<0)&&(Boolean(o<31)&&t("ocp_details.decrease_since_date",{date:o,month:s,value:u})||t("ocp_details.decrease_since_last_month",{date:o,month:s,value:u}))||t("ocp_details.no_change_since_date",{date:o,month:s})))],actions:[p.a.createElement(c.a.InfoItem,{key:"1",stacked:!0},p.a.createElement("strong",null,Object(f.a)(a.charge)),p.a.createElement("span",null,(a.charge/e*100).toFixed(2),t("percent_of_charge")))],onExpand:this.handleExpand,onExpandClose:this.handleExpandClose},p.a.createElement(x.a,null,p.a.createElement(v.a,null,Boolean(m)&&p.a.createElement(M,{queryString:m,currentGroupBy:r}))))}}));var K=a(621),P=a(618),V=a(276),L=a(464),z=a(2),J=a(463),Q=a(456),U=a(279);const H=$["b"]`
  &.pf-c-button {
    --pf-c-button--m-disabled--BackgroundColor: none;
  }
`,W=$["b"]`
  &.pf-c-dropdown__toggle {
    --pf-c-dropdown__toggle--MinHeight: auto;
  }
`;class X extends p.a.Component{constructor(){super(...arguments),this.state={activeFilters:[],currentFilterType:this.props.filterFields[0],currentValue:"",currentSortType:this.props.sortField,isSortNumeric:!(!this.props.sortField||!this.props.sortField.isNumeric)&&this.props.sortField.isNumeric,isSortAscending:!(this.props.query&&this.props.sortField&&this.props.sortField.id&&"desc"===this.props.query.order_by[this.props.sortField.id]),isSortByOpen:!1,currentViewType:"list",filterCategory:void 0,report:void 0},this.addQuery=(e=>{const t=[];Object.keys(e.group_by).forEach(a=>{if("*"!==e.group_by[a])if(Array.isArray(e.group_by[a]))e.group_by[a].forEach(e=>{const r=a.id||a,l=this.getFilter(r,e);t.push(l)});else{const r=a.id||a,l=this.getFilter(r,e.group_by[a]);t.push(l)}}),this.setState({activeFilters:t})}),this.clearFilters=(e=>{const{currentFilterType:t}=this.state;this.setState({activeFilters:[]}),this.props.onFilterRemoved(t.id,""),e.preventDefault()}),this.filterAdded=((e,t)=>{const{currentFilterType:a}=this.state;this.props.onFilterAdded(a.id,t)}),this.getFilter=((e,t)=>{const{currentFilterType:a}=this.state,r=this.getFilterLabel(e,t);return{field:a.id,label:r,value:t}}),this.getFilterLabel=((e,t)=>{let a="";return a=(a=e.title?e.title:e).charAt(0).toUpperCase()+a.slice(1)+": ",t.filterCategory?a+=`${t.filterCategory.title||t.filterCategory}-${t.filterValue.title||t.filterValue}`:t.title?a+=t.title:a+=t,a}),this.handleExportClicked=(()=>{this.props.onExportClicked()}),this.handleSortBySelect=(e=>{this.setState({isSortByOpen:!this.state.isSortByOpen})}),this.handleSortByToggle=(e=>{this.setState({isSortByOpen:e})}),this.onValueKeyPress=(e=>{const{currentValue:t,currentFilterType:a}=this.state;"Enter"===e.key&&t&&t.length>0&&(this.setState({currentValue:""}),this.filterAdded(a,t),e.stopPropagation(),e.preventDefault())}),this.removeFilter=(e=>{const{activeFilters:t}=this.state,a=t.indexOf(e);if(a>-1){const r=[...t.slice(0,a),...t.slice(a+1)];this.setState({activeFilters:r}),this.props.onFilterRemoved(e.field,e.value)}}),this.selectFilterType=(e=>{const{currentFilterType:t}=this.state;t!==e&&this.setState({currentValue:"",currentFilterType:e})}),this.toggleCurrentSortDirection=(()=>{const{currentSortType:e,isSortAscending:t}=this.state;this.setState({isSortAscending:!t}),this.props.onSortChanged(e.id,!t)}),this.updateCurrentSortType=((e,t)=>{this.setState({currentSortType:t,isSortNumeric:t.isNumeric,isSortAscending:!0}),this.props.onSortChanged(t.id,!0)}),this.updateCurrentValue=(e=>{this.setState({currentValue:e})})}componentDidUpdate(e,t){const{filterFields:a,query:r,report:l,sortField:i}=this.props;l&&!Object(U.a)(l,e.report)&&this.addQuery(r),Object(U.a)(a,e.filterFields)||this.setState({currentFilterType:this.props.filterFields[0]}),Object(U.a)(i,e.sortField)||this.setState({currentSortType:i,isSortAscending:!(r&&"desc"===r.order_by[i.id])})}renderInput(){const{currentFilterType:e,currentValue:t}=this.state;return e?p.a.createElement(V.a,{onChange:this.updateCurrentValue,onKeyPress:this.onValueKeyPress,placeholder:e.placeholder,type:"text",value:t}):null}render(){const{isExportDisabled:e,sortFields:t}=this.props,{activeFilters:a,currentFilterType:r,currentSortType:n,isSortNumeric:s,isSortAscending:c,isSortByOpen:u}=this.state;return p.a.createElement(J.a,null,p.a.createElement(L.a,null,p.a.createElement(L.a.TypeSelector,{filterTypes:this.props.filterFields,currentFilterType:r,onFilterTypeSelected:this.selectFilterType}),this.renderInput()),p.a.createElement(Q.a,null,p.a.createElement(o.a,{onClick:e=>e.preventDefault(),onSelect:this.handleSortBySelect,toggle:p.a.createElement(i.a,{className:W,onToggle:this.handleSortByToggle},n.title),isOpen:u,dropdownItems:t.map(e=>p.a.createElement(l.a,{key:e.id,onClick:t=>this.updateCurrentSortType(t,e)},e.title))}),p.a.createElement(Q.a.DirectionSelector,{isNumeric:s,isAscending:c,onClick:this.toggleCurrentSortDirection})),p.a.createElement("div",{className:"form-group"},p.a.createElement(K.c,{className:H,isDisabled:e,onClick:this.handleExportClicked,variant:K.b.link},p.a.createElement(P.a,null),"Export")),!a||0===a.length&&p.a.createElement(J.a.Results,null,p.a.createElement("h5",null,this.props.resultsTotal," Results")),a&&a.length>0&&p.a.createElement(J.a.Results,null,p.a.createElement("h5",null,this.props.resultsTotal," Results"),p.a.createElement(L.a.ActiveLabel,null,"Active Filters:"),p.a.createElement(L.a.List,null,a.map((e,t)=>p.a.createElement(L.a.Item,{key:t,onRemove:this.removeFilter,filterData:e},e.label))),p.a.createElement("a",{href:"#",onClick:this.clearFilters},"Clear All Filters")))}}X.defaultProps={onActionPerformed:z.d};var Y=a(449),Z=a(630),ee=a(278),te=a.n(ee),ae=a(38),re=a(181),le=a(212),ie=a(167);const oe=n.a.create({modal:{h2:{marginBottom:S.J.value},input:{marginRight:S.K.var},ul:{marginLeft:S.I.var}}}),ne=[{label:"Daily",value:"daily"},{label:"Monthly",value:"monthly"}];var se=Object(h.b)(Object(m.a)(e=>({error:ae.c.selectExportError(e),export:ae.c.selectExport(e),fetchStatus:ae.c.selectExportFetchStatus(e),isExportModalOpen:b.c.selectIsExportModalOpen(e)})),{exportReport:ae.a.exportReport,closeExportModal:b.a.closeExportModal})(Object(d.c)()(class extends p.a.Component{constructor(){super(...arguments),this.defaultState={resolution:"daily"},this.state=Object.assign({},this.defaultState),this.getQueryString=(()=>{const{groupById:e,isAllItems:t,items:a,query:r}=this.props,{resolution:l}=this.state,i=Object.assign({},r,{group_by:void 0,order_by:void 0});i.filter.resolution=l;let o=Object(s.a)(i);if(t)o+=`&group_by[${e}]=*`;else for(const t of a)o+=`&group_by[${e}]=`+t.label;return o}),this.handleCancel=(()=>{this.props.closeExportModal()}),this.handleFetchReport=(()=>{const{exportReport:e}=this.props;e("charge",this.getQueryString())}),this.handleResolutionChange=((e,t)=>{this.setState({resolution:t.currentTarget.value})})}componentDidUpdate(e){const{closeExportModal:t,fetchStatus:a,isExportModalOpen:r}=this.props;r&&!e.isExportModalOpen&&this.setState(Object.assign({},this.defaultState)),this.props.export!==e.export&&2===a&&(te()(this.props.export,"report.csv","text/csv"),t())}render(){const{fetchStatus:e,groupById:t,items:a,t:r}=this.props,{resolution:l}=this.state;return this.props.isExportModalOpen&&Object(ie.a)(a,{key:"id",direction:0}),p.a.createElement(Z.a,{className:Object(n.b)(oe.modal),isLarge:!0,isOpen:this.props.isExportModalOpen,onClose:this.handleCancel,title:r("export.title"),actions:[p.a.createElement(K.c,Object.assign({},Object(re.a)(re.b.export.cancel_btn),{key:"cancel",onClick:this.handleCancel,variant:K.b.secondary}),r("export.cancel")),p.a.createElement(K.c,Object.assign({},Object(re.a)(re.b.export.submit_btn),{isDisabled:1===e,key:"confirm",onClick:this.handleFetchReport,variant:K.b.primary}),r("export.confirm"))]},p.a.createElement("h2",null,r("export.heading",{groupBy:t})),p.a.createElement(le.a,{label:r("export.aggregate_type")},p.a.createElement(p.a.Fragment,null,ne.map((e,t)=>p.a.createElement(Y.a,{key:t,id:"resolution",isValid:void 0!==e.value,label:r(e.label),value:e.value,checked:l===e.value,name:"resolution",onChange:this.handleResolutionChange,"aria-label":r(e.label)})))),p.a.createElement(le.a,{label:r("export.selected",{groupBy:t})},p.a.createElement("ul",null,a.map((e,t)=>p.a.createElement("li",{key:t},e.label)))))}}));const ce="charge",ue={delta:"charge",filter:{time_scope_units:"month",time_scope_value:-1,resolution:"monthly"},group_by:{project:"*"},order_by:{charge:"desc"}},pe=[{label:"cluster",value:"cluster"},{label:"node",value:"node"},{label:"project",value:"project"}];const de=Object(m.a)((e,t)=>{const a=Object(s.b)(location.search),r={delta:"charge",filter:Object.assign({},ue.filter,a.filter),group_by:a.group_by||ue.group_by,order_by:a.order_by||ue.order_by},l=Object(s.a)(r);return{report:g.c.selectReport(e,"charge",l),reportFetchStatus:g.c.selectReportFetchStatus(e,"charge",l),queryString:l,query:r}}),he={fetchReport:g.a.fetchReport,openExportModal:b.a.openExportModal};t.a=Object(d.c)()(Object(h.b)(de,he)(class extends p.a.Component{constructor(e,t){super(e,t),this.defaultState={isGroupByOpen:!1,selectedItems:[]},this.state=Object.assign({},this.defaultState),this.handleGroupByItemClick=((e,t)=>{const{history:a,query:r}=this.props,l=t,i=Object.assign({},r,{group_by:{[l]:"*"},order_by:{charge:"desc"}});a.replace(this.getRouteForQuery(i)),this.setState({selectedItems:[]})}),this.handleGroupBySelect=(e=>{this.setState({isGroupByOpen:!this.state.isGroupByOpen})}),this.handleGroupByToggle=(e=>{this.setState({isGroupByOpen:e})}),this.onCheckboxChange=((e,t)=>{const{selectedItems:a}=this.state;let r=[...a,t];if(!e){let e=-1;for(let r=0;r<a.length;r++)if(a[r].label===t.label){e=r;break}e>-1&&(r=[...a.slice(0,e),...a.slice(e+1)])}this.setState({selectedItems:r})}),this.onCheckboxAllChange=(e=>{const{query:t,report:a}=this.props;let r=[];if(e.currentTarget.checked){const e=Object(y.b)(t.group_by);r=Object(y.c)({report:a,idKey:e})}this.setState({selectedItems:r})}),this.updateReport=(()=>{const{query:e,location:t,fetchReport:a,history:r,queryString:l}=this.props;t.search?a(ce,l):r.replace(this.getRouteForQuery({group_by:e.group_by,order_by:{charge:"desc"}}))}),this.getFilterFields=(e=>{const{t:t}=this.props;return"cluster"===e?[{id:"cluster",title:t("ocp_details.filter.cluster_select"),placeholder:t("ocp_details.filter.cluster_placeholder"),filterType:"text"}]:"node"===e?[{id:"node",title:t("ocp_details.filter.node_select"),placeholder:t("ocp_details.filter.node_placeholder"),filterType:"text"}]:"project"===e?[{id:"project",title:t("ocp_details.filter.project_select"),placeholder:t("ocp_details.filter.project_placeholder"),filterType:"text"}]:[]}),this.getSortTypes=(e=>{const{t:t}=this.props;return"cluster"===e?[{id:"cluster",isNumeric:!1,title:t("ocp_details.order.name")},{id:"charge",isNumeric:!0,title:t("ocp_details.order.charge")}]:"node"===e?[{id:"node",isNumeric:!1,title:t("ocp_details.order.name")},{id:"charge",isNumeric:!0,title:t("ocp_details.order.charge")}]:"project"===e?[{id:"project",isNumeric:!1,title:t("ocp_details.order.name")},{id:"charge",isNumeric:!0,title:t("ocp_details.order.charge")}]:[]}),this.isSelected=(e=>{const{selectedItems:t}=this.state;let a=!1;for(const r of t)if(r.label===e.label){a=!0;break}return a}),this.onCheckboxChange=this.onCheckboxChange.bind(this),this.onExportClicked=this.onExportClicked.bind(this),this.onFilterAdded=this.onFilterAdded.bind(this),this.onFilterRemoved=this.onFilterRemoved.bind(this),this.onSortChanged=this.onSortChanged.bind(this)}componentDidMount(){this.updateReport(),this.setState({})}componentDidUpdate(e){const{location:t,report:a,queryString:r}=this.props;e.queryString===r&&a&&t.search||this.updateReport()}getRouteForQuery(e){return`/ocp?${Object(s.a)(e)}`}onExportClicked(){this.props.openExportModal()}onFilterAdded(e,t){const{history:a,query:r}=this.props;r.group_by[e]?"*"===r.group_by[e]?r.group_by[e]=t:r.group_by[e].includes(t)||(r.group_by[e]=[r.group_by[e],t]):r.group_by[e]=[t];const l=this.getRouteForQuery(r);a.replace(l)}onFilterRemoved(e,t){const{history:a,query:r}=this.props;if(""!==t&&Array.isArray(r.group_by[e])){const a=r.group_by[e].indexOf(t);a>-1&&(r.group_by[e]=[...r.group_by[e].slice(0,a),...r.group_by[e].slice(a+1)])}else r.group_by[e]="*";const l=this.getRouteForQuery(r);a.replace(l)}onSortChanged(e,t){const{history:a,query:r}=this.props;r.order_by={},r.order_by[e]=t?"asc":"desc";const l=this.getRouteForQuery(r);a.replace(l)}render(){const{isGroupByOpen:e,selectedItems:t}=this.state,{query:a,report:s,t:u}=this.props,d=Object(y.b)(a.group_by),h=this.getFilterFields(d),m=this.getSortTypes(d),g=new Date,b=Object(y.c)({report:s,idKey:d});let v=m[0];for(const e of m)if(a.order_by&&a.order_by[e.id]){v=e;break}return p.a.createElement("div",{className:Object(n.b)(D.ocpDetails)},p.a.createElement("header",{className:Object(n.b)(D.header)},p.a.createElement("div",null,p.a.createElement(r.b,{className:Object(n.b)(D.title),size:"2xl"},u("ocp_details.title")),p.a.createElement("div",{className:Object(n.b)(D.groupBySelector)},p.a.createElement("label",{className:Object(n.b)(D.groupBySelectorLabel)},u("group_by.charges"),":"),p.a.createElement(o.a,{onClick:e=>e.preventDefault(),onSelect:this.handleGroupBySelect,toggle:p.a.createElement(i.a,{onToggle:this.handleGroupByToggle},u(`group_by.values.${d}`)),isOpen:e,dropdownItems:pe.map(e=>p.a.createElement(l.a,{key:e.value,onClick:t=>this.handleGroupByItemClick(t,e.value)},u(`group_by.values.${e.label}`)))}))),Boolean(s)&&p.a.createElement("div",{className:Object(n.b)(D.charge)},p.a.createElement(r.b,{className:Object(n.b)(D.chargeValue),size:"4xl"},Object(f.a)(s.total.charge)),p.a.createElement("div",{className:Object(n.b)(D.chargeLabel)},p.a.createElement("div",{className:Object(n.b)(D.chargeLabelUnit)},u("ocp_details.total_charge")),p.a.createElement("div",{className:Object(n.b)(D.chargeLabelDate)},u("since_date",{month:g.getMonth(),date:1}))))),p.a.createElement("div",{className:Object(n.b)(D.content)},p.a.createElement("div",{className:Object(n.b)(D.toolbarContainer)},p.a.createElement("div",{className:T},p.a.createElement(X,{exportText:u("ocp_details.export_link"),filterFields:h,isExportDisabled:0===t.length,onExportClicked:this.onExportClicked,onFilterAdded:this.onFilterAdded,onFilterRemoved:this.onFilterRemoved,onSortChanged:this.onSortChanged,sortField:v,sortFields:m,report:s,resultsTotal:b.length,query:a}),p.a.createElement(se,{isAllItems:t.length===b.length,groupById:d,items:t,query:a}))),p.a.createElement("div",{className:I},p.a.createElement(c.a,null,p.a.createElement(c.a.Item,{key:"header_item",heading:u("ocp_details.name_column_title",{groupBy:d}),checkboxInput:p.a.createElement("input",{type:"checkbox",checked:t.length===b.length,onChange:this.onCheckboxAllChange}),additionalInfo:[p.a.createElement(c.a.InfoItem,{key:"1"},p.a.createElement("strong",null,u("ocp_details.change_column_title")))],actions:[p.a.createElement(c.a.InfoItem,{key:"2"},p.a.createElement("strong",null,u("ocp_details.charge_column_title"),Boolean(s)&&p.a.createElement(p.a.Fragment,null,u("ocp_details.charge_column_subtitle",{charge:Object(f.a)(s.total.charge)}))))]}),b.map((e,t)=>p.a.createElement(G,{charge:s.total.charge,key:t,parentQuery:a,parentGroupBy:d,item:e,onCheckboxChange:this.onCheckboxChange,selected:this.isSelected(e)}))))))}}))},634:function(e,t,a){"use strict";a.r(t),function(e){var r=a(41),l=a(461);t.default=Object(r.hot)(e)(l.a)}.call(this,a(40)(e))}}]);
//# sourceMappingURL=dd19c12b0dc8e942acd5.bundle.js.map