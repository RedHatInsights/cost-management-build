/*! For license information please see 9416.dece5a290d5d6b173470.js.LICENSE.txt */
"use strict";(self.webpackChunkcostManagement=self.webpackChunkcostManagement||[]).push([[9416],{86706:(e,t,n)=>{n.r(t),n.d(t,{Provider:()=>$,ReactReduxContext:()=>l,batch:()=>u.unstable_batchedUpdates,connect:()=>U,createDispatchHook:()=>L,createSelectorHook:()=>v,createStoreHook:()=>H,shallowEqual:()=>j,useDispatch:()=>_,useSelector:()=>m,useStore:()=>F});var r=n(61688),o=n(52798),u=n(12181);let s=function(e){e()};const c=()=>s;var a=n(92950),i=n.n(a);const l=(0,a.createContext)(null);function f(){return(0,a.useContext)(l)}const p=()=>{throw new Error("uSES not initialized!")};let d=p;const S=(e,t)=>e===t;function v(e=l){const t=e===l?f:()=>(0,a.useContext)(e);return function(e,n=S){const{store:r,subscription:o,getServerState:u}=t(),s=d(o.addNestedSub,r.getState,u||r.getState,e,n);return(0,a.useDebugValue)(s),s}}const m=v();var b=n(87462),h=n(63366),y=n(8679),g=n.n(y),w=n(59864);const P=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function E(e,t,n,r,{areStatesEqual:o,areOwnPropsEqual:u,areStatePropsEqual:s}){let c,a,i,l,f,p=!1;return function(d,S){return p?function(p,d){const S=!u(d,a),v=!o(p,c,d,a);return c=p,a=d,S&&v?(i=e(c,a),t.dependsOnOwnProps&&(l=t(r,a)),f=n(i,l,a),f):S?(e.dependsOnOwnProps&&(i=e(c,a)),t.dependsOnOwnProps&&(l=t(r,a)),f=n(i,l,a),f):v?function(){const t=e(c,a),r=!s(t,i);return i=t,r&&(f=n(i,l,a)),f}():f}(d,S):(c=d,a=S,i=e(c,a),l=t(r,a),f=n(i,l,a),p=!0,f)}}function x(e){return function(t){const n=e(t);function r(){return n}return r.dependsOnOwnProps=!1,r}}function O(e){return e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function C(e,t){return function(t,{displayName:n}){const r=function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e,void 0)};return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=O(e);let o=r(t,n);return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=O(o),o=r(t,n)),o},r}}function M(e,t){return(n,r)=>{throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`)}}function R(e,t,n){return(0,b.Z)({},n,e,t)}const N={notify(){},get:()=>[]};function T(e,t){let n,r=N;function o(){s.onStateChange&&s.onStateChange()}function u(){n||(n=t?t.addNestedSub(o):e.subscribe(o),r=function(){const e=c();let t=null,n=null;return{clear(){t=null,n=null},notify(){e((()=>{let e=t;for(;e;)e.callback(),e=e.next}))},get(){let e=[],n=t;for(;n;)e.push(n),n=n.next;return e},subscribe(e){let r=!0,o=n={callback:e,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){r&&null!==t&&(r=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}const s={addNestedSub:function(e){return u(),r.subscribe(e)},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(n)},trySubscribe:u,tryUnsubscribe:function(){n&&(n(),n=void 0,r.clear(),r=N)},getListeners:()=>r};return s}const q="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?a.useLayoutEffect:a.useEffect;function k(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function j(e,t){if(k(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!k(e[n[r]],t[n[r]]))return!1;return!0}const D=["reactReduxForwardedRef"];let B=p;const V=[null,null];function W(e,t,n,r,o,u){e.current=r,n.current=!1,o.current&&(o.current=null,u())}function Z(e,t){return e===t}const U=function(e,t,n,{pure:r,areStatesEqual:o=Z,areOwnPropsEqual:u=j,areStatePropsEqual:s=j,areMergedPropsEqual:c=j,forwardRef:f=!1,context:p=l}={}){const d=p,S=function(e){return e?"function"==typeof e?C(e):M(e,"mapStateToProps"):x((()=>({})))}(e),v=function(e){return e&&"object"==typeof e?x((t=>function(e,t){const n={};for(const r in e){const o=e[r];"function"==typeof o&&(n[r]=(...e)=>t(o(...e)))}return n}(e,t))):e?"function"==typeof e?C(e):M(e,"mapDispatchToProps"):x((e=>({dispatch:e})))}(t),m=function(e){return e?"function"==typeof e?function(e){return function(t,{displayName:n,areMergedPropsEqual:r}){let o,u=!1;return function(t,n,s){const c=e(t,n,s);return u?r(c,o)||(o=c):(u=!0,o=c),o}}}(e):M(e,"mergeProps"):()=>R}(n),y=Boolean(e);return e=>{const t=e.displayName||e.name||"Component",n=`Connect(${t})`,r={shouldHandleStateChanges:y,displayName:n,wrappedComponentName:t,WrappedComponent:e,initMapStateToProps:S,initMapDispatchToProps:v,initMergeProps:m,areStatesEqual:o,areStatePropsEqual:s,areOwnPropsEqual:u,areMergedPropsEqual:c};function l(t){const[n,o,u]=(0,a.useMemo)((()=>{const{reactReduxForwardedRef:e}=t,n=(0,h.Z)(t,D);return[t.context,e,n]}),[t]),s=(0,a.useMemo)((()=>n&&n.Consumer&&(0,w.isContextConsumer)(i().createElement(n.Consumer,null))?n:d),[n,d]),c=(0,a.useContext)(s),l=Boolean(t.store)&&Boolean(t.store.getState)&&Boolean(t.store.dispatch),f=Boolean(c)&&Boolean(c.store),p=l?t.store:c.store,S=f?c.getServerState:p.getState,v=(0,a.useMemo)((()=>function(e,t){let{initMapStateToProps:n,initMapDispatchToProps:r,initMergeProps:o}=t,u=(0,h.Z)(t,P);return E(n(e,u),r(e,u),o(e,u),e,u)}(p.dispatch,r)),[p]),[m,g]=(0,a.useMemo)((()=>{if(!y)return V;const e=T(p,l?void 0:c.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]}),[p,l,c]),x=(0,a.useMemo)((()=>l?c:(0,b.Z)({},c,{subscription:m})),[l,c,m]),O=(0,a.useRef)(),C=(0,a.useRef)(u),M=(0,a.useRef)(),R=(0,a.useRef)(!1),N=((0,a.useRef)(!1),(0,a.useRef)(!1)),k=(0,a.useRef)();q((()=>(N.current=!0,()=>{N.current=!1})),[]);const j=(0,a.useMemo)((()=>()=>M.current&&u===C.current?M.current:v(p.getState(),u)),[p,u]),Z=(0,a.useMemo)((()=>e=>m?function(e,t,n,r,o,u,s,c,a,i,l){if(!e)return()=>{};let f=!1,p=null;const d=()=>{if(f||!c.current)return;const e=t.getState();let n,d;try{n=r(e,o.current)}catch(e){d=e,p=e}d||(p=null),n===u.current?s.current||i():(u.current=n,a.current=n,s.current=!0,l())};return n.onStateChange=d,n.trySubscribe(),d(),()=>{if(f=!0,n.tryUnsubscribe(),n.onStateChange=null,p)throw p}}(y,p,m,v,C,O,R,N,M,g,e):()=>{}),[m]);var U,$;let H;U=W,$=[C,O,R,u,M,g],q((()=>U(...$)),undefined);try{H=B(Z,j,S?()=>v(S(),u):j)}catch(e){throw k.current&&(e.message+=`\nThe error may be correlated with this previous error:\n${k.current.stack}\n\n`),e}q((()=>{k.current=void 0,M.current=void 0,O.current=H}));const F=(0,a.useMemo)((()=>i().createElement(e,(0,b.Z)({},H,{ref:o}))),[o,e,H]);return(0,a.useMemo)((()=>y?i().createElement(s.Provider,{value:x},F):F),[s,F,x])}const p=i().memo(l);if(p.WrappedComponent=e,p.displayName=l.displayName=n,f){const t=i().forwardRef((function(e,t){return i().createElement(p,(0,b.Z)({},e,{reactReduxForwardedRef:t}))}));return t.displayName=n,t.WrappedComponent=e,g()(t,e)}return g()(p,e)}},$=function({store:e,context:t,children:n,serverState:r}){const o=(0,a.useMemo)((()=>{const t=T(e);return{store:e,subscription:t,getServerState:r?()=>r:void 0}}),[e,r]),u=(0,a.useMemo)((()=>e.getState()),[e]);q((()=>{const{subscription:t}=o;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),u!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}}),[o,u]);const s=t||l;return i().createElement(s.Provider,{value:o},n)};function H(e=l){const t=e===l?f:()=>(0,a.useContext)(e);return function(){const{store:e}=t();return e}}const F=H();function L(e=l){const t=e===l?F:H(e);return function(){return t().dispatch}}const _=L();var z,I;z=o.useSyncExternalStoreWithSelector,d=z,(e=>{B=e})(r.useSyncExternalStore),I=u.unstable_batchedUpdates,s=I},53250:(e,t,n)=>{var r=n(92950),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},u=r.useState,s=r.useEffect,c=r.useLayoutEffect,a=r.useDebugValue;function i(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=u({inst:{value:n,getSnapshot:t}}),o=r[0].inst,l=r[1];return c((function(){o.value=n,o.getSnapshot=t,i(o)&&l({inst:o})}),[e,n,t]),s((function(){return i(o)&&l({inst:o}),e((function(){i(o)&&l({inst:o})}))}),[e]),a(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},50139:(e,t,n)=>{var r=n(92950),o=n(61688),u="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=o.useSyncExternalStore,c=r.useRef,a=r.useEffect,i=r.useMemo,l=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var f=c(null);if(null===f.current){var p={hasValue:!1,value:null};f.current=p}else p=f.current;f=i((function(){function e(e){if(!a){if(a=!0,s=e,e=r(e),void 0!==o&&p.hasValue){var t=p.value;if(o(t,e))return c=t}return c=e}if(t=c,u(s,e))return t;var n=r(e);return void 0!==o&&o(t,n)?t:(s=e,c=n)}var s,c,a=!1,i=void 0===n?null:n;return[function(){return e(t())},null===i?void 0:function(){return e(i())}]}),[t,n,r,o]);var d=s(e,f[0],f[1]);return a((function(){p.hasValue=!0,p.value=d}),[d]),l(d),d}},61688:(e,t,n)=>{e.exports=n(53250)},52798:(e,t,n)=>{e.exports=n(50139)}}]);