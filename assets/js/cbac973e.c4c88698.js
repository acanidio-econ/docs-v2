"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[4278],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29846:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},i="1. Setting Allowance for the sell token",l={unversionedId:"tutorials/submit-limit-orders-via-api/submitting-the-limit-order/setting-allowance-for-the-sell-token",id:"tutorials/submit-limit-orders-via-api/submitting-the-limit-order/setting-allowance-for-the-sell-token",title:"1. Setting Allowance for the sell token",description:"For your order to be tradable, the owner account must allow the GPv2 Vault Relayer to spend the sell tokens on their behalf (if you are using an existing Balancer v2 approved token or the Balancer Vault's internal balance you may skip this step). You may either set a limited allowance (at least the amount of tokens you intend to sell) or an unlimited allowance (2\\\\256 - 1).",source:"@site/docs/tutorials/submit-limit-orders-via-api/submitting-the-limit-order/1.-setting-allowance-for-the-sell-token.md",sourceDirName:"tutorials/submit-limit-orders-via-api/submitting-the-limit-order",slug:"/tutorials/submit-limit-orders-via-api/submitting-the-limit-order/setting-allowance-for-the-sell-token",permalink:"/docs-v2/docs/tutorials/submit-limit-orders-via-api/submitting-the-limit-order/setting-allowance-for-the-sell-token",draft:!1,editUrl:"https://github.com/cowprotocol/docs/tree/main/docs/tutorials/submit-limit-orders-via-api/submitting-the-limit-order/1.-setting-allowance-for-the-sell-token.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{}},s={},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1-setting-allowance-for-the-sell-token"},"1. Setting Allowance for the sell token"),(0,o.kt)("p",null,"For your order to be tradable, the owner account must allow the",(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0xC92E8bdf79f0507f65a392b0ab4667716BFE0110"}," GPv2 Vault Relayer")," to spend the sell tokens on their behalf (if you are using an existing Balancer v2 approved token or the Balancer Vault's internal balance you may skip this step). You may either set a limited allowance (at least the amount of tokens you intend to sell) or an unlimited allowance (2","*","*","256 - 1)."),(0,o.kt)("p",null,"This can either be done using Etherscan, e.g. to set an unlimited allowance for USDC by visiting",(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48#writeProxyContract"}," https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48#writeProxyContract")," and setting."),(0,o.kt)("figure",null,(0,o.kt)("img",{src:"https://lh4.googleusercontent.com/NGTgGkxl564ffoySZvaY8fzZIn_luQ3-ZO2s1SkyOMtecwIweGjFCBukopBdgmY8JaTe6kf3Syx3Fiv_Z8VPmBRtFuuAdQVdPdnYYMmDmA4jCG22VCaT21AxlVkYtwL9cgBsV3OM07q_tGai6lHZB3sQanbF_i1SgVJgT9xz98yZq7izYD3UOgHKPBxRjQ",alt:""}),(0,o.kt)("figcaption",null)),(0,o.kt)("p",null,"It can also be done programmatically e.g. using the following ethers typescript snippet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import ERC20 from "@openzeppelin/contracts/build/contracts/ERC20.json";\nimport { Contract, ethers } from "ethers";\nconst address = \u201c0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48\u201d // USDC\nconst erc20 = new Contract(address, ERC20.abi, ethers.provider);\nconst tx = await erc20\n.connect(\u201cyour address\u201d)\n.approve(\u201c0xC92E8bdf79f0507f65a392b0ab4667716BFE0110\u201d, ethers.constants.MaxUint256);\nawait tx.wait\n')),(0,o.kt)("p",null,"\\"))}m.isMDXComponent=!0}}]);