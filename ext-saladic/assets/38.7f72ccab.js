(window.saladictEntry=window.saladictEntry||[]).push([[38,148],{140:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(32),o=n(0);function i(e,t,n,i){const c=Object(r.f)(r.b);c.current.next=t,c.current.error=n,c.current.complete=i;const a=Object(o.useRef)();return a.current=Object(o.useMemo)(()=>(a.current&&a.current.unsubscribe(),e.subscribe({next:e=>c.current.next&&c.current.next(e),error:e=>{if(!c.current.error)throw e;c.current.error(e)},complete:()=>c.current.complete&&c.current.complete()})),[e]),Object(o.useEffect)(()=>()=>a.current.unsubscribe(),r.a),a.current}},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(9);function o(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=e.length;if(0===n)throw new Error("list of properties cannot be empty.");return function(t){return Object(r.a)(i(e,n))(t)}}function i(e,t){return function(n){for(var r=n,o=0;o<t;o++){var i=r[e[o]];if(void 0===i)return;r=i}return r}}},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),o=n(32);function i(e,t){const n=Object(o.f)(o.c),i=Object(o.f)(()=>e(n.current));return[Object(r.useRef)((...e)=>{n.current.next(t?t(e):e[0])}).current,i.current]}},32:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"f",(function(){return f}));var r=n(0),o=n(71),i=n(152);function c(e){return e}function a(e){return Object(i.a)(0)(e)}function l(){return new o.a}function s(){return{}}const u=[];function f(e){const t=Object(r.useRef)(null);return null===t.current&&(t.current=e()),t}"undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect},492:function(e,t,n){e.exports=function(){"use strict";var e=Object.freeze||function(e){return e},t=e(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),n=e(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]),r=e(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),o=e(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),i=e(["#text"]),c=Object.freeze||function(e){return e},a=c(["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","coords","crossorigin","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","integrity","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns"]),l=c(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),s=c(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),u=c(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),f=Object.hasOwnProperty,d=Object.setPrototypeOf,p=("undefined"!=typeof Reflect&&Reflect).apply;function m(e,t){d&&d(e,null);for(var n=t.length;n--;){var r=t[n];if("string"==typeof r){var o=r.toLowerCase();o!==r&&(Object.isFrozen(t)||(t[n]=o),r=o)}e[r]=!0}return e}function h(e){var t={},n=void 0;for(n in e)p(f,e,[n])&&(t[n]=e[n]);return t}p||(p=function(e,t,n){return e.apply(t,n)});var y=Object.seal||function(e){return e},g=y(/\{\{[\s\S]*|[\s\S]*\}\}/gm),b=y(/<%[\s\S]*|[\s\S]*%>/gm),_=y(/^data-[\-\w.\u00B7-\uFFFF]/),v=y(/^aria-[\-\w]+$/),T=y(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),A=y(/^(?:\w+script|data):/i),O=y(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function w(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var S=("undefined"!=typeof Reflect&&Reflect).apply,E=Array.prototype.slice,L=Object.freeze,k=function(){return"undefined"==typeof window?null:window};S||(S=function(e,t,n){return e.apply(t,n)});var M=function(e,t){if("object"!==(void 0===e?"undefined":x(e))||"function"!=typeof e.createPolicy)return null;var n=null;t.currentScript&&t.currentScript.hasAttribute("data-tt-policy-suffix")&&(n=t.currentScript.getAttribute("data-tt-policy-suffix"));var r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}};return function e(){var c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k(),f=function(t){return e(t)};if(f.version="1.0.11",f.removed=[],!c||!c.document||9!==c.document.nodeType)return f.isSupported=!1,f;var d=c.document,p=!1,y=!1,j=c.document,R=c.DocumentFragment,N=c.HTMLTemplateElement,C=c.Node,D=c.NodeFilter,H=c.NamedNodeMap,F=void 0===H?c.NamedNodeMap||c.MozNamedAttrMap:H,z=c.Text,q=c.Comment,I=c.DOMParser,P=c.TrustedTypes;if("function"==typeof N){var B=j.createElement("template");B.content&&B.content.ownerDocument&&(j=B.content.ownerDocument)}var U=M(P,d),W=U?U.createHTML(""):"",G=j,V=G.implementation,K=G.createNodeIterator,Y=G.getElementsByTagName,$=G.createDocumentFragment,X=d.importNode,Z={};f.isSupported=V&&void 0!==V.createHTMLDocument&&9!==j.documentMode;var J=g,Q=b,ee=_,te=v,ne=A,re=O,oe=T,ie=null,ce=m({},[].concat(w(t),w(n),w(r),w(o),w(i))),ae=null,le=m({},[].concat(w(a),w(l),w(s),w(u))),se=null,ue=null,fe=!0,de=!0,pe=!1,me=!1,he=!1,ye=!1,ge=!1,be=!1,_e=!1,ve=!1,Te=!1,Ae=!0,Oe=!0,xe=!1,we={},Se=m({},["audio","head","math","script","style","template","svg","video"]),Ee=m({},["audio","video","img","source","image"]),Le=null,ke=m({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Me=null,je=j.createElement("form"),Re=function(e){Me&&Me===e||(e&&"object"===(void 0===e?"undefined":x(e))||(e={}),ie="ALLOWED_TAGS"in e?m({},e.ALLOWED_TAGS):ce,ae="ALLOWED_ATTR"in e?m({},e.ALLOWED_ATTR):le,Le="ADD_URI_SAFE_ATTR"in e?m({},e.ADD_URI_SAFE_ATTR):ke,se="FORBID_TAGS"in e?m({},e.FORBID_TAGS):{},ue="FORBID_ATTR"in e?m({},e.FORBID_ATTR):{},we="USE_PROFILES"in e&&e.USE_PROFILES,fe=!1!==e.ALLOW_ARIA_ATTR,de=!1!==e.ALLOW_DATA_ATTR,pe=e.ALLOW_UNKNOWN_PROTOCOLS||!1,me=e.SAFE_FOR_JQUERY||!1,he=e.SAFE_FOR_TEMPLATES||!1,ye=e.WHOLE_DOCUMENT||!1,_e=e.RETURN_DOM||!1,ve=e.RETURN_DOM_FRAGMENT||!1,Te=e.RETURN_DOM_IMPORT||!1,be=e.FORCE_BODY||!1,Ae=!1!==e.SANITIZE_DOM,Oe=!1!==e.KEEP_CONTENT,xe=e.IN_PLACE||!1,oe=e.ALLOWED_URI_REGEXP||oe,he&&(de=!1),ve&&(_e=!0),we&&(ie=m({},[].concat(w(i))),ae=[],!0===we.html&&(m(ie,t),m(ae,a)),!0===we.svg&&(m(ie,n),m(ae,l),m(ae,u)),!0===we.svgFilters&&(m(ie,r),m(ae,l),m(ae,u)),!0===we.mathMl&&(m(ie,o),m(ae,s),m(ae,u))),e.ADD_TAGS&&(ie===ce&&(ie=h(ie)),m(ie,e.ADD_TAGS)),e.ADD_ATTR&&(ae===le&&(ae=h(ae)),m(ae,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&m(Le,e.ADD_URI_SAFE_ATTR),Oe&&(ie["#text"]=!0),ye&&m(ie,["html","head","body"]),ie.table&&m(ie,["tbody"]),L&&L(e),Me=e)},Ne=function(e){f.removed.push({element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=W}},Ce=function(e,t){try{f.removed.push({attribute:t.getAttributeNode(e),from:t})}catch(e){f.removed.push({attribute:null,from:t})}t.removeAttribute(e)},De=function(e){var t=void 0,n=void 0;if(be)e="<remove></remove>"+e;else{var r=e.match(/^[\s]+/);(n=r&&r[0])&&(e=e.slice(n.length))}if(p)try{t=(new I).parseFromString(e,"text/html")}catch(e){}if(y&&m(se,["title"]),!t||!t.documentElement){var o=(t=V.createHTMLDocument("")).body;o.parentNode.removeChild(o.parentNode.firstElementChild),o.outerHTML=U?U.createHTML(e):e}return n&&t.body.insertBefore(j.createTextNode(n),t.body.childNodes[0]||null),Y.call(t,ye?"html":"body")[0]};f.isSupported&&(function(){try{De('<svg><p><style><img src="</style><img src=x onerror=1//">').querySelector("svg img")&&(p=!0)}catch(e){}}(),function(){try{De("<x/><title>&lt;/title&gt;&lt;img&gt;").querySelector("title").innerHTML.match(/<\/title/)&&(y=!0)}catch(e){}}());var He=function(e){return K.call(e.ownerDocument||e,e,D.SHOW_ELEMENT|D.SHOW_COMMENT|D.SHOW_TEXT,(function(){return D.FILTER_ACCEPT}),!1)},Fe=function(e){return!(e instanceof z||e instanceof q||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof F&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute)},ze=function(e){return"object"===(void 0===C?"undefined":x(C))?e instanceof C:e&&"object"===(void 0===e?"undefined":x(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},qe=function(e,t,n){Z[e]&&Z[e].forEach((function(e){e.call(f,t,n,Me)}))},Ie=function(e){var t=void 0;if(qe("beforeSanitizeElements",e,null),Fe(e))return Ne(e),!0;var n=e.nodeName.toLowerCase();if(qe("uponSanitizeElement",e,{tagName:n,allowedTags:ie}),!ie[n]||se[n]){if(Oe&&!Se[n]&&"function"==typeof e.insertAdjacentHTML)try{var r=e.innerHTML;e.insertAdjacentHTML("AfterEnd",U?U.createHTML(r):r)}catch(e){}return Ne(e),!0}return"noscript"===n&&e.innerHTML.match(/<\/noscript/i)||"noembed"===n&&e.innerHTML.match(/<\/noembed/i)?(Ne(e),!0):(!me||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(f.removed.push({element:e.cloneNode()}),e.innerHTML?e.innerHTML=e.innerHTML.replace(/</g,"&lt;"):e.innerHTML=e.textContent.replace(/</g,"&lt;")),he&&3===e.nodeType&&(t=(t=(t=e.textContent).replace(J," ")).replace(Q," "),e.textContent!==t&&(f.removed.push({element:e.cloneNode()}),e.textContent=t)),qe("afterSanitizeElements",e,null),!1)},Pe=function(e,t,n){if(Ae&&("id"===t||"name"===t)&&(n in j||n in je))return!1;if(de&&ee.test(t));else if(fe&&te.test(t));else{if(!ae[t]||ue[t])return!1;if(Le[t]);else if(oe.test(n.replace(re,"")));else if("src"!==t&&"xlink:href"!==t||"script"===e||0!==n.indexOf("data:")||!Ee[e])if(pe&&!ne.test(n.replace(re,"")));else if(n)return!1}return!0},Be=function(e){var t=void 0,n=void 0,r=void 0,o=void 0,i=void 0;qe("beforeSanitizeAttributes",e,null);var c=e.attributes;if(c){var a={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ae};for(i=c.length;i--;){var l=t=c[i],s=l.name,u=l.namespaceURI;if(n=t.value.trim(),r=s.toLowerCase(),a.attrName=r,a.attrValue=n,a.keepAttr=!0,qe("uponSanitizeAttribute",e,a),n=a.attrValue,"name"===r&&"IMG"===e.nodeName&&c.id)o=c.id,c=S(E,c,[]),Ce("id",e),Ce(s,e),c.indexOf(o)>i&&e.setAttribute("id",o.value);else{if("INPUT"===e.nodeName&&"type"===r&&"file"===n&&a.keepAttr&&(ae[r]||!ue[r]))continue;"id"===s&&e.setAttribute(s,""),Ce(s,e)}if(a.keepAttr){he&&(n=(n=n.replace(J," ")).replace(Q," "));var d=e.nodeName.toLowerCase();if(Pe(d,r,n))try{u?e.setAttributeNS(u,s,n):e.setAttribute(s,n),f.removed.pop()}catch(e){}}}qe("afterSanitizeAttributes",e,null)}},Ue=function e(t){var n=void 0,r=He(t);for(qe("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)qe("uponSanitizeShadowNode",n,null),Ie(n)||(n.content instanceof R&&e(n.content),Be(n));qe("afterSanitizeShadowDOM",t,null)};return f.sanitize=function(e,t){var n=void 0,r=void 0,o=void 0,i=void 0,a=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!ze(e)){if("function"!=typeof e.toString)throw new TypeError("toString is not a function");if("string"!=typeof(e=e.toString()))throw new TypeError("dirty is not a string, aborting")}if(!f.isSupported){if("object"===x(c.toStaticHTML)||"function"==typeof c.toStaticHTML){if("string"==typeof e)return c.toStaticHTML(e);if(ze(e))return c.toStaticHTML(e.outerHTML)}return e}if(ge||Re(t),f.removed=[],xe);else if(e instanceof C)1===(r=(n=De("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===r.nodeName||"HTML"===r.nodeName?n=r:n.appendChild(r);else{if(!_e&&!he&&!ye&&-1===e.indexOf("<"))return U?U.createHTML(e):e;if(!(n=De(e)))return _e?null:W}n&&be&&Ne(n.firstChild);for(var l=He(xe?e:n);o=l.nextNode();)3===o.nodeType&&o===i||Ie(o)||(o.content instanceof R&&Ue(o.content),Be(o),i=o);if(i=null,xe)return e;if(_e){if(ve)for(a=$.call(n.ownerDocument);n.firstChild;)a.appendChild(n.firstChild);else a=n;return Te&&(a=X.call(d,a,!0)),a}var s=ye?n.outerHTML:n.innerHTML;return he&&(s=(s=s.replace(J," ")).replace(Q," ")),U?U.createHTML(s):s},f.setConfig=function(e){Re(e),ge=!0},f.clearConfig=function(){Me=null,ge=!1},f.isValidAttribute=function(e,t,n){Me||Re({});var r=e.toLowerCase(),o=t.toLowerCase();return Pe(r,o,n)},f.addHook=function(e,t){"function"==typeof t&&(Z[e]=Z[e]||[],Z[e].push(t))},f.removeHook=function(e){Z[e]&&Z[e].pop()},f.removeHooks=function(e){Z[e]&&(Z[e]=[])},f.removeAllHooks=function(){Z={}},f}()}()},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));n(492);var r=n(139),o=n.n(r);function i(e,t={}){return o()(e,{withCredentials:!1,...t,transformResponse:[e=>e],responseType:"document"}).then(({data:e})=>e)}function c(e,t={}){return o()(e,{withCredentials:!1,...t,transformResponse:[e=>e],responseType:"text"}).then(({data:e})=>e)}},6:function(e,t,n){"use strict";n.d(t,"i",(function(){return d})),n.d(t,"h",(function(){return p})),n.d(t,"e",(function(){return m})),n.d(t,"b",(function(){return h})),n.d(t,"g",(function(){return y})),n.d(t,"d",(function(){return _})),n.d(t,"f",(function(){return v})),n.d(t,"j",(function(){return T})),n.d(t,"k",(function(){return A})),n.d(t,"a",(function(){return O})),n.d(t,"c",(function(){return x})),n.d(t,"l",(function(){return w}));var r=n(492),o=n.n(r),i=n(0),c=n(171),a=n(140),l=n(9),s=n(354),u=n(602),f=n(23);function d(){return Promise.reject(new Error("NO_RESULT"))}function p(){return Promise.reject(new Error("NETWORK_ERROR"))}async function m(e,t,{options:n,options_sel:r},o,i){("none"===n.keepLF||"pdf"===n.keepLF&&!i.isPDF||"webpage"===n.keepLF&&i.isPDF)&&(t=t.replace(/\n+/g," "));let c=i.sl;c||(Object(f.g)(t)?c="ja":Object(f.h)(t)&&(c="ko")),c||(c=await e.detect(t));let a="";return i.tl?a=i.tl:"default"===n.tl?r.tl.includes(o.langCode)&&(a=o.langCode):a=n.tl,a||(a=r.tl.find(e=>"default"!==e)||"en"),c===a&&(i.tl?i.sl||(c="auto"):a="default"===n.tl2?a!==o.langCode?o.langCode:"en"!==a?"en":r.tl.find(e=>"default"!==e&&e!==a)||"en":n.tl2),{sl:c,tl:a,text:t}}async function h(e){return null==e||/zh-TW|zh-HK/i.test(e)?(await n.e(109).then(n.bind(null,1269))).chsToChz:null}function y(e,...t){if(!e)return"";let n="",r=null;for(let e=t.length-1;e>=0;e--)"string"==typeof t[e]?n=t[e]:"function"==typeof t[e]&&(r=t[e]);const o=n?e.querySelector(n):e;if(!o)return"";const i=o.textContent||"";return r?r(i):i}const g={FORBID_TAGS:["style"],FORBID_ATTR:["style"]};function b(e,{mode:t="innerHTML",selector:n,transform:r,host:i,config:c=g}={}){const a=n?e.querySelector(n):e;if(!a)return"";if(i){const e=e=>{e.setAttribute("href",x(i,e,"href")),e.setAttribute("src",x(i,e,"src"))};"A"!==a.tagName&&"IMG"!==a.tagName||e(a),a.querySelectorAll("a").forEach(e),a.querySelectorAll("img").forEach(e)}const l=o.a.sanitize(a,{...c,RETURN_DOM_FRAGMENT:!0}),s=l.firstChild?l.firstChild[t]:"";return r?r(s):s}function _(e,t,n={}){return b(t,"string"==typeof n?{selector:n,host:e,mode:"innerHTML"}:{...n,host:e,mode:"innerHTML"})}function v(e,t,n={}){return b(t,"string"==typeof n?{selector:n,host:e,mode:"outerHTML"}:{...n,host:e,mode:"outerHTML"})}function T(e,t){const n=e.querySelector(t);n&&n.remove()}function A(e,t){e.querySelectorAll(t).forEach(e=>e.remove())}function O(e){e.setAttribute("target","_blank"),e.setAttribute("rel","nofollow noopener noreferrer")}function x(e,t,n){e.endsWith("/")&&(e=e.slice(0,-1));const r=e.startsWith("https")?"https:":"http:",o=t.getAttribute(n);return o?/^[a-zA-Z0-9]+:/.test(o)?o:o.startsWith("//")?r+o:/^.?\/+/.test(o)?e+"/"+o.replace(/^.?\/+/,""):e+"/"+o:""}const w=()=>{const[e,t]=Object(c.a)(S);Object(a.a)(t);const n=Object(i.useRef)(null);return Object(i.useEffect)(()=>{if(n.current){const t=n.current;return t.addEventListener("wheel",e,{passive:!1}),()=>{t.removeEventListener("wheel",e)}}},[n.current]),n};function S(e){return e.pipe(Object(l.a)(e=>(e.stopPropagation(),e.preventDefault(),[e.currentTarget,e.deltaY])),Object(s.a)(80),Object(u.a)(([e,t])=>{e.scrollBy({left:t>0?250:-250,behavior:"smooth"})}))}},602:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(3),o=n(7);function i(){}var c=n(34);function a(e,t,n){return function(r){return r.lift(new l(e,t,n))}}var l=function(){function e(e,t,n){this.nextOrObserver=e,this.error=t,this.complete=n}return e.prototype.call=function(e,t){return t.subscribe(new s(e,this.nextOrObserver,this.error,this.complete))},e}(),s=function(e){function t(t,n,r,o){var a=e.call(this,t)||this;return a._tapNext=i,a._tapError=i,a._tapComplete=i,a._tapError=r||i,a._tapComplete=o||i,Object(c.a)(n)?(a._context=a,a._tapNext=n):n&&(a._context=n,a._tapNext=n.next||i,a._tapError=n.error||i,a._tapComplete=n.complete||i),a}return r.__extends(t,e),t.prototype._next=function(e){try{this._tapNext.call(this._context,e)}catch(e){return void this.destination.error(e)}this.destination.next(e)},t.prototype._error=function(e){try{this._tapError.call(this._context,e)}catch(e){return void this.destination.error(e)}this.destination.error(e)},t.prototype._complete=function(){try{this._tapComplete.call(this._context)}catch(e){return void this.destination.error(e)}return this.destination.complete()},t}(o.a)},789:function(e,t,n){"use strict";n.r(t),n.d(t,"getSrcPage",(function(){return i})),n.d(t,"search",(function(){return a}));var r=n(50),o=n(6);const i=e=>"https://cn.bing.com/dict/search?q="+e,c="https://cn.bing.com",a=(e,t,n,i)=>{const a=n.dicts.all.bing;return Object(r.a)("https://cn.bing.com/dict/clientsearch?mkt=zh-CN&setLang=zh&form=BDVEHC&ClientVer=BDDTV3.5.1.4320&q="+encodeURIComponent(e.replace(/\s+/g," "))).catch(o.h).then(async e=>{const n=await Object(o.b)(t.langCode);return e.querySelector(".client_def_hd_hd")?function(e,t,n){const r={result:{type:"lex",title:Object(o.g)(e,".client_def_hd_hd",n)}};if(t.phsym){const t=Array.from(e.querySelectorAll(".client_def_hd_pn_list"));t.length>0&&(r.result.phsym=t.map(e=>{let t="";const n=e.querySelector(".client_aud_o");return n&&(t=((n.getAttribute("onclick")||"").match(/https.*\.mp3/)||[""])[0]),{lang:Object(o.g)(e,".client_def_hd_pn"),pron:t}}),r.audio=r.result.phsym.reduce((e,{lang:t,pron:n})=>(/us|美/i.test(t)?e.us=n:/uk|英/i.test(t)&&(e.uk=n),e),{}))}if(t.cdef){const t=e.querySelector(".client_def_container");if(t){const e=Array.from(t.querySelectorAll(".client_def_bar"));e.length>0&&(r.result.cdef=e.map(e=>({pos:Object(o.g)(e,".client_def_title_bar",n),def:Object(o.g)(e,".client_def_list",n)})))}}if(t.tense){const t=Array.from(e.querySelectorAll(".client_word_change_word"));t.length>0&&(r.result.infs=t.map(e=>(e.textContent||"").trim()))}if(t.sentence>0){const i=e.querySelectorAll(".client_sentence_list"),a=[];for(let e=0;e<i.length&&a.length<t.sentence;e++){const t=i[e];let r="";const l=t.querySelector(".client_aud_o");l&&(r=((l.getAttribute("onclick")||"").match(/https.*\.mp3/)||[""])[0]),t.querySelectorAll(".client_sen_en_word").forEach(e=>{e.outerHTML=Object(o.g)(e)}),t.querySelectorAll(".client_sen_cn_word").forEach(e=>{e.outerHTML=Object(o.g)(e,n)}),t.querySelectorAll(".client_sentence_search").forEach(e=>{e.outerHTML=`<span class="dictBing-SentenceItem_HL">${Object(o.g)(e)}</span>`}),a.push({en:Object(o.d)(c,t,".client_sen_en"),chs:Object(o.d)(c,t,{selector:".client_sen_cn",transform:n}),source:Object(o.g)(t,".client_sentence_list_link"),mp3:r})}r.result.sentences=a}if(Object.keys(r.result).length>2)return r;return Object(o.i)()}(e,a.options,n):e.querySelector(".client_trans_head")?function(e,t){const n=Object(o.g)(e,".client_sen_cn",t);if(n)return{result:{type:"machine",mt:n}};return Object(o.i)()}(e,n):a.options.related&&e.querySelector(".client_do_you_mean_title_bar")?function(e,t,n){const r={result:{type:"related",title:Object(o.g)(e,".client_do_you_mean_title_bar",n),defs:[]}};if(e.querySelectorAll(".client_do_you_mean_area").forEach(e=>{const t=e.querySelectorAll(".client_do_you_mean_list");t.length>0&&r.result.defs.push({title:Object(o.g)(e,".client_do_you_mean_title",n),meanings:Array.from(t).map(e=>{const t=Object(o.g)(e,".client_do_you_mean_list_word",n);return{href:"https://cn.bing.com/dict/search?q="+t,word:t,def:Object(o.g)(e,".client_do_you_mean_list_def",n)}})})}),r.result.defs.length>0)return r;return Object(o.i)()}(e,0,n):Object(o.i)()})}}}]);