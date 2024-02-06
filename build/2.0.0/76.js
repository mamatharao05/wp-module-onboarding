"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[76],{2076:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(9196),o=n(9250),i=n(9818),s=n(4403),r=n(8449),l=n(7533),c=n(2200),d=n(8297),m=n(6342),u=n(3421),b=n(3967),g=n.n(b),p=n(1984);const v=({text:e,disabled:t,className:n,icon:b})=>{const v=(0,o.s0)(),{nextStep:h,currentData:f}=(0,i.useSelect)((e=>({nextStep:e(s.h).getNextStep(),currentData:e(s.h).getCurrentOnboardingData()})),[]),w=null===h||!1===h;return(0,a.createElement)(r.Z,{className:g()("nfd-nav-card-button",n),handleClick:()=>w?async function(){f&&(f.isComplete=(new Date).getTime(),(0,l.kB)(f)),(0,u.jd)(),(0,d.uW)(new d.Z_(m.pd)),window.location.replace(c.br)}():v(h.path),disabled:t},(0,a.createElement)(a.Fragment,null,(0,a.createElement)("span",{className:`${n}__text`},e),b&&(0,a.createElement)(p.Z,{className:`${n}__icon`,icon:b})))}},2452:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(9196),o=n(682);const i=({title:e,text:t,imgType:n,className:i,animationName:s})=>(0,a.createElement)("div",{className:i},(0,a.createElement)("div",{className:"tab-text"},(0,a.createElement)("h4",null,e),t),(0,a.createElement)("div",{className:"tab-image"},(0,a.createElement)("div",{className:"tab-img"},(0,a.createElement)(o.Z,{type:s},(0,a.createElement)("div",{className:n})))))},1056:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(9196),o=n(2819),i=n(9307),s=n(4333),r=n(9630),l=n(5904);const c=()=>{},d=["menuitem","menuitemradio","menuitemcheckbox"];class m extends i.Component{constructor(){super(...arguments),this.onKeyDown=this.onKeyDown.bind(this),this.bindContainer=this.bindContainer.bind(this),this.getFocusableContext=this.getFocusableContext.bind(this),this.getFocusableIndex=this.getFocusableIndex.bind(this)}componentDidMount(){this.container.addEventListener("keydown",this.onKeyDown),this.container.addEventListener("focus",this.onFocus)}componentWillUnmount(){this.container.removeEventListener("keydown",this.onKeyDown),this.container.removeEventListener("focus",this.onFocus)}bindContainer(e){const{forwardedRef:t}=this.props;this.container=e,"function"==typeof t?t(e):t&&"current"in t&&(t.current=e)}getFocusableContext(e){const{onlyBrowserTabstops:t}=this.props,n=(t?l.focus.tabbable:l.focus.focusable).find(this.container),a=this.getFocusableIndex(n,e);return a>-1&&e?{index:a,target:e,focusables:n}:null}getFocusableIndex(e,t){const n=e.indexOf(t);if(-1!==n)return n}onKeyDown(e){this.props.onKeyDown&&this.props.onKeyDown(e);const{getFocusableContext:t}=this,{cycle:n=!0,eventToOffset:a,onNavigate:o=c,stopNavigationEvents:i}=this.props,s=a(e);if(void 0!==s&&i){e.stopImmediatePropagation();const t=e.target.getAttribute("role");d.includes(t)&&e.preventDefault()}if(!s)return;const r=t(e.target.ownerDocument.activeElement);if(!r)return;const{index:l,focusables:m}=r,u=n?function(e,t,n){const a=e+n;return a<0?t+a:a>=t?a-t:a}(l,m.length,s):l+s;u>=0&&u<m.length&&(m[u].focus(),o(u,m[u]))}render(){const{children:e,...t}=this.props;return(0,a.createElement)("div",{ref:this.bindContainer,...(0,o.omit)(t,["stopNavigationEvents","eventToOffset","onNavigate","onKeyDown","cycle","onlyBrowserTabstops","forwardedRef"])},e)}}const u=(e,t)=>(0,a.createElement)(m,{...e,forwardedRef:t});u.displayName="NavigableContainer";const b=(0,i.forwardRef)(u),g=(0,i.forwardRef)((function({role:e="menu",orientation:t="vertical",...n},i){return(0,a.createElement)(b,{ref:i,stopNavigationEvents:!0,onlyBrowserTabstops:!1,role:e,"aria-orientation":"presentation"===e?null:t,eventToOffset:e=>{const{keyCode:n}=e;let a=[r.DOWN],i=[r.UP];return"horizontal"===t&&(a=[r.RIGHT],i=[r.LEFT]),"both"===t&&(a=[r.RIGHT,r.DOWN],i=[r.LEFT,r.UP]),(0,o.includes)(a,n)?1:(0,o.includes)(i,n)?-1:(0,o.includes)([r.DOWN,r.UP,r.LEFT,r.RIGHT],n)?0:void 0},...n})}));(0,i.forwardRef)((function({eventToOffset:e,...t},n){return(0,a.createElement)(b,{ref:n,stopNavigationEvents:!0,onlyBrowserTabstops:!0,eventToOffset:t=>{const{keyCode:n,shiftKey:a}=t;return r.TAB===n?a?-1:1:e?e(t):void 0},...t})}));var p=n(5609);const v=()=>{},h=({tabId:e,onClick:t,children:n,selected:o,triggerEvent:i,handleEvent:s,tabName:r,...l})=>{const c=f(i,s,r);return(0,a.createElement)(p.Button,{role:"tab",tabIndex:o?null:-1,"aria-selected":o,id:e,...c,...l},n)},f=(e,t,n)=>{const a=(0,i.useCallback)((()=>t(n)),[t,n]);return"click"===e?{onClick:a}:{onMouseOver:a}};function w({className:e,children:t,tabs:n,initialTabName:r,orientation:l="horizontal",activeClass:c="is-active",notActiveClass:d="is-not-active",callback:m,onSelect:u=v,triggerEvent:b="click"}){var p;const f=(0,s.useInstanceId)(w,"tab-panel"),[E,N]=(0,i.useState)(null),_=e=>{N(e),u(e);const t=(0,o.find)(n,{name:e});"function"==typeof m&&m(t)},y=(0,o.find)(n,{name:E}),x=`${f}-${null!==(p=y?.name)&&void 0!==p?p:"none"}`;return(0,i.useEffect)((()=>{(0,o.find)(n,{name:E})||N(r||(n.length>0?n[0].name:null))}),[n]),(0,a.createElement)("div",{className:e},(0,a.createElement)(g,{role:"tablist",orientation:l,onNavigate:(e,t)=>{t.click()},className:"components-tab-panel__tabs"},n.map((e=>(0,a.createElement)(h,{className:`components-tab-panel__tabs-item ${e.name===E&&c} ${e.name!==E&&d}`,tabId:`${f}-${e.name}`,"aria-controls":`${f}-${e.name}-view`,selected:e.name===E,key:e.name,triggerEvent:b,handleEvent:_,tabName:e.name},e.title)))),y&&(0,a.createElement)("div",{key:x,"aria-labelledby":x,role:"tabpanel",id:`${x}-view`,className:"components-tab-panel__tab-content"},t&&t(y)))}},1076:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var a=n(9196),o=n(4403),i=n(9250),s=n(9818),r=n(9307),l=n(444);const c=(0,a.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(l.Path,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}));var d=n(5024),m=n(5634),u=n(349),b=n(9519),g=n(2076),p=n(2452),v=n(1056),h=n(2200),f=n(5736),w=n(1392);var E=n(5378);const N=()=>{const e=(0,i.TH)(),{brandName:t,migrationUrl:n}=(0,s.useSelect)((e=>({brandName:e(o.h).getNewfoldBrandName(),migrationUrl:e(o.h).getMigrationUrl()})),[e.pathname]),{setDrawerActiveView:l,setSidebarActiveView:N,setIsDrawerSuppressed:_,setIsHeaderNavigationEnabled:y,setHeaderActiveView:x,setIsHeaderEnabled:T}=(0,s.useDispatch)(o.h);(0,r.useEffect)((()=>{N(h.Jq),y(!0),_(!0),l(h.mz),x(h.wN),T(!0)}),[]);const k=(e=>({heading:(0,f.sprintf)(/* translators: %s: website or store */ /* translators: %s: website or store */
(0,f.__)("Make your %s dreams a reality!","wp-module-onboarding"),(0,w.I)("website")),subheading:(0,f.sprintf)(/* translators: %s: Brand */ /* translators: %s: Brand */
(0,f.__)("with WordPress and %s.","wp-module-onboarding"),e),migrateButtonText:(0,f.__)("Migrate a WordPress Site","wp-module-onboarding"),startButtonText:(0,f.__)("Start Setup","wp-module-onboarding"),tabs:[{name:"tab1",title:(0,f.__)("YOUR CONTENT","wp-module-onboarding"),subtitle:(0,f.__)("Publish boldly with WordPress Blocks.","wp-module-onboarding"),text:(0,f.sprintf)(/* translators: %s: site or store */ /* translators: %s: site or store */
(0,f.__)("Build a beautiful %s using a visual builder. Block Patterns accelerate telling your story or tending your store with professional designs.","wp-module-onboarding"),(0,w.I)("site")),imgType:"content-img",animationName:"fade-in-right"},{name:"tab2",title:(0,f.__)("POWERFUL FEATURES","wp-module-onboarding"),subtitle:(0,f.__)("Proven, easy-to-use solutions.","wp-module-onboarding"),text:(0,f.sprintf)(/* translators: 1: site or store 2: Brand */ /* translators: 1: site or store 2: Brand */
(0,f.__)("Reach for your %1$s goals using proven WordPress Plugins & %2$s solutions. Send a newsletter, host a podcast, book clients, take payments and more.","wp-module-onboarding"),(0,w.I)("site"),e),imgType:"features-img",animationName:"fade-in-up"},{name:"tab3",title:(0,f.__)("MODERN DESIGN","wp-module-onboarding"),subtitle:(0,f.__)("Paint trim. Move walls. No sweat.","wp-module-onboarding"),text:(0,f.sprintf)(/* translators: %s: site or store */ /* translators: %s: site or store */
(0,f.__)("Establish your %s's unique design. Use the WordPress Editor to refine over time with professionally-designed patterns, parts, templates, colors and type.","wp-module-onboarding"),(0,w.I)("site")),imgType:"design-img",animationName:"fade-in-left"}]}))(t);return(0,a.createElement)(m.Z,{isBgPrimary:!0,isCentered:!0},(0,a.createElement)(u.Z,null,(0,a.createElement)("div",{className:"welcome-card"},(0,a.createElement)(b.Z,{heading:k.heading,subHeading:k.subheading}),(0,a.createElement)(v.Z,{className:"nfd-onboarding-overview__tab-panel",tabs:k.tabs.map((e=>({name:e.name,title:e.title,content:(0,a.createElement)(p.Z,{title:e.subtitle,text:e.text,imgType:e.imgType,animationName:e.animationName,className:"tab-data"})})))},(e=>(0,a.createElement)("div",null,e.content))),(0,a.createElement)("div",{className:"nfd-onboarding-overview__buttons"},n&&(0,a.createElement)(E.default,{className:"nfd-onboarding-overview__buttons--white",text:k.migrateButtonText,icon:c,onClick:()=>window.open(n,"_blank")}),(0,a.createElement)(g.Z,{className:"nfd-onboarding-overview__buttons--background",text:k.startButtonText,icon:d.Z})))))}}}]);