(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[1355],{60817:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Portal=t.NotificationPortal=void 0;var i=n(98147),o=r(n(72837)),a=n(53446);t.NotificationPortal=(0,i.connect)((function(e,t){var n=e.notifications;return{notifications:t.notifications||n}}),(function(e,t){return{removeNotification:t.removeNotification?t.removeNotification:function(t){return e((0,a.removeNotification)(t))},onClearAll:t.clearNotifications?t.clearNotifications:function(){return e((0,a.clearNotifications)())}}}))(o.default);var c=n(72837);Object.defineProperty(t,"Portal",{enumerable:!0,get:function(){return r(c).default}}),t.default=t.NotificationPortal},72871:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(60817);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(a).default}}),i(n(60817),t)},72837:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var r=n(92950),i=n.n(r),o=n(12181),a=n(11930),c=n(1496),u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},u.apply(this,arguments)};const l=function(e){var t=e.description,n=e.dismissable,o=void 0===n||n,l=e.onDismiss,f=e.dismissDelay,s=void 0===f?8e3:f,d=e.title,p=e.sentryId,I=e.requestId,O=e.autoDismiss,v=void 0===O||O,y=e.id,N=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["description","dismissable","onDismiss","dismissDelay","title","sentryId","requestId","autoDismiss","id"]),m=(0,r.useRef)(),T=function(){l(y)},A=function(){v&&(m.current=setTimeout((function(){return T()}),s))},g=function(){m.current&&clearTimeout(m.current)};return(0,r.useEffect)((function(){return A(),function(){g()}}),[]),i().createElement(a.Alert,u({className:"notification-item",id:"".concat(y),title:"string"==typeof d?d.replace(/<\/?[^>]+(>|$)/g,""):d},N,{actionClose:o?i().createElement(a.AlertActionCloseButton,{"aria-label":"close-notification",variant:"plain",onClick:T},i().createElement(c.CloseIcon,null)):null,onMouseEnter:g,onMouseLeave:A}),"string"==typeof t?t.replace(/<\/?[^>]+(>|$)/g,""):t,p&&i().createElement(a.TextContent,null,i().createElement(a.Text,{component:a.TextVariants.small},"Tracking Id: ",p)),I&&i().createElement(a.TextContent,null,i().createElement(a.Text,{component:a.TextVariants.small},"Request Id: ",I)))},f=function(e){var t=e.page,n=void 0===t?1:t,r=e.onSetPage,o=e.onClearAll,c=e.count,u=void 0===c?0:c;return i().createElement(a.Card,{className:"notification-item"},i().createElement(a.CardBody,null,i().createElement(a.Level,null,i().createElement(a.LevelItem,null,i().createElement(a.Button,{variant:a.ButtonVariant.link,className:"ins-c-pagination__clear-all",onClick:o},"Clear all")),i().createElement(a.LevelItem,null,i().createElement(a.Pagination,{itemCount:u,variant:a.PaginationVariant.bottom,perPageOptions:[{title:"5",value:5}],titles:{items:"Notifications"},perPage:5,page:n,onSetPage:r})))))};var s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},s.apply(this,arguments)};const d=function(e){var t=e.notifications,n=void 0===t?[]:t,a=e.removeNotification,c=void 0===a?function(){}:a,u=e.rootId,d=e.onClearAll,p=(0,r.useState)({page:1}),I=p[0],O=p[1],v=I.page,y=n&&n.length<=5?n:n&&n.slice(5*(v-1),5*v);return 0===n.length?null:(0,o.createPortal)(i().createElement("div",{className:"notifications-portal"},n.length>5&&i().createElement(f,{onSetPage:function(e,t){O((function(e){return s(s({},e),{page:t})}))},count:n.length,page:v,onClearAll:d}),y.map((function(e){return i().createElement(l,s({onDismiss:c,key:"".concat(e.id)},e))}))),u&&document.getElementById(u)||document.body)}},51712:(e,t,n)=>{"use strict";n.r(t),n.d(t,{createNotificationsMiddleware:()=>p,default:()=>I,notificationsMiddleware:()=>I});var r=n(27361),i=n.n(r),o=n(18721),a=n.n(o),c="@@INSIGHTS-CORE/NOTIFICATIONS/",u="".concat(c,"ADD_NOTIFICATION");"".concat(c,"REMOVE_NOTIFICATION"),"".concat(c,"CLEAR_NOTIFICATIONS");var l=function(e){return{type:u,payload:e}},f=n(11930),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},s.apply(this,arguments)},d=function(e,t,n){if("string"==typeof e)return{title:"Error",description:e};var r=t;Array.isArray(t)&&(r=t.find((function(t){return a()(e,t)})));var o=n;return Array.isArray(n)&&(o=n.find((function(t){return a()(e,t)}))),{title:i()(e,r)||"Error",description:i()(e,o),sentryId:null==e?void 0:e.sentryId,requestId:null==e?void 0:e.requestId}},p=function(e){var t=s(s({},{dispatchDefaultFailure:!0,pendingSuffix:"_PENDING",fulfilledSuffix:"_FULFILLED",rejectedSuffix:"_REJECTED",autoDismiss:!1,dismissDelay:5e3,errorTitleKey:"title",errorDescriptionKey:"detail",useStatusText:!1}),e),n=function(e){return Boolean(e.match(new RegExp("^.*".concat(t.rejectedSuffix,"$"))))},r={dismissable:!t.autoDismiss,dismissDelay:t.dismissDelay};return function(e){var o=e.dispatch;return function(e){return function(c){var u=c.meta,p=c.type;if(u&&u.notifications){var I=u.notifications;(function(e){return Boolean(e.match(new RegExp("^.*".concat(t.pendingSuffix,"$"))))})(p)&&I.pending?("function"==typeof I.pending&&(I.pending=I.pending(c.payload)),o(l(s(s({},r),I.pending)))):function(e){return Boolean(e.match(new RegExp("^.*".concat(t.fulfilledSuffix,"$"))))}(p)&&I.fulfilled?("function"==typeof I.fulfilled&&(I.fulfilled=I.fulfilled(c.payload)),o(l(s(s({},r),I.fulfilled)))):n(p)&&I.rejected&&("function"==typeof I.rejected&&(I.rejected=I.rejected(c.payload)),o(l(s(s(s({},r),I.rejected),{sentryId:c.payload&&c.payload.sentryId,requestId:c.payload&&c.payload.requestId}))))}if(function(e){return e.isRejected&&!e.hasCustomNotification&&!e.noErrorOverride&&e.dispatchDefaultFailure}({isRejected:n(p),hasCustomNotification:u&&u.notifications&&u.notifications.rejected,noErrorOverride:u&&u.noError,dispatchDefaultFailure:t.dispatchDefaultFailure}))if(t.useStatusText)o(l(s({variant:f.AlertVariant.danger,dismissable:!0},d(c.payload,t.errorTitleKey,"statusText"))));else{var O=Array.isArray(t.errorNamespaceKey)&&t.errorNamespaceKey.find((function(e){return a()(c.payload,e)}));O?i()(c.payload,O).map((function(e){o(l(s({variant:f.AlertVariant.danger,dismissable:!0},d(e,t.errorTitleKey,t.errorDescriptionKey))))})):Array.isArray(c.payload)?c.payload.map((function(e){o(l(s({variant:f.AlertVariant.danger,dismissable:!0},d(e,t.errorTitleKey,t.errorDescriptionKey))))})):o(l(s({variant:f.AlertVariant.danger,dismissable:!0},d(c.payload,t.errorTitleKey,t.errorDescriptionKey))))}e(c)}}}};const I=p},71355:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.notificationsMiddleware=t.clearNotifications=t.removeNotification=t.addNotification=t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=t.notificationsReducers=t.notifications=t.NotificationsPortal=void 0;var i=n(72871);Object.defineProperty(t,"NotificationsPortal",{enumerable:!0,get:function(){return r(i).default}});var o=n(24778);Object.defineProperty(t,"notifications",{enumerable:!0,get:function(){return r(o).default}}),Object.defineProperty(t,"notificationsReducers",{enumerable:!0,get:function(){return o.notificationsReducers}});var a=n(68129);Object.defineProperty(t,"ADD_NOTIFICATION",{enumerable:!0,get:function(){return a.ADD_NOTIFICATION}}),Object.defineProperty(t,"REMOVE_NOTIFICATION",{enumerable:!0,get:function(){return a.REMOVE_NOTIFICATION}}),Object.defineProperty(t,"CLEAR_NOTIFICATIONS",{enumerable:!0,get:function(){return a.CLEAR_NOTIFICATIONS}});var c=n(53446);Object.defineProperty(t,"addNotification",{enumerable:!0,get:function(){return c.addNotification}}),Object.defineProperty(t,"removeNotification",{enumerable:!0,get:function(){return c.removeNotification}}),Object.defineProperty(t,"clearNotifications",{enumerable:!0,get:function(){return c.clearNotifications}});var u=n(51712);Object.defineProperty(t,"notificationsMiddleware",{enumerable:!0,get:function(){return r(u).default}})},68129:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=void 0;var n="@@INSIGHTS-CORE/NOTIFICATIONS/";t.ADD_NOTIFICATION="".concat(n,"ADD_NOTIFICATION"),t.REMOVE_NOTIFICATION="".concat(n,"REMOVE_NOTIFICATION"),t.CLEAR_NOTIFICATIONS="".concat(n,"CLEAR_NOTIFICATIONS"),t.default={ADD_NOTIFICATION:t.ADD_NOTIFICATION,REMOVE_NOTIFICATION:t.REMOVE_NOTIFICATION,CLEAR_NOTIFICATIONS:t.CLEAR_NOTIFICATIONS}},53446:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearNotifications=t.removeNotification=t.addNotification=void 0;var r=n(68129);t.addNotification=function(e){return{type:r.ADD_NOTIFICATION,payload:e}},t.removeNotification=function(e){return{type:r.REMOVE_NOTIFICATION,payload:e}},t.clearNotifications=function(){return{type:r.CLEAR_NOTIFICATIONS}},t.default={addNotification:t.addNotification,removeNotification:t.removeNotification,clearNotifications:t.clearNotifications}},24778:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.notifications=t.notificationsReducers=t.defaultState=void 0;var o=n(68129);t.defaultState=[],t.notificationsReducers=function(e,n){switch(void 0===e&&(e=t.defaultState),n.type){case o.ADD_NOTIFICATION:return a=e,c=n.payload,i(i([],a,!0),[r({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},c)],!1);case o.REMOVE_NOTIFICATION:return function(e,t){var n=t.payload,r=e.findIndex((function(e){return e.id===n}));return i(i([],e.slice(0,r),!0),e.slice(r+1),!0)}(e,n);case o.CLEAR_NOTIFICATIONS:return[];default:return e}var a,c},t.notifications=t.notificationsReducers,t.default=t.notifications},29932:e=>{e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}},97786:(e,t,n)=>{var r=n(71811),i=n(40327);e.exports=function(e,t){for(var n=0,o=(t=r(t,e)).length;null!=e&&n<o;)e=e[i(t[n++])];return n&&n==o?e:void 0}},78565:e=>{var t=Object.prototype.hasOwnProperty;e.exports=function(e,n){return null!=e&&t.call(e,n)}},80531:(e,t,n)=>{var r=n(62705),i=n(29932),o=n(1469),a=n(33448),c=r?r.prototype:void 0,u=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(o(t))return i(t,e)+"";if(a(t))return u?u.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}},71811:(e,t,n)=>{var r=n(1469),i=n(15403),o=n(55514),a=n(79833);e.exports=function(e,t){return r(e)?e:i(e,t)?[e]:o(a(e))}},222:(e,t,n)=>{var r=n(71811),i=n(35694),o=n(1469),a=n(65776),c=n(41780),u=n(40327);e.exports=function(e,t,n){for(var l=-1,f=(t=r(t,e)).length,s=!1;++l<f;){var d=u(t[l]);if(!(s=null!=e&&n(e,d)))break;e=e[d]}return s||++l!=f?s:!!(f=null==e?0:e.length)&&c(f)&&a(d,f)&&(o(e)||i(e))}},15403:(e,t,n)=>{var r=n(1469),i=n(33448),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;e.exports=function(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!i(e))||a.test(e)||!o.test(e)||null!=t&&e in Object(t)}},24523:(e,t,n)=>{var r=n(88306);e.exports=function(e){var t=r(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}},55514:(e,t,n)=>{var r=n(24523),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,a=r((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(i,(function(e,n,r,i){t.push(r?i.replace(o,"$1"):n||e)})),t}));e.exports=a},40327:(e,t,n)=>{var r=n(33448);e.exports=function(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}},27361:(e,t,n)=>{var r=n(97786);e.exports=function(e,t,n){var i=null==e?void 0:r(e,t);return void 0===i?n:i}},18721:(e,t,n)=>{var r=n(78565),i=n(222);e.exports=function(e,t){return null!=e&&i(e,t,r)}},33448:(e,t,n)=>{var r=n(44239),i=n(37005);e.exports=function(e){return"symbol"==typeof e||i(e)&&"[object Symbol]"==r(e)}},88306:(e,t,n)=>{var r=n(83369);function i(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(i.Cache||r),n}i.Cache=r,e.exports=i},79833:(e,t,n)=>{var r=n(80531);e.exports=function(e){return null==e?"":r(e)}}}]);
//# sourceMappingURL=28e5fbf255b3cd89c537.bundle.js.map