"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[396],{9396:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(1609),o=n(8468),l=n(7143),s=n(6427),c=n(7675),r=n(7723);const _=({baseClassName:e,group:t,selectedGroup:n,handleGroupSelect:o})=>(0,a.createElement)("div",{className:`${e}__font-group__container`,key:t.id},(0,a.createElement)("div",{className:`${e}__font-group__container__button`,role:"presentation",onClick:()=>o(t.id)},(0,a.createElement)("span",{className:`${e}__font-group__container__button__icon${n===t.id?" selected":""}`}),(0,a.createElement)("div",{className:`${e}__font-group__container__button__font-name__container`},(0,a.createElement)("span",{className:`${e}__font-group__container__button__font-name__container__heading`,style:{fontFamily:t.headings}},t.headings),(0,a.createElement)("br",null),(0,a.createElement)("span",{className:`${e}__font-group__container__button__font-name__container__body`,style:{fontFamily:t.body}},t.body)),0===t.id&&(0,a.createElement)("span",{className:"default"},(0,r.__)("Default","wp-module-onboarding")))),i=({baseClassName:e,customFont:t,setCustomFont:n,handleCancelCustomFonts:o,handleApplyCustomFonts:l,renderFontOptions:c})=>(0,a.createElement)("div",{className:`${e}__fonts-form__container`},(0,a.createElement)("h5",{className:`${e}__heading`},(0,r.__)("CUSTOM FONTS","wp-module-onboarding")),(0,a.createElement)("div",null,(0,a.createElement)("div",null,(0,a.createElement)("div",null,(0,a.createElement)("span",{htmlFor:"headings"},(0,r.__)("Headings","wp-module-onboarding")),(0,a.createElement)("br",null),(0,a.createElement)("select",{id:"headings",value:t.headings,onChange:e=>n({...t,headings:e.target.value})},(0,a.createElement)("option",null,"select"),c())),(0,a.createElement)("div",null,(0,a.createElement)("span",{htmlFor:"body"},(0,r.__)("Body","wp-module-onboarding")),(0,a.createElement)("br",null),(0,a.createElement)("select",{id:"body",value:t.body,onChange:e=>n({...t,body:e.target.value})},(0,a.createElement)("option",null,(0,r.__)("select","wp-module-onboarding")),c()))),(0,a.createElement)("div",{className:`${e}__fonts-form__container__button__container`},(0,a.createElement)(s.Button,{className:"cancel",onClick:()=>o()},(0,r.__)("Cancel","wp-module-onboarding")),(0,a.createElement)(s.Button,{className:"apply",onClick:l,variant:"primary"},(0,r.__)("Apply","wp-module-onboarding"))))),m=({baseClassName:e,selectedGroup:t,selectedCustomFont:n,handleGroupSelect:o,handleEditCustomFont:l})=>(0,a.createElement)("div",{className:`${e}__custom-fonts__container`},(0,a.createElement)("div",{className:`${e}__custom-fonts__container__header`},(0,a.createElement)("h5",{className:`${e}__heading`},(0,a.createElement)("span",null,(0,r.__)("CUSTOM FONTS","wp-module-onboarding"))),(0,a.createElement)("button",{onClick:()=>l()},(0,r.__)("Edit fonts","wp-module-onboarding"))),(0,a.createElement)("div",{className:`${e}__font-group__container`},(0,a.createElement)("div",{className:`${e}__font-group__container__button`,role:"presentation",onClick:()=>o("custom")},(0,a.createElement)("span",{className:`${e}__font-group__container__button__icon${"custom"===t?" selected":""}`}),(0,a.createElement)("div",{className:`${e}__font-group__container__button__font-name__container`},(0,a.createElement)("span",{className:`${e}__font-group__container__button__font-name__container__heading`,style:{fontFamily:n.headings}},n.headings),(0,a.createElement)("br",null),(0,a.createElement)("span",{className:`${e}__font-group__container__button__font-name__container__body`,style:{fontFamily:n.body}},n.body))))),d=(0,a.forwardRef)((({baseClassName:e="nfd-onboarding-sidebar--customize__design-fonts-panel"},t)=>{const n=()=>{d(),E(null);const e=u.sitegen?.homepages?.active?.slug;e&&(u.sitegen.homepages.data[e].selectedFontGroup=null,u.sitegen.homepages.active.selectedFontGroup=null,b(u))},d=(e="",t="")=>{const n=u.sitegen?.homepages?.active?.slug;if(!n)return;const a={blocks:[{"core/heading":{typography:{fontFamily:e}},"core/body":{typography:{fontFamily:t}}}]},o={...u.sitegen.homepages.data[n],styles:a};u.sitegen.homepages.data[n]=o,u.sitegen.homepages.active=o,b(u)};(0,a.useImperativeHandle)(t,(()=>({resetToDefaultFonts:n})));const{currentData:u,customizeSidebarData:g}=(0,l.useSelect)((e=>({customizeSidebarData:e(c.M).getCustomizeSidebarData(),currentData:e(c.M).getCurrentOnboardingData()}))),p=g?.designStyles,{setCurrentOnboardingData:b}=(0,l.useDispatch)(c.M),f=p.map(((e,t)=>({id:t,headings:e.font_heading_name||e.font_heading,body:e.font_content_name||e.font_content,headingsSlug:e.font_heading,bodySlug:e.font_content}))),[h,E]=(0,o.useState)(null),[y,v]=(0,o.useState)(!1),[C,N]=(0,o.useState)({headings:"",body:""}),[F,$]=(0,o.useState)(null),[w,S]=(0,o.useState)(!1),k=p?.map((e=>e.font_heading)),G=p?.map((e=>e.font_content));(0,o.useEffect)((()=>{const e=u.sitegen.homepages.active.customFont,t=u.sitegen.homepages.active.selectedFontGroup;!C.headings&&e&&(N(e),$(e)),h||!t&&0!==t||(E(t),"custom"===t&&v(!0))}),[u]),(0,o.useEffect)((()=>{null!=h&&(()=>{let e,t;const n=u.sitegen?.homepages?.active?.slug;"custom"===h?(e=`var(--wp--preset--font-family--${C.headings})`,t=`var(--wp--preset--font-family--${C.body})`,n&&(u.sitegen.homepages.data[n].customFont=C,u.sitegen.homepages.active.customFont=C)):(e=`var(--wp--preset--font-family--${f[h].headingsSlug})`,t=`var(--wp--preset--font-family--${f[h].bodySlug})`),u.sitegen.homepages.data[n].selectedFontGroup=h,u.sitegen.homepages.active.selectedFontGroup=h,d(e,t)})()}),[h,C]);const O=[...new Set([...k,...G])],D=e=>{"custom"!==e&&F&&v(!1),E(e)};return(0,a.createElement)(s.PanelBody,{className:e,initialOpen:!0},(0,a.createElement)(s.PanelRow,null,(0,a.createElement)("div",{className:`${e}__container`},(0,a.createElement)("div",{className:`${e}__container__text`},(0,a.createElement)("p",{className:`${e}__container__text__heading`},(0,a.createElement)("strong",null,(0,r.__)("Fonts","wp-module-onboarding")))),(0,a.createElement)("div",null,f.map((t=>(0,a.createElement)(_,{baseClassName:e,key:t.id,group:t,selectedGroup:h,handleGroupSelect:D})))))),(0,a.createElement)(s.PanelRow,null,!y&&(0,a.createElement)("div",{className:`${e}__container`},(0,a.createElement)(s.Button,{onClick:()=>{v(!0),F||S(!0)}},(0,r.__)("Select your own fonts","wp-module-onboarding"))),y&&w&&(0,a.createElement)(i,{baseClassName:e,customFont:C,setCustomFont:N,handleCancelCustomFonts:()=>{F?S(!1):v(!1)},handleApplyCustomFonts:()=>{E(null),$(C),S(!1),E("custom")},renderFontOptions:()=>O.map((e=>(0,a.createElement)("option",{key:e,value:e},e)))}),y&&!w&&(0,a.createElement)(m,{baseClassName:e,selectedGroup:h,selectedCustomFont:F,handleGroupSelect:D,handleEditCustomFont:()=>{S(!0)}})))}))}}]);