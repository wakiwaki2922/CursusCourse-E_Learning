(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[913],{55206:function(e,t,n){"use strict";n.d(t,{F:function(){return o},e:function(){return i}});var r=n(2265);function o(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function i(...e){return r.useCallback(o(...e),e)}},48712:function(e,t,n){"use strict";n.d(t,{WV:function(){return u},jH:function(){return c}});var r=n(2265),o=n(54887),i=n(13350),a=n(57437),u=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...o}=e,u=r?i.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,a.jsx)(u,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function c(e,t){e&&o.flushSync(()=>e.dispatchEvent(t))}},19848:function(e,t,n){"use strict";n.d(t,{f:function(){return s}});var r=n(2265),o=n(48712),i=n(57437),a="horizontal",u=["horizontal","vertical"],c=r.forwardRef((e,t)=>{let{decorative:n,orientation:r=a,...c}=e,s=u.includes(r)?r:a;return(0,i.jsx)(o.WV.div,{"data-orientation":s,...n?{role:"none"}:{"aria-orientation":"vertical"===s?s:void 0,role:"separator"},...c,ref:t})});c.displayName="Separator";var s=c},13350:function(e,t,n){"use strict";n.d(t,{A4:function(){return c},g7:function(){return a}});var r=n(2265),o=n(55206),i=n(57437),a=r.forwardRef((e,t)=>{let{children:n,...o}=e,a=r.Children.toArray(n),c=a.find(s);if(c){let e=c.props.children,n=a.map(t=>t!==c?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,i.jsx)(u,{...o,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,i.jsx)(u,{...o,ref:t,children:n})});a.displayName="Slot";var u=r.forwardRef((e,t)=>{let{children:n,...i}=e;if(r.isValidElement(n)){let e,a;let u=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.props.ref:n.props.ref||n.ref;return r.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...e)=>{i(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}(i,n.props),ref:t?(0,o.F)(t,u):u})}return r.Children.count(n)>1?r.Children.only(null):null});u.displayName="SlotClone";var c=({children:e})=>(0,i.jsx)(i.Fragment,{children:e});function s(e){return r.isValidElement(e)&&e.type===c}},73969:function(e,t,n){"use strict";n.d(t,{j:function(){return i}});let r=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,o=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(r&&(r+=" "),r+=t);return r},i=(e,t)=>n=>{var i;if((null==t?void 0:t.variants)==null)return o(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:a,defaultVariants:u}=t,c=Object.keys(a).map(e=>{let t=null==n?void 0:n[e],o=null==u?void 0:u[e];if(null===t)return null;let i=r(t)||r(o);return a[e][i]}),s=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return o(e,c,null==t?void 0:null===(i=t.compoundVariants)||void 0===i?void 0:i.reduce((e,t)=>{let{class:n,className:r,...o}=t;return Object.entries(o).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...u,...s}[t]):({...u,...s})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}},78030:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(2265);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&n.indexOf(e)===t).join(" ")};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let u=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:o=24,strokeWidth:u=2,absoluteStrokeWidth:c,className:s="",children:l,iconNode:f,...d}=e;return(0,r.createElement)("svg",{ref:t,...a,width:o,height:o,stroke:n,strokeWidth:c?24*Number(u)/Number(o):u,className:i("lucide",s),...d},[...f.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(l)?l:[l]])}),c=(e,t)=>{let n=(0,r.forwardRef)((n,a)=>{let{className:c,...s}=n;return(0,r.createElement)(u,{ref:a,iconNode:t,className:i("lucide-".concat(o(e)),c),...s})});return n.displayName="".concat(e),n}},95137:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(78030).Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},29338:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(78030).Z)("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]])},20357:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(88081)},88081:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var c=[],s=!1,l=-1;function f(){s&&r&&(s=!1,r.length?c=r.concat(c):l=-1,c.length&&d())}function d(){if(!s){var e=u(f);s=!0;for(var t=c.length;t;){for(r=c,c=[];++l<t;)r&&r[l].run();l=-1,t=c.length}r=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||s||u(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},a=!0;try{t[e](i,i.exports,r),a=!1}finally{a&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()},35556:function(e){"use strict";e.exports=function(){}},95152:function(){},381:function(){},53109:function(e,t,n){"use strict";function r(e){var t=!1;return{promise:new Promise(function(n,r){e.then(function(e){return!t&&n(e)}).catch(function(e){return!t&&r(e)})}),cancel:function(){t=!0}}}n.d(t,{Z:function(){return r}})},54317:function(e,t,n){"use strict";n.d(t,{ZP:function(){return i}});var r=function(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},o=r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r([],["onCopy","onCut","onPaste"],!0),["onCompositionEnd","onCompositionStart","onCompositionUpdate"],!0),["onFocus","onBlur"],!0),["onInput","onInvalid","onReset","onSubmit"],!0),["onLoad","onError"],!0),["onKeyDown","onKeyPress","onKeyUp"],!0),["onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting"],!0),["onClick","onContextMenu","onDoubleClick","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp"],!0),["onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop"],!0),["onSelect"],!0),["onTouchCancel","onTouchEnd","onTouchMove","onTouchStart"],!0),["onPointerDown","onPointerMove","onPointerUp","onPointerCancel","onGotPointerCapture","onLostPointerCapture","onPointerEnter","onPointerLeave","onPointerOver","onPointerOut"],!0),["onScroll"],!0),["onWheel"],!0),["onAnimationStart","onAnimationEnd","onAnimationIteration"],!0),["onTransitionEnd"],!0),["onChange"],!0),["onToggle"],!0);function i(e,t){var n={};return o.forEach(function(r){var o=e[r];o&&(t?n[r]=function(e){return o(e,t(r))}:n[r]=o)}),n}},96133:function(e,t,n){"use strict";n.d(t,{Z:function(){return S}});var r=n(57437),o=n(2265),i=n(54317),a=n(53109),u=n(98591),c=n(59811),s=n(35556),l=Object.prototype.hasOwnProperty;function f(e,t,n){for(n of e.keys())if(d(n,t))return n}function d(e,t){var n,r,o;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&d(e[r],t[r]););return -1===r}if(n===Set){if(e.size!==t.size)return!1;for(r of e)if((o=r)&&"object"==typeof o&&!(o=f(t,o))||!t.has(o))return!1;return!0}if(n===Map){if(e.size!==t.size)return!1;for(r of e)if((o=r[0])&&"object"==typeof o&&!(o=f(t,o))||!d(r[1],t.get(o)))return!1;return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((r=e.byteLength)===t.byteLength)for(;r--&&e.getInt8(r)===t.getInt8(r););return -1===r}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===t.byteLength)for(;r--&&e[r]===t[r];);return -1===r}if(!n||"object"==typeof e){for(n in r=0,e)if(l.call(e,n)&&++r&&!l.call(t,n)||!(n in t)||!d(e[n],t[n]))return!1;return Object.keys(t).length===r}}return e!=e&&t!=t}var p=n(63093),g=n(28852),h=n(66921);class y{constructor(){this.externalLinkEnabled=!0,this.externalLinkRel=void 0,this.externalLinkTarget=void 0,this.isInPresentationMode=!1,this.pdfDocument=void 0,this.pdfViewer=void 0}setDocument(e){this.pdfDocument=e}setViewer(e){this.pdfViewer=e}setExternalLinkRel(e){this.externalLinkRel=e}setExternalLinkTarget(e){this.externalLinkTarget=e}setHistory(){}get pagesCount(){return this.pdfDocument?this.pdfDocument.numPages:0}get page(){return(0,c.Z)(this.pdfViewer,"PDF viewer is not initialized."),this.pdfViewer.currentPageNumber||0}set page(e){(0,c.Z)(this.pdfViewer,"PDF viewer is not initialized."),this.pdfViewer.currentPageNumber=e}get rotation(){return 0}set rotation(e){}goToDestination(e){return new Promise(t=>{(0,c.Z)(this.pdfDocument,"PDF document not loaded."),(0,c.Z)(e,"Destination is not specified."),"string"==typeof e?this.pdfDocument.getDestination(e).then(t):Array.isArray(e)?t(e):e.then(t)}).then(e=>{(0,c.Z)(Array.isArray(e),`"${e}" is not a valid destination array.`);let t=e[0];new Promise(e=>{(0,c.Z)(this.pdfDocument,"PDF document not loaded."),t instanceof Object?this.pdfDocument.getPageIndex(t).then(t=>{e(t)}).catch(()=>{(0,c.Z)(!1,`"${t}" is not a valid page reference.`)}):"number"==typeof t?e(t):(0,c.Z)(!1,`"${t}" is not a valid destination reference.`)}).then(t=>{let n=t+1;(0,c.Z)(this.pdfViewer,"PDF viewer is not initialized."),(0,c.Z)(n>=1&&n<=this.pagesCount,`"${n}" is not a valid page number.`),this.pdfViewer.scrollPageIntoView({dest:e,pageIndex:t,pageNumber:n})})})}navigateTo(e){this.goToDestination(e)}goToPage(e){(0,c.Z)(this.pdfViewer,"PDF viewer is not initialized."),(0,c.Z)(e>=1&&e<=this.pagesCount,`"${e}" is not a valid page number.`),this.pdfViewer.scrollPageIntoView({pageIndex:e-1,pageNumber:e})}addLinkAttributes(e,t,n){e.href=t,e.rel=this.externalLinkRel||"noopener noreferrer nofollow",e.target=n?"_blank":this.externalLinkTarget||""}getDestinationHash(){return"#"}getAnchorUrl(){return"#"}setHash(){}executeNamedAction(){}cachePageRef(){}isPageVisible(){return!0}isPageCached(){return!0}executeSetOCGState(){}}var m={NEED_PASSWORD:1,INCORRECT_PASSWORD:2},v=n(47790),E=n(31906),b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};let{PDFDataRangeTransport:w}=p,R=(e,t)=>{switch(t){case m.NEED_PASSWORD:e(prompt("Enter the password to open this PDF file."));break;case m.INCORRECT_PASSWORD:e(prompt("Invalid password. Please try again."))}};function x(e){return"object"==typeof e&&null!==e&&("data"in e||"range"in e||"url"in e)}var S=(0,o.forwardRef)(function(e,t){var{children:n,className:l,error:f="Failed to load PDF file.",externalLinkRel:m,externalLinkTarget:S,file:T,inputRef:L,imageResourcesPath:P,loading:j="Loading PDF…",noData:O="No PDF file specified.",onItemClick:A,onLoadError:C,onLoadProgress:Z,onLoadSuccess:D,onPassword:k=R,onSourceError:N,onSourceSuccess:M,options:_,renderMode:V,rotate:I}=e,F=b(e,["children","className","error","externalLinkRel","externalLinkTarget","file","inputRef","imageResourcesPath","loading","noData","onItemClick","onLoadError","onLoadProgress","onLoadSuccess","onPassword","onSourceError","onSourceSuccess","options","renderMode","rotate"]);let[G,U]=(0,E.Z)(),{value:W,error:B}=G,[J,H]=(0,E.Z)(),{value:z,error:$}=J,X=(0,o.useRef)(new y),q=(0,o.useRef)([]),K=(0,o.useRef)(void 0),Y=(0,o.useRef)(void 0);T&&T!==K.current&&x(T)&&(s(!d(T,K.current),'File prop passed to <Document /> changed, but it\'s equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "file" prop.'),K.current=T),_&&_!==Y.current&&(s(!d(_,Y.current),'Options prop passed to <Document /> changed, but it\'s equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "options" prop.'),Y.current=_);let Q=(0,o.useRef)({scrollPageIntoView:e=>{let{dest:t,pageNumber:n,pageIndex:r=n-1}=e;if(A){A({dest:t,pageIndex:r,pageNumber:n});return}let o=q.current[r];if(o){o.scrollIntoView();return}s(!1,"An internal link leading to page ".concat(n," was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>."))}});(0,o.useImperativeHandle)(t,()=>({linkService:X,pages:q,viewer:Q}),[]),(0,o.useEffect)(function(){U({type:"RESET"})},[T,U]);let ee=(0,o.useCallback)(()=>{var e,t,n,r;return e=this,t=void 0,n=void 0,r=function*(){if(!T)return null;if("string"==typeof T)return(0,v.gJ)(T)?{data:(0,v.us)(T)}:((0,v.tN)(),{url:T});if(T instanceof w)return{range:T};if((0,v.eP)(T))return{data:T};if(v.jU&&(0,v.Lj)(T))return{data:yield(0,v.eR)(T)};if((0,c.Z)("object"==typeof T,"Invalid parameter in file, need either Uint8Array, string or a parameter object"),(0,c.Z)(x(T),"Invalid parameter object: need either .data, .range or .url"),"url"in T&&"string"==typeof T.url){if((0,v.gJ)(T.url)){let{url:e}=T,t=b(T,["url"]);return Object.assign({data:(0,v.us)(e)},t)}(0,v.tN)()}return T},new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(a,u)}c((r=r.apply(e,t||[])).next())})},[T]);(0,o.useEffect)(()=>{let e=(0,a.Z)(ee());return e.promise.then(e=>{U({type:"RESOLVE",value:e})}).catch(e=>{U({type:"REJECT",error:e})}),()=>{(0,v.LJ)(e)}},[ee,U]),(0,o.useEffect)(()=>{if(void 0!==W){if(!1===W){B&&(s(!1,B.toString()),N&&N(B));return}M&&M()}},[W]),(0,o.useEffect)(function(){H({type:"RESET"})},[H,W]),(0,o.useEffect)(function(){if(!W)return;let e=Object.assign(Object.assign({},W),_),t=p.Me(e);return Z&&(t.onProgress=Z),k&&(t.onPassword=k),t.promise.then(e=>{H({type:"RESOLVE",value:e})}).catch(e=>{t.destroyed||H({type:"REJECT",error:e})}),()=>{t.destroy()}},[_,H,W]),(0,o.useEffect)(()=>{if(void 0!==z){if(!1===z){$&&(s(!1,$.toString()),C&&C($));return}z&&(D&&D(z),q.current=Array(z.numPages),X.current.setDocument(z))}},[z]),(0,o.useEffect)(function(){X.current.setViewer(Q.current),X.current.setExternalLinkRel(m),X.current.setExternalLinkTarget(S)},[m,S]);let et=(0,o.useCallback)((e,t)=>{q.current[e]=t},[]),en=(0,o.useCallback)(e=>{delete q.current[e]},[]),er=(0,o.useMemo)(()=>({imageResourcesPath:P,linkService:X.current,onItemClick:A,pdf:z,registerPage:et,renderMode:V,rotate:I,unregisterPage:en}),[P,A,z,et,V,I,en]),eo=(0,o.useMemo)(()=>(0,i.ZP)(F,()=>z),[F,z]);return(0,r.jsx)("div",Object.assign({className:(0,u.Z)("react-pdf__Document",l),ref:L,style:{"--scale-factor":"1"}},eo,{children:T?null==z?(0,r.jsx)(h.Z,{type:"loading",children:"function"==typeof j?j():j}):!1===z?(0,r.jsx)(h.Z,{type:"error",children:"function"==typeof f?f():f}):(0,r.jsx)(g.Z.Provider,{value:er,children:n}):(0,r.jsx)(h.Z,{type:"no-data",children:"function"==typeof O?O():O})}))})},28852:function(e,t,n){"use strict";let r=(0,n(2265).createContext)(null);t.Z=r},66921:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(57437);function o({children:e,type:t}){return(0,r.jsx)("div",{className:`react-pdf__message react-pdf__message--${t}`,children:e})}},82067:function(e,t,n){"use strict";n.d(t,{Z:function(){return A}});var r=n(57437),o=n(2265),i=n(53109),a=n(54317),u=n(98591);function c(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=e.filter(Boolean);return n.length<=1?n[0]||null:function(e){n.forEach(function(t){"function"==typeof t?t(e):t&&(t.current=e)})}}var s=n(59811),l=n(35556);let f=(0,o.createContext)(null);var d=n(66921),p=n(63093);let g={Document:null,DocumentFragment:null,Part:"group",Sect:"group",Div:"group",Aside:"note",NonStruct:"none",P:null,H:"heading",Title:null,FENote:"note",Sub:"group",Lbl:null,Span:null,Em:null,Strong:null,Link:"link",Annot:"note",Form:"form",Ruby:null,RB:null,RT:null,RP:null,Warichu:null,WT:null,WP:null,L:"list",LI:"listitem",LBody:null,Table:"table",TR:"row",TH:"columnheader",TD:"cell",THead:"columnheader",TBody:null,TFoot:null,Caption:null,Figure:"figure",Formula:null,Artifact:null},h=/^H(\d+)$/;function y(e){return"children"in e}function m(e){return!!y(e)&&1===e.children.length&&0 in e.children&&"id"in e.children[0]}function v({className:e,node:t}){let n=(0,o.useMemo)(()=>t?Object.assign(Object.assign({},function(e){let t={};if(y(e)){let{role:n}=e,r=n.match(h);if(r)t.role="heading",t["aria-level"]=Number(r[1]);else if(n in g){let e=g[n];e&&(t.role=e)}}return t}(t)),function e(t){let n={};if(y(t)){if(void 0!==t.alt&&(n["aria-label"]=t.alt),void 0!==t.lang&&(n.lang=t.lang),m(t)){let[r]=t.children;if(r){let t=e(r);return Object.assign(Object.assign({},n),t)}}}else"id"in t&&(n["aria-owns"]=t.id);return n}(t)):null,[t]),i=(0,o.useMemo)(()=>!y(t)||m(t)?null:t.children.map((e,t)=>(0,r.jsx)(v,{node:e},t)),[t]);return(0,r.jsx)("span",Object.assign({className:e},n,{children:i}))}function E(){return(0,o.useContext)(f)}var b=n(31906),w=n(47790);function R(){let e=E();(0,s.Z)(e,"Unable to find Page context.");let{onGetStructTreeError:t,onGetStructTreeSuccess:n}=e,[a,u]=(0,b.Z)(),{value:c,error:f}=a,{customTextRenderer:d,page:p}=e;return((0,o.useEffect)(function(){u({type:"RESET"})},[u,p]),(0,o.useEffect)(function(){if(d||!p)return;let e=(0,i.Z)(p.getStructTree());return e.promise.then(e=>{u({type:"RESOLVE",value:e})}).catch(e=>{u({type:"REJECT",error:e})}),()=>(0,w.LJ)(e)},[d,p,u]),(0,o.useEffect)(()=>{if(void 0!==c){if(!1===c){f&&(l(!1,f.toString()),t&&t(f));return}c&&n&&n(c)}},[c]),c)?(0,r.jsx)(v,{className:"react-pdf__Page__structTree structTree",node:c}):null}let x=p.bM;function S(e){let t=E();(0,s.Z)(t,"Unable to find Page context.");let{_className:n,canvasBackground:i,devicePixelRatio:a=(0,w.x_)(),onRenderError:u,onRenderSuccess:f,page:d,renderForms:p,renderTextLayer:g,rotate:h,scale:y}=Object.assign(Object.assign({},t),e),{canvasRef:m}=e;(0,s.Z)(d,"Attempted to render page canvas, but no page was specified.");let v=(0,o.useRef)(null);function b(e){!(0,w.DE)(e)&&(l(!1,e.toString()),u&&u(e))}let S=(0,o.useMemo)(()=>d.getViewport({scale:y*a,rotation:h}),[a,d,h,y]),T=(0,o.useMemo)(()=>d.getViewport({scale:y,rotation:h}),[d,h,y]);(0,o.useEffect)(function(){if(!d)return;d.cleanup();let{current:e}=v;if(!e)return;e.width=S.width,e.height=S.height,e.style.width="".concat(Math.floor(T.width),"px"),e.style.height="".concat(Math.floor(T.height),"px"),e.style.visibility="hidden";let t={annotationMode:p?x.ENABLE_FORMS:x.ENABLE,canvasContext:e.getContext("2d",{alpha:!1}),viewport:S};i&&(t.background=i);let n=d.render(t);return n.promise.then(()=>{e.style.visibility="",d&&f&&f((0,w.XZ)(d,y))}).catch(b),()=>(0,w.LJ)(n)},[i,d,p,S,T]);let L=(0,o.useCallback)(()=>{let{current:e}=v;e&&(e.width=0,e.height=0)},[]);return(0,o.useEffect)(()=>L,[L]),(0,r.jsx)("canvas",{className:"".concat(n,"__canvas"),dir:"ltr",ref:c(m,v),style:{display:"block",userSelect:"none"},children:g?(0,r.jsx)(R,{}):null})}function T(){let e=E();(0,s.Z)(e,"Unable to find Page context.");let{customTextRenderer:t,onGetTextError:n,onGetTextSuccess:a,onRenderTextLayerError:c,onRenderTextLayerSuccess:f,page:d,pageIndex:g,pageNumber:h,rotate:y,scale:m}=e;(0,s.Z)(d,"Attempted to load page text content, but no page was specified.");let[v,R]=(0,b.Z)(),{value:x,error:S}=v,T=(0,o.useRef)(null),L=(0,o.useRef)(void 0);l(1===Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-text-layer"),10),"TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer"),(0,o.useEffect)(function(){R({type:"RESET"})},[d,R]),(0,o.useEffect)(function(){if(!d)return;let e=(0,i.Z)(d.getTextContent());return e.promise.then(e=>{R({type:"RESOLVE",value:e})}).catch(e=>{R({type:"REJECT",error:e})}),()=>(0,w.LJ)(e)},[d,R]),(0,o.useEffect)(()=>{if(void 0!==x){if(!1===x){S&&(l(!1,S.toString()),n&&n(S));return}x&&a&&a(x)}},[x]);let P=(0,o.useCallback)(()=>{f&&f()},[f]),j=(0,o.useCallback)(e=>{l(!1,e.toString()),c&&c(e)},[c]),O=(0,o.useMemo)(()=>d.getViewport({scale:m,rotation:y}),[d,y,m]);return(0,o.useLayoutEffect)(function(){if(!d||!x)return;let{current:e}=T;if(!e)return;e.innerHTML="";let n=d.streamTextContent({includeMarkedContent:!0}),r=new p.AB({container:e,textContentSource:n,viewport:O});return r.render().then(()=>{let n=document.createElement("div");n.className="endOfContent",e.append(n),L.current=n;let r=e.querySelectorAll('[role="presentation"]');if(t){let e=0;x.items.forEach((n,o)=>{if(!("str"in n))return;let i=r[e];if(!i)return;let a=t(Object.assign({pageIndex:g,pageNumber:h,itemIndex:o},n));i.innerHTML=a,e+=n.str&&n.hasEOL?2:1})}P()}).catch(j),()=>(0,w.LJ)(r)},[t,j,P,d,g,h,x,O]),(0,r.jsx)("div",{className:(0,u.Z)("react-pdf__Page__textContent","textLayer"),onMouseUp:function(){let e=L.current;e&&e.classList.remove("active")},onMouseDown:function(){let e=L.current;e&&e.classList.add("active")},ref:T})}var L=n(28852);function P(){return(0,o.useContext)(L.Z)}function j(){let e=P(),t=E();(0,s.Z)(t,"Unable to find Page context.");let{imageResourcesPath:n,linkService:a,onGetAnnotationsError:c,onGetAnnotationsSuccess:f,onRenderAnnotationLayerError:d,onRenderAnnotationLayerSuccess:g,page:h,pdf:y,renderForms:m,rotate:v,scale:R=1}=Object.assign(Object.assign({},e),t);(0,s.Z)(y,"Attempted to load page annotations, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop."),(0,s.Z)(h,"Attempted to load page annotations, but no page was specified."),(0,s.Z)(a,"Attempted to load page annotations, but no linkService was specified.");let[x,S]=(0,b.Z)(),{value:T,error:L}=x,j=(0,o.useRef)(null);l(1===Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-annotation-layer"),10),"AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations"),(0,o.useEffect)(function(){S({type:"RESET"})},[S,h]),(0,o.useEffect)(function(){if(!h)return;let e=(0,i.Z)(h.getAnnotations());return e.promise.then(e=>{S({type:"RESOLVE",value:e})}).catch(e=>{S({type:"REJECT",error:e})}),()=>{(0,w.LJ)(e)}},[S,h]),(0,o.useEffect)(()=>{if(void 0!==T){if(!1===T){L&&(l(!1,L.toString()),c&&c(L));return}T&&f&&f(T)}},[T]);let O=(0,o.useMemo)(()=>h.getViewport({scale:R,rotation:v}),[h,v,R]);return(0,o.useEffect)(function(){if(!y||!h||!a||!T)return;let{current:e}=j;if(!e)return;let t=O.clone({dontFlip:!0}),r={annotations:T,annotationStorage:y.annotationStorage,div:e,imageResourcesPath:n,linkService:a,page:h,renderForms:m,viewport:t};e.innerHTML="";try{new p.sO({accessibilityManager:null,annotationCanvasMap:null,annotationEditorUIManager:null,div:e,l10n:null,page:h,viewport:t}).render(r),g&&g()}catch(e){l(!1,"".concat(e)),d&&d(e)}return()=>{}},[T,n,a,h,y,m,O]),(0,r.jsx)("div",{className:(0,u.Z)("react-pdf__Page__annotations","annotationLayer"),ref:j})}var O=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function A(e){let t=Object.assign(Object.assign({},P()),e),{_className:n="react-pdf__Page",_enableRegisterUnregisterPage:p=!0,canvasBackground:g,canvasRef:h,children:y,className:m,customRenderer:v,customTextRenderer:E,devicePixelRatio:R,error:x="Failed to load the page.",height:L,inputRef:A,loading:C="Loading page…",noData:Z="No page specified.",onGetAnnotationsError:D,onGetAnnotationsSuccess:k,onGetStructTreeError:N,onGetStructTreeSuccess:M,onGetTextError:_,onGetTextSuccess:V,onLoadError:I,onLoadSuccess:F,onRenderAnnotationLayerError:G,onRenderAnnotationLayerSuccess:U,onRenderError:W,onRenderSuccess:B,onRenderTextLayerError:J,onRenderTextLayerSuccess:H,pageIndex:z,pageNumber:$,pdf:X,registerPage:q,renderAnnotationLayer:K=!0,renderForms:Y=!1,renderMode:Q="canvas",renderTextLayer:ee=!0,rotate:et,scale:en=1,unregisterPage:er,width:eo}=t,ei=O(t,["_className","_enableRegisterUnregisterPage","canvasBackground","canvasRef","children","className","customRenderer","customTextRenderer","devicePixelRatio","error","height","inputRef","loading","noData","onGetAnnotationsError","onGetAnnotationsSuccess","onGetStructTreeError","onGetStructTreeSuccess","onGetTextError","onGetTextSuccess","onLoadError","onLoadSuccess","onRenderAnnotationLayerError","onRenderAnnotationLayerSuccess","onRenderError","onRenderSuccess","onRenderTextLayerError","onRenderTextLayerSuccess","pageIndex","pageNumber","pdf","registerPage","renderAnnotationLayer","renderForms","renderMode","renderTextLayer","rotate","scale","unregisterPage","width"]),[ea,eu]=(0,b.Z)(),{value:ec,error:es}=ea,el=(0,o.useRef)(null);(0,s.Z)(X,"Attempted to load a page, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop.");let ef=(0,w.T8)($)?$-1:null!=z?z:null,ed=null!=$?$:(0,w.T8)(z)?z+1:null,ep=null!=et?et:ec?ec.rotate:null,eg=(0,o.useMemo)(()=>{if(!ec)return null;let e=1,t=null!=en?en:1;if(eo||L){let t=ec.getViewport({scale:1,rotation:ep});eo?e=eo/t.width:L&&(e=L/t.height)}return t*e},[L,ec,ep,en,eo]);(0,o.useEffect)(function(){return()=>{(0,w.T8)(ef)&&p&&er&&er(ef)}},[p,X,ef,er]),(0,o.useEffect)(function(){eu({type:"RESET"})},[eu,X,ef]),(0,o.useEffect)(function(){if(!X||!ed)return;let e=(0,i.Z)(X.getPage(ed));return e.promise.then(e=>{eu({type:"RESOLVE",value:e})}).catch(e=>{eu({type:"REJECT",error:e})}),()=>(0,w.LJ)(e)},[eu,X,ed]),(0,o.useEffect)(()=>{if(void 0!==ec){if(!1===ec){es&&(l(!1,es.toString()),I&&I(es));return}!function(){if(F){if(!ec||!eg)return;F((0,w.XZ)(ec,eg))}if(p&&q){if(!(0,w.T8)(ef)||!el.current)return;q(ef,el.current)}}()}},[ec,eg]);let eh=(0,o.useMemo)(()=>ec&&(0,w.T8)(ef)&&ed&&(0,w.T8)(ep)&&(0,w.T8)(eg)?{_className:n,canvasBackground:g,customTextRenderer:E,devicePixelRatio:R,onGetAnnotationsError:D,onGetAnnotationsSuccess:k,onGetStructTreeError:N,onGetStructTreeSuccess:M,onGetTextError:_,onGetTextSuccess:V,onRenderAnnotationLayerError:G,onRenderAnnotationLayerSuccess:U,onRenderError:W,onRenderSuccess:B,onRenderTextLayerError:J,onRenderTextLayerSuccess:H,page:ec,pageIndex:ef,pageNumber:ed,renderForms:Y,renderTextLayer:ee,rotate:ep,scale:eg}:null,[n,g,E,R,D,k,N,M,_,V,G,U,W,B,J,H,ec,ef,ed,Y,ee,ep,eg]),ey=(0,o.useMemo)(()=>(0,a.ZP)(ei,()=>ec?eg?(0,w.XZ)(ec,eg):void 0:ec),[ei,ec,eg]),em="".concat(ef,"@").concat(eg,"/").concat(ep);return(0,r.jsx)("div",Object.assign({className:(0,u.Z)(n,m),"data-page-number":ed,ref:c(A,el),style:{"--scale-factor":"".concat(eg),backgroundColor:g||"white",position:"relative",minWidth:"min-content",minHeight:"min-content"}},ey,{children:ed?null===X||null==ec?(0,r.jsx)(d.Z,{type:"loading",children:"function"==typeof C?C():C}):!1===X||!1===ec?(0,r.jsx)(d.Z,{type:"error",children:"function"==typeof x?x():x}):(0,r.jsxs)(f.Provider,{value:eh,children:[function(){switch(Q){case"custom":return(0,s.Z)(v,'renderMode was set to "custom", but no customRenderer was passed.'),(0,r.jsx)(v,{},"".concat(em,"_custom"));case"none":return null;default:return(0,r.jsx)(S,{canvasRef:h},"".concat(em,"_canvas"))}}(),ee?(0,r.jsx)(T,{},"".concat(em,"_text")):null,K?(0,r.jsx)(j,{},"".concat(em,"_annotations")):null,y]}):(0,r.jsx)(d.Z,{type:"no-data",children:"function"==typeof Z?Z():Z})}))}},31906:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(2265);function o(e,t){switch(t.type){case"RESOLVE":return{value:t.value,error:void 0};case"REJECT":return{value:!1,error:t.error};case"RESET":return{value:void 0,error:void 0};default:return e}}function i(){return(0,r.useReducer)(o,{value:void 0,error:void 0})}},47790:function(e,t,n){"use strict";n.d(t,{DE:function(){return y},LJ:function(){return g},Lj:function(){return s},T8:function(){return u},XZ:function(){return h},eP:function(){return c},eR:function(){return m},gJ:function(){return l},jU:function(){return i},tN:function(){return p},us:function(){return f},x_:function(){return d}});var r=n(59811),o=n(35556);let i="undefined"!=typeof document,a=i&&"file:"===window.location.protocol;function u(e){return null!=e}function c(e){return e instanceof ArrayBuffer}function s(e){return(0,r.Z)(i,"isBlob can only be used in a browser environment"),e instanceof Blob}function l(e){return"string"==typeof e&&/^data:/.test(e)}function f(e){(0,r.Z)(l(e),"Invalid data URI.");let[t="",n=""]=e.split(",");return -1!==t.split(";").indexOf("base64")?atob(n):unescape(n)}function d(){return i&&window.devicePixelRatio||1}function p(){o(!a,"Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.")}function g(e){(null==e?void 0:e.cancel)&&e.cancel()}function h(e,t){return Object.defineProperty(e,"width",{get(){return this.view[2]*t},configurable:!0}),Object.defineProperty(e,"height",{get(){return this.view[3]*t},configurable:!0}),Object.defineProperty(e,"originalWidth",{get(){return this.view[2]},configurable:!0}),Object.defineProperty(e,"originalHeight",{get(){return this.view[3]},configurable:!0}),e}function y(e){return"RenderingCancelledException"===e.name}function m(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{if(!r.result)return n(Error("Error while reading a file."));t(r.result)},r.onerror=e=>{if(!e.target)return n(Error("Error while reading a file."));let{error:t}=e.target;if(!t)return n(Error("Error while reading a file."));switch(t.code){case t.NOT_FOUND_ERR:return n(Error("Error while reading a file: File not found."));case t.SECURITY_ERR:return n(Error("Error while reading a file: Security error."));case t.ABORT_ERR:return n(Error("Error while reading a file: Aborted."));default:return n(Error("Error while reading a file."))}},r.readAsArrayBuffer(e)})}},59811:function(e,t,n){"use strict";function r(e,t){if(!e)throw Error("Invariant failed")}n.d(t,{Z:function(){return r}})}}]);