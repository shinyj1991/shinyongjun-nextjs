"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[193],{2233:function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u,i,l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var o={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=u?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(o,i,l):o[i]=e[i]}return o.default=e,n&&n.set(e,o),o}(n(2265)),a=c(n(802)),f=c(n(9337));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,u,i,l=[],a=!0,f=!1;try{if(u=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=u.call(n)).done)&&(l.push(r.value),l.length!==t);a=!0);}catch(e){f=!0,o=e}finally{try{if(!a&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(f)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var v=a.default.div(i||(o=["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  transition: transform 700ms;\n  transform: ",";\n"],u||(u=o.slice(0)),i=Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(u)}}))),function(e){return"translate3d(0px, -".concat(e.$transformY,"px, 0px)")});t.default=function(e){var t=e.children,n=d((0,l.useState)(0),2),r=n[0],o=n[1],u=(0,l.useRef)(null),i=d((0,l.useState)(!1),2),a=i[0],c=i[1],s=d((0,l.useState)(0),2),p=s[0],y=s[1],b=d((0,l.useState)(0),2),h=b[0],m=b[1];return(0,l.useEffect)(function(){a&&setTimeout(function(){c(!1)},700)},[a]),(0,l.useEffect)(function(){for(var e=0,t=0;t<=p;t+=1)null!==u&&u.current&&t>0&&(e+=u.current.children[t].clientHeight||0);o(e)},[p]),(0,l.useEffect)(function(){null!==u&&u.current&&m(u.current.childElementCount)},[u]),l.default.createElement(f.default,null,l.default.createElement(v,{$transformY:r,ref:u},l.default.Children.map(t,function(e){return l.default.cloneElement(e,{activeIndex:p,sectionCount:h,isAnimating:a,setIsAnimating:c,setActiveIndex:y})})))}},7128:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,u,i=l(n(2265));function l(e){return e&&e.__esModule?e:{default:e}}var a=l(n(802)).default.div(u||(r=["\n  display: flex;\n  min-height: 100%;\n  position: relative;\n  z-index: 1;\n"],o||(o=r.slice(0)),u=Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))));t.default=function(e){var t=e.children;return i.default.createElement(a,null,t)}},464:function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u,i,l=p(n(802)),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var o={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=u?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(o,i,l):o[i]=e[i]}return o.default=e,n&&n.set(e,o),o}(n(2265)),f=p(n(9281)),c=p(n(4914)),s=p(n(7128));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function p(e){return e&&e.__esModule?e:{default:e}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var y=l.default.div(i||(o=["\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: relative;\n  -webkit-overflow-scrolling: touch;\n  width: 100%;\n  height: 100%;\n  &.is-footer {\n    height: auto;\n  }\n"],u||(u=o.slice(0)),i=Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(u)}}))));t.default=function(e){var t,n=e.children,r=e.isFooter,o=e.activeIndex,u=e.sectionCount,i=e.isAnimating,l=e.setActiveIndex,d=e.setIsAnimating,p=(0,a.useRef)(null),b=(0,f.default)(p),h=b.isAtTop,m=b.isAtBottom,O=b.hasScrollbar,g=function(e){if(Array.isArray(e))return e}(t=(0,a.useState)(!1))||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,u,i,l=[],a=!0,f=!1;try{if(u=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=u.call(n)).done)&&(l.push(r.value),l.length!==t);a=!0);}catch(e){f=!0,o=e}finally{try{if(!a&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(f)throw o}}return l}}(t,2)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),j=g[0],w=g[1];(0,a.useEffect)(function(){h||m?(w(!0),setTimeout(function(){w(!1)},200)):w(!1)},[h,m]);var S=function(e){void 0!==d&&void 0!==l&&(i||j||(d(!0),l(e)))},_=function(){void 0===o||void 0===u||o>=u-1||O&&!m||S(o+1)},E=function(){void 0===o||o<=0||O&&!h||S(o-1)};return(0,c.default)(p,{onSwipeEnd:function(e){"UP"===e&&_(),"DOWN"===e&&E()}}),a.default.createElement(y,{ref:p,onWheel:function(e){e.deltaY>0&&_(),e.deltaY<0&&E()},className:r?"is-footer":""},a.default.createElement(s.default,null,n))}},9337:function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u,i,l=(o=n(2265))&&o.__esModule?o:{default:o},a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var o={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=u?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(o,i,l):o[i]=e[i]}return o.default=e,n&&n.set(e,o),o}(n(802)),f=n(5641);function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var d=a.default.div(u||(u=s(["\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  ","\n"])),f.reset),p=(0,a.createGlobalStyle)(i||(i=s(["\n  html {\n    overflow: hidden;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    ","\n  }\n  body {\n    overflow: hidden;\n    position: relative;\n    width: 100%;\n    height: 100%;\n    ","\n    *:has(.__fullpage-wrapper) {\n      position: relative;\n      width: 100%;\n      height: 100%;\n      ","\n    }\n  }\n"])),f.reset,f.reset,f.reset);t.default=function(e){var t=e.children;return l.default.createElement(d,{className:"__fullpage-wrapper"},l.default.createElement(p,null),t)}},9281:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(2265);function o(e){var t=(0,r.useState)({scrollX:0,scrollY:0,isAtTop:!0,isAtBottom:!1,hasScrollbar:!1}),n=t[0],o=t[1];return(0,r.useEffect)(function(){var t=e.current;function n(){var e=t?t.scrollHeight:0,n=t?t.scrollTop:0,r=t?t.clientHeight:0;o({scrollX:(null==t?void 0:t.scrollLeft)||0,scrollY:(null==t?void 0:t.scrollTop)||0,isAtTop:n<=0,isAtBottom:e-n<=r+1,hasScrollbar:e>r})}return t&&(n(),t.addEventListener("scroll",n)),function(){t&&t.removeEventListener("scroll",n)}},[e]),n}},4914:function(e,t,n){n.r(t);var r=n(2265),o=function(e,t){var n=Math.atan2(t,e)*(180/Math.PI);return n>=-45&&n<=45?"RIGHT":n>=45&&n<=135?"DOWN":n>=-135&&n<=-45?"UP":"LEFT"};t.default=function(e,t){var n=t.onSwipeStart,u=t.onSwipeEnd;(0,r.useEffect)(function(){var t,r,i,l,a=!1,f=function(o){e.current&&(t=o.touches[0].clientX,r=o.touches[0].clientY,a=!0,n&&n())},c=function(n){if(a&&e.current){i=n.touches[0].clientX,l=n.touches[0].clientY;var f=i-t,c=l-r;if(Math.abs(f)>30||Math.abs(c)>30){var s=o(f,c);u&&u(s),a=!1}}},s=function(){a=!1},d=e.current;return null==d||d.addEventListener("touchstart",f),null==d||d.addEventListener("touchmove",c),null==d||d.addEventListener("touchend",s),function(){null==d||d.removeEventListener("touchstart",f),null==d||d.removeEventListener("touchmove",c),null==d||d.removeEventListener("touchend",s)}},[e,n,u])}},8193:function(e,t,n){Object.defineProperty(t,"zw",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"n6",{enumerable:!0,get:function(){return o.default}}),u(n(9337));var r=u(n(2233)),o=u(n(464));function u(e){return e&&e.__esModule?e:{default:e}}},5641:function(e,t,n){n.r(t),n.d(t,{reset:function(){return i}});var r,o,u,i=(0,n(802).css)(u||(r=["\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n"],o=["\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n"],Object.defineProperty?Object.defineProperty(r,"raw",{value:o}):r.raw=o,u=r))}}]);