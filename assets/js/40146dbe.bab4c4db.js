"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[2183],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||c;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},32848:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const c={},a="Order Execution",i={unversionedId:"smart-contracts/eth-flow-contract/order-execution",id:"smart-contracts/eth-flow-contract/order-execution",title:"Order Execution",description:"After a user order is created, then the corresponding eth-flow contract order will be traded in CoW Swap.",source:"@site/docs/smart-contracts/eth-flow-contract/order-execution.md",sourceDirName:"smart-contracts/eth-flow-contract",slug:"/smart-contracts/eth-flow-contract/order-execution",permalink:"/docs-v2/docs/smart-contracts/eth-flow-contract/order-execution",draft:!1,editUrl:"https://github.com/cowprotocol/docs/tree/main/docs/smart-contracts/eth-flow-contract/order-execution.md",tags:[],version:"current",frontMatter:{}},s={},l=[],d={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"order-execution"},"Order Execution"),(0,o.kt)("p",null,"After a user order is created, then the corresponding eth-flow contract order will be traded in CoW Swap."),(0,o.kt)("p",null,"The contract order uses EIP-1271 signatures."),(0,o.kt)("p",null,"The signature can be empty, since all information needed to verify the order can be found onchain."),(0,o.kt)("p",null,"Signature verification in a settlement works as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The order digest is computed as part of the settlement process and is the message that is assumed to be EIP-1271-signed by the eth-flow contract. The digest is used to retrieve the owner and the validity from the ",(0,o.kt)("a",{parentName:"li",href:"/docs-v2/docs/smart-contracts/eth-flow-contract/orders-in-storage"},"order mapping"),"."," "),(0,o.kt)("li",{parentName:"ol"},"The order validity is checked against the current timestamp."),(0,o.kt)("li",{parentName:"ol"},"The owner must be valid (should be set and not invalidated).")),(0,o.kt)("p",null,"If all verification steps succeed, the order can be traded."),(0,o.kt)("p",null,"\\"))}p.isMDXComponent=!0}}]);