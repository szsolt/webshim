webshims.register("dom-extend",function(e,t,a,r,i){"use strict";if(t.assumeARIA=e.support.getSetAttribute||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),e.parseHTML||t.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims."),1===t.cfg.extendNative&&t.warn("extendNative configuration will be set to false by default with next release. In case you rely on it set it to 'true' otherwise to 'false'. See http://bit.ly/16OOTQO"),!t.cfg.no$Switch){var n=function(){if(!a.jQuery||a.$&&a.jQuery!=a.$||a.jQuery.webshims||(t.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly. Or set webshims.cfg.no$Switch to 'true'."),a.$&&(a.$=t.$),a.jQuery=t.$),t.M!=Modernizr){t.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var e in Modernizr)e in t.M||(t.M[e]=Modernizr[e]);Modernizr=t.M}};n(),setTimeout(n,90),t.ready("DOM",n),e(n),t.ready("WINDOWLOAD",n)}var o=t.modules,s=/\s*,\s*/,l={},u={},c={},d={},p={},f=e.fn.val,h=function(t,a,r,i,n){return n?f.call(e(t)):f.call(e(t),r)};e.widget||function(){var t=e.cleanData;e.cleanData=function(a){if(!e.widget)for(var r,i=0;null!=(r=a[i]);i++)try{e(r).triggerHandler("remove")}catch(n){}t(a)}}(),e.fn.val=function(t){var a=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return a&&1===a.nodeType?e.prop(a,"value",t,"val",!0):f.call(this);if(e.isArray(t))return f.apply(this,arguments);var r=e.isFunction(t);return this.each(function(n){if(a=this,1===a.nodeType)if(r){var o=t.call(a,n,e.prop(a,"value",i,"val",!0));null==o&&(o=""),e.prop(a,"value",o,"val")}else e.prop(a,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.onWSOff=function(t,a,i,n){return n||(n=r),e(n)[i?"onTrigger":"on"](t,a),this.on("remove",function(r){r.originalEvent||e(n).off(t,a)}),this};var m="_webshimsLib"+Math.round(1e3*Math.random()),v=function(t,a,r){if(t=t.jquery?t[0]:t,!t)return r||{};var n=e.data(t,m);return r!==i&&(n||(n=e.data(t,m,{})),a&&(n[a]=r)),a?n&&n[a]:n};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){var a=[];return this.each(function(){var r=v(this,"shadowData"),i=r&&r[t.prop]||this;-1==e.inArray(i,a)&&a.push(i)}),this.pushStack(a)}}),["removeAttr","prop","attr"].forEach(function(a){l[a]=e[a],e[a]=function(t,r,n,o,s){var d="val"==o,f=d?h:l[a];if(!t||!u[r]||1!==t.nodeType||!d&&o&&"attr"==a&&e.attrFn[r])return f(t,r,n,o,s);var m,v,g,y=(t.nodeName||"").toLowerCase(),b=c[y],w="attr"!=a||n!==!1&&null!==n?a:"removeAttr";if(b||(b=c["*"]),b&&(b=b[r]),b&&(m=b[w]),m){if("value"==r&&(v=m.isVal,m.isVal=d),"removeAttr"===w)return m.value.call(t);if(n===i)return m.get?m.get.call(t):m.value;m.set&&("attr"==a&&n===!0&&(n=r),g=m.set.call(t,n)),"value"==r&&(m.isVal=v)}else g=f(t,r,n,o,s);if((n!==i||"removeAttr"===w)&&p[y]&&p[y][r]){var T;T="removeAttr"==w?!1:"prop"==w?!!n:!0,p[y][r].forEach(function(e){(!e.only||(e.only="prop"&&"prop"==a)||"attr"==e.only&&"prop"!=a)&&e.call(t,n,T,d?"val":w,a)})}return g},d[a]=function(e,r,n){c[e]||(c[e]={}),c[e][r]||(c[e][r]={});var o=c[e][r][a],s=function(e,t,i){return t&&t[e]?t[e]:i&&i[e]?i[e]:"prop"==a&&"value"==r?function(e){var t=this;return n.isVal?h(t,r,e,!1,0===arguments.length):l[a](t,r,e)}:"prop"==a&&"value"==e&&n.value.apply?function(){var e=l[a](this,r);return e&&e.apply&&(e=e.apply(this,arguments)),e}:function(e){return l[a](this,r,e)}};c[e][r][a]=n,n.value===i&&(n.set||(n.set=n.writeable?s("set",n,o):t.cfg.useStrict&&"prop"==r?function(){throw r+" is readonly on "+e}:function(){t.info(r+" is readonly on "+e)}),n.get||(n.get=s("get",n,o))),["value","get","set"].forEach(function(e){n[e]&&(n["_sup"+e]=s(e,o))})}});var g=function(){var e=t.getPrototypeOf(r.createElement("foobar")),a=Object.prototype.hasOwnProperty,i=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(n,o,s){var l,u;if(!(i&&(l=r.createElement(n))&&(u=t.getPrototypeOf(l))&&e!==u)||l[o]&&a.call(l,o))s._supvalue=function(){var e=v(this,"propValue");return e&&e[o]&&e[o].apply?e[o].apply(this,arguments):e&&e[o]},y.extendValue(n,o,s.value);else{var c=l[o];s._supvalue=function(){return c&&c.apply?c.apply(this,arguments):c},u[o]=s.value}s.value._supvalue=s._supvalue}}(),y=function(){var a={};t.addReady(function(r,n){var o={},s=function(t){o[t]||(o[t]=e(r.getElementsByTagName(t)),n[0]&&e.nodeName(n[0],t)&&(o[t]=o[t].add(n)))};e.each(a,function(e,a){return s(e),a&&a.forEach?(a.forEach(function(t){o[e].each(t)}),i):(t.warn("Error: with "+e+"-property. methods: "+a),i)}),o=null});var n,o=e([]),s=function(t,i){a[t]?a[t].push(i):a[t]=[i],e.isDOMReady&&(n||e(r.getElementsByTagName(t))).each(i)};return{createTmpCache:function(t){return e.isDOMReady&&(n=n||e(r.getElementsByTagName(t))),n||o},flushTmpCache:function(){n=null},content:function(t,a){s(t,function(){var t=e.attr(this,a);null!=t&&e.attr(this,a,t)})},createElement:function(e,t){s(e,t)},extendValue:function(t,a,r){s(t,function(){e(this).each(function(){var e=v(this,"propValue",{});e[a]=this[a],this[a]=r})})}}}(),b=function(e,t){e.defaultValue===i&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(a){a=e(a);var r=a.prop("id");return r||(t++,r="ID-"+t,a.eq(0).prop("id",r)),r}}(),implement:function(e,a){var r=v(e,"implemented")||v(e,"implemented",{});return r[a]?(t.warn(a+" already implemented for element #"+e.id),!1):(r[a]=!0,!0)},extendUNDEFProp:function(t,a){e.each(a,function(e,a){e in t||(t[e]=a)})},createPropDefault:b,data:v,moveToFirstEvent:function(t,a,r){var i,n=(e._data(t,"events")||{})[a];n&&n.length>1&&(i=n.pop(),r||(r="bind"),"bind"==r&&n.delegateCount?n.splice(n.delegateCount,0,i):n.unshift(i)),t=null},addShadowDom:function(){var i,n,o,s={init:!1,runs:0,test:function(){var e=s.getHeight(),t=s.getWidth();e!=s.height||t!=s.width?(s.height=e,s.width=t,s.handler({type:"docresize"}),s.runs++,9>s.runs&&setTimeout(s.test,90)):s.runs=0},handler:function(t){clearTimeout(i),i=setTimeout(function(){if("resize"==t.type){var i=e(a).width(),l=e(a).width();if(l==n&&i==o)return;n=l,o=i,s.height=s.getHeight(),s.width=s.getWidth()}e(r).triggerHandler("updateshadowdom")},"resize"==t.type?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var a=r.body,i=r.documentElement;s[t]=function(){return Math.max(a["scroll"+e],i["scroll"+e],a["offset"+e],i["offset"+e],i["client"+e])}})},start:function(){!this.init&&r.body&&(this.init=!0,this._create(),this.height=s.getHeight(),this.width=s.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(a).bind("resize",this.handler),function(){var t,a=e.fn.animate;e.fn.animate=function(){return clearTimeout(t),t=setTimeout(function(){s.test()},99),a.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){s.start()})},function(a,r,i){if(a&&r){i=i||{},a.jquery&&(a=a[0]),r.jquery&&(r=r[0]);var n=e.data(a,m)||e.data(a,m,{}),o=e.data(r,m)||e.data(r,m,{}),s={};i.shadowFocusElement?i.shadowFocusElement&&(i.shadowFocusElement.jquery&&(i.shadowFocusElement=i.shadowFocusElement[0]),s=e.data(i.shadowFocusElement,m)||e.data(i.shadowFocusElement,m,s)):i.shadowFocusElement=r,e(a).on("remove",function(t){t.originalEvent||e(r).remove()}),n.hasShadow=r,s.nativeElement=o.nativeElement=a,s.shadowData=o.shadowData=n.shadowData={nativeElement:a,shadowElement:r,shadowFocusElement:i.shadowFocusElement},i.shadowChilds&&i.shadowChilds.each(function(){v(this,"shadowData",o.shadowData)}),i.data&&(s.shadowData.data=o.shadowData.data=n.shadowData.data=i.data),i=null}t.docObserve()}}(),propTypes:{standard:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){b(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=r.createElement("a");return t.style.display="none",function(a,r){b(a),a.prop||(a.prop={set:function(e){a.attr.set.call(this,e)},get:function(){var a,i=this.getAttribute(r);if(null==i)return"";if(t.setAttribute("href",i+""),!e.support.hrefNormalized){try{e(t).insertAfter(this),a=t.getAttribute("href",4)}catch(n){a=t.getAttribute("href",4)}e(t).detach()}return a||t.href}})}}(),enumarated:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(a,r){"string"==typeof r&&(r=r.split(s)),r.forEach(function(r){t.defineNodeNamesProperty(a,r,{prop:{set:function(t){e.attr(this,r,t)},get:function(){return e.attr(this,r)||""}}})})},defineNodeNameProperty:function(a,r,i){return u[r]=!0,i.reflect&&t.propTypes[i.propType||"standard"](i,r),["prop","attr","removeAttr"].forEach(function(n){var o=i[n];o&&(o="prop"===n?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),d[n](a,r,o),"*"!=a&&t.cfg.extendNative&&"prop"==n&&o.value&&e.isFunction(o.value)&&g(a,r,o),i[n]=o)}),i.initAttr&&y.content(a,r),i},defineNodeNameProperties:function(e,a,r,i){for(var n in a)!i&&a[n].initAttr&&y.createTmpCache(e),r&&(a[n][r]||(a[n][r]={},["value","set","get"].forEach(function(e){e in a[n]&&(a[n][r][e]=a[n][e],delete a[n][e])}))),a[n]=t.defineNodeNameProperty(e,n,a[n]);return i||y.flushTmpCache(),a},createElement:function(a,r,i){var n;return e.isFunction(r)&&(r={after:r}),y.createTmpCache(a),r.before&&y.createElement(a,r.before),i&&(n=t.defineNodeNameProperties(a,i,!1,!0)),r.after&&y.createElement(a,r.after),y.flushTmpCache(),n},onNodeNamesPropertyModify:function(t,a,r,i){"string"==typeof t&&(t=t.split(s)),e.isFunction(r)&&(r={set:r}),t.forEach(function(e){p[e]||(p[e]={}),"string"==typeof a&&(a=a.split(s)),r.initAttr&&y.createTmpCache(e),a.forEach(function(t){p[e][t]||(p[e][t]=[],u[t]=!0),r.set&&(i&&(r.set.only=i),p[e][t].push(r.set)),r.initAttr&&y.content(e,t)}),y.flushTmpCache()})},defineNodeNamesBooleanProperty:function(a,r,n){n||(n={}),e.isFunction(n)&&(n.set=n),t.defineNodeNamesProperty(a,r,{attr:{set:function(e){this.setAttribute(r,e),n.set&&n.set.call(this,!0)},get:function(){var e=this.getAttribute(r);return null==e?i:r}},removeAttr:{value:function(){this.removeAttribute(r),n.set&&n.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:n.initAttr||!1})},contentAttr:function(e,t,a){if(e.nodeName){var r;return a===i?(r=e.attributes[t]||{},a=r.specified?r.value:null,null==a?i:a):("boolean"==typeof a?a?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,a),i)}},activeLang:function(){var a,r,i=[],n={},s=/:\/\/|^\.*\//,l=function(a,r,i){var n;return r&&i&&-1!==e.inArray(r,i.availabeLangs||[])?(a.loading=!0,n=i.langSrc,s.test(n)||(n=t.cfg.basePath+n),t.loader.loadScript(n+r+".js",function(){a.langObj[r]?(a.loading=!1,c(a,!0)):e(function(){a.langObj[r]&&c(a,!0),a.loading=!1})}),!0):!1},u=function(e){n[e]&&n[e].forEach(function(e){e.callback(a,r,"")})},c=function(e,t){if(e.activeLang!=a&&e.activeLang!==r){var i=o[e.module].options;e.langObj[a]||r&&e.langObj[r]?(e.activeLang=a,e.callback(e.langObj[a]||e.langObj[r],a),u(e.module)):t||l(e,a,i)||l(e,r,i)||!e.langObj[""]||""===e.activeLang||(e.activeLang="",e.callback(e.langObj[""],a),u(e.module))}},d=function(t){return"string"==typeof t&&t!==a?(a=t,r=a.split("-")[0],a==r&&(r=!1),e.each(i,function(e,t){c(t)})):"object"==typeof t&&(t.register?(n[t.register]||(n[t.register]=[]),n[t.register].push(t),t.callback(a,r,"")):(t.activeLang||(t.activeLang=""),i.push(t),c(t))),a};return d}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,a){t[e]=function(e,r,i,n){"string"==typeof e&&(e=e.split(s));var o={};return e.forEach(function(e){o[e]=t[a](e,r,i,n)}),o}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!(!e.webshims.assumeARIA||"content"in t.createElement("template")||(e(function(){var t=e("main").attr({role:"main"});t.length>1?webshims.error("only one main element allowed in document"):t.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in t.createElement("a")))){var a={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},r=function(e,t){var a=e.getAttribute("role");a||e.setAttribute("role",t)};e.webshims.addReady(function(i,n){if(e.each(a,function(t,a){for(var o=e(t,i).add(n.filter(t)),s=0,l=o.length;l>s;s++)r(o[s],a)}),i===t){var o=t.getElementsByTagName("header")[0],s=t.getElementsByTagName("footer"),l=s.length;if(o&&!e(o).closest("section, article")[0]&&r(o,"banner"),!l)return;var u=s[l-1];e(u).closest("section, article")[0]||r(u,"contentinfo")}})}}(webshims.$,document),webshims.register("form-core",function(e,t,a,r,i,n){"use strict";t.capturingEventPrevented=function(t){if(!t._isPolyfilled){var a=t.isDefaultPrevented,r=t.preventDefault;t.preventDefault=function(){return clearTimeout(e.data(t.target,t.type+"DefaultPrevented")),e.data(t.target,t.type+"DefaultPrevented",setTimeout(function(){e.removeData(t.target,t.type+"DefaultPrevented")},30)),r.apply(this,arguments)},t.isDefaultPrevented=function(){return!(!a.apply(this,arguments)&&!e.data(t.target,t.type+"DefaultPrevented"))},t._isPolyfilled=!0}},Modernizr.formvalidation&&!t.bugs.bustedValidity&&t.capturingEvents(["invalid"],!0);var o=function(t){return(e.prop(t,"validity")||{valid:1}).valid},s=function(){var a=["form-validation"];n.lazyCustomMessages&&(n.customMessages=!0,a.push("form-message")),n.addValidators&&a.push("form-validators"),t.reTest(a),e(r).off(".lazyloadvalidation")},l=function(t){var a=!1;return e(t).jProp("elements").each(function(){return a=e(this).is(":invalid"),a?!1:i}),a},u=/^(?:form)$/i;e.extend(e.expr[":"],{"valid-element":function(t){return u.test(t.nodeName||"")?!l(t):!(!e.prop(t,"willValidate")||!o(t))},"invalid-element":function(t){return u.test(t.nodeName||"")?l(t):!(!e.prop(t,"willValidate")||o(t))},"required-element":function(t){return!(!e.prop(t,"willValidate")||!e.prop(t,"required"))},"user-error":function(t){return e.prop(t,"willValidate")&&e(t).hasClass("user-error")},"optional-element":function(t){return!(!e.prop(t,"willValidate")||e.prop(t,"required")!==!1)}}),["valid","invalid","required","optional"].forEach(function(t){e.expr[":"][t]=e.expr.filters[t+"-element"]});var c=e.expr[":"].focus;e.expr[":"].focus=function(){try{return c.apply(this,arguments)}catch(e){t.error(e)}return!1},t.triggerInlineForm=function(t,a){e(t).trigger(a)};var d=function(e,a,r){s(),t.ready("form-validation",function(){e[a].apply(e,r)})},p="transitionDelay"in r.documentElement.style?"":" no-transition",f=t.cfg.wspopover;f.position||f.position===!1||(f.position={at:"left bottom",my:"left top",collision:"fit flip"}),t.wsPopover={id:0,_create:function(){this.options=e.extend(!0,{},f,this.options),this.id=t.wsPopover.id++,this.eventns=".wsoverlay"+this.id,this.timers={},this.element=e('<div class="ws-popover'+p+'" tabindex="-1"><div class="ws-po-outerbox"><div class="ws-po-arrow"><div class="ws-po-arrowbox" /></div><div class="ws-po-box" /></div></div>'),this.contentElement=e(".ws-po-box",this.element),this.lastElement=e([]),this.bindElement(),this.element.data("wspopover",this)},options:{},content:function(e){this.contentElement.html(e)},bindElement:function(){var e=this,t=function(){e.stopBlur=!1};this.preventBlur=function(){e.stopBlur=!0,clearTimeout(e.timers.stopBlur),e.timers.stopBlur=setTimeout(t,9)},this.element.on({mousedown:this.preventBlur})},show:function(){d(this,"show",arguments)}},t.validityAlert={showFor:function(){d(this,"showFor",arguments)}},t.getContentValidationMessage=function(t,a,r){var n=e(t).data("errormessage")||t.getAttribute("x-moz-errormessage")||"";return r&&n[r]?n=n[r]:n&&(a=a||e.prop(t,"validity")||{valid:1},a.valid&&(n="")),"object"==typeof n&&(a=a||e.prop(t,"validity")||{valid:1},a.valid||e.each(a,function(e,t){return t&&"valid"!=e&&n[e]?(n=n[e],!1):i})),"object"==typeof n&&(n=n.defaultMessage),n||""},e.fn.getErrorMessage=function(a){var r="",i=this[0];return i&&(r=t.getContentValidationMessage(i,!1,a)||e.prop(i,"customValidationMessage")||e.prop(i,"validationMessage")),r},e(r).on("focusin.lazyloadvalidation",function(t){"form"in t.target&&e(t.target).is(":invalid")&&s()}),t.ready("WINDOWLOAD",s),n.replaceValidationUI&&t.ready("DOM forms",function(){e(r).on("firstinvalid",function(e){e.isInvalidUIPrevented()||(e.preventDefault(),t.validityAlert.showFor(e.target))})}),function(){var t,a,i=[];e(r).on("invalid",function(n){if(!n.wrongWebkitInvalid){var o=e(n.target);if(!t){t=e.Event("firstinvalid"),t.isInvalidUIPrevented=n.isDefaultPrevented;var s=e.Event("firstinvalidsystem");e(r).triggerHandler(s,{element:n.target,form:n.target.form,isInvalidUIPrevented:n.isDefaultPrevented}),o.trigger(t)}t&&t.isDefaultPrevented()&&n.preventDefault(),i.push(n.target),n.extraData="fix",clearTimeout(a),a=setTimeout(function(){var a={type:"lastinvalid",cancelable:!1,invalidlist:e(i)};t=!1,i=[],e(n.target).trigger(a,a)},9),o=null}})}()}),webshims.register("form-message",function(e,t,a,r,i,n){"use strict";n.overrideMessages&&(n.customMessages=!0,t.error("overrideMessages is deprecated. use customMessages instead."));var o=t.validityMessages,s=n.customMessages?["customValidationMessage"]:[];o.en=e.extend(!0,{typeMismatch:{defaultMessage:"Please enter a valid value.",email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.",month:"Please enter a valid value.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},o.en||o["en-US"]||{}),"object"==typeof o.en.valueMissing&&["select","radio"].forEach(function(e){o.en.valueMissing[e]=o.en.valueMissing[e]||"Please select an option."}),"object"==typeof o.en.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(e){o.en.rangeUnderflow[e]=o.en.rangeUnderflow[e]||"Value must be at or after {%min}."}),"object"==typeof o.en.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(e){o.en.rangeOverflow[e]=o.en.rangeOverflow[e]||"Value must be at or before {%max}."}),o["en-US"]||(o["en-US"]=e.extend(!0,{},o.en)),o["en-GB"]||(o["en-GB"]=e.extend(!0,{},o.en)),o["en-AU"]||(o["en-AU"]=e.extend(!0,{},o.en)),o[""]=o[""]||o["en-US"],o.de=e.extend(!0,{typeMismatch:{defaultMessage:"{%value} ist in diesem Feld nicht zul\u00e4ssig.",email:"{%value} ist keine g\u00fcltige E-Mail-Adresse.",url:"{%value} ist kein(e) g\u00fcltige(r) Webadresse/Pfad.",number:"{%value} ist keine Nummer.",date:"{%value} ist kein Datum.",time:"{%value} ist keine Uhrzeit.",month:"{%value} ist in diesem Feld nicht zul\u00e4ssig.",range:"{%value} ist keine Nummer.","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format. {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein.",checkbox:"Bitte aktivieren Sie das K\u00e4stchen."}},o.de||{}),"object"==typeof o.de.valueMissing&&["select","radio"].forEach(function(e){o.de.valueMissing[e]=o.de.valueMissing[e]||"Bitte w\u00e4hlen Sie eine Option aus."}),"object"==typeof o.de.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(e){o.de.rangeUnderflow[e]=o.de.rangeUnderflow[e]||"{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."}),"object"==typeof o.de.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(e){o.de.rangeOverflow[e]=o.de.rangeOverflow[e]||"{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var l=o[""],u=function(t,a){return t&&"string"!=typeof t&&(t=t[e.prop(a,"type")]||t[(a.nodeName||"").toLowerCase()]||t.defaultMessage),t||""},c={value:1,min:1,max:1};t.createValidationMessage=function(a,r){var i,n=u(l[r],a),s=e.prop(a,"type");return n||(n=u(o[""][r],a)||e.prop(a,"validationMessage"),t.info("could not find errormessage for: "+r+" / "+s+". in language: "+e.webshims.activeLang())),n&&["value","min","max","title","maxlength","label"].forEach(function(o){if(-1!==n.indexOf("{%"+o)){var l=("label"==o?e.trim(e('label[for="'+a.id+'"]',a.form).text()).replace(/\*$|:$/,""):e.prop(a,o))||"";"patternMismatch"!=r||"title"!=o||l||t.error("no title for patternMismatch provided. Always add a title attribute."),c[o]&&(i||(i=e(a).getShadowElement().data("wsWidget"+s)),i&&i.formatValue&&(l=i.formatValue(l,!1))),n=n.replace("{%"+o+"}",l),"value"==o&&(n=n.replace("{%valueLen}",l.length))}}),n||""},(!Modernizr.formvalidation||t.bugs.bustedValidity)&&s.push("validationMessage"),t.activeLang({langObj:o,module:"form-core",callback:function(e){l=e}}),t.activeLang({register:"form-core",callback:function(){e.each(o,function(e,t){return o[t]?(l=o[t],!1):i})}}),s.forEach(function(a){t.defineNodeNamesProperty(["fieldset","output","button"],a,{prop:{value:"",writeable:!1}}),["input","select","textarea"].forEach(function(r){var n=t.defineNodeNameProperty(r,a,{prop:{get:function(){var a=this,r="";if(!e.prop(a,"willValidate"))return r;var o=e.prop(a,"validity")||{valid:1};return o.valid?r:(r=t.getContentValidationMessage(a,o))?r:o.customError&&a.nodeName&&(r=Modernizr.formvalidation&&!t.bugs.bustedValidity&&n.prop._supget?n.prop._supget.call(a):t.data(a,"customvalidationMessage"))?r:(e.each(o,function(e,n){return"valid"!=e&&n?(r=t.createValidationMessage(a,e),r?!1:i):i}),r||"")},writeable:!1}})})})});