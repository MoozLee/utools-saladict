(window.saladictEntry=window.saladictEntry||[]).push([[36,148],{117:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return c})),r.d(t,"d",(function(){return l})),r.d(t,"e",(function(){return s}));var n=r(0),o=r.n(n),i=r(37);const a=e=>{if(!e.src)return null;const t=e.width||e.height||"1.2em",r=e.height||t;return o.a.createElement("a",{className:"saladict-Speaker",href:e.src,target:"_blank",rel:"noopener noreferrer",style:{width:t,height:r}})};t.c=o.a.memo(a);const c=e=>{const{onPlayStart:t,...r}=e,a=Object(n.useCallback)(e=>{if(e.target&&"A"===e.target.tagName&&e.target.href&&e.target.classList&&e.target.classList.contains("saladict-Speaker")){e.preventDefault(),e.stopPropagation();const r=e.target;r.classList.add("isActive"),Object(i.b)([Object(i.d)(1e3),t(r.href)]).then(()=>{r.classList.remove("isActive")})}},[t]);return o.a.createElement("div",{onClick:a,...r})},l=e=>{if(!e)return"";const t=document.createElement("a");return t.target="_blank",t.href=e,t.className="saladict-Speaker",t},s=e=>e?`<a href="${e}" target="_blank" rel="noopener noreferrer" class="saladict-Speaker"></a>`:""},140:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(32),o=r(0);function i(e,t,r,i){const a=Object(n.f)(n.b);a.current.next=t,a.current.error=r,a.current.complete=i;const c=Object(o.useRef)();return c.current=Object(o.useMemo)(()=>(c.current&&c.current.unsubscribe(),e.subscribe({next:e=>a.current.next&&a.current.next(e),error:e=>{if(!a.current.error)throw e;a.current.error(e)},complete:()=>a.current.complete&&a.current.complete()})),[e]),Object(o.useEffect)(()=>()=>c.current.unsubscribe(),n.a),c.current}},152:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(9);function o(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=e.length;if(0===r)throw new Error("list of properties cannot be empty.");return function(t){return Object(n.a)(i(e,r))(t)}}function i(e,t){return function(r){for(var n=r,o=0;o<t;o++){var i=n[e[o]];if(void 0===i)return;n=i}return n}}},171:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(0),o=r(32);function i(e,t){const r=Object(o.f)(o.c),i=Object(o.f)(()=>e(r.current));return[Object(n.useRef)((...e)=>{r.current.next(t?t(e):e[0])}).current,i.current]}},32:function(e,t,r){"use strict";r.d(t,"d",(function(){return a})),r.d(t,"e",(function(){return c})),r.d(t,"c",(function(){return l})),r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return u})),r.d(t,"f",(function(){return f}));var n=r(0),o=r(71),i=r(152);function a(e){return e}function c(e){return Object(i.a)(0)(e)}function l(){return new o.a}function s(){return{}}const u=[];function f(e){const t=Object(n.useRef)(null);return null===t.current&&(t.current=e()),t}"undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?n.useLayoutEffect:n.useEffect},492:function(e,t,r){e.exports=function(){"use strict";var e=Object.freeze||function(e){return e},t=e(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),r=e(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]),n=e(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),o=e(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),i=e(["#text"]),a=Object.freeze||function(e){return e},c=a(["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","coords","crossorigin","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","integrity","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns"]),l=a(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),s=a(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),u=a(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),f=Object.hasOwnProperty,d=Object.setPrototypeOf,p=("undefined"!=typeof Reflect&&Reflect).apply;function m(e,t){d&&d(e,null);for(var r=t.length;r--;){var n=t[r];if("string"==typeof n){var o=n.toLowerCase();o!==n&&(Object.isFrozen(t)||(t[r]=o),n=o)}e[n]=!0}return e}function h(e){var t={},r=void 0;for(r in e)p(f,e,[r])&&(t[r]=e[r]);return t}p||(p=function(e,t,r){return e.apply(t,r)});var y=Object.seal||function(e){return e},g=y(/\{\{[\s\S]*|[\s\S]*\}\}/gm),b=y(/<%[\s\S]*|[\s\S]*%>/gm),v=y(/^data-[\-\w.\u00B7-\uFFFF]/),T=y(/^aria-[\-\w]+$/),A=y(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),O=y(/^(?:\w+script|data):/i),x=y(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function _(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var E=("undefined"!=typeof Reflect&&Reflect).apply,S=Array.prototype.slice,w=Object.freeze,k=function(){return"undefined"==typeof window?null:window};E||(E=function(e,t,r){return e.apply(t,r)});var j=function(e,t){if("object"!==(void 0===e?"undefined":L(e))||"function"!=typeof e.createPolicy)return null;var r=null;t.currentScript&&t.currentScript.hasAttribute("data-tt-policy-suffix")&&(r=t.currentScript.getAttribute("data-tt-policy-suffix"));var n="dompurify"+(r?"#"+r:"");try{return e.createPolicy(n,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+n+" could not be created."),null}};return function e(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k(),f=function(t){return e(t)};if(f.version="1.0.11",f.removed=[],!a||!a.document||9!==a.document.nodeType)return f.isSupported=!1,f;var d=a.document,p=!1,y=!1,M=a.document,N=a.DocumentFragment,R=a.HTMLTemplateElement,C=a.Node,D=a.NodeFilter,H=a.NamedNodeMap,F=void 0===H?a.NamedNodeMap||a.MozNamedAttrMap:H,z=a.Text,q=a.Comment,I=a.DOMParser,P=a.TrustedTypes;if("function"==typeof R){var W=M.createElement("template");W.content&&W.content.ownerDocument&&(M=W.content.ownerDocument)}var B=j(P,d),U=B?B.createHTML(""):"",G=M,$=G.implementation,K=G.createNodeIterator,V=G.getElementsByTagName,Y=G.createDocumentFragment,X=d.importNode,Z={};f.isSupported=$&&void 0!==$.createHTMLDocument&&9!==M.documentMode;var J=g,Q=b,ee=v,te=T,re=O,ne=x,oe=A,ie=null,ae=m({},[].concat(_(t),_(r),_(n),_(o),_(i))),ce=null,le=m({},[].concat(_(c),_(l),_(s),_(u))),se=null,ue=null,fe=!0,de=!0,pe=!1,me=!1,he=!1,ye=!1,ge=!1,be=!1,ve=!1,Te=!1,Ae=!1,Oe=!0,xe=!0,Le=!1,_e={},Ee=m({},["audio","head","math","script","style","template","svg","video"]),Se=m({},["audio","video","img","source","image"]),we=null,ke=m({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),je=null,Me=M.createElement("form"),Ne=function(e){je&&je===e||(e&&"object"===(void 0===e?"undefined":L(e))||(e={}),ie="ALLOWED_TAGS"in e?m({},e.ALLOWED_TAGS):ae,ce="ALLOWED_ATTR"in e?m({},e.ALLOWED_ATTR):le,we="ADD_URI_SAFE_ATTR"in e?m({},e.ADD_URI_SAFE_ATTR):ke,se="FORBID_TAGS"in e?m({},e.FORBID_TAGS):{},ue="FORBID_ATTR"in e?m({},e.FORBID_ATTR):{},_e="USE_PROFILES"in e&&e.USE_PROFILES,fe=!1!==e.ALLOW_ARIA_ATTR,de=!1!==e.ALLOW_DATA_ATTR,pe=e.ALLOW_UNKNOWN_PROTOCOLS||!1,me=e.SAFE_FOR_JQUERY||!1,he=e.SAFE_FOR_TEMPLATES||!1,ye=e.WHOLE_DOCUMENT||!1,ve=e.RETURN_DOM||!1,Te=e.RETURN_DOM_FRAGMENT||!1,Ae=e.RETURN_DOM_IMPORT||!1,be=e.FORCE_BODY||!1,Oe=!1!==e.SANITIZE_DOM,xe=!1!==e.KEEP_CONTENT,Le=e.IN_PLACE||!1,oe=e.ALLOWED_URI_REGEXP||oe,he&&(de=!1),Te&&(ve=!0),_e&&(ie=m({},[].concat(_(i))),ce=[],!0===_e.html&&(m(ie,t),m(ce,c)),!0===_e.svg&&(m(ie,r),m(ce,l),m(ce,u)),!0===_e.svgFilters&&(m(ie,n),m(ce,l),m(ce,u)),!0===_e.mathMl&&(m(ie,o),m(ce,s),m(ce,u))),e.ADD_TAGS&&(ie===ae&&(ie=h(ie)),m(ie,e.ADD_TAGS)),e.ADD_ATTR&&(ce===le&&(ce=h(ce)),m(ce,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&m(we,e.ADD_URI_SAFE_ATTR),xe&&(ie["#text"]=!0),ye&&m(ie,["html","head","body"]),ie.table&&m(ie,["tbody"]),w&&w(e),je=e)},Re=function(e){f.removed.push({element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=U}},Ce=function(e,t){try{f.removed.push({attribute:t.getAttributeNode(e),from:t})}catch(e){f.removed.push({attribute:null,from:t})}t.removeAttribute(e)},De=function(e){var t=void 0,r=void 0;if(be)e="<remove></remove>"+e;else{var n=e.match(/^[\s]+/);(r=n&&n[0])&&(e=e.slice(r.length))}if(p)try{t=(new I).parseFromString(e,"text/html")}catch(e){}if(y&&m(se,["title"]),!t||!t.documentElement){var o=(t=$.createHTMLDocument("")).body;o.parentNode.removeChild(o.parentNode.firstElementChild),o.outerHTML=B?B.createHTML(e):e}return r&&t.body.insertBefore(M.createTextNode(r),t.body.childNodes[0]||null),V.call(t,ye?"html":"body")[0]};f.isSupported&&(function(){try{De('<svg><p><style><img src="</style><img src=x onerror=1//">').querySelector("svg img")&&(p=!0)}catch(e){}}(),function(){try{De("<x/><title>&lt;/title&gt;&lt;img&gt;").querySelector("title").innerHTML.match(/<\/title/)&&(y=!0)}catch(e){}}());var He=function(e){return K.call(e.ownerDocument||e,e,D.SHOW_ELEMENT|D.SHOW_COMMENT|D.SHOW_TEXT,(function(){return D.FILTER_ACCEPT}),!1)},Fe=function(e){return!(e instanceof z||e instanceof q||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof F&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute)},ze=function(e){return"object"===(void 0===C?"undefined":L(C))?e instanceof C:e&&"object"===(void 0===e?"undefined":L(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},qe=function(e,t,r){Z[e]&&Z[e].forEach((function(e){e.call(f,t,r,je)}))},Ie=function(e){var t=void 0;if(qe("beforeSanitizeElements",e,null),Fe(e))return Re(e),!0;var r=e.nodeName.toLowerCase();if(qe("uponSanitizeElement",e,{tagName:r,allowedTags:ie}),!ie[r]||se[r]){if(xe&&!Ee[r]&&"function"==typeof e.insertAdjacentHTML)try{var n=e.innerHTML;e.insertAdjacentHTML("AfterEnd",B?B.createHTML(n):n)}catch(e){}return Re(e),!0}return"noscript"===r&&e.innerHTML.match(/<\/noscript/i)||"noembed"===r&&e.innerHTML.match(/<\/noembed/i)?(Re(e),!0):(!me||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(f.removed.push({element:e.cloneNode()}),e.innerHTML?e.innerHTML=e.innerHTML.replace(/</g,"&lt;"):e.innerHTML=e.textContent.replace(/</g,"&lt;")),he&&3===e.nodeType&&(t=(t=(t=e.textContent).replace(J," ")).replace(Q," "),e.textContent!==t&&(f.removed.push({element:e.cloneNode()}),e.textContent=t)),qe("afterSanitizeElements",e,null),!1)},Pe=function(e,t,r){if(Oe&&("id"===t||"name"===t)&&(r in M||r in Me))return!1;if(de&&ee.test(t));else if(fe&&te.test(t));else{if(!ce[t]||ue[t])return!1;if(we[t]);else if(oe.test(r.replace(ne,"")));else if("src"!==t&&"xlink:href"!==t||"script"===e||0!==r.indexOf("data:")||!Se[e])if(pe&&!re.test(r.replace(ne,"")));else if(r)return!1}return!0},We=function(e){var t=void 0,r=void 0,n=void 0,o=void 0,i=void 0;qe("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ce};for(i=a.length;i--;){var l=t=a[i],s=l.name,u=l.namespaceURI;if(r=t.value.trim(),n=s.toLowerCase(),c.attrName=n,c.attrValue=r,c.keepAttr=!0,qe("uponSanitizeAttribute",e,c),r=c.attrValue,"name"===n&&"IMG"===e.nodeName&&a.id)o=a.id,a=E(S,a,[]),Ce("id",e),Ce(s,e),a.indexOf(o)>i&&e.setAttribute("id",o.value);else{if("INPUT"===e.nodeName&&"type"===n&&"file"===r&&c.keepAttr&&(ce[n]||!ue[n]))continue;"id"===s&&e.setAttribute(s,""),Ce(s,e)}if(c.keepAttr){he&&(r=(r=r.replace(J," ")).replace(Q," "));var d=e.nodeName.toLowerCase();if(Pe(d,n,r))try{u?e.setAttributeNS(u,s,r):e.setAttribute(s,r),f.removed.pop()}catch(e){}}}qe("afterSanitizeAttributes",e,null)}},Be=function e(t){var r=void 0,n=He(t);for(qe("beforeSanitizeShadowDOM",t,null);r=n.nextNode();)qe("uponSanitizeShadowNode",r,null),Ie(r)||(r.content instanceof N&&e(r.content),We(r));qe("afterSanitizeShadowDOM",t,null)};return f.sanitize=function(e,t){var r=void 0,n=void 0,o=void 0,i=void 0,c=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!ze(e)){if("function"!=typeof e.toString)throw new TypeError("toString is not a function");if("string"!=typeof(e=e.toString()))throw new TypeError("dirty is not a string, aborting")}if(!f.isSupported){if("object"===L(a.toStaticHTML)||"function"==typeof a.toStaticHTML){if("string"==typeof e)return a.toStaticHTML(e);if(ze(e))return a.toStaticHTML(e.outerHTML)}return e}if(ge||Ne(t),f.removed=[],Le);else if(e instanceof C)1===(n=(r=De("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===n.nodeName||"HTML"===n.nodeName?r=n:r.appendChild(n);else{if(!ve&&!he&&!ye&&-1===e.indexOf("<"))return B?B.createHTML(e):e;if(!(r=De(e)))return ve?null:U}r&&be&&Re(r.firstChild);for(var l=He(Le?e:r);o=l.nextNode();)3===o.nodeType&&o===i||Ie(o)||(o.content instanceof N&&Be(o.content),We(o),i=o);if(i=null,Le)return e;if(ve){if(Te)for(c=Y.call(r.ownerDocument);r.firstChild;)c.appendChild(r.firstChild);else c=r;return Ae&&(c=X.call(d,c,!0)),c}var s=ye?r.outerHTML:r.innerHTML;return he&&(s=(s=s.replace(J," ")).replace(Q," ")),B?B.createHTML(s):s},f.setConfig=function(e){Ne(e),ge=!0},f.clearConfig=function(){je=null,ge=!1},f.isValidAttribute=function(e,t,r){je||Ne({});var n=e.toLowerCase(),o=t.toLowerCase();return Pe(n,o,r)},f.addHook=function(e,t){"function"==typeof t&&(Z[e]=Z[e]||[],Z[e].push(t))},f.removeHook=function(e){Z[e]&&Z[e].pop()},f.removeHooks=function(e){Z[e]&&(Z[e]=[])},f.removeAllHooks=function(){Z={}},f}()}()},50:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return a}));r(492);var n=r(139),o=r.n(n);function i(e,t={}){return o()(e,{withCredentials:!1,...t,transformResponse:[e=>e],responseType:"document"}).then(({data:e})=>e)}function a(e,t={}){return o()(e,{withCredentials:!1,...t,transformResponse:[e=>e],responseType:"text"}).then(({data:e})=>e)}},6:function(e,t,r){"use strict";r.d(t,"i",(function(){return d})),r.d(t,"h",(function(){return p})),r.d(t,"e",(function(){return m})),r.d(t,"b",(function(){return h})),r.d(t,"g",(function(){return y})),r.d(t,"d",(function(){return v})),r.d(t,"f",(function(){return T})),r.d(t,"j",(function(){return A})),r.d(t,"k",(function(){return O})),r.d(t,"a",(function(){return x})),r.d(t,"c",(function(){return L})),r.d(t,"l",(function(){return _}));var n=r(492),o=r.n(n),i=r(0),a=r(171),c=r(140),l=r(9),s=r(354),u=r(602),f=r(23);function d(){return Promise.reject(new Error("NO_RESULT"))}function p(){return Promise.reject(new Error("NETWORK_ERROR"))}async function m(e,t,{options:r,options_sel:n},o,i){("none"===r.keepLF||"pdf"===r.keepLF&&!i.isPDF||"webpage"===r.keepLF&&i.isPDF)&&(t=t.replace(/\n+/g," "));let a=i.sl;a||(Object(f.g)(t)?a="ja":Object(f.h)(t)&&(a="ko")),a||(a=await e.detect(t));let c="";return i.tl?c=i.tl:"default"===r.tl?n.tl.includes(o.langCode)&&(c=o.langCode):c=r.tl,c||(c=n.tl.find(e=>"default"!==e)||"en"),a===c&&(i.tl?i.sl||(a="auto"):c="default"===r.tl2?c!==o.langCode?o.langCode:"en"!==c?"en":n.tl.find(e=>"default"!==e&&e!==c)||"en":r.tl2),{sl:a,tl:c,text:t}}async function h(e){return null==e||/zh-TW|zh-HK/i.test(e)?(await r.e(109).then(r.bind(null,1269))).chsToChz:null}function y(e,...t){if(!e)return"";let r="",n=null;for(let e=t.length-1;e>=0;e--)"string"==typeof t[e]?r=t[e]:"function"==typeof t[e]&&(n=t[e]);const o=r?e.querySelector(r):e;if(!o)return"";const i=o.textContent||"";return n?n(i):i}const g={FORBID_TAGS:["style"],FORBID_ATTR:["style"]};function b(e,{mode:t="innerHTML",selector:r,transform:n,host:i,config:a=g}={}){const c=r?e.querySelector(r):e;if(!c)return"";if(i){const e=e=>{e.setAttribute("href",L(i,e,"href")),e.setAttribute("src",L(i,e,"src"))};"A"!==c.tagName&&"IMG"!==c.tagName||e(c),c.querySelectorAll("a").forEach(e),c.querySelectorAll("img").forEach(e)}const l=o.a.sanitize(c,{...a,RETURN_DOM_FRAGMENT:!0}),s=l.firstChild?l.firstChild[t]:"";return n?n(s):s}function v(e,t,r={}){return b(t,"string"==typeof r?{selector:r,host:e,mode:"innerHTML"}:{...r,host:e,mode:"innerHTML"})}function T(e,t,r={}){return b(t,"string"==typeof r?{selector:r,host:e,mode:"outerHTML"}:{...r,host:e,mode:"outerHTML"})}function A(e,t){const r=e.querySelector(t);r&&r.remove()}function O(e,t){e.querySelectorAll(t).forEach(e=>e.remove())}function x(e){e.setAttribute("target","_blank"),e.setAttribute("rel","nofollow noopener noreferrer")}function L(e,t,r){e.endsWith("/")&&(e=e.slice(0,-1));const n=e.startsWith("https")?"https:":"http:",o=t.getAttribute(r);return o?/^[a-zA-Z0-9]+:/.test(o)?o:o.startsWith("//")?n+o:/^.?\/+/.test(o)?e+"/"+o.replace(/^.?\/+/,""):e+"/"+o:""}const _=()=>{const[e,t]=Object(a.a)(E);Object(c.a)(t);const r=Object(i.useRef)(null);return Object(i.useEffect)(()=>{if(r.current){const t=r.current;return t.addEventListener("wheel",e,{passive:!1}),()=>{t.removeEventListener("wheel",e)}}},[r.current]),r};function E(e){return e.pipe(Object(l.a)(e=>(e.stopPropagation(),e.preventDefault(),[e.currentTarget,e.deltaY])),Object(s.a)(80),Object(u.a)(([e,t])=>{e.scrollBy({left:t>0?250:-250,behavior:"smooth"})}))}},602:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(3),o=r(7);function i(){}var a=r(34);function c(e,t,r){return function(n){return n.lift(new l(e,t,r))}}var l=function(){function e(e,t,r){this.nextOrObserver=e,this.error=t,this.complete=r}return e.prototype.call=function(e,t){return t.subscribe(new s(e,this.nextOrObserver,this.error,this.complete))},e}(),s=function(e){function t(t,r,n,o){var c=e.call(this,t)||this;return c._tapNext=i,c._tapError=i,c._tapComplete=i,c._tapError=n||i,c._tapComplete=o||i,Object(a.a)(r)?(c._context=c,c._tapNext=r):r&&(c._context=r,c._tapNext=r.next||i,c._tapError=r.error||i,c._tapComplete=r.complete||i),c}return n.__extends(t,e),t.prototype._next=function(e){try{this._tapNext.call(this._context,e)}catch(e){return void this.destination.error(e)}this.destination.next(e)},t.prototype._error=function(e){try{this._tapError.call(this._context,e)}catch(e){return void this.destination.error(e)}this.destination.error(e)},t.prototype._complete=function(){try{this._tapComplete.call(this._context)}catch(e){return void this.destination.error(e)}return this.destination.complete()},t}(o.a)},818:function(e,t,r){"use strict";r.r(t),r.d(t,"getSrcPage",(function(){return a})),r.d(t,"search",(function(){return l}));var n=r(50),o=r(6),i=r(117);const a=e=>"https://ejje.weblio.jp/content/"+encodeURIComponent(e.replace(/\s+/g,"+")),c="https://ejje.weblio.jp",l=(e,t,r,i)=>Object(n.a)(a(e,t,r)).catch(o.h).then(s);function s(e){const t=[];return e.querySelectorAll(".mainBlock").forEach(e=>{if("summary"===e.id){let r="";const n=e.querySelector(".summaryTbl");if(n){r+=Object(o.f)(c,n,".summaryL h1");const e=n.querySelector(".summaryC audio source");e&&(r+=Object(i.e)(e.getAttribute("src"))),n.outerHTML=`<div class="summaryHead">${r}</div>`}return Object(o.k)(e,"#leadBtnWrp"),Object(o.k)(e,".addLmFdWr"),Object(o.k)(e,".flex-rectangle-ads-frame"),Object(o.k)(e,".outsideLlTable"),void t.push({content:Object(o.f)(c,e)})}if(!e.className.includes("hlt_")||e.classList.contains("hlt_CPRHT")||e.classList.contains("hlt_RLTED"))return;let r="",n=e.querySelector(".wrp");if(n){if(r=Object(o.g)(n,".dictNm"),r.includes("Wiktionary"))return;n.remove()}else n=e.querySelector(".qotH"),n&&(r=Object(o.g)(n,".qotHT"),n.remove());Object(o.k)(e,".hideDictWrp"),Object(o.k)(e,".kijiFoot"),Object(o.k)(e,".addToSlBtnCntner"),e.querySelectorAll(".fa-volume-up").forEach(e=>{const t=e.querySelector("source");t&&e.replaceWith(Object(i.d)(t.getAttribute("src")))}),e.querySelectorAll("br").forEach(e=>{e.classList.add("br"),e.outerHTML=`<div class="${e.className}"></div>`}),e.querySelectorAll("a").forEach(e=>{e.classList.contains("crosslink")||Object(o.a)(e)}),t.push({title:r,content:Object(o.f)(c,e)})}),t.length>0?{result:t}:Object(o.i)()}}}]);