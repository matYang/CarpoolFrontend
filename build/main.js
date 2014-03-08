/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);
/*!
* jQuery Cycle2; build: v20131022
* http://jquery.malsup.com/cycle2/
* Copyright (c) 2013 M. Alsup; Dual licensed: MIT/GPL
*/
/*! core engine; version: 20131003 */
(function(e){"use strict";function t(e){return(e||"").toLowerCase()}var i="20131003";e.fn.cycle=function(i){var n;return 0!==this.length||e.isReady?this.each(function(){var n,s,o,c,r=e(this),l=e.fn.cycle.log;if(!r.data("cycle.opts")){(r.data("cycle-log")===!1||i&&i.log===!1||s&&s.log===!1)&&(l=e.noop),l("--c2 init--"),n=r.data();for(var a in n)n.hasOwnProperty(a)&&/^cycle[A-Z]+/.test(a)&&(c=n[a],o=a.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,t),l(o+":",c,"("+typeof c+")"),n[o]=c);s=e.extend({},e.fn.cycle.defaults,n,i||{}),s.timeoutId=0,s.paused=s.paused||!1,s.container=r,s._maxZ=s.maxZ,s.API=e.extend({_container:r},e.fn.cycle.API),s.API.log=l,s.API.trigger=function(e,t){return s.container.trigger(e,t),s.API},r.data("cycle.opts",s),r.data("cycle.API",s.API),s.API.trigger("cycle-bootstrap",[s,s.API]),s.API.addInitialSlides(),s.API.preInitSlideshow(),s.slides.length&&s.API.initSlideshow()}}):(n={s:this.selector,c:this.context},e.fn.cycle.log("requeuing slideshow (dom not ready)"),e(function(){e(n.s,n.c).cycle(i)}),this)},e.fn.cycle.API={opts:function(){return this._container.data("cycle.opts")},addInitialSlides:function(){var t=this.opts(),i=t.slides;t.slideCount=0,t.slides=e(),i=i.jquery?i:t.container.find(i),t.random&&i.sort(function(){return Math.random()-.5}),t.API.add(i)},preInitSlideshow:function(){var t=this.opts();t.API.trigger("cycle-pre-initialize",[t]);var i=e.fn.cycle.transitions[t.fx];i&&e.isFunction(i.preInit)&&i.preInit(t),t._preInitialized=!0},postInitSlideshow:function(){var t=this.opts();t.API.trigger("cycle-post-initialize",[t]);var i=e.fn.cycle.transitions[t.fx];i&&e.isFunction(i.postInit)&&i.postInit(t)},initSlideshow:function(){var t,i=this.opts(),n=i.container;i.API.calcFirstSlide(),"static"==i.container.css("position")&&i.container.css("position","relative"),e(i.slides[i.currSlide]).css("opacity",1).show(),i.API.stackSlides(i.slides[i.currSlide],i.slides[i.nextSlide],!i.reverse),i.pauseOnHover&&(i.pauseOnHover!==!0&&(n=e(i.pauseOnHover)),n.hover(function(){i.API.pause(!0)},function(){i.API.resume(!0)})),i.timeout&&(t=i.API.getSlideOpts(i.currSlide),i.API.queueTransition(t,t.timeout+i.delay)),i._initialized=!0,i.API.updateView(!0),i.API.trigger("cycle-initialized",[i]),i.API.postInitSlideshow()},pause:function(t){var i=this.opts(),n=i.API.getSlideOpts(),s=i.hoverPaused||i.paused;t?i.hoverPaused=!0:i.paused=!0,s||(i.container.addClass("cycle-paused"),i.API.trigger("cycle-paused",[i]).log("cycle-paused"),n.timeout&&(clearTimeout(i.timeoutId),i.timeoutId=0,i._remainingTimeout-=e.now()-i._lastQueue,(0>i._remainingTimeout||isNaN(i._remainingTimeout))&&(i._remainingTimeout=void 0)))},resume:function(e){var t=this.opts(),i=!t.hoverPaused&&!t.paused;e?t.hoverPaused=!1:t.paused=!1,i||(t.container.removeClass("cycle-paused"),0===t.slides.filter(":animated").length&&t.API.queueTransition(t.API.getSlideOpts(),t._remainingTimeout),t.API.trigger("cycle-resumed",[t,t._remainingTimeout]).log("cycle-resumed"))},add:function(t,i){var n,s=this.opts(),o=s.slideCount,c=!1;"string"==e.type(t)&&(t=e.trim(t)),e(t).each(function(){var t,n=e(this);i?s.container.prepend(n):s.container.append(n),s.slideCount++,t=s.API.buildSlideOpts(n),s.slides=i?e(n).add(s.slides):s.slides.add(n),s.API.initSlide(t,n,--s._maxZ),n.data("cycle.opts",t),s.API.trigger("cycle-slide-added",[s,t,n])}),s.API.updateView(!0),c=s._preInitialized&&2>o&&s.slideCount>=1,c&&(s._initialized?s.timeout&&(n=s.slides.length,s.nextSlide=s.reverse?n-1:1,s.timeoutId||s.API.queueTransition(s)):s.API.initSlideshow())},calcFirstSlide:function(){var e,t=this.opts();e=parseInt(t.startingSlide||0,10),(e>=t.slides.length||0>e)&&(e=0),t.currSlide=e,t.reverse?(t.nextSlide=e-1,0>t.nextSlide&&(t.nextSlide=t.slides.length-1)):(t.nextSlide=e+1,t.nextSlide==t.slides.length&&(t.nextSlide=0))},calcNextSlide:function(){var e,t=this.opts();t.reverse?(e=0>t.nextSlide-1,t.nextSlide=e?t.slideCount-1:t.nextSlide-1,t.currSlide=e?0:t.nextSlide+1):(e=t.nextSlide+1==t.slides.length,t.nextSlide=e?0:t.nextSlide+1,t.currSlide=e?t.slides.length-1:t.nextSlide-1)},calcTx:function(t,i){var n,s=t;return i&&s.manualFx&&(n=e.fn.cycle.transitions[s.manualFx]),n||(n=e.fn.cycle.transitions[s.fx]),n||(n=e.fn.cycle.transitions.fade,s.API.log('Transition "'+s.fx+'" not found.  Using fade.')),n},prepareTx:function(e,t){var i,n,s,o,c,r=this.opts();return 2>r.slideCount?(r.timeoutId=0,void 0):(!e||r.busy&&!r.manualTrump||(r.API.stopTransition(),r.busy=!1,clearTimeout(r.timeoutId),r.timeoutId=0),r.busy||(0!==r.timeoutId||e)&&(n=r.slides[r.currSlide],s=r.slides[r.nextSlide],o=r.API.getSlideOpts(r.nextSlide),c=r.API.calcTx(o,e),r._tx=c,e&&void 0!==o.manualSpeed&&(o.speed=o.manualSpeed),r.nextSlide!=r.currSlide&&(e||!r.paused&&!r.hoverPaused&&r.timeout)?(r.API.trigger("cycle-before",[o,n,s,t]),c.before&&c.before(o,n,s,t),i=function(){r.busy=!1,r.container.data("cycle.opts")&&(c.after&&c.after(o,n,s,t),r.API.trigger("cycle-after",[o,n,s,t]),r.API.queueTransition(o),r.API.updateView(!0))},r.busy=!0,c.transition?c.transition(o,n,s,t,i):r.API.doTransition(o,n,s,t,i),r.API.calcNextSlide(),r.API.updateView()):r.API.queueTransition(o)),void 0)},doTransition:function(t,i,n,s,o){var c=t,r=e(i),l=e(n),a=function(){l.animate(c.animIn||{opacity:1},c.speed,c.easeIn||c.easing,o)};l.css(c.cssBefore||{}),r.animate(c.animOut||{},c.speed,c.easeOut||c.easing,function(){r.css(c.cssAfter||{}),c.sync||a()}),c.sync&&a()},queueTransition:function(t,i){var n=this.opts(),s=void 0!==i?i:t.timeout;return 0===n.nextSlide&&0===--n.loop?(n.API.log("terminating; loop=0"),n.timeout=0,s?setTimeout(function(){n.API.trigger("cycle-finished",[n])},s):n.API.trigger("cycle-finished",[n]),n.nextSlide=n.currSlide,void 0):(s&&(n._lastQueue=e.now(),void 0===i&&(n._remainingTimeout=t.timeout),n.paused||n.hoverPaused||(n.timeoutId=setTimeout(function(){n.API.prepareTx(!1,!n.reverse)},s))),void 0)},stopTransition:function(){var e=this.opts();e.slides.filter(":animated").length&&(e.slides.stop(!1,!0),e.API.trigger("cycle-transition-stopped",[e])),e._tx&&e._tx.stopTransition&&e._tx.stopTransition(e)},advanceSlide:function(e){var t=this.opts();return clearTimeout(t.timeoutId),t.timeoutId=0,t.nextSlide=t.currSlide+e,0>t.nextSlide?t.nextSlide=t.slides.length-1:t.nextSlide>=t.slides.length&&(t.nextSlide=0),t.API.prepareTx(!0,e>=0),!1},buildSlideOpts:function(i){var n,s,o=this.opts(),c=i.data()||{};for(var r in c)c.hasOwnProperty(r)&&/^cycle[A-Z]+/.test(r)&&(n=c[r],s=r.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,t),o.API.log("["+(o.slideCount-1)+"]",s+":",n,"("+typeof n+")"),c[s]=n);c=e.extend({},e.fn.cycle.defaults,o,c),c.slideNum=o.slideCount;try{delete c.API,delete c.slideCount,delete c.currSlide,delete c.nextSlide,delete c.slides}catch(l){}return c},getSlideOpts:function(t){var i=this.opts();void 0===t&&(t=i.currSlide);var n=i.slides[t],s=e(n).data("cycle.opts");return e.extend({},i,s)},initSlide:function(t,i,n){var s=this.opts();i.css(t.slideCss||{}),n>0&&i.css("zIndex",n),isNaN(t.speed)&&(t.speed=e.fx.speeds[t.speed]||e.fx.speeds._default),t.sync||(t.speed=t.speed/2),i.addClass(s.slideClass)},updateView:function(e,t){var i=this.opts();if(i._initialized){var n=i.API.getSlideOpts(),s=i.slides[i.currSlide];!e&&t!==!0&&(i.API.trigger("cycle-update-view-before",[i,n,s]),0>i.updateView)||(i.slideActiveClass&&i.slides.removeClass(i.slideActiveClass).eq(i.currSlide).addClass(i.slideActiveClass),e&&i.hideNonActive&&i.slides.filter(":not(."+i.slideActiveClass+")").hide(),0===i.updateView&&setTimeout(function(){i.API.trigger("cycle-update-view",[i,n,s,e])},n.speed/(i.sync?2:1)),0!==i.updateView&&i.API.trigger("cycle-update-view",[i,n,s,e]),e&&i.API.trigger("cycle-update-view-after",[i,n,s]))}},getComponent:function(t){var i=this.opts(),n=i[t];return"string"==typeof n?/^\s*[\>|\+|~]/.test(n)?i.container.find(n):e(n):n.jquery?n:e(n)},stackSlides:function(t,i,n){var s=this.opts();t||(t=s.slides[s.currSlide],i=s.slides[s.nextSlide],n=!s.reverse),e(t).css("zIndex",s.maxZ);var o,c=s.maxZ-2,r=s.slideCount;if(n){for(o=s.currSlide+1;r>o;o++)e(s.slides[o]).css("zIndex",c--);for(o=0;s.currSlide>o;o++)e(s.slides[o]).css("zIndex",c--)}else{for(o=s.currSlide-1;o>=0;o--)e(s.slides[o]).css("zIndex",c--);for(o=r-1;o>s.currSlide;o--)e(s.slides[o]).css("zIndex",c--)}e(i).css("zIndex",s.maxZ-1)},getSlideIndex:function(e){return this.opts().slides.index(e)}},e.fn.cycle.log=function(){window.console&&console.log&&console.log("[cycle2] "+Array.prototype.join.call(arguments," "))},e.fn.cycle.version=function(){return"Cycle2: "+i},e.fn.cycle.transitions={custom:{},none:{before:function(e,t,i,n){e.API.stackSlides(i,t,n),e.cssBefore={opacity:1,display:"block"}}},fade:{before:function(t,i,n,s){var o=t.API.getSlideOpts(t.nextSlide).slideCss||{};t.API.stackSlides(i,n,s),t.cssBefore=e.extend(o,{opacity:0,display:"block"}),t.animIn={opacity:1},t.animOut={opacity:0}}},fadeout:{before:function(t,i,n,s){var o=t.API.getSlideOpts(t.nextSlide).slideCss||{};t.API.stackSlides(i,n,s),t.cssBefore=e.extend(o,{opacity:1,display:"block"}),t.animOut={opacity:0}}},scrollHorz:{before:function(e,t,i,n){e.API.stackSlides(t,i,n);var s=e.container.css("overflow","hidden").width();e.cssBefore={left:n?s:-s,top:0,opacity:1,display:"block"},e.cssAfter={zIndex:e._maxZ-2,left:0},e.animIn={left:0},e.animOut={left:n?-s:s}}}},e.fn.cycle.defaults={allowWrap:!0,autoSelector:".cycle-slideshow[data-cycle-auto-init!=false]",delay:0,easing:null,fx:"fade",hideNonActive:!0,loop:0,manualFx:void 0,manualSpeed:void 0,manualTrump:!0,maxZ:100,pauseOnHover:!1,reverse:!1,slideActiveClass:"cycle-slide-active",slideClass:"cycle-slide",slideCss:{position:"absolute",top:0,left:0},slides:"> img",speed:500,startingSlide:0,sync:!0,timeout:4e3,updateView:0},e(document).ready(function(){e(e.fn.cycle.defaults.autoSelector).cycle()})})(jQuery),/*! Cycle2 autoheight plugin; Copyright (c) M.Alsup, 2012; version: 20130304 */
function(e){"use strict";function t(t,n){var s,o,c,r=n.autoHeight;if("container"==r)o=e(n.slides[n.currSlide]).outerHeight(),n.container.height(o);else if(n._autoHeightRatio)n.container.height(n.container.width()/n._autoHeightRatio);else if("calc"===r||"number"==e.type(r)&&r>=0){if(c="calc"===r?i(t,n):r>=n.slides.length?0:r,c==n._sentinelIndex)return;n._sentinelIndex=c,n._sentinel&&n._sentinel.remove(),s=e(n.slides[c].cloneNode(!0)),s.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"),s.css({position:"static",visibility:"hidden",display:"block"}).prependTo(n.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"),s.find("*").css("visibility","hidden"),n._sentinel=s}}function i(t,i){var n=0,s=-1;return i.slides.each(function(t){var i=e(this).height();i>s&&(s=i,n=t)}),n}function n(t,i,n,s){var o=e(s).outerHeight(),c=i.sync?i.speed/2:i.speed;i.container.animate({height:o},c)}function s(i,o){o._autoHeightOnResize&&(e(window).off("resize orientationchange",o._autoHeightOnResize),o._autoHeightOnResize=null),o.container.off("cycle-slide-added cycle-slide-removed",t),o.container.off("cycle-destroyed",s),o.container.off("cycle-before",n),o._sentinel&&(o._sentinel.remove(),o._sentinel=null)}e.extend(e.fn.cycle.defaults,{autoHeight:0}),e(document).on("cycle-initialized",function(i,o){function c(){t(i,o)}var r,l=o.autoHeight,a=e.type(l),d=null;("string"===a||"number"===a)&&(o.container.on("cycle-slide-added cycle-slide-removed",t),o.container.on("cycle-destroyed",s),"container"==l?o.container.on("cycle-before",n):"string"===a&&/\d+\:\d+/.test(l)&&(r=l.match(/(\d+)\:(\d+)/),r=r[1]/r[2],o._autoHeightRatio=r),"number"!==a&&(o._autoHeightOnResize=function(){clearTimeout(d),d=setTimeout(c,50)},e(window).on("resize orientationchange",o._autoHeightOnResize)),setTimeout(c,30))})}(jQuery),/*! caption plugin for Cycle2;  version: 20130306 */
function(e){"use strict";e.extend(e.fn.cycle.defaults,{caption:"> .cycle-caption",captionTemplate:"{{slideNum}} / {{slideCount}}",overlay:"> .cycle-overlay",overlayTemplate:"<div>{{title}}</div><div>{{desc}}</div>",captionModule:"caption"}),e(document).on("cycle-update-view",function(t,i,n,s){"caption"===i.captionModule&&e.each(["caption","overlay"],function(){var e=this,t=n[e+"Template"],o=i.API.getComponent(e);o.length&&t?(o.html(i.API.tmpl(t,n,i,s)),o.show()):o.hide()})}),e(document).on("cycle-destroyed",function(t,i){var n;e.each(["caption","overlay"],function(){var e=this,t=i[e+"Template"];i[e]&&t&&(n=i.API.getComponent("caption"),n.empty())})})}(jQuery),/*! command plugin for Cycle2;  version: 20130707 */
function(e){"use strict";var t=e.fn.cycle;e.fn.cycle=function(i){var n,s,o,c=e.makeArray(arguments);return"number"==e.type(i)?this.cycle("goto",i):"string"==e.type(i)?this.each(function(){var r;return n=i,o=e(this).data("cycle.opts"),void 0===o?(t.log('slideshow must be initialized before sending commands; "'+n+'" ignored'),void 0):(n="goto"==n?"jump":n,s=o.API[n],e.isFunction(s)?(r=e.makeArray(c),r.shift(),s.apply(o.API,r)):(t.log("unknown command: ",n),void 0))}):t.apply(this,arguments)},e.extend(e.fn.cycle,t),e.extend(t.API,{next:function(){var e=this.opts();if(!e.busy||e.manualTrump){var t=e.reverse?-1:1;e.allowWrap===!1&&e.currSlide+t>=e.slideCount||(e.API.advanceSlide(t),e.API.trigger("cycle-next",[e]).log("cycle-next"))}},prev:function(){var e=this.opts();if(!e.busy||e.manualTrump){var t=e.reverse?1:-1;e.allowWrap===!1&&0>e.currSlide+t||(e.API.advanceSlide(t),e.API.trigger("cycle-prev",[e]).log("cycle-prev"))}},destroy:function(){this.stop();var t=this.opts(),i=e.isFunction(e._data)?e._data:e.noop;clearTimeout(t.timeoutId),t.timeoutId=0,t.API.stop(),t.API.trigger("cycle-destroyed",[t]).log("cycle-destroyed"),t.container.removeData(),i(t.container[0],"parsedAttrs",!1),t.retainStylesOnDestroy||(t.container.removeAttr("style"),t.slides.removeAttr("style"),t.slides.removeClass(t.slideActiveClass)),t.slides.each(function(){e(this).removeData(),i(this,"parsedAttrs",!1)})},jump:function(e){var t,i=this.opts();if(!i.busy||i.manualTrump){var n=parseInt(e,10);if(isNaN(n)||0>n||n>=i.slides.length)return i.API.log("goto: invalid slide index: "+n),void 0;if(n==i.currSlide)return i.API.log("goto: skipping, already on slide",n),void 0;i.nextSlide=n,clearTimeout(i.timeoutId),i.timeoutId=0,i.API.log("goto: ",n," (zero-index)"),t=i.currSlide<i.nextSlide,i.API.prepareTx(!0,t)}},stop:function(){var t=this.opts(),i=t.container;clearTimeout(t.timeoutId),t.timeoutId=0,t.API.stopTransition(),t.pauseOnHover&&(t.pauseOnHover!==!0&&(i=e(t.pauseOnHover)),i.off("mouseenter mouseleave")),t.API.trigger("cycle-stopped",[t]).log("cycle-stopped")},reinit:function(){var e=this.opts();e.API.destroy(),e.container.cycle()},remove:function(t){for(var i,n,s=this.opts(),o=[],c=1,r=0;s.slides.length>r;r++)i=s.slides[r],r==t?n=i:(o.push(i),e(i).data("cycle.opts").slideNum=c,c++);n&&(s.slides=e(o),s.slideCount--,e(n).remove(),t==s.currSlide?s.API.advanceSlide(1):s.currSlide>t?s.currSlide--:s.currSlide++,s.API.trigger("cycle-slide-removed",[s,t,n]).log("cycle-slide-removed"),s.API.updateView())}}),e(document).on("click.cycle","[data-cycle-cmd]",function(t){t.preventDefault();var i=e(this),n=i.data("cycle-cmd"),s=i.data("cycle-context")||".cycle-slideshow";e(s).cycle(n,i.data("cycle-arg"))})}(jQuery),/*! hash plugin for Cycle2;  version: 20130905 */
function(e){"use strict";function t(t,i){var n;return t._hashFence?(t._hashFence=!1,void 0):(n=window.location.hash.substring(1),t.slides.each(function(s){if(e(this).data("cycle-hash")==n){if(i===!0)t.startingSlide=s;else{var o=s>t.currSlide;t.nextSlide=s,t.API.prepareTx(!0,o)}return!1}}),void 0)}e(document).on("cycle-pre-initialize",function(i,n){t(n,!0),n._onHashChange=function(){t(n,!1)},e(window).on("hashchange",n._onHashChange)}),e(document).on("cycle-update-view",function(e,t,i){i.hash&&"#"+i.hash!=window.location.hash&&(t._hashFence=!0,window.location.hash=i.hash)}),e(document).on("cycle-destroyed",function(t,i){i._onHashChange&&e(window).off("hashchange",i._onHashChange)})}(jQuery),/*! loader plugin for Cycle2;  version: 20131020 */
function(e){"use strict";e.extend(e.fn.cycle.defaults,{loader:!1}),e(document).on("cycle-bootstrap",function(t,i){function n(t,n){function o(t){var o;"wait"==i.loader?(r.push(t),0===a&&(r.sort(c),s.apply(i.API,[r,n]),i.container.removeClass("cycle-loading"))):(o=e(i.slides[i.currSlide]),s.apply(i.API,[t,n]),o.show(),i.container.removeClass("cycle-loading"))}function c(e,t){return e.data("index")-t.data("index")}var r=[];if("string"==e.type(t))t=e.trim(t);else if("array"===e.type(t))for(var l=0;t.length>l;l++)t[l]=e(t[l])[0];t=e(t);var a=t.length;a&&(i.eventualSlideCount=i.slideCount+a,t.hide().appendTo("body").each(function(t){function c(){0===--l&&(--a,o(d))}var l=0,d=e(this),u=d.is("img")?d:d.find("img");return d.data("index",t),u=u.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])'),u.length?(l=u.length,u.each(function(){this.complete?c():e(this).load(function(){c()}).error(function(){0===--l&&(i.API.log("slide skipped; img not loaded:",this.src),0===--a&&"wait"==i.loader&&s.apply(i.API,[r,n]))})}),void 0):(--a,r.push(d),void 0)}),a&&i.container.addClass("cycle-loading"))}var s;i.loader&&(s=i.API.add,i.API.add=n)})}(jQuery),/*! pager plugin for Cycle2;  version: 20130525 */
function(e){"use strict";function t(t,i,n){var s,o=t.API.getComponent("pager");o.each(function(){var o=e(this);if(i.pagerTemplate){var c=t.API.tmpl(i.pagerTemplate,i,t,n[0]);s=e(c).appendTo(o)}else s=o.children().eq(t.slideCount-1);s.on(t.pagerEvent,function(e){e.preventDefault(),t.API.page(o,e.currentTarget)})})}function i(e,t){var i=this.opts();if(!i.busy||i.manualTrump){var n=e.children().index(t),s=n,o=s>i.currSlide;i.currSlide!=s&&(i.nextSlide=s,i.API.prepareTx(!0,o),i.API.trigger("cycle-pager-activated",[i,e,t]))}}e.extend(e.fn.cycle.defaults,{pager:"> .cycle-pager",pagerActiveClass:"cycle-pager-active",pagerEvent:"click.cycle",pagerTemplate:"<span>&bull;</span>"}),e(document).on("cycle-bootstrap",function(e,i,n){n.buildPagerLink=t}),e(document).on("cycle-slide-added",function(e,t,n,s){t.pager&&(t.API.buildPagerLink(t,n,s),t.API.page=i)}),e(document).on("cycle-slide-removed",function(t,i,n){if(i.pager){var s=i.API.getComponent("pager");s.each(function(){var t=e(this);e(t.children()[n]).remove()})}}),e(document).on("cycle-update-view",function(t,i){var n;i.pager&&(n=i.API.getComponent("pager"),n.each(function(){e(this).children().removeClass(i.pagerActiveClass).eq(i.currSlide).addClass(i.pagerActiveClass)}))}),e(document).on("cycle-destroyed",function(e,t){var i=t.API.getComponent("pager");i&&(i.children().off(t.pagerEvent),t.pagerTemplate&&i.empty())})}(jQuery),/*! prevnext plugin for Cycle2;  version: 20130709 */
function(e){"use strict";e.extend(e.fn.cycle.defaults,{next:"> .cycle-next",nextEvent:"click.cycle",disabledClass:"disabled",prev:"> .cycle-prev",prevEvent:"click.cycle",swipe:!1}),e(document).on("cycle-initialized",function(e,t){if(t.API.getComponent("next").on(t.nextEvent,function(e){e.preventDefault(),t.API.next()}),t.API.getComponent("prev").on(t.prevEvent,function(e){e.preventDefault(),t.API.prev()}),t.swipe){var i=t.swipeVert?"swipeUp.cycle":"swipeLeft.cycle swipeleft.cycle",n=t.swipeVert?"swipeDown.cycle":"swipeRight.cycle swiperight.cycle";t.container.on(i,function(){t.API.next()}),t.container.on(n,function(){t.API.prev()})}}),e(document).on("cycle-update-view",function(e,t){if(!t.allowWrap){var i=t.disabledClass,n=t.API.getComponent("next"),s=t.API.getComponent("prev"),o=t._prevBoundry||0,c=void 0!==t._nextBoundry?t._nextBoundry:t.slideCount-1;t.currSlide==c?n.addClass(i).prop("disabled",!0):n.removeClass(i).prop("disabled",!1),t.currSlide===o?s.addClass(i).prop("disabled",!0):s.removeClass(i).prop("disabled",!1)}}),e(document).on("cycle-destroyed",function(e,t){t.API.getComponent("prev").off(t.nextEvent),t.API.getComponent("next").off(t.prevEvent),t.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")})}(jQuery),/*! progressive loader plugin for Cycle2;  version: 20130315 */
function(e){"use strict";e.extend(e.fn.cycle.defaults,{progressive:!1}),e(document).on("cycle-pre-initialize",function(t,i){if(i.progressive){var n,s,o=i.API,c=o.next,r=o.prev,l=o.prepareTx,a=e.type(i.progressive);if("array"==a)n=i.progressive;else if(e.isFunction(i.progressive))n=i.progressive(i);else if("string"==a){if(s=e(i.progressive),n=e.trim(s.html()),!n)return;if(/^(\[)/.test(n))try{n=e.parseJSON(n)}catch(d){return o.log("error parsing progressive slides",d),void 0}else n=n.split(RegExp(s.data("cycle-split")||"\n")),n[n.length-1]||n.pop()}l&&(o.prepareTx=function(e,t){var s,o;return e||0===n.length?(l.apply(i.API,[e,t]),void 0):(t&&i.currSlide==i.slideCount-1?(o=n[0],n=n.slice(1),i.container.one("cycle-slide-added",function(e,t){setTimeout(function(){t.API.advanceSlide(1)},50)}),i.API.add(o)):t||0!==i.currSlide?l.apply(i.API,[e,t]):(s=n.length-1,o=n[s],n=n.slice(0,s),i.container.one("cycle-slide-added",function(e,t){setTimeout(function(){t.currSlide=1,t.API.advanceSlide(-1)},50)}),i.API.add(o,!0)),void 0)}),c&&(o.next=function(){var e=this.opts();if(n.length&&e.currSlide==e.slideCount-1){var t=n[0];n=n.slice(1),e.container.one("cycle-slide-added",function(e,t){c.apply(t.API),t.container.removeClass("cycle-loading")}),e.container.addClass("cycle-loading"),e.API.add(t)}else c.apply(e.API)}),r&&(o.prev=function(){var e=this.opts();if(n.length&&0===e.currSlide){var t=n.length-1,i=n[t];n=n.slice(0,t),e.container.one("cycle-slide-added",function(e,t){t.currSlide=1,t.API.advanceSlide(-1),t.container.removeClass("cycle-loading")}),e.container.addClass("cycle-loading"),e.API.add(i,!0)}else r.apply(e.API)})}})}(jQuery),/*! tmpl plugin for Cycle2;  version: 20121227 */
function(e){"use strict";e.extend(e.fn.cycle.defaults,{tmplRegex:"{{((.)?.*?)}}"}),e.extend(e.fn.cycle.API,{tmpl:function(t,i){var n=RegExp(i.tmplRegex||e.fn.cycle.defaults.tmplRegex,"g"),s=e.makeArray(arguments);return s.shift(),t.replace(n,function(t,i){var n,o,c,r,l=i.split(".");for(n=0;s.length>n;n++)if(c=s[n]){if(l.length>1)for(r=c,o=0;l.length>o;o++)c=r,r=r[l[o]]||i;else r=c[i];if(e.isFunction(r))return r.apply(c,s);if(void 0!==r&&null!==r&&r!=i)return r}return i})}})}(jQuery);
//@ sourceMappingURL=jquery.cycle2.js.map
//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.2";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return arguments.length<2||r?n[j.random(n.length-1)]:j.shuffle(n).slice(0,Math.max(0,t))};var k=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=k(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={},i=null==r?j.identity:k(r);return A(t,function(r,a){var o=i.call(e,r,a,t);n(u,o,r)}),u}};j.groupBy=F(function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o;return function(){i=this,u=arguments,a=new Date;var c=function(){var l=new Date-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u)))},l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u)),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=w||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
//# sourceMappingURL=underscore-min.map
(function(){var t=this;var e=t.Backbone;var i=[];var r=i.push;var s=i.slice;var n=i.splice;var a;if(typeof exports!=="undefined"){a=exports}else{a=t.Backbone={}}a.VERSION="1.1.0";var h=t._;if(!h&&typeof require!=="undefined")h=require("underscore");a.$=t.jQuery||t.Zepto||t.ender||t.$;a.noConflict=function(){t.Backbone=e;return this};a.emulateHTTP=false;a.emulateJSON=false;var o=a.Events={on:function(t,e,i){if(!l(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);r.push({callback:e,context:i,ctx:i||this});return this},once:function(t,e,i){if(!l(this,"once",t,[e,i])||!e)return this;var r=this;var s=h.once(function(){r.off(t,s);e.apply(this,arguments)});s._callback=e;return this.on(t,s,i)},off:function(t,e,i){var r,s,n,a,o,u,c,f;if(!this._events||!l(this,"off",t,[e,i]))return this;if(!t&&!e&&!i){this._events={};return this}a=t?[t]:h.keys(this._events);for(o=0,u=a.length;o<u;o++){t=a[o];if(n=this._events[t]){this._events[t]=r=[];if(e||i){for(c=0,f=n.length;c<f;c++){s=n[c];if(e&&e!==s.callback&&e!==s.callback._callback||i&&i!==s.context){r.push(s)}}}if(!r.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this;var e=s.call(arguments,1);if(!l(this,"trigger",t,e))return this;var i=this._events[t];var r=this._events.all;if(i)c(i,e);if(r)c(r,arguments);return this},stopListening:function(t,e,i){var r=this._listeningTo;if(!r)return this;var s=!e&&!i;if(!i&&typeof e==="object")i=this;if(t)(r={})[t._listenId]=t;for(var n in r){t=r[n];t.off(e,i,this);if(s||h.isEmpty(t._events))delete this._listeningTo[n]}return this}};var u=/\s+/;var l=function(t,e,i,r){if(!i)return true;if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(u.test(i)){var n=i.split(u);for(var a=0,h=n.length;a<h;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true};var c=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],h=e[2];switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n);return;case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,h);return;default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e)}};var f={listenTo:"on",listenToOnce:"once"};h.each(f,function(t,e){o[e]=function(e,i,r){var s=this._listeningTo||(this._listeningTo={});var n=e._listenId||(e._listenId=h.uniqueId("l"));s[n]=e;if(!r&&typeof i==="object")r=this;e[t](i,r,this);return this}});o.bind=o.on;o.unbind=o.off;h.extend(a,o);var d=a.Model=function(t,e){var i=t||{};e||(e={});this.cid=h.uniqueId("c");this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)i=this.parse(i,e)||{};i=h.defaults({},i,h.result(this,"defaults"));this.set(i,e);this.changed={};this.initialize.apply(this,arguments)};h.extend(d.prototype,o,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return h.clone(this.attributes)},sync:function(){return a.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return h.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,i){var r,s,n,a,o,u,l,c;if(t==null)return this;if(typeof t==="object"){s=t;i=e}else{(s={})[t]=e}i||(i={});if(!this._validate(s,i))return false;n=i.unset;o=i.silent;a=[];u=this._changing;this._changing=true;if(!u){this._previousAttributes=h.clone(this.attributes);this.changed={}}c=this.attributes,l=this._previousAttributes;if(this.idAttribute in s)this.id=s[this.idAttribute];for(r in s){e=s[r];if(!h.isEqual(c[r],e))a.push(r);if(!h.isEqual(l[r],e)){this.changed[r]=e}else{delete this.changed[r]}n?delete c[r]:c[r]=e}if(!o){if(a.length)this._pending=true;for(var f=0,d=a.length;f<d;f++){this.trigger("change:"+a[f],this,c[a[f]],i)}}if(u)return this;if(!o){while(this._pending){this._pending=false;this.trigger("change",this,i)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,h.extend({},e,{unset:true}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,h.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!h.isEmpty(this.changed);return h.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?h.clone(this.changed):false;var e,i=false;var r=this._changing?this._previousAttributes:this.attributes;for(var s in t){if(h.isEqual(r[s],e=t[s]))continue;(i||(i={}))[s]=e}return i},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return h.clone(this._previousAttributes)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=this;var i=t.success;t.success=function(r){if(!e.set(e.parse(r,t),t))return false;if(i)i(e,r,t);e.trigger("sync",e,r,t)};M(this,t);return this.sync("read",this,t)},save:function(t,e,i){var r,s,n,a=this.attributes;if(t==null||typeof t==="object"){r=t;i=e}else{(r={})[t]=e}i=h.extend({validate:true},i);if(r&&!i.wait){if(!this.set(r,i))return false}else{if(!this._validate(r,i))return false}if(r&&i.wait){this.attributes=h.extend({},a,r)}if(i.parse===void 0)i.parse=true;var o=this;var u=i.success;i.success=function(t){o.attributes=a;var e=o.parse(t,i);if(i.wait)e=h.extend(r||{},e);if(h.isObject(e)&&!o.set(e,i)){return false}if(u)u(o,t,i);o.trigger("sync",o,t,i)};M(this,i);s=this.isNew()?"create":i.patch?"patch":"update";if(s==="patch")i.attrs=r;n=this.sync(s,this,i);if(r&&i.wait)this.attributes=a;return n},destroy:function(t){t=t?h.clone(t):{};var e=this;var i=t.success;var r=function(){e.trigger("destroy",e,e.collection,t)};t.success=function(s){if(t.wait||e.isNew())r();if(i)i(e,s,t);if(!e.isNew())e.trigger("sync",e,s,t)};if(this.isNew()){t.success();return false}M(this,t);var s=this.sync("delete",this,t);if(!t.wait)r();return s},url:function(){var t=h.result(this,"urlRoot")||h.result(this.collection,"url")||U();if(this.isNew())return t;return t+(t.charAt(t.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(t){return this._validate({},h.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=h.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;if(!i)return true;this.trigger("invalid",this,i,h.extend(e,{validationError:i}));return false}});var p=["keys","values","pairs","invert","pick","omit"];h.each(p,function(t){d.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.attributes);return h[t].apply(h,e)}});var v=a.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,h.extend({silent:true},e))};var g={add:true,remove:true,merge:true};var m={add:true,remove:false};h.extend(v.prototype,o,{model:d,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return a.sync.apply(this,arguments)},add:function(t,e){return this.set(t,h.extend({merge:false},e,m))},remove:function(t,e){var i=!h.isArray(t);t=i?[t]:h.clone(t);e||(e={});var r,s,n,a;for(r=0,s=t.length;r<s;r++){a=t[r]=this.get(t[r]);if(!a)continue;delete this._byId[a.id];delete this._byId[a.cid];n=this.indexOf(a);this.models.splice(n,1);this.length--;if(!e.silent){e.index=n;a.trigger("remove",a,this,e)}this._removeReference(a)}return i?t[0]:t},set:function(t,e){e=h.defaults({},e,g);if(e.parse)t=this.parse(t,e);var i=!h.isArray(t);t=i?t?[t]:[]:h.clone(t);var r,s,n,a,o,u,l;var c=e.at;var f=this.model;var p=this.comparator&&c==null&&e.sort!==false;var v=h.isString(this.comparator)?this.comparator:null;var m=[],y=[],_={};var w=e.add,b=e.merge,x=e.remove;var E=!p&&w&&x?[]:false;for(r=0,s=t.length;r<s;r++){o=t[r];if(o instanceof d){n=a=o}else{n=o[f.prototype.idAttribute]}if(u=this.get(n)){if(x)_[u.cid]=true;if(b){o=o===a?a.attributes:o;if(e.parse)o=u.parse(o,e);u.set(o,e);if(p&&!l&&u.hasChanged(v))l=true}t[r]=u}else if(w){a=t[r]=this._prepareModel(o,e);if(!a)continue;m.push(a);a.on("all",this._onModelEvent,this);this._byId[a.cid]=a;if(a.id!=null)this._byId[a.id]=a}if(E)E.push(u||a)}if(x){for(r=0,s=this.length;r<s;++r){if(!_[(a=this.models[r]).cid])y.push(a)}if(y.length)this.remove(y,e)}if(m.length||E&&E.length){if(p)l=true;this.length+=m.length;if(c!=null){for(r=0,s=m.length;r<s;r++){this.models.splice(c+r,0,m[r])}}else{if(E)this.models.length=0;var T=E||m;for(r=0,s=T.length;r<s;r++){this.models.push(T[r])}}}if(l)this.sort({silent:true});if(!e.silent){for(r=0,s=m.length;r<s;r++){(a=m[r]).trigger("add",a,this,e)}if(l||E&&E.length)this.trigger("sort",this,e)}return i?t[0]:t},reset:function(t,e){e||(e={});for(var i=0,r=this.models.length;i<r;i++){this._removeReference(this.models[i])}e.previousModels=this.models;this._reset();t=this.add(t,h.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,h.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);this.remove(e,t);return e},unshift:function(t,e){return this.add(t,h.extend({at:0},e))},shift:function(t){var e=this.at(0);this.remove(e,t);return e},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t.id]||this._byId[t.cid]||this._byId[t]},at:function(t){return this.models[t]},where:function(t,e){if(h.isEmpty(t))return e?void 0:[];return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");t||(t={});if(h.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(h.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return h.invoke(this.models,"get",t)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=t.success;var i=this;t.success=function(r){var s=t.reset?"reset":"set";i[s](r,t);if(e)e(i,r,t);i.trigger("sync",i,r,t)};M(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?h.clone(e):{};if(!(t=this._prepareModel(t,e)))return false;if(!e.wait)this.add(t,e);var i=this;var r=e.success;e.success=function(t,e,s){if(s.wait)i.add(t,s);if(r)r(t,e,s)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(t instanceof d){if(!t.collection)t.collection=this;return t}e=e?h.clone(e):{};e.collection=this;var i=new this.model(t,e);if(!i.validationError)return i;this.trigger("invalid",this,i.validationError,e);return false},_removeReference:function(t){if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)];if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}});var y=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain"];h.each(y,function(t){v.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.models);return h[t].apply(h,e)}});var _=["groupBy","countBy","sortBy"];h.each(_,function(t){v.prototype[t]=function(e,i){var r=h.isFunction(e)?e:function(t){return t.get(e)};return h[t](this.models,r,i)}});var w=a.View=function(t){this.cid=h.uniqueId("view");t||(t={});h.extend(this,h.pick(t,x));this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var b=/^(\S+)\s*(.*)$/;var x=["model","collection","el","id","attributes","className","tagName","events"];h.extend(w.prototype,o,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(t,e){if(this.$el)this.undelegateEvents();this.$el=t instanceof a.$?t:a.$(t);this.el=this.$el[0];if(e!==false)this.delegateEvents();return this},delegateEvents:function(t){if(!(t||(t=h.result(this,"events"))))return this;this.undelegateEvents();for(var e in t){var i=t[e];if(!h.isFunction(i))i=this[t[e]];if(!i)continue;var r=e.match(b);var s=r[1],n=r[2];i=h.bind(i,this);s+=".delegateEvents"+this.cid;if(n===""){this.$el.on(s,i)}else{this.$el.on(s,n,i)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_ensureElement:function(){if(!this.el){var t=h.extend({},h.result(this,"attributes"));if(this.id)t.id=h.result(this,"id");if(this.className)t["class"]=h.result(this,"className");var e=a.$("<"+h.result(this,"tagName")+">").attr(t);this.setElement(e,false)}else{this.setElement(h.result(this,"el"),false)}}});a.sync=function(t,e,i){var r=T[t];h.defaults(i||(i={}),{emulateHTTP:a.emulateHTTP,emulateJSON:a.emulateJSON});var s={type:r,dataType:"json"};if(!i.url){s.url=h.result(e,"url")||U()}if(i.data==null&&e&&(t==="create"||t==="update"||t==="patch")){s.contentType="application/json";s.data=JSON.stringify(i.attrs||e.toJSON(i))}if(i.emulateJSON){s.contentType="application/x-www-form-urlencoded";s.data=s.data?{model:s.data}:{}}if(i.emulateHTTP&&(r==="PUT"||r==="DELETE"||r==="PATCH")){s.type="POST";if(i.emulateJSON)s.data._method=r;var n=i.beforeSend;i.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",r);if(n)return n.apply(this,arguments)}}if(s.type!=="GET"&&!i.emulateJSON){s.processData=false}if(s.type==="PATCH"&&E){s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var o=i.xhr=a.ajax(h.extend(s,i));e.trigger("request",e,o,i);return o};var E=typeof window!=="undefined"&&!!window.ActiveXObject&&!(window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent);var T={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};a.ajax=function(){return a.$.ajax.apply(a.$,arguments)};var k=a.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var S=/\((.*?)\)/g;var $=/(\(\?)?:\w+/g;var H=/\*\w+/g;var A=/[\-{}\[\]+?.,\\\^$|#\s]/g;h.extend(k.prototype,o,{initialize:function(){},route:function(t,e,i){if(!h.isRegExp(t))t=this._routeToRegExp(t);if(h.isFunction(e)){i=e;e=""}if(!i)i=this[e];var r=this;a.history.route(t,function(s){var n=r._extractParameters(t,s);i&&i.apply(r,n);r.trigger.apply(r,["route:"+e].concat(n));r.trigger("route",e,n);a.history.trigger("route",r,e,n)});return this},navigate:function(t,e){a.history.navigate(t,e);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=h.result(this,"routes");var t,e=h.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(A,"\\$&").replace(S,"(?:$1)?").replace($,function(t,e){return e?t:"([^/]+)"}).replace(H,"(.*?)");return new RegExp("^"+t+"$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return h.map(i,function(t){return t?decodeURIComponent(t):null})}});var I=a.History=function(){this.handlers=[];h.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var P=/msie [\w.]+/;var C=/\/$/;var j=/[?#].*$/;I.started=false;h.extend(I.prototype,o,{interval:50,getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=this.location.pathname;var i=this.root.replace(C,"");if(!t.indexOf(i))t=t.slice(i.length)}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(I.started)throw new Error("Backbone.history has already been started");I.started=true;this.options=h.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var e=this.getFragment();var i=document.documentMode;var r=P.exec(navigator.userAgent.toLowerCase())&&(!i||i<=7);this.root=("/"+this.root+"/").replace(O,"/");if(r&&this._wantsHashChange){this.iframe=a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;this.navigate(e)}if(this._hasPushState){a.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!r){a.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=e;var s=this.location;var n=s.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!n){this.fragment=this.getFragment(null,true);this.location.replace(this.root+this.location.search+"#"+this.fragment);return true}else if(this._hasPushState&&n&&s.hash){this.fragment=this.getHash().replace(N,"");this.history.replaceState({},document.title,this.root+this.fragment+s.search)}}if(!this.options.silent)return this.loadUrl()},stop:function(){a.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);I.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){t=this.fragment=this.getFragment(t);return h.any(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!I.started)return false;if(!e||e===true)e={trigger:!!e};var i=this.root+(t=this.getFragment(t||""));t=t.replace(j,"");if(this.fragment===t)return;this.fragment=t;if(t===""&&i!=="/")i=i.slice(0,-1);if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});a.history=new I;var R=function(t,e){var i=this;var r;if(t&&h.has(t,"constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}h.extend(r,i,e);var s=function(){this.constructor=r};s.prototype=i.prototype;r.prototype=new s;if(t)h.extend(r.prototype,t);r.__super__=i.prototype;return r};d.extend=v.extend=k.extend=w.extend=I.extend=R;var U=function(){throw new Error('A "url" property or function must be specified')};var M=function(t,e){var i=e.error;e.error=function(r){if(i)i(t,r,e);t.trigger("error",t,r,e)}}}).call(this);
//# sourceMappingURL=backbone-min.map
/*! jQuery UI - v1.10.0 - 2013-01-28
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
* Copyright (c) 2013 jQuery Foundation and other contributors Licensed MIT */

(function(e,t){function i(t,n){var r,i,o,u=t.nodeName.toLowerCase();return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap=#"+i+"]")[0],!!o&&s(o))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return e.css(this,"visibility")==="hidden"}).length}var n=0,r=/^ui-id-\d+$/;e.ui=e.ui||{};if(e.ui.version)return;e.extend(e.ui,{version:"1.10.0",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,n){return typeof t=="number"?this.each(function(){var r=this;setTimeout(function(){e(r).focus(),n&&n.call(r)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length){var r=e(this[0]),i,s;while(r.length&&r[0]!==document){i=r.css("position");if(i==="absolute"||i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);if(!isNaN(s)&&s!==0)return s}r=r.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){r.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&i(t,!r)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n){var r,i=e.plugins[t];if(!i||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11)return;for(r=0;r<i.length;r++)e.options[i[r][0]]&&i[r][1].apply(e.element,n)}},hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)}})})(jQuery);(function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(t,n,r){var i,s,o,u,a={},f=t.split(".")[0];t=t.split(".")[1],i=f+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[f]=e[f]||{},s=e[f][t],o=e[f][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,r){if(!e.isFunction(r)){a[t]=r;return}a[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},i=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=i,s=r.apply(this,arguments),this._super=t,this._superApply=n,s}}()}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix:t},a,{constructor:o,namespace:f,widgetName:t,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o)},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName||n;e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.jquery?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():e.data(this,s,new i(o,this))}),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,n,r){var i,s=this;typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;return(typeof o=="string"?s[o]:o).apply(s,arguments)}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);var a=r.match(/^(\w+)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];l?i.delegate(l,f,u):n.bind(f,u)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&e.effects.effect[u]?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}})})(jQuery);(function(e,t){var n=!1;e(document).mouseup(function(){n=!1}),e.widget("ui.mouse",{version:"1.10.0",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target,t.widgetName+".preventClickEvent"))return e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(n)return;this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var r=this,i=t.which===1,s=typeof this.options.cancel=="string"&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;if(!i||s||!this._mouseCapture(t))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==!1;if(!this._mouseStarted)return t.preventDefault(),!0}return!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return r._mouseMove(e)},this._mouseUpDelegate=function(e){return r._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0,!0},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(e,t){function h(e,t,n){return[parseInt(e[0],10)*(l.test(e[0])?t/100:1),parseInt(e[1],10)*(l.test(e[1])?n/100:1)]}function p(t,n){return parseInt(e.css(t,n),10)||0}function d(t){var n=t[0];return n.nodeType===9?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(n)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:n.preventDefault?{width:0,height:0,offset:{top:n.pageY,left:n.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,r=Math.max,i=Math.abs,s=Math.round,o=/left|center|right/,u=/top|center|bottom/,a=/[\+\-]\d+%?/,f=/^\w+/,l=/%$/,c=e.fn.position;e.position={scrollbarWidth:function(){if(n!==t)return n;var r,i,s=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return e("body").append(s),r=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,r===i&&(i=s[0].clientWidth),s.remove(),n=r-i},getScrollInfo:function(t){var n=t.isWindow?"":t.element.css("overflow-x"),r=t.isWindow?"":t.element.css("overflow-y"),i=n==="scroll"||n==="auto"&&t.width<t.element[0].scrollWidth,s=r==="scroll"||r==="auto"&&t.height<t.element[0].scrollHeight;return{width:i?e.position.scrollbarWidth():0,height:s?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),r=e.isWindow(n[0]);return{element:n,isWindow:r,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:r?n.width():n.outerWidth(),height:r?n.height():n.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return c.apply(this,arguments);t=e.extend({},t);var n,l,v,m,g,y,b=e(t.of),w=e.position.getWithinInfo(t.within),E=e.position.getScrollInfo(w),S=(t.collision||"flip").split(" "),x={};return y=d(b),b[0].preventDefault&&(t.at="left top"),l=y.width,v=y.height,m=y.offset,g=e.extend({},m),e.each(["my","at"],function(){var e=(t[this]||"").split(" "),n,r;e.length===1&&(e=o.test(e[0])?e.concat(["center"]):u.test(e[0])?["center"].concat(e):["center","center"]),e[0]=o.test(e[0])?e[0]:"center",e[1]=u.test(e[1])?e[1]:"center",n=a.exec(e[0]),r=a.exec(e[1]),x[this]=[n?n[0]:0,r?r[0]:0],t[this]=[f.exec(e[0])[0],f.exec(e[1])[0]]}),S.length===1&&(S[1]=S[0]),t.at[0]==="right"?g.left+=l:t.at[0]==="center"&&(g.left+=l/2),t.at[1]==="bottom"?g.top+=v:t.at[1]==="center"&&(g.top+=v/2),n=h(x.at,l,v),g.left+=n[0],g.top+=n[1],this.each(function(){var o,u,a=e(this),f=a.outerWidth(),c=a.outerHeight(),d=p(this,"marginLeft"),y=p(this,"marginTop"),T=f+d+p(this,"marginRight")+E.width,N=c+y+p(this,"marginBottom")+E.height,C=e.extend({},g),k=h(x.my,a.outerWidth(),a.outerHeight());t.my[0]==="right"?C.left-=f:t.my[0]==="center"&&(C.left-=f/2),t.my[1]==="bottom"?C.top-=c:t.my[1]==="center"&&(C.top-=c/2),C.left+=k[0],C.top+=k[1],e.support.offsetFractions||(C.left=s(C.left),C.top=s(C.top)),o={marginLeft:d,marginTop:y},e.each(["left","top"],function(r,i){e.ui.position[S[r]]&&e.ui.position[S[r]][i](C,{targetWidth:l,targetHeight:v,elemWidth:f,elemHeight:c,collisionPosition:o,collisionWidth:T,collisionHeight:N,offset:[n[0]+k[0],n[1]+k[1]],my:t.my,at:t.at,within:w,elem:a})}),t.using&&(u=function(e){var n=m.left-C.left,s=n+l-f,o=m.top-C.top,u=o+v-c,h={target:{element:b,left:m.left,top:m.top,width:l,height:v},element:{element:a,left:C.left,top:C.top,width:f,height:c},horizontal:s<0?"left":n>0?"right":"center",vertical:u<0?"top":o>0?"bottom":"middle"};l<f&&i(n+s)<l&&(h.horizontal="center"),v<c&&i(o+u)<v&&(h.vertical="middle"),r(i(n),i(s))>r(i(o),i(u))?h.important="horizontal":h.important="vertical",t.using.call(this,e,h)}),a.offset(e.extend(C,{using:u}))})},e.ui.position={fit:{left:function(e,t){var n=t.within,i=n.isWindow?n.scrollLeft:n.offset.left,s=n.width,o=e.left-t.collisionPosition.marginLeft,u=i-o,a=o+t.collisionWidth-s-i,f;t.collisionWidth>s?u>0&&a<=0?(f=e.left+u+t.collisionWidth-s-i,e.left+=u-f):a>0&&u<=0?e.left=i:u>a?e.left=i+s-t.collisionWidth:e.left=i:u>0?e.left+=u:a>0?e.left-=a:e.left=r(e.left-o,e.left)},top:function(e,t){var n=t.within,i=n.isWindow?n.scrollTop:n.offset.top,s=t.within.height,o=e.top-t.collisionPosition.marginTop,u=i-o,a=o+t.collisionHeight-s-i,f;t.collisionHeight>s?u>0&&a<=0?(f=e.top+u+t.collisionHeight-s-i,e.top+=u-f):a>0&&u<=0?e.top=i:u>a?e.top=i+s-t.collisionHeight:e.top=i:u>0?e.top+=u:a>0?e.top-=a:e.top=r(e.top-o,e.top)}},flip:{left:function(e,t){var n=t.within,r=n.offset.left+n.scrollLeft,s=n.width,o=n.isWindow?n.scrollLeft:n.offset.left,u=e.left-t.collisionPosition.marginLeft,a=u-o,f=u+t.collisionWidth-s-o,l=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0,c=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0,h=-2*t.offset[0],p,d;if(a<0){p=e.left+l+c+h+t.collisionWidth-s-r;if(p<0||p<i(a))e.left+=l+c+h}else if(f>0){d=e.left-t.collisionPosition.marginLeft+l+c+h-o;if(d>0||i(d)<f)e.left+=l+c+h}},top:function(e,t){var n=t.within,r=n.offset.top+n.scrollTop,s=n.height,o=n.isWindow?n.scrollTop:n.offset.top,u=e.top-t.collisionPosition.marginTop,a=u-o,f=u+t.collisionHeight-s-o,l=t.my[1]==="top",c=l?-t.elemHeight:t.my[1]==="bottom"?t.elemHeight:0,h=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight:0,p=-2*t.offset[1],d,v;a<0?(v=e.top+c+h+p+t.collisionHeight-s-r,e.top+c+h+p>a&&(v<0||v<i(a))&&(e.top+=c+h+p)):f>0&&(d=e.top-t.collisionPosition.marginTop+c+h+p-o,e.top+c+h+p>f&&(d>0||i(d)<f)&&(e.top+=c+h+p))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,n,r,i,s,o=document.getElementsByTagName("body")[0],u=document.createElement("div");t=document.createElement(o?"div":"body"),r={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&e.extend(r,{position:"absolute",left:"-1000px",top:"-1000px"});for(s in r)t.style[s]=r[s];t.appendChild(u),n=o||document.documentElement,n.insertBefore(t,n.firstChild),u.style.cssText="position: absolute; left: 10.7432222px;",i=e(u).offset().left,e.support.offsetFractions=i>10&&i<11,t.innerHTML="",n.removeChild(t)}()})(jQuery);(function(e,t){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.0",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){this.options.helper==="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var n=this.options;return this.helper||n.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(n.iframeFix===!0?"iframe":n.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var n=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt),n.containment&&this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,n){this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute");if(!n){var r=this._uiHash();if(this._trigger("drag",t,r)===!1)return this._mouseUp({}),!1;this.position=r.position}if(!this.options.axis||this.options.axis!=="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!=="x")this.helper[0].style.top=this.position.top+"px";return e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var n,r=this,i=!1,s=!1;e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),n=this.element[0];while(n&&(n=n.parentNode))n===document&&(i=!0);return!i&&this.options.helper==="original"?!1:(this.options.revert==="invalid"&&!s||this.options.revert==="valid"&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){r._trigger("stop",t)!==!1&&r._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1)},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){var n=!this.options.handle||!e(this.options.handle,this.element).length?!0:!1;return e(this.options.handle,this.element).find("*").addBack().each(function(){this===t.target&&(n=!0)}),n},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t])):n.helper==="clone"?this.element.clone().removeAttr("id"):this.element;return r.parents("body").length||r.appendTo(n.appendTo==="parent"?this.element[0].parentNode:n.appendTo),r[0]!==this.element[0]&&!/(fixed|absolute)/.test(r.css("position"))&&r.css("position","absolute"),r},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,n,r,i=this.options;i.containment==="parent"&&(i.containment=this.helper[0].parentNode);if(i.containment==="document"||i.containment==="window")this.containment=[i.containment==="document"?0:e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,i.containment==="document"?0:e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(i.containment==="document"?0:e(window).scrollLeft())+e(i.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(i.containment==="document"?0:e(window).scrollTop())+(e(i.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(i.containment)&&i.containment.constructor!==Array){n=e(i.containment),r=n[0];if(!r)return;t=e(r).css("overflow")!=="hidden",this.containment=[(parseInt(e(r).css("borderLeftWidth"),10)||0)+(parseInt(e(r).css("paddingLeft"),10)||0),(parseInt(e(r).css("borderTopWidth"),10)||0)+(parseInt(e(r).css("paddingTop"),10)||0),(t?Math.max(r.scrollWidth,r.offsetWidth):r.offsetWidth)-(parseInt(e(r).css("borderLeftWidth"),10)||0)-(parseInt(e(r).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(r.scrollHeight,r.offsetHeight):r.offsetHeight)-(parseInt(e(r).css("borderTopWidth"),10)||0)-(parseInt(e(r).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=n}else i.containment.constructor===Array&&(this.containment=i.containment)},_convertPositionTo:function(t,n){n||(n=this.position);var r=t==="absolute"?1:-1,i=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,s=/(html|body)/i.test(i[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():s?0:i.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():s?0:i.scrollLeft())*r}},_generatePosition:function(t){var n,r,i,s,o=this.options,u=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(u[0].tagName),f=t.pageX,l=t.pageY;return this.originalPosition&&(this.containment&&(this.relative_container?(r=this.relative_container.offset(),n=[this.containment[0]+r.left,this.containment[1]+r.top,this.containment[2]+r.left,this.containment[3]+r.top]):n=this.containment,t.pageX-this.offset.click.left<n[0]&&(f=n[0]+this.offset.click.left),t.pageY-this.offset.click.top<n[1]&&(l=n[1]+this.offset.click.top),t.pageX-this.offset.click.left>n[2]&&(f=n[2]+this.offset.click.left),t.pageY-this.offset.click.top>n[3]&&(l=n[3]+this.offset.click.top)),o.grid&&(i=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=n?i-this.offset.click.top>=n[1]||i-this.offset.click.top>n[3]?i:i-this.offset.click.top>=n[1]?i-o.grid[1]:i+o.grid[1]:i,s=o.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,f=n?s-this.offset.click.left>=n[0]||s-this.offset.click.left>n[2]?s:s-this.offset.click.left>=n[0]?s-o.grid[0]:s+o.grid[0]:s)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():a?0:u.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():a?0:u.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,n,r){return r=r||this._uiHash(),e.ui.plugin.call(this,t,[n,r]),t==="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,n,r)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,n){var r=e(this).data("ui-draggable"),i=r.options,s=e.extend({},n,{item:r.element});r.sortables=[],e(i.connectToSortable).each(function(){var n=e.data(this,"ui-sortable");n&&!n.options.disabled&&(r.sortables.push({instance:n,shouldRevert:n.options.revert}),n.refreshPositions(),n._trigger("activate",t,s))})},stop:function(t,n){var r=e(this).data("ui-draggable"),i=e.extend({},n,{item:r.element});e.each(r.sortables,function(){this.instance.isOver?(this.instance.isOver=0,r.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,r.options.helper==="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,i))})},drag:function(t,n){var r=e(this).data("ui-draggable"),i=this;e.each(r.sortables,function(){var s=!1,o=this;this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(s=!0,e.each(r.sortables,function(){return this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&e.ui.contains(o.instance.element[0],this.instance.element[0])&&(s=!1),s})),s?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(i).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return n.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=r.offset.click.top,this.instance.offset.click.left=r.offset.click.left,this.instance.offset.parent.left-=r.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=r.offset.parent.top-this.instance.offset.parent.top,r._trigger("toSortable",t),r.dropped=this.instance.element,r.currentItem=r.element,this.instance.fromOutside=r),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),r._trigger("fromSortable",t),r.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),n=e(this).data("ui-draggable").options;t.css("cursor")&&(n._cursor=t.css("cursor")),t.css("cursor",n.cursor)},stop:function(){var t=e(this).data("ui-draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,n){var r=e(n.helper),i=e(this).data("ui-draggable").options;r.css("opacity")&&(i._opacity=r.css("opacity")),r.css("opacity",i.opacity)},stop:function(t,n){var r=e(this).data("ui-draggable").options;r._opacity&&e(n.helper).css("opacity",r._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");t.scrollParent[0]!==document&&t.scrollParent[0].tagName!=="HTML"&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var n=e(this).data("ui-draggable"),r=n.options,i=!1;if(n.scrollParent[0]!==document&&n.scrollParent[0].tagName!=="HTML"){if(!r.axis||r.axis!=="x")n.overflowOffset.top+n.scrollParent[0].offsetHeight-t.pageY<r.scrollSensitivity?n.scrollParent[0].scrollTop=i=n.scrollParent[0].scrollTop+r.scrollSpeed:t.pageY-n.overflowOffset.top<r.scrollSensitivity&&(n.scrollParent[0].scrollTop=i=n.scrollParent[0].scrollTop-r.scrollSpeed);if(!r.axis||r.axis!=="y")n.overflowOffset.left+n.scrollParent[0].offsetWidth-t.pageX<r.scrollSensitivity?n.scrollParent[0].scrollLeft=i=n.scrollParent[0].scrollLeft+r.scrollSpeed:t.pageX-n.overflowOffset.left<r.scrollSensitivity&&(n.scrollParent[0].scrollLeft=i=n.scrollParent[0].scrollLeft-r.scrollSpeed)}else{if(!r.axis||r.axis!=="x")t.pageY-e(document).scrollTop()<r.scrollSensitivity?i=e(document).scrollTop(e(document).scrollTop()-r.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<r.scrollSensitivity&&(i=e(document).scrollTop(e(document).scrollTop()+r.scrollSpeed));if(!r.axis||r.axis!=="y")t.pageX-e(document).scrollLeft()<r.scrollSensitivity?i=e(document).scrollLeft(e(document).scrollLeft()-r.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<r.scrollSensitivity&&(i=e(document).scrollLeft(e(document).scrollLeft()+r.scrollSpeed))}i!==!1&&e.ui.ddmanager&&!r.dropBehaviour&&e.ui.ddmanager.prepareOffsets(n,t)}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),n=t.options;t.snapElements=[],e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var n=e(this),r=n.offset();this!==t.element[0]&&t.snapElements.push({item:this,width:n.outerWidth(),height:n.outerHeight(),top:r.top,left:r.left})})},drag:function(t,n){var r,i,s,o,u,a,f,l,c,h,p=e(this).data("ui-draggable"),d=p.options,v=d.snapTolerance,m=n.offset.left,g=m+p.helperProportions.width,y=n.offset.top,b=y+p.helperProportions.height;for(c=p.snapElements.length-1;c>=0;c--){u=p.snapElements[c].left,a=u+p.snapElements[c].width,f=p.snapElements[c].top,l=f+p.snapElements[c].height;if(!(u-v<m&&m<a+v&&f-v<y&&y<l+v||u-v<m&&m<a+v&&f-v<b&&b<l+v||u-v<g&&g<a+v&&f-v<y&&y<l+v||u-v<g&&g<a+v&&f-v<b&&b<l+v)){p.snapElements[c].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=!1;continue}d.snapMode!=="inner"&&(r=Math.abs(f-b)<=v,i=Math.abs(l-y)<=v,s=Math.abs(u-g)<=v,o=Math.abs(a-m)<=v,r&&(n.position.top=p._convertPositionTo("relative",{top:f-p.helperProportions.height,left:0}).top-p.margins.top),i&&(n.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),s&&(n.position.left=p._convertPositionTo("relative",{top:0,left:u-p.helperProportions.width}).left-p.margins.left),o&&(n.position.left=p._convertPositionTo("relative",{top:0,left:a}).left-p.margins.left)),h=r||i||s||o,d.snapMode!=="outer"&&(r=Math.abs(f-y)<=v,i=Math.abs(l-b)<=v,s=Math.abs(u-m)<=v,o=Math.abs(a-g)<=v,r&&(n.position.top=p._convertPositionTo("relative",{top:f,left:0}).top-p.margins.top),i&&(n.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),s&&(n.position.left=p._convertPositionTo("relative",{top:0,left:u}).left-p.margins.left),o&&(n.position.left=p._convertPositionTo("relative",{top:0,left:a-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[c].snapping&&(r||i||s||o||h)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=r||i||s||o||h}}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,n=e(this).data("ui-draggable").options,r=e.makeArray(e(n.stack)).sort(function(t,n){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(n).css("zIndex"),10)||0)});if(!r.length)return;t=parseInt(r[0].style.zIndex,10)||0,e(r).each(function(e){this.style.zIndex=t+e}),this[0].style.zIndex=t+r.length}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,n){var r=e(n.helper),i=e(this).data("ui-draggable").options;r.css("zIndex")&&(i._zIndex=r.css("zIndex")),r.css("zIndex",i.zIndex)},stop:function(t,n){var r=e(this).data("ui-draggable").options;r._zIndex&&e(n.helper).css("zIndex",r._zIndex)}})})(jQuery);(function(e,t){function n(e,t,n){return e>t&&e<t+n}e.widget("ui.droppable",{version:"1.10.0",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t=this.options,n=t.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(n)?n:function(e){return e.is(n)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},e.ui.ddmanager.droppables[t.scope]=e.ui.ddmanager.droppables[t.scope]||[],e.ui.ddmanager.droppables[t.scope].push(this),t.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){var t=0,n=e.ui.ddmanager.droppables[this.options.scope];for(;t<n.length;t++)n[t]===this&&n.splice(t,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,n){t==="accept"&&(this.accept=e.isFunction(n)?n:function(e){return e.is(n)}),e.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var n=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),n&&this._trigger("activate",t,this.ui(n))},_deactivate:function(t){var n=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),n&&this._trigger("deactivate",t,this.ui(n))},_over:function(t){var n=e.ui.ddmanager.current;if(!n||(n.currentItem||n.element)[0]===this.element[0])return;this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(n)))},_out:function(t){var n=e.ui.ddmanager.current;if(!n||(n.currentItem||n.element)[0]===this.element[0])return;this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(n)))},_drop:function(t,n){var r=n||e.ui.ddmanager.current,i=!1;return!r||(r.currentItem||r.element)[0]===this.element[0]?!1:(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var t=e.data(this,"ui-droppable");if(t.options.greedy&&!t.options.disabled&&t.options.scope===r.options.scope&&t.accept.call(t.element[0],r.currentItem||r.element)&&e.ui.intersect(r,e.extend(t,{offset:t.element.offset()}),t.options.tolerance))return i=!0,!1}),i?!1:this.accept.call(this.element[0],r.currentItem||r.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(r)),this.element):!1)},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(e,t,r){if(!t.offset)return!1;var i,s,o=(e.positionAbs||e.position.absolute).left,u=o+e.helperProportions.width,a=(e.positionAbs||e.position.absolute).top,f=a+e.helperProportions.height,l=t.offset.left,c=l+t.proportions.width,h=t.offset.top,p=h+t.proportions.height;switch(r){case"fit":return l<=o&&u<=c&&h<=a&&f<=p;case"intersect":return l<o+e.helperProportions.width/2&&u-e.helperProportions.width/2<c&&h<a+e.helperProportions.height/2&&f-e.helperProportions.height/2<p;case"pointer":return i=(e.positionAbs||e.position.absolute).left+(e.clickOffset||e.offset.click).left,s=(e.positionAbs||e.position.absolute).top+(e.clickOffset||e.offset.click).top,n(s,h,t.proportions.height)&&n(i,l,t.proportions.width);case"touch":return(a>=h&&a<=p||f>=h&&f<=p||a<h&&f>p)&&(o>=l&&o<=c||u>=l&&u<=c||o<l&&u>c);default:return!1}},e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,n){var r,i,s=e.ui.ddmanager.droppables[t.options.scope]||[],o=n?n.type:null,u=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(r=0;r<s.length;r++){if(s[r].options.disabled||t&&!s[r].accept.call(s[r].element[0],t.currentItem||t.element))continue;for(i=0;i<u.length;i++)if(u[i]===s[r].element[0]){s[r].proportions.height=0;continue e}s[r].visible=s[r].element.css("display")!=="none";if(!s[r].visible)continue;o==="mousedown"&&s[r]._activate.call(s[r],n),s[r].offset=s[r].element.offset(),s[r].proportions={width:s[r].element[0].offsetWidth,height:s[r].element[0].offsetHeight}}},drop:function(t,n){var r=!1;return e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options)return;!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance)&&(r=this._drop.call(this,n)||r),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,n))}),r},dragStart:function(t,n){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,n)})},drag:function(t,n){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,n),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible)return;var r,i,s,o=e.ui.intersect(t,this,this.options.tolerance),u=!o&&this.isover?"isout":o&&!this.isover?"isover":null;if(!u)return;this.options.greedy&&(i=this.options.scope,s=this.element.parents(":data(ui-droppable)").filter(function(){return e.data(this,"ui-droppable").options.scope===i}),s.length&&(r=e.data(s[0],"ui-droppable"),r.greedyChild=u==="isover")),r&&u==="isover"&&(r.isover=!1,r.isout=!0,r._out.call(r,n)),this[u]=!0,this[u==="isout"?"isover":"isout"]=!1,this[u==="isover"?"_over":"_out"].call(this,n),r&&u==="isout"&&(r.isout=!1,r.isover=!0,r._over.call(r,n))})},dragStop:function(t,n){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,n)}}})(jQuery);(function(e,t){function n(e){return parseInt(e,10)||0}function r(e){return!isNaN(parseInt(e,10))}e.widget("ui.resizable",e.ui.mouse,{version:"1.10.0",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var t,n,r,i,s,o=this,u=this.options;this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!u.aspectRatio,aspectRatio:u.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:u.helper||u.ghost||u.animate?u.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=u.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se");if(this.handles.constructor===String){this.handles==="all"&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={};for(n=0;n<t.length;n++)r=e.trim(t[n]),s="ui-resizable-"+r,i=e("<div class='ui-resizable-handle "+s+"'></div>"),i.css({zIndex:u.zIndex}),"se"===r&&i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[r]=".ui-resizable-"+r,this.element.append(i)}this._renderAxis=function(t){var n,r,i,s;t=t||this.element;for(n in this.handles){this.handles[n].constructor===String&&(this.handles[n]=e(this.handles[n],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(r=e(this.handles[n],this.element),s=/sw|ne|nw|se|n|s/.test(n)?r.outerHeight():r.outerWidth(),i=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join(""),t.css(i,s),this._proportionallyResize());if(!e(this.handles[n]).length)continue}},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=i&&i[1]?i[1]:"se")}),u.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(u.disabled)return;e(this).removeClass("ui-resizable-autohide"),o._handles.show()}).mouseleave(function(){if(u.disabled)return;o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,n=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(n(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),n(this.originalElement),this},_mouseCapture:function(t){var n,r,i=!1;for(n in this.handles){r=e(this.handles[n])[0];if(r===t.target||e.contains(r,t.target))i=!0}return!this.options.disabled&&i},_mouseStart:function(t){var r,i,s,o=this.options,u=this.element.position(),a=this.element;return this.resizing=!0,/absolute/.test(a.css("position"))?a.css({position:"absolute",top:a.css("top"),left:a.css("left")}):a.is(".ui-draggable")&&a.css({position:"absolute",top:u.top,left:u.left}),this._renderProxy(),r=n(this.helper.css("left")),i=n(this.helper.css("top")),o.containment&&(r+=e(o.containment).scrollLeft()||0,i+=e(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:r,top:i},this.size=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.originalPosition={left:r,top:i},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio=typeof o.aspectRatio=="number"?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,s=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor",s==="auto"?this.axis+"-resize":s),a.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var n,r=this.helper,i={},s=this.originalMousePosition,o=this.axis,u=this.position.top,a=this.position.left,f=this.size.width,l=this.size.height,c=t.pageX-s.left||0,h=t.pageY-s.top||0,p=this._change[o];if(!p)return!1;n=p.apply(this,[t,c,h]),this._updateVirtualBoundaries(t.shiftKey);if(this._aspectRatio||t.shiftKey)n=this._updateRatio(n,t);return n=this._respectSize(n,t),this._updateCache(n),this._propagate("resize",t),this.position.top!==u&&(i.top=this.position.top+"px"),this.position.left!==a&&(i.left=this.position.left+"px"),this.size.width!==f&&(i.width=this.size.width+"px"),this.size.height!==l&&(i.height=this.size.height+"px"),r.css(i),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(i)||this._trigger("resize",t,this.ui()),!1},_mouseStop:function(t){this.resizing=!1;var n,r,i,s,o,u,a,f=this.options,l=this;return this._helper&&(n=this._proportionallyResizeElements,r=n.length&&/textarea/i.test(n[0].nodeName),i=r&&e.ui.hasScroll(n[0],"left")?0:l.sizeDiff.height,s=r?0:l.sizeDiff.width,o={width:l.helper.width()-s,height:l.helper.height()-i},u=parseInt(l.element.css("left"),10)+(l.position.left-l.originalPosition.left)||null,a=parseInt(l.element.css("top"),10)+(l.position.top-l.originalPosition.top)||null,f.animate||this.element.css(e.extend(o,{top:a,left:u})),l.helper.height(l.size.height),l.helper.width(l.size.width),this._helper&&!f.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(e){var t,n,i,s,o,u=this.options;o={minWidth:r(u.minWidth)?u.minWidth:0,maxWidth:r(u.maxWidth)?u.maxWidth:Infinity,minHeight:r(u.minHeight)?u.minHeight:0,maxHeight:r(u.maxHeight)?u.maxHeight:Infinity};if(this._aspectRatio||e)t=o.minHeight*this.aspectRatio,i=o.minWidth/this.aspectRatio,n=o.maxHeight*this.aspectRatio,s=o.maxWidth/this.aspectRatio,t>o.minWidth&&(o.minWidth=t),i>o.minHeight&&(o.minHeight=i),n<o.maxWidth&&(o.maxWidth=n),s<o.maxHeight&&(o.maxHeight=s);this._vBoundaries=o},_updateCache:function(e){this.offset=this.helper.offset(),r(e.left)&&(this.position.left=e.left),r(e.top)&&(this.position.top=e.top),r(e.height)&&(this.size.height=e.height),r(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,n=this.size,i=this.axis;return r(e.height)?e.width=e.height*this.aspectRatio:r(e.width)&&(e.height=e.width/this.aspectRatio),i==="sw"&&(e.left=t.left+(n.width-e.width),e.top=null),i==="nw"&&(e.top=t.top+(n.height-e.height),e.left=t.left+(n.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,n=this.axis,i=r(e.width)&&t.maxWidth&&t.maxWidth<e.width,s=r(e.height)&&t.maxHeight&&t.maxHeight<e.height,o=r(e.width)&&t.minWidth&&t.minWidth>e.width,u=r(e.height)&&t.minHeight&&t.minHeight>e.height,a=this.originalPosition.left+this.originalSize.width,f=this.position.top+this.size.height,l=/sw|nw|w/.test(n),c=/nw|ne|n/.test(n);return o&&(e.width=t.minWidth),u&&(e.height=t.minHeight),i&&(e.width=t.maxWidth),s&&(e.height=t.maxHeight),o&&l&&(e.left=a-t.minWidth),i&&l&&(e.left=a-t.maxWidth),u&&c&&(e.top=f-t.minHeight),s&&c&&(e.top=f-t.maxHeight),!e.width&&!e.height&&!e.left&&e.top?e.top=null:!e.width&&!e.height&&!e.top&&e.left&&(e.left=null),e},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length)return;var e,t,n,r,i,s=this.helper||this.element;for(e=0;e<this._proportionallyResizeElements.length;e++){i=this._proportionallyResizeElements[e];if(!this.borderDif){this.borderDif=[],n=[i.css("borderTopWidth"),i.css("borderRightWidth"),i.css("borderBottomWidth"),i.css("borderLeftWidth")],r=[i.css("paddingTop"),i.css("paddingRight"),i.css("paddingBottom"),i.css("paddingLeft")];for(t=0;t<n.length;t++)this.borderDif[t]=(parseInt(n[t],10)||0)+(parseInt(r[t],10)||0)}i.css({height:s.height()-this.borderDif[0]-this.borderDif[2]||0,width:s.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var t=this.element,n=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++n.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var n=this.originalSize,r=this.originalPosition;return{left:r.left+t,width:n.width-t}},n:function(e,t,n){var r=this.originalSize,i=this.originalPosition;return{top:i.top+n,height:r.height-n}},s:function(e,t,n){return{height:this.originalSize.height+n}},se:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},sw:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,n,r]))},ne:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},nw:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,n,r]))}},_propagate:function(t,n){e.ui.plugin.call(this,t,[n,this.ui()]),t!=="resize"&&this._trigger(t,n,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var n=e(this).data("ui-resizable"),r=n.options,i=n._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),o=s&&e.ui.hasScroll(i[0],"left")?0:n.sizeDiff.height,u=s?0:n.sizeDiff.width,a={width:n.size.width-u,height:n.size.height-o},f=parseInt(n.element.css("left"),10)+(n.position.left-n.originalPosition.left)||null,l=parseInt(n.element.css("top"),10)+(n.position.top-n.originalPosition.top)||null;n.element.animate(e.extend(a,l&&f?{top:l,left:f}:{}),{duration:r.animateDuration,easing:r.animateEasing,step:function(){var r={width:parseInt(n.element.css("width"),10),height:parseInt(n.element.css("height"),10),top:parseInt(n.element.css("top"),10),left:parseInt(n.element.css("left"),10)};i&&i.length&&e(i[0]).css({width:r.width,height:r.height}),n._updateCache(r),n._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var t,r,i,s,o,u,a,f=e(this).data("ui-resizable"),l=f.options,c=f.element,h=l.containment,p=h instanceof e?h.get(0):/parent/.test(h)?c.parent().get(0):h;if(!p)return;f.containerElement=e(p),/document/.test(h)||h===document?(f.containerOffset={left:0,top:0},f.containerPosition={left:0,top:0},f.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(t=e(p),r=[],e(["Top","Right","Left","Bottom"]).each(function(e,i){r[e]=n(t.css("padding"+i))}),f.containerOffset=t.offset(),f.containerPosition=t.position(),f.containerSize={height:t.innerHeight()-r[3],width:t.innerWidth()-r[1]},i=f.containerOffset,s=f.containerSize.height,o=f.containerSize.width,u=e.ui.hasScroll(p,"left")?p.scrollWidth:o,a=e.ui.hasScroll(p)?p.scrollHeight:s,f.parentData={element:p,left:i.left,top:i.top,width:u,height:a})},resize:function(t){var n,r,i,s,o=e(this).data("ui-resizable"),u=o.options,a=o.containerOffset,f=o.position,l=o._aspectRatio||t.shiftKey,c={top:0,left:0},h=o.containerElement;h[0]!==document&&/static/.test(h.css("position"))&&(c=a),f.left<(o._helper?a.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-a.left:o.position.left-c.left),l&&(o.size.height=o.size.width/o.aspectRatio),o.position.left=u.helper?a.left:0),f.top<(o._helper?a.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-a.top:o.position.top),l&&(o.size.width=o.size.height*o.aspectRatio),o.position.top=o._helper?a.top:0),o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top,n=Math.abs((o._helper?o.offset.left-c.left:o.offset.left-c.left)+o.sizeDiff.width),r=Math.abs((o._helper?o.offset.top-c.top:o.offset.top-a.top)+o.sizeDiff.height),i=o.containerElement.get(0)===o.element.parent().get(0),s=/relative|absolute/.test(o.containerElement.css("position")),i&&s&&(n-=o.parentData.left),n+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-n,l&&(o.size.height=o.size.width/o.aspectRatio)),r+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-r,l&&(o.size.width=o.size.height*o.aspectRatio))},stop:function(){var t=e(this).data("ui-resizable"),n=t.options,r=t.containerOffset,i=t.containerPosition,s=t.containerElement,o=e(t.helper),u=o.offset(),a=o.outerWidth()-t.sizeDiff.width,f=o.outerHeight()-t.sizeDiff.height;t._helper&&!n.animate&&/relative/.test(s.css("position"))&&e(this).css({left:u.left-i.left-r.left,width:a,height:f}),t._helper&&!n.animate&&/static/.test(s.css("position"))&&e(this).css({left:u.left-i.left-r.left,width:a,height:f})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).data("ui-resizable"),n=t.options,r=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};typeof n.alsoResize=="object"&&!n.alsoResize.parentNode?n.alsoResize.length?(n.alsoResize=n.alsoResize[0],r(n.alsoResize)):e.each(n.alsoResize,function(e){r(e)}):r(n.alsoResize)},resize:function(t,n){var r=e(this).data("ui-resizable"),i=r.options,s=r.originalSize,o=r.originalPosition,u={height:r.size.height-s.height||0,width:r.size.width-s.width||0,top:r.position.top-o.top||0,left:r.position.left-o.left||0},a=function(t,r){e(t).each(function(){var t=e(this),i=e(this).data("ui-resizable-alsoresize"),s={},o=r&&r.length?r:t.parents(n.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var n=(i[t]||0)+(u[t]||0);n&&n>=0&&(s[t]=n||null)}),t.css(s)})};typeof i.alsoResize=="object"&&!i.alsoResize.nodeType?e.each(i.alsoResize,function(e,t){a(e,t)}):a(i.alsoResize)},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).data("ui-resizable"),n=t.options,r=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:r.height,width:r.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof n.ghost=="string"?n.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).data("ui-resizable");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).data("ui-resizable");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t=e(this).data("ui-resizable"),n=t.options,r=t.size,i=t.originalSize,s=t.originalPosition,o=t.axis,u=typeof n.grid=="number"?[n.grid,n.grid]:n.grid,a=u[0]||1,f=u[1]||1,l=Math.round((r.width-i.width)/a)*a,c=Math.round((r.height-i.height)/f)*f,h=i.width+l,p=i.height+c,d=n.maxWidth&&n.maxWidth<h,v=n.maxHeight&&n.maxHeight<p,m=n.minWidth&&n.minWidth>h,g=n.minHeight&&n.minHeight>p;n.grid=u,m&&(h+=a),g&&(p+=f),d&&(h-=a),v&&(p-=f),/^(se|s|e)$/.test(o)?(t.size.width=h,t.size.height=p):/^(ne)$/.test(o)?(t.size.width=h,t.size.height=p,t.position.top=s.top-c):/^(sw)$/.test(o)?(t.size.width=h,t.size.height=p,t.position.left=s.left-l):(t.size.width=h,t.size.height=p,t.position.top=s.top-c,t.position.left=s.left-l)}})})(jQuery);(function(e,t){e.widget("ui.selectable",e.ui.mouse,{version:"1.10.0",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,n=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){t=e(n.options.filter,n.element[0]),t.addClass("ui-selectee"),t.each(function(){var t=e(this),n=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:n.left,top:n.top,right:n.left+t.outerWidth(),bottom:n.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=t.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var n=this,r=this.options;this.opos=[t.pageX,t.pageY];if(this.options.disabled)return;this.selectees=e(r.filter,this.element[0]),this._trigger("start",t),e(r.appendTo).append(this.helper),this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0}),r.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var r=e.data(this,"selectable-item");r.startselected=!0,!t.metaKey&&!t.ctrlKey&&(r.$element.removeClass("ui-selected"),r.selected=!1,r.$element.addClass("ui-unselecting"),r.unselecting=!0,n._trigger("unselecting",t,{unselecting:r.element}))}),e(t.target).parents().addBack().each(function(){var r,i=e.data(this,"selectable-item");if(i)return r=!t.metaKey&&!t.ctrlKey||!i.$element.hasClass("ui-selected"),i.$element.removeClass(r?"ui-unselecting":"ui-selected").addClass(r?"ui-selecting":"ui-unselecting"),i.unselecting=!r,i.selecting=r,i.selected=r,r?n._trigger("selecting",t,{selecting:i.element}):n._trigger("unselecting",t,{unselecting:i.element}),!1})},_mouseDrag:function(t){this.dragged=!0;if(this.options.disabled)return;var n,r=this,i=this.options,s=this.opos[0],o=this.opos[1],u=t.pageX,a=t.pageY;return s>u&&(n=u,u=s,s=n),o>a&&(n=a,a=o,o=n),this.helper.css({left:s,top:o,width:u-s,height:a-o}),this.selectees.each(function(){var n=e.data(this,"selectable-item"),f=!1;if(!n||n.element===r.element[0])return;i.tolerance==="touch"?f=!(n.left>u||n.right<s||n.top>a||n.bottom<o):i.tolerance==="fit"&&(f=n.left>s&&n.right<u&&n.top>o&&n.bottom<a),f?(n.selected&&(n.$element.removeClass("ui-selected"),n.selected=!1),n.unselecting&&(n.$element.removeClass("ui-unselecting"),n.unselecting=!1),n.selecting||(n.$element.addClass("ui-selecting"),n.selecting=!0,r._trigger("selecting",t,{selecting:n.element}))):(n.selecting&&((t.metaKey||t.ctrlKey)&&n.startselected?(n.$element.removeClass("ui-selecting"),n.selecting=!1,n.$element.addClass("ui-selected"),n.selected=!0):(n.$element.removeClass("ui-selecting"),n.selecting=!1,n.startselected&&(n.$element.addClass("ui-unselecting"),n.unselecting=!0),r._trigger("unselecting",t,{unselecting:n.element}))),n.selected&&!t.metaKey&&!t.ctrlKey&&!n.startselected&&(n.$element.removeClass("ui-selected"),n.selected=!1,n.$element.addClass("ui-unselecting"),n.unselecting=!0,r._trigger("unselecting",t,{unselecting:n.element})))}),!1},_mouseStop:function(t){var n=this;return this.dragged=!1,e(".ui-unselecting",this.element[0]).each(function(){var r=e.data(this,"selectable-item");r.$element.removeClass("ui-unselecting"),r.unselecting=!1,r.startselected=!1,n._trigger("unselected",t,{unselected:r.element})}),e(".ui-selecting",this.element[0]).each(function(){var r=e.data(this,"selectable-item");r.$element.removeClass("ui-selecting").addClass("ui-selected"),r.selecting=!1,r.selected=!0,r.startselected=!0,n._trigger("selected",t,{selected:r.element})}),this._trigger("stop",t),this.helper.remove(),!1}})})(jQuery);(function(e,t){function n(e,t,n){return e>t&&e<t+n}e.widget("ui.sortable",e.ui.mouse,{version:"1.10.0",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var e=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?e.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_setOption:function(t,n){t==="disabled"?(this.options[t]=n,this.widget().toggleClass("ui-sortable-disabled",!!n)):e.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(t,n){var r=null,i=!1,s=this;if(this.reverting)return!1;if(this.options.disabled||this.options.type==="static")return!1;this._refreshItems(t),e(t.target).parents().each(function(){if(e.data(this,s.widgetName+"-item")===s)return r=e(this),!1}),e.data(t.target,s.widgetName+"-item")===s&&(r=e(t.target));if(!r)return!1;if(this.options.handle&&!n){e(this.options.handle,r).find("*").addBack().each(function(){this===t.target&&(i=!0)});if(!i)return!1}return this.currentItem=r,this._removeCurrentsFromItems(),!0},_mouseStart:function(t,n,r){var i,s=this.options;this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,s.cursorAt&&this._adjustOffsetFromHelper(s.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),s.containment&&this._setContainment(),s.cursor&&(e("body").css("cursor")&&(this._storedCursor=e("body").css("cursor")),e("body").css("cursor",s.cursor)),s.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",s.opacity)),s.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",s.zIndex)),this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions();if(!r)for(i=this.containers.length-1;i>=0;i--)this.containers[i]._trigger("activate",t,this._uiHash(this));return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!s.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var n,r,i,s,o=this.options,u=!1;this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=u=this.scrollParent[0].scrollTop+o.scrollSpeed:t.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=u=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=u=this.scrollParent[0].scrollLeft+o.scrollSpeed:t.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=u=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(t.pageY-e(document).scrollTop()<o.scrollSensitivity?u=e(document).scrollTop(e(document).scrollTop()-o.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<o.scrollSensitivity&&(u=e(document).scrollTop(e(document).scrollTop()+o.scrollSpeed)),t.pageX-e(document).scrollLeft()<o.scrollSensitivity?u=e(document).scrollLeft(e(document).scrollLeft()-o.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<o.scrollSensitivity&&(u=e(document).scrollLeft(e(document).scrollLeft()+o.scrollSpeed))),u!==!1&&e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!=="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!=="x")this.helper[0].style.top=this.position.top+"px";for(n=this.items.length-1;n>=0;n--){r=this.items[n],i=r.item[0],s=this._intersectsWithPointer(r);if(!s)continue;if(r.instance!==this.currentContainer)continue;if(i!==this.currentItem[0]&&this.placeholder[s===1?"next":"prev"]()[0]!==i&&!e.contains(this.placeholder[0],i)&&(this.options.type==="semi-dynamic"?!e.contains(this.element[0],i):!0)){this.direction=s===1?"down":"up";if(this.options.tolerance!=="pointer"&&!this._intersectsWithSides(r))break;this._rearrange(t,r),this._trigger("change",t,this._uiHash());break}}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,n){if(!t)return;e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t);if(this.options.revert){var r=this,i=this.placeholder.offset();this.reverting=!0,e(this.helper).animate({left:i.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft),top:i.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){r._clear(t)})}else this._clear(t,n);return!1},cancel:function(){if(this.dragging){this._mouseUp({target:null}),this.options.helper==="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var n=this._getItemsAsjQuery(t&&t.connected),r=[];return t=t||{},e(n).each(function(){var n=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);n&&r.push((t.key||n[1]+"[]")+"="+(t.key&&t.expression?n[1]:n[2]))}),!r.length&&t.key&&r.push(t.key+"="),r.join("&")},toArray:function(t){var n=this._getItemsAsjQuery(t&&t.connected),r=[];return t=t||{},n.each(function(){r.push(e(t.item||this).attr(t.attribute||"id")||"")}),r},_intersectsWith:function(e){var t=this.positionAbs.left,n=t+this.helperProportions.width,r=this.positionAbs.top,i=r+this.helperProportions.height,s=e.left,o=s+e.width,u=e.top,a=u+e.height,f=this.offset.click.top,l=this.offset.click.left,c=r+f>u&&r+f<a&&t+l>s&&t+l<o;return this.options.tolerance==="pointer"||this.options.forcePointerForContainers||this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?c:s<t+this.helperProportions.width/2&&n-this.helperProportions.width/2<o&&u<r+this.helperProportions.height/2&&i-this.helperProportions.height/2<a},_intersectsWithPointer:function(e){var t=this.options.axis==="x"||n(this.positionAbs.top+this.offset.click.top,e.top,e.height),r=this.options.axis==="y"||n(this.positionAbs.left+this.offset.click.left,e.left,e.width),i=t&&r,s=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return i?this.floating?o&&o==="right"||s==="down"?2:1:s&&(s==="down"?2:1):!1},_intersectsWithSides:function(e){var t=n(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),r=n(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),i=this._getDragVerticalDirection(),s=this._getDragHorizontalDirection();return this.floating&&s?s==="right"&&r||s==="left"&&!r:i&&(i==="down"&&t||i==="up"&&!t)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return e!==0&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return e!==0&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){var n,r,i,s,o=[],u=[],a=this._connectWith();if(a&&t)for(n=a.length-1;n>=0;n--){i=e(a[n]);for(r=i.length-1;r>=0;r--)s=e.data(i[r],this.widgetFullName),s&&s!==this&&!s.options.disabled&&u.push([e.isFunction(s.options.items)?s.options.items.call(s.element):e(s.options.items,s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),s])}u.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(n=u.length-1;n>=0;n--)u[n][0].each(function(){o.push(this)});return e(o)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var n=0;n<t.length;n++)if(t[n]===e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var n,r,i,s,o,u,a,f,l=this.items,c=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],h=this._connectWith();if(h&&this.ready)for(n=h.length-1;n>=0;n--){i=e(h[n]);for(r=i.length-1;r>=0;r--)s=e.data(i[r],this.widgetFullName),s&&s!==this&&!s.options.disabled&&(c.push([e.isFunction(s.options.items)?s.options.items.call(s.element[0],t,{item:this.currentItem}):e(s.options.items,s.element),s]),this.containers.push(s))}for(n=c.length-1;n>=0;n--){o=c[n][1],u=c[n][0];for(r=0,f=u.length;r<f;r++)a=e(u[r]),a.data(this.widgetName+"-item",o),l.push({item:a,instance:o,width:0,height:0,left:0,top:0})}},refreshPositions:function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var n,r,i,s;for(n=this.items.length-1;n>=0;n--){r=this.items[n];if(r.instance!==this.currentContainer&&this.currentContainer&&r.item[0]!==this.currentItem[0])continue;i=this.options.toleranceElement?e(this.options.toleranceElement,r.item):r.item,t||(r.width=i.outerWidth(),r.height=i.outerHeight()),s=i.offset(),r.left=s.left,r.top=s.top}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(n=this.containers.length-1;n>=0;n--)s=this.containers[n].element.offset(),this.containers[n].containerCache.left=s.left,this.containers[n].containerCache.top=s.top,this.containers[n].containerCache.width=this.containers[n].element.outerWidth(),this.containers[n].containerCache.height=this.containers[n].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var n,r=t.options;if(!r.placeholder||r.placeholder.constructor===String)n=r.placeholder,r.placeholder={element:function(){var r=e(document.createElement(t.currentItem[0].nodeName)).addClass(n||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];return n||(r.style.visibility="hidden"),r},update:function(e,i){if(n&&!r.forcePlaceholderSize)return;i.height()||i.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),i.width()||i.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10))}};t.placeholder=e(r.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),r.placeholder.update(t,t.placeholder)},_contactContainers:function(t){var n,r,i,s,o,u,a,f,l,c=null,h=null;for(n=this.containers.length-1;n>=0;n--){if(e.contains(this.currentItem[0],this.containers[n].element[0]))continue;if(this._intersectsWith(this.containers[n].containerCache)){if(c&&e.contains(this.containers[n].element[0],c.element[0]))continue;c=this.containers[n],h=n}else this.containers[n].containerCache.over&&(this.containers[n]._trigger("out",t,this._uiHash(this)),this.containers[n].containerCache.over=0)}if(!c)return;if(this.containers.length===1)this.containers[h]._trigger("over",t,this._uiHash(this)),this.containers[h].containerCache.over=1;else{i=1e4,s=null,o=this.containers[h].floating?"left":"top",u=this.containers[h].floating?"width":"height",a=this.positionAbs[o]+this.offset.click[o];for(r=this.items.length-1;r>=0;r--){if(!e.contains(this.containers[h].element[0],this.items[r].item[0]))continue;if(this.items[r].item[0]===this.currentItem[0])continue;f=this.items[r].item.offset()[o],l=!1,Math.abs(f-a)>Math.abs(f+this.items[r][u]-a)&&(l=!0,f+=this.items[r][u]),Math.abs(f-a)<i&&(i=Math.abs(f-a),s=this.items[r],this.direction=l?"up":"down")}if(!s&&!this.options.dropOnEmpty)return;this.currentContainer=this.containers[h],s?this._rearrange(t,s,null,!0):this._rearrange(t,null,this.containers[h].element,!0),this._trigger("change",t,this._uiHash()),this.containers[h]._trigger("change",t,this._uiHash(this)),this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[h]._trigger("over",t,this._uiHash(this)),this.containers[h].containerCache.over=1}},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t,this.currentItem])):n.helper==="clone"?this.currentItem.clone():this.currentItem;return r.parents("body").length||e(n.appendTo!=="parent"?n.appendTo:this.currentItem[0].parentNode)[0].appendChild(r[0]),r[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!r[0].style.width||n.forceHelperSize)&&r.width(this.currentItem.width()),(!r[0].style.height||n.forceHelperSize)&&r.height(this.currentItem.height()),r},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,n,r,i=this.options;i.containment==="parent"&&(i.containment=this.helper[0].parentNode);if(i.containment==="document"||i.containment==="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e(i.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(e(i.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];/^(document|window|parent)$/.test(i.containment)||(t=e(i.containment)[0],n=e(i.containment).offset(),r=e(t).css("overflow")!=="hidden",this.containment=[n.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,n.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,n.left+(r?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,n.top+(r?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,n){n||(n=this.position);var r=t==="absolute"?1:-1,i=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,s=/(html|body)/i.test(i[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():s?0:i.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():s?0:i.scrollLeft())*r}},_generatePosition:function(t){var n,r,i=this.options,s=t.pageX,o=t.pageY,u=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(u[0].tagName);return this.cssPosition==="relative"&&(this.scrollParent[0]===document||this.scrollParent[0]===this.offsetParent[0])&&(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(s=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(s=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),i.grid&&(n=this.originalPageY+Math.round((o-this.originalPageY)/i.grid[1])*i.grid[1],o=this.containment?n-this.offset.click.top>=this.containment[1]&&n-this.offset.click.top<=this.containment[3]?n:n-this.offset.click.top>=this.containment[1]?n-i.grid[1]:n+i.grid[1]:n,r=this.originalPageX+Math.round((s-this.originalPageX)/i.grid[0])*i.grid[0],s=this.containment?r-this.offset.click.left>=this.containment[0]&&r-this.offset.click.left<=this.containment[2]?r:r-this.offset.click.left>=this.containment[0]?r-i.grid[0]:r+i.grid[0]:r)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():a?0:u.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():a?0:u.scrollLeft())}},_rearrange:function(e,t,n,r){n?n[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],this.direction==="down"?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var i=this.counter;this._delay(function(){i===this.counter&&this.refreshPositions(!r)})},_clear:function(t,n){this.reverting=!1;var r,i=[];!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null;if(this.helper[0]===this.currentItem[0]){for(r in this._storedCSS)if(this._storedCSS[r]==="auto"||this._storedCSS[r]==="static")this._storedCSS[r]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!n&&i.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),(this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!n&&i.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(n||(i.push(function(e){this._trigger("remove",e,this._uiHash())}),i.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),i.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer))));for(r=this.containers.length-1;r>=0;r--)n||i.push(function(e){return function(t){e._trigger("deactivate",t,this._uiHash(this))}}.call(this,this.containers[r])),this.containers[r].containerCache.over&&(i.push(function(e){return function(t){e._trigger("out",t,this._uiHash(this))}}.call(this,this.containers[r])),this.containers[r].containerCache.over=0);this._storedCursor&&e("body").css("cursor",this._storedCursor),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex),this.dragging=!1;if(this.cancelHelperRemoval){if(!n){this._trigger("beforeStop",t,this._uiHash());for(r=0;r<i.length;r++)i[r].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!1}n||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null;if(!n){for(r=0;r<i.length;r++)i[r].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var n=t||this;return{helper:n.helper,placeholder:n.placeholder||e([]),position:n.position,originalPosition:n.originalPosition,offset:n.positionAbs,item:n.currentItem,sender:t?t.element:null}}})})(jQuery);(function(e,t){var n=0,r={},i={};r.height=r.paddingTop=r.paddingBottom=r.borderTopWidth=r.borderBottomWidth="hide",i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="show",e.widget("ui.accordion",{version:"1.10.0",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var t=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),!t.collapsible&&(t.active===!1||t.active==null)&&(t.active=0),this._processPanels(),t.active<0&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,content:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),e=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this.options.heightStyle!=="content"&&e.css("height","")},_setOption:function(e,t){if(e==="active"){this._activate(t);return}e==="event"&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),e==="collapsible"&&!t&&this.options.active===!1&&this._activate(0),e==="icons"&&(this._destroyIcons(),t&&this._createIcons()),e==="disabled"&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t)},_keydown:function(t){if(t.altKey||t.ctrlKey)return;var n=e.ui.keyCode,r=this.headers.length,i=this.headers.index(t.target),s=!1;switch(t.keyCode){case n.RIGHT:case n.DOWN:s=this.headers[(i+1)%r];break;case n.LEFT:case n.UP:s=this.headers[(i-1+r)%r];break;case n.SPACE:case n.ENTER:this._eventHandler(t);break;case n.HOME:s=this.headers[0];break;case n.END:s=this.headers[r-1]}s&&(e(t.target).attr("tabIndex",-1),e(s).attr("tabIndex",0),s.focus(),t.preventDefault())},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t=this.options;this._processPanels();if(t.active===!1&&t.collapsible===!0||!this.headers.length)t.active=!1,this.active=e();t.active===!1?this._activate(0):this.active.length&&!e.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=e()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var t,r=this.options,i=r.heightStyle,s=this.element.parent(),o=this.accordionId="ui-accordion-"+(this.element.attr("id")||++n);this.active=this._findActive(r.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(t){var n=e(this),r=n.attr("id"),i=n.next(),s=i.attr("id");r||(r=o+"-header-"+t,n.attr("id",r)),s||(s=o+"-panel-"+t,i.attr("id",s)),n.attr("aria-controls",s),i.attr("aria-labelledby",r)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(r.event),i==="fill"?(t=s.height(),this.element.siblings(":visible").each(function(){var n=e(this),r=n.css("position");if(r==="absolute"||r==="fixed")return;t-=n.outerHeight(!0)}),this.headers.each(function(){t-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):i==="auto"&&(t=0,this.headers.next().each(function(){t=Math.max(t,e(this).css("height","").height())}).height(t))},_activate:function(t){var n=this._findActive(t)[0];if(n===this.active[0])return;n=n||this.active[0],this._eventHandler({target:n,currentTarget:n,preventDefault:e.noop})},_findActive:function(t){return typeof t=="number"?this.headers.eq(t):e()},_setupEvents:function(t){var n={keydown:"_keydown"};t&&e.each(t.split(" "),function(e,t){n[t]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,n),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var n=this.options,r=this.active,i=e(t.currentTarget),s=i[0]===r[0],o=s&&n.collapsible,u=o?e():i.next(),a=r.next(),f={oldHeader:r,oldPanel:a,newHeader:o?e():i,newPanel:u};t.preventDefault();if(s&&!n.collapsible||this._trigger("beforeActivate",t,f)===!1)return;n.active=o?!1:this.headers.index(i),this.active=s?e():i,this._toggle(f),r.removeClass("ui-accordion-header-active ui-state-active"),n.icons&&r.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header),s||(i.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),n.icons&&i.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader),i.next().addClass("ui-accordion-content-active"))},_toggle:function(t){var n=t.newPanel,r=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=n,this.prevHide=r,this.options.animate?this._animate(n,r,t):(r.hide(),n.show(),this._toggleComplete(t)),r.attr({"aria-expanded":"false","aria-hidden":"true"}),r.prev().attr("aria-selected","false"),n.length&&r.length?r.prev().attr("tabIndex",-1):n.length&&this.headers.filter(function(){return e(this).attr("tabIndex")===0}).attr("tabIndex",-1),n.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(e,t,n){var s,o,u,a=this,f=0,l=e.length&&(!t.length||e.index()<t.index()),c=this.options.animate||{},h=l&&c.down||c,p=function(){a._toggleComplete(n)};typeof h=="number"&&(u=h),typeof h=="string"&&(o=h),o=o||h.easing||c.easing,u=u||h.duration||c.duration;if(!t.length)return e.animate(i,u,o,p);if(!e.length)return t.animate(r,u,o,p);s=e.show().outerHeight(),t.animate(r,{duration:u,easing:o,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(i,{duration:u,easing:o,complete:p,step:function(e,n){n.now=Math.round(e),n.prop!=="height"?f+=n.now:a.options.heightStyle!=="content"&&(n.now=Math.round(s-t.outerHeight()-f),f=0)}})},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}})})(jQuery);(function(e,t){var n=0;e.widget("ui.autocomplete",{version:"1.10.0",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var t,n,r;this.isMultiLine=this._isMultiLine(),this.valueMethod=this.element[this.element.is("input,textarea")?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(i){if(this.element.prop("readOnly")){t=!0,r=!0,n=!0;return}t=!1,r=!1,n=!1;var s=e.ui.keyCode;switch(i.keyCode){case s.PAGE_UP:t=!0,this._move("previousPage",i);break;case s.PAGE_DOWN:t=!0,this._move("nextPage",i);break;case s.UP:t=!0,this._keyEvent("previous",i);break;case s.DOWN:t=!0,this._keyEvent("next",i);break;case s.ENTER:case s.NUMPAD_ENTER:this.menu.active&&(t=!0,i.preventDefault(),this.menu.select(i));break;case s.TAB:this.menu.active&&this.menu.select(i);break;case s.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(i),i.preventDefault());break;default:n=!0,this._searchTimeout(i)}},keypress:function(r){if(t){t=!1,r.preventDefault();return}if(n)return;var i=e.ui.keyCode;switch(r.keyCode){case i.PAGE_UP:this._move("previousPage",r);break;case i.PAGE_DOWN:this._move("nextPage",r);break;case i.UP:this._keyEvent("previous",r);break;case i.DOWN:this._keyEvent("next",r)}},input:function(e){if(r){r=!1,e.preventDefault();return}this._searchTimeout(e)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){if(this.cancelBlur){delete this.cancelBlur;return}clearTimeout(this.searching),this.close(e),this._change(e)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete").appendTo(this._appendTo()).menu({input:e(),role:null}).zIndex(this.element.zIndex()+1).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var n=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(r){r.target!==t.element[0]&&r.target!==n&&!e.contains(n,r.target)&&t.close()})})},menufocus:function(t,n){if(this.isNewMenu){this.isNewMenu=!1;if(t.originalEvent&&/^mouse/.test(t.originalEvent.type)){this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)});return}}var r=n.item.data("ui-autocomplete-item");!1!==this._trigger("focus",t,{item:r})?t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(r.value):this.liveRegion.text(r.value)},menuselect:function(e,t){var n=t.item.data("ui-autocomplete-item"),r=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=r,this._delay(function(){this.previous=r,this.selectedItem=n})),!1!==this._trigger("select",e,{item:n})&&this._value(n.value),this.term=this._value(),this.close(e),this.selectedItem=n}}),this.liveRegion=e("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),e==="source"&&this._initSource(),e==="appendTo"&&this.menu.element.appendTo(this._appendTo()),e==="disabled"&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_isMultiLine:function(){return this.element.is("textarea")?!0:this.element.is("input")?!1:this.element.prop("isContentEditable")},_initSource:function(){var t,n,r=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(n,r){r(e.ui.autocomplete.filter(t,n.term))}):typeof this.options.source=="string"?(n=this.options.source,this.source=function(t,i){r.xhr&&r.xhr.abort(),r.xhr=e.ajax({url:n,data:t,dataType:"json",success:function(e){i(e)},error:function(){i([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){e=e!=null?e:this._value(),this.term=this._value();if(e.length<this.options.minLength)return this.close(t);if(this._trigger("search",t)===!1)return;return this._search(e)},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var e=this,t=++n;return function(r){t===n&&e.__response(r),e.pending--,e.pending||e.element.removeClass("ui-autocomplete-loading")}},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return typeof t=="string"?{label:t,value:t}:e.extend({label:t.label||t.value,value:t.value||t.label},t)})},_suggest:function(t){var n=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(n,t),this.menu.refresh(),n.show(),this._resizeMenu(),n.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,n){var r=this;e.each(n,function(e,n){r._renderItemData(t,n)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,n){return e("<li>").append(e("<a>").text(n.label)).appendTo(t)},_move:function(e,t){if(!this.menu.element.is(":visible")){this.search(null,t);return}if(this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)){this._value(this.term),this.menu.blur();return}this.menu[e](t)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){if(!this.isMultiLine||this.menu.element.is(":visible"))this._move(e,t),t.preventDefault()}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,n){var r=new RegExp(e.ui.autocomplete.escapeRegex(n),"i");return e.grep(t,function(e){return r.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var t;this._superApply(arguments);if(this.options.disabled||this.cancelSearch)return;e&&e.length?t=this.options.messages.results(e.length):t=this.options.messages.noResults,this.liveRegion.text(t)}})})(jQuery);(function(e,t){var n,r,i,s,o="ui-button ui-widget ui-state-default ui-corner-all",u="ui-state-hover ui-state-active ",a="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",f=function(){var t=e(this).find(":ui-button");setTimeout(function(){t.button("refresh")},1)},l=function(t){var n=t.name,r=t.form,i=e([]);return n&&(n=n.replace(/'/g,"\\'"),r?i=e(r).find("[name='"+n+"']"):i=e("[name='"+n+"']",t.ownerDocument).filter(function(){return!this.form})),i};e.widget("ui.button",{version:"1.10.0",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,f),typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var t=this,u=this.options,a=this.type==="checkbox"||this.type==="radio",c=a?"":"ui-state-active",h="ui-state-focus";u.label===null&&(u.label=this.type==="input"?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(o).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(u.disabled)return;this===n&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){if(u.disabled)return;e(this).removeClass(c)}).bind("click"+this.eventNamespace,function(e){u.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,function(){t.buttonElement.addClass(h)}).bind("blur"+this.eventNamespace,function(){t.buttonElement.removeClass(h)}),a&&(this.element.bind("change"+this.eventNamespace,function(){if(s)return;t.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(e){if(u.disabled)return;s=!1,r=e.pageX,i=e.pageY}).bind("mouseup"+this.eventNamespace,function(e){if(u.disabled)return;if(r!==e.pageX||i!==e.pageY)s=!0})),this.type==="checkbox"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||s)return!1}):this.type==="radio"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||s)return!1;e(this).addClass("ui-state-active"),t.buttonElement.attr("aria-pressed","true");var n=t.element[0];l(n).not(n).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(u.disabled)return!1;e(this).addClass("ui-state-active"),n=this,t.document.one("mouseup",function(){n=null})}).bind("mouseup"+this.eventNamespace,function(){if(u.disabled)return!1;e(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(t){if(u.disabled)return!1;(t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active")}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",u.disabled),this._resetButton()},_determineButtonType:function(){var e,t,n;this.element.is("[type=checkbox]")?this.type="checkbox":this.element.is("[type=radio]")?this.type="radio":this.element.is("input")?this.type="input":this.type="button",this.type==="checkbox"||this.type==="radio"?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),n=this.element.is(":checked"),n&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",n)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(o+" "+u+" "+a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){this._super(e,t);if(e==="disabled"){t?this.element.prop("disabled",!0):this.element.prop("disabled",!1);return}this._resetButton()},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),this.type==="radio"?l(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label);return}var t=this.buttonElement.removeClass(a),n=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),r=this.options.icons,i=r.primary&&r.secondary,s=[];r.primary||r.secondary?(this.options.text&&s.push("ui-button-text-icon"+(i?"s":r.primary?"-primary":"-secondary")),r.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+r.primary+"'></span>"),r.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+r.secondary+"'></span>"),this.options.text||(s.push(i?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(n)))):s.push("ui-button-text-only"),t.addClass(s.join(" "))}}),e.widget("ui.buttonset",{version:"1.10.0",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){e==="disabled"&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery);(function(e,t){function s(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.dpDiv=o(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function o(t){var n="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(n,"mouseout",function(){e(this).removeClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&e(this).removeClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(n,"mouseover",function(){e.datepicker._isDisabledDatepicker(i.inline?t.parent()[0]:i.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&e(this).addClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&e(this).addClass("ui-datepicker-next-hover"))})}function u(t,n){e.extend(t,n);for(var r in n)n[r]==null&&(t[r]=n[r]);return t}e.extend(e.ui,{datepicker:{version:"1.10.0"}});var n="datepicker",r=(new Date).getTime(),i;e.extend(s.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return u(this._defaults,e||{}),this},_attachDatepicker:function(t,n){var r,i,s;r=t.nodeName.toLowerCase(),i=r==="div"||r==="span",t.id||(this.uuid+=1,t.id="dp"+this.uuid),s=this._newInst(e(t),i),s.settings=e.extend({},n||{}),r==="input"?this._connectDatepicker(t,s):i&&this._inlineDatepicker(t,s)},_newInst:function(t,n){var r=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:r,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:n,dpDiv:n?o(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,r){var i=e(t);r.append=e([]),r.trigger=e([]);if(i.hasClass(this.markerClassName))return;this._attachments(i,r),i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(r),e.data(t,n,r),r.settings.disabled&&this._disableDatepicker(t)},_attachments:function(t,n){var r,i,s,o=this._get(n,"appendText"),u=this._get(n,"isRTL");n.append&&n.append.remove(),o&&(n.append=e("<span class='"+this._appendClass+"'>"+o+"</span>"),t[u?"before":"after"](n.append)),t.unbind("focus",this._showDatepicker),n.trigger&&n.trigger.remove(),r=this._get(n,"showOn"),(r==="focus"||r==="both")&&t.focus(this._showDatepicker);if(r==="button"||r==="both")i=this._get(n,"buttonText"),s=this._get(n,"buttonImage"),n.trigger=e(this._get(n,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:s,alt:i,title:i}):e("<button type='button'></button>").addClass(this._triggerClass).html(s?e("<img/>").attr({src:s,alt:i,title:i}):i)),t[u?"before":"after"](n.trigger),n.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1})},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,n,r,i,s=new Date(2009,11,20),o=this._get(e,"dateFormat");o.match(/[DM]/)&&(t=function(e){n=0,r=0;for(i=0;i<e.length;i++)e[i].length>n&&(n=e[i].length,r=i);return r},s.setMonth(t(this._get(e,o.match(/MM/)?"monthNames":"monthNamesShort"))),s.setDate(t(this._get(e,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-s.getDay())),e.input.attr("size",this._formatDate(e,s).length)}},_inlineDatepicker:function(t,r){var i=e(t);if(i.hasClass(this.markerClassName))return;i.addClass(this.markerClassName).append(r.dpDiv),e.data(t,n,r),this._setDate(r,this._getDefaultDate(r),!0),this._updateDatepicker(r),this._updateAlternate(r),r.settings.disabled&&this._disableDatepicker(t),r.dpDiv.css("display","block")},_dialogDatepicker:function(t,r,i,s,o){var a,f,l,c,h,p=this._dialogInst;return p||(this.uuid+=1,a="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+a+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),p=this._dialogInst=this._newInst(this._dialogInput,!1),p.settings={},e.data(this._dialogInput[0],n,p)),u(p.settings,s||{}),r=r&&r.constructor===Date?this._formatDate(p,r):r,this._dialogInput.val(r),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(f=document.documentElement.clientWidth,l=document.documentElement.clientHeight,c=document.documentElement.scrollLeft||document.body.scrollLeft,h=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[f/2-100+c,l/2-150+h]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),p.settings.onSelect=i,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],n,p),this},_destroyDatepicker:function(t){var r,i=e(t),s=e.data(t,n);if(!i.hasClass(this.markerClassName))return;r=t.nodeName.toLowerCase(),e.removeData(t,n),r==="input"?(s.append.remove(),s.trigger.remove(),i.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(r==="div"||r==="span")&&i.removeClass(this.markerClassName).empty()},_enableDatepicker:function(t){var r,i,s=e(t),o=e.data(t,n);if(!s.hasClass(this.markerClassName))return;r=t.nodeName.toLowerCase();if(r==="input")t.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if(r==="div"||r==="span")i=s.children("."+this._inlineClass),i.children().removeClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1);this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e})},_disableDatepicker:function(t){var r,i,s=e(t),o=e.data(t,n);if(!s.hasClass(this.markerClassName))return;r=t.nodeName.toLowerCase();if(r==="input")t.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if(r==="div"||r==="span")i=s.children("."+this._inlineClass),i.children().addClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0);this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;t<this._disabledInputs.length;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,n)}catch(r){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(n,r,i){var s,o,a,f,l=this._getInst(n);if(arguments.length===2&&typeof r=="string")return r==="defaults"?e.extend({},e.datepicker._defaults):l?r==="all"?e.extend({},l.settings):this._get(l,r):null;s=r||{},typeof r=="string"&&(s={},s[r]=i),l&&(this._curInst===l&&this._hideDatepicker(),o=this._getDateDatepicker(n,!0),a=this._getMinMaxDate(l,"min"),f=this._getMinMaxDate(l,"max"),u(l.settings,s),a!==null&&s.dateFormat!==t&&s.minDate===t&&(l.settings.minDate=this._formatDate(l,a)),f!==null&&s.dateFormat!==t&&s.maxDate===t&&(l.settings.maxDate=this._formatDate(l,f)),"disabled"in s&&(s.disabled?this._disableDatepicker(n):this._enableDatepicker(n)),this._attachments(e(n),l),this._autoSize(l),this._setDate(l,o),this._updateAlternate(l),this._updateDatepicker(l))},_changeDatepicker:function(e,t,n){this._optionDatepicker(e,t,n)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var n=this._getInst(e);n&&(this._setDate(n,t),this._updateDatepicker(n),this._updateAlternate(n))},_getDateDatepicker:function(e,t){var n=this._getInst(e);return n&&!n.inline&&this._setDateFromField(n,t),n?this._getDate(n):null},_doKeyDown:function(t){var n,r,i,s=e.datepicker._getInst(t.target),o=!0,u=s.dpDiv.is(".ui-datepicker-rtl");s._keyEvent=!0;if(e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),o=!1;break;case 13:return i=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",s.dpDiv),i[0]&&e.datepicker._selectDay(t.target,s.selectedMonth,s.selectedYear,i[0]),n=e.datepicker._get(s,"onSelect"),n?(r=e.datepicker._formatDate(s),n.apply(s.input?s.input[0]:null,[r,s])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(s,"stepBigMonths"):-e.datepicker._get(s,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(s,"stepBigMonths"):+e.datepicker._get(s,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),o=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),o=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,u?1:-1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(s,"stepBigMonths"):-e.datepicker._get(s,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),o=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,u?-1:1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(s,"stepBigMonths"):+e.datepicker._get(s,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),o=t.ctrlKey||t.metaKey;break;default:o=!1}else t.keyCode===36&&t.ctrlKey?e.datepicker._showDatepicker(this):o=!1;o&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var n,r,i=e.datepicker._getInst(t.target);if(e.datepicker._get(i,"constrainInput"))return n=e.datepicker._possibleChars(e.datepicker._get(i,"dateFormat")),r=String.fromCharCode(t.charCode==null?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||r<" "||!n||n.indexOf(r)>-1},_doKeyUp:function(t){var n,r=e.datepicker._getInst(t.target);if(r.input.val()!==r.lastVal)try{n=e.datepicker.parseDate(e.datepicker._get(r,"dateFormat"),r.input?r.input.val():null,e.datepicker._getFormatConfig(r)),n&&(e.datepicker._setDateFromField(r),e.datepicker._updateAlternate(r),e.datepicker._updateDatepicker(r))}catch(i){}return!0},_showDatepicker:function(t){t=t.target||t,t.nodeName.toLowerCase()!=="input"&&(t=e("input",t.parentNode)[0]);if(e.datepicker._isDisabledDatepicker(t)||e.datepicker._lastInput===t)return;var n,r,i,s,o,a,f;n=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==n&&(e.datepicker._curInst.dpDiv.stop(!0,!0),n&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),r=e.datepicker._get(n,"beforeShow"),i=r?r.apply(t,[t,n]):{};if(i===!1)return;u(n.settings,i),n.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(n),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),s=!1,e(t).parents().each(function(){return s|=e(this).css("position")==="fixed",!s}),o={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,n.dpDiv.empty(),n.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(n),o=e.datepicker._checkOffset(n,o,s),n.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":s?"fixed":"absolute",display:"none",left:o.left+"px",top:o.top+"px"}),n.inline||(a=e.datepicker._get(n,"showAnim"),f=e.datepicker._get(n,"duration"),n.dpDiv.zIndex(e(t).zIndex()+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[a]?n.dpDiv.show(a,e.datepicker._get(n,"showOptions"),f):n.dpDiv[a||"show"](a?f:null),n.input.is(":visible")&&!n.input.is(":disabled")&&n.input.focus(),e.datepicker._curInst=n)},_updateDatepicker:function(t){this.maxRows=4,i=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t),t.dpDiv.find("."+this._dayOverClass+" a").mouseover();var n,r=this._getNumberOfMonths(t),s=r[1],o=17;t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),s>1&&t.dpDiv.addClass("ui-datepicker-multi-"+s).css("width",o*s+"em"),t.dpDiv[(r[0]!==1||r[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&t.input[0]!==document.activeElement&&t.input.focus(),t.yearshtml&&(n=t.yearshtml,setTimeout(function(){n===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),n=t.yearshtml=null},0))},_getBorders:function(e){var t=function(e){return{thin:1,medium:2,thick:3}[e]||e};return[parseFloat(t(e.css("border-left-width"))),parseFloat(t(e.css("border-top-width")))]},_checkOffset:function(t,n,r){var i=t.dpDiv.outerWidth(),s=t.dpDiv.outerHeight(),o=t.input?t.input.outerWidth():0,u=t.input?t.input.outerHeight():0,a=document.documentElement.clientWidth+(r?0:e(document).scrollLeft()),f=document.documentElement.clientHeight+(r?0:e(document).scrollTop());return n.left-=this._get(t,"isRTL")?i-o:0,n.left-=r&&n.left===t.input.offset().left?e(document).scrollLeft():0,n.top-=r&&n.top===t.input.offset().top+u?e(document).scrollTop():0,n.left-=Math.min(n.left,n.left+i>a&&a>i?Math.abs(n.left+i-a):0),n.top-=Math.min(n.top,n.top+s>f&&f>s?Math.abs(s+u):0),n},_findPos:function(t){var n,r=this._getInst(t),i=this._get(r,"isRTL");while(t&&(t.type==="hidden"||t.nodeType!==1||e.expr.filters.hidden(t)))t=t[i?"previousSibling":"nextSibling"];return n=e(t).offset(),[n.left,n.top]},_hideDatepicker:function(t){var r,i,s,o,u=this._curInst;if(!u||t&&u!==e.data(t,n))return;this._datepickerShowing&&(r=this._get(u,"showAnim"),i=this._get(u,"duration"),s=function(){e.datepicker._tidyDialog(u)},e.effects&&(e.effects.effect[r]||e.effects[r])?u.dpDiv.hide(r,e.datepicker._get(u,"showOptions"),i,s):u.dpDiv[r==="slideDown"?"slideUp":r==="fadeIn"?"fadeOut":"hide"](r?i:null,s),r||s(),this._datepickerShowing=!1,o=this._get(u,"onClose"),o&&o.apply(u.input?u.input[0]:null,[u.input?u.input.val():"",u]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(!e.datepicker._curInst)return;var n=e(t.target),r=e.datepicker._getInst(n[0]);(n[0].id!==e.datepicker._mainDivId&&n.parents("#"+e.datepicker._mainDivId).length===0&&!n.hasClass(e.datepicker.markerClassName)&&!n.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||n.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==r)&&e.datepicker._hideDatepicker()},_adjustDate:function(t,n,r){var i=e(t),s=this._getInst(i[0]);if(this._isDisabledDatepicker(i[0]))return;this._adjustInstDate(s,n+(r==="M"?this._get(s,"showCurrentAtPos"):0),r),this._updateDatepicker(s)},_gotoToday:function(t){var n,r=e(t),i=this._getInst(r[0]);this._get(i,"gotoCurrent")&&i.currentDay?(i.selectedDay=i.currentDay,i.drawMonth=i.selectedMonth=i.currentMonth,i.drawYear=i.selectedYear=i.currentYear):(n=new Date,i.selectedDay=n.getDate(),i.drawMonth=i.selectedMonth=n.getMonth(),i.drawYear=i.selectedYear=n.getFullYear()),this._notifyChange(i),this._adjustDate(r)},_selectMonthYear:function(t,n,r){var i=e(t),s=this._getInst(i[0]);s["selected"+(r==="M"?"Month":"Year")]=s["draw"+(r==="M"?"Month":"Year")]=parseInt(n.options[n.selectedIndex].value,10),this._notifyChange(s),this._adjustDate(i)},_selectDay:function(t,n,r,i){var s,o=e(t);if(e(i).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0]))return;s=this._getInst(o[0]),s.selectedDay=s.currentDay=e("a",i).html(),s.selectedMonth=s.currentMonth=n,s.selectedYear=s.currentYear=r,this._selectDate(t,this._formatDate(s,s.currentDay,s.currentMonth,s.currentYear))},_clearDate:function(t){var n=e(t);this._selectDate(n,"")},_selectDate:function(t,n){var r,i=e(t),s=this._getInst(i[0]);n=n!=null?n:this._formatDate(s),s.input&&s.input.val(n),this._updateAlternate(s),r=this._get(s,"onSelect"),r?r.apply(s.input?s.input[0]:null,[n,s]):s.input&&s.input.trigger("change"),s.inline?this._updateDatepicker(s):(this._hideDatepicker(),this._lastInput=s.input[0],typeof s.input[0]!="object"&&s.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var n,r,i,s=this._get(t,"altField");s&&(n=this._get(t,"altFormat")||this._get(t,"dateFormat"),r=this._getDate(t),i=this.formatDate(n,r,this._getFormatConfig(t)),e(s).each(function(){e(this).val(i)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&t<6,""]},iso8601Week:function(e){var t,n=new Date(e.getTime());return n.setDate(n.getDate()+4-(n.getDay()||7)),t=n.getTime(),n.setMonth(0),n.setDate(1),Math.floor(Math.round((t-n)/864e5)/7)+1},parseDate:function(t,n,r){if(t==null||n==null)throw"Invalid arguments";n=typeof n=="object"?n.toString():n+"";if(n==="")return null;var i,s,o,u=0,a=(r?r.shortYearCutoff:null)||this._defaults.shortYearCutoff,f=typeof a!="string"?a:(new Date).getFullYear()%100+parseInt(a,10),l=(r?r.dayNamesShort:null)||this._defaults.dayNamesShort,c=(r?r.dayNames:null)||this._defaults.dayNames,h=(r?r.monthNamesShort:null)||this._defaults.monthNamesShort,p=(r?r.monthNames:null)||this._defaults.monthNames,d=-1,v=-1,m=-1,g=-1,y=!1,b,w=function(e){var n=i+1<t.length&&t.charAt(i+1)===e;return n&&i++,n},E=function(e){var t=w(e),r=e==="@"?14:e==="!"?20:e==="y"&&t?4:e==="o"?3:2,i=new RegExp("^\\d{1,"+r+"}"),s=n.substring(u).match(i);if(!s)throw"Missing number at position "+u;return u+=s[0].length,parseInt(s[0],10)},S=function(t,r,i){var s=-1,o=e.map(w(t)?i:r,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});e.each(o,function(e,t){var r=t[1];if(n.substr(u,r.length).toLowerCase()===r.toLowerCase())return s=t[0],u+=r.length,!1});if(s!==-1)return s+1;throw"Unknown name at position "+u},x=function(){if(n.charAt(u)!==t.charAt(i))throw"Unexpected literal at position "+u;u++};for(i=0;i<t.length;i++)if(y)t.charAt(i)==="'"&&!w("'")?y=!1:x();else switch(t.charAt(i)){case"d":m=E("d");break;case"D":S("D",l,c);break;case"o":g=E("o");break;case"m":v=E("m");break;case"M":v=S("M",h,p);break;case"y":d=E("y");break;case"@":b=new Date(E("@")),d=b.getFullYear(),v=b.getMonth()+1,m=b.getDate();break;case"!":b=new Date((E("!")-this._ticksTo1970)/1e4),d=b.getFullYear(),v=b.getMonth()+1,m=b.getDate();break;case"'":w("'")?x():y=!0;break;default:x()}if(u<n.length){o=n.substr(u);if(!/^\s+/.test(o))throw"Extra/unparsed characters found in date: "+o}d===-1?d=(new Date).getFullYear():d<100&&(d+=(new Date).getFullYear()-(new Date).getFullYear()%100+(d<=f?0:-100));if(g>-1){v=1,m=g;do{s=this._getDaysInMonth(d,v-1);if(m<=s)break;v++,m-=s}while(!0)}b=this._daylightSavingAdjust(new Date(d,v-1,m));if(b.getFullYear()!==d||b.getMonth()+1!==v||b.getDate()!==m)throw"Invalid date";return b},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1e7,formatDate:function(e,t,n){if(!t)return"";var r,i=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,s=(n?n.dayNames:null)||this._defaults.dayNames,o=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,u=(n?n.monthNames:null)||this._defaults.monthNames,a=function(t){var n=r+1<e.length&&e.charAt(r+1)===t;return n&&r++,n},f=function(e,t,n){var r=""+t;if(a(e))while(r.length<n)r="0"+r;return r},l=function(e,t,n,r){return a(e)?r[t]:n[t]},c="",h=!1;if(t)for(r=0;r<e.length;r++)if(h)e.charAt(r)==="'"&&!a("'")?h=!1:c+=e.charAt(r);else switch(e.charAt(r)){case"d":c+=f("d",t.getDate(),2);break;case"D":c+=l("D",t.getDay(),i,s);break;case"o":c+=f("o",Math.round(((new Date(t.getFullYear(),t.getMonth(),t.getDate())).getTime()-(new Date(t.getFullYear(),0,0)).getTime())/864e5),3);break;case"m":c+=f("m",t.getMonth()+1,2);break;case"M":c+=l("M",t.getMonth(),o,u);break;case"y":c+=a("y")?t.getFullYear():(t.getYear()%100<10?"0":"")+t.getYear()%100;break;case"@":c+=t.getTime();break;case"!":c+=t.getTime()*1e4+this._ticksTo1970;break;case"'":a("'")?c+="'":h=!0;break;default:c+=e.charAt(r)}return c},_possibleChars:function(e){var t,n="",r=!1,i=function(n){var r=t+1<e.length&&e.charAt(t+1)===n;return r&&t++,r};for(t=0;t<e.length;t++)if(r)e.charAt(t)==="'"&&!i("'")?r=!1:n+=e.charAt(t);else switch(e.charAt(t)){case"d":case"m":case"y":case"@":n+="0123456789";break;case"D":case"M":return null;case"'":i("'")?n+="'":r=!0;break;default:n+=e.charAt(t)}return n},_get:function(e,n){return e.settings[n]!==t?e.settings[n]:this._defaults[n]},_setDateFromField:function(e,t){if(e.input.val()===e.lastVal)return;var n=this._get(e,"dateFormat"),r=e.lastVal=e.input?e.input.val():null,i=this._getDefaultDate(e),s=i,o=this._getFormatConfig(e);try{s=this.parseDate(n,r,o)||i}catch(u){r=t?"":r}e.selectedDay=s.getDate(),e.drawMonth=e.selectedMonth=s.getMonth(),e.drawYear=e.selectedYear=s.getFullYear(),e.currentDay=r?s.getDate():0,e.currentMonth=r?s.getMonth():0,e.currentYear=r?s.getFullYear():0,this._adjustInstDate(e)},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,n,r){var i=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},s=function(n){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),n,e.datepicker._getFormatConfig(t))}catch(r){}var i=(n.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,s=i.getFullYear(),o=i.getMonth(),u=i.getDate(),a=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,f=a.exec(n);while(f){switch(f[2]||"d"){case"d":case"D":u+=parseInt(f[1],10);break;case"w":case"W":u+=parseInt(f[1],10)*7;break;case"m":case"M":o+=parseInt(f[1],10),u=Math.min(u,e.datepicker._getDaysInMonth(s,o));break;case"y":case"Y":s+=parseInt(f[1],10),u=Math.min(u,e.datepicker._getDaysInMonth(s,o))}f=a.exec(n)}return new Date(s,o,u)},o=n==null||n===""?r:typeof n=="string"?s(n):typeof n=="number"?isNaN(n)?r:i(n):new Date(n.getTime());return o=o&&o.toString()==="Invalid Date"?r:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,n){var r=!t,i=e.selectedMonth,s=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),(i!==e.selectedMonth||s!==e.selectedYear)&&!n&&this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(r?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&e.input.val()===""?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var n=this._get(t,"stepMonths"),i="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){window["DP_jQuery_"+r].datepicker._adjustDate(i,-n,"M")},next:function(){window["DP_jQuery_"+r].datepicker._adjustDate(i,+n,"M")},hide:function(){window["DP_jQuery_"+r].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+r].datepicker._gotoToday(i)},selectDay:function(){return window["DP_jQuery_"+r].datepicker._selectDay(i,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return window["DP_jQuery_"+r].datepicker._selectMonthYear(i,this,"M"),!1},selectYear:function(){return window["DP_jQuery_"+r].datepicker._selectMonthYear(i,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q=new Date,R=this._daylightSavingAdjust(new Date(q.getFullYear(),q.getMonth(),q.getDate())),U=this._get(e,"isRTL"),z=this._get(e,"showButtonPanel"),W=this._get(e,"hideIfNoPrevNext"),X=this._get(e,"navigationAsDateFormat"),V=this._getNumberOfMonths(e),$=this._get(e,"showCurrentAtPos"),J=this._get(e,"stepMonths"),K=V[0]!==1||V[1]!==1,Q=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),G=this._getMinMaxDate(e,"min"),Y=this._getMinMaxDate(e,"max"),Z=e.drawMonth-$,et=e.drawYear;Z<0&&(Z+=12,et--);if(Y){t=this._daylightSavingAdjust(new Date(Y.getFullYear(),Y.getMonth()-V[0]*V[1]+1,Y.getDate())),t=G&&t<G?G:t;while(this._daylightSavingAdjust(new Date(et,Z,1))>t)Z--,Z<0&&(Z=11,et--)}e.drawMonth=Z,e.drawYear=et,n=this._get(e,"prevText"),n=X?this.formatDate(n,this._daylightSavingAdjust(new Date(et,Z-J,1)),this._getFormatConfig(e)):n,r=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(U?"e":"w")+"'>"+n+"</span></a>":W?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(U?"e":"w")+"'>"+n+"</span></a>",i=this._get(e,"nextText"),i=X?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z+J,1)),this._getFormatConfig(e)):i,s=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(U?"w":"e")+"'>"+i+"</span></a>":W?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(U?"w":"e")+"'>"+i+"</span></a>",o=this._get(e,"currentText"),u=this._get(e,"gotoCurrent")&&e.currentDay?Q:R,o=X?this.formatDate(o,u,this._getFormatConfig(e)):o,a=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",f=z?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(U?a:"")+(this._isInRange(e,u)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(U?"":a)+"</div>":"",l=parseInt(this._get(e,"firstDay"),10),l=isNaN(l)?0:l,c=this._get(e,"showWeek"),h=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),d=this._get(e,"monthNames"),v=this._get(e,"monthNamesShort"),m=this._get(e,"beforeShowDay"),g=this._get(e,"showOtherMonths"),y=this._get(e,"selectOtherMonths"),b=this._getDefaultDate(e),w="",E;for(S=0;S<V[0];S++){x="",this.maxRows=4;for(T=0;T<V[1];T++){N=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),C=" ui-corner-all",k="";if(K){k+="<div class='ui-datepicker-group";if(V[1]>1)switch(T){case 0:k+=" ui-datepicker-group-first",C=" ui-corner-"+(U?"right":"left");break;case V[1]-1:k+=" ui-datepicker-group-last",C=" ui-corner-"+(U?"left":"right");break;default:k+=" ui-datepicker-group-middle",C=""}k+="'>"}k+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+C+"'>"+(/all|left/.test(C)&&S===0?U?s:r:"")+(/all|right/.test(C)&&S===0?U?r:s:"")+this._generateMonthYearHeader(e,Z,et,G,Y,S>0||T>0,d,v)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",L=c?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"";for(E=0;E<7;E++)A=(E+l)%7,L+="<th"+((E+l+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+h[A]+"'>"+p[A]+"</span></th>";k+=L+"</tr></thead><tbody>",O=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,O)),M=(this._getFirstDayOfMonth(et,Z)-l+7)%7,_=Math.ceil((M+O)/7),D=K?this.maxRows>_?this.maxRows:_:_,this.maxRows=D,P=this._daylightSavingAdjust(new Date(et,Z,1-M));for(H=0;H<D;H++){k+="<tr>",B=c?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(P)+"</td>":"";for(E=0;E<7;E++)j=m?m.apply(e.input?e.input[0]:null,[P]):[!0,""],F=P.getMonth()!==Z,I=F&&!y||!j[0]||G&&P<G||Y&&P>Y,B+="<td class='"+((E+l+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(P.getTime()===N.getTime()&&Z===e.selectedMonth&&e._keyEvent||b.getTime()===P.getTime()&&b.getTime()===N.getTime()?" "+this._dayOverClass:"")+(I?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!g?"":" "+j[1]+(P.getTime()===Q.getTime()?" "+this._currentClass:"")+(P.getTime()===R.getTime()?" ui-datepicker-today":""))+"'"+((!F||g)&&j[2]?" title='"+j[2]+"'":"")+(I?"":" data-handler='selectDay' data-event='click' data-month='"+P.getMonth()+"' data-year='"+P.getFullYear()+"'")+">"+(F&&!g?"&#xa0;":I?"<span class='ui-state-default'>"+P.getDate()+"</span>":"<a class='ui-state-default"+(P.getTime()===R.getTime()?" ui-state-highlight":"")+(P.getTime()===Q.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+P.getDate()+"</a>")+"</td>",P.setDate(P.getDate()+1),P=this._daylightSavingAdjust(P);k+=B+"</tr>"}Z++,Z>11&&(Z=0,et++),k+="</tbody></table>"+(K?"</div>"+(V[0]>0&&T===V[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=k}w+=x}return w+=f,e._keyEvent=!1,w},_generateMonthYearHeader:function(e,t,n,r,i,s,o,u){var a,f,l,c,h,p,d,v,m=this._get(e,"changeMonth"),g=this._get(e,"changeYear"),y=this._get(e,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",w="";if(s||!m)w+="<span class='ui-datepicker-month'>"+o[t]+"</span>";else{a=r&&r.getFullYear()===n,f=i&&i.getFullYear()===n,w+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";for(l=0;l<12;l++)(!a||l>=r.getMonth())&&(!f||l<=i.getMonth())&&(w+="<option value='"+l+"'"+(l===t?" selected='selected'":"")+">"+u[l]+"</option>");w+="</select>"}y||(b+=w+(s||!m||!g?"&#xa0;":""));if(!e.yearshtml){e.yearshtml="";if(s||!g)b+="<span class='ui-datepicker-year'>"+n+"</span>";else{c=this._get(e,"yearRange").split(":"),h=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?n+parseInt(e.substring(1),10):e.match(/[+\-].*/)?h+parseInt(e,10):parseInt(e,10);return isNaN(t)?h:t},d=p(c[0]),v=Math.max(d,p(c[1]||"")),d=r?Math.max(d,r.getFullYear()):d,v=i?Math.min(v,i.getFullYear()):v,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";for(;d<=v;d++)e.yearshtml+="<option value='"+d+"'"+(d===n?" selected='selected'":"")+">"+d+"</option>";e.yearshtml+="</select>",b+=e.yearshtml,e.yearshtml=null}}return b+=this._get(e,"yearSuffix"),y&&(b+=(s||!m||!g?"&#xa0;":"")+w),b+="</div>",b},_adjustInstDate:function(e,t,n){var r=e.drawYear+(n==="Y"?t:0),i=e.drawMonth+(n==="M"?t:0),s=Math.min(e.selectedDay,this._getDaysInMonth(r,i))+(n==="D"?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(r,i,s)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),(n==="M"||n==="Y")&&this._notifyChange(e)},_restrictMinMax:function(e,t){var n=this._getMinMaxDate(e,"min"),r=this._getMinMaxDate(e,"max"),i=n&&t<n?n:t;return r&&i>r?r:i},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return t==null?[1,1]:typeof t=="number"?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return(new Date(e,t,1)).getDay()},_canAdjustMonth:function(e,t,n,r){var i=this._getNumberOfMonths(e),s=this._daylightSavingAdjust(new Date(n,r+(t<0?t:i[0]*i[1]),1));return t<0&&s.setDate(this._getDaysInMonth(s.getFullYear(),s.getMonth())),this._isInRange(e,s)},_isInRange:function(e,t){var n,r,i=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max"),o=null,u=null,a=this._get(e,"yearRange");return a&&(n=a.split(":"),r=(new Date).getFullYear(),o=parseInt(n[0],10)+r,u=parseInt(n[1],10)+r),(!i||t.getTime()>=i.getTime())&&(!s||t.getTime()<=s.getTime())&&(!o||t.getFullYear()>=o)&&(!u||t.getFullYear()<=u)},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t=typeof t!="string"?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,n,r){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var i=t?typeof t=="object"?t:this._daylightSavingAdjust(new Date(r,n,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),i,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),e("#"+e.datepicker._mainDivId).length===0&&e("body").append(e.datepicker.dpDiv);var n=Array.prototype.slice.call(arguments,1);return typeof t!="string"||t!=="isDisabled"&&t!=="getDate"&&t!=="widget"?t==="option"&&arguments.length===2&&typeof arguments[1]=="string"?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(n)):this.each(function(){typeof t=="string"?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(n)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(n))},e.datepicker=new s,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.10.0",window["DP_jQuery_"+r]=e})(jQuery);(function(e,t){var n={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},r={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};e.widget("ui.dialog",{version:"1.10.0",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var n=e(this).css(t).offset().top;n<0&&e(this).css("top",t.top-n)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&e.fn.draggable&&this._makeDraggable(),this.options.resizable&&e.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?e(t):this.document.find(t||"body").eq(0)},_destroy:function(){var e,t=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:e.noop,enable:e.noop,close:function(t){var n=this;if(!this._isOpen||this._trigger("beforeClose",t)===!1)return;this._isOpen=!1,this._destroyOverlay(),this.opener.filter(":focusable").focus().length||e(this.document[0].activeElement).blur(),this._hide(this.uiDialog,this.options.hide,function(){n._trigger("close",t)})},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,t){var n=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return n&&!t&&this._trigger("focus",e),n},open:function(){if(this._isOpen){this._moveToTop()&&this._focusTabbable();return}this.opener=e(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show),this._focusTabbable(),this._isOpen=!0,this._trigger("open"),this._trigger("focus")},_focusTabbable:function(){var e=this.element.find("[autofocus]");e.length||(e=this.element.find(":tabbable")),e.length||(e=this.uiDialogButtonPane.find(":tabbable")),e.length||(e=this.uiDialogTitlebarClose.filter(":tabbable")),e.length||(e=this.uiDialog),e.eq(0).focus()},_keepFocus:function(t){function n(){var t=this.document[0].activeElement,n=this.uiDialog[0]===t||e.contains(this.uiDialog[0],t);n||this._focusTabbable()}t.preventDefault(),n.call(this),this._delay(n)},_createWrapper:function(){this.uiDialog=e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE){t.preventDefault(),this.close(t);return}if(t.keyCode!==e.ui.keyCode.TAB)return;var n=this.uiDialog.find(":tabbable"),r=n.filter(":first"),i=n.filter(":last");t.target!==i[0]&&t.target!==this.uiDialog[0]||!!t.shiftKey?(t.target===r[0]||t.target===this.uiDialog[0])&&t.shiftKey&&(i.focus(1),t.preventDefault()):(r.focus(1),t.preventDefault())},mousedown:function(e){this._moveToTop(e)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(t){e(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=e("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(e){e.preventDefault(),this.close(e)}}),t=e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(t),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(e){this.options.title||e.html("&#160;"),e.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var t=this,n=this.options.buttons;this.uiDialogButtonPane.remove(),this.uiButtonSet.empty();if(e.isEmptyObject(n)){this.uiDialog.removeClass("ui-dialog-buttons");return}e.each(n,function(n,r){var i,s;r=e.isFunction(r)?{click:r,text:n}:r,r=e.extend({type:"button"},r),i=r.click,r.click=function(){i.apply(t.element[0],arguments)},s={icons:r.icons,text:r.showText},delete r.icons,delete r.showText,e("<button></button>",r).button(s).appendTo(t.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog)},_makeDraggable:function(){function r(e){return{position:e.position,offset:e.offset}}var t=this,n=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(n,i){e(this).addClass("ui-dialog-dragging"),t._trigger("dragStart",n,r(i))},drag:function(e,n){t._trigger("drag",e,r(n))},stop:function(i,s){n.position=[s.position.left-t.document.scrollLeft(),s.position.top-t.document.scrollTop()],e(this).removeClass("ui-dialog-dragging"),t._trigger("dragStop",i,r(s))}})},_makeResizable:function(){function o(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}var t=this,n=this.options,r=n.resizable,i=this.uiDialog.css("position"),s=typeof r=="string"?r:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:n.maxWidth,maxHeight:n.maxHeight,minWidth:n.minWidth,minHeight:this._minHeight(),handles:s,start:function(n,r){e(this).addClass("ui-dialog-resizing"),t._trigger("resizeStart",n,o(r))},resize:function(e,n){t._trigger("resize",e,o(n))},stop:function(r,i){n.height=e(this).height(),n.width=e(this).width(),e(this).removeClass("ui-dialog-resizing"),t._trigger("resizeStop",r,o(i))}}).css("position",i)},_minHeight:function(){var e=this.options;return e.height==="auto"?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(){var e=this.uiDialog.is(":visible");e||this.uiDialog.show(),this.uiDialog.position(this.options.position),e||this.uiDialog.hide()},_setOptions:function(t){var i=this,s=!1,o={};e.each(t,function(e,t){i._setOption(e,t),e in n&&(s=!0),e in r&&(o[e]=t)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",o)},_setOption:function(e,t){var n,r,i=this.uiDialog;e==="dialogClass"&&i.removeClass(this.options.dialogClass).addClass(t);if(e==="disabled")return;this._super(e,t),e==="appendTo"&&this.uiDialog.appendTo(this._appendTo()),e==="buttons"&&this._createButtons(),e==="closeText"&&this.uiDialogTitlebarClose.button({label:""+t}),e==="draggable"&&(n=i.is(":data(ui-draggable)"),n&&!t&&i.draggable("destroy"),!n&&t&&this._makeDraggable()),e==="position"&&this._position(),e==="resizable"&&(r=i.is(":data(ui-resizable)"),r&&!t&&i.resizable("destroy"),r&&typeof t=="string"&&i.resizable("option","handles",t),!r&&t!==!1&&this._makeResizable()),e==="title"&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))},_size:function(){var e,t,n,r=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),r.minWidth>r.width&&(r.width=r.minWidth),e=this.uiDialog.css({height:"auto",width:r.width}).outerHeight(),t=Math.max(0,r.minHeight-e),n=typeof r.maxHeight=="number"?Math.max(0,r.maxHeight-e):"none",r.height==="auto"?this.element.css({minHeight:t,maxHeight:n,height:"auto"}):this.element.height(Math.max(0,r.height-e)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_createOverlay:function(){if(!this.options.modal)return;e.ui.dialog.overlayInstances||this._delay(function(){e.ui.dialog.overlayInstances&&this._on(this.document,{focusin:function(t){e(t.target).closest(".ui-dialog").length||(t.preventDefault(),e(".ui-dialog:visible:last .ui-dialog-content").data("ui-dialog")._focusTabbable())}})}),this.overlay=e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this.document[0].body),this._on(this.overlay,{mousedown:"_keepFocus"}),e.ui.dialog.overlayInstances++},_destroyOverlay:function(){if(!this.options.modal)return;e.ui.dialog.overlayInstances--,e.ui.dialog.overlayInstances||this._off(this.document,"focusin"),this.overlay.remove()}}),e.ui.dialog.overlayInstances=0,e.uiBackCompat!==!1&&e.widget("ui.dialog",e.ui.dialog,{_position:function(){var t=this.options.position,n=[],r=[0,0],i;if(t){if(typeof t=="string"||typeof t=="object"&&"0"in t)n=t.split?t.split(" "):[t[0],t[1]],n.length===1&&(n[1]=n[0]),e.each(["left","top"],function(e,t){+n[e]===n[e]&&(r[e]=n[e],n[e]=t)}),t={my:n[0]+(r[0]<0?r[0]:"+"+r[0])+" "+n[1]+(r[1]<0?r[1]:"+"+r[1]),at:n.join(" ")};t=e.extend({},e.ui.dialog.prototype.options.position,t)}else t=e.ui.dialog.prototype.options.position;i=this.uiDialog.is(":visible"),i||this.uiDialog.show(),this.uiDialog.position(t),i||this.uiDialog.hide()}})})(jQuery);(function(e,t){e.widget("ui.menu",{version:"1.10.0",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,e.proxy(function(e){this.options.disabled&&e.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(e){e.preventDefault()},"click .ui-state-disabled > a":function(e){e.preventDefault()},"click .ui-menu-item:has(a)":function(t){var n=e(t.target).closest(".ui-menu-item");!this.mouseHandled&&n.not(".ui-state-disabled").length&&(this.mouseHandled=!0,this.select(t),n.has(".ui-menu").length?this.expand(t):this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.active&&this.active.parents(".ui-menu").length===1&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){var n=e(t.currentTarget);n.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(t,n)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var n=this.active||this.element.children(".ui-menu-item").eq(0);t||this.focus(e,n)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){e(t.target).closest(".ui-menu").length||this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){function a(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var n,r,i,s,o,u=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:u=!1,r=this.previousFilter||"",i=String.fromCharCode(t.keyCode),s=!1,clearTimeout(this.filterTimer),i===r?s=!0:i=r+i,o=new RegExp("^"+a(i),"i"),n=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())}),n=s&&n.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):n,n.length||(i=String.fromCharCode(t.keyCode),o=new RegExp("^"+a(i),"i"),n=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())})),n.length?(this.focus(t,n),n.length>1?(this.previousFilter=i,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}u&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(e):this.select(e))},refresh:function(){var t,n=this.options.icons.submenu,r=this.element.find(this.options.menus);r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),r=t.prev("a"),i=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);r.attr("aria-haspopup","true").prepend(i),t.attr("aria-labelledby",r.attr("id"))}),t=r.add(this.element),t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),t.children(":not(.ui-menu-item)").each(function(){var t=e(this);/[^\-—–\s]/.test(t.text())||t.addClass("ui-widget-content ui-menu-divider")}),t.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){e==="icons"&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),this._super(e,t)},focus:function(e,t){var n,r;this.blur(e,e&&e.type==="focus"),this._scrollIntoView(t),this.active=t.first(),r=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",r.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),e&&e.type==="keydown"?this._close():this.timer=this._delay(function(){this._close()},this.delay),n=t.children(".ui-menu"),n.length&&/^mouse/.test(e.type)&&this._startOpening(n),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var n,r,i,s,o,u;this._hasScroll()&&(n=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,r=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,i=t.offset().top-this.activeMenu.offset().top-n-r,s=this.activeMenu.scrollTop(),o=this.activeMenu.height(),u=t.height(),i<0?this.activeMenu.scrollTop(s+i):i+u>o&&this.activeMenu.scrollTop(s+i-o+u))},blur:function(e,t){t||clearTimeout(this.timer);if(!this.active)return;this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active})},_startOpening:function(e){clearTimeout(this.timer);if(e.attr("aria-hidden")!=="true")return;this.timer=this._delay(function(){this._close(),this._open(e)},this.delay)},_open:function(t){var n=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(n)},collapseAll:function(t,n){clearTimeout(this.timer),this.timer=this._delay(function(){var r=n?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));r.length||(r=this.element),this._close(r),this.blur(t),this.activeMenu=r},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,n){var r;this.active&&(e==="first"||e==="last"?r=this.active[e==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1):r=this.active[e+"All"](".ui-menu-item").eq(0));if(!r||!r.length||!this.active)r=this.activeMenu.children(".ui-menu-item")[t]();this.focus(n,r)},nextPage:function(t){var n,r,i;if(!this.active){this.next(t);return}if(this.isLastItem())return;this._hasScroll()?(r=this.active.offset().top,i=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-r-i<0}),this.focus(t,n)):this.focus(t,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())},previousPage:function(t){var n,r,i;if(!this.active){this.next(t);return}if(this.isFirstItem())return;this._hasScroll()?(r=this.active.offset().top,i=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-r+i>0}),this.focus(t,n)):this.focus(t,this.activeMenu.children(".ui-menu-item").first())},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var n={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,n)}})})(jQuery);(function(e,t){e.widget("ui.progressbar",{version:"1.10.0",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(e){if(e===t)return this.options.value;this.options.value=this._constrainedValue(e),this._refreshValue()},_constrainedValue:function(e){return e===t&&(e=this.options.value),this.indeterminate=e===!1,typeof e!="number"&&(e=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,e))},_setOptions:function(e){var t=e.value;delete e.value,this._super(e),this.options.value=this._constrainedValue(t),this._refreshValue()},_setOption:function(e,t){e==="max"&&(t=Math.max(this.min,t)),this._super(e,t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var t=this.options.value,n=this._percentage();this.valueDiv.toggle(this.indeterminate||t>this.min).toggleClass("ui-corner-right",t===this.options.max).width(n.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":t}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==t&&(this.oldValue=t,this._trigger("change")),t===this.options.max&&this._trigger("complete")}})})(jQuery);(function(e,t){var n=5;e.widget("ui.slider",e.ui.mouse,{version:"1.10.0",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){var t,n,r=this.options,i=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),s="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this.range=e([]),r.range&&(r.range===!0&&(r.values?r.values.length&&r.values.length!==2?r.values=[r.values[0],r.values[0]]:e.isArray(r.values)&&(r.values=r.values.slice(0)):r.values=[this._valueMin(),this._valueMin()]),this.range=e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(r.range==="min"||r.range==="max"?" ui-slider-range-"+r.range:""))),n=r.values&&r.values.length||1;for(t=i.length;t<n;t++)o.push(s);this.handles=i.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(e){e.preventDefault()}).mouseenter(function(){r.disabled||e(this).addClass("ui-state-hover")}).mouseleave(function(){e(this).removeClass("ui-state-hover")}).focus(function(){r.disabled?e(this).blur():(e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),e(this).addClass("ui-state-focus"))}).blur(function(){e(this).removeClass("ui-state-focus")}),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)}),this._setOption("disabled",r.disabled),this._on(this.handles,this._handleEvents),this._refreshValue(),this._animateOff=!1},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var n,r,i,s,o,u,a,f,l=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),n={x:t.pageX,y:t.pageY},r=this._normValueFromMouse(n),i=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var n=Math.abs(r-l.values(t));if(i>n||i===n&&(t===l._lastChangedValue||l.values(t)===c.min))i=n,s=e(this),o=t}),u=this._start(t,o),u===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,s.addClass("ui-state-active").focus(),a=s.offset(),f=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=f?{left:0,top:0}:{left:t.pageX-a.left-s.width()/2,top:t.pageY-a.top-s.height()/2-(parseInt(s.css("borderTopWidth"),10)||0)-(parseInt(s.css("borderBottomWidth"),10)||0)+(parseInt(s.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,r),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},n=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,n),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,n,r,i,s;return this.orientation==="horizontal"?(t=this.elementSize.width,n=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,n=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),r=n/t,r>1&&(r=1),r<0&&(r=0),this.orientation==="vertical"&&(r=1-r),i=this._valueMax()-this._valueMin(),s=this._valueMin()+r*i,this._trimAlignValue(s)},_start:function(e,t){var n={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("start",e,n)},_slide:function(e,t,n){var r,i,s;this.options.values&&this.options.values.length?(r=this.values(t?0:1),this.options.values.length===2&&this.options.range===!0&&(t===0&&n>r||t===1&&n<r)&&(n=r),n!==this.values(t)&&(i=this.values(),i[t]=n,s=this._trigger("slide",e,{handle:this.handles[t],value:n,values:i}),r=this.values(t?0:1),s!==!1&&this.values(t,n,!0))):n!==this.value()&&(s=this._trigger("slide",e,{handle:this.handles[t],value:n}),s!==!1&&this.value(n))},_stop:function(e,t){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("stop",e,n)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,n)}},value:function(e){if(arguments.length){this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0);return}return this._value()},values:function(t,n){var r,i,s;if(arguments.length>1){this.options.values[t]=this._trimAlignValue(n),this._refreshValue(),this._change(null,t);return}if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();r=this.options.values,i=arguments[0];for(s=0;s<r.length;s+=1)r[s]=this._trimAlignValue(i[s]),this._change(null,s);this._refreshValue()},_setOption:function(t,n){var r,i=0;e.isArray(this.options.values)&&(i=this.options.values.length),e.Widget.prototype._setOption.apply(this,arguments);switch(t){case"disabled":n?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.prop("disabled",!0)):this.handles.prop("disabled",!1);break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(r=0;r<i;r+=1)this._change(null,r);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e),e},_values:function(e){var t,n,r;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t),t;n=this.options.values.slice();for(r=0;r<n.length;r+=1)n[r]=this._trimAlignValue(n[r]);return n},_trimAlignValue:function(e){if(e<=this._valueMin())return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,n=(e-this._valueMin())%t,r=e-n;return Math.abs(n)*2>=t&&(r+=n>0?t:-t),parseFloat(r.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var t,n,r,i,s,o=this.options.range,u=this.options,a=this,f=this._animateOff?!1:u.animate,l={};this.options.values&&this.options.values.length?this.handles.each(function(r){n=(a.values(r)-a._valueMin())/(a._valueMax()-a._valueMin())*100,l[a.orientation==="horizontal"?"left":"bottom"]=n+"%",e(this).stop(1,1)[f?"animate":"css"](l,u.animate),a.options.range===!0&&(a.orientation==="horizontal"?(r===0&&a.range.stop(1,1)[f?"animate":"css"]({left:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({width:n-t+"%"},{queue:!1,duration:u.animate})):(r===0&&a.range.stop(1,1)[f?"animate":"css"]({bottom:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({height:n-t+"%"},{queue:!1,duration:u.animate}))),t=n}):(r=this.value(),i=this._valueMin(),s=this._valueMax(),n=s!==i?(r-i)/(s-i)*100:0,l[this.orientation==="horizontal"?"left":"bottom"]=n+"%",this.handle.stop(1,1)[f?"animate":"css"](l,u.animate),o==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[f?"animate":"css"]({width:n+"%"},u.animate),o==="max"&&this.orientation==="horizontal"&&this.range[f?"animate":"css"]({width:100-n+"%"},{queue:!1,duration:u.animate}),o==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[f?"animate":"css"]({height:n+"%"},u.animate),o==="max"&&this.orientation==="vertical"&&this.range[f?"animate":"css"]({height:100-n+"%"},{queue:!1,duration:u.animate}))},_handleEvents:{keydown:function(t){var r,i,s,o,u=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:t.preventDefault();if(!this._keySliding){this._keySliding=!0,e(t.target).addClass("ui-state-active"),r=this._start(t,u);if(r===!1)return}}o=this.options.step,this.options.values&&this.options.values.length?i=s=this.values(u):i=s=this.value();switch(t.keyCode){case e.ui.keyCode.HOME:s=this._valueMin();break;case e.ui.keyCode.END:s=this._valueMax();break;case e.ui.keyCode.PAGE_UP:s=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.PAGE_DOWN:s=this._trimAlignValue(i-(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(i===this._valueMax())return;s=this._trimAlignValue(i+o);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(i===this._valueMin())return;s=this._trimAlignValue(i-o)}this._slide(t,u,s)},keyup:function(t){var n=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,n),this._change(t,n),e(t.target).removeClass("ui-state-active"))}}})})(jQuery);(function(e){function t(e){return function(){var t=this.element.val();e.apply(this,arguments),this._refresh(),t!==this.element.val()&&this._trigger("change")}}e.widget("ui.spinner",{version:"1.10.0",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var t={},n=this.element;return e.each(["min","max","step"],function(e,r){var i=n.attr(r);i!==undefined&&i.length&&(t[r]=i)}),t},_events:{keydown:function(e){this._start(e)&&this._keydown(e)&&e.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(e){if(this.cancelBlur){delete this.cancelBlur;return}this._refresh(),this.previous!==this.element.val()&&this._trigger("change",e)},mousewheel:function(e,t){if(!t)return;if(!this.spinning&&!this._start(e))return!1;this._spin((t>0?1:-1)*this.options.step,e),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(e)},100),e.preventDefault()},"mousedown .ui-spinner-button":function(t){function r(){var e=this.element[0]===this.document[0].activeElement;e||(this.element.focus(),this.previous=n,this._delay(function(){this.previous=n}))}var n;n=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),t.preventDefault(),r.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,r.call(this)});if(this._start(t)===!1)return;this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){if(!e(t.currentTarget).hasClass("ui-state-active"))return;if(this._start(t)===!1)return!1;this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var e=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=e.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(e.height()*.5)&&e.height()>0&&e.height(e.height()),this.options.disabled&&this.disable()},_keydown:function(t){var n=this.options,r=e.ui.keyCode;switch(t.keyCode){case r.UP:return this._repeat(null,1,t),!0;case r.DOWN:return this._repeat(null,-1,t),!0;case r.PAGE_UP:return this._repeat(null,n.page,t),!0;case r.PAGE_DOWN:return this._repeat(null,-n.page,t),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(e){return!this.spinning&&this._trigger("start",e)===!1?!1:(this.counter||(this.counter=1),this.spinning=!0,!0)},_repeat:function(e,t,n){e=e||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,t,n)},e),this._spin(t*this.options.step,n)},_spin:function(e,t){var n=this.value()||0;this.counter||(this.counter=1),n=this._adjustValue(n+e*this._increment(this.counter));if(!this.spinning||this._trigger("spin",t,{value:n})!==!1)this._value(n),this.counter++},_increment:function(t){var n=this.options.incremental;return n?e.isFunction(n)?n(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision:function(){var e=this._precisionOf(this.options.step);return this.options.min!==null&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=e.toString(),n=t.indexOf(".");return n===-1?0:t.length-n-1},_adjustValue:function(e){var t,n,r=this.options;return t=r.min!==null?r.min:0,n=e-t,n=Math.round(n/r.step)*r.step,e=t+n,e=parseFloat(e.toFixed(this._precision())),r.max!==null&&e>r.max?r.max:r.min!==null&&e<r.min?r.min:e},_stop:function(e){if(!this.spinning)return;clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",e)},_setOption:function(e,t){if(e==="culture"||e==="numberFormat"){var n=this._parse(this.element.val());this.options[e]=t,this.element.val(this._format(n));return}(e==="max"||e==="min"||e==="step")&&typeof t=="string"&&(t=this._parse(t)),e==="icons"&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)),this._super(e,t),e==="disabled"&&(t?(this.element.prop("disabled",!0),this.buttons.button("disable")):(this.element.prop("disabled",!1),this.buttons.button("enable")))},_setOptions:t(function(e){this._super(e),this._value(this.element.val())}),_parse:function(e){return typeof e=="string"&&e!==""&&(e=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(e,10,this.options.culture):+e),e===""||isNaN(e)?null:e},_format:function(e){return e===""?"":window.Globalize&&this.options.numberFormat?Globalize.format(e,this.options.numberFormat,this.options.culture):e},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(e,t){var n;e!==""&&(n=this._parse(e),n!==null&&(t||(n=this._adjustValue(n)),e=this._format(n))),this.element.val(e),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:t(function(e){this._stepUp(e)}),_stepUp:function(e){this._start()&&(this._spin((e||1)*this.options.step),this._stop())},stepDown:t(function(e){this._stepDown(e)}),_stepDown:function(e){this._start()&&(this._spin((e||1)*-this.options.step),this._stop())},pageUp:t(function(e){this._stepUp((e||1)*this.options.page)}),pageDown:t(function(e){this._stepDown((e||1)*this.options.page)}),value:function(e){if(!arguments.length)return this._parse(this.element.val());t(this._value).call(this,e)},widget:function(){return this.uiSpinner}})})(jQuery);(function(e,t){function i(){return++n}function s(e){return e.hash.length>1&&decodeURIComponent(e.href.replace(r,""))===decodeURIComponent(location.href.replace(r,""))}var n=0,r=/#.*$/;e.widget("ui.tabs",{version:"1.10.0",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var t=this,n=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",n.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(t){e(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){e(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),n.active=this._initialActive(),e.isArray(n.disabled)&&(n.disabled=e.unique(n.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"),function(e){return t.tabs.index(e)}))).sort()),this.options.active!==!1&&this.anchors.length?this.active=this._findActive(n.active):this.active=e(),this._refresh(),this.active.length&&this.load(n.active)},_initialActive:function(){var t=this.options.active,n=this.options.collapsible,r=location.hash.substring(1);if(t===null){r&&this.tabs.each(function(n,i){if(e(i).attr("aria-controls")===r)return t=n,!1}),t===null&&(t=this.tabs.index(this.tabs.filter(".ui-tabs-active")));if(t===null||t===-1)t=this.tabs.length?0:!1}return t!==!1&&(t=this.tabs.index(this.tabs.eq(t)),t===-1&&(t=n?!1:0)),!n&&t===!1&&this.anchors.length&&(t=0),t},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):e()}},_tabKeydown:function(t){var n=e(this.document[0].activeElement).closest("li"),r=this.tabs.index(n),i=!0;if(this._handlePageNav(t))return;switch(t.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:r++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:i=!1,r--;break;case e.ui.keyCode.END:r=this.anchors.length-1;break;case e.ui.keyCode.HOME:r=0;break;case e.ui.keyCode.SPACE:t.preventDefault(),clearTimeout(this.activating),this._activate(r);return;case e.ui.keyCode.ENTER:t.preventDefault(),clearTimeout(this.activating),this._activate(r===this.options.active?!1:r);return;default:return}t.preventDefault(),clearTimeout(this.activating),r=this._focusNextTab(r,i),t.ctrlKey||(n.attr("aria-selected","false"),this.tabs.eq(r).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",r)},this.delay))},_panelKeydown:function(t){if(this._handlePageNav(t))return;t.ctrlKey&&t.keyCode===e.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(t){if(t.altKey&&t.keyCode===e.ui.keyCode.PAGE_UP)return this._activate(this._focusNextTab(this.options.active-1,!1)),!0;if(t.altKey&&t.keyCode===e.ui.keyCode.PAGE_DOWN)return this._activate(this._focusNextTab(this.options.active+1,!0)),!0},_findNextTab:function(t,n){function i(){return t>r&&(t=0),t<0&&(t=r),t}var r=this.tabs.length-1;while(e.inArray(i(),this.options.disabled)!==-1)t=n?t+1:t-1;return t},_focusNextTab:function(e,t){return e=this._findNextTab(e,t),this.tabs.eq(e).focus(),e},_setOption:function(e,t){if(e==="active"){this._activate(t);return}if(e==="disabled"){this._setupDisabled(t);return}this._super(e,t),e==="collapsible"&&(this.element.toggleClass("ui-tabs-collapsible",t),!t&&this.options.active===!1&&this._activate(0)),e==="event"&&this._setupEvents(t),e==="heightStyle"&&this._setupHeightStyle(t)},_tabId:function(e){return e.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(e){return e?e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,n=this.tablist.children(":has(a[href])");t.disabled=e.map(n.filter(".ui-state-disabled"),function(e){return n.index(e)}),this._processTabs(),t.active===!1||!this.anchors.length?(t.active=!1,this.active=e()):this.active.length&&!e.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=e()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var t=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return e("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=e(),this.anchors.each(function(n,r){var i,o,u,a=e(r).uniqueId().attr("id"),f=e(r).closest("li"),l=f.attr("aria-controls");s(r)?(i=r.hash,o=t.element.find(t._sanitizeSelector(i))):(u=t._tabId(f),i="#"+u,o=t.element.find(i),o.length||(o=t._createPanel(u),o.insertAfter(t.panels[n-1]||t.tablist)),o.attr("aria-live","polite")),o.length&&(t.panels=t.panels.add(o)),l&&f.data("ui-tabs-aria-controls",l),f.attr({"aria-controls":i.substring(1),"aria-labelledby":a}),o.attr("aria-labelledby",a)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(t){return e("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){e.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var n=0,r;r=this.tabs[n];n++)t===!0||e.inArray(n,t)!==-1?e(r).addClass("ui-state-disabled").attr("aria-disabled","true"):e(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var n={click:function(e){e.preventDefault()}};t&&e.each(t.split(" "),function(e,t){n[t]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,n),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var n,r=this.element.parent();t==="fill"?(n=r.height(),n-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=e(this),r=t.css("position");if(r==="absolute"||r==="fixed")return;n-=t.outerHeight(!0)}),this.element.children().not(this.panels).each(function(){n-=e(this).outerHeight(!0)}),this.panels.each(function(){e(this).height(Math.max(0,n-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):t==="auto"&&(n=0,this.panels.each(function(){n=Math.max(n,e(this).height("").height())}).height(n))},_eventHandler:function(t){var n=this.options,r=this.active,i=e(t.currentTarget),s=i.closest("li"),o=s[0]===r[0],u=o&&n.collapsible,a=u?e():this._getPanelForTab(s),f=r.length?this._getPanelForTab(r):e(),l={oldTab:r,oldPanel:f,newTab:u?e():s,newPanel:a};t.preventDefault();if(s.hasClass("ui-state-disabled")||s.hasClass("ui-tabs-loading")||this.running||o&&!n.collapsible||this._trigger("beforeActivate",t,l)===!1)return;n.active=u?!1:this.tabs.index(s),this.active=o?e():s,this.xhr&&this.xhr.abort(),!f.length&&!a.length&&e.error("jQuery UI Tabs: Mismatching fragment identifier."),a.length&&this.load(this.tabs.index(s),t),this._toggle(t,l)},_toggle:function(t,n){function o(){r.running=!1,r._trigger("activate",t,n)}function u(){n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),i.length&&r.options.show?r._show(i,r.options.show,o):(i.show(),o())}var r=this,i=n.newPanel,s=n.oldPanel;this.running=!0,s.length&&this.options.hide?this._hide(s,this.options.hide,function(){n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),u()}):(n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),s.hide(),u()),s.attr({"aria-expanded":"false","aria-hidden":"true"}),n.oldTab.attr("aria-selected","false"),i.length&&s.length?n.oldTab.attr("tabIndex",-1):i.length&&this.tabs.filter(function(){return e(this).attr("tabIndex")===0}).attr("tabIndex",-1),i.attr({"aria-expanded":"true","aria-hidden":"false"}),n.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(t){var n,r=this._findActive(t);if(r[0]===this.active[0])return;r.length||(r=this.active),n=r.find(".ui-tabs-anchor")[0],this._eventHandler({target:n,currentTarget:n,preventDefault:e.noop})},_findActive:function(t){return t===!1?e():this.tabs.eq(t)},_getIndex:function(e){return typeof e=="string"&&(e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){e.data(this,"ui-tabs-destroy")?e(this).remove():e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=e(this),n=t.data("ui-tabs-aria-controls");n?t.attr("aria-controls",n).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")}),this.panels.show(),this.options.heightStyle!=="content"&&this.panels.css("height","")},enable:function(n){var r=this.options.disabled;if(r===!1)return;n===t?r=!1:(n=this._getIndex(n),e.isArray(r)?r=e.map(r,function(e){return e!==n?e:null}):r=e.map(this.tabs,function(e,t){return t!==n?t:null})),this._setupDisabled(r)},disable:function(n){var r=this.options.disabled;if(r===!0)return;if(n===t)r=!0;else{n=this._getIndex(n);if(e.inArray(n,r)!==-1)return;e.isArray(r)?r=e.merge([n],r).sort():r=[n]}this._setupDisabled(r)},load:function(t,n){t=this._getIndex(t);var r=this,i=this.tabs.eq(t),o=i.find(".ui-tabs-anchor"),u=this._getPanelForTab(i),a={tab:i,panel:u};if(s(o[0]))return;this.xhr=e.ajax(this._ajaxSettings(o,n,a)),this.xhr&&this.xhr.statusText!=="canceled"&&(i.addClass("ui-tabs-loading"),u.attr("aria-busy","true"),this.xhr.success(function(e){setTimeout(function(){u.html(e),r._trigger("load",n,a)},1)}).complete(function(e,t){setTimeout(function(){t==="abort"&&r.panels.stop(!1,!0),i.removeClass("ui-tabs-loading"),u.removeAttr("aria-busy"),e===r.xhr&&delete r.xhr},1)}))},_ajaxSettings:function(t,n,r){var i=this;return{url:t.attr("href"),beforeSend:function(t,s){return i._trigger("beforeLoad",n,e.extend({jqXHR:t,ajaxSettings:s},r))}}},_getPanelForTab:function(t){var n=e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+n))}})})(jQuery);(function(e){function n(t,n){var r=(t.attr("aria-describedby")||"").split(/\s+/);r.push(n),t.data("ui-tooltip-id",n).attr("aria-describedby",e.trim(r.join(" ")))}function r(t){var n=t.data("ui-tooltip-id"),r=(t.attr("aria-describedby")||"").split(/\s+/),i=e.inArray(n,r);i!==-1&&r.splice(i,1),t.removeData("ui-tooltip-id"),r=e.trim(r.join(" ")),r?t.attr("aria-describedby",r):t.removeAttr("aria-describedby")}var t=0;e.widget("ui.tooltip",{version:"1.10.0",options:{content:function(){var t=e(this).attr("title")||"";return e("<a>").text(t).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption:function(t,n){var r=this;if(t==="disabled"){this[n?"_disable":"_enable"](),this.options[t]=n;return}this._super(t,n),t==="content"&&e.each(this.tooltips,function(e,t){r._updateContent(t)})},_disable:function(){var t=this;e.each(this.tooltips,function(n,r){var i=e.Event("blur");i.target=i.currentTarget=r[0],t.close(i,!0)}),this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))})},open:function(t){var n=this,r=e(t?t.target:this.element).closest(this.options.items);if(!r.length||r.data("ui-tooltip-id"))return;r.attr("title")&&r.data("ui-tooltip-title",r.attr("title")),r.data("ui-tooltip-open",!0),t&&t.type==="mouseover"&&r.parents().each(function(){var t=e(this),r;t.data("ui-tooltip-open")&&(r=e.Event("blur"),r.target=r.currentTarget=this,n.close(r,!0)),t.attr("title")&&(t.uniqueId(),n.parents[this.id]={element:this,title:t.attr("title")},t.attr("title",""))}),this._updateContent(r,t)},_updateContent:function(e,t){var n,r=this.options.content,i=this,s=t?t.type:null;if(typeof r=="string")return this._open(t,e,r);n=r.call(e[0],function(n){if(!e.data("ui-tooltip-open"))return;i._delay(function(){t&&(t.type=s),this._open(t,e,n)})}),n&&this._open(t,e,n)},_open:function(t,r,i){function f(e){a.of=e;if(s.is(":hidden"))return;s.position(a)}var s,o,u,a=e.extend({},this.options.position);if(!i)return;s=this._find(r);if(s.length){s.find(".ui-tooltip-content").html(i);return}r.is("[title]")&&(t&&t.type==="mouseover"?r.attr("title",""):r.removeAttr("title")),s=this._tooltip(r),n(r,s.attr("id")),s.find(".ui-tooltip-content").html(i),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:f}),f(t)):s.position(e.extend({of:r},this.options.position)),s.hide(),this._show(s,this.options.show),this.options.show&&this.options.show.delay&&(u=this.delayedShow=setInterval(function(){s.is(":visible")&&(f(a.of),clearInterval(u))},e.fx.interval)),this._trigger("open",t,{tooltip:s}),o={keyup:function(t){if(t.keyCode===e.ui.keyCode.ESCAPE){var n=e.Event(t);n.currentTarget=r[0],this.close(n,!0)}},remove:function(){this._removeTooltip(s)}};if(!t||t.type==="mouseover")o.mouseleave="close";if(!t||t.type==="focusin")o.focusout="close";this._on(!0,r,o)},close:function(t){var n=this,i=e(t?t.currentTarget:this.element),s=this._find(i);if(this.closing)return;clearInterval(this.delayedShow),i.data("ui-tooltip-title")&&i.attr("title",i.data("ui-tooltip-title")),r(i),s.stop(!0),this._hide(s,this.options.hide,function(){n._removeTooltip(e(this))}),i.removeData("ui-tooltip-open"),this._off(i,"mouseleave focusout keyup"),i[0]!==this.element[0]&&this._off(i,"remove"),this._off(this.document,"mousemove"),t&&t.type==="mouseleave"&&e.each(this.parents,function(t,r){e(r.element).attr("title",r.title),delete n.parents[t]}),this.closing=!0,this._trigger("close",t,{tooltip:s}),this.closing=!1},_tooltip:function(n){var r="ui-tooltip-"+t++,i=e("<div>").attr({id:r,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return e("<div>").addClass("ui-tooltip-content").appendTo(i),i.appendTo(this.document[0].body),this.tooltips[r]=n,i},_find:function(t){var n=t.data("ui-tooltip-id");return n?e("#"+n):e()},_removeTooltip:function(e){e.remove(),delete this.tooltips[e.attr("id")]},_destroy:function(){var t=this;e.each(this.tooltips,function(n,r){var i=e.Event("blur");i.target=i.currentTarget=r[0],t.close(i,!0),e("#"+n).remove(),r.data("ui-tooltip-title")&&(r.attr("title",r.data("ui-tooltip-title")),r.removeData("ui-tooltip-title"))})}})})(jQuery);jQuery.effects||function(e,t){var n="ui-effects-";e.effects={effect:{}},function(e,t){function h(e,t,n){var r=u[t.type]||{};return e==null?n||!t.def?null:t.def:(e=r.floor?~~e:parseFloat(e),isNaN(e)?t.def:r.mod?(e+r.mod)%r.mod:0>e?0:r.max<e?r.max:e)}function p(t){var n=s(),r=n._rgba=[];return t=t.toLowerCase(),c(i,function(e,i){var s,u=i.re.exec(t),a=u&&i.parse(u),f=i.space||"rgba";if(a)return s=n[f](a),n[o[f].cache]=s[o[f].cache],r=n._rgba=s._rgba,!1}),r.length?(r.join()==="0,0,0,0"&&e.extend(r,l.transparent),n):l[t]}function d(e,t,n){return n=(n+1)%1,n*6<1?e+(t-e)*n*6:n*2<1?t:n*3<2?e+(t-e)*(2/3-n)*6:e}var n="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,i=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1]*2.55,e[2]*2.55,e[3]*2.55,e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],s=e.Color=function(t,n,r,i){return new e.Color.fn.parse(t,n,r,i)},o={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},a=s.support={},f=e("<p>")[0],l,c=e.each;f.style.cssText="background-color:rgba(1,1,1,.5)",a.rgba=f.style.backgroundColor.indexOf("rgba")>-1,c(o,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),s.fn=e.extend(s.prototype,{parse:function(n,r,i,u){if(n===t)return this._rgba=[null,null,null,null],this;if(n.jquery||n.nodeType)n=e(n).css(r),r=t;var a=this,f=e.type(n),d=this._rgba=[];r!==t&&(n=[n,r,i,u],f="array");if(f==="string")return this.parse(p(n)||l._default);if(f==="array")return c(o.rgba.props,function(e,t){d[t.idx]=h(n[t.idx],t)}),this;if(f==="object")return n instanceof s?c(o,function(e,t){n[t.cache]&&(a[t.cache]=n[t.cache].slice())}):c(o,function(t,r){var i=r.cache;c(r.props,function(e,t){if(!a[i]&&r.to){if(e==="alpha"||n[e]==null)return;a[i]=r.to(a._rgba)}a[i][t.idx]=h(n[e],t,!0)}),a[i]&&e.inArray(null,a[i].slice(0,3))<0&&(a[i][3]=1,r.from&&(a._rgba=r.from(a[i])))}),this},is:function(e){var t=s(e),n=!0,r=this;return c(o,function(e,i){var s,o=t[i.cache];return o&&(s=r[i.cache]||i.to&&i.to(r._rgba)||[],c(i.props,function(e,t){if(o[t.idx]!=null)return n=o[t.idx]===s[t.idx],n})),n}),n},_space:function(){var e=[],t=this;return c(o,function(n,r){t[r.cache]&&e.push(n)}),e.pop()},transition:function(e,t){var n=s(e),r=n._space(),i=o[r],a=this.alpha()===0?s("transparent"):this,f=a[i.cache]||i.to(a._rgba),l=f.slice();return n=n[i.cache],c(i.props,function(e,r){var i=r.idx,s=f[i],o=n[i],a=u[r.type]||{};if(o===null)return;s===null?l[i]=o:(a.mod&&(o-s>a.mod/2?s+=a.mod:s-o>a.mod/2&&(s-=a.mod)),l[i]=h((o-s)*t+s,r))}),this[r](l)},blend:function(t){if(this._rgba[3]===1)return this;var n=this._rgba.slice(),r=n.pop(),i=s(t)._rgba;return s(e.map(n,function(e,t){return(1-r)*i[t]+r*e}))},toRgbaString:function(){var t="rgba(",n=e.map(this._rgba,function(e,t){return e==null?t>2?1:0:e});return n[3]===1&&(n.pop(),t="rgb("),t+n.join()+")"},toHslaString:function(){var t="hsla(",n=e.map(this.hsla(),function(e,t){return e==null&&(e=t>2?1:0),t&&t<3&&(e=Math.round(e*100)+"%"),e});return n[3]===1&&(n.pop(),t="hsl("),t+n.join()+")"},toHexString:function(t){var n=this._rgba.slice(),r=n.pop();return t&&n.push(~~(r*255)),"#"+e.map(n,function(e){return e=(e||0).toString(16),e.length===1?"0"+e:e}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}}),s.fn.parse.prototype=s.fn,o.hsla.to=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/255,n=e[1]/255,r=e[2]/255,i=e[3],s=Math.max(t,n,r),o=Math.min(t,n,r),u=s-o,a=s+o,f=a*.5,l,c;return o===s?l=0:t===s?l=60*(n-r)/u+360:n===s?l=60*(r-t)/u+120:l=60*(t-n)/u+240,u===0?c=0:f<=.5?c=u/a:c=u/(2-a),[Math.round(l)%360,c,f,i==null?1:i]},o.hsla.from=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/360,n=e[1],r=e[2],i=e[3],s=r<=.5?r*(1+n):r+n-r*n,o=2*r-s;return[Math.round(d(o,s,t+1/3)*255),Math.round(d(o,s,t)*255),Math.round(d(o,s,t-1/3)*255),i]},c(o,function(n,i){var o=i.props,u=i.cache,a=i.to,f=i.from;s.fn[n]=function(n){a&&!this[u]&&(this[u]=a(this._rgba));if(n===t)return this[u].slice();var r,i=e.type(n),l=i==="array"||i==="object"?n:arguments,p=this[u].slice();return c(o,function(e,t){var n=l[i==="object"?e:t.idx];n==null&&(n=p[t.idx]),p[t.idx]=h(n,t)}),f?(r=s(f(p)),r[u]=p,r):s(p)},c(o,function(t,i){if(s.fn[t])return;s.fn[t]=function(s){var o=e.type(s),u=t==="alpha"?this._hsla?"hsla":"rgba":n,a=this[u](),f=a[i.idx],l;return o==="undefined"?f:(o==="function"&&(s=s.call(this,f),o=e.type(s)),s==null&&i.empty?this:(o==="string"&&(l=r.exec(s),l&&(s=f+parseFloat(l[2])*(l[1]==="+"?1:-1))),a[i.idx]=s,this[u](a)))}})}),s.hook=function(t){var n=t.split(" ");c(n,function(t,n){e.cssHooks[n]={set:function(t,r){var i,o,u="";if(r!=="transparent"&&(e.type(r)!=="string"||(i=p(r)))){r=s(i||r);if(!a.rgba&&r._rgba[3]!==1){o=n==="backgroundColor"?t.parentNode:t;while((u===""||u==="transparent")&&o&&o.style)try{u=e.css(o,"backgroundColor"),o=o.parentNode}catch(f){}r=r.blend(u&&u!=="transparent"?u:"_default")}r=r.toRgbaString()}try{t.style[n]=r}catch(f){}}},e.fx.step[n]=function(t){t.colorInit||(t.start=s(t.elem,n),t.end=s(t.end),t.colorInit=!0),e.cssHooks[n].set(t.elem,t.start.transition(t.end,t.pos))}})},s.hook(n),e.cssHooks.borderColor={expand:function(e){var t={};return c(["Top","Right","Bottom","Left"],function(n,r){t["border"+r+"Color"]=e}),t}},l=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(t){var n,r,i=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,s={};if(i&&i.length&&i[0]&&i[i[0]]){r=i.length;while(r--)n=i[r],typeof i[n]=="string"&&(s[e.camelCase(n)]=i[n])}else for(n in i)typeof i[n]=="string"&&(s[n]=i[n]);return s}function s(t,n){var i={},s,o;for(s in n)o=n[s],t[s]!==o&&!r[s]&&(e.fx.step[s]||!isNaN(parseFloat(o)))&&(i[s]=o);return i}var n=["add","remove","toggle"],r={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,n){e.fx.step[n]=function(e){if(e.end!=="none"&&!e.setAttr||e.pos===1&&!e.setAttr)jQuery.style(e.elem,n,e.end),e.setAttr=!0}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(t,r,o,u){var a=e.speed(r,o,u);return this.queue(function(){var r=e(this),o=r.attr("class")||"",u,f=a.children?r.find("*").addBack():r;f=f.map(function(){var t=e(this);return{el:t,start:i(this)}}),u=function(){e.each(n,function(e,n){t[n]&&r[n+"Class"](t[n])})},u(),f=f.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),r.attr("class",o),f=f.map(function(){var t=this,n=e.Deferred(),r=e.extend({},a,{queue:!1,complete:function(){n.resolve(t)}});return this.el.animate(this.diff,r),n.promise()}),e.when.apply(e,f.get()).done(function(){u(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),a.complete.call(r[0])})})},e.fn.extend({_addClass:e.fn.addClass,addClass:function(t,n,r,i){return n?e.effects.animateClass.call(this,{add:t},n,r,i):this._addClass(t)},_removeClass:e.fn.removeClass,removeClass:function(t,n,r,i){return n?e.effects.animateClass.call(this,{remove:t},n,r,i):this._removeClass(t)},_toggleClass:e.fn.toggleClass,toggleClass:function(n,r,i,s,o){return typeof r=="boolean"||r===t?i?e.effects.animateClass.call(this,r?{add:n}:{remove:n},i,s,o):this._toggleClass(n,r):e.effects.animateClass.call(this,{toggle:n},r,i,s)},switchClass:function(t,n,r,i,s){return e.effects.animateClass.call(this,{add:n,remove:t},r,i,s)}})}(),function(){function r(t,n,r,i){e.isPlainObject(t)&&(n=t,t=t.effect),t={effect:t},n==null&&(n={}),e.isFunction(n)&&(i=n,r=null,n={});if(typeof n=="number"||e.fx.speeds[n])i=r,r=n,n={};return e.isFunction(r)&&(i=r,r=null),n&&e.extend(t,n),r=r||n.duration,t.duration=e.fx.off?0:typeof r=="number"?r:r in e.fx.speeds?e.fx.speeds[r]:e.fx.speeds._default,t.complete=i||n.complete,t}function i(t){return!t||typeof t=="number"||e.fx.speeds[t]?!0:typeof t=="string"&&!e.effects.effect[t]}e.extend(e.effects,{version:"1.10.0",save:function(e,t){for(var r=0;r<t.length;r++)t[r]!==null&&e.data(n+t[r],e[0].style[t[r]])},restore:function(e,r){var i,s;for(s=0;s<r.length;s++)r[s]!==null&&(i=e.data(n+r[s]),i===t&&(i=""),e.css(r[s],i))},setMode:function(e,t){return t==="toggle"&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var n,r;switch(e[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=e[0]/t.height}switch(e[1]){case"left":r=0;break;case"center":r=.5;break;case"right":r=1;break;default:r=e[1]/t.width}return{x:r,y:n}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var n={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},r=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),i={width:t.width(),height:t.height()},s=document.activeElement;try{s.id}catch(o){s=document.body}return t.wrap(r),(t[0]===s||e.contains(t[0],s))&&e(s).focus(),r=t.parent(),t.css("position")==="static"?(r.css({position:"relative"}),t.css({position:"relative"})):(e.extend(n,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,r){n[r]=t.css(r),isNaN(parseInt(n[r],10))&&(n[r]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(i),r.css(n).show()},removeWrapper:function(t){var n=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===n||e.contains(t[0],n))&&e(n).focus()),t},setTransition:function(t,n,r,i){return i=i||{},e.each(n,function(e,n){var s=t.cssUnit(n);s[0]>0&&(i[n]=s[0]*r+s[1])}),i}}),e.fn.extend({effect:function(){function o(n){function u(){e.isFunction(i)&&i.call(r[0]),e.isFunction(n)&&n()}var r=e(this),i=t.complete,o=t.mode;(r.is(":hidden")?o==="hide":o==="show")?u():s.call(r[0],t,u)}var t=r.apply(this,arguments),n=t.mode,i=t.queue,s=e.effects.effect[t.effect];return e.fx.off||!s?n?this[n](t.duration,t.complete):this.each(function(){t.complete&&t.complete.call(this)}):i===!1?this.each(o):this.queue(i||"fx",o)},_show:e.fn.show,show:function(e){if(i(e))return this._show.apply(this,arguments);var t=r.apply(this,arguments);return t.mode="show",this.effect.call(this,t)},_hide:e.fn.hide,hide:function(e){if(i(e))return this._hide.apply(this,arguments);var t=r.apply(this,arguments);return t.mode="hide",this.effect.call(this,t)},__toggle:e.fn.toggle,toggle:function(t){if(i(t)||typeof t=="boolean"||e.isFunction(t))return this.__toggle.apply(this,arguments);var n=r.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)},cssUnit:function(t){var n=this.css(t),r=[];return e.each(["em","px","%","pt"],function(e,t){n.indexOf(t)>0&&(r=[parseFloat(n),t])}),r}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,n){t[n]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return e===0||e===1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){var t,n=4;while(e<((t=Math.pow(2,--n))-1)/11);return 1/Math.pow(4,3-n)-7.5625*Math.pow((t*3-2)/22-e,2)}}),e.each(t,function(t,n){e.easing["easeIn"+t]=n,e.easing["easeOut"+t]=function(e){return 1-n(1-e)},e.easing["easeInOut"+t]=function(e){return e<.5?n(e*2)/2:1-n(e*-2+2)/2}})}()}(jQuery);(function(e,t){var n=/up|down|vertical/,r=/up|left|vertical|horizontal/;e.effects.effect.blind=function(t,i){var s=e(this),o=["position","top","bottom","left","right","height","width"],u=e.effects.setMode(s,t.mode||"hide"),a=t.direction||"up",f=n.test(a),l=f?"height":"width",c=f?"top":"left",h=r.test(a),p={},d=u==="show",v,m,g;s.parent().is(".ui-effects-wrapper")?e.effects.save(s.parent(),o):e.effects.save(s,o),s.show(),v=e.effects.createWrapper(s).css({overflow:"hidden"}),m=v[l](),g=parseFloat(v.css(c))||0,p[l]=d?m:0,h||(s.css(f?"bottom":"right",0).css(f?"top":"left","auto").css({position:"absolute"}),p[c]=d?g:m+g),d&&(v.css(l,0),h||v.css(c,g+m)),v.animate(p,{duration:t.duration,easing:t.easing,queue:!1,complete:function(){u==="hide"&&s.hide(),e.effects.restore(s,o),e.effects.removeWrapper(s),i()}})}})(jQuery);(function(e,t){e.effects.effect.bounce=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"effect"),o=s==="hide",u=s==="show",a=t.direction||"up",f=t.distance,l=t.times||5,c=l*2+(u||o?1:0),h=t.duration/c,p=t.easing,d=a==="up"||a==="down"?"top":"left",v=a==="up"||a==="left",m,g,y,b=r.queue(),w=b.length;(u||o)&&i.push("opacity"),e.effects.save(r,i),r.show(),e.effects.createWrapper(r),f||(f=r[d==="top"?"outerHeight":"outerWidth"]()/3),u&&(y={opacity:1},y[d]=0,r.css("opacity",0).css(d,v?-f*2:f*2).animate(y,h,p)),o&&(f/=Math.pow(2,l-1)),y={},y[d]=0;for(m=0;m<l;m++)g={},g[d]=(v?"-=":"+=")+f,r.animate(g,h,p).animate(y,h,p),f=o?f*2:f/2;o&&(g={opacity:0},g[d]=(v?"-=":"+=")+f,r.animate(g,h,p)),r.queue(function(){o&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}),w>1&&b.splice.apply(b,[1,0].concat(b.splice(w,c+1))),r.dequeue()}})(jQuery);(function(e,t){e.effects.effect.clip=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"hide"),o=s==="show",u=t.direction||"vertical",a=u==="vertical",f=a?"height":"width",l=a?"top":"left",c={},h,p,d;e.effects.save(r,i),r.show(),h=e.effects.createWrapper(r).css({overflow:"hidden"}),p=r[0].tagName==="IMG"?h:r,d=p[f](),o&&(p.css(f,0),p.css(l,d/2)),c[f]=o?d:0,c[l]=o?0:d/2,p.animate(c,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){o||r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})}})(jQuery);(function(e,t){e.effects.effect.drop=function(t,n){var r=e(this),i=["position","top","bottom","left","right","opacity","height","width"],s=e.effects.setMode(r,t.mode||"hide"),o=s==="show",u=t.direction||"left",a=u==="up"||u==="down"?"top":"left",f=u==="up"||u==="left"?"pos":"neg",l={opacity:o?1:0},c;e.effects.save(r,i),r.show(),e.effects.createWrapper(r),c=t.distance||r[a==="top"?"outerHeight":"outerWidth"](!0)/2,o&&r.css("opacity",0).css(a,f==="pos"?-c:c),l[a]=(o?f==="pos"?"+=":"-=":f==="pos"?"-=":"+=")+c,r.animate(l,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){s==="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})}})(jQuery);(function(e,t){e.effects.effect.explode=function(t,n){function y(){c.push(this),c.length===r*i&&b()}function b(){s.css({visibility:"visible"}),e(c).remove(),u||s.hide(),n()}var r=t.pieces?Math.round(Math.sqrt(t.pieces)):3,i=r,s=e(this),o=e.effects.setMode(s,t.mode||"hide"),u=o==="show",a=s.show().css("visibility","hidden").offset(),f=Math.ceil(s.outerWidth()/i),l=Math.ceil(s.outerHeight()/r),c=[],h,p,d,v,m,g;for(h=0;h<r;h++){v=a.top+h*l,g=h-(r-1)/2;for(p=0;p<i;p++)d=a.left+p*f,m=p-(i-1)/2,s.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-p*f,top:-h*l}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:f,height:l,left:d+(u?m*f:0),top:v+(u?g*l:0),opacity:u?0:1}).animate({left:d+(u?0:m*f),top:v+(u?0:g*l),opacity:u?1:0},t.duration||500,t.easing,y)}}})(jQuery);(function(e,t){e.effects.effect.fade=function(t,n){var r=e(this),i=e.effects.setMode(r,t.mode||"toggle");r.animate({opacity:i},{queue:!1,duration:t.duration,easing:t.easing,complete:n})}})(jQuery);(function(e,t){e.effects.effect.fold=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"hide"),o=s==="show",u=s==="hide",a=t.size||15,f=/([0-9]+)%/.exec(a),l=!!t.horizFirst,c=o!==l,h=c?["width","height"]:["height","width"],p=t.duration/2,d,v,m={},g={};e.effects.save(r,i),r.show(),d=e.effects.createWrapper(r).css({overflow:"hidden"}),v=c?[d.width(),d.height()]:[d.height(),d.width()],f&&(a=parseInt(f[1],10)/100*v[u?0:1]),o&&d.css(l?{height:0,width:a}:{height:a,width:0}),m[h[0]]=o?v[0]:a,g[h[1]]=o?v[1]:0,d.animate(m,p,t.easing).animate(g,p,t.easing,function(){u&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()})}})(jQuery);(function(e,t){e.effects.effect.highlight=function(t,n){var r=e(this),i=["backgroundImage","backgroundColor","opacity"],s=e.effects.setMode(r,t.mode||"show"),o={backgroundColor:r.css("backgroundColor")};s==="hide"&&(o.opacity=0),e.effects.save(r,i),r.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){s==="hide"&&r.hide(),e.effects.restore(r,i),n()}})}})(jQuery);(function(e,t){e.effects.effect.pulsate=function(t,n){var r=e(this),i=e.effects.setMode(r,t.mode||"show"),s=i==="show",o=i==="hide",u=s||i==="hide",a=(t.times||5)*2+(u?1:0),f=t.duration/a,l=0,c=r.queue(),h=c.length,p;if(s||!r.is(":visible"))r.css("opacity",0).show(),l=1;for(p=1;p<a;p++)r.animate({opacity:l},f,t.easing),l=1-l;r.animate({opacity:l},f,t.easing),r.queue(function(){o&&r.hide(),n()}),h>1&&c.splice.apply(c,[1,0].concat(c.splice(h,a+1))),r.dequeue()}})(jQuery);(function(e,t){e.effects.effect.puff=function(t,n){var r=e(this),i=e.effects.setMode(r,t.mode||"hide"),s=i==="hide",o=parseInt(t.percent,10)||150,u=o/100,a={height:r.height(),width:r.width(),outerHeight:r.outerHeight(),outerWidth:r.outerWidth()};e.extend(t,{effect:"scale",queue:!1,fade:!0,mode:i,complete:n,percent:s?o:100,from:s?a:{height:a.height*u,width:a.width*u,outerHeight:a.outerHeight*u,outerWidth:a.outerWidth*u}}),r.effect(t)},e.effects.effect.scale=function(t,n){var r=e(this),i=e.extend(!0,{},t),s=e.effects.setMode(r,t.mode||"effect"),o=parseInt(t.percent,10)||(parseInt(t.percent,10)===0?0:s==="hide"?0:100),u=t.direction||"both",a=t.origin,f={height:r.height(),width:r.width(),outerHeight:r.outerHeight(),outerWidth:r.outerWidth()},l={y:u!=="horizontal"?o/100:1,x:u!=="vertical"?o/100:1};i.effect="size",i.queue=!1,i.complete=n,s!=="effect"&&(i.origin=a||["middle","center"],i.restore=!0),i.from=t.from||(s==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:f),i.to={height:f.height*l.y,width:f.width*l.x,outerHeight:f.outerHeight*l.y,outerWidth:f.outerWidth*l.x},i.fade&&(s==="show"&&(i.from.opacity=0,i.to.opacity=1),s==="hide"&&(i.from.opacity=1,i.to.opacity=0)),r.effect(i)},e.effects.effect.size=function(t,n){var r,i,s,o=e(this),u=["position","top","bottom","left","right","width","height","overflow","opacity"],a=["position","top","bottom","left","right","overflow","opacity"],f=["width","height","overflow"],l=["fontSize"],c=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],h=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=e.effects.setMode(o,t.mode||"effect"),d=t.restore||p!=="effect",v=t.scale||"both",m=t.origin||["middle","center"],g=o.css("position"),y=d?u:a,b={height:0,width:0,outerHeight:0,outerWidth:0};p==="show"&&o.show(),r={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},t.mode==="toggle"&&p==="show"?(o.from=t.to||b,o.to=t.from||r):(o.from=t.from||(p==="show"?b:r),o.to=t.to||(p==="hide"?b:r)),s={from:{y:o.from.height/r.height,x:o.from.width/r.width},to:{y:o.to.height/r.height,x:o.to.width/r.width}};if(v==="box"||v==="both")s.from.y!==s.to.y&&(y=y.concat(c),o.from=e.effects.setTransition(o,c,s.from.y,o.from),o.to=e.effects.setTransition(o,c,s.to.y,o.to)),s.from.x!==s.to.x&&(y=y.concat(h),o.from=e.effects.setTransition(o,h,s.from.x,o.from),o.to=e.effects.setTransition(o,h,s.to.x,o.to));(v==="content"||v==="both")&&s.from.y!==s.to.y&&(y=y.concat(l).concat(f),o.from=e.effects.setTransition(o,l,s.from.y,o.from),o.to=e.effects.setTransition(o,l,s.to.y,o.to)),e.effects.save(o,y),o.show(),e.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),m&&(i=e.effects.getBaseline(m,r),o.from.top=(r.outerHeight-o.outerHeight())*i.y,o.from.left=(r.outerWidth-o.outerWidth())*i.x,o.to.top=(r.outerHeight-o.to.outerHeight)*i.y,o.to.left=(r.outerWidth-o.to.outerWidth)*i.x),o.css(o.from);if(v==="content"||v==="both")c=c.concat(["marginTop","marginBottom"]).concat(l),h=h.concat(["marginLeft","marginRight"]),f=u.concat(c).concat(h),o.find("*[width]").each(function(){var n=e(this),r={height:n.height(),width:n.width(),outerHeight:n.outerHeight(),outerWidth:n.outerWidth()};d&&e.effects.save(n,f),n.from={height:r.height*s.from.y,width:r.width*s.from.x,outerHeight:r.outerHeight*s.from.y,outerWidth:r.outerWidth*s.from.x},n.to={height:r.height*s.to.y,width:r.width*s.to.x,outerHeight:r.height*s.to.y,outerWidth:r.width*s.to.x},s.from.y!==s.to.y&&(n.from=e.effects.setTransition(n,c,s.from.y,n.from),n.to=e.effects.setTransition(n,c,s.to.y,n.to)),s.from.x!==s.to.x&&(n.from=e.effects.setTransition(n,h,s.from.x,n.from),n.to=e.effects.setTransition(n,h,s.to.x,n.to)),n.css(n.from),n.animate(n.to,t.duration,t.easing,function(){d&&e.effects.restore(n,f)})});o.animate(o.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){o.to.opacity===0&&o.css("opacity",o.from.opacity),p==="hide"&&o.hide(),e.effects.restore(o,y),d||(g==="static"?o.css({position:"relative",top:o.to.top,left:o.to.left}):e.each(["top","left"],function(e,t){o.css(t,function(t,n){var r=parseInt(n,10),i=e?o.to.left:o.to.top;return n==="auto"?i+"px":r+i+"px"})})),e.effects.removeWrapper(o),n()}})}})(jQuery);(function(e,t){e.effects.effect.shake=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"effect"),o=t.direction||"left",u=t.distance||20,a=t.times||3,f=a*2+1,l=Math.round(t.duration/f),c=o==="up"||o==="down"?"top":"left",h=o==="up"||o==="left",p={},d={},v={},m,g=r.queue(),y=g.length;e.effects.save(r,i),r.show(),e.effects.createWrapper(r),p[c]=(h?"-=":"+=")+u,d[c]=(h?"+=":"-=")+u*2,v[c]=(h?"-=":"+=")+u*2,r.animate(p,l,t.easing);for(m=1;m<a;m++)r.animate(d,l,t.easing).animate(v,l,t.easing);r.animate(d,l,t.easing).animate(p,l/2,t.easing).queue(function(){s==="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}),y>1&&g.splice.apply(g,[1,0].concat(g.splice(y,f+1))),r.dequeue()}})(jQuery);(function(e,t){e.effects.effect.slide=function(t,n){var r=e(this),i=["position","top","bottom","left","right","width","height"],s=e.effects.setMode(r,t.mode||"show"),o=s==="show",u=t.direction||"left",a=u==="up"||u==="down"?"top":"left",f=u==="up"||u==="left",l,c={};e.effects.save(r,i),r.show(),l=t.distance||r[a==="top"?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(r).css({overflow:"hidden"}),o&&r.css(a,f?isNaN(l)?"-"+l:-l:l),c[a]=(o?f?"+=":"-=":f?"-=":"+=")+l,r.animate(c,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){s==="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})}})(jQuery);(function(e,t){e.effects.effect.transfer=function(t,n){var r=e(this),i=e(t.to),s=i.css("position")==="fixed",o=e("body"),u=s?o.scrollTop():0,a=s?o.scrollLeft():0,f=i.offset(),l={top:f.top-u,left:f.left-a,height:i.innerHeight(),width:i.innerWidth()},c=r.offset(),h=e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({top:c.top-u,left:c.left-a,height:r.innerHeight(),width:r.innerWidth(),position:s?"fixed":"absolute"}).animate(l,t.duration,t.easing,function(){h.remove(),n()})}})(jQuery);
/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));
/*! jQuery Validation Plugin - v1.11.1 - 3/22/2013\n* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2013 Jörn Zaefferer; Licensed MIT */(function(t){t.extend(t.fn,{validate:function(e){if(!this.length)return e&&e.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."),void 0;var i=t.data(this[0],"validator");return i?i:(this.attr("novalidate","novalidate"),i=new t.validator(e,this[0]),t.data(this[0],"validator",i),i.settings.onsubmit&&(this.validateDelegate(":submit","click",function(e){i.settings.submitHandler&&(i.submitButton=e.target),t(e.target).hasClass("cancel")&&(i.cancelSubmit=!0),void 0!==t(e.target).attr("formnovalidate")&&(i.cancelSubmit=!0)}),this.submit(function(e){function s(){var s;return i.settings.submitHandler?(i.submitButton&&(s=t("<input type='hidden'/>").attr("name",i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),i.settings.submitHandler.call(i,i.currentForm,e),i.submitButton&&s.remove(),!1):!0}return i.settings.debug&&e.preventDefault(),i.cancelSubmit?(i.cancelSubmit=!1,s()):i.form()?i.pendingRequest?(i.formSubmitted=!0,!1):s():(i.focusInvalid(),!1)})),i)},valid:function(){if(t(this[0]).is("form"))return this.validate().form();var e=!0,i=t(this[0].form).validate();return this.each(function(){e=e&&i.element(this)}),e},removeAttrs:function(e){var i={},s=this;return t.each(e.split(/\s/),function(t,e){i[e]=s.attr(e),s.removeAttr(e)}),i},rules:function(e,i){var s=this[0];if(e){var r=t.data(s.form,"validator").settings,n=r.rules,a=t.validator.staticRules(s);switch(e){case"add":t.extend(a,t.validator.normalizeRule(i)),delete a.messages,n[s.name]=a,i.messages&&(r.messages[s.name]=t.extend(r.messages[s.name],i.messages));break;case"remove":if(!i)return delete n[s.name],a;var u={};return t.each(i.split(/\s/),function(t,e){u[e]=a[e],delete a[e]}),u}}var o=t.validator.normalizeRules(t.extend({},t.validator.classRules(s),t.validator.attributeRules(s),t.validator.dataRules(s),t.validator.staticRules(s)),s);if(o.required){var l=o.required;delete o.required,o=t.extend({required:l},o)}return o}}),t.extend(t.expr[":"],{blank:function(e){return!t.trim(""+t(e).val())},filled:function(e){return!!t.trim(""+t(e).val())},unchecked:function(e){return!t(e).prop("checked")}}),t.validator=function(e,i){this.settings=t.extend(!0,{},t.validator.defaults,e),this.currentForm=i,this.init()},t.validator.format=function(e,i){return 1===arguments.length?function(){var i=t.makeArray(arguments);return i.unshift(e),t.validator.format.apply(this,i)}:(arguments.length>2&&i.constructor!==Array&&(i=t.makeArray(arguments).slice(1)),i.constructor!==Array&&(i=[i]),t.each(i,function(t,i){e=e.replace(RegExp("\\{"+t+"\\}","g"),function(){return i})}),e)},t.extend(t.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:t([]),errorLabelContainer:t([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(t){this.lastActive=t,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,t,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(t)).hide())},onfocusout:function(t){this.checkable(t)||!(t.name in this.submitted)&&this.optional(t)||this.element(t)},onkeyup:function(t,e){(9!==e.which||""!==this.elementValue(t))&&(t.name in this.submitted||t===this.lastElement)&&this.element(t)},onclick:function(t){t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode)},highlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).addClass(i).removeClass(s):t(e).addClass(i).removeClass(s)},unhighlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).removeClass(i).addClass(s):t(e).removeClass(i).addClass(s)}},setDefaults:function(e){t.extend(t.validator.defaults,e)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:t.validator.format("Please enter no more than {0} characters."),minlength:t.validator.format("Please enter at least {0} characters."),rangelength:t.validator.format("Please enter a value between {0} and {1} characters long."),range:t.validator.format("Please enter a value between {0} and {1}."),max:t.validator.format("Please enter a value less than or equal to {0}."),min:t.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function e(e){var i=t.data(this[0].form,"validator"),s="on"+e.type.replace(/^validate/,"");i.settings[s]&&i.settings[s].call(i,this[0],e)}this.labelContainer=t(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||t(this.currentForm),this.containers=t(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var i=this.groups={};t.each(this.settings.groups,function(e,s){"string"==typeof s&&(s=s.split(/\s/)),t.each(s,function(t,s){i[s]=e})});var s=this.settings.rules;t.each(s,function(e,i){s[e]=t.validator.normalizeRule(i)}),t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",e).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",e),this.settings.invalidHandler&&t(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),t.extend(this.submitted,this.errorMap),this.invalid=t.extend({},this.errorMap),this.valid()||t(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var t=0,e=this.currentElements=this.elements();e[t];t++)this.check(e[t]);return this.valid()},element:function(e){e=this.validationTargetFor(this.clean(e)),this.lastElement=e,this.prepareElement(e),this.currentElements=t(e);var i=this.check(e)!==!1;return i?delete this.invalid[e.name]:this.invalid[e.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),i},showErrors:function(e){if(e){t.extend(this.errorMap,e),this.errorList=[];for(var i in e)this.errorList.push({message:e[i],element:this.findByName(i)[0]});this.successList=t.grep(this.successList,function(t){return!(t.name in e)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){t.fn.resetForm&&t(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(t){var e=0;for(var i in t)e++;return e},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{t(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(e){}},findLastActive:function(){var e=this.lastActive;return e&&1===t.grep(this.errorList,function(t){return t.element.name===e.name}).length&&e},elements:function(){var e=this,i={};return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&e.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in i||!e.objectLength(t(this).rules())?!1:(i[this.name]=!0,!0)})},clean:function(e){return t(e)[0]},errors:function(){var e=this.settings.errorClass.replace(" ",".");return t(this.settings.errorElement+"."+e,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=t([]),this.toHide=t([]),this.currentElements=t([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(t){this.reset(),this.toHide=this.errorsFor(t)},elementValue:function(e){var i=t(e).attr("type"),s=t(e).val();return"radio"===i||"checkbox"===i?t("input[name='"+t(e).attr("name")+"']:checked").val():"string"==typeof s?s.replace(/\r/g,""):s},check:function(e){e=this.validationTargetFor(this.clean(e));var i,s=t(e).rules(),r=!1,n=this.elementValue(e);for(var a in s){var u={method:a,parameters:s[a]};try{if(i=t.validator.methods[a].call(this,n,e,u.parameters),"dependency-mismatch"===i){r=!0;continue}if(r=!1,"pending"===i)return this.toHide=this.toHide.not(this.errorsFor(e)),void 0;if(!i)return this.formatAndAdd(e,u),!1}catch(o){throw this.settings.debug&&window.console&&Constants.dLog("Exception occurred when checking element "+e.id+", check the '"+u.method+"' method.",o),o}}return r?void 0:(this.objectLength(s)&&this.successList.push(e),!0)},customDataMessage:function(e,i){return t(e).data("msg-"+i.toLowerCase())||e.attributes&&t(e).attr("data-msg-"+i.toLowerCase())},customMessage:function(t,e){var i=this.settings.messages[t];return i&&(i.constructor===String?i:i[e])},findDefined:function(){for(var t=0;arguments.length>t;t++)if(void 0!==arguments[t])return arguments[t];return void 0},defaultMessage:function(e,i){return this.findDefined(this.customMessage(e.name,i),this.customDataMessage(e,i),!this.settings.ignoreTitle&&e.title||void 0,t.validator.messages[i],"<strong>Warning: No message defined for "+e.name+"</strong>")},formatAndAdd:function(e,i){var s=this.defaultMessage(e,i.method),r=/\$?\{(\d+)\}/g;"function"==typeof s?s=s.call(this,i.parameters,e):r.test(s)&&(s=t.validator.format(s.replace(r,"{$1}"),i.parameters)),this.errorList.push({message:s,element:e}),this.errorMap[e.name]=s,this.submitted[e.name]=s},addWrapper:function(t){return this.settings.wrapper&&(t=t.add(t.parent(this.settings.wrapper))),t},defaultShowErrors:function(){var t,e;for(t=0;this.errorList[t];t++){var i=this.errorList[t];this.settings.highlight&&this.settings.highlight.call(this,i.element,this.settings.errorClass,this.settings.validClass),this.showLabel(i.element,i.message)}if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(t=0;this.successList[t];t++)this.showLabel(this.successList[t]);if(this.settings.unhighlight)for(t=0,e=this.validElements();e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return t(this.errorList).map(function(){return this.element})},showLabel:function(e,i){var s=this.errorsFor(e);s.length?(s.removeClass(this.settings.validClass).addClass(this.settings.errorClass),s.html(i)):(s=t("<"+this.settings.errorElement+">").attr("for",this.idOrName(e)).addClass(this.settings.errorClass).html(i||""),this.settings.wrapper&&(s=s.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(s).length||(this.settings.errorPlacement?this.settings.errorPlacement(s,t(e)):s.insertAfter(e))),!i&&this.settings.success&&(s.text(""),"string"==typeof this.settings.success?s.addClass(this.settings.success):this.settings.success(s,e)),this.toShow=this.toShow.add(s)},errorsFor:function(e){var i=this.idOrName(e);return this.errors().filter(function(){return t(this).attr("for")===i})},idOrName:function(t){return this.groups[t.name]||(this.checkable(t)?t.name:t.id||t.name)},validationTargetFor:function(t){return this.checkable(t)&&(t=this.findByName(t.name).not(this.settings.ignore)[0]),t},checkable:function(t){return/radio|checkbox/i.test(t.type)},findByName:function(e){return t(this.currentForm).find("[name='"+e+"']")},getLength:function(e,i){switch(i.nodeName.toLowerCase()){case"select":return t("option:selected",i).length;case"input":if(this.checkable(i))return this.findByName(i.name).filter(":checked").length}return e.length},depend:function(t,e){return this.dependTypes[typeof t]?this.dependTypes[typeof t](t,e):!0},dependTypes:{"boolean":function(t){return t},string:function(e,i){return!!t(e,i.form).length},"function":function(t,e){return t(e)}},optional:function(e){var i=this.elementValue(e);return!t.validator.methods.required.call(this,i,e)&&"dependency-mismatch"},startRequest:function(t){this.pending[t.name]||(this.pendingRequest++,this.pending[t.name]=!0)},stopRequest:function(e,i){this.pendingRequest--,0>this.pendingRequest&&(this.pendingRequest=0),delete this.pending[e.name],i&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(t(this.currentForm).submit(),this.formSubmitted=!1):!i&&0===this.pendingRequest&&this.formSubmitted&&(t(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(e){return t.data(e,"previousValue")||t.data(e,"previousValue",{old:null,valid:!0,message:this.defaultMessage(e,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(e,i){e.constructor===String?this.classRuleSettings[e]=i:t.extend(this.classRuleSettings,e)},classRules:function(e){var i={},s=t(e).attr("class");return s&&t.each(s.split(" "),function(){this in t.validator.classRuleSettings&&t.extend(i,t.validator.classRuleSettings[this])}),i},attributeRules:function(e){var i={},s=t(e),r=s[0].getAttribute("type");for(var n in t.validator.methods){var a;"required"===n?(a=s.get(0).getAttribute(n),""===a&&(a=!0),a=!!a):a=s.attr(n),/min|max/.test(n)&&(null===r||/number|range|text/.test(r))&&(a=Number(a)),a?i[n]=a:r===n&&"range"!==r&&(i[n]=!0)}return i.maxlength&&/-1|2147483647|524288/.test(i.maxlength)&&delete i.maxlength,i},dataRules:function(e){var i,s,r={},n=t(e);for(i in t.validator.methods)s=n.data("rule-"+i.toLowerCase()),void 0!==s&&(r[i]=s);return r},staticRules:function(e){var i={},s=t.data(e.form,"validator");return s.settings.rules&&(i=t.validator.normalizeRule(s.settings.rules[e.name])||{}),i},normalizeRules:function(e,i){return t.each(e,function(s,r){if(r===!1)return delete e[s],void 0;if(r.param||r.depends){var n=!0;switch(typeof r.depends){case"string":n=!!t(r.depends,i.form).length;break;case"function":n=r.depends.call(i,i)}n?e[s]=void 0!==r.param?r.param:!0:delete e[s]}}),t.each(e,function(s,r){e[s]=t.isFunction(r)?r(i):r}),t.each(["minlength","maxlength"],function(){e[this]&&(e[this]=Number(e[this]))}),t.each(["rangelength","range"],function(){var i;e[this]&&(t.isArray(e[this])?e[this]=[Number(e[this][0]),Number(e[this][1])]:"string"==typeof e[this]&&(i=e[this].split(/[\s,]+/),e[this]=[Number(i[0]),Number(i[1])]))}),t.validator.autoCreateRanges&&(e.min&&e.max&&(e.range=[e.min,e.max],delete e.min,delete e.max),e.minlength&&e.maxlength&&(e.rangelength=[e.minlength,e.maxlength],delete e.minlength,delete e.maxlength)),e},normalizeRule:function(e){if("string"==typeof e){var i={};t.each(e.split(/\s/),function(){i[this]=!0}),e=i}return e},addMethod:function(e,i,s){t.validator.methods[e]=i,t.validator.messages[e]=void 0!==s?s:t.validator.messages[e],3>i.length&&t.validator.addClassRules(e,t.validator.normalizeRule(e))},methods:{required:function(e,i,s){if(!this.depend(s,i))return"dependency-mismatch";if("select"===i.nodeName.toLowerCase()){var r=t(i).val();return r&&r.length>0}return this.checkable(i)?this.getLength(e,i)>0:t.trim(e).length>0},email:function(t,e){return this.optional(e)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)},url:function(t,e){return this.optional(e)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)},date:function(t,e){return this.optional(e)||!/Invalid|NaN/.test(""+new Date(t))},dateISO:function(t,e){return this.optional(e)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)},number:function(t,e){return this.optional(e)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)},digits:function(t,e){return this.optional(e)||/^\d+$/.test(t)},creditcard:function(t,e){if(this.optional(e))return"dependency-mismatch";if(/[^0-9 \-]+/.test(t))return!1;var i=0,s=0,r=!1;t=t.replace(/\D/g,"");for(var n=t.length-1;n>=0;n--){var a=t.charAt(n);s=parseInt(a,10),r&&(s*=2)>9&&(s-=9),i+=s,r=!r}return 0===i%10},minlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s},maxlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||s>=r},rangelength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s[0]&&s[1]>=r},min:function(t,e,i){return this.optional(e)||t>=i},max:function(t,e,i){return this.optional(e)||i>=t},range:function(t,e,i){return this.optional(e)||t>=i[0]&&i[1]>=t},equalTo:function(e,i,s){var r=t(s);return this.settings.onfocusout&&r.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){t(i).valid()}),e===r.val()},remote:function(e,i,s){if(this.optional(i))return"dependency-mismatch";var r=this.previousValue(i);if(this.settings.messages[i.name]||(this.settings.messages[i.name]={}),r.originalMessage=this.settings.messages[i.name].remote,this.settings.messages[i.name].remote=r.message,s="string"==typeof s&&{url:s}||s,r.old===e)return r.valid;r.old=e;var n=this;this.startRequest(i);var a={};return a[i.name]=e,t.ajax(t.extend(!0,{url:s,mode:"abort",port:"validate"+i.name,dataType:"json",data:a,success:function(s){n.settings.messages[i.name].remote=r.originalMessage;var a=s===!0||"true"===s;if(a){var u=n.formSubmitted;n.prepareElement(i),n.formSubmitted=u,n.successList.push(i),delete n.invalid[i.name],n.showErrors()}else{var o={},l=s||n.defaultMessage(i,"remote");o[i.name]=r.message=t.isFunction(l)?l(e):l,n.invalid[i.name]=!0,n.showErrors(o)}r.valid=a,n.stopRequest(i,a)}},s)),"pending"}}}),t.format=t.validator.format})(jQuery),function(t){var e={};if(t.ajaxPrefilter)t.ajaxPrefilter(function(t,i,s){var r=t.port;"abort"===t.mode&&(e[r]&&e[r].abort(),e[r]=s)});else{var i=t.ajax;t.ajax=function(s){var r=("mode"in s?s:t.ajaxSettings).mode,n=("port"in s?s:t.ajaxSettings).port;return"abort"===r?(e[n]&&e[n].abort(),e[n]=i.apply(this,arguments),e[n]):i.apply(this,arguments)}}}(jQuery),function(t){t.extend(t.fn,{validateDelegate:function(e,i,s){return this.bind(i,function(i){var r=t(i.target);return r.is(e)?s.apply(r,arguments):void 0})}})}(jQuery);
/*! jQuery Validation Plugin - v1.11.1 - 3/22/2013\n* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2013 Jörn Zaefferer; Licensed MIT */(function(){function t(t){return t.replace(/<.[^<>]*?>/g," ").replace(/&nbsp;|&#160;/gi," ").replace(/[.(),;:!?%#$'"_+=\/\-]*/g,"")}jQuery.validator.addMethod("maxWords",function(e,i,a){return this.optional(i)||a>=t(e).match(/\b\w+\b/g).length},jQuery.validator.format("Please enter {0} words or less.")),jQuery.validator.addMethod("minWords",function(e,i,a){return this.optional(i)||t(e).match(/\b\w+\b/g).length>=a},jQuery.validator.format("Please enter at least {0} words.")),jQuery.validator.addMethod("rangeWords",function(e,i,a){var r=t(e),n=/\b\w+\b/g;return this.optional(i)||r.match(n).length>=a[0]&&r.match(n).length<=a[1]},jQuery.validator.format("Please enter between {0} and {1} words."))})(),jQuery.validator.addMethod("letterswithbasicpunc",function(t,e){return this.optional(e)||/^[a-z\-.,()'"\s]+$/i.test(t)},"Letters or punctuation only please"),jQuery.validator.addMethod("alphanumeric",function(t,e){return this.optional(e)||/^\w+$/i.test(t)},"Letters, numbers, and underscores only please"),jQuery.validator.addMethod("lettersonly",function(t,e){return this.optional(e)||/^[a-z]+$/i.test(t)},"Letters only please"),jQuery.validator.addMethod("nowhitespace",function(t,e){return this.optional(e)||/^\S+$/i.test(t)},"No white space please"),jQuery.validator.addMethod("ziprange",function(t,e){return this.optional(e)||/^90[2-5]\d\{2\}-\d{4}$/.test(t)},"Your ZIP-code must be in the range 902xx-xxxx to 905-xx-xxxx"),jQuery.validator.addMethod("zipcodeUS",function(t,e){return this.optional(e)||/\d{5}-\d{4}$|^\d{5}$/.test(t)},"The specified US ZIP Code is invalid"),jQuery.validator.addMethod("integer",function(t,e){return this.optional(e)||/^-?\d+$/.test(t)},"A positive or negative non-decimal number please"),jQuery.validator.addMethod("vinUS",function(t){if(17!==t.length)return!1;var e,i,a,r,n,s,u=["A","B","C","D","E","F","G","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y","Z"],d=[1,2,3,4,5,6,7,8,1,2,3,4,5,7,9,2,3,4,5,6,7,8,9],o=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2],l=0;for(e=0;17>e;e++){if(r=o[e],a=t.slice(e,e+1),8===e&&(s=a),isNaN(a)){for(i=0;u.length>i;i++)if(a.toUpperCase()===u[i]){a=d[i],a*=r,isNaN(s)&&8===i&&(s=u[i]);break}}else a*=r;l+=a}return n=l%11,10===n&&(n="X"),n===s?!0:!1},"The specified vehicle identification number (VIN) is invalid."),jQuery.validator.addMethod("dateITA",function(t,e){var i=!1,a=/^\d{1,2}\/\d{1,2}\/\d{4}$/;if(a.test(t)){var r=t.split("/"),n=parseInt(r[0],10),s=parseInt(r[1],10),u=parseInt(r[2],10),d=new Date(u,s-1,n);i=d.getFullYear()===u&&d.getMonth()===s-1&&d.getDate()===n?!0:!1}else i=!1;return this.optional(e)||i},"Please enter a correct date"),jQuery.validator.addMethod("iban",function(t,e){if(this.optional(e))return!0;if(!/^([a-zA-Z0-9]{4} ){2,8}[a-zA-Z0-9]{1,4}|[a-zA-Z0-9]{12,34}$/.test(t))return!1;var i=t.replace(/ /g,"").toUpperCase(),a=i.substring(0,2),r={AL:"\\d{8}[\\dA-Z]{16}",AD:"\\d{8}[\\dA-Z]{12}",AT:"\\d{16}",AZ:"[\\dA-Z]{4}\\d{20}",BE:"\\d{12}",BH:"[A-Z]{4}[\\dA-Z]{14}",BA:"\\d{16}",BR:"\\d{23}[A-Z][\\dA-Z]",BG:"[A-Z]{4}\\d{6}[\\dA-Z]{8}",CR:"\\d{17}",HR:"\\d{17}",CY:"\\d{8}[\\dA-Z]{16}",CZ:"\\d{20}",DK:"\\d{14}",DO:"[A-Z]{4}\\d{20}",EE:"\\d{16}",FO:"\\d{14}",FI:"\\d{14}",FR:"\\d{10}[\\dA-Z]{11}\\d{2}",GE:"[\\dA-Z]{2}\\d{16}",DE:"\\d{18}",GI:"[A-Z]{4}[\\dA-Z]{15}",GR:"\\d{7}[\\dA-Z]{16}",GL:"\\d{14}",GT:"[\\dA-Z]{4}[\\dA-Z]{20}",HU:"\\d{24}",IS:"\\d{22}",IE:"[\\dA-Z]{4}\\d{14}",IL:"\\d{19}",IT:"[A-Z]\\d{10}[\\dA-Z]{12}",KZ:"\\d{3}[\\dA-Z]{13}",KW:"[A-Z]{4}[\\dA-Z]{22}",LV:"[A-Z]{4}[\\dA-Z]{13}",LB:"\\d{4}[\\dA-Z]{20}",LI:"\\d{5}[\\dA-Z]{12}",LT:"\\d{16}",LU:"\\d{3}[\\dA-Z]{13}",MK:"\\d{3}[\\dA-Z]{10}\\d{2}",MT:"[A-Z]{4}\\d{5}[\\dA-Z]{18}",MR:"\\d{23}",MU:"[A-Z]{4}\\d{19}[A-Z]{3}",MC:"\\d{10}[\\dA-Z]{11}\\d{2}",MD:"[\\dA-Z]{2}\\d{18}",ME:"\\d{18}",NL:"[A-Z]{4}\\d{10}",NO:"\\d{11}",PK:"[\\dA-Z]{4}\\d{16}",PS:"[\\dA-Z]{4}\\d{21}",PL:"\\d{24}",PT:"\\d{21}",RO:"[A-Z]{4}[\\dA-Z]{16}",SM:"[A-Z]\\d{10}[\\dA-Z]{12}",SA:"\\d{2}[\\dA-Z]{18}",RS:"\\d{18}",SK:"\\d{20}",SI:"\\d{15}",ES:"\\d{20}",SE:"\\d{20}",CH:"\\d{5}[\\dA-Z]{12}",TN:"\\d{20}",TR:"\\d{5}[\\dA-Z]{17}",AE:"\\d{3}\\d{16}",GB:"[A-Z]{4}\\d{14}",VG:"[\\dA-Z]{4}\\d{16}"},n=r[a];if(n!==void 0){var s=RegExp("^[A-Z]{2}\\d{2}"+n+"$","");if(!s.test(i))return!1}for(var u,d=i.substring(4,i.length)+i.substring(0,4),o="",l=!0,h=0;d.length>h;h++)u=d.charAt(h),"0"!==u&&(l=!1),l||(o+="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(u));for(var F="",c="",m=0;o.length>m;m++){var f=o.charAt(m);c=""+F+f,F=c%97}return 1===F},"Please specify a valid IBAN"),jQuery.validator.addMethod("dateNL",function(t,e){return this.optional(e)||/^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(t)},"Please enter a correct date"),jQuery.validator.addMethod("phoneNL",function(t,e){return this.optional(e)||/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(t)},"Please specify a valid phone number."),jQuery.validator.addMethod("mobileNL",function(t,e){return this.optional(e)||/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(t)},"Please specify a valid mobile number"),jQuery.validator.addMethod("postalcodeNL",function(t,e){return this.optional(e)||/^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(t)},"Please specify a valid postal code"),jQuery.validator.addMethod("bankaccountNL",function(t,e){if(this.optional(e))return!0;if(!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(t))return!1;for(var i=t.replace(/ /g,""),a=0,r=i.length,n=0;r>n;n++){var s=r-n,u=i.substring(n,n+1);a+=s*u}return 0===a%11},"Please specify a valid bank account number"),jQuery.validator.addMethod("giroaccountNL",function(t,e){return this.optional(e)||/^[0-9]{1,7}$/.test(t)},"Please specify a valid giro account number"),jQuery.validator.addMethod("bankorgiroaccountNL",function(t,e){return this.optional(e)||$.validator.methods.bankaccountNL.call(this,t,e)||$.validator.methods.giroaccountNL.call(this,t,e)},"Please specify a valid bank or giro account number"),jQuery.validator.addMethod("time",function(t,e){return this.optional(e)||/^([01]\d|2[0-3])(:[0-5]\d){1,2}$/.test(t)},"Please enter a valid time, between 00:00 and 23:59"),jQuery.validator.addMethod("time12h",function(t,e){return this.optional(e)||/^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(t)},"Please enter a valid time in 12-hour am/pm format"),jQuery.validator.addMethod("phoneUS",function(t,e){return t=t.replace(/\s+/g,""),this.optional(e)||t.length>9&&t.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/)},"Please specify a valid phone number"),jQuery.validator.addMethod("phoneUK",function(t,e){return t=t.replace(/\(|\)|\s+|-/g,""),this.optional(e)||t.length>9&&t.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)},"Please specify a valid phone number"),jQuery.validator.addMethod("mobileUK",function(t,e){return t=t.replace(/\(|\)|\s+|-/g,""),this.optional(e)||t.length>9&&t.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[45789]\d{2}|624)\s?\d{3}\s?\d{3})$/)},"Please specify a valid mobile number"),jQuery.validator.addMethod("phonesUK",function(t,e){return t=t.replace(/\(|\)|\s+|-/g,""),this.optional(e)||t.length>9&&t.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[45789]\d{8}|624\d{6})))$/)},"Please specify a valid uk phone number"),jQuery.validator.addMethod("postcodeUK",function(t,e){return this.optional(e)||/^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(t)},"Please specify a valid UK postcode"),jQuery.validator.addMethod("strippedminlength",function(t,e,i){return jQuery(t).text().length>=i},jQuery.validator.format("Please enter at least {0} characters")),jQuery.validator.addMethod("email2",function(t,e){return this.optional(e)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(t)},jQuery.validator.messages.email),jQuery.validator.addMethod("url2",function(t,e){return this.optional(e)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)},jQuery.validator.messages.url),jQuery.validator.addMethod("creditcardtypes",function(t,e,i){if(/[^0-9\-]+/.test(t))return!1;t=t.replace(/\D/g,"");var a=0;return i.mastercard&&(a|=1),i.visa&&(a|=2),i.amex&&(a|=4),i.dinersclub&&(a|=8),i.enroute&&(a|=16),i.discover&&(a|=32),i.jcb&&(a|=64),i.unknown&&(a|=128),i.all&&(a=255),1&a&&/^(5[12345])/.test(t)?16===t.length:2&a&&/^(4)/.test(t)?16===t.length:4&a&&/^(3[47])/.test(t)?15===t.length:8&a&&/^(3(0[012345]|[68]))/.test(t)?14===t.length:16&a&&/^(2(014|149))/.test(t)?15===t.length:32&a&&/^(6011)/.test(t)?16===t.length:64&a&&/^(3)/.test(t)?16===t.length:64&a&&/^(2131|1800)/.test(t)?15===t.length:128&a?!0:!1},"Please enter a valid credit card number."),jQuery.validator.addMethod("ipv4",function(t,e){return this.optional(e)||/^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(t)},"Please enter a valid IP v4 address."),jQuery.validator.addMethod("ipv6",function(t,e){return this.optional(e)||/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(t)},"Please enter a valid IP v6 address."),jQuery.validator.addMethod("pattern",function(t,e,i){return this.optional(e)?!0:("string"==typeof i&&(i=RegExp("^(?:"+i+")$")),i.test(t))},"Invalid format."),jQuery.validator.addMethod("require_from_group",function(t,e,i){var a=this,r=i[1],n=$(r,e.form).filter(function(){return a.elementValue(this)}).length>=i[0];if(!$(e).data("being_validated")){var s=$(r,e.form);s.data("being_validated",!0),s.valid(),s.data("being_validated",!1)}return n},jQuery.format("Please fill at least {0} of these fields.")),jQuery.validator.addMethod("skip_or_fill_minimum",function(t,e,i){var a=this,r=i[0],n=i[1],s=$(n,e.form).filter(function(){return a.elementValue(this)}).length,u=s>=r||0===s;if(!$(e).data("being_validated")){var d=$(n,e.form);d.data("being_validated",!0),d.valid(),d.data("being_validated",!1)}return u},jQuery.format("Please either skip these fields or fill at least {0} of them.")),jQuery.validator.addMethod("accept",function(t,e,i){var a,r,n="string"==typeof i?i.replace(/\s/g,"").replace(/,/g,"|"):"image/*",s=this.optional(e);if(s)return s;if("file"===$(e).attr("type")&&(n=n.replace(/\*/g,".*"),e.files&&e.files.length))for(a=0;e.files.length>a;a++)if(r=e.files[a],!r.type.match(RegExp(".?("+n+")$","i")))return!1;return!0},jQuery.format("Please enter a value with a valid mimetype.")),jQuery.validator.addMethod("extension",function(t,e,i){return i="string"==typeof i?i.replace(/,/g,"|"):"png|jpe?g|gif",this.optional(e)||t.match(RegExp(".("+i+")$","i"))},jQuery.format("Please enter a value with a valid extension."));
/*
    json2.js
    2013-05-26

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (typeof JSON !== 'object') {
    JSON = {};
}

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function () {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function () {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
/*! Socket.IO.js build:0.9.16, development. Copyright(c) 2011 LearnBoost <dev@learnboost.com> MIT Licensed */

var io = ('undefined' === typeof module ? {} : module.exports);
(function() {

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, global) {

  /**
   * IO namespace.
   *
   * @namespace
   */

  var io = exports;

  /**
   * Socket.IO version
   *
   * @api public
   */

  io.version = '0.9.16';

  /**
   * Protocol implemented.
   *
   * @api public
   */

  io.protocol = 1;

  /**
   * Available transports, these will be populated with the available transports
   *
   * @api public
   */

  io.transports = [];

  /**
   * Keep track of jsonp callbacks.
   *
   * @api private
   */

  io.j = [];

  /**
   * Keep track of our io.Sockets
   *
   * @api private
   */
  io.sockets = {};


  /**
   * Manages connections to hosts.
   *
   * @param {String} uri
   * @Param {Boolean} force creation of new socket (defaults to false)
   * @api public
   */

  io.connect = function (host, details) {
    var uri = io.util.parseUri(host)
      , uuri
      , socket;

    if (global && global.location) {
      uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
      uri.host = uri.host || (global.document
        ? global.document.domain : global.location.hostname);
      uri.port = uri.port || global.location.port;
    }

    uuri = io.util.uniqueUri(uri);

    var options = {
        host: uri.host
      , secure: 'https' == uri.protocol
      , port: uri.port || ('https' == uri.protocol ? 443 : 80)
      , query: uri.query || ''
    };

    io.util.merge(options, details);

    if (options['force new connection'] || !io.sockets[uuri]) {
      socket = new io.Socket(options);
    }

    if (!options['force new connection'] && socket) {
      io.sockets[uuri] = socket;
    }

    socket = socket || io.sockets[uuri];

    // if path is different from '' or /
    return socket.of(uri.path.length > 1 ? uri.path : '');
  };

})('object' === typeof module ? module.exports : (this.io = {}), this);
/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, global) {

  /**
   * Utilities namespace.
   *
   * @namespace
   */

  var util = exports.util = {};

  /**
   * Parses an URI
   *
   * @author Steven Levithan <stevenlevithan.com> (MIT license)
   * @api public
   */

  var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

  var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password',
               'host', 'port', 'relative', 'path', 'directory', 'file', 'query',
               'anchor'];

  util.parseUri = function (str) {
    var m = re.exec(str || '')
      , uri = {}
      , i = 14;

    while (i--) {
      uri[parts[i]] = m[i] || '';
    }

    return uri;
  };

  /**
   * Produces a unique url that identifies a Socket.IO connection.
   *
   * @param {Object} uri
   * @api public
   */

  util.uniqueUri = function (uri) {
    var protocol = uri.protocol
      , host = uri.host
      , port = uri.port;

    if ('document' in global) {
      host = host || document.domain;
      port = port || (protocol == 'https'
        && document.location.protocol !== 'https:' ? 443 : document.location.port);
    } else {
      host = host || 'localhost';

      if (!port && protocol == 'https') {
        port = 443;
      }
    }

    return (protocol || 'http') + '://' + host + ':' + (port || 80);
  };

  /**
   * Mergest 2 query strings in to once unique query string
   *
   * @param {String} base
   * @param {String} addition
   * @api public
   */

  util.query = function (base, addition) {
    var query = util.chunkQuery(base || '')
      , components = [];

    util.merge(query, util.chunkQuery(addition || ''));
    for (var part in query) {
      if (query.hasOwnProperty(part)) {
        components.push(part + '=' + query[part]);
      }
    }

    return components.length ? '?' + components.join('&') : '';
  };

  /**
   * Transforms a querystring in to an object
   *
   * @param {String} qs
   * @api public
   */

  util.chunkQuery = function (qs) {
    var query = {}
      , params = qs.split('&')
      , i = 0
      , l = params.length
      , kv;

    for (; i < l; ++i) {
      kv = params[i].split('=');
      if (kv[0]) {
        query[kv[0]] = kv[1];
      }
    }

    return query;
  };

  /**
   * Executes the given function when the page is loaded.
   *
   *     io.util.load(function () { console.log('page loaded'); });
   *
   * @param {Function} fn
   * @api public
   */

  var pageLoaded = false;

  util.load = function (fn) {
    if ('document' in global && document.readyState === 'complete' || pageLoaded) {
      return fn();
    }

    util.on(global, 'load', fn, false);
  };

  /**
   * Adds an event.
   *
   * @api private
   */

  util.on = function (element, event, fn, capture) {
    if (element.attachEvent) {
      element.attachEvent('on' + event, fn);
    } else if (element.addEventListener) {
      element.addEventListener(event, fn, capture);
    }
  };

  /**
   * Generates the correct `XMLHttpRequest` for regular and cross domain requests.
   *
   * @param {Boolean} [xdomain] Create a request that can be used cross domain.
   * @returns {XMLHttpRequest|false} If we can create a XMLHttpRequest.
   * @api private
   */

  util.request = function (xdomain) {

    if (xdomain && 'undefined' != typeof XDomainRequest && !util.ua.hasCORS) {
      return new XDomainRequest();
    }

    if ('undefined' != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
      return new XMLHttpRequest();
    }

    if (!xdomain) {
      try {
        return new window[(['Active'].concat('Object').join('X'))]('Microsoft.XMLHTTP');
      } catch(e) { }
    }

    return null;
  };

  /**
   * XHR based transport constructor.
   *
   * @constructor
   * @api public
   */

  /**
   * Change the internal pageLoaded value.
   */

  if ('undefined' != typeof window) {
    util.load(function () {
      pageLoaded = true;
    });
  }

  /**
   * Defers a function to ensure a spinner is not displayed by the browser
   *
   * @param {Function} fn
   * @api public
   */

  util.defer = function (fn) {
    if (!util.ua.webkit || 'undefined' != typeof importScripts) {
      return fn();
    }

    util.load(function () {
      setTimeout(fn, 100);
    });
  };

  /**
   * Merges two objects.
   *
   * @api public
   */

  util.merge = function merge (target, additional, deep, lastseen) {
    var seen = lastseen || []
      , depth = typeof deep == 'undefined' ? 2 : deep
      , prop;

    for (prop in additional) {
      if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
        if (typeof target[prop] !== 'object' || !depth) {
          target[prop] = additional[prop];
          seen.push(additional[prop]);
        } else {
          util.merge(target[prop], additional[prop], depth - 1, seen);
        }
      }
    }

    return target;
  };

  /**
   * Merges prototypes from objects
   *
   * @api public
   */

  util.mixin = function (ctor, ctor2) {
    util.merge(ctor.prototype, ctor2.prototype);
  };

  /**
   * Shortcut for prototypical and static inheritance.
   *
   * @api private
   */

  util.inherit = function (ctor, ctor2) {
    function f() {};
    f.prototype = ctor2.prototype;
    ctor.prototype = new f;
  };

  /**
   * Checks if the given object is an Array.
   *
   *     io.util.isArray([]); // true
   *     io.util.isArray({}); // false
   *
   * @param Object obj
   * @api public
   */

  util.isArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  /**
   * Intersects values of two arrays into a third
   *
   * @api public
   */

  util.intersect = function (arr, arr2) {
    var ret = []
      , longest = arr.length > arr2.length ? arr : arr2
      , shortest = arr.length > arr2.length ? arr2 : arr;

    for (var i = 0, l = shortest.length; i < l; i++) {
      if (~util.indexOf(longest, shortest[i]))
        ret.push(shortest[i]);
    }

    return ret;
  };

  /**
   * Array indexOf compatibility.
   *
   * @see bit.ly/a5Dxa2
   * @api public
   */

  util.indexOf = function (arr, o, i) {

    for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0;
         i < j && arr[i] !== o; i++) {}

    return j <= i ? -1 : i;
  };

  /**
   * Converts enumerables to array.
   *
   * @api public
   */

  util.toArray = function (enu) {
    var arr = [];

    for (var i = 0, l = enu.length; i < l; i++)
      arr.push(enu[i]);

    return arr;
  };

  /**
   * UA / engines detection namespace.
   *
   * @namespace
   */

  util.ua = {};

  /**
   * Whether the UA supports CORS for XHR.
   *
   * @api public
   */

  util.ua.hasCORS = 'undefined' != typeof XMLHttpRequest && (function () {
    try {
      var a = new XMLHttpRequest();
    } catch (e) {
      return false;
    }

    return a.withCredentials != undefined;
  })();

  /**
   * Detect webkit.
   *
   * @api public
   */

  util.ua.webkit = 'undefined' != typeof navigator
    && /webkit/i.test(navigator.userAgent);

   /**
   * Detect iPad/iPhone/iPod.
   *
   * @api public
   */

  util.ua.iDevice = 'undefined' != typeof navigator
      && /iPad|iPhone|iPod/i.test(navigator.userAgent);

})('undefined' != typeof io ? io : module.exports, this);
/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io) {

  /**
   * Expose constructor.
   */

  exports.EventEmitter = EventEmitter;

  /**
   * Event emitter constructor.
   *
   * @api public.
   */

  function EventEmitter () {};

  /**
   * Adds a listener
   *
   * @api public
   */

  EventEmitter.prototype.on = function (name, fn) {
    if (!this.$events) {
      this.$events = {};
    }

    if (!this.$events[name]) {
      this.$events[name] = fn;
    } else if (io.util.isArray(this.$events[name])) {
      this.$events[name].push(fn);
    } else {
      this.$events[name] = [this.$events[name], fn];
    }

    return this;
  };

  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  /**
   * Adds a volatile listener.
   *
   * @api public
   */

  EventEmitter.prototype.once = function (name, fn) {
    var self = this;

    function on () {
      self.removeListener(name, on);
      fn.apply(this, arguments);
    };

    on.listener = fn;
    this.on(name, on);

    return this;
  };

  /**
   * Removes a listener.
   *
   * @api public
   */

  EventEmitter.prototype.removeListener = function (name, fn) {
    if (this.$events && this.$events[name]) {
      var list = this.$events[name];

      if (io.util.isArray(list)) {
        var pos = -1;

        for (var i = 0, l = list.length; i < l; i++) {
          if (list[i] === fn || (list[i].listener && list[i].listener === fn)) {
            pos = i;
            break;
          }
        }

        if (pos < 0) {
          return this;
        }

        list.splice(pos, 1);

        if (!list.length) {
          delete this.$events[name];
        }
      } else if (list === fn || (list.listener && list.listener === fn)) {
        delete this.$events[name];
      }
    }

    return this;
  };

  /**
   * Removes all listeners for an event.
   *
   * @api public
   */

  EventEmitter.prototype.removeAllListeners = function (name) {
    if (name === undefined) {
      this.$events = {};
      return this;
    }

    if (this.$events && this.$events[name]) {
      this.$events[name] = null;
    }

    return this;
  };

  /**
   * Gets all listeners for a certain event.
   *
   * @api publci
   */

  EventEmitter.prototype.listeners = function (name) {
    if (!this.$events) {
      this.$events = {};
    }

    if (!this.$events[name]) {
      this.$events[name] = [];
    }

    if (!io.util.isArray(this.$events[name])) {
      this.$events[name] = [this.$events[name]];
    }

    return this.$events[name];
  };

  /**
   * Emits an event.
   *
   * @api public
   */

  EventEmitter.prototype.emit = function (name) {
    if (!this.$events) {
      return false;
    }

    var handler = this.$events[name];

    if (!handler) {
      return false;
    }

    var args = Array.prototype.slice.call(arguments, 1);

    if ('function' == typeof handler) {
      handler.apply(this, args);
    } else if (io.util.isArray(handler)) {
      var listeners = handler.slice();

      for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i].apply(this, args);
      }
    } else {
      return false;
    }

    return true;
  };

})(
    'undefined' != typeof io ? io : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
);

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

/**
 * Based on JSON2 (http://www.JSON.org/js.html).
 */

(function (exports, nativeJSON) {
  "use strict";

  // use native JSON if it's available
  if (nativeJSON && nativeJSON.parse){
    return exports.JSON = {
      parse: nativeJSON.parse
    , stringify: nativeJSON.stringify
    };
  }

  var JSON = exports.JSON = {};

  function f(n) {
      // Format integers to have at least two digits.
      return n < 10 ? '0' + n : n;
  }

  function date(d, key) {
    return isFinite(d.valueOf()) ?
        d.getUTCFullYear()     + '-' +
        f(d.getUTCMonth() + 1) + '-' +
        f(d.getUTCDate())      + 'T' +
        f(d.getUTCHours())     + ':' +
        f(d.getUTCMinutes())   + ':' +
        f(d.getUTCSeconds())   + 'Z' : null;
  };

  var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      gap,
      indent,
      meta = {    // table of character substitutions
          '\b': '\\b',
          '\t': '\\t',
          '\n': '\\n',
          '\f': '\\f',
          '\r': '\\r',
          '"' : '\\"',
          '\\': '\\\\'
      },
      rep;


  function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

      escapable.lastIndex = 0;
      return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
          var c = meta[a];
          return typeof c === 'string' ? c :
              '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
      }) + '"' : '"' + string + '"';
  }


  function str(key, holder) {

// Produce a string from holder[key].

      var i,          // The loop counter.
          k,          // The member key.
          v,          // The member value.
          length,
          mind = gap,
          partial,
          value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

      if (value instanceof Date) {
          value = date(key);
      }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

      if (typeof rep === 'function') {
          value = rep.call(holder, key, value);
      }

// What happens next depends on the value's type.

      switch (typeof value) {
      case 'string':
          return quote(value);

      case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

          return isFinite(value) ? String(value) : 'null';

      case 'boolean':
      case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

          return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

      case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

          if (!value) {
              return 'null';
          }

// Make an array to hold the partial results of stringifying this object value.

          gap += indent;
          partial = [];

// Is the value an array?

          if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

              length = value.length;
              for (i = 0; i < length; i += 1) {
                  partial[i] = str(i, value) || 'null';
              }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

              v = partial.length === 0 ? '[]' : gap ?
                  '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                  '[' + partial.join(',') + ']';
              gap = mind;
              return v;
          }

// If the replacer is an array, use it to select the members to be stringified.

          if (rep && typeof rep === 'object') {
              length = rep.length;
              for (i = 0; i < length; i += 1) {
                  if (typeof rep[i] === 'string') {
                      k = rep[i];
                      v = str(k, value);
                      if (v) {
                          partial.push(quote(k) + (gap ? ': ' : ':') + v);
                      }
                  }
              }
          } else {

// Otherwise, iterate through all of the keys in the object.

              for (k in value) {
                  if (Object.prototype.hasOwnProperty.call(value, k)) {
                      v = str(k, value);
                      if (v) {
                          partial.push(quote(k) + (gap ? ': ' : ':') + v);
                      }
                  }
              }
          }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

          v = partial.length === 0 ? '{}' : gap ?
              '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
              '{' + partial.join(',') + '}';
          gap = mind;
          return v;
      }
  }

// If the JSON object does not yet have a stringify method, give it one.

  JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

      var i;
      gap = '';
      indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

      if (typeof space === 'number') {
          for (i = 0; i < space; i += 1) {
              indent += ' ';
          }

// If the space parameter is a string, it will be used as the indent string.

      } else if (typeof space === 'string') {
          indent = space;
      }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

      rep = replacer;
      if (replacer && typeof replacer !== 'function' &&
              (typeof replacer !== 'object' ||
              typeof replacer.length !== 'number')) {
          throw new Error('JSON.stringify');
      }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

      return str('', {'': value});
  };

// If the JSON object does not yet have a parse method, give it one.

  JSON.parse = function (text, reviver) {
  // The parse method takes a text and an optional reviver function, and returns
  // a JavaScript value if the text is a valid JSON text.

      var j;

      function walk(holder, key) {

  // The walk method is used to recursively walk the resulting structure so
  // that modifications can be made.

          var k, v, value = holder[key];
          if (value && typeof value === 'object') {
              for (k in value) {
                  if (Object.prototype.hasOwnProperty.call(value, k)) {
                      v = walk(value, k);
                      if (v !== undefined) {
                          value[k] = v;
                      } else {
                          delete value[k];
                      }
                  }
              }
          }
          return reviver.call(holder, key, value);
      }


  // Parsing happens in four stages. In the first stage, we replace certain
  // Unicode characters with escape sequences. JavaScript handles many characters
  // incorrectly, either silently deleting them, or treating them as line endings.

      text = String(text);
      cx.lastIndex = 0;
      if (cx.test(text)) {
          text = text.replace(cx, function (a) {
              return '\\u' +
                  ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
          });
      }

  // In the second stage, we run the text against regular expressions that look
  // for non-JSON patterns. We are especially concerned with '()' and 'new'
  // because they can cause invocation, and '=' because it can cause mutation.
  // But just to be safe, we want to reject all unexpected forms.

  // We split the second stage into 4 regexp operations in order to work around
  // crippling inefficiencies in IE's and Safari's regexp engines. First we
  // replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
  // replace all simple value tokens with ']' characters. Third, we delete all
  // open brackets that follow a colon or comma or that begin the text. Finally,
  // we look to see that the remaining characters are only whitespace or ']' or
  // ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

      if (/^[\],:{}\s]*$/
              .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                  .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                  .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

  // In the third stage we use the eval function to compile the text into a
  // JavaScript structure. The '{' operator is subject to a syntactic ambiguity
  // in JavaScript: it can begin a block or an object literal. We wrap the text
  // in parens to eliminate the ambiguity.

          j = eval('(' + text + ')');

  // In the optional fourth stage, we recursively walk the new structure, passing
  // each name/value pair to a reviver function for possible transformation.

          return typeof reviver === 'function' ?
              walk({'': j}, '') : j;
      }

  // If the text is not JSON parseable, then a SyntaxError is thrown.

      throw new SyntaxError('JSON.parse');
  };

})(
    'undefined' != typeof io ? io : module.exports
  , typeof JSON !== 'undefined' ? JSON : undefined
);

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io) {

  /**
   * Parser namespace.
   *
   * @namespace
   */

  var parser = exports.parser = {};

  /**
   * Packet types.
   */

  var packets = parser.packets = [
      'disconnect'
    , 'connect'
    , 'heartbeat'
    , 'message'
    , 'json'
    , 'event'
    , 'ack'
    , 'error'
    , 'noop'
  ];

  /**
   * Errors reasons.
   */

  var reasons = parser.reasons = [
      'transport not supported'
    , 'client not handshaken'
    , 'unauthorized'
  ];

  /**
   * Errors advice.
   */

  var advice = parser.advice = [
      'reconnect'
  ];

  /**
   * Shortcuts.
   */

  var JSON = io.JSON
    , indexOf = io.util.indexOf;

  /**
   * Encodes a packet.
   *
   * @api private
   */

  parser.encodePacket = function (packet) {
    var type = indexOf(packets, packet.type)
      , id = packet.id || ''
      , endpoint = packet.endpoint || ''
      , ack = packet.ack
      , data = null;

    switch (packet.type) {
      case 'error':
        var reason = packet.reason ? indexOf(reasons, packet.reason) : ''
          , adv = packet.advice ? indexOf(advice, packet.advice) : '';

        if (reason !== '' || adv !== '')
          data = reason + (adv !== '' ? ('+' + adv) : '');

        break;

      case 'message':
        if (packet.data !== '')
          data = packet.data;
        break;

      case 'event':
        var ev = { name: packet.name };

        if (packet.args && packet.args.length) {
          ev.args = packet.args;
        }

        data = JSON.stringify(ev);
        break;

      case 'json':
        data = JSON.stringify(packet.data);
        break;

      case 'connect':
        if (packet.qs)
          data = packet.qs;
        break;

      case 'ack':
        data = packet.ackId
          + (packet.args && packet.args.length
              ? '+' + JSON.stringify(packet.args) : '');
        break;
    }

    // construct packet with required fragments
    var encoded = [
        type
      , id + (ack == 'data' ? '+' : '')
      , endpoint
    ];

    // data fragment is optional
    if (data !== null && data !== undefined)
      encoded.push(data);

    return encoded.join(':');
  };

  /**
   * Encodes multiple messages (payload).
   *
   * @param {Array} messages
   * @api private
   */

  parser.encodePayload = function (packets) {
    var decoded = '';

    if (packets.length == 1)
      return packets[0];

    for (var i = 0, l = packets.length; i < l; i++) {
      var packet = packets[i];
      decoded += '\ufffd' + packet.length + '\ufffd' + packets[i];
    }

    return decoded;
  };

  /**
   * Decodes a packet
   *
   * @api private
   */

  var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;

  parser.decodePacket = function (data) {
    var pieces = data.match(regexp);

    if (!pieces) return {};

    var id = pieces[2] || ''
      , data = pieces[5] || ''
      , packet = {
            type: packets[pieces[1]]
          , endpoint: pieces[4] || ''
        };

    // whether we need to acknowledge the packet
    if (id) {
      packet.id = id;
      if (pieces[3])
        packet.ack = 'data';
      else
        packet.ack = true;
    }

    // handle different packet types
    switch (packet.type) {
      case 'error':
        var pieces = data.split('+');
        packet.reason = reasons[pieces[0]] || '';
        packet.advice = advice[pieces[1]] || '';
        break;

      case 'message':
        packet.data = data || '';
        break;

      case 'event':
        try {
          var opts = JSON.parse(data);
          packet.name = opts.name;
          packet.args = opts.args;
        } catch (e) { }

        packet.args = packet.args || [];
        break;

      case 'json':
        try {
          packet.data = JSON.parse(data);
        } catch (e) { }
        break;

      case 'connect':
        packet.qs = data || '';
        break;

      case 'ack':
        var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
        if (pieces) {
          packet.ackId = pieces[1];
          packet.args = [];

          if (pieces[3]) {
            try {
              packet.args = pieces[3] ? JSON.parse(pieces[3]) : [];
            } catch (e) { }
          }
        }
        break;

      case 'disconnect':
      case 'heartbeat':
        break;
    };

    return packet;
  };

  /**
   * Decodes data payload. Detects multiple messages
   *
   * @return {Array} messages
   * @api public
   */

  parser.decodePayload = function (data) {
    // IE doesn't like data[i] for unicode chars, charAt works fine
    if (data.charAt(0) == '\ufffd') {
      var ret = [];

      for (var i = 1, length = ''; i < data.length; i++) {
        if (data.charAt(i) == '\ufffd') {
          ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
          i += Number(length) + 1;
          length = '';
        } else {
          length += data.charAt(i);
        }
      }

      return ret;
    } else {
      return [parser.decodePacket(data)];
    }
  };

})(
    'undefined' != typeof io ? io : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
);
/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io) {

  /**
   * Expose constructor.
   */

  exports.Transport = Transport;

  /**
   * This is the transport template for all supported transport methods.
   *
   * @constructor
   * @api public
   */

  function Transport (socket, sessid) {
    this.socket = socket;
    this.sessid = sessid;
  };

  /**
   * Apply EventEmitter mixin.
   */

  io.util.mixin(Transport, io.EventEmitter);


  /**
   * Indicates whether heartbeats is enabled for this transport
   *
   * @api private
   */

  Transport.prototype.heartbeats = function () {
    return true;
  };

  /**
   * Handles the response from the server. When a new response is received
   * it will automatically update the timeout, decode the message and
   * forwards the response to the onMessage function for further processing.
   *
   * @param {String} data Response from the server.
   * @api private
   */

  Transport.prototype.onData = function (data) {
    this.clearCloseTimeout();

    // If the connection in currently open (or in a reopening state) reset the close
    // timeout since we have just received data. This check is necessary so
    // that we don't reset the timeout on an explicitly disconnected connection.
    if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
      this.setCloseTimeout();
    }

    if (data !== '') {
      // todo: we should only do decodePayload for xhr transports
      var msgs = io.parser.decodePayload(data);

      if (msgs && msgs.length) {
        for (var i = 0, l = msgs.length; i < l; i++) {
          this.onPacket(msgs[i]);
        }
      }
    }

    return this;
  };

  /**
   * Handles packets.
   *
   * @api private
   */

  Transport.prototype.onPacket = function (packet) {
    this.socket.setHeartbeatTimeout();

    if (packet.type == 'heartbeat') {
      return this.onHeartbeat();
    }

    if (packet.type == 'connect' && packet.endpoint == '') {
      this.onConnect();
    }

    if (packet.type == 'error' && packet.advice == 'reconnect') {
      this.isOpen = false;
    }

    this.socket.onPacket(packet);

    return this;
  };

  /**
   * Sets close timeout
   *
   * @api private
   */

  Transport.prototype.setCloseTimeout = function () {
    if (!this.closeTimeout) {
      var self = this;

      this.closeTimeout = setTimeout(function () {
        self.onDisconnect();
      }, this.socket.closeTimeout);
    }
  };

  /**
   * Called when transport disconnects.
   *
   * @api private
   */

  Transport.prototype.onDisconnect = function () {
    if (this.isOpen) this.close();
    this.clearTimeouts();
    this.socket.onDisconnect();
    return this;
  };

  /**
   * Called when transport connects
   *
   * @api private
   */

  Transport.prototype.onConnect = function () {
    this.socket.onConnect();
    return this;
  };

  /**
   * Clears close timeout
   *
   * @api private
   */

  Transport.prototype.clearCloseTimeout = function () {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }
  };

  /**
   * Clear timeouts
   *
   * @api private
   */

  Transport.prototype.clearTimeouts = function () {
    this.clearCloseTimeout();

    if (this.reopenTimeout) {
      clearTimeout(this.reopenTimeout);
    }
  };

  /**
   * Sends a packet
   *
   * @param {Object} packet object.
   * @api private
   */

  Transport.prototype.packet = function (packet) {
    this.send(io.parser.encodePacket(packet));
  };

  /**
   * Send the received heartbeat message back to server. So the server
   * knows we are still connected.
   *
   * @param {String} heartbeat Heartbeat response from the server.
   * @api private
   */

  Transport.prototype.onHeartbeat = function (heartbeat) {
    this.packet({ type: 'heartbeat' });
  };

  /**
   * Called when the transport opens.
   *
   * @api private
   */

  Transport.prototype.onOpen = function () {
    this.isOpen = true;
    this.clearCloseTimeout();
    this.socket.onOpen();
  };

  /**
   * Notifies the base when the connection with the Socket.IO server
   * has been disconnected.
   *
   * @api private
   */

  Transport.prototype.onClose = function () {
    var self = this;

    /* FIXME: reopen delay causing a infinit loop
    this.reopenTimeout = setTimeout(function () {
      self.open();
    }, this.socket.options['reopen delay']);*/

    this.isOpen = false;
    this.socket.onClose();
    this.onDisconnect();
  };

  /**
   * Generates a connection url based on the Socket.IO URL Protocol.
   * See <https://github.com/learnboost/socket.io-node/> for more details.
   *
   * @returns {String} Connection url
   * @api private
   */

  Transport.prototype.prepareUrl = function () {
    var options = this.socket.options;

    return this.scheme() + '://'
      + options.host + ':' + options.port + '/'
      + options.resource + '/' + io.protocol
      + '/' + this.name + '/' + this.sessid;
  };

  /**
   * Checks if the transport is ready to start a connection.
   *
   * @param {Socket} socket The socket instance that needs a transport
   * @param {Function} fn The callback
   * @api private
   */

  Transport.prototype.ready = function (socket, fn) {
    fn.call(this);
  };
})(
    'undefined' != typeof io ? io : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
);
/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io, global) {

  /**
   * Expose constructor.
   */

  exports.Socket = Socket;

  /**
   * Create a new `Socket.IO client` which can establish a persistent
   * connection with a Socket.IO enabled server.
   *
   * @api public
   */

  function Socket (options) {
    this.options = {
        port: 80
      , secure: false
      , document: 'document' in global ? document : false
      , resource: 'socket.io'
      , transports: io.transports
      , 'connect timeout': 10000
      , 'try multiple transports': true
      , 'reconnect': true
      , 'reconnection delay': 500
      , 'reconnection limit': Infinity
      , 'reopen delay': 3000
      , 'max reconnection attempts': 10
      , 'sync disconnect on unload': false
      , 'auto connect': true
      , 'flash policy port': 10843
      , 'manualFlush': false
    };

    io.util.merge(this.options, options);

    this.connected = false;
    this.open = false;
    this.connecting = false;
    this.reconnecting = false;
    this.namespaces = {};
    this.buffer = [];
    this.doBuffer = false;

    if (this.options['sync disconnect on unload'] &&
        (!this.isXDomain() || io.util.ua.hasCORS)) {
      var self = this;
      io.util.on(global, 'beforeunload', function () {
        self.disconnectSync();
      }, false);
    }

    if (this.options['auto connect']) {
      this.connect();
    }
};

  /**
   * Apply EventEmitter mixin.
   */

  io.util.mixin(Socket, io.EventEmitter);

  /**
   * Returns a namespace listener/emitter for this socket
   *
   * @api public
   */

  Socket.prototype.of = function (name) {
    if (!this.namespaces[name]) {
      this.namespaces[name] = new io.SocketNamespace(this, name);

      if (name !== '') {
        this.namespaces[name].packet({ type: 'connect' });
      }
    }

    return this.namespaces[name];
  };

  /**
   * Emits the given event to the Socket and all namespaces
   *
   * @api private
   */

  Socket.prototype.publish = function () {
    this.emit.apply(this, arguments);

    var nsp;

    for (var i in this.namespaces) {
      if (this.namespaces.hasOwnProperty(i)) {
        nsp = this.of(i);
        nsp.$emit.apply(nsp, arguments);
      }
    }
  };

  /**
   * Performs the handshake
   *
   * @api private
   */

  function empty () { };

  Socket.prototype.handshake = function (fn) {
    var self = this
      , options = this.options;

    function complete (data) {
      if (data instanceof Error) {
        self.connecting = false;
        self.onError(data.message);
      } else {
        fn.apply(null, data.split(':'));
      }
    };

    var url = [
          'http' + (options.secure ? 's' : '') + ':/'
        , options.host + ':' + options.port
        , options.resource
        , io.protocol
        , io.util.query(this.options.query, 't=' + +new Date)
      ].join('/');

    if (this.isXDomain() && !io.util.ua.hasCORS) {
      var insertAt = document.getElementsByTagName('script')[0]
        , script = document.createElement('script');

      script.src = url + '&jsonp=' + io.j.length;
      insertAt.parentNode.insertBefore(script, insertAt);

      io.j.push(function (data) {
        complete(data);
        script.parentNode.removeChild(script);
      });
    } else {
      var xhr = io.util.request();

      xhr.open('GET', url, true);
      if (this.isXDomain()) {
        xhr.withCredentials = true;
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          xhr.onreadystatechange = empty;

          if (xhr.status == 200) {
            complete(xhr.responseText);
          } else if (xhr.status == 403) {
            self.onError(xhr.responseText);
          } else {
            self.connecting = false;            
            !self.reconnecting && self.onError(xhr.responseText);
          }
        }
      };
      xhr.send(null);
    }
  };

  /**
   * Find an available transport based on the options supplied in the constructor.
   *
   * @api private
   */

  Socket.prototype.getTransport = function (override) {
    var transports = override || this.transports, match;

    for (var i = 0, transport; transport = transports[i]; i++) {
      if (io.Transport[transport]
        && io.Transport[transport].check(this)
        && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
        return new io.Transport[transport](this, this.sessionid);
      }
    }

    return null;
  };

  /**
   * Connects to the server.
   *
   * @param {Function} [fn] Callback.
   * @returns {io.Socket}
   * @api public
   */

  Socket.prototype.connect = function (fn) {
    if (this.connecting) {
      return this;
    }

    var self = this;
    self.connecting = true;
    
    this.handshake(function (sid, heartbeat, close, transports) {
      self.sessionid = sid;
      self.closeTimeout = close * 1000;
      self.heartbeatTimeout = heartbeat * 1000;
      if(!self.transports)
          self.transports = self.origTransports = (transports ? io.util.intersect(
              transports.split(',')
            , self.options.transports
          ) : self.options.transports);

      self.setHeartbeatTimeout();

      function connect (transports){
        if (self.transport) self.transport.clearTimeouts();

        self.transport = self.getTransport(transports);
        if (!self.transport) return self.publish('connect_failed');

        // once the transport is ready
        self.transport.ready(self, function () {
          self.connecting = true;
          self.publish('connecting', self.transport.name);
          self.transport.open();

          if (self.options['connect timeout']) {
            self.connectTimeoutTimer = setTimeout(function () {
              if (!self.connected) {
                self.connecting = false;

                if (self.options['try multiple transports']) {
                  var remaining = self.transports;

                  while (remaining.length > 0 && remaining.splice(0,1)[0] !=
                         self.transport.name) {}

                    if (remaining.length){
                      connect(remaining);
                    } else {
                      self.publish('connect_failed');
                    }
                }
              }
            }, self.options['connect timeout']);
          }
        });
      }

      connect(self.transports);

      self.once('connect', function (){
        clearTimeout(self.connectTimeoutTimer);

        fn && typeof fn == 'function' && fn();
      });
    });

    return this;
  };

  /**
   * Clears and sets a new heartbeat timeout using the value given by the
   * server during the handshake.
   *
   * @api private
   */

  Socket.prototype.setHeartbeatTimeout = function () {
    clearTimeout(this.heartbeatTimeoutTimer);
    if(this.transport && !this.transport.heartbeats()) return;

    var self = this;
    this.heartbeatTimeoutTimer = setTimeout(function () {
      self.transport.onClose();
    }, this.heartbeatTimeout);
  };

  /**
   * Sends a message.
   *
   * @param {Object} data packet.
   * @returns {io.Socket}
   * @api public
   */

  Socket.prototype.packet = function (data) {
    if (this.connected && !this.doBuffer) {
      this.transport.packet(data);
    } else {
      this.buffer.push(data);
    }

    return this;
  };

  /**
   * Sets buffer state
   *
   * @api private
   */

  Socket.prototype.setBuffer = function (v) {
    this.doBuffer = v;

    if (!v && this.connected && this.buffer.length) {
      if (!this.options['manualFlush']) {
        this.flushBuffer();
      }
    }
  };

  /**
   * Flushes the buffer data over the wire.
   * To be invoked manually when 'manualFlush' is set to true.
   *
   * @api public
   */

  Socket.prototype.flushBuffer = function() {
    this.transport.payload(this.buffer);
    this.buffer = [];
  };
  

  /**
   * Disconnect the established connect.
   *
   * @returns {io.Socket}
   * @api public
   */

  Socket.prototype.disconnect = function () {
    if (this.connected || this.connecting) {
      if (this.open) {
        this.of('').packet({ type: 'disconnect' });
      }

      // handle disconnection immediately
      this.onDisconnect('booted');
    }

    return this;
  };

  /**
   * Disconnects the socket with a sync XHR.
   *
   * @api private
   */

  Socket.prototype.disconnectSync = function () {
    // ensure disconnection
    var xhr = io.util.request();
    var uri = [
        'http' + (this.options.secure ? 's' : '') + ':/'
      , this.options.host + ':' + this.options.port
      , this.options.resource
      , io.protocol
      , ''
      , this.sessionid
    ].join('/') + '/?disconnect=1';

    xhr.open('GET', uri, false);
    xhr.send(null);

    // handle disconnection immediately
    this.onDisconnect('booted');
  };

  /**
   * Check if we need to use cross domain enabled transports. Cross domain would
   * be a different port or different domain name.
   *
   * @returns {Boolean}
   * @api private
   */

  Socket.prototype.isXDomain = function () {

    var port = global.location.port ||
      ('https:' == global.location.protocol ? 443 : 80);

    return this.options.host !== global.location.hostname 
      || this.options.port != port;
  };

  /**
   * Called upon handshake.
   *
   * @api private
   */

  Socket.prototype.onConnect = function () {
    if (!this.connected) {
      this.connected = true;
      this.connecting = false;
      if (!this.doBuffer) {
        // make sure to flush the buffer
        this.setBuffer(false);
      }
      this.emit('connect');
    }
  };

  /**
   * Called when the transport opens
   *
   * @api private
   */

  Socket.prototype.onOpen = function () {
    this.open = true;
  };

  /**
   * Called when the transport closes.
   *
   * @api private
   */

  Socket.prototype.onClose = function () {
    this.open = false;
    clearTimeout(this.heartbeatTimeoutTimer);
  };

  /**
   * Called when the transport first opens a connection
   *
   * @param text
   */

  Socket.prototype.onPacket = function (packet) {
    this.of(packet.endpoint).onPacket(packet);
  };

  /**
   * Handles an error.
   *
   * @api private
   */

  Socket.prototype.onError = function (err) {
    if (err && err.advice) {
      if (err.advice === 'reconnect' && (this.connected || this.connecting)) {
        this.disconnect();
        if (this.options.reconnect) {
          this.reconnect();
        }
      }
    }

    this.publish('error', err && err.reason ? err.reason : err);
  };

  /**
   * Called when the transport disconnects.
   *
   * @api private
   */

  Socket.prototype.onDisconnect = function (reason) {
    var wasConnected = this.connected
      , wasConnecting = this.connecting;

    this.connected = false;
    this.connecting = false;
    this.open = false;

    if (wasConnected || wasConnecting) {
      this.transport.close();
      this.transport.clearTimeouts();
      if (wasConnected) {
        this.publish('disconnect', reason);

        if ('booted' != reason && this.options.reconnect && !this.reconnecting) {
          this.reconnect();
        }
      }
    }
  };

  /**
   * Called upon reconnection.
   *
   * @api private
   */

  Socket.prototype.reconnect = function () {
    this.reconnecting = true;
    this.reconnectionAttempts = 0;
    this.reconnectionDelay = this.options['reconnection delay'];

    var self = this
      , maxAttempts = this.options['max reconnection attempts']
      , tryMultiple = this.options['try multiple transports']
      , limit = this.options['reconnection limit'];

    function reset () {
      if (self.connected) {
        for (var i in self.namespaces) {
          if (self.namespaces.hasOwnProperty(i) && '' !== i) {
              self.namespaces[i].packet({ type: 'connect' });
          }
        }
        self.publish('reconnect', self.transport.name, self.reconnectionAttempts);
      }

      clearTimeout(self.reconnectionTimer);

      self.removeListener('connect_failed', maybeReconnect);
      self.removeListener('connect', maybeReconnect);

      self.reconnecting = false;

      delete self.reconnectionAttempts;
      delete self.reconnectionDelay;
      delete self.reconnectionTimer;
      delete self.redoTransports;

      self.options['try multiple transports'] = tryMultiple;
    };

    function maybeReconnect () {
      if (!self.reconnecting) {
        return;
      }

      if (self.connected) {
        return reset();
      };

      if (self.connecting && self.reconnecting) {
        return self.reconnectionTimer = setTimeout(maybeReconnect, 1000);
      }

      if (self.reconnectionAttempts++ >= maxAttempts) {
        if (!self.redoTransports) {
          self.on('connect_failed', maybeReconnect);
          self.options['try multiple transports'] = true;
          self.transports = self.origTransports;
          self.transport = self.getTransport();
          self.redoTransports = true;
          self.connect();
        } else {
          self.publish('reconnect_failed');
          reset();
        }
      } else {
        if (self.reconnectionDelay < limit) {
          self.reconnectionDelay *= 2; // exponential back off
        }

        self.connect();
        self.publish('reconnecting', self.reconnectionDelay, self.reconnectionAttempts);
        self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay);
      }
    };

    this.options['try multiple transports'] = false;
    this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);

    this.on('connect', maybeReconnect);
  };

})(
    'undefined' != typeof io ? io : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
  , this
);
/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io) {

  /**
   * Expose constructor.
   */

  exports.SocketNamespace = SocketNamespace;

  /**
   * Socket namespace constructor.
   *
   * @constructor
   * @api public
   */

  function SocketNamespace (socket, name) {
    this.socket = socket;
    this.name = name || '';
    this.flags = {};
    this.json = new Flag(this, 'json');
    this.ackPackets = 0;
    this.acks = {};
  };

  /**
   * Apply EventEmitter mixin.
   */

  io.util.mixin(SocketNamespace, io.EventEmitter);

  /**
   * Copies emit since we override it
   *
   * @api private
   */

  SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;

  /**
   * Creates a new namespace, by proxying the request to the socket. This
   * allows us to use the synax as we do on the server.
   *
   * @api public
   */

  SocketNamespace.prototype.of = function () {
    return this.socket.of.apply(this.socket, arguments);
  };

  /**
   * Sends a packet.
   *
   * @api private
   */

  SocketNamespace.prototype.packet = function (packet) {
    packet.endpoint = this.name;
    this.socket.packet(packet);
    this.flags = {};
    return this;
  };

  /**
   * Sends a message
   *
   * @api public
   */

  SocketNamespace.prototype.send = function (data, fn) {
    var packet = {
        type: this.flags.json ? 'json' : 'message'
      , data: data
    };

    if ('function' == typeof fn) {
      packet.id = ++this.ackPackets;
      packet.ack = true;
      this.acks[packet.id] = fn;
    }

    return this.packet(packet);
  };

  /**
   * Emits an event
   *
   * @api public
   */
  
  SocketNamespace.prototype.emit = function (name) {
    var args = Array.prototype.slice.call(arguments, 1)
      , lastArg = args[args.length - 1]
      , packet = {
            type: 'event'
          , name: name
        };

    if ('function' == typeof lastArg) {
      packet.id = ++this.ackPackets;
      packet.ack = 'data';
      this.acks[packet.id] = lastArg;
      args = args.slice(0, args.length - 1);
    }

    packet.args = args;

    return this.packet(packet);
  };

  /**
   * Disconnects the namespace
   *
   * @api private
   */

  SocketNamespace.prototype.disconnect = function () {
    if (this.name === '') {
      this.socket.disconnect();
    } else {
      this.packet({ type: 'disconnect' });
      this.$emit('disconnect');
    }

    return this;
  };

  /**
   * Handles a packet
   *
   * @api private
   */

  SocketNamespace.prototype.onPacket = function (packet) {
    var self = this;

    function ack () {
      self.packet({
          type: 'ack'
        , args: io.util.toArray(arguments)
        , ackId: packet.id
      });
    };

    switch (packet.type) {
      case 'connect':
        this.$emit('connect');
        break;

      case 'disconnect':
        if (this.name === '') {
          this.socket.onDisconnect(packet.reason || 'booted');
        } else {
          this.$emit('disconnect', packet.reason);
        }
        break;

      case 'message':
      case 'json':
        var params = ['message', packet.data];

        if (packet.ack == 'data') {
          params.push(ack);
        } else if (packet.ack) {
          this.packet({ type: 'ack', ackId: packet.id });
        }

        this.$emit.apply(this, params);
        break;

      case 'event':
        var params = [packet.name].concat(packet.args);

        if (packet.ack == 'data')
          params.push(ack);

        this.$emit.apply(this, params);
        break;

      case 'ack':
        if (this.acks[packet.ackId]) {
          this.acks[packet.ackId].apply(this, packet.args);
          delete this.acks[packet.ackId];
        }
        break;

      case 'error':
        if (packet.advice){
          this.socket.onError(packet);
        } else {
          if (packet.reason == 'unauthorized') {
            this.$emit('connect_failed', packet.reason);
          } else {
            this.$emit('error', packet.reason);
          }
        }
        break;
    }
  };

  /**
   * Flag interface.
   *
   * @api private
   */

  function Flag (nsp, name) {
    this.namespace = nsp;
    this.name = name;
  };

  /**
   * Send a message
   *
   * @api public
   */

  Flag.prototype.send = function () {
    this.namespace.flags[this.name] = true;
    this.namespace.send.apply(this.namespace, arguments);
  };

  /**
   * Emit an event
   *
   * @api public
   */

  Flag.prototype.emit = function () {
    this.namespace.flags[this.name] = true;
    this.namespace.emit.apply(this.namespace, arguments);
  };

})(
    'undefined' != typeof io ? io : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
);

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io, global) {

  /**
   * Expose constructor.
   */

  exports.websocket = WS;

  /**
   * The WebSocket transport uses the HTML5 WebSocket API to establish an
   * persistent connection with the Socket.IO server. This transport will also
   * be inherited by the FlashSocket fallback as it provides a API compatible
   * polyfill for the WebSockets.
   *
   * @constructor
   * @extends {io.Transport}
   * @api public
   */

  function WS (socket) {
    io.Transport.apply(this, arguments);
  };

  /**
   * Inherits from Transport.
   */

  io.util.inherit(WS, io.Transport);

  /**
   * Transport name
   *
   * @api public
   */

  WS.prototype.name = 'websocket';

  /**
   * Initializes a new `WebSocket` connection with the Socket.IO server. We attach
   * all the appropriate listeners to handle the responses from the server.
   *
   * @returns {Transport}
   * @api public
   */

  WS.prototype.open = function () {
    var query = io.util.query(this.socket.options.query)
      , self = this
      , Socket


    if (!Socket) {
      Socket = global.MozWebSocket || global.WebSocket;
    }

    this.websocket = new Socket(this.prepareUrl() + query);

    this.websocket.onopen = function () {
      self.onOpen();
      self.socket.setBuffer(false);
    };
    this.websocket.onmessage = function (ev) {
      self.onData(ev.data);
    };
    this.websocket.onclose = function () {
      self.onClose();
      self.socket.setBuffer(true);
    };
    this.websocket.onerror = function (e) {
      self.onError(e);
    };

    return this;
  };

  /**
   * Send a message to the Socket.IO server. The message will automatically be
   * encoded in the correct message format.
   *
   * @returns {Transport}
   * @api public
   */

  // Do to a bug in the current IDevices browser, we need to wrap the send in a 
  // setTimeout, when they resume from sleeping the browser will crash if 
  // we don't allow the browser time to detect the socket has been closed
  if (io.util.ua.iDevice) {
    WS.prototype.send = function (data) {
      var self = this;
      setTimeout(function() {
         self.websocket.send(data);
      },0);
      return this;
    };
  } else {
    WS.prototype.send = function (data) {
      this.websocket.send(data);
      return this;
    };
  }

  /**
   * Payload
   *
   * @api private
   */

  WS.prototype.payload = function (arr) {
    for (var i = 0, l = arr.length; i < l; i++) {
      this.packet(arr[i]);
    }
    return this;
  };

  /**
   * Disconnect the established `WebSocket` connection.
   *
   * @returns {Transport}
   * @api public
   */

  WS.prototype.close = function () {
    this.websocket.close();
    return this;
  };

  /**
   * Handle the errors that `WebSocket` might be giving when we
   * are attempting to connect or send messages.
   *
   * @param {Error} e The error.
   * @api private
   */

  WS.prototype.onError = function (e) {
    this.socket.onError(e);
  };

  /**
   * Returns the appropriate scheme for the URI generation.
   *
   * @api private
   */
  WS.prototype.scheme = function () {
    return this.socket.options.secure ? 'wss' : 'ws';
  };

  /**
   * Checks if the browser has support for native `WebSockets` and that
   * it's not the polyfill created for the FlashSocket transport.
   *
   * @return {Boolean}
   * @api public
   */

  WS.check = function () {
    return ('WebSocket' in global && !('__addTask' in WebSocket))
          || 'MozWebSocket' in global;
  };

  /**
   * Check if the `WebSocket` transport support cross domain communications.
   *
   * @returns {Boolean}
   * @api public
   */

  WS.xdomainCheck = function () {
    return true;
  };

  /**
   * Add the transport to your public io.transports array.
   *
   * @api private
   */

  io.transports.push('websocket');

})(
    'undefined' != typeof io ? io.Transport : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
  , this
);

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io) {

  /**
   * Expose constructor.
   */

  exports.flashsocket = Flashsocket;

  /**
   * The FlashSocket transport. This is a API wrapper for the HTML5 WebSocket
   * specification. It uses a .swf file to communicate with the server. If you want
   * to serve the .swf file from a other server than where the Socket.IO script is
   * coming from you need to use the insecure version of the .swf. More information
   * about this can be found on the github page.
   *
   * @constructor
   * @extends {io.Transport.websocket}
   * @api public
   */

  function Flashsocket () {
    io.Transport.websocket.apply(this, arguments);
  };

  /**
   * Inherits from Transport.
   */

  io.util.inherit(Flashsocket, io.Transport.websocket);

  /**
   * Transport name
   *
   * @api public
   */

  Flashsocket.prototype.name = 'flashsocket';

  /**
   * Disconnect the established `FlashSocket` connection. This is done by adding a 
   * new task to the FlashSocket. The rest will be handled off by the `WebSocket` 
   * transport.
   *
   * @returns {Transport}
   * @api public
   */

  Flashsocket.prototype.open = function () {
    var self = this
      , args = arguments;

    WebSocket.__addTask(function () {
      io.Transport.websocket.prototype.open.apply(self, args);
    });
    return this;
  };
  
  /**
   * Sends a message to the Socket.IO server. This is done by adding a new
   * task to the FlashSocket. The rest will be handled off by the `WebSocket` 
   * transport.
   *
   * @returns {Transport}
   * @api public
   */

  Flashsocket.prototype.send = function () {
    var self = this, args = arguments;
    WebSocket.__addTask(function () {
      io.Transport.websocket.prototype.send.apply(self, args);
    });
    return this;
  };

  /**
   * Disconnects the established `FlashSocket` connection.
   *
   * @returns {Transport}
   * @api public
   */

  Flashsocket.prototype.close = function () {
    WebSocket.__tasks.length = 0;
    io.Transport.websocket.prototype.close.call(this);
    return this;
  };

  /**
   * The WebSocket fall back needs to append the flash container to the body
   * element, so we need to make sure we have access to it. Or defer the call
   * until we are sure there is a body element.
   *
   * @param {Socket} socket The socket instance that needs a transport
   * @param {Function} fn The callback
   * @api private
   */

  Flashsocket.prototype.ready = function (socket, fn) {
    function init () {
      var options = socket.options
        , port = options['flash policy port']
        , path = [
              'http' + (options.secure ? 's' : '') + ':/'
            , options.host + ':' + options.port
            , options.resource
            , 'static/flashsocket'
            , 'WebSocketMain' + (socket.isXDomain() ? 'Insecure' : '') + '.swf'
          ];

      // Only start downloading the swf file when the checked that this browser
      // actually supports it
      if (!Flashsocket.loaded) {
        if (typeof WEB_SOCKET_SWF_LOCATION === 'undefined') {
          // Set the correct file based on the XDomain settings
          WEB_SOCKET_SWF_LOCATION = path.join('/');
        }

        if (port !== 843) {
          WebSocket.loadFlashPolicyFile('xmlsocket://' + options.host + ':' + port);
        }

        WebSocket.__initialize();
        Flashsocket.loaded = true;
      }

      fn.call(self);
    }

    var self = this;
    if (document.body) return init();

    io.util.load(init);
  };

  /**
   * Check if the FlashSocket transport is supported as it requires that the Adobe
   * Flash Player plug-in version `10.0.0` or greater is installed. And also check if
   * the polyfill is correctly loaded.
   *
   * @returns {Boolean}
   * @api public
   */

  Flashsocket.check = function () {
    if (
        typeof WebSocket == 'undefined'
      || !('__initialize' in WebSocket) || !swfobject
    ) return false;

    return swfobject.getFlashPlayerVersion().major >= 10;
  };

  /**
   * Check if the FlashSocket transport can be used as cross domain / cross origin 
   * transport. Because we can't see which type (secure or insecure) of .swf is used
   * we will just return true.
   *
   * @returns {Boolean}
   * @api public
   */

  Flashsocket.xdomainCheck = function () {
    return true;
  };

  /**
   * Disable AUTO_INITIALIZATION
   */

  if (typeof window != 'undefined') {
    WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true;
  }

  /**
   * Add the transport to your public io.transports array.
   *
   * @api private
   */

  io.transports.push('flashsocket');
})(
    'undefined' != typeof io ? io.Transport : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
);
/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
if ('undefined' != typeof window) {
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O[(['Active'].concat('Object').join('X'))]!=D){try{var ad=new window[(['Active'].concat('Object').join('X'))](W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?(['Active'].concat('').join('X')):"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
}
// Copyright: Hiroshi Ichikawa <http://gimite.net/en/>
// License: New BSD License
// Reference: http://dev.w3.org/html5/websockets/
// Reference: http://tools.ietf.org/html/draft-hixie-thewebsocketprotocol

(function() {
  
  if ('undefined' == typeof window || window.WebSocket) return;

  var console = window.console;
  if (!console || !console.log || !console.error) {
    console = {log: function(){ }, error: function(){ }};
  }
  
  if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
    console.error("Flash Player >= 10.0.0 is required.");
    return;
  }
  if (location.protocol == "file:") {
    console.error(
      "WARNING: web-socket-js doesn't work in file:///... URL " +
      "unless you set Flash Security Settings properly. " +
      "Open the page via Web server i.e. http://...");
  }

  /**
   * This class represents a faux web socket.
   * @param {string} url
   * @param {array or string} protocols
   * @param {string} proxyHost
   * @param {int} proxyPort
   * @param {string} headers
   */
  WebSocket = function(url, protocols, proxyHost, proxyPort, headers) {
    var self = this;
    self.__id = WebSocket.__nextId++;
    WebSocket.__instances[self.__id] = self;
    self.readyState = WebSocket.CONNECTING;
    self.bufferedAmount = 0;
    self.__events = {};
    if (!protocols) {
      protocols = [];
    } else if (typeof protocols == "string") {
      protocols = [protocols];
    }
    // Uses setTimeout() to make sure __createFlash() runs after the caller sets ws.onopen etc.
    // Otherwise, when onopen fires immediately, onopen is called before it is set.
    setTimeout(function() {
      WebSocket.__addTask(function() {
        WebSocket.__flash.create(
            self.__id, url, protocols, proxyHost || null, proxyPort || 0, headers || null);
      });
    }, 0);
  };

  /**
   * Send data to the web socket.
   * @param {string} data  The data to send to the socket.
   * @return {boolean}  True for success, false for failure.
   */
  WebSocket.prototype.send = function(data) {
    if (this.readyState == WebSocket.CONNECTING) {
      throw "INVALID_STATE_ERR: Web Socket connection has not been established";
    }
    // We use encodeURIComponent() here, because FABridge doesn't work if
    // the argument includes some characters. We don't use escape() here
    // because of this:
    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Guide/Functions#escape_and_unescape_Functions
    // But it looks decodeURIComponent(encodeURIComponent(s)) doesn't
    // preserve all Unicode characters either e.g. "\uffff" in Firefox.
    // Note by wtritch: Hopefully this will not be necessary using ExternalInterface.  Will require
    // additional testing.
    var result = WebSocket.__flash.send(this.__id, encodeURIComponent(data));
    if (result < 0) { // success
      return true;
    } else {
      this.bufferedAmount += result;
      return false;
    }
  };

  /**
   * Close this web socket gracefully.
   */
  WebSocket.prototype.close = function() {
    if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
      return;
    }
    this.readyState = WebSocket.CLOSING;
    WebSocket.__flash.close(this.__id);
  };

  /**
   * Implementation of {@link <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration">DOM 2 EventTarget Interface</a>}
   *
   * @param {string} type
   * @param {function} listener
   * @param {boolean} useCapture
   * @return void
   */
  WebSocket.prototype.addEventListener = function(type, listener, useCapture) {
    if (!(type in this.__events)) {
      this.__events[type] = [];
    }
    this.__events[type].push(listener);
  };

  /**
   * Implementation of {@link <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration">DOM 2 EventTarget Interface</a>}
   *
   * @param {string} type
   * @param {function} listener
   * @param {boolean} useCapture
   * @return void
   */
  WebSocket.prototype.removeEventListener = function(type, listener, useCapture) {
    if (!(type in this.__events)) return;
    var events = this.__events[type];
    for (var i = events.length - 1; i >= 0; --i) {
      if (events[i] === listener) {
        events.splice(i, 1);
        break;
      }
    }
  };

  /**
   * Implementation of {@link <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration">DOM 2 EventTarget Interface</a>}
   *
   * @param {Event} event
   * @return void
   */
  WebSocket.prototype.dispatchEvent = function(event) {
    var events = this.__events[event.type] || [];
    for (var i = 0; i < events.length; ++i) {
      events[i](event);
    }
    var handler = this["on" + event.type];
    if (handler) handler(event);
  };

  /**
   * Handles an event from Flash.
   * @param {Object} flashEvent
   */
  WebSocket.prototype.__handleEvent = function(flashEvent) {
    if ("readyState" in flashEvent) {
      this.readyState = flashEvent.readyState;
    }
    if ("protocol" in flashEvent) {
      this.protocol = flashEvent.protocol;
    }
    
    var jsEvent;
    if (flashEvent.type == "open" || flashEvent.type == "error") {
      jsEvent = this.__createSimpleEvent(flashEvent.type);
    } else if (flashEvent.type == "close") {
      // TODO implement jsEvent.wasClean
      jsEvent = this.__createSimpleEvent("close");
    } else if (flashEvent.type == "message") {
      var data = decodeURIComponent(flashEvent.message);
      jsEvent = this.__createMessageEvent("message", data);
    } else {
      throw "unknown event type: " + flashEvent.type;
    }
    
    this.dispatchEvent(jsEvent);
  };
  
  WebSocket.prototype.__createSimpleEvent = function(type) {
    if (document.createEvent && window.Event) {
      var event = document.createEvent("Event");
      event.initEvent(type, false, false);
      return event;
    } else {
      return {type: type, bubbles: false, cancelable: false};
    }
  };
  
  WebSocket.prototype.__createMessageEvent = function(type, data) {
    if (document.createEvent && window.MessageEvent && !window.opera) {
      var event = document.createEvent("MessageEvent");
      event.initMessageEvent("message", false, false, data, null, null, window, null);
      return event;
    } else {
      // IE and Opera, the latter one truncates the data parameter after any 0x00 bytes.
      return {type: type, data: data, bubbles: false, cancelable: false};
    }
  };
  
  /**
   * Define the WebSocket readyState enumeration.
   */
  WebSocket.CONNECTING = 0;
  WebSocket.OPEN = 1;
  WebSocket.CLOSING = 2;
  WebSocket.CLOSED = 3;

  WebSocket.__flash = null;
  WebSocket.__instances = {};
  WebSocket.__tasks = [];
  WebSocket.__nextId = 0;
  
  /**
   * Load a new flash security policy file.
   * @param {string} url
   */
  WebSocket.loadFlashPolicyFile = function(url){
    WebSocket.__addTask(function() {
      WebSocket.__flash.loadManualPolicyFile(url);
    });
  };

  /**
   * Loads WebSocketMain.swf and creates WebSocketMain object in Flash.
   */
  WebSocket.__initialize = function() {
    if (WebSocket.__flash) return;
    
    if (WebSocket.__swfLocation) {
      // For backword compatibility.
      window.WEB_SOCKET_SWF_LOCATION = WebSocket.__swfLocation;
    }
    if (!window.WEB_SOCKET_SWF_LOCATION) {
      console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
      return;
    }
    var container = document.createElement("div");
    container.id = "webSocketContainer";
    // Hides Flash box. We cannot use display: none or visibility: hidden because it prevents
    // Flash from loading at least in IE. So we move it out of the screen at (-100, -100).
    // But this even doesn't work with Flash Lite (e.g. in Droid Incredible). So with Flash
    // Lite, we put it at (0, 0). This shows 1x1 box visible at left-top corner but this is
    // the best we can do as far as we know now.
    container.style.position = "absolute";
    if (WebSocket.__isFlashLite()) {
      container.style.left = "0px";
      container.style.top = "0px";
    } else {
      container.style.left = "-100px";
      container.style.top = "-100px";
    }
    var holder = document.createElement("div");
    holder.id = "webSocketFlash";
    container.appendChild(holder);
    document.body.appendChild(container);
    // See this article for hasPriority:
    // http://help.adobe.com/en_US/as3/mobile/WS4bebcd66a74275c36cfb8137124318eebc6-7ffd.html
    swfobject.embedSWF(
      WEB_SOCKET_SWF_LOCATION,
      "webSocketFlash",
      "1" /* width */,
      "1" /* height */,
      "10.0.0" /* SWF version */,
      null,
      null,
      {hasPriority: true, swliveconnect : true, allowScriptAccess: "always"},
      null,
      function(e) {
        if (!e.success) {
          console.error("[WebSocket] swfobject.embedSWF failed");
        }
      });
  };
  
  /**
   * Called by Flash to notify JS that it's fully loaded and ready
   * for communication.
   */
  WebSocket.__onFlashInitialized = function() {
    // We need to set a timeout here to avoid round-trip calls
    // to flash during the initialization process.
    setTimeout(function() {
      WebSocket.__flash = document.getElementById("webSocketFlash");
      WebSocket.__flash.setCallerUrl(location.href);
      WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);
      for (var i = 0; i < WebSocket.__tasks.length; ++i) {
        WebSocket.__tasks[i]();
      }
      WebSocket.__tasks = [];
    }, 0);
  };
  
  /**
   * Called by Flash to notify WebSockets events are fired.
   */
  WebSocket.__onFlashEvent = function() {
    setTimeout(function() {
      try {
        // Gets events using receiveEvents() instead of getting it from event object
        // of Flash event. This is to make sure to keep message order.
        // It seems sometimes Flash events don't arrive in the same order as they are sent.
        var events = WebSocket.__flash.receiveEvents();
        for (var i = 0; i < events.length; ++i) {
          WebSocket.__instances[events[i].webSocketId].__handleEvent(events[i]);
        }
      } catch (e) {
        console.error(e);
      }
    }, 0);
    return true;
  };
  
  // Called by Flash.
  WebSocket.__log = function(message) {
    console.log(decodeURIComponent(message));
  };
  
  // Called by Flash.
  WebSocket.__error = function(message) {
    console.error(decodeURIComponent(message));
  };
  
  WebSocket.__addTask = function(task) {
    if (WebSocket.__flash) {
      task();
    } else {
      WebSocket.__tasks.push(task);
    }
  };
  
  /**
   * Test if the browser is running flash lite.
   * @return {boolean} True if flash lite is running, false otherwise.
   */
  WebSocket.__isFlashLite = function() {
    if (!window.navigator || !window.navigator.mimeTypes) {
      return false;
    }
    var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
    if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
      return false;
    }
    return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false;
  };
  
  if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
    if (window.addEventListener) {
      window.addEventListener("load", function(){
        WebSocket.__initialize();
      }, false);
    } else {
      window.attachEvent("onload", function(){
        WebSocket.__initialize();
      });
    }
  }
  
})();

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io, global) {

  /**
   * Expose constructor.
   *
   * @api public
   */

  exports.XHR = XHR;

  /**
   * XHR constructor
   *
   * @costructor
   * @api public
   */

  function XHR (socket) {
    if (!socket) return;

    io.Transport.apply(this, arguments);
    this.sendBuffer = [];
  };

  /**
   * Inherits from Transport.
   */

  io.util.inherit(XHR, io.Transport);

  /**
   * Establish a connection
   *
   * @returns {Transport}
   * @api public
   */

  XHR.prototype.open = function () {
    this.socket.setBuffer(false);
    this.onOpen();
    this.get();

    // we need to make sure the request succeeds since we have no indication
    // whether the request opened or not until it succeeded.
    this.setCloseTimeout();

    return this;
  };

  /**
   * Check if we need to send data to the Socket.IO server, if we have data in our
   * buffer we encode it and forward it to the `post` method.
   *
   * @api private
   */

  XHR.prototype.payload = function (payload) {
    var msgs = [];

    for (var i = 0, l = payload.length; i < l; i++) {
      msgs.push(io.parser.encodePacket(payload[i]));
    }

    this.send(io.parser.encodePayload(msgs));
  };

  /**
   * Send data to the Socket.IO server.
   *
   * @param data The message
   * @returns {Transport}
   * @api public
   */

  XHR.prototype.send = function (data) {
    this.post(data);
    return this;
  };

  /**
   * Posts a encoded message to the Socket.IO server.
   *
   * @param {String} data A encoded message.
   * @api private
   */

  function empty () { };

  XHR.prototype.post = function (data) {
    var self = this;
    this.socket.setBuffer(true);

    function stateChange () {
      if (this.readyState == 4) {
        this.onreadystatechange = empty;
        self.posting = false;

        if (this.status == 200){
          self.socket.setBuffer(false);
        } else {
          self.onClose();
        }
      }
    }

    function onload () {
      this.onload = empty;
      self.socket.setBuffer(false);
    };

    this.sendXHR = this.request('POST');

    if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
      this.sendXHR.onload = this.sendXHR.onerror = onload;
    } else {
      this.sendXHR.onreadystatechange = stateChange;
    }

    this.sendXHR.send(data);
  };

  /**
   * Disconnects the established `XHR` connection.
   *
   * @returns {Transport}
   * @api public
   */

  XHR.prototype.close = function () {
    this.onClose();
    return this;
  };

  /**
   * Generates a configured XHR request
   *
   * @param {String} url The url that needs to be requested.
   * @param {String} method The method the request should use.
   * @returns {XMLHttpRequest}
   * @api private
   */

  XHR.prototype.request = function (method) {
    var req = io.util.request(this.socket.isXDomain())
      , query = io.util.query(this.socket.options.query, 't=' + +new Date);

    req.open(method || 'GET', this.prepareUrl() + query, true);

    if (method == 'POST') {
      try {
        if (req.setRequestHeader) {
          req.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        } else {
          // XDomainRequest
          req.contentType = 'text/plain';
        }
      } catch (e) {}
    }

    return req;
  };

  /**
   * Returns the scheme to use for the transport URLs.
   *
   * @api private
   */

  XHR.prototype.scheme = function () {
    return this.socket.options.secure ? 'https' : 'http';
  };

  /**
   * Check if the XHR transports are supported
   *
   * @param {Boolean} xdomain Check if we support cross domain requests.
   * @returns {Boolean}
   * @api public
   */

  XHR.check = function (socket, xdomain) {
    try {
      var request = io.util.request(xdomain),
          usesXDomReq = (global.XDomainRequest && request instanceof XDomainRequest),
          socketProtocol = (socket && socket.options && socket.options.secure ? 'https:' : 'http:'),
          isXProtocol = (global.location && socketProtocol != global.location.protocol);
      if (request && !(usesXDomReq && isXProtocol)) {
        return true;
      }
    } catch(e) {}

    return false;
  };

  /**
   * Check if the XHR transport supports cross domain requests.
   *
   * @returns {Boolean}
   * @api public
   */

  XHR.xdomainCheck = function (socket) {
    return XHR.check(socket, true);
  };

})(
    'undefined' != typeof io ? io.Transport : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
  , this
);
/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io) {

  /**
   * Expose constructor.
   */

  exports.htmlfile = HTMLFile;

  /**
   * The HTMLFile transport creates a `forever iframe` based transport
   * for Internet Explorer. Regular forever iframe implementations will 
   * continuously trigger the browsers buzy indicators. If the forever iframe
   * is created inside a `htmlfile` these indicators will not be trigged.
   *
   * @constructor
   * @extends {io.Transport.XHR}
   * @api public
   */

  function HTMLFile (socket) {
    io.Transport.XHR.apply(this, arguments);
  };

  /**
   * Inherits from XHR transport.
   */

  io.util.inherit(HTMLFile, io.Transport.XHR);

  /**
   * Transport name
   *
   * @api public
   */

  HTMLFile.prototype.name = 'htmlfile';

  /**
   * Creates a new Ac...eX `htmlfile` with a forever loading iframe
   * that can be used to listen to messages. Inside the generated
   * `htmlfile` a reference will be made to the HTMLFile transport.
   *
   * @api private
   */

  HTMLFile.prototype.get = function () {
    this.doc = new window[(['Active'].concat('Object').join('X'))]('htmlfile');
    this.doc.open();
    this.doc.write('<html></html>');
    this.doc.close();
    this.doc.parentWindow.s = this;

    var iframeC = this.doc.createElement('div');
    iframeC.className = 'socketio';

    this.doc.body.appendChild(iframeC);
    this.iframe = this.doc.createElement('iframe');

    iframeC.appendChild(this.iframe);

    var self = this
      , query = io.util.query(this.socket.options.query, 't='+ +new Date);

    this.iframe.src = this.prepareUrl() + query;

    io.util.on(window, 'unload', function () {
      self.destroy();
    });
  };

  /**
   * The Socket.IO server will write script tags inside the forever
   * iframe, this function will be used as callback for the incoming
   * information.
   *
   * @param {String} data The message
   * @param {document} doc Reference to the context
   * @api private
   */

  HTMLFile.prototype._ = function (data, doc) {
    // unescape all forward slashes. see GH-1251
    data = data.replace(/\\\//g, '/');
    this.onData(data);
    try {
      var script = doc.getElementsByTagName('script')[0];
      script.parentNode.removeChild(script);
    } catch (e) { }
  };

  /**
   * Destroy the established connection, iframe and `htmlfile`.
   * And calls the `CollectGarbage` function of Internet Explorer
   * to release the memory.
   *
   * @api private
   */

  HTMLFile.prototype.destroy = function () {
    if (this.iframe){
      try {
        this.iframe.src = 'about:blank';
      } catch(e){}

      this.doc = null;
      this.iframe.parentNode.removeChild(this.iframe);
      this.iframe = null;

      CollectGarbage();
    }
  };

  /**
   * Disconnects the established connection.
   *
   * @returns {Transport} Chaining.
   * @api public
   */

  HTMLFile.prototype.close = function () {
    this.destroy();
    return io.Transport.XHR.prototype.close.call(this);
  };

  /**
   * Checks if the browser supports this transport. The browser
   * must have an `Ac...eXObject` implementation.
   *
   * @return {Boolean}
   * @api public
   */

  HTMLFile.check = function (socket) {
    if (typeof window != "undefined" && (['Active'].concat('Object').join('X')) in window){
      try {
        var a = new window[(['Active'].concat('Object').join('X'))]('htmlfile');
        return a && io.Transport.XHR.check(socket);
      } catch(e){}
    }
    return false;
  };

  /**
   * Check if cross domain requests are supported.
   *
   * @returns {Boolean}
   * @api public
   */

  HTMLFile.xdomainCheck = function () {
    // we can probably do handling for sub-domains, we should
    // test that it's cross domain but a subdomain here
    return false;
  };

  /**
   * Add the transport to your public io.transports array.
   *
   * @api private
   */

  io.transports.push('htmlfile');

})(
    'undefined' != typeof io ? io.Transport : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
);

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io, global) {

  /**
   * Expose constructor.
   */

  exports['xhr-polling'] = XHRPolling;

  /**
   * The XHR-polling transport uses long polling XHR requests to create a
   * "persistent" connection with the server.
   *
   * @constructor
   * @api public
   */

  function XHRPolling () {
    io.Transport.XHR.apply(this, arguments);
  };

  /**
   * Inherits from XHR transport.
   */

  io.util.inherit(XHRPolling, io.Transport.XHR);

  /**
   * Merge the properties from XHR transport
   */

  io.util.merge(XHRPolling, io.Transport.XHR);

  /**
   * Transport name
   *
   * @api public
   */

  XHRPolling.prototype.name = 'xhr-polling';

  /**
   * Indicates whether heartbeats is enabled for this transport
   *
   * @api private
   */

  XHRPolling.prototype.heartbeats = function () {
    return false;
  };

  /** 
   * Establish a connection, for iPhone and Android this will be done once the page
   * is loaded.
   *
   * @returns {Transport} Chaining.
   * @api public
   */

  XHRPolling.prototype.open = function () {
    var self = this;

    io.Transport.XHR.prototype.open.call(self);
    return false;
  };

  /**
   * Starts a XHR request to wait for incoming messages.
   *
   * @api private
   */

  function empty () {};

  XHRPolling.prototype.get = function () {
    if (!this.isOpen) return;

    var self = this;

    function stateChange () {
      if (this.readyState == 4) {
        this.onreadystatechange = empty;

        if (this.status == 200) {
          self.onData(this.responseText);
          self.get();
        } else {
          self.onClose();
        }
      }
    };

    function onload () {
      this.onload = empty;
      this.onerror = empty;
      self.retryCounter = 1;
      self.onData(this.responseText);
      self.get();
    };

    function onerror () {
      self.retryCounter ++;
      if(!self.retryCounter || self.retryCounter > 3) {
        self.onClose();  
      } else {
        self.get();
      }
    };

    this.xhr = this.request();

    if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
      this.xhr.onload = onload;
      this.xhr.onerror = onerror;
    } else {
      this.xhr.onreadystatechange = stateChange;
    }

    this.xhr.send(null);
  };

  /**
   * Handle the unclean close behavior.
   *
   * @api private
   */

  XHRPolling.prototype.onClose = function () {
    io.Transport.XHR.prototype.onClose.call(this);

    if (this.xhr) {
      this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
      try {
        this.xhr.abort();
      } catch(e){}
      this.xhr = null;
    }
  };

  /**
   * Webkit based browsers show a infinit spinner when you start a XHR request
   * before the browsers onload event is called so we need to defer opening of
   * the transport until the onload event is called. Wrapping the cb in our
   * defer method solve this.
   *
   * @param {Socket} socket The socket instance that needs a transport
   * @param {Function} fn The callback
   * @api private
   */

  XHRPolling.prototype.ready = function (socket, fn) {
    var self = this;

    io.util.defer(function () {
      fn.call(self);
    });
  };

  /**
   * Add the transport to your public io.transports array.
   *
   * @api private
   */

  io.transports.push('xhr-polling');

})(
    'undefined' != typeof io ? io.Transport : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
  , this
);

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io, global) {
  /**
   * There is a way to hide the loading indicator in Firefox. If you create and
   * remove a iframe it will stop showing the current loading indicator.
   * Unfortunately we can't feature detect that and UA sniffing is evil.
   *
   * @api private
   */

  var indicator = global.document && "MozAppearance" in
    global.document.documentElement.style;

  /**
   * Expose constructor.
   */

  exports['jsonp-polling'] = JSONPPolling;

  /**
   * The JSONP transport creates an persistent connection by dynamically
   * inserting a script tag in the page. This script tag will receive the
   * information of the Socket.IO server. When new information is received
   * it creates a new script tag for the new data stream.
   *
   * @constructor
   * @extends {io.Transport.xhr-polling}
   * @api public
   */

  function JSONPPolling (socket) {
    io.Transport['xhr-polling'].apply(this, arguments);

    this.index = io.j.length;

    var self = this;

    io.j.push(function (msg) {
      self._(msg);
    });
  };

  /**
   * Inherits from XHR polling transport.
   */

  io.util.inherit(JSONPPolling, io.Transport['xhr-polling']);

  /**
   * Transport name
   *
   * @api public
   */

  JSONPPolling.prototype.name = 'jsonp-polling';

  /**
   * Posts a encoded message to the Socket.IO server using an iframe.
   * The iframe is used because script tags can create POST based requests.
   * The iframe is positioned outside of the view so the user does not
   * notice it's existence.
   *
   * @param {String} data A encoded message.
   * @api private
   */

  JSONPPolling.prototype.post = function (data) {
    var self = this
      , query = io.util.query(
             this.socket.options.query
          , 't='+ (+new Date) + '&i=' + this.index
        );

    if (!this.form) {
      var form = document.createElement('form')
        , area = document.createElement('textarea')
        , id = this.iframeId = 'socketio_iframe_' + this.index
        , iframe;

      form.className = 'socketio';
      form.style.position = 'absolute';
      form.style.top = '0px';
      form.style.left = '0px';
      form.style.display = 'none';
      form.target = id;
      form.method = 'POST';
      form.setAttribute('accept-charset', 'utf-8');
      area.name = 'd';
      form.appendChild(area);
      document.body.appendChild(form);

      this.form = form;
      this.area = area;
    }

    this.form.action = this.prepareUrl() + query;

    function complete () {
      initIframe();
      self.socket.setBuffer(false);
    };

    function initIframe () {
      if (self.iframe) {
        self.form.removeChild(self.iframe);
      }

      try {
        // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
        iframe = document.createElement('<iframe name="'+ self.iframeId +'">');
      } catch (e) {
        iframe = document.createElement('iframe');
        iframe.name = self.iframeId;
      }

      iframe.id = self.iframeId;

      self.form.appendChild(iframe);
      self.iframe = iframe;
    };

    initIframe();

    // we temporarily stringify until we figure out how to prevent
    // browsers from turning `\n` into `\r\n` in form inputs
    this.area.value = io.JSON.stringify(data);

    try {
      this.form.submit();
    } catch(e) {}

    if (this.iframe.attachEvent) {
      iframe.onreadystatechange = function () {
        if (self.iframe.readyState == 'complete') {
          complete();
        }
      };
    } else {
      this.iframe.onload = complete;
    }

    this.socket.setBuffer(true);
  };

  /**
   * Creates a new JSONP poll that can be used to listen
   * for messages from the Socket.IO server.
   *
   * @api private
   */

  JSONPPolling.prototype.get = function () {
    var self = this
      , script = document.createElement('script')
      , query = io.util.query(
             this.socket.options.query
          , 't='+ (+new Date) + '&i=' + this.index
        );

    if (this.script) {
      this.script.parentNode.removeChild(this.script);
      this.script = null;
    }

    script.async = true;
    script.src = this.prepareUrl() + query;
    script.onerror = function () {
      self.onClose();
    };

    var insertAt = document.getElementsByTagName('script')[0];
    insertAt.parentNode.insertBefore(script, insertAt);
    this.script = script;

    if (indicator) {
      setTimeout(function () {
        var iframe = document.createElement('iframe');
        document.body.appendChild(iframe);
        document.body.removeChild(iframe);
      }, 100);
    }
  };

  /**
   * Callback function for the incoming message stream from the Socket.IO server.
   *
   * @param {String} data The message
   * @api private
   */

  JSONPPolling.prototype._ = function (msg) {
    this.onData(msg);
    if (this.isOpen) {
      this.get();
    }
    return this;
  };

  /**
   * The indicator hack only works after onload
   *
   * @param {Socket} socket The socket instance that needs a transport
   * @param {Function} fn The callback
   * @api private
   */

  JSONPPolling.prototype.ready = function (socket, fn) {
    var self = this;
    if (!indicator) return fn.call(this);

    io.util.load(function () {
      fn.call(self);
    });
  };

  /**
   * Checks if browser supports this transport.
   *
   * @return {Boolean}
   * @api public
   */

  JSONPPolling.check = function () {
    return 'document' in global;
  };

  /**
   * Check if cross domain requests are supported
   *
   * @returns {Boolean}
   * @api public
   */

  JSONPPolling.xdomainCheck = function () {
    return true;
  };

  /**
   * Add the transport to your public io.transports array.
   *
   * @api private
   */

  io.transports.push('jsonp-polling');

})(
    'undefined' != typeof io ? io.Transport : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
  , this
);

if (typeof define === "function" && define.amd) {
  define([], function () { return io; });
}
})();
// This [jQuery](http://jquery.com/) plugin implements an `<iframe>`
// [transport](http://api.jquery.com/extending-ajax/#Transports) so that
// `$.ajax()` calls support the uploading of files using standard HTML file
// input fields. This is done by switching the exchange from `XMLHttpRequest`
// to a hidden `iframe` element containing a form that is submitted.

// The [source for the plugin](http://github.com/cmlenz/jquery-iframe-transport)
// is available on [Github](http://github.com/) and dual licensed under the MIT
// or GPL Version 2 licenses.

// ## Usage

// To use this plugin, you simply add an `iframe` option with the value `true`
// to the Ajax settings an `$.ajax()` call, and specify the file fields to
// include in the submssion using the `files` option, which can be a selector,
// jQuery object, or a list of DOM elements containing one or more
// `<input type="file">` elements:

//     $("#myform").submit(function() {
//         $.ajax(this.action, {
//             files: $(":file", this),
//             iframe: true
//         }).complete(function(data) {
//             console.log(data);
//         });
//     });

// The plugin will construct hidden `<iframe>` and `<form>` elements, add the
// file field(s) to that form, submit the form, and process the response.

// If you want to include other form fields in the form submission, include
// them in the `data` option, and set the `processData` option to `false`:

//     $("#myform").submit(function() {
//         $.ajax(this.action, {
//             data: $(":text", this).serializeArray(),
//             files: $(":file", this),
//             iframe: true,
//             processData: false
//         }).complete(function(data) {
//             console.log(data);
//         });
//     });

// ### Response Data Types

// As the transport does not have access to the HTTP headers of the server
// response, it is not as simple to make use of the automatic content type
// detection provided by jQuery as with regular XHR. If you can't set the
// expected response data type (for example because it may vary depending on
// the outcome of processing by the server), you will need to employ a
// workaround on the server side: Send back an HTML document containing just a
// `<textarea>` element with a `data-type` attribute that specifies the MIME
// type, and put the actual payload in the textarea:

//     <textarea data-type="application/json">
//       {"ok": true, "message": "Thanks so much"}
//     </textarea>

// The iframe transport plugin will detect this and pass the value of the
// `data-type` attribute on to jQuery as if it was the "Content-Type" response
// header, thereby enabling the same kind of conversions that jQuery applies
// to regular responses. For the example above you should get a Javascript
// object as the `data` parameter of the `complete` callback, with the
// properties `ok: true` and `message: "Thanks so much"`.

// ### Handling Server Errors

// Another problem with using an `iframe` for file uploads is that it is
// impossible for the javascript code to determine the HTTP status code of the
// servers response. Effectively, all of the calls you make will look like they
// are getting successful responses, and thus invoke the `done()` or
// `complete()` callbacks. You can only determine communicate problems using
// the content of the response payload. For example, consider using a JSON
// response such as the following to indicate a problem with an uploaded file:

//     <textarea data-type="application/json">
//       {"ok": false, "message": "Please only upload reasonably sized files."}
//     </textarea>

// ### Compatibility

// This plugin has primarily been tested on Safari 5 (or later), Firefox 4 (or
// later), and Internet Explorer (all the way back to version 6). While I
// haven't found any issues with it so far, I'm fairly sure it still doesn't
// work around all the quirks in all different browsers. But the code is still
// pretty simple overall, so you should be able to fix it and contribute a
// patch :)

// ## Annotated Source

(function($, undefined) {
  "use strict";

  // Register a prefilter that checks whether the `iframe` option is set, and
  // switches to the "iframe" data type if it is `true`.
  $.ajaxPrefilter(function(options, origOptions, jqXHR) {
    if (options.iframe) {
      options.originalURL = options.url;
      return "iframe";
    }
  });

  // Register a transport for the "iframe" data type. It will only activate
  // when the "files" option has been set to a non-empty list of enabled file
  // inputs.
  $.ajaxTransport("iframe", function(options, origOptions, jqXHR) {
    var form = null,
        iframe = null,
        name = "iframe-" + $.now(),
        files = $(options.files).filter(":file:enabled"),
        markers = null,
        accepts = null;

    // This function gets called after a successful submission or an abortion
    // and should revert all changes made to the page to enable the
    // submission via this transport.
    function cleanUp() {
      markers.prop("disabled", false);
      form.remove();
      iframe.one("load", function() { iframe.remove(); });
      iframe.attr("src", "javascript:false;");
    }

    // Remove "iframe" from the data types list so that further processing is
    // based on the content type returned by the server, without attempting an
    // (unsupported) conversion from "iframe" to the actual type.
    options.dataTypes.shift();

    // Use the data from the original AJAX options, as it doesn't seem to be 
    // copied over since jQuery 1.7.
    // See https://github.com/cmlenz/jquery-iframe-transport/issues/6
    options.data = origOptions.data;

    if (files.length) {
      form = $("<form enctype='multipart/form-data' method='post'></form>").
        hide().attr({action: options.originalURL, target: name});

      // If there is any additional data specified via the `data` option,
      // we add it as hidden fields to the form. This (currently) requires
      // the `processData` option to be set to false so that the data doesn't
      // get serialized to a string.
      if (typeof(options.data) === "string" && options.data.length > 0) {
        $.error("data must not be serialized");
      }
      $.each(options.data || {}, function(name, value) {
        if ($.isPlainObject(value)) {
          name = value.name;
          value = value.value;
        }
        $("<input type='hidden' />").attr({name:  name, value: value}).
          appendTo(form);
      });

      // Add a hidden `X-Requested-With` field with the value `IFrame` to the
      // field, to help server-side code to determine that the upload happened
      // through this transport.
      $("<input type='hidden' value='IFrame' name='X-Requested-With' />").
        appendTo(form);

      // Borrowed straight from the JQuery source.
      // Provides a way of specifying the accepted data type similar to the
      // HTTP "Accept" header
      if (options.dataTypes[0] && options.accepts[options.dataTypes[0]]) {
        accepts = options.accepts[options.dataTypes[0]] +
                  (options.dataTypes[0] !== "*" ? ", */*; q=0.01" : "");
      } else {
        accepts = options.accepts["*"];
      }
      $("<input type='hidden' name='X-HTTP-Accept'>").
        attr("value", accepts).appendTo(form);

      // Move the file fields into the hidden form, but first remember their
      // original locations in the document by replacing them with disabled
      // clones. This should also avoid introducing unwanted changes to the
      // page layout during submission.
      markers = files.after(function(idx) {
        return $(this).clone().prop("disabled", true);
      }).next();
      files.appendTo(form);

      return {

        // The `send` function is called by jQuery when the request should be
        // sent.
        send: function(headers, completeCallback) {
          iframe = $("<iframe src='javascript:false;' name='" + name +
            "' id='" + name + "' style='display:none'></iframe>");

          // The first load event gets fired after the iframe has been injected
          // into the DOM, and is used to prepare the actual submission.
          iframe.one("load", function() {

            // The second load event gets fired when the response to the form
            // submission is received. The implementation detects whether the
            // actual payload is embedded in a `<textarea>` element, and
            // prepares the required conversions to be made in that case.
            iframe.one("load", function() {
              var doc = this.contentWindow ? this.contentWindow.document :
                (this.contentDocument ? this.contentDocument : this.document),
                root = doc.documentElement ? doc.documentElement : doc.body,
                textarea = root.getElementsByTagName("textarea")[0],
                type = textarea && textarea.getAttribute("data-type") || null,
                status = textarea && textarea.getAttribute("data-status") || 200,
                statusText = textarea && textarea.getAttribute("data-statusText") || "OK",
                content = {
                  html: root.innerHTML,
                  text: type ?
                    textarea.value :
                    root ? (root.textContent || root.innerText) : null
                };
              cleanUp();
              completeCallback(status, statusText, content, type ?
                ("Content-Type: " + type) :
                null);
            });

            // Now that the load handler has been set up, submit the form.
            form[0].submit();
          });

          // After everything has been set up correctly, the form and iframe
          // get injected into the DOM so that the submission can be
          // initiated.
          $("body").append(form, iframe);
        },

        // The `abort` function is called by jQuery when the request should be
        // aborted.
        abort: function() {
          if (iframe !== null) {
            iframe.unbind("load").attr("src", "javascript:false;");
            cleanUp();
          }
        }

      };
    }
  });

})(jQuery);
/**
* DD_belatedPNG: Adds IE6 support: PNG images for CSS background-image and HTML <IMG/>.
* Author: Drew Diller
* Email: drew.diller@gmail.com
* URL: http://www.dillerdesign.com/experiment/DD_belatedPNG/
* Version: 0.0.8a
* Licensed under the MIT License: http://dillerdesign.com/experiment/DD_belatedPNG/#license
*
* Example usage:
* DD_belatedPNG.fix('.png_bg'); // argument is a CSS selector
* DD_belatedPNG.fixPng( someNode ); // argument is an HTMLDomElement
**/

/*
PLEASE READ:
Absolutely everything in this script is SILLY.  I know this.  IE's rendering of certain pixels doesn't make sense, so neither does this code!
*/

var DD_belatedPNG = {
	ns: 'DD_belatedPNG',
	imgSize: {},
	delay: 10,
	nodesFixed: 0,
	createVmlNameSpace: function () { /* enable VML */
		if (document.namespaces && !document.namespaces[this.ns]) {
			document.namespaces.add(this.ns, 'urn:schemas-microsoft-com:vml');
		}
	},
	createVmlStyleSheet: function () { /* style VML, enable behaviors */
		/*
			Just in case lots of other developers have added
			lots of other stylesheets using document.createStyleSheet
			and hit the 31-limit mark, let's not use that method!
			further reading: http://msdn.microsoft.com/en-us/library/ms531194(VS.85).aspx
		*/
		var screenStyleSheet, printStyleSheet;
		screenStyleSheet = document.createElement('style');
		screenStyleSheet.setAttribute('media', 'screen');
		document.documentElement.firstChild.insertBefore(screenStyleSheet, document.documentElement.firstChild.firstChild);
		if (screenStyleSheet.styleSheet) {
			screenStyleSheet = screenStyleSheet.styleSheet;
			screenStyleSheet.addRule(this.ns + '\\:*', '{behavior:url(#default#VML)}');
			screenStyleSheet.addRule(this.ns + '\\:shape', 'position:absolute;');
			screenStyleSheet.addRule('img.' + this.ns + '_sizeFinder', 'behavior:none; border:none; position:absolute; z-index:-1; top:-10000px; visibility:hidden;'); /* large negative top value for avoiding vertical scrollbars for large images, suggested by James O'Brien, http://www.thanatopsic.org/hendrik/ */
			this.screenStyleSheet = screenStyleSheet;
			
			/* Add a print-media stylesheet, for preventing VML artifacts from showing up in print (including preview). */
			/* Thanks to R閙i Pr関ost for automating this! */
			printStyleSheet = document.createElement('style');
			printStyleSheet.setAttribute('media', 'print');
			document.documentElement.firstChild.insertBefore(printStyleSheet, document.documentElement.firstChild.firstChild);
			printStyleSheet = printStyleSheet.styleSheet;
			printStyleSheet.addRule(this.ns + '\\:*', '{display: none !important;}');
			printStyleSheet.addRule('img.' + this.ns + '_sizeFinder', '{display: none !important;}');
		}
	},
	readPropertyChange: function () {
		var el, display, v;
		el = event.srcElement;
		if (!el.vmlInitiated) {
			return;
		}
		if (event.propertyName.search('background') != -1 || event.propertyName.search('border') != -1) {
			DD_belatedPNG.applyVML(el);
		}
		if (event.propertyName == 'style.display') {
			display = (el.currentStyle.display == 'none') ? 'none' : 'block';
			for (v in el.vml) {
				if (el.vml.hasOwnProperty(v)) {
					el.vml[v].shape.style.display = display;
				}
			}
		}
		if (event.propertyName.search('filter') != -1) {
			DD_belatedPNG.vmlOpacity(el);
		}
	},
	vmlOpacity: function (el) {
		if (el.currentStyle.filter.search('lpha') != -1) {
			var trans = el.currentStyle.filter;
			trans = parseInt(trans.substring(trans.lastIndexOf('=')+1, trans.lastIndexOf(')')), 10)/100;
			el.vml.color.shape.style.filter = el.currentStyle.filter; /* complete guesswork */
			el.vml.image.fill.opacity = trans; /* complete guesswork */
		}
	},
	handlePseudoHover: function (el) {
		setTimeout(function () { /* wouldn't work as intended without setTimeout */
			DD_belatedPNG.applyVML(el);
		}, 1);
	},
	/**
	* This is the method to use in a document.
	* @param {String} selector - REQUIRED - a CSS selector, such as '#doc .container'
	**/
	fix: function (selector) {
		if (this.screenStyleSheet) {
			var selectors, i;
			selectors = selector.split(','); /* multiple selectors supported, no need for multiple calls to this anymore */
			for (i=0; i<selectors.length; i++) {
				this.screenStyleSheet.addRule(selectors[i], 'behavior:expression(DD_belatedPNG.fixPng(this))'); /* seems to execute the function without adding it to the stylesheet - interesting... */
			}
		}
	},
	applyVML: function (el) {
		el.runtimeStyle.cssText = '';
		this.vmlFill(el);
		this.vmlOffsets(el);
		this.vmlOpacity(el);
		if (el.isImg) {
			this.copyImageBorders(el);
		}
	},
	attachHandlers: function (el) {
		var self, handlers, handler, moreForAs, a, h;
		self = this;
		handlers = {resize: 'vmlOffsets', move: 'vmlOffsets'};
		if (el.nodeName == 'A') {
			moreForAs = {mouseleave: 'handlePseudoHover', mouseenter: 'handlePseudoHover', focus: 'handlePseudoHover', blur: 'handlePseudoHover'};
			for (a in moreForAs) {			
				if (moreForAs.hasOwnProperty(a)) {
					handlers[a] = moreForAs[a];
				}
			}
		}
		for (h in handlers) {
			if (handlers.hasOwnProperty(h)) {
				handler = function () {
					self[handlers[h]](el);
				};
				el.attachEvent('on' + h, handler);
			}
		}
		el.attachEvent('onpropertychange', this.readPropertyChange);
	},
	giveLayout: function (el) {
		el.style.zoom = 1;
		if (el.currentStyle.position == 'static') {
			el.style.position = 'relative';
		}
	},
	copyImageBorders: function (el) {
		var styles, s;
		styles = {'borderStyle':true, 'borderWidth':true, 'borderColor':true};
		for (s in styles) {
			if (styles.hasOwnProperty(s)) {
				el.vml.color.shape.style[s] = el.currentStyle[s];
			}
		}
	},
	vmlFill: function (el) {
		if (!el.currentStyle) {
			return;
		} else {
			var elStyle, noImg, lib, v, img, imgLoaded;
			elStyle = el.currentStyle;
		}
		for (v in el.vml) {
			if (el.vml.hasOwnProperty(v)) {
				el.vml[v].shape.style.zIndex = elStyle.zIndex;
			}
		}
		el.runtimeStyle.backgroundColor = '';
		el.runtimeStyle.backgroundImage = '';
		noImg = true;
		if (elStyle.backgroundImage != 'none' || el.isImg) {
			if (!el.isImg) {
				el.vmlBg = elStyle.backgroundImage;
				el.vmlBg = el.vmlBg.substr(5, el.vmlBg.lastIndexOf('")')-5);
			}
			else {
				el.vmlBg = el.src;
			}
			lib = this;
			if (!lib.imgSize[el.vmlBg]) { /* determine size of loaded image */
				img = document.createElement('img');
				lib.imgSize[el.vmlBg] = img;
				img.className = lib.ns + '_sizeFinder';
				img.runtimeStyle.cssText = 'behavior:none; position:absolute; left:-10000px; top:-10000px; border:none; margin:0; padding:0;'; /* make sure to set behavior to none to prevent accidental matching of the helper elements! */
				imgLoaded = function () {
					this.width = this.offsetWidth; /* weird cache-busting requirement! */
					this.height = this.offsetHeight;
					lib.vmlOffsets(el);
				};
				img.attachEvent('onload', imgLoaded);
				img.src = el.vmlBg;
				img.removeAttribute('width');
				img.removeAttribute('height');
				document.body.insertBefore(img, document.body.firstChild);
			}
			el.vml.image.fill.src = el.vmlBg;
			noImg = false;
		}
		el.vml.image.fill.on = !noImg;
		el.vml.image.fill.color = 'none';
		el.vml.color.shape.style.backgroundColor = elStyle.backgroundColor;
		el.runtimeStyle.backgroundImage = 'none';
		el.runtimeStyle.backgroundColor = 'transparent';
	},
	/* IE can't figure out what do when the offsetLeft and the clientLeft add up to 1, and the VML ends up getting fuzzy... so we have to push/enlarge things by 1 pixel and then clip off the excess */
	vmlOffsets: function (el) {
		var thisStyle, size, fudge, makeVisible, bg, bgR, dC, altC, b, c, v;
		thisStyle = el.currentStyle;
		size = {'W':el.clientWidth+1, 'H':el.clientHeight+1, 'w':this.imgSize[el.vmlBg].width, 'h':this.imgSize[el.vmlBg].height, 'L':el.offsetLeft, 'T':el.offsetTop, 'bLW':el.clientLeft, 'bTW':el.clientTop};
		fudge = (size.L + size.bLW == 1) ? 1 : 0;
		/* vml shape, left, top, width, height, origin */
		makeVisible = function (vml, l, t, w, h, o) {
			vml.coordsize = w+','+h;
			vml.coordorigin = o+','+o;
			vml.path = 'm0,0l'+w+',0l'+w+','+h+'l0,'+h+' xe';
			vml.style.width = w + 'px';
			vml.style.height = h + 'px';
			vml.style.left = l + 'px';
			vml.style.top = t + 'px';
		};
		makeVisible(el.vml.color.shape, (size.L + (el.isImg ? 0 : size.bLW)), (size.T + (el.isImg ? 0 : size.bTW)), (size.W-1), (size.H-1), 0);
		makeVisible(el.vml.image.shape, (size.L + size.bLW), (size.T + size.bTW), (size.W), (size.H), 1 );
		bg = {'X':0, 'Y':0};
		if (el.isImg) {
			bg.X = parseInt(thisStyle.paddingLeft, 10) + 1;
			bg.Y = parseInt(thisStyle.paddingTop, 10) + 1;
		}
		else {
			for (b in bg) {
				if (bg.hasOwnProperty(b)) {
					this.figurePercentage(bg, size, b, thisStyle['backgroundPosition'+b]);
				}
			}
		}
		el.vml.image.fill.position = (bg.X/size.W) + ',' + (bg.Y/size.H);
		bgR = thisStyle.backgroundRepeat;
		dC = {'T':1, 'R':size.W+fudge, 'B':size.H, 'L':1+fudge}; /* these are defaults for repeat of any kind */
		altC = { 'X': {'b1': 'L', 'b2': 'R', 'd': 'W'}, 'Y': {'b1': 'T', 'b2': 'B', 'd': 'H'} };
		if (bgR != 'repeat' || el.isImg) {
			c = {'T':(bg.Y), 'R':(bg.X+size.w), 'B':(bg.Y+size.h), 'L':(bg.X)}; /* these are defaults for no-repeat - clips down to the image location */
			if (bgR.search('repeat-') != -1) { /* now let's revert to dC for repeat-x or repeat-y */
				v = bgR.split('repeat-')[1].toUpperCase();
				c[altC[v].b1] = 1;
				c[altC[v].b2] = size[altC[v].d];
			}
			if (c.B > size.H) {
				c.B = size.H;
			}
			el.vml.image.shape.style.clip = 'rect('+c.T+'px '+(c.R+fudge)+'px '+c.B+'px '+(c.L+fudge)+'px)';
		}
		else {
			el.vml.image.shape.style.clip = 'rect('+dC.T+'px '+dC.R+'px '+dC.B+'px '+dC.L+'px)';
		}
	},
	figurePercentage: function (bg, size, axis, position) {
		var horizontal, fraction;
		fraction = true;
		horizontal = (axis == 'X');
		switch(position) {
			case 'left':
			case 'top':
				bg[axis] = 0;
				break;
			case 'center':
				bg[axis] = 0.5;
				break;
			case 'right':
			case 'bottom':
				bg[axis] = 1;
				break;
			default:
				if (position.search('%') != -1) {
					bg[axis] = parseInt(position, 10) / 100;
				}
				else {
					fraction = false;
				}
		}
		bg[axis] = Math.ceil(  fraction ? ( (size[horizontal?'W': 'H'] * bg[axis]) - (size[horizontal?'w': 'h'] * bg[axis]) ) : parseInt(position, 10)  );
		if (bg[axis] % 2 === 0) {
			bg[axis]++;
		}
		return bg[axis];
	},
	fixPng: function (el) {
		el.style.behavior = 'none';
		var lib, els, nodeStr, v, e;
		if (el.nodeName == 'BODY' || el.nodeName == 'TD' || el.nodeName == 'TR') { /* elements not supported yet */
			return;
		}
		el.isImg = false;
		if (el.nodeName == 'IMG') {
			if(el.src.toLowerCase().search(/\.png$/) != -1) {
				el.isImg = true;
				el.style.visibility = 'hidden';
			}
			else {
				return;
			}
		}
		else if (el.currentStyle.backgroundImage.toLowerCase().search('.png') == -1) {
			return;
		}
		lib = DD_belatedPNG;
		el.vml = {color: {}, image: {}};
		els = {shape: {}, fill: {}};
		for (v in el.vml) {
			if (el.vml.hasOwnProperty(v)) {
				for (e in els) {
					if (els.hasOwnProperty(e)) {
						nodeStr = lib.ns + ':' + e;
						el.vml[v][e] = document.createElement(nodeStr);
					}
				}
				el.vml[v].shape.stroked = false;
				el.vml[v].shape.appendChild(el.vml[v].fill);
				el.parentNode.insertBefore(el.vml[v].shape, el);
			}
		}
		el.vml.image.shape.fillcolor = 'none'; /* Don't show blank white shapeangle when waiting for image to load. */
		el.vml.image.fill.type = 'tile'; /* Makes image show up. */
		el.vml.color.fill.on = false; /* Actually going to apply vml element's style.backgroundColor, so hide the whiteness. */
		lib.attachHandlers(el);
		lib.giveLayout(el);
		lib.giveLayout(el.offsetParent);
		el.vmlInitiated = true;
		lib.applyVML(el); /* Render! */
	}
};
try {
	document.execCommand("BackgroundImageCache", false, true); /* TredoSoft Multiple IE doesn't like this, so try{} it */
} catch(r) {}
DD_belatedPNG.createVmlNameSpace();
DD_belatedPNG.createVmlStyleSheet();
var Info = {

    alert: function (data, options) {
        alert(data);
        // Info.displayErrorPage("content", data);
    },

    log: function (data, options) {
        console.log(data);
    },

    warn: function (data, options) {
        console.warn(data);
    },

    displayErrorPage: function (div, message) {
        $("#" + div).empty();
        $("#" + div).append("<div class='errorMessage'>" + message + "</div>");
    },
    displayNotice: function (message, callback) {
        $("#topNoticeBar").html(message);
        $("#topNoticeBar").fadeIn(200, function(){
                setTimeout(function(){$("#topNoticeBar").fadeOut()}, 5000);
                
        });
        if (callback) {
            callback();
        }
    }
}; 
/*
* This file is used to override/increment the default prototypes to provide global helper functions
*/

//used for date formatting, add 0s to the left
Number.prototype.padLeft = function (base, chr) {
    var len = (String(base || 10).length - String(this).length) + 1;
    return len > 0 ? new Array (len).join(chr || '0') + this : this;
};

//compare the equalness of 2 arrays
Array.prototype.compare = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0; i < this.length; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].compare(array[i]))
                return false;
        } else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}; 
/**
 *   This is a special global object that will be instantiated only once, storing all constants
 */

var getEnvironmentServerOrigin = function () {
    var isOnLocal = C_ENV_VAR !== 'REMOTE';
    return {
        'httpOrigin': isOnLocal ? 'http://localhost:8015' : '..',
        'socketOrigin': isOnLocal ? 'http://localhost:3000' : 'https://www.routea.ca:3000',
        'env': isOnLocal
    };

};

var Constants = {

    //all console logs/warns should use these methods to help IE compatability
    dLog: function (message) {
        Info.log(message);
    },

    dWarn: function (err) {
        Info.warn(err);
    },

    origin: getEnvironmentServerOrigin().httpOrigin,
    socketOrigin: getEnvironmentServerOrigin().socketOrigin,
    isOnLocal: getEnvironmentServerOrigin().isOnLocal,

    miliSecInDay: 86400000,

    templateResources: [
    /* ---------  DM Modules  ----------*/
    "DetailMessage", "Publish_singleSlotAsk", "Publish_base", "Publish_step1", "Publish_step2", "Publish_step3", "SimpleMessage", "Edit", "Transaction",

    /*----------- dropdowns  ----------*/
    "notificationDropdown", "letterDropdown", "favoriteDropdown",

    /*-----------  modals  ---------*/
    "genderEditWindow", "hourRateEditWindow", "locationEditWindow", "timeDateEditWindow", "transactionDetail", "messageCancel", "locationPicker",

    /*-----------  person pages  -----------*/
    "personal", "personalWatch", "personalMessage", "personalHistory", "personalNotificationEntry", "personalUtility", "personalSocial", "personalSocialCard", "personalSimpleUser", "personalTransactionHistory", "personalNotificationHistory", "personalNotificationEntry",

    /*-----------  Registration  -----------*/
    "registration", "registration_finish", "findPassword_1", "findPassword_2", "findPassword_3",

    /*-----------  topBar  ------------*/
    "topBar-loggedIn", "topBar-notLoggedIn",

    /*-----------  letter -------------*/
    "letter",
    
    /*-----------  How It Works -------------*/
    "howItWorks_base", "howItWorks_driver", "howItWorks_passenger", 

    /*-----------  About us/service -----------*/
    "serviceCenter_base", "serviceCenter_aboutUs", "serviceCenter_feedback", "serviceCenter_terms", "serviceCenter_terms_zh", "serviceCenter_terms_en", "serviceCenter_faq", "serviceCenter_career", 

    /*-----------  top level moduels  ----------*/
    "tadv", "front", "main", "userSearch"],

    messageType: {
        "ask": 0,
        "help": 1,
        "both": 2
    },

    gender: {
        "male": 0,
        "female": 1,
        "both": 2
    },

    genderLookup: ["male", "female", "both"],

    paymentMethod: {
        "offline": 0,
        "paypal": 1,
        "all": 2
    },

    transactionState: {
        'init': 0,
        'cancelled': 1,
        'aboutToStart': 2,
        'finished': 3,
        'underInvestigation': 4,
        'invalid': 5
    },

    transactionStateChangeAction: {
        'init': 0,
        'cancel': 1,
        'report': 2,
        'evaluate': 3
    },

    transactionType: {
        'departure': 0,
        'arrival': 1
    },

    stateText: ["待确认", "已确认", "已拒绝", "即将开始", "已取消", "已评分", "审理中", "未评分", "卖方评分", "买方评分", "完成"],

    notificationState: {
        'unread': 0,
        'read': 1
    },

    notificationEvent: {
        'transactionInit': 0,
        'transactionCancelled': 1,
        'transactionAboutToStart': 2,
        'transactionEvaluated': 3,
        'tranasctionUnderInvestigation': 4,
        'transactionReleased': 5,
        'watched': 6
    },

    notificationStateChangeAction: {
        'check': 0,
        'delete': 1
    },

    userState: {
        "normal": 0,
        "invalid": -1
    },

    userSearchState: {
        "universityAsk": 0,
        "universityHelp": 1,
        "regionAsk": 2,
        "regionHelp": 3,
        "universityGroupAsk": 4,
        "universityGroupHelp": 5
    },

    messageState: {
        "open": 2,
        "closed": 1,
        "deleted": 0
    },

    DayTimeSlot: {
        'n0': 0,
        'n1': 1,
        'n2': 2,
        'n3': 3,
        'n4': 4,
        'n5': 5,
        'n6': 6,
        'n7': 7,
        'n8': 8,
        'n9': 9,
        'n10': 10,
        'n11': 11,
        'n12': 12,
        'n13': 13,
        'n14': 14,
        'n15': 15,
        'n16': 16,
        'n17': 17,
        'n18': 18,
        'n19': 19,
        'n20': 20,
        'n21': 21,
        'n22': 22,
        'n23': 23
    },

    LetterType: {
        'user': 0,
        'system': 1
    },

    LetterState: {
        'unread': 0,
        'read': 1,
        'invalid': 2
    },

    LetterDirection: {
        'inbound': 0,
        'outbound': 1,
        'both': 2
    },

    LocationDirection: {
        'from': 0,
        'to': 1
    },

    weekDayArray: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],

    /*---------------  Personal view constants   --------------*/
    personalTemplateMapping: {
        'personalHistory': 'personalPage/personalHistory',
        'persoanlMessage': 'personalPage/personalMessage',
        'personalSocial': 'personalPage/personalSocial',
        'personalUtility': 'personalPage/personalUtility'
    },
    emailLink: {
        "qq.com":"mail.qq.com",
        "sina.com":"mail.sina.com",
        "163.com":"mail.163.com",
        "126.com":"mail.126.com",
        "163.com":"mail.163.com",
        "sohu.com":"mail.sohu.com",
        "yahoo.com.cn":"mail.yahoo.com.cn",
        "yahoo.com":"mail.yahoo.com",
        "live.com":"mail.live.com",
        "live.cn":"mail.live.com"
    },
    getDefaultUserLocation: function () {
        return new UserLocation();
    },


};

/*
 no matter who we are, where we are from, each of us is a part
 of something greater, more consequential, than we individualy are
 wonders can only be achieved, by hardwork and unity
 I believe we can, we must, get the project going fast
 we do big things from the days of our funding,
 big things, cause we dare to dream
 our destiny is our choice, and we share common hopes common creed
 while all of us have different backgrounds, different stories different beliefs,
 we do not give up, not this time
 */

(function () {'use strict';

    this.ApiResource = function () {

        /*---------------  API level constants   --------------*/
        var api_modules = {

            rootPrefix: Constants.origin + '/api',

            versionPrefix: '/v1.0',

            moduleResource: {
                'message': '/dianming',
                'users': '/users',
                'transaction': '/transaction',
                'notification': '/notification',
                'letter': '/letter',
                'general': '/general',
                'location': '/location',
            },

            moduleSufixResource: {
                'message': {
                    recent: '/recent',
                    search: '/search',
                    transaction: '/transaction',
                    autoMatch: '/autoMatch',
                    message: '/dianming'
                },

                'users': {
                    findSession: '/findSession',
                    user: '/user',
                    login: '/login',
                    logout: '/logout',
                    img: '/img',
                    email: '/email',
                    changePassword: '/changePassword',
                    contactInfo: '/contactInfo',
                    singleLocation: '/singleLocation',
                    circleLocation: '/circleLocation',
                    emailActivation: '/emailActivation',
                    resendActivationEmail: '/resendActivationEmail',
                    forgetPassword: '/forgetPassword',
                    toggleNotices: '/toggleNotices',
                    watchUser: '/watchUser',
                    isUserWatched: '/isWatched/:id',
                    messageHistory: '/messageHistory',
                    transaction: '/transaction',
                    notification: '/notification',
                    searchUser: '/searchUser',
                    uncheckedNotification: '/uncheckedNotification',
                    uncheckedLetter: '/uncheckedLetter',
                    searchHistory: '/searchHistory'
                },

                'transaction': {
                    transaction: '/transaction',
                    admin: '/admin'
                },

                'notification': {
                    notification: '/notification',
                    notificationByIdList: '/notificationByIdList'
                },

                'general': {
                    feedBack: '/feedBack'
                },

                'location': {
                    location: '/location'
                },

                'letter': {
                    letter: '/letter',
                    user: '/user'
                }
            }
        };

        var api_maker = function (moduleName, actionName) {
            return api_modules.rootPrefix + api_modules.versionPrefix + api_modules.moduleResource[moduleName] + api_modules.moduleSufixResource[moduleName][actionName];
        };

        var api_assembler = function () {

            return {
                message_message: api_maker("message", "message"),
                message_recent: api_maker('message', 'recent'),
                message_search: api_maker('message', 'search'),
                message_transaction: api_maker('message', 'transaction'),
                message_autoMatch: api_maker('message', 'autoMatch'),

                users_findSession: api_maker('users', 'findSession'), //GET added to session manaegr
                users_user: api_maker('users', 'user'), //GET and POST added to user manager
                users_login: api_maker('users', 'login'), //GET dded to session manager
                users_logout: api_maker('users', 'logout'), //GET added to session manager
                users_img: api_maker('users', 'img'), //
                users_email: api_maker('users', 'email'),
                users_changePassword: api_maker('users', 'changePassword'),
                users_contactInfo: api_maker('users', 'contactInfo'),
                users_singleLocation: api_maker('users', 'singleLocation'),
                users_emailActivation: api_maker('users', 'emailActivation'),
                users_resendActivationEmail: api_maker('users', 'resendActivationEmail'),
                users_forgetPassword: api_maker('users', 'forgetPassword'),
                users_toggleNotices: api_maker('users', 'toggleNotices'),
                users_watchUser: api_maker('users', 'watchUser'),
                users_isUserWatched: api_maker('users', 'isUserWatched'),
                users_messageHistory: api_maker('users', 'messageHistory'),
                users_transaction: api_maker('users', 'transaction'),
                users_notification: api_maker('users', 'notification'),
                users_searchUser: api_maker('users', 'searchUser'),
                users_uncheckedNotification: api_maker('users', 'uncheckedNotification'),
                users_uncheckedLetter: api_maker('users', 'uncheckedLetter'),
                users_searchHistory: api_maker('users', 'searchHistory'),

                transaction_transaction: api_maker('transaction', 'transaction'),
                transaction_admin: api_maker('transaction', 'admin'),

                notification_notification: api_maker('notification', 'notification'),
                notification_notificationByIdList: api_maker('notification', 'notificationByIdList'),

                letter_letter: api_maker('letter', 'letter'),
                letter_user: api_maker('letter', 'user'),

                general_feedBack: api_maker('general', 'feedBack'),

                location_location: api_maker('location', 'default')
            };
        };

        return api_assembler();
    };

}).call(this);

/**
 *   This is a special global object that will be instantiated only once, storing all constants
 */

var Status = {

    "success": 200,

    "badRequest": 400,
    "unauthorized": 401,
    "paymentRequired": 402,
    "forbidden": 403,
    "notFound": 404,
    "methodNotAllowed": 405,
    "notAcceptable": 406,
    "requestTimeOut": 408,
    "conflict": 409,
    "gone": 410,
    "preconditionFailed": 412,
    "entityTooLarge": 413,
    "unsupportedMediaType": 415,
    "expectationFailed": 417,
    "unprocessableEntity": 422,
    "locked": 423,
    "failedDependency": 424,
    "preconditionRequired": 428,

    "internalServerError": 500

}; 
var Config = {

    urlSeperator: '+',

    locationSeperator: '_',

    defaultCustomDepthIndex: 3,

    //-------------- PersonalView state transfer -------------
    getDefaultPersonalViewState: function () {
        return "history";
    },

    getPossiblePersonalViewStates: function () {
        return ['social', 'message', 'notification', 'history', 'utility'];
    },

    validatePersonalViewState: function (personalViewState) {
        var possibleStates = this.getPossiblePersonalViewStates(), i;
        for ( i = 0; i < possibleStates.length; i++) {
            if (possibleStates[i] === personalViewState) {
                return true;
            }
        }
        return false;
    },

    //-------------- DMPost state transfer --------------
    getDefaultDMPostState: function () {
        return "step1";
    },

    getPossibleDMPostStates: function () {
        return ['step1', 'step2', 'step3'];
    },

    validateDMPostState: function (postState) {
        var possibleStates = this.getPossibleDMPostStates(), i;

        for ( i = 0; i < possibleStates.length; i++) {
            if (possibleStates[i] === postState) {
                return true;
            }
        }
        return false;
    },

    getPostStateStepIndex: function (postState) {
        var possibleStates = this.getPossibleDMPostStates(), i;

        for ( i = 0; i < possibleStates.length; i++) {
            if (possibleStates[i] === postState) {
                return i + 1;
            }
        }
        Info.warn("Config::getPostStepIndex:: invalid postState, using the default step 1");
        return 1;
    }
    // ,

    // //-------------- Registration state transfer --------------
    // getDefaultRegistrationState: function () {
    //     return "";
    // },

    // getPossibleRegistrationStates: function () {
    //     return ["", "finish"];
    // },

    // validateRegistrationState: function (registrationState) {
    //     var possibleStates = this.getPossibleRegistrationStates(), i;

    //     for ( i = 0; i < possibleStates.length; i++) {
    //         if (possibleStates[i] === registrationState) {
    //             return true;
    //         }
    //     }
    //     return false;
    // },

    // getRegistrationStateStepIndex: function (registrationState) {
    //     var possibleStates = this.getPossibleRegistrationStates(), i;

    //     for ( i = 0; i < possibleStates.length; i++) {
    //         if (possibleStates[i] === registrationState) {
    //             return i + 1;
    //         }
    //     }
    //     Info.warn("Config::getRegistrationStateStepIndex:: invalid postState, using the default step 1");
    //     return 1;
    // }

};

(function () {
    'use strict';
    //wooooooola, no more global objects, globals are bad, very bad

    //note this is not a global helper function, it is encapsulated inside this modular function scope
    var isStorageSupported = function () {
        if ( typeof (localStorage) === "undefined" || typeof (sessionStorage) === "undefined") {
            alert("您的浏览器已经成为历史，强烈建议您使用Chrome浏览器. PS: 神马360，搜狗，遨游浏览器都是IE内核，跟Chrome比起来基本处于石器时代");
            return false;
        }
        return true;
    };

    //constructor
    this.StorageService = function () {
        this.searchQueryState = {
            "searchLocation": new UserLocation (),
            "seachDate": new Date (),
            "searchType": Constants.messageType.ask
        };
        this.searchFilterState = {
            "searchGender": Constants.gender.both,
            "searchTimeSlot": Constants.DayTimeSlot.n0,
            "searchPriceInterval": {
                "min": 0,
                "max": 999
            }
        };
        this.views = {};
        //detect once upon initialization
        this.isSupported = isStorageSupported();
        //if local storage supported, reinitialize the storage variables from local storage, now control hands over to
        // live storage variables
        if (this.isSupported) {
            this.searchQueryState = {
                "searchLocation": new UserLocation (true, localStorage.searchLocation),
                "searchDate": new Date (localStorage.searchDate),
                "searchType": localStorage.searchType
            };

            this.searchFilterState = {
                "searchGender": localStorage.searchGender,
                "searchTimeSlot": localStorage.searchTimeSlot,
                "searchPriceInterval": {
                    "min": localStorage.searchPriceMin,
                    "max": localStorage.searchPriceMax
                }
            };
            localStorage.lastContact = localStorage.lastContact || {};
        }

        this.sr = new SearchRepresentation ();
    };

    /**
     * expecting: UserLocaton object, date object, searchType
     */
    StorageService.prototype.updateSearchQueryState = function (newSearchLocation, newSearchDate, newSearchType) {
        this.searchQueryState = {
            "searchLocation": newSearchLocation,
            "searchDate": newSearchDate,
            "searchType": newSearchType
        };

        //if has local storage, update the storage as well
        if (this.isSupported) {
            localStorage.searchLocation = newSearchLocation.castToString();
            localStorage.searchDate = newSearchDate.toString();
            localStorage.searchType = newSearchType;
        }
    };

    StorageService.prototype.getSearchQueryState = function () {
        return this.searchQueryState;
    };

    StorageService.prototype.updateSearchFilterState = function (newSearchGender, newSearchTimeSlot, newSearchPriceInterval) {
        this.searchFilterState = {
            "searchGender": newSearchGender,
            "searchTimeSlot": newSearchTimeSlot,
            "searchPriceInterval": {
                "min": newSearchPriceInterval.min,
                "max": newSearchPriceInterval.max
            }
        };

        if (this.isSupported) {
            localStorage.searchGender = newSearchGender;
            localStorage.searchTimeSlot = newSearchTimeSlot;
            localStorage.searchPriceMin = newSearchPriceInterval.min;
            localStorage.searchPriceMax = newSearchPriceInterval.max;
            localStorage.searchPriceMax = newSearchPriceInterval.max;
        }
    };

    StorageService.prototype.getSearchFilterState = function () {
        return this.searchFilterState;
    };

    StorageService.prototype.getSearchRepresentationCache = function () {
        return typeof this.sr !== 'undefined' ? this.sr : new SearchRepresentation ();
    };

    StorageService.prototype.setSearchRepresentationCache = function (sr) {
        if ( sr instanceof Backbone.Model) {
            this.sr = sr;
        }
    };
	StorageService.prototype.getLastContact = function () {
        if (!this.isSupported) return -1;
        var ret = localStorage.lastContact[app.sessionManager.sessionUser.id];
        if ( ret ) {
            ret = Utilities.toInt(ret);
            return isNaN(ret) ? -1 : ret;
        } else {
            return -1;
        }
    };

    StorageService.prototype.setLastContact = function (id) {
        localStorage.lastContact[app.sessionManager.sessionUser.id] = id;
    };

    StorageService.prototype.setRecentMessages = function (recentMessages) {
        var now = new Date();
        localStorage.recent = {"timestamp":now.getTime(), "messages": recentMessages};
    };
    StorageService.prototype.getRecentMessages = function (id) {
        var now = new Date();
        now = now.getTime();
        if (localStorage.recent && (now - localStorage.recent.timestamp) < 90000) {
            return localStorage.recent.messages;
        }
        localStorage = null;
        return null;
    };


    StorageService.prototype.setViewCache = function (type, view) {
        this.views[type] = view;
    };

    StorageService.prototype.getViewCache = function (type, params) {
        this.views[type] = this.views[type];
        if (!this.views[type]){
            this.views[type] = new window[type](params); //create view with dynamic class name
        } else {
            this.views[type].cacheConfig(params);
        }
        return this.views[type];
    };

}).call(this);
/**
 *   This is a special global object that will be instantiated only once, storing all utility functions
 */

var Utilities = {

    /*search key standards: location_date_searchState
     *locationString standards  province-city-region-university
     *date string standard: yyyy:mm:dd:hh:mm:ss UTC
     *searchState:  an int
     *take in an array of searchkeys and encode them
     *@param searchKeys: an array of 3 entries
     *@return  null if format error, encoded string if format valid
     */

    makeQueryString: function (queryData) {
        var queryString = "";
        for (var name in queryData) {
            queryString += name + "=" + queryData[name] + "&";
        }
        return "?" + queryString.substring(0, queryString.length - 1);
    },

    encodeSearchKey: function (searchKeys) {
        if (searchKeys !== null && searchKeys.length < 4) {
            return null;
        }
        if (searchKeys.length === 4 || !searchKeys[4]) {
            return searchKeys[0].toString() + "_" + searchKeys[1].toString() + "_" + searchKeys[2] + "_" + this.castToAPIFormat(searchKeys[3]);
        }
        return searchKeys[0].toString() + "_" + searchKeys[1].toString() + "_" + searchKeys[2] + "_" + this.castToAPIFormat(searchKeys[3]) + "_" + this.castToAPIFormat(searchKeys[4]);

    },

    /*take in an encoded searchkey and decodes it*/
    decodeSearchKey: function (encodedSearchKey) {
        if (encodedSearchKey !== null) {
            var encodedArray = encodedSearchKey.split("_");
            if (encodedArray.length >= 4) {
                var fromLocation = new UserLocation ();
                var toLocation = new UserLocation ();
                fromLocation.castFromString(encodedArray[0]);
                fromLocation.castFromString(encodedArray[1]);
                encodedArray[0] = fromLocation;
                encodedArray[1] = toLocation;
                encodedArray[3] = this.castFromAPIFormat(encodedArray[3]);
                if (encodedArray.length === 5) {
                    encodedArray[4] = this.castFromAPIFormat(encodedArray[4]);
                }
                return encodedArray;
            } else {
                return null;
            }
        } else {
            return null;
        }
    },

    encodeDate: function (date) {
        return date.toString().replace(" ", "_");

    },

    decodeDate: function (dateString) {
        return new Date (dateString.replace("_", " "));
    },

    //converts an date object to a human-friendly data string, eg: 明天，下周二，5月3号
    getDateString: function (targetDate, flag) {
        if (!targetDate) {
            Constants.dLog("Utilities::getDateString invalid parameter, null or undefined");
            targetDate = new Date ();
        }
        var tempDate = new Date (), curDate = new Date (targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate()), today = new Date (tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate()), dayDifference = Math.floor((curDate.getTime() - today.getTime()) / Constants.miliSecInDay), time = "";

        if (flag) {
            time = targetDate.getHours() + "点";
        }

        if (dayDifference === 0) {
            return "今天" + time;
        } else if (dayDifference === 1) {
            return "明天" + time;
        } else if (dayDifference === 2) {
            return "后天" + time;
        } else if (dayDifference === -1) {
            return "昨天" + time;
        } else if (dayDifference === -2) {
            return "前天" + time;
        } else if (dayDifference < -2 && dayDifference > -8) {
            return (0 - dayDifference) + "天前" + time;
        }

        var curDayOfWeek = curDate.getDay();
        var todayOfWeek = today.getDay();

        if ((todayOfWeek + dayDifference) > 13) {
            return (curDate.getMonth() + 1) + "月" + curDate.getDate() + "日";
        }

        if ((todayOfWeek + dayDifference) <= 6) {
            return "这" + Constants.weekDayArray[curDayOfWeek];
        }

        if ((todayOfWeek + dayDifference) > 6) {
            return "下" + Constants.weekDayArray[curDayOfWeek];
        } else {
            return "date display error";
        }
    },

    //get the time range in the same day, startTime and endTime should be on the same day
    //expected return format is "startTime - endTime"
    getTimeRange: function (startTime, endTime) {
        if (!startTime) {
            Constants.dLog("Utilities::getTimeRange  invalid startTime paramters, either null or undefined");
            startTime = new Date ();
        }
        if (!endTime) {
            Constants.dLog("Utilities::getTimeRange  invalid endTime paramters, either null or undefined");
            endTime = new Date ();
        }
        if (startTime.getFullYear() !== endTime.getFullYear || startTime.getMonth() !== endTime.getMonth() || startTime.getDate() !== endTime.getDate()) {
            Constants.dLog("Utilities::getTimeRange warning, startTime and endTime are not on the date day");
        }
        if (endTime.getTime() >= startTime.getTime()) {
            Constants.dLog("Utilities:getTimeRange warning, endTime is earlier than or equals startTime");
        }

        return startTime.getHours() + ":" + startTime.getMinutes() + " - " + endTime.getHours() + ":" + endTime.getMinutes();
    },

    //get the duration in a readable format from startTime and endTime
    //expected return format is xx小时xx分钟
    getDuration: function (startTime, endTime) {
        if (!startTime) {
            Constants.dLog("Utilities::getTimeRange  invalid startTime paramters, either null or undefined");
            startTime = new Date ();
        }
        if (!endTime) {
            Constants.dLog("Utilities::getTimeRange  invalid endTime paramters, either null or undefined");
            endTime = new Date ();
        }
        if (startTime.getFullYear() !== endTime.getFullYear || startTime.getMonth() !== endTime.getMonth() || startTime.getDate() !== endTime.getDate()) {
            Constants.dLog("Utilities::getDuration warning, startTime and endTime are not on the date day");
        }

        var miliDif = endTime.getTime() - startTime.getTime(), hourDif = 0, minuteDif = 0;

        if (miliDif <= 0) {
            Constants.dLog("Utilities:getTimeRange warning, endTime is earlier than or equal startTime");
        }

        hourDif = Math.floor(miliDif / (1000 * 60 * 60));
        minuteDif = Math.floor((miliDif % (1000 * 60 * 60)) / (1000 * 60));

        if (hourDif > 0) {
            return hourDif + "小时" + minuteDif + "分钟";
        } else {
            return minuteDif + "分钟";
        }
    },

    getHourlyRate: function (startTime, endTime, price) {
        if (!startTime) {
            Constants.dLog("Utilities::getTimeRange  invalid startTime paramters, either null or undefined");
            startTime = new Date ();
        }
        if (!endTime) {
            Constants.dLog("Utilities::getTimeRange  invalid endTime paramters, either null or undefined");
            endTime = new Date ();
        }
        if (startTime.getFullYear() !== endTime.getFullYear || startTime.getMonth() !== endTime.getMonth() || startTime.getDate() !== endTime.getDate()) {
            Constants.dLog("Utilities::getHourlyRate warning, startTime and endTime are not on the date day");
        }
        if (price === undefined || price < 0) {
            Constants.dLog("Utilities::getHourlyRate warning, price undefined or less than 0");
        }

        var miliDif = endTime.getTime() - startTime.getTime(), hourLength = 0;

        if (miliDif <= 0) {
            Constants.dLog("Utilities::getHourlyRate warning, endTime is earlier or equal startTime");
        }

        hourLength = miliDif / (1000 * 60 * 60);

        return Math.round(price / hourLength);
    },

    toInt: function (number) {
        return parseInt(number, 10);
    },

    getTimeFromString: function (time) {
        var hour = 0;
        if (time.indexOf("中午") > -1)
            return 12;
        if (time.indexOf("晚上") > -1 || time.indexOf("下午") > -1 || time.indexOf("午后") > -1 || time.indexOf("傍晚") > -1)
            hour = 12;
        var clockhour = this.toInt(time.replace(/\D+/g, ''));
        return (clockhour + hour);
    },

    getId: function (str, deli) {
        if (this.isEmpty(deli)) {
            deli = "_";
        }
        var list = str.split(deli);
        return list[list.length - 1];
    },

    isEmpty: function (str) {
        return (str === null || str === undefined || str === "");
    },
    castFromAPIFormat: function (dateString) {
        var match = dateString.match(/^(\d+)-(\d+)-(\d+) (\d+)\:(\d+)\:(\d+)$/);
        var date = new Date (match[1], match[2] - 1, match[3], match[4], match[5], match[6]);
        return date;
    },

    castToAPIFormat: function (date) {
        var d = date, str = [d.getFullYear(), (d.getMonth() + 1).padLeft(), d.getDate().padLeft()].join('-') + ' ' + [d.getHours().padLeft(), d.getMinutes().padLeft(), d.getSeconds().padLeft()].join(':');
        return str;
    },

    getDayTimeSlotText: function(timeSlot){
        var prefixText = '',
            actualStartHour = 0,
            actualEndHour = 1;
        if (timeSlot < Constants.DayTimeSlot.n12){
            prefixText = '上午';
            actualStartHour = timeSlot;
            actualEndHour = actualStartHour + 1;
        }
        else if (timeSlot < Constants.DayTimeSlot.n18){
            prefixText = '下午';
            if ( timeSlot === Constants.DayTimeSlot.n12 ) {
                actualEndHour = 1;
            } else {
                actualStartHour = timeSlot - 12;
                actualEndHour = actualStartHour + 1;
            }
        }
        else{
            prefixText = '晚上';
            actualStartHour = timeSlot - 12;
            actualEndHour = actualStartHour + 1;

        }
        return prefixText+actualStartHour+'-'+actualEndHour+'点';
    },
    getDayTimeSlot_morningStart: function(){
        return Constants.DayTimeSlot.n0;
    },
    getDayTimeSlot_afternoonStart: function(){
        return Constants.DayTimeSlot.n12;
    },
    getDayTimeSlot_nightStart: function(){
        return Constants.DayTimeSlot.n18;
    },

    //accepts id in number, string, object, array formats
    getIdList: function(idOpt){
        var _id = -1;
        var _arr = [];
        if ($.isArray(idOpt)){
            if (idOpt.length === 0){
                throw new Error('fatal error: id array empty');
            }
            return idOpt;
        }
        else{
            switch (typeof idOpt){
                case 'string':
                    _id = parseInt(idOpt, 10);
                    _arr.push(_id);
                    break;
                case 'object':
                    _id = parseInt(idOpt.id, 10);
                    _arr.push(_id);
                    break;
                case 'number':
                    _arr.push(_id);
                    break;
                default:
                    throw new Error('fatal error: Invalid id format');
            }
            return _arr;
        }
    },
    getUrlParams: function() {
        if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
              return decodeURIComponent(name[1]);
    }

};
tpl = {

    // Hash of preloaded templates for the app
    templates:{},

    // Recursively pre-load all the templates for the app.
    // This implementation should be changed in a production environment. All the template files should be
    // concatenated in a single file.
    loadTemplates:function (names, callback) {

        if (names.length > 0){

            //previous async recursion to load all html files
            // var that = this,
            //     i = 0,
            //     tplCount = 0;

            // var loopingLoadTemplate = function(index){
            //     var name = names[index];

            //     $.get('templates/' + name + '.html', function (data) {
            //         that.templates[name] = data;
            //         tplCount++;
            //         //safety lock
            //         if (tplCount === names.length){
            //             callback();
            //         }
            //     });
            // };

            // for (i = 0; i < names.length; i++){
            //     loopingLoadTemplate(i);
            // }
            
            var i = 0,
                name, tplContainer,
                tplContent = null,
                self = this;

            $.ajax({
                url: 'targets/templates.min.js',
                dataType: "html",
                success: function (data) {
                    tplContainer = $('#tpl_main_invisible_placeholder_v1');
                    tplContainer.append(data);
                    for (i = 0; i < names.length; i++){
                        name = names[i];
                        tplContent = tplContainer.find('#tpl_' + name).html();
                        if (tplContent === undefined || tplContent === null){
                            alert("FATAL ERROR: Template with name: " + name + " not found, if you see this, please contact us");
                            throw new Error();
                        }
                        self.templates[name] = tplContent;
                    }
                    tplContainer.remove();
                    callback();
                },
                error: function(){
                    alert("FATAL ERROR: Failed to load template file");
                    throw new Error();
                }
            });
        }
    },

    // Get template by name from hash of preloaded templates
    get:function (name) {
        if (this.templates[name] === undefined || this.templates[name] === null){
            alert("FATAL ERROR: Retrived template data is not loaded");
            throw new Error();
        }
        return this.templates[name];
    }

};
(function () {'use strict';

    //used for top-level view management upon page switches, it only deals with the sudo divs that are defined in
    // index.html
    this.ViewRegistrationService = function () {

        //applying JavaScript closure
        //storing a registraName -> viewName[] map, members are dynamically generated upon view registration
        var viewRegistrationTable = {};

        //this is a private constant member defined by JavaScript closure, must be updated manually whenever a new view
        // is defined (not declared)
        //this maps the ownership of the view to other views
        var registraDepencyTable = {
            'topBar': {
                request: ['topBar'],
                antiRequest: ['topBar']
            },
            'adv': {
                request: ['adv'],
                antiRequest: ['adv']
            },
            'personal': {
                request: ['content'],
                antiRequest: ['content']
            },
            'mainPage': {
                request: ['content'],
                antiRequest: ['content']
            },
            'findUser': {
                request: ['content'],
                antiRequest: ['content']
            },
            'frontPage': {
                request: ['content'],
                antiRequest: ['content', 'advertisement']
            },
            'MessageDetail': {
                request: ['content'],
                antiRequest: ['content', 'advertisement']
            },
            'MessageEdit': {
                request: ['content'],
                antiRequest: ['content', 'advertisement']
            },
            'MessagePost': {
                request: ['content'],
                antiRequest: ['content', 'advertisement']
            },
            'HowItWorkds': {
                request: ['content'],
                antiRequest: ['content', 'advertisement']
            },
            'serviceCenter': {
                request: ['content'],
                antiRequest: ['content', 'advertisement']
            },
            'letter': {
                request: ['chat'],
                antiRequest: ['chat']
            },
            'registration': {
                request: ['content'],
                antiRequest: ['content', 'advertisement']
            },
            'findPassword': {
                request: ['content'],
                antiRequest: ['content', 'advertisement']
            },
            'transactionDetail': {
                request: ['popup'],
                antiRequest: ['popup']
            },
            'locationPicker': {
                request: ['popup'],
                antiRequest: ['popup']
            }
        };

        //call this function at the initialization of each new view, will guarantee the closing of anti-requested views
        // and the registration of the new view
        //if override, then view may be deleted even if it is the caller itself
        return {
            register: function (viewName, viewObject, override) {
                var registrationTarget, i = 0;

                //check if name is in the registra list, if not, then it has not been defined
                if (registraDepencyTable.hasOwnProperty(viewName)) {

                    registrationTarget = registraDepencyTable[viewName];

                    //check if the any anti-requested views has been registered, if so, attemp to close it
                    for ( i = 0; i < registrationTarget.antiRequest.length; i += 1) {
                        //check if the view has been registered, and if the registered view is the calling view itself
                        if (viewRegistrationTable.hasOwnProperty(registrationTarget.antiRequest[i]) && (viewRegistrationTable[registrationTarget.antiRequest[i]].viewName !== viewName || override)) {

                            //check if the view is valid with a close function, if so, close it, then deletes the
                            // registration record
                            if ( typeof viewRegistrationTable[registrationTarget.antiRequest[i]].viewObject.close === 'function') {
                                viewRegistrationTable[registrationTarget.antiRequest[i]].viewObject.close();
                                //remove the registration entry, compeletely unregister it
                                delete viewRegistrationTable[registrationTarget.antiRequest[i]];
                            } else {
                                alert("fatal error: viewRegistrationService:: register:: alert, member " + registrationTarget.antiRequest[i] + " does not contain close function");
                                break;
                            }
                        }
                    }

                    //registers the new view, if the view is already registered, do not register new view (unless the
                    // override flag is set)
                    for ( i = 0; i < registrationTarget.request.length; i += 1) {
                        viewRegistrationTable[registrationTarget.request[i]] = {
                            'viewName': viewName,
                            'viewObject': viewObject
                        };
                    }
                } else {
                    alert("fatal error: viewRegistrationService:: resiger:: " + viewName + " is not registered in registraDepencyTable");
                }
            },

            unregister: function (viewName) {
                var registrationTarget, i = 0;

                if (registraDepencyTable.hasOwnProperty(viewName)) {

                    registrationTarget = registraDepencyTable[viewName];

                    for ( i = 0; i < registrationTarget.request.length; i += 1) {
                        if (viewRegistrationTable.hasOwnProperty(registrationTarget.request[i]) && viewRegistrationTable[registrationTarget.request[i]].viewName === viewName) {
                            if ( typeof viewRegistrationTable[registrationTarget.request[i]].viewObject.close === 'function') {
                                viewRegistrationTable[registrationTarget.request[i]].viewObject.close();
                                viewRegistrationTable[registrationTarget.request[i]].viewObject.remove();
                                delete viewRegistrationTable[registrationTarget.request[i]];
                            } else {
                                alert("fatal error: viewRegistrationService:: unregister:: alert, member " + registrationTarget.request[i] + " does not contain close function");
                                break;
                            }
                        }
                    }
                } else {
                    alert("fatal error: viewRegistrationService:: unregister:: " + viewName + " is not registered in registraDepencyTable");
                }
            },

            isViewRegistered: function (viewName) {
                var registrationTarget, i = 0;

                if (registraDepencyTable.hasOwnProperty(viewName)) {

                    registrationTarget = registraDepencyTable[viewName];

                    for ( i = 0; i < registrationTarget.request.length; i += 1) {
                        if (!(viewRegistrationTable.hasOwnProperty(registrationTarget.request[i]) && viewRegistrationTable[registrationTarget.request[i]].viewName === viewName)) {
                            return false;
                        }
                    }
                    return true;
                } else {
                    alert("fatal error: viewRegistrationService:: isRegistered:: " + viewName + " is not registered in registraDepencyTable");
                }
            }
        };
    };

}).call(this);
(function () {
    'use strict';
    
    var clearableViewQueue = [];

    //constructor
    this.EventClearService = function () {
        var self = this;
        $('body').on('click', function(){
            self.clearViews();
        });

    };

    EventClearService.prototype.clearViews = function() {
        for (var i = clearableViewQueue.length-1; i >=0; i--){
            if (typeof clearableViewQueue[i] !== 'undefined' && clearableViewQueue[i] !== null){
                clearableViewQueue[i].close();
            }
            clearableViewQueue.pop();
        }
    };

    EventClearService.prototype.registerView = function(clearableView) {
        if (typeof clearableView !== 'undefined' && clearableView instanceof Backbone.View){
            clearableViewQueue.push(clearableView);
        }
    };

    
}).call(this);
var UserLocation = Backbone.Model.extend({
    urlRoot: Constants.origin + "/api/v1.0/location/default",
    defaults: function () {
        return {
            //first 3 reserved for default locations only
            'defaultId': -1,
            'radius': -1,
            'synonyms': '',

            'id': -1,

            'province': 'Ontario',
            'city': 'Waterloo',
            'region': 'Waterloo',
            'pointName': 'Waterloo',

            'pointAddress':'Waterloo, On',
            'lat': 43.479332,
            'lng': -80.533272,

            'match_Id': -1
        };
    },

    initialize: function () {
        _.bindAll(this, 'isNew', 'isDefault','toUiString', 'toJSON',  'equals', 'isEquivalentTo', 'parse', 'parseGoogleJson', 'isInRange', '_getDistanceFromLatLon', '_deg2rad');
    },

    isNew: function (){
        return typeof this.get('id') === 'undefined' || this.get('id') === -1;
    },

    clone: function () {
        var newLocation = new UserLocation();
        var json = _.clone(this.attributes);
        $.each(json, function(key, value) {
            newLocation.set(key, value);
        });
        return newLocation;
    },
    copy: function (val) {
        var json = _.clone(this.attributes);
        $.each(json, function(key, value) {
            val.set(key, value);
        });
    },
    isDefault: function(){
        return typeof this.get('defaultId') === 'number' && this.get('defaultId') > 0;
    },

    toUiString: function () {
        return this.get('pointName');
    },

    equals: function (val) {
        if ( val instanceof Backbone.Model) {
            if (this.isDefault() && val.isDefault()){
                return this.get('defaultId') === val.get('defaultId');
            }
            else if (!this.isDefault() && !val.isDefault()){
                return this.get('province') === val.get('province') &&
                    this.get('city') === val.get('city') &&
                    this.get('region') === this.get('region') &&
                    this.get('pointName') === val.get('pointName') &&
                    this.get('pointAddress') === val.get('pointAddress');
            }
            return false;
        }
        return false;
    },


    isEquivalentTo: function (val) {
        if ( val instanceof UserLocation) {
            return this.get('city') === val.get('city');
        }
        return false;
    },


    parse: function (json) {
        if (typeof json.defaultId !== 'undefined' && json.defaultId >= 0){
            json.defaultId = parseInt(json.defaultId, 10);
            json.radius = parseInt(json.radius, 10);
            json.synonyms = decodeURI(json.synonyms);
        }
        json.id = parseInt(json.id, 10);
        json.province = decodeURI(json.province);
        json.city = decodeURI(json.city);
        json.region= decodeURI(json.region);
        json.pointName = decodeURI(json.pointName);
        json.pointAddress = decodeURI(json.pointAddress);
        json.lat = parseFloat(json.lat);
        json.lng = parseFloat(json.lng);
        json.match_Id = parseInt(json.match_Id, 10);

        return json;
    },

    toJSON: function () {
        var json = _.clone(this.attributes);
        json.province = encodeURI(json.province);
        json.city = encodeURI(json.city);
        json.region= encodeURI(json.region);
        json.pointName = encodeURI(json.pointName);
        json.pointAddress = encodeURI(json.pointAddress);
        return json;
    },


    //TODO
    //also need to get lat and lng
    parseGoogleJson: function (json) {
        var address = json.results[0].address_components, len = address.length, i,
            street_address, buf = [], city, province, contry, reachedFlag = false;

        for (i = 0; i < len; i++) {
            if (address[i].types[0] === "locality") {
                this.set('region', address[i].short_name);
                continue;
            }
            if (address[i].types[0] === "administrative_area_level_2") {
                this.set('city', address[i].short_name);
                continue;
            }
            if (address[i].types[0] === "administrative_area_level_1") {
                this.set('province', address[i].short_name);
                break;
            }
        }
        this.set('pointAddress', json.results[0].formatted_address.split(",")[0]);
        this.set('lat', json.results[0].geometry.location.lat);
        this.set('lng', json.results[0].geometry.location.lng);
        return this.get('pointAddress');
    },

    isInRange: function(loc){
        //TODO
        return true;
        if (this.get('radius') <= 0 && loc.get('radius') <= 0){
            Info.alert("无效地理位置比较，确认是否在服务区内必须和默认位置比较");
        }

        var radius = this.get('radius') > 0 ? this.get("radius") : loc.get("radius");
        var distance = this._getDistanceFromLatLon(this.get('lat'), this.get('lng'), loc.get('lat'), loc.get('lng'));
        
        return distance <= radius;
    },

    
    _getDistanceFromLatLon: function(lat1,lon1,lat2,lon2){
        var R = 6371; // Radius of the earth in km
        var dLat = this._deg2rad(lat2-lat1);  // deg2rad below
        var dLon = this._deg2rad(lon2-lon1);
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(this._deg2rad(lat1)) * Math.cos(this._deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c; // Distance in km
        return d;
    },

    _deg2rad: function(deg) {
        return deg * (Math.PI/180);
    }

});

var DefaultUserLocations = Backbone.Collection.extend({
    model: UserLocation,

    url: Constants.origin + "/api/v1.0/location/default",

    initialize: function (urlOverride) {
        _.bindAll(this, 'overrideUrl', 'findMatch');
        if ( typeof urlOverride !== 'undefined') {
            this.url = urlOverride;
        }

    },

    overrideUrl: function (urlOverride) {
        if ( typeof urlOverride !== 'undefined') {
            this.url = urlOverride;
        }
    },

    //TODO
    findMatch: function(locKeyStr){
        return this;
    }

});

var SearchRepresentation = Backbone.Model.extend({

    defaults: function () {
        return {
            'isRoundTrip': false,
            'departureMatch_Id': -1,
            'arrivalMatch_Id': -1,
            'departureDate': new Date (),
            'arrivalDate': new Date (),
            'targetType': 2,
            'departureTimeSlot': 0,
            'arrivalTimeSlot': 0,
            'timeStamp': new Date()
        };
    },

    initialize: function () {
        _.bindAll(this, 'toString', 'castFromString', 'parse', 'toJSON');
    },

    toString: function () {
        return this.get('isRoundTrip') + Config.urlSeperator + this.get('departureMatch_Id') + Config.urlSeperator + this.get('arrivalMatch_Id') + Config.urlSeperator + Utilities.castToAPIFormat(this.get('departureDate')) + Config.urlSeperator + Utilities.castToAPIFormat(this.get('arrivalDate')) + Config.urlSeperator + this.get('targetType') + Config.urlSeperator + this.get('departureTimeSlot') + Config.urlSeperator + this.get('arrivalTimeSlot') + Config.urlSeperator + Utilities.castToAPIFormat(new Date());
    },

    castFromString: function (str) {
        var strArray = str.split(Config.urlSeperator);
        this.set('isRoundTrip', strArray[0] === 'true');

        this.set('departureMatch_Id', parseInt(strArray[1], 10));
        this.set('arrivalMatch_Id', parseInt(strArray[2], 10));

        this.set('departureDate', Utilities.castFromAPIFormat(strArray[3]));
        this.set('arrivalDate', Utilities.castFromAPIFormat(strArray[4]));

        this.set('targetType', parseInt(strArray[5], 10));
        this.set('departureTimeSlot', parseInt(strArray[6], 10));
        this.set('arrivalTimeSlot', parseInt(strArray[7], 10));
    },

    parse: function (data) {
        data.departureMatch_Id = parseInt(data.departureMatch_Id, 10);
        data.arrivalMatch_Id = parseInt(data.arrivalMatch_Id, 10);
        data.departureDate = Utilities.castFromAPIFormat(data.departureDate);
        data.arrivalDate = Utilities.castFromAPIFormat(data.arrivalDate);
        return data;
    },

    toJSON: function () {
        var json = _.clone(this.attributes);
        if (this.get('departureDate')) {
            json.departureDate = Utilities.castToAPIFormat(this.get('departureDate'));
        }
        if (this.get('arrivalDate')) {
            json.arrivalDate = Utilities.castToAPIFormat(this.get('arrivalDate'));
        }
        return json;
    }

});

var SearchRepresentations = Backbone.Collection.extend({

    model: SearchRepresentation,

    initialize: function (urlOverride) {
        _.bindAll(this, 'overrideUrl');
        if ( typeof urlOverride !== 'undefined') {
            this.url = urlOverride;
        }

    },

    overrideUrl: function (urlOverride) {
        if ( typeof urlOverride !== 'undefined') {
            this.url = urlOverride;
        }
    }
});
var UserSearchRepresentation = Backbone.Model.extend({

    defaults: function () {
        return {
            'location': Constants.getDefaultUserLocation(),
            'gender': Constants.gender.both,
            'name': ""
        };
    },

    initialize: function () {
        _.bindAll(this, 'toString', 'castFromString', 'parse', 'toJSON');
    },

    toString: function () {
        return encodeURI(this.get("name")) + Config.urlSeperator + this.get('gender') + Config.urlSeperator + this.get('location').toString();
    },

    castFromString: function (str) {
        var strArray = str.split(Config.urlSeperator);

        this.set('name', decodeURI(strArray[0]));
        this.set('gender', parseInt(strArray[1], 10));
        var loc = new UserLocation ();
        loc.castFromString(strArray[2]);
        this.set('location', loc);

    },

    parse: function (data) {
        data.location = new UserLocation (data.location, {
            parse: true
        });
        data.gender = parseInt(data.gender, 10);
        return data;
    },

    toJSON: function () {
        var json = _.clone(this.attributes);
        if (this.get('location') instanceof Backbone.Model) {
            json.location = this.get('location').toJSON();
        }
    }
}); 
var Notification = Backbone.Model.extend({

    defaults: {
        'notificationId': -1,
        'notificationEvent': Constants.notificationEvent.watched,
        'targetUserId': -1,

        'initUserId': -1,
        'messageId': -1,
        'transactionId': -1,

        'initUser': {},
        'message': {},
        'transaction': {},

        'state': Constants.notificationState.unread,
        'creationTime': new Date (),
        'historyDeleted': false
    },

    idAttribute: 'notificationId',

    urlRoot: Constants.origin + "/api/v1.0/notification/notification",

    initialize: function (urlRootOverride) {
        _.bindAll(this, 'overrideUrl');

        if (typeof urlRootOverride !== 'undefined') {
            this.urlRoot = urlRootOverride;
        }

    },

    overrideUrl: function (urlRootOverride) {
        if (typeof urlRootOverride !== 'undefined') {
            this.urlRoot = urlRootOverride;
        }
    },

    isNew: function () {
        return this.id === -1;
    },

    parse: function (data) {

        data.notificationId = parseInt(data.notificationId, 10);
        data.notificationEvent = parseInt(data.notificationEvent, 10);
        data.targetUserId = parseInt(data.targetUserId, 10);

        data.initUserId = parseInt(data.initUserId, 10);
        data.messageId = parseInt(data.messageId, 10);
        data.transactionId = parseInt(data.transactionId, 10);

        if ( typeof data.initUser !== 'undefined' && typeof data.initUser.userId !== 'undefined') {
            data.initUser = new User (data.initUser, {
                'parse': true
            });
        }
        if ( typeof data.message !== 'undefined' && typeof data.message.messageId !== 'undefined') {
            data.message = new Message (data.message, {
                'parse': true
            });
        }
        if ( typeof data.transaction !== 'undefined' && typeof data.transaction.transactionId !== 'undefined') {
            data.transaction = new Transaction (data.transaction, {
                'parse': true
            });
        }

        data.state = parseInt(data.state, 10);
        data.creationTime = Utilities.castFromAPIFormat(data.creationTime);

        return data;
    },

    //place holder, since notification are never posted to server
    toJSON: function () {
        var json = _.clone(this.attributes);
        return json;
    },

    _toJSON: function () {
        var json = this.toDropdownJSON();
        json.creationTime = this.get('creationTime');
        return json;
    },

    toDropdownJSON: function () {
        var json = this.toJSON();
        json.creationTime = Utilities.castToAPIFormat(this.get('creationTime'));
        if (this.get('initUser') instanceof Backbone.Model) {
            json.initUserName = this.get('initUser').get('name');
            json.imgPath = this.get('initUser').get('imgPath');
        }

        switch (this.get('notificationEvent')) {
            case Constants.notificationEvent.transactionInit:
                json.notificationText = "预约了你的拼车";
                break;
            case Constants.notificationEvent.transactionCancelled:
                json.notificationText = "取消了他向你的预约";
                break;
            case Constants.notificationEvent.transactionAboutToStart:
                json.notificationText = "与你的拼车即将开始";
                break;
            case Constants.notificationEvent.transactionEvaluated:
                json.notificationText = "与你的拼车已经完成，请给对方打分";
                break;
            case Constants.notificationEvent.tranasctionUnderInvestigation:
                json.notificationText = "投诉了与你的拼车，现已开始调查";
                break;
            case Constants.notificationEvent.transactionReleased:
                json.notificationText = "与你的拼车投诉调查完毕";
                break;
            case Constants.notificationEvent.watched:
                json.notificationText = "关注了你的主页";
                break;
            default:
                info.warn('Invalid notificationEvent');
                json.notificationText = "Invalid notificationEvent";
        }

        if ( typeof this.get('initUser')._toJSON === 'function') {
            json.initUser = this.get('initUser')._toJSON();
        }
        if ( typeof this.get('message')._toJSON === 'function') {
            json.message = this.get('message')._toJSON();
        }
        if ( typeof this.get('transaction')._toJSON === 'function') {
            json.transaction = this.get('transaction')._toJSON();
        }

        return json;
    }
});

var Notifications = Backbone.Collection.extend({

    model: Notification,

    //use 1 to force an request with id attr
    url: Constants.origin + "/api/v1.0/notification/notification/1",

    initialize: function (urlOverride) {
        _.bindAll(this, 'overrideUrl');
        if ( typeof urlOverride !== 'undefined') {
            this.url = urlOverride;
        }

    },

    overrideUrl: function (urlOverride) {
        if ( typeof urlOverride !== 'undefined') {
            this.url = urlOverride;
        }
    }
});
var Transaction = Backbone.Model.extend({

    defaults: {
        "transactionId": -1,

        "providerId": -1,
        "customerId": -1,
        "messageId": -1,

        "provider": {},
        "customer": {},
        "message": {},

        "paymentMethod": Constants.paymentMethod.offline,
        "customerNote": "default",
        "providerNote": "default",
        "customerEvaluation": -1,
        "providerEvaluation": -1,

        "departure_location": new UserLocation (),
        "arrival_location": new UserLocation (),
        "departure_time": new Date (),
        "departure_timeSlot": 0,
        "departure_seatsBooked": 0,
        "departure_priceList": [], //If only single price is set, then priceList has length 1

        "transactionType": Constants.transactionType.departure,
        "type": -1, //used to specify if a transaction is associated with messages's departure or return trip
        "totalPrice": -1,
        "state": -1,

        "historyDeleted": false,
        "creationTime": new Date ()
    },

    idAttribute: "transactionId",

    urlRoot: Constants.origin + "/api/v1.0/transaction/transaction",

    initialize: function (urlRootOverride) {
        _.bindAll(this, 'overrideUrl');

        if (typeof urlRootOverride !== 'undefined') {
            this.urlRoot = urlRootOverride;
        }
    },

    overrideUrl: function (urlRootOverride) {
        if (typeof urlRootOverride !== 'undefined') {
            this.urlRoot = urlRootOverride;
        }
    },

    isNew: function () {
        return this.id === -1;
    },

    parse: function (data) {

        if ( typeof data !== 'undefined') {
            data.transactionId = parseInt(data.transactionId, 10);
            data.providerId = parseInt(data.providerId, 10);
            data.customerId = parseInt(data.customerId, 10);
            data.messageId = parseInt(data.messageId, 10);

            data.provider = new User (data.provider, {
                'parse': true
            });
            data.customer = new User (data.customer, {
                'parse': true
            });
            data.message = new Message (data.message, {
                'parse': true
            });

            data.paymentMethod = parseInt(data.paymentMethod, 10);
            data.customerEvaluation = parseInt(data.customerEvaluation, 10);
            data.providerEvaluation = parseInt(data.providerEvaluation, 10);

            data.departure_location = new UserLocation (data.departure_location, {
                'parse': true
            });
            data.arrival_location = new UserLocation (data.arrival_location, {
                'parse': true
            });
            data.departure_time = Utilities.castFromAPIFormat(data.departure_time);
            data.departure_timeSlot = parseInt(data.departure_timeSlot, 10);
            data.departure_seatsBooked = parseInt(data.departure_seatsBooked, 10);

            data.type = parseInt(data.type, 10);
            data.totalPrice = parseInt(data.totalPrice, 10);
            data.state = parseInt(data.state, 10);

            data.creationTime = Utilities.castFromAPIFormat(data.creationTime);

            data.customerNote = decodeURI(data.customerNote);
            data.providerNote = decodeURI(data.providerNote);
        }
        return data;
    },

    toJSON: function () {
        var json = _.clone(this.attributes);
        if (this.get('departure_location') instanceof UserLocation) {
            json.departure_location = this.get('departure_location').toJSON();
        }
        if (this.get('arrival_location') instanceof UserLocation) {
            json.arrival_location = this.get('arrival_location').toJSON();
        }
        json.departure_time = Utilities.castToAPIFormat(this.get('departure_time'));
        json.customerNote = encodeURI(json.customerNote);
        json.providerNote = encodeURI(json.providerNote);

        return json;
    },

    _toJSON: function () {
        var json = this.toJSON();
        json.departure_time = Utilities.getDateString(this.get('departure_time'));
        
        json.departure_timeSlot = Utilities.getDayTimeSlotText(this.get("departure_timeSlot"));
        json.arrival_timeSlot = Utilities.getDayTimeSlotText(this.get("arrival_timeSlot"));

        json.arrival_location = this.get('arrival_location').toUiString();
        if (json.arrival_time) {
            json.arrival_time = Utilities.getDateString(this.get('arrival_time'));
        }
        json.creationTime = Utilities.getDateString(this.get('creationTime'));

        var priceList = this.get("departure_priceList");
        var currentPrice = 0;
        var bookedSeats = this.get("departure_seatsBooked");
        if (priceList.length === 1) {
            currentPrice = priceList[0];
        } else {
            for (var p = 0; p < priceList.length; p++) {
                if (priceList[p] === 0) {
                    priceList[p] = priceList[p - 1];
                }
            }
            if (priceList.length <= bookedSeats) {
                currentPrice = priceList[priceList.length - 1];
            } else {
                currentPrice = priceList[bookedSeats];
            }
        }
        json.currentPrice = currentPrice;
        if (this.get('departure_location') instanceof UserLocation) {
            json.departure_location = this.get('departure_location').toUiString();
        }
        if (this.get('arrival_location') instanceof UserLocation) {
            json.arrival_location = this.get('arrival_location').toUiString();
        }

        if (json.state === Constants.transactionState.init) {
            json.stateText = "预定中";
        } else if (json.state === Constants.transactionState.cancelled) {
            json.stateText = "已经取消";
        } else if (json.state === Constants.transactionState.aboutToStart) {
            json.stateText = "即将开始";
        } else if (json.state === Constants.transactionState.finished) {
            json.stateText = "完成";
        } else if (json.state === Constants.transactionState.underInvestigation) {
            json.stateText = "审查中";
        } else if (json.state === Constants.transactionState.invalid) {
            json.stateText = "无效";
        }

        json.customerNote = decodeURI(json.customerNote);
        json.providerNote = decodeURI(json.providerNote);

        if ( typeof this.get('provider')._toJSON === 'function') {
            json.provider = this.get('provider')._toJSON();
        }
        if ( typeof this.get('customer')._toJSON === 'function') {
            json.customer = this.get('customer')._toJSON();
        }
        if ( typeof this.get('message')._toJSON === 'function') {
            json.message = this.get('message')._toJSON();
        }

        return json;
    }
});

var Transactions = Backbone.Collection.extend({

    model: Transaction,

    url: Constants.origin + "/api/v1.0/transaction/transaction",

    initialize: function (urlOverride) {
        _.bindAll(this, 'overrideUrl');
        if ( typeof urlOverride !== 'undefined') {
            this.url = urlOverride;
        }
    },

    overrideUrl: function (urlOverride) {
        if ( typeof urlOverride !== 'undefined') {
            this.url = urlOverride;
        }
    }
});

var User = Backbone.Model.extend({
    //TODO fill in Constants with enum int mapping
    defaults: function () {
        return {
            "userId": -1,
            "password": "default",
            "name": "default",
            "email": "default",
            "phone": "default",
            "qq": "default",
            "gender": Constants.gender.male,
            "birthday": new Date (),
            "imgPath": "default",
            "location": new UserLocation (), //new Location(),

            "lastLogin": new Date (),
            "creationTime": new Date (),

            "historyList": [],
            "watchList": [],
            "socialList": [],
            "transactionList": [],
            "notificationList": [],
            "universityGroup": [],

            "emailActivated": false,
            "phoneActivated": false,
            "emailNotice": true,
            "phoneNotice": false,
            "state": Constants.userState.normal,
            "searchRepresentation": new SearchRepresentation (),

            "level": 0,
            "averageScore": 0,
            "totalTranscations": 0,

            "verifications": [],
            "googleToken": "",
            "facebookToken": "",
            "twitterToken": "",
            "paypalToken": "",
            "id_docType": "",
            "id_docNum": "",
            "id_path": "",
            "id_vehicleImgPath": "",

            "accountId": "",
            "accountPass": "",
            "accountToken": "",
            "accountValue": 0,

            "sessionCode": "default",
        };
    },

    idAttribute: "userId",

    urlRoot: Constants.origin + "/api/v1.0/users/user",

    initialize: function (urlRootOverride) {
        _.bindAll(this, 'overrideUrl', 'isNew', 'parse', '_toJSON', 'toJSON', 'toDropdownJSON');

        if (typeof urlRootOverride !== 'undefined') {
            this.urlRoot = urlRootOverride;
        }
    },

    overrideUrl: function (urlRootOverride) {
        if (typeof urlRootOverride !== 'undefined') {
            this.urlRoot = urlRootOverride;
        }
    },

    isNew: function () {
        return this.id === -1;
    },
    getAge: function () {
        var today = new Date (), birthday = this.get('birthday');
        var age = today.getFullYear() - birthday.getFullYear();
        var month = today.getMonth() - birthday.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthday.getDate() )) {
            age--;
        }
        return age;
    },
    parse: function (data) {
        if ( typeof data !== 'undefined' && typeof data.userId !== 'undefined') {
            data.userId = parseInt(data.userId, 10);

            data.gender = parseInt(data.gender, 10);
            data.birthday = Utilities.castFromAPIFormat(data.birthday);

            data.location = new UserLocation (data.location, {
                'parse': true
            });
            data.searchRepresentation = new SearchRepresentation (data.searchRepresentation, {
                'parse': true
            });

            data.lastLogin = Utilities.castFromAPIFormat(data.lastLogin);
            data.creationTime = Utilities.castFromAPIFormat(data.creationTime);

            data.state = parseInt(data.state, 10);
            data.searchState = parseInt(data.searchState, 10);

            data.level = parseInt(data.level, 10);
            data.averageScore = parseInt(data.averageScore, 10);
            data.totalTranscations = parseInt(data.totalTranscations, 10);

            data.name = decodeURI(data.name);
            //this is just used for presentation, no direct API call to update it
            data.accountValue = parseFloat(data.accountValue);
        }
        return data;
    },
    _toJSON: function () {
        var json = this.toJSON();
        if (this.get('location') instanceof Backbone.Model) {
            json.location = this.get('location').toUiString();
        }
        json.name = decodeURI(json.name);
        json.age = this.getAge();
        return json;
    },
    toJSON: function () {
        var json = _.clone(this.attributes);

        json.birthday = Utilities.castToAPIFormat(this.get('birthday'));
        if (this.get('location') instanceof Backbone.Model) {
            json.location = this.get('location').toJSON();
        }
        if (this.get('searchRepresentation') instanceof Backbone.Model) {
            json.searchRepresentation = this.get('searchRepresentation').toJSON();
        }
        //these 2 are actually ignored by server side, placing here for uniformity
        json.lastLogin = Utilities.castToAPIFormat(this.get('lastLogin'));
        json.creationTime = Utilities.castToAPIFormat(this.get('creationTime'));
        json.name = encodeURI(json.name);
        return json;
    },

    toDropdownJSON: function () {
        var json = {};

        json.userId = this.get('userId');
        json.imgPath = this.get('imgPath');
        json.name = this.get('name');
        json.gender = this.get('gender');
        json.averageScore = this.get('averageScore');
        json.location = this.get('location').toUiString();
        return json;
    }
});

var Users = Backbone.Collection.extend({

    model: User,

    url: Constants.origin + "/api/v1.0/users/watchMessage",

    initialize: function (urlOverride) {
        _.bindAll(this, 'overrideUrl');
        if ( typeof urlOverride !== 'undefined') {
            this.url = urlOverride;
        }
    },

    overrideUrl: function (urlOverride) {
        if ( typeof urlOverride !== 'undefined') {
            this.url = urlOverride;
        }
    }
});
var Message = Backbone.Model.extend({
    //TODO fill in Constants with enum int mapping
    defaults: function () {
        return {
            "messageId": -1,
            "ownerId": -1,
            "owner": {},

            "transactionList": [], //new ArrayList<Transaction>(),

            "isRoundTrip": false,

            "departure_location": {},
            "departure_time": new Date (),
            "departure_timeSlot": 0,
            "departure_seatsNumber": 0,
            "departure_seatsBooked": 0,
            "departure_priceList": [], //If only single price is set, then priceList has length 1

            "arrival_location": {},
            "arrival_time": new Date (),
            "arrival_timeSlot": 0,
            "arrival_seatsNumber": 0,
            "arrival_seatsBooked": 0,
            "arrival_priceList": [],

            "paymentMethod": Constants.paymentMethod.offline,
            "note": "deault",
            "type": Constants.messageType.ask,
            "genderRequirement": Constants.gender.both,
            "state": Constants.messageState.closed,

            "creationTime": new Date (),
            "editTime": new Date (),
            "historyDeleted": false
        };
    },

    idAttribute: "messageId",

    urlRoot: Constants.origin + "/api/v1.0/dianming/dianming",

    initialize: function (urlRootOverride) {
        _.bindAll(this, 'overrideUrl', 'isNew', 'parse', 'toJSON', '_toJSON');

        if (typeof urlRootOverride !== 'undefined') {
            this.urlRoot = urlRootOverride;
        }
    },

    overrideUrl: function (urlRootOverride) {
        if (typeof urlRootOverride !== 'undefined') {
            this.urlRoot = urlRootOverride;
        }
    },

    isNew: function () {
        return this.id === -1;
    },

    parse: function (data) {

        data.messageId = parseInt(data.messageId, 10);
        data.ownerId = parseInt(data.ownerId, 10);

        data.owner = new User (data.owner, {
            'parse': true
        });
        data.isRoundTrip = data.isRoundTrip;

        data.departure_location = new UserLocation (data.departure_location, {
            'parse': true
        });
        data.departure_time = Utilities.castFromAPIFormat(data.departure_time);
        data.departure_timeSlot = parseInt(data.departure_timeSlot, 10);
        data.departure_seatsNumber = parseInt(data.departure_seatsNumber, 10);
        data.departure_seatsBooked = parseInt(data.departure_seatsBooked, 10);

        data.arrival_location = new UserLocation (data.arrival_location, {
            'parse': true
        });
        data.arrival_time = Utilities.castFromAPIFormat(data.arrival_time);
        data.arrival_timeSlot = parseInt(data.arrival_timeSlot, 10);
        data.arrival_seatsNumber = parseInt(data.arrival_seatsNumber, 10);
        data.arrival_seatsBooked = parseInt(data.arrival_seatsBooked, 10);

        data.paymentMethod = parseInt(data.paymentMethod, 10);

        data.type = parseInt(data.type, 10);
        data.genderRequirement = parseInt(data.genderRequirement, 10);
        data.state = parseInt(data.state, 10);

        data.creationTime = Utilities.castFromAPIFormat(data.creationTime);
        data.editTime = Utilities.castFromAPIFormat(data.editTime);
        data.note = decodeURI(data.note);

        return data;
    },

    _toJSON: function () {
        var json = this.toJSON();
        // Security protection against XSS
        json.note = this.escape("note");
        // json.departure_location = this.get('departure_location').toUiString();
        json.departure_time = Utilities.getDateString(this.get('departure_time'));

        // json.arrival_location = this.get('arrival_location').toUiString();
        json.arrival_time = Utilities.getDateString(this.get('arrival_time'));

        //these 2 are actually ignored by server side, placing here for uniformity
        var now = new Date();
        now = now.getTime();
        json.expired = false;
        if (this.get("isRoundTrip") && this.get('arrival_time').getTime() < now ) {
            json.expired = true;
        } else if (this.get("isRoundTrip") && this.get('departure_time').getTime() < now ) {
            json.expired = true;
        }
        json.creationTime = Utilities.getDateString(this.get('creationTime'));
        json.editTime = Utilities.getDateString(this.get('editTime'));
        var priceList = this.get("departure_priceList");
        var currentPrice = 0;
        var bookedSeats = this.get("departure_seatsBooked");
        if (priceList.length === 1) {
            currentPrice = priceList[0];
        } else {
            for (var p = 0; p < priceList.length; p++) {
                if (priceList[p] === 0) {
                    priceList[p] = priceList[p - 1];
                }
            }
            if (priceList.length <= bookedSeats) {
                currentPrice = priceList[priceList.length - 1];
            } else {
                currentPrice = priceList[bookedSeats];
            }
        }
        json.currentPrice = currentPrice;
        if (this.get('departure_location') instanceof UserLocation) {
            json.departure_location = this.get('departure_location').toUiString();
        }
        if (this.get('arrival_location') instanceof UserLocation) {
            json.arrival_location = this.get('arrival_location').toUiString();
        }
        
        json.departure_timeSlot = Utilities.getDayTimeSlotText(this.get("departure_timeSlot"));
        json.arrival_timeSlot = Utilities.getDayTimeSlotText(this.get("arrival_timeSlot"));


        if ( typeof this.get('owner')._toJSON === 'function') {
            json.owner = this.get('owner')._toJSON();
        }

        json.note = decodeURI(json.note);

        return json;
    },

    toJSON: function () {
        var json = _.clone(this.attributes);
        if (this.get('owner') instanceof User) {
            json.owner = this.get('owner').toJSON();
        }
        //ignore user here, meaningless to do anything to user persistence from inside message
        if (this.get('departure_location') instanceof UserLocation) {
            json.departure_location = this.get('departure_location').toJSON();
        }
        json.departure_time = Utilities.castToAPIFormat(this.get('departure_time'));

        if (this.get('arrival_location') instanceof UserLocation) {
            json.arrival_location = this.get('arrival_location').toJSON();
        }
        json.arrival_time = Utilities.castToAPIFormat(this.get('arrival_time'));

        //these 2 are actually ignored by server side, placing here for uniformity
        json.creationTime = Utilities.castToAPIFormat(this.get('creationTime'));
        json.editTime = Utilities.castToAPIFormat(this.get('editTime'));

        json.note = encodeURI(json.note);

        return json;
    }
});

var Messages = Backbone.Collection.extend({

    model: Message,

    url: Constants.origin + "/api/v1.0/dianming/dianming",

    initialize: function (urlOverride) {
        _.bindAll(this, 'overrideUrl');
        if ( typeof urlOverride !== 'undefined') {
            this.url = urlOverride;
        }
    },

    overrideUrl: function (urlOverride) {
        if ( typeof urlOverride !== 'undefined') {
            this.url = urlOverride;
        }
    }
});
var Letter = Backbone.Model.extend({

    defaults: {
        'letterId': -1,
        'from_userId': -1,
        'to_userId': -1,
        'type': Constants.LetterType.user,

        'from_user': {},
        'to_user': {},

        'content': '',
        'send_time': new Date (),
        'check_time': new Date (),

        'state': Constants.LetterState.unread,
        'historyDeleted': false
    },

    idAttribute: 'letterId',

    urlRoot: Constants.origin + "/api/v1.0/letter/letter",

    initialize: function (urlRootOverride) {
        _.bindAll(this, 'overrideUrl', 'isNew', 'parse', 'toJSON', '_toJSON', 'toDropdownJSON');

        if (typeof urlRootOverride !== 'undefined') {
            this.urlRoot = urlRootOverride;
        }

    },

    overrideUrl: function (urlRootOverride) {
        if (typeof urlRootOverride !== 'undefined') {
            this.urlRoot = urlRootOverride;
        }
    },

    isNew: function () {
        return this.id === -1;
    },

    parse: function (data) {

        data.letterId = parseInt(data.letterId, 10);
        data.from_userId = parseInt(data.from_userId, 10);
        data.to_userId = parseInt(data.to_userId, 10);
        data.type = parseInt(data.type, 10);

        if ( typeof data.from_user.userId !== 'undefined') {
            data.from_user = new User (data.from_user, {
                'parse': true
            });
        }
        if ( typeof data.to_user.userId !== 'undefined') {
            data.to_user = new User (data.to_user, {
                'parse': true
            });
        }

        data.send_time = Utilities.castFromAPIFormat(data.send_time);
        data.check_time = Utilities.castFromAPIFormat(data.check_time);

        data.state = parseInt(data.state, 10);
        data.content = decodeURI(data.content);

        return data;
    },

    //place holder, since notification are never posted to server
    toJSON: function () {
        var json = _.clone(this.attributes);
        json.content = encodeURI(json.content);
        return json;
    },

    _toJSON: function () {
        var json = this.toDropdownJSON();
        return json;
    },

    toDropdownJSON: function () {
        var json = this.toJSON();
        json.send_time = Utilities.castToAPIFormat(this.get('send_time'));

        if ( typeof this.get('from_user')._toJSON === 'function') {
            json.from_user = this.get('from_user')._toJSON();
        }
        if ( typeof this.get('to_user')._toJSON === 'function') {
            json.to_user = this.get('to_user')._toJSON();
        }
        json.content = decodeURI(json.content);
        return json;
    }
});

var Letters = Backbone.Collection.extend({

    model: Letter,

    //use 1 to force an request with id attr
    url: Constants.origin + "/api/v1.0/letter/letter/1",

    initialize: function (urlOverride) {
        _.bindAll(this, 'overrideUrl');
        if ( typeof urlOverride !== 'undefined') {
            this.url = urlOverride;
        }

    },

    overrideUrl: function (urlOverride) {
        if ( typeof urlOverride !== 'undefined') {
            this.url = urlOverride;
        }
    }
});

(function () {
    'use strict';
    
    var defaultLocations = new DefaultUserLocations();

    //constructor
    this.LocationService = function () {
        this.isLoading = true;
        var self = this;
        defaultLocations.fetch({
            dataType:'json',

            success: function(model, response){
                self.timeStamp = new Date();
                self.isLoading = false;
                Info.log("Defualt Location Successfully Loaded");
            },

            error: function(model, response){
                self.isLoading = false;
                Info.warn("Default Location Not Loaded Properly");
            }
        });

    };

    LocationService.prototype.shouldReload = function() {
        if (typeof this.timeStamp === 'undefined' || defaultLocations.length === 0){
            return true;
        }
        var expireTime = 24*3600*1000,   //expires in 24 hours
            curTime = new Date(),
            timeDiff = curTime.getTime() - this.timeStamp.getTime();
        
        return timeDiff >= expireTime;
    };

    LocationService.prototype.getDefaultLocations = function(callback, inst){
        if (this.shouldReload()){
            this.reload(callback, inst);
        } else if (inst && callback) {
            inst.defaultLocations = defaultLocations;
            callback();
        }
        //no matter reload or not, always immediately return the current cache, ensuring total sync is too much effort
        return defaultLocations;
    };

    LocationService.prototype.reload = function(callback, inst){
        if (this.isLoading && !callback){
            return;
        }
        this.isLoading = true;
        var self = this;

        defaultLocations.fetch({
            dataType:'json',

            success:function(model, response){
                self.timeStamp = new Date();
                self.isLoading = false;
                Info.log("Defualt Location successfully loaded");
                if (typeof inst !== 'undefined'){
                    inst.defaultLocations = defaultLocations;
                }
                if (callback) {
                    callback();
                }
            },

            error: function(model, response){
                self.isLoading = false;
                Info.warn("Default Location Not Loaded Properly");
            }
        });

    };
    
}).call(this);
var testMockObj = {
    "testMode": false,
    "sampleMessages": new Messages(),

    "sampleMessageA": (new Message()).set("messageId", 1001).set("ownerId",1560198).set("departure_time", new Date()).set("arrival_time", new Date())
                                                            .set("departure_timeSlot", 15).set("arrival_timeSlot", 15).set("isRoundTrip", true)
                                                            .set("departure_location", new UserLocation().set("province", "Ontario").set("city","Waterloo"))
                                                            .set("arrival_location", new UserLocation().set("province", "Ontario").set("city","Toronto"))
                                                            .set("departure_seatsNumber", 3).set("arrival_seatsNumber", 3).set("type", 1)
                                                            .set("departure_seatsBooked", 1).set("arrival_seatsBooked", 3)
                                                            .set("departure_priceList", [30,20,10, 9,8,7,6,6,6,6,6,6,6,6,6,6,6,6,6]).set("arrival_priceList", [30,20,10, 9,8,7,6,6,6,6,6,6,6,6,6,6,6,6,6]),
    "sampleMessageB": (new Message()).set("messageId", 1002).set("ownerId",1560198).set("departure_time", new Date()).set("arrival_time", new Date())
                                                            .set("departure_timeSlot", 15).set("arrival_timeSlot", 15).set("isRoundTrip", true)
                                                            .set("departure_location", new UserLocation().set("province", "Ontario").set("city","Waterloo"))
                                                            .set("arrival_location", new UserLocation().set("province", "Ontario").set("city","Toronto"))
                                                            .set("departure_seatsNumber", 3).set("arrival_seatsNumber", 3).set("type", 1)
                                                            .set("departure_seatsBooked", 1).set("arrival_seatsBooked", 1)
                                                            .set("departure_priceList", [10, 9, 8]).set("arrival_priceList", [10, 9, 8]),
    "sampleMessageC": (new Message()).set("messageId", 1003).set("ownerId",10000).set("departure_time", new Date()).set("arrival_time", new Date())
                                                            .set("departure_timeSlot", 15).set("arrival_timeSlot", 15)
                                                            .set("departure_location", new UserLocation().set("province", "Ontario").set("city","Waterloo"))
                                                            .set("arrival_location", new UserLocation().set("province", "Ontario").set("city","Toronto"))
                                                            .set("departure_seatsNumber", 3).set("departure_seatsNumber", 3).set("type", 1)
                                                            .set("departure_seatsBooked", 1).set("departure_seatsBooked", 3)
                                                            .set("departure_priceList", [30]).set("arrival_priceList", [30]),
    "sampleMessageD": (new Message()).set("messageId", 1004).set("ownerId",10000).set("departure_time", new Date()).set("arrival_time", new Date())
                                                            .set("departure_timeSlot", 15).set("arrival_timeSlot", 15)
                                                            .set("departure_location", new UserLocation().set("province", "Ontario").set("city","Waterloo"))
                                                            .set("arrival_location", new UserLocation().set("province", "Ontario").set("city","Toronto"))
                                                            .set("departure_seatsNumber", 3).set("departure_seatsNumber", 3).set("type", 1)
                                                            .set("departure_seatsBooked", 1).set("departure_seatsBooked", 3)
                                                            .set("departure_priceList", [10, 9, 8]).set("arrival_priceList", [10, 9, 8]),
    "sampleMessageE": (new Message()).set("messageId", 1005).set("ownerId",10000).set("departure_time", new Date()).set("arrival_time", new Date())
                                                            .set("departure_timeSlot", 15).set("arrival_timeSlot", 15)
                                                            .set("departure_location", new UserLocation().set("province", "Ontario").set("city","Waterloo"))
                                                            .set("arrival_location", new UserLocation().set("province", "Ontario").set("city","Toronto"))
                                                            .set("departure_seatsNumber", 3).set("departure_seatsNumber", 3).set("type", 1)
                                                            .set("departure_seatsBooked", 1).set("departure_seatsBooked", 3)
                                                            .set("departure_priceList", [10, 9, 8]).set("arrival_priceList", [10, 9, 8]),
    "sampleMessageF": (new Message()).set("messageId", 1006).set("ownerId",10000).set("departure_time", new Date()).set("arrival_time", new Date())
                                                            .set("departure_timeSlot", 15).set("arrival_timeSlot", 15)
                                                            .set("departure_location", new UserLocation().set("province", "Ontario").set("city","Waterloo"))
                                                            .set("arrival_location", new UserLocation().set("province", "Ontario").set("city","Toronto"))
                                                            .set("departure_seatsNumber", 3).set("departure_seatsNumber", 3).set("type", 1)
                                                            .set("departure_seatsBooked", 1).set("departure_seatsBooked", 3)
                                                            .set("departure_priceList", [10, 9, 8]).set("arrival_priceList", [10, 9, 8]),
    "sampleMessageG": (new Message()).set("messageId", 1007).set("ownerId",10000).set("departure_time", new Date()).set("arrival_time", new Date())
                                                            .set("departure_timeSlot", 15).set("arrival_timeSlot", 15)
                                                            .set("departure_location", new UserLocation().set("province", "Ontario").set("city","Waterloo"))
                                                            .set("arrival_location", new UserLocation().set("province", "Ontario").set("city","Toronto"))
                                                            .set("departure_seatsNumber", 3).set("departure_seatsNumber", 3).set("type", 1)
                                                            .set("departure_seatsBooked", 1).set("departure_seatsBooked", 3)
                                                            .set("departure_priceList", [10, 9, 8]).set("arrival_priceList", [10, 9, 8]),
    "sampleMessageH": (new Message()).set("messageId", 1008).set("ownerId",10000).set("departure_time", new Date()).set("arrival_time", new Date())
                                                            .set("departure_timeSlot", 15).set("arrival_timeSlot", 15)
                                                            .set("departure_location", new UserLocation().set("province", "Ontario").set("city","Waterloo"))
                                                            .set("arrival_location", new UserLocation().set("province", "Ontario").set("city","Toronto"))
                                                            .set("departure_seatsNumber", 3).set("departure_seatsNumber", 3).set("type", 1)
                                                            .set("departure_seatsBooked", 1).set("departure_seatsBooked", 3)
                                                            .set("departure_priceList", [10, 9, 8]).set("arrival_priceList", [10, 9, 8]),
    "sampleUser": (new User()).set("userId", 1560198).set("name", "卢卡子").set("imgPath","").set("location", (new UserLocation()).set("match_Id", 4)),
    "sampleUsers": new Users(),
    "sampleUserA": (new User()).set("userId", 1),
    "sampleUserB": (new User()).set("userId", 2),
    "sampleUserC": (new User()).set("userId", 3),
    "sampleUserD": (new User()).set("userId", 4),
    "sampleUserE": (new User()).set("userId", 5),
    "sampleUserF": (new User()).set("userId", 6),

    "sampleTransactions": new Transactions(),
    "sampleTransactionA": (new Transaction()).set("transactionId", 101).set("state",0).set("type",1).set("departure_seatsBooked",2).set("arrival_seatsBooked",2).set("departure_priceList",[20,18, 15]),
    "sampleTransactionB": (new Transaction()).set("transactionId", 102).set("state",1).set("type",1).set("departure_seatsBooked",2).set("arrival_seatsBooked",2).set("departure_priceList",[20,18, 15]),
    "sampleTransactionC": (new Transaction()).set("transactionId", 103).set("state",2).set("type",1).set("departure_seatsBooked",2).set("arrival_seatsBooked",2).set("departure_priceList",[20,18, 15]),
    "sampleTransactionD": (new Transaction()).set("transactionId", 104).set("state",3).set("type",1).set("departure_seatsBooked",2).set("arrival_seatsBooked",2).set("departure_priceList",[20,18, 15]).set("customerId", 10000),
    "sampleTransactionE": (new Transaction()).set("transactionId", 105).set("state",4).set("type",1).set("departure_seatsBooked",2).set("arrival_seatsBooked",2).set("departure_priceList",[20,18, 15]),
    "sampleTransactionF": (new Transaction()).set("transactionId", 106).set("state",5).set("type",1).set("departure_seatsBooked",2).set("arrival_seatsBooked",2).set("departure_priceList",[20,18, 15]),

    "sampleNotifications": new Notifications(),
    "sampleNotificationA": (new Notification()).set("notificationId", 1).set("notificationEvent", 0).set("creationTime", new Date()),
    "sampleNotificationB": (new Notification()).set("notificationId", 2).set("notificationEvent", 1).set("creationTime", new Date()),
    "sampleNotificationC": (new Notification()).set("notificationId", 3).set("notificationEvent", 2).set("creationTime", new Date()),
    "sampleNotificationD": (new Notification()).set("notificationId", 4).set("notificationEvent", 3).set("creationTime", new Date()),
    "sampleNotificationE": (new Notification()).set("notificationId", 5).set("notificationEvent", 4).set("creationTime", new Date()),
    "sampleNotificationF": (new Notification()).set
    ("notificationId", 6).set("messageSummary", "sample message"),

    
    "sampleLocationSZ": new UserLocation().set("province", "江苏").set("city","苏州"),
    "sampleLocationNJ": new UserLocation().set("province", "江苏").set("city","南京"),
};
testMockObj.sampleNotificationA.set("initUser", testMockObj.sampleUser);
testMockObj.sampleNotificationB.set("initUser", testMockObj.sampleUser);
testMockObj.sampleNotificationC.set("initUser", testMockObj.sampleUser);
testMockObj.sampleNotificationD.set("initUser", testMockObj.sampleUser);
testMockObj.sampleNotificationE.set("initUser", testMockObj.sampleUser);
testMockObj.sampleNotificationF.set("initUser", testMockObj.sampleUser);
testMockObj.sampleTransactions.add([testMockObj.sampleTransactionA, testMockObj.sampleTransactionB, testMockObj.sampleTransactionC, testMockObj.sampleTransactionD, testMockObj.sampleTransactionE, testMockObj.sampleTransactionF]);
testMockObj.sampleMessages.add([testMockObj.sampleMessageA, testMockObj.sampleMessageB, testMockObj.sampleMessageC, testMockObj.sampleMessageD, testMockObj.sampleMessageE, testMockObj.sampleMessageF, testMockObj.sampleMessageG, testMockObj.sampleMessageH]);
testMockObj.sampleNotifications.add([testMockObj.sampleNotificationA, testMockObj.sampleNotificationB, testMockObj.sampleNotificationC, testMockObj.sampleNotificationD, testMockObj.sampleNotificationE, testMockObj.sampleNotificationF]);
testMockObj.sampleUsers.add([testMockObj.sampleUserA, testMockObj.sampleUserA, testMockObj.sampleUserC, testMockObj.sampleUserD, testMockObj.sampleUserE, testMockObj.sampleUserF]);
(function () {
	'use strict';
	this.SessionManager = function(){

		this.apis = new ApiResource();
		this.sessionUser = new User();

		this.sessionUser.overrideUrl(this.apis.users_findSession);

		this.timeStamp = new Date();

		//this is used to reset all manager data upon logouts
		this.sessionRegistraTable = [];
		
		this.cur_notifications = new Notifications();
		this.cur_notificationsTimeStamp = new Date();
		this.cur_socialList = new Users();
		this.cur_socialListTimeStamp = new Date();
		this.cur_letters = new Letters();
		this.cur_lettersTimeStamp = new Date();

		this.cur_uncheckedNotifications = new Notifications();
		this.cur_uncheckedLetters = new Letters();
		this.cur_searchHistory = new SearchRepresentations();

	};

	SessionManager.prototype.resgisterManager = function(manager) {
		this.sessionRegistraTable.push(manager);
	};

	SessionManager.prototype.releaseManager = function() {
		for (var managerIndex = 0; managerIndex < this.sessionRegistraTable.length; managerIndex++){
			this.sessionRegistraTable[managerIndex].release();
		}
	};

	SessionManager.prototype.hasSession = function(){
		if (testMockObj.testMode) return true;
		return this.sessionUser.id >= 0;
	};

	//avoid using this
	SessionManager.prototype.getSessionUser = function(){
		return this.sessionUser;
	};

	SessionManager.prototype.getUserId = function() {
		return  this.sessionUser.id;
	};

	SessionManager.prototype.getTimeStamp = function() {
		return this.timeStamp;
	};
	
	SessionManager.prototype.getCurUserNotifications = function(){
		return this.cur_notifications;
	};
	
	SessionManager.prototype.getCurUserFavorites = function(){
		return this.cur_socialList;
	};

	SessionManager.prototype.getCurUserLetters = function() {
		return this.cur_letters;
	};

	SessionManager.prototype.getCurUserUncheckedNotifications = function() {
		return this.cur_uncheckedNotifications;
	};

	SessionManager.prototype.getCurUserUncheckedLetters = function() {
		return this.cur_uncheckedLetters;
	};
	
	//using the find session API to determine if the uer has logged in or not
	SessionManager.prototype.fetchSession = function(asyncFlag, callback){
		var self = this;
		
		this.sessionUser.overrideUrl(this.apis.users_findSession);
		if (testMockObj.testMode) {
			this.sessionUser = testMockObj.sampleUser;
			if(callback){
				callback.success();
			}
			return;
		}
		//make sure the session user is new, and sends Get to /findSession
		this.sessionUser.fetch({
			async:asyncFlag,
            dataType:'json',

            success:function(model, response){
				self.releaseManager();
				if (self.hasSession()){
					self.fetchCurUserNotifications();
					self.fetchCurUserLetters();
					self.fetchCurUserFavorites();
				}
				if(callback){
					callback.success();
				}
            },

            error: function(model, response){
                Constants.dWarn("SessionManager::updateSession:: fetch failed with response:");
                Constants.dLog(response);

                if(callback){
					callback.error(response);
				}
            }
        });

        this.timeStamp = new Date();

	};

	SessionManager.prototype.login = function(emailVal, passwordVal, callback){
		//if invalid input or is already logged in, can not login
		if (!(emailVal && passwordVal)){
			Constants.dWarn("SessionManager::lougout:: invalid parameter");
			return;
		}
		if (this.hasSession()){
			Constants.dWarn("SessionManager::login::already logged in, conflict, still sending the login request");
			app.navigate("/main", true);
		}
		var self = this;

		this.sessionUser.overrideUrl(this.apis.users_login);
		//make sure the user is new, so no id is in the api path
		this.sessionUser.set('email', emailVal);
		this.sessionUser.set('password', passwordVal);
		this.sessionUser.save({},{
            dataType:'json',

            success:function(model, response){

				self.fetchCurUserNotifications();
				self.fetchCurUserLetters();
				self.fetchCurUserFavorites();

				Constants.dLog(model);
				if(callback){
					callback.success(response);
				}
            },

            error: function(model, response){
                Constants.dWarn("SessionManager::login:: login failed with response:");
                Constants.dLog(response);
                if(callback){
					callback.error(response);
				}
            }
        });

        this.timeStamp = new Date();

	};

	SessionManager.prototype.logout = function(callback){
		if (!this.hasSession()){
			Constants.dWarn("SessionManager::logout::not logged in, conflict, still sending the logout request");
		}

		var self = this;

		this.sessionUser.overrideUrl(this.apis.users_logout);
		//if session user is new, no id in path, then already logged out
		//if session user is not new, then has id in path, will launch right call
		this.sessionUser.save({},{
            dataType:'json',

            success:function(model, response){
				if(callback){
					callback.success(response);
				}
            },

            error: function(model, response){
                Constants.dWarn("SessionManager::logout:: logout failed with response:");
                Constants.dLog(response);

                if(callback){
					callback.error(response);
				}
            }
        });

        this.timeStamp = new Date();
	};

	
	SessionManager.prototype.fetchCurUserNotifications = function(callback){
        var self = this;
        if (!this.hasSession()){
                Constants.dWarn("SessionManager::fetchNotificationList:: session does not exist, exit");
                return;
        }

        this.cur_notifications.fetch({
			data: $.param({ 'userId': this.getUserId()}),
			dataType:'json',
			reset: true,

			success:function(model, response){
				self.cur_notificationsTimeStamp = new Date();
				if(callback){
					//should've used binding, not retrurning or passing models back
					callback.success(response);
				}
			},
			error: function(model, response){
				Constants.dWarn("SessionManager::fetchNotificationList:: fetch failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error(response);
				}
			}
		});
	};

	SessionManager.prototype.fetchCurUserUncheckedNotifications = function(callback) {
		var self = this;
        if (!this.hasSession()){
                Constants.dWarn("SessionManager::fetchCurUserUncheckedNotifications:: session does not exist, exit");
                return;
        }
        this.cur_uncheckedNotifications.overrideUrl(users_uncheckedNotification + '/' + this.getUserId());
        this.cur_uncheckedNotifications.fetch({
			dataType:'json',
			reset: true,

			success:function(model, response){
				if(callback){
					callback.success();
				}
			},
			error: function(model, response){
				Constants.dWarn("SessionManager::fetchCurUserUncheckedNotifications:: fetch failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error(response);
				}
			}
		});
	};


	SessionManager.prototype.fetchCurUserLetters = function(callback){
		var self = this;
        if (!this.hasSession()){
                Constants.dWarn("SessionManager::fetchCurUserLetters:: session does not exist, exit");
                return;
        }
        var letterFetchOptions = {};
        letterFetchOptions.direction = Constants.LetterDirection.inbound;
        letterFetchOptions.userId = this.getUserId();
        letterFetchOptions.targetUserId = -1;
        letterFetchOptions.targetType = Constants.LetterType.user;

        this.cur_letters.overrideUrl(this.apis.letter_letter + '/' + this.getUserId());
        this.cur_letters.fetch({
			data: $.param(letterFetchOptions),
			dataType:'json',
			reset: true,

			success:function(model, response){
				self.cur_lettersTimeStamp = new Date();
				if(callback){
					callback.success();
				}
			},
			error: function(model, response){
				Constants.dWarn("SessionManager::fetchCurUserLetters:: fetch failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error(response);
				}
			}
		});
	};

	SessionManager.prototype.fetchCurUserUncheckedLetters = function(callback) {
		var self = this;
        if (!this.hasSession()){
                Constants.dWarn("SessionManager::fetchCurUserUncheckedLetters:: session does not exist, exit");
                return;
        }
        this.cur_uncheckedLetters.overrideUrl(this.apis.users_uncheckedLetter + '/' + this.getUserId());
        this.cur_uncehckedLetters.fetch({
			dataType:'json',
			reset: true,

			success:function(model, response){
				if(callback){
					callback.success();
				}
			},
			error: function(model, response){
				Constants.dWarn("SessionManager::fetchCurUserUncheckedLetters:: fetch failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error(response);
				}
			}
		});
	};
	
	SessionManager.prototype.fetchCurUserFavorites = function(callback) {
		var self = this;

		if (!this.hasSession()){
			Constants.dWarn("SessionManager::fetchWatchedUsers:: session does not exist, exit");
			return;
		}

		this.cur_socialList.overrideUrl(this.apis.users_watchUser + '/' + this.getUserId());
		this.cur_socialList.fetch({
			data: $.param({ 'intendedUserId': this.getUserId()}),
			dataType:'json',
			reset: true,

			success:function(model, response){
				self.socialList_timeStamp = new Date();
				if(callback){
					callback.success();
				}
			},
			error: function(model, response){
				Constants.dWarn("SessionManager::fetchSocialList:: fetch failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error(response);
				}
			}
		});
	};

	SessionManager.prototype.fetchCurUserSearchHistory = function(callback) {
		var self = this;

		if (!this.hasSession()){
			Constants.dWarn("SessionManager::fetchCurUserSearchHistory:: session does not exist, exit");
			return;
		}

		this.cur_searchHistory.overrideUrl(this.apis.users_searchHistory + '/' + this.getUserId());
		this.cur_searchHistory.fetch({
			dataType:'json',
			reset: true,

			success:function(model, response){
				if(callback){
					callback.success();
				}
			},
			error: function(model, response){
				Constants.dWarn("SessionManager::fetchCurUserSearchHistory:: fetch failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error(response);
				}
			}
		});
	};
	
	SessionManager.prototype.handleSocket = function(eventName, data) {
		Info.log("Session Manager received socket with event: " + eventName + " and data: " + data);
		if (eventName === 'newNotification'){
			this.fetchCurUserNotifications();
		}
		else if (eventName === 'newLetter'){
			this.fetchCurUserLetters();
			if (app.letterView){
				app.letterView.onNewLetter(data);
			}
		}
	};

}).call(this);

(function () {
	'use strict';

	this.UserManager = function(sessionManager){

		this.apis = new ApiResource();

		//time stamp updates when user data changes or sycns
		this.timeStamp = new Date();

		//thses time stamps records the time when the lastest data is fetches from server
		this.socialList_timeStamp = new Date();
		this.historyList_timeStamp = new Date();
		this.transactionList_timeStamp = new Date();
		this.notificationList_timeStamp = new Date();
		this.letter_timeStamp = new Date();

		this.sessionManager = sessionManager;
		this.sessionManager.resgisterManager(this);
	};


	//reset the manager state upon logout
	UserManager.prototype.release = function() {
		this.sessionUser = this.sessionManager.getSessionUser();

		this.timeStamp = new Date();
		this.socialList_timeStamp = new Date();
		this.historyList_timeStamp = new Date();
		this.transactionList_timeStamp = new Date();
		this.notificationList_timeStamp = new Date();
		this.letter_timeStamp = new Date();

	};


	UserManager.prototype.getTimeStamp = function() {
		return this.timeStamp;
	};
	UserManager.prototype.getSocialListTimeStamp = function() {
		return this.socialList_timeStamp;
	};
	UserManager.prototype.getHistoryListTimeStamp = function() {
		return this.historyList_timeStamp;
	};
	UserManager.prototype.getTransactionListTimeStamp = function() {
		return this.transactionList_timeStamp;
	};
	UserManager.prototype.getNotificationListTimeStamp = function() {
		return this.notificationList_timeStamp;
	};
	UserManager.prototype.getLetterTimeStamp = function() {
		return this.letter_timeStamp;
	};



	UserManager.prototype.registerUser = function(newUser, callback) {
		var self = this;

		if (this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::registerUser::currentUser already has session, conflict, exit");
			return;
		}

		var sessionUser = newUser;
		sessionUser.overrideUrl(this.apis.users_user);
		sessionUser.set('userId', -1);
		sessionUser.save({},{
            dataType:'json',

            success:function(model, response){
				self.timeStamp = new Date();
				//app.sessionManager.sessionUser = sessionUser;
				if(callback){
					callback.success(sessionUser);
				}
            },
            error: function(model, response){
				Constants.dWarn("UserManager::register:: action failed");
				if(callback){
					callback.error(response);
				}
            }
        });
	};

	//will be used to display personal informatiom page only
	UserManager.prototype.fetchUser = function(intendedUserId, callback){
		if (testMockObj.testMode) {
			callback.success(testMockObj.sampleUser);
			return;
		}
		var self = this;

		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::getUser::currentUser does not have session, exit");
			return;
		}

		var user = new User();
		user.overrideUrl(this.apis.users_user);
		user.set('userId', this.sessionManager.getUserId());
		user.fetch({
			data: $.param({ 'intendedUserId': intendedUserId}),
            dataType:'json',

            success:function(model, response){
				if(callback){
					callback.success(user);
				}
            },
            error: function(model, response){
                Constants.dWarn("UserManager::getUser:: fetch failed with response:");
                Constants.dLog(response);
                if(callback){
					callback.error(response);
				}
            }
        });
	};


	UserManager.prototype.postImage = function(callback) {
		//TODO
	};

	//the call back should accept the return data (true or false)
	UserManager.prototype.verifyEmail = function(emailVal, callback) {
		//don't care about session
		if (!emailVal){
			Constants.dWarn("UserManager::verifyEmail:: invalid parameter");
			return;
		}

		var self = this;

		$.ajax({
			type: "GET",
			async: true,
			url: self.apis.users_email,
			data: $.param({ email: emailVal}),
			dataType: 'json',
			success: function(data){
				Constants.dLog("email verification call succeeded with response:");
				Constants.dLog(data);

				if(callback && callback.success){
					callback.success(data.val);
				}
			},
			error: function (data, textStatus, jqXHR){
				alert("请稍后再试");
				Constants.dWarn("UserManager::verifyEmail:: action failed");
				if(callback && callback.error){
					callback.error(data.val);
				}
			}
		});
	};



	UserManager.prototype.changeContactInfo = function(name, gender, phone, qq, birthday, location, callback) {
		//if invalid input or is already logged in, can not change contact information
		if (!(name && (typeof gender === 'number'))){
			Constants.dWarn("UserManager::changeContactInfo:: invalid parameter");
			return;
		}

		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::changeContactInfo:: session does not exist, exit");
			return;
		}

		var self = this;

		var sessionUser = app.sessionManager.getSessionUser();
		sessionUser.overrideUrl(this.apis.users_contactInfo);
		sessionUser.set('name', name);
		sessionUser.set('gender', gender);
		sessionUser.set('phone', phone);
		sessionUser.set('qq', qq);
		sessionUser.set('birthday', birthday);
		sessionUser.set('location', location);
		sessionUser.save({},{
            dataType:'json',

            success:function(model, response){
				self.timeStamp = new Date();
				if(callback){
					callback.success(sessionUser);
				}
            },
            error: function(model, response){
                alert("请稍后再试");
				Constants.dWarn("UserManager::changeContactInfo:: action failed");
				if(callback){
					callback.error(response);
				}
            }
        });

	};

	UserManager.prototype.changeLocation = function(location, callback) {
		//if invalid input or is already logged in, can not change location
		if (!(location)){
			Constants.dWarn("UserManager::changeLocation:: invalid parameter");
			return;
		}

		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::changeLocation:: session does not exist, exit");
			return;
		}

		var self = this;

		var sessionUser = app.sessionManager.getSessionUser();
		sessionUser.overrideUrl(this.apis.users_singleLocation);
		//url encoded, not setting in user
		sessionUser.save({},{
			data: JSON.stringify({ 'location': location.toString()}),
            dataType:'json',

            success:function(model, response){
				self.timeStamp = new Date();
				if(callback){
					callback.success(sessionUser);
				}
            },
            error: function(model, response){
                alert("请稍后再试");
				Constants.dWarn("UserManager::changeLocation:: action failed");
				if(callback){
					callback.error(response);
				}
            }
        });
	};



	UserManager.prototype.toggleNotices = function(shouldEmail, shouldPhone, callback) {
		var self = this;

		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::toggleEmailNotice:: session does not exist, exit");
			return;
		}

		var sessionUser = app.sessionManager.getSessionUser();
		sessionUser.overrideUrl(this.apis.users_toggleNotices);
		//url encoded, not setting in user
		sessionUser.fetch({
			data: $.param({ 'emailNotice': shouldEmail, 'phoneNotice': shouldPhone}),
            dataType:'json',

            success:function(model, response){
				self.timeStamp = new Date();
				if(callback){
					callback.success(sessionUser);
				}
            },
            error: function(model, response){
                alert("请稍后再试");
				Constants.dWarn("UserManager::toggleNotices:: action failed");
				if(callback){
					callback.error(response);
				}
            }
        });

	};




	/********************* Authentication Related ***************************/

	UserManager.prototype.changePassword = function(oldPassword, newPassword, confirmNewPassword, callback) {
		//if invalid input or is already logged in, can not change password
		if (!(oldPassword && newPassword && confirmNewPassword)){
			Constants.dWarn("UserManager::changePassword:: invalid parameter");
			return;
		}

		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::changePassword:: session does not exist, exit");
			return;
		}

		var self = this;

		$.ajax({
			type: "PUT",
			async: true,
			url: self.apis.users_changePassword + '/' + self.sessionManager.getUserId(),
			data: JSON.stringify({ 'oldPassword': oldPassword, 'newPassword': newPassword, 'confirmNewPassword': confirmNewPassword}),
			dataType: 'json',
			contentType: 'application/json',	//setting this should be covering the data into PUT body
			success: function(data){
				if(callback){
					callback.success();
				}
			},
			error: function (data, textStatus, jqXHR){
				alert("请稍后再试");
				Constants.dWarn("UserManager::changePassword:: action failed");
				if(callback){
					callback.error(response);
				}
			}
		});
	};

	UserManager.prototype.activateAccount = function(key, callback) {
		var self = this;

		if (!(key)){
			Constants.dWarn("UserManager::activateAccount:: invalid parameter");
			return;
		}
		if (this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::activateAccount:: session already exists, exit");
			app.navigate("/main", true);
			return;
		}


		$.ajax({
			type: "GET",
			async: true,
			url: self.apis.users_emailActivation,
			data: $.param({'key': key}),
			dataType: 'json',
			success: function(data){
				//update session
				if(callback){
					callback.success();
				}

			},
			error: function (data, textStatus, jqXHR){
				alert("请稍后再试");
				Constants.dWarn("UserManager::activateAccount:: action failed");
				if(callback){
					callback.error(response);
				}
			}
		});
	};

	UserManager.prototype.resendActivationEmail = function(callback) {
		var self = this,
			newTopBarUser = new User();

		if (this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::resendActivationEmail:: session already exists, exit");
			return;
		}


		$.ajax({
			type: "GET",
			async: true,
			url: self.apis.users_resendActivationEmail + '/' + self.sessionManager.getUserId(),
			dataType: 'json',
			success: function(data){
				if(callback){
					callback.success();
				}
			},
			error: function (data, textStatus, jqXHR){
				alert("请稍后再试");
				Constants.dWarn("UserManager::resendActivationEmail:: action failed");
				if(callback){
					callback.error(response);
				}
			}
		});
	};

	UserManager.prototype.forgetPassword = function(email, callback) {
		var self = this;
		if (!(email)){
			Constants.dWarn("UserManager::forgetPassword:: invalid parameter");
			return;
		}
		if (this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::forgetPassword:: session already exists, exit");
			return;
		}

		$.ajax({
			type: "GET",
			async: true,
			url: self.apis.users_forgetPassword,
			data: $.param({'email': email}),
			dataType: 'json',
			success: function(data){
				if(callback){
					callback.success(2);
				}
			},
			error: function (data, textStatus, jqXHR){
				alert("请稍后再试");
				Constants.dWarn("UserManager::forgetPassword:: action failed");
				if(callback){
					callback.error(response);
				}
			}
		});
	};

	UserManager.prototype.findPassword = function(key, newPassword, confirmNewPassword, callback) {
		var self = this;
		if (!(key && newPassword && confirmNewPassword)){
			Constants.dWarn("UserManager::findPassword:: invalid parameter");
			return;
		}
		if (this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::findPassword:: session already exists, exit");
			return;
		}


		$.ajax({
			type: "POST",
			async: true,
			url: self.apis.users_forgetPassword,
			data: JSON.stringify({ 'key': key, 'newPassword': newPassword, 'confirmNewPassword': confirmNewPassword}),
			dataType: 'json',
			contentType: 'application/json',	//setting this should be covering the data into PUT body
			success: function(data){
				self.sessionManager.fetchSession(false, callback);

			},
			error: function (data, textStatus, jqXHR){
				Constants.dWarn("UserManager::findPassword:: action failed");
				if(callback){
					callback.error(data);
				}
			}
		});
	};

	/********************* User Relations ***************************/

	UserManager.prototype.watchUser = function(targetUserId, callback) {
		var self = this;
		if (typeof targetUserId !== 'number'){
			Constants.dWarn("UserManager::watchUser:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::watchUser:: session does not exist, exit");
			return;
		}


		var tempCurUser = new User();
		tempCurUser.overrideUrl(this.apis.users_watchUser);
		tempCurUser.set('userId', self.sessionManager.getUserId());
		tempCurUser.save({},{
			data: JSON.stringify({'targetUserId': targetUserId, 'action': 'watch'}),
            dataType:'json',

            success:function(model, response){
				self.timeStamp = new Date();
				if(callback){
					callback.success(tempCurUser);
				}
            },
            error: function(model, response){
                Constants.dWarn("UserManager::watchUser:: update failed with response:");
                Constants.dLog(response);
                if(callback){
					callback.error(response);
				}
            }
        });
	};

	UserManager.prototype.deWatchUser = function(targetUserId, callback) {
		var self = this;
		if (typeof targetUserId !== 'number'){
			Constants.dWarn("UserManager::deWatchUser:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::deWatchUser:: session does not exist, exit");
			return;
		}


		var tempCurUser = new User();
		//set the id of the temp user to curUserId to confront to API requirements
		tempCurUser.overrideUrl(this.apis.users_watchUser);
		tempCurUser.set('userId', self.sessionManager.getUserId());
		tempCurUser.save({}, {
			data: JSON.stringify({'userId':self.sessionManager.getUserId(),'targetUserId': targetUserId, 'action': 'dewatch'}),
            dataType:'json',

            success:function(model, response){
				self.timeStamp = new Date();
				if(callback){
					callback.success(tempCurUser);
				}
            },
            error: function(model, response){
                Constants.dWarn("UserManager::deWatchUser:: delete failed with response:");
                Constants.dLog(response);
                if(callback){
					callback.error(response);
				}
            }
        });
	};
	
	UserManager.prototype.isUserWatched = function(intendedUserId, callback) {
		//don't care about session
		if (typeof intendedUserId !== 'number'){
			Constants.dWarn("UserManager::isUserWatched:: invalid parameter");
			return;
		}

		var self = this;

		$.ajax({
			type: "GET",
			async: true,
			url: self.apis.users_isUserWatched+'/'+self.sessionManager.getUserId(),
			data: $.param({ 'intendedUserId': intendedUserId}),
			dataType: 'json',
			success: function(data){
				Info.log("isUserWatched call succeeded with response:");
				Info.log(data);

				if(callback && callback.success){
					callback.success(data.val === 'true' || data.val === true);
				}
			},
			error: function (data, textStatus, jqXHR){
				alert("请稍后再试");
				Constants.dWarn("UserManager::isUserWatched:: action failed");
				if(callback && callback.error){
					callback.error(data === 'true');
				}
			}
		});
	};


	UserManager.prototype.fetchWatchedUsers = function(intendedUserId, callback) {
		if(testMockObj.testMode){
			watchedUsers = testMockObj.sampleUsers;
			callback.success(watchedUsers, 0);
			return;
		}
		var self = this;

		if (typeof intendedUserId !== 'number'){
			Constants.dWarn("UserManager::fetchWatchedUsers:: invalid parameter, exit");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::fetchWatchedUsers:: session does not exist, exit");
			return;
		}


		var watchedUsers = new Users();
		//set the id of the temp user to curUserId to confront to API requirements
		watchedUsers.overrideUrl(this.apis.users_watchUser + '/' + self.sessionManager.getUserId());
		watchedUsers.fetch({
			data: $.param({ 'intendedUserId': intendedUserId}),
            dataType:'json',

            success:function(model, response){
				self.socialList_timeStamp = new Date();
				if(callback){
					callback.success(watchedUsers, 0);
				}
            },
            error: function(model, response){
                Constants.dWarn("UserManager::fetchWatchedUsers:: fetch failed with response:");
                Constants.dLog(response);
                if(callback){
					callback.error(response);
				}
            }
        });
	};


	UserManager.prototype.fetchMessageHistory = function(intendedUserId, callback) {
		if (testMockObj.testMode) {
			callback.success(testMockObj.sampleMessages);
			return;
		}

		var self = this;

		if (typeof intendedUserId !== 'number'){
			Constants.dWarn("UserManager::fetchMessageHistory:: invalid parameter, exit");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::fetchMessageHistory:: session does not exist, exit");
			return;
		}


		var messageHistory = new Messages();
		//confront to API requirements
		messageHistory.overrideUrl(this.apis.users_messageHistory + '/' + self.sessionManager.getUserId());
		messageHistory.fetch({
			data: $.param({ 'intendedUserId': intendedUserId}),
            dataType:'json',

            success:function(model, response){
				//TODO
				self.historyList_timeStamp = new Date();
				if(callback){
					callback.success(messageHistory);
				}
            },

            error: function(model, response){
                Constants.dWarn("UserManager::fetchMessageHistory:: fetch failed with response:");
                Constants.dLog(response);
                if(callback){
					callback.error(response);
				}
            }
        });
	};

	UserManager.prototype.fetchTransactionList = function(intendedUserId, callback) {
		if(testMockObj.testMode){
			callback.success(testMockObj.sampleTransactions);
			return;
		}
		var self = this;

		if (typeof intendedUserId !== 'number'){
			Constants.dWarn("UserManager::fetchTransactionList:: invalid parameter, exit");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::fetchTransactionList:: session does not exist, exit");
			return;
		}


		var transactionList = new Transactions();
		transactionList.overrideUrl(this.apis.users_transaction + '/' + self.sessionManager.getUserId());
		transactionList.fetch({
			data: $.param({ 'intendedUserId': intendedUserId}),
            dataType:'json',

            success:function(model, response){
				//caching?
				self.transactionList_timeStamp = new Date();
				if(callback){
					callback.success(transactionList);
				}
            },

            error: function(model, response){
                Constants.dWarn("UserManager::fetchTransactionList:: fetch failed with response:");
                Constants.dLog(response);
                if(callback){
					callback.error(response);
				}
            }
        });
	};


	UserManager.prototype.fetchNotificationList = function(intendedUserId, callback){
		if (testMockObj.testMode) {
			callback.success(testMockObj.sampleNotifications);
			return;
		}
		if (typeof intendedUserId !== 'number'){
			Constants.dWarn("UserManager::fetchNotification:: userId invalid");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::fetchNotification:: session does not exist, exit");
			return;
		}

		var self = this;
		//passing reset true to make sure notifications are always sync with server
		var notifications = new Notifications();
		notifications.overrideUrl(this.apis.users_notification + '/' + self.sessionManager.getUserId());
		notifications.fetch({
			reset: true,
			data: $.param({ 'userId': intendedUserId}),
			dataType:'json',
			success:function(model, response){
				self.notificationList_timeStamp = new Date();
				if(callback){
					callback.success(notifications);
				}
			},
			error: function(model, response){
				Constants.dWarn("UserManager::fetchNotification:: fetch failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error(response);
				}
			}
		});
	};



	/*
	* letters will only be fetched from sessionManager, as letters have highest privacy levels
	* letterFetchOptions can be empty, and can optionally inlude
		{
			direction: 0 | 1 | 2,  0, inbound letters, 1. outbound letters 2: both direction, 
			targetUserId: the userId I am fetching chat history from, this userId can be sender or receiver or both, depending on direction
			targetType: if user, when user messges will be fetch, if system, then you know..
		}
	*
	*/
	UserManager.prototype.fetchLetters = function(letterFetchOptions, callback){
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::fetchLetter:: session does not exist, exit");
			return;
		}

		var self = this,
			letters = new Letters();

		letterFetchOptions.userId = self.sessionManager.getUserId();
		letters.overrideUrl(this.apis.letter_letter + '/' + self.sessionManager.getUserId());
		letters.fetch({
			data: $.param(letterFetchOptions),
			dataType:'json',

			success:function(model, response){
				self.letter_timeStamp = new Date();
				if (callback) {
					callback.success(letters);
				}
			},
			error: function(model, response){
				Constants.dWarn("UserManager::fetchLetter:: fetch failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error(response);
				}
			}
		});
	};
	
	UserManager.prototype.fetchLetterUsers = function(callback){
		if (testMockObj.testMode) {
			callback.success(testMockObj.sampleUsers);
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::fetchLetterUsers:: session does not exist, exit");
			return;
		}

		var self = this,
			users = new Users();

		users.overrideUrl(this.apis.letter_user + '/' + self.sessionManager.getUserId());
		users.fetch({
			dataType:'json',

			success:function(model, response){
				if (callback) {
					callback.success(users);
				}
			},
			error: function(model, response){
				Constants.dWarn("UserManager::fetchLetterUsers:: fetch failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error(response);
				}
			}
		});
	};

	UserManager.prototype.searchUsers = function(userSearchRepresentation, callback) {
		if (testMockObj.testMode) {
			callback.success(testMockObj.sampleUsers);
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::searchUsers:: session does not exist, exit");
			return;
		}

		var self = this,
			users = new Users();

		users.overrideUrl(this.apis.users_searchUser);
		users.fetch({
			data: $.param({'userSearchRepresentation': userSearchRepresentation, 'userId': self.sessionManager.getUserId()}),
			dataType:'json',

			success:function(model, response){
				if (callback) {
					callback.success(users);
				}
			},
			error: function(model, response){
				Constants.dWarn("UserManager::searchUsers:: fetch failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error(response);
				}
			}
		});
	};

	

}).call(this);

(function () {
	'use strict';

	var postCount = 0;
	var firstSuccessMessage = null;

	this.MessageManager = function(sessionManager,  userManager){

		this.apis = new ApiResource();

		this.sessionManager = sessionManager;
		this.userManager = userManager;

		this.timeStamp = new Date();
		this.searchResults_timeStamp = new Date();
		this.recents_timeStamp = new Date();

		this.sessionManager.resgisterManager(this);
	};


	//only reset the detailed message upon logout
	MessageManager.prototype.release = function() {
		this.timeStamp = new Date();
	};


	MessageManager.prototype.fetchMessage = function(messageId, callback){
		var message = new Message();
		if (testMockObj.testMode){
			// callback.error();
			message = testMockObj.sampleMessageB;
			if(callback && callback.transaction){
				callback.success(message, callback.transaction);
			} else if (callback) {
				callback.success(message);
			}
			return;
		}
		if (typeof messageId !== 'number'){
			messageId = parseInt(messageId, 10);
		}

		var self = this;

		message.overrideUrl(this.apis.message_message);
		message.set('messageId', messageId);

		message.fetch({
			//data: $.param({ 'userId': self.sessionManager.getUserId()}),
			dataType:'json',

			success:function(model, response){
				self.timeStamp = new Date();
				if(callback && callback.transaction){
					callback.success(message, callback.transaction);
				} else if (callback) {
					callback.success(message);
				}
			},
			error: function(model, response){
				Constants.dWarn("MessageManager::fetchMessage:: fetch failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error(response);
				}
			}
		});
	};


	MessageManager.prototype._postSingleMessage = function(newMessage, promiseback, callback){
		var self = this;

		newMessage.overrideUrl(this.apis.message_message);
		newMessage.set('messageId', -1);
		newMessage.set('ownerId', this.sessionManager.getUserId());
		newMessage.save({},{
			dataType:'json',

			success:function(model, response){
				self.timeStamp = new Date();

				if(promiseback){
					promiseback(newMessage, callback, self);
				}
			},
			error: function(model, response){
				Constants.dWarn("MessageManager::postMessage:: post failed with response:");
				Constants.dLog(response);
				if(promiseback){
					promiseback(null, callback, self);
				}
			}
		});
	};

	MessageManager.prototype._executePromise = function(message, callback, immediateCaller) {
		//always point to the last successful one
		if (firstSuccessMessage === null){
			firstSuccessMessage = message;
		}
		postCount -= 1;
		if (postCount === 0){
			immediateCaller.message = firstSuccessMessage;

			if (firstSuccessMessage !== null){
				callback.success(firstSuccessMessage);
				firstSuccessMessage = null;
			}
			else{
				callback.error();
			}
		}
	};

	MessageManager.prototype.postMessage = function(newMessages, callback) {
		var self = this,
			i = 0;
		if (!newMessages || !(newMessages instanceof Backbone.Collection)){
			Constants.dWarn("MessageManager::postMessage::invalid parameter, exit");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("MessageManager::postMessage::currentMessage does not have session, exit");
			return;
		}
		if (postCount > 0){
			Constants.dWarn("MessagePost Queue not cleared yet");
			return;
		}

		postCount = newMessages.length;
		firstSuccessMessage = null;
		for (i = 0; i < postCount; i++){
			this._postSingleMessage(newMessages.at(i), this._executePromise, callback);
		}
	};


	MessageManager.prototype.updateMessage = function(updatedMessage, callback) {
		if (!updatedMessage || typeof updatedMessage !== 'object'){
			Constants.dWarn("MessageManager::updateMessage:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("MessageManager::updateMessage:: session does not exist, exit");
			return;
		}

		var self = this;

		updatedMessage.overrideUrl(this.apis.message_message);
		updatedMessage.set('ownerId', this.sessionManager.getUserId());
		updatedMessage.save({},{
            dataType:'json',
            success:function(model, response){
				if(callback){
					callback.success(updatedMessage);
				}
            },
            error: function(model, response){
                Constants.dWarn("MessageManager::updateMessage:: update failed with response:");
                Constants.dLog(response);
                if(callback){
					callback.error(response);
				}
            }
        });

	};


	MessageManager.prototype.deactivateMessage = function(messageId, callback) {
		var self = this;
		if (typeof messageId !== 'number'){
			Constants.dWarn("MessageManager::deleteMessage:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("MessageManager::deleteMessage::current user does not have session, exit");
			return;
		}
		//do not destory the message itself
		var message = new Message();
		message.overrideUrl(this.apis.message_message);
		message.set('messageId', messageId);
		message.destroy({
            dataType:'json',
            success:function(model, response){
				if(callback){
					callback.success();
				}
            },
            error: function(model, response){
                Constants.dWarn("MessageManager::deleteMessage:: delete failed with response:");
                Constants.dLog(response);
                if(callback){
					callback.error(response);
				}
            }
        });

	};

	//cannot use search because of naming collisions
	MessageManager.prototype.searchMessage = function(searchRepresentationObj, callback) {
		var self = this;
		var searchResults = new Messages();
		if(testMockObj.testMode){
			searchResults = testMockObj.sampleMessages;
			callback.success(searchResults);
			return;
		}
		if (typeof searchRepresentationObj !== 'object'){
			Constants.dWarn("MessageManager::fetchSearchResult:: invalid parameter, exit");
			return;
		}

		var userId = this.sessionManager.hasSession() ? this.sessionManager.getUserId() : -1;
		searchResults.overrideUrl(this.apis.message_search);
		searchResults.fetch({
			data: $.param({'searchRepresentation': searchRepresentationObj.toString(), 'userId' : userId}),
            dataType:'json',

            success:function(model, response){
				self.searchResults_timeStamp = new Date();
				if(callback){
					callback.success(searchResults);
				}
            },
            error: function(model, response){
                Constants.dWarn("MessageManager::fetchSearchResult:: fetch failed with response:");
                Constants.dLog(response);
                if(callback){
					callback.error(response);
				}
            }
        });
	};

	MessageManager.prototype.fetchRecents = function(callback) {
		var recents = new Messages();
		if (testMockObj.testMode){
			recents = testMockObj.sampleMessages;
			callback.success(recents);
			return;
		}
		var self = this;
		recents.overrideUrl(this.apis.message_recent);
		recents.fetch({
            dataType:'json',
            success:function(model, response){
				self.recents_timeStamp = new Date();
				if(callback){
					callback.success(recents);
				}
            },
            error: function(model, response){
                Constants.dWarn("MessageManager::fetchRecents:: fetch failed with response:");
                Constants.dLog(response);
                if(callback){
					callback.error(response);
				}
            }
        });


	};
	
	MessageManager.prototype.fetchTransactionList = function(intendedMessageId, callback) {
		if(testMockObj.testMode){
			callback.success(testMockObj.sampleTransactions);
			return;
		}
		var self = this;

		if (typeof intendedMessageId !== 'number'){
			Constants.dWarn("MessageManager::fetchTransactionList:: invalid parameter, exit");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("MessageManager::fetchTransactionList:: session does not exist, exit");
			return;
		}


		var transactionList = new Transactions();
		transactionList.overrideUrl(this.apis.message_transaction + '/' + intendedMessageId);
		transactionList.fetch({
			data: $.param({ 'userId': self.sessionManager.getUserId()}),
			dataType:'json',

			success:function(model, response){
				if(callback){
					callback.success(transactionList);
				}
			},

			error: function(model, response){
				Constants.dWarn("MessageManager::fetchTransactionList:: fetch failed with response:");
				Constants.dLog(response);
					if(callback){
					callback.error(response);
				}
			}
		});
	};
	
	MessageManager.prototype.autoMatch = function(messageId, callback) {
		if(testMockObj.testMode){
			callback.success(testMockObj.sampleMessages);
			return;
		}
		var self = this;

		if (typeof messageId !== 'number'){
			Constants.dWarn("MessageManager::autoMatch:: invalid parameter, exit");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("MessageManager::autoMatch:: session does not exist, exit");
			return;
		}


		var messages = new Messages();
		messages.overrideUrl(this.apis.message_autoMatch + '/' + messageId);
		messages.fetch({
			data: $.param({ 'userId': self.sessionManager.getUserId()}),
			dataType:'json',

			success:function(model, response){
				if(callback){
					callback.success(messages);
				}
			},

			error: function(model, response){
				Constants.dWarn("MessageManager::autoMatch:: fetch failed with response:");
				Constants.dLog(response);
					if(callback){
					callback.error(response);
				}
			}
		});
	};


}).call(this);

(function () {
	'use strict';


	this.TransactionManager = function(sessionManager, userManager){

		this.apis = new ApiResource();

		this.sessionManager = sessionManager;
		this.userManager = userManager;

		this.timeStamp = new Date();

		this.sessionManager.resgisterManager(this);

	};


	TransactionManager.prototype.release = function() {
		this.timeStamp = new Date();
	};


	TransactionManager.prototype.fetchTransaction = function(transactionId, callback) {
		if (typeof transactionId !== 'number' ){
			Constants.dWarn("TransactionManager::fetchTransaction:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("TransactionManager::fetchTransaction:: session does not exist, exit");
			return;
		}

		var self = this;

		var transaction = new Transaction();
		transaction.overrideUrl(this.apis.transaction_transaction);
		transaction.set('transactionId', transactionId);

		transaction.fetch({
			data: $.param({ 'userId': this.sessionManager.getUserId()}),
			dataType:'json',

			success:function(model, response){
				self.timeStamp = new Date();
				if(callback){
					callback.success(transaction);
				}
			},

			error: function(model, response){
				Constants.dWarn("TransactionManager::fetchTransaction:: fetch failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error(response);
				}
			}
		});
	};

	TransactionManager.prototype.initTransaction = function(newTransaction, callback){
		if (!newTransaction || typeof newTransaction !== 'object'){
			Constants.dWarn("TransactionManager::initTransaction:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("TransactionManager::initTransaction:: session does not exist, exit");
			return;
		}

		var self = this;

		newTransaction.overrideUrl(this.apis.transaction_transaction);
		newTransaction.set('transactionId', -1);
		newTransaction.set('userId', this.sessionManager.getUserId());
		newTransaction.save({},{
			dataType:'json',

			success:function(model, response){
				self.transaction = newTransaction;
				self.timeStamp = new Date();

				if(callback){
					callback.success();
				}
			},

			error: function(model, response){
				Constants.dWarn("TransactionManager::initTransaction:: save failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error(response);
				}
			}
		});

	};


	//if evaluate, pass in score as well
	TransactionManager.prototype.changeTransactionState = function(options, callback) {
		var transactionId = options.transactionId;
		var stateChangeAction = options.stateChangeAction;
		var score = stateChangeAction === Constants.transactionStateChangeAction.evaluate ? options.score : 0;
		
		if (typeof transactionId !== 'number' || typeof stateChangeAction !== 'number'){
			Constants.dWarn("TransactionManager::changeTransactionState:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("TransactionManager::changeTransactionState:: session does not exist, exit");
			return;
		}

		var self = this;
		var transaction = new Transaction();
		transaction.overrideUrl(this.apis.transaction_transaction);
		transaction.set('transactionId', transactionId);

		transaction.save({},{
			data: JSON.stringify({ 'userId': this.sessionManager.getUserId(), 'stateChangeAction': stateChangeAction, 'score': score}),
			dataType:'json',

			success:function(model, response){
				self.timeStamp = new Date();
				if(callback){
					callback.success(transaction);
				}
			},

			error: function(model, response){
				Constants.dWarn("TransactionManager::changeTransactionState:: save failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error(response);
				}
			}
		});
	};

	//TransactionManager.prototype.deleteTransaction = function(transactionId, callback) {
	//	if (typeof transactionId !== 'number'){
	//		Constants.dWarn("TransactionManager::deleteTransaction:: invalid parameter");
	//		return;
	//	}
	//	if (!this.sessionManager.hasSession()){
	//		Constants.dWarn("TransactionManager::deleteTransaction:: session does not exist, exit");
	//		return;
	//	}

	//	var self = this;

	//	this.transaction.overrideUrl(this.apis.transaction_transaction);
	//	this.transaction.set('transactionId', transactionId);

	//	this.transaction.destroy({

	//		data: $.param({ 'userId': this.sessionManager.getUserId()}),
	//		dataType:'json',

	//		success:function(model, response){
	//			self.timeStamp = new Date();

	//			if(callback){
	//				callback.success();
	//			}
	//		},

	//		error: function(model, response){
	//			Constants.dWarn("TransactionManager::deleteTransaction:: delete failed with response:");
	//			Constants.dLog(response);
	//			if(callback){
	//				callback.error(response);
	//			}
	//		}
	//	});
	//};



	//TransactionManager.prototype.changeTransactionState_admin = function(transactionId, newState, access_admin ,callback) {
	//	if (!access_admin ||typeof transactionId !== 'number' || typeof newState !== 'number' || typeof access_admin !== 'string'){
	//		Constants.dWarn("TransactionManager::changeTransactionState_admin:: invalid parameter");
	//		return;
	//	}

	//	var self = this;

	//	this.transaction.overrideUrl(this.apis.transaction_admin);
	//	this.transaction.set('transactionId', transactionId);

	//	this.transaction.save({},{

	//		data: $.param({ 'access_admin': access_admin, 'stateIndex': newState}),
	//		dataType:'json',

	//		success:function(model, response){
	//			self.timeStamp = new Date();

	//			if(callback){
	//				callback.success();
	//			}
	//		},

	//		error: function(model, response){
	//			Constants.dWarn("TransactionManager::changeTransactionState_admin:: save failed with response:");
	//			Constants.dLog(response);
	//			if(callback){
	//				callback.error(response);
	//			}
	//		}
	//	});
	//};


}).call(this);
(function () {
	'use strict';


	this.NotificationManager = function(sessionManager, userManager){
		this.apis = new ApiResource();

		this.sessionManager = sessionManager;
		this.userManager = userManager;
	
		this.timeStamp = new Date();

		this.sessionManager.resgisterManager(this);
	};

	NotificationManager.prototype.release = function() {
		this.timeStamp = new Date();
	};
	
	NotificationManager.prototype.getTimeStamp = function() {
		return this.timeStamp;
	};

	NotificationManager.prototype.checkNotification = function(notificationIdOpt, callback) {
		var _idArr = Utilities.getIdList(notificationIdOpt);
		var notificationId = _idArr[0];
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("NotificationManager::checkNotification:: session does not exist, exit");
			return;
		}

		var self = this;
	
		var notification = new Notification();
		notification.overrideUrl(this.apis.notification_notificationByIdList);
		notification.save({
			data: JSON.stringify({'userId': this.sessionManager.getUserId(), 'idArray': _idArr, 'stateChangeAction': Constants.notificationStateChangeAction.check}),
			dataType:'json',
			success:function(model, response){
				self.timeStamp = new Date();
				if(callback){
					callback.success(_idArr);
				}
			},
			error: function(model, response){
				Constants.dWarn("NotificationManager::checkNotification:: save failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error(response);
				}
			}
		});
	};

	NotificationManager.prototype.deleteNotification = function(notificationIdOpt, callback) {
		var _idArr = Utilities.getIdList(notificationIdOpt);
		var notificationId = _idArr[0];
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("NotificationManager::deleteNotification:: session does not exist, exit");
			return;
		}

		var self = this;
		var notification = new Notification();
		notification.overrideUrl(this.apis.notification_notificationByIdList);
		notification.save({},{
			data: SON.stringify({'userId': this.sessionManager.getUserId(), 'idArray': _idArr, 'stateChangeAction': Constants.notificationStateChangeAction.delete}),
			dataType:'json',
			success:function(model, response){
				self.timeStamp = new Date();
				if(callback){
					callback.success(_idArr);
				}
			},
			error: function(model, response){
				Constants.dWarn("NotificationManager::deleteNotification:: delete failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error(response);
				}
			}
		});
	};



}).call(this);

(function () {
	'use strict';


	this.LetterManager = function(sessionManager){
		this.apis = new ApiResource();

		this.sessionManager = sessionManager;
		this.timeStamp = new Date();

		this.sessionManager.resgisterManager(this);
	};

	LetterManager.prototype.release = function() {
		this.timeStamp = new Date();
	};
	LetterManager.prototype.getTimeStamp = function() {
		return this.timeStamp;
	};


	LetterManager.prototype.sendLetter = function(targetId, content, callback) {
		//if (testMockObj.testMode) {
		// callback.err((new Letter()).set("letterId",123).set("content",content));
		// return;
		//}
		if (typeof targetId !== 'number'){
			Constants.dWarn("LetterManager::sendLetter:: invalid parameter");
			return;
		}
		if (targetId === this.sessionManager.getUserId()){
			Constants.dWarn("LetterManager::sendLetter:: sending message to yourself");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("LetterManager::sendLetter:: session does not exist, exit");
			return;
		}

		var self = this;

		var letter = new Letter();
		letter.overrideUrl(this.apis.letter_letter);
		letter.set('letterId', -1);
		letter.set('from_userId', this.sessionManager.getUserId());
		letter.set('to_userId', targetId);
		letter.set('content', content);

		/*optional, this will be inforced by server API logic,leaving here for reference*/
		letter.set('type', targetId > 0 ? Constants.LetterType.user : Constants.LetterType.system);
		letter.set('send_time', new Date());
		letter.set('state', Constants.LetterState.unread);

		letter.save({},{
			dataType:'json',
			success:function(model, response){
				self.timeStamp = new Date();
				if(callback){
					callback.success(letter);
				}
			},
			error: function(model, response){
				Constants.dWarn("LetterManager::sendLetter:: save failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error(letter);
				}
			}
		});
	};

	LetterManager.prototype.checkLetter = function(targetUserId, callback) {
		if (typeof targetUserId !== 'number'){
			Constants.dWarn("LetterManager::checkLetter:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("LetterManager::checkLetter:: session does not exist, exit");
			return;
		}

		var self = this;
	
		var letter = new Letter();
		letter.overrideUrl(this.apis.letter_letter);
		letter.set('letterId', 1);
		letter.save({},{
			data: JSON.stringify({'userId': this.sessionManager.getUserId(), 'targetUserId': targetUserId}),
			dataType:'json',
			success:function(model, response){
				self.timeStamp = new Date();
				if(callback){
					callback.success(letter);
				}
			},
			error: function(model, response){
				Constants.dWarn("LetterManager::checkLetter:: save failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error(response);
				}
			}
		});
	};

	LetterManager.prototype.deleteLetter = function(letterId, callback) {
		if (typeof letterId !== 'number'){
			Constants.dWarn("LetterManager::deleteLetter:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("LetterManager::deleteLetter:: session does not exist, exit");
			return;
		}

		var self = this;
		var letter = new Letter();
		letter.overrideUrl(this.apis.letter_letter);
		letter.set('letterId', letterId);
		letter.destroy({
			dataType:'json',
			success:function(model, response){
				self.timeStamp = new Date();
				if(callback){
					callback.success(letter);
				}
			},
			error: function(model, response){
				Constants.dWarn("LetterManager::deleteLetter:: delete failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error(response);
				}
			}
		});
	};


}).call(this);

(function () {
	'use strict';


	this.GeneralManager = function(sessionManager, userManager){

		this.apis = new ApiResource();

		this.sessionManager = sessionManager;
		this.userManager = userManager;

		this.timeStamp = new Date();

        this.sessionManager.resgisterManager(this);

	};

	GeneralManager.prototype.validateFeedback = function(feedback) {

		if (typeof feedback !== 'string'){
			Constants.dWarn("GeneralManager::validateFeedback:: invalid parameter");
			return false;
		}

        if (feedback.length < 1){
            alert("请至少输入一个字符");
            return false;
        }
        if (feedback.length > 200){
            alert("反馈太长了。。。。你还是发邮件吧");
            return false;
        }

        return true;
	};

    GeneralManager.prototype.release = function() {
        this.timeStamp = new Date();
    };

	GeneralManager.prototype.sendFeedback = function(feedback, callback) {
		if (typeof feedback !== 'string'){
			Constants.dWarn("GeneralManager::sendFeedback:: invalid parameter");
			return;
		}
		if (!this.validateFeedback(feedback)){
			return;
		}
		var self = this;

        $.ajax({
            type: "POST",
            url: self.apis.general_feedBack,
            data: feedback,
            dataType: 'text',
            success: function(data){
                self.timeStamp = new Date();

            },
            error: function (data, textStatus, jqXHR){
                if (textStatus && textStatus == 400){
                    alert("出错了，请稍后再试");
                }
                alert("出错了，请稍后再试");
            }
        });
	};



}).call(this);
(function () {
	'use strict';


	/*
	*	map_handlers interface
	*	{eventName: event_handler}, calls appropriate handler.handleSocket(event, data)
	*/
	this.SocketManager = function(sessionManager, map_handlers){
		this.sessionManager = sessionManager;
		this.map_handlers = map_handlers;

		this.timeStamp = new Date();
		this.sessionManager.resgisterManager(this);
	};

	SocketManager.prototype.release = function() {
		this.subscribe();
	};

	SocketManager.prototype.subscribe = function() {
		var self = this;

		if (this.sessionManager.hasSession()){
			this.socket = io.connect(Constants.socketOrigin, {secure: true});
			//this.socket = io.connect(Constants.socketOrigin);
			this.timeStamp = new Date();

			this.socket.emit('register', {'id': this.sessionManager.getUserId()});

			this.socket.on('newNotification', function(data){
				Info.log("push message: newNotification received, with data: ");
				Info.log(data);
				if (self.map_handlers['newNotification']){
					self.map_handlers['newNotification'].handleSocket('newNotification', data);
				}
				else{
					Info.alert("newNotification event not handled");
				}
			});

			this.socket.on('newLetter', function(data){
				Info.log("push letter: newLetter received, with data: ");
				Info.log(data);
				if (self.map_handlers['newLetter']){
					self.map_handlers['newLetter'].handleSocket('newLetter', data);
				}
				else{
					Info.alert("newLetter event not handled");
				}
			});

			this.socket.on('broadCast', function(data){
				Info.log("broadcast received with data: ");
				Info.log(data);
				if (self.map_handlers['broadCast']){
					self.map_handlers['broadCast'].handleSocket('broadCast', data);
				}
				else{
					Info.alert("broadcast event not handled");
				}
			});
		}
	};

	SocketManager.prototype.unsubscribe = function (){
		if (typeof this.socket !== 'undefined'){
			this.socket.disconnect();
		}
	};

}).call(this);
var MultiPageView = Backbone.View.extend({
    entryTemplate: "",
    entryContainer: "",
    entryClass: "",
    pageNavigator: "",
    pageNavigatorClass: "",
    pageEntryNumber: 10,
    startIndex: 0,
    currentPage: 1,
    pageNumberClass: "",
    pageNumberId: "",
    entryEvent: "",
    messages: [],
    entryHeight: -1,
    entryRowNum: 1,
    minHeight: 0,
    noMessage: "暂无消息",
    filters:[],
    eventBound: false,
    $domContainer: null,
    initialize: function () {
        _.bindAll(this, "render", "toPage", "bindEntryEvent", "setPageNavigator", "close");
        this.isClosed = false;
    },

    render: function () {
        this.unregisterFilterEvent();
        this.$domContainer = this.$domContainer || $("#"+this.entryContainer);
        this.$domContainer.empty();
        if (this.messages.length > 0) {
            var buf = [], i, length = this.messages.length - this.startIndex;
            length = (length < this.pageEntryNumber) ? length : this.pageEntryNumber;
            for ( i = 0; i < length; i++) {
                var message;
                if (this.messages instanceof Backbone.Collection) {
                    message = this.messages.at(i + this.startIndex);
                } else {
                    message = this.messages[i + this.startIndex];
                }
                buf[i] = this.entryTemplate(message._toJSON());
            }
            this.$domContainer.append(buf.join(""));
            this.$domContainer.children("div").addClass(this.entryClass);
            if (this.entryEvent && !this.eventBound) {
                this.bindEntryEvent();
            }
        } else {
            this.$domContainer.append("<div class = 'noMessage'>"+this.noMessage+"</div>");
        }
        if (this.entryHeight) {
            var height = Math.ceil(length / this.entryRowNum) * this.entryHeight;
            height = (height > this.minHeight) ? height : this.minHeight;
            this.$domContainer.css("height", height + "px");
        }
        if (this.messages.length > this.pageEntryNumber) {
            this.setPageNavigator();
        }
        if (this.afterRender) {
            this.afterRender();
        }
        this.eventBound = true;
    },
    toPage: function (page) {
        this.currentPage = page;
        this.startIndex = this.pageEntryNumber * (page - 1);
        this.render();
    },
    bindEntryEvent: function () {
        var self = this;
        this.$domContainer.on("click", "." + this.entryClass, function (e) {
            e.preventDefault();
            var id = Utilities.getId($(this).attr("id"));
            self.entryEvent(id);
        });
    },
    setPageNavigator: function () {
        if (this.$pn && this.$pn.length) {
            this.$pn.children("." + this.pageNumberClass).off();
            this.$pn.children(".pre").off();
            this.$pn.children(".next").off();
            this.$pn.remove();
        }
        this.$domContainer.after($("<div>").attr("id", this.pageNavigator).attr("class", "mainPage-searchResult-multiPage-pageNum clearfix"));
        this.$pn = $("#" + this.pageNavigator);
        var length = this.messages ? this.messages.length : 0;
        var pages = Math.floor(length / this.pageEntryNumber) + 1;
        this.pages = pages;
        pages = pages > 10 ? 10 : pages;
        var buf = ['<a class="pre"></a>'];
        var divBuf = ["<a id='", this.pageNumberId, "_", 0, "' class='", this.pageNumberClass, "'> ", 0, "</a>"];
        for (var i = 1; i <= pages; i++) {
            divBuf[3] = i;
            divBuf[7] = i;
            buf.push(divBuf.join(""));
        }
        if (this.pages > 10) {
            buf.push("<span>...</span>");
        }
        buf.push("<a class='next'></a>");
        var html = buf.join("");
        this.$pn.empty()
                .append(html)
                .addClass(this.pageNavigatorClass);
        this.$pre = this.$pn.children(".pre");
        this.$next = this.$pn.children(".next");
        var self = this;
        this.$pn.on("click", "." + this.pageNumberClass, function (e) {
            var id = Utilities.toInt(Utilities.getId(e.target.id));
            self.toPage(id);
        });
        if (this.currentPage === 1) {
            this.$pre.addClass("pre-disabled");
        } else {
            this.$pre.on("click", function (e) {
                self.toPage(self.currentPage-1);
            });
        }
        if (this.currentPage === pages) {
            this.$next.addClass("next-disabled");
        } else {
            this.$next.on("click", function (e) {
                self.toPage(self.currentPage + 1);
            });
        }
    },
    registerFilterEvent: function ($selector, filter, inst, callback) {
        var that = this;
        $selector.on("click", function (e) {
            
            $selector.siblings().removeClass("active");
            $selector.addClass("active");
            if (that.allMessages) {
                if (filter) {
                    that.messages = that.allMessages.clone();
                    that.messages.reset(that.messages.filter(filter));
                } else {
                    that.messages = that.allMessages;
                }
            }
            inst.render();
            if (callback){
                callback.call(inst);
            }
        });
        this.filters.push($selector);
    },
    unregisterFilterEvent: function() {
        for (var i = 0; i < this.filters.length; i++) {
            this.filters[i].off();
        }
        this.filters = [];
    },
    close: function () {
        if (!this.isClosed) {
            if (this.$pn) {
                this.$pn.children("." + this.pageNumberClass).off();
            }
            this.unregisterFilterEvent();
            this.$domContainer.off();
            this.$domContainer.empty();
            this.isClosed = true;
        }
    }
});

var MapView = Backbone.View.extend({
    el: "",

    initialize: function (config) {
        _.bindAll(this, 'render', 'mapInitialize', 'bindClickEvent', 'setLocation', 'drawCircle', 'getLatLng');
        this.div = config.div;
        this.origin = config.originLocation || new UserLocation();
        this.dest = config.destLocation || new UserLocation();
        this.clickable = config.clickable;
        this.class = config.class;
        this.oLatLng = {};
        this.dLatLng = {};
        this.init = config.init;
        this.directionDisplay = new google.maps.DirectionsRenderer ();
        this.directionService = new google.maps.DirectionsService ();
        this.geocoder = new google.maps.Geocoder ();
        this.mapInitialize();
    },
    cacheConfig: function(config) {
        this.div = config.div;
        this.origin = config.originLocation || new UserLocation();
        this.dest = config.destLocation || new UserLocation();
        this.clickable = config.clickable;
        this.init = config.init;
        this.class = config.class;
        $("#"+this.div).after($("#mapcache").attr("id","newMap"));
        $("#mapcache").remove();
        $("#"+this.div).remove();
        if (this.class) {
            $("#newMap").attr("class", this.class);
        }
        $("#newMap").attr("id", this.div);
        this.mapInitialize();
    },
    mapInitialize: function () {
        this.isClosed = false;
        this.getLatLng(this.origin, this.oLatLng, true);
        this.getLatLng(this.dest, this.dLatLng, true);
        var center = new google.maps.LatLng (this.oLatLng.lat, this.oLatLng.lng);
        var myOptions = {
            center: center,
            minZoom: 8,
            maxZoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        if (!this.map) {
            this.map = new google.maps.Map (document.getElementById(this.div), myOptions);  //this should never expire
            this.directionDisplay.setMap(this.map);
        }
        this.marker = undefined;
        this.oMarker = undefined;
        this.dMarker = undefined;
        var that = this;
        google.maps.event.addListenerOnce(this.map, 'idle', function(){
            if (that.oLatLng.lat && that.dLatLng.lat) {
                 that.getDirection(that.oLatLng, that.dLatLng);
            }
            if (that.origin instanceof Backbone.Model && this.dest instanceof Backbone.Model && this.origin.get("city") && this.dest.get("city") && !this.origin.equals(this.dest)) {
                that.getDirection(that.origin, that.dest);
            }
        });
        if (this.clickable) {
            this.bindClickEvent();
        }
        google.maps.event.trigger(this.map, 'resize');
    },
    bindClickEvent: function () {
        var that = this,
            divSetOD = "<span class='markerButton' id='markerSetOrigin'><a>设为起点</a></span>&nbsp;&nbsp;&nbsp;<span class='markerButton' id='markerSetDest'><a>设为终点</a></span>",
            contentString;
        google.maps.event.addListener(this.map, 'click', function (e) {
            if (that.infowindow) {
                that.infowindow.close();
            }
            if (that.marker) {
                that.marker.setMap(null);
            }
                
            that.marker = new google.maps.Marker({
                position: e.latLng,
                map: that.map
            });
            that.marker.setMap(that.map);

            $.ajax({
                  url: "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + e.latLng.lat() + "," + e.latLng.lng() + "&sensor=false",
                  context: document.body
            }).done(function(json) {
                $(".markerButton").off();
                if (that.init){
                    contentString = "<div>" + json.results[0].formatted_address + "</div>" + divSetOD;
                } else {
                    contentString = "<div>" + json.results[0].formatted_address + "</div>";
                }
                that.infowindow = new google.maps.InfoWindow({
                    content: contentString,
                    width: 250,
                    height: 80
                });
                that.infowindow.open(that.map, that.marker);
                if (that.init) {
                    google.maps.event.addListener(that.infowindow, 'domready', function() {
                        $(".markerButton").on('click', function(e){ 
                            if (e.delegateTarget.id === 'markerSetOrigin') 
                                that.setLocation("origin", json);
                            else if (e.delegateTarget.id === 'markerSetDest') 
                                that.setLocation("dest", json);
                        });
                    });
                }
            });

        });
    },
    setLocation: function (type, json) {
        if (type === "origin") {
            if (this.oMarker) this.oMarker.setMap(null);
            this.oMarker = this.marker;
        } else {
            if (this.dMarker) this.dMarker.setMap(null);
            this.dMarker = this.marker;
        }
        this.marker = null;
        if (this.init && this.init.updateByMapMarker) {
            this.init.updateByMapMarker(type, json);    
        }
        if (this.oMarker && this.dMarker) {
            this.getDirection(this.oMarker.getPosition(), this.dMarker.getPosition());
            this.oMarker.setMap(null);
            this.dMarker.setMap(null);
        } else if (type === "origin") {
            this.getDirection(this.oMarker.getPosition(), this.dest);
            this.oMarker.setMap(null);
        } else if (type === "dest") {
            this.getDirection(this.origin, this.dMarker.getPosition());
            this.dMarker.setMap(null);
        }
    },
    getLatLng: function (location, latlng, noFetch) {
        if (location.get("defaultId") > 0 || noFetch) {
            latlng.lat = location.get("lat");
            latlng.lng = location.get("lng");
            return;  
        } 
        var request = {};
        var me = this;
        request.address = location.get("pointAddress") + "," + location.get("city") + "," + location.get("province");
        var result = this.geocoder.geocode(request, function (geocodeResults, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                me.map.setCenter(geocodeResults[0].geometry.location);
                me.map.setZoom(13);
                latlng.lat = geocodeResults[0].geometry.location.lat();
                latlng.lng = geocodeResults[0].geometry.location.lng();
                location.set("lat", latlng.lat);
                location.set("lng", latlng.lng);
                location.set("pointAddress", geocodeResults[0].formatted_address);
                location.set("pointName", geocodeResults[0].formatted_address.split(",")[0]);
            } else {
                Info.warn('Geocode was not successful for the following reason: ' + status);
            }
        });
    },
    drawCircle: function (lat, lgt) {
        var center = new google.maps.LatLng (lat, lgt);

        // var marker = new google.maps.Marker({
        // 	map: me.map,
        // 	position: geocodeResults[0].geometry.location
        // });
        //drawing the circle
        var circleOptions = {
            strokeColor: '#2E8AE6',
            strokeOpacity: 0.8,
            strokeWeight: 1,
            fillColor: '#2E8AE6',
            fillOpacity: 0.25,
            map: this.map,
            center: center,
            radius: 500,     //******note that this sets the radius of the circle area
        };
        var userCircle = new google.maps.Circle (circleOptions);

        //add a marker at the center of the circle
        var userMarker = new google.maps.Marker ({
            position: center,
            map: this.map
        });
    },
    getDirection: function (origin, dest) {
        var request = {}, that = this;
        if (origin) {
            if (origin instanceof UserLocation) {
                if ( origin.isDefault() ) {
                    request.origin = origin.get("lat") + "," + origin.get("lng");
                } else {
                    request.origin = origin.get("pointAddress") + " " + origin.get("city") + " " + origin.get("province");
                }
                this.origin = origin;
            } else if (origin instanceof google.maps.LatLng ){
                request.origin = origin.lat() + "," + origin.lng();
            } else {
                request.origin = origin.lat+ "," + origin.lng;
            }
        } else {
            return;
        }
        if (dest) {
            if (dest instanceof UserLocation) {
                if ( dest.isDefault() ) {
                    request.destination = dest.get("lat") + "," + dest.get("lng");
                } else {
                    request.destination = dest.get("pointAddress") + " " + dest.get("city") + " " + dest.get("province");
                }
                this.dest = dest;
            } else if (origin instanceof google.maps.LatLng ) {
                request.destination = dest.lat() +","+dest.lng();
            } else {
                request.destination = dest.lat +","+dest.lng;
            }
        } else {
            return;
        }
        request.travelMode = google.maps.TravelMode.DRIVING;
        request.unitSystem = google.maps.UnitSystem.METRIC;
        this.directionService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                that.directionDisplay.setDirections(response);
            }
        });
    },
    setMarker:function (json, point) {
        var contentString = "<div>" + json.results[0].formatted_address + "</div>";
        this.infowindow = this.infowindo || new google.maps.InfoWindow({
            content: contentString,
            width: 250,
            height: 80
        });
        if (point == "origin") {
            if (this.oMarker) {
                this.oMarker.setMap(null);
            }
            this.oMarker = new google.maps.Marker ({
                position: json.results[0].geometry.location,
                map: this.map
            });
            this.infowindow.open(this.map, this.oMarker);
        } else {
            if (this.dMarker) {
                this.dMarker.setMap(null);
            }
            this.dMarker = new google.maps.Marker ({
                position: json.results[0].geometry.location,
                map: this.map
            });
            this.infowindow.open(this.map, this.dMarker);
        }
        if (this.oMarker && this.dMarker) {
            this.getDirection(this.oMarker.getPosition(), this.dMarker.getPosition());
            this.oMarker.setMap(null);
            this.dMarker.setMap(null);
        } else if (point === "origin" && this.dest) {
            this.getDirection(this.oMarker.getPosition(), this.dest);
        } else if (point === "dest" && this.origin) {
            this.getDirection(this.origin, this.dMarker.getPosition());
        }
    },
    close: function (destroy) {
        if (this.marker) {
            this.marker.setMap(null);
            this.marker = null;
        }
        if (this.oMarker) {
            this.oMarker.setMap(null);
            this.oMarker = null;
        }
        if (this.dMarker) {
            this.dMarker.setMap(null);
            this.dMarker = null;
        }
        google.maps.event.clearListeners(this.map, 'click');
        if (!this.isClosed) {
            if (destroy) {

            } else {
                $("#cache").append($("#"+this.div).attr("id","mapcache"));
            }
            this.isClosed = true;
        }
    }
});

var AdvertisementView = Backbone.View.extend({

    el: "",

    initialize: function () {
        _.bindAll(this, 'render', 'close');
        app.viewRegistration.register("adv", this, true);
        this.isClosed = false;

    },

    render: function () {

    },

    close: function () {
        if (!this.isClosed) {

            this.isClosed = true;
        }
    }
});

var LetterView = Backbone.View.extend({
    el: "#chat",
    messageBoxTemplate: ["<li class='",
                        null,
                        "'><div class='date'>",
                        null,
                        "</div><dl><dt><img src='",
                        null,
                        "' width='35' height='35'/></dt><dd><div class='arrow'></div><p>",
                        null,
                        "</p></dd></dl></li>"],
    initialize: function (params) {
        var self = this;
        _.bindAll(this, 'render', 'fillRecentHistory', 'buildMessageBox', 'sendSuccess', 'renderContacts', 'switchContact', 'sendError', 'onNewLetter', 'fetchLetterError', 'displayNewLetters', 'fetchLetterUserError', 'close');
        app.viewRegistration.register("letter", this, true);
        this.isClosed = false;
        this.sessionUser = app.sessionManager.getSessionUser();
        var option = {
            "direction": 2
        };
        this.template = _.template(tpl.get('letter'));
        
        this.$el.append(this.template);
        this.$historyPanel = $("#letter_message_panel>#letter_history");
        this.$messagePanel = $("#letter_message_panel>#letter_new");
        this.$letterInput = $("#letter_input");
        this.$userList = $("#letter_user_list");
        if (params.toUserId && params.toUserId !== -1) {
            this.toUserId = params.toUserId;
            option.targetUserId = this.toUserId;
            option.targetType = Constants.LetterType.user;
            app.userManager.fetchUser(this.toUserId, {
                "success": function (user) {
                    self.toUser = user;
                    $("#letter_toUser_name").html(user.get("name"));

                    if (!self.letterUserList) {
                        self.letterUserList = new Users ();
                    }
                    self.letterUserList.add(user);
                    self.renderContacts(self.letterUserList);
                },
                "error": function () {
                }
            });
        } else {
            this.toUserId = -1;
            option.targetUserId = -1;
            option.targetType = Constants.LetterType.system;
        }

        if (this.toUserId === -1) {
            $("#letter_toUser_name").html("系统");
        }
        app.userManager.fetchLetters(option, {
            "success": this.fillRecentHistory,
            "error": function () {
            }
        });
        //TODO: fetch letter by user-pair
        this.recentLetters = new Letters ();
        this.render();
        app.userManager.fetchLetterUsers({
            "success": this.renderContacts,
            "error": this.fetchLetterUserError
        });
    },
    render: function () {
        this.fillRecentHistory();
        this.bindEvent();
        $("#chat_left").hide();
    },
    bindEvent: function () {
        var self = this;
        $("#letter_send_button").on("click", function (e) {
            if (!self.$letterInput.val()) {
                return;
            }
            app.letterManager.sendLetter(self.toUserId, self.$letterInput.val(), {
                "success": self.sendSuccess,
                "error": self.sendError
            });
            self.$messagePanel.append(self.buildMessageBox(-1, self.$letterInput.val(), new Date (), true));
            self.$messagePanel.scrollTop($('#letter_message_panel')[0].scrollHeight);
            self.$letterInput.val("");
        });
        this.$letterInput.on("keydown", function (e) {
            if (e.which == 13) {
                e.preventDefault();
                if (!self.$letterInput.val()) {
                    return;
                }
                self.$messagePanel.append(self.buildMessageBox(-1, self.$letterInput.val(), new Date (), true));
                app.letterManager.sendLetter(self.toUserId, self.$letterInput.val(), {
                    "success": self.sendSuccess,
                    "error": self.sendError
                });
                self.$messagePanel.scrollTop($('#letter_message_panel')[0].scrollHeight);
                self.$letterInput.val("");
            }
        });
        $("#letter_user_list").on("click", 'li', function (e) {
            id = Utilities.toInt(Utilities.getId(e.target.id));
            self.switchContact(id);
            
        });
        $("#chat_hide, #chat_box_left_title").on("click", function (e) {
            e.preventDefault();
            var style = $("#chat_left").attr("style");
            if (style && style.indexOf("390px") >= 0) {
                $("#chat_left").attr("style","margin-top: 0px;");
            } else {
                $("#chat_left").attr("style","margin-top: 390px;");
            }
            e.stopPropagation();
        });
        $("#chat_close").on("click", function (e) {
             e.preventDefault();
             $("#chat_left").hide();
             self.toUserId = null;
             e.stopPropagation();
        });
        $("#chat_contact_min, #chat_box_right_title").on("click", function(e){
            e.preventDefault();
            var style = $("#chat_right").attr("style");
            if (style && style.indexOf("390px") >= 0) {
                $("#chat_right").attr("style","margin-top: 0px;");
            } else {
                 $("#chat_right").attr("style","margin-top: 390px;");
            }
            e.stopPropagation();
        });
        $("#failed_to_send>a").on("click", function (e) {
            e.preventDefault();
            app.letterManager.sendLetter(self.toUserIdResend, self.messageResend, {
                "success": self.sendSuccess,
                "error": self.sendError
            });
            self.toUserIdResend = null;
            self.messageResend = null;
            $("#failed_to_send").hide();
        });
    },
    renderContacts: function (list) {
        var i;
        if (this.$userList) {
            this.$userList.empty();
        } else {

        }
        if (!this.letterUserList) {
            this.letterUserList = list;
        } else if (list && this.letterUserList !== list) {
            for ( i = 0; i < list.length; i++) {
                this.letterUserList.add(list.at(i));
            }
        }
        var buf = [], len = this.letterUserList.length, bufLen = 1, self = this, user, id;
        buf[0] ="<li id='letter_contact_-1'><img src='style/images/default-avatar-male.png' width='30' height='30'/> 系统</li>";
        for ( i = 0; i < len; i++) {
            user = this.letterUserList.at(i);
            buf[bufLen++] = "<li id='letter_contact_" + user.id + "'>" + "<img src='" + user.get("imgPath") + "' width='30' height='30'/>"+ user.get("name")+ "</li>";
        }
        this.$userList.append(buf.join(""));
    },

    switchContact: function (id) {
        var inList = id === -1 ? true : false,
            self = this;
        if (!inList){
            user = this.letterUserList.get(id);
            if (user !== null && typeof user !== 'undefined' && user instanceof Backbone.Model){
                inList = true;
            }
        }

        if (!inList) {
            app.userManager.fetchUser(id, {
                success: function (user) {
                    self.toUser = user;
                    self.toUserId = id;
                    if (!self.letterUserList) {
                        self.letterUserList = new Letters ();
                    }
                    self.letterUserList.add(user);
                    $("#letter_toUser_name").html(user.get("name"));
                    self.$userList.prepend("<li id='letter_contact_" + id + "'><img src='" + user.get("imgPath")+ "' width='30' height='30'/>" + user.get("name") + "</li>");
                },
                error: function () {
                }
            });
        }
        $("#chat_left").show().attr("style","margin-top: 0;");
        $("#letter_input").focus();
        this.$historyPanel.empty();
        this.$messagePanel.empty();
        this.$letterInput.val("");
        this.toUserIdResend = null;
        this.messageResend = null;
        $(".userNewMessage").removeClass("userNewMessage");
        this.toUserId = id;
        var user = this.letterUserList.get(id), option = {
            "direction": 2,
            "targetUserId": id,
            "targetType": id > -1 ? Constants.LetterType.user : Constants.LetterType.system
        };
        app.storage.setLastContact(id);
        if (this.toUserId === -1) {
            $("#letter_toUser_name").html("系统");
            app.userManager.fetchLetters(option, {
                "success": this.fillRecentHistory,
                "error": function () {
                    
                }
            });
            return;
        }
        this.toUser = user;
        $("#letter_toUser_name").html(user.get("name"));

        app.userManager.fetchLetters(option, {
            success: this.fillRecentHistory,
            error: function () {
                Info.alert("Letter fetch fail");
            }
        });
    },

    fillRecentHistory: function (letters) {
        this.$messagePanel.empty();
        if (!letters || !letters.length) {
            this.$historyPanel.hide();
            return;
        }
        this.$historyPanel.empty();
        this.$historyPanel.show();
        this.letterHistories = letters;
        var len = letters.length, i = 0, buf = [], letter, bufLen = 0;
        var lastDay, send_time;
        var start = len < 10 ? 0 : len - 10;
        for ( i = start; i < len; i++) {
            letter = letters.at(i);
            send_time = new Date (letter.get("send_time"));
            send_time.setHours(0);
            send_time.setMinutes(0);
            send_time.setSeconds(0);
            send_time.setMilliseconds(0);
            buf[bufLen++] = this.buildMessageBox(letter.get("letterId"), letter.get("content"), letter.get("send_time"), letter.get("from_userId") === this.sessionUser.id);
        }
        this.$historyPanel.append(buf.join(""));

        if (!$("#historyText").length) {
            this.$historyPanel.after('<div id="historyText" class="blank1" style="text-align:center; color:#ccc;">以上是历史信息</div>');
        }
    },
    buildMessageBox: function (id, message, time, sendByMe) {
        this.messageBoxTemplate[1] = (sendByMe ? "me " : "other ") + "letterId_"+id;
        this.messageBoxTemplate[3] = time.toLocaleString();
        this.messageBoxTemplate[5] = sendByMe ? this.sessionUser.get("imgPath") : this.toUser.get("imgPath");
        this.messageBoxTemplate[7] = message;
        return this.messageBoxTemplate.join("");
    },
    sendSuccess: function (letter) {

        $(".letterId_-1").each(function (index) {
            if ($(this).text() === letter.get("content")) {
                $(this).removeClass("letterId_-1").addClass("letterId_" + letter.get("letterId"));
                this.letterHistories.add(letter);
                return;
            }
        });
    },
    sendError: function (letter) {
        $("#failed_to_send").show();
        this.toUserIdResend = letter.get("to_userId");
        this.messageResend = letter.get("content");
    },
    fetchLetterUserError: function () {

    },
    fetchLetterError: function () {

    },
    displayNewLetters: function (letters) {
        //receiving only inbound letters;
        var i = letters.length - 1, letter, buf = [], j = 0;
        for (; len > 0; len--) {
            letter = letters.at(len);
            if (!this.letterHisotries.get(letter.id)) {
                buf[j] = this.buildMessageBox(letter.id, letter.get("content"), letter.get("send_time"), false);
                break;
            }
        }
        this.$messagePanel.append(buf.join(""));
    },
    onNewLetter: function (data) {
        var self = this;
        if (data.to_userId == this.toUserId) {
            app.userManager.fetchLetters({
                "direction": 2,
                "targetUserId": data.to_userId,
                "targetType": data.to_userId > -1 ? Constants.LetterType.user : Constants.LetterType.system
            }, {
                "success": self.displayNewLetters,
                "error": self.fetchLetterError
            });
        } else if (this.letterUserList.findWhere({
            "userId": data.to_userId
        })) {
            $("#contactList_" + data.to_userId).addClass("userNewMessage");
        } else {
            if (to_userId !== -1) {
                app.userManager.fetchUser(to_userId, {
                    "success": function (user) {
                        self.$userList.prepend("<dd id='letter_contact_" + user.id + "'>" + user.get("name")+ "</dd>");
                        $("#letter_contact_" + user.get("userId")).addClass("userNewMessage");
                    },
                    "error": function () {
                    }
                });
            } else {
                $("#contactList_-1").addClass("userNewMessage");
            }
        }
    },
    close: function () {
        if (!this.isClosed) {
            $("#letter_send_button").off();
            this.$letterInput.off();
            $("#letter_user_list").off();
            this.$el.empty();
            this.isClosed = true;
        }
    }
});

var LocationDropDownView = Backbone.View.extend({


    initialize: function ($parentContainer, parentView) {
        _.bindAll(this, 'assembleHtml', 'render', 'bindEvents', 'notifyParent', '_clearAll', 'close');

        this.defaultLocations = app.locationService.getDefaultLocations();
        this.htmlContent = this.assembleHtml();
        this.$parentContainer = $parentContainer;
        this.parentView = parentView;

        this.render();
        app.eventClearService.registerView(this);
    },

    assembleHtml: function(){
        var self = this;
        this.htmlContent = '';
        this.defaultLocations.each(function(defaultLocation){
              self.htmlContent += '<li class="default-location-dropdown-li" data-defaultLocationId="' + defaultLocation.get('defaultId') + '">' + defaultLocation.toUiString() + '</li>';
        });

        this.htmlContent = '<ul id="default-location-dropdown" class="search_down">' + this.htmlContent + '</ul>';
        return this.htmlContent;
    },

    render: function () {
        this.$parentContainer.append(this.htmlContent);
        this.bindEvents();
    },

    bindEvents: function(){
        var self = this;
        $('#default-location-dropdown').children('li').on('click', function (e) {
            self.notifyParent(parseInt($(this).attr('data-defaultLocationId'), 10));
            e.stopPropagation();
        });
    },

    notifyParent: function(defaultId){
        Info.log("User selected default location: " + this.defaultLocations.where({'defaultId': defaultId})[0].toUiString());
        this.parentView.acceptDefaultLocation(this.defaultLocations.where({'defaultId': defaultId})[0]);
        this.close();
    },

    _clearAll: function () {
        this.$parentContainer.children('#default-location-dropdown').children('li').off();
        this.$parentContainer.children('#default-location-dropdown').remove();
    },

    close: function () {
        this._clearAll();
        Backbone.View.prototype.remove.call(this);
    }
});
var MessageDetailView = Backbone.View.extend({

    el: "#content",

    initialize: function (messageIdWrapper) {
        _.bindAll(this, 'render', 'bindEvents', 'renderAutoMatch', 'loadTransactions', 'createNewTransaction', 'openTransactionDetail', 'parseMessage', 'parseTransaction', 'renderPriceList', 'cancelSuccess', 'cancelError', 'close');
        app.viewRegistration.register("MessageDetail", this, true);
        this.isClosed = false;

        this.user = app.sessionManager.getSessionUser();
        this.userId = app.sessionManager.getUserId();
        var self = this;
        this.newTransaction = new Transaction ();
        this.quickmatchTemplate = _.template(tpl.get('SimpleMessage'));
        app.messageManager.fetchMessage(messageIdWrapper.messageId, {
            success: function (message) {
                self.message = message;
                self.pricelist = self.message.get("departure_priceList");
                self.bookInfo = {
                    "go": false,
                    "back": false,
                    "number": 1
                };
                self.parsedMessage = self.parseMessage(self.message);
                self.messageId = self.message.get("messageId");
                self.ownerId = self.message.get("ownerId") || -1;

                self.template = _.template(tpl.get('DetailMessage'));
                self.transactionTemplate = _.template(tpl.get('Transaction'));
                self.render();
                self.bindEvents();
                self.showTransaction = false;
                for ( i = 1; i < self.pricelist.length; i++) {
                    if (self.pricelist[i]) {
                        self.pricelist[i] = self.pricelist[i - 1];
                    }
                }
                self.createNewTransaction();
            },
            error: function () {
                Info.displayErrorPage("content", "信息读取失败, 请刷新页面");
            }
        });
    },

    render: function () {
        var mapParams = {
            div: "view_map",
            class: "messageDetail-map-content",
            originLocation: this.message.get("departure_location"),
            destLocation: this.message.get("arrival_location"),
            clickable: false
        };
        this.$el.append(this.template(this.parsedMessage));
        this.map = app.storage.getViewCache("MapView", mapParams);
        this.renderPriceList();
        if (this.message.get("isRoundTrip")) {
            $(".messageDetail-top-location").attr("class", "messageDetail-top-location clearfix back-and-forth");
        } else {
            $(".messageDetail-top-location").attr("class", "messageDetail-top-location clearfix one-way");
        }
        app.messageManager.fetchTransactionList(this.message.id, {
            "success": this.loadTransactions,
            "error": this.loadError
        });
        app.messageManager.autoMatch(this.message.id, {
            "success": this.renderAutoMatch,
            "error": this.loadError
        });
    },
    loadTransactions: function (transactions) {
        var i, buffer = [], that = this;
        this.transactions = transactions;
        for ( i = 0; i < this.transactions.length; i++) {
            if (Utilities.isEmpty(this.transactions.at(i).targetUserName === null))
                continue;
            buffer[i] = this.transactionTemplate(this.transactions.at(i)._toJSON());
        }
        var $transactions = $("#view_transactions_content").append(buffer.join(""));
        // $transactions.children("li").on("click", function (e) {
        //     var id = Utilities.getId(e.delegateTarget.id);
        //     var transaction = that.transactions.get(Utilities.toInt(id));
        //     that.openTransactionDetail(transaction);
        // });
        $("#reservation_count").html(this.transactions.length);
    },
    loadError: function () {
        alert("加载失败");
    },
    renderAutoMatch: function (result) {
        var i, buf = [], len = result.length, that = this;
        this.$automatch = $("#view_automatch");
        if (!len) {
            this.$automatch.hide();
            return;
        }
        len = len < 3 ? len : 3;
        for ( i = 0; i < len; i++) {
            buf[i] = this.quickmatchTemplate(result.at(i)._toJSON());
        }
        this.$automatch.append(buf.join(""));
        this.$automatch.children(".messageDetail-middle-autoMatch-loading").remove();
        this.$messages = this.$automatch.children(".message_simple").on('click', function (e) {
            var id = Utilities.getId(e.delegateTarget.id);
            app.navigate("message/" + id, true);
        });
    },
    bindEvents: function () {
        var that = this;

        if (this.ownerId === this.userId) {
            this.cancelWindowTpl = _.template(tpl.get('messageCancel'));
            var $popup = $("#popup").attr("class", "pop book_no").append(that.cancelWindowTpl());
            var $overlay = $("#overlay");
            this.$viewend = $("#view_end").on("click", function () {
                $popup.show();
                $overlay.show();
            });
            this.$viewendConfirm = $("#messageEndConfirm").on("click", function(){
                $(this).val("取 消 中 ...").prop("disabled", true);
                app.messageManager.deactivateMessage(that.message.id, {
                    "success": that.cancelSuccess,
                    "error": that.cancelError
                });
            });
            this.$viewendCancel = $("#messageEndClose,#messageEndCancel").on("click", function(){
                that.$viewendConfirm.val("确认");
                $popup.hide();
                $overlay.hide();
            });
        }

        var n = this.departureSeats < this.arrivalSeats ? this.departureSeats : this.arrivalSeats;
        this.$viewbook = $("#view_book");
        this.$viewcontact = $("#view_contact");
        this.$viewlink = $("#view_contactLink");
        if (this.departureSeats === 0 && this.arrivalSeats === 0) {
            this.$viewbook.text("座位已满").css("background-color", "#888888").css("width", "100%").off();
        } else if (this.parsedMessage.type === Constants.messageType.help) {
            this.$viewbook.on("click", function (e) {
                if (app.sessionManager.hasSession()) {
                    that.transactionView = new TransactionDetailView (that.newTransaction, {
                        "departure_seatsNumber": that.message.get("departure_seatsNumber") - that.message.get("departure_seatsBooked"),
                        "arrival_seatsNumber": that.message.get("arrival_seatsNumber") - that.message.get("arrival_seatsBooked")
                    });
                } else {
                    Info.alert("请先登录。若是已经登陆，请刷新页面。");
                    $("html, body").animate({ scrollTop: 0, complete: function(){ $("#loginBox").show();} }, "slow");
                }
            });
        } else if (this.parsedMessage.type === Constants.messageType.ask) {
            this.$viewcontact.on('click', function () {
                if (app.sessionManager.hasSession()) {
                    app.letterView.switchContact(that.ownerId);
                } else {
                    Info.alert("请先登录。若是已经登陆，请刷新页面。");
                    $("html, body").animate({ scrollTop: 0, complete: function(){ $("#loginBox").show();} }, "slow");
                }
            });
        }
        this.$viewlink.on('click', function (e) {
            e.preventDefault();
            app.letterView.switchContact(that.ownerId);
        });
        $("#view_profilePicture, #view_profileName").on("click", function (e) {
            app.navigate("personal/"+this.ownerId, true);
        });
    },
    createNewTransaction: function () {
        this.newTransaction.set("providerId", this.ownerId);
        this.newTransaction.set("customerId", this.userId);
        this.newTransaction.set("messageId", this.messageId);
        this.newTransaction.set("provider", this.message.get("owner"));
        this.newTransaction.set("customer", this.user);
        this.newTransaction.set("message", this.message);
        this.newTransaction.set("paymentMethod", this.message.get("paymentMethod"));
        this.newTransaction.set("providerNote", this.message.get("note"));
        if (this.message.get("isRoundTrip")) {
            this.newTransaction.set("direction", 0);
        } else {
            this.newTransaction.set("direction", 1);
        }
        this.newTransaction.set("departure_location", this.message.get("departure_location"));
        this.newTransaction.set("departure_time", this.message.get("departure_time"));
        this.newTransaction.set("departure_timeSlot", this.message.get("departure_timeSlot"));

        this.newTransaction.set("departure_priceList", this.message.get("departure_priceList"));
        this.newTransaction.set("arrival_location", this.message.get("arrival_location"));
        this.newTransaction.set("arrival_time", this.message.get("arrival_time"));
        this.newTransaction.set("arrival_timeSlot", this.message.get("arrival_timeSlot"));

        this.newTransaction.set("arrival_priceList", this.message.get("arrival_priceList"));
        this.newTransaction.set("state", this.message.get("state"));
    },
    openTransactionDetail: function (transaction) {
        var that = this;
        this.transactionDetailView = new TransactionDetailView (transaction, {
            "departure_seatsNumber": that.message.get("departure_seatsNumber") - that.message.get("departure_seatsBooked"),
            "arrival_seatsNumber": that.message.get("arrival_seatsNumber") - that.message.get("arrival_seatsBooked")
        });

    },

    parseMessage: function (message) {
        var parsedMessage = message._toJSON();
        this.departureSeats = parsedMessage.departure_seatsNumber - parsedMessage.departure_seatsBooked;
        this.arrivalSeats = parsedMessage.arrival_seatsNumber - parsedMessage.arrival_seatsBooked;
        return parsedMessage;
    },

    parseTransaction: function (transaction, i) {
        var parsedTransaction = {};
        parsedTransaction.id = i;
        parsedTransaction.transactionId = transaction.get("transactionId");
        parsedTransaction.targetUserName = transaction.get("targetUserName");
        parsedTransaction.date = Utilities.getDateString(transaction.get("creationTime"));
        return parsedTransaction;
    },
    renderPriceList: function () {
        var pricelist = this.message.get("departure_priceList");
        var appender = [];
        for (var p = 0; p < pricelist.length; p++) {
            if (pricelist[p] !== 0) {
                var num = Utilities.toInt(p) + 1;
                appender.push("<li>"+ num +"人：" + pricelist[p] + "元/人 </li>");
            }
        }
        $("#pricelist").append(appender.join(""));
    },
    cancelSuccess: function(){
        this.$viewendConfirm.removeAttr("disabled").val("取消成功, 关闭").off().on("click", function (e) {
            $("#popup").empty().hide();
            $("#overlay").hide();
        });
        this.$viewend.off();
        this.$viewend.val("已经结束").removeClass("btn_R_long").attr("id", "view_expired");
    },
    cancelError: function(){
        this.$viewendConfirm.val("取消失败,请重试").removeAttr("disabled");
    },
    close: function () {
        if (!this.isClosed) {
            if (this.map) {
                this.map.close();
            }
//            $("#view_edit").off();
            if (this.$viewbook) {
                this.$viewbook.off();
            }
            if (this.$viewcontact){
                this.$viewcontact.off();
            }
            if (this.$messages) {
                this.$messages.off();
            }
            if ( typeof this.$el !== 'undefined') {
                this.$el.empty();
            }
            $("#view_profilePicture, #view_profileName").off();
            $("#popup").empty();
            this.isClosed = true;
        }
    }
});

/*dedicated view for Message post, deep linking will not be used for Message post states, this view holds the session
 * data*/
var MessagePostView = Backbone.View.extend({

    el: "",
    toSubmit: {
        "origin": undefined,
        "dest": undefined,
        "originPivot": undefined,
        "destPivot": undefined,
        "type": Constants.messageType.ask,
        "numberRequests": 0,
        "requests": [],
        "description": "",
        "priceList": [0],
        "departureSeats": 1,
        "returnSeats": 1,
        "priceListEntries": 1,
        "conditionalPrice": false
    },
    addrInputConst: "请输入具体地址",
    /**
     request
     {
     type:ask | help,
     dateStart:"",
     dateEnd:"",
     time:"000"-"111",
     round:true|false	//if round is false, ignore dateEnd
     }
     */
    initialize: function () {
        _.bindAll(this, 'render', 'acceptDefaultLocation', 'closeLocationDropDown', 'renderFirstPage', 'renderSecondPage', 'renderThirdPage', 'unbindStepEvents', 'onTypeSelect', 'onAddClick', 'toggleDateVisibility', 'updateValue', 'deleteSlot', 'validate', 'getId', 'toMessage',  'close');
        this.isClosed = false;
        this.baseTemplate = _.template(tpl.get('Publish_base'));
        this.step1Template = _.template(tpl.get('Publish_step1'));
        this.step2Template = _.template(tpl.get('Publish_step2'));
        this.step3Template = _.template(tpl.get('Publish_step3'));
        this.askSlotTemplate = _.template(tpl.get('Publish_singleSlotAsk'));
        this.priceEntryTemplate = ['<div class="publish_price_list_entry"><label>人数：', -1, '</label><input id = "seats_', -1, '" type="text" value=""/><label>元/人</label></div>'];

        this.user = app.sessionManager.getSessionUser();
        this.userId = this.user.get("userId");
        this.inRange = {};
        this.domContainer = $('#content');
        this.domContainer.append(this.baseTemplate);
        this.$publishContent = $('#publish_requirement');
        this.$progress = $('#publish_progress');
    },

    render: function (stepIndex) {
        // --- events binding ---
        this.unbindStepEvents(this.stepIndex);
        this.$publishContent.empty();

        //validity of stepIndex is guranteed on the URL level, since deep linking is applied
        //reduncy of safety check is not necessary here because in development, we need to know where things go wrong
        if (stepIndex === 1) {
            this.stepIndex = 1;
            this.renderFirstPage();
        } else if (stepIndex === 2) {
            this.stepIndex = 2;
            this.renderSecondPage();
        } else if (stepIndex === 3) {
            this.stepIndex = 3;
            this.renderThirdPage();
        }
    },
    closeLocationDropDown: function(){
        if (typeof this.locationDropDownView !== 'undefined' && this.locationDropDownView !== null){
            this.locationDropDownView.close();
        }
    },
    acceptDefaultLocation: function(defaultLocation){
        var addr, lat, lng;
        if (this.locationDirection === Constants.LocationDirection.from){
            $("#originWrong").remove();
            this.toSubmit.originPivot = defaultLocation;
            this.toSubmit.originPivot.copy(this.toSubmit.origin);
            this.$page1origin.val(this.toSubmit.origin.toUiString());
            this.$page1originAddr.val("");
            defaultLocation.copy(this.toSubmit.origin);
            this.toSubmit.origin.set("defaultId", -1);
            this.inRange.from = true;
        }
        else if (this.locationDirection === Constants.LocationDirection.to){
            $("#destWrong").remove();
            this.toSubmit.destPivot = defaultLocation;
            this.toSubmit.destPivot.copy(this.toSubmit.dest);
            this.$page1dest.val(this.toSubmit.dest.toUiString());
            this.$page1destAddr.val("");
            defaultLocation.copy(this.toSubmit.dest);
            this.toSubmit.dest.set("defaultId", -1);
            this.inRange.to = true;
        }
        if (this.map) {
            this.map.getDirection(this.toSubmit.originPivot, this.toSubmit.destPivot);
        }
    },

    renderFirstPage: function () {
        this.$publishContent.append(this.step1Template());
        this.$progress.attr("class", "publish publish_step_1");
        var that = this;
        this.$page1type = $('#publish_type>div').on('click', function (e) {
            that.onTypeSelect(e);
        });
        this.$page1origin = $('#publish_originInput').on("click", function (e) {
            $("#originWrong").remove();
            $("#destWrong").remove();
            that.closeLocationDropDown();
            that.locationDirection = Constants.LocationDirection.from;

            that.closeLocationDropDown();
            that.locationDropDownView = new LocationDropDownView($("#from"), that);
            e.stopPropagation();
        });
        this.$page1dest = $('#publish_destInput').on("click", function (e) {
            $("#originWrong").remove();
            $("#destWrong").remove();
            that.closeLocationDropDown();
            that.locationDirection = Constants.LocationDirection.to;

            that.closeLocationDropDown();
            that.locationDropDownView = new LocationDropDownView($("#to"), that);
            e.stopPropagation();
        });
        this.$page1originAddr = $('#publish_originAddress');
        this.$page1destAddr = $('#publish_destAddress');

        this.$page1originAddr.on("focus", function() {
            if ($(this).val() === that.addrInputConst) {
                $(this).val("");
            }
        }).on("blur", function () {
            if ($(this).val() === "") {
                $(this).val(that.addrInputConst);
                if (that.toSubmit.originPivot) {
                    that.toSubmit.originPivot.copy(that.toSubmit.origin);
                    that.toSubmit.origin.set("defaultId", -1);
                }
            } else {
                that.toSubmit.origin.set("pointAddress", $(this).val());
                that.buildGeocodeRequest(that.toSubmit.origin, "origin");
            }
        });
        this.$page1destAddr.on("focus", function() {
            if ($(this).val() === that.addrInputConst) {
                $(this).val("");
                if (that.toSubmit.destPivot) {
                    that.toSubmit.destPivot.copy(that.toSubmit.dest);
                    that.toSubmit.dest.set("defaultId", -1);
                }
            }
        }).on("blur", function () {
            if ($(this).val() === "") {
                $(this).val(that.addrInputConst);
            } else {
                that.toSubmit.dest.set("pointAddress", $(this).val());
                that.buildGeocodeRequest(that.toSubmit.dest, "dest");
            }
        });
        this.restoreState(1);
        var mapConfig = {};
        mapConfig.div = "publish_map";
        mapConfig.class = "publish_map";
        mapConfig.originLocation = this.toSubmit.origin || this.user.get("location");
        mapConfig.destLocation = this.toSubmit.dest || this.user.get("location");
        mapConfig.init = this;
        mapConfig.clickable = true;
        if (!this.map) {
            this.map = app.storage.getViewCache("MapView", mapConfig);
        } else if ($("#mapcache").length){
            this.map.cacheConfig(mapConfig);
        }
    },
    buildGeocodeRequest: function (location, point) {
        var url = "http://maps.googleapis.com/maps/api/geocode/json?address=" + location.get("pointAddress") + "," + location.get("city") + "&sensor=false", that = this;
        $.ajax({
              url: url,
              context: document.body
        }).done(function(json) {
            that.map.setMarker(json, point);
            $("#originWrong").remove();
            $("#destWrong").remove();
            if (point === "origin") {
                that.toSubmit.origin.set("lat", json.results[0].geometry.location.lat);
                that.toSubmit.origin.set("lng", json.results[0].geometry.location.lng);
                if (that.toSubmit.originPivot) {
                    that.inRange.from = that.toSubmit.originPivot.isInRange(that.toSubmit.origin);
                    if (!that.inRange.from) {
                        $("#from").append('<dd id="originWrong" class="wrong"><p>对不起，你所填写的地址不在服务区</p></dd>');
                    }
                }
            } else {
                that.toSubmit.dest.set("lat", json.results[0].geometry.location.lat);
                that.toSubmit.dest.set("lng", json.results[0].geometry.location.lng);
                if (that.toSubmit.destPivot) {
                    that.inRange.to = that.toSubmit.destPivot.isInRange(that.toSubmit.dest);
                    if (!that.inRange.to) {
                        $("#to").append('<dd id="destWrong" class="wrong"><p>对不起，你所填写的地址不在服务区</p></dd>');
                    }
                }
            }
        });
    },
    updateByMapMarker: function (type, json) {
        if (type === "origin") {
            this.$page1originAddr.val(json.results[0].formatted_address.split(",")[0]);
            this.toSubmit.origin.parseGoogleJson(json);
            this.buildGeocodeRequest(this.toSubmit.origin, "origin");
        } else {
            this.$page1destAddr.val(json.results[0].formatted_address.split(",")[0]);
            this.toSubmit.dest.parseGoogleJson(json);
            this.buildGeocodeRequest(this.toSubmit.dest, "dest");
        }
    },
    refactorRequests: function () {
        var newRequests = [], counter = 0;

        var requests;
        requests = this.toSubmit.requests;

        for (var request = 0; request < requests.length; request++) {
            if (requests[request]) {
                newRequests[counter] = requests[request];
                newRequests[counter].id = counter + 1;
                counter++;
            }
        }
        this.toSubmit.requests = newRequests;
        this.toSubmit.numberRequests = counter;
    },
    renderSecondPage: function () {
        this.$publishContent.append(this.step2Template());
        this.$progress.attr("class", "publish publish_step_2");
        var that = this;
        this.currentTemplate = this.askSlotTemplate;
        this.refactorRequests();
        this.$timeSlots = $('#publish_time_slots');
        if (this.toSubmit.requests.length === 0 || this.toSubmit.requests[0].type !== this.toSubmit.type) {
            this.toSubmit.requests = [];
            this.toSubmit.requests[0] = {};
            this.toSubmit.requests[0].departTime = -1;
            this.toSubmit.requests[0].returnTime = -1;
            this.toSubmit.requests[0].id = 1;
            this.toSubmit.requests[0].type = this.toSubmit.type;
            this.toSubmit.requests[0].round = true;
            this.toSubmit.numberRequests = 1;

            this.$timeSlots.append(this.currentTemplate({
                id: 1
            }));
            $("input[name=publish_departDate_1]").datepicker({
                buttonImageOnly: true,
                buttonImage: "calendar.gif",
                buttonText: "Calendar",
                minDate: new Date (),
                onSelect: function (text, inst) {
                    var d = new Date ();
                    d.setDate(inst.selectedDay);
                    d.setMonth(inst.selectedMonth);
                    d.setYear(inst.selectedYear);
                    that.updateValue(this, d);
                    $("input[name=publish_returnDate_1]").datepicker("option", "minDate", d);
                }
            });
            $("input[name=publish_returnDate_1]").datepicker({
                buttonImageOnly: true,
                buttonImage: "calendar.gif",
                buttonText: "Calendar",
                minDate: new Date (),
                onSelect: function (text, inst) {
                    var d = new Date ();
                    d.setDate(inst.selectedDay);
                    d.setMonth(inst.selectedMonth);
                    d.setYear(inst.selectedYear);
                    that.updateValue(this, d);
                    $("input[name=publish_departDate_1]").datepicker("option", "maxDate", d);
                }
            });
        } else {
            for (var request = 0; request < this.toSubmit.requests.length; request++) {
                if (this.toSubmit.requests[request]) {
                    var index = request + 1;
                    this.$timeSlots.append(this.currentTemplate({
                        id: index
                    }));
                    $("input[name=publish_returnDate_" + index + "]").datepicker({
                        buttonImageOnly: true,
                        buttonImage: "calendar.gif",
                        buttonText: "Calendar",
                        onSelect: function (text, inst) {
                            var d = new Date ();
                            d.setDate(inst.selectedDay);
                            d.setMonth(inst.selectedMonth);
                            d.setYear(inst.selectedYear);
                            that.updateValue(this, d);
                            $("input[name=publish_departDate_" + index + "]").datepicker("option", "maxDate", d);
                        }
                    });

                    $("input[name=publish_departDate_" + index + "]").datepicker({
                        buttonImageOnly: true,
                        buttonImage: "calendar.gif",
                        buttonText: "Calendar",
                        minDate: new Date (),
                        defaultDate: this.toSubmit.requests[request].departDate,
                        onSelect: function (text, inst) {
                            var d = new Date ();
                            d.setDate(inst.selectedDay);
                            d.setMonth(inst.selectedMonth);
                            d.setYear(inst.selectedYear);
                            that.updateValue(this, d);
                            $("input[name=publish_returnDate_" + index + "]").datepicker("option", "minDate", d);
                        }
                    });
                }
            }
            this.restoreState(2);
        }
        this.$timeSlots.on("click", ".depart_time", function (e) {
            $(".publish_time_menu").hide();
            if (e.target.tagName === "LI") {
                $(this).children().first().val(e.target.textContent);
                that.updateValue(e);
                return;
            }
            $(this).children().last().toggle();
        });
        this.$timeSlots.on("click", ".return_time", function (e) {
            $(".publish_time_menu").hide();
            if (e.target.tagName === "LI") {
                $(this).children().first().val(e.target.textContent);
                that.updateValue(e);
                return;
            }
            $(this).children().last().toggle();
        });
        this.$timeSlots.on("click", ".checkbox", function (e) {
            if ($(this).hasClass("checked")) {
                $(this).removeClass("checked");
            } else {
                $(this).addClass("checked");
            }
            var boxId = Utilities.toInt(Utilities.getId($(e.target).attr("name")));
            var maximumDate = $("input[name=publish_returnDate_" + boxId + "]").datepicker("getDate");
            if ($(this).hasClass("checked")) {
               that.toSubmit.requests[0].round = true;
                $("input[name=publish_departDate_"+ boxId + "]").datepicker("option", "maxDate", maximumDate);
                that.toggleDateVisibility(boxId, false);
            } else {
                that.toSubmit.requests[0].round = false;
                $("input[name=publish_departDate_"+ boxId + "]").datepicker("option", "maxDate", null);
                that.toggleDateVisibility(boxId, true);
            }
        });
        this.$timeSlots.on('click', '.publish_delete', function (e) {
            that.deleteSlot(e);
        });
        $('#publish_time_add').find("input").on('click', function () {
            that.onAddClick();
        });
        this.$timeSlots.on("keypress", "input.date", function (e) {
            e.preventDefault();
        });
        if (this.toSubmit.numberRequests <= 1){
            $('.publish_delete').css('display', 'none');
        }
    },
    renderThirdPage: function () {
        var that = this;
        this.$publishContent.append(this.step3Template);
        this.$description = $('#publish_description_input');
        this.$seats = $("#seats");
        this.$upArrow = $("#seats_control>.add");
        this.$downArrow = $("#seats_control>.plus_disabled");
        if (this.$downArrow.length === 0) {
            this.$downArrow = $("#seats_control>.plus");
        }
        
        this.$priceListContainer = $("#publish_pricelist_container");
        if (this.toSubmit.type === Constants.messageType.help) {
            this.$priceList = $("#publish_priceList");
            this.$singlePrice = $("#publish_singlePrice");
            this.$conditionalPriceSwitch = $("#conditionalPriceSwitch");
            this.$priceAdd = $("#publish_price_add");
        }

        this.$priceListContainer.hide();

        this.$progress.attr("class", "publish publish_step_3");
        this.restoreState(3);
        this.$seats.on("keyup", function (e) {
            if (e.keyCode < 48 || e.keyCode > 57) {
                e.preventDefault();
            }
            if (that.toSubmit.departureSeats>1) {
                that.$downArrow.attr("class","plus");
            } else {
                that.$downArrow.attr("class","plus_disabled");
            }
        }).on("blur", function (e) {
            var value = Utilities.toInt($(this).val());
            if (!value || isNaN(value) || value < that.toSubmit.priceListEntries) {
                value = that.toSubmit.priceListEntries;
                $(this).val(value);
            }
            that.toSubmit.departureSeats = value;
            that.toSubmit.returnSeats = value;
        });
        this.$upArrow.on("click", function (e) {
            that.toSubmit.departureSeats++;
            that.toSubmit.returnSeats++;
            that.$seats.val(that.toSubmit.departureSeats);
            if (that.toSubmit.departureSeats>1) {
                that.$downArrow.attr("class","plus");
            }
            $("#publish_seats_full").remove();
        });
        that.$downArrow.on("click", function (e) {
            if ($(this).hasClass("plus_disabled")) {
                return;
            }
            that.toSubmit.departureSeats--;
            that.toSubmit.returnSeats--;
            that.$seats.val(that.toSubmit.departureSeats);
            if (that.toSubmit.departureSeats<=1) {
                $(this).attr("class", "plus_disabled");
            }
        });
        this.$description.on('blur', function (e) {
            that.toSubmit.description = e.target.value;
        });
        if (this.toSubmit.type === Constants.messageType.help) {
            $("#seatlabeltext").html("提<b></b>供");
            this.$priceList.on("blur", "input", function (e) {
                that.toSubmit.priceList[Utilities.toInt(Utilities.getId(e.target.id))-1] = Utilities.toInt(e.target.value);
            }).on("focus", "input", function (e) {
                $("#publish_priceError").remove();
            });
            this.$priceAdd.on("click", function (e) {
                if (that.toSubmit.priceListEntries < that.toSubmit.departureSeats) {
                    var seatId = ++that.toSubmit.priceListEntries;
                    that.priceEntryTemplate[1] = seatId;
                    that.priceEntryTemplate[3] = seatId;
                    that.$priceList.append(that.priceEntryTemplate.join(""));
                    that.toSubmit.priceList[seatId - 1] = 0;
                    that.$entryClose.show();
                    that.$entryClose.appendTo(that.$priceList.children(".publish_price_list_entry").last());
                    if (that.toSubmit.departureSeats <= that.toSubmit.priceListEntries) {
                        that.$downArrow.attr("class","plus_disabled");
                    }
                } else {
                    if ($("#publish_seats_full").length === 0) {
                        that.$priceListContainer.append('<div id="publish_seats_full" class="publish_price_notice" style="float:left">请添加更多座位</div>');
                    }
                }
            });
            this.$entryClose.on("click", function (e) {
                $(this).appendTo(that.$priceList.children(".publish_price_list_entry:nth-last-child(2)").last());
                that.$priceList.children(".publish_price_list_entry").last().remove();
                var seatId = that.toSubmit.priceListEntries--;
                if (seatId <= 2) {
                    that.$entryClose.hide();
                }
                that.toSubmit.priceList[seatId - 1] = null;
            });
            this.$conditionalPriceSwitch.on("click", function (e) {
                if ($(this).hasClass("checked")) {
                    $(this).removeClass("checked");
                    that.$singlePrice.fadeIn();
                    that.$priceListContainer.hide();
                    that.toSubmit.conditionalPrice = false;
                } else {
                    $(this).addClass("checked");
                    that.$singlePrice.hide();
                    that.$priceListContainer.fadeIn();
                    that.toSubmit.conditionalPrice = true;
                }

            });
        }
    },
    restoreState: function (page) {
        var date, id;
        if (page === 1) {
            $('#publish_type>.active').removeClass('active');
            $('#publish_' + this.toSubmit.type).addClass('active');
            if (this.toSubmit.origin) {
                this.$page1origin.val(this.toSubmit.origin.toUiString());
                this.$page1originAddr.val(this.toSubmit.origin.get("pointAddress"));
            } else {
                this.toSubmit.origin = new UserLocation();
            }
            if (this.toSubmit.dest) {
                this.$page1dest.val(this.toSubmit.dest.toUiString());
                this.$page1destAddr.val(this.toSubmit.dest.get("pointAddress"));
            } else {
                this.toSubmit.dest = new UserLocation();
            }
        } else if (page === 2) {
            var r = this.toSubmit.requests;
            for (var request = 0; request < r.length; request++) {
                if (r[request]) {
                    id = Utilities.toInt(request) + 1;
                    if (r[request].round) {
                        $('div[name=publish_round_' + id + ']').attr("class", "checkbox checked");
                        $('#return_time_' + id).find("input").val(Utilities.getDayTimeSlotText(r[request].returnTime));
                    } else {
                        $('div[name=publish_round_' + id + ']').attr("class", "checkbox");
                    }
                    if (r[request].departDate) {
                        date = r[request].departDate;
                        $('input[name=publish_departDate_' + id + ']').val((1 + date.getMonth()) + "/" + date.getDate() + "/" + date.getFullYear());
                        $('input[name=publish_returnDate_' + id + ']').datepicker("option", "minDate", date);
                    }
                    if (r[request].round && r[request].returnDate) {
                        date = r[request].returnDate;
                        $('input[name=publish_departDate_' + id + ']').datepicker("option", "maxDate", this.toSubmit.requests[request].returnDate);
                        $('input[name=publish_returnDate_' + id + ']').val((1 + date.getMonth()) + "/" + date.getDate() + "/" + date.getFullYear());
                        $("div[name=publish_round_" + id + "]").addClass("checked");
                    } else {
                        $('input[name=publish_returnDate_' + id + ']').prop("disabled", true);
                        $('#return_time_' + id).prop("disabled", true);
                        $("div[name=publish_round_" + id + "]").parent().parent().addClass("disabled");
                    }
                    $('#depart_time_' + id).find("input").val(Utilities.getDayTimeSlotText(r[request].departTime));
                }
            }
        } else if (page === 3) {
            this.$description.val(this.toSubmit.description);
            this.$seats.val(this.toSubmit.departureSeats);
            if (this.toSubmit.type === Constants.messageType.ask) {
                $("#publish_price_container").remove();
                return;
            }
            this.$priceList.children(".publish_price_list_entry").remove();
            if (this.toSubmit.conditionalPrice) {
                this.$conditionalPriceSwitch.addClass("publish_selected");
                this.$singlePrice.hide();
                this.$priceListContainer.show();
                var entryNum = 0;
                id = 0;
                for (var i = 0; i < this.toSubmit.priceList.length; i++) {
                    d = i + 1;
                    entryNum++;
                    this.priceEntryTemplate[1] = id;
                    this.priceEntryTemplate[3] = id;
                    this.$priceList.append(this.priceEntryTemplate.join(""));
                    $("#seats_" + id).val(this.toSubmit.priceList[i]);
                }
                this.toSubmit.priceListEntries = entryNum;
                this.$priceList.children(".publish_price_list_entry").last().append('<div id="publish_entry_close" class="close">关闭</div>');
                this.$entryClose = $("#publish_entry_close");
                if (entryNum === 1) {
                    this.$entryClose.hide();
                }
            } else {
                this.priceEntryTemplate[1] = 1;
                this.priceEntryTemplate[3] = 1;
                this.$priceList.append(this.priceEntryTemplate.join(""));
                this.$priceList.children(".publish_price_list_entry").last().append('<div id="publish_entry_close" class="close">关闭</div>');
                this.$entryClose = $("#publish_entry_close");
                this.$entryClose.hide();
                $("#seatsNumber_1").val(1);
                $("#seats_1").val(this.toSubmit.priceList[0]);
                this.$conditionalPriceSwitch.removeClass("publish_selected");
                this.$singlePrice.show();
                this.$priceListContainer.hide();
            }
        }
    },

    unbindStepEvents: function (previousStepIndex) {
        if (previousStepIndex === 1) {
            this.$page1type.off();
            this.$page1originAddr.off();
            this.$page1destAddr.off();
        } else if (previousStepIndex === 2) {
            this.$timeSlots.off();
            $('#publish_time_add').off();
        } else if (previousStepIndex === 3) {
                this.$description.off();
                this.$seats.off();
                this.$upArrow.off();
                this.$downArrow.off();
            if (this.toSubmit.type === Constants.messageType.help) {
                $("#seats_1").off();
                $('#publish_finish').off();
                this.$priceAdd.off();
                this.$conditionalPriceSwitch.off();
                this.$priceList.off();
                this.$entryClose.off();
            }
        }
    },

    onTypeSelect: function (e) {
        $('#publish_type>.active').removeClass('active');
        $(e.delegateTarget).addClass('active');
        this.toSubmit.type = e.delegateTarget.id === "publish_0" ? Constants.messageType.ask : Constants.messageType.help;
    },
    onAddClick: function () {
        var index = this.toSubmit.requests.length;
        var that = this;
        var id = index + 1;
        this.toSubmit.numberRequests++;
        this.toSubmit.requests[index] = {};
        this.toSubmit.requests[index].type = this.toSubmit.type;
        this.toSubmit.requests[index].id = id;
        this.$timeSlots.append(this.currentTemplate({
            id: id
        }));
        $("input[name=publish_departDate_" + id + "]").datepicker({
            buttonImageOnly: true,
            buttonImage: "calendar.gif",
            buttonText: "Calendar",
            minDate: new Date (),
            onSelect: function (text, inst) {
                var d = new Date ();
                d.setDate(inst.selectedDay);
                d.setMonth(inst.selectedMonth);
                d.setYear(inst.selectedYear);
                that.updateValue(this, d);
                $("input[name=publish_returnDate_" + id + "]").datepicker("option", "minDate", d);
            }
        });
        $("input[name=publish_returnDate_" + id + "]").datepicker({
            buttonImageOnly: true,
            buttonImage: "calendar.gif",
            buttonText: "Calendar",
            minDate: new Date (),
            onSelect: function (text, inst) {
                var d = new Date ();
                d.setDate(inst.selectedDay);
                d.setMonth(inst.selectedMonth);
                d.setYear(inst.selectedYear);
                that.updateValue(this, d);
                $("input[name=publish_departDate_" + id + "]").datepicker("option", "maxDate", d);
            }
        });
        $("input[name=publish_returnDate_" + id + "]").on("keypress", function (e) {
            e.preventDefault();
        });
        $("input[name=publish_departDate_" + id + "]").on("keypress", function (e) {
            e.preventDefault();
        });
        if (this.toSubmit.numberRequests > 1){
            $('.publish_delete').css('display', 'block');
        }
    },
    toggleDateVisibility: function (id, state) {
        if (state) {
            $("#publish_time_"+id+">dl").last().addClass("disabled");
        } else {
            $("#publish_time_"+id+">dl").last().removeClass("disabled");
        }
        $('input[name=publish_returnDate_' + id + ']').prop('disabled', state);
        $('#return_time_' + id).prop('disabled', state);
    },

    updateValue: function (e, d) {
        var id;
        if (e.target && e.target.value !== "") {
            var name = e.target.parentElement.parentElement.id;
            id = this.getId(name);
            if (name.indexOf("depart_time") > -1) {
                this.toSubmit.requests[Utilities.toInt(id) - 1].departTime = e.target.value;
            } else if (name.indexOf("return_time") > -1) {
                this.toSubmit.requests[Utilities.toInt(id) - 1].returnTime = e.target.value;
            }
        } else if (e.name && d) {
            id = this.getId(e.name);
            if (e.name.indexOf("publish_departDate_") === 0) {
                this.toSubmit.requests[Utilities.toInt(id) - 1].departDate = d;
                var round = $("div[name=publish_round_" + id + "]").hasClass("checked");
                this.toSubmit.requests[Utilities.toInt(id) - 1].round = round;

            } else if (e.name.indexOf("publish_returnDate_") === 0) {
                this.toSubmit.requests[Utilities.toInt(id) - 1].returnDate = d;
                this.toSubmit.requests[Utilities.toInt(id) - 1].round = true;
            }
        }
    },

    deleteSlot: function (e) {
        if ( this.toSubmit.numberRequests > 1){
            var id = this.getId(e.target.id);
            $('#publish_time_' + id).remove();
            this.toSubmit.numberRequests--;
            this.toSubmit.requests[Utilities.toInt(id) - 1] = null;
            if (this.toSubmit.numberRequests <= 1){
                $('.publish_delete').css('display', 'none');
            }
        }
    },

    getId: function (str) {
        var list = str.split("_");
        return list[list.length - 1];
    },

    validate: function (page) {

        var counter = 0;

        if (page === 1) {
            $("#originWrong").add($("#destWrong")).remove();
            var locvalid = true;
            if (!this.toSubmit.originPivot) {
                $("#from").append('<dd id="originWrong" class="wrong"><p>请选择具体地区</p></dd>');
                locvalid = false;
            }
            if (!this.toSubmit.destPivot) {
                $("#to").append('<dd id="destWrong" class="wrong"><p>请选择具体地区</p></dd>');
                locvalid = false;
            }
            if (!locvalid) {
                return false;
            }
            // if (!$("publish_originAddress").val() || $("publish_originAddress").val() === this.addrInputConst ) {
            //     $("#from").append('<dd id="originWrong" class="wrong"><p>请输入具体地址</p></dd>');
            //     locvalid = false;
            // }
            // if (!$("publish_destAddress").val() || $("publish_destAddress").val() === this.addrInputConst ) {
            //     $("#to").append('<dd id="destWrong" class="wrong"><p>请输入具体地址</p></dd>');
            //     locvalid = false;
            // }
            if (!locvalid) {
                return false;
            }
            return this.inRange.from && this.inRange.to;
        } else if (page === 2) {
            var requests = this.toSubmit.requests;
            counter = 0;
            if (this.toSubmit.numberRequests === 0) {
                return false;
            }

            for (var request = 0; request < requests.length; request++) {
                $("#timewrong").remove();
                if (!requests[request])
                    continue;
                counter++;
                if (requests[request].round) {
                    if (Utilities.isEmpty(requests[request].returnDate)) {
                        if ($("#timewrong").length === 0) {
                            $("#publish_time_add").append("<div class='wrong' id='timewrong'><p>请填写回程日期</p></div>");
                        }
                        return false;
                    }
                    if (Utilities.isEmpty(requests[request].returnTime) || requests[request].returnTime === -1) {
                        if ($("#timewrong").length === 0) {
                            $("#publish_time_add").append("<div class='wrong' id='timewrong'><p>请选择回程时间</p></div>");
                        }
                        return false;
                    }
                }
                if (Utilities.isEmpty(requests[request].departDate)) {
                    if ($("#timewrong").length === 0) {
                        $("#publish_time_add").append("<div class='wrong' id='timewrong'><p>请填写出发日期</p></div>");
                    }
                    return false;
                }
                if (Utilities.isEmpty(requests[request].departTime) || requests[request].departTime === -1) {
                    if ($("#timewrong").length === 0) {
                        $("#publish_time_add").append("<div class='wrong' id='timewrong'><p>请选择出发时间</p></div>");
                    }
                    return false;
                }

            }
            if (counter > 0)
                return true;
        } else {
            var seatNum = Utilities.toInt(this.$seats.val());
            if ( seatNum < 1 || isNaN(seatNum)) {
                return false;
            }
            if (this.toSubmit.type === Constants.messageType.help ) {
                var price;
                if (this.toSubmit.conditionalPrice) {
                    for (var i = 0; i < this.toSubmit.priceListEntries; i++) {
                        price = Utilities.toInt(this.toSubmit.priceList[i]);
                        if (!price || isNaN(price) || price < 1 || price > 999 ) {
                            if ($("#publish_priceError").length === 0) { 
                                this.$priceListContainer.append('<div id="publish_priceError" class="publish_price_notice" style="float:left">所有价格必须在1-999之间</div>');
                            }
                            return false;
                        }
                    }
                } else {
                    price = Utilities.toInt($("#seats_single").val());
                    if (!price || isNaN(price) || price < 1 || price > 999 ) {
                        if ($("#publish_priceError").length === 0) { 
                            this.$priceListContainer.append('<div id="publish_priceError" class="publish_price_notice" style="float:left">所有价格必须在1-999之间</div>');
                        }
                        return false;
                    }
                }
            }
            return true;
        }
    },

    toMessage: function () {
        //validate before finish
        var messages = new Messages (), i;
        if (this.toSubmit.type === Constants.messageType.ask) {
            this.toSubmit.priceList = [];
        } else {
            if (!this.toSubmit.conditionalPrice) {
                this.toSubmit.priceList[0] = Utilities.toInt($("#seats_single").val());
            }
        }
        for (var r = 0; r < this.toSubmit.requests.length; r++) {
            if (this.toSubmit.requests[r]) {
                var t = new Transaction ();
                var m = new Message ();
                m.set("type", this.toSubmit.type === Constants.messageType.ask ? Constants.messageType.ask : Constants.messageType.help);
                m.set("ownerId", this.user.get("userId"));
                m.set("departure_location", this.toSubmit.origin);
                m.set("arrival_location", this.toSubmit.dest);
                m.set("note", this.toSubmit.description);
                m.set("departure_time", this.toSubmit.requests[r].departDate);
                m.set("departure_timeSlot", this.toSubmit.requests[r].departTime);
                m.set("departure_location", this.toSubmit.origin);
                m.set("departure_seatsNumber", this.toSubmit.departureSeats);
                m.set("departure_priceList", this.toSubmit.priceList);
                if (this.toSubmit.requests[r].round) {
                    m.set("isRoundTrip", true);
                    m.set("arrival_time", this.toSubmit.requests[r].returnDate);
                    m.set("arrival_timeSlot", this.toSubmit.requests[r].returnTime);
                    m.set("arrival_location", this.toSubmit.dest);
                    m.set("arrival_seatsNumber", this.toSubmit.departureSeats);
                    m.set("arrival_priceList", this.toSubmit.priceList);
                }
                messages.add(m);
            }
        }
        return messages;
    },
    close: function () {
        if (!this.isClosed) {
            this.map.close();
            this.map = null;
            this.unbindStepEvents(this.stepIndex);
            this.closeLocationDropDown();
            this.domContainer.empty();
            this.isClosed = true;
            this.toSubmit = {
                "type": Constants.messageType.ask,
                "numberRequests": 0,
                "requests": [],
                "description": "",
                "priceList": [0],
                "departureSeats": 1,
                "returnSeats": 1,
                "priceListEntries": 1,
                "conditionalPrice": false
            };
        }
    }
});

/*dedicated view for Message post, deep linking will not be used for Message post states, this view holds the session
 * data*/
var MessagePublishView = MessagePostView.extend({
    initialize: function (id, message) {

        _.bindAll(this, 'render', 'renderFirstPage', 'renderSecondPage', 'renderThirdPage', 'finish', 'close');
        app.viewRegistration.register("MessagePost", this, true);
        MessagePostView.prototype.initialize({
            "method": "post"
        });
        this.renderFirstPage();

    },
    render: function (step) {
        if (step === 1) {
            this.renderFirstPage();
        } else if (step === 2) {
            this.renderSecondPage();
        } else if (step === 3) {
            this.renderThirdPage();
        }

    },
    renderFirstPage: function () {
        var that = this;
        $("#publish_finish").off();
        MessagePostView.prototype.render(1);
        $('#publish_nextStep').off();
        $('#publish_nextStep').on('click', function () {
            $("#publish_originAddr").trigger("blur");
            $("#publish_destAddr").trigger("blur");
            if (MessagePostView.prototype.validate(1)) {
                app.navigate("post/step2");
                that.renderSecondPage();
            } else {

            }
        });
    },
    renderSecondPage: function () {

        var that = this;
        MessagePostView.prototype.render(2);
        $('#publish_nextStep').off();
        $("#publish_finish").off();
        $('#publish_nextStep').on('click', function () {
            if (MessagePostView.prototype.validate(2)) {
                app.navigate("post/step3");
                that.renderThirdPage(3);
            }
        });
        $('#publish_back').on('click', function () {
            app.navigate("post/step1");
            that.renderFirstPage(1);
        });
    },
    renderThirdPage: function () {
        var that = this;
        MessagePostView.prototype.render(3);
        $('#publish_nextStep').off();
        $('#publish_back').off();
        $('#publish_back').on('click', function () {
            app.navigate("post/step2");
            that.renderSecondPage();
        });
        $("#publish_finish").on("click", function (e) {
            if (MessagePostView.prototype.validate(3)) {
                that.finish();
            }
        });
    },
    finish: function () {
        var messages = this.toMessage();
        var length = messages.length;
        app.messageManager.postMessage(messages, {
            "success": this.success,
            "error": this.error
        });
    },
    success: function (message) {
        app.navigate("message/" + message.id, true);
    },
    error: function () {

    },
    close: function () {
        $('#publish_nextStep').off();
        $('#publish_back').off();
        $("#publish_finish").off();

        MessagePostView.prototype.close();
    }
});

var MessageEditView = MessagePostView.extend({

    el: "",
    initialize: function (messageIdObj) {
        _.bindAll(this, 'render', 'renderFirstPage', 'renderSecondPage', 'renderThirdPage', 'reverseMessage', 'close');
        app.viewRegistration.register("MessageEdit", this, true);
        var self = this;
        app.messageManager.fetchMessage(messageIdObj.messageId, {
            success: function (message) {
                self.message = message;
                self.reverseMessage(self.message);
                MessagePostView.prototype.initialize({
                    "method": "message/" + self.message.get("messageId") + "/edit"
                });
                self.renderFirstPage();
            },
            error: function () {
                Info.displayErrorPage("content", "消息读取失败, 请刷新页面");
            }
        });

    },
    render: function (step) {
        if (step === 1) {
            this.renderFirstPage();
        } else if (step === 2) {
            this.renderSecondPage();
        } else if (step === 3) {
            this.renderThirdPage();
        }

    },
    renderFirstPage: function () {
        var that = this;
        MessagePostView.prototype.render(1);
        $('#publish_nextStep').off();
        $('#publish_nextStep').on('click', function () {
            if (MessagePostView.prototype.validate(1)) {
                app.navigate("message/" + that.message.id + "/edit/step2");
                that.renderSecondPage();
            }
        });
        $('#publish_type>div').off();
    },
    renderSecondPage: function () {
        var that = this;
        MessagePostView.prototype.render(2);
        $('#publish_nextStep').off();
        $('#publish_nextStep').on('click', function () {
            if (MessagePostView.prototype.validate(2)) {
                app.navigate("message/" + that.message.id + "/edit/step3");
                that.renderThirdPage(3);
            }
        });
        $('#publish_back').on('click', function () {
            app.navigate("message/" + that.message.id + "/edit/step1");
            that.renderFirstPage(1);
        });
        $("#publish_time_add").hide();
        $('#publish_delete').remove();
    },
    renderThirdPage: function () {
        var that = this;
        MessagePostView.prototype.render(3);
        $('#publish_nextStep').off();
        $('#publish_back').off();
        $('#publish_back').on('click', function () {
            app.navigate("message/" + that.message.id + "/edit/step1");
            that.renderSecondPage();
        });
        $("#publish_finish").on("click", function (e) {
            that.finish();
        });
    },

    finish: function () {
        var messages = this.toMessage();

        var length = messages.length;
        for (var r = 0; r < length; r++) {
            messages.at(r).set("messageId", this.message.get("messageId"));
            app.messageManager.updateMessage(messages.at(r), {
                "success": this.success,
                "error": this.error
            });
        }
    },
    success: function (message) {
        Info.displayNotice("信息更新成功", function(){
            app.navigate("message/" + message.id, true);
        });
    },  
    error: function () {
        Info.displayNotice("信息更新失败，请稍后重试");
    },
    reverseMessage: function (message) {
        var toSubmit = MessagePostView.prototype.toSubmit;
        toSubmit.origin = message.get("departure_location");
        toSubmit.dest = message.get("arrival_location");
        toSubmit.numberRequests = 1;
        toSubmit.description = message.get("note");
        toSubmit.priceList = message.get("departure_priceList");
        toSubmit.departureSeats = message.get("departure_seatsNumber");
        toSubmit.returnSeats = message.get("arrival_seatsNumber");
        toSubmit.type = message.get("type");
        toSubmit.requests[0] = {};
        toSubmit.requests[0].departDate = message.get("departure_time");
        toSubmit.requests[0].returnDate = message.get("arrival_time");
        toSubmit.requests[0].round = message.get("isRoundTrip");
        toSubmit.requests[0].type = message.get("type");
        toSubmit.requests[0].departTime = message.get("departure_timeSlot");
        toSubmit.requests[0].returnTime = message.get("arrival_timeSlot");
        var entryNum = 0;
        var index = 0;
        for (var p = 0; p < toSubmit.priceList.length; p++) {
            entryNum += (toSubmit.priceList[p] > 0) ? 1 : 0;
            index = p;
        }
        toSubmit.priceListEntries = entryNum;
        toSubmit.conditionalPrice = entryNum > 1 || p > 0;

    },
    close: function () {
        MessagePostView.prototype.close();
    }
});

var SearchResultView = MultiPageView.extend({
    
    initialize: function (messageList, isSearchResult) {
        _.bindAll(this, 'render', 'transferURL', 'close');
        this.messages = messageList;
        this.isSearchResult = isSearchResult;
        this.entryTemplate = _.template(tpl.get('SimpleMessage'));
        this.pageNumberClass = "searchResultPageNumber";
        this.pageNumberId = "searchResultPageNumber";
        this.entryEvent = this.transferURL;
        this.pageNavigator = "pageNavigator";
        this.pageNavigatorClass = "mainPage-searchResult-multiPage-pageNum";
        this.user = app.sessionManager.getSessionUser();
        if (isSearchResult) {
            this.entryHeight = 95;
            this.pageEntryNumber = 10;
            this.entryClass = "searchResultBoxContainer";
            this.entryContainer = "searchResultDisplayPanel";
            this.$domContainer = $("#searchResultDisplayPanel");
        } else {
            this.entryHeight = 100;
            this.pageEntryNumber = 3;
            this.entryClass = "frontBoxContainer";
            this.entryContainer = "quickStart_resultPanel";
            this.$domContainer = $("#quickStart_resultPanel");
            this.minHeight = 300;
        }

        MultiPageView.prototype.render.call(this);

    },
    transferURL: function (messageId) {
        app.navigate("message/" + messageId, true);
    },
    
    close: function () {
        this.$domContainer.empty();
    }
});

var UserSearchResultView = MultiPageView.extend({
    initialize: function (params) {

        _.bindAll(this, "render", "entryEvent", "bindEvents", "updateLocation", "close");
        app.viewRegistration.register("findUser", this, true);
        this.user = app.sessionManager.getSessionUser();
        this.entryTemplate = _.template(tpl.get('personalSocialCard'));
        this.pageNumberClass = "searchResultPageNumber";
        this.pageNumberId = "searchResultPageNumber";
        this.pageNavigator = "pageNavigator";
        this.entryHeight = 117;
        this.pageEntryNumber = 18;
        this.minHeight = 648;
        this.entryHeight = 105;
        this.entryClass = "social_card";
        this.entryContainer = "searchResultDisplayPanel";
        this.$domContainer = $("#searchResultDisplayPanel");
        this.startIndex = 0;
        if (params && params.userSearchRepresentation) {
            this.sr = params.userSearchRepresentation;
            app.userManager.searchUsers(this.sr, {
                "success": this.render,
                "error": undefined
            });
        } else {
            this.sr = new UserSearchRepresentation ();
            this.render(new Users ());
        }
    },
    render: function (userList) {
        this.messages = userList;
        $("#content").append(_.template(tpl.get("userSearch")));
        $("#searchResultDisplayPanel").css("width", 938);
        MultiPageView.prototype.render.call(this);
        $(".social_gender_0").html("♂");
        $(".social_gender_1").html("♀");
        this.bindEvents();
    },
    entryEvent: function (userId) {
        app.navigate("personal/" + userId, true);
    },
    bindEvents: function () {
        var that = this;
        $("#searchLocationInput_from").on('click', function (e) {
            that.locationPickerView = new LocationPickerView (that.sr.get("location"), that, "searchLocationInput_from");
        });
        $("#searchTypeContainer>div").on("click", function (e) {
            $("#searchTypeContainer>.selected").removeClass("selected").addClass("notSelected");
            $("#" + e.target.id).removeClass("notSelected").addClass("selected");
            if (e.target.id === "male") {
                that.sr.set("gender", Constants.gender.male);
            } else if (e.target.id === "female") {
                that.sr.set("gender", Constants.gender.female);
            } else {
                that.sr.set("gender", Constants.gender.both);
            }
        });
        $("#nameInput").on("keypress", function (e) {
            if (e.which === 13) {
                that.sr.set("name", $("#nameInput").val());
                app.navigate("finduser/" + that.sr.toString());
                app.userManager.searchUsers(that.sr, {
                    "success": that.render,
                    "error": undefined
                });
            }
        });
        $("#searchResultButton").on("click", function () {
            that.sr.set("name", $("#nameInput").val());
            app.navigate("finduser/" + that.sr.toString());
            app.userManager.searchUsers(that.sr, {
                "success": that.render,
                "error": undefined
            });
        });
    },
    updateLocation: function () {
        var custTemp;
        $("#searchLocationInput_from").val(this.searchRepresentation.get("location").get("city"));
        custTemp = this.searchRepresentation.get("departureLocation").get("point");
        if (custTemp !== "undetermined") {
            $("#customizeLocationInput_from").val(custTemp);
        }
    },
    close: function () {
        if (!this.isClosed) {
            $("#searchTypeContainer>div").off();
            $("#searchResultButton").off();
            $("#nameInput").off();
            MultiPageView.prototype.close.call(this);
            $("#content").empty();
            this.isClosed = true;
        }
    }
});

var FrontPageView = Backbone.View.extend({

    el: '#content',
    displayIndex: 0,
    initialize: function () {
        _.bindAll(this, 'getRecents', 'render', 'bindEvents', 'bindRecentsEvents', 'renderRecents', 'updateLocation', 'scroll', 'acceptDefaultLocation', 'closeLocationDropDown', 'close');
        app.viewRegistration.register("frontPage", this, true);
        this.isClosed = false;
        this.temp = {};
        this.bottomRecentId = 0;
        this.template = _.template(tpl.get('front'));
        this.messageTemplate = _.template(tpl.get('SimpleMessage'));

        this.user = app.sessionManager.getSessionUser();

        this.searchRepresentation = app.storage.getSearchRepresentationCache();
        this.departLocation = new UserLocation();
        this.arrivalLocation = new UserLocation();
        this.locationDirection = Constants.LocationDirection.from;
        this.messages = app.storage.getRecentMessages();
        if (this.messages) {
            this.renderRecents(this.messages);
        } 
        this.render();
        //fire async API call befire entering the time consuming events binding stage
        this.getRecents();
        //app.sessionManager.fetchSession();
        this.bindEvents();

    },

    getRecents: function () {
        //passing renderRecents as the callback to be executed upon successful fetch
        this.$resultPanel.empty();
        app.messageManager.fetchRecents({
            "success": this.renderRecents,
            "error": this.renderError
        });
    },

    renderRecents: function (recents) {
        if (recents.length === 0) {
            this.renderError();
            return;
        }
        this.displayMessages = recents;
        var buf = [];
        while (this.displayIndex < 3 && this.displayIndex < recents.length) {
            buf.push(this.messageTemplate(this.displayMessages.at(this.displayIndex++)._toJSON()));
        }
        this.displayIndex = this.displayIndex % recents.length;
        this.$resultPanel.append(buf.join(""));
        this.bindRecentsEvents();
        this.rollInterval = setInterval(this.scroll, 5000);

    },

    render: function () {
        this.$el.append(this.template);
        this.$resultPanel = $("#frontPage-resultPanel");
        $("#frontPage-exp>dt").hide();
        $("#exp1").show();
        $( '.cycle-slideshow' ).cycle({"slideCount":7, "log":false});
    },

    renderError: function () {
        this.$resultPanel = this.$resultPanel || $("#frontPage-resultPanel");
        this.$resultPanel.empty().append("<div class = 'noMessage'>暂无消息</div>");
    },

    bindEvents: function () {
        var self = this;
        this.$from = $("#from").children("input").on("focus", function (e) {
            self.closeLocationDropDown();
            self.locationDirection = Constants.LocationDirection.from;
            self.locationDropDownView = new LocationDropDownView($("#from"), self);
            e.stopPropagation();
        });
        this.$to = $("#to").children("input").on("focus", function (e) {
            self.closeLocationDropDown();
            self.locationDirection = Constants.LocationDirection.to;
            self.locationDropDownView = new LocationDropDownView($("#to"), self);
            e.stopPropagation();
        });
        //stop events from propograting to the body listen in eventClearService
        this.$from = $("#from").children("input").on("click", function (e) {
            e.stopPropagation();
        });
        this.$to = $("#to").children("input").on("click", function (e) {
            e.stopPropagation();
        });
        
        this.$from.on("blur", function(){
            if ($(this).val() === '')
                $(this).val(self.temp.from);
        });
        this.$to.on("blur", function(){
            if ($(this).val() === '')
                $(this).val(self.temp.to);
        });
        this.$date = $(".date>input").on("focus", function (e) {
            $(this).val("");
        });
        this.$date.datepicker({
            buttonImageOnly: true,
            buttonImage: "calendar.gif",
            buttonText: "Calendar",
            minDate: new Date (),
            onSelect: function (text, inst) {
                var d = new Date ();
                d.setDate(inst.selectedDay);
                d.setMonth(inst.selectedMonth);
                d.setYear(inst.selectedYear);
                self.searchRepresentation.set("departureDate", d);
                self.$date.val(Utilities.getDateString(d));
            }
        });
        $("#btn_search").on("click", function () {
            if (self.$from.val() && self.$to.val() && self.$date.val() ) {
                self.departLocation.set("city", self.$from.val());
                self.arrivalLocation.set("city", self.$to.val());
                self.searchRepresentation.set("departureMatch_Id", self.departLocation.get("defaultId"));
                self.searchRepresentation.set("arrivalMatch_Id", self.arrivalLocation.get("defaultId"));
                app.storage.setSearchRepresentationCache(self.searchRepresentation);
                app.navigate("main/" + self.searchRepresentation.toString(), {'trigger': true});
            }
        });
        this.$users = $("#frontPage-userButtons>.user").on("click", function (e) {
            if (!$(this).hasClass("active")) {
                $("#frontPage-exp>dt").hide();
                $(".active").removeClass("active").addClass("f-gray");
                $(this).removeClass("f-gray").addClass("active");
                $("#exp"+Utilities.getId(e.delegateTarget.id)).show();
            }
        });
        $("#front_howItWorks").on("click", function (e) {
            e.preventDefault();
            app.navigate("howitworks", true);
        });
        //this.bindRecentsEvents();
    },

    bindRecentsEvents: function () {
        var self = this;
        this.$messages = $("#frontPage-resultPanel").on("click", ".message_simple", function (e) {
            app.navigate("message/" + Utilities.getId(this.id), true);
        });
    },

    updateLocation: function (id) {
        this.getRecents();
    },
    scroll: function () {
        var buf = this.messageTemplate(this.displayMessages.at(this.displayIndex++)._toJSON()), self = this;
        var $resp = this.$resultPanel.prepend(buf);
        var $respdiv = $resp.children("div").first().css("margin-top",-100);
        $respdiv.first().animate({"margin-top":0}, 600);
        if ($resp.children("div").length > 4) {
           $resp.children("div").last().remove();
        }
        if (this.displayIndex === this.displayMessages.length) {
            this.displayIndex = 0;
            app.messageManager.fetchRecents({
                "success": function(recents){
                    self.displayMessages = recents;
                },
                "error": this.renderError
            });
        }
    },

    acceptDefaultLocation: function(defaultLocation){
        if (this.locationDirection === Constants.LocationDirection.from){
            this.departLocation = defaultLocation;
            this.$from.val(this.departLocation.toUiString());
        }
        else if (this.locationDirection === Constants.LocationDirection.to){
            this.arrivalLocation = defaultLocation;
            this.$to.val(this.arrivalLocation.toUiString());
        }
    },

    closeLocationDropDown: function(){
        if (typeof this.locationDropDownView !== 'undefined' && this.locationDropDownView !== null){
            this.locationDropDownView.close();
        }
    },

    close: function () {
        debugger;
        if (!this.isClosed) {
            if (this.$messages) {
                this.$messages.off();
            }
            $("#btn_search").off();
            this.$from.off();
            this.$to.off();
            this.$users.off();
            this.$date.off();
            this.unbind();

            this.closeLocationDropDown();
            $( '.cycle-slideshow' ).cycle('destroy');
            this.$el.empty();
            this.isClosed = true;
            clearInterval(this.rollInterval);
        }
    }
});

var PRICE_MIN = 0, PRICE_MAX = 200;

var MainPageView = Backbone.View.extend({
    el: '#content',

    filter: {
        "isRoundTrip": false,
        "time1": "all",
        "time2": "all",
        "type": Constants.messageType.both,
        "priceMin": PRICE_MIN,
        "priceMax": PRICE_MAX
    },

    initialize: function (params) {
        _.bindAll(this, 'render', 'renderSearchResults', 'messageSearch', 'onClickTime', 'onClickType', 'submitSearch', 'refresh', 'bindEvents', 'close');
        app.viewRegistration.register("mainPage", this, true);
        this.isClosed = false;
        this.rendered = false;
        this.user = app.sessionManager.getSessionUser();
        //define the template
        this.template = _.template(tpl.get('main'));
        this.searchRepresentation = new SearchRepresentation ();
        this.currentPage = 0;
        if (params) {
            try {
                this.searchRepresentation.castFromString(params.searchKey);
            } catch (e) {
                app.navigate("/main", true);
            }
            app.storage.setSearchRepresentationCache(this.searchRepresentation);
        } else if (app.sessionManager.hasSession()) {
            this.searchRepresentation = this.user.get('searchRepresentation');
        } else {
            this.searchRepresentation = app.storage.getSearchRepresentationCache();
        }
        //injecting the template
        this.$el.append(this.template);
        //TODO force target type to be all
        this.searchRepresentation.set('targetType', Constants.messageType.both);
        app.locationService.getDefaultLocations(this.render, this);

        //after data intialiazation, start render curreny view
    },

    messageSearch: function () {
        app.messageManager.searchMessage(this.searchRepresentation, {
            "success": this.renderSearchResults,
            "error": this.renderError
        });
    },
    closeLocationDropDown: function(){
        if (typeof this.locationDropDownView !== 'undefined' && this.locationDropDownView !== null){
            this.locationDropDownView.close();
        }
    },
    acceptDefaultLocation: function(defaultLocation){
        if (this.locationDirection === Constants.LocationDirection.from){
            this.origin = defaultLocation;
            this.$locationFrom.val(this.origin.toUiString());
        }
        else if (this.locationDirection === Constants.LocationDirection.to){
            this.dest = defaultLocation;
            this.$locationTo.val(this.dest.toUiString());
        }
        if (this.map) {
            this.map.getDirection(this.origin, this.dest);
        }
        if (this.$locationFrom.val() && this.$locationTo.val()) {
            this.submitSearch();
        }
    },

    render: function () {
        this.$locationFrom = $("#searchLocationInput_from");
        this.$locationTo = $("#searchLocationInput_to");
        this.$type = $("#typeSelections");
        this.origin = (this.searchRepresentation.get("departureMatch_Id")>-1 ) ? this.defaultLocations.where({"defaultId":this.searchRepresentation.get("departureMatch_Id")})[0] : this.defaultLocations.at(0);
        this.dest = (this.searchRepresentation.get("arrivalMatch_Id")>-1 ) ? this.defaultLocations.where({"defaultId":this.searchRepresentation.get("arrivalMatch_Id")})[0] : this.defaultLocations.at(1);

        this.$locationFrom.val(this.origin.toUiString());
        this.$locationTo.val(this.dest.toUiString());
        var me = this, mapParams = {
            div: "mainMap",
            class: "mainPage-map",
            originLocation: this.origin,
            destLocation: this.dest,
            clickable: false
        };



        this.map = app.storage.getViewCache("MapView", mapParams);
        this.$dateDepart = $("#searchDateInput_depart").datepicker({
            buttonImageOnly: true,
            buttonImage: "calendar.gif",
            buttonText: "Calendar",
            minDate: new Date (),
            onSelect: function (text, inst) {
                var d = new Date ();
                d.setDate(inst.selectedDay);
                d.setMonth(inst.selectedMonth);
                d.setYear(inst.selectedYear);
                me.searchRepresentation.set("departureDate", d);
                $(this).val(Utilities.getDateString(me.searchRepresentation.get("departureDate")));
                me.submitSearch();
            }
        });
        this.$dateReturn = $("#searchDateInput_return").datepicker({
            buttonImageOnly: true,
            buttonImage: "calendar.gif",
            buttonText: "Calendar",
            minDate: new Date (),
            onSelect: function (text, inst) {
                var d = new Date ();
                d.setDate(inst.selectedDay);
                d.setMonth(inst.selectedMonth);
                d.setYear(inst.selectedYear);
                me.searchRepresentation.set("arrivalDate", d);
                $(this).val(Utilities.getDateString(me.searchRepresentation.get("arrivalDate")));
                me.submitSearch();
            }
        });
        this.$swap = $("#swap").on("click", function() {
            me.map.getDirection(me.dest, me.origin);
            var temp;
            temp = me.origin;
            me.origin = me.dest;
            me.dest = temp;
            me.$locationFrom.val(me.origin.toUiString());
            me.$locationTo.val(me.dest.toUiString());
            me.submitSearch();
        });
        var dd = this.searchRepresentation.get("departureDate"), now = new Date();
        if (dd.getTime() < now.getTime()) {
            this.searchRepresentation.set("departureDate", now);
        }
        this.$dateDepart.val(Utilities.getDateString(this.searchRepresentation.get("departureDate")));
        me.filter.isRoundTrip = me.searchRepresentation.get("isRoundTrip");
        var $stc = $("#searchTypeContainer");
        $stc.children(".active").removeClass("active");
        this.$spans = $stc.children("span");
        if (!me.filter.isRoundTrip) {
            this.$dateReturn.prop("disabled", true).parent().addClass("date-return-disabled");
            this.$spans.first().addClass("active");
        } else {
            dd = this.searchRepresentation.get("arrivalDate");
            if (dd.getTime() < now.getTime()) {
                this.searchRepresentation.set("arrivalDate", now);
            }
            this.$dateReturn.val(Utilities.getDateString(this.searchRepresentation.get("arrivalDate")));
            this.$spans.last().addClass("active");
        }
        this.$spans.on("click", function(e){
            $stc.children(".active").removeClass("active");
            $(e.target).addClass("active");
            if ($(e.target).attr("data-id") == "roundtrip") {
                me.filter.isRoundTrip = true;
                me.$dateReturn.removeAttr("disabled");
                me.$dateReturn.parent().removeClass("date-return-disabled");
            } else {
                me.filter.isRoundTrip = false;
                me.$dateReturn.prop("disabled", true);
                me.$dateReturn.parent().addClass("date-return-disabled");
            }
            me.searchRepresentation.set('isRoundTrip', me.filter.isRoundTrip);
            me.submitSearch();
        });
        this.$search = $("#search").on("click", function (e) {
            me.submitSearch();
        });
        this.messageSearch();
        this.bindEvents();
        this.rendered = true;
    },

    renderSearchResults: function (searchResults) {
        //prevent memory leaks
        $("#searchResultDisplayPanel").empty();
        if (this.searchResultView) {
            this.searchResultView.close();
        }
        $("#originText").html(this.$locationFrom.val());
        $("#destText").html(this.$locationTo.val());
        $("#numberText").html(searchResults.length);
        this.allMessages = searchResults;
        this.filteredMessages = this.filterMessage(this.allMessages);
        this.searchResultView = new SearchResultView (this.filteredMessages, true);
    },

    renderError: function () {
        this.$resultp = this.$resultp || $("#searchResultDisplayPanel");
        this.$resultp.empty().append("<div class = 'noMessage'>暂无消息</div>");
    },

    onClickTime: function (e, parentId) {
        var me = $('#' + e.id);
        $("#" + parentId + ">.selected").removeClass('selected').addClass('notSelected');
        me.removeClass('notSelected').addClass('selected');
        var time = e.target.getAttribute("data-id");
        this.filter.time1 = time;
    },

    onClickType: function (e) {
        this.$type.children(".active").removeClass('active');
        $(e.target).addClass('active');
        if (e.target.getAttribute("data-id") === "passenger"){
            this.filter.type = Constants.messageType.ask;
        } else if (e.target.getAttribute("data-id") === "driver") {
            this.filter.type = Constants.messageType.help;
        } else {
            this.filter.type = Constants.messageType.both;
        }
        this.refresh();
    },

    submitSearch: function () {
        if (!(this.$dateDepart.val() && this.$locationFrom.val() && this.$locationTo.val())) {
            return;
        } else if (!this.$dateReturn.val() && this.filter.isRoundTrip) {
            return;
        }
        app.navigate("main/" + this.searchRepresentation.toString(), {'trigger': false});
        this.searchRepresentation.set("departureMatch_Id", this.origin.get("defaultId"));
        this.searchRepresentation.set("arrivalMatch_Id", this.dest.get("defaultId"));
        $("#searchResultDisplayPanel").empty().append('<div class="messageDetail-middle-autoMatch-loading">正在为您寻找信息</div>');
        app.messageManager.searchMessage(this.searchRepresentation, {
            "success": this.renderSearchResults,
            "error": this.renderError
        });
        app.storage.setSearchRepresentationCache(this.searchRepresentation);
    },

    refresh: function () {
        if (this.searchResultView) {
            this.searchResultView.close();
        }
        this.filteredMessages = this.filterMessage(this.allMessages);
        this.searchResultView = new SearchResultView (this.filteredMessages, true);

    },

    filterMessage: function (messages) {
        var filtered = new Messages ();
        var l = messages ? messages.length : 0;
        for (var i = 0; i < l; i++) {
            var m = messages.at(i);
            // var dt = m.get("departure_timeSlot");
            // var rt = m.get("arrival_timeSlot");
            // if (this.searchRepresentation.get("departureLocation").isEquivalentTo(m.get("departure_location"))) {
            //     if (this.filterTime(this.filter.time1, dt)) {
            //         filtered.add(m);
            //     }
            //     if (this.filter.isRoundTrip && this.filterTime(this.filter.time2, rt)) {
            //         filtered.add(m);
            //     }
            // } else if (m.get("isRoundTrip") && this.searchRepresentation.get("departureLocation").isEquivalentTo(m.get("arrival_location"))) {
            //     if (this.filterTime(this.filter.time2, dt)) {
            //         filtered.add(m);
            //     }
            //     if (this.filter.isRoundTrip && this.filterTime(this.filter.time1, rt)) {
            //         filtered.add(m);
            //     }

            // }
            if (this.filter.type === Constants.messageType.both || this.filter.type === m.get("type")) {
                filtered.add(m);
            }
        }
        return filtered;
    },

    filterTime: function (time, timeslot) {
        if (time === 'all') {
            return true;
        } else if (time === "morning" && timeslot < Utilities.getDayTimeSlot_afternoonStart()) {
            return true;
        } else if (time === "afternoon" && (timeslot >= Utilities.getDayTimeSlot_afternoonStart() && timeslot < Utilities.getDayTimeSlot_nightStart())) {
            return true;
        } else if (time === "night" && (timeslot >= Utilities.getDayTimeSlot_nightStart())) {
            return true;
        } else {
            return false;
        }
    },

    updateLocation: function (id) {
        // var custTemp;
        // if (id === "searchLocationInput_from") {
        //     this.$locationFrom.val(this.searchRepresentation.get("departureLocation").get("city"));
        //     cust = this.searchRepresentation.get("departureLocation").get("point");
        //     if (cust !== "undetermined") {
        //         $("#customizeLocationInput_from").val(cust);
        //     }
        // } else {
        //     this.$locationTo.val(this.searchRepresentation.get("arrivalLocation").get("city"));
        //     cust = this.searchRepresentation.get("arrivalLocation").get("point");
        //     if (cust !== "undetermined") {
        //         $("#customizeLocationInput_to").val(cust);
        //     }
        // }
    },

    bindEvents: function () {
        var self = this;
        this.$locationFrom.on('focus', function (e) {
            self.closeLocationDropDown();
            self.locationDirection = Constants.LocationDirection.from;
            self.closeLocationDropDown();
            self.locationDirection = Constants.LocationDirection.from;
            self.locationDropDownView = new LocationDropDownView($("#from"), self);
        });

        this.$locationTo.on('focus', function (e) {
            self.closeLocationDropDown();
            self.locationDirection = Constants.LocationDirection.to;
            self.closeLocationDropDown();
            self.locationDirection = Constants.LocationDirection.to;
            self.locationDropDownView = new LocationDropDownView($("#to"), self);
        });

        //do not remove this, must have to avoid e propagating to body
        this.$locationFrom.on('click', function (e) {
            e.stopPropagation();
        });
        this.$locationTo.on('click', function (e) {
            e.stopPropagation();
        });

        // this.$locationFrom.on('blur', function (e) {
        //     if ($(this).val() && self.$locationTo.val() ) {
        //         self.submitSearch();
        //     }
        // });

        // this.$locationTo.on('blur', function (e) {
        //     if ($(this).val() && self.$locationTo.val() ) {
        //         self.submitSearch();
        //     }
        // });

        // $("#timeSelections1>.button").on('click', function (e) {
        //     self.onClickTime(e, "timeSelections1");
        // });

        // $("#timeSelections2>.button").on('click', function (e) {
        //     self.onClickTime(e, "timeSelections2");
        // });

        this.$type.children("span").on('click', function (e) {
            self.onClickType(e);
        });

        $("#refreshButton").on('click', function (e) {
            self.refresh(e);
        });

        // this.$custFrom.on("blur", function (e) {
        //     self.originLocation.set("pointAddress", this.value);
        //     self.submitSearch();
        // });
        // this.$custTo.on("blur", function (e) {
        //     self.destLocation.set("pointAddress", this.value);
        //     self.submitSearch();
        // });

    },

    close: function () {
        if (!this.isClosed) {
            //removing all event handlers
            if (this.rendered) {
                if (this.map) {
                    this.map.close();
                }
                this.$type.children("span").off();
                this.$locationFrom.off();
                this.$locationTo.off();
                this.$swap.off();
                this.closeLocationDropDown();
                if (this.searchResultView) {
                    this.searchResultView.close();
                }
            }

            //get ride of the view
            this.unbind();
            this.$el.empty();

            this.isClosed = true;
        }
    }
});

var TransactionHistoryView = MultiPageView.extend({

    initialize: function (messageList) {
        _.bindAll(this, 'render', 'openTransactionDetail', 'fetchMessageSuccess', 'fetchMessageError', 'close');
        this.messages = messageList;
        this.allMessages = messageList;
        this.entryTemplate = _.template(tpl.get('personalTransactionHistory'));
        this.pageNumberClass = "searchResultPageNumber";
        this.pageNumberId = "transactionPageNumber";
        this.entryEvent = this.openTransactionDetail;
        this.pageNavigator = "transactionHistoryNavigator";
        this.user = app.sessionManager.getSessionUser();
        this.entryHeight = 61;
        this.pageEntryNumber = 7;
        this.entryClass = "message_simple";
        this.entryContainer = "transactionHistoryContent";
        this.domContainer = $("#transactionHistoryContent");
        this.minHeight = 427;
        MultiPageView.prototype.render.call(this);
    },

    render: function (start) {

    },
    openTransactionDetail: function (messageId) {
        var currentTransaction = this.messages.get(messageId);
        app.messageManager.fetchMessage(currentTransaction.get("messageId"), {
            "success": this.fetchMessageSuccess,
            "error": this.fetchMessageError,
            "transaction": currentTransaction
        });

    },
    fetchMessageSuccess: function (message, transaction) {
        if (app.sessionManager.hasSession()) {
            this.transactionDetail = new TransactionDetailView (transaction.set("direction", 1), {
                "departure_seatsNumber": message.get("departure_seatsNumber") - message.get("departure_seatsBooked"),
                "arrival_seatsNumber": message.get("arrival_seatsBookedtsNumber") - message.get("arrival_seatsBooked"),
                "status": "r"
            });
        }
    },
    fetchMessageError: function () {

    },

    close: function () {
        this.domContainer.empty();
    }
}); 
var NotificationHistoryView = MultiPageView.extend({

    initialize: function (params) {
        _.bindAll(this, 'render', 'bindNotificationEvent', 'bindDelegateEvents', 'fetchNotificationError', 'close');
        this.baseTemplate = _.template(tpl.get('personalNotificationHistory'))
        $("#profilePage_content").append(this.baseTemplate());
        this.entryTemplate = _.template(tpl.get('personalNotificationEntry'));
        this.pageNumberClass = "searchResultPageNumber";
        this.pageNumberId = "notificationPageNumber";
        this.entryEvent = this.bindNotificationEvent;
        this.pageNavigator = "notificationHistoryNavigator";
        this.user = app.sessionManager.getSessionUser();
        this.pageEntryNumber = 7;
        this.entryClass = "notice_viewDetail";
        this.entryContainer = "personalNotificationContainer";
        this.domContainer = $("#personalNotificationContainer");
        app.sessionManager.fetchCurUserNotifications({
            "success": this.render,
            "error": this.fetchNotificationError 
        });
        this.selected = [];
        this.bindDelegateEvents();
        this.bindFilterEvents();
    },

    render: function (message) {
        this.messages = new Notifications();
        //only Pass message as parameter when it is called as a callback of fetch
        if (message) {
            this.messages.reset(message);
            this.allMessages = message;
        }
        //Render this.messages
        MultiPageView.prototype.render.call(this);
        this.unregisterFilterEvent();
        this.bindFilterEvents();

    },
    bindNotificationEvent: function (messageId) {
        var currentNotification = this.messages.get(messageId);
        var n_evt = currentNotification.get('notificationEvent');
        app.notificationManager.checkNotification(messageId);
        if (n_evt === Constants.notificationEvent.watched) {
            app.navigate("personal/" + currentNotification.get('initUserId'), true);
        } else if (n_evt < Constants.notificationEvent.watched) {
            app.navigate("message/" + messageId, true);
        }
    },
    bindDelegateEvents: function() {
        var that = this;
        $("#personalNotificationContainer").on("click", ".delete", function (e) {
            app.notificationManager.deleteNotification(Utilities.getId(e.target),{
                "success": that.deleteSuccess,
            });
        }).on("click", ".checkbox", function (e) {
            if ($(e.target).hasClass("checked")) {
                $(e.target).removeClass("checked");
            } else {
                $(e.target).addClass("checked");
            }
        });
        $("#selectAll").on("click", function (e) {
            e.preventDefault();
            var checkboxes = $("#personalNotificationContainer").find(".checkbox").addClass("checked");
        });
        $("#selectOpposite").on("click", function (e) {
            e.preventDefault();
            var checkboxes = $("#personalNotificationContainer").find(".checkbox");
            for ( var i = 0; i < checkboxes.length; i++ ) {
                if (checkboxes[i].hasClass("checked")) {
                    checkboxes[i].removeClass("checked");
                } else {
                    checkboxes[i].addClass("checked");
                }
            }
        });
        $("#markAsRead").on("click", function (e) {
            if (that.getCheckedNotificationIds && that.getCheckedNotificationIds.length) {
                app.notificationManager.checkNotification(that.getCheckedNotificationIds, {
                    "success":null,
                    "error":null
                });
            }
        });
        $("#deleteSelected").on("click", function (e) {
            if (that.getCheckedNotificationIds && that.getCheckedNotificationIds.length) {
                app.notificationManager.deleteNotification(that.getCheckedNotificationIds, {
                    "success":that.deleteSuccess,
                    "error":null
                });
            }
        });
    },
    bindFilterEvents: function () {
        var that = this;
        this.$all = $("#allNotificationFilter");
        this.$unread = $("#unreadNotificationFilter");
        this.$read = $("#readNotificationFilter");
        this.registerFilterEvent(this.$unread,
            function(n){n.get('state') === Constants.notificationState.unread},
            this, function(){$("#markAsRead").show();});
        this.registerFilterEvent(this.$read,
            function(n){n.get('state') === Constants.notificationState.read},
            this, function(){$("#markAsRead").hide();});
        this.registerFilterEvent(this.$all, null, this, function(){$("#markAsRead").show();});
        $("#notificationSetting").on("click", function (e) {
            e.preventDefault();
            app.navigate("personal/"+that.user.id+"/utility/trade", true);
        });
    },
    getCheckedNotificationIds: function () {
        var entries = $("#personalNotificationContainer").find(".checked");
        var len = entries.length, idList = [];
        for (var i = 0; i < len; i++) {
            idList.push(Utilities.toInt($(entries[i]).attr("data-id")));
        }
        return idList;
    },
    fetchNotificationError: function () {

    },
    deleteSuccess: function (idlist) {
        for (var i = 0; i < idlist.length; i ++) {
            $("#personal_notification_" + i).remove();        
        }
    },
    deleteFail: function () {

    },
    close: function () {
        if (!this.isClosed) {
            this.domContainer.empty();
            $("#profilePage_content").empty();
        }
    }
});

var MessageHistoryView = MultiPageView.extend({

    initialize: function (messageList, container) {
        _.bindAll(this, 'render', 'openDetailMessage', 'afterRender', 'bindEvents', 'close');
        this.allMessages = messageList;
        this.messages = messageList;
        this.entryTemplate = _.template(tpl.get('SimpleMessage'));
        this.pageNumberClass = "page-messageHistory";
        this.pageNumberId = "MessagePageNumber";
        this.entryEvent = this.openDetailMessage;
        this.pageNavigator = "MessageHistoryNavigator";
        this.user = app.sessionManager.getSessionUser();
        this.entryHeight = 95;
        this.pageEntryNumber = 8;
        this.entryClass = "message_simple";
        this.entryContainer = container;
        this.domContainer = $("#" + container);
        this.minHeight = 700;
        this.render();
    },
    render: function(){
        MultiPageView.prototype.render.call(this);

    },
    afterRender: function (start) {
        $(".message_simple").find(".personalInfo").remove();
        this.bindEvents();
    },
    openDetailMessage: function (messageId) {
        app.navigate("message/" + messageId, true);
    },
    bindEvents: function () {
        this.registerFilterEvent($("#allMessageFilter"), null, this);
        this.registerFilterEvent($("#activeMessageFilter"), 
            function(m){ return m.get("state") !== Constants.messageState.closed; }, this);
        this.registerFilterEvent($("#finishedMessageFilter"),
            function(m){ return m.get("state") === Constants.messageState.closed; }, this);
    },
    close: function () {
        this.domContainer.empty();
    }
}); 
var PersonalSocialView = MultiPageView.extend({
    el: "#profilePage_content",
    initialize: function (params) {
        this.isClosed = false;
        _.bindAll(this, 'render', 'entryEvent', 'error', 'close');
        this.user = app.sessionManager.getSessionUser();

        this.entryTemplate = _.template(tpl.get('personalSocialCard'));
        this.pageNumberClass = "searchResultPageNumber";
        this.pageNumberId = "searchResultPageNumber";
        this.entryEvent = this.entryEvent;
        this.pageNavigator = "pageNavigator";
        this.entryHeight = 88;
        this.pageEntryNumber = 15;
        this.entryClass = "name";
        this.entryContainer = "socialListContent";
        this.minHeight = 460;
        this.startIndex = 0;
        this.noMessage = "你还没有关注的人";
        this.wrapperTemplate = _.template(tpl.get('personalSocial'));
        this.$el.append(this.wrapperTemplate);

        this.curUserId = params.intendedUserId;
        this.sessionUser = app.sessionManager.getSessionUser();

        var that = this;
        app.userManager.fetchWatchedUsers(this.curUserId, {
            "success": this.render,
            "error": this.error 
        });
    },

    render: function (socialList) {
        var that = this;
        this.allMessages = socialList;
        this.messages = socialList;
        $("#social_following").html("关注（" + socialList.length + "）");
        this.sessionUser.set("socialList", socialList);
        MultiPageView.prototype.render.call(this);
        $("#socialListContent").on("click", ".cancel", function (e) {
            e.preventDefault();
            app.userManager.deWatchUser(Utilities.toInt(Utilities.getId(e.target.id)), {
                "success": function (user) {
                    $("#socialCard_" + Utilities.getId(e.target.id)).remove();
                    $("#social_following").html("关注（" + (socialList.length - 1) + "）");
                },
                "error": function () {
                    $(this).html("取消失败 重试");
                }
            });
        });
    },
    entryEvent: function (id) {
        app.navigate("personal/" + id, true);
    },
    error: function () {

    },
    close: function () {
        if (!this.isClosed) {

            this.$el.empty();
            this.isClosed = true;
        }
    }
}); 
var PersonalHistoryView = Backbone.View.extend({
	el: "#profilePage_content",
	initialize: function(params){
		_.bindAll(this, 'renderTransactions', 'openTransactionDetail', 'close');
		this.isClosed = false;

		this.wrapperTemplate = _.template(tpl.get('personalHistory'));
		this.transactionTemplate = _.template(tpl.get('personalTransactionHistory'));
		//this is reserved for notification construction
		this.curUserId = params.intendedUserId;
		this.user = app.sessionManager.getSessionUser();
		this.transactionLookup = {};
		this.$el.append(this.wrapperTemplate);

		app.userManager.fetchTransactionList(this.curUserId, {"success":this.renderTransactions, "error":this.renderTransactionError});
	},

	renderTransactions: function(transactionList){
		this.transactionView = new TransactionHistoryView(transactionList);
	},
	renderTransactionError: function(){

	},
	openTransactionDetail: function(transaction, user){
		this.transactionDetailView = new TransactionDetailView(transaction, this.user, "personal/history");
	},

	close: function(){
		if (!this.isClosed){
			//TODO: unbind all events
			$("#transactionHistoryContent>.personal_transactionHistory_message").off();
			this.$el.empty();
			this.isClosed = true;
		}
	}


});
var PersonalMessageView = Backbone.View.extend({
    el: "#profilePage_content",
    initialize: function (params) {
        _.bindAll(this, 'render', 'loadMessage', 'close');
        this.isClosed = false;
        this.wrapperTemplate = _.template(tpl.get('personalMessage'));

        this.curUserId = params.intendedUserId;
        this.user = app.sessionManager.getSessionUser();
        this.$el.append(this.wrapperTemplate);
        app.userManager.fetchMessageHistory(this.curUserId, {
            "success": this.render,
            "error": this.error
        });
    },

    render: function (messages) {
        this.myActiveContainer = $("#profilePage_messagePublishedContent");
        this.myFinishedContainer = $("#profilePage_messageParticipatedContent");
        this.loadMessage(messages);
    },

    loadMessage: function (messages) {
        var myMessages = new Messages (), pMessages = new Messages ();
        for (var i = 0; i < messages.length; i++) {
            message = messages.at(i);
            if (message.get("ownerId") === this.curUserId) {
                myMessages.add(message);
            }
        }
        this.myMessageHistoryView = new MessageHistoryView (myMessages, "profilePage_messagePublished");

    },
    error: function () {
        Info.displayErrorPage("profilePage_content", "Message History fetch failed");
    },
    close: function () {
        if (!this.isClosed) {
            //TODO: unbind all the events
            this.$el.empty();
            this.isClosed = true;
        }
    }
}); 
var PersonalUtilityView = Backbone.View.extend({
    el:"#profilePage_content",
    initialize: function (params) {
        _.bindAll(this, 'render', 'close', 'prepareImgUpload', 'savePersonalInfo', 'saveFile', 'savePassword', 'passwordSuccess', 'passwordError', 'toggleNotificationMethods', 'testInput', 'bindEvents', 'saveSuccess', 'saveError', 'noticeError', 'noticeSuccess');
        this.isClosed = false;
        this.template = _.template(tpl.get('personalUtility'));
        this.sessionUser = app.sessionManager.getSessionUser();
        this.curUserId = params.intendedUserId;
        if (this.curUserId !== this.sessionUser.get("userId")) {
            throw "unexpected userId";
        }
        if (testMockObj.testMode === true) {
            this.sessionUser = testMockObj.sampleUser;
        }
        this.geocoder = new google.maps.Geocoder();
        this.render();
        this.bindEvents();
        this.bindValidator();
        if (params.query) {
            switch (params.query) {
                case "password":
                    $('#passwordInfo').trigger("click");
                    break;
                case "trade":
                    $('#tradeInfo').trigger("click");
                    break;
                case "avatar":
                    $('#changeDp').trigger("click");
                    break;
                case "basic":
                default:
                    $('#basicInfo').trigger("click");
                    break;

            }
        }
    },

    bindEvents: function () {
        var that = this;
        $('#save_personalInfo').on('click', function () {
            that.savePersonalInfo();
        });
        this.$location.on('click', function () {
            // that.editLocation();
        });
        $('#basicInfo').on('click', function () {
            that.$personalContent.show();
            that.$settingContent.hide();
            that.$passwordContent.hide();
            that.$dpContent.hide();
            $('.wrong').remove();
            $('#myPage_edit_control>.active').removeClass("active");
            $(this).addClass("active");
            app.navigate("personal/" + that.sessionUser.id + "/utility/basic");
        });
        $('#passwordInfo').on('click', function () {
            that.$personalContent.hide();
            that.$settingContent.hide();
            that.$passwordContent.show();
            that.$dpContent.hide();
            $('.wrong').remove();
            $('#myPage_edit_control>.active').removeClass("active");
            $(this).addClass("active");
            app.navigate("personal/" + that.sessionUser.id + "/utility/password");
        });
        $('#tradeInfo').on('click', function () {
            that.$personalContent.hide();
            that.$settingContent.show();
            that.$passwordContent.hide();
            that.$dpContent.hide();
            $('#myPage_edit_control>.active').removeClass("active");
            $(this).addClass("active");
            app.navigate("personal/" + that.sessionUser.id + "/utility/trade");
        });
        $('#changeDp').on('click', function () {
            that.$personalContent.hide();
            that.$settingContent.hide();
            that.$passwordContent.hide();
            that.$dpContent.show();
            $('.wrong').remove();
            $('#myPage_edit_control>.active').removeClass("active");
            $(this).addClass("active");
            app.navigate("personal/" + that.sessionUser.id + "/utility/avatar");
        });
        $('#upload_picture').on('click', function () {
            //TODO:
        });
        $("#submit_password").children("input").on('click', function () {
            if (that.passwordValid.o && that.passwordValid.n && that.passwordValid.c) {
                that.savePassword($("input[name=oldPassword]").val(), $("input[name=newPassword]").val(), $("input[name=confirmNewPassword]").val());
            }
        });
        $("#reset_password").on('click', function () {
            that.$oldPassword.val("");
            that.$newPassword.val("");
            that.$confirmPassword.val("");
        });

        $("dd[name=gender]").on('click', "div", function (e) {
            $(e.delegateTarget).find(".radio_box_checked").removeClass("radio_box_checked");
            $(this).addClass("radio_box_checked");
        })
        this.$qq.on('keypress', function (e) {
            that.testInput(e, "^[0-9]+$");
        });
        this.$phone.on('keypress', function (e) {
            that.testInput(e, "^[0-9]+$");
        });
        this.$location.on('keypress', function (e) {
            e.preventDefault();
        });

        $('#notice_toggle').on('click', '.checkbox', function (e) {
            var to;
            if ($(e.target).hasClass("checked")) {
                $(e.target).removeClass("checked");
                to = false;
            } else {
                $(e.target).addClass("checked");
                to = true;
            }
            that.toggleNotificationMethods($(e.target).attr("data-id"), to);
        });

        this.prepareImgUpload(document.getElementById('uploadform'), Constants.origin + '/api/v1.0/users/img/' + app.sessionManager.getUserId(), "uploadTarget");
        $("#uploadform").attr("target", "uploadTarget");
        $("#selectImg").on("change", function (e) {
            $("#img-filePath").html(e.target.value);
        });
        $("#submitImg").on("click", function (e) {
            $("#fileValid").hide();
            var file = $("input[type=file]").val();
            if (file == '') {
                $("#fileValid").show().find("p").html("请先选择一个图片");
                e.preventDefault();
            } else {
                //Check file extension
                var ext = file.split('.').pop().toLowerCase();   //Check file extension if valid or expected

                if ($.inArray(ext, ['png', 'jpg', 'jpeg', 'bmp']) == -1) {
                    $("#fileValid>p").show().find("p").html("文件类型错误");
                    e.preventDefault(); //Prevent submission of form
                }
                else {
                    $(this).val("上传中...");

                }
            }
        });
    },

    prepareImgUpload: function (formElem, action, callback) {
        // we name a callback that will be called from inside the iframe
        // var callbackName = 'iframe' + Math.ceil(Math.random() * 10000);
        var iframe = document.createElement('iframe');
        action = action + (action.indexOf('?') == -1 ? '?' : '&');

        // we create an iframe and use the callback as its name (why not).
        iframe.setAttribute('name', callback);
        iframe.style.display = 'none';

        // we add the target and edit the action of the form
        formElem.setAttribute('target', callback);
        formElem.setAttribute('action', action);

        // we add the hidden iframe after the form
        formElem.parentNode.appendChild(iframe);

        $(iframe).one("load", function () {
            app.sessionManager.fetchSession(true, {
                "success": function () {
                    var path = app.sessionManager.getSessionUser().get("imgPath");
                    $("#profile_image").attr("src", path);
                    $("#utility_dp>form").find("img").attr("src", path);
                    $("#topBar-avatar").find("img").attr("src", path);
                },
                "error":function(response) {
                    location.reload();
                }
            });
        });

    },

    bindValidator: function () {
        var cmv, cdv, cyv, that = this;
        this.passwordValid = {};
        this.$name.on('blur', function (e) {
            $("#nameWrong,#nameCorrect").remove();
            var nameValue = this.value ? this.value.trim() : "";
            if (Utilities.isEmpty(nameValue)) {
                $(this).parent().parent().after("<dd id='nameWrong' class='wrong'><p>名字不能为空</p></dd>");
            } else if (nameValue.split(" ").length > 2) {
                $(this).parent().parent().after("<dd id='nameWrong' class='wrong'><p>名字不能有超过一个空格</p></dd>");
            } else {
                $(this).after("<span id='nameCorrect' class='right'></span>");
            }
        });
        this.$location.on('blur', function (e) {

        });
        this.$qq.on('blur', function (e) {
            $("#qqWrong").remove();
            if (!this.value) {
                return;
            }
            if (!($.isNumeric(this.value)) || this.value.length > 10 || this.value.length < 5) {
                $(this).parent().parent().after("<dd id='qqWrong' class='wrong'><p>很抱歉，QQ的格式不对，请重新输入</p></dd>");
            } else {
                $(this).after("<span id='qqRight' class='right'></span>");
            }
        });
        this.$phone.on('blur', function (e) {
            $("#phoneWrong,#phoneRight").remove();
            if (!$(this).val()) {
                return;
            }
            if (!($.isNumeric(this.value)) || this.value.length > 11 || this.value.length < 8) {
                $(this).parent().parent().after("<dd id='phoneWrong' class='wrong'><p>很抱歉，电话的格式不对，请重新输入</p></dd>");
            } else {
                $(this).after("<span id='phoneRight' class='right'></span>");
            }
        });
        this.$birthyear.add(this.$birthmonth).add(this.$birthday).on("blur", function (e) {
            var yi = that.$birthyear.val(), mi = that.$birthmonth.val(), di = that.$birthday.val(), bdvalid = true;
            var y = Utilities.toInt(yi);
            var m = Utilities.toInt(mi);
            var d = Utilities.toInt(di);
            $("#birthwrong").remove();
            $("#birthdaycheck").remove();
            if ( yi && mi && di && !( isNaN(y) || isNaN(m) || isNaN(d))) {
                if ( y < 1910 || y > 2012 ) {
                    bdvalid = false;
                }
                if ( m < 1 || m > 12 ) {
                    bdvalid = false;
                }
                if (d < 1 || d > 31) {
                    bdvalid = false;
                } else if (m === 4 || m === 6 ||m === 9 || m === 11){
                    bdvalid = bdvalid && (d <= 30);
                } else if (m === 2) {
                    if ( y % 4 === 0 ) {
                        bdvalid = bdvalid && (d <= 29);
                    } else {
                        bdvalid = bdvalid && (d <= 28)
                    }
                }
                if (!bdvalid) {
                    $(this).parent().parent().after("<dd class='wrong' id='birthwrong' title='请填写正确的日期'><p>请填写正确的日期</p></dd>");
                } else {
                    if ($("#birthdaycheck").length === 0) {
                        $(this).parent().append('<span id="birthdaycheck" class="right"></span>');
                    }
                }
            } else if ( isNaN(y) || isNaN(m) || isNaN(d)) {
                $(this).parent().parent().after("<dd class='wrong' id='birthwrong' title='请填写正确的日期'><p>请填写正确的日期</p></dd>");
                bdvalid = false;
            } else {
                $(this).parent().parent().after("<dd class='wrong' id='birthwrong' title='请填写正确的日期'><p>请填写正确的日期</p></dd>");
            }
        });

        this.$oldPassword.on('blur', function (e) {
            if (Utilities.isEmpty(this.value)) {
                if (!$("#pvalid1").length) {
                    $("#oldPassword").after('<dd id="pvalid1" class="wrong"><p>密码输入错误，请重新输入</p></dd>');
                }
                that.passwordValid.o = false;
            } else {
                $("#pvalid1").remove();
                that.passwordValid.o = true;
            }
        });
        this.$newPassword.on('blur', function (e) {
            $("#pcheck2").remove();
            $("#pcheck3").remove();
            if (Utilities.isEmpty(this.value) || this.value.length < 6) {
                if (!$("#pvalid2").length) {
                    $("#newPassword").after('<dd id="pvalid2" class="wrong"><p>密码长度至少6位</p></dd>');
                }
                that.passwordValid.n = false;
            } else {
                if (!$("#pcheck2").length) {
                    $(this).after('<span id="pcheck2" class="right"></span>');
                }
                $("#pvalid2").remove();
                that.passwordValid.n = true;
            }
            if (this.value !== that.$confirmPassword.val() && that.$confirmPassword.val()) {
                if (!$("#pvalid3").length) {
                    $("#confirmNewPassword").after('<dd id="pvalid3" class="wrong"><p>两次密码不一致</p></dd>');
                }
                that.passwordValid.c = false;
            } else {
                if (!$("#pcheck3").length) {
                    $("#confirmNewPassword").after('<span id="pcheck3" class="right"></span>');
                }
                $("#pvalid3").remove();
                that.passwordValid.c = true;
            }
        });
        this.$confirmPassword.on('blur', function (e) {
            $("#pcheck3").remove();
            if (Utilities.isEmpty(this.value) || this.value !== that.$newPassword.val()) {
                if (!$("#pvalid3").length) {
                    $("#confirmNewPassword").after('<dd id="pvalid3" class="wrong"><p>两次密码不一致</p></dd>');
                }
                that.passwordValid.c = false;
            } else {
                if (!$("#pcheck3").length) {
                    $(this).after('<span id="pcheck3" class="right"></span>');
                }
                $("#pvalid3").remove();
                that.passwordValid.c = true;
            }
        });

    },
    render: function () {
        var that = this;
        this.$el.append(this.template);
        this.$name = $("input[name=name]").val(this.sessionUser.get("name"));
        this.$phone = $('input[name=phone]').val(this.sessionUser.get("phone"));
        this.$qq = $('input[name=qq]').val(this.sessionUser.get("qq"));
        this.$location = $('input[name=location]');
        this.$gender = $("dd[name=gender]>div").removeClass("radio_box_checked");
        $("dd[name=gender] [data-id=" + this.sessionUser.get("gender") + "]").addClass("radio_box_checked");
        this.$birthyear = $('input[name=birthyear]');
        this.$birthmonth = $('input[name=birthmonth]');
        this.$birthday = $('input[name=birthday]');
        if (this.sessionUser.get("birthday").getFullYear() !== new Date ().getFullYear()) {
            this.$birthyear.val(this.sessionUser.get("birthday").getFullYear());
            this.$birthmonth.val(this.sessionUser.get("birthday").getMonth() + 1);
            this.$birthday.val(this.sessionUser.get("birthday").getDate());
        }
        this.$personalContent = $("#utility_personalInfo");
        this.$passwordContent = $('#utility_password').hide();
        this.$settingContent = $('#utility_accountSetting').hide();
        this.$dpContent = $('#utility_dp').hide();
        this.$dpContent.find('img').attr("src", this.sessionUser.get("imgPath"));

        var notificationMethod;
        if (this.sessionUser.get("emailNotice") && this.sessionUser.get("phoneNotice")) {
            notificationMethod = "both";
        } else if (this.sessionUser.get("emailNotice")) {
            notificationMethod = "email";
        } else if (this.sessionUser.get("phoneNotice")) {
            notificationMethod = "phone";
        }
        this.editedLocation = this.sessionUser.get("location");
        this.$oldPassword = $('input[name=oldPassword]');
        this.$newPassword = $('input[name=newPassword]');
        this.$confirmPassword = $('input[name=confirmNewPassword]');
        this.$address = $('#personal_editAddress');
        this.$location.on('click', function (e) {
            that.locationDropDownView = new LocationDropDownView($("#myPage_location"), that);
            e.stopPropagation();
        });
        this.$address.on('blur', function (e) {
            if ($(this).val()) {
                that.editedLocation.set("defaultId", -1);
                that.editedLocation.set("pointAddress", $(this).val());
                that.getLatLng(that.editedLocation);
            }
        });
        $("#accountEmailValue").html(this.sessionUser.get("email"));
        if (this.sessionUser.get("emailNotice")) {
            $("#notice_toggle").children("div[data-id=email]").addClass("checked");
        }

        this.$address.val(that.sessionUser.get("location").get("pointAddress"));
        this.$location.val(that.sessionUser.get("location").get("pointName"));
        var matchId = that.sessionUser.get("location").get("match_Id");
        if (!this.defaultLocations) {
            app.locationService.getDefaultLocations(function () {
                if (matchId >= 0) {
                    that.$location.val(that.defaultLocations.get(that.sessionUser.get("location").get("match_Id")).toUiString());
                }
            }, this);
        } else {
            this.$location.val(that.defaultLocations.get(that.sessionUser.get("location").get("match_Id")).toUiString());
        }
    },


    getLatLng: function (loc) {
        var request = {}, that = this;
        request.address = loc.get("pointAddress") + "," + loc.get("city") + "," + loc.get("province");
        var result = this.geocoder.geocode(request, function (geocodeResults, status) {
            $("#addrWrong, #addrCorrect").remove();
            if (status == google.maps.GeocoderStatus.OK) {
                loc.set("lat", geocodeResults[0].geometry.location.lat());
                loc.set("lng", geocodeResults[0].geometry.location.lng());
                loc.set("pointAddress", geocodeResults[0].formatted_address);
                loc.set("pointName", geocodeResults[0].formatted_address.split(",")[0]);
                if (!that.pivotLocation) {
                    that.pivotLocation = app.locationService.getDefaultLocations().where({"defaultId":app.sessionManager.getSessionUser().get("location").get("match_Id")})[0];
                }
                if (!that.pivotLocation.isInRange(loc) && $("#addrWrong").length === 0) {
                    that.$address.parent().parent().after("<dd class='wrong'><p>很抱歉，该地址不在服务区内</p></dd>");
                    return;
                } else {
                    if ($("#addrCorrect").length === 0) {
                        that.$address.after("<span id='addrCorrect' class='right'></span>");
                    }
                }
            } else {
                Info.warn('Geocode was not successful for the following reason: ' + status);
            }
        });
    },
    acceptDefaultLocation: function(defaultLocation){
        if (this.editedLocation.get("match_Id") !== defaultLocation.get("defaultId")) {
            this.pivotLocation = defaultLocation;
            this.editedLocation = defaultLocation.clone();
            this.$location.val(this.pivotLocation.toUiString());
            this.$address.val("");
        }
    },
    savePersonalInfo: function () {
        var that = this, date = new Date ();
        var gender = Utilities.toInt($("dd[name=gender]>.radio_box_checked").attr("data-id"));
        this.$name.trigger("focus").trigger("blur");
        this.$birthyear.trigger("focus").trigger("blur");
        this.$address.trigger("focus").trigger("blur");
        date.setYear(Utilities.toInt(this.$birthyear.val()));
        date.setMonth(Utilities.toInt(this.$birthmonth.val()) - 1);
        date.setDate(Utilities.toInt(this.$birthday.val()));
        if ($(".wrong").length) {
            return;
        }
        app.userManager.changeContactInfo(this.$name.val(), gender, this.$phone.val(), this.$qq.val(), date, this.editedLocation, {
            "success": that.saveSuccess,
            "error": that.saveError
        });
        $("#save_personalInfo").attr("value", "保存中...");
    },

    saveSuccess: function () {
        $("#save_personalInfo").attr("value", "更新完毕");
        $("#myPage_myInfo").find("p[data-id=name]").html("姓名："+this.sessionUser.get("name"));
        $("#myPage_myInfo").find("p[data-id=gender]").html("性别："+ ( (this.sessionUser.get("gender") === Constants.gender.male) ? "男" : "女"));
        $("#myPage_myInfo").find("p[data-id=age]").html("年龄："+this.sessionUser.getAge());
        $("#myPage_myInfo").find("p[data-id=location]").html("地区："+this.sessionUser.get("location").get("pointName"));
        app.navigate("personal/" + app.sessionManager.getUserId() + "/utility", {
            trigger: true
        });
    },
    saveError: function () {
        Info.warn("Personal info update failed");
        $("#save_personalInfo").attr("value", "更新失败(重试)");
    },
    saveFile: function (fileName) {
        var fileTypes = ["png", "jpg", "jpeg", "bmp"], dots, fileType;
        if (!fileName) {
            return;
        }
        dots = fileName.split(".");
        fileType = "." + dots[dots.length - 1];
        return (fileTypes.join(".").indexOf(fileType.toLowerCase()) !== -1);
    },

    savePassword: function (oldPassword, newPassword, confirmNewPassword) {
        app.userManager.changePassword(oldPassword, newPassword, confirmNewPassword, {
            "success": this.passwordSuccess,
            "error": this.passwordError
        });
    },
    passwordSuccess: function () {
        Info.displayNotice("密码修改成功");
        app.navigate('/temp', {
            replace: true
        });
        app.navigate("personal/" + app.sessionManager.getUserId() + "/utility", {
            trigger: true
        });
    },
    passwordError: function () {
        Info.displayNotice("密码修改失败，请重试");
    },
    toggleNotificationMethods: function (value, to) {

        app.userManager.toggleNotices(to, this.sessionUser.get(""), {
            "success": this.noticeSuccess,
            "error": this.noticeError
        });

    },
    noticeSuccess: function () {

    },
    noticeError: function () {

    },
    close: function () {
        if (!this.isClosed) {
            $('#save_personalInfo').off();
            $('input[name=location]').off();
            $('input[name=phone]').off();
            $('input[name=qq]').off();
            $('input[name=name]').off();
            $('#upload_picture').off();
            $("#submit_password").off();
            $("#reset_password").off();
            $('#basicInfo').off();
            $('#passwordInfo').off();
            $('#tradeInfo').off();
            this.$el.empty();
            this.isClosed = true;
        }
    },

    testInput: function (event, regularEx) {
        var regex = new RegExp (regularEx), key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
        if (!regex.test(event.target.value)) {
            event.target.value = "";
            return false;
        }
    }
});


var PersonalView = Backbone.View.extend({
    initialize: function (params) {
        _.bindAll(this, 'preRender', 'render', 'renderError', 'switchChildView', 'createChildView', 'getCurrentUserId', 'renderWatchButton', 'bindEvents', 'bindWatchEvent', 'bindDeWatchEvent', 'watchSuccess', 'watchError', 'deWatchSuccess', 'deWatchError', 'close');
        app.viewRegistration.register("personal", this, true);
        this.isClosed = false;

        this.template = _.template(tpl.get('personal'));
        //this curUserId is used to record the id of the user the personalPage is currently displaying
        this.curUserId = Utilities.toInt(params.intendedUserId);
        this.activeViewState = params.viewState;
        this.childrenViews = {};
        this.domContainer = $('#content');
        this.watched = false;
        this.sessionUser = app.sessionManager.getSessionUser();
        this.query = params.query;
        app.userManager.fetchUser(this.curUserId, {
            "success": this.preRender,
            "error": this.renderError
        });

    },

    preRender: function (user) {
        if ( location.href.indexOf("personal/"+this.curUserId) < 0) {
            return;
        }
        app.userManager.fetchWatchedUsers(this.sessionUser.id, {
            "success": this.renderWatchButton,
            "error": function(response) {
                Info.log(response);
            }
        });
        $("#popup").attr("class", "pop message_reservation");
        var that = this;
        this.user = user;
        this.render();
        this.switchChildView(this.activeViewState);
        this.bindEvents();
    },
    renderWatchButton: function (socialList) {
        if (this.sessionUser.get("userId") !== this.curUserId) {

            for (var user = 0; user < socialList.length; user++) {
                if (socialList.at(user).get("userId") === this.curUserId) {
                    this.watched = true;
                    break;
                }
            }
            //if user has watched this user
            if (this.watched) {
                $("#profilePage_utilityTab").html(" - 取消关注");
                this.bindDeWatchEvent();
            } else {
                $("#profilePage_utilityTab").html(" + 关注");
                this.bindWatchEvent();
            }
        }
    },
    render: function () {
        var userJson = this.user._toJSON();
        this.domContainer.append(this.template(userJson));
    },
    renderError: function () {
        Info.displayErrorPage("content", "个人页面加载失败，请稍后再试");
    },
    switchChildView: function (viewState, query) {

        //validity of viewState is guranteed on the URL level, since deep linking is applied
        //reduncy of safety check is not necessary here because in development, we need to know where things go wrong
        if ( viewState instanceof Object) {
            this.activeViewState = viewState.viewState;
        } else {
            this.activeViewState = viewState;
        }
        if (query) {
            this.query = query;
        }
        this.createChildView();
    },

    getCurrentUserId: function () {
        return this.curUserId;
    },

    createChildView: function () {
        if (this.activeChildView) {
            this.activeChildView.close();
        }
        var create = true;
        $('#myPage_tabControl>.active').removeClass('active');
        switch (this.activeViewState) {
            case "social":
                $('#profilePage_socialTab').addClass('active');
                this.activeChildView = new PersonalSocialView ({
                    'intendedUserId': this.curUserId
                });
                break;
            case "message":
                $('#profilePage_messageTab').addClass('active');
                this.activeChildView = new PersonalMessageView ({
                    'intendedUserId': this.curUserId
                });
                break;
            case "history":
                $('#profilePage_historyTab').addClass('active');
                this.activeChildView = new PersonalHistoryView ({
                    'intendedUserId': this.curUserId
                });
                break;
            case "notification":
                if (this.sessionUser.get("userId") === this.curUserId) {
                    $('#profilePage_notificationTab').addClass('active');
                    this.activeChildView = new NotificationHistoryView ({
                        'intendedUserId': this.curUserId
                    });
                }
                break;
            case "utility":
                if (this.sessionUser.get("userId") === this.curUserId) {
                    $('#profilePage_utilityTab').addClass('active');
                    this.activeChildView = new PersonalUtilityView ({
                        'intendedUserId': this.curUserId,
                        'query': this.query
                    });
                }
                break;
            default:
                Info.warn("PersonalView:: createChildView:: this.viewState matchin failed in switch, using Watch as default");
                this.activeChildView = new PersonalHistoryView ({
                    'intendedUserid': this.curUserId
                });
                break;
        }

        this.childrenViews[this.activeViewState] = this.activeChildView;
    },

    bindEvents: function () {
        var that = this;
        $('#profilePage_socialTab').on('click', function () {
            app.navigate("personal/" + that.curUserId + "/social");
            that.switchChildView("social");
        });

        $('#profilePage_messageTab').on('click', function () {
            app.navigate("personal/" + that.curUserId + "/message");
            that.switchChildView("message");
        });

        $('#profilePage_historyTab').on('click', function () {
            app.navigate("personal/" + that.curUserId + "/history");
            that.switchChildView("history");
        });
        if (app.sessionManager.getUserId() === that.curUserId) {
            $('#profilePage_notificationTab').on('click', function (){
                app.navigate("personal/" + that.curUserId + "/notification");
                that.switchChildView("notification"); 
            });
            $('#profilePage_sendLetter').remove();
        } else {
            $('#profilePage_notificationTab').remove();
            $("#profilePage_sendLetter").on('click', function () {
                app.letterView.switchContact(that.curUserId);
            });

        }
        $('#profilePage_utilityTab').on('click', function () {
            if (app.sessionManager.getUserId() === that.curUserId) {
                app.navigate("personal/" + that.curUserId + "/utility");
                that.switchChildView("utility");
            } else {
                
            }
        });
    },
    bindWatchEvent: function () {
        var that = this;
        if (this.sessionUser.get("userId") !== this.curUserId) {
            $('#profilePage_utilityTab').on("click", function () {
                app.userManager.watchUser(that.curUserId, {
                    "success": that.watchSuccess,
                    "error": that.watchError
                });
            });
        }
    },
    bindDeWatchEvent: function () {
        var that = this;
        $("#profilePage_utilityTab").on("click", function () {
            app.userManager.deWatchUser(that.curUserId, {
                "success": that.deWatchSuccess,
                "error": that.deWatchError
            });
        });
    },

    watchSuccess: function () {
        $("#profilePage_utilityTab").html("- 取消关注").off();
        this.bindDeWatchEvent();
    },
    watchError: function () {
    },
    deWatchSuccess: function () {
        $("#profilePage_utilityTab").html("+ 加关注").off();
        this.bindWatchEvent();
    },
    deWatchError: function () {

    },
    close: function () {
        if (!this.isClosed) {
            if (this.activeChildView) {
                this.activeChildView.close();
            }
            $('#profilePage_messageTab').off();
            $('#profilePage_historyTab').off();
            $('#profilePage_socialTab').off();
            $('#profilePage_notificationTab').off();
            $('#profilePage_utilityTab').off();

            this.unbind();
            this.domContainer.empty();
            this.isClosed = true;
        }
    }
});


/*dedicated view for user registration, deep linking will not be used for registrtion states, this view holds the session data*/
var RegistrationView = Backbone.View.extend({

    el: "",

    initialize: function(params){
        _.bindAll(this, 'render', 'bindEvents', 'finish', 'acceptDefaultLocation', 'closeLocationDropDown', 'verifyEmail', 'close');
        app.viewRegistration.register("registration", this, true);
        this.isClosed = false;
        this.state = params.state || "default";

        this.baseTemplate = _.template(tpl.get('registration'));
        this.finishTemplate = _.template(tpl.get('registration_finish'));
        this.registerInfo = {"location":new UserLocation(),"gender":Constants.gender.female};
        this.out = false;
        this.geocoder = new google.maps.Geocoder();
        this.render(1);
    },
    getLatLng: function (loc) {
        var request = {}, that = this;
        loc.set("defaultId", -1);
        request.address = loc.get("pointAddress") + "," + loc.get("city") + "," + loc.get("province");
        var result = this.geocoder.geocode(request, function (geocodeResults, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                loc.set("lat", geocodeResults[0].geometry.location.lat());
                loc.set("lng", geocodeResults[0].geometry.location.lng());
                that.valid.location = false;
                if (!that.registerInfo.pivot) {
                    $("#pivotLocation").parent().children('.sign_up_err').remove();
                    $("#pivotLocation").parent().addClass("wrong").append("<p class='sign_up_err' id='vlocation' title='请选择一个地区'><span>请选择一个地区</span></p>");
                    return;
                }
                if (!that.registerInfo.pivot.isInRange(loc)) {
                    $("#pivotLocation").parent().children('.sign_up_err').remove();
                    $("#pivotLocation").parent().addClass("wrong").append("<p class='sign_up_err' id='vlocation' title='对不起，该地区暂时不在服务区'><span>对不起，该地区暂时不在服务区</span></p>");
                    return;
                }
                that.valid.location = true;
            } else {
                Info.warn('Geocode was not successful for the following reason: ' + status);
            }
        });
    },
    render: function(){
        this.domContainer = $('#content');
        this.domContainer.empty();
        if (this.state !== "finish") {
            this.domContainer.append(this.baseTemplate);
            this.registerContainer = $('#registerContainer');
            this.contentContainer = $('#registerContent');
            $("#loginBox").hide();
            this.$password = $("#registerPasswordInput");
            this.$confirm = $("#registerPasswordConfirmInput");
            this.$email = $('#registerEmailInput');
            this.$year = $("#birthyear");
            this.$month = $("#birthmonth");
            this.$day = $("#birthday");
            this.$name = $("#registerNameInput");
            this.bindEvents();
            this.bindValidator();
        } else {
            this.domContainer.append(this.finishTemplate);
            $("#emailValue").html(this.emailCache);
            var domain = this.emailCache.split("@")[1];
            var emailDomain = Constants.emailLink[domain] || domain;
            $("#gotoEmail").on("click", function (e) {
                window.open("http://"+emailDomain);
            });
            $("#resendEmail").on("click", function (e) {
                app.userManager.resendActivationEmail();
            });
        }

        // --- events binding ---
    },
    bindValidator: function(){
        this.valid = {};
        this.valid.location = true;
        //email regex
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            that = this;
        this.$name.on("blur", function (e) {
            $("#vname").remove();
            that.$name.parent().removeClass("wrong");
            if (that.$name.val() && that.$name.val().length > 1) {
                that.valid.name = true;
                that.registerInfo.name = that.$name.val();
                that.$name.after('<span id="vname" class="right"></span>');
            } else {
                that.valid.name = false;
                that.registerInfo.name = "";
                that.$name.parent().addClass("wrong").append('<p class="sign_up_err" id="vname" title="请填写姓名"><span>请填写姓名</span></p>');
            }
        });
        this.$email.on("blur", function (e) {
            $("#vemail").remove();
            that.$email.parent().removeClass("wrong");
            if (re.test(that.$email.val())) {
                that.valid.email = true;
                that.registerInfo.email = that.$email.val();
                app.userManager.verifyEmail(that.registerInfo.email, {
                    "success": that.verifyEmail,
                    "error": function(response) {

                    }
                })
                that.$email.after('<span id="vemail" class="right"></span>');
            } else {
                that.valid.email = false;
                that.$email.parent().addClass("wrong").append('<p class="sign_up_err" id="vemail" title="邮箱地址有误"><span>邮箱地址有误</span></p>');
            }

        });
        this.$password.add(this.$confirm).on("blur", function (e) {
            var p = that.$password.val();
            $("#vpass").remove();
            $("#vpass2").remove();
            that.$password.parent().removeClass("wrong");
            that.$confirm.parent().removeClass("wrong");
            if (p && p.length >= 6 && that.$password.val() === that.$confirm.val()) {
                that.$password.after('<span id="vpass" class="right"></span>');
                that.$confirm.after('<span id="vpass2" class="right"></span>');
                that.valid.password = true;
                that.registerInfo.password = that.$password.val();
            } else {
                if (!p || p.length < 6) {
                    that.$password.parent().addClass("wrong").append('<p class="sign_up_err" id="vpass" title="密码长度至少为6位"><span>密码长度至少为6位</span></p>');
                } else {
                    if (that.$confirm.val().length !== 0){
                        that.$confirm.parent().addClass("wrong").append('<p class="sign_up_err" id="vpass2" title="两次输入密码不匹配"><span>两次输入密码不匹配</span></p>');
                    }
                }
                that.valid.password = false;
            }
        });
        this.$year.add(this.$month).add(this.$day).on("blur", function (e) {
            var yi = that.$year.val(), mi = that.$month.val(), di = that.$day.val(), bdvalid = true;
            var y = Utilities.toInt(yi);
            var m = Utilities.toInt(mi);
            var d = Utilities.toInt(di);
            $("#vbirth").remove();
            if ( yi && mi && di && !( isNaN(y) || isNaN(m) || isNaN(d)) ) {
                $(this).parent().removeClass("wrong");
                if ( y < 1910 || y > 2012 ) {
                    bdvalid = false;
                }
                if ( m < 1 || m > 12 ) {
                    bdvalid = false;
                }
                if (d < 1 || d > 31) {
                    bdvalid = false;
                } else if (m === 4 || m === 6 ||m === 9 || m === 11){
                    bdvalid = bdvalid && (d <= 30);
                } else if (m === 2) {
                    if ( y % 4 === 0 ) {
                        bdvalid = bdvalid && (d <= 29);
                    } else {
                        bdvalid = bdvalid && (d <= 28)
                    }
                }
                if (!bdvalid) {
                    $(this).parent().addClass("wrong").append("<p class='sign_up_err' id='vbirth' title='请填写正确的日期'><span>请填写正确的日期</span></p>");
                    that.registerInfo.birthday = null;
                    that.valid.birthday = false;
                } else {
                    $(this).parent().append("<span id='vbirth' class='right'></span>");
                    that.registerInfo.birthday = new Date();
                    that.registerInfo.birthday.setFullYear(y);
                    that.registerInfo.birthday.setMonth(m - 1);
                    that.registerInfo.birthday.setDate(d);
                    that.valid.birthday = true;
                }
            } else if ( isNaN(y) || isNaN(m) || isNaN(d)) {
                $(this).parent().addClass("wrong").append("<p class='sign_up_err' id='vbirth' title='请填写正确的日期'><span>请填写正确的日期</span></p>");
                that.registerInfo.birthday = null;
                that.valid.birthday = false;
            } else {
                that.registerInfo.birthday = null;
            }
        });
    },
    bindEvents: function(){
        var that = this;
        $("#registerGenderSelect").on("click", function (e) {
            $(this).find(".radio_box_checked").removeClass("radio_box_checked");
            var g = $(e.target).addClass("radio_box_checked").attr("data-id");
            if (g === "female") {
                that.registerInfo.gender = Constants.gender.female;
            } else if (g === "male") {
                that.registerInfo.gender = Constants.gender.male;
            }
        });

        $('#pivotLocation').on('click', function (e) {
            that.closeLocationDropDown();
            that.locationDropDownView = new LocationDropDownView($('#sign_up_location_container'), that);
            e.stopPropagation();
        }).on('focus', function (e) {
            that.closeLocationDropDown();
            that.locationDropDownView = new LocationDropDownView($('#sign_up_location_container'), that);
            e.stopPropagation();
        });

        $("#myAddress").on('blur', function (e) {
            if ($(this).val() && $(this).val() !== "请输入具体地址") {
                that.registerInfo.location.set("pointAddress", $(this).val())
            }
            that.getLatLng(that.registerInfo.location);
        }).on('focus', function() {
            if ($(this).val() === "请输入具体地址") {
                $(this).val("");
            }
        });
        $("#complete").on("click", function(){
            if (that.valid.email) {
            } else {
                if ($("#vemail").length === 0) {
                    that.$email.parent().addClass("wrong").append('<p class="sign_up_err" id="vemail" title="请输入你的邮箱"><span>请输入你的邮箱</span></p>');
                }
                return;
            }
            if (that.valid.password) {
            } else {
                if ($("#vpass").length === 0) {
                    that.$password.parent().addClass("wrong").append('<p class="sign_up_err" id="vpass" title="请输入一个密码"><span>请输入一个密码</span></p>');
                    that.$confirm.parent().addClass("wrong").append('<p class="sign_up_err" id="vpass2" title="请输入一个密码"><span>请输入一个密码</span></p>');
                }
                return;   
            }
            if (that.valid.location) {
            } else {
                if ($("#vlocation").length === 0) {
                    $('#pivotLocation').parent().addClass("wrong").append('<p class="sign_up_err" id="vlocation" title="请选择你的地址"><span>请选择你的地址</span></p>');
                }
                return;
            }
            // if (that.valid.birthday ) {

            // } else {
            //     return;
            // }
            that.registerInfo.email = $('#registerEmailInput').val();
            that.registerInfo.password = $('#registerPasswordInput').val();

            var user = new User();
            user.set('location', that.registerInfo.location);
            user.set('gender', that.registerInfo.gender);
            user.set('email', that.registerInfo.email);
            user.set('password', that.registerInfo.password);
            user.set('name', that.registerInfo.name);
            if (that.registerInfo.birthday) {
                user.set("birthday", that.registerInfo.birthday);
            }
            app.userManager.registerUser(user, {
                success: function(){
                    that.emailCache = user.get('email');
                    app.navigate("register/finish", {trigger: true});
                },

                error: function(response){
                    if (response.responseText){
                        Info.alert(response.responseText);
                    }
                    else{
                      Info.alert("注册失败，请稍后再试");
                    }
                }

            });
            
        });
    },

    finish: function(){
        Info.displayNotice("注册成功");
    },

    acceptDefaultLocation: function(defaultLocation){
        this.registerInfo.pivot = defaultLocation;
        this.registerInfo.pivot.copy(this.registerInfo.location);
        this.registerInfo.location.set("pointAddress", $("#myAddress").val());
        $('#pivotLocation').val(defaultLocation.toUiString());
    },

    closeLocationDropDown: function(){
        if (typeof this.locationDropDownView !== 'undefined' && this.locationDropDownView !== null){
            this.locationDropDownView.close();
        }
    },

    verifyEmail: function (available) {
        if (available) {
            this.$email.after('<span id="vemail" class="right"></span>');
        } else {
            this.valid.email = false;
            this.$email.parent().addClass("wrong").append('<p class="sign_up_err" id="vemail" title="该邮箱已经被注册"><span>该邮箱已经被注册</span></p>');
        }
    },

    close: function(){
        if (!this.isClosed){
            $("#register-modal-closeButton").off();
            this.domContainer.empty();
            this.isClosed = true;
        }
    }


});
var FindPasswordView = Backbone.View.extend({
    el: "#content",
    initialize: function (params) {
        _.bindAll(this, 'render', 'validatePassword', 'close');
        app.viewRegistration.register("findPassword", this, true);
        this.isClosed = false;
        this.template1 = _.template(tpl.get("findPassword_1"));
        this.template2 = _.template(tpl.get("findPassword_2"));
        this.template3 = _.template(tpl.get("findPassword_3"));
        if (params.token) {
            this.token = params.token;
            this.state = 3;
        } else {
            this.state = 1;
        }
        this.render(this.state);
    },
    render: function (state) {
        var that = this;
        this.state = state;
        this.$el.empty();
        if (state === 3) {
            this.$el.append(this.template3);
        } else if (state === 2) {
            this.$el.append(this.template2);
            $("#email_value").html(this.email);
            $("#go_to_email").on("click", function (e) {
                e.preventDefault();
                window.open("http://"+that.email.split("@")[1]);
            });
        } else {
            this.re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            this.$el.append(this.template1);
        }
        this.bindEvents(this.state);
    },
    bindEvents: function (state) {
        var that = this,
            email;
        if (state === 3) {
            this.$password = $("#newPassword");
            this.$confirm = $("#confirmPassword");
            this.valid = {password: false};
            this.$password.add(this.$confirm).on("blur", function (e) {
                that.validatePassword();
            });
            $("#confirmChange").on("click", function (e) {
                that.validatePassword();
                if (that.valid.password){
                    app.userManager.findPassword(that.token, that.$password.val(), that.$confirm.val(), {
                        "success": that.changeSuccess,
                        "error": that.changeError
                    });
                }
                
            });
        } else if (state === 2) {
            $("#go_to_email").on("click", function (e) {
                e.preventDefault();
                window.open("http://"+that.email.split("@")[1]);
            });
        } else {
            $("#emailAddress").on("blur", function (e) {
                if ($("#forgotWrong").length) {
                    $("#forgotWrong").remove();
                }
                email = $("#emailAddress").val();
                if (!email || !that.re.test(email)) {
                    $("#forgot_container").append("<div id='forgotWrong' class='wrong'><p>邮箱格式不正确，请输入正确的邮箱</p>邮箱格式不正确，请输入正确的邮箱</div>");
                    that.email = "";
                } else {
                    that.email = $(this).val();
                }
            });
            $("#resetButton").on("click", function() {
                email = $("#emailAddress").val();
                if (email && that.re.test(email)) {
                    that.email = $("#emailAddress").val();
                }

                app.userManager.forgetPassword(that.email, {
                    "success": that.render,
                    "error": that.forgetError
                });

            });
        }
    },
    validatePassword: function(){
        var p = this.$password.val();
        $("#vpass").remove();
        $("#vpass2").remove();
        this.$password.parent().removeClass("wrong");
        this.$confirm.parent().removeClass("wrong");
        if (p && p.length >= 6 && this.$password.val() === this.$confirm.val()) {
            this.$password.after('<span id="vpass" class="right"></span>');
            this.$confirm.after('<span id="vpass2" class="right"></span>');
            this.valid.password = true;
        } else {
            if (!p || p.length < 6) {
                this.$password.parent().addClass("wrong").append('<p id="vpass" title="密码长度至少为6位">密码长度至少为6位</p>');
            } else {
                if (this.$confirm.val().length !== 0){
                    this.$confirm.parent().addClass("wrong").append('<p id="vpass2" title="两次输入密码不匹配">两次输入密码不匹配</p>');
                }
            }
            this.valid.password = false;
        }
    },
    forgetError: function (response) {
        if (!$("#forgotWrong").length) {
            $("#forgot_container").append("<div id='forgotWrong' class='wrong'><p>"+response.responseText+"</p></div>");
        }
    },
    changeSuccess: function () {
        Info.alert("密码修改成功");
        app.navigate('front', {trigger: true});
    },
    changeError: function (data) {
        if (data.status == 401){
            $("#forgot_container").children('.wrong').remove();
            $("#forgot_container").append("<div class='wrong'><p>更改密码请求无效或已过期</p></div>");
        }
        else if (data.status == 400){
            $("#forgot_container").children('.wrong').remove();
            $("#forgot_container").append("<div class='wrong'><p>更改密码请求无效</p></div>");
        }
        else{
            $("#forgot_container").children('.wrong').remove();
            $("#forgot_container").append("<div class='wrong'><p>请稍后再试</p></div>");
        }
        
    },
    close: function () {
        if (!this.isClosed) {
            this.isClosed = true;
            this.$el.empty();
        }
    }

});

var TransactionDetailView = Backbone.View.extend({

    el: "",
    bookInfo: {
        "go": 0,
        "back": 0,
        "number": 1
    },
    initialize: function (transaction, info) {
        var i, that = this;
        _.bindAll(this, 'render', 'bindEvents', 'bookSuccess', 'scoreSuccess', 'calculateTotal', 'bookFail', 'scoreFail', 'bindEvaluationEvent', 'renderStar', 'close');
        app.viewRegistration.register("transactionDetail", this, true);
        this.isClosed = false;
        this.transaction = transaction;
        this.info = info;
        this.json = this.transaction._toJSON();
        for (i in info) {
            this.json[i] = info[i];
        }
        this.priceList = this.transaction.get("departure_priceList");
        for ( i = 0; i < this.priceList.length; i++) {
            if (this.priceList[i] === 0 && i > 0) {
                this.priceList[i] = this.priceList[i - 1];
            }
        }
        this.user = app.sessionManager.getSessionUser();
        // if (testMockObj.testMode){
        // 	this.transaction = testMockObj.sampleTransactionA;
        // 	//To allow edit
        // }
        this.user = app.sessionManager.getSessionUser();
        this.editable = transaction.get("transactionId") === -1;
        this.userId = this.user.get("userId");
        this.template = _.template(tpl.get('transactionDetail'));
        this.$domContainer = $('#popup').addClass("message_reservation");
        this.$mask = $('#overlay').show();
        this.render();
        this.textareaClicked = false;

        this.bindEvents();
        if (this.transaction.get("state") === 3) {
            this.bindEvaluationEvent(); 
        }
    },
    render: function () {
        this.$domContainer.append(this.template(this.json));
        this.$unitPrice = $("#unitPriceValue");
        this.$totalPrice = $("#transaction_totalPrice");
        this.$domContainer.show();
        this.calculateTotal();
    },
    bindEvents: function () {
        var that = this, temp;
        this.$directionSelect = $("#transaction_direction_select");
        this.$directionSelectBox = $("#transaction_direction_box");
        this.$closeButton = $("#closeButton").on("click", function () {
            that.close();
        });
        if (this.editable) {
            this.$directionSelect.on("click", function (e) {
                that.$directionSelectBox.toggle();
                if (e.target.tagName === "LI") {
                    $(this).children().first().val(e.target.textContent);
                    if (e.target.id === "transaction_go") {
                        that.bookInfo.go = 1;
                        that.bookInfo.back = 0;
                    } else if (e.target.id === "transaction_back"){
                        that.bookInfo.go = 0;
                        that.bookInfo.back = 1;
                    } else if (e.target.id === "transaction_round"){
                        that.bookInfo.go = 1;
                        that.bookInfo.back = 1;
                    } 
                    that.calculateTotal();
                    return;
                }
            });
            this.$transactionNumber = $("#transaction_book_number").on("blur", function (e) {
                that.bookInfo.number = Utilities.toInt(e.target.value);
                if ( isNaN(that.bookInfo.number) || that.bookInfo.number < 0) {
                    that.bookInfo.number = 1;
                }
                if (that.bookInfo.number > 1) {
                    that.$downarrow.attr("class", "plus");
                }
                if (that.bookInfo.number == 1) {
                    that.$downarrow.attr("class", "plus_disabled");
                }
                that.calculateTotal();
            });
            this.$transactionNote = $("#transaction_userNote").on("focus", function (e) {
                if (!that.textareaClicked) {
                    that.textareaClicked = true;
                    e.target.textContent = "";
                }
            });
            this.$controller = $("#transaction_control");
            this.$uparrow = this.$controller.find(".add");
            this.$downarrow = this.$controller.find(".plus_disabled");
            if (this.$downarrow.length === 0) {
                this.$downarrow = this.$controller.find(".plus");
            }

            this.$uparrow.on("click", function() {
                if (that.info.departure_seatsNumber <= that.bookInfo.number && that.info.arrival_seatsNumber <= that.bookInfo.number ) return;
                that.bookInfo.number++;
                if (that.bookInfo.number > 1) {
                    that.$downarrow.attr("class", "plus");
                }
                that.$transactionNumber.val(that.bookInfo.number);
                that.calculateTotal();
            });

            this.$downarrow.on("click", function() {
                if ($(this).hasClass("plus_disabled")) {
                    return;
                }
                that.bookInfo.number--;
                if (that.bookInfo.number == 1) {
                    that.$downarrow.attr("class", "plus_disabled");
                }
                that.$transactionNumber.val(that.bookInfo.number);
                that.calculateTotal();
            });
        }
        this.$functionButton;
        if (this.transaction.id === -1) {
            this.$functionButton = $("#startButton").on("click", function () {
                if (that.textareaClicked) {
                    that.transaction.set("userNote", that.$transactionNote.val());
                }
                that.transaction.set("departure_seatsBooked" , that.bookInfo.number);
                if ((that.info.departure_seatsNumber >= that.transaction.get("departure_seatsBooked") && that.bookInfo.go) || (that.info.arrival_seatsNumber >= that.transaction.get("arrival_seatsBooked") && that.bookInfo.back)) {
                    if (that.bookInfo.go === 1) {
                        $(this).val("预 约 中...").prop("disabled", true);
                        app.transactionManager.initTransaction(that.transaction, {
                            "success": that.bookSuccess,
                            "error": that.bookFail
                        });
                    }
                    if (that.bookInfo.back === 1) {
                        $(this).val("预 约 中...").prop("disabled", true);
                        var temp = that.transaction.get("arrival_location");
                        that.transaction.set("arrival_location", that.transaction.get("departure_location"));
                        that.transaction.set("departure_location", temp);
                        app.transactionManager.initTransaction(that.transaction, {
                            "success": that.bookSuccess,
                            "error": that.bookFail
                        });
                    }
                } else {
                    that.$transactionNumber.addClass("invalid_input");
                }
            });
        }
        else if (this.transaction.get("state") === Constants.transactionState.init) {
            this.$functionButton = $("#cancelButton").on("click", function () {
                app.transactionManager.changeTransactionState({
                    "transactionId": that.transaction,
                    "stateChangeAction": Constants.transactionStateChangeAction.cancel
                }, {
                    "success": that.bookSuccess,
                    "error": that.bookFail
                });
            });
        } else {
            this.$functionButton = $("#contactButton").on("click", function () {
                var targetUserId = that.user.id === that.transaction.get("provider").id ? that.transaction.get("customer").id : that.transaction.get("provider").id;
                app.letterView.switchContact(targetUserId);
            });
        }
    },
    calculateTotal: function () {
        var total, temp;
        if (this.editable) {
            temp = this.priceList.length < this.bookInfo.number ? this.priceList.length : this.bookInfo.number;
            if (this.bookInfo.number > 0) {
                this.bookInfo.total = (this.bookInfo.go + this.bookInfo.back) * this.bookInfo.number * (this.priceList[temp - 1]);
            } else {
                this.bookInfo.total = 0;
            }
            total = this.bookInfo.total;
            if ( total === 0 ) {
                // should not occur

            }
        } else {
            temp = this.priceList.length < this.transaction.get("departure_seatsBooked") ? this.priceList.length : this.transaction.get("departure_seatsBooked");
            total = this.transaction.get("departure_seatsBooked") * this.priceList[temp - 1];
            this.$unitPrice.html(this.priceList[temp - 1]);
        }
        this.$totalPrice.html(total);
    },
    bookSuccess: function () {
        $("#bookedStatus").show();
        this.$functionButton.off().val("预 约 成 功");
    },
    scoreSuccess: function () {
        
    },
    scoreFail: function () {
        
    },
    bookFail: function () {
        this.$functionButton.val("预约失败, 重试").removeAttr("disabled");
    },
    bindEvaluationEvent: function () {

        this.$providerStar = $("#providerStar");
        this.$customerStar = $("#customerStar");
        var submit = {
            "transactionId":this.transaction.id,
            "stateChangeAction":Constants.transactionStateChangeAction.evaluate
        }, that = this;
        if (this.transaction.providerId === this.user.id) {
            this.$customerStar.children(".star").on("mouseenter", function (e) {
                $(this).prevAll().addClass("on");
                $(this).addClass("on");
                $(this).nextAll().removeClass("on");
            }).on("mouseleave", function (e) {
                if (!$(e.toElement).hasClass("star")) {
                    that.renderStar(0);
                }
            }).on("click", function (e) {
                submit.score = that.$customerStar.children(".star").index(this);
                app.transactionManager.changeTransactionState(submit, {
                    "success":that.scoreSuccess,
                    "error":that.scoreFail
                });
            });
        } else if (this.transaction.customerId === this.user.id){
            this.$providerStar.children(".star").on("mouseenter", function (e) {
                $(this).prevAll().addClass("on");
                $(this).addClass("on");
                $(this).nextAll().removeClass("on");
            }).on("mouseleave", function (e) {
                if (!$(e.toElement).hasClass("star")) {
                    that.renderStar(1);
                }
            }).on("click", function (e) {
                submit.score = that.$providerStar.children(".star").index(this);
                app.transactionManager.changeTransactionState(submit, {
                    "success":that.scoreSuccess,
                    "error":that.scoreFail
                });
            });
        }
    },
    renderStar: function(flag) {
        var pevaluation = this.transaction.get("providerEvaluation"),
            cevaluation = this.transaction.get("customerEvaluation"),
            pstars = this.$providerStar.children(".star"), 
            cstars = this.$customerStar.children(".star"),
            i;
        if (flag === 0) {
            if ( cevaluation > 0) {
                cstars.slice( 0, cevaluation-1).addClass("on");
                cstars.slice( cevaluation-1, 5).removeClass("on");
            }
        } else if (flag === 1) {
            if ( pevaluation > 0) {
                pstars.slice( 0, pevaluation-1).addClass("on");
                pstars.slice( pevaluation-1, 5).removeClass("on");
            }
        } else {

        }
    },
    close: function () {
        if (!this.isClosed) {
            this.$closeButton.off();
            this.$functionButton.off();
            if (this.$providerStar) {
                this.$providerStar.children(".star").off();
            } else if (this.$customerStar) {
                this.$customerStar.children(".star").off();
            }
            this.$domContainer.empty();
            this.$domContainer.hide();
            this.$mask.hide();
            this.isClosed = true;
        }
    }
});

var TopBarView = Backbone.View.extend({

    el: $('#topBar'),

    events: {

    },

    initialize: function () {
        _.bindAll(this, 'render', 'reRender', 'bindEvents', 'renderNotificationDropdown', 'renderLetterDropdown', 'renderFavoriteDropdown', 'bindDropdownEvents', 'close', 'login', 'logout', '_clearAll');
        app.viewRegistration.register("topBar", this, true);
        this.isClosed = false;

        this.loggedInTemplate = _.template(tpl.get('topBar-loggedIn'));
        this.notLoggedInTemplate = _.template(tpl.get('topBar-notLoggedIn'));
        this.dropdown_notifiationTemplate = _.template(tpl.get('notificationDropdown'));
        this.dropdown_letterTemplate = _.template(tpl.get('letterDropdown'));
        this.dropdown_favoriteTemplate = _.template(tpl.get('favoriteDropdown'));

        this.sessionUser = app.sessionManager.getSessionUser();

        this.render();
    },

    render: function () {
        this.listenTo(this.sessionUser, 'change:userId', this.reRender);
        this.$ndropdown = $('#notifications').find("ul");
        this.$ldropdown = $('#letters').find("ul");
        this.$fdropdown = $('#favorites').find("ul");
        this.$pdropdown = $('#profileDropdown>dd');
        if (app.sessionManager.hasSession()) {
            $(this.el).append(this.loggedInTemplate(this.sessionUser._toJSON()));
            this.bindEvents();

            //dropdown specific data binding
            this.notifications = app.sessionManager.getCurUserNotifications();
            this.listenTo(this.notifications, 'reset', this.renderNotificationDropdown);
            this.letters = app.sessionManager.getCurUserLetters();
            this.listenTo(this.letters, 'reset', this.renderLetterDropdown);
            this.favorites = app.sessionManager.getCurUserFavorites();
            this.listenTo(this.favorites, 'reset', this.renderFavoriteDropdown);

            this.renderNotificationDropdown();
            this.renderLetterDropdown();
            this.renderFavoriteDropdown();
            this.bindDropdownEvents();
        } else {
            $(this.el).append(this.notLoggedInTemplate);
            this.bindEvents();
        }

    },

    reRender: function () {
        this._clearAll();
        this.render();
    },

    renderNotificationDropdown: function (notifications) {
        var i = 0, htmlContext = '';
        if ( this.notifications.length === 0 ) {
            return;
        }
        for ( i = 0; i < this.notifications.length; i++) {
            htmlContext += this.dropdown_notifiationTemplate(this.notifications.at(i).toDropdownJSON());
        }
        this.$ndropdown.empty().append(htmlContext);
    },

    renderLetterDropdown: function () {
        var i = 0, htmlContext = '';
        if ( this.letters.length === 0 ) {
            return;
        }
        for ( i = 0; i < this.letters.length; i++) {
            htmlContext += this.dropdown_letterTemplate(this.letters.at(i).toDropdownJSON());
        }

        this.$ldropdown.empty().append(htmlContext);
    },

    renderFavoriteDropdown: function () {
        var i = 0, htmlContext = '';
        if ( this.favorites.length === 0 ) {
            return;
        }
        for ( i = 0; i < this.favorites.length; i++) {
            htmlContext += this.dropdown_favoriteTemplate(this.favorites.at(i).toDropdownJSON());
        }

        this.$fdropdown.empty().append(htmlContext);
    },

    bindDropdownEvents: function () {
        var self = this;
        this.$ndropdown.on('click', 'li', function (e) {
            e.preventDefault();
            var n_id = parseInt($(e.target).attr("data-notificationId"), 10);
            var n_model = self.notifications.get(n_id);
            var n_evt = n_model.get('notificationEvent');

            //async, don't care about result
            app.notificationManager.checkNotification(n_id);

            if (n_evt === Constants.notificationEvent.watched) {
                app.navigate("personal/" + n_model.get('initUserId'), true);
            }
            //transaction related
            else if (n_evt < Constants.notificationEvent.watched) {
                app.navigate("message/" + n_model.get('messageId'), true);
            }
        });
        this.$ldropdown.on('click', 'li', function (e) {
            var u_id = $(e.target).attr("data-userId");
            app.letterView.switchContact(u_id);
        });
        this.$fdropdown.on('click', 'li', function (e) {
            var u_id = $(e.target).attr("data-userId");
            app.navigate("personal/" + u_id, true);
        });
        $('#notifications').find(".more").on("click", function (e) {
            e.preventDefault();
            app.navigate("personal/" + self.sessionUser.id + "/history", true);
        });
        $('#letters').find(".more").on("click", function (e) {
            e.preventDefault();
            $("#chat_right").attr("style","margin-top: 0px;");
        });
        $('#favorites').find(".more").on("click", function (e) {
            e.preventDefault();
            app.navigate("personal/" + self.sessionUser.id + "/social", true);
        });

    },
    bindEvents: function () {
        var self = this;
        var username, password;

        /*  navigation events  */
        //main nav
        
        this.$passwordInput = $("#login_password");
        this.$usernameInput = $("#login_username");
        this.$nmain = $('#navigate_main').on('click', function () {
            app.navigate("main/" + self.sessionUser.get('searchRepresentation'), true);
        });
        this.$logo = $('#logo').on('click', function () {
            app.navigate("front", true);
        });
        if (!app.sessionManager.hasSession()) {
            this.$lb = $("#loginBox");
            this.$lbt = $("#loginBoxToggler").on("click", function (e) {
                self.$lb.toggle();
                self.$usernameInput.trigger("focus");
            });
            $('#signup_button').on('click', function () {
                app.navigate("/register", {trigger: true, replace: true});
            });
            this.$wrong = $("#credentialWrong");
            this.$usernameInput.on("click", function (e){
                if  ($(this).val() === ("请输入邮箱") ) {
                    $(this).val("");
                }
                self.$wrong.hide();
            });
            this.$usernameInput.on("blur", function (e){
                if  ($(this).val() === ("") ) {
                    $(this).val("请输入邮箱");
                }
            });
            this.$passwordInput.on("focus", function (e){
                self.$wrong.hide();
            });
            this.$passwordInput.add(this.$usernameInput).on("keydown", function (e) {
                if (e.which == 13) {
                    self.login();
                }
            });
            $("#forget_password").on("click", function (e) {
                e.preventDefault();
                app.navigate("lost", true);
                self.$lb.toggle();
            });
            this.remember = $("#remember_password").on("click", function (e) {
                if ($(this).hasClass("checked")){
                    $(this).removeClass("checked");
                } else {
                    $(this).addClass("checked");
                }
            });
            $('#login_button').on('click', function () {
                self.login();
            });
            $(document).click(function (e)
            {
                var container = $("#loginBox");
                if (!container.is(e.target) // if the target of the click isn't the container...
                    && container.has(e.target).length === 0 && e.target.id !== "loginBoxToggler") // ... nor a descendant of the container
                {
                    container.hide();
                }
                e.stopPropagation();
            });
        } else {
            this.$npersonal = $('#navigate_personal').on('click', function () {
                app.navigate("personal/" + app.sessionManager.getUserId(), true);
            });
            this.$nfeedback = $('#navigate_feedBack').on('click', function () {
                app.navigate("post", true);
            });
            // this.$nusersearch = $("#navigate_usersearch").on('click', function () {
            //     app.navigate("finduser", true);
            // });
            //personal nav
            // this.$ndropdown.find('.dropdownTitleCheckAll').on('click', function () {
            //     app.navigate("personal/" + app.sessionManager.getUserId() + "/history", true);
            // });
            // this.$ldropdown.find('.dropdownTitleCheckAll').on('click', function () {
            //     app.navigate("letter", true);
            // });
            // this.$fdropdown.find('.dropdownTitleCheckAll').on('click', function () {
            //     app.navigate("personal/" + app.sessionManager.getUserId() + "/social", true);
            // });
            $('#logout').on('click', function (e) {
                e.preventDefault();
                self.logout();
            });
            $("#topBar-avatar").add("#topBar-myPage").on('click', function (e) {
                e.preventDefault();
                app.navigate("personal/" + self.sessionUser.id + "/message", true);
            });
            $("#topBar-utility").on('click', function (e) {
                e.preventDefault();
                app.navigate("personal/" + self.sessionUser.id + "/utility", true);
            });
        }
        
    },
    login: function () {
        var username = this.$usernameInput.val(), password = this.$passwordInput.val(), self = this;
        if (username !== "" && password !== "") {
            $('#login_button').val("登录中...").prop("disabled", true);
            app.sessionManager.login(username, password, {
                success: function (response) {
                    Constants.dLog("server login response: ");
                    Constants.dLog(response);
                    //fetching session, with async flag to true
                    app.sessionManager.fetchSession(true, {
                        success: function () {
                            app.userManager.sessionUser = app.sessionManager.getSessionUser();
                            app.letterView = new LetterView({
                                "toUserId": app.storage.getLastContact()
                            });
                            $("#chat").show();
                        },
                        error: function () {
                            Info.displayNotice("登录失败，请稍后再试");
                        }
                    });
                },
                error: function (response) {
                    self.$wrong.show().html(response.responseText || "服务器好像睡着了，请稍后再试");
                    $('#login_button').val("登 录").prop("disabled", false);
                    self.$passwordInput.val("");
                }
            });
        } else {
            //请输入密码
            self.$wrong.show().html("输入有误，请重新输入");
        }
    },
    logout: function () {
        app.sessionManager.logout({
            success: function (response) {
                Constants.dLog("server logout response: ");
                Constants.dLog(response);

                app.sessionManager.fetchSession(true, {
                    success: function () {
                        app.userManager.sessionUser = app.sessionManager.getSessionUser();
                        app.letterView.close();
                        location.reload();
                    },
                    error: function () {
                        Info.warn("Session fetch failed");
                        app.userManager.sessionUser = app.sessionManager.getSessionUser();
                    }
                });
            },

            error: function (status) {
                Info.displayNotice("登出失败，请稍后再试");
            }
        });
    },

    _clearAll: function () {
        if (app.sessionManager.hasSession()) {
            this.$passwordInput.off();
            this.$usernameInput.off();
            $('#signup_button').off();
            $('#login_button').off();
            this.$lbt.off();
            $("#remember_password").off();
        }
        else{
            this.$npersonal.off();
            this.$ndropdown.off();
            this.$ldropdown.off();
            this.$fdropdown.off();
        }
        this.$logo.off();
        this.$nmain.off();
        this.stopListening();
        this.unbind();
        $(this.el).empty();
    },

    close: function () {
        if (!this.isClosed) {
            this._clearAll();

            this.isClosed = true;
        }
    }
});
var HowItWorksView = Backbone.View.extend({

    el: "#content",
    currentPage: "driver",

    initialize: function (messageIdWrapper) {
        app.viewRegistration.register("HowItWorkds", this, true);
        _.bindAll(this, "render", "close");
        this.baseTemplate = _.template(tpl.get('howItWorks_base'));
        this.driverTemplate = _.template(tpl.get('howItWorks_driver'));
        this.passengerTemplate = _.template(tpl.get('howItWorks_passenger'));
        this.render();
        this.isClosed = false;
    },
    render: function () {
        this.$el.append(this.baseTemplate);
        this.$table = this.$el.find("table").append(this.driverTemplate);
        this.bindEvents();
    },
    bindEvents: function () {
        var that = this;
        $("#howItWorks_tabs").on("click", "li", function (e) {
            var clicked = $(e.target).attr("data-id");
            if ( clicked === that.currentPage ) {
                return;
            }
            that.currentPage = clicked;
            $("#howItWorks_tabs").children("li").removeClass("active");
            $("#howItWorks_tabs").find("span").remove();
            $(e.target).addClass("active").append("<span></span>");
            if (clicked === "driver") {
                that.$table.empty().append(that.driverTemplate);
            } else {
                that.$table.empty().append(that.passengerTemplate);
            }
        })
    },

    close: function () {
        if (!this.isClosed) {
            $("#howItWorks_tabs").off();
            this.$el.empty();
            this.isClosed = true;
        }
    }
});

var ServiceCenterView = Backbone.View.extend({
    el: "#content",
    initialize: function(params){
        this.currentTab = params ? params.tab || "about" : "about";
        this.isClosed = false;
        app.viewRegistration.register("serviceCenter", this, true);
        _.bindAll(this, "preRender", "render", "bindEvents", "close");
        this.baseTemplate = _.template(tpl.get('serviceCenter_base'));
        this.aboutUsPage = _.template(tpl.get('serviceCenter_aboutUs'));
        this.feedbackPage = _.template(tpl.get('serviceCenter_feedback'));
        this.termsPage = _.template(tpl.get('serviceCenter_terms'));
        this.termsZhPage = _.template(tpl.get('serviceCenter_terms_zh'));
        this.termsEnPage = _.template(tpl.get('serviceCenter_terms_en'));
        this.faqPage = _.template(tpl.get('serviceCenter_faq'));
        this.careerPage = _.template(tpl.get('serviceCenter_career'));
        this.preRender();
        this.render();
        this.bindEvents();
    },
    preRender: function() {
        this.$el.append(this.baseTemplate);
        this.$contentEl = $("#help_content");
        $("#serviceTab").find(".active").removeClass("active");
        $("dd[data-id="+this.currentTab+"]").addClass("active");
    },
    render: function (){
        if ($("#terms_lang").length){
            $("#terms_lang").off();
        }
        switch(this.currentTab){
            case "about":
                this.$contentEl.empty().append(this.aboutUsPage);
                break;
            case "faq":
                this.$contentEl.empty().append(this.faqPage);
                break;
            case "career":
                this.$contentEl.empty().append(this.careerPage);
                break;
            case "term":
                this.$contentEl.empty().append(this.termsPage);
                $("#terms_content").append(this.termsZhPage);
                var that = this;
                $("#terms_lang").on("click", "li", function (e) {
                    $(e.delegateTarget).find(".active").removeClass("active");
                    if ($(e.target).addClass("active").attr("data-id") === "zh") {
                        $("#terms_content").empty().append(that.termsZhPage);
                    } else {
                        $("#terms_content").empty().append(that.termsEnPage);
                    }
                });
                break;
            case "feedback":
                this.$contentEl.empty().append(this.feedbackPage);
                break;
            default:
            break;
        }
    },
    bindEvents: function (){
        var that = this;
        $("#serviceTab").on("click", "dd", function (e) {
            $("#terms_lang").off();
            $(e.delegateTarget).find(".active").removeClass("active");
            that.currentTab = $(e.target).addClass("active").attr("data-id");
            app.navigate("/service/"+that.currentTab)
            that.render();
        });
    },
    close: function (){
        if (!this.isClosed){
            $("#serviceTab").off();
            $("#terms_lang").off();
            this.$el.empty();
            this.isClosed = true;
        }
    }
});
//IE 8 fallBack for placeholders
$('input, textarea').placeholder();

var AppRouter = Backbone.Router.extend({

    routes: {
        "": "defaultRoute",

        "front": "front",
        "main": "main",
        "main/*encodedSearchkey": "encodedMain",

        "personal/:intendedUserId": "personal",
        "personal/:intendedUserId/": "personal",
        "personal/:intendedUserId/:personalViewState": "personalWithState",
        "personal/:intendedUserId/:personalViewState/*query": "personalWithState",

        "message/:messageId": "MessageDetail",
        "message/:messageId/": "MessageDetail",
        "message/:messageId/edit": "MessageEdit",
        "message/:messageId/edit/*editState": "MessageEdit",

        "post": "postMessage",
        "post/*postState": "postMessageWithState",

        "finduser": "finduser",
        "finduser/*encodedSearchkey": "finduser",

        "register": "register",
        "register/*registerState": "register",
        "lost/": "lost",
        "lost" : "lost",
        "forgetPassword/*token" : "lost",

        "emailActivation/*authKey": "emailActivation",
        "howitworks": "howItWorks",
        "service": "serviceCenter",
        "service/*tab": "serviceCenter",

        "*default" : "front"
    },

    initialize: function () {
        //initializing the registration service, now views should be hooked to DOM via registration
        this.viewRegistration = new ViewRegistrationService ();
        //initializing the storage services, some resuable user information will be persisted by local storage
        this.storage = new StorageService ();

        this.locationService = new LocationService();
        this.eventClearService = new EventClearService();

        //initializing all the data managers
        this.sessionManager = new SessionManager ();
        this.userManager = new UserManager (this.sessionManager);
        this.messageManager = new MessageManager (this.sessionManager, this.userManager);
        this.transactionManager = new TransactionManager (this.sessionManager, this.userManager);
        this.notificationManager = new NotificationManager (this.sessionManager, this.userManager);
        this.generalManager = new GeneralManager (this.sessionManager, this.userManager);
        this.letterManager = new LetterManager (this.sessionManager);
        this.socketManager = new SocketManager (this.sessionManager, {
            'newNotification': this.sessionManager,
            'newLetter': this.sessionManager,
            'broadcast': {
                'handleSocket': function (eventName, data) {
                    Info.alert(data);
                }
            }
        });
        //determine if the user has logged in or not
        this.sessionManager.fetchSession(false, {
            success: function () {
                Info.log("session fetch success");
            },
            error: function () {
                Info.log("session fetch failed, user not logged in");
            }
        });

        //intializing search query states & filter states, look into localStorage to find previous history
        this.searchQueryState = this.storage.getSearchQueryState();
        this.searchFilterState = this.storage.getSearchFilterState();

        this.userLocation = new UserLocation ();
        this.curDate = new Date ();
        this.searchResult = new Messages ();
        this.bindGlobalLinks();
    },
    bindGlobalLinks: function() {
        var that = this;
        $("#footer_service_link").on("click", 'a', function (e) {
            e.preventDefault();
            if (e.target.id === "footer_about") {
                that.navigate("service/about", true);
            } else if (e.target.id === "footer_feedback") {
                that.navigate("service/feedback", true);
            }
        });
    },
    defaultRoute: function () {
        //if login, procees to main/:id, if not, proceed to front
        if (this.sessionManager.hasSession()) {
            this.navigate("main", {trigger: true});
        } else {
            this.navigate("front", {trigger: true});
        }
    },

    front: function () {
        this.frontPageVew = new FrontPageView();
    },

    main: function () {
        this.mainPageVew = new MainPageView();
    },

    encodedMain: function (encodedSearchKey) {
        this.mainPageVew = new MainPageView ({
            "searchKey": encodedSearchKey
        });
        // this.advertisementView = new AdvertisementView ();
    },

    personal: function (intendedUserId) {
        this.navigate("personal/" + intendedUserId + "/" + Config.getDefaultPersonalViewState(), {trigger: true, replace: true});

    },

    personalWithState: function (intendedUserId, personalViewState, query) {
        if (!this.sessionManager.hasSession()) {
            this.navigate("front", {trigger: true, replace: true});
            return;
        }
        var id = Utilities.toInt(intendedUserId);
        if ( typeof id === 'number' && !isNaN(id)){
            if (!personalViewState || !Config.validatePersonalViewState(personalViewState)) {
                this.navigate("personal/" + intendedUserId + "/" + Config.getDefaultPersonalViewState() + "/" + query, {trigger: true, replace: true});
            } else {
                if (!this.personalView || this.personalView.isClosed || this.personalView.getCurrentUserId() !== Utilities.toInt(intendedUserId)) {
                    if (personalViewState === "utility" && this.sessionManager.getSessionUser().id !== Utilities.toInt(intendedUserId))
                        personalViewState = "history";
                    this.personalView = new PersonalView ({
                        'intendedUserId': intendedUserId,
                        'viewState': personalViewState,
                        "query": query
                    });
                } else {
                    this.personalView.switchChildView(personalViewState, query);
                }
            }
        } else {
            this.navigate("personal/" + this.sessionManager.getSessionUser().id + "/history", {trigger: true, replace: true});
        }
    },

    MessageDetail: function (messageId) {
        this.MessageDetailView = new MessageDetailView ({
            'messageId': messageId
        });
    },

    MessageEdit: function (messageId) {
        if (!this.sessionManager.hasSession()) {
            this.navigate("front", true);
            return;
        }
        this.navigate("message/" + messageId + "/edit");

        if (this.MessagePostView) {
            delete this.MessagePostView;
            this.MessagePostView = null;
        }
        if (!this.MessageEditView) {
            this.MessageEditView = new MessageEditView ({
                'messageId': messageId
            });
        } else {
            this.MessageEditView.prototype.isColsed = false;
        }
    },

    postMessage: function (postState) {
        this.navigate("post/" + Config.getDefaultDMPostState(), {trigger: true, replace: true});
    },

    postMessageWithState: function (postState) {
        if (!this.sessionManager.hasSession()) {
            this.navigate("front", true);
            return;
        }

        this.navigate("post/" + Config.getDefaultDMPostState(), {trigger: false, replace: true});
        //if the post session not valid, start new session, creat brand new view
        // if (!this.MessagePostView || this.MessagePostView.isClosed) {
        //     if (this.MessageEditView) {
        //         delete this.MessagePostView;
        //         this.MessageEditView.close();
        //         this.MessageEditView = null;
        //     }
            this.MessagePostView = new MessagePublishView ({
                "method": "post"
            });
        // }
        // //if the post session did not end, keep using the same post session
        // else {
        //     this.MessagePostView.render(Config.getPostStateStepIndex(postState));
        //     this.MessagePostView.isColsed = false;
        // }

    },

    finduser: function (encodedSearchkey) {
        var sr = new UserSearchRepresentation ();
        if (encodedSearchkey) {
            sr.castFromString(encodedSearchkey);
            this.userSearchResultView = new UserSearchResultView ({
                "encodedSearchKey": sr
            });
        } else {
            this.userSearchResultView = new UserSearchResultView ();
        }
    },

    register: function (registrationState) {
        if (this.sessionManager.hasSession()) {
            this.navigate("main", true);
            return;
        }
        if (this.registrationView && !this.registrationView.isClosed) {
            this.registrationView.state = registrationState;
            this.registrationView.render();
        } else {
            this.registrationView = new RegistrationView ({"state":registrationState});
        }
        
    },

    lost: function (token) {
        this.findPasswordView = new FindPasswordView({"token":token});
    },

    emailActivation: function (authKey) {
        var self = this;
        this.userManager.activateAccount(authKey, {
            success: function () {
                self.sessionManager.fetchSession(true, {
                    success: function () {
                        Info.log("session fetch success");
                        self.navigate("/main", true);
                    },
                    error: function () {
                        Info.log("session fetch failed, user not logged in");
                    }
                });
            },
            error: function (response) {
                Info.alert('Email验证失败');
            }
        });
    },
    howItWorks: function() {
        this.howItWorks = new HowItWorksView();
    },
    serviceCenter: function(tab) {
        if (!tab) {
            this.navigate("service/about", {replace: true});
        }
        this.serviceCenter = new ServiceCenterView({"tab":tab});
    }
});

//warning: tpl is the global object for templating services, do not name any variable "tpl" in any context in any files
tpl.loadTemplates(Constants.templateResources, function () {
    app = new AppRouter ();
    app.topBarView = new TopBarView ();
    Backbone.history.start();
    if (app.sessionManager.hasSession()) {
        // create letter view if use is logged in.
        app.letterView = new LetterView({
            "toUserId": app.storage.getLastContact()
        });
        $("#chat").show();
    }
});

