(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[589],{2471:function(n,e,t){Promise.resolve().then(t.bind(t,7137)),Promise.resolve().then(t.bind(t,1179)),Promise.resolve().then(t.bind(t,5797))},1179:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return w}});var i=t(230),r=t(7437),o=t(802),s=t(6442),a=t(2265),c=t(7735),l=t(8212),d=t(4241),p=t(1510),h=t(3254),x=t(5431);function m(){let n=(0,i._)(["\n  display: flex;\n  flex-wrap: wrap;\n  .letter {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    flex-basis: 1em;\n    // width: 1em;\n    text-align: center;\n    .chord {\n      height: 1.5em;\n      white-space: nowrap;\n      font-size: 14px;\n      button {\n        position: relative;\n        min-width: 100%;\n        font-weight: 700;\n        &:hover {\n          background-color: #f7f7f7;\n        }\n      }\n    }\n    .lyrics {\n      height: 1.5em;\n    }\n    .index {\n      height: 1.5em;\n      white-space: nowrap;\n      font-size: 10px;\n      text-align: center;\n    }\n  }\n"]);return m=function(){return n},n}let f=o.ZP.div.withConfig({displayName:"Phrase__StyledScorePhrase",componentId:"sc-80ed494b-0"})(m());var u=function(n){var e,t;let{phrase:i}=n,o=i.chordList||[],[s,c]=(0,a.useState)(""),l=[],d=(null===(e=i.lyrics)||void 0===e?void 0:e.split(""))||[],p=d.length,m=Math.max(...o.map(n=>n.position));for(let n=0;n<Math.max(p,m+1);n++)l.push({lyricsLetter:d[n],chordName:(null===(t=o.find(e=>e.position===n))||void 0===t?void 0:t.name)||""});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{children:l.map((n,e)=>(0,r.jsxs)("div",{className:"letter","data-letter-index":e,children:[(0,r.jsx)("div",{className:"chord",children:n.chordName&&(0,r.jsx)("button",{type:"button",onClick:()=>c(n.chordName),children:(0,r.jsx)(h.Z,{chordName:n.chordName})},e)}),(0,r.jsx)("div",{className:"lyrics",children:n.lyricsLetter}),!1]},e))}),s&&(0,r.jsx)(x.Z,{chordName:s,closeChord:()=>{c("")}})]})};function g(){let n=(0,i._)(["\n  display: grid;\n  row-gap: 30px;\n"]);return g=function(){return n},n}let y=o.ZP.article.withConfig({displayName:"Wrapper__StyledScoreWrapper",componentId:"sc-17647d13-0"})(g());var v=function(n){let{children:e}=n;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(y,{children:e})})};function b(){let n=(0,i._)(["\n  .score-header {\n    text-align: center;\n    margin-bottom: 60px;\n    .score-title {\n      font-weight: 700;\n      font-size: 30px;\n      margin-bottom: 12px;\n    }\n    .score-categories {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      gap: 12px;\n    }\n    .score-date {\n      margin-top: 12px;\n      color: #666;\n      font-size: 14px;\n    }\n    .score-meta {\n      margin-top: 30px;\n      display: flex;\n      justify-content: space-between;\n      font-size: 14px;\n    }\n  }\n  .score-content {\n    ","\n    ","\n    img {\n      display: block;\n      cursor: pointer;\n      margin-inline: auto;\n    }\n    .image-cite {\n      display: block;\n      text-align: center;\n      margin-top: 6px;\n      color: #666;\n    }\n    code {\n      display: inline-block;\n      font-size: 14px;\n      line-height: 24px;\n      padding-block: 0;\n    }\n    .rehype-code-title {\n      text-align: right;\n      font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n      font-size: 14px;\n      text-shadow: 0 1px white;\n      position: relative;\n      background-color: #f6f8fa;\n      border-radius: 6px;\n      padding: 6px 16px;\n      border-bottom: 1px solid #ddd;\n    }\n    ol {\n      list-style: decimal;\n    }\n    li {\n      list-style: disc;\n    }\n  }\n  @media "," {\n    .score-header {\n      .score-title {\n        font-size: 24px;\n      }\n      .score-date {\n        font-size: 12px;\n      }\n      .score-categories {\n        gap: 8px;\n      }\n      .score-meta {\n        font-size: 12px;\n      }\n    }\n    .score-content {\n      font-size: 14px;\n      code {\n        font-size: 12px;\n        line-height: 21px;\n      }\n      .rehype-code-title {\n        font-size: 12px;\n      }\n    }\n  }\n"]);return b=function(){return n},n}let j=o.ZP.div.withConfig({displayName:"Viewer__StyledScoreViewer",componentId:"sc-7b19ea3c-0"})(b(),l.J,c.M,d.Uh.mobile);var w=function(n){let{scoreData:e}=n,[t,i]=(0,a.useState)([]),[o,c]=(0,a.useState)(!1),[l,d]=(0,a.useState)(0),h=(0,a.useRef)(null);return(0,a.useEffect)(()=>{var n;let e=null===(n=h.current)||void 0===n?void 0:n.getElementsByTagName("img"),t=Array.from(e||[]),r=t.map((n,e)=>(n.addEventListener("click",()=>{d(e),c(!0)}),{key:e,src:n.src}));i(r)},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(j,{children:[(0,r.jsxs)("header",{className:"score-header",children:[(0,r.jsx)("h1",{className:"score-title",children:e.title}),(0,r.jsx)("div",{className:"score-date",children:e.releaseYear}),(0,r.jsxs)("div",{className:"score-meta",children:[(0,r.jsxs)("div",{className:"score-capo",children:["Capo : ",e.capo]}),(0,r.jsx)("div",{className:"score-artist",children:e.artist})]})]}),(0,r.jsx)("div",{className:"score-content",ref:h,children:(0,r.jsx)(s.R,{...e.mdx,components:{ScoreWrapper:v,ScorePhrase:u}})})]}),o&&(0,r.jsx)(p.Z,{images:t,initActiveIndex:l,closeGallery:()=>{c(!1)}})]})}}},function(n){n.O(0,[576,396,198,822,431,498,971,596,744],function(){return n(n.s=2471)}),_N_E=n.O()}]);