"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[2603],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=l(r),u=n,m=s["".concat(c,".").concat(u)]||s[u]||f[u]||o;return r?a.createElement(m,i(i({ref:t},d),{},{components:r})):a.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},70281:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={},i="API",p={unversionedId:"off-chain-services/api/README",id:"off-chain-services/api/README",title:"API",description:"Directly interact with the CoW protocol to place, manage and settle your orders through a documented API interface.",source:"@site/docs/off-chain-services/api/README.md",sourceDirName:"off-chain-services/api",slug:"/off-chain-services/api/",permalink:"/docs-v2/docs/off-chain-services/api/",draft:!1,editUrl:"https://github.com/cowprotocol/docs/tree/main/docs/off-chain-services/api/README.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l},s="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"api"},"API"),(0,n.kt)("p",null,"Directly interact with the CoW protocol to place, manage and settle your orders through a documented API interface."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://api.cow.fi/docs"},"API Docs (Swagger)")," for more details."),(0,n.kt)("p",null,"The following table contains the endpoints per network:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Network"),(0,n.kt)("th",{parentName:"tr",align:null},"Production Endpoint"),(0,n.kt)("th",{parentName:"tr",align:null},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mainnet"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://api.cow.fi/mainnet"},"https://api.cow.fi/mainnet")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://api.cow.fi/mainnet/api/v1/orders/0x65F1206182C77A040ED41D507B59C622FA94AB5E71CCA567202CFF3909F3D5C4DBE338E45276630FD8237149DD47EE027AF26F9C619723D0"},"https://api.cow.fi/mainnet/api/v1/orders/0x65F1206182C77A040ED41D507B59C622FA94AB5E71CCA567202CFF3909F3D5C4DBE338E45276630FD8237149DD47EE027AF26F9C619723D0"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Gnosis Chain"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://api.cow.fi/xdai"},"https://api.cow.fi/xdai")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://api.cow.fi/xdai/api/v1/orders/0x5af727fb0d0fd4d13a09272df46c25daaa9dc520e9b9a1830c73a21e6884086d424a46612794dbb8000194937834250dc723ffa561ddbd96"},"https://api.cow.fi/xdai/api/v1/orders/0x5af727fb0d0fd4d13a09272df46c25daaa9dc520e9b9a1830c73a21e6884086d424a46612794dbb8000194937834250dc723ffa561ddbd96"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Goerli"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://api.cow.fi/goerli"},"https://api.cow.fi/goerli")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://api.cow.fi/goerli/api/v1/orders/0xBEE57030FD6DA11612005EA636D9FAB20A43533F0180838DD0A4AB93A7CB64C45D32E91BE8EF9FDF1CE926F63DB341418093851E61DDABC0"},"https://api.cow.fi/goerli/api/v1/orders/0xBEE57030FD6DA11612005EA636D9FAB20A43533F0180838DD0A4AB93A7CB64C45D32E91BE8EF9FDF1CE926F63DB341418093851E61DDABC0"))))),(0,n.kt)("p",null,"This information can also be found at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cowprotocol/services/blob/main/crates/orderbook/openapi.yml#L5-L19"},"https://github.com/cowprotocol/services/blob/main/crates/orderbook/openapi.yml#L5-L19")))}f.isMDXComponent=!0}}]);