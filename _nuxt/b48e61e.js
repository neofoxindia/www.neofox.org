(window.webpackJsonp=window.webpackJsonp||[]).push([[35,7,8,9,11,12],{351:function(t,e,n){"use strict";n.r(e);var o={name:"FaqContainer",props:["questions","title","images","faq"],data:function(){return{}},components:{FaqQuestion:n(366).default}},r=n(31),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"FAQS"}},[e("svg",{staticClass:"text-light back-1 top-0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 150"}},[e("path",{attrs:{fill:"currentColor","fill-opacity":"1",d:"M0,0L60,16C120,32,240,64,360,74.7C480,85,600,75,720,58.7C840,43,960,21,1080,32C1200,43,1320,85,1380,106.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"}})]),t._v(" "),e("div",{staticClass:"bg-light"},[e("div",{staticClass:"container",attrs:{itemscope:"",itemtype:"https://schema.org/FAQPage"}},[e("h2",{staticClass:"d-inline"},[t._v("\n        "+t._s(t.title)+" Common Questions\n      ")]),t._v(" "),e("div",{staticClass:"row d-flex align-items-center"},[e("div",{staticClass:"col-md-7 col-12"},[e("FaqQuestion",{attrs:{data:t.faq}})],1),t._v(" "),e("div",{staticClass:"col-md-5 d-md-block d-none"})]),t._v(" "),e("div",{staticClass:"d-flex align-items-center py-3"},[e("NuxtLink",{staticClass:"h6 d-inline text-info btn btn-primary",attrs:{to:{name:"FAQ"}}},[t._v("See more")])],1)])]),t._v(" "),e("svg",{staticClass:"text-light back-1 top-0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 220"}},[e("path",{attrs:{fill:"currentColor","fill-opacity":"1",d:"M0,96L60,90.7C120,85,240,75,360,85.3C480,96,600,128,720,117.3C840,107,960,53,1080,53.3C1200,53,1320,107,1380,133.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"}})])])}),[],!1,null,"0d576968",null);e.default=component.exports;installComponents(component,{FaqQuestion:n(366).default})},353:function(t,e,n){"use strict";n.r(e);var o=n(13),r=(n(77),n(367)),c={name:"BlogLatest",props:["tag"],components:{BlogCard:n(365).default},data:function(){return{posts:void 0}},fetchOnServer:!1,fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.b)({limit:4,page:1});case 2:t.posts=e.sent;case 3:case"end":return e.stop()}}),e)})))()},mounted:function(){}},l=(n(370),n(31)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"d-table w-100 position-relative bg-white"},[e("div",{staticClass:"container"},[e("h2",[t._v("Know More ")]),t._v(" "),e("div",{staticClass:"row"},t._l(t.posts,(function(t){return e("div",{key:t.id,staticClass:"col-lg-3 col-md-4 px-2 my-3"},[e("BlogCard",{attrs:{post:t}})],1)})),0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 d-flex justify-content-end py-5 line-25"},[e("NuxtLink",{staticClass:"px-2 btn-success rounded-2",attrs:{to:{name:"blog"}}},[t._v("Read More >")])],1)])])])}),[],!1,null,"76f243ff",null);e.default=component.exports;installComponents(component,{BlogCard:n(365).default})},354:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var o=n(362),r=(n(93),n(60),n(50),function(title,t){return[{hid:"apple-mobile-web-app-title",property:"apple-mobile-web-app-title",content:title},{hid:"apple-mobile-web-app-status-bar-style",property:"apple-mobile-web-app-status-bar-style",content:t}]}),c=function(title,t,e,n,o,video,r,c){return[{hid:"og:title",property:"og:title",content:title},{hid:"og:url",name:"og:url",content:t||"https://www.neofox.org"},{hid:"og:type",property:"og:type",content:e||"Website"},{hid:"og:description",property:"og:description",content:n},{hid:"og:site_name",property:"og:site_name",content:"NEOFOX"},{hid:"og:image",property:"og:image",content:o},{hid:"og:image:secure_url",property:"og:image:secure_url",content:o},{hid:"og:image:alt",property:"og:image:alt",content:title},{hid:"fb:app_id",name:"fb:app_id",content:"543522706280706"},{hid:"fb:admins",name:"fb:admins",content:"543522706280706"},{hid:"og:video",name:"og:video",content:video},{hid:"og:video:height",name:"og:video:height",content:"640"},{hid:"og:video:width",name:"og:video:width",content:385},{hid:"og:video:type",name:"og:video:type",content:"video/mp4"},{hid:"og:latitude",name:"og:latitude",content:r},{hid:"og:longitude",name:"og:longitude",content:c},{hid:"og:locality",name:"og:locality",content:"Jaipur"},{hid:"og:region",name:"og:region",content:"RJ"},{hid:"og:country-name",name:"og:country-name",content:"INDIA"},{hid:"og:postal-code",name:"og:postal-code",content:"302017"},{hid:"og:locale",name:"og:locale",content:"en_IN"}]},l=function(title,t,e,n){return[{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:t},{hid:"keywords",name:"keywords",content:e},{hid:"language",name:"language",content:"EN"},{hid:"Classification",name:"Classification",content:"Business"},{hid:"designer",name:"designer",content:"NEOFOX"},{hid:"coverage",name:"coverage",content:"Worldwide"},{hid:"subtitle",name:"subtitle",content:t},{hid:"language",name:"language",content:"EN"},{hid:"theme-color",name:"theme-color",content:n},{hid:"nightmode",name:"nightmode",content:"enable"}]},d=function(title,t,e,n){return[{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:site",name:"twitter:site",content:"neofox"},{hid:"twitter:creator",name:"twitter:creator",content:title},{hid:"twitter:card",name:"twitter:card",content:title},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:image",name:"twitter:image",content:e},{hid:"twitter:image:alt",name:"twitter:image:alt",content:title},{hid:"twitter:url",name:"twitter:url",content:n||"https://www.neofox.org"}]},m=function(title,t,e,n,m){var h=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},v=arguments.length>6?arguments[6]:void 0,video=arguments.length>7?arguments[7]:void 0,f=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"#fefefe",C=arguments.length>9&&void 0!==arguments[9]?arguments[9]:26.9124,w=arguments.length>10&&void 0!==arguments[10]?arguments[10]:75.7873;return{title:title,meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"robots",name:"robots",content:"index, follow"},{hid:"revisit-after",name:"revisit-after",content:"1 day"},{hid:"author",name:"author",content:"neofox"}].concat(Object(o.a)(r(title,f)),Object(o.a)(c(title,v,t,e,m,video,C,w)),Object(o.a)(l(title,e,n,f)),Object(o.a)(d(title,e,m,v))),script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"WebPage",name:title,description:e,publisher:{"@type":"ProfilePage",name:"NEOFOX"}}},{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"Corporation",name:"NEOFOX",url:"https://www.neofox.org",logo:"https://www.neofox.org/favicon.png",openingHours:"Mo 08:00-20:00 Tu 08:00-20:00 We 08:00-20:00 Th 08:00-20:30 Fr 08:30-20:00 Sa 08:00-20:00",sameAs:["https://www.facebook.com/neofox.org","https://www.instagram.com/neofoxindia/","https://github.com/neofoxindia","https://www.neofox.in","https://www.linkedin.com/company/neofoxin/","https://dribbble.com/theneofox","https://www.figma.com/@neofox","https://www.pinterest.com/theneofox"]}},{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"Service",name:t,description:e,provider:{"@type":"Organization",name:"NeoFox",sameAs:"https://www.neofox.org"}}},{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"FAQPage",mainEntity:Object.keys(h).map((function(t){return{"@type":"Question",name:t,acceptedAnswer:{"@type":"Answer",text:h[t]}}}))}}]}}},360:function(t,e){e.iot_ai_tech_list=["pytorch.svg","tensorflow.svg","python.svg","neo4j.svg","opencv.svg","pyspark.svg"],e.iot_m2m_tech_list=["openvpn.svg","ssh.svg","wireguard.svg"]},361:function(t,e){e.iot_faq={"What is an IoT solution?":"An IoT solution is a combination of devices or other data sources, outfitted with sensors and internet-connected hardware to securely report information back to an IoT platform. This information is often a physical metric that can help users answer a question or solve a specific problem.","Build or Buy- Which is the best IoT gateway development approach that I should choose for my business?":"On a broader scale, a ‘build’ strategy for IoT gateway development means developing a solution tailored to your business goals and a greater degree of ownership ( of the solution). <br>  Meanwhile, a “buy” strategy means you have to mold your business goals under readily available solutions. each of the two IoT gateway development approaches has its benefits and limitations. The decision regarding choosing a build vs buy IoT gateway solution depends mainly on your business goals.","How long does it take to develop an IoT solution?":"Takes between 4 to 6 months (based on your requirement) to develop an IoT solution. Meanwhile, the PoC (Proof-Of-Concept) can be delivered in 2 months.If you need more information on developing an IoT solution for your business, please get in touch with our sales team.","What are the expected returns from applying this technology?":"How long will it take for the company to recover the investment? How much will the company’s costs be reduced once AI is implemented? Integrating AI and ML models in a company implies a cost and therefore an important investment. <br><br> For this reason, a realistic estimation must be made to determine the parameters of the return on investment. To carry out this plan, the possible performance indicators (KPI’s) should be established, so that the return can be measured and how much value the model is bringing to the company should be calculated."},e.cloud_faq={}},362:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n(123);var r=n(151),c=n(94);function l(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||Object(r.a)(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},363:function(t,e,n){"use strict";n.r(e);n(28),n(152);var o={name:"TechList",props:{items:{type:Array,default:[]}},methods:{imagePath:function(t){return"/svg/tech/"+t}}},r=n(31),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"py-1 bg-light"},[e("div",{staticClass:"container-fluid px-md-5 px-1"},[e("div",{staticClass:"row justify-content-around align-items-center"},t._l(t.items,(function(n){return e("div",{staticClass:"col-lg-1 col-md-2 col-2 text-center py-4"},[e("img",{staticClass:"avatar w-100 p-lg-3 p-0",staticStyle:{"max-width":"7rem!important"},attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:n.split(".")[0].toUpperCase(),src:t.imagePath(n),alt:"Neofox solution for "+n.split(".")[0].toUpperCase()}})])})),0)])])}),[],!1,null,"d83e824e",null);e.default=component.exports},365:function(t,e,n){"use strict";n.r(e);var o={name:"BlogCard",props:["post"]},r=n(31),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"post"},[e("NuxtLink",{staticClass:"row d-flex m-0 bg-white front-10",attrs:{to:{name:"blog-slug",params:{slug:t.post.slug}}}},[e("img",{staticClass:"w-100 col-12 p-0 m-0 post-image",attrs:{src:t.post.feature_image,alt:t.post.title}}),t._v(" "),e("div",{staticClass:"bg-light col-12 d-flex px-2 py-1 front-10 align-items-center flex-wrap shadow-sm",staticStyle:{"min-height":"80px"}},[e("small",{staticClass:"text-dark roboto-slab w-100"},[t._v(t._s(t._f("date")(t.post.updated_at)))]),t._v(" "),e("h3",{staticClass:"line-10 h6 text-dark w-100"},[t._v(t._s(t.post.title))])])])],1)}),[],!1,null,null,null);e.default=component.exports},366:function(t,e,n){"use strict";n.r(e);var o={name:"FaqQuestion",props:["data"],data:function(){return{uuid:""}},beforeMount:function(){this.uuid=this.$uuid()},methods:{toggleIcon:function(t){this.$refs[t][0].classList.toggle("show"),this.$refs[t+"icon"][0].classList.toggle("rotate-90"),this.$refs[t+"icon"][0].classList.toggle("rotate-0")}}},r=n(31),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"accordion mt-4 pt-2",attrs:{id:"_"+t.uuid}},t._l(t.data,(function(n,o){return e("div",{staticClass:"accordion-item mt-3 rounded shadow-sm border-primary border-0",attrs:{itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[e("h2",{staticClass:"accordion-header",attrs:{itemprop:"name",id:t._f("slug")(n)}},[e("button",{staticClass:"accordion-button border-0 collapsed py-2 text-success noto-sans",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":t._f("slug")("#"+o),"aria-expanded":"false","aria-controls":t._f("slug")(o)}},[t._v("\n        "+t._s(o)+"\n      ")])]),t._v(" "),e("div",{staticClass:"accordion-collapse border-0 collapse",attrs:{id:t._f("slug")(o),"aria-labelledby":t._f("slug")(n),"data-bs-parent":"#_"+t.uuid}},[e("div",{staticClass:"accordion-body bg-white text-dark",attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"},domProps:{innerHTML:t._s(n)}})])])})),0)}),[],!1,null,null,null);e.default=component.exports},367:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return h}));var o=n(13),r=(n(77),new(n(369).a)({url:"https://blog.foxapi.live",key:"0b99f9d918af26e6858e84ffa2",version:"v3"}));function c(t){return l.apply(this,arguments)}function l(){return(l=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,o,c,l,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.limit,o=e.from,c=e.to,l=e.featured,d=e.page,t.next=3,r.posts.browse({limit:n,from:o,to:c,featured:l,page:d}).catch((function(t){return console.error(t)}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.posts.read({slug:e}).catch((function(t){return console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.tags.browse().catch((function(t){console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},368:function(t,e,n){var content=n(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("80d2e930",content,!0,{sourceMap:!1})},370:function(t,e,n){"use strict";n(368)},371:function(t,e,n){var o=n(75)(!1);o.push([t.i,".post[data-v-76f243ff]:hover:after,.post[data-v-76f243ff]:hover:before{background:#fefefe!important}",""]),t.exports=o},423:function(t,e,n){"use strict";n.r(e);var o=n(351),r=n(353),c=n(363),l=n(360),d=n(361),m=n(354),h={name:"dev-ops",components:{FaqContainer:o.default,BlogGrid:r.default,TechList:c.default},head:Object(m.a)("IT Services, Digital Solutions, Technology Consulting : NEOFOX","Data Science, IoT, Software Development, Web Development","We merge imagination and technology to help brands grow in the age of digital transformation","Neofox,Jaipur,Rajasthan,IoT,AI,Machine Learning,IIoT,Industrial Solution,Solution,Smart","","",""),data:function(){return{techItems:l.iot_ai_tech_list,features:[{alt:"",title:"BOOM",icon:"",text:"DOOM"}],FAQ:d.cloud_faq}}},v=n(31),component=Object(v.a)(h,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"position-relative bg-light"},[e("section",{staticClass:"h-100-center w-100 bg-white"},[e("div",{staticClass:"container"},[e("div",{staticClass:"title-heading text-center position-relative"},[e("img",{staticClass:"w-100 pt-5",attrs:{src:"/img/devops/dev-ops.svg",alt:"DEV-OPS"}}),t._v(" "),e("h1",{staticClass:"title-dark font-1 text-primary"},[e("NuxtLink",{attrs:{to:{name:"index"}}},[t._v("NEOFOX")]),t._v(" "),e("NuxtLink",{staticClass:"text-success",attrs:{to:{name:"dev-ops"}}},[t._v("DEV-OPS")])],1)])])]),t._v(" "),e("div",{staticClass:"position-relative"},[e("div",{staticClass:"shape overflow-hidden text-light"},[e("svg",{attrs:{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"}})])])]),t._v(" "),e("div",{staticClass:"section py-5 container mt-5"},[t._m(0),t._v(" "),e("p",{staticClass:"para-desc text-dark"},[t._v("Speed up your cloud tasks and jobs by limiting expenses, increment\n      productivity, and accelerate the delivery of the board cycle with our DevOps counseling administrations.\n      Convey applications at the speed of business with Neofox's extensive DevOps administrations.\n    ")]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-2 col-md-4 col-6 mt-4 pt-2"},[e("div",{staticClass:"card explore-feature border-0 rounded text-center bg-white"},[e("div",{staticClass:"card-body"},[t._m(1),t._v(" "),e("div",{staticClass:"content mt-3"},[e("h6",{staticClass:"mb-0"},[e("NuxtLink",{staticClass:"title text-dark",attrs:{to:{name:"dev-ops",hash:"#GITLAB"}}},[t._v("Gitlab")])],1)])])])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-md-4 col-6 mt-4 pt-2"},[e("div",{staticClass:"card explore-feature border-0 rounded text-center bg-white"},[e("div",{staticClass:"card-body"},[t._m(2),t._v(" "),e("div",{staticClass:"content mt-3"},[e("h6",{staticClass:"mb-0"},[e("NuxtLink",{staticClass:"title text-dark",attrs:{to:{name:"dev-ops",hash:"#CONFIGURATION_MANAGEMENT"}}},[t._v("\n                  Configuration Management\n                ")])],1)])])])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-md-4 col-6 mt-4 pt-2"},[e("div",{staticClass:"card explore-feature border-0 rounded text-center bg-white"},[e("div",{staticClass:"card-body"},[t._m(3),t._v(" "),e("div",{staticClass:"content mt-3"},[e("h6",{staticClass:"mb-0"},[e("NuxtLink",{staticClass:"title text-dark",attrs:{to:{name:"dev-ops"}}},[t._v("Continuous Integration")])],1)])])])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-md-4 col-6 mt-4 pt-2"},[e("div",{staticClass:"card explore-feature border-0 rounded text-center bg-white"},[e("div",{staticClass:"card-body"},[t._m(4),t._v(" "),e("div",{staticClass:"content mt-3"},[e("h6",{staticClass:"mb-0"},[e("NuxtLink",{staticClass:"title text-dark",attrs:{to:{name:"dev-ops",hash:"#AUTOMATED_TESTING"}}},[t._v("Automated\n                  Testing\n                ")])],1)])])])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-md-4 col-6 mt-4 pt-2"},[e("div",{staticClass:"card explore-feature border-0 rounded text-center bg-white"},[e("div",{staticClass:"card-body"},[t._m(5),t._v(" "),e("div",{staticClass:"content mt-3"},[e("h6",{staticClass:"mb-0"},[e("NuxtLink",{staticClass:"title text-dark",attrs:{to:{name:"dev-ops",hash:"#CONTINUOUS_DELIVERY"}}},[t._v("Continuous\n                  Delivery\n                ")])],1)])])])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-md-4 col-6 mt-4 pt-2"},[e("div",{staticClass:"card explore-feature border-0 rounded text-center bg-white"},[e("div",{staticClass:"card-body"},[t._m(6),t._v(" "),e("div",{staticClass:"content mt-3"},[e("h6",{staticClass:"mb-0"},[e("NuxtLink",{staticClass:"title text-dark",attrs:{to:{name:"dev-ops",hash:"#INFRASTRUCTURE_AS_CODE"}}},[t._v("\n                  Infrastructure as Code\n                ")])],1)])])])])])]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12)])}),[function(){var t=this,e=t._self._c;return e("h2",[e("span",{staticClass:"line text-danger",attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Space, Computing, Ram"}},[t._v("Speed up")]),t._v("\n      your cloud tasks")])},function(){var t=this._self._c;return t("div",{staticClass:"icon rounded-circle shadow-lg d-inline-block"},[t("img",{staticClass:"avatar avatar-md-sm",attrs:{src:"/svg/tech/gitlab.svg",alt:"NEOFOX GITLAB"}})])},function(){var t=this._self._c;return t("div",{staticClass:"icon rounded-circle shadow-lg d-inline-block"},[t("img",{staticClass:"avatar avatar-md-sm",attrs:{src:"/svg/tech/juju.svg",alt:"NEOFOX CONFIGURATION MANAGEMENT"}})])},function(){var t=this._self._c;return t("div",{staticClass:"icon rounded-circle shadow-lg d-inline-block"},[t("img",{staticClass:"avatar avatar-md-sm",attrs:{src:"/svg/tech/github-octocat.svg",alt:"CONTINUOUS INTEGRATION"}})])},function(){var t=this._self._c;return t("div",{staticClass:"icon rounded-circle shadow-lg d-inline-block"},[t("img",{staticClass:"avatar avatar-md-sm",attrs:{src:"/svg/tech/cucumber.svg",alt:"NEOFOX AUTOMATED TESTING"}})])},function(){var t=this._self._c;return t("div",{staticClass:"icon rounded-circle shadow-lg d-inline-block"},[t("img",{staticClass:"avatar avatar-md-sm",attrs:{src:"/svg/tech/circleci.svg",alt:"NEOFOX CONTINUOUS DELIVERY"}})])},function(){var t=this._self._c;return t("div",{staticClass:"icon rounded-circle shadow-lg d-inline-block"},[t("img",{staticClass:"avatar avatar-md-sm",attrs:{src:"/svg/tech/terraform-icon.svg",alt:"NEOFOX INFRASTRUCTURE AS CODE"}})])},function(){var t=this,e=t._self._c;return e("section",{staticClass:"section",attrs:{id:"GITLAB"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row d-flex align-items-center"},[e("div",{staticClass:"col-md-7 col-12"},[e("h2",{staticClass:"text-gray font-3"},[e("span",{staticClass:"line"},[t._v("Gitlab")])]),t._v(" "),e("h3",{staticClass:"py-2 h3 line-12 text-dark"},[t._v("\n            Accelerate present-day DevOps. Convey speed with assurance, security without compensation, and detectable\n            quality into DevOps accomplishment.\n          ")]),t._v(" "),e("p",[t._v(" With GitLab, you get a DevOps stage passed on as a singular application—one interface, one conversation\n            string, one data store, zero cerebral agonies.")])]),t._v(" "),e("div",{staticClass:"col-5 d-none d-md-block"},[e("img",{staticClass:"w-100",attrs:{src:"/images/illustrator/app.svg",alt:""}})])])])])},function(){var t=this,e=t._self._c;return e("section",{staticClass:"section",attrs:{id:"CONFIGURATION_MANAGEMENT"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row d-flex align-items-center"},[e("div",{staticClass:"col-5 d-none d-md-block"},[e("img",{staticClass:"w-100",attrs:{src:"/images/illustrator/app.svg",alt:""}})]),t._v(" "),e("div",{staticClass:"col-md-7 col-12"},[e("h2",{staticClass:"text-gray font-3"},[e("span",{staticClass:"line"},[t._v("Configuration management")])]),t._v(" "),e("h3",{staticClass:"py-2 h3 line-13 text-dark"},[t._v("\n            Configuration management\n            is significant in DevOps on the grounds that it assists you with mechanizing, in\n            any case, drawn-out undertakings and permits an association to expand nimbleness. ")]),t._v(" "),e("p",[t._v("\n            Also, the board upholds DevOps comprehensively, and it's generally settled upon that arrangement of the\n            executives is vital for DevOps, rather than being simply one more part of the interaction.\n          ")])])])])])},function(){var t=this,e=t._self._c;return e("section",{staticClass:"section",attrs:{id:"CONTINUOUS_INTEGRATION"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row d-flex align-items-center"},[e("div",{staticClass:"col-md-7 col-12"},[e("h2",{staticClass:"text-gray font-3 line-10"},[e("span",{staticClass:"line"},[t._v("Continuous integration")])]),t._v(" "),e("h3",{staticClass:"py-2 h3 line-15 text-dark"},[t._v("\n            Continuous integration automates software development workflows, reduces costs, and ensures code quality.\n          ")]),t._v(" "),e("p",[t._v("Continuous Integration works by pushing little code lumps to your application's codebase facilitated in a\n            Git store, and to each push, run a pipeline of contents to fabricate, test, and approve the code changes\n            prior to blending them into the primary branch.")])]),t._v(" "),e("div",{staticClass:"col-5 d-none d-md-block"},[e("img",{staticClass:"w-100",attrs:{src:"/images/illustrator/app.svg",alt:""}})])])])])},function(){var t=this,e=t._self._c;return e("section",{staticClass:"section",attrs:{id:"AUTOMATED_TESTING"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row d-flex align-items-center"},[e("div",{staticClass:"col-5 d-none d-md-block"},[e("img",{staticClass:"w-100",attrs:{src:"/images/illustrator/app.svg",alt:""}})]),t._v(" "),e("div",{staticClass:"col-md-7 col-12"},[e("h2",{staticClass:"text-gray font-3"},[e("span",{staticClass:"line"},[t._v(" Automated testing")])]),t._v(" "),e("h3",{staticClass:"py-2 h3 line-12 text-dark"},[t._v("\n            Automated testing in DevOps. DevOps makes testing a common duty of the whole group, while test\n            computerization empowers engineers to dispatch code changes rapidly with high trust in the quality.\n          ")]),t._v(" "),e("p",[t._v("\n            A test automation architect ought to be educated in different regions, including application usefulness,\n            the basic specialized scene, test mechanization instruments, and how to make scripts corresponding with\n            improvement.\n          ")])])])])])},function(){var t=this,e=t._self._c;return e("section",{staticClass:"section",attrs:{id:"CONTINUOUS_DELIVERY"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row d-flex align-items-center"},[e("div",{staticClass:"col-md-7 col-12"},[e("h2",{staticClass:"text-gray font-3"},[e("span",{staticClass:"line"},[t._v("Continuous Delivery")])]),t._v(" "),e("h3",{staticClass:"py-2 h3 line-13 text-dark"},[t._v("\n            Continuous delivery is the second piece of CI conveyance, or CI/CD, a\n            training that empowers application improvement groups to deliver steady code changes to create rapidly and\n            routinely. ")]),t._v(" "),e("p",[t._v("With CD, advancement groups can construct, test, and deliver programming quicker and all the more often.\n            Subsequently, they can diminish the expense, time, and hazard of conveying each change.\n          ")])]),t._v(" "),e("div",{staticClass:"col-5 d-none d-md-block"},[e("img",{staticClass:"w-100",attrs:{src:"/images/illustrator/app.svg",alt:""}})])])])])},function(){var t=this,e=t._self._c;return e("section",{staticClass:"section",attrs:{id:"INFRASTRUCTURE_AS_CODE"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row d-flex align-items-center"},[e("div",{staticClass:"col-5 d-none d-md-block"},[e("img",{staticClass:"w-100",attrs:{src:"/images/illustrator/app.svg",alt:""}})]),t._v(" "),e("div",{staticClass:"col-md-7 col-12"},[e("h2",{staticClass:"text-gray font-3"},[e("span",{staticClass:"line"},[t._v("Infrastructure as Code")])]),t._v(" "),e("h3",{staticClass:"py-2 h3 line-13 text-dark"},[e("span",{staticClass:"line text-success",attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Infrastructure as Code"}},[t._v("IaC")]),t._v("\n            is the administration of foundation (organizations, virtual machines, load\n            balancers, and association geography) in an engaging model, utilizing the equivalent forming as DevOps\n            group utilizes for source code. ")]),t._v(" "),e("p",[t._v("\n            Infrastructure as Code (IaC) robotizes the provisioning of the framework, empowering your association to\n            create, convey, and scale cloud applications with more noteworthy speed, less risk, and diminished\n            expense.\n          ")])])])])])}],!1,null,null,null);e.default=component.exports}}]);