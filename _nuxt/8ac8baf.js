(window.webpackJsonp=window.webpackJsonp||[]).push([[43,5,6],{352:function(t,e,n){"use strict";n.r(e);var r={props:["icon","alt","title","text","block"],name:"KeyFeatureCard"},o=n(31),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-3 col-md-6 mt-4 pt-2",class:{"col-lg-4 col-md-6 mt-4 pt-2":3===t.block}},[e("div",{staticClass:"card border-0 features feature-clean course-feature p-4 overflow-hidden shadow"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body p-0 mt-4"},[t.title?e("h3",{staticClass:"title h5 text-dark"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.text?e("p",{staticClass:"text-muted mt-2"},[t._v(t._s(t.text))]):t._e()])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"icons text-primary text-center"},[t("img",{staticClass:"d-block rounded h3 mb-0 w-25",attrs:{src:"/svg/icons/Delete%20User.svg",alt:""}})])}],!1,null,"7f1363c1",null);e.default=component.exports},355:function(t,e,n){"use strict";var r=n(10),o=n(4),c=n(3),l=n(122),d=n(18),f=n(12),v=n(150),m=n(37),h=n(74),_=n(149),C=n(2),x=n(59).f,I=n(36).f,w=n(14).f,y=n(356),k=n(357).trim,N="Number",T=o.Number,E=T.prototype,F=o.TypeError,A=c("".slice),S=c("".charCodeAt),O=function(t){var e=_(t,"number");return"bigint"==typeof e?e:j(e)},j=function(t){var e,n,r,o,c,l,d,code,f=_(t,"number");if(h(f))throw F("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=k(f),43===(e=S(f,0))||45===e){if(88===(n=S(f,2))||120===n)return NaN}else if(48===e){switch(S(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(l=(c=A(f,2)).length,d=0;d<l;d++)if((code=S(c,d))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(l(N,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var L,G=function(t){var e=arguments.length<1?0:T(O(t)),n=this;return m(E,n)&&C((function(){y(n)}))?v(Object(e),n,G):e},K=r?x(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),M=0;K.length>M;M++)f(T,L=K[M])&&!f(G,L)&&w(G,L,I(T,L));G.prototype=E,E.constructor=G,d(o,N,G,{constructor:!0})}},356:function(t,e,n){var r=n(3);t.exports=r(1..valueOf)},357:function(t,e,n){var r=n(3),o=n(27),c=n(15),l=n(358),d=r("".replace),f="["+l+"]",v=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),h=function(t){return function(e){var n=c(o(e));return 1&t&&(n=d(n,v,"")),2&t&&(n=d(n,m,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},358:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},359:function(t,e,n){"use strict";n.r(e);n(355);var r=n(352),o={props:{features:{type:Array,required:!0},block:{type:Number,default:4}},name:"KeyFeatures",components:{KeyFeatureCard:r.default}},c=n(31),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("div",{staticClass:"row pt-5"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"section-title mb-4 pb-2"},[e("h2",{staticClass:"title mb-4"},[t._v("Key Features")]),t._v(" "),e("div",{staticClass:"text-light-dark mb-0 para-desc"},[t._t("default")],2)])])]),t._v(" "),e("div",{staticClass:"row align-items-center"},t._l(t.features,(function(n){return e("KeyFeatureCard",{key:t._f("slug")(n.title),attrs:{block:t.block,alt:n.title,title:n.title,icon:n.icon,text:n.text}})})),1)])}),[],!1,null,"dcbffcf6",null);e.default=component.exports},360:function(t,e){e.iot_ai_tech_list=["pytorch.svg","tensorflow.svg","python.svg","neo4j.svg","opencv.svg","pyspark.svg"],e.iot_m2m_tech_list=["openvpn.svg","ssh.svg","wireguard.svg"]},443:function(t,e,n){"use strict";n.r(e);var r=n(364),o=n(351),c=n(359),l=n(363),d=n(353),f=n(354),v=n(361),m=n(360),h={components:{TechList:l.default,FaqContainer:o.default,KeyFeatures:c.default,BlogGrid:d.default},head:Object(f.a)("IT Services, Digital Solutions, Technology Consulting : NEOFOX","Data Science, IoT, Software Development, Web Development","We merge imagination and technology to help brands grow in the age of digital transformation","Neofox,Jaipur,Rajasthan,IoT,AI,Machine Learning,IIoT,Industrial Solution,Solution,Smart","",v.iot_faq,""),data:function(){return{techItems:m.iot_ai_tech_list,features:[{alt:"Overseen Services",title:"Overseen Services",icon:"",text:"We arrange a cloud framework and give ITIL adjusted all day, everyday administration work area support, which incorporates proactive checking, alarming, computerization, and gadget break-fix administrations."},{alt:"Information Platform",title:"Information Platform",icon:"",text:"We can give cloud execution and all fundamental applications to construct an information stage redid to our customers’ prerequisites'. This empowers them to exploit the exceptional business knowledge that their IoT arrangement gives."},{alt:"Examination and Automation",title:"Examination and Automation",icon:"",text:"We give cloud-based dashboards and constant information investigation taking into consideration exhaustive mechanized workstreams to be constructed."}],FAQ:v.iot_faq}},mounted:function(){Object(r.bootstrap)()}},_=n(31),component=Object(_.a)(h,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"position-relative bg-white"},[e("section",{staticClass:"bg-light w-100 h-100-center"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-md-6 col-12 order-md-1 order-2"},[e("div",{staticClass:"title-heading"},[e("NuxtLink",{staticClass:"badge rounded-pill text-light-dark",attrs:{to:{name:"internet-of-things"}}},[t._v("\n              Internet Of Things\n            ")]),t._v(" "),t._m(0),t._v(" "),e("p",{staticClass:"para-desc text-light-dark"},[t._v("End-to-end IoT solutions deliver big data, insight, management,\n              operational efficiency, compliance, automation, and cost reduction.\n            ")]),t._v(" "),e("div",{staticClass:"mt-4 pt-2"},[e("NuxtLink",{staticClass:"btn btn-primary me-2",attrs:{to:{name:"contact"}}},[t._v("Get Started")]),t._v(" "),e("a",{staticClass:"btn btn-outline-primary",attrs:{href:"#FAQS"}},[t._v("FAQ")])],1)],1)]),t._v(" "),t._m(1)])])]),t._v(" "),e("TechList",{attrs:{items:t.techItems}}),t._v(" "),e("div",{staticClass:"position-relative"},[e("div",{staticClass:"shape overflow-hidden text-white"},[e("svg",{attrs:{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"}})])])]),t._v(" "),e("KeyFeatures",{attrs:{features:t.features,block:3}},[e("p",[t._v("\n      IoT Hardware Management – This incorporates gadget obtainment, resource enrollment, get-together, pre-design,\n      enactment, and capacity.\n    ")])]),t._v(" "),t._m(2),t._v(" "),e("FaqContainer",{attrs:{faq:t.FAQ,title:"Faq"}}),t._v(" "),e("BlogGrid",{attrs:{tag:["iot","end-to-end"]}})],1)}),[function(){var t=this,e=t._self._c;return e("h1",{staticClass:"fw-bold mt-2 mb-3 line-10 text-uppercase"},[t._v("\n              We deliver\n              "),e("span",{staticClass:"line text-danger",attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Internet of Things"}},[t._v("End-to-End")]),t._v(" IoT capacity which incorporates")])},function(){var t=this._self._c;return t("div",{staticClass:"col-md-6 order-md-2 order-1"},[t("img",{staticClass:"img-fluid d-block mx-auto",attrs:{src:"/img/iot/IotEnd2End.svg",alt:"neofox artificial intelligent in iot"}})])},function(){var t=this,e=t._self._c;return e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row d-flex align-items-center"},[e("div",{staticClass:"col-md-7 col-12"},[e("h3",{staticClass:"py-5 h2 line-15 text-dark"},[t._v("\n            AI, which is considered as the cerebrum of AIoT is\n            the thing that really helps in dynamic and recreating the machines to act or react.\n          ")])]),t._v(" "),e("div",{staticClass:"col-5 d-none d-md-block"},[e("img",{staticClass:"w-100",attrs:{src:"/images/illustrator/app.svg",alt:""}})])])])])}],!1,null,"10f6bfda",null);e.default=component.exports;installComponents(component,{FaqContainer:n(351).default,BlogGrid:n(353).default})}}]);