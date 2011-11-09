(function(c,o,p,z){p.createElement("datalist");var v=c.event.special,G=c([]),i=o.Modernizr,r=i.input||{},E=i.inputtypes||{},I=parseFloat(c.browser.version,10),n=o.Object;(function(){var a=i.addTest,b=c('<form action="#"><input name="a" required /><select><option>y</option></select><input required id="date-input-test" type="date" /></form>');a("formvalidation",function(){return!!("checkValidity"in b[0])});a("datalist",function(){return!!(r.list&&o.HTMLDataListElement)});a("validationmessage",function(){if(!i.formvalidation)return false;
b.appendTo("head");return!!c("input",b).attr("validationMessage")});a("output",function(){return i.formvalidation&&"value"in p.createElement("output")});a("details",function(){return"open"in p.createElement("details")});i.deprecatedSessionstorage=!!(i.sessionstorage&&!("clear"in o.sessionStorage));i.genericDOM=!!c("<video><div></div></video>")[0].innerHTML;i.requiredSelect=!!(i.formvalidation&&"required"in c("select",b)[0]);i.bugfreeformvalidation=i.formvalidation&&i.requiredSelect&&i.validationmessage&&
(!c.browser.webkit||navigator.userAgent.indexOf("hrome")!=-1&&I>534.19);r.valueAsNumber=false;r.valueAsNumberSet=false;r.valueAsDate=false;if(i.formvalidation){a=c("#date-input-test",b)[0];r.valueAsNumber="valueAsNumber"in a;if(r.valueAsNumber){try{a.valueAsNumber=0}catch(d){}r.valueAsNumberSet=a.value=="1970-01-01"}r.valueAsDate="valueAsDate"in a;a=null}if(E.date&&r.valueAsNumber&&!r.valueAsNumberSet)i.bugfreeformvalidation=false;i.formvalidation&&b.remove();b=null;i.ES5base=!!(String.prototype.trim&&
Date.now&&Date.prototype.toISOString);i.ES5extras=!!(Array.isArray&&n.keys&&n.create&&Function.prototype.bind&&n.defineProperties);i.ES5base&&c.each(["filter","map","every","reduce","reduceRight","lastIndexOf"],function(g,f){if(!Array.prototype[f])return i.ES5base=false});var e=!!(n.create&&n.defineProperties&&n.getOwnPropertyDescriptor);!c.browser.msie&&n.defineProperty&&n.prototype.__defineGetter__&&function(){try{var g=p.createElement("foo");n.defineProperty(g,"bar",{get:function(){return true}});
e=!!g.bar}catch(f){e=false}g=null}();i.ES5=i.ES5base&&i.ES5extras&&e;i.objectAccessor=!!((e||n.prototype.__defineGetter__&&n.prototype.__lookupSetter__)&&(!c.browser.opera||I>=11));i.domAccessor=!!(i.objectAccessor||n.defineProperty&&n.getOwnPropertyDescriptor);i.advancedObjectProperties=e})();c.webshims=c.sub?c.sub():{};c.extend(c.webshims,{version:"pre1.6.6",cfg:{useImportantStyles:true,waitReady:true,extendNative:true,loader:{sssl:function(a,b){sssl(a,b)},require:function(a,b){require([a],b)},
yepnope:function(a,b){yepnope({load:a,callback:b})}}},modules:{},features:{},featureList:[],profiles:{lightweight:["es5","json-storage","canvas","geolocation","forms"]},setOptions:function(a,b){if(typeof a=="string"&&b!==z)s[a]=!c.isPlainObject(b)?b:c.extend(true,s[a]||{},b);else typeof a=="object"&&c.extend(true,s,a)},addPolyfill:function(a,b){b=b||{};var d=b.feature||a;if(!y[d]){y[d]=[];h.featureList.push(d);s[d]={}}y[d].push(a);b.options=c.extend(s[d],b.options);F(a,b);if(b.methodNames){if(!c.isArray(b.methodNames))b.methodNames=
[b.methodNames];c.each(b.methodNames,function(e,g){h.addMethodName(g)})}},polyfill:function(){var a=function(b){var d,e=[],g=b,f=function(){c("html").removeClass("loading-polyfills long-loading-polyfills polyfill-remove-fouc");c(o).unbind(".lP");clearTimeout(d)};if(c.isReady)h.warn("You should call $.webshims.polyfill before DOM-Ready");else{if(s.removeFOUC){if(s.waitReady)g=g.concat(["DOM"]);e.push("polyfill-remove-fouc")}e.push("loading-polyfills");c(o).bind("load.lP polyfillloaderror.lP  error.lP",
f);d=setTimeout(function(){c("html").addClass("long-loading-polyfills")},600)}A(b,f);s.useImportantStyles&&e.push("polyfill-important");e[0]&&c("html").addClass(e.join(" "));w.loadCSS("styles/shim.css");a=c.noop;i.genericDOM||c(function(){B(["dom-extend"])})};return function(b,d){if(b&&(b===true||c.isPlainObject(b))){d=b;b=z}var e=[];b=b||h.featureList;if(typeof b=="string")b=h.profiles[b]||b.split(" ");if(s.waitReady){c.readyWait++;A(b,function(){c.ready(true)})}c.each(b,function(g,f){f!==y[f][0]&&
A(y[f],function(){x(f,true)});e=e.concat(y[f])});a(b);B(e,d)}}(),isReady:function(a,b){a+="Ready";if(b){if(v[a]&&v[a].add)return true;v[a]=c.extend(v[a]||{},{add:function(d){d.handler.call(this,c.Event(a))}});c.event.trigger(a)}return!!(v[a]&&v[a].add)||false},ready:function(a,b,d){if(typeof a=="string")a=a.split(" ");d||(a=c.map(c.grep(a,function(e){return!x(e)}),function(e){return e+"Ready"}));if(a.length){d=a.shift();c(p).one(d,function(){A(a,b,true)})}else b(c,h,o,p)},addMethodName:function(a){c.fn[a]&&
"shim"in c.fn[a]||(c.fn[a]=function(){var b=arguments,d;this.each(function(){var e=c.attr(this,a);if(e&&e.apply){d=e.apply(this,b);if(d!==z)return false}});return d!==z?d:this})},fixHTML5:function(a){return a},capturingEvents:function(a,b){if(p.addEventListener){if(typeof a=="string")a=[a];c.each(a,function(d,e){var g=function(f){f=c.event.fix(f);if(b&&!f._isPolyfilled){var l=f.isDefaultPrevented,j=f.preventDefault;f.preventDefault=function(){clearTimeout(c.data(f.target,f.type+"-defaultPrevented"));
c.data(f.target,f.type+"-defaultPrevented",setTimeout(function(){c.removeData(f.target,f.type+"-defaultPrevented")},30));return j.apply(this,arguments)};f.isDefaultPrevented=function(){return!!(l.apply(this,arguments)||c.data(f.target,f.type+"-defaultPrevented")||false)};f._isPolyfilled=true}return c.event.handle.call(this,f)};v[e]=v[e]||{};v[e].setup||v[e].teardown||c.extend(v[e],{setup:function(){this.addEventListener(e,g,true)},teardown:function(){this.removeEventListener(e,g,true)}})})}},register:function(a,
b){var d=t[a];if(d){if(d.noAutoCallback){var e=function(){b(c,h,o,p,z,d.options);x(a,true)};d.dependencies?A(d.dependencies,e):e()}}else h.warn("can't find module: "+a)},loader:{basePath:function(){var a=c('meta[name="polyfill-path"]').attr("content");if(!a){a=c("script").filter('[src$="polyfiller.js"]');a=a[0]||a.end()[a.end().length-1];a=(!c.browser.msie||p.documentMode>=8?a.src:a.getAttribute("src",4)).split("?")[0];a=a.slice(0,a.lastIndexOf("/")+1)+"shims/"}return a}(),addModule:function(a,b){t[a]=
b;b.name=b.name||a},loadList:function(){var a=[],b=function(l,j){if(typeof j=="string")j=[j];c.merge(a,j);w.loadScript(l,false,j)},d=function(l,j){if(x(l)||c.inArray(l,a)!=-1)return true;var k=t[l];if(k)if(k=k.test&&c.isFunction(k.test)?k.test(j):k.test){x(l,true);return true}else return false;return true},e=function(l,j){if(l.dependencies&&l.dependencies.length){var k=function(q,m){!d(m,j)&&c.inArray(m,j)==-1&&j.push(m)};c.each(l.dependencies,function(q,m){if(t[m])k(q,m);else if(y[m]){c.each(y[m],
k);A(y[m],function(){x(m,true)})}});if(!l.noAutoCallback)l.noAutoCallback=true}},g=/\.\/|\/\//,f=function(l,j){var k=[],q=[],m=0,J=location;j=c.extend({seperator:",",base:"/min/f=",maxFiles:10,scriptPath:w.basePath.replace(J.protocol+"//"+J.host+"/",""),fn:function(K,C,D,L){return K+c.map(L,function(M){return C+M}).join(D)}},typeof j=="object"?j:{});c.each(l,function(K,C){if(c.inArray(C,a)==-1){var D=t[C].src||C;if(D.indexOf(".")==-1)D+=".js";if(g.test(D))b(D,C);else{m++;k.push(D);q.push(C);if(m>=
j.maxFiles){b(j.fn(j.base,j.scriptPath,j.seperator,k),q);k=[];q=[];m=0}}}});k.length&&b(j.fn(j.base,j.scriptPath,j.seperator,k),q)};return function(l,j){for(var k,q=[],m=0;m<l.length;m++){k=t[l[m]];if(!k||d(k.name,l))k||h.warn("could not find: "+l[m]);else{k.css&&w.loadCSS(k.css);k.loadInit&&k.loadInit();k.loaded=true;e(k,l);j?q.push(k.name):b(k.src||k.name,k.name)}}j&&f(q,j)}}(),makePath:function(a){if(a.indexOf("//")!=-1||a.indexOf("/")===0)return a;if(a.indexOf(".")==-1)a+=".js";if(s.addCacheBuster)a+=
s.addCacheBuster;return w.basePath+a},loadCSS:function(){var a,b=[];return function(d){d=this.makePath(d);if(c.inArray(d,b)==-1){a=a||p.getElementsByTagName("script")[0];b.push(d);c('<link rel="stylesheet" />').insertBefore(a).attr({href:d})}}}(),loadScript:function(){var a=[],b;return function(d,e,g){d=w.makePath(d);if(c.inArray(d,a)==-1){var f=G,l,j=function(){c(o).triggerHandler("polyfillloaderror");h.warn('Error: could not find "'+d+'" | configure polyfill-path: $.webshims.loader.basePath = "path/to/shims-folder"');
k()},k=function(){clearTimeout(l);f.unbind("error",j);f=j=k=null;e&&e();if(g){if(typeof g=="string")g=g.split(" ");c.each(g,function(q,m){if(t[m]){t[m].afterLoad&&t[m].afterLoad();x(!t[m].noAutoCallback?m:m+"FileLoaded",true)}})}};a.push(d);b||c.each(s.loader,function(q,m){if(o[q]){b=m;return false}});if(b){b(d,k);if(h.debug!==false){setTimeout(function(){f=c('script[src="'+d+'"]').bind("error",j)},0);l=setTimeout(j,15E3)}}else h.warn("you need to include a scriptloader")}}}()}});var h=c.webshims,
H=(location.protocol=="https:"?"https://":"http://")+"ajax.googleapis.com/ajax/libs/",s=h.cfg,y=h.features,x=h.isReady,A=h.ready,u=h.addPolyfill,t=h.modules,w=h.loader,B=w.loadList,F=w.addModule,N={warn:1,error:1},O={cache:true,dataType:"text",error:function(a,b){h.warn("error with: "+this.url+" | "+b)}};h.activeLang=function(){var a=navigator.browserLanguage||navigator.language||"";A("webshimLocalization",function(){h.activeLang(a)});return function(b){if(b){if(typeof b=="string")a=b;else if(typeof b==
"object"){var d=arguments,e=this;A("webshimLocalization",function(){h.activeLang.apply(e,d)})}B(["dom-extend"])}return a}}();c.each(["log","error","warn","info"],function(a,b){h[b]=function(d){if((N[b]&&h.debug!==false||h.debug)&&o.console&&console.log)return console[console[b]?b:"log"](d)}});c.prop&&c.fn.prop&&h.warn("webshims 1.6.x does not work with jQuery 1.6+. Please use webshims lib 1.7+");(function(){c.isDOMReady=c.isReady;if(c.isDOMReady)x("DOM",true);else{var a=c.ready;c.ready=function(b){if(b!==
true&&!c.isDOMReady)if(p.body){c.isDOMReady=true;x("DOM",true);c.ready=a}else setTimeout(function(){c.ready(b)},13);return a.apply(this,arguments)}}})();(function(){var a=[];c.extend(h,{addReady:function(b){var d=function(e,g){h.ready("DOM",function(){b(e,g)})};a.push(d);d(p,G)},triggerDomUpdate:function(b){if(b&&b.nodeType){var d=b.nodeType;if(!(d!=1&&d!=9)){var e=b!==p?c(b):G;c.each(a,function(g,f){f(b,e)})}}}});c.fn.htmlWebshim=function(b){b=c.fn.html.call(this,b?h.fixHTML5(b):b);b===this&&c.isDOMReady&&
this.each(function(){this.nodeType==1&&h.triggerDomUpdate(this)});return b};if(h.fn)h.fn.html=c.fn.htmlWebshim;c.each(["after","before","append","prepend","replaceWith"],function(b,d){c.fn[d+"Webshim"]=function(e){e=c(h.fixHTML5(e));c.fn[d].call(this,e);c.isDOMReady&&e.each(function(){this.nodeType==1&&h.triggerDomUpdate(this)});return this};if(h.fn)h.fn[d]=c.fn[d+"Webshim"]})})();(function(){var a=n.prototype.hasOwnProperty,b=["configurable","enumerable","writable"],d=function(g){for(var f=0;f<3;f++)if(g[b[f]]===
z&&(b[f]!=="writable"||g.value!==z))g[b[f]]=true},e=function(g){if(g)for(var f in g)a.call(g,f)&&d(g[f])};if(n.create)h.objectCreate=function(g,f,l){e(f);g=n.create(g,f);if(l){g.options=c.extend(true,{},g.options||{},l);l=g.options}g._create&&c.isFunction(g._create)&&g._create(l);return g};if(n.defineProperty)h.defineProperty=function(g,f,l){d(l);return n.defineProperty(g,f,l)};if(n.defineProperties)h.defineProperties=function(g,f){e(f);return n.defineProperties(g,f)};h.getOwnPropertyDescriptor=n.getOwnPropertyDescriptor;
h.getPrototypeOf=n.getPrototypeOf})();F("jquery-ui",{src:H+"jqueryui/1.8.11/jquery-ui.min.js",test:function(){return!!(c.widget&&c.Widget)}});F("input-widgets",{src:"",test:function(){var a=!(c.widget&&!(c.fn.datepicker||c.fn.slider));if(!this.src){a||h.warn('jQuery UI Widget factory is already included, but not datepicker or slider. configure src of $.webshims.modules["input-widgets"].src');return true}return a}});F("swfobject",{src:H+"swfobject/2.2/swfobject.js",test:function(){return"swfobject"in
o}});u("es5",{test:i.ES5});u("dom-extend",{feature:"dom-support",noAutoCallback:true,dependencies:["es5"]});u("json-storage",{test:i.localstorage&&"sessionStorage"in o&&"JSON"in o,loadInit:function(){B(["swfobject"])},noAutoCallback:true});u("geolocation",{test:i.geolocation,options:{destroyWrite:true,confirmText:""},dependencies:["json-storage"]});(function(){var a;u("canvas",{src:"excanvas",test:i.canvas,options:{type:"excanvas"},noAutoCallback:true,loadInit:function(){var b=this.options.type;if(b&&
b.indexOf("flash")!==-1&&(!o.swfobject||swfobject.hasFlashPlayerVersion("9.0.0"))){o.FlashCanvasOptions=o.FlashCanvasOptions||{};a=FlashCanvasOptions;if(b=="flash"){c.extend(a,{swfPath:w.basePath+"FlashCanvas/"});this.src="FlashCanvas/flashcanvas";b=a.swfPath+"flashcanvas.swf"}else{c.extend(a,{swfPath:w.basePath+"FlashCanvasPro/"});this.src="FlashCanvasPro/flashcanvas";b=a.swfPath+"flash10canvas.swf"}b&&c.ajax(b,O)}},afterLoad:function(){h.addReady(function(b,d){c("canvas",b).add(d.filter("canvas")).each(function(){this.getContext||
G_vmlCanvasManager.initElement(this)})});x("canvas",true)},methodNames:["getContext"],dependencies:["es5","dom-support"]})})();h.validationMessages=h.validityMessages=[];h.inputTypes={};u("form-core",{feature:"forms",dependencies:i.validationmessage?["es5"]:["es5","dom-extend"],loadInit:function(){this.options.customMessages&&i.validationmessage&&B(["dom-extend"])},options:{placeholderType:"value"},methodNames:["setCustomValidity","checkValidity"]});if(i.formvalidation){h.capturingEvents(["input"]);
h.capturingEvents(["invalid"],true);u("form-extend",{feature:"forms",src:"form-native-extend",test:function(a){return i.bugfreeformvalidation&&(t["forms-ext"].test(a)||c.inArray("forms-ext",a)==-1)&&!this.options.overrideMessages},dependencies:["form-core","dom-support"]});u("form-native-fix",{feature:"forms",test:i.bugfreeformvalidation,dependencies:["form-extend"]});u("form-output-datalist",{feature:"forms",test:function(){var a=i.datalist&&r.list;if(a&&c(p.createElement("input")).attr("list")===
null){var b=c.attr;c.attr=function(d,e,g){if(e=="list"&&d&&(d.nodeName||"").toLowerCase()=="input")if(g!==z)d.setAttribute(e,g);else return d.getAttribute(e);return b.apply(this,arguments)}}return i.output&&a},dependencies:["dom-support"]})}else u("form-extend",{feature:"forms",src:"form-shim-all",dependencies:["form-core","dom-support"]});u("forms-ext",{src:"form-number-date",uiTest:function(){return E.range&&E.date&&E.time&&E.number&&!this.options.replaceUI},test:function(){return r.valueAsNumberSet&&
this.uiTest()},noAutoCallback:true,dependencies:["forms"],loadInit:function(){if(!this.uiTest()){B(["jquery-ui"]);t["input-widgets"].src&&B(["input-widgets"])}},options:{stepArrows:{number:1,time:1},calculateWidth:true,slider:{},datepicker:{},langSrc:H+"jqueryui/1.8.11/i18n/jquery.ui.datepicker-",recalcWidth:true,lazyDate:true}});u("details",{test:i.details,dependencies:["dom-support"],options:{text:"Details"}})})(jQuery,this,this.document);
