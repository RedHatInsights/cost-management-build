(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[913],{80913:(t,e,n)=>{(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},r={};e.r(r),e.d(r,{FlagContext:()=>a,FlagProvider:()=>u,InMemoryStorageProvider:()=>o.InMemoryStorageProvider,LocalStorageProvider:()=>o.LocalStorageProvider,UnleashClient:()=>o.UnleashClient,default:()=>v,useFlag:()=>c,useFlags:()=>l,useFlagsStatus:()=>f,useUnleashClient:()=>d,useUnleashContext:()=>p,useVariant:()=>h});const o=n(14009),i=n(92950),a=e.n(i)().createContext(null);var s={bootstrap:[],disableRefresh:!0,disableMetrics:!0,url:"http://localhost",appName:"offline",clientKey:"not-used"};const u=function(t){var e=t.config,n=t.children,r=t.unleashClient,u=t.startClient,c=void 0===u||u,l=i.useRef(r||new o.UnleashClient(e||s)),f=i.useState(!1),h=f[0],p=f[1],d=i.useState(null),v=d[0],y=d[1],g=i.useRef(null);i.useEffect((function(){e||r||console.error("You must provide either a config or an unleash client to the flag provider.\n        If you are initializing the client in useEffect, you can avoid this warning\n        by checking if the client exists before rendering.");var t=function(t){g.current=t,null===g.current&&y(t)},n=function(){p(!0)};return l.current.on("ready",n),l.current.on("error",t),(c||!r)&&(l.current.stop(),l.current.start()),function(){l.current&&(l.current.off("error",t),l.current.off("ready",n),l.current.stop())}}),[]);var b=function(t){return n=function(){return function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(e){switch(e.label){case 0:return[4,l.current.updateContext(t)];case 1:return e.sent(),[2]}}))},new((e=void 0)||(e=Promise))((function(t,r){function o(t){try{a(n.next(t))}catch(t){r(t)}}function i(t){try{a(n.throw(t))}catch(t){r(t)}}function a(n){var r;n.done?t(n.value):(r=n.value,r instanceof e?r:new e((function(t){t(r)}))).then(o,i)}a((n=n.apply(void 0,[])).next())}));var e,n},m=function(t){return l.current.isEnabled(t)},w=function(t){return l.current.getVariant(t)},E=function(t,e,n){return l.current.on(t,e,n)},x=i.useMemo((function(){return{on:E,updateContext:b,isEnabled:m,getVariant:w,client:l.current,flagsReady:h,flagsError:v,setFlagsReady:p,setFlagsError:y}}),[h,v]);return i.createElement(a.Provider,{value:x},n)},c=function(t){var e=(0,i.useContext)(a),n=e.isEnabled,r=e.client,o=(0,i.useState)(!!n(t)),s=o[0],u=o[1],c=(0,i.useRef)();return c.current=s,(0,i.useEffect)((function(){r&&(r.on("update",(function(){var e=n(t);e!==c.current&&(c.current=e,u(!!e))})),r.on("ready",(function(){var e=n(t);c.current=e,u(e)})))}),[r]),s},l=function(){return(0,i.useContext)(a).client.getAllToggles()},f=function(){var t=(0,i.useContext)(a);return{flagsReady:t.flagsReady,flagsError:t.flagsError}},h=function(t){var e=(0,i.useContext)(a),n=e.getVariant,r=e.client,o=(0,i.useState)(n(t)),s=o[0],u=o[1],c=(0,i.useRef)({name:s.name,enabled:s.enabled});return c.current=s,(0,i.useEffect)((function(){r&&(r.on("update",(function(){var e=n(t);c.current.name===(null==e?void 0:e.name)&&c.current.enabled===(null==e?void 0:e.enabled)||(u(e),c.current=e)})),r.on("ready",(function(){var e=n(t);c.current.name=null==e?void 0:e.name,c.current.enabled=null==e?void 0:e.enabled,u(e)})))}),[r]),s||{}},p=function(){return(0,i.useContext)(a).updateContext},d=function(){return(0,i.useContext)(a).client},v=u;t.exports=r})()},74279:t=>{function e(){}e.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e},82562:function(t,e,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var o=n(21614),i=function(){function t(){}return t.prototype.generateEventId=function(){return(0,o.v4)()},t.prototype.createImpressionEvent=function(t,e,n,o,i,a){var s=this.createBaseEvent(t,e,n,o,i);return a?r(r({},s),{variant:a}):s},t.prototype.createBaseEvent=function(t,e,n,r,o){return{eventType:r,eventId:this.generateEventId(),context:t,enabled:e,featureName:n,impressionData:o}},t}();e.default=i},14009:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)},a=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}u((r=r.apply(t,e||[])).next())}))},s=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},u=this&&this.__spreadArray||function(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0}),e.InMemoryStorageProvider=e.LocalStorageProvider=e.UnleashClient=e.resolveFetch=e.EVENTS=void 0;var c=n(74279),l=n(88524),f=n(8475);e.InMemoryStorageProvider=f.default;var h=n(6432);e.LocalStorageProvider=h.default;var p=n(82562),d=n(75581),v=["userId","sessionId","remoteAddress"];e.EVENTS={INIT:"initialized",ERROR:"error",READY:"ready",UPDATE:"update",IMPRESSION:"impression"};var y={name:"disabled",enabled:!1},g="repo";e.resolveFetch=function(){try{if("undefined"!=typeof window&&"fetch"in window)return fetch.bind(window);if("fetch"in globalThis)return fetch.bind(globalThis)}catch(t){console.error('Unleash failed to resolve "fetch"',t)}};var b=function(t){function n(n){var r=n.storageProvider,o=n.url,a=n.clientKey,s=n.disableRefresh,u=void 0!==s&&s,c=n.refreshInterval,d=void 0===c?30:c,v=n.metricsInterval,y=void 0===v?30:v,g=n.disableMetrics,b=void 0!==g&&g,m=n.appName,w=n.environment,E=void 0===w?"default":w,x=n.context,S=n.fetch,I=void 0===S?(0,e.resolveFetch)():S,T=n.bootstrap,O=n.bootstrapOverride,k=void 0===O||O,R=n.headerName,_=void 0===R?"Authorization":R,N=n.customHeaders,P=void 0===N?{}:N,C=n.impressionDataAll,U=void 0!==C&&C,A=n.usePOSTrequests,M=void 0!==A&&A,j=t.call(this)||this;if(j.toggles=[],j.etag="",j.readyEventEmitted=!1,j.usePOSTrequests=!1,j.started=!1,!o)throw new Error("url is required");if(!a)throw new Error("clientKey is required");if(!m)throw new Error("appName is required.");return j.eventsHandler=new p.default,j.impressionDataAll=U,j.toggles=T&&T.length>0?T:[],j.url=o instanceof URL?o:new URL(o),j.clientKey=a,j.headerName=_,j.customHeaders=P,j.storage=r||("undefined"!=typeof window?new h.default:new f.default),j.refreshInterval=u?0:1e3*d,j.context=i({appName:m,environment:E},x),j.usePOSTrequests=M,j.ready=new Promise((function(t){j.init().then(t).catch((function(n){console.error(n),j.emit(e.EVENTS.ERROR,n),t()}))})),I||console.error('Unleash: You must either provide your own "fetch" implementation or run in an environment where "fetch" is available.'),j.fetch=I,j.bootstrap=T&&T.length>0?T:void 0,j.bootstrapOverride=k,j.metrics=new l.default({onError:j.emit.bind(j,e.EVENTS.ERROR),appName:m,metricsInterval:y,disableMetrics:b,url:j.url,clientKey:a,fetch:I,headerName:_}),j}return o(n,t),n.prototype.getAllToggles=function(){return u([],this.toggles,!0)},n.prototype.isEnabled=function(t){var n,r=this.toggles.find((function(e){return e.name===t})),o=!!r&&r.enabled;if(this.metrics.count(t,o),(null==r?void 0:r.impressionData)||this.impressionDataAll){var i=this.eventsHandler.createImpressionEvent(this.context,o,t,"isEnabled",null!==(n=null==r?void 0:r.impressionData)&&void 0!==n?n:void 0);this.emit(e.EVENTS.IMPRESSION,i)}return o},n.prototype.getVariant=function(t){var n,r=this.toggles.find((function(e){return e.name===t})),o=(null==r?void 0:r.enabled)||!1,i=r?r.variant:y;if(this.metrics.count(t,o),(null==r?void 0:r.impressionData)||this.impressionDataAll){var a=this.eventsHandler.createImpressionEvent(this.context,o,t,"getVariant",null!==(n=null==r?void 0:r.impressionData)&&void 0!==n?n:void 0,i.name);this.emit(e.EVENTS.IMPRESSION,a)}return i},n.prototype.updateContext=function(t){return a(this,void 0,void 0,(function(){var n,r=this;return s(this,(function(o){switch(o.label){case 0:return(t.appName||t.environment)&&console.warn("appName and environment are static. They can't be updated with updateContext."),n={environment:this.context.environment,appName:this.context.appName,sessionId:this.context.sessionId},this.context=i(i({},n),t),this.timerRef||this.readyEventEmitted?[4,this.fetchToggles()]:[3,2];case 1:return o.sent(),[3,4];case 2:return this.started?[4,new Promise((function(t){var n=function(){r.fetchToggles().then((function(){r.off(e.EVENTS.READY,n),t()}))};r.once(e.EVENTS.READY,n)}))]:[3,4];case 3:o.sent(),o.label=4;case 4:return[2]}}))}))},n.prototype.getContext=function(){return i({},this.context)},n.prototype.setContextField=function(t,e){var n,r;if(v.includes(t))this.context=i(i({},this.context),((n={})[t]=e,n));else{var o=i(i({},this.context.properties),((r={})[t]=e,r));this.context=i(i({},this.context),{properties:o})}this.timerRef&&this.fetchToggles()},n.prototype.init=function(){return a(this,void 0,void 0,(function(){var t,n;return s(this,(function(r){switch(r.label){case 0:return[4,this.resolveSessionId()];case 1:return t=r.sent(),this.context=i({sessionId:t},this.context),n=this,[4,this.storage.get(g)];case 2:return n.toggles=r.sent()||[],!this.bootstrap||!this.bootstrapOverride&&0!==this.toggles.length?[3,4]:[4,this.storage.save(g,this.bootstrap)];case 3:r.sent(),this.toggles=this.bootstrap,this.emit(e.EVENTS.READY),r.label=4;case 4:return this.emit(e.EVENTS.INIT),[2]}}))}))},n.prototype.start=function(){return a(this,void 0,void 0,(function(){var t,e=this;return s(this,(function(n){switch(n.label){case 0:return this.started=!0,this.timerRef?(console.error("Unleash SDK has already started, if you want to restart the SDK you should call client.stop() before starting again."),[2]):[4,this.ready];case 1:return n.sent(),this.metrics.start(),t=this.refreshInterval,[4,this.fetchToggles()];case 2:return n.sent(),t>0&&(this.timerRef=setInterval((function(){return e.fetchToggles()}),t)),[2]}}))}))},n.prototype.stop=function(){this.timerRef&&(clearInterval(this.timerRef),this.timerRef=void 0),this.metrics.stop()},n.prototype.resolveSessionId=function(){return a(this,void 0,void 0,(function(){var t;return s(this,(function(e){switch(e.label){case 0:return this.context.sessionId?[2,this.context.sessionId]:[3,1];case 1:return[4,this.storage.get("sessionId")];case 2:return(t=e.sent())?[3,4]:(t=Math.floor(1e9*Math.random()),[4,this.storage.save("sessionId",t)]);case 3:e.sent(),e.label=4;case 4:return[2,t]}}))}))},n.prototype.getHeaders=function(){var t,e=((t={})[this.headerName]=this.clientKey,t.Accept="application/json",t["Content-Type"]="application/json",t["If-None-Match"]=this.etag,t);return Object.entries(this.customHeaders).filter(d.notNullOrUndefined).forEach((function(t){var n=t[0],r=t[1];return e[n]=r})),e},n.prototype.storeToggles=function(t){return a(this,void 0,void 0,(function(){return s(this,(function(n){switch(n.label){case 0:return this.toggles=t,this.emit(e.EVENTS.UPDATE),[4,this.storage.save(g,t)];case 1:return n.sent(),[2]}}))}))},n.prototype.fetchToggles=function(){return a(this,void 0,void 0,(function(){var t,n,r,o,i,a,u;return s(this,(function(s){switch(s.label){case 0:if(!this.fetch)return[3,8];s.label=1;case 1:return s.trys.push([1,7,,8]),t=this.usePOSTrequests,n=t?this.url:(0,d.urlWithContextAsQuery)(this.url,this.context),r=t?"POST":"GET",o=t?JSON.stringify({context:this.context}):void 0,[4,this.fetch(n.toString(),{method:r,cache:"no-cache",headers:this.getHeaders(),body:o})];case 2:return(i=s.sent()).ok&&304!==i.status?(this.etag=i.headers.get("ETag")||"",[4,i.json()]):[3,5];case 3:return a=s.sent(),[4,this.storeToggles(a.toggles)];case 4:return s.sent(),this.bootstrap||this.readyEventEmitted||(this.emit(e.EVENTS.READY),this.readyEventEmitted=!0),[3,6];case 5:i.ok||304===i.status||(console.error("Unleash: Fetching feature toggles did not have an ok response"),this.emit(e.EVENTS.ERROR,{type:"HttpError",code:i.status})),s.label=6;case 6:return[3,8];case 7:return u=s.sent(),console.error("Unleash: unable to fetch feature toggles",u),this.emit(e.EVENTS.ERROR,u),[3,8];case 8:return[2]}}))}))},n}(c.TinyEmitter);e.UnleashClient=b},88524:function(t,e){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)},r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}u((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t){var e=t.onError,n=t.appName,r=t.metricsInterval,o=t.disableMetrics,i=void 0!==o&&o,a=t.url,s=t.clientKey,u=t.fetch,c=t.headerName;this.onError=e,this.disabled=i,this.metricsInterval=1e3*r,this.appName=n,this.url=a instanceof URL?a:new URL(a),this.clientKey=s,this.bucket=this.createEmptyBucket(),this.fetch=u,this.headerName=c}return t.prototype.start=function(){var t=this;if(this.disabled)return!1;"number"==typeof this.metricsInterval&&this.metricsInterval>0&&setTimeout((function(){t.startTimer(),t.sendMetrics()}),2e3)},t.prototype.stop=function(){this.timer&&(clearTimeout(this.timer),delete this.timer)},t.prototype.createEmptyBucket=function(){return{start:new Date,stop:null,toggles:{}}},t.prototype.sendMetrics=function(){return r(this,void 0,void 0,(function(){var t,e,n,r;return o(this,(function(o){switch(o.label){case 0:if(t="".concat(this.url,"/client/metrics"),e=this.getPayload(),this.bucketIsEmpty(e))return[2];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.fetch(t,{cache:"no-cache",method:"POST",headers:(r={},r[this.headerName]=this.clientKey,r.Accept="application/json",r["Content-Type"]="application/json",r),body:JSON.stringify(e)})];case 2:return o.sent(),[3,4];case 3:return n=o.sent(),console.error("Unleash: unable to send feature metrics",n),this.onError(n),[3,4];case 4:return[2]}}))}))},t.prototype.count=function(t,e){return!(this.disabled||!this.bucket||(this.assertBucket(t),this.bucket.toggles[t][e?"yes":"no"]++,0))},t.prototype.assertBucket=function(t){if(this.disabled||!this.bucket)return!1;this.bucket.toggles[t]||(this.bucket.toggles[t]={yes:0,no:0})},t.prototype.startTimer=function(){var t=this;this.timer=setInterval((function(){t.sendMetrics()}),this.metricsInterval)},t.prototype.bucketIsEmpty=function(t){return 0===Object.keys(t.bucket.toggles).length},t.prototype.getPayload=function(){var t=n(n({},this.bucket),{stop:new Date});return this.bucket=this.createEmptyBucket(),{bucket:t,appName:this.appName,instanceId:"browser"}},t}();e.default=i},8475:function(t,e){"use strict";var n=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}u((r=r.apply(t,e||[])).next())}))},r=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){this.store=new Map}return t.prototype.save=function(t,e){return n(this,void 0,void 0,(function(){return r(this,(function(n){return this.store.set(t,e),[2]}))}))},t.prototype.get=function(t){return n(this,void 0,void 0,(function(){return r(this,(function(e){return[2,this.store.get(t)]}))}))},t}();e.default=o},6432:function(t,e){"use strict";var n=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}u((r=r.apply(t,e||[])).next())}))},r=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){this.prefix="unleash:repository"}return t.prototype.save=function(t,e){return n(this,void 0,void 0,(function(){var n,o;return r(this,(function(r){n=JSON.stringify(e),o="".concat(this.prefix,":").concat(t);try{window.localStorage.setItem(o,n)}catch(t){console.error(t)}return[2]}))}))},t.prototype.get=function(t){try{var e="".concat(this.prefix,":").concat(t),n=window.localStorage.getItem(e);return n?JSON.parse(n):void 0}catch(t){console.error(t)}},t}();e.default=o},75581:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.urlWithContextAsQuery=e.notNullOrUndefined=void 0,e.notNullOrUndefined=function(t){return null!=t[1]},e.urlWithContextAsQuery=function(t,n){var r=new URL(t.toString());return Object.entries(n).filter(e.notNullOrUndefined).forEach((function(t){var n=t[0],o=t[1];"properties"===n&&o?Object.entries(o).filter(e.notNullOrUndefined).forEach((function(t){var e=t[0],n=t[1];return r.searchParams.append("properties[".concat(e,"]"),n)})):r.searchParams.append(n,o)})),r}},21614:(t,e,n)=>{"use strict";var r;n.r(e),n.d(e,{NIL:()=>N,parse:()=>y,stringify:()=>l,v1:()=>v,v3:()=>T,v4:()=>O,v5:()=>_,validate:()=>s,version:()=>P});var o=new Uint8Array(16);function i(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}const a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,s=function(t){return"string"==typeof t&&a.test(t)};for(var u=[],c=0;c<256;++c)u.push((c+256).toString(16).substr(1));const l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(u[t[e+0]]+u[t[e+1]]+u[t[e+2]]+u[t[e+3]]+"-"+u[t[e+4]]+u[t[e+5]]+"-"+u[t[e+6]]+u[t[e+7]]+"-"+u[t[e+8]]+u[t[e+9]]+"-"+u[t[e+10]]+u[t[e+11]]+u[t[e+12]]+u[t[e+13]]+u[t[e+14]]+u[t[e+15]]).toLowerCase();if(!s(n))throw TypeError("Stringified UUID is invalid");return n};var f,h,p=0,d=0;const v=function(t,e,n){var r=e&&n||0,o=e||new Array(16),a=(t=t||{}).node||f,s=void 0!==t.clockseq?t.clockseq:h;if(null==a||null==s){var u=t.random||(t.rng||i)();null==a&&(a=f=[1|u[0],u[1],u[2],u[3],u[4],u[5]]),null==s&&(s=h=16383&(u[6]<<8|u[7]))}var c=void 0!==t.msecs?t.msecs:Date.now(),v=void 0!==t.nsecs?t.nsecs:d+1,y=c-p+(v-d)/1e4;if(y<0&&void 0===t.clockseq&&(s=s+1&16383),(y<0||c>p)&&void 0===t.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");p=c,d=v,h=s;var g=(1e4*(268435455&(c+=122192928e5))+v)%4294967296;o[r++]=g>>>24&255,o[r++]=g>>>16&255,o[r++]=g>>>8&255,o[r++]=255&g;var b=c/4294967296*1e4&268435455;o[r++]=b>>>8&255,o[r++]=255&b,o[r++]=b>>>24&15|16,o[r++]=b>>>16&255,o[r++]=s>>>8|128,o[r++]=255&s;for(var m=0;m<6;++m)o[r+m]=a[m];return e||l(o)},y=function(t){if(!s(t))throw TypeError("Invalid UUID");var e,n=new Uint8Array(16);return n[0]=(e=parseInt(t.slice(0,8),16))>>>24,n[1]=e>>>16&255,n[2]=e>>>8&255,n[3]=255&e,n[4]=(e=parseInt(t.slice(9,13),16))>>>8,n[5]=255&e,n[6]=(e=parseInt(t.slice(14,18),16))>>>8,n[7]=255&e,n[8]=(e=parseInt(t.slice(19,23),16))>>>8,n[9]=255&e,n[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,n[11]=e/4294967296&255,n[12]=e>>>24&255,n[13]=e>>>16&255,n[14]=e>>>8&255,n[15]=255&e,n};function g(t,e,n){function r(t,r,o,i){if("string"==typeof t&&(t=function(t){t=unescape(encodeURIComponent(t));for(var e=[],n=0;n<t.length;++n)e.push(t.charCodeAt(n));return e}(t)),"string"==typeof r&&(r=y(r)),16!==r.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var a=new Uint8Array(16+t.length);if(a.set(r),a.set(t,r.length),(a=n(a))[6]=15&a[6]|e,a[8]=63&a[8]|128,o){i=i||0;for(var s=0;s<16;++s)o[i+s]=a[s];return o}return l(a)}try{r.name=t}catch(t){}return r.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",r.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",r}function b(t){return 14+(t+64>>>9<<4)+1}function m(t,e){var n=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(n>>16)<<16|65535&n}function w(t,e,n,r,o,i){return m((a=m(m(e,t),m(r,i)))<<(s=o)|a>>>32-s,n);var a,s}function E(t,e,n,r,o,i,a){return w(e&n|~e&r,t,e,o,i,a)}function x(t,e,n,r,o,i,a){return w(e&r|n&~r,t,e,o,i,a)}function S(t,e,n,r,o,i,a){return w(e^n^r,t,e,o,i,a)}function I(t,e,n,r,o,i,a){return w(n^(e|~r),t,e,o,i,a)}const T=g("v3",48,(function(t){if("string"==typeof t){var e=unescape(encodeURIComponent(t));t=new Uint8Array(e.length);for(var n=0;n<e.length;++n)t[n]=e.charCodeAt(n)}return function(t){for(var e=[],n=32*t.length,r="0123456789abcdef",o=0;o<n;o+=8){var i=t[o>>5]>>>o%32&255,a=parseInt(r.charAt(i>>>4&15)+r.charAt(15&i),16);e.push(a)}return e}(function(t,e){t[e>>5]|=128<<e%32,t[b(e)-1]=e;for(var n=1732584193,r=-271733879,o=-1732584194,i=271733878,a=0;a<t.length;a+=16){var s=n,u=r,c=o,l=i;n=E(n,r,o,i,t[a],7,-680876936),i=E(i,n,r,o,t[a+1],12,-389564586),o=E(o,i,n,r,t[a+2],17,606105819),r=E(r,o,i,n,t[a+3],22,-1044525330),n=E(n,r,o,i,t[a+4],7,-176418897),i=E(i,n,r,o,t[a+5],12,1200080426),o=E(o,i,n,r,t[a+6],17,-1473231341),r=E(r,o,i,n,t[a+7],22,-45705983),n=E(n,r,o,i,t[a+8],7,1770035416),i=E(i,n,r,o,t[a+9],12,-1958414417),o=E(o,i,n,r,t[a+10],17,-42063),r=E(r,o,i,n,t[a+11],22,-1990404162),n=E(n,r,o,i,t[a+12],7,1804603682),i=E(i,n,r,o,t[a+13],12,-40341101),o=E(o,i,n,r,t[a+14],17,-1502002290),n=x(n,r=E(r,o,i,n,t[a+15],22,1236535329),o,i,t[a+1],5,-165796510),i=x(i,n,r,o,t[a+6],9,-1069501632),o=x(o,i,n,r,t[a+11],14,643717713),r=x(r,o,i,n,t[a],20,-373897302),n=x(n,r,o,i,t[a+5],5,-701558691),i=x(i,n,r,o,t[a+10],9,38016083),o=x(o,i,n,r,t[a+15],14,-660478335),r=x(r,o,i,n,t[a+4],20,-405537848),n=x(n,r,o,i,t[a+9],5,568446438),i=x(i,n,r,o,t[a+14],9,-1019803690),o=x(o,i,n,r,t[a+3],14,-187363961),r=x(r,o,i,n,t[a+8],20,1163531501),n=x(n,r,o,i,t[a+13],5,-1444681467),i=x(i,n,r,o,t[a+2],9,-51403784),o=x(o,i,n,r,t[a+7],14,1735328473),n=S(n,r=x(r,o,i,n,t[a+12],20,-1926607734),o,i,t[a+5],4,-378558),i=S(i,n,r,o,t[a+8],11,-2022574463),o=S(o,i,n,r,t[a+11],16,1839030562),r=S(r,o,i,n,t[a+14],23,-35309556),n=S(n,r,o,i,t[a+1],4,-1530992060),i=S(i,n,r,o,t[a+4],11,1272893353),o=S(o,i,n,r,t[a+7],16,-155497632),r=S(r,o,i,n,t[a+10],23,-1094730640),n=S(n,r,o,i,t[a+13],4,681279174),i=S(i,n,r,o,t[a],11,-358537222),o=S(o,i,n,r,t[a+3],16,-722521979),r=S(r,o,i,n,t[a+6],23,76029189),n=S(n,r,o,i,t[a+9],4,-640364487),i=S(i,n,r,o,t[a+12],11,-421815835),o=S(o,i,n,r,t[a+15],16,530742520),n=I(n,r=S(r,o,i,n,t[a+2],23,-995338651),o,i,t[a],6,-198630844),i=I(i,n,r,o,t[a+7],10,1126891415),o=I(o,i,n,r,t[a+14],15,-1416354905),r=I(r,o,i,n,t[a+5],21,-57434055),n=I(n,r,o,i,t[a+12],6,1700485571),i=I(i,n,r,o,t[a+3],10,-1894986606),o=I(o,i,n,r,t[a+10],15,-1051523),r=I(r,o,i,n,t[a+1],21,-2054922799),n=I(n,r,o,i,t[a+8],6,1873313359),i=I(i,n,r,o,t[a+15],10,-30611744),o=I(o,i,n,r,t[a+6],15,-1560198380),r=I(r,o,i,n,t[a+13],21,1309151649),n=I(n,r,o,i,t[a+4],6,-145523070),i=I(i,n,r,o,t[a+11],10,-1120210379),o=I(o,i,n,r,t[a+2],15,718787259),r=I(r,o,i,n,t[a+9],21,-343485551),n=m(n,s),r=m(r,u),o=m(o,c),i=m(i,l)}return[n,r,o,i]}(function(t){if(0===t.length)return[];for(var e=8*t.length,n=new Uint32Array(b(e)),r=0;r<e;r+=8)n[r>>5]|=(255&t[r/8])<<r%32;return n}(t),8*t.length))})),O=function(t,e,n){var r=(t=t||{}).random||(t.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var o=0;o<16;++o)e[n+o]=r[o];return e}return l(r)};function k(t,e,n,r){switch(t){case 0:return e&n^~e&r;case 1:case 3:return e^n^r;case 2:return e&n^e&r^n&r}}function R(t,e){return t<<e|t>>>32-e}const _=g("v5",80,(function(t){var e=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){var r=unescape(encodeURIComponent(t));t=[];for(var o=0;o<r.length;++o)t.push(r.charCodeAt(o))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);for(var i=t.length/4+2,a=Math.ceil(i/16),s=new Array(a),u=0;u<a;++u){for(var c=new Uint32Array(16),l=0;l<16;++l)c[l]=t[64*u+4*l]<<24|t[64*u+4*l+1]<<16|t[64*u+4*l+2]<<8|t[64*u+4*l+3];s[u]=c}s[a-1][14]=8*(t.length-1)/Math.pow(2,32),s[a-1][14]=Math.floor(s[a-1][14]),s[a-1][15]=8*(t.length-1)&4294967295;for(var f=0;f<a;++f){for(var h=new Uint32Array(80),p=0;p<16;++p)h[p]=s[f][p];for(var d=16;d<80;++d)h[d]=R(h[d-3]^h[d-8]^h[d-14]^h[d-16],1);for(var v=n[0],y=n[1],g=n[2],b=n[3],m=n[4],w=0;w<80;++w){var E=Math.floor(w/20),x=R(v,5)+k(E,y,g,b)+m+e[E]+h[w]>>>0;m=b,b=g,g=R(y,30)>>>0,y=v,v=x}n[0]=n[0]+v>>>0,n[1]=n[1]+y>>>0,n[2]=n[2]+g>>>0,n[3]=n[3]+b>>>0,n[4]=n[4]+m>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]})),N="00000000-0000-0000-0000-000000000000",P=function(t){if(!s(t))throw TypeError("Invalid UUID");return parseInt(t.substr(14,1),16)}}}]);
//# sourceMappingURL=../sourcemaps/913.e40843af15047d947e27063b452754a3.js.map