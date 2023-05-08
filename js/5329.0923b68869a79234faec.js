"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[5329],{15265:(e,t,n)=>{n.d(t,{LA:()=>l,ZP:()=>i,mq:()=>s});var a=n(40400);const s={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},l=(0,a.IU)(s),i=l},17918:(e,t)=>{t.VH={name:"--pf-global--FontSize--md",value:"1rem",var:"var(--pf-global--FontSize--md)"},t.ZP=t.VH},43789:(e,t)=>{t.Q8={name:"--pf-global--spacer--xs",value:"0.25rem",var:"var(--pf-global--spacer--xs)"},t.ZP=t.Q8},15984:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(85893),s=n(90154),l=n(15138),i=function(){return i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},i.apply(this,arguments)};const o=function(){return(0,a.jsxs)(s.EmptyState,i({variant:s.EmptyStateVariant.large,className:"ins-c-empty-state__unavailable pf-m-redhat-font"},{children:[(0,a.jsx)(s.EmptyStateIcon,{icon:l.ExclamationCircleIcon}),(0,a.jsx)(s.Title,i({headingLevel:"h5",size:"lg"},{children:"This page is temporarily unavailable"})),(0,a.jsxs)(s.EmptyStateBody,{children:["Try refreshing the page. If the problem persists, contact your organization administrator or visit our",(0,a.jsxs)("a",i({href:"https://status.redhat.com/",target:"_blank",rel:"noopener noreferrer"},{children:[" ","status page"]}))," ","for known outages."]})]}))}},72483:(e,t,n)=>{n.d(t,{Y:()=>h});var a=n(90154),s=n(97027),l=n(92950),i=n.n(l),o=n(74806);const r=n(80794),c=(0,o.ZP)((({className:e,intl:t})=>i().createElement("img",{className:`optimization-icon ${e}`,src:r,alt:t.formatMessage(s.Z.optimizations),"aria-hidden":"true"})));class d extends i().Component{render(){const{intl:e}=this.props;return i().createElement(a.EmptyState,{variant:a.EmptyStateVariant.large,className:"pf-m-redhat-font"},i().createElement(a.EmptyStateIcon,{icon:c}),i().createElement(a.Title,{headingLevel:"h1",size:a.TitleSizes.lg},e.formatMessage(s.Z.noOptimizationsTitle)),i().createElement(a.EmptyStateBody,null,e.formatMessage(s.Z.noOptimizationsDesc)))}}const h=(0,o.ZP)(d)},62423:(e,t,n)=>{n.d(t,{e:()=>S});var a=n(90154),s=n(97027),l=n(92950),i=n.n(l),o=n(74806),r=n(77760),c=n(40493),d=n(1156),h=n(58613),m=n(14483),p=n(5842);class u extends i().Component{constructor(e,t){super(e,t),this.defaultState={isDropdownOpen:!1,isExportModalOpen:!1},this.state=Object.assign({},this.defaultState),this.getExportModal=()=>{const{groupBy:e,item:t,reportPathsType:n,reportQueryString:a}=this.props,{isExportModalOpen:s}=this.state;return i().createElement(c.X,{count:1,groupBy:e,isOpen:s,items:[t],onClose:this.handleExportModalClose,reportPathsType:n,reportQueryString:a})},this.handleExportModalClose=e=>{this.setState({isExportModalOpen:e})},this.handleExportModalOpen=()=>{this.setState({isExportModalOpen:!0})},this.handleOnSelect=()=>{const{isDropdownOpen:e}=this.state;this.setState({isDropdownOpen:!e})},this.handleOnToggle=e=>{this.setState({isDropdownOpen:e})},this.handleExportModalClose=this.handleExportModalClose.bind(this),this.handleExportModalOpen=this.handleExportModalOpen.bind(this),this.handleOnToggle=this.handleOnToggle.bind(this),this.handleOnSelect=this.handleOnSelect.bind(this)}render(){const{groupBy:e,isDisabled:t,showPriceListOption:n,intl:l,item:{source_uuid:o},redirectToCostModel:r,router:c}=this.props,d=[i().createElement(a.DropdownItem,{component:"button",isDisabled:t,key:"export-action",onClick:this.handleExportModalOpen},l.formatMessage(s.Z.detailsActionsExport))];return n&&d.unshift(i().createElement(a.DropdownItem,{component:"button",key:"price-list-action",isDisabled:t||e.includes(m.P)||0===o.length,onClick:()=>r(o[0],c)},l.formatMessage(s.Z.detailsActionsPriceList))),i().createElement(i().Fragment,null,i().createElement(a.Dropdown,{onSelect:this.handleOnSelect,toggle:i().createElement(a.KebabToggle,{onToggle:this.handleOnToggle}),isOpen:this.state.isDropdownOpen,isPlain:!0,position:"right",dropdownItems:d}),this.getExportModal())}}const g=(0,d.X1)(((e,t)=>({}))),E={redirectToCostModel:h.F0.redirectToCostModelFromSourceUuid},y=(0,r.connect)(g,E)(u),S=(0,o.ZP)((0,p.E)(y))},44348:(e,t,n)=>{n.d(t,{$:()=>u,Y:()=>d});var a=n(90154),s=n(97027),l=n(92950),i=n.n(l),o=n(74806),r=n(77760),c=n(1156);const d=e=>{const t=new Set;return e.map((e=>{e.hidden&&t.add(e.value)})),t};class h extends i().Component{constructor(e,t){super(e,t),this.defaultState={hiddenColumns:d(this.props.options)},this.state=Object.assign({},this.defaultState),this.getHidden=e=>{const{hiddenColumns:t}=this.state,n=new Set(t);return n.delete(e)||n.add(e),n},this.isHidden=e=>{const{hiddenColumns:t}=this.state;return t.has(e)},this.handleChange=(e,t)=>{const n=this.getHidden(t.target.id);this.setState({hiddenColumns:n})},this.handleClose=()=>{this.setState(Object.assign({},this.defaultState),(()=>{this.props.onClose(!1)}))},this.handleSave=()=>{const{hiddenColumns:e}=this.state;this.props.onSave(e),this.handleClose()},this.selectAll=()=>{this.setState({hiddenColumns:new Set})}}componentDidUpdate(e){const{options:t}=this.props;if(e.options!==t){const e=d(t);this.setState({hiddenColumns:e})}}render(){const{options:e,intl:t}=this.props;return i().createElement(a.Modal,{description:i().createElement(a.TextContent,null,i().createElement(a.Text,{component:a.TextVariants.p},t.formatMessage(s.Z.manageColumnsDesc)),i().createElement(a.Button,{isInline:!0,onClick:this.selectAll,variant:"link"},t.formatMessage(s.Z.selectAll))),isOpen:this.props.isOpen,onClose:this.handleClose,title:t.formatMessage(s.Z.manageColumnsTitle),variant:a.ModalVariant.medium,actions:[i().createElement(a.Button,{key:"save",onClick:this.handleSave,variant:a.ButtonVariant.link},t.formatMessage(s.Z.save)),i().createElement(a.Button,{key:"cancel",onClick:this.handleClose,variant:a.ButtonVariant.link},t.formatMessage(s.Z.cancel))]},i().createElement(a.DataList,{"aria-label":t.formatMessage(s.Z.manageColumnsAriaLabel),id:"table-column-management",isCompact:!0},e.map((e=>i().createElement(a.DataListItem,{"aria-labelledby":e.value,key:e.value},i().createElement(a.DataListItemRow,null,i().createElement(a.DataListCheck,{"aria-labelledby":`${e.value}Label`,isChecked:!this.isHidden(e.value),name:e.value,id:e.value,onChange:this.handleChange}),i().createElement(a.DataListItemCells,{dataListCells:[i().createElement(a.DataListCell,{id:`${e.value}Label`,key:"table-column-management-item1"},i().createElement("span",null,t.formatMessage(e.label))),i().createElement(a.DataListCell,{key:"table-column-management-item2"},e.description&&i().createElement("span",null,t.formatMessage(e.description)))]})))))))}}const m=(0,c.X1)((()=>({}))),p=(0,r.connect)(m,{})(h),u=(0,o.ZP)(p)},90302:(e,t,n)=>{n.d(t,{W:()=>r});var a=n(49382),s=n(12289),l=n(40794),i=n(11331),o=n(43789);const r={costColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end",paddingRight:0},defaultLabel:{minWidth:"50px"},emptyState:{backgroundColor:a.ZP.value,display:"flex",justifyContent:"center",paddingTop:i.ZP.value,height:"35vh",width:"100%"},infoArrow:{position:"relative"},infoArrowDesc:{bottom:o.ZP.value},infoDescription:{color:s.ZP.value,fontSize:l.ZP.value},lastReported:{textAlign:"right",paddingRight:"40px"},lastReportedColumn:{textAlign:"right",display:"flex",justifyContent:"flex-end"},managedColumn:{textAlign:"right"},nameColumn:{width:"1%"}}},90569:(e,t,n)=>{n.d(t,{w:()=>E});var a=n(90154),s=n(52636),l=n(40227),i=n(79112),o=n(97027),r=n(92950),c=n.n(r),d=n(74806),h=n(42901),m=n(72483),p=n(5842),u=n(90302);class g extends c().Component{constructor(e){super(e),this.getEmptyState=()=>{const{intl:e,isOptimizations:t,router:n}=this.props,l=(0,i.mB)(n.location.search);if(l.filter_by)for(const e of Object.values(l.filter_by))if("*"!==e)return c().createElement(h.c,{filter:e,showMargin:!1});return t?c().createElement(m.Y,null):c().createElement(a.EmptyState,null,c().createElement(a.EmptyStateIcon,{icon:s.Xk}),c().createElement(a.EmptyStateBody,null,e.formatMessage(o.Z.detailsEmptyState)))},this.getSortBy=e=>{const{columns:t,router:n}=this.props,a=t[e].orderBy,s=(0,i.mB)(n.location.search),l=s&&s.order_by&&s.order_by[a];return l?{index:e,direction:l}:{}},this.getSortParams=e=>({sortBy:this.getSortBy(e),onSort:this.handleOnSort,columnIndex:e}),this.handleOnSelect=(e,t,n)=>{const{onSelected:a,rows:s}=this.props;let l,i=[];-1===n?l=s.map((e=>(e.selected=t,e))):(l=[...s],l[n].selected=t,i=[l[n].item]),this.setState({rows:s},(()=>{a&&a(i,t)}))},this.handleOnSort=(e,t,n)=>{const{columns:a,onSort:s}=this.props;s&&s(a[t].orderBy,n===l.SortByDirection.asc)},this.handleOnRowClick=(e,t)=>{const{onRowClick:n,rows:a}=this.props;a.map((e=>e.selected=!1)),a[t].selected=!0,this.setState({rows:a},(()=>{n&&n(e,t)}))},this.handleOnSelect=this.handleOnSelect.bind(this),this.handleOnSort=this.handleOnSort.bind(this)}render(){const{columns:e,intl:t,isLoading:n,isOptimizations:s,rows:i}=this.props;return c().createElement(c().Fragment,null,c().createElement(l.TableComposable,{"aria-label":t.formatMessage(o.Z.dataTableAriaLabel),className:"tableOverride",gridBreakPoint:"grid-2xl",hasSelectableRowCaption:s,variant:l.TableVariant.compact},c().createElement(l.Thead,null,c().createElement(l.Tr,null,e.map(((e,t)=>c().createElement(l.Th,{key:`col-${t}-${e.value}`,modifier:"nowrap",sort:e.isSortable?this.getSortParams(t):void 0,style:e.style},e.name))))),c().createElement(l.Tbody,null,n?c().createElement(l.Tr,null,c().createElement(l.Td,{colSpan:100},c().createElement(a.Bullseye,null,c().createElement("div",{style:{textAlign:"center"}},c().createElement(a.Spinner,{size:"xl"}))))):i.map(((t,n)=>c().createElement(l.Tr,{isSelectable:s,isHoverable:s,isRowSelected:s&&t.selected,onRowClick:s?e=>this.handleOnRowClick(e,n):void 0,key:`row-${n}`},t.cells.map(((a,i)=>0!==i||s?c().createElement(l.Td,{dataLabel:e[i].name,key:`cell-${n}-${i}`,modifier:"nowrap",isActionCell:!s&&i===t.cells.length-1,style:a.style},a.value):c().createElement(l.Td,{dataLabel:e[i].name,key:`cell-${i}-${n}`,modifier:"nowrap",select:{disable:t.selectionDisabled,isSelected:t.selected,onSelect:(e,t)=>this.handleOnSelect(e,t,n),rowIndex:n},style:a.style})))))))),0===i.length&&c().createElement("div",{style:u.W.emptyState},this.getEmptyState()))}}const E=(0,d.ZP)((0,p.E)(g))},80794:(e,t,n)=>{e.exports=n.p+"fonts/Red_Hat-IT_Optimization-Gray.svg"}}]);
//# sourceMappingURL=../sourcemaps/5329.7b9b476d5dbeda8a65be6b045cf71b46.js.map