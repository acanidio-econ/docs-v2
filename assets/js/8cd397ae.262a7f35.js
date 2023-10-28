"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[9439],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)o=c[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)o=c[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(o),d=n,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||c;return o?r.createElement(m,i(i({ref:t},p),{},{components:o})):r.createElement(m,i({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=o.length,i=new Array(c);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:n,i[1]=a;for(var l=2;l<c;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},15457:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var r=o(87462),n=(o(67294),o(3905));const c={},i="Configuration",a={unversionedId:"overview/cow-hooks/cow-hooks-example/configuration",id:"overview/cow-hooks/cow-hooks-example/configuration",title:"Configuration",description:"First things first, we need to configure some required user-specific things:",source:"@site/docs/overview/cow-hooks/cow-hooks-example/configuration.md",sourceDirName:"overview/cow-hooks/cow-hooks-example",slug:"/overview/cow-hooks/cow-hooks-example/configuration",permalink:"/docs-v2/docs/overview/cow-hooks/cow-hooks-example/configuration",draft:!1,editUrl:"https://github.com/cowprotocol/docs/tree/main/docs/overview/cow-hooks/cow-hooks-example/configuration.md",tags:[],version:"current",frontMatter:{}},s={},l=[],p={toc:l},u="wrapper";function f(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"First things first, we need to configure some required user-specific things:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A URL of an Ethereum node to connect to"),(0,n.kt)("li",{parentName:"ul"},"The private key of the account to trade")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'# Configure the following values...\nexport NODE_URL="...";\nexport PRIVATE_KEY="...";\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'import { ethers } from "https://unpkg.com/ethers@5.7.2/dist/ethers.esm.js";\n\nconst provider = new ethers.providers.JsonRpcProvider(Deno.env.get("NODE_URL"));\nconst wallet = new ethers.Wallet(Deno.env.get("PRIVATE_KEY"), provider);\n\nconst { chainId } = await provider.getNetwork();\nconsole.log(`connected to chain ${chainId} with account ${wallet.address}`);\n')))}f.isMDXComponent=!0}}]);