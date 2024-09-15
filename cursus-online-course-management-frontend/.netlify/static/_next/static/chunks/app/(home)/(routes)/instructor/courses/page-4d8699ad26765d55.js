(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8187],{1123:function(e,t,r){Promise.resolve().then(r.bind(r,94121))},19798:function(e,t,r){"use strict";r.d(t,{B$:function(){return l},D$:function(){return i},Kz:function(){return f},PI:function(){return m},Uf:function(){return s},V3:function(){return o},Yt:function(){return c},n6:function(){return a},tG:function(){return d},xb:function(){return u}});var n=r(1398);let s=async()=>{try{return(await n.Z.get("/api/courses/auth/getCoursesOfInstructor")).data}catch(e){return console.log("[ACTIONS_GET_COURSES_OF_INSTRUCTOR]",e),[]}},a=async e=>{try{return(await n.Z.get("/api/courses/auth/getCoursesOfInstructorById",{params:{userId:e}})).data}catch(e){return console.log("[ACTIONS_GET_COURSES_OF_INSTRUCTOR]",e),[]}},o=async()=>{try{return(await n.Z.get("/api/courses/getAllCourses")).data}catch(e){return console.log("[ACTIONS_GET_ALL_COURSES]",e),[]}},l=async(e,t)=>{try{return(await n.Z.get("/api/courses/searchCourses",{params:{title:e,categoryId:t}})).data}catch(e){return console.log("[ACTIONS_SEARCH_COURSES]",e),[]}},i=async()=>{try{return(await n.Z.get("/api/courses/getPublishedCourses")).data}catch(e){return console.log("[ACTIONS_GET_ALL_COURSES]",e),[]}},c=async e=>{try{let t=await n.Z.get("/api/courses/getCourseById/".concat(e));return console.log("Get course by id response",t.data),t.data}catch(e){if(console.log("[ACTIONS_GET_COURSE_BY_ID]",e),e.response&&e.response.data)throw Error(e.response.data.message||"Something went wrong!");throw Error(e.message||"Something went wrong!")}},u=async e=>{try{let t=(await n.Z.get("/api/courses/getCourseByIdByUser/".concat(e))).data;return console.log("Get course by id response",t),t}catch(e){if(console.log("[ACTIONS_GET_COURSE_BY_ID]",e),e.response&&e.response.data)throw Error(e.response.data.message||"Something went wrong!");throw Error(e.message||"Something went wrong!")}},d=async()=>{try{return(await n.Z.get("/api/category/getAll")).data}catch(e){return console.log("[ACTIONS_GET_ALL_CATEGORIES]",e),[]}},f=async()=>{try{return(await n.Z.get("/api/courses/auth/getStudentOwnedCourses")).data}catch(e){return console.log("[ACTIONS_GET_STUDENT_OWN_COURSES]",e),[]}},m=async e=>{try{return(await n.Z.get("/api/courses/auth/getStudentOwnedCourseWithLessonsAndProgressById/".concat(e))).data}catch(e){return console.log("[ACTIONS_GET_STUDENT_OWN_COURSE_BY_ID]",e),null}}},94121:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var n=r(57437),s=r(2265),a=r(94693),o=r(50495),l=r(46910),i=r(37440),c=r(56900),u=r(63550),d=r(18422),f=r(87138);let m=[{accessorKey:"courseTitle",header:e=>{let{column:t}=e;return(0,n.jsxs)(o.z,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),children:["Title",(0,n.jsx)(c.Z,{className:"ml-2 h-4 w-4"})]})}},{accessorKey:"price",header:e=>{let{column:t}=e;return(0,n.jsxs)(o.z,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),children:["Price",(0,n.jsx)(c.Z,{className:"ml-2 h-4 w-4"})]})},cell:e=>{let{row:t}=e,r=parseFloat(t.getValue("price")||"0"),s=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(r);return(0,n.jsx)("div",{children:s})}},{accessorKey:"courseStatus",header:e=>{let{column:t}=e;return(0,n.jsxs)(o.z,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),children:["Published",(0,n.jsx)(c.Z,{className:"ml-2 h-4 w-4"})]})},cell:e=>{let{row:t}=e,r=t.getValue("courseStatus")||!1;return(0,n.jsx)(a.C,{className:(0,i.cn)("bg-slate-400",r&&"bg-sky-700"),children:r?"Published":"Draft"})}},{id:"actions",cell:e=>{let{row:t}=e,{courseId:r}=t.original;return(0,n.jsxs)(l.h_,{children:[(0,n.jsx)(l.$F,{asChild:!0,children:(0,n.jsxs)(o.z,{variant:"ghost",className:"h-4 w-8 p-0",children:[(0,n.jsx)("span",{className:"sr-only",children:"Open menu"}),(0,n.jsx)(u.Z,{className:"h-4 w-4"})]})}),(0,n.jsx)(l.AW,{align:"end",children:(0,n.jsx)(f.default,{href:"/instructor/courses/".concat(r),children:(0,n.jsxs)(l.Xi,{children:[(0,n.jsx)(d.Z,{className:"h-4 w-4 mr-2"}),"Edit"]})})})]})}}];var g=r(88762),p=r(22258),h=r(26975),x=r(83102),y=r(96273);function b(e){var t,r,a;let{columns:l,data:i}=e,[c,u]=s.useState([]),[d,m]=s.useState([]),b=(0,g.b7)({data:i,columns:l,getCoreRowModel:(0,p.sC)(),getPaginationRowModel:(0,p.G_)(),onSortingChange:u,getSortedRowModel:(0,p.tj)(),onColumnFiltersChange:m,getFilteredRowModel:(0,p.vL)(),state:{sorting:c,columnFilters:d}});return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"flex items-center py-4 justify-between",children:[(0,n.jsx)(x.I,{placeholder:"Filter course...",value:null!==(a=null===(t=b.getColumn("courseTitle"))||void 0===t?void 0:t.getFilterValue())&&void 0!==a?a:"",onChange:e=>{var t;return null===(t=b.getColumn("courseTitle"))||void 0===t?void 0:t.setFilterValue(e.target.value)},className:"max-w-sm"}),(0,n.jsx)(f.default,{href:"/instructor/create",children:(0,n.jsxs)(o.z,{children:[(0,n.jsx)(y.Z,{className:"h-4 w-4 mr-2"}),"New Course"]})})]}),(0,n.jsx)("div",{className:"rounded-md border",children:(0,n.jsxs)(h.iA,{children:[(0,n.jsx)(h.xD,{children:b.getHeaderGroups().map(e=>(0,n.jsx)(h.SC,{children:e.headers.map(e=>(0,n.jsx)(h.ss,{children:e.isPlaceholder?null:(0,g.ie)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,n.jsx)(h.RM,{children:(null===(r=b.getRowModel().rows)||void 0===r?void 0:r.length)?b.getRowModel().rows.map(e=>(0,n.jsx)(h.SC,{"data-state":e.getIsSelected()&&"selected",children:e.getVisibleCells().map(e=>(0,n.jsx)(h.pj,{children:(0,g.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,n.jsx)(h.SC,{children:(0,n.jsx)(h.pj,{colSpan:l.length,className:"h-24 text-center",children:"No results."})})})]})}),(0,n.jsxs)("div",{className:"flex items-center justify-end space-x-2 py-4",children:[(0,n.jsx)(o.z,{variant:"outline",size:"sm",onClick:()=>b.previousPage(),disabled:!b.getCanPreviousPage(),children:"Previous"}),(0,n.jsx)(o.z,{variant:"outline",size:"sm",onClick:()=>b.nextPage(),disabled:!b.getCanNextPage(),children:"Next"})]})]})}var v=r(19798),N=r(16463),w=()=>{let e=(0,N.useRouter)(),[t,r]=(0,s.useState)([]);return(0,s.useEffect)(()=>{(async()=>{try{let e=await (0,v.Uf)();r(e)}catch(t){console.error("Error fetching course:",t),e.push("/")}})()},[e]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"p-6",children:(0,n.jsx)(b,{columns:m,data:t})})})}},94693:function(e,t,r){"use strict";r.d(t,{C:function(){return l}});var n=r(57437);r(2265);var s=r(73969),a=r(37440);let o=(0,s.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function l(e){let{className:t,variant:r,...s}=e;return(0,n.jsx)("div",{className:(0,a.cn)(o({variant:r}),t),...s})}},50495:function(e,t,r){"use strict";r.d(t,{d:function(){return i},z:function(){return c}});var n=r(57437),s=r(2265),a=r(13350),o=r(73969),l=r(37440);let i=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",success:"bg-emerald-600 text-white hover:bg-emerald-600/80"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,t)=>{let{className:r,variant:s,size:o,asChild:c=!1,...u}=e,d=c?a.g7:"button";return(0,n.jsx)(d,{className:(0,l.cn)(i({variant:s,size:o,className:r})),ref:t,...u})});c.displayName="Button"},46910:function(e,t,r){"use strict";r.d(t,{$F:function(){return d},AW:function(){return m},Ju:function(){return p},Qk:function(){return f},VD:function(){return h},Xi:function(){return g},h_:function(){return u}});var n=r(57437),s=r(2265),a=r(12460),o=r(87592),l=r(22468),i=r(28165),c=r(37440);let u=a.fC,d=a.xz,f=a.ZA;a.Uv,a.Tr,a.Ee,s.forwardRef((e,t)=>{let{className:r,inset:s,children:l,...i}=e;return(0,n.jsxs)(a.fF,{ref:t,className:(0,c.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",s&&"pl-8",r),...i,children:[l,(0,n.jsx)(o.Z,{className:"ml-auto h-4 w-4"})]})}).displayName=a.fF.displayName,s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(a.tu,{ref:t,className:(0,c.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...s})}).displayName=a.tu.displayName;let m=s.forwardRef((e,t)=>{let{className:r,sideOffset:s=4,...o}=e;return(0,n.jsx)(a.Uv,{children:(0,n.jsx)(a.VY,{ref:t,sideOffset:s,className:(0,c.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...o})})});m.displayName=a.VY.displayName;let g=s.forwardRef((e,t)=>{let{className:r,inset:s,...o}=e;return(0,n.jsx)(a.ck,{ref:t,className:(0,c.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s&&"pl-8",r),...o})});g.displayName=a.ck.displayName,s.forwardRef((e,t)=>{let{className:r,children:s,checked:o,...i}=e;return(0,n.jsxs)(a.oC,{ref:t,className:(0,c.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),checked:o,...i,children:[(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(a.wU,{children:(0,n.jsx)(l.Z,{className:"h-4 w-4"})})}),s]})}).displayName=a.oC.displayName,s.forwardRef((e,t)=>{let{className:r,children:s,...o}=e;return(0,n.jsxs)(a.Rk,{ref:t,className:(0,c.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...o,children:[(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(a.wU,{children:(0,n.jsx)(i.Z,{className:"h-2 w-2 fill-current"})})}),s]})}).displayName=a.Rk.displayName;let p=s.forwardRef((e,t)=>{let{className:r,inset:s,...o}=e;return(0,n.jsx)(a.__,{ref:t,className:(0,c.cn)("px-2 py-1.5 text-sm font-semibold",s&&"pl-8",r),...o})});p.displayName=a.__.displayName;let h=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(a.Z0,{ref:t,className:(0,c.cn)("-mx-1 my-1 h-px bg-muted",r),...s})});h.displayName=a.Z0.displayName},83102:function(e,t,r){"use strict";r.d(t,{I:function(){return o}});var n=r(57437),s=r(2265),a=r(37440);let o=s.forwardRef((e,t)=>{let{className:r,type:s,value:o,...l}=e;return(0,n.jsx)("input",{type:s,value:o||"",className:(0,a.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...l})});o.displayName="Input"},26975:function(e,t,r){"use strict";r.d(t,{RM:function(){return i},SC:function(){return c},iA:function(){return o},pj:function(){return d},ss:function(){return u},xD:function(){return l}});var n=r(57437),s=r(2265),a=r(37440);let o=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{className:"relative w-full overflow-auto",children:(0,n.jsx)("table",{ref:t,className:(0,a.cn)("w-full caption-bottom text-sm",r),...s})})});o.displayName="Table";let l=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("thead",{ref:t,className:(0,a.cn)("[&_tr]:border-b",r),...s})});l.displayName="TableHeader";let i=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("tbody",{ref:t,className:(0,a.cn)("[&_tr:last-child]:border-0",r),...s})});i.displayName="TableBody",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("tfoot",{ref:t,className:(0,a.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",r),...s})}).displayName="TableFooter";let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("tr",{ref:t,className:(0,a.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r),...s})});c.displayName="TableRow";let u=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("th",{ref:t,className:(0,a.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",r),...s})});u.displayName="TableHead";let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("td",{ref:t,className:(0,a.cn)("p-4 pl-8 align-middle [&:has([role=checkbox])]:pr-0",r),...s})});d.displayName="TableCell",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("caption",{ref:t,className:(0,a.cn)("mt-4 text-sm text-muted-foreground",r),...s})}).displayName="TableCaption"},1398:function(e,t,r){"use strict";var n=r(38472),s=r(7561);let a=n.Z.create({baseURL:"https://guardianshield.uk/",withCredentials:!0});a.interceptors.request.use(async e=>{let t;return console.log("Client side cookies: ",t=s.Z.get("jwtToken")),t&&(e.headers.Authorization="Bearer ".concat(t)),e.data instanceof FormData||(e.headers["Content-Type"]="application/json"),e},e=>Promise.reject(e)),t.Z=a},37440:function(e,t,r){"use strict";r.d(t,{cn:function(){return o},h:function(){return l}});var n=r(98591),s=r(61362),a=r(24516);function o(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,n.W)(t))}let l=e=>{let t=new Date(e),r=t.getTimezoneOffset();return console.log("Offset:",r),t.setMinutes(t.getMinutes()-r),console.log("Date:",t),(0,s.Q)(t,{addSuffix:!0})}},73969:function(e,t,r){"use strict";r.d(t,{j:function(){return a}});let n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,s=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(s&&(s+=" "),s+=n);else for(r in t)t[r]&&(s&&(s+=" "),s+=r)}return s}(e))&&(n&&(n+=" "),n+=t);return n},a=(e,t)=>r=>{var a;if((null==t?void 0:t.variants)==null)return s(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:o,defaultVariants:l}=t,i=Object.keys(o).map(e=>{let t=null==r?void 0:r[e],s=null==l?void 0:l[e];if(null===t)return null;let a=n(t)||n(s);return o[e][a]}),c=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return s(e,i,null==t?void 0:null===(a=t.compoundVariants)||void 0===a?void 0:a.reduce((e,t)=>{let{class:r,className:n,...s}=t;return Object.entries(s).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...l,...c}[t]):({...l,...c})[t]===r})?[...e,r,n]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}},96273:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(78030).Z)("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]])},18422:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(78030).Z)("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]])},16463:function(e,t,r){"use strict";var n=r(71169);r.o(n,"redirect")&&r.d(t,{redirect:function(){return n.redirect}}),r.o(n,"useParams")&&r.d(t,{useParams:function(){return n.useParams}}),r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}})}},function(e){e.O(0,[5508,6018,4810,3671,6765,7138,6399,1162,2971,7023,1744],function(){return e(e.s=1123)}),_N_E=e.O()}]);