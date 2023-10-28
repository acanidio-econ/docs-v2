"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[1491],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),l=d(r),p=o,m=l["".concat(s,".").concat(p)]||l[p]||u[p]||c;return r?n.createElement(m,a(a({ref:t},f),{},{components:r})):n.createElement(m,a({ref:t},f))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:o,a[1]=i;for(var d=2;d<c;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},58677:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const c={},a="Introduction",i={unversionedId:"off-chain-services/introduction",id:"off-chain-services/introduction",title:"Introduction",description:"On CoW Protocol, orders are placed off-chain and are not immediately executed, but rather collected and aggregated to be settled in batches. CoW Protocol does not need to work with executed transactions in order for users to be able to trade. The smart contract architecture is composed of an allowance manager and a settlement smart contract. There are two main components that work off-chain, which are the API used for the fee mechanism and price estimations, and the solvers, used for finding different settlements solutions for each batch auction. Let's deep dive into how these work:",source:"@site/docs/off-chain-services/introduction.md",sourceDirName:"off-chain-services",slug:"/off-chain-services/introduction",permalink:"/docs-v2/docs/off-chain-services/introduction",draft:!1,editUrl:"https://github.com/cowprotocol/docs/tree/main/docs/off-chain-services/introduction.md",tags:[],version:"current",frontMatter:{}},s={},d=[],f={toc:d},l="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"On CoW Protocol, orders are placed off-chain and are not immediately executed, but rather collected and aggregated to be settled in batches. CoW Protocol does not need to work with executed transactions in order for users to be able to trade. The smart contract architecture is composed of an allowance manager and a settlement smart contract. There are two main components that work off-chain, which are the API used for the fee mechanism and price estimations, and the solvers, used for finding different settlements solutions for each batch auction. Let's deep dive into how these work:"))}u.isMDXComponent=!0}}]);