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
var isCommonJS="undefined"==typeof window&&"object"==typeof exports,jasmine={};isCommonJS&&(exports.jasmine=jasmine),jasmine.unimplementedMethod_=function(){throw new Error("unimplemented method")},jasmine.undefined=jasmine.___undefined___,jasmine.VERBOSE=!1,jasmine.DEFAULT_UPDATE_INTERVAL=250,jasmine.MAX_PRETTY_PRINT_DEPTH=40,jasmine.DEFAULT_TIMEOUT_INTERVAL=5e3,jasmine.CATCH_EXCEPTIONS=!0,jasmine.getGlobal=function(){function e(){return this}return e()},jasmine.bindOriginal_=function(e,t){var i=e[t];return i.apply?function(){return i.apply(e,arguments)}:jasmine.getGlobal()[t]},jasmine.setTimeout=jasmine.bindOriginal_(jasmine.getGlobal(),"setTimeout"),jasmine.clearTimeout=jasmine.bindOriginal_(jasmine.getGlobal(),"clearTimeout"),jasmine.setInterval=jasmine.bindOriginal_(jasmine.getGlobal(),"setInterval"),jasmine.clearInterval=jasmine.bindOriginal_(jasmine.getGlobal(),"clearInterval"),jasmine.MessageResult=function(e){this.type="log",this.values=e,this.trace=new Error},jasmine.MessageResult.prototype.toString=function(){for(var e="",t=0;t<this.values.length;t++)t>0&&(e+=" "),e+=jasmine.isString_(this.values[t])?this.values[t]:jasmine.pp(this.values[t]);return e},jasmine.ExpectationResult=function(e){this.type="expect",this.matcherName=e.matcherName,this.passed_=e.passed,this.expected=e.expected,this.actual=e.actual,this.message=this.passed_?"Passed.":e.message;var t=e.trace||new Error(this.message);this.trace=this.passed_?"":t},jasmine.ExpectationResult.prototype.toString=function(){return this.message},jasmine.ExpectationResult.prototype.passed=function(){return this.passed_},jasmine.getEnv=function(){var e=jasmine.currentEnv_=jasmine.currentEnv_||new jasmine.Env;return e},jasmine.isArray_=function(e){return jasmine.isA_("Array",e)},jasmine.isString_=function(e){return jasmine.isA_("String",e)},jasmine.isNumber_=function(e){return jasmine.isA_("Number",e)},jasmine.isA_=function(e,t){return Object.prototype.toString.apply(t)==="[object "+e+"]"},jasmine.pp=function(e){var t=new jasmine.StringPrettyPrinter;return t.format(e),t.string},jasmine.isDomNode=function(e){return e.nodeType>0},jasmine.any=function(e){return new jasmine.Matchers.Any(e)},jasmine.objectContaining=function(e){return new jasmine.Matchers.ObjectContaining(e)},jasmine.Spy=function(e){this.identity=e||"unknown",this.isSpy=!0,this.plan=function(){},this.mostRecentCall={},this.argsForCall=[],this.calls=[]},jasmine.Spy.prototype.andCallThrough=function(){return this.plan=this.originalValue,this},jasmine.Spy.prototype.andReturn=function(e){return this.plan=function(){return e},this},jasmine.Spy.prototype.andThrow=function(e){return this.plan=function(){throw e},this},jasmine.Spy.prototype.andCallFake=function(e){return this.plan=e,this},jasmine.Spy.prototype.reset=function(){this.wasCalled=!1,this.callCount=0,this.argsForCall=[],this.calls=[],this.mostRecentCall={}},jasmine.createSpy=function(e){var t=function(){t.wasCalled=!0,t.callCount++;var e=jasmine.util.argsToArray(arguments);return t.mostRecentCall.object=this,t.mostRecentCall.args=e,t.argsForCall.push(e),t.calls.push({object:this,args:e}),t.plan.apply(this,arguments)},i=new jasmine.Spy(e);for(var n in i)t[n]=i[n];return t.reset(),t},jasmine.isSpy=function(e){return e&&e.isSpy},jasmine.createSpyObj=function(e,t){if(!jasmine.isArray_(t)||0===t.length)throw new Error("createSpyObj requires a non-empty array of method names to create spies for");for(var i={},n=0;n<t.length;n++)i[t[n]]=jasmine.createSpy(e+"."+t[n]);return i},jasmine.log=function(){var e=jasmine.getEnv().currentSpec;e.log.apply(e,arguments)};var spyOn=function(e,t){return jasmine.getEnv().currentSpec.spyOn(e,t)};isCommonJS&&(exports.spyOn=spyOn);var it=function(e,t){return jasmine.getEnv().it(e,t)};isCommonJS&&(exports.it=it);var iit=function(e,t){return jasmine.getEnv().iit(e,t)};isCommonJS&&(exports.iit=iit);var xit=function(e,t){return jasmine.getEnv().xit(e,t)};isCommonJS&&(exports.xit=xit);var expect=function(e){return jasmine.getEnv().currentSpec.expect(e)};isCommonJS&&(exports.expect=expect);var runs=function(e){jasmine.getEnv().currentSpec.runs(e)};isCommonJS&&(exports.runs=runs);var waits=function(e){jasmine.getEnv().currentSpec.waits(e)};isCommonJS&&(exports.waits=waits);var waitsFor=function(e,t,i){jasmine.getEnv().currentSpec.waitsFor.apply(jasmine.getEnv().currentSpec,arguments)};isCommonJS&&(exports.waitsFor=waitsFor);var beforeEach=function(e){jasmine.getEnv().beforeEach(e)};isCommonJS&&(exports.beforeEach=beforeEach);var afterEach=function(e){jasmine.getEnv().afterEach(e)};isCommonJS&&(exports.afterEach=afterEach);var describe=function(e,t){return jasmine.getEnv().describe(e,t)};isCommonJS&&(exports.describe=describe);var ddescribe=function(e,t){return jasmine.getEnv().ddescribe(e,t)};isCommonJS&&(exports.ddescribe=ddescribe);var xdescribe=function(e,t){return jasmine.getEnv().xdescribe(e,t)};isCommonJS&&(exports.xdescribe=xdescribe),jasmine.XmlHttpRequest="undefined"==typeof XMLHttpRequest?function(){function e(e){try{return e()}catch(t){}return null}var t=e(function(){return new ActiveXObject("Msxml2.XMLHTTP.6.0")})||e(function(){return new ActiveXObject("Msxml2.XMLHTTP.3.0")})||e(function(){return new ActiveXObject("Msxml2.XMLHTTP")})||e(function(){return new ActiveXObject("Microsoft.XMLHTTP")});if(!t)throw new Error("This browser does not support XMLHttpRequest.");return t}:XMLHttpRequest,jasmine.util={},jasmine.util.inherit=function(e,t){var i=function(){};i.prototype=t.prototype,e.prototype=new i},jasmine.util.formatException=function(e){var t;e.line?t=e.line:e.lineNumber&&(t=e.lineNumber);var i;e.sourceURL?i=e.sourceURL:e.fileName&&(i=e.fileName);var n=e.name&&e.message?e.name+": "+e.message:e.toString();return i&&t&&(n+=" in "+i+" (line "+t+")"),n},jasmine.util.htmlEscape=function(e){return e?e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):e},jasmine.util.argsToArray=function(e){for(var t=[],i=0;i<e.length;i++)t.push(e[i]);return t},jasmine.util.extend=function(e,t){for(var i in t)e[i]=t[i];return e},jasmine.Env=function(){this.currentSpec=null,this.currentSuite=null,this.currentRunner_=new jasmine.Runner(this),this.reporter=new jasmine.MultiReporter,this.updateInterval=jasmine.DEFAULT_UPDATE_INTERVAL,this.defaultTimeoutInterval=jasmine.DEFAULT_TIMEOUT_INTERVAL,this.lastUpdate=0,this.specFilter=function(e){return this.exclusive_<=e.exclusive_},this.nextSpecId_=0,this.nextSuiteId_=0,this.equalityTesters_=[],this.exclusive_=0,this.matchersClass=function(){jasmine.Matchers.apply(this,arguments)},jasmine.util.inherit(this.matchersClass,jasmine.Matchers),jasmine.Matchers.wrapInto_(jasmine.Matchers.prototype,this.matchersClass)},jasmine.Env.prototype.setTimeout=jasmine.setTimeout,jasmine.Env.prototype.clearTimeout=jasmine.clearTimeout,jasmine.Env.prototype.setInterval=jasmine.setInterval,jasmine.Env.prototype.clearInterval=jasmine.clearInterval,jasmine.Env.prototype.version=function(){if(jasmine.version_)return jasmine.version_;throw new Error("Version not set")},jasmine.Env.prototype.versionString=function(){if(!jasmine.version_)return"version unknown";var e=this.version(),t=e.major+"."+e.minor+"."+e.build;return e.release_candidate&&(t+=".rc"+e.release_candidate),t+=" revision "+e.revision},jasmine.Env.prototype.nextSpecId=function(){return this.nextSpecId_++},jasmine.Env.prototype.nextSuiteId=function(){return this.nextSuiteId_++},jasmine.Env.prototype.addReporter=function(e){this.reporter.addReporter(e)},jasmine.Env.prototype.execute=function(){this.currentRunner_.execute()},jasmine.Env.prototype.describe=function(e,t){var i=new jasmine.Suite(this,e,null,this.currentSuite);return this.describe_(i,t)},jasmine.Env.prototype.describe_=function(e,t){var i=this.currentSuite;i?i.add(e):this.currentRunner_.add(e),this.currentSuite=e;var n=null;try{t.call(e)}catch(r){n=r}return n&&this.it("encountered a declaration exception",function(){throw n}),this.currentSuite=i,e},jasmine.Env.prototype.ddescribe=function(e,t){var i=new jasmine.Suite(this,e,null,this.currentSuite);return i.exclusive_=1,this.exclusive_=Math.max(this.exclusive_,1),this.describe_(i,t)},jasmine.Env.prototype.beforeEach=function(e){this.currentSuite?this.currentSuite.beforeEach(e):this.currentRunner_.beforeEach(e)},jasmine.Env.prototype.currentRunner=function(){return this.currentRunner_},jasmine.Env.prototype.afterEach=function(e){this.currentSuite?this.currentSuite.afterEach(e):this.currentRunner_.afterEach(e)},jasmine.Env.prototype.xdescribe=function(e,t){return{execute:function(){}}},jasmine.Env.prototype.it=function(e,t){var i=new jasmine.Spec(this,this.currentSuite,e);return this.currentSuite.add(i),this.currentSpec=i,t&&i.runs(t),i},jasmine.Env.prototype.iit=function(e,t){var i=this.it(e,t);return i.exclusive_=2,this.exclusive_=2,i},jasmine.Env.prototype.xit=function(e,t){return{id:this.nextSpecId(),runs:function(){}}},jasmine.Env.prototype.compareRegExps_=function(e,t,i,n){return e.source!=t.source&&n.push("expected pattern /"+t.source+"/ is not equal to the pattern /"+e.source+"/"),e.ignoreCase!=t.ignoreCase&&n.push("expected modifier i was"+(t.ignoreCase?" ":" not ")+"set and does not equal the origin modifier"),e.global!=t.global&&n.push("expected modifier g was"+(t.global?" ":" not ")+"set and does not equal the origin modifier"),e.multiline!=t.multiline&&n.push("expected modifier m was"+(t.multiline?" ":" not ")+"set and does not equal the origin modifier"),e.sticky!=t.sticky&&n.push("expected modifier y was"+(t.sticky?" ":" not ")+"set and does not equal the origin modifier"),0===n.length},jasmine.Env.prototype.compareObjects_=function(e,t,i,n){if(e.__Jasmine_been_here_before__===t&&t.__Jasmine_been_here_before__===e)return!0;e.__Jasmine_been_here_before__=t,t.__Jasmine_been_here_before__=e;var r=function(e,t){return null!==e&&e[t]!==jasmine.undefined};for(var s in t)!r(e,s)&&r(t,s)&&i.push("expected has key '"+s+"', but missing from actual.");for(s in e)!r(t,s)&&r(e,s)&&i.push("expected missing key '"+s+"', but present in actual.");for(s in t)"__Jasmine_been_here_before__"!=s&&(this.equals_(e[s],t[s],i,n)||n.push("'"+s+"' was '"+(t[s]?jasmine.util.htmlEscape(t[s].toString()):t[s])+"' in expected, but was '"+(e[s]?jasmine.util.htmlEscape(e[s].toString()):e[s])+"' in actual."));return jasmine.isArray_(e)&&jasmine.isArray_(t)&&e.length!=t.length&&n.push("arrays were not the same length"),delete e.__Jasmine_been_here_before__,delete t.__Jasmine_been_here_before__,0===i.length&&0===n.length},jasmine.Env.prototype.equals_=function(e,t,i,n){i=i||[],n=n||[];for(var r=0;r<this.equalityTesters_.length;r++){var s=this.equalityTesters_[r],o=s(e,t,this,i,n);if(o!==jasmine.undefined)return o}return e===t||(e===jasmine.undefined||null===e||t===jasmine.undefined||null===t?e==jasmine.undefined&&t==jasmine.undefined:jasmine.isDomNode(e)&&jasmine.isDomNode(t)?e===t:e instanceof Date&&t instanceof Date?e.getTime()==t.getTime():e.jasmineMatches?e.jasmineMatches(t):t.jasmineMatches?t.jasmineMatches(e):e instanceof jasmine.Matchers.ObjectContaining?e.matches(t):t instanceof jasmine.Matchers.ObjectContaining?t.matches(e):jasmine.isString_(e)&&jasmine.isString_(t)?e==t:jasmine.isNumber_(e)&&jasmine.isNumber_(t)?e==t:e instanceof RegExp&&t instanceof RegExp?this.compareRegExps_(e,t,i,n):"object"==typeof e&&"object"==typeof t?this.compareObjects_(e,t,i,n):e===t)},jasmine.Env.prototype.contains_=function(e,t){if(jasmine.isArray_(e)){for(var i=0;i<e.length;i++)if(this.equals_(e[i],t))return!0;return!1}return e.indexOf(t)>=0},jasmine.Env.prototype.addEqualityTester=function(e){this.equalityTesters_.push(e)},jasmine.Reporter=function(){},jasmine.Reporter.prototype.reportRunnerStarting=function(e){},jasmine.Reporter.prototype.reportRunnerResults=function(e){},jasmine.Reporter.prototype.reportSuiteResults=function(e){},jasmine.Reporter.prototype.reportSpecStarting=function(e){},jasmine.Reporter.prototype.reportSpecResults=function(e){},jasmine.Reporter.prototype.log=function(e){},jasmine.Block=function(e,t,i){this.env=e,this.func=t,this.spec=i},jasmine.Block.prototype.execute=function(e){if(jasmine.CATCH_EXCEPTIONS)try{this.func.apply(this.spec)}catch(t){this.spec.fail(t)}else this.func.apply(this.spec);e()},jasmine.JsApiReporter=function(){this.started=!1,this.finished=!1,this.suites_=[],this.results_={}},jasmine.JsApiReporter.prototype.reportRunnerStarting=function(e){this.started=!0;for(var t=e.topLevelSuites(),i=0;i<t.length;i++){var n=t[i];this.suites_.push(this.summarize_(n))}},jasmine.JsApiReporter.prototype.suites=function(){return this.suites_},jasmine.JsApiReporter.prototype.summarize_=function(e){var t=e instanceof jasmine.Suite,i={id:e.id,name:e.description,type:t?"suite":"spec",children:[]};if(t)for(var n=e.children(),r=0;r<n.length;r++)i.children.push(this.summarize_(n[r]));return i},jasmine.JsApiReporter.prototype.results=function(){return this.results_},jasmine.JsApiReporter.prototype.resultsForSpec=function(e){return this.results_[e]},jasmine.JsApiReporter.prototype.reportRunnerResults=function(e){this.finished=!0},jasmine.JsApiReporter.prototype.reportSuiteResults=function(e){},jasmine.JsApiReporter.prototype.reportSpecResults=function(e){this.results_[e.id]={messages:e.results().getItems(),result:e.results().failedCount>0?"failed":"passed"}},jasmine.JsApiReporter.prototype.log=function(e){},jasmine.JsApiReporter.prototype.resultsForSpecs=function(e){for(var t={},i=0;i<e.length;i++){var n=e[i];t[n]=this.summarizeResult_(this.results_[n])}return t},jasmine.JsApiReporter.prototype.summarizeResult_=function(e){for(var t=[],i=e.messages.length,n=0;n<i;n++){var r=e.messages[n];t.push({text:"log"==r.type?r.toString():jasmine.undefined,passed:!r.passed||r.passed(),type:r.type,message:r.message,trace:{stack:r.passed&&!r.passed()?r.trace.stack:jasmine.undefined}})}return{result:e.result,messages:t}},jasmine.Matchers=function(e,t,i,n){this.env=e,this.actual=t,this.spec=i,this.isNot=n||!1,this.reportWasCalled_=!1},jasmine.Matchers.pp=function(e){throw new Error("jasmine.Matchers.pp() is no longer supported, please use jasmine.pp() instead!")},jasmine.Matchers.prototype.report=function(e,t,i){throw new Error("As of jasmine 0.11, custom matchers must be implemented differently -- please see jasmine docs")},jasmine.Matchers.wrapInto_=function(e,t){for(var i in e)if("report"!=i){var n=e[i];t.prototype[i]=jasmine.Matchers.matcherFn_(i,n)}},jasmine.Matchers.matcherFn_=function(e,t){return function(){var i=jasmine.util.argsToArray(arguments),n=t.apply(this,arguments);if(this.isNot&&(n=!n),this.reportWasCalled_)return n;var r;if(!n)if(this.message)r=this.message.apply(this,arguments),jasmine.isArray_(r)&&(r=r[this.isNot?1:0]);else{var s=e.replace(/[A-Z]/g,function(e){return" "+e.toLowerCase()});if(r="Expected "+jasmine.pp(this.actual)+(this.isNot?" not ":" ")+s,i.length>0)for(var o=0;o<i.length;o++)o>0&&(r+=","),r+=" "+jasmine.pp(i[o]);r+="."}var a=new jasmine.ExpectationResult({matcherName:e,passed:n,expected:i.length>1?i:i[0],actual:this.actual,message:r});return this.spec.addMatcherResult(a),jasmine.undefined}},jasmine.Matchers.prototype.toBe=function(e){return this.actual===e},jasmine.Matchers.prototype.toNotBe=function(e){return this.actual!==e},jasmine.Matchers.prototype.toEqual=function(e){return this.env.equals_(this.actual,e)},jasmine.Matchers.prototype.toNotEqual=function(e){return!this.env.equals_(this.actual,e)},jasmine.Matchers.prototype.toMatch=function(e){return new RegExp(e).test(this.actual)},jasmine.Matchers.prototype.toNotMatch=function(e){return!new RegExp(e).test(this.actual)},jasmine.Matchers.prototype.toBeDefined=function(){return this.actual!==jasmine.undefined},jasmine.Matchers.prototype.toBeUndefined=function(){return this.actual===jasmine.undefined},jasmine.Matchers.prototype.toBeNull=function(){return null===this.actual},jasmine.Matchers.prototype.toBeNaN=function(){return this.message=function(){return["Expected "+jasmine.pp(this.actual)+" to be NaN."]},this.actual!==this.actual},jasmine.Matchers.prototype.toBeTruthy=function(){return!!this.actual},jasmine.Matchers.prototype.toBeFalsy=function(){return!this.actual},jasmine.Matchers.prototype.toHaveBeenCalled=function(){if(arguments.length>0)throw new Error("toHaveBeenCalled does not take arguments, use toHaveBeenCalledWith");if(!jasmine.isSpy(this.actual))throw new Error("Expected a spy, but got "+jasmine.pp(this.actual)+".");return this.message=function(){return["Expected spy "+this.actual.identity+" to have been called.","Expected spy "+this.actual.identity+" not to have been called."]},this.actual.wasCalled},jasmine.Matchers.prototype.wasCalled=jasmine.Matchers.prototype.toHaveBeenCalled,jasmine.Matchers.prototype.wasNotCalled=function(){if(arguments.length>0)throw new Error("wasNotCalled does not take arguments");if(!jasmine.isSpy(this.actual))throw new Error("Expected a spy, but got "+jasmine.pp(this.actual)+".");return this.message=function(){return["Expected spy "+this.actual.identity+" to not have been called.","Expected spy "+this.actual.identity+" to have been called."]},!this.actual.wasCalled},jasmine.Matchers.prototype.toHaveBeenCalledWith=function(){var e=jasmine.util.argsToArray(arguments);if(!jasmine.isSpy(this.actual))throw new Error("Expected a spy, but got "+jasmine.pp(this.actual)+".");return this.message=function(){var t="Expected spy "+this.actual.identity+" not to have been called with "+jasmine.pp(e)+" but it was.",i="";return i=0===this.actual.callCount?"Expected spy "+this.actual.identity+" to have been called with "+jasmine.pp(e)+" but it was never called.":"Expected spy "+this.actual.identity+" to have been called with "+jasmine.pp(e)+" but actual calls were "+jasmine.pp(this.actual.argsForCall).replace(/^\[ | \]$/g,""),[i,t]},this.env.contains_(this.actual.argsForCall,e)},jasmine.Matchers.prototype.wasCalledWith=jasmine.Matchers.prototype.toHaveBeenCalledWith,jasmine.Matchers.prototype.wasNotCalledWith=function(){var e=jasmine.util.argsToArray(arguments);if(!jasmine.isSpy(this.actual))throw new Error("Expected a spy, but got "+jasmine.pp(this.actual)+".");return this.message=function(){return["Expected spy not to have been called with "+jasmine.pp(e)+" but it was","Expected spy to have been called with "+jasmine.pp(e)+" but it was"]},!this.env.contains_(this.actual.argsForCall,e)},jasmine.Matchers.prototype.toContain=function(e){return this.env.contains_(this.actual,e)},jasmine.Matchers.prototype.toNotContain=function(e){return!this.env.contains_(this.actual,e)},jasmine.Matchers.prototype.toBeLessThan=function(e){return this.actual<e},jasmine.Matchers.prototype.toBeGreaterThan=function(e){return this.actual>e},jasmine.Matchers.prototype.toBeCloseTo=function(e,t){return 0!==t&&(t=t||2),Math.abs(e-this.actual)<Math.pow(10,-t)/2},jasmine.Matchers.prototype.toThrow=function(e){var t,i=!1;if("function"!=typeof this.actual)throw new Error("Actual is not a function");try{this.actual()}catch(n){t=n}t&&(i=e===jasmine.undefined||this.env.equals_(t.message||t,e.message||e));var r=this.isNot?"not ":"";return this.message=function(){return!t||e!==jasmine.undefined&&this.env.equals_(t.message||t,e.message||e)?"Expected function to throw an exception.":["Expected function "+r+"to throw",e?e.message||e:"an exception",", but it threw",t.message||t].join(" ")},i},jasmine.Matchers.Any=function(e){this.expectedClass=e},jasmine.Matchers.Any.prototype.jasmineMatches=function(e){return this.expectedClass==String?"string"==typeof e||e instanceof String:this.expectedClass==Number?"number"==typeof e||e instanceof Number:this.expectedClass==Function?"function"==typeof e||e instanceof Function:this.expectedClass==Object?"object"==typeof e:e instanceof this.expectedClass},jasmine.Matchers.Any.prototype.jasmineToString=function(){return"<jasmine.any("+this.expectedClass+")>"},jasmine.Matchers.ObjectContaining=function(e){this.sample=e},jasmine.Matchers.ObjectContaining.prototype.jasmineMatches=function(e,t,i){t=t||[],i=i||[];var n=jasmine.getEnv(),r=function(e,t){return null!=e&&e[t]!==jasmine.undefined};for(var s in this.sample)!r(e,s)&&r(this.sample,s)?t.push("expected has key '"+s+"', but missing from actual."):n.equals_(this.sample[s],e[s],t,i)||i.push("'"+s+"' was '"+(e[s]?jasmine.util.htmlEscape(e[s].toString()):e[s])+"' in expected, but was '"+(this.sample[s]?jasmine.util.htmlEscape(this.sample[s].toString()):this.sample[s])+"' in actual.");return 0===t.length&&0===i.length},jasmine.Matchers.ObjectContaining.prototype.jasmineToString=function(){return"<jasmine.objectContaining("+jasmine.pp(this.sample)+")>"},jasmine.FakeTimer=function(){this.reset();var e=this;e.setTimeout=function(t,i){return e.timeoutsMade++,e.scheduleFunction(e.timeoutsMade,t,i,!1),e.timeoutsMade},e.setInterval=function(t,i){return e.timeoutsMade++,e.scheduleFunction(e.timeoutsMade,t,i,!0),e.timeoutsMade},e.clearTimeout=function(t){e.scheduledFunctions[t]=jasmine.undefined},e.clearInterval=function(t){e.scheduledFunctions[t]=jasmine.undefined}},jasmine.FakeTimer.prototype.reset=function(){this.timeoutsMade=0,this.scheduledFunctions={},this.nowMillis=0},jasmine.FakeTimer.prototype.tick=function(e){var t=this.nowMillis,i=t+e;this.runFunctionsWithinRange(t,i),this.nowMillis=i},jasmine.FakeTimer.prototype.runFunctionsWithinRange=function(e,t){var i,n=[];for(var r in this.scheduledFunctions)i=this.scheduledFunctions[r],i!=jasmine.undefined&&i.runAtMillis>=e&&i.runAtMillis<=t&&(n.push(i),this.scheduledFunctions[r]=jasmine.undefined);if(n.length>0){n.sort(function(e,t){return e.runAtMillis-t.runAtMillis});for(var s=0;s<n.length;++s)try{var o=n[s];this.nowMillis=o.runAtMillis,o.funcToCall(),o.recurring&&this.scheduleFunction(o.timeoutKey,o.funcToCall,o.millis,!0)}catch(a){}this.runFunctionsWithinRange(e,t)}},jasmine.FakeTimer.prototype.scheduleFunction=function(e,t,i,n){this.scheduledFunctions[e]={runAtMillis:this.nowMillis+i,funcToCall:t,recurring:n,timeoutKey:e,millis:i}},jasmine.Clock={defaultFakeTimer:new jasmine.FakeTimer,reset:function(){jasmine.Clock.assertInstalled(),jasmine.Clock.defaultFakeTimer.reset()},tick:function(e){jasmine.Clock.assertInstalled(),jasmine.Clock.defaultFakeTimer.tick(e)},runFunctionsWithinRange:function(e,t){jasmine.Clock.defaultFakeTimer.runFunctionsWithinRange(e,t)},scheduleFunction:function(e,t,i,n){jasmine.Clock.defaultFakeTimer.scheduleFunction(e,t,i,n)},useMock:function(){if(!jasmine.Clock.isInstalled()){var e=jasmine.getEnv().currentSpec;e.after(jasmine.Clock.uninstallMock),jasmine.Clock.installMock()}},installMock:function(){jasmine.Clock.installed=jasmine.Clock.defaultFakeTimer},uninstallMock:function(){jasmine.Clock.assertInstalled(),jasmine.Clock.installed=jasmine.Clock.real},real:{setTimeout:jasmine.getGlobal().setTimeout,clearTimeout:jasmine.getGlobal().clearTimeout,setInterval:jasmine.getGlobal().setInterval,clearInterval:jasmine.getGlobal().clearInterval},assertInstalled:function(){if(!jasmine.Clock.isInstalled())throw new Error("Mock clock is not installed, use jasmine.Clock.useMock()")},isInstalled:function(){return jasmine.Clock.installed==jasmine.Clock.defaultFakeTimer},installed:null},jasmine.Clock.installed=jasmine.Clock.real,jasmine.getGlobal().setTimeout=function(e,t){return jasmine.Clock.installed.setTimeout.apply?jasmine.Clock.installed.setTimeout.apply(this,arguments):jasmine.Clock.installed.setTimeout(e,t)},jasmine.getGlobal().setInterval=function(e,t){return jasmine.Clock.installed.setInterval.apply?jasmine.Clock.installed.setInterval.apply(this,arguments):jasmine.Clock.installed.setInterval(e,t)},jasmine.getGlobal().clearTimeout=function(e){return jasmine.Clock.installed.clearTimeout.apply?jasmine.Clock.installed.clearTimeout.apply(this,arguments):jasmine.Clock.installed.clearTimeout(e)},jasmine.getGlobal().clearInterval=function(e){return jasmine.Clock.installed.clearTimeout.apply?jasmine.Clock.installed.clearInterval.apply(this,arguments):jasmine.Clock.installed.clearInterval(e)},jasmine.MultiReporter=function(){this.subReporters_=[]},jasmine.util.inherit(jasmine.MultiReporter,jasmine.Reporter),jasmine.MultiReporter.prototype.addReporter=function(e){this.subReporters_.push(e)},function(){for(var e=["reportRunnerStarting","reportRunnerResults","reportSuiteResults","reportSpecStarting","reportSpecResults","log"],t=0;t<e.length;t++){var i=e[t];jasmine.MultiReporter.prototype[i]=function(e){return function(){for(var t=0;t<this.subReporters_.length;t++){var i=this.subReporters_[t];i[e]&&i[e].apply(i,arguments)}}}(i)}}(),jasmine.NestedResults=function(){this.totalCount=0,this.passedCount=0,this.failedCount=0,this.skipped=!1,this.items_=[]},jasmine.NestedResults.prototype.rollupCounts=function(e){this.totalCount+=e.totalCount,this.passedCount+=e.passedCount,this.failedCount+=e.failedCount},jasmine.NestedResults.prototype.log=function(e){this.items_.push(new jasmine.MessageResult(e))},jasmine.NestedResults.prototype.getItems=function(){return this.items_},jasmine.NestedResults.prototype.addResult=function(e){"log"!=e.type&&(e.items_?this.rollupCounts(e):(this.totalCount++,e.passed()?this.passedCount++:this.failedCount++)),this.items_.push(e)},jasmine.NestedResults.prototype.passed=function(){return this.passedCount===this.totalCount},jasmine.PrettyPrinter=function(){this.ppNestLevel_=0},jasmine.PrettyPrinter.prototype.format=function(e){this.ppNestLevel_++;try{e===jasmine.undefined?this.emitScalar("undefined"):null===e?this.emitScalar("null"):e===jasmine.getGlobal()?this.emitScalar("<global>"):e.jasmineToString?this.emitScalar(e.jasmineToString()):"string"==typeof e?this.emitString(e):jasmine.isSpy(e)?this.emitScalar("spy on "+e.identity):e instanceof RegExp?this.emitScalar(e.toString()):"function"==typeof e?this.emitScalar("Function"):"number"==typeof e.nodeType?this.emitScalar("HTMLNode"):e instanceof Date?this.emitScalar("Date("+e+")"):e.__Jasmine_been_here_before__?this.emitScalar("<circular reference: "+(jasmine.isArray_(e)?"Array":"Object")+">"):jasmine.isArray_(e)||"object"==typeof e?(e.__Jasmine_been_here_before__=!0,jasmine.isArray_(e)?this.emitArray(e):this.emitObject(e),delete e.__Jasmine_been_here_before__):this.emitScalar(e.toString())}finally{this.ppNestLevel_--}},jasmine.PrettyPrinter.prototype.iterateObject=function(e,t){for(var i in e)e.hasOwnProperty(i)&&"__Jasmine_been_here_before__"!=i&&t(i,!!e.__lookupGetter__&&(e.__lookupGetter__(i)!==jasmine.undefined&&null!==e.__lookupGetter__(i)))},jasmine.PrettyPrinter.prototype.emitArray=jasmine.unimplementedMethod_,jasmine.PrettyPrinter.prototype.emitObject=jasmine.unimplementedMethod_,jasmine.PrettyPrinter.prototype.emitScalar=jasmine.unimplementedMethod_,jasmine.PrettyPrinter.prototype.emitString=jasmine.unimplementedMethod_,jasmine.StringPrettyPrinter=function(){jasmine.PrettyPrinter.call(this),this.string=""},jasmine.util.inherit(jasmine.StringPrettyPrinter,jasmine.PrettyPrinter),jasmine.StringPrettyPrinter.prototype.emitScalar=function(e){this.append(e)},jasmine.StringPrettyPrinter.prototype.emitString=function(e){this.append("'"+e+"'")},jasmine.StringPrettyPrinter.prototype.emitArray=function(e){if(this.ppNestLevel_>jasmine.MAX_PRETTY_PRINT_DEPTH)return void this.append("Array");this.append("[ ");for(var t=0;t<e.length;t++)t>0&&this.append(", "),this.format(e[t]);this.append(" ]")},jasmine.StringPrettyPrinter.prototype.emitObject=function(e){if(this.ppNestLevel_>jasmine.MAX_PRETTY_PRINT_DEPTH)return void this.append("Object");var t=this;this.append("{ ");var i=!0;this.iterateObject(e,function(n,r){i?i=!1:t.append(", "),t.append(n),t.append(" : "),r?t.append("<getter>"):t.format(e[n])}),this.append(" }")},jasmine.StringPrettyPrinter.prototype.append=function(e){this.string+=e},jasmine.Queue=function(e){this.env=e,this.ensured=[],this.blocks=[],this.running=!1,this.index=0,this.offset=0,this.abort=!1},jasmine.Queue.prototype.addBefore=function(e,t){t===jasmine.undefined&&(t=!1),this.blocks.unshift(e),this.ensured.unshift(t)},jasmine.Queue.prototype.add=function(e,t){t===jasmine.undefined&&(t=!1),this.blocks.push(e),this.ensured.push(t)},jasmine.Queue.prototype.insertNext=function(e,t){t===jasmine.undefined&&(t=!1),this.ensured.splice(this.index+this.offset+1,0,t),this.blocks.splice(this.index+this.offset+1,0,e),this.offset++},jasmine.Queue.prototype.start=function(e){this.running=!0,this.onComplete=e,this.next_()},jasmine.Queue.prototype.isRunning=function(){return this.running},jasmine.Queue.LOOP_DONT_RECURSE=!0,jasmine.Queue.prototype.next_=function(){for(var e=this,t=!0;t;)if(t=!1,e.index<e.blocks.length&&(!this.abort||this.ensured[e.index])){var i=!0,n=!1,r=function(){if(jasmine.Queue.LOOP_DONT_RECURSE&&i)return void(n=!0);e.blocks[e.index].abort&&(e.abort=!0),e.offset=0,e.index++;var r=(new Date).getTime();e.env.updateInterval&&r-e.env.lastUpdate>e.env.updateInterval?(e.env.lastUpdate=r,e.env.setTimeout(function(){e.next_()},0)):jasmine.Queue.LOOP_DONT_RECURSE&&n?t=!0:e.next_()};e.blocks[e.index].execute(r),i=!1,n&&r()}else e.running=!1,e.onComplete&&e.onComplete()},jasmine.Queue.prototype.results=function(){for(var e=new jasmine.NestedResults,t=0;t<this.blocks.length;t++)this.blocks[t].results&&e.addResult(this.blocks[t].results());return e},jasmine.Runner=function(e){var t=this;t.env=e,t.queue=new jasmine.Queue(e),t.before_=[],t.after_=[],t.suites_=[]},jasmine.Runner.prototype.execute=function(){var e=this;e.env.reporter.reportRunnerStarting&&e.env.reporter.reportRunnerStarting(this),e.queue.start(function(){e.finishCallback()})},jasmine.Runner.prototype.beforeEach=function(e){e.typeName="beforeEach",this.before_.splice(0,0,e)},jasmine.Runner.prototype.afterEach=function(e){e.typeName="afterEach",this.after_.splice(0,0,e)},jasmine.Runner.prototype.finishCallback=function(){this.env.reporter.reportRunnerResults(this)},jasmine.Runner.prototype.addSuite=function(e){this.suites_.push(e)},jasmine.Runner.prototype.add=function(e){e instanceof jasmine.Suite&&this.addSuite(e),this.queue.add(e)},jasmine.Runner.prototype.specs=function(){for(var e=this.suites(),t=[],i=0;i<e.length;i++)t=t.concat(e[i].specs());return t},jasmine.Runner.prototype.suites=function(){return this.suites_},jasmine.Runner.prototype.topLevelSuites=function(){for(var e=[],t=0;t<this.suites_.length;t++)this.suites_[t].parentSuite||e.push(this.suites_[t]);return e},jasmine.Runner.prototype.results=function(){return this.queue.results()},jasmine.Spec=function(e,t,i){if(!e)throw new Error("jasmine.Env() required");if(!t)throw new Error("jasmine.Suite() required");var n=this;n.id=e.nextSpecId?e.nextSpecId():null,n.env=e,n.suite=t,n.description=i,n.queue=new jasmine.Queue(e),n.afterCallbacks=[],n.spies_=[],n.results_=new jasmine.NestedResults,n.results_.description=i,n.matchersClass=null,n.exclusive_=t.exclusive_},jasmine.Spec.prototype.getFullName=function(){return this.suite.getFullName()+" "+this.description+"."},jasmine.Spec.prototype.results=function(){return this.results_},jasmine.Spec.prototype.log=function(){return this.results_.log(arguments)},jasmine.Spec.prototype.runs=function(e){var t=new jasmine.Block(this.env,e,this);return this.addToQueue(t),this},jasmine.Spec.prototype.addToQueue=function(e){this.queue.isRunning()?this.queue.insertNext(e):this.queue.add(e)},jasmine.Spec.prototype.addMatcherResult=function(e){this.results_.addResult(e)},jasmine.Spec.prototype.expect=function(e){var t=new(this.getMatchersClass_())(this.env,e,this);return t.not=new(this.getMatchersClass_())(this.env,e,this,(!0)),t},jasmine.Spec.prototype.waits=function(e){var t=new jasmine.WaitsBlock(this.env,e,this);return this.addToQueue(t),this},jasmine.Spec.prototype.waitsFor=function(e,t,i){for(var n=null,r=null,s=null,o=0;o<arguments.length;o++){var a=arguments[o];switch(typeof a){case"function":n=a;break;case"string":r=a;break;case"number":s=a}}var l=new jasmine.WaitsForBlock(this.env,s,n,r,this);return this.addToQueue(l),this},jasmine.Spec.prototype.fail=function(e){var t=new jasmine.ExpectationResult({passed:!1,message:e?jasmine.util.formatException(e):"Exception",trace:{stack:e.stack}});this.results_.addResult(t);
},jasmine.Spec.prototype.getMatchersClass_=function(){return this.matchersClass||this.env.matchersClass},jasmine.Spec.prototype.addMatchers=function(e){var t=this.getMatchersClass_(),i=function(){t.apply(this,arguments)};jasmine.util.inherit(i,t),jasmine.Matchers.wrapInto_(e,i),this.matchersClass=i},jasmine.Spec.prototype.finishCallback=function(){this.env.reporter.reportSpecResults(this)},jasmine.Spec.prototype.finish=function(e){this.removeAllSpies(),this.finishCallback(),e&&e()},jasmine.Spec.prototype.after=function(e){this.queue.isRunning()?this.queue.add(new jasmine.Block(this.env,e,this),!0):this.afterCallbacks.unshift(e)},jasmine.Spec.prototype.execute=function(e){var t=this;return t.env.specFilter(t)?(this.env.reporter.reportSpecStarting(this),t.env.currentSpec=t,t.addBeforesAndAftersToQueue(),void t.queue.start(function(){t.finish(e)})):(t.results_.skipped=!0,void t.finish(e))},jasmine.Spec.prototype.addBeforesAndAftersToQueue=function(){for(var e,t=this.env.currentRunner(),i=this.suite;i;i=i.parentSuite)for(e=0;e<i.before_.length;e++)this.queue.addBefore(new jasmine.Block(this.env,i.before_[e],this));for(e=0;e<t.before_.length;e++)this.queue.addBefore(new jasmine.Block(this.env,t.before_[e],this));for(e=0;e<this.afterCallbacks.length;e++)this.queue.add(new jasmine.Block(this.env,this.afterCallbacks[e],this),!0);for(i=this.suite;i;i=i.parentSuite)for(e=0;e<i.after_.length;e++)this.queue.add(new jasmine.Block(this.env,i.after_[e],this),!0);for(e=0;e<t.after_.length;e++)this.queue.add(new jasmine.Block(this.env,t.after_[e],this),!0)},jasmine.Spec.prototype.explodes=function(){throw"explodes function should not have been called"},jasmine.Spec.prototype.spyOn=function(e,t,i){if(e==jasmine.undefined)throw"spyOn could not find an object to spy upon for "+t+"()";if(!i&&e[t]===jasmine.undefined)throw t+"() method does not exist";if(!i&&e[t]&&e[t].isSpy)throw new Error(t+" has already been spied upon");var n=jasmine.createSpy(t);return this.spies_.push(n),n.baseObj=e,n.methodName=t,n.originalValue=e[t],e[t]=n,n},jasmine.Spec.prototype.removeAllSpies=function(){for(var e=0;e<this.spies_.length;e++){var t=this.spies_[e];t.baseObj[t.methodName]=t.originalValue}this.spies_=[]},jasmine.Suite=function(e,t,i,n){var r=this;r.id=e.nextSuiteId?e.nextSuiteId():null,r.description=t,r.queue=new jasmine.Queue(e),r.parentSuite=n,r.env=e,r.before_=[],r.after_=[],r.children_=[],r.suites_=[],r.specs_=[],r.exclusive_=n&&n.exclusive_||0},jasmine.Suite.prototype.getFullName=function(){for(var e=this.description,t=this.parentSuite;t;t=t.parentSuite)e=t.description+" "+e;return e},jasmine.Suite.prototype.finish=function(e){this.env.reporter.reportSuiteResults(this),this.finished=!0,"function"==typeof e&&e()},jasmine.Suite.prototype.beforeEach=function(e){e.typeName="beforeEach",this.before_.unshift(e)},jasmine.Suite.prototype.afterEach=function(e){e.typeName="afterEach",this.after_.unshift(e)},jasmine.Suite.prototype.results=function(){return this.queue.results()},jasmine.Suite.prototype.add=function(e){this.children_.push(e),e instanceof jasmine.Suite?(this.suites_.push(e),this.env.currentRunner().addSuite(e)):this.specs_.push(e),this.queue.add(e)},jasmine.Suite.prototype.specs=function(){return this.specs_},jasmine.Suite.prototype.suites=function(){return this.suites_},jasmine.Suite.prototype.children=function(){return this.children_},jasmine.Suite.prototype.execute=function(e){var t=this;this.queue.start(function(){t.finish(e)})},jasmine.WaitsBlock=function(e,t,i){this.timeout=t,jasmine.Block.call(this,e,null,i)},jasmine.util.inherit(jasmine.WaitsBlock,jasmine.Block),jasmine.WaitsBlock.prototype.execute=function(e){jasmine.VERBOSE&&this.env.reporter.log(">> Jasmine waiting for "+this.timeout+" ms..."),this.env.setTimeout(function(){e()},this.timeout)},jasmine.WaitsForBlock=function(e,t,i,n,r){this.timeout=t||e.defaultTimeoutInterval,this.latchFunction=i,this.message=n,this.totalTimeSpentWaitingForLatch=0,jasmine.Block.call(this,e,null,r)},jasmine.util.inherit(jasmine.WaitsForBlock,jasmine.Block),jasmine.WaitsForBlock.TIMEOUT_INCREMENT=10,jasmine.WaitsForBlock.prototype.execute=function(e){jasmine.VERBOSE&&this.env.reporter.log(">> Jasmine waiting for "+(this.message||"something to happen"));var t;try{t=this.latchFunction.apply(this.spec)}catch(i){return this.spec.fail(i),void e()}if(t)e();else if(this.totalTimeSpentWaitingForLatch>=this.timeout){var n="timed out after "+this.timeout+" msec waiting for "+(this.message||"something to happen");this.spec.fail({name:"timeout",message:n}),this.abort=!0,e()}else{this.totalTimeSpentWaitingForLatch+=jasmine.WaitsForBlock.TIMEOUT_INCREMENT;var r=this;this.env.setTimeout(function(){r.execute(e)},jasmine.WaitsForBlock.TIMEOUT_INCREMENT)}},jasmine.version_={major:1,minor:3,build:1,revision:1354556913};