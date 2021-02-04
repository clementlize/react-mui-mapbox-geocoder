"use strict";var e=require("react"),t=require("lodash.omitby"),r=require("lodash.isnil"),n=require("react-autosuggest"),o=require("@material-ui/core"),a=require("@material-ui/core/utils"),i=require("@material-ui/core/styles"),s=require("clsx"),l=require("react-debounce-render"),u=require("color-alpha");function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var f=c(e),p=c(t),h=c(r),d=c(n),b=c(a),g=c(s),v=c(l),y=c(u);function m(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function w(e,t){return e(t={exports:{}},t.exports),t.exports}var x=w((function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}e.exports=t}));var O=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e};var E=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o};var j=function(e,t){if(null==e)return{};var r,n,o=E(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o};var S=function(e){if(Array.isArray(e))return e};var k=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw a}}return r}};var P=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n};var C=function(e,t){if(e){if("string"==typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?P(e,t):void 0}};var L=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")};var _=function(e,t){return S(e)||k(e,t)||C(e,t)||L()},I=w((function(e){var t=function(e){var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof f?t:f,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=w(i,r);if(s){if(s===c)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===c)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var c={};function f(){}function p(){}function h(){}var d={};d[o]=function(){return this};var b=Object.getPrototypeOf,g=b&&b(b(j([])));g&&g!==t&&r.call(g,o)&&(d=g);var v=h.prototype=f.prototype=Object.create(d);function y(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function m(e,t){var n;this._invoke=function(o,a){function i(){return new t((function(n,i){!function n(o,a,i,s){var l=u(e[o],e,a);if("throw"!==l.type){var c=l.arg,f=c.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,s)}),(function(e){n("throw",e,i,s)})):t.resolve(f).then((function(e){c.value=e,i(c)}),(function(e){return n("throw",e,i,s)}))}s(l.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return c;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,c;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,c):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,c)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=v.constructor=h,h.constructor=p,p.displayName=s(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,s(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(m.prototype),m.prototype[a]=function(){return this},e.AsyncIterator=m,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new m(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(v),s(v,i,"Generator"),v[o]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,c):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),c},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),c}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),c}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}}));function A(e,t,r,n,o,a,i){try{var s=e[a](i),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,o)}var F=function(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){A(a,n,o,i,s,"next",e)}function s(e){A(a,n,o,i,s,"throw",e)}i(void 0)}))}},T=function(){var e=F(I.mark((function e(t,r,n,o,a,i,s,l,u,c,f,d){var b,g,v,y,m,w;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b=new Date,e.prev=1,g="".concat(t,"/geocoding/v5/").concat(r,"/").concat(o,".json"),v=p.default({access_token:n,proximity:i&&2===Object.keys(i).length?"".concat(i.longitude,",").concat(i.latitude):null,bbox:l&&l.length>0?l.join(","):null,types:u,country:s,limit:c,autocomplete:f,language:d},h.default),y="".concat(g,"?").concat(G(v)),e.next=7,fetch(y);case 7:return m=e.sent,e.next=10,m.json();case 10:return w=e.sent,a(null,w,b),e.abrupt("return",{err:null,res:m,searchTime:b});case 15:return e.prev=15,e.t0=e.catch(1),a(e.t0,null,b),e.abrupt("return",{err:e.t0,res:null,searchTime:b});case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t,r,n,o,a,i,s,l,u,c,f,p){return e.apply(this,arguments)}}();function G(e){return Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&")}var N=w((function(e){
// @license MIT
!function(t,r){e.exports?e.exports=r():this.Diacritics=r()}(0,(function(){for(var e={map:{}},t=[{base:" ",letters:" "},{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"Th",letters:"Þ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"ff",letters:"ﬀ"},{base:"fi",letters:"ﬁ"},{base:"fl",letters:"ﬂ"},{base:"ffi",letters:"ﬃ"},{base:"ffl",letters:"ﬄ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nñnⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥлԉ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"߀oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oe",letters:"Œœ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"ss",letters:"ß"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"th",letters:"þ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],r=0,n=t.length;r<n;r++)for(var o=t[r].letters.split(""),a=0,i=o.length;a<i;a++)e.map[o[a]]=t[r].base;return e.clean=function(t){if(!t||!t.length||t.length<1)return"";for(var r,n="",o=t.split(""),a=0,i=o.length;a<i;a++)n+=(r=o[a])in e.map?e.map[r]:r;return n},e}))})).clean,q=/[.*+?^${}()|[\]\\]/g,D=/[a-z0-9_]/i,M=/\s+/;var R=function(e,t){return e=N(e),(t=N(t)).trim().split(M).filter((function(e){return e.length>0})).reduce((function(t,r){var n=r.length,o=D.test(r[0])?"\\b":"",a=new RegExp(o+r.replace(q,"\\$&"),"i"),i=e.search(a);return i>-1&&(t.push([i,i+n]),e=e.slice(0,i)+new Array(n+1).join(" ")+e.slice(i+n)),t}),[]).sort((function(e,t){return e[0]-t[0]}))};var z=w((function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}}}));m(z);var U=w((function(e){function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(r)}e.exports=t})),B=w((function(e){function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==U(e)&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}}));m(B);var W=w((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b.default.createSvgIcon}})}));m(W);var V=m(w((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=B(f.default),n=(0,z(W).default)(r.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.default=n}))),Y=m(w((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=B(f.default),n=(0,z(W).default)(r.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");t.default=n}))),H=v.default((function(e){var t=e.show,r=void 0!==t&&t;return f.default.createElement(o.Fade,{in:r},f.default.createElement(o.LinearProgress,{style:{position:"absolute",width:"100%"}}))}),100);function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $=i.makeStyles((function(e){return i.createStyles({container:{flexGrow:1,position:"relative"},suggestionsContainerOpen:{position:"absolute",zIndex:1,marginTop:e.spacing(1),left:0,right:0},suggestion:{display:"block",marginBottom:0},suggestionsList:{margin:0,padding:0,listStyleType:"none"},inputContainer:{paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingRight:e.spacing(1),paddingLeft:e.spacing(2),backgroundColor:y.default(e.palette.background.paper,.9),overflow:"hidden","&:hover,&:active,&.inputContainerFocused":{backgroundColor:e.palette.background.paper},minHeight:"64px",display:"flex",flexDirection:"column",justifyContent:"center"},grow:{flexGrow:1},shrink:{flexShrink:1},noGrow:{flexGrow:0},noShrink:{flexShrink:0}})}));module.exports=function(t){var r=t.endpoint,n=void 0===r?"https://api.mapbox.com":r,a=t.inputPlaceholder,i=void 0===a?"Search":a,s=t.showLoader,l=void 0===s||s,u=t.source,c=void 0===u?"mapbox.places":u,p=t.onSuggest,h=void 0===p?function(){}:p,b=t.focusOnMount,v=void 0!==b&&b,y=t.showInputContainer,m=void 0===y||y,w=t.inputValue,O=void 0===w?"":w,E=t.proximity,S=t.country,k=t.bbox,P=t.types,C=t.limit,L=t.autocomplete,I=t.language,A=t.suggestionsPaperProps,F=t.onSelect,G=t.accessToken,N=t.onInputFocus,q=t.onInputBlur,D=t.inputClasses,M=t.inputTextFieldProps,z=t.disableUnderline,U=t.inputPaperProps,B=e.useState([]),W=_(B,2),J=W[0],K=W[1],Q=e.useState(!1),X=_(Q,2),ee=X[0],te=X[1],re=e.useState(new Date),ne=_(re,2),oe=ne[0],ae=ne[1],ie=e.useState(O),se=_(ie,2),le=se[0],ue=se[1],ce=e.useState(!1),fe=_(ce,2),pe=fe[0],he=fe[1],de=$(),be=e.useRef(null),ge=function(t){var r=e.useRef();return e.useEffect((function(){r.current=t}),[t]),r.current}(le),ve=e.useCallback((function(){var e=(be.current||{}).input,t=void 0===e?null:e;t&&t.focus()}),[]);e.useEffect((function(){ue(O)}),[O]),e.useEffect((function(){v&&ve()}),[v,ve]),e.useEffect((function(){h&&h(J)}),[J,h]);var ye=e.useCallback((function(){ue(""),ve()}),[ve]),me=e.useCallback((function(e){console.log(e),e&&(e.stopPropagation&&e.stopPropagation(),e.nativeEvent&&e.nativeEvent.stopImmediatePropagation&&e.nativeEvent.stopImmediatePropagation())}),[]),we=e.useCallback((function(e){var t=e.ref,r=e.inputClasses,n=j(e,["ref","inputClasses"]),a=(null!=U?U:{}).className,i=f.default.createElement(o.TextField,x({onDoubleClick:me,fullWidth:!0,InputProps:Z({disableUnderline:z,inputRef:t,startAdornment:f.default.createElement(o.InputAdornment,{position:"start"},f.default.createElement(V,{color:"action"})),classes:r},n)},M));return m?f.default.createElement(f.default.Fragment,null,f.default.createElement(H,{show:ee&&l}),f.default.createElement(o.Paper,x({square:!1,elevation:1,className:g.default([de.inputContainer,{inputContainerFocused:pe,className:Boolean(a)}]),onDoubleClick:me},U),f.default.createElement(o.Grid,{container:!0,alignItems:"center",spacing:8,wrap:"nowrap"},f.default.createElement(o.Grid,{item:!0,xs:!0,className:g.default(de.grow,de.noShrink)},i),f.default.createElement(o.Fade,{in:le.length>0,unmountOnExit:!0,mountOnEnter:!0},f.default.createElement(o.Grid,{item:!0,xs:!0,className:g.default(de.shrink,de.noGrow)},f.default.createElement(o.IconButton,{"aria-label":"Clear Search Input",onClick:ye},f.default.createElement(Y,null))))))):f.default.createElement(f.default.Fragment,null,i)}),[me,z,M,m,ee,l,de,pe,U,le.length,ye]),xe=e.useCallback((function(e){he(!0),N&&N(e)}),[N]),Oe=e.useCallback((function(e){he(!1),q&&q(e)}),[q]),Ee=e.useCallback((function(e){var t=e.containerProps,r=e.children;return f.default.createElement(o.Paper,x({},t,{square:!1,elevation:4},A),r)}),[A]),je=e.useCallback((function(e,t,r){!e&&t&&t.features&&oe<=r&&(ae(r),K(t.features.map((function(e){return{feature:e,label:e.place_name}})).filter((function(e){return e.label}))),te(!1))}),[oe]),Se=e.useCallback((function(e){var t=e.value;te(!0),ge===t?te(!1):""===t?(K([]),te(!1)):T(n,c,G,t,je,E,S,k,P,C,L,I)}),[k,S,n,C,I,L,c,E,ge,je,P,G]),ke=e.useCallback((function(e,t){var r=t.suggestion;return F&&F(r.feature),!1}),[F]),Pe=e.useCallback((function(){K([])}),[]),Ce=e.useCallback((function(e,t){var r=t.newValue;ue(r)}),[]),Le=e.useCallback((function(e,t){var r=t.query,n=t.isHighlighted,a=R(e.label,r),i=function(e,t){var r=[];return 0===t.length?r.push({text:e,highlight:!1}):t[0][0]>0&&r.push({text:e.slice(0,t[0][0]),highlight:!1}),t.forEach((function(n,o){var a=n[0],i=n[1];r.push({text:e.slice(a,i),highlight:!0}),o===t.length-1?i<e.length&&r.push({text:e.slice(i,e.length),highlight:!1}):i<t[o+1][0]&&r.push({text:e.slice(i,t[o+1][0]),highlight:!1})})),r}(e.label,a);return f.default.createElement(o.MenuItem,{selected:n,component:"div"},f.default.createElement(o.Typography,{noWrap:!0,variant:"subtitle1"},i.map((function(e,t){return e.highlight?f.default.createElement("span",{key:String(t),style:{fontWeight:500}},e.text):f.default.createElement("strong",{key:String(t),style:{fontWeight:300}},e.text)}))))}),[]),_e=e.useCallback((function(e){return e.label}),[]);return G?f.default.createElement(d.default,{ref:be,theme:{container:de.container,suggestionsContainerOpen:de.suggestionsContainerOpen,suggestionsList:de.suggestionsList,suggestion:de.suggestion},renderInputComponent:we,suggestions:J,onSuggestionsFetchRequested:Se,onSuggestionsClearRequested:Pe,onSuggestionSelected:ke,renderSuggestionsContainer:Ee,getSuggestionValue:_e,renderSuggestion:Le,inputProps:{placeholder:i,value:le,onChange:Ce,onFocus:xe,onBlur:Oe,className:D}}):null};
//# sourceMappingURL=index.js.map
