/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});


// Rivets.js + Sightglass.js
// version: 0.9.6
// author: Michael Richards
// license: MIT
(function(){function t(t,s,i,h){return new e(t,s,i,h)}function e(t,e,i,h){this.options=h||{},this.options.adapters=this.options.adapters||{},this.obj=t,this.keypath=e,this.callback=i,this.objectPath=[],this.update=this.update.bind(this),this.parse(),s(this.target=this.realize())&&this.set(!0,this.key,this.target,this.callback)}function s(t){return"object"==typeof t&&null!==t}function i(t){throw new Error("[sightglass] "+t)}t.adapters={},e.tokenize=function(t,e,s){var i,h,a=[],o={i:s,path:""};for(i=0;i<t.length;i++)h=t.charAt(i),~e.indexOf(h)?(a.push(o),o={i:h,path:""}):o.path+=h;return a.push(o),a},e.prototype.parse=function(){var s,h,a=this.interfaces();a.length||i("Must define at least one adapter interface."),~a.indexOf(this.keypath[0])?(s=this.keypath[0],h=this.keypath.substr(1)):("undefined"==typeof(s=this.options.root||t.root)&&i("Must define a default root adapter."),h=this.keypath),this.tokens=e.tokenize(h,a,s),this.key=this.tokens.pop()},e.prototype.realize=function(){var t,e=this.obj,i=!1;return this.tokens.forEach(function(h,a){s(e)?("undefined"!=typeof this.objectPath[a]?e!==(t=this.objectPath[a])&&(this.set(!1,h,t,this.update),this.set(!0,h,e,this.update),this.objectPath[a]=e):(this.set(!0,h,e,this.update),this.objectPath[a]=e),e=this.get(h,e)):(i===!1&&(i=a),(t=this.objectPath[a])&&this.set(!1,h,t,this.update))},this),i!==!1&&this.objectPath.splice(i),e},e.prototype.update=function(){var t,e;(t=this.realize())!==this.target&&(s(this.target)&&this.set(!1,this.key,this.target,this.callback),s(t)&&this.set(!0,this.key,t,this.callback),e=this.value(),this.target=t,(this.value()instanceof Function||this.value()!==e)&&this.callback())},e.prototype.value=function(){return s(this.target)?this.get(this.key,this.target):void 0},e.prototype.setValue=function(t){s(this.target)&&this.adapter(this.key).set(this.target,this.key.path,t)},e.prototype.get=function(t,e){return this.adapter(t).get(e,t.path)},e.prototype.set=function(t,e,s,i){var h=t?"observe":"unobserve";this.adapter(e)[h](s,e.path,i)},e.prototype.interfaces=function(){var e=Object.keys(this.options.adapters);return Object.keys(t.adapters).forEach(function(t){~e.indexOf(t)||e.push(t)}),e},e.prototype.adapter=function(e){return this.options.adapters[e.i]||t.adapters[e.i]},e.prototype.unobserve=function(){var t;this.tokens.forEach(function(e,s){(t=this.objectPath[s])&&this.set(!1,e,t,this.update)},this),s(this.target)&&this.set(!1,this.key,this.target,this.callback)},"undefined"!=typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd?define([],function(){return this.sightglass=t}):this.sightglass=t}).call(this);
(function(){var t,e,i,n,r,s=function(t,e){return function(){return t.apply(e,arguments)}},o=[].slice,u={}.hasOwnProperty,l=function(t,e){function i(){this.constructor=t}for(var n in e)u.call(e,n)&&(t[n]=e[n]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},h=[].indexOf||function(t){for(var e=0,i=this.length;i>e;e++)if(e in this&&this[e]===t)return e;return-1};t={options:["prefix","templateDelimiters","rootInterface","preloadData","handler","executeFunctions"],extensions:["binders","formatters","components","adapters"],"public":{binders:{},components:{},formatters:{},adapters:{},prefix:"rv",templateDelimiters:["{","}"],rootInterface:".",preloadData:!0,executeFunctions:!1,iterationAlias:function(t){return"%"+t+"%"},handler:function(t,e,i){return this.call(t,e,i.view.models)},configure:function(e){var i,n,r,s;null==e&&(e={});for(r in e)if(s=e[r],"binders"===r||"components"===r||"formatters"===r||"adapters"===r)for(n in s)i=s[n],t[r][n]=i;else t["public"][r]=s},bind:function(e,i,n){var r;return null==i&&(i={}),null==n&&(n={}),r=new t.View(e,i,n),r.bind(),r},init:function(e,i,n){var r,s,o;if(null==n&&(n={}),null==i&&(i=document.createElement("div")),e=t["public"].components[e],s=e.template.call(this,i),s instanceof HTMLElement){for(;i.firstChild;)i.removeChild(i.firstChild);i.appendChild(s)}else i.innerHTML=s;return r=e.initialize.call(this,i,n),o=new t.View(i,r),o.bind(),o}}},window.jQuery||window.$?(i=window.jQuery||window.$,r="on"in i.prototype?["on","off"]:["bind","unbind"],e=r[0],n=r[1],t.Util={bindEvent:function(t,n,r){return i(t)[e](n,r)},unbindEvent:function(t,e,r){return i(t)[n](e,r)},getInputValue:function(t){var e;return e=i(t),"checkbox"===e.attr("type")?e.is(":checked"):e.val()}}):t.Util={bindEvent:function(){return"addEventListener"in window?function(t,e,i){return t.addEventListener(e,i,!1)}:function(t,e,i){return t.attachEvent("on"+e,i)}}(),unbindEvent:function(){return"removeEventListener"in window?function(t,e,i){return t.removeEventListener(e,i,!1)}:function(t,e,i){return t.detachEvent("on"+e,i)}}(),getInputValue:function(t){var e,i,n,r;if("checkbox"===t.type)return t.checked;if("select-multiple"===t.type){for(r=[],i=0,n=t.length;n>i;i++)e=t[i],e.selected&&r.push(e.value);return r}return t.value}},t.TypeParser=function(){function t(){}return t.types={primitive:0,keypath:1},t.parse=function(t){return/^'.*'$|^".*"$/.test(t)?{type:this.types.primitive,value:t.slice(1,-1)}:"true"===t?{type:this.types.primitive,value:!0}:"false"===t?{type:this.types.primitive,value:!1}:"null"===t?{type:this.types.primitive,value:null}:"undefined"===t?{type:this.types.primitive,value:void 0}:""===t?{type:this.types.primitive,value:void 0}:isNaN(Number(t))===!1?{type:this.types.primitive,value:Number(t)}:{type:this.types.keypath,value:t}},t}(),t.TextTemplateParser=function(){function t(){}return t.types={text:0,binding:1},t.parse=function(t,e){var i,n,r,s,o,u,l;for(u=[],s=t.length,i=0,n=0;s>n;){if(i=t.indexOf(e[0],n),0>i){u.push({type:this.types.text,value:t.slice(n)});break}if(i>0&&i>n&&u.push({type:this.types.text,value:t.slice(n,i)}),n=i+e[0].length,i=t.indexOf(e[1],n),0>i){o=t.slice(n-e[1].length),r=u[u.length-1],(null!=r?r.type:void 0)===this.types.text?r.value+=o:u.push({type:this.types.text,value:o});break}l=t.slice(n,i).trim(),u.push({type:this.types.binding,value:l}),n=i+e[1].length}return u},t}(),t.View=function(){function e(e,i,n){var r,o,u,l,h,a,p,d,c,f,b,v,m;for(this.els=e,this.models=i,null==n&&(n={}),this.update=s(this.update,this),this.publish=s(this.publish,this),this.sync=s(this.sync,this),this.unbind=s(this.unbind,this),this.bind=s(this.bind,this),this.select=s(this.select,this),this.traverse=s(this.traverse,this),this.build=s(this.build,this),this.buildBinding=s(this.buildBinding,this),this.bindingRegExp=s(this.bindingRegExp,this),this.options=s(this.options,this),this.els.jquery||this.els instanceof Array||(this.els=[this.els]),c=t.extensions,h=0,p=c.length;p>h;h++){if(o=c[h],this[o]={},n[o]){f=n[o];for(r in f)u=f[r],this[o][r]=u}b=t["public"][o];for(r in b)u=b[r],null==(l=this[o])[r]&&(l[r]=u)}for(v=t.options,a=0,d=v.length;d>a;a++)o=v[a],this[o]=null!=(m=n[o])?m:t["public"][o];this.build()}return e.prototype.options=function(){var e,i,n,r,s;for(i={},s=t.extensions.concat(t.options),n=0,r=s.length;r>n;n++)e=s[n],i[e]=this[e];return i},e.prototype.bindingRegExp=function(){return new RegExp("^"+this.prefix+"-")},e.prototype.buildBinding=function(e,i,n,r){var s,o,u,l,h,a,p;return h={},p=function(){var t,e,i,n;for(i=r.match(/((?:'[^']*')*(?:(?:[^\|']*(?:'[^']*')+[^\|']*)+|[^\|]+))|^$/g),n=[],t=0,e=i.length;e>t;t++)a=i[t],n.push(a.trim());return n}(),s=function(){var t,e,i,n;for(i=p.shift().split("<"),n=[],t=0,e=i.length;e>t;t++)o=i[t],n.push(o.trim());return n}(),l=s.shift(),h.formatters=p,(u=s.shift())&&(h.dependencies=u.split(/\s+/)),this.bindings.push(new t[e](this,i,n,l,h))},e.prototype.build=function(){var e,i,n,r,s;for(this.bindings=[],i=function(e){return function(n){var r,s,o,u,l,h,a,p,d,c,f,b,v;if(3===n.nodeType){if(l=t.TextTemplateParser,(o=e.templateDelimiters)&&(p=l.parse(n.data,o)).length&&(1!==p.length||p[0].type!==l.types.text)){for(d=0,f=p.length;f>d;d++)a=p[d],h=document.createTextNode(a.value),n.parentNode.insertBefore(h,n),1===a.type&&e.buildBinding("TextBinding",h,null,a.value);n.parentNode.removeChild(n)}}else 1===n.nodeType&&(r=e.traverse(n));if(!r)for(v=function(){var t,e,i,r;for(i=n.childNodes,r=[],t=0,e=i.length;e>t;t++)u=i[t],r.push(u);return r}(),c=0,b=v.length;b>c;c++)s=v[c],i(s)}}(this),s=this.els,n=0,r=s.length;r>n;n++)e=s[n],i(e);this.bindings.sort(function(t,e){var i,n;return((null!=(i=e.binder)?i.priority:void 0)||0)-((null!=(n=t.binder)?n.priority:void 0)||0)})},e.prototype.traverse=function(e){var i,n,r,s,o,u,l,h,a,p,d,c,f,b,v,m;for(s=this.bindingRegExp(),o="SCRIPT"===e.nodeName||"STYLE"===e.nodeName,b=e.attributes,p=0,c=b.length;c>p;p++)if(i=b[p],s.test(i.name)){if(h=i.name.replace(s,""),!(r=this.binders[h])){v=this.binders;for(u in v)a=v[u],"*"!==u&&-1!==u.indexOf("*")&&(l=new RegExp("^"+u.replace(/\*/g,".+")+"$"),l.test(h)&&(r=a))}r||(r=this.binders["*"]),r.block&&(o=!0,n=[i])}for(m=n||e.attributes,d=0,f=m.length;f>d;d++)i=m[d],s.test(i.name)&&(h=i.name.replace(s,""),this.buildBinding("Binding",e,h,i.value));return o||(h=e.nodeName.toLowerCase(),this.components[h]&&!e._bound&&(this.bindings.push(new t.ComponentBinding(this,e,h)),o=!0)),o},e.prototype.select=function(t){var e,i,n,r,s;for(r=this.bindings,s=[],i=0,n=r.length;n>i;i++)e=r[i],t(e)&&s.push(e);return s},e.prototype.bind=function(){var t,e,i,n;for(n=this.bindings,e=0,i=n.length;i>e;e++)t=n[e],t.bind()},e.prototype.unbind=function(){var t,e,i,n;for(n=this.bindings,e=0,i=n.length;i>e;e++)t=n[e],t.unbind()},e.prototype.sync=function(){var t,e,i,n;for(n=this.bindings,e=0,i=n.length;i>e;e++)t=n[e],"function"==typeof t.sync&&t.sync()},e.prototype.publish=function(){var t,e,i,n;for(n=this.select(function(t){var e;return null!=(e=t.binder)?e.publishes:void 0}),e=0,i=n.length;i>e;e++)t=n[e],t.publish()},e.prototype.update=function(t){var e,i,n,r,s,o;null==t&&(t={});for(i in t)n=t[i],this.models[i]=n;for(o=this.bindings,r=0,s=o.length;s>r;r++)e=o[r],"function"==typeof e.update&&e.update(t)},e}(),t.Binding=function(){function e(t,e,i,n,r){this.view=t,this.el=e,this.type=i,this.keypath=n,this.options=null!=r?r:{},this.getValue=s(this.getValue,this),this.update=s(this.update,this),this.unbind=s(this.unbind,this),this.bind=s(this.bind,this),this.publish=s(this.publish,this),this.sync=s(this.sync,this),this.set=s(this.set,this),this.eventHandler=s(this.eventHandler,this),this.formattedValue=s(this.formattedValue,this),this.parseFormatterArguments=s(this.parseFormatterArguments,this),this.parseTarget=s(this.parseTarget,this),this.observe=s(this.observe,this),this.setBinder=s(this.setBinder,this),this.formatters=this.options.formatters||[],this.dependencies=[],this.formatterObservers={},this.model=void 0,this.setBinder()}return e.prototype.setBinder=function(){var t,e,i,n;if(!(this.binder=this.view.binders[this.type])){n=this.view.binders;for(t in n)i=n[t],"*"!==t&&-1!==t.indexOf("*")&&(e=new RegExp("^"+t.replace(/\*/g,".+")+"$"),e.test(this.type)&&(this.binder=i,this.args=new RegExp("^"+t.replace(/\*/g,"(.+)")+"$").exec(this.type),this.args.shift()))}return this.binder||(this.binder=this.view.binders["*"]),this.binder instanceof Function?this.binder={routine:this.binder}:void 0},e.prototype.observe=function(e,i,n){return t.sightglass(e,i,n,{root:this.view.rootInterface,adapters:this.view.adapters})},e.prototype.parseTarget=function(){var e;return e=t.TypeParser.parse(this.keypath),e.type===t.TypeParser.types.primitive?this.value=e.value:(this.observer=this.observe(this.view.models,this.keypath,this.sync),this.model=this.observer.target)},e.prototype.parseFormatterArguments=function(e,i){var n,r,s,o,u,l,h;for(e=function(){var i,n,s;for(s=[],i=0,n=e.length;n>i;i++)r=e[i],s.push(t.TypeParser.parse(r));return s}(),o=[],n=l=0,h=e.length;h>l;n=++l)r=e[n],o.push(r.type===t.TypeParser.types.primitive?r.value:((u=this.formatterObservers)[i]||(u[i]={}),(s=this.formatterObservers[i][n])?void 0:(s=this.observe(this.view.models,r.value,this.sync),this.formatterObservers[i][n]=s),s.value()));return o},e.prototype.formattedValue=function(t){var e,i,n,r,s,u,l,h,a;for(h=this.formatters,i=u=0,l=h.length;l>u;i=++u)n=h[i],e=n.match(/[^\s']+|'([^']|'[^\s])*'|"([^"]|"[^\s])*"/g),r=e.shift(),n=this.view.formatters[r],s=this.parseFormatterArguments(e,i),(null!=n?n.read:void 0)instanceof Function?t=(a=n.read).call.apply(a,[this.model,t].concat(o.call(s))):n instanceof Function&&(t=n.call.apply(n,[this.model,t].concat(o.call(s))));return t},e.prototype.eventHandler=function(t){var e,i;return i=(e=this).view.handler,function(n){return i.call(t,this,n,e)}},e.prototype.set=function(e){var i;return e=e instanceof Function&&!this.binder["function"]&&t["public"].executeFunctions?this.formattedValue(e.call(this.model)):this.formattedValue(e),null!=(i=this.binder.routine)?i.call(this,this.el,e):void 0},e.prototype.sync=function(){var t,e;return this.set(function(){var i,n,r,s,o,u,l;if(this.observer){if(this.model!==this.observer.target){for(o=this.dependencies,i=0,r=o.length;r>i;i++)e=o[i],e.unobserve();if(this.dependencies=[],null!=(this.model=this.observer.target)&&(null!=(u=this.options.dependencies)?u.length:void 0))for(l=this.options.dependencies,n=0,s=l.length;s>n;n++)t=l[n],e=this.observe(this.model,t,this.sync),this.dependencies.push(e)}return this.observer.value()}return this.value}.call(this))},e.prototype.publish=function(){var t,e,i,n,r,s,u,l,h,a,p,d,c;if(this.observer){for(l=this.getValue(this.el),s=this.formatters.length-1,p=this.formatters.slice(0).reverse(),i=h=0,a=p.length;a>h;i=++h)n=p[i],e=s-i,t=n.split(/\s+/),r=t.shift(),u=this.parseFormatterArguments(t,e),(null!=(d=this.view.formatters[r])?d.publish:void 0)&&(l=(c=this.view.formatters[r]).publish.apply(c,[l].concat(o.call(u))));return this.observer.setValue(l)}},e.prototype.bind=function(){var t,e,i,n,r,s,o;if(this.parseTarget(),null!=(r=this.binder.bind)&&r.call(this,this.el),null!=this.model&&(null!=(s=this.options.dependencies)?s.length:void 0))for(o=this.options.dependencies,i=0,n=o.length;n>i;i++)t=o[i],e=this.observe(this.model,t,this.sync),this.dependencies.push(e);return this.view.preloadData?this.sync():void 0},e.prototype.unbind=function(){var t,e,i,n,r,s,o,u,l,h;for(null!=(o=this.binder.unbind)&&o.call(this,this.el),null!=(u=this.observer)&&u.unobserve(),l=this.dependencies,r=0,s=l.length;s>r;r++)n=l[r],n.unobserve();this.dependencies=[],h=this.formatterObservers;for(i in h){e=h[i];for(t in e)n=e[t],n.unobserve()}return this.formatterObservers={}},e.prototype.update=function(t){var e,i;return null==t&&(t={}),this.model=null!=(e=this.observer)?e.target:void 0,null!=(i=this.binder.update)?i.call(this,t):void 0},e.prototype.getValue=function(e){return this.binder&&null!=this.binder.getValue?this.binder.getValue.call(this,e):t.Util.getInputValue(e)},e}(),t.ComponentBinding=function(e){function i(e,i,n){var r,o,u,l,a,p,d,c;for(this.view=e,this.el=i,this.type=n,this.unbind=s(this.unbind,this),this.bind=s(this.bind,this),this.locals=s(this.locals,this),this.component=this.view.components[this.type],this["static"]={},this.observers={},this.upstreamObservers={},o=e.bindingRegExp(),d=this.el.attributes||[],a=0,p=d.length;p>a;a++)r=d[a],o.test(r.name)||(u=this.camelCase(r.name),l=t.TypeParser.parse(r.value),h.call(null!=(c=this.component["static"])?c:[],u)>=0?this["static"][u]=r.value:l.type===t.TypeParser.types.primitive?this["static"][u]=l.value:this.observers[u]=r.value)}return l(i,e),i.prototype.sync=function(){},i.prototype.update=function(){},i.prototype.publish=function(){},i.prototype.locals=function(){var t,e,i,n,r,s;i={},r=this["static"];for(t in r)n=r[t],i[t]=n;s=this.observers;for(t in s)e=s[t],i[t]=e.value();return i},i.prototype.camelCase=function(t){return t.replace(/-([a-z])/g,function(t){return t[1].toUpperCase()})},i.prototype.bind=function(){var e,i,n,r,s,o,u,l,h,a,p,d,c,f,b,v,m,y,g,w;if(!this.bound){f=this.observers;for(i in f)n=f[i],this.observers[i]=this.observe(this.view.models,n,function(t){return function(e){return function(){return t.componentView.models[e]=t.observers[e].value()}}}(this).call(this,i));this.bound=!0}if(null!=this.componentView)this.componentView.bind();else{for(this.el.innerHTML=this.component.template.call(this),u=this.component.initialize.call(this,this.el,this.locals()),this.el._bound=!0,o={},b=t.extensions,a=0,d=b.length;d>a;a++){if(s=b[a],o[s]={},this.component[s]){v=this.component[s];for(e in v)l=v[e],o[s][e]=l}m=this.view[s];for(e in m)l=m[e],null==(h=o[s])[e]&&(h[e]=l)}for(y=t.options,p=0,c=y.length;c>p;p++)s=y[p],o[s]=null!=(g=this.component[s])?g:this.view[s];this.componentView=new t.View(Array.prototype.slice.call(this.el.childNodes),u,o),this.componentView.bind(),w=this.observers;for(i in w)r=w[i],this.upstreamObservers[i]=this.observe(this.componentView.models,i,function(t){return function(e,i){return function(){return i.setValue(t.componentView.models[e])}}}(this).call(this,i,r))}},i.prototype.unbind=function(){var t,e,i,n,r;i=this.upstreamObservers;for(t in i)e=i[t],e.unobserve();n=this.observers;for(t in n)e=n[t],e.unobserve();return null!=(r=this.componentView)?r.unbind.call(this):void 0},i}(t.Binding),t.TextBinding=function(t){function e(t,e,i,n,r){this.view=t,this.el=e,this.type=i,this.keypath=n,this.options=null!=r?r:{},this.sync=s(this.sync,this),this.formatters=this.options.formatters||[],this.dependencies=[],this.formatterObservers={}}return l(e,t),e.prototype.binder={routine:function(t,e){return t.data=null!=e?e:""}},e.prototype.sync=function(){return e.__super__.sync.apply(this,arguments)},e}(t.Binding),t["public"].binders.text=function(t,e){return null!=t.textContent?t.textContent=null!=e?e:"":t.innerText=null!=e?e:""},t["public"].binders.html=function(t,e){return t.innerHTML=null!=e?e:""},t["public"].binders.show=function(t,e){return t.style.display=e?"":"none"},t["public"].binders.hide=function(t,e){return t.style.display=e?"none":""},t["public"].binders.enabled=function(t,e){return t.disabled=!e},t["public"].binders.disabled=function(t,e){return t.disabled=!!e},t["public"].binders.checked={publishes:!0,priority:2e3,bind:function(e){return t.Util.bindEvent(e,"change",this.publish)},unbind:function(e){return t.Util.unbindEvent(e,"change",this.publish)},routine:function(t,e){var i;return t.checked="radio"===t.type?(null!=(i=t.value)?i.toString():void 0)===(null!=e?e.toString():void 0):!!e}},t["public"].binders.unchecked={publishes:!0,priority:2e3,bind:function(e){return t.Util.bindEvent(e,"change",this.publish)},unbind:function(e){return t.Util.unbindEvent(e,"change",this.publish)},routine:function(t,e){var i;return t.checked="radio"===t.type?(null!=(i=t.value)?i.toString():void 0)!==(null!=e?e.toString():void 0):!e}},t["public"].binders.value={publishes:!0,priority:3e3,bind:function(e){return"INPUT"!==e.tagName||"radio"!==e.type?(this.event="SELECT"===e.tagName?"change":"input",t.Util.bindEvent(e,this.event,this.publish)):void 0},unbind:function(e){return"INPUT"!==e.tagName||"radio"!==e.type?t.Util.unbindEvent(e,this.event,this.publish):void 0},routine:function(t,e){var n,r,s,o,u,l,a;if("INPUT"===t.tagName&&"radio"===t.type)return t.setAttribute("value",e);if(null!=window.jQuery){if(t=i(t),(null!=e?e.toString():void 0)!==(null!=(o=t.val())?o.toString():void 0))return t.val(null!=e?e:"")}else if("select-multiple"===t.type){if(null!=e){for(a=[],r=0,s=t.length;s>r;r++)n=t[r],a.push(n.selected=(u=n.value,h.call(e,u)>=0));return a}}else if((null!=e?e.toString():void 0)!==(null!=(l=t.value)?l.toString():void 0))return t.value=null!=e?e:""}},t["public"].binders["if"]={block:!0,priority:4e3,bind:function(t){var e,i;return null==this.marker?(e=[this.view.prefix,this.type].join("-").replace("--","-"),i=t.getAttribute(e),this.marker=document.createComment(" rivets: "+this.type+" "+i+" "),this.bound=!1,t.removeAttribute(e),t.parentNode.insertBefore(this.marker,t),t.parentNode.removeChild(t)):void 0},unbind:function(){return this.nested?(this.nested.unbind(),this.bound=!1):void 0},routine:function(e,i){var n,r,s,o;if(!!i==!this.bound){if(i){s={},o=this.view.models;for(n in o)r=o[n],s[n]=r;return(this.nested||(this.nested=new t.View(e,s,this.view.options()))).bind(),this.marker.parentNode.insertBefore(e,this.marker.nextSibling),this.bound=!0}return e.parentNode.removeChild(e),this.nested.unbind(),this.bound=!1}},update:function(t){var e;return null!=(e=this.nested)?e.update(t):void 0}},t["public"].binders.unless={block:!0,priority:4e3,bind:function(e){return t["public"].binders["if"].bind.call(this,e)},unbind:function(){return t["public"].binders["if"].unbind.call(this)},routine:function(e,i){return t["public"].binders["if"].routine.call(this,e,!i)},update:function(e){return t["public"].binders["if"].update.call(this,e)}},t["public"].binders["on-*"]={"function":!0,priority:1e3,unbind:function(e){return this.handler?t.Util.unbindEvent(e,this.args[0],this.handler):void 0},routine:function(e,i){return this.handler&&t.Util.unbindEvent(e,this.args[0],this.handler),t.Util.bindEvent(e,this.args[0],this.handler=this.eventHandler(i))}},t["public"].binders["each-*"]={block:!0,priority:4e3,bind:function(t){var e,i,n,r,s;if(null==this.marker)e=[this.view.prefix,this.type].join("-").replace("--","-"),this.marker=document.createComment(" rivets: "+this.type+" "),this.iterated=[],t.removeAttribute(e),t.parentNode.insertBefore(this.marker,t),t.parentNode.removeChild(t);else for(s=this.iterated,n=0,r=s.length;r>n;n++)i=s[n],i.bind()},unbind:function(){var t,e,i,n;if(null!=this.iterated)for(n=this.iterated,e=0,i=n.length;i>e;e++)t=n[e],t.unbind()},routine:function(e,i){var n,r,s,o,u,l,h,a,p,d,c,f,b,v,m,y,g,w,k,x;if(h=this.args[0],i=i||[],this.iterated.length>i.length)for(w=Array(this.iterated.length-i.length),f=0,m=w.length;m>f;f++)s=w[f],c=this.iterated.pop(),c.unbind(),this.marker.parentNode.removeChild(c.els[0]);for(o=b=0,y=i.length;y>b;o=++b)if(l=i[o],r={index:o},r[t["public"].iterationAlias(h)]=o,r[h]=l,null==this.iterated[o]){k=this.view.models;for(u in k)l=k[u],null==r[u]&&(r[u]=l);p=this.iterated.length?this.iterated[this.iterated.length-1].els[0]:this.marker,a=this.view.options(),a.preloadData=!0,d=e.cloneNode(!0),c=new t.View(d,r,a),c.bind(),this.iterated.push(c),this.marker.parentNode.insertBefore(d,p.nextSibling)}else this.iterated[o].models[h]!==l&&this.iterated[o].update(r);if("OPTION"===e.nodeName)for(x=this.view.bindings,v=0,g=x.length;g>v;v++)n=x[v],n.el===this.marker.parentNode&&"value"===n.type&&n.sync()},update:function(t){var e,i,n,r,s,o,u;e={};for(i in t)n=t[i],i!==this.args[0]&&(e[i]=n);for(u=this.iterated,s=0,o=u.length;o>s;s++)r=u[s],r.update(e)}},t["public"].binders["class-*"]=function(t,e){var i;return i=" "+t.className+" ",!e==(-1!==i.indexOf(" "+this.args[0]+" "))?t.className=e?""+t.className+" "+this.args[0]:i.replace(" "+this.args[0]+" "," ").trim():void 0},t["public"].binders["*"]=function(t,e){return null!=e?t.setAttribute(this.type,e):t.removeAttribute(this.type)},t["public"].formatters.call=function(){var t,e;return e=arguments[0],t=2<=arguments.length?o.call(arguments,1):[],e.call.apply(e,[this].concat(o.call(t)))},t["public"].adapters["."]={id:"_rv",counter:0,weakmap:{},weakReference:function(t){var e,i,n;return t.hasOwnProperty(this.id)||(e=this.counter++,Object.defineProperty(t,this.id,{value:e})),(i=this.weakmap)[n=t[this.id]]||(i[n]={callbacks:{}})},cleanupWeakReference:function(t,e){return Object.keys(t.callbacks).length||t.pointers&&Object.keys(t.pointers).length?void 0:delete this.weakmap[e]},stubFunction:function(t,e){var i,n,r;return n=t[e],i=this.weakReference(t),r=this.weakmap,t[e]=function(){var e,s,o,u,l,h,a,p,d,c;u=n.apply(t,arguments),a=i.pointers;for(o in a)for(s=a[o],c=null!=(p=null!=(d=r[o])?d.callbacks[s]:void 0)?p:[],l=0,h=c.length;h>l;l++)e=c[l],e();return u}},observeMutations:function(t,e,i){var n,r,s,o,u,l;if(Array.isArray(t)){if(s=this.weakReference(t),null==s.pointers)for(s.pointers={},r=["push","pop","shift","unshift","sort","reverse","splice"],u=0,l=r.length;l>u;u++)n=r[u],this.stubFunction(t,n);if(null==(o=s.pointers)[e]&&(o[e]=[]),h.call(s.pointers[e],i)<0)return s.pointers[e].push(i)}},unobserveMutations:function(t,e,i){var n,r,s;return Array.isArray(t)&&null!=t[this.id]&&(r=this.weakmap[t[this.id]])&&(s=r.pointers[e])?((n=s.indexOf(i))>=0&&s.splice(n,1),s.length||delete r.pointers[e],this.cleanupWeakReference(r,t[this.id])):void 0},observe:function(t,e,i){var n,r,s;return n=this.weakReference(t).callbacks,null==n[e]&&(n[e]=[],r=Object.getOwnPropertyDescriptor(t,e),(null!=r?r.get:void 0)||(null!=r?r.set:void 0)||(s=t[e],Object.defineProperty(t,e,{enumerable:!0,get:function(){return s},set:function(i){return function(r){var o,u,l,a,p;if(r!==s&&(i.unobserveMutations(s,t[i.id],e),s=r,u=i.weakmap[t[i.id]])){if(n=u.callbacks,n[e])for(p=n[e].slice(),l=0,a=p.length;a>l;l++)o=p[l],h.call(n[e],o)>=0&&o();return i.observeMutations(r,t[i.id],e)}}}(this)}))),h.call(n[e],i)<0&&n[e].push(i),this.observeMutations(t[e],t[this.id],e)},unobserve:function(t,e,i){var n,r,s;return(s=this.weakmap[t[this.id]])&&(n=s.callbacks[e])?((r=n.indexOf(i))>=0&&(n.splice(r,1),n.length||(delete s.callbacks[e],this.unobserveMutations(t[e],t[this.id],e))),this.cleanupWeakReference(s,t[this.id])):void 0},get:function(t,e){return t[e]},set:function(t,e,i){return t[e]=i}},t.factory=function(e){return t.sightglass=e,t["public"]._=t,t["public"]},"object"==typeof("undefined"!=typeof module&&null!==module?module.exports:void 0)?module.exports=t.factory(require("sightglass")):"function"==typeof define&&define.amd?define(["sightglass"],function(e){return this.rivets=t.factory(e)}):this.rivets=t.factory(sightglass)}).call(this);

//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return sd.apply(null,arguments)}function b(a){sd=a}function c(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function d(a){return null!=a&&"[object Object]"===Object.prototype.toString.call(a)}function e(a){var b;for(b in a)return!1;return!0}function f(a){return void 0===a}function g(a){return"number"==typeof a||"[object Number]"===Object.prototype.toString.call(a)}function h(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function i(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function j(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function k(a,b){for(var c in b)j(b,c)&&(a[c]=b[c]);return j(b,"toString")&&(a.toString=b.toString),j(b,"valueOf")&&(a.valueOf=b.valueOf),a}function l(a,b,c,d){return sb(a,b,c,d,!0).utc()}function m(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function n(a){return null==a._pf&&(a._pf=m()),a._pf}function o(a){if(null==a._isValid){var b=n(a),c=ud.call(b.parsedDateParts,function(a){return null!=a}),d=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.invalidWeekday&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated&&(!b.meridiem||b.meridiem&&c);if(a._strict&&(d=d&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour),null!=Object.isFrozen&&Object.isFrozen(a))return d;a._isValid=d}return a._isValid}function p(a){var b=l(NaN);return null!=a?k(n(b),a):n(b).userInvalidated=!0,b}function q(a,b){var c,d,e;if(f(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),f(b._i)||(a._i=b._i),f(b._f)||(a._f=b._f),f(b._l)||(a._l=b._l),f(b._strict)||(a._strict=b._strict),f(b._tzm)||(a._tzm=b._tzm),f(b._isUTC)||(a._isUTC=b._isUTC),f(b._offset)||(a._offset=b._offset),f(b._pf)||(a._pf=n(b)),f(b._locale)||(a._locale=b._locale),vd.length>0)for(c=0;c<vd.length;c++)d=vd[c],e=b[d],f(e)||(a[d]=e);return a}function r(b){q(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),wd===!1&&(wd=!0,a.updateOffset(this),wd=!1)}function s(a){return a instanceof r||null!=a&&null!=a._isAMomentObject}function t(a){return a<0?Math.ceil(a)||0:Math.floor(a)}function u(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=t(b)),c}function v(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;d<e;d++)(c&&a[d]!==b[d]||!c&&u(a[d])!==u(b[d]))&&g++;return g+f}function w(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function x(b,c){var d=!0;return k(function(){if(null!=a.deprecationHandler&&a.deprecationHandler(null,b),d){for(var e,f=[],g=0;g<arguments.length;g++){if(e="","object"==typeof arguments[g]){e+="\n["+g+"] ";for(var h in arguments[0])e+=h+": "+arguments[0][h]+", ";e=e.slice(0,-2)}else e=arguments[g];f.push(e)}w(b+"\nArguments: "+Array.prototype.slice.call(f).join("")+"\n"+(new Error).stack),d=!1}return c.apply(this,arguments)},c)}function y(b,c){null!=a.deprecationHandler&&a.deprecationHandler(b,c),xd[b]||(w(c),xd[b]=!0)}function z(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function A(a){var b,c;for(c in a)b=a[c],z(b)?this[c]=b:this["_"+c]=b;this._config=a,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function B(a,b){var c,e=k({},a);for(c in b)j(b,c)&&(d(a[c])&&d(b[c])?(e[c]={},k(e[c],a[c]),k(e[c],b[c])):null!=b[c]?e[c]=b[c]:delete e[c]);for(c in a)j(a,c)&&!j(b,c)&&d(a[c])&&(e[c]=k({},e[c]));return e}function C(a){null!=a&&this.set(a)}function D(a,b,c){var d=this._calendar[a]||this._calendar.sameElse;return z(d)?d.call(b,c):d}function E(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function F(){return this._invalidDate}function G(a){return this._ordinal.replace("%d",a)}function H(a,b,c,d){var e=this._relativeTime[c];return z(e)?e(a,b,c,d):e.replace(/%d/i,a)}function I(a,b){var c=this._relativeTime[a>0?"future":"past"];return z(c)?c(b):c.replace(/%s/i,b)}function J(a,b){var c=a.toLowerCase();Hd[c]=Hd[c+"s"]=Hd[b]=a}function K(a){return"string"==typeof a?Hd[a]||Hd[a.toLowerCase()]:void 0}function L(a){var b,c,d={};for(c in a)j(a,c)&&(b=K(c),b&&(d[b]=a[c]));return d}function M(a,b){Id[a]=b}function N(a){var b=[];for(var c in a)b.push({unit:c,priority:Id[c]});return b.sort(function(a,b){return a.priority-b.priority}),b}function O(b,c){return function(d){return null!=d?(Q(this,b,d),a.updateOffset(this,c),this):P(this,b)}}function P(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function Q(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}function R(a){return a=K(a),z(this[a])?this[a]():this}function S(a,b){if("object"==typeof a){a=L(a);for(var c=N(a),d=0;d<c.length;d++)this[c[d].unit](a[c[d].unit])}else if(a=K(a),z(this[a]))return this[a](b);return this}function T(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}function U(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Md[a]=e),b&&(Md[b[0]]=function(){return T(e.apply(this,arguments),b[1],b[2])}),c&&(Md[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function V(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function W(a){var b,c,d=a.match(Jd);for(b=0,c=d.length;b<c;b++)Md[d[b]]?d[b]=Md[d[b]]:d[b]=V(d[b]);return function(b){var e,f="";for(e=0;e<c;e++)f+=z(d[e])?d[e].call(b,a):d[e];return f}}function X(a,b){return a.isValid()?(b=Y(b,a.localeData()),Ld[b]=Ld[b]||W(b),Ld[b](a)):a.localeData().invalidDate()}function Y(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Kd.lastIndex=0;d>=0&&Kd.test(a);)a=a.replace(Kd,c),Kd.lastIndex=0,d-=1;return a}function Z(a,b,c){ce[a]=z(b)?b:function(a,d){return a&&c?c:b}}function $(a,b){return j(ce,a)?ce[a](b._strict,b._locale):new RegExp(_(a))}function _(a){return aa(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function aa(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function ba(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),g(b)&&(d=function(a,c){c[b]=u(a)}),c=0;c<a.length;c++)de[a[c]]=d}function ca(a,b){ba(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function da(a,b,c){null!=b&&j(de,a)&&de[a](b,c._a,c,a)}function ea(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function fa(a,b){return a?c(this._months)?this._months[a.month()]:this._months[(this._months.isFormat||oe).test(b)?"format":"standalone"][a.month()]:c(this._months)?this._months:this._months.standalone}function ga(a,b){return a?c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[oe.test(b)?"format":"standalone"][a.month()]:c(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function ha(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],d=0;d<12;++d)f=l([2e3,d]),this._shortMonthsParse[d]=this.monthsShort(f,"").toLocaleLowerCase(),this._longMonthsParse[d]=this.months(f,"").toLocaleLowerCase();return c?"MMM"===b?(e=ne.call(this._shortMonthsParse,g),e!==-1?e:null):(e=ne.call(this._longMonthsParse,g),e!==-1?e:null):"MMM"===b?(e=ne.call(this._shortMonthsParse,g),e!==-1?e:(e=ne.call(this._longMonthsParse,g),e!==-1?e:null)):(e=ne.call(this._longMonthsParse,g),e!==-1?e:(e=ne.call(this._shortMonthsParse,g),e!==-1?e:null))}function ia(a,b,c){var d,e,f;if(this._monthsParseExact)return ha.call(this,a,b,c);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;d<12;d++){if(e=l([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function ja(a,b){var c;if(!a.isValid())return a;if("string"==typeof b)if(/^\d+$/.test(b))b=u(b);else if(b=a.localeData().monthsParse(b),!g(b))return a;return c=Math.min(a.date(),ea(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a}function ka(b){return null!=b?(ja(this,b),a.updateOffset(this,!0),this):P(this,"Month")}function la(){return ea(this.year(),this.month())}function ma(a){return this._monthsParseExact?(j(this,"_monthsRegex")||oa.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):(j(this,"_monthsShortRegex")||(this._monthsShortRegex=re),this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex)}function na(a){return this._monthsParseExact?(j(this,"_monthsRegex")||oa.call(this),a?this._monthsStrictRegex:this._monthsRegex):(j(this,"_monthsRegex")||(this._monthsRegex=se),this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex)}function oa(){function a(a,b){return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;b<12;b++)c=l([2e3,b]),d.push(this.monthsShort(c,"")),e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(d.sort(a),e.sort(a),f.sort(a),b=0;b<12;b++)d[b]=aa(d[b]),e[b]=aa(e[b]);for(b=0;b<24;b++)f[b]=aa(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}function pa(a){return qa(a)?366:365}function qa(a){return a%4===0&&a%100!==0||a%400===0}function ra(){return qa(this.year())}function sa(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return a<100&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function ta(a){var b=new Date(Date.UTC.apply(null,arguments));return a<100&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}function ua(a,b,c){var d=7+b-c,e=(7+ta(a,0,d).getUTCDay()-b)%7;return-e+d-1}function va(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=ua(a,d,e),j=1+7*(b-1)+h+i;return j<=0?(f=a-1,g=pa(f)+j):j>pa(a)?(f=a+1,g=j-pa(a)):(f=a,g=j),{year:f,dayOfYear:g}}function wa(a,b,c){var d,e,f=ua(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return g<1?(e=a.year()-1,d=g+xa(e,b,c)):g>xa(a.year(),b,c)?(d=g-xa(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function xa(a,b,c){var d=ua(a,b,c),e=ua(a+1,b,c);return(pa(a)-d+e)/7}function ya(a){return wa(a,this._week.dow,this._week.doy).week}function za(){return this._week.dow}function Aa(){return this._week.doy}function Ba(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function Ca(a){var b=wa(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function Da(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Ea(a,b){return"string"==typeof a?b.weekdaysParse(a)%7||7:isNaN(a)?null:a}function Fa(a,b){return a?c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]:c(this._weekdays)?this._weekdays:this._weekdays.standalone}function Ga(a){return a?this._weekdaysShort[a.day()]:this._weekdaysShort}function Ha(a){return a?this._weekdaysMin[a.day()]:this._weekdaysMin}function Ia(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],d=0;d<7;++d)f=l([2e3,1]).day(d),this._minWeekdaysParse[d]=this.weekdaysMin(f,"").toLocaleLowerCase(),this._shortWeekdaysParse[d]=this.weekdaysShort(f,"").toLocaleLowerCase(),this._weekdaysParse[d]=this.weekdays(f,"").toLocaleLowerCase();return c?"dddd"===b?(e=ne.call(this._weekdaysParse,g),e!==-1?e:null):"ddd"===b?(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:null):(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:null):"dddd"===b?(e=ne.call(this._weekdaysParse,g),e!==-1?e:(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:null))):"ddd"===b?(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:(e=ne.call(this._weekdaysParse,g),e!==-1?e:(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:null))):(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:(e=ne.call(this._weekdaysParse,g),e!==-1?e:(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:null)))}function Ja(a,b,c){var d,e,f;if(this._weekdaysParseExact)return Ia.call(this,a,b,c);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;d<7;d++){if(e=l([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}function Ka(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Da(a,this.localeData()),this.add(a-b,"d")):b}function La(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function Ma(a){if(!this.isValid())return null!=a?this:NaN;if(null!=a){var b=Ea(a,this.localeData());return this.day(this.day()%7?b:b-7)}return this.day()||7}function Na(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):(j(this,"_weekdaysRegex")||(this._weekdaysRegex=ye),this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex)}function Oa(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(j(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=ze),this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Pa(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(j(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Ae),this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Qa(){function a(a,b){return b.length-a.length}var b,c,d,e,f,g=[],h=[],i=[],j=[];for(b=0;b<7;b++)c=l([2e3,1]).day(b),d=this.weekdaysMin(c,""),e=this.weekdaysShort(c,""),f=this.weekdays(c,""),g.push(d),h.push(e),i.push(f),j.push(d),j.push(e),j.push(f);for(g.sort(a),h.sort(a),i.sort(a),j.sort(a),b=0;b<7;b++)h[b]=aa(h[b]),i[b]=aa(i[b]),j[b]=aa(j[b]);this._weekdaysRegex=new RegExp("^("+j.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+h.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+g.join("|")+")","i")}function Ra(){return this.hours()%12||12}function Sa(){return this.hours()||24}function Ta(a,b){U(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function Ua(a,b){return b._meridiemParse}function Va(a){return"p"===(a+"").toLowerCase().charAt(0)}function Wa(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Xa(a){return a?a.toLowerCase().replace("_","-"):a}function Ya(a){for(var b,c,d,e,f=0;f<a.length;){for(e=Xa(a[f]).split("-"),b=e.length,c=Xa(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=Za(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&v(e,c,!0)>=b-1)break;b--}f++}return null}function Za(a){var b=null;if(!Fe[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=Be._abbr,require("./locale/"+a),$a(b)}catch(a){}return Fe[a]}function $a(a,b){var c;return a&&(c=f(b)?bb(a):_a(a,b),c&&(Be=c)),Be._abbr}function _a(a,b){if(null!==b){var c=Ee;if(b.abbr=a,null!=Fe[a])y("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),c=Fe[a]._config;else if(null!=b.parentLocale){if(null==Fe[b.parentLocale])return Ge[b.parentLocale]||(Ge[b.parentLocale]=[]),Ge[b.parentLocale].push({name:a,config:b}),null;c=Fe[b.parentLocale]._config}return Fe[a]=new C(B(c,b)),Ge[a]&&Ge[a].forEach(function(a){_a(a.name,a.config)}),$a(a),Fe[a]}return delete Fe[a],null}function ab(a,b){if(null!=b){var c,d=Ee;null!=Fe[a]&&(d=Fe[a]._config),b=B(d,b),c=new C(b),c.parentLocale=Fe[a],Fe[a]=c,$a(a)}else null!=Fe[a]&&(null!=Fe[a].parentLocale?Fe[a]=Fe[a].parentLocale:null!=Fe[a]&&delete Fe[a]);return Fe[a]}function bb(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return Be;if(!c(a)){if(b=Za(a))return b;a=[a]}return Ya(a)}function cb(){return Ad(Fe)}function db(a){var b,c=a._a;return c&&n(a).overflow===-2&&(b=c[fe]<0||c[fe]>11?fe:c[ge]<1||c[ge]>ea(c[ee],c[fe])?ge:c[he]<0||c[he]>24||24===c[he]&&(0!==c[ie]||0!==c[je]||0!==c[ke])?he:c[ie]<0||c[ie]>59?ie:c[je]<0||c[je]>59?je:c[ke]<0||c[ke]>999?ke:-1,n(a)._overflowDayOfYear&&(b<ee||b>ge)&&(b=ge),n(a)._overflowWeeks&&b===-1&&(b=le),n(a)._overflowWeekday&&b===-1&&(b=me),n(a).overflow=b),a}function eb(a){var b,c,d,e,f,g,h=a._i,i=He.exec(h)||Ie.exec(h);if(i){for(n(a).iso=!0,b=0,c=Ke.length;b<c;b++)if(Ke[b][1].exec(i[1])){e=Ke[b][0],d=Ke[b][2]!==!1;break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=Le.length;b<c;b++)if(Le[b][1].exec(i[3])){f=(i[2]||" ")+Le[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!Je.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),lb(a)}else a._isValid=!1}function fb(a){var b,c,d,e,f,g,h,i,j={" GMT":" +0000"," EDT":" -0400"," EST":" -0500"," CDT":" -0500"," CST":" -0600"," MDT":" -0600"," MST":" -0700"," PDT":" -0700"," PST":" -0800"},k="YXWVUTSRQPONZABCDEFGHIKLM";if(b=a._i.replace(/\([^\)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s|\s$/g,""),c=Ne.exec(b)){if(d=c[1]?"ddd"+(5===c[1].length?", ":" "):"",e="D MMM "+(c[2].length>10?"YYYY ":"YY "),f="HH:mm"+(c[4]?":ss":""),c[1]){var l=new Date(c[2]),m=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][l.getDay()];if(c[1].substr(0,3)!==m)return n(a).weekdayMismatch=!0,void(a._isValid=!1)}switch(c[5].length){case 2:0===i?h=" +0000":(i=k.indexOf(c[5][1].toUpperCase())-12,h=(i<0?" -":" +")+(""+i).replace(/^-?/,"0").match(/..$/)[0]+"00");break;case 4:h=j[c[5]];break;default:h=j[" GMT"]}c[5]=h,a._i=c.splice(1).join(""),g=" ZZ",a._f=d+e+f+g,lb(a),n(a).rfc2822=!0}else a._isValid=!1}function gb(b){var c=Me.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(eb(b),void(b._isValid===!1&&(delete b._isValid,fb(b),b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b)))))}function hb(a,b,c){return null!=a?a:null!=b?b:c}function ib(b){var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}function jb(a){var b,c,d,e,f=[];if(!a._d){for(d=ib(a),a._w&&null==a._a[ge]&&null==a._a[fe]&&kb(a),null!=a._dayOfYear&&(e=hb(a._a[ee],d[ee]),(a._dayOfYear>pa(e)||0===a._dayOfYear)&&(n(a)._overflowDayOfYear=!0),c=ta(e,0,a._dayOfYear),a._a[fe]=c.getUTCMonth(),a._a[ge]=c.getUTCDate()),b=0;b<3&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;b<7;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[he]&&0===a._a[ie]&&0===a._a[je]&&0===a._a[ke]&&(a._nextDay=!0,a._a[he]=0),a._d=(a._useUTC?ta:sa).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[he]=24)}}function kb(a){var b,c,d,e,f,g,h,i;if(b=a._w,null!=b.GG||null!=b.W||null!=b.E)f=1,g=4,c=hb(b.GG,a._a[ee],wa(tb(),1,4).year),d=hb(b.W,1),e=hb(b.E,1),(e<1||e>7)&&(i=!0);else{f=a._locale._week.dow,g=a._locale._week.doy;var j=wa(tb(),f,g);c=hb(b.gg,a._a[ee],j.year),d=hb(b.w,j.week),null!=b.d?(e=b.d,(e<0||e>6)&&(i=!0)):null!=b.e?(e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):e=f}d<1||d>xa(c,f,g)?n(a)._overflowWeeks=!0:null!=i?n(a)._overflowWeekday=!0:(h=va(c,d,e,f,g),a._a[ee]=h.year,a._dayOfYear=h.dayOfYear)}function lb(b){if(b._f===a.ISO_8601)return void eb(b);if(b._f===a.RFC_2822)return void fb(b);b._a=[],n(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=Y(b._f,b._locale).match(Jd)||[],c=0;c<e.length;c++)f=e[c],d=(h.match($(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&n(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),Md[f]?(d?n(b).empty=!1:n(b).unusedTokens.push(f),da(f,d,b)):b._strict&&!d&&n(b).unusedTokens.push(f);n(b).charsLeftOver=i-j,h.length>0&&n(b).unusedInput.push(h),b._a[he]<=12&&n(b).bigHour===!0&&b._a[he]>0&&(n(b).bigHour=void 0),n(b).parsedDateParts=b._a.slice(0),n(b).meridiem=b._meridiem,b._a[he]=mb(b._locale,b._a[he],b._meridiem),jb(b),db(b)}function mb(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&b<12&&(b+=12),d||12!==b||(b=0),b):b}function nb(a){var b,c,d,e,f;if(0===a._f.length)return n(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=q({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],lb(b),o(b)&&(f+=n(b).charsLeftOver,f+=10*n(b).unusedTokens.length,n(b).score=f,(null==d||f<d)&&(d=f,c=b));k(a,c||b)}function ob(a){if(!a._d){var b=L(a._i);a._a=i([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),jb(a)}}function pb(a){var b=new r(db(qb(a)));return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function qb(a){var b=a._i,d=a._f;return a._locale=a._locale||bb(a._l),null===b||void 0===d&&""===b?p({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),s(b)?new r(db(b)):(h(b)?a._d=b:c(d)?nb(a):d?lb(a):rb(a),o(a)||(a._d=null),a))}function rb(b){var e=b._i;f(e)?b._d=new Date(a.now()):h(e)?b._d=new Date(e.valueOf()):"string"==typeof e?gb(b):c(e)?(b._a=i(e.slice(0),function(a){return parseInt(a,10)}),jb(b)):d(e)?ob(b):g(e)?b._d=new Date(e):a.createFromInputFallback(b)}function sb(a,b,f,g,h){var i={};return f!==!0&&f!==!1||(g=f,f=void 0),(d(a)&&e(a)||c(a)&&0===a.length)&&(a=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=h,i._l=f,i._i=a,i._f=b,i._strict=g,pb(i)}function tb(a,b,c,d){return sb(a,b,c,d,!1)}function ub(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return tb();for(d=b[0],e=1;e<b.length;++e)b[e].isValid()&&!b[e][a](d)||(d=b[e]);return d}function vb(){var a=[].slice.call(arguments,0);return ub("isBefore",a)}function wb(){var a=[].slice.call(arguments,0);return ub("isAfter",a)}function xb(a){for(var b in a)if(Re.indexOf(b)===-1||null!=a[b]&&isNaN(a[b]))return!1;for(var c=!1,d=0;d<Re.length;++d)if(a[Re[d]]){if(c)return!1;parseFloat(a[Re[d]])!==u(a[Re[d]])&&(c=!0)}return!0}function yb(){return this._isValid}function zb(){return Sb(NaN)}function Ab(a){var b=L(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._isValid=xb(b),this._milliseconds=+k+1e3*j+6e4*i+1e3*h*60*60,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=bb(),this._bubble()}function Bb(a){return a instanceof Ab}function Cb(a){return a<0?Math.round(-1*a)*-1:Math.round(a)}function Db(a,b){U(a,0,0,function(){var a=this.utcOffset(),c="+";return a<0&&(a=-a,c="-"),c+T(~~(a/60),2)+b+T(~~a%60,2)})}function Eb(a,b){var c=(b||"").match(a);if(null===c)return null;var d=c[c.length-1]||[],e=(d+"").match(Se)||["-",0,0],f=+(60*e[1])+u(e[2]);return 0===f?0:"+"===e[0]?f:-f}function Fb(b,c){var d,e;return c._isUTC?(d=c.clone(),e=(s(b)||h(b)?b.valueOf():tb(b).valueOf())-d.valueOf(),d._d.setTime(d._d.valueOf()+e),a.updateOffset(d,!1),d):tb(b).local()}function Gb(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Hb(b,c,d){var e,f=this._offset||0;if(!this.isValid())return null!=b?this:NaN;if(null!=b){if("string"==typeof b){if(b=Eb(_d,b),null===b)return this}else Math.abs(b)<16&&!d&&(b=60*b);return!this._isUTC&&c&&(e=Gb(this)),this._offset=b,this._isUTC=!0,null!=e&&this.add(e,"m"),f!==b&&(!c||this._changeInProgress?Xb(this,Sb(b-f,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?f:Gb(this)}function Ib(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Jb(a){return this.utcOffset(0,a)}function Kb(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Gb(this),"m")),this}function Lb(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var a=Eb($d,this._i);null!=a?this.utcOffset(a):this.utcOffset(0,!0)}return this}function Mb(a){return!!this.isValid()&&(a=a?tb(a).utcOffset():0,(this.utcOffset()-a)%60===0)}function Nb(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ob(){if(!f(this._isDSTShifted))return this._isDSTShifted;var a={};if(q(a,this),a=qb(a),a._a){var b=a._isUTC?l(a._a):tb(a._a);this._isDSTShifted=this.isValid()&&v(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Pb(){return!!this.isValid()&&!this._isUTC}function Qb(){return!!this.isValid()&&this._isUTC}function Rb(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Sb(a,b){var c,d,e,f=a,h=null;return Bb(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:g(a)?(f={},b?f[b]=a:f.milliseconds=a):(h=Te.exec(a))?(c="-"===h[1]?-1:1,f={y:0,d:u(h[ge])*c,h:u(h[he])*c,m:u(h[ie])*c,s:u(h[je])*c,ms:u(Cb(1e3*h[ke]))*c}):(h=Ue.exec(a))?(c="-"===h[1]?-1:1,f={y:Tb(h[2],c),M:Tb(h[3],c),w:Tb(h[4],c),d:Tb(h[5],c),h:Tb(h[6],c),m:Tb(h[7],c),s:Tb(h[8],c)}):null==f?f={}:"object"==typeof f&&("from"in f||"to"in f)&&(e=Vb(tb(f.from),tb(f.to)),f={},f.ms=e.milliseconds,f.M=e.months),d=new Ab(f),Bb(a)&&j(a,"_locale")&&(d._locale=a._locale),d}function Tb(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function Ub(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function Vb(a,b){var c;return a.isValid()&&b.isValid()?(b=Fb(b,a),a.isBefore(b)?c=Ub(a,b):(c=Ub(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}function Wb(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(y(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Sb(c,d),Xb(this,e,a),this}}function Xb(b,c,d,e){var f=c._milliseconds,g=Cb(c._days),h=Cb(c._months);b.isValid()&&(e=null==e||e,f&&b._d.setTime(b._d.valueOf()+f*d),g&&Q(b,"Date",P(b,"Date")+g*d),h&&ja(b,P(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function Yb(a,b){var c=a.diff(b,"days",!0);return c<-6?"sameElse":c<-1?"lastWeek":c<0?"lastDay":c<1?"sameDay":c<2?"nextDay":c<7?"nextWeek":"sameElse"}function Zb(b,c){var d=b||tb(),e=Fb(d,this).startOf("day"),f=a.calendarFormat(this,e)||"sameElse",g=c&&(z(c[f])?c[f].call(this,d):c[f]);return this.format(g||this.localeData().calendar(f,this,tb(d)))}function $b(){return new r(this)}function _b(a,b){var c=s(a)?a:tb(a);return!(!this.isValid()||!c.isValid())&&(b=K(f(b)?"millisecond":b),"millisecond"===b?this.valueOf()>c.valueOf():c.valueOf()<this.clone().startOf(b).valueOf())}function ac(a,b){var c=s(a)?a:tb(a);return!(!this.isValid()||!c.isValid())&&(b=K(f(b)?"millisecond":b),"millisecond"===b?this.valueOf()<c.valueOf():this.clone().endOf(b).valueOf()<c.valueOf())}function bc(a,b,c,d){return d=d||"()",("("===d[0]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===d[1]?this.isBefore(b,c):!this.isAfter(b,c))}function cc(a,b){var c,d=s(a)?a:tb(a);return!(!this.isValid()||!d.isValid())&&(b=K(b||"millisecond"),"millisecond"===b?this.valueOf()===d.valueOf():(c=d.valueOf(),this.clone().startOf(b).valueOf()<=c&&c<=this.clone().endOf(b).valueOf()))}function dc(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function ec(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function fc(a,b,c){var d,e,f,g;return this.isValid()?(d=Fb(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=K(b),"year"===b||"month"===b||"quarter"===b?(g=gc(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:t(g)):NaN):NaN}function gc(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return b-f<0?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)||0}function hc(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function ic(){if(!this.isValid())return null;var a=this.clone().utc();return a.year()<0||a.year()>9999?X(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):z(Date.prototype.toISOString)?this.toDate().toISOString():X(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function jc(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var a="moment",b="";this.isLocal()||(a=0===this.utcOffset()?"moment.utc":"moment.parseZone",b="Z");var c="["+a+'("]',d=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",e="-MM-DD[T]HH:mm:ss.SSS",f=b+'[")]';return this.format(c+d+e+f)}function kc(b){b||(b=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var c=X(this,b);return this.localeData().postformat(c)}function lc(a,b){return this.isValid()&&(s(a)&&a.isValid()||tb(a).isValid())?Sb({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function mc(a){return this.from(tb(),a)}function nc(a,b){return this.isValid()&&(s(a)&&a.isValid()||tb(a).isValid())?Sb({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function oc(a){return this.to(tb(),a)}function pc(a){var b;return void 0===a?this._locale._abbr:(b=bb(a),null!=b&&(this._locale=b),this)}function qc(){return this._locale}function rc(a){switch(a=K(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function sc(a){return a=K(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms"))}function tc(){return this._d.valueOf()-6e4*(this._offset||0)}function uc(){return Math.floor(this.valueOf()/1e3)}function vc(){return new Date(this.valueOf())}function wc(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function xc(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function yc(){return this.isValid()?this.toISOString():null}function zc(){return o(this)}function Ac(){
return k({},n(this))}function Bc(){return n(this).overflow}function Cc(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Dc(a,b){U(0,[a,a.length],0,b)}function Ec(a){return Ic.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Fc(a){return Ic.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Gc(){return xa(this.year(),1,4)}function Hc(){var a=this.localeData()._week;return xa(this.year(),a.dow,a.doy)}function Ic(a,b,c,d,e){var f;return null==a?wa(this,d,e).year:(f=xa(a,d,e),b>f&&(b=f),Jc.call(this,a,b,c,d,e))}function Jc(a,b,c,d,e){var f=va(a,b,c,d,e),g=ta(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}function Kc(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Lc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function Mc(a,b){b[ke]=u(1e3*("0."+a))}function Nc(){return this._isUTC?"UTC":""}function Oc(){return this._isUTC?"Coordinated Universal Time":""}function Pc(a){return tb(1e3*a)}function Qc(){return tb.apply(null,arguments).parseZone()}function Rc(a){return a}function Sc(a,b,c,d){var e=bb(),f=l().set(d,b);return e[c](f,a)}function Tc(a,b,c){if(g(a)&&(b=a,a=void 0),a=a||"",null!=b)return Sc(a,b,c,"month");var d,e=[];for(d=0;d<12;d++)e[d]=Sc(a,d,c,"month");return e}function Uc(a,b,c,d){"boolean"==typeof a?(g(b)&&(c=b,b=void 0),b=b||""):(b=a,c=b,a=!1,g(b)&&(c=b,b=void 0),b=b||"");var e=bb(),f=a?e._week.dow:0;if(null!=c)return Sc(b,(c+f)%7,d,"day");var h,i=[];for(h=0;h<7;h++)i[h]=Sc(b,(h+f)%7,d,"day");return i}function Vc(a,b){return Tc(a,b,"months")}function Wc(a,b){return Tc(a,b,"monthsShort")}function Xc(a,b,c){return Uc(a,b,c,"weekdays")}function Yc(a,b,c){return Uc(a,b,c,"weekdaysShort")}function Zc(a,b,c){return Uc(a,b,c,"weekdaysMin")}function $c(){var a=this._data;return this._milliseconds=df(this._milliseconds),this._days=df(this._days),this._months=df(this._months),a.milliseconds=df(a.milliseconds),a.seconds=df(a.seconds),a.minutes=df(a.minutes),a.hours=df(a.hours),a.months=df(a.months),a.years=df(a.years),this}function _c(a,b,c,d){var e=Sb(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function ad(a,b){return _c(this,a,b,1)}function bd(a,b){return _c(this,a,b,-1)}function cd(a){return a<0?Math.floor(a):Math.ceil(a)}function dd(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;return f>=0&&g>=0&&h>=0||f<=0&&g<=0&&h<=0||(f+=864e5*cd(fd(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=t(f/1e3),i.seconds=a%60,b=t(a/60),i.minutes=b%60,c=t(b/60),i.hours=c%24,g+=t(c/24),e=t(ed(g)),h+=e,g-=cd(fd(e)),d=t(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function ed(a){return 4800*a/146097}function fd(a){return 146097*a/4800}function gd(a){if(!this.isValid())return NaN;var b,c,d=this._milliseconds;if(a=K(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+ed(b),"month"===a?c:c/12;switch(b=this._days+Math.round(fd(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function hd(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*u(this._months/12):NaN}function id(a){return function(){return this.as(a)}}function jd(a){return a=K(a),this.isValid()?this[a+"s"]():NaN}function kd(a){return function(){return this.isValid()?this._data[a]:NaN}}function ld(){return t(this.days()/7)}function md(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function nd(a,b,c){var d=Sb(a).abs(),e=uf(d.as("s")),f=uf(d.as("m")),g=uf(d.as("h")),h=uf(d.as("d")),i=uf(d.as("M")),j=uf(d.as("y")),k=e<=vf.ss&&["s",e]||e<vf.s&&["ss",e]||f<=1&&["m"]||f<vf.m&&["mm",f]||g<=1&&["h"]||g<vf.h&&["hh",g]||h<=1&&["d"]||h<vf.d&&["dd",h]||i<=1&&["M"]||i<vf.M&&["MM",i]||j<=1&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,md.apply(null,k)}function od(a){return void 0===a?uf:"function"==typeof a&&(uf=a,!0)}function pd(a,b){return void 0!==vf[a]&&(void 0===b?vf[a]:(vf[a]=b,"s"===a&&(vf.ss=b-1),!0))}function qd(a){if(!this.isValid())return this.localeData().invalidDate();var b=this.localeData(),c=nd(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function rd(){if(!this.isValid())return this.localeData().invalidDate();var a,b,c,d=wf(this._milliseconds)/1e3,e=wf(this._days),f=wf(this._months);a=t(d/60),b=t(a/60),d%=60,a%=60,c=t(f/12),f%=12;var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(m<0?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var sd,td;td=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;d<c;d++)if(d in b&&a.call(this,b[d],d,b))return!0;return!1};var ud=td,vd=a.momentProperties=[],wd=!1,xd={};a.suppressDeprecationWarnings=!1,a.deprecationHandler=null;var yd;yd=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)j(a,b)&&c.push(b);return c};var zd,Ad=yd,Bd={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Cd={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Dd="Invalid date",Ed="%d",Fd=/\d{1,2}/,Gd={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Hd={},Id={},Jd=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Kd=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ld={},Md={},Nd=/\d/,Od=/\d\d/,Pd=/\d{3}/,Qd=/\d{4}/,Rd=/[+-]?\d{6}/,Sd=/\d\d?/,Td=/\d\d\d\d?/,Ud=/\d\d\d\d\d\d?/,Vd=/\d{1,3}/,Wd=/\d{1,4}/,Xd=/[+-]?\d{1,6}/,Yd=/\d+/,Zd=/[+-]?\d+/,$d=/Z|[+-]\d\d:?\d\d/gi,_d=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[+-]?\d+(\.\d{1,3})?/,be=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,ce={},de={},ee=0,fe=1,ge=2,he=3,ie=4,je=5,ke=6,le=7,me=8;zd=Array.prototype.indexOf?Array.prototype.indexOf:function(a){var b;for(b=0;b<this.length;++b)if(this[b]===a)return b;return-1};var ne=zd;U("M",["MM",2],"Mo",function(){return this.month()+1}),U("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),U("MMMM",0,0,function(a){return this.localeData().months(this,a)}),J("month","M"),M("month",8),Z("M",Sd),Z("MM",Sd,Od),Z("MMM",function(a,b){return b.monthsShortRegex(a)}),Z("MMMM",function(a,b){return b.monthsRegex(a)}),ba(["M","MM"],function(a,b){b[fe]=u(a)-1}),ba(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[fe]=e:n(c).invalidMonth=a});var oe=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,pe="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),qe="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),re=be,se=be;U("Y",0,0,function(){var a=this.year();return a<=9999?""+a:"+"+a}),U(0,["YY",2],0,function(){return this.year()%100}),U(0,["YYYY",4],0,"year"),U(0,["YYYYY",5],0,"year"),U(0,["YYYYYY",6,!0],0,"year"),J("year","y"),M("year",1),Z("Y",Zd),Z("YY",Sd,Od),Z("YYYY",Wd,Qd),Z("YYYYY",Xd,Rd),Z("YYYYYY",Xd,Rd),ba(["YYYYY","YYYYYY"],ee),ba("YYYY",function(b,c){c[ee]=2===b.length?a.parseTwoDigitYear(b):u(b)}),ba("YY",function(b,c){c[ee]=a.parseTwoDigitYear(b)}),ba("Y",function(a,b){b[ee]=parseInt(a,10)}),a.parseTwoDigitYear=function(a){return u(a)+(u(a)>68?1900:2e3)};var te=O("FullYear",!0);U("w",["ww",2],"wo","week"),U("W",["WW",2],"Wo","isoWeek"),J("week","w"),J("isoWeek","W"),M("week",5),M("isoWeek",5),Z("w",Sd),Z("ww",Sd,Od),Z("W",Sd),Z("WW",Sd,Od),ca(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=u(a)});var ue={dow:0,doy:6};U("d",0,"do","day"),U("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),U("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),U("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),U("e",0,0,"weekday"),U("E",0,0,"isoWeekday"),J("day","d"),J("weekday","e"),J("isoWeekday","E"),M("day",11),M("weekday",11),M("isoWeekday",11),Z("d",Sd),Z("e",Sd),Z("E",Sd),Z("dd",function(a,b){return b.weekdaysMinRegex(a)}),Z("ddd",function(a,b){return b.weekdaysShortRegex(a)}),Z("dddd",function(a,b){return b.weekdaysRegex(a)}),ca(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);null!=e?b.d=e:n(c).invalidWeekday=a}),ca(["d","e","E"],function(a,b,c,d){b[d]=u(a)});var ve="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),we="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),xe="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ye=be,ze=be,Ae=be;U("H",["HH",2],0,"hour"),U("h",["hh",2],0,Ra),U("k",["kk",2],0,Sa),U("hmm",0,0,function(){return""+Ra.apply(this)+T(this.minutes(),2)}),U("hmmss",0,0,function(){return""+Ra.apply(this)+T(this.minutes(),2)+T(this.seconds(),2)}),U("Hmm",0,0,function(){return""+this.hours()+T(this.minutes(),2)}),U("Hmmss",0,0,function(){return""+this.hours()+T(this.minutes(),2)+T(this.seconds(),2)}),Ta("a",!0),Ta("A",!1),J("hour","h"),M("hour",13),Z("a",Ua),Z("A",Ua),Z("H",Sd),Z("h",Sd),Z("k",Sd),Z("HH",Sd,Od),Z("hh",Sd,Od),Z("kk",Sd,Od),Z("hmm",Td),Z("hmmss",Ud),Z("Hmm",Td),Z("Hmmss",Ud),ba(["H","HH"],he),ba(["k","kk"],function(a,b,c){var d=u(a);b[he]=24===d?0:d}),ba(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),ba(["h","hh"],function(a,b,c){b[he]=u(a),n(c).bigHour=!0}),ba("hmm",function(a,b,c){var d=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d)),n(c).bigHour=!0}),ba("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d,2)),b[je]=u(a.substr(e)),n(c).bigHour=!0}),ba("Hmm",function(a,b,c){var d=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d))}),ba("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d,2)),b[je]=u(a.substr(e))});var Be,Ce=/[ap]\.?m?\.?/i,De=O("Hours",!0),Ee={calendar:Bd,longDateFormat:Cd,invalidDate:Dd,ordinal:Ed,dayOfMonthOrdinalParse:Fd,relativeTime:Gd,months:pe,monthsShort:qe,week:ue,weekdays:ve,weekdaysMin:xe,weekdaysShort:we,meridiemParse:Ce},Fe={},Ge={},He=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ie=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Je=/Z|[+-]\d\d(?::?\d\d)?/,Ke=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Le=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Me=/^\/?Date\((\-?\d+)/i,Ne=/^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;a.createFromInputFallback=x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),a.ISO_8601=function(){},a.RFC_2822=function(){};var Oe=x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=tb.apply(null,arguments);return this.isValid()&&a.isValid()?a<this?this:a:p()}),Pe=x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=tb.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:p()}),Qe=function(){return Date.now?Date.now():+new Date},Re=["year","quarter","month","week","day","hour","minute","second","millisecond"];Db("Z",":"),Db("ZZ",""),Z("Z",_d),Z("ZZ",_d),ba(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Eb(_d,a)});var Se=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var Te=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Ue=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Sb.fn=Ab.prototype,Sb.invalid=zb;var Ve=Wb(1,"add"),We=Wb(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Xe=x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});U(0,["gg",2],0,function(){return this.weekYear()%100}),U(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Dc("gggg","weekYear"),Dc("ggggg","weekYear"),Dc("GGGG","isoWeekYear"),Dc("GGGGG","isoWeekYear"),J("weekYear","gg"),J("isoWeekYear","GG"),M("weekYear",1),M("isoWeekYear",1),Z("G",Zd),Z("g",Zd),Z("GG",Sd,Od),Z("gg",Sd,Od),Z("GGGG",Wd,Qd),Z("gggg",Wd,Qd),Z("GGGGG",Xd,Rd),Z("ggggg",Xd,Rd),ca(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=u(a)}),ca(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),U("Q",0,"Qo","quarter"),J("quarter","Q"),M("quarter",7),Z("Q",Nd),ba("Q",function(a,b){b[fe]=3*(u(a)-1)}),U("D",["DD",2],"Do","date"),J("date","D"),M("date",9),Z("D",Sd),Z("DD",Sd,Od),Z("Do",function(a,b){return a?b._dayOfMonthOrdinalParse||b._ordinalParse:b._dayOfMonthOrdinalParseLenient}),ba(["D","DD"],ge),ba("Do",function(a,b){b[ge]=u(a.match(Sd)[0],10)});var Ye=O("Date",!0);U("DDD",["DDDD",3],"DDDo","dayOfYear"),J("dayOfYear","DDD"),M("dayOfYear",4),Z("DDD",Vd),Z("DDDD",Pd),ba(["DDD","DDDD"],function(a,b,c){c._dayOfYear=u(a)}),U("m",["mm",2],0,"minute"),J("minute","m"),M("minute",14),Z("m",Sd),Z("mm",Sd,Od),ba(["m","mm"],ie);var Ze=O("Minutes",!1);U("s",["ss",2],0,"second"),J("second","s"),M("second",15),Z("s",Sd),Z("ss",Sd,Od),ba(["s","ss"],je);var $e=O("Seconds",!1);U("S",0,0,function(){return~~(this.millisecond()/100)}),U(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),U(0,["SSS",3],0,"millisecond"),U(0,["SSSS",4],0,function(){return 10*this.millisecond()}),U(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),U(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),U(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),U(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),U(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),J("millisecond","ms"),M("millisecond",16),Z("S",Vd,Nd),Z("SS",Vd,Od),Z("SSS",Vd,Pd);var _e;for(_e="SSSS";_e.length<=9;_e+="S")Z(_e,Yd);for(_e="S";_e.length<=9;_e+="S")ba(_e,Mc);var af=O("Milliseconds",!1);U("z",0,0,"zoneAbbr"),U("zz",0,0,"zoneName");var bf=r.prototype;bf.add=Ve,bf.calendar=Zb,bf.clone=$b,bf.diff=fc,bf.endOf=sc,bf.format=kc,bf.from=lc,bf.fromNow=mc,bf.to=nc,bf.toNow=oc,bf.get=R,bf.invalidAt=Bc,bf.isAfter=_b,bf.isBefore=ac,bf.isBetween=bc,bf.isSame=cc,bf.isSameOrAfter=dc,bf.isSameOrBefore=ec,bf.isValid=zc,bf.lang=Xe,bf.locale=pc,bf.localeData=qc,bf.max=Pe,bf.min=Oe,bf.parsingFlags=Ac,bf.set=S,bf.startOf=rc,bf.subtract=We,bf.toArray=wc,bf.toObject=xc,bf.toDate=vc,bf.toISOString=ic,bf.inspect=jc,bf.toJSON=yc,bf.toString=hc,bf.unix=uc,bf.valueOf=tc,bf.creationData=Cc,bf.year=te,bf.isLeapYear=ra,bf.weekYear=Ec,bf.isoWeekYear=Fc,bf.quarter=bf.quarters=Kc,bf.month=ka,bf.daysInMonth=la,bf.week=bf.weeks=Ba,bf.isoWeek=bf.isoWeeks=Ca,bf.weeksInYear=Hc,bf.isoWeeksInYear=Gc,bf.date=Ye,bf.day=bf.days=Ka,bf.weekday=La,bf.isoWeekday=Ma,bf.dayOfYear=Lc,bf.hour=bf.hours=De,bf.minute=bf.minutes=Ze,bf.second=bf.seconds=$e,bf.millisecond=bf.milliseconds=af,bf.utcOffset=Hb,bf.utc=Jb,bf.local=Kb,bf.parseZone=Lb,bf.hasAlignedHourOffset=Mb,bf.isDST=Nb,bf.isLocal=Pb,bf.isUtcOffset=Qb,bf.isUtc=Rb,bf.isUTC=Rb,bf.zoneAbbr=Nc,bf.zoneName=Oc,bf.dates=x("dates accessor is deprecated. Use date instead.",Ye),bf.months=x("months accessor is deprecated. Use month instead",ka),bf.years=x("years accessor is deprecated. Use year instead",te),bf.zone=x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Ib),bf.isDSTShifted=x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Ob);var cf=C.prototype;cf.calendar=D,cf.longDateFormat=E,cf.invalidDate=F,cf.ordinal=G,cf.preparse=Rc,cf.postformat=Rc,cf.relativeTime=H,cf.pastFuture=I,cf.set=A,cf.months=fa,cf.monthsShort=ga,cf.monthsParse=ia,cf.monthsRegex=na,cf.monthsShortRegex=ma,cf.week=ya,cf.firstDayOfYear=Aa,cf.firstDayOfWeek=za,cf.weekdays=Fa,cf.weekdaysMin=Ha,cf.weekdaysShort=Ga,cf.weekdaysParse=Ja,cf.weekdaysRegex=Na,cf.weekdaysShortRegex=Oa,cf.weekdaysMinRegex=Pa,cf.isPM=Va,cf.meridiem=Wa,$a("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===u(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=x("moment.lang is deprecated. Use moment.locale instead.",$a),a.langData=x("moment.langData is deprecated. Use moment.localeData instead.",bb);var df=Math.abs,ef=id("ms"),ff=id("s"),gf=id("m"),hf=id("h"),jf=id("d"),kf=id("w"),lf=id("M"),mf=id("y"),nf=kd("milliseconds"),of=kd("seconds"),pf=kd("minutes"),qf=kd("hours"),rf=kd("days"),sf=kd("months"),tf=kd("years"),uf=Math.round,vf={ss:44,s:45,m:45,h:22,d:26,M:11},wf=Math.abs,xf=Ab.prototype;return xf.isValid=yb,xf.abs=$c,xf.add=ad,xf.subtract=bd,xf.as=gd,xf.asMilliseconds=ef,xf.asSeconds=ff,xf.asMinutes=gf,xf.asHours=hf,xf.asDays=jf,xf.asWeeks=kf,xf.asMonths=lf,xf.asYears=mf,xf.valueOf=hd,xf._bubble=dd,xf.get=jd,xf.milliseconds=nf,xf.seconds=of,xf.minutes=pf,xf.hours=qf,xf.days=rf,xf.weeks=ld,xf.months=sf,xf.years=tf,xf.humanize=qd,xf.toISOString=rd,xf.toString=rd,xf.toJSON=rd,xf.locale=pc,xf.localeData=qc,xf.toIsoString=x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",rd),xf.lang=Xe,U("X",0,0,"unix"),U("x",0,0,"valueOf"),Z("x",Zd),Z("X",ae),ba("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),ba("x",function(a,b,c){c._d=new Date(u(a))}),a.version="2.18.1",b(tb),a.fn=bf,a.min=vb,a.max=wb,a.now=Qe,a.utc=l,a.unix=Pc,a.months=Vc,a.isDate=h,a.locale=$a,a.invalid=p,a.duration=Sb,a.isMoment=s,a.weekdays=Xc,a.parseZone=Qc,a.localeData=bb,a.isDuration=Bb,a.monthsShort=Wc,a.weekdaysMin=Zc,a.defineLocale=_a,a.updateLocale=ab,a.locales=cb,a.weekdaysShort=Yc,a.normalizeUnits=K,a.relativeTimeRounding=od,a.relativeTimeThreshold=pd,a.calendarFormat=Yb,a.prototype=bf,a});

/**
 * Swiper 3.4.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2017, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: March 10, 2017
 */
!function(){"use strict";var e,a=function(t,s){function r(e){return Math.floor(e)}function i(){var e=x.params.autoplay,a=x.slides.eq(x.activeIndex);a.attr("data-swiper-autoplay")&&(e=a.attr("data-swiper-autoplay")||x.params.autoplay),x.autoplayTimeoutId=setTimeout(function(){x.params.loop?(x.fixLoop(),x._slideNext(),x.emit("onAutoplay",x)):x.isEnd?s.autoplayStopOnLast?x.stopAutoplay():(x._slideTo(0),x.emit("onAutoplay",x)):(x._slideNext(),x.emit("onAutoplay",x))},e)}function n(a,t){var s=e(a.target);if(!s.is(t))if("string"==typeof t)s=s.parents(t);else if(t.nodeType){var r;return s.parents().each(function(e,a){a===t&&(r=t)}),r?t:void 0}if(0!==s.length)return s[0]}function o(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,s=new t(function(e){e.forEach(function(e){x.onResize(!0),x.emit("onObserverUpdate",x,e)})});s.observe(e,{attributes:void 0===a.attributes||a.attributes,childList:void 0===a.childList||a.childList,characterData:void 0===a.characterData||a.characterData}),x.observers.push(s)}function l(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!x.params.allowSwipeToNext&&(x.isHorizontal()&&39===a||!x.isHorizontal()&&40===a))return!1;if(!x.params.allowSwipeToPrev&&(x.isHorizontal()&&37===a||!x.isHorizontal()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(x.container.parents("."+x.params.slideClass).length>0&&0===x.container.parents("."+x.params.slideActiveClass).length)return;var s={left:window.pageXOffset,top:window.pageYOffset},r=window.innerWidth,i=window.innerHeight,n=x.container.offset();x.rtl&&(n.left=n.left-x.container[0].scrollLeft);for(var o=[[n.left,n.top],[n.left+x.width,n.top],[n.left,n.top+x.height],[n.left+x.width,n.top+x.height]],l=0;l<o.length;l++){var p=o[l];p[0]>=s.left&&p[0]<=s.left+r&&p[1]>=s.top&&p[1]<=s.top+i&&(t=!0)}if(!t)return}x.isHorizontal()?(37!==a&&39!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!x.rtl||37===a&&x.rtl)&&x.slideNext(),(37===a&&!x.rtl||39===a&&x.rtl)&&x.slidePrev()):(38!==a&&40!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&x.slideNext(),38===a&&x.slidePrev()),x.emit("onKeyPress",x,a)}}function p(e){var a=0,t=0,s=0,r=0;return"detail"in e&&(t=e.detail),"wheelDelta"in e&&(t=-e.wheelDelta/120),"wheelDeltaY"in e&&(t=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(a=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(a=t,t=0),s=10*a,r=10*t,"deltaY"in e&&(r=e.deltaY),"deltaX"in e&&(s=e.deltaX),(s||r)&&e.deltaMode&&(1===e.deltaMode?(s*=40,r*=40):(s*=800,r*=800)),s&&!a&&(a=s<1?-1:1),r&&!t&&(t=r<1?-1:1),{spinX:a,spinY:t,pixelX:s,pixelY:r}}function d(e){e.originalEvent&&(e=e.originalEvent);var a=0,t=x.rtl?-1:1,s=p(e);if(x.params.mousewheelForceToAxis)if(x.isHorizontal()){if(!(Math.abs(s.pixelX)>Math.abs(s.pixelY)))return;a=s.pixelX*t}else{if(!(Math.abs(s.pixelY)>Math.abs(s.pixelX)))return;a=s.pixelY}else a=Math.abs(s.pixelX)>Math.abs(s.pixelY)?-s.pixelX*t:-s.pixelY;if(0!==a){if(x.params.mousewheelInvert&&(a=-a),x.params.freeMode){var r=x.getWrapperTranslate()+a*x.params.mousewheelSensitivity,i=x.isBeginning,n=x.isEnd;if(r>=x.minTranslate()&&(r=x.minTranslate()),r<=x.maxTranslate()&&(r=x.maxTranslate()),x.setWrapperTransition(0),x.setWrapperTranslate(r),x.updateProgress(),x.updateActiveIndex(),(!i&&x.isBeginning||!n&&x.isEnd)&&x.updateClasses(),x.params.freeModeSticky?(clearTimeout(x.mousewheel.timeout),x.mousewheel.timeout=setTimeout(function(){x.slideReset()},300)):x.params.lazyLoading&&x.lazy&&x.lazy.load(),x.emit("onScroll",x,e),x.params.autoplay&&x.params.autoplayDisableOnInteraction&&x.stopAutoplay(),0===r||r===x.maxTranslate())return}else{if((new window.Date).getTime()-x.mousewheel.lastScrollTime>60)if(a<0)if(x.isEnd&&!x.params.loop||x.animating){if(x.params.mousewheelReleaseOnEdges)return!0}else x.slideNext(),x.emit("onScroll",x,e);else if(x.isBeginning&&!x.params.loop||x.animating){if(x.params.mousewheelReleaseOnEdges)return!0}else x.slidePrev(),x.emit("onScroll",x,e);x.mousewheel.lastScrollTime=(new window.Date).getTime()}return e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function m(a,t){a=e(a);var s,r,i,n=x.rtl?-1:1;s=a.attr("data-swiper-parallax")||"0",r=a.attr("data-swiper-parallax-x"),i=a.attr("data-swiper-parallax-y"),r||i?(r=r||"0",i=i||"0"):x.isHorizontal()?(r=s,i="0"):(i=s,r="0"),r=r.indexOf("%")>=0?parseInt(r,10)*t*n+"%":r*t*n+"px",i=i.indexOf("%")>=0?parseInt(i,10)*t+"%":i*t+"px",a.transform("translate3d("+r+", "+i+",0px)")}function u(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof a))return new a(t,s);var c={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,zoom:!1,zoomMax:3,zoomMin:1,zoomToggle:!0,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,mousewheelEventsTarged:"container",hashnav:!1,hashnavWatchState:!1,history:!1,replaceState:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",normalizeSlideIndex:!0,allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",paginationClickableClass:"swiper-pagination-clickable",paginationModifierClass:"swiper-pagination-",lazyLoadingClass:"swiper-lazy",lazyStatusLoadingClass:"swiper-lazy-loading",lazyStatusLoadedClass:"swiper-lazy-loaded",lazyPreloaderClass:"swiper-lazy-preloader",notificationClass:"swiper-notification",preloaderClass:"preloader",zoomContainerClass:"swiper-zoom-container",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},g=s&&s.virtualTranslate;s=s||{};var h={};for(var v in s)if("object"!=typeof s[v]||null===s[v]||(s[v].nodeType||s[v]===window||s[v]===document||"undefined"!=typeof Dom7&&s[v]instanceof Dom7||"undefined"!=typeof jQuery&&s[v]instanceof jQuery))h[v]=s[v];else{h[v]={};for(var f in s[v])h[v][f]=s[v][f]}for(var w in c)if(void 0===s[w])s[w]=c[w];else if("object"==typeof s[w])for(var y in c[w])void 0===s[w][y]&&(s[w][y]=c[w][y]);var x=this;if(x.params=s,x.originalParams=h,x.classNames=[],void 0!==e&&"undefined"!=typeof Dom7&&(e=Dom7),(void 0!==e||(e="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7))&&(x.$=e,x.currentBreakpoint=void 0,x.getActiveBreakpoint=function(){if(!x.params.breakpoints)return!1;var e,a=!1,t=[];for(e in x.params.breakpoints)x.params.breakpoints.hasOwnProperty(e)&&t.push(e);t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10)});for(var s=0;s<t.length;s++)(e=t[s])>=window.innerWidth&&!a&&(a=e);return a||"max"},x.setBreakpoint=function(){var e=x.getActiveBreakpoint();if(e&&x.currentBreakpoint!==e){var a=e in x.params.breakpoints?x.params.breakpoints[e]:x.originalParams,t=x.params.loop&&a.slidesPerView!==x.params.slidesPerView;for(var s in a)x.params[s]=a[s];x.currentBreakpoint=e,t&&x.destroyLoop&&x.reLoop(!0)}},x.params.breakpoints&&x.setBreakpoint(),x.container=e(t),0!==x.container.length)){if(x.container.length>1){var T=[];return x.container.each(function(){T.push(new a(this,s))}),T}x.container[0].swiper=x,x.container.data("swiper",x),x.classNames.push(x.params.containerModifierClass+x.params.direction),x.params.freeMode&&x.classNames.push(x.params.containerModifierClass+"free-mode"),x.support.flexbox||(x.classNames.push(x.params.containerModifierClass+"no-flexbox"),x.params.slidesPerColumn=1),x.params.autoHeight&&x.classNames.push(x.params.containerModifierClass+"autoheight"),(x.params.parallax||x.params.watchSlidesVisibility)&&(x.params.watchSlidesProgress=!0),x.params.touchReleaseOnEdges&&(x.params.resistanceRatio=0),["cube","coverflow","flip"].indexOf(x.params.effect)>=0&&(x.support.transforms3d?(x.params.watchSlidesProgress=!0,x.classNames.push(x.params.containerModifierClass+"3d")):x.params.effect="slide"),"slide"!==x.params.effect&&x.classNames.push(x.params.containerModifierClass+x.params.effect),"cube"===x.params.effect&&(x.params.resistanceRatio=0,x.params.slidesPerView=1,x.params.slidesPerColumn=1,x.params.slidesPerGroup=1,x.params.centeredSlides=!1,x.params.spaceBetween=0,x.params.virtualTranslate=!0),"fade"!==x.params.effect&&"flip"!==x.params.effect||(x.params.slidesPerView=1,x.params.slidesPerColumn=1,x.params.slidesPerGroup=1,x.params.watchSlidesProgress=!0,x.params.spaceBetween=0,void 0===g&&(x.params.virtualTranslate=!0)),x.params.grabCursor&&x.support.touch&&(x.params.grabCursor=!1),x.wrapper=x.container.children("."+x.params.wrapperClass),x.params.pagination&&(x.paginationContainer=e(x.params.pagination),x.params.uniqueNavElements&&"string"==typeof x.params.pagination&&x.paginationContainer.length>1&&1===x.container.find(x.params.pagination).length&&(x.paginationContainer=x.container.find(x.params.pagination)),"bullets"===x.params.paginationType&&x.params.paginationClickable?x.paginationContainer.addClass(x.params.paginationModifierClass+"clickable"):x.params.paginationClickable=!1,x.paginationContainer.addClass(x.params.paginationModifierClass+x.params.paginationType)),(x.params.nextButton||x.params.prevButton)&&(x.params.nextButton&&(x.nextButton=e(x.params.nextButton),x.params.uniqueNavElements&&"string"==typeof x.params.nextButton&&x.nextButton.length>1&&1===x.container.find(x.params.nextButton).length&&(x.nextButton=x.container.find(x.params.nextButton))),x.params.prevButton&&(x.prevButton=e(x.params.prevButton),x.params.uniqueNavElements&&"string"==typeof x.params.prevButton&&x.prevButton.length>1&&1===x.container.find(x.params.prevButton).length&&(x.prevButton=x.container.find(x.params.prevButton)))),x.isHorizontal=function(){return"horizontal"===x.params.direction},x.rtl=x.isHorizontal()&&("rtl"===x.container[0].dir.toLowerCase()||"rtl"===x.container.css("direction")),x.rtl&&x.classNames.push(x.params.containerModifierClass+"rtl"),x.rtl&&(x.wrongRTL="-webkit-box"===x.wrapper.css("display")),x.params.slidesPerColumn>1&&x.classNames.push(x.params.containerModifierClass+"multirow"),x.device.android&&x.classNames.push(x.params.containerModifierClass+"android"),x.container.addClass(x.classNames.join(" ")),x.translate=0,x.progress=0,x.velocity=0,x.lockSwipeToNext=function(){x.params.allowSwipeToNext=!1,x.params.allowSwipeToPrev===!1&&x.params.grabCursor&&x.unsetGrabCursor()},x.lockSwipeToPrev=function(){x.params.allowSwipeToPrev=!1,x.params.allowSwipeToNext===!1&&x.params.grabCursor&&x.unsetGrabCursor()},x.lockSwipes=function(){x.params.allowSwipeToNext=x.params.allowSwipeToPrev=!1,x.params.grabCursor&&x.unsetGrabCursor()},x.unlockSwipeToNext=function(){x.params.allowSwipeToNext=!0,x.params.allowSwipeToPrev===!0&&x.params.grabCursor&&x.setGrabCursor()},x.unlockSwipeToPrev=function(){x.params.allowSwipeToPrev=!0,x.params.allowSwipeToNext===!0&&x.params.grabCursor&&x.setGrabCursor()},x.unlockSwipes=function(){x.params.allowSwipeToNext=x.params.allowSwipeToPrev=!0,x.params.grabCursor&&x.setGrabCursor()},x.setGrabCursor=function(e){x.container[0].style.cursor="move",x.container[0].style.cursor=e?"-webkit-grabbing":"-webkit-grab",x.container[0].style.cursor=e?"-moz-grabbin":"-moz-grab",x.container[0].style.cursor=e?"grabbing":"grab"},x.unsetGrabCursor=function(){x.container[0].style.cursor=""},x.params.grabCursor&&x.setGrabCursor(),x.imagesToLoad=[],x.imagesLoaded=0,x.loadImage=function(e,a,t,s,r,i){function n(){i&&i()}var o;e.complete&&r?n():a?(o=new window.Image,o.onload=n,o.onerror=n,s&&(o.sizes=s),t&&(o.srcset=t),a&&(o.src=a)):n()},x.preloadImages=function(){function e(){void 0!==x&&null!==x&&x&&(void 0!==x.imagesLoaded&&x.imagesLoaded++,x.imagesLoaded===x.imagesToLoad.length&&(x.params.updateOnImagesReady&&x.update(),x.emit("onImagesReady",x)))}x.imagesToLoad=x.container.find("img");for(var a=0;a<x.imagesToLoad.length;a++)x.loadImage(x.imagesToLoad[a],x.imagesToLoad[a].currentSrc||x.imagesToLoad[a].getAttribute("src"),x.imagesToLoad[a].srcset||x.imagesToLoad[a].getAttribute("srcset"),x.imagesToLoad[a].sizes||x.imagesToLoad[a].getAttribute("sizes"),!0,e)},x.autoplayTimeoutId=void 0,x.autoplaying=!1,x.autoplayPaused=!1,x.startAutoplay=function(){return void 0===x.autoplayTimeoutId&&(!!x.params.autoplay&&(!x.autoplaying&&(x.autoplaying=!0,x.emit("onAutoplayStart",x),void i())))},x.stopAutoplay=function(e){x.autoplayTimeoutId&&(x.autoplayTimeoutId&&clearTimeout(x.autoplayTimeoutId),x.autoplaying=!1,x.autoplayTimeoutId=void 0,x.emit("onAutoplayStop",x))},x.pauseAutoplay=function(e){x.autoplayPaused||(x.autoplayTimeoutId&&clearTimeout(x.autoplayTimeoutId),x.autoplayPaused=!0,0===e?(x.autoplayPaused=!1,i()):x.wrapper.transitionEnd(function(){x&&(x.autoplayPaused=!1,x.autoplaying?i():x.stopAutoplay())}))},x.minTranslate=function(){return-x.snapGrid[0]},x.maxTranslate=function(){return-x.snapGrid[x.snapGrid.length-1]},x.updateAutoHeight=function(){var e,a=[],t=0;if("auto"!==x.params.slidesPerView&&x.params.slidesPerView>1)for(e=0;e<Math.ceil(x.params.slidesPerView);e++){var s=x.activeIndex+e;if(s>x.slides.length)break;a.push(x.slides.eq(s)[0])}else a.push(x.slides.eq(x.activeIndex)[0]);for(e=0;e<a.length;e++)if(void 0!==a[e]){var r=a[e].offsetHeight;t=r>t?r:t}t&&x.wrapper.css("height",t+"px")},x.updateContainerSize=function(){var e,a;e=void 0!==x.params.width?x.params.width:x.container[0].clientWidth,a=void 0!==x.params.height?x.params.height:x.container[0].clientHeight,0===e&&x.isHorizontal()||0===a&&!x.isHorizontal()||(e=e-parseInt(x.container.css("padding-left"),10)-parseInt(x.container.css("padding-right"),10),a=a-parseInt(x.container.css("padding-top"),10)-parseInt(x.container.css("padding-bottom"),10),x.width=e,x.height=a,x.size=x.isHorizontal()?x.width:x.height)},x.updateSlidesSize=function(){x.slides=x.wrapper.children("."+x.params.slideClass),x.snapGrid=[],x.slidesGrid=[],x.slidesSizesGrid=[];var e,a=x.params.spaceBetween,t=-x.params.slidesOffsetBefore,s=0,i=0;if(void 0!==x.size){"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*x.size),x.virtualSize=-a,x.rtl?x.slides.css({marginLeft:"",marginTop:""}):x.slides.css({marginRight:"",marginBottom:""});var n;x.params.slidesPerColumn>1&&(n=Math.floor(x.slides.length/x.params.slidesPerColumn)===x.slides.length/x.params.slidesPerColumn?x.slides.length:Math.ceil(x.slides.length/x.params.slidesPerColumn)*x.params.slidesPerColumn,"auto"!==x.params.slidesPerView&&"row"===x.params.slidesPerColumnFill&&(n=Math.max(n,x.params.slidesPerView*x.params.slidesPerColumn)));var o,l=x.params.slidesPerColumn,p=n/l,d=p-(x.params.slidesPerColumn*p-x.slides.length);for(e=0;e<x.slides.length;e++){o=0;var m=x.slides.eq(e);if(x.params.slidesPerColumn>1){var u,c,g;"column"===x.params.slidesPerColumnFill?(c=Math.floor(e/l),g=e-c*l,(c>d||c===d&&g===l-1)&&++g>=l&&(g=0,c++),u=c+g*n/l,m.css({"-webkit-box-ordinal-group":u,"-moz-box-ordinal-group":u,"-ms-flex-order":u,"-webkit-order":u,order:u})):(g=Math.floor(e/p),c=e-g*p),m.css("margin-"+(x.isHorizontal()?"top":"left"),0!==g&&x.params.spaceBetween&&x.params.spaceBetween+"px").attr("data-swiper-column",c).attr("data-swiper-row",g)}"none"!==m.css("display")&&("auto"===x.params.slidesPerView?(o=x.isHorizontal()?m.outerWidth(!0):m.outerHeight(!0),x.params.roundLengths&&(o=r(o))):(o=(x.size-(x.params.slidesPerView-1)*a)/x.params.slidesPerView,x.params.roundLengths&&(o=r(o)),x.isHorizontal()?x.slides[e].style.width=o+"px":x.slides[e].style.height=o+"px"),x.slides[e].swiperSlideSize=o,x.slidesSizesGrid.push(o),x.params.centeredSlides?(t=t+o/2+s/2+a,0===s&&0!==e&&(t=t-x.size/2-a),0===e&&(t=t-x.size/2-a),Math.abs(t)<.001&&(t=0),i%x.params.slidesPerGroup==0&&x.snapGrid.push(t),x.slidesGrid.push(t)):(i%x.params.slidesPerGroup==0&&x.snapGrid.push(t),x.slidesGrid.push(t),t=t+o+a),x.virtualSize+=o+a,s=o,i++)}x.virtualSize=Math.max(x.virtualSize,x.size)+x.params.slidesOffsetAfter;var h;if(x.rtl&&x.wrongRTL&&("slide"===x.params.effect||"coverflow"===x.params.effect)&&x.wrapper.css({width:x.virtualSize+x.params.spaceBetween+"px"}),x.support.flexbox&&!x.params.setWrapperSize||(x.isHorizontal()?x.wrapper.css({width:x.virtualSize+x.params.spaceBetween+"px"}):x.wrapper.css({height:x.virtualSize+x.params.spaceBetween+"px"})),x.params.slidesPerColumn>1&&(x.virtualSize=(o+x.params.spaceBetween)*n,x.virtualSize=Math.ceil(x.virtualSize/x.params.slidesPerColumn)-x.params.spaceBetween,x.isHorizontal()?x.wrapper.css({width:x.virtualSize+x.params.spaceBetween+"px"}):x.wrapper.css({height:x.virtualSize+x.params.spaceBetween+"px"}),x.params.centeredSlides)){for(h=[],e=0;e<x.snapGrid.length;e++)x.snapGrid[e]<x.virtualSize+x.snapGrid[0]&&h.push(x.snapGrid[e]);x.snapGrid=h}if(!x.params.centeredSlides){for(h=[],e=0;e<x.snapGrid.length;e++)x.snapGrid[e]<=x.virtualSize-x.size&&h.push(x.snapGrid[e]);x.snapGrid=h,Math.floor(x.virtualSize-x.size)-Math.floor(x.snapGrid[x.snapGrid.length-1])>1&&x.snapGrid.push(x.virtualSize-x.size)}0===x.snapGrid.length&&(x.snapGrid=[0]),0!==x.params.spaceBetween&&(x.isHorizontal()?x.rtl?x.slides.css({marginLeft:a+"px"}):x.slides.css({marginRight:a+"px"}):x.slides.css({marginBottom:a+"px"})),x.params.watchSlidesProgress&&x.updateSlidesOffset()}},x.updateSlidesOffset=function(){for(var e=0;e<x.slides.length;e++)x.slides[e].swiperSlideOffset=x.isHorizontal()?x.slides[e].offsetLeft:x.slides[e].offsetTop},x.currentSlidesPerView=function(){var e,a,t=1;if(x.params.centeredSlides){var s,r=x.slides[x.activeIndex].swiperSlideSize;for(e=x.activeIndex+1;e<x.slides.length;e++)x.slides[e]&&!s&&(r+=x.slides[e].swiperSlideSize,t++,r>x.size&&(s=!0));for(a=x.activeIndex-1;a>=0;a--)x.slides[a]&&!s&&(r+=x.slides[a].swiperSlideSize,t++,r>x.size&&(s=!0))}else for(e=x.activeIndex+1;e<x.slides.length;e++)x.slidesGrid[e]-x.slidesGrid[x.activeIndex]<x.size&&t++;return t},x.updateSlidesProgress=function(e){if(void 0===e&&(e=x.translate||0),0!==x.slides.length){void 0===x.slides[0].swiperSlideOffset&&x.updateSlidesOffset();var a=-e;x.rtl&&(a=e),x.slides.removeClass(x.params.slideVisibleClass);for(var t=0;t<x.slides.length;t++){var s=x.slides[t],r=(a+(x.params.centeredSlides?x.minTranslate():0)-s.swiperSlideOffset)/(s.swiperSlideSize+x.params.spaceBetween);if(x.params.watchSlidesVisibility){var i=-(a-s.swiperSlideOffset),n=i+x.slidesSizesGrid[t];(i>=0&&i<x.size||n>0&&n<=x.size||i<=0&&n>=x.size)&&x.slides.eq(t).addClass(x.params.slideVisibleClass)}s.progress=x.rtl?-r:r}}},x.updateProgress=function(e){void 0===e&&(e=x.translate||0);var a=x.maxTranslate()-x.minTranslate(),t=x.isBeginning,s=x.isEnd;0===a?(x.progress=0,x.isBeginning=x.isEnd=!0):(x.progress=(e-x.minTranslate())/a,x.isBeginning=x.progress<=0,x.isEnd=x.progress>=1),x.isBeginning&&!t&&x.emit("onReachBeginning",x),x.isEnd&&!s&&x.emit("onReachEnd",x),x.params.watchSlidesProgress&&x.updateSlidesProgress(e),x.emit("onProgress",x,x.progress)},x.updateActiveIndex=function(){var e,a,t,s=x.rtl?x.translate:-x.translate;for(a=0;a<x.slidesGrid.length;a++)void 0!==x.slidesGrid[a+1]?s>=x.slidesGrid[a]&&s<x.slidesGrid[a+1]-(x.slidesGrid[a+1]-x.slidesGrid[a])/2?e=a:s>=x.slidesGrid[a]&&s<x.slidesGrid[a+1]&&(e=a+1):s>=x.slidesGrid[a]&&(e=a);x.params.normalizeSlideIndex&&(e<0||void 0===e)&&(e=0),t=Math.floor(e/x.params.slidesPerGroup),t>=x.snapGrid.length&&(t=x.snapGrid.length-1),e!==x.activeIndex&&(x.snapIndex=t,x.previousIndex=x.activeIndex,x.activeIndex=e,x.updateClasses(),x.updateRealIndex())},x.updateRealIndex=function(){x.realIndex=parseInt(x.slides.eq(x.activeIndex).attr("data-swiper-slide-index")||x.activeIndex,10)},x.updateClasses=function(){x.slides.removeClass(x.params.slideActiveClass+" "+x.params.slideNextClass+" "+x.params.slidePrevClass+" "+x.params.slideDuplicateActiveClass+" "+x.params.slideDuplicateNextClass+" "+x.params.slideDuplicatePrevClass);var a=x.slides.eq(x.activeIndex);a.addClass(x.params.slideActiveClass),s.loop&&(a.hasClass(x.params.slideDuplicateClass)?x.wrapper.children("."+x.params.slideClass+":not(."+x.params.slideDuplicateClass+')[data-swiper-slide-index="'+x.realIndex+'"]').addClass(x.params.slideDuplicateActiveClass):x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+x.realIndex+'"]').addClass(x.params.slideDuplicateActiveClass));var t=a.next("."+x.params.slideClass).addClass(x.params.slideNextClass);x.params.loop&&0===t.length&&(t=x.slides.eq(0),t.addClass(x.params.slideNextClass));var r=a.prev("."+x.params.slideClass).addClass(x.params.slidePrevClass);if(x.params.loop&&0===r.length&&(r=x.slides.eq(-1),r.addClass(x.params.slidePrevClass)),s.loop&&(t.hasClass(x.params.slideDuplicateClass)?x.wrapper.children("."+x.params.slideClass+":not(."+x.params.slideDuplicateClass+')[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicateNextClass):x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicateNextClass),r.hasClass(x.params.slideDuplicateClass)?x.wrapper.children("."+x.params.slideClass+":not(."+x.params.slideDuplicateClass+')[data-swiper-slide-index="'+r.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicatePrevClass):x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+r.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicatePrevClass)),x.paginationContainer&&x.paginationContainer.length>0){var i,n=x.params.loop?Math.ceil((x.slides.length-2*x.loopedSlides)/x.params.slidesPerGroup):x.snapGrid.length;if(x.params.loop?(i=Math.ceil((x.activeIndex-x.loopedSlides)/x.params.slidesPerGroup),i>x.slides.length-1-2*x.loopedSlides&&(i-=x.slides.length-2*x.loopedSlides),i>n-1&&(i-=n),i<0&&"bullets"!==x.params.paginationType&&(i=n+i)):i=void 0!==x.snapIndex?x.snapIndex:x.activeIndex||0,"bullets"===x.params.paginationType&&x.bullets&&x.bullets.length>0&&(x.bullets.removeClass(x.params.bulletActiveClass),x.paginationContainer.length>1?x.bullets.each(function(){e(this).index()===i&&e(this).addClass(x.params.bulletActiveClass)}):x.bullets.eq(i).addClass(x.params.bulletActiveClass)),"fraction"===x.params.paginationType&&(x.paginationContainer.find("."+x.params.paginationCurrentClass).text(i+1),x.paginationContainer.find("."+x.params.paginationTotalClass).text(n)),"progress"===x.params.paginationType){var o=(i+1)/n,l=o,p=1;x.isHorizontal()||(p=o,l=1),x.paginationContainer.find("."+x.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+l+") scaleY("+p+")").transition(x.params.speed)}"custom"===x.params.paginationType&&x.params.paginationCustomRender&&(x.paginationContainer.html(x.params.paginationCustomRender(x,i+1,n)),x.emit("onPaginationRendered",x,x.paginationContainer[0]))}x.params.loop||(x.params.prevButton&&x.prevButton&&x.prevButton.length>0&&(x.isBeginning?(x.prevButton.addClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.disable(x.prevButton)):(x.prevButton.removeClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.enable(x.prevButton))),x.params.nextButton&&x.nextButton&&x.nextButton.length>0&&(x.isEnd?(x.nextButton.addClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.disable(x.nextButton)):(x.nextButton.removeClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.enable(x.nextButton))))},x.updatePagination=function(){if(x.params.pagination&&x.paginationContainer&&x.paginationContainer.length>0){var e="";if("bullets"===x.params.paginationType){for(var a=x.params.loop?Math.ceil((x.slides.length-2*x.loopedSlides)/x.params.slidesPerGroup):x.snapGrid.length,t=0;t<a;t++)e+=x.params.paginationBulletRender?x.params.paginationBulletRender(x,t,x.params.bulletClass):"<"+x.params.paginationElement+' class="'+x.params.bulletClass+'"></'+x.params.paginationElement+">";x.paginationContainer.html(e),x.bullets=x.paginationContainer.find("."+x.params.bulletClass),x.params.paginationClickable&&x.params.a11y&&x.a11y&&x.a11y.initPagination()}"fraction"===x.params.paginationType&&(e=x.params.paginationFractionRender?x.params.paginationFractionRender(x,x.params.paginationCurrentClass,x.params.paginationTotalClass):'<span class="'+x.params.paginationCurrentClass+'"></span> / <span class="'+x.params.paginationTotalClass+'"></span>',x.paginationContainer.html(e)),"progress"===x.params.paginationType&&(e=x.params.paginationProgressRender?x.params.paginationProgressRender(x,x.params.paginationProgressbarClass):'<span class="'+x.params.paginationProgressbarClass+'"></span>',x.paginationContainer.html(e)),"custom"!==x.params.paginationType&&x.emit("onPaginationRendered",x,x.paginationContainer[0])}},x.update=function(e){function a(){x.rtl,x.translate;t=Math.min(Math.max(x.translate,x.maxTranslate()),x.minTranslate()),x.setWrapperTranslate(t),x.updateActiveIndex(),x.updateClasses()}if(x){x.updateContainerSize(),x.updateSlidesSize(),x.updateProgress(),x.updatePagination(),x.updateClasses(),x.params.scrollbar&&x.scrollbar&&x.scrollbar.set();var t;if(e){x.controller&&x.controller.spline&&(x.controller.spline=void 0),x.params.freeMode?(a(),x.params.autoHeight&&x.updateAutoHeight()):(("auto"===x.params.slidesPerView||x.params.slidesPerView>1)&&x.isEnd&&!x.params.centeredSlides?x.slideTo(x.slides.length-1,0,!1,!0):x.slideTo(x.activeIndex,0,!1,!0))||a()}else x.params.autoHeight&&x.updateAutoHeight()}},x.onResize=function(e){x.params.onBeforeResize&&x.params.onBeforeResize(x),x.params.breakpoints&&x.setBreakpoint();var a=x.params.allowSwipeToPrev,t=x.params.allowSwipeToNext;x.params.allowSwipeToPrev=x.params.allowSwipeToNext=!0,x.updateContainerSize(),x.updateSlidesSize(),("auto"===x.params.slidesPerView||x.params.freeMode||e)&&x.updatePagination(),x.params.scrollbar&&x.scrollbar&&x.scrollbar.set(),x.controller&&x.controller.spline&&(x.controller.spline=void 0);var s=!1;if(x.params.freeMode){var r=Math.min(Math.max(x.translate,x.maxTranslate()),x.minTranslate());x.setWrapperTranslate(r),x.updateActiveIndex(),x.updateClasses(),x.params.autoHeight&&x.updateAutoHeight()}else x.updateClasses(),s=("auto"===x.params.slidesPerView||x.params.slidesPerView>1)&&x.isEnd&&!x.params.centeredSlides?x.slideTo(x.slides.length-1,0,!1,!0):x.slideTo(x.activeIndex,0,!1,!0);x.params.lazyLoading&&!s&&x.lazy&&x.lazy.load(),x.params.allowSwipeToPrev=a,x.params.allowSwipeToNext=t,x.params.onAfterResize&&x.params.onAfterResize(x)},x.touchEventsDesktop={start:"mousedown",move:"mousemove",end:"mouseup"},window.navigator.pointerEnabled?x.touchEventsDesktop={start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled&&(x.touchEventsDesktop={start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}),x.touchEvents={start:x.support.touch||!x.params.simulateTouch?"touchstart":x.touchEventsDesktop.start,move:x.support.touch||!x.params.simulateTouch?"touchmove":x.touchEventsDesktop.move,end:x.support.touch||!x.params.simulateTouch?"touchend":x.touchEventsDesktop.end},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===x.params.touchEventsTarget?x.container:x.wrapper).addClass("swiper-wp8-"+x.params.direction),x.initEvents=function(e){var a=e?"off":"on",t=e?"removeEventListener":"addEventListener",r="container"===x.params.touchEventsTarget?x.container[0]:x.wrapper[0],i=x.support.touch?r:document,n=!!x.params.nested;if(x.browser.ie)r[t](x.touchEvents.start,x.onTouchStart,!1),i[t](x.touchEvents.move,x.onTouchMove,n),i[t](x.touchEvents.end,x.onTouchEnd,!1);else{if(x.support.touch){var o=!("touchstart"!==x.touchEvents.start||!x.support.passiveListener||!x.params.passiveListeners)&&{passive:!0,capture:!1};r[t](x.touchEvents.start,x.onTouchStart,o),r[t](x.touchEvents.move,x.onTouchMove,n),r[t](x.touchEvents.end,x.onTouchEnd,o)}(s.simulateTouch&&!x.device.ios&&!x.device.android||s.simulateTouch&&!x.support.touch&&x.device.ios)&&(r[t]("mousedown",x.onTouchStart,!1),document[t]("mousemove",x.onTouchMove,n),document[t]("mouseup",x.onTouchEnd,!1))}window[t]("resize",x.onResize),x.params.nextButton&&x.nextButton&&x.nextButton.length>0&&(x.nextButton[a]("click",x.onClickNext),x.params.a11y&&x.a11y&&x.nextButton[a]("keydown",x.a11y.onEnterKey)),x.params.prevButton&&x.prevButton&&x.prevButton.length>0&&(x.prevButton[a]("click",x.onClickPrev),x.params.a11y&&x.a11y&&x.prevButton[a]("keydown",x.a11y.onEnterKey)),x.params.pagination&&x.params.paginationClickable&&(x.paginationContainer[a]("click","."+x.params.bulletClass,x.onClickIndex),x.params.a11y&&x.a11y&&x.paginationContainer[a]("keydown","."+x.params.bulletClass,x.a11y.onEnterKey)),(x.params.preventClicks||x.params.preventClicksPropagation)&&r[t]("click",x.preventClicks,!0)},x.attachEvents=function(){x.initEvents()},x.detachEvents=function(){x.initEvents(!0)},x.allowClick=!0,x.preventClicks=function(e){x.allowClick||(x.params.preventClicks&&e.preventDefault(),x.params.preventClicksPropagation&&x.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},x.onClickNext=function(e){e.preventDefault(),x.isEnd&&!x.params.loop||x.slideNext()},x.onClickPrev=function(e){e.preventDefault(),x.isBeginning&&!x.params.loop||x.slidePrev()},x.onClickIndex=function(a){a.preventDefault();var t=e(this).index()*x.params.slidesPerGroup
;x.params.loop&&(t+=x.loopedSlides),x.slideTo(t)},x.updateClickedSlide=function(a){var t=n(a,"."+x.params.slideClass),s=!1;if(t)for(var r=0;r<x.slides.length;r++)x.slides[r]===t&&(s=!0);if(!t||!s)return x.clickedSlide=void 0,void(x.clickedIndex=void 0);if(x.clickedSlide=t,x.clickedIndex=e(t).index(),x.params.slideToClickedSlide&&void 0!==x.clickedIndex&&x.clickedIndex!==x.activeIndex){var i,o=x.clickedIndex,l="auto"===x.params.slidesPerView?x.currentSlidesPerView():x.params.slidesPerView;if(x.params.loop){if(x.animating)return;i=parseInt(e(x.clickedSlide).attr("data-swiper-slide-index"),10),x.params.centeredSlides?o<x.loopedSlides-l/2||o>x.slides.length-x.loopedSlides+l/2?(x.fixLoop(),o=x.wrapper.children("."+x.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.'+x.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){x.slideTo(o)},0)):x.slideTo(o):o>x.slides.length-l?(x.fixLoop(),o=x.wrapper.children("."+x.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.'+x.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){x.slideTo(o)},0)):x.slideTo(o)}else x.slideTo(o)}};var b,C,S,z,M,P,E,I,k,D,L="input, select, textarea, button, video",B=Date.now(),H=[];x.animating=!1,x.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var G,X;x.onTouchStart=function(a){if(a.originalEvent&&(a=a.originalEvent),(G="touchstart"===a.type)||!("which"in a)||3!==a.which){if(x.params.noSwiping&&n(a,"."+x.params.noSwipingClass))return void(x.allowClick=!0);if(!x.params.swipeHandler||n(a,x.params.swipeHandler)){var t=x.touches.currentX="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,s=x.touches.currentY="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY;if(!(x.device.ios&&x.params.iOSEdgeSwipeDetection&&t<=x.params.iOSEdgeSwipeThreshold)){if(b=!0,C=!1,S=!0,M=void 0,X=void 0,x.touches.startX=t,x.touches.startY=s,z=Date.now(),x.allowClick=!0,x.updateContainerSize(),x.swipeDirection=void 0,x.params.threshold>0&&(I=!1),"touchstart"!==a.type){var r=!0;e(a.target).is(L)&&(r=!1),document.activeElement&&e(document.activeElement).is(L)&&document.activeElement.blur(),r&&a.preventDefault()}x.emit("onTouchStart",x,a)}}}},x.onTouchMove=function(a){if(a.originalEvent&&(a=a.originalEvent),!G||"mousemove"!==a.type){if(a.preventedByNestedSwiper)return x.touches.startX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,void(x.touches.startY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY);if(x.params.onlyExternal)return x.allowClick=!1,void(b&&(x.touches.startX=x.touches.currentX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,x.touches.startY=x.touches.currentY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY,z=Date.now()));if(G&&x.params.touchReleaseOnEdges&&!x.params.loop)if(x.isHorizontal()){if(x.touches.currentX<x.touches.startX&&x.translate<=x.maxTranslate()||x.touches.currentX>x.touches.startX&&x.translate>=x.minTranslate())return}else if(x.touches.currentY<x.touches.startY&&x.translate<=x.maxTranslate()||x.touches.currentY>x.touches.startY&&x.translate>=x.minTranslate())return;if(G&&document.activeElement&&a.target===document.activeElement&&e(a.target).is(L))return C=!0,void(x.allowClick=!1);if(S&&x.emit("onTouchMove",x,a),!(a.targetTouches&&a.targetTouches.length>1)){if(x.touches.currentX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,x.touches.currentY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY,void 0===M){var t;x.isHorizontal()&&x.touches.currentY===x.touches.startY||!x.isHorizontal()&&x.touches.currentX===x.touches.startX?M=!1:(t=180*Math.atan2(Math.abs(x.touches.currentY-x.touches.startY),Math.abs(x.touches.currentX-x.touches.startX))/Math.PI,M=x.isHorizontal()?t>x.params.touchAngle:90-t>x.params.touchAngle)}if(M&&x.emit("onTouchMoveOpposite",x,a),void 0===X&&(x.touches.currentX===x.touches.startX&&x.touches.currentY===x.touches.startY||(X=!0)),b){if(M)return void(b=!1);if(X){x.allowClick=!1,x.emit("onSliderMove",x,a),a.preventDefault(),x.params.touchMoveStopPropagation&&!x.params.nested&&a.stopPropagation(),C||(s.loop&&x.fixLoop(),E=x.getWrapperTranslate(),x.setWrapperTransition(0),x.animating&&x.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),x.params.autoplay&&x.autoplaying&&(x.params.autoplayDisableOnInteraction?x.stopAutoplay():x.pauseAutoplay()),D=!1,!x.params.grabCursor||x.params.allowSwipeToNext!==!0&&x.params.allowSwipeToPrev!==!0||x.setGrabCursor(!0)),C=!0;var r=x.touches.diff=x.isHorizontal()?x.touches.currentX-x.touches.startX:x.touches.currentY-x.touches.startY;r*=x.params.touchRatio,x.rtl&&(r=-r),x.swipeDirection=r>0?"prev":"next",P=r+E;var i=!0;if(r>0&&P>x.minTranslate()?(i=!1,x.params.resistance&&(P=x.minTranslate()-1+Math.pow(-x.minTranslate()+E+r,x.params.resistanceRatio))):r<0&&P<x.maxTranslate()&&(i=!1,x.params.resistance&&(P=x.maxTranslate()+1-Math.pow(x.maxTranslate()-E-r,x.params.resistanceRatio))),i&&(a.preventedByNestedSwiper=!0),!x.params.allowSwipeToNext&&"next"===x.swipeDirection&&P<E&&(P=E),!x.params.allowSwipeToPrev&&"prev"===x.swipeDirection&&P>E&&(P=E),x.params.threshold>0){if(!(Math.abs(r)>x.params.threshold||I))return void(P=E);if(!I)return I=!0,x.touches.startX=x.touches.currentX,x.touches.startY=x.touches.currentY,P=E,void(x.touches.diff=x.isHorizontal()?x.touches.currentX-x.touches.startX:x.touches.currentY-x.touches.startY)}x.params.followFinger&&((x.params.freeMode||x.params.watchSlidesProgress)&&x.updateActiveIndex(),x.params.freeMode&&(0===H.length&&H.push({position:x.touches[x.isHorizontal()?"startX":"startY"],time:z}),H.push({position:x.touches[x.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),x.updateProgress(P),x.setWrapperTranslate(P))}}}}},x.onTouchEnd=function(a){if(a.originalEvent&&(a=a.originalEvent),S&&x.emit("onTouchEnd",x,a),S=!1,b){x.params.grabCursor&&C&&b&&(x.params.allowSwipeToNext===!0||x.params.allowSwipeToPrev===!0)&&x.setGrabCursor(!1);var t=Date.now(),s=t-z;if(x.allowClick&&(x.updateClickedSlide(a),x.emit("onTap",x,a),s<300&&t-B>300&&(k&&clearTimeout(k),k=setTimeout(function(){x&&(x.params.paginationHide&&x.paginationContainer.length>0&&!e(a.target).hasClass(x.params.bulletClass)&&x.paginationContainer.toggleClass(x.params.paginationHiddenClass),x.emit("onClick",x,a))},300)),s<300&&t-B<300&&(k&&clearTimeout(k),x.emit("onDoubleTap",x,a))),B=Date.now(),setTimeout(function(){x&&(x.allowClick=!0)},0),!b||!C||!x.swipeDirection||0===x.touches.diff||P===E)return void(b=C=!1);b=C=!1;var r;if(r=x.params.followFinger?x.rtl?x.translate:-x.translate:-P,x.params.freeMode){if(r<-x.minTranslate())return void x.slideTo(x.activeIndex);if(r>-x.maxTranslate())return void(x.slides.length<x.snapGrid.length?x.slideTo(x.snapGrid.length-1):x.slideTo(x.slides.length-1));if(x.params.freeModeMomentum){if(H.length>1){var i=H.pop(),n=H.pop(),o=i.position-n.position,l=i.time-n.time;x.velocity=o/l,x.velocity=x.velocity/2,Math.abs(x.velocity)<x.params.freeModeMinimumVelocity&&(x.velocity=0),(l>150||(new window.Date).getTime()-i.time>300)&&(x.velocity=0)}else x.velocity=0;x.velocity=x.velocity*x.params.freeModeMomentumVelocityRatio,H.length=0;var p=1e3*x.params.freeModeMomentumRatio,d=x.velocity*p,m=x.translate+d;x.rtl&&(m=-m);var u,c=!1,g=20*Math.abs(x.velocity)*x.params.freeModeMomentumBounceRatio;if(m<x.maxTranslate())x.params.freeModeMomentumBounce?(m+x.maxTranslate()<-g&&(m=x.maxTranslate()-g),u=x.maxTranslate(),c=!0,D=!0):m=x.maxTranslate();else if(m>x.minTranslate())x.params.freeModeMomentumBounce?(m-x.minTranslate()>g&&(m=x.minTranslate()+g),u=x.minTranslate(),c=!0,D=!0):m=x.minTranslate();else if(x.params.freeModeSticky){var h,v=0;for(v=0;v<x.snapGrid.length;v+=1)if(x.snapGrid[v]>-m){h=v;break}m=Math.abs(x.snapGrid[h]-m)<Math.abs(x.snapGrid[h-1]-m)||"next"===x.swipeDirection?x.snapGrid[h]:x.snapGrid[h-1],x.rtl||(m=-m)}if(0!==x.velocity)p=x.rtl?Math.abs((-m-x.translate)/x.velocity):Math.abs((m-x.translate)/x.velocity);else if(x.params.freeModeSticky)return void x.slideReset();x.params.freeModeMomentumBounce&&c?(x.updateProgress(u),x.setWrapperTransition(p),x.setWrapperTranslate(m),x.onTransitionStart(),x.animating=!0,x.wrapper.transitionEnd(function(){x&&D&&(x.emit("onMomentumBounce",x),x.setWrapperTransition(x.params.speed),x.setWrapperTranslate(u),x.wrapper.transitionEnd(function(){x&&x.onTransitionEnd()}))})):x.velocity?(x.updateProgress(m),x.setWrapperTransition(p),x.setWrapperTranslate(m),x.onTransitionStart(),x.animating||(x.animating=!0,x.wrapper.transitionEnd(function(){x&&x.onTransitionEnd()}))):x.updateProgress(m),x.updateActiveIndex()}return void((!x.params.freeModeMomentum||s>=x.params.longSwipesMs)&&(x.updateProgress(),x.updateActiveIndex()))}var f,w=0,y=x.slidesSizesGrid[0];for(f=0;f<x.slidesGrid.length;f+=x.params.slidesPerGroup)void 0!==x.slidesGrid[f+x.params.slidesPerGroup]?r>=x.slidesGrid[f]&&r<x.slidesGrid[f+x.params.slidesPerGroup]&&(w=f,y=x.slidesGrid[f+x.params.slidesPerGroup]-x.slidesGrid[f]):r>=x.slidesGrid[f]&&(w=f,y=x.slidesGrid[x.slidesGrid.length-1]-x.slidesGrid[x.slidesGrid.length-2]);var T=(r-x.slidesGrid[w])/y;if(s>x.params.longSwipesMs){if(!x.params.longSwipes)return void x.slideTo(x.activeIndex);"next"===x.swipeDirection&&(T>=x.params.longSwipesRatio?x.slideTo(w+x.params.slidesPerGroup):x.slideTo(w)),"prev"===x.swipeDirection&&(T>1-x.params.longSwipesRatio?x.slideTo(w+x.params.slidesPerGroup):x.slideTo(w))}else{if(!x.params.shortSwipes)return void x.slideTo(x.activeIndex);"next"===x.swipeDirection&&x.slideTo(w+x.params.slidesPerGroup),"prev"===x.swipeDirection&&x.slideTo(w)}}},x._slideTo=function(e,a){return x.slideTo(e,a,!0,!0)},x.slideTo=function(e,a,t,s){void 0===t&&(t=!0),void 0===e&&(e=0),e<0&&(e=0),x.snapIndex=Math.floor(e/x.params.slidesPerGroup),x.snapIndex>=x.snapGrid.length&&(x.snapIndex=x.snapGrid.length-1);var r=-x.snapGrid[x.snapIndex];if(x.params.autoplay&&x.autoplaying&&(s||!x.params.autoplayDisableOnInteraction?x.pauseAutoplay(a):x.stopAutoplay()),x.updateProgress(r),x.params.normalizeSlideIndex)for(var i=0;i<x.slidesGrid.length;i++)-Math.floor(100*r)>=Math.floor(100*x.slidesGrid[i])&&(e=i);return!(!x.params.allowSwipeToNext&&r<x.translate&&r<x.minTranslate())&&(!(!x.params.allowSwipeToPrev&&r>x.translate&&r>x.maxTranslate()&&(x.activeIndex||0)!==e)&&(void 0===a&&(a=x.params.speed),x.previousIndex=x.activeIndex||0,x.activeIndex=e,x.updateRealIndex(),x.rtl&&-r===x.translate||!x.rtl&&r===x.translate?(x.params.autoHeight&&x.updateAutoHeight(),x.updateClasses(),"slide"!==x.params.effect&&x.setWrapperTranslate(r),!1):(x.updateClasses(),x.onTransitionStart(t),0===a||x.browser.lteIE9?(x.setWrapperTranslate(r),x.setWrapperTransition(0),x.onTransitionEnd(t)):(x.setWrapperTranslate(r),x.setWrapperTransition(a),x.animating||(x.animating=!0,x.wrapper.transitionEnd(function(){x&&x.onTransitionEnd(t)}))),!0)))},x.onTransitionStart=function(e){void 0===e&&(e=!0),x.params.autoHeight&&x.updateAutoHeight(),x.lazy&&x.lazy.onTransitionStart(),e&&(x.emit("onTransitionStart",x),x.activeIndex!==x.previousIndex&&(x.emit("onSlideChangeStart",x),x.activeIndex>x.previousIndex?x.emit("onSlideNextStart",x):x.emit("onSlidePrevStart",x)))},x.onTransitionEnd=function(e){x.animating=!1,x.setWrapperTransition(0),void 0===e&&(e=!0),x.lazy&&x.lazy.onTransitionEnd(),e&&(x.emit("onTransitionEnd",x),x.activeIndex!==x.previousIndex&&(x.emit("onSlideChangeEnd",x),x.activeIndex>x.previousIndex?x.emit("onSlideNextEnd",x):x.emit("onSlidePrevEnd",x))),x.params.history&&x.history&&x.history.setHistory(x.params.history,x.activeIndex),x.params.hashnav&&x.hashnav&&x.hashnav.setHash()},x.slideNext=function(e,a,t){if(x.params.loop){if(x.animating)return!1;x.fixLoop();x.container[0].clientLeft;return x.slideTo(x.activeIndex+x.params.slidesPerGroup,a,e,t)}return x.slideTo(x.activeIndex+x.params.slidesPerGroup,a,e,t)},x._slideNext=function(e){return x.slideNext(!0,e,!0)},x.slidePrev=function(e,a,t){if(x.params.loop){if(x.animating)return!1;x.fixLoop();x.container[0].clientLeft;return x.slideTo(x.activeIndex-1,a,e,t)}return x.slideTo(x.activeIndex-1,a,e,t)},x._slidePrev=function(e){return x.slidePrev(!0,e,!0)},x.slideReset=function(e,a,t){return x.slideTo(x.activeIndex,a,e)},x.disableTouchControl=function(){return x.params.onlyExternal=!0,!0},x.enableTouchControl=function(){return x.params.onlyExternal=!1,!0},x.setWrapperTransition=function(e,a){x.wrapper.transition(e),"slide"!==x.params.effect&&x.effects[x.params.effect]&&x.effects[x.params.effect].setTransition(e),x.params.parallax&&x.parallax&&x.parallax.setTransition(e),x.params.scrollbar&&x.scrollbar&&x.scrollbar.setTransition(e),x.params.control&&x.controller&&x.controller.setTransition(e,a),x.emit("onSetTransition",x,e)},x.setWrapperTranslate=function(e,a,t){var s=0,i=0;x.isHorizontal()?s=x.rtl?-e:e:i=e,x.params.roundLengths&&(s=r(s),i=r(i)),x.params.virtualTranslate||(x.support.transforms3d?x.wrapper.transform("translate3d("+s+"px, "+i+"px, 0px)"):x.wrapper.transform("translate("+s+"px, "+i+"px)")),x.translate=x.isHorizontal()?s:i;var n,o=x.maxTranslate()-x.minTranslate();n=0===o?0:(e-x.minTranslate())/o,n!==x.progress&&x.updateProgress(e),a&&x.updateActiveIndex(),"slide"!==x.params.effect&&x.effects[x.params.effect]&&x.effects[x.params.effect].setTranslate(x.translate),x.params.parallax&&x.parallax&&x.parallax.setTranslate(x.translate),x.params.scrollbar&&x.scrollbar&&x.scrollbar.setTranslate(x.translate),x.params.control&&x.controller&&x.controller.setTranslate(x.translate,t),x.emit("onSetTranslate",x,x.translate)},x.getTranslate=function(e,a){var t,s,r,i;return void 0===a&&(a="x"),x.params.virtualTranslate?x.rtl?-x.translate:x.translate:(r=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(s=r.transform||r.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),i=new window.WebKitCSSMatrix("none"===s?"":s)):(i=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=i.toString().split(",")),"x"===a&&(s=window.WebKitCSSMatrix?i.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(s=window.WebKitCSSMatrix?i.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),x.rtl&&s&&(s=-s),s||0)},x.getWrapperTranslate=function(e){return void 0===e&&(e=x.isHorizontal()?"x":"y"),x.getTranslate(x.wrapper[0],e)},x.observers=[],x.initObservers=function(){if(x.params.observeParents)for(var e=x.container.parents(),a=0;a<e.length;a++)o(e[a]);o(x.container[0],{childList:!1}),o(x.wrapper[0],{attributes:!1})},x.disconnectObservers=function(){for(var e=0;e<x.observers.length;e++)x.observers[e].disconnect();x.observers=[]},x.createLoop=function(){x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass).remove();var a=x.wrapper.children("."+x.params.slideClass);"auto"!==x.params.slidesPerView||x.params.loopedSlides||(x.params.loopedSlides=a.length),x.loopedSlides=parseInt(x.params.loopedSlides||x.params.slidesPerView,10),x.loopedSlides=x.loopedSlides+x.params.loopAdditionalSlides,x.loopedSlides>a.length&&(x.loopedSlides=a.length);var t,s=[],r=[];for(a.each(function(t,i){var n=e(this);t<x.loopedSlides&&r.push(i),t<a.length&&t>=a.length-x.loopedSlides&&s.push(i),n.attr("data-swiper-slide-index",t)}),t=0;t<r.length;t++)x.wrapper.append(e(r[t].cloneNode(!0)).addClass(x.params.slideDuplicateClass));for(t=s.length-1;t>=0;t--)x.wrapper.prepend(e(s[t].cloneNode(!0)).addClass(x.params.slideDuplicateClass))},x.destroyLoop=function(){x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass).remove(),x.slides.removeAttr("data-swiper-slide-index")},x.reLoop=function(e){var a=x.activeIndex-x.loopedSlides;x.destroyLoop(),x.createLoop(),x.updateSlidesSize(),e&&x.slideTo(a+x.loopedSlides,0,!1)},x.fixLoop=function(){var e;x.activeIndex<x.loopedSlides?(e=x.slides.length-3*x.loopedSlides+x.activeIndex,e+=x.loopedSlides,x.slideTo(e,0,!1,!0)):("auto"===x.params.slidesPerView&&x.activeIndex>=2*x.loopedSlides||x.activeIndex>x.slides.length-2*x.params.slidesPerView)&&(e=-x.slides.length+x.activeIndex+x.loopedSlides,e+=x.loopedSlides,x.slideTo(e,0,!1,!0))},x.appendSlide=function(e){if(x.params.loop&&x.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&x.wrapper.append(e[a]);else x.wrapper.append(e);x.params.loop&&x.createLoop(),x.params.observer&&x.support.observer||x.update(!0)},x.prependSlide=function(e){x.params.loop&&x.destroyLoop();var a=x.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&x.wrapper.prepend(e[t]);a=x.activeIndex+e.length}else x.wrapper.prepend(e);x.params.loop&&x.createLoop(),x.params.observer&&x.support.observer||x.update(!0),x.slideTo(a,0,!1)},x.removeSlide=function(e){x.params.loop&&(x.destroyLoop(),x.slides=x.wrapper.children("."+x.params.slideClass));var a,t=x.activeIndex;if("object"==typeof e&&e.length){for(var s=0;s<e.length;s++)a=e[s],x.slides[a]&&x.slides.eq(a).remove(),a<t&&t--;t=Math.max(t,0)}else a=e,x.slides[a]&&x.slides.eq(a).remove(),a<t&&t--,t=Math.max(t,0);x.params.loop&&x.createLoop(),x.params.observer&&x.support.observer||x.update(!0),x.params.loop?x.slideTo(t+x.loopedSlides,0,!1):x.slideTo(t,0,!1)},x.removeAllSlides=function(){for(var e=[],a=0;a<x.slides.length;a++)e.push(a);x.removeSlide(e)},x.effects={fade:{setTranslate:function(){for(var e=0;e<x.slides.length;e++){var a=x.slides.eq(e),t=a[0].swiperSlideOffset,s=-t;x.params.virtualTranslate||(s-=x.translate);var r=0;x.isHorizontal()||(r=s,s=0);var i=x.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:i}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){if(x.slides.transition(e),x.params.virtualTranslate&&0!==e){var a=!1;x.slides.transitionEnd(function(){if(!a&&x){a=!0,x.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)x.wrapper.trigger(e[t])}})}}},flip:{setTranslate:function(){for(var a=0;a<x.slides.length;a++){var t=x.slides.eq(a),s=t[0].progress;x.params.flip.limitRotation&&(s=Math.max(Math.min(t[0].progress,1),-1));var r=t[0].swiperSlideOffset,i=-180*s,n=i,o=0,l=-r,p=0;if(x.isHorizontal()?x.rtl&&(n=-n):(p=l,l=0,o=-n,n=0),t[0].style.zIndex=-Math.abs(Math.round(s))+x.slides.length,x.params.flip.slideShadows){var d=x.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),m=x.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===d.length&&(d=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"left":"top")+'"></div>'),t.append(d)),0===m.length&&(m=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"right":"bottom")+'"></div>'),t.append(m)),d.length&&(d[0].style.opacity=Math.max(-s,0)),m.length&&(m[0].style.opacity=Math.max(s,0))}t.transform("translate3d("+l+"px, "+p+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(a){if(x.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a),x.params.virtualTranslate&&0!==a){var t=!1;x.slides.eq(x.activeIndex).transitionEnd(function(){if(!t&&x&&e(this).hasClass(x.params.slideActiveClass)){t=!0,x.animating=!1;for(var a=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=0;s<a.length;s++)x.wrapper.trigger(a[s])}})}}},cube:{setTranslate:function(){var a,t=0;x.params.cube.shadow&&(x.isHorizontal()?(a=x.wrapper.find(".swiper-cube-shadow"),0===a.length&&(a=e('<div class="swiper-cube-shadow"></div>'),x.wrapper.append(a)),a.css({height:x.width+"px"})):(a=x.container.find(".swiper-cube-shadow"),0===a.length&&(a=e('<div class="swiper-cube-shadow"></div>'),x.container.append(a))));for(var s=0;s<x.slides.length;s++){var r=x.slides.eq(s),i=90*s,n=Math.floor(i/360);x.rtl&&(i=-i,n=Math.floor(-i/360));var o=Math.max(Math.min(r[0].progress,1),-1),l=0,p=0,d=0;s%4==0?(l=4*-n*x.size,d=0):(s-1)%4==0?(l=0,d=4*-n*x.size):(s-2)%4==0?(l=x.size+4*n*x.size,d=x.size):(s-3)%4==0&&(l=-x.size,d=3*x.size+4*x.size*n),x.rtl&&(l=-l),x.isHorizontal()||(p=l,l=0);var m="rotateX("+(x.isHorizontal()?0:-i)+"deg) rotateY("+(x.isHorizontal()?i:0)+"deg) translate3d("+l+"px, "+p+"px, "+d+"px)";if(o<=1&&o>-1&&(t=90*s+90*o,x.rtl&&(t=90*-s-90*o)),r.transform(m),x.params.cube.slideShadows){var u=x.isHorizontal()?r.find(".swiper-slide-shadow-left"):r.find(".swiper-slide-shadow-top"),c=x.isHorizontal()?r.find(".swiper-slide-shadow-right"):r.find(".swiper-slide-shadow-bottom");0===u.length&&(u=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"left":"top")+'"></div>'),r.append(u)),0===c.length&&(c=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"right":"bottom")+'"></div>'),r.append(c)),u.length&&(u[0].style.opacity=Math.max(-o,0)),c.length&&(c[0].style.opacity=Math.max(o,0))}}if(x.wrapper.css({"-webkit-transform-origin":"50% 50% -"+x.size/2+"px","-moz-transform-origin":"50% 50% -"+x.size/2+"px","-ms-transform-origin":"50% 50% -"+x.size/2+"px","transform-origin":"50% 50% -"+x.size/2+"px"}),x.params.cube.shadow)if(x.isHorizontal())a.transform("translate3d(0px, "+(x.width/2+x.params.cube.shadowOffset)+"px, "+-x.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+x.params.cube.shadowScale+")");else{var g=Math.abs(t)-90*Math.floor(Math.abs(t)/90),h=1.5-(Math.sin(2*g*Math.PI/360)/2+Math.cos(2*g*Math.PI/360)/2),v=x.params.cube.shadowScale,f=x.params.cube.shadowScale/h,w=x.params.cube.shadowOffset;a.transform("scale3d("+v+", 1, "+f+") translate3d(0px, "+(x.height/2+w)+"px, "+-x.height/2/f+"px) rotateX(-90deg)")}var y=x.isSafari||x.isUiWebView?-x.size/2:0;x.wrapper.transform("translate3d(0px,0,"+y+"px) rotateX("+(x.isHorizontal()?0:t)+"deg) rotateY("+(x.isHorizontal()?-t:0)+"deg)")},setTransition:function(e){x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),x.params.cube.shadow&&!x.isHorizontal()&&x.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var a=x.translate,t=x.isHorizontal()?-a+x.width/2:-a+x.height/2,s=x.isHorizontal()?x.params.coverflow.rotate:-x.params.coverflow.rotate,r=x.params.coverflow.depth,i=0,n=x.slides.length;i<n;i++){var o=x.slides.eq(i),l=x.slidesSizesGrid[i],p=o[0].swiperSlideOffset,d=(t-p-l/2)/l*x.params.coverflow.modifier,m=x.isHorizontal()?s*d:0,u=x.isHorizontal()?0:s*d,c=-r*Math.abs(d),g=x.isHorizontal()?0:x.params.coverflow.stretch*d,h=x.isHorizontal()?x.params.coverflow.stretch*d:0;Math.abs(h)<.001&&(h=0),Math.abs(g)<.001&&(g=0),Math.abs(c)<.001&&(c=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0);var v="translate3d("+h+"px,"+g+"px,"+c+"px)  rotateX("+u+"deg) rotateY("+m+"deg)";if(o.transform(v),o[0].style.zIndex=1-Math.abs(Math.round(d)),x.params.coverflow.slideShadows){var f=x.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),w=x.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===f.length&&(f=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"left":"top")+'"></div>'),o.append(f)),0===w.length&&(w=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"right":"bottom")+'"></div>'),o.append(w)),f.length&&(f[0].style.opacity=d>0?d:0),w.length&&(w[0].style.opacity=-d>0?-d:0)}}if(x.browser.ie){x.wrapper[0].style.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},x.lazy={initialImageLoaded:!1,loadImageInSlide:function(a,t){if(void 0!==a&&(void 0===t&&(t=!0),0!==x.slides.length)){var s=x.slides.eq(a),r=s.find("."+x.params.lazyLoadingClass+":not(."+x.params.lazyStatusLoadedClass+"):not(."+x.params.lazyStatusLoadingClass+")");!s.hasClass(x.params.lazyLoadingClass)||s.hasClass(x.params.lazyStatusLoadedClass)||s.hasClass(x.params.lazyStatusLoadingClass)||(r=r.add(s[0])),0!==r.length&&r.each(function(){var a=e(this);a.addClass(x.params.lazyStatusLoadingClass);var r=a.attr("data-background"),i=a.attr("data-src"),n=a.attr("data-srcset"),o=a.attr("data-sizes");x.loadImage(a[0],i||r,n,o,!1,function(){if(void 0!==x&&null!==x&&x){if(r?(a.css("background-image",'url("'+r+'")'),a.removeAttr("data-background")):(n&&(a.attr("srcset",n),a.removeAttr("data-srcset")),o&&(a.attr("sizes",o),a.removeAttr("data-sizes")),i&&(a.attr("src",i),a.removeAttr("data-src"))),a.addClass(x.params.lazyStatusLoadedClass).removeClass(x.params.lazyStatusLoadingClass),s.find("."+x.params.lazyPreloaderClass+", ."+x.params.preloaderClass).remove(),x.params.loop&&t){var e=s.attr("data-swiper-slide-index");if(s.hasClass(x.params.slideDuplicateClass)){var l=x.wrapper.children('[data-swiper-slide-index="'+e+'"]:not(.'+x.params.slideDuplicateClass+")");x.lazy.loadImageInSlide(l.index(),!1)}else{var p=x.wrapper.children("."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');x.lazy.loadImageInSlide(p.index(),!1)}}x.emit("onLazyImageReady",x,s[0],a[0])}}),x.emit("onLazyImageLoad",x,s[0],a[0])})}},load:function(){var a,t=x.params.slidesPerView;if("auto"===t&&(t=0),x.lazy.initialImageLoaded||(x.lazy.initialImageLoaded=!0),x.params.watchSlidesVisibility)x.wrapper.children("."+x.params.slideVisibleClass).each(function(){x.lazy.loadImageInSlide(e(this).index())});else if(t>1)for(a=x.activeIndex;a<x.activeIndex+t;a++)x.slides[a]&&x.lazy.loadImageInSlide(a);else x.lazy.loadImageInSlide(x.activeIndex);if(x.params.lazyLoadingInPrevNext)if(t>1||x.params.lazyLoadingInPrevNextAmount&&x.params.lazyLoadingInPrevNextAmount>1){var s=x.params.lazyLoadingInPrevNextAmount,r=t,i=Math.min(x.activeIndex+r+Math.max(s,r),x.slides.length),n=Math.max(x.activeIndex-Math.max(r,s),0);for(a=x.activeIndex+t;a<i;a++)x.slides[a]&&x.lazy.loadImageInSlide(a);for(a=n;a<x.activeIndex;a++)x.slides[a]&&x.lazy.loadImageInSlide(a)}else{var o=x.wrapper.children("."+x.params.slideNextClass);o.length>0&&x.lazy.loadImageInSlide(o.index());var l=x.wrapper.children("."+x.params.slidePrevClass);l.length>0&&x.lazy.loadImageInSlide(l.index())}},onTransitionStart:function(){x.params.lazyLoading&&(x.params.lazyLoadingOnTransitionStart||!x.params.lazyLoadingOnTransitionStart&&!x.lazy.initialImageLoaded)&&x.lazy.load()},onTransitionEnd:function(){x.params.lazyLoading&&!x.params.lazyLoadingOnTransitionStart&&x.lazy.load()}},x.scrollbar={isTouched:!1,setDragPosition:function(e){var a=x.scrollbar,t=x.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,s=t-a.track.offset()[x.isHorizontal()?"left":"top"]-a.dragSize/2,r=-x.minTranslate()*a.moveDivider,i=-x.maxTranslate()*a.moveDivider;s<r?s=r:s>i&&(s=i),s=-s/a.moveDivider,x.updateProgress(s),x.setWrapperTranslate(s,!0)},dragStart:function(e){var a=x.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),x.params.scrollbarHide&&a.track.css("opacity",1),x.wrapper.transition(100),a.drag.transition(100),x.emit("onScrollbarDragStart",x)},dragMove:function(e){var a=x.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),x.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),x.emit("onScrollbarDragMove",x))},dragEnd:function(e){var a=x.scrollbar;a.isTouched&&(a.isTouched=!1,x.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),x.emit("onScrollbarDragEnd",x),x.params.scrollbarSnapOnRelease&&x.slideReset())},draggableEvents:function(){return x.params.simulateTouch!==!1||x.support.touch?x.touchEvents:x.touchEventsDesktop}(),enableDraggable:function(){var a=x.scrollbar,t=x.support.touch?a.track:document;e(a.track).on(a.draggableEvents.start,a.dragStart),e(t).on(a.draggableEvents.move,a.dragMove),e(t).on(a.draggableEvents.end,a.dragEnd)},disableDraggable:function(){var a=x.scrollbar,t=x.support.touch?a.track:document;e(a.track).off(a.draggableEvents.start,a.dragStart),e(t).off(a.draggableEvents.move,a.dragMove),e(t).off(a.draggableEvents.end,a.dragEnd)},set:function(){if(x.params.scrollbar){var a=x.scrollbar;a.track=e(x.params.scrollbar),x.params.uniqueNavElements&&"string"==typeof x.params.scrollbar&&a.track.length>1&&1===x.container.find(x.params.scrollbar).length&&(a.track=x.container.find(x.params.scrollbar)),a.drag=a.track.find(".swiper-scrollbar-drag"),0===a.drag.length&&(a.drag=e('<div class="swiper-scrollbar-drag"></div>'),a.track.append(a.drag)),a.drag[0].style.width="",a.drag[0].style.height="",a.trackSize=x.isHorizontal()?a.track[0].offsetWidth:a.track[0].offsetHeight,a.divider=x.size/x.virtualSize,a.moveDivider=a.divider*(a.trackSize/x.size),a.dragSize=a.trackSize*a.divider,x.isHorizontal()?a.drag[0].style.width=a.dragSize+"px":a.drag[0].style.height=a.dragSize+"px",a.divider>=1?a.track[0].style.display="none":a.track[0].style.display="",x.params.scrollbarHide&&(a.track[0].style.opacity=0)}},setTranslate:function(){if(x.params.scrollbar){var e,a=x.scrollbar,t=(x.translate,a.dragSize);e=(a.trackSize-a.dragSize)*x.progress,x.rtl&&x.isHorizontal()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):e<0?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),x.isHorizontal()?(x.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(x.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),x.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){x.params.scrollbar&&x.scrollbar.drag.transition(e)}},x.controller={LinearSpline:function(e,a){var t=function(){var e,a,t;return function(s,r){for(a=-1,e=s.length;e-a>1;)s[t=e+a>>1]<=r?a=t:e=t;return e}}();this.x=e,this.y=a,this.lastIndex=e.length-1;var s,r;this.x.length;this.interpolate=function(e){return e?(r=t(this.x,e),s=r-1,(e-this.x[s])*(this.y[r]-this.y[s])/(this.x[r]-this.x[s])+this.y[s]):0}},getInterpolateFunction:function(e){x.controller.spline||(x.controller.spline=x.params.loop?new x.controller.LinearSpline(x.slidesGrid,e.slidesGrid):new x.controller.LinearSpline(x.snapGrid,e.snapGrid))},setTranslate:function(e,t){function s(a){e=a.rtl&&"horizontal"===a.params.direction?-x.translate:x.translate,"slide"===x.params.controlBy&&(x.controller.getInterpolateFunction(a),i=-x.controller.spline.interpolate(-e)),i&&"container"!==x.params.controlBy||(r=(a.maxTranslate()-a.minTranslate())/(x.maxTranslate()-x.minTranslate()),i=(e-x.minTranslate())*r+a.minTranslate()),x.params.controlInverse&&(i=a.maxTranslate()-i),a.updateProgress(i),a.setWrapperTranslate(i,!1,x),a.updateActiveIndex()}var r,i,n=x.params.control;if(Array.isArray(n))for(var o=0;o<n.length;o++)n[o]!==t&&n[o]instanceof a&&s(n[o]);else n instanceof a&&t!==n&&s(n)},setTransition:function(e,t){function s(a){a.setWrapperTransition(e,x),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){i&&(a.params.loop&&"slide"===x.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var r,i=x.params.control;if(Array.isArray(i))for(r=0;r<i.length;r++)i[r]!==t&&i[r]instanceof a&&s(i[r]);else i instanceof a&&t!==i&&s(i)}},x.hashnav={onHashCange:function(e,a){var t=document.location.hash.replace("#","");t!==x.slides.eq(x.activeIndex).attr("data-hash")&&x.slideTo(x.wrapper.children("."+x.params.slideClass+'[data-hash="'+t+'"]').index())},attachEvents:function(a){var t=a?"off":"on";e(window)[t]("hashchange",x.hashnav.onHashCange)},setHash:function(){
if(x.hashnav.initialized&&x.params.hashnav)if(x.params.replaceState&&window.history&&window.history.replaceState)window.history.replaceState(null,null,"#"+x.slides.eq(x.activeIndex).attr("data-hash")||"");else{var e=x.slides.eq(x.activeIndex),a=e.attr("data-hash")||e.attr("data-history");document.location.hash=a||""}},init:function(){if(x.params.hashnav&&!x.params.history){x.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=x.slides.length;a<t;a++){var s=x.slides.eq(a),r=s.attr("data-hash")||s.attr("data-history");if(r===e&&!s.hasClass(x.params.slideDuplicateClass)){var i=s.index();x.slideTo(i,0,x.params.runCallbacksOnInit,!0)}}x.params.hashnavWatchState&&x.hashnav.attachEvents()}},destroy:function(){x.params.hashnavWatchState&&x.hashnav.attachEvents(!0)}},x.history={init:function(){if(x.params.history){if(!window.history||!window.history.pushState)return x.params.history=!1,void(x.params.hashnav=!0);x.history.initialized=!0,this.paths=this.getPathValues(),(this.paths.key||this.paths.value)&&(this.scrollToSlide(0,this.paths.value,x.params.runCallbacksOnInit),x.params.replaceState||window.addEventListener("popstate",this.setHistoryPopState))}},setHistoryPopState:function(){x.history.paths=x.history.getPathValues(),x.history.scrollToSlide(x.params.speed,x.history.paths.value,!1)},getPathValues:function(){var e=window.location.pathname.slice(1).split("/"),a=e.length;return{key:e[a-2],value:e[a-1]}},setHistory:function(e,a){if(x.history.initialized&&x.params.history){var t=x.slides.eq(a),s=this.slugify(t.attr("data-history"));window.location.pathname.includes(e)||(s=e+"/"+s),x.params.replaceState?window.history.replaceState(null,null,s):window.history.pushState(null,null,s)}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,a,t){if(a)for(var s=0,r=x.slides.length;s<r;s++){var i=x.slides.eq(s),n=this.slugify(i.attr("data-history"));if(n===a&&!i.hasClass(x.params.slideDuplicateClass)){var o=i.index();x.slideTo(o,e,t)}}else x.slideTo(0,e,t)}},x.disableKeyboardControl=function(){x.params.keyboardControl=!1,e(document).off("keydown",l)},x.enableKeyboardControl=function(){x.params.keyboardControl=!0,e(document).on("keydown",l)},x.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},x.params.mousewheelControl&&(x.mousewheel.event=navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var e="onwheel"in document;if(!e){var a=document.createElement("div");a.setAttribute("onwheel","return;"),e="function"==typeof a.onwheel}return!e&&document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0&&(e=document.implementation.hasFeature("Events.wheel","3.0")),e}()?"wheel":"mousewheel"),x.disableMousewheelControl=function(){if(!x.mousewheel.event)return!1;var a=x.container;return"container"!==x.params.mousewheelEventsTarged&&(a=e(x.params.mousewheelEventsTarged)),a.off(x.mousewheel.event,d),x.params.mousewheelControl=!1,!0},x.enableMousewheelControl=function(){if(!x.mousewheel.event)return!1;var a=x.container;return"container"!==x.params.mousewheelEventsTarged&&(a=e(x.params.mousewheelEventsTarged)),a.on(x.mousewheel.event,d),x.params.mousewheelControl=!0,!0},x.parallax={setTranslate:function(){x.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){m(this,x.progress)}),x.slides.each(function(){var a=e(this);a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){m(this,Math.min(Math.max(a[0].progress,-1),1))})})},setTransition:function(a){void 0===a&&(a=x.params.speed),x.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=e(this),s=parseInt(t.attr("data-swiper-parallax-duration"),10)||a;0===a&&(s=0),t.transition(s)})}},x.zoom={scale:1,currentScale:1,isScaling:!1,gesture:{slide:void 0,slideWidth:void 0,slideHeight:void 0,image:void 0,imageWrap:void 0,zoomMax:x.params.zoomMax},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0},getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var a=e.targetTouches[0].pageX,t=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,r=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-a,2)+Math.pow(r-t,2))},onGestureStart:function(a){var t=x.zoom;if(!x.support.gestures){if("touchstart"!==a.type||"touchstart"===a.type&&a.targetTouches.length<2)return;t.gesture.scaleStart=t.getDistanceBetweenTouches(a)}if(!(t.gesture.slide&&t.gesture.slide.length||(t.gesture.slide=e(this),0===t.gesture.slide.length&&(t.gesture.slide=x.slides.eq(x.activeIndex)),t.gesture.image=t.gesture.slide.find("img, svg, canvas"),t.gesture.imageWrap=t.gesture.image.parent("."+x.params.zoomContainerClass),t.gesture.zoomMax=t.gesture.imageWrap.attr("data-swiper-zoom")||x.params.zoomMax,0!==t.gesture.imageWrap.length)))return void(t.gesture.image=void 0);t.gesture.image.transition(0),t.isScaling=!0},onGestureChange:function(e){var a=x.zoom;if(!x.support.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;a.gesture.scaleMove=a.getDistanceBetweenTouches(e)}a.gesture.image&&0!==a.gesture.image.length&&(x.support.gestures?a.scale=e.scale*a.currentScale:a.scale=a.gesture.scaleMove/a.gesture.scaleStart*a.currentScale,a.scale>a.gesture.zoomMax&&(a.scale=a.gesture.zoomMax-1+Math.pow(a.scale-a.gesture.zoomMax+1,.5)),a.scale<x.params.zoomMin&&(a.scale=x.params.zoomMin+1-Math.pow(x.params.zoomMin-a.scale+1,.5)),a.gesture.image.transform("translate3d(0,0,0) scale("+a.scale+")"))},onGestureEnd:function(e){var a=x.zoom;!x.support.gestures&&("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2)||a.gesture.image&&0!==a.gesture.image.length&&(a.scale=Math.max(Math.min(a.scale,a.gesture.zoomMax),x.params.zoomMin),a.gesture.image.transition(x.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(a.gesture.slide=void 0))},onTouchStart:function(e,a){var t=e.zoom;t.gesture.image&&0!==t.gesture.image.length&&(t.image.isTouched||("android"===e.device.os&&a.preventDefault(),t.image.isTouched=!0,t.image.touchesStart.x="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,t.image.touchesStart.y="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY))},onTouchMove:function(e){var a=x.zoom;if(a.gesture.image&&0!==a.gesture.image.length&&(x.allowClick=!1,a.image.isTouched&&a.gesture.slide)){a.image.isMoved||(a.image.width=a.gesture.image[0].offsetWidth,a.image.height=a.gesture.image[0].offsetHeight,a.image.startX=x.getTranslate(a.gesture.imageWrap[0],"x")||0,a.image.startY=x.getTranslate(a.gesture.imageWrap[0],"y")||0,a.gesture.slideWidth=a.gesture.slide[0].offsetWidth,a.gesture.slideHeight=a.gesture.slide[0].offsetHeight,a.gesture.imageWrap.transition(0),x.rtl&&(a.image.startX=-a.image.startX),x.rtl&&(a.image.startY=-a.image.startY));var t=a.image.width*a.scale,s=a.image.height*a.scale;if(!(t<a.gesture.slideWidth&&s<a.gesture.slideHeight)){if(a.image.minX=Math.min(a.gesture.slideWidth/2-t/2,0),a.image.maxX=-a.image.minX,a.image.minY=Math.min(a.gesture.slideHeight/2-s/2,0),a.image.maxY=-a.image.minY,a.image.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,a.image.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!a.image.isMoved&&!a.isScaling){if(x.isHorizontal()&&Math.floor(a.image.minX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x<a.image.touchesStart.x||Math.floor(a.image.maxX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x>a.image.touchesStart.x)return void(a.image.isTouched=!1);if(!x.isHorizontal()&&Math.floor(a.image.minY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y<a.image.touchesStart.y||Math.floor(a.image.maxY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y>a.image.touchesStart.y)return void(a.image.isTouched=!1)}e.preventDefault(),e.stopPropagation(),a.image.isMoved=!0,a.image.currentX=a.image.touchesCurrent.x-a.image.touchesStart.x+a.image.startX,a.image.currentY=a.image.touchesCurrent.y-a.image.touchesStart.y+a.image.startY,a.image.currentX<a.image.minX&&(a.image.currentX=a.image.minX+1-Math.pow(a.image.minX-a.image.currentX+1,.8)),a.image.currentX>a.image.maxX&&(a.image.currentX=a.image.maxX-1+Math.pow(a.image.currentX-a.image.maxX+1,.8)),a.image.currentY<a.image.minY&&(a.image.currentY=a.image.minY+1-Math.pow(a.image.minY-a.image.currentY+1,.8)),a.image.currentY>a.image.maxY&&(a.image.currentY=a.image.maxY-1+Math.pow(a.image.currentY-a.image.maxY+1,.8)),a.velocity.prevPositionX||(a.velocity.prevPositionX=a.image.touchesCurrent.x),a.velocity.prevPositionY||(a.velocity.prevPositionY=a.image.touchesCurrent.y),a.velocity.prevTime||(a.velocity.prevTime=Date.now()),a.velocity.x=(a.image.touchesCurrent.x-a.velocity.prevPositionX)/(Date.now()-a.velocity.prevTime)/2,a.velocity.y=(a.image.touchesCurrent.y-a.velocity.prevPositionY)/(Date.now()-a.velocity.prevTime)/2,Math.abs(a.image.touchesCurrent.x-a.velocity.prevPositionX)<2&&(a.velocity.x=0),Math.abs(a.image.touchesCurrent.y-a.velocity.prevPositionY)<2&&(a.velocity.y=0),a.velocity.prevPositionX=a.image.touchesCurrent.x,a.velocity.prevPositionY=a.image.touchesCurrent.y,a.velocity.prevTime=Date.now(),a.gesture.imageWrap.transform("translate3d("+a.image.currentX+"px, "+a.image.currentY+"px,0)")}}},onTouchEnd:function(e,a){var t=e.zoom;if(t.gesture.image&&0!==t.gesture.image.length){if(!t.image.isTouched||!t.image.isMoved)return t.image.isTouched=!1,void(t.image.isMoved=!1);t.image.isTouched=!1,t.image.isMoved=!1;var s=300,r=300,i=t.velocity.x*s,n=t.image.currentX+i,o=t.velocity.y*r,l=t.image.currentY+o;0!==t.velocity.x&&(s=Math.abs((n-t.image.currentX)/t.velocity.x)),0!==t.velocity.y&&(r=Math.abs((l-t.image.currentY)/t.velocity.y));var p=Math.max(s,r);t.image.currentX=n,t.image.currentY=l;var d=t.image.width*t.scale,m=t.image.height*t.scale;t.image.minX=Math.min(t.gesture.slideWidth/2-d/2,0),t.image.maxX=-t.image.minX,t.image.minY=Math.min(t.gesture.slideHeight/2-m/2,0),t.image.maxY=-t.image.minY,t.image.currentX=Math.max(Math.min(t.image.currentX,t.image.maxX),t.image.minX),t.image.currentY=Math.max(Math.min(t.image.currentY,t.image.maxY),t.image.minY),t.gesture.imageWrap.transition(p).transform("translate3d("+t.image.currentX+"px, "+t.image.currentY+"px,0)")}},onTransitionEnd:function(e){var a=e.zoom;a.gesture.slide&&e.previousIndex!==e.activeIndex&&(a.gesture.image.transform("translate3d(0,0,0) scale(1)"),a.gesture.imageWrap.transform("translate3d(0,0,0)"),a.gesture.slide=a.gesture.image=a.gesture.imageWrap=void 0,a.scale=a.currentScale=1)},toggleZoom:function(a,t){var s=a.zoom;if(s.gesture.slide||(s.gesture.slide=a.clickedSlide?e(a.clickedSlide):a.slides.eq(a.activeIndex),s.gesture.image=s.gesture.slide.find("img, svg, canvas"),s.gesture.imageWrap=s.gesture.image.parent("."+a.params.zoomContainerClass)),s.gesture.image&&0!==s.gesture.image.length){var r,i,n,o,l,p,d,m,u,c,g,h,v,f,w,y,x,T;void 0===s.image.touchesStart.x&&t?(r="touchend"===t.type?t.changedTouches[0].pageX:t.pageX,i="touchend"===t.type?t.changedTouches[0].pageY:t.pageY):(r=s.image.touchesStart.x,i=s.image.touchesStart.y),s.scale&&1!==s.scale?(s.scale=s.currentScale=1,s.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),s.gesture.slide=void 0):(s.scale=s.currentScale=s.gesture.imageWrap.attr("data-swiper-zoom")||a.params.zoomMax,t?(x=s.gesture.slide[0].offsetWidth,T=s.gesture.slide[0].offsetHeight,n=s.gesture.slide.offset().left,o=s.gesture.slide.offset().top,l=n+x/2-r,p=o+T/2-i,u=s.gesture.image[0].offsetWidth,c=s.gesture.image[0].offsetHeight,g=u*s.scale,h=c*s.scale,v=Math.min(x/2-g/2,0),f=Math.min(T/2-h/2,0),w=-v,y=-f,d=l*s.scale,m=p*s.scale,d<v&&(d=v),d>w&&(d=w),m<f&&(m=f),m>y&&(m=y)):(d=0,m=0),s.gesture.imageWrap.transition(300).transform("translate3d("+d+"px, "+m+"px,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale("+s.scale+")"))}},attachEvents:function(a){var t=a?"off":"on";if(x.params.zoom){var s=(x.slides,!("touchstart"!==x.touchEvents.start||!x.support.passiveListener||!x.params.passiveListeners)&&{passive:!0,capture:!1});x.support.gestures?(x.slides[t]("gesturestart",x.zoom.onGestureStart,s),x.slides[t]("gesturechange",x.zoom.onGestureChange,s),x.slides[t]("gestureend",x.zoom.onGestureEnd,s)):"touchstart"===x.touchEvents.start&&(x.slides[t](x.touchEvents.start,x.zoom.onGestureStart,s),x.slides[t](x.touchEvents.move,x.zoom.onGestureChange,s),x.slides[t](x.touchEvents.end,x.zoom.onGestureEnd,s)),x[t]("touchStart",x.zoom.onTouchStart),x.slides.each(function(a,s){e(s).find("."+x.params.zoomContainerClass).length>0&&e(s)[t](x.touchEvents.move,x.zoom.onTouchMove)}),x[t]("touchEnd",x.zoom.onTouchEnd),x[t]("transitionEnd",x.zoom.onTransitionEnd),x.params.zoomToggle&&x.on("doubleTap",x.zoom.toggleZoom)}},init:function(){x.zoom.attachEvents()},destroy:function(){x.zoom.attachEvents(!0)}},x._plugins=[];for(var Y in x.plugins){var A=x.plugins[Y](x,x.params[Y]);A&&x._plugins.push(A)}return x.callPlugins=function(e){for(var a=0;a<x._plugins.length;a++)e in x._plugins[a]&&x._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},x.emitterEventListeners={},x.emit=function(e){x.params[e]&&x.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(x.emitterEventListeners[e])for(a=0;a<x.emitterEventListeners[e].length;a++)x.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);x.callPlugins&&x.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},x.on=function(e,a){return e=u(e),x.emitterEventListeners[e]||(x.emitterEventListeners[e]=[]),x.emitterEventListeners[e].push(a),x},x.off=function(e,a){var t;if(e=u(e),void 0===a)return x.emitterEventListeners[e]=[],x;if(x.emitterEventListeners[e]&&0!==x.emitterEventListeners[e].length){for(t=0;t<x.emitterEventListeners[e].length;t++)x.emitterEventListeners[e][t]===a&&x.emitterEventListeners[e].splice(t,1);return x}},x.once=function(e,a){e=u(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),x.off(e,t)};return x.on(e,t),x},x.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(a){13===a.keyCode&&(e(a.target).is(x.params.nextButton)?(x.onClickNext(a),x.isEnd?x.a11y.notify(x.params.lastSlideMessage):x.a11y.notify(x.params.nextSlideMessage)):e(a.target).is(x.params.prevButton)&&(x.onClickPrev(a),x.isBeginning?x.a11y.notify(x.params.firstSlideMessage):x.a11y.notify(x.params.prevSlideMessage)),e(a.target).is("."+x.params.bulletClass)&&e(a.target)[0].click())},liveRegion:e('<span class="'+x.params.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=x.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){x.params.nextButton&&x.nextButton&&x.nextButton.length>0&&(x.a11y.makeFocusable(x.nextButton),x.a11y.addRole(x.nextButton,"button"),x.a11y.addLabel(x.nextButton,x.params.nextSlideMessage)),x.params.prevButton&&x.prevButton&&x.prevButton.length>0&&(x.a11y.makeFocusable(x.prevButton),x.a11y.addRole(x.prevButton,"button"),x.a11y.addLabel(x.prevButton,x.params.prevSlideMessage)),e(x.container).append(x.a11y.liveRegion)},initPagination:function(){x.params.pagination&&x.params.paginationClickable&&x.bullets&&x.bullets.length&&x.bullets.each(function(){var a=e(this);x.a11y.makeFocusable(a),x.a11y.addRole(a,"button"),x.a11y.addLabel(a,x.params.paginationBulletMessage.replace(/{{index}}/,a.index()+1))})},destroy:function(){x.a11y.liveRegion&&x.a11y.liveRegion.length>0&&x.a11y.liveRegion.remove()}},x.init=function(){x.params.loop&&x.createLoop(),x.updateContainerSize(),x.updateSlidesSize(),x.updatePagination(),x.params.scrollbar&&x.scrollbar&&(x.scrollbar.set(),x.params.scrollbarDraggable&&x.scrollbar.enableDraggable()),"slide"!==x.params.effect&&x.effects[x.params.effect]&&(x.params.loop||x.updateProgress(),x.effects[x.params.effect].setTranslate()),x.params.loop?x.slideTo(x.params.initialSlide+x.loopedSlides,0,x.params.runCallbacksOnInit):(x.slideTo(x.params.initialSlide,0,x.params.runCallbacksOnInit),0===x.params.initialSlide&&(x.parallax&&x.params.parallax&&x.parallax.setTranslate(),x.lazy&&x.params.lazyLoading&&(x.lazy.load(),x.lazy.initialImageLoaded=!0))),x.attachEvents(),x.params.observer&&x.support.observer&&x.initObservers(),x.params.preloadImages&&!x.params.lazyLoading&&x.preloadImages(),x.params.zoom&&x.zoom&&x.zoom.init(),x.params.autoplay&&x.startAutoplay(),x.params.keyboardControl&&x.enableKeyboardControl&&x.enableKeyboardControl(),x.params.mousewheelControl&&x.enableMousewheelControl&&x.enableMousewheelControl(),x.params.hashnavReplaceState&&(x.params.replaceState=x.params.hashnavReplaceState),x.params.history&&x.history&&x.history.init(),x.params.hashnav&&x.hashnav&&x.hashnav.init(),x.params.a11y&&x.a11y&&x.a11y.init(),x.emit("onInit",x)},x.cleanupStyles=function(){x.container.removeClass(x.classNames.join(" ")).removeAttr("style"),x.wrapper.removeAttr("style"),x.slides&&x.slides.length&&x.slides.removeClass([x.params.slideVisibleClass,x.params.slideActiveClass,x.params.slideNextClass,x.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),x.paginationContainer&&x.paginationContainer.length&&x.paginationContainer.removeClass(x.params.paginationHiddenClass),x.bullets&&x.bullets.length&&x.bullets.removeClass(x.params.bulletActiveClass),x.params.prevButton&&e(x.params.prevButton).removeClass(x.params.buttonDisabledClass),x.params.nextButton&&e(x.params.nextButton).removeClass(x.params.buttonDisabledClass),x.params.scrollbar&&x.scrollbar&&(x.scrollbar.track&&x.scrollbar.track.length&&x.scrollbar.track.removeAttr("style"),x.scrollbar.drag&&x.scrollbar.drag.length&&x.scrollbar.drag.removeAttr("style"))},x.destroy=function(e,a){x.detachEvents(),x.stopAutoplay(),x.params.scrollbar&&x.scrollbar&&x.params.scrollbarDraggable&&x.scrollbar.disableDraggable(),x.params.loop&&x.destroyLoop(),a&&x.cleanupStyles(),x.disconnectObservers(),x.params.zoom&&x.zoom&&x.zoom.destroy(),x.params.keyboardControl&&x.disableKeyboardControl&&x.disableKeyboardControl(),x.params.mousewheelControl&&x.disableMousewheelControl&&x.disableMousewheelControl(),x.params.a11y&&x.a11y&&x.a11y.destroy(),x.params.history&&!x.params.replaceState&&window.removeEventListener("popstate",x.history.setHistoryPopState),x.params.hashnav&&x.hashnav&&x.hashnav.destroy(),x.emit("onDestroy"),e!==!1&&(x=null)},x.init(),x}};a.prototype={isSafari:function(){var e=window.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1,lteIE9:function(){var e=document.createElement("div");return e.innerHTML="<!--[if lte IE 9]><i></i><![endif]-->",1===e.getElementsByTagName("i").length}()},device:function(){var e=window.navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),s=e.match(/(iPod)(.*OS\s([\d_]+))?/),r=!t&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);return{ios:t||r||s,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}(),passiveListener:function(){var e=!1;try{var a=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassiveListener",null,a)}catch(e){}return e}(),gestures:function(){return"ongesturestart"in window}()},plugins:{}};for(var t=["jQuery","Zepto","Dom7"],s=0;s<t.length;s++)window[t[s]]&&function(e){e.fn.swiper=function(t){var s;return e(this).each(function(){var e=new a(this,t);s||(s=e)}),s}}(window[t[s]]);var r;r="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7,r&&("transitionEnd"in r.fn||(r.fn.transitionEnd=function(e){function a(i){if(i.target===this)for(e.call(this,i),t=0;t<s.length;t++)r.off(s[t],a)}var t,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],r=this;if(e)for(t=0;t<s.length;t++)r.on(s[t],a);return this}),"transform"in r.fn||(r.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in r.fn||(r.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this}),"outerWidth"in r.fn||(r.fn.outerWidth=function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null})),window.Swiper=a}(),"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper});
//# sourceMappingURL=maps/swiper.jquery.min.js.map


/*!
* Optiscroll.js v3.0.0
* https://github.com/wilsonfletcher/Optiscroll/
* 
* @copyright 2017 Alberto Gasparin
* @license Released under MIT LICENSE
*/
!function(a,b,c,d){"use strict";function e(){var a,c,d=b.documentElement,e=0,f=1;return a=b.createElement("div"),a.style.cssText="overflow:scroll;width:50px;height:50px;position:absolute;left:-100px;direction:rtl",c=b.createElement("div"),c.style.cssText="width:100px;height:100px",a.appendChild(c),d.appendChild(a),e=a.offsetWidth-a.clientWidth,a.scrollLeft>0?f=0:(a.scrollLeft=1,0===a.scrollLeft&&(f=-1)),d.removeChild(a),{width:e,rtl:f}}function f(){var b=!1,c=Object.defineProperty({},"passive",{get:function(){b=!0}});return a.addEventListener("test",null,c),b?{capture:!1,passive:!0}:!1}function g(a){var c=a.charAt(0).toUpperCase()+a.slice(1),e=b.createElement("test"),f=[a,"Webkit"+c];for(var g in f)if(e.style[f[g]]!==d)return f[g];return""}function h(a,b,c){var d=a.className.split(/\s+/),e=d.indexOf(b);c?~e||d.push(b):~e&&d.splice(e,1),a.className=d.join(" ")}function i(a,b,c){for(var e in b)!b.hasOwnProperty(e)||a[e]!==d&&c||(a[e]=b[e]);return a}function j(a,b,c){var d,e;if(a.length)for(d=0,e=a.length;e>d;d++)a[d][b].apply(a[d],c);else for(d in a)a[d][b].apply(a[d],c)}function k(a,b){var c,d;return function(){var e=this,f=Date.now(),g=arguments;c&&c+b>f?(clearTimeout(d),d=setTimeout(function(){c=f,a.apply(e,g)},b)):(c=f,a.apply(e,g))}}var l=function r(a,b){return new r.Instance(a,b||{})},m=l.globalSettings={scrollMinUpdateInterval:25,checkFrequency:1e3,pauseCheck:!1};l.defaults={preventParentScroll:!1,forceScrollbars:!1,scrollStopDelay:300,maxTrackSize:95,minTrackSize:5,draggableTracks:!0,autoUpdate:!0,classPrefix:"optiscroll-",wrapContent:!0,rtl:!1},l.Instance=function(b,c){this.element=b,this.settings=i(i({},l.defaults),c||{}),"boolean"!=typeof c.rtl&&(this.settings.rtl="rtl"===a.getComputedStyle(b).direction),this.cache={},this.init()},l.Instance.prototype={init:function(){var a=this.element,b=this.settings,c=!1,d=this.scrollEl=b.wrapContent?p.createWrapper(a):a.firstElementChild;h(d,b.classPrefix+"content",!0),h(a,"is-enabled"+(b.rtl?" is-rtl":""),!0),this.scrollbars={v:o("v",this),h:o("h",this)},(q.scrollbarSpec.width||b.forceScrollbars)&&(c=p.hideNativeScrollbars(d,b.rtl)),c&&j(this.scrollbars,"create"),q.isTouch&&b.preventParentScroll&&h(a,b.classPrefix+"prevent",!0),this.update(),this.bind(),b.autoUpdate&&q.instances.push(this),b.autoUpdate&&!q.checkTimer&&p.checkLoop()},bind:function(){var a=this.listeners={},b=this.scrollEl;a.scroll=k(n.scroll.bind(this),m.scrollMinUpdateInterval),q.isTouch&&(a.touchstart=n.touchstart.bind(this),a.touchend=n.touchend.bind(this)),a.mousewheel=a.wheel=n.wheel.bind(this);for(var c in a)b.addEventListener(c,a[c],q.passiveEvent)},update:function(){var a=this.scrollEl,c=this.cache,e=c.clientH,f=a.scrollHeight,g=a.clientHeight,h=a.scrollWidth,i=a.clientWidth;if(f!==c.scrollH||g!==c.clientH||h!==c.scrollW||i!==c.clientW){if(c.scrollH=f,c.clientH=g,c.scrollW=h,c.clientW=i,e!==d){if(0===f&&0===g&&!b.body.contains(this.element))return this.destroy(),!1;this.fireCustomEvent("sizechange")}j(this.scrollbars,"update")}},scrollTo:function(a,b,c){var d,e,f,g,h=this.cache;q.pauseCheck=!0,this.update(),d=this.scrollEl.scrollLeft,e=this.scrollEl.scrollTop,f=+a,"left"===a&&(f=0),"right"===a&&(f=h.scrollW-h.clientW),a===!1&&(f=d),g=+b,"top"===b&&(g=0),"bottom"===b&&(g=h.scrollH-h.clientH),b===!1&&(g=e),this.animateScroll(d,f,e,g,+c)},scrollIntoView:function(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p=this.scrollEl;q.pauseCheck=!0,this.update(),"string"==typeof a?a=p.querySelector(a):a.length&&a.jquery&&(a=a[0]),"number"==typeof c&&(c={top:c,right:c,bottom:c,left:c}),c=c||{},d=a.getBoundingClientRect(),e=p.getBoundingClientRect(),l=n=p.scrollLeft,m=o=p.scrollTop,j=l+d.left-e.left,k=m+d.top-e.top,f=j-(c.left||0),g=k-(c.top||0),h=j+d.width-this.cache.clientW+(c.right||0),i=k+d.height-this.cache.clientH+(c.bottom||0),l>f&&(n=f),h>l&&(n=h),m>g&&(o=g),i>m&&(o=i),this.animateScroll(l,n,m,o,+b)},animateScroll:function(b,d,e,f,g){var h=this,i=this.scrollEl,j=Date.now();if(d!==b||f!==e){if(0===g)return i.scrollLeft=d,void(i.scrollTop=f);isNaN(g)&&(g=15*c.pow(c.max(c.abs(d-b),c.abs(f-e)),.54)),function k(){var l=c.min(1,(Date.now()-j)/g),m=p.easingFunction(l);f!==e&&(i.scrollTop=~~(m*(f-e))+e),d!==b&&(i.scrollLeft=~~(m*(d-b))+b),h.scrollAnimation=1>l?a.requestAnimationFrame(k):null}(this)}},destroy:function(){var b,c=this,d=this.element,e=this.scrollEl,f=this.listeners;if(this.scrollEl){for(var g in f)e.removeEventListener(g,f[g]);if(j(this.scrollbars,"remove"),!this.settings.contentElement){for(;b=e.childNodes[0];)d.insertBefore(b,e);d.removeChild(e),this.scrollEl=null}h(d,this.settings.classPrefix+"prevent",!1),h(d,"is-enabled",!1),a.requestAnimationFrame(function(){var a=q.instances.indexOf(c);a>-1&&q.instances.splice(a,1)})}},fireCustomEvent:function(a){var c,d=this.cache,e=d.scrollH,f=d.scrollW;c={scrollbarV:i({},d.v),scrollbarH:i({},d.h),scrollTop:d.v.position*e,scrollLeft:d.h.position*f,scrollBottom:(1-d.v.position-d.v.size)*e,scrollRight:(1-d.h.position-d.h.size)*f,scrollWidth:f,scrollHeight:e,clientWidth:d.clientW,clientHeight:d.clientH};var g;"function"===CustomEvent?g=new CustomEvent(a,{detail:c}):(g=b.createEvent("CustomEvent"),g.initCustomEvent(a,!1,!1,c)),this.element.dispatchEvent(g)}};var n={scroll:function(a){q.pauseCheck||this.fireCustomEvent("scrollstart"),q.pauseCheck=!0,this.scrollbars.v.update(),this.scrollbars.h.update(),this.fireCustomEvent("scroll"),clearTimeout(this.cache.timerStop),this.cache.timerStop=setTimeout(n.scrollStop.bind(this),this.settings.scrollStopDelay)},touchstart:function(a){q.pauseCheck=!1,this.scrollbars.v.update(),this.scrollbars.h.update(),n.wheel.call(this,a)},touchend:function(a){clearTimeout(this.cache.timerStop)},scrollStop:function(){this.fireCustomEvent("scrollstop"),q.pauseCheck=!1},wheel:function(b){var c=this.cache,d=c.v,e=c.h,f=this.settings.preventParentScroll&&q.isTouch;a.cancelAnimationFrame(this.scrollAnimation),f&&d.enabled&&d.percent%100===0&&(this.scrollEl.scrollTop=d.percent?c.scrollH-c.clientH-1:1),f&&e.enabled&&e.percent%100===0&&(this.scrollEl.scrollLeft=e.percent?c.scrollW-c.clientW-1:1)}},o=function(a,d){var e="v"===a,f=d.element,g=d.scrollEl,j=d.settings,k=d.cache,l=k[a]={},m=e?"H":"W",n="client"+m,o="scroll"+m,p=e?"scrollTop":"scrollLeft",r=e?["top","bottom"]:["left","right"],s=q.scrollbarSpec.rtl,t=!1,u=null,v=null,w={dragData:null,dragStart:function(a){var b=a.touches?a.touches[0]:a;w.dragData={x:b.pageX,y:b.pageY,scroll:g[p]},w.bind(!0)},dragMove:function(a){var b,c,d=a.touches?a.touches[0]:a,f=j.rtl&&1===s&&!e?-1:1;a.preventDefault(),b=e?d.pageY-w.dragData.y:d.pageX-w.dragData.x,c=b/k[n],g[p]=w.dragData.scroll+c*k[o]*f},dragEnd:function(){w.dragData=null,w.bind(!1)},bind:function(a){var c=(a?"add":"remove")+"EventListener",d=q.isTouch?["touchmove","touchend"]:["mousemove","mouseup"];b[c](d[0],w.dragMove),b[c](d[1],w.dragEnd)}};return{toggle:function(b){t=b,v&&h(f,"has-"+a+"track",t),l.enabled=t},create:function(){var c=q.isTouch?"touchstart":"mousedown";u=b.createElement("div"),v=b.createElement("b"),u.className=j.classPrefix+a,v.className=j.classPrefix+a+"track",u.appendChild(v),f.appendChild(u),j.draggableTracks&&v.addEventListener(c,w.dragStart)},update:function(){var a,b,d,e,f;(t||k[n]!==k[o])&&(d=this.calc(),a=d.size,b=l.size,e=1/a*d.position*100,f=c.abs(d.position-(l.position||0))*k[n],1===a&&t&&this.toggle(!1),1>a&&!t&&this.toggle(!0),v&&t&&this.style(e,f,a,b),l=i(l,d),t&&this.fireEdgeEv())},style:function(a,b,c,d){c!==d&&(v.style[e?"height":"width"]=100*c+"%",j.rtl&&!e&&(v.style.marginRight=100*(1-c)+"%")),v.style[q.cssTransform]="translate("+(e?"0%,"+a+"%":a+"%,0%")+")"},calc:function(){var a,b,d=g[p],f=k[n],h=k[o],i=f/h,l=h-f;return i>=1||!h?{position:0,size:1,percent:0}:(!e&&j.rtl&&s&&(d=l-d*s),b=100*d/l,1>=d&&(b=0),d>=l-1&&(b=100),i=c.max(i,j.minTrackSize/100),i=c.min(i,j.maxTrackSize/100),a=(1-i)*(b/100),{position:a,size:i,percent:b})},fireEdgeEv:function(){var a=l.percent;l.was!==a&&a%100===0&&(d.fireCustomEvent("scrollreachedge"),d.fireCustomEvent("scrollreach"+r[a/100])),l.was=a},remove:function(){this.toggle(!1),u&&(u.parentNode.removeChild(u),u=null)}}},p={hideNativeScrollbars:function(a,b){var c=q.scrollbarSpec.width,d=a.style;if(0===c){var e=Date.now();return a.setAttribute("data-scroll",e),p.addCssRule('[data-scroll="'+e+'"]::-webkit-scrollbar',"display:none;width:0;height:0;")}return d[b?"left":"right"]=-c+"px",d.bottom=-c+"px",!0},addCssRule:function(a,c){var d=b.getElementById("scroll-sheet");d||(d=b.createElement("style"),d.id="scroll-sheet",d.appendChild(b.createTextNode("")),b.head.appendChild(d));try{return d.sheet.insertRule(a+" {"+c+"}",0),!0}catch(e){return}},createWrapper:function(a,c){for(var d,e=b.createElement("div");d=a.childNodes[0];)e.appendChild(d);return a.appendChild(e)},checkLoop:function(){return q.instances.length?(q.pauseCheck||j(q.instances,"update"),void(m.checkFrequency&&(q.checkTimer=setTimeout(function(){p.checkLoop()},m.checkFrequency)))):void(q.checkTimer=null)},easingFunction:function(a){return--a*a*a+1}},q=l.G={isTouch:"ontouchstart"in a,cssTransition:g("transition"),cssTransform:g("transform"),scrollbarSpec:e(),passiveEvent:f(),instances:[],checkTimer:null,pauseCheck:!1};"function"==typeof define&&define.amd&&define(function(){return l}),"undefined"!=typeof module&&module.exports&&(module.exports=l),a.Optiscroll=l}(window,document,Math),function(a){var b="optiscroll";a.fn[b]=function(c){var d,e;return"string"==typeof c&&(e=Array.prototype.slice.call(arguments),d=e.shift()),this.each(function(){var f=a(this),g=f.data(b);g?g&&"string"==typeof d&&(g[d].apply(g,e),"destroy"===d&&f.removeData(b)):(g=new window.Optiscroll(this,c||{}),f.data(b,g))})}}(jQuery||Zepto);

/*! tooltipster v4.2.5 */!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){function b(a){this.$container,this.constraints=null,this.__$tooltip,this.__init(a)}function c(b,c){var d=!0;return a.each(b,function(a,e){return void 0===c[a]||b[a]!==c[a]?(d=!1,!1):void 0}),d}function d(b){var c=b.attr("id"),d=c?h.window.document.getElementById(c):null;return d?d===b[0]:a.contains(h.window.document.body,b[0])}function e(){if(!g)return!1;var a=g.document.body||g.document.documentElement,b=a.style,c="transition",d=["Moz","Webkit","Khtml","O","ms"];if("string"==typeof b[c])return!0;c=c.charAt(0).toUpperCase()+c.substr(1);for(var e=0;e<d.length;e++)if("string"==typeof b[d[e]+c])return!0;return!1}var f={animation:"fade",animationDuration:350,content:null,contentAsHTML:!1,contentCloning:!1,debug:!0,delay:300,delayTouch:[300,500],functionInit:null,functionBefore:null,functionReady:null,functionAfter:null,functionFormat:null,IEmin:6,interactive:!1,multiple:!1,parent:null,plugins:["sideTip"],repositionOnScroll:!1,restoration:"none",selfDestruction:!0,theme:[],timer:0,trackerInterval:500,trackOrigin:!1,trackTooltip:!1,trigger:"hover",triggerClose:{click:!1,mouseleave:!1,originClick:!1,scroll:!1,tap:!1,touchleave:!1},triggerOpen:{click:!1,mouseenter:!1,tap:!1,touchstart:!1},updateAnimation:"rotate",zIndex:9999999},g="undefined"!=typeof window?window:null,h={hasTouchCapability:!(!g||!("ontouchstart"in g||g.DocumentTouch&&g.document instanceof g.DocumentTouch||g.navigator.maxTouchPoints)),hasTransitions:e(),IE:!1,semVer:"4.2.5",window:g},i=function(){this.__$emitterPrivate=a({}),this.__$emitterPublic=a({}),this.__instancesLatestArr=[],this.__plugins={},this._env=h};i.prototype={__bridge:function(b,c,d){if(!c[d]){var e=function(){};e.prototype=b;var g=new e;g.__init&&g.__init(c),a.each(b,function(a,b){0!=a.indexOf("__")&&(c[a]?f.debug&&console.log("The "+a+" method of the "+d+" plugin conflicts with another plugin or native methods"):(c[a]=function(){return g[a].apply(g,Array.prototype.slice.apply(arguments))},c[a].bridged=g))}),c[d]=g}return this},__setWindow:function(a){return h.window=a,this},_getRuler:function(a){return new b(a)},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_plugin:function(b){var c=this;if("string"==typeof b){var d=b,e=null;return d.indexOf(".")>0?e=c.__plugins[d]:a.each(c.__plugins,function(a,b){return b.name.substring(b.name.length-d.length-1)=="."+d?(e=b,!1):void 0}),e}if(b.name.indexOf(".")<0)throw new Error("Plugins must be namespaced");return c.__plugins[b.name]=b,b.core&&c.__bridge(b.core,c,b.name),this},_trigger:function(){var a=Array.prototype.slice.apply(arguments);return"string"==typeof a[0]&&(a[0]={type:a[0]}),this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,a),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,a),this},instances:function(b){var c=[],d=b||".tooltipstered";return a(d).each(function(){var b=a(this),d=b.data("tooltipster-ns");d&&a.each(d,function(a,d){c.push(b.data(d))})}),c},instancesLatest:function(){return this.__instancesLatestArr},off:function(){return this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},origins:function(b){var c=b?b+" ":"";return a(c+".tooltipstered").toArray()},setDefaults:function(b){return a.extend(f,b),this},triggerHandler:function(){return this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},a.tooltipster=new i,a.Tooltipster=function(b,c){this.__callbacks={close:[],open:[]},this.__closingTime,this.__Content,this.__contentBcr,this.__destroyed=!1,this.__$emitterPrivate=a({}),this.__$emitterPublic=a({}),this.__enabled=!0,this.__garbageCollector,this.__Geometry,this.__lastPosition,this.__namespace="tooltipster-"+Math.round(1e6*Math.random()),this.__options,this.__$originParents,this.__pointerIsOverOrigin=!1,this.__previousThemes=[],this.__state="closed",this.__timeouts={close:[],open:null},this.__touchEvents=[],this.__tracker=null,this._$origin,this._$tooltip,this.__init(b,c)},a.Tooltipster.prototype={__init:function(b,c){var d=this;if(d._$origin=a(b),d.__options=a.extend(!0,{},f,c),d.__optionsFormat(),!h.IE||h.IE>=d.__options.IEmin){var e=null;if(void 0===d._$origin.data("tooltipster-initialTitle")&&(e=d._$origin.attr("title"),void 0===e&&(e=null),d._$origin.data("tooltipster-initialTitle",e)),null!==d.__options.content)d.__contentSet(d.__options.content);else{var g,i=d._$origin.attr("data-tooltip-content");i&&(g=a(i)),g&&g[0]?d.__contentSet(g.first()):d.__contentSet(e)}d._$origin.removeAttr("title").addClass("tooltipstered"),d.__prepareOrigin(),d.__prepareGC(),a.each(d.__options.plugins,function(a,b){d._plug(b)}),h.hasTouchCapability&&a(h.window.document.body).on("touchmove."+d.__namespace+"-triggerOpen",function(a){d._touchRecordEvent(a)}),d._on("created",function(){d.__prepareTooltip()})._on("repositioned",function(a){d.__lastPosition=a.position})}else d.__options.disabled=!0},__contentInsert:function(){var a=this,b=a._$tooltip.find(".tooltipster-content"),c=a.__Content,d=function(a){c=a};return a._trigger({type:"format",content:a.__Content,format:d}),a.__options.functionFormat&&(c=a.__options.functionFormat.call(a,a,{origin:a._$origin[0]},a.__Content)),"string"!=typeof c||a.__options.contentAsHTML?b.empty().append(c):b.text(c),a},__contentSet:function(b){return b instanceof a&&this.__options.contentCloning&&(b=b.clone(!0)),this.__Content=b,this._trigger({type:"updated",content:b}),this},__destroyError:function(){throw new Error("This tooltip has been destroyed and cannot execute your method call.")},__geometry:function(){var b=this,c=b._$origin,d=b._$origin.is("area");if(d){var e=b._$origin.parent().attr("name");c=a('img[usemap="#'+e+'"]')}var f=c[0].getBoundingClientRect(),g=a(h.window.document),i=a(h.window),j=c,k={available:{document:null,window:null},document:{size:{height:g.height(),width:g.width()}},window:{scroll:{left:h.window.scrollX||h.window.document.documentElement.scrollLeft,top:h.window.scrollY||h.window.document.documentElement.scrollTop},size:{height:i.height(),width:i.width()}},origin:{fixedLineage:!1,offset:{},size:{height:f.bottom-f.top,width:f.right-f.left},usemapImage:d?c[0]:null,windowOffset:{bottom:f.bottom,left:f.left,right:f.right,top:f.top}}};if(d){var l=b._$origin.attr("shape"),m=b._$origin.attr("coords");if(m&&(m=m.split(","),a.map(m,function(a,b){m[b]=parseInt(a)})),"default"!=l)switch(l){case"circle":var n=m[0],o=m[1],p=m[2],q=o-p,r=n-p;k.origin.size.height=2*p,k.origin.size.width=k.origin.size.height,k.origin.windowOffset.left+=r,k.origin.windowOffset.top+=q;break;case"rect":var s=m[0],t=m[1],u=m[2],v=m[3];k.origin.size.height=v-t,k.origin.size.width=u-s,k.origin.windowOffset.left+=s,k.origin.windowOffset.top+=t;break;case"poly":for(var w=0,x=0,y=0,z=0,A="even",B=0;B<m.length;B++){var C=m[B];"even"==A?(C>y&&(y=C,0===B&&(w=y)),w>C&&(w=C),A="odd"):(C>z&&(z=C,1==B&&(x=z)),x>C&&(x=C),A="even")}k.origin.size.height=z-x,k.origin.size.width=y-w,k.origin.windowOffset.left+=w,k.origin.windowOffset.top+=x}}var D=function(a){k.origin.size.height=a.height,k.origin.windowOffset.left=a.left,k.origin.windowOffset.top=a.top,k.origin.size.width=a.width};for(b._trigger({type:"geometry",edit:D,geometry:{height:k.origin.size.height,left:k.origin.windowOffset.left,top:k.origin.windowOffset.top,width:k.origin.size.width}}),k.origin.windowOffset.right=k.origin.windowOffset.left+k.origin.size.width,k.origin.windowOffset.bottom=k.origin.windowOffset.top+k.origin.size.height,k.origin.offset.left=k.origin.windowOffset.left+k.window.scroll.left,k.origin.offset.top=k.origin.windowOffset.top+k.window.scroll.top,k.origin.offset.bottom=k.origin.offset.top+k.origin.size.height,k.origin.offset.right=k.origin.offset.left+k.origin.size.width,k.available.document={bottom:{height:k.document.size.height-k.origin.offset.bottom,width:k.document.size.width},left:{height:k.document.size.height,width:k.origin.offset.left},right:{height:k.document.size.height,width:k.document.size.width-k.origin.offset.right},top:{height:k.origin.offset.top,width:k.document.size.width}},k.available.window={bottom:{height:Math.max(k.window.size.height-Math.max(k.origin.windowOffset.bottom,0),0),width:k.window.size.width},left:{height:k.window.size.height,width:Math.max(k.origin.windowOffset.left,0)},right:{height:k.window.size.height,width:Math.max(k.window.size.width-Math.max(k.origin.windowOffset.right,0),0)},top:{height:Math.max(k.origin.windowOffset.top,0),width:k.window.size.width}};"html"!=j[0].tagName.toLowerCase();){if("fixed"==j.css("position")){k.origin.fixedLineage=!0;break}j=j.parent()}return k},__optionsFormat:function(){return"number"==typeof this.__options.animationDuration&&(this.__options.animationDuration=[this.__options.animationDuration,this.__options.animationDuration]),"number"==typeof this.__options.delay&&(this.__options.delay=[this.__options.delay,this.__options.delay]),"number"==typeof this.__options.delayTouch&&(this.__options.delayTouch=[this.__options.delayTouch,this.__options.delayTouch]),"string"==typeof this.__options.theme&&(this.__options.theme=[this.__options.theme]),null===this.__options.parent?this.__options.parent=a(h.window.document.body):"string"==typeof this.__options.parent&&(this.__options.parent=a(this.__options.parent)),"hover"==this.__options.trigger?(this.__options.triggerOpen={mouseenter:!0,touchstart:!0},this.__options.triggerClose={mouseleave:!0,originClick:!0,touchleave:!0}):"click"==this.__options.trigger&&(this.__options.triggerOpen={click:!0,tap:!0},this.__options.triggerClose={click:!0,tap:!0}),this._trigger("options"),this},__prepareGC:function(){var b=this;return b.__options.selfDestruction?b.__garbageCollector=setInterval(function(){var c=(new Date).getTime();b.__touchEvents=a.grep(b.__touchEvents,function(a,b){return c-a.time>6e4}),d(b._$origin)||b.close(function(){b.destroy()})},2e4):clearInterval(b.__garbageCollector),b},__prepareOrigin:function(){var a=this;if(a._$origin.off("."+a.__namespace+"-triggerOpen"),h.hasTouchCapability&&a._$origin.on("touchstart."+a.__namespace+"-triggerOpen touchend."+a.__namespace+"-triggerOpen touchcancel."+a.__namespace+"-triggerOpen",function(b){a._touchRecordEvent(b)}),a.__options.triggerOpen.click||a.__options.triggerOpen.tap&&h.hasTouchCapability){var b="";a.__options.triggerOpen.click&&(b+="click."+a.__namespace+"-triggerOpen "),a.__options.triggerOpen.tap&&h.hasTouchCapability&&(b+="touchend."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){a._touchIsMeaningfulEvent(b)&&a._open(b)})}if(a.__options.triggerOpen.mouseenter||a.__options.triggerOpen.touchstart&&h.hasTouchCapability){var b="";a.__options.triggerOpen.mouseenter&&(b+="mouseenter."+a.__namespace+"-triggerOpen "),a.__options.triggerOpen.touchstart&&h.hasTouchCapability&&(b+="touchstart."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){!a._touchIsTouchEvent(b)&&a._touchIsEmulatedEvent(b)||(a.__pointerIsOverOrigin=!0,a._openShortly(b))})}if(a.__options.triggerClose.mouseleave||a.__options.triggerClose.touchleave&&h.hasTouchCapability){var b="";a.__options.triggerClose.mouseleave&&(b+="mouseleave."+a.__namespace+"-triggerOpen "),a.__options.triggerClose.touchleave&&h.hasTouchCapability&&(b+="touchend."+a.__namespace+"-triggerOpen touchcancel."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){a._touchIsMeaningfulEvent(b)&&(a.__pointerIsOverOrigin=!1)})}return a},__prepareTooltip:function(){var b=this,c=b.__options.interactive?"auto":"";return b._$tooltip.attr("id",b.__namespace).css({"pointer-events":c,zIndex:b.__options.zIndex}),a.each(b.__previousThemes,function(a,c){b._$tooltip.removeClass(c)}),a.each(b.__options.theme,function(a,c){b._$tooltip.addClass(c)}),b.__previousThemes=a.merge([],b.__options.theme),b},__scrollHandler:function(b){var c=this;if(c.__options.triggerClose.scroll)c._close(b);else if(d(c._$origin)&&d(c._$tooltip)){var e=null;if(b.target===h.window.document)c.__Geometry.origin.fixedLineage||c.__options.repositionOnScroll&&c.reposition(b);else{e=c.__geometry();var f=!1;if("fixed"!=c._$origin.css("position")&&c.__$originParents.each(function(b,c){var d=a(c),g=d.css("overflow-x"),h=d.css("overflow-y");if("visible"!=g||"visible"!=h){var i=c.getBoundingClientRect();if("visible"!=g&&(e.origin.windowOffset.left<i.left||e.origin.windowOffset.right>i.right))return f=!0,!1;if("visible"!=h&&(e.origin.windowOffset.top<i.top||e.origin.windowOffset.bottom>i.bottom))return f=!0,!1}return"fixed"==d.css("position")?!1:void 0}),f)c._$tooltip.css("visibility","hidden");else if(c._$tooltip.css("visibility","visible"),c.__options.repositionOnScroll)c.reposition(b);else{var g=e.origin.offset.left-c.__Geometry.origin.offset.left,i=e.origin.offset.top-c.__Geometry.origin.offset.top;c._$tooltip.css({left:c.__lastPosition.coord.left+g,top:c.__lastPosition.coord.top+i})}}c._trigger({type:"scroll",event:b,geo:e})}return c},__stateSet:function(a){return this.__state=a,this._trigger({type:"state",state:a}),this},__timeoutsClear:function(){return clearTimeout(this.__timeouts.open),this.__timeouts.open=null,a.each(this.__timeouts.close,function(a,b){clearTimeout(b)}),this.__timeouts.close=[],this},__trackerStart:function(){var a=this,b=a._$tooltip.find(".tooltipster-content");return a.__options.trackTooltip&&(a.__contentBcr=b[0].getBoundingClientRect()),a.__tracker=setInterval(function(){if(d(a._$origin)&&d(a._$tooltip)){if(a.__options.trackOrigin){var e=a.__geometry(),f=!1;c(e.origin.size,a.__Geometry.origin.size)&&(a.__Geometry.origin.fixedLineage?c(e.origin.windowOffset,a.__Geometry.origin.windowOffset)&&(f=!0):c(e.origin.offset,a.__Geometry.origin.offset)&&(f=!0)),f||(a.__options.triggerClose.mouseleave?a._close():a.reposition())}if(a.__options.trackTooltip){var g=b[0].getBoundingClientRect();g.height===a.__contentBcr.height&&g.width===a.__contentBcr.width||(a.reposition(),a.__contentBcr=g)}}else a._close()},a.__options.trackerInterval),a},_close:function(b,c,d){var e=this,f=!0;if(e._trigger({type:"close",event:b,stop:function(){f=!1}}),f||d){c&&e.__callbacks.close.push(c),e.__callbacks.open=[],e.__timeoutsClear();var g=function(){a.each(e.__callbacks.close,function(a,c){c.call(e,e,{event:b,origin:e._$origin[0]})}),e.__callbacks.close=[]};if("closed"!=e.__state){var i=!0,j=new Date,k=j.getTime(),l=k+e.__options.animationDuration[1];if("disappearing"==e.__state&&l>e.__closingTime&&e.__options.animationDuration[1]>0&&(i=!1),i){e.__closingTime=l,"disappearing"!=e.__state&&e.__stateSet("disappearing");var m=function(){clearInterval(e.__tracker),e._trigger({type:"closing",event:b}),e._$tooltip.off("."+e.__namespace+"-triggerClose").removeClass("tooltipster-dying"),a(h.window).off("."+e.__namespace+"-triggerClose"),e.__$originParents.each(function(b,c){a(c).off("scroll."+e.__namespace+"-triggerClose")}),e.__$originParents=null,a(h.window.document.body).off("."+e.__namespace+"-triggerClose"),e._$origin.off("."+e.__namespace+"-triggerClose"),e._off("dismissable"),e.__stateSet("closed"),e._trigger({type:"after",event:b}),e.__options.functionAfter&&e.__options.functionAfter.call(e,e,{event:b,origin:e._$origin[0]}),g()};h.hasTransitions?(e._$tooltip.css({"-moz-animation-duration":e.__options.animationDuration[1]+"ms","-ms-animation-duration":e.__options.animationDuration[1]+"ms","-o-animation-duration":e.__options.animationDuration[1]+"ms","-webkit-animation-duration":e.__options.animationDuration[1]+"ms","animation-duration":e.__options.animationDuration[1]+"ms","transition-duration":e.__options.animationDuration[1]+"ms"}),e._$tooltip.clearQueue().removeClass("tooltipster-show").addClass("tooltipster-dying"),e.__options.animationDuration[1]>0&&e._$tooltip.delay(e.__options.animationDuration[1]),e._$tooltip.queue(m)):e._$tooltip.stop().fadeOut(e.__options.animationDuration[1],m)}}else g()}return e},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_open:function(b,c){var e=this;if(!e.__destroying&&d(e._$origin)&&e.__enabled){var f=!0;if("closed"==e.__state&&(e._trigger({type:"before",event:b,stop:function(){f=!1}}),f&&e.__options.functionBefore&&(f=e.__options.functionBefore.call(e,e,{event:b,origin:e._$origin[0]}))),f!==!1&&null!==e.__Content){c&&e.__callbacks.open.push(c),e.__callbacks.close=[],e.__timeoutsClear();var g,i=function(){"stable"!=e.__state&&e.__stateSet("stable"),a.each(e.__callbacks.open,function(a,b){b.call(e,e,{origin:e._$origin[0],tooltip:e._$tooltip[0]})}),e.__callbacks.open=[]};if("closed"!==e.__state)g=0,"disappearing"===e.__state?(e.__stateSet("appearing"),h.hasTransitions?(e._$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-show"),e.__options.animationDuration[0]>0&&e._$tooltip.delay(e.__options.animationDuration[0]),e._$tooltip.queue(i)):e._$tooltip.stop().fadeIn(i)):"stable"==e.__state&&i();else{if(e.__stateSet("appearing"),g=e.__options.animationDuration[0],e.__contentInsert(),e.reposition(b,!0),h.hasTransitions?(e._$tooltip.addClass("tooltipster-"+e.__options.animation).addClass("tooltipster-initial").css({"-moz-animation-duration":e.__options.animationDuration[0]+"ms","-ms-animation-duration":e.__options.animationDuration[0]+"ms","-o-animation-duration":e.__options.animationDuration[0]+"ms","-webkit-animation-duration":e.__options.animationDuration[0]+"ms","animation-duration":e.__options.animationDuration[0]+"ms","transition-duration":e.__options.animationDuration[0]+"ms"}),setTimeout(function(){"closed"!=e.__state&&(e._$tooltip.addClass("tooltipster-show").removeClass("tooltipster-initial"),e.__options.animationDuration[0]>0&&e._$tooltip.delay(e.__options.animationDuration[0]),e._$tooltip.queue(i))},0)):e._$tooltip.css("display","none").fadeIn(e.__options.animationDuration[0],i),e.__trackerStart(),a(h.window).on("resize."+e.__namespace+"-triggerClose",function(b){var c=a(document.activeElement);(c.is("input")||c.is("textarea"))&&a.contains(e._$tooltip[0],c[0])||e.reposition(b)}).on("scroll."+e.__namespace+"-triggerClose",function(a){e.__scrollHandler(a)}),e.__$originParents=e._$origin.parents(),e.__$originParents.each(function(b,c){a(c).on("scroll."+e.__namespace+"-triggerClose",function(a){e.__scrollHandler(a)})}),e.__options.triggerClose.mouseleave||e.__options.triggerClose.touchleave&&h.hasTouchCapability){e._on("dismissable",function(a){a.dismissable?a.delay?(m=setTimeout(function(){e._close(a.event)},a.delay),e.__timeouts.close.push(m)):e._close(a):clearTimeout(m)});var j=e._$origin,k="",l="",m=null;e.__options.interactive&&(j=j.add(e._$tooltip)),e.__options.triggerClose.mouseleave&&(k+="mouseenter."+e.__namespace+"-triggerClose ",l+="mouseleave."+e.__namespace+"-triggerClose "),e.__options.triggerClose.touchleave&&h.hasTouchCapability&&(k+="touchstart."+e.__namespace+"-triggerClose",l+="touchend."+e.__namespace+"-triggerClose touchcancel."+e.__namespace+"-triggerClose"),j.on(l,function(a){if(e._touchIsTouchEvent(a)||!e._touchIsEmulatedEvent(a)){var b="mouseleave"==a.type?e.__options.delay:e.__options.delayTouch;e._trigger({delay:b[1],dismissable:!0,event:a,type:"dismissable"})}}).on(k,function(a){!e._touchIsTouchEvent(a)&&e._touchIsEmulatedEvent(a)||e._trigger({dismissable:!1,event:a,type:"dismissable"})})}e.__options.triggerClose.originClick&&e._$origin.on("click."+e.__namespace+"-triggerClose",function(a){e._touchIsTouchEvent(a)||e._touchIsEmulatedEvent(a)||e._close(a)}),(e.__options.triggerClose.click||e.__options.triggerClose.tap&&h.hasTouchCapability)&&setTimeout(function(){if("closed"!=e.__state){var b="",c=a(h.window.document.body);e.__options.triggerClose.click&&(b+="click."+e.__namespace+"-triggerClose "),e.__options.triggerClose.tap&&h.hasTouchCapability&&(b+="touchend."+e.__namespace+"-triggerClose"),c.on(b,function(b){e._touchIsMeaningfulEvent(b)&&(e._touchRecordEvent(b),e.__options.interactive&&a.contains(e._$tooltip[0],b.target)||e._close(b))}),e.__options.triggerClose.tap&&h.hasTouchCapability&&c.on("touchstart."+e.__namespace+"-triggerClose",function(a){e._touchRecordEvent(a)})}},0),e._trigger("ready"),e.__options.functionReady&&e.__options.functionReady.call(e,e,{origin:e._$origin[0],tooltip:e._$tooltip[0]})}if(e.__options.timer>0){var m=setTimeout(function(){e._close()},e.__options.timer+g);e.__timeouts.close.push(m)}}}return e},_openShortly:function(a){var b=this,c=!0;if("stable"!=b.__state&&"appearing"!=b.__state&&!b.__timeouts.open&&(b._trigger({type:"start",event:a,stop:function(){c=!1}}),c)){var d=0==a.type.indexOf("touch")?b.__options.delayTouch:b.__options.delay;d[0]?b.__timeouts.open=setTimeout(function(){b.__timeouts.open=null,b.__pointerIsOverOrigin&&b._touchIsMeaningfulEvent(a)?(b._trigger("startend"),b._open(a)):b._trigger("startcancel")},d[0]):(b._trigger("startend"),b._open(a))}return b},_optionsExtract:function(b,c){var d=this,e=a.extend(!0,{},c),f=d.__options[b];return f||(f={},a.each(c,function(a,b){var c=d.__options[a];void 0!==c&&(f[a]=c)})),a.each(e,function(b,c){void 0!==f[b]&&("object"!=typeof c||c instanceof Array||null==c||"object"!=typeof f[b]||f[b]instanceof Array||null==f[b]?e[b]=f[b]:a.extend(e[b],f[b]))}),e},_plug:function(b){var c=a.tooltipster._plugin(b);if(!c)throw new Error('The "'+b+'" plugin is not defined');return c.instance&&a.tooltipster.__bridge(c.instance,this,c.name),this},_touchIsEmulatedEvent:function(a){for(var b=!1,c=(new Date).getTime(),d=this.__touchEvents.length-1;d>=0;d--){var e=this.__touchEvents[d];if(!(c-e.time<500))break;e.target===a.target&&(b=!0)}return b},_touchIsMeaningfulEvent:function(a){return this._touchIsTouchEvent(a)&&!this._touchSwiped(a.target)||!this._touchIsTouchEvent(a)&&!this._touchIsEmulatedEvent(a)},_touchIsTouchEvent:function(a){return 0==a.type.indexOf("touch")},_touchRecordEvent:function(a){return this._touchIsTouchEvent(a)&&(a.time=(new Date).getTime(),this.__touchEvents.push(a)),this},_touchSwiped:function(a){for(var b=!1,c=this.__touchEvents.length-1;c>=0;c--){var d=this.__touchEvents[c];if("touchmove"==d.type){b=!0;break}if("touchstart"==d.type&&a===d.target)break}return b},_trigger:function(){var b=Array.prototype.slice.apply(arguments);return"string"==typeof b[0]&&(b[0]={type:b[0]}),b[0].instance=this,b[0].origin=this._$origin?this._$origin[0]:null,b[0].tooltip=this._$tooltip?this._$tooltip[0]:null,this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,b),a.tooltipster._trigger.apply(a.tooltipster,b),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,b),this},_unplug:function(b){var c=this;if(c[b]){var d=a.tooltipster._plugin(b);d.instance&&a.each(d.instance,function(a,d){c[a]&&c[a].bridged===c[b]&&delete c[a]}),c[b].__destroy&&c[b].__destroy(),delete c[b]}return c},close:function(a){return this.__destroyed?this.__destroyError():this._close(null,a),this},content:function(a){var b=this;if(void 0===a)return b.__Content;if(b.__destroyed)b.__destroyError();else if(b.__contentSet(a),null!==b.__Content){if("closed"!==b.__state&&(b.__contentInsert(),b.reposition(),b.__options.updateAnimation))if(h.hasTransitions){var c=b.__options.updateAnimation;b._$tooltip.addClass("tooltipster-update-"+c),setTimeout(function(){"closed"!=b.__state&&b._$tooltip.removeClass("tooltipster-update-"+c)},1e3)}else b._$tooltip.fadeTo(200,.5,function(){"closed"!=b.__state&&b._$tooltip.fadeTo(200,1)})}else b._close();return b},destroy:function(){var b=this;if(b.__destroyed)b.__destroyError();else{"closed"!=b.__state?b.option("animationDuration",0)._close(null,null,!0):b.__timeoutsClear(),b._trigger("destroy"),b.__destroyed=!0,b._$origin.removeData(b.__namespace).off("."+b.__namespace+"-triggerOpen"),a(h.window.document.body).off("."+b.__namespace+"-triggerOpen");var c=b._$origin.data("tooltipster-ns");if(c)if(1===c.length){var d=null;"previous"==b.__options.restoration?d=b._$origin.data("tooltipster-initialTitle"):"current"==b.__options.restoration&&(d="string"==typeof b.__Content?b.__Content:a("<div></div>").append(b.__Content).html()),d&&b._$origin.attr("title",d),b._$origin.removeClass("tooltipstered"),b._$origin.removeData("tooltipster-ns").removeData("tooltipster-initialTitle")}else c=a.grep(c,function(a,c){return a!==b.__namespace}),b._$origin.data("tooltipster-ns",c);b._trigger("destroyed"),b._off(),b.off(),b.__Content=null,b.__$emitterPrivate=null,b.__$emitterPublic=null,b.__options.parent=null,b._$origin=null,b._$tooltip=null,a.tooltipster.__instancesLatestArr=a.grep(a.tooltipster.__instancesLatestArr,function(a,c){return b!==a}),clearInterval(b.__garbageCollector)}return b},disable:function(){return this.__destroyed?(this.__destroyError(),this):(this._close(),this.__enabled=!1,this)},elementOrigin:function(){return this.__destroyed?void this.__destroyError():this._$origin[0]},elementTooltip:function(){return this._$tooltip?this._$tooltip[0]:null},enable:function(){return this.__enabled=!0,this},hide:function(a){return this.close(a)},instance:function(){return this},off:function(){return this.__destroyed||this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},open:function(a){return this.__destroyed?this.__destroyError():this._open(null,a),this},option:function(b,c){return void 0===c?this.__options[b]:(this.__destroyed?this.__destroyError():(this.__options[b]=c,this.__optionsFormat(),a.inArray(b,["trigger","triggerClose","triggerOpen"])>=0&&this.__prepareOrigin(),"selfDestruction"===b&&this.__prepareGC()),this)},reposition:function(a,b){var c=this;return c.__destroyed?c.__destroyError():"closed"!=c.__state&&d(c._$origin)&&(b||d(c._$tooltip))&&(b||c._$tooltip.detach(),c.__Geometry=c.__geometry(),c._trigger({type:"reposition",event:a,helper:{geo:c.__Geometry}})),c},show:function(a){return this.open(a)},status:function(){return{destroyed:this.__destroyed,enabled:this.__enabled,open:"closed"!==this.__state,state:this.__state}},triggerHandler:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},a.fn.tooltipster=function(){var b=Array.prototype.slice.apply(arguments),c="You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.";if(0===this.length)return this;if("string"==typeof b[0]){var d="#*$~&";return this.each(function(){var e=a(this).data("tooltipster-ns"),f=e?a(this).data(e[0]):null;if(!f)throw new Error("You called Tooltipster's \""+b[0]+'" method on an uninitialized element');if("function"!=typeof f[b[0]])throw new Error('Unknown method "'+b[0]+'"');this.length>1&&"content"==b[0]&&(b[1]instanceof a||"object"==typeof b[1]&&null!=b[1]&&b[1].tagName)&&!f.__options.contentCloning&&f.__options.debug&&console.log(c);var g=f[b[0]](b[1],b[2]);return g!==f||"instance"===b[0]?(d=g,!1):void 0}),"#*$~&"!==d?d:this}a.tooltipster.__instancesLatestArr=[];var e=b[0]&&void 0!==b[0].multiple,g=e&&b[0].multiple||!e&&f.multiple,h=b[0]&&void 0!==b[0].content,i=h&&b[0].content||!h&&f.content,j=b[0]&&void 0!==b[0].contentCloning,k=j&&b[0].contentCloning||!j&&f.contentCloning,l=b[0]&&void 0!==b[0].debug,m=l&&b[0].debug||!l&&f.debug;return this.length>1&&(i instanceof a||"object"==typeof i&&null!=i&&i.tagName)&&!k&&m&&console.log(c),this.each(function(){var c=!1,d=a(this),e=d.data("tooltipster-ns"),f=null;e?g?c=!0:m&&(console.log("Tooltipster: one or more tooltips are already attached to the element below. Ignoring."),console.log(this)):c=!0,c&&(f=new a.Tooltipster(this,b[0]),e||(e=[]),e.push(f.__namespace),d.data("tooltipster-ns",e),d.data(f.__namespace,f),f.__options.functionInit&&f.__options.functionInit.call(f,f,{origin:this}),f._trigger("init")),a.tooltipster.__instancesLatestArr.push(f)}),this},b.prototype={__init:function(b){this.__$tooltip=b,this.__$tooltip.css({left:0,overflow:"hidden",position:"absolute",top:0}).find(".tooltipster-content").css("overflow","auto"),this.$container=a('<div class="tooltipster-ruler"></div>').append(this.__$tooltip).appendTo(h.window.document.body)},__forceRedraw:function(){var a=this.__$tooltip.parent();this.__$tooltip.detach(),this.__$tooltip.appendTo(a)},constrain:function(a,b){return this.constraints={width:a,height:b},this.__$tooltip.css({display:"block",height:"",overflow:"auto",width:a}),this},destroy:function(){this.__$tooltip.detach().find(".tooltipster-content").css({display:"",overflow:""}),this.$container.remove()},free:function(){return this.constraints=null,this.__$tooltip.css({display:"",height:"",overflow:"visible",width:""}),this},measure:function(){this.__forceRedraw();var a=this.__$tooltip[0].getBoundingClientRect(),b={size:{height:a.height||a.bottom-a.top,width:a.width||a.right-a.left}};if(this.constraints){var c=this.__$tooltip.find(".tooltipster-content"),d=this.__$tooltip.outerHeight(),e=c[0].getBoundingClientRect(),f={height:d<=this.constraints.height,width:a.width<=this.constraints.width&&e.width>=c[0].scrollWidth-1};b.fits=f.height&&f.width}return h.IE&&h.IE<=11&&b.size.width!==h.window.document.documentElement.clientWidth&&(b.size.width=Math.ceil(b.size.width)+1),b}};var j=navigator.userAgent.toLowerCase();-1!=j.indexOf("msie")?h.IE=parseInt(j.split("msie")[1]):-1!==j.toLowerCase().indexOf("trident")&&-1!==j.indexOf(" rv:11")?h.IE=11:-1!=j.toLowerCase().indexOf("edge/")&&(h.IE=parseInt(j.toLowerCase().split("edge/")[1]));var k="tooltipster.sideTip";return a.tooltipster._plugin({name:k,instance:{__defaults:function(){return{arrow:!0,distance:6,functionPosition:null,maxWidth:null,minIntersection:16,minWidth:0,position:null,side:"top",viewportAware:!0}},__init:function(a){var b=this;b.__instance=a,b.__namespace="tooltipster-sideTip-"+Math.round(1e6*Math.random()),b.__previousState="closed",b.__options,b.__optionsFormat(),b.__instance._on("state."+b.__namespace,function(a){"closed"==a.state?b.__close():"appearing"==a.state&&"closed"==b.__previousState&&b.__create(),b.__previousState=a.state}),b.__instance._on("options."+b.__namespace,function(){b.__optionsFormat()}),b.__instance._on("reposition."+b.__namespace,function(a){b.__reposition(a.event,a.helper)})},__close:function(){this.__instance.content()instanceof a&&this.__instance.content().detach(),this.__instance._$tooltip.remove(),this.__instance._$tooltip=null},__create:function(){var b=a('<div class="tooltipster-base tooltipster-sidetip"><div class="tooltipster-box"><div class="tooltipster-content"></div></div><div class="tooltipster-arrow"><div class="tooltipster-arrow-uncropped"><div class="tooltipster-arrow-border"></div><div class="tooltipster-arrow-background"></div></div></div></div>');this.__options.arrow||b.find(".tooltipster-box").css("margin",0).end().find(".tooltipster-arrow").hide(),this.__options.minWidth&&b.css("min-width",this.__options.minWidth+"px"),this.__options.maxWidth&&b.css("max-width",this.__options.maxWidth+"px"),
this.__instance._$tooltip=b,this.__instance._trigger("created")},__destroy:function(){this.__instance._off("."+self.__namespace)},__optionsFormat:function(){var b=this;if(b.__options=b.__instance._optionsExtract(k,b.__defaults()),b.__options.position&&(b.__options.side=b.__options.position),"object"!=typeof b.__options.distance&&(b.__options.distance=[b.__options.distance]),b.__options.distance.length<4&&(void 0===b.__options.distance[1]&&(b.__options.distance[1]=b.__options.distance[0]),void 0===b.__options.distance[2]&&(b.__options.distance[2]=b.__options.distance[0]),void 0===b.__options.distance[3]&&(b.__options.distance[3]=b.__options.distance[1]),b.__options.distance={top:b.__options.distance[0],right:b.__options.distance[1],bottom:b.__options.distance[2],left:b.__options.distance[3]}),"string"==typeof b.__options.side){var c={top:"bottom",right:"left",bottom:"top",left:"right"};b.__options.side=[b.__options.side,c[b.__options.side]],"left"==b.__options.side[0]||"right"==b.__options.side[0]?b.__options.side.push("top","bottom"):b.__options.side.push("right","left")}6===a.tooltipster._env.IE&&b.__options.arrow!==!0&&(b.__options.arrow=!1)},__reposition:function(b,c){var d,e=this,f=e.__targetFind(c),g=[];e.__instance._$tooltip.detach();var h=e.__instance._$tooltip.clone(),i=a.tooltipster._getRuler(h),j=!1,k=e.__instance.option("animation");switch(k&&h.removeClass("tooltipster-"+k),a.each(["window","document"],function(d,k){var l=null;if(e.__instance._trigger({container:k,helper:c,satisfied:j,takeTest:function(a){l=a},results:g,type:"positionTest"}),1==l||0!=l&&0==j&&("window"!=k||e.__options.viewportAware))for(var d=0;d<e.__options.side.length;d++){var m={horizontal:0,vertical:0},n=e.__options.side[d];"top"==n||"bottom"==n?m.vertical=e.__options.distance[n]:m.horizontal=e.__options.distance[n],e.__sideChange(h,n),a.each(["natural","constrained"],function(a,d){if(l=null,e.__instance._trigger({container:k,event:b,helper:c,mode:d,results:g,satisfied:j,side:n,takeTest:function(a){l=a},type:"positionTest"}),1==l||0!=l&&0==j){var h={container:k,distance:m,fits:null,mode:d,outerSize:null,side:n,size:null,target:f[n],whole:null},o="natural"==d?i.free():i.constrain(c.geo.available[k][n].width-m.horizontal,c.geo.available[k][n].height-m.vertical),p=o.measure();if(h.size=p.size,h.outerSize={height:p.size.height+m.vertical,width:p.size.width+m.horizontal},"natural"==d?c.geo.available[k][n].width>=h.outerSize.width&&c.geo.available[k][n].height>=h.outerSize.height?h.fits=!0:h.fits=!1:h.fits=p.fits,"window"==k&&(h.fits?"top"==n||"bottom"==n?h.whole=c.geo.origin.windowOffset.right>=e.__options.minIntersection&&c.geo.window.size.width-c.geo.origin.windowOffset.left>=e.__options.minIntersection:h.whole=c.geo.origin.windowOffset.bottom>=e.__options.minIntersection&&c.geo.window.size.height-c.geo.origin.windowOffset.top>=e.__options.minIntersection:h.whole=!1),g.push(h),h.whole)j=!0;else if("natural"==h.mode&&(h.fits||h.size.width<=c.geo.available[k][n].width))return!1}})}}),e.__instance._trigger({edit:function(a){g=a},event:b,helper:c,results:g,type:"positionTested"}),g.sort(function(a,b){if(a.whole&&!b.whole)return-1;if(!a.whole&&b.whole)return 1;if(a.whole&&b.whole){var c=e.__options.side.indexOf(a.side),d=e.__options.side.indexOf(b.side);return d>c?-1:c>d?1:"natural"==a.mode?-1:1}if(a.fits&&!b.fits)return-1;if(!a.fits&&b.fits)return 1;if(a.fits&&b.fits){var c=e.__options.side.indexOf(a.side),d=e.__options.side.indexOf(b.side);return d>c?-1:c>d?1:"natural"==a.mode?-1:1}return"document"==a.container&&"bottom"==a.side&&"natural"==a.mode?-1:1}),d=g[0],d.coord={},d.side){case"left":case"right":d.coord.top=Math.floor(d.target-d.size.height/2);break;case"bottom":case"top":d.coord.left=Math.floor(d.target-d.size.width/2)}switch(d.side){case"left":d.coord.left=c.geo.origin.windowOffset.left-d.outerSize.width;break;case"right":d.coord.left=c.geo.origin.windowOffset.right+d.distance.horizontal;break;case"top":d.coord.top=c.geo.origin.windowOffset.top-d.outerSize.height;break;case"bottom":d.coord.top=c.geo.origin.windowOffset.bottom+d.distance.vertical}"window"==d.container?"top"==d.side||"bottom"==d.side?d.coord.left<0?c.geo.origin.windowOffset.right-this.__options.minIntersection>=0?d.coord.left=0:d.coord.left=c.geo.origin.windowOffset.right-this.__options.minIntersection-1:d.coord.left>c.geo.window.size.width-d.size.width&&(c.geo.origin.windowOffset.left+this.__options.minIntersection<=c.geo.window.size.width?d.coord.left=c.geo.window.size.width-d.size.width:d.coord.left=c.geo.origin.windowOffset.left+this.__options.minIntersection+1-d.size.width):d.coord.top<0?c.geo.origin.windowOffset.bottom-this.__options.minIntersection>=0?d.coord.top=0:d.coord.top=c.geo.origin.windowOffset.bottom-this.__options.minIntersection-1:d.coord.top>c.geo.window.size.height-d.size.height&&(c.geo.origin.windowOffset.top+this.__options.minIntersection<=c.geo.window.size.height?d.coord.top=c.geo.window.size.height-d.size.height:d.coord.top=c.geo.origin.windowOffset.top+this.__options.minIntersection+1-d.size.height):(d.coord.left>c.geo.window.size.width-d.size.width&&(d.coord.left=c.geo.window.size.width-d.size.width),d.coord.left<0&&(d.coord.left=0)),e.__sideChange(h,d.side),c.tooltipClone=h[0],c.tooltipParent=e.__instance.option("parent").parent[0],c.mode=d.mode,c.whole=d.whole,c.origin=e.__instance._$origin[0],c.tooltip=e.__instance._$tooltip[0],delete d.container,delete d.fits,delete d.mode,delete d.outerSize,delete d.whole,d.distance=d.distance.horizontal||d.distance.vertical;var l=a.extend(!0,{},d);if(e.__instance._trigger({edit:function(a){d=a},event:b,helper:c,position:l,type:"position"}),e.__options.functionPosition){var m=e.__options.functionPosition.call(e,e.__instance,c,l);m&&(d=m)}i.destroy();var n,o;"top"==d.side||"bottom"==d.side?(n={prop:"left",val:d.target-d.coord.left},o=d.size.width-this.__options.minIntersection):(n={prop:"top",val:d.target-d.coord.top},o=d.size.height-this.__options.minIntersection),n.val<this.__options.minIntersection?n.val=this.__options.minIntersection:n.val>o&&(n.val=o);var p;p=c.geo.origin.fixedLineage?c.geo.origin.windowOffset:{left:c.geo.origin.windowOffset.left+c.geo.window.scroll.left,top:c.geo.origin.windowOffset.top+c.geo.window.scroll.top},d.coord={left:p.left+(d.coord.left-c.geo.origin.windowOffset.left),top:p.top+(d.coord.top-c.geo.origin.windowOffset.top)},e.__sideChange(e.__instance._$tooltip,d.side),c.geo.origin.fixedLineage?e.__instance._$tooltip.css("position","fixed"):e.__instance._$tooltip.css("position",""),e.__instance._$tooltip.css({left:d.coord.left,top:d.coord.top,height:d.size.height,width:d.size.width}).find(".tooltipster-arrow").css({left:"",top:""}).css(n.prop,n.val),e.__instance._$tooltip.appendTo(e.__instance.option("parent")),e.__instance._trigger({type:"repositioned",event:b,position:d})},__sideChange:function(a,b){a.removeClass("tooltipster-bottom").removeClass("tooltipster-left").removeClass("tooltipster-right").removeClass("tooltipster-top").addClass("tooltipster-"+b)},__targetFind:function(a){var b={},c=this.__instance._$origin[0].getClientRects();if(c.length>1){var d=this.__instance._$origin.css("opacity");1==d&&(this.__instance._$origin.css("opacity",.99),c=this.__instance._$origin[0].getClientRects(),this.__instance._$origin.css("opacity",1))}if(c.length<2)b.top=Math.floor(a.geo.origin.windowOffset.left+a.geo.origin.size.width/2),b.bottom=b.top,b.left=Math.floor(a.geo.origin.windowOffset.top+a.geo.origin.size.height/2),b.right=b.left;else{var e=c[0];b.top=Math.floor(e.left+(e.right-e.left)/2),e=c.length>2?c[Math.ceil(c.length/2)-1]:c[0],b.right=Math.floor(e.top+(e.bottom-e.top)/2),e=c[c.length-1],b.bottom=Math.floor(e.left+(e.right-e.left)/2),e=c.length>2?c[Math.ceil((c.length+1)/2)-1]:c[c.length-1],b.left=Math.floor(e.top+(e.bottom-e.top)/2)}return b}}}),a});



function formatprice(amt){
	if(amt === 0) return 0;
	else if(!amt) return null;

	var price;

	if($('body').hasClass('INR')) 
		price = amt.toString().replace(/(\d)(?=(\d\d)+\d$)/g, '$1<span class="divider"></span>');
	else 
		price = amt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '<span class="divider"></span>');
	
	return price;
};
 
rivets.formatters.price = function(value){
	return formatprice(value);
};

rivets.formatters.nextIncrement = function(value){
	if(typeof value == "undefined") value = 0;
	return formatprice(talController.increment(value));
};

rivets.formatters.compare = function(value, comparisons){
	if(typeof value == "undefined" || typeof comparisons == "undefined") return false;
	
	if(typeof comparisons == "string"){
		var args = comparisons.split(',');
		if(args.includes(value)) return true;
	}
	else if(comparisons === value) return true;
	
	return false;
};

rivets.formatters.inversecompare = function(value, comparisons){
	if(typeof value == "undefined" || typeof comparisons == "undefined") return true;
	
	if(typeof comparisons == "string"){
		var args = comparisons.split(',');
		if(args.includes(value)) return false;
	}
	else if(comparisons === value) return false;
	
	return true;
};


rivets.formatters.compareplusone = function(value, comparisons){
	if(typeof value == "undefined" || typeof comparisons == "undefined") return false;
	
	if(comparisons + 1 === value) return true;
	
	return false;
};


rivets.formatters.greaterthan = function(value, comparisons){
	if(typeof value == "undefined" || typeof comparisons == "undefined") return false;

	if(value > comparisons) return true;
	else return false;
};

rivets.binders.addtextclass = function(el,value){
	if(value === "") return false;
	$(el).removeClass().addClass('s-'+ value);
};

rivets.binders.ccyclass = function(el,value){
	if(value === "") return false;
	$(el).addClass(value);
};

rivets.binders.percenttowidth = function(el,value){
	$(el).css({'transform':"scaleX("+value/100+")"});
};

rivets.binders.sortclasses = function(el,value){
	var thiscolumn = $(el).data('column');
	var direction = dataObject.sortdirection;
	$(el).removeClass('s-active-sort s-sort-asc s-sort-desc');
	
	if(value === thiscolumn) $(el).addClass('s-active-sort s-sort-'+direction);
};

rivets.binders.ischecked = function(el,value){
	if(value) $(el).prop('checked',true);
	else $(el).prop('checked',false);
};

rivets.binders.lotgroupdecor = function(el,value){
	if(value === 'start') $(el).addClass('s-group-start');
	if(value === 'mid') $(el).addClass('s-group');
	if(value === 'end') $(el).addClass('s-group-end');
};

rivets.formatters.indexof = function(list,item){
	if(typeof list === 'undefined' || typeof item === 'undefined') return false;
	if(list.indexOf(item) >= 0) return true;
	else return false;
};


rivets.formatters.divide = function(value,divisor){
	return Math.floor((value/divisor*100));
};

rivets.formatters.lengthToBool = function(value){
	if(typeof value === 'undefined' || value === null) return false;
	if(value.length === 0) return false;
	return true;
};

rivets.formatters.invalidinput = function(value){
	if(typeof value === 'undefined') return false;
	if(value.length === 0) return false;
	if(value.match(/[^A-Za-z0-9-_]/gi) != null) return false;
	return true;
};

rivets.formatters.lengthGreaterThanOne = function(value){
	if(typeof value === 'undefined') return false;
	if(value.length > 1) return true;
	return false;
};

rivets.formatters.inverseLengthToBool = function(value){
	if(typeof value === 'undefined') return true;
	if(value.length === 0) return true;
	return false;
};

rivets.formatters.length = function(value){
	if(typeof value === 'undefined') return 0;
	return value.length;
};

rivets.formatters.invert = function(value){
	console.log(value);
	if(typeof value != "undefined") return false;
	return true;
};

rivets.formatters.propertyList = function(obj) {
  return (function() {
    var properties = []
    for (key in obj) {
      properties.push({key: key, value: obj[key]})
    }
    return properties
  });
};

rivets.formatters.findShortcuts = function(arr,index){
	if(typeof arr[index] === 'undefined') return false;
	return arr[index].shortcuts;
};

rivets.formatters.plus = function(value,arg){
	if(typeof value == "undefined" || typeof arg == "undefined") return 0;
	return value + arg;
};

rivets.formatters.and = function(value,item){
	if(value && item) return true;
	return false;
};

rivets.formatters.lengthand = function(value,item){
	if(value.length > 0 && !item) return true;
	return false;
};

rivets.binders.backgroundsrc = function(el,value){
	$(el).css({'background-image':value});
}

rivets.formatters.formatThousands = function(value){
	return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

rivets.formatters.disablePhotoDownload = function(value, arg){
	if(typeof value == "undefined" || typeof arg == "undefined") return true;
	if(arg.length === 0 && value) return false;
	return true;
}

rivets.formatters.countdownTime = function(value){
	if(typeof value == 'undefined') return '';
	//else return moment(new Date(value)).fromNow();
	var now = moment();
	var end = moment(new Date(value));
	var span = moment.duration(end - now);
	return span.days() + 'd ' + span.hours() + 'h ' + span.minutes() + 'm ' + span.seconds() + 's';
};

rivets.formatters.countdownTimer = function(now,closes){
	let end = moment(closes);
	var span = moment.duration(end - now);
	return span.days() + 'd ' + span.hours() + 'h ' + span.minutes() + 'm ' + span.seconds() + 's';
};

rivets.formatters.compareTime = function(now,closes) {
	let end = moment(closes);
	var span = moment.duration(end - now);
	if(span._milliseconds > 0) return false;
	return true; 
}

rivets.formatters.calendarTime = function(value){
	if(typeof value == 'undefined') return '';
	return moment(new Date(value)).calendar();
};

rivets.formatters.relativedate = function(value){
	if(typeof value == 'undefined') return '';
	var daysfromnow = moment().diff(moment(value),'days');
	if(daysfromnow > 0)return daysfromnow + " days ago";
	if(daysfromnow <= 0)return Math.abs(daysfromnow) + " days from now";
};

rivets.formatters.percent = function (value,base){
	if(typeof value == 'undefined' || typeof base == 'undefined') return 0;
	return (value - 1) / (base.length - 1) * 100;
}

rivets.formatters.lotnumber = function (value){
	if(typeof value == 'undefined') return 5000;
	return parseInt(value) + 5000;
}

rivets.formatters.plusone = function (value){
	if(typeof value == 'undefined') return 1;
	return parseInt(value) + 1;
}

rivets.formatters.totalBids = function(lots) {
	let totalbids = lots.reduce( (acc,lot) => {if(lot.bids[0].bidder === talObject.bidder) return acc + lot.bids[0].bid}, 0); 
	return formatprice(totalbids);
}

rivets.binders.rangeposition = function(el,value){
	$(el).css({'left':value+"%"}); 
}

rivets.formatters.rangevalues = function(value){
	let content = '';
	for(let i = 0; i < value.length; i++){
		content += i + ' ';
	}
	return content;
}

rivets.formatters.lotintervals = function(lots, first, last){
	if(typeof lots === 'undefined') return [];
	let list = [];
	let increment = Math.floor((last - first)/6);
	for(let i = 0;i<6;i++){
		if(first + increment*i < last) list.push(first + increment*i);
	}
	list.push(last);

	return list;

}


rivets.formatters.lotposition = function(lot, first, last){
	let lotNumber = 0;
	if(lot.type === 'group') lotNumber = lot.lots[0].lotNumber;
	else lotNumber = lot.lotNumber;
	
	return Math.floor(100 * ((lotNumber - first) / (last - first)));
}

rivets.formatters.lotpositionDelta = function(index, first, last){
	let lotNumber = talObject.lots[index].lotNumber;
	
	return Math.floor(100 * ((lotNumber - first) / (last - first)));
}

rivets.binders.vlocation = function(el,value){
	$(el).css('top',value + "%");
}



rivets.binders.rangeinput = {
    publishes: true,
    routine: function(el,value){
    	if(typeof value == 'undefined') el.value = 1;
        else el.value = parseInt(value);
    },
    getValue: function(el){
    	return parseInt(el.value);
    },
    bind: function (el) {
        el.addEventListener('input', this.publish);
    },
    unbind: function (el) {
        el.removeEventListener('input', this.publish);
    }
};


rivets.formatters.highbidder = function(bids,bidder){
	if(typeof bids === 'undefined' || typeof bids[0] == 'undefined' || typeof bidder == 'undefined' ) return 'notbid';
	if(bids[0].bidder === bidder) return 'highbidder';
	for(let i = 1; i < bids.length; i++){
		if(bids[i].bidder === bidder) return 'outbid';
	};
	return 'notbid';
};

rivets.binders.bidstatusclass = function(el,value){
	//console.log(value);

	switch(value){
		case 'highbidder':
			$(el).addClass('s-winning').removeClass('s-outbid');
			break;
		case 'outbid':
			$(el).addClass('s-outbid').removeClass('s-winning');
			break;

		default: 
			$(el).removeClass('s-winning s-outbid')
	}
};





$(function(){

	createOptiscroll();
	
});


var scrollArea;
var scrollTarget = null;

function createOptiscroll() {
	if($('.js--optiscroll-content').length > 0){
		let scroller = $('.optiscroll')[0];
		scrollArea = new Optiscroll(scroller,{
			forceScrollbars: true,
			//wrapContent: false,
		});

		let el = $('#5022');
		scrollArea.scrollIntoView(el,100,{top: 5});

		$('.js--lot-scroll-hover-area').on('mouseenter',function(e){
			$('.optiscroll').addClass('s-scrolling');
			e.currentTarget.addEventListener('mousemove',function(e){
				let progress = getProgress(e);
				updateProgressIndicator(progress);
			});

		}).on('mouseleave',function(e){
			$('.optiscroll').removeClass('s-scrolling');
			e.currentTarget.removeEventListener('mousemove',function(e){
				let progress = getProgress(e);
				updateProgressIndicator(progress);
			});
		}).on('mousedown',function(e){
			goToLot(scrollTarget);
		});

		$('.optiscroll').on('scroll',function(e){
			$('.optiscroll').addClass('s-scrolling');
			updateProgressIndicator(e.detail.scrollTop/e.detail.scrollHeight);
		}).on('scrollstop',function(e){
			$('.optiscroll').removeClass('s-scrolling');
			//CHECK IF MOUSEOVER FIRST
		}); 

		$('.optiscroll-v').on('mouseenter',function(e){
			$('.optiscroll').addClass('s-scrolling');
		});

	}
}

function goToLot(targetLot) {
	var el = $('#'+targetLot)[0];
	scrollArea.scrollIntoView(el,100,{top: 30});
}

function getProgress(e){
	let thisBounds = e.currentTarget.getBoundingClientRect();
	let yDiff = e.clientY - thisBounds.top;
	let height = thisBounds.bottom - thisBounds.top;
	return yDiff/height;
}

function updateProgressIndicator(percentProgress){
	scrollTarget = talObject.auction.startLot + Math.floor((talObject.auction.endLot - talObject.auction.startLot) * percentProgress);
	
	if(percentProgress > 0.95) percentProgress = 0.95;
	else if(percentProgress < 0.05) percentProgress = 0.05;
	
	$('.js--lot-scroll-indicator').css('top', percentProgress * 100 + "%").text('Lot ' + scrollTarget);
}



$(function(){
	//ON FIRST LOAD IF COMING FROM LOGIN PAGE ASSIGN THE BIDDER NUMBER TO THIS SESSION
	let hash = parseInt(window.location.hash.split('#')[1]);
	if(hash > 0) talObject.bidder = 'v' + hash;
	pushHistory('auction','page');
})

const baseTitle = "Ritchie Bros. Timed Auction | ";

function navigateHistory(type,name) {
	switch(type){
		case 'page':
			talController.goToTab(name);
			hideModals();
			break;
		case 'lot':
			talController.showLot(name);
			break;
		case 'search':
			talObject.mobileSearchVisible = true;
			break;
		default:
			talController.goToTab('auction');
	}
	
	document.title = baseTitle + name;
}

function hideModals(){
	talObject.maximumBidVisible = false;
	talObject.groupBidModalVisible = false;
	talObject.groupViewModalVisible = false;
	talObject.lotDetailsVisible = false;
	talObject.mobileSearchVisible = false;
}

function pushHistory(target,pagetype) {
	let destination = {
		type: pagetype,
		name: target
	}
	history.pushState(destination,baseTitle + target,'#'+target);
}

window.addEventListener('popstate', function(e) {
	navigateHistory(e.state.type,e.state.name);
});

$(function(){
  Notification.requestPermission().then(function(result) {
    console.log(result);
  }); 
});

function spawnNotification(theTitle,theBody) {
  var options = {
      body: theBody,
      icon: '/assets/img/logo-square.png'
  }
  var n = new Notification(theTitle,options);
}

const lotlist = [
		{
			"lotNumber" : "5001",
			"bids": [{bid: 100, bidder: "12345", time: "2017-06-07T22:20:58.162Z", type: 'max'}],
			"maxBid":{bid: 500,bidder: "12345"},
			"category": 'Aggregate - Feeders',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : 'sold',
			"description" : "2012 Cummins C150D6R-A041K83 150 KW T/A Gen Set",
			"photo" : "assets/img/asset1-1.jpg",
			"photos": [
				{"src": "assets/img/asset1-1.jpg","disabled":false},
				{"src": "assets/img/asset1-2.jpg","disabled":false},
				{"src": "assets/img/asset1-3.jpg","disabled":false},
				{"src": "assets/img/asset1-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": ''
		},
		{
			"lotNumber" : "5002",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Aggregate - Feeders',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":[
				{"src": "assets/img/asset1-1.jpg","disabled":false}
			],
			"status" : 'sold',
			"description" : "2012 Cummins C150D6R-A041K83 150 KW T/A Gen Set",
			"photo" : "assets/img/asset1-1.jpg",
			"photos": [
				{"src": "assets/img/asset1-1.jpg","disabled":false},
				{"src": "assets/img/asset1-2.jpg","disabled":false},
				{"src": "assets/img/asset1-3.jpg","disabled":false},
				{"src": "assets/img/asset1-4.jpg","disabled":false}
			],
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": ''
		},
		{
			"lotNumber" : "5003",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Aggregate - Feeders',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : 'sold',
			"description" : "2012 Cummins C150D6R-A041K83 150 KW T/A Gen Set",
			"photo" : "assets/img/asset1-1.jpg",
			"photos": [
				{"src": "assets/img/asset1-1.jpg","disabled":false},
				{"src": "assets/img/asset1-2.jpg","disabled":false},
				{"src": "assets/img/asset1-3.jpg","disabled":false},
				{"src": "assets/img/asset1-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"unused" : true,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": ''
		},
		{
			"lotNumber" : "5004",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Aggregate - Feeders',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : "sold",
			"description" : "2012 Cummins C150D6R-A041K83 150 KW T/A Gen Set",
			"photo" : "assets/img/asset1-1.jpg",
			"photos": [
				{"src": "assets/img/asset1-1.jpg","disabled":false},
				{"src": "assets/img/asset1-2.jpg","disabled":false},
				{"src": "assets/img/asset1-3.jpg","disabled":false},
				{"src": "assets/img/asset1-4.jpg","disabled":false}
			],
			"usage" : "90000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5005",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Aggregate - Feeders',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : 'sold',
			"description" : "2012 Cummins C150D6R-A041K83 150 KW T/A Gen Set",
			"photo" : "assets/img/asset1-1.jpg",
			"photos": [
				{"src": "assets/img/asset1-1.jpg","disabled":false},
				{"src": "assets/img/asset1-2.jpg","disabled":false},
				{"src": "assets/img/asset1-3.jpg","disabled":false},
				{"src": "assets/img/asset1-4.jpg","disabled":false}
			],
			"usage" : "110000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5006",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Aggregate - Feeders',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : 'sold',
			"description" : "2012 Cummins C150D6R-A041K83 150 KW T/A Gen Set",
			"photo" : "assets/img/asset1-1.jpg",
			"photos": [
				{"src": "assets/img/asset1-1.jpg","disabled":false},
				{"src": "assets/img/asset1-2.jpg","disabled":false},
				{"src": "assets/img/asset1-3.jpg","disabled":false},
				{"src": "assets/img/asset1-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5007",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Aggregate - Feeders',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : "sold",
			"description" : "2012 Cummins C150D6R-A041K83 150 KW T/A Gen Set",
			"photo" : "assets/img/asset1-1.jpg",
			"photos": [
				{"src": "assets/img/asset1-1.jpg","disabled":false},
				{"src": "assets/img/asset1-2.jpg","disabled":false},
				{"src": "assets/img/asset1-3.jpg","disabled":false},
				{"src": "assets/img/asset1-4.jpg","disabled":false}
			],
			"usage" : "90000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5008",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Aggregate - Feeders',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : 'sold',
			"description" : "2012 Cummins C150D6R-A041K83 150 KW T/A Gen Set",
			"photo" : "assets/img/asset1-1.jpg",
			"photos": [
				{"src": "assets/img/asset1-1.jpg","disabled":false},
				{"src": "assets/img/asset1-2.jpg","disabled":false},
				{"src": "assets/img/asset1-3.jpg","disabled":false},
				{"src": "assets/img/asset1-4.jpg","disabled":false}
			],
			"usage" : "110000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5009",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Aggregate - Feeders',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : 'sold',
			"description" : "2012 Cummins C150D6R-A041K83 150 KW T/A Gen Set",
			"photo" : "assets/img/asset1-1.jpg",
			"photos": [
				{"src": "assets/img/asset1-1.jpg","disabled":false},
				{"src": "assets/img/asset1-2.jpg","disabled":false},
				{"src": "assets/img/asset1-3.jpg","disabled":false},
				{"src": "assets/img/asset1-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5010",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Aggregate - Feeders',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : "sold",
			"description" : "2012 Cummins C150D6R-A041K83 150 KW T/A Gen Set",
			"photo" : "assets/img/asset1-1.jpg",
			"photos": [
				{"src": "assets/img/asset1-1.jpg","disabled":false},
				{"src": "assets/img/asset1-2.jpg","disabled":false},
				{"src": "assets/img/asset1-3.jpg","disabled":false},
				{"src": "assets/img/asset1-4.jpg","disabled":false}
			],
			"usage" : "90000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5011",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Aggregate - Feeders',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : 'sold',
			"description" : "2012 Cummins C150D6R-A041K83 150 KW T/A Gen Set",
			"photo" : "assets/img/asset1-1.jpg",
			"photos": [
				{"src": "assets/img/asset1-1.jpg","disabled":false},
				{"src": "assets/img/asset1-2.jpg","disabled":false},
				{"src": "assets/img/asset1-3.jpg","disabled":false},
				{"src": "assets/img/asset1-4.jpg","disabled":false}
			],
			"usage" : "110000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5012",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Aggregate - Feeders',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : 'sold',
			"description" : "2012 Cummins C150D6R-A041K83 150 KW T/A Gen Set",
			"photo" : "assets/img/asset1-1.jpg",
			"photos": [
				{"src": "assets/img/asset1-1.jpg","disabled":false},
				{"src": "assets/img/asset1-2.jpg","disabled":false},
				{"src": "assets/img/asset1-3.jpg","disabled":false},
				{"src": "assets/img/asset1-4.jpg","disabled":false}
			],
			"usage" : "110000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5013",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Agriculture - Misc',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : "sold",
			"description" : "2012 Cummins C150D6R-A041K83 150 KW T/A Gen Set",
			"photo" : "assets/img/asset1-1.jpg",
			"photos": [
				{"src": "assets/img/asset1-1.jpg","disabled":false},
				{"src": "assets/img/asset1-2.jpg","disabled":false},
				{"src": "assets/img/asset1-3.jpg","disabled":false},
				{"src": "assets/img/asset1-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5014",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Agriculture - Misc',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : 'sold',
			"description" : "2012 Cummins C150D6R-A041K83 150 KW T/A Gen Set",
			"photo" : "assets/img/asset1-1.jpg",
			"photos": [
				{"src": "assets/img/asset1-1.jpg","disabled":false},
				{"src": "assets/img/asset1-2.jpg","disabled":false},
				{"src": "assets/img/asset1-3.jpg","disabled":false},
				{"src": "assets/img/asset1-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5015",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Agriculture - Misc',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : 'sold',
			"description" : "2012 Cummins C150D6R-A041K83 150 KW T/A Gen Set",
			"photo" : "assets/img/asset1-1.jpg",
			"photos": [
				{"src": "assets/img/asset1-1.jpg","disabled":false},
				{"src": "assets/img/asset1-2.jpg","disabled":false},
				{"src": "assets/img/asset1-3.jpg","disabled":false},
				{"src": "assets/img/asset1-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5016",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Agriculture - Misc',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : "sold",
			"description" : "2012 Cummins C150D6R-A041K83 150 KW T/A Gen Set",
			"photo" : "assets/img/asset1-1.jpg",
			"photos": [
				{"src": "assets/img/asset1-1.jpg","disabled":false},
				{"src": "assets/img/asset1-2.jpg","disabled":false},
				{"src": "assets/img/asset1-3.jpg","disabled":false},
				{"src": "assets/img/asset1-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5017",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Agriculture - Misc',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : 'sold',
			"description" : "2012 Cummins C150D6R-A041K83 150 KW T/A Gen Set",
			"photo" : "assets/img/asset1-1.jpg",
			"photos": [
				{"src": "assets/img/asset1-1.jpg","disabled":false},
				{"src": "assets/img/asset1-2.jpg","disabled":false},
				{"src": "assets/img/asset1-3.jpg","disabled":false},
				{"src": "assets/img/asset1-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5018",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : "sold",
			"description" : "Caterpillar Q/C 48 In. Forks",
			"photo" : "assets/img/asset12-1.jpg",
			"photos": [
				{"src": "assets/img/asset12-1.jpg","disabled":false},
				{"src": "assets/img/asset12-2.jpg","disabled":false},
				{"src": "assets/img/asset12-3.jpg","disabled":false},
				{"src": "assets/img/asset12-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5019",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : 'sold',
			"description" : "Caterpillar Q/C 48 In. Forks",
			"photo" : "assets/img/asset12-1.jpg",
			"photos": [
				{"src": "assets/img/asset12-1.jpg","disabled":false},
				{"src": "assets/img/asset12-2.jpg","disabled":false},
				{"src": "assets/img/asset12-3.jpg","disabled":false},
				{"src": "assets/img/asset12-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5020",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : 'sold',
			"description" : "Caterpillar Q/C 48 In. Forks",
			"photo" : "assets/img/asset12-1.jpg",
			"photos": [
				{"src": "assets/img/asset12-1.jpg","disabled":false},
				{"src": "assets/img/asset12-2.jpg","disabled":false},
				{"src": "assets/img/asset12-3.jpg","disabled":false},
				{"src": "assets/img/asset12-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5021",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : "sold",
			"description" : "Caterpillar Q/C 48 In. Forks",
			"photo" : "assets/img/asset12-1.jpg",
			"photos": [
				{"src": "assets/img/asset12-1.jpg","disabled":false},
				{"src": "assets/img/asset12-2.jpg","disabled":false},
				{"src": "assets/img/asset12-3.jpg","disabled":false},
				{"src": "assets/img/asset12-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5022",
			"bids": [{bid: 100, bidder: "12345", time: "2017-06-07T22:20:58.162Z", type: 'max'}],
			"maxBid":{bid: 500,bidder: "12345"},
			"category": 'Attachments - Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar Q/C 48 In. Forks",
			"photo" : "assets/img/asset12-1.jpg",
			"photos": [
				{"src": "assets/img/asset12-1.jpg","disabled":false},
				{"src": "assets/img/asset12-2.jpg","disabled":false},
				{"src": "assets/img/asset12-3.jpg","disabled":false},
				{"src": "assets/img/asset12-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5023",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar Q/C 48 In. Forks",
			"photo" : "assets/img/asset12-1.jpg",
			"photos": [
				{"src": "assets/img/asset12-1.jpg","disabled":false},
				{"src": "assets/img/asset12-2.jpg","disabled":false},
				{"src": "assets/img/asset12-3.jpg","disabled":false},
				{"src": "assets/img/asset12-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5024",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar Q/C 48 In. Forks",
			"photo" : "assets/img/asset12-1.jpg",
			"photos": [
				{"src": "assets/img/asset12-1.jpg","disabled":false},
				{"src": "assets/img/asset12-2.jpg","disabled":false},
				{"src": "assets/img/asset12-3.jpg","disabled":false},
				{"src": "assets/img/asset12-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5025",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar Q/C 48 In. Forks",
			"photo" : "assets/img/asset12-1.jpg",
			"photos": [
				{"src": "assets/img/asset12-1.jpg","disabled":false},
				{"src": "assets/img/asset12-2.jpg","disabled":false},
				{"src": "assets/img/asset12-3.jpg","disabled":false},
				{"src": "assets/img/asset12-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5026",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar Q/C 48 In. Forks",
			"photo" : "assets/img/asset12-1.jpg",
			"photos": [
				{"src": "assets/img/asset12-1.jpg","disabled":false},
				{"src": "assets/img/asset12-2.jpg","disabled":false},
				{"src": "assets/img/asset12-3.jpg","disabled":false},
				{"src": "assets/img/asset12-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5027",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : "out",
			"description" : "Caterpillar Q/C 48 In. Forks",
			"photo" : "assets/img/asset12-1.jpg",
			"photos": [
				{"src": "assets/img/asset12-1.jpg","disabled":false},
				{"src": "assets/img/asset12-2.jpg","disabled":false},
				{"src": "assets/img/asset12-3.jpg","disabled":false},
				{"src": "assets/img/asset12-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5028",
			"bids": [{bid: 100, bidder: "12345", time: "2017-06-07T22:20:58.162Z", type: 'max'}],
			"maxBid":{bid: 500,bidder: "12345"},
			"category": 'Attachments - Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar Q/C 48 In. Forks",
			"photo" : "assets/img/asset12-1.jpg",
			"photos": [
				{"src": "assets/img/asset12-1.jpg","disabled":false},
				{"src": "assets/img/asset12-2.jpg","disabled":false},
				{"src": "assets/img/asset12-3.jpg","disabled":false},
				{"src": "assets/img/asset12-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5029",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Excavator',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar 54 In. Excavator Bucket",
			"photo" : "assets/img/asset13-1.jpg",
			"photos": [
				{"src": "assets/img/asset13-1.jpg","disabled":false},
				{"src": "assets/img/asset13-2.jpg","disabled":false},
				{"src": "assets/img/asset13-3.jpg","disabled":false},
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5030",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Excavator',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar 54 In. Excavator Bucket",
			"photo" : "assets/img/asset13-1.jpg",
			"photos": [
				{"src": "assets/img/asset13-1.jpg","disabled":false},
				{"src": "assets/img/asset13-2.jpg","disabled":false},
				{"src": "assets/img/asset13-3.jpg","disabled":false},
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5031",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Excavator',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar 54 In. Excavator Bucket",
			"photo" : "assets/img/asset13-1.jpg",
			"photos": [
				{"src": "assets/img/asset13-1.jpg","disabled":false},
				{"src": "assets/img/asset13-2.jpg","disabled":false},
				{"src": "assets/img/asset13-3.jpg","disabled":false},
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5032",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Excavator',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar 54 In. Excavator Bucket",
			"photo" : "assets/img/asset13-1.jpg",
			"photos": [
				{"src": "assets/img/asset13-1.jpg","disabled":false},
				{"src": "assets/img/asset13-2.jpg","disabled":false},
				{"src": "assets/img/asset13-3.jpg","disabled":false},
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5033",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Excavator',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar 54 In. Excavator Bucket",
			"photo" : "assets/img/asset13-1.jpg",
			"photos": [
				{"src": "assets/img/asset13-1.jpg","disabled":false},
				{"src": "assets/img/asset13-2.jpg","disabled":false},
				{"src": "assets/img/asset13-3.jpg","disabled":false},
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5034",
			"bids": [{bid: 100, bidder: "12345", time: "2017-06-07T22:20:58.162Z", type: 'max'}],
			"maxBid":{bid: 500,bidder: "12345"},
			"category": 'Attachments - Excavator',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : "out",
			"description" : "Caterpillar 54 In. Excavator Bucket",
			"photo" : "assets/img/asset13-1.jpg",
			"photos": [
				{"src": "assets/img/asset13-1.jpg","disabled":false},
				{"src": "assets/img/asset13-2.jpg","disabled":false},
				{"src": "assets/img/asset13-3.jpg","disabled":false},
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5035",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Excavator',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar 54 In. Excavator Bucket",
			"photo" : "assets/img/asset13-1.jpg",
			"photos": [
				{"src": "assets/img/asset13-1.jpg","disabled":false},
				{"src": "assets/img/asset13-2.jpg","disabled":false},
				{"src": "assets/img/asset13-3.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5036",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Wheel Loader',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "John Deere Q/C 60 In. Wheel Loader Forks",
			"photo" : "assets/img/asset10-1.jpg",
			"photos": [
				{"src": "assets/img/asset10-1.jpg","disabled":false},
				{"src": "assets/img/asset10-2.jpg","disabled":false},
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5037",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Wheel Loader',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "John Deere Q/C 60 In. Wheel Loader Forks",
			"photo" : "assets/img/asset10-1.jpg",
			"photos": [
				{"src": "assets/img/asset10-1.jpg","disabled":false},
				{"src": "assets/img/asset10-2.jpg","disabled":false},
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5038",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Wheel Loader',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "John Deere Q/C 60 In. Wheel Loader Forks",
			"photo" : "assets/img/asset10-1.jpg",
			"photos": [
				{"src": "assets/img/asset10-1.jpg","disabled":false},
				{"src": "assets/img/asset10-2.jpg","disabled":false},
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5039",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Wheel Loader',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "John Deere Q/C 60 In. Wheel Loader Forks",
			"photo" : "assets/img/asset10-1.jpg",
			"photos": [
				{"src": "assets/img/asset10-1.jpg","disabled":false},
				{"src": "assets/img/asset10-2.jpg","disabled":false},
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5040",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Wheel Loader',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "John Deere Q/C 60 In. Wheel Loader Forks",
			"photo" : "assets/img/asset10-1.jpg",
			"photos": [
				{"src": "assets/img/asset10-1.jpg","disabled":false},
				{"src": "assets/img/asset10-2.jpg","disabled":false},
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5041",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Wheel Loader',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "John Deere Q/C 60 In. Wheel Loader Forks",
			"photo" : "assets/img/asset10-1.jpg",
			"photos": [
				{"src": "assets/img/asset10-1.jpg","disabled":false},
				{"src": "assets/img/asset10-2.jpg","disabled":false},
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5042",
			"bids": [{bid: 100, bidder: "12345", time: "2017-06-07T22:20:58.162Z", type: 'max'}],
			"maxBid":{bid: 500,bidder: "12345"},
			"category": 'Attachments - Wheel Loader',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar Q/C 48 In. Wheel Loader Forks",
			"photo" : "assets/img/asset12-1.jpg",
			"photos": [
				{"src": "assets/img/asset12-1.jpg","disabled":false},
				{"src": "assets/img/asset12-2.jpg","disabled":false},
				{"src": "assets/img/asset12-3.jpg","disabled":false},
				{"src": "assets/img/asset12-4.jpg","disabled":false},
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5043",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Wheel Loader',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar Q/C 48 In. Wheel Loader Forks",
			"photo" : "assets/img/asset12-1.jpg",
			"photos": [
				{"src": "assets/img/asset12-1.jpg","disabled":false},
				{"src": "assets/img/asset12-2.jpg","disabled":false},
				{"src": "assets/img/asset12-3.jpg","disabled":false},
				{"src": "assets/img/asset12-4.jpg","disabled":false},
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5044",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Wheel Loader',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar Q/C 48 In. Wheel Loader Forks",
			"photo" : "assets/img/asset12-1.jpg",
			"photos": [
				{"src": "assets/img/asset12-1.jpg","disabled":false},
				{"src": "assets/img/asset12-2.jpg","disabled":false},
				{"src": "assets/img/asset12-3.jpg","disabled":false},
				{"src": "assets/img/asset12-4.jpg","disabled":false},
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5045",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Wheel Loader',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar Q/C 48 In. Wheel Loader Forks",
			"photo" : "assets/img/asset12-1.jpg",
			"photos": [
				{"src": "assets/img/asset12-1.jpg","disabled":false},
				{"src": "assets/img/asset12-2.jpg","disabled":false},
				{"src": "assets/img/asset12-3.jpg","disabled":false},
				{"src": "assets/img/asset12-4.jpg","disabled":false},
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5046",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Wheel Loader',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar Q/C 48 In. Wheel Loader Forks",
			"photo" : "assets/img/asset12-1.jpg",
			"photos": [
				{"src": "assets/img/asset12-1.jpg","disabled":false},
				{"src": "assets/img/asset12-2.jpg","disabled":false},
				{"src": "assets/img/asset12-3.jpg","disabled":false},
				{"src": "assets/img/asset12-4.jpg","disabled":false},
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5047",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Skid Steer',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2010 John Deere 78 In. Skid Steer Bucket",
			"photo" : "assets/img/asset8-1.jpg",
			"photos": [
				{"src": "assets/img/asset8-1.jpg","disabled":false},
				{"src": "assets/img/asset8-2.jpg","disabled":false},
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5048",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Skid Steer',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2010 John Deere 78 In. Skid Steer Bucket",
			"photo" : "assets/img/asset8-1.jpg",
			"photos": [
				{"src": "assets/img/asset8-1.jpg","disabled":false},
				{"src": "assets/img/asset8-2.jpg","disabled":false},
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5049",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Light Tower',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2014 Allmand Bros. PAL1250 Light Tower",
			"photo" : "assets/img/asset3-1.jpg",
			"photos": [
				{"src": "assets/img/asset3-1.jpg","disabled":false},
				{"src": "assets/img/asset3-2.jpg","disabled":false},
				{"src": "assets/img/asset3-3.jpg","disabled":false},
				{"src": "assets/img/asset3-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5050",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Light Tower',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2014 Allmand Bros. PAL1250 Light Tower",
			"photo" : "assets/img/asset3-1.jpg",
			"photos": [
				{"src": "assets/img/asset3-1.jpg","disabled":false},
				{"src": "assets/img/asset3-2.jpg","disabled":false},
				{"src": "assets/img/asset3-3.jpg","disabled":false},
				{"src": "assets/img/asset3-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5051",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Light Tower',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2014 Allmand Bros. PAL1250 Light Tower",
			"photo" : "assets/img/asset3-1.jpg",
			"photos": [
				{"src": "assets/img/asset3-1.jpg","disabled":false},
				{"src": "assets/img/asset3-2.jpg","disabled":false},
				{"src": "assets/img/asset3-3.jpg","disabled":false},
				{"src": "assets/img/asset3-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5052",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Light Tower',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2014 Allmand Bros. PAL1250 Light Tower",
			"photo" : "assets/img/asset3-1.jpg",
			"photos": [
				{"src": "assets/img/asset3-1.jpg","disabled":false},
				{"src": "assets/img/asset3-2.jpg","disabled":false},
				{"src": "assets/img/asset3-3.jpg","disabled":false},
				{"src": "assets/img/asset3-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5053",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Light Tower',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2014 Allmand Bros. PAL1250 Light Tower",
			"photo" : "assets/img/asset3-1.jpg",
			"photos": [
				{"src": "assets/img/asset3-1.jpg","disabled":false},
				{"src": "assets/img/asset3-2.jpg","disabled":false},
				{"src": "assets/img/asset3-3.jpg","disabled":false},
				{"src": "assets/img/asset3-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5054",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Light Tower',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2014 Allmand Bros. PAL1250 Light Tower",
			"photo" : "assets/img/asset3-1.jpg",
			"photos": [
				{"src": "assets/img/asset3-1.jpg","disabled":false},
				{"src": "assets/img/asset3-2.jpg","disabled":false},
				{"src": "assets/img/asset3-3.jpg","disabled":false},
				{"src": "assets/img/asset3-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5055",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Light Tower',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2014 Allmand Bros. PAL1250 Light Tower",
			"photo" : "assets/img/asset3-1.jpg",
			"photos": [
				{"src": "assets/img/asset3-1.jpg","disabled":false},
				{"src": "assets/img/asset3-2.jpg","disabled":false},
				{"src": "assets/img/asset3-3.jpg","disabled":false},
				{"src": "assets/img/asset3-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5056",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Light Tower',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2014 Allmand Bros. PAL1250 Light Tower",
			"photo" : "assets/img/asset3-1.jpg",
			"photos": [
				{"src": "assets/img/asset3-1.jpg","disabled":false},
				{"src": "assets/img/asset3-2.jpg","disabled":false},
				{"src": "assets/img/asset3-3.jpg","disabled":false},
				{"src": "assets/img/asset3-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5057",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Attachments - Truck',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2014 Allmand Bros. PAL1250 Light Tower",
			"photo" : "assets/img/asset3-1.jpg",
			"photos": [
				{"src": "assets/img/asset3-1.jpg","disabled":false},
				{"src": "assets/img/asset3-2.jpg","disabled":false},
				{"src": "assets/img/asset3-3.jpg","disabled":false},
				{"src": "assets/img/asset3-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5058",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Cranes - Accessories',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2014 Allmand Bros. PAL1250 Light Tower",
			"photo" : "assets/img/asset3-1.jpg",
			"photos": [
				{"src": "assets/img/asset3-1.jpg","disabled":false},
				{"src": "assets/img/asset3-2.jpg","disabled":false},
				{"src": "assets/img/asset3-3.jpg","disabled":false},
				{"src": "assets/img/asset3-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5059",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Cranes - Conventional Truck',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2014 Allmand Bros. PAL1250 Light Tower",
			"photo" : "assets/img/asset3-1.jpg",
			"photos": [
				{"src": "assets/img/asset3-1.jpg","disabled":false},
				{"src": "assets/img/asset3-2.jpg","disabled":false},
				{"src": "assets/img/asset3-3.jpg","disabled":false},
				{"src": "assets/img/asset3-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5060",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Cranes - Conventional Truck',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2014 Allmand Bros. PAL1250 Light Tower",
			"photo" : "assets/img/asset3-1.jpg",
			"photos": [
				{"src": "assets/img/asset3-1.jpg","disabled":false},
				{"src": "assets/img/asset3-2.jpg","disabled":false},
				{"src": "assets/img/asset3-3.jpg","disabled":false},
				{"src": "assets/img/asset3-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5061",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Cranes - Conventional Truck',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2014 Allmand Bros. PAL1250 Light Tower",
			"photo" : "assets/img/asset3-1.jpg",
			"photos": [
				{"src": "assets/img/asset3-1.jpg","disabled":false},
				{"src": "assets/img/asset3-2.jpg","disabled":false},
				{"src": "assets/img/asset3-3.jpg","disabled":false},
				{"src": "assets/img/asset3-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5062",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Cranes - Conventional Truck',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2014 Allmand Bros. PAL1250 Light Tower",
			"photo" : "assets/img/asset3-1.jpg",
			"photos": [
				{"src": "assets/img/asset3-1.jpg","disabled":false},
				{"src": "assets/img/asset3-2.jpg","disabled":false},
				{"src": "assets/img/asset3-3.jpg","disabled":false},
				{"src": "assets/img/asset3-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5063",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Cranes - Conventional Truck',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2014 Allmand Bros. PAL1250 Light Tower",
			"photo" : "assets/img/asset3-1.jpg",
			"photos": [
				{"src": "assets/img/asset3-1.jpg","disabled":false},
				{"src": "assets/img/asset3-2.jpg","disabled":false},
				{"src": "assets/img/asset3-3.jpg","disabled":false},
				{"src": "assets/img/asset3-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5064",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Cranes - Conventional Truck',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2014 Allmand Bros. PAL1250 Light Tower",
			"photo" : "assets/img/asset3-1.jpg",
			"photos": [
				{"src": "assets/img/asset3-1.jpg","disabled":false},
				{"src": "assets/img/asset3-2.jpg","disabled":false},
				{"src": "assets/img/asset3-3.jpg","disabled":false},
				{"src": "assets/img/asset3-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5065",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Cranes - Conventional Truck',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2014 Allmand Bros. PAL1250 Light Tower",
			"photo" : "assets/img/asset3-1.jpg",
			"photos": [
				{"src": "assets/img/asset3-1.jpg","disabled":false},
				{"src": "assets/img/asset3-2.jpg","disabled":false},
				{"src": "assets/img/asset3-3.jpg","disabled":false},
				{"src": "assets/img/asset3-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5066",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Drilling - Miscellaneous',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2014 Allmand Bros. PAL1250 Light Tower",
			"photo" : "assets/img/asset3-1.jpg",
			"photos": [
				{"src": "assets/img/asset3-1.jpg","disabled":false},
				{"src": "assets/img/asset3-2.jpg","disabled":false},
				{"src": "assets/img/asset3-3.jpg","disabled":false},
				{"src": "assets/img/asset3-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5067",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Drilling - Miscellaneous',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Alamo RHGK 64 In. Flail Mower",
			"photo" : "assets/img/asset4-1.jpg",
			"photos": [
				{"src": "assets/img/asset4-1.jpg","disabled":false},
				{"src": "assets/img/asset4-2.jpg","disabled":false},
				{"src": "assets/img/asset4-3.jpg","disabled":false},
				{"src": "assets/img/asset4-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5068",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Drilling - Miscellaneous',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Alamo RHGK 64 In. Flail Mower",
			"photo" : "assets/img/asset4-1.jpg",
			"photos": [
				{"src": "assets/img/asset4-1.jpg","disabled":false},
				{"src": "assets/img/asset4-2.jpg","disabled":false},
				{"src": "assets/img/asset4-3.jpg","disabled":false},
				{"src": "assets/img/asset4-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5069",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Drilling - Miscellaneous',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Alamo RHGK 64 In. Flail Mower",
			"photo" : "assets/img/asset4-1.jpg",
			"photos": [
				{"src": "assets/img/asset4-1.jpg","disabled":false},
				{"src": "assets/img/asset4-2.jpg","disabled":false},
				{"src": "assets/img/asset4-3.jpg","disabled":false},
				{"src": "assets/img/asset4-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5070",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Drilling - Miscellaneous',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Alamo RHGK 64 In. Flail Mower",
			"photo" : "assets/img/asset4-1.jpg",
			"photos": [
				{"src": "assets/img/asset4-1.jpg","disabled":false},
				{"src": "assets/img/asset4-2.jpg","disabled":false},
				{"src": "assets/img/asset4-3.jpg","disabled":false},
				{"src": "assets/img/asset4-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5071",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Drilling - Miscellaneous',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Alamo RHGK 64 In. Flail Mower",
			"photo" : "assets/img/asset4-1.jpg",
			"photos": [
				{"src": "assets/img/asset4-1.jpg","disabled":false},
				{"src": "assets/img/asset4-2.jpg","disabled":false},
				{"src": "assets/img/asset4-3.jpg","disabled":false},
				{"src": "assets/img/asset4-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5072",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Drilling - Miscellaneous',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Alamo RHGK 64 In. Flail Mower",
			"photo" : "assets/img/asset4-1.jpg",
			"photos": [
				{"src": "assets/img/asset4-1.jpg","disabled":false},
				{"src": "assets/img/asset4-2.jpg","disabled":false},
				{"src": "assets/img/asset4-3.jpg","disabled":false},
				{"src": "assets/img/asset4-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5073",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Drilling - Miscellaneous',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Alamo RHGK 64 In. Flail Mower",
			"photo" : "assets/img/asset4-1.jpg",
			"photos": [
				{"src": "assets/img/asset4-1.jpg","disabled":false},
				{"src": "assets/img/asset4-2.jpg","disabled":false},
				{"src": "assets/img/asset4-3.jpg","disabled":false},
				{"src": "assets/img/asset4-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5074",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Drilling - Miscellaneous',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Alamo RHGK 64 In. Flail Mower",
			"photo" : "assets/img/asset4-1.jpg",
			"photos": [
				{"src": "assets/img/asset4-1.jpg","disabled":false},
				{"src": "assets/img/asset4-2.jpg","disabled":false},
				{"src": "assets/img/asset4-3.jpg","disabled":false},
				{"src": "assets/img/asset4-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5075",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Emergency Vehicles',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Alamo RHGK 64 In. Flail Mower",
			"photo" : "assets/img/asset4-1.jpg",
			"photos": [
				{"src": "assets/img/asset4-1.jpg","disabled":false},
				{"src": "assets/img/asset4-2.jpg","disabled":false},
				{"src": "assets/img/asset4-3.jpg","disabled":false},
				{"src": "assets/img/asset4-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5076",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Emergency Vehicles',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Alamo RHGK 64 In. Flail Mower",
			"photo" : "assets/img/asset4-1.jpg",
			"photos": [
				{"src": "assets/img/asset4-1.jpg","disabled":false},
				{"src": "assets/img/asset4-2.jpg","disabled":false},
				{"src": "assets/img/asset4-3.jpg","disabled":false},
				{"src": "assets/img/asset4-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5077",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Emergency Vehicles',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Alamo RHGK 64 In. Flail Mower",
			"photo" : "assets/img/asset4-1.jpg",
			"photos": [
				{"src": "assets/img/asset4-1.jpg","disabled":false},
				{"src": "assets/img/asset4-2.jpg","disabled":false},
				{"src": "assets/img/asset4-3.jpg","disabled":false},
				{"src": "assets/img/asset4-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5078",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Emergency Vehicles',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Alamo RHGK 64 In. Flail Mower",
			"photo" : "assets/img/asset4-1.jpg",
			"photos": [
				{"src": "assets/img/asset4-1.jpg","disabled":false},
				{"src": "assets/img/asset4-2.jpg","disabled":false},
				{"src": "assets/img/asset4-3.jpg","disabled":false},
				{"src": "assets/img/asset4-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5079",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Engines',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar 3412 Skid Mtd Engine",
			"photo" : "assets/img/asset11-1.jpg",
			"photos": [
				{"src": "assets/img/asset11-1.jpg","disabled":false},
				{"src": "assets/img/asset11-2.jpg","disabled":false},
				{"src": "assets/img/asset11-3.jpg","disabled":false},
				{"src": "assets/img/asset11-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5080",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Engines',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar 3412 Skid Mtd Engine",
			"photo" : "assets/img/asset11-1.jpg",
			"photos": [
				{"src": "assets/img/asset11-1.jpg","disabled":false},
				{"src": "assets/img/asset11-2.jpg","disabled":false},
				{"src": "assets/img/asset11-3.jpg","disabled":false},
				{"src": "assets/img/asset11-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5081",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Engines',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar 3412 Skid Mtd Engine",
			"photo" : "assets/img/asset11-1.jpg",
			"photos": [
				{"src": "assets/img/asset11-1.jpg","disabled":false},
				{"src": "assets/img/asset11-2.jpg","disabled":false},
				{"src": "assets/img/asset11-3.jpg","disabled":false},
				{"src": "assets/img/asset11-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5082",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Engines',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar 3412 Skid Mtd Engine",
			"photo" : "assets/img/asset11-1.jpg",
			"photos": [
				{"src": "assets/img/asset11-1.jpg","disabled":false},
				{"src": "assets/img/asset11-2.jpg","disabled":false},
				{"src": "assets/img/asset11-3.jpg","disabled":false},
				{"src": "assets/img/asset11-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5083",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Engines',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar 3412 Skid Mtd Engine",
			"photo" : "assets/img/asset11-1.jpg",
			"photos": [
				{"src": "assets/img/asset11-1.jpg","disabled":false},
				{"src": "assets/img/asset11-2.jpg","disabled":false},
				{"src": "assets/img/asset11-3.jpg","disabled":false},
				{"src": "assets/img/asset11-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5084",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Engines',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar 3412 Skid Mtd Engine",
			"photo" : "assets/img/asset11-1.jpg",
			"photos": [
				{"src": "assets/img/asset11-1.jpg","disabled":false},
				{"src": "assets/img/asset11-2.jpg","disabled":false},
				{"src": "assets/img/asset11-3.jpg","disabled":false},
				{"src": "assets/img/asset11-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5085",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Engines',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar 3412 Skid Mtd Engine",
			"photo" : "assets/img/asset11-1.jpg",
			"photos": [
				{"src": "assets/img/asset11-1.jpg","disabled":false},
				{"src": "assets/img/asset11-2.jpg","disabled":false},
				{"src": "assets/img/asset11-3.jpg","disabled":false},
				{"src": "assets/img/asset11-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5086",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Engines',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar 3412 Skid Mtd Engine",
			"photo" : "assets/img/asset11-1.jpg",
			"photos": [
				{"src": "assets/img/asset11-1.jpg","disabled":false},
				{"src": "assets/img/asset11-2.jpg","disabled":false},
				{"src": "assets/img/asset11-3.jpg","disabled":false},
				{"src": "assets/img/asset11-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5087",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Engines',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar 3412 Skid Mtd Engine",
			"photo" : "assets/img/asset11-1.jpg",
			"photos": [
				{"src": "assets/img/asset11-1.jpg","disabled":false},
				{"src": "assets/img/asset11-2.jpg","disabled":false},
				{"src": "assets/img/asset11-3.jpg","disabled":false},
				{"src": "assets/img/asset11-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5088",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Engines',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar 3412 Skid Mtd Engine",
			"photo" : "assets/img/asset11-1.jpg",
			"photos": [
				{"src": "assets/img/asset11-1.jpg","disabled":false},
				{"src": "assets/img/asset11-2.jpg","disabled":false},
				{"src": "assets/img/asset11-3.jpg","disabled":false},
				{"src": "assets/img/asset11-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5089",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Engines',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar 3412 Skid Mtd Engine",
			"photo" : "assets/img/asset11-1.jpg",
			"photos": [
				{"src": "assets/img/asset11-1.jpg","disabled":false},
				{"src": "assets/img/asset11-2.jpg","disabled":false},
				{"src": "assets/img/asset11-3.jpg","disabled":false},
				{"src": "assets/img/asset11-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5090",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Engines',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar 3412 Skid Mtd Engine",
			"photo" : "assets/img/asset11-1.jpg",
			"photos": [
				{"src": "assets/img/asset11-1.jpg","disabled":false},
				{"src": "assets/img/asset11-2.jpg","disabled":false},
				{"src": "assets/img/asset11-3.jpg","disabled":false},
				{"src": "assets/img/asset11-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5091",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Engines',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "Caterpillar 3412 Skid Mtd Engine",
			"photo" : "assets/img/asset11-1.jpg",
			"photos": [
				{"src": "assets/img/asset11-1.jpg","disabled":false},
				{"src": "assets/img/asset11-2.jpg","disabled":false},
				{"src": "assets/img/asset11-3.jpg","disabled":false},
				{"src": "assets/img/asset11-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5092",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Landscape Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "John Deere 2755 21 Ft 2WD Finishing Mower Tractor",
			"photo" : "assets/img/asset5-1.jpg",
			"photos": [
				{"src": "assets/img/asset5-1.jpg","disabled":false},
				{"src": "assets/img/asset5-2.jpg","disabled":false},
				{"src": "assets/img/asset5-3.jpg","disabled":false},
				{"src": "assets/img/asset5-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5093",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Landscape Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "John Deere 2755 21 Ft 2WD Finishing Mower Tractor",
			"photo" : "assets/img/asset5-1.jpg",
			"photos": [
				{"src": "assets/img/asset5-1.jpg","disabled":false},
				{"src": "assets/img/asset5-2.jpg","disabled":false},
				{"src": "assets/img/asset5-3.jpg","disabled":false},
				{"src": "assets/img/asset5-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5094",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Hydraulic Excavators - Crawler',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "John Deere 2755 21 Ft 2WD Finishing Mower Tractor",
			"photo" : "assets/img/asset5-1.jpg",
			"photos": [
				{"src": "assets/img/asset5-1.jpg","disabled":false},
				{"src": "assets/img/asset5-2.jpg","disabled":false},
				{"src": "assets/img/asset5-3.jpg","disabled":false},
				{"src": "assets/img/asset5-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5095",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Hydraulic Excavators - Crawler',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "John Deere 2755 21 Ft 2WD Finishing Mower Tractor",
			"photo" : "assets/img/asset5-1.jpg",
			"photos": [
				{"src": "assets/img/asset5-1.jpg","disabled":false},
				{"src": "assets/img/asset5-2.jpg","disabled":false},
				{"src": "assets/img/asset5-3.jpg","disabled":false},
				{"src": "assets/img/asset5-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5096",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Hydraulic Excavators - Crawler',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "John Deere 2755 21 Ft 2WD Finishing Mower Tractor",
			"photo" : "assets/img/asset5-1.jpg",
			"photos": [
				{"src": "assets/img/asset5-1.jpg","disabled":false},
				{"src": "assets/img/asset5-2.jpg","disabled":false},
				{"src": "assets/img/asset5-3.jpg","disabled":false},
				{"src": "assets/img/asset5-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5097",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Hydraulic Excavators - Crawler',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "John Deere 2755 21 Ft 2WD Finishing Mower Tractor",
			"photo" : "assets/img/asset5-1.jpg",
			"photos": [
				{"src": "assets/img/asset5-1.jpg","disabled":false},
				{"src": "assets/img/asset5-2.jpg","disabled":false},
				{"src": "assets/img/asset5-3.jpg","disabled":false},
				{"src": "assets/img/asset5-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5098",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Hydraulic Excavators - Crawler',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "John Deere 2755 21 Ft 2WD Finishing Mower Tractor",
			"photo" : "assets/img/asset5-1.jpg",
			"photos": [
				{"src": "assets/img/asset5-1.jpg","disabled":false},
				{"src": "assets/img/asset5-2.jpg","disabled":false},
				{"src": "assets/img/asset5-3.jpg","disabled":false},
				{"src": "assets/img/asset5-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5099",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Landscape Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "John Deere 2755 21 Ft 2WD Finishing Mower Tractor",
			"photo" : "assets/img/asset5-1.jpg",
			"photos": [
				{"src": "assets/img/asset5-1.jpg","disabled":false},
				{"src": "assets/img/asset5-2.jpg","disabled":false},
				{"src": "assets/img/asset5-3.jpg","disabled":false},
				{"src": "assets/img/asset5-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5100",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Landscape Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "John Deere 2755 21 Ft 2WD Finishing Mower Tractor",
			"photo" : "assets/img/asset5-1.jpg",
			"photos": [
				{"src": "assets/img/asset5-1.jpg","disabled":false},
				{"src": "assets/img/asset5-2.jpg","disabled":false},
				{"src": "assets/img/asset5-3.jpg","disabled":false},
				{"src": "assets/img/asset5-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5101",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Landscape Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "John Deere 2755 21 Ft 2WD Finishing Mower Tractor",
			"photo" : "assets/img/asset5-1.jpg",
			"photos": [
				{"src": "assets/img/asset5-1.jpg","disabled":false},
				{"src": "assets/img/asset5-2.jpg","disabled":false},
				{"src": "assets/img/asset5-3.jpg","disabled":false},
				{"src": "assets/img/asset5-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5102",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Landscape Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "John Deere 2755 21 Ft 2WD Finishing Mower Tractor",
			"photo" : "assets/img/asset5-1.jpg",
			"photos": [
				{"src": "assets/img/asset5-1.jpg","disabled":false},
				{"src": "assets/img/asset5-2.jpg","disabled":false},
				{"src": "assets/img/asset5-3.jpg","disabled":false},
				{"src": "assets/img/asset5-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5103",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Landscape Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "John Deere 2755 21 Ft 2WD Finishing Mower Tractor",
			"photo" : "assets/img/asset5-1.jpg",
			"photos": [
				{"src": "assets/img/asset5-1.jpg","disabled":false},
				{"src": "assets/img/asset5-2.jpg","disabled":false},
				{"src": "assets/img/asset5-3.jpg","disabled":false},
				{"src": "assets/img/asset5-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5104",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Landscape Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2013 John Deere 665 66 In. Auto Hitch Rototiller Mower Tractor",
			"photo" : "assets/img/asset9-1.jpg",
			"photos": [
				{"src": "assets/img/asset9-1.jpg","disabled":false},
				{"src": "assets/img/asset9-2.jpg","disabled":false},
				{"src": "assets/img/asset9-3.jpg","disabled":false},
				{"src": "assets/img/asset9-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5105",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Landscape Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2013 John Deere 665 66 In. Auto Hitch Rototiller",
			"photo" : "assets/img/asset9-1.jpg",
			"photos": [
				{"src": "assets/img/asset9-1.jpg","disabled":false},
				{"src": "assets/img/asset9-2.jpg","disabled":false},
				{"src": "assets/img/asset9-3.jpg","disabled":false},
				{"src": "assets/img/asset9-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5106",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Landscape Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2013 John Deere 665 66 In. Auto Hitch Rototiller",
			"photo" : "assets/img/asset9-1.jpg",
			"photos": [
				{"src": "assets/img/asset9-1.jpg","disabled":false},
				{"src": "assets/img/asset9-2.jpg","disabled":false},
				{"src": "assets/img/asset9-3.jpg","disabled":false},
				{"src": "assets/img/asset9-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5107",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Landscape Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2013 John Deere 665 66 In. Auto Hitch Rototiller",
			"photo" : "assets/img/asset9-1.jpg",
			"photos": [
				{"src": "assets/img/asset9-1.jpg","disabled":false},
				{"src": "assets/img/asset9-2.jpg","disabled":false},
				{"src": "assets/img/asset9-3.jpg","disabled":false},
				{"src": "assets/img/asset9-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5108",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Landscape Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2013 John Deere 665 66 In. Auto Hitch Rototiller",
			"photo" : "assets/img/asset9-1.jpg",
			"photos": [
				{"src": "assets/img/asset9-1.jpg","disabled":false},
				{"src": "assets/img/asset9-2.jpg","disabled":false},
				{"src": "assets/img/asset9-3.jpg","disabled":false},
				{"src": "assets/img/asset9-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5109",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Landscape Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2013 John Deere 665 66 In. Auto Hitch Rototiller",
			"photo" : "assets/img/asset9-1.jpg",
			"photos": [
				{"src": "assets/img/asset9-1.jpg","disabled":false},
				{"src": "assets/img/asset9-2.jpg","disabled":false},
				{"src": "assets/img/asset9-3.jpg","disabled":false},
				{"src": "assets/img/asset9-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5110",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Landscape Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2013 John Deere 665 66 In. Auto Hitch Rototiller",
			"photo" : "assets/img/asset9-1.jpg",
			"photos": [
				{"src": "assets/img/asset9-1.jpg","disabled":false},
				{"src": "assets/img/asset9-2.jpg","disabled":false},
				{"src": "assets/img/asset9-3.jpg","disabled":false},
				{"src": "assets/img/asset9-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5111",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Livestock Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5112",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Livestock Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5113",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Livestock Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5114",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Miscellaneous - Shop, Warehouse, Consumer',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5115",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Miscellaneous - Shop, Warehouse, Consumer',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5116",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Miscellaneous - Shop, Warehouse, Consumer',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5117",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Miscellaneous - Shop, Warehouse, Consumer',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5118",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Miscellaneous - Shop, Warehouse, Consumer',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5119",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Miscellaneous - Shop, Warehouse, Consumer',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5120",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Mobile Structures',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5121",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Mobile Structures',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5122",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Mobile Structures',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5123",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Mobile Structures',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5124",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Mobile Structures',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5125",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Parts or Stationary - Construction',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5126",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Utility Vehicles',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2015 John Deere Gator 4x4 Side By Side Utility Vehicle",
			"photo" : "assets/img/asset7-1.jpg",
			"photos": [
				{"src": "assets/img/asset7-1.jpg","disabled":false},
				{"src": "assets/img/asset7-2.jpg","disabled":false},
				{"src": "assets/img/asset7-3.jpg","disabled":false},
				{"src": "assets/img/asset7-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5127",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Utility Vehicles',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2015 John Deere Gator 4x4 Side By Side Utility Vehicle",
			"photo" : "assets/img/asset7-1.jpg",
			"photos": [
				{"src": "assets/img/asset7-1.jpg","disabled":false},
				{"src": "assets/img/asset7-2.jpg","disabled":false},
				{"src": "assets/img/asset7-3.jpg","disabled":false},
				{"src": "assets/img/asset7-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5128",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Utility Vehicles',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2015 John Deere Gator 4x4 Side By Side Utility Vehicle",
			"photo" : "assets/img/asset7-1.jpg",
			"photos": [
				{"src": "assets/img/asset7-1.jpg","disabled":false},
				{"src": "assets/img/asset7-2.jpg","disabled":false},
				{"src": "assets/img/asset7-3.jpg","disabled":false},
				{"src": "assets/img/asset7-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5129",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Utility Vehicles',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2015 John Deere Gator 4x4 Side By Side Utility Vehicle",
			"photo" : "assets/img/asset7-1.jpg",
			"photos": [
				{"src": "assets/img/asset7-1.jpg","disabled":false},
				{"src": "assets/img/asset7-2.jpg","disabled":false},
				{"src": "assets/img/asset7-3.jpg","disabled":false},
				{"src": "assets/img/asset7-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5130",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Utility Vehicles',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2015 John Deere Gator 4x4 Side By Side Utility Vehicle",
			"photo" : "assets/img/asset7-1.jpg",
			"photos": [
				{"src": "assets/img/asset7-1.jpg","disabled":false},
				{"src": "assets/img/asset7-2.jpg","disabled":false},
				{"src": "assets/img/asset7-3.jpg","disabled":false},
				{"src": "assets/img/asset7-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5131",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Utility Vehicles',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2015 John Deere Gator 4x4 Side By Side Utility Vehicle",
			"photo" : "assets/img/asset7-1.jpg",
			"photos": [
				{"src": "assets/img/asset7-1.jpg","disabled":false},
				{"src": "assets/img/asset7-2.jpg","disabled":false},
				{"src": "assets/img/asset7-3.jpg","disabled":false},
				{"src": "assets/img/asset7-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5132",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Pumps',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5133",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Pumps',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5134",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Scales',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5135",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Scales',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5136",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Scales',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5137",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Scales',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5138",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Survey Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5139",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Survey Equipment',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5140",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Tanks',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5141",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Tanks',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5142",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Tanks',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5143",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Tanks',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5144",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Welders',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "100000 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5145",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Welders',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		},
		{
			"lotNumber" : "5146",
			"bids": [],
			"maxBid":{bid: 0,bidder: null},
			"category": 'Welders',
			"watching": [],
			"equipid": '1234567890A',
			"flagged": false,
			"updated": '12/04/2017 3:55PM',
			"notes":'',
			"group": [],
			"video":false,
			"status" : null,
			"description" : "2011 Lincoln Vantage 500 S/A Welder",
			"photo" : "assets/img/asset6-1.jpg",
			"photos": [
				{"src": "assets/img/asset6-1.jpg","disabled":false},
				{"src": "assets/img/asset6-2.jpg","disabled":false},
				{"src": "assets/img/asset6-3.jpg","disabled":false},
				{"src": "assets/img/asset6-4.jpg","disabled":false}
			],
			"usage" : "4756 hrs",
			"comeswith" : "Cummins B3.9-C, 40 m boom, pwr to platform, hyd rotation, extendable axles, hyd leveling, EPA",
			"unused" : false,
			"closes" : "Mon May 22 2017 12:14:04 GMT-0700 (PDT)",
			"timeleft": '',
			"active":false
		}
	]; 

const categories = [
	{
		name: 'Aggregate - Feeders',
		quantity: 12,
	},{
		name: 'Agriculture - Misc',
		quantity: 8,
	},{
		name: 'Attachments - Equipment',
		quantity: 121,
	},{
		name: 'Attachments - Excavator',
		quantity: 56,
	},{
		name: 'Attachments - Motor Grader',
		quantity: 88,
	},{
		name: 'Attachments - Skid Steer',
		quantity: 31,
	},{
		name: 'Attachments - Truck',
		quantity: 66,
	},{
		name: 'Attachments - Wheel Loader',
		quantity: 66,
	},{
		name: 'Cranes - Accessories',
		quantity: 77,
	},{
		name: 'Cranes - Conventional Truck',
		quantity: 88,
	},{
		name: 'Drilling - Miscellaneous',
		quantity: 12,
	},{
		name: 'Emergency Vehicles',
		quantity: 1,
	},{
		name: 'Engines',
		quantity: 5,
	},{
		name: 'Environmental Equipment',
		quantity: 17,
	},{
		name: 'Hydraulic Excavators - Crawler',
		quantity: 18,
	},{
		name: 'Industrial Plant Equipment',
		quantity: 7,
	},{
		name: 'Landscape Equipment',
		quantity: 44,
	},{
		name: 'Light Tower',
		quantity: 11,
	},{
		name: 'Livestock Equipment',
		quantity: 7,
	},{
		name: 'Miscellaneous - Shop, Warehouse, Consumer',
		quantity: 12,
	},{
		name: 'Mobile Structures',
		quantity: 9,
	},{
		name: 'Parts or Stationary - Construction',
		quantity: 14,
	},{
		name: 'Pumps',
		quantity: 3,
	},{
		name: 'Scales',
		quantity: 2,
	},{
		name: 'Survey Equipment',
		quantity: 12,
	},{
		name: 'Tanks',
		quantity: 8,
	},{
		name: 'Utility Vehicles',
		quantity: 11,
	},{
		name: 'Welders',
		quantity: 22,
	},

]

$(function(){

	for(let i = 0; i < talObject.lots.length; i++){
		talObject.lots[i].closes = moment().add((i - talObject.preSoldOffset) * (talObject.closeInterval/1000),'seconds');
	};

	setInterval(function(){
		talObject.time = moment();
		talObject.intervalCount += 1000;
		if(talObject.intervalCount % talObject.closeInterval === 0){
			let nextLot = (talObject.intervalCount/talObject.closeInterval) + talObject.preSoldOffset;
			talController.sellLot(nextLot);
			talObject.auction.closingNext = nextLot; 
		}
	},1000);

}); 

const talObject = {
		closeInterval: 30000,
		intervalCount: 0,
		preSoldOffset: 20,
		time: moment(),
		auction: {
			startLot: 5000,
			endLot: 5145,
			totalLots: 146,
			closingNext: 21,
		},
		lots: lotlist,
		watchingLots: [],
		biddingLots: [],
		purchasedLots: [],
		groupBids:[],
		maxBids:[],
		bidder: 'v5001',
		userprofile: {
			name: 'Craig Froude',
			credit: 10000,
			spent: 0,
			bids: 0,
			acceptsNotifications: false,
			emailAddress: null,
			language: 'English',
		},
		lotDetailsVisible: false,
		maximumBidVisible: false,
		tempMaxBid: 0,
		focusedLot: null,

		activeTab: 'auction',

		isGroupChoosing: false,
		tempGroup: {
			uid: null,
			lots: [],
			quantity: 0,
			maxbid: 0,
			step: 1,
		},
		groupViewModalVisible: false,

		mobileSearchVisible: false,
		pastSearches: ['Cat 350','40 foot container','Gen Set'],
		categories: categories,
		categoriesVisible: false,
		activeCategory: null,
		categoryLots: [],
		searchLots: [],
		filteredResults: {},
	};



const talController = {
		stopProp: function(e){
			e.stopPropagation();
		},

		loadTab: function(e){
			
			let target = $(e.currentTarget).data('tab');
			talController.goToTab(target);

			pushHistory(target, 'page');//PUSH STATE
		},

		goToTab: function(target){
			scrollArea.destroy();
			talObject.activeTab = target;
			createOptiscroll();
		},

		toggleLotDetails: function(e,context){
			talObject.lotDetailsVisible = !talObject.lotDetailsVisible;
			if(talObject.lotDetailsVisible){
				talController.showLot(context.lot);
				pushHistory(context.lot.lotNumber, 'lot');//PUSH STATE
			}
			else{
				pushHistory(talObject.activeTab, 'tab');
			}
		},

		showLot: function(lot) {
			talObject.focusedLot = lot;

			var mySwiper = new Swiper ('.swiper-container', {
				direction: 'horizontal',
				loop: true,
				pagination: '.swiper-pagination',
  				paginationClickable: 'true',
				speed: 300,
				effect: "coverflow",
			})
		},

		sellLot: function(lotIndex){
			let lot = talObject.lots[lotIndex];
			lot.status = 'sold';
			//ADD TO PURCHASES IF YOU WERE THE TOP BIDDER
			if(typeof lot.bids[0] != 'undefined' && lot.bids[0].bidder === talObject.bidder){
				talObject.purchasedLots.push(lot);
				talObject.userprofile.spent += lot.bids[0].bid;
			}
		},

		/******************************************
			SEARCH
		******************************************/	
			toggleSearchVisible: function(e){
				talObject.mobileSearchVisible = !talObject.mobileSearchVisible;
				talObject.categoriesVisible = false;
				pushHistory('search','modal');

				$('.js--search-input').focus();
			},

			updateSearch: function(e) {
				if(talObject.filteredResults.input.length === 0) talController.clearSearch();

				let value = $(e.currentTarget).val();
				if(value.length === 0){	//IF NO SEARCH STRING ENTERED
					talObject.filteredResults.searching = false;
					return;
				} 
				else talObject.filteredResults.searching = true;

				// if(!isNaN(parseInt(value[0])) && (parseInt(value) >= talObject.lots[0].lotNumber && parseInt(value) <= talObject.lots[talObject.lots.length - 1].lotNumber)) {  //IF THIS IS A NUMBER
				// 	talObject.filteredResults.lotMatch = value;
				// } 
				talObject.filteredResults.noLotMatch = false;

				if(!isNaN(parseInt(value[0]))) {  //IF THIS IS A NUMBER
					talObject.filteredResults.lotMatch = value;
					if(!(parseInt(value) >= talObject.lots[0].lotNumber && parseInt(value) <= talObject.lots[talObject.lots.length - 1].lotNumber)){
						talObject.filteredResults.noLotMatch = true;
					}
				} 
				else{
					talObject.filteredResults.lotMatch = null;
					talObject.filteredResults.input = value;
					talObject.filteredResults.categories = [];
					talObject.filteredResults.matches = talObject.lots.filter((lot) => {
						
						if (lot.description.toLowerCase().indexOf(value) >= 0){
							if(talObject.filteredResults.categories.indexOf(lot.category) === -1) talObject.filteredResults.categories.push(lot.category);
							return true;
						}
					})
				}
				
			},

			doCategorySearch: function(e){
				let value = $(e.currentTarget).data('value');
				talObject.activeCategory = value;
				talObject.categoryLots = talObject.lots.filter((lot) => {
					return (lot.category === talObject.activeCategory && lot.description.toLowerCase().indexOf(talObject.filteredResults.input) >= 0);
				});
				talObject.mobileSearchVisible = false;
			},

			doSearch: function(e) {
				if(talObject.filteredResults.lotMatch != null){
					goToLot(talObject.filteredResults.lotMatch);
					talObject.mobileSearchVisible = false;
				}
			},

			clearSearch: function() {
				talObject.filteredResults = {
					input: null,
					searching: false,
					lotMatch: null,
					noLotMatch: true,
					topMatch: null,
					categories: [],
					matches: [],
				};
				talController.clearCategory();
			},

		/******************************************
			CATEGORIES
		******************************************/	

			toggleCategoriesVisible: function(){
				talObject.categoriesVisible = !talObject.categoriesVisible;
			},

			goToCategory: function(e){
				talObject.activeCategory = $(e.currentTarget).data('value');
				talObject.categoryLots = talObject.lots.filter((lot) => {return lot.category === talObject.activeCategory});
				talObject.categoriesVisible = false;
			},

			clearCategory: function(e){
				talObject.activeCategory = null;
				talObject.categoryLots = [];
				scrollArea.destroy();
				createOptiscroll();
			},

		/******************************************
			WATCH LOTS
		******************************************/	

			watchLot:function(e,context){
				talController.watchThisLot(context.lot,true);
			},

			watchFocusedLot: function(e) {
				talController.watchThisLot(talObject.focusedLot,true);
			},

			watchThisLot:function(lot,remove){
				let existing = lot.watching.indexOf(talObject.bidder);
				if(existing >= 0) { 
					if(remove){ 
						//REMOVE YOUR BIDDER NUMBER FROM THE WATCHING LIST ON THE LOT OBJECT
						lot.watching.splice(existing,1);
						
						//FIND THIS LOT IN THE LIST OF WATCHED LOTS AND REMOVE IT
						let index = talObject.watchingLots.findIndex(x => {return x.lotNumber === lot.lotNumber});
						talObject.watchingLots.splice(index,1);
					}
				}
				else{
					//ADD YOUR BIDDER # TO THE LOT'S WATCHING LIST
					lot.watching.push(talObject.bidder);
					//ADD THIS LOT TO YOUR WATCHING LIST
					talObject.watchingLots.push(lot);
				}

				//SORT THE LIST OF WATCHING BY LOT NUMBER
				talObject.watchingLots.sort((a,b) => {return a.lotNumber - b.lotNumber});

			},

		/******************************************
			QUICK BIDS
		******************************************/

			quickBid: function(e,context){
				talObject.focusedLot = context.lot;
				talObject.quickBidConfirmVisible = true;
			},
			
			focusedQuickBid: function(e,context) {
				talObject.quickBidConfirmVisible = true;
			},
			
			cancelQuickBid: function() {
				talObject.quickBidConfirmVisible = false;	
			},

			confirmQuickBid: function(e,context) {
				let lot = talObject.focusedLot;
				//IF THERE'S A MAX BID ON THIS LOT
				if(lot.maxBid.bid > 0){
					//IF THE QUICK BID WOULD BE MORE THAN THE MAX BID
					if(talController.increment(lot.bids[0].bid) > lot.maxBid.bid){
						talController.incrementBid(lot,'quick',talObject.bidder);
						talController.clearMaxBid(lot);
					}
					//YOU'VE BEEN OUTBID
					else{
						talController.outBid(lot,null,false);
					}
				}
				else talController.incrementBid(lot,'quick',talObject.bidder);
				
				//ADD TO WATCH LIST AND BIDDING LIST (WHEN APPROPRIATE)
				talController.watchAndPush(lot);

				talObject.quickBidConfirmVisible = false;
			},

			watchAndPush: function(lot){
				let isBidding = lot.bids.filter((bid) => { 
					if(typeof bid != 'undefined' && bid.bidder === talObject.bidder)return 1; 
				})

				if(isBidding.length === 1){	
					talController.watchThisLot(lot,false);
					talObject.biddingLots.push(lot);
				}
			},

			incrementBid: function(lot,type,bidder){
				let currentBid = (lot.bids.length === 0 || typeof lot.bids[0] == 'undefined')? 0 : lot.bids[0].bid;

				lot.bids.unshift(talController.buildBid(bidder,talController.increment(currentBid),type));
			},

			pricedBid: function(lot,type,bidder,amt){
				lot.bids.unshift(talController.buildBid(bidder,amt,type));
				console.log(lot.bids);
			},

			buildBid: function(bidder,amt,type) {
				let bid = {
					bidder: bidder,
					bid: amt,
					time: new Date().toJSON(),
					type: type,
				};
				
				return bid;
			},

			increment: function(amt){
				for(let i = 0; i < incrementTable.length; i++){
					if(amt < incrementTable[i].upto) return incrementTable[i].increment + amt;
				}
			},

			outBid: function(lot,bid,max){
				
				if(max) talController.pricedBid(lot,'max',talObject.bidder,bid); //PLACE A BID AT YOUR MAX BEFORE PLACING AN INCREMENT BID BY THE OTHER BIDDER
				else talController.incrementBid(lot,'quick',talObject.bidder);
				//PLACE INCREMENT BID FOR OTHER BIDDER
				talController.incrementBid(lot,'max',lot.maxBid.bidder);
				//spawnNotification('You were Outbid','Another Bidder has outbid you.');
			},

		/******************************************
			MAX BIDS
		******************************************/

			toggleMaximumBidVisible: function(e,context){
				talObject.maximumBidVisible = !talObject.maximumBidVisible;
				if(typeof context.lot != 'undefined' && talObject.maximumBidVisible) talObject.focusedLot = context.lot;
				
			},

			setMaximumBid: function(){
				let lot = talObject.focusedLot;
				let bid = parseInt(talObject.tempMaxBid);
				
				if(bid > lot.maxBid.bid) {
					//IF THERE IS CURRENTLY A MAX BID, PLACE A BID BY THE OTHER BIDDER AT THEIR MAX BEFORE PLACING YOUR OWN
					if(lot.maxBid.bid > 0) talController.pricedBid(lot,lot.maxBid.bidder,'max',lot.maxBid.bid);
					
					lot.maxBid.bidder = talObject.bidder;
					lot.maxBid.bid = bid;
					if(typeof lot.bids[0] === 'undefined' || lot.bids[0].bidder != talObject.bidder) talController.incrementBid(lot,'max',talObject.bidder);

					//ADD TO WATCH LIST AND BIDDING LIST (WHEN APPROPIRATE)
					talController.watchAndPush(lot);
				}
				else if(bid === lot.maxBid.bid){//IT'S A TIE!
					//QUICKLY (FOR THE PURPOSE OF THE PROTOTYE) THROW IN A BID AT THE NEXT INCREMENT (NOT SAFE,BUT SHOULD WORK)
					talController.incrementBid(lot,'max',talObject.bidder);
					//AND THEN PUT THE ORIGINAL BIDDER ON AT THEIR MAX
					talController.pricedBid(lot,lot.maxBid.bidder,'max',lot.maxBid.bid);
					spawnNotification('You were Outbid','Another Bidder had already placed a maximum bid at the same price. The first bidder in wins.');
				}
				else{//YOU WERE OUTBID
					talController.outBid(lot,bid,true);
				}

				talObject.maximumBidVisible = false;
			},

			clearMaxBid: function(lot){
				lot.maxBid.bid = 0;
				lot.maxBid.bidder = null;
			},

		/******************************************
			GROUP BIDS
		******************************************/

			createGroupBid: function(e,context) {
				talController.activateGroupBid(context.lot);
			},

			dismissAndGroupBid: function(e,context){
				talController.dismissGroupViewModal();
				talObject.lotDetailsVisible = false;

				talController.activateGroupBid(talObject.focusedLot);
			},

			activateGroupBid: function(lot) {
				if(talObject.isGroupChoosing){
					talController.addOrRemoveIfExists(talObject.tempGroup,lot);
					return;
				}
				talObject.isGroupChoosing = true;
				talObject.tempGroup = {
					uid: new Date().toJSON(),
					lots: [],
					quantity: 1,
					maxbid: 0,
					step: 1,
				}

				talObject.tempGroup.lots.push(lot);//ADD LOT REFERENCE TO THE GROUP OBJECT
				lot.group.push(talObject.tempGroup.uid);//ADD REFERENCE TO GROUP BID TO THE LOT OBJECT
			},

			addOrRemoveIfExists: function(list,item) {
				let i = 0;
				let exists = false;

				list.lots.forEach(function(obj){
					if(obj === item){
						list.lots.splice(i,1);
						item.group.splice(item.group.indexOf(list.uid),1);
						exists = true;
					}
					i++;
				});
				
				if(exists) return;
				list.lots.push(item);
				item.group.push(list.uid);
			},

			cancelGroupBid: function(e) {
				talObject.isGroupChoosing = false;
				talObject.groupBidModalVisible = false;
			},

			addToGroup: function(e,context){
				e.stopPropagation();
				talController.addOrRemoveIfExists(talObject.tempGroup,context.lot);
			},

			toggleGroupBidModalVisible: function() {
				talObject.groupBidModalVisible = !talObject.groupBidModalVisible;
			},

			setGroupQuantity: function(e,context){
				talObject.tempGroup.quantity = parseInt($(e.currentTarget).data('value'));
			},

			groupBiddingStep: function(e){
				talObject.tempGroup.step = $(e.currentTarget).data('targetstep');
			},

			completeGroupBid: function(e){
				talObject.groupBidModalVisible = false;
				talObject.isGroupChoosing = false;

				let newGroup = {
					uid: talObject.tempGroup.uid,
					type: 'group',
					lots: talObject.tempGroup.lots,
					quantity: talObject.tempGroup.quantity,
					maxbid: talObject.tempGroup.maxbid,
				}

				talController.bidOnGroupLots(newGroup);

				talObject.biddingLots.push(newGroup);

				talController.goToTab('bids');
				pushHistory('bids', 'page');//PUSH STATE
			},

			bidOnGroupLots: function(group){
				let i = 1;

				group.lots.forEach(function(lot){
					if(i > group.quantity) return;

					if(typeof lot.bids[0] == 'undefined' || lot.bids[0].bid < group.maxbid){
						talController.incrementBid(lot,'max',talObject.bidder);
						i++;
					}
				}); 

			},

			showGroupViewModalFromLot: function (e,context) {
				let groupuid = context.lot.group[0];
				let group = talObject.biddingLots.find(el => { if(el.uid === groupuid) return el; });

				talController.loadGroupView(group,context.lot);
			},

			showGroupViewModal: function (e,context) {
				talController.loadGroupView(context.lot,context.lot.lots[0]);
			},

			loadGroupView: function(group,lot) {
				talObject.groupViewModalVisible = true;
				talObject.tempGroup = {};
				talObject.tempGroup = group;
				talObject.focusedLot = lot;
			},

			dismissGroupViewModal: function(){
				talObject.groupViewModalVisible = false;
			},

			switchGroupFocusedLot: function(e,context){
				talObject.focusedLot = talObject.tempGroup.lots[$(e.currentTarget).data('index')];
			},

	};


const incrementTable = [
	{
		upto: 99,
		increment: 5
	},
	{
		upto: 249,
		increment: 10
	},
	{
		upto: 499,
		increment: 25
	},
	{
		upto: 999,
		increment: 50
	},
	{
		upto: 2499,
		increment: 100
	},
	{
		upto: 9999,
		increment: 250
	},
	{
		upto: 24999,
		increment: 500
	},
	{
		upto: 149999,
		increment: 1000
	},
	{
		upto: 299999,
		increment: 2500
	},
	{
		upto: 999999,
		increment: 5000
	},
	{
		upto: 9999999,
		increment: 10000
	},
]


const talBinding = rivets.bind($('.js--tal'),{
		talObject: talObject,
		talController : talController
	}); 

