(self.webpackChunkkoku_ui=self.webpackChunkkoku_ui||[]).push([[358],{22858:e=>{e.exports=function(e){if(Array.isArray(e))return e}},13884:e=>{e.exports=function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}}},80521:e=>{e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},63038:(e,n,t)=>{var r=t(22858),o=t(13884),i=t(60379),a=t(80521);e.exports=function(e,n){return r(e)||o(e,n)||i(e,n)||a()}},67725:(e,n,t)=>{e.exports={parse:t(23039),stringify:t(51320)}},48073:(e,n,t)=>{var r=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,o=t(71739);e.exports=function(e){var n,t=0,i=!0,a={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(r,(function(r){if("="===r)return i=!0,void t++;i?0===t?((o[r]||"/"===e.charAt(e.length-2))&&(a.voidElement=!0),a.name=r):(a.attrs[n]=r.replace(/^['"]|['"]$/g,""),n=void 0):(n&&(a.attrs[n]=n),n=r),t++,i=!1})),a}},23039:(e,n,t)=>{var r=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,o=t(48073),i=Object.create?Object.create(null):{};function a(e,n,t,r,o){var i=n.indexOf("<",r),a=n.slice(r,-1===i?void 0:i);/^\s*$/.test(a)&&(a=" "),(!o&&i>-1&&t+e.length>=0||" "!==a)&&e.push({type:"text",content:a})}e.exports=function(e,n){n||(n={}),n.components||(n.components=i);var t,c=[],s=-1,u=[],l={},p=!1;return e.replace(r,(function(r,i){if(p){if(r!=="</"+t.name+">")return;p=!1}var f,d="/"!==r.charAt(1),g=0===r.indexOf("\x3c!--"),h=i+r.length,y=e.charAt(h);d&&!g&&(s++,"tag"===(t=o(r)).type&&n.components[t.name]&&(t.type="component",p=!0),t.voidElement||p||!y||"<"===y||a(t.children,e,s,h,n.ignoreWhitespace),l[t.tagName]=t,0===s&&c.push(t),(f=u[s-1])&&f.children.push(t),u[s]=t),(g||!d||t.voidElement)&&(g||s--,!p&&"<"!==y&&y&&a(f=-1===s?c:u[s].children,e,s,h,n.ignoreWhitespace))})),!c.length&&e.length&&a(c,e,0,0,n.ignoreWhitespace),c}},51320:e=>{function n(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var n=[];for(var t in e)n.push(t+'="'+e[t]+'"');return n.length?" "+n.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(n,"")+"</"+t.name+">"}}e.exports=function(e){return e.reduce((function(e,t){return e+n("",t)}),"")}},90804:(e,n,t)=>{"use strict";t.r(n),t.d(n,{I18nContext:()=>j,I18nextProvider:()=>X,Trans:()=>H,Translation:()=>Q,composeInitialProps:()=>N,getDefaults:()=>P,getI18n:()=>k,getInitialProps:()=>I,initReactI18next:()=>x,setDefaults:()=>w,setI18n:()=>S,useSSR:()=>Z,useTranslation:()=>_,withSSR:()=>ne,withTranslation:()=>J});var r=t(6479),o=t.n(r),i=t(50008),a=t.n(i),c=t(59713),s=t.n(c),u=t(97522),l=t.n(u),p=t(67725),f=t.n(p),d=t(34575),g=t.n(d),h=t(93913),y=t.n(h);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){s()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v,O={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},j=l().createContext();function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};O=b(b({},O),e)}function P(){return O}var E=function(){function e(){g()(this,e),this.usedNamespaces={}}return y()(e,[{key:"addUsedNamespaces",value:function(e){var n=this;e.forEach((function(e){n.usedNamespaces[e]||(n.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function S(e){v=e}function k(){return v}var x={type:"3rdParty",init:function(e){w(e.options.react),S(e)}};function N(e){return function(n){return new Promise((function(t){var r=I();e.getInitialProps?e.getInitialProps(n).then((function(e){t(b(b({},e),r))})):t(r)}))}}function I(){var e=k(),n=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],t={},r={};return e.languages.forEach((function(t){r[t]={},n.forEach((function(n){r[t][n]=e.getResourceBundle(t,n)||{}}))})),t.initialI18nStore=r,t.initialLanguage=e.language,t}function D(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"==typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var R={};function C(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&R[n[0]]||("string"==typeof n[0]&&(R[n[0]]=new Date),D.apply(void 0,n))}function T(e,n,t){e.loadNamespaces(n,(function(){e.isInitialized?t():e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}))}function A(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return C("i18n.languages were undefined or empty",n.languages),!0;var r=n.languages[0],o=!!n.options&&n.options.fallbackLng,i=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e)||!n.hasResourceBundle(r,e)&&n.services.backendConnector.backend&&(!a(r,e)||o&&!a(i,e)))}function L(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}function z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function B(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?z(Object(t),!0).forEach((function(n){s()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function V(e,n){if(!e)return!1;var t=e.props?e.props.children:e.children;return n?t.length>0:!!t}function K(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function U(e){return Array.isArray(e)?e:[e]}function F(e,n){if(!e)return"";var t="",r=U(e),i=n.transKeepBasicHtmlNodesFor||[];return r.forEach((function(e,r){if("string"==typeof e)t+="".concat(e);else if(l().isValidElement(e)){var c=Object.keys(e.props).length,s=i.indexOf(e.type)>-1,u=e.props.children;if(!u&&s&&0===c)t+="<".concat(e.type,"/>");else if(u||s&&0===c)if(e.props.i18nIsDynamicList)t+="<".concat(r,"></").concat(r,">");else if(s&&1===c&&"string"==typeof u)t+="<".concat(e.type,">").concat(u,"</").concat(e.type,">");else{var p=F(u,n);t+="<".concat(r,">").concat(p,"</").concat(r,">")}else t+="<".concat(r,"></").concat(r,">")}else if("object"===a()(e)){var f=e.format,d=o()(e,["format"]),g=Object.keys(d);if(1===g.length){var h=f?"".concat(g[0],", ").concat(f):g[0];t+="{{".concat(h,"}}")}else D("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else D("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),t}function H(e){var n=e.children,t=e.count,r=e.parent,i=e.i18nKey,c=e.tOptions,s=void 0===c?{}:c,p=e.values,d=e.defaults,g=e.components,h=e.ns,y=e.i18n,m=e.t,b=o()(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),v=(0,u.useContext)(j)||{},O=v.i18n,w=v.defaultNS,E=y||O||k();if(!E)return C("You will need to pass in an i18next instance by using i18nextReactModule"),n;var S=m||E.t.bind(E)||function(e){return e},x=B(B({},P()),E.options&&E.options.react),N=h||S.ns||w||E.options&&E.options.defaultNS;N="string"==typeof N?[N]:N||["translation"];var I=d||F(n,x)||x.transEmptyNodeValue||i,D=x.hashTransKey,R=i||(D?D(I):I),T=p?s.interpolation:{interpolation:B(B({},s.interpolation),{},{prefix:"#$?",suffix:"?$#"})},A=B(B(B(B({},s),{},{count:t},p),T),{},{defaultValue:I,ns:N}),L=function(e,n,t,r,o){if(""===n)return[];var i=r.transKeepBasicHtmlNodesFor||[],c=n&&new RegExp(i.join("|")).test(n);if(!e&&!c)return[n];var s={};!function e(n){U(n).forEach((function(n){"string"!=typeof n&&(V(n)?e(K(n)):"object"!==a()(n)||l().isValidElement(n)||Object.assign(s,n))}))}(e);var u=t.services.interpolator.interpolate(n,B(B({},s),o),t.language),p=f().parse("<0>".concat(u,"</0>"));function d(e,n,t){var r=K(e),o=h(r,n.children,t);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return l().isValidElement(e)}))}(r)&&0===o.length?r:o}function g(e,n,t,r,o){e.dummy&&(e.children=n),t.push(l().cloneElement(e,B(B({},e.props),{},{key:r}),o?void 0:n))}function h(n,t,o){var s=U(n);return U(t).reduce((function(n,t,u){var p,f,y,m=t.children&&t.children[0]&&t.children[0].content;if("tag"===t.type){var b=s[parseInt(t.name,10)];!b&&1===o.length&&o[0][t.name]&&(b=o[0][t.name]),b||(b={});var v=0!==Object.keys(t.attrs).length?(p={props:t.attrs},(y=B({},f=b)).props=Object.assign(p.props,f.props),y):b,O=l().isValidElement(v),j=O&&V(t,!0)&&!t.voidElement,w=c&&"object"===a()(v)&&v.dummy&&!O,P="object"===a()(e)&&null!==e&&Object.hasOwnProperty.call(e,t.name);if("string"==typeof v)n.push(v);else if(V(v)||j)g(v,d(v,t,o),n,u);else if(w){var E=h(s,t.children,o);n.push(l().cloneElement(v,B(B({},v.props),{},{key:u}),E))}else if(Number.isNaN(parseFloat(t.name)))if(P)g(v,d(v,t,o),n,u,t.voidElement);else if(r.transSupportBasicHtmlNodes&&i.indexOf(t.name)>-1)if(t.voidElement)n.push(l().createElement(t.name,{key:"".concat(t.name,"-").concat(u)}));else{var S=h(s,t.children,o);n.push(l().createElement(t.name,{key:"".concat(t.name,"-").concat(u)},S))}else if(t.voidElement)n.push("<".concat(t.name," />"));else{var k=h(s,t.children,o);n.push("<".concat(t.name,">").concat(k,"</").concat(t.name,">"))}else if("object"!==a()(v)||O)1===t.children.length&&m?n.push(l().cloneElement(v,B(B({},v.props),{},{key:u}),m)):n.push(l().cloneElement(v,B(B({},v.props),{},{key:u})));else{var x=t.children[0]?m:null;x&&n.push(x)}}else"text"===t.type&&n.push(t.content);return n}),[])}return K(h([{dummy:!0,children:e}],p,U(e||[]))[0])}(g||n,R?S(R,A):I,E,x,A),z=void 0!==r?r:x.defaultTransParent;return z?l().createElement(z,b,L):L}var W=t(63038),$=t.n(W);function M(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?M(Object(t),!0).forEach((function(n){s()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function _(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,u.useContext)(j)||{},o=r.i18n,i=r.defaultNS,a=t||o||k();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new E),!a){C("You will need to pass in an i18next instance by using initReactI18next");var c=function(e){return Array.isArray(e)?e[e.length-1]:e},s=[c,{},!1];return s.t=c,s.i18n={},s.ready=!1,s}a.options.react&&void 0!==a.options.react.wait&&C("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var l=Y(Y(Y({},P()),a.options.react),n),p=l.useSuspense,f=e||i||a.options&&a.options.defaultNS;f="string"==typeof f?[f]:f||["translation"],a.reportNamespaces.addUsedNamespaces&&a.reportNamespaces.addUsedNamespaces(f);var d=(a.isInitialized||a.initializedStoreOnce)&&f.every((function(e){return A(e,a,l)}));function g(){return{t:a.getFixedT(null,"fallback"===l.nsMode?f:f[0])}}var h=(0,u.useState)(g()),y=$()(h,2),m=y[0],b=y[1],v=(0,u.useRef)(!0);(0,u.useEffect)((function(){var e=l.bindI18n,n=l.bindI18nStore;function t(){v.current&&b(g())}return v.current=!0,d||p||T(a,f,(function(){v.current&&b(g())})),e&&a&&a.on(e,t),n&&a&&a.store.on(n,t),function(){v.current=!1,e&&a&&e.split(" ").forEach((function(e){return a.off(e,t)})),n&&a&&n.split(" ").forEach((function(e){return a.store.off(e,t)}))}}),[f.join()]);var O=[m.t,a,d];if(O.t=m.t,O.i18n=a,O.ready=d,d)return O;if(!d&&!p)return O;throw new Promise((function(e){T(a,f,(function(){e()}))}))}function q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function G(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?q(Object(t),!0).forEach((function(n){s()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function J(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t){function r(r){var i=r.forwardedRef,a=o()(r,["forwardedRef"]),c=_(e,a),s=$()(c,3),u=s[0],p=s[1],f=s[2],d=G(G({},a),{},{t:u,i18n:p,tReady:f});return n.withRef&&i?d.ref=i:!n.withRef&&i&&(d.forwardedRef=i),l().createElement(t,d)}return r.displayName="withI18nextTranslation(".concat(L(t),")"),r.WrappedComponent=t,n.withRef?l().forwardRef((function(e,n){return l().createElement(r,Object.assign({},e,{forwardedRef:n}))})):r}}function Q(e){var n=e.ns,t=e.children,r=_(n,o()(e,["ns","children"])),i=$()(r,3),a=i[0],c=i[1],s=i[2];return t(a,{i18n:c,lng:c.language},s)}function X(e){var n=e.i18n,t=e.defaultNS,r=e.children,o=(0,u.useMemo)((function(){return{i18n:n,defaultNS:t}}),[n,t]);return(0,u.createElement)(j.Provider,{value:o},r)}function Z(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.i18n,o=(0,u.useContext)(j)||{},i=o.i18n,a=r||i||k();a.options&&a.options.isClone||(e&&!a.initializedStoreOnce&&(a.services.resourceStore.data=e,a.options.ns=Object.values(e).reduce((function(e,n){return Object.keys(n).forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e}),a.options.ns),a.initializedStoreOnce=!0,a.isInitialized=!0),n&&!a.initializedLanguageOnce&&(a.changeLanguage(n),a.initializedLanguageOnce=!0))}function ee(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ne(){return function(e){function n(n){var t=n.initialI18nStore,r=n.initialLanguage,i=o()(n,["initialI18nStore","initialLanguage"]);return Z(t,r),l().createElement(e,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ee(Object(t),!0).forEach((function(n){s()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ee(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},i))}return n.getInitialProps=N(e),n.displayName="withI18nextSSR(".concat(L(e),")"),n.WrappedComponent=e,n}}},71739:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}}}]);
//# sourceMappingURL=5b9e655a7ab4b287ba40.bundle.js.map