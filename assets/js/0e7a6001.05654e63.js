"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[4868],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,s=function(e,t){if(null==e)return{};var r,o,s={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(r),h=s,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||n;return r?o.createElement(m,i(i({ref:t},u),{},{components:r})):o.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,i=new Array(n);i[0]=h;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:s,i[1]=a;for(var l=2;l<n;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5348:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var o=r(7462),s=(r(7294),r(3905));const n={},i="Solver Auction and Rewards",a={unversionedId:"solvers/in-depth-solver-specification/solver-auction-and-rewards",id:"solvers/in-depth-solver-specification/solver-auction-and-rewards",title:"Solver Auction and Rewards",description:"As specified in CIP-20, solver rewards are split into two components: per-auction rewards and consistency rewards.",source:"@site/docs/solvers/in-depth-solver-specification/solver-auction-and-rewards.md",sourceDirName:"solvers/in-depth-solver-specification",slug:"/solvers/in-depth-solver-specification/solver-auction-and-rewards",permalink:"/docs-v2/docs/solvers/in-depth-solver-specification/solver-auction-and-rewards",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/solvers/in-depth-solver-specification/solver-auction-and-rewards.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Social Consensus Rules",permalink:"/docs-v2/docs/solvers/in-depth-solver-specification/social-consensus-rules"},next:{title:"The Batch Auction Optimization Problem",permalink:"/docs-v2/docs/solvers/in-depth-solver-specification/the-batch-auction-optimization-problem"}},c={},l=[{value:"Specification of per-auction rewards",id:"specification-of-per-auction-rewards",level:3},{value:"Solver bidding strategies",id:"solver-bidding-strategies",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,s.kt)(p,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"solver-auction-and-rewards"},"Solver Auction and Rewards"),(0,s.kt)("p",null,"As specified in ",(0,s.kt)("a",{parentName:"p",href:"https://snapshot.org/#/cow.eth/proposal/0x2d3f9bd1ea72dca84b03e97dda3efc1f4a42a772c54bd2037e8b62e7d09a491f"},"CIP-20"),", solver rewards are split into two components: per-auction rewards and consistency rewards."),(0,s.kt)("p",null,"The auction's goal is to reward solvers based on how much value they provide to the users. For every batch, solvers compete by proposing a solution to settle the batch, and the winning solver receives a reward that is part in ETH and part in COW (see below)."," "),(0,s.kt)("p",null,"CoW Protocol has committed to spending a certain amount of COW to reward solvers; this amount will be updated every six months. The part of the rewards budget in COW that is not spent on per-auction rewards is used for consistency rewards. Consistency rewards are distributed weekly to each solver in proportion to the number of valid solutions submitted during the previous week."),(0,s.kt)("h3",{id:"specification-of-per-auction-rewards"},"Specification of per-auction rewards"),(0,s.kt)("p",null,"The per-auction rewards are computed using a mechanism akin to a second-price auction. First, each solver commits to a numerical score and a solution (which includes a price vector and a list of trades to execute). The solver with the highest score wins the right to settle their submitted solution on chain. Note that, from the protocol perspective, the solution executed on chain must equal the solver's initial commitment. Finally, the payment to the winning solver is:"),(0,s.kt)("p",null,"$$\n\\textrm{payment} = \\textrm{cap}(\\textrm{observedQuality} - \\textrm{referenceScore}).\n$$"),(0,s.kt)("p",null,'Here, $$\\textrm{referenceScore}$$ is the second-highest submitted $$\\textrm{score}$$, and $$\\textrm{observedQuality}$$ is the settlement\'s "quality", as observed on chain. More precisely, in case of a successful settlement, the $$\\textrm{observedQuality}$$ is equal to the sum of the surplus generated for users and fees paid to the protocol, while in the case of a failed settlement (e.g., one that reverted), the $$\\textrm{observedQuality}$$ is zero. Note that the payment can end up being negative, in which case the solver pays the protocol.'),(0,s.kt)("p",null,"The payment is capped from above and below using the function $$\\textrm{cap}(x) = \\max(-c, \\min(c + \\textrm{observedCost}, x))$$ with $$c = 0.01 \\;\\textrm{ETH}$$, where $$\\textrm{observedCost}$$ is the gas cost of executing the settlement (which the solver pays)."),(0,s.kt)("p",null,"Submitted scores that are non-positive will be ignored; this is enforced by always considering the empty solution, that has zero score. This also implies that, for an auction with only one submitted solution (from a solver), the reward will be $$\\textrm{cap}(\\textrm{observedQuality})$$, since the $$\\textrm{referenceScore}$$ is zero in this case."),(0,s.kt)("p",null,"Moreover, the score a solver reports is required to be smaller than the solution's $$\\textrm{successfulQuality}$$, defined as the $$\\textrm{observedQuality}$$ when the solution successfully executes. Since solvers are currently submitting the full solution along with their score, this is very easily checked; if the solution successfully settles on chain, its $$\\textrm{successfulQuality}$$ is equal to the sum of the total surplus generated and the fees collected, and both are fully determined from the set of orders the solution intends to execute and the clearing price vector it reports."),(0,s.kt)("p",null,"Note that once we include the gas costs of executing a transaction, the winning solver's payoff is bounded above by $$c$$. However, it is not bounded below because, in case of a revert, the solver pays at most $$c$$ to the protocol and may also incur gas costs."," "),(0,s.kt)("p",null,"To limit currency mismatch, the solver receives $$\\min(\\textrm{payment}, \\textrm{observedCost})$$ in ETH and $$\\textrm{payment} - \\min(\\textrm{payment}, \\textrm{observedCost})$$ in COW, using an up-to-date price. In other words, the solver payment is split into a gas reimbursement paid in ETH and a reward paid in COW.  To arrive at the budget for consistency rewards, these per-auction rewards paid in COW are deducted from the total rewards budget."),(0,s.kt)("p",null,"Finally, the winning solver may pay additional costs, such as, for example, negative slippage once a solution is implemented. These costs are not an explicit element of the mechanism, but they are relevant in determining the solver's optimal strategy. More precisely, per ",(0,s.kt)("a",{parentName:"p",href:"https://snapshot.org/#/cow.eth/proposal/0xf9c98a2710dc72c906bbeab9b8fe169c1ed2e9af6a67776cc29b8b4eb44d0fb2"},"CIP-17"),", solvers are responsible for managing potential slippage incurred by the settlements they settle. This is a component that affects payouts, but can be treated completely separately, and we do so in ",(0,s.kt)("a",{parentName:"p",href:"https://app.gitbook.com/o/-MhNTbohYqyGgzHCBv93/s/-MfcJLF8wcqI03lmTpn8/~/changes/167/off-chain-services/in-depth-solver-specification/slippage-accounting"},"this")," section."),(0,s.kt)("h3",{id:"solver-bidding-strategies"},"Solver bidding strategies"),(0,s.kt)("p",null,"Apart from submitting their solutions, solvers must decide on a score to submit as a bid in the auction. In general, this score can be chosen freely by the solver (within the restriction $$0 < \\textrm{score} < \\textrm{successfulQuality}$$)."),(0,s.kt)("p",null,"Let $$p$$ the probability that a solution successfully executes, let $$SC$$ be the costs that a solver pays if only if a solution successfully executes, and $$C$$ the costs that a solver pays independently of whether a solution executes. For example, variable costs could include potential negative slippage of an executed solution, while fixed costs could include gas costs that arise even for a reverted solution."),(0,s.kt)("p",null,"Ignoring capping, the winning solver's expected payoff is "," "),(0,s.kt)("p",null,"$$\np \\cdot (\\textrm{successfulQuality} - \\textrm{SC})  - \\textrm{referenceScore} - \\textrm{C}.\n$$"),(0,s.kt)("p",null,"The optimal score is such that the solver wins if and only if it is profitable to do so, and is given by"),(0,s.kt)("p",null,"$$\n\\textrm{optimalScore} = p \\cdot (\\textrm{successfulQuality} - \\textrm{SC}) -\\textrm{ C}.\n$$"),(0,s.kt)("p",null,"Accounting for the cap, the winning solver's expected payoff is now"),(0,s.kt)("p",null,"$$\np \\cdot (\\max(-c, \\min(c + \\textrm{observedCost}, \\textrm{successfulQuality} - \\textrm{referenceScore}) - \\textrm{SC}) ","\\"," - (1-p) \\cdot \\min(c, \\textrm{referenceScore}) - \\textrm{C}.\n$$"),(0,s.kt)("p",null,"If there is no value of $$\\textrm{referenceScore}$$ such that the above expression is strictly positive, then a solver does not want to participate. If, instead, there are values of $$\\textrm{referenceScore}$$ such that profits are strictly positive, then the logic discussed earlier continues to apply: each solver wants to win if and only if $$\\textrm{referenceScore}$$ is such that profits are strictly positive. Since the above expression is monotonic decreasing in $$\\textrm{rereferenceScore}$$, a solver should compute the $$\\textrm{referenceScore}$$ such that the above expression is zero and submit that value as a score. Formally, the optimal score is now implicitly defined by"),(0,s.kt)("p",null,"$$\np \\cdot (\\max(-c, min(c + \\textrm{observedCost}, \\textrm{successfulQuality} - \\textrm{optimalScore}) - \\textrm{SC}) ","\\"," - (1-p) \\cdot \\min(c, \\textrm{optimalScore}) - \\textrm{C} = 0.\n$$"),(0,s.kt)("p",null,"The above equation always has a solution that is independent of $$\\textrm{referenceScore}$$. This solution is, in general, unique (that is, unique except for very specific parameters, in which case the solution is a closed interval)."," "))}d.isMDXComponent=!0}}]);