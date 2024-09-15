"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1979],{87292:function(e,t,r){r.d(t,{Dv:function(){return u},PS:function(){return c},aA:function(){return n},d7:function(){return a},dq:function(){return l},mt:function(){return i}});var o=r(49894),s=r(1398);let n=async(e,t)=>{if((0,o.yn)())throw Error("You are not allowed to create lesson");try{let r=await s.Z.post("/api/lessons/auth/createLesson/".concat(e),{title:t});return console.log("Create lesson response",r.data),r.data}catch(e){if(console.error("[ACTIONS_CREATE_LESSON]",e),e.response&&e.response.data)throw Error(e.response.data.message||"Something went wrong!");throw Error(e.message||"Something went wrong!")}},a=async e=>{try{let t=await s.Z.get("/api/lessons/auth/getLessonById/".concat(e));return console.log("Get lesson response",t.data),t.data}catch(e){if(console.error("[ACTIONS_GET_LESSON]",e),e.response&&e.response.data)throw Error(e.response.data.message||"Something went wrong!");throw Error(e.message||"Something went wrong!")}},c=async(e,t)=>{if((0,o.yn)())throw Error("You are not allowed to edit lesson");try{console.log("Edit lesson values",t);let r=await s.Z.put("/api/lessons/auth/updateLesson/".concat(e),t);return console.log("Update lesson response",r.data),r.data}catch(e){if(console.log("[ACTIONS_EDIT_LESSON]",e),e.response&&e.response.data)throw Error(e.response.data.message||"Something went wrong!");throw Error(e.message||"Something went wrong!")}},l=async(e,t)=>{if((0,o.yn)())throw Error("You are not allowed to upload lesson video");try{let r=new FormData;r.append("file",t);let o=await s.Z.put("/api/lessons/auth/uploadVideo/".concat(e),r);return console.log("Upload video response",o.data),o.data}catch(e){if(console.error("[ACTIONS_UPLOAD_LESSON_VIDEO]",e),e.response&&e.response.data)throw Error(e.response.data.message||"Something went wrong!");throw Error(e.message||"Something went wrong!")}},i=async(e,t)=>{if((0,o.yn)())throw Error("You are not allowed to edit this lesson");try{let r="/api/lessons/auth/course/".concat(e,"/reorderLesson");console.log("Reorder lesson updateData",r,t);let o=await s.Z.patch(r,t);return console.log("Reorder lesson response",o.data),o.data}catch(e){if(console.error("[ACTIONS_REORDER_LESSON]",e),e.response&&e.response.data)throw Error(e.response.data.message||"Something went wrong!");throw Error(e.message||"Something went wrong!")}},u=async e=>{if((0,o.yn)())throw Error("You are not allowed to delete lesson");try{let t=await s.Z.delete("/api/lessons/auth/deleteLessonAndReorder/".concat(e));return console.log("Delete lesson response",t.data),t.data}catch(e){if(console.error("[ACTIONS_DELETE_LESSON]",e),e.response&&e.response.data)throw Error(e.response.data.message||"Something went wrong!");throw Error(e.message||"Something went wrong!")}}},19798:function(e,t,r){r.d(t,{B$:function(){return c},D$:function(){return l},Kz:function(){return g},PI:function(){return h},Uf:function(){return s},V3:function(){return a},Yt:function(){return i},n6:function(){return n},tG:function(){return d},xb:function(){return u}});var o=r(1398);let s=async()=>{try{return(await o.Z.get("/api/courses/auth/getCoursesOfInstructor")).data}catch(e){return console.log("[ACTIONS_GET_COURSES_OF_INSTRUCTOR]",e),[]}},n=async e=>{try{return(await o.Z.get("/api/courses/auth/getCoursesOfInstructorById",{params:{userId:e}})).data}catch(e){return console.log("[ACTIONS_GET_COURSES_OF_INSTRUCTOR]",e),[]}},a=async()=>{try{return(await o.Z.get("/api/courses/getAllCourses")).data}catch(e){return console.log("[ACTIONS_GET_ALL_COURSES]",e),[]}},c=async(e,t)=>{try{return(await o.Z.get("/api/courses/searchCourses",{params:{title:e,categoryId:t}})).data}catch(e){return console.log("[ACTIONS_SEARCH_COURSES]",e),[]}},l=async()=>{try{return(await o.Z.get("/api/courses/getPublishedCourses")).data}catch(e){return console.log("[ACTIONS_GET_ALL_COURSES]",e),[]}},i=async e=>{try{let t=await o.Z.get("/api/courses/getCourseById/".concat(e));return console.log("Get course by id response",t.data),t.data}catch(e){if(console.log("[ACTIONS_GET_COURSE_BY_ID]",e),e.response&&e.response.data)throw Error(e.response.data.message||"Something went wrong!");throw Error(e.message||"Something went wrong!")}},u=async e=>{try{let t=(await o.Z.get("/api/courses/getCourseByIdByUser/".concat(e))).data;return console.log("Get course by id response",t),t}catch(e){if(console.log("[ACTIONS_GET_COURSE_BY_ID]",e),e.response&&e.response.data)throw Error(e.response.data.message||"Something went wrong!");throw Error(e.message||"Something went wrong!")}},d=async()=>{try{return(await o.Z.get("/api/category/getAll")).data}catch(e){return console.log("[ACTIONS_GET_ALL_CATEGORIES]",e),[]}},g=async()=>{try{return(await o.Z.get("/api/courses/auth/getStudentOwnedCourses")).data}catch(e){return console.log("[ACTIONS_GET_STUDENT_OWN_COURSES]",e),[]}},h=async e=>{try{return(await o.Z.get("/api/courses/auth/getStudentOwnedCourseWithLessonsAndProgressById/".concat(e))).data}catch(e){return console.log("[ACTIONS_GET_STUDENT_OWN_COURSE_BY_ID]",e),null}}},63067:function(e,t,r){r.d(t,{ES:function(){return n},TT:function(){return s},W3:function(){return c},ob:function(){return a}});var o=r(1398);let s=async e=>{try{return(await o.Z.get("/api/lessonProgress/auth/getProgressCount/".concat(e))).data}catch(e){return console.log("[ACTIONS_GET_PROGRESS_COUNT]",e),0}},n=async(e,t)=>{try{let r="/api/lessonProgress/auth/course/".concat(e,"/lesson/").concat(t,"/completed"),s=await o.Z.post(r);return console.log("[ACTIONS_COMPLETED_LESSON]",s.data),s.data}catch(e){if(console.log("[ACTIONS_COMPLETED_LESSON]",e),e.response&&e.response.data)throw Error(e.response.data.message||"Something went wrong! Completed lesson failed");throw Error(e.message||"Something went wrong! Completed lesson failed")}},a=async(e,t)=>{try{let r="/api/lessonProgress/auth/course/".concat(e,"/lesson/").concat(t,"/uncompleted"),s=await o.Z.patch(r);return console.log("[ACTIONS_UNCOMPLETED_LESSON]",s.data),s.data}catch(e){if(console.log("[ACTIONS_UNCOMPLETED_LESSON]",e),e.response&&e.response.data)throw Error(e.response.data.message||"Something went wrong! Uncompleted lesson failed");throw Error(e.message||"Something went wrong! Uncompleted lesson failed")}},c=async e=>{try{let t=(await o.Z.get("/api/enrollment/auth/generateCertificate/course/".concat(e),{responseType:"blob",headers:{"Content-Type":"application/pdf"}})).data;return URL.createObjectURL(t)}catch(e){if(console.error("Error generating certificate:",e),e.response&&e.response.data)throw Error(e.response.data.message||"Something went wrong! Uncompleted course to get certificate");throw Error(e.message||"Something went wrong! Uncompleted course to get certificate")}}},89058:function(e,t,r){r.d(t,{d:function(){return a},g:function(){return c}});var o=r(1398),s=r(19798),n=r(87292);let a=async e=>{let{courseId:t,lessonId:r}=e;try{let e=await c(t),a=await (0,s.xb)(t),l=await (0,n.d7)(r),i=a.lessons.at(l.position),u=(await o.Z.get("/api/lessons/auth/userIsCompletedLesson/".concat(r))).data;return console.log("User progress: ",u),{enrollment:e,course:a,lesson:l,nextChapter:i,userProgress:u}}catch(e){if(console.error("[ACTIONS_GET_COURSE_LESSON_TO_PLAY]",e),e.response&&e.response.data)throw Error(e.response.data.message||"Something went wrong!");throw Error(e.message||"Something went wrong!")}},c=async e=>{try{let t=await o.Z.get("/api/enrollment/auth/course/".concat(e,"/getEnrollmentOfUser"));return console.log("Get enrollment of user response",t.data),t.data}catch(e){return null}}},69942:function(e,t,r){r.d(t,{Z:function(){return p}});var o=r(57437),s=r(29338),n=r(2265),a=r(1398);let c=async(e,t)=>{let{rating:r,feedback:o}=t;try{let t="/api/feedbacks/auth/addFeedback/".concat(e);console.log("Add feedback endpoint",t,r,o);let s=await a.Z.post(t,{rating:r,feedback:o});return console.log("Add feedback response",s.data),s.data}catch(e){if(console.error("[ACTIONS_ADD_FEEDBACK]",e),e.response&&e.response.data)throw Error(e.response.data.message||"Something went wrong!");throw Error(e.message||"Something went wrong!")}},l=async e=>{try{let t=await a.Z.get("/api/feedbacks/getFeedbacks/".concat(e));return console.log("Get feedbacks response",t.data),t.data}catch(e){return console.error("[ACTIONS_GET_FEEDBACKS]",e),[]}};var i=r(89058),u=r(50495),d=r(49894),g=r(37440),h=r(10209),m=e=>{let{commentData:t,courseId:r}=e,[a,l]=(0,n.useState)(0),[m,p]=(0,n.useState)(""),[f,w]=(0,n.useState)(!1),[S,E]=(0,n.useState)(!1);(0,n.useEffect)(()=>{localStorage.getItem("userData")&&w(!0)},[]),(0,n.useEffect)(()=>{(async()=>{try{let e=await (0,i.g)(r);e&&e.lessonProgressList?E(!0):E(!1)}catch(e){console.error("Error fetching enrollment:",e),E(!1)}})()},[r]);let y=e=>{l(e)},N=async()=>{console.log("Rating:",a),console.log("Comment:",m);try{await c(r,{rating:a,feedback:m}),h.ZP.success("Feedback submitted successfully")}catch(e){console.error("[ACTIONS_ADD_FEEDBACK]",e),h.ZP.error(e.message||"Failed to submit feedback")}};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.Toaster,{}),(0,o.jsxs)("div",{className:"p-4 border rounded-sm shadow-md",children:[(0,o.jsx)("h2",{className:"font-semibold text-base mb-4",children:"Rate this course"}),(0,o.jsx)("div",{className:"flex items-center mb-4",children:[1,2,3,4,5].map(e=>(0,o.jsx)(s.Z,{className:"h-6 w-6 cursor-pointer ".concat(a>=e?"text-yellow-500 fill-current":"text-gray-300"),onClick:()=>y(e)},e))}),(0,o.jsx)("textarea",{className:"w-full p-2 border rounded-sm mb-4 text-sm",rows:4,placeholder:"Leave a comment...",value:m,onChange:e=>p(e.target.value)}),(0,o.jsx)(u.z,{className:"px-4 py-2",onClick:N,disabled:!f||!S||!a||(0,d.Wv)(),children:"Submit"})]}),(0,o.jsxs)("div",{className:"pt-6",children:[(0,o.jsx)("h2",{className:"font-semibold text-base mb-2",children:"Comments and Ratings"}),t.map(e=>(0,o.jsxs)("div",{className:"mb-2 p-4 border rounded-sm shadow-md",children:[(0,o.jsxs)("div",{className:"flex items-center mb-2 justify-between",children:[(0,o.jsxs)("div",{className:"flex items-center",children:[[1,2,3,4,5].map(t=>(0,o.jsx)(s.Z,{className:"h-4 w-4 ".concat(e.rating>=t?"text-yellow-500":"text-gray-300")},t)),(0,o.jsx)("span",{className:"ml-2 font-semibold text-sm",children:e.fullName})]}),(0,o.jsx)("div",{className:"text-gray-500 text-xs",children:(0,g.h)(e.createdAt)})]}),(0,o.jsx)("p",{className:"text-sm",children:e.feedback})]},e.id))]})]})},p=e=>{let{courseId:t}=e,[r,a]=(0,n.useState)([]),[c,i]=(0,n.useState)(!0);if((0,n.useEffect)(()=>{(async()=>{a(await l(t)),i(!1)})()},[t]),c)return(0,o.jsx)("div",{children:"Loading..."});let u=r.length,d=u?(r.reduce((e,t)=>e+t.rating,0)/u).toFixed(1):"0.0",g=Number(d)/5*100;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"font-semibold text-lg",children:(0,o.jsxs)("div",{className:"flex items-center",children:[(0,o.jsxs)("div",{className:"relative h-6 w-6 mr-2",children:[(0,o.jsx)(s.Z,{className:"absolute top-0 left-0 h-full w-full text-gray-300"}),(0,o.jsx)(s.Z,{className:"absolute top-0 left-0 h-full w-full text-yellow-500",style:{clipPath:"inset(0 ".concat(100-g,"% 0 0)")}})]}),(0,o.jsxs)("span",{children:[d," course rating"]}),(0,o.jsx)("span",{className:"mx-2",children:"•"}),(0,o.jsxs)("span",{children:[u," ratings"]})]})}),(0,o.jsx)("div",{className:"pt-6",children:(0,o.jsx)(m,{commentData:r,courseId:t})})]})}},50495:function(e,t,r){r.d(t,{d:function(){return l},z:function(){return i}});var o=r(57437),s=r(2265),n=r(13350),a=r(73969),c=r(37440);let l=(0,a.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",success:"bg-emerald-600 text-white hover:bg-emerald-600/80"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),i=s.forwardRef((e,t)=>{let{className:r,variant:s,size:a,asChild:i=!1,...u}=e,d=i?n.g7:"button";return(0,o.jsx)(d,{className:(0,c.cn)(l({variant:s,size:a,className:r})),ref:t,...u})});i.displayName="Button"},64344:function(e,t,r){r.d(t,{Z:function(){return c}});var o=r(57437),s=r(2265),n=r(19848),a=r(37440);let c=s.forwardRef((e,t)=>{let{className:r,orientation:s="horizontal",decorative:c=!0,...l}=e;return(0,o.jsx)(n.f,{ref:t,decorative:c,orientation:s,className:(0,a.cn)("shrink-0 bg-border","horizontal"===s?"h-[1px] w-full":"h-full w-[1px]",r),...l})});c.displayName=n.f.displayName},49894:function(e,t,r){r.d(t,{Wv:function(){return s},pE:function(){return n},yn:function(){return o}});let o=()=>{let e=localStorage.getItem("userData");return!!e&&"BLOCK_ROLE_INSTRUCTOR"===JSON.parse(e).status},s=()=>{let e=localStorage.getItem("userData");return!!e&&"BLOCK_ROLE_STUDENT"===JSON.parse(e).status},n=()=>{let e=localStorage.getItem("userData");return!!e&&!0===JSON.parse(e).verify}},1398:function(e,t,r){var o=r(38472),s=r(7561);let n=o.Z.create({baseURL:"https://guardianshield.uk/",withCredentials:!0});n.interceptors.request.use(async e=>{let t;return console.log("Client side cookies: ",t=s.Z.get("jwtToken")),t&&(e.headers.Authorization="Bearer ".concat(t)),e.data instanceof FormData||(e.headers["Content-Type"]="application/json"),e},e=>Promise.reject(e)),t.Z=n},37440:function(e,t,r){r.d(t,{cn:function(){return a},h:function(){return c}});var o=r(98591),s=r(61362),n=r(24516);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,o.W)(t))}let c=e=>{let t=new Date(e),r=t.getTimezoneOffset();return console.log("Offset:",r),t.setMinutes(t.getMinutes()-r),console.log("Date:",t),(0,s.Q)(t,{addSuffix:!0})}}}]);