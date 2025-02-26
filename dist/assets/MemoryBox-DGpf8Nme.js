import{r as s,j as t,L as y}from"./index-Cg9j8mSu.js";import{B as b}from"./BackgroundHeading-DIN32e1t.js";/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var j={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=(o,n,r,d)=>{const i=s.forwardRef(({color:c="currentColor",size:a=24,stroke:e=2,title:u,className:f,children:p,...g},x)=>s.createElement("svg",{ref:x,...j[o],width:a,height:a,className:["tabler-icon",`tabler-icon-${n}`,f].join(" "),strokeWidth:e,stroke:c,...g},[u&&s.createElement("title",{key:"svg-title"},u),...d.map(([l,m])=>s.createElement(l,m)),...Array.isArray(p)?p:[p]]));return i.displayName=`${r}`,i};/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var C=w("outline","arrow-narrow-right","IconArrowNarrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M15 16l4 -4",key:"svg-1"}],["path",{d:"M15 8l4 4",key:"svg-2"}]]);const k=({slide:o,index:n,current:r,handleSlideClick:d})=>{const i=s.useRef(null),c=s.useRef(0),a=s.useRef(0),e=s.useRef(null);s.useEffect(()=>{const l=()=>{if(!i.current)return;const m=c.current,h=a.current;i.current.style.setProperty("--x",`${m}px`),i.current.style.setProperty("--y",`${h}px`),e.current=requestAnimationFrame(l)};return e.current=requestAnimationFrame(l),()=>{e.current&&cancelAnimationFrame(e.current)}},[]);const u=l=>{const m=i.current;if(!m)return;const h=m.getBoundingClientRect();c.current=l.clientX-(h.left+Math.floor(h.width/2)),a.current=l.clientY-(h.top+Math.floor(h.height/2))},f=()=>{c.current=0,a.current=0},p=l=>{l.currentTarget.style.opacity="1"},{src:g,title:x}=o;return t.jsx("div",{className:"[perspective:1200px] [transform-style:preserve-3d]",children:t.jsxs("li",{ref:i,className:"flex flex-1 flex-col items-center  items-center justify-end relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10 ",onClick:()=>d(n),onMouseMove:u,onMouseLeave:f,style:{transform:r!==n?"scale(0.98) rotateX(8deg)":"scale(1) rotateX(0deg)",transition:"transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",transformOrigin:"bottom"},children:[t.jsxs("div",{className:"absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out",style:{transform:r===n?"translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)":"none"},children:[t.jsx("img",{className:"absolute inset-0 w-[120%] h-[120%] xs:object-fill lg:object-contain opacity-100 transition-opacity duration-600 ease-in-out",style:{opacity:r===n?1:.5},alt:x,src:g,onLoad:p,loading:"eager",decoding:"sync"}),r===n&&t.jsx("div",{className:"absolute inset-0 bg-black/30 transition-all duration-1000"})]}),t.jsx("article",{className:`relative  p-[4vmin] transition-opacity duration-1000 ease-in-out ${r===n?"opacity-100 visible":"opacity-0 invisible"}`,children:t.jsx("h2",{className:"text-lg md:text-2xl lg:text-4xl font-semibold  relative",children:x})})]})})},v=({type:o,title:n,handleClick:r})=>t.jsx("button",{className:`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${o==="previous"?"rotate-180":""}`,title:n,onClick:r,children:t.jsx(C,{className:"text-neutral-600 dark:text-neutral-200"})});function N({slides:o}){const[n,r]=s.useState(0),d=()=>{const e=n-1;r(e<0?o.length-1:e)},i=()=>{const e=n+1;r(e===o.length?0:e)},c=e=>{n!==e&&r(e)},a=s.useId();return t.jsxs("div",{className:"relative w-[70vmin] h-[70vmin] mx-auto","aria-labelledby":`carousel-heading-${a}`,children:[t.jsx("ul",{className:"absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out",style:{transform:`translateX(-${n*(100/o.length)}%)`},children:o.map((e,u)=>t.jsx(k,{slide:e,index:u,current:n,handleSlideClick:c},u))}),t.jsxs("div",{className:"absolute flex justify-center w-full top-[calc(100%+1rem)]",children:[t.jsx(v,{type:"previous",title:"Go to previous slide",handleClick:d}),t.jsx(v,{type:"next",title:"Go to next slide",handleClick:i})]})]})}function M(){const o=[{title:"Chúng ta đã có một trải nghiệm tuyệt vời cùng nhau",button:"Explore Component",src:"/public/memory/group0.jpg"},{title:"Chụp ảnh cái nào",button:"Explore Component",src:"/public/memory/group1.jpg"},{title:"Tiếp tục chụp tiếp nào",button:"Explore Component",src:"/public/memory/group2.jpg"},{title:"Chụp nhanh đi chứ thèm quá rồi nè",button:"Explore Component",src:"/public/memory/ha.jpg"},{title:"Mị đói rồi ăn thôi",button:"Explore Component",src:"/public/memory/ha2.jpg"},{title:"Em tôi quá vui sau khi được cắt bánh",button:"Explore Component",src:"/public/memory/thao.jpg"}];return t.jsx("div",{className:"relative overflow-hidden w-full h-full py-20",children:t.jsx(N,{slides:o})})}const A=()=>t.jsxs("div",{className:"scroll-smooth relative font-sans bg-[#f1d4b3] min-h-svh flex justify-center items-center flex-col text-black",children:[t.jsx(b,{}),t.jsx(y,{to:"/",children:"Quay về trang đầu tiên"}),t.jsx(M,{}),t.jsx("div",{className:"mt-4 p-2 text-center",children:"Cảm ơn em đã vào xem qua những hình ảnh này. Chúc em một ngày tốt lành! Cảm ơn Nhật Bản đã cho em những trải nghiệm quý giá nhiều niềm vui và những người bạn tốt."})]});export{A as default};
