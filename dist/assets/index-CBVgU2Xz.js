(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function G_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Nd={exports:{}},za={},xd={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function n0(){if(qg)return Ce;qg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),S=Symbol.iterator;function A(b){return b===null||typeof b!="object"?null:(b=S&&b[S]||b["@@iterator"],typeof b=="function"?b:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,H={};function B(b,G,fe){this.props=b,this.context=G,this.refs=H,this.updater=fe||F}B.prototype.isReactComponent={},B.prototype.setState=function(b,G){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,G,"setState")},B.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function ae(){}ae.prototype=B.prototype;function ue(b,G,fe){this.props=b,this.context=G,this.refs=H,this.updater=fe||F}var ie=ue.prototype=new ae;ie.constructor=ue,q(ie,B.prototype),ie.isPureReactComponent=!0;var se=Array.isArray,xe=Object.prototype.hasOwnProperty,$={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function I(b,G,fe){var Ie,Re={},De=null,Le=null;if(G!=null)for(Ie in G.ref!==void 0&&(Le=G.ref),G.key!==void 0&&(De=""+G.key),G)xe.call(G,Ie)&&!k.hasOwnProperty(Ie)&&(Re[Ie]=G[Ie]);var je=arguments.length-2;if(je===1)Re.children=fe;else if(1<je){for(var $e=Array(je),vt=0;vt<je;vt++)$e[vt]=arguments[vt+2];Re.children=$e}if(b&&b.defaultProps)for(Ie in je=b.defaultProps,je)Re[Ie]===void 0&&(Re[Ie]=je[Ie]);return{$$typeof:n,type:b,key:De,ref:Le,props:Re,_owner:$.current}}function C(b,G){return{$$typeof:n,type:b.type,key:G,ref:b.ref,props:b.props,_owner:b._owner}}function x(b){return typeof b=="object"&&b!==null&&b.$$typeof===n}function O(b){var G={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(fe){return G[fe]})}var V=/\/+/g;function P(b,G){return typeof b=="object"&&b!==null&&b.key!=null?O(""+b.key):G.toString(36)}function rt(b,G,fe,Ie,Re){var De=typeof b;(De==="undefined"||De==="boolean")&&(b=null);var Le=!1;if(b===null)Le=!0;else switch(De){case"string":case"number":Le=!0;break;case"object":switch(b.$$typeof){case n:case e:Le=!0}}if(Le)return Le=b,Re=Re(Le),b=Ie===""?"."+P(Le,0):Ie,se(Re)?(fe="",b!=null&&(fe=b.replace(V,"$&/")+"/"),rt(Re,G,fe,"",function(vt){return vt})):Re!=null&&(x(Re)&&(Re=C(Re,fe+(!Re.key||Le&&Le.key===Re.key?"":(""+Re.key).replace(V,"$&/")+"/")+b)),G.push(Re)),1;if(Le=0,Ie=Ie===""?".":Ie+":",se(b))for(var je=0;je<b.length;je++){De=b[je];var $e=Ie+P(De,je);Le+=rt(De,G,fe,$e,Re)}else if($e=A(b),typeof $e=="function")for(b=$e.call(b),je=0;!(De=b.next()).done;)De=De.value,$e=Ie+P(De,je++),Le+=rt(De,G,fe,$e,Re);else if(De==="object")throw G=String(b),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Le}function Ot(b,G,fe){if(b==null)return b;var Ie=[],Re=0;return rt(b,Ie,"","",function(De){return G.call(fe,De,Re++)}),Ie}function Vt(b){if(b._status===-1){var G=b._result;G=G(),G.then(function(fe){(b._status===0||b._status===-1)&&(b._status=1,b._result=fe)},function(fe){(b._status===0||b._status===-1)&&(b._status=2,b._result=fe)}),b._status===-1&&(b._status=0,b._result=G)}if(b._status===1)return b._result.default;throw b._result}var Be={current:null},ee={transition:null},me={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:ee,ReactCurrentOwner:$};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:Ot,forEach:function(b,G,fe){Ot(b,function(){G.apply(this,arguments)},fe)},count:function(b){var G=0;return Ot(b,function(){G++}),G},toArray:function(b){return Ot(b,function(G){return G})||[]},only:function(b){if(!x(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},Ce.Component=B,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=ue,Ce.StrictMode=i,Ce.Suspense=g,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Ce.act=oe,Ce.cloneElement=function(b,G,fe){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var Ie=q({},b.props),Re=b.key,De=b.ref,Le=b._owner;if(G!=null){if(G.ref!==void 0&&(De=G.ref,Le=$.current),G.key!==void 0&&(Re=""+G.key),b.type&&b.type.defaultProps)var je=b.type.defaultProps;for($e in G)xe.call(G,$e)&&!k.hasOwnProperty($e)&&(Ie[$e]=G[$e]===void 0&&je!==void 0?je[$e]:G[$e])}var $e=arguments.length-2;if($e===1)Ie.children=fe;else if(1<$e){je=Array($e);for(var vt=0;vt<$e;vt++)je[vt]=arguments[vt+2];Ie.children=je}return{$$typeof:n,type:b.type,key:Re,ref:De,props:Ie,_owner:Le}},Ce.createContext=function(b){return b={$$typeof:h,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:l,_context:b},b.Consumer=b},Ce.createElement=I,Ce.createFactory=function(b){var G=I.bind(null,b);return G.type=b,G},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(b){return{$$typeof:f,render:b}},Ce.isValidElement=x,Ce.lazy=function(b){return{$$typeof:w,_payload:{_status:-1,_result:b},_init:Vt}},Ce.memo=function(b,G){return{$$typeof:y,type:b,compare:G===void 0?null:G}},Ce.startTransition=function(b){var G=ee.transition;ee.transition={};try{b()}finally{ee.transition=G}},Ce.unstable_act=oe,Ce.useCallback=function(b,G){return Be.current.useCallback(b,G)},Ce.useContext=function(b){return Be.current.useContext(b)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(b){return Be.current.useDeferredValue(b)},Ce.useEffect=function(b,G){return Be.current.useEffect(b,G)},Ce.useId=function(){return Be.current.useId()},Ce.useImperativeHandle=function(b,G,fe){return Be.current.useImperativeHandle(b,G,fe)},Ce.useInsertionEffect=function(b,G){return Be.current.useInsertionEffect(b,G)},Ce.useLayoutEffect=function(b,G){return Be.current.useLayoutEffect(b,G)},Ce.useMemo=function(b,G){return Be.current.useMemo(b,G)},Ce.useReducer=function(b,G,fe){return Be.current.useReducer(b,G,fe)},Ce.useRef=function(b){return Be.current.useRef(b)},Ce.useState=function(b){return Be.current.useState(b)},Ce.useSyncExternalStore=function(b,G,fe){return Be.current.useSyncExternalStore(b,G,fe)},Ce.useTransition=function(){return Be.current.useTransition()},Ce.version="18.3.1",Ce}var Hg;function Of(){return Hg||(Hg=1,xd.exports=n0()),xd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function r0(){if(Wg)return za;Wg=1;var n=Of(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,y){var w,S={},A=null,F=null;y!==void 0&&(A=""+y),g.key!==void 0&&(A=""+g.key),g.ref!==void 0&&(F=g.ref);for(w in g)i.call(g,w)&&!l.hasOwnProperty(w)&&(S[w]=g[w]);if(f&&f.defaultProps)for(w in g=f.defaultProps,g)S[w]===void 0&&(S[w]=g[w]);return{$$typeof:e,type:f,key:A,ref:F,props:S,_owner:o.current}}return za.Fragment=t,za.jsx=h,za.jsxs=h,za}var Kg;function i0(){return Kg||(Kg=1,Nd.exports=r0()),Nd.exports}var E=i0(),Se=Of();const s0=G_(Se);var Bu={},Dd={exports:{}},tn={},Od={exports:{}},Vd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function o0(){return Gg||(Gg=1,(function(n){function e(ee,me){var oe=ee.length;ee.push(me);e:for(;0<oe;){var b=oe-1>>>1,G=ee[b];if(0<o(G,me))ee[b]=me,ee[oe]=G,oe=b;else break e}}function t(ee){return ee.length===0?null:ee[0]}function i(ee){if(ee.length===0)return null;var me=ee[0],oe=ee.pop();if(oe!==me){ee[0]=oe;e:for(var b=0,G=ee.length,fe=G>>>1;b<fe;){var Ie=2*(b+1)-1,Re=ee[Ie],De=Ie+1,Le=ee[De];if(0>o(Re,oe))De<G&&0>o(Le,Re)?(ee[b]=Le,ee[De]=oe,b=De):(ee[b]=Re,ee[Ie]=oe,b=Ie);else if(De<G&&0>o(Le,oe))ee[b]=Le,ee[De]=oe,b=De;else break e}}return me}function o(ee,me){var oe=ee.sortIndex-me.sortIndex;return oe!==0?oe:ee.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();n.unstable_now=function(){return h.now()-f}}var g=[],y=[],w=1,S=null,A=3,F=!1,q=!1,H=!1,B=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ie(ee){for(var me=t(y);me!==null;){if(me.callback===null)i(y);else if(me.startTime<=ee)i(y),me.sortIndex=me.expirationTime,e(g,me);else break;me=t(y)}}function se(ee){if(H=!1,ie(ee),!q)if(t(g)!==null)q=!0,Vt(xe);else{var me=t(y);me!==null&&Be(se,me.startTime-ee)}}function xe(ee,me){q=!1,H&&(H=!1,ae(I),I=-1),F=!0;var oe=A;try{for(ie(me),S=t(g);S!==null&&(!(S.expirationTime>me)||ee&&!O());){var b=S.callback;if(typeof b=="function"){S.callback=null,A=S.priorityLevel;var G=b(S.expirationTime<=me);me=n.unstable_now(),typeof G=="function"?S.callback=G:S===t(g)&&i(g),ie(me)}else i(g);S=t(g)}if(S!==null)var fe=!0;else{var Ie=t(y);Ie!==null&&Be(se,Ie.startTime-me),fe=!1}return fe}finally{S=null,A=oe,F=!1}}var $=!1,k=null,I=-1,C=5,x=-1;function O(){return!(n.unstable_now()-x<C)}function V(){if(k!==null){var ee=n.unstable_now();x=ee;var me=!0;try{me=k(!0,ee)}finally{me?P():($=!1,k=null)}}else $=!1}var P;if(typeof ue=="function")P=function(){ue(V)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,Ot=rt.port2;rt.port1.onmessage=V,P=function(){Ot.postMessage(null)}}else P=function(){B(V,0)};function Vt(ee){k=ee,$||($=!0,P())}function Be(ee,me){I=B(function(){ee(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ee){ee.callback=null},n.unstable_continueExecution=function(){q||F||(q=!0,Vt(xe))},n.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<ee?Math.floor(1e3/ee):5},n.unstable_getCurrentPriorityLevel=function(){return A},n.unstable_getFirstCallbackNode=function(){return t(g)},n.unstable_next=function(ee){switch(A){case 1:case 2:case 3:var me=3;break;default:me=A}var oe=A;A=me;try{return ee()}finally{A=oe}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ee,me){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var oe=A;A=ee;try{return me()}finally{A=oe}},n.unstable_scheduleCallback=function(ee,me,oe){var b=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?b+oe:b):oe=b,ee){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=oe+G,ee={id:w++,callback:me,priorityLevel:ee,startTime:oe,expirationTime:G,sortIndex:-1},oe>b?(ee.sortIndex=oe,e(y,ee),t(g)===null&&ee===t(y)&&(H?(ae(I),I=-1):H=!0,Be(se,oe-b))):(ee.sortIndex=G,e(g,ee),q||F||(q=!0,Vt(xe))),ee},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(ee){var me=A;return function(){var oe=A;A=me;try{return ee.apply(this,arguments)}finally{A=oe}}}})(Vd)),Vd}var Qg;function a0(){return Qg||(Qg=1,Od.exports=o0()),Od.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function l0(){if(Yg)return tn;Yg=1;var n=Of(),e=a0();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){h(r,s),h(r+"Capture",s)}function h(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},S={};function A(r){return g.call(S,r)?!0:g.call(w,r)?!1:y.test(r)?S[r]=!0:(w[r]=!0,!1)}function F(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function q(r,s,a,c){if(s===null||typeof s>"u"||F(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function H(r,s,a,c,d,m,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=m,this.removeEmptyString=v}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){B[r]=new H(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];B[s]=new H(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){B[r]=new H(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){B[r]=new H(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){B[r]=new H(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){B[r]=new H(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){B[r]=new H(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){B[r]=new H(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){B[r]=new H(r,5,!1,r.toLowerCase(),null,!1,!1)});var ae=/[\-:]([a-z])/g;function ue(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(ae,ue);B[s]=new H(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(ae,ue);B[s]=new H(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(ae,ue);B[s]=new H(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){B[r]=new H(r,1,!1,r.toLowerCase(),null,!1,!1)}),B.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){B[r]=new H(r,1,!1,r.toLowerCase(),null,!0,!0)});function ie(r,s,a,c){var d=B.hasOwnProperty(s)?B[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(q(s,a,d,c)&&(a=null),c||d===null?A(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?r.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var se=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xe=Symbol.for("react.element"),$=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),O=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),rt=Symbol.for("react.suspense_list"),Ot=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),ee=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=ee&&r[ee]||r["@@iterator"],typeof r=="function"?r:null)}var oe=Object.assign,b;function G(r){if(b===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);b=s&&s[1]||""}return`
`+b+r}var fe=!1;function Ie(r,s){if(!r||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(U){var c=U}Reflect.construct(r,[],s)}else{try{s.call()}catch(U){c=U}r.call(s.prototype)}else{try{throw Error()}catch(U){c=U}r()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),m=c.stack.split(`
`),v=d.length-1,R=m.length-1;1<=v&&0<=R&&d[v]!==m[R];)R--;for(;1<=v&&0<=R;v--,R--)if(d[v]!==m[R]){if(v!==1||R!==1)do if(v--,R--,0>R||d[v]!==m[R]){var N=`
`+d[v].replace(" at new "," at ");return r.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",r.displayName)),N}while(1<=v&&0<=R);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?G(r):""}function Re(r){switch(r.tag){case 5:return G(r.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return r=Ie(r.type,!1),r;case 11:return r=Ie(r.type.render,!1),r;case 1:return r=Ie(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case k:return"Fragment";case $:return"Portal";case C:return"Profiler";case I:return"StrictMode";case P:return"Suspense";case rt:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case x:return(r._context.displayName||"Context")+".Provider";case V:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Ot:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case Vt:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function Le(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function je(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function $e(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function vt(r){var s=$e(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,m.call(this,v)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function yr(r){r._valueTracker||(r._valueTracker=vt(r))}function Vs(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=$e(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function Kr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Bi(r,s){var a=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function bs(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=je(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Go(r,s){s=s.checked,s!=null&&ie(r,"checked",s,!1)}function Qo(r,s){Go(r,s);var a=je(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Ms(r,s.type,a):s.hasOwnProperty("defaultValue")&&Ms(r,s.type,je(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Rl(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Ms(r,s,a){(s!=="number"||Kr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var _r=Array.isArray;function vr(r,s,a,c){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+je(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function Yo(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Ls(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(_r(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:je(a)}}function js(r,s){var a=je(s.value),c=je(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function Jo(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function ft(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?ft(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var wr,Xo=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,d)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=wr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Gr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var zi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$i=["Webkit","ms","Moz","O"];Object.keys(zi).forEach(function(r){$i.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),zi[s]=zi[r]})});function Zo(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||zi.hasOwnProperty(r)&&zi[r]?(""+s).trim():s+"px"}function ea(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Zo(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,d):r[a]=d}}var ta=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function na(r,s){if(s){if(ta[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ra(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qi=null;function Fs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Us=null,mn=null,Yn=null;function Bs(r){if(r=Ca(r)){if(typeof Us!="function")throw Error(t(280));var s=r.stateNode;s&&(s=nu(s),Us(r.stateNode,r.type,s))}}function Jn(r){mn?Yn?Yn.push(r):Yn=[r]:mn=r}function ia(){if(mn){var r=mn,s=Yn;if(Yn=mn=null,Bs(r),s)for(r=0;r<s.length;r++)Bs(s[r])}}function Hi(r,s){return r(s)}function sa(){}var Er=!1;function oa(r,s,a){if(Er)return r(s,a);Er=!0;try{return Hi(r,s,a)}finally{Er=!1,(mn!==null||Yn!==null)&&(sa(),ia())}}function it(r,s){var a=r.stateNode;if(a===null)return null;var c=nu(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var zs=!1;if(f)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){zs=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{zs=!1}function Wi(r,s,a,c,d,m,v,R,N){var U=Array.prototype.slice.call(arguments,3);try{s.apply(a,U)}catch(Y){this.onError(Y)}}var Ki=!1,$s=null,Nn=!1,aa=null,ih={onError:function(r){Ki=!0,$s=r}};function qs(r,s,a,c,d,m,v,R,N){Ki=!1,$s=null,Wi.apply(ih,arguments)}function Cl(r,s,a,c,d,m,v,R,N){if(qs.apply(this,arguments),Ki){if(Ki){var U=$s;Ki=!1,$s=null}else throw Error(t(198));Nn||(Nn=!0,aa=U)}}function xn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Gi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Dn(r){if(xn(r)!==r)throw Error(t(188))}function kl(r){var s=r.alternate;if(!s){if(s=xn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Dn(d),r;if(m===c)return Dn(d),s;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var v=!1,R=d.child;R;){if(R===a){v=!0,a=d,c=m;break}if(R===c){v=!0,c=d,a=m;break}R=R.sibling}if(!v){for(R=m.child;R;){if(R===a){v=!0,a=m,c=d;break}if(R===c){v=!0,c=m,a=d;break}R=R.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function la(r){return r=kl(r),r!==null?Hs(r):null}function Hs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Hs(r);if(s!==null)return s;r=r.sibling}return null}var Ws=e.unstable_scheduleCallback,ua=e.unstable_cancelCallback,Pl=e.unstable_shouldYield,sh=e.unstable_requestPaint,qe=e.unstable_now,Nl=e.unstable_getCurrentPriorityLevel,Qi=e.unstable_ImmediatePriority,Qr=e.unstable_UserBlockingPriority,gn=e.unstable_NormalPriority,ca=e.unstable_LowPriority,xl=e.unstable_IdlePriority,Yi=null,on=null;function Dl(r){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(Yi,r,void 0,(r.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:Vl,ha=Math.log,Ol=Math.LN2;function Vl(r){return r>>>=0,r===0?32:31-(ha(r)/Ol|0)|0}var Ks=64,Gs=4194304;function Yr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Ji(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,d=r.suspendedLanes,m=r.pingedLanes,v=a&268435455;if(v!==0){var R=v&~d;R!==0?c=Yr(R):(m&=v,m!==0&&(c=Yr(m)))}else v=a&~d,v!==0?c=Yr(v):m!==0&&(c=Yr(m));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,m=s&-s,d>=m||d===16&&(m&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-$t(s),d=1<<a,c|=r[a],s&=~d;return c}function oh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tr(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,m=r.pendingLanes;0<m;){var v=31-$t(m),R=1<<v,N=d[v];N===-1?((R&a)===0||(R&c)!==0)&&(d[v]=oh(R,s)):N<=s&&(r.expiredLanes|=R),m&=~R}}function an(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Xi(){var r=Ks;return Ks<<=1,(Ks&4194240)===0&&(Ks=64),r}function Jr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Xr(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-$t(s),r[s]=a}function ze(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-$t(a),m=1<<d;s[d]=0,c[d]=-1,r[d]=-1,a&=~m}}function Zr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-$t(a),d=1<<c;d&s|r[c]&s&&(r[c]|=s),a&=~d}}var Ne=0;function ei(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var bl,Qs,Ml,Ll,jl,da=!1,Xn=[],At=null,On=null,Vn=null,ti=new Map,yn=new Map,Zn=[],ah="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fl(r,s){switch(r){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":Vn=null;break;case"pointerover":case"pointerout":ti.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":yn.delete(s.pointerId)}}function Gt(r,s,a,c,d,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},s!==null&&(s=Ca(s),s!==null&&Qs(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function lh(r,s,a,c,d){switch(s){case"focusin":return At=Gt(At,r,s,a,c,d),!0;case"dragenter":return On=Gt(On,r,s,a,c,d),!0;case"mouseover":return Vn=Gt(Vn,r,s,a,c,d),!0;case"pointerover":var m=d.pointerId;return ti.set(m,Gt(ti.get(m)||null,r,s,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,yn.set(m,Gt(yn.get(m)||null,r,s,a,c,d)),!0}return!1}function Ul(r){var s=rs(r.target);if(s!==null){var a=xn(s);if(a!==null){if(s=a.tag,s===13){if(s=Gi(a),s!==null){r.blockedOn=s,jl(r.priority,function(){Ml(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Ir(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Ys(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);qi=c,a.target.dispatchEvent(c),qi=null}else return s=Ca(a),s!==null&&Qs(s),r.blockedOn=a,!1;s.shift()}return!0}function Zi(r,s,a){Ir(r)&&a.delete(s)}function Bl(){da=!1,At!==null&&Ir(At)&&(At=null),On!==null&&Ir(On)&&(On=null),Vn!==null&&Ir(Vn)&&(Vn=null),ti.forEach(Zi),yn.forEach(Zi)}function bn(r,s){r.blockedOn===s&&(r.blockedOn=null,da||(da=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Bl)))}function Mn(r){function s(d){return bn(d,r)}if(0<Xn.length){bn(Xn[0],r);for(var a=1;a<Xn.length;a++){var c=Xn[a];c.blockedOn===r&&(c.blockedOn=null)}}for(At!==null&&bn(At,r),On!==null&&bn(On,r),Vn!==null&&bn(Vn,r),ti.forEach(s),yn.forEach(s),a=0;a<Zn.length;a++)c=Zn[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Zn.length&&(a=Zn[0],a.blockedOn===null);)Ul(a),a.blockedOn===null&&Zn.shift()}var Sr=se.ReactCurrentBatchConfig,ni=!0;function Ye(r,s,a,c){var d=Ne,m=Sr.transition;Sr.transition=null;try{Ne=1,fa(r,s,a,c)}finally{Ne=d,Sr.transition=m}}function uh(r,s,a,c){var d=Ne,m=Sr.transition;Sr.transition=null;try{Ne=4,fa(r,s,a,c)}finally{Ne=d,Sr.transition=m}}function fa(r,s,a,c){if(ni){var d=Ys(r,s,a,c);if(d===null)wh(r,s,c,es,a),Fl(r,c);else if(lh(d,r,s,a,c))c.stopPropagation();else if(Fl(r,c),s&4&&-1<ah.indexOf(r)){for(;d!==null;){var m=Ca(d);if(m!==null&&bl(m),m=Ys(r,s,a,c),m===null&&wh(r,s,c,es,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else wh(r,s,c,null,a)}}var es=null;function Ys(r,s,a,c){if(es=null,r=Fs(c),r=rs(r),r!==null)if(s=xn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Gi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return es=r,null}function pa(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nl()){case Qi:return 1;case Qr:return 4;case gn:case ca:return 16;case xl:return 536870912;default:return 16}default:return 16}}var ln=null,Js=null,Qt=null;function ma(){if(Qt)return Qt;var r,s=Js,a=s.length,c,d="value"in ln?ln.value:ln.textContent,m=d.length;for(r=0;r<a&&s[r]===d[r];r++);var v=a-r;for(c=1;c<=v&&s[a-c]===d[m-c];c++);return Qt=d.slice(r,1<c?1-c:void 0)}function Xs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function er(){return!0}function ga(){return!1}function Rt(r){function s(a,c,d,m,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var R in r)r.hasOwnProperty(R)&&(a=r[R],this[R]=a?a(m):m[R]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?er:ga,this.isPropagationStopped=ga,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=er)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=er)},persist:function(){},isPersistent:er}),s}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zs=Rt(Ln),tr=oe({},Ln,{view:0,detail:0}),ch=Rt(tr),eo,Ar,ri,ts=oe({},tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nr,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ri&&(ri&&r.type==="mousemove"?(eo=r.screenX-ri.screenX,Ar=r.screenY-ri.screenY):Ar=eo=0,ri=r),eo)},movementY:function(r){return"movementY"in r?r.movementY:Ar}}),to=Rt(ts),ya=oe({},ts,{dataTransfer:0}),zl=Rt(ya),no=oe({},tr,{relatedTarget:0}),ro=Rt(no),$l=oe({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),Rr=Rt($l),ql=oe({},Ln,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Hl=Rt(ql),Wl=oe({},Ln,{data:0}),_a=Rt(Wl),io={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gl(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Kl[r])?!!s[r]:!1}function nr(){return Gl}var u=oe({},tr,{key:function(r){if(r.key){var s=io[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Xs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?qt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nr,charCode:function(r){return r.type==="keypress"?Xs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Xs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),p=Rt(u),_=oe({},ts,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T=Rt(_),M=oe({},tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nr}),z=Rt(M),Z=oe({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ue=Rt(Z),mt=oe({},ts,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=Rt(mt),wt=[9,13,27,32],lt=f&&"CompositionEvent"in window,_n=null;f&&"documentMode"in document&&(_n=document.documentMode);var un=f&&"TextEvent"in window&&!_n,ns=f&&(!lt||_n&&8<_n&&11>=_n),so=" ",jp=!1;function Fp(r,s){switch(r){case"keyup":return wt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Up(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var oo=!1;function ZE(r,s){switch(r){case"compositionend":return Up(s);case"keypress":return s.which!==32?null:(jp=!0,so);case"textInput":return r=s.data,r===so&&jp?null:r;default:return null}}function eT(r,s){if(oo)return r==="compositionend"||!lt&&Fp(r,s)?(r=ma(),Qt=Js=ln=null,oo=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ns&&s.locale!=="ko"?null:s.data;default:return null}}var tT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!tT[r.type]:s==="textarea"}function zp(r,s,a,c){Jn(c),s=Zl(s,"onChange"),0<s.length&&(a=new Zs("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var va=null,wa=null;function nT(r){om(r,0)}function Ql(r){var s=ho(r);if(Vs(s))return r}function rT(r,s){if(r==="change")return s}var $p=!1;if(f){var hh;if(f){var dh="oninput"in document;if(!dh){var qp=document.createElement("div");qp.setAttribute("oninput","return;"),dh=typeof qp.oninput=="function"}hh=dh}else hh=!1;$p=hh&&(!document.documentMode||9<document.documentMode)}function Hp(){va&&(va.detachEvent("onpropertychange",Wp),wa=va=null)}function Wp(r){if(r.propertyName==="value"&&Ql(wa)){var s=[];zp(s,wa,r,Fs(r)),oa(nT,s)}}function iT(r,s,a){r==="focusin"?(Hp(),va=s,wa=a,va.attachEvent("onpropertychange",Wp)):r==="focusout"&&Hp()}function sT(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Ql(wa)}function oT(r,s){if(r==="click")return Ql(s)}function aT(r,s){if(r==="input"||r==="change")return Ql(s)}function lT(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var jn=typeof Object.is=="function"?Object.is:lT;function Ea(r,s){if(jn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(s,d)||!jn(r[d],s[d]))return!1}return!0}function Kp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Gp(r,s){var a=Kp(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Kp(a)}}function Qp(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Qp(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Yp(){for(var r=window,s=Kr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Kr(r.document)}return s}function fh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function uT(r){var s=Yp(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Qp(a.ownerDocument.documentElement,a)){if(c!==null&&fh(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!r.extend&&m>c&&(d=c,c=m,m=d),d=Gp(a,m);var v=Gp(a,c);d&&v&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),m>c?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var cT=f&&"documentMode"in document&&11>=document.documentMode,ao=null,ph=null,Ta=null,mh=!1;function Jp(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mh||ao==null||ao!==Kr(c)||(c=ao,"selectionStart"in c&&fh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ta&&Ea(Ta,c)||(Ta=c,c=Zl(ph,"onSelect"),0<c.length&&(s=new Zs("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=ao)))}function Yl(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var lo={animationend:Yl("Animation","AnimationEnd"),animationiteration:Yl("Animation","AnimationIteration"),animationstart:Yl("Animation","AnimationStart"),transitionend:Yl("Transition","TransitionEnd")},gh={},Xp={};f&&(Xp=document.createElement("div").style,"AnimationEvent"in window||(delete lo.animationend.animation,delete lo.animationiteration.animation,delete lo.animationstart.animation),"TransitionEvent"in window||delete lo.transitionend.transition);function Jl(r){if(gh[r])return gh[r];if(!lo[r])return r;var s=lo[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Xp)return gh[r]=s[a];return r}var Zp=Jl("animationend"),em=Jl("animationiteration"),tm=Jl("animationstart"),nm=Jl("transitionend"),rm=new Map,im="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ii(r,s){rm.set(r,s),l(s,[r])}for(var yh=0;yh<im.length;yh++){var _h=im[yh],hT=_h.toLowerCase(),dT=_h[0].toUpperCase()+_h.slice(1);ii(hT,"on"+dT)}ii(Zp,"onAnimationEnd"),ii(em,"onAnimationIteration"),ii(tm,"onAnimationStart"),ii("dblclick","onDoubleClick"),ii("focusin","onFocus"),ii("focusout","onBlur"),ii(nm,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function sm(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,Cl(c,s,void 0,r),r.currentTarget=null}function om(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var m=void 0;if(s)for(var v=c.length-1;0<=v;v--){var R=c[v],N=R.instance,U=R.currentTarget;if(R=R.listener,N!==m&&d.isPropagationStopped())break e;sm(d,R,U),m=N}else for(v=0;v<c.length;v++){if(R=c[v],N=R.instance,U=R.currentTarget,R=R.listener,N!==m&&d.isPropagationStopped())break e;sm(d,R,U),m=N}}}if(Nn)throw r=aa,Nn=!1,aa=null,r}function Ke(r,s){var a=s[Rh];a===void 0&&(a=s[Rh]=new Set);var c=r+"__bubble";a.has(c)||(am(s,r,2,!1),a.add(c))}function vh(r,s,a){var c=0;s&&(c|=4),am(a,r,c,s)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Sa(r){if(!r[Xl]){r[Xl]=!0,i.forEach(function(a){a!=="selectionchange"&&(fT.has(a)||vh(a,!1,r),vh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Xl]||(s[Xl]=!0,vh("selectionchange",!1,s))}}function am(r,s,a,c){switch(pa(s)){case 1:var d=Ye;break;case 4:d=uh;break;default:d=fa}a=d.bind(null,s,a,r),d=void 0,!zs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function wh(r,s,a,c,d){var m=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var R=c.stateNode.containerInfo;if(R===d||R.nodeType===8&&R.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var N=v.tag;if((N===3||N===4)&&(N=v.stateNode.containerInfo,N===d||N.nodeType===8&&N.parentNode===d))return;v=v.return}for(;R!==null;){if(v=rs(R),v===null)return;if(N=v.tag,N===5||N===6){c=m=v;continue e}R=R.parentNode}}c=c.return}oa(function(){var U=m,Y=Fs(a),J=[];e:{var Q=rm.get(r);if(Q!==void 0){var ne=Zs,ce=r;switch(r){case"keypress":if(Xs(a)===0)break e;case"keydown":case"keyup":ne=p;break;case"focusin":ce="focus",ne=ro;break;case"focusout":ce="blur",ne=ro;break;case"beforeblur":case"afterblur":ne=ro;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=to;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=zl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=z;break;case Zp:case em:case tm:ne=Rr;break;case nm:ne=Ue;break;case"scroll":ne=ch;break;case"wheel":ne=Oe;break;case"copy":case"cut":case"paste":ne=Hl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=T}var he=(s&4)!==0,st=!he&&r==="scroll",L=he?Q!==null?Q+"Capture":null:Q;he=[];for(var D=U,j;D!==null;){j=D;var X=j.stateNode;if(j.tag===5&&X!==null&&(j=X,L!==null&&(X=it(D,L),X!=null&&he.push(Aa(D,X,j)))),st)break;D=D.return}0<he.length&&(Q=new ne(Q,ce,null,a,Y),J.push({event:Q,listeners:he}))}}if((s&7)===0){e:{if(Q=r==="mouseover"||r==="pointerover",ne=r==="mouseout"||r==="pointerout",Q&&a!==qi&&(ce=a.relatedTarget||a.fromElement)&&(rs(ce)||ce[Cr]))break e;if((ne||Q)&&(Q=Y.window===Y?Y:(Q=Y.ownerDocument)?Q.defaultView||Q.parentWindow:window,ne?(ce=a.relatedTarget||a.toElement,ne=U,ce=ce?rs(ce):null,ce!==null&&(st=xn(ce),ce!==st||ce.tag!==5&&ce.tag!==6)&&(ce=null)):(ne=null,ce=U),ne!==ce)){if(he=to,X="onMouseLeave",L="onMouseEnter",D="mouse",(r==="pointerout"||r==="pointerover")&&(he=T,X="onPointerLeave",L="onPointerEnter",D="pointer"),st=ne==null?Q:ho(ne),j=ce==null?Q:ho(ce),Q=new he(X,D+"leave",ne,a,Y),Q.target=st,Q.relatedTarget=j,X=null,rs(Y)===U&&(he=new he(L,D+"enter",ce,a,Y),he.target=j,he.relatedTarget=st,X=he),st=X,ne&&ce)t:{for(he=ne,L=ce,D=0,j=he;j;j=uo(j))D++;for(j=0,X=L;X;X=uo(X))j++;for(;0<D-j;)he=uo(he),D--;for(;0<j-D;)L=uo(L),j--;for(;D--;){if(he===L||L!==null&&he===L.alternate)break t;he=uo(he),L=uo(L)}he=null}else he=null;ne!==null&&lm(J,Q,ne,he,!1),ce!==null&&st!==null&&lm(J,st,ce,he,!0)}}e:{if(Q=U?ho(U):window,ne=Q.nodeName&&Q.nodeName.toLowerCase(),ne==="select"||ne==="input"&&Q.type==="file")var de=rT;else if(Bp(Q))if($p)de=aT;else{de=sT;var ge=iT}else(ne=Q.nodeName)&&ne.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(de=oT);if(de&&(de=de(r,U))){zp(J,de,a,Y);break e}ge&&ge(r,Q,U),r==="focusout"&&(ge=Q._wrapperState)&&ge.controlled&&Q.type==="number"&&Ms(Q,"number",Q.value)}switch(ge=U?ho(U):window,r){case"focusin":(Bp(ge)||ge.contentEditable==="true")&&(ao=ge,ph=U,Ta=null);break;case"focusout":Ta=ph=ao=null;break;case"mousedown":mh=!0;break;case"contextmenu":case"mouseup":case"dragend":mh=!1,Jp(J,a,Y);break;case"selectionchange":if(cT)break;case"keydown":case"keyup":Jp(J,a,Y)}var ye;if(lt)e:{switch(r){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else oo?Fp(r,a)&&(we="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(ns&&a.locale!=="ko"&&(oo||we!=="onCompositionStart"?we==="onCompositionEnd"&&oo&&(ye=ma()):(ln=Y,Js="value"in ln?ln.value:ln.textContent,oo=!0)),ge=Zl(U,we),0<ge.length&&(we=new _a(we,r,null,a,Y),J.push({event:we,listeners:ge}),ye?we.data=ye:(ye=Up(a),ye!==null&&(we.data=ye)))),(ye=un?ZE(r,a):eT(r,a))&&(U=Zl(U,"onBeforeInput"),0<U.length&&(Y=new _a("onBeforeInput","beforeinput",null,a,Y),J.push({event:Y,listeners:U}),Y.data=ye))}om(J,s)})}function Aa(r,s,a){return{instance:r,listener:s,currentTarget:a}}function Zl(r,s){for(var a=s+"Capture",c=[];r!==null;){var d=r,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=it(r,a),m!=null&&c.unshift(Aa(r,m,d)),m=it(r,s),m!=null&&c.push(Aa(r,m,d))),r=r.return}return c}function uo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function lm(r,s,a,c,d){for(var m=s._reactName,v=[];a!==null&&a!==c;){var R=a,N=R.alternate,U=R.stateNode;if(N!==null&&N===c)break;R.tag===5&&U!==null&&(R=U,d?(N=it(a,m),N!=null&&v.unshift(Aa(a,N,R))):d||(N=it(a,m),N!=null&&v.push(Aa(a,N,R)))),a=a.return}v.length!==0&&r.push({event:s,listeners:v})}var pT=/\r\n?/g,mT=/\u0000|\uFFFD/g;function um(r){return(typeof r=="string"?r:""+r).replace(pT,`
`).replace(mT,"")}function eu(r,s,a){if(s=um(s),um(r)!==s&&a)throw Error(t(425))}function tu(){}var Eh=null,Th=null;function Ih(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Sh=typeof setTimeout=="function"?setTimeout:void 0,gT=typeof clearTimeout=="function"?clearTimeout:void 0,cm=typeof Promise=="function"?Promise:void 0,yT=typeof queueMicrotask=="function"?queueMicrotask:typeof cm<"u"?function(r){return cm.resolve(null).then(r).catch(_T)}:Sh;function _T(r){setTimeout(function(){throw r})}function Ah(r,s){var a=s,c=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){r.removeChild(d),Mn(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Mn(s)}function si(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function hm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var co=Math.random().toString(36).slice(2),rr="__reactFiber$"+co,Ra="__reactProps$"+co,Cr="__reactContainer$"+co,Rh="__reactEvents$"+co,vT="__reactListeners$"+co,wT="__reactHandles$"+co;function rs(r){var s=r[rr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Cr]||a[rr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=hm(r);r!==null;){if(a=r[rr])return a;r=hm(r)}return s}r=a,a=r.parentNode}return null}function Ca(r){return r=r[rr]||r[Cr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function ho(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function nu(r){return r[Ra]||null}var Ch=[],fo=-1;function oi(r){return{current:r}}function Ge(r){0>fo||(r.current=Ch[fo],Ch[fo]=null,fo--)}function He(r,s){fo++,Ch[fo]=r.current,r.current=s}var ai={},bt=oi(ai),Yt=oi(!1),is=ai;function po(r,s){var a=r.type.contextTypes;if(!a)return ai;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=s[m];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function Jt(r){return r=r.childContextTypes,r!=null}function ru(){Ge(Yt),Ge(bt)}function dm(r,s,a){if(bt.current!==ai)throw Error(t(168));He(bt,s),He(Yt,a)}function fm(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Le(r)||"Unknown",d));return oe({},a,c)}function iu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ai,is=bt.current,He(bt,r),He(Yt,Yt.current),!0}function pm(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=fm(r,s,is),c.__reactInternalMemoizedMergedChildContext=r,Ge(Yt),Ge(bt),He(bt,r)):Ge(Yt),He(Yt,a)}var kr=null,su=!1,kh=!1;function mm(r){kr===null?kr=[r]:kr.push(r)}function ET(r){su=!0,mm(r)}function li(){if(!kh&&kr!==null){kh=!0;var r=0,s=Ne;try{var a=kr;for(Ne=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}kr=null,su=!1}catch(d){throw kr!==null&&(kr=kr.slice(r+1)),Ws(Qi,li),d}finally{Ne=s,kh=!1}}return null}var mo=[],go=0,ou=null,au=0,vn=[],wn=0,ss=null,Pr=1,Nr="";function os(r,s){mo[go++]=au,mo[go++]=ou,ou=r,au=s}function gm(r,s,a){vn[wn++]=Pr,vn[wn++]=Nr,vn[wn++]=ss,ss=r;var c=Pr;r=Nr;var d=32-$t(c)-1;c&=~(1<<d),a+=1;var m=32-$t(s)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Pr=1<<32-$t(s)+d|a<<d|c,Nr=m+r}else Pr=1<<m|a<<d|c,Nr=r}function Ph(r){r.return!==null&&(os(r,1),gm(r,1,0))}function Nh(r){for(;r===ou;)ou=mo[--go],mo[go]=null,au=mo[--go],mo[go]=null;for(;r===ss;)ss=vn[--wn],vn[wn]=null,Nr=vn[--wn],vn[wn]=null,Pr=vn[--wn],vn[wn]=null}var cn=null,hn=null,Je=!1,Fn=null;function ym(r,s){var a=Sn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function _m(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,cn=r,hn=si(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,cn=r,hn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=ss!==null?{id:Pr,overflow:Nr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Sn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,cn=r,hn=null,!0):!1;default:return!1}}function xh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Dh(r){if(Je){var s=hn;if(s){var a=s;if(!_m(r,s)){if(xh(r))throw Error(t(418));s=si(a.nextSibling);var c=cn;s&&_m(r,s)?ym(c,a):(r.flags=r.flags&-4097|2,Je=!1,cn=r)}}else{if(xh(r))throw Error(t(418));r.flags=r.flags&-4097|2,Je=!1,cn=r}}}function vm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;cn=r}function lu(r){if(r!==cn)return!1;if(!Je)return vm(r),Je=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Ih(r.type,r.memoizedProps)),s&&(s=hn)){if(xh(r))throw wm(),Error(t(418));for(;s;)ym(r,s),s=si(s.nextSibling)}if(vm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){hn=si(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}hn=null}}else hn=cn?si(r.stateNode.nextSibling):null;return!0}function wm(){for(var r=hn;r;)r=si(r.nextSibling)}function yo(){hn=cn=null,Je=!1}function Oh(r){Fn===null?Fn=[r]:Fn.push(r)}var TT=se.ReactCurrentBatchConfig;function ka(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var d=c,m=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===m?s.ref:(s=function(v){var R=d.refs;v===null?delete R[m]:R[m]=v},s._stringRef=m,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function uu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Em(r){var s=r._init;return s(r._payload)}function Tm(r){function s(L,D){if(r){var j=L.deletions;j===null?(L.deletions=[D],L.flags|=16):j.push(D)}}function a(L,D){if(!r)return null;for(;D!==null;)s(L,D),D=D.sibling;return null}function c(L,D){for(L=new Map;D!==null;)D.key!==null?L.set(D.key,D):L.set(D.index,D),D=D.sibling;return L}function d(L,D){return L=gi(L,D),L.index=0,L.sibling=null,L}function m(L,D,j){return L.index=j,r?(j=L.alternate,j!==null?(j=j.index,j<D?(L.flags|=2,D):j):(L.flags|=2,D)):(L.flags|=1048576,D)}function v(L){return r&&L.alternate===null&&(L.flags|=2),L}function R(L,D,j,X){return D===null||D.tag!==6?(D=Sd(j,L.mode,X),D.return=L,D):(D=d(D,j),D.return=L,D)}function N(L,D,j,X){var de=j.type;return de===k?Y(L,D,j.props.children,X,j.key):D!==null&&(D.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Vt&&Em(de)===D.type)?(X=d(D,j.props),X.ref=ka(L,D,j),X.return=L,X):(X=Ou(j.type,j.key,j.props,null,L.mode,X),X.ref=ka(L,D,j),X.return=L,X)}function U(L,D,j,X){return D===null||D.tag!==4||D.stateNode.containerInfo!==j.containerInfo||D.stateNode.implementation!==j.implementation?(D=Ad(j,L.mode,X),D.return=L,D):(D=d(D,j.children||[]),D.return=L,D)}function Y(L,D,j,X,de){return D===null||D.tag!==7?(D=ps(j,L.mode,X,de),D.return=L,D):(D=d(D,j),D.return=L,D)}function J(L,D,j){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Sd(""+D,L.mode,j),D.return=L,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case xe:return j=Ou(D.type,D.key,D.props,null,L.mode,j),j.ref=ka(L,null,D),j.return=L,j;case $:return D=Ad(D,L.mode,j),D.return=L,D;case Vt:var X=D._init;return J(L,X(D._payload),j)}if(_r(D)||me(D))return D=ps(D,L.mode,j,null),D.return=L,D;uu(L,D)}return null}function Q(L,D,j,X){var de=D!==null?D.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return de!==null?null:R(L,D,""+j,X);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case xe:return j.key===de?N(L,D,j,X):null;case $:return j.key===de?U(L,D,j,X):null;case Vt:return de=j._init,Q(L,D,de(j._payload),X)}if(_r(j)||me(j))return de!==null?null:Y(L,D,j,X,null);uu(L,j)}return null}function ne(L,D,j,X,de){if(typeof X=="string"&&X!==""||typeof X=="number")return L=L.get(j)||null,R(D,L,""+X,de);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case xe:return L=L.get(X.key===null?j:X.key)||null,N(D,L,X,de);case $:return L=L.get(X.key===null?j:X.key)||null,U(D,L,X,de);case Vt:var ge=X._init;return ne(L,D,j,ge(X._payload),de)}if(_r(X)||me(X))return L=L.get(j)||null,Y(D,L,X,de,null);uu(D,X)}return null}function ce(L,D,j,X){for(var de=null,ge=null,ye=D,we=D=0,It=null;ye!==null&&we<j.length;we++){ye.index>we?(It=ye,ye=null):It=ye.sibling;var Me=Q(L,ye,j[we],X);if(Me===null){ye===null&&(ye=It);break}r&&ye&&Me.alternate===null&&s(L,ye),D=m(Me,D,we),ge===null?de=Me:ge.sibling=Me,ge=Me,ye=It}if(we===j.length)return a(L,ye),Je&&os(L,we),de;if(ye===null){for(;we<j.length;we++)ye=J(L,j[we],X),ye!==null&&(D=m(ye,D,we),ge===null?de=ye:ge.sibling=ye,ge=ye);return Je&&os(L,we),de}for(ye=c(L,ye);we<j.length;we++)It=ne(ye,L,we,j[we],X),It!==null&&(r&&It.alternate!==null&&ye.delete(It.key===null?we:It.key),D=m(It,D,we),ge===null?de=It:ge.sibling=It,ge=It);return r&&ye.forEach(function(yi){return s(L,yi)}),Je&&os(L,we),de}function he(L,D,j,X){var de=me(j);if(typeof de!="function")throw Error(t(150));if(j=de.call(j),j==null)throw Error(t(151));for(var ge=de=null,ye=D,we=D=0,It=null,Me=j.next();ye!==null&&!Me.done;we++,Me=j.next()){ye.index>we?(It=ye,ye=null):It=ye.sibling;var yi=Q(L,ye,Me.value,X);if(yi===null){ye===null&&(ye=It);break}r&&ye&&yi.alternate===null&&s(L,ye),D=m(yi,D,we),ge===null?de=yi:ge.sibling=yi,ge=yi,ye=It}if(Me.done)return a(L,ye),Je&&os(L,we),de;if(ye===null){for(;!Me.done;we++,Me=j.next())Me=J(L,Me.value,X),Me!==null&&(D=m(Me,D,we),ge===null?de=Me:ge.sibling=Me,ge=Me);return Je&&os(L,we),de}for(ye=c(L,ye);!Me.done;we++,Me=j.next())Me=ne(ye,L,we,Me.value,X),Me!==null&&(r&&Me.alternate!==null&&ye.delete(Me.key===null?we:Me.key),D=m(Me,D,we),ge===null?de=Me:ge.sibling=Me,ge=Me);return r&&ye.forEach(function(t0){return s(L,t0)}),Je&&os(L,we),de}function st(L,D,j,X){if(typeof j=="object"&&j!==null&&j.type===k&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case xe:e:{for(var de=j.key,ge=D;ge!==null;){if(ge.key===de){if(de=j.type,de===k){if(ge.tag===7){a(L,ge.sibling),D=d(ge,j.props.children),D.return=L,L=D;break e}}else if(ge.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Vt&&Em(de)===ge.type){a(L,ge.sibling),D=d(ge,j.props),D.ref=ka(L,ge,j),D.return=L,L=D;break e}a(L,ge);break}else s(L,ge);ge=ge.sibling}j.type===k?(D=ps(j.props.children,L.mode,X,j.key),D.return=L,L=D):(X=Ou(j.type,j.key,j.props,null,L.mode,X),X.ref=ka(L,D,j),X.return=L,L=X)}return v(L);case $:e:{for(ge=j.key;D!==null;){if(D.key===ge)if(D.tag===4&&D.stateNode.containerInfo===j.containerInfo&&D.stateNode.implementation===j.implementation){a(L,D.sibling),D=d(D,j.children||[]),D.return=L,L=D;break e}else{a(L,D);break}else s(L,D);D=D.sibling}D=Ad(j,L.mode,X),D.return=L,L=D}return v(L);case Vt:return ge=j._init,st(L,D,ge(j._payload),X)}if(_r(j))return ce(L,D,j,X);if(me(j))return he(L,D,j,X);uu(L,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,D!==null&&D.tag===6?(a(L,D.sibling),D=d(D,j),D.return=L,L=D):(a(L,D),D=Sd(j,L.mode,X),D.return=L,L=D),v(L)):a(L,D)}return st}var _o=Tm(!0),Im=Tm(!1),cu=oi(null),hu=null,vo=null,Vh=null;function bh(){Vh=vo=hu=null}function Mh(r){var s=cu.current;Ge(cu),r._currentValue=s}function Lh(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function wo(r,s){hu=r,Vh=vo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Xt=!0),r.firstContext=null)}function En(r){var s=r._currentValue;if(Vh!==r)if(r={context:r,memoizedValue:s,next:null},vo===null){if(hu===null)throw Error(t(308));vo=r,hu.dependencies={lanes:0,firstContext:r}}else vo=vo.next=r;return s}var as=null;function jh(r){as===null?as=[r]:as.push(r)}function Sm(r,s,a,c){var d=s.interleaved;return d===null?(a.next=a,jh(s)):(a.next=d.next,d.next=a),s.interleaved=a,xr(r,c)}function xr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var ui=!1;function Fh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Am(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Dr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function ci(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(be&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,xr(r,a)}return d=c.interleaved,d===null?(s.next=s,jh(c)):(s.next=d.next,d.next=s),c.interleaved=s,xr(r,a)}function du(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Zr(r,a)}}function Rm(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=s:m=m.next=s}else d=m=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function fu(r,s,a,c){var d=r.updateQueue;ui=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,R=d.shared.pending;if(R!==null){d.shared.pending=null;var N=R,U=N.next;N.next=null,v===null?m=U:v.next=U,v=N;var Y=r.alternate;Y!==null&&(Y=Y.updateQueue,R=Y.lastBaseUpdate,R!==v&&(R===null?Y.firstBaseUpdate=U:R.next=U,Y.lastBaseUpdate=N))}if(m!==null){var J=d.baseState;v=0,Y=U=N=null,R=m;do{var Q=R.lane,ne=R.eventTime;if((c&Q)===Q){Y!==null&&(Y=Y.next={eventTime:ne,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var ce=r,he=R;switch(Q=s,ne=a,he.tag){case 1:if(ce=he.payload,typeof ce=="function"){J=ce.call(ne,J,Q);break e}J=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=he.payload,Q=typeof ce=="function"?ce.call(ne,J,Q):ce,Q==null)break e;J=oe({},J,Q);break e;case 2:ui=!0}}R.callback!==null&&R.lane!==0&&(r.flags|=64,Q=d.effects,Q===null?d.effects=[R]:Q.push(R))}else ne={eventTime:ne,lane:Q,tag:R.tag,payload:R.payload,callback:R.callback,next:null},Y===null?(U=Y=ne,N=J):Y=Y.next=ne,v|=Q;if(R=R.next,R===null){if(R=d.shared.pending,R===null)break;Q=R,R=Q.next,Q.next=null,d.lastBaseUpdate=Q,d.shared.pending=null}}while(!0);if(Y===null&&(N=J),d.baseState=N,d.firstBaseUpdate=U,d.lastBaseUpdate=Y,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else m===null&&(d.shared.lanes=0);cs|=v,r.lanes=v,r.memoizedState=J}}function Cm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Pa={},ir=oi(Pa),Na=oi(Pa),xa=oi(Pa);function ls(r){if(r===Pa)throw Error(t(174));return r}function Uh(r,s){switch(He(xa,s),He(Na,r),He(ir,Pa),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:pt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=pt(s,r)}Ge(ir),He(ir,s)}function Eo(){Ge(ir),Ge(Na),Ge(xa)}function km(r){ls(xa.current);var s=ls(ir.current),a=pt(s,r.type);s!==a&&(He(Na,r),He(ir,a))}function Bh(r){Na.current===r&&(Ge(ir),Ge(Na))}var Xe=oi(0);function pu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var zh=[];function $h(){for(var r=0;r<zh.length;r++)zh[r]._workInProgressVersionPrimary=null;zh.length=0}var mu=se.ReactCurrentDispatcher,qh=se.ReactCurrentBatchConfig,us=0,Ze=null,gt=null,Et=null,gu=!1,Da=!1,Oa=0,IT=0;function Mt(){throw Error(t(321))}function Hh(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!jn(r[a],s[a]))return!1;return!0}function Wh(r,s,a,c,d,m){if(us=m,Ze=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,mu.current=r===null||r.memoizedState===null?CT:kT,r=a(c,d),Da){m=0;do{if(Da=!1,Oa=0,25<=m)throw Error(t(301));m+=1,Et=gt=null,s.updateQueue=null,mu.current=PT,r=a(c,d)}while(Da)}if(mu.current=vu,s=gt!==null&&gt.next!==null,us=0,Et=gt=Ze=null,gu=!1,s)throw Error(t(300));return r}function Kh(){var r=Oa!==0;return Oa=0,r}function sr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Ze.memoizedState=Et=r:Et=Et.next=r,Et}function Tn(){if(gt===null){var r=Ze.alternate;r=r!==null?r.memoizedState:null}else r=gt.next;var s=Et===null?Ze.memoizedState:Et.next;if(s!==null)Et=s,gt=r;else{if(r===null)throw Error(t(310));gt=r,r={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Et===null?Ze.memoizedState=Et=r:Et=Et.next=r}return Et}function Va(r,s){return typeof s=="function"?s(r):s}function Gh(r){var s=Tn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=gt,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var R=v=null,N=null,U=m;do{var Y=U.lane;if((us&Y)===Y)N!==null&&(N=N.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:r(c,U.action);else{var J={lane:Y,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};N===null?(R=N=J,v=c):N=N.next=J,Ze.lanes|=Y,cs|=Y}U=U.next}while(U!==null&&U!==m);N===null?v=c:N.next=R,jn(c,s.memoizedState)||(Xt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=N,a.lastRenderedState=c}if(r=a.interleaved,r!==null){d=r;do m=d.lane,Ze.lanes|=m,cs|=m,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Qh(r){var s=Tn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,m=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=r(m,v.action),v=v.next;while(v!==d);jn(m,s.memoizedState)||(Xt=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,c]}function Pm(){}function Nm(r,s){var a=Ze,c=Tn(),d=s(),m=!jn(c.memoizedState,d);if(m&&(c.memoizedState=d,Xt=!0),c=c.queue,Yh(Om.bind(null,a,c,r),[r]),c.getSnapshot!==s||m||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,ba(9,Dm.bind(null,a,c,d,s),void 0,null),Tt===null)throw Error(t(349));(us&30)!==0||xm(a,s,d)}return d}function xm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function Dm(r,s,a,c){s.value=a,s.getSnapshot=c,Vm(s)&&bm(r)}function Om(r,s,a){return a(function(){Vm(s)&&bm(r)})}function Vm(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!jn(r,a)}catch{return!0}}function bm(r){var s=xr(r,1);s!==null&&$n(s,r,1,-1)}function Mm(r){var s=sr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:r},s.queue=r,r=r.dispatch=RT.bind(null,Ze,r),[s.memoizedState,r]}function ba(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function Lm(){return Tn().memoizedState}function yu(r,s,a,c){var d=sr();Ze.flags|=r,d.memoizedState=ba(1|s,a,void 0,c===void 0?null:c)}function _u(r,s,a,c){var d=Tn();c=c===void 0?null:c;var m=void 0;if(gt!==null){var v=gt.memoizedState;if(m=v.destroy,c!==null&&Hh(c,v.deps)){d.memoizedState=ba(s,a,m,c);return}}Ze.flags|=r,d.memoizedState=ba(1|s,a,m,c)}function jm(r,s){return yu(8390656,8,r,s)}function Yh(r,s){return _u(2048,8,r,s)}function Fm(r,s){return _u(4,2,r,s)}function Um(r,s){return _u(4,4,r,s)}function Bm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function zm(r,s,a){return a=a!=null?a.concat([r]):null,_u(4,4,Bm.bind(null,s,r),a)}function Jh(){}function $m(r,s){var a=Tn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Hh(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function qm(r,s){var a=Tn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Hh(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function Hm(r,s,a){return(us&21)===0?(r.baseState&&(r.baseState=!1,Xt=!0),r.memoizedState=a):(jn(a,s)||(a=Xi(),Ze.lanes|=a,cs|=a,r.baseState=!0),s)}function ST(r,s){var a=Ne;Ne=a!==0&&4>a?a:4,r(!0);var c=qh.transition;qh.transition={};try{r(!1),s()}finally{Ne=a,qh.transition=c}}function Wm(){return Tn().memoizedState}function AT(r,s,a){var c=pi(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Km(r))Gm(s,a);else if(a=Sm(r,s,a,c),a!==null){var d=Wt();$n(a,r,c,d),Qm(a,s,c)}}function RT(r,s,a){var c=pi(r),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Km(r))Gm(s,d);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,R=m(v,a);if(d.hasEagerState=!0,d.eagerState=R,jn(R,v)){var N=s.interleaved;N===null?(d.next=d,jh(s)):(d.next=N.next,N.next=d),s.interleaved=d;return}}catch{}finally{}a=Sm(r,s,d,c),a!==null&&(d=Wt(),$n(a,r,c,d),Qm(a,s,c))}}function Km(r){var s=r.alternate;return r===Ze||s!==null&&s===Ze}function Gm(r,s){Da=gu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Qm(r,s,a){if((a&4194240)!==0){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Zr(r,a)}}var vu={readContext:En,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},CT={readContext:En,useCallback:function(r,s){return sr().memoizedState=[r,s===void 0?null:s],r},useContext:En,useEffect:jm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,yu(4194308,4,Bm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return yu(4194308,4,r,s)},useInsertionEffect:function(r,s){return yu(4,2,r,s)},useMemo:function(r,s){var a=sr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=sr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=AT.bind(null,Ze,r),[c.memoizedState,r]},useRef:function(r){var s=sr();return r={current:r},s.memoizedState=r},useState:Mm,useDebugValue:Jh,useDeferredValue:function(r){return sr().memoizedState=r},useTransition:function(){var r=Mm(!1),s=r[0];return r=ST.bind(null,r[1]),sr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=Ze,d=sr();if(Je){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Tt===null)throw Error(t(349));(us&30)!==0||xm(c,s,a)}d.memoizedState=a;var m={value:a,getSnapshot:s};return d.queue=m,jm(Om.bind(null,c,m,r),[r]),c.flags|=2048,ba(9,Dm.bind(null,c,m,a,s),void 0,null),a},useId:function(){var r=sr(),s=Tt.identifierPrefix;if(Je){var a=Nr,c=Pr;a=(c&~(1<<32-$t(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Oa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=IT++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},kT={readContext:En,useCallback:$m,useContext:En,useEffect:Yh,useImperativeHandle:zm,useInsertionEffect:Fm,useLayoutEffect:Um,useMemo:qm,useReducer:Gh,useRef:Lm,useState:function(){return Gh(Va)},useDebugValue:Jh,useDeferredValue:function(r){var s=Tn();return Hm(s,gt.memoizedState,r)},useTransition:function(){var r=Gh(Va)[0],s=Tn().memoizedState;return[r,s]},useMutableSource:Pm,useSyncExternalStore:Nm,useId:Wm,unstable_isNewReconciler:!1},PT={readContext:En,useCallback:$m,useContext:En,useEffect:Yh,useImperativeHandle:zm,useInsertionEffect:Fm,useLayoutEffect:Um,useMemo:qm,useReducer:Qh,useRef:Lm,useState:function(){return Qh(Va)},useDebugValue:Jh,useDeferredValue:function(r){var s=Tn();return gt===null?s.memoizedState=r:Hm(s,gt.memoizedState,r)},useTransition:function(){var r=Qh(Va)[0],s=Tn().memoizedState;return[r,s]},useMutableSource:Pm,useSyncExternalStore:Nm,useId:Wm,unstable_isNewReconciler:!1};function Un(r,s){if(r&&r.defaultProps){s=oe({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function Xh(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:oe({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var wu={isMounted:function(r){return(r=r._reactInternals)?xn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=Wt(),d=pi(r),m=Dr(c,d);m.payload=s,a!=null&&(m.callback=a),s=ci(r,m,d),s!==null&&($n(s,r,d,c),du(s,r,d))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=Wt(),d=pi(r),m=Dr(c,d);m.tag=1,m.payload=s,a!=null&&(m.callback=a),s=ci(r,m,d),s!==null&&($n(s,r,d,c),du(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Wt(),c=pi(r),d=Dr(a,c);d.tag=2,s!=null&&(d.callback=s),s=ci(r,d,c),s!==null&&($n(s,r,c,a),du(s,r,c))}};function Ym(r,s,a,c,d,m,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,m,v):s.prototype&&s.prototype.isPureReactComponent?!Ea(a,c)||!Ea(d,m):!0}function Jm(r,s,a){var c=!1,d=ai,m=s.contextType;return typeof m=="object"&&m!==null?m=En(m):(d=Jt(s)?is:bt.current,c=s.contextTypes,m=(c=c!=null)?po(r,d):ai),s=new s(a,m),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=wu,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=m),s}function Xm(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&wu.enqueueReplaceState(s,s.state,null)}function Zh(r,s,a,c){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},Fh(r);var m=s.contextType;typeof m=="object"&&m!==null?d.context=En(m):(m=Jt(s)?is:bt.current,d.context=po(r,m)),d.state=r.memoizedState,m=s.getDerivedStateFromProps,typeof m=="function"&&(Xh(r,s,m,a),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&wu.enqueueReplaceState(d,d.state,null),fu(r,a,d,c),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function To(r,s){try{var a="",c=s;do a+=Re(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:r,source:s,stack:d,digest:null}}function ed(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function td(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var NT=typeof WeakMap=="function"?WeakMap:Map;function Zm(r,s,a){a=Dr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Cu||(Cu=!0,gd=c),td(r,s)},a}function eg(r,s,a){a=Dr(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){td(r,s)}}var m=r.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){td(r,s),typeof c!="function"&&(di===null?di=new Set([this]):di.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function tg(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new NT;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),r=qT.bind(null,r,s,a),s.then(r,r))}function ng(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function rg(r,s,a,c,d){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Dr(-1,1),s.tag=2,ci(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var xT=se.ReactCurrentOwner,Xt=!1;function Ht(r,s,a,c){s.child=r===null?Im(s,null,a,c):_o(s,r.child,a,c)}function ig(r,s,a,c,d){a=a.render;var m=s.ref;return wo(s,d),c=Wh(r,s,a,c,m,d),a=Kh(),r!==null&&!Xt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Or(r,s,d)):(Je&&a&&Ph(s),s.flags|=1,Ht(r,s,c,d),s.child)}function sg(r,s,a,c,d){if(r===null){var m=a.type;return typeof m=="function"&&!Id(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=m,og(r,s,m,c,d)):(r=Ou(a.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,(r.lanes&d)===0){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ea,a(v,c)&&r.ref===s.ref)return Or(r,s,d)}return s.flags|=1,r=gi(m,c),r.ref=s.ref,r.return=s,s.child=r}function og(r,s,a,c,d){if(r!==null){var m=r.memoizedProps;if(Ea(m,c)&&r.ref===s.ref)if(Xt=!1,s.pendingProps=c=m,(r.lanes&d)!==0)(r.flags&131072)!==0&&(Xt=!0);else return s.lanes=r.lanes,Or(r,s,d)}return nd(r,s,a,c,d)}function ag(r,s,a){var c=s.pendingProps,d=c.children,m=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(So,dn),dn|=a;else{if((a&1073741824)===0)return r=m!==null?m.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,He(So,dn),dn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,He(So,dn),dn|=c}else m!==null?(c=m.baseLanes|a,s.memoizedState=null):c=a,He(So,dn),dn|=c;return Ht(r,s,d,a),s.child}function lg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function nd(r,s,a,c,d){var m=Jt(a)?is:bt.current;return m=po(s,m),wo(s,d),a=Wh(r,s,a,c,m,d),c=Kh(),r!==null&&!Xt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Or(r,s,d)):(Je&&c&&Ph(s),s.flags|=1,Ht(r,s,a,d),s.child)}function ug(r,s,a,c,d){if(Jt(a)){var m=!0;iu(s)}else m=!1;if(wo(s,d),s.stateNode===null)Tu(r,s),Jm(s,a,c),Zh(s,a,c,d),c=!0;else if(r===null){var v=s.stateNode,R=s.memoizedProps;v.props=R;var N=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=En(U):(U=Jt(a)?is:bt.current,U=po(s,U));var Y=a.getDerivedStateFromProps,J=typeof Y=="function"||typeof v.getSnapshotBeforeUpdate=="function";J||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(R!==c||N!==U)&&Xm(s,v,c,U),ui=!1;var Q=s.memoizedState;v.state=Q,fu(s,c,v,d),N=s.memoizedState,R!==c||Q!==N||Yt.current||ui?(typeof Y=="function"&&(Xh(s,a,Y,c),N=s.memoizedState),(R=ui||Ym(s,a,R,c,Q,N,U))?(J||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=N),v.props=c,v.state=N,v.context=U,c=R):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,Am(r,s),R=s.memoizedProps,U=s.type===s.elementType?R:Un(s.type,R),v.props=U,J=s.pendingProps,Q=v.context,N=a.contextType,typeof N=="object"&&N!==null?N=En(N):(N=Jt(a)?is:bt.current,N=po(s,N));var ne=a.getDerivedStateFromProps;(Y=typeof ne=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(R!==J||Q!==N)&&Xm(s,v,c,N),ui=!1,Q=s.memoizedState,v.state=Q,fu(s,c,v,d);var ce=s.memoizedState;R!==J||Q!==ce||Yt.current||ui?(typeof ne=="function"&&(Xh(s,a,ne,c),ce=s.memoizedState),(U=ui||Ym(s,a,U,c,Q,ce,N)||!1)?(Y||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ce,N),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ce,N)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ce),v.props=c,v.state=ce,v.context=N,c=U):(typeof v.componentDidUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),c=!1)}return rd(r,s,a,c,m,d)}function rd(r,s,a,c,d,m){lg(r,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&pm(s,a,!1),Or(r,s,m);c=s.stateNode,xT.current=s;var R=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&v?(s.child=_o(s,r.child,null,m),s.child=_o(s,null,R,m)):Ht(r,s,R,m),s.memoizedState=c.state,d&&pm(s,a,!0),s.child}function cg(r){var s=r.stateNode;s.pendingContext?dm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&dm(r,s.context,!1),Uh(r,s.containerInfo)}function hg(r,s,a,c,d){return yo(),Oh(d),s.flags|=256,Ht(r,s,a,c),s.child}var id={dehydrated:null,treeContext:null,retryLane:0};function sd(r){return{baseLanes:r,cachePool:null,transitions:null}}function dg(r,s,a){var c=s.pendingProps,d=Xe.current,m=!1,v=(s.flags&128)!==0,R;if((R=v)||(R=r!==null&&r.memoizedState===null?!1:(d&2)!==0),R?(m=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),He(Xe,d&1),r===null)return Dh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=c.children,r=c.fallback,m?(c=s.mode,m=s.child,v={mode:"hidden",children:v},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=v):m=Vu(v,c,0,null),r=ps(r,c,a,null),m.return=s,r.return=s,m.sibling=r,s.child=m,s.child.memoizedState=sd(a),s.memoizedState=id,r):od(s,v));if(d=r.memoizedState,d!==null&&(R=d.dehydrated,R!==null))return DT(r,s,v,c,R,d,a);if(m){m=c.fallback,v=s.mode,d=r.child,R=d.sibling;var N={mode:"hidden",children:c.children};return(v&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=N,s.deletions=null):(c=gi(d,N),c.subtreeFlags=d.subtreeFlags&14680064),R!==null?m=gi(R,m):(m=ps(m,v,a,null),m.flags|=2),m.return=s,c.return=s,c.sibling=m,s.child=c,c=m,m=s.child,v=r.child.memoizedState,v=v===null?sd(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=r.childLanes&~a,s.memoizedState=id,c}return m=r.child,r=m.sibling,c=gi(m,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function od(r,s){return s=Vu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Eu(r,s,a,c){return c!==null&&Oh(c),_o(s,r.child,null,a),r=od(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function DT(r,s,a,c,d,m,v){if(a)return s.flags&256?(s.flags&=-257,c=ed(Error(t(422))),Eu(r,s,v,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(m=c.fallback,d=s.mode,c=Vu({mode:"visible",children:c.children},d,0,null),m=ps(m,d,v,null),m.flags|=2,c.return=s,m.return=s,c.sibling=m,s.child=c,(s.mode&1)!==0&&_o(s,r.child,null,v),s.child.memoizedState=sd(v),s.memoizedState=id,m);if((s.mode&1)===0)return Eu(r,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var R=c.dgst;return c=R,m=Error(t(419)),c=ed(m,c,void 0),Eu(r,s,v,c)}if(R=(v&r.childLanes)!==0,Xt||R){if(c=Tt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,xr(r,d),$n(c,r,d,-1))}return Td(),c=ed(Error(t(421))),Eu(r,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=HT.bind(null,r),d._reactRetry=s,null):(r=m.treeContext,hn=si(d.nextSibling),cn=s,Je=!0,Fn=null,r!==null&&(vn[wn++]=Pr,vn[wn++]=Nr,vn[wn++]=ss,Pr=r.id,Nr=r.overflow,ss=s),s=od(s,c.children),s.flags|=4096,s)}function fg(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),Lh(r.return,s,a)}function ad(r,s,a,c,d){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function pg(r,s,a){var c=s.pendingProps,d=c.revealOrder,m=c.tail;if(Ht(r,s,c.children,a),c=Xe.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&fg(r,a,s);else if(r.tag===19)fg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(He(Xe,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&pu(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),ad(s,!1,d,a,m);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&pu(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}ad(s,!0,a,null,m);break;case"together":ad(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Tu(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Or(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),cs|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=gi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=gi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function OT(r,s,a){switch(s.tag){case 3:cg(s),yo();break;case 5:km(s);break;case 1:Jt(s.type)&&iu(s);break;case 4:Uh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;He(cu,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(He(Xe,Xe.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?dg(r,s,a):(He(Xe,Xe.current&1),r=Or(r,s,a),r!==null?r.sibling:null);He(Xe,Xe.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(r.flags&128)!==0){if(c)return pg(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Xe,Xe.current),c)break;return null;case 22:case 23:return s.lanes=0,ag(r,s,a)}return Or(r,s,a)}var mg,ld,gg,yg;mg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ld=function(){},gg=function(r,s,a,c){var d=r.memoizedProps;if(d!==c){r=s.stateNode,ls(ir.current);var m=null;switch(a){case"input":d=Bi(r,d),c=Bi(r,c),m=[];break;case"select":d=oe({},d,{value:void 0}),c=oe({},c,{value:void 0}),m=[];break;case"textarea":d=Yo(r,d),c=Yo(r,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=tu)}na(a,c);var v;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var R=d[U];for(v in R)R.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?m||(m=[]):(m=m||[]).push(U,null));for(U in c){var N=c[U];if(R=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&N!==R&&(N!=null||R!=null))if(U==="style")if(R){for(v in R)!R.hasOwnProperty(v)||N&&N.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in N)N.hasOwnProperty(v)&&R[v]!==N[v]&&(a||(a={}),a[v]=N[v])}else a||(m||(m=[]),m.push(U,a)),a=N;else U==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,R=R?R.__html:void 0,N!=null&&R!==N&&(m=m||[]).push(U,N)):U==="children"?typeof N!="string"&&typeof N!="number"||(m=m||[]).push(U,""+N):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(N!=null&&U==="onScroll"&&Ke("scroll",r),m||R===N||(m=[])):(m=m||[]).push(U,N))}a&&(m=m||[]).push("style",a);var U=m;(s.updateQueue=U)&&(s.flags|=4)}},yg=function(r,s,a,c){a!==c&&(s.flags|=4)};function Ma(r,s){if(!Je)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Lt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function VT(r,s,a){var c=s.pendingProps;switch(Nh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(s),null;case 1:return Jt(s.type)&&ru(),Lt(s),null;case 3:return c=s.stateNode,Eo(),Ge(Yt),Ge(bt),$h(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(lu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Fn!==null&&(vd(Fn),Fn=null))),ld(r,s),Lt(s),null;case 5:Bh(s);var d=ls(xa.current);if(a=s.type,r!==null&&s.stateNode!=null)gg(r,s,a,c,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Lt(s),null}if(r=ls(ir.current),lu(s)){c=s.stateNode,a=s.type;var m=s.memoizedProps;switch(c[rr]=s,c[Ra]=m,r=(s.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(d=0;d<Ia.length;d++)Ke(Ia[d],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":bs(c,m),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ke("invalid",c);break;case"textarea":Ls(c,m),Ke("invalid",c)}na(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var R=m[v];v==="children"?typeof R=="string"?c.textContent!==R&&(m.suppressHydrationWarning!==!0&&eu(c.textContent,R,r),d=["children",R]):typeof R=="number"&&c.textContent!==""+R&&(m.suppressHydrationWarning!==!0&&eu(c.textContent,R,r),d=["children",""+R]):o.hasOwnProperty(v)&&R!=null&&v==="onScroll"&&Ke("scroll",c)}switch(a){case"input":yr(c),Rl(c,m,!0);break;case"textarea":yr(c),Jo(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=tu)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ft(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=v.createElement(a,{is:c.is}):(r=v.createElement(a),a==="select"&&(v=r,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):r=v.createElementNS(r,a),r[rr]=s,r[Ra]=c,mg(r,s,!1,!1),s.stateNode=r;e:{switch(v=ra(a,c),a){case"dialog":Ke("cancel",r),Ke("close",r),d=c;break;case"iframe":case"object":case"embed":Ke("load",r),d=c;break;case"video":case"audio":for(d=0;d<Ia.length;d++)Ke(Ia[d],r);d=c;break;case"source":Ke("error",r),d=c;break;case"img":case"image":case"link":Ke("error",r),Ke("load",r),d=c;break;case"details":Ke("toggle",r),d=c;break;case"input":bs(r,c),d=Bi(r,c),Ke("invalid",r);break;case"option":d=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},d=oe({},c,{value:void 0}),Ke("invalid",r);break;case"textarea":Ls(r,c),d=Yo(r,c),Ke("invalid",r);break;default:d=c}na(a,d),R=d;for(m in R)if(R.hasOwnProperty(m)){var N=R[m];m==="style"?ea(r,N):m==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,N!=null&&Xo(r,N)):m==="children"?typeof N=="string"?(a!=="textarea"||N!=="")&&Gr(r,N):typeof N=="number"&&Gr(r,""+N):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?N!=null&&m==="onScroll"&&Ke("scroll",r):N!=null&&ie(r,m,N,v))}switch(a){case"input":yr(r),Rl(r,c,!1);break;case"textarea":yr(r),Jo(r);break;case"option":c.value!=null&&r.setAttribute("value",""+je(c.value));break;case"select":r.multiple=!!c.multiple,m=c.value,m!=null?vr(r,!!c.multiple,m,!1):c.defaultValue!=null&&vr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=tu)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Lt(s),null;case 6:if(r&&s.stateNode!=null)yg(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=ls(xa.current),ls(ir.current),lu(s)){if(c=s.stateNode,a=s.memoizedProps,c[rr]=s,(m=c.nodeValue!==a)&&(r=cn,r!==null))switch(r.tag){case 3:eu(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&eu(c.nodeValue,a,(r.mode&1)!==0)}m&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[rr]=s,s.stateNode=c}return Lt(s),null;case 13:if(Ge(Xe),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Je&&hn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)wm(),yo(),s.flags|=98560,m=!1;else if(m=lu(s),c!==null&&c.dehydrated!==null){if(r===null){if(!m)throw Error(t(318));if(m=s.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[rr]=s}else yo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Lt(s),m=!1}else Fn!==null&&(vd(Fn),Fn=null),m=!0;if(!m)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(Xe.current&1)!==0?yt===0&&(yt=3):Td())),s.updateQueue!==null&&(s.flags|=4),Lt(s),null);case 4:return Eo(),ld(r,s),r===null&&Sa(s.stateNode.containerInfo),Lt(s),null;case 10:return Mh(s.type._context),Lt(s),null;case 17:return Jt(s.type)&&ru(),Lt(s),null;case 19:if(Ge(Xe),m=s.memoizedState,m===null)return Lt(s),null;if(c=(s.flags&128)!==0,v=m.rendering,v===null)if(c)Ma(m,!1);else{if(yt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(v=pu(r),v!==null){for(s.flags|=128,Ma(m,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)m=a,r=c,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=r,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,r=v.dependencies,m.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return He(Xe,Xe.current&1|2),s.child}r=r.sibling}m.tail!==null&&qe()>Ao&&(s.flags|=128,c=!0,Ma(m,!1),s.lanes=4194304)}else{if(!c)if(r=pu(v),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Ma(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!Je)return Lt(s),null}else 2*qe()-m.renderingStartTime>Ao&&a!==1073741824&&(s.flags|=128,c=!0,Ma(m,!1),s.lanes=4194304);m.isBackwards?(v.sibling=s.child,s.child=v):(a=m.last,a!==null?a.sibling=v:s.child=v,m.last=v)}return m.tail!==null?(s=m.tail,m.rendering=s,m.tail=s.sibling,m.renderingStartTime=qe(),s.sibling=null,a=Xe.current,He(Xe,c?a&1|2:a&1),s):(Lt(s),null);case 22:case 23:return Ed(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(dn&1073741824)!==0&&(Lt(s),s.subtreeFlags&6&&(s.flags|=8192)):Lt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function bT(r,s){switch(Nh(s),s.tag){case 1:return Jt(s.type)&&ru(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Eo(),Ge(Yt),Ge(bt),$h(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Bh(s),null;case 13:if(Ge(Xe),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));yo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ge(Xe),null;case 4:return Eo(),null;case 10:return Mh(s.type._context),null;case 22:case 23:return Ed(),null;case 24:return null;default:return null}}var Iu=!1,jt=!1,MT=typeof WeakSet=="function"?WeakSet:Set,le=null;function Io(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nt(r,s,c)}else a.current=null}function ud(r,s,a){try{a()}catch(c){nt(r,s,c)}}var _g=!1;function LT(r,s){if(Eh=ni,r=Yp(),fh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,R=-1,N=-1,U=0,Y=0,J=r,Q=null;t:for(;;){for(var ne;J!==a||d!==0&&J.nodeType!==3||(R=v+d),J!==m||c!==0&&J.nodeType!==3||(N=v+c),J.nodeType===3&&(v+=J.nodeValue.length),(ne=J.firstChild)!==null;)Q=J,J=ne;for(;;){if(J===r)break t;if(Q===a&&++U===d&&(R=v),Q===m&&++Y===c&&(N=v),(ne=J.nextSibling)!==null)break;J=Q,Q=J.parentNode}J=ne}a=R===-1||N===-1?null:{start:R,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(Th={focusedElem:r,selectionRange:a},ni=!1,le=s;le!==null;)if(s=le,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,le=r;else for(;le!==null;){s=le;try{var ce=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ce!==null){var he=ce.memoizedProps,st=ce.memoizedState,L=s.stateNode,D=L.getSnapshotBeforeUpdate(s.elementType===s.type?he:Un(s.type,he),st);L.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){nt(s,s.return,X)}if(r=s.sibling,r!==null){r.return=s.return,le=r;break}le=s.return}return ce=_g,_g=!1,ce}function La(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&r)===r){var m=d.destroy;d.destroy=void 0,m!==void 0&&ud(s,a,m)}d=d.next}while(d!==c)}}function Su(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function cd(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function vg(r){var s=r.alternate;s!==null&&(r.alternate=null,vg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[rr],delete s[Ra],delete s[Rh],delete s[vT],delete s[wT])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function wg(r){return r.tag===5||r.tag===3||r.tag===4}function Eg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||wg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function hd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=tu));else if(c!==4&&(r=r.child,r!==null))for(hd(r,s,a),r=r.sibling;r!==null;)hd(r,s,a),r=r.sibling}function dd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(dd(r,s,a),r=r.sibling;r!==null;)dd(r,s,a),r=r.sibling}var Ct=null,Bn=!1;function hi(r,s,a){for(a=a.child;a!==null;)Tg(r,s,a),a=a.sibling}function Tg(r,s,a){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(Yi,a)}catch{}switch(a.tag){case 5:jt||Io(a,s);case 6:var c=Ct,d=Bn;Ct=null,hi(r,s,a),Ct=c,Bn=d,Ct!==null&&(Bn?(r=Ct,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&(Bn?(r=Ct,a=a.stateNode,r.nodeType===8?Ah(r.parentNode,a):r.nodeType===1&&Ah(r,a),Mn(r)):Ah(Ct,a.stateNode));break;case 4:c=Ct,d=Bn,Ct=a.stateNode.containerInfo,Bn=!0,hi(r,s,a),Ct=c,Bn=d;break;case 0:case 11:case 14:case 15:if(!jt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&((m&2)!==0||(m&4)!==0)&&ud(a,s,v),d=d.next}while(d!==c)}hi(r,s,a);break;case 1:if(!jt&&(Io(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(R){nt(a,s,R)}hi(r,s,a);break;case 21:hi(r,s,a);break;case 22:a.mode&1?(jt=(c=jt)||a.memoizedState!==null,hi(r,s,a),jt=c):hi(r,s,a);break;default:hi(r,s,a)}}function Ig(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new MT),s.forEach(function(c){var d=WT.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}}function zn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=r,v=s,R=v;e:for(;R!==null;){switch(R.tag){case 5:Ct=R.stateNode,Bn=!1;break e;case 3:Ct=R.stateNode.containerInfo,Bn=!0;break e;case 4:Ct=R.stateNode.containerInfo,Bn=!0;break e}R=R.return}if(Ct===null)throw Error(t(160));Tg(m,v,d),Ct=null,Bn=!1;var N=d.alternate;N!==null&&(N.return=null),d.return=null}catch(U){nt(d,s,U)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Sg(s,r),s=s.sibling}function Sg(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(zn(s,r),or(r),c&4){try{La(3,r,r.return),Su(3,r)}catch(he){nt(r,r.return,he)}try{La(5,r,r.return)}catch(he){nt(r,r.return,he)}}break;case 1:zn(s,r),or(r),c&512&&a!==null&&Io(a,a.return);break;case 5:if(zn(s,r),or(r),c&512&&a!==null&&Io(a,a.return),r.flags&32){var d=r.stateNode;try{Gr(d,"")}catch(he){nt(r,r.return,he)}}if(c&4&&(d=r.stateNode,d!=null)){var m=r.memoizedProps,v=a!==null?a.memoizedProps:m,R=r.type,N=r.updateQueue;if(r.updateQueue=null,N!==null)try{R==="input"&&m.type==="radio"&&m.name!=null&&Go(d,m),ra(R,v);var U=ra(R,m);for(v=0;v<N.length;v+=2){var Y=N[v],J=N[v+1];Y==="style"?ea(d,J):Y==="dangerouslySetInnerHTML"?Xo(d,J):Y==="children"?Gr(d,J):ie(d,Y,J,U)}switch(R){case"input":Qo(d,m);break;case"textarea":js(d,m);break;case"select":var Q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ne=m.value;ne!=null?vr(d,!!m.multiple,ne,!1):Q!==!!m.multiple&&(m.defaultValue!=null?vr(d,!!m.multiple,m.defaultValue,!0):vr(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ra]=m}catch(he){nt(r,r.return,he)}}break;case 6:if(zn(s,r),or(r),c&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,m=r.memoizedProps;try{d.nodeValue=m}catch(he){nt(r,r.return,he)}}break;case 3:if(zn(s,r),or(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Mn(s.containerInfo)}catch(he){nt(r,r.return,he)}break;case 4:zn(s,r),or(r);break;case 13:zn(s,r),or(r),d=r.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(md=qe())),c&4&&Ig(r);break;case 22:if(Y=a!==null&&a.memoizedState!==null,r.mode&1?(jt=(U=jt)||Y,zn(s,r),jt=U):zn(s,r),or(r),c&8192){if(U=r.memoizedState!==null,(r.stateNode.isHidden=U)&&!Y&&(r.mode&1)!==0)for(le=r,Y=r.child;Y!==null;){for(J=le=Y;le!==null;){switch(Q=le,ne=Q.child,Q.tag){case 0:case 11:case 14:case 15:La(4,Q,Q.return);break;case 1:Io(Q,Q.return);var ce=Q.stateNode;if(typeof ce.componentWillUnmount=="function"){c=Q,a=Q.return;try{s=c,ce.props=s.memoizedProps,ce.state=s.memoizedState,ce.componentWillUnmount()}catch(he){nt(c,a,he)}}break;case 5:Io(Q,Q.return);break;case 22:if(Q.memoizedState!==null){Cg(J);continue}}ne!==null?(ne.return=Q,le=ne):Cg(J)}Y=Y.sibling}e:for(Y=null,J=r;;){if(J.tag===5){if(Y===null){Y=J;try{d=J.stateNode,U?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(R=J.stateNode,N=J.memoizedProps.style,v=N!=null&&N.hasOwnProperty("display")?N.display:null,R.style.display=Zo("display",v))}catch(he){nt(r,r.return,he)}}}else if(J.tag===6){if(Y===null)try{J.stateNode.nodeValue=U?"":J.memoizedProps}catch(he){nt(r,r.return,he)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===r)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===r)break e;for(;J.sibling===null;){if(J.return===null||J.return===r)break e;Y===J&&(Y=null),J=J.return}Y===J&&(Y=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:zn(s,r),or(r),c&4&&Ig(r);break;case 21:break;default:zn(s,r),or(r)}}function or(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(wg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Gr(d,""),c.flags&=-33);var m=Eg(r);dd(r,m,d);break;case 3:case 4:var v=c.stateNode.containerInfo,R=Eg(r);hd(r,R,v);break;default:throw Error(t(161))}}catch(N){nt(r,r.return,N)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function jT(r,s,a){le=r,Ag(r)}function Ag(r,s,a){for(var c=(r.mode&1)!==0;le!==null;){var d=le,m=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Iu;if(!v){var R=d.alternate,N=R!==null&&R.memoizedState!==null||jt;R=Iu;var U=jt;if(Iu=v,(jt=N)&&!U)for(le=d;le!==null;)v=le,N=v.child,v.tag===22&&v.memoizedState!==null?kg(d):N!==null?(N.return=v,le=N):kg(d);for(;m!==null;)le=m,Ag(m),m=m.sibling;le=d,Iu=R,jt=U}Rg(r)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,le=m):Rg(r)}}function Rg(r){for(;le!==null;){var s=le;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:jt||Su(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!jt)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Un(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=s.updateQueue;m!==null&&Cm(s,m,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Cm(s,v,a)}break;case 5:var R=s.stateNode;if(a===null&&s.flags&4){a=R;var N=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":N.autoFocus&&a.focus();break;case"img":N.src&&(a.src=N.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var U=s.alternate;if(U!==null){var Y=U.memoizedState;if(Y!==null){var J=Y.dehydrated;J!==null&&Mn(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}jt||s.flags&512&&cd(s)}catch(Q){nt(s,s.return,Q)}}if(s===r){le=null;break}if(a=s.sibling,a!==null){a.return=s.return,le=a;break}le=s.return}}function Cg(r){for(;le!==null;){var s=le;if(s===r){le=null;break}var a=s.sibling;if(a!==null){a.return=s.return,le=a;break}le=s.return}}function kg(r){for(;le!==null;){var s=le;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Su(4,s)}catch(N){nt(s,a,N)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(N){nt(s,d,N)}}var m=s.return;try{cd(s)}catch(N){nt(s,m,N)}break;case 5:var v=s.return;try{cd(s)}catch(N){nt(s,v,N)}}}catch(N){nt(s,s.return,N)}if(s===r){le=null;break}var R=s.sibling;if(R!==null){R.return=s.return,le=R;break}le=s.return}}var FT=Math.ceil,Au=se.ReactCurrentDispatcher,fd=se.ReactCurrentOwner,In=se.ReactCurrentBatchConfig,be=0,Tt=null,ut=null,kt=0,dn=0,So=oi(0),yt=0,ja=null,cs=0,Ru=0,pd=0,Fa=null,Zt=null,md=0,Ao=1/0,Vr=null,Cu=!1,gd=null,di=null,ku=!1,fi=null,Pu=0,Ua=0,yd=null,Nu=-1,xu=0;function Wt(){return(be&6)!==0?qe():Nu!==-1?Nu:Nu=qe()}function pi(r){return(r.mode&1)===0?1:(be&2)!==0&&kt!==0?kt&-kt:TT.transition!==null?(xu===0&&(xu=Xi()),xu):(r=Ne,r!==0||(r=window.event,r=r===void 0?16:pa(r.type)),r)}function $n(r,s,a,c){if(50<Ua)throw Ua=0,yd=null,Error(t(185));Xr(r,a,c),((be&2)===0||r!==Tt)&&(r===Tt&&((be&2)===0&&(Ru|=a),yt===4&&mi(r,kt)),en(r,c),a===1&&be===0&&(s.mode&1)===0&&(Ao=qe()+500,su&&li()))}function en(r,s){var a=r.callbackNode;Tr(r,s);var c=Ji(r,r===Tt?kt:0);if(c===0)a!==null&&ua(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&ua(a),s===1)r.tag===0?ET(Ng.bind(null,r)):mm(Ng.bind(null,r)),yT(function(){(be&6)===0&&li()}),a=null;else{switch(ei(c)){case 1:a=Qi;break;case 4:a=Qr;break;case 16:a=gn;break;case 536870912:a=xl;break;default:a=gn}a=jg(a,Pg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Pg(r,s){if(Nu=-1,xu=0,(be&6)!==0)throw Error(t(327));var a=r.callbackNode;if(Ro()&&r.callbackNode!==a)return null;var c=Ji(r,r===Tt?kt:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||s)s=Du(r,c);else{s=c;var d=be;be|=2;var m=Dg();(Tt!==r||kt!==s)&&(Vr=null,Ao=qe()+500,ds(r,s));do try{zT();break}catch(R){xg(r,R)}while(!0);bh(),Au.current=m,be=d,ut!==null?s=0:(Tt=null,kt=0,s=yt)}if(s!==0){if(s===2&&(d=an(r),d!==0&&(c=d,s=_d(r,d))),s===1)throw a=ja,ds(r,0),mi(r,c),en(r,qe()),a;if(s===6)mi(r,c);else{if(d=r.current.alternate,(c&30)===0&&!UT(d)&&(s=Du(r,c),s===2&&(m=an(r),m!==0&&(c=m,s=_d(r,m))),s===1))throw a=ja,ds(r,0),mi(r,c),en(r,qe()),a;switch(r.finishedWork=d,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:fs(r,Zt,Vr);break;case 3:if(mi(r,c),(c&130023424)===c&&(s=md+500-qe(),10<s)){if(Ji(r,0)!==0)break;if(d=r.suspendedLanes,(d&c)!==c){Wt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=Sh(fs.bind(null,r,Zt,Vr),s);break}fs(r,Zt,Vr);break;case 4:if(mi(r,c),(c&4194240)===c)break;for(s=r.eventTimes,d=-1;0<c;){var v=31-$t(c);m=1<<v,v=s[v],v>d&&(d=v),c&=~m}if(c=d,c=qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*FT(c/1960))-c,10<c){r.timeoutHandle=Sh(fs.bind(null,r,Zt,Vr),c);break}fs(r,Zt,Vr);break;case 5:fs(r,Zt,Vr);break;default:throw Error(t(329))}}}return en(r,qe()),r.callbackNode===a?Pg.bind(null,r):null}function _d(r,s){var a=Fa;return r.current.memoizedState.isDehydrated&&(ds(r,s).flags|=256),r=Du(r,s),r!==2&&(s=Zt,Zt=a,s!==null&&vd(s)),r}function vd(r){Zt===null?Zt=r:Zt.push.apply(Zt,r)}function UT(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!jn(m(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function mi(r,s){for(s&=~pd,s&=~Ru,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-$t(s),c=1<<a;r[a]=-1,s&=~c}}function Ng(r){if((be&6)!==0)throw Error(t(327));Ro();var s=Ji(r,0);if((s&1)===0)return en(r,qe()),null;var a=Du(r,s);if(r.tag!==0&&a===2){var c=an(r);c!==0&&(s=c,a=_d(r,c))}if(a===1)throw a=ja,ds(r,0),mi(r,s),en(r,qe()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,fs(r,Zt,Vr),en(r,qe()),null}function wd(r,s){var a=be;be|=1;try{return r(s)}finally{be=a,be===0&&(Ao=qe()+500,su&&li())}}function hs(r){fi!==null&&fi.tag===0&&(be&6)===0&&Ro();var s=be;be|=1;var a=In.transition,c=Ne;try{if(In.transition=null,Ne=1,r)return r()}finally{Ne=c,In.transition=a,be=s,(be&6)===0&&li()}}function Ed(){dn=So.current,Ge(So)}function ds(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,gT(a)),ut!==null)for(a=ut.return;a!==null;){var c=a;switch(Nh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ru();break;case 3:Eo(),Ge(Yt),Ge(bt),$h();break;case 5:Bh(c);break;case 4:Eo();break;case 13:Ge(Xe);break;case 19:Ge(Xe);break;case 10:Mh(c.type._context);break;case 22:case 23:Ed()}a=a.return}if(Tt=r,ut=r=gi(r.current,null),kt=dn=s,yt=0,ja=null,pd=Ru=cs=0,Zt=Fa=null,as!==null){for(s=0;s<as.length;s++)if(a=as[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,c.next=v}a.pending=c}as=null}return r}function xg(r,s){do{var a=ut;try{if(bh(),mu.current=vu,gu){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}gu=!1}if(us=0,Et=gt=Ze=null,Da=!1,Oa=0,fd.current=null,a===null||a.return===null){yt=1,ja=s,ut=null;break}e:{var m=r,v=a.return,R=a,N=s;if(s=kt,R.flags|=32768,N!==null&&typeof N=="object"&&typeof N.then=="function"){var U=N,Y=R,J=Y.tag;if((Y.mode&1)===0&&(J===0||J===11||J===15)){var Q=Y.alternate;Q?(Y.updateQueue=Q.updateQueue,Y.memoizedState=Q.memoizedState,Y.lanes=Q.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var ne=ng(v);if(ne!==null){ne.flags&=-257,rg(ne,v,R,m,s),ne.mode&1&&tg(m,U,s),s=ne,N=U;var ce=s.updateQueue;if(ce===null){var he=new Set;he.add(N),s.updateQueue=he}else ce.add(N);break e}else{if((s&1)===0){tg(m,U,s),Td();break e}N=Error(t(426))}}else if(Je&&R.mode&1){var st=ng(v);if(st!==null){(st.flags&65536)===0&&(st.flags|=256),rg(st,v,R,m,s),Oh(To(N,R));break e}}m=N=To(N,R),yt!==4&&(yt=2),Fa===null?Fa=[m]:Fa.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,s&=-s,m.lanes|=s;var L=Zm(m,N,s);Rm(m,L);break e;case 1:R=N;var D=m.type,j=m.stateNode;if((m.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(di===null||!di.has(j)))){m.flags|=65536,s&=-s,m.lanes|=s;var X=eg(m,R,s);Rm(m,X);break e}}m=m.return}while(m!==null)}Vg(a)}catch(de){s=de,ut===a&&a!==null&&(ut=a=a.return);continue}break}while(!0)}function Dg(){var r=Au.current;return Au.current=vu,r===null?vu:r}function Td(){(yt===0||yt===3||yt===2)&&(yt=4),Tt===null||(cs&268435455)===0&&(Ru&268435455)===0||mi(Tt,kt)}function Du(r,s){var a=be;be|=2;var c=Dg();(Tt!==r||kt!==s)&&(Vr=null,ds(r,s));do try{BT();break}catch(d){xg(r,d)}while(!0);if(bh(),be=a,Au.current=c,ut!==null)throw Error(t(261));return Tt=null,kt=0,yt}function BT(){for(;ut!==null;)Og(ut)}function zT(){for(;ut!==null&&!Pl();)Og(ut)}function Og(r){var s=Lg(r.alternate,r,dn);r.memoizedProps=r.pendingProps,s===null?Vg(r):ut=s,fd.current=null}function Vg(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=VT(a,s,dn),a!==null){ut=a;return}}else{if(a=bT(a,s),a!==null){a.flags&=32767,ut=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{yt=6,ut=null;return}}if(s=s.sibling,s!==null){ut=s;return}ut=s=r}while(s!==null);yt===0&&(yt=5)}function fs(r,s,a){var c=Ne,d=In.transition;try{In.transition=null,Ne=1,$T(r,s,a,c)}finally{In.transition=d,Ne=c}return null}function $T(r,s,a,c){do Ro();while(fi!==null);if((be&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var m=a.lanes|a.childLanes;if(ze(r,m),r===Tt&&(ut=Tt=null,kt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ku||(ku=!0,jg(gn,function(){return Ro(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=In.transition,In.transition=null;var v=Ne;Ne=1;var R=be;be|=4,fd.current=null,LT(r,a),Sg(a,r),uT(Th),ni=!!Eh,Th=Eh=null,r.current=a,jT(a),sh(),be=R,Ne=v,In.transition=m}else r.current=a;if(ku&&(ku=!1,fi=r,Pu=d),m=r.pendingLanes,m===0&&(di=null),Dl(a.stateNode),en(r,qe()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Cu)throw Cu=!1,r=gd,gd=null,r;return(Pu&1)!==0&&r.tag!==0&&Ro(),m=r.pendingLanes,(m&1)!==0?r===yd?Ua++:(Ua=0,yd=r):Ua=0,li(),null}function Ro(){if(fi!==null){var r=ei(Pu),s=In.transition,a=Ne;try{if(In.transition=null,Ne=16>r?16:r,fi===null)var c=!1;else{if(r=fi,fi=null,Pu=0,(be&6)!==0)throw Error(t(331));var d=be;for(be|=4,le=r.current;le!==null;){var m=le,v=m.child;if((le.flags&16)!==0){var R=m.deletions;if(R!==null){for(var N=0;N<R.length;N++){var U=R[N];for(le=U;le!==null;){var Y=le;switch(Y.tag){case 0:case 11:case 15:La(8,Y,m)}var J=Y.child;if(J!==null)J.return=Y,le=J;else for(;le!==null;){Y=le;var Q=Y.sibling,ne=Y.return;if(vg(Y),Y===U){le=null;break}if(Q!==null){Q.return=ne,le=Q;break}le=ne}}}var ce=m.alternate;if(ce!==null){var he=ce.child;if(he!==null){ce.child=null;do{var st=he.sibling;he.sibling=null,he=st}while(he!==null)}}le=m}}if((m.subtreeFlags&2064)!==0&&v!==null)v.return=m,le=v;else e:for(;le!==null;){if(m=le,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:La(9,m,m.return)}var L=m.sibling;if(L!==null){L.return=m.return,le=L;break e}le=m.return}}var D=r.current;for(le=D;le!==null;){v=le;var j=v.child;if((v.subtreeFlags&2064)!==0&&j!==null)j.return=v,le=j;else e:for(v=D;le!==null;){if(R=le,(R.flags&2048)!==0)try{switch(R.tag){case 0:case 11:case 15:Su(9,R)}}catch(de){nt(R,R.return,de)}if(R===v){le=null;break e}var X=R.sibling;if(X!==null){X.return=R.return,le=X;break e}le=R.return}}if(be=d,li(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(Yi,r)}catch{}c=!0}return c}finally{Ne=a,In.transition=s}}return!1}function bg(r,s,a){s=To(a,s),s=Zm(r,s,1),r=ci(r,s,1),s=Wt(),r!==null&&(Xr(r,1,s),en(r,s))}function nt(r,s,a){if(r.tag===3)bg(r,r,a);else for(;s!==null;){if(s.tag===3){bg(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(di===null||!di.has(c))){r=To(a,r),r=eg(s,r,1),s=ci(s,r,1),r=Wt(),s!==null&&(Xr(s,1,r),en(s,r));break}}s=s.return}}function qT(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=Wt(),r.pingedLanes|=r.suspendedLanes&a,Tt===r&&(kt&a)===a&&(yt===4||yt===3&&(kt&130023424)===kt&&500>qe()-md?ds(r,0):pd|=a),en(r,s)}function Mg(r,s){s===0&&((r.mode&1)===0?s=1:(s=Gs,Gs<<=1,(Gs&130023424)===0&&(Gs=4194304)));var a=Wt();r=xr(r,s),r!==null&&(Xr(r,s,a),en(r,a))}function HT(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),Mg(r,a)}function WT(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),Mg(r,a)}var Lg;Lg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Yt.current)Xt=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return Xt=!1,OT(r,s,a);Xt=(r.flags&131072)!==0}else Xt=!1,Je&&(s.flags&1048576)!==0&&gm(s,au,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Tu(r,s),r=s.pendingProps;var d=po(s,bt.current);wo(s,a),d=Wh(null,s,c,r,d,a);var m=Kh();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Jt(c)?(m=!0,iu(s)):m=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Fh(s),d.updater=wu,s.stateNode=d,d._reactInternals=s,Zh(s,c,r,a),s=rd(null,s,c,!0,m,a)):(s.tag=0,Je&&m&&Ph(s),Ht(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(Tu(r,s),r=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=GT(c),r=Un(c,r),d){case 0:s=nd(null,s,c,r,a);break e;case 1:s=ug(null,s,c,r,a);break e;case 11:s=ig(null,s,c,r,a);break e;case 14:s=sg(null,s,c,Un(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Un(c,d),nd(r,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Un(c,d),ug(r,s,c,d,a);case 3:e:{if(cg(s),r===null)throw Error(t(387));c=s.pendingProps,m=s.memoizedState,d=m.element,Am(r,s),fu(s,c,null,a);var v=s.memoizedState;if(c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){d=To(Error(t(423)),s),s=hg(r,s,c,a,d);break e}else if(c!==d){d=To(Error(t(424)),s),s=hg(r,s,c,a,d);break e}else for(hn=si(s.stateNode.containerInfo.firstChild),cn=s,Je=!0,Fn=null,a=Im(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(yo(),c===d){s=Or(r,s,a);break e}Ht(r,s,c,a)}s=s.child}return s;case 5:return km(s),r===null&&Dh(s),c=s.type,d=s.pendingProps,m=r!==null?r.memoizedProps:null,v=d.children,Ih(c,d)?v=null:m!==null&&Ih(c,m)&&(s.flags|=32),lg(r,s),Ht(r,s,v,a),s.child;case 6:return r===null&&Dh(s),null;case 13:return dg(r,s,a);case 4:return Uh(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=_o(s,null,c,a):Ht(r,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Un(c,d),ig(r,s,c,d,a);case 7:return Ht(r,s,s.pendingProps,a),s.child;case 8:return Ht(r,s,s.pendingProps.children,a),s.child;case 12:return Ht(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,m=s.memoizedProps,v=d.value,He(cu,c._currentValue),c._currentValue=v,m!==null)if(jn(m.value,v)){if(m.children===d.children&&!Yt.current){s=Or(r,s,a);break e}}else for(m=s.child,m!==null&&(m.return=s);m!==null;){var R=m.dependencies;if(R!==null){v=m.child;for(var N=R.firstContext;N!==null;){if(N.context===c){if(m.tag===1){N=Dr(-1,a&-a),N.tag=2;var U=m.updateQueue;if(U!==null){U=U.shared;var Y=U.pending;Y===null?N.next=N:(N.next=Y.next,Y.next=N),U.pending=N}}m.lanes|=a,N=m.alternate,N!==null&&(N.lanes|=a),Lh(m.return,a,s),R.lanes|=a;break}N=N.next}}else if(m.tag===10)v=m.type===s.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=a,R=v.alternate,R!==null&&(R.lanes|=a),Lh(v,a,s),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===s){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}Ht(r,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,wo(s,a),d=En(d),c=c(d),s.flags|=1,Ht(r,s,c,a),s.child;case 14:return c=s.type,d=Un(c,s.pendingProps),d=Un(c.type,d),sg(r,s,c,d,a);case 15:return og(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Un(c,d),Tu(r,s),s.tag=1,Jt(c)?(r=!0,iu(s)):r=!1,wo(s,a),Jm(s,c,d),Zh(s,c,d,a),rd(null,s,c,!0,r,a);case 19:return pg(r,s,a);case 22:return ag(r,s,a)}throw Error(t(156,s.tag))};function jg(r,s){return Ws(r,s)}function KT(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(r,s,a,c){return new KT(r,s,a,c)}function Id(r){return r=r.prototype,!(!r||!r.isReactComponent)}function GT(r){if(typeof r=="function")return Id(r)?1:0;if(r!=null){if(r=r.$$typeof,r===V)return 11;if(r===Ot)return 14}return 2}function gi(r,s){var a=r.alternate;return a===null?(a=Sn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Ou(r,s,a,c,d,m){var v=2;if(c=r,typeof r=="function")Id(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case k:return ps(a.children,d,m,s);case I:v=8,d|=8;break;case C:return r=Sn(12,a,s,d|2),r.elementType=C,r.lanes=m,r;case P:return r=Sn(13,a,s,d),r.elementType=P,r.lanes=m,r;case rt:return r=Sn(19,a,s,d),r.elementType=rt,r.lanes=m,r;case Be:return Vu(a,d,m,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case x:v=10;break e;case O:v=9;break e;case V:v=11;break e;case Ot:v=14;break e;case Vt:v=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Sn(v,a,s,d),s.elementType=r,s.type=c,s.lanes=m,s}function ps(r,s,a,c){return r=Sn(7,r,c,s),r.lanes=a,r}function Vu(r,s,a,c){return r=Sn(22,r,c,s),r.elementType=Be,r.lanes=a,r.stateNode={isHidden:!1},r}function Sd(r,s,a){return r=Sn(6,r,null,s),r.lanes=a,r}function Ad(r,s,a){return s=Sn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function QT(r,s,a,c,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jr(0),this.expirationTimes=Jr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Rd(r,s,a,c,d,m,v,R,N){return r=new QT(r,s,a,R,N),s===1?(s=1,m===!0&&(s|=8)):s=0,m=Sn(3,null,null,s),r.current=m,m.stateNode=r,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fh(m),r}function YT(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function Fg(r){if(!r)return ai;r=r._reactInternals;e:{if(xn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Jt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Jt(a))return fm(r,a,s)}return s}function Ug(r,s,a,c,d,m,v,R,N){return r=Rd(a,c,!0,r,d,m,v,R,N),r.context=Fg(null),a=r.current,c=Wt(),d=pi(a),m=Dr(c,d),m.callback=s??null,ci(a,m,d),r.current.lanes=d,Xr(r,d,c),en(r,c),r}function bu(r,s,a,c){var d=s.current,m=Wt(),v=pi(d);return a=Fg(a),s.context===null?s.context=a:s.pendingContext=a,s=Dr(m,v),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=ci(d,s,v),r!==null&&($n(r,d,v,m),du(r,d,v)),v}function Mu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Bg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Cd(r,s){Bg(r,s),(r=r.alternate)&&Bg(r,s)}function JT(){return null}var zg=typeof reportError=="function"?reportError:function(r){console.error(r)};function kd(r){this._internalRoot=r}Lu.prototype.render=kd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));bu(r,s,null,null)},Lu.prototype.unmount=kd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;hs(function(){bu(null,r,null,null)}),s[Cr]=null}};function Lu(r){this._internalRoot=r}Lu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Ll();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Zn.length&&s!==0&&s<Zn[a].priority;a++);Zn.splice(a,0,r),a===0&&Ul(r)}};function Pd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function ju(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function $g(){}function XT(r,s,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var U=Mu(v);m.call(U)}}var v=Ug(s,c,r,0,null,!1,!1,"",$g);return r._reactRootContainer=v,r[Cr]=v.current,Sa(r.nodeType===8?r.parentNode:r),hs(),v}for(;d=r.lastChild;)r.removeChild(d);if(typeof c=="function"){var R=c;c=function(){var U=Mu(N);R.call(U)}}var N=Rd(r,0,!1,null,null,!1,!1,"",$g);return r._reactRootContainer=N,r[Cr]=N.current,Sa(r.nodeType===8?r.parentNode:r),hs(function(){bu(s,N,a,c)}),N}function Fu(r,s,a,c,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var R=d;d=function(){var N=Mu(v);R.call(N)}}bu(s,v,r,d)}else v=XT(a,s,r,d,c);return Mu(v)}bl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Yr(s.pendingLanes);a!==0&&(Zr(s,a|1),en(s,qe()),(be&6)===0&&(Ao=qe()+500,li()))}break;case 13:hs(function(){var c=xr(r,1);if(c!==null){var d=Wt();$n(c,r,1,d)}}),Cd(r,1)}},Qs=function(r){if(r.tag===13){var s=xr(r,134217728);if(s!==null){var a=Wt();$n(s,r,134217728,a)}Cd(r,134217728)}},Ml=function(r){if(r.tag===13){var s=pi(r),a=xr(r,s);if(a!==null){var c=Wt();$n(a,r,s,c)}Cd(r,s)}},Ll=function(){return Ne},jl=function(r,s){var a=Ne;try{return Ne=r,s()}finally{Ne=a}},Us=function(r,s,a){switch(s){case"input":if(Qo(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var d=nu(c);if(!d)throw Error(t(90));Vs(c),Qo(c,d)}}}break;case"textarea":js(r,a);break;case"select":s=a.value,s!=null&&vr(r,!!a.multiple,s,!1)}},Hi=wd,sa=hs;var ZT={usingClientEntryPoint:!1,Events:[Ca,ho,nu,Jn,ia,wd]},Ba={findFiberByHostInstance:rs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},e0={bundleType:Ba.bundleType,version:Ba.version,rendererPackageName:Ba.rendererPackageName,rendererConfig:Ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:se.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=la(r),r===null?null:r.stateNode},findFiberByHostInstance:Ba.findFiberByHostInstance||JT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uu.isDisabled&&Uu.supportsFiber)try{Yi=Uu.inject(e0),on=Uu}catch{}}return tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZT,tn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pd(s))throw Error(t(200));return YT(r,s,null,a)},tn.createRoot=function(r,s){if(!Pd(r))throw Error(t(299));var a=!1,c="",d=zg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=Rd(r,1,!1,null,null,a,!1,c,d),r[Cr]=s.current,Sa(r.nodeType===8?r.parentNode:r),new kd(s)},tn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=la(s),r=r===null?null:r.stateNode,r},tn.flushSync=function(r){return hs(r)},tn.hydrate=function(r,s,a){if(!ju(s))throw Error(t(200));return Fu(null,r,s,!0,a)},tn.hydrateRoot=function(r,s,a){if(!Pd(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",v=zg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=Ug(s,null,r,1,a??null,d,!1,m,v),r[Cr]=s.current,Sa(r),c)for(r=0;r<c.length;r++)a=c[r],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new Lu(s)},tn.render=function(r,s,a){if(!ju(s))throw Error(t(200));return Fu(null,r,s,!1,a)},tn.unmountComponentAtNode=function(r){if(!ju(r))throw Error(t(40));return r._reactRootContainer?(hs(function(){Fu(null,null,r,!1,function(){r._reactRootContainer=null,r[Cr]=null})}),!0):!1},tn.unstable_batchedUpdates=wd,tn.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!ju(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Fu(r,s,a,!1,c)},tn.version="18.3.1-next-f1338f8080-20240426",tn}var Jg;function u0(){if(Jg)return Dd.exports;Jg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Dd.exports=l0(),Dd.exports}var Xg;function c0(){if(Xg)return Bu;Xg=1;var n=u0();return Bu.createRoot=n.createRoot,Bu.hydrateRoot=n.hydrateRoot,Bu}var h0=c0();const d0=G_(h0),f0=()=>{};var Zg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},p0=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],f=n[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const l=n[t++],h=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},Y_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,f=h?n[o+1]:0,g=o+2<n.length,y=g?n[o+2]:0,w=l>>2,S=(l&3)<<4|f>>4;let A=(f&15)<<2|y>>6,F=y&63;g||(F=64,h||(A=64)),i.push(t[w],t[S],t[A],t[F])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Q_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):p0(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const S=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||y==null||S==null)throw new m0;const A=l<<2|f>>4;if(i.push(A),y!==64){const F=f<<4&240|y>>2;if(i.push(F),S!==64){const q=y<<6&192|S;i.push(q)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class m0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const g0=function(n){const e=Q_(n);return Y_.encodeByteArray(e,!0)},oc=function(n){return g0(n).replace(/\./g,"")},J_=function(n){try{return Y_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0=()=>y0().__FIREBASE_DEFAULTS__,v0=()=>{if(typeof process>"u"||typeof Zg>"u")return;const n=Zg.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},w0=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&J_(n[1]);return e&&JSON.parse(e)},kc=()=>{try{return f0()||_0()||v0()||w0()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},X_=n=>{var e,t;return(t=(e=kc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Z_=n=>{const e=X_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},ev=()=>{var n;return(n=kc())===null||n===void 0?void 0:n.config},tv=n=>{var e;return(e=kc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Vf(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[oc(JSON.stringify(t)),oc(JSON.stringify(h)),""].join(".")}const Qa={};function T0(){const n={prod:[],emulator:[]};for(const e of Object.keys(Qa))Qa[e]?n.emulator.push(e):n.prod.push(e);return n}function I0(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ey=!1;function bf(n,e){if(typeof window>"u"||typeof document>"u"||!Cs(window.location.host)||Qa[n]===e||Qa[n]||ey)return;Qa[n]=e;function t(A){return`__firebase__banner__${A}`}const i="__firebase__banner",l=T0().prod.length>0;function h(){const A=document.getElementById(i);A&&A.remove()}function f(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function g(A,F){A.setAttribute("width","24"),A.setAttribute("id",F),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function y(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{ey=!0,h()},A}function w(A,F){A.setAttribute("id",F),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function S(){const A=I0(i),F=t("text"),q=document.getElementById(F)||document.createElement("span"),H=t("learnmore"),B=document.getElementById(H)||document.createElement("a"),ae=t("preprendIcon"),ue=document.getElementById(ae)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const ie=A.element;f(ie),w(B,H);const se=y();g(ue,ae),ie.append(ue,q,B,se),document.body.appendChild(ie)}l?(q.innerText="Preview backend disconnected.",ue.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ue.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,q.innerText="Preview backend running in this workspace."),q.setAttribute("id",F)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function S0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function A0(){var n;const e=(n=kc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function R0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function C0(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function k0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function P0(){const n=zt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function N0(){return!A0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rv(){try{return typeof indexedDB=="object"}catch{return!1}}function iv(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function x0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0="FirebaseError";class Qn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=D0,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ks.prototype.create)}}class ks{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?O0(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new Qn(o,f,i)}}function O0(n,e){return n.replace(V0,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const V0=/\{\$([^}]+)}/g;function b0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ws(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],h=e[o];if(ty(l)&&ty(h)){if(!ws(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function ty(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function $a(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function qa(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function M0(n,e){const t=new L0(n,e);return t.subscribe.bind(t)}class L0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");j0(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=bd),o.error===void 0&&(o.error=bd),o.complete===void 0&&(o.complete=bd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function j0(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function bd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(n){return n&&n._delegate?n._delegate:n}class kn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new E0;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(B0(e))try{this.getOrInitializeService({instanceIdentifier:ms})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ms){return this.instances.has(e)}getOptions(e=ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:U0(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ms){return this.component?this.component.multipleInstances?e:ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function U0(n){return n===ms?void 0:n}function B0(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new F0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ke||(ke={}));const $0={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},q0=ke.INFO,H0={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},W0=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=H0[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mf{constructor(e){this.name=e,this._logLevel=q0,this._logHandler=W0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const K0=(n,e)=>e.some(t=>n instanceof t);let ny,ry;function G0(){return ny||(ny=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Q0(){return ry||(ry=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sv=new WeakMap,Zd=new WeakMap,ov=new WeakMap,Md=new WeakMap,Lf=new WeakMap;function Y0(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t(Br(n.result)),o()},h=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&sv.set(t,n)}).catch(()=>{}),Lf.set(e,n),e}function J0(n){if(Zd.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});Zd.set(n,e)}let ef={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Zd.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ov.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Br(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function X0(n){ef=n(ef)}function Z0(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Ld(this),e,...t);return ov.set(i,e.sort?e.sort():[e]),Br(i)}:Q0().includes(n)?function(...e){return n.apply(Ld(this),e),Br(sv.get(this))}:function(...e){return Br(n.apply(Ld(this),e))}}function eI(n){return typeof n=="function"?Z0(n):(n instanceof IDBTransaction&&J0(n),K0(n,G0())?new Proxy(n,ef):n)}function Br(n){if(n instanceof IDBRequest)return Y0(n);if(Md.has(n))return Md.get(n);const e=eI(n);return e!==n&&(Md.set(n,e),Lf.set(e,n)),e}const Ld=n=>Lf.get(n);function Pc(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),f=Br(h);return i&&h.addEventListener("upgradeneeded",g=>{i(Br(h.result),g.oldVersion,g.newVersion,Br(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}function jd(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",i=>e(i.oldVersion,i)),Br(t).then(()=>{})}const tI=["get","getKey","getAll","getAllKeys","count"],nI=["put","add","delete","clear"],Fd=new Map;function iy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Fd.get(e))return Fd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=nI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||tI.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let y=g.store;return i&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&g.done]))[0]};return Fd.set(e,l),l}X0(n=>({...n,get:(e,t,i)=>iy(e,t)||n.get(e,t,i),has:(e,t)=>!!iy(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(iI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function iI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tf="@firebase/app",sy="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new Mf("@firebase/app"),sI="@firebase/app-compat",oI="@firebase/analytics-compat",aI="@firebase/analytics",lI="@firebase/app-check-compat",uI="@firebase/app-check",cI="@firebase/auth",hI="@firebase/auth-compat",dI="@firebase/database",fI="@firebase/data-connect",pI="@firebase/database-compat",mI="@firebase/functions",gI="@firebase/functions-compat",yI="@firebase/installations",_I="@firebase/installations-compat",vI="@firebase/messaging",wI="@firebase/messaging-compat",EI="@firebase/performance",TI="@firebase/performance-compat",II="@firebase/remote-config",SI="@firebase/remote-config-compat",AI="@firebase/storage",RI="@firebase/storage-compat",CI="@firebase/firestore",kI="@firebase/ai",PI="@firebase/firestore-compat",NI="firebase",xI="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf="[DEFAULT]",DI={[tf]:"fire-core",[sI]:"fire-core-compat",[aI]:"fire-analytics",[oI]:"fire-analytics-compat",[uI]:"fire-app-check",[lI]:"fire-app-check-compat",[cI]:"fire-auth",[hI]:"fire-auth-compat",[dI]:"fire-rtdb",[fI]:"fire-data-connect",[pI]:"fire-rtdb-compat",[mI]:"fire-fn",[gI]:"fire-fn-compat",[yI]:"fire-iid",[_I]:"fire-iid-compat",[vI]:"fire-fcm",[wI]:"fire-fcm-compat",[EI]:"fire-perf",[TI]:"fire-perf-compat",[II]:"fire-rc",[SI]:"fire-rc-compat",[AI]:"fire-gcs",[RI]:"fire-gcs-compat",[CI]:"fire-fst",[PI]:"fire-fst-compat",[kI]:"fire-vertex","fire-js":"fire-js",[NI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=new Map,OI=new Map,rf=new Map;function oy(n,e){try{n.container.addComponent(e)}catch(t){$r.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Wn(n){const e=n.name;if(rf.has(e))return $r.debug(`There were multiple attempts to register component ${e}.`),!1;rf.set(e,n);for(const t of ac.values())oy(t,n);for(const t of OI.values())oy(t,n);return!0}function Ps(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function fn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Si=new ks("app","Firebase",VI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Si.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=xI;function av(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:nf,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw Si.create("bad-app-name",{appName:String(o)});if(t||(t=ev()),!t)throw Si.create("no-options");const l=ac.get(o);if(l){if(ws(t,l.options)&&ws(i,l.config))return l;throw Si.create("duplicate-app",{appName:o})}const h=new z0(o);for(const g of rf.values())h.addComponent(g);const f=new bI(t,i,h);return ac.set(o,f),f}function Nc(n=nf){const e=ac.get(n);if(!e&&n===nf&&ev())return av();if(!e)throw Si.create("no-app",{appName:n});return e}function sn(n,e,t){var i;let o=(i=DI[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$r.warn(f.join(" "));return}Wn(new kn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI="firebase-heartbeat-database",LI=1,tl="firebase-heartbeat-store";let Ud=null;function lv(){return Ud||(Ud=Pc(MI,LI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(tl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Si.create("idb-open",{originalErrorMessage:n.message})})),Ud}async function jI(n){try{const t=(await lv()).transaction(tl),i=await t.objectStore(tl).get(uv(n));return await t.done,i}catch(e){if(e instanceof Qn)$r.warn(e.message);else{const t=Si.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$r.warn(t.message)}}}async function ay(n,e){try{const i=(await lv()).transaction(tl,"readwrite");await i.objectStore(tl).put(e,uv(n)),await i.done}catch(t){if(t instanceof Qn)$r.warn(t.message);else{const i=Si.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});$r.warn(i.message)}}}function uv(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=1024,UI=30;class BI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $I(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=ly();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>UI){const h=qI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){$r.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ly(),{heartbeatsToSend:i,unsentEntries:o}=zI(this._heartbeatsCache.heartbeats),l=oc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return $r.warn(t),""}}}function ly(){return new Date().toISOString().substring(0,10)}function zI(n,e=FI){const t=[];let i=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),uy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),uy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class $I{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rv()?iv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await jI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ay(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ay(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function uy(n){return oc(JSON.stringify({version:2,heartbeats:n})).length}function qI(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(n){Wn(new kn("platform-logger",e=>new rI(e),"PRIVATE")),Wn(new kn("heartbeat",e=>new BI(e),"PRIVATE")),sn(tf,sy,n),sn(tf,sy,"esm2017"),sn("fire-js","")}HI("");function jf(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function cv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WI=cv,hv=new ks("auth","Firebase",cv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new Mf("@firebase/auth");function KI(n,...e){lc.logLevel<=ke.WARN&&lc.warn(`Auth (${Ns}): ${n}`,...e)}function Qu(n,...e){lc.logLevel<=ke.ERROR&&lc.error(`Auth (${Ns}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(n,...e){throw Ff(n,...e)}function lr(n,...e){return Ff(n,...e)}function dv(n,e,t){const i=Object.assign(Object.assign({},WI()),{[e]:t});return new ks("auth","Firebase",i).create(e,{appName:n.name})}function zr(n){return dv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ff(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return hv.create(n,...e)}function _e(n,e,...t){if(!n)throw Ff(e,...t)}function Lr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Qu(e),new Error(e)}function qr(n,e){n||Lr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function GI(){return cy()==="http:"||cy()==="https:"}function cy(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GI()||C0()||"connection"in navigator)?navigator.onLine:!0}function YI(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,t){this.shortDelay=e,this.longDelay=t,qr(t>e,"Short delay should be less than long delay!"),this.isMobile=S0()||k0()}get(){return QI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(n,e){qr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Lr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Lr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Lr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ZI=new ml(3e4,6e4);function Mi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Li(n,e,t,i,o={}){return pv(n,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=pl(Object.assign({key:n.config.apiKey},h)).slice(1),g=await n._getAdditionalHeaders();g["Content-Type"]="application/json",n.languageCode&&(g["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:g},l);return R0()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&Cs(n.emulatorConfig.host)&&(y.credentials="include"),fv.fetch()(await mv(n,n.config.apiHost,t,f),y)})}async function pv(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},JI),e);try{const o=new tS(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw zu(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,y]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw zu(n,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw zu(n,"email-already-in-use",h);if(g==="USER_DISABLED")throw zu(n,"user-disabled",h);const w=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw dv(n,w,y);Kn(n,w)}}catch(o){if(o instanceof Qn)throw o;Kn(n,"network-request-failed",{message:String(o)})}}async function gl(n,e,t,i,o={}){const l=await Li(n,e,t,i,o);return"mfaPendingCredential"in l&&Kn(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function mv(n,e,t,i){const o=`${e}${t}?${i}`,l=n,h=l.config.emulator?Uf(n.config,o):`${n.config.apiScheme}://${o}`;return XI.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function eS(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(lr(this.auth,"network-request-failed")),ZI.get())})}}function zu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=lr(n,e,i);return o.customData._tokenResponse=t,o}function hy(n){return n!==void 0&&n.enterprise!==void 0}class nS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return eS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function rS(n,e){return Li(n,"GET","/v2/recaptchaConfig",Mi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iS(n,e){return Li(n,"POST","/v1/accounts:delete",e)}async function uc(n,e){return Li(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sS(n,e=!1){const t=et(n),i=await t.getIdToken(e),o=Bf(i);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:Ya(Bd(o.auth_time)),issuedAtTime:Ya(Bd(o.iat)),expirationTime:Ya(Bd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Bd(n){return Number(n)*1e3}function Bf(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Qu("JWT malformed, contained fewer than 3 sections"),null;try{const o=J_(t);return o?JSON.parse(o):(Qu("Failed to decode base64 JWT payload"),null)}catch(o){return Qu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function dy(n){const e=Bf(n);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Qn&&oS(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function oS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ya(this.lastLoginAt),this.creationTime=Ya(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await nl(n,uc(t,{idToken:i}));_e(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?gv(l.providerUserInfo):[],f=uS(n.providerData,h),g=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(f!=null&&f.length),w=g?y:!1,S={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new of(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(n,S)}async function lS(n){const e=et(n);await cc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uS(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function gv(n){return n.map(e=>{var{providerId:t}=e,i=jf(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cS(n,e){const t=await pv(n,{},async()=>{const i=pl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=await mv(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:i};return n.emulatorConfig&&Cs(n.emulatorConfig.host)&&(g.credentials="include"),fv.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function hS(n,e){return Li(n,"POST","/v2/accounts:revokeToken",Mi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=dy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await cS(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new Do;return i&&(_e(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(_e(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Do,this.toJSON())}_performRefresh(){return Lr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(n,e){_e(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class qn{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=jf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new of(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await nl(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return sS(this,e)}reload(){return lS(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await cc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fn(this.auth.app))return Promise.reject(zr(this.auth));const e=await this.getIdToken();return await nl(this,iS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,f,g,y,w;const S=(i=t.displayName)!==null&&i!==void 0?i:void 0,A=(o=t.email)!==null&&o!==void 0?o:void 0,F=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,q=(h=t.photoURL)!==null&&h!==void 0?h:void 0,H=(f=t.tenantId)!==null&&f!==void 0?f:void 0,B=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,ae=(y=t.createdAt)!==null&&y!==void 0?y:void 0,ue=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ie,emailVerified:se,isAnonymous:xe,providerData:$,stsTokenManager:k}=t;_e(ie&&k,e,"internal-error");const I=Do.fromJSON(this.name,k);_e(typeof ie=="string",e,"internal-error"),_i(S,e.name),_i(A,e.name),_e(typeof se=="boolean",e,"internal-error"),_e(typeof xe=="boolean",e,"internal-error"),_i(F,e.name),_i(q,e.name),_i(H,e.name),_i(B,e.name),_i(ae,e.name),_i(ue,e.name);const C=new qn({uid:ie,auth:e,email:A,emailVerified:se,displayName:S,isAnonymous:xe,photoURL:q,phoneNumber:F,tenantId:H,stsTokenManager:I,createdAt:ae,lastLoginAt:ue});return $&&Array.isArray($)&&(C.providerData=$.map(x=>Object.assign({},x))),B&&(C._redirectEventId=B),C}static async _fromIdTokenResponse(e,t,i=!1){const o=new Do;o.updateFromServerResponse(t);const l=new qn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await cc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?gv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Do;f.updateFromIdToken(i);const g=new qn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new of(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,y),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=new Map;function jr(n){qr(n instanceof Function,"Expected a class definition");let e=fy.get(n);return e?(qr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,fy.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}yv.type="NONE";const py=yv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(n,e,t){return`firebase:${n}:${e}:${t}`}class Oo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Yu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Yu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await uc(this.auth,{idToken:e}).catch(()=>{});return t?qn._fromGetAccountInfoResponse(this.auth,t,e):null}return qn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Oo(jr(py),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||jr(py);const h=Yu(i,e.config.apiKey,e.name);let f=null;for(const y of t)try{const w=await y._get(h);if(w){let S;if(typeof w=="string"){const A=await uc(e,{idToken:w}).catch(()=>{});if(!A)break;S=await qn._fromGetAccountInfoResponse(e,A,w)}else S=qn._fromJSON(e,w);y!==l&&(f=S),l=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new Oo(l,e,i):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new Oo(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ev(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_v(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Iv(e))return"Blackberry";if(Sv(e))return"Webos";if(vv(e))return"Safari";if((e.includes("chrome/")||wv(e))&&!e.includes("edge/"))return"Chrome";if(Tv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function _v(n=zt()){return/firefox\//i.test(n)}function vv(n=zt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wv(n=zt()){return/crios\//i.test(n)}function Ev(n=zt()){return/iemobile/i.test(n)}function Tv(n=zt()){return/android/i.test(n)}function Iv(n=zt()){return/blackberry/i.test(n)}function Sv(n=zt()){return/webos/i.test(n)}function zf(n=zt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function dS(n=zt()){var e;return zf(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fS(){return P0()&&document.documentMode===10}function Av(n=zt()){return zf(n)||Tv(n)||Sv(n)||Iv(n)||/windows phone/i.test(n)||Ev(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(n,e=[]){let t;switch(n){case"Browser":t=my(zt());break;case"Worker":t=`${my(zt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ns}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mS(n,e={}){return Li(n,"GET","/v2/passwordPolicy",Mi(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=6;class yS{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:gS,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,f;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(i=g.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(f=g.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),g}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gy(this),this.idTokenSubscription=new gy(this),this.beforeStateQueue=new pS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=jr(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await Oo.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await uc(this,{idToken:e}),i=await qn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(fn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&(g!=null&&g.user)&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await cc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fn(this.app))return Promise.reject(zr(this));const t=e?et(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fn(this.app)?Promise.reject(zr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fn(this.app)?Promise.reject(zr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mS(this),t=new yS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ks("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await hS(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&jr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await Oo.create(this,[jr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,i,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(fn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&KI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function xs(n){return et(n)}class gy{constructor(e){this.auth=e,this.observer=null,this.addObserver=M0(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vS(n){xc=n}function Cv(n){return xc.loadJS(n)}function wS(){return xc.recaptchaEnterpriseScript}function ES(){return xc.gapiScript}function TS(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class IS{constructor(){this.enterprise=new SS}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class SS{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const AS="recaptcha-enterprise",kv="NO_RECAPTCHA";class RS{constructor(e){this.type=AS,this.auth=xs(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{rS(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const y=new nS(g);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,h(y.siteKey)}}).catch(g=>{f(g)})})}function o(l,h,f){const g=window.grecaptcha;hy(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(y=>{h(y)}).catch(()=>{h(kv)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new IS().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{i(this.auth).then(f=>{if(!t&&hy(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=wS();g.length!==0&&(g+=f),Cv(g).then(()=>{o(f,l,h)}).catch(y=>{h(y)})}}).catch(f=>{h(f)})})}}async function yy(n,e,t,i=!1,o=!1){const l=new RS(n);let h;if(o)h=kv;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,y=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function af(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await yy(n,e,t,t==="getOobCode");return i(n,h)}else return i(n,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await yy(n,e,t,t==="getOobCode");return i(n,f)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(n,e){const t=Ps(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(ws(l,e??{}))return o;Kn(o,"already-initialized")}return t.initialize({options:e})}function kS(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(jr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function PS(n,e,t){const i=xs(n);_e(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=Pv(e),{host:h,port:f}=NS(e),g=f===null?"":`:${f}`,y={url:`${l}//${h}${g}/`},w=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){_e(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),_e(ws(y,i.config.emulator)&&ws(w,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=w,i.settings.appVerificationDisabledForTesting=!0,Cs(h)?(Vf(`${l}//${h}${g}`),bf("Auth",!0)):xS()}function Pv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function NS(n){const e=Pv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:_y(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:_y(h)}}}function _y(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function xS(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Lr("not implemented")}_getIdTokenResponse(e){return Lr("not implemented")}_linkToIdToken(e,t){return Lr("not implemented")}_getReauthenticationResolver(e){return Lr("not implemented")}}async function DS(n,e){return Li(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(n,e){return gl(n,"POST","/v1/accounts:signInWithPassword",Mi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VS(n,e){return gl(n,"POST","/v1/accounts:signInWithEmailLink",Mi(n,e))}async function bS(n,e){return gl(n,"POST","/v1/accounts:signInWithEmailLink",Mi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl extends $f{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new rl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new rl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return af(e,t,"signInWithPassword",OS);case"emailLink":return VS(e,{email:this._email,oobCode:this._password});default:Kn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return af(e,i,"signUpPassword",DS);case"emailLink":return bS(e,{idToken:t,email:this._email,oobCode:this._password});default:Kn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(n,e){return gl(n,"POST","/v1/accounts:signInWithIdp",Mi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS="http://localhost";class Es extends $f{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Kn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=jf(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new Es(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Vo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Vo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Vo(e,t)}buildRequest(){const e={requestUri:MS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=pl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jS(n){const e=$a(qa(n)).link,t=e?$a(qa(e)).deep_link_id:null,i=$a(qa(n)).deep_link_id;return(i?$a(qa(i)).link:null)||i||t||e||n}class qf{constructor(e){var t,i,o,l,h,f;const g=$a(qa(e)),y=(t=g.apiKey)!==null&&t!==void 0?t:null,w=(i=g.oobCode)!==null&&i!==void 0?i:null,S=LS((o=g.mode)!==null&&o!==void 0?o:null);_e(y&&w&&S,"argument-error"),this.apiKey=y,this.operation=S,this.code=w,this.continueUrl=(l=g.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=g.lang)!==null&&h!==void 0?h:null,this.tenantId=(f=g.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=jS(e);try{return new qf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this.providerId=zo.PROVIDER_ID}static credential(e,t){return rl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=qf.parseLink(t);return _e(i,"argument-error"),rl._fromEmailAndCode(e,i.code,i.tenantId)}}zo.PROVIDER_ID="password";zo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends Nv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends yl{constructor(){super("facebook.com")}static credential(e){return Es._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vi.credential(e.oauthAccessToken)}catch{return null}}}vi.FACEBOOK_SIGN_IN_METHOD="facebook.com";vi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends yl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Es._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return wi.credential(t,i)}catch{return null}}}wi.GOOGLE_SIGN_IN_METHOD="google.com";wi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends yl{constructor(){super("github.com")}static credential(e){return Es._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ei.credential(e.oauthAccessToken)}catch{return null}}}Ei.GITHUB_SIGN_IN_METHOD="github.com";Ei.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends yl{constructor(){super("twitter.com")}static credential(e,t){return Es._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ti.credential(t,i)}catch{return null}}}Ti.TWITTER_SIGN_IN_METHOD="twitter.com";Ti.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FS(n,e){return gl(n,"POST","/v1/accounts:signUp",Mi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await qn._fromIdTokenResponse(e,i,o),h=vy(i);return new Ts({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=vy(i);return new Ts({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function vy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends Qn{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,hc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new hc(e,t,i,o)}}function xv(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?hc._fromErrorAndOperation(n,l,e,i):l})}async function US(n,e,t=!1){const i=await nl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ts._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BS(n,e,t=!1){const{auth:i}=n;if(fn(i.app))return Promise.reject(zr(i));const o="reauthenticate";try{const l=await nl(n,xv(i,o,e,n),t);_e(l.idToken,i,"internal-error");const h=Bf(l.idToken);_e(h,i,"internal-error");const{sub:f}=h;return _e(n.uid===f,i,"user-mismatch"),Ts._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Kn(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dv(n,e,t=!1){if(fn(n.app))return Promise.reject(zr(n));const i="signIn",o=await xv(n,i,e),l=await Ts._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function zS(n,e){return Dv(xs(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ov(n){const e=xs(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $S(n,e,t){if(fn(n.app))return Promise.reject(zr(n));const i=xs(n),h=await af(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",FS).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&Ov(n),g}),f=await Ts._fromIdTokenResponse(i,"signIn",h);return await i._updateCurrentUser(f.user),f}function qS(n,e,t){return fn(n.app)?Promise.reject(zr(n)):zS(et(n),zo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Ov(n),i})}function HS(n,e,t,i){return et(n).onIdTokenChanged(e,t,i)}function WS(n,e,t){return et(n).beforeAuthStateChanged(e,t)}function KS(n,e,t,i){return et(n).onAuthStateChanged(e,t,i)}function lf(n){return et(n).signOut()}async function wy(n){return et(n).delete()}const dc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(dc,"1"),this.storage.removeItem(dc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS=1e3,QS=10;class bv extends Vv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Av(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);fS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,QS):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},GS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bv.type="LOCAL";const YS=bv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv extends Vv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Mv.type="SESSION";const Lv=Mv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Dc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async y=>y(t.origin,l)),g=await JS(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const y=Hf("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(S){const A=S;if(A.data.eventId===y)switch(A.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(A.data.response);break;default:clearTimeout(w),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(){return window}function ZS(n){ur().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(){return typeof ur().WorkerGlobalScope<"u"&&typeof ur().importScripts=="function"}async function eA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function nA(){return jv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv="firebaseLocalStorageDb",rA=1,fc="firebaseLocalStorage",Uv="fbase_key";class _l{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Oc(n,e){return n.transaction([fc],e?"readwrite":"readonly").objectStore(fc)}function iA(){const n=indexedDB.deleteDatabase(Fv);return new _l(n).toPromise()}function uf(){const n=indexedDB.open(Fv,rA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(fc,{keyPath:Uv})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(fc)?e(i):(i.close(),await iA(),e(await uf()))})})}async function Ey(n,e,t){const i=Oc(n,!0).put({[Uv]:e,value:t});return new _l(i).toPromise()}async function sA(n,e){const t=Oc(n,!1).get(e),i=await new _l(t).toPromise();return i===void 0?null:i.value}function Ty(n,e){const t=Oc(n,!0).delete(e);return new _l(t).toPromise()}const oA=800,aA=3;class Bv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>aA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dc._getInstance(nA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await eA(),!this.activeServiceWorker)return;this.sender=new XS(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uf();return await Ey(e,dc,"1"),await Ty(e,dc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ey(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>sA(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ty(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Oc(o,!1).getAll();return new _l(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bv.type="LOCAL";const lA=Bv;new ml(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(n,e){return e?jr(e):(_e(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf extends $f{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Vo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Vo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function cA(n){return Dv(n.auth,new Wf(n),n.bypassAuthState)}function hA(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),BS(t,new Wf(n),n.bypassAuthState)}async function dA(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),US(t,new Wf(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cA;case"linkViaPopup":case"linkViaRedirect":return dA;case"reauthViaPopup":case"reauthViaRedirect":return hA;default:Kn(this.auth,"internal-error")}}resolve(e){qr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=new ml(2e3,1e4);class xo extends zv{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,xo.currentPopupAction&&xo.currentPopupAction.cancel(),xo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){qr(this.filter.length===1,"Popup operations only handle one event");const e=Hf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(lr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(lr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fA.get())};e()}}xo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA="pendingRedirect",Ju=new Map;class mA extends zv{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Ju.get(this.auth._key());if(!e){try{const i=await gA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Ju.set(this.auth._key(),e)}return this.bypassAuthState||Ju.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gA(n,e){const t=vA(e),i=_A(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function yA(n,e){Ju.set(n._key(),e)}function _A(n){return jr(n._redirectPersistence)}function vA(n){return Yu(pA,n.config.apiKey,n.name)}async function wA(n,e,t=!1){if(fn(n.app))return Promise.reject(zr(n));const i=xs(n),o=uA(i,e),h=await new mA(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=600*1e3;class TA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!$v(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(lr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=EA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Iy(e))}saveEventToCache(e){this.cachedEventUids.add(Iy(e)),this.lastProcessedEventTime=Date.now()}}function Iy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function $v({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function IA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $v(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA(n,e={}){return Li(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RA=/^https?/;async function CA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await SA(n);for(const t of e)try{if(kA(t))return}catch{}Kn(n,"unauthorized-domain")}function kA(n){const e=sf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!RA.test(t))return!1;if(AA.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=new ml(3e4,6e4);function Sy(){const n=ur().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function NA(n){return new Promise((e,t)=>{var i,o,l;function h(){Sy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sy(),t(lr(n,"network-request-failed"))},timeout:PA.get()})}if(!((o=(i=ur().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=ur().gapi)===null||l===void 0)&&l.load)h();else{const f=TS("iframefcb");return ur()[f]=()=>{gapi.load?h():t(lr(n,"network-request-failed"))},Cv(`${ES()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw Xu=null,e})}let Xu=null;function xA(n){return Xu=Xu||NA(n),Xu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=new ml(5e3,15e3),OA="__/auth/iframe",VA="emulator/auth/iframe",bA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LA(n){const e=n.config;_e(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Uf(e,VA):`https://${n.config.authDomain}/${OA}`,i={apiKey:e.apiKey,appName:n.name,v:Ns},o=MA.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${pl(i).slice(1)}`}async function jA(n){const e=await xA(n),t=ur().gapi;return _e(t,n,"internal-error"),e.open({where:document.body,url:LA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bA,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=lr(n,"network-request-failed"),f=ur().setTimeout(()=>{l(h)},DA.get());function g(){ur().clearTimeout(f),o(i)}i.ping(g).then(g,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UA=500,BA=600,zA="_blank",$A="http://localhost";class Ay{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qA(n,e,t,i=UA,o=BA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const g=Object.assign(Object.assign({},FA),{width:i.toString(),height:o.toString(),top:l,left:h}),y=zt().toLowerCase();t&&(f=wv(y)?zA:t),_v(y)&&(e=e||$A,g.scrollbars="yes");const w=Object.entries(g).reduce((A,[F,q])=>`${A}${F}=${q},`,"");if(dS(y)&&f!=="_self")return HA(e||"",f),new Ay(null);const S=window.open(e||"",f,w);_e(S,n,"popup-blocked");try{S.focus()}catch{}return new Ay(S)}function HA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA="__/auth/handler",KA="emulator/auth/handler",GA=encodeURIComponent("fac");async function Ry(n,e,t,i,o,l){_e(n.config.authDomain,n,"auth-domain-config-required"),_e(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Ns,eventId:o};if(e instanceof Nv){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",b0(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,S]of Object.entries({}))h[w]=S}if(e instanceof yl){const w=e.getScopes().filter(S=>S!=="");w.length>0&&(h.scopes=w.join(","))}n.tenantId&&(h.tid=n.tenantId);const f=h;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const g=await n._getAppCheckToken(),y=g?`#${GA}=${encodeURIComponent(g)}`:"";return`${QA(n)}?${pl(f).slice(1)}${y}`}function QA({config:n}){return n.emulator?Uf(n,KA):`https://${n.authDomain}/${WA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd="webStorageSupport";class YA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lv,this._completeRedirectFn=wA,this._overrideRedirectResult=yA}async _openPopup(e,t,i,o){var l;qr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await Ry(e,t,i,sf(),o);return qA(e,h,Hf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await Ry(e,t,i,sf(),o);return ZS(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(qr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await jA(e),i=new TA(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(zd,{type:zd},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[zd];h!==void 0&&t(!!h),Kn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=CA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Av()||vv()||zf()}}const JA=YA;var Cy="@firebase/auth",ky="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function e1(n){Wn(new kn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const g={apiKey:h,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rv(n)},y=new _S(i,o,l,g);return kS(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Wn(new kn("auth-internal",e=>{const t=xs(e.getProvider("auth").getImmediate());return(i=>new XA(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(Cy,ky,ZA(n)),sn(Cy,ky,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1=300,n1=tv("authIdTokenMaxAge")||t1;let Py=null;const r1=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>n1)return;const o=t==null?void 0:t.token;Py!==o&&(Py=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function i1(n=Nc()){const e=Ps(n,"auth");if(e.isInitialized())return e.getImmediate();const t=CS(n,{popupRedirectResolver:JA,persistence:[lA,YS,Lv]}),i=tv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=r1(l.toString());WS(t,h,()=>h(t.currentUser)),HS(t,f=>h(f))}}const o=X_("auth");return o&&PS(t,`http://${o}`),t}function s1(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}vS({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=lr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",s1().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});e1("Browser");var Ny=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ai,qv;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,I){function C(){}C.prototype=I.prototype,k.D=I.prototype,k.prototype=new C,k.prototype.constructor=k,k.C=function(x,O,V){for(var P=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)P[rt-2]=arguments[rt];return I.prototype[O].apply(x,P)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,I,C){C||(C=0);var x=Array(16);if(typeof I=="string")for(var O=0;16>O;++O)x[O]=I.charCodeAt(C++)|I.charCodeAt(C++)<<8|I.charCodeAt(C++)<<16|I.charCodeAt(C++)<<24;else for(O=0;16>O;++O)x[O]=I[C++]|I[C++]<<8|I[C++]<<16|I[C++]<<24;I=k.g[0],C=k.g[1],O=k.g[2];var V=k.g[3],P=I+(V^C&(O^V))+x[0]+3614090360&4294967295;I=C+(P<<7&4294967295|P>>>25),P=V+(O^I&(C^O))+x[1]+3905402710&4294967295,V=I+(P<<12&4294967295|P>>>20),P=O+(C^V&(I^C))+x[2]+606105819&4294967295,O=V+(P<<17&4294967295|P>>>15),P=C+(I^O&(V^I))+x[3]+3250441966&4294967295,C=O+(P<<22&4294967295|P>>>10),P=I+(V^C&(O^V))+x[4]+4118548399&4294967295,I=C+(P<<7&4294967295|P>>>25),P=V+(O^I&(C^O))+x[5]+1200080426&4294967295,V=I+(P<<12&4294967295|P>>>20),P=O+(C^V&(I^C))+x[6]+2821735955&4294967295,O=V+(P<<17&4294967295|P>>>15),P=C+(I^O&(V^I))+x[7]+4249261313&4294967295,C=O+(P<<22&4294967295|P>>>10),P=I+(V^C&(O^V))+x[8]+1770035416&4294967295,I=C+(P<<7&4294967295|P>>>25),P=V+(O^I&(C^O))+x[9]+2336552879&4294967295,V=I+(P<<12&4294967295|P>>>20),P=O+(C^V&(I^C))+x[10]+4294925233&4294967295,O=V+(P<<17&4294967295|P>>>15),P=C+(I^O&(V^I))+x[11]+2304563134&4294967295,C=O+(P<<22&4294967295|P>>>10),P=I+(V^C&(O^V))+x[12]+1804603682&4294967295,I=C+(P<<7&4294967295|P>>>25),P=V+(O^I&(C^O))+x[13]+4254626195&4294967295,V=I+(P<<12&4294967295|P>>>20),P=O+(C^V&(I^C))+x[14]+2792965006&4294967295,O=V+(P<<17&4294967295|P>>>15),P=C+(I^O&(V^I))+x[15]+1236535329&4294967295,C=O+(P<<22&4294967295|P>>>10),P=I+(O^V&(C^O))+x[1]+4129170786&4294967295,I=C+(P<<5&4294967295|P>>>27),P=V+(C^O&(I^C))+x[6]+3225465664&4294967295,V=I+(P<<9&4294967295|P>>>23),P=O+(I^C&(V^I))+x[11]+643717713&4294967295,O=V+(P<<14&4294967295|P>>>18),P=C+(V^I&(O^V))+x[0]+3921069994&4294967295,C=O+(P<<20&4294967295|P>>>12),P=I+(O^V&(C^O))+x[5]+3593408605&4294967295,I=C+(P<<5&4294967295|P>>>27),P=V+(C^O&(I^C))+x[10]+38016083&4294967295,V=I+(P<<9&4294967295|P>>>23),P=O+(I^C&(V^I))+x[15]+3634488961&4294967295,O=V+(P<<14&4294967295|P>>>18),P=C+(V^I&(O^V))+x[4]+3889429448&4294967295,C=O+(P<<20&4294967295|P>>>12),P=I+(O^V&(C^O))+x[9]+568446438&4294967295,I=C+(P<<5&4294967295|P>>>27),P=V+(C^O&(I^C))+x[14]+3275163606&4294967295,V=I+(P<<9&4294967295|P>>>23),P=O+(I^C&(V^I))+x[3]+4107603335&4294967295,O=V+(P<<14&4294967295|P>>>18),P=C+(V^I&(O^V))+x[8]+1163531501&4294967295,C=O+(P<<20&4294967295|P>>>12),P=I+(O^V&(C^O))+x[13]+2850285829&4294967295,I=C+(P<<5&4294967295|P>>>27),P=V+(C^O&(I^C))+x[2]+4243563512&4294967295,V=I+(P<<9&4294967295|P>>>23),P=O+(I^C&(V^I))+x[7]+1735328473&4294967295,O=V+(P<<14&4294967295|P>>>18),P=C+(V^I&(O^V))+x[12]+2368359562&4294967295,C=O+(P<<20&4294967295|P>>>12),P=I+(C^O^V)+x[5]+4294588738&4294967295,I=C+(P<<4&4294967295|P>>>28),P=V+(I^C^O)+x[8]+2272392833&4294967295,V=I+(P<<11&4294967295|P>>>21),P=O+(V^I^C)+x[11]+1839030562&4294967295,O=V+(P<<16&4294967295|P>>>16),P=C+(O^V^I)+x[14]+4259657740&4294967295,C=O+(P<<23&4294967295|P>>>9),P=I+(C^O^V)+x[1]+2763975236&4294967295,I=C+(P<<4&4294967295|P>>>28),P=V+(I^C^O)+x[4]+1272893353&4294967295,V=I+(P<<11&4294967295|P>>>21),P=O+(V^I^C)+x[7]+4139469664&4294967295,O=V+(P<<16&4294967295|P>>>16),P=C+(O^V^I)+x[10]+3200236656&4294967295,C=O+(P<<23&4294967295|P>>>9),P=I+(C^O^V)+x[13]+681279174&4294967295,I=C+(P<<4&4294967295|P>>>28),P=V+(I^C^O)+x[0]+3936430074&4294967295,V=I+(P<<11&4294967295|P>>>21),P=O+(V^I^C)+x[3]+3572445317&4294967295,O=V+(P<<16&4294967295|P>>>16),P=C+(O^V^I)+x[6]+76029189&4294967295,C=O+(P<<23&4294967295|P>>>9),P=I+(C^O^V)+x[9]+3654602809&4294967295,I=C+(P<<4&4294967295|P>>>28),P=V+(I^C^O)+x[12]+3873151461&4294967295,V=I+(P<<11&4294967295|P>>>21),P=O+(V^I^C)+x[15]+530742520&4294967295,O=V+(P<<16&4294967295|P>>>16),P=C+(O^V^I)+x[2]+3299628645&4294967295,C=O+(P<<23&4294967295|P>>>9),P=I+(O^(C|~V))+x[0]+4096336452&4294967295,I=C+(P<<6&4294967295|P>>>26),P=V+(C^(I|~O))+x[7]+1126891415&4294967295,V=I+(P<<10&4294967295|P>>>22),P=O+(I^(V|~C))+x[14]+2878612391&4294967295,O=V+(P<<15&4294967295|P>>>17),P=C+(V^(O|~I))+x[5]+4237533241&4294967295,C=O+(P<<21&4294967295|P>>>11),P=I+(O^(C|~V))+x[12]+1700485571&4294967295,I=C+(P<<6&4294967295|P>>>26),P=V+(C^(I|~O))+x[3]+2399980690&4294967295,V=I+(P<<10&4294967295|P>>>22),P=O+(I^(V|~C))+x[10]+4293915773&4294967295,O=V+(P<<15&4294967295|P>>>17),P=C+(V^(O|~I))+x[1]+2240044497&4294967295,C=O+(P<<21&4294967295|P>>>11),P=I+(O^(C|~V))+x[8]+1873313359&4294967295,I=C+(P<<6&4294967295|P>>>26),P=V+(C^(I|~O))+x[15]+4264355552&4294967295,V=I+(P<<10&4294967295|P>>>22),P=O+(I^(V|~C))+x[6]+2734768916&4294967295,O=V+(P<<15&4294967295|P>>>17),P=C+(V^(O|~I))+x[13]+1309151649&4294967295,C=O+(P<<21&4294967295|P>>>11),P=I+(O^(C|~V))+x[4]+4149444226&4294967295,I=C+(P<<6&4294967295|P>>>26),P=V+(C^(I|~O))+x[11]+3174756917&4294967295,V=I+(P<<10&4294967295|P>>>22),P=O+(I^(V|~C))+x[2]+718787259&4294967295,O=V+(P<<15&4294967295|P>>>17),P=C+(V^(O|~I))+x[9]+3951481745&4294967295,k.g[0]=k.g[0]+I&4294967295,k.g[1]=k.g[1]+(O+(P<<21&4294967295|P>>>11))&4294967295,k.g[2]=k.g[2]+O&4294967295,k.g[3]=k.g[3]+V&4294967295}i.prototype.u=function(k,I){I===void 0&&(I=k.length);for(var C=I-this.blockSize,x=this.B,O=this.h,V=0;V<I;){if(O==0)for(;V<=C;)o(this,k,V),V+=this.blockSize;if(typeof k=="string"){for(;V<I;)if(x[O++]=k.charCodeAt(V++),O==this.blockSize){o(this,x),O=0;break}}else for(;V<I;)if(x[O++]=k[V++],O==this.blockSize){o(this,x),O=0;break}}this.h=O,this.o+=I},i.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var I=1;I<k.length-8;++I)k[I]=0;var C=8*this.o;for(I=k.length-8;I<k.length;++I)k[I]=C&255,C/=256;for(this.u(k),k=Array(16),I=C=0;4>I;++I)for(var x=0;32>x;x+=8)k[C++]=this.g[I]>>>x&255;return k};function l(k,I){var C=f;return Object.prototype.hasOwnProperty.call(C,k)?C[k]:C[k]=I(k)}function h(k,I){this.h=I;for(var C=[],x=!0,O=k.length-1;0<=O;O--){var V=k[O]|0;x&&V==I||(C[O]=V,x=!1)}this.g=C}var f={};function g(k){return-128<=k&&128>k?l(k,function(I){return new h([I|0],0>I?-1:0)}):new h([k|0],0>k?-1:0)}function y(k){if(isNaN(k)||!isFinite(k))return S;if(0>k)return B(y(-k));for(var I=[],C=1,x=0;k>=C;x++)I[x]=k/C|0,C*=4294967296;return new h(I,0)}function w(k,I){if(k.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(k.charAt(0)=="-")return B(w(k.substring(1),I));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=y(Math.pow(I,8)),x=S,O=0;O<k.length;O+=8){var V=Math.min(8,k.length-O),P=parseInt(k.substring(O,O+V),I);8>V?(V=y(Math.pow(I,V)),x=x.j(V).add(y(P))):(x=x.j(C),x=x.add(y(P)))}return x}var S=g(0),A=g(1),F=g(16777216);n=h.prototype,n.m=function(){if(H(this))return-B(this).m();for(var k=0,I=1,C=0;C<this.g.length;C++){var x=this.i(C);k+=(0<=x?x:4294967296+x)*I,I*=4294967296}return k},n.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(q(this))return"0";if(H(this))return"-"+B(this).toString(k);for(var I=y(Math.pow(k,6)),C=this,x="";;){var O=se(C,I).g;C=ae(C,O.j(I));var V=((0<C.g.length?C.g[0]:C.h)>>>0).toString(k);if(C=O,q(C))return V+x;for(;6>V.length;)V="0"+V;x=V+x}},n.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function q(k){if(k.h!=0)return!1;for(var I=0;I<k.g.length;I++)if(k.g[I]!=0)return!1;return!0}function H(k){return k.h==-1}n.l=function(k){return k=ae(this,k),H(k)?-1:q(k)?0:1};function B(k){for(var I=k.g.length,C=[],x=0;x<I;x++)C[x]=~k.g[x];return new h(C,~k.h).add(A)}n.abs=function(){return H(this)?B(this):this},n.add=function(k){for(var I=Math.max(this.g.length,k.g.length),C=[],x=0,O=0;O<=I;O++){var V=x+(this.i(O)&65535)+(k.i(O)&65535),P=(V>>>16)+(this.i(O)>>>16)+(k.i(O)>>>16);x=P>>>16,V&=65535,P&=65535,C[O]=P<<16|V}return new h(C,C[C.length-1]&-2147483648?-1:0)};function ae(k,I){return k.add(B(I))}n.j=function(k){if(q(this)||q(k))return S;if(H(this))return H(k)?B(this).j(B(k)):B(B(this).j(k));if(H(k))return B(this.j(B(k)));if(0>this.l(F)&&0>k.l(F))return y(this.m()*k.m());for(var I=this.g.length+k.g.length,C=[],x=0;x<2*I;x++)C[x]=0;for(x=0;x<this.g.length;x++)for(var O=0;O<k.g.length;O++){var V=this.i(x)>>>16,P=this.i(x)&65535,rt=k.i(O)>>>16,Ot=k.i(O)&65535;C[2*x+2*O]+=P*Ot,ue(C,2*x+2*O),C[2*x+2*O+1]+=V*Ot,ue(C,2*x+2*O+1),C[2*x+2*O+1]+=P*rt,ue(C,2*x+2*O+1),C[2*x+2*O+2]+=V*rt,ue(C,2*x+2*O+2)}for(x=0;x<I;x++)C[x]=C[2*x+1]<<16|C[2*x];for(x=I;x<2*I;x++)C[x]=0;return new h(C,0)};function ue(k,I){for(;(k[I]&65535)!=k[I];)k[I+1]+=k[I]>>>16,k[I]&=65535,I++}function ie(k,I){this.g=k,this.h=I}function se(k,I){if(q(I))throw Error("division by zero");if(q(k))return new ie(S,S);if(H(k))return I=se(B(k),I),new ie(B(I.g),B(I.h));if(H(I))return I=se(k,B(I)),new ie(B(I.g),I.h);if(30<k.g.length){if(H(k)||H(I))throw Error("slowDivide_ only works with positive integers.");for(var C=A,x=I;0>=x.l(k);)C=xe(C),x=xe(x);var O=$(C,1),V=$(x,1);for(x=$(x,2),C=$(C,2);!q(x);){var P=V.add(x);0>=P.l(k)&&(O=O.add(C),V=P),x=$(x,1),C=$(C,1)}return I=ae(k,O.j(I)),new ie(O,I)}for(O=S;0<=k.l(I);){for(C=Math.max(1,Math.floor(k.m()/I.m())),x=Math.ceil(Math.log(C)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),V=y(C),P=V.j(I);H(P)||0<P.l(k);)C-=x,V=y(C),P=V.j(I);q(V)&&(V=A),O=O.add(V),k=ae(k,P)}return new ie(O,k)}n.A=function(k){return se(this,k).h},n.and=function(k){for(var I=Math.max(this.g.length,k.g.length),C=[],x=0;x<I;x++)C[x]=this.i(x)&k.i(x);return new h(C,this.h&k.h)},n.or=function(k){for(var I=Math.max(this.g.length,k.g.length),C=[],x=0;x<I;x++)C[x]=this.i(x)|k.i(x);return new h(C,this.h|k.h)},n.xor=function(k){for(var I=Math.max(this.g.length,k.g.length),C=[],x=0;x<I;x++)C[x]=this.i(x)^k.i(x);return new h(C,this.h^k.h)};function xe(k){for(var I=k.g.length+1,C=[],x=0;x<I;x++)C[x]=k.i(x)<<1|k.i(x-1)>>>31;return new h(C,k.h)}function $(k,I){var C=I>>5;I%=32;for(var x=k.g.length-C,O=[],V=0;V<x;V++)O[V]=0<I?k.i(V+C)>>>I|k.i(V+C+1)<<32-I:k.i(V+C);return new h(O,k.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,qv=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=w,Ai=h}).apply(typeof Ny<"u"?Ny:typeof self<"u"?self:typeof window<"u"?window:{});var $u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hv,Ha,Wv,Zu,cf,Kv,Gv,Qv;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,_){return u==Array.prototype||u==Object.prototype||(u[p]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof $u=="object"&&$u];for(var p=0;p<u.length;++p){var _=u[p];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,p){if(p)e:{var _=i;u=u.split(".");for(var T=0;T<u.length-1;T++){var M=u[T];if(!(M in _))break e;_=_[M]}u=u[u.length-1],T=_[u],p=p(T),p!=T&&p!=null&&e(_,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var _=0,T=!1,M={next:function(){if(!T&&_<u.length){var z=_++;return{value:p(z,u[z]),done:!1}}return T=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function g(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function y(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function w(u,p,_){return u.call.apply(u.bind,arguments)}function S(u,p,_){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,T),u.apply(p,M)}}return function(){return u.apply(p,arguments)}}function A(u,p,_){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:S,A.apply(null,arguments)}function F(u,p){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function q(u,p){function _(){}_.prototype=p.prototype,u.aa=p.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(T,M,z){for(var Z=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)Z[Ue-2]=arguments[Ue];return p.prototype[M].apply(T,Z)}}function H(u){const p=u.length;if(0<p){const _=Array(p);for(let T=0;T<p;T++)_[T]=u[T];return _}return[]}function B(u,p){for(let _=1;_<arguments.length;_++){const T=arguments[_];if(g(T)){const M=u.length||0,z=T.length||0;u.length=M+z;for(let Z=0;Z<z;Z++)u[M+Z]=T[Z]}else u.push(T)}}class ae{constructor(p,_){this.i=p,this.j=_,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function ue(u){return/^[\s\xa0]*$/.test(u)}function ie(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function se(u){return se[" "](u),u}se[" "]=function(){};var xe=ie().indexOf("Gecko")!=-1&&!(ie().toLowerCase().indexOf("webkit")!=-1&&ie().indexOf("Edge")==-1)&&!(ie().indexOf("Trident")!=-1||ie().indexOf("MSIE")!=-1)&&ie().indexOf("Edge")==-1;function $(u,p,_){for(const T in u)p.call(_,u[T],T,u)}function k(u,p){for(const _ in u)p.call(void 0,u[_],_,u)}function I(u){const p={};for(const _ in u)p[_]=u[_];return p}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(u,p){let _,T;for(let M=1;M<arguments.length;M++){T=arguments[M];for(_ in T)u[_]=T[_];for(let z=0;z<C.length;z++)_=C[z],Object.prototype.hasOwnProperty.call(T,_)&&(u[_]=T[_])}}function O(u){var p=1;u=u.split(":");const _=[];for(;0<p&&u.length;)_.push(u.shift()),p--;return u.length&&_.push(u.join(":")),_}function V(u){f.setTimeout(()=>{throw u},0)}function P(){var u=me;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class rt{constructor(){this.h=this.g=null}add(p,_){const T=Ot.get();T.set(p,_),this.h?this.h.next=T:this.g=T,this.h=T}}var Ot=new ae(()=>new Vt,u=>u.reset());class Vt{constructor(){this.next=this.g=this.h=null}set(p,_){this.h=p,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,ee=!1,me=new rt,oe=()=>{const u=f.Promise.resolve(void 0);Be=()=>{u.then(b)}};var b=()=>{for(var u;u=P();){try{u.h.call(u.g)}catch(_){V(_)}var p=Ot;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}ee=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Ie=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};f.addEventListener("test",_,p),f.removeEventListener("test",_,p)}catch{}return u})();function Re(u,p){if(fe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(xe){e:{try{se(p.nodeName);var M=!0;break e}catch{}M=!1}M||(p=null)}}else _=="mouseover"?p=u.fromElement:_=="mouseout"&&(p=u.toElement);this.relatedTarget=p,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Re.aa.h.call(this)}}q(Re,fe);var De={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),je=0;function $e(u,p,_,T,M){this.listener=u,this.proxy=null,this.src=p,this.type=_,this.capture=!!T,this.ha=M,this.key=++je,this.da=this.fa=!1}function vt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function yr(u){this.src=u,this.g={},this.h=0}yr.prototype.add=function(u,p,_,T,M){var z=u.toString();u=this.g[z],u||(u=this.g[z]=[],this.h++);var Z=Kr(u,p,T,M);return-1<Z?(p=u[Z],_||(p.fa=!1)):(p=new $e(p,this.src,z,!!T,M),p.fa=_,u.push(p)),p};function Vs(u,p){var _=p.type;if(_ in u.g){var T=u.g[_],M=Array.prototype.indexOf.call(T,p,void 0),z;(z=0<=M)&&Array.prototype.splice.call(T,M,1),z&&(vt(p),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Kr(u,p,_,T){for(var M=0;M<u.length;++M){var z=u[M];if(!z.da&&z.listener==p&&z.capture==!!_&&z.ha==T)return M}return-1}var Bi="closure_lm_"+(1e6*Math.random()|0),bs={};function Go(u,p,_,T,M){if(Array.isArray(p)){for(var z=0;z<p.length;z++)Go(u,p[z],_,T,M);return null}return _=Jo(_),u&&u[Le]?u.K(p,_,y(T)?!!T.capture:!1,M):Qo(u,p,_,!1,T,M)}function Qo(u,p,_,T,M,z){if(!p)throw Error("Invalid event type");var Z=y(M)?!!M.capture:!!M,Ue=Ls(u);if(Ue||(u[Bi]=Ue=new yr(u)),_=Ue.add(p,_,T,Z,z),_.proxy)return _;if(T=Rl(),_.proxy=T,T.src=u,T.listener=_,u.addEventListener)Ie||(M=Z),M===void 0&&(M=!1),u.addEventListener(p.toString(),T,M);else if(u.attachEvent)u.attachEvent(vr(p.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Rl(){function u(_){return p.call(u.src,u.listener,_)}const p=Yo;return u}function Ms(u,p,_,T,M){if(Array.isArray(p))for(var z=0;z<p.length;z++)Ms(u,p[z],_,T,M);else T=y(T)?!!T.capture:!!T,_=Jo(_),u&&u[Le]?(u=u.i,p=String(p).toString(),p in u.g&&(z=u.g[p],_=Kr(z,_,T,M),-1<_&&(vt(z[_]),Array.prototype.splice.call(z,_,1),z.length==0&&(delete u.g[p],u.h--)))):u&&(u=Ls(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Kr(p,_,T,M)),(_=-1<u?p[u]:null)&&_r(_))}function _r(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Le])Vs(p.i,u);else{var _=u.type,T=u.proxy;p.removeEventListener?p.removeEventListener(_,T,u.capture):p.detachEvent?p.detachEvent(vr(_),T):p.addListener&&p.removeListener&&p.removeListener(T),(_=Ls(p))?(Vs(_,u),_.h==0&&(_.src=null,p[Bi]=null)):vt(u)}}}function vr(u){return u in bs?bs[u]:bs[u]="on"+u}function Yo(u,p){if(u.da)u=!0;else{p=new Re(p,this);var _=u.listener,T=u.ha||u.src;u.fa&&_r(u),u=_.call(T,p)}return u}function Ls(u){return u=u[Bi],u instanceof yr?u:null}var js="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jo(u){return typeof u=="function"?u:(u[js]||(u[js]=function(p){return u.handleEvent(p)}),u[js])}function ft(){G.call(this),this.i=new yr(this),this.M=this,this.F=null}q(ft,G),ft.prototype[Le]=!0,ft.prototype.removeEventListener=function(u,p,_,T){Ms(this,u,p,_,T)};function pt(u,p){var _,T=u.F;if(T)for(_=[];T;T=T.F)_.push(T);if(u=u.M,T=p.type||p,typeof p=="string")p=new fe(p,u);else if(p instanceof fe)p.target=p.target||u;else{var M=p;p=new fe(T,u),x(p,M)}if(M=!0,_)for(var z=_.length-1;0<=z;z--){var Z=p.g=_[z];M=wr(Z,T,!0,p)&&M}if(Z=p.g=u,M=wr(Z,T,!0,p)&&M,M=wr(Z,T,!1,p)&&M,_)for(z=0;z<_.length;z++)Z=p.g=_[z],M=wr(Z,T,!1,p)&&M}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var _=u.g[p],T=0;T<_.length;T++)vt(_[T]);delete u.g[p],u.h--}}this.F=null},ft.prototype.K=function(u,p,_,T){return this.i.add(String(u),p,!1,_,T)},ft.prototype.L=function(u,p,_,T){return this.i.add(String(u),p,!0,_,T)};function wr(u,p,_,T){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var M=!0,z=0;z<p.length;++z){var Z=p[z];if(Z&&!Z.da&&Z.capture==_){var Ue=Z.listener,mt=Z.ha||Z.src;Z.fa&&Vs(u.i,Z),M=Ue.call(mt,T)!==!1&&M}}return M&&!T.defaultPrevented}function Xo(u,p,_){if(typeof u=="function")_&&(u=A(u,_));else if(u&&typeof u.handleEvent=="function")u=A(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function Gr(u){u.g=Xo(()=>{u.g=null,u.i&&(u.i=!1,Gr(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class zi extends G{constructor(p,_){super(),this.m=p,this.l=_,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Gr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $i(u){G.call(this),this.h=u,this.g={}}q($i,G);var Zo=[];function ea(u){$(u.g,function(p,_){this.g.hasOwnProperty(_)&&_r(p)},u),u.g={}}$i.prototype.N=function(){$i.aa.N.call(this),ea(this)},$i.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ta=f.JSON.stringify,na=f.JSON.parse,ra=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function qi(){}qi.prototype.h=null;function Fs(u){return u.h||(u.h=u.i())}function Us(){}var mn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yn(){fe.call(this,"d")}q(Yn,fe);function Bs(){fe.call(this,"c")}q(Bs,fe);var Jn={},ia=null;function Hi(){return ia=ia||new ft}Jn.La="serverreachability";function sa(u){fe.call(this,Jn.La,u)}q(sa,fe);function Er(u){const p=Hi();pt(p,new sa(p))}Jn.STAT_EVENT="statevent";function oa(u,p){fe.call(this,Jn.STAT_EVENT,u),this.stat=p}q(oa,fe);function it(u){const p=Hi();pt(p,new oa(p,u))}Jn.Ma="timingevent";function zs(u,p){fe.call(this,Jn.Ma,u),this.size=p}q(zs,fe);function Pn(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function Wi(){this.g=!0}Wi.prototype.xa=function(){this.g=!1};function Ki(u,p,_,T,M,z){u.info(function(){if(u.g)if(z)for(var Z="",Ue=z.split("&"),mt=0;mt<Ue.length;mt++){var Oe=Ue[mt].split("=");if(1<Oe.length){var wt=Oe[0];Oe=Oe[1];var lt=wt.split("_");Z=2<=lt.length&&lt[1]=="type"?Z+(wt+"="+Oe+"&"):Z+(wt+"=redacted&")}}else Z=null;else Z=z;return"XMLHTTP REQ ("+T+") [attempt "+M+"]: "+p+`
`+_+`
`+Z})}function $s(u,p,_,T,M,z,Z){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+M+"]: "+p+`
`+_+`
`+z+" "+Z})}function Nn(u,p,_,T){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+ih(u,_)+(T?" "+T:"")})}function aa(u,p){u.info(function(){return"TIMEOUT: "+p})}Wi.prototype.info=function(){};function ih(u,p){if(!u.g)return p;if(!p)return null;try{var _=JSON.parse(p);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var T=_[u];if(!(2>T.length)){var M=T[1];if(Array.isArray(M)&&!(1>M.length)){var z=M[0];if(z!="noop"&&z!="stop"&&z!="close")for(var Z=1;Z<M.length;Z++)M[Z]=""}}}}return ta(_)}catch{return p}}var qs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Cl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xn;function Gi(){}q(Gi,qi),Gi.prototype.g=function(){return new XMLHttpRequest},Gi.prototype.i=function(){return{}},xn=new Gi;function Dn(u,p,_,T){this.j=u,this.i=p,this.l=_,this.R=T||1,this.U=new $i(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new kl}function kl(){this.i=null,this.g="",this.h=!1}var la={},Hs={};function Ws(u,p,_){u.L=1,u.v=Zr(an(p)),u.m=_,u.P=!0,ua(u,null)}function ua(u,p){u.F=Date.now(),qe(u),u.A=an(u.v);var _=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),ti(_.i,"t",T),u.C=0,_=u.j.J,u.h=new kl,u.g=Wl(u.j,_?p:null,!u.m),0<u.O&&(u.M=new zi(A(u.Y,u,u.g),u.O)),p=u.U,_=u.g,T=u.ca;var M="readystatechange";Array.isArray(M)||(M&&(Zo[0]=M.toString()),M=Zo);for(var z=0;z<M.length;z++){var Z=Go(_,M[z],T||p.handleEvent,!1,p.h||p);if(!Z)break;p.g[Z.key]=Z}p=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),Er(),Ki(u.i,u.u,u.A,u.l,u.R,u.m)}Dn.prototype.ca=function(u){u=u.target;const p=this.M;p&&Qt(u)==3?p.j():this.Y(u)},Dn.prototype.Y=function(u){try{if(u==this.g)e:{const lt=Qt(this.g);var p=this.g.Ba();const _n=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||ma(this.g)))){this.J||lt!=4||p==7||(p==8||0>=_n?Er(3):Er(2)),Qi(this);var _=this.g.Z();this.X=_;t:if(Pl(this)){var T=ma(this.g);u="";var M=T.length,z=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gn(this),Qr(this);var Z="";break t}this.h.i=new f.TextDecoder}for(p=0;p<M;p++)this.h.h=!0,u+=this.h.i.decode(T[p],{stream:!(z&&p==M-1)});T.length=0,this.h.g+=u,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=_==200,$s(this.i,this.u,this.A,this.l,this.R,lt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,mt=this.g;if((Ue=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ue(Ue)){var Oe=Ue;break t}}Oe=null}if(_=Oe)Nn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ca(this,_);else{this.o=!1,this.s=3,it(12),gn(this),Qr(this);break e}}if(this.P){_=!0;let un;for(;!this.J&&this.C<Z.length;)if(un=sh(this,Z),un==Hs){lt==4&&(this.s=4,it(14),_=!1),Nn(this.i,this.l,null,"[Incomplete Response]");break}else if(un==la){this.s=4,it(15),Nn(this.i,this.l,Z,"[Invalid Chunk]"),_=!1;break}else Nn(this.i,this.l,un,null),ca(this,un);if(Pl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||Z.length!=0||this.h.h||(this.s=1,it(16),_=!1),this.o=this.o&&_,!_)Nn(this.i,this.l,Z,"[Invalid Chunked Response]"),gn(this),Qr(this);else if(0<Z.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),ya(wt),wt.M=!0,it(11))}}else Nn(this.i,this.l,Z,null),ca(this,Z);lt==4&&gn(this),this.o&&!this.J&&(lt==4?ro(this.j,this):(this.o=!1,qe(this)))}else Xs(this.g),_==400&&0<Z.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),gn(this),Qr(this)}}}catch{}finally{}};function Pl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function sh(u,p){var _=u.C,T=p.indexOf(`
`,_);return T==-1?Hs:(_=Number(p.substring(_,T)),isNaN(_)?la:(T+=1,T+_>p.length?Hs:(p=p.slice(T,T+_),u.C=T+_,p)))}Dn.prototype.cancel=function(){this.J=!0,gn(this)};function qe(u){u.S=Date.now()+u.I,Nl(u,u.I)}function Nl(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Pn(A(u.ba,u),p)}function Qi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Dn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(aa(this.i,this.A),this.L!=2&&(Er(),it(17)),gn(this),this.s=2,Qr(this)):Nl(this,this.S-u)};function Qr(u){u.j.G==0||u.J||ro(u.j,u)}function gn(u){Qi(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,ea(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function ca(u,p){try{var _=u.j;if(_.G!=0&&(_.g==u||$t(_.h,u))){if(!u.K&&$t(_.h,u)&&_.G==3){try{var T=_.Da.g.parse(p)}catch{T=null}if(Array.isArray(T)&&T.length==3){var M=T;if(M[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)no(_),Ln(_);else break e;to(_),it(18)}}else _.za=M[1],0<_.za-_.T&&37500>M[2]&&_.F&&_.v==0&&!_.C&&(_.C=Pn(A(_.Za,_),6e3));if(1>=Dl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Rr(_,11)}else if((u.K||_.g==u)&&no(_),!ue(p))for(M=_.Da.g.parse(p),p=0;p<M.length;p++){let Oe=M[p];if(_.T=Oe[0],Oe=Oe[1],_.G==2)if(Oe[0]=="c"){_.K=Oe[1],_.ia=Oe[2];const wt=Oe[3];wt!=null&&(_.la=wt,_.j.info("VER="+_.la));const lt=Oe[4];lt!=null&&(_.Aa=lt,_.j.info("SVER="+_.Aa));const _n=Oe[5];_n!=null&&typeof _n=="number"&&0<_n&&(T=1.5*_n,_.L=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const un=u.g;if(un){const ns=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ns){var z=T.h;z.g||ns.indexOf("spdy")==-1&&ns.indexOf("quic")==-1&&ns.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(ha(z,z.h),z.h=null))}if(T.D){const so=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;so&&(T.ya=so,ze(T.I,T.D,so))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),T=_;var Z=u;if(T.qa=Hl(T,T.J?T.ia:null,T.W),Z.K){Ol(T.h,Z);var Ue=Z,mt=T.L;mt&&(Ue.I=mt),Ue.B&&(Qi(Ue),qe(Ue)),T.g=Z}else ts(T);0<_.i.length&&tr(_)}else Oe[0]!="stop"&&Oe[0]!="close"||Rr(_,7);else _.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?Rr(_,7):Rt(_):Oe[0]!="noop"&&_.l&&_.l.ta(Oe),_.v=0)}}Er(4)}catch{}}var xl=class{constructor(u,p){this.g=u,this.map=p}};function Yi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function on(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Dl(u){return u.h?1:u.g?u.g.size:0}function $t(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function ha(u,p){u.g?u.g.add(p):u.h=p}function Ol(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Yi.prototype.cancel=function(){if(this.i=Vl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Vl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const _ of u.g.values())p=p.concat(_.D);return p}return H(u.i)}function Ks(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var p=[],_=u.length,T=0;T<_;T++)p.push(u[T]);return p}p=[],_=0;for(T in u)p[_++]=u[T];return p}function Gs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var p=[];u=u.length;for(var _=0;_<u;_++)p.push(_);return p}p=[],_=0;for(const T in u)p[_++]=T;return p}}}function Yr(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var _=Gs(u),T=Ks(u),M=T.length,z=0;z<M;z++)p.call(void 0,T[z],_&&_[z],u)}var Ji=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function oh(u,p){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var T=u[_].indexOf("="),M=null;if(0<=T){var z=u[_].substring(0,T);M=u[_].substring(T+1)}else z=u[_];p(z,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Tr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Tr){this.h=u.h,Xi(this,u.j),this.o=u.o,this.g=u.g,Jr(this,u.s),this.l=u.l;var p=u.i,_=new Xn;_.i=p.i,p.g&&(_.g=new Map(p.g),_.h=p.h),Xr(this,_),this.m=u.m}else u&&(p=String(u).match(Ji))?(this.h=!1,Xi(this,p[1]||"",!0),this.o=Ne(p[2]||""),this.g=Ne(p[3]||"",!0),Jr(this,p[4]),this.l=Ne(p[5]||"",!0),Xr(this,p[6]||"",!0),this.m=Ne(p[7]||"")):(this.h=!1,this.i=new Xn(null,this.h))}Tr.prototype.toString=function(){var u=[],p=this.j;p&&u.push(ei(p,Qs,!0),":");var _=this.g;return(_||p=="file")&&(u.push("//"),(p=this.o)&&u.push(ei(p,Qs,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(ei(_,_.charAt(0)=="/"?Ll:Ml,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",ei(_,da)),u.join("")};function an(u){return new Tr(u)}function Xi(u,p,_){u.j=_?Ne(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Jr(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Xr(u,p,_){p instanceof Xn?(u.i=p,Zn(u.i,u.h)):(_||(p=ei(p,jl)),u.i=new Xn(p,u.h))}function ze(u,p,_){u.i.set(p,_)}function Zr(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ne(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ei(u,p,_){return typeof u=="string"?(u=encodeURI(u).replace(p,bl),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function bl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Qs=/[#\/\?@]/g,Ml=/[#\?:]/g,Ll=/[#\?]/g,jl=/[#\?@]/g,da=/#/g;function Xn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function At(u){u.g||(u.g=new Map,u.h=0,u.i&&oh(u.i,function(p,_){u.add(decodeURIComponent(p.replace(/\+/g," ")),_)}))}n=Xn.prototype,n.add=function(u,p){At(this),this.i=null,u=yn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(p),this.h+=1,this};function On(u,p){At(u),p=yn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Vn(u,p){return At(u),p=yn(u,p),u.g.has(p)}n.forEach=function(u,p){At(this),this.g.forEach(function(_,T){_.forEach(function(M){u.call(p,M,T,this)},this)},this)},n.na=function(){At(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),_=[];for(let T=0;T<p.length;T++){const M=u[T];for(let z=0;z<M.length;z++)_.push(p[T])}return _},n.V=function(u){At(this);let p=[];if(typeof u=="string")Vn(this,u)&&(p=p.concat(this.g.get(yn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)p=p.concat(u[_])}return p},n.set=function(u,p){return At(this),this.i=null,u=yn(this,u),Vn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},n.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function ti(u,p,_){On(u,p),0<_.length&&(u.i=null,u.g.set(yn(u,p),H(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var _=0;_<p.length;_++){var T=p[_];const z=encodeURIComponent(String(T)),Z=this.V(T);for(T=0;T<Z.length;T++){var M=z;Z[T]!==""&&(M+="="+encodeURIComponent(String(Z[T]))),u.push(M)}}return this.i=u.join("&")};function yn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Zn(u,p){p&&!u.j&&(At(u),u.i=null,u.g.forEach(function(_,T){var M=T.toLowerCase();T!=M&&(On(this,T),ti(this,M,_))},u)),u.j=p}function ah(u,p){const _=new Wi;if(f.Image){const T=new Image;T.onload=F(Gt,_,"TestLoadImage: loaded",!0,p,T),T.onerror=F(Gt,_,"TestLoadImage: error",!1,p,T),T.onabort=F(Gt,_,"TestLoadImage: abort",!1,p,T),T.ontimeout=F(Gt,_,"TestLoadImage: timeout",!1,p,T),f.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else p(!1)}function Fl(u,p){const _=new Wi,T=new AbortController,M=setTimeout(()=>{T.abort(),Gt(_,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:T.signal}).then(z=>{clearTimeout(M),z.ok?Gt(_,"TestPingServer: ok",!0,p):Gt(_,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),Gt(_,"TestPingServer: error",!1,p)})}function Gt(u,p,_,T,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),T(_)}catch{}}function lh(){this.g=new ra}function Ul(u,p,_){const T=_||"";try{Yr(u,function(M,z){let Z=M;y(M)&&(Z=ta(M)),p.push(T+z+"="+encodeURIComponent(Z))})}catch(M){throw p.push(T+"type="+encodeURIComponent("_badmap")),M}}function Ir(u){this.l=u.Ub||null,this.j=u.eb||!1}q(Ir,qi),Ir.prototype.g=function(){return new Zi(this.l,this.j)},Ir.prototype.i=(function(u){return function(){return u}})({});function Zi(u,p){ft.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}q(Zi,ft),n=Zi.prototype,n.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Mn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Mn(this)),this.g&&(this.readyState=3,Mn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?bn(this):Mn(this),this.readyState==3&&Bl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,bn(this))},n.Qa=function(u){this.g&&(this.response=u,bn(this))},n.ga=function(){this.g&&bn(this)};function bn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Mn(u)}n.setRequestHeader=function(u,p){this.u.append(u,p)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var _=p.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=p.next();return u.join(`\r
`)};function Mn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Zi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Sr(u){let p="";return $(u,function(_,T){p+=T,p+=":",p+=_,p+=`\r
`}),p}function ni(u,p,_){e:{for(T in _){var T=!1;break e}T=!0}T||(_=Sr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):ze(u,p,_))}function Ye(u){ft.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}q(Ye,ft);var uh=/^https?$/i,fa=["POST","PUT"];n=Ye.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,p,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xn.g(),this.v=this.o?Fs(this.o):Fs(xn),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(z){es(this,z);return}if(u=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var M in T)_.set(M,T[M]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const z of T.keys())_.set(z,T.get(z));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find(z=>z.toLowerCase()=="content-type"),M=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(fa,p,void 0))||T||M||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,Z]of _)this.g.setRequestHeader(z,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Js(this),this.u=!0,this.g.send(u),this.u=!1}catch(z){es(this,z)}};function es(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Ys(u),ln(u)}function Ys(u){u.A||(u.A=!0,pt(u,"complete"),pt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,pt(this,"complete"),pt(this,"abort"),ln(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ln(this,!0)),Ye.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?pa(this):this.bb())},n.bb=function(){pa(this)};function pa(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Qt(u)!=4||u.Z()!=2)){if(u.u&&Qt(u)==4)Xo(u.Ea,0,u);else if(pt(u,"readystatechange"),Qt(u)==4){u.h=!1;try{const Z=u.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var _;if(!(_=p)){var T;if(T=Z===0){var M=String(u.D).match(Ji)[1]||null;!M&&f.self&&f.self.location&&(M=f.self.location.protocol.slice(0,-1)),T=!uh.test(M?M.toLowerCase():"")}_=T}if(_)pt(u,"complete"),pt(u,"success");else{u.m=6;try{var z=2<Qt(u)?u.g.statusText:""}catch{z=""}u.l=z+" ["+u.Z()+"]",Ys(u)}}finally{ln(u)}}}}function ln(u,p){if(u.g){Js(u);const _=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||pt(u,"ready");try{_.onreadystatechange=T}catch{}}}function Js(u){u.I&&(f.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Qt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),na(p)}};function ma(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Xs(u){const p={};u=(u.g&&2<=Qt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(ue(u[T]))continue;var _=O(u[T]);const M=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const z=p[M]||[];p[M]=z,z.push(_)}k(p,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function er(u,p,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||p}function ga(u){this.Aa=0,this.i=[],this.j=new Wi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=er("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=er("baseRetryDelayMs",5e3,u),this.cb=er("retryDelaySeedMs",1e4,u),this.Wa=er("forwardChannelMaxRetries",2,u),this.wa=er("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Yi(u&&u.concurrentRequestLimit),this.Da=new lh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ga.prototype,n.la=8,n.G=1,n.connect=function(u,p,_,T){it(0),this.W=u,this.H=p||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.I=Hl(this,null,this.W),tr(this)};function Rt(u){if(Zs(u),u.G==3){var p=u.U++,_=an(u.I);if(ze(_,"SID",u.K),ze(_,"RID",p),ze(_,"TYPE","terminate"),Ar(u,_),p=new Dn(u,u.j,p),p.L=2,p.v=Zr(an(_)),_=!1,f.navigator&&f.navigator.sendBeacon)try{_=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!_&&f.Image&&(new Image().src=p.v,_=!0),_||(p.g=Wl(p.j,null),p.g.ea(p.v)),p.F=Date.now(),qe(p)}ql(u)}function Ln(u){u.g&&(ya(u),u.g.cancel(),u.g=null)}function Zs(u){Ln(u),u.u&&(f.clearTimeout(u.u),u.u=null),no(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function tr(u){if(!on(u.h)&&!u.s){u.s=!0;var p=u.Ga;Be||oe(),ee||(Be(),ee=!0),me.add(p,u),u.B=0}}function ch(u,p){return Dl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Pn(A(u.Ga,u,p),$l(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const M=new Dn(this,this.j,u);let z=this.o;if(this.S&&(z?(z=I(z),x(z,this.S)):z=this.S),this.m!==null||this.O||(M.H=z,z=null),this.P)e:{for(var p=0,_=0;_<this.i.length;_++){t:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(p+=T,4096<p){p=_;break e}if(p===4096||_===this.i.length-1){p=_+1;break e}}p=1e3}else p=1e3;p=ri(this,M,p),_=an(this.I),ze(_,"RID",u),ze(_,"CVER",22),this.D&&ze(_,"X-HTTP-Session-Id",this.D),Ar(this,_),z&&(this.O?p="headers="+encodeURIComponent(String(Sr(z)))+"&"+p:this.m&&ni(_,this.m,z)),ha(this.h,M),this.Ua&&ze(_,"TYPE","init"),this.P?(ze(_,"$req",p),ze(_,"SID","null"),M.T=!0,Ws(M,_,null)):Ws(M,_,p),this.G=2}}else this.G==3&&(u?eo(this,u):this.i.length==0||on(this.h)||eo(this))};function eo(u,p){var _;p?_=p.l:_=u.U++;const T=an(u.I);ze(T,"SID",u.K),ze(T,"RID",_),ze(T,"AID",u.T),Ar(u,T),u.m&&u.o&&ni(T,u.m,u.o),_=new Dn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),p&&(u.i=p.D.concat(u.i)),p=ri(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ha(u.h,_),Ws(_,T,p)}function Ar(u,p){u.H&&$(u.H,function(_,T){ze(p,T,_)}),u.l&&Yr({},function(_,T){ze(p,T,_)})}function ri(u,p,_){_=Math.min(u.i.length,_);var T=u.l?A(u.l.Na,u.l,u):null;e:{var M=u.i;let z=-1;for(;;){const Z=["count="+_];z==-1?0<_?(z=M[0].g,Z.push("ofs="+z)):z=0:Z.push("ofs="+z);let Ue=!0;for(let mt=0;mt<_;mt++){let Oe=M[mt].g;const wt=M[mt].map;if(Oe-=z,0>Oe)z=Math.max(0,M[mt].g-100),Ue=!1;else try{Ul(wt,Z,"req"+Oe+"_")}catch{T&&T(wt)}}if(Ue){T=Z.join("&");break e}}}return u=u.i.splice(0,_),p.D=u,T}function ts(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;Be||oe(),ee||(Be(),ee=!0),me.add(p,u),u.v=0}}function to(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Pn(A(u.Fa,u),$l(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,zl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Pn(A(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),Ln(this),zl(this))};function ya(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function zl(u){u.g=new Dn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=an(u.qa);ze(p,"RID","rpc"),ze(p,"SID",u.K),ze(p,"AID",u.T),ze(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(p,"TO",u.ja),ze(p,"TYPE","xmlhttp"),Ar(u,p),u.m&&u.o&&ni(p,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Zr(an(p)),_.m=null,_.P=!0,ua(_,u)}n.Za=function(){this.C!=null&&(this.C=null,Ln(this),to(this),it(19))};function no(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function ro(u,p){var _=null;if(u.g==p){no(u),ya(u),u.g=null;var T=2}else if($t(u.h,p))_=p.D,Ol(u.h,p),T=1;else return;if(u.G!=0){if(p.o)if(T==1){_=p.m?p.m.length:0,p=Date.now()-p.F;var M=u.B;T=Hi(),pt(T,new zs(T,_)),tr(u)}else ts(u);else if(M=p.s,M==3||M==0&&0<p.X||!(T==1&&ch(u,p)||T==2&&to(u)))switch(_&&0<_.length&&(p=u.h,p.i=p.i.concat(_)),M){case 1:Rr(u,5);break;case 4:Rr(u,10);break;case 3:Rr(u,6);break;default:Rr(u,2)}}}function $l(u,p){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*p}function Rr(u,p){if(u.j.info("Error code "+p),p==2){var _=A(u.fb,u),T=u.Xa;const M=!T;T=new Tr(T||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Xi(T,"https"),Zr(T),M?ah(T.toString(),_):Fl(T.toString(),_)}else it(2);u.G=0,u.l&&u.l.sa(p),ql(u),Zs(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function ql(u){if(u.G=0,u.ka=[],u.l){const p=Vl(u.h);(p.length!=0||u.i.length!=0)&&(B(u.ka,p),B(u.ka,u.i),u.h.i.length=0,H(u.i),u.i.length=0),u.l.ra()}}function Hl(u,p,_){var T=_ instanceof Tr?an(_):new Tr(_);if(T.g!="")p&&(T.g=p+"."+T.g),Jr(T,T.s);else{var M=f.location;T=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;var z=new Tr(null);T&&Xi(z,T),p&&(z.g=p),M&&Jr(z,M),_&&(z.l=_),T=z}return _=u.D,p=u.ya,_&&p&&ze(T,_,p),ze(T,"VER",u.la),Ar(u,T),T}function Wl(u,p,_){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Ye(new Ir({eb:_})):new Ye(u.pa),p.Ha(u.J),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function _a(){}n=_a.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function io(){}io.prototype.g=function(u,p){return new qt(u,p)};function qt(u,p){ft.call(this),this.g=new ga(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!ue(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!ue(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new nr(this)}q(qt,ft),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){Rt(this.g)},qt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=ta(u),u=_);p.i.push(new xl(p.Ya++,u)),p.G==3&&tr(p)},qt.prototype.N=function(){this.g.l=null,delete this.j,Rt(this.g),delete this.g,qt.aa.N.call(this)};function Kl(u){Yn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const _ in p){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}q(Kl,Yn);function Gl(){Bs.call(this),this.status=1}q(Gl,Bs);function nr(u){this.g=u}q(nr,_a),nr.prototype.ua=function(){pt(this.g,"a")},nr.prototype.ta=function(u){pt(this.g,new Kl(u))},nr.prototype.sa=function(u){pt(this.g,new Gl)},nr.prototype.ra=function(){pt(this.g,"b")},io.prototype.createWebChannel=io.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,Qv=function(){return new io},Gv=function(){return Hi()},Kv=Jn,cf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qs.NO_ERROR=0,qs.TIMEOUT=8,qs.HTTP_ERROR=6,Zu=qs,Cl.COMPLETE="complete",Wv=Cl,Us.EventType=mn,mn.OPEN="a",mn.CLOSE="b",mn.ERROR="c",mn.MESSAGE="d",ft.prototype.listen=ft.prototype.K,Ha=Us,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,Hv=Ye}).apply(typeof $u<"u"?$u:typeof self<"u"?self:typeof window<"u"?window:{});const xy="@firebase/firestore",Dy="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $o="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new Mf("@firebase/firestore");function Co(){return Is.logLevel}function re(n,...e){if(Is.logLevel<=ke.DEBUG){const t=e.map(Kf);Is.debug(`Firestore (${$o}): ${n}`,...t)}}function Hr(n,...e){if(Is.logLevel<=ke.ERROR){const t=e.map(Kf);Is.error(`Firestore (${$o}): ${n}`,...t)}}function ki(n,...e){if(Is.logLevel<=ke.WARN){const t=e.map(Kf);Is.warn(`Firestore (${$o}): ${n}`,...t)}}function Kf(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Yv(n,i,t)}function Yv(n,e,t){let i=`FIRESTORE (${$o}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Hr(i),new Error(i)}function Fe(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||Yv(e,o,i)}function Te(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Qn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class o1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ut.UNAUTHENTICATED)))}shutdown(){}}class a1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class l1{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0,42304);let i=this.i;const o=g=>this.i!==i?(i=this.i,t(g)):Promise.resolve();let l=new Ri;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ri,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ri)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Fe(typeof i.accessToken=="string",31837,{l:i}),new Jv(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new Ut(e)}}class u1{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class c1{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new u1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ut.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Oy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class h1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,fn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0,3512);const i=l=>{l.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,re("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Oy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Oy(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=d1(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Ae(n,e){return n<e?-1:n>e?1:0}function hf(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return Ae(i,o);{const l=Xv(),h=f1(l.encode(Vy(n,t)),l.encode(Vy(e,t)));return h!==0?h:Ae(i,o)}}t+=i>65535?2:1}return Ae(n.length,e.length)}function Vy(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function f1(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ae(n[t],e[t]);return Ae(n.length,e.length)}function Lo(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by="__name__";class ar{constructor(e,t,i){t===void 0?t=0:t>e.length&&ve(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&ve(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ar.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ar?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=ar.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ae(e.length,t.length)}static compareSegments(e,t){const i=ar.isNumericId(e),o=ar.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?ar.extractNumericId(e).compare(ar.extractNumericId(t)):hf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ai.fromString(e.substring(4,e.length-2))}}class We extends ar{construct(e,t,i){return new We(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new te(W.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new We(t)}static emptyPath(){return new We([])}}const p1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends ar{construct(e,t,i){return new Nt(e,t,i)}static isValidIdentifier(e){return p1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===by}static keyField(){return new Nt([by])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new te(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new te(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new te(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new te(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(t)}static emptyPath(){return new Nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(We.fromString(e))}static fromName(e){return new pe(We.fromString(e).popFirst(5))}static empty(){return new pe(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return We.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new We(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(n,e,t){if(!t)throw new te(W.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function m1(n,e,t,i){if(e===!0&&i===!0)throw new te(W.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function My(n){if(!pe.isDocumentKey(n))throw new te(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ly(n){if(pe.isDocumentKey(n))throw new te(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ew(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Vc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ve(12329,{type:typeof n})}function Rn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new te(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Vc(n);throw new te(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n,e){const t={typeString:n};return e&&(t.value=e),t}function vl(n,e){if(!ew(n))throw new te(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const h=n[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new te(W.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy=-62135596800,Fy=1e6;class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Fy);return new Qe(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<jy)throw new te(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fy}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(vl(e,Qe._jsonSchema))return new Qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-jy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qe._jsonSchemaVersion="firestore/timestamp/1.0",Qe._jsonSchema={type:dt("string",Qe._jsonSchemaVersion),seconds:dt("number"),nanoseconds:dt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new Qe(0,0))}static max(){return new Ee(new Qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=-1;function g1(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(i===1e9?new Qe(t+1,0):new Qe(t,i));return new Pi(o,pe.empty(),e)}function y1(n){return new Pi(n.readTime,n.key,il)}class Pi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Pi(Ee.min(),pe.empty(),il)}static max(){return new Pi(Ee.max(),pe.empty(),il)}}function _1(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(n.documentKey,e.documentKey),t!==0?t:Ae(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class w1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qo(n){if(n.code!==W.FAILED_PRECONDITION||n.message!==v1)throw n;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):K.reject(t)}static resolve(e){return new K(((t,i)=>{t(e)}))}static reject(e){return new K(((t,i)=>{i(e)}))}static waitFor(e){return new K(((t,i)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(g=>i(g)))})),h=!0,l===o&&t()}))}static or(e){let t=K.resolve(!1);for(const i of e)t=t.next((o=>o?K.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new K(((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const y=g;t(e[y]).next((w=>{h[y]=w,++f,f===l&&i(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new K(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function E1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ho(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this._e(i),this.ae=i=>t.writeSequenceNumber(i))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}bc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=-1;function Mc(n){return n==null}function pc(n){return n===0&&1/n==-1/0}function T1(n){return typeof n=="number"&&Number.isInteger(n)&&!pc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="";function I1(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Uy(e)),e=S1(n.get(t),e);return Uy(e)}function S1(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case tw:t+="";break;default:t+=l}}return t}function Uy(n){return n+tw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ji(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function nw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){this.comparator=e,this.root=t||Pt.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qu(this.root,e,this.comparator,!1)}getReverseIterator(){return new qu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qu(this.root,e,this.comparator,!0)}}class qu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Pt.RED,this.left=o??Pt.EMPTY,this.right=l??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Pt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Pt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new Pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new zy(this.data.getIterator())}getIteratorFrom(e){return new zy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new _t(this.comparator);return t.data=e,t}}class zy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new pn([])}unionWith(e){let t=new _t(Nt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new pn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Lo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new rw("Invalid base64 string: "+l):l}})(e);return new Dt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const A1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ni(n){if(Fe(!!n,39018),typeof n=="string"){let e=0;const t=A1.exec(n);if(Fe(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ot(n.seconds),nanos:ot(n.nanos)}}function ot(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function xi(n){return typeof n=="string"?Dt.fromBase64String(n):Dt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw="server_timestamp",sw="__type__",ow="__previous_value__",aw="__local_write_time__";function Yf(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[sw])===null||t===void 0?void 0:t.stringValue)===iw}function Lc(n){const e=n.mapValue.fields[ow];return Yf(e)?Lc(e):e}function sl(n){const e=Ni(n.mapValue.fields[aw].timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,t,i,o,l,h,f,g,y,w){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=w}}const mc="(default)";class ol{constructor(e,t){this.projectId=e,this.database=t||mc}static empty(){return new ol("","")}get isDefaultDatabase(){return this.database===mc}isEqual(e){return e instanceof ol&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw="__type__",C1="__max__",Hu={mapValue:{}},uw="__vector__",gc="value";function Di(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Yf(n)?4:P1(n)?9007199254740991:k1(n)?10:11:ve(28295,{value:n})}function pr(n,e){if(n===e)return!0;const t=Di(n);if(t!==Di(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return sl(n).isEqual(sl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ni(o.timestampValue),f=Ni(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return xi(o.bytesValue).isEqual(xi(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return ot(o.geoPointValue.latitude)===ot(l.geoPointValue.latitude)&&ot(o.geoPointValue.longitude)===ot(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ot(o.integerValue)===ot(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=ot(o.doubleValue),f=ot(l.doubleValue);return h===f?pc(h)===pc(f):isNaN(h)&&isNaN(f)}return!1})(n,e);case 9:return Lo(n.arrayValue.values||[],e.arrayValue.values||[],pr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(By(h)!==By(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!pr(h[g],f[g])))return!1;return!0})(n,e);default:return ve(52216,{left:n})}}function al(n,e){return(n.values||[]).find((t=>pr(t,e)))!==void 0}function jo(n,e){if(n===e)return 0;const t=Di(n),i=Di(e);if(t!==i)return Ae(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ae(n.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=ot(l.integerValue||l.doubleValue),g=ot(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(n,e);case 3:return $y(n.timestampValue,e.timestampValue);case 4:return $y(sl(n),sl(e));case 5:return hf(n.stringValue,e.stringValue);case 6:return(function(l,h){const f=xi(l),g=xi(h);return f.compareTo(g)})(n.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),g=h.split("/");for(let y=0;y<f.length&&y<g.length;y++){const w=Ae(f[y],g[y]);if(w!==0)return w}return Ae(f.length,g.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=Ae(ot(l.latitude),ot(h.latitude));return f!==0?f:Ae(ot(l.longitude),ot(h.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return qy(n.arrayValue,e.arrayValue);case 10:return(function(l,h){var f,g,y,w;const S=l.fields||{},A=h.fields||{},F=(f=S[gc])===null||f===void 0?void 0:f.arrayValue,q=(g=A[gc])===null||g===void 0?void 0:g.arrayValue,H=Ae(((y=F==null?void 0:F.values)===null||y===void 0?void 0:y.length)||0,((w=q==null?void 0:q.values)===null||w===void 0?void 0:w.length)||0);return H!==0?H:qy(F,q)})(n.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Hu.mapValue&&h===Hu.mapValue)return 0;if(l===Hu.mapValue)return 1;if(h===Hu.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),y=h.fields||{},w=Object.keys(y);g.sort(),w.sort();for(let S=0;S<g.length&&S<w.length;++S){const A=hf(g[S],w[S]);if(A!==0)return A;const F=jo(f[g[S]],y[w[S]]);if(F!==0)return F}return Ae(g.length,w.length)})(n.mapValue,e.mapValue);default:throw ve(23264,{le:t})}}function $y(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ae(n,e);const t=Ni(n),i=Ni(e),o=Ae(t.seconds,i.seconds);return o!==0?o:Ae(t.nanos,i.nanos)}function qy(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=jo(t[o],i[o]);if(l)return l}return Ae(t.length,i.length)}function Fo(n){return df(n)}function df(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=Ni(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return xi(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return pe.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=df(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${df(t.fields[h])}`;return o+"}"})(n.mapValue):ve(61005,{value:n})}function ec(n){switch(Di(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Lc(n);return e?16+ec(e):16;case 5:return 2*n.stringValue.length;case 6:return xi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+ec(l)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return ji(i.fields,((l,h)=>{o+=l.length+ec(h)})),o})(n.mapValue);default:throw ve(13486,{value:n})}}function Hy(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ff(n){return!!n&&"integerValue"in n}function Jf(n){return!!n&&"arrayValue"in n}function Wy(n){return!!n&&"nullValue"in n}function Ky(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function tc(n){return!!n&&"mapValue"in n}function k1(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[lw])===null||t===void 0?void 0:t.stringValue)===uw}function Ja(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ji(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Ja(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ja(n.arrayValue.values[t]);return e}return Object.assign({},n)}function P1(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===C1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.value=e}static empty(){return new rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!tc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ja(t)}setAll(e){let t=Nt.emptyPath(),i={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=Ja(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());tc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];tc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){ji(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new rn(Ja(this.value))}}function cw(n){const e=[];return ji(n.fields,((t,i)=>{const o=new Nt([t]);if(tc(i)){const l=cw(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new pn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Bt(e,0,Ee.min(),Ee.min(),Ee.min(),rn.empty(),0)}static newFoundDocument(e,t,i,o){return new Bt(e,1,t,Ee.min(),i,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,Ee.min(),Ee.min(),rn.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,Ee.min(),Ee.min(),rn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t){this.position=e,this.inclusive=t}}function Gy(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?i=pe.comparator(pe.fromName(h.referenceValue),t.key):i=jo(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Qy(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!pr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t="asc"){this.field=e,this.dir=t}}function N1(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{}class ht extends hw{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new D1(e,t,i):t==="array-contains"?new b1(e,i):t==="in"?new M1(e,i):t==="not-in"?new L1(e,i):t==="array-contains-any"?new j1(e,i):new ht(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new O1(e,i):new V1(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(jo(t,this.value)):t!==null&&Di(this.value)===Di(t)&&this.matchesComparison(jo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gn extends hw{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Gn(e,t)}matches(e){return dw(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function dw(n){return n.op==="and"}function fw(n){return x1(n)&&dw(n)}function x1(n){for(const e of n.filters)if(e instanceof Gn)return!1;return!0}function pf(n){if(n instanceof ht)return n.field.canonicalString()+n.op.toString()+Fo(n.value);if(fw(n))return n.filters.map((e=>pf(e))).join(",");{const e=n.filters.map((t=>pf(t))).join(",");return`${n.op}(${e})`}}function pw(n,e){return n instanceof ht?(function(i,o){return o instanceof ht&&i.op===o.op&&i.field.isEqual(o.field)&&pr(i.value,o.value)})(n,e):n instanceof Gn?(function(i,o){return o instanceof Gn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,h,f)=>l&&pw(h,o.filters[f])),!0):!1})(n,e):void ve(19439)}function mw(n){return n instanceof ht?(function(t){return`${t.field.canonicalString()} ${t.op} ${Fo(t.value)}`})(n):n instanceof Gn?(function(t){return t.op.toString()+" {"+t.getFilters().map(mw).join(" ,")+"}"})(n):"Filter"}class D1 extends ht{constructor(e,t,i){super(e,t,i),this.key=pe.fromName(i.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class O1 extends ht{constructor(e,t){super(e,"in",t),this.keys=gw("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class V1 extends ht{constructor(e,t){super(e,"not-in",t),this.keys=gw("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function gw(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>pe.fromName(i.referenceValue)))}class b1 extends ht{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Jf(t)&&al(t.arrayValue,this.value)}}class M1 extends ht{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&al(this.value.arrayValue,t)}}class L1 extends ht{constructor(e,t){super(e,"not-in",t)}matches(e){if(al(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!al(this.value.arrayValue,t)}}class j1 extends ht{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Jf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>al(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Pe=null}}function Yy(n,e=null,t=[],i=[],o=null,l=null,h=null){return new F1(n,e,t,i,o,l,h)}function Xf(n){const e=Te(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>pf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),Mc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Fo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Fo(i))).join(",")),e.Pe=t}return e.Pe}function Zf(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!N1(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!pw(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Qy(n.startAt,e.startAt)&&Qy(n.endAt,e.endAt)}function mf(n){return pe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function U1(n,e,t,i,o,l,h,f){return new Wo(n,e,t,i,o,l,h,f)}function ep(n){return new Wo(n)}function Jy(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function yw(n){return n.collectionGroup!==null}function Xa(n){const e=Te(n);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new _t(Nt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((y=>{y.isInequality()&&(f=f.add(y.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new ll(l,i))})),t.has(Nt.keyField().canonicalString())||e.Te.push(new ll(Nt.keyField(),i))}return e.Te}function cr(n){const e=Te(n);return e.Ie||(e.Ie=B1(e,Xa(n))),e.Ie}function B1(n,e){if(n.limitType==="F")return Yy(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new ll(o.field,l)}));const t=n.endAt?new yc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new yc(n.startAt.position,n.startAt.inclusive):null;return Yy(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function gf(n,e){const t=n.filters.concat([e]);return new Wo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function yf(n,e,t){return new Wo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function jc(n,e){return Zf(cr(n),cr(e))&&n.limitType===e.limitType}function _w(n){return`${Xf(cr(n))}|lt:${n.limitType}`}function ko(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>mw(o))).join(", ")}]`),Mc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Fo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Fo(o))).join(",")),`Target(${i})`})(cr(n))}; limitType=${n.limitType})`}function Fc(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):pe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of Xa(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(h,f,g){const y=Gy(h,f,g);return h.inclusive?y<=0:y<0})(i.startAt,Xa(i),o)||i.endAt&&!(function(h,f,g){const y=Gy(h,f,g);return h.inclusive?y>=0:y>0})(i.endAt,Xa(i),o))})(n,e)}function z1(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function vw(n){return(e,t)=>{let i=!1;for(const o of Xa(n)){const l=$1(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function $1(n,e,t){const i=n.field.isKeyField()?pe.comparator(e.key,t.key):(function(l,h,f){const g=h.data.field(l),y=f.data.field(l);return g!==null&&y!==null?jo(g,y):ve(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return ve(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ji(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return nw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1=new tt(pe.comparator);function Wr(){return q1}const ww=new tt(pe.comparator);function Wa(...n){let e=ww;for(const t of n)e=e.insert(t.key,t);return e}function Ew(n){let e=ww;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function gs(){return Za()}function Tw(){return Za()}function Za(){return new Ds((n=>n.toString()),((n,e)=>n.isEqual(e)))}const H1=new tt(pe.comparator),W1=new _t(pe.comparator);function Pe(...n){let e=W1;for(const t of n)e=e.add(t);return e}const K1=new _t(Ae);function G1(){return K1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pc(e)?"-0":e}}function Iw(n){return{integerValue:""+n}}function Q1(n,e){return T1(e)?Iw(e):tp(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(){this._=void 0}}function Y1(n,e,t){return n instanceof ul?(function(o,l){const h={fields:{[sw]:{stringValue:iw},[aw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Yf(l)&&(l=Lc(l)),l&&(h.fields[ow]=l),{mapValue:h}})(t,e):n instanceof cl?Aw(n,e):n instanceof hl?Rw(n,e):(function(o,l){const h=Sw(o,l),f=Xy(h)+Xy(o.Ee);return ff(h)&&ff(o.Ee)?Iw(f):tp(o.serializer,f)})(n,e)}function J1(n,e,t){return n instanceof cl?Aw(n,e):n instanceof hl?Rw(n,e):t}function Sw(n,e){return n instanceof _c?(function(i){return ff(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class ul extends Uc{}class cl extends Uc{constructor(e){super(),this.elements=e}}function Aw(n,e){const t=Cw(e);for(const i of n.elements)t.some((o=>pr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class hl extends Uc{constructor(e){super(),this.elements=e}}function Rw(n,e){let t=Cw(e);for(const i of n.elements)t=t.filter((o=>!pr(o,i)));return{arrayValue:{values:t}}}class _c extends Uc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Xy(n){return ot(n.integerValue||n.doubleValue)}function Cw(n){return Jf(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e,t){this.field=e,this.transform=t}}function Z1(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof cl&&o instanceof cl||i instanceof hl&&o instanceof hl?Lo(i.elements,o.elements,pr):i instanceof _c&&o instanceof _c?pr(i.Ee,o.Ee):i instanceof ul&&o instanceof ul})(n.transform,e.transform)}class eR{constructor(e,t){this.version=e,this.transformResults=t}}class Cn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Cn}static exists(e){return new Cn(void 0,e)}static updateTime(e){return new Cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Bc{}function kw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new np(n.key,Cn.none()):new wl(n.key,n.data,Cn.none());{const t=n.data,i=rn.empty();let o=new _t(Nt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new Fi(n.key,i,new pn(o.toArray()),Cn.none())}}function tR(n,e,t){n instanceof wl?(function(o,l,h){const f=o.value.clone(),g=e_(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(n,e,t):n instanceof Fi?(function(o,l,h){if(!nc(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=e_(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(Pw(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(n,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function el(n,e,t,i){return n instanceof wl?(function(l,h,f,g){if(!nc(l.precondition,h))return f;const y=l.value.clone(),w=t_(l.fieldTransforms,g,h);return y.setAll(w),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null})(n,e,t,i):n instanceof Fi?(function(l,h,f,g){if(!nc(l.precondition,h))return f;const y=t_(l.fieldTransforms,g,h),w=h.data;return w.setAll(Pw(l)),w.setAll(y),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((S=>S.field)))})(n,e,t,i):(function(l,h,f){return nc(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(n,e,t)}function nR(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=Sw(i.transform,o||null);l!=null&&(t===null&&(t=rn.empty()),t.set(i.field,l))}return t||null}function Zy(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Lo(i,o,((l,h)=>Z1(l,h)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class wl extends Bc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Fi extends Bc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Pw(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function e_(n,e,t){const i=new Map;Fe(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,J1(h,f,t[o]))}return i}function t_(n,e,t){const i=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);i.set(o.field,Y1(l,h,e))}return i}class np extends Bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rR extends Bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&tR(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=el(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=el(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Tw();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=kw(h,f);g!==null&&i.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Ee.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Pe())}isEqual(e){return this.batchId===e.batchId&&Lo(this.mutations,e.mutations,((t,i)=>Zy(t,i)))&&Lo(this.baseMutations,e.baseMutations,((t,i)=>Zy(t,i)))}}class rp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Fe(e.mutations.length===i.length,58842,{Ve:e.mutations.length,me:i.length});let o=(function(){return H1})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new rp(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,Ve;function aR(n){switch(n){case W.OK:return ve(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return ve(15467,{code:n})}}function Nw(n){if(n===void 0)return Hr("GRPC error has no .code"),W.UNKNOWN;switch(n){case ct.OK:return W.OK;case ct.CANCELLED:return W.CANCELLED;case ct.UNKNOWN:return W.UNKNOWN;case ct.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case ct.INTERNAL:return W.INTERNAL;case ct.UNAVAILABLE:return W.UNAVAILABLE;case ct.UNAUTHENTICATED:return W.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case ct.NOT_FOUND:return W.NOT_FOUND;case ct.ALREADY_EXISTS:return W.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return W.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case ct.ABORTED:return W.ABORTED;case ct.OUT_OF_RANGE:return W.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return W.UNIMPLEMENTED;case ct.DATA_LOSS:return W.DATA_LOSS;default:return ve(39323,{code:n})}}(Ve=ct||(ct={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR=new Ai([4294967295,4294967295],0);function n_(n){const e=Xv().encode(n),t=new qv;return t.update(e),new Uint8Array(t.digest())}function r_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ai([t,i],0),new Ai([o,l],0)]}class ip{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ka(`Invalid padding: ${t}`);if(i<0)throw new Ka(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ka(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ka(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ai.fromNumber(this.fe)}pe(e,t,i){let o=e.add(t.multiply(Ai.fromNumber(i)));return o.compare(lR)===1&&(o=new Ai([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=n_(e),[i,o]=r_(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(i,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new ip(l,o,t);return i.forEach((f=>h.insert(f))),h}insert(e){if(this.fe===0)return;const t=n_(e),[i,o]=r_(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(i,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ka extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,El.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new zc(Ee.min(),o,new tt(Ae),Wr(),Pe())}}class El{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new El(i,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.be=o}}class xw{constructor(e,t){this.targetId=e,this.De=t}}class Dw{constructor(e,t,i=Dt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class i_{constructor(){this.ve=0,this.Ce=s_(),this.Fe=Dt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Pe(),t=Pe(),i=Pe();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:ve(38017,{changeType:l})}})),new El(this.Fe,this.Me,e,t,i)}ke(){this.xe=!1,this.Ce=s_()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class uR{constructor(e){this.We=e,this.Ge=new Map,this.ze=Wr(),this.je=Wu(),this.Je=Wu(),this.He=new tt(Ae)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const i=this.tt(t);switch(e.state){case 0:this.nt(t)&&i.Be(e.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(e.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(i.Ke(),i.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),i.Be(e.resumeToken));break;default:ve(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((i,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,i=e.De.count,o=this.st(t);if(o){const l=o.target;if(mf(l))if(i===0){const h=new pe(l.path);this.Xe(t,h,Bt.newNoDocument(h,Ee.min()))}else Fe(i===1,20013,{expectedCount:i});else{const h=this.ot(t);if(h!==i){const f=this._t(e),g=f?this.ut(f,e,h):1;if(g!==0){this.rt(t);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,y)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=xi(i).toUint8Array()}catch(g){if(g instanceof rw)return ki("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new ip(h,o,l)}catch(g){return ki(g instanceof Ka?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.fe===0?null:f}ut(e,t,i){return t.De.count===i-this.ht(e,t.targetId)?0:2}ht(e,t){const i=this.We.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const h=this.We.lt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,h)=>{const f=this.st(h);if(f){if(l.current&&mf(f.target)){const g=new pe(f.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,Bt.newNoDocument(g,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}}));let i=Pe();this.Je.forEach(((l,h)=>{let f=!0;h.forEachWhile((g=>{const y=this.st(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.ze.forEach(((l,h)=>h.setReadTime(e)));const o=new zc(e,t,this.He,this.ze,i);return this.ze=Wr(),this.je=Wu(),this.Je=Wu(),this.He=new tt(Ae),o}Ze(e,t){if(!this.nt(e))return;const i=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,i),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,i){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),i&&(this.ze=this.ze.insert(t,i))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new i_,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new _t(Ae),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new _t(Ae),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new i_),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Wu(){return new tt(pe.comparator)}function s_(){return new tt(pe.comparator)}const cR={asc:"ASCENDING",desc:"DESCENDING"},hR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dR={and:"AND",or:"OR"};class fR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function _f(n,e){return n.useProto3Json||Mc(e)?e:{value:e}}function vc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ow(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function pR(n,e){return vc(n,e.toTimestamp())}function hr(n){return Fe(!!n,49232),Ee.fromTimestamp((function(t){const i=Ni(t);return new Qe(i.seconds,i.nanos)})(n))}function sp(n,e){return vf(n,e).canonicalString()}function vf(n,e){const t=(function(o){return new We(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Vw(n){const e=We.fromString(n);return Fe(Fw(e),10190,{key:e.toString()}),e}function wf(n,e){return sp(n.databaseId,e.path)}function $d(n,e){const t=Vw(e);if(t.get(1)!==n.databaseId.projectId)throw new te(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new te(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new pe(Mw(t))}function bw(n,e){return sp(n.databaseId,e)}function mR(n){const e=Vw(n);return e.length===4?We.emptyPath():Mw(e)}function Ef(n){return new We(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Mw(n){return Fe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function o_(n,e,t){return{name:wf(n,e),fields:t.value.mapValue.fields}}function gR(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:ve(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,w){return y.useProto3Json?(Fe(w===void 0||typeof w=="string",58123),Dt.fromBase64String(w||"")):(Fe(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Dt.fromUint8Array(w||new Uint8Array))})(n,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(y){const w=y.code===void 0?W.UNKNOWN:Nw(y.code);return new te(w,y.message||"")})(h);t=new Dw(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=$d(n,i.document.name),l=hr(i.document.updateTime),h=i.document.createTime?hr(i.document.createTime):Ee.min(),f=new rn({mapValue:{fields:i.document.fields}}),g=Bt.newFoundDocument(o,l,h,f),y=i.targetIds||[],w=i.removedTargetIds||[];t=new rc(y,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=$d(n,i.document),l=i.readTime?hr(i.readTime):Ee.min(),h=Bt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new rc([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=$d(n,i.document),l=i.removedTargetIds||[];t=new rc([],l,o,null)}else{if(!("filter"in e))return ve(11601,{At:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new oR(o,l),f=i.targetId;t=new xw(f,h)}}return t}function yR(n,e){let t;if(e instanceof wl)t={update:o_(n,e.key,e.value)};else if(e instanceof np)t={delete:wf(n,e.key)};else if(e instanceof Fi)t={update:o_(n,e.key,e.data),updateMask:RR(e.fieldMask)};else{if(!(e instanceof rR))return ve(16599,{Rt:e.type});t={verify:wf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,h){const f=h.transform;if(f instanceof ul)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof cl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof hl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof _c)return{fieldPath:h.field.canonicalString(),increment:f.Ee};throw ve(20930,{transform:h.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:pR(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ve(27497)})(n,e.precondition)),t}function _R(n,e){return n&&n.length>0?(Fe(e!==void 0,14353),n.map((t=>(function(o,l){let h=o.updateTime?hr(o.updateTime):hr(l);return h.isEqual(Ee.min())&&(h=hr(l)),new eR(h,o.transformResults||[])})(t,e)))):[]}function vR(n,e){return{documents:[bw(n,e.path)]}}function wR(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=bw(n,o);const l=(function(y){if(y.length!==0)return jw(Gn.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(y){if(y.length!==0)return y.map((w=>(function(A){return{field:Po(A.field),direction:IR(A.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=_f(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{Vt:t,parent:o}}function ER(n){let e=mR(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Fe(i===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=(function(S){const A=Lw(S);return A instanceof Gn&&fw(A)?A.getFilters():[A]})(t.where));let h=[];t.orderBy&&(h=(function(S){return S.map((A=>(function(q){return new ll(No(q.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(q.direction))})(A)))})(t.orderBy));let f=null;t.limit&&(f=(function(S){let A;return A=typeof S=="object"?S.value:S,Mc(A)?null:A})(t.limit));let g=null;t.startAt&&(g=(function(S){const A=!!S.before,F=S.values||[];return new yc(F,A)})(t.startAt));let y=null;return t.endAt&&(y=(function(S){const A=!S.before,F=S.values||[];return new yc(F,A)})(t.endAt)),U1(e,o,h,l,f,"F",g,y)}function TR(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Lw(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=No(t.unaryFilter.field);return ht.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=No(t.unaryFilter.field);return ht.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=No(t.unaryFilter.field);return ht.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=No(t.unaryFilter.field);return ht.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ht.create(No(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Gn.create(t.compositeFilter.filters.map((i=>Lw(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ve(1026)}})(t.compositeFilter.op))})(n):ve(30097,{filter:n})}function IR(n){return cR[n]}function SR(n){return hR[n]}function AR(n){return dR[n]}function Po(n){return{fieldPath:n.canonicalString()}}function No(n){return Nt.fromServerFormat(n.fieldPath)}function jw(n){return n instanceof ht?(function(t){if(t.op==="=="){if(Ky(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NAN"}};if(Wy(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ky(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NOT_NAN"}};if(Wy(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Po(t.field),op:SR(t.op),value:t.value}}})(n):n instanceof Gn?(function(t){const i=t.getFilters().map((o=>jw(o)));return i.length===1?i[0]:{compositeFilter:{op:AR(t.op),filters:i}}})(n):ve(54877,{filter:n})}function RR(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Fw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t,i,o,l=Ee.min(),h=Ee.min(),f=Dt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new Ii(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e){this.gt=e}}function kR(n){const e=ER({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?yf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(){this.Dn=new NR}addToCollectionParentIndex(e,t){return this.Dn.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(Pi.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(Pi.min())}updateCollectionGroup(e,t,i){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class NR{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new _t(We.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new _t(We.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Uw=41943040;class nn{static withCacheSize(e){return new nn(e,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn.DEFAULT_COLLECTION_PERCENTILE=10,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nn.DEFAULT=new nn(Uw,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nn.DISABLED=new nn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Uo(0)}static ur(){return new Uo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_="LruGarbageCollector",xR=1048576;function u_([n,e],[t,i]){const o=Ae(n,t);return o===0?Ae(e,i):o}class DR{constructor(e){this.Tr=e,this.buffer=new _t(u_),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();u_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class OR{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){re(l_,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ho(t)?re(l_,"Ignoring IndexedDB error during garbage collection: ",t):await qo(t)}await this.Rr(3e5)}))}}class VR{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return K.resolve(bc.ue);const i=new DR(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(a_)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),a_):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let i,o,l,h,f,g,y;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((S=>(S>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,h=Date.now(),this.nthSequenceNumber(e,o)))).next((S=>(i=S,f=Date.now(),this.removeTargets(e,i,t)))).next((S=>(l=S,g=Date.now(),this.removeOrphanedDocuments(e,i)))).next((S=>(y=Date.now(),Co()<=ke.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${S} documents in `+(y-g)+`ms
Total Duration: ${y-w}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:S}))))}}function bR(n,e){return new VR(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(){this.changes=new Ds((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?K.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&el(i.mutation,o,pn.empty(),Qe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Pe()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Pe()){const o=gs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let h=Wa();return l.forEach(((f,g)=>{h=h.insert(f,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const i=gs();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Pe())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,i,o){let l=Wr();const h=Za(),f=(function(){return Za()})();return t.forEach(((g,y)=>{const w=i.get(y.key);o.has(y.key)&&(w===void 0||w.mutation instanceof Fi)?l=l.insert(y.key,y):w!==void 0?(h.set(y.key,w.mutation.getFieldMask()),el(w.mutation,y,w.mutation.getFieldMask(),Qe.now())):h.set(y.key,pn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((y,w)=>h.set(y,w))),t.forEach(((y,w)=>{var S;return f.set(y,new LR(w,(S=h.get(y))!==null&&S!==void 0?S:null))})),f)))}recalculateAndSaveOverlays(e,t){const i=Za();let o=new tt(((h,f)=>h-f)),l=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((g=>{const y=t.get(g);if(y===null)return;let w=i.get(g)||pn.empty();w=f.applyToLocalView(y,w),i.set(g,w);const S=(o.get(f.batchId)||Pe()).add(g);o=o.insert(f.batchId,S)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),y=g.key,w=g.value,S=Tw();w.forEach((A=>{if(!l.has(A)){const F=kw(t.get(A),i.get(A));F!==null&&S.set(A,F),l=l.add(A)}})),h.push(this.documentOverlayCache.saveOverlays(e,y,S))}return K.waitFor(h)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(h){return pe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):yw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):K.resolve(gs());let f=il,g=l;return h.next((y=>K.forEach(y,((w,S)=>(f<S.largestBatchId&&(f=S.largestBatchId),l.get(w)?K.resolve():this.remoteDocumentCache.getEntry(e,w).next((A=>{g=g.insert(w,A)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,g,y,Pe()))).next((w=>({batchId:f,changes:Ew(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next((i=>{let o=Wa();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=Wa();return this.indexManager.getCollectionParents(e,l).next((f=>K.forEach(f,(g=>{const y=(function(S,A){return new Wo(A,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next((w=>{w.forEach(((S,A)=>{h=h.insert(S,A)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((h=>{l.forEach(((g,y)=>{const w=y.getKey();h.get(w)===null&&(h=h.insert(w,Bt.newInvalidDocument(w)))}));let f=Wa();return h.forEach(((g,y)=>{const w=l.get(g);w!==void 0&&el(w.mutation,y,pn.empty(),Qe.now()),Fc(t,y)&&(f=f.insert(g,y))})),f}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return K.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:hr(o.createTime)}})(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:kR(o.bundledQuery),readTime:hr(o.readTime)}})(t)),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(){this.overlays=new tt(pe.comparator),this.kr=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const i=gs();return K.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.wt(e,t,l)})),K.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.kr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(i)),K.resolve()}getOverlaysForCollection(e,t,i){const o=gs(),l=t.length+1,h=new pe(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,y=g.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&g.largestBatchId>i&&o.set(g.getKey(),g)}return K.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new tt(((y,w)=>y-w));const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let w=l.get(y.largestBatchId);w===null&&(w=gs(),l=l.insert(y.largestBatchId,w)),w.set(y.getKey(),y)}}const f=gs(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((y,w)=>f.set(y,w))),!(f.size()>=o)););return K.resolve(f)}wt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(i.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new sR(t,i));let l=this.kr.get(t);l===void 0&&(l=Pe(),this.kr.set(t,l)),this.kr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(){this.qr=new _t(St.Qr),this.$r=new _t(St.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const i=new St(e,t);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new St(e,t))}Gr(e,t){e.forEach((i=>this.removeReference(i,t)))}zr(e){const t=new pe(new We([])),i=new St(t,e),o=new St(t,e+1),l=[];return this.$r.forEachInRange([i,o],(h=>{this.Wr(h),l.push(h.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new pe(new We([])),i=new St(t,e),o=new St(t,e+1);let l=Pe();return this.$r.forEachInRange([i,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new St(e,0),i=this.qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class St{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return pe.comparator(e.key,t.key)||Ae(e.Hr,t.Hr)}static Ur(e,t){return Ae(e.Hr,t.Hr)||pe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new _t(St.Qr)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new iR(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.Yr=this.Yr.add(new St(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return K.resolve(h)}lookupMutationBatch(e,t){return K.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return K.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?Qf:this.er-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([i,o],(h=>{const f=this.Zr(h.Hr);l.push(f)})),K.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new _t(Ae);return t.forEach((o=>{const l=new St(o,0),h=new St(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],(f=>{i=i.add(f.Hr)}))})),K.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;pe.isDocumentKey(l)||(l=l.child(""));const h=new St(new pe(l),0);let f=new _t(Ae);return this.Yr.forEachWhile((g=>{const y=g.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(f=f.add(g.Hr)),!0)}),h),K.resolve(this.ei(f))}ei(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Fe(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return K.forEach(t.mutations,(o=>{const l=new St(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=i}))}rr(e){}containsKey(e,t){const i=new St(t,0),o=this.Yr.firstAfterOrEqual(i);return K.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e){this.ni=e,this.docs=(function(){return new tt(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return K.resolve(i?i.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let i=Wr();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Bt.newInvalidDocument(o))})),K.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Wr();const h=t.path,f=new pe(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:y,value:{document:w}}=g.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||_1(y1(w),i)<=0||(o.has(w.key)||Fc(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return K.resolve(l)}getAllFromCollectionGroup(e,t,i,o){ve(9500)}ri(e,t){return K.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new qR(this)}getSize(e){return K.resolve(this.size)}}class qR extends MR{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(i)})),K.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.persistence=e,this.ii=new Ds((t=>Xf(t)),Zf),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.si=0,this.oi=new op,this.targetCount=0,this._i=Uo.ar()}forEachTarget(e,t){return this.ii.forEach(((i,o)=>t(o))),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.si&&(this.si=t),K.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Uo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.hr(t),K.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ii.forEach(((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),K.waitFor(l).next((()=>o))}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const i=this.ii.get(t)||null;return K.resolve(i)}addMatchingKeys(e,t,i){return this.oi.Kr(t,i),K.resolve()}removeMatchingKeys(e,t,i){this.oi.Gr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),K.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const i=this.oi.Jr(t);return K.resolve(i)}containsKey(e,t){return K.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,t){this.ai={},this.overlays={},this.ui=new bc(0),this.ci=!1,this.ci=!0,this.li=new BR,this.referenceDelegate=e(this),this.hi=new HR(this),this.indexManager=new PR,this.remoteDocumentCache=(function(o){return new $R(o)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new CR(t),this.Ti=new FR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new UR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ai[e.toKey()];return i||(i=new zR(t,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,i){re("MemoryPersistence","Starting transaction:",e);const o=new WR(this.ui.next());return this.referenceDelegate.Ii(),i(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return K.or(Object.values(this.ai).map((i=>()=>i.containsKey(e,t))))}}class WR extends w1{constructor(e){super(),this.currentSequenceNumber=e}}class ap{constructor(e){this.persistence=e,this.Ai=new op,this.Ri=null}static Vi(e){return new ap(e)}get mi(){if(this.Ri)return this.Ri;throw ve(60996)}addReference(e,t,i){return this.Ai.addReference(i,t),this.mi.delete(i.toString()),K.resolve()}removeReference(e,t,i){return this.Ai.removeReference(i,t),this.mi.add(i.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),K.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.mi,(i=>{const o=pe.fromPath(i);return this.fi(e,o).next((l=>{l||t.removeEntry(o,Ee.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((i=>{i?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return K.or([()=>K.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class wc{constructor(e,t){this.persistence=e,this.gi=new Ds((i=>I1(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=bR(this,t)}static Vi(e,t){return new wc(e,t)}Ii(){}di(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}yr(e){let t=0;return this.gr(e,(i=>{t++})).next((()=>t))}gr(e,t){return K.forEach(this.gi,((i,o)=>this.Sr(e,i,o).next((l=>l?K.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((f=>{f||(i++,l.removeEntry(h,Ee.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),K.resolve()}removeReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),K.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ec(e.data.value)),t}Sr(e,t,i){return K.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return K.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Is=i,this.ds=o}static Es(e,t){let i=Pe(),o=Pe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new lp(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return N0()?8:E1(zt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ps(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ys(e,t,o,i).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new KR;return this.ws(e,t,h).next((f=>{if(l.result=f,this.Rs)return this.Ss(e,t,h,f.size)}))})).next((()=>l.result))}Ss(e,t,i,o){return i.documentReadCount<this.Vs?(Co()<=ke.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",ko(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),K.resolve()):(Co()<=ke.DEBUG&&re("QueryEngine","Query:",ko(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.fs*o?(Co()<=ke.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",ko(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cr(t))):K.resolve())}ps(e,t){if(Jy(t))return K.resolve(null);let i=cr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=yf(t,null,"F"),i=cr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const h=Pe(...l);return this.gs.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,i).next((g=>{const y=this.bs(t,f);return this.Ds(t,y,h,g.readTime)?this.ps(e,yf(t,null,"F")):this.vs(e,y,t,g)}))))})))))}ys(e,t,i,o){return Jy(t)||o.isEqual(Ee.min())?K.resolve(null):this.gs.getDocuments(e,i).next((l=>{const h=this.bs(t,l);return this.Ds(t,h,i,o)?K.resolve(null):(Co()<=ke.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ko(t)),this.vs(e,h,t,g1(o,il)).next((f=>f)))}))}bs(e,t){let i=new _t(vw(e));return t.forEach(((o,l)=>{Fc(e,l)&&(i=i.add(l))})),i}Ds(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,i){return Co()<=ke.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",ko(t)),this.gs.getDocumentsMatchingQuery(e,t,Pi.min(),i)}vs(e,t,i,o){return this.gs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up="LocalStore",QR=3e8;class YR{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new tt(Ae),this.Ms=new Ds((l=>Xf(l)),Zf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jR(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function JR(n,e,t,i){return new YR(n,e,t,i)}async function zw(n,e){const t=Te(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const h=[],f=[];let g=Pe();for(const y of o){h.push(y.batchId);for(const w of y.mutations)g=g.add(w.key)}for(const y of l){f.push(y.batchId);for(const w of y.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(i,g).next((y=>({Bs:y,removedBatchIds:h,addedBatchIds:f})))}))}))}function XR(n,e){const t=Te(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(f,g,y,w){const S=y.batch,A=S.keys();let F=K.resolve();return A.forEach((q=>{F=F.next((()=>w.getEntry(g,q))).next((H=>{const B=y.docVersions.get(q);Fe(B!==null,48541),H.version.compareTo(B)<0&&(S.applyToRemoteDocument(H,y),H.isValidDocument()&&(H.setReadTime(y.commitVersion),w.addEntry(H)))}))})),F.next((()=>f.mutationQueue.removeMutationBatch(g,S)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let g=Pe();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(g=g.add(f.batch.mutations[y].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function $w(n){const e=Te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function ZR(n,e){const t=Te(n),i=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const f=[];e.targetChanges.forEach(((w,S)=>{const A=o.get(S);if(!A)return;f.push(t.hi.removeMatchingKeys(l,w.removedDocuments,S).next((()=>t.hi.addMatchingKeys(l,w.addedDocuments,S))));let F=A.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(S)!==null?F=F.withResumeToken(Dt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):w.resumeToken.approximateByteSize()>0&&(F=F.withResumeToken(w.resumeToken,i)),o=o.insert(S,F),(function(H,B,ae){return H.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=QR?!0:ae.addedDocuments.size+ae.modifiedDocuments.size+ae.removedDocuments.size>0})(A,F,w)&&f.push(t.hi.updateTargetData(l,F))}));let g=Wr(),y=Pe();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))})),f.push(eC(l,h,e.documentUpdates).next((w=>{g=w.Ls,y=w.ks}))),!i.isEqual(Ee.min())){const w=t.hi.getLastRemoteSnapshotVersion(l).next((S=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(w)}return K.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,y))).next((()=>g))})).then((l=>(t.Fs=o,l)))}function eC(n,e,t){let i=Pe(),o=Pe();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let h=Wr();return t.forEach(((f,g)=>{const y=l.get(f);g.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(Ee.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):re(up,"Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",g.version)})),{Ls:h,ks:o}}))}function tC(n,e){const t=Te(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=Qf),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function nC(n,e){const t=Te(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.hi.getTargetData(i,e).next((l=>l?(o=l,K.resolve(o)):t.hi.allocateTargetId(i).next((h=>(o=new Ii(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.hi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Fs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(i.targetId,i),t.Ms.set(e,i.targetId)),i}))}async function Tf(n,e,t){const i=Te(n),o=i.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(h=>i.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Ho(h))throw h;re(up,`Failed to update sequence numbers for target ${e}: ${h}`)}i.Fs=i.Fs.remove(e),i.Ms.delete(o.target)}function c_(n,e,t){const i=Te(n);let o=Ee.min(),l=Pe();return i.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,y,w){const S=Te(g),A=S.Ms.get(w);return A!==void 0?K.resolve(S.Fs.get(A)):S.hi.getTargetData(y,w)})(i,h,cr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(h,f.targetId).next((g=>{l=g}))})).next((()=>i.Cs.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?l:Pe()))).next((f=>(rC(i,z1(e),f),{documents:f,qs:l})))))}function rC(n,e,t){let i=n.xs.get(e)||Ee.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.xs.set(e,i)}class h_{constructor(){this.activeTargetIds=G1()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iC{constructor(){this.Fo=new h_,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,i){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new h_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_="ConnectivityMonitor";class f_{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){re(d_,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){re(d_,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ku=null;function If(){return Ku===null?Ku=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ku++,"0x"+Ku.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd="RestConnection",oC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class aC{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.Ko=this.databaseId.database===mc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const h=If(),f=this.Go(e,t.toUriEncodedString());re(qd,`Sending RPC '${e}' ${h}:`,f,i);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,l);const{host:y}=new URL(f),w=Cs(y);return this.jo(e,f,g,i,w).then((S=>(re(qd,`Received RPC '${e}' ${h}: `,S),S)),(S=>{throw ki(qd,`RPC '${e}' ${h} failed with error: `,S,"url: ",f,"request:",i),S}))}Jo(e,t,i,o,l,h){return this.Wo(e,t,i,o,l)}zo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+$o})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const i=oC[e];return`${this.$o}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class uC extends aC{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,i,o,l){const h=If();return new Promise(((f,g)=>{const y=new Hv;y.setWithCredentials(!0),y.listenOnce(Wv.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case Zu.NO_ERROR:const S=y.getResponseJson();re(Ft,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(S)),f(S);break;case Zu.TIMEOUT:re(Ft,`RPC '${e}' ${h} timed out`),g(new te(W.DEADLINE_EXCEEDED,"Request time out"));break;case Zu.HTTP_ERROR:const A=y.getStatus();if(re(Ft,`RPC '${e}' ${h} failed with status:`,A,"response text:",y.getResponseText()),A>0){let F=y.getResponseJson();Array.isArray(F)&&(F=F[0]);const q=F==null?void 0:F.error;if(q&&q.status&&q.message){const H=(function(ae){const ue=ae.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(ue)>=0?ue:W.UNKNOWN})(q.status);g(new te(H,q.message))}else g(new te(W.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new te(W.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{c_:e,streamId:h,l_:y.getLastErrorCode(),h_:y.getLastError()})}}finally{re(Ft,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);re(Ft,`RPC '${e}' ${h} sending request:`,o),y.send(t,"POST",w,i,15)}))}P_(e,t,i){const o=If(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Qv(),f=Gv(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,i),g.encodeInitMessageHeaders=!0;const w=l.join("");re(Ft,`Creating RPC '${e}' stream ${o}: ${w}`,g);const S=h.createWebChannel(w,g);this.T_(S);let A=!1,F=!1;const q=new lC({Ho:B=>{F?re(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(A||(re(Ft,`Opening RPC '${e}' stream ${o} transport.`),S.open(),A=!0),re(Ft,`RPC '${e}' stream ${o} sending:`,B),S.send(B))},Yo:()=>S.close()}),H=(B,ae,ue)=>{B.listen(ae,(ie=>{try{ue(ie)}catch(se){setTimeout((()=>{throw se}),0)}}))};return H(S,Ha.EventType.OPEN,(()=>{F||(re(Ft,`RPC '${e}' stream ${o} transport opened.`),q.s_())})),H(S,Ha.EventType.CLOSE,(()=>{F||(F=!0,re(Ft,`RPC '${e}' stream ${o} transport closed`),q.__(),this.I_(S))})),H(S,Ha.EventType.ERROR,(B=>{F||(F=!0,ki(Ft,`RPC '${e}' stream ${o} transport errored. Name:`,B.name,"Message:",B.message),q.__(new te(W.UNAVAILABLE,"The operation could not be completed")))})),H(S,Ha.EventType.MESSAGE,(B=>{var ae;if(!F){const ue=B.data[0];Fe(!!ue,16349);const ie=ue,se=(ie==null?void 0:ie.error)||((ae=ie[0])===null||ae===void 0?void 0:ae.error);if(se){re(Ft,`RPC '${e}' stream ${o} received error:`,se);const xe=se.status;let $=(function(C){const x=ct[C];if(x!==void 0)return Nw(x)})(xe),k=se.message;$===void 0&&($=W.INTERNAL,k="Unknown error status: "+xe+" with message "+se.message),F=!0,q.__(new te($,k)),S.close()}else re(Ft,`RPC '${e}' stream ${o} received:`,ue),q.a_(ue)}})),H(f,Kv.STAT_EVENT,(B=>{B.stat===cf.PROXY?re(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===cf.NOPROXY&&re(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{q.o_()}),0),q}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Hd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(n){return new fR(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-i);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_="PersistentStream";class Hw{constructor(e,t,i,o,l,h,f,g){this.Fi=e,this.w_=i,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new qw(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Hr(t.toString()),Hr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.b_===t&&this.W_(i,o)}),(i=>{e((()=>{const o=new te(W.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(o)}))}))}W_(e,t){const i=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{i((()=>this.G_(o)))})),this.stream.onMessage((o=>{i((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return re(p_,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(re(p_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class cC extends Hw{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=gR(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Ee.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?hr(h.readTime):Ee.min()})(e);return this.listener.J_(t,i)}H_(e){const t={};t.database=Ef(this.serializer),t.addTarget=(function(l,h){let f;const g=h.target;if(f=mf(g)?{documents:vR(l,g)}:{query:wR(l,g).Vt},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=Ow(l,h.resumeToken);const y=_f(l,h.expectedCount);y!==null&&(f.expectedCount=y)}else if(h.snapshotVersion.compareTo(Ee.min())>0){f.readTime=vc(l,h.snapshotVersion.toTimestamp());const y=_f(l,h.expectedCount);y!==null&&(f.expectedCount=y)}return f})(this.serializer,e);const i=TR(this.serializer,e);i&&(t.labels=i),this.k_(t)}Y_(e){const t={};t.database=Ef(this.serializer),t.removeTarget=e,this.k_(t)}}class hC extends Hw{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=_R(e.writeResults,e.commitTime),i=hr(e.commitTime);return this.listener.ta(i,t)}na(){const e={};e.database=Ef(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>yR(this.serializer,i)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{}class fC extends dC{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new te(W.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,vf(t,i),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new te(W.UNKNOWN,l.toString())}))}Jo(e,t,i,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.Jo(e,vf(t,i),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new te(W.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class pC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Hr(t),this._a=!1):re("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss="RemoteStore";class mC{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((h=>{i.enqueueAndForget((async()=>{Os(this)&&(re(Ss,"Restarting streams for network reachability change."),await(async function(g){const y=Te(g);y.Ia.add(4),await Tl(y),y.Aa.set("Unknown"),y.Ia.delete(4),await qc(y)})(this))}))})),this.Aa=new pC(i,o)}}async function qc(n){if(Os(n))for(const e of n.da)await e(!0)}async function Tl(n){for(const e of n.da)await e(!1)}function Ww(n,e){const t=Te(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),fp(t)?dp(t):Ko(t).x_()&&hp(t,e))}function cp(n,e){const t=Te(n),i=Ko(t);t.Ta.delete(e),i.x_()&&Kw(t,e),t.Ta.size===0&&(i.x_()?i.B_():Os(t)&&t.Aa.set("Unknown"))}function hp(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ko(n).H_(e)}function Kw(n,e){n.Ra.$e(e),Ko(n).Y_(e)}function dp(n){n.Ra=new uR({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Ko(n).start(),n.Aa.aa()}function fp(n){return Os(n)&&!Ko(n).M_()&&n.Ta.size>0}function Os(n){return Te(n).Ia.size===0}function Gw(n){n.Ra=void 0}async function gC(n){n.Aa.set("Online")}async function yC(n){n.Ta.forEach(((e,t)=>{hp(n,e)}))}async function _C(n,e){Gw(n),fp(n)?(n.Aa.la(e),dp(n)):n.Aa.set("Unknown")}async function vC(n,e,t){if(n.Aa.set("Online"),e instanceof Dw&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ta.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ta.delete(f),o.Ra.removeTarget(f))})(n,e)}catch(i){re(Ss,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Ec(n,i)}else if(e instanceof rc?n.Ra.Ye(e):e instanceof xw?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Ee.min()))try{const i=await $w(n.localStore);t.compareTo(i)>=0&&await(function(l,h){const f=l.Ra.Pt(h);return f.targetChanges.forEach(((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const w=l.Ta.get(y);w&&l.Ta.set(y,w.withResumeToken(g.resumeToken,h))}})),f.targetMismatches.forEach(((g,y)=>{const w=l.Ta.get(g);if(!w)return;l.Ta.set(g,w.withResumeToken(Dt.EMPTY_BYTE_STRING,w.snapshotVersion)),Kw(l,g);const S=new Ii(w.target,g,y,w.sequenceNumber);hp(l,S)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(i){re(Ss,"Failed to raise snapshot:",i),await Ec(n,i)}}async function Ec(n,e,t){if(!Ho(e))throw e;n.Ia.add(1),await Tl(n),n.Aa.set("Offline"),t||(t=()=>$w(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{re(Ss,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await qc(n)}))}function Qw(n,e){return e().catch((t=>Ec(n,t,e)))}async function Hc(n){const e=Te(n),t=Oi(e);let i=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Qf;for(;wC(e);)try{const o=await tC(e.localStore,i);if(o===null){e.Pa.length===0&&t.B_();break}i=o.batchId,EC(e,o)}catch(o){await Ec(e,o)}Yw(e)&&Jw(e)}function wC(n){return Os(n)&&n.Pa.length<10}function EC(n,e){n.Pa.push(e);const t=Oi(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function Yw(n){return Os(n)&&!Oi(n).M_()&&n.Pa.length>0}function Jw(n){Oi(n).start()}async function TC(n){Oi(n).na()}async function IC(n){const e=Oi(n);for(const t of n.Pa)e.X_(t.mutations)}async function SC(n,e,t){const i=n.Pa.shift(),o=rp.from(i,e,t);await Qw(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await Hc(n)}async function AC(n,e){e&&Oi(n).Z_&&await(async function(i,o){if((function(h){return aR(h)&&h!==W.ABORTED})(o.code)){const l=i.Pa.shift();Oi(i).N_(),await Qw(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Hc(i)}})(n,e),Yw(n)&&Jw(n)}async function m_(n,e){const t=Te(n);t.asyncQueue.verifyOperationInProgress(),re(Ss,"RemoteStore received new credentials");const i=Os(t);t.Ia.add(3),await Tl(t),i&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await qc(t)}async function RC(n,e){const t=Te(n);e?(t.Ia.delete(2),await qc(t)):e||(t.Ia.add(2),await Tl(t),t.Aa.set("Unknown"))}function Ko(n){return n.Va||(n.Va=(function(t,i,o){const l=Te(t);return l.ia(),new cC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:gC.bind(null,n),e_:yC.bind(null,n),n_:_C.bind(null,n),J_:vC.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),fp(n)?dp(n):n.Aa.set("Unknown")):(await n.Va.stop(),Gw(n))}))),n.Va}function Oi(n){return n.ma||(n.ma=(function(t,i,o){const l=Te(t);return l.ia(),new hC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:TC.bind(null,n),n_:AC.bind(null,n),ea:IC.bind(null,n),ta:SC.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Hc(n)):(await n.ma.stop(),n.Pa.length>0&&(re(Ss,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Ri,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new pp(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mp(n,e){if(Hr("AsyncQueue",`${e}: ${n}`),Ho(n))return new te(W.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{static emptySet(e){return new bo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||pe.comparator(t.key,i.key):(t,i)=>pe.comparator(t.key,i.key),this.keyedMap=Wa(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof bo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new bo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(){this.fa=new tt(pe.comparator)}track(e){const t=e.doc.key,i=this.fa.get(t);i?e.type!==0&&i.type===3?this.fa=this.fa.insert(t,e):e.type===3&&i.type!==1?this.fa=this.fa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.fa=this.fa.remove(t):e.type===1&&i.type===2?this.fa=this.fa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ve(63341,{At:e,ga:i}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Bo{constructor(e,t,i,o,l,h,f,g,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new Bo(e,t,bo.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class kC{constructor(){this.queries=y_(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,i){const o=Te(t),l=o.queries;o.queries=y_(),l.forEach(((h,f)=>{for(const g of f.wa)g.onError(i)}))})(this,new te(W.ABORTED,"Firestore shutting down"))}}function y_(){return new Ds((n=>_w(n)),jc)}async function Xw(n,e){const t=Te(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(i=2):(l=new CC,i=e.ba()?0:1);try{switch(i){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=mp(h,`Initialization of query '${ko(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&gp(t)}async function Zw(n,e){const t=Te(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function PC(n,e){const t=Te(n);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.wa)f.Ca(o)&&(i=!0);h.ya=o}}i&&gp(t)}function NC(n,e,t){const i=Te(n),o=i.queries.get(e);if(o)for(const l of o.wa)l.onError(t);i.queries.delete(e)}function gp(n){n.Da.forEach((e=>{e.next()}))}var Sf,__;(__=Sf||(Sf={})).Fa="default",__.Cache="cache";class eE{constructor(e,t,i){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Bo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const i=t!=="Offline";return(!this.options.ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Bo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Sf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e){this.key=e}}class nE{constructor(e){this.key=e}}class xC{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Pe(),this.mutatedKeys=Pe(),this.Xa=vw(e),this.eu=new bo(this.Xa)}get tu(){return this.Ha}nu(e,t){const i=t?t.ru:new g_,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,S)=>{const A=o.get(w),F=Fc(this.query,S)?S:null,q=!!A&&this.mutatedKeys.has(A.key),H=!!F&&(F.hasLocalMutations||this.mutatedKeys.has(F.key)&&F.hasCommittedMutations);let B=!1;A&&F?A.data.isEqual(F.data)?q!==H&&(i.track({type:3,doc:F}),B=!0):this.iu(A,F)||(i.track({type:2,doc:F}),B=!0,(g&&this.Xa(F,g)>0||y&&this.Xa(F,y)<0)&&(f=!0)):!A&&F?(i.track({type:0,doc:F}),B=!0):A&&!F&&(i.track({type:1,doc:A}),B=!0,(g||y)&&(f=!0)),B&&(F?(h=h.add(F),l=H?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),i.track({type:1,doc:w})}return{eu:h,ru:i,Ds:f,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((w,S)=>(function(F,q){const H=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{At:B})}};return H(F)-H(q)})(w.type,S.type)||this.Xa(w.doc,S.doc))),this.su(i),o=o!=null&&o;const f=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,y=g!==this.Ya;return this.Ya=g,h.length!==0||y?{snapshot:new Bo(this.query,e.eu,l,h,e.mutatedKeys,g===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new g_,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Pe(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const t=[];return e.forEach((i=>{this.Za.has(i)||t.push(new nE(i))})),this.Za.forEach((i=>{e.has(i)||t.push(new tE(i))})),t}uu(e){this.Ha=e.qs,this.Za=Pe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Bo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const yp="SyncEngine";class DC{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class OC{constructor(e){this.key=e,this.lu=!1}}class VC{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new Ds((f=>_w(f)),jc),this.Tu=new Map,this.Iu=new Set,this.du=new tt(pe.comparator),this.Eu=new Map,this.Au=new op,this.Ru={},this.Vu=new Map,this.mu=Uo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function bC(n,e,t=!0){const i=lE(n);let o;const l=i.Pu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await rE(i,e,t,!0),o}async function MC(n,e){const t=lE(n);await rE(t,e,!0,!1)}async function rE(n,e,t,i){const o=await nC(n.localStore,cr(e)),l=o.targetId,h=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await LC(n,e,l,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&Ww(n.remoteStore,o),f}async function LC(n,e,t,i,o){n.gu=(S,A,F)=>(async function(H,B,ae,ue){let ie=B.view.nu(ae);ie.Ds&&(ie=await c_(H.localStore,B.query,!1).then((({documents:k})=>B.view.nu(k,ie))));const se=ue&&ue.targetChanges.get(B.targetId),xe=ue&&ue.targetMismatches.get(B.targetId)!=null,$=B.view.applyChanges(ie,H.isPrimaryClient,se,xe);return w_(H,B.targetId,$._u),$.snapshot})(n,S,A,F);const l=await c_(n.localStore,e,!0),h=new xC(e,l.qs),f=h.nu(l.documents),g=El.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=h.applyChanges(f,n.isPrimaryClient,g);w_(n,t,y._u);const w=new DC(e,t,h);return n.Pu.set(e,w),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),y.snapshot}async function jC(n,e,t){const i=Te(n),o=i.Pu.get(e),l=i.Tu.get(o.targetId);if(l.length>1)return i.Tu.set(o.targetId,l.filter((h=>!jc(h,e)))),void i.Pu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Tf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&cp(i.remoteStore,o.targetId),Af(i,o.targetId)})).catch(qo)):(Af(i,o.targetId),await Tf(i.localStore,o.targetId,!0))}async function FC(n,e){const t=Te(n),i=t.Pu.get(e),o=t.Tu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),cp(t.remoteStore,i.targetId))}async function UC(n,e,t){const i=KC(n);try{const o=await(function(h,f){const g=Te(h),y=Qe.now(),w=f.reduce(((F,q)=>F.add(q.key)),Pe());let S,A;return g.persistence.runTransaction("Locally write mutations","readwrite",(F=>{let q=Wr(),H=Pe();return g.Os.getEntries(F,w).next((B=>{q=B,q.forEach(((ae,ue)=>{ue.isValidDocument()||(H=H.add(ae))}))})).next((()=>g.localDocuments.getOverlayedDocuments(F,q))).next((B=>{S=B;const ae=[];for(const ue of f){const ie=nR(ue,S.get(ue.key).overlayedDocument);ie!=null&&ae.push(new Fi(ue.key,ie,cw(ie.value.mapValue),Cn.exists(!0)))}return g.mutationQueue.addMutationBatch(F,y,ae,f)})).next((B=>{A=B;const ae=B.applyToLocalDocumentSet(S,H);return g.documentOverlayCache.saveOverlays(F,B.batchId,ae)}))})).then((()=>({batchId:A.batchId,changes:Ew(S)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(h,f,g){let y=h.Ru[h.currentUser.toKey()];y||(y=new tt(Ae)),y=y.insert(f,g),h.Ru[h.currentUser.toKey()]=y})(i,o.batchId,t),await Il(i,o.changes),await Hc(i.remoteStore)}catch(o){const l=mp(o,"Failed to persist write");t.reject(l)}}async function iE(n,e){const t=Te(n);try{const i=await ZR(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Eu.get(l);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Fe(h.lu,14607):o.removedDocuments.size>0&&(Fe(h.lu,42227),h.lu=!1))})),await Il(t,i,e)}catch(i){await qo(i)}}function v_(n,e,t){const i=Te(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Pu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const g=Te(h);g.onlineState=f;let y=!1;g.queries.forEach(((w,S)=>{for(const A of S.wa)A.va(f)&&(y=!0)})),y&&gp(g)})(i.eventManager,e),o.length&&i.hu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function BC(n,e,t){const i=Te(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Eu.get(e),l=o&&o.key;if(l){let h=new tt(pe.comparator);h=h.insert(l,Bt.newNoDocument(l,Ee.min()));const f=Pe().add(l),g=new zc(Ee.min(),new Map,new tt(Ae),h,f);await iE(i,g),i.du=i.du.remove(l),i.Eu.delete(e),_p(i)}else await Tf(i.localStore,e,!1).then((()=>Af(i,e,t))).catch(qo)}async function zC(n,e){const t=Te(n),i=e.batch.batchId;try{const o=await XR(t.localStore,e);oE(t,i,null),sE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Il(t,o)}catch(o){await qo(o)}}async function $C(n,e,t){const i=Te(n);try{const o=await(function(h,f){const g=Te(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let w;return g.mutationQueue.lookupMutationBatch(y,f).next((S=>(Fe(S!==null,37113),w=S.keys(),g.mutationQueue.removeMutationBatch(y,S)))).next((()=>g.mutationQueue.performConsistencyCheck(y))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(y,w,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,w))).next((()=>g.localDocuments.getDocuments(y,w)))}))})(i.localStore,e);oE(i,e,t),sE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Il(i,o)}catch(o){await qo(o)}}function sE(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function oE(n,e,t){const i=Te(n);let o=i.Ru[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ru[i.currentUser.toKey()]=o}}function Af(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Tu.get(e))n.Pu.delete(i),t&&n.hu.pu(i,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((i=>{n.Au.containsKey(i)||aE(n,i)}))}function aE(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(cp(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),_p(n))}function w_(n,e,t){for(const i of t)i instanceof tE?(n.Au.addReference(i.key,e),qC(n,i)):i instanceof nE?(re(yp,"Document no longer in limbo: "+i.key),n.Au.removeReference(i.key,e),n.Au.containsKey(i.key)||aE(n,i.key)):ve(19791,{yu:i})}function qC(n,e){const t=e.key,i=t.path.canonicalString();n.du.get(t)||n.Iu.has(i)||(re(yp,"New document in limbo: "+t),n.Iu.add(i),_p(n))}function _p(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new pe(We.fromString(e)),i=n.mu.next();n.Eu.set(i,new OC(t)),n.du=n.du.insert(t,i),Ww(n.remoteStore,new Ii(cr(ep(t.path)),i,"TargetPurposeLimboResolution",bc.ue))}}async function Il(n,e,t){const i=Te(n),o=[],l=[],h=[];i.Pu.isEmpty()||(i.Pu.forEach(((f,g)=>{h.push(i.gu(g,e,t).then((y=>{var w;if((y||t)&&i.isPrimaryClient){const S=y?!y.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;i.sharedClientState.updateQueryState(g.targetId,S?"current":"not-current")}if(y){o.push(y);const S=lp.Es(g.targetId,y);l.push(S)}})))})),await Promise.all(h),i.hu.J_(o),await(async function(g,y){const w=Te(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(S=>K.forEach(y,(A=>K.forEach(A.Is,(F=>w.persistence.referenceDelegate.addReference(S,A.targetId,F))).next((()=>K.forEach(A.ds,(F=>w.persistence.referenceDelegate.removeReference(S,A.targetId,F)))))))))}catch(S){if(!Ho(S))throw S;re(up,"Failed to update sequence numbers: "+S)}for(const S of y){const A=S.targetId;if(!S.fromCache){const F=w.Fs.get(A),q=F.snapshotVersion,H=F.withLastLimboFreeSnapshotVersion(q);w.Fs=w.Fs.insert(A,H)}}})(i.localStore,l))}async function HC(n,e){const t=Te(n);if(!t.currentUser.isEqual(e)){re(yp,"User change. New user:",e.toKey());const i=await zw(t.localStore,e);t.currentUser=e,(function(l,h){l.Vu.forEach((f=>{f.forEach((g=>{g.reject(new te(W.CANCELLED,h))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Il(t,i.Bs)}}function WC(n,e){const t=Te(n),i=t.Eu.get(e);if(i&&i.lu)return Pe().add(i.key);{let o=Pe();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const f=t.Pu.get(h);o=o.unionWith(f.view.tu)}return o}}function lE(n){const e=Te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=iE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BC.bind(null,e),e.hu.J_=PC.bind(null,e.eventManager),e.hu.pu=NC.bind(null,e.eventManager),e}function KC(n){const e=Te(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$C.bind(null,e),e}class Tc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$c(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return JR(this.persistence,new GR,e.initialUser,this.serializer)}Du(e){return new Bw(ap.Vi,this.serializer)}bu(e){return new iC}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Tc.provider={build:()=>new Tc};class GC extends Tc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Fe(this.persistence.referenceDelegate instanceof wc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new OR(i,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?nn.withCacheSize(this.cacheSizeBytes):nn.DEFAULT;return new Bw((i=>wc.Vi(i,t)),this.serializer)}}class Rf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>v_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=HC.bind(null,this.syncEngine),await RC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new kC})()}createDatastore(e){const t=$c(e.databaseInfo.databaseId),i=(function(l){return new uC(l)})(e.databaseInfo);return(function(l,h,f,g){return new fC(l,h,f,g)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,h,f){return new mC(i,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>v_(this.syncEngine,t,0)),(function(){return f_.C()?new f_:new sC})())}createSyncEngine(e,t){return(function(o,l,h,f,g,y,w){const S=new VC(o,l,h,f,g,y);return w&&(S.fu=!0),S})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Te(o);re(Ss,"RemoteStore shutting down."),l.Ia.add(5),await Tl(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Rf.provider={build:()=>new Rf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Hr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi="FirestoreClient";class QC{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=Gf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async h=>{re(Vi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(i,(h=>(re(Vi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ri;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=mp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Wd(n,e){n.asyncQueue.verifyOperationInProgress(),re(Vi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await zw(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>{ki("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{re("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{ki("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),n._offlineComponents=e}async function E_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await YC(n);re(Vi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>m_(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>m_(e.remoteStore,o))),n._onlineComponents=e}async function YC(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){re(Vi,"Using user provided OfflineComponentProvider");try{await Wd(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;ki("Error using user provided cache. Falling back to memory cache: "+t),await Wd(n,new Tc)}}else re(Vi,"Using default OfflineComponentProvider"),await Wd(n,new GC(void 0));return n._offlineComponents}async function cE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(re(Vi,"Using user provided OnlineComponentProvider"),await E_(n,n._uninitializedComponentsProvider._online)):(re(Vi,"Using default OnlineComponentProvider"),await E_(n,new Rf))),n._onlineComponents}function JC(n){return cE(n).then((e=>e.syncEngine))}async function Cf(n){const e=await cE(n),t=e.eventManager;return t.onListen=bC.bind(null,e.syncEngine),t.onUnlisten=jC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=MC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=FC.bind(null,e.syncEngine),t}function XC(n,e,t={}){const i=new Ri;return n.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,y){const w=new uE({next:A=>{w.Ou(),h.enqueueAndForget((()=>Zw(l,S))),A.fromCache&&g.source==="server"?y.reject(new te(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(A)},error:A=>y.reject(A)}),S=new eE(f,w,{includeMetadataChanges:!0,ka:!0});return Xw(l,S)})(await Cf(n),n.asyncQueue,e,t,i))),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="firestore.googleapis.com",I_=!0;class S_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new te(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=dE,this.ssl=I_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:I_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Uw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<xR)throw new te(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}m1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new te(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new te(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new te(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new S_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new S_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new o1;switch(i.type){case"firstParty":return new c1(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new te(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=T_.get(t);i&&(re("ComponentProvider","Removing Datastore"),T_.delete(t),i.terminate())})(this),Promise.resolve()}}function ZC(n,e,t,i={}){var o;n=Rn(n,Wc);const l=Cs(e),h=n._getSettings(),f=Object.assign(Object.assign({},h),{emulatorOptions:n._getEmulatorOptions()}),g=`${e}:${t}`;l&&(Vf(`https://${g}`),bf("Firestore",!0)),h.host!==dE&&h.host!==g&&ki("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},h),{host:g,ssl:l,emulatorOptions:i});if(!ws(y,f)&&(n._setSettings(y),i.mockUserToken)){let w,S;if(typeof i.mockUserToken=="string")w=i.mockUserToken,S=Ut.MOCK_USER;else{w=nv(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const A=i.mockUserToken.sub||i.mockUserToken.user_id;if(!A)throw new te(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new Ut(A)}n._authCredentials=new a1(new Jv(w,S))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ui(this.firestore,e,this._query)}}class at{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ci(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new at(this.firestore,e,this._key)}toJSON(){return{type:at._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(vl(t,at._jsonSchema))return new at(e,i||null,new pe(We.fromString(t.referencePath)))}}at._jsonSchemaVersion="firestore/documentReference/1.0",at._jsonSchema={type:dt("string",at._jsonSchemaVersion),referencePath:dt("string")};class Ci extends Ui{constructor(e,t,i){super(e,t,ep(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new pe(e))}withConverter(e){return new Ci(this.firestore,e,this._path)}}function Fr(n,e,...t){if(n=et(n),Zv("collection","path",e),n instanceof Wc){const i=We.fromString(e,...t);return Ly(i),new Ci(n,null,i)}{if(!(n instanceof at||n instanceof Ci))throw new te(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(We.fromString(e,...t));return Ly(i),new Ci(n.firestore,null,i)}}function Ur(n,e,...t){if(n=et(n),arguments.length===1&&(e=Gf.newId()),Zv("doc","path",e),n instanceof Wc){const i=We.fromString(e,...t);return My(i),new at(n,null,new pe(i))}{if(!(n instanceof at||n instanceof Ci))throw new te(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(We.fromString(e,...t));return My(i),new at(n.firestore,n instanceof Ci?n.converter:null,new pe(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_="AsyncQueue";class R_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new qw(this,"async_queue_retry"),this.oc=()=>{const i=Hd();i&&re(A_,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const t=Hd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Hd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Ri;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ho(e))throw e;re(A_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((i=>{throw this.tc=i,this.nc=!1,Hr("INTERNAL UNHANDLED ERROR: ",C_(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=pp.createAndSchedule(this,e,t,i,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&ve(47125,{hc:C_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function C_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(n,["next","error","complete"])}class bi extends Wc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new R_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new R_(e),this._firestoreClient=void 0,await e}}}function ek(n,e){const t=typeof n=="object"?n:Nc(),i=typeof n=="string"?n:mc,o=Ps(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=Z_("firestore");l&&ZC(o,...l)}return o}function vp(n){if(n._terminated)throw new te(W.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||tk(n),n._firestoreClient}function tk(n){var e,t,i;const o=n._freezeSettings(),l=(function(f,g,y,w){return new R1(f,g,y,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,hE(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new QC(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&(function(f){const g=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(g),_online:g}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this._byteString=e}static fromBase64String(e){try{return new An(Dt.fromBase64String(e))}catch(t){throw new te(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new An(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:An._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(vl(e,An._jsonSchema))return An.fromBase64String(e.bytes)}}An._jsonSchemaVersion="firestore/bytes/1.0",An._jsonSchema={type:dt("string",An._jsonSchemaVersion),bytes:dt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:dr._jsonSchemaVersion}}static fromJSON(e){if(vl(e,dr._jsonSchema))return new dr(e.latitude,e.longitude)}}dr._jsonSchemaVersion="firestore/geoPoint/1.0",dr._jsonSchema={type:dt("string",dr._jsonSchemaVersion),latitude:dt("number"),longitude:dt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:fr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(vl(e,fr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new fr(e.vectorValues);throw new te(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}fr._jsonSchemaVersion="firestore/vectorValue/1.0",fr._jsonSchema={type:dt("string",fr._jsonSchemaVersion),vectorValues:dt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=/^__.*__$/;class rk{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Fi(e,this.data,this.fieldMask,t,this.fieldTransforms):new wl(e,this.data,t,this.fieldTransforms)}}class fE{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Fi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function pE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ec:n})}}class wp{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new wp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.fc(e),o}gc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ic(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(pE(this.Ec)&&nk.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class ik{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||$c(e)}Dc(e,t,i,o=!1){return new wp({Ec:e,methodName:t,bc:i,path:Nt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qc(n){const e=n._freezeSettings(),t=$c(n._databaseId);return new ik(n._databaseId,!!e.ignoreUndefinedProperties,t)}function mE(n,e,t,i,o,l={}){const h=n.Dc(l.merge||l.mergeFields?2:0,e,t,o);Tp("Data must be an object, but it was:",h,i);const f=gE(i,h);let g,y;if(l.merge)g=new pn(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const S of l.mergeFields){const A=kf(e,S,t);if(!h.contains(A))throw new te(W.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);_E(w,A)||w.push(A)}g=new pn(w),y=h.fieldTransforms.filter((S=>g.covers(S.field)))}else g=null,y=h.fieldTransforms;return new rk(new rn(f),g,y)}class Yc extends Gc{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yc}}class Ep extends Gc{_toFieldTransform(e){return new X1(e.path,new ul)}isEqual(e){return e instanceof Ep}}function sk(n,e,t,i){const o=n.Dc(1,e,t);Tp("Data must be an object, but it was:",o,i);const l=[],h=rn.empty();ji(i,((g,y)=>{const w=Ip(e,g,t);y=et(y);const S=o.gc(w);if(y instanceof Yc)l.push(w);else{const A=Sl(y,S);A!=null&&(l.push(w),h.set(w,A))}}));const f=new pn(l);return new fE(h,f,o.fieldTransforms)}function ok(n,e,t,i,o,l){const h=n.Dc(1,e,t),f=[kf(e,i,t)],g=[o];if(l.length%2!=0)throw new te(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<l.length;A+=2)f.push(kf(e,l[A])),g.push(l[A+1]);const y=[],w=rn.empty();for(let A=f.length-1;A>=0;--A)if(!_E(y,f[A])){const F=f[A];let q=g[A];q=et(q);const H=h.gc(F);if(q instanceof Yc)y.push(F);else{const B=Sl(q,H);B!=null&&(y.push(F),w.set(F,B))}}const S=new pn(y);return new fE(w,S,h.fieldTransforms)}function ak(n,e,t,i=!1){return Sl(t,n.Dc(i?4:3,e))}function Sl(n,e){if(yE(n=et(n)))return Tp("Unsupported field value:",e,n),gE(n,e);if(n instanceof Gc)return(function(i,o){if(!pE(o.Ec))throw o.wc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(i,o){const l=[];let h=0;for(const f of i){let g=Sl(f,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=et(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Q1(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Qe.fromDate(i);return{timestampValue:vc(o.serializer,l)}}if(i instanceof Qe){const l=new Qe(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:vc(o.serializer,l)}}if(i instanceof dr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof An)return{bytesValue:Ow(o.serializer,i._byteString)};if(i instanceof at){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:sp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof fr)return(function(h,f){return{mapValue:{fields:{[lw]:{stringValue:uw},[gc]:{arrayValue:{values:h.toArray().map((y=>{if(typeof y!="number")throw f.wc("VectorValues must only contain numeric values.");return tp(f.serializer,y)}))}}}}}})(i,o);throw o.wc(`Unsupported field value: ${Vc(i)}`)})(n,e)}function gE(n,e){const t={};return nw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ji(n,((i,o)=>{const l=Sl(o,e.Vc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function yE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Qe||n instanceof dr||n instanceof An||n instanceof at||n instanceof Gc||n instanceof fr)}function Tp(n,e,t){if(!yE(t)||!ew(t)){const i=Vc(t);throw i==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+i)}}function kf(n,e,t){if((e=et(e))instanceof Kc)return e._internalPath;if(typeof e=="string")return Ip(n,e);throw Ic("Field path arguments must be of type string or ",n,!1,void 0,t)}const lk=new RegExp("[~\\*/\\[\\]]");function Ip(n,e,t){if(e.search(lk)>=0)throw Ic(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Kc(...e.split("."))._internalPath}catch{throw Ic(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ic(n,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${i}`),h&&(g+=` in document ${o}`),g+=")"),new te(W.INVALID_ARGUMENT,f+n+g)}function _E(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Jc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class uk extends vE{data(){return super.data()}}function Jc(n,e){return typeof e=="string"?Ip(n,e):e instanceof Kc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new te(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sp{}class EE extends Sp{}function Mo(n,e,...t){let i=[];e instanceof Sp&&i.push(e),i=i.concat(t),(function(l){const h=l.filter((g=>g instanceof Ap)).length,f=l.filter((g=>g instanceof Xc)).length;if(h>1||h>0&&f>0)throw new te(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class Xc extends EE{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Xc(e,t,i)}_apply(e){const t=this._parse(e);return TE(e._query,t),new Ui(e.firestore,e.converter,gf(e._query,t))}_parse(e){const t=Qc(e.firestore);return(function(l,h,f,g,y,w,S){let A;if(y.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new te(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){N_(S,w);const q=[];for(const H of S)q.push(P_(g,l,H));A={arrayValue:{values:q}}}else A=P_(g,l,S)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||N_(S,w),A=ak(f,h,S,w==="in"||w==="not-in");return ht.create(y,w,A)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Sc(n,e,t){const i=e,o=Jc("where",n);return Xc._create(o,i,t)}class Ap extends Sp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ap(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Gn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const f=l.getFlattenedFilters();for(const g of f)TE(h,g),h=gf(h,g)})(e._query,t),new Ui(e.firestore,e.converter,gf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Rp extends EE{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Rp(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new te(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new te(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ll(l,h)})(e._query,this._field,this._direction);return new Ui(e.firestore,e.converter,(function(o,l){const h=o.explicitOrderBy.concat([l]);return new Wo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function Pf(n,e="asc"){const t=e,i=Jc("orderBy",n);return Rp._create(i,t)}function P_(n,e,t){if(typeof(t=et(t))=="string"){if(t==="")throw new te(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yw(e)&&t.indexOf("/")!==-1)throw new te(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(We.fromString(t));if(!pe.isDocumentKey(i))throw new te(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Hy(n,new pe(i))}if(t instanceof at)return Hy(n,t._key);throw new te(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vc(t)}.`)}function N_(n,e){if(!Array.isArray(n)||n.length===0)throw new te(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function TE(n,e){const t=(function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new te(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class ck{convertValue(e,t="none"){switch(Di(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return ji(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[gc].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map((h=>ot(h.doubleValue)));return new fr(l)}convertGeoPoint(e){return new dr(ot(e.latitude),ot(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Lc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(sl(e));default:return null}}convertTimestamp(e){const t=Ni(e);return new Qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=We.fromString(e);Fe(Fw(i),9688,{name:e});const o=new ol(i.get(1),i.get(3)),l=new pe(i.popFirst(5));return o.isEqual(t)||Hr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}class Ga{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _s extends vE{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ic(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Jc("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new te(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=_s._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}_s._jsonSchemaVersion="firestore/documentSnapshot/1.0",_s._jsonSchema={type:dt("string",_s._jsonSchemaVersion),bundleSource:dt("string","DocumentSnapshot"),bundleName:dt("string"),bundle:dt("string")};class ic extends _s{data(e={}){return super.data(e)}}class vs{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ga(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new ic(this._firestore,this._userDataWriter,i.key,i,new Ga(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new te(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const g=new ic(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ga(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new ic(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ga(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,w=-1;return f.type!==0&&(y=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),w=h.indexOf(f.doc.key)),{type:hk(f.type),doc:g,oldIndex:y,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new te(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=vs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Gf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function hk(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:n})}}vs._jsonSchemaVersion="firestore/querySnapshot/1.0",vs._jsonSchema={type:dt("string",vs._jsonSchemaVersion),bundleSource:dt("string","QuerySnapshot"),bundleName:dt("string"),bundle:dt("string")};class Cp extends ck{constructor(e){super(),this.firestore=e}convertBytes(e){return new An(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,t)}}function kp(n){n=Rn(n,Ui);const e=Rn(n.firestore,bi),t=vp(e),i=new Cp(e);return wE(n._query),XC(t,n._query).then((o=>new vs(e,i,n,o)))}function Pp(n,e,t){n=Rn(n,at);const i=Rn(n.firestore,bi),o=IE(n.converter,e,t);return eh(i,[mE(Qc(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,Cn.none())])}function Zc(n,e,t,...i){n=Rn(n,at);const o=Rn(n.firestore,bi),l=Qc(o);let h;return h=typeof(e=et(e))=="string"||e instanceof Kc?ok(l,"updateDoc",n._key,e,t,i):sk(l,"updateDoc",n._key,e),eh(o,[h.toMutation(n._key,Cn.exists(!0))])}function x_(n){return eh(Rn(n.firestore,bi),[new np(n._key,Cn.none())])}function SE(n,e){const t=Rn(n.firestore,bi),i=Ur(n),o=IE(n.converter,e);return eh(t,[mE(Qc(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,Cn.exists(!1))]).then((()=>i))}function sc(n,...e){var t,i,o;n=et(n);let l={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||k_(e[h])||(l=e[h++]);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(k_(e[h])){const S=e[h];e[h]=(t=S.next)===null||t===void 0?void 0:t.bind(S),e[h+1]=(i=S.error)===null||i===void 0?void 0:i.bind(S),e[h+2]=(o=S.complete)===null||o===void 0?void 0:o.bind(S)}let g,y,w;if(n instanceof at)y=Rn(n.firestore,bi),w=ep(n._key.path),g={next:S=>{e[h]&&e[h](dk(y,n,S))},error:e[h+1],complete:e[h+2]};else{const S=Rn(n,Ui);y=Rn(S.firestore,bi),w=S._query;const A=new Cp(y);g={next:F=>{e[h]&&e[h](new vs(y,A,S,F))},error:e[h+1],complete:e[h+2]},wE(n._query)}return(function(A,F,q,H){const B=new uE(H),ae=new eE(F,B,q);return A.asyncQueue.enqueueAndForget((async()=>Xw(await Cf(A),ae))),()=>{B.Ou(),A.asyncQueue.enqueueAndForget((async()=>Zw(await Cf(A),ae)))}})(vp(y),w,f,g)}function eh(n,e){return(function(i,o){const l=new Ri;return i.asyncQueue.enqueueAndForget((async()=>UC(await JC(i),o,l))),l.promise})(vp(n),e)}function dk(n,e,t){const i=t.docs.get(e._key),o=new Cp(n);return new _s(n,o,e._key,i,new Ga(t.hasPendingWrites,t.fromCache),e.converter)}function Np(){return new Ep("serverTimestamp")}(function(e,t=!0){(function(o){$o=o})(Ns),Wn(new kn("firestore",((i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new bi(new l1(i.getProvider("auth-internal")),new h1(h,i.getProvider("app-check-internal")),(function(y,w){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new te(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ol(y.options.projectId,w)})(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),sn(xy,Dy,e),sn(xy,Dy,"esm2017")})();var fk="firebase",pk="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn(fk,pk,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE="firebasestorage.googleapis.com",mk="storageBucket",gk=120*1e3,yk=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Qn{constructor(e,t,i=0){super(Kd(e),`Firebase Storage: ${t} (${Kd(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,gr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Kd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var mr;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(mr||(mr={}));function Kd(n){return"storage/"+n}function _k(){const n="An unknown error occurred, please check the error payload for server response.";return new gr(mr.UNKNOWN,n)}function vk(){return new gr(mr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function wk(){return new gr(mr.CANCELED,"User canceled the upload/download.")}function Ek(n){return new gr(mr.INVALID_URL,"Invalid URL '"+n+"'.")}function Tk(n){return new gr(mr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function D_(n){return new gr(mr.INVALID_ARGUMENT,n)}function RE(){return new gr(mr.APP_DELETED,"The Firebase app was deleted.")}function Ik(n){return new gr(mr.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Hn.makeFromUrl(e,t)}catch{return new Hn(e,"")}if(i.path==="")return i;throw Tk(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(se){se.path.charAt(se.path.length-1)==="/"&&(se.path_=se.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),g={bucket:1,path:3};function y(se){se.path_=decodeURIComponent(se.path)}const w="v[A-Za-z0-9_]+",S=t.replace(/[.]/g,"\\."),A="(/([^?#]*).*)?$",F=new RegExp(`^https?://${S}/${w}/b/${o}/o${A}`,"i"),q={bucket:1,path:3},H=t===AE?"(?:storage.googleapis.com|storage.cloud.google.com)":t,B="([^?#]*)",ae=new RegExp(`^https?://${H}/${o}/${B}`,"i"),ie=[{regex:f,indices:g,postModify:l},{regex:F,indices:q,postModify:y},{regex:ae,indices:{bucket:1,path:2},postModify:y}];for(let se=0;se<ie.length;se++){const xe=ie[se],$=xe.regex.exec(e);if($){const k=$[xe.indices.bucket];let I=$[xe.indices.path];I||(I=""),i=new Hn(k,I),xe.postModify(i);break}}if(i==null)throw Ek(e);return i}}class Sk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ak(n,e,t){let i=1,o=null,l=null,h=!1,f=0;function g(){return f===2}let y=!1;function w(...B){y||(y=!0,e.apply(null,B))}function S(B){o=setTimeout(()=>{o=null,n(F,g())},B)}function A(){l&&clearTimeout(l)}function F(B,...ae){if(y){A();return}if(B){A(),w.call(null,B,...ae);return}if(g()||h){A(),w.call(null,B,...ae);return}i<64&&(i*=2);let ie;f===1?(f=2,ie=0):ie=(i+Math.random())*1e3,S(ie)}let q=!1;function H(B){q||(q=!0,A(),!y&&(o!==null?(B||(f=2),clearTimeout(o),S(0)):B||(f=1)))}return S(0),l=setTimeout(()=>{h=!0,H(!0)},t),H}function Rk(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(n){return n!==void 0}function O_(n,e,t,i){if(i<e)throw D_(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw D_(`Invalid value for '${n}'. Expected ${t} or less.`)}function kk(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var Ac;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ac||(Ac={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e,t,i,o,l,h,f,g,y,w,S,A=!0,F=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=g,this.timeout_=y,this.progressCallback_=w,this.connectionFactory_=S,this.retry=A,this.isUsingEmulator=F,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((q,H)=>{this.resolve_=q,this.reject_=H,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new Gu(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const g=f.loaded,y=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,y)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===Ac.NO_ERROR,g=l.getStatus();if(!f||Pk(g,this.additionalRetryCodes_)&&this.retry){const w=l.getErrorCode()===Ac.ABORT;i(!1,new Gu(!1,null,w));return}const y=this.successCodes_.indexOf(g)!==-1;i(!0,new Gu(y,l))})},t=(i,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const g=this.callback_(f,f.getResponse());Ck(g)?l(g):l()}catch(g){h(g)}else if(f!==null){const g=_k();g.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,g)):h(g)}else if(o.canceled){const g=this.appDelete_?RE():wk();h(g)}else{const g=vk();h(g)}};this.canceled_?t(!1,new Gu(!1,null,!0)):this.backoffId_=Ak(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Rk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Gu{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function xk(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Dk(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ok(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Vk(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function bk(n,e,t,i,o,l,h=!0,f=!1){const g=kk(n.urlParams),y=n.url+g,w=Object.assign({},n.headers);return Ok(w,e),xk(w,t),Dk(w,l),Vk(w,i),new Nk(y,n.method,w,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,h,f)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Lk(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t){this._service=e,t instanceof Hn?this._location=t:this._location=Hn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Rc(e,t)}get root(){const e=new Hn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Lk(this._location.path)}get storage(){return this._service}get parent(){const e=Mk(this._location.path);if(e===null)return null;const t=new Hn(this._location.bucket,e);return new Rc(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Ik(e)}}function V_(n,e){const t=e==null?void 0:e[mk];return t==null?null:Hn.makeFromBucketSpec(t,n)}function jk(n,e,t,i={}){n.host=`${e}:${t}`;const o=Cs(e);o&&(Vf(`https://${n.host}/b`),bf("Storage",!0)),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:l}=i;l&&(n._overrideAuthToken=typeof l=="string"?l:nv(l,n.app.options.projectId))}class Fk{constructor(e,t,i,o,l,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=h,this._bucket=null,this._host=AE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gk,this._maxUploadRetryTime=yk,this._requests=new Set,o!=null?this._bucket=Hn.makeFromBucketSpec(o,this._host):this._bucket=V_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Hn.makeFromBucketSpec(this._url,e):this._bucket=V_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){O_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){O_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(fn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Rc(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new Sk(RE());{const h=bk(e,this._appId,i,o,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const b_="@firebase/storage",M_="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE="storage";function Uk(n=Nc(),e){n=et(n);const i=Ps(n,CE).getImmediate({identifier:e}),o=Z_("storage");return o&&Bk(i,...o),i}function Bk(n,e,t,i={}){jk(n,e,t,i)}function zk(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new Fk(t,i,o,e,Ns)}function $k(){Wn(new kn(CE,zk,"PUBLIC").setMultipleInstances(!0)),sn(b_,M_,""),sn(b_,M_,"esm2017")}$k();const kE="@firebase/installations",xp="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=1e4,NE=`w:${xp}`,xE="FIS_v2",qk="https://firebaseinstallations.googleapis.com/v1",Hk=3600*1e3,Wk="installations",Kk="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},As=new ks(Wk,Kk,Gk);function DE(n){return n instanceof Qn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE({projectId:n}){return`${qk}/projects/${n}/installations`}function VE(n){return{token:n.token,requestStatus:2,expiresIn:Yk(n.expiresIn),creationTime:Date.now()}}async function bE(n,e){const i=(await e.json()).error;return As.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function ME({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Qk(n,{refreshToken:e}){const t=ME(n);return t.append("Authorization",Jk(e)),t}async function LE(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Yk(n){return Number(n.replace("s","000"))}function Jk(n){return`${xE} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xk({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=OE(n),o=ME(n),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={fid:t,authVersion:xE,appId:n.appId,sdkVersion:NE},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await LE(()=>fetch(i,f));if(g.ok){const y=await g.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:VE(y.authToken)}}else throw await bE("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP=/^[cdef][\w-]{21}$/,Nf="";function tP(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=nP(n);return eP.test(t)?t:Nf}catch{return Nf}}function nP(n){return Zk(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=new Map;function UE(n,e){const t=th(n);BE(t,e),rP(t,e)}function BE(n,e){const t=FE.get(n);if(t)for(const i of t)i(e)}function rP(n,e){const t=iP();t&&t.postMessage({key:n,fid:e}),sP()}let ys=null;function iP(){return!ys&&"BroadcastChannel"in self&&(ys=new BroadcastChannel("[Firebase] FID Change"),ys.onmessage=n=>{BE(n.data.key,n.data.fid)}),ys}function sP(){FE.size===0&&ys&&(ys.close(),ys=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP="firebase-installations-database",aP=1,Rs="firebase-installations-store";let Gd=null;function Dp(){return Gd||(Gd=Pc(oP,aP,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Rs)}}})),Gd}async function Cc(n,e){const t=th(n),o=(await Dp()).transaction(Rs,"readwrite"),l=o.objectStore(Rs),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&UE(n,e.fid),e}async function zE(n){const e=th(n),i=(await Dp()).transaction(Rs,"readwrite");await i.objectStore(Rs).delete(e),await i.done}async function nh(n,e){const t=th(n),o=(await Dp()).transaction(Rs,"readwrite"),l=o.objectStore(Rs),h=await l.get(t),f=e(h);return f===void 0?await l.delete(t):await l.put(f,t),await o.done,f&&(!h||h.fid!==f.fid)&&UE(n,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Op(n){let e;const t=await nh(n.appConfig,i=>{const o=lP(i),l=uP(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===Nf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function lP(n){const e=n||{fid:tP(),registrationStatus:0};return $E(e)}function uP(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(As.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=cP(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:hP(n)}:{installationEntry:e}}async function cP(n,e){try{const t=await Xk(n,e);return Cc(n.appConfig,t)}catch(t){throw DE(t)&&t.customData.serverCode===409?await zE(n.appConfig):await Cc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function hP(n){let e=await L_(n.appConfig);for(;e.registrationStatus===1;)await jE(100),e=await L_(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Op(n);return i||t}return e}function L_(n){return nh(n,e=>{if(!e)throw As.create("installation-not-found");return $E(e)})}function $E(n){return dP(n)?{fid:n.fid,registrationStatus:0}:n}function dP(n){return n.registrationStatus===1&&n.registrationTime+PE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fP({appConfig:n,heartbeatServiceProvider:e},t){const i=pP(n,t),o=Qk(n,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={installation:{sdkVersion:NE,appId:n.appId}},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await LE(()=>fetch(i,f));if(g.ok){const y=await g.json();return VE(y)}else throw await bE("Generate Auth Token",g)}function pP(n,{fid:e}){return`${OE(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vp(n,e=!1){let t;const i=await nh(n.appConfig,l=>{if(!qE(l))throw As.create("not-registered");const h=l.authToken;if(!e&&yP(h))return l;if(h.requestStatus===1)return t=mP(n,e),l;{if(!navigator.onLine)throw As.create("app-offline");const f=vP(l);return t=gP(n,f),f}});return t?await t:i.authToken}async function mP(n,e){let t=await j_(n.appConfig);for(;t.authToken.requestStatus===1;)await jE(100),t=await j_(n.appConfig);const i=t.authToken;return i.requestStatus===0?Vp(n,e):i}function j_(n){return nh(n,e=>{if(!qE(e))throw As.create("not-registered");const t=e.authToken;return wP(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function gP(n,e){try{const t=await fP(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await Cc(n.appConfig,i),t}catch(t){if(DE(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await zE(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Cc(n.appConfig,i)}throw t}}function qE(n){return n!==void 0&&n.registrationStatus===2}function yP(n){return n.requestStatus===2&&!_P(n)}function _P(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Hk}function vP(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function wP(n){return n.requestStatus===1&&n.requestTime+PE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EP(n){const e=n,{installationEntry:t,registrationPromise:i}=await Op(e);return i?i.catch(console.error):Vp(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TP(n,e=!1){const t=n;return await IP(t),(await Vp(t,e)).token}async function IP(n){const{registrationPromise:e}=await Op(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(n){if(!n||!n.options)throw Qd("App Configuration");if(!n.name)throw Qd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Qd(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Qd(n){return As.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="installations",AP="installations-internal",RP=n=>{const e=n.getProvider("app").getImmediate(),t=SP(e),i=Ps(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},CP=n=>{const e=n.getProvider("app").getImmediate(),t=Ps(e,HE).getImmediate();return{getId:()=>EP(t),getToken:o=>TP(t,o)}};function kP(){Wn(new kn(HE,RP,"PUBLIC")),Wn(new kn(AP,CP,"PRIVATE"))}kP();sn(kE,xp);sn(kE,xp,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP="/firebase-messaging-sw.js",NP="/firebase-cloud-messaging-push-scope",WE="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",xP="https://fcmregistrations.googleapis.com/v1",KE="google.c.a.c_id",DP="google.c.a.c_l",OP="google.c.a.ts",VP="google.c.a.e",F_=1e4;var U_;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(U_||(U_={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var dl;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(dl||(dl={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function bP(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(t),o=new Uint8Array(i.length);for(let l=0;l<i.length;++l)o[l]=i.charCodeAt(l);return o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="fcm_token_details_db",MP=5,B_="fcm_token_object_Store";async function LP(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(Yd))return null;let e=null;return(await Pc(Yd,MP,{upgrade:async(i,o,l,h)=>{var f;if(o<2||!i.objectStoreNames.contains(B_))return;const g=h.objectStore(B_),y=await g.index("fcmSenderId").get(n);if(await g.clear(),!!y){if(o===2){const w=y;if(!w.auth||!w.p256dh||!w.endpoint)return;e={token:w.fcmToken,createTime:(f=w.createTime)!==null&&f!==void 0?f:Date.now(),subscriptionOptions:{auth:w.auth,p256dh:w.p256dh,endpoint:w.endpoint,swScope:w.swScope,vapidKey:typeof w.vapidKey=="string"?w.vapidKey:br(w.vapidKey)}}}else if(o===3){const w=y;e={token:w.fcmToken,createTime:w.createTime,subscriptionOptions:{auth:br(w.auth),p256dh:br(w.p256dh),endpoint:w.endpoint,swScope:w.swScope,vapidKey:br(w.vapidKey)}}}else if(o===4){const w=y;e={token:w.fcmToken,createTime:w.createTime,subscriptionOptions:{auth:br(w.auth),p256dh:br(w.p256dh),endpoint:w.endpoint,swScope:w.swScope,vapidKey:br(w.vapidKey)}}}}}})).close(),await jd(Yd),await jd("fcm_vapid_details_db"),await jd("undefined"),jP(e)?e:null}function jP(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP="firebase-messaging-database",UP=1,fl="firebase-messaging-store";let Jd=null;function GE(){return Jd||(Jd=Pc(FP,UP,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(fl)}}})),Jd}async function BP(n){const e=QE(n),i=await(await GE()).transaction(fl).objectStore(fl).get(e);if(i)return i;{const o=await LP(n.appConfig.senderId);if(o)return await bp(n,o),o}}async function bp(n,e){const t=QE(n),o=(await GE()).transaction(fl,"readwrite");return await o.objectStore(fl).put(e,t),await o.done,e}function QE({appConfig:n}){return n.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Kt=new ks("messaging","Messaging",zP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $P(n,e){const t=await Lp(n),i=YE(e),o={method:"POST",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(Mp(n.appConfig),o)).json()}catch(h){throw Kt.create("token-subscribe-failed",{errorInfo:h==null?void 0:h.toString()})}if(l.error){const h=l.error.message;throw Kt.create("token-subscribe-failed",{errorInfo:h})}if(!l.token)throw Kt.create("token-subscribe-no-token");return l.token}async function qP(n,e){const t=await Lp(n),i=YE(e.subscriptionOptions),o={method:"PATCH",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(`${Mp(n.appConfig)}/${e.token}`,o)).json()}catch(h){throw Kt.create("token-update-failed",{errorInfo:h==null?void 0:h.toString()})}if(l.error){const h=l.error.message;throw Kt.create("token-update-failed",{errorInfo:h})}if(!l.token)throw Kt.create("token-update-no-token");return l.token}async function HP(n,e){const i={method:"DELETE",headers:await Lp(n)};try{const l=await(await fetch(`${Mp(n.appConfig)}/${e}`,i)).json();if(l.error){const h=l.error.message;throw Kt.create("token-unsubscribe-failed",{errorInfo:h})}}catch(o){throw Kt.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function Mp({projectId:n}){return`${xP}/projects/${n}/registrations`}async function Lp({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function YE({p256dh:n,auth:e,endpoint:t,vapidKey:i}){const o={web:{endpoint:t,auth:e,p256dh:n}};return i!==WE&&(o.web.applicationPubKey=i),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP=10080*60*1e3;async function KP(n){const e=await QP(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:br(e.getKey("auth")),p256dh:br(e.getKey("p256dh"))},i=await BP(n.firebaseDependencies);if(i){if(YP(i.subscriptionOptions,t))return Date.now()>=i.createTime+WP?GP(n,{token:i.token,createTime:Date.now(),subscriptionOptions:t}):i.token;try{await HP(n.firebaseDependencies,i.token)}catch(o){console.warn(o)}return z_(n.firebaseDependencies,t)}else return z_(n.firebaseDependencies,t)}async function GP(n,e){try{const t=await qP(n.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await bp(n.firebaseDependencies,i),t}catch(t){throw t}}async function z_(n,e){const i={token:await $P(n,e),createTime:Date.now(),subscriptionOptions:e};return await bp(n,i),i.token}async function QP(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:bP(e)})}function YP(n,e){const t=e.vapidKey===n.vapidKey,i=e.endpoint===n.endpoint,o=e.auth===n.auth,l=e.p256dh===n.p256dh;return t&&i&&o&&l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return JP(e,n),XP(e,n),ZP(e,n),e}function JP(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const i=e.notification.body;i&&(n.notification.body=i);const o=e.notification.image;o&&(n.notification.image=o);const l=e.notification.icon;l&&(n.notification.icon=l)}function XP(n,e){e.data&&(n.data=e.data)}function ZP(n,e){var t,i,o,l,h;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const f=(o=(i=e.fcmOptions)===null||i===void 0?void 0:i.link)!==null&&o!==void 0?o:(l=e.notification)===null||l===void 0?void 0:l.click_action;f&&(n.fcmOptions.link=f);const g=(h=e.fcmOptions)===null||h===void 0?void 0:h.analytics_label;g&&(n.fcmOptions.analyticsLabel=g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eN(n){return typeof n=="object"&&!!n&&KE in n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(n){if(!n||!n.options)throw Xd("App Configuration Object");if(!n.name)throw Xd("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const i of e)if(!t[i])throw Xd(i);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function Xd(n){return Kt.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,t,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=tN(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rN(n){try{n.swRegistration=await navigator.serviceWorker.register(PP,{scope:NP}),n.swRegistration.update().catch(()=>{}),await iN(n.swRegistration)}catch(e){throw Kt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function iN(n){return new Promise((e,t)=>{const i=setTimeout(()=>t(new Error(`Service worker not registered after ${F_} ms`)),F_),o=n.installing||n.waiting;n.active?(clearTimeout(i),e()):o?o.onstatechange=l=>{var h;((h=l.target)===null||h===void 0?void 0:h.state)==="activated"&&(o.onstatechange=null,clearTimeout(i),e())}:(clearTimeout(i),t(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sN(n,e){if(!e&&!n.swRegistration&&await rN(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Kt.create("invalid-sw-registration");n.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oN(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=WE)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JE(n,e){if(!navigator)throw Kt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Kt.create("permission-blocked");return await oN(n,e==null?void 0:e.vapidKey),await sN(n,e==null?void 0:e.serviceWorkerRegistration),KP(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aN(n,e,t){const i=lN(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:t[KE],message_name:t[DP],message_time:t[OP],message_device_time:Math.floor(Date.now()/1e3)})}function lN(n){switch(n){case dl.NOTIFICATION_CLICKED:return"notification_open";case dl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uN(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===dl.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler($_(t)):n.onMessageHandler.next($_(t)));const i=t.data;eN(i)&&i[VP]==="1"&&await aN(n,t.messageType,i)}const q_="@firebase/messaging",H_="0.12.22";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN=n=>{const e=new nN(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>uN(e,t)),e},hN=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:i=>JE(e,i)}};function dN(){Wn(new kn("messaging",cN,"PUBLIC")),Wn(new kn("messaging-internal",hN,"PRIVATE")),sn(q_,H_),sn(q_,H_,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XE(){try{await iv()}catch{return!1}return typeof window<"u"&&rv()&&x0()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(n=Nc()){return XE().then(e=>{if(!e)throw Kt.create("unsupported-browser")},e=>{throw Kt.create("indexed-db-unsupported")}),Ps(et(n),"messaging").getImmediate()}async function pN(n,e){return n=et(n),JE(n,e)}dN();const xf=window.__FIREBASE_CONFIG__;(!xf||xf.apiKey.startsWith("REMPLACER"))&&console.warn("Configuration Firebase Web à compléter dans public/firebase-config.js");const rh=av(xf),Mr=i1(rh),xt=ek(rh);Uk(rh);async function mN(){return await XE()?fN(rh):null}const gN=window.__FIREBASE_VAPID_KEY__;function yN(){const[n,e]=Se.useState("login"),[t,i]=Se.useState(""),[o,l]=Se.useState(""),[h,f]=Se.useState(""),[g,y]=Se.useState(""),[w,S]=Se.useState(""),[A,F]=Se.useState(!1),[q,H]=Se.useState(""),[B,ae]=Se.useState(!1);function ue(k){const I=(k==null?void 0:k.code)||"";return I==="auth/invalid-credential"?"Adresse e-mail ou mot de passe incorrect.":I==="auth/email-already-in-use"?"Cette adresse e-mail possède déjà un compte.":I==="auth/weak-password"?"Le mot de passe doit contenir au moins 6 caractères.":I==="auth/invalid-email"?"L'adresse e-mail n'est pas valide.":I==="auth/network-request-failed"?"Problème de connexion Internet.":I==="auth/api-key-not-valid.-please-pass-a-valid-api-key."?"Configuration Firebase incorrecte. Recharge l'application.":I?`Erreur : ${I}`:"Une erreur est survenue."}async function ie(){await qS(Mr,t.trim(),o)}async function se(){const k=Number(g),I=Number(w);if(!h.trim())throw new Error("CODE_INVITATION_REQUIS");if(k<1||k>31||I<1||I>12)throw new Error("DATE_ANNIVERSAIRE_INVALIDE");const C=await $S(Mr,t.trim(),o);try{const x=Mo(Fr(xt,"members"),Sc("inviteCode","==",h.trim().toUpperCase()),Sc("claimed","==",!1)),O=await kp(x);if(O.empty)throw await wy(C.user),await lf(Mr),new Error("CODE_INVITATION_INVALIDE");const V=O.docs[0],P=V.data().role||"membre";await Zc(V.ref,{uid:C.user.uid,claimed:!0,email:t.trim(),birthdayDay:k,birthdayMonth:I}),await Pp(Ur(xt,"userRoles",C.user.uid),{role:P})}catch(x){if(Mr.currentUser)try{await wy(Mr.currentUser)}catch{await lf(Mr)}throw x}}async function xe(k){k.preventDefault(),H(""),ae(!0);try{n==="login"?await ie():await se()}catch(I){console.error("Erreur Firebase Auth :",I),(I==null?void 0:I.message)==="CODE_INVITATION_REQUIS"?H("Le code d'invitation est obligatoire."):(I==null?void 0:I.message)==="CODE_INVITATION_INVALIDE"?H("Code d'invitation invalide ou déjà utilisé."):(I==null?void 0:I.message)==="DATE_ANNIVERSAIRE_INVALIDE"?H("Jour ou mois d'anniversaire invalide."):H(ue(I))}finally{ae(!1)}}function $(k){e(k),H(""),l("")}return E.jsxs("main",{className:"auth-page",children:[E.jsx("div",{className:"auth-glow auth-glow-top"}),E.jsx("div",{className:"auth-glow auth-glow-bottom"}),E.jsxs("section",{className:`auth-panel ${n==="register"?"register-mode":""}`,children:[E.jsx("div",{className:"auth-logo-wrap",children:E.jsx("img",{className:"auth-logo",src:"/icons/icon-512.png",alt:"Chœur Lumina"})}),E.jsx("h1",{children:"Chœur Lumina"}),E.jsxs("p",{className:"auth-subtitle",children:["Une interface plus élégante pour chanter,",E.jsx("br",{}),"s'organiser et échanger."]}),E.jsxs("form",{className:"auth-form",onSubmit:xe,children:[n==="register"&&E.jsxs(E.Fragment,{children:[E.jsx("div",{className:"auth-field",children:E.jsx("input",{"aria-label":"Code d'invitation",placeholder:"Code d'invitation",value:h,onChange:k=>f(k.target.value),autoCapitalize:"characters",autoCorrect:"off",required:!0})}),E.jsxs("div",{className:"auth-birthday-grid",children:[E.jsx("div",{className:"auth-field",children:E.jsx("input",{"aria-label":"Jour de naissance",inputMode:"numeric",placeholder:"Jour de naissance",value:g,onChange:k=>y(k.target.value),required:!0})}),E.jsx("div",{className:"auth-field",children:E.jsx("input",{"aria-label":"Mois de naissance",inputMode:"numeric",placeholder:"Mois",value:w,onChange:k=>S(k.target.value),required:!0})})]})]}),E.jsx("div",{className:"auth-field",children:E.jsx("input",{"aria-label":"Email",placeholder:"Email",type:"email",autoComplete:"email",inputMode:"email",value:t,onChange:k=>i(k.target.value),required:!0})}),E.jsxs("div",{className:"auth-field auth-password-field",children:[E.jsx("input",{"aria-label":"Mot de passe",placeholder:"Mot de passe",type:A?"text":"password",autoComplete:n==="login"?"current-password":"new-password",value:o,onChange:k=>l(k.target.value),required:!0,minLength:6}),E.jsx("button",{className:"auth-eye",type:"button","aria-label":A?"Masquer le mot de passe":"Afficher le mot de passe",onClick:()=>F(k=>!k),children:A?E.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[E.jsx("path",{d:"m3 3 18 18"}),E.jsx("path",{d:"M10.6 10.7a2 2 0 0 0 2.7 2.7"}),E.jsx("path",{d:"M9.9 4.2A10.6 10.6 0 0 1 12 4c5.5 0 9 5.2 9 5.2a15.5 15.5 0 0 1-3 3.8"}),E.jsx("path",{d:"M6.6 6.6C4.2 8.1 3 10 3 10s3.5 5.2 9 5.2c1 0 1.9-.2 2.8-.5"})]}):E.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[E.jsx("path",{d:"M3 12s3.5-5 9-5 9 5 9 5-3.5 5-9 5-9-5-9-5Z"}),E.jsx("circle",{cx:"12",cy:"12",r:"2.5"})]})})]}),q&&E.jsx("p",{className:"auth-error",children:q}),E.jsx("button",{className:"auth-primary-button",type:"submit",disabled:B,children:B?"Patiente...":n==="login"?"Se connecter":"Créer mon compte"})]}),n==="login"?E.jsx("button",{type:"button",className:"auth-switch-link",onClick:()=>$("register"),children:"J'ai un code d'invitation, créer mon compte"}):E.jsxs(E.Fragment,{children:[E.jsx("p",{className:"auth-help",children:"Le code d'invitation est fourni par un administrateur du Chœur Lumina."}),E.jsx("button",{type:"button",className:"auth-switch-link",onClick:()=>$("login"),children:"J'ai déjà un compte, me connecter"})]})]})]})}function W_({member:n,nextEvent:e,songs:t,onOpen:i}){var o;return E.jsxs("section",{className:"screen home-screen",children:[E.jsxs("div",{className:"welcome-row",children:[E.jsxs("div",{className:"brand-inline",children:[E.jsx("img",{src:"/icons/icon-192.png",alt:"Logo"}),E.jsxs("div",{children:[E.jsx("span",{children:"Chœur Lumina"}),E.jsxs("h1",{children:["Bonjour ",(n==null?void 0:n.prenom)||""]})]})]}),E.jsx("span",{className:"wave",children:"👋"})]}),E.jsx("p",{className:"welcome-copy",children:"Retrouve rapidement tes chants, ton agenda et les échanges du chœur."}),(n==null?void 0:n.pupitre)&&E.jsxs("span",{className:"gold-chip",children:["Pupitre : ",n.pupitre]}),E.jsxs("div",{className:"shortcut-grid",children:[E.jsxs("button",{onClick:()=>i("songs"),children:["♫",E.jsx("span",{children:"Répertoire"})]}),E.jsxs("button",{onClick:()=>i("agenda"),children:["▣",E.jsx("span",{children:"Agenda"})]}),E.jsxs("button",{onClick:()=>i("messages"),children:["✉",E.jsx("span",{children:"Messages"})]})]}),E.jsxs("article",{className:"card",children:[E.jsx("h2",{children:"Prochain événement"}),e?E.jsxs(E.Fragment,{children:[E.jsx("span",{className:`event-chip ${e.cancelled?"cancelled":""}`,children:e.cancelled?"Annulé":e.type}),E.jsx("h3",{children:e.titre}),E.jsx("p",{children:(o=e.date)==null?void 0:o.toDate().toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"})}),e.lieu&&E.jsx("small",{children:e.lieu})]}):E.jsx("p",{children:"Aucun événement à venir."})]}),E.jsxs("article",{className:"card",children:[E.jsx("h2",{children:"Derniers chants ajoutés"}),t.slice(0,4).map(l=>E.jsxs("div",{className:"list-row",children:[E.jsxs("div",{children:[E.jsx("strong",{children:l.titre}),E.jsx("small",{children:l.compositeur})]}),E.jsx("span",{className:l.appris?"status-ok":"status-work",children:l.appris?"Appris":"À travailler"})]},l.id))]})]})}function Al({title:n}){return E.jsxs("header",{className:"lumina-header",children:[E.jsx("img",{src:"/icons/icon-192.png",alt:"Logo Chœur Lumina"}),E.jsxs("div",{children:[E.jsx("span",{children:"Chœur Lumina"}),E.jsx("strong",{children:n})]})]})}function _N({events:n,memberId:e}){async function t(i,o){e&&await Zc(Ur(xt,"events",i.id),{[`reponses.${e}`]:o})}return E.jsxs(E.Fragment,{children:[E.jsx(Al,{title:"Agenda"}),E.jsxs("section",{className:"screen",children:[E.jsxs("div",{className:"intro-card",children:[E.jsx("h2",{children:"Planning du chœur"}),E.jsx("p",{children:"Répétitions, messes, réunions, concerts et anniversaires."})]}),E.jsx("div",{className:"compact-list",children:n.map(i=>{var h,f;const o=(h=i.date)==null?void 0:h.toDate(),l=e?(f=i.reponses)==null?void 0:f[e]:void 0;return E.jsxs("article",{className:`event-card ${i.cancelled?"event-cancelled":""}`,children:[E.jsxs("div",{className:"date-tile",children:[E.jsx("strong",{children:(o==null?void 0:o.getDate())??"--"}),E.jsx("span",{children:o==null?void 0:o.toLocaleDateString("fr-FR",{month:"short"}).toUpperCase()})]}),E.jsxs("div",{className:"event-main",children:[E.jsxs("div",{className:"event-topline",children:[E.jsx("span",{className:"event-chip",children:i.type}),i.cancelled&&E.jsx("span",{className:"danger-chip",children:"ANNULÉ"})]}),E.jsx("h3",{children:i.titre}),i.lieu&&E.jsx("small",{children:i.lieu}),!i.cancelled&&i.type!=="anniversaire"&&E.jsx("div",{className:"presence-actions",children:[["present","Présent"],["absent","Absent"],["peut-etre","Peut-être"]].map(([g,y])=>E.jsx("button",{disabled:!e,className:l===g?"selected":"",onClick:()=>t(i,g),children:y},g))})]})]},i.id)})})]})]})}const vN=[["soprano","Soprano"],["alto","Alto"],["tenor","Ténor"],["basse","Basse"]];function wN({songs:n}){const[e,t]=Se.useState(null);return E.jsxs(E.Fragment,{children:[E.jsx(Al,{title:"Bibliothèque"}),E.jsxs("section",{className:"screen",children:[E.jsxs("div",{className:"intro-card",children:[E.jsx("h2",{children:"Bibliothèque musicale"}),E.jsx("p",{children:"Partitions, vidéos et audios par pupitre."})]}),E.jsx("div",{className:"compact-list",children:n.map(i=>{const o=Object.values(i.audioUrlsByPupitre||{}).filter(Boolean).length,l=e===i.id;return E.jsxs("article",{className:"song-card",children:[E.jsxs("div",{className:"song-summary",onClick:()=>t(l?null:i.id),children:[E.jsxs("div",{children:[E.jsx("h3",{children:i.titre}),E.jsx("small",{children:i.compositeur}),E.jsxs("p",{children:[i.partitionUrl?"Partition ✓":"Sans partition"," · ",o," audio",o>1?"s":""]})]}),E.jsx("span",{className:i.appris?"status-ok":"status-work",children:i.appris?"Appris":"À travailler"})]}),l&&E.jsxs("div",{className:"song-details",children:[E.jsxs("div",{className:"resource-row",children:[i.partitionUrl&&E.jsx("a",{href:i.partitionUrl,target:"_blank",rel:"noreferrer",children:"Partition"}),i.youtubeUrl&&E.jsx("a",{href:i.youtubeUrl,target:"_blank",rel:"noreferrer",children:"Vidéo"})]}),vN.map(([h,f])=>{var y;const g=(y=i.audioUrlsByPupitre)==null?void 0:y[h];return g?E.jsxs("div",{className:"audio-row",children:[E.jsx("span",{children:f}),E.jsx("audio",{controls:!0,preload:"metadata",src:g})]},h):null})]})]},i.id)})})]})]})}const EN=["👏","❤️","😂","🙏","🎶","🔥","😍","👍","🙌","✨","🎤","🎵"];function TN({uid:n,member:e}){const[t,i]=Se.useState([]),[o,l]=Se.useState(()=>localStorage.getItem("lumina_group_draft")||""),[h,f]=Se.useState(!1),g=Se.useRef(null);Se.useEffect(()=>{const S=Mo(Fr(xt,"groupChat"),Pf("timestamp","asc"));return sc(S,A=>{i(A.docs.map(F=>({id:F.id,...F.data()})))})},[]),Se.useEffect(()=>{localStorage.setItem("lumina_group_draft",o)},[o]),Se.useEffect(()=>{var S;(S=g.current)==null||S.scrollIntoView({behavior:"smooth"})},[t.length]);async function y(S="text",A=o){const F=A.trim();F&&(await SE(Fr(xt,"groupChat"),{authorUid:n,authorName:(e==null?void 0:e.prenom)||"Choriste",texte:F,type:S,mediaUrl:"",durationMs:0,timestamp:Np(),editedAt:null,deleted:!1,readBy:[n],hiddenFor:[],reactions:{},replyToId:"",replyToText:"",replyToAuthor:""}),S==="text"&&(l(""),localStorage.removeItem("lumina_group_draft")))}const w=Se.useMemo(()=>t.filter(S=>!(S.hiddenFor||[]).includes(n)),[t,n]);return E.jsxs(E.Fragment,{children:[E.jsx(Al,{title:"Messages"}),E.jsxs("section",{className:"messages-screen",children:[E.jsxs("div",{className:"message-tabs",children:[E.jsx("button",{className:"active",children:"Groupe"}),E.jsxs("button",{disabled:!0,children:["Privé ",E.jsx("small",{children:"à compléter"})]})]}),E.jsxs("div",{className:"messages-list",children:[w.map(S=>{var F;const A=S.authorUid===n;return E.jsx("div",{className:`message-line ${A?"mine":""}`,children:E.jsxs("div",{className:`bubble ${S.type==="event_cancelled"?"alert-bubble":""}`,children:[!A&&E.jsx("strong",{children:S.authorName}),S.type==="sticker"?E.jsx("span",{className:"sticker-message",children:S.texte}):E.jsx("p",{children:S.deleted?"Message supprimé":S.texte}),E.jsx("small",{children:(F=S.timestamp)==null?void 0:F.toDate().toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})})]})},S.id)}),E.jsx("div",{ref:g})]}),h&&E.jsx("div",{className:"sticker-tray",children:EN.map(S=>E.jsx("button",{onClick:()=>y("sticker",S),children:S},S))}),E.jsxs("div",{className:"composer",children:[E.jsx("button",{onClick:()=>f(S=>!S),children:"☺"}),E.jsx("textarea",{value:o,onChange:S=>l(S.target.value),placeholder:"Message",rows:1,autoCapitalize:"sentences"}),E.jsx("button",{className:"send-button",onClick:()=>y(),children:"➤"})]})]})]})}function IN({members:n}){const e=n.reduce((t,i)=>{const o=i.pupitre||"Autres";return t[o]||(t[o]=[]),t[o].push(i),t},{});return E.jsxs(E.Fragment,{children:[E.jsx(Al,{title:"Trombinoscope"}),E.jsx("section",{className:"screen",children:Object.entries(e).map(([t,i])=>E.jsxs("div",{className:"voice-section",children:[E.jsx("h2",{children:t}),E.jsx("div",{className:"member-grid",children:i.map(o=>{var l,h;return E.jsxs("article",{className:"member-card",children:[o.photoUrl?E.jsx("img",{src:o.photoUrl,alt:`${o.prenom} ${o.nom}`}):E.jsxs("div",{className:"avatar",children:[(l=o.prenom)==null?void 0:l[0],(h=o.nom)==null?void 0:h[0]]}),E.jsx("strong",{children:o.prenom}),E.jsx("small",{children:o.nom})]},o.id)})})]},t))})]})}async function SN(){var l;if(!("Notification"in window)||await Notification.requestPermission()!=="granted")return null;const e=await mN();if(!e)return null;const t=await navigator.serviceWorker.register("/firebase-messaging-sw.js"),i=await pN(e,{vapidKey:gN,serviceWorkerRegistration:t}),o=(l=Mr.currentUser)==null?void 0:l.uid;if(o&&i){const f=(await kp(Mo(Fr(xt,"members"),Sc("uid","==",o)))).docs[0];f&&await Pp(Ur(xt,"members",f.id,"notificationTokens",i.slice(-24)),{token:i,platform:"web",updatedAt:Np()},{merge:!0})}return i}function AN({member:n,onRefresh:e,onOpenAdmin:t}){var S;const[i,o]=Se.useState(String((n==null?void 0:n.birthdayDay)||"")),[l,h]=Se.useState(String((n==null?void 0:n.birthdayMonth)||"")),[f,g]=Se.useState("");async function y(){if(!n)return;const A=Number(i),F=Number(l);if(A<1||A>31||F<1||F>12){g("Jour ou mois invalide.");return}await Zc(Ur(xt,"members",n.id),{birthdayDay:A,birthdayMonth:F}),g("Date d'anniversaire enregistrée."),await e()}async function w(){const A=await SN();g(A?"Notifications activées sur cet appareil.":"Notifications non activées.")}return E.jsxs(E.Fragment,{children:[E.jsx(Al,{title:"Profil"}),E.jsxs("section",{className:"screen",children:[E.jsxs("article",{className:"profile-card",children:[E.jsx("div",{className:"big-avatar",children:n!=null&&n.photoUrl?E.jsx("img",{src:n.photoUrl,alt:""}):(S=n==null?void 0:n.prenom)==null?void 0:S[0]}),E.jsxs("h2",{children:[n==null?void 0:n.prenom," ",n==null?void 0:n.nom]}),E.jsx("span",{children:n==null?void 0:n.pupitre})]}),E.jsxs("article",{className:"card",children:[E.jsx("h2",{children:"Mes informations"}),E.jsxs("p",{children:[E.jsx("strong",{children:"E-mail"}),E.jsx("br",{}),n==null?void 0:n.email]}),E.jsxs("p",{children:[E.jsx("strong",{children:"Rôle"}),E.jsx("br",{}),n==null?void 0:n.role]})]}),E.jsxs("article",{className:"card",children:[E.jsx("h2",{children:"Mon anniversaire"}),E.jsxs("div",{className:"birthday-fields",children:[E.jsxs("label",{children:["Jour",E.jsx("input",{inputMode:"numeric",value:i,onChange:A=>o(A.target.value)})]}),E.jsxs("label",{children:["Mois",E.jsx("input",{inputMode:"numeric",value:l,onChange:A=>h(A.target.value)})]})]}),E.jsx("button",{className:"secondary-button",onClick:y,children:"Enregistrer"})]}),E.jsxs("article",{className:"card",children:[E.jsx("h2",{children:"Notifications"}),E.jsx("p",{children:"Sur iPhone, ajoute d'abord l'application à l'écran d'accueil, puis active les notifications ici."}),E.jsx("button",{className:"secondary-button",onClick:w,children:"Activer les notifications"})]}),(n==null?void 0:n.role)==="admin"&&E.jsxs("button",{className:"profile-admin-button",type:"button",onClick:t,children:[E.jsx("span",{className:"profile-admin-icon","aria-hidden":"true",children:E.jsxs("svg",{viewBox:"0 0 24 24",children:[E.jsx("path",{d:"M12 3 4.5 6v5.5c0 4.6 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.9 7.5-9.5V6Z"}),E.jsx("path",{d:"M9 12h6M12 9v6"})]})}),E.jsxs("span",{children:[E.jsx("strong",{children:"Administration"}),E.jsx("small",{children:"Gérer les choristes et les présences"})]}),E.jsx("svg",{className:"profile-admin-chevron",viewBox:"0 0 24 24","aria-hidden":"true",children:E.jsx("path",{d:"m9 18 6-6-6-6"})})]}),f&&E.jsx("p",{className:"notice",children:f}),E.jsx("button",{className:"logout-button",onClick:()=>lf(Mr),children:"Se déconnecter"})]})]})}const RN=["Soprano","Alto","Ténor","Basse"];function Df(){const n="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="";for(let t=0;t<8;t+=1)e+=n[Math.floor(Math.random()*n.length)];return e}function K_(){return{prenom:"",nom:"",pupitre:"Soprano",role:"membre",inviteCode:Df(),claimed:!1,uid:""}}function CN(n){return n==="admin"?"Admin":n==="contributeur"?"Contributeur":"Membre"}function kN(n){return n==="present"?"Présent":n==="absent"?"Absent":n==="peut-etre"?"Peut-être":"Pas de réponse"}function PN(n){return n==="present"?"present":n==="absent"?"absent":n==="peut-etre"?"maybe":"none"}function NN(){return E.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[E.jsx("path",{d:"M12 20h9"}),E.jsx("path",{d:"M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"})]})}function xN(){return E.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[E.jsx("path",{d:"M3 6h18"}),E.jsx("path",{d:"M8 6V4h8v2"}),E.jsx("path",{d:"M19 6l-1 14H6L5 6"}),E.jsx("path",{d:"M10 11v5M14 11v5"})]})}function DN(){return E.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[E.jsx("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),E.jsx("path",{d:"M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3"})]})}function ON({members:n,events:e,onBack:t}){const[i,o]=Se.useState(""),[l,h]=Se.useState(!1),[f,g]=Se.useState(!1),[y,w]=Se.useState(K_()),[S,A]=Se.useState(!1),[F,q]=Se.useState(""),H=Se.useMemo(()=>[...n].sort(($,k)=>`${$.prenom} ${$.nom}`.localeCompare(`${k.prenom} ${k.nom}`,"fr")),[n]),B=Se.useMemo(()=>e.filter($=>$.type!=="anniversaire"&&!$.id.startsWith("birthday_")).sort(($,k)=>{var I,C,x,O;return(((C=(I=k.date)==null?void 0:I.toDate)==null?void 0:C.call(I).getTime())||0)-(((O=(x=$.date)==null?void 0:x.toDate)==null?void 0:O.call(x).getTime())||0)}),[e]);function ae(){o(""),w(K_()),h(!0)}function ue($){o(""),w({id:$.id,prenom:$.prenom||"",nom:$.nom||"",pupitre:$.pupitre||"Soprano",role:$.role||"membre",inviteCode:$.inviteCode||Df(),claimed:!!($.claimed||$.uid),uid:$.uid||""}),h(!0)}async function ie($){if($.preventDefault(),!(!y.prenom.trim()||!y.nom.trim())){A(!0),o("");try{if(y.id)await Zc(Ur(xt,"members",y.id),{prenom:y.prenom.trim(),nom:y.nom.trim(),pupitre:y.pupitre,role:y.role,...y.claimed?{}:{inviteCode:y.inviteCode.trim().toUpperCase()}}),y.uid&&await Pp(Ur(xt,"userRoles",y.uid),{role:y.role},{merge:!0}),o("Choriste modifié.");else{await SE(Fr(xt,"members"),{prenom:y.prenom.trim(),nom:y.nom.trim(),pupitre:y.pupitre,role:y.role,inviteCode:y.inviteCode.trim().toUpperCase(),claimed:!1,uid:"",email:"",createdAt:Np()});const k=y.inviteCode.trim().toUpperCase();q(k),o("Choriste ajouté.")}h(!1)}catch(k){console.error(k),o("Une erreur est survenue pendant l'enregistrement.")}finally{A(!1)}}}async function se($){if(window.confirm(`Supprimer la fiche de ${$.prenom} ${$.nom} ?

Le compte de connexion Firebase Authentication, s'il existe, ne sera pas supprimé.`))try{await x_(Ur(xt,"members",$.id)),$.uid&&await x_(Ur(xt,"userRoles",$.uid)),o("Fiche du choriste supprimée.")}catch(I){console.error(I),o("Impossible de supprimer cette fiche.")}}async function xe($){if($)try{await navigator.clipboard.writeText($),o("Code d'invitation copié.")}catch{o(`Code d'invitation : ${$}`)}}return E.jsxs(E.Fragment,{children:[E.jsxs("header",{className:"admin-topbar",children:[E.jsx("button",{type:"button",className:"admin-back-button",onClick:t,"aria-label":"Retour au profil",children:E.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:E.jsx("path",{d:"m15 18-6-6 6-6"})})}),E.jsx("strong",{children:"Administration"}),E.jsx("span",{className:"admin-topbar-spacer"})]}),E.jsxs("section",{className:"screen admin-screen android-admin-layout",children:[E.jsxs("button",{className:"presence-overview-button",type:"button",onClick:()=>g(!0),children:[E.jsx("span",{className:"presence-button-icon","aria-hidden":"true",children:E.jsxs("svg",{viewBox:"0 0 24 24",children:[E.jsx("path",{d:"M8 7h8M8 11h8M8 15h5"}),E.jsx("rect",{x:"4",y:"3",width:"16",height:"18",rx:"3"})]})}),E.jsxs("span",{children:[E.jsx("strong",{children:"Voir les réponses aux présences"}),E.jsx("small",{children:"Consulter les réponses des choristes par événement"})]}),E.jsx("svg",{className:"presence-chevron",viewBox:"0 0 24 24","aria-hidden":"true",children:E.jsx("path",{d:"m9 18 6-6-6-6"})})]}),i&&E.jsx("p",{className:"admin-notice",children:i}),E.jsx("div",{className:"admin-members-heading",children:E.jsxs("div",{children:[E.jsx("span",{className:"admin-kicker-simple",children:"GESTION DES CHORISTES"}),E.jsxs("h1",{children:[n.length," choriste",n.length>1?"s":""," enregistré",n.length>1?"s":""]})]})}),E.jsx("div",{className:"android-member-list",children:H.map($=>{var k,I;return E.jsxs("article",{className:"android-member-card",children:[E.jsxs("div",{className:"android-member-card-top",children:[E.jsxs("div",{className:"android-member-identity",children:[E.jsxs("div",{className:"admin-member-avatar","aria-hidden":"true",children:[(((k=$.prenom)==null?void 0:k[0])||"?").toUpperCase(),(((I=$.nom)==null?void 0:I[0])||"").toUpperCase()]}),E.jsxs("div",{children:[E.jsxs("h2",{children:[$.prenom," ",$.nom]}),E.jsxs("p",{children:[$.pupitre," ",E.jsx("span",{children:"·"})," ",CN($.role)]})]})]}),E.jsxs("div",{className:"android-member-actions",children:[E.jsx("button",{type:"button",onClick:()=>ue($),"aria-label":`Modifier ${$.prenom} ${$.nom}`,children:E.jsx(NN,{})}),E.jsx("button",{className:"danger",type:"button",onClick:()=>se($),"aria-label":`Supprimer ${$.prenom} ${$.nom}`,children:E.jsx(xN,{})})]})]}),E.jsx("div",{className:"android-member-status-row",children:$.claimed||$.uid?E.jsxs("span",{className:"account-state active",children:[E.jsx("i",{})," Compte actif"]}):E.jsxs("div",{className:"invitation-state",children:[E.jsxs("span",{className:"account-state pending",children:[E.jsx("i",{})," En attente"]}),E.jsxs("span",{className:"invite-code-label",children:["Code : ",E.jsx("strong",{children:$.inviteCode||"—"})]}),$.inviteCode&&E.jsx("button",{type:"button",className:"copy-code-button",onClick:()=>xe($.inviteCode),"aria-label":"Copier le code d'invitation",children:E.jsx(DN,{})})]})})]},$.id)})}),E.jsx("button",{className:"admin-fab",type:"button",onClick:ae,"aria-label":"Ajouter un choriste",children:"+"})]}),l&&E.jsx("div",{className:"admin-modal-backdrop",role:"presentation",onMouseDown:()=>!S&&h(!1),children:E.jsxs("section",{className:"admin-modal",role:"dialog","aria-modal":"true","aria-labelledby":"member-dialog-title",onMouseDown:$=>$.stopPropagation(),children:[E.jsxs("div",{className:"admin-modal-head",children:[E.jsxs("div",{children:[E.jsx("span",{className:"admin-kicker-simple",children:y.id?"MODIFICATION":"NOUVEAU MEMBRE"}),E.jsx("h2",{id:"member-dialog-title",children:y.id?"Modifier le choriste":"Nouveau choriste"})]}),E.jsx("button",{type:"button",className:"admin-modal-close",onClick:()=>h(!1),"aria-label":"Fermer",children:"×"})]}),E.jsxs("form",{className:"android-admin-form",onSubmit:ie,children:[E.jsxs("div",{className:"admin-two-cols",children:[E.jsxs("label",{children:["Prénom",E.jsx("input",{value:y.prenom,onChange:$=>w({...y,prenom:$.target.value}),required:!0})]}),E.jsxs("label",{children:["Nom",E.jsx("input",{value:y.nom,onChange:$=>w({...y,nom:$.target.value}),required:!0})]})]}),E.jsxs("div",{className:"admin-two-cols",children:[E.jsxs("label",{children:["Pupitre",E.jsx("select",{value:y.pupitre,onChange:$=>w({...y,pupitre:$.target.value}),children:RN.map($=>E.jsx("option",{children:$},$))})]}),E.jsxs("label",{children:["Rôle",E.jsxs("select",{value:y.role,onChange:$=>w({...y,role:$.target.value}),children:[E.jsx("option",{value:"membre",children:"Membre"}),E.jsx("option",{value:"contributeur",children:"Contributeur"}),E.jsx("option",{value:"admin",children:"Admin"})]})]})]}),!y.claimed&&E.jsxs("label",{children:["Code d'invitation",E.jsxs("div",{className:"admin-invite-editor",children:[E.jsx("input",{value:y.inviteCode,onChange:$=>w({...y,inviteCode:$.target.value.toUpperCase()}),required:!0}),E.jsx("button",{type:"button",onClick:()=>w({...y,inviteCode:Df()}),children:y.id?"Régénérer":"Générer"})]})]}),!y.id&&E.jsx("p",{className:"admin-form-hint",children:"Un code d'invitation est généré automatiquement pour la création du compte."}),E.jsxs("div",{className:"admin-modal-actions",children:[E.jsx("button",{type:"button",className:"admin-cancel-button",onClick:()=>h(!1),children:"Annuler"}),E.jsx("button",{type:"submit",className:"admin-save-button",disabled:S,children:S?"Enregistrement...":y.id?"Enregistrer":"Créer"})]})]})]})}),F&&E.jsx("div",{className:"admin-modal-backdrop",role:"presentation",onMouseDown:()=>q(""),children:E.jsxs("section",{className:"admin-modal invite-success-modal",role:"dialog","aria-modal":"true","aria-labelledby":"invite-success-title",onMouseDown:$=>$.stopPropagation(),children:[E.jsx("div",{className:"invite-success-icon","aria-hidden":"true",children:"✓"}),E.jsx("h2",{id:"invite-success-title",children:"Choriste ajouté !"}),E.jsx("p",{children:"Transmets ce code au choriste pour qu'il crée son compte :"}),E.jsx("strong",{className:"invite-success-code",children:F}),E.jsxs("div",{className:"admin-modal-actions invite-success-actions",children:[E.jsx("button",{type:"button",className:"admin-cancel-button",onClick:()=>xe(F),children:"Copier"}),E.jsx("button",{type:"button",className:"admin-save-button",onClick:()=>q(""),children:"Fermer"})]})]})}),f&&E.jsx("div",{className:"admin-modal-backdrop",role:"presentation",onMouseDown:()=>g(!1),children:E.jsxs("section",{className:"admin-modal presence-modal",role:"dialog","aria-modal":"true","aria-labelledby":"presence-dialog-title",onMouseDown:$=>$.stopPropagation(),children:[E.jsxs("div",{className:"admin-modal-head",children:[E.jsxs("div",{children:[E.jsx("span",{className:"admin-kicker-simple",children:"SUIVI DES ÉVÉNEMENTS"}),E.jsx("h2",{id:"presence-dialog-title",children:"Réponses aux présences"})]}),E.jsx("button",{type:"button",className:"admin-modal-close",onClick:()=>g(!1),"aria-label":"Fermer",children:"×"})]}),E.jsx("div",{className:"presence-event-list",children:B.length===0?E.jsx("p",{className:"presence-empty",children:"Aucun événement à afficher."}):B.map($=>{var I,C;const k=(C=(I=$.date)==null?void 0:I.toDate)==null?void 0:C.call(I);return E.jsxs("article",{className:"presence-event-card",children:[E.jsxs("div",{className:"presence-event-head",children:[E.jsxs("div",{children:[E.jsx("h3",{children:$.titre}),E.jsx("p",{children:k?k.toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"}):"Date non renseignée"})]}),E.jsx("span",{children:$.type})]}),E.jsx("div",{className:"presence-responses",children:H.map(x=>{var V;const O=(V=$.reponses)==null?void 0:V[x.id];return E.jsxs("div",{className:"presence-response-row",children:[E.jsxs("span",{children:[x.prenom," ",x.nom]}),E.jsx("strong",{className:`presence-response ${PN(O)}`,children:kN(O)})]},x.id)})})]},$.id)})})]})})]})}const VN=[{id:"home",label:"Accueil",icon:"⌂"},{id:"songs",label:"Chants",icon:"♫"},{id:"agenda",label:"Agenda",icon:"▣"},{id:"messages",label:"Msgs",icon:"✉"},{id:"members",label:"Trombi",icon:"◉"},{id:"profile",label:"Profil",icon:"☺"}];function bN({active:n,onChange:e,messageUnread:t,agendaUnread:i}){return E.jsx("nav",{className:"bottom-nav",children:VN.map(o=>{const l=o.id==="messages"&&t||o.id==="agenda"&&i;return E.jsxs("button",{className:n===o.id?"active":"",onClick:()=>e(o.id),children:[E.jsxs("span",{className:"nav-icon",children:[o.icon,l&&E.jsx("i",{className:"badge-dot"})]}),E.jsx("small",{children:o.label})]},o.id)})})}function MN(n){const e=n.birthdayDay||0,t=n.birthdayMonth||0;if(!e||!t)return null;const i=new Date;let o=i.getFullYear(),l=new Date(o,t-1,e,9,0,0,0);return l.getTime()<i.getTime()&&(o+=1,l=new Date(o,t-1,e,9,0,0,0)),{id:`birthday_${n.id}_${o}`,titre:`Anniversaire de ${n.prenom}`,type:"anniversaire",date:{toDate:()=>l},description:`🎂 Souhaitons un joyeux anniversaire à ${n.prenom} !`}}function LN(){const[n,e]=Se.useState(null),[t,i]=Se.useState(null),[o,l]=Se.useState([]),[h,f]=Se.useState([]),[g,y]=Se.useState([]),[w,S]=Se.useState("home");async function A(B){const ue=(await kp(Mo(Fr(xt,"members"),Sc("uid","==",B)))).docs[0];i(ue?{id:ue.id,...ue.data()}:null)}Se.useEffect(()=>KS(Mr,B=>{e(B),B?A(B.uid):i(null)}),[]),Se.useEffect(()=>{if(!n)return;const B=sc(Fr(xt,"members"),ie=>{l(ie.docs.map(se=>({id:se.id,...se.data()})))}),ae=sc(Mo(Fr(xt,"events"),Pf("date","asc")),ie=>{f(ie.docs.map(se=>({id:se.id,...se.data()})))}),ue=sc(Mo(Fr(xt,"songs"),Pf("titre","asc")),ie=>{y(ie.docs.map(se=>({id:se.id,...se.data()})))});return()=>{B(),ae(),ue()}},[n]);const F=Se.useMemo(()=>{const B=o.map(MN).filter(ae=>!!ae);return[...h,...B].sort((ae,ue)=>{var ie,se;return(((ie=ae.date)==null?void 0:ie.toDate().getTime())||0)-(((se=ue.date)==null?void 0:se.toDate().getTime())||0)})},[h,o]),q=F.find(B=>{var ae;return(((ae=B.date)==null?void 0:ae.toDate().getTime())||0)>=Date.now()})||null;if(!n)return E.jsx(yN,{});let H;switch(w){case"songs":H=E.jsx(wN,{songs:g});break;case"agenda":H=E.jsx(_N,{events:F,memberId:(t==null?void 0:t.id)||""});break;case"messages":H=E.jsx(TN,{uid:n.uid,member:t});break;case"members":H=E.jsx(IN,{members:o});break;case"admin":H=(t==null?void 0:t.role)==="admin"?E.jsx(ON,{members:o,events:h,onBack:()=>S("profile")}):E.jsx(W_,{member:t,nextEvent:q,songs:g,onOpen:S});break;case"profile":H=E.jsx(AN,{member:t,onRefresh:()=>A(n.uid),onOpenAdmin:()=>S("admin")});break;default:H=E.jsx(W_,{member:t,nextEvent:q,songs:g,onOpen:S})}return E.jsxs("div",{className:"app-shell",children:[E.jsx("main",{className:"content",children:H}),E.jsx(bN,{active:w,onChange:S,messageUnread:!1,agendaUnread:!1})]})}d0.createRoot(document.getElementById("root")).render(E.jsx(s0.StrictMode,{children:E.jsx(LN,{})}));
