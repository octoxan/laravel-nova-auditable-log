/*! For license information please see tool.js.LICENSE.txt */
(()=>{"use strict";var e,t={467:(e,t,r)=>{const n=Vue;var o={key:0},a={class:"flex flex-row items-center justify-between"},i={class:"md:text-xl mb-3 text-xl font-normal"},c={class:"card"},l={"data-testid":"resource-table",class:"table w-full overflow-hidden rounded-lg shadow"},s={class:"bg-gray-50 dark:bg-gray-700"},u=(0,n.createElementVNode)("th",null,null,-1),d={class:"dark:text-gray-400 py-2 text-left text-gray-500"},p={class:"dark:text-gray-400 py-2 text-left text-gray-500"},f={class:"dark:text-gray-400 py-2 text-left text-gray-500"},h={class:"dark:text-gray-400 py-2 text-left text-gray-500"},y={class:"dark:text-gray-400 py-2 text-left text-gray-500"},g={key:0,class:"py-2 text-gray-500"},m={class:"group dark:bg-gray-800 bg-white"},v={class:"dark:border-gray-800 py-2 border-t border-gray-100"},w={class:"px-4"},b={key:0,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"save",class:"text-60 svg-inline--fa fa-save fa-w-14 h-4",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},x=[(0,n.createElementVNode)("path",{fill:"currentColor",d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},null,-1)],k={key:1,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"save",class:"text-60 svg-inline--fa fa-save fa-w-14 h-4",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},E=[(0,n.createElementVNode)("path",{fill:"currentColor",d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},null,-1)],N={key:2,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"trash-alt",class:"text-60 svg-inline--fa fa-trash-alt fa-w-14 h-4",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},_=[(0,n.createElementVNode)("path",{fill:"currentColor",d:"M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"},null,-1)],V={class:"dark:border-gray-800 py-2 border-t border-gray-100"},L={class:"dark:border-gray-800 py-2 border-t border-gray-100"},C={class:"dark:border-gray-800 py-2 border-t border-gray-100"},S={class:"dark:border-gray-800 py-2 border-t border-gray-100"},B={class:"my-2"},O={class:"bg-30 inline-block p-1 mr-2 font-bold rounded-sm"},D={class:"dark:border-gray-800 py-2 border-t border-gray-100"},A={class:"my-2"},j={class:"bg-30 inline-block p-1 mr-2 font-bold rounded-sm"},T={key:0,class:"dark:border-gray-800 py-2 text-center border-t border-gray-100"},I=["onClick"],F=(0,n.createElementVNode)("defs",{id:"defs3455"},null,-1),P=(0,n.createElementVNode)("g",{transform:"matrix(1,0,0,-1,113.89831,1262.6441)",id:"g3449"},[(0,n.createElementVNode)("path",{d:"M 1536,640 Q 1536,484 1475,342 1414,200 1311,97 1208,-6 1066,-67 924,-128 768,-128 589,-128 431.5,-52 274,24 165.5,161 57,298 18,473 q -3,14 7,27 9,12 25,12 h 199 q 23,0 30,-23 Q 329,327 464,227.5 599,128 768,128 872,128 966.5,168.5 1061,209 1130,278 q 69,69 109.5,163.5 40.5,94.5 40.5,198.5 0,104 -40.5,198.5 Q 1199,933 1130,1002 1061,1071 966.5,1111.5 872,1152 768,1152 670,1152 580,1116.5 490,1081 420,1015 L 557,877 q 31,-30 14,-69 -17,-40 -59,-40 H 64 Q 38,768 19,787 0,806 0,832 v 448 q 0,42 40,59 39,17 69,-14 l 130,-129 q 107,101 244.5,156.5 137.5,55.5 284.5,55.5 156,0 298,-61 142,-61 245,-164 103,-103 164,-245 61,-142 61,-298 z",id:"path3451","inkscape:connector-curvature":"0",style:{fill:"currentColor"}})],-1),M={class:"bg-20 rounded-b","per-page":"5","resource-count-label":"1-3 of 3","current-resource-count":"3","all-matching-resource-count":"3"},z={class:"flex items-center justify-between"},G=["disabled"],R={class:"text-80 px-4 text-sm"},H=["disabled"];var q={class:"table w-full mt-4 overflow-hidden rounded-lg"},$={class:"bg-gray-50 dark:bg-gray-800"},Q={class:"whitespace-nowrap dark:text-gray-400 text-xxs px-2 py-2 tracking-wide text-left text-gray-500 uppercase",style:{"max-width":"20px"}},Y={class:"whitespace-nowrap dark:text-gray-400 text-xxs px-2 py-2 tracking-wide text-left text-gray-500 uppercase"},U={class:"whitespace-nowrap dark:text-gray-400 text-xxs px-2 py-2 tracking-wide text-left text-gray-500 uppercase"},Z={class:"whitespace-nowrap dark:text-gray-400 text-xxs px-2 py-2 tracking-wide text-left text-gray-500 uppercase"},J={class:"dark:divide-gray-700 divide-y divide-gray-100"},K={class:"group"},W={style:{"max-width":"20px"},class:"whitespace-nowrap dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900 px-2 py-2"},X=["value"],ee={class:"whitespace-nowrap dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900 px-2 py-2"},te={class:"whitespace-nowrap dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900 px-2 py-2"},re={class:"whitespace-nowrap dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900 px-2 py-2"},ne={key:0},oe={colspan:"4",class:"whitespace-nowrap dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900 px-2 py-2 text-center"},ae={class:"ml-auto"};function ie(e){return ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ie(e)}function ce(){ce=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof m?t:m,i=Object.create(a.prototype),c=new B(n||[]);return o(i,"_invoke",{value:V(e,r,c)}),i}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var p="suspendedStart",f="suspendedYield",h="executing",y="completed",g={};function m(){}function v(){}function w(){}var b={};s(b,i,(function(){return this}));var x=Object.getPrototypeOf,k=x&&x(x(O([])));k&&k!==r&&n.call(k,i)&&(b=k);var E=w.prototype=m.prototype=Object.create(b);function N(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function r(o,a,i,c){var l=d(e[o],e,a);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==ie(u)&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(u).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}var a;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}})}function V(t,r,n){var o=p;return function(a,i){if(o===h)throw new Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var l=L(c,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=h;var s=d(t,r,n);if("normal"===s.type){if(o=n.done?y:f,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function L(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=d(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function B(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function O(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(ie(t)+" is not iterable")}return v.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:v,configurable:!0}),v.displayName=s(w,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,s(e,l,"GeneratorFunction")),e.prototype=Object.create(E),e},t.awrap=function(e){return{__await:e}},N(_.prototype),s(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new _(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},N(E),s(E,l,"Generator"),s(E,i,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=O,B.prototype={constructor:B,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}function le(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}const se={props:["fields","audit","resourceName","resourceId"],data:function(){return{restoreIds:[],selectAll:!1}},methods:{handleClose:function(){this.$emit("close")},handleConfirm:function(){var e,t=this;return(e=ce().mark((function e(){var r,n;return ce().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.restoreIds.length>0)){e.next=6;break}return e.next=3,Nova.request().post("/nova-vendor/auditable-log/audits/".concat(t.resourceName,"/").concat(t.resourceId,"/").concat(t.audit.id),{restore:t.restoreIds});case 3:r=e.sent,n=t.restoreIds.map((function(e){return{key:e,value:r.data.record[e]}})),t.$emit("restored",n);case 6:t.$emit("close");case 7:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){le(a,n,o,i,c,"next",e)}function c(e){le(a,n,o,i,c,"throw",e)}i(void 0)}))})()},toggleSelectAll:function(){this.allSelected?this.restoreIds=[]:this.restoreIds=this.comparison.map((function(e){return e.key}))}},computed:{allSelected:function(){return this.comparison.length===this.restoreIds.length},comparison:function(){var e=this;return Object.keys(this.audit.new_values).map((function(t){return void 0===e.fields[t]||e.fields[t].value==e.audit.new_values[t]?null:{key:t,label:e.fields[t].label,current:e.fields[t].value,restore:e.audit.new_values[t]}})).filter((function(e){return null!==e}))}}};var ue=r(744);function de(e){return de="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},de(e)}function pe(){pe=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof m?t:m,i=Object.create(a.prototype),c=new B(n||[]);return o(i,"_invoke",{value:V(e,r,c)}),i}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var p="suspendedStart",f="suspendedYield",h="executing",y="completed",g={};function m(){}function v(){}function w(){}var b={};s(b,i,(function(){return this}));var x=Object.getPrototypeOf,k=x&&x(x(O([])));k&&k!==r&&n.call(k,i)&&(b=k);var E=w.prototype=m.prototype=Object.create(b);function N(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function r(o,a,i,c){var l=d(e[o],e,a);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==de(u)&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(u).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}var a;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}})}function V(t,r,n){var o=p;return function(a,i){if(o===h)throw new Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var l=L(c,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=h;var s=d(t,r,n);if("normal"===s.type){if(o=n.done?y:f,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function L(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=d(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function B(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function O(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(de(t)+" is not iterable")}return v.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:v,configurable:!0}),v.displayName=s(w,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,s(e,l,"GeneratorFunction")),e.prototype=Object.create(E),e},t.awrap=function(e){return{__await:e}},N(_.prototype),s(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new _(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},N(E),s(E,l,"Generator"),s(E,i,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=O,B.prototype={constructor:B,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}function fe(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}const he={props:["resourceName","resourceId","field"],components:{RestoreAuditModal:(0,ue.Z)(se,[["render",function(e,t,r,o,a,i){var c=(0,n.resolveComponent)("ModalHeader"),l=(0,n.resolveComponent)("checkbox"),s=(0,n.resolveComponent)("ModalContent"),u=(0,n.resolveComponent)("LinkButton"),d=(0,n.resolveComponent)("LoadingButton"),p=(0,n.resolveComponent)("ModalFooter"),f=(0,n.resolveComponent)("Modal");return(0,n.openBlock)(),(0,n.createBlock)(f,{onModalClose:i.handleClose,show:!0,role:"alertdialog",size:"5xl"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("form",{onSubmit:t[1]||(t[1]=(0,n.withModifiers)((function(){return i.handleConfirm&&i.handleConfirm.apply(i,arguments)}),["prevent"])),"slot-scope":"props",class:"dark:bg-gray-800 overflow-hidden bg-white rounded-lg shadow"},[(0,n.createVNode)(c,null,{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.__("Restore audit")),1)]})),_:1}),(0,n.createVNode)(s,null,{default:(0,n.withCtx)((function(){var r;return[(0,n.createElementVNode)("table",q,[(0,n.createElementVNode)("thead",$,[(0,n.createElementVNode)("th",Q,[(null===(r=i.comparison)||void 0===r?void 0:r.length)>0?((0,n.openBlock)(),(0,n.createBlock)(l,{key:0,onInput:i.toggleSelectAll,checked:i.allSelected},null,8,["onInput","checked"])):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("th",Y,(0,n.toDisplayString)(e.__("Field")),1),(0,n.createElementVNode)("th",U,(0,n.toDisplayString)(e.__("Current")),1),(0,n.createElementVNode)("th",Z,(0,n.toDisplayString)(e.__("Restore to")),1)]),(0,n.createElementVNode)("tbody",J,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(i.comparison,(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("tr",K,[(0,n.createElementVNode)("td",W,[(0,n.withDirectives)((0,n.createElementVNode)("input",{type:"checkbox",class:"checkbox","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.restoreIds=e}),value:e.key},null,8,X),[[n.vModelCheckbox,a.restoreIds]])]),(0,n.createElementVNode)("td",ee,(0,n.toDisplayString)(e.label),1),(0,n.createElementVNode)("td",te,(0,n.toDisplayString)(e.current),1),(0,n.createElementVNode)("td",re,(0,n.toDisplayString)(e.restore),1)])})),256)),0==i.comparison.length?((0,n.openBlock)(),(0,n.createElementBlock)("tr",ne,[(0,n.createElementVNode)("td",oe,(0,n.toDisplayString)(e.__("There are no changes to restore. This may be from trying to restore from a restore.")),1)])):(0,n.createCommentVNode)("",!0)])])]})),_:1}),(0,n.createVNode)(p,null,{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",ae,[(0,n.createVNode)(u,{type:"button","data-testid":"cancel-button",dusk:"cancel-delete-button",onClick:(0,n.withModifiers)(i.handleClose,["prevent"]),class:"mr-3"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.__("Cancel")),1)]})),_:1},8,["onClick"]),(0,n.createVNode)(d,{ref:"confirmButton","data-testid":"confirm-button",dusk:"confirm-delete-button",processing:e.working,disabled:e.working,component:"DangerButton",type:"submit"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.__("Restore")),1)]})),_:1},8,["processing","disabled"])])]})),_:1})],32)]})),_:1},8,["onModalClose"])}]])},data:function(){return{audits:[],displayAudits:!1,pagination:{},restore:null,parentFields:[],canRestore:!1}},mounted:function(){var e,t;!0===this.displayAudits&&this.fetchAudits(),this.parentFields=(e=this.$parent.$parent.$.vnode.component.data.panels[0].fields,t={},e.filter((function(e){return""!==e.attribute})).forEach((function(e){if(""!==e.attribute){var r=e.attribute,n=e.value,o=e.name;t[r]={value:n,label:o}}})),t.length!==e.length&&e.filter((function(e){return""===e.attribute&&void 0!==e.dependencies&&e.dependencies.length===e.dependencies.filter((function(e){return e.satisfied})).length})).forEach((function(e){e.fields.forEach((function(e){var r=e.attribute,n=e.value,o=e.name;t[r]={value:n,label:o}}))})),t)},methods:{showAndFetch:function(){this.displayAudits=!0,this.fetchAudits()},close:function(){this.displayAudits=!1},fetchAudits:function(){var e,t=arguments,r=this;return(e=pe().mark((function e(){var n,o,a;return pe().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=t.length>0&&void 0!==t[0]?t[0]:null)||(n="/nova-vendor/auditable-log/audits/".concat(r.resourceName,"/").concat(r.resourceId)),e.prev=2,e.next=5,Nova.request().get(n);case 5:o=e.sent,a=o.data,r.audits=a.audits.data,r.pagination=a.audits,r.canRestore=!1,e.next=14;break;case 12:e.prev=12,e.t0=e.catch(2);case 14:case"end":return e.stop()}}),e,null,[[2,12]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){fe(a,n,o,i,c,"next",e)}function c(e){fe(a,n,o,i,c,"throw",e)}i(void 0)}))})()},formatTimestamp:function(e){if(e){return new Date(e).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return""},formatData:function(e){var t=[];for(var r in e)e.hasOwnProperty(r)&&t.push({name:r,value:e[r]});return t},showRestoreAudit:function(e){this.restore=e},restored:function(e){var t=this;e.forEach((function(e){t.parentFields[e.key].value=e.value})),this.fetchAudits()}}},ye=(0,ue.Z)(he,[["render",function(e,t,r,q,$,Q){var Y=(0,n.resolveComponent)("DefaultButton"),U=(0,n.resolveComponent)("sodipodi:namedview"),Z=(0,n.resolveComponent)("restore-audit-modal"),J=(0,n.resolveComponent)("portal");return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[$.displayAudits?((0,n.openBlock)(),(0,n.createElementBlock)("div",o,[(0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("h2",i,(0,n.toDisplayString)(e.__("Audit Log")),1),$.displayAudits?((0,n.openBlock)(),(0,n.createBlock)(Y,{key:0,class:"btn btn-default btn-primary mb-2 ml-4",onClick:(0,n.withModifiers)(Q.close,["prevent"])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.__("Close Audit Log")),1)]})),_:1},8,["onClick"])):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("div",c,[(0,n.createElementVNode)("table",l,[(0,n.createElementVNode)("thead",s,[(0,n.createElementVNode)("tr",null,[u,(0,n.createElementVNode)("th",d,[(0,n.createElementVNode)("span",null,(0,n.toDisplayString)(e.__("User")),1)]),(0,n.createElementVNode)("th",p,[(0,n.createElementVNode)("span",null,(0,n.toDisplayString)(e.__("Event")),1)]),(0,n.createElementVNode)("th",f,[(0,n.createElementVNode)("span",null,(0,n.toDisplayString)(e.__("Date/Time")),1)]),(0,n.createElementVNode)("th",h,[(0,n.createElementVNode)("span",null,(0,n.toDisplayString)(e.__("Old Values")),1)]),(0,n.createElementVNode)("th",y,[(0,n.createElementVNode)("span",null,(0,n.toDisplayString)(e.__("New Values")),1)]),$.canRestore?((0,n.openBlock)(),(0,n.createElementBlock)("th",g)):(0,n.createCommentVNode)("",!0)])]),(0,n.createElementVNode)("tbody",null,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)($.audits,(function(t){return(0,n.openBlock)(),(0,n.createElementBlock)("tr",m,[(0,n.createElementVNode)("td",v,[(0,n.createElementVNode)("div",w,["created"===t.event?((0,n.openBlock)(),(0,n.createElementBlock)("svg",b,x)):(0,n.createCommentVNode)("",!0),"updated"===t.event?((0,n.openBlock)(),(0,n.createElementBlock)("svg",k,E)):(0,n.createCommentVNode)("",!0),"deleted"===t.event?((0,n.openBlock)(),(0,n.createElementBlock)("svg",N,_)):(0,n.createCommentVNode)("",!0)])]),(0,n.createElementVNode)("td",V,(0,n.toDisplayString)(t.user?t.user.name:e.__("console")),1),(0,n.createElementVNode)("td",L,(0,n.toDisplayString)(t.event),1),(0,n.createElementVNode)("td",C,(0,n.toDisplayString)(Q.formatTimestamp(t.created_at)),1),(0,n.createElementVNode)("td",S,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(Q.formatData(t.old_values),(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("div",B,[(0,n.createElementVNode)("span",O,(0,n.toDisplayString)(e.name),1),(0,n.createTextVNode)(" "+(0,n.toDisplayString)(e.value),1)])})),256))]),(0,n.createElementVNode)("td",D,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(Q.formatData(t.new_values),(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("div",A,[(0,n.createElementVNode)("span",j,(0,n.toDisplayString)(e.name),1),(0,n.createTextVNode)(" "+(0,n.toDisplayString)(e.value),1)])})),256))]),$.canRestore?((0,n.openBlock)(),(0,n.createElementBlock)("td",T,[((0,n.openBlock)(),(0,n.createElementBlock)("svg",{onClick:function(e){return Q.showRestoreAudit(t)},style:{"max-width":"20px"},"xmlns:dc":"http://purl.org/dc/elements/1.1/","xmlns:cc":"http://creativecommons.org/ns#","xmlns:rdf":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","xmlns:svg":"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg","xmlns:sodipodi":"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd","xmlns:inkscape":"http://www.inkscape.org/namespaces/inkscape",viewBox:"0 -256 1792 1792",id:"svg3447",version:"1.1","inkscape:version":"0.48.3.1 r9886",width:"100%",height:"100%","sodipodi:docname":"undo_font_awesome.svg"},[F,(0,n.createVNode)(U,{pagecolor:"#ffffff",bordercolor:"#666666",borderopacity:"1",objecttolerance:"10",gridtolerance:"10",guidetolerance:"10","inkscape:pageopacity":"0","inkscape:pageshadow":"2","inkscape:window-width":"640","inkscape:window-height":"480",id:"namedview3453",showgrid:"false","inkscape:zoom":"0.13169643","inkscape:cx":"896","inkscape:cy":"896","inkscape:window-x":"0","inkscape:window-y":"25","inkscape:window-maximized":"0","inkscape:current-layer":"svg3447"}),P],8,I))])):(0,n.createCommentVNode)("",!0)])})),256))])]),(0,n.createElementVNode)("div",M,[(0,n.createElementVNode)("nav",z,[(0,n.createElementVNode)("button",{disabled:null===$.pagination.prev_page_url,rel:"prev",dusk:"previous",class:(0,n.normalizeClass)(["btn btn-link text-80 px-4 py-3",{"opacity-50":null===$.pagination.prev_page_url,"text-primary":null!==$.pagination.prev_page_url}]),onClick:t[0]||(t[0]=function(e){return Q.fetchAudits($.pagination.prev_page_url)})},(0,n.toDisplayString)(e.__("Previous")),11,G),(0,n.createElementVNode)("span",R,(0,n.toDisplayString)($.pagination.from)+"-"+(0,n.toDisplayString)($.pagination.to)+" of "+(0,n.toDisplayString)($.pagination.total),1),(0,n.createElementVNode)("button",{disabled:null===$.pagination.next_page_url,rel:"next",dusk:"next",class:(0,n.normalizeClass)([{"opacity-50":null===$.pagination.next_page_url,"text-primary":null!==$.pagination.next_page_url},"btn btn-link text-80 px-4 py-3"]),onClick:t[1]||(t[1]=function(e){return Q.fetchAudits($.pagination.next_page_url)})},(0,n.toDisplayString)(e.__("Next")),11,H)])])])])):(0,n.createCommentVNode)("",!0),!1===$.displayAudits?((0,n.openBlock)(),(0,n.createBlock)(Y,{key:1,onClick:(0,n.withModifiers)(Q.showAndFetch,["prevent"])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.__("View Audit Log")),1)]})),_:1},8,["onClick"])):(0,n.createCommentVNode)("",!0),null!==$.restore?((0,n.openBlock)(),(0,n.createBlock)(J,{key:2,to:"modals"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(n.Transition,{name:"fade"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(Z,{fields:$.parentFields,resourceName:r.resourceName,resourceId:r.resourceId,audit:$.restore,onClose:t[2]||(t[2]=function(e){return $.restore=null}),onRestored:Q.restored},null,8,["fields","resourceName","resourceId","audit","onRestored"])]})),_:1})]})),_:1})):(0,n.createCommentVNode)("",!0)])}]]);Nova.booting((function(e,t,r){e.component("auditable-log",ye)}))},288:()=>{},744:(e,t)=>{t.Z=(e,t)=>{const r=e.__vccOpts||e;for(const[e,n]of t)r[e]=n;return r}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,o,a]=e[u],c=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(c=!1,a<i&&(i=a));if(c){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={103:0,990:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,c,l]=r,s=0;if(i.some((t=>0!==e[t]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(l)var u=l(n)}for(t&&t(r);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self.webpackChunkvendor_auditable_log=self.webpackChunkvendor_auditable_log||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.O(void 0,[990],(()=>n(467)));var o=n.O(void 0,[990],(()=>n(288)));o=n.O(o)})();