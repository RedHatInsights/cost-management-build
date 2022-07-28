"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[5345],{86208:(e,t,n)=>{n.d(t,{H:()=>s});var a=n(80129);function s(e){return(0,a.stringify)(e,{encode:!1,indices:!1})}},36613:(e,t,n)=>{n.d(t,{k:()=>H,b:()=>Q.b});var a=n(22938),s=n(93952),r=n(92950),i=n.n(r),l=n(74806),o=n(98147),c=n(94377),u=n(26018),h=n(45997),p=n(73466),d=n(8091),g=n(42581),m=n(17096),y=n(53983),f=n(43047),S=n(50484),b=n(7081),O=n(97529),k=n(56645),E=n(93529);class T extends i().Component{constructor(e,t){super(e,t),this.defaultState={isDropdownOpen:!1},this.state=Object.assign({},this.defaultState),this.handleOnDelete=()=>{const{onDelete:e}=this.props;e&&e()},this.handleOnSelect=()=>{const{isDropdownOpen:e}=this.state;this.setState({isDropdownOpen:!e})},this.handleOnToggle=e=>{this.setState({isDropdownOpen:e})},this.handleOnDelete=this.handleOnDelete.bind(this),this.handleOnToggle=this.handleOnToggle.bind(this),this.handleOnSelect=this.handleOnSelect.bind(this)}render(){const{isDisabled:e,intl:t}=this.props,{isDropdownOpen:n}=this.state,r=[i().createElement(a.DropdownItem,{component:"button",isDisabled:e,key:"export-action",onClick:this.handleOnDelete},t.formatMessage(s.Z.delete))];return i().createElement(i().Fragment,null,i().createElement(a.Dropdown,{onSelect:this.handleOnSelect,toggle:i().createElement(a.KebabToggle,{onToggle:this.handleOnToggle}),isOpen:n,isPlain:!0,position:"right",dropdownItems:r}))}}const C=(0,l.ZP)(T);var v=n(49382),D=n(24094),x=n(54881),B=n(32412),I=n(57640);const P={emptyState:{backgroundColor:v.ZP.value,display:"flex",justifyContent:"center",paddingTop:I.ZP.value,width:"100%"},failed:{color:D.ZP.value},failedButton:{fontSize:x.ZP.value},failedHeader:{marginLeft:B.ZP.value}},V="actions",M="created",w="expires",Z="names",R="status";class _ extends i().Component{constructor(e){super(e),this.state={columns:[],rows:[]},this.initDatum=()=>{const{query:e,report:t,intl:n}=this.props;if(!e||!t)return;const r=[],l=t.data.length>0,o=[Object.assign({id:Z,orderBy:"name",title:n.formatMessage(s.Z.names,{count:1})},l&&{transforms:[k.sortable]}),Object.assign({id:M,orderBy:"created",title:n.formatMessage(s.Z.timeOfExport)},l&&{transforms:[k.sortable]}),Object.assign({id:w,orderBy:"expires",title:n.formatMessage(s.Z.expiresOn)},l&&{transforms:[k.sortable]}),{id:R,title:n.formatMessage(s.Z.statusActions)},{id:V,title:""}];t.data.length&&t.data.map((e=>{r.push({cells:[{title:i().createElement("div",null,e.name),id:Z},{title:i().createElement("div",null,e.created),id:M},{title:i().createElement("div",null,e.expires),id:w},{title:this.getStatus(e.status),id:R},{title:i().createElement(C,{onDelete:this.handleOnDelete}),id:V}],item:e})}));const c=[{heightAuto:!0,cells:[{props:{colSpan:7},title:i().createElement(a.Bullseye,null,i().createElement("div",{style:{textAlign:"center"}},i().createElement(a.Spinner,{size:"xl"})))}]}];this.setState({columns:o,loadingRows:c,rows:r,sortBy:{}})},this.getEmptyState=()=>{const{onClose:e,query:t,intl:n}=this.props;if(t.filter_by)for(const e of Object.values(t.filter_by))if("*"!==e)return i().createElement(E.c,{filter:e,showMargin:!1});return i().createElement(a.EmptyState,null,i().createElement(a.EmptyStateIcon,{icon:b.wl}),i().createElement(a.Title,{headingLevel:"h5",size:"lg"},n.formatMessage(s.Z.noExportsStateTitle)),i().createElement(a.EmptyStateBody,null,n.formatMessage(s.Z.exportsEmptyState)),i().createElement(a.Button,{variant:"primary",onClick:e},n.formatMessage(s.Z.close)))},this.getSortBy=()=>{const{query:e}=this.props,{columns:t}=this.state;let n=-1,a=k.SortByDirection.asc;for(const s of Object.keys(e.order_by)){let r=0;for(const i of t){if(i.orderBy===s){a="asc"===e.order_by[s]?k.SortByDirection.asc:k.SortByDirection.desc,n=r;break}r++}}return n>-1?{index:n,direction:a}:{}},this.getStatus=e=>{const{intl:t}=this.props;switch(e){case"completed":return i().createElement(a.Button,{icon:i().createElement(y._8,null),isInline:!0,onClick:this.handleOnDownload,variant:a.ButtonVariant.link},t.formatMessage(s.Z.download));case"failed":return i().createElement(a.Label,{color:"red",icon:i().createElement(f.$O,null),variant:"outline",render:({className:e,content:n,componentRef:r})=>i().createElement(a.Popover,{"aria-label":t.formatMessage(s.Z.exportsFailed),className:e,headerContent:i().createElement("div",{style:P.failed},i().createElement(f.$O,null),i().createElement("span",{style:P.failedHeader},t.formatMessage(s.Z.exportsFailed))),bodyContent:i().createElement("div",null,t.formatMessage(s.Z.exportsFailedDesc))},i().createElement(a.Button,{className:e,innerRef:r,style:P.failedButton,variant:a.ButtonVariant.plain},n))},t.formatMessage(s.Z.status,{value:e}));case"running":return i().createElement(a.Label,{color:"blue",icon:i().createElement(O.bn,null),variant:"outline"},t.formatMessage(s.Z.status,{value:e}));default:return i().createElement(a.Label,{color:"blue",icon:i().createElement(S.lp,null),variant:"outline"},t.formatMessage(s.Z.status,{value:e}))}},this.handleOnDelete=()=>{console.log("handleDelete clicked")},this.handleOnDownload=()=>{console.log("handleOnDownload clicked")},this.handleOnSort=(e,t,n)=>{const{onSort:a}=this.props,{columns:s}=this.state;a&&a(s[t-1].orderBy,n===k.SortByDirection.asc)},this.handleOnSort=this.handleOnSort.bind(this)}componentDidMount(){this.initDatum()}componentDidUpdate(e){const{query:t,report:n}=this.props,a=n&&n.data?JSON.stringify(n.data):"",s=e.report&&e.report.data?JSON.stringify(e.report.data):"";(0,h.pm)(e.query)===(0,h.pm)(t)&&s===a||this.initDatum()}render(){const{intl:e,isLoading:t}=this.props,{columns:n,loadingRows:a,rows:r}=this.state;return i().createElement(i().Fragment,null,i().createElement(k.Table,{"aria-label":e.formatMessage(s.Z.exportsTableAriaLabel),cells:n,rows:t?a:r,sortBy:this.getSortBy(),onSort:this.handleOnSort,variant:k.TableVariant.compact},i().createElement(k.TableHeader,null),i().createElement(k.TableBody,null)),Boolean(0===r.length)&&i().createElement("div",{style:P.emptyState},this.getEmptyState()))}}const K=(0,l.ZP)(_);var j=n(36935);class F extends i().Component{constructor(){super(...arguments),this.getCategoryOptions=()=>{const{intl:e}=this.props;return[{name:e.formatMessage(s.Z.filterByValues,{value:"name"}),key:"name"}]}}render(){const{onFilterAdded:e,onFilterRemoved:t,pagination:n,query:a}=this.props;return i().createElement(j.k,{categoryOptions:this.getCategoryOptions(),onFilterAdded:e,onFilterRemoved:t,pagination:n,query:a,showFilter:!0,style:m.W.toolbarContainer})}}const A=(0,c.X1)(((e,t)=>({}))),N=(0,o.connect)(A,{})(F),q=(0,l.ZP)(N),U={filter:{limit:10,offset:0},order_by:{name:"desc"}};class L extends i().Component{constructor(){super(...arguments),this.defaultState={query:U},this.state=Object.assign({},this.defaultState),this.getPagination=(e=!1)=>{const{report:t}=this.props,n=t&&t.meta?t.meta.count:0,s=t&&t.meta&&t.meta.filter&&t.meta.filter.limit?t.meta.filter.limit:U.filter.limit,r=(t&&t.meta&&t.meta.filter&&t.meta.filter.offset?t.meta.filter.offset:U.filter.offset)/s+1;return i().createElement(a.Pagination,{isCompact:!e,itemCount:n,onPerPageSelect:this.handlePerPageSelect,onSetPage:this.handleSetPage,page:r,perPage:s,variant:e?a.PaginationVariant.bottom:a.PaginationVariant.top,widgetId:"`pagination${isBottom ? '-bottom' : ''}`"})},this.getTable=()=>{const{onClose:e,report:t,reportFetchStatus:n}=this.props,{query:a}=this.state;return i().createElement(K,{isLoading:1===n,onClose:e,onSort:this.handleOnSort,query:a,report:t})},this.handleFilterAdded=(e,t)=>{const{query:n}=this.state,a=(0,d.W)(n,e,t);this.setState({query:a},(()=>{}))},this.handleFilterRemoved=(e,t)=>{const{query:n}=this.state,a=(0,d.U)(n,e,t);this.setState({query:a},(()=>{}))},this.handleOnSort=(e,t)=>{const{query:n}=this.state,a=Object.assign({},JSON.parse(JSON.stringify(n)));a.order_by={},a.order_by[e]=t?"asc":"desc",this.setState({query:a},(()=>{}))},this.handlePerPageSelect=(e,t)=>{const{query:n}=this.state,a=Object.assign({},JSON.parse(JSON.stringify(n)));a.filter=Object.assign(Object.assign({},n.filter),{limit:t}),this.setState({query:a},(()=>{}))},this.handleSetPage=(e,t)=>{const{report:n}=this.props,{query:a}=this.state,s=n&&n.meta&&n.meta.filter&&n.meta.filter.limit?n.meta.filter.limit:U.filter.limit,r=t*s-s,i=Object.assign({},JSON.parse(JSON.stringify(a)));i.filter=Object.assign(Object.assign({},a.filter),{offset:r}),this.setState({query:i},(()=>{}))}}render(){const{intl:e,reportFetchStatus:t}=this.props;return i().createElement(i().Fragment,null,e.formatMessage(s.Z.exportsDesc),i().createElement("div",{style:m.W.content},i().createElement(q,{onFilterAdded:this.handleFilterAdded,onFilterRemoved:this.handleFilterRemoved,pagination:this.getPagination()}),1===t?i().createElement(p.Z,null):i().createElement(i().Fragment,null,i().createElement("div",null,this.getTable()),i().createElement("div",{style:m.W.pagination},this.getPagination(!0)))))}}const G=(0,c.X1)((e=>{const t={filter:Object.assign({},U.filter),filter_by:U.filter_by,order_by:U.order_by},n="cost",a=(0,h.pm)(t);return{report:{meta:{count:11,filter:{limit:10,offset:0},order_by:{cost_total:"desc"}},data:[{name:"OpenShift grouped by Project",created:"2022-01-17 13:25:07",expires:"2022-01-24",status:"pending"},{name:"Amazon Web Services grouped by Account",created:"2022-01-17 13:24:23",expires:"2022-01-24",status:"running"},{name:"OpenShift grouped by Cluster",created:"2022-01-16 13:23:08",expires:"2022-01-23",status:"completed"},{name:"Microsoft Azure grouped by Account",created:"2022-01-16 13:18:22",expires:"2022-01-23",status:"failed"},{name:"Google Cloud Platform grouped by Service",created:"2022-01-14 09:05:23",expires:"2022-01-23",status:"completed"},{name:"Explorer - OpenShift grouped by Cluster",created:"2022-01-14 08:38:42",expires:"2022-01-23",status:"completed"}]},reportError:g.ZV.selectReportError(e,"ocp",n,a),reportFetchStatus:g.ZV.selectReportFetchStatus(e,"ocp",n,a)}})),J={fetchReport:g.nx.fetchReport},$=(0,l.ZP)((0,o.connect)(G,J)(L));class X extends i().Component{constructor(e){super(e),this.drawerRef=i().createRef(),this.getPanelContent=()=>{const{intl:e,isOpen:t}=this.props;return i().createElement(a.DrawerPanelContent,{minSize:"1000px"},i().createElement(a.DrawerHead,null,i().createElement("span",{tabIndex:t?0:-1,ref:this.drawerRef},i().createElement(a.Title,{headingLevel:"h1",size:a.TitleSizes.xl},e.formatMessage(s.Z.exportsTitle))),i().createElement(a.DrawerActions,null,i().createElement(a.DrawerCloseButton,{onClick:this.handleClose}))),i().createElement(a.DrawerContentBody,null,i().createElement($,{onClose:this.handleClose})))},this.handleClose=()=>{const{closeExportsDrawer:e}=this.props;e()},this.handleExpand=()=>{this.drawerRef.current&&this.drawerRef.current.focus()},this.handleClose=this.handleClose.bind(this)}componentDidMount(){}componentDidUpdate(e){}render(){const{children:e,isOpen:t}=this.props;return i().createElement(a.Drawer,{className:"drawerOverride",isExpanded:t,onExpand:this.handleExpand},i().createElement(a.DrawerContent,{panelContent:this.getPanelContent()},i().createElement(a.DrawerContentBody,null,e)))}}const z=(0,c.X1)((e=>({isOpen:u.lU.selectIsExportsDrawerOpen(e)}))),W={closeExportsDrawer:u.Aw.k6},H=(0,l.ZP)((0,o.connect)(z,W)(X));var Q=n(74172)},36935:(e,t,n)=>{n.d(t,{k:()=>A});var a=n(22938),s=n(74978),r=n(76889),i=n(80810),l=n(45997),o=n(62264),c=n(93952),u=n(44439),h=n(92950),p=n.n(h),d=n(24307),g=n(74806),m=n(98147),y=n(94377),f=n(70433),S=n(63211);class b extends p().Component{constructor(e){super(e),this.menuRef=p().createRef(),this.textInputGroupRef=p().createRef(),this.searchTimeout=S.Z,this.defaultState={createdOptions:[],isSelectExpanded:!1,menuIsOpen:!1},this.state=Object.assign({},this.defaultState),this.focusTextInput=()=>{this.textInputGroupRef.current.querySelector("input").focus()},this.getInputGroup=()=>{const{isDisabled:e,search:t="",onSearchChanged:n}=this.props;return p().createElement("div",{ref:this.textInputGroupRef},p().createElement(a.TextInputGroup,{isDisabled:e},p().createElement(a.TextInputGroupMain,{icon:p().createElement(i.ZP,null),value:t,onChange:n,onFocus:this.openMenu,onKeyDown:this.handleTextInputKeyDown}),t&&t.length&&p().createElement(a.TextInputGroupUtilities,null,p().createElement(a.Button,{variant:"plain",onClick:this.handleClearSearch,"aria-label":"Clear button and input"},p().createElement(d.ZP,null)))))},this.getMenu=()=>{const{search:e}=this.props;return p().createElement("div",{ref:this.menuRef},e&&e.length&&p().createElement(a.Menu,{onSelect:this.handleMenuSelect,onKeyDown:this.handleMenuKeyDown},p().createElement(a.MenuContent,null,p().createElement(a.MenuList,null,this.getMenuItems()))))},this.getMenuItems=()=>{const{intl:e}=this.props,t=this.getOptions().map((e=>p().createElement(a.MenuItem,{key:e.key,itemId:e.key},e.key))),n=p().createElement(a.MenuItem,{isDisabled:!0,key:"heading"},t.length?e.formatMessage(c.Z.suggestions):e.formatMessage(c.Z.noResultsFound));return t.length&&t.unshift(p().createElement(a.Divider,{key:"divider"})),t.unshift(n),t},this.getOptions=()=>{const{resource:e,resourceFetchStatus:t,search:n}=this.props,{createdOptions:a}=this.state;let s=[];if(e&&e.data&&e.data.length>0&&1!==t&&(s=e.data.map((e=>{const t=isNaN(n)&&(e.account_alias||e.cluster_alias)||e.value;return{key:t,name:t}}))),a&&a.length){const e=a.map((e=>({key:e,name:e})));s=[...s,...e]}return s},this.handleMenuClick=e=>{!this.menuRef.current||this.menuRef.current.contains(e.target)||this.textInputGroupRef.current.contains(e.target)||this.setState({menuIsOpen:!1})},this.handleMenuKeyDown=e=>{"Escape"!==e.key&&"Tab"!==e.key||(e.preventDefault(),this.focusTextInput(),this.setState({menuIsOpen:!1}))},this.handleMenuSelect=e=>{const{onSelect:t,search:n}=this.props;e.stopPropagation();const a=e.target.innerText||n;""!==a.trim()&&this.setState({menuIsOpen:!1},(()=>{t&&t(a)}))},this.handleTextInputKeyDown=e=>{switch(e.key){case"Enter":this.handleMenuSelect(e);break;case"Escape":case"Tab":this.focusTextInput(),this.setState({menuIsOpen:!1});break;case"ArrowUp":case"ArrowDown":if(this.menuRef.current){const e=this.menuRef.current.querySelector("li > button:not(:disabled)");e&&e.focus()}break;default:this.openMenu()}},this.handleClearSearch=()=>{const{onClear:e}=this.props;this.setState({menuIsOpen:!1},(()=>{e&&e()}))},this.openMenu=()=>{const{menuIsOpen:e}=this.state;e||this.setState({menuIsOpen:!0})},this.handleClearSearch=this.handleClearSearch.bind(this),this.handleMenuClick=this.handleMenuClick.bind(this),this.handleMenuKeyDown=this.handleMenuKeyDown.bind(this),this.handleMenuSelect=this.handleMenuSelect.bind(this),this.handleTextInputKeyDown=this.handleTextInputKeyDown.bind(this)}componentDidUpdate(e){const{fetchResource:t,resourceFetchStatus:n,resourcePathsType:a,resourceType:s,search:r}=this.props;if(r&&e.search!==r&&1!==n){clearTimeout(this.searchTimeout);const e={search:r},n=(0,l.pm)(e);this.searchTimeout=setTimeout((()=>{t(a,s,n)}),625)}}render(){const{menuIsOpen:e}=this.state;return p().createElement(a.Popper,{trigger:this.getInputGroup(),popper:this.getMenu(),appendTo:()=>this.textInputGroupRef.current,isVisible:e,onDocumentClick:this.handleMenuClick})}}const O=(0,y.X1)(((e,{resourcePathsType:t,resourceType:n,search:a})=>{const s={search:a},r=(0,l.pm)(s);return{resource:f.CM.selectResource(e,t,n,r),resourceFetchStatus:f.CM.selectResourceFetchStatus(e,t,n,r)}})),k={fetchResource:f.Px.PG},E=(0,g.ZP)((0,m.connect)(O,k)(b));class T extends p().Component{constructor(e){super(e),this.defaultState={search:void 0},this.state=Object.assign({},this.defaultState),this.handleOnClear=()=>{this.setState({search:void 0})},this.handleOnSearch=e=>{this.setState({search:e})},this.handleOnSelect=e=>{const{onSelect:t}=this.props;this.setState({search:void 0},(()=>{t&&t(e)}))},this.handleOnClear=this.handleOnClear.bind(this),this.handleOnSearch=this.handleOnSearch.bind(this),this.handleOnSelect=this.handleOnSelect.bind(this)}render(){const{isDisabled:e,resourcePathsType:t,resourceType:n}=this.props,{search:a}=this.state;return p().createElement(E,{isDisabled:e,onClear:this.handleOnClear,onSearchChanged:this.handleOnSearch,onSelect:this.handleOnSelect,resourcePathsType:t,resourceType:n,search:a})}}var C=n(19853),v=n(49382),D=n(98499),x=n(32412);const B={export:{marginRight:x.ZP.value},toolbarContainer:{backgroundColor:v.ZP.value,paddingBottom:x.ZP.value,paddingTop:x.ZP.value,marginLeft:D.ZP.value,marginRight:D.ZP.value}};var I=n(32004),P=n(23246),V=n(7917);const M="tag";class w extends p().Component{constructor(){super(...arguments),this.defaultState={isTagValueExpanded:!1},this.state=Object.assign({},this.defaultState),this.onTagValueChange=e=>{const{onTagValueInputChange:t}=this.props;this.setState({tagKeyValueInput:e},(()=>{t&&t(e)}))},this.onTagValueToggle=e=>{this.setState({isTagValueExpanded:e})}}componentDidMount(){const{fetchTag:e,tagQueryString:t,tagReportFetchStatus:n,tagReportPathsType:a}=this.props;1!==n&&e(a,M,t)}componentDidUpdate(e){const{fetchTag:t,tagQueryString:n,tagReportFetchStatus:a,tagReportPathsType:s}=this.props;e.tagQueryString===n&&e.tagReportPathsType===s||1===a||t(s,M,n)}getTagValueOptions(){const{tagKey:e,tagReport:t}=this.props;let n=[];t&&t.data&&(n=[...new Set([...t.data])]);let a=[];if(n.length>0)for(const t of n)if(e===t.key&&t.values){a=t.values.map((e=>({key:e,name:e})));break}return a}render(){const{isDisabled:e,onTagValueInput:t,onTagValueSelect:n,selections:s,tagKeyValue:r}=this.props,{isTagValueExpanded:l}=this.state,o=this.getTagValueOptions().map((e=>p().createElement(a.SelectOption,{key:e.key,value:e.key})));return o.length>50?p().createElement(a.InputGroup,null,p().createElement(a.TextInput,{isDisabled:e,name:"tagkeyvalue-input",id:"tagkeyvalue-input",type:"search","aria-label":I.N.formatMessage(c.Z.filterByTagValueAriaLabel),onChange:this.onTagValueChange,value:r,placeholder:I.N.formatMessage(c.Z.filterByTagValueInputPlaceholder),onKeyDown:e=>t(e)}),p().createElement(a.Button,{isDisabled:e,variant:a.ButtonVariant.control,"aria-label":I.N.formatMessage(c.Z.filterByTagValueButtonAriaLabel),onClick:e=>t(e)},p().createElement(i.W1,null))):p().createElement(a.Select,{isDisabled:e,variant:a.SelectVariant.checkbox,"aria-label":I.N.formatMessage(c.Z.filterByTagValueAriaLabel),onToggle:this.onTagValueToggle,onSelect:n,selections:s,isOpen:l,placeholderText:I.N.formatMessage(c.Z.filterByTagValuePlaceholder)},o)}}const Z=(0,y.X1)(((e,{tagKey:t,tagReportPathsType:n})=>{const a=(0,l.mB)(location.search),s=(0,P.OA)(a),r=s?l.dV:(0,P.VL)(a),i=s||(0,P.pe)(a),o=(0,l.pm)({filter:{key:t}});return{groupBy:r,groupByValue:i,tagQueryString:o,tagReport:V.ux.selectTag(e,n,M,o),tagReportFetchStatus:V.ux.selectTagFetchStatus(e,n,M,o)}})),R={fetchTag:V.xr.Xt},_=(0,m.connect)(Z,R)(w),K=(0,g.ZP)(_);const j={tag:{}};class F extends p().Component{constructor(){super(...arguments),this.defaultState={categoryInput:"",filters:(0,u.cloneDeep)(j),isBulkSelectOpen:!1,isCategorySelectOpen:!1,isOrgUnitSelectExpanded:!1,isTagValueDropdownOpen:!1,isTagKeySelectExpanded:!1,isTagValueSelectExpanded:!1,tagKeyValueInput:""},this.state=Object.assign({},this.defaultState),this.getDefaultCategory=()=>{const{categoryOptions:e,groupBy:t,query:n}=this.props;if(!e)return"name";if(n&&n.group_by&&n.group_by[l.dV])return l.dV;for(const n of e)if(t===n.key||t&&-1!==t.indexOf(l.P)&&n.key===l.up)return n.key;return e[0].key},this.getActiveFilters=e=>{const t=(0,u.cloneDeep)(j);return e&&e.filter_by&&Object.keys(e.filter_by).forEach((n=>{const a=Array.isArray(e.filter_by[n])?[...e.filter_by[n]]:[e.filter_by[n]];-1!==n.indexOf(l.P)?t.tag[n.substring(l.P.length)]=a:t[n]=a})),t},this.onDelete=(e,t)=>{const n=e&&e.key?e.key:e,a=t&&t.key?t.key:t;n?this.setState((e=>(e.filters.tag[n]?e.filters.tag[n]=e.filters.tag[n].filter((e=>e!==a)):e.filters[n]&&(e.filters[n]=e.filters[n].filter((e=>e!==a))),{filters:e.filters})),(()=>{const{filters:e}=this.state,t=e.tag[n]?`${l.P}${n}`:n;this.props.onFilterRemoved(t,a)})):this.setState({filters:(0,u.cloneDeep)(j)},(()=>{this.props.onFilterRemoved(null)}))},this.getBulkSelect=()=>{const{intl:e,isAllSelected:t,isBulkSelectDisabled:n,isDisabled:s,itemsPerPage:r,itemsTotal:i,selectedItems:l}=this.props,{isBulkSelectOpen:o}=this.state,u=t?i:l?l.length:0,h=u>0,d=!(!t&&u!==i||!(i>0))||!!h&&null,g=[p().createElement(a.DropdownItem,{key:"item-1",onClick:()=>this.handleOnBulkSelectClicked("none")},e.formatMessage(c.Z.toolBarBulkSelectNone)),p().createElement(a.DropdownItem,{key:"item-2",onClick:()=>this.handleOnBulkSelectClicked("page")},e.formatMessage(c.Z.toolBarBulkSelectPage,{value:r})),p().createElement(a.DropdownItem,{key:"item-3",onClick:()=>this.handleOnBulkSelectClicked("all")},e.formatMessage(c.Z.toolBarBulkSelectAll,{value:i}))];return p().createElement(a.Dropdown,{onSelect:this.handleOnBulkSelect,position:a.DropdownPosition.left,toggle:p().createElement(a.DropdownToggle,{isDisabled:s||n,splitButtonItems:[p().createElement(a.DropdownToggleCheckbox,{id:"bulk-select",key:"bulk-select","aria-label":e.formatMessage(h?c.Z.toolBarBulkSelectAriaDeselect:c.Z.toolBarBulkSelectAriaSelect),isChecked:d,onClick:()=>{h?this.handleOnBulkSelectClicked("none"):this.handleOnBulkSelectClicked("all")}})],onToggle:this.handleOnBulkSelectToggle},0!==u&&p().createElement(p().Fragment,null,e.formatMessage(c.Z.selected,{value:u}))),isOpen:o,dropdownItems:g})},this.handleOnBulkSelectClicked=e=>{const{onBulkSelected:t}=this.props;t&&t(e)},this.handleOnBulkSelect=()=>{this.setState({isBulkSelectOpen:!this.state.isBulkSelectOpen})},this.handleOnBulkSelectToggle=e=>{this.setState({isBulkSelectOpen:e})},this.getCategorySelectOptions=()=>{const{categoryOptions:e}=this.props,t=[];return e.map((e=>{t.push({toString:()=>e.name,value:e.key})})),t},this.handleOnCategorySelect=(e,t)=>{this.setState({categoryInput:"",currentCategory:t.value,currentTagKey:void 0,isCategorySelectOpen:!this.state.isCategorySelectOpen})},this.handleOnCategoryToggle=e=>{this.setState({isCategorySelectOpen:e})},this.getCategoryInput=e=>{const{intl:t,isDisabled:n,resourcePathsType:s}=this.props,{currentCategory:r,filters:l,categoryInput:u}=this.state;return p().createElement(a.ToolbarFilter,{categoryName:e,chips:l[e.key],deleteChip:this.onDelete,key:e.key,showToolbarItem:r===e.key},p().createElement(a.InputGroup,null,(0,o.k)(s,e.key)?p().createElement(T,{isDisabled:n,onSelect:t=>this.onCategoryInputSelect(t,e.key),resourcePathsType:s,resourceType:e.key}):p().createElement(p().Fragment,null,p().createElement(a.TextInput,{isDisabled:n,name:`category-input-${e.key}`,id:`category-input-${e.key}`,type:"search","aria-label":t.formatMessage(c.Z.filterByInputAriaLabel,{value:e.key}),onChange:this.handleOnCategoryInputChange,value:u,placeholder:t.formatMessage(c.Z.filterByPlaceholder,{value:e.key}),onKeyDown:t=>this.onCategoryInput(t,e.key)}),p().createElement(a.Button,{isDisabled:n,variant:a.ButtonVariant.control,"aria-label":t.formatMessage(c.Z.filterByButtonAriaLabel,{value:e.key}),onClick:t=>this.onCategoryInput(t,e.key)},p().createElement(i.W1,null)))))},this.getDefaultCategoryOptions=()=>{const{intl:e}=this.props;return[{name:e.formatMessage(c.Z.names,{count:1}),key:"name"}]},this.handleOnCategoryInputChange=e=>{this.setState({categoryInput:e})},this.onCategoryInput=(e,t)=>{const{categoryInput:n,currentCategory:a}=this.state;e&&e.key&&"Enter"!==e.key||""===n.trim()||this.setState((e=>{const s=e.filters[t];return{filters:Object.assign(Object.assign({},e.filters),{[a]:s&&s.includes(n)?s:s?[...s,n]:[n]}),categoryInput:""}}),(()=>{this.props.onFilterAdded(a,n)}))},this.onCategoryInputSelect=(e,t)=>{const{currentCategory:n}=this.state;this.setState((a=>{const s=a.filters[t];return{filters:Object.assign(Object.assign({},a.filters),{[n]:s&&s.includes(e)?s:s?[...s,e]:[e]}),categoryInput:""}}),(()=>{this.props.onFilterAdded(n,e)}))},this.getOrgUnitSelect=()=>{const{intl:e,isDisabled:t}=this.props,{currentCategory:n,filters:s,isOrgUnitSelectExpanded:r}=this.state,i=this.getOrgUnitOptions().map((e=>({id:e.key,toString:()=>e.name,compareTo:e=>!!s[l.dV]&&s[l.dV].find((t=>t===e.id))}))),o=[],u=[];return s[l.dV]&&Array.isArray(s[l.dV])&&s[l.dV].map((e=>{const t=i.find((t=>t.id===e));t&&(u.push(t),o.push({key:t.id,node:t.toString()}))})),p().createElement(a.ToolbarFilter,{categoryName:{key:l.dV,name:e.formatMessage(c.Z.filterByValues,{value:"org_unit_id"})},chips:o,deleteChip:this.onDelete,key:l.dV,showToolbarItem:n===l.dV},p().createElement(a.Select,{isDisabled:t,className:"selectOverride",variant:a.SelectVariant.checkbox,"aria-label":e.formatMessage(c.Z.filterByOrgUnitAriaLabel),onToggle:this.handleOnOrgUnitToggle,onSelect:this.handleOnOrgUnitSelect,selections:u,isOpen:r,placeholderText:e.formatMessage(c.Z.filterByOrgUnitPlaceholder)},i.map((e=>p().createElement(a.SelectOption,{description:e.id,key:e.id,value:e})))))},this.handleOnOrgUnitSelect=(e,t)=>{const n=e.target.checked;this.setState((e=>{const a=e.filters[l.dV]?e.filters[l.dV]:[];return{filters:Object.assign(Object.assign({},e.filters),{tag:Object.assign({},e.filters.tag),[l.dV]:n?[...a,t.id]:a.filter((e=>e!==t.id))})}}),(()=>{n?this.props.onFilterAdded(l.dV,t.id):this.onDelete(l.dV,t.id)}))},this.handleOnOrgUnitToggle=e=>{this.setState({isOrgUnitSelectExpanded:e})},this.getTagKeySelect=()=>{const{intl:e,isDisabled:t}=this.props,{currentCategory:n,currentTagKey:s,isTagKeySelectExpanded:r}=this.state;if(n!==l.up)return null;const i=this.getTagKeyOptions().map((e=>p().createElement(a.SelectOption,{key:e.key,value:e.key})));return p().createElement(a.ToolbarItem,null,p().createElement(a.Select,{isDisabled:t,variant:a.SelectVariant.typeahead,typeAheadAriaLabel:e.formatMessage(c.Z.filterByTagKeyAriaLabel),onClear:this.handleOnTagKeyClear,onToggle:this.handleOnTagKeyToggle,onSelect:this.handleOnTagKeySelect,isOpen:r,placeholderText:e.formatMessage(c.Z.filterByTagKeyPlaceholder),selections:s},i))},this.handleOnTagKeyClear=()=>{this.setState({currentTagKey:void 0,isTagKeySelectExpanded:!1})},this.handleOnTagKeySelect=(e,t)=>{this.setState({currentTagKey:t,isTagKeySelectExpanded:!this.state.isTagKeySelectExpanded})},this.handleOnTagKeyToggle=e=>{this.setState({isTagKeySelectExpanded:e})},this.getTagValueSelect=e=>{const{tagReportPathsType:t}=this.props,{currentCategory:n,currentTagKey:s,filters:r,tagKeyValueInput:i}=this.state,o={name:e.name,key:`${l.P}${e.key}`};return p().createElement(a.ToolbarFilter,{categoryName:o,chips:r.tag[e.key],deleteChip:this.onDelete,key:e.key,showToolbarItem:n===l.up&&s===e.key},p().createElement(K,{onTagValueSelect:this.onTagValueSelect,onTagValueInput:this.onTagValueInput,onTagValueInputChange:this.onTagValueInputChange,selections:r.tag[e.key]?r.tag[e.key]:[],tagKey:s,tagKeyValue:i,tagReportPathsType:t}))},this.onTagValueInputChange=e=>{this.setState({tagKeyValueInput:e})},this.onTagValueInput=e=>{const{currentTagKey:t,tagKeyValueInput:n}=this.state;e.key&&"Enter"!==e.key||""===n.trim()||this.setState((e=>{const a=e.filters.tag[t]?e.filters.tag[t]:[];for(const t of a)if(t===n)return Object.assign(Object.assign({},e.filters),{tagKeyValueInput:""});return{filters:Object.assign(Object.assign({},e.filters),{tag:Object.assign(Object.assign({},e.filters.tag),{[t]:[...a,n]})}),tagKeyValueInput:""}}),(()=>{this.props.onFilterAdded(`${l.P}${t}`,n)}))},this.onTagValueSelect=(e,t)=>{const{currentTagKey:n}=this.state,a=e.target.checked;this.setState((e=>{const s=e.filters.tag[n]?e.filters.tag[n]:[];return{filters:Object.assign(Object.assign({},e.filters),{tag:Object.assign(Object.assign({},e.filters.tag),{[n]:a?[...s,t]:s.filter((e=>e!==t))})})}}),(()=>{a?this.props.onFilterAdded(`${l.P}${n}`,t):this.onDelete(n,t)}))},this.getColumnManagement=()=>{const{intl:e}=this.props;return p().createElement(a.ToolbarItem,null,p().createElement(a.Button,{onClick:this.handleColumnManagementClicked,variant:a.ButtonVariant.link},e.formatMessage(c.Z.detailsColumnManagementTitle)))},this.getExportButton=()=>{const{isDisabled:e,isExportDisabled:t}=this.props;return p().createElement(a.ToolbarItem,{spacer:{default:"spacerNone"}},p().createElement(a.Button,{isDisabled:e||t,onClick:this.handleExportClicked,variant:a.ButtonVariant.plain},p().createElement(s.Hy,null)))},this.handleColumnManagementClicked=()=>{this.props.onColumnManagementClicked()},this.handleExportClicked=()=>{this.props.onExportClicked()}}componentDidMount(){this.setState({currentCategory:this.getDefaultCategory()})}componentDidUpdate(e){const{categoryOptions:t,groupBy:n,orgReport:a,query:s,tagReport:r}=this.props;(n!==e.groupBy||t&&!(0,C.X)(t,e.categoryOptions)||s&&!(0,C.X)(s,e.query)||a&&!(0,C.X)(a,e.orgReport)||r&&!(0,C.X)(r,e.tagReport))&&this.setState((()=>{const a=this.getActiveFilters(s);return t!==e.categoryOptions||e.groupBy!==n?{categoryInput:"",currentCategory:this.getDefaultCategory(),currentOrgUnit:"",currentTagKey:"",tagKeyValueInput:"",filters:a}:{filters:a}}))}getCategorySelect(){const{categoryOptions:e,isDisabled:t}=this.props,{currentCategory:n,isCategorySelectOpen:s}=this.state;if(!e)return null;const i=this.getCategorySelectOptions(),l=i.find((e=>e.value===n));return p().createElement(a.ToolbarItem,null,p().createElement(a.Select,{id:"category-select",isDisabled:t,isOpen:s,onSelect:this.handleOnCategorySelect,onToggle:this.handleOnCategoryToggle,selections:l,toggleIcon:p().createElement(r.k1,null),variant:a.SelectVariant.single},i.map((e=>p().createElement(a.SelectOption,{key:e.value,value:e})))))}getOrgUnitOptions(){const{orgReport:e}=this.props;let t=[];if(!e||!e.data)return t;const n=e.data.sort(((e,t)=>e[l.iP]<t[l.iP]?-1:e[l.iP]>t[l.iP]?1:0)),a=n.filter((e=>0===e.level)),s=n.filter((e=>0!==e.level));return a.map((e=>{const t=n.find((t=>t[l.dV]===e[l.dV]));s.unshift(t)})),s.length>0&&(t=s.map((e=>({key:e[l.dV],name:e[l.iP]})))),t}getTagKeyOptions(){const{tagReport:e}=this.props;let t=[],n=[];if(!e||!e.data)return n;let a=!1;for(const t of e.data)if(t.hasOwnProperty("key")){a=!0;break}if(a){const n=e.data.map((e=>{var{type:t}=e;return function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(n[a[s]]=e[a[s]])}return n}(e,["type"])}));t=(0,u.uniqBy)(n,"key")}else t=(0,u.uniq)(e.data);return t.length>0&&(n=t.map((e=>{const t=a?e.key:e;return{key:t,name:t}}))),n}render(){const{categoryOptions:e,dateRange:t,pagination:n,showBulkSelect:s,showColumnManagement:i,showExport:o,showFilter:c,style:u}=this.props,h=e||this.getDefaultCategoryOptions();return p().createElement("div",{style:u||B.toolbarContainer},p().createElement(a.Toolbar,{id:"details-toolbar",clearAllFilters:this.onDelete,collapseListedFiltersBreakpoint:"xl"},p().createElement(a.ToolbarContent,null,s&&p().createElement(a.ToolbarItem,{variant:"bulk-select"},this.getBulkSelect()),c&&p().createElement(a.ToolbarToggleGroup,{breakpoint:"xl",toggleIcon:p().createElement(r.k1,null)},p().createElement(a.ToolbarGroup,{variant:"filter-group"},this.getCategorySelect(),this.getTagKeySelect(),this.getTagKeyOptions().map((e=>this.getTagValueSelect(e))),this.getOrgUnitSelect(),h&&h.filter((e=>e.key!==l.up&&e.key!==l.dV)).map((e=>this.getCategoryInput(e))))),(Boolean(o)||Boolean(i))&&p().createElement(a.ToolbarGroup,null,Boolean(o)&&this.getExportButton(),Boolean(i)&&this.getColumnManagement()),t&&p().createElement(a.ToolbarGroup,null,t),p().createElement(a.ToolbarItem,{alignment:{default:"alignRight"},variant:"pagination"},n))))}}const A=(0,g.ZP)(F)},23246:(e,t,n)=>{n.d(t,{OA:()=>i,VL:()=>s,pe:()=>r,qV:()=>l});var a=n(45997);const s=e=>(e&&e.group_by?Object.keys(e.group_by):[]).find((e=>e!==a.dV)),r=e=>{const t=s(e);return t?e.group_by[t]:void 0},i=e=>{let t;if(e&&e.group_by)for(const n of Object.keys(e.group_by))if(n===a.dV){t=e.group_by[a.dV];break}return t},l=e=>{let t;if(e&&e.group_by)for(const n of Object.keys(e.group_by)){const e=n.indexOf(a.P);if(-1!==e){t=n.substring(e+a.P.length);break}}return t}},8091:(e,t,n)=>{n.d(t,{U:()=>s,W:()=>a});const a=(e,t,n)=>{const a=Object.assign({},JSON.parse(JSON.stringify(e)));if(a.filter_by||(a.filter_by={}),"*"!==n||"*"!==a.group_by[t]){if(a.filter_by&&a.filter_by[t]){let e=!1;const s=a.filter_by[t];if(Array.isArray(s)){for(const t of s)if(t===n){e=!0;break}}else e=n===a.filter_by[t];e||(a.filter_by[t]=[a.filter_by[t],n])}else a.filter_by[t]=[n];return a}},s=(e,t,n)=>{const a=Object.assign({},JSON.parse(JSON.stringify(e)));if(a.filter_by||(a.filter_by={}),null===t)a.filter_by=void 0;else if(null===n)a.filter_by[t]=void 0;else if(Array.isArray(a.filter_by[t])){const s=a.filter_by[t].indexOf(n);s>-1&&(a.filter_by[t]=[...e.filter_by[t].slice(0,s),...e.filter_by[t].slice(s+1)])}else a.filter_by[t]=void 0;return a}},19853:(e,t,n)=>{function a(e,t){let n=JSON.stringify(e),a=JSON.stringify(t);return n||(n=""),a||(a=""),n.split("").sort().join("")===a.split("").sort().join("")}n.d(t,{X:()=>a})},63211:(e,t,n)=>{n.d(t,{Z:()=>a});const a=()=>{}}}]);
//# sourceMappingURL=777d6add8d7748990f40.bundle.js.map