"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[1119],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),h=o,g=p["".concat(c,".").concat(h)]||p[h]||d[h]||s;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},42940:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const s={},a="Querying the Cow Subgraph",i={unversionedId:"cow-sdk/querying-the-cow-subgraph",id:"cow-sdk/querying-the-cow-subgraph",title:"Querying the Cow Subgraph",description:"The Subgraph is constantly indexing the protocol, making all the information more accessible. It provides information about trades, users, tokens and settlements. Additionally, it has some data aggregations which provides insights on the hourly/daily/totals USD volumes, trades, users, etc.",source:"@site/docs/cow-sdk/querying-the-cow-subgraph.md",sourceDirName:"cow-sdk",slug:"/cow-sdk/querying-the-cow-subgraph",permalink:"/docs-v2/docs/cow-sdk/querying-the-cow-subgraph",draft:!1,editUrl:"https://github.com/cowprotocol/docs/tree/main/docs/cow-sdk/querying-the-cow-subgraph.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"querying-the-cow-subgraph"},"Querying the Cow Subgraph"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cowprotocol/subgraph"},"Subgraph")," is constantly indexing the protocol, making all the information more accessible. It provides information about trades, users, tokens and settlements. Additionally, it has some data aggregations which provides insights on the hourly/daily/totals USD volumes, trades, users, etc."),(0,o.kt)("p",null,"The SDK provides just an easy way to access all this information."),(0,o.kt)("p",null,"You can query the Cow Subgraph either by running some common queries exposed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"CowSubgraphApi")," or by building your own ones:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SubgraphApi, SupportedChainId } from '@cowprotocol/cow-sdk'\n\nconst subgraphApi = new SubgraphApi({ chainId: SupportedChainId.MAINNET })\n\n// Get CoW Protocol totals\nconst { tokens, orders, traders, settlements, volumeUsd, volumeEth, feesUsd, feesEth } =\n  await csubgraphApi.getTotals()\nconsole.log({ tokens, orders, traders, settlements, volumeUsd, volumeEth, feesUsd, feesEth })\n\n// Get last 24 hours volume in usd\nconst { hourlyTotals } = await cowSubgraphApi.getLastHoursVolume(24)\nconsole.log(hourlyTotals)\n\n// Get last week volume in usd\nconst { dailyTotals } = await cowSubgraphApi.getLastDaysVolume(7)\nconsole.log(dailyTotals)\n\n// Get the last 5 batches\nconst query = `\n  query LastBatches($n: Int!) {\n    settlements(orderBy: firstTradeTimestamp, orderDirection: desc, first: $n) {\n      txHash\n      firstTradeTimestamp\n    }\n  }\n`\nconst variables = { n: 5 }\nconst response = await cowSubgraphApi.runQuery(query, variables)\nconsole.log(response)\n")))}d.isMDXComponent=!0}}]);