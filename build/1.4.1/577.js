"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[577],{5791:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(9307),r=t(4184),s=t.n(r),i=t(5158),o=t(6974),d=t(2200),c=t(6989),l=t.n(c),u=t(4704);const h=e=>{let{className:n="nfd-onboarding-layout__base",children:t}=e;const r=(0,o.TH)(),c=document.querySelector(".nfd-onboard-content");return(0,a.useEffect)((()=>{null==c||c.focus({preventScroll:!0}),function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Showing new Onboarding Page";(0,i.speak)(n,"assertive")}(r,"Override"),new class{constructor(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.eventSlug=e,this.eventData=n}send(){l()({url:(0,u.F)("events"),method:"POST",data:{slug:this.eventSlug,data:this.eventData}}).catch((e=>{console.error(e)}))}}(`${d.Db}-pageview`,{stepID:r.pathname,previousStepID:window.nfdOnboarding.previousStepID}).send(),window.nfdOnboarding.previousStepID=r.pathname}),[r.pathname]),(0,a.createElement)("div",{className:s()("nfd-onboarding-layout",n)},t)};var m=t(682);const g=e=>{let{children:n}=e;return(0,a.createElement)("section",{className:"is-contained"},n)},p=e=>{let{className:n="",children:t,isBgPrimary:r=!1,isCentered:i=!1,isVerticallyCentered:o=!1,isContained:d=!1,isPadded:c=!1,isFadeIn:l=!0}=e;const u=d?g:a.Fragment;return(0,a.createElement)(m.Z,{type:l&&"fade-in",duration:"233ms",timingFunction:"ease-in-out"},(0,a.createElement)(h,{className:s()("nfd-onboarding-layout__common",n,{"is-bg-primary":r},{"is-centered":i},{"is-vertically-centered":o},{"is-padded":c})},(0,a.createElement)(u,null,t)))}},7577:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var a=t(9307),r=t(5791),s=t(2200),i=t(9685),o=t(9818);const d=()=>{const{setIsDrawerOpened:e,setDrawerActiveView:n,setSidebarActiveView:t}=(0,o.useDispatch)(i.h);return(0,a.useEffect)((()=>{t(s.Jq),e(!0),n(s.BP)}),[]),(0,a.createElement)(r.Z,{isCentered:!0},"What To Expect")}}}]);