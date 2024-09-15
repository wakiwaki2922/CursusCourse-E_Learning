"use strict";exports.id=6697,exports.ids=[6697],exports.modules={81490:(e,t,r)=>{r.d(t,{f:()=>l});var a=r(17577),o=r(11772),d=r(10326),n=a.forwardRef((e,t)=>(0,d.jsx)(o.WV.label,{...e,ref:t,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));n.displayName="Label";var l=n},3743:(e,t,r)=>{r.d(t,{VY:()=>S,fC:()=>L,h_:()=>W,xz:()=>I});var a=r(17577),o=r(28567),d=r(91189),n=r(28219),l=r(67342),i=r(83629),p=r(28900),h=r(13739),c=r(77546),s=r(22498),y=r(8969),u=r(11772),f=r(33099),k=r(75905),v=r(35664),x=r(17397),g=r(10326),Z="Popover",[M,m]=(0,n.b)(Z,[c.D7]),w=(0,c.D7)(),[C,b]=M(Z),P=e=>{let{__scopePopover:t,children:r,open:o,defaultOpen:d,onOpenChange:n,modal:l=!1}=e,i=w(t),p=a.useRef(null),[s,y]=a.useState(!1),[u=!1,f]=(0,k.T)({prop:o,defaultProp:d,onChange:n});return(0,g.jsx)(c.fC,{...i,children:(0,g.jsx)(C,{scope:t,contentId:(0,h.M)(),triggerRef:p,open:u,onOpenChange:f,onOpenToggle:a.useCallback(()=>f(e=>!e),[f]),hasCustomAnchor:s,onCustomAnchorAdd:a.useCallback(()=>y(!0),[]),onCustomAnchorRemove:a.useCallback(()=>y(!1),[]),modal:l,children:r})})};P.displayName=Z;var j="PopoverAnchor";a.forwardRef((e,t)=>{let{__scopePopover:r,...o}=e,d=b(j,r),n=w(r),{onCustomAnchorAdd:l,onCustomAnchorRemove:i}=d;return a.useEffect(()=>(l(),()=>i()),[l,i]),(0,g.jsx)(c.ee,{...n,...o,ref:t})}).displayName=j;var R="PopoverTrigger",z=a.forwardRef((e,t)=>{let{__scopePopover:r,...a}=e,n=b(R,r),l=w(r),i=(0,d.e)(t,n.triggerRef),p=(0,g.jsx)(u.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":n.open,"aria-controls":n.contentId,"data-state":T(n.open),...a,ref:i,onClick:(0,o.M)(e.onClick,n.onOpenToggle)});return n.hasCustomAnchor?p:(0,g.jsx)(c.ee,{asChild:!0,...l,children:p})});z.displayName=R;var A="PopoverPortal",[D,F]=M(A,{forceMount:void 0}),V=e=>{let{__scopePopover:t,forceMount:r,children:a,container:o}=e,d=b(A,t);return(0,g.jsx)(D,{scope:t,forceMount:r,children:(0,g.jsx)(y.z,{present:r||d.open,children:(0,g.jsx)(s.h,{asChild:!0,container:o,children:a})})})};V.displayName=A;var O="PopoverContent",H=a.forwardRef((e,t)=>{let r=F(O,e.__scopePopover),{forceMount:a=r.forceMount,...o}=e,d=b(O,e.__scopePopover);return(0,g.jsx)(y.z,{present:a||d.open,children:d.modal?(0,g.jsx)(q,{...o,ref:t}):(0,g.jsx)(E,{...o,ref:t})})});H.displayName=O;var q=a.forwardRef((e,t)=>{let r=b(O,e.__scopePopover),n=a.useRef(null),l=(0,d.e)(t,n),i=a.useRef(!1);return a.useEffect(()=>{let e=n.current;if(e)return(0,v.Ry)(e)},[]),(0,g.jsx)(x.Z,{as:f.g7,allowPinchZoom:!0,children:(0,g.jsx)(N,{...e,ref:l,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,o.M)(e.onCloseAutoFocus,e=>{e.preventDefault(),i.current||r.triggerRef.current?.focus()}),onPointerDownOutside:(0,o.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,r=0===t.button&&!0===t.ctrlKey,a=2===t.button||r;i.current=a},{checkForDefaultPrevented:!1}),onFocusOutside:(0,o.M)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})})}),E=a.forwardRef((e,t)=>{let r=b(O,e.__scopePopover),o=a.useRef(!1),d=a.useRef(!1);return(0,g.jsx)(N,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(o.current||r.triggerRef.current?.focus(),t.preventDefault()),o.current=!1,d.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(o.current=!0,"pointerdown"!==t.detail.originalEvent.type||(d.current=!0));let a=t.target;r.triggerRef.current?.contains(a)&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&d.current&&t.preventDefault()}})}),N=a.forwardRef((e,t)=>{let{__scopePopover:r,trapFocus:a,onOpenAutoFocus:o,onCloseAutoFocus:d,disableOutsidePointerEvents:n,onEscapeKeyDown:h,onPointerDownOutside:s,onFocusOutside:y,onInteractOutside:u,...f}=e,k=b(O,r),v=w(r);return(0,i.EW)(),(0,g.jsx)(p.M,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:o,onUnmountAutoFocus:d,children:(0,g.jsx)(l.XB,{asChild:!0,disableOutsidePointerEvents:n,onInteractOutside:u,onEscapeKeyDown:h,onPointerDownOutside:s,onFocusOutside:y,onDismiss:()=>k.onOpenChange(!1),children:(0,g.jsx)(c.VY,{"data-state":T(k.open),role:"dialog",id:k.contentId,...v,...f,ref:t,style:{...f.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),_="PopoverClose";function T(e){return e?"open":"closed"}a.forwardRef((e,t)=>{let{__scopePopover:r,...a}=e,d=b(_,r);return(0,g.jsx)(u.WV.button,{type:"button",...a,ref:t,onClick:(0,o.M)(e.onClick,()=>d.onOpenChange(!1))})}).displayName=_,a.forwardRef((e,t)=>{let{__scopePopover:r,...a}=e,o=w(r);return(0,g.jsx)(c.Eh,{...o,...a,ref:t})}).displayName="PopoverArrow";var L=P,I=z,W=V,S=H},3696:(e,t,r)=>{r.d(t,{f:()=>p});var a=r(17577),o=r(11772),d=r(10326),n="horizontal",l=["horizontal","vertical"],i=a.forwardRef((e,t)=>{let{decorative:r,orientation:a=n,...i}=e,p=l.includes(a)?a:n;return(0,d.jsx)(o.WV.div,{"data-orientation":p,...r?{role:"none"}:{"aria-orientation":"vertical"===p?p:void 0,role:"separator"},...i,ref:t})});i.displayName="Separator";var p=i},24230:(e,t,r)=>{r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},37358:(e,t,r)=>{r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]])},11890:(e,t,r)=>{r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]])},63062:(e,t,r)=>{r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]])},67236:(e,t,r)=>{r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("CircuitBoard",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]])},73078:(e,t,r)=>{r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("Command",[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]])},28916:(e,t,r)=>{r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]])},39447:(e,t,r)=>{r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("EllipsisVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]])},36283:(e,t,r)=>{r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]])},39572:(e,t,r)=>{r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]])},71709:(e,t,r)=>{r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]])},46318:(e,t,r)=>{r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]])},24319:(e,t,r)=>{r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]])},77506:(e,t,r)=>{r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},72607:(e,t,r)=>{r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]])},25107:(e,t,r)=>{r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("Pizza",[["path",{d:"M15 11h.01",key:"rns66s"}],["path",{d:"M11 15h.01",key:"k85uqc"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"m2 16 20 6-6-20A20 20 0 0 0 2 16",key:"e4slt2"}],["path",{d:"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4",key:"rerf8f"}]])},83855:(e,t,r)=>{r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},23742:(e,t,r)=>{r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("Slash",[["path",{d:"M22 2 2 22",key:"y4kqgn"}]])},82414:(e,t,r)=>{r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("SunMedium",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]])},47035:(e,t,r)=>{r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]])},50949:(e,t,r)=>{r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]])},74857:(e,t,r)=>{r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]])},75968:(e,t,r)=>{r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("UserRoundX",[["path",{d:"M2 21a8 8 0 0 1 11.873-7",key:"74fkxq"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m17 17 5 5",key:"p7ous7"}],["path",{d:"m22 17-5 5",key:"gqnmv0"}]])},72382:(e,t,r)=>{r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]])},79635:(e,t,r)=>{r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]])}};