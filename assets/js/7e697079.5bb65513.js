"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[1679],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(r),d=n,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return r?a.createElement(m,c(c({ref:t},u),{},{components:r})):a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,c[1]=l;for(var i=2;i<o;i++)c[i]=r[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7883:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const o={},c="Balancer Internal Balances",l={unversionedId:"smart-contracts/vault-relayer/balancer-internal-balances",id:"smart-contracts/vault-relayer/balancer-internal-balances",title:"Balancer Internal Balances",description:"The second mechanism is to use balances internal to the Vault. The Balancer V2 vault can accrue ERC20 token balances and keep track of them internally in order to allow extremely gas-efficient transfers and swaps. The CoW protocol contracts can make use of this in order to decrease the gas cost of settling a user order on-chain. In order for this to work, the user must approve the Vault relayer contract and have internal Vault balances available.",source:"@site/docs/smart-contracts/vault-relayer/balancer-internal-balances.md",sourceDirName:"smart-contracts/vault-relayer",slug:"/smart-contracts/vault-relayer/balancer-internal-balances",permalink:"/docs-v2/docs/smart-contracts/vault-relayer/balancer-internal-balances",draft:!1,editUrl:"https://github.com/cowprotocol/docs/tree/main/docs/smart-contracts/vault-relayer/balancer-internal-balances.md",tags:[],version:"current",frontMatter:{}},s={},i=[],u={toc:i},p="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"balancer-internal-balances"},"Balancer Internal Balances"),(0,n.kt)("p",null,"The second mechanism is to use balances internal to the Vault. The Balancer V2 vault can accrue ERC20 token balances and keep track of them internally in order to allow extremely gas-efficient transfers and swaps. The CoW protocol contracts can make use of this in order to decrease the gas cost of settling a user order on-chain. In order for this to work, the user must approve the Vault relayer contract and have internal Vault balances available."),(0,n.kt)("p",null,"Internal balances can be withdrawn from the Vault at any time for their ERC20 equivalent amounts."),(0,n.kt)("p",null,'Orders with the sell token balance flag set to "internal" will withdraw using this process. The buy token balance flag can also be set to "internal" in order to receive trade proceeds in internal balances instead of ER20 token balances.'))}f.isMDXComponent=!0}}]);