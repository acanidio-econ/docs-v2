"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[3848],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=o.createContext({}),l=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return o.createElement(i.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=n,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return t?o.createElement(f,c(c({ref:r},u),{},{components:t})):o.createElement(f,c({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=m;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[d]="string"==typeof e?e:n,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5518:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(87462),n=(t(67294),t(3905));const a={},c="Smart Orders",s={unversionedId:"tutorials/how-to-place-erc-1271-smart-contract-orders/smart-orders",id:"tutorials/how-to-place-erc-1271-smart-contract-orders/smart-orders",title:"Smart Orders",description:"Smart Orders",source:"@site/docs/tutorials/how-to-place-erc-1271-smart-contract-orders/smart-orders.md",sourceDirName:"tutorials/how-to-place-erc-1271-smart-contract-orders",slug:"/tutorials/how-to-place-erc-1271-smart-contract-orders/smart-orders",permalink:"/docs-v2/docs/tutorials/how-to-place-erc-1271-smart-contract-orders/smart-orders",draft:!1,editUrl:"https://github.com/cowprotocol/docs/tree/main/docs/tutorials/how-to-place-erc-1271-smart-contract-orders/smart-orders.md",tags:[],version:"current",frontMatter:{}},i={},l=[{value:"Smart Orders",id:"smart-orders-1",level:3}],u={toc:l},d="wrapper";function p(e){let{components:r,...t}=e;return(0,n.kt)(d,(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"smart-orders"},"Smart Orders"),(0,n.kt)("h3",{id:"smart-orders-1"},"Smart Orders"),(0,n.kt)("p",null,"Smart Order leverage the same signature verification standard, ERC-1271, and work much like the Safe:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"You would deposit some tokens that you want to trade into the Smart Order"),(0,n.kt)("li",{parentName:"ol"},"Implement ERC-1271 signature verification")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"But"),", instead of verifying owner ECDSA signatures, you would instead add some custom on-chain validation logic. And ",(0,n.kt)("strong",{parentName:"p"},"that's it"),"! It is, in fact conceptually very simple, and takes advantage of just how flexible and powerful the ERC-1271 signature verification scheme is."))}p.isMDXComponent=!0}}]);