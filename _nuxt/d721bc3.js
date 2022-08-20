(window.webpackJsonp=window.webpackJsonp||[]).push([[56,5,6],{352:function(t,e,n){"use strict";n.r(e);var r={props:["icon","alt","title","text","block"],name:"KeyFeatureCard"},o=n(31),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-3 col-md-6 mt-4 pt-2",class:{"col-lg-4 col-md-6 mt-4 pt-2":3===t.block}},[e("div",{staticClass:"card border-0 features feature-clean course-feature p-4 overflow-hidden shadow"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body p-0 mt-4"},[t.title?e("h3",{staticClass:"title h5 text-dark"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.text?e("p",{staticClass:"text-muted mt-2"},[t._v(t._s(t.text))]):t._e()])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"icons text-primary text-center"},[t("img",{staticClass:"d-block rounded h3 mb-0 w-25",attrs:{src:"/svg/icons/Delete%20User.svg",alt:""}})])}],!1,null,"7f1363c1",null);e.default=component.exports},355:function(t,e,n){"use strict";var r=n(10),o=n(4),l=n(3),c=n(122),d=n(18),f=n(12),v=n(150),m=n(37),h=n(74),_=n(149),C=n(2),w=n(59).f,y=n(36).f,k=n(14).f,x=n(356),I=n(357).trim,N="Number",E=o.Number,F=E.prototype,A=o.TypeError,S=l("".slice),T=l("".charCodeAt),L=function(t){var e=_(t,"number");return"bigint"==typeof e?e:O(e)},O=function(t){var e,n,r,o,l,c,d,code,f=_(t,"number");if(h(f))throw A("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=I(f),43===(e=T(f,0))||45===e){if(88===(n=T(f,2))||120===n)return NaN}else if(48===e){switch(T(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(c=(l=S(f,2)).length,d=0;d<c;d++)if((code=T(l,d))<48||code>o)return NaN;return parseInt(l,r)}return+f};if(c(N,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var j,D=function(t){var e=arguments.length<1?0:E(L(t)),n=this;return m(F,n)&&C((function(){x(n)}))?v(Object(e),n,D):e},K=r?w(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),M=0;K.length>M;M++)f(E,j=K[M])&&!f(D,j)&&k(D,j,y(E,j));D.prototype=F,F.constructor=D,d(o,N,D,{constructor:!0})}},356:function(t,e,n){var r=n(3);t.exports=r(1..valueOf)},357:function(t,e,n){var r=n(3),o=n(27),l=n(15),c=n(358),d=r("".replace),f="["+c+"]",v=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),h=function(t){return function(e){var n=l(o(e));return 1&t&&(n=d(n,v,"")),2&t&&(n=d(n,m,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},358:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},359:function(t,e,n){"use strict";n.r(e);n(355);var r=n(352),o={props:{features:{type:Array,required:!0},block:{type:Number,default:4}},name:"KeyFeatures",components:{KeyFeatureCard:r.default}},l=n(31),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("div",{staticClass:"row pt-5"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"section-title mb-4 pb-2"},[e("h2",{staticClass:"title mb-4"},[t._v("Key Features")]),t._v(" "),e("div",{staticClass:"text-light-dark mb-0 para-desc"},[t._t("default")],2)])])]),t._v(" "),e("div",{staticClass:"row align-items-center"},t._l(t.features,(function(n){return e("KeyFeatureCard",{key:t._f("slug")(n.title),attrs:{block:t.block,alt:n.title,title:n.title,icon:n.icon,text:n.text}})})),1)])}),[],!1,null,"dcbffcf6",null);e.default=component.exports},360:function(t,e){e.iot_ai_tech_list=["pytorch.svg","tensorflow.svg","python.svg","neo4j.svg","opencv.svg","pyspark.svg"],e.iot_m2m_tech_list=["openvpn.svg","ssh.svg","wireguard.svg"]},453:function(t,e,n){"use strict";n.r(e);var r=n(364),o=n(351),l=n(359),c=n(363),d=n(353),f=n(354),v=n(361),m=n(360),h={components:{TechList:c.default,FaqContainer:o.default,KeyFeatures:l.default,BlogGrid:d.default},head:Object(f.a)("IT Services, Digital Solutions, Technology Consulting : NEOFOX","Data Science, IoT, Software Development, Web Development","We merge imagination and technology to help brands grow in the age of digital transformation","Neofox,Jaipur,Rajasthan,IoT,AI,Machine Learning,IIoT,Industrial Solution,Solution,Smart","","",""),data:function(){return{techItems:m.iot_ai_tech_list,features:[{title:"Front End Layer",icon:"",text:"It utilizes three advances for an astonishing encounter for the clients. HTML for the site structure, CSS for making style and Javascript for making the rationale."},{title:"Back End Layer",icon:"",text:"The backend layer alludes to every one of the segments which work on the worker. A backend assumes the liability of all the business rationale and putting away items into the data sets."},{title:"Planning DevOps",icon:"",text:"Conveying applications, increasing or down the framework are dealt with by the designers. Full-stack designers are additionally answerable for making and dealing with the backend data sets."}],FAQ:v.iot_faq}},mounted:function(){Object(r.bootstrap)()}},_=n(31),component=Object(_.a)(h,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"position-relative bg-white"},[e("section",{staticClass:"bg-light w-100 h-100-center"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-md-6 col-12 order-md-1 order-2"},[e("div",{staticClass:"title-heading"},[e("NuxtLink",{staticClass:"badge rounded-pill text-light-dark",attrs:{to:{name:"web-development"}}},[t._v("\n              web development\n            ")]),t._v(" "),t._m(0),t._v(" "),e("p",{staticClass:"para-desc text-light-dark"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet\n              aspernatur, consequatur error eum ipsam itaque maiores nemo nihil non nostrum numquam obcaecati optio\n              placeat quam rem similique ut voluptate.\n            ")]),t._v(" "),e("div",{staticClass:"mt-4 pt-2"},[e("NuxtLink",{staticClass:"btn btn-primary me-2",attrs:{to:{name:"contact"}}},[t._v("Get Started")]),t._v(" "),e("a",{staticClass:"btn btn-outline-primary",attrs:{href:"#FAQS"}},[t._v("FAQ")])],1)],1)]),t._v(" "),t._m(1)])])]),t._v(" "),e("TechList",{attrs:{items:t.techItems}}),t._v(" "),e("div",{staticClass:"position-relative"},[e("div",{staticClass:"shape overflow-hidden text-white"},[e("svg",{attrs:{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"}})])])]),t._v(" "),e("KeyFeatures",{attrs:{features:t.features,block:3}},[e("p",{staticClass:"h3"},[t._v("\n      Layers Of Full Stack Web Application\n      "),e("span",{staticClass:"line text-primary fw-bold",attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Artificial intelligence"}},[t._v("Development")])]),t._v(" "),e("p",[t._v("\n      Any full-stack web application has three fundamental segments in particular - front end, back end layer and\n      DevOps. A portion of the web projects needn't bother with a front end since they just give an API.\n    ")])])],1)}),[function(){var t=this,e=t._self._c;return e("h1",{staticClass:"fw-bold mt-2 mb-3 line-10 text-uppercase"},[e("span",{staticClass:"line text-danger",attrs:{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Internet of Things"}},[t._v("FULL STACK")]),e("br"),t._v("WEB DEVELOPMENT")])},function(){var t=this._self._c;return t("div",{staticClass:"col-md-6 order-md-2 order-1"},[t("img",{staticClass:"img-fluid d-block mx-auto",attrs:{src:"/img/web/fullStack.svg",alt:"neofox artificial intelligent in iot"}})])}],!1,null,"f62bcb2a",null);e.default=component.exports}}]);