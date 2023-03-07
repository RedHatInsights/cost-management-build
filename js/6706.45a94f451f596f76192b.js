/*! For license information please see 6706.45a94f451f596f76192b.js.LICENSE.txt */
"use strict";(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[6706,9416],{8679:(e,t,n)=>{var r=n(59864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},u={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function a(e){return r.isMemo(e)?c:s[e.$$typeof]||o}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[r.Memo]=c;var i=Object.defineProperty,f=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(y){var o=d(n);o&&o!==y&&e(t,o,r)}var c=f(n);p&&(c=c.concat(p(n)));for(var s=a(t),m=a(n),S=0;S<c.length;++S){var b=c[S];if(!(u[b]||r&&r[b]||m&&m[b]||s&&s[b])){var v=l(n,b);try{i(t,b,v)}catch(e){}}}}return t}},69921:(e,t)=>{var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,u=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,a=n?Symbol.for("react.provider"):60109,i=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,l=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,S=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,h=n?Symbol.for("react.responder"):60118,g=n?Symbol.for("react.scope"):60119;function P(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case f:case p:case u:case s:case c:case d:return e;default:switch(e=e&&e.$$typeof){case i:case l:case S:case m:case a:return e;default:return t}}case o:return t}}}function w(e){return P(e)===p}t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=i,t.ContextProvider=a,t.Element=r,t.ForwardRef=l,t.Fragment=u,t.Lazy=S,t.Memo=m,t.Portal=o,t.Profiler=s,t.StrictMode=c,t.Suspense=d,t.isAsyncMode=function(e){return w(e)||P(e)===f},t.isConcurrentMode=w,t.isContextConsumer=function(e){return P(e)===i},t.isContextProvider=function(e){return P(e)===a},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return P(e)===l},t.isFragment=function(e){return P(e)===u},t.isLazy=function(e){return P(e)===S},t.isMemo=function(e){return P(e)===m},t.isPortal=function(e){return P(e)===o},t.isProfiler=function(e){return P(e)===s},t.isStrictMode=function(e){return P(e)===c},t.isSuspense=function(e){return P(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===u||e===p||e===s||e===c||e===d||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===S||e.$$typeof===m||e.$$typeof===a||e.$$typeof===i||e.$$typeof===l||e.$$typeof===v||e.$$typeof===h||e.$$typeof===g||e.$$typeof===b)},t.typeOf=P},59864:(e,t,n)=>{e.exports=n(69921)},86706:(e,t,n)=>{n.r(t),n.d(t,{Provider:()=>V,ReactReduxContext:()=>f,batch:()=>u.unstable_batchedUpdates,connect:()=>Z,createDispatchHook:()=>U,createSelectorHook:()=>m,createStoreHook:()=>W,shallowEqual:()=>k,useDispatch:()=>z,useSelector:()=>S,useStore:()=>L});var r=n(61688),o=n(52798),u=n(12181);let c=function(e){e()};const s=()=>c;var a=n(92950),i=n.n(a);const f=(0,a.createContext)(null);function p(){return(0,a.useContext)(f)}const l=()=>{throw new Error("uSES not initialized!")};let d=l;const y=(e,t)=>e===t;function m(e=f){const t=e===f?p:()=>(0,a.useContext)(e);return function(e,n=y){const{store:r,subscription:o,getServerState:u}=t(),c=d(o.addNestedSub,r.getState,u||r.getState,e,n);return(0,a.useDebugValue)(c),c}}const S=m();var b=n(87462),v=n(63366),h=n(8679),g=n.n(h),P=n(59864);const w=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function O(e,t,n,r,{areStatesEqual:o,areOwnPropsEqual:u,areStatePropsEqual:c}){let s,a,i,f,p,l=!1;return function(d,y){return l?function(l,d){const y=!u(d,a),m=!o(l,s,d,a);return s=l,a=d,y&&m?(i=e(s,a),t.dependsOnOwnProps&&(f=t(r,a)),p=n(i,f,a),p):y?(e.dependsOnOwnProps&&(i=e(s,a)),t.dependsOnOwnProps&&(f=t(r,a)),p=n(i,f,a),p):m?function(){const t=e(s,a),r=!c(t,i);return i=t,r&&(p=n(i,f,a)),p}():p}(d,y):(s=d,a=y,i=e(s,a),f=t(r,a),p=n(i,f,a),l=!0,p)}}function x(e){return function(t){const n=e(t);function r(){return n}return r.dependsOnOwnProps=!1,r}}function E(e){return e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function C(e,t){return function(t,{displayName:n}){const r=function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e,void 0)};return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=E(e);let o=r(t,n);return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=E(o),o=r(t,n)),o},r}}function $(e,t){return(n,r)=>{throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`)}}function M(e,t,n){return(0,b.Z)({},n,e,t)}const j={notify(){},get:()=>[]};function R(e,t){let n,r=j;function o(){c.onStateChange&&c.onStateChange()}function u(){n||(n=t?t.addNestedSub(o):e.subscribe(o),r=function(){const e=s();let t=null,n=null;return{clear(){t=null,n=null},notify(){e((()=>{let e=t;for(;e;)e.callback(),e=e.next}))},get(){let e=[],n=t;for(;n;)e.push(n),n=n.next;return e},subscribe(e){let r=!0,o=n={callback:e,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){r&&null!==t&&(r=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}const c={addNestedSub:function(e){return u(),r.subscribe(e)},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(n)},trySubscribe:u,tryUnsubscribe:function(){n&&(n(),n=void 0,r.clear(),r=j)},getListeners:()=>r};return c}const T="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?a.useLayoutEffect:a.useEffect;function N(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function k(e,t){if(N(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!N(e[n[r]],t[n[r]]))return!1;return!0}const q=["reactReduxForwardedRef"];let D=l;const F=[null,null];function _(e,t,n,r,o,u){e.current=r,n.current=!1,o.current&&(o.current=null,u())}function B(e,t){return e===t}const Z=function(e,t,n,{pure:r,areStatesEqual:o=B,areOwnPropsEqual:u=k,areStatePropsEqual:c=k,areMergedPropsEqual:s=k,forwardRef:p=!1,context:l=f}={}){const d=l,y=function(e){return e?"function"==typeof e?C(e):$(e,"mapStateToProps"):x((()=>({})))}(e),m=function(e){return e&&"object"==typeof e?x((t=>function(e,t){const n={};for(const r in e){const o=e[r];"function"==typeof o&&(n[r]=(...e)=>t(o(...e)))}return n}(e,t))):e?"function"==typeof e?C(e):$(e,"mapDispatchToProps"):x((e=>({dispatch:e})))}(t),S=function(e){return e?"function"==typeof e?function(e){return function(t,{displayName:n,areMergedPropsEqual:r}){let o,u=!1;return function(t,n,c){const s=e(t,n,c);return u?r(s,o)||(o=s):(u=!0,o=s),o}}}(e):$(e,"mergeProps"):()=>M}(n),h=Boolean(e);return e=>{const t=e.displayName||e.name||"Component",n=`Connect(${t})`,r={shouldHandleStateChanges:h,displayName:n,wrappedComponentName:t,WrappedComponent:e,initMapStateToProps:y,initMapDispatchToProps:m,initMergeProps:S,areStatesEqual:o,areStatePropsEqual:c,areOwnPropsEqual:u,areMergedPropsEqual:s};function f(t){const[n,o,u]=(0,a.useMemo)((()=>{const{reactReduxForwardedRef:e}=t,n=(0,v.Z)(t,q);return[t.context,e,n]}),[t]),c=(0,a.useMemo)((()=>n&&n.Consumer&&(0,P.isContextConsumer)(i().createElement(n.Consumer,null))?n:d),[n,d]),s=(0,a.useContext)(c),f=Boolean(t.store)&&Boolean(t.store.getState)&&Boolean(t.store.dispatch),p=Boolean(s)&&Boolean(s.store),l=f?t.store:s.store,y=p?s.getServerState:l.getState,m=(0,a.useMemo)((()=>function(e,t){let{initMapStateToProps:n,initMapDispatchToProps:r,initMergeProps:o}=t,u=(0,v.Z)(t,w);return O(n(e,u),r(e,u),o(e,u),e,u)}(l.dispatch,r)),[l]),[S,g]=(0,a.useMemo)((()=>{if(!h)return F;const e=R(l,f?void 0:s.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]}),[l,f,s]),x=(0,a.useMemo)((()=>f?s:(0,b.Z)({},s,{subscription:S})),[f,s,S]),E=(0,a.useRef)(),C=(0,a.useRef)(u),$=(0,a.useRef)(),M=(0,a.useRef)(!1),j=((0,a.useRef)(!1),(0,a.useRef)(!1)),N=(0,a.useRef)();T((()=>(j.current=!0,()=>{j.current=!1})),[]);const k=(0,a.useMemo)((()=>()=>$.current&&u===C.current?$.current:m(l.getState(),u)),[l,u]),B=(0,a.useMemo)((()=>e=>S?function(e,t,n,r,o,u,c,s,a,i,f){if(!e)return()=>{};let p=!1,l=null;const d=()=>{if(p||!s.current)return;const e=t.getState();let n,d;try{n=r(e,o.current)}catch(e){d=e,l=e}d||(l=null),n===u.current?c.current||i():(u.current=n,a.current=n,c.current=!0,f())};return n.onStateChange=d,n.trySubscribe(),d(),()=>{if(p=!0,n.tryUnsubscribe(),n.onStateChange=null,l)throw l}}(h,l,S,m,C,E,M,j,$,g,e):()=>{}),[S]);var Z,V;let W;Z=_,V=[C,E,M,u,$,g],T((()=>Z(...V)),undefined);try{W=D(B,k,y?()=>m(y(),u):k)}catch(e){throw N.current&&(e.message+=`\nThe error may be correlated with this previous error:\n${N.current.stack}\n\n`),e}T((()=>{N.current=void 0,$.current=void 0,E.current=W}));const L=(0,a.useMemo)((()=>i().createElement(e,(0,b.Z)({},W,{ref:o}))),[o,e,W]);return(0,a.useMemo)((()=>h?i().createElement(c.Provider,{value:x},L):L),[c,L,x])}const l=i().memo(f);if(l.WrappedComponent=e,l.displayName=f.displayName=n,p){const t=i().forwardRef((function(e,t){return i().createElement(l,(0,b.Z)({},e,{reactReduxForwardedRef:t}))}));return t.displayName=n,t.WrappedComponent=e,g()(t,e)}return g()(l,e)}},V=function({store:e,context:t,children:n,serverState:r}){const o=(0,a.useMemo)((()=>{const t=R(e);return{store:e,subscription:t,getServerState:r?()=>r:void 0}}),[e,r]),u=(0,a.useMemo)((()=>e.getState()),[e]);T((()=>{const{subscription:t}=o;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),u!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}}),[o,u]);const c=t||f;return i().createElement(c.Provider,{value:o},n)};function W(e=f){const t=e===f?p:()=>(0,a.useContext)(e);return function(){const{store:e}=t();return e}}const L=W();function U(e=f){const t=e===f?L:W(e);return function(){return t().dispatch}}const z=U();var H,A;H=o.useSyncExternalStoreWithSelector,d=H,(e=>{D=e})(r.useSyncExternalStore),A=u.unstable_batchedUpdates,c=A},53250:(e,t,n)=>{var r=n(92950),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},u=r.useState,c=r.useEffect,s=r.useLayoutEffect,a=r.useDebugValue;function i(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(e){return!0}}var f="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=u({inst:{value:n,getSnapshot:t}}),o=r[0].inst,f=r[1];return s((function(){o.value=n,o.getSnapshot=t,i(o)&&f({inst:o})}),[e,n,t]),c((function(){return i(o)&&f({inst:o}),e((function(){i(o)&&f({inst:o})}))}),[e]),a(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:f},50139:(e,t,n)=>{var r=n(92950),o=n(61688),u="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},c=o.useSyncExternalStore,s=r.useRef,a=r.useEffect,i=r.useMemo,f=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var p=s(null);if(null===p.current){var l={hasValue:!1,value:null};p.current=l}else l=p.current;p=i((function(){function e(e){if(!a){if(a=!0,c=e,e=r(e),void 0!==o&&l.hasValue){var t=l.value;if(o(t,e))return s=t}return s=e}if(t=s,u(c,e))return t;var n=r(e);return void 0!==o&&o(t,n)?t:(c=e,s=n)}var c,s,a=!1,i=void 0===n?null:n;return[function(){return e(t())},null===i?void 0:function(){return e(i())}]}),[t,n,r,o]);var d=c(e,p[0],p[1]);return a((function(){l.hasValue=!0,l.value=d}),[d]),f(d),d}},61688:(e,t,n)=>{e.exports=n(53250)},52798:(e,t,n)=>{e.exports=n(50139)},87462:(e,t,n)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:()=>r})},63366:(e,t,n)=>{function r(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:()=>r})}}]);
//# sourceMappingURL=../sourcemaps/6706.8822d2884c7ca8ce871e90437f39ab99.js.map