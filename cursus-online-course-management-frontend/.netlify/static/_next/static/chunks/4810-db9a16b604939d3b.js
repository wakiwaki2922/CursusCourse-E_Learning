"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4810],{92120:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},55206:function(e,t,n){n.d(t,{F:function(){return u},e:function(){return i}});var r=n(2265);function u(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function i(...e){return r.useCallback(u(...e),e)}},48970:function(e,t,n){n.d(t,{b:function(){return o},k:function(){return i}});var r=n(2265),u=n(57437);function i(e,t){let n=r.createContext(t);function i(e){let{children:t,...i}=e,o=r.useMemo(()=>i,Object.values(i));return(0,u.jsx)(n.Provider,{value:o,children:t})}return i.displayName=e+"Provider",[i,function(u){let i=r.useContext(n);if(i)return i;if(void 0!==t)return t;throw Error(`\`${u}\` must be used within \`${e}\``)}]}function o(e,t=[]){let n=[],i=()=>{let t=n.map(e=>r.createContext(e));return function(n){let u=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:u}}),[n,u])}};return i.scopeName=e,[function(t,i){let o=r.createContext(i),l=n.length;function s(t){let{scope:n,children:i,...s}=t,a=n?.[e][l]||o,c=r.useMemo(()=>s,Object.values(s));return(0,u.jsx)(a.Provider,{value:c,children:i})}return n=[...n,i],s.displayName=t+"Provider",[s,function(n,u){let s=u?.[e][l]||o,a=r.useContext(s);if(a)return a;if(void 0!==i)return i;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let u=n.reduce((t,{useScope:n,scopeName:r})=>{let u=n(e)[`__scope${r}`];return{...t,...u}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return n.scopeName=t.scopeName,n}(i,...t)]}},98812:function(e,t,n){n.d(t,{I0:function(){return E},XB:function(){return f},fC:function(){return h}});var r,u=n(2265),i=n(92120),o=n(48712),l=n(55206),s=n(68312),a=n(57437),c="dismissableLayer.update",d=u.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=u.forwardRef((e,t)=>{var n,f;let{disableOutsidePointerEvents:v=!1,onEscapeKeyDown:h,onPointerDownOutside:E,onFocusOutside:y,onInteractOutside:b,onDismiss:w,...g}=e,C=u.useContext(d),[P,x]=u.useState(null),W=null!==(f=null==P?void 0:P.ownerDocument)&&void 0!==f?f:null===(n=globalThis)||void 0===n?void 0:n.document,[,L]=u.useState({}),N=(0,l.e)(t,e=>x(e)),k=Array.from(C.layers),[j]=[...C.layersWithOutsidePointerEventsDisabled].slice(-1),D=k.indexOf(j),O=P?k.indexOf(P):-1,R=C.layersWithOutsidePointerEventsDisabled.size>0,S=O>=D,T=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,s.W)(e),i=u.useRef(!1),o=u.useRef(()=>{});return u.useEffect(()=>{let e=e=>{if(e.target&&!i.current){let t=function(){m("dismissableLayer.pointerDownOutside",r,u,{discrete:!0})},u={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",o.current),o.current=t,n.addEventListener("click",o.current,{once:!0})):t()}else n.removeEventListener("click",o.current);i.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",o.current)}},[n,r]),{onPointerDownCapture:()=>i.current=!0}}(e=>{let t=e.target,n=[...C.branches].some(e=>e.contains(t));!S||n||(null==E||E(e),null==b||b(e),e.defaultPrevented||null==w||w())},W),$=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,s.W)(e),i=u.useRef(!1);return u.useEffect(()=>{let e=e=>{e.target&&!i.current&&m("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}(e=>{let t=e.target;[...C.branches].some(e=>e.contains(t))||(null==y||y(e),null==b||b(e),e.defaultPrevented||null==w||w())},W);return!function(e,t=globalThis?.document){let n=(0,s.W)(e);u.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{O!==C.layers.size-1||(null==h||h(e),!e.defaultPrevented&&w&&(e.preventDefault(),w()))},W),u.useEffect(()=>{if(P)return v&&(0===C.layersWithOutsidePointerEventsDisabled.size&&(r=W.body.style.pointerEvents,W.body.style.pointerEvents="none"),C.layersWithOutsidePointerEventsDisabled.add(P)),C.layers.add(P),p(),()=>{v&&1===C.layersWithOutsidePointerEventsDisabled.size&&(W.body.style.pointerEvents=r)}},[P,W,v,C]),u.useEffect(()=>()=>{P&&(C.layers.delete(P),C.layersWithOutsidePointerEventsDisabled.delete(P),p())},[P,C]),u.useEffect(()=>{let e=()=>L({});return document.addEventListener(c,e),()=>document.removeEventListener(c,e)},[]),(0,a.jsx)(o.WV.div,{...g,ref:N,style:{pointerEvents:R?S?"auto":"none":void 0,...e.style},onFocusCapture:(0,i.M)(e.onFocusCapture,$.onFocusCapture),onBlurCapture:(0,i.M)(e.onBlurCapture,$.onBlurCapture),onPointerDownCapture:(0,i.M)(e.onPointerDownCapture,T.onPointerDownCapture)})});f.displayName="DismissableLayer";var v=u.forwardRef((e,t)=>{let n=u.useContext(d),r=u.useRef(null),i=(0,l.e)(t,r);return u.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,a.jsx)(o.WV.div,{...e,ref:i})});function p(){let e=new CustomEvent(c);document.dispatchEvent(e)}function m(e,t,n,r){let{discrete:u}=r,i=n.originalEvent.target,l=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),u?(0,o.jH)(i,l):i.dispatchEvent(l)}v.displayName="DismissableLayerBranch";var h=f,E=v},68662:function(e,t,n){n.d(t,{h:function(){return s}});var r=n(2265),u=n(54887),i=n(48712),o=n(28727),l=n(57437),s=r.forwardRef((e,t)=>{var n,s;let{container:a,...c}=e,[d,f]=r.useState(!1);(0,o.b)(()=>f(!0),[]);let v=a||d&&(null===(s=globalThis)||void 0===s?void 0:null===(n=s.document)||void 0===n?void 0:n.body);return v?u.createPortal((0,l.jsx)(i.WV.div,{...c,ref:t}),v):null});s.displayName="Portal"},48712:function(e,t,n){n.d(t,{WV:function(){return l},jH:function(){return s}});var r=n(2265),u=n(54887),i=n(13350),o=n(57437),l=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...u}=e,l=r?i.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,o.jsx)(l,{...u,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function s(e,t){e&&u.flushSync(()=>e.dispatchEvent(t))}},13350:function(e,t,n){n.d(t,{A4:function(){return s},g7:function(){return o}});var r=n(2265),u=n(55206),i=n(57437),o=r.forwardRef((e,t)=>{let{children:n,...u}=e,o=r.Children.toArray(n),s=o.find(a);if(s){let e=s.props.children,n=o.map(t=>t!==s?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,i.jsx)(l,{...u,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,i.jsx)(l,{...u,ref:t,children:n})});o.displayName="Slot";var l=r.forwardRef((e,t)=>{let{children:n,...i}=e;if(r.isValidElement(n)){let e,o;let l=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.props.ref:n.props.ref||n.ref;return r.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let u=e[r],i=t[r];/^on[A-Z]/.test(r)?u&&i?n[r]=(...e)=>{i(...e),u(...e)}:u&&(n[r]=u):"style"===r?n[r]={...u,...i}:"className"===r&&(n[r]=[u,i].filter(Boolean).join(" "))}return{...e,...n}}(i,n.props),ref:t?(0,u.F)(t,l):l})}return r.Children.count(n)>1?r.Children.only(null):null});l.displayName="SlotClone";var s=({children:e})=>(0,i.jsx)(i.Fragment,{children:e});function a(e){return r.isValidElement(e)&&e.type===s}},68312:function(e,t,n){n.d(t,{W:function(){return u}});var r=n(2265);function u(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},59e3:function(e,t,n){n.d(t,{T:function(){return i}});var r=n(2265),u=n(68312);function i({prop:e,defaultProp:t,onChange:n=()=>{}}){let[i,o]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[i]=n,o=r.useRef(i),l=(0,u.W)(t);return r.useEffect(()=>{o.current!==i&&(l(i),o.current=i)},[i,o,l]),n}({defaultProp:t,onChange:n}),l=void 0!==e,s=l?e:i,a=(0,u.W)(n);return[s,r.useCallback(t=>{if(l){let n="function"==typeof t?t(e):t;n!==e&&a(n)}else o(t)},[l,e,o,a])]}},28727:function(e,t,n){n.d(t,{b:function(){return u}});var r=n(2265),u=globalThis?.document?r.useLayoutEffect:()=>{}},78030:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(2265);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let u=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&n.indexOf(e)===t).join(" ")};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:u=24,strokeWidth:l=2,absoluteStrokeWidth:s,className:a="",children:c,iconNode:d,...f}=e;return(0,r.createElement)("svg",{ref:t,...o,width:u,height:u,stroke:n,strokeWidth:s?24*Number(l)/Number(u):l,className:i("lucide",a),...f},[...d.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(c)?c:[c]])}),s=(e,t)=>{let n=(0,r.forwardRef)((n,o)=>{let{className:s,...a}=n;return(0,r.createElement)(l,{ref:o,iconNode:t,className:i("lucide-".concat(u(e)),s),...a})});return n.displayName="".concat(e),n}}}]);