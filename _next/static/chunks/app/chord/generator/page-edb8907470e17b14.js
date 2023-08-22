(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[526],{774:function(n,t,e){var r=e(5491).w_;n.exports.Y=function(n){return r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 18 9 12 15 6"}}]})(n)}},7046:function(n,t,e){var r=e(5491).w_;n.exports.T=function(n){return r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"}}]})(n)}},5491:function(n,t,e){"use strict";e.d(t,{w_:function(){return a}});var r=e(2265),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),l=function(){return(l=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}).apply(this,arguments)},c=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&0>t.indexOf(r)&&(e[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]]);return e};function a(n){return function(t){return r.createElement(s,l({attr:l({},n.attr)},t),function n(t){return t&&t.map(function(t,e){return r.createElement(t.tag,l({key:e},t.attr),n(t.child))})}(n.child))}}function s(n){var t=function(t){var e,i=n.attr,o=n.size,a=n.title,s=c(n,["attr","size","title"]),h=o||t.size||"1em";return t.className&&(e=t.className),n.className&&(e=(e?e+" ":"")+n.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,s,{className:e,style:l(l({color:n.color||t.color},t.style),n.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),n.children)};return void 0!==o?r.createElement(o.Consumer,null,function(n){return t(n)}):t(i)}},7329:function(n,t,e){Promise.resolve().then(e.bind(e,6680)),Promise.resolve().then(e.bind(e,300))},300:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return y}});var r=e(230),i=e(7437),o=e(802),l=e(2265),c=e(4296),a=e(2399);let s=n=>{let t=[];for(let e=0;e<n.length;e++)-1===t.indexOf(n[e])&&t.push(n[e]);return t},h=(n,t)=>{if(n[0]!==t[0])return!1;let e=s(n).sort(),r=s(t).sort();return e.length===r.length&&JSON.stringify(e)===JSON.stringify(r)},d=(n,t)=>{if(n[0]!==t[0])return!1;let e=s(n).sort(),r=s(t).sort();return e.every(n=>r.includes(n))};var u=e(3254),f=e(5431),p=e(5760),g=e.n(p),m=e(3865);function x(){let n=(0,r._)(["\n  .result-area {\n    font-family: ",";\n    margin-bottom: 50px;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    column-gap: 12px;\n    .symbol {\n      font-weight: 700;\n      font-size: 30px;\n      &.similar {\n        color: #ff7f27;\n      }\n      &.found {\n        color: #1f883d;\n      }\n    }\n    .text {\n      position: relative;\n      bottom: 5px;\n    }\n  }\n  .guitar-area {\n    .guitar-neck {\n      display: flex;\n      flex-direction: row-reverse;\n      background-position-x: center;\n      background-size: 360px auto;\n      width: 220px;\n      margin-inline: auto;\n      background-position-y: 50px;\n      border: 1px solid #000;\n      .guitar-string {\n        position: relative;\n        display: grid;\n        width: 100%;\n        .guitar-fret {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          height: 80px;\n          border: 1px solid #000;\n          text-align: center;\n          position: relative;\n          cursor: pointer;\n          &:hover {\n            background-color: ",";\n          }\n          input[type='checkbox'] {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 0;\n            height: 0;\n            opacity: 0;\n            &:checked + div {\n              background-color: #333;\n              color: #fff;\n            }\n          }\n          &:nth-child(1) {\n            height: 40px;\n            &::after {\n              display: block;\n              position: absolute;\n              top: -30px;\n              left: 0;\n              font-size: 14px;\n              line-height: 20px;\n              width: 100%;\n              text-align: center;\n            }\n          }\n          div {\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            width: 24px;\n            height: 24px;\n            border-radius: 50%;\n            font-family: ",";\n            font-size: 14px;\n          }\n        }\n        &:nth-child(1) {\n          .guitar-fret:nth-child(1)::after {\n            content: '1';\n          }\n        }\n        &:nth-child(2) {\n          .guitar-fret:nth-child(1)::after {\n            content: '2';\n          }\n        }\n        &:nth-child(3) {\n          .guitar-fret:nth-child(1)::after {\n            content: '3';\n          }\n        }\n        &:nth-child(4) {\n          .guitar-fret:nth-child(1)::after {\n            content: '4';\n          }\n        }\n        &:nth-child(5) {\n          .guitar-fret:nth-child(1)::after {\n            content: '5';\n          }\n        }\n        &:nth-child(6) {\n          .guitar-fret:nth-child(1)::after {\n            content: '6';\n          }\n        }\n        &:last-child {\n          .guitar-fret {\n            &::before {\n              display: block;\n              content: 'test';\n              position: absolute;\n              top: calc(50% - 10px);\n              left: -60px;\n              font-size: 14px;\n              line-height: 20px;\n              width: 60px;\n              text-align: center;\n            }\n            &:nth-child(1)::before {\n              content: '개방현';\n            }\n            &:nth-child(2)::before {\n              content: '1';\n            }\n            &:nth-child(3)::before {\n              content: '2';\n            }\n            &:nth-child(4)::before {\n              content: '3';\n            }\n            &:nth-child(5)::before {\n              content: '4';\n            }\n            &:nth-child(6)::before {\n              content: '5';\n            }\n            &:nth-child(7)::before {\n              content: '6';\n            }\n            &:nth-child(8)::before {\n              content: '7';\n            }\n            &:nth-child(9)::before {\n              content: '8';\n            }\n            &:nth-child(10)::before {\n              content: '9';\n            }\n            &:nth-child(11)::before {\n              content: '10';\n            }\n            &:nth-child(12)::before {\n              content: '11';\n            }\n            &:nth-child(13)::before {\n              content: '12';\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return x=function(){return n},n}let b=o.ZP.div.withConfig({displayName:"Generator__StyledChordGenerator",componentId:"sc-79549275-0"})(x(),g().style.fontFamily,m.v.primaryBg,g().style.fontFamily);var y=function(){let n=[28,23,19,14,9,4],[t,e]=(0,l.useState)(-1),[r,o]=(0,l.useState)([0,0,0,0,0,0]),[p,g]=(0,l.useState)([]),[m,x]=(0,l.useState)(""),[y,v]=(0,l.useState)(""),j=(n,t,e)=>{let i=[...r];i[e]=n.target.checked?t:0,o(i)};return(0,l.useEffect)(()=>{let n=[...r].filter(n=>n>0).sort((n,t)=>n-t),t=[],e=s(n);e.forEach(n=>{n&&t.push((0,a.Es)("C",n))}),g(t)},[r]),(0,l.useEffect)(()=>{if(!p.length){e(-1),x("");return}let n=Object.entries(c.$t).find(n=>{let t=h(p,n[1].composition);return t});if(n)e(1),x(n[0]);else{let n=Object.entries(c.$t).find(n=>{let t=d(p,n[1].composition);return t});n?(e(2),x(n[0])):(e(0),x(""))}},[p]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(b,{children:[(0,i.jsxs)("div",{className:"result-area",children:[t<=0&&(0,i.jsx)("div",{className:"symbol notfound",children:"Not Found"}),1===t&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("button",{type:"button",className:"symbol found",onClick:()=>v(m),children:(0,i.jsx)(u.Z,{chordName:m})}),(0,i.jsx)("div",{className:"text",children:"코드와 일치합니다."})]}),2===t&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("button",{type:"button",className:"symbol similar",onClick:()=>v(m),children:(0,i.jsx)(u.Z,{chordName:m})}),(0,i.jsx)("div",{className:"text",children:"코드와 유사합니다."})]})]}),(0,i.jsx)("div",{className:"guitar-area",children:(0,i.jsx)("div",{className:"guitar-neck",children:c._B.map((t,e)=>(0,i.jsx)("div",{className:"guitar-string",children:t.map((t,o)=>{let l=n[e]+o;return(0,i.jsxs)("label",{htmlFor:"".concat(e,"-").concat(o),className:"guitar-fret",children:[(0,i.jsx)("input",{id:"".concat(e,"-").concat(o),type:"checkbox","data-pitch":l,checked:r[e]===l,onChange:n=>j(n,l,e)}),(0,i.jsx)(u.Z,{chordName:t})]},o)})},e))})}),y&&(0,i.jsx)(f.Z,{chordName:y,closeChord:()=>{v("")}})]})})}},6680:function(n,t,e){"use strict";e.r(t);var r=e(230),i=e(7437),o=e(802),l=e(4241),c=e(5760),a=e.n(c);function s(){let n=(0,r._)(["\n  font-family: ",";\n  font-weight: 700;\n  font-size: 30px;\n  line-height: 120%;\n  margin-bottom: 30px;\n  @media "," {\n    font-size: 24px;\n    margin-bottom: 18px;\n  }\n"]);return s=function(){return n},n}let h=o.ZP.h2.withConfig({displayName:"Title__StyledPageTitle",componentId:"sc-a1a2aca8-0"})(s(),a().style.fontFamily,l.Uh.mobile);t.default=function(n){let{children:t}=n;return(0,i.jsx)(h,{children:t})}}},function(n){n.O(0,[27,576,355,971,596,744],function(){return n(n.s=7329)}),_N_E=n.O()}]);