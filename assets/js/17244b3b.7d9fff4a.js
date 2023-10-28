"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[6004],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),h=o,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},25678:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={},a="Verifying with Orderbook API Services",c={unversionedId:"tutorials/onchain-order-cancellation/verifying-with-orderbook-api-services",id:"tutorials/onchain-order-cancellation/verifying-with-orderbook-api-services",title:"Verifying with Orderbook API Services",description:"* To check that the invalidation was picked up by our orderbook via the API service",source:"@site/docs/tutorials/onchain-order-cancellation/verifying-with-orderbook-api-services.md",sourceDirName:"tutorials/onchain-order-cancellation",slug:"/tutorials/onchain-order-cancellation/verifying-with-orderbook-api-services",permalink:"/docs-v2/docs/tutorials/onchain-order-cancellation/verifying-with-orderbook-api-services",draft:!1,editUrl:"https://github.com/cowprotocol/docs/tree/main/docs/tutorials/onchain-order-cancellation/verifying-with-orderbook-api-services.md",tags:[],version:"current",frontMatter:{}},l={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"verifying-with-orderbook-api-services"},"Verifying with Orderbook API Services"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To check that the invalidation was picked up by our orderbook via the ",(0,o.kt)("a",{parentName:"li",href:"https://api.cow.fi/mainnet"},"API service")),(0,o.kt)("li",{parentName:"ul"},"In the Orderbook API, select the appropriate network from the servers dropdown at the top of the page (for this tutorial we have selected our local instance)")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/a_U3CxRMhCdpcGNUGfXjZBQygC2wP25EItlwLFtqFSaGdhdtf5eQHmlbJwlIjSQsS7cNcAsUowt3uvtgVX8L9DZi7je91GtVndDOm6Ji6erRV24RuCwpf5We6IIyCWDf39_9hzwO",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigate to GET orders/","{","UID","}",' where you can fetch orders by UID. Click on "Try it out", paste your OrderUid in the corresponding field and click "Execute"')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/TbIx3bgdXqqnf1MHq4z3ZC29q8V2YHuLolAypWl8hTIEZVkqVbxbabjRPGrQeXntxy4gortkdi1KC57gzJeExG5W-fv_Aymp8IxC1B-I5hR-LwFLMx1h4SBYlibIegyedJvlkkz6",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'You should see your order data and can verify that the order has been invalidated by finding "invalidated": true as part of this order data!')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/_cbijjah94s6cguOCpaLLTyQWVNt6ndcidcIu23MMJekjji9yb-2tzSqa3e2bV3QL5MZOZ6LAxyLfgwFozaCSvqg7QbFsOaBj1K6yBhh2BLe_KFyT9zDtMZU4vQLmvzhvcbEDzJ-",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Congratulations!!")," You have successfully ",(0,o.kt)("strong",{parentName:"p"},"invalidated")," your order onchain!"))}d.isMDXComponent=!0}}]);