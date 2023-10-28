"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[5224],{3905:(t,e,o)=>{o.d(e,{Zo:()=>p,kt:()=>w});var r=o(67294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function n(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,r,a=function(t,e){if(null==t)return{};var o,r,a={},n=Object.keys(t);for(r=0;r<n.length;r++)o=n[r],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)o=n[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},p=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},u="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var o=t.components,a=t.mdxType,n=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=c(o),d=a,w=u["".concat(l,".").concat(d)]||u[d]||f[d]||n;return o?r.createElement(w,i(i({ref:e},p),{},{components:o})):r.createElement(w,i({ref:e},p))}));function w(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var n=o.length,i=new Array(n);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:a,i[1]=s;for(var c=2;c<n;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},25052:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=o(87462),a=(o(67294),o(3905));const n={},i="CoW Protocol trades with a Gnosis Safe Wallet",s={unversionedId:"tutorials/cowswap-trades-with-a-gnosis-safe-wallet/README",id:"tutorials/cowswap-trades-with-a-gnosis-safe-wallet/README",title:"CoW Protocol trades with a Gnosis Safe Wallet",description:"This tutorial was fully composed by poolpitako, link to the original tutorial doc can be found  here",source:"@site/docs/tutorials/cowswap-trades-with-a-gnosis-safe-wallet/README.md",sourceDirName:"tutorials/cowswap-trades-with-a-gnosis-safe-wallet",slug:"/tutorials/cowswap-trades-with-a-gnosis-safe-wallet/",permalink:"/docs-v2/docs/tutorials/cowswap-trades-with-a-gnosis-safe-wallet/",draft:!1,editUrl:"https://github.com/cowprotocol/docs/tree/main/docs/tutorials/cowswap-trades-with-a-gnosis-safe-wallet/README.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"This tutorial was fully composed by poolpitako, link to the original tutorial doc can be found  here",id:"this-tutorial-was-fully-composed-by-poolpitako-link-to-the-original-tutorial-doc-can-be-found--here",level:2}],p={toc:c},u="wrapper";function f(t){let{components:e,...o}=t;return(0,a.kt)(u,(0,r.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cow-protocol-trades-with-a-gnosis-safe-wallet"},"CoW Protocol trades with a Gnosis Safe Wallet"),(0,a.kt)("h2",{id:"this-tutorial-was-fully-composed-by-poolpitako-link-to-the-original-tutorial-doc-can-be-found--here"},"This tutorial was fully composed by ",(0,a.kt)("a",{parentName:"h2",href:"https://twitter.com/poolpitako"},"poolpitako"),", link to the original tutorial doc can be found  ",(0,a.kt)("a",{parentName:"h2",href:"https://hackmd.io/@2jvugD4TTLaxyG3oLkPg-g/H14TQ1Omt"},"here")),(0,a.kt)("p",null,"In this tutorial, we are going to discuss how to execute CoW Protocol transactions using the new presign functionality. This feature allows smart contracts to use CoW Protocol either via the CoW Swap interface or directly by interacting with the smart contracts."),(0,a.kt)("p",null,"To batch actions in a single transaction, I am going to use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/banteg/ape-safe"},"ape-safe"),". At Yearn, ape-safe is used extensively to test transactions before sending them to the multisign to approve."))}f.isMDXComponent=!0}}]);