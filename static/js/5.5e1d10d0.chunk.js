(this["webpackJsonprest-react"]=this["webpackJsonprest-react"]||[]).push([[5],{125:function(t,e,a){},126:function(t,e,a){},145:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=(a(125),a(35)),i=(a(126),function(t){var e=t.imgSrc;return c.a.createElement("div",{className:"image-cell"},c.a.createElement("img",{src:a(62)("./".concat(e)),alt:e.substring(0,e.indexOf("_"))}))}),o=function(t){var e=t.images;return c.a.createElement("section",{className:"masonry-grid"},e.map((function(t,e){return c.a.createElement(i,{key:e,imgSrc:t})})))},s=a(38),p=["kitchen_640.jpg","asparagus_640.jpg","cook_640.jpg","breakfast_640.jpg","table_640.jpg","jause_640.jpg","birthday_640.jpg","catering_640.jpg","kitchen_640.jpg","asparagus_640.jpg","cook_640.jpg","breakfast_640.jpg","table_640.jpg","jause_640.jpg","birthday_640.jpg","catering_640.jpg"];e.default=function(){return c.a.createElement("section",{className:"gallery"},c.a.createElement(r.a,{large:!0},"Food and Restaurant Gallery"),c.a.createElement(s.b,null,c.a.createElement(o,{images:p})))}},35:function(t,e,a){"use strict";var n=a(41),c=a(40),r=a(0),i=a.n(r),o=(a(42),function t(){Object(c.a)(this,t)});o.IS_SMALL="--is-small",o.IS_NORMAL="--is-normal",o.IS_LARGE="--is-large";e.a=function(t){var e=t.children,a=Object(n.a)(t,["children"]);return i.a.createElement("h2",{className:function(t){var e,a=t.small,n=t.normal,c=t.large;return a?e=o.IS_SMALL:n?e=o.IS_NORMAL:c&&(e=o.IS_LARGE),e?"".concat("page-heading"," ").concat("page-heading").concat(e):"page-heading"}(a)},e)}},38:function(t,e,a){"use strict";a.d(e,"a",(function(){return p}));var n=a(0),c=a.n(n),r=(a(61),"".concat("animator").concat("--is-playing")),i="".concat("animator").concat("--is-fading-out"),o="".concat("animator").concat("--is-pulling-up"),s={FADE_OUT:"".concat("animator"," ").concat(i),PULL_UP:"".concat("animator"," ").concat(o)},p={PULL_UP:"PULL_UP",FADE_OUT:"FADE_OUT"};e.b=function(t){var e=t.children,a=t.animationType,i=void 0===a?"FADE_OUT":a,o=Object(n.useRef)(null);return Object(n.useEffect)((function(){var t=function(){var t=o.current;t&&(window.scrollY+.75*window.innerHeight>=t.offsetTop&&t.classList.add(r))};return document.addEventListener("scroll",t),t(),function(){return document.removeEventListener("scroll",t)}}),[e]),c.a.createElement("div",{className:s[i],ref:o},e)}},40:function(t,e,a){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}a.d(e,"a",(function(){return n}))},41:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var n=a(7);function c(t,e){if(null==t)return{};var a,c,r=Object(n.a)(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(c=0;c<i.length;c++)a=i[c],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}},42:function(t,e,a){},43:function(t,e,a){t.exports=a.p+"static/media/asparagus_640.ff3c8f32.jpg"},44:function(t,e,a){t.exports=a.p+"static/media/birthday_640.9ff4e82d.jpg"},45:function(t,e,a){t.exports=a.p+"static/media/breakfast_640.e678c7d5.jpg"},46:function(t,e,a){t.exports=a.p+"static/media/catering_640.f195c0b5.jpg"},47:function(t,e,a){t.exports=a.p+"static/media/cook_640.8f3972db.jpg"},48:function(t,e,a){t.exports=a.p+"static/media/jause_640.106cf314.jpg"},49:function(t,e,a){t.exports=a.p+"static/media/kitchen_640.24e611fa.jpg"},50:function(t,e,a){t.exports=a.p+"static/media/restaurant_640.fd4cd5c3.jpg"},51:function(t,e,a){t.exports=a.p+"static/media/service_640.e49edfe5.jpg"},52:function(t,e,a){t.exports=a.p+"static/media/serving_640.49a2d49f.jpg"},53:function(t,e,a){t.exports=a.p+"static/media/table_640.0140d683.jpg"},61:function(t,e,a){},62:function(t,e,a){var n={"./asparagus_640.jpg":43,"./birthday_1280.jpg":63,"./birthday_640.jpg":44,"./breakfast_640.jpg":45,"./catering_1280.jpg":64,"./catering_640.jpg":46,"./chef_1280.jpg":65,"./cook_640.jpg":47,"./jause_1280.jpg":66,"./jause_640.jpg":48,"./kitchen_640.jpg":49,"./restaurant_1280.jpg":67,"./restaurant_640.jpg":50,"./salmon_1280.jpg":68,"./service_640.jpg":51,"./serving_640.jpg":52,"./table_640.jpg":53,"./telephone_1280.jpg":69};function c(t){var e=r(t);return a(e)}function r(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}c.keys=function(){return Object.keys(n)},c.resolve=r,t.exports=c,c.id=62},63:function(t,e,a){t.exports=a.p+"static/media/birthday_1280.e4332371.jpg"},64:function(t,e,a){t.exports=a.p+"static/media/catering_1280.7b092313.jpg"},65:function(t,e,a){t.exports=a.p+"static/media/chef_1280.22285385.jpg"},66:function(t,e,a){t.exports=a.p+"static/media/jause_1280.ff25e3c9.jpg"},67:function(t,e,a){t.exports=a.p+"static/media/restaurant_1280.cd67055b.jpg"},68:function(t,e,a){t.exports=a.p+"static/media/salmon_1280.0f27d4f9.jpg"},69:function(t,e,a){t.exports=a.p+"static/media/telephone_1280.9cdfe4a4.jpg"}}]);
//# sourceMappingURL=5.5e1d10d0.chunk.js.map