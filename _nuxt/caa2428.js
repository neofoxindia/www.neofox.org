(window.webpackJsonp=window.webpackJsonp||[]).push([[1,7,8,9,11,12],{351:function(t,e,o){"use strict";o.r(e);var n={name:"FaqContainer",props:["questions","title","images","faq"],data:function(){return{}},components:{FaqQuestion:o(366).default}},r=o(31),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"FAQS"}},[e("svg",{staticClass:"text-light back-1 top-0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 150"}},[e("path",{attrs:{fill:"currentColor","fill-opacity":"1",d:"M0,0L60,16C120,32,240,64,360,74.7C480,85,600,75,720,58.7C840,43,960,21,1080,32C1200,43,1320,85,1380,106.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"}})]),t._v(" "),e("div",{staticClass:"bg-light"},[e("div",{staticClass:"container",attrs:{itemscope:"",itemtype:"https://schema.org/FAQPage"}},[e("h2",{staticClass:"d-inline"},[t._v("\n        "+t._s(t.title)+" Common Questions\n      ")]),t._v(" "),e("div",{staticClass:"row d-flex align-items-center"},[e("div",{staticClass:"col-md-7 col-12"},[e("FaqQuestion",{attrs:{data:t.faq}})],1),t._v(" "),e("div",{staticClass:"col-md-5 d-md-block d-none"})]),t._v(" "),e("div",{staticClass:"d-flex align-items-center py-3"},[e("NuxtLink",{staticClass:"h6 d-inline text-info btn btn-primary",attrs:{to:{name:"FAQ"}}},[t._v("See more")])],1)])]),t._v(" "),e("svg",{staticClass:"text-light back-1 top-0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 220"}},[e("path",{attrs:{fill:"currentColor","fill-opacity":"1",d:"M0,96L60,90.7C120,85,240,75,360,85.3C480,96,600,128,720,117.3C840,107,960,53,1080,53.3C1200,53,1320,107,1380,133.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"}})])])}),[],!1,null,"0d576968",null);e.default=component.exports;installComponents(component,{FaqQuestion:o(366).default})},353:function(t,e,o){"use strict";o.r(e);var n=o(13),r=(o(77),o(367)),c={name:"BlogLatest",props:["tag"],components:{BlogCard:o(365).default},data:function(){return{posts:void 0}},fetchOnServer:!1,fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.b)({limit:4,page:1});case 2:t.posts=e.sent;case 3:case"end":return e.stop()}}),e)})))()},mounted:function(){}},l=(o(370),o(31)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"d-table w-100 position-relative bg-white"},[e("div",{staticClass:"container"},[e("h2",[t._v("Know More ")]),t._v(" "),e("div",{staticClass:"row"},t._l(t.posts,(function(t){return e("div",{key:t.id,staticClass:"col-lg-3 col-md-4 px-2 my-3"},[e("BlogCard",{attrs:{post:t}})],1)})),0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 d-flex justify-content-end py-5 line-25"},[e("NuxtLink",{staticClass:"px-2 btn-success rounded-2",attrs:{to:{name:"blog"}}},[t._v("Read More >")])],1)])])])}),[],!1,null,"76f243ff",null);e.default=component.exports;installComponents(component,{BlogCard:o(365).default})},354:function(t,e,o){"use strict";o.d(e,"a",(function(){return m}));var n=o(362),r=(o(93),o(60),o(50),function(title,t){return[{hid:"apple-mobile-web-app-title",property:"apple-mobile-web-app-title",content:title},{hid:"apple-mobile-web-app-status-bar-style",property:"apple-mobile-web-app-status-bar-style",content:t}]}),c=function(title,t,e,o,n,video,r,c){return[{hid:"og:title",property:"og:title",content:title},{hid:"og:url",name:"og:url",content:t||"https://www.neofox.org"},{hid:"og:type",property:"og:type",content:e||"Website"},{hid:"og:description",property:"og:description",content:o},{hid:"og:site_name",property:"og:site_name",content:"NEOFOX"},{hid:"og:image",property:"og:image",content:n},{hid:"og:image:secure_url",property:"og:image:secure_url",content:n},{hid:"og:image:alt",property:"og:image:alt",content:title},{hid:"fb:app_id",name:"fb:app_id",content:"543522706280706"},{hid:"fb:admins",name:"fb:admins",content:"543522706280706"},{hid:"og:video",name:"og:video",content:video},{hid:"og:video:height",name:"og:video:height",content:"640"},{hid:"og:video:width",name:"og:video:width",content:385},{hid:"og:video:type",name:"og:video:type",content:"video/mp4"},{hid:"og:latitude",name:"og:latitude",content:r},{hid:"og:longitude",name:"og:longitude",content:c},{hid:"og:locality",name:"og:locality",content:"Jaipur"},{hid:"og:region",name:"og:region",content:"RJ"},{hid:"og:country-name",name:"og:country-name",content:"INDIA"},{hid:"og:postal-code",name:"og:postal-code",content:"302017"},{hid:"og:locale",name:"og:locale",content:"en_IN"}]},l=function(title,t,e,o){return[{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:t},{hid:"keywords",name:"keywords",content:e},{hid:"language",name:"language",content:"EN"},{hid:"Classification",name:"Classification",content:"Business"},{hid:"designer",name:"designer",content:"NEOFOX"},{hid:"coverage",name:"coverage",content:"Worldwide"},{hid:"subtitle",name:"subtitle",content:t},{hid:"language",name:"language",content:"EN"},{hid:"theme-color",name:"theme-color",content:o},{hid:"nightmode",name:"nightmode",content:"enable"}]},d=function(title,t,e,o){return[{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:site",name:"twitter:site",content:"neofox"},{hid:"twitter:creator",name:"twitter:creator",content:title},{hid:"twitter:card",name:"twitter:card",content:title},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:image",name:"twitter:image",content:e},{hid:"twitter:image:alt",name:"twitter:image:alt",content:title},{hid:"twitter:url",name:"twitter:url",content:o||"https://www.neofox.org"}]},m=function(title,t,e,o,m){var h=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},f=arguments.length>6?arguments[6]:void 0,video=arguments.length>7?arguments[7]:void 0,w=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"#fefefe",v=arguments.length>9&&void 0!==arguments[9]?arguments[9]:26.9124,y=arguments.length>10&&void 0!==arguments[10]?arguments[10]:75.7873;return{title:title,meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"robots",name:"robots",content:"index, follow"},{hid:"revisit-after",name:"revisit-after",content:"1 day"},{hid:"author",name:"author",content:"neofox"}].concat(Object(n.a)(r(title,w)),Object(n.a)(c(title,f,t,e,m,video,v,y)),Object(n.a)(l(title,e,o,w)),Object(n.a)(d(title,e,m,f))),script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"WebPage",name:title,description:e,publisher:{"@type":"ProfilePage",name:"NEOFOX"}}},{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"Corporation",name:"NEOFOX",url:"https://www.neofox.org",logo:"https://www.neofox.org/favicon.png",openingHours:"Mo 08:00-20:00 Tu 08:00-20:00 We 08:00-20:00 Th 08:00-20:30 Fr 08:30-20:00 Sa 08:00-20:00",sameAs:["https://www.facebook.com/neofox.org","https://www.instagram.com/neofoxindia/","https://github.com/neofoxindia","https://www.neofox.in","https://www.linkedin.com/company/neofoxin/","https://dribbble.com/theneofox","https://www.figma.com/@neofox","https://www.pinterest.com/theneofox"]}},{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"Service",name:t,description:e,provider:{"@type":"Organization",name:"NeoFox",sameAs:"https://www.neofox.org"}}},{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"FAQPage",mainEntity:Object.keys(h).map((function(t){return{"@type":"Question",name:t,acceptedAnswer:{"@type":"Answer",text:h[t]}}}))}}]}}},361:function(t,e){e.iot_faq={"What is an IoT solution?":"An IoT solution is a combination of devices or other data sources, outfitted with sensors and internet-connected hardware to securely report information back to an IoT platform. This information is often a physical metric that can help users answer a question or solve a specific problem.","Build or Buy- Which is the best IoT gateway development approach that I should choose for my business?":"On a broader scale, a ‘build’ strategy for IoT gateway development means developing a solution tailored to your business goals and a greater degree of ownership ( of the solution). <br>  Meanwhile, a “buy” strategy means you have to mold your business goals under readily available solutions. each of the two IoT gateway development approaches has its benefits and limitations. The decision regarding choosing a build vs buy IoT gateway solution depends mainly on your business goals.","How long does it take to develop an IoT solution?":"Takes between 4 to 6 months (based on your requirement) to develop an IoT solution. Meanwhile, the PoC (Proof-Of-Concept) can be delivered in 2 months.If you need more information on developing an IoT solution for your business, please get in touch with our sales team.","What are the expected returns from applying this technology?":"How long will it take for the company to recover the investment? How much will the company’s costs be reduced once AI is implemented? Integrating AI and ML models in a company implies a cost and therefore an important investment. <br><br> For this reason, a realistic estimation must be made to determine the parameters of the return on investment. To carry out this plan, the possible performance indicators (KPI’s) should be established, so that the return can be measured and how much value the model is bringing to the company should be calculated."},e.cloud_faq={}},362:function(t,e,o){"use strict";o.d(e,"a",(function(){return l}));var n=o(123);var r=o(151),c=o(94);function l(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||Object(r.a)(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},363:function(t,e,o){"use strict";o.r(e);o(28),o(152);var n={name:"TechList",props:{items:{type:Array,default:[]}},methods:{imagePath:function(t){return"/svg/tech/"+t}}},r=o(31),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"py-1 bg-light"},[e("div",{staticClass:"container-fluid px-md-5 px-1"},[e("div",{staticClass:"row justify-content-around align-items-center"},t._l(t.items,(function(o){return e("div",{staticClass:"col-lg-1 col-md-2 col-2 text-center py-4"},[e("img",{staticClass:"avatar w-100 p-lg-3 p-0",staticStyle:{"max-width":"7rem!important"},attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:o.split(".")[0].toUpperCase(),src:t.imagePath(o),alt:"Neofox solution for "+o.split(".")[0].toUpperCase()}})])})),0)])])}),[],!1,null,"d83e824e",null);e.default=component.exports},364:function(t,e,o){o(125),o(95),o(61),o(60);["background: linear-gradient(90deg, rgba(255,0,104,1) 0%, rgba(255,0,185,1) 100%)","color: white","display: block","font-size: 40px","text-align: center","font-weight: bold"].join(";");e.bootstrap=function(){[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function(t){return new bootstrap.Tooltip(t)}))}},365:function(t,e,o){"use strict";o.r(e);var n={name:"BlogCard",props:["post"]},r=o(31),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"post"},[e("NuxtLink",{staticClass:"row d-flex m-0 bg-white front-10",attrs:{to:{name:"blog-slug",params:{slug:t.post.slug}}}},[e("img",{staticClass:"w-100 col-12 p-0 m-0 post-image",attrs:{src:t.post.feature_image,alt:t.post.title}}),t._v(" "),e("div",{staticClass:"bg-light col-12 d-flex px-2 py-1 front-10 align-items-center flex-wrap shadow-sm",staticStyle:{"min-height":"80px"}},[e("small",{staticClass:"text-dark roboto-slab w-100"},[t._v(t._s(t._f("date")(t.post.updated_at)))]),t._v(" "),e("h3",{staticClass:"line-10 h6 text-dark w-100"},[t._v(t._s(t.post.title))])])])],1)}),[],!1,null,null,null);e.default=component.exports},366:function(t,e,o){"use strict";o.r(e);var n={name:"FaqQuestion",props:["data"],data:function(){return{uuid:""}},beforeMount:function(){this.uuid=this.$uuid()},methods:{toggleIcon:function(t){this.$refs[t][0].classList.toggle("show"),this.$refs[t+"icon"][0].classList.toggle("rotate-90"),this.$refs[t+"icon"][0].classList.toggle("rotate-0")}}},r=o(31),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"accordion mt-4 pt-2",attrs:{id:"_"+t.uuid}},t._l(t.data,(function(o,n){return e("div",{staticClass:"accordion-item mt-3 rounded shadow-sm border-primary border-0",attrs:{itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[e("h2",{staticClass:"accordion-header",attrs:{itemprop:"name",id:t._f("slug")(o)}},[e("button",{staticClass:"accordion-button border-0 collapsed py-2 text-success noto-sans",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":t._f("slug")("#"+n),"aria-expanded":"false","aria-controls":t._f("slug")(n)}},[t._v("\n        "+t._s(n)+"\n      ")])]),t._v(" "),e("div",{staticClass:"accordion-collapse border-0 collapse",attrs:{id:t._f("slug")(n),"aria-labelledby":t._f("slug")(o),"data-bs-parent":"#_"+t.uuid}},[e("div",{staticClass:"accordion-body bg-white text-dark",attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"},domProps:{innerHTML:t._s(o)}})])])})),0)}),[],!1,null,null,null);e.default=component.exports},367:function(t,e,o){"use strict";o.d(e,"b",(function(){return c})),o.d(e,"a",(function(){return d})),o.d(e,"c",(function(){return h}));var n=o(13),r=(o(77),new(o(369).a)({url:"https://blog.foxapi.live",key:"0b99f9d918af26e6858e84ffa2",version:"v3"}));function c(t){return l.apply(this,arguments)}function l(){return(l=Object(n.a)(regeneratorRuntime.mark((function t(e){var o,n,c,l,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.limit,n=e.from,c=e.to,l=e.featured,d=e.page,t.next=3,r.posts.browse({limit:o,from:n,to:c,featured:l,page:d}).catch((function(t){return console.error(t)}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.posts.read({slug:e}).catch((function(t){return console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(){return f.apply(this,arguments)}function f(){return(f=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.tags.browse().catch((function(t){console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},368:function(t,e,o){var content=o(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(76).default)("80d2e930",content,!0,{sourceMap:!1})},370:function(t,e,o){"use strict";o(368)},371:function(t,e,o){var n=o(75)(!1);n.push([t.i,".post[data-v-76f243ff]:hover:after,.post[data-v-76f243ff]:hover:before{background:#fefefe!important}",""]),t.exports=n}}]);