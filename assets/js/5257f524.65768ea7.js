"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[9589],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),p=a,h=u["".concat(c,".").concat(p)]||u[p]||m[p]||n;return r?o.createElement(h,i(i({ref:t},d),{},{components:r})):o.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},78960:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var o=r(87462),a=(r(67294),r(3905));const n={},i="Good After Time (GAT) Orders",l={unversionedId:"tutorials/how-to-place-erc-1271-smart-contract-orders/good-after-time-gat-orders",id:"tutorials/how-to-place-erc-1271-smart-contract-orders/good-after-time-gat-orders",title:"Good After Time (GAT) Orders",description:"Good after time, or GAT, orders are very basically orders that become valid only after a given timestamp. Currently, this is not supported natively by CoW Protocol, which only supports order expiry. Thanks to ERC-1271, creating such an order and extending the CoW Protocol becomes possible. All we need to do is add a check in the isValidSignature implementation that the current block timestamp is older than some validFrom value. The CoW Protocol services constantly simulate isValidSignature before each batch, meaning that the order would get automatically picked up and included in a batch auction once it matures. Since the signature validation would revert if the check is not met, this means that we would effectively have a trust-less check preventing the order from being filled. Even if a malicious solver would try to include a GAT order before it was mature, the CoW Protocol settlement contract would prevent it from executing a trade because the isValidSignature call would fail. Trust-less protocol extensions, nice!",source:"@site/docs/tutorials/how-to-place-erc-1271-smart-contract-orders/good-after-time-gat-orders.md",sourceDirName:"tutorials/how-to-place-erc-1271-smart-contract-orders",slug:"/tutorials/how-to-place-erc-1271-smart-contract-orders/good-after-time-gat-orders",permalink:"/docs-v2/docs/tutorials/how-to-place-erc-1271-smart-contract-orders/good-after-time-gat-orders",draft:!1,editUrl:"https://github.com/cowprotocol/docs/tree/main/docs/tutorials/how-to-place-erc-1271-smart-contract-orders/good-after-time-gat-orders.md",tags:[],version:"current",frontMatter:{}},c={},s=[{value:"Getting Rid of the API Call",id:"getting-rid-of-the-api-call",level:4}],d={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"good-after-time-gat-orders"},"Good After Time (GAT) Orders"),(0,a.kt)("p",null,"Good after time, or GAT, orders are very basically orders that become valid only after a given timestamp. Currently, this is not supported natively by CoW Protocol, which only supports order expiry. Thanks to ERC-1271, creating such an order and ",(0,a.kt)("em",{parentName:"p"},"extending")," the CoW Protocol becomes possible. All we need to do is add a check in the ",(0,a.kt)("inlineCode",{parentName:"p"},"isValidSignature")," implementation that the current block timestamp is older than some ",(0,a.kt)("inlineCode",{parentName:"p"},"validFrom")," value. The CoW Protocol services constantly simulate ",(0,a.kt)("inlineCode",{parentName:"p"},"isValidSignature")," before each batch, meaning that the order would get automatically picked up and included in a batch auction once it matures. Since the signature validation would revert if the check is not met, this means that we would effectively have a ",(0,a.kt)("strong",{parentName:"p"},"trust-less")," check preventing the order from being filled. Even if a malicious solver would try to include a GAT order before it was mature, the CoW Protocol settlement contract would prevent it from executing a trade because the ",(0,a.kt)("inlineCode",{parentName:"p"},"isValidSignature")," call would fail. Trust-less protocol extensions, nice!"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"../../img/image (7).png",alt:""}),(0,a.kt)("figcaption",null)),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"../../img/image (6).png",alt:""}),(0,a.kt)("figcaption",null)),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"../../img/image (4).png",alt:""}),(0,a.kt)("figcaption",null)),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"../../img/image (11).png",alt:""}),(0,a.kt)("figcaption",null)),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"../../img/image (2).png",alt:""}),(0,a.kt)("figcaption",null)),(0,a.kt)("p",null,"We also add a ",(0,a.kt)("inlineCode",{parentName:"p"},"GATOrders")," factory contract that allows traders to place GAT orders by:"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"../../img/image (3).png",alt:""}),(0,a.kt)("figcaption",null)),(0,a.kt)("p",null,"This factory is responsible for:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Making an ERC-20 approval to the factory contract for the tokens they want to trade"),(0,a.kt)("li",{parentName:"ol"},"Calling the ",(0,a.kt)("inlineCode",{parentName:"li"},"place")," function which internally:"),(0,a.kt)("li",{parentName:"ol"},"Stores the specified ",(0,a.kt)("inlineCode",{parentName:"li"},"validFrom")," parameter"),(0,a.kt)("li",{parentName:"ol"},"Creates a new ",(0,a.kt)("inlineCode",{parentName:"li"},"GATOrder")," contract instance"),(0,a.kt)("li",{parentName:"ol"},"Transfers the sell tokens from the trader to the Smart Order"),(0,a.kt)("li",{parentName:"ol"},"Set an ERC-20 approval to the CoW Protocol vault relayer contract")),(0,a.kt)("p",null,"After this ",(0,a.kt)("inlineCode",{parentName:"p"},"place")," transaction is executed, the order is ready!"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"../../img/image (1).png",alt:""}),(0,a.kt)("figcaption",null)),(0,a.kt)("p",null,"For the order to trade:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The trader can then let the CoW Protocol know about the order by sending the order details to the API"),(0,a.kt)("li",{parentName:"ol"},"The CoW Protocol would, before every auction, check wether or not the order is valid by simulating a ",(0,a.kt)("inlineCode",{parentName:"li"},"isValidSignature")," call",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Internally, the ",(0,a.kt)("inlineCode",{parentName:"li"},"isValidSignature")," call would compare the current block timestamp to the order's configured ",(0,a.kt)("inlineCode",{parentName:"li"},"validFrom")," and only validate the signature once this is the case."))),(0,a.kt)("li",{parentName:"ol"},"Once the order matures, it will automatically be included in the next auction. This would make the order available to the CoW Protocol solvers for trading."),(0,a.kt)("li",{parentName:"ol"},"The CoW Protocol contract would call the ",(0,a.kt)("inlineCode",{parentName:"li"},"isValidSignature")," on-chain",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This ensures that we truly have a ",(0,a.kt)("strong",{parentName:"li"},"trust-less")," order validity check, regardless of whether or not the protocol or solvers misbehave.")))),(0,a.kt)("h4",{id:"getting-rid-of-the-api-call"},"Getting Rid of the API Call"),(0,a.kt)("p",null,"We can also add an ",(0,a.kt)("inlineCode",{parentName:"p"},"OrderPlacement")," event emission to the factory contract. This would cause GAT order placement to additionally emit an on-chain event. We are currently building a new Ether trading flow on top of CoW Protocol and will start indexing these events in order to automatically add orders created this way to the order-book. This would mean that traders no longer need to make an HTTP request to the API to add an order to it, but instead will have the order added automatically."),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"../../img/image (9).png",alt:""}),(0,a.kt)("figcaption",null)))}m.isMDXComponent=!0}}]);