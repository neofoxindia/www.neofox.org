(window.webpackJsonp=window.webpackJsonp||[]).push([[38,5,6],{352:function(t,e,n){"use strict";n.r(e);var r={props:["icon","alt","title","text","block"],name:"KeyFeatureCard"},o=n(31),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-3 col-md-6 mt-4 pt-2",class:{"col-lg-4 col-md-6 mt-4 pt-2":3===t.block}},[e("div",{staticClass:"card border-0 features feature-clean course-feature p-4 overflow-hidden shadow"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body p-0 mt-4"},[t.title?e("h3",{staticClass:"title h5 text-dark"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.text?e("p",{staticClass:"text-muted mt-2"},[t._v(t._s(t.text))]):t._e()])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"icons text-primary text-center"},[t("img",{staticClass:"d-block rounded h3 mb-0 w-25",attrs:{src:"/svg/icons/Delete%20User.svg",alt:""}})])}],!1,null,"7f1363c1",null);e.default=component.exports},355:function(t,e,n){"use strict";var r=n(10),o=n(4),l=n(3),c=n(122),d=n(18),f=n(12),v=n(150),m=n(37),_=n(74),h=n(149),C=n(2),x=n(59).f,I=n(36).f,y=n(14).f,w=n(356),N=n(357).trim,k="Number",F=o.Number,A=F.prototype,S=o.TypeError,T=l("".slice),E=l("".charCodeAt),O=function(t){var e=h(t,"number");return"bigint"==typeof e?e:L(e)},L=function(t){var e,n,r,o,l,c,d,code,f=h(t,"number");if(_(f))throw S("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=N(f),43===(e=E(f,0))||45===e){if(88===(n=E(f,2))||120===n)return NaN}else if(48===e){switch(E(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(c=(l=T(f,2)).length,d=0;d<c;d++)if((code=E(l,d))<48||code>o)return NaN;return parseInt(l,r)}return+f};if(c(k,!F(" 0o1")||!F("0b1")||F("+0x1"))){for(var j,D=function(t){var e=arguments.length<1?0:F(O(t)),n=this;return m(A,n)&&C((function(){w(n)}))?v(Object(e),n,D):e},K=r?x(F):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),M=0;K.length>M;M++)f(F,j=K[M])&&!f(D,j)&&y(D,j,I(F,j));D.prototype=A,A.constructor=D,d(o,k,D,{constructor:!0})}},356:function(t,e,n){var r=n(3);t.exports=r(1..valueOf)},357:function(t,e,n){var r=n(3),o=n(27),l=n(15),c=n(358),d=r("".replace),f="["+c+"]",v=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),_=function(t){return function(e){var n=l(o(e));return 1&t&&(n=d(n,v,"")),2&t&&(n=d(n,m,"")),n}};t.exports={start:_(1),end:_(2),trim:_(3)}},358:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},359:function(t,e,n){"use strict";n.r(e);n(355);var r=n(352),o={props:{features:{type:Array,required:!0},block:{type:Number,default:4}},name:"KeyFeatures",components:{KeyFeatureCard:r.default}},l=n(31),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("div",{staticClass:"row pt-5"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"section-title mb-4 pb-2"},[e("h2",{staticClass:"title mb-4"},[t._v("Key Features")]),t._v(" "),e("div",{staticClass:"text-light-dark mb-0 para-desc"},[t._t("default")],2)])])]),t._v(" "),e("div",{staticClass:"row align-items-center"},t._l(t.features,(function(n){return e("KeyFeatureCard",{key:t._f("slug")(n.title),attrs:{block:t.block,alt:n.title,title:n.title,icon:n.icon,text:n.text}})})),1)])}),[],!1,null,"dcbffcf6",null);e.default=component.exports},360:function(t,e){e.iot_ai_tech_list=["pytorch.svg","tensorflow.svg","python.svg","neo4j.svg","opencv.svg","pyspark.svg"],e.iot_m2m_tech_list=["openvpn.svg","ssh.svg","wireguard.svg"]},438:function(t,e,n){"use strict";n.r(e);var r=n(364),o=n(351),l=n(359),c=n(363),d=n(353),f=n(354),v=n(361),m=n(360),_={components:{TechList:c.default,FaqContainer:o.default,KeyFeatures:l.default,BlogGrid:d.default},head:Object(f.a)("IT Services, Digital Solutions, Technology Consulting : NEOFOX","Data Science, IoT, Software Development, Web Development","We merge imagination and technology to help brands grow in the age of digital transformation","Neofox,Jaipur,Rajasthan,IoT,AI,Machine Learning,IIoT,Industrial Solution,Solution,Smart","","",""),data:function(){return{techItems:m.iot_ai_tech_list,features:[{alt:"",title:"",icon:"",text:""}],FAQ:v.iot_faq}},mounted:function(){Object(r.bootstrap)()}},h=n(31),component=Object(h.a)(_,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"position-relative bg-white"},[e("section",{staticClass:"bg-light w-100 h-100-center"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-md-6 col-12 order-md-1 order-2"},[e("div",{staticClass:"title-heading"},[e("NuxtLink",{staticClass:"badge rounded-pill text-light-dark",attrs:{to:{name:"internet-of-things"}}},[t._v("\n              Internet Of Things\n            ")]),t._v(" "),t._m(0),t._v(" "),e("p",{staticClass:"para-desc text-light-dark"}),t._v(" "),e("div",{staticClass:"mt-4 pt-2"},[e("NuxtLink",{staticClass:"btn btn-primary me-2",attrs:{to:{name:"contact"}}},[t._v("Get Started")]),t._v(" "),e("a",{staticClass:"btn btn-outline-primary",attrs:{href:"#FAQS"}},[t._v("FAQ")])],1)],1)]),t._v(" "),t._m(1)])])]),t._v(" "),e("TechList",{attrs:{items:t.techItems}}),t._v(" "),e("div",{staticClass:"position-relative"},[e("div",{staticClass:"shape overflow-hidden text-white"},[e("svg",{attrs:{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"}})])])]),t._v(" "),e("KeyFeatures",{attrs:{features:t.features}},[e("p",[t._v("\n      Build native, web, hybrid, or PWAs on the OS of your choice. Accept our ability in different dialects, SDKs, and\n      well-known IoT systems and stages.\n      "),e("br"),t._v(" "),e("br"),t._v("\n      Make IoT applications sharp by planning AI-ML capacities that can give farsighted pieces of information and\n      modify the customer experience.\n    ")])]),t._v(" "),t._m(2),t._v(" "),e("FaqContainer",{attrs:{faq:t.FAQ,title:"Faq"}}),t._v(" "),e("BlogGrid")],1)}),[function(){var t=this,e=t._self._c;return e("h1",{staticClass:"fw-bold mt-2 mb-3 line-10 text-uppercase"},[t._v("\n              Our Neofox experts assemble IoT\n              "),e("span",{staticClass:"line text-danger",attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Android, IOS, Desktop, Web, Linux"}},[t._v("applications ")]),t._v("that consolidate sensor")])},function(){var t=this._self._c;return t("div",{staticClass:"col-md-6 order-md-2 order-1"},[t("img",{staticClass:"img-fluid d-block mx-auto",attrs:{src:"/img/iot/IotAppDev.svg",alt:"neofox artificial intelligent in iot"}})])},function(){var t=this,e=t._self._c;return e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row d-flex align-items-center"},[e("div",{staticClass:"col-md-7 col-12"},[e("h3",{staticClass:"py-5 h2 line-15 text-dark"},[t._v("\n            Control IoT equipment gadgets distantly through the application. Influence the application for new element\n            discharges on existing equipment.\n          ")])]),t._v(" "),e("div",{staticClass:"col-5 d-none d-md-block"},[e("img",{staticClass:"w-100",attrs:{src:"/images/illustrator/app.svg",alt:""}})])])])])}],!1,null,"63497210",null);e.default=component.exports;installComponents(component,{FaqContainer:n(351).default,BlogGrid:n(353).default})}}]);