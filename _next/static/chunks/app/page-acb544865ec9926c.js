(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8945:function(n,e,t){Promise.resolve().then(t.bind(t,7137)),Promise.resolve().then(t.bind(t,7493))},7137:function(n,e,t){"use strict";t.r(e);var i=t(230),r=t(7437),s=t(802);function o(){let n=(0,i._)(["\n  padding-bottom: 36px;\n  display: flex;\n  align-items: center;\n  column-gap: 30px;\n  .avatar {\n    img {\n      width: 128px;\n      height: 128px;\n      border-radius: 50%;\n    }\n  }\n  .names-container {\n    .name {\n      font-weight: 700;\n      font-size: 20px;\n    }\n    .bio {\n      margin-top: 6px;\n      color: #000;\n    }\n  }\n"]);return o=function(){return n},n}let a=s.ZP.div.withConfig({displayName:"Profile__StyledAuthorProfile",componentId:"sc-b10da078-0"})(o());e.default=function(){return(0,r.jsxs)(a,{children:[(0,r.jsx)("div",{className:"avatar",children:(0,r.jsx)("img",{src:"/images/author-avatar.jpg",alt:""})}),(0,r.jsxs)("div",{className:"names-container",children:[(0,r.jsx)("div",{className:"name",children:"Yongjun Shin"}),(0,r.jsx)("div",{className:"bio",children:"Welcome to shinyongjun.com"})]})]})}},1666:function(n,e,t){"use strict";var i=t(230),r=t(7437),s=t(1396),o=t.n(s),a=t(802);function c(){let n=(0,i._)(["\n  padding: 3px 12px;\n  background-color: #ddd;\n  &:hover {\n    background-color: #333;\n    color: #fff;\n  }\n"]);return c=function(){return n},n}let d=(0,a.ZP)(o()).withConfig({displayName:"Item__StyledCategoryItem",componentId:"sc-73b25546-0"})(c());e.Z=function(n){let{category:e}=n;return(0,r.jsx)(d,{href:"/category/".concat(e),children:e})}},7493:function(n,e,t){"use strict";t.r(e);var i=t(230),r=t(7437),s=t(1396),o=t.n(s),a=t(802),c=t(8426),d=t(1666);function l(){let n=(0,i._)(["\n  display: grid;\n  .post-item {\n    padding: 30px 0;\n    border-bottom: 1px solid #dddddd;\n    &:first-child {\n      border-top: 1px solid #dddddd;\n    }\n    .title {\n      font-weight: 500;\n      font-size: 20px;\n      &:hover {\n        text-decoration: underline;\n      }\n    }\n    .date {\n      font-size: 13px;\n      margin-top: 6px;\n      color: #666;\n    }\n    .categories {\n      display: flex;\n      column-gap: 12px;\n      margin-top: 6px;\n    }\n  }\n"]);return l=function(){return n},n}let u=a.ZP.div.withConfig({displayName:"List__StyledPostList",componentId:"sc-6941c2a8-0"})(l());e.default=function(n){let{postList:e}=n;return(0,r.jsx)(u,{children:e.map(n=>(0,r.jsxs)("div",{className:"post-item",children:[(0,r.jsx)(o(),{href:"/post/".concat(n.slug),className:"title",children:n.title}),(0,r.jsx)("div",{className:"date",children:(0,c.U)(n.date,"YYYY-MM-DD")}),(0,r.jsx)("div",{className:"categories",children:n.categories.map(n=>(0,r.jsx)(d.Z,{category:n},n))})]},n.slug))})}},8426:function(n,e,t){"use strict";t.d(e,{U:function(){return i}});let i=(n,e)=>{let t=n.toISOString(),i=e.includes("YYYY")?t.substring(0,4):t.substring(2,4),r=t.substring(5,7),s=t.substring(8,10),o=t.substring(11,13),a=t.substring(14,16),c=e.replace(/YYYY/g,i).replace(/YY/g,i).replace(/MM/g,r).replace(/DD/g,s).replace(/HH/g,o).replace(/mm/g,a);return c}}},function(n){n.O(0,[576,396,971,596,744],function(){return n(n.s=8945)}),_N_E=n.O()}]);