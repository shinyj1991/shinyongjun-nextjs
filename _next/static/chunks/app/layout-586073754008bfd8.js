(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1533:function(n,e,t){Promise.resolve().then(t.bind(t,8162)),Promise.resolve().then(t.bind(t,3882)),Promise.resolve().then(t.bind(t,7773))},7773:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return P}});var i=t(230),r=t(7437),o=t(802),a=t(4241);function l(){let n=(0,i._)(["\n  max-width: 768px;\n  margin-inline: auto;\n  padding: 36px;\n  margin-block: 60px;\n  background-color: #fff;\n  @media "," {\n    margin-block: 0;\n    padding: 24px 12px 60px;\n  }\n"]);return l=function(){return n},n}let c=o.ZP.main.withConfig({displayName:"Container__StyledBaseContainer",componentId:"sc-d797236e-0"})(l(),a.Uh.mobile);var u=function(n){let{children:e}=n;return(0,r.jsx)(c,{children:e})},s=t(1396),d=t.n(s),p=t(4033),f=t(2265),h=t(3198),x=t(9930);function b(){let n=(0,i._)(["\n  display: flex;\n  column-gap: 30px;\n  a {\n    font-family: 'Roboto';\n    font-size: 16px;\n    &.active {\n      font-weight: 700;\n    }\n  }\n"]);return b=function(){return n},n}let m=o.ZP.nav.withConfig({displayName:"Gnb__StyledBaseGnb",componentId:"sc-ca3eb3b9-0"})(b());var g=function(){let{categoryName:n}=(0,h.v9)(n=>n.core),e=(0,h.I0)(),t=(0,p.usePathname)();return(0,f.useEffect)(()=>{e(x.ky.setCategoryName(t.split("/")[1]))},[t,e]),(0,r.jsxs)(m,{children:[(0,r.jsx)(d(),{className:"".concat(("post"===n||!n)&&"active"),href:"/",children:"Blog"}),(0,r.jsx)(d(),{className:"".concat("about"===n&&"active"),href:"/about",children:"About"}),(0,r.jsx)(d(),{className:"".concat("history"===n&&"active"),href:"/history",children:"History"}),(0,r.jsx)(d(),{className:"".concat("diary"===n&&"active"),href:"/diary",children:"Diary"})]})};function y(){let n=(0,i._)(["\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  display: flex;\n  align-items: center;\n  height: 60px;\n  padding: 0 24px;\n  border-bottom: 1px solid #000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  background-color: rgba(255, 255, 255, 0.7);\n  overflow-x: auto;\n  @media "," {\n    height: 48px;\n  }\n"]);return y=function(){return n},n}let v=o.ZP.header.withConfig({displayName:"Header__StyledBaseHeader",componentId:"sc-cfd77145-0"})(y(),a.Uh.mobile);var k=function(){return(0,r.jsx)(v,{children:(0,r.jsx)(g,{})})};function w(){let n=(0,i._)(["\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  height: 60px;\n  border-top: 1px solid #000;\n  background-color: #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  .copyright {\n    font-size: 12px;\n    color: #000;\n  }\n"]);return w=function(){return n},n}let _=o.ZP.footer.withConfig({displayName:"Footer__StyledBaseFooter",componentId:"sc-6efd4e0e-0"})(w());var j=function(){return(0,r.jsx)(_,{children:(0,r.jsx)("p",{className:"copyright",children:"Copyright 2023. Shinyongjun All rights reserved."})})};function N(){let n=(0,i._)(["\n  position: relative;\n  min-height: 100vh;\n  padding-block: 60px;\n  background-color: #eee;\n  @media "," {\n    padding-top: 48px;\n  }\n"]);return N=function(){return n},n}let C=o.ZP.div.withConfig({displayName:"Default__StyledDefaultTemplate",componentId:"sc-52c4743e-0"})(N(),a.Uh.mobile);var P=function(n){let{children:e}=n;return(0,r.jsxs)(C,{children:[(0,r.jsx)(k,{}),(0,r.jsx)(u,{children:e}),(0,r.jsx)(j,{})]})}},9930:function(n,e,t){"use strict";t.d(e,{ky:function(){return o}});var i=t(663);let r=(0,i.oM)({name:"core",initialState:{categoryName:""},reducers:{setCategoryName:(n,e)=>({...n,categoryName:e.payload})}}),o=r.actions;e.ZP=r.reducer},8642:function(n,e,t){"use strict";t.d(e,{tJ:function(){return o}});var i=t(663);let r=(0,i.oM)({name:"diary",initialState:{currentDate:""},reducers:{setCurrentDate:(n,e)=>({...n,currentDate:e.payload})}}),o=r.actions;e.ZP=r.reducer},3882:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return b}});var i=t(7437),r=t(3198),o=t(230),a=t(802),l=t(4241);function c(){let n=(0,o._)(["\n  *,\n  :before,\n  :after {\n    ",";\n  }\n  html {\n    scroll-behavior: smooth;\n  }\n  body {\n    font-family: 'Noto Sans KR', sans-serif;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 1.5;\n    color: #000;\n    background: #fff;\n    -webkit-text-size-adjust: 100%;\n    min-width: 320px;\n    &.is-mobile {\n      font-size: 12px;\n    }\n    &.is-scroll-lock {\n      overflow: hidden;\n    }\n  }\n  ol,\n  ul {\n    list-style: none;\n  }\n  table {\n    width: 100%;\n    border-spacing: 0;\n    table-layout: fixed;\n  }\n  th,\n  td {\n    text-align: center;\n    vertical-align: middle;\n  }\n  a {\n    text-decoration: none;\n  }\n  button,\n  input[type='file'],\n  input[type='image'],\n  input[type='reset'],\n  input[type='button'],\n  input[type='submit'] {\n    border: none;\n    border-radius: 0;\n    background: none;\n    appearance: none;\n    cursor: pointer;\n  }\n  input:not([type]),\n  input[type='date'],\n  input[type='datetime-local'],\n  input[type='email'],\n  input[type='month'],\n  input[type='number'],\n  input[type='password'],\n  input[type='search'],\n  input[type='tel'],\n  input[type='text'],\n  input[type='time'],\n  input[type='url'],\n  input[type='week'],\n  textarea,\n  select {\n    display: inline-block;\n    width: 100%;\n    height: 40px;\n    font-size: 16px;\n    line-height: 38px;\n    color: #000;\n    padding: 0 10px;\n    border: 1px solid #ccc;\n    background: #fff;\n    box-shadow: none;\n\n    &:disabled {\n      background: #f7f7f7;\n    }\n    &::placeholder {\n      color: #999;\n    }\n  }\n  textarea {\n    height: 300px;\n    padding: 10px;\n    line-height: 1.5;\n  }\n  input[type='number'] {\n    &::-webkit-outer-spin-button,\n    ::-webkit-inner-spin-button {\n      appearance: none;\n    }\n  }\n"]);return c=function(){return n},n}let u=(0,a.vJ)(c(),l.mc);var s=t(7373),d=t(663),p=t(9930),f=t(8642);let h=(0,s.UY)({core:p.ZP,diary:f.ZP}),x=(0,d.xC)({reducer:h,devTools:!1});var b=function(n){let{children:e}=n;return(0,i.jsxs)(r.zt,{store:x,children:[(0,i.jsx)(u,{}),e]})}},4241:function(n,e,t){"use strict";t.d(e,{LH:function(){return c},Uh:function(){return u},mc:function(){return l}});var i=t(230),r=t(802);function o(){let n=(0,i._)(["\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: inherit;\n  font-weight: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  color: inherit;\n  vertical-align: top;\n  text-underline-position: under;\n  background-repeat: no-repeat;\n  mask-repeat: no-repeat;\n"]);return o=function(){return n},n}function a(){let n=(0,i._)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: ",";\n"]);return a=function(){return n},n}let l=(0,r.iv)(o()),c=n=>(0,r.iv)(a(),n),u={mobile:"(max-width: 768px)"}},8162:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return l}});var i=t(7437),r=t(2265),o=t(4033),a=t(802);function l(n){let{children:e}=n,[t]=(0,r.useState)(()=>new a.qH);return(0,o.useServerInsertedHTML)(()=>{let n=t.getStyleElement();return t.instance.clearTag(),(0,i.jsx)(i.Fragment,{children:n})}),(0,i.jsx)(i.Fragment,{children:e})}},4033:function(n,e,t){n.exports=t(8165)}},function(n){n.O(0,[576,396,198,663,971,596,744],function(){return n(n.s=1533)}),_N_E=n.O()}]);