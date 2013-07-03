webshims.register("dom-extend",function(e,t,i,r,n){"use strict";if(t.assumeARIA=e.support.getSetAttribute||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),e.parseHTML||t.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims."),1===t.cfg.extendNative&&t.warn("extendNative configuration will be set to false by default with next release. In case you rely on it set it to 'true' otherwise to 'false'. See http://bit.ly/16OOTQO"),!t.cfg.no$Switch){var a=function(){if(!i.jQuery||i.$&&i.jQuery!=i.$||i.jQuery.webshims||(t.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly. Or set webshims.cfg.no$Switch to 'true'."),i.$&&(i.$=t.$),i.jQuery=t.$),t.M!=Modernizr){t.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var e in Modernizr)e in t.M||(t.M[e]=Modernizr[e]);Modernizr=t.M}};a(),setTimeout(a,90),t.ready("DOM",a),e(a),t.ready("WINDOWLOAD",a)}var o=t.modules,s=/\s*,\s*/,l={},u={},c={},d={},p={},f=e.fn.val,h=function(t,i,r,n,a){return a?f.call(e(t)):f.call(e(t),r)};e.widget||function(){var t=e.cleanData;e.cleanData=function(i){if(!e.widget)for(var r,n=0;null!=(r=i[n]);n++)try{e(r).triggerHandler("remove")}catch(a){}t(i)}}(),e.fn.val=function(t){var i=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return i&&1===i.nodeType?e.prop(i,"value",t,"val",!0):f.call(this);if(e.isArray(t))return f.apply(this,arguments);var r=e.isFunction(t);return this.each(function(a){if(i=this,1===i.nodeType)if(r){var o=t.call(i,a,e.prop(i,"value",n,"val",!0));null==o&&(o=""),e.prop(i,"value",o,"val")}else e.prop(i,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.onWSOff=function(t,i,n,a){return a||(a=r),e(a)[n?"onTrigger":"on"](t,i),this.on("remove",function(r){r.originalEvent||e(a).off(t,i)}),this};var m="_webshimsLib"+Math.round(1e3*Math.random()),v=function(t,i,r){if(t=t.jquery?t[0]:t,!t)return r||{};var a=e.data(t,m);return r!==n&&(a||(a=e.data(t,m,{})),i&&(a[i]=r)),i?a&&a[i]:a};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){var i=[];return this.each(function(){var r=v(this,"shadowData"),n=r&&r[t.prop]||this;-1==e.inArray(n,i)&&i.push(n)}),this.pushStack(i)}}),["removeAttr","prop","attr"].forEach(function(i){l[i]=e[i],e[i]=function(t,r,a,o,s){var d="val"==o,f=d?h:l[i];if(!t||!u[r]||1!==t.nodeType||!d&&o&&"attr"==i&&e.attrFn[r])return f(t,r,a,o,s);var m,v,g,y=(t.nodeName||"").toLowerCase(),b=c[y],w="attr"!=i||a!==!1&&null!==a?i:"removeAttr";if(b||(b=c["*"]),b&&(b=b[r]),b&&(m=b[w]),m){if("value"==r&&(v=m.isVal,m.isVal=d),"removeAttr"===w)return m.value.call(t);if(a===n)return m.get?m.get.call(t):m.value;m.set&&("attr"==i&&a===!0&&(a=r),g=m.set.call(t,a)),"value"==r&&(m.isVal=v)}else g=f(t,r,a,o,s);if((a!==n||"removeAttr"===w)&&p[y]&&p[y][r]){var T;T="removeAttr"==w?!1:"prop"==w?!!a:!0,p[y][r].forEach(function(e){(!e.only||(e.only="prop"&&"prop"==i)||"attr"==e.only&&"prop"!=i)&&e.call(t,a,T,d?"val":w,i)})}return g},d[i]=function(e,r,a){c[e]||(c[e]={}),c[e][r]||(c[e][r]={});var o=c[e][r][i],s=function(e,t,n){return t&&t[e]?t[e]:n&&n[e]?n[e]:"prop"==i&&"value"==r?function(e){var t=this;return a.isVal?h(t,r,e,!1,0===arguments.length):l[i](t,r,e)}:"prop"==i&&"value"==e&&a.value.apply?function(){var e=l[i](this,r);return e&&e.apply&&(e=e.apply(this,arguments)),e}:function(e){return l[i](this,r,e)}};c[e][r][i]=a,a.value===n&&(a.set||(a.set=a.writeable?s("set",a,o):t.cfg.useStrict&&"prop"==r?function(){throw r+" is readonly on "+e}:function(){t.info(r+" is readonly on "+e)}),a.get||(a.get=s("get",a,o))),["value","get","set"].forEach(function(e){a[e]&&(a["_sup"+e]=s(e,o))})}});var g=function(){var e=t.getPrototypeOf(r.createElement("foobar")),i=Object.prototype.hasOwnProperty,n=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(a,o,s){var l,u;if(!(n&&(l=r.createElement(a))&&(u=t.getPrototypeOf(l))&&e!==u)||l[o]&&i.call(l,o))s._supvalue=function(){var e=v(this,"propValue");return e&&e[o]&&e[o].apply?e[o].apply(this,arguments):e&&e[o]},y.extendValue(a,o,s.value);else{var c=l[o];s._supvalue=function(){return c&&c.apply?c.apply(this,arguments):c},u[o]=s.value}s.value._supvalue=s._supvalue}}(),y=function(){var i={};t.addReady(function(r,a){var o={},s=function(t){o[t]||(o[t]=e(r.getElementsByTagName(t)),a[0]&&e.nodeName(a[0],t)&&(o[t]=o[t].add(a)))};e.each(i,function(e,i){return s(e),i&&i.forEach?(i.forEach(function(t){o[e].each(t)}),n):(t.warn("Error: with "+e+"-property. methods: "+i),n)}),o=null});var a,o=e([]),s=function(t,n){i[t]?i[t].push(n):i[t]=[n],e.isDOMReady&&(a||e(r.getElementsByTagName(t))).each(n)};return{createTmpCache:function(t){return e.isDOMReady&&(a=a||e(r.getElementsByTagName(t))),a||o},flushTmpCache:function(){a=null},content:function(t,i){s(t,function(){var t=e.attr(this,i);null!=t&&e.attr(this,i,t)})},createElement:function(e,t){s(e,t)},extendValue:function(t,i,r){s(t,function(){e(this).each(function(){var e=v(this,"propValue",{});e[i]=this[i],this[i]=r})})}}}(),b=function(e,t){e.defaultValue===n&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(i){i=e(i);var r=i.prop("id");return r||(t++,r="ID-"+t,i.eq(0).prop("id",r)),r}}(),implement:function(e,i){var r=v(e,"implemented")||v(e,"implemented",{});return r[i]?(t.warn(i+" already implemented for element #"+e.id),!1):(r[i]=!0,!0)},extendUNDEFProp:function(t,i){e.each(i,function(e,i){e in t||(t[e]=i)})},createPropDefault:b,data:v,moveToFirstEvent:function(t,i,r){var n,a=(e._data(t,"events")||{})[i];a&&a.length>1&&(n=a.pop(),r||(r="bind"),"bind"==r&&a.delegateCount?a.splice(a.delegateCount,0,n):a.unshift(n)),t=null},addShadowDom:function(){var n,a,o,s={init:!1,runs:0,test:function(){var e=s.getHeight(),t=s.getWidth();e!=s.height||t!=s.width?(s.height=e,s.width=t,s.handler({type:"docresize"}),s.runs++,9>s.runs&&setTimeout(s.test,90)):s.runs=0},handler:function(t){clearTimeout(n),n=setTimeout(function(){if("resize"==t.type){var n=e(i).width(),l=e(i).width();if(l==a&&n==o)return;a=l,o=n,s.height=s.getHeight(),s.width=s.getWidth()}e(r).triggerHandler("updateshadowdom")},"resize"==t.type?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var i=r.body,n=r.documentElement;s[t]=function(){return Math.max(i["scroll"+e],n["scroll"+e],i["offset"+e],n["offset"+e],n["client"+e])}})},start:function(){!this.init&&r.body&&(this.init=!0,this._create(),this.height=s.getHeight(),this.width=s.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(i).bind("resize",this.handler),function(){var t,i=e.fn.animate;e.fn.animate=function(){return clearTimeout(t),t=setTimeout(function(){s.test()},99),i.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){s.start()})},function(i,r,n){if(i&&r){n=n||{},i.jquery&&(i=i[0]),r.jquery&&(r=r[0]);var a=e.data(i,m)||e.data(i,m,{}),o=e.data(r,m)||e.data(r,m,{}),s={};n.shadowFocusElement?n.shadowFocusElement&&(n.shadowFocusElement.jquery&&(n.shadowFocusElement=n.shadowFocusElement[0]),s=e.data(n.shadowFocusElement,m)||e.data(n.shadowFocusElement,m,s)):n.shadowFocusElement=r,e(i).on("remove",function(t){t.originalEvent||e(r).remove()}),a.hasShadow=r,s.nativeElement=o.nativeElement=i,s.shadowData=o.shadowData=a.shadowData={nativeElement:i,shadowElement:r,shadowFocusElement:n.shadowFocusElement},n.shadowChilds&&n.shadowChilds.each(function(){v(this,"shadowData",o.shadowData)}),n.data&&(s.shadowData.data=o.shadowData.data=a.shadowData.data=n.data),n=null}t.docObserve()}}(),propTypes:{standard:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){b(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=r.createElement("a");return t.style.display="none",function(i,r){b(i),i.prop||(i.prop={set:function(e){i.attr.set.call(this,e)},get:function(){var i,n=this.getAttribute(r);if(null==n)return"";if(t.setAttribute("href",n+""),!e.support.hrefNormalized){try{e(t).insertAfter(this),i=t.getAttribute("href",4)}catch(a){i=t.getAttribute("href",4)}e(t).detach()}return i||t.href}})}}(),enumarated:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(i,r){"string"==typeof r&&(r=r.split(s)),r.forEach(function(r){t.defineNodeNamesProperty(i,r,{prop:{set:function(t){e.attr(this,r,t)},get:function(){return e.attr(this,r)||""}}})})},defineNodeNameProperty:function(i,r,n){return u[r]=!0,n.reflect&&t.propTypes[n.propType||"standard"](n,r),["prop","attr","removeAttr"].forEach(function(a){var o=n[a];o&&(o="prop"===a?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),d[a](i,r,o),"*"!=i&&t.cfg.extendNative&&"prop"==a&&o.value&&e.isFunction(o.value)&&g(i,r,o),n[a]=o)}),n.initAttr&&y.content(i,r),n},defineNodeNameProperties:function(e,i,r,n){for(var a in i)!n&&i[a].initAttr&&y.createTmpCache(e),r&&(i[a][r]||(i[a][r]={},["value","set","get"].forEach(function(e){e in i[a]&&(i[a][r][e]=i[a][e],delete i[a][e])}))),i[a]=t.defineNodeNameProperty(e,a,i[a]);return n||y.flushTmpCache(),i},createElement:function(i,r,n){var a;return e.isFunction(r)&&(r={after:r}),y.createTmpCache(i),r.before&&y.createElement(i,r.before),n&&(a=t.defineNodeNameProperties(i,n,!1,!0)),r.after&&y.createElement(i,r.after),y.flushTmpCache(),a},onNodeNamesPropertyModify:function(t,i,r,n){"string"==typeof t&&(t=t.split(s)),e.isFunction(r)&&(r={set:r}),t.forEach(function(e){p[e]||(p[e]={}),"string"==typeof i&&(i=i.split(s)),r.initAttr&&y.createTmpCache(e),i.forEach(function(t){p[e][t]||(p[e][t]=[],u[t]=!0),r.set&&(n&&(r.set.only=n),p[e][t].push(r.set)),r.initAttr&&y.content(e,t)}),y.flushTmpCache()})},defineNodeNamesBooleanProperty:function(i,r,a){a||(a={}),e.isFunction(a)&&(a.set=a),t.defineNodeNamesProperty(i,r,{attr:{set:function(e){this.setAttribute(r,e),a.set&&a.set.call(this,!0)},get:function(){var e=this.getAttribute(r);return null==e?n:r}},removeAttr:{value:function(){this.removeAttribute(r),a.set&&a.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:a.initAttr||!1})},contentAttr:function(e,t,i){if(e.nodeName){var r;return i===n?(r=e.attributes[t]||{},i=r.specified?r.value:null,null==i?n:i):("boolean"==typeof i?i?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,i),n)}},activeLang:function(){var i,r,n=[],a={},s=/:\/\/|^\.*\//,l=function(i,r,n){var a;return r&&n&&-1!==e.inArray(r,n.availabeLangs||[])?(i.loading=!0,a=n.langSrc,s.test(a)||(a=t.cfg.basePath+a),t.loader.loadScript(a+r+".js",function(){i.langObj[r]?(i.loading=!1,c(i,!0)):e(function(){i.langObj[r]&&c(i,!0),i.loading=!1})}),!0):!1},u=function(e){a[e]&&a[e].forEach(function(e){e.callback(i,r,"")})},c=function(e,t){if(e.activeLang!=i&&e.activeLang!==r){var n=o[e.module].options;e.langObj[i]||r&&e.langObj[r]?(e.activeLang=i,e.callback(e.langObj[i]||e.langObj[r],i),u(e.module)):t||l(e,i,n)||l(e,r,n)||!e.langObj[""]||""===e.activeLang||(e.activeLang="",e.callback(e.langObj[""],i),u(e.module))}},d=function(t){return"string"==typeof t&&t!==i?(i=t,r=i.split("-")[0],i==r&&(r=!1),e.each(n,function(e,t){c(t)})):"object"==typeof t&&(t.register?(a[t.register]||(a[t.register]=[]),a[t.register].push(t),t.callback(i,r,"")):(t.activeLang||(t.activeLang=""),n.push(t),c(t))),i};return d}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,i){t[e]=function(e,r,n,a){"string"==typeof e&&(e=e.split(s));var o={};return e.forEach(function(e){o[e]=t[i](e,r,n,a)}),o}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!(!e.webshims.assumeARIA||"content"in t.createElement("template")||(e(function(){var t=e("main").attr({role:"main"});t.length>1?webshims.error("only one main element allowed in document"):t.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in t.createElement("a")))){var i={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},r=function(e,t){var i=e.getAttribute("role");i||e.setAttribute("role",t)};e.webshims.addReady(function(n,a){if(e.each(i,function(t,i){for(var o=e(t,n).add(a.filter(t)),s=0,l=o.length;l>s;s++)r(o[s],i)}),n===t){var o=t.getElementsByTagName("header")[0],s=t.getElementsByTagName("footer"),l=s.length;if(o&&!e(o).closest("section, article")[0]&&r(o,"banner"),!l)return;var u=s[l-1];e(u).closest("section, article")[0]||r(u,"contentinfo")}})}}(webshims.$,document),webshims.register("filereader",function(e,t){"use strict";(function(){var i=swfmini,r=e.Callbacks("once unique memory"),n=0,a=null;if(window.FileReader)return e.fn.fileReader=function(){return this},void 0;e.fn.fileReader=function(t){if(this.length){t=e.extend(e.fn.fileReader.defaults,t);var i=this;r.add(function(){return o(i,t)}),e.isFunction(t.callback)&&r.add(t.callback),FileAPIProxy.ready||FileAPIProxy.init(t)}return this},e.fn.fileReader.defaults={id:"fileReaderSWFObject",multiple:null,accept:null,label:null,extensions:null,filereader:"files/filereader.swf",expressInstall:null,debugMode:!1,callback:!1};var o=function(t,i){return t.each(function(t,r){r=e(r);var o,s,l,u=r.attr("id");u||(u="flashFileInput"+n,r.attr("id",u),n++),o=r.prop("multiple"),s=r.data("swfaccept")||r.prop("accept")||i.accept,l=r.jProp("labels").map(function(){return e(this).text()}).get().join(" ")||r.data("swflabel")||i.label,FileAPIProxy.inputs[u]=r,FileAPIProxy.swfObject.add(u,o,s,l,i.extensions),r.css("z-index",0).mouseover(function(e){u!==a&&(e=e||window.event,a=u,FileAPIProxy.swfObject.mouseover(u),FileAPIProxy.container.height(r.outerHeight()).width(r.outerWidth()).css(r.offset()))}).click(function(e){return e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),!1})})};window.FileAPIProxy={ready:!1,_inititalized:!1,init:function(t){var n=this;this.debugMode=t.debugMode,this.container||(this.container=e("<div>").attr("id",t.id).wrap("<div>").parent().css({position:"fixed",width:"1px",height:"1px",display:"inline-block",background:"transparent","z-index":99999}).on("mouseover mouseout mousedown mouseup",function(t){a&&e("#"+a).trigger(t.type)}).appendTo("body"),i.embedSWF(t.filereader,t.id,"100%","100%","10",t.expressInstall,{debugMode:t.debugMode?!0:""},{wmode:"transparent",allowScriptAccess:"sameDomain"},{},function(t){n.swfObject=t.ref,e(n.swfObject).css({display:"block",outline:0}).attr("tabindex",0),n.ready=t.success&&"function"==typeof t.ref.add,n.ready&&r.fire()}))},swfObject:null,container:null,inputs:{},readers:{},onFileInputEvent:function(e){if(this.debugMode&&console.info("FileInput Event ",e.type,e),e.target in this.inputs){var i=this.inputs[e.target];e.target=i[0],"change"===e.type&&t.data(e.target,"fileList",new FileList(e.files)),i.trigger(e)}window.focus()},onFileReaderEvent:function(e){if(this.debugMode&&console.info("FileReader Event ",e.type,e,e.target in this.readers),e.target in this.readers){var t=this.readers[e.target];e.target=t,t._handleFlashEvent.call(t,e)}},onFileReaderError:function(e){this.debugMode&&console.log(e)},onSWFReady:function(){return this.container.css({position:"absolute"}),this.ready="function"==typeof this.swfObject.add,this.ready&&r.fire(),!0}},window.FileReader=function(){this.EMPTY=0,this.LOADING=1,this.DONE=2,this.readyState=0,this.result=null,this.error=null,this.onloadstart=null,this.onprogress=null,this.onload=null,this.onabort=null,this.onerror=null,this.onloadend=null,this._callbacks={loadstart:e.Callbacks("unique"),progress:e.Callbacks("unique"),abort:e.Callbacks("unique"),error:e.Callbacks("unique"),load:e.Callbacks("unique"),loadend:e.Callbacks("unique")},this._id=null},window.FileReader.prototype={readAsBinaryString:function(e){this._start(e),FileAPIProxy.swfObject.read(e.input,e.name,"readAsBinaryString")},readAsText:function(e){this._start(e),FileAPIProxy.swfObject.read(e.input,e.name,"readAsText")},readAsDataURL:function(e){this._start(e),FileAPIProxy.swfObject.read(e.input,e.name,"readAsDataURL")},readAsArrayBuffer:function(){throw"Whoops FileReader.readAsArrayBuffer is unimplemented"},abort:function(){this.result=null,this.readyState!==this.EMPTY&&this.readyState!==this.DONE&&FileAPIProxy.swfObject.abort(this._id)},addEventListener:function(e,t){e in this._callbacks&&this._callbacks[e].add(t)},removeEventListener:function(e,t){e in this._callbacks&&this._callbacks[e].remove(t)},dispatchEvent:function(t){if(t.target=this,t.type in this._callbacks){var i=this["on"+t.type];e.isFunction(i)&&i(t),this._callbacks[t.type].fire(t)}return!0},_register:function(e){this._id=e.input+"."+e.name,FileAPIProxy.readers[this._id]=this},_start:function(e){if(this._register(e),this.readyState===this.LOADING)throw{type:"InvalidStateError",code:11,message:"The object is in an invalid state."}},_handleFlashEvent:function(e){switch(e.type){case"loadstart":this.readyState=this.LOADING;break;case"loadend":this.readyState=this.DONE;break;case"load":this.readyState=this.DONE,this.result=FileAPIProxy.swfObject.result(this._id);break;case"error":this.result=null,this.error={name:"NotReadableError",message:"The File cannot be read!"}}this.dispatchEvent(new FileReaderEvent(e))}},window.FileReaderEvent=function(e){this.initEvent(e)},window.FileReaderEvent.prototype={initEvent:function(t){e.extend(this,{type:null,target:null,currentTarget:null,eventPhase:2,bubbles:!1,cancelable:!1,defaultPrevented:!1,isTrusted:!1,timeStamp:(new Date).getTime()},t)},stopPropagation:function(){},stopImmediatePropagation:function(){},preventDefault:function(){}},window.FileList=function(e){if(e){for(var t=0;e.length>t;t++)this[t]=e[t];this.length=e.length}else this.length=0},window.FileList.prototype={item:function(e){return e in this?this[e]:null}}})(),t.defineNodeNameProperty("input","files",{prop:{writeable:!1,get:function(){return"file"!=this.type?null:(e(this).is(".ws-filereader")||t.error("please add the 'ws-filereader' class to your input[type='file'] to implement files-property"),t.data(this,"fileList")||t.data(this,"fileList",new FileList))}}}),t.defineNodeNamesBooleanProperty("input","multiple"),e.fn.fileReader.defaults.filereader=t.cfg.basePath+"swf/filereader.swf";var i=["DOM"];t.modules["form-core"].loaded&&i.push("forms"),t.ready(i,function(){t.addReady(function(t){e('input[type="file"].ws-filereader',t).fileReader()})})});