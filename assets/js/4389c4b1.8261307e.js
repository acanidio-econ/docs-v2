"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[188],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(a),u=r,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6864:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={},i="MetaData",l={unversionedId:"front-end/creating-app-ids/create-the-order-meta-data-file/metadata",id:"front-end/creating-app-ids/create-the-order-meta-data-file/metadata",title:"MetaData",description:"The metadata document is a JSON file that follows a specific format.",source:"@site/docs/front-end/creating-app-ids/create-the-order-meta-data-file/metadata.md",sourceDirName:"front-end/creating-app-ids/create-the-order-meta-data-file",slug:"/front-end/creating-app-ids/create-the-order-meta-data-file/metadata",permalink:"/docs-v2/docs/front-end/creating-app-ids/create-the-order-meta-data-file/metadata",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/front-end/creating-app-ids/create-the-order-meta-data-file/metadata.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AppCode",permalink:"/docs-v2/docs/front-end/creating-app-ids/create-the-order-meta-data-file/appcode"},next:{title:"Get the digest hash from the CID",permalink:"/docs-v2/docs/front-end/creating-app-ids/get-the-digest-hash-from-the-cid"}},c={},s=[],d={toc:s},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metadata"},"MetaData"),(0,r.kt)("p",null,"The metadata document is a JSON file that follows a specific format."),(0,r.kt)("p",null,"Mainly, it will be formed by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Version:")," The schema will be versioned using Semantic Versioning"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AppCode: (optional)")," The code identifying the CLI, UI, service generating the order. See AppCode section for more information."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"JSON object with metadata descriptors:")," Each metadata will specify one aspect of the order. This field is mandatory, but it can contain an empty JSON object.")),(0,r.kt)("p",null,"Each metadata will contain one mandatory field:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Version:")," The same way the metadata document is versioned, so is each metadata. It's not expected that they change much, but this could allow the schemas to evolve and let the parsers handle them correctly.")),(0,r.kt)("p",null,"So the minimum information in a AppData document would be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ \n    "version": "0.4.0", \n    "metadata": {} \n}\n')),(0,r.kt)("p",null,"Interfaces like CoW Swap could, by default, include the hash of the following document,sSo the minimum information in a AppData document would be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ \n    "version": "0.4.0", \n    "appCode": "CoW Swap", \n    "metadata": {} \n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Is it possible to include two Metadatas of the same kind in the same document?")),(0,r.kt)("p",null,"No. Only one kind instance per document. If a kind can have a higher cardinality, its schema should take this into account and should model this cardinality within it's schema definition. This way, when processing this information, we ignore the second occurrences for the same kind."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Referral: Example of a Metadata Kind")),(0,r.kt)("p",null,"Just for illustrative purposes, let's see how a referral metadata could look like."),(0,r.kt)("p",null,"This metadata could be included by any user of an interface. It's data could be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{ \n    "version": "0.1.0",\n    "referrer": "0x0000000000000000000000000000000000000000" \n}\n')),(0,r.kt)("p",null,"So, for example, a CoW Swap user creating an order after following a referral link from another user (0x0000000000000000000000000000000000000000) would include in their order the IPFS hash of the following metadata document:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{ \n    "version": "0.4.0", \n    "appCode": "CoW Swap", \n    "metadata": { \n        "referrer": { \n            "version": "0.1.0", \n            "address": "0x0000000000000000000000000000000000000000" \n        }  \n    } \n}\n')),(0,r.kt)("p",null,"The schema is defined using a ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org"},"https://json-schema.org")," schema specification."))}m.isMDXComponent=!0}}]);