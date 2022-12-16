(window.webpackJsonp=window.webpackJsonp||[]).push([[58,5,6],{358:function(t,e,n){"use strict";n.r(e);var r={props:["icon","alt","title","text","block"],name:"KeyFeatureCard"},o=n(30),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-3 col-md-6 mt-4 pt-2",class:{"col-lg-4 col-md-6 mt-4 pt-2":3===t.block}},[e("div",{staticClass:"card border-0 features feature-clean course-feature p-4 overflow-hidden shadow"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body p-0 mt-4"},[t.title?e("h3",{staticClass:"title h5 text-dark"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.text?e("p",{staticClass:"text-muted mt-2"},[t._v(t._s(t.text))]):t._e()])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"icons text-primary text-center"},[t("img",{staticClass:"d-block rounded h3 mb-0 w-25",attrs:{src:"/svg/icons/Delete%20User.svg",alt:""}})])}],!1,null,"7f1363c1",null);e.default=component.exports},361:function(t,e,n){"use strict";var r=n(10),o=n(3),l=n(5),c=n(120),d=n(18),f=n(11),v=n(150),m=n(37),h=n(76),_=n(149),w=n(2),y=n(59).f,C=n(36).f,x=n(15).f,I=n(362),k=n(363).trim,N="Number",F=o[N],T=F.prototype,A=o.TypeError,S=l("".slice),E=l("".charCodeAt),O=function(t){var e=_(t,"number");return"bigint"==typeof e?e:j(e)},j=function(t){var e,n,r,o,l,c,d,code,f=_(t,"number");if(h(f))throw A("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=k(f),43===(e=E(f,0))||45===e){if(88===(n=E(f,2))||120===n)return NaN}else if(48===e){switch(E(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(c=(l=S(f,2)).length,d=0;d<c;d++)if((code=E(l,d))<48||code>o)return NaN;return parseInt(l,r)}return+f};if(c(N,!F(" 0o1")||!F("0b1")||F("+0x1"))){for(var L,G=function(t){var e=arguments.length<1?0:F(O(t)),n=this;return m(T,n)&&w((function(){I(n)}))?v(Object(e),n,G):e},K=r?y(F):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),W=0;K.length>W;W++)f(F,L=K[W])&&!f(G,L)&&x(G,L,C(F,L));G.prototype=T,T.constructor=G,d(o,N,G,{constructor:!0})}},362:function(t,e,n){var r=n(5);t.exports=r(1..valueOf)},363:function(t,e,n){var r=n(5),o=n(31),l=n(16),c=n(364),d=r("".replace),f="["+c+"]",v=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),h=function(t){return function(e){var n=l(o(e));return 1&t&&(n=d(n,v,"")),2&t&&(n=d(n,m,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},364:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},365:function(t,e,n){"use strict";n.r(e);n(361);var r=n(358),o={props:{features:{type:Array,required:!0},block:{type:Number,default:4}},name:"KeyFeatures",components:{KeyFeatureCard:r.default}},l=n(30),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("div",{staticClass:"row pt-5"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"section-title mb-4 pb-2"},[e("h2",{staticClass:"title mb-4"},[t._v("Key Features")]),t._v(" "),e("div",{staticClass:"text-light-dark mb-0 para-desc"},[t._t("default")],2)])])]),t._v(" "),e("div",{staticClass:"row align-items-center"},t._l(t.features,(function(n){return e("KeyFeatureCard",{key:t._f("slug")(n.title),attrs:{block:t.block,alt:n.title,title:n.title,icon:n.icon,text:n.text}})})),1)])}),[],!1,null,"dcbffcf6",null);e.default=component.exports},366:function(t,e){e.iot_ai_tech_list=["pytorch.svg","tensorflow.svg","python.svg","neo4j.svg","opencv.svg","pyspark.svg"],e.iot_m2m_tech_list=["openvpn.svg","ssh.svg","wireguard.svg"]},460:function(t,e,n){"use strict";n.r(e);var r=n(370),o=n(357),l=n(365),c=n(369),d=n(359),f=n(360),v=n(367),m=n(366),h={components:{TechList:c.default,FaqContainer:o.default,KeyFeatures:l.default,BlogGrid:d.default},head:Object(f.a)("IT Services, Digital Solutions, Technology Consulting : NEOFOX","Data Science, IoT, Software Development, Web Development","We merge imagination and technology to help brands grow in the age of digital transformation","Neofox,Jaipur,Rajasthan,IoT,AI,Machine Learning,IIoT,Industrial Solution,Solution,Smart","","",""),data:function(){return{techItems:m.iot_ai_tech_list,features:[{alt:"Functional Testing",title:"Functional Testing",icon:"",text:"Our Outsourced Functional Testing Services guarantee the usefulness of the product application works in conformance with the prerequisite determination."},{alt:"Test Automation",title:"Test Automation",icon:"",text:"We follow the accepted procedures and a cycle situated way to deal with guarantee quicker delivery and time to showcase."},{alt:"Performance Testing",title:"Performance Testing",icon:"",text:"Our cycle arranged execution testing guarantees your application performs well under normal responsibility."},{alt:"Security Testing",title:"Security Testing",icon:"",text:"We assist you with revealing weaknesses inside your framework and shield it from potential interlopers by  prescribed procedures drawn from OWASP norms."}],FAQ:v.iot_faq}},mounted:function(){Object(r.bootstrap)()}},_=n(30),component=Object(_.a)(h,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"position-relative bg-white"},[e("section",{staticClass:"bg-light w-100 h-100-center"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-md-6 col-12 order-md-1 order-2"},[e("div",{staticClass:"title-heading"},[e("NuxtLink",{staticClass:"badge rounded-pill text-light-dark",attrs:{to:{name:"web-development"}}},[t._v("\n              web development\n            ")]),t._v(" "),t._m(0),t._v(" "),e("p",{staticClass:"para-desc text-light-dark"},[t._v("Neofox gives full-range quality assurance and testing solutions for\n              desktops, web, and versatile applications. We guarantee your end-clients partake in a consistent\n              encounter.\n            ")]),t._v(" "),e("div",{staticClass:"mt-4 pt-2"},[e("NuxtLink",{staticClass:"btn btn-primary me-2",attrs:{to:{name:"contact"}}},[t._v("Get Started")]),t._v(" "),e("a",{staticClass:"btn btn-outline-primary",attrs:{href:"#FAQS"}},[t._v("FAQ")])],1)],1)]),t._v(" "),t._m(1)])])]),t._v(" "),e("TechList",{attrs:{items:t.techItems}}),t._v(" "),e("div",{staticClass:"position-relative"},[e("div",{staticClass:"shape overflow-hidden text-white"},[e("svg",{attrs:{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"}})])])]),t._v(" "),e("KeyFeatures",{attrs:{features:t.features}},[e("p",[t._v("\n      We assist with characterizing quality objectives, then, at that point we completely analyze every one of them\n      and characterize a bunch of steps to take to build the nature of your product, so it meets its presentation\n      necessities.\n      "),e("span",{staticClass:"line text-primary fw-bold",attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Artificial intelligence"}},[t._v("AI")])])]),t._v(" "),t._m(2),t._v(" "),e("FaqContainer",{attrs:{faq:t.FAQ,title:"Faq"}}),t._v(" "),e("BlogGrid")],1)}),[function(){var t=this,e=t._self._c;return e("h1",{staticClass:"fw-bold mt-2 mb-3 line-10 text-uppercase"},[t._v("\n              Quality Assurance "),e("br"),t._v(" "),e("span",{staticClass:"line text-danger",attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Internet of Things"}},[t._v("AND")]),t._v(" "),e("br"),t._v(" Testing")])},function(){var t=this._self._c;return t("div",{staticClass:"col-md-6 order-md-2 order-1"},[t("img",{staticClass:"img-fluid d-block mx-auto",attrs:{src:"/svg/flow-chart/iot-ai.svg",alt:"neofox artificial intelligent in iot"}})])},function(){var t=this,e=t._self._c;return e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row d-flex align-items-center"},[e("div",{staticClass:"col-md-7 col-12"},[e("h3",{staticClass:"py-5 h2 line-15 text-dark"},[t._v('\n            Quality in our conveyance worldview means "an answer which consummately fits the customer\'s business\n            goals".\n          ')])]),t._v(" "),e("div",{staticClass:"col-5 d-none d-md-block"},[e("img",{staticClass:"w-100",attrs:{src:"/images/illustrator/app.svg",alt:""}})])])])])}],!1,null,"51dc7920",null);e.default=component.exports;installComponents(component,{FaqContainer:n(357).default,BlogGrid:n(359).default})}}]);