"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[2383],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(r),c=n,h=p["".concat(s,".").concat(c)]||p[c]||d[c]||a;return r?i.createElement(h,o(o({ref:t},m),{},{components:r})):i.createElement(h,o({ref:t},m))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},77006:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=r(87462),n=(r(67294),r(3905));const a={description:"Here is a complete list of the parameters of a limit order and the corresponding type. This is the object that a user signs to validate its order"},o="Limit Order Structure",l={unversionedId:"tutorials/submit-limit-orders-via-api/limit-order-structure",id:"tutorials/submit-limit-orders-via-api/limit-order-structure",title:"Limit Order Structure",description:"Here is a complete list of the parameters of a limit order and the corresponding type. This is the object that a user signs to validate its order",source:"@site/docs/tutorials/submit-limit-orders-via-api/limit-order-structure.md",sourceDirName:"tutorials/submit-limit-orders-via-api",slug:"/tutorials/submit-limit-orders-via-api/limit-order-structure",permalink:"/docs-v2/docs/tutorials/submit-limit-orders-via-api/limit-order-structure",draft:!1,editUrl:"https://github.com/cowprotocol/docs/tree/main/docs/tutorials/submit-limit-orders-via-api/limit-order-structure.md",tags:[],version:"current",frontMatter:{description:"Here is a complete list of the parameters of a limit order and the corresponding type. This is the object that a user signs to validate its order"}},s={},u=[],m={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,i.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"limit-order-structure"},"Limit Order Structure"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Sell Token:")," the address of the token that is sold"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Buy Token:")," the address of the token that is bought"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Sell Amount:")," the amount of ",(0,n.kt)("inlineCode",{parentName:"li"},"sellToken")," that is sold in wei"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Buy Amount:")," the amount of ",(0,n.kt)("inlineCode",{parentName:"li"},"buyToken")," that is bought in wei"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Receiver:")," the address that will receive the proceedings of the trade. If this field is zero (the zero address ",(0,n.kt)("inlineCode",{parentName:"li"},"0x00...0"),"), then the user who signed the trade is going to receive the funds"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Valid To:")," the timestamp (in seconds) until which the order is valid"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"App Data:")," extra information about the order. It is ignored by the smart contract outside of signature verification, but may be used offchain for information on the order's origin or for referrals"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Fee Amount:")," the amount of fees paid in ",(0,n.kt)("inlineCode",{parentName:"li"},"sellToken")," wei. In the case for Limit Orders this field will always be ",(0,n.kt)("inlineCode",{parentName:"li"},"0.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Kind:")," either ",(0,n.kt)("inlineCode",{parentName:"li"},"sell")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"buy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Partially Fillable:")," whether the order is partially fillable or fill-or-kill. (For the moment this is always FALSE as its not enabled yet)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Sell Token Balance:")," from where the sell token balance is withdrawn. It can be ",(0,n.kt)("inlineCode",{parentName:"li"},"erc20")," (directly from the user's ERC-20 balance), ",(0,n.kt)("inlineCode",{parentName:"li"},"external")," (from the user's ERC-20 balancer through Balancer's vault), or ",(0,n.kt)("inlineCode",{parentName:"li"},"internal")," (from the user's Balancer internal balance)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Buy Token Balance:")," to where the buy token is deposited. It can be ",(0,n.kt)("inlineCode",{parentName:"li"},"erc20")," (directly to the user's ERC-20 balance) or ",(0,n.kt)("inlineCode",{parentName:"li"},"internal")," (to the user's Balancer internal balance)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SigningScheme:")," The signature scheme to use when signing the order. CoW Protocol allows various signing schemes to support different wallet kinds:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"eip712"),": Use the EIP-712 signing scheme exactly as specified ",(0,n.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-712"},"in the EIP"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ethsign"),": Use the ",(0,n.kt)("inlineCode",{parentName:"li"},"eth_sign")," Ethereum message signature of the EIP-712 order \u201cstruct hash\u201d (this is defined in the EIP linked above)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"eip1271"),": Use ERC-1271 signature for the order. The order hash will be the EIP-712 order \u201cstruct hash\u201d (defined above)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"presign"),": Execute a transaction to the Settlement contract to indicate that an order is signed. This can be use as a fallback solution if no other signing schemes are supported by the trader."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Signature:")," The signature bytes. For ECDSA signatures (",(0,n.kt)("inlineCode",{parentName:"li"},"eip712")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"ethsign"),") this just the the signature encoded as 65 bytes: ",(0,n.kt)("inlineCode",{parentName:"li"},"r || s || v"),". For ",(0,n.kt)("inlineCode",{parentName:"li"},"eip1271"),", this is the signature bytes to pass in at signature verification. This is ERC-1271 implementation defined and largely depends on the signing smart contract. For ",(0,n.kt)("inlineCode",{parentName:"li"},"presign"),", this is the empty bytes ",(0,n.kt)("inlineCode",{parentName:"li"},"0x"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"From:")," The Address that submits the order and authorizes the full sellAmount to be traded once executed.")))}d.isMDXComponent=!0}}]);