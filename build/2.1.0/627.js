"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[627],{1852:(e,a,t)=>{t.d(a,{A:()=>b});var s=t(1609),r=t(148),n=t(7143),i=t(7675),l=t(264),c=t(6079),o=t(8969),u=t(1056),p=t(2202),d=t(8559),y=t(6942),g=t.n(y),m=t(7677);const b=({text:e,disabled:a,className:t,icon:y})=>{const b=(0,r.Zp)(),{nextStep:v,currentData:T}=(0,n.useSelect)((e=>({nextStep:e(i.M).getNextStep(),currentData:e(i.M).getCurrentOnboardingData()})),[]),f=null===v||!1===v;return(0,s.createElement)(l.A,{className:g()("nfd-nav-card-button",t),handleClick:()=>f?async function(){T&&(T.isComplete=(new Date).getTime(),(0,c.V1)(T)),(0,d.YR)(),(0,u.SV)(new u.iC(p.Vg)),window.location.replace(o.R0)}():b(v.path),disabled:a},(0,s.createElement)(s.Fragment,null,(0,s.createElement)("span",{className:`${t}__text`},e),y&&(0,s.createElement)(m.A,{className:`${t}__icon`,icon:y})))}},5627:(e,a,t)=>{t.r(a),t.d(a,{default:()=>T});var s=t(1609),r=t(3988),n=t(5842),i=t(8969),l=t(671),c=t(7675),o=t(7143),u=t(8468),p=t(9927),d=t(1852),y=t(9889),g=t(431),m=t(6094),b=t(1056),v=t(2202);const T=()=>{const{setDrawerActiveView:e,setSidebarActiveView:a,setIsDrawerSuppressed:t,setIsHeaderNavigationEnabled:T,setCurrentOnboardingData:f}=(0,o.useDispatch)(c.M);(0,u.useEffect)((()=>{a(i.Qe),t(!0),e(i.lf),T(!0),P()}),[]);const h=(0,l.A)(),[_,w]=(0,u.useState)(!1),[E,C]=(0,u.useState)(),[N,k]=(0,u.useState)(),[S,x]=(0,u.useState)(),[A,I]=(0,u.useState)(""),[D,O]=(0,u.useState)(),{currentData:R}=(0,o.useSelect)((e=>({currentData:e(c.M).getCurrentOnboardingData()})),[]),P=async()=>{var e;const a=await(0,m._)(),t=Object.keys(a?.body?.types)[0];x(t),C(a?.body);const s=Object.keys(a?.body?.types);if(k(s),"string"==typeof R?.data?.siteType?.primary){const e=R?.data?.siteType?.primary;R.data.siteType.primary={refers:"custom",value:e},f(R)}if("string"==typeof R?.data?.siteType?.secondary){const e=R?.data?.siteType?.secondary;R.data.siteType.secondary={refers:"custom",value:e},f(R)}I(null!==(e=R?.data?.siteType?.secondary?.value)&&void 0!==e?e:""),""!==R?.data?.siteType?.primary?.value&&("custom"!==R?.data?.siteType?.primary?.refers?x(R?.data?.siteType?.primary?.value):(x(t),H(R?.data?.siteType?.secondary?.value))),"custom"===R?.data?.siteType?.secondary?.refers&&H(R?.data?.siteType?.secondary?.value)},H=e=>{w(!0),R.data.siteType.secondary.refers="custom",R.data.siteType.secondary.value=e,f(R),""!==A&&A!==e&&(clearTimeout(D),O(setTimeout((()=>{(0,b.v)(new b.iC(v.aq,e))}),1e3))),I(e)},M=e=>{if(A===e&&R.data.siteType.primary.value===S)return!0;w(!1),I(e),R.data.siteType.secondary.refers="slug",R.data.siteType.primary.value!==S&&(R.data.siteType.primary.refers="slug",R.data.siteType.primary.value=S,(0,b.v)(new b.iC(v.gH,S))),R.data.siteType.secondary.value=e,f(R),(0,b.v)(new b.iC(v.aq,e))},q=e=>{const a=N.findIndex((e=>S===e));let t;switch(e){case"back":t=N[(a-1+N.length)%N.length],x(t);break;case"next":t=N[(a+1)%N.length],x(t)}(0,b.v)(new b.iC(v.gH,t))};return(0,s.createElement)(r.A,{isBgPrimary:!0,isCentered:!0},(0,s.createElement)(n.A,null,(0,s.createElement)("div",{className:"nfd-card-heading center"},(0,s.createElement)(p.A,{heading:h.heading,subHeading:h.subheading,question:h.question})),(0,s.createElement)(g.A,{type:"fade-in-disabled",after:E},(0,s.createElement)("div",{className:"nfd-setup-secondary-categories"},(0,s.createElement)("div",{className:"nfd-card-sec-category-wrapper"},E&&(0,s.createElement)("div",{className:"category-scrolling-wrapper"},N&&N.length>1&&(0,s.createElement)("div",{className:"category-scrolling-wrapper__left-btn"},(0,s.createElement)("span",{className:"category-scrolling-wrapper__left-btn-icon",onClick:()=>q("back"),onKeyUp:()=>q("back"),role:"button",tabIndex:0,style:{backgroundImage:"var(--chevron-left-icon)"}})),(0,s.createElement)("div",{className:"category-scrolling-wrapper__type"},(0,s.createElement)("span",{className:"category-scrolling-wrapper__type-icon",style:{backgroundImage:`url(${E?.types[S]?.icon})`}}),(0,s.createElement)("p",{className:"category-scrolling-wrapper__type-text"},` ${E?.types[S]?.label}`)),N&&N.length>1&&(0,s.createElement)("div",{className:"category-scrolling-wrapper__right-btn"},(0,s.createElement)("span",{className:"category-scrolling-wrapper__right-btn-icon",onClick:()=>q("next"),onKeyUp:()=>q("next"),role:"button",tabIndex:0,style:{backgroundImage:"var(--chevron-right-icon)"}})))),(0,s.createElement)("div",{className:"subCategoriesSection"},E&&(()=>{const e=E?.types[S]?.secondaryTypes;return Object.keys(e).map(((a,t)=>(0,s.createElement)("div",{key:e[a]?.slug,"data-slug":e[a]?.slug,role:"button",tabIndex:t+1,className:(e[a].slug!==A||_?"":"chosenSecondaryCategory ")+"nfd-card-sec-category",onClick:()=>M(e[a].slug),onKeyDown:()=>M(e[a].slug)},(0,s.createElement)("span",{className:"categName"},e[a]?.label))))})()),(0,s.createElement)("div",{className:"nfd-setup-primary-custom"},(0,s.createElement)("div",{className:"nfd-setup-primary-custom__tellus-text"},h.customInputLabel),(0,s.createElement)("input",{type:"search",onChange:e=>H(e?.target?.value),className:"nfd-setup-primary-custom__tellus-input",placeholder:h.customInputPlaceholderText,value:_?A:""})))),(0,s.createElement)(d.A,{text:h.buttonText}),(0,s.createElement)(y.A,null)))}},671:(e,a,t)=>{t.d(a,{A:()=>n});var s=t(7723),r=t(3474);const n=()=>({heading:(0,s.sprintf)(/* translators: %s: website or store */ /* translators: %s: website or store */
(0,s.__)("Help us tailor this setup to your %s","wp-module-onboarding"),(0,r.P)("site")),subheading:(0,s.sprintf)(/* translators: %s: SITE or STORE */ /* translators: %s: SITE or STORE */
(0,s.__)("ABOUT YOUR %s","wp-module-onboarding"),(0,r.P)("SITE")),question:(0,s.sprintf)(/* translators: %s: site or store */ /* translators: %s: site or store */
(0,s.__)("What type of %s is it?","wp-module-onboarding"),(0,r.P)("site")),buttonText:(0,s.__)("Continue Setup","wp-module-onboarding"),customInputPlaceholderText:(0,s.sprintf)(/* translators: %s: site or store */ /* translators: %s: site or store */
(0,s.__)("Enter to search your %s type","wp-module-onboarding"),(0,r.P)("site")),customInputLabel:(0,s.__)("or tell us here:","wp-module-onboarding")})},6094:(e,a,t)=>{t.d(a,{_:()=>c});var s=t(5435),r=t(8674);const n=JSON.parse('{"body":{"types":{"business":{"slug":"business","label":"Business","icon":"https://cdn.hiive.space/site-classification/business.svg","emoji":"💼","schema":"Corporation","secondaryTypes":{"agency-consulting":{"primaryType":"business","slug":"agency-consulting","label":"Agency & Consulting"},"arts-crafts":{"primaryType":"business","slug":"arts-crafts","label":"Arts & Crafts"},"autos-repair":{"primaryType":"business","slug":"autos-repair","label":"Autos & Repair"},"child-care":{"primaryType":"business","slug":"child-care","label":"Child Care"},"events":{"primaryType":"business","slug":"events","label":"Events"},"finance":{"primaryType":"business","slug":"finance","label":"Finance"},"garden-florist":{"primaryType":"business","slug":"garden-florist","label":"Florist & Garden Center"},"hr-recruiting":{"primaryType":"business","slug":"hr-recruiting","label":"HR & Recruiting"},"insurance":{"primaryType":"business","slug":"insurance","label":"Insurance"},"legal":{"primaryType":"business","slug":"legal","label":"Legal"},"marketing":{"primaryType":"business","slug":"marketing","label":"Marketing"},"outdoors":{"primaryType":"business","slug":"outdoors","label":"Outdoors"},"pr-communications":{"primaryType":"business","slug":"pr-communications","label":"PR & Communications"},"real-estate-management":{"primaryType":"business","slug":"real-estate-management","label":"Real Estate & Management"},"shopping-retail":{"primaryType":"business","slug":"shopping-retail","label":"Shopping & Retail"},"trades-repair-services":{"primaryType":"business","slug":"trades-repair-services","label":"Trades & Repair Services"},"weddings":{"primaryType":"business","slug":"weddings","label":"Weddings"}}}}}}');var i=t(1455),l=t.n(i);async function c(){const e=await(0,s.h)(l()({url:(0,r.fG)("site-classification")}));return 0===e.body.length?n:e}}}]);