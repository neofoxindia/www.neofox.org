(window.webpackJsonp=window.webpackJsonp||[]).push([[9,8],{353:function(t,e,r){"use strict";r.r(e);var n=r(13),o=(r(77),r(367)),c={name:"BlogLatest",props:["tag"],components:{BlogCard:r(365).default},data:function(){return{posts:void 0}},fetchOnServer:!1,fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.b)({limit:4,page:1});case 2:t.posts=e.sent;case 3:case"end":return e.stop()}}),e)})))()},mounted:function(){}},l=(r(370),r(31)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"d-table w-100 position-relative bg-white"},[e("div",{staticClass:"container"},[e("h2",[t._v("Know More ")]),t._v(" "),e("div",{staticClass:"row"},t._l(t.posts,(function(t){return e("div",{key:t.id,staticClass:"col-lg-3 col-md-4 px-2 my-3"},[e("BlogCard",{attrs:{post:t}})],1)})),0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 d-flex justify-content-end py-5 line-25"},[e("NuxtLink",{staticClass:"px-2 btn-success rounded-2",attrs:{to:{name:"blog"}}},[t._v("Read More >")])],1)])])])}),[],!1,null,"76f243ff",null);e.default=component.exports;installComponents(component,{BlogCard:r(365).default})},365:function(t,e,r){"use strict";r.r(e);var n={name:"BlogCard",props:["post"]},o=r(31),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"post"},[e("NuxtLink",{staticClass:"row d-flex m-0 bg-white front-10",attrs:{to:{name:"blog-slug",params:{slug:t.post.slug}}}},[e("img",{staticClass:"w-100 col-12 p-0 m-0 post-image",attrs:{src:t.post.feature_image,alt:t.post.title}}),t._v(" "),e("div",{staticClass:"bg-light col-12 d-flex px-2 py-1 front-10 align-items-center flex-wrap shadow-sm",staticStyle:{"min-height":"80px"}},[e("small",{staticClass:"text-dark roboto-slab w-100"},[t._v(t._s(t._f("date")(t.post.updated_at)))]),t._v(" "),e("h3",{staticClass:"line-10 h6 text-dark w-100"},[t._v(t._s(t.post.title))])])])],1)}),[],!1,null,null,null);e.default=component.exports},367:function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return f})),r.d(e,"c",(function(){return v}));var n=r(13),o=(r(77),new(r(369).a)({url:"https://blog.foxapi.live",key:"0b99f9d918af26e6858e84ffa2",version:"v3"}));function c(t){return l.apply(this,arguments)}function l(){return(l=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,c,l,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.limit,n=e.from,c=e.to,l=e.featured,f=e.page,t.next=3,o.posts.browse({limit:r,from:n,to:c,featured:l,page:f}).catch((function(t){return console.error(t)}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return d.apply(this,arguments)}function d(){return(d=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.posts.read({slug:e}).catch((function(t){return console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(){return m.apply(this,arguments)}function m(){return(m=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.tags.browse().catch((function(t){console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},368:function(t,e,r){var content=r(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(76).default)("80d2e930",content,!0,{sourceMap:!1})},370:function(t,e,r){"use strict";r(368)},371:function(t,e,r){var n=r(75)(!1);n.push([t.i,".post[data-v-76f243ff]:hover:after,.post[data-v-76f243ff]:hover:before{background:#fefefe!important}",""]),t.exports=n}}]);