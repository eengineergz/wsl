/*
 * Wallaby.js - v1.0.1001
 * https://wallabyjs.com
 * Copyright (c) 2014-2020 Wallaby.js - All Rights Reserved.
 *
 * This source code file is a part of Wallaby.js and is a proprietary (closed source) software.

 * IMPORTANT:
 * Wallaby.js is a tool made by software developers for software developers with passion and love for what we do.
 * Pirating the tool is not only illegal and just morally wrong,
 * it is also unfair to other fellow programmers who are using it legally,
 * and very harmful for the tool and its future.
 */
!function(e){function t(){var e,t;b.autorun=!0,b.previousModule&&p("moduleDone",{name:b.previousModule.name,tests:b.previousModule.tests,failed:b.moduleStats.bad,passed:b.moduleStats.all-b.moduleStats.bad,total:b.moduleStats.all,runtime:F()-b.moduleStats.started}),delete b.previousModule,e=F()-b.started,t=b.stats.all-b.stats.bad,p("done",{failed:b.stats.bad,passed:t,total:b.stats.all,runtime:e})}function i(e,t){t=void 0===t?4:t;var i,n,r;if(e.stacktrace)return e.stacktrace.split("\n")[t+3];if(e.stack){if(i=e.stack.split("\n"),/^error$/i.test(i[0])&&i.shift(),S){for(n=[],r=t;r<i.length&&i[r].indexOf(S)===-1;r++)n.push(i[r]);if(n.length)return n.join("\n")}return i[t]}if(e.sourceURL){if(/qunit.js$/.test(e.sourceURL))return;return e.sourceURL+":"+e.line}}function n(e){var t=new Error;if(!t.stack)try{throw t}catch(n){t=n}return i(t,e)}function r(e,t){if("array"!==_.objectType(e))b.queue.push(e),b.autorun&&!b.blocking&&s(t);else for(;e.length;)r(e.shift())}function s(e){function i(){s(e)}var n=F();for(b.depth=b.depth?b.depth+1:1;b.queue.length&&!b.blocking;){if(!(!M.setTimeout||b.updateRate<=0||F()-n<b.updateRate)){j(i,13);break}b.current&&(b.current.usedAsync=!1),b.queue.shift()()}b.depth--,!e||b.blocking||b.queue.length||0!==b.depth||t()}function o(){var e,t,i=[];if(!b.started){for(b.started=F(),d(),""===b.modules[0].name&&0===b.modules[0].tests.length&&b.modules.shift(),e=0,t=b.modules.length;e<t;e++)i.push({name:b.modules[e].name,tests:b.modules[e].tests});p("begin",{totalTests:y.count,modules:i})}b.blocking=!1,s(!0)}function a(){E=!0,M.setTimeout?j(function(){b.current&&b.current.semaphore>0||(b.timeout&&R(b.timeout),o())},13):o()}function l(){b.blocking=!0,b.testTimeout&&M.setTimeout&&(R(b.timeout),b.timeout=j(function(){if(!b.current)throw new Error("Test timed out");b.current.semaphore=0,_.pushFailure("Test timed out",n(2)),a()},b.testTimeout))}function c(){if(b.pollution=[],b.noglobals)for(var t in e)if(C.call(e,t)){if(/^qunit-test-output/.test(t))continue;b.pollution.push(t)}}function u(){var e,t,i=b.pollution;c(),e=h(b.pollution,i),e.length>0&&_.pushFailure("Introduced global variable(s): "+e.join(", ")),t=h(i,b.pollution),t.length>0&&_.pushFailure("Deleted global variable(s): "+t.join(", "))}function h(e,t){var i,n,r=e.slice();for(i=0;i<r.length;i++)for(n=0;n<t.length;n++)if(r[i]===t[n]){r.splice(i,1),i--;break}return r}function f(t,i,n){for(var r in i)C.call(i,r)&&("constructor"===r&&t===e||(void 0===i[r]?delete t[r]:n&&"undefined"!=typeof t[r]||(t[r]=i[r])));return t}function p(e,t){var i,n,r;for(r=b.callbacks[e],i=0,n=r.length;i<n;i++)r[i](t)}function d(){var t,i;for(t in k)_[t]!==k[t]&&(i=_[t],_[t]=k[t],_[t](i),e.console&&e.console.warn&&e.console.warn("QUnit."+t+" was replaced with a new value.\nPlease, check out the documentation on how to apply logging callbacks.\nReference: http://api.qunitjs.com/category/callbacks/"))}function g(e,t){if(t.indexOf)return t.indexOf(e);for(var i=0,n=t.length;i<n;i++)if(t[i]===e)return i;return-1}function y(e){var t,i;for(++y.count,f(this,e),this.assertions=[],this.semaphore=0,this.usedAsync=!1,this.module=b.currentModule,this.stack=n(3),t=0,i=this.module.tests;t<i.length;t++)this.module.tests[t].name===this.testName&&(this.testName+=" ");this.testId=v(this.module.name,this.testName),this.module.tests.push({name:this.testName,testId:this.testId}),e.skip?(this.callback=function(){},this.async=!1,this.expected=0):this.assert=new m(this)}function v(e,t){for(var i,n=0,r=0,s=e+""+t,o=s.length;n<o;n++)r=(r<<5)-r+s.charCodeAt(n),r|=0;return i=(4294967296+r).toString(16),i.length<8&&(i="0000000"+i),i.slice(-8)}function m(e){this.test=e}var _,b,T,k={},S=(n(0)||"").replace(/(:\d+)+\)?/,"").replace(/.+\//,""),w=Object.prototype.toString,C=Object.prototype.hasOwnProperty,x=e.Date,F=x.now||function(){return(new x).getTime()},L=!1,E=!1,j=e.setTimeout,R=e.clearTimeout,M={document:void 0!==e.document,setTimeout:void 0!==e.setTimeout,sessionStorage:function(){var e="qunit-test-string";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}()},I=function(e){var t,i,n=e.toString();return"[object"===n.substring(0,7)?(t=e.name?e.name.toString():"Error",i=e.message?e.message.toString():"",t&&i?t+": "+i:t?t:i?i:"Error"):n},O=function(e){var t,i,n=_.is("array",e)?[]:{};for(t in e)C.call(e,t)&&(i=e[t],n[t]=i===Object(i)?O(i):i);return n};_={},b={queue:[],blocking:!0,hidepassed:!1,reorder:!0,altertitle:!0,scrolltop:!0,requireExpects:!1,urlConfig:[{id:"hidepassed",label:"Hide passed tests",tooltip:"Only show tests and assertions that fail. Stored as query-strings."},{id:"noglobals",label:"Check for Globals",tooltip:"Enabling this will test if any test introduces new properties on the `window` object. Stored as query-strings."},{id:"notrycatch",label:"No try-catch",tooltip:"Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."}],modules:[],currentModule:{name:"",tests:[]},callbacks:{}},b.modules.push(b.currentModule),function(){var t,i,n=e.location||{search:"",protocol:"file:"},r=n.search.slice(1).split("&"),s=r.length,o={};if(r[0])for(t=0;t<s;t++)i=r[t].split("="),i[0]=decodeURIComponent(i[0]),i[1]=!i[1]||decodeURIComponent(i[1]),o[i[0]]?o[i[0]]=[].concat(o[i[0]],i[1]):o[i[0]]=i[1];if(_.urlParams=o,b.filter=o.filter,b.testId=[],o.testId)for(o.testId=[].concat(o.testId),t=0;t<o.testId.length;t++)b.testId.push(o.testId[t]);_.isLocal="file:"===n.protocol}(),f(_,{module:function(e,t){var i={name:e,testEnvironment:t,tests:[]};t&&t.setup&&(t.beforeEach=t.setup,delete t.setup),t&&t.teardown&&(t.afterEach=t.teardown,delete t.teardown),b.modules.push(i),b.currentModule=i},asyncTest:function(e,t,i){2===arguments.length&&(i=t,t=null),_.test(e,t,i,!0)},test:function(e,t,i,n){var r;2===arguments.length&&(i=t,t=null),r=new y({testName:e,expected:t,async:n,callback:i}),r.queue()},skip:function(e){var t=new y({testName:e,skip:!0});t.queue()},start:function(e){var t=L;if(b.current){if(b.current.semaphore-=e||1,b.current.semaphore>0)return;if(b.current.semaphore<0)return b.current.semaphore=0,void _.pushFailure("Called start() while already started (test's semaphore was 0 already)",n(2))}else{if(L=!0,E)throw new Error("Called start() outside of a test context while already started");if(t||e>1)throw new Error("Called start() outside of a test context too many times");if(b.autostart)throw new Error("Called start() outside of a test context when QUnit.config.autostart was true");if(!b.pageLoaded)return void(b.autostart=!0)}a()},stop:function(e){if(!b.current)throw new Error("Called stop() outside of a test context");b.current.semaphore+=e||1,l()},config:b,is:function(e,t){return _.objectType(t)===e},objectType:function(e){if("undefined"==typeof e)return"undefined";if(null===e)return"null";var t=w.call(e).match(/^\[object\s(.*)\]$/),i=t&&t[1]||"";switch(i){case"Number":return isNaN(e)?"nan":"number";case"String":case"Boolean":case"Array":case"Date":case"RegExp":case"Function":return i.toLowerCase()}return"object"==typeof e?"object":void 0},url:function(e){e=f(f({},_.urlParams),e);var t,i="?";for(t in e)C.call(e,t)&&(i+=encodeURIComponent(t),e[t]!==!0&&(i+="="+encodeURIComponent(e[t])),i+="&");return location.protocol+"//"+location.host+location.pathname+i.slice(0,-1)},extend:f,load:function(){b.pageLoaded=!0,f(b,{stats:{all:0,bad:0},moduleStats:{all:0,bad:0},started:0,updateRate:1e3,autostart:!0,filter:""},!0),b.blocking=!1,b.autostart&&a()}}),function(){function e(e){var t=function(t){if("function"!==_.objectType(t))throw new Error("QUnit logging methods require a callback function as their first parameters.");b.callbacks[e].push(t)};return k[e]=t,t}var t,i,n,r=["begin","done","log","testStart","testDone","moduleStart","moduleDone"];for(t=0,i=r.length;t<i;t++)n=r[t],"undefined"===_.objectType(b.callbacks[n])&&(b.callbacks[n]=[]),_[n]=e(n)}(),T=e.onerror,e.onerror=function(e,t,i){var n=!1;if(T&&(n=T(e,t,i)),n!==!0){if(_.config.current){if(_.config.current.ignoreGlobalErrors)return!0;_.pushFailure(e,t+":"+i)}else _.test("global failure",f(function(){_.pushFailure(e,t+":"+i)},{validTest:!0}));return!1}return n},y.count=0,y.prototype={before:function(){this.module===b.previousModule&&C.call(b,"previousModule")||(C.call(b,"previousModule")&&p("moduleDone",{name:b.previousModule.name,tests:b.previousModule.tests,failed:b.moduleStats.bad,passed:b.moduleStats.all-b.moduleStats.bad,total:b.moduleStats.all,runtime:F()-b.moduleStats.started}),b.previousModule=this.module,b.moduleStats={all:0,bad:0,started:F()},p("moduleStart",{name:this.module.name,tests:this.module.tests})),b.current=this,this.testEnvironment=f({},this.module.testEnvironment),delete this.testEnvironment.beforeEach,delete this.testEnvironment.afterEach,this.started=F(),p("testStart",{name:this.testName,module:this.module.name,testId:this.testId}),b.pollution||c()},run:function(){var e;if(b.current=this,this.async&&_.stop(),this.callbackStarted=F(),b.notrycatch)return e=this.callback.call(this.testEnvironment,this.assert),void this.resolvePromise(e);try{e=this.callback.call(this.testEnvironment,this.assert),this.resolvePromise(e)}catch(t){this.pushFailure("Died on test #"+(this.assertions.length+1)+" "+this.stack+": "+(t.message||t),i(t,0)),c(),b.blocking&&_.start()}},after:function(){u()},queueHook:function(e,t){var n,r=this;return function(){if(b.current=r,b.notrycatch)return n=e.call(r.testEnvironment,r.assert),void r.resolvePromise(n,t);try{n=e.call(r.testEnvironment,r.assert),r.resolvePromise(n,t)}catch(s){r.pushFailure(t+" failed on "+r.testName+": "+(s.message||s),i(s,0))}}},hooks:function(e){var t=[];return this.skip?t:(this.module.testEnvironment&&"function"===_.objectType(this.module.testEnvironment[e])&&t.push(this.queueHook(this.module.testEnvironment[e],e)),t)},finish:function(){b.current=this,b.requireExpects&&null===this.expected?this.pushFailure("Expected number of assertions to be defined, but expect() was not called.",this.stack):null!==this.expected&&this.expected!==this.assertions.length?this.pushFailure("Expected "+this.expected+" assertions, but "+this.assertions.length+" were run",this.stack):null!==this.expected||this.assertions.length||this.pushFailure("Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.",this.stack);var e,t=0;for(this.runtime=F()-this.started,b.stats.all+=this.assertions.length,b.moduleStats.all+=this.assertions.length,e=0;e<this.assertions.length;e++)this.assertions[e].result||(t++,b.stats.bad++,b.moduleStats.bad++);p("testDone",{name:this.testName,module:this.module.name,skipped:!!this.skip,failed:t,passed:this.assertions.length-t,total:this.assertions.length,runtime:this.runtime,assertions:this.assertions,testId:this.testId,duration:this.runtime}),_.reset(),b.current=void 0},queue:function(){function e(){r([function(){i.before()},i.hooks("beforeEach"),function(){i.run()},i.hooks("afterEach").reverse(),function(){i.after()},function(){i.finish()}])}var t,i=this;this.valid()&&(t=_.config.reorder&&M.sessionStorage&&+sessionStorage.getItem("qunit-test-"+this.module.name+"-"+this.testName),t?e():r(e,!0))},push:function(e,t,i,r){var s,o={module:this.module.name,name:this.testName,result:e,message:r,actual:t,expected:i,testId:this.testId,runtime:F()-this.started};e||(s=n(),s&&(o.source=s)),p("log",o),this.assertions.push({result:!!e,message:r})},pushFailure:function(e,t,i){if(!this instanceof y)throw new Error("pushFailure() assertion outside test context, was "+n(2));var r={module:this.module.name,name:this.testName,result:!1,message:e||"error",actual:i||null,testId:this.testId,runtime:F()-this.started};t&&(r.source=t),p("log",r),this.assertions.push({result:!1,message:e})},resolvePromise:function(e,t){var n,r,s=this;null!=e&&(n=e.then,"function"===_.objectType(n)&&(_.stop(),n.call(e,_.start,function(e){r="Promise rejected "+(t?t.replace(/Each$/,""):"during")+" "+s.testName+": "+(e.message||e),s.pushFailure(r,i(e,0)),c(),_.start()})))},valid:function(){var e,t=b.filter&&b.filter.toLowerCase(),i=_.urlParams.module&&_.urlParams.module.toLowerCase(),n=(this.module.name+": "+this.testName).toLowerCase();return!(!this.callback||!this.callback.validTest)||!(b.testId.length>0&&g(this.testId,b.testId)<0)&&(!(i&&(!this.module.name||this.module.name.toLowerCase()!==i))&&(!t||(e="!"!==t.charAt(0),e||(t=t.slice(1)),n.indexOf(t)!==-1?e:!e)))}},_.reset=function(){if("undefined"!=typeof e){var t=M.document&&document.getElementById&&document.getElementById("qunit-fixture");t&&(t.innerHTML=b.fixture)}},_.pushFailure=function(){if(!_.config.current)throw new Error("pushFailure() assertion outside test context, in "+n(2));var e=_.config.current;return e.pushFailure.apply(e,arguments)},_.assert=m.prototype={expect:function(e){return 1!==arguments.length?this.test.expected:void(this.test.expected=e)},async:function(){var e=this.test,t=!1;return e.semaphore+=1,e.usedAsync=!0,l(),function(){t?e.pushFailure("Called the callback returned from `assert.async` more than once",n(2)):(e.semaphore-=1,t=!0,a())}},push:function(){var e=this,t=e instanceof m&&e.test||_.config.current;if(!t)throw new Error("assertion outside test context, in "+n(2));return t.usedAsync===!0&&0===t.semaphore&&t.pushFailure("Assertion after the final `assert.async` was resolved",n(2)),e instanceof m||(e=t.assert),e.test.push.apply(e.test,arguments)},ok:function(e,t){t=t||(e?"okay":"failed, expected argument to be truthy, was: "+_.dump.parse(e)),this.push(!!e,e,!0,t)},equal:function(e,t,i){this.push(t==e,e,t,i)},notEqual:function(e,t,i){this.push(t!=e,e,t,i)},propEqual:function(e,t,i){e=O(e),t=O(t),this.push(_.equiv(e,t),e,t,i)},notPropEqual:function(e,t,i){e=O(e),t=O(t),this.push(!_.equiv(e,t),e,t,i)},deepEqual:function(e,t,i){this.push(_.equiv(e,t),e,t,i)},notDeepEqual:function(e,t,i){this.push(!_.equiv(e,t),e,t,i)},strictEqual:function(e,t,i){this.push(t===e,e,t,i)},notStrictEqual:function(e,t,i){this.push(t!==e,e,t,i)},"throws":function(e,t,i){var n,r,s=t,o=!1;null==i&&"string"==typeof t&&(i=t,t=null),this.test.ignoreGlobalErrors=!0;try{e.call(this.test.testEnvironment)}catch(a){n=a}this.test.ignoreGlobalErrors=!1,n?(r=_.objectType(t),t?"regexp"===r?o=t.test(I(n)):"string"===r?o=t===I(n):"function"===r&&n instanceof t?o=!0:"object"===r?o=n instanceof t.constructor&&n.name===t.name&&n.message===t.message:"function"===r&&t.call({},n)===!0&&(s=null,o=!0):(o=!0,s=null),this.push(o,n,s,i)):this.test.pushFailure(i,null,"No exception was thrown.")}},function(){m.prototype.raises=m.prototype["throws"]}(),_.equiv=function(){function e(e,t,i){var n=_.objectType(e);if(n)return"function"===_.objectType(t[n])?t[n].apply(t,i):t[n]}var t,i=[],n=[],r=[],s=Object.getPrototypeOf||function(e){return e.__proto__},o=function(){function e(e,t){return e instanceof t.constructor||t instanceof e.constructor?t==e:t===e}return{string:e,"boolean":e,number:e,"null":e,undefined:e,nan:function(e){return isNaN(e)},date:function(e,t){return"date"===_.objectType(e)&&t.valueOf()===e.valueOf()},regexp:function(e,t){return"regexp"===_.objectType(e)&&t.source===e.source&&t.global===e.global&&t.ignoreCase===e.ignoreCase&&t.multiline===e.multiline&&t.sticky===e.sticky},"function":function(){var e=i[i.length-1];return e!==Object&&"undefined"!=typeof e},array:function(e,i){var s,o,a,l,c,u;if("array"!==_.objectType(e))return!1;if(a=i.length,a!==e.length)return!1;for(n.push(i),r.push(e),s=0;s<a;s++){for(l=!1,o=0;o<n.length;o++)if(c=n[o]===i[s],u=r[o]===e[s],c||u){if(!(i[s]===e[s]||c&&u))return n.pop(),r.pop(),!1;l=!0}if(!l&&!t(i[s],e[s]))return n.pop(),r.pop(),!1}return n.pop(),r.pop(),!0},object:function(e,o){var a,l,c,u,h,f=!0,p=[],d=[];if(o.constructor!==e.constructor&&!(null===s(o)&&s(e)===Object.prototype||null===s(e)&&s(o)===Object.prototype))return!1;i.push(o.constructor),n.push(o),r.push(e);for(a in o){for(c=!1,l=0;l<n.length;l++)if(u=n[l]===o[a],h=r[l]===e[a],u||h){if(!(o[a]===e[a]||u&&h)){f=!1;break}c=!0}if(p.push(a),!c&&!t(o[a],e[a])){f=!1;break}}n.pop(),r.pop(),i.pop();for(a in e)d.push(a);return f&&t(p.sort(),d.sort())}}}();return t=function(){var i=[].slice.apply(arguments);return i.length<2||function(t,i){return t===i||null!==t&&null!==i&&"undefined"!=typeof t&&"undefined"!=typeof i&&_.objectType(t)===_.objectType(i)&&e(t,o,[i,t])}(i[0],i[1])&&t.apply(this,i.splice(1,i.length-1))}}(),_.dump=function(){function e(e){return'"'+e.toString().replace(/"/g,'\\"')+'"'}function t(e){return e+""}function i(e,t,i){var n=s.separator(),r=s.indent(),o=s.indent(1);return t.join&&(t=t.join(","+n+o)),t?[e,o+t,r+i].join(n):e+i}function n(e,t){var n=e.length,r=new Array(n);if(s.maxDepth&&s.depth>s.maxDepth)return"[object Array]";for(this.up();n--;)r[n]=this.parse(e[n],void 0,t);return this.down(),i("[",r,"]")}var r=/^function (\w+)/,s={parse:function(e,t,i){i=i||[];var n,r,s,o=g(e,i);return o!==-1?"recursion("+(o-i.length)+")":(t=t||this.typeOf(e),r=this.parsers[t],s=typeof r,"function"===s?(i.push(e),n=r.call(this,e,i),i.pop(),n):"string"===s?r:this.parsers.error)},typeOf:function(e){var t;return t=null===e?"null":"undefined"==typeof e?"undefined":_.is("regexp",e)?"regexp":_.is("date",e)?"date":_.is("function",e)?"function":void 0!==e.setInterval&&void 0!==e.document&&void 0===e.nodeType?"window":9===e.nodeType?"document":e.nodeType?"node":"[object Array]"===w.call(e)||"number"==typeof e.length&&void 0!==e.item&&(e.length?e.item(0)===e[0]:null===e.item(0)&&void 0===e[0])?"array":e.constructor===Error.prototype.constructor?"error":typeof e},separator:function(){return this.multiline?this.HTML?"<br />":"\n":this.HTML?"&#160;":" "},indent:function(e){if(!this.multiline)return"";var t=this.indentChar;return this.HTML&&(t=t.replace(/\t/g,"   ").replace(/ /g,"&#160;")),new Array(this.depth+(e||0)).join(t)},up:function(e){this.depth+=e||1},down:function(e){this.depth-=e||1},setParser:function(e,t){this.parsers[e]=t},quote:e,literal:t,join:i,depth:1,maxDepth:5,parsers:{window:"[Window]",document:"[Document]",error:function(e){return'Error("'+e.message+'")'},unknown:"[Unknown]","null":"null",undefined:"undefined","function":function(e){var t="function",n="name"in e?e.name:(r.exec(e)||[])[1];return n&&(t+=" "+n),t+="( ",t=[t,s.parse(e,"functionArgs"),"){"].join(""),i(t,s.parse(e,"functionCode"),"}")},array:n,nodelist:n,arguments:n,object:function(e,t){var n,r,o,a,l,c=[];if(s.maxDepth&&s.depth>s.maxDepth)return"[object Object]";s.up(),n=[];for(r in e)n.push(r);l=["message","name"];for(a in l)r=l[a],r in e&&!(r in n)&&n.push(r);for(n.sort(),a=0;a<n.length;a++)r=n[a],o=e[r],c.push(s.parse(r,"key")+": "+s.parse(o,void 0,t));return s.down(),i("{",c,"}")},node:function(e){var t,i,n,r=s.HTML?"&lt;":"<",o=s.HTML?"&gt;":">",a=e.nodeName.toLowerCase(),l=r+a,c=e.attributes;if(c)for(i=0,t=c.length;i<t;i++)n=c[i].nodeValue,n&&"inherit"!==n&&(l+=" "+c[i].nodeName+"="+s.parse(n,"attribute"));return l+=o,3!==e.nodeType&&4!==e.nodeType||(l+=e.nodeValue),l+r+"/"+a+o},functionArgs:function(e){var t,i=e.length;if(!i)return"";for(t=new Array(i);i--;)t[i]=String.fromCharCode(97+i);return" "+t.join(", ")+" "},key:e,functionCode:"[code]",attribute:e,string:e,date:e,regexp:t,number:t,"boolean":t},HTML:!1,indentChar:"  ",multiline:!0};return s}(),_.jsDump=_.dump,"undefined"!=typeof e&&(!function(){function e(e){return function(){var t=new m(_.config.current);e.apply(t,arguments)}}var t,i=m.prototype;for(t in i)_[t]=e(i[t])}(),function(){var t,i,n=["test","module","expect","asyncTest","start","stop","ok","equal","notEqual","propEqual","notPropEqual","deepEqual","notDeepEqual","strictEqual","notStrictEqual","throws"];for(t=0,i=n.length;t<i;t++)e[n[t]]=_[n[t]]}(),e.QUnit=_),"undefined"!=typeof module&&module.exports&&(module.exports=_),"undefined"!=typeof exports&&(exports.QUnit=_)}(function(){return this}()),QUnit.diff=function(){function e(e,i){var n,r={},s={};for(n=0;n<i.length;n++)t.call(r,i[n])||(r[i[n]]={rows:[],o:null}),r[i[n]].rows.push(n);for(n=0;n<e.length;n++)t.call(s,e[n])||(s[e[n]]={rows:[],n:null}),s[e[n]].rows.push(n);for(n in r)t.call(r,n)&&1===r[n].rows.length&&t.call(s,n)&&1===s[n].rows.length&&(i[r[n].rows[0]]={text:i[r[n].rows[0]],row:s[n].rows[0]},e[s[n].rows[0]]={text:e[s[n].rows[0]],row:r[n].rows[0]});for(n=0;n<i.length-1;n++)null!=i[n].text&&null==i[n+1].text&&i[n].row+1<e.length&&null==e[i[n].row+1].text&&i[n+1]==e[i[n].row+1]&&(i[n+1]={text:i[n+1],row:i[n].row+1},e[i[n].row+1]={text:e[i[n].row+1],row:n+1});for(n=i.length-1;n>0;n--)null!=i[n].text&&null==i[n-1].text&&i[n].row>0&&null==e[i[n].row-1].text&&i[n-1]==e[i[n].row-1]&&(i[n-1]={text:i[n-1],row:i[n].row-1},e[i[n].row-1]={text:e[i[n].row-1],row:n-1});return{o:e,n:i}}var t=Object.prototype.hasOwnProperty;return function(t,i){t=t.replace(/\s+$/,""),i=i.replace(/\s+$/,"");var n,r,s="",o=e(""===t?[]:t.split(/\s+/),""===i?[]:i.split(/\s+/)),a=t.match(/\s+/g),l=i.match(/\s+/g);if(null==a?a=[" "]:a.push(" "),null==l?l=[" "]:l.push(" "),0===o.n.length)for(n=0;n<o.o.length;n++)s+="<del>"+o.o[n]+a[n]+"</del>";else{if(null==o.n[0].text)for(i=0;i<o.o.length&&null==o.o[i].text;i++)s+="<del>"+o.o[i]+a[i]+"</del>";for(n=0;n<o.n.length;n++)if(null==o.n[n].text)s+="<ins>"+o.n[n]+l[n]+"</ins>";else{for(r="",i=o.n[n].row+1;i<o.o.length&&null==o.o[i].text;i++)r+="<del>"+o.o[i]+a[i]+"</del>";s+=" "+o.n[n].text+l[n]+r}}return s}}(),function(){function e(e){return e?(e+="",e.replace(/['"<>&]/g,function(e){switch(e){case"'":return"&#039;";case'"':return"&quot;";case"<":return"&lt;";case">":return"&gt;";case"&":return"&amp;"}})):""}function t(e,t,i){e.addEventListener?e.addEventListener(t,i,!1):e.attachEvent&&e.attachEvent("on"+t,i)}function i(e,i,n){for(var r=e.length;r--;)t(e[r],i,n)}function n(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>=0}function r(e,t){n(e,t)||(e.className+=(e.className?" ":"")+t)}function s(e,t){n(e,t)?o(e,t):r(e,t)}function o(e,t){for(var i=" "+e.className+" ";i.indexOf(" "+t+" ")>=0;)i=i.replace(" "+t+" "," ");e.className="function"==typeof i.trim?i.trim():i.replace(/^\s+|\s+$/g,"")}function a(e){return S.document&&document.getElementById&&document.getElementById(e)}function l(){var t,i,n,r,s,o=!1,a=T.urlConfig.length,l="";for(t=0;t<a;t++)if(n=T.urlConfig[t],"string"==typeof n&&(n={id:n,label:n}),r=e(n.id),s=e(n.tooltip),T[n.id]=QUnit.urlParams[n.id],n.value&&"string"!=typeof n.value){if(l+="<label for='qunit-urlconfig-"+r+"' title='"+s+"'>"+n.label+": </label><select id='qunit-urlconfig-"+r+"' name='"+r+"' title='"+s+"'><option></option>",QUnit.is("array",n.value))for(i=0;i<n.value.length;i++)r=e(n.value[i]),l+="<option value='"+r+"'"+(T[n.id]===n.value[i]?(o=!0)&&" selected='selected'":"")+">"+r+"</option>";else for(i in n.value)k.call(n.value,i)&&(l+="<option value='"+e(i)+"'"+(T[n.id]===i?(o=!0)&&" selected='selected'":"")+">"+e(n.value[i])+"</option>");T[n.id]&&!o&&(r=e(T[n.id]),l+="<option value='"+r+"' selected='selected' disabled='disabled'>"+r+"</option>"),l+="</select>"}else l+="<input id='qunit-urlconfig-"+r+"' name='"+r+"' type='checkbox'"+(n.value?" value='"+e(n.value)+"'":"")+(T[n.id]?" checked='checked'":"")+" title='"+s+"' /><label for='qunit-urlconfig-"+r+"' title='"+s+"'>"+n.label+"</label>";return l}function c(){var e,t,i=this,n={};t="selectedIndex"in i?i.options[i.selectedIndex].value||void 0:i.checked?i.defaultValue||!0:void 0,n[i.name]=t,e=QUnit.url(n),"hidepassed"===i.name&&"replaceState"in window.history?(T[i.name]=t||!1,t?r(a("qunit-tests"),"hidepass"):o(a("qunit-tests"),"hidepass"),window.history.replaceState(null,"",e)):window.location=e}function u(){var e=document.createElement("span");return e.innerHTML=l(),i(e.getElementsByTagName("input"),"click",c),i(e.getElementsByTagName("select"),"change",c),e}function h(){var t,i="";if(!w.length)return!1;for(w.sort(function(e,t){return e.localeCompare(t)}),i+="<label for='qunit-modulefilter'>Module: </label><select id='qunit-modulefilter' name='modulefilter'><option value='' "+(void 0===QUnit.urlParams.module?"selected='selected'":"")+">< All Modules ></option>",t=0;t<w.length;t++)i+="<option value='"+e(encodeURIComponent(w[t]))+"' "+(QUnit.urlParams.module===w[t]?"selected='selected'":"")+">"+e(w[t])+"</option>";return i+="</select>"}function f(){var e=a("qunit-testrunner-toolbar"),i=document.createElement("span"),n=h();return!!n&&(i.setAttribute("id","qunit-modulefilter-container"),i.innerHTML=n,t(i.lastChild,"change",function(){var e=i.getElementsByTagName("select")[0],t=decodeURIComponent(e.options[e.selectedIndex].value);window.location=QUnit.url({module:""===t?void 0:t,filter:void 0,testId:void 0})}),void e.appendChild(i))}function p(){var e=a("qunit-testrunner-toolbar");e&&e.appendChild(u())}function d(){var e=a("qunit-banner");e&&(e.className="",e.innerHTML="<a href='"+QUnit.url({filter:void 0,module:void 0,testId:void 0})+"'>"+e.innerHTML+"</a> ")}function g(){var e=a("qunit-tests"),t=a("qunit-testresult");t&&t.parentNode.removeChild(t),e&&(e.innerHTML="",t=document.createElement("p"),t.id="qunit-testresult",t.className="result",e.parentNode.insertBefore(t,e),t.innerHTML="Running...<br />&#160;")}function y(){var e=a("qunit-fixture");e&&(T.fixture=e.innerHTML)}function v(){var e=a("qunit-userAgent");e&&(e.innerHTML=navigator.userAgent)}function m(e){var t,i,n,r,s,o;for(t=0,i=e.length;t<i;t++)for(o=e[t],o.name&&w.push(o.name),n=0,r=o.tests.length;n<r;n++)s=o.tests[n],_(s.name,s.testId,o.name)}function _(e,t,i){var n,r,s,o,l=a("qunit-tests");l&&(n=document.createElement("strong"),n.innerHTML=b(e,i),r=document.createElement("a"),r.innerHTML="Rerun",r.href=QUnit.url({testId:t}),s=document.createElement("li"),s.appendChild(n),s.appendChild(r),s.id="qunit-test-output-"+t,o=document.createElement("ol"),o.className="qunit-assert-list",s.appendChild(o),l.appendChild(s))}function b(t,i){var n="";return i&&(n="<span class='module-name'>"+e(i)+"</span>: "),n+="<span class='test-name'>"+e(t)+"</span>"}if(QUnit.init=function(){var t,i,n,r,s=QUnit.config;s.stats={all:0,bad:0},s.moduleStats={all:0,bad:0},s.started=0,s.updateRate=1e3,s.blocking=!1,s.autostart=!0,s.autorun=!1,s.filter="",s.queue=[],"undefined"!=typeof window&&(r=a("qunit"),r&&(r.innerHTML="<h1 id='qunit-header'>"+e(document.title)+"</h1><h2 id='qunit-banner'></h2><div id='qunit-testrunner-toolbar'></div><h2 id='qunit-userAgent'></h2><ol id='qunit-tests'></ol>"),t=a("qunit-tests"),i=a("qunit-banner"),n=a("qunit-testresult"),t&&(t.innerHTML=""),i&&(i.className=""),n&&n.parentNode.removeChild(n),t&&(n=document.createElement("p"),n.id="qunit-testresult",n.className="result",t.parentNode.insertBefore(n,t),n.innerHTML="Running...<br />&#160;"))},"undefined"!=typeof window){var T=QUnit.config,k=Object.prototype.hasOwnProperty,S={document:void 0!==window.document,sessionStorage:function(){var e="qunit-test-string";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}()},w=[];QUnit.begin(function(t){var i=a("qunit");y(),i&&(i.innerHTML="<h1 id='qunit-header'>"+e(document.title)+"</h1><h2 id='qunit-banner'></h2><div id='qunit-testrunner-toolbar'></div><h2 id='qunit-userAgent'></h2><ol id='qunit-tests'></ol>",d(),g(),v(),p(),m(t.modules),f(),T.hidepassed&&r(i.lastChild,"hidepass"))}),QUnit.done(function(e){var t,i,n=a("qunit-banner"),r=a("qunit-tests"),s=["Tests completed in ",e.runtime," milliseconds.<br />","<span class='passed'>",e.passed,"</span> assertions of <span class='total'>",e.total,"</span> passed, <span class='failed'>",e.failed,"</span> failed."].join("");if(n&&(n.className=e.failed?"qunit-fail":"qunit-pass"),r&&(a("qunit-testresult").innerHTML=s),T.altertitle&&S.document&&document.title&&(document.title=[e.failed?"✖":"✔",document.title.replace(/^[\u2714\u2716] /i,"")].join(" ")),T.reorder&&S.sessionStorage&&0===e.failed)for(t=0;t<sessionStorage.length;t++)i=sessionStorage.key(t++),0===i.indexOf("qunit-test-")&&sessionStorage.removeItem(i);T.scrolltop&&window.scrollTo&&window.scrollTo(0,0)}),QUnit.testStart(function(e){var t,i;i=a("qunit-test-output-"+e.testId),i?i.className="running":_(e.name,e.testId,e.module),t=a("qunit-testresult"),t&&(t.innerHTML="Running: <br />"+b(e.name,e.module))}),QUnit.log(function(t){var i,n,r,s,o,l=a("qunit-test-output-"+t.testId);l&&(r=e(t.message)||(t.result?"okay":"failed"),r="<span class='test-message'>"+r+"</span>",r+="<span class='runtime'>@ "+t.runtime+" ms</span>",!t.result&&k.call(t,"expected")?(s=e(QUnit.dump.parse(t.expected)),o=e(QUnit.dump.parse(t.actual)),r+="<table><tr class='test-expected'><th>Expected: </th><td><pre>"+s+"</pre></td></tr>",o!==s&&(r+="<tr class='test-actual'><th>Result: </th><td><pre>"+o+"</pre></td></tr><tr class='test-diff'><th>Diff: </th><td><pre>"+QUnit.diff(s,o)+"</pre></td></tr>"),t.source&&(r+="<tr class='test-source'><th>Source: </th><td><pre>"+e(t.source)+"</pre></td></tr>"),r+="</table>"):!t.result&&t.source&&(r+="<table><tr class='test-source'><th>Source: </th><td><pre>"+e(t.source)+"</pre></td></tr></table>"),i=l.getElementsByTagName("ol")[0],n=document.createElement("li"),n.className=t.result?"pass":"fail",n.innerHTML=r,i.appendChild(n))}),QUnit.testDone(function(e){var i,n,o,l,c,u,h,f,p=a("qunit-tests");p&&(o=a("qunit-test-output-"+e.testId),l=o.getElementsByTagName("ol")[0],c=e.passed,u=e.failed,T.reorder&&S.sessionStorage&&(u?sessionStorage.setItem("qunit-test-"+e.module+"-"+e.name,u):sessionStorage.removeItem("qunit-test-"+e.module+"-"+e.name)),0===u&&r(l,"qunit-collapsed"),i=o.firstChild,h=u?"<b class='failed'>"+u+"</b>, <b class='passed'>"+c+"</b>, ":"",i.innerHTML+=" <b class='counts'>("+h+e.assertions.length+")</b>",e.skipped?(r(o,"skipped"),f=document.createElement("em"),f.className="qunit-skipped-label",f.innerHTML="skipped",o.insertBefore(f,i)):(t(i,"click",function(){s(l,"qunit-collapsed")}),o.className=u?"fail":"pass",n=document.createElement("span"),n.className="runtime",n.innerHTML=e.runtime+" ms",o.insertBefore(n,l)))}),S.document&&"complete"!==document.readyState||(T.pageLoaded=!0,T.autorun=!0),S.document&&t(window,"load",QUnit.load)}}();