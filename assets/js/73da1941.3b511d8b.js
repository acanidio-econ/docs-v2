"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[4670],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2985:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i="Creating App Ids",c={unversionedId:"front-end/creating-app-ids/README",id:"front-end/creating-app-ids/README",title:"Creating App Ids",description:"AppData is field is a bytes32 data include in all the orders//github.com/gnosis/gp-v2-contracts/blob/main/src/contracts/libraries/GPv2Order.sol#L18",source:"@site/docs/front-end/creating-app-ids/README.md",sourceDirName:"front-end/creating-app-ids",slug:"/front-end/creating-app-ids/",permalink:"/docs-v2/docs/front-end/creating-app-ids/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/front-end/creating-app-ids/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CoW Swap",permalink:"/docs-v2/docs/front-end/cowswap"},next:{title:"Choose the appCode for the app",permalink:"/docs-v2/docs/front-end/creating-app-ids/choose-the-appcode-for-the-app"}},s={},p=[],l={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-app-ids"},"Creating App Ids"),(0,a.kt)("p",null,"AppData is field is a bytes32 data include in all the orders: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gnosis/gp-v2-contracts/blob/main/src/contracts/libraries/GPv2Order.sol#L18"},(0,a.kt)("strong",{parentName:"a"},"https://github.com/gnosis/gp-v2-contracts/blob/main/src/contracts/libraries/GPv2Order.sol#L18"))),(0,a.kt)("p",null,"The AppData can be empty, if you don't want to include any metadata, or can contain an IPFS hash otherwise."),(0,a.kt)("p",null,"The clients/UIs would be responsible for uploading the metadata to IPFS, and include the 32 bytes of the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ipfs.io/concepts/hashing/"},"IPFS hash")," in the order."))}u.isMDXComponent=!0}}]);