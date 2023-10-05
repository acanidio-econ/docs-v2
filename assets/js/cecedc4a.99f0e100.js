"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[429],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6957:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={},a="Learnings & Improvements of GPv1",s={unversionedId:"overview/learnings-and-improvements-of-gpv1",id:"overview/learnings-and-improvements-of-gpv1",title:"Learnings & Improvements of GPv1",description:"Gnosis Protocol v1 was released by the Gnosis team at the beginning of 2020. The protocol had the right intention and design in place, but it was flawed in certain aspects such as:",source:"@site/docs/overview/learnings-and-improvements-of-gpv1.md",sourceDirName:"overview",slug:"/overview/learnings-and-improvements-of-gpv1",permalink:"/docs-v2/docs/overview/learnings-and-improvements-of-gpv1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/overview/learnings-and-improvements-of-gpv1.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs-v2/docs/overview/introduction"},next:{title:"Road to Decentralization",permalink:"/docs-v2/docs/overview/road-to-decentralization"}},c={},l=[],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"learnings--improvements-of-gpv1"},"Learnings & Improvements of GPv1"),(0,o.kt)("p",null,"Gnosis Protocol v1 was released by the Gnosis team at the beginning of 2020. The protocol had the right intention and design in place, but it was flawed in certain aspects such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Its non-atomicity did not allow connectivity to existing on-chain liquidity,"),(0,o.kt)("li",{parentName:"ul"},"Gas cost of placing on-chain orders would prevent market makers from offering tight spreads,"),(0,o.kt)("li",{parentName:"ul"},"Time of trading for most operations (e.g. trading, withdrawing) took too long, making them too cumbersome for a good retail user experience.")),(0,o.kt)("p",null,"Because of it, the protocol was mainly used for IDOs, as its batch trading service was recognized as a fair price finding mechanism due to benefits like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Liquidity"),(0,o.kt)("li",{parentName:"ul"},"Batch Timing"),(0,o.kt)("li",{parentName:"ul"},"Gas efficiency")),(0,o.kt)("p",null,"The CoW Protocol (formerly Gnosis Protocol v2) is built for retail customers who prefer a simple and smooth user experience and private market makers competing with Uniswap spreads. The main objectives of this protocol are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Gasless UX: User orders only need to be signed and can be submitted off-chain, so there will be no gas estimations or any possibility of failed transactions. This alone will be a major contributor to a smoother user experience than existing DEX aggregators."),(0,o.kt)("li",{parentName:"ul"},"Better prices than existing dex-aggregators: This is a result of competing solvers along with accounting for ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Coincidence_of_wants"},"coincidences of wants"),'  between retail customers before invoking other on-chain liquidity sources. For example, two "overlapping" orders can be matched directly with each other before incurring any fees that would be imposed if the traders had traded on Uniswap.'),(0,o.kt)("li",{parentName:"ul"},"Easy market maker integration: The protocol is built in a way such that it minimizes the volatility risk for market makers by settling their off-chain signed orders quickly. This allows them to offer tight spreads."),(0,o.kt)("li",{parentName:"ul"},"No deposits or withdrawals into an exchange contract: For a settlement of orders, there is only one Ethereum transaction required from the solver. This means that all trades are matched and balances are credited directly to the users' accounts atomically in a single Ethereum transaction."),(0,o.kt)("li",{parentName:"ul"},"Access to on-chain liquidity: This protocol is built to natively interact with any contract in the Ethereum blockchain; this allows trading with any existing atomic exchanges. Thanks to this ability, users have access to existing liquidity pools and hence can expect to get prices that are at least as good as what they would receive elsewhere on-chain.")))}u.isMDXComponent=!0}}]);