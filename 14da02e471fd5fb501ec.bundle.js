(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{672:function(e,t){e.exports=function(e,t,n){var a=new Blob([e],{type:n||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(a,t);else{var r=window.URL.createObjectURL(a),o=document.createElement("a");o.style.display="none",o.href=r,o.setAttribute("download",t),void 0===o.download&&o.setAttribute("target","_blank"),document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(r)}}},948:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1),i=n.n(o),c=n(119),l=n(11),u=n(1009),s=n(732),f=n(124),p=n(950),b=n(952),y=n(960),d=n(962),h=n(748),m=n(984),g=n(625),v=n.n(g),x=n(675),w=n.n(x),O=n(591),P=n.n(O),M=n(693),j=n(842);function R(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var _=function(e,t){var n=t.size,a=t.z;return e.size?"function"==typeof e.size?e.size:Math.max(e.size,1):"function"==typeof t.size?n:e[a]?function(e,t){var n=t.data,a=t.z,r=t.maxBubbleSize,o=t.minBubbleSize,i=n.map(function(e){return e[a]}),c=Math.min.apply(Math,R(i)),u=Math.max.apply(Math,R(i)),s=r||function(){var e=Math.min.apply(Math,R(w()(l.a.getPadding(t))));return Math.max(e,5)}(),f=o||.1*s;if(u===c)return Math.max(f,1);var p=Math.PI*Math.pow(s,2),b=Math.PI*Math.pow(f,2),y=(e[a]-c)/(u-c)*p,d=Math.max(y,b),h=Math.sqrt(d/Math.PI);return Math.max(h,1)}(e,t):Math.max(n||0,1)},L=function(e,t){var n=l.a.modifyProps(e,t,"scatter"),a=e=P()({},n,function(e){var t=e.theme&&e.theme.scatter&&e.theme.scatter.style?e.theme.scatter.style:{},n=l.a.getStyles(e.style,t),a=s.a.getData(e),r={x:l.a.getRange(e,"x"),y:l.a.getRange(e,"y")},o={x:h.a.getDomain(e,"x"),y:h.a.getDomain(e,"y")};return{domain:o,data:a,scale:{x:M.a.getBaseScale(e,"x").domain(o.x).range(e.horizontal?r.y:r.x),y:M.a.getBaseScale(e,"y").domain(o.y).range(e.horizontal?r.x:r.y)},style:n,origin:e.polar?e.origin||l.a.getPolarOrigin(e):void 0,z:e.bubbleProperty||"z"}}(n)),r=a.data,o=a.domain,i=a.events,c=a.height,u=a.origin,f=a.padding,p=a.polar,b=a.scale,y=a.name,d=a.sharedEvents,m=a.standalone,g=a.style,x=a.theme,w=a.width,O=a.labels,R=a.horizontal,L={parent:{style:g.parent,scale:b,domain:o,data:r,height:c,width:w,standalone:m,theme:x,origin:u,polar:p,padding:f,name:y,horizontal:R}};return r.reduce(function(t,n,a){var o=v()(n.eventKey)?a:n.eventKey,c=l.a.scalePoint(e,n),s={x:c.x,y:c.y,datum:n,data:r,index:a,scale:b,polar:p,origin:u,horizontal:R,size:_(n,e),symbol:function(e,t){return t.bubbleProperty?"circle":e.symbol||t.symbol}(n,e),style:g.data};t[o]={data:s};var f=j.a.getText(e,n,a);return(void 0!==f&&null!==f||O&&(i||d))&&(t[o].labels=j.a.getProps(e,a)),t},L)};function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function T(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var E={width:450,height:300,padding:50,size:3,symbol:"circle"},S=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),T(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.Component),function(e,t,n){t&&z(e.prototype,t),n&&z(e,n)}(t,[{key:"shouldAnimate",value:function(){return!!this.props.animate}},{key:"render",value:function(){var e=t.animationWhitelist,n=t.role,a=l.a.modifyProps(this.props,E,n);if(this.shouldAnimate())return this.animateComponent(a,e);var r=this.renderData(a);return a.standalone?this.renderContainer(a.containerComponent,r):r}}]),t}();Object.defineProperty(S,"animationWhitelist",{configurable:!0,enumerable:!0,writable:!0,value:["data","domain","height","maxBubbleSize","padding","samples","size","style","width"]}),Object.defineProperty(S,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"VictoryScatter"}),Object.defineProperty(S,"role",{configurable:!0,enumerable:!0,writable:!0,value:"scatter"}),Object.defineProperty(S,"defaultTransitions",{configurable:!0,enumerable:!0,writable:!0,value:u.a.discreteTransitions()}),Object.defineProperty(S,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){C(e,t,n[t])})}return e}({},f.a.baseProps,f.a.dataProps,{bubbleProperty:r.a.string,maxBubbleSize:c.a.nonNegative,minBubbleSize:c.a.nonNegative,size:r.a.oneOfType([c.a.nonNegative,r.a.func]),symbol:r.a.oneOfType([r.a.oneOf(["circle","diamond","plus","minus","square","star","triangleDown","triangleUp"]),r.a.func])})}),Object.defineProperty(S,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{containerComponent:i.a.createElement(p.a,null),dataComponent:i.a.createElement(b.a,null),labelComponent:i.a.createElement(y.a,null),groupComponent:i.a.createElement("g",null),samples:50,sortOrder:"ascending",standalone:!0,theme:d.a.grayscale}}),Object.defineProperty(S,"getDomain",{configurable:!0,enumerable:!0,writable:!0,value:h.a.getDomain}),Object.defineProperty(S,"getData",{configurable:!0,enumerable:!0,writable:!0,value:s.a.getData}),Object.defineProperty(S,"getBaseProps",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return L(e,E)}}),Object.defineProperty(S,"expectedComponents",{configurable:!0,enumerable:!0,writable:!0,value:["dataComponent","labelComponent","groupComponent","containerComponent"]});t.a=Object(m.a)(S)},971:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1),i=n.n(o),c=n(625),l=n.n(c),u=n(591),s=n.n(u),f=n(20),p=n(11),b=n(842),y=n(732),d=n(748),h=n(693),m=function(e,t){var n=p.a.modifyProps(e,t,"bar"),a=e=s()({},n,function(e){var t=e.theme,n=e.polar,a=t&&t.bar&&t.bar.style?t.bar.style:{},r=p.a.getStyles(e.style,a),o=y.a.getData(e),i={x:p.a.getRange(e,"x"),y:p.a.getRange(e,"y")},c={x:d.a.getDomainWithZero(e,"x"),y:d.a.getDomainWithZero(e,"y")};return{style:r,data:o,scale:{x:h.a.getBaseScale(e,"x").domain(c.x).range(e.horizontal?i.y:i.x),y:h.a.getBaseScale(e,"y").domain(c.y).range(e.horizontal?i.x:i.y)},domain:c,origin:n?e.origin||p.a.getPolarOrigin(e):void 0}}(n)),r=a.alignment,o=a.barRatio,i=a.cornerRadius,c=a.data,u=a.domain,m=a.events,g=a.height,v=a.horizontal,x=a.origin,w=a.padding,O=a.polar,P=a.scale,M=a.sharedEvents,j=a.standalone,R=a.style,_=a.theme,L=a.width,C=a.labels,z=a.name,T=a.barWidth,E=a.getPath,S={parent:{horizontal:v,domain:u,scale:P,width:L,height:g,data:c,standalone:j,name:z,theme:_,polar:O,origin:x,padding:w,style:R.parent}};return c.reduce(function(t,n,a){var u=l()(n.eventKey)?a:n.eventKey,y=function(e,t){var n=function(n){var a="log"===h.a.getType(e.scale[n])?1/Number.MAX_SAFE_INTEGER:0,r=f.a.getMinValue(e.domain[n]),o=f.a.getMaxValue(e.domain[n]);return r<0&&o<=0?a=o:r>=0&&o>0&&(a=r),t["_".concat(n)]instanceof Date?new Date(a):a},a=void 0!==t._y0?t._y0:n("y"),r=void 0!==t._x0?t._x0:n("x");return p.a.scalePoint(e,s()({},t,{_y0:a,_x0:r}))}(e,n),d=y.x,w=y.y,j=y.y0,_=y.x0,z={alignment:r,barRatio:o,cornerRadius:i,data:c,datum:n,horizontal:v,index:a,polar:O,origin:x,scale:P,style:R.data,width:L,height:g,x:d,y:w,y0:j,x0:_,barWidth:T,getPath:E};t[u]={data:z};var S=b.a.getText(e,n,a);return(void 0!==S&&null!==S||C&&(m||M))&&(t[u].labels=b.a.getProps(e,a)),t},S)},g=n(599),v=n.n(g),x=n(619),w=n.n(x),O=n(124),P=n(756),M=(n(629),n(745)),j=function(e,t){return{x:e,y:t,distance:function(e){return Math.sqrt(Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2))},add:function(e){return j(this.x+e.x,this.y+e.y)},subtract:function(e){return j(this.x-e.x,this.y-e.y)},scalarMult:function(e){return j(this.x*e,this.y*e)},scalarDivide:function(e){if(0===e)throw new Error("Division by 0 error");return j(this.x/e,this.y/e)},equals:function(e){return this.x===e.x&&this.y===e.y}}},R=function(e,t){return{center:e,radius:t,hasIntersection:function(e){var t=this.center,n=e.center,a=this.radius,r=e.radius,o=t.distance(n);return!(o>a+r)&&!(o<Math.abs(a-r))},equals:function(e){var t=this.center,n=e.center;return this.radius===e.radius&&t.equals(n)},intersection:function(e){var t=this.center,n=e.center,a=this.radius,r=e.radius,o=t.distance(n);if(!this.hasIntersection(e)||this.equals(e))return[];var i=(Math.pow(a,2)-Math.pow(r,2)+Math.pow(o,2))/(2*o),c=Math.sqrt(Math.pow(a,2)-Math.pow(i,2)),l=t.add(n.subtract(t).scalarMult(i).scalarDivide(o)),u=t.x,s=t.y,f=n.x,p=n.y,b=l.x,y=l.y,d=[j(b-c*(p-s)/o,y+c*(f-u)/o),j(b+c*(p-s)/o,y-c*(f-u)/o)];return d.sort(function(e,t){return e.x-t.x}),d},solveX:function(e){var t=Math.sqrt(Math.pow(this.radius,2)-Math.pow(e-this.center.y,2));return[this.center.x-t,this.center.x+t]},solveY:function(e){var t=Math.sqrt(Math.pow(this.radius,2)-Math.pow(e-this.center.x,2));return[this.center.y-t,this.center.y+t]}}};function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var C=function(e,t){var n=e.x,a=e.x0,r=e.y,o=e.y0,i=e.horizontal,c=e.alignment||"middle",l="middle"===c?t/2:t,u=i?-1:1;return i?{x0:a,x1:n,y0:"start"===c?r:r-u*l,y1:"end"===c?r:r+u*l}:{x0:"start"===c?n:n-u*l,x1:"end"===c?n:n+u*l,y0:o,y1:r}},z=function(e,t){var n=e.data,a=e.scale,r=void 0===n[t]._x1?"_x":"_x1";return a.x(n[t][r])},T=function(e){return-1*e+Math.PI/2},E=function(e,t){return(0,e.getPath)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){_(e,t,n[t])})}return e}({},e,C(e,t)))},S=function(e,t,n){var a="".concat(t.topLeft," ").concat(t.topLeft," ").concat(n),r="".concat(t.topRight," ").concat(t.topRight," ").concat(n),o="".concat(t.bottomLeft," ").concat(t.bottomLeft," ").concat(n),i="".concat(t.bottomRight," ").concat(t.bottomRight," ").concat(n),c=["M","A ".concat(o,","),"L","A ".concat(a,","),"L","A ".concat(r,","),"L","A ".concat(i,",")].reduce(function(t,n,a){return t+="".concat(n," ").concat(e[a].x,", ").concat(e[a].y," \n")},"");return"".concat(c," z")},A=function(e,t,n){var a=C(e,t),r=a.y0>a.y1?1:-1,o=r>0?"0 0 1":"0 0 0",i=function(e,t,n){var a=e.x0,r=e.x1,o=e.y0,i=e.y1,c=function(e){var c="Left"===e,l=c?1:-1,u=c?a:r,s={x:u+l*n["bottom".concat(e)],y:o},f={x:u,y:o-t*n["bottom".concat(e)]},p={x:u,y:i+t*n["top".concat(e)]},b={x:u+l*n["top".concat(e)],y:i};if(1===t?o-n["bottom".concat(e)]<i+n["top".concat(e)]:o+n["bottom".concat(e)]>i-n["top".concat(e)]){var y=j(u+l*n["top".concat(e)],i+t*n["top".concat(e)]),d=R(y,n["top".concat(e)]),h=j(u+l*n["bottom".concat(e)],o-t*n["bottom".concat(e)]),m=R(h,n["bottom".concat(e)]),g=d.intersection(m);if(g.length>0){var v=g[c?0:1];f={x:v.x,y:v.y},p={x:v.x,y:v.y}}else if(n["top".concat(e)]>n["bottom".concat(e)]){var x=d.solveX(o)[c?0:1];s={x:x,y:o},f={x:x,y:o},p={x:x,y:o}}else{var w=m.solveX(i)[c?0:1];f={x:w,y:i},p={x:w,y:i},b={x:w,y:i}}}var O=[s,f,p,b];return c?O:O.reverse()};return c("Left").concat(c("Right"))}(a,r,n);return S(i,n,o)},D=function(e,t,n){var a=C(e,t),r=a.x0<a.x1?1:-1,o={topRight:r>0?n.topLeft:n.bottomLeft,bottomRight:r>0?n.topRight:n.bottomRight,bottomLeft:r>0?n.bottomRight:n.topRight,topLeft:r>0?n.bottomLeft:n.topLeft},i=function(e,t,n){var a=e.y0,r=e.y1,o=e.x0<e.x1?e.x0:e.x1,i=e.x0<e.x1?e.x1:e.x0,c=function(e){var c="top"===e,l=c?-1:1,u=c?r:a,s={x:o,y:u-l*n["".concat(e,"Left")]},f={x:o+n["".concat(e,"Left")],y:u},p={x:i-n["".concat(e,"Right")],y:u},b={x:i,y:u-l*n["".concat(e,"Right")]};if(f.x>p.x){var y=j(o+n["".concat(e,"Left")],u-l*n["".concat(e,"Left")]),d=R(y,n["".concat(e,"Left")]),h=j(i-n["".concat(e,"Right")],u-l*n["".concat(e,"Right")]),m=R(h,n["".concat(e,"Right")]),g=d.intersection(m);if(g.length>0){var v=g[t>0?1:0];f={x:v.x,y:v.y},p={x:v.x,y:v.y}}else if(n["".concat(e,"Right")]>n["".concat(e,"Left")]){var x=m.solveY(o)[c?0:1];s={x:o,y:x},f={x:o,y:x},p={x:o,y:x}}else{var w=d.solveY(i)[c?0:1];b={x:i,y:w},p={x:i,y:w},f={x:i,y:w}}}return[s,f,p,b]},l=c("top"),u=c("bottom");return[u[1],u[0]].concat(L(l),[u[3],u[2]])}(a,r,o);return S(i,o,"0 0 1")},k=function(e,t){var n,a,r=e.datum,o=e.scale,i=e.index,c=e.alignment,l=e.style,u=o.y(r._y0||0),s=o.y(void 0!==r._y1?r._y1:r._y),f=o.x(void 0!==r._x1?r._x1:r._x);if(l.width){var p=function(e,t){var n=e.scale,a=n.y.range(),r=Math.max.apply(Math,L(a)),o=Math.abs(n.x.range()[1]-n.x.range()[0]);return t/(2*Math.PI*r)*o}(e,l.width),b="middle"===c?p/2:p;n="start"===c?f:f-b,a="end"===c?f:f+b}else n=function(e,t){var n=e.data,a=e.scale,r=e.alignment,o=z(e,t),i=Math.abs(a.x.range()[1]-a.x.range()[0]),c=0===t?z(e,n.length-1)-2*Math.PI:z(e,t-1);return 0===t&&i<2*Math.PI?a.x.range()[0]:"start"===r||"end"===r?"start"===r?c:o:(o+c)/2}(e,i),a=function(e,t){var n=e.data,a=e.scale,r=e.alignment,o=z(e,t),i=Math.abs(a.x.range()[1]-a.x.range()[0]),c=a.x.range()[1]===2*Math.PI?z(e,0)+2*Math.PI:a.x.range()[1],l=t===n.length-1?z(e,0)+2*Math.PI:z(e,t+1);return t===n.length-1&&i<2*Math.PI?c:"start"===r||"end"===r?"start"===r?o:l:(o+l)/2}(e,i);var y=function(e){return M.a().innerRadius(u).outerRadius(s).startAngle(T(n)).endAngle(T(a)).cornerRadius(t[e])()},d=function(e){var t=y("".concat(e,"Right")),n=t.match(/[A-Z]/g),a=t.split(/[A-Z]/).slice(1),r=n.indexOf("L"),o=y("".concat(e,"Left")),i=o.match(/[A-Z]/g);return{rightMoves:n,rightCoords:a,rightMiddle:r,leftMoves:i,leftCoords:o.split(/[A-Z]/).slice(1),leftMiddle:i.indexOf("L")}},h=function(){var e,r,o=t.topRight,i=t.topLeft,c=s*Math.abs(a-n),l=d("top"),u=l.rightMoves,f=l.rightCoords,p=l.rightMiddle,b=l.leftMoves,y=l.leftCoords,h=l.leftMiddle;if(o===i||c<2*o+2*i)e=o>i?u:b,r=o>i?f:y;else{var m,g=function(e){return e<3},v=i>o&&g(p)?1:2;if(o>i){var x=g(p)?h:h-2;m=g(h)?h-1:x}else{var w=g(h)?1:2;m=g(p)?w:h-2}e=L(u.slice(0,v)).concat(L(b.slice(m))),r=L(f.slice(0,v)).concat(L(y.slice(m)))}var O=e.indexOf("L"),P=e.slice(0,O),M=r.slice(0,O);return P.map(function(e,t){return{command:e,coords:M[t].split(",")}})}(),m=function(){var e,r,o=t.bottomRight,i=t.bottomLeft,c=u*Math.abs(a-n),l=d("bottom"),s=l.rightMoves,f=l.rightCoords,p=l.rightMiddle,b=l.leftMoves,y=l.leftCoords,h=l.leftMiddle;if(o===i||c<2*o+2*i)e=o>i?s:b,r=o>i?f:y;else{var m=function(e,t){return e.length-t<4},g=(o>i?m(s,p):m(b,h))?-1:-3;e=L(b.slice(0,h+2)).concat(L(s.slice(g))),r=L(y.slice(0,h+2)).concat(L(f.slice(g)))}var v=e.indexOf("L"),x=e.slice(v,-1),w=r.slice(v,-1);return x.map(function(e,t){return{command:e,coords:w[t].split(",")}})}(),g=L(h).concat(L(m)).reduce(function(e,t){return e+="".concat(t.command," ").concat(t.coords.join())},"");return"".concat(g," z")};function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){B(e,t,n[t])})}return e}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var W=function(e,t){var n={topLeft:0,topRight:0,bottomLeft:0,bottomRight:0};return e?w()(e)?function(e,t){var n={topLeft:0,topRight:0,bottomLeft:0,bottomRight:0},a=function(a,r){l()(e[a])?l()(e[r])||(n[a]=p.a.evaluateProp(e[r],t)):n[a]=p.a.evaluateProp(e[a],t)};return a("topLeft","top"),a("topRight","top"),a("bottomLeft","bottom"),a("bottomRight","bottom"),n}(e,t):(n.topLeft=p.a.evaluateProp(e,t),n.topRight=p.a.evaluateProp(e,t),n):n},q=function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n={fill:"black",stroke:e.fill||"black"};return p.a.evaluateStyle(s()(n,e),t)}(e.style,e),n=function(e,t){var n=t.scale,a=t.data,r=t.defaultBarWidth,o=t.style;if(e)return v()(e)?p.a.evaluateProp(e,t):e;if(o.width)return o.width;var i=n.x.range(),c=Math.abs(i[1]-i[0]),l=a.length+2,u=(t.barRatio||.5)*(a.length<2?r:c/l);return Math.max(1,u)}(e.barWidth,s()({},e,{style:t})),a=W(e.cornerRadius,s()({},e,{style:t,barWidth:n}));return s()({},e,{style:t,barWidth:n,cornerRadius:a})},N=function(e){var t=e=q(e),n=t.polar,a=t.origin,r=t.style,o=t.barWidth,c=t.cornerRadius,l=n?function(e,t){return k(e,t)}(e,c):function(e,t,n){return e.getPath?E(e,t):e.horizontal?D(e,t,n):A(e,t,n)}(e,o,c),u=n&&a?"translate(".concat(a.x,", ").concat(a.y,")"):void 0;return i.a.cloneElement(e.pathComponent,I({},e.events,{style:r,d:l,transform:e.transform||u,className:e.className,role:e.role,shapeRendering:e.shapeRendering,clipPath:e.clipPath,desc:p.a.evaluateProp(e.desc,e),tabIndex:p.a.evaluateProp(e.tabIndex,e)}))};N.propTypes=I({},O.a.primitiveProps,{alignment:r.a.oneOf(["start","middle","end"]),barRatio:r.a.number,barWidth:r.a.oneOfType([r.a.number,r.a.func]),cornerRadius:r.a.oneOfType([r.a.number,r.a.func,r.a.shape({top:r.a.oneOfType([r.a.number,r.a.func]),topLeft:r.a.oneOfType([r.a.number,r.a.func]),topRight:r.a.oneOfType([r.a.number,r.a.func]),bottom:r.a.oneOfType([r.a.number,r.a.func]),bottomLeft:r.a.oneOfType([r.a.number,r.a.func]),bottomRight:r.a.oneOfType([r.a.number,r.a.func])})]),datum:r.a.object,getPath:r.a.func,horizontal:r.a.bool,pathComponent:r.a.element,width:r.a.number,x:r.a.number,y:r.a.number,y0:r.a.number}),N.defaultProps={defaultBarWidth:8,pathComponent:i.a.createElement(P.a,null),role:"presentation",shapeRendering:"auto"};var Z=N,U=n(984),K=n(960),V=n(962),X=n(950);function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function F(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var G={width:450,height:300,padding:50},H=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),F(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.Component),function(e,t,n){t&&J(e.prototype,t),n&&J(e,n)}(t,[{key:"shouldAnimate",value:function(){return!!this.props.animate}},{key:"render",value:function(){var e=t.animationWhitelist,n=t.role,a=p.a.modifyProps(this.props,G,n);if(this.shouldAnimate())return this.animateComponent(a,e);var r=this.renderData(a);return a.standalone?this.renderContainer(a.containerComponent,r):r}}]),t}();Object.defineProperty(H,"animationWhitelist",{configurable:!0,enumerable:!0,writable:!0,value:["data","domain","height","padding","style","width"]}),Object.defineProperty(H,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"VictoryBar"}),Object.defineProperty(H,"role",{configurable:!0,enumerable:!0,writable:!0,value:"bar"}),Object.defineProperty(H,"defaultTransitions",{configurable:!0,enumerable:!0,writable:!0,value:{onLoad:{duration:2e3,before:function(){return{_y:0,_y1:0,_y0:0}},after:function(e){return{_y:e._y,_y1:e._y1,_y0:e._y0}}},onExit:{duration:500,before:function(){return{_y:0,yOffset:0}}},onEnter:{duration:500,before:function(){return{_y:0,_y1:0,_y0:0}},after:function(e){return{_y:e._y,_y1:e._y1,_y0:e._y0}}}}}),Object.defineProperty(H,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){Y(e,t,n[t])})}return e}({},O.a.baseProps,O.a.dataProps,{alignment:r.a.oneOf(["start","middle","end"]),barRatio:r.a.number,barWidth:r.a.oneOfType([r.a.number,r.a.func]),cornerRadius:r.a.oneOfType([r.a.number,r.a.func,r.a.shape({top:r.a.oneOfType([r.a.number,r.a.func]),topLeft:r.a.oneOfType([r.a.number,r.a.func]),topRight:r.a.oneOfType([r.a.number,r.a.func]),bottom:r.a.oneOfType([r.a.number,r.a.func]),bottomLeft:r.a.oneOfType([r.a.number,r.a.func]),bottomRight:r.a.oneOfType([r.a.number,r.a.func])})]),getPath:r.a.func,horizontal:r.a.bool})}),Object.defineProperty(H,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{containerComponent:i.a.createElement(X.a,null),data:[{x:1,y:1},{x:2,y:2},{x:3,y:3},{x:4,y:4}],dataComponent:i.a.createElement(Z,null),groupComponent:i.a.createElement("g",{role:"presentation"}),labelComponent:i.a.createElement(K.a,null),samples:50,sortOrder:"ascending",standalone:!0,theme:V.a.grayscale}}),Object.defineProperty(H,"getDomain",{configurable:!0,enumerable:!0,writable:!0,value:d.a.getDomainWithZero}),Object.defineProperty(H,"getData",{configurable:!0,enumerable:!0,writable:!0,value:y.a.getData}),Object.defineProperty(H,"getBaseProps",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return m(e,G)}}),Object.defineProperty(H,"expectedComponents",{configurable:!0,enumerable:!0,writable:!0,value:["dataComponent","labelComponent","groupComponent","containerComponent"]});t.a=Object(U.a)(H)}}]);
//# sourceMappingURL=14da02e471fd5fb501ec.bundle.js.map