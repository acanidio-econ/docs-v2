"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[9332],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||a;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var d=2;d<a;d++)c[d]=r[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},49721:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a={},c="Order Invalidation",i={unversionedId:"smart-contracts/eth-flow-contract/order-cancellation",id:"smart-contracts/eth-flow-contract/order-cancellation",title:"Order Invalidation",description:"The function to invalidate an order and return the ETH to the order creator is:",source:"@site/docs/smart-contracts/eth-flow-contract/order-cancellation.md",sourceDirName:"smart-contracts/eth-flow-contract",slug:"/smart-contracts/eth-flow-contract/order-cancellation",permalink:"/docs-v2/docs/smart-contracts/eth-flow-contract/order-cancellation",draft:!1,editUrl:"https://github.com/cowprotocol/docs/tree/main/docs/smart-contracts/eth-flow-contract/order-cancellation.md",tags:[],version:"current",frontMatter:{}},l={},d=[],s={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"order-invalidation"},"Order Invalidation"),(0,o.kt)("p",null,"The function to invalidate an order and return the ETH to the order creator is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"function invalidateOrder(EthFlowOrder.Data order)\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"order")," is the same order struct used for ",(0,o.kt)("a",{parentName:"p",href:"/docs-v2/docs/smart-contracts/eth-flow-contract/order-creation"},"order creation"),"."),(0,o.kt)("p",null,"Invalidating an order also refunds all unused ETH to the original creator of the order."),(0,o.kt)("p",null,"Order can be invalidated in two ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The user who created the order calls this function. Every valid order can be invalidated at any time by its creator."),(0,o.kt)("li",{parentName:"ol"},"After the order is expired, any address can trigger its invalidation. This is done to allow CoW Swap to provide a service to automatically refund unmatched orders to the users.")),(0,o.kt)("p",null,"Order validity and owner are recovered from the ",(0,o.kt)("a",{parentName:"p",href:"/docs-v2/docs/smart-contracts/eth-flow-contract/orders-in-storage"},"order mapping"),"."),(0,o.kt)("p",null,"Each order can be invalidated at most once and returns all funds that have not yet been used for trading."),(0,o.kt)("p",null,"After invalidation, the order is marked as invalid by setting the order mapping for the contract order digest to ",(0,o.kt)("inlineCode",{parentName:"p"},"invalidated"),"."))}u.isMDXComponent=!0}}]);