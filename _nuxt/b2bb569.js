(window.webpackJsonp=window.webpackJsonp||[]).push([[40,5,6],{358:function(t,e,n){"use strict";n.r(e);var r={props:["icon","alt","title","text","block"],name:"KeyFeatureCard"},o=n(30),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-3 col-md-6 mt-4 pt-2",class:{"col-lg-4 col-md-6 mt-4 pt-2":3===t.block}},[e("div",{staticClass:"card border-0 features feature-clean course-feature p-4 overflow-hidden shadow"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body p-0 mt-4"},[t.title?e("h3",{staticClass:"title h5 text-dark"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.text?e("p",{staticClass:"text-muted mt-2"},[t._v(t._s(t.text))]):t._e()])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"icons text-primary text-center"},[t("img",{staticClass:"d-block rounded h3 mb-0 w-25",attrs:{src:"/svg/icons/Delete%20User.svg",alt:""}})])}],!1,null,"7f1363c1",null);e.default=component.exports},361:function(t,e,n){"use strict";var r=n(10),o=n(3),l=n(5),c=n(120),f=n(18),d=n(11),v=n(150),m=n(37),_=n(76),h=n(149),y=n(2),C=n(59).f,x=n(36).f,I=n(15).f,w=n(362),N=n(363).trim,F="Number",T=o[F],k=T.prototype,S=o.TypeError,E=l("".slice),A=l("".charCodeAt),O=function(t){var e=h(t,"number");return"bigint"==typeof e?e:j(e)},j=function(t){var e,n,r,o,l,c,f,code,d=h(t,"number");if(_(d))throw S("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=N(d),43===(e=A(d,0))||45===e){if(88===(n=A(d,2))||120===n)return NaN}else if(48===e){switch(A(d,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(c=(l=E(d,2)).length,f=0;f<c;f++)if((code=A(l,f))<48||code>o)return NaN;return parseInt(l,r)}return+d};if(c(F,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var L,M=function(t){var e=arguments.length<1?0:T(O(t)),n=this;return m(k,n)&&y((function(){w(n)}))?v(Object(e),n,M):e},D=r?C(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),G=0;D.length>G;G++)d(T,L=D[G])&&!d(M,L)&&I(M,L,x(T,L));M.prototype=k,k.constructor=M,f(o,F,M,{constructor:!0})}},362:function(t,e,n){var r=n(5);t.exports=r(1..valueOf)},363:function(t,e,n){var r=n(5),o=n(31),l=n(16),c=n(364),f=r("".replace),d="["+c+"]",v=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),_=function(t){return function(e){var n=l(o(e));return 1&t&&(n=f(n,v,"")),2&t&&(n=f(n,m,"")),n}};t.exports={start:_(1),end:_(2),trim:_(3)}},364:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},365:function(t,e,n){"use strict";n.r(e);n(361);var r=n(358),o={props:{features:{type:Array,required:!0},block:{type:Number,default:4}},name:"KeyFeatures",components:{KeyFeatureCard:r.default}},l=n(30),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("div",{staticClass:"row pt-5"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"section-title mb-4 pb-2"},[e("h2",{staticClass:"title mb-4"},[t._v("Key Features")]),t._v(" "),e("div",{staticClass:"text-light-dark mb-0 para-desc"},[t._t("default")],2)])])]),t._v(" "),e("div",{staticClass:"row align-items-center"},t._l(t.features,(function(n){return e("KeyFeatureCard",{key:t._f("slug")(n.title),attrs:{block:t.block,alt:n.title,title:n.title,icon:n.icon,text:n.text}})})),1)])}),[],!1,null,"dcbffcf6",null);e.default=component.exports},366:function(t,e){e.iot_ai_tech_list=["pytorch.svg","tensorflow.svg","python.svg","neo4j.svg","opencv.svg","pyspark.svg"],e.iot_m2m_tech_list=["openvpn.svg","ssh.svg","wireguard.svg"]},446:function(t,e,n){"use strict";n.r(e);var r=n(370),o=n(357),l=n(365),c=n(369),f=n(359),d=n(360),v=n(367),m=n(366),_={components:{TechList:c.default,FaqContainer:o.default,KeyFeatures:l.default,BlogGrid:f.default},head:Object(d.a)("IT Services, Digital Solutions, Technology Consulting : NEOFOX","Data Science, IoT, Software Development, Web Development","We merge imagination and technology to help brands grow in the age of digital transformation","Neofox,Jaipur,Rajasthan,IoT,AI,Machine Learning,IIoT,Industrial Solution,Solution,Smart","",v.iot_faq),data:function(){return{techItems:m.iot_ai_tech_list,features:[{alt:"Scalability",title:"Scalability",icon:"",text:""},{alt:"Data Mobility",title:"Data Mobility",icon:"",text:""},{alt:"Security",title:"Security",icon:"",text:""},{alt:"Cost-Effectiveness",title:"Cost-Effectiveness",icon:"",text:""}],FAQ:v.iot_faq}},mounted:function(){Object(r.bootstrap)()}},h=n(30),component=Object(h.a)(_,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"position-relative bg-white"},[e("section",{staticClass:"bg-light w-100 h-100-center"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-md-6 col-12 order-md-1 order-2"},[e("div",{staticClass:"title-heading"},[e("NuxtLink",{staticClass:"badge rounded-pill text-light-dark",attrs:{to:{name:"internet-of-things"}}},[t._v("\n              Internet Of Things\n            ")]),t._v(" "),t._m(0),t._v(" "),e("p",{staticClass:"para-desc text-light-dark"},[t._v("We provide connectivity, security, scalability, and ease of\n              integration. These platforms also help you to improve the usability of your IoT app.\n            ")]),t._v(" "),e("div",{staticClass:"mt-4 pt-2"},[e("NuxtLink",{staticClass:"btn btn-primary me-2",attrs:{to:{name:"contact"}}},[t._v("Get Started")]),t._v(" "),e("a",{staticClass:"btn btn-outline-primary",attrs:{href:"#FAQS"}},[t._v("FAQ")])],1)],1)]),t._v(" "),t._m(1)])])]),t._v(" "),e("TechList",{attrs:{items:t.techItems}}),t._v(" "),e("div",{staticClass:"position-relative"},[e("div",{staticClass:"shape overflow-hidden text-white"},[e("svg",{attrs:{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"}})])])]),t._v(" "),e("KeyFeatures",{attrs:{features:t.features}},[e("p",[t._v("\n      We focus on security and efficiency. Our IoT platform is flexible and based on open standards and open\n      source. Our goal is to strengthen your relationship with your customers.\n    ")])]),t._v(" "),t._m(2),t._v(" "),e("FaqContainer",{attrs:{faq:t.FAQ,title:"Faq"}}),t._v(" "),e("BlogGrid")],1)}),[function(){var t=this,e=t._self._c;return e("h1",{staticClass:"fw-bold mt-2 mb-3 line-10 text-uppercase"},[t._v("\n              IoT cloud platforms can significantly ease your\n              "),e("span",{staticClass:"line text-danger",attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Health, Business"}},[t._v("life")]),t._v("!")])},function(){var t=this._self._c;return t("div",{staticClass:"col-md-6 order-md-2 order-1"},[t("img",{staticClass:"img-fluid d-block mx-auto",attrs:{src:"/img/iot/IotCloud.svg",alt:"neofox artificial intelligent in iot"}})])},function(){var t=this,e=t._self._c;return e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row d-flex align-items-center"},[e("div",{staticClass:"col-md-7 col-12"},[e("h3",{staticClass:"py-5 h2 line-15 text-dark"},[t._v("\n            These platforms also help you to improve the usability of your IoT System. They focus on security and\n            efficiency.\n          ")])]),t._v(" "),e("div",{staticClass:"col-5 d-none d-md-block"},[e("img",{staticClass:"w-100",attrs:{src:"/images/illustrator/app.svg",alt:""}})])])])])}],!1,null,"98a9c820",null);e.default=component.exports;installComponents(component,{FaqContainer:n(357).default,BlogGrid:n(359).default})}}]);