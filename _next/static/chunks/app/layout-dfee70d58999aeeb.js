(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9634:function(e,t,n){Promise.resolve().then(n.bind(n,1744)),Promise.resolve().then(n.bind(n,5253)),Promise.resolve().then(n.bind(n,7773)),Promise.resolve().then(n.bind(n,3802))},3453:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return o},default:function(){return a}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function i(e){let{type:t,props:n}=e,i=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let o=r[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?i[o]=!!n[e]:i.setAttribute(o,n[e])}let{children:o,dangerouslySetInnerHTML:a}=n;return a?i.innerHTML=a.__html||"":o&&(i.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),i}function o(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function a(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,i="";if(r){let{children:e}=r.props;i="string"==typeof e?e:Array.isArray(e)?e.join(""):""}i!==document.title&&(document.title=i),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),a=Number(r.content),l=[];for(let t=0,n=r.previousElementSibling;t<a;t++,n=(null==n?void 0:n.previousElementSibling)||null){var c;(null==n?void 0:null==(c=n.tagName)?void 0:c.toLowerCase())===e&&l.push(n)}let u=t.map(i).filter(e=>{for(let t=0,n=l.length;t<n;t++){let n=l[t];if(o(n,e))return l.splice(t,1),!1}return!0});l.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),u.forEach(e=>n.insertBefore(e,r)),r.content=(a-l.length+u.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3015:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return g},initScriptLoader:function(){return y},default:function(){return b}});let r=n(1024),i=n(8533),o=r._(n(4887)),a=i._(n(2265)),l=n(1330),c=n(3453),u=n(8043),s=new Map,d=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(o.default.preinit){e.forEach(e=>{o.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},h=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:i=null,dangerouslySetInnerHTML:o,children:a="",strategy:l="afterInteractive",onError:u,stylesheets:h}=e,g=n||t;if(g&&d.has(g))return;if(s.has(t)){d.add(g),s.get(t).then(r,u);return}let y=()=>{i&&i(),d.add(g)},m=document.createElement("script"),b=new Promise((e,t)=>{m.addEventListener("load",function(t){e(),r&&r.call(this,t),y()}),m.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});for(let[n,r]of(o?(m.innerHTML=o.__html||"",y()):a?(m.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",y()):t&&(m.src=t,s.set(t,b)),Object.entries(e))){if(void 0===r||f.includes(n))continue;let e=c.DOMAttributeNames[n]||n.toLowerCase();m.setAttribute(e,r)}"worker"===l&&m.setAttribute("type","text/partytown"),m.setAttribute("data-nscript",l),h&&p(h),document.body.appendChild(m)};function g(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>h(e))}):h(e)}function y(e){e.forEach(g),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}()}function m(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:i=null,strategy:c="afterInteractive",onError:s,stylesheets:f,...p}=e,{updateScripts:g,scripts:y,getIsSsr:m,appDir:b,nonce:x}=(0,a.useContext)(l.HeadManagerContext),v=(0,a.useRef)(!1);(0,a.useEffect)(()=>{let e=t||n;v.current||(i&&e&&d.has(e)&&i(),v.current=!0)},[i,t,n]);let _=(0,a.useRef)(!1);if((0,a.useEffect)(()=>{!_.current&&("afterInteractive"===c?h(e):"lazyOnload"===c&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>h(e))})),_.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(g?(y[c]=(y[c]||[]).concat([{id:t,src:n,onLoad:r,onReady:i,onError:s,...p}]),g(y)):m&&m()?d.add(t||n):m&&!m()&&h(e)),b){if(f&&f.forEach(e=>{o.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return n?(o.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"}),a.default.createElement("script",{nonce:x,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),a.default.createElement("script",{nonce:x,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p}])+")"}}));"afterInteractive"===c&&n&&o.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"})}return null}Object.defineProperty(m,"__nextScript",{value:!0});let b=m;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3802:function(e,t,n){"use strict";n.r(t);var r=n(7437),i=n(8475),o=n.n(i);t.default=function(e){let{GA_TRACKING_ID:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o(),{src:"https://www.googletagmanager.com/gtag/js?id=".concat(t),strategy:"afterInteractive"}),(0,r.jsx)(o(),{id:"google-analytics",strategy:"afterInteractive",children:"\n        window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', \"".concat(t,'");\n        ')})]})}},7773:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(230),i=n(7437),o=n(802),a=n(4241);function l(){let e=(0,r._)(["\n  max-width: 768px;\n  margin-inline: auto;\n  padding: 36px;\n  margin-block: 60px;\n  background-color: #fff;\n  @media "," {\n    margin-block: 0;\n    padding: 18px 12px 60px;\n  }\n"]);return l=function(){return e},e}let c=o.ZP.main.withConfig({displayName:"Container__StyledBaseContainer",componentId:"sc-7af908f0-0"})(l(),a.Uh.mobile);var u=function(e){let{children:t}=e;return(0,i.jsx)(c,{children:t})},s=n(1396),d=n.n(s),f=n(4033),p=n(2265),h=n(3198),g=n(9930);function y(){let e=(0,r._)(["\n  display: flex;\n  column-gap: 30px;\n  a {\n    font-family: 'Roboto';\n    font-size: 16px;\n    &.active {\n      font-weight: 700;\n    }\n  }\n"]);return y=function(){return e},e}let m=o.ZP.nav.withConfig({displayName:"Gnb__StyledBaseGnb",componentId:"sc-8f479c7c-0"})(y());var b=function(){let{categoryName:e}=(0,h.v9)(e=>e.core),t=(0,h.I0)(),n=(0,f.usePathname)();return(0,p.useEffect)(()=>{t(g.ky.setCategoryName(n.split("/")[1]))},[n,t]),(0,i.jsxs)(m,{children:[(0,i.jsx)(d(),{className:"".concat(("post"===e||!e)&&"active"),href:"/",children:"Blog"}),(0,i.jsx)(d(),{className:"".concat("chord"===e&&"active"),href:"/chord",children:"Chord"}),(0,i.jsx)(d(),{className:"".concat("score"===e&&"active"),href:"/score",children:"Score"}),(0,i.jsx)(d(),{className:"".concat("about"===e&&"active"),href:"/about",children:"About"})]})};function x(){let e=(0,r._)(["\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  display: flex;\n  align-items: center;\n  height: 60px;\n  padding: 0 24px;\n  border-bottom: 1px solid #000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  background-color: rgba(255, 255, 255, 0.7);\n  overflow-x: auto;\n  @media "," {\n    height: 48px;\n  }\n"]);return x=function(){return e},e}let v=o.ZP.header.withConfig({displayName:"Header__StyledBaseHeader",componentId:"sc-cfd77145-0"})(x(),a.Uh.mobile);var _=function(){return(0,i.jsx)(v,{children:(0,i.jsx)(b,{})})};function w(){let e=(0,r._)(["\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  height: 60px;\n  border-top: 1px solid #000;\n  background-color: #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  .copyright {\n    font-size: 12px;\n    color: #000;\n  }\n"]);return w=function(){return e},e}let j=o.ZP.footer.withConfig({displayName:"Footer__StyledBaseFooter",componentId:"sc-6efd4e0e-0"})(w());var k=function(){return(0,i.jsx)(j,{children:(0,i.jsx)("p",{className:"copyright",children:"Copyright 2023. Shinyongjun All rights reserved."})})};function E(){let e=(0,r._)(["\n  position: relative;\n  min-height: 100vh;\n  padding-block: 60px;\n  background-color: #eee;\n  @media "," {\n    padding-top: 48px;\n  }\n"]);return E=function(){return e},e}let S=o.ZP.div.withConfig({displayName:"Default__StyledDefaultTemplate",componentId:"sc-52c4743e-0"})(E(),a.Uh.mobile);var N=function(e){let{children:t}=e;return(0,i.jsxs)(S,{children:[(0,i.jsx)(_,{}),(0,i.jsx)(u,{children:t}),(0,i.jsx)(k,{})]})}},9930:function(e,t,n){"use strict";n.d(t,{ky:function(){return o}});var r=n(663);let i=(0,r.oM)({name:"core",initialState:{categoryName:""},reducers:{setCategoryName:(e,t)=>({...e,categoryName:t.payload})}}),o=i.actions;t.ZP=i.reducer},8642:function(e,t,n){"use strict";n.d(t,{tJ:function(){return o}});var r=n(663);let i=(0,r.oM)({name:"diary",initialState:{currentDate:""},reducers:{setCurrentDate:(e,t)=>({...e,currentDate:t.payload})}}),o=i.actions;t.ZP=i.reducer},5253:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(7437),i=n(3198),o=n(7373),a=n(663),l=n(9930),c=n(8642);let u=(0,o.UY)({core:l.ZP,diary:c.ZP}),s=(0,a.xC)({reducer:u,devTools:!1});var d=function(e){let{children:t}=e;return(0,r.jsx)(i.zt,{store:s,children:t})}},4241:function(e,t,n){"use strict";n.d(t,{LH:function(){return c},Uh:function(){return u},mc:function(){return l}});var r=n(230),i=n(802);function o(){let e=(0,r._)(["\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: inherit;\n  font-weight: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  color: inherit;\n  vertical-align: top;\n  text-underline-position: under;\n  background-repeat: no-repeat;\n  mask-repeat: no-repeat;\n"]);return o=function(){return e},e}function a(){let e=(0,r._)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: ",";\n"]);return a=function(){return e},e}let l=(0,i.iv)(o()),c=e=>(0,i.iv)(a(),e),u={mobile:"(max-width: 768px)"}},1744:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(7437),i=n(2265),o=n(4033),a=n(802),l=n(230),c=n(4241);function u(){let e=(0,l._)(["\n  *,\n  :before,\n  :after {\n    ",";\n  }\n  html {\n    // scroll-behavior: smooth;\n    scroll-behavior: auto;\n  }\n  body {\n    font-family: 'Noto Sans KR', sans-serif;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 1.5;\n    color: #000;\n    background: #fff;\n    -webkit-text-size-adjust: 100%;\n    min-width: 320px;\n    &.is-mobile {\n      font-size: 12px;\n    }\n    &.is-scroll-lock {\n      overflow: hidden;\n    }\n  }\n  ol,\n  ul {\n    list-style: none;\n  }\n  table {\n    width: 100%;\n    border-spacing: 0;\n    table-layout: fixed;\n  }\n  th,\n  td {\n    text-align: center;\n    vertical-align: middle;\n  }\n  a {\n    text-decoration: none;\n  }\n  button,\n  input[type='file'],\n  input[type='image'],\n  input[type='reset'],\n  input[type='button'],\n  input[type='submit'] {\n    border: none;\n    border-radius: 0;\n    background: none;\n    appearance: none;\n    cursor: pointer;\n  }\n  input:not([type]),\n  input[type='date'],\n  input[type='datetime-local'],\n  input[type='email'],\n  input[type='month'],\n  input[type='number'],\n  input[type='password'],\n  input[type='search'],\n  input[type='tel'],\n  input[type='text'],\n  input[type='time'],\n  input[type='url'],\n  input[type='week'],\n  textarea,\n  select {\n    display: inline-block;\n    width: 100%;\n    height: 40px;\n    font-size: 16px;\n    line-height: 38px;\n    color: #000;\n    padding: 0 10px;\n    border: 1px solid #ccc;\n    background: #fff;\n    box-shadow: none;\n\n    &:disabled {\n      background: #f7f7f7;\n    }\n    &::placeholder {\n      color: #999;\n    }\n  }\n  textarea {\n    height: 300px;\n    padding: 10px;\n    line-height: 1.5;\n  }\n  input[type='number'] {\n    &::-webkit-outer-spin-button,\n    ::-webkit-inner-spin-button {\n      appearance: none;\n    }\n  }\n"]);return u=function(){return e},e}function s(e){let{children:t}=e,[n]=(0,i.useState)(()=>new a.qH);return(0,o.useServerInsertedHTML)(()=>{let e=n.getStyleElement();return n.instance.clearTag(),(0,r.jsx)(r.Fragment,{children:e})}),(0,r.jsx)(r.Fragment,{children:t})}(0,a.vJ)(u(),c.mc)},4033:function(e,t,n){e.exports=n(8165)},8475:function(e,t,n){e.exports=n(3015)}},function(e){e.O(0,[576,396,198,663,971,596,744],function(){return e(e.s=9634)}),_N_E=e.O()}]);