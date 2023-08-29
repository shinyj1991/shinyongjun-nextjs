(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[403,127,852,595,347,684,15,601],{246:function(n,e,t){Promise.resolve().then(t.bind(t,7773))},7773:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return B}});var i=t(230),o=t(7437),r=t(802),a=t(4241),c=t(3865);function l(){let n=(0,i._)(["\n  max-width: 768px;\n  margin-inline: auto;\n  padding: 36px;\n  margin-block: 60px;\n  background-color: #fff;\n  box-shadow: ",";\n  @media "," {\n    margin-block: 0;\n    padding: 24px 12px 60px;\n  }\n"]);return l=function(){return n},n}let s=r.ZP.main.withConfig({displayName:"Container__StyledBaseContainer",componentId:"sc-7395b7d2-0"})(l(),c.v.boxShadow1,a.Uh.mobile);var d=function(n){let{children:e}=n;return(0,o.jsx)(s,{children:e})},u=t(1396),f=t.n(u),p=t(4033),h=t(2265),m=t(9930),x=t(1886),g=t.n(x),b=t(218);function y(){let n=(0,i._)(["\n  display: flex;\n  column-gap: 30px;\n  align-items: center;\n  a {\n    font-family: ",";\n    font-size: 18px;\n    .symbol {\n      width: 27px;\n      height: 27px;\n      filter: grayscale(1);\n    }\n    &:hover {\n      color: ",";\n    }\n    &:hover {\n      color: ",";\n      .symbol {\n        filter: grayscale(0.5);\n      }\n    }\n    &.active {\n      font-weight: 700;\n      color: ",";\n      // color: #775da5;\n      // color: #7d4e9f;\n      // color: #8a3b8f;\n      .symbol {\n        filter: grayscale(0);\n      }\n    }\n  }\n  @media "," {\n    column-gap: 24px;\n    a {\n      font-size: 16px;\n    }\n  }\n"]);return y=function(){return n},n}let v=r.ZP.nav.withConfig({displayName:"Gnb__StyledBaseGnb",componentId:"sc-77bfd77b-0"})(y(),g().style.fontFamily,c.v.hoverText,c.v.hoverText,c.v.hoverText,a.Uh.mobile);var w=function(){let{categoryName:n}=(0,b.C)(n=>n.core),e=(0,b.T)(),t=(0,p.usePathname)();return(0,h.useEffect)(()=>{e(m.ky.setCategoryName(t.split("/")[1]))},[t,e]),(0,o.jsxs)(v,{children:[(0,o.jsx)(f(),{className:"".concat(!n&&"active"),href:"/",children:(0,o.jsx)("img",{src:"/images/symbol.webp",alt:"",className:"symbol"})}),(0,o.jsx)(f(),{className:"".concat("post"===n&&"active"),href:"/post",children:"Post"}),(0,o.jsx)(f(),{className:"".concat("snippet"===n&&"active"),href:"/snippet",children:"Snippet"}),(0,o.jsx)(f(),{className:"".concat("chord"===n&&"active"),href:"/chord",children:"Chord"})]})};function _(){let n=(0,i._)(["\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  display: flex;\n  align-items: center;\n  height: 60px;\n  padding: 0 24px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  background-color: rgba(255, 255, 255, 0.7);\n  box-shadow: ",";\n  overflow-x: auto;\n  @media "," {\n    height: 48px;\n  }\n"]);return _=function(){return n},n}let k=r.ZP.header.withConfig({displayName:"Header__StyledBaseHeader",componentId:"sc-e46ea7b6-0"})(_(),c.v.boxShadow1,a.Uh.mobile);var N=function(){return(0,o.jsx)(k,{children:(0,o.jsx)(w,{})})};function j(){let n=(0,i._)(["\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  height: 60px;\n  // background-color: #e0f2c2;\n  background-color: #e6e1f2;\n  border-top: 1px solid #c6c1e1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  .copyright {\n    font-family: ",";\n    font-size: 13px;\n    color: #666;\n  }\n"]);return j=function(){return n},n}let C=r.ZP.footer.withConfig({displayName:"Footer__StyledBaseFooter",componentId:"sc-72735022-0"})(j(),g().style.fontFamily);var S=function(){return(0,o.jsx)(C,{children:(0,o.jsx)("p",{className:"copyright",children:"Copyright 2023. Shinyongjun, Some rights reserved."})})};function P(){let n=(0,i._)(["\n  position: relative;\n  min-height: 100vh;\n  padding-block: 60px;\n  background-color: ",";\n  @media "," {\n    padding-top: 48px;\n  }\n"]);return P=function(){return n},n}let T=r.ZP.div.withConfig({displayName:"Default__StyledDefaultTemplate",componentId:"sc-a12e2ad-0"})(P(),c.v.primaryBg,a.Uh.mobile);var B=function(n){let{children:e}=n;return(0,o.jsxs)(T,{children:[(0,o.jsx)(N,{}),(0,o.jsx)(d,{children:e}),(0,o.jsx)(S,{})]})}},218:function(n,e,t){"use strict";t.d(e,{C:function(){return r},T:function(){return o}});var i=t(3198);let o=i.I0,r=i.v9},9930:function(n,e,t){"use strict";t.d(e,{ky:function(){return r}});var i=t(663);let o=(0,i.oM)({name:"core",initialState:{categoryName:""},reducers:{setCategoryName:(n,e)=>({...n,categoryName:e.payload})}}),r=o.actions;e.ZP=o.reducer},3865:function(n,e,t){"use strict";t.d(e,{v:function(){return i}});let i={primaryBg:"#f6f8fa",primaryLine:"#d0d7de",secondaryBg:"#E6E1F2",secondaryLine:"#c6c1e1",primaryText:"#000000",secondaryText:"#777777",hoverText:"#7d4e9f",boxShadow1:"0px 2px 4px rgba(0, 0, 0, 0.1)"}},4241:function(n,e,t){"use strict";t.d(e,{LH:function(){return l},Uh:function(){return s},mc:function(){return c}});var i=t(230),o=t(802);function r(){let n=(0,i._)(["\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: inherit;\n  font-weight: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  color: inherit;\n  vertical-align: top;\n  text-underline-position: under;\n  background-repeat: no-repeat;\n  mask-repeat: no-repeat;\n"]);return r=function(){return n},n}function a(){let n=(0,i._)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: ",";\n"]);return a=function(){return n},n}let c=(0,o.iv)(r()),l=n=>(0,o.iv)(a(),n),s={mobile:"(max-width: 768px)"}},4033:function(n,e,t){n.exports=t(8165)}},function(n){n.O(0,[576,396,979,663,971,596,744],function(){return n(n.s=246)}),_N_E=n.O()}]);