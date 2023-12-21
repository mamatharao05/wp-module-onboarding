"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[662],{4401:(e,t,a)=>{a.d(t,{V:()=>i});var n=a(9307),o=a(5634),r=a(6653),l=a(950);const i=e=>{let{title:t,subtitle:a,error:i}=e;return(0,n.createElement)(o.Z,{className:"step-error-state",isVerticallyCentered:!0},(0,n.createElement)(r.Z,{title:t,subtitle:a}),(0,n.createElement)("div",{className:"step-error-state__logo"}),(0,n.createElement)("h3",{className:"step-error-state__error"},i),(0,n.createElement)(l.Z,null))}},1760:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(9307),o=a(4184),r=a.n(o);const l=e=>{let{className:t="",size:a,colGap:o=0,children:l}=e;return(0,n.createElement)("div",{className:r()("nfd-onboarding-grid",t),style:{gridTemplateColumns:`repeat(${a}, 1fr)`,gridColumnGap:`${o}px`}},l)}},9291:(e,t,a)=>{a.d(t,{L:()=>l,Y:()=>n.Z});var n=a(35),o=a(9307),r=a(682);const l=()=>(0,o.createElement)("div",{className:"image-upload-loader--loading-box"},(0,o.createElement)(r.Z,{type:"load",className:"image-upload-loader--loading-box__loader"}))},3124:(e,t,a)=>{a.d(t,{U:()=>C});var n=a(9307),o=a(9818),r=a(4333),l=a(5736),i=a(9291),s=a(4403),u=a(7625),d=a(2200),c=a(4401);var m=a(9250),g=a(3762),h=a(5609),p=a(4184),w=a.n(p),b=a(7207),_=a(7533),v=a(8395),f=a(8297),E=a(6342),y=a(3421),S=a(3568);const N=e=>{let{buttonText:t=(0,l.__)("Exit to WordPress","wp-module-onboarding"),showButtonIcon:a=!0,showButton:r=!0,buttonVariant:i="secondary",buttonClassName:u=!1,isModalOpen:c=!1,modalTitle:p=(0,l.__)("Exit without finishing?","wp-module-onboarding"),modalText:N=!1,modalPrimaryCloseButtonText:C=(0,l.__)("Continue","wp-module-onboarding"),modalOnClose:D=!1,modalExitButtonText:T=(0,l.__)("Exit","wp-module-onboarding")}=e;const[k,x]=(0,n.useState)(c),P=()=>{"function"==typeof D&&D(),x(!1)},V=(0,m.TH)(),{currentData:Z,brandName:B,socialData:O,currentStep:G}=(0,o.useSelect)((e=>({currentData:e(s.h).getCurrentOnboardingData(),brandName:e(s.h).getNewfoldBrandName(),socialData:e(s.h).getOnboardingSocialData(),currentStep:e(s.h).getCurrentStep()})),[]),{setOnboardingSocialData:H}=(0,o.useDispatch)(s.h);return N||(N=(0,l.sprintf)(
/* translators: %s: Brand */
(0,l.__)("You can restart onboarding from your %s Settings page.","wp-module-onboarding"),B)),(0,n.createElement)(n.Fragment,null,r&&(0,n.createElement)(h.Button,{icon:!!a&&g.Z,variant:i,onClick:()=>x(!0),className:w()("nfd-onboarding-etw__trigger",u)},t),k&&(0,n.createElement)(h.Modal,{title:p,onRequestClose:()=>P()},(0,n.createElement)("p",null,N),(0,n.createElement)(h.ButtonGroup,{className:"nfd-onboarding-etw__buttons"},(0,n.createElement)(h.Button,{variant:"secondary",onClick:()=>P()},C),(0,n.createElement)(h.Button,{variant:"primary",onClick:()=>async function(e){if(Z){var t;if(Z.hasExited=(new Date).getTime(),null!=e&&e.includes("basic-info")){const e=await async function(){const e=await(0,v.Gw)(),t=await(0,v.I2)(O);return null!==(null==t?void 0:t.error)?null==e?void 0:e.body:null==t?void 0:t.body}();e&&H(e)}(0,_.kB)(Z),(0,S.a)(null==Z||null===(t=Z.data)||void 0===t?void 0:t.comingSoon)}(0,y.jd)(),(0,f.tH)(new f.Z_(E._C,G.title)),await b.v.dispatchEvents(E.En),window.location.replace(d.br)}(V.pathname)},T))))},C=e=>{let{children:t,navigationStateCallback:a=!1,refresh:m=!0}=e;const g=(0,r.useViewportMatch)("medium"),{storedThemeStatus:h,brandName:p}=(0,o.useSelect)((e=>({storedThemeStatus:e(s.h).getThemeStatus(),brandName:e(s.h).getNewfoldBrandName()})),[]),w=(e=>({loader:{title:(0,l.sprintf)(
/* translators: %s: Brand */
(0,l.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,l.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding")},errorState:{title:(0,l.sprintf)(
/* translators: %s: Brand */
(0,l.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,l.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding"),error:(0,l.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(p),{updateThemeStatus:b,setIsDrawerOpened:_,setIsDrawerSuppressed:v,setIsHeaderNavigationEnabled:f}=(0,o.useDispatch)(s.h),E=()=>{switch(h){case d.Rq:case d.GV:return(()=>{if("function"==typeof a)return a();g&&_(!0),v(!1),f(!0)})();default:_(!1),v(!0),f(!1)}};(0,n.useEffect)((()=>{E(),h===d.a0&&(async()=>{const e=await(async()=>{const e=await(0,u.YL)(d.DY);return null!=e&&e.error?d.vv:e.body.status})();switch(e){case d.Zh:(async()=>{(await(0,u.sN)(d.DY)).error||!0!==m?y():window.location.reload()})();break;case d.GV:!0===m&&window.location.reload();break;default:b(e)}})()}),[h]);const y=async()=>{if(b(d.Zh),(await(0,u.N9)(d.DY,!0,!1)).error)return b(d.Rq);!0===m&&window.location.reload()};return(0,n.createElement)(n.Fragment,null,(()=>{switch(h){case d.vv:return(0,n.createElement)(N,{showButton:!1,isModalOpen:!0,modalTitle:(0,l.__)("It looks like you may have an existing website","wp-module-onboarding"),modalText:(0,l.__)("Going through this setup will change your active theme, WordPress settings, add content – would you like to continue?","wp-module-onboarding"),modalOnClose:y,modalExitButtonText:(0,l.__)("Exit to WordPress","wp-module-onboarding")});case d.Rq:return(0,n.createElement)(c.V,{title:w.errorState.title,subtitle:w.errorState.subtitle,error:w.errorState.error});case d.GV:return t;default:return(0,n.createElement)(i.Y,{title:w.loader.title,subtitle:w.loader.subtitle})}})())}},2662:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var n=a(9307),o=a(9250),r=a(9818),l=a(6138),i=a(4403),s=a(5634),u=a(2200),d=a(6653),c=a(3124),m=a(8797),g=a(8297),h=a(5736);var p=a(6342),w=a(1760);const b=()=>{var e,t;const a=(0,o.TH)(),[b,_]=(0,n.useState)(),[v,f]=(0,n.useState)([]),[E,y]=(0,n.useState)(0),{currentStep:S,currentData:N,themeStatus:C,themeVariations:D}=(0,r.useSelect)((e=>({currentStep:e(i.h).getStepFromPath(a.pathname),currentData:e(i.h).getCurrentOnboardingData(),themeStatus:e(i.h).getThemeStatus(),themeVariations:e(i.h).getStepPreviewData()})),[]),{setDrawerActiveView:T,setSidebarActiveView:k,setCurrentOnboardingData:x,updateThemeStatus:P}=(0,r.useDispatch)(i.h);(0,n.useEffect)((()=>{k(u.Jq),T(u.Yl)}),[]),(0,n.useEffect)((()=>{C===u.GV&&async function(){var e;const t=await(0,l.C)(null==S||null===(e=S.data)||void 0===e?void 0:e.patternId);if(null!=t&&t.error)return P(u.a0);_(function(e){const t=[];return e.forEach((e=>{t.push(e.content),v.push(e.slug)})),f(v),t}(null==t?void 0:t.body)),""!==(null==N?void 0:N.data.sitePages.homepage)?y(null==v?void 0:v.indexOf(null==N?void 0:N.data.sitePages.homepage)):(N.data.sitePages={...N.data.sitePages,homepage:v[0]},x(N))}()}),[C]);const V={heading:(0,h.__)("There’s no place like a great home page","wp-module-onboarding"),subheading:(0,h.__)("Pick a starter layout you can refine and remix with your content","wp-module-onboarding")};return(0,n.createElement)(c.U,null,(0,n.createElement)(m.V3,null,(0,n.createElement)(s.Z,null,(0,n.createElement)("div",{className:"homepage_preview"},(0,n.createElement)(d.Z,{title:V.heading,subtitle:V.subheading}),(0,n.createElement)("div",{className:"homepage_preview__list"},(0,n.createElement)(w.Z,{size:3,colGap:50},(0,n.createElement)(m.r9,{watch:b,count:null===(e=D[null==S||null===(t=S.data)||void 0===t?void 0:t.patternId])||void 0===e?void 0:e.previewCount,callback:function(){return null==b?void 0:b.map(((e,t)=>e?(0,n.createElement)(m.H,{key:t,className:"homepage_preview__list__item",selected:t===E,blockGrammer:e,viewportWidth:1200,styling:"custom",overlay:!1,onClick:()=>function(e){y(e);const t=v[e];N.data.sitePages={...N.data.sitePages,homepage:t},x(N),(0,g.tH)(new g.Z_(p.El,t))}(t)}):null))},className:"homepage_preview__list__item",viewportWidth:1200})))))))}}}]);