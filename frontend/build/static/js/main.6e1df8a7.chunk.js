(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,a){e.exports={header:"MainNavigation_header__liwMc",list:"MainNavigation_list__9qxjW",active:"MainNavigation_active__GiNzP"}},function(e,t,a){e.exports={events:"EventsList_events__2gR5A",list:"EventsList_list__1LiUI",item:"EventsList_item__jT614",content:"EventsList_content__3IWx6"}},function(e,t,a){e.exports={header:"EventsNavigation_header__3dmmr",list:"EventsNavigation_list__3B_OX",active:"EventsNavigation_active__1TID9"}},,function(e,t,a){e.exports={event:"EventItem_event__2yZ3y",actions:"EventItem_actions__3vNgM"}},function(e,t,a){e.exports={form:"EventForm_form__zJezl",actions:"EventForm_actions__1asEH"}},,,function(e,t,a){e.exports={newsletter:"NewsletterSignup_newsletter__24aTy"}},function(e,t,a){e.exports=a(22)},,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),c=a.n(r),i=(a(21),a(3));function s(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Welcome!"),l.a.createElement("p",null,"Please visit our 'Events' page to view or add events"))}var m=a(5),o=a.n(m);var u=function(e){let{events:t}=e;return l.a.createElement("div",{className:o.a.events},l.a.createElement("h1",null,"All Events"),l.a.createElement("ul",{className:o.a.list},t.map(e=>l.a.createElement("li",{key:e.id,className:o.a.item},l.a.createElement(i.b,{to:"".concat(e.id)},l.a.createElement("img",{src:e.image,alt:e.title}),l.a.createElement("div",{className:o.a.content},l.a.createElement("h2",null,e.title),l.a.createElement("time",null,e.date)))))))},d=a(2),E=a(1);async function v(){const e=await fetch("https://events-one-pi.vercel.app/events"),t=await e.json();if(!e.ok)throw Object(E.q)({message:"Failed to load data"},{status:500});return t.events}function p(){return Object(E.n)({events:v()})}var f=function(){const{events:e}=Object(d.n)();return n.React.createElement(n.Suspense,{fallback:n.React.createElement("p",{style:{textAlign:"center"}},"Loading...")},n.React.createElement(d.a,{resolve:e},e=>n.React.createElement(u,{events:e})))},h=a(8),g=a.n(h);var _=function(e){let{event:t}=e;const a=Object(i.g)();return l.a.createElement("article",{className:g.a.event},l.a.createElement("img",{src:t.image,alt:t.title}),l.a.createElement("h1",null,t.title),l.a.createElement("time",null,t.date),l.a.createElement("p",null,t.description),l.a.createElement("menu",{className:g.a.actions},l.a.createElement(i.b,{to:"edit"},"Edit"),l.a.createElement("button",{onClick:function(){window.confirm("Are you sure?")&&a(null,{method:"delete"})}},"Delete")))};function b(){const e=Object(d.u)("event-details").event;return l.a.createElement(_,{event:e})}async function w(e){let{request:t,params:a}=e;const n=a.id,l=await fetch("https://events-one-pi.vercel.app/events/"+n);if(!l.ok)throw Object(E.q)({message:"Failed to fetch data for selected event"},{status:500});return l}async function N(e){let{request:t,params:a}=e;const n=a.id;if(!(await fetch("https://events-one-pi.vercel.app/events/"+n,{method:t.method})).ok)throw Object(E.q)({message:"Failed to delete event"},{status:500});return Object(E.u)("/events")}var j=a(9),y=a.n(j);var O=function(e){let{method:t,event:a}=e;const n=Object(d.k)(),r=Object(d.q)(),c="submitting"===Object(d.r)().state;return l.a.createElement(i.a,{method:t,className:y.a.form},n&&n.errors&&l.a.createElement("ul",null,Object.values(n.errors).map(e=>l.a.createElement("li",{key:e},e))),l.a.createElement("p",null,l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{id:"title",type:"text",name:"title",required:!0,defaultValue:a?a.title:""})),l.a.createElement("p",null,l.a.createElement("label",{htmlFor:"image"},"Image"),l.a.createElement("input",{id:"image",type:"url",name:"image",required:!0,defaultValue:a?a.image:""})),l.a.createElement("p",null,l.a.createElement("label",{htmlFor:"date"},"Date"),l.a.createElement("input",{id:"date",type:"date",name:"date",required:!0,defaultValue:a?a.date:""})),l.a.createElement("p",null,l.a.createElement("label",{htmlFor:"description"},"Description"),l.a.createElement("textarea",{id:"description",name:"description",rows:"5",required:!0,defaultValue:a?a.description:""})),l.a.createElement("div",{className:y.a.actions},l.a.createElement("button",{disabled:c,type:"button",onClick:function(){r("..")}},"Cancel"),l.a.createElement("button",{disabled:c},c?"Submitting..":"Save")))};function x(){return l.a.createElement(O,{method:"POST"})}async function k(e){let{request:t,params:a}=e;const n=t.method,l=await t.formData(),r="PATCH"===n?a.id:"",c="https://events-one-pi.vercel.app/events"+("PATCH"===n?"/"+r:""),i={title:l.get("title"),image:l.get("image"),date:l.get("date"),description:l.get("description")},s=await fetch(c,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(i)});if(422===s.status)return s;if(!s.ok)throw Object(E.q)({message:"Could not save event"},{status:500});return Object(E.u)("/events")}function q(){const e=Object(d.u)("event-details").event;return l.a.createElement(O,{method:"PATCH",event:e})}var A=a(12),F=a.n(A);var S=function(){const e=Object(i.f)(),{data:t,state:a}=e;return Object(n.useEffect)(()=>{"idle"===a&&t&&t.message&&window.alert(t.message)},[t,a]),l.a.createElement(e.Form,{method:"post",action:"/newsletter",className:F.a.newsletter},l.a.createElement("input",{type:"email",placeholder:"Sign up for newsletter...","aria-label":"Sign up for newsletter"}),l.a.createElement("button",null,"Sign up"))};var T=function(){return l.a.createElement("main",null,l.a.createElement("h1",null,'"Join our awesome newsletter!"'),l.a.createElement(S,null))};async function C(e){let{request:t}=e;const a=(await t.formData()).get("email");return console.log(a),{message:"Signup successful!"}}var P=a(4),D=a.n(P);var I=function(){return l.a.createElement("header",{className:D.a.header},l.a.createElement("nav",null,l.a.createElement("ul",{className:D.a.list},l.a.createElement("li",null,l.a.createElement(i.c,{to:"/",className:e=>{let{isActive:t}=e;return t?D.a.active:void 0},end:!0},"Home")),l.a.createElement("li",null,l.a.createElement(i.c,{to:"/events",className:e=>{let{isActive:t}=e;return t?D.a.active:void 0}},"Events")),l.a.createElement("li",null,l.a.createElement(i.c,{to:"/newsletter",className:e=>{let{isActive:t}=e;return t?D.a.active:void 0}},"Newsletter")))),l.a.createElement(S,null))};function L(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(I,null),l.a.createElement("main",null,l.a.createElement(d.b,null)))}function M(){const e=Object(d.t)(),t=500===e.status?"Data fetching failed":404===e.status?"Page not found":"Error Encountered",a=500===e.status?e.data.message:404===e.status?"The page entered does not exist. Please check your link and try again":"Something went wrong";return l.a.createElement("main",null,l.a.createElement(I,null),l.a.createElement("h1",null,t),l.a.createElement("p",null,a))}var R=a(6),H=a.n(R);var J=function(){return l.a.createElement("header",{className:H.a.header},l.a.createElement("nav",null,l.a.createElement("ul",{className:H.a.list},l.a.createElement("li",null,l.a.createElement(i.c,{to:"/events",className:e=>{let{isActive:t}=e;return t?H.a.active:void 0},end:!0},"All Events")),l.a.createElement("li",null,l.a.createElement(i.c,{to:"/events/new",className:e=>{let{isActive:t}=e;return t?H.a.active:void 0}},"New Event")))))};function V(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(J,null),l.a.createElement(d.b,null))}var z=function(){const e=Object(i.e)([{path:"/",element:l.a.createElement(L,null),errorElement:l.a.createElement(M,null),children:[{index:!0,element:l.a.createElement(s,null)},{path:"events",element:l.a.createElement(V,null),children:[{index:!0,element:l.a.createElement(f,null),loader:p},{path:":id",id:"event-details",loader:w,children:[{index:!0,element:l.a.createElement(b,null),loader:w,action:N},{path:"edit",element:l.a.createElement(q,null),action:k}]},{path:"new",element:l.a.createElement(x,null),action:k}]},{path:"newsletter",element:l.a.createElement(T,null),action:C}]}]);return l.a.createElement(i.d,{router:e})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(z,null)))}],[[13,1,2]]]);
//# sourceMappingURL=main.6e1df8a7.chunk.js.map