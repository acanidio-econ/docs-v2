"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[4161],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=n,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return r?o.createElement(m,c(c({ref:t},p),{},{components:r})):o.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8031:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={},c="CoW API",i={unversionedId:"cow-sdk/cow-api",id:"cow-sdk/cow-api",title:"CoW API",description:"The SDK provides access to the CoW API. The CoW API allows you:",source:"@site/docs/cow-sdk/cow-api.md",sourceDirName:"cow-sdk",slug:"/cow-sdk/cow-api",permalink:"/docs-v2/docs/cow-sdk/cow-api",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cow-sdk/cow-api.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CoW SDK",permalink:"/docs-v2/docs/cow-sdk/"},next:{title:"Getting Started with the SDK",permalink:"/docs-v2/docs/cow-sdk/getting-started-with-the-sdk"}},s={},l=[],p={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cow-api"},"CoW API"),(0,n.kt)("p",null,"The SDK provides access to the CoW API. The CoW API allows you:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Post orders"),(0,n.kt)("li",{parentName:"ul"},"Get fee quotes"),(0,n.kt)("li",{parentName:"ul"},"Get order details"),(0,n.kt)("li",{parentName:"ul"},"Get history of orders: i.e. filtering by account, transaction hash, etc.")),(0,n.kt)("p",null,"For example, you can easily get the last 5 order of a trader:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { OrderBookApi, SupportedChainId } from '@cowprotocol/cow-sdk'\n\nconst orderBookApi = new OrderBookApi({ chainId: SupportedChainId.MAINNET })\n\n// i.e. Get last 5 orders for a given trader\nconst trades = orderBookApi.getOrders({\n  owner: '0x00000000005ef87f8ca7014309ece7260bbcdaeb', // Trader\n  limit: 5,\n  offset: 0,\n})\nconsole.log(trades)\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 For more information about the API methods, you can check ",(0,n.kt)("a",{parentName:"p",href:"https://api.cow.fi/docs"},"api.cow.fi/docs"),".")),(0,n.kt)("p",null,"Now you should be able to access the main API methods. Let's continue in next section on how to sign and post new orders.","\\"))}u.isMDXComponent=!0}}]);