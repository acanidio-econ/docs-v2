"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[5050],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=o.createContext({}),i=function(e){var t=o.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=i(e.components);return o.createElement(d.Provider,{value:t},e.children)},l="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=i(a),m=n,f=l["".concat(d,".").concat(m)]||l[m]||s[m]||r;return a?o.createElement(f,p(p({ref:t},u),{},{components:a})):o.createElement(f,p({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,p=new Array(r);p[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[l]="string"==typeof e?e:n,p[1]=c;for(var i=2;i<r;i++)p[i]=a[i];return o.createElement.apply(null,p)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},37890:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var o=a(87462),n=(a(67294),a(3905));const r={},p="Upload document to IPFS",c={unversionedId:"cow-sdk/order-meta-data-appdata/upload-document-to-ipfs",id:"cow-sdk/order-meta-data-appdata/upload-document-to-ipfs",title:"Upload document to IPFS",description:"The SDK uses Pinata to upload it to IPFS, so you will need an API Key in order to upload it using the SDK.",source:"@site/docs/cow-sdk/order-meta-data-appdata/upload-document-to-ipfs.md",sourceDirName:"cow-sdk/order-meta-data-appdata",slug:"/cow-sdk/order-meta-data-appdata/upload-document-to-ipfs",permalink:"/docs-v2/docs/cow-sdk/order-meta-data-appdata/upload-document-to-ipfs",draft:!1,editUrl:"https://github.com/cowprotocol/docs/tree/main/docs/cow-sdk/order-meta-data-appdata/upload-document-to-ipfs.md",tags:[],version:"current",frontMatter:{}},d={},i=[],u={toc:i},l="wrapper";function s(e){let{components:t,...a}=e;return(0,n.kt)(l,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"upload-document-to-ipfs"},"Upload document to IPFS"),(0,n.kt)("p",null,"The SDK uses Pinata to upload it to IPFS, so you will need an API Key in order to upload it using the SDK."),(0,n.kt)("p",null,"Alternativelly, you can upload the document on your own using any other service."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MetadataApi } from '@cowprotocol/app-data'\n\nexport const metadataApi = new MetadataApi()\n\nconst IPFS_OPTIONS = {\n    pinataApiKey: `PINATA_API_KEY`,\n    pinataApiSecret: `PINATA_SECRET_API_KEY`,\n}\n\nconst appDataDoc = await metadataApi.generateAppDataDoc(...)\n\n// Make sure you provide the IPFS params when instantiating the SDK\nconst uploadedAppDataHash = await metadataApi.uploadMetadataDocToIpfs(appDataDoc, IPFS_OPTIONS)\n\nconsole.log(uploadedAppDataHash)\n")))}s.isMDXComponent=!0}}]);