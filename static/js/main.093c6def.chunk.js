(this["webpackJsonprest-react"]=this["webpackJsonprest-react"]||[]).push([[1],{10:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n={home:{phrase:"Delicious recipes and wide option of choice"},menu:{phrase:"Check our meals"},events:{phrase:"Our events and news"},chef:{phrase:"Meet our chef"},gallery:{phrase:"Check our gallery"},contact:{phrase:"How to get in touch with us"}},c="/foodie-haven-react",r={DISHES:"".concat(c,"/data/dishes.json"),EVENTS:"".concat(c,"/data/events.json"),CHEF:"".concat(c,"/data/chef.json")}},13:function(e,t,a){"use strict";var n=a(0),c=a.n(n);a(34);t.a=function(e){var t=e.children,a=e.error?"".concat("page-info__message"," ").concat("page-info__message").concat("--is-error"):"page-info__message";return c.a.createElement("div",{className:"page-info"},c.a.createElement("h1",{className:a},t))}},21:function(e,t,a){e.exports=a(35)},26:function(e,t,a){},27:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),l=a.n(r),o=(a(26),a(3)),i=a(6),s=(a(27),a(10)),m=function(e){var t=e.location,a=function(){var e=t.pathname.replace("/",""),a=0===e.length;return{catchPhrase:a?s.b.home.phrase:s.b[e].phrase,pathName:a?"home":e}}(),n=a.catchPhrase,r=a.pathName;return c.a.createElement("header",{className:"main-header main-header--is-showing-".concat(r)},c.a.createElement("div",{className:"main-header__glass-pane"},c.a.createElement("h1",{className:"main-header__intro-heading"},"foodie haven"),c.a.createElement("p",{className:"main-header__catchline"},n),c.a.createElement(o.b,{to:"/menu"},"check our menu")))},u=function(){return c.a.createElement(i.c,null,c.a.createElement(i.a,{component:m}))},h=a(14),f=(a(32),function(){var e=Object(n.useRef)(null),t=Object(n.useRef)("navigation--is-anchored");Object(n.useEffect)((function(){var a=function(){e.current&&(window.scrollY>=100?e.current.classList.add(t.current):e.current.classList.remove(t.current))};return document.addEventListener("scroll",a),function(){return document.removeEventListener("scroll",a)}}),[]);var a=Object(n.useState)(!1),r=Object(h.a)(a,2),l=r[0],i=r[1];return c.a.createElement("nav",{className:"navigation",ref:e},c.a.createElement("ul",{className:l?"navigation__links-list navigation__links-list--is-shown":"navigation__links-list"},c.a.createElement("li",{className:"navigation__link-item"},c.a.createElement(o.c,{exact:!0,to:"/"},"Home")),c.a.createElement("li",{className:"navigation__link-item"},c.a.createElement(o.c,{to:"/menu"},"Menu")),c.a.createElement("li",{className:"navigation__link-item"},c.a.createElement(o.c,{to:"/events"},"Events")),c.a.createElement("li",{className:"navigation__link-item"},c.a.createElement(o.c,{to:"/chef"},"Chef")),c.a.createElement("li",{className:"navigation__link-item"},c.a.createElement(o.c,{to:"/gallery"},"Gallery")),c.a.createElement("li",{className:"navigation__link-item"},c.a.createElement(o.c,{to:"/contact"},"Contact"))),c.a.createElement("button",{className:"navigation__hamburger",onClick:function(){return i(!l)}},c.a.createElement("i",{className:l?"fas fa-times":"fas fa-bars"})))}),E=Object(n.lazy)((function(){return a.e(4).then(a.bind(null,144))})),p=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(9)]).then(a.bind(null,141))})),d=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,145))})),v=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,142))})),g=Object(n.lazy)((function(){return a.e(5).then(a.bind(null,146))})),_=Object(n.lazy)((function(){return Promise.all([a.e(3),a.e(10)]).then(a.bind(null,143))})),b=Object(n.lazy)((function(){return a.e(11).then(a.bind(null,140))})),N=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,strict:!0,path:"/",component:E}),c.a.createElement(i.a,{exact:!0,strict:!0,path:"/menu",component:p}),c.a.createElement(i.a,{exact:!0,strict:!0,path:"/events",component:d}),c.a.createElement(i.a,{exact:!0,strict:!0,path:"/chef",component:v}),c.a.createElement(i.a,{exact:!0,strict:!0,path:"/gallery",component:g}),c.a.createElement(i.a,{exact:!0,strict:!0,path:"/contact",component:_}),c.a.createElement(i.a,{component:b})))},k=(a(33),function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("p",{className:"footer__copyright-info"},"Foodie Haven SPA (Bart Krolak, 2020)"))}),j=a(13);var y=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(u,null),c.a.createElement(f,null),c.a.createElement(c.a.Suspense,{fallback:c.a.createElement(j.a,null,"Loading content...")},c.a.createElement(N,null)),c.a.createElement(k,null))};l.a.render(c.a.createElement(o.a,{basename:"/foodie-haven-react"},c.a.createElement(y,null)),document.getElementById("root"))}},[[21,2,7]]]);
//# sourceMappingURL=main.093c6def.chunk.js.map