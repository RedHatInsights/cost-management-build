(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1151:function(e,t,a){"use strict";a.r(t);var n=a(108),r=a(53),l=a(52),s=a(233),o=a(118),i=a(142),c=a(369),u=a(368),p=a(425),m=a(367),d=a(370),h=a(1180),g=a(737),y=a(734),v=a(731),b=a(2),f=a.n(b),E=a(232),C=a(265);var S=Object(E.d)()(class extends f.a.Component{shouldComponentUpdate(e){return e.filterQuery.name!==this.props.filterQuery.name||e.filterQuery.type!==this.props.filterQuery.type||e.count!==this.props.count}render(){const{t:e,onRemoveAll:t,onRemove:a,count:n,filterQuery:r}=this.props,l=Object.keys(r).filter(e=>["name","type"].includes(e)).filter(e=>r[e]).map(e=>r[e].split(",").map(t=>({name:e,value:t}))).reduce((e,t)=>[...e,...t],[]);return f.a.createElement(f.a.Fragment,null,f.a.createElement(u.a,null,f.a.createElement(c.a,null,f.a.createElement("h5",null,e("source_details.filter.results.count",{count:n})))),l.length>0&&f.a.createElement(f.a.Fragment,null,f.a.createElement(u.a,null,f.a.createElement(c.a,null,e("source_details.filter.results.active"))),f.a.createElement(u.a,null,f.a.createElement(c.a,null,l.map((t,n)=>f.a.createElement(C.a,{style:{paddingRight:"20px"},key:`${t.name}-${t.value}-${n}`,onClick:()=>{a(t.name,t.value)}},e(`source_details.filter.results.${t.name}`),": ",t.value)))),f.a.createElement(u.a,null,f.a.createElement(c.a,null,f.a.createElement(p.a,{onClick:t,variant:"plain"},e("source_details.filter.results.clear"))))))}}),_=a(403),O=a(404),T=a(406),x=a(54);var k=class extends f.a.Component{constructor(e){super(e),this.checkEnter=this.checkEnter.bind(this),this.onSelectType=this.onSelectType.bind(this)}checkEnter(e){if("Enter"===e.key&&this.props.value){const{selected:e,value:t}=this.props;this.props.onSearch({[e]:t})}}onSelectType(e){this.props.onSearch({type:e})}renderInput(){const{selected:e,value:t,onChange:a}=this.props;switch(e){case"type":return f.a.createElement(O.a,{"aria-label":x.a.t("source_details.filter.type_options_aria_label"),value:t,onChange:this.onSelectType},f.a.createElement(_.a,{key:"type-option-empty",value:"",label:"Choose source type"}),f.a.createElement(_.a,{key:"type-option-openshift",value:"OCP",label:x.a.t("source_details.type.OCP")}),f.a.createElement(_.a,{key:"type-option-aws",value:"AWS",label:x.a.t("source_details.type.AWS")}));default:return f.a.createElement(T.a,{value:t,placeholder:x.a.t("source_details.filter.placeholder",{value:e}),id:"sources filter value",onKeyPress:this.checkEnter,onChange:a("value")})}}render(){const{options:e,selected:t}=this.props;return f.a.createElement(u.a,null,f.a.createElement(c.a,null,f.a.createElement(O.a,{"aria-label":x.a.t("source_details.filter.type_aria_label"),value:t,onChange:this.props.onChange("type")},Object.keys(e).map(t=>f.a.createElement(_.a,{key:`option-${t}`,value:t,label:e[t]})))),f.a.createElement(c.a,null,this.renderInput()))}},w=a(426),j=a(415),$=a(416),F=a(3);const R=h.a.create({sourceSettings:{backgroundColor:F.Rd.var},content:{backgroundColor:F.Rd.var,paddingTop:F.oe.value},tableContainer:{marginLeft:F.oe.value,marginRight:F.oe.value},paginationContainer:{paddingBottom:F.me.value,paddingTop:F.me.value,paddingLeft:F.oe.value,paddingRight:F.oe.value,marginLeft:F.oe.value,marginRight:F.oe.value,marginBottom:F.oe.value,backgroundColor:F.Qd.value},toolbarContainer:{paddingBottom:F.me.value,paddingTop:F.me.value,paddingLeft:F.oe.value,paddingRight:F.oe.value,marginLeft:F.oe.value,marginRight:F.oe.value,backgroundColor:F.Qd.value},header:{padding:F.oe.var,backgroundColor:F.Qd.var},breadcrumb:{paddingBottom:F.oe.var},title:{paddingBottom:F.ne.var}});var D=({t:e})=>f.a.createElement("header",{className:Object(h.b)(R.header)},f.a.createElement($.a,{className:Object(h.b)(R.breadcrumb)},f.a.createElement(j.a,null,e("settings")),f.a.createElement(j.a,{isActive:!0},e("cost_management"))),f.a.createElement(w.a,{className:Object(h.b)(R.title),size:"2xl"},e("source_details.title"))),M=a(395),P=a(393),q=a(394),N=(a(205),a(185));const U=h.a.create({container:{display:"flex",justifyContent:"center",height:"100vh",marginTop:"150px"}});var A=Object(E.d)()(Object(r.connect)(null,{openModal:s.a.openModal})(class extends f.a.Component{render(){const{t:e,openModal:t}=this.props;return f.a.createElement("div",{className:Object(h.b)(U.container)},f.a.createElement(M.a,null,f.a.createElement(P.a,{icon:N.b}),f.a.createElement(w.a,{size:"lg"},e("source_details.no_sources.title")),f.a.createElement(q.a,null,f.a.createElement("p",null,e("source_details.no_sources.desc")),f.a.createElement("br",null),f.a.createElement("p",null,e("source_details.no_sources.sub_desc"))),f.a.createElement(p.a,{variant:"primary",onClick:t},e("source_details.no_sources.action"))))}})),Q=a(422),B=a(424),L=a(418);var J=class extends f.a.Component{constructor(e){super(e),this.onToggle=this.onToggle.bind(this),this.onSelect=this.onSelect.bind(this),this.state={isOpen:!1}}onToggle(e){this.setState({isOpen:e})}onSelect(){this.setState(e=>({isOpen:!e.isOpen}))}render(){return f.a.createElement(B.a,{onSelect:this.onSelect,toggle:f.a.createElement(L.a,{onToggle:this.onToggle}),isOpen:this.state.isOpen,isPlain:!0,position:"right",dropdownItems:this.props.actions})}},z=a(800);const V=({name:e,type:t,date:a})=>f.a.createElement("div",null,f.a.createElement("div",{key:"relative"},Object(z.relativeTime)(new Date(a))),f.a.createElement("small",{key:"formated"},(e=>{const t=new Date(e),a=t.toUTCString().split(" "),n=a[2],r=a[3];return`${a[1]} ${n} ${r} ${t.getHours()}:${t.getMinutes()}`})(a))),H=({name:e,smallText:t})=>f.a.createElement("div",null,f.a.createElement("div",{key:"name"},e),f.a.createElement("small",{key:"small-text"},t));var I=(e,t,a)=>{const n=`${t.name}-${t.type}`,r=f.a.createElement(V,{key:`${n}-date`,name:t.name,type:t.type,date:t.created_timestamp}),l=f.a.createElement(H,{name:t.name,smallText:t.authentication.provider_resource_name}),s=f.a.createElement(J,{key:`${n}-actions`,actions:[f.a.createElement(Q.a,{component:"button",onClick:a,key:`${n}-remove-action`},e("source_details.remove_source"))]});return[{title:l},{title:f.a.createElement("div",{key:`${n}-type`},e(`source_details.type.${t.type}`))},{title:f.a.createElement("div",{key:`${n}-added-by`},t.created_by.username)},{title:r},{title:s}]},W=a(274),Y=a(714);var K=({status:e,pagination:t,fetchSources:a})=>0===e?f.a.createElement("div",{style:{width:"130px"}},f.a.createElement(Y.Skeleton,{size:Y.SkeletonSize.md})):f.a.createElement(W.a,{itemCount:t.count,onPerPageSelect:(e,t)=>{a({offset:"0",limit:t.toString()})},onSetPage:(e,n)=>{const r=(n-1)*t.perPage;a({offset:r.toString(),limit:t.perPage.toString()})},page:t.page,perPage:t.perPage,variant:W.b.top}),G=a(1142),X=a(153),Z=a(1149),ee=a(721);const te=ee["a"]`
  &.pf-c-table {
    thead th + th + th + th {
      .pf-c-button {
        text-align: right;
      }
      text-align: right;
    }
    tbody td + td + td + td + td {
      text-align: right;
    }
    td {
      vertical-align: top;
    }
  }
`;var ae=({onCollapse:e,columns:t,rows:a})=>f.a.createElement("div",{className:Object(h.b)(R.tableContainer)},f.a.createElement(X.b,{"aria-label":"source-table",onCollapse:e,cells:t,className:te,rows:a},f.a.createElement(G.a,null),f.a.createElement(Z.a,null)));var ne=Object(E.d)()(class extends f.a.Component{constructor(e){super(e),this.state={selected:[],expanded:[]},this.onSelect=this.onSelect.bind(this),this.onCollapse=this.onCollapse.bind(this),this.onPaginationChange=this.onPaginationChange.bind(this),this.onFilterChange=this.onFilterChange.bind(this),this.onUpdateFilter=this.onUpdateFilter.bind(this),this.onRemove=this.onRemove.bind(this),this.resetFilter=this.resetFilter.bind(this)}componentDidMount(){this.props.fetch()}onRemove(e,t){const a=this.props.query[e];if(!a)return;const n=a.split(","),r=n.indexOf(t);if(r<-1)return;const l=[...n.slice(0,r),...n.slice(r+1)].join(",");this.updateResults(Object.assign({},this.props.query,{[e]:l}))}onUpdateFilter(e){let t=null;return"type"===e&&(t="currentFilterType"),"value"===e&&(t="currentFilterValue"),e=>{null!==t&&this.props.updateFilter({[t]:e})}}updateResults(e){const t=Object.keys(e).filter(t=>e[t]).reduce((t,a)=>{const n=`${a}=${e[a]}`;return null===t?n:`${t}&${n}`},null);this.props.fetch(t)}onPaginationChange(e){const t=Object.assign({},this.props.query,e);this.updateResults(t)}onFilterChange(e){let t=Object.assign({},this.props.query,e);if(e.name){let a=e.name.replace(/,/g,"");this.props.query.name&&(a=[...this.props.query.name.split(","),e.name.replace(/,/g,"")].join(",")),t=Object.assign({},this.props.query,{name:a})}this.updateResults(t)}onSelect(e,t,a){if(-1===a)return void this.setState(e=>({selected:t?this.props.sources.map(e=>`${e.name}-${e.type}`):[]}));const n=this.props.sources[a/2];t&&this.setState(e=>({selected:[...e.selected,`${n.name}-${n.type}`]})),t||this.setState(e=>{const t=e.selected.indexOf(`${n.name}-${n.type}`);return{selected:[...e.selected.slice(0,t),...e.selected.slice(t+1)]}})}resetFilter(){this.updateResults(Object.assign({},this.props.query,{name:null,type:null}))}onCollapse(e,t,a){const n=this.props.sources[t/2];a?this.setState(e=>({expanded:[...e.expanded,`${n.name}-${n.type}`]})):this.setState(e=>{const t=e.expanded.indexOf(`${n.name}-${n.type}`);return{expanded:[...e.expanded.slice(0,t),...e.expanded.slice(t+1)]}})}render(){const{pagination:e,sources:t,status:a,error:n,t:r,onAdd:l,remove:s,showDeleteDialog:o}=this.props,i=[r("source_details.column.name"),r("source_details.column.type"),r("source_details.column.added_by"),r("source_details.column.date_added"),""],b=t.map((e,t)=>({cells:I(r,e,()=>{o({name:e.name,type:e.type,onDelete:()=>{s(e.uuid)}})})})),E=Object.keys(this.props.query).filter(e=>["name","type"].includes(e)).find(e=>this.props.query[e]);return f.a.createElement("div",{className:Object(h.b)(R.sourceSettings)},f.a.createElement(D,{t:r}),f.a.createElement("div",{className:Object(h.b)(R.content)},0!==a&&null===n&&(b.length>0||E)&&f.a.createElement("div",{className:Object(h.b)(R.toolbarContainer)},f.a.createElement(d.a,null,f.a.createElement(m.a,{"aria-label":r("source_details.filter.section_below")},f.a.createElement(k,{onSearch:this.onFilterChange,options:{name:r("source_details.column.name"),type:r("source_details.column.type")},value:this.props.currentFilterValue,selected:this.props.currentFilterType,onChange:this.onUpdateFilter}),f.a.createElement(u.a,null,f.a.createElement(c.a,null,f.a.createElement(p.a,{onClick:()=>{l()},variant:"tertiary"},r("source_details.add_source")))),f.a.createElement(u.a,{style:{marginLeft:"auto"}},f.a.createElement(c.a,null,f.a.createElement(K,{status:a,fetchSources:this.onPaginationChange,pagination:e})))),f.a.createElement(m.a,{"aria-label":r("source_details.filter.section_below")},f.a.createElement(S,{count:e.count,filterQuery:this.props.query,onRemove:this.onRemove,onRemoveAll:this.resetFilter})))),2!==a&&f.a.createElement(v.a,null),2===a&&Boolean(n)&&f.a.createElement(y.a,{error:n}),2===a&&!Boolean(n)&&b.length>0&&f.a.createElement(f.a.Fragment,null,f.a.createElement(ae,{onCollapse:this.onCollapse,columns:i,rows:b}),f.a.createElement("div",{className:Object(h.b)(R.paginationContainer)},f.a.createElement(K,{status:a,fetchSources:this.onPaginationChange,pagination:e}))),2===a&&void 0===E&&0===b.length&&f.a.createElement(A,null),2===a&&E&&0===b.length&&f.a.createElement(g.a,{filter:this.props.query.name,subTitle:r("no_match_found_state.desc")})))}});t.default=Object(r.connect)(Object(l.a)(e=>({sources:i.c.sources(e)||[],error:i.c.error(e),status:i.c.status(e),pagination:i.c.pagination(e),query:i.c.query(e),currentFilterValue:i.c.currentFilterValue(e),currentFilterType:i.c.currentFilterType(e)})),{updateFilter:i.a.updateFilterToolbar,fetch:i.a.fetchSources,onAdd:s.a.openModal,remove:i.a.removeSource,showDeleteDialog:o.a.openModal,notify:n.addNotification})(ne)},800:function(e,t,a){var n;!function(){var a={months:["January","February","March","April","May","June","July","August","September","October","November","December"],toUTC:function(e){var t=e?new Date(e):new Date;return t=new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds())},monthName:function(e){var t;return t="number"==typeof e?e:new Date(e).getMonth()+1,a.months[t-1]},relativeTime:function(e,t){var a,n,r,l,s,o,i=[];if("number"==typeof e?a=e:(l=new Date(e).getTime(),a=((new Date).getTime()-l)/1e3*-1),t||(t={}),t.futureSuffix||(t.futureSuffix="from now"),t.pastSuffix||(t.pastSuffix="ago"),t.presentText||(t.presentText="now"),t.returnObject||(t.returnObject=!1),s=a<0,a=Math.abs(a),n={seconds:Math.floor(a%31536e3%86400%3600%60),minutes:Math.floor(a%31536e3%86400%3600/60),hours:Math.floor(a%31536e3%86400/3600),days:Math.floor(a%31536e3/86400),years:Math.floor(a/31536e3),past:s},t.returnObject)return n;if(0===a)return t.presentText;function c(e,a){o&&(o=t.allUnits,i.push(e+" "+a+(e>1?"s":"")))}return r=n.past?t.pastSuffix:t.futureSuffix,o=!0,n.years&&c(n.years,"year"),n.days&&c(n.days,"day"),n.hours&&c(n.hours,"hour"),n.minutes&&c(n.minutes,"minute"),n.seconds&&c(n.seconds,"second"),i.join(", ")+" "+r},prettyPrint:function(e,t){var a,n,r,l,s,o,i,c,u;return e?"number"==typeof e&&(e=(new Date).setSeconds(e)):e=new Date,t||(t={}),t.showTime||(t.showTime=!1),l=(r=(a=new Date(e)).getDate())>3&&r<21?r+"th":r%10==1?r+"st":r%10==2?r+"nd":r%10==3?r+"rd":r+"th",s=a.getFullYear(),n=this.monthName(a.getMonth()+1)+" "+l+", "+s,i=a.getHours(),c=a.getMinutes(),u=i>=12?"pm":"am",o=(i=i%12?i%12:12)+":"+(c=c<10?"0"+c:c)+" "+u,t.showTime?n+" at "+o:n}};if(void 0===e||!e.exports)return!(void 0!==(n=function(){return a}.apply(t,[]))&&(e.exports=n));e.exports=a}()}}]);
//# sourceMappingURL=fbaaa801c97e6f9e69a7.bundle.js.map