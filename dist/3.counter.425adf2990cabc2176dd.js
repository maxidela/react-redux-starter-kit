webpackJsonp([3],{22:72,58:[753,87,19,131,26,37,22,104,59,69,10],69:[756,37,71,108],89:[770,109,58],99:function(e,t,n){e.exports={"default":n(101),__esModule:!0}},101:function(e,t,n){n(112);var u=n(12).Object;e.exports=function(e,t,n){return u.defineProperty(e,t,n)}},102:function(e,t){e.exports=function(){}},104:[752,88,70,59,26,10],105:260,107:[758,57,32,56,129],109:[760,110,103],111:[764,102,105,22,50,58],112:[766,19,44,38],113:function(e,t,n){n(111);for(var u=n(24),o=n(26),r=n(22),c=n(10)("toStringTag"),i=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],f=0;5>f;f++){var a=i[f],l=u[a],d=l&&l.prototype;d&&!d[c]&&o(d,c,a),r[a]=r.Array}},128:[747,86,10],172:[750,22,10],173:[751,32],174:[754,10],181:[762,128,10,22,12],240:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}function o(){var e=arguments.length<=0||void 0===arguments[0]?1:arguments[0];return{type:l,payload:e}}function r(){var e=arguments.length<=0||void 0===arguments[0]?_:arguments[0],t=arguments[1],n=s[t.type];return n?n(e,t):e}Object.defineProperty(t,"__esModule",{value:!0}),t.actions=t.doubleAsync=t.COUNTER_INCREMENT=void 0;var c=n(364),i=u(c),f=n(362),a=u(f);t.increment=o,t["default"]=r;var l=t.COUNTER_INCREMENT="COUNTER_INCREMENT",d=t.doubleAsync=function(){return function(e,t){return new a["default"](function(n){setTimeout(function(){e(o(t().counter)),n()},200)})}},s=(t.actions={increment:o,doubleAsync:d},(0,i["default"])({},l,function(e,t){return e+t.payload})),_=0},247:[761,56,378,242,170,24,86],331:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Counter=void 0;var o=n(18),r=u(o),c=n(4),i=(u(c),n(579)),f=u(i),a=t.Counter=function(e){return(0,r["default"])("div",{},void 0,(0,r["default"])("h2",{className:f["default"].counterContainer},void 0,"Counter:"," ",(0,r["default"])("span",{className:f["default"]["counter--green"]},void 0,e.counter)),(0,r["default"])("button",{className:"btn btn-default",onClick:e.increment},void 0,"Increment")," ",(0,r["default"])("button",{className:"btn btn-default",onClick:e.doubleAsync},void 0,"Double (Async)"))};t["default"]=a},332:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(331),r=u(o);t["default"]=r["default"]},347:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(117),r=n(240),c=n(332),i=u(c),f={increment:function(){return(0,r.increment)(1)},doubleAsync:r.doubleAsync},a=function(e){return{counter:e.counter}};t["default"]=(0,o.connect)(a,f)(i["default"])},362:function(e,t,n){e.exports={"default":n(370),__esModule:!0}},364:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var o=n(99),r=u(o);t["default"]=function(e,t,n){return t in e?(0,r["default"])(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},370:function(e,t,n){n(248),n(89),n(113),n(392),e.exports=n(12).Promise},373:60,377:[749,56,173,172,32,178,181],378:138,382:[755,24,247,86],386:function(e,t,n){var u=n(26);e.exports=function(e,t,n){for(var o in t)n&&e[o]?e[o]=t[o]:u(e,o,t[o]);return e}},387:function(e,t,n){"use strict";var u=n(24),o=n(12),r=n(38),c=n(44),i=n(10)("species");e.exports=function(e){var t="function"==typeof o[e]?o[e]:u[e];c&&t&&!t[i]&&r.f(t,i,{configurable:!0,get:function(){return this}})}},388:[759,32,169,10],392:[769,87,24,56,128,19,57,32,169,373,377,107,388,247,382,10,386,59,387,12,174],579:function(e,t){e.exports={counter:"Counter__counter___8Lvk1","counter--green":"Counter__counter--green___30k-8 Counter__counter___8Lvk1",counterContainer:"Counter__counterContainer___1Ev3K"}}});