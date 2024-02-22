"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[367],{5677:(e,t,a)=>{a.d(t,{W:()=>n});var r=a(1609),s=a(3988),o=a(4639),l=a(9889);const n=({title:e,subtitle:t,error:a})=>(0,r.createElement)(s.A,{className:"step-error-state",isVerticallyCentered:!0},(0,r.createElement)(o.A,{title:e,subtitle:t}),(0,r.createElement)("div",{className:"step-error-state__logo"}),(0,r.createElement)("h3",{className:"step-error-state__error"},a),(0,r.createElement)(l.A,null))},518:(e,t,a)=>{a.d(t,{c:()=>l,S:()=>r.A});var r=a(212),s=a(1609),o=a(431);const l=()=>(0,s.createElement)("div",{className:"image-upload-loader--loading-box"},(0,s.createElement)(o.A,{type:"load",className:"image-upload-loader--loading-box__loader"}))},591:(e,t,a)=>{a.d(t,{U:()=>p});var r=a(1609),s=a(7143),o=a(8468),l=a(9491),n=a(7723),i=a(518),c=a(7675),d=a(7517),u=a(8969),m=a(5677);var h=a(5748);const p=({children:e,navigationStateCallback:t=!1,refresh:a=!0})=>{const p=(0,l.useViewportMatch)("medium"),{storedThemeStatus:_,brandName:b}=(0,s.useSelect)((e=>({storedThemeStatus:e(c.M).getThemeStatus(),brandName:e(c.M).getNewfoldBrandName()})),[]),w=(e=>({loader:{title:(0,n.sprintf)(/* translators: %s: Brand */ /* translators: %s: Brand */
(0,n.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,n.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding")},errorState:{title:(0,n.sprintf)(/* translators: %s: Brand */ /* translators: %s: Brand */
(0,n.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,n.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding"),error:(0,n.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(b),{updateThemeStatus:g,setIsDrawerOpened:S,setIsDrawerSuppressed:f,setIsHeaderNavigationEnabled:E}=(0,s.useDispatch)(c.M),y=()=>{switch(_){case u.SQ:case u.Er:return(()=>{if("function"==typeof t)return t();p&&S(!0),f(!1),E(!0)})();default:S(!1),f(!0),E(!1)}};(0,o.useEffect)((()=>{y(),_===u.So&&(async()=>{const e=await(async()=>{const e=await(0,d.qv)(u.f1);return e?.error?u.mp:e.body.status})();switch(e){case u.fO:(async()=>{(await(0,d.xN)(u.f1)).error||!0!==a?v():window.location.reload()})();break;case u.Er:!0===a&&window.location.reload();break;default:g(e)}})()}),[_]);const v=async()=>{if(g(u.fO),(await(0,d.ai)(u.f1,!0,!1)).error)return g(u.SQ);!0===a&&window.location.reload()};return(0,r.createElement)(o.Fragment,null,(()=>{switch(_){case u.mp:return(0,r.createElement)(h.A,{showButton:!1,isModalOpen:!0,modalTitle:(0,n.__)("It looks like you may have an existing website","wp-module-onboarding"),modalText:(0,n.__)("Going through this setup will change your active theme, WordPress settings, add content – would you like to continue?","wp-module-onboarding"),modalOnClose:v,modalExitButtonText:(0,n.__)("Exit to WordPress","wp-module-onboarding")});case u.SQ:return(0,r.createElement)(m.W,{title:w.errorState.title,subtitle:w.errorState.subtitle,error:w.errorState.error});case u.Er:return e;default:return(0,r.createElement)(i.S,{title:w.loader.title,subtitle:w.loader.subtitle})}})())}},367:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var r=a(1609),s=a(7143),o=a(8468),l=a(148),n=a(6427),i=a(8294),c=a(7044),d=a(2364),u=a(3988),m=a(8969),h=a(2940),p=a(7675),_=a(8520),b=a(591);const w=()=>{const e=(0,d.A)(),t=(0,l.zy)(),[a,w]=(0,o.useState)(),[g,S]=(0,o.useState)(!1),f=(0,l.Zp)(),{currentStep:E,currentData:y,allSteps:v,themeStatus:k}=(0,s.useSelect)((e=>({currentStep:e(p.M).getStepFromPath(t.pathname),currentData:e(p.M).getCurrentOnboardingData(),allSteps:e(p.M).getAllSteps(),themeStatus:e(p.M).getThemeStatus()})),[]),{setDrawerActiveView:x,setSidebarActiveView:N,setCurrentOnboardingData:A,updateThemeStatus:C,updateAllSteps:T}=(0,s.useDispatch)(p.M);(0,o.useEffect)((()=>{N(m.Qe),x(m.PE),D(y.data.customDesign,!1,"flow")}),[]);const D=(e,t=!0,a="click")=>{if(S(e),e){const e=(0,h.xG)(v,i.x.conditionalSteps);T(e.allSteps)}else{const e=(0,h.x9)(v,i.x.conditionalSteps);T(e.allSteps)}t&&(y.data.customDesign=e,A(y)),e&&"click"===a&&f(i.x.conditionalSteps[0].path)};return(0,o.useEffect)((()=>{k===m.Er&&(async()=>{const e=await(0,_.O)(E?.data?.patternId,!0);if(e?.error)return C(m.So);w(e?.body)})()}),[k]),(0,r.createElement)(b.U,null,(0,r.createElement)(c.Th,null,(0,r.createElement)(u.A,{className:"theme-styles-preview"},(0,r.createElement)("div",{className:"theme-styles-preview__checkbox"},(0,r.createElement)(n.CheckboxControl,{label:(0,r.createElement)("div",{className:"theme-styles-preview__checkbox__label"},(0,r.createElement)("span",{className:"theme-styles-preview__checkbox__label__question"},e.checkbox_label,(0,r.createElement)("span",{className:"theme-styles-preview__checkbox__label__hint"},e.checkbox_hint))),checked:g,onChange:()=>D(!g)})),(0,r.createElement)("div",{className:"theme-styles-preview__title-bar"},(0,r.createElement)("div",{className:"theme-styles-preview__title-bar__browser"},(0,r.createElement)("span",{className:"theme-styles-preview__title-bar__browser__dot"}),(0,r.createElement)("span",{className:"theme-styles-preview__title-bar__browser__dot"}),(0,r.createElement)("span",{className:"theme-styles-preview__title-bar__browser__dot"}))),!a&&(0,r.createElement)(c.pA,{styling:"large",viewportWidth:1300}),a&&(0,r.createElement)(c.pA,{blockGrammer:a,styling:"large",viewportWidth:1300}))))}},2364:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(7723);const s=()=>({heading:(0,r.__)("Lets tailor your theme for the perfect fit","wp-module-onboarding"),subheading:(0,r.__)("Start with a style preset or","wp-module-onboarding"),
/* translators: build a custom design is a link, this would be concatenated with "Start with a style preset or" making it
     "Start with a style preset or build a custom design."*/
subheading_link:(0,r.__)("build a custom design.","wp-module-onboarding"),checkbox_label:(0,r.__)("Customize Colors & Fonts?","wp-module-onboarding"),checkbox_hint:(0,r.__)("Check to customize in the next few steps (or leave empty and use the Site Editor later)","wp-module-onboarding")})}}]);