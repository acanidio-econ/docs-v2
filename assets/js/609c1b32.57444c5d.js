"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[2364],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(r),f=a,m=c["".concat(l,".").concat(f)]||c[f]||p[f]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2386:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={},s="Creating the order",i={unversionedId:"tutorials/cowswap-trades-with-a-gnosis-safe-wallet/creating-the-order",id:"tutorials/cowswap-trades-with-a-gnosis-safe-wallet/creating-the-order",title:"Creating the order",description:"Let\u2019s do an intermediate step and create a method to submit the order. The gist of the process is the following:",source:"@site/docs/tutorials/cowswap-trades-with-a-gnosis-safe-wallet/creating-the-order.md",sourceDirName:"tutorials/cowswap-trades-with-a-gnosis-safe-wallet",slug:"/tutorials/cowswap-trades-with-a-gnosis-safe-wallet/creating-the-order",permalink:"/docs-v2/docs/tutorials/cowswap-trades-with-a-gnosis-safe-wallet/creating-the-order",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/cowswap-trades-with-a-gnosis-safe-wallet/creating-the-order.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Conclusion",permalink:"/docs-v2/docs/tutorials/cowswap-trades-with-a-gnosis-safe-wallet/conclusion"},next:{title:"Running the tx from the safe",permalink:"/docs-v2/docs/tutorials/cowswap-trades-with-a-gnosis-safe-wallet/running-the-tx-from-the-safe"}},l={},d=[],u={toc:d},c="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-the-order"},"Creating the order"),(0,a.kt)("p",null,"Let\u2019s do an intermediate step and create a method to submit the order. The gist of the process is the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Get the quote of the trade to do"),(0,a.kt)("li",{parentName:"ul"},"Create an order through the api and get an order id"),(0,a.kt)("li",{parentName:"ul"},"Use the order id to set a flag on-chain, saying you are ok with that trade")),(0,a.kt)("p",null,"I tried adding comments around the code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from time import time\nimport requests\nimport web3\ndef cowswap_sell(safe, sell_token, buy_token):\n    # Contract used to sign the order\n    gnosis_settlement = safe.contract("0x9008D19f58AAbD9eD0D60971565AA8510560ab41")\n    amount = sell_token.balanceOf(safe.address)\n\n    # get the fee + the buy amount after fee\n    fee_and_quote = "https://api.cow.fi/mainnet/api/v1/feeAndQuote/sell"\n    get_params = {\n        "sellToken": sell_token.address,\n        "buyToken": buy_token.address,\n        "sellAmountBeforeFee": amount\n    }\n    r = requests.get(fee_and_quote, params=get_params)\n    assert r.ok and r.status_code == 200\n\n    # These two values are needed to create an order\n    fee_amount = int(r.json()[\'fee\'][\'amount\'])\n    buy_amount_after_fee = int(r.json()[\'buyAmountAfterFee\'])\n    assert fee_amount > 0\n    assert buy_amount_after_fee > 0\n\n    # Pretty random order deadline :shrug:\n    deadline = chain.time() + 60*60*24*100 # 100 days\n\n    # Submit order\n    order_payload = {\n        "sellToken": sell_token.address,\n        "buyToken": buy_token.address,\n        "sellAmount": str(amount-fee_amount), # amount that we have minus the fee we have to pay\n        "buyAmount": str(buy_amount_after_fee), # buy amount fetched from the previous call\n        "validTo": deadline,\n        "appData": web3.Web3.keccak(text="yearn goes moooooo").hex(), # required field, do not change :)\n        "feeAmount": str(fee_amount),\n        "kind": "sell",\n        "partiallyFillable": False,\n        "receiver": safe.address,\n        "signature": "0x",\n        "from": safe.address,\n        "sellTokenBalance": "erc20",\n        "buyTokenBalance": "erc20",\n        "signingScheme": "presign" # Very important. this tells the api you are going to sign on chain\n    }\n    orders_url = f"https://protocol-mainnet.gnosis.io/api/v1/orders"\n    r = requests.post(orders_url, json=order_payload)\n    assert r.ok and r.status_code == 201\n    order_uid = r.json()\n    print(f"Payload: {order_payload}")\n    print(f"Order uid: {order_uid}")\n\n    # With the order id, we set the flag, basically signing as the gnosis safe.\n    gnosis_settlement.setPreSignature(order_uid, True)\n')))}p.isMDXComponent=!0}}]);