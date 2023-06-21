/*! For license information please see 9416.8a5706cfdfc3759d4e3a.js.LICENSE.txt */
"use strict";(self.webpackChunkcostManagement=self.webpackChunkcostManagement||[]).push([[9416],{86706:(e,t,n)=>{n.r(t),n.d(t,{Provider:()=>H,ReactReduxContext:()=>f,batch:()=>u.unstable_batchedUpdates,connect:()=>$,createDispatchHook:()=>z,createSelectorHook:()=>m,createStoreHook:()=>L,shallowEqual:()=>B,useDispatch:()=>I,useSelector:()=>y,useStore:()=>_});var r=n(61688),o=n(52798),u=n(12181);let c=function(e){e()};const s=()=>c;var a=n(92950),i=n.n(a);let l=null;const f=new Proxy({},new Proxy({},{get(e,t){const n=(l||(l=(0,a.createContext)(null)),l);return(e,...r)=>Reflect[t](n,...r)}}));function p(e=f){return function(){return(0,a.useContext)(e)}}const d=p(),S=()=>{throw new Error("uSES not initialized!")};let b=S;const h=(e,t)=>e===t;function m(e=f){const t=e===f?d:p(e);return function(e,n={}){const{equalityFn:r=h,stabilityCheck:o,noopCheck:u}="function"==typeof n?{equalityFn:n}:n,{store:c,subscription:s,getServerState:i,stabilityCheck:l,noopCheck:f}=t(),p=((0,a.useRef)(!0),(0,a.useCallback)({[e.name]:t=>e(t)}[e.name],[e,l,o])),d=b(s.addNestedSub,c.getState,i||c.getState,p,r);return(0,a.useDebugValue)(d),d}}const y=m();var v=n(87462),w=n(63366),g=n(8679),P=n.n(g),E=n(59864);const C=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function x(e,t,n,r,{areStatesEqual:o,areOwnPropsEqual:u,areStatePropsEqual:c}){let s,a,i,l,f,p=!1;return function(d,S){return p?function(p,d){const S=!u(d,a),b=!o(p,s,d,a);return s=p,a=d,S&&b?(i=e(s,a),t.dependsOnOwnProps&&(l=t(r,a)),f=n(i,l,a),f):S?(e.dependsOnOwnProps&&(i=e(s,a)),t.dependsOnOwnProps&&(l=t(r,a)),f=n(i,l,a),f):b?function(){const t=e(s,a),r=!c(t,i);return i=t,r&&(f=n(i,l,a)),f}():f}(d,S):(s=d,a=S,i=e(s,a),l=t(r,a),f=n(i,l,a),p=!0,f)}}function O(e){return function(t){const n=e(t);function r(){return n}return r.dependsOnOwnProps=!1,r}}function M(e){return e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function k(e,t){return function(t,{displayName:n}){const r=function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e,void 0)};return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=M(e);let o=r(t,n);return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=M(o),o=r(t,n)),o},r}}function R(e,t){return(n,r)=>{throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`)}}function N(e,t,n){return(0,v.Z)({},n,e,t)}const q={notify(){},get:()=>[]};function T(e,t){let n,r=q;function o(){c.onStateChange&&c.onStateChange()}function u(){n||(n=t?t.addNestedSub(o):e.subscribe(o),r=function(){const e=s();let t=null,n=null;return{clear(){t=null,n=null},notify(){e((()=>{let e=t;for(;e;)e.callback(),e=e.next}))},get(){let e=[],n=t;for(;n;)e.push(n),n=n.next;return e},subscribe(e){let r=!0,o=n={callback:e,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){r&&null!==t&&(r=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}const c={addNestedSub:function(e){return u(),r.subscribe(e)},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(n)},trySubscribe:u,tryUnsubscribe:function(){n&&(n(),n=void 0,r.clear(),r=q)},getListeners:()=>r};return c}const j="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?a.useLayoutEffect:a.useEffect;function D(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function B(e,t){if(D(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!D(e[n[r]],t[n[r]]))return!1;return!0}const V=["reactReduxForwardedRef"];let W=S;const Z=[null,null];function F(e,t,n,r,o,u){e.current=r,n.current=!1,o.current&&(o.current=null,u())}function U(e,t){return e===t}const $=function(e,t,n,{pure:r,areStatesEqual:o=U,areOwnPropsEqual:u=B,areStatePropsEqual:c=B,areMergedPropsEqual:s=B,forwardRef:l=!1,context:p=f}={}){const d=p,S=function(e){return e?"function"==typeof e?k(e):R(e,"mapStateToProps"):O((()=>({})))}(e),b=function(e){return e&&"object"==typeof e?O((t=>function(e,t){const n={};for(const r in e){const o=e[r];"function"==typeof o&&(n[r]=(...e)=>t(o(...e)))}return n}(e,t))):e?"function"==typeof e?k(e):R(e,"mapDispatchToProps"):O((e=>({dispatch:e})))}(t),h=function(e){return e?"function"==typeof e?function(e){return function(t,{displayName:n,areMergedPropsEqual:r}){let o,u=!1;return function(t,n,c){const s=e(t,n,c);return u?r(s,o)||(o=s):(u=!0,o=s),o}}}(e):R(e,"mergeProps"):()=>N}(n),m=Boolean(e);return e=>{const t=e.displayName||e.name||"Component",n=`Connect(${t})`,r={shouldHandleStateChanges:m,displayName:n,wrappedComponentName:t,WrappedComponent:e,initMapStateToProps:S,initMapDispatchToProps:b,initMergeProps:h,areStatesEqual:o,areStatePropsEqual:c,areOwnPropsEqual:u,areMergedPropsEqual:s};function f(t){const[n,o,u]=(0,a.useMemo)((()=>{const{reactReduxForwardedRef:e}=t,n=(0,w.Z)(t,V);return[t.context,e,n]}),[t]),c=(0,a.useMemo)((()=>n&&n.Consumer&&(0,E.isContextConsumer)(i().createElement(n.Consumer,null))?n:d),[n,d]),s=(0,a.useContext)(c),l=Boolean(t.store)&&Boolean(t.store.getState)&&Boolean(t.store.dispatch),f=Boolean(s)&&Boolean(s.store),p=l?t.store:s.store,S=f?s.getServerState:p.getState,b=(0,a.useMemo)((()=>function(e,t){let{initMapStateToProps:n,initMapDispatchToProps:r,initMergeProps:o}=t,u=(0,w.Z)(t,C);return x(n(e,u),r(e,u),o(e,u),e,u)}(p.dispatch,r)),[p]),[h,y]=(0,a.useMemo)((()=>{if(!m)return Z;const e=T(p,l?void 0:s.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]}),[p,l,s]),g=(0,a.useMemo)((()=>l?s:(0,v.Z)({},s,{subscription:h})),[l,s,h]),P=(0,a.useRef)(),O=(0,a.useRef)(u),M=(0,a.useRef)(),k=(0,a.useRef)(!1),R=((0,a.useRef)(!1),(0,a.useRef)(!1)),N=(0,a.useRef)();j((()=>(R.current=!0,()=>{R.current=!1})),[]);const q=(0,a.useMemo)((()=>()=>M.current&&u===O.current?M.current:b(p.getState(),u)),[p,u]),D=(0,a.useMemo)((()=>e=>h?function(e,t,n,r,o,u,c,s,a,i,l){if(!e)return()=>{};let f=!1,p=null;const d=()=>{if(f||!s.current)return;const e=t.getState();let n,d;try{n=r(e,o.current)}catch(e){d=e,p=e}d||(p=null),n===u.current?c.current||i():(u.current=n,a.current=n,c.current=!0,l())};return n.onStateChange=d,n.trySubscribe(),d(),()=>{if(f=!0,n.tryUnsubscribe(),n.onStateChange=null,p)throw p}}(m,p,h,b,O,P,k,R,M,y,e):()=>{}),[h]);var B,U;let $;B=F,U=[O,P,k,u,M,y],j((()=>B(...U)),undefined);try{$=W(D,q,S?()=>b(S(),u):q)}catch(e){throw N.current&&(e.message+=`\nThe error may be correlated with this previous error:\n${N.current.stack}\n\n`),e}j((()=>{N.current=void 0,M.current=void 0,P.current=$}));const H=(0,a.useMemo)((()=>i().createElement(e,(0,v.Z)({},$,{ref:o}))),[o,e,$]);return(0,a.useMemo)((()=>m?i().createElement(c.Provider,{value:g},H):H),[c,H,g])}const p=i().memo(f);if(p.WrappedComponent=e,p.displayName=f.displayName=n,l){const t=i().forwardRef((function(e,t){return i().createElement(p,(0,v.Z)({},e,{reactReduxForwardedRef:t}))}));return t.displayName=n,t.WrappedComponent=e,P()(t,e)}return P()(p,e)}},H=function({store:e,context:t,children:n,serverState:r,stabilityCheck:o="once",noopCheck:u="once"}){const c=(0,a.useMemo)((()=>{const t=T(e);return{store:e,subscription:t,getServerState:r?()=>r:void 0,stabilityCheck:o,noopCheck:u}}),[e,r,o,u]),s=(0,a.useMemo)((()=>e.getState()),[e]);j((()=>{const{subscription:t}=c;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),s!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}}),[c,s]);const l=t||f;return i().createElement(l.Provider,{value:c},n)};function L(e=f){const t=e===f?d:p(e);return function(){const{store:e}=t();return e}}const _=L();function z(e=f){const t=e===f?_:L(e);return function(){return t().dispatch}}const I=z();var A,G;A=o.useSyncExternalStoreWithSelector,b=A,(e=>{W=e})(r.useSyncExternalStore),G=u.unstable_batchedUpdates,c=G},53250:(e,t,n)=>{var r=n(92950),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},u=r.useState,c=r.useEffect,s=r.useLayoutEffect,a=r.useDebugValue;function i(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=u({inst:{value:n,getSnapshot:t}}),o=r[0].inst,l=r[1];return s((function(){o.value=n,o.getSnapshot=t,i(o)&&l({inst:o})}),[e,n,t]),c((function(){return i(o)&&l({inst:o}),e((function(){i(o)&&l({inst:o})}))}),[e]),a(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},50139:(e,t,n)=>{var r=n(92950),o=n(61688),u="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},c=o.useSyncExternalStore,s=r.useRef,a=r.useEffect,i=r.useMemo,l=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var f=s(null);if(null===f.current){var p={hasValue:!1,value:null};f.current=p}else p=f.current;f=i((function(){function e(e){if(!a){if(a=!0,c=e,e=r(e),void 0!==o&&p.hasValue){var t=p.value;if(o(t,e))return s=t}return s=e}if(t=s,u(c,e))return t;var n=r(e);return void 0!==o&&o(t,n)?t:(c=e,s=n)}var c,s,a=!1,i=void 0===n?null:n;return[function(){return e(t())},null===i?void 0:function(){return e(i())}]}),[t,n,r,o]);var d=c(e,f[0],f[1]);return a((function(){p.hasValue=!0,p.value=d}),[d]),l(d),d}},61688:(e,t,n)=>{e.exports=n(53250)},52798:(e,t,n)=>{e.exports=n(50139)}}]);
//# sourceMappingURL=../sourcemaps/9416.891334124c2b53df7cf478210c85f9ff.js.map