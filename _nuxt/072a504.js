(window.webpackJsonp=window.webpackJsonp||[]).push([[39,5,6],{358:function(t,e,n){"use strict";n.r(e);var r={props:["icon","alt","title","text","block"],name:"KeyFeatureCard"},o=n(30),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-3 col-md-6 mt-4 pt-2",class:{"col-lg-4 col-md-6 mt-4 pt-2":3===t.block}},[e("div",{staticClass:"card border-0 features feature-clean course-feature p-4 overflow-hidden shadow"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body p-0 mt-4"},[t.title?e("h3",{staticClass:"title h5 text-dark"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.text?e("p",{staticClass:"text-muted mt-2"},[t._v(t._s(t.text))]):t._e()])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"icons text-primary text-center"},[t("img",{staticClass:"d-block rounded h3 mb-0 w-25",attrs:{src:"/svg/icons/Delete%20User.svg",alt:""}})])}],!1,null,"7f1363c1",null);e.default=component.exports},361:function(t,e,n){"use strict";var r=n(10),o=n(3),l=n(5),c=n(120),d=n(18),f=n(11),v=n(150),h=n(37),m=n(76),_=n(149),C=n(2),w=n(59).f,I=n(36).f,x=n(15).f,y=n(362),T=n(363).trim,N="Number",A=o[N],F=A.prototype,k=o.TypeError,E=l("".slice),O=l("".charCodeAt),S=function(t){var e=_(t,"number");return"bigint"==typeof e?e:j(e)},j=function(t){var e,n,r,o,l,c,d,code,f=_(t,"number");if(m(f))throw k("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=T(f),43===(e=O(f,0))||45===e){if(88===(n=O(f,2))||120===n)return NaN}else if(48===e){switch(O(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(c=(l=E(f,2)).length,d=0;d<c;d++)if((code=O(l,d))<48||code>o)return NaN;return parseInt(l,r)}return+f};if(c(N,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var L,M=function(t){var e=arguments.length<1?0:A(S(t)),n=this;return h(F,n)&&C((function(){y(n)}))?v(Object(e),n,M):e},G=r?w(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),K=0;G.length>K;K++)f(A,L=G[K])&&!f(M,L)&&x(M,L,I(A,L));M.prototype=F,F.constructor=M,d(o,N,M,{constructor:!0})}},362:function(t,e,n){var r=n(5);t.exports=r(1..valueOf)},363:function(t,e,n){var r=n(5),o=n(31),l=n(16),c=n(364),d=r("".replace),f="["+c+"]",v=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),m=function(t){return function(e){var n=l(o(e));return 1&t&&(n=d(n,v,"")),2&t&&(n=d(n,h,"")),n}};t.exports={start:m(1),end:m(2),trim:m(3)}},364:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},365:function(t,e,n){"use strict";n.r(e);n(361);var r=n(358),o={props:{features:{type:Array,required:!0},block:{type:Number,default:4}},name:"KeyFeatures",components:{KeyFeatureCard:r.default}},l=n(30),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("div",{staticClass:"row pt-5"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"section-title mb-4 pb-2"},[e("h2",{staticClass:"title mb-4"},[t._v("Key Features")]),t._v(" "),e("div",{staticClass:"text-light-dark mb-0 para-desc"},[t._t("default")],2)])])]),t._v(" "),e("div",{staticClass:"row align-items-center"},t._l(t.features,(function(n){return e("KeyFeatureCard",{key:t._f("slug")(n.title),attrs:{block:t.block,alt:n.title,title:n.title,icon:n.icon,text:n.text}})})),1)])}),[],!1,null,"dcbffcf6",null);e.default=component.exports},366:function(t,e){e.iot_ai_tech_list=["pytorch.svg","tensorflow.svg","python.svg","neo4j.svg","opencv.svg","pyspark.svg"],e.iot_m2m_tech_list=["openvpn.svg","ssh.svg","wireguard.svg"]},445:function(t,e,n){"use strict";n.r(e);var r=n(370),o=n(357),l=n(365),c=n(369),d=n(359),f=n(360),v=n(367),h=n(366),m={components:{TechList:c.default,FaqContainer:o.default,KeyFeatures:l.default,BlogGrid:d.default},head:Object(f.a)("IT Services, Digital Solutions, Technology Consulting : NEOFOX","Data Science, IoT, Software Development, Web Development","We merge imagination and technology to help brands grow in the age of digital transformation","Neofox,Jaipur,Rajasthan,IoT,AI,Machine Learning,IIoT,Industrial Solution,Solution,Smart","","",""),data:function(){return{techItems:h.iot_ai_tech_list,features:[{alt:"",title:"BOOM",icon:"",text:"DOOM"}],FAQ:v.iot_faq}},mounted:function(){Object(r.bootstrap)()}},_=n(30),component=Object(_.a)(m,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"position-relative bg-white"},[e("section",{staticClass:"bg-light w-100 h-100-center"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-md-6 col-12 order-md-1 order-2"},[e("div",{staticClass:"title-heading"},[e("NuxtLink",{staticClass:"badge rounded-pill text-light-dark",attrs:{to:{name:"internet-of-things"}}},[t._v("\n              Internet Of Things\n            ")]),t._v(" "),t._m(0),t._v(" "),e("p",{staticClass:"para-desc text-light-dark"},[t._v("The fundamental explanation for consolidating AI with IoT is, while\n              IoT\n              gadgets effectively collect all the information and moving it to normally cloud or whatever other space\n              where information can be aggregated through the web.\n            ")]),t._v(" "),e("div",{staticClass:"mt-4 pt-2"},[e("NuxtLink",{staticClass:"btn btn-primary me-2",attrs:{to:{name:"contact"}}},[t._v("Get Started")]),t._v(" "),e("a",{staticClass:"btn btn-outline-primary",attrs:{href:"#FAQS"}},[t._v("FAQ")])],1)],1)]),t._v(" "),t._m(1)])])]),t._v(" "),e("TechList",{attrs:{items:t.techItems}}),t._v(" "),e("div",{staticClass:"position-relative"},[e("div",{staticClass:"shape overflow-hidden text-white"},[e("svg",{attrs:{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"}})])])]),t._v(" "),e("KeyFeatures",{attrs:{features:t.features}},[e("p",[t._v("\n      The central clarification for merging\n      "),e("span",{staticClass:"line text-primary fw-bold",attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Artificial intelligence"}},[t._v("AI")]),t._v("\n      with IoT is, while IoT devices adequately gather all the data and moving it to ordinarily cloud\n      or whatever other space where data can be amassed through the web. ")]),t._v(" "),e("p",[t._v("AI, which is considered as the frontal cortex of A IoT is\n      what truly helps in unique and reenacting the machines to act or respond.")])]),t._v(" "),t._m(2),t._v(" "),e("FaqContainer",{attrs:{faq:t.FAQ,title:"Faq"}}),t._v(" "),e("BlogGrid")],1)}),[function(){var t=this,e=t._self._c;return e("h1",{staticClass:"fw-bold mt-2 mb-3 line-10 text-uppercase"},[t._v("\n              Artificial intelligence "),e("br"),t._v(" of\n              "),e("span",{staticClass:"line text-danger",attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Internet of Things"}},[t._v("Things")])])},function(){var t=this._self._c;return t("div",{staticClass:"col-md-6 order-md-2 order-1"},[t("img",{staticClass:"img-fluid d-block mx-auto",attrs:{src:"/img/iot/AiForIot.svg",alt:"neofox artificial intelligent in iot"}})])},function(){var t=this,e=t._self._c;return e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row d-flex align-items-center"},[e("div",{staticClass:"col-md-7 col-12"},[e("h3",{staticClass:"py-5 h2 line-15 text-dark"},[t._v("\n            AI, which is considered as the cerebrum of AIoT is\n            the thing that really helps in dynamic and recreating the machines to act or react.\n          ")])]),t._v(" "),e("div",{staticClass:"col-5 d-none d-md-block"},[e("img",{staticClass:"w-100",attrs:{src:"/images/illustrator/app.svg",alt:""}})])])])])}],!1,null,"a4491ad0",null);e.default=component.exports;installComponents(component,{FaqContainer:n(357).default,BlogGrid:n(359).default})}}]);