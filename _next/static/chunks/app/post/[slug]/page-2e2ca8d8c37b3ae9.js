(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[605],{8247:function(n,e,t){Promise.resolve().then(t.bind(t,886)),Promise.resolve().then(t.bind(t,3020)),Promise.resolve().then(t.bind(t,7137)),Promise.resolve().then(t.bind(t,5797))},1666:function(n,e,t){"use strict";var i=t(230),r=t(7437),o=t(1396),s=t.n(o),a=t(802),l=t(4241),c=t(3865);function d(){let n=(0,i._)(["\n  padding: 3px 12px;\n  background-color: ",";\n  border: 1px solid ",";\n  color: #000;\n  font-size: 14px;\n  &:hover {\n    background-color: ",";\n    border-color: ",";\n  }\n  @media "," {\n    padding: 2px 8px;\n    font-size: 12px;\n  }\n"]);return d=function(){return n},n}let p=(0,a.ZP)(s()).withConfig({displayName:"Item__StyledCategoryItem",componentId:"sc-ede2e7f3-0"})(d(),c.v.primaryBg,c.v.primaryLine,c.v.secondaryBg,c.v.secondaryLine,l.Uh.mobile);e.Z=function(n){let{category:e}=n;return(0,r.jsx)(p,{href:"/category/".concat(e),children:e})}},886:function(n,e,t){"use strict";t.r(e);var i=t(230),r=t(7437),o=t(802),s=t(1396),a=t.n(s),l=t(4241),c=t(3865);function d(){let n=(0,i._)(["\n  display: flex;\n  column-gap: 12px;\n  margin-top: 120px;\n  > div {\n    flex-grow: 1;\n    flex-basis: 100%;\n    a {\n      display: block;\n      border-radius: 6px;\n      background-color: ",";\n      padding: 18px 24px;\n      border: 1px solid ",";\n      &:hover {\n        background-color: ",";\n      }\n      .direction {\n        font-size: 14px;\n      }\n      .title {\n        margin-top: 6px;\n        ","\n      }\n    }\n    &.next-post {\n      text-align: right;\n      .title {\n        direction: rtl;\n      }\n    }\n  }\n  @media "," {\n    display: grid;\n    > div {\n      &:not(:first-child) {\n        a {\n          margin-top: 12px;\n        }\n      }\n      a {\n        padding: 12px 18px;\n      }\n    }\n  }\n"]);return d=function(){return n},n}let p=o.ZP.nav.withConfig({displayName:"Navigation__StyledPostNavigation",componentId:"sc-b61d9de1-0"})(d(),c.v.primaryBg,c.v.primaryLine,c.v.secondaryBg,(0,l.LH)(1),l.Uh.mobile);e.default=function(n){let{nextPost:e,prevPost:t}=n;return(0,r.jsxs)(p,{children:[(0,r.jsx)("div",{className:"prev-post",children:t&&(0,r.jsxs)(a(),{href:"/post/".concat(t.slug),children:[(0,r.jsx)("div",{className:"direction",children:"이전 글"}),(0,r.jsx)("div",{className:"title",children:t.title})]})}),(0,r.jsx)("div",{className:"next-post",children:e&&(0,r.jsxs)(a(),{href:"/post/".concat(e.slug),children:[(0,r.jsx)("div",{className:"direction",children:"다음 글"}),(0,r.jsx)("div",{className:"title",children:e.title})]})})]})}},3020:function(n,e,t){"use strict";t.r(e);var i=t(230),r=t(7437),o=t(802),s=t(6442),a=t(2265),l=t(1396),c=t.n(l),d=t(5098),p=t(7735),x=t(6206),u=t(4241),g=t(1510),f=t(1666),m=t(3865);function h(){let n=(0,i._)(["\n  .post-header {\n    text-align: center;\n    margin-bottom: 60px;\n    .post-series {\n      a {\n        &:hover {\n          text-decoration: underline;\n        }\n      }\n    }\n    .post-title {\n      font-weight: 700;\n      font-size: 30px;\n      margin-bottom: 12px;\n    }\n    .post-categories {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      gap: 12px;\n    }\n    .post-date {\n      margin-top: 12px;\n      color: #666;\n      font-size: 14px;\n    }\n  }\n  .post-content {\n    ","\n    ","\n    line-height: 1.8;\n    img {\n      display: block;\n      cursor: pointer;\n      margin-inline: auto;\n    }\n    .image-cite {\n      display: block;\n      text-align: center;\n      margin-top: 6px;\n      color: #666;\n      font-size: 12px;\n    }\n    code {\n      display: inline-block;\n      font-size: 14px;\n      line-height: 20px;\n      padding-block: 0;\n      margin-block: 4.4px;\n    }\n    .rehype-code-title {\n      text-align: right;\n      font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n      font-size: 14px;\n      text-shadow: 0 1px white;\n      position: relative;\n      background-color: ",";\n      border-radius: 6px;\n      padding: 6px 16px;\n      border: solid ",";\n      border-width: 1px 1px 0;\n    }\n    ol {\n      list-style: decimal;\n    }\n    ul {\n      list-style: disc;\n    }\n    pre {\n      border: 1px solid ",";\n    }\n  }\n  @media "," {\n    .post-header {\n      .post-title {\n        font-size: 24px;\n      }\n      .post-date {\n        font-size: 12px;\n      }\n      .post-categories {\n        gap: 8px;\n      }\n    }\n    .post-content {\n      font-size: 14px;\n      code {\n        font-size: 12px;\n        line-height: 18px;\n        margin-block: 3.6px;\n      }\n      .rehype-code-title {\n        font-size: 12px;\n      }\n    }\n  }\n"]);return h=function(){return n},n}let b=o.ZP.article.withConfig({displayName:"Viewer__StyledPostViewer",componentId:"sc-56c3c824-0"})(h(),x.J,p.M,m.v.primaryBg,m.v.primaryLine,m.v.primaryLine,u.Uh.mobile);e.default=function(n){let{postData:e}=n,[t,i]=(0,a.useState)([]),[o,l]=(0,a.useState)(!1),[p,x]=(0,a.useState)(0),u=(0,a.useRef)(null);return(0,a.useEffect)(()=>{var n;let e=null===(n=u.current)||void 0===n?void 0:n.getElementsByTagName("img"),t=Array.from(e||[]),r=t.map((n,e)=>(n.addEventListener("click",()=>{x(e),l(!0)}),{key:e,src:n.src}));i(r)},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(b,{children:[(0,r.jsxs)("header",{className:"post-header",children:[e.seriesIndex&&(0,r.jsx)("div",{className:"post-series",children:(0,r.jsxs)(c(),{href:"/series/".concat(e.seriesIndex),children:["# ",e.series]})}),(0,r.jsx)("h1",{className:"post-title",children:e.title}),(0,r.jsx)("div",{className:"post-categories",children:e.categories.map(n=>(0,r.jsx)(f.Z,{category:n},n))}),(0,r.jsx)("div",{className:"post-date",children:(0,d.U)(e.date,"YYYY-MM-DD")})]}),(0,r.jsx)("div",{className:"post-content",ref:u,children:(0,r.jsx)(s.R,{...e.mdx})})]}),o&&(0,r.jsx)(g.Z,{images:t,initActiveIndex:p,closeGallery:()=>{l(!1)}})]})}},3865:function(n,e,t){"use strict";t.d(e,{v:function(){return i}});let i={primaryBg:"#f6f8fa",primaryLine:"#d0d7de",secondaryBg:"#E6E1F2",secondaryLine:"#c6c1e1",primaryText:"#000000",secondaryText:"#777777",hoverText:"#7A6FB4",boxShadow1:"0px 2px 4px rgba(0, 0, 0, 0.1)"}},4241:function(n,e,t){"use strict";t.d(e,{LH:function(){return l},Uh:function(){return c},mc:function(){return a}});var i=t(230),r=t(802);function o(){let n=(0,i._)(["\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: inherit;\n  font-weight: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  color: inherit;\n  vertical-align: top;\n  text-underline-position: under;\n  background-repeat: no-repeat;\n  mask-repeat: no-repeat;\n"]);return o=function(){return n},n}function s(){let n=(0,i._)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: ",";\n"]);return s=function(){return n},n}let a=(0,r.iv)(o()),l=n=>(0,r.iv)(s(),n),c={mobile:"(max-width: 768px)"}},5098:function(n,e,t){"use strict";t.d(e,{G:function(){return r},U:function(){return i}});let i=(n,e)=>{let t=n.toISOString(),i=e.includes("YYYY")?t.substring(0,4):t.substring(2,4),r=t.substring(5,7),o=t.substring(8,10),s=t.substring(11,13),a=t.substring(14,16),l=e.replace(/YYYY/g,i).replace(/YY/g,i).replace(/MM/g,r).replace(/DD/g,o).replace(/HH/g,s).replace(/mm/g,a);return l},r=(n,e)=>{let t=new Date(n,e,0,9,0,0).getDate(),r=[];for(let o=1;o<=t;o++){let t=new Date(n,e-1,o,12,0,0),s=i(t,"YYYY-MM-DD"),a=t.getDate(),l=t.getDay();r.push({ISO:s,date:a,day:l})}return r}}},function(n){n.O(0,[576,396,198,822,95,971,596,744],function(){return n(n.s=8247)}),_N_E=n.O()}]);