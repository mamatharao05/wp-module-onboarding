"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[507],{9978:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(9307),i=n(4184),s=n.n(i),l=n(9250),r=n(9818),o=n(5609),c=n(1984),d=n(5024),u=n(4403);const m=e=>{let{text:t,className:n,callback:i=null,disabled:m=!1,icon:g=!0}=e;const p=(0,l.s0)(),{nextStep:f}=(0,r.useSelect)((e=>({nextStep:e(u.h).getNextStep()})));return(0,a.createElement)(o.Button,{className:s()("nfd-onboarding-button--site-gen-next",{"nfd-onboarding-button--site-gen-next--disabled":m},n),onClick:()=>{m||(i&&"function"==typeof i&&i(),f&&p(f.path))}},t,g&&(0,a.createElement)(c.Z,{className:"nfd-onboarding-button--site-gen-next--icon",icon:d.Z}))}},3467:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(9307);const i=e=>{let{title:t}=e;return(0,a.createElement)("div",{className:"ai-heading"},(0,a.createElement)("div",{className:"ai-heading--icon"}),(0,a.createElement)("div",{className:"ai-heading--title"},t))}},7507:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(9307),i=n(4333),s=n(9818),l=n(5736);var r=n(682),o=n(2200),c=n(4403),d=n(3467),u=n(5634),m=n(4184),g=n.n(m);const p=(0,a.memo)((e=>{let{hint:t,height:n,placeholder:i,customerInput:s,setCustomerInput:l}=e;const r=(0,a.useRef)(null),[o,c]=(0,a.useState)("nfd-sg-input-box__field");(0,a.useEffect)((()=>{r.current.style.height=n;const e=r.current.scrollHeight;r.current.style.height=e+"px"}),[s]);const d=e=>{const t="nfd-sg-input-box__info-icon--selected";switch(e){case 1:if((null==s?void 0:s.length)>30)return t;break;case 2:if((null==s?void 0:s.length)>60)return t;break;case 3:if((null==s?void 0:s.length)>100)return t}};return(0,a.createElement)("div",{className:"nfd-sg-input"},(0,a.createElement)("label",{htmlFor:o},(0,a.createElement)("div",{className:"nfd-sg-input-box"},(0,a.createElement)("textarea",{type:"text",className:o,ref:r,style:{height:"47px"},placeholder:i,value:s,onChange:e=>(e=>{e.preventDefault(),l(e.target.value),c("nfd-sg-input-box__field")})(e)})),s?(0,a.createElement)("div",{className:"nfd-sg-input-box__info"},(0,a.createElement)("div",{className:"nfd-sg-input-box__info-text"},"Detail"),(0,a.createElement)("div",{className:g()("nfd-sg-input-box__info-icon",d(1))}),(0,a.createElement)("div",{className:g()("nfd-sg-input-box__info-icon",d(2))}),(0,a.createElement)("div",{className:g()("nfd-sg-input-box__info-icon",d(3))})):(0,a.createElement)("p",{className:"nfd-sg-input-box__hint"},t)))}));var f=n(9978);const h=()=>{const e={heading:(0,l.__)("Tell me some details about the site you want created?","wp-module-onboarding"),inputPlaceholder:(0,l.__)("I want a site for my company that sells…","wp-module-onboarding"),inputHint:(0,l.__)("The more detail the better","wp-module-onboarding"),buttonText:(0,l.__)("Next","wp-module-onboarding")},t=(0,i.useViewportMatch)("small"),[n,m]=(0,a.useState)(),{currentData:g}=(0,s.useSelect)((e=>({currentData:e(c.h).getCurrentOnboardingData()}))),{setFooterNavEnabled:h,setIsHeaderEnabled:b,setSidebarActiveView:v,setHeaderActiveView:x,setDrawerActiveView:_,setCurrentOnboardingData:E}=(0,s.useDispatch)(c.h);return(0,a.useEffect)((()=>{var e;if(b(!0),v(!1),x(o.G5),_(!1),""!==(null===(e=g.sitegen.siteDetails)||void 0===e?void 0:e.prompt))return m(g.sitegen.siteDetails.prompt);h(!1)}),[]),(0,a.useEffect)((()=>{h(""!==n),g.sitegen.siteDetails.prompt=n,E(g)}),[n]),(0,a.createElement)(u.Z,{isCentered:!0},(0,a.createElement)(r.Z,{type:"fade-in"},(0,a.createElement)("div",{className:"nfd-sg-site-details"},(0,a.createElement)(d.Z,{title:e.heading}),(0,a.createElement)(p,{placeholder:e.inputPlaceholder,hint:e.inputHint,height:"40px",customerInput:n,setCustomerInput:m}),t&&(0,a.createElement)("div",{className:"nfd-sg-site-details-endrow"},(0,a.createElement)(f.Z,{className:"nfd-sg-site-details--next-btn",text:e.buttonText,disabled:void 0===n||""===n})))))}}}]);