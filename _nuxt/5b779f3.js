(window.webpackJsonp=window.webpackJsonp||[]).push([[37,8,10,13,14,15],{360:function(t,e,o){"use strict";o.d(e,"a",(function(){return v}));var n=o(368),r=(o(95),o(60),o(50),function(title,t){return[{hid:"apple-mobile-web-app-title",property:"apple-mobile-web-app-title",content:title},{hid:"apple-mobile-web-app-status-bar-style",property:"apple-mobile-web-app-status-bar-style",content:t}]}),l=function(title,t,e,o,n,video,r,l){return[{hid:"og:title",property:"og:title",content:title},{hid:"og:url",name:"og:url",content:t||"https://www.neofox.org"},{hid:"og:type",property:"og:type",content:e||"Website"},{hid:"og:description",property:"og:description",content:o},{hid:"og:site_name",property:"og:site_name",content:"NEOFOX"},{hid:"og:image",property:"og:image",content:n},{hid:"og:image:secure_url",property:"og:image:secure_url",content:n},{hid:"og:image:alt",property:"og:image:alt",content:title},{hid:"fb:app_id",name:"fb:app_id",content:"543522706280706"},{hid:"fb:admins",name:"fb:admins",content:"543522706280706"},{hid:"og:video",name:"og:video",content:video},{hid:"og:video:height",name:"og:video:height",content:"640"},{hid:"og:video:width",name:"og:video:width",content:385},{hid:"og:video:type",name:"og:video:type",content:"video/mp4"},{hid:"og:latitude",name:"og:latitude",content:r},{hid:"og:longitude",name:"og:longitude",content:l},{hid:"og:locality",name:"og:locality",content:"Jaipur"},{hid:"og:region",name:"og:region",content:"RJ"},{hid:"og:country-name",name:"og:country-name",content:"INDIA"},{hid:"og:postal-code",name:"og:postal-code",content:"302017"},{hid:"og:locale",name:"og:locale",content:"en_IN"}]},c=function(title,t,e,o){return[{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:t},{hid:"keywords",name:"keywords",content:e},{hid:"language",name:"language",content:"EN"},{hid:"Classification",name:"Classification",content:"Business"},{hid:"designer",name:"designer",content:"NEOFOX"},{hid:"coverage",name:"coverage",content:"Worldwide"},{hid:"subtitle",name:"subtitle",content:t},{hid:"language",name:"language",content:"EN"},{hid:"theme-color",name:"theme-color",content:o},{hid:"nightmode",name:"nightmode",content:"enable"}]},d=function(title,t,e,o){return[{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:site",name:"twitter:site",content:"neofox"},{hid:"twitter:creator",name:"twitter:creator",content:title},{hid:"twitter:card",name:"twitter:card",content:title},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:image",name:"twitter:image",content:e},{hid:"twitter:image:alt",name:"twitter:image:alt",content:title},{hid:"twitter:url",name:"twitter:url",content:o||"https://www.neofox.org"}]},v=function(title,t,e,o,v){var m=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},h=arguments.length>6?arguments[6]:void 0,video=arguments.length>7?arguments[7]:void 0,f=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"#fefefe",_=arguments.length>9&&void 0!==arguments[9]?arguments[9]:26.9124,w=arguments.length>10&&void 0!==arguments[10]?arguments[10]:75.7873;return{title:title,meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"robots",name:"robots",content:"index, follow"},{hid:"revisit-after",name:"revisit-after",content:"1 day"},{hid:"author",name:"author",content:"neofox"}].concat(Object(n.a)(r(title,f)),Object(n.a)(l(title,h,t,e,v,video,_,w)),Object(n.a)(c(title,e,o,f)),Object(n.a)(d(title,e,v,h))),script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"WebPage",name:title,description:e,publisher:{"@type":"ProfilePage",name:"NEOFOX"}}},{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"Corporation",name:"NEOFOX",url:"https://www.neofox.org",logo:"https://www.neofox.org/favicon.png",openingHours:"Mo 08:00-20:00 Tu 08:00-20:00 We 08:00-20:00 Th 08:00-20:30 Fr 08:30-20:00 Sa 08:00-20:00",sameAs:["https://www.facebook.com/neofox.org","https://www.instagram.com/neofoxindia/","https://github.com/neofoxindia","https://www.neofox.in","https://www.linkedin.com/company/neofoxin/","https://dribbble.com/theneofox","https://www.figma.com/@neofox","https://www.pinterest.com/theneofox"]}},{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"Service",name:t,description:e,provider:{"@type":"Organization",name:"NeoFox",sameAs:"https://www.neofox.org"}}},{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"FAQPage",mainEntity:Object.keys(m).map((function(t){return{"@type":"Question",name:t,acceptedAnswer:{"@type":"Answer",text:m[t]}}}))}}]}}},368:function(t,e,o){"use strict";o.d(e,"a",(function(){return c}));var n=o(121);var r=o(151),l=o(96);function c(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||Object(r.a)(t)||Object(l.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},371:function(t,e,o){"use strict";o.r(e);var n={name:"BlogCard",props:["post"]},r=o(30),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"post"},[e("NuxtLink",{staticClass:"row d-flex m-0 bg-white front-10",attrs:{to:{name:"blog-slug",params:{slug:t.post.slug}}}},[e("img",{staticClass:"w-100 col-12 p-0 m-0 post-image",attrs:{src:t.post.feature_image,alt:t.post.title}}),t._v(" "),e("div",{staticClass:"bg-light col-12 d-flex px-2 py-1 front-10 align-items-center flex-wrap shadow-sm",staticStyle:{"min-height":"80px"}},[e("small",{staticClass:"text-dark roboto-slab w-100"},[t._v(t._s(t._f("date")(t.post.updated_at)))]),t._v(" "),e("h3",{staticClass:"line-10 h6 text-dark w-100"},[t._v(t._s(t.post.title))])])])],1)}),[],!1,null,null,null);e.default=component.exports},373:function(t,e,o){"use strict";o.d(e,"b",(function(){return l})),o.d(e,"a",(function(){return d})),o.d(e,"c",(function(){return m}));var n=o(13),r=(o(79),new(o(375).a)({url:"https://blog.foxapi.live",key:"0b99f9d918af26e6858e84ffa2",version:"v3"}));function l(t){return c.apply(this,arguments)}function c(){return(c=Object(n.a)(regeneratorRuntime.mark((function t(e){var o,n,l,c,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.limit,n=e.from,l=e.to,c=e.featured,d=e.page,t.next=3,r.posts.browse({limit:o,from:n,to:l,featured:c,page:d}).catch((function(t){return console.error(t)}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.posts.read({slug:e}).catch((function(t){return console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(){return h.apply(this,arguments)}function h(){return(h=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.tags.browse().catch((function(t){console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},382:function(t,e,o){var content=o(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(78).default)("54503632",content,!0,{sourceMap:!1})},383:function(t,e,o){var content=o(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(78).default)("7239019a",content,!0,{sourceMap:!1})},384:function(t,e,o){var content=o(391);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(78).default)("b7ada310",content,!0,{sourceMap:!1})},385:function(t,e,o){var content=o(393);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(78).default)("c447bde8",content,!0,{sourceMap:!1})},386:function(t,e,o){"use strict";o(382)},387:function(t,e,o){var n=o(77)(!1);n.push([t.i,".title-heading{transition:all ease-in-out}.title-heading:hover .t-shadow{transition-duration:.5s;color:#e9ecef!important}",""]),t.exports=n},388:function(t,e,o){"use strict";o(383)},389:function(t,e,o){var n=o(77)(!1);n.push([t.i,".display-3[data-v-c729fb0c]{font-size:2.4rem!important}section[data-v-c729fb0c]{background-color:#fff}.hover-background img[data-v-c729fb0c]{transition:all .5s cubic-bezier(.31,.29,.05,.96);-o-object-fit:cover;object-fit:cover;width:0;height:100%}.hover-background[data-v-c729fb0c]:hover{color:#dee2e6!important}.hover-background:hover .display-3[data-v-c729fb0c]{text-shadow:rgba(17,12,46,.5) 0 48px 100px 0!important;width:auto}.hover-background:hover .data-science[data-v-c729fb0c]{color:#ffd166}.hover-background:hover .iot[data-v-c729fb0c]{color:#41ead4}.hover-background:hover .mobile-app[data-v-c729fb0c]{color:#adf7b6}.hover-background:hover .web-app[data-v-c729fb0c]{color:#ff99c8}.hover-background:hover .digital-market[data-v-c729fb0c]{color:#00d9f5}.hover-background:hover .graphic-design[data-v-c729fb0c]{color:#f09}.hover-background:hover .cloud-server[data-v-c729fb0c]{color:#49ffc5}.hover-background:hover .dev-ops[data-v-c729fb0c]{color:#bfff49}.hover-background:hover .explore-feature[data-v-c729fb0c]{left:-.8rem!important}.hover-background:hover .zero[data-v-c729fb0c]{display:none!important}.hover-background:hover .rajdhani[data-v-c729fb0c]{transition:all 50ms ease-in;font-size:12em!important;text-shadow:rgba(0,0,0,.24) 0 3px 8px;right:0!important}.hover-background:hover small[data-v-c729fb0c]{background-color:rgba(0,0,0,.5);padding:10px;color:#b2f7ef!important;font-weight:700}.hover-background:hover img[data-v-c729fb0c]{width:100%}",""]),t.exports=n},390:function(t,e,o){"use strict";o(384)},391:function(t,e,o){var n=o(77)(!1);n.push([t.i,".font-size[data-v-aae2debc]{font-size:calc(100px + 2vw)!important}.projects[data-v-aae2debc]{color:#ffd166!important}.clients[data-v-aae2debc]{color:#f58da6!important}.anim-text[data-v-aae2debc]{animation-duration:0ms!important}",""]),t.exports=n},392:function(t,e,o){"use strict";o(385)},393:function(t,e,o){var n=o(77)(!1);n.push([t.i,".post[data-v-1ca43e4e]:hover:after,.post[data-v-1ca43e4e]:hover:before{background:#fefefe!important}",""]),t.exports=n},394:function(t,e,o){"use strict";o.r(e);var n={name:"IndexHero"},r=(o(386),o(30)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"bg-white h-100-center w-100 position-relative"},[e("div",{staticClass:"container py-xl-5 py-lg-2 py-md-5"},[e("div",{staticClass:"row align-items-center"},[t._m(0),t._v(" "),e("div",{staticClass:"col-md-6 order-md-2 order-1 mt-md-0 pt-n4"},[e("svg",{staticClass:"w-100",staticStyle:{fill:"#cfdff5"},attrs:{viewBox:"0 0 433 318",width:"750",height:"400",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M 67.113282,20.008045 C 54.53737,20.107515 42.029455,21.991353 29.822507,24.946948 26.548343,25.673714 23.273849,26.398999 20,27.127186 c 2.780809,8.66836 4.986989,17.511824 7.872281,26.146624 3.300772,9.5977 7.381417,18.919242 11.983214,27.961518 14.310436,27.934602 34.892624,52.840422 60.505785,71.104872 21.40223,15.30877 46.15839,25.96116 72.0644,30.66509 12.41739,2.29126 25.06614,3.22646 37.68565,3.06721 0.72977,2.23458 0.98433,4.58814 1.53103,6.86939 1.51766,7.76297 2.51994,15.75036 3.01194,23.56616 0.24715,4.1343 0.3718,8.14047 0.34883,12.29061 -0.0158,3.5085 -0.13198,7.00778 -0.34492,10.44767 -0.50268,8.0925 -1.53408,16.05278 -3.05555,24.00834 -1.50186,8.01886 -3.65175,16.01978 -5.79532,23.9435 -0.0715,0.55384 0.98386,0.59555 1.37354,0.93979 6.92559,3.28184 13.47423,7.6007 21.00266,9.41922 3.72164,0.93101 7.72556,0.85211 11.32347,-0.54192 4.00533,-1.49491 7.26722,-4.61886 9.24609,-8.37611 2.43199,-4.4587 3.31563,-9.52177 5.01917,-14.26347 6.45147,-19.70531 15.96232,-38.50078 28.75703,-54.85982 0.93934,-1.19252 2.02531,-2.55334 3.05986,-3.78187 12.26571,-14.74216 27.41081,-27.13229 44.49655,-35.88053 18.42489,-9.47199 38.98914,-14.57005 59.66225,-15.39478 1.56415,-0.0805 3.39164,-0.0847 5.0566,-0.23537 4.31513,-0.34191 8.68093,-1.77245 11.87909,-4.78776 3.61028,-3.32292 5.53737,-8.20676 5.66351,-13.06843 0.1983,-3.73997 1.27072,-7.41114 1.006,-11.17798 -0.18755,-5.19928 -2.59949,-10.26352 -6.55513,-13.65054 -2.53047,-2.27096 -5.60874,-3.78574 -8.69134,-5.15095 -8.73937,-4.3899 -16.01288,-11.95279 -19.36163,-21.212664 -2.82293,-7.471089 -3.39036,-15.619104 -2.63122,-23.519346 0.3562,-5.394322 -0.46638,-11.10131 -3.60798,-15.628063 -2.70684,-4.016413 -6.86792,-6.824128 -11.30749,-8.618283 -3.60601,-1.692044 -7.30233,-3.605116 -11.38182,-3.654952 -4.73924,-0.20285 -9.55187,1.665892 -12.77983,5.170383 -2.97738,3.076562 -4.51082,7.141197 -6.4728,10.865065 -5.66518,10.57466 -12.28827,20.652757 -19.95649,29.886224 -8.89609,10.709146 -19.37948,20.386346 -31.04674,28.138716 -1.611,1.07726 -3.30418,2.15634 -5.02471,3.20041 -11.1861,6.81399 -23.31693,12.03691 -35.88559,15.69994 -2.26778,-5.01601 -4.76615,-9.926 -7.35782,-14.78188 C 218.37727,97.942648 201.23918,75.978231 179.78097,59.047409 161.88224,44.891578 141.20968,34.295721 119.31885,27.873615 105.4832,23.744482 91.194432,21.009576 76.767294,20.198746 73.552,20.0365 70.3326,19.976653 67.113282,20.008045 Z m 15.097656,46.154297 c 14.764782,0.844456 29.140652,5.266782 42.457962,11.557963 2.66699,1.259831 5.37096,2.652715 7.87186,4.036829 2.0618,1.138095 3.95063,2.242193 5.96368,3.473035 11.8237,7.253608 22.68715,16.079001 32.16549,26.209521 2.57212,2.7484 5.23445,5.81625 7.65841,8.87033 5.35302,6.73003 10.09244,13.95405 14.06815,21.58084 -2.39443,-0.0185 -4.94756,-0.23817 -7.21484,-0.54687 -1.10161,-0.15362 -2.07039,-0.31177 -3.21225,-0.51906 -2.8815,-0.52513 -5.81622,-1.24838 -8.5385,-2.03806 -3.25276,-0.92184 -6.45178,-2.02432 -9.61254,-3.22218 -0.61762,-0.25157 -1.53734,-0.59934 -2.26874,-0.9008 -14.06751,-5.78541 -27.25116,-13.6124 -39.39276,-22.74973 C 112.62195,104.68446 103.68511,96.622187 95.797406,87.612438 90.04998,81.003287 84.820192,73.886383 80.779297,66.097889 c 0.477214,0.02148 0.954427,0.04297 1.431641,0.06445 z M 344.6836,125.68969 c -3.28243,0.96634 -6.54464,2.00376 -9.77149,3.14257 2.47908,-2.58818 4.87885,-5.25111 7.22852,-7.95703 0.84766,1.60482 1.69531,3.20964 2.54297,4.81446 z m -83.63867,51.26172 c -2.4784,2.61138 -4.9038,5.27283 -7.25196,8.00195 -0.30599,-1.77148 -0.61198,-3.54297 -0.91797,-5.31445 2.73987,-0.82922 5.48798,-1.74966 8.16993,-2.6875 z"}})])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-6 col-12 order-md-1 order-2"},[e("div",{staticClass:"title-heading position-relative"},[e("span",{staticClass:"display-1 position-absolute fw-bold text-gray rajdhani back-1 t-shadow"},[e("span",{staticClass:"anim-text"},[t._v("N")]),e("span",{staticClass:"anim-text"},[t._v("E")]),e("span",{staticClass:"anim-text"},[t._v("O")]),e("span",{staticClass:"anim-text"},[t._v("F")]),e("span",{staticClass:"anim-text"},[t._v("O")]),e("span",{staticClass:"anim-text"},[t._v("X")])]),t._v(" "),e("h1",{staticClass:"fw-bold display-2 mt-2 mb-3 line-10 hero-title"},[t._v("The "),e("span",{staticClass:"line text-success hover-effect"},[t._v("Best")]),t._v(" "),e("br"),t._v("IT Solution")]),t._v(" "),e("p",{staticClass:"para-desc text-muted"},[t._v("We merge creative minds and innovation to help brands grow in an age of\n              digital transformation.")])])])}],!1,null,null,null);e.default=component.exports},395:function(t,e,o){"use strict";o.r(e);var n={name:"IndexService"},r=(o(388),o(30)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"d-table w-100 position-relative",attrs:{id:"services"}},[t._m(0),t._v(" "),e("div",{staticClass:"row p-0 m-0"},[e("NuxtLink",{staticClass:"col-xl-3 col-lg-4 col-sm-6 col-12 border-right border-top hover-background p-0 m-0 text-dark",attrs:{to:{name:"data-science"}}},[e("div",{staticClass:"position-absolute h-100"},[e("picture",[e("source",{attrs:{srcset:"/img/dataScience.webp",type:"image/webp"}}),t._v(" "),e("source",{attrs:{srcset:"/img/dataScience.jpg",type:"image/jpeg"}}),t._v(" "),e("img",{attrs:{height:"388",width:"600",src:"/img/dataScience.jpg",alt:"data-science"}})])]),t._v(" "),e("div",{staticClass:"row p-4 position-relative"},[e("div",{staticClass:"col-12 py-3"},[e("div",{staticClass:"position-absolute text-gray rajdhani t-shadow display-1 line-2"},[e("span",{staticClass:"anim-text zero"},[t._v("0")]),e("span",{staticClass:"anim-text"},[t._v("1")])]),t._v(" "),e("small",{staticClass:"position-absolute explore-feature"},[t._v("EXPLORE THE FEATURE")])]),t._v(" "),e("div",{staticClass:"col-12 py-3 display-3 line-9 h5 data-science"},[t._v("\n          Data "),e("br"),t._v(" Science "),e("br"),t._v(" Services\n        ")]),t._v(" "),e("div",{staticClass:"col-12"},[e("small",{staticClass:"display-4 small-2 line"},[t._v("know more")])])])]),t._v(" "),e("NuxtLink",{staticClass:"col-xl-3 col-lg-4 col-sm-6 col-12 border-right border-top hover-background p-0 m-0 text-dark",attrs:{to:{name:"internet-of-things"}}},[e("div",{staticClass:"position-absolute h-100"},[e("picture",[e("source",{attrs:{srcset:"/img/iot.webp",type:"image/webp"}}),t._v(" "),e("source",{attrs:{srcset:"/img/iot.jpg",type:"image/jpeg"}}),t._v(" "),e("img",{attrs:{height:"370",width:"600",src:"/img/iot.jpg",alt:"iot"}})])]),t._v(" "),e("div",{staticClass:"row p-4 position-relative"},[e("div",{staticClass:"col-12 py-3"},[e("div",{staticClass:"position-absolute text-gray rajdhani t-shadow display-1 line-2"},[e("span",{staticClass:"anim-text zero"},[t._v("0")]),e("span",{staticClass:"anim-text"},[t._v("2")])]),t._v(" "),e("small",{staticClass:"position-absolute explore-feature"},[t._v("EXPLORE THE FEATURE")])]),t._v(" "),e("div",{staticClass:"col-12 py-3 display-3 line-9 h4 iot"},[t._v("\n          Internet "),e("br"),t._v(" Of "),e("br"),t._v(" Things\n        ")]),t._v(" "),e("div",{staticClass:"col-12"},[e("small",{staticClass:"display-4 small-2 line"},[t._v("know more")])])])]),t._v(" "),e("NuxtLink",{staticClass:"col-xl-3 col-lg-4 col-sm-6 col-12 border-right border-top hover-background p-0 m-0 text-dark",attrs:{to:{name:"web-development"}}},[e("div",{staticClass:"position-absolute h-100"},[e("picture",[e("source",{attrs:{srcset:"/img/iot.webp",type:"image/webp"}}),t._v(" "),e("source",{attrs:{srcset:"/img/iot.jpg",type:"image/jpeg"}}),t._v(" "),e("img",{attrs:{height:"370",width:"600",src:"/img/iot.jpg",alt:"web-development"}})])]),t._v(" "),e("div",{staticClass:"row p-4 position-relative"},[e("div",{staticClass:"col-12 py-3"},[e("div",{staticClass:"position-absolute text-gray rajdhani t-shadow display-1 line-2"},[e("span",{staticClass:"anim-text zero"},[t._v("0")]),e("span",{staticClass:"anim-text"},[t._v("3")])]),t._v(" "),e("small",{staticClass:"position-absolute explore-feature"},[t._v("EXPLORE THE FEATURE")])]),t._v(" "),e("div",{staticClass:"col-12 py-3 display-3 line-9 h4 web-app"},[t._v("\n          Web "),e("br"),t._v(" App "),e("br"),t._v(" Design\n        ")]),t._v(" "),e("div",{staticClass:"col-12"},[e("small",{staticClass:"display-4 small-2 line"},[t._v("know more")])])])]),t._v(" "),e("NuxtLink",{staticClass:"col-xl-3 col-lg-4 col-sm-6 col-12 border-right border-top hover-background p-0 m-0 text-dark",attrs:{to:{name:"mobile-development"}}},[e("div",{staticClass:"position-absolute h-100"},[e("picture",[e("source",{attrs:{srcset:"/img/mobile.jpg.webp",type:"image/webp"}}),t._v(" "),e("source",{attrs:{srcset:"/img/mobile.jpg",type:"image/jpeg"}}),t._v(" "),e("img",{attrs:{height:"381",width:"600",src:"/img/mobile.jpg",alt:"mobile-development"}})])]),t._v(" "),e("div",{staticClass:"row p-4 position-relative"},[e("div",{staticClass:"col-12 py-3"},[e("div",{staticClass:"position-absolute text-gray rajdhani t-shadow display-1 line-2"},[e("span",{staticClass:"anim-text zero"},[t._v("0")]),e("span",{staticClass:"anim-text"},[t._v("4")])]),t._v(" "),e("small",{staticClass:"position-absolute explore-feature"},[t._v("EXPLORE THE FEATURE")])]),t._v(" "),e("div",{staticClass:"col-12 py-3 display-3 line-9 h4 mobile-app"},[t._v("\n          Mobile"),e("br"),t._v("App"),e("br"),t._v("Develop\n        ")]),t._v(" "),e("div",{staticClass:"col-12"},[e("small",{staticClass:"display-4 small-2 line"},[t._v("know more")])])])]),t._v(" "),e("NuxtLink",{staticClass:"col-xl-3 col-lg-4 col-sm-6 col-12 border-right border-top hover-background p-0 m-0 text-dark",attrs:{to:{name:"digital-marketing"}}},[e("div",{staticClass:"position-absolute h-100"},[e("picture",[e("source",{attrs:{srcset:"/img/digital-market.jpg.webp",type:"image/webp"}}),t._v(" "),e("source",{attrs:{srcset:"/img/digital-market.jpg",type:"image/jpeg"}}),t._v(" "),e("img",{attrs:{height:"400",width:"600",src:"/img/digital-market.jpg",alt:"digital-marketing"}})])]),t._v(" "),e("div",{staticClass:"row p-4 position-relative"},[e("div",{staticClass:"col-12 py-3"},[e("div",{staticClass:"position-absolute text-gray rajdhani t-shadow display-1 line-2"},[e("span",{staticClass:"anim-text zero"},[t._v("0")]),e("span",{staticClass:"anim-text"},[t._v("5")])]),t._v(" "),e("small",{staticClass:"position-absolute explore-feature"},[t._v("EXPLORE THE FEATURE")])]),t._v(" "),e("div",{staticClass:"col-12 py-3 display-3 line-10 h4 digital-market"},[t._v("\n          Digital "),e("br"),t._v(" Market "),e("br"),t._v(" Agency\n        ")]),t._v(" "),e("div",{staticClass:"col-12"},[e("small",{staticClass:"display-4 small-2 line"},[t._v("know more")])])])]),t._v(" "),e("NuxtLink",{staticClass:"col-xl-3 col-lg-4 col-sm-6 col-12 border-right border-top hover-background p-0 m-0 text-dark",attrs:{to:{name:"design-studio"}}},[e("div",{staticClass:"position-absolute h-100"},[e("picture",[e("source",{attrs:{srcset:"/img/graphic-design.jpg.webp",type:"image/webp"}}),t._v(" "),e("source",{attrs:{srcset:"/img/graphic-design.jpg",type:"image/jpeg"}}),t._v(" "),e("img",{attrs:{height:"384",width:"600",src:"/img/graphic-design.jpg",alt:"design-studio"}})])]),t._v(" "),e("NuxtLink",{staticClass:"row p-4 position-relative text-dark",attrs:{to:{name:"design-studio"}}},[e("div",{staticClass:"col-12 py-3"},[e("div",{staticClass:"position-absolute text-gray rajdhani t-shadow display-1 line-2"},[e("span",{staticClass:"anim-text zero"},[t._v("0")]),e("span",{staticClass:"anim-text"},[t._v("6")])]),t._v(" "),e("small",{staticClass:"position-absolute explore-feature"},[t._v("EXPLORE THE FEATURE")])]),t._v(" "),e("div",{staticClass:"col-12 py-3 display-3 line-10 h4 graphic-design"},[t._v("\n          Graphic "),e("br"),t._v(" Design "),e("br"),t._v(" Studio\n        ")]),t._v(" "),e("div",{staticClass:"col-12"},[e("small",{staticClass:"display-4 small-2 line"},[t._v("know more")])])])],1),t._v(" "),e("NuxtLink",{staticClass:"col-xl-3 col-lg-4 col-sm-6 col-12 border-right border-top hover-background p-0 m-0 text-dark",attrs:{to:{name:"cloud-server"}}},[e("div",{staticClass:"position-absolute h-100"},[e("picture",[e("source",{attrs:{srcset:"/img/cloud-server.jpg.webp",type:"image/webp"}}),t._v(" "),e("source",{attrs:{srcset:"/img/cloud-server.jpg",type:"image/jpeg"}}),t._v(" "),e("img",{attrs:{height:"400",width:"600",src:"/img/cloud-server.jpg",alt:"cloud-server"}})])]),t._v(" "),e("div",{staticClass:"row p-4 position-relative"},[e("div",{staticClass:"col-12 py-3"},[e("div",{staticClass:"position-absolute text-gray rajdhani t-shadow display-1 line-2"},[e("span",{staticClass:"anim-text zero"},[t._v("0")]),e("span",{staticClass:"anim-text"},[t._v("7")])]),t._v(" "),e("small",{staticClass:"position-absolute explore-feature"},[t._v("EXPLORE THE FEATURE")])]),t._v(" "),e("div",{staticClass:"col-12 py-3 display-3 line-10 h4 cloud-server"},[t._v("\n          Cloud "),e("br"),t._v(" Server "),e("br"),t._v("Solution\n        ")]),t._v(" "),e("div",{staticClass:"col-12"},[e("small",{staticClass:"display-4 small-2 line"},[t._v("know more")])])])]),t._v(" "),e("NuxtLink",{staticClass:"col-xl-3 col-lg-4 col-sm-6 col-12 border-right border-top hover-background p-0 m-0 text-dark",attrs:{to:{name:"dev-ops"}}},[e("div",{staticClass:"position-absolute h-100"},[e("picture",[e("source",{attrs:{srcset:"/img/dev-ops.jpg.webp",type:"image/webp"}}),t._v(" "),e("source",{attrs:{srcset:"/img/dev-ops.jpg",type:"image/jpeg"}}),t._v(" "),e("img",{attrs:{height:"404",width:"600",src:"/img/dev-ops.jpg",alt:"dev-ops"}})])]),t._v(" "),e("div",{staticClass:"row p-4 position-relative"},[e("div",{staticClass:"col-12 py-3"},[e("div",{staticClass:"position-absolute text-gray rajdhani t-shadow display-1 line-2"},[e("span",{staticClass:"anim-text zero"},[t._v("0")]),e("span",{staticClass:"anim-text"},[t._v("8")])]),t._v(" "),e("small",{staticClass:"position-absolute explore-feature"},[t._v("EXPLORE THE FEATURE")])]),t._v(" "),e("div",{staticClass:"col-12 py-3 display-3 line-10 h4 dev-ops"},[t._v("\n          DEV "),e("br"),t._v(" OPS "),e("br"),t._v(" Solution\n        ")]),t._v(" "),e("div",{staticClass:"col-12"},[e("small",{staticClass:"display-4 small-2 line"},[t._v("know more")])])])])],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("h2",{staticClass:"h2"},[t._v("Neofox is the platform trust to draw in, "),e("br"),t._v(" engage, and develop proficiently.")]),t._v(" "),e("p",{staticClass:"text-black-50 para-desc"},[t._v("We believe in providing forward-thinking creative solutions that yield exceptional\n      results. With a solid approach to planning, realistic implementation and value, we deliver customized,\n      results-driven programs to achieve our clients’ specific marketing goals.\n    ")])])}],!1,null,"c729fb0c",null);e.default=component.exports},396:function(t,e,o){"use strict";o.r(e);o(17),o(80),o(97);var n={name:"IndexCounter",data:function(){return{timeStamp:0,projects:47,issue:10,totalIssue:0,totalProjects:0,clients:32,totalClients:0,projectTimeInterval:void 0,clientsTimeInterval:void 0}},mounted:function(){var t=this;this.timeStamp=Math.round(Date.now()/1e8)-16299,this.projects=this.timeStamp+107,this.totalProjects=60+this.projects,this.issue=this.timeStamp+497,this.clients=this.timeStamp+24,this.totalClients=23+this.clients,this.projectTimeInterval=setInterval((function(){t.projects+=1,t.projects===t.totalProjects&&clearInterval(t.projectTimeInterval)}),2400),this.totalClients=setInterval((function(){t.clients+=1,t.projects===t.totalClients&&clearInterval(t.totalClients)}),3500)}},r=(o(390),o(30)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"bg-white d-table w-100 position-relative py-5"},[t._m(0),t._v(" "),e("div",{staticClass:"row p-0 m-0 bg-white py-5 my-5 text-center"},[e("div",{staticClass:"col-md-3 col-6 position-relative row p-0 m-0"},[e("div",{staticClass:"col-12 position-absolute font-size h1 line-2 pb-4"},t._l(t.projects.toString().split(""),(function(o){return e("span",{staticClass:"anim-text rajdhani"},[t._v(t._s(o))])})),0),t._v(" "),e("small",{staticClass:"col-12 text-uppercase p-0 m-0 text-primary pt-4 mt-5 line-1"},[t._v("optimizing")]),t._v(" "),e("h3",{staticClass:"telex col-12 p-0 m-0 line-1 pt-3"},[t._v("PROJECTS")])]),t._v(" "),e("div",{staticClass:"col-md-3 col-6 position-relative row p-0 m-0"},[e("div",{staticClass:"col-12 position-absolute font-size h1 line-2 pb-4"},t._l(t.clients.toString().split(""),(function(o){return e("span",{staticClass:"anim-text rajdhani"},[t._v(t._s(o))])})),0),t._v(" "),e("small",{staticClass:"col-12 text-uppercase p-0 m-0 text-primary pt-4 mt-5 line-1"},[t._v("delighting")]),t._v(" "),e("h3",{staticClass:"telex col-12 p-0 m-0 line-1 pt-3"},[t._v("CLIENTS")])]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"col-md-3 col-6 position-relative row p-0 m-0 mt-md-0 mt-5"},[e("div",{staticClass:"col-12 position-absolute font-size h1 line-2 pb-4"},[e("span",{staticClass:"anim-text rajdhani"},[t._v(t._s(t.issue))])]),t._v(" "),e("small",{staticClass:"col-12 text-uppercase p-0 m-0 text-primary pt-4 mt-5 line-1"},[t._v("optimizing")]),t._v(" "),e("h3",{staticClass:"telex col-12 p-0 m-0 line-1 pt-3"},[t._v("BUG FIXED")])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-3"},[e("h2",{staticClass:"h1"},[t._v("Large or Small, We’ve Got You Covered")]),t._v(" "),e("p",{staticClass:"text-black-50 para-desc"},[t._v("Our talented team of a web developer, digital strategists, graphic\n            artists,\n            marketers and project managers work in a collaborative manner on projects for each and every client.\n            Working\n            together in teams, Neofox can generate successful online results for our clients.\n        ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-3 col-6 position-relative row p-0 m-0 mt-md-0 mt-5"},[e("div",{staticClass:"col-12 position-absolute font-size h1 line-2 pb-4"},[e("span",{staticClass:"anim-text rajdhani"},[t._v("02")])]),t._v(" "),e("small",{staticClass:"col-12 text-uppercase p-0 m-0 text-primary pt-4 mt-5 line-1"},[t._v("awesome")]),t._v(" "),e("h3",{staticClass:"telex col-12 p-0 m-0 line-1 pt-3"},[t._v("PRODUCTS")])])}],!1,null,"aae2debc",null);e.default=component.exports},403:function(t,e,o){"use strict";o.r(e);var n=o(13),r=(o(79),o(373)),l={name:"BlogLatest",components:{BlogCard:o(371).default},data:function(){return{posts:void 0}},fetchOnServer:!1,fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.b)({limit:6,page:1});case 2:t.posts=e.sent;case 3:case"end":return e.stop()}}),e)})))()},mounted:function(){}},c=(o(392),o(30)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"d-table w-100 position-relative bg-white py-5"},[e("div",{staticClass:"container py-5"},[e("div",{staticClass:"row align-items-center mb-4 pb-2"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"section-title text-center text-lg-start"},[e("NuxtLink",{staticClass:"text-primary",attrs:{to:{name:"blog"}}},[t._v("Blog")]),t._v(" "),t._m(0)],1)]),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"row"},t._l(t.posts,(function(t){return e("div",{key:t.id,staticClass:"col-lg-4 col-md-6 px-2 my-3"},[e("BlogCard",{attrs:{post:t}})],1)})),0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 d-flex justify-content-end py-5 line-25"},[e("NuxtLink",{staticClass:"text-right mx-4 line",attrs:{to:{name:"blog"}}},[t._v("Read More >")])],1)])])])}),[function(){var t=this,e=t._self._c;return e("h4",{staticClass:"title mb-4 mb-lg-0"},[t._v("Reads Our Latest "),e("br"),t._v(" News & Blog")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"section-title text-center text-lg-start"},[e("p",{staticClass:"text-muted mb-0 mx-auto para-desc"},[t._v("\n            Our mission is to help the customer reach new heights of "),e("span",{staticClass:"text-success fw-bold"},[t._v("success")]),t._v("\n            while rejoicing the increase in sales and enhanced online traffic inflow.\n          ")])])])}],!1,null,"1ca43e4e",null);e.default=component.exports;installComponents(component,{BlogCard:o(371).default})},463:function(t,e,o){"use strict";o.r(e);var n=o(394),r=o(395),l=o(396),c=o(403),d=o(360),v={head:Object(d.a)("IT Services, Digital Solutions, Technology Consulting : NEOFOX","Data Science, IoT, Software Development, Web Development","We merge imagination and technology to help brands grow in the age of digital transformation","Neofox,Jaipur,Rajasthan,IoT,AI,Machine Learning,IIoT,Industrial Solution,Solution,Smart"),name:"index",components:{IndexHero:n.default,IndexService:r.default,IndexCounter:l.default,BlogLatest:c.default},data:function(){return{}}},m=o(30),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("section",[e("IndexHero",{staticClass:"front-1"}),t._v(" "),e("IndexCounter",{staticClass:"front-1"}),t._v(" "),e("IndexService",{staticClass:"front-1"})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IndexHero:o(394).default,IndexCounter:o(396).default,IndexService:o(395).default})}}]);