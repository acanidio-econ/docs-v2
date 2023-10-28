"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[703],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:e},s),{},{components:n})):r.createElement(f,i({ref:e},s))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[p]="string"==typeof t?t:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39115:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={},i="Submitting Invalidation",l={unversionedId:"tutorials/onchain-order-cancellation/submitting-invalidation",id:"tutorials/onchain-order-cancellation/submitting-invalidation",title:"Submitting Invalidation",description:'* After placing your order from the interface, in the top right corner click on "Pending"',source:"@site/docs/tutorials/onchain-order-cancellation/submitting-invalidation.md",sourceDirName:"tutorials/onchain-order-cancellation",slug:"/tutorials/onchain-order-cancellation/submitting-invalidation",permalink:"/docs-v2/docs/tutorials/onchain-order-cancellation/submitting-invalidation",draft:!1,editUrl:"https://github.com/cowprotocol/docs/tree/main/docs/tutorials/onchain-order-cancellation/submitting-invalidation.md",tags:[],version:"current",frontMatter:{}},c={},u=[],s={toc:u},p="wrapper";function d(t){let{components:e,...n}=t;return(0,o.kt)(p,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"submitting-invalidation"},"Submitting Invalidation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'After placing your order from the interface, in the top right corner click on "Pending"'),(0,o.kt)("li",{parentName:"ul"},'From here you can navigate to your order in the explorer (click on the purple button "order") and copy the OrderUid ("Order Id") to your clipboard. Note that this Order ID can also be found in the URL here.')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/d8DeXt2jNhW9g5Mru6PkzOS-JdSFfRXBUZDowG4ZNQvI3Xn6_lahACWNQB9LVZS0xWfKCpNADSqNsKbm6Sn7nzVecFqMC8QnlPDyp_6fyg5atm-8IbSxkkYzCvk-fqsqfzw2u5xI",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the bottom left corner of the web interface there is a link to the settlement contract on Etherscan")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/_STDY7a2verH4wBQzFeK2JLrFd3nIe3nIjXD24IR75moyeXAVz980h82V05esLckgzJOEbdUOdcdnl4tEkMcn6ARnJaU4eKFxHp0ZMiznX3vTx7VH1aRJlHm0rxJbgY1M3t3DqEj",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'On Etherscan, click on the "Contract" tab and navigate to "Write Contract".'),(0,o.kt)("li",{parentName:"ul"},'In the "Write Wontract" tab find item number 3 "invalidateOrder"; here you can paste your Order Id and click "write" (note that you will have to send this transaction from the same wallet that you placed the order with).')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/aqYQl6-6Ijy_C5V56SpOcm3aYpLj6kBaCgYwER34lS0fxFmEEnv3IuLBKpRdhSfvzFFecaR_vv6skmvctcg1uLbyEnBEg0Yf2GRe4PWWbjqEMQXkgsHDcCo7-qY5CXV_hL1EwKV1",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"After the order invalidation has been mined, your order has been successfully invalidated!")))}d.isMDXComponent=!0}}]);